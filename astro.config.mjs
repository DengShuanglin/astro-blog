import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	// site: 'https://astro-simple-portfolio.vercel.app/', // Required for sitemap -> Replace with your site's URL
	// output: 'server',
	// integrations: [ tailwind(), sitemap()],
	integrations: [tailwind()],
	// adapter: vercel(),
});
