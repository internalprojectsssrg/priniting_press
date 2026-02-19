# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




# Project Structure
src/
├── assets/             # Static files (High-res textures, Logos, SVG icons)
│   ├── images/
│   └── fonts/
├── components/         # Reusable Global UI Components (Atomic Design)
│   ├── common/         # Buttons, Inputs, Modal, Tabs
│   ├── layout/         # Header, Footer, Sidebar
│   └── branding/       # Custom components like the "Gold Foil" effect wrapper
├── context/            # Global state (e.g., Quote Cart, User Auth)
├── data/               # Static JSON data (Your list of 50+ services)
│   └── services.json
├── hooks/              # Custom React hooks (e.g., useCarousel, useWindowSize)
├── pages/              # Page views (Coordinators of components)
│   ├── Home/
│   │   ├── components/ # Local components used only in Home (e.g., HeroCarousel)
│   │   └── Home.jsx
│   ├── Services/
│   │   ├── Services.jsx
│   │   └── ServiceDetail.jsx
│   └── Quote/
├── services/           # API calls (if you eventually use a backend/CMS)
├── utils/              # Helper functions (Formatters, Validators)
└── App.jsx             # Root component & Routing 



src/pages/
├── Home/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── ClientLogos.jsx
│   │   └── InquiryForm.jsx
│   └── Home.jsx
├── Services/
│   ├── components/
│   │   ├── ServiceCard.jsx
│   │   ├── ServiceFilter.jsx
│   │   └── ServiceDetail.jsx
│   └── Services.jsx
├── Studio/
│   ├── components/
│   │   ├── StudioGallery.jsx
│   │   ├── TeamSection.jsx
│   │   └── EquipmentShowcase.jsx
│   └── Studio.jsx