<script setup lang="ts">
import About from "@/components/about.vue";
import Work from "@/components/work.vue";
import Contact from "@/components/contact.vue";
import { ref } from "vue";

const currentPage = ref<"About" | "Work" | "Contact">("About");
const components = { About, Work, Contact };
const changePage = (page: "About" | "Work" | "Contact") => {
  currentPage.value = page;
};
</script>

<template>
  <div class="flex items-center justify-center py-8">
    <ul class="flex gap-x-20 shadow-md rounded p-2">
      <li
        @click="changePage('About')"
        :class="[
          'px-2 hover:text-purple-300 cursor-pointer',
          currentPage === 'About' && 'text-purple-500',
        ]"
      >
        About
      </li>
      <li
        @click="changePage('Work')"
        :class="[
          'px-2 hover:text-purple-300 cursor-pointer',
          currentPage === 'Work' && 'text-purple-500',
        ]"
      >
        Work
      </li>
      <li
        @click="changePage('Contact')"
        :class="[
          'px-2 hover:text-purple-300 cursor-pointer',
          currentPage === 'Contact' && 'text-purple-500',
        ]"
      >
        Contact
      </li>
    </ul>
  </div>

  <div class="px-10 py-8 w-full">
    <TransitionGroup>
      <component :is="components[currentPage]" :key="currentPage" />
    </TransitionGroup>
  </div>
</template>

<style>
.v-enter-from {
  transform: translateX(-300px);
  opacity: 0;
}

.v-leave-to {
  position: absolute;
  transform: translateX(300px);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
