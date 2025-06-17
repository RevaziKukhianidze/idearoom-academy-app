# LinkTag CRUD ტესტირება

## მარტივი ტესტები

### 1. ტეგის დამატება (Browser Console-ში)

```javascript
// ბლოგის გვერდზე (მაგ. /blog/1) გახსენით console და გაუშვით:
const blogId = 1; // შეცვალეთ რეალური ID-ით

fetch(`/api/blogs/linkTag/add?blogId=${blogId}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    linkTag: [
      {
        name: "Test React",
        url: "https://reactjs.org",
        follow: "nofollow noopener noreferrer",
      },
    ],
  }),
})
  .then((r) => r.json())
  .then((result) => {
    console.log("✅ ტეგი დაემატა:", result);
    // გვერდი ავტომატურად განახლდება ~1 წამში
  });
```

### 2. ტეგის წაშლა

```javascript
fetch(`/api/blogs/linkTag/delete?blogId=${blogId}`, {
  method: "DELETE",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    tagNames: ["Test React"],
  }),
})
  .then((r) => r.json())
  .then((result) => {
    console.log("✅ ტეგი წაიშალა:", result);
    // გვერდი ავტომატურად განახლდება ~1 წამში
  });
```

### 3. ყველა ტეგის წაშლა

```javascript
fetch(`/api/blogs/linkTag/delete?blogId=${blogId}`, {
  method: "DELETE",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    deleteAll: true,
  }),
})
  .then((r) => r.json())
  .then((result) => {
    console.log("✅ ყველა ტეგი წაიშალა:", result);
  });
```

### 4. ტეგების ჩანაცვლება

```javascript
fetch(`/api/blogs/linkTag/update?blogId=${blogId}`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    linkTag: [
      {
        name: "TypeScript",
        url: "https://typescriptlang.org",
        follow: "nofollow noopener noreferrer",
      },
      {
        name: "Next.js",
        url: "https://nextjs.org",
        follow: "nofollow noopener noreferrer",
      },
    ],
  }),
})
  .then((r) => r.json())
  .then((result) => {
    console.log("✅ ტეგები ჩანაცვლდა:", result);
  });
```

## Utility ფუნქციების ტესტი

### Browser Console-ში (თუ utils import-ია):

```javascript
// თუ linkTagUtils import-ია, შეგიძლიათ გამოიყენოთ:

// ერთი ტეგის დამატება
await addSingleTag(1, "Vue.js", "https://vuejs.org");

// ტეგის წაშლა
await deleteTagByName(1, "Vue.js");

// ტეგების რაოდენობა
const count = await getTagCount(1);
console.log("ტეგების რაოდენობა:", count);

// ტეგის არსებობა
const exists = await tagExists(1, "React");
console.log("React ტეგი არსებობს:", exists);
```

## cURL ტესტები

### Terminal-ში:

```bash
# ტეგის დამატება
curl -X POST "http://localhost:3000/api/blogs/linkTag/add?blogId=1" \
  -H "Content-Type: application/json" \
  -d '{
    "linkTag": [
      {
        "name": "cURL Test",
        "url": "https://example.com",
        "follow": "nofollow noopener noreferrer"
      }
    ]
  }'

# ტეგის წაშლა
curl -X DELETE "http://localhost:3000/api/blogs/linkTag/delete?blogId=1" \
  -H "Content-Type: application/json" \
  -d '{
    "tagNames": ["cURL Test"]
  }'
```

## რას უნდა ველოდოთ

### ✅ წარმატებული ტესტი:

1. **API Response**: `{"success": true, "message": "..."}`
2. **Console Logs**: CRUD ლოგები console-ში
3. **Real-time Update**: ტეგები ავტომატურად განახლდება ~1 წამში
4. **Visual Feedback**: ყვითელი ფონი და pulse ანიმაცია

### ❌ შეცდომის შემთხვევაში:

1. **API Error**: `{"error": "..."}`
2. **Console Errors**: დეტალური error ლოგები
3. **Fallback**: პირდაპირ Supabase query-ზე გადართვა

## Debug ინფორმაცია

Console-ში ეძებეთ ეს ლოგები:

```
🗑️ DELETION DETECTED - Using CRUD-based refresh
🗑️ CRUD-based delete refresh starting...
🗑️ CRUD fresh tags: [...]
🗑️ CRUD delete - setting blog: {...}

➕ ADDITION/UPDATE - Using CRUD-based refresh
🔄 CRUD-based add refresh triggered
🔄 CRUD fresh tags: [...]
🔄 CRUD add - setting blog: {...}
```

## მოკლე ტესტი

**ყველაზე მარტივი ტესტი:**

1. გახსენით ბლოგის გვერდი
2. Console-ში ჩაწერეთ:

```javascript
const blogId = window.location.pathname.split("/").pop();
fetch(`/api/blogs/linkTag/add?blogId=${blogId}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    linkTag: [{ name: "Test", url: "https://test.com" }],
  }),
})
  .then((r) => r.json())
  .then(console.log);
```

3. დაელოდეთ ~1 წამი
4. ტეგი უნდა გამოჩნდეს ავტომატურად!
