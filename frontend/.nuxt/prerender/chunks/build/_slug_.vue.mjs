import { defineComponent, withAsyncContext, computed, unref, defineAsyncComponent, useSSRContext } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { u as useMyFetch } from './apiFetch.mjs';
import { d as useRoute } from './server.mjs';
import { _ as _sfc_main$1 } from './NuxtImg.vue2.mjs';
import { _ as _sfc_main$2 } from './LiveChat.vue2.mjs';
import './cookie.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/h3/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/destr/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ohash/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/klona/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unctx/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/radix3/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/defu/dist/defu.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ufo/dist/index.mjs';
import '../_/renderer.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unhead/dist/server.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unhead/dist/utils.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/pathe/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ipx/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/devalue/index.js';
import './PrimaryButton.vue.mjs';
import './nuxt-icon.vue3.mjs';

const __nuxt_component_1_lazy = defineAsyncComponent(() => import('./RequestQuote.vue.mjs').then(function (n) { return n.a; }).then((c) => c.default || c));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, status } = ([__temp, __restore] = withAsyncContext(() => useMyFetch(`blog/${useRoute().params.slug}`)), __temp = await __temp, __restore(), __temp);
    const response = computed(() => data.value);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_nuxt_img = _sfc_main$1;
      const _component_LazyRequestQuote = __nuxt_component_1_lazy;
      _push(`<!--[--><div class="relative">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/system/single_blog.png",
        class: "w-full object-cover",
        sizes: "sm:100vw md:100vw lg:100vw",
        loading: "lazy"
      }, null, _parent));
      _push(`<div class="absolute inset-0 flex items-center justify-center sm:top-0 top-[16rem]"><div class="container mx-auto px-4 sm:px-6 lg:px-8"><div class="max-w-6xl mx-auto text-start"><div class="flex items-center justify-start mb-4"><div class="bg-secondary-shade h-1 w-9 mx-1"></div><span class="text-sm uppercase">Blog</span></div><h2 class="self-stretch justify-start text-White text-7xl font-normal font-[&#39;Impact&#39;] sm:max-w-2xl">${ssrInterpolate((_a = unref(response)) == null ? void 0 : _a.heading)}</h2><div class="my-4">${ssrInterpolate(new Date(unref(response).created_at).toDateString())}</div><div class="flex flex-col sm:flex-row items-center justify-start gap-4">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_component_LazyRequestQuote, null, null, _parent));
      _push(`</div></div></div></div></div><div class="container mx-auto">${((_b = unref(response)) == null ? void 0 : _b.description) ?? ""}</div><!--]-->`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_.vue.mjs.map
