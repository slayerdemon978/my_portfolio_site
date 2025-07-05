# Portfolio Site

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Fully responsive design that works on all devices
- **Component Library**: Uses Radix UI components with shadcn/ui styling
- **Dark/Light Theme**: Theme switching capability with next-themes
- **Smooth Animations**: Beautiful animations with Tailwind CSS and custom keyframes
- **Fast Performance**: Optimized build with code splitting and lazy loading
- **SEO Ready**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **Theme**: next-themes
- **Animations**: Tailwind CSS animations

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:12000`

## 🏗️ Build

To build the project for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🚀 Deployment

### Vercel (Recommended)

This project is optimized for Vercel deployment with the included `vercel.json` configuration.

**Option 1: Vercel CLI**
```bash
npm i -g vercel
vercel
```

**Option 2: GitHub Integration**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy on every push

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify, or connect your GitHub repository for automatic deployments.

### Other Static Hosting

The built files in the `dist` folder can be deployed to any static hosting service:
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Surge.sh
- DigitalOcean App Platform

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact form
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Main page
│   └── NotFound.tsx    # 404 page
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Colors and Theme

The color scheme can be customized in:
- `src/index.css` - CSS custom properties
- `tailwind.config.ts` - Tailwind theme configuration

### Content

Update the portfolio content by editing the components in `src/components/`:
- `Hero.tsx` - Main hero section
- `About.tsx` - About section
- `Projects.tsx` - Projects showcase
- `Experience.tsx` - Work experience
- `Education.tsx` - Education background
- `Contact.tsx` - Contact information

### Styling

The project uses Tailwind CSS for styling. You can:
- Modify existing styles in component files
- Add new utility classes
- Customize the Tailwind configuration in `tailwind.config.ts`

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Development

### Local Development

1. Install Node.js (v18 or higher)
2. Clone the repository
3. Run `npm install`
4. Run `npm run dev`
5. Open `http://localhost:12000`

### Environment Variables

No environment variables are required for basic functionality.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React and TypeScript
