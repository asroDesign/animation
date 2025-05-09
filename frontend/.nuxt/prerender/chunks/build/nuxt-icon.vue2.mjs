import { _ as _sfc_main } from './nuxt-icon.vue3.mjs';
import { useSSRContext } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icons/dist/runtime/components/nuxt-icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=nuxt-icon.vue2.mjs.map
