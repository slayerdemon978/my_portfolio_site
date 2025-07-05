# Deployment Guide

This document provides comprehensive instructions for deploying your portfolio website.

## 🚀 Quick Start

### Local Development
```bash
npm install
npm run dev
```
Visit `http://localhost:12000`

### Production Build
```bash
npm run build
npm run preview
```

## 📦 Deployment Options

### 1. Vercel (Recommended)

**Automatic Deployment:**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy on every push

**Manual Deployment:**
```bash
npm i -g vercel
vercel
```

**Configuration:**
- `vercel.json` is already configured
- Automatic builds from `dist/` folder
- Custom 404 page handling
- Optimized for SPA routing

### 2. Netlify

**Drag & Drop:**
1. Run `npm run build`
2. Drag the `dist/` folder to Netlify

**Git Integration:**
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### 3. GitHub Pages

```bash
npm run build
# Deploy contents of dist/ folder to gh-pages branch
```

### 4. Other Platforms

The `dist/` folder can be deployed to:
- AWS S3 + CloudFront
- Firebase Hosting
- DigitalOcean App Platform
- Surge.sh

## 🔧 Build Configuration

### Vite Configuration
- **Port**: 12000 (configurable)
- **CORS**: Enabled for development
- **Build**: Optimized for production
- **Assets**: Chunked and compressed

### Environment Variables
No environment variables required for basic functionality.

## 📊 Build Output

After running `npm run build`, you'll get:

```
dist/
├── index.html          (1.20 kB)
├── assets/
│   ├── index-*.css     (~74 kB)
│   ├── ui-*.js         (~40 kB)
│   ├── vendor-*.js     (~141 kB)
│   └── index-*.js      (~158 kB)
```

**Total Size**: ~414 kB (uncompressed)
**Gzipped**: ~120 kB

## 🛠️ Troubleshooting

### Common Issues

**Build Fails:**
- Check Node.js version (v18+ required)
- Clear node_modules and reinstall
- Check for TypeScript errors

**Deployment Issues:**
- Ensure `dist/` folder is being deployed
- Check routing configuration for SPA
- Verify build command is `npm run build`

**Performance:**
- All assets are optimized and chunked
- Images should be optimized before adding
- Consider lazy loading for large components

### Security Vulnerabilities

Current status: 2 moderate vulnerabilities in development dependencies (esbuild/vite)
- These don't affect production builds
- Monitor for updates to resolve

## 📈 Performance Optimizations

### Already Implemented:
- Code splitting
- Asset optimization
- Gzip compression
- Tree shaking
- CSS purging

### Recommendations:
- Add image optimization
- Implement service worker for caching
- Consider CDN for static assets

## 🔍 Monitoring

### Recommended Tools:
- Vercel Analytics (if using Vercel)
- Google Analytics
- Lighthouse for performance monitoring

## 📝 Maintenance

### Regular Tasks:
- Update dependencies monthly
- Monitor security vulnerabilities
- Test builds before deployment
- Backup important data

### Dependency Updates:
```bash
# Check for updates
npx npm-check-updates

# Update minor/patch versions
npx npm-check-updates -u --target minor
npm install

# Test after updates
npm run build
npm run preview
```

## 🆘 Support

For deployment issues:
1. Check this guide first
2. Review platform-specific documentation
3. Check build logs for errors
4. Ensure all dependencies are installed

---

Last updated: 2025-07-05