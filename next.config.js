/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  trailingSlash: false,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  sassOptions: {
    includePaths: [ path.join(__dirname, 'styles') ],
    prependData: `@import "variables.scss";`
  }
}

module.exports = nextConfig;
