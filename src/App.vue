<script setup lang="ts">
import About from "@/components/about.vue";
import Work from "@/components/work.vue";
import Contact from "@/components/contact.vue";
import { ref } from "vue";

const currentPage = ref<"about" | "work" | "contact">("about");
const changePage = (page: "about" | "work" | "contact") => {
  currentPage.value = page;
};
</script>

<template>
  <ul class="w-screen flex items-center justify-center gap-x-20 py-8">
    <li
      @click="changePage('about')"
      :class="[
        'px-2 hover:text-purple-300 cursor-pointer',
        currentPage === 'about' && 'text-purple-500',
      ]"
    >
      About
    </li>
    <li
      @click="changePage('work')"
      :class="[
        'px-2 hover:text-purple-300 cursor-pointer',
        currentPage === 'work' && 'text-purple-500',
      ]"
    >
      Work
    </li>
    <li
      @click="changePage('contact')"
      :class="[
        'px-2 hover:text-purple-300 cursor-pointer',
        currentPage === 'contact' && 'text-purple-500',
      ]"
    >
      Contact
    </li>
  </ul>
  <div class="px-10 py-8 w-screen">
    <About v-if="currentPage === 'about'" />
    <Work v-if="currentPage === 'work'" />
    <Contact v-if="currentPage === 'contact'" />
  </div>
</template>
