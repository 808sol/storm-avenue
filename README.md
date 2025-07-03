# Storm Avenue Roofing & Construction

A modern, responsive website for Storm Avenue Roofing & Construction, specializing in professional roofing services across Mississippi.

## Features

- 🌐 **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Performance Optimized**: Built with Next.js 15 for optimal loading speeds
- 🎥 **Dynamic Hero Section**: Engaging video background with optimized loading
- 📱 **Mobile-First**: Special attention to mobile user experience
- 🔍 **SEO Optimized**: Complete metadata, Open Graph tags, and structured data
- 🎨 **Modern UI**: Clean, professional design with smooth animations
- 📞 **Contact Integration**: Easy-to-use contact forms and click-to-call functionality
- 🗺️ **Service Area Map**: Interactive coverage map for Mississippi
- 🖼️ **Gallery**: Before/after slider showcasing work quality

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Package Manager**: Bun
- **Deployment**: Vercel/Netlify ready
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/storm-avenue.git

# Navigate to project directory
cd storm-avenue

# Install dependencies
bun install

# Run development server
bun dev
```

The site will be available at `http://localhost:3000`

### Building for Production

```bash
# Create production build
bun run build

# Start production server
bun start
```

## Deployment

The project is configured for easy deployment on:

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Supports both static and dynamic deployments

### Environment Variables

No environment variables are required for basic functionality.

## Project Structure

```
storm-avenue/
├── src/
│   ├── app/          # Next.js app router pages
│   ├── components/   # React components
│   └── lib/          # Utility functions
├── public/           # Static assets
├── tailwind.config.ts
└── package.json
```

## Key Components

- **HeroSection**: Video background with CTA
- **ServicesSection**: Service offerings display
- **ContactForm**: Contact form with validation
- **ServiceAreaMap**: Interactive service coverage map
- **BeforeAfterSlider**: Gallery component

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Lighthouse Score: 90+ across all metrics
- Optimized images and videos
- Lazy loading for better performance
- Minimal JavaScript bundle

## License

All rights reserved. Storm Avenue Roofing & Construction © 2025

---

Built with ❤️ using [Same](https://same.new)
