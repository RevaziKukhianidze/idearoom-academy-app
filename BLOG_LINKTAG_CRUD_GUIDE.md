# ბლოგის LinkTag CRUD სისტემა

## მიმოხილვა

ახლა ბლოგის linkTag-ებს აქვთ სრული CRUD (Create, Read, Update, Delete) ფუნქციონალი, ისევე როგორც კურსებს და შეთავაზებებს. ეს ნიშნავს რომ linkTag-ები მუშაობენ როგორც დამოუკიდებელი ელემენტები სპეციალური API ენდპოინტებით.

## API ენდპოინტები

### 1. ტეგების დამატება

```http
POST /api/blogs/linkTag/add?blogId=123
Content-Type: application/json

{
  "linkTag": [
    {
      "name": "React",
      "url": "https://reactjs.org",
      "follow": "nofollow noopener noreferrer"
    },
    {
      "name": "Next.js",
      "url": "https://nextjs.org",
      "follow": "nofollow noopener noreferrer"
    }
  ]
}
```

### 2. ტეგების წაშლა

```http
DELETE /api/blogs/linkTag/delete?blogId=123
Content-Type: application/json

// სახელის მიხედვით წაშლა
{
  "tagNames": ["React", "Vue.js"]
}

// URL-ის მიხედვით წაშლა
{
  "tagUrls": ["https://reactjs.org", "https://vuejs.org"]
}

// ყველა ტეგის წაშლა
{
  "deleteAll": true
}
```

### 3. ტეგების განახლება (სრული ჩანაცვლება)

```http
PUT /api/blogs/linkTag/update?blogId=123
Content-Type: application/json

{
  "linkTag": [
    {
      "name": "TypeScript",
      "url": "https://typescriptlang.org",
      "follow": "nofollow noopener noreferrer"
    }
  ]
}
```

## JavaScript ფუნქციები

### apiBlogs.jsx-ში ძირითადი ფუნქციები:

```javascript
import {
  addLinkTags,
  deleteLinkTags,
  updateLinkTags,
  deleteAllLinkTags,
  getLinkTags,
} from "./services/apiBlogs";

// ტეგების დამატება
const result = await addLinkTags(blogId, [
  { name: "React", url: "https://reactjs.org" },
]);

// ტეგების წაშლა სახელის მიხედვით
const result = await deleteLinkTags(blogId, {
  tagNames: ["React", "Vue.js"],
});

// ყველა ტეგის წაშლა
const result = await deleteAllLinkTags(blogId);

// ტეგების სრული ჩანაცვლება
const result = await updateLinkTags(blogId, [
  { name: "TypeScript", url: "https://typescriptlang.org" },
]);

// ტეგების მიღება
const tags = await getLinkTags(blogId);
```

### linkTagUtils.js-ში მარტივი ფუნქციები:

```javascript
import {
  addSingleTag,
  deleteTagByName,
  clearAllTags,
  replaceAllTags,
  updateTag,
  tagExists,
  getTagCount,
} from "../utils/linkTagUtils";

// ერთი ტეგის დამატება
await addSingleTag(blogId, "React", "https://reactjs.org");

// ტეგის წაშლა
await deleteTagByName(blogId, "React");

// ყველა ტეგის წაშლა
await clearAllTags(blogId);

// ტეგის განახლება
await updateTag(blogId, "React", {
  name: "React 18",
  url: "https://react.dev",
});

// ტეგის არსებობის შემოწმება
const exists = await tagExists(blogId, "React");

// ტეგების რაოდენობა
const count = await getTagCount(blogId);
```

## Real-time სინქრონიზაცია

ახალი სისტემა იყენებს CRUD-based real-time განახლებას:

### Real-time Subscription:

- **წაშლისთვის**: CRUD API-ით fresh data-ს იღებს
- **დამატებისთვის**: CRUD API-ით fresh data-ს იღებს
- **Fallback**: პირდაპირ Supabase query თუ CRUD ვერ მუშაობს

### Polling Fallback:

- ყოველ 30 წამში ამოწმებს ცვლილებებს
- CRUD API-ით იღებს fresh data-ს
- Fallback პირდაპირ Supabase query-ზე

