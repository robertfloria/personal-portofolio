# Personal Portfolio - Professional Monorepo

A modern personal portfolio built as a professional monorepo with Next.js 16 (frontend), NestJS (backend API), and shared packages. Features TypeScript, Tailwind CSS, clean architecture, and automated CI/CD. Includes a featured "Personal Portfolio" project entry and robust email API with fast-fail timeouts and improved error handling.

# Robert Nicolae Floria - Personal Portfolio Monorepo

A modern, professional portfolio built as a monorepo with Next.js 16 (frontend), NestJS (backend API), and shared packages. Features TypeScript, Tailwind CSS, clean architecture, robust email API, and automated CI/CD. Includes a featured "Personal Portfolio" project entry, AI-powered integrations, and mobile app showcase.

## 🚀 Recent Improvements

- **Unified API Key Guard**: All API endpoints (CV, email, etc.) now use a single, reusable guard for security.
- **Secure Endpoints**: Sensitive API keys are never exposed to the client; all secrets are handled server-side.
- **CV Download**: Download your CV securely via a protected API route, with binary response handling and a reusable download utility.
- **Lottie Animations**: Integrated with `lottie-react` for beautiful UI animations; tests use a custom mock to avoid JSDOM/canvas errors.
- **React Query + NotificationProvider**: All mutation hooks use a reusable notification wrapper for consistent UX and less boilerplate.
- **Clean Architecture**: Service and hook layers are fully typed, extensible, and easy to maintain.
- **Testing**: Jest tests use custom mocks for Lottie, next-themes, framer-motion, and more. All suites pass.

## 🚀 Features

- **Monorepo Architecture**: Professional workspace with shared types and utilities
- **Modern Stack**: Next.js 16, NestJS, React Native (Expo), TypeScript, Tailwind CSS
- **AI Integration**: OpenAI-powered features, MCP servers, prompt engineering
- **Mobile App**: Expo-based cross-platform app published to Google Play & App Store
- **Shared Code**: Type-safe shared types and utilities between frontend/backend
- **CI/CD Pipeline**: Automated testing, building, and deployment via GitHub Actions & Jenkins
- **Dark Mode**: System-aware theme switching with persistent preferences
- **Responsive Design**: Mobile-first approach with smooth animations
- **Contact Form**: Email functionality with validation and rate limiting
- **Featured Sections**:
  - Hero with personal info
  - About/Services
  - Skills with progress bars
  - Projects showcase (web, mobile, AI)
  - Professional timeline
  - Certificates gallery
  - Contact form

## 📁 Monorepo Structure & CV Download Flow

### Key Folders & Modules

```
personal-portofolio/
├── apps/
│   ├── api/
│   │   ├── src/
│   │   │   ├── email/      # Email module (API, DTO, guards)
│   │   │   ├── cv/         # CV module (S3 integration, controller, service, guard)
│   │   │   └── common/     # Shared guards (ApiKeyGuard)
│   │   └── test/           # e2e tests
│   └── web/
│       ├── app/            # Next.js app directory
│       ├── components/     # React components (common, layout)
│       ├── features/
│       │   └── home/sections/ # Hero, About, Skills, Projects, Timeline, Certificates, Contact
│       ├── hooks/          # Custom React hooks (use-cv-download, use-send-email)
│       ├── lib/            # Data, constants, utils (downloadFile)
│       ├── services/       # API services (email, cv)
│       ├── store/          # Contexts
│       └── types/          # Local types
├── packages/
│   ├── shared-types/       # TypeScript definitions
│   └── shared-utils/       # Validation, helpers
└── ...
```

### CV Download Flow (AWS S3 Integration)

- **Storage**: Your CV PDF is stored securely in AWS S3.
- **Backend (NestJS)**:
  - `cv.service.ts`: Connects to S3, retrieves the PDF as a stream.
  - `cv.controller.ts`: Exposes a `/cv/pdf` endpoint, protected by `ApiKeyGuard`.
  - Environment variables in `apps/api/.env`:
    ```env
    AWS_REGION=your-region
    AWS_ACCESS_KEY_ID=your-access-key-id
    AWS_SECRET_ACCESS_KEY=your-secret-access-key
    AWS_S3_BUCKET=your-bucket-name
    AWS_S3_CV_KEY=cv.pdf
    API_SECRET=your-api-key
    ```
- **Frontend (Next.js)**:
  - `app/api/cv/route.ts`: Proxies requests to the backend, returns the PDF as a binary response.
  - `download-cv-button.tsx`: Uses a custom hook and utility to trigger the download and save the file.
  - No secrets are exposed to the client; all security is handled server-side.

### Example Usage

1. User clicks "Download CV" button in the UI.
2. Next.js API route (`/api/cv`) calls the backend (`/cv/pdf`) with the API key (server-side only).
3. Backend retrieves the PDF from S3 and streams it back.
4. Frontend receives the binary response and saves the file using a reusable utility.

```
personal-portofolio/
├── .github/
│   └── workflows/           # CI/CD pipelines
├── apps/
│   ├── api/                # NestJS backend
│   │   ├── src/
│   │   │   ├── email/      # Email module (API, DTO, guards)
│   │   │   └── ...         # Controllers, services
│   │   └── test/           # e2e tests
│   └── web/                # Next.js frontend
│       ├── app/            # Next.js app directory
│       ├── components/     # React components (common, layout)
│       ├── features/
│       │   └── home/sections/ # Hero, About, Skills, Projects, Timeline, Certificates, Contact
│       ├── hooks/          # Custom React hooks
│       ├── lib/            # Data, constants, utils
│       ├── public/images/  # Images (certificates, profile, projects)
│       ├── services/       # Email service
│       ├── store/          # Contexts
│       └── types/          # Local types
├── packages/
│   ├── shared-types/       # TypeScript definitions
│   └── shared-utils/       # Validation, helpers
├── Dockerfile.api          # API Docker config
├── Dockerfile.web          # Web Docker config
├── package.json            # Workspace configuration
└── README.md
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
   NEST_API_URL=http://localhost:4000/api
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

## 🐳 Docker Usage

Both web and API have Dockerfiles for containerized local development and deployment.

- `Dockerfile.web` — Next.js frontend
- `Dockerfile.api` — NestJS backend

### Build and Run Locally

```bash
# Build web image
docker build -f Dockerfile.web -t portfolio-web .
# Build api image
docker build -f Dockerfile.api -t portfolio-api .

# Run containers (example)
docker run -p 3000:3000 portfolio-web
docker run -p 4000:4000 portfolio-api
```

## 🧩 Shared Packages

- `packages/shared-types`: TypeScript type definitions shared between frontend and backend
- `packages/shared-utils`: Utility functions, validation, and logging (dev-console)

## 🧪 Testing

- **Frontend (web)**: Jest with React Testing Library. Custom mocks in `__mocks__` for:
  - `lottie-react` (prevents JSDOM/canvas errors)
  - `next-themes`, `next-image`, `framer-motion`
- **Backend (api)**: Jest unit tests and e2e tests (see `test/app.e2e-spec.ts` and `test/jest-e2e.json`)

### Running Tests

```bash
npm test
```

If you add new animation components, create a mock in `__mocks__` to keep tests passing.

## 🔄 CI/CD Workflows

- `.github/workflows/ci-cd.yml`: Main deployment pipeline (build, test, deploy)
- `.github/workflows/pr-checks.yml`: PR validation (lint, type-check, test)

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

Update your personal details in `apps/web/lib/data.ts`:

- `name`, `title`, `bio`, `about`, `email`, `phone`, `location`, `education`, `university`, `profileImage`
- Social links: GitHub, LinkedIn, Email

### Skills

Edit your skills in `apps/web/features/home/sections/skills-section/lib/data.ts`:

- Add or update skills, categories, proficiency, years of experience

### Projects

Showcase your projects in `apps/web/features/home/sections/projects-section/lib/data.ts`:

- Add new projects, update details, images, technologies, features

### Timeline

Edit your education and work experience in `apps/web/features/home/sections/timeline-section/lib/data.ts`

### Certificates

Add certificates in `apps/web/features/home/sections/certificates-section/lib/data.ts`

### Services

Edit offered services in `apps/web/features/home/sections/about-section/lib/data.ts`

### Images

Place your images in `apps/web/public/images/`:

- `certificates/` - Certificate images
- `profile/` - Profile photo
- `projects/` - Project screenshots

## 🔧 Technologies Used

### Frontend

- **Next.js 16** - React framework with App Router
- **React Native (Expo)** - Mobile app development
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

### AI & DevOps

- **OpenAI API** - AI-powered features
- **GitHub Copilot** - AI coding assistant
- **MCP Servers** - Model Context Protocol
- **Jenkins** - CI/CD pipelines
- **Docker** - Containerization

## 📚 API Endpoints & Email Implementation

### Email

- `POST /api/email/send` — Send contact form email
  ```json
  {
    "name": "John Doe",
    "from": "john@example.com",
    "subject": "Project Inquiry",
    "message": "Hello, I'd like to discuss..."
  }
  ```

#### Implementation Notes

- Uses Nodemailer with Gmail SMTP (app password required)
- API fails fast (10s timeout) if SMTP is unreachable
- Transporter verified on startup (logs success/failure)
- All errors logged and returned with clear messages
- For production, consider SendGrid/Mailgun/Postmark HTTP APIs for more reliable delivery

#### Troubleshooting Email Delivery

- Check outbound SMTP connectivity (e.g., `Test-NetConnection -ComputerName smtp.gmail.com -Port 587`)
- Correct Gmail app password and 2FA
- Cloud provider firewall rules (many block SMTP ports)
- API logs for transporter verification and send errors

## ✅ Quality & Status

- All code is linted and passes tests across all workspaces
- ESLint warnings remain for unused imports (safe to ignore or clean up)
- Email API is robust and fails fast for unreachable SMTP

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

Remember to update `NEST_API_URL` and `CORS_ORIGIN` in production!

## 📝 Author & Contact

**Robert Nicolae Floria**

- LinkedIn: [robert-nicolae-floria](https://www.linkedin.com/in/robert-nicolae-floria-51981920b/)
- GitHub: [@robertfloria](https://github.com/robertfloria)
- Email: robertfloria27@gmail.com

---

Built with ❤️ using Next.js, React Native, and NestJS

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
   NEST_API_URL=http://localhost:4000/api
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

## 🐳 Docker Usage

Both web and API have Dockerfiles for containerized local development and deployment.

- `Dockerfile.web` — Next.js frontend
- `Dockerfile.api` — NestJS backend

### Build and Run Locally

```bash
# Build web image
docker build -f Dockerfile.web -t portfolio-web .
# Build api image
docker build -f Dockerfile.api -t portfolio-api .

