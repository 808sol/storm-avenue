/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  trailingSlash: false,

  // Ensure CSS is properly handled in production
  transpilePackages: ['@radix-ui'],

  // Optimize for production
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-label', '@radix-ui/react-slot'],
  },

  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.same-assets.com",
        pathname: "/**",
      },
    ],
  },

  // Webpack configuration
  webpack: (config, { isServer, dev }) => {
    // Ensure proper module resolution
    config.resolve = {
      ...config.resolve,
      preferRelative: true,
      alias: {
        ...config.resolve.alias,
        '@': require('path').resolve(__dirname, './src'),
        '@/components': require('path').resolve(__dirname, './src/components'),
        '@/lib': require('path').resolve(__dirname, './src/lib'),
        '@/app': require('path').resolve(__dirname, './src/app'),
      },
    };

    // Optimize chunks only for production client builds
    if (!isServer && !dev) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          commons: {
            name: 'commons',
            chunks: 'all',
            minChunks: 2,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `lib.${packageName.replace('@', '')}`;
            },
            priority: 10,
            minChunks: 1,
            reuseExistingChunk: true,
          },
        },
      };
    }

    return config;
  },

  // Add production-specific settings
  env: {
    NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
  },
};

module.exports = nextConfig;
