# Kopikey Sembalun

Premium single-page website for **Kopikey Sembalun** — authentic Arabica coffee from Sembalun Village, East Lombok, Indonesia (Mount Rinjani).

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **TypeScript**
- Bilingual: **English** / **Bahasa Indonesia**

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before going live

1. **Hero image**  
   Add a high-quality hero image (coffee + Mount Rinjani vibe) as `public/hero.jpg`. In `app/page.tsx`, uncomment or add the hero section background using `next/image`:
   ```tsx
   <Image src="/hero.jpg" alt="" fill className="object-cover" priority />
   ```

2. **Google Maps**  
   In `app/page.tsx`, set `MAPS_EMBED_SRC` to your Google Maps embed URL (Google Maps → Share → Embed a map).

3. **JSON-LD (SEO)**  
   In `app/page.tsx`, uncomment the JSON-LD script block and fill in `url`, `telephone`, and exact `geo` coordinates.

4. **Metadata**  
   In `app/layout.tsx`, adjust `metadata` (e.g. `openGraph.url`, `twitter`) when you have a production URL.

## Build

```bash
npm run build
npm start
```

## Deploy to Netlify

### Option A: Deploy with Git (recommended)

1. Push this project to GitHub, GitLab, or Bitbucket.
2. In [Netlify](https://app.netlify.com): **Add new site** → **Import an existing project**.
3. Connect your repo. Netlify will detect Next.js and use the build command from `netlify.toml`.
4. Click **Deploy site**. Future pushes to your main branch will auto-deploy.

### Option B: Deploy with Netlify CLI

1. Install the CLI: `npm install -g netlify-cli`
2. Log in: `netlify login`
3. From the project root: `netlify init` (choose “Create & configure a new site”) or `netlify deploy --prod` to deploy the current build.

Ensure `npm run build` completes successfully before deploying.

## License

Private. All rights reserved.