# Run containers (example)
docker run -p 3000:3000 portfolio-web
docker run -p 4000:4000 portfolio-api
```

## 🧩 Shared Packages

- `packages/shared-types`: TypeScript type definitions shared between frontend and backend
- `packages/shared-utils`: Utility functions, validation, and logging (dev-console)

## 🧪 Testing

- **Frontend (web)**: Jest with React Testing Library, plus custom mocks in `__mocks__` for next-themes, next-image, framer-motion
- **Backend (api)**: Jest unit tests and e2e tests (see `test/app.e2e-spec.ts` and `test/jest-e2e.json`)

## 🔄 CI/CD Workflows

- `.github/workflows/ci-cd.yml`: Main deployment pipeline (build, test, deploy)
- `.github/workflows/pr-checks.yml`: PR validation (lint, type-check, test)

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

## 📚 API Endpoints & Email Implementation

### Email

- `POST /api/email/send` — Send contact form email
  ```json
  {
    "name": "John Doe",
    "from": "john@example.com",
    "subject": "Project Inquiry",
    "message": "Hello, I'd like to discuss..."
  }
  ```

#### Implementation Notes

- Uses Nodemailer with Gmail SMTP (app password required)
- API is instrumented to fail fast (10s timeout) if SMTP is unreachable, so requests never hang indefinitely
- Transporter is verified on startup (logs success/failure)
- All errors are logged and returned with clear messages
- For production, consider using SendGrid/Mailgun/Postmark HTTP APIs for more reliable delivery

#### Troubleshooting Email Delivery

- If requests hang or time out, check:
  - Outbound SMTP connectivity (e.g., `Test-NetConnection -ComputerName smtp.gmail.com -Port 587`)
  - Correct Gmail app password and 2FA
  - Cloud provider firewall rules (many block SMTP ports)
  - API logs for transporter verification and send errors
- If you want to switch to SendGrid or another provider, update the API service (see code comments)

## ✅ Quality & Status

- All code is linted and passes tests across all workspaces
- ESLint warnings remain for unused imports (safe to ignore or clean up)
- Email API is robust and fails fast for unreachable SMTP

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

Remember to update `NEST_API_URL` and `CORS_ORIGIN` in production!

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 👤 Author

**Robert Nicolae Floria**

- LinkedIn: [robert-nicolae-floria](https://www.linkedin.com/in/robert-nicolae-floria-51981920b/)
- GitHub: [@robertfloria](https://github.com/robertfloria)

---

Built with ❤️ using Next.js and NestJS
