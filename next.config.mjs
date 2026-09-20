/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.15.35', '127.0.0.1', 'localhost'],
  async redirects() {
    return [
      { source: '/agenda', destination: '/painel/agenda', permanent: true },
      { source: '/clientes', destination: '/painel/clientes', permanent: true },
      { source: '/servicos', destination: '/painel/servicos', permanent: true },
      {
        source: '/configuracoes',
        destination: '/painel/configuracoes',
        permanent: true,
      },
      { source: '/mais', destination: '/painel/mais', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
}

export default nextConfig