## ტესტირების მაგალითები

### 1. ტეგის დამატება:

```bash
curl -X POST "http://localhost:3000/api/blogs/linkTag/add?blogId=1" \
  -H "Content-Type: application/json" \
  -d '{
    "linkTag": [
      {
        "name": "React",
        "url": "https://reactjs.org",
        "follow": "nofollow noopener noreferrer"
      }
    ]
  }'
```

### 2. ტეგის წაშლა:

```bash
curl -X DELETE "http://localhost:3000/api/blogs/linkTag/delete?blogId=1" \
  -H "Content-Type: application/json" \
  -d '{
    "tagNames": ["React"]
  }'
```

### 3. ყველა ტეგის წაშლა:

```bash
curl -X DELETE "http://localhost:3000/api/blogs/linkTag/delete?blogId=1" \
  -H "Content-Type: application/json" \
  -d '{
    "deleteAll": true
  }'
```

### 4. ტეგების ჩანაცვლება:

```bash
curl -X PUT "http://localhost:3000/api/blogs/linkTag/update?blogId=1" \
  -H "Content-Type: application/json" \
  -d '{
    "linkTag": [
      {
        "name": "TypeScript",
        "url": "https://typescriptlang.org",
        "follow": "nofollow noopener noreferrer"
      },
      {
        "name": "Next.js",
        "url": "https://nextjs.org",
        "follow": "nofollow noopener noreferrer"
      }
    ]
  }'
```

## JavaScript Console-ში ტესტირება

```javascript
// Browser console-ში (ბლოგის გვერდზე)
const blogId = 1; // შეცვალეთ რეალური ID-ით

// ტეგის დამატება
fetch(`/api/blogs/linkTag/add?blogId=${blogId}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    linkTag: [{ name: "Test Tag", url: "https://example.com" }],
  }),
})
  .then((r) => r.json())
  .then(console.log);

// ტეგის წაშლა
fetch(`/api/blogs/linkTag/delete?blogId=${blogId}`, {
  method: "DELETE",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    tagNames: ["Test Tag"],
  }),
})
  .then((r) => r.json())
  .then(console.log);
```

## მთავარი უპირატესობები

### 1. **სრული CRUD ფუნქციონალი**

- ✅ Create (დამატება)
- ✅ Read (წაკითხვა)
- ✅ Update (განახლება)
- ✅ Delete (წაშლა)

### 2. **Real-time სინქრონიზაცია**

- ✅ Supabase Real-time subscriptions
- ✅ CRUD-based refresh ლოგიკა
- ✅ Polling fallback
- ✅ Visual feedback

### 3. **Cache Management**

- ✅ Aggressive cache invalidation
- ✅ Next.js revalidation
- ✅ Server-side cache clearing

### 4. **Error Handling**

- ✅ Comprehensive error handling
- ✅ Fallback mechanisms
- ✅ Detailed logging

### 5. **Developer Experience**

- ✅ Utility functions
- ✅ TypeScript-like JSDoc
- ✅ Console logging
- ✅ Easy testing

## როგორ მუშაობს

1. **API Call** → სპეციალური linkTag ენდპოინტი
2. **Database Update** → Supabase-ში ცვლილება
3. **Cache Invalidation** → ყველა cache იწმინდება
4. **Real-time Sync** → CRUD API-ით fresh data
5. **UI Update** → ავტომატური განახლება visual feedback-ით

## შედარება სხვა ელემენტებთან

| ფუნქცია       | კურსები | შეთავაზებები | ბლოგები | **LinkTags** |
| ------------- | ------- | ------------ | ------- | ------------ |
| GET All       | ✅      | ✅           | ✅      | ✅           |
| GET Single    | ✅      | ✅           | ✅      | ✅           |
| POST Add      | ✅      | ✅           | ✅      | ✅           |
| PUT Update    | ✅      | ✅           | ✅      | ✅           |
| DELETE        | ✅      | ✅           | ✅      | ✅           |
| Real-time     | ❌      | ❌           | ✅      | ✅           |
| Granular CRUD | ❌      | ❌           | ❌      | ✅           |

**LinkTags-ს აქვს ყველაზე მეტი ფუნქციონალი!**
