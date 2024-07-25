/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "aceternity.com",
        port: "",
        pathname: "/images/products/thumbnails/new/**",
      },
    ],
  },
};

export default nextConfig;
