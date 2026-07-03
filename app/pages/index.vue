<template>
	<div class="section-stack">
		<section class="section-shell hero-section" aria-labelledby="home-title">
			<div class="hero-copy reveal">
				<p class="eyebrow">Available for selective freelance and product work</p>
				<h1 id="home-title" class="hero-title">
					Software developer for <span class="text-gradient">polished web products.</span>
				</h1>
				<p class="lead">
					I build fast Vue and Nuxt interfaces, business tools, browser utilities, and WebGL
					experiences that feel sharp from the first click and stay maintainable after launch.
				</p>

				<div class="hero-actions">
					<NuxtLink to="/work" class="btn btn-primary">View projects</NuxtLink>
					<NuxtLink to="/contact" class="btn btn-secondary">Start a conversation</NuxtLink>
				</div>
			</div>

			<div class="signal-strip reveal" style="--delay: 120ms">
				<div v-for="item in signals" :key="item.label" class="signal">
					<span>{{ item.label }}</span>
					<strong>{{ item.value }}</strong>
				</div>
			</div>
		</section>

		<section class="section-shell" aria-labelledby="proof-title">
			<div class="metric-grid">
				<div v-for="(metric, index) in metrics" :key="metric.label" class="metric reveal" :style="{ '--delay': `${index * 70}ms` }">
					<strong>{{ metric.value }}</strong>
					<span>{{ metric.label }}</span>
				</div>
			</div>
		</section>

		<section class="section-shell" aria-labelledby="projects-title">
			<div class="section-heading">
				<p class="eyebrow">Recent work</p>
				<h2 id="projects-title">Production-minded builds with real screens.</h2>
				<p class="lead">
					These projects show the range: healthcare operations, B2B event access,
					browser extension packaging, multilingual publishing, and game-state interaction.
				</p>
			</div>

			<div class="project-grid">
				<ProjectCard
					v-for="(project, index) in featuredProjects"
					:key="project.slug"
					:project="project"
					:index="index"
				/>
			</div>
		</section>

		<section class="section-shell split-grid" aria-labelledby="stack-title">
			<div class="section-heading">
				<p class="eyebrow">Engineering profile</p>
				<h2 id="stack-title">Frontend polish backed by product judgment.</h2>
				<p class="lead">
					I like interfaces that are direct, useful, and memorable. The work usually sits
					where frontend architecture, product clarity, performance, and subtle motion meet.
				</p>
			</div>

			<div class="capability-grid">
				<div v-for="(capability, index) in capabilities" :key="capability.title" class="service-card reveal" :style="{ '--delay': `${index * 75}ms` }">
					<span>{{ capability.kicker }}</span>
					<h3>{{ capability.title }}</h3>
					<p>{{ capability.copy }}</p>
				</div>
			</div>
		</section>

		<section class="section-shell surface final-cta reveal" aria-labelledby="cta-title">
			<div>
				<p class="eyebrow">Open to high-signal opportunities</p>
				<h2 id="cta-title">Need a developer who can ship the interface and think through the product?</h2>
			</div>
			<NuxtLink to="/contact" class="btn btn-primary">Contact me</NuxtLink>
		</section>
	</div>
</template>

<script setup lang="ts">
import { featuredProjects } from "~/data/projects";

const baseUrl = "https://medaminefh.github.io";

const signals = [
	{ label: "Core stack", value: "Vue / Nuxt / TypeScript" },
	{ label: "Specialty", value: "Interactive product UI" },
	{ label: "Extra edge", value: "WebGL and motion" },
];

const metrics = [
	{ value: "5", label: "Recent products analyzed and featured with live screenshots." },
	{ value: "4", label: "Primary domains: healthcare, events, games, publishing." },
	{ value: "3D", label: "WebGL scene and motion system built into the portfolio shell." },
	{ value: "SEO", label: "Metadata, schema, sitemap, robots, and rich social previews." },
];

const capabilities = [
	{
		kicker: "Frontend",
		title: "Vue and Nuxt applications",
		copy: "Composable interfaces, clean routing, reusable data models, and fast static or server-rendered output.",
	},
	{
		kicker: "Product",
		title: "Business workflow design",
		copy: "Forms, dashboards, auth flows, admin logic, and focused flows for repeat users.",
	},
	{
		kicker: "Motion",
		title: "3D and interaction detail",
		copy: "WebGL scenes, hover states, animated transitions, and responsive visual systems with restraint.",
	},
	{
		kicker: "Growth",
		title: "SEO and performance",
		copy: "Search-ready content, structured data, accessible markup, image assets, and deployment-minded optimization.",
	},
];

useSeoMeta({
	title: "Software Developer Portfolio",
	description:
		"Mohamed Amine Fhal is a software developer building Vue, Nuxt, WebGL, browser extension, healthcare, event, and business web products.",
	ogTitle: "Mohamed Amine Fhal | Software Developer",
	ogDescription:
		"Professional portfolio featuring Vue, Nuxt, WebGL, healthcare tools, event apps, browser utilities, and interactive projects.",
	ogImage: `${baseUrl}/og-image.png`,
	ogUrl: `${baseUrl}/`,
	twitterCard: "summary_large_image",
});

useHead({
	link: [{ rel: "canonical", href: `${baseUrl}/` }],
	script: [
		{
			type: "application/ld+json",
			innerHTML: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Person",
				name: "Mohamed Amine Fhal",
				url: `${baseUrl}/`,
				image: `${baseUrl}/photo.png`,
				jobTitle: "Software Developer",
				sameAs: [
					"https://github.com/medaminefh",
					"https://www.linkedin.com/in/mohamed-amine-fhal",
				],
				knowsAbout: [
					"Vue.js",
					"Nuxt",
					"TypeScript",
					"Three.js",
					"WebGL",
					"Search engine optimization",
					"Browser extensions",
				],
				hasPart: featuredProjects.map((project) => ({
					"@type": "CreativeWork",
					name: project.title,
					url: project.liveUrl,
					image: `${baseUrl}${project.image}`,
					description: project.summary,
				})),
			}),
		},
	],
});
</script>

<style scoped>
.section-stack {
	gap: 60px;
}

.hero-section {
	display: grid;
	align-items: center;
	min-height: calc(100svh - 188px);
	padding-block: 34px 8px;
}

.hero-copy {
	display: grid;
	gap: 22px;
	max-width: 930px;
}

.hero-actions {
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
}

.signal-strip {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 10px;
	margin-top: 40px;
}

.signal {
	display: grid;
	gap: 7px;
	min-height: 84px;
	padding: 16px;
	border: 1px solid var(--line);
	border-radius: 8px;
	background: rgba(255, 255, 255, 0.046);
	backdrop-filter: blur(12px);
}

.signal span {
	color: var(--muted);
	font-size: 0.78rem;
	font-weight: 800;
	text-transform: uppercase;
}

.signal strong {
	color: var(--text);
	font-size: 1rem;
	line-height: 1.25;
}

.capability-grid {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 12px;
}

.final-cta {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 24px;
	padding: 28px;
}

.final-cta h2 {
	max-width: 780px;
	margin-top: 10px;
	color: var(--text);
	font-size: 2rem;
	font-weight: 900;
	line-height: 1.18;
}

@media (min-width: 900px) {
	.final-cta h2 {
		font-size: 2.8rem;
	}
}

@media (max-width: 760px) {
	.signal-strip,
	.capability-grid {
		grid-template-columns: 1fr;
	}

	.final-cta {
		align-items: flex-start;
		flex-direction: column;
	}
}
</style>
