# 🚀 Deploy To-Do App to GitHub Pages

## Quick Setup Steps

### Step 1: Commit and Push Your Changes
```powershell
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### Step 2: Enable GitHub Pages on GitHub
1. Go to your repository: https://github.com/Menu-Makers/To-Do-app
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar under "Code and automation")
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. Click **Save**

### Step 3: Wait for Deployment
- The GitHub Action will automatically run
- Check the **Actions** tab to see deployment progress
- Wait 2-3 minutes for the first deployment

### Step 4: Access Your Live App
Your app will be live at:
```
https://menu-makers.github.io/To-Do-app/
```

---

## What's Been Configured

✅ **vite.config.js** - Added base path `/To-Do-app/`
✅ **package.json** - Added deploy script
✅ **.github/workflows/deploy.yml** - GitHub Actions workflow
✅ **index.html** - Entry point for the app

---

## Manual Deployment (Alternative)

If you prefer to deploy manually:

```powershell
# Build the project
npm run build

# Install gh-pages if not already installed
npm install --save-dev gh-pages

# Deploy to gh-pages branch
npm run deploy
```

---

## Troubleshooting

### Build Fails
```powershell
# Clean install
Remove-Item -Recurse -Force node_modules
npm install
npm run build
```

### Page Shows 404
1. Check GitHub Pages settings
2. Verify base path in vite.config.js matches repo name
3. Wait a few minutes after pushing

### Updates Not Showing
1. Clear browser cache (Ctrl + Shift + R)
2. Check Actions tab for deployment status
3. Verify latest commit was pushed

---

## Update Your Live App

Every time you push to main branch:
```powershell
git add .
git commit -m "Your update message"
git push origin main
```

The app will automatically redeploy in 2-3 minutes! 🎉
