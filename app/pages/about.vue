<template>
	<div class="section-shell section-stack">
		<section class="split-grid" aria-labelledby="about-title">
			<div class="section-heading reveal">
				<p class="eyebrow">About</p>
				<h1 id="about-title">A developer who cares about the product behind the interface.</h1>
				<p class="lead">
					I am Mohamed Amine Fhal, a software developer focused on Vue, Nuxt,
					JavaScript ecosystems, backend foundations, and interactive web experiences.
					I like turning unclear workflows into calm, useful, polished products.
				</p>
			</div>

			<aside class="profile-panel reveal" style="--delay: 90ms">
				<img src="/photo.png" alt="Mohamed Amine Fhal" width="480" height="480" class="profile-photo" />
				<div>
					<p class="eyebrow">Current focus</p>
					<h2>Frontend architecture, business workflows, and WebGL polish.</h2>
					<p>
						The portfolio now highlights recent live work across healthcare, events,
						browser extensions, publishing, and game interaction.
					</p>
				</div>
			</aside>
		</section>

		<section class="split-grid" aria-labelledby="journey-title">
			<div class="section-heading">
				<p class="eyebrow">Experience</p>
				<h2 id="journey-title">Teaching, shipping, and learning in public.</h2>
				<p class="lead">
					My path mixes product work, mentoring, and hands-on development. That combination
					makes me comfortable explaining decisions as well as implementing them.
				</p>
			</div>

			<div class="timeline">
				<article v-for="(item, index) in experience" :key="item.title" class="timeline-item reveal" :style="{ '--delay': `${index * 80}ms` }">
					<span>{{ item.period }}</span>
					<strong>{{ item.title }}</strong>
					<p>{{ item.copy }}</p>
					<div class="tag-row">
						<span v-for="tool in item.tools" :key="tool" class="tech-tag">{{ tool }}</span>
					</div>
				</article>
			</div>
		</section>

		<section aria-labelledby="principles-title">
			<div class="section-heading center">
				<p class="eyebrow">Working style</p>
				<h2 id="principles-title">What I optimize for.</h2>
			</div>

			<div class="principles-grid">
				<div v-for="(principle, index) in principles" :key="principle.title" class="service-card reveal" :style="{ '--delay': `${index * 70}ms` }">
					<span>{{ principle.kicker }}</span>
					<h3>{{ principle.title }}</h3>
					<p>{{ principle.copy }}</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
const baseUrl = "https://medaminefh.github.io";

const experience = [
	{
		period: "2023 - Present",
		title: "Programming Mentor, Freelance",
		copy: "Mentoring learners and builders across JavaScript, Python, TypeScript, Vue, React, Node.js, Django, and GraphQL.",
		tools: ["JavaScript", "Python", "TypeScript", "Vue", "React", "Node.js"],
	},
	{
		period: "2023",
		title: "Section Leader Volunteer, Code in Place",
		copy: "Supported students through Python fundamentals, debugging habits, and problem-solving sessions.",
		tools: ["Python", "Teaching", "Graphics", "Console"],
	},
	{
		period: "2022 - 2023",
		title: "JavaScript Developer, Lobsterware",
		copy: "Built and maintained JavaScript, TypeScript, Vue, Tailwind CSS, Node.js, and GraphQL interfaces.",
		tools: ["JavaScript", "TypeScript", "Vue", "Tailwind CSS", "GraphQL"],
	},
];

const principles = [
	{
		kicker: "Clarity",
		title: "Make the product easy to understand",
		copy: "Good interfaces reduce guessing. I prioritize hierarchy, labels, empty states, and flow before decoration.",
	},
	{
		kicker: "Durability",
		title: "Build systems that can keep growing",
		copy: "Shared data, reusable components, accessible markup, and predictable styles keep future changes cheaper.",
	},
	{
		kicker: "Taste",
		title: "Use motion and 3D with purpose",
		copy: "Animation should make a product feel alive without slowing down the user or hiding the work.",
	},
];

useSeoMeta({
	title: "About",
	description:
		"Learn about Mohamed Amine Fhal, a software developer focused on Vue, Nuxt, JavaScript, backend foundations, mentoring, and interactive web products.",
	ogTitle: "About Mohamed Amine Fhal",
	ogDescription:
		"Software developer profile, experience, working style, and technical focus areas.",
	ogImage: `${baseUrl}/og-image.png`,
	ogUrl: `${baseUrl}/about`,
	twitterCard: "summary_large_image",
});

useHead({
	link: [{ rel: "canonical", href: `${baseUrl}/about` }],
});
</script>

<style scoped>
.profile-panel {
	display: grid;
	gap: 18px;
}

.profile-photo {
	width: 100%;
	aspect-ratio: 1;
	object-fit: cover;
	border: 1px solid var(--line);
	border-radius: 8px;
	filter: saturate(1.04) contrast(1.02);
}

.profile-panel h2 {
	margin-top: 10px;
	color: var(--text);
	font-size: 1.55rem;
	font-weight: 900;
	line-height: 1.18;
}

.profile-panel p:not(.eyebrow) {
	margin-top: 12px;
	color: var(--muted);
	line-height: 1.65;
}

.principles-grid {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 12px;
}

@media (max-width: 900px) {
	.principles-grid {
		grid-template-columns: 1fr;
	}
}
</style>
