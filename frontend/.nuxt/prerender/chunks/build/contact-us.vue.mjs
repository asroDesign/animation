import { ref, mergeProps, withCtx, createTextVNode, useSSRContext, defineComponent, defineAsyncComponent, createVNode } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$2 } from './PrimaryButton.vue.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_3 } from './FaqSection.vue.mjs';
import { _ as _sfc_main$3 } from './NuxtImg.vue2.mjs';
import { _ as _sfc_main$4 } from './LiveChat.vue2.mjs';
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
import './apiFetch.mjs';
import './cookie.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/cookie-es/dist/index.mjs';
import './nuxt-icon.vue3.mjs';

const _sfc_main$1 = {
  __name: "ContactForm",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-form-container" }, _attrs))} data-v-eb8ff9d1><form class="contact-form" data-v-eb8ff9d1><div class="form-group" data-v-eb8ff9d1><label for="fullName" class="form-label" data-v-eb8ff9d1>Full Name *</label><input id="fullName"${ssrRenderAttr("value", form.value.name)} type="text" placeholder="Enter your full name" class="form-input" required data-v-eb8ff9d1></div><div class="form-group" data-v-eb8ff9d1><label for="email" class="form-label" data-v-eb8ff9d1>Email Address *</label><input id="email"${ssrRenderAttr("value", form.value.email)} type="email" placeholder="Enter your email" class="form-input" required data-v-eb8ff9d1></div><div class="form-group" data-v-eb8ff9d1><label for="phone" class="form-label" data-v-eb8ff9d1>Phone Number *</label><input id="phone"${ssrRenderAttr("value", form.value.phone)} type="tel" placeholder="Enter your phone number" class="form-input" required data-v-eb8ff9d1></div><div class="form-group" data-v-eb8ff9d1><label for="company" class="form-label" data-v-eb8ff9d1>Company</label><input id="company"${ssrRenderAttr("value", form.value.company)} type="text" placeholder="Enter your company name" class="form-input" data-v-eb8ff9d1></div><div class="form-group col-span-1 md:col-span-2" data-v-eb8ff9d1><label for="message" class="form-label" data-v-eb8ff9d1>Message *</label><textarea id="message" placeholder="Write your message..." class="form-input" rows="4" required data-v-eb8ff9d1>${ssrInterpolate(form.value.message)}</textarea></div><div class="col-span-1 md:col-span-2" data-v-eb8ff9d1>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        type: "submit",
        class: "!w-full !justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Submit Now`);
          } else {
            return [
              createTextVNode("Submit Now")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tools/ContactForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ContactForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-eb8ff9d1"]]);

const __nuxt_component_1_lazy = defineAsyncComponent(() => import('./RequestQuote.vue.mjs').then(function (n) { return n.a; }).then((c) => c.default || c));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact-us",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = _sfc_main$3;
      const _component_LazyRequestQuote = __nuxt_component_1_lazy;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative text-white" }, _attrs))}><div class="relative">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/system/contact_us_mask.png",
        class: "w-full object-cover",
        sizes: "sm:100vw md:100vw lg:100vw",
        loading: "lazy"
      }, null, _parent));
      _push(`<div class="absolute inset-0 flex items-center justify-center top-[16rem]"><div class="container mx-auto px-4 sm:px-6 lg:px-8"><div class="max-w-6xl mx-auto text-center sm:text-left"><div class="flex items-center justify-center sm:justify-start mb-4"><div class="bg-pink-500 h-1 w-12 mr-2"></div><span class="text-sm uppercase">Get In Touch Now</span></div><h2 class="text-2xl sm:text-4xl font-bold mb-6">Contact Us</h2><p class="text-base sm:text-lg mb-8 max-w-4xl mr-auto"> Whether you’re curious about features, pricing, or free trials, you can consult an advisor to create a customized marketing plan that guarantees results. Here’s how to reach out to us. </p><div class="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(_component_LazyRequestQuote, null, null, _parent));
      _push(`</div></div></div></div></div><div class="container mx-auto lg:-mt-[2rem] mt-[14rem] sm:mt-[2rem] px-3"><div class="text-center justify-center grid space-y-4"><div class="divider"><h2 class="sm:text-4xl text-xl"> We’d Love to Hear from You! </h2></div></div><div class="grid sm:grid-cols-2 gap-3"><div class="col-span-1"><div class="sm:w-[617px] h-96 inline-flex flex-col justify-start items-start gap-5 overflow-hidden"><div class="w-10 h-[5px] bg-Primary rounded-[3px]"></div><div class="flex items-center justify-center sm:justify-start mb-4"><div class="bg-pink-500 h-1 w-12 mr-2"></div><span class="text-sm uppercase">Get in touch with us</span></div><div class="self-stretch justify-start text-White text-7xl font-normal font-[&#39;Impact&#39;]">Our Teams<br>Are Here To Help.</div><div class="self-stretch flex flex-col justify-start items-start"><div class="self-stretch justify-start text-White text-3xl font-normal font-[&#39;Impact&#39;]">Call +98 21 0000 0000 or drop us a line for further inquiries.</div><div class="self-stretch text-justify justify-start text-light-shade text-2xl font-normal font-[&#39;Shabnam&#39;]">You’ve got tens of questions, and we’ve tons of answers, so let’s get this conversation started!</div></div></div></div><div class="col-span-1">`);
      _push(ssrRenderComponent(ContactForm, null, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(__nuxt_component_3, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="contact-title flex items-center justify-center gap-2 sm:gap-4 w-full"${_scopeId}><div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[500px] h-1 bg-gray-300 rounded relative"${_scopeId}><div class="absolute top-0 right-0 w-16 sm:w-24 h-1 bg-primary rounded"${_scopeId}></div></div><h2 class="title text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center font-display whitespace-nowrap"${_scopeId}> FAQs About Animation Studio </h2><div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[500px] h-1 bg-gray-300 rounded relative"${_scopeId}><div class="absolute top-0 left-0 w-16 sm:w-24 h-1 bg-primary rounded"${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "contact-title flex items-center justify-center gap-2 sm:gap-4 w-full" }, [
                createVNode("div", { class: "separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[500px] h-1 bg-gray-300 rounded relative" }, [
                  createVNode("div", { class: "absolute top-0 right-0 w-16 sm:w-24 h-1 bg-primary rounded" })
                ]),
                createVNode("h2", { class: "title text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center font-display whitespace-nowrap" }, " FAQs About Animation Studio "),
                createVNode("div", { class: "separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[500px] h-1 bg-gray-300 rounded relative" }, [
                  createVNode("div", { class: "absolute top-0 left-0 w-16 sm:w-24 h-1 bg-primary rounded" })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-us.vue.mjs.map
