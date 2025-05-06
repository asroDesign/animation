import { _ as __nuxt_component_1 } from './nuxt-link.mjs';
import { withAsyncContext, mergeProps, useSSRContext, defineComponent, unref, withCtx, createTextVNode, toDisplayString } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_0 } from './RequestQuote.vue.mjs';
import { u as useMyFetch } from './apiFetch.mjs';
import { _ as _export_sfc, a as useState, p as callOnce } from './server.mjs';
import { _ as _sfc_main$2 } from './nuxt-icon.vue3.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ufo/dist/index.mjs';
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

const _sfc_main$1 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: testimonials } = ([__temp, __restore] = withAsyncContext(() => useMyFetch("testimonials")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-12" }, _attrs))} data-v-be3bf411><div class="contact-title flex items-center justify-center gap-2 sm:gap-4 w-full" data-v-be3bf411><div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[500px] h-1 bg-gray-300 rounded relative" data-v-be3bf411><div class="absolute top-0 right-0 w-16 sm:w-24 h-1 bg-primary rounded" data-v-be3bf411></div></div><h2 class="sm:text-5xl text-2xl font-normal font-[&#39;Impact&#39;]" data-v-be3bf411> Our valuable success clients story </h2><div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[500px] h-1 bg-gray-300 rounded relative" data-v-be3bf411><div class="absolute top-0 left-0 w-16 sm:w-24 h-1 bg-primary rounded" data-v-be3bf411></div></div></div><div class="w-full p-4 overflow-hidden" data-v-be3bf411>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tools/Testimonials.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Testimonials = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-be3bf411"]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "footer",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const QuickLinks = [
      { title: "Home", link: "/" },
      { title: "About Us", link: "/about-us" },
      { title: "Our Services", link: "/our-service" },
      { title: "Our Work", link: "/our-work" },
      { title: "Process", link: "/process" },
      { title: "Blogs", link: "/blog" },
      { title: "Contact Us", link: "/contact-us" }
    ];
    const footerConfig = useState("footer");
    if (!(footerConfig == null ? void 0 : footerConfig.value)) {
      useMyFetch("footer", {
        lazy: true
      }).then((res) => {
        footerConfig.value = res.data;
      }).catch((err) => {
        console.log(err);
      });
    }
    [__temp, __restore] = withAsyncContext(() => callOnce(async () => {
    }, { mode: "render" }, "$GBhM-Oxlsy")), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
      const _component_nuxt_icon = _sfc_main$2;
      const _component_nuxt_link = __nuxt_component_1;
      _push(`<!--[--><div class="container mx-auto mt-16 px-3">`);
      _push(ssrRenderComponent(Testimonials, null, null, _parent));
      _push(`<div class="contact-title flex items-center justify-center gap-2 sm:gap-4 w-full"><div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[600px] h-1 bg-gray-300 rounded relative"><div class="absolute top-0 right-0 w-16 sm:w-24 h-1 bg-primary rounded"></div></div><h2 class="sm:text-5xl text-2xl my-6 font-normal font-[&#39;Impact&#39;]"> Let’s Connect </h2><div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[600px] h-1 bg-gray-300 rounded relative"><div class="absolute top-0 left-0 w-16 sm:w-24 h-1 bg-primary rounded"></div></div></div><div class="text-center flex items-center justify-center space-x-3"><a${ssrRenderAttr("href", (_b = (_a = unref(footerConfig)) == null ? void 0 : _a.settings) == null ? void 0 : _b.youtube_url)} rel="nofollow">`);
      _push(ssrRenderComponent(_component_nuxt_icon, {
        name: "iconsax/bulk/youtube",
        class: "text-5xl"
      }, null, _parent));
      _push(`</a><a${ssrRenderAttr("href", (_d = (_c = unref(footerConfig)) == null ? void 0 : _c.settings) == null ? void 0 : _d.twitter_url)} rel="nofollow">`);
      _push(ssrRenderComponent(_component_nuxt_icon, {
        name: "iconsax/bulk/twitter",
        class: "text-5xl"
      }, null, _parent));
      _push(`</a><a${ssrRenderAttr("href", (_f = (_e = unref(footerConfig)) == null ? void 0 : _e.settings) == null ? void 0 : _f.facebook_url)} rel="nofollow">`);
      _push(ssrRenderComponent(_component_nuxt_icon, {
        name: "iconsax/bulk/facebook",
        class: "text-5xl"
      }, null, _parent));
      _push(`</a><a${ssrRenderAttr("href", (_h = (_g = unref(footerConfig)) == null ? void 0 : _g.settings) == null ? void 0 : _h.instagram_url)} rel="nofollow">`);
      _push(ssrRenderComponent(_component_nuxt_icon, {
        name: "iconsax/bulk/instagram",
        class: "text-5xl"
      }, null, _parent));
      _push(`</a></div><div class="sm:grid-cols-9 grid-cols-4 grid gap-4"><div class="col-span-2"><div class="sm:text-2xl text-xl font-bold my-3">Quick Links</div><ul class="space-y-3 grid"><!--[-->`);
      ssrRenderList(QuickLinks, (link) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: link.link
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="col-span-2"><div class="sm:text-2xl text-xl font-bold my-3">Services</div><ul class="space-y-3 grid"><!--[-->`);
      ssrRenderList((_i = unref(footerConfig)) == null ? void 0 : _i.featured_category, (link) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: `/${link.slug}-service`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="col-span-2"><div class="sm:text-2xl text-xl font-bold my-3">Animations</div><ul class="space-y-3 grid"><!--[-->`);
      ssrRenderList((_j = unref(footerConfig)) == null ? void 0 : _j.animation_category, (link) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: `/${link.slug}-service`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="col-span-3"><div class="sm:text-2xl text-xl font-bold my-3">Contact Info</div><ul class="space-y-3 grid"><li class="flex items-center space-x-2">`);
      _push(ssrRenderComponent(_component_nuxt_icon, {
        name: "iconsax/bulk/call-calling",
        class: "text-xl animate-ping duration-700 mr-2"
      }, null, _parent));
      _push(` ${ssrInterpolate((_l = (_k = unref(footerConfig)) == null ? void 0 : _k.settings) == null ? void 0 : _l.company_phone)}</li><li class="flex items-center space-x-2">`);
      _push(ssrRenderComponent(_component_nuxt_icon, {
        name: "iconsax/bulk/location",
        class: "text-xl animate-bounce mr-2"
      }, null, _parent));
      _push(` ${ssrInterpolate((_n = (_m = unref(footerConfig)) == null ? void 0 : _m.settings) == null ? void 0 : _n.company_adderss)}</li><li class="flex items-center space-x-2">`);
      _push(ssrRenderComponent(_component_nuxt_icon, {
        name: "iconsax/bulk/messages",
        class: "text-xl animate-ping duration-700 mr-2"
      }, null, _parent));
      _push(` ${ssrInterpolate((_p = (_o = unref(footerConfig)) == null ? void 0 : _o.settings) == null ? void 0 : _p.company_phone)}</li><li class="flex items-center space-x-2">`);
      _push(ssrRenderComponent(_component_nuxt_icon, {
        name: "iconsax/bulk/sms",
        class: "text-xl mr-2"
      }, null, _parent));
      _push(` ${ssrInterpolate((_r = (_q = unref(footerConfig)) == null ? void 0 : _q.settings) == null ? void 0 : _r.company_email)}</li></ul></div></div></div><div class="text-white bg-[#020617] text-center py-4"> All Rights Reserved - Animation studios inc. </div><!--]-->`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=footer.vue.mjs.map
