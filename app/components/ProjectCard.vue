<template>
	<article class="project-card reveal" :style="{ '--delay': `${(index || 0) * 80}ms` }">
		<a
			:href="project.liveUrl"
			target="_blank"
			rel="noopener noreferrer"
			class="project-media"
			:aria-label="`Open ${project.title}`"
		>
			<img
				:src="project.image"
				:alt="`${project.title} project screenshot`"
				loading="lazy"
				width="1200"
				height="720"
			/>
			<span v-if="project.status" class="project-status">{{ project.status }}</span>
		</a>

		<div class="project-body">
			<div class="project-kicker">{{ project.eyebrow }}</div>
			<h3>{{ project.title }}</h3>
			<p class="project-summary">{{ project.summary }}</p>
			<p class="project-impact">{{ project.impact }}</p>

			<div class="project-meta">
				<span>{{ project.role }}</span>
			</div>

			<div class="tag-row" aria-label="Technologies used">
				<span v-for="tool in project.tools" :key="tool" class="tech-tag">
					{{ tool }}
				</span>
			</div>

			<div class="project-actions">
				<a :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
					Live site
				</a>
				<a
					v-if="project.repoUrl"
					:href="project.repoUrl"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-secondary"
				>
					Source
				</a>
			</div>
		</div>
	</article>
</template>

<script setup lang="ts">
import type { Project } from "~/data/projects";

defineProps<{
	project: Project;
	index?: number;
}>();
</script>
