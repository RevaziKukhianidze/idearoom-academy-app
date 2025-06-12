# Ubuntu-ზე Deployment

## მარტივი ინსტრუქცია:

### 1. პირველად Setup (მხოლოდ ერთხელ):

```bash
# Node.js და npm დაყენება
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# PM2 დაყენება
sudo npm install -g pm2

# Dependencies დაყენება
npm install
```

### 2. Environment Variables (.env ფაილი):

შექმენით `.env` ფაილი ამ შინაარსით:

```
NEXT_PUBLIC_SUPABASE_URL=თქვენი_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=თქვენი_supabase_key
NEXT_PUBLIC_BASE_URL=https://academy.idearoom.ge
```

### 3. საიტის განახლება (ყოველ ჯერზე):

```bash
npm run deploy:ubuntu
```

**ეს ყველაფერი!** 🎉

---

## რა ხდება deploy:ubuntu-ის დროს:

1. ✅ Build-ს აკეთებს
2. ✅ ძველ process-ს წყვეტს
3. ✅ ახალ process-ს იწყებს
4. ✅ საიტი განახლდება

## PM2 Commands (საჭიროების შემთხვევაში):

```bash
pm2 list                    # ყველა process-ის ნახვა
pm2 logs idearoom-academy-app  # logs-ების ნახვა
pm2 restart idearoom-academy-app  # restart
pm2 stop idearoom-academy-app     # გაჩერება
```
