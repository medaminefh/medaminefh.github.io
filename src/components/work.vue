<script setup lang="ts">
import { computed, reactive, ref } from "vue";

const showedAll = ref(false);

const projects = reactive([
  {
    title: "Klondike game",
    desc: "Its a card game, I used Vue3 & TailwindCss in this project",
    tools: ["Vue3", "TailwindCss", "Drag Api"],
    ghRepo: "https://github.com/medaminefh/klondike",
    url: "https://klondikevue.netlify.app/",
  },
  {
    title: "My blogs app",
    desc: "Created my own blog app, using the MERN stack technologies",
    tools: ["Mongodb", "Express", "React", "Nodejs"],
    ghRepo: "https://github.com/medaminefh/blogs",
    url: "https://medaminefh.github.io/blogs",
  },
  {
    title: "Tweet clone",
    desc: "This a tweet clone app, i built this as part of the CS50 projects",
    tools: ["Django", "Bootstrap", "Postgresql", "SQlite"],
    ghRepo: "https://github.com/medaminefh/Network-cs50",
    url: "https://network-gxlu.onrender.com/",
  },
  {
    title: "Instagram clone",
    desc: "An instagram clone, using the MEREN stack technologies",
    tools: ["Mongodb", "Express", "React", "Nodejs"],
    ghRepo: "https://github.com/medaminefh/instag",
    url: "https://medaminefh.github.io/instag",
  },
  {
    title: "Auctions app",
    desc: "This project is part of the CS50 projects, built it using the Django framework",
    tools: ["Django", "Bootstrap", "Postgresql", "SQlite"],
    ghRepo: "https://github.com/medaminefh/cs50W-commerce",
    url: "",
  },
  {
    title: "Wiki app",
    desc: "This project is part of the CS50 projects, built it using the Django framework",
    tools: ["Django", "Bootstrap", "Postgresql", "SQlite"],
    ghRepo: "https://github.com/medaminefh/wiki",
    url: "",
  },
  {
    title: "Photo search app",
    desc: "Search for photos from pixabay",
    tools: ["React", "TailwindCss"],
    ghRepo: "https://github.com/medaminefh/photosearch",
    url: "https://medaminefh.github.io/photosearch",
  },
]);

const projectsClone = computed(() =>
  showedAll.value ? projects : projects.slice(0, 5)
);
</script>

<template>
  <div>
    <h1
      class="text-center text-3xl lg:text-5xl tracking-wider text-gray-900 mb-12 lg:mb-24"
    >
      Check my projects
    </h1>
    <div
      class="flex flex-col md:flex-row items-center justify-center gap-8 flex-wrap ease-linear duration-300"
    >
      <TransitionGroup>
        <div
          v-for="(project, index) in projectsClone"
          :key="index"
          class="group relative w-56 h-40 px-4 py-2 shadow-lg border border-slate-500 rounded-md bg-white"
        >
          <div class="flex flex-col justify-between w-full h-full relative">
            <div
              class="hidden md:flex md:opacity-0 md:absolute top-0 right-0 md:group-hover:opacity-100 md:group-hover:-top-8 gap-x-3 ease-in duration-100 justify-end items-start"
            >
              <a
                :href="project.ghRepo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img class="w-9" src="../assets/githubLogo.svg"
              /></a>
              <a
                v-show="project.url.length"
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                ><img class="w-9" src="../assets/linkLogo.svg"
              /></a>
            </div>
            <h3 class="text-lg text-center">
              {{ project.title }}
            </h3>
            <p class="text-sm flex flex-col gap-y-2 items-start">
              <span>{{ project.desc }}</span>
              <span class="md:hidden flex gap-x-3 justify-end items-start">
                <a
                  :href="project.ghRepo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img class="w-6" src="../assets/githubLogo.svg"
                /></a>
                <a
                  v-show="project.url.length"
                  :href="project.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img class="w-6" src="../assets/linkLogo.svg"
                /></a>
              </span>
            </p>
            <p class="flex flex-wrap gap-x-2 text-xs">
              <span v-for="tool in project.tools" :key="tool">{{ tool }}</span>
            </p>
          </div>
        </div>
      </TransitionGroup>
      <button
        class="text-2xl"
        title="more"
        v-show="!showedAll"
        @click="() => (showedAll = true)"
      >
        ...
      </button>
    </div>
  </div>
</template>

<style scoped>
.v-enter-from {
  opacity: 0;
}

.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
