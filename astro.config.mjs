import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// site: 'https://astro-simple-portfolio.vercel.app/', // Required for sitemap -> Replace with your site's URL
	// output: 'server',
	// integrations: [ tailwind(), sitemap()],
	// adapter: vercel(),
	integrations: [tailwind()],
	outDir: '/root/web/homepage',
	// update server config to support local develop and review
	server: {
		host: true,
		port: 4321,
	},
});
