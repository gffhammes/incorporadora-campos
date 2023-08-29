/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    })

    return config
  },
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ['localhost', 'evening-lowlands-86540.herokuapp.com', 'res.cloudinary.com'],
  },
  async redirects() {
    return [
      {
        source: '/empreendimentos/piazza-del-mare',
        destination: '/portfolio/piazza-del-mare',
        permanent: true,
      },
    ];
  }
}

module.exports = nextConfig
