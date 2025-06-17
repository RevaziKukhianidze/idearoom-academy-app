# ბლოგის ტეგების Real-Time სინქრონიზაცია

## რა იყენება ახლა

### 1. Supabase Real-time Subscriptions

- **Channel**: `blog-${blogId}` - ყოველ ბლოგს აქვს საკუთარი channel
- **Events**: ყველა ცვლილება (INSERT, UPDATE, DELETE)
- **Filter**: მხოლოდ კონკრეტული ბლოგი (`id=eq.${blogId}`)

### 2. Polling Fallback

- ყოველ **30 წამში** შეამოწმებს ცვლილებებს
- შედარებს `linkTag` ველებს JSON-ის სახით
- ავტომატურად განახლებს თუ ცვლილება არის

### 3. Visual Feedback

- **ანიმაცია**: ტეგების განახლებისას ჩნდება pulse ეფექტი
- **Background**: ყვითელი ფონი განახლებისას
- **Ring Effect**: ლურჯი რგოლი ყოველ ტეგზე

## როგორ ვტესტოთ

### Opition 1: Supabase Dashboard-ში

1. Supabase Dashboard-ს გახსნას
2. `blogs` ტეიბლი → კონკრეტული ბლოგი
3. `linkTag` ველის რედაქტირება
4. ჩაწერა გახსნილ ბლოგის გვერდზე

### Option 2: API-ით

```bash
# ტეგების განახლება
curl -X PUT "http://localhost:3000/api/blogs/update?id=1" \
  -H "Content-Type: application/json" \
  -d '{
    "linkTag": [
      {"name": "ახალი ტეგი", "url": "https://example.com", "follow": "nofollow noopener noreferrer"},
      {"name": "მეორე ტეგი", "url": "https://test.com", "follow": "nofollow noopener noreferrer"}
    ]
  }'
```

### Option 3: პირდაპირ SQL

```sql
-- Supabase SQL Editor-ში
UPDATE blogs
SET linkTag = '[
  {"name": "Real-time ტეგი", "url": "https://realtime.com", "follow": "nofollow noopener noreferrer"},
  {"name": "ტესტი ტეგი", "url": "https://test.ge", "follow": "nofollow noopener noreferrer"}
]'::jsonb
WHERE id = 1;
```

## მოსალოდნელი ქცევა

### ✅ წარმატებული Real-time სინქრონიზაცია:

1. **Console log**: `🔔 Setting up real-time subscription for blog: 1`
2. **Subscription Status**: `📡 Supabase subscription status: SUBSCRIBED`
3. **Update Event**: `🚀 Real-time blog update received: {...}`
4. **Tags Update**: `✅ Blog tags updated in real-time: [...new tags...]`
5. **UI Animation**: ტეგების ანიმაცია + ყვითელი ფონი 500ms-ის განმავლობაში

### ⚠️ Fallback Polling:

- თუ real-time არ მუშაობს, ყოველ 30 წამში შეამოწმებს
- **Console log**: `🔄 Detected changes via polling, updating blog tags`

## Console-ის მონიტორინგი

Browser Developer Tools → Console → Filter by "blog":

```
🔔 Setting up real-time subscription for blog: 1
📡 Supabase subscription status: SUBSCRIBED
🚀 Real-time blog update received: {eventType: 'UPDATE', new: {...}}
✅ Blog tags updated in real-time: [...]
🔌 Cleaning up blog subscription
```

## დაწერილი ფუნქციონალი

### State Management:

- `currentBlog`: რეალურ დროში განახლებული ბლოგის მონაცემები
- `isUpdating`: ანიმაციის კონტროლი

### Cleanup:

- კომპონენტის unmount-ისას ავტომატურად იწმენდს subscription-ებს
- Polling interval-ებიც იწმინდება

### Error Handling:

- Real-time subscription-ის შეცდომები
- Polling-ის შეცდომები
- ყველა error console-ში ჩაიწერება

## უზრუნველყოფილი ქეისები

✅ **ტეგის დამატება** → ავტომატურად ჩნდება  
✅ **ტეგის წაშლა** → ავტომატურად ქრება  
✅ **ტეგის განახლება** → ავტომატურად იცვლება  
✅ **ტეგის URL ცვლილება** → ავტომატურად განახლდება  
✅ **ტეგის სახელის ცვლილება** → ავტომატურად განახლდება  
✅ **ბლოგის მთლიანი წაშლა** → console-ში ჩაიწერება  
✅ **ქსელის შეფერხება** → fallback polling იმუშავებს  
✅ **Multiple tabs** → ყველა ტაბში სინქრონიზაცია
