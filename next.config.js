require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    env: {
		TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN,
		TELEGRAM_USER_ID: process.env.TELEGRAM_USER_ID,
	}
}

module.exports = nextConfig
