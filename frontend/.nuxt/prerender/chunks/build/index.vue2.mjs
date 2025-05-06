import { ref, computed, mergeProps, useSSRContext, defineComponent, withAsyncContext, watch, defineAsyncComponent, withCtx, createVNode, toDisplayString } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { _ as __nuxt_component_1 } from './nuxt-link.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, a as useState } from './server.mjs';
import { _ as _sfc_main$2 } from './nuxt-icon.vue3.mjs';
import { u as useMyFetch } from './apiFetch.mjs';
import { _ as _sfc_main$3 } from './NuxtImg.vue2.mjs';
import { _ as _sfc_main$4 } from './LiveChat.vue2.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ufo/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unctx/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/h3/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/radix3/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/defu/dist/defu.mjs';
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
import './cookie.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/cookie-es/dist/index.mjs';
import './PrimaryButton.vue.mjs';

const _sfc_main$1 = {
  __name: "BlogSidebar",
  __ssrInlineRender: true,
  emits: ["search"],
  setup(__props, { emit: __emit }) {
    var _a, _b, _c, _d;
    const SearchNormal = {
      emits: ["click"],
      template: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" @click="$emit('click')">
      <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21 21L16.65 16.65" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
    };
    const searchQuery = ref("");
    const isLoading = ref(false);
    const error = ref(null);
    const footerConfig = computed(() => useState("footer").value);
    const socialLinks = [
      { name: "youtube", href: (_a = footerConfig == null ? void 0 : footerConfig.settings) == null ? void 0 : _a.youtube_url },
      { name: "whatsapp", href: (_b = footerConfig == null ? void 0 : footerConfig.settings) == null ? void 0 : _b.twitter_url },
      { name: "facebook", href: (_c = footerConfig == null ? void 0 : footerConfig.settings) == null ? void 0 : _c.facebook_url },
      { name: "instagram", href: (_d = footerConfig == null ? void 0 : footerConfig.settings) == null ? void 0 : _d.instagram_url }
    ];
    const emit = __emit;
    const handleSearch = async () => {
      isLoading.value = true;
      error.value = null;
      emit("search", searchQuery.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_icon = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form max-w-lg mx-auto p-4 sm:p-6" }, _attrs))} data-v-7634e910><div class="flex flex-col gap-6 pl-4 sm:pl-6 border-l border-[var(--variable-collection-stroke)]" data-v-7634e910><div class="relative flex items-center h-12" data-v-7634e910><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Search ..." class="w-full h-full px-4 bg-[var(--variable-collection-background-shade-1)] border border-[var(--variable-collection-stroke)] rounded-2xl text-[var(--variable-collection-light-shade)] placeholder:opacity-70 focus:outline-none" data-v-7634e910>`);
      _push(ssrRenderComponent(SearchNormal, {
        class: "absolute right-4 w-6 h-6 cursor-pointer",
        onClick: handleSearch
      }, null, _parent));
      _push(`</div>`);
      if (isLoading.value) {
        _push(`<p class="text-white text-sm" data-v-7634e910>Searching...</p>`);
      } else {
        _push(`<!---->`);
      }
      if (error.value) {
        _push(`<p class="text-red-500 text-sm" data-v-7634e910>${ssrInterpolate(error.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h2 class="text-white font-[var(--title-font-family)] text-lg sm:text-xl" data-v-7634e910> Follow us </h2><div class="flex justify-center gap-3 sm:gap-4 flex-wrap" data-v-7634e910><!--[-->`);
      ssrRenderList(socialLinks, ({ name, href }) => {
        _push(`<a${ssrRenderAttr("href", href)} class="text-3xl sm:text-4xl lg:text-5xl" data-v-7634e910>`);
        _push(ssrRenderComponent(_component_nuxt_icon, {
          name: `iconsax/bulk/${name}`
        }, null, _parent));
        _push(`</a>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tools/BlogSidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7634e910"]]);

const __nuxt_component_1_lazy = defineAsyncComponent(() => import('./RequestQuote.vue.mjs').then(function (n) { return n.a; }).then((c) => c.default || c));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const q = ref("");
    const { data, status, execute } = ([__temp, __restore] = withAsyncContext(() => useMyFetch("blogs", {
      query: { search: q },
      immediate: true
      // اجرای خودکار در بارگذاری اولیه
    })), __temp = await __temp, __restore(), __temp);
    const blogs = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.data) || [];
    });
    const handleSearch = (searchTerm) => {
      q.value = searchTerm;
    };
    watch(q, () => {
      execute();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = _sfc_main$3;
      const _component_LazyRequestQuote = __nuxt_component_1_lazy;
      const _component_nuxt_link = __nuxt_component_1;
      const _component_ToolsBlogSidebar = __nuxt_component_3;
      _push(`<!--[--><div class="relative" data-v-82810c92>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/system/blog_mask.png",
        class: "w-full object-cover",
        sizes: "sm:100vw md:100vw lg:100vw",
        format: "webp",
        quality: "80",
        loading: "lazy",
        alt: "Blog banner"
      }, null, _parent));
      _push(`<div class="absolute inset-0 flex items-center justify-center top-[16rem] sm:top-0" data-v-82810c92><div class="container mx-auto px-4 sm:px-6 lg:px-8" data-v-82810c92><div class="max-w-6xl mx-auto text-start sm:text-center" data-v-82810c92><div class="flex items-center justify-start sm:justify-center mb-4 gap-2" data-v-82810c92><div class="bg-secondary-shade h-1 w-9" data-v-82810c92></div><span class="text-sm uppercase" data-v-82810c92>What You Need to Know</span></div><h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight" data-v-82810c92> Get an Expert Team<br data-v-82810c92>for Video Animation </h2><div class="flex flex-col sm:flex-row items-center justify-start sm:justify-center gap-4" data-v-82810c92>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(_component_LazyRequestQuote, null, null, _parent));
      _push(`</div></div></div></div></div><div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8" data-v-82810c92><div class="grid grid-cols-1 lg:grid-cols-3 gap-6" data-v-82810c92><div class="col-span-1 lg:col-span-2" data-v-82810c92><div class="grid grid-cols-1 sm:grid-cols-2 gap-6" data-v-82810c92><!--[-->`);
      ssrRenderList(blogs.value, (blog) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: blog.slug,
          to: `/blog/${blog.slug}`,
          class: "block p-4 sm:p-5 bg-white/5 hover:shadow-xl transform hover:-translate-y-1 transition duration-300 rounded-3xl outline outline-1 outline-white/40"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_nuxt_img, {
                src: blog.image || "https://placehold.co/478x358",
                class: "w-full h-64 sm:h-80 object-cover rounded-3xl",
                format: "webp",
                quality: "80",
                loading: "lazy",
                alt: blog.heading
              }, null, _parent2, _scopeId));
              _push2(`<div class="mt-4" data-v-82810c92${_scopeId}><h3 class="text-xl sm:text-2xl font-bold font-[&#39;Impact&#39;] text-white" data-v-82810c92${_scopeId}>${ssrInterpolate(blog.heading)}</h3><p class="text-sm sm:text-base text-white font-[&#39;Shabnam&#39;] mt-2" data-v-82810c92${_scopeId}>${ssrInterpolate(blog.sub_heading)}</p><p class="text-sm text-light-shade font-[&#39;Shabnam&#39;] mt-4" data-v-82810c92${_scopeId}>${ssrInterpolate(new Date(blog.created_at).toLocaleDateString())}</p></div>`);
            } else {
              return [
                createVNode(_component_nuxt_img, {
                  src: blog.image || "https://placehold.co/478x358",
                  class: "w-full h-64 sm:h-80 object-cover rounded-3xl",
                  format: "webp",
                  quality: "80",
                  loading: "lazy",
                  alt: blog.heading
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode("h3", { class: "text-xl sm:text-2xl font-bold font-['Impact'] text-white" }, toDisplayString(blog.heading), 1),
                  createVNode("p", { class: "text-sm sm:text-base text-white font-['Shabnam'] mt-2" }, toDisplayString(blog.sub_heading), 1),
                  createVNode("p", { class: "text-sm text-light-shade font-['Shabnam'] mt-4" }, toDisplayString(new Date(blog.created_at).toLocaleDateString()), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="col-span-1" data-v-82810c92>`);
      _push(ssrRenderComponent(_component_ToolsBlogSidebar, { onSearch: handleSearch }, null, _parent));
      _push(`</div></div></div><!--]-->`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-82810c92"]]);

export { index as default };
//# sourceMappingURL=index.vue2.mjs.map
