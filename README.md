# DuffleCraftCo — Static Website

A **100% frontend** website. No Node.js, no database, no server needed.

## Files
```
index.html        ← the entire website (Home + Products + Contact)
css/style.css     ← all styling
js/main.js        ← products data + logic
img/              ← your product images go here
```

---

## Step 1 — Set Up the Inquiry Form (FREE)

The contact form sends inquiries to your email via **Formspree** (free, no server needed).

1. Go to **https://formspree.io** → Sign up free
2. Click **"New Form"** → give it a name → copy your endpoint URL
   - It looks like: `https://formspree.io/f/xabc1234`
3. Open `js/main.js` in any text editor
4. Find line at the top:
   ```
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
   ```
5. Replace `YOUR_FORM_ID` with your actual ID, e.g.:
   ```
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xabc1234';
   ```
6. Save the file. Done! Inquiries will now arrive in your email.

**Formspree free plan:** 50 submissions/month. Paid is $10/month for unlimited.

---

## Step 2 — Add Your Product Images

1. Put your product photos (JPG or PNG) in the `img/` folder
2. Open `js/main.js`
3. For each product, change the `image` field:
   ```js
   image: 'img/my-bag-photo.jpg'
   ```

---

## Step 3 — Update Contact Details

In `index.html`, search for `info@dufflecraftco.com` and `+92 300 1234567` and replace with your real email and phone.

Also update the email in `js/main.js` in the fallback error messages.

---

## Step 4 — Add / Edit Products

Open `js/main.js`. At the top you'll see the `PRODUCTS` array. Each product looks like:

```js
{
  id: 1,
  name: 'Executive Leather Duffle',
  description: 'Full description here...',
  category: 'leather-duffle-bags',   // see categories below
  price: '$180',                      // or '' for "Contact for Price"
  featured: true,                     // shows on homepage if true
  image: 'img/your-photo.jpg'
}
```

**Available categories:**
- `leather-duffle-bags`
- `duffle-bags`
- `laptop-bags`
- `accessories`
- `sports-bags`

---

## Hosting Options (FREE or Very Cheap)

### Option A — GitHub Pages (FREE, forever)
Best if you know git, or are willing to learn basics.

1. Create a free account at **https://github.com**
2. Create a new repository (e.g. `dufflecraftco`)
3. Upload all your files (index.html, css/, js/, img/)
4. Go to Settings → Pages → Source: `main branch` → Save
5. Your site is live at: `https://yourusername.github.io/dufflecraftco`

**Custom domain with GitHub Pages:** Free. Just buy a domain (see below) and point it.

---

### Option B — Netlify (FREE, easiest)
No git needed. Just drag and drop.

1. Go to **https://netlify.com** → Sign up free
2. Drag your entire project folder onto the Netlify dashboard
3. Your site is live instantly at a free `.netlify.app` URL
4. Connect a custom domain for free

**Netlify free plan** is more than enough for this site (100GB bandwidth/month).

---

### Option C — Cloudflare Pages (FREE)
Very fast CDN. Similar to Netlify.

1. Go to **https://pages.cloudflare.com**
2. Connect GitHub repo or upload directly
3. Free `.pages.dev` subdomain + custom domain support

---

## Buying a Domain (Cheap)

You don't need to buy a domain — you can use the free subdomain from Netlify/GitHub.

But if you want `www.dufflecraftco.com`:

| Registrar | Price (approx) | Notes |
|-----------|---------------|-------|
| **Namecheap** (namecheap.com) | ~$10/year | Best for .com, good support |
| **Cloudflare Registrar** (cloudflare.com/products/registrar) | ~$9/year | At-cost pricing, no markup |
| **Porkbun** (porkbun.com) | ~$9/year | Often has deals |

`.pk` domain (Pakistani): ~$15–20/year from PKNIC or local registrars.

After buying, just point your domain's DNS to Netlify/GitHub Pages — both have free guides for this.

---

## Summary: Cheapest Possible Setup

| Item | Cost |
|------|------|
| Hosting (Netlify) | **FREE** |
| Inquiry form (Formspree) | **FREE** (50/month) |
| Domain (optional) | ~$9–10/year |
| **Total** | **$0 — $10/year** |
