// next.config.mjs

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app.chinmoybiswas.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
