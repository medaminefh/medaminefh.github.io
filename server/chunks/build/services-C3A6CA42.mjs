import { _ as __nuxt_component_0 } from './nuxt-link-CwkxlN3J.mjs';
import { defineComponent, mergeProps, createVNode, resolveDynamicComponent, withCtx, createTextVNode, h, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useHead } from './v4-hviH5yOG.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _imports_0 = publicAssetsURL("/illu-scalability.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Mohamed Amine Fhal | Services",
      meta: [
        {
          name: "description",
          content: "Explore the web development and 3D web experiences I offer."
        }
      ]
    });
    const CodeIcon = () => h("svg", { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", "stroke-width": "2" }, [
      h("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" })
    ]);
    const ThreeDIcon = () => h("svg", { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", "stroke-width": "2" }, [
      h("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" })
    ]);
    const SeoIcon = () => h("svg", { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", "stroke-width": "2" }, [
      h("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" })
    ]);
    const ServerIcon = () => h("svg", { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", "stroke-width": "2" }, [
      h("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" })
    ]);
    const services2 = [
      {
        title: "Frontend Architecture",
        description: "Building fast, responsive, and accessible web applications using Vue.js, Nuxt, and modern tooling. I engineer robust solutions that scale.",
        icon: CodeIcon,
        features: ["Vue.js & Nuxt 3/4", "Tailwind CSS Styling", "State Management", "API Integration"]
      },
      {
        title: "Backend Engineering",
        description: "Designing scalable, secure backend systems and RESTful APIs using Node.js, Python, and modern enterprise frameworks.",
        icon: ServerIcon,
        features: ["Node.js (ExpressJS)", "NestJS Architecture", "Django & Flask", "Database Design"]
      },
      {
        title: "3D Web Experiences",
        description: "Integrating WebGL and Three.js directly into the DOM to create immersive, premium 3D animations that captivate users and elevate brands.",
        icon: ThreeDIcon,
        features: ["Three.js & TresJS", "Interactive Canvas", "3D Model Loading", "Scroll Animations"]
      },
      {
        title: "SEO & Performance",
        description: "Optimizing web apps for search engines with SSR, SSG, precise meta tags, and lightning-fast load times for maximum conversion.",
        icon: SeoIcon,
        features: ["Server-Side Rendering", "Core Web Vitals", "Dynamic Meta Tags", "Lighthouse 100/100"]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-1 w-full max-w-6xl mx-auto flex flex-col gap-16 animate-fade-in-up relative z-10 pt-10" }, _attrs))} data-v-e9612763><div class="text-center mb-10 flex flex-col items-center" data-v-e9612763><div class="w-32 h-32 mb-8 opacity-80 animate-pulse-slow" data-v-e9612763><img${ssrRenderAttr("src", _imports_0)} alt="Scalability Illustration" class="w-full h-full object-contain" data-v-e9612763></div><h1 class="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-lg" data-v-e9612763> My Services </h1><p class="text-gray-400 text-xl max-w-2xl mx-auto font-light leading-relaxed" data-v-e9612763> I provide comprehensive development services, translating complex business logic into high-performance, visually stunning digital products. </p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-v-e9612763><!--[-->`);
      ssrRenderList(services2, (service, i) => {
        _push(`<div class="glass p-10 rounded-[32px] bg-gradient-to-b from-white/10 to-transparent hover:from-indigo-500/20 hover:to-transparent border border-white/10 hover:border-indigo-500/50 transition-all duration-500 group relative overflow-hidden flex flex-col" data-v-e9612763><div class="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/30 blur-[50px] rounded-full group-hover:bg-purple-500/40 transition-colors" data-v-e9612763></div><div class="w-16 h-16 bg-[#111] border border-white/10 text-indigo-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-xl z-10 relative" data-v-e9612763>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(service.icon), { class: "w-8 h-8" }, null), _parent);
        _push(`</div><h3 class="text-2xl font-bold mb-4 text-white z-10 relative" data-v-e9612763>${ssrInterpolate(service.title)}</h3><p class="text-gray-400 leading-relaxed font-light z-10 relative flex-1" data-v-e9612763>${ssrInterpolate(service.description)}</p><div class="mt-8 pt-6 border-t border-white/10 z-10 relative" data-v-e9612763><ul class="space-y-3" data-v-e9612763><!--[-->`);
        ssrRenderList(service.features, (feature) => {
          _push(`<li class="flex items-center gap-3 text-sm text-gray-300 font-medium" data-v-e9612763><svg class="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-e9612763><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" data-v-e9612763></path></svg> ${ssrInterpolate(feature)}</li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-12 glass p-12 rounded-[40px] bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left" data-v-e9612763><div data-v-e9612763><h3 class="text-3xl font-bold text-white mb-3" data-v-e9612763> Ready to build something amazing? </h3><p class="text-indigo-200 text-lg font-light" data-v-e9612763> Let&#39;s turn your vision into a reality with modern web technologies. </p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "px-8 py-4 bg-white text-indigo-900 font-bold rounded-2xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)] whitespace-nowrap"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Start a Project `);
          } else {
            return [
              createTextVNode(" Start a Project ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const services = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e9612763"]]);

export { services as default };
//# sourceMappingURL=services-C3A6CA42.mjs.map
