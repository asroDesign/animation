import { _ as __nuxt_component_1 } from './nuxt-link.mjs';
import { reactive, ref, mergeProps, withCtx, createVNode, createBlock, createTextVNode, openBlock, unref, useSSRContext } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue-router/dist/vue-router.node.mjs';
import { _ as _sfc_main$1 } from './SecondaryButton.vue.mjs';
import { _ as _sfc_main$3 } from './PrimaryButton.vue.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$2 } from './nuxt-icon.vue3.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ufo/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unctx/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/h3/dist/index.mjs';
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
  __name: "new",
  __ssrInlineRender: true,
  setup(__props) {
    const formData = reactive({
      subject: "",
      message: ""
    });
    const uploadedFiles = ref([]);
    const errors = ref({});
    useRouter();
    const removeFile = (index) => {
      uploadedFiles.value.splice(index, 1);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_1;
      const _component_nuxt_icon = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full rounded-3xl flex flex-col gap-7 overflow-hidden" }, _attrs))} data-v-6555ea59>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/dashboard/support",
        class: "relative w-52 h-12 flex items-center justify-center bg-transparent rounded-3xl border border-primary shadow-[0_0_6px_rgba(202,23,92,1)] text-white text-base font-medium font-['Shabnam'] hover:bg-primary/10 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flex items-center gap-2" data-v-6555ea59${_scopeId}><svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-6555ea59${_scopeId}><path d="M9 15L3 9L9 3" stroke-linecap="round" stroke-linejoin="round" data-v-6555ea59${_scopeId}></path><path d="M3 9H21" stroke-linecap="round" stroke-linejoin="round" data-v-6555ea59${_scopeId}></path></svg> Back to Messages </span>`);
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
      _push(`<form class="flex flex-col gap-7 w-full" data-v-6555ea59><div class="relative" data-v-6555ea59><input${ssrRenderAttr("value", unref(formData).subject)} type="text" placeholder="Conversation Subject" class="${ssrRenderClass([{ "border-red-500": errors.value.subject }, "w-full h-12 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"])}" data-v-6555ea59>`);
      if (errors.value.subject) {
        _push(`<p class="text-red-500 text-sm mt-1" data-v-6555ea59>${ssrInterpolate(errors.value.subject)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="relative flex-1" data-v-6555ea59><textarea placeholder="Write your message ..." class="${ssrRenderClass([{ "border-red-500": errors.value.message }, "w-full h-64 sm:h-96 p-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none"])}" data-v-6555ea59>${ssrInterpolate(unref(formData).message)}</textarea>`);
      if (errors.value.message) {
        _push(`<p class="text-red-500 text-sm mt-1" data-v-6555ea59>${ssrInterpolate(errors.value.message)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (uploadedFiles.value.length) {
        _push(`<div class="mt-2 flex flex-wrap gap-2" data-v-6555ea59><!--[-->`);
        ssrRenderList(uploadedFiles.value, (file, index) => {
          _push(`<div class="flex items-center gap-2 bg-gray-800 p-2 rounded-lg" data-v-6555ea59><span class="text-white text-sm" data-v-6555ea59>${ssrInterpolate(file.name)}</span>`);
          _push(ssrRenderComponent(_sfc_main$1, {
            onClick: ($event) => removeFile(index)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-6555ea59${_scopeId}><path d="M6 18L18 6M6 6l12 12" data-v-6555ea59${_scopeId}></path></svg>`);
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
      _push(`</div><div class="flex flex-col sm:flex-row gap-4 justify-end" data-v-6555ea59><label class="relative w-44 h-12" data-v-6555ea59><input type="file" multiple class="hidden" data-v-6555ea59><span class="absolute inset-0 flex items-center justify-center bg-transparent rounded-3xl border border-primary shadow-[0_0_6px_rgba(202,23,92,1)] text-white text-base font-medium font-[&#39;Shabnam&#39;] cursor-pointer hover:bg-primary/10 transition-colors" data-v-6555ea59>`);
      _push(ssrRenderComponent(_component_nuxt_icon, { name: "iconsax/linear/paperclip-2" }, null, _parent));
      _push(` Attachment </span></label>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        type: "submit",
        class: "justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flex items-center gap-2" data-v-6555ea59${_scopeId}> Send Message <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-6555ea59${_scopeId}><path d="M5 13L9 17L19 7" stroke-linecap="round" stroke-linejoin="round" data-v-6555ea59${_scopeId}></path></svg></span>`);
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
      _push(`</div></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/support/new.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _new = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6555ea59"]]);

export { _new as default };
//# sourceMappingURL=new.vue.mjs.map
