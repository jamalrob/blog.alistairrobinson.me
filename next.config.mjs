import createMDX from '@next/mdx'

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      ['rehype-raw', { passThrough: ['element'] }]
    ],
    remarkPlugins: []
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/notes-on-kant/:path*',
        destination: '/notes-on-kant/:path*/index.html',
      },
    ]
  }
}

export default withMDX(nextConfig)
