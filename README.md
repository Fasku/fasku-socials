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
- `src/App.jsx` and `src/App.css` compose the page and define its outer layout.
- `src/components/` keeps each component beside its stylesheet: `Header`, `SocialCard`, and `MySettings`.
- `src/styles/animations.css` contains the entrance animation shared by the header and setup panel. Card-specific animations live in `SocialCard.css`.
- `src/data/socialLinks.js` defines the social links; `src/assets/` holds icons, images, and sounds.

Run `npm run dev` for local development, `npm run lint` to check the code, and `npm run build` to create a production build.

## 🚀 Deployment
This site is designed to be hosted on platforms like **Vercel** or **Netlify**. 

---
*Created by [Fasku](https://github.com/fasku1)*
