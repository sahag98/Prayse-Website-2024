/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "startupfa.me",
      },
    ],
  },
};

export default nextConfig;
