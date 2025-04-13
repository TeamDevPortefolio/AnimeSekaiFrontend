import type { NextConfig } from "next";
import path from "path";
const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'fr'], // Langues supportées (anglais et français dans cet exemple)
    defaultLocale: 'en', // Langue par défaut
  },
  /* config options here */
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    sourceMap: true, // Active les source maps,
   
  },
  webpack: (config, options) => {
    /**
     * Force scss source maps for debugging. If there are performance issues or you don't need debug css, use the value "eval-source-map" instead.
     */
    if (options.dev) {
      Object.defineProperty(config, "devtool", {
        get() {
          return "source-map";
        },
        set() {},
      });
    }

    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  }
};

export default nextConfig;
