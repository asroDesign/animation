import { defineComponent, mergeProps, defineAsyncComponent, withCtx, createTextVNode, createVNode, useSSRContext } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$3 } from './SecondaryButton.vue.mjs';
import { _ as _sfc_main$1 } from './NuxtImg.vue2.mjs';
import { _ as _sfc_main$2 } from './LiveChat.vue2.mjs';
import { _ as _sfc_main$4 } from './nuxt-icon.vue3.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/defu/dist/defu.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ufo/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/h3/dist/index.mjs';
import './PrimaryButton.vue.mjs';
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

const __nuxt_component_1_lazy = defineAsyncComponent(() => import('./RequestQuote.vue.mjs').then(function (n) { return n.a; }).then((c) => c.default || c));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "our-service",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = _sfc_main$1;
      const _component_LazyRequestQuote = __nuxt_component_1_lazy;
      const _component_nuxt_icon = _sfc_main$4;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative text-white" }, _attrs))} data-v-a90ab97b><div class="relative" data-v-a90ab97b>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/system/our_service_mask.png",
        class: "w-full object-cover",
        sizes: "sm:100vw md:100vw lg:100vw",
        loading: "lazy"
      }, null, _parent));
      _push(`<div class="absolute inset-0 flex items-center justify-center top-[20rem]" data-v-a90ab97b><div class="container mx-auto px-4 sm:px-6 lg:px-8" data-v-a90ab97b><div class="max-w-6xl mx-auto text-start" data-v-a90ab97b><div class="flex items-center justify-start mb-4" data-v-a90ab97b><div class="bg-pink-500 h-1 w-12 mr-2" data-v-a90ab97b></div><span class="text-sm uppercase" data-v-a90ab97b>What We Offer</span></div><h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" data-v-a90ab97b>Our Services</h2><p class="text-base sm:text-lg mb-8 max-w-4xl mr-auto" data-v-a90ab97b> Our prescribed, authenticated, and advanced technological solutions will scour new grounds for expansion. Animation Studio experts are aligned with innovative strategies to empower businesses to accomplish goals and achieve sustainable digital growth. </p><div class="flex flex-col sm:flex-row items-center justify-start gap-4" data-v-a90ab97b>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_component_LazyRequestQuote, null, null, _parent));
      _push(`</div></div></div></div></div><div class="container mx-auto lg:-mt-[4rem] mt-[18rem] sm:mt-[2rem] px-3" data-v-a90ab97b><div class="flex flex-col lg:flex-row items-center gap-8 mb-12" data-v-a90ab97b><div class="flex-1" data-v-a90ab97b><h3 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-[&#39;Impact&#39;]" data-v-a90ab97b>Logo Design</h3><p class="text-base sm:text-lg mb-6 text-justify" data-v-a90ab97b> If your logo is more concealed than evident and more problematic than precise, you might lose your audience. Evoke a sense of connection between a brand and consumer with our creative logo design and symbolize the uniqueness of your brand. </p>`);
      _push(ssrRenderComponent(_sfc_main$3, { class: "flex items-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Explore Our Logo Service `);
            _push2(ssrRenderComponent(_component_nuxt_icon, {
              name: "iconsax/linear/arrow-right",
              class: "text-xl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Explore Our Logo Service "),
              createVNode(_component_nuxt_icon, {
                name: "iconsax/linear/arrow-right",
                class: "text-xl"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        class: "w-full lg:w-1/3 h-64 object-cover rounded-lg",
        src: "/system/our_service/logo_design.png",
        loading: "lazy"
      }, null, _parent));
      _push(`</div><hr class="border-gray-700 my-8" data-v-a90ab97b><div class="flex flex-col lg:flex-row-reverse items-center gap-8 mb-12" data-v-a90ab97b><div class="flex-1" data-v-a90ab97b><h3 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-[&#39;Impact&#39;] text-right lg:text-right" data-v-a90ab97b>Mobile App Development</h3><p class="text-base sm:text-lg mb-6 text-justify lg:text-right" data-v-a90ab97b> To keep up with growing industry demand, businesses are turning to technology through mobile application development. Our specialists will help you change the world with highly functional applications that increase brand visibility, generate ROI, and make you lead the industry. </p>`);
      _push(ssrRenderComponent(_sfc_main$3, { class: "flex items-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Explore Our Mobile App Service `);
            _push2(ssrRenderComponent(_component_nuxt_icon, {
              name: "iconsax/linear/arrow-right",
              class: "text-xl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Explore Our Mobile App Service "),
              createVNode(_component_nuxt_icon, {
                name: "iconsax/linear/arrow-right",
                class: "text-xl"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        class: "w-full lg:w-1/3 h-64 object-cover rounded-lg",
        src: "/system/our_service/mobile_app.png",
        loading: "lazy"
      }, null, _parent));
      _push(`</div><hr class="border-gray-700 my-8" data-v-a90ab97b><div class="flex flex-col lg:flex-row items-center gap-8 mb-12" data-v-a90ab97b><div class="flex-1" data-v-a90ab97b><h3 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-[&#39;Impact&#39;]" data-v-a90ab97b>Digital Marketing</h3><p class="text-base sm:text-lg mb-6 text-justify" data-v-a90ab97b> Are ads not working anymore? Don’t panic; you could just be lacking the correct digital marketing strategy. We’ll help you build a reputable online presence by enabling you to form high-conversion marketing campaigns and ever-lasting relationships with your customers. </p>`);
      _push(ssrRenderComponent(_sfc_main$3, { class: "flex items-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Explore Our Services `);
            _push2(ssrRenderComponent(_component_nuxt_icon, {
              name: "iconsax/linear/arrow-right",
              class: "text-xl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Explore Our Services "),
              createVNode(_component_nuxt_icon, {
                name: "iconsax/linear/arrow-right",
                class: "text-xl"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        class: "w-full lg:w-1/3 h-64 object-cover rounded-lg",
        src: "/system/our_service/digital_marketing.png",
        loading: "lazy"
      }, null, _parent));
      _push(`</div><hr class="border-gray-700 my-8" data-v-a90ab97b><div class="text-center py-12" data-v-a90ab97b><h3 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-[&#39;Impact&#39;]" data-v-a90ab97b>How We Serve</h3><p class="text-base sm:text-lg mb-8 max-w-3xl mx-auto" data-v-a90ab97b> Our digital agency provides innovative solutions that lead to productivity and success. We’re passionate about facilitating your business with our advanced technology solutions. You can focus on your business while we care for your website, applications, and everything else. </p><div class="flex flex-col sm:flex-row items-center justify-center gap-4" data-v-a90ab97b>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_component_LazyRequestQuote, null, null, _parent));
      _push(`</div></div></div></section>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/our-service.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ourService = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a90ab97b"]]);

export { ourService as default };
//# sourceMappingURL=our-service.vue.mjs.map
