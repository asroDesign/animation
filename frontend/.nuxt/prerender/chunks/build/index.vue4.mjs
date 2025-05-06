import { ref, withAsyncContext, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { _ as _sfc_main$2 } from './SecondaryButton.vue.mjs';
import { _ as _sfc_main$3 } from './PrimaryButton.vue.mjs';
import { _ as _export_sfc, f as useToast } from './server.mjs';
import { u as useMyFetch } from './apiFetch.mjs';
import { u as useCookie } from './cookie.mjs';
import { _ as _sfc_main$1 } from './nuxt-icon.vue3.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/h3/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ufo/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/destr/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ohash/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/klona/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/defu/dist/defu.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/scule/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unctx/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/pathe/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ipx/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue-router/dist/vue-router.node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unhead/dist/server.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/devalue/index.js';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/cookie-es/dist/index.mjs';

const _imports_0 = publicAssetsURL("/images/paypal.png");

const _imports_1 = publicAssetsURL("/images/stripe.png");

const _imports_2 = publicAssetsURL("/images/razorpay.png");

const _imports_3 = publicAssetsURL("/images/manual_transfer.png");

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b;
    let __temp, __restore;
    const { addToast } = useToast();
    const session = ref({});
    const { data: order, error: checkout_error } = ([__temp, __restore] = withAsyncContext(() => {
      var _a2;
      return useMyFetch(`checkout`, {
        headers: {
          Authorization: `Bearer ${(_a2 = useCookie("CSRF_ASRO_TOKEN")) == null ? void 0 : _a2.value}`
        }
      });
    }), __temp = await __temp, __restore(), __temp);
    if (checkout_error.value) {
      addToast((_b = (_a = checkout_error.value) == null ? void 0 : _a.data) == null ? void 0 : _b.msg, "error", 5e3);
    }
    const gateway = ref("");
    const reference_number = ref("");
    const coupon_code = ref("");
    const showManualTransfer = ref(false);
    watch(gateway, (newVal) => {
      showManualTransfer.value = newVal === "manual";
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C;
      const _component_nuxt_icon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-12" }, _attrs))} data-v-f37a1543><div class="container mx-auto px-4" data-v-f37a1543><div class="mb-8" data-v-f37a1543><div class="p-6 rounded-lg shadow-md" data-v-f37a1543><h2 class="text-2xl font-bold mb-4" data-v-f37a1543>Secure Checkout</h2><div class="relative flex justify-between items-center" data-v-f37a1543><div class="absolute top-[37%] w-[90%] mx-auto left-0 right-0 h-0 border-t-4 border-primary transform -translate-y-1/2" data-v-f37a1543></div><div class="relative z-10 flex flex-col items-center gap-2" data-v-f37a1543><div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center" data-v-f37a1543>`);
      _push(ssrRenderComponent(_component_nuxt_icon, {
        name: "iconsax/bulk/bag",
        class: "text-4xl"
      }, null, _parent));
      _push(`</div><a class="text-primary text-lg font-bold" data-v-f37a1543>Cart Items</a></div><div class="relative z-10 flex flex-col items-center gap-2" data-v-f37a1543><div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center" data-v-f37a1543>`);
      _push(ssrRenderComponent(_component_nuxt_icon, {
        name: "iconsax/bulk/card-pos",
        class: "text-4xl"
      }, null, _parent));
      _push(`</div><span class="text-primary text-lg font-bold" data-v-f37a1543>Payment</span></div><div class="relative z-10 flex flex-col items-center gap-2" data-v-f37a1543><div class="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center" data-v-f37a1543>`);
      _push(ssrRenderComponent(_component_nuxt_icon, {
        name: "iconsax/bulk/receive-square",
        class: "text-4xl text-gray-500"
      }, null, _parent));
      _push(`</div><span class="text-gray-400 text-lg font-bold" data-v-f37a1543>Download</span></div></div></div></div>`);
      if (unref(order)) {
        _push(`<div class="grid grid-cols-1 lg:grid-cols-12 gap-6" data-v-f37a1543><div class="lg:col-span-7" data-v-f37a1543><div class="bg-white/5 p-6 rounded-lg shadow-md" data-v-f37a1543><h2 class="text-2xl font-bold mb-4" data-v-f37a1543>Payment Details</h2>`);
        if ((_a2 = session.value) == null ? void 0 : _a2.error) {
          _push(`<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 flex justify-between items-center" data-v-f37a1543><span data-v-f37a1543>${ssrInterpolate(session.value.error)}</span><button class="text-red-700 hover:text-red-900" data-v-f37a1543>×</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<form id="checkoutform" data-v-f37a1543><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" data-v-f37a1543>`);
        if (((_b2 = unref(order)) == null ? void 0 : _b2.total) > 0) {
          _push(`<div class="space-y-2" data-v-f37a1543>`);
          if ((_d = (_c = unref(order)) == null ? void 0 : _c.setting) == null ? void 0 : _d.is_checked_paypal) {
            _push(`<label class="${ssrRenderClass([{ "!bg-red-200 !border-red-500": gateway.value == "paypal" }, "block bg-white p-2 rounded-lg shadow-md flex items-center justify-between cursor-pointer transition-all duration-200 border"])}" data-v-f37a1543><div class="flex items-center space-x-4" data-v-f37a1543><img${ssrRenderAttr("src", _imports_0)} alt="PayPal" class="h-4" data-v-f37a1543><p class="text-lg font-medium text-gray-800" data-v-f37a1543>PayPal</p></div><input${ssrIncludeBooleanAttr(ssrLooseEqual(gateway.value, "paypal")) ? " checked" : ""} type="radio" name="gateway" value="paypal" class="hidden" data-v-f37a1543></label>`);
          } else {
            _push(`<!---->`);
          }
          if ((_f = (_e = unref(order)) == null ? void 0 : _e.setting) == null ? void 0 : _f.is_checked_stripe) {
            _push(`<label class="${ssrRenderClass([{ "!bg-red-200 !border-red-500": gateway.value == "stripe" }, "block bg-white p-2 rounded-lg shadow-md flex items-center justify-between cursor-pointer transition-all duration-200 border"])}" data-v-f37a1543><div class="flex items-center space-x-4" data-v-f37a1543><img${ssrRenderAttr("src", _imports_1)} alt="Stripe" class="h-4" data-v-f37a1543><p class="text-lg font-medium text-gray-800" data-v-f37a1543>Stripe</p></div><input${ssrIncludeBooleanAttr(ssrLooseEqual(gateway.value, "stripe")) ? " checked" : ""} type="radio" name="gateway" value="stripe" class="hidden" data-v-f37a1543></label>`);
          } else {
            _push(`<!---->`);
          }
          if ((_h = (_g = unref(order)) == null ? void 0 : _g.setting) == null ? void 0 : _h.is_checked_razorpay) {
            _push(`<label class="${ssrRenderClass([{ "!bg-red-200 !border-red-500": gateway.value == "razorpay" }, "block bg-white p-2 rounded-lg shadow-md flex items-center justify-between cursor-pointer transition-all duration-200 border"])}" data-v-f37a1543><div class="flex items-center space-x-4" data-v-f37a1543><img${ssrRenderAttr("src", _imports_2)} alt="Razorpay" class="h-4" data-v-f37a1543><p class="text-lg font-medium text-gray-800" data-v-f37a1543>Razorpay</p></div><input${ssrIncludeBooleanAttr(ssrLooseEqual(gateway.value, "razorpay")) ? " checked" : ""} type="radio" name="gateway" value="razorpay" class="hidden" data-v-f37a1543></label>`);
          } else {
            _push(`<!---->`);
          }
          if ((_j = (_i = unref(order)) == null ? void 0 : _i.setting) == null ? void 0 : _j.is_checked_manual_transfer) {
            _push(`<label class="${ssrRenderClass([{ "!bg-red-200 !border-red-500": gateway.value == "manual" }, "block bg-white p-2 rounded-lg shadow-md flex items-center justify-between cursor-pointer transition-all duration-200 border"])}" data-v-f37a1543><div class="flex items-center space-x-4" data-v-f37a1543><img${ssrRenderAttr("src", _imports_3)} alt="Manual Transfer" class="h-10" data-v-f37a1543><p class="text-lg font-medium text-gray-800" data-v-f37a1543>Manual Transfer</p></div><input${ssrIncludeBooleanAttr(ssrLooseEqual(gateway.value, "manual")) ? " checked" : ""} type="radio" name="gateway" value="manual" class="hidden" data-v-f37a1543></label>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<div class="text-center py-4" data-v-f37a1543><p class="text-gray-600 text-lg" data-v-f37a1543>No Payment Required</p><input type="hidden" name="gateway" value="free" data-v-f37a1543></div>`);
        }
        _push(`</div>`);
        if (showManualTransfer.value) {
          _push(`<div class="mb-4" data-v-f37a1543><div class="prose text-gray-700" data-v-f37a1543>${((_l = (_k = unref(order)) == null ? void 0 : _k.setting) == null ? void 0 : _l.manual_transfer_details) ?? ""}</div><div class="mt-4" data-v-f37a1543><input${ssrRenderAttr("value", reference_number.value)} type="text" placeholder="Enter Reference no." class="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" data-v-f37a1543><label class="text-sm text-gray-600 mt-1" data-v-f37a1543>Enter Reference no.</label></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_sfc_main$2, {
          type: "submit",
          class: "w-full !p-4 transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a3, _b3;
            if (_push2) {
              _push2(`${ssrInterpolate(((_a3 = unref(order)) == null ? void 0 : _a3.total) > 0 ? "Pay and Continue" : "Continue")}`);
            } else {
              return [
                createTextVNode(toDisplayString(((_b3 = unref(order)) == null ? void 0 : _b3.total) > 0 ? "Pay and Continue" : "Continue"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</form></div></div><div class="lg:col-span-5" data-v-f37a1543><div class="bg-white/5 p-6 rounded-lg shadow-md mb-6" data-v-f37a1543><h2 class="text-2xl font-bold mb-4" data-v-f37a1543>Order Details</h2><div class="flex justify-between mb-2" data-v-f37a1543><p class="" data-v-f37a1543>Total Products</p><p class="" data-v-f37a1543>${ssrInterpolate(((_m = unref(order)) == null ? void 0 : _m.total_product) ?? 0)}</p></div><div class="flex justify-between mb-2" data-v-f37a1543><p class="" data-v-f37a1543>Subtotal</p><p class="" data-v-f37a1543>${ssrInterpolate((_n = unref(order)) == null ? void 0 : _n.price_symbol)}${ssrInterpolate(((_o = unref(order)) == null ? void 0 : _o.subtotal) ?? 0)}</p></div><div class="flex justify-between mb-2" data-v-f37a1543><p class="" data-v-f37a1543>Tax</p><p class="" data-v-f37a1543>${ssrInterpolate((_p = unref(order)) == null ? void 0 : _p.price_symbol)}${ssrInterpolate(((_q = unref(order)) == null ? void 0 : _q.tax) ?? 0)}</p></div><div class="flex justify-between mb-2" data-v-f37a1543><p class="" data-v-f37a1543>Discount</p>`);
        if ((_r = unref(order)) == null ? void 0 : _r.discount) {
          _push(`<div class="flex items-center space-x-2" data-v-f37a1543><p data-v-f37a1543>${ssrInterpolate((_s = unref(order)) == null ? void 0 : _s.discount_code)} - ${ssrInterpolate((_t = unref(order)) == null ? void 0 : _t.price_symbol)}${ssrInterpolate(((_u = unref(order)) == null ? void 0 : _u.discount) ?? 0)}</p><button type="submit" class="text-red-600 hover:text-red-800" data-v-f37a1543>`);
          _push(ssrRenderComponent(_component_nuxt_icon, { name: "iconsax/bulk/trash" }, null, _parent));
          _push(`</button></div>`);
        } else {
          _push(`<p data-v-f37a1543>- ${ssrInterpolate((_v = unref(order)) == null ? void 0 : _v.price_symbol)}${ssrInterpolate(((_w = unref(order)) == null ? void 0 : _w.discount) ?? 0)}</p>`);
        }
        _push(`</div><div class="border-t pt-4 mt-4 flex justify-between" data-v-f37a1543><p class="text-gray-200 font-semibold" data-v-f37a1543>Total</p><p class="text-gray-200 font-semibold" data-v-f37a1543>${ssrInterpolate((_x = unref(order)) == null ? void 0 : _x.price_symbol)}${ssrInterpolate((_y = unref(order)) == null ? void 0 : _y.total)}</p></div></div>`);
        if (((_z = unref(order)) == null ? void 0 : _z.total) > 0) {
          _push(`<div class="bg-white/5 p-6 rounded-lg shadow-md" data-v-f37a1543><h2 class="text-xl font-bold mb-4" data-v-f37a1543>Discount Code</h2><form class="flex space-x-2" data-v-f37a1543><div data-v-f37a1543><input${ssrRenderAttr("value", coupon_code.value)} type="text" placeholder="Enter Discount Code" class="w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" data-v-f37a1543></div>`);
          _push(ssrRenderComponent(_sfc_main$3, {
            type: "submit",
            class: "text-white px-4 py-2"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Apply `);
              } else {
                return [
                  createTextVNode(" Apply ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</form>`);
          if (session.value["coupon_error"]) {
            _push(`<span class="text-red-400 my-2" data-v-f37a1543>${ssrInterpolate((_A = session.value) == null ? void 0 : _A.coupon_error)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div else class="bg-red-500/5 p-4 text-center rounded-lg text-red-500" data-v-f37a1543>${ssrInterpolate((_C = (_B = unref(checkout_error)) == null ? void 0 : _B.data) == null ? void 0 : _C.msg)}</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/cart/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f37a1543"]]);

export { index as default };
//# sourceMappingURL=index.vue4.mjs.map
