/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["shorturl.at"],
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
