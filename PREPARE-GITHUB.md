# Preparing Your Project for GitHub

Follow these steps to get your project ready for GitHub hosting.

## Step 1: Initialize Git (if not already done)

```bash
# Initialize git repository
git init

# Check current status
git status
```

## Step 2: Create a .gitignore (Already done!)

The `.gitignore` file has already been created with the right exclusions:
- ✅ `node_modules` - dependencies (will be reinstalled)
- ✅ `dist` - build output
- ✅ `.env` - environment variables
- ✅ IDE files
- ✅ OS files

## Step 3: Stage Your Files

```bash
# Add all files to git
git add .

# Check what will be committed
git status
```

## Step 4: Create Initial Commit

```bash
# Commit your files
git commit -m "Initial commit: Voice Lab ITBS landing page"

# Check commit was successful
git log
```

## Step 5: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "+" icon → "New repository"
3. Repository name: `VoiceLabITBS` (or your preferred name)
4. Description: "Landing page for The Voice Lab - ITBS students practicing English"
5. Choose Public or Private
6. **DO NOT** initialize with README, .gitignore, or license
7. Click "Create repository"

## Step 6: Connect and Push

```bash
# Add GitHub as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 7: Verify

1. Go to your GitHub repository
2. You should see all your files
3. Check that `README.md` is visible

## Step 8: Deploy to Production

### Option A: Vercel (Recommended - 2 minutes)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your repository
5. Click "Deploy"
6. Done! Your site is live

### Option B: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist/public`
6. Click "Deploy"

### Option C: Railway

1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository
6. Done!

## Checklist Before Pushing

- [ ] All code is working locally
- [ ] `.gitignore` is configured
- [ ] No sensitive data in code (API keys, passwords)
- [ ] `README.md` is complete
- [ ] All files are committed

## Common Issues

**"Repository not found"**
- Check the remote URL: `git remote -v`
- Verify repository name matches on GitHub

**"Permission denied"**
- Generate SSH key or use HTTPS
- Update credentials: `git config --global credential.helper store`

**"Large files"**
- Check `.gitignore` is working
- Use Git LFS for large assets if needed

## Updating Your Repo

After making changes:

```bash
# Check what changed
git status

# Add changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push
```

## Branch Strategy (Optional)

For collaboration:

```bash
# Create a development branch
git checkout -b develop

# Make changes and commit
git commit -m "New feature"

# Push branch
git push origin develop

# Merge to main (on GitHub via Pull Request)
```

## Next Steps After Deployment

1. ✅ Share the live URL
2. ✅ Set up a custom domain (optional)
3. ✅ Configure analytics (optional)
4. ✅ Set up continuous deployment

## Need Help?

- GitHub Documentation: [docs.github.com](https://docs.github.com)
- Git Cheat Sheet: [education.github.com/git-cheat-sheet-education.pdf](https://education.github.com/git-cheat-sheet-education.pdf)
- VS Code Git Tutorial: Built-in Git tutorial in VS Code

Your project is now ready for GitHub! 🚀
