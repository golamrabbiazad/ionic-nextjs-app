/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  transpilePackages: [
    "@ionic/react",
    "@ionic/core",
    "@stencil/core",
    "ionicons",
  ],
};

module.exports = nextConfig;
