# Storm Avenue Roofing & Construction

A modern, responsive website for Storm Avenue Roofing & Construction - a professional roofing contractor specializing in residential and commercial roofing applications.

## 🌟 Features

- **Modern Design**: Clean, professional design with responsive layout
- **PWA Ready**: Progressive Web App with offline capabilities
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Card support
- **Performance Focused**: Optimized images, compression, and caching
- **Mobile-First**: Responsive design that works perfectly on all devices
- **Accessibility**: WCAG compliant with proper semantic markup
- **Contact Forms**: Multiple contact methods with integrated forms
- **Gallery**: Before/after project showcase
- **Service Pages**: Detailed service information

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Build Tool**: Bun
- **Code Quality**: Biome (linting & formatting)
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd storm-avenue-roofing
```

2. Install dependencies:
```bash
bun install
```

3. Run the development server:
```bash
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Scripts

- `bun dev` - Start development server with Turbopack
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run linter and type checking
- `bun format` - Format code with Biome

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about-us/
│   ├── contact-us/
│   ├── gallery/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/             # Reusable components
│   ├── ui/                # shadcn/ui components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   └── ...
└── lib/
    └── utils.ts           # Utility functions
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy on every push to main

### Manual Deployment

1. Build the project:
```bash
bun build
```

2. Deploy the `.next` folder to your hosting provider

## 📱 PWA Features

- **Offline Support**: Service worker for offline functionality
- **App-like Experience**: Can be installed on mobile devices
- **Fast Loading**: Optimized caching strategies
- **Responsive Icons**: Multiple icon sizes for different devices

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add your environment variables here
```

### Next.js Configuration

The `next.config.js` includes:
- Image optimization settings
- Compression enabled
- Custom redirects
- Turbopack configuration

## 📈 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: WebP and AVIF support
- **Code Splitting**: Automatic with Next.js

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is proprietary software for Storm Avenue Roofing & Construction.

## 📞 Contact

Storm Avenue Roofing & Construction
- Phone: (601) 757-0740
- Website: https://storm-avenue.vercel.app

---

Built with ❤️ for professional roofing services
