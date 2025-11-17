# Quick Start Guide

## Getting Started in 5 Minutes

### 1. Install Dependencies (both apps)

```bash
# Web app
cd apps/web
npm install

# API app
cd ../api
npm install
```

### 2. Configure Environment Variables

**API** - Create `apps/api/.env`:

```env
PORT=4000
CORS_ORIGIN=http://localhost:3000
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
RECIPIENT_EMAIL=your-gmail@gmail.com
```

**Web** - Already configured in `apps/web/.env.local`

### 3. Start Development Servers

Open 2 terminals:

**Terminal 1 - API:**

```bash
cd apps/api
npm run start:dev
```

**Terminal 2 - Web:**

```bash
cd apps/web
npm run dev
```

### 4. View Your Portfolio

Open http://localhost:3000 in your browser!

## Customize Your Portfolio

Edit these files in `apps/web/data/`:

- `personal-info.ts` - Your name, title, bio
- `skills.ts` - Your tech skills
- `projects.ts` - Your projects
- `timeline.ts` - Work experience & education
- `certificates.ts` - Your certifications
- `social-links.ts` - Social media URLs

## Gmail Setup (for contact form)

1. Enable 2-Step Verification in Google Account
2. Generate App Password:
   - Go to https://myaccount.google.com/security
   - Search "App passwords"
   - Create new password for "Mail"
3. Use this password in `EMAIL_PASS`

## Next Steps

- Update personal data files
- Add your own images to `apps/web/public/images/`
- Customize colors in `apps/web/app/globals.css`
- Test the contact form
- Deploy to Vercel (web) and Railway/Render (API)

Happy coding! 🚀
