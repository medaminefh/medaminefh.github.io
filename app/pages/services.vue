<template>
	<div class="section-shell section-stack">
		<section class="section-heading center reveal" aria-labelledby="services-title">
			<p class="eyebrow">Services</p>
			<h1 id="services-title">Development help for teams that need a polished web product.</h1>
			<p class="lead">
				I can help with product frontend, WebGL interaction, business workflow apps,
				performance cleanup, and search-ready launches.
			</p>
		</section>

		<section class="services-grid" aria-label="Services offered">
			<article v-for="(service, index) in services" :key="service.title" class="service-card reveal" :style="{ '--delay': `${index * 80}ms` }">
				<span>{{ service.kicker }}</span>
				<h3>{{ service.title }}</h3>
				<p>{{ service.copy }}</p>
				<div class="tag-row">
					<span v-for="item in service.includes" :key="item" class="tech-tag">{{ item }}</span>
				</div>
			</article>
		</section>

		<section class="split-grid" aria-labelledby="process-title">
			<div class="section-heading">
				<p class="eyebrow">Process</p>
				<h2 id="process-title">A calm route from idea to release.</h2>
				<p class="lead">
					The best project rhythm is clear scope, visible progress, and decisions that
					leave the codebase easier to keep improving.
				</p>
			</div>

			<div class="timeline">
				<article v-for="(step, index) in process" :key="step.title" class="timeline-item reveal" :style="{ '--delay': `${index * 80}ms` }">
					<span>Step {{ index + 1 }}</span>
					<strong>{{ step.title }}</strong>
					<p>{{ step.copy }}</p>
				</article>
			</div>
		</section>

		<section class="surface services-cta reveal" aria-labelledby="services-cta-title">
			<div>
				<p class="eyebrow">Have a product in mind?</p>
				<h2 id="services-cta-title">Send the core idea and I will help turn it into a plan.</h2>
			</div>
			<NuxtLink to="/contact" class="btn btn-primary">Start a project</NuxtLink>
		</section>
	</div>
</template>

<script setup lang="ts">
const baseUrl = "https://medaminefh.github.io";

const services = [
	{
		kicker: "Frontend",
		title: "Vue and Nuxt product development",
		copy: "Build or improve responsive application interfaces with reusable components, route structure, forms, API integration, and deploy-ready output.",
		includes: ["Vue", "Nuxt", "TypeScript", "Tailwind CSS"],
	},
	{
		kicker: "Business tools",
		title: "Workflow and dashboard interfaces",
		copy: "Design and implement focused interfaces for healthcare, events, operations, admin panels, and repeat daily work.",
		includes: ["Forms", "Auth flows", "Tables", "State"],
	},
	{
		kicker: "Interaction",
		title: "3D, animation, and game-like UI",
		copy: "Add memorable motion systems, WebGL scenes, canvas-backed interactions, and polished feedback without making the product noisy.",
		includes: ["Three.js", "TresJS", "WebGL", "Motion"],
	},
	{
		kicker: "Reach",
		title: "SEO, performance, and launch polish",
		copy: "Improve how your site appears in search and social previews with metadata, structured data, crawl files, image handling, and Core Web Vitals care.",
		includes: ["Schema", "Sitemap", "Robots", "Open Graph"],
	},
];

const process = [
	{
		title: "Clarify the product outcome",
		copy: "Identify the user, core workflow, launch constraints, and what the page or app must prove quickly.",
	},
	{
		title: "Shape the interface system",
		copy: "Turn the product into reusable sections, states, components, content, and responsive layout rules.",
	},
	{
		title: "Build, test, and refine",
		copy: "Implement the experience, verify the responsive states, tune performance, and prepare the release details.",
	},
];

useSeoMeta({
	title: "Services",
	description:
		"Software development services by Mohamed Amine Fhal: Vue and Nuxt apps, business workflow tools, WebGL interfaces, SEO, performance, and launch polish.",
	ogTitle: "Software Development Services",
	ogDescription:
		"Vue, Nuxt, product frontend, business tools, WebGL motion, SEO, and launch optimization services.",
	ogImage: `${baseUrl}/og-image.png`,
	ogUrl: `${baseUrl}/services`,
	twitterCard: "summary_large_image",
});

useHead({
	link: [{ rel: "canonical", href: `${baseUrl}/services` }],
});
</script>

<style scoped>
.services-grid {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 14px;
}

.services-cta {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 24px;
	padding: 28px;
}

.services-cta h2 {
	margin-top: 10px;
	color: var(--text);
	font-size: 2rem;
	font-weight: 900;
	line-height: 1.18;
}

@media (min-width: 900px) {
	.services-cta h2 {
		font-size: 2.6rem;
	}
}

@media (max-width: 780px) {
	.services-grid {
		grid-template-columns: 1fr;
	}

	.services-cta {
		align-items: flex-start;
		flex-direction: column;
	}
}
</style>
