<template>
  <div class="relative min-h-screen font-sans selection:bg-indigo-500 selection:text-white">
    <!-- 3D Background -->
    <ClientOnly>
      <CanvasBackground />
    </ClientOnly>

    <!-- Navigation -->
    <header class="fixed top-0 w-full z-50 flex justify-center mt-6 px-4 pointer-events-none">
      <nav class="glass pointer-events-auto px-6 py-4 flex gap-4 md:gap-8 text-sm md:text-base font-medium">
        <NuxtLink to="/" class="hover:text-indigo-400 transition-colors" exact-active-class="text-indigo-500">Home</NuxtLink>
        <NuxtLink to="/about" class="hover:text-indigo-400 transition-colors" active-class="text-indigo-500">About</NuxtLink>
        <NuxtLink to="/work" class="hover:text-indigo-400 transition-colors" active-class="text-indigo-500">Work</NuxtLink>
        <NuxtLink to="/services" class="hover:text-indigo-400 transition-colors" active-class="text-indigo-500">Services</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-indigo-400 transition-colors" active-class="text-indigo-500">Contact</NuxtLink>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex flex-col">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="relative z-10 py-6 text-center text-gray-500 text-sm">
      <p>&copy; Mohamed Amine Fhal {{ new Date().getFullYear() }}</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Layout logic
</script>

<style scoped>
/* Page transition logic could be added here */
</style>
