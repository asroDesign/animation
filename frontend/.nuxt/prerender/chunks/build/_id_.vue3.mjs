import { ref, withAsyncContext, resolveComponent, mergeProps, withCtx, createVNode, createBlock, createTextVNode, openBlock, unref, useSSRContext } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue-router/dist/vue-router.node.mjs';
import { _ as _sfc_main$3 } from './PrimaryButton.vue.mjs';
import { _ as _sfc_main$2 } from './SecondaryButton.vue.mjs';
import { _ as _export_sfc, d as useRoute, f as useToast } from './server.mjs';
import { u as useMyFetch } from './apiFetch.mjs';
import { _ as _sfc_main$1 } from './nuxt-icon.vue3.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unctx/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/h3/dist/index.mjs';
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
import './cookie.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/cookie-es/dist/index.mjs';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { addToast } = useToast();
    ref();
    const { data, status } = ([__temp, __restore] = withAsyncContext(() => useMyFetch(`tickets/${useRoute().params.id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })), __temp = await __temp, __restore(), __temp);
    const newMessage = ref("");
    const uploadedFiles = ref([]);
    const errors = ref({});
    const router = useRouter();
    const removeFile = (index) => {
      uploadedFiles.value.splice(index, 1);
    };
    const sendMessage = async () => {
      errors.value = {};
      if (!newMessage.value.trim()) {
        errors.value.message = "Message is required.";
        return;
      }
      const { data: data2, status: status2, error } = await useMyFetch(`tickets/${useRoute().params.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        method: "POST",
        body: {
          message: newMessage.value,
          files: uploadedFiles.value
        }
      });
      if (status2.value == "success") {
        newMessage.value = "";
        uploadedFiles.value = [];
        router.push("/dashboard/support");
        addToast("Ticket replies successfully!", "success", 5e3);
      } else {
        console.log(error.value);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_router_link = resolveComponent("router-link");
      const _component_nuxt_icon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full rounded-3xl flex flex-col gap-7 overflow-hidden" }, _attrs))} data-v-a0d43e4f>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/dashboard/support",
        class: "relative w-52 h-12 flex items-center justify-center bg-transparent rounded-3xl border border-primary shadow-[0_0_6px_rgba(202,23,92,1)] text-white text-base font-medium font-['Shabnam'] hover:bg-primary/10 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flex items-center gap-2" data-v-a0d43e4f${_scopeId}><svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-a0d43e4f${_scopeId}><path d="M9 15L3 9L9 3" stroke-linecap="round" stroke-linejoin="round" data-v-a0d43e4f${_scopeId}></path><path d="M3 9H21" stroke-linecap="round" stroke-linejoin="round" data-v-a0d43e4f${_scopeId}></path></svg> Back to Messages </span>`);
          } else {
            return [
              createVNode("span", { class: "flex items-center gap-2" }, [
                (openBlock(), createBlock("svg", {
                  class: "w-6 h-6",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "1.5"
                }, [
                  createVNode("path", {
                    d: "M9 15L3 9L9 3",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M3 9H21",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ])),
                createTextVNode(" Back to Messages ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="border-l-2 border-teal-300" data-v-a0d43e4f><span class="p-2" data-v-a0d43e4f>${ssrInterpolate((_a = unref(data)) == null ? void 0 : _a.description)}</span></div><div class="flex flex-col gap-4 w-full overflow-y-auto max-h-[600px] sm:max-h-[700px]" data-v-a0d43e4f><!--[-->`);
      ssrRenderList((_b = unref(data)) == null ? void 0 : _b.replies, (message) => {
        _push(`<div class="${ssrRenderClass([message.isSent ? "justify-end" : "justify-start", "flex"])}" data-v-a0d43e4f><div class="${ssrRenderClass([message.isSent ? "flex-row-reverse" : "flex-row", "flex items-end gap-2 max-w-[90%] sm:max-w-[80%]"])}" data-v-a0d43e4f><img${ssrRenderAttr("src", message.avatar || "https://placehold.co/40x40")} alt="User Avatar" class="w-10 h-10 rounded-full" data-v-a0d43e4f><div class="grid gap-0" data-v-a0d43e4f><div class="${ssrRenderClass([message.isSent ? "bg-primary rounded-tr-[10px]" : "bg-[#514078] rounded-bl-[10px]", "p-2.5 rounded-tl-[10px] rounded-br-[10px]"])}" data-v-a0d43e4f><p class="text-white text-sm sm:text-base font-medium font-[&#39;Shabnam&#39;]" data-v-a0d43e4f>${ssrInterpolate(message.message)}</p>`);
        if (message.files) {
          _push(`<div class="mt-2 flex flex-col gap-2" data-v-a0d43e4f><!--[-->`);
          ssrRenderList(message.files, (file, index) => {
            _push(`<a${ssrRenderAttr("href", file.url)} target="_blank" class="text-blue-300 text-sm hover:underline" data-v-a0d43e4f>${ssrInterpolate(file.name)}</a>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="${ssrRenderClass([message.isSent ? "justify-start" : "justify-end", "flex items-center gap-1 text-gray-400 text-xs sm:text-sm font-medium font-['Shabnam'] text-nowrap"])}" data-v-a0d43e4f>`);
        _push(ssrRenderComponent(_component_nuxt_icon, { name: "iconsax/bulk/calendar" }, null, _parent));
        _push(` ${ssrInterpolate(message == null ? void 0 : message.human_date)}</div></div></div></div>`);
      });
      _push(`<!--]--></div><div class="flex flex-col gap-4" data-v-a0d43e4f><div class="relative w-full" data-v-a0d43e4f><textarea placeholder="Write your message ..." class="${ssrRenderClass([{ "border-red-500": errors.value.message }, "w-full h-32 p-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none"])}" data-v-a0d43e4f>${ssrInterpolate(newMessage.value)}</textarea>`);
      if (errors.value.message) {
        _push(`<p class="text-red-500 text-sm mt-1" data-v-a0d43e4f>${ssrInterpolate(errors.value.message)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (uploadedFiles.value.length) {
        _push(`<div class="mt-2 flex flex-wrap gap-2" data-v-a0d43e4f><!--[-->`);
        ssrRenderList(uploadedFiles.value, (file, index) => {
          _push(`<div class="flex items-center gap-2 bg-gray-800 p-2 rounded-lg" data-v-a0d43e4f><span class="text-white text-sm" data-v-a0d43e4f>${ssrInterpolate(file.name)}</span>`);
          _push(ssrRenderComponent(_sfc_main$2, {
            onClick: ($event) => removeFile(index)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-a0d43e4f${_scopeId}><path d="M6 18L18 6M6 6l12 12" data-v-a0d43e4f${_scopeId}></path></svg>`);
              } else {
                return [
                  (openBlock(), createBlock("svg", {
                    class: "w-4 h-4",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2"
                  }, [
                    createVNode("path", { d: "M6 18L18 6M6 6l12 12" })
                  ]))
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col sm:flex-row gap-4 justify-end" data-v-a0d43e4f><label class="relative w-44 h-12" data-v-a0d43e4f><input type="file" multiple class="hidden" data-v-a0d43e4f><span class="absolute inset-0 flex items-center justify-center bg-transparent rounded-3xl border border-primary shadow-[0_0_6px_rgba(202,23,92,1)] text-white text-base font-medium font-[&#39;Shabnam&#39;] cursor-pointer hover:bg-primary/10 transition-colors" data-v-a0d43e4f>`);
      _push(ssrRenderComponent(_component_nuxt_icon, { name: "iconsax/linear/paperclip-2" }, null, _parent));
      _push(` Attachment </span></label>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        onClick: sendMessage,
        class: "justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flex items-center gap-2" data-v-a0d43e4f${_scopeId}> Send Message <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-a0d43e4f${_scopeId}><path d="M5 13L9 17L19 7" stroke-linecap="round" stroke-linejoin="round" data-v-a0d43e4f${_scopeId}></path></svg></span>`);
          } else {
            return [
              createVNode("span", { class: "flex items-center gap-2" }, [
                createTextVNode(" Send Message "),
                (openBlock(), createBlock("svg", {
                  class: "w-6 h-6",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "1.5"
                }, [
                  createVNode("path", {
                    d: "M5 13L9 17L19 7",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/support/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a0d43e4f"]]);

export { _id_ as default };
//# sourceMappingURL=_id_.vue3.mjs.map
