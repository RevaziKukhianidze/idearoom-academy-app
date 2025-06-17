// linkTag CRUD Utility Functions
// ეს ფუნქციები გამოიყენება linkTag-ების მარტივი მართვისთვის

import {
  addLinkTags,
  deleteLinkTags,
  updateLinkTags,
  deleteAllLinkTags,
  getLinkTags,
} from "../app/services/apiBlogs";

/**
 * ახალი ტეგის დამატება ბლოგში
 * @param {number} blogId - ბლოგის ID
 * @param {string} tagName - ტეგის სახელი
 * @param {string} tagUrl - ტეგის URL
 * @param {string} follow - follow attribute (default: "nofollow noopener noreferrer")
 */
export async function addSingleTag(
  blogId,
  tagName,
  tagUrl,
  follow = "nofollow noopener noreferrer"
) {
  try {
    const newTag = {
      name: tagName,
      url: tagUrl,
      follow: follow,
    };

    const result = await addLinkTags(blogId, [newTag]);
    console.log(`✅ Tag "${tagName}" added successfully to blog ${blogId}`);
    return result;
  } catch (error) {
    console.error(`❌ Failed to add tag "${tagName}":`, error);
    throw error;
  }
}

/**
 * მრავალი ტეგის დამატება ერთდროულად
 * @param {number} blogId - ბლოგის ID
 * @param {Array} tags - ტეგების მასივი [{name, url, follow?}, ...]
 */
export async function addMultipleTags(blogId, tags) {
  try {
    const formattedTags = tags.map((tag) => ({
      name: tag.name,
      url: tag.url,
      follow: tag.follow || "nofollow noopener noreferrer",
    }));

    const result = await addLinkTags(blogId, formattedTags);
    console.log(
      `✅ ${formattedTags.length} tags added successfully to blog ${blogId}`
    );
    return result;
  } catch (error) {
    console.error(`❌ Failed to add multiple tags:`, error);
    throw error;
  }
}

/**
 * ტეგის წაშლა სახელის მიხედვით
 * @param {number} blogId - ბლოგის ID
 * @param {string} tagName - წასაშლელი ტეგის სახელი
 */
export async function deleteTagByName(blogId, tagName) {
  try {
    const result = await deleteLinkTags(blogId, { tagNames: [tagName] });
    console.log(`✅ Tag "${tagName}" deleted successfully from blog ${blogId}`);
    return result;
  } catch (error) {
    console.error(`❌ Failed to delete tag "${tagName}":`, error);
    throw error;
  }
}

/**
 * ტეგის წაშლა URL-ის მიხედვით
 * @param {number} blogId - ბლოგის ID
 * @param {string} tagUrl - წასაშლელი ტეგის URL
 */
export async function deleteTagByUrl(blogId, tagUrl) {
  try {
    const result = await deleteLinkTags(blogId, { tagUrls: [tagUrl] });
    console.log(
      `✅ Tag with URL "${tagUrl}" deleted successfully from blog ${blogId}`
    );
    return result;
  } catch (error) {
    console.error(`❌ Failed to delete tag with URL "${tagUrl}":`, error);
    throw error;
  }
}

/**
 * მრავალი ტეგის წაშლა სახელების მიხედვით
 * @param {number} blogId - ბლოგის ID
 * @param {Array} tagNames - წასაშლელი ტეგების სახელების მასივი
 */
export async function deleteMultipleTagsByName(blogId, tagNames) {
  try {
    const result = await deleteLinkTags(blogId, { tagNames });
    console.log(
      `✅ ${tagNames.length} tags deleted successfully from blog ${blogId}`
    );
    return result;
  } catch (error) {
    console.error(`❌ Failed to delete multiple tags:`, error);
    throw error;
  }
}

/**
 * ყველა ტეგის წაშლა
 * @param {number} blogId - ბლოგის ID
 */
export async function clearAllTags(blogId) {
  try {
    const result = await deleteAllLinkTags(blogId);
    console.log(`✅ All tags cleared from blog ${blogId}`);
    return result;
  } catch (error) {
    console.error(`❌ Failed to clear all tags from blog ${blogId}:`, error);
    throw error;
  }
}

