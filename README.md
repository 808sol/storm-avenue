# Storm Avenue Roofing & Construction

A professional roofing and construction website built with Next.js, featuring modern design, responsive layout, and comprehensive contact forms.

## 🏗️ Built With

- **Next.js 15.3.2** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI components
- **Montserrat** - Professional typography
- **Bun** - Fast package manager and runtime

## 🎨 Features

- ✅ Responsive design for all devices
- ✅ Modern black/white/silver color scheme
- ✅ Professional contact forms with validation
- ✅ Emergency response banner
- ✅ Interactive before/after gallery
- ✅ SEO optimized
- ✅ Performance optimized
- ✅ PWA ready

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/storm-avenue.git
cd storm-avenue
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Run the development server:
```bash
bun run dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── about-us/           # About page
│   ├── gallery/            # Project gallery
│   ├── contact-us/         # Contact page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── Header.tsx          # Navigation header
│   ├── HeroSection.tsx     # Hero section
│   ├── ServicesSection.tsx # Services cards
│   ├── ContactForm.tsx     # Contact form
│   └── ...                 # Other components
└── lib/
    └── utils.ts            # Utility functions

public/
├── hero-background.jpg     # Hero background image
├── sa-logo.png            # Storm Avenue logo
├── icons/                 # PWA icons
└── ...                    # Other assets
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Next.js Configuration
The project is configured for static export:
```js
// next.config.js
output: 'export',
distDir: 'out',
trailingSlash: true
```

## 📦 Build & Deploy

### Build for Production
```bash
bun run build
```

### Deploy to Vercel
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Deploy to Netlify
```bash
bun run build
cd out
# Upload the out/ folder to Netlify
```

## 🎯 Key Components

### Contact Form
- Full validation with real-time feedback
- Netlify Forms integration
- Professional styling with animations

### Gallery
- Before/after slider functionality
- Modal details view
- Project categorization

### Emergency Banner
- Dismissible emergency contact banner
- Mobile-optimized display

## 🔍 SEO Features

- Optimized meta tags
- Open Graph images
- Structured data ready
- Semantic HTML
- Performance optimized

## 📱 Mobile Features

- Touch-optimized interactions
- Mobile-specific animations
- Progressive Web App capabilities
- iOS Safari optimizations

## 🛠️ Development

### Adding New Components
```bash
npx shadcn@latest add component-name
```

### Styling
The project uses Tailwind CSS with custom color scheme:
- Primary: #000000 (black)
- Secondary: #c0c0c0 (silver)
- Accent: #fdfcf3 (cream)

### Font
Montserrat font family for professional appearance.

## 📄 License

© 2025 Storm Avenue Roofing & Construction. All rights reserved.

## 📞 Contact

- **Phone:** 601-757-0740
- **Email:** houstoncase@stormavenue.net
- **Instagram:** @storm_avenue

---

Built with ❤️ for Storm Avenue Roofing & Construction
