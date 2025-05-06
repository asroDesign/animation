import { ref, mergeProps, useSSRContext } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const processes = ref([]);
    const currentPage = ref(1);
    const totalPages = ref(1);
    const totalItems = ref(0);
    const isLoading = ref(false);
    const error = ref(null);
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto p-6" }, _attrs))}><h1 class="text-3xl font-bold text-gray-800 mb-6">Your Processes</h1>`);
      if (isLoading.value) {
        _push(`<div class="text-center text-gray-500 py-4"> Loading processes... </div>`);
      } else if (error.value) {
        _push(`<div class="bg-red-100 text-red-800 p-4 rounded-md mb-4">${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<div>`);
        if (processes.value.length === 0) {
          _push(`<div class="text-center text-gray-500 py-4"> No processes available. </div>`);
        } else {
          _push(`<div class="space-y-4"><!--[-->`);
          ssrRenderList(processes.value, (process) => {
            _push(`<div class="border border-gray-100 shadow-md rounded-lg p-6 transition-transform hover:-translate-y-1"><div class="flex justify-between items-center"><div><p class="text-lg"><span class="font-semibold">ID:</span> ${ssrInterpolate(process.id)}</p><p class="text-lg"><span class="font-semibold">Description:</span> ${ssrInterpolate(process.description)}</p><p class="text-lg"><span class="font-semibold">Status:</span><span class="${ssrRenderClass({
              "text-green-600": process.status === "completed",
              "text-yellow-600": process.status === "pending",
              "text-red-600": process.status === "failed"
            })}">${ssrInterpolate(process.status)}</span></p></div><button class="bg-gray-600 text-white hover:bg-gray-700 px-4 py-2 rounded-md font-medium transition-colors"> View Details </button></div></div>`);
          });
          _push(`<!--]--></div>`);
        }
        if (totalPages.value > 1) {
          _push(`<div class="flex justify-between items-center mt-6"><button${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} class="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"> Previous </button><span class="text-gray-700"> Page ${ssrInterpolate(currentPage.value)} of ${ssrInterpolate(totalPages.value)} (${ssrInterpolate(totalItems.value)} processes) </span><button${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} class="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"> Next </button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/process/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue6.mjs.map
