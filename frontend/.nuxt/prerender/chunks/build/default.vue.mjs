import { defineComponent, computed, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, defineAsyncComponent, useSSRContext } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderSlot } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { a as useState, c as useRuntimeConfig, _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_1 } from './nuxt-link.mjs';
import { R as RequestQuote } from './RequestQuote.vue.mjs';
import { _ as _sfc_main$2 } from './NuxtImg.vue2.mjs';
import { _ as _sfc_main$3 } from './nuxt-icon.vue3.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    const config = computed(() => useState("config").value);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_nuxt_link = __nuxt_component_1;
      const _component_nuxt_img = _sfc_main$2;
      const _component_nuxt_icon = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex py-5 mx-auto container justify-between absolute top-0 right-0 text-nowrap left-0 w-full z-50 px-3 sm:px-0" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: `${("useRuntimeConfig" in _ctx ? _ctx.useRuntimeConfig : unref(useRuntimeConfig))().public.fileURL}/${(_a2 = unref(config)) == null ? void 0 : _a2.my_logo}`,
              class: "w-[150px] h-auto"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                src: `${("useRuntimeConfig" in _ctx ? _ctx.useRuntimeConfig : unref(useRuntimeConfig))().public.fileURL}/${(_b2 = unref(config)) == null ? void 0 : _b2.my_logo}`,
                class: "w-[150px] h-auto"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-white flex items-center space-x-2"><a class="hidden space-x-1 sm:flex"${ssrRenderAttr("href", `tel:` + ((_a = unref(config)) == null ? void 0 : _a.company_phone))}>`);
      _push(ssrRenderComponent(_component_nuxt_icon, {
        name: "iconsax/linear/call-calling",
        class: "text-xl mx-2 text-main"
      }, null, _parent));
      _push(` ${ssrInterpolate((_b = unref(config)) == null ? void 0 : _b.company_phone)}</a>`);
      _push(ssrRenderComponent(RequestQuote, null, null, _parent));
      _push(`<div class="drawer"><input id="my-drawer" type="checkbox" class="drawer-toggle"><div class="drawer-content"><label for="my-drawer" class="drawer-button">`);
      _push(ssrRenderComponent(_component_nuxt_icon, {
        name: "iconsax/linear/menu",
        class: "text-2xl"
      }, null, _parent));
      _push(`</label></div><div class="drawer-side"><label for="my-drawer" aria-label="close sidebar" class="drawer-overlay">My Services</label><ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4"><!--[-->`);
      ssrRenderList((_c = ("useState" in _ctx ? _ctx.useState : unref(useState))("footer").value) == null ? void 0 : _c.featured_category, (service) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: `/${service.slug}-service`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(service.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(service.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div></div></div>`);
    };
  }
});

const __nuxt_component_1_lazy = defineAsyncComponent(() => import('./footer.vue.mjs').then((c) => c.default || c));
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = _sfc_main$1;
  const _component_LazyFooter = __nuxt_component_1_lazy;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<div class="min-h-screen">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_LazyFooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default.vue.mjs.map
