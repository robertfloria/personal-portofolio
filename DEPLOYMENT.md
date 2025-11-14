# Deployment Guide

## ✅ Updated - Clean Architecture Implemented

Your portfolio now has professional clean architecture with Redux, React Query, and reusable components ready for deployment.

This guide will help you deploy your portfolio to production.

## Frontend Deployment (Vercel)

### Option 1: Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push
   ```

2. **Deploy on Vercel**
   - Go to https://vercel.com
   - Click "Import Project"
   - Select your GitHub repository
   - Configure:
     - **Root Directory**: `apps/web`
     - **Framework Preset**: Next.js
     - **Build Command**: `npm run build`
     - **Output Directory**: `.next`

3. **Add Environment Variables**
   - `NEXT_PUBLIC_API_URL` = Your API URL (from step 2)

4. **Deploy!**

### Option 2: Vercel CLI

```bash
cd apps/web
npm install -g vercel
vercel --prod
```

## Backend Deployment

### Option 1: Railway (Easiest)

1. **Create Railway Account**
   - Go to https://railway.app
   - Sign up with GitHub

2. **Deploy**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway will auto-detect NestJS

3. **Configure**
   - Set **Root Directory**: `apps/api`
   - Add environment variables:
     ```
     PORT=4000
     NODE_ENV=production
     CORS_ORIGIN=https://your-vercel-app.vercel.app
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-app-password
     RECIPIENT_EMAIL=your-email@gmail.com
     ```

4. **Get URL**
   - Railway provides a URL: `https://your-app.railway.app`
   - Update `NEXT_PUBLIC_API_URL` in Vercel with this URL

### Option 2: Render

1. **Create Render Account**
   - Go to https://render.com
   - Sign up

2. **New Web Service**
   - Connect GitHub repository
   - Configure:
     - **Root Directory**: `apps/api`
     - **Build Command**: `npm install && npm run build`
     - **Start Command**: `npm run start:prod`

3. **Environment Variables**
   Add the same variables as Railway

### Option 3: DigitalOcean App Platform

1. **Create App**
   - Go to DigitalOcean
   - Create new App from GitHub

2. **Configure**
   - Root: `apps/api`
   - Build: `npm install && npm run build`
   - Run: `npm run start:prod`

3. **Environment Variables**
   Add production environment variables

## Post-Deployment Checklist

- [ ] Test contact form in production (now uses React Query)
- [ ] Check all links work
- [ ] Verify dark mode works (Redux state management)
- [ ] Test on mobile devices
- [ ] Check API CORS settings
- [ ] Update social media links
- [ ] Add Google Analytics (optional)
- [ ] Setup custom domain (optional)
- [ ] Verify all refactored sections work (About, Skills, Projects, Timeline, Certificates, Contact)
- [ ] Test Redux DevTools (disabled in production automatically)
- [ ] Verify React Query caching works correctly

## 🎯 Clean Architecture Deployment Notes

With the new architecture, make sure:

1. **HTTP Client** - `NEXT_PUBLIC_API_URL` environment variable is set correctly in Vercel
2. **Redux Store** - DevTools are automatically disabled in production builds
3. **React Query** - Default caching policies work (5min stale time, 1 retry)
4. **Validation** - Zod schemas validate on both client and server
5. **Components** - All reusable components are tree-shaken properly
6. **Hooks** - Custom hooks work without development-only dependencies
7. **Services** - Email service uses production API URL from environment

## Custom Domain Setup

### Vercel (Frontend)
1. Go to Project Settings > Domains
2. Add your domain
3. Update DNS records as instructed

### Railway/Render (Backend)
1. Go to Settings > Custom Domain
2. Add your API subdomain (e.g., api.yourdomain.com)
3. Update DNS CNAME record

## Monitoring & Analytics

### Frontend
- **Vercel Analytics**: Built-in (free)
- **Google Analytics**: Add script to layout.tsx

### Backend
- **Railway Metrics**: Built-in dashboard
- **Sentry**: For error tracking (optional)

## Environment Variables Summary

### Production Frontend (.env.production)
```env
NEXT_PUBLIC_API_URL=https://your-api.railway.app/api
```

### Production Backend (.env)
```env
PORT=4000
NODE_ENV=production
CORS_ORIGIN=https://your-portfolio.vercel.app
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RECIPIENT_EMAIL=your-email@gmail.com
```

## Troubleshooting

### Contact Form Not Working
- Check API URL is correct in Vercel environment variables
- Verify CORS_ORIGIN in backend matches your Vercel domain
- Check Gmail App Password is correct
- Look at backend logs in Railway/Render

### Build Failures
- Ensure all dependencies are in package.json
- Check TypeScript errors locally first
- Verify environment variables are set

### 404 Errors
- Make sure root directory is set correctly
- Check build output directory

## Security Best Practices

1. **Never commit `.env` files**
2. **Use App Passwords, not real Gmail password**
3. **Enable rate limiting** (already configured in NestJS)
4. **Keep dependencies updated**: `npm audit fix`
5. **Use HTTPS only** in production

## Performance Optimization

1. **Enable Vercel Analytics** for monitoring
2. **Optimize images** with Next.js Image component
3. **Use CDN** for static assets
4. **Enable caching** headers

## Continuous Deployment

Both Vercel and Railway support automatic deployments:
- Push to `main` branch → Auto deploy
- Pull Requests → Preview deployments

---

Need help? Check the main README.md or open an issue!
