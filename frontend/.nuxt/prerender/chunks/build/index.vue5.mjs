import { _ as __nuxt_component_1 } from './nuxt-link.mjs';
import { withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { u as useMyFetch } from './apiFetch.mjs';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: purchases, status } = ([__temp, __restore] = withAsyncContext(() => useMyFetch("orders", {})), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col gap-7 overflow-hidden" }, _attrs))} data-v-0a58ec7c><div class="w-full" data-v-0a58ec7c><h2 class="text-white text-2xl sm:text-3xl font-normal font-[&#39;Impact&#39;]" data-v-0a58ec7c>Recent Purchases</h2></div><div class="hidden sm:block overflow-x-auto" data-v-0a58ec7c><table class="w-full text-left" data-v-0a58ec7c><thead data-v-0a58ec7c><tr class="text-zinc-500 text-sm font-normal font-[&#39;Shabnam&#39;]" data-v-0a58ec7c><th class="py-2 px-4" data-v-0a58ec7c>Id</th><th class="py-2 px-4" data-v-0a58ec7c>File Name</th><th class="py-2 px-4" data-v-0a58ec7c>Date</th><th class="py-2 px-4" data-v-0a58ec7c>Invoiced Amount</th><th class="py-2 px-4" data-v-0a58ec7c>Status</th></tr></thead><tbody data-v-0a58ec7c><!--[-->`);
      ssrRenderList(unref(purchases), (purchase) => {
        _push(`<tr class="border-t border-neutral-700/50" data-v-0a58ec7c><td class="py-2 px-4 text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-0a58ec7c>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: `/dashboard/orders/${purchase.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(purchase.id)}`);
            } else {
              return [
                createTextVNode(toDisplayString(purchase.id), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td><td class="py-2 px-4 text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-0a58ec7c>${ssrInterpolate(purchase.fileName)}</td><td class="py-2 px-4 text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-0a58ec7c>${ssrInterpolate(purchase.date)}</td><td class="py-2 px-4 text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-0a58ec7c>${ssrInterpolate(purchase.invoicedAmount)}</td><td class="${ssrRenderClass([{
          "text-amber-300": purchase.status === "Pending",
          "text-teal-300": purchase.status === "Delivered",
          "text-pink-700": purchase.status === "Failed"
        }, "py-2 px-4 text-sm font-bold font-['Shabnam']"])}" data-v-0a58ec7c>${ssrInterpolate(purchase.status)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div class="block sm:hidden space-y-4" data-v-0a58ec7c><!--[-->`);
      ssrRenderList(unref(purchases), (purchase) => {
        _push(`<div class="bg-[#14082A] rounded-lg p-4 flex flex-col gap-2 border border-neutral-700/50" data-v-0a58ec7c><div class="flex justify-between" data-v-0a58ec7c><span class="text-zinc-500 text-xs font-normal font-[&#39;Shabnam&#39;]" data-v-0a58ec7c>Id</span><span class="text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-0a58ec7c>${ssrInterpolate(purchase.id)}</span></div><div class="flex justify-between" data-v-0a58ec7c><span class="text-zinc-500 text-xs font-normal font-[&#39;Shabnam&#39;]" data-v-0a58ec7c>File Name</span><span class="text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-0a58ec7c>${ssrInterpolate(purchase.fileName)}</span></div><div class="flex justify-between" data-v-0a58ec7c><span class="text-zinc-500 text-xs font-normal font-[&#39;Shabnam&#39;]" data-v-0a58ec7c>Date</span><span class="text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-0a58ec7c>${ssrInterpolate(purchase.date)}</span></div><div class="flex justify-between" data-v-0a58ec7c><span class="text-zinc-500 text-xs font-normal font-[&#39;Shabnam&#39;]" data-v-0a58ec7c>Invoiced Amount</span><span class="text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-0a58ec7c>${ssrInterpolate(purchase.invoicedAmount)}</span></div><div class="flex justify-between" data-v-0a58ec7c><span class="text-zinc-500 text-xs font-normal font-[&#39;Shabnam&#39;]" data-v-0a58ec7c>Status</span><span class="${ssrRenderClass([{
          "text-amber-300": purchase.status === "Pending",
          "text-teal-300": purchase.status === "Delivered",
          "text-pink-700": purchase.status === "Failed"
        }, "text-sm font-bold font-['Shabnam']"])}" data-v-0a58ec7c>${ssrInterpolate(purchase.status)}</span></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/orders/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0a58ec7c"]]);

export { index as default };
//# sourceMappingURL=index.vue5.mjs.map
