# Deployment Guide

This guide will help you deploy The Voice Lab landing page to various platforms.

## 🚀 Quick Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub repository
   - Vercel will automatically detect the settings
   - Click "Deploy"

3. **Done!** Your site will be live at `https://your-project.vercel.app`

## 🌐 Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist/public` folder
   - Or connect your GitHub repo for automatic deployments

## 🚂 Deploy to Railway

1. **Create a Railway account** at [railway.app](https://railway.app)
2. **Create a new project** and select "Deploy from GitHub repo"
3. **Railway will automatically:**
   - Detect your Node.js app
   - Install dependencies
   - Run `npm start`
   - Expose your app on a public URL

4. **Set environment variables** (if needed):
   - Go to your project settings
   - Add any required environment variables

## 🌊 Deploy to Render

1. **Create a Render account** at [render.com](https://render.com)
2. **Create a new Web Service**
3. **Connect your GitHub repository**
4. **Configure settings:**
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`
   - **Environment:** Node
   - **Node Version:** 18+

5. **Click "Create Web Service"**

## 📋 Environment Variables

If your app requires environment variables:

1. Create a `.env` file (for local development):
   ```
   NODE_ENV=development
   PORT=5000
   ```

2. Add the same variables to your hosting platform's dashboard

## ✅ Post-Deployment Checklist

- [ ] Test the live site
- [ ] Check mobile responsiveness
- [ ] Verify all images load correctly
- [ ] Test form submissions (if applicable)
- [ ] Check console for errors
- [ ] Verify domain/CNAME settings (if using custom domain)

## 🔧 Troubleshooting

**Build fails?**
- Check that all dependencies are in `package.json`
- Ensure Node.js version is 18+
- Review build logs for specific errors

**Site shows 404 errors?**
- Verify SPA routing is configured correctly
- Check that static file serving is set up properly

**Styles not loading?**
- Ensure CSS files are being generated in the build
- Check that Tailwind is configured correctly

## 📞 Need Help?

If you encounter issues, check the [GitHub Issues](YOUR_REPO_URL/issues) or contact support.
