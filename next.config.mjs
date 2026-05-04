/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'foundationhtc.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'foundhudsontrainingcenter.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'foundhudsontrainingcenter.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'foundationhtc.ong',
        pathname: '/**',
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
