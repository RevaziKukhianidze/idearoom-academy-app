import { useState, useEffect, useCallback } from "react";
import supabase from "../app/services/supabase";
import { getBlogs, getBlogsLimited } from "../app/services/apiBlogs";

export const useBlogRealtime = (initialBlogs = [], isLimited = false) => {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [pendingChanges, setPendingChanges] = useState(false);

  // Update blogs when initialBlogs changes (but avoid overriding fresh data)
  useEffect(() => {
    if (
      initialBlogs &&
      Array.isArray(initialBlogs) &&
      initialBlogs.length > 0
    ) {
      console.log(
        `📥 Checking initial blogs (${isLimited ? "limited" : "all"}):`,
        initialBlogs.length
      );

      // Only set initial blogs if current blogs are empty or if we have more recent data
      setBlogs((currentBlogs) => {
        if (!currentBlogs || currentBlogs.length === 0) {
          console.log(
            `📥 Setting initial blogs (empty state):`,
            initialBlogs.length
          );
          return initialBlogs;
        }

        // Compare timestamps or IDs to avoid overriding newer data with older cache
        const initialIds = new Set(initialBlogs.map((b) => b.id));
        const currentIds = new Set(currentBlogs.map((b) => b.id));

        // If we have different blog sets, use the most complete one
        if (initialIds.size !== currentIds.size) {
          const hasNewBlogs = initialBlogs.some(
            (blog) => !currentIds.has(blog.id)
          );
          const hasMissingBlogs = currentBlogs.some(
            (blog) => !initialIds.has(blog.id)
          );

          if (hasNewBlogs && !hasMissingBlogs) {
            console.log(
              `📥 Using initial blogs (has new blogs):`,
              initialBlogs.length
            );
            return initialBlogs;
          } else if (hasMissingBlogs && !hasNewBlogs) {
            console.log(
              `📥 Keeping current blogs (has newer blogs):`,
              currentBlogs.length
            );
            return currentBlogs;
          }
        }

        console.log(
          `📥 Keeping current blogs (no significant changes):`,
          currentBlogs.length
        );
        return currentBlogs;
      });
    }
  }, [initialBlogs, isLimited]);

  // Refresh function
  const refreshBlogs = useCallback(async () => {
    try {
      console.log(`🔄 Refreshing ${isLimited ? "limited" : "all"} blogs...`);
      setIsLoading(true);

      // Clear browser cache first
      if (typeof window !== "undefined") {
        // Force browser to ignore cache
        const timestamp = Date.now();
        console.log(`🧹 Cache busting with timestamp: ${timestamp}`);
      }

      const freshBlogs = isLimited ? await getBlogsLimited() : await getBlogs();

      if (freshBlogs && Array.isArray(freshBlogs)) {
        setBlogs(freshBlogs);
        setLastUpdate(Date.now());
        console.log(
          `✅ ${isLimited ? "Limited" : "All"} blogs refreshed. Count:`,
          freshBlogs.length
        );

        // Clear browser cache after successful refresh
        if (typeof window !== "undefined") {
          try {
            // Clear any Next.js cache entries
            if ("caches" in window) {
              caches.keys().then((names) => {
                names.forEach((name) => {
                  if (name.includes("blog") || name.includes("api")) {
                    caches.delete(name);
                    console.log(`🗑️ Cleared cache: ${name}`);
                  }
                });
              });
            }
          } catch (e) {
            console.warn("⚠️ Could not clear browser cache:", e);
          }
        }
      } else {
        console.warn(
          `⚠️ No fresh blogs received (${isLimited ? "limited" : "all"})`
        );
      }
    } catch (error) {
      console.error("❌ Blog refresh error:", error);
    } finally {
      setIsLoading(false);
    }
  }, [isLimited]);

  // Auto-refresh if blogs are empty and we have not loaded yet
  useEffect(() => {
    if (!blogs || blogs.length === 0) {
      const timer = setTimeout(() => {
        console.log(
          `⏰ Auto-refreshing empty blogs (${isLimited ? "limited" : "all"})`
        );
        refreshBlogs();
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [blogs, refreshBlogs, isLimited]);

  // Force cache clear function
  const clearBlogCache = useCallback(() => {
    console.log(`🧹 Clearing blog cache (${isLimited ? "limited" : "all"})`);
    // Clear any potential caching in browser storage
    try {
      if (typeof window !== "undefined") {
        const cacheKeys = Object.keys(localStorage).filter(
          (key) =>
            key.includes("blog") ||
            key.includes("supabase") ||
            key.includes("academy")
        );
        cacheKeys.forEach((key) => {
          localStorage.removeItem(key);
          console.log(`🗑️ Cleared cache key: ${key}`);
        });
      }
    } catch (error) {
      console.warn("⚠️ Could not clear localStorage:", error);
    }
  }, [isLimited]);

  // Real-time subscription
  useEffect(() => {
    const channelName = isLimited ? "blog-home-updates" : "blog-list-updates";
    console.log(`🔔 Setting up real-time subscription: ${channelName}`);

    const subscription = supabase
      .channel(channelName)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "blogs",
        },
        async (payload) => {
          console.log(
            `🚀 Real-time update received (${channelName}):`,
            payload
          );

          if (payload.eventType === "INSERT" && payload.new) {
            console.log(`➕ Blog INSERT (${channelName}):`, payload.new.title);

            // Set pending changes to prevent flickering
            setPendingChanges(true);

            // Clear cache first
            clearBlogCache();

            if (isLimited) {
              // For limited blogs, always refresh to ensure consistent ordering
              console.log(`♻️ Refreshing limited blogs after insert`);
              setTimeout(() => {
                refreshBlogs();
                setTimeout(() => setPendingChanges(false), 300);
              }, 200);
            } else {
              // For full list, add new blog to top smoothly
              setBlogs((prevBlogs) => {
                const exists = prevBlogs.some(
                  (blog) => blog.id === payload.new.id
                );
                if (exists) {
                  console.log(`⚠️ Blog already exists, no changes needed`);
                  setPendingChanges(false);
                  return prevBlogs;
                }

                const newBlogs = [payload.new, ...prevBlogs];
                console.log(`✅ Added new blog. Total: ${newBlogs.length}`);
                setTimeout(() => setPendingChanges(false), 300);
                return newBlogs;
              });
            }
            setLastUpdate(Date.now());
          } else if (payload.eventType === "UPDATE" && payload.new) {
            console.log(`📝 Blog UPDATE (${channelName}):`, payload.new.title);

            // Set pending changes to prevent flickering
            setPendingChanges(true);

            // Clear cache and refresh
            clearBlogCache();

            // Update existing blog smoothly
            setBlogs((prevBlogs) =>
              prevBlogs.map((blog) =>
                blog.id === payload.new.id
                  ? {
                      ...payload.new,
                      linkTag: Array.isArray(payload.new.linkTag)
                        ? payload.new.linkTag
                        : [],
                    }
                  : blog
              )
            );
            setLastUpdate(Date.now());

            // Clear pending state after smooth transition
            setTimeout(() => setPendingChanges(false), 300);
          } else if (payload.eventType === "DELETE" && payload.old) {
            console.log(`🗑️ Blog DELETE event (${channelName}):`, payload.old);

            // Set pending changes to prevent flickering during deletion
            setPendingChanges(true);

            // Clear cache first
            clearBlogCache();

            if (isLimited) {
              // For limited blogs, always refresh to get latest 3
              console.log(`♻️ Refreshing limited blogs after delete`);
              setTimeout(() => {
                refreshBlogs();
                setTimeout(() => setPendingChanges(false), 500);
              }, 300);
            } else {
              // For full list, remove deleted blog with smooth transition
              console.log(
                `🔍 Attempting to remove blog ID: ${payload.old.id} from list`
              );

              // Add a small delay to prevent immediate flickering
              setTimeout(() => {
                setBlogs((prevBlogs) => {
                  console.log(
                    `📊 Current blogs before delete:`,
                    prevBlogs.map((b) => ({ id: b.id, title: b.title }))
                  );

                  const filteredBlogs = prevBlogs.filter((blog) => {
                    // Multiple comparison methods to ensure deletion works
                    const blogId = blog.id;
                    const deleteId = payload.old.id;

                    const shouldKeep = !(
                      (
                        blogId === deleteId ||
                        String(blogId) === String(deleteId) ||
                        Number(blogId) === Number(deleteId) ||
                        blogId == deleteId
                      ) // loose equality
                    );

                    if (!shouldKeep) {
                      console.log(`🗑️ REMOVING blog (${channelName}):`, {
                        title: blog.title,
                        blogId: blogId,
                        deleteId: deleteId,
                        blogIdType: typeof blogId,
                        deleteIdType: typeof deleteId,
                      });
                    }

                    return shouldKeep;
                  });

                  console.log(
                    `📊 Blogs after delete:`,
                    filteredBlogs.map((b) => ({ id: b.id, title: b.title }))
                  );
                  console.log(
                    `📈 Blog count: ${prevBlogs.length} → ${filteredBlogs.length}`
                  );

                  return filteredBlogs;
                });

                // Clear pending state after smooth deletion
                setTimeout(() => setPendingChanges(false), 400);
              }, 200);
            }
            setLastUpdate(Date.now());
            console.log(
              `✅ Blog deletion processed (${channelName}):`,
              payload.old.id
            );
          }
        }
      )
      .subscribe((status) => {
        console.log(`📡 Subscription status (${channelName}):`, status);
      });

    return () => {
      console.log(`🔌 Cleaning up subscription: ${channelName}`);
      supabase.removeChannel(subscription);
    };
  }, [isLimited, refreshBlogs, clearBlogCache]);

  // Polling fallback - less aggressive to reduce flickering
  useEffect(() => {
    const interval = setInterval(async () => {
      // Skip polling if we have pending changes to avoid conflicts
      if (pendingChanges) {
        console.log(
          `⏸️ Skipping polling due to pending changes (${
            isLimited ? "limited" : "all"
          })`
        );
        return;
      }

      try {
        console.log(
          `🔄 Polling for ${isLimited ? "limited" : "all"} blog changes...`
        );
        const freshBlogs = isLimited
          ? await getBlogsLimited()
          : await getBlogs();

        if (freshBlogs && Array.isArray(freshBlogs)) {
          setBlogs((currentBlogs) => {
            // Quick length check - most important for deletions
            if (currentBlogs.length !== freshBlogs.length) {
              console.log(
                `🔄 Blog count changed via polling (${
                  isLimited ? "limited" : "all"
                }):`,
                currentBlogs.length,
                "→",
                freshBlogs.length
              );

              // If count decreased, it's likely a deletion
              if (currentBlogs.length > freshBlogs.length) {
                const deletedBlogs = currentBlogs.filter(
                  (current) =>
                    !freshBlogs.some((fresh) => fresh.id === current.id)
                );
                console.log(
                  `🗑️ Deleted blogs detected via polling:`,
                  deletedBlogs.map((b) => ({ id: b.id, title: b.title }))
                );
              }

              setLastUpdate(Date.now());
              return freshBlogs;
            }

            // ID comparison
            const currentIds = currentBlogs.map((b) => b.id).sort();
            const freshIds = freshBlogs.map((b) => b.id).sort();

            if (JSON.stringify(currentIds) !== JSON.stringify(freshIds)) {
              console.log(
                `🔄 Blog IDs changed via polling (${
                  isLimited ? "limited" : "all"
                })`
              );

              // Check for deleted IDs
              const deletedIds = currentIds.filter(
                (id) => !freshIds.includes(id)
              );
              if (deletedIds.length > 0) {
                console.log(`🗑️ Deleted blog IDs detected:`, deletedIds);
              }

              setLastUpdate(Date.now());
              return freshBlogs;
            }

            // Content comparison - less frequent to reduce flickering
            const hasContentChanges = currentBlogs.some((currentBlog) => {
              const freshBlog = freshBlogs.find(
                (fb) => fb.id === currentBlog.id
              );
              return (
                freshBlog &&
                (currentBlog.title !== freshBlog.title ||
                  currentBlog.text !== freshBlog.text ||
                  currentBlog.image !== freshBlog.image)
              );
            });

            if (hasContentChanges) {
              console.log(
                `🔄 Blog content changed via polling (${
                  isLimited ? "limited" : "all"
                })`
              );
              setLastUpdate(Date.now());
              return freshBlogs;
            }

            return currentBlogs;
          });
        }
      } catch (error) {
        console.error(
          `❌ Polling error (${isLimited ? "limited" : "all"}):`,
          error
        );
      }
    }, 5000); // 5 seconds - less aggressive to reduce flickering

    return () => {
      console.log(
        `🔌 Cleaning up polling interval (${isLimited ? "limited" : "all"})`
      );
      clearInterval(interval);
    };
  }, [isLimited, pendingChanges]);

  // Page visibility and focus handlers
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        console.log(
          `👁️ Page visible, refreshing ${
            isLimited ? "limited" : "all"
          } blogs...`
        );
        refreshBlogs();
      }
    };

    const handleFocus = () => {
      console.log(
        `🔍 Window focused, refreshing ${
          isLimited ? "limited" : "all"
        } blogs...`
      );
      refreshBlogs();
    };

    // Immediate refresh on route change (helpful for /blog page)
    const handleRouteChange = () => {
      console.log(
        `🛤️ Route changed, refreshing ${isLimited ? "limited" : "all"} blogs...`
      );
      setTimeout(() => refreshBlogs(), 500); // Small delay to ensure page is ready
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", handleFocus);
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [refreshBlogs, isLimited]);

  return {
    blogs,
    isLoading,
    lastUpdate,
    refreshBlogs,
    pendingChanges,
  };
};
