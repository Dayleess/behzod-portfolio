# Deploy Yo'riqnoma

## 1. GitHub'ga yuklash

```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/Dayleess/portfolio.git
git push -u origin main
```

> `.env.local` fayli `.gitignore`'da, GitHub'ga ketmaydi (xavfsiz).

## 2. Netlify deploy

1. [netlify.com](https://app.netlify.com) → **Add new site** → **Import from GitHub**.
2. Repo'ni tanlang. Netlify Next.js'ni avtomatik aniqlaydi:
   - Build command: `next build`
   - Publish directory: `.next`
3. **Environment variables** qo'shing (Site settings → Environment variables):
   - `TELEGRAM_BOT_TOKEN` = `<bot tokeningiz>`
   - `TELEGRAM_CHAT_ID` = `<chat id>`
   - `NEXT_PUBLIC_SITE_URL` = `https://behzod.dev.uz` (domen ulagandan keyin)
4. **Deploy site** bosing.

## 3. Domen ulash (`behzod.dev.uz`)

1. Domenni sotib oling (masalan **uznic.uz** orqali `.dev.uz` zonasida).
2. Netlify Dashboard → **Domain management** → **Add custom domain** → `behzod.dev.uz`.
3. Domen registrar panelida quyidagi DNS yozuvlarni qo'shing:
   - **A record**: `@` → `75.2.60.5` (Netlify load balancer)
   - **CNAME**: `www` → `<your-site>.netlify.app`
4. Netlify avtomatik **SSL** (Let's Encrypt) sertifikat oladi (~5 daqiqa).
5. `NEXT_PUBLIC_SITE_URL` env'ni yangilang va qayta deploy qiling.

## 4. Google Search Console

1. [search.google.com/search-console](https://search.google.com/search-console) → **Add property**.
2. **Domain** turini tanlang → `behzod.dev.uz` kiriting.
3. Google bergan **TXT record**'ni domen DNS'iga qo'shing → **Verify**.
4. **Sitemaps** bo'limiga kiring → `https://behzod.dev.uz/sitemap.xml` yuboring.
5. 1-2 hafta ichida Google indeks qiladi va qidiruvda chiqa boshlaydi.

## 5. Tekshirish

Deploydan keyin:
- `https://behzod.dev.uz/sitemap.xml` — ochilishi kerak
- `https://behzod.dev.uz/robots.txt` — ochilishi kerak
- Kontakt forma → Telegram'ga xabar kelishi kerak
