/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["bit.ly"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bit.ly",
        port: "",
        pathname: "",
      },
    ],
  },
};

module.exports = nextConfig;
