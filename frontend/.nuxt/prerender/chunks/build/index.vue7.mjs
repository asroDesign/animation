import { _ as __nuxt_component_1 } from './nuxt-link.mjs';
import { ref, computed, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$1 } from './PrimaryButton.vue.mjs';
import { u as useMyFetch } from './apiFetch.mjs';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const tabs = ["All", "Ongoing", "Closed"];
    const activeTab = ref("All");
    const { data: conversations } = useMyFetch("tickets", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    const filteredConversations = computed(() => {
      if (activeTab.value === "All") return conversations.value;
      if (activeTab.value === "Ongoing") {
        return conversations.value.filter(
          (c) => c.status === "Pending" || c.status === "Responded"
        );
      }
      return conversations.value.filter((c) => c.status === "Closed");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_1;
      const _component_nuxt_icon = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full rounded-3xl flex flex-col gap-7 overflow-hidden" }, _attrs))} data-v-2516c93f><div class="flex flex-col justify-between sm:flex-row gap-4 items-center" data-v-2516c93f><div role="tablist" class="tabs tabs-border" data-v-2516c93f><!--[-->`);
      ssrRenderList(tabs, (tab) => {
        _push(`<a${ssrRenderAttr("aria-current", activeTab.value === tab ? "true" : "false")} role="tab" class="${ssrRenderClass([{ "tab-active": activeTab.value === tab }, "tab"])}" data-v-2516c93f>${ssrInterpolate(tab)}</a>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/dashboard/support/new" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` New Conversation `);
                } else {
                  return [
                    createTextVNode(" New Conversation ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, null, {
                default: withCtx(() => [
                  createTextVNode(" New Conversation ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col gap-4 w-full" data-v-2516c93f><!--[-->`);
      ssrRenderList(filteredConversations.value, (conversation) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: conversation.id,
          class: ["p-4 rounded-2xl border", {
            "border-amber-300": conversation.status === "Pending",
            "border-emerald-500": conversation.status === "Responded",
            "border-gray-400": conversation.status === "Closed"
          }],
          to: `/dashboard/support/${conversation.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b, _c, _d;
            if (_push2) {
              _push2(`<div class="flex flex-col gap-2" data-v-2516c93f${_scopeId}><div class="flex items-center gap-2 flex-wrap" data-v-2516c93f${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_icon, { name: "iconsax/bulk/message" }, null, _parent2, _scopeId));
              _push2(`<h3 class="text-white text-xl sm:text-2xl font-normal font-[\\&#39;Impact\\&#39;] flex-1" data-v-2516c93f${_scopeId}>${ssrInterpolate(conversation.title)}</h3><span class="${ssrRenderClass([{
                "border-amber-300": conversation.status === "Pending",
                "border-emerald-500": conversation.status === "Responded",
                "border-gray-400": conversation.status === "Closed"
              }, "px-4 py-1 rounded-3xl border text-white text-sm sm:text-base font-medium font-[\\'Shabnam\\'] text-center"])}" data-v-2516c93f${_scopeId}>${ssrInterpolate(conversation.status)}</span></div><p class="text-gray-400 text-sm sm:text-base font-medium font-[\\&#39;Shabnam\\&#39;]" data-v-2516c93f${_scopeId}>${ssrInterpolate(((_a = conversation.lastMessage) == null ? void 0 : _a.message) || conversation.description)}</p><div class="flex items-center gap-2 text-gray-400 text-sm sm:text-base font-medium font-[\\&#39;Shabnam\\&#39;]" data-v-2516c93f${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_icon, { name: "iconsax/bulk/calendar" }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(new Date(((_b = conversation.lastMessage) == null ? void 0 : _b.created_at) || conversation.created_at).toDateString())}</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col gap-2" }, [
                  createVNode("div", { class: "flex items-center gap-2 flex-wrap" }, [
                    createVNode(_component_nuxt_icon, { name: "iconsax/bulk/message" }),
                    createVNode("h3", { class: "text-white text-xl sm:text-2xl font-normal font-[\\'Impact\\'] flex-1" }, toDisplayString(conversation.title), 1),
                    createVNode("span", {
                      class: ["px-4 py-1 rounded-3xl border text-white text-sm sm:text-base font-medium font-[\\'Shabnam\\'] text-center", {
                        "border-amber-300": conversation.status === "Pending",
                        "border-emerald-500": conversation.status === "Responded",
                        "border-gray-400": conversation.status === "Closed"
                      }]
                    }, toDisplayString(conversation.status), 3)
                  ]),
                  createVNode("p", { class: "text-gray-400 text-sm sm:text-base font-medium font-[\\'Shabnam\\']" }, toDisplayString(((_c = conversation.lastMessage) == null ? void 0 : _c.message) || conversation.description), 1),
                  createVNode("div", { class: "flex items-center gap-2 text-gray-400 text-sm sm:text-base font-medium font-[\\'Shabnam\\']" }, [
                    createVNode(_component_nuxt_icon, { name: "iconsax/bulk/calendar" }),
                    createTextVNode(" " + toDisplayString(new Date(((_d = conversation.lastMessage) == null ? void 0 : _d.created_at) || conversation.created_at).toDateString()), 1)
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/support/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2516c93f"]]);

export { index as default };
//# sourceMappingURL=index.vue7.mjs.map
