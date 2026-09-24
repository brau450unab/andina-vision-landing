/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'storage.googleapis.com'],
  },
  env: {
    NEXT_PUBLIC_GCP_PROJECT: process.env.GCP_PROJECT || 'gen-lang-client-0862587160',
    NEXT_PUBLIC_STITCH_PROJECT: 'projects/12916038623650348087',
  }
};

export default nextConfig;
