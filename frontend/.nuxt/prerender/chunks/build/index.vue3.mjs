import { defineComponent, useSSRContext } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="text-2xl font-bold text-gray-800 mb-4">Dashboard Overview</h1><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><div class="bg-blue-50 p-4 rounded-lg"><h2 class="text-lg font-semibold text-blue-800">Request</h2><p class="text-2xl font-bold text-blue-600">0</p></div><div class="bg-green-50 p-4 rounded-lg"><h2 class="text-lg font-semibold text-green-800">Ticket</h2><p class="text-2xl font-bold text-green-600">0</p></div><div class="bg-purple-50 p-4 rounded-lg"><h2 class="text-lg font-semibold text-purple-800">Orders</h2><p class="text-2xl font-bold text-purple-600">0</p></div></div><!--]-->`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue3.mjs.map
