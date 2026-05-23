import { _ as __nuxt_component_0 } from './nuxt-link-Ct46ISJa.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-CRgbH3YN.mjs';
import { u as useHead } from './v4-KI0v3iPG.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Mohamed Amine Fhal - Software Developer",
      meta: [
        {
          name: "description",
          content: "Portfolio of Mohamed Amine Fhal. I build premium, interactive web experiences."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-1 flex flex-col justify-center items-center text-center relative z-10 w-full" }, _attrs))} data-v-b6e70044><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none" data-v-b6e70044></div><div class="p-8 md:p-16 max-w-4xl w-full flex flex-col items-center animate-fade-in-up" data-v-b6e70044><div class="relative group cursor-pointer mb-10" data-v-b6e70044><div class="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" data-v-b6e70044></div><div class="relative w-40 h-40 rounded-full overflow-hidden border-4 border-black/50 ring-4 ring-white/10 shadow-2xl" data-v-b6e70044><img${ssrRenderAttr("src", _imports_0)} alt="Mohamed Amine Fh" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" data-v-b6e70044></div></div><div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-xl" data-v-b6e70044><span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" data-v-b6e70044></span><span class="text-sm font-medium text-gray-300" data-v-b6e70044>Available for new opportunities</span></div><h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-purple-300 drop-shadow-sm" data-v-b6e70044> Mohamed Amine Fhal </h1><p class="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl leading-relaxed font-light" data-v-b6e70044> I engineer <span class="text-white font-semibold" data-v-b6e70044>premium web experiences</span> bridging the gap between immersive 3D interfaces and scalable frontend architecture. </p><div class="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center" data-v-b6e70044>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/work",
        class: "group relative px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-2xl text-white font-semibold transition-all shadow-[0_0_40px_rgba(79,70,229,0.4)] hover:shadow-[0_0_60px_rgba(79,70,229,0.6)] overflow-hidden"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" data-v-b6e70044${_scopeId}></div><span class="relative flex items-center justify-center gap-2" data-v-b6e70044${_scopeId}> Explore My Work <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-b6e70044${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" data-v-b6e70044${_scopeId}></path></svg></span>`);
          } else {
            return [
              createVNode("div", { class: "absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" }),
              createVNode("span", { class: "relative flex items-center justify-center gap-2" }, [
                createTextVNode(" Explore My Work "),
                (openBlock(), createBlock("svg", {
                  class: "w-5 h-5 group-hover:translate-x-1 transition-transform",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M14 5l7 7m0 0l-7 7m7-7H3"
                  })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 transition-all backdrop-blur-md hover:border-white/30 flex items-center justify-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Let&#39;s Talk `);
          } else {
            return [
              createTextVNode(" Let's Talk ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-16 flex gap-6" data-v-b6e70044><a href="https://github.com/medaminefh" target="_blank" class="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all text-gray-400 hover:text-white group" data-v-b6e70044><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" data-v-b6e70044><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" data-v-b6e70044></path></svg></a><a href="https://www.linkedin.com/in/mohamed-amine-fhal" target="_blank" class="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all text-gray-400 hover:text-blue-400 group" data-v-b6e70044><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" data-v-b6e70044><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" data-v-b6e70044></path></svg></a></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b6e70044"]]);

export { index as default };
//# sourceMappingURL=index-CAMQQEy0.mjs.map
