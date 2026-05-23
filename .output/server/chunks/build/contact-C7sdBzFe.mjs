import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Mohamed Amine Fhal | Contact",
      meta: [
        {
          name: "description",
          content: "Get in touch with Mohamed Amine Fhal for collaboration and projects."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-1 w-full max-w-2xl mx-auto flex flex-col gap-10 animate-fade-in-up" }, _attrs))} data-v-8629040f><div class="text-center mb-6" data-v-8629040f><h1 class="text-4xl md:text-5xl font-bold mb-4" data-v-8629040f>Get In Touch</h1><p class="text-gray-400 text-lg" data-v-8629040f> Interested in collaborating? Drop me a message and let&#39;s discuss how we can work together. </p></div><div class="glass p-8" data-v-8629040f><form class="flex flex-col gap-6" data-v-8629040f><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-8629040f><div class="flex flex-col gap-2" data-v-8629040f><label for="name" class="text-sm font-medium text-gray-300" data-v-8629040f>Name</label><input type="text" id="name" required class="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="John Doe" data-v-8629040f></div><div class="flex flex-col gap-2" data-v-8629040f><label for="email" class="text-sm font-medium text-gray-300" data-v-8629040f>Email</label><input type="email" id="email" required class="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="john@example.com" data-v-8629040f></div></div><div class="flex flex-col gap-2" data-v-8629040f><label for="message" class="text-sm font-medium text-gray-300" data-v-8629040f>Message</label><textarea id="message" rows="5" required class="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none" placeholder="Tell me about your project..." data-v-8629040f></textarea></div><button type="submit" class="w-full mt-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-indigo-500/20" data-v-8629040f> Send Message </button></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8629040f"]]);

export { contact as default };
//# sourceMappingURL=contact-C7sdBzFe.mjs.map
