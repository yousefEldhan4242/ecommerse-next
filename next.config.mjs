/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '', // Leave empty unless needed
        pathname: '/images/**', // Matches all images under "/images/"
      },
    ],
  },
};

export default nextConfig;