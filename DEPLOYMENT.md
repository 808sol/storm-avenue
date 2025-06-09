# Deployment Guide

This guide will walk you through deploying the Storm Avenue Roofing website to GitHub and Vercel.

## Prerequisites

- GitHub account
- Vercel account (free tier is sufficient)
- Git installed on your machine

## Step 1: Prepare for GitHub

1. **Initialize Git Repository** (if not already done):
```bash
cd evergreen-roofing-clone
git init
```

2. **Add all files**:
```bash
git add .
```

3. **Commit your code**:
```bash
git commit -m "Initial commit: Storm Avenue Roofing website"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and log in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository: `storm-avenue-roofing`
5. Set it to **Public** or **Private** (your choice)
6. **Do NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Step 3: Push to GitHub

1. **Add GitHub as remote origin**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/storm-avenue-roofing.git
```
*Replace `YOUR_USERNAME` with your GitHub username*

2. **Push your code**:
```bash
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Vercel

### Option A: Automatic Deployment (Recommended)

1. Go to [Vercel.com](https://vercel.com) and log in
2. Click "Add New..." → "Project"
3. Import your GitHub repository:
   - Find "storm-avenue-roofing" in the list
   - Click "Import"
4. Configure the project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `bun run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `bun install` (auto-detected)
5. Click "Deploy"

### Option B: Manual Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from your project directory:
```bash
cd evergreen-roofing-clone
vercel
```

4. Follow the prompts:
   - Link to existing project? **N**
   - Project name: `storm-avenue-roofing`
   - Directory: `./` (current directory)

## Step 5: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Step 6: Environment Variables (If Needed)

If you have environment variables:

1. In Vercel dashboard, go to "Settings" → "Environment Variables"
2. Add your variables for Production, Preview, and Development
3. Redeploy if needed

## Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy every push to the `main` branch to production
- Create preview deployments for pull requests
- Show build logs and deployment status

## Build Commands Summary

For reference, here are the key commands:

```bash
# Development
bun dev

# Build for production
bun run build

# Start production server locally
bun start

# Lint and format
bun run lint
bun run format

# Type checking
bun run typecheck
```

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Run `bun run build` locally to test
- Ensure all dependencies are in package.json

### 404 Errors
- Check your routes in the `src/app` directory
- Verify `next.config.js` redirects

### Slow Loading
- Check image optimization settings
- Verify caching headers in `vercel.json`

## Success! 🎉

Your Storm Avenue Roofing website is now live! The deployment will be available at:
- Vercel URL: `https://storm-avenue-roofing.vercel.app`
- Custom domain: Your configured domain

## Ongoing Updates

To update your live website:
1. Make changes to your code
2. Commit and push to GitHub:
```bash
git add .
git commit -m "Description of changes"
git push origin main
```
3. Vercel will automatically deploy your changes

---

**Need Help?**
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [GitHub Documentation](https://docs.github.com)
