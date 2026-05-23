<template>
	<div
		class="flex-1 w-full max-w-6xl mx-auto flex flex-col gap-20 animate-fade-in-up relative z-10 pt-10"
	>
		<!-- Bio Section -->
		<div class="flex flex-col lg:flex-row gap-12 items-center lg:items-center">
			<div class="relative group">
				<div
					class="absolute -inset-1 bg-gradient-to-tr from-emerald-500 to-indigo-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000"
				></div>
				<div
					class="w-56 h-56 relative rounded-full overflow-hidden border-4 border-[#111] shadow-2xl"
				>
					<img
						src="/photo.png"
						alt="Mohamed Amine Fh"
						class="w-full h-full object-cover"
					/>
				</div>
			</div>

			<div class="flex flex-col gap-6 text-center lg:text-left flex-1">
				<h1
					class="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"
				>
					About Me
				</h1>
				<div
					class="inline-flex items-center justify-center lg:justify-start gap-2 text-sm font-bold text-emerald-400 bg-emerald-400/10 px-4 py-2 rounded-full w-fit mx-auto lg:mx-0 border border-emerald-400/20"
				>
					<span class="relative flex h-3 w-3">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
						></span>
						<span
							class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"
						></span>
					</span>
					Ready for new projects
				</div>
				<p class="text-gray-300 leading-relaxed text-xl font-light">
					I'm a self-taught developer deeply passionate about building scalable,
					high-quality web applications. My journey into technology has driven
					me to master modern JavaScript frameworks, backend systems, and
					immersive 3D web experiences. I thrive on translating complex problems
					into elegant, intuitive user interfaces.
				</p>
			</div>
		</div>

		<!-- Experience Timeline -->
		<div class="glass p-10 md:p-16 rounded-[40px] bg-black/30">
			<h2 class="text-4xl font-extrabold mb-12 text-center text-white">
				My Journey
			</h2>
			<div
				class="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-indigo-500/50 before:to-transparent"
			>
				<div
					v-for="(exp, i) in experiences"
					:key="i"
					class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
				>
					<div
						class="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#111] bg-gradient-to-br from-indigo-400 to-purple-600 shadow-[0_0_20px_rgba(79,70,229,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative"
					></div>

					<div
						class="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] glass p-8 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 hover:border-indigo-500/50 rounded-3xl relative overflow-hidden"
					>
						<!-- Glow effect -->
						<div
							class="absolute -inset-10 bg-indigo-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
						></div>

						<div class="relative z-10">
							<div
								class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2"
							>
								<h3 class="font-bold text-2xl text-white">
									{{ exp.position }}
								</h3>
								<span
									class="text-indigo-400 text-sm font-bold bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20"
								>
									{{ exp.from }} - {{ exp.isCurrent ? "Present" : exp.until }}
								</span>
							</div>
							<div class="text-gray-300 mb-6 font-semibold text-lg">
								{{ exp.company }}
							</div>

							<div class="flex flex-wrap gap-2">
								<span
									v-for="tool in exp.tools"
									:key="tool"
									class="px-3 py-1 text-xs font-semibold rounded-lg bg-[#111] border border-white/5 text-gray-300 shadow-inner"
								>
									{{ tool }}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Latest Blogs -->
		<div class="mb-20">
			<h2 class="text-4xl font-extrabold mb-10 text-center text-white">
				Technical Writing
			</h2>

			<div
				v-if="pending"
				class="text-center text-indigo-400 py-20 flex justify-center items-center gap-3"
			>
				<svg
					class="animate-spin h-8 w-8 text-indigo-500"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						class="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						stroke-width="4"
					></circle>
					<path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
				<span class="text-xl font-medium">Fetching articles...</span>
			</div>

			<div
				v-else-if="blogs && blogs.length > 0"
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
			>
				<a
					v-for="blog in blogs.slice(0, 3)"
					:key="blog.id"
					:href="blog.url"
					target="_blank"
					class="glass overflow-hidden group hover:-translate-y-2 transition-all duration-300 bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:shadow-[0_10px_40px_rgba(79,70,229,0.3)] rounded-3xl flex flex-col"
				>
					<div class="h-52 overflow-hidden bg-[#111] relative">
						<img
							v-if="blog.cover_image"
							:src="blog.cover_image"
							:alt="blog.title"
							class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent opacity-80"
						></div>
					</div>
					<div
						class="p-8 flex-1 flex flex-col relative z-10 -mt-10 bg-gradient-to-b from-transparent to-[#1a1a1a] rounded-b-3xl"
					>
						<div
							class="text-xs text-indigo-400 mb-3 font-bold uppercase tracking-wider"
						>
							{{ formatDate(blog.published_at) }}
						</div>
						<h3
							class="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-2 mb-4"
						>
							{{ blog.title }}
						</h3>
						<p
							class="text-sm text-gray-400 line-clamp-3 font-light leading-relaxed mb-4"
						>
							{{ blog.description }}
						</p>
						<div
							class="mt-auto text-indigo-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
						>
							Read Article
							<svg
								class="w-4 h-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								></path>
							</svg>
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
useHead({
	title: "Mohamed Amine Fhal | About",
	meta: [
		{
			name: "description",
			content:
				"Learn more about my background, experience, and latest technical articles.",
		},
	],
});

// SSR Data fetching for blogs
const { data: blogs, pending } = await useFetch<any[]>(
	"https://dev.to/api/articles?username=medaminefh",
	{
		lazy: true,
		server: true,
	}
);

const formatDate = (dateString: string) => {
	return new Date(dateString).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
};

const experiences = [
	{
		company: "Freelance",
		position: "Programming Mentor",
		from: "03/2023",
		until: undefined,
		isCurrent: true,
		tools: [
			"Javascript",
			"Python",
			"Typescript",
			"Vue",
			"React",
			"Node.js",
			"Django",
			"GraphQL",
		],
	},
	{
		company: "Code in place",
		position: "Section Leader Volunteer",
		from: "04/2023",
		until: "06/2023",
		isCurrent: false,
		tools: ["Python", "Graphics", "Console"],
	},
	{
		company: "Lobsterware",
		position: "Javascript Developer",
		from: "06/2022",
		until: "03/2023",
		isCurrent: false,
		tools: [
			"Javascript",
			"Typescript",
			"TailwindCss",
			"Vue.js",
			"Node.js",
			"GraphQL",
		],
	},
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
</style>
