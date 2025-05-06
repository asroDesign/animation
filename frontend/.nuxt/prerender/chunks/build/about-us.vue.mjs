import { defineComponent, withAsyncContext, computed, unref, defineAsyncComponent, withCtx, createTextVNode, createVNode, useSSRContext } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { _ as __nuxt_component_1 } from './nuxt-link.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$3 } from './SecondaryButton.vue.mjs';
import { u as useMyFetch } from './apiFetch.mjs';
import { b as useSeoMeta, d as useRoute, _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$1 } from './NuxtImg.vue2.mjs';
import { _ as _sfc_main$2 } from './LiveChat.vue2.mjs';
import { _ as _sfc_main$4 } from './nuxt-icon.vue3.mjs';
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
import './PrimaryButton.vue.mjs';

const __nuxt_component_1_lazy = defineAsyncComponent(() => import('./RequestQuote.vue.mjs').then(function (n) { return n.a; }).then((c) => c.default || c));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about-us",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, status, error } = ([__temp, __restore] = withAsyncContext(() => useMyFetch("aboutus")), __temp = await __temp, __restore(), __temp);
    const response = computed(() => (data == null ? void 0 : data.value) || {});
    useSeoMeta({
      title: () => {
        var _a;
        return ((_a = response.value) == null ? void 0 : _a.heading) || "About Us";
      },
      ogTitle: () => {
        var _a;
        return ((_a = response.value) == null ? void 0 : _a.meta_title) || "About Us";
      },
      description: () => {
        var _a;
        return ((_a = response.value) == null ? void 0 : _a.meta_desc) || "";
      },
      ogDescription: () => {
        var _a;
        return ((_a = response.value) == null ? void 0 : _a.meta_desc) || "";
      },
      ogType: "article",
      ogLocale: "en",
      ogUrl: useRoute().fullPath
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_LazyRequestQuote = __nuxt_component_1_lazy;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_NuxtIcon = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-24260ebf><div class="relative" data-v-24260ebf>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/system/Hero-Image.png",
        class: "w-full object-cover",
        sizes: "sm:100vw md:100vw lg:100vw",
        loading: "lazy",
        alt: "About Us Hero Image"
      }, null, _parent));
      _push(`<div class="absolute inset-0 flex items-center justify-center sm:top-0 top-[16rem]" data-v-24260ebf><div class="container mx-auto px-4 sm:px-6 lg:px-8" data-v-24260ebf><div class="max-w-6xl mx-auto text-start sm:text-center" data-v-24260ebf><div class="flex items-center justify-start sm:justify-center mb-4" data-v-24260ebf><div class="bg-secondary-shade h-1 w-9 mx-1" data-v-24260ebf></div><span class="text-sm uppercase" data-v-24260ebf>Know More</span></div><h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" data-v-24260ebf>About Us</h2>`);
      if (response.value.sub_heading) {
        _push(`<p class="text-base sm:text-lg mb-8 max-w-4xl mx-auto" data-v-24260ebf>${ssrInterpolate(response.value.sub_heading)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(status) === "pending") {
        _push(`<div class="text-center" data-v-24260ebf>Loading...</div>`);
      } else if (unref(error)) {
        _push(`<div class="text-center text-red-500" data-v-24260ebf>Error: ${ssrInterpolate(unref(error).message)}</div>`);
      } else {
        _push(`<div class="flex flex-col sm:flex-row items-center justify-start sm:justify-center gap-4" data-v-24260ebf>`);
        _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
        _push(ssrRenderComponent(_component_LazyRequestQuote, null, null, _parent));
        _push(`</div>`);
      }
      _push(`</div></div></div></div><div class="container mx-auto px-3" data-v-24260ebf><div class="mt-[14rem] lg:-mt-[12rem] sm:mt-[2rem]" data-v-24260ebf><div class="flex items-center text-xs text-start justify-items-start" data-v-24260ebf><div class="bg-secondary-shade h-1 w-9 mx-1" data-v-24260ebf></div> How We Excel To </div><div class="my-6" data-v-24260ebf><h2 class="sm:text-4xl text-2xl font-bold" data-v-24260ebf> Keep Up with<br data-v-24260ebf>the Revolution </h2></div><div data-v-24260ebf><div class="collapse collapse-plus" data-v-24260ebf><input type="radio" name="my-accordion-3" checked="checked" data-v-24260ebf><div class="collapse-title font-semibold" data-v-24260ebf>How do I create an account?</div><div class="collapse-content text-sm" data-v-24260ebf> Click the &quot;Sign Up&quot; button in the top right corner and follow the registration process. </div></div><div class="collapse collapse-plus" data-v-24260ebf><input type="radio" name="my-accordion-3" data-v-24260ebf><div class="collapse-title font-semibold" data-v-24260ebf>I forgot my password. What should I do?</div><div class="collapse-content text-sm" data-v-24260ebf> Click on &quot;Forgot Password&quot; on the login page and follow the instructions sent to your email. </div></div><div class="collapse collapse-plus" data-v-24260ebf><input type="radio" name="my-accordion-3" data-v-24260ebf><div class="collapse-title font-semibold" data-v-24260ebf>How do I update my profile information?</div><div class="collapse-content text-sm" data-v-24260ebf> Go to &quot;My Account&quot; settings and select &quot;Edit Profile&quot; to make changes. </div></div></div></div><div class="text-center justify-center grid space-y-4" data-v-24260ebf><div class="contact-title flex items-center justify-center gap-2 sm:gap-4 sm:w-[100vw] w-full" data-v-24260ebf><div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[500px] h-1 bg-gray-300 rounded relative" data-v-24260ebf><div class="absolute top-0 right-0 w-16 sm:w-24 h-1 bg-primary rounded" data-v-24260ebf></div></div><h2 class="sm:text-4xl text-xl !leading-8" data-v-24260ebf>Our Promises</h2><div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[500px] h-1 bg-gray-300 rounded relative" data-v-24260ebf><div class="absolute top-0 left-0 w-16 sm:w-24 h-1 bg-primary rounded" data-v-24260ebf></div></div></div><p data-v-24260ebf> As a digital agency, we provide customized services to our prestigious clients to uplift their business efforts. We help<br data-v-24260ebf> businesses, irrespective of size, to expand their audience reach and convert them into long-term clients. Our services<br data-v-24260ebf> include digital marketing, logo design, mobile and game app development, website design and development. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/our-service" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, { class: "!w-fit flex items-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Explore our services `);
                  _push3(ssrRenderComponent(_component_NuxtIcon, {
                    name: "iconsax/linear/arrow-right",
                    class: "text-xl"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" Explore our services "),
                    createVNode(_component_NuxtIcon, {
                      name: "iconsax/linear/arrow-right",
                      class: "text-xl"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3, { class: "!w-fit flex items-center" }, {
                default: withCtx(() => [
                  createTextVNode(" Explore our services "),
                  createVNode(_component_NuxtIcon, {
                    name: "iconsax/linear/arrow-right",
                    class: "text-xl"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid space-y-6 mt-9" data-v-24260ebf><div class="flex items-center text-xs text-start justify-items-start" data-v-24260ebf><div class="bg-secondary-shade h-1 w-9 mx-1" data-v-24260ebf></div> The Real Question </div><div class="my-6" data-v-24260ebf><h2 class="sm:text-4xl text-2xl font-bold" data-v-24260ebf>Why Businesses Need Us?</h2></div><div data-v-24260ebf><p data-v-24260ebf> Digital marketing and technology are evolving at a rapid pace. For many business owners, conquering<br data-v-24260ebf> the online arena is an uphill battle, and they might not be well-equipped for it. That is where we come<br data-v-24260ebf> in. Our unparalleled team of professionals helps brands gain more visibility and credibility. </p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/our-service" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, { class: "!w-fit flex items-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Explore our services `);
                  _push3(ssrRenderComponent(_component_NuxtIcon, {
                    name: "iconsax/linear/arrow-right",
                    class: "text-xl"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" Explore our services "),
                    createVNode(_component_NuxtIcon, {
                      name: "iconsax/linear/arrow-right",
                      class: "text-xl"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3, { class: "!w-fit flex items-center" }, {
                default: withCtx(() => [
                  createTextVNode(" Explore our services "),
                  createVNode(_component_NuxtIcon, {
                    name: "iconsax/linear/arrow-right",
                    class: "text-xl"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="text-center justify-center grid space-y-4" data-v-24260ebf><div class="contact-title flex items-center justify-center gap-2 sm:gap-4 w-full sm:w-[90vw]" data-v-24260ebf><div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[500px] h-1 bg-gray-300 rounded relative" data-v-24260ebf><div class="absolute top-0 right-0 w-16 sm:w-24 h-1 bg-primary rounded" data-v-24260ebf></div></div><h2 class="sm:text-4xl text-2xl" data-v-24260ebf>How can We Help?</h2><div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[500px] h-1 bg-gray-300 rounded relative" data-v-24260ebf><div class="absolute top-0 left-0 w-16 sm:w-24 h-1 bg-primary rounded" data-v-24260ebf></div></div></div><p class="text-center" data-v-24260ebf> As a services consultancy, we promise novel and strategic solutions through our comprehensive technical expertise. Get<br data-v-24260ebf> in touch if you want to increase conversion rates, better web traffic, fan base, advertising efforts, and unlock better<br data-v-24260ebf> opportunities. We ensure our partners that we never settle for the average. We work to make great things more<br data-v-24260ebf> extraordinary. Get your brand built by true experts. </p><div class="text-center" data-v-24260ebf>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-24260ebf"]]);

export { aboutUs as default };
//# sourceMappingURL=about-us.vue.mjs.map
