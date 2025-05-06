import { withAsyncContext, ref, mergeProps, unref, useSSRContext } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { u as useMyFetch } from './apiFetch.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "FaqSection",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: faqItems, status } = ([__temp, __restore] = withAsyncContext(() => useMyFetch("faq-get")), __temp = await __temp, __restore(), __temp);
    const openItems = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "faq-section max-w-6xl mx-auto flex flex-col gap-6" }, _attrs))} data-v-3dc862e9>`);
      ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      _push(`<!--[-->`);
      ssrRenderList(unref(faqItems), (item, index) => {
        _push(`<div class="${ssrRenderClass([{ "faq-item-open": openItems.value[index] }, "faq-item bg-white/5 border border-white/40 rounded-2xl p-4 cursor-pointer"])}" data-v-3dc862e9><div class="faq-question flex justify-between items-center" data-v-3dc862e9><p class="question-text text-white text-md sm:text-lg md:text-xl font-medium font-title flex-1" data-v-3dc862e9>${ssrInterpolate(item.title)}</p>`);
        if (!openItems.value[index]) {
          _push(`<svg class="arrow-icon w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-3dc862e9><polyline points="6 9 12 15 18 9" data-v-3dc862e9></polyline></svg>`);
        } else {
          _push(`<svg class="arrow-icon w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-3dc862e9><polyline points="18 15 12 9 6 15" data-v-3dc862e9></polyline></svg>`);
        }
        _push(`</div>`);
        if (openItems.value[index]) {
          _push(`<p class="answer-text text-white text-sm sm:text-base font-normal font-body mt-4" data-v-3dc862e9>${ssrInterpolate(item.caption)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tools/FaqSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3dc862e9"]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=FaqSection.vue.mjs.map
