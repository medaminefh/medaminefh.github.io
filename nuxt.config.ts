export default defineNuxtConfig({
	future: {
		compatibilityVersion: 4,
	},
	modules: ["@nuxtjs/tailwindcss", "@tresjs/nuxt"],
	css: ["~/assets/css/main.css"],
	compatibilityDate: "2024-11-01",
	app: {
		head: {
			title: "Mohamed Amine Fhal | Software Developer",
			meta: [
				{
					name: "description",
					content:
						"Mohamed Amine Fhal - A passionate software developer building premium web experiences.",
				},
				{ property: "og:title", content: "Mohamed Amine Fhal | Portfolio" },
				{
					property: "og:description",
					content:
						"Mohamed Amine Fhal - A passionate software developer building premium web experiences.",
				},
			],
			htmlAttrs: {
				lang: "en",
			},
		},
	},
});
