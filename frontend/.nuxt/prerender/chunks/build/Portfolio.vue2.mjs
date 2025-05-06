import { _ as __nuxt_component_1 } from './nuxt-link.mjs';
import { defineComponent, computed, ref, watch, unref, withCtx, createVNode } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { u as useMyFetch } from './apiFetch.mjs';
import { _ as _sfc_main$1 } from './nuxt-icon.vue3.mjs';
import { _ as _sfc_main$2 } from './NuxtImg.vue2.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Portfolio",
  __ssrInlineRender: true,
  props: {
    services: {},
    service_id: {}
  },
  setup(__props) {
    const props = __props;
    computed(() => props.service_id);
    const portfolio_selected = ref(void 0);
    const portfolios = ref([]);
    const fetchPortfolio = async (serviceId) => {
      if (!serviceId) return;
      const { data, status } = await useMyFetch(`/portfolio/${serviceId}`, {
        immediate: true
      });
      if (status.value === "success") {
        portfolios.value = data.value;
      }
    };
    watch(portfolio_selected, (newValue) => {
      fetchPortfolio(newValue);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_1;
      const _component_nuxt_icon = _sfc_main$1;
      const _component_nuxt_img = _sfc_main$2;
      _push(`<!--[--><div role="tablist" class="tabs tabs-border group"><!--[-->`);
      ssrRenderList(_ctx.services, (service) => {
        _push(`<a role="tab" class="${ssrRenderClass([{
          "tab-active !text-secondary-shade": unref(portfolio_selected) === service.id
        }, "tab group-has-[a]:text-white"])}">${ssrInterpolate(service == null ? void 0 : service.name)}</a>`);
      });
      _push(`<!--]--></div><div class="grid sm:grid-cols-2 lg:grid-cols-4 sm:grid-rows-2 grid-cols-1 gap-3"><!--[-->`);
      ssrRenderList(unref(portfolios), (item) => {
        _push(`<div class="rounded-xl overflow-auto group relative">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: `/portfolio/${item.slug}`,
          class: "items-center absolute h-full w-full bg-gray-400 transform transition duration-700 ease-in-out hidden backdrop-blur-xl bg-opacity-5 group-hover:flex justify-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_nuxt_icon, {
                name: "iconsax/bulk/search-zoom-in",
                class: "text-3xl flex items-center group-hover:text-white"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_nuxt_icon, {
                  name: "iconsax/bulk/search-zoom-in",
                  class: "text-3xl flex items-center group-hover:text-white"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: (item == null ? void 0 : item.image_url) || "/system/main_mask.png",
          class: "w-full"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
});

export { _sfc_main as _ };
//# sourceMappingURL=Portfolio.vue2.mjs.map
