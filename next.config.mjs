/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'export' — Sanity Studio requires server-side rendering
  // Blog pages use ISR (revalidate) for fresh content from Sanity
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
