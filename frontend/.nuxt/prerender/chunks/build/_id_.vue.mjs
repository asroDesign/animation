import { _ as __nuxt_component_1 } from './nuxt-link.mjs';
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$2 } from './SecondaryButton.vue.mjs';
import { _ as _sfc_main$1 } from './PrimaryButton.vue.mjs';
import { _ as _export_sfc, d as useRoute } from './server.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const orderId = ref(useRoute().params.id);
    const orderItems = ref([
      {
        id: "AN2787",
        fileName: "Animation.mp4",
        duration: "30s",
        price: "$54,000"
      },
      {
        id: "RZ8308",
        fileName: "Animation.mp4",
        duration: "13/01/2022",
        // Note: Original data has inconsistency; assuming date as placeholder
        price: "$86,050"
      },
      {
        id: "RZ8765",
        fileName: "Animation.mp4",
        duration: "13/01/2022",
        // Note: Original data has inconsistency
        price: "$4,000"
      }
    ]);
    const cartItems = ref([
      {
        id: 1,
        name: "Cart Item Name",
        image: "https://placehold.co/300x206",
        type: "Video (MP4)",
        duration: "30s",
        price: "$20"
      },
      {
        id: 2,
        name: "Cart Item Name",
        image: "https://placehold.co/300x206",
        type: "Video (MP4)",
        duration: "30s",
        price: "$20"
      },
      {
        id: 3,
        name: "Cart Item Name",
        image: "https://placehold.co/300x206",
        type: "Video (MP4)",
        duration: "30s",
        price: "$20"
      },
      {
        id: 4,
        name: "Cart Item Name",
        image: "https://placehold.co/300x206",
        type: "Video (MP4)",
        duration: "30s",
        price: "$20"
      }
    ]);
    const downloadItem = (id) => {
      console.log(`Downloading item ${id}...`);
      alert(`Item ${id} download initiated!`);
    };
    const removeItem = (id) => {
      console.log(`Removing item ${id}...`);
      cartItems.value = cartItems.value.filter((item) => item.id !== id);
      alert(`Item ${id} removed!`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col gap-7 overflow-hidden" }, _attrs))} data-v-b8f88b39><div class="w-full flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4" data-v-b8f88b39><div class="flex items-center gap-2" data-v-b8f88b39>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/dashboard/orders",
        class: "text-white text-base font-normal font-['Shabnam'] underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Orders`);
          } else {
            return [
              createTextVNode("Orders")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-b8f88b39><path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" data-v-b8f88b39></path></svg><span class="text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-b8f88b39>${ssrInterpolate(orderId.value)}</span></div><div class="flex-1" data-v-b8f88b39></div><div class="flex items-center justify-between sm:justify-end gap-4" data-v-b8f88b39><h2 class="text-white text-2xl sm:text-3xl font-normal font-[&#39;Impact&#39;]" data-v-b8f88b39>Order Summary</h2><span class="text-teal-300 text-xl sm:text-2xl font-normal font-[&#39;Impact&#39;]" data-v-b8f88b39>Successful</span></div></div><div class="w-full" data-v-b8f88b39><div class="hidden sm:block overflow-x-auto" data-v-b8f88b39><table class="w-full text-left" data-v-b8f88b39><thead data-v-b8f88b39><tr class="text-zinc-500 text-sm font-normal font-[&#39;Shabnam&#39;]" data-v-b8f88b39><th class="py-2 px-4" data-v-b8f88b39>Id</th><th class="py-2 px-4" data-v-b8f88b39>File Name</th><th class="py-2 px-4" data-v-b8f88b39>Duration</th><th class="py-2 px-4" data-v-b8f88b39>Price</th></tr></thead><tbody data-v-b8f88b39><!--[-->`);
      ssrRenderList(orderItems.value, (item) => {
        _push(`<tr class="border-t border-neutral-700/50" data-v-b8f88b39><td class="py-2 px-4 text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-b8f88b39>${ssrInterpolate(item.id)}</td><td class="py-2 px-4 text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-b8f88b39>${ssrInterpolate(item.fileName)}</td><td class="py-2 px-4 text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-b8f88b39>${ssrInterpolate(item.duration)}</td><td class="py-2 px-4 text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-b8f88b39>${ssrInterpolate(item.price)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div class="block sm:hidden space-y-4" data-v-b8f88b39><!--[-->`);
      ssrRenderList(orderItems.value, (item) => {
        _push(`<div class="bg-[#14082A] rounded-lg p-4 flex flex-col gap-2 border border-neutral-700/50" data-v-b8f88b39><div class="flex justify-between" data-v-b8f88b39><span class="text-zinc-500 text-xs font-normal font-[&#39;Shabnam&#39;]" data-v-b8f88b39>Id</span><span class="text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-b8f88b39>${ssrInterpolate(item.id)}</span></div><div class="flex justify-between" data-v-b8f88b39><span class="text-zinc-500 text-xs font-normal font-[&#39;Shabnam&#39;]" data-v-b8f88b39>File Name</span><span class="text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-b8f88b39>${ssrInterpolate(item.fileName)}</span></div><div class="flex justify-between" data-v-b8f88b39><span class="text-zinc-500 text-xs font-normal font-[&#39;Shabnam&#39;]" data-v-b8f88b39>Duration</span><span class="text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-b8f88b39>${ssrInterpolate(item.duration)}</span></div><div class="flex justify-between" data-v-b8f88b39><span class="text-zinc-500 text-xs font-normal font-[&#39;Shabnam&#39;]" data-v-b8f88b39>Price</span><span class="text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-b8f88b39>${ssrInterpolate(item.price)}</span></div></div>`);
      });
      _push(`<!--]--></div></div><div class="w-full" data-v-b8f88b39><h2 class="text-white text-2xl sm:text-3xl font-normal font-[&#39;Impact&#39;] mb-4" data-v-b8f88b39>List of Items</h2><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7" data-v-b8f88b39><!--[-->`);
      ssrRenderList(cartItems.value, (item) => {
        _push(`<div class="bg-[#1e1e2e] rounded-[20px] p-3.5 flex flex-col col-span-1 gap-2.5" data-v-b8f88b39><img${ssrRenderAttr("src", item.image)} alt="Cart Item" class="w-full h-40 sm:h-52 rounded-2xl object-cover" data-v-b8f88b39><h3 class="text-white text-xl sm:text-2xl font-normal font-[&#39;Impact&#39;]" data-v-b8f88b39>${ssrInterpolate(item.name)}</h3><div class="flex flex-col gap-1 text-sm sm:text-base" data-v-b8f88b39><div class="flex justify-between" data-v-b8f88b39><span class="text-zinc-400 font-normal font-[&#39;Shabnam&#39;]" data-v-b8f88b39>Type:</span><span class="text-white font-medium font-[&#39;Shabnam&#39;]" data-v-b8f88b39>${ssrInterpolate(item.type)}</span></div><div class="flex justify-between" data-v-b8f88b39><span class="text-zinc-400 font-normal font-[&#39;Shabnam&#39;]" data-v-b8f88b39>Duration:</span><span class="text-white font-medium font-[&#39;Shabnam&#39;]" data-v-b8f88b39>${ssrInterpolate(item.duration)}</span></div><div class="flex justify-between" data-v-b8f88b39><span class="text-zinc-400 font-normal font-[&#39;Shabnam&#39;]" data-v-b8f88b39>Price:</span><span class="text-white font-medium font-[&#39;Shabnam&#39;]" data-v-b8f88b39>${ssrInterpolate(item.price)}</span></div></div><div class="flex gap-2" data-v-b8f88b39>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          class: "text-xs !px-3",
          onClick: ($event) => downloadItem(item.id)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Download Item `);
            } else {
              return [
                createTextVNode(" Download Item ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$2, {
          class: "text-xs !px-3",
          onClick: ($event) => removeItem(item.id)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Remove Item `);
            } else {
              return [
                createTextVNode(" Remove Item ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/orders/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b8f88b39"]]);

export { _id_ as default };
//# sourceMappingURL=_id_.vue.mjs.map
