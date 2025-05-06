import { ref, mergeProps, useSSRContext } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$1 } from './NuxtImg.vue2.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unctx/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/h3/dist/index.mjs';
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
  __name: "ProcessStep",
  __ssrInlineRender: true,
  props: {
    process_step: Object
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
          // Trigger when 10% of the element is visible
        });
        observer.observe(el);
      }
    };
    const activeIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex overflow-auto w-[calc(100vw-20%)] space-x-4 !mt-12 my-3" }, _attrs, ssrGetDirectiveProps(_ctx, vObserve, { callback: onVisible })))} data-v-2ea9953c><!--[-->`);
      ssrRenderList(__props.process_step, (item, index) => {
        _push(`<div class="${ssrRenderClass([{
          "active opacity-100 scale-100": index === activeIndex.value,
          "opacity-50 scale-95": index !== activeIndex.value
        }, "grid gap-2 items-center place-items-center group"])}"${ssrRenderAttr("aria-hidden", index !== activeIndex.value)}${ssrRenderAttr("tabindex", index === activeIndex.value ? 0 : -1)} data-v-2ea9953c><div class="rounded-full sm:w-[9rem] sm:h-[9rem] transform transition origin-center group-hover:rotate-180 duration-700 w-[11rem] h-[11rem] p-3 bg-gradient-to-r from-secondary-shade to-[#ed56ab] flex items-center justify-center text-center" data-v-2ea9953c>`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: item.image,
          class: "text-6xl h-[60%]",
          "aria-label": item.heading
        }, null, _parent));
        _push(`</div><div class="text-xl sm:text-2xl font-bold font-[&#39;Shabnam&#39;]" data-v-2ea9953c>${ssrInterpolate(item.heading)}</div><p class="sm:text-md text-xs font-[&#39;Shabnam&#39;]" data-v-2ea9953c>${ssrInterpolate(item.sub_heading)}</p></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/ProcessStep.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProcessStep = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2ea9953c"]]);

export { ProcessStep as default };
//# sourceMappingURL=ProcessStep.vue.mjs.map
