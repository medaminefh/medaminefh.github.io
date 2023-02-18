<script setup lang="ts">
function differenceInMonths(date1: string, date2?: string) {
  const d1 = new Date(date1);
  const d2 = date2 ? new Date(date2) : new Date();
  const monthDiff = d2.getMonth() - d1.getMonth();
  const yearDiff = d2.getFullYear() - d1.getFullYear();
  const months = monthDiff + yearDiff * 12;

  if (yearDiff > 0 && monthDiff > 0) {
    return `~${Math.floor(months / 12)} Year(s), ${months % 12} Month(s)`;
  }
  return `~${months} Month(s)`;
}

const handleColor = (language: string): string | void => {
  if (language === "...") return;
  switch (language.toLocaleLowerCase()) {
    case "javascript":
      return "bg-yellow-200 text-yellow-800";

    case "typescript":
      return "bg-blue-100 text-blue-800";

    case "reactjs":
      return "bg-blue-300 text-blue-800";

    case "tailwindcss":
      return "bg-blue-300 text-blue-700";

    case "node.js":
      return "bg-green-300 text-green-800";

    case "vue.js":
      return "bg-green-400 text-green-700";

    case "graphql":
      return "bg-purple-100 text-purple-800";

    default:
      return "bg-green-100 text-green-800";
  }
};

const state = {
  experiences: [
    {
      company: "Lobsterware",
      position: "Javascript developer",
      from: "06/14/2022",
      until: undefined,
      isCurrent: true,
      tools: [
        "Javascript",
        "Typescript",
        "TailwindCss",
        "Vue.js",
        "Node.js",
        "Express.js",
        "GraphQL",
        "MongoDB",
        "...",
      ],
    },
    {
      company: "Personal projects",
      position: "Javascript developer",
      from: "01/01/2019",
      until: "09/13/2022",
      isCurrent: false,
      tools: [
        "Javascript",
        "ReactJs",
        "Node.js",
        "Express.js",
        "MongoDB",
        "...",
      ],
    },
  ],
};
</script>
<template>
  <div class="space-y-6">
    <div class="flex flex-col md:flex-row gap-6 items-center">
      <div
        class="rounded-full overflow-hidden border border-cyan-500 w-44 h-44"
      >
        <img
          loading="lazy"
          src="../assets/photo.jpg"
          alt="Mohamed amine fh photo"
          class="w-44 bg-contain"
        />
      </div>
      <div class="flex flex-col gap-y-2 max-w-lg">
        <h3 class="text-xl font-semibold text-center md:text-start">
          Software developer.
        </h3>
        <hr />
        <p class="text-gray-500">
          Mohamed Amine Fhal, a self-taught developer, and as any self-taught
          always seeking to learn.
        </p>
      </div>
    </div>
    <ol class="relative border-l border-gray-200">
      <li
        v-for="(experience, index) in state.experiences"
        :key="index"
        class="mb-10 ml-6"
      >
        <span
          class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white"
        >
          <svg
            aria-hidden="true"
            class="w-3 h-3 text-blue-800"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">
          {{ experience.company }}
          <span
            v-if="experience.isCurrent"
            class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3"
            >Current</span
          ><span
            :class="[
              'text-sm font-normal leading-none text-gray-400',
              !experience.isCurrent && 'px-2.5',
            ]"
            >{{ differenceInMonths(experience.from, experience.until) }}</span
          >
        </h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400"
          >{{ experience.from }} -
          {{ experience.isCurrent ? "Present" : experience.until }}</time
        >
        <p class="text-gray-400 flex flex-wrap items-center gap-2">
          Worked with
          <span
            v-for="(tool, index) in experience.tools"
            :key="index"
            :class="[
              handleColor(tool),
              tool !== '...' && 'text-xs font-medium mr-2 px-2.5 py-0.5',
            ]"
            >{{ tool }}</span
          >
        </p>
      </li>
    </ol>
  </div>
</template>
