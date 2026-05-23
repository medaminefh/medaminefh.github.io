import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead } from './v4-KI0v3iPG.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "work",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Mohamed Amine Fhal | Work",
      meta: [
        {
          name: "description",
          content: "Explore my latest projects, case studies, and web applications."
        }
      ]
    });
    const projects = [
      {
        title: "Neuro Nest",
        desc: "Des solutions au service de l'autonomie des personnes en situation de handicap.",
        tools: ["Vuejs", "TailwindCss"],
        image: "/neuronest.png",
        url: "https://neuro-nest-beta.vercel.app/"
      },
      {
        title: "E-commerce platform",
        desc: "A full-stack E-commerce platform built with Nuxt 3 & Tailwind CSS, featuring an Admin dashboard to manage products, users, and orders seamlessly.",
        tools: ["Nuxt3", "TailwindCss", "Vue3"],
        image: "/E-commerce.png",
        ghRepo: "https://github.com/medaminefh/E-commerce_nuxt_ts",
        url: "https://e-commerce-nuxt-ts.vercel.app/"
      },
      {
        title: "JS kitchen",
        desc: `Master JavaScript Fundamentals 🚀
Learn JavaScript fundamentals through fun, cooking-themed exercises and real code challenges. Perfect for beginners!`,
        tools: ["HTML", "CSS", "Javascript"],
        image: "/JS-kitchen.png",
        url: "https://js-kitchen.vercel.app/index.html"
      },
      {
        title: "Trello clone",
        desc: "A highly interactive Kanban board application inspired by Trello. Uses native Drag and Drop APIs with Nuxt 3 for a seamless planning experience.",
        tools: ["Nuxt3", "TailwindCss", "Drag Api"],
        ghRepo: "https://github.com/medaminefh/Trello-clone",
        url: "https://medaminefh.github.io/Trello-clone/"
      },
      {
        title: "Klondike Solitaire",
        desc: "A fully playable Klondike card game built entirely on the web using Vue 3 and precise DOM manipulation. Smooth animations and state logic.",
        tools: ["Vue3", "TailwindCss", "Drag Api"],
        image: "/klondike.png",
        ghRepo: "https://github.com/medaminefh/klondike",
        url: "https://klondikevue.netlify.app/"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-1 w-full max-w-7xl mx-auto flex flex-col gap-16 animate-fade-in-up relative z-10 pt-10" }, _attrs))} data-v-45211a3f><div class="text-center mb-10" data-v-45211a3f><h1 class="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400" data-v-45211a3f> Selected Work </h1><p class="text-gray-400 text-xl max-w-3xl mx-auto font-light" data-v-45211a3f> A curated selection of projects demonstrating my expertise in frontend architecture, immersive interfaces, and scalable applications. </p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-12" data-v-45211a3f><!--[-->`);
      ssrRenderList(projects, (project, index) => {
        _push(`<div class="group relative rounded-3xl p-1 bg-gradient-to-br from-white/10 to-white/0 hover:from-indigo-500/50 hover:to-purple-500/50 transition-colors duration-500" data-v-45211a3f><div class="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" data-v-45211a3f></div><div class="glass relative flex flex-col h-full rounded-[23px] overflow-hidden bg-black/40 backdrop-blur-xl" data-v-45211a3f><div class="h-64 relative overflow-hidden bg-gradient-to-b from-indigo-900/30 to-black/50" data-v-45211a3f><img${ssrRenderAttr("src", project.image || "https://placehold.net/400x400.png")}${ssrRenderAttr("alt", project.title)} class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700 ease-out" data-v-45211a3f><div class="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" data-v-45211a3f></div></div><div class="p-8 flex flex-col flex-1 relative z-20 -mt-10" data-v-45211a3f><h3 class="text-3xl font-bold my-4 text-white group-hover:text-indigo-300 transition-colors drop-shadow-md" data-v-45211a3f>${ssrInterpolate(project.title)}</h3><p class="text-gray-300 mb-8 flex-1 leading-relaxed" data-v-45211a3f>${ssrInterpolate(project.desc)}</p><div class="flex flex-wrap gap-2 mb-8" data-v-45211a3f><!--[-->`);
        ssrRenderList(project.tools, (tool) => {
          _push(`<span class="px-4 py-1.5 text-sm font-semibold rounded-full bg-white/5 text-gray-200 border border-white/10 shadow-sm backdrop-blur-md" data-v-45211a3f>${ssrInterpolate(tool)}</span>`);
        });
        _push(`<!--]--></div><div class="flex gap-4 items-center mt-auto" data-v-45211a3f>`);
        if (project.url) {
          _push(`<a${ssrRenderAttr("href", project.url)} target="_blank" rel="noopener noreferrer" class="text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30" data-v-45211a3f> View Live Site </a>`);
        } else {
          _push(`<!---->`);
        }
        if (project.ghRepo) {
          _push(`<a${ssrRenderAttr("href", project.ghRepo)} target="_blank" rel="noopener noreferrer" class="text-sm font-bold text-gray-400 hover:text-white px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all hover:-translate-y-1 flex items-center gap-2" data-v-45211a3f><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-v-45211a3f><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" data-v-45211a3f></path></svg> GitHub </a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/work.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const work = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-45211a3f"]]);

export { work as default };
//# sourceMappingURL=work-DanhYkde.mjs.map
