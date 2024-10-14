<script setup lang="ts">
import { onMounted, ref } from "vue";

interface Blog {
  id: string;
  title: string;
  cover_image: string;
  created_at: string;
  url: string;
  description: string;
}

// type-based
const emit = defineEmits<{
  (e: "changePage", page: string): void;
}>();

const blogs = ref<Blog[]>([]);
function differenceInMonths(date1: string, date2?: string) {
  const d1 = new Date(date1);
  const d2 = date2 ? new Date(date2) : new Date();
  const monthDiff = d2.getMonth() - d1.getMonth();
  const yearDiff = d2.getFullYear() - d1.getFullYear();
  const months = monthDiff + 1 + yearDiff * 12;

  if (yearDiff > 0 && monthDiff > 0) {
    return `~${Math.floor(months / 12)} Year(s), ${months % 12} Month(s)`;
  }
  return `~${months} Month(s)`;
}

onMounted(async () => {
  try {
    const data = await fetch("https://dev.to/api/articles?username=medaminefh");
    const jsonData = await data.json();
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    blogs.value = jsonData.map((blog: any) => ({
      id: blog.id,
      title: blog.title,
      cover_image: blog.cover_image,
      created_at: new Date(blog.published_at).toLocaleDateString(
        "en-US",
        options
      ),
      url: blog.url,
      description: blog.description,
    }));
  } catch (error) {
    console.log("Error fetching data", error);
  }
});

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
      company: "Freelance",
      position: "programming mentor",
      from: "03/01/2023",
      until: undefined,
      isCurrent: true,
      tools: [
        "Javascript",
        "Python",
        "Typescript",
        "TailwindCss",
        "ReactJs",
        "Vue.js",
        "Node.js",
        "Express.js",
        "Flask",
        "Django",
        "GraphQL",
        "MongoDB",
        "...",
      ],
    },
    {
      company: "Code in place",
      position: "Section leader Volunteer",
      from: "04/20/2023",
      until: "06/01/2023",
      isCurrent: false,
      tools: ["Python", "Karl", "Graphics", "Console"],
    },
    {
      company: "Lobsterware",
      position: "Javascript developer",
      from: "06/14/2022",
      until: "03/01/2023",
      isCurrent: false,
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
  <div>
    <div
      class="flex flex-col gap-y-8 md:flex-row md:gap-x-8 divide-y-2 md:divide-x-2 md:divide-y-0 h-full"
    >
      <div class="space-y-10 w-full relative">
        <div class="flex flex-col md:flex-row gap-6 items-center">
          <div
            class="relative rounded-full border border-cyan-500 w-44 h-44 md:hover:shadow-cyan-200 md:shadow-xl ease-in duration-100 shadow-cyan-200 shadow-lg"
          >
            <img
              loading="lazy"
              src="../assets/photo.jpg"
              alt="Mohamed amine fh photo"
              class="w-44 rounded-full"
            />
          </div>
          <div class="flex flex-col gap-y-2 max-w-lg">
            <h3
              class="flex flex-col md:flex-row text-xl text-gray-100 font-semibold items-center gap-x-2"
            >
              <span>Software developer...</span>
              <p class="flex gap-x-2 justify-center">
                <a
                  href="https://www.linkedin.com/in/mohamed-amine-fhal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    loading="lazy"
                    src="../assets/linkedin.svg"
                    alt="Linkedin logo"
                    class="w-7 md:group-hover:scale-110"
                  />
                </a>
                <a
                  href="https://github.com/medaminefh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    loading="lazy"
                    src="../assets/githubLogo.svg"
                    alt="github logo"
                    class="w-7 md:group-hover:scale-110"
                  />
                </a>
              </p>
            </h3>
            <hr />
            <div
              class="select-none flex gap-x-2 backdrop-filter backdrop-blur-sm bg-opacity-70 py-2 px-3 text-sm bg-teal-100 max-w-fit rounded-xl items-center ring-1 ring-slate-100"
            >
              <span class="text-teal-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  style="width: 20px"
                  width="20px"
                  height="20px"
                  viewBox="0 0 256 256"
                >
                  <g fill="currentColor">
                    <path
                      d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z"
                      opacity=".2"
                    ></path>
                    <path
                      d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26M109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
                    ></path>
                  </g>
                </svg>
              </span>
              <span class="text-slate-700">Available for Collaboration</span>
            </div>
            <p class="text-gray-300">
              Mohamed Amine Fhal, a self-taught developer, My passion for
              technology has led me to learn various programming languages and
              frameworks, Feel free to reach out if you want to have little
              chat.
              <button
                class="text-purple-500 hover:underline"
                @click="emit('changePage', 'Contact')"
              >
                get in touch!
              </button>
            </p>
          </div>
        </div>
        <ol class="relative border-l border-gray-200 ml-4">
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
            <h3
              class="flex items-center mb-1 text-lg flex-wrap font-semibold text-gray-100 gap-2"
            >
              {{ experience.company }}
              <span class="text-sm font-normal leading-none text-gray-300"
                >({{ experience.position }})</span
              >
              <span
                v-if="experience.isCurrent"
                class="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded"
                >Current</span
              ><span
                :class="[
                  'text-sm font-normal leading-none text-gray-400',
                  !experience.isCurrent && 'px-2.5',
                ]"
                >{{
                  differenceInMonths(experience.from, experience.until)
                }}</span
              >
            </h3>
            <time
              class="block my-2 text-sm font-normal leading-none text-gray-400"
              >{{ experience.from }} -
              {{ experience.isCurrent ? "Present" : experience.until }}</time
            >
            <p
              class="text-gray-400 flex flex-wrap items-center gap-2 max-w-4xl"
            >
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
    </div>
    <div id="blog" class="px-4 xl:px-0 py-12">
      <div class="mx-auto container">
        <h1
          class="text-center text-3xl lg:text-5xl tracking-wider text-gray-100"
        >
          Check my latest blogs
        </h1>
        <div class="mt-12 lg:mt-24">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img
                v-if="blogs[0]?.cover_image"
                class="w-full"
                :src="blogs[0]?.cover_image"
                :alt="blogs[0]?.title"
              />
              <div
                class="py-4 px-4 md:px-8 w-full flex justify-between bg-indigo-700"
              >
                <p class="text-sm text-white font-semibold tracking-wide">
                  Mohamed Amine Fh
                </p>
                <p class="text-sm text-white font-semibold tracking-wide">
                  {{ blogs[0]?.created_at }}
                </p>
              </div>
              <div
                class="bg-white px-6 md:px-10 py-6 rounded-bl-3xl rounded-br-3xl"
              >
                <h1
                  class="text-xl md:text-3xl text-gray-900 font-semibold tracking-wider"
                >
                  {{ blogs[0]?.title }}
                </h1>
                <p
                  class="text-gray-700 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12"
                >
                  {{ blogs[0]?.description }}
                </p>
                <div class="mt-4 justify-end flex items-center">
                  <a
                    :href="blogs[0]?.url"
                    target="_blank"
                    class="text-base tracking-wide text-indigo-500"
                  >
                    <span>Read more</span>
                  </a>
                  <svg
                    class="ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                  >
                    <path
                      d="M11.7998 1L18.9998 8.53662L11.7998 16.0732"
                      stroke="#4338ca"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M1 8.53662H19"
                      stroke="#4338ca"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div class="h-5 w-2"></div>
              </div>
            </div>
            <div>
              <div
                class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8"
              >
                <div v-for="(blog, index) in blogs.slice(1, 15)" :key="index">
                  <div class="overflow-hidden">
                    <img
                      v-if="blog?.cover_image"
                      class="w-full md:hover:scale-110 ease-in duration-300"
                      :src="blog?.cover_image"
                      :alt="blog?.title"
                    />
                  </div>
                  <div
                    class="py-2 px-4 w-full flex justify-between bg-indigo-700"
                  >
                    <p class="text-sm text-white font-semibold tracking-wide">
                      Mohamed Amine Fh
                    </p>
                    <p class="text-sm text-white font-semibold tracking-wide">
                      {{ blog?.created_at }}
                    </p>
                  </div>
                  <div class="bg-white px-3 lg:px-6 py-4 rounded-b-lg">
                    <h1
                      class="text-lg hover:text-purple-300 cursor-pointer text-gray-900 font-semibold tracking-wider"
                    >
                      <a :href="blog?.url" target="_blank">{{ blog?.title }}</a>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
