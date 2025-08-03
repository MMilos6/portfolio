# 🚀 Personal Portfolio Website

A modern, responsive, and **cleanly structured** portfolio website built with **Next.js 15**, **TypeScript**, and **Sanity CMS**.  
This project is designed to **showcase your skills, projects, and experience** with a clean, elegant, and performant frontend architecture.

> 💡 **Feel free to use this portfolio as a starter for your own site!** It’s completely open-source and customizable.

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=for-the-badge&logo=typescript)
![Sanity CMS](https://img.shields.io/badge/Sanity-CMS-orange?style=for-the-badge&logo=sanity)

---

## ✨ Features

- 🎨 **Modern Design** — Clean, responsive UI with smooth animations
- 📱 **Mobile-First** — Fully optimized for all screen sizes
- ⚡ **Fast Performance** — Leveraging Next.js 15 and Turbopack
- 📝 **Headless CMS** — Powered by Sanity for easy content management
- 🔍 **SEO Optimized** — Pre-rendered and structured content for search engines
- 📧 **Contact Form** — EmailJS integration for real-time communication
- 📂 **Project Portfolio** — Dedicated section with detailed project views
- 📄 **Resume Display** — Styled professional CV section
- 🛠️ **Interactive Tech Stack** — Showcase the technologies behind your work

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** — React framework with App Router
- **TypeScript** — Type-safe development
- **Styled Components / CSS Modules** — Component-level styling
- **React Icons** — Icon library
- **AOS** — Animate On Scroll
- **React Modal** — Custom modal components

### CMS & Backend
- **Sanity CMS** — Headless content management system
- **GROQ** — Query language for fetching Sanity data
- **EmailJS** — Sends form submissions via email

### Tooling
- **Turbopack** — Next.js bundler for fast dev builds
- **ESLint** — Linting and code standards
- **TypeScript** — Static type checking

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm / bun
- Sanity account for CMS setup

### Installation

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
npm install
```

### Configure Environment Variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
```

### Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```bash
portfolio/
├── app/              # App Router structure
│   ├── (pages)/      # Static and dynamic pages
│   ├── api/          # API routes (contact)
│   └── studio/       # Embedded Sanity Studio
├── features/         # UI feature blocks
├── sanity/           # Sanity schemas and setup
├── groq/             # GROQ queries
├── shared/           # Utilities and helpers
└── style/            # Global styles
```

---

## 🧩 Customization Guide

### 🔧 Manage Content
- Access the CMS at `/studio`
- Easily update your content, projects, and resume from the CMS

### 🎨 Style & Layout
- Global styles: `app/(pages)/globals.css`
- Components use `styled-components` or `CSS Modules`
- Responsive, mobile-first design approach

### ➕ Add New Section
1. Add your component in `features/`
2. Export from `features/index.ts`
3. Import and render it where needed

---

## 📦 Available Scripts

```bash
npm run dev     # Start local development
npm run build   # Build for production
npm run start   # Serve production build
npm run lint    # Run linting checks
```

---

## 🌐 Deployment

### Recommended: [Vercel](https://vercel.com)
1. Connect your repo
2. Add environment variables in the dashboard
3. Deploy with one click

### Other Options
- **Netlify**: Use `.next` as publish directory
- **Railway / DigitalOcean**: Custom setup supported

---

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID | ✅ |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset name | ✅ |
| `NEXT_PUBLIC_SANITY_API_VERSION` | API version | ✅ |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key | ✅ |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID | ✅ |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID | ✅ |

---

## 🤝 Contributing

1. Fork the repo  
2. Create a new branch: `git checkout -b feature/YourFeatureName`  
3. Make your changes  
4. Commit: `git commit -m 'Add new feature'`  
5. Push and open a PR  

---

## 📄 License

Licensed under the [MIT License](LICENSE)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Sanity.io](https://www.sanity.io/)
- [Styled Components](https://styled-components.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 🔗 Connect with Me

- 🌐 [Portfolio](https://www.milosmilovanovic.rs/)
- 💼 [LinkedIn](https://www.linkedin.com/in/milos--milovanovic/)
- 💻 [GitHub](https://github.com/MMilos6)
- 📸 [Instagram](https://www.instagram.com/mosquito_junior/)

---

⭐ **Star this repo if you find it helpful or use it as a starting point for your own portfolio!**
