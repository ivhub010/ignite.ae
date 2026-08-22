import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/corporate-wellness', destination: 'https://ignite-wellness.com/', permanent: false },
      { source: '/team-building',      destination: 'https://igniteteambuilding.com/', permanent: false },
      { source: '/water-sports',       destination: 'https://ignitewatersports.com/', permanent: false },
      { source: '/kids',               destination: 'https://ignitekids.com/', permanent: false },
    ];
  },
};

export default nextConfig;
