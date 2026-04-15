/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.puravidasanantonio.com" },
      { protocol: "https", hostname: "avatarpreview.com" },
      { protocol: "https", hostname: "puravidasanantonio.net" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "www.ethosregen.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
};

export default nextConfig;