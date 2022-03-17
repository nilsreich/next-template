/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

const nextConfig = withPWA({
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  trailingSlash: true,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  }
})

module.exports = nextConfig
