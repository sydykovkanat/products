import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	env: {
		API_URL: process.env.API_URL,
	},
	images: {
		remotePatterns: [
			{
				hostname: 'fakestoreapi.com',
			},
		],
	},
};

export default nextConfig;
