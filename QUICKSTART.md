# Quick Start Guide

Get your project running in 3 minutes!

## Prerequisites
- Node.js 18+ installed
- npm or yarn

## Steps

1. **Clone and setup**
   ```bash
   git clone YOUR_REPO_URL
   cd VoiceLabITBS
   npm install
   ```

2. **Start development**
   ```bash
   npm run dev
   ```

3. **Open browser**
   - Navigate to `http://localhost:5000`
   - Done! 🎉

## Next Steps

- Check out [README.md](README.md) for more details
- See [DEPLOYMENT.md](DEPLOYMENT.md) to deploy to production
- Customize the content in `client/src/components/`

## Common Commands

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm start      # Run production build
npm run check  # Type check TypeScript
```

## Troubleshooting

**"npm is not recognized"**
- Install Node.js from [nodejs.org](https://nodejs.org)

**Port already in use**
- Change PORT in `server/index.ts` or kill the process on port 5000

**Build errors**
- Delete `node_modules` and run `npm install` again
- Check Node.js version: `node --version` (should be 18+)

## Need Help?

Check the full documentation or open an issue on GitHub.
