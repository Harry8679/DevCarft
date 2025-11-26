/** @type {import('next').NextConfig} */
import tailwind from "@tailwindcss/vite";

const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  plugins: [tailwind()],
};

export default nextConfig;
