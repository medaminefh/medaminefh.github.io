<template>
	<div class="section-shell section-stack">
		<section class="section-heading center reveal" aria-labelledby="work-title">
			<p class="eyebrow">Selected work</p>
			<h1 id="work-title">Projects that show product range.</h1>
			<p class="lead">
				I reviewed the live builds and used real screenshots so each card reflects the
				actual product: what it does, who it serves, and what engineering choices matter.
			</p>
		</section>

		<section aria-labelledby="featured-work-title">
			<div class="section-heading">
				<p class="eyebrow">Featured builds</p>
				<h2 id="featured-work-title">Recent launches and live product pages.</h2>
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

		<section aria-labelledby="archive-title">
			<div class="section-heading">
				<p class="eyebrow">Earlier work</p>
				<h2 id="archive-title">Additional shipped interfaces.</h2>
				<p class="lead">
					A smaller archive of web applications and experiments that round out the portfolio.
				</p>
			</div>

			<div class="archive-list">
				<article v-for="item in archiveProjects" :key="item.title" class="archive-item reveal">
					<div>
						<h3>{{ item.title }}</h3>
						<div class="archive-tools">
							<span v-for="tool in item.tools" :key="tool" class="tech-tag">{{ tool }}</span>
						</div>
					</div>
					<p>{{ item.summary }}</p>
					<div class="project-actions">
						<a :href="item.url" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
							Open
						</a>
						<a
							v-if="item.repoUrl"
							:href="item.repoUrl"
							target="_blank"
							rel="noopener noreferrer"
							class="btn btn-secondary"
						>
							Source
						</a>
					</div>
				</article>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { archiveProjects, featuredProjects } from "~/data/projects";

const baseUrl = "https://medaminefh.github.io";

useSeoMeta({
	title: "Work and Software Projects",
	description:
		"Explore software projects by Mohamed Amine Fhal, including Private Nurse Patient Organizer, Eventizer B2B, Agar.io Toolkit, Rachid Fhal, and Klondike Solitaire.",
	ogTitle: "Software Projects by Mohamed Amine Fhal",
	ogDescription:
		"Live Vue, Nuxt, WebGL, healthcare, event, browser extension, multilingual publishing, and game projects with screenshots.",
	ogImage: `${baseUrl}/og-image.png`,
	ogUrl: `${baseUrl}/work`,
	twitterCard: "summary_large_image",
});

useHead({
	link: [{ rel: "canonical", href: `${baseUrl}/work` }],
	script: [
		{
			type: "application/ld+json",
			innerHTML: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "CollectionPage",
				name: "Software projects by Mohamed Amine Fhal",
				url: `${baseUrl}/work`,
				mainEntity: {
					"@type": "ItemList",
					itemListElement: featuredProjects.map((project, index) => ({
						"@type": "ListItem",
						position: index + 1,
						item: {
							"@type": "SoftwareApplication",
							name: project.title,
							url: project.liveUrl,
							image: `${baseUrl}${project.image}`,
							description: project.summary,
							applicationCategory: project.eyebrow,
						},
					})),
				},
			}),
		},
	],
});
</script>
