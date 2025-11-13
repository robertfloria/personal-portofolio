# GitHub Secrets Configuration Guide

This guide explains how to set up all required secrets for the CI/CD pipeline.

## Required Secrets

### 1. Vercel Deployment (Web App)

#### VERCEL_TOKEN
1. Go to https://vercel.com/account/tokens
2. Click "Create Token"
3. Name it "GitHub Actions"
4. Copy the token
5. In GitHub: Settings → Secrets → New secret
   - Name: `VERCEL_TOKEN`
   - Value: (paste token)

#### VERCEL_ORG_ID
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `cd apps/web && vercel link`
3. Follow prompts to link project
4. Run: `cat .vercel/project.json`
5. Copy `orgId` value
6. In GitHub: Settings → Secrets → New secret
   - Name: `VERCEL_ORG_ID`
   - Value: (paste orgId)

#### VERCEL_PROJECT_ID
1. From same `.vercel/project.json` file
2. Copy `projectId` value
3. In GitHub: Settings → Secrets → New secret
   - Name: `VERCEL_PROJECT_ID`
   - Value: (paste projectId)

### 2. Railway Deployment (API)

#### RAILWAY_TOKEN
1. Go to https://railway.app/account/tokens
2. Click "Create New Token"
3. Name it "GitHub Actions"
4. Copy the token
5. In GitHub: Settings → Secrets → New secret
   - Name: `RAILWAY_TOKEN`
   - Value: (paste token)

### 3. Environment Variables

#### NEXT_PUBLIC_API_URL
- This is your production API URL from Railway
- Example: `https://your-api.railway.app/api`
- In GitHub: Settings → Secrets → New secret
  - Name: `NEXT_PUBLIC_API_URL`
  - Value: `https://your-api.railway.app/api`

## Complete Setup Checklist

- [ ] Create Vercel account and project
- [ ] Link Vercel project locally
- [ ] Add `VERCEL_TOKEN`
- [ ] Add `VERCEL_ORG_ID`
- [ ] Add `VERCEL_PROJECT_ID`
- [ ] Create Railway account and project
- [ ] Add `RAILWAY_TOKEN`
- [ ] Deploy API to Railway (get URL)
- [ ] Add `NEXT_PUBLIC_API_URL`
- [ ] Test CI/CD by pushing to main branch

## Adding Secrets in GitHub

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Enter name and value
6. Click **Add secret**

## Testing the Setup

### Test Locally First

```bash
# Test Vercel deployment
cd apps/web
vercel --token=YOUR_TOKEN

# Test Railway deployment
cd apps/api
railway login
railway up
```

### Test GitHub Actions

1. Create a test branch:
   ```bash
   git checkout -b test-ci-cd
   ```

2. Make a small change and push:
   ```bash
   git add .
   git commit -m "test: CI/CD setup"
   git push origin test-ci-cd
   ```

3. Check **Actions** tab in GitHub
4. Verify all jobs pass ✅

## Troubleshooting

### "Invalid token" error
- Regenerate token in Vercel/Railway
- Update secret in GitHub

### "Project not found" error
- Verify `VERCEL_PROJECT_ID` is correct
- Run `vercel link` again

### "Cannot find module" error
- Ensure shared packages are built first in CI
- Check workflow job order

### Railway deployment fails
- Check Railway service is configured correctly
- Verify `RAILWAY_TOKEN` has correct permissions
- Check Railway logs in dashboard

## Security Best Practices

1. **Never commit secrets** to git
2. **Rotate tokens** periodically (every 3-6 months)
3. **Use environment-specific secrets** (staging/production)
4. **Limit token scopes** to minimum required permissions
5. **Audit secret usage** regularly in GitHub Actions logs

## Alternative: Environment Secrets

For multi-environment setups:

1. Create environments in GitHub:
   - Settings → Environments → New environment
   - Name: `production`, `staging`, etc.

2. Add secrets to specific environments

3. Reference in workflow:
   ```yaml
   environment:
     name: production
   ```

## Contact

If you need help setting up secrets, check:
- [GitHub Secrets Documentation](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Railway CLI Documentation](https://docs.railway.app/develop/cli)
