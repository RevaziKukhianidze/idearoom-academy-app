// Cache management utilities

// Function to clear all cache via API
export async function clearAllCache() {
  try {
    const response = await fetch("/api/cache/clear", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (result.success) {
      console.log("Cache cleared successfully");
      // Force reload the page to get fresh data
      window.location.reload();
    } else {
      console.error("Failed to clear cache:", result.error);
    }

    return result;
  } catch (error) {
    console.error("Error clearing cache:", error);
    return { success: false, error: error.message };
  }
}

// Function to delete a course and clear cache
export async function deleteCourseWithCache(courseId) {
  try {
    const response = await fetch(`/api/courses/delete?id=${courseId}`, {
      method: "DELETE",
    });

    const result = await response.json();

    if (result.success) {
      console.log(`Course ${courseId} deleted successfully`);
      // Wait a moment then reload to show updated data
      setTimeout(() => {
        window.location.href = "/courses";
      }, 1000);
    } else {
      console.error("Failed to delete course:", result.error);
    }

    return result;
  } catch (error) {
    console.error("Error deleting course:", error);
    return { success: false, error: error.message };
  }
}

// Function to delete an offer and clear cache
export async function deleteOfferWithCache(offerId) {
  try {
    const response = await fetch(`/api/offers/delete?id=${offerId}`, {
      method: "DELETE",
    });

    const result = await response.json();

    if (result.success) {
      console.log(`Offer ${offerId} deleted successfully`);
      // Wait a moment then reload to show updated data
      setTimeout(() => {
        window.location.href = "/offer";
      }, 1000);
    } else {
      console.error("Failed to delete offer:", result.error);
    }

    return result;
  } catch (error) {
    console.error("Error deleting offer:", error);
    return { success: false, error: error.message };
  }
}

// Function to add a new course and clear cache
export async function addCourseWithCache(courseData) {
  try {
    const response = await fetch("/api/courses/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    });

    const result = await response.json();

    if (result.success) {
      console.log("Course added successfully");
      // Wait a moment then reload to show updated data
      setTimeout(() => {
        window.location.href = "/courses";
      }, 1000);
    } else {
      console.error("Failed to add course:", result.error);
    }

    return result;
  } catch (error) {
    console.error("Error adding course:", error);
    return { success: false, error: error.message };
  }
}

// Function to add a new offer and clear cache
export async function addOfferWithCache(offerData) {
  try {
    const response = await fetch("/api/offers/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(offerData),
    });

    const result = await response.json();

    if (result.success) {
      console.log("Offer added successfully");
      // Wait a moment then reload to show updated data
      setTimeout(() => {
        window.location.href = "/offer";
      }, 1000);
    } else {
      console.error("Failed to add offer:", result.error);
    }

    return result;
  } catch (error) {
    console.error("Error adding offer:", error);
    return { success: false, error: error.message };
  }
}

// Function to force refresh data without deleting
export function forceRefresh() {
  // Clear browser cache and reload
  if ("caches" in window) {
    caches.keys().then(function (names) {
      names.forEach(function (name) {
        caches.delete(name);
      });
    });
  }

  // Clear localStorage if needed
  localStorage.clear();

  // Force reload with cache bypass
  window.location.reload(true);
}
