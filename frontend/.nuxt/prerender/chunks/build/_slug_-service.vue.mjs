import { defineComponent, withAsyncContext, computed, unref, defineAsyncComponent, useSSRContext } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { u as useMyFetch } from './apiFetch.mjs';
import { d as useRoute } from './server.mjs';
import { _ as _sfc_main$1 } from './NuxtImg.vue2.mjs';
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

const __nuxt_component_1_lazy = defineAsyncComponent(() => import('./LiveChat.vue.mjs').then((c) => c.default || c));
const __nuxt_component_2_lazy = defineAsyncComponent(() => import('./RequestQuote.vue.mjs').then(function (n) { return n.a; }).then((c) => c.default || c));
const __nuxt_component_3_lazy = defineAsyncComponent(() => import('./Portfolio.vue.mjs').then((c) => c.default || c));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]-service",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, status } = ([__temp, __restore] = withAsyncContext(() => useMyFetch(`service-view/${useRoute().params.slug}`)), __temp = await __temp, __restore(), __temp);
    const service = computed(() => data.value);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const _component_nuxt_img = _sfc_main$1;
      const _component_LazyLiveChat = __nuxt_component_1_lazy;
      const _component_LazyRequestQuote = __nuxt_component_2_lazy;
      const _component_LazyPortfolio = __nuxt_component_3_lazy;
      _push(`<!--[--><div class="relative">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/system/my_service.png",
        class: "w-full object-cover",
        sizes: "sm:100vw md:100vw lg:100vw",
        loading: "lazy"
      }, null, _parent));
      _push(`<div class="absolute inset-0 flex items-center justify-center top-[20rem]"><div class="container mx-auto px-4 sm:px-6 lg:px-8"><div class="max-w-6xl mx-auto text-start"><div class="flex items-center justify-start mb-4"><div class="bg-pink-500 h-1 w-12 mr-2"></div><span class="text-sm uppercase">Welcome To ${ssrInterpolate((_a = unref(service)) == null ? void 0 : _a.name)}</span></div><h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">${ssrInterpolate((_b = unref(service)) == null ? void 0 : _b.name)} Services</h2><p class="text-base sm:text-lg mb-8 max-w-4xl mr-auto">${ssrInterpolate(((_c = unref(service)) == null ? void 0 : _c.desc) || ((_d = unref(service)) == null ? void 0 : _d.short_desc))}</p><div class="flex flex-col sm:flex-row items-center justify-start gap-4">`);
      _push(ssrRenderComponent(_component_LazyLiveChat, null, null, _parent));
      _push(ssrRenderComponent(_component_LazyRequestQuote, null, null, _parent));
      _push(`</div></div></div></div></div><div class="container mx-auto px-3 mt-[16rem] lg:-mt-[4rem] sm:mt-[2rem]">`);
      if (unref(service)) {
        _push(`<div class="text-center justify-center grid space-y-4"><div class="contact-title flex items-center justify-center gap-2 sm:gap-4 w-full"><div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[600px] h-1 bg-gray-300 rounded relative"><div class="absolute top-0 right-0 w-16 sm:w-24 h-1 bg-primary rounded"></div></div><h2 class="sm:text-5xl text-xl font-normal font-[&#39;Impact&#39;]"> Portfolio </h2><div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[600px] h-1 bg-gray-300 rounded relative"><div class="absolute top-0 left-0 w-16 sm:w-24 h-1 bg-primary rounded"></div></div></div>`);
        _push(ssrRenderComponent(_component_LazyPortfolio, {
          service_id: (_e = unref(service)) == null ? void 0 : _e.id
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="w-full max-w-screen-xl mx-auto flex flex-col items-center gap-6 px-4 py-8 overflow-hidden mt-9"><h1 class="text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal font-[&#39;Impact&#39;]">${ssrInterpolate((_f = unref(service)) == null ? void 0 : _f.name)} tips </h1><p class="text-center text-white text-sm sm:text-base md:text-lg font-normal font-[&#39;Shabnam&#39;] max-w-3xl">${ssrInterpolate((_g = unref(service)) == null ? void 0 : _g.short_desc)}</p>`);
      if ((_h = unref(service)) == null ? void 0 : _h.features) {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 w-full"><!--[-->`);
        ssrRenderList(JSON.parse((_i = unref(service)) == null ? void 0 : _i.features), (animation) => {
          _push(`<div style="${ssrRenderStyle((animation == null ? void 0 : animation.title) ? null : { display: "none" })}" class="flex flex-col items-center p-5 bg-white/5 rounded-3xl border border-white/40"><h2 class="text-center text-white text-xl sm:text-2xl md:text-3xl font-normal font-[&#39;Impact&#39;]">${ssrInterpolate(animation.title)}</h2><div class="w-10 h-1 bg-primary rounded-full my-2"></div><p class="text-center text-white text-sm sm:text-base font-normal font-[&#39;Shabnam&#39;]">${ssrInterpolate(animation.caption)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h2 class="text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal font-[&#39;Impact&#39;] mt-8"> What Makes Animation Studio A Professional Animation Company </h2><p class="text-center text-white text-lg sm:text-xl md:text-2xl font-normal font-[&#39;Impact&#39;] max-w-3xl"> Explore your options now! </p><div class="flex flex-col sm:flex-row items-center justify-start sm:justify-center gap-4">`);
      _push(ssrRenderComponent(_component_LazyLiveChat, null, null, _parent));
      _push(ssrRenderComponent(_component_LazyRequestQuote, null, null, _parent));
      _push(`</div></div></div><!--]-->`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[slug]-service.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-service.vue.mjs.map
