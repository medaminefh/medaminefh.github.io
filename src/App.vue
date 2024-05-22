<script setup lang="ts">
import About from "@/components/about.vue";
import Work from "@/components/work.vue";
import Contact from "@/components/contact.vue";
import Events from "@/components/events.vue";
import { ref } from "vue";

const currentPage = ref<"About" | "Work" | "Contact" | "Events">("About");
const components = { About, Work, Contact, Events };
const changePage = (page: "About" | "Work" | "Contact" | "Events") => {
  currentPage.value = page;
};
</script>

<template>
  <div class="flex items-center justify-center mb-4 lg:my-8">
    <ul
      class="bg-neutral-50/50 lg:rounded-[28px] shadow flex lg:gap-6 gap-3 px-6 py-4 text-lg text-slate-800 w-full lg:w-auto"
    >
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
        @click="changePage('Events')"
        :class="[
          'px-2 hover:text-purple-300 cursor-pointer',
          currentPage === 'Events' && 'text-purple-500',
        ]"
      >
        Events
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
      <component
        @changePage="changePage"
        :is="components[currentPage]"
        :key="currentPage"
      />
    </TransitionGroup>
  </div>
  <div class="flex p-4 justify-center items-center">
    <p>&copy;medaminefh {{ new Date().getUTCFullYear() }}</p>
  </div>
</template>

<style scoped>
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
