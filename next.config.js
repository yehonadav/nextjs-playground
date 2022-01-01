// @ts-check
const path = require('path')

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/styles/scss')],
  },
}

module.exports = nextConfig