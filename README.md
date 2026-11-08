# @Fasku | Social Space 🚀

A clean, interactive, and glassmorphism-inspired "link-in-bio" webpage built with **React** and **React-Bootstrap**. This site serves as a central hub to display and access all my social media platforms and community spaces.

## ✨ Features
* **Interactive UI:** Smooth entrance animations and hover effects.
* **Glassmorphism Design:** Semi-transparent "glass" cards with backdrop blurring.
* **Audio Integration:** Contextual sound effects for hover and click interactions.
* **Responsive:** Optimized for both mobile and desktop viewing.

## 🛠️ Built With
* **React** - UI Framework
* **Vite** - Frontend Tooling
* **React-Bootstrap** - Layout and Components
* **CSS Keyframes** - Custom Animations

## Source structure

- `src/main.jsx` loads Bootstrap, global styles, and shared animations before rendering the app.
- `src/index.css` contains global defaults and the page background.
- `src/App.jsx` selects the page by URL and manages the shared sound preference; `src/App.css` defines the outer layout.
- `src/pages/` contains the home page (`/`) and osu! skins page (`/skins`).
- `src/components/` keeps each component beside its stylesheet: `Header`, `SocialCard`, and `MySettings`.
- `src/styles/animations.css` contains the entrance animation shared by the header and setup panel. Card-specific animations live in `SocialCard.css`.
- `src/data/socialLinks.js` defines the social links; `src/assets/` holds icons, images, and sounds.

Run `npm run dev` for local development, `npm run lint` to check the code, and `npm run build` to create a production build.

## osu! skins page

The **Osu Skins** link opens `/skins` in the same tab. Pages use native links, so back/forward navigation and opening links in new tabs work without a routing dependency. The skins page includes preview carousels, download links, a link back to the profile, sharing, and the saved sound preference.

Edit `src/data/skins.js` to add or update skins. Each entry has a unique `id`, a `name`, a `downloadUrl`, and an `images` array. Store previews in `src/assets/skin-images/` and import them into the data file. An empty images array displays a placeholder; the download button remains available.

`vercel.json` rewrites `/skins` and `/skins/` to the app entry point so direct visits and refreshes work after deployment. Other unknown paths retain Vercel's normal 404 behavior. The original `fasku-osu-skins` project is separate and has not been modified.

## 🚀 Deployment
This site is designed to be hosted on platforms like **Vercel** or **Netlify**. 

---
*Created by [Fasku](https://github.com/fasku1)*
