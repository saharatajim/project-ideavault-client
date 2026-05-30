// next.config.mjs
import { fileURLToPath } from "url";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        pathname: '**',
      },
    ],
  },
  turbopack: {},

  webpack: (config) => {
    config.resolve.alias["@better-auth/kysely-adapter"] = fileURLToPath(new URL("./empty.js", import.meta.url));
    return config;
  },
};

export default nextConfig;
