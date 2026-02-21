/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'foundationhtc.com',
      },
      {
        protocol: 'http',
        hostname: 'foundhudsontrainingcenter.org',
      },
      {
        protocol: 'https',
        hostname: 'foundhudsontrainingcenter.org',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog-2',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/home-2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about-uss',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/donacion',
        destination: '/donate',
        permanent: true,
      },
      {
        source: '/media',
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/media-2',
        destination: '/gallery',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
