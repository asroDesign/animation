import { reactive, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue-router/dist/vue-router.node.mjs';
import { _ as _sfc_main$1 } from './SecondaryButton.vue.mjs';

const _sfc_main = {
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const form = reactive({
      name: "",
      email: "",
      password: ""
    });
    const errors = ref({});
    const error = ref("");
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center justify-center" }, _attrs))}><div class="bg-white/5 p-8 rounded-lg shadow-lg w-full max-w-md"><h1 class="text-2xl font-bold mb-6 text-center">register</h1><form><div class="mb-4"><label for="name" class="block text-sm font-medium">Full name</label><input id="name"${ssrRenderAttr("value", unref(form).name)} type="text" class="w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" required>`);
      if (errors.value["full_name"]) {
        _push(`<span class="text-red-400 text-start">${ssrInterpolate(errors.value["full_name"][0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-4"><label for="email" class="block text-sm font-medium">Email</label><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" class="w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" required>`);
      if (errors.value["email"]) {
        _push(`<span class="text-red-400 text-start">${ssrInterpolate(errors.value["email"][0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-6"><label for="password" class="block text-sm font-medium">Password</label><input id="password"${ssrRenderAttr("value", unref(form).password)} type="password" class="w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" required>`);
      if (errors.value["password"]) {
        _push(`<span class="text-red-400 text-start">${ssrInterpolate(errors.value["password"][0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (error.value) {
        _push(`<div class="mb-4 text-red-600 text-sm">${error.value ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$1, {
        type: "submit",
        class: "w-full hover:bg-blue-600",
        disabled: loading.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(loading.value ? "Registering..." : "Register")}`);
          } else {
            return [
              createTextVNode(toDisplayString(loading.value ? "Registering..." : "Register"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register.vue.mjs.map
