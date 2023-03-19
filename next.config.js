/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr'
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