/**
 * ტეგების სრული ჩანაცვლება
 * @param {number} blogId - ბლოგის ID
 * @param {Array} newTags - ახალი ტეგების მასივი
 */
export async function replaceAllTags(blogId, newTags) {
  try {
    const formattedTags = newTags.map((tag) => ({
      name: tag.name,
      url: tag.url,
      follow: tag.follow || "nofollow noopener noreferrer",
    }));

    const result = await updateLinkTags(blogId, formattedTags);
    console.log(`✅ All tags replaced successfully in blog ${blogId}`);
    return result;
  } catch (error) {
    console.error(`❌ Failed to replace tags in blog ${blogId}:`, error);
    throw error;
  }
}

/**
 * ტეგის განახლება (სახელის ან URL-ის შეცვლა)
 * @param {number} blogId - ბლოგის ID
 * @param {string} oldTagName - ძველი ტეგის სახელი
 * @param {Object} newTagData - ახალი ტეგის მონაცემები {name, url, follow?}
 */
export async function updateTag(blogId, oldTagName, newTagData) {
  try {
    // მივიღოთ მიმდინარე ტეგები
    const currentTags = await getLinkTags(blogId);

    // ვიპოვოთ და განვაახლოთ კონკრეტული ტეგი
    const updatedTags = currentTags.map((tag) => {
      if (tag.name === oldTagName) {
        return {
          name: newTagData.name || tag.name,
          url: newTagData.url || tag.url,
          follow:
            newTagData.follow || tag.follow || "nofollow noopener noreferrer",
        };
      }
      return tag;
    });

    const result = await updateLinkTags(blogId, updatedTags);
    console.log(
      `✅ Tag "${oldTagName}" updated successfully in blog ${blogId}`
    );
    return result;
  } catch (error) {
    console.error(`❌ Failed to update tag "${oldTagName}":`, error);
    throw error;
  }
}

/**
 * ტეგის არსებობის შემოწმება
 * @param {number} blogId - ბლოგის ID
 * @param {string} tagName - ტეგის სახელი
 * @returns {boolean} - true თუ ტეგი არსებობს
 */
export async function tagExists(blogId, tagName) {
  try {
    const tags = await getLinkTags(blogId);
    const exists = tags.some((tag) => tag.name === tagName);
    console.log(
      `🔍 Tag "${tagName}" ${
        exists ? "exists" : "does not exist"
      } in blog ${blogId}`
    );
    return exists;
  } catch (error) {
    console.error(`❌ Failed to check if tag "${tagName}" exists:`, error);
    return false;
  }
}

/**
 * ტეგების რაოდენობის მიღება
 * @param {number} blogId - ბლოგის ID
 * @returns {number} - ტეგების რაოდენობა
 */
export async function getTagCount(blogId) {
  try {
    const tags = await getLinkTags(blogId);
    const count = Array.isArray(tags) ? tags.length : 0;
    console.log(`📊 Blog ${blogId} has ${count} tags`);
    return count;
  } catch (error) {
    console.error(`❌ Failed to get tag count for blog ${blogId}:`, error);
    return 0;
  }
}

/**
 * ტეგების ფილტრაცია URL-ის მიხედვით
 * @param {number} blogId - ბლოგის ID
 * @param {string} urlPattern - URL-ის ნაწილი ან pattern
 * @returns {Array} - ფილტრირებული ტეგები
 */
export async function filterTagsByUrl(blogId, urlPattern) {
  try {
    const tags = await getLinkTags(blogId);
    const filtered = tags.filter((tag) => tag.url.includes(urlPattern));
    console.log(
      `🔍 Found ${filtered.length} tags matching URL pattern "${urlPattern}" in blog ${blogId}`
    );
    return filtered;
  } catch (error) {
    console.error(
      `❌ Failed to filter tags by URL pattern "${urlPattern}":`,
      error
    );
    return [];
  }
}

// Export all functions for easy import
export {
  addLinkTags,
  deleteLinkTags,
  updateLinkTags,
  deleteAllLinkTags,
  getLinkTags,
} from "../app/services/apiBlogs";
