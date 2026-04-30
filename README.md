# 🌸 My Portfolio

A modern, responsive personal portfolio built with React, TypeScript, and Tailwind CSS — featuring smooth animations, a fluid type scale, and a working contact form.

🔗 **Live website:** [hanan-biazid.netlify.app](https://hanan-biazid.netlify.app/)

---

## ✨ Features

- 🎨 **Pastel-themed UI** with glassmorphism and subtle animations
- 🌗 **Light & dark mode** support
- 📱 **Fully responsive** — fluid typography that scales from phone to desktop
- 💫 **Motion-powered** transitions via `motion/react`
- 📩 **Working contact form** wired up to Formspree
- ⚡ **Optimized images** auto-compressed at build time (~65% smaller)
- 🚀 **Deployed on Netlify** with SPA routing fallback

---

## 🛠️ Tech Stack

| Category | Tools |
|---|---|
| 🧱 Framework | React 18 + TypeScript |
| ⚡ Bundler | Vite 6 |
| 🎨 Styling | Tailwind CSS v4 |
| 🎬 Animations | motion/react |
| 🧩 Icons | lucide-react |
| 📨 Forms | Formspree |
| 🖼️ Image optimization | vite-plugin-image-optimizer |
| ☁️ Hosting | Netlify |

---

## 🚀 Getting Started

### 📦 Install dependencies

```bash
npm install
```

### 🧑‍💻 Run the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 🏗️ Build for production

```bash
npm run build
npm run preview
```

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

> 💡 Only variables prefixed with `VITE_` are exposed to the client.

---

## 📁 Project Structure

```
PortfolioBase/
├── public/              # Static assets + _redirects
├── src/
│   ├── app/
│   │   ├── assets/      # Images (auto-optimized at build)
│   │   └── components/  # React components
│   ├── styles/          # Tailwind + theme tokens
│   └── main.tsx         # App entry point
├── netlify.toml         # Netlify build config
└── vite.config.ts       # Vite + plugins config
```

---

## 📬 Contact

Feel free to reach out via the contact form on the [live site](https://hanan-biazid.netlify.app/) — or:

- 📧 Email: hanan.bayazeed56@gmail.com
- 📱 Phone: +966 53 245 6435
- 📸 Instagram: [@iihanan_x](https://www.instagram.com/iihanan_x/)

---

Made with 💖 by Hanan
