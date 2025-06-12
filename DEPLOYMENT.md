# 🚀 Deployment Guide - იდეარუმის აკადემია

## 📋 მთავარი პრობლემა და გადაწყვეტა

### ❌ **პრობლემა:**

- Production site-ზე Internal Server Error-ები
- Blog, Courses, Offers გვერდები არ მუშაობდა
- GitHub Actions deployment-ში environment variables არ გადაეცემოდა PM2-ს

### ✅ **გადაწყვეტა:**

1. **Next.js Configuration Conflicts** - მოვაგვარეთ dynamic/static rendering კონფლიქტები
2. **Environment Variables** - შევქმენით სპეციალური deployment script
3. **PM2 Configuration** - გავაუმჯობესეთ production server configuration
4. **Error Handling** - დავამატეთ comprehensive error boundaries

## 🛠️ **ახალი Deployment Process:**

### **GitHub Actions Workflow:**

```yaml
1. Environment Check ✅
2. Clean Build ✅
3. Verify Build Output ✅
4. Smart Deployment ✅
```

### **Deployment Scripts:**

- `npm run check-env` - Environment variables შემოწმება
- `npm run setup-logs` - Logs directory შექმნა
- `npm run deploy` - სრული deployment process

## 🔧 **Manual Deployment (Production Server-ზე):**

```bash
# 1. Environment variables დაყენება
export NEXT_PUBLIC_SUPABASE_URL="your_supabase_url"
export NEXT_PUBLIC_SUPABASE_ANON_KEY="your_supabase_key"
export NEXT_PUBLIC_BASE_URL="https://academy.idearoom.ge"

# 2. Build და Deploy
npm run build
npm run deploy
```

## 📊 **PM2 Management:**

```bash
# Status შემოწმება
pm2 status

# Logs ნახვა
npm run pm2:logs

# Restart
npm run pm2:restart

# Stop
npm run pm2:stop
```

## 🔍 **Troubleshooting:**

### **Environment Variables შემოწმება:**

```bash
npm run check-env
```

### **Build Output შემოწმება:**

```bash
npm run build
ls -la .next/
```

### **PM2 Logs:**

```bash
pm2 logs idearoom-academy-app --lines 50
```

## 🎯 **შედეგი:**

✅ **Blog Pages** - სრულად მუშაობს  
✅ **Courses Pages** - სრულად მუშაობს  
✅ **Offers Pages** - სრულად მუშაობს  
✅ **API Routes** - სრულად მუშაობს  
✅ **Error Handling** - გაუმჯობესებული

## 🚨 **მნიშვნელოვანი:**

- **Environment Variables** უნდა იყოს სწორად დაყენებული GitHub Secrets-ში
- **PM2** ახლა ავტომატურად იღებს environment variables-ს
- **Logs** ინახება `./logs/` directory-ში
- **Error Boundaries** ავტომატურად იჭერს და აჩვენებს user-friendly შეცდომებს

---

**🎉 Production Site ახლა სრულად მუშაობს ბეზ Internal Server Error-ების!**
