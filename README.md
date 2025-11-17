# Personal Portfolio - Professional Monorepo

A modern personal portfolio built as a professional monorepo with Next.js 16 (frontend), NestJS (backend API), and shared packages. Features TypeScript, Tailwind CSS, clean architecture, and automated CI/CD.

## 🚀 Features

- **Monorepo Architecture**: Professional workspace structure with shared packages
- **Modern Stack**: Next.js 16, NestJS, TypeScript, Tailwind CSS
- **Shared Code**: Type-safe shared types and utilities between frontend/backend
- **CI/CD Pipeline**: Automated testing, building, and deployment via GitHub Actions
- **Dark Mode**: System-aware theme switching with persistent preferences
- **Responsive Design**: Mobile-first approach with smooth animations
- **Contact Form**: Email functionality with validation and rate limiting
- **Sections**:
  - Hero with personal info
  - About/Services
  - Skills with progress bars
  - Projects showcase with modals
  - Professional timeline
  - Certificates gallery
  - Contact form

## 📁 Monorepo Structure

```
personal-portfolio-monorepo/
├── .github/
│   └── workflows/           # CI/CD pipelines
│       ├── ci-cd.yml       # Main deployment
│       └── pr-checks.yml   # PR validation
├── apps/
│   ├── web/                # Next.js frontend
│   │   ├── app/           # Next.js app directory
│   │   ├── components/    # React components
│   │   ├── data/          # Static data
│   │   ├── lib/           # Utilities
│   │   └── types/         # Local types
│   └── api/               # NestJS backend
│       └── src/
│           ├── email/     # Email module
│           └── main.ts    # Entry point
├── packages/              # Shared code
│   ├── shared-types/     # TypeScript definitions
│   └── shared-utils/     # Validation, helpers
├── package.json          # Workspace configuration
└── README.md
│
└── api/              # NestJS backend
    └── src/
        └── email/    # Email module
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd personal-portofolio
   ```

2. **Install all dependencies (monorepo)**

   ```bash
   npm install
   ```

   This installs dependencies for all workspaces (web, api, and shared packages).

3. **Build shared packages**

   ```bash
   npm run build --workspace=@portfolio/shared-types
   npm run build --workspace=@portfolio/shared-utils
   ```

4. **Configure environment variables**

   **For the API** (`apps/api/.env`):

   ```env
   PORT=4000
   NODE_ENV=development
   CORS_ORIGIN=http://localhost:3000

   # Gmail Configuration
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   RECIPIENT_EMAIL=your-email@gmail.com
   ```

   **For the Web** (`apps/web/.env.local`):

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:4000/api
   ```

5. **Setup Gmail App Password** (for contact form):
   - Go to your Google Account settings
   - Enable 2-Step Verification
   - Generate an App Password for "Mail"
   - Use this password in `EMAIL_PASS`

### Running the Applications

#### Development Mode (from root)

**Option 1: Run both apps concurrently**

```bash
npm run dev
```

**Option 2: Run separately**

```bash
# Terminal 1 - API
npm run dev:api

# Terminal 2 - Web
npm run dev:web
```

- API: http://localhost:4000
- Web: http://localhost:3000

#### Production Mode

```bash
# Build everything
npm run build

# Start API
npm run start:prod --workspace=api

# Start Web
npm run start --workspace=web
```

## 🔧 Monorepo Commands

All commands run from the root directory:

```bash
# Development
npm run dev              # Start both web and api
npm run dev:web         # Start only web
npm run dev:api         # Start only api

# Building
npm run build           # Build all workspaces
npm run build:web       # Build web only
npm run build:api       # Build api only

# Quality
npm run lint            # Lint all workspaces
npm run lint:fix        # Lint and fix all
npm run type-check      # Type check all
npm run format          # Format all code

# Testing
npm run test            # Run all tests
npm run clean           # Clean all build artifacts
```

## 📝 Customization

### Personal Information

Update your personal details in `apps/web/data/`:

- `personal-info.ts` - Name, title, location, etc.
- `skills.ts` - Your technical skills
- `projects.ts` - Your projects
- `timeline.ts` - Education and work experience
- `certificates.ts` - Your certifications
- `social-links.ts` - Social media profiles
- `services.ts` - Services you offer

### Styling

- Colors and theme: `apps/web/app/globals.css`
- Tailwind config: `apps/web/tailwind.config.ts`
- Component styles: Inline Tailwind classes

### Images

Place your images in `apps/web/public/images/`:

- `icons/` - Technology and social media icons
- `projects/` - Project screenshots
- `certificates/` - Certificate images

## 🔧 Technologies Used

### Frontend

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **next-themes** - Dark mode

### Backend

- **NestJS** - Node.js framework
- **TypeScript** - Type safety
- **class-validator** - DTO validation
- **nodemailer** - Email sending
- **@nestjs/throttler** - Rate limiting

## 📚 API Endpoints

### Email

- `POST /api/email/send` - Send contact form email
  ```json
  {
    "name": "John Doe",
    "from": "john@example.com",
    "subject": "Project Inquiry",
    "message": "Hello, I'd like to discuss..."
  }
  ```

## 🚢 Deployment

### Vercel (Recommended for Next.js)

1. Push code to GitHub
2. Import project in Vercel
3. Set root directory to `apps/web`
4. Add environment variables
5. Deploy

### Backend Deployment Options

- **Railway** - Easy deployment with auto-scaling
- **Render** - Free tier available
- **Heroku** - Classic PaaS
- **DigitalOcean** - VPS option

Remember to update `NEXT_PUBLIC_API_URL` and `CORS_ORIGIN` in production!

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 👤 Author

**Robert Nicolae Floria**

- LinkedIn: [robert-nicolae-floria](https://www.linkedin.com/in/robert-nicolae-floria-51981920b/)
- GitHub: [@robertfloria](https://github.com/robertfloria)

---

Built with ❤️ using Next.js and NestJS
