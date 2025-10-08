const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      // Use it as an array with the plugin function
      [require('rehype-raw'), { passThrough: ['element'] }]
    ],
  },
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
  rewrites: async () => {
    return [
      {
        source: '/notes-on-kant/:path*',
        destination: '/notes-on-kant/:path*/index.html',
      },
    ]
  },  
}

module.exports = withMDX(nextConfig)