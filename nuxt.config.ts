export default defineNuxtConfig({
	future: {
		compatibilityVersion: 4,
	},
	modules: ["@nuxtjs/tailwindcss", "@tresjs/nuxt"],
	tailwindcss: {
		cssPath: false,
	},
	css: ["~/assets/css/main.css"],
	compatibilityDate: "2024-11-01",
	devServer: {
		port: 3001,
	},
	vite: {
		resolve: {
			dedupe: ["@tresjs/core", "three", "vue", "@vue/runtime-core", "@vue/runtime-dom"],
		},
	},
	nitro: {
		preset: "static",
		prerender: {
			routes: ["/", "/work", "/about", "/services", "/contact"],
		},
	},
	app: {
		head: {
			title: "Software Developer Portfolio",
			titleTemplate: "%s | Mohamed Amine Fhal",
			meta: [
				{ charset: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					name: "description",
					content:
						"Mohamed Amine Fhal is a software developer building Vue, Nuxt, WebGL, browser extension, healthcare, event, and business web products.",
				},
				{
					name: "keywords",
					content:
						"Mohamed Amine Fhal, software developer, Vue developer, Nuxt developer, WebGL, Three.js, frontend developer, portfolio, Tunisia developer",
				},
				{ name: "author", content: "Mohamed Amine Fhal" },
				{
					name: "google-site-verification",
					content: "txvgGYCybz_YnrYKlCOlvzaNe9uh1P0zZMUvmNxUPrQ",
				},
				{ name: "robots", content: "index, follow, max-image-preview:large" },
				{ name: "theme-color", content: "#05070b" },
				{ property: "og:site_name", content: "Mohamed Amine Fhal Portfolio" },
				{ property: "og:type", content: "website" },
				{ property: "og:title", content: "Mohamed Amine Fhal | Software Developer" },
				{
					property: "og:description",
					content:
						"Professional portfolio featuring Vue, Nuxt, WebGL, healthcare tools, event apps, browser utilities, and interactive projects.",
				},
				{ property: "og:url", content: "https://medaminefh.github.io/" },
				{ property: "og:image", content: "https://medaminefh.github.io/og-image.png" },
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:title", content: "Mohamed Amine Fhal | Software Developer" },
				{
					name: "twitter:description",
					content:
						"Vue, Nuxt, WebGL, business tools, browser extensions, and interactive software projects.",
				},
				{ name: "twitter:image", content: "https://medaminefh.github.io/og-image.png" },
			],
			link: [
				{ rel: "icon", type: "image/png", href: "/favicon.png" },
				{ rel: "canonical", href: "https://medaminefh.github.io/" },
				{ rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
			],
			htmlAttrs: {
				lang: "en",
			},
		},
	},
});
