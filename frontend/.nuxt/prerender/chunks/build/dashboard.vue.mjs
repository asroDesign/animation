import { _ as __nuxt_component_1 } from './nuxt-link.mjs';
import { _ as __nuxt_component_3 } from './FaqSection.vue.mjs';
import { ref, computed, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, unref, useSSRContext } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderAttr } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { MagnifyingGlassIcon } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/@heroicons/vue/24/outline/esm/index.js';
import { _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$1 } from './NuxtImg.vue2.mjs';
import { _ as _sfc_main$2 } from './nuxt-icon.vue3.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ufo/dist/index.mjs';
import './apiFetch.mjs';
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
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const menuItems = [
      { name: "Dashboard", path: "/dashboard".replace(/\/$/, ""), icon: "iconsax/bulk/element-4" },
      { name: "Cart", path: "/dashboard/cart", icon: "iconsax/bulk/bag" },
      { name: "Orders", path: "/dashboard/orders", icon: "iconsax/bulk/receipt-item" },
      { name: "Request Quote", path: "/dashboard/process", icon: "iconsax/bulk/folder-open" },
      { name: "Wallet", path: "/dashboard/wallet", icon: "iconsax/bulk/empty-wallet" },
      { name: "Support", path: "/dashboard/support", icon: "iconsax/bulk/24-support" }
    ];
    const faqs = ref([
      {
        id: 1,
        question: "How do I reset my password?",
        answer: 'Go to the settings page and click on "Reset Password" to receive an email with instructions.'
      },
      {
        id: 2,
        question: "What is the dashboard used for?",
        answer: "The dashboard provides an overview of key metrics like users, revenue, and orders."
      },
      {
        id: 3,
        question: "How can I contact support?",
        answer: "Use the Live Chat feature or email support@dashboard.com."
      }
    ]);
    const searchQuery = ref("");
    computed(
      () => faqs.value.filter(
        (faq) => faq.question.toLowerCase().includes(searchQuery.value.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_1;
      const _component_nuxt_img = _sfc_main$1;
      const _component_nuxt_icon = _sfc_main$2;
      const _component_ToolsFaqSection = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen" }, _attrs))} data-v-197ad70b><div class="flex flex-1 flex-col lg:flex-row w-full" data-v-197ad70b><nav class="fixed bottom-0 w-full shadow-lg bg-shade-1 lg:static lg:w-48 lg:min-h-screen lg:shadow-none z-10" data-v-197ad70b>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "h-9 sm:flex items-center justify-center py-9 hidden"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, { src: "/system/logo.png" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, { src: "/system/logo.png" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-row lg:flex-col sm:sticky sm:top-0 justify-around lg:justify-start items-center p-4 gap-4" data-v-197ad70b><!--[-->`);
      ssrRenderList(menuItems, (item) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: item.name,
          to: item.path,
          exact: "",
          "active-class": "sm:border-l-2 border-b-2 sm:border-b-0 border-secondary-shade text-primary bg-primary/10",
          class: "flex items-center gap-2 p-2 w-full hover:bg-primary hover:text-white rounded-lg transition-colors",
          "aria-current": _ctx.$route.path === item.path ? "page" : void 0
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_nuxt_icon, {
                name: item.icon,
                class: "text-2xl"
              }, null, _parent2, _scopeId));
              _push2(`<span class="hidden lg:block text-sm font-medium font-[&#39;Shabnam&#39;]" data-v-197ad70b${_scopeId}>${ssrInterpolate(item.name)}</span>`);
            } else {
              return [
                createVNode(_component_nuxt_icon, {
                  name: item.icon,
                  class: "text-2xl"
                }, null, 8, ["name"]),
                createVNode("span", { class: "hidden lg:block text-sm font-medium font-['Shabnam']" }, toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></nav><main class="lg:grid-cols-4 grid gap-6 w-full" data-v-197ad70b><div class="navbar shadow-sm col-span-4 sticky top-0 bg-shade-1 z-40 sm:px-[5rem] !w-auto" data-v-197ad70b><div class="flex-1" data-v-197ad70b><a class="btn btn-ghost text-xl" data-v-197ad70b>daisyUI</a></div><div class="flex gap-2" data-v-197ad70b><div class="dropdown dropdown-end" data-v-197ad70b><div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar" data-v-197ad70b><div class="w-10 rounded-full" data-v-197ad70b><img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" data-v-197ad70b></div></div><ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow" data-v-197ad70b><li data-v-197ad70b>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/dashboard/profile",
        class: "justify-between"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Profile `);
          } else {
            return [
              createTextVNode(" Profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-197ad70b><span data-v-197ad70b>Logout</span></li></ul></div></div></div><section class="rounded-xl sm:col-span-3 col-span-4 shadow-md p-6" data-v-197ad70b>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</section><section class="sm:col-span-1 col-span-4 px-2 mt-4" data-v-197ad70b>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/system/dashboard_mask.png",
        alt: "FAQ Banner",
        class: "w-full object-cover rounded-lg mb-4"
      }, null, _parent));
      _push(`<h2 class="text-xl font-bold text-gray-800 mb-4" data-v-197ad70b>Frequently Asked Questions</h2><div class="mb-4 sticky top-9" data-v-197ad70b><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Search FAQs..." class="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" data-v-197ad70b>`);
      _push(ssrRenderComponent(unref(MagnifyingGlassIcon), { class: "absolute left-3 top-2.5 w-5 h-5 text-gray-400" }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ToolsFaqSection, null, null, _parent));
      _push(`</section></main></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-197ad70b"]]);

export { dashboard as default };
//# sourceMappingURL=dashboard.vue.mjs.map
