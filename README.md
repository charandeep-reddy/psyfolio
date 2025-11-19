# Portfolio Website Template


## ✨ Features

- 🎨 **Modern Design** - Clean and professional UI
- ⚡ **Fast Performance** - Built with Next.js 16
- 🔧 **Easy Customization** - Config-driven architecture
- 🎯 **Type-Safe** - TypeScript + Zod validation
- 🎭 **Beautiful UI** - shadcn/ui components

---


## 🚀 Tech Stack

| Category | Technology |
|----------|-----------|
| 🖼️ **Framework** | [Next.js](https://nextjs.org) 16 |
| 🎨 **Styling** | [Tailwind CSS](https://tailwindcss.com) |
| 🧩 **UI Components** | [shadcn/ui](https://ui.shadcn.com) |
| 🎯 **Icons** | [Font Awesome](https://fontawesome.com) |
| ✅ **Validation** | [Zod](https://zod.dev) |
| 📝 **Forms** | [React Hook Form](https://react-hook-form.com) |

---

## 🚀 Getting Started

### 📥 Installation

**1. Clone the repository**
```bash
git clone https://github.com/charandeep-reddy/psydevx-portfolio.git
cd portfolio
```

**2. Install dependencies**
```bash
pnpm install
```

**3. Run the development server**
```bash
pnpm dev
```

---

## 📖 How to Use

This portfolio uses a **config-driven architecture** 🏗️, making it super easy to customize without touching the core code!

### 🎯 Quick Start (5 Steps)

1. ✏️ **Change your name and info** → Edit `components/infoConfig.tsx` and `app/layout.tsx`
2. 📝 **Update about section** → Edit `components/configs/aboutConfig.tsx`
3. 💼 **Add your projects** → Edit `components/configs/portfolioConfig.tsx`
4. 🎓 **Add work experience** → Edit `components/configs/resumeConfig.tsx`
5. 🎨 **Customize styling** → Modify Tailwind classes in template files

> 💡 **Tip**: The page auto-updates as you edit the files! No need to refresh manually.

---

### 📁 Customization Guide

#### 1️⃣ **Edit Config Files** 📝
All content is managed through config files in `components/configs/`:

| File | What to Edit |
|------|-------------|
| `aboutConfig.tsx` | ✍️ About section content |
| `resumeConfig.tsx` | 💼 Work experience & education |
| `portfolioConfig.tsx` | 🚀 Projects & portfolio items |
| `blogConfig.tsx` | 📰 Blog posts |
| `contactConfig.tsx` | 📧 Contact form fields |

#### 2️⃣ **Customize Templates** 🎨
Modify layouts in `components/templates/`:

| Template | Purpose |
|---------|---------|
| `aboutTemplate.tsx` | 🎯 About section layout |
| `resumeTemplate.tsx` | 📄 Resume display style |
| `portfolioTemplate.tsx` | 🖼️ Project cards layout |
| `blogTemplate.tsx` | 📝 Blog post cards |
| `contactTemplate.tsx` | 📮 Contact form design |

#### 3️⃣ **Update Personal Info** 👤

- 📋 `components/infoConfig.tsx` - Personal details (email, phone, location)
- 🎨 `components/sidebar.tsx` - Sidebar customization
- ⚙️ `app/layout.tsx` - Site metadata (title, description)

---

## 📂 Project Structure

```
portfolio/
├── 📱 app/                    # Next.js app router pages
│   ├── page.tsx              # 🏠 Home/About page
│   ├── resume/               # 💼 Resume page
│   ├── portfolio/            # 🚀 Portfolio listing
│   ├── blog/                 # 📰 Blog listing
│   └── contact/              # 📧 Contact page
│
├── 🧩 components/
│   ├── configs/              # 📝 Content configuration files
│   ├── templates/            # 🎨 Template components
│   ├── layouts/              # 🏗️ Layout components
│   └── ui/                   # 🎭 shadcn/ui components
│
└── 🛠️ lib/                    # 🔧 Utility functions
```

---

## 🎉 That's It!

You're all set! Start editing the config files and watch your portfolio come to life! 🚀

---

## 🎨 Credits & Inspiration

This portfolio is inspired by the **vCard Personal Portfolio** template created by [codewithsadee](https://github.com/codewithsadee).

-  **Original Template**: [vCard Personal Portfolio](https://github.com/codewithsadee/vcard-personal-portfolio) (HTML, CSS, JavaScript)

> This Next.js version has been rebuilt using modern web technologies while maintaining the design inspiration from the original template.

---