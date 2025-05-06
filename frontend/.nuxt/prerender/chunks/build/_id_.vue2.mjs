import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { useRoute } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue-router/dist/vue-router.node.mjs';
import { _ as _sfc_main$1 } from './SecondaryButton.vue.mjs';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const process = ref({});
    const formResponses = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto p-6" }, _attrs))}><h1 class="text-3xl font-bold mb-4">Process #${ssrInterpolate(process.value.id)}</h1><div class="shadow-md rounded-lg p-6 mb-6"><p class="text-lg mb-2"><span class="font-semibold">Description:</span> ${ssrInterpolate(process.value.description)}</p><p class="text-lg"><span class="font-semibold">Status:</span><span class="${ssrRenderClass({
        "text-green-600": process.value.status === "completed",
        "text-yellow-600": process.value.status === "pending",
        "text-red-600": process.value.status === "failed"
      })}">${ssrInterpolate(process.value.status)}</span></p></div><h2 class="text-2xl font-semibold mt-8 mb-4">Stages</h2><!--[-->`);
      ssrRenderList(process.value.stages, (stage) => {
        _push(`<div class="border border-gray-300 shadow-md rounded-lg p-6 mb-4 transition-transform hover:-translate-y-1"><div class="flex justify-between items-center mb-3"><p class="text-lg"><span class="font-semibold">Type:</span> ${ssrInterpolate(stage.stage_type)}</p><span class="${ssrRenderClass([stage.requires_payment ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-400", "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"])}">${ssrInterpolate(stage.requires_payment ? "Payment Required" : "")}</span></div>`);
        if (stage.stage_type === "form" && stage.typed && !process.value.stages.some((i) => i.requires_payment == 1)) {
          _push(`<div><h3 class="text-xl font-medium text-gray-700 mb-3">Form: ${ssrInterpolate(stage.type.name)}</h3><form class="space-y-4"><!--[-->`);
          ssrRenderList(stage.typed.fields, (field) => {
            var _a;
            _push(`<div class="space-y-1"><label${ssrRenderAttr("for", `field_${field.id}`)} class="block text-sm font-medium">${ssrInterpolate(field.label)} ${ssrInterpolate(field.required ? "*" : "")}</label>`);
            if (field.type === "text") {
              _push(`<input${ssrRenderAttr("value", formResponses.value[field.id])}${ssrRenderAttr("id", `field_${field.id}`)}${ssrIncludeBooleanAttr(field.required) ? " required" : ""} type="text" class="w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary">`);
            } else {
              _push(`<!---->`);
            }
            if (field.type === "textarea") {
              _push(`<textarea${ssrRenderAttr("id", `field_${field.id}`)}${ssrIncludeBooleanAttr(field.required) ? " required" : ""} class="w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" rows="4">${ssrInterpolate(formResponses.value[field.id])}</textarea>`);
            } else {
              _push(`<!---->`);
            }
            if (field.type === "select") {
              _push(`<select${ssrRenderAttr("id", `field_${field.id}`)}${ssrIncludeBooleanAttr(field.required) ? " required" : ""} class="w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(formResponses.value[field.id]) ? ssrLooseContain(formResponses.value[field.id], "") : ssrLooseEqual(formResponses.value[field.id], "")) ? " selected" : ""}>Select an option</option><!--[-->`);
              ssrRenderList((_a = field.options) == null ? void 0 : _a.split(","), (option) => {
                _push(`<option${ssrRenderAttr("value", option)}${ssrIncludeBooleanAttr(Array.isArray(formResponses.value[field.id]) ? ssrLooseContain(formResponses.value[field.id], option) : ssrLooseEqual(formResponses.value[field.id], option)) ? " selected" : ""}>${ssrInterpolate(option)}</option>`);
              });
              _push(`<!--]--></select>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]-->`);
          _push(ssrRenderComponent(_sfc_main$1, { type: "submit" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Submit `);
              } else {
                return [
                  createTextVNode(" Submit ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</form></div>`);
        } else {
          _push(`<!---->`);
        }
        if (stage.stage_type === "invoice" && stage.typed) {
          _push(`<div><p class="text-lg mb-2"><span class="font-semibold">Amount:</span> ${ssrInterpolate(stage.typed.amount)}</p><p class="text-lg mb-2"><span class="font-semibold mr-2">Status:</span><span class="${ssrRenderClass([stage.typed.status === "paid" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800", "inline-flex items-center px-2 py-1 rounded-full text-sm font-medium"])}">${ssrInterpolate(stage.typed.status)}</span></p>`);
          if (stage.typed.status === "pending") {
            _push(`<button class="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md font-medium transition-colors"> Pay Now </button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (stage.stage_type === "file" && stage.typed && !process.value.stages.some((i) => i.requires_payment == 1)) {
          _push(`<div><p class="text-lg"><span class="font-semibold">File:</span><a${ssrRenderAttr("href", `/storage/${stage.typed.path}`)} download class="text-blue-600 hover:underline">${ssrInterpolate(stage.typed.name)}</a></p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/process/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_.vue2.mjs.map
