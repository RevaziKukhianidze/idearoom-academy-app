# ბლოგის ტეგების სინქრონიზაციის პრობლემის გადაჭრა

## პრობლემის აღწერა

ბლოგის ლინკ ტეგები ვერ ტრეკავდნენ ბაზის განახლებებს - ანუ ბაზაში იშლებოდა ან ემატებოდა ტეგები, მაგრამ ვებ გვერდზე ცვლილებები არ ჩანდა.

## მიზეზი

1. **API ენდპოინტების ნაკლებობა**: ბლოგებისთვის არ არსებობდა API ენდპოინტები (განსხვავებით კურსებისა და შეთავაზებებისგან)
2. **Cache Invalidation-ის ნაკლებობა**: ბლოგის მონაცემების განახლებისას cache არ იწმინდებოდა
3. **Revalidation-ის ნაკლებობა**: Next.js-ის revalidation სისტემა ბლოგებისთვის არ მუშაობდა

## გადაწყვეტის გზა

### 1. შექმნილი ახალი API ენდპოინტები:

#### `/api/blogs` - ყველა ბლოგის მიღება

```javascript
GET / api / blogs;
```

#### `/api/blog` - ერთი ბლოგის მიღება

```javascript
GET /api/blog?id=123
```

#### `/api/blogs/add` - ბლოგის დამატება

```javascript
POST /api/blogs/add
Content-Type: application/json

{
  "title": "ბლოგის სათაური",
  "text": "ბლოგის ტექსტი",
  "image": "სურათის URL",
  "linkTag": [
    {"name": "ტეგი 1", "url": "https://example.com"},
    {"name": "ტეგი 2", "url": "https://example2.com"}
  ]
}
```

#### `/api/blogs/update` - ბლოგის განახლება (ტეგების ჩათვლით)

```javascript
PUT /api/blogs/update?id=123
Content-Type: application/json

{
  "title": "განახლებული სათაური",
  "linkTag": [
    {"name": "ახალი ტეგი", "url": "https://newlink.com"}
  ]
}
```

#### `/api/blogs/delete` - ბლოგის წაშლა

```javascript
DELETE /api/blogs/delete?id=123
```

### 2. განახლებული Cache Management:

#### `apiBlogs.jsx`-ში დაემატა:

- `addBlog()` - ბლოგის დამატების ფუნქცია
- `updateBlog()` - ბლოგის განახლების ფუნქცია (ტეგების ჩათვლით)
- `deleteBlog()` - ბლოგის წაშლის ფუნქცია

#### Cache Invalidation:

ყველა ოპერაციის შემდეგ ავტომატურად იწმინდება cache და ახდენს revalidation-ს:

- ყველა ბლოგის გვერდის (`/blog`)
- ინდივიდუალური ბლოგის გვერდების (`/blog/[id]`)
- მთავარი გვერდის (`/`)

### 3. განახლებული Global Cache Management:

#### `/api/force-refresh` - ახლა ბლოგებსაც იწმენდს

#### `/api/cache/clear` - ახლა ბლოგების cache-საც აწმენდს

## როგორ მუშაობს ახლა:

### ტეგების დამატება/განახლება:

1. ადმინ პანელიდან ან API-ის მეშვეობით განახლებ ბლოგს
2. PUT `/api/blogs/update?id=123` ზე მისი გაგზავნა
3. ავტომატურად იწმინდება cache
4. ვებ გვერდი ავტომატურად აჩვენებს ახალ ტეგებს

### ტეგების წაშლა:

1. ბაზაში ტეგების წაშლა
2. PUT `/api/blogs/update?id=123` ზე მისი გაგზავნა
3. ავტომატურად იწმინდება cache
4. ვებ გვერდიდან ტეგები ქრება

### ძალადობრივი განახლება:

თუ მაინც არ ჩანს ცვლილებები:

```javascript
POST / api / force - refresh;
```

## ტესტირება:

1. **ტეგის დამატება**:

```bash
curl -X PUT "http://localhost:3000/api/blogs/update?id=1" \
  -H "Content-Type: application/json" \
  -d '{
    "linkTag": [
      {"name": "ახალი ტეგი", "url": "https://example.com"}
    ]
  }'
```

2. **Cache-ის წაშლა**:

```bash
curl -X POST "http://localhost:3000/api/force-refresh"
```

3. **ვერიფიკაცია**:
   ბლოგის გვერდზე გადასვლა და ახალი ტეგების შემოწმება

## შედეგი:

ბლოგის ტეგები ახლა რეალურ დროში სინქრონდება ბაზის განახლებებთან. ყველა ცვლილება ავტომატურად ჩანს ვებ გვერდზე cache invalidation-ისა და revalidation-ის წყალობით.
