// Helper utility to force refresh pages after CRUD operations
export const forceRefreshAfterCRUD = () => {
  if (typeof window !== "undefined") {
    // Clear browser cache
    if ("caches" in window) {
      caches.keys().then((names) => {
        names.forEach((name) => {
          caches.delete(name);
        });
      });
    }

    // Force page refresh after short delay
    setTimeout(() => {
      window.location.reload(true);
    }, 300);
  }
};

// Helper to refresh specific routes
export const refreshRoutes = (routes = []) => {
  if (typeof window !== "undefined") {
    routes.forEach((route) => {
      // Force refresh by adding timestamp parameter
      const url = new URL(route, window.location.origin);
      url.searchParams.set("_refresh", Date.now());

      // Prefetch to update cache
      fetch(url.href, {
        method: "GET",
        cache: "no-store",
      }).catch(() => {
        // Ignore errors, this is just for cache refresh
      });
    });
  }
};
