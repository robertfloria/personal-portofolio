# Personal Portfolio Monorepo

A modern, professional portfolio built as a **monorepo** with Next.js 16 (frontend), NestJS (backend API), and shared packages.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![NestJS](https://img.shields.io/badge/NestJS-11-red?logo=nestjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss)

## ✨ Features

- **Monorepo Architecture** — Shared types and utilities across frontend/backend
- **Modern Stack** — Next.js 16 (App Router), NestJS 11, TypeScript 5.7, Tailwind CSS v4
- **Design System** — Semantic spacing utilities, glassmorphism effects, dark/light themes
- **Responsive Design** — Mobile-first with Framer Motion animations
- **Contact Form** — Email with validation and rate limiting (Gmail SMTP)
- **CV Download** — Secure AWS S3 integration with API key protection
- **CI/CD** — GitHub Actions for testing and deployment
- **Docker Ready** — Containerized web and API apps

### Portfolio Sections

| Section          | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| **Hero**         | Animated profile image, social links, "Available for work" badge |
| **About**        | Services showcase with icons                                     |
| **Skills**       | Progress bars grouped by category                                |
| **Projects**     | Card gallery with detail modals                                  |
| **Timeline**     | Professional experience & education                              |
| **Certificates** | Certification gallery with modals                                |
| **Contact**      | Form with validation                                             |

## 📁 Project Structure

```
personal-portofolio/
├── .github/workflows/       # CI/CD pipelines
│   ├── ci-cd.yml           # Main deployment
│   └── pr-checks.yml       # PR validation
├── apps/
│   ├── api/                # NestJS backend
│   │   └── src/
│   │       ├── common/     # Shared guards (ApiKeyGuard)
│   │       ├── cv/         # CV module (S3 integration)
│   │       └── email/      # Email module (nodemailer)
│   └── web/                # Next.js frontend
│       ├── app/            # App Router pages & API routes
│       ├── components/     # UI components
│       │   ├── common/     # Button, Card, Modal, Input, etc.
│       │   └── layout/     # Navbar, Footer, Toast, WelcomeModal
│       ├── features/home/  # Page sections
│       ├── hooks/          # Custom React hooks
│       ├── lib/            # Utils, constants, data
│       ├── services/       # API service layer
│       └── store/          # React contexts
├── packages/
│   ├── shared-types/       # TypeScript definitions
│   └── shared-utils/       # Shared utilities
├── Dockerfile.api
├── Dockerfile.web
└── package.json            # Workspace config
```

## 🎨 Design System

### Semantic Spacing Classes

Defined in `globals.css` for consistent layout across the app:

```css
/* Gap utilities */
.gap-content    { gap: 1rem; }    /* 16px - card content */
.gap-component  { gap: 1.5rem; }  /* 24px - component stacks */
.gap-grid       { gap: 2rem; }    /* 32px - grid cards */
.gap-section    { gap: 3rem; }    /* 48px - major sections */

/* Responsive padding */
.p-section      /* 16px mobile → 24px tablet → 32px desktop */
.p-card         /* 12px mobile → 16px tablet → 24px desktop */
```

**Usage:**

```tsx
<Section className="p-section md:p-section-md lg:p-section-lg">
<div className="grid gap-grid">
<Card className="p-card sm:p-card-md md:p-card-lg">
```

### Theme

- **Primary**: Blue-teal `hsl(200 90% 45%)`
- **Accent**: Purple `hsl(270 85% 60%)`
- **Glassmorphism**: `.glass-zone`, `.glass-strong`, `.glass-ultra`
- **Tailwind v4 syntax**: `[hsl(var(--color)/0.8)]` for opacity

## 🛠️ Setup

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
# Clone
git clone https://github.com/robertfloria/personal-portofolio.git
cd personal-portofolio

# Install all dependencies
npm install

# Build shared packages
npm run build --workspace=@portfolio/shared-types
npm run build --workspace=@portfolio/shared-utils
```

### Environment Variables

**API** (`apps/api/.env`):

```env
PORT=4000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
API_SECRET=your-api-key

# Gmail SMTP
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RECIPIENT_EMAIL=your-email@gmail.com

# AWS S3 (CV)
AWS_REGION=your-region
AWS_ACCESS_KEY_ID=your-key
AWS_SECRET_ACCESS_KEY=your-secret
AWS_S3_BUCKET=your-bucket
AWS_S3_CV_KEY=cv.pdf
```

**Web** (`apps/web/.env.local`):

```env
NEST_API_URL=http://localhost:4000/api
API_SECRET=your-api-key
```

### Development

```bash
# Run both apps concurrently
npm run dev

# Or separately
npm run dev:api   # http://localhost:4000
npm run dev:web   # http://localhost:3000
```

### Production

```bash
npm run build
npm run start:prod --workspace=api
npm run start --workspace=web
```

## 🐳 Docker

```bash
# Build
docker build -f Dockerfile.web -t portfolio-web .
docker build -f Dockerfile.api -t portfolio-api .

# Run
docker run -p 3000:3000 portfolio-web
docker run -p 4000:4000 portfolio-api
```

## 🧪 Testing

```bash
npm run test      # All workspaces
npm run test --workspace=web
npm run test --workspace=api
```

Custom mocks in `apps/web/__mocks__/` for: `lottie-react`, `framer-motion`, `next-themes`, `next-image`

## 📜 Available Scripts

| Command              | Description           |
| -------------------- | --------------------- |
| `npm run dev`        | Start web + api       |
| `npm run dev:web`    | Start web only        |
| `npm run dev:api`    | Start api only        |
| `npm run build`      | Build all workspaces  |
| `npm run lint`       | Lint all              |
| `npm run lint:fix`   | Lint and fix          |
| `npm run type-check` | TypeScript check      |
| `npm run format`     | Prettier format       |
| `npm run test`       | Run all tests         |
| `npm run clean`      | Clean build artifacts |

## 📝 Customization

| Data          | Location                                                           |
| ------------- | ------------------------------------------------------------------ |
| Personal info | `apps/web/lib/data.ts`                                             |
| Skills        | `apps/web/features/home/sections/skills-section/lib/data.ts`       |
| Projects      | `apps/web/features/home/sections/projects-section/lib/data.ts`     |
| Timeline      | `apps/web/features/home/sections/timeline-section/lib/data.ts`     |
| Certificates  | `apps/web/features/home/sections/certificates-section/lib/data.ts` |
| Services      | `apps/web/features/home/sections/about-section/lib/data.ts`        |
| Theme/Styling | `apps/web/app/globals.css`                                         |
| Images        | `apps/web/public/images/`                                          |

## 📚 API Endpoints

### Email

```http
POST /api/email/send
Content-Type: application/json

{ "name": "John", "from": "john@example.com", "subject": "Hello", "message": "..." }
```

### CV Download

```http
GET /api/cv/pdf
X-API-Key: your-api-key
```

## 🔧 Tech Stack

### Frontend

- Next.js 16 (App Router, React 19)
- TypeScript 5.7
- Tailwind CSS v4
- Framer Motion
- React Query
- React Hook Form + Zod
- Lucide Icons

### Backend

- NestJS 11
- TypeScript
- AWS S3 SDK
- Nodemailer
- class-validator
- @nestjs/throttler

## 🚀 Deployment

Both **web** and **api** are deployed on **Railway**.

### Railway Setup

1. Create two services: `web` and `api`
2. Set root directory for each (`apps/web`, `apps/api`)
3. Add environment variables
4. Deploy

> Remember to update `NEST_API_URL` and `CORS_ORIGIN` for production!

## 👤 Author

**Robert Nicolae Floria**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/robert-nicolae-floria-51981920b/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?logo=github)](https://github.com/robertfloria)
[![Email](https://img.shields.io/badge/Email-Contact-red?logo=gmail)](mailto:robertfloria27@gmail.com)

---

Built with ❤️ using Next.js and NestJS
