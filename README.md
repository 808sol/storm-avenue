# Storm Avenue Roofing & Construction

Professional roofing services website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun 1.0+
- Git

### Development

```bash
# Clone the repository
git clone [repository-url]
cd storm-avenue

# Install dependencies
bun install

# Start development server
bun run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📦 Build & Deployment

### Vercel Deployment (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with default settings

The project is pre-configured for Vercel with:
- Static export optimization
- Security headers
- Image optimization
- PWA support

### Manual Build

```bash
# Build for production
bun run build

# The static files will be in the 'out' directory
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Package Manager**: Bun

## 📁 Project Structure

```
storm-avenue/
├── src/
│   ├── app/           # App router pages
│   ├── components/    # React components
│   └── lib/          # Utility functions
├── public/           # Static assets
├── out/             # Build output (gitignored)
└── vercel.json      # Vercel configuration
```

## 🎨 Features

- Responsive design optimized for all devices
- Progressive Web App (PWA) support
- Image optimization with lazy loading
- Contact form with validation
- Interactive service gallery
- Performance optimized with code splitting
- SEO optimized with meta tags

## 📄 License

© 2025 Storm Avenue Roofing & Construction. All rights reserved.
