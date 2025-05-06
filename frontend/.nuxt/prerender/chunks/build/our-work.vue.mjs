import { defineComponent, defineAsyncComponent, useSSRContext } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$1 } from './NuxtImg.vue2.mjs';
import { _ as _sfc_main$2 } from './LiveChat.vue2.mjs';
import { _ as _sfc_main$3 } from './Portfolio.vue2.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/defu/dist/defu.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ufo/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/h3/dist/index.mjs';
import './server.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unctx/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/radix3/dist/index.mjs';
import '../_/renderer.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unhead/dist/server.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unhead/dist/utils.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/destr/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ohash/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/klona/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/pathe/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ipx/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/devalue/index.js';
import './PrimaryButton.vue.mjs';
import './nuxt-icon.vue3.mjs';
import './nuxt-link.mjs';
import './apiFetch.mjs';
import './cookie.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/cookie-es/dist/index.mjs';

const __nuxt_component_1_lazy = defineAsyncComponent(() => import('./RequestQuote.vue.mjs').then(function (n) { return n.a; }).then((c) => c.default || c));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "our-work",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = _sfc_main$1;
      const _component_LazyRequestQuote = __nuxt_component_1_lazy;
      const _component_Portfolio = _sfc_main$3;
      _push(`<!--[--><div><div class="relative">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/system/our_work_mask.png",
        class: "w-full object-cover",
        sizes: "sm:100vw md:100vw lg:100vw",
        loading: "lazy"
      }, null, _parent));
      _push(`<div class="absolute inset-0 flex items-center justify-center top-[16rem]"><div class="container mx-auto px-4 sm:px-6 lg:px-8"><div class="max-w-6xl mx-auto text-center sm:text-left"><div class="flex items-center justify-center sm:justify-start mb-4"><div class="bg-pink-500 h-1 w-12 mr-2"></div><span class="text-sm uppercase">A Glimpse Of</span></div><h2 class="text-2xl sm:text-4xl font-bold mb-6">Our Work</h2><p class="text-base sm:text-lg mb-8 max-w-4xl mr-auto"> Over the years, we’ve perfected our skills in various domains of animation, logo design, web design, mobile app development, and digital marketing. Now, we’re ready to support your plans for digital expansion. </p><div class="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_component_LazyRequestQuote, null, null, _parent));
      _push(`</div></div></div></div></div></div><div class="container mx-auto lg:-mt-[8rem] mt-[14rem] sm:mt-[2rem] px-3"><div class="text-center justify-center grid space-y-4"><div class="contact-title flex items-center justify-center gap-2 sm:gap-4 w-full"><div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[500px] h-1 bg-gray-300 rounded relative"><div class="absolute top-0 right-0 w-16 sm:w-24 h-1 bg-primary rounded"></div></div><h2 class="sm:text-4xl text-2xl"> Portfolio </h2><div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[500px] h-1 bg-gray-300 rounded relative"><div class="absolute top-0 left-0 w-16 sm:w-24 h-1 bg-primary rounded"></div></div></div>`);
      _push(ssrRenderComponent(_component_Portfolio, null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/our-work.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=our-work.vue.mjs.map
