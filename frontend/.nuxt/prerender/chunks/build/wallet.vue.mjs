import { ref, computed, withCtx, createTextVNode, useSSRContext, withAsyncContext, mergeProps, unref } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseEqual, ssrInterpolate, ssrRenderAttrs } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$3 } from './PrimaryButton.vue.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$4 } from './SecondaryButton.vue.mjs';
import { u as useMyFetch } from './apiFetch.mjs';
import { _ as _sfc_main$5 } from './NuxtImg.vue2.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unctx/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/h3/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/radix3/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/defu/dist/defu.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ufo/dist/index.mjs';
import '../_/renderer.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unhead/dist/server.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unhead/dist/utils.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/destr/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ohash/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/klona/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/pathe/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ipx/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/devalue/index.js';
import './cookie.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/cookie-es/dist/index.mjs';

const _sfc_main$2 = {
  __name: "DepositModal",
  __ssrInlineRender: true,
  props: ["balance"],
  emits: ["close", "update-balance"],
  setup(__props) {
    const formData = ref({
      paymentMethod: "Credit Card",
      amount: null
    });
    const paymentMethods = ["Credit Card", "Cryptocurrency"];
    const errors = ref({});
    computed(() => formData.value.amount || 0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$3, {
        class: "btn",
        onclick: "deposit_modal_3.showModal()"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Deposit`);
          } else {
            return [
              createTextVNode("Deposit")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<dialog id="deposit_modal_3" class="modal" data-v-42c075a6><div class="modal-box bg-transparent" data-v-42c075a6><div class="w-full max-w-md sm:max-w-[567px] bg-[#020617] rounded-[42px] flex flex-col items-center gap-7 p-7 sm:p-10 relative overflow-hidden" data-v-42c075a6><div class="absolute inset-0 bg-gradient-to-b from-pink-600/0 to-violet-700/30 rounded-full blur-[350px]" data-v-42c075a6></div><form method="dialog" data-v-42c075a6><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" data-v-42c075a6><svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-42c075a6><path d="M6 18L18 6M6 6l12 12" data-v-42c075a6></path></svg></button></form><h1 class="text-white text-4xl sm:text-7xl font-normal font-[&#39;Impact&#39;]" data-v-42c075a6>Deposit</h1><p class="text-white text-xl sm:text-3xl font-normal font-[&#39;Impact&#39;]" data-v-42c075a6>Select method to deposit.</p><form class="w-full max-w-[507px] bg-[#14082A] rounded-[32px] p-7 flex flex-col gap-7" data-v-42c075a6><div class="flex gap-6 sm:gap-12" data-v-42c075a6><!--[-->`);
      ssrRenderList(paymentMethods, (method) => {
        _push(`<label class="flex items-center gap-2 cursor-pointer" data-v-42c075a6><div class="relative" data-v-42c075a6><input type="radio"${ssrRenderAttr("value", method)}${ssrIncludeBooleanAttr(ssrLooseEqual(formData.value.paymentMethod, method)) ? " checked" : ""} class="hidden" data-v-42c075a6><div class="${ssrRenderClass([formData.value.paymentMethod === method ? "bg-primary border-primary-shade" : "bg-[#14082A] border-gray-400", "w-6 h-6 rounded-full border"])}" data-v-42c075a6></div>`);
        if (formData.value.paymentMethod === method) {
          _push(`<div class="absolute top-1.5 left-1.5 w-3 h-3 bg-white rounded-full" data-v-42c075a6></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><span class="text-white text-sm sm:text-base font-normal font-[&#39;Shabnam&#39;]" data-v-42c075a6>${ssrInterpolate(method)}</span></label>`);
      });
      _push(`<!--]--></div>`);
      if (errors.value.paymentMethod) {
        _push(`<p class="text-red-500 text-sm" data-v-42c075a6>${ssrInterpolate(errors.value.paymentMethod)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative" data-v-42c075a6><input${ssrRenderAttr("value", formData.value.amount)} type="number" placeholder="Amount" min="0" step="0.01" class="${ssrRenderClass([{ "border-red-500": errors.value.amount }, "w-full h-12 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"])}" data-v-42c075a6>`);
      if (errors.value.amount) {
        _push(`<p class="text-red-500 text-sm mt-1" data-v-42c075a6>${ssrInterpolate(errors.value.amount)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col gap-2 text-gray-400 text-sm sm:text-base font-normal font-[&#39;Shabnam&#39;]" data-v-42c075a6><p data-v-42c075a6>Tax: 0</p><p data-v-42c075a6>Fee: 0</p><p data-v-42c075a6> You will receive: <span class="text-2xl font-normal font-[&#39;Impact&#39;]" data-v-42c075a6>${ssrInterpolate(formData.value.amount || 0)} $</span></p></div><button type="submit" class="w-full h-12 bg-primary rounded-3xl shadow-[0_0_6px_rgba(202,23,92,1)] border border-primary text-white text-base font-medium font-[&#39;Shabnam&#39;] hover:bg-primary/90 transition-colors" data-v-42c075a6> Pay and Deposit </button></form></div></div></dialog><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tools/DepositModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const DepositModal = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-42c075a6"]]);

const _sfc_main$1 = {
  __name: "WithdrawModal",
  __ssrInlineRender: true,
  props: ["balance"],
  emits: ["close", "update-balance"],
  setup(__props) {
    const formData = ref({
      paymentMethod: "Credit Card",
      cardNumber: "",
      amount: null
    });
    const uploadedFile = ref(null);
    const paymentMethods = ["Credit Card", "Cryptocurrency"];
    const errors = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "btn",
        onclick: "withdraw_modal_3.showModal()"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Withdraw`);
          } else {
            return [
              createTextVNode("Withdraw")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<dialog id="withdraw_modal_3" class="modal" data-v-50b18340><div class="modal-box bg-transparent" data-v-50b18340><div class="w-full max-w-md sm:max-w-[567px] bg-[#020617] rounded-[42px] flex flex-col items-center gap-7 p-7 sm:p-10 relative overflow-hidden" data-v-50b18340><div class="absolute inset-0 bg-gradient-to-b from-pink-600/0 to-violet-700/30 rounded-full blur-[350px]" data-v-50b18340></div><form method="dialog" data-v-50b18340><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" data-v-50b18340><svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-50b18340><path d="M6 18L18 6M6 6l12 12" data-v-50b18340></path></svg></button></form><h1 class="text-white text-4xl sm:text-7xl font-normal font-[&#39;Impact&#39;]" data-v-50b18340>Withdraw</h1><p class="text-white text-xl sm:text-3xl font-normal font-[&#39;Impact&#39;]" data-v-50b18340>Select method to withdraw.</p><form class="w-full max-w-[507px] bg-[#14082A] rounded-[32px] p-7 flex flex-col gap-7" data-v-50b18340><div class="flex gap-6 sm:gap-12" data-v-50b18340><!--[-->`);
      ssrRenderList(paymentMethods, (method) => {
        _push(`<label class="flex items-center gap-2 cursor-pointer" data-v-50b18340><div class="relative" data-v-50b18340><input type="radio"${ssrRenderAttr("value", method)}${ssrIncludeBooleanAttr(ssrLooseEqual(formData.value.paymentMethod, method)) ? " checked" : ""} class="hidden" data-v-50b18340><div class="${ssrRenderClass([formData.value.paymentMethod === method ? "bg-primary border-primary-shade" : "bg-[#14082A] border-gray-400", "w-6 h-6 rounded-full border"])}" data-v-50b18340></div>`);
        if (formData.value.paymentMethod === method) {
          _push(`<div class="absolute top-1.5 left-1.5 w-3 h-3 bg-white rounded-full" data-v-50b18340></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><span class="text-white text-sm sm:text-base font-normal font-[&#39;Shabnam&#39;]" data-v-50b18340>${ssrInterpolate(method)}</span></label>`);
      });
      _push(`<!--]--></div>`);
      if (errors.value.paymentMethod) {
        _push(`<p class="text-red-500 text-sm" data-v-50b18340>${ssrInterpolate(errors.value.paymentMethod)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (formData.value.paymentMethod === "Credit Card") {
        _push(`<div class="relative" data-v-50b18340><input${ssrRenderAttr("value", formData.value.cardNumber)} type="text" placeholder="Card Number" class="${ssrRenderClass([{ "border-red-500": errors.value.cardNumber }, "w-full h-12 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"])}" data-v-50b18340>`);
        if (errors.value.cardNumber) {
          _push(`<p class="text-red-500 text-sm mt-1" data-v-50b18340>${ssrInterpolate(errors.value.cardNumber)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative" data-v-50b18340><input${ssrRenderAttr("value", formData.value.amount)} type="number" placeholder="Amount" min="0" step="0.01" class="${ssrRenderClass([{ "border-red-500": errors.value.amount }, "w-full h-12 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"])}" data-v-50b18340>`);
      if (errors.value.amount) {
        _push(`<p class="text-red-500 text-sm mt-1" data-v-50b18340>${ssrInterpolate(errors.value.amount)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><label class="relative w-full h-12" data-v-50b18340><input type="file" class="hidden" data-v-50b18340><span class="absolute inset-0 flex items-center justify-center bg-transparent rounded-3xl border border-primary shadow-[0_0_6px_rgba(202,23,92,1)] text-white text-sm sm:text-base font-medium font-[&#39;Shabnam&#39;] cursor-pointer hover:bg-primary/10 transition-colors" data-v-50b18340><svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-50b18340><path d="M15.5 12h-12m0 0l3.5-3.5M3.5 12l3.5 3.5" stroke-linecap="round" stroke-linejoin="round" data-v-50b18340></path><path d="M21 12h-3.5" stroke-linecap="round" stroke-linejoin="round" data-v-50b18340></path></svg> Upload Verification (Optional) </span></label>`);
      if (uploadedFile.value) {
        _push(`<div class="flex items-center gap-2 bg-gray-800 p-2 rounded-lg" data-v-50b18340><span class="text-white text-sm" data-v-50b18340>${ssrInterpolate(uploadedFile.value.name)}</span><button class="text-red-500 hover:text-red-700" data-v-50b18340><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-50b18340><path d="M6 18L18 6M6 6l12 12" data-v-50b18340></path></svg></button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (errors.value.file) {
        _push(`<p class="text-red-500 text-sm" data-v-50b18340>${ssrInterpolate(errors.value.file)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col gap-2 text-gray-400 text-sm sm:text-base font-normal font-[&#39;Shabnam&#39;]" data-v-50b18340><p data-v-50b18340>Tax: 0</p><p data-v-50b18340>Fee: 0</p><p data-v-50b18340> You will receive: <span class="text-2xl font-normal font-[&#39;Impact&#39;]" data-v-50b18340>${ssrInterpolate(formData.value.amount || 0)} $</span></p></div><button type="submit" class="w-full h-12 bg-primary rounded-3xl shadow-[0_0_6px_rgba(202,23,92,1)] border border-primary text-white text-base font-medium font-[&#39;Shabnam&#39;] hover:bg-primary/90 transition-colors" data-v-50b18340> Pay and Withdraw </button></form></div></div></dialog><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tools/WithdrawModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const WithdrawModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-50b18340"]]);

const _sfc_main = {
  __name: "wallet",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const walletImage = ref("/system/wallet_mask.png");
    const { data: { balance, withdraw_amount, ...transactions } } = ([__temp, __restore] = withAsyncContext(() => useMyFetch("get-wallet", {
      method: "get"
    })), __temp = await __temp, __restore(), __temp);
    const showDepositModal = ref(false);
    const showWithdrawModal = ref(false);
    const updateBalance = (newBalance) => {
      balance.value = newBalance;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full rounded-3xl flex flex-col gap-7 overflow-hidden" }, _attrs))} data-v-13b8c1f3><div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-7 w-full" data-v-13b8c1f3>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: walletImage.value,
        alt: "Wallet Image",
        class: "w-48 h-48 sm:w-72 sm:h-72 rounded-lg object-cover"
      }, null, _parent));
      _push(`<div class="flex flex-col gap-2 text-center sm:text-left" data-v-13b8c1f3><span class="text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-13b8c1f3>Wallet Balance</span><span class="text-white text-4xl sm:text-7xl font-normal font-[&#39;Impact&#39;]" data-v-13b8c1f3>${ssrInterpolate(unref(balance) || 0)} $</span></div><div class="flex-1" data-v-13b8c1f3></div><div class="flex flex-col gap-4 sm:gap-7 w-full sm:w-auto" data-v-13b8c1f3>`);
      if (unref(balance)) {
        _push(ssrRenderComponent(DepositModal, {
          balance: unref(balance),
          onClose: ($event) => showDepositModal.value = false,
          onUpdateBalance: updateBalance
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(withdraw_amount)) {
        _push(ssrRenderComponent(WithdrawModal, {
          balance: unref(withdraw_amount),
          onClose: ($event) => showWithdrawModal.value = false,
          onUpdateBalance: updateBalance
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="w-full" data-v-13b8c1f3><h2 class="text-white text-2xl sm:text-3xl font-normal font-[&#39;Impact&#39;] mb-4" data-v-13b8c1f3> Recent Transactions </h2><div class="hidden sm:block overflow-x-auto" data-v-13b8c1f3><table class="w-full text-left" data-v-13b8c1f3><thead data-v-13b8c1f3><tr class="text-zinc-500 text-sm font-normal font-[&#39;Shabnam&#39;]" data-v-13b8c1f3><th class="py-2 px-4" data-v-13b8c1f3>Amount</th><th class="py-2 px-4" data-v-13b8c1f3>Type</th><th class="py-2 px-4" data-v-13b8c1f3>Date</th><th class="py-2 px-4" data-v-13b8c1f3>Order ID</th><th class="py-2 px-4" data-v-13b8c1f3>Status</th></tr></thead><tbody data-v-13b8c1f3><!--[-->`);
      ssrRenderList(transactions == null ? void 0 : transactions.data.data, (transaction) => {
        _push(`<tr class="border-t border-neutral-700/50" data-v-13b8c1f3><td class="py-2 px-4 text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-13b8c1f3>${ssrInterpolate(transaction.amount)} $ </td><td class="py-2 px-4 text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-13b8c1f3>${ssrInterpolate(transaction.type)}</td><td class="py-2 px-4 text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-13b8c1f3>${ssrInterpolate(transaction.date)}</td><td class="py-2 px-4 text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-13b8c1f3>${ssrInterpolate(transaction.orderId || "-")}</td><td class="${ssrRenderClass([{
          "text-pink-700": transaction.status === "Failed",
          "text-teal-300": transaction.status === "Success",
          "text-amber-300": transaction.status === "Pending"
        }, "py-2 px-4 text-sm font-bold font-['Shabnam']"])}" data-v-13b8c1f3>${ssrInterpolate(transaction.status)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div class="block sm:hidden space-y-4" data-v-13b8c1f3><!--[-->`);
      ssrRenderList(transactions, (transaction) => {
        _push(`<div class="bg-[#14082A] rounded-lg p-4 flex flex-col gap-2 border border-neutral-700/50" data-v-13b8c1f3><div class="flex justify-between" data-v-13b8c1f3><span class="text-zinc-500 text-xs font-normal font-[&#39;Shabnam&#39;]" data-v-13b8c1f3>Amount</span><span class="text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-13b8c1f3>${ssrInterpolate(transaction.amount)} $</span></div><div class="flex justify-between" data-v-13b8c1f3><span class="text-zinc-500 text-xs font-normal font-[&#39;Shabnam&#39;]" data-v-13b8c1f3>Type</span><span class="text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-13b8c1f3>${ssrInterpolate(transaction.type)}</span></div><div class="flex justify-between" data-v-13b8c1f3><span class="text-zinc-500 text-xs font-normal font-[&#39;Shabnam&#39;]" data-v-13b8c1f3>Date</span><span class="text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-13b8c1f3>${ssrInterpolate(transaction.date)}</span></div><div class="flex justify-between" data-v-13b8c1f3><span class="text-zinc-500 text-xs font-normal font-[&#39;Shabnam&#39;]" data-v-13b8c1f3>Order ID</span><span class="text-white text-sm font-bold font-[&#39;Shabnam&#39;]" data-v-13b8c1f3>${ssrInterpolate(transaction.orderId || "-")}</span></div><div class="flex justify-between" data-v-13b8c1f3><span class="text-zinc-500 text-xs font-normal font-[&#39;Shabnam&#39;]" data-v-13b8c1f3>Status</span><span class="${ssrRenderClass([{
          "text-pink-700": transaction.status === "Failed",
          "text-teal-300": transaction.status === "Success",
          "text-amber-300": transaction.status === "Pending"
        }, "text-sm font-bold font-['Shabnam']"])}" data-v-13b8c1f3>${ssrInterpolate(transaction.status)}</span></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/wallet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const wallet = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-13b8c1f3"]]);

export { wallet as default };
//# sourceMappingURL=wallet.vue.mjs.map
