/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.myanimelist.net',
          port: '',
          pathname: '/images/anime/**',
        },
      ],
    },
  }
