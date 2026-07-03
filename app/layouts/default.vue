<template>
	<div class="page-shell">
		<ClientOnly>
			<CanvasBackground />
		</ClientOnly>

		<header class="site-header">
			<nav class="site-nav" aria-label="Primary navigation">
				<NuxtLink to="/" class="brand-mark" aria-label="Mohamed Amine Fhal home">
					<span class="brand-glyph">MA</span>
					<span class="brand-copy">
						<span>Mohamed Amine Fhal</span>
						<span>Software Developer</span>
					</span>
				</NuxtLink>

				<div class="nav-links">
					<NuxtLink to="/" class="nav-link" exact-active-class="router-link-exact-active">
						Home
					</NuxtLink>
					<NuxtLink to="/work" class="nav-link">Work</NuxtLink>
					<NuxtLink to="/about" class="nav-link">About</NuxtLink>
					<NuxtLink to="/services" class="nav-link">Services</NuxtLink>
					<NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
				</div>
			</nav>
		</header>

		<main class="main-content">
			<slot />
		</main>

		<footer class="site-footer">
			<div class="footer-inner">
				<p>© {{ currentYear }} Mohamed Amine Fhal. Built with Nuxt, Vue, and WebGL.</p>
				<div class="footer-links" aria-label="Social links">
					<a href="https://github.com/medaminefh" target="_blank" rel="noopener noreferrer">
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/mohamed-amine-fhal"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
					<NuxtLink to="/contact">Contact</NuxtLink>
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
