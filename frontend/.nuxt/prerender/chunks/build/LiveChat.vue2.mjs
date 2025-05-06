import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$1 } from './PrimaryButton.vue.mjs';
import { _ as _sfc_main$2 } from './nuxt-icon.vue3.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LiveChat",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_icon = _sfc_main$2;
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ class: "text-nowrap !w-fit" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_icon, {
              name: "iconsax/linear/messages",
              class: "text-xl mx-1"
            }, null, _parent2, _scopeId));
            _push2(` Live Chat `);
          } else {
            return [
              createVNode(_component_nuxt_icon, {
                name: "iconsax/linear/messages",
                class: "text-xl mx-1"
              }),
              createTextVNode(" Live Chat ")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

export { _sfc_main as _ };
//# sourceMappingURL=LiveChat.vue2.mjs.map
