import { _ as __nuxt_component_1 } from './nuxt-link.mjs';
import { ref, mergeProps, withCtx, createVNode, useSSRContext } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderComponent } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$1 } from './NuxtImg.vue2.mjs';
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

const _sfc_main = {
  __name: "AnimationToolkit",
  __ssrInlineRender: true,
  props: {
    items: Object
  },
  setup(__props) {
    const isVisible = ref(false);
    const onVisible = (entries, observer) => {
      if (entries[0].isIntersecting) {
        isVisible.value = true;
        observer.disconnect();
      }
    };
    const vObserve = {
      mounted(el, binding) {
        const observer = new IntersectionObserver(binding.value.callback, {
          threshold: 0.1
        });
        observer.observe(el);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_1;
      const _component_nuxt_img = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps(_attrs, ssrGetDirectiveProps(_ctx, vObserve, { callback: onVisible })))} data-v-7f2a08f7><div class="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 sm:gap-6 gap-3" data-v-7f2a08f7><!--[-->`);
      ssrRenderList(__props.items, (item, index) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: index,
          "data-tip": item == null ? void 0 : item.sub_heading,
          class: ["bg-white tooltip backdrop-blur-xs p-9 rounded-xl lg:w-[14rem] lg:h-[14rem] w-[12rem] h-[12rem] transition transform ease-in-out duration-700 hover:scale-110", [
            index % 2 === 0 ? "bg-opacity-10" : "bg-opacity-5",
            isVisible.value ? "fade-shake-enter-active" : ""
          ]],
          style: { "--index": index }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_nuxt_img, {
                src: (item == null ? void 0 : item.image) || "/system/Logo.png",
                class: "h-full w-full objet-contain",
                alt: (item == null ? void 0 : item.heading) || "Item image",
                loading: "lazy"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_nuxt_img, {
                  src: (item == null ? void 0 : item.image) || "/system/Logo.png",
                  class: "h-full w-full objet-contain",
                  alt: (item == null ? void 0 : item.heading) || "Item image",
                  loading: "lazy"
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/AnimationToolkit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AnimationToolkit = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7f2a08f7"]]);

export { AnimationToolkit as default };
//# sourceMappingURL=AnimationToolkit.vue.mjs.map
