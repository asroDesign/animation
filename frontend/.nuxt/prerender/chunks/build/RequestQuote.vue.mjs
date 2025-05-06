import { defineComponent, ref, provide, createElementBlock, useSSRContext } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});

function useModal() {
  const isOpen = ref(false);
  const openModal = () => {
    isOpen.value = true;
    (void 0).body.style.overflow = "hidden";
  };
  const closeModal = () => {
    isOpen.value = false;
    (void 0).body.style.overflow = "";
  };
  return { isOpen, openModal, closeModal };
}

const _sfc_main = {
  __name: "RequestQuote",
  __ssrInlineRender: true,
  setup(__props) {
    useModal();
    ref({
      name: "",
      //authStore.user?.full_name,
      email: "",
      //authStore.user?.email,
      phone: "",
      company: "",
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RequestQuote.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RequestQuote = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4f9c37fd"]]);

const RequestQuote_vue = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: RequestQuote
});

export { RequestQuote as R, __nuxt_component_0 as _, RequestQuote_vue as a };
//# sourceMappingURL=RequestQuote.vue.mjs.map
