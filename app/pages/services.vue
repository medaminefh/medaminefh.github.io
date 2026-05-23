<template>
	<div
		class="flex-1 w-full max-w-6xl mx-auto flex flex-col gap-16 animate-fade-in-up relative z-10 pt-10"
	>
		<div class="text-center mb-10 flex flex-col items-center">
			<div class="w-32 h-32 mb-8 opacity-80 animate-pulse-slow">
				<!-- Reusing illu-scalability.svg as an artistic centerpiece -->
				<img
					src="/illu-scalability.svg"
					alt="Scalability Illustration"
					class="w-full h-full object-contain"
				/>
			</div>
			<h1
				class="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-lg"
			>
				My Services
			</h1>
			<p
				class="text-gray-400 text-xl max-w-2xl mx-auto font-light leading-relaxed"
			>
				I provide comprehensive development services, translating complex
				business logic into high-performance, visually stunning digital
				products.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div
				v-for="(service, i) in services"
				:key="i"
				class="glass p-10 rounded-[32px] bg-gradient-to-b from-white/10 to-transparent hover:from-indigo-500/20 hover:to-transparent border border-white/10 hover:border-indigo-500/50 transition-all duration-500 group relative overflow-hidden flex flex-col"
			>
				<!-- Glow accent -->
				<div
					class="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/30 blur-[50px] rounded-full group-hover:bg-purple-500/40 transition-colors"
				></div>

				<div
					class="w-16 h-16 bg-[#111] border border-white/10 text-indigo-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-xl z-10 relative"
				>
					<component :is="service.icon" class="w-8 h-8" />
				</div>

				<h3 class="text-2xl font-bold mb-4 text-white z-10 relative">
					{{ service.title }}
				</h3>
				<p
					class="text-gray-400 leading-relaxed font-light z-10 relative flex-1"
				>
					{{ service.description }}
				</p>

				<div class="mt-8 pt-6 border-t border-white/10 z-10 relative">
					<ul class="space-y-3">
						<li
							v-for="feature in service.features"
							:key="feature"
							class="flex items-center gap-3 text-sm text-gray-300 font-medium"
						>
							<svg
								class="w-4 h-4 text-emerald-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="3"
									d="M5 13l4 4L19 7"
								></path>
							</svg>
							{{ feature }}
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- Call to action block -->
		<div
			class="mt-12 glass p-12 rounded-[40px] bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
		>
			<div>
				<h3 class="text-3xl font-bold text-white mb-3">
					Ready to build something amazing?
				</h3>
				<p class="text-indigo-200 text-lg font-light">
					Let's turn your vision into a reality with modern web technologies.
				</p>
			</div>
			<NuxtLink
				to="/contact"
				class="px-8 py-4 bg-white text-indigo-900 font-bold rounded-2xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)] whitespace-nowrap"
			>
				Start a Project
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
import { h } from "vue";

useHead({
	title: "Mohamed Amine Fhal | Services",
	meta: [
		{
			name: "description",
			content: "Explore the web development and 3D web experiences I offer.",
		},
	],
});

// Simple inline SVG components for icons
const CodeIcon = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' })
])
const ThreeDIcon = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' })
])
const SeoIcon = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' })
])
const ServerIcon = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' })
])

const services = [
  {
    title: 'Frontend Architecture',
    description: 'Building fast, responsive, and accessible web applications using Vue.js, Nuxt, and modern tooling. I engineer robust solutions that scale.',
    icon: CodeIcon,
    features: ['Vue.js & Nuxt 3/4', 'Tailwind CSS Styling', 'State Management', 'API Integration']
  },
  {
    title: 'Backend Engineering',
    description: 'Designing scalable, secure backend systems and RESTful APIs using Node.js, Python, and modern enterprise frameworks.',
    icon: ServerIcon,
    features: ['Node.js (ExpressJS)', 'NestJS Architecture', 'Django & Flask', 'Database Design']
  },
  {
    title: '3D Web Experiences',
    description: 'Integrating WebGL and Three.js directly into the DOM to create immersive, premium 3D animations that captivate users and elevate brands.',
    icon: ThreeDIcon,
    features: ['Three.js & TresJS', 'Interactive Canvas', '3D Model Loading', 'Scroll Animations']
  },
  {
    title: 'SEO & Performance',
    description: 'Optimizing web apps for search engines with SSR, SSG, precise meta tags, and lightning-fast load times for maximum conversion.',
    icon: SeoIcon,
    features: ['Server-Side Rendering', 'Core Web Vitals', 'Dynamic Meta Tags', 'Lighthouse 100/100']
  }
];
</script>

<style scoped>
.animate-fade-in-up {
	animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translateY(40px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.animate-pulse-slow {
	animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
	0%,
	100% {
		opacity: 1;
		transform: scale(1);
	}
	50% {
		opacity: 0.7;
		transform: scale(1.05);
	}
}
</style>
