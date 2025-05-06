import { _ as __nuxt_component_1 } from './nuxt-link.mjs';
import { reactive, withAsyncContext, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, createBlock, openBlock, useSSRContext } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue-router/dist/vue-router.node.mjs';
import { u as useMyFetch } from './apiFetch.mjs';
import { _ as _sfc_main$1 } from './PrimaryButton.vue.mjs';
import { _ as _export_sfc, f as useToast } from './server.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ufo/dist/index.mjs';
import './cookie.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/h3/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/destr/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ohash/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/klona/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unctx/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/radix3/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/defu/dist/defu.mjs';
import '../_/renderer.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unhead/dist/server.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unhead/dist/utils.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/pathe/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ipx/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/devalue/index.js';

const _sfc_main = {
  __name: "profile",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { addToast } = useToast();
    const formData = reactive({
      avatar: "",
      full_name: "",
      email: "",
      mobile: "",
      secondaryEmail: ""
    });
    const passwordForm = reactive({
      old_password: "",
      newPassword: "",
      confirmPassword: ""
    });
    const { data: user } = ([__temp, __restore] = withAsyncContext(() => useMyFetch("user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })), __temp = await __temp, __restore(), __temp);
    if (user) {
      Object.assign(formData, user.value);
    }
    const errors = ref({});
    useRouter();
    const validateForm = () => {
      errors.value = {};
      if (!formData.full_name.trim()) {
        errors.value.fullName = "Full Name is required.";
      }
      if (!formData.email.trim()) {
        errors.value.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.value.email = "Invalid email format.";
      }
      if (formData.mobile && !/^\+?\d{10,15}$/.test(formData.mobile)) {
        errors.value.mobile = "Invalid phone number.";
      }
      if (formData.secondaryEmail && !/\S+@\S+\.\S+/.test(formData.secondaryEmail)) {
        errors.value.secondaryEmail = "Invalid secondary email format.";
      }
      return Object.keys(errors.value).length === 0;
    };
    const handleSubmit = async () => {
      var _a;
      if (!validateForm()) return;
      try {
        console.log("Form Data:", formData);
        const { status, error } = await useMyFetch("update_profile", {
          body: formData,
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        if (status.value == "success") {
          addToast("Changes saved successfully!", "success", 5e3);
        } else {
          errors.value = (_a = error.value.data) == null ? void 0 : _a.errors;
        }
      } catch (error) {
        errors.value.general = "Failed to save changes. Please try again.";
        console.error(error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
      const _component_nuxt_link = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto rounded-3xl flex flex-col gap-7" }, _attrs))} data-v-f175f69a><div class="flex flex-col items-center gap-7 w-full" data-v-f175f69a><div class="flex flex-col items-center gap-3.5" data-v-f175f69a><img${ssrRenderAttr("src", unref(formData).avatar || "https://placehold.co/200x200")} alt="Profile Photo" class="w-48 h-48 rounded-full object-cover" data-v-f175f69a><label class="relative w-56 h-12" data-v-f175f69a><input type="file" accept="image/*" class="hidden" data-v-f175f69a><span class="absolute inset-0 flex items-center justify-center bg-transparent rounded-3xl border border-primary shadow-[0_0_6px_rgba(202,23,92,1)] text-white text-base font-medium font-[&#39;Shabnam&#39;] cursor-pointer hover:bg-primary/10 transition-colors" data-v-f175f69a> Upload Photo </span></label></div><div class="w-full" data-v-f175f69a><h2 class="text-white sm:text-2xl text-xl font-normal font-[&#39;Impact&#39;] mb-4 text-center sm:text-left" data-v-f175f69a> Personal Information </h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-4" data-v-f175f69a><div class="relative" data-v-f175f69a><input${ssrRenderAttr("value", unref(formData).full_name)} type="text" placeholder="Full Name" class="${ssrRenderClass([{ "border-red-500": (_a = errors.value) == null ? void 0 : _a.full_name }, "w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"])}" data-v-f175f69a>`);
      if (errors.value.full_name) {
        _push(`<p class="text-red-500 text-sm mt-1" data-v-f175f69a>${ssrInterpolate(errors.value.full_name)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="relative" data-v-f175f69a><input${ssrRenderAttr("value", unref(formData).email)} type="email" placeholder="Email" class="${ssrRenderClass([{ "border-red-500": (_b = errors.value) == null ? void 0 : _b.email }, "w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"])}" data-v-f175f69a>`);
      if ((_c = errors.value) == null ? void 0 : _c.email) {
        _push(`<p class="text-red-500 text-sm mt-1" data-v-f175f69a>${ssrInterpolate(errors.value.email)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="relative" data-v-f175f69a><input${ssrRenderAttr("value", unref(formData).mobile)} type="tel" placeholder="Phone Number" class="${ssrRenderClass([{ "border-red-500": (_d = errors.value) == null ? void 0 : _d.mobile }, "w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"])}" data-v-f175f69a>`);
      if ((_e = errors.value) == null ? void 0 : _e.mobile) {
        _push(`<p class="text-red-500 text-sm mt-1" data-v-f175f69a>${ssrInterpolate(errors.value.mobile)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="relative" data-v-f175f69a><input${ssrRenderAttr("value", unref(formData).secondaryEmail)} type="email" placeholder="Secondary Email" class="${ssrRenderClass([{ "border-red-500": (_f = errors.value) == null ? void 0 : _f.secondaryEmail }, "w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"])}" data-v-f175f69a>`);
      if ((_g = errors.value) == null ? void 0 : _g.secondaryEmail) {
        _push(`<p class="text-red-500 text-sm mt-1" data-v-f175f69a>${ssrInterpolate(errors.value.secondaryEmail)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="my-3" data-v-f175f69a>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        onClick: handleSubmit,
        type: "submit",
        class: "relative w-56 h-12 flex items-center justify-center bg-primary rounded-3xl shadow-[0_0_6px_rgba(202,23,92,1)] border border-primary text-white text-base font-medium font-['Shabnam'] hover:bg-primary/90 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flex items-center gap-2" data-v-f175f69a${_scopeId}> Save Changes <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-f175f69a${_scopeId}><path d="M5 13L9 17L19 7" stroke-linecap="round" stroke-linejoin="round" data-v-f175f69a${_scopeId}></path></svg></span>`);
          } else {
            return [
              createVNode("span", { class: "flex items-center gap-2" }, [
                createTextVNode(" Save Changes "),
                (openBlock(), createBlock("svg", {
                  class: "w-6 h-6",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "1.5"
                }, [
                  createVNode("path", {
                    d: "M5 13L9 17L19 7",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="w-full" data-v-f175f69a><h2 class="text-white text-2xl font-normal font-[&#39;Impact&#39;] mb-4 text-center sm:text-left" data-v-f175f69a> Password </h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-4" data-v-f175f69a><div class="relative" data-v-f175f69a><input${ssrRenderAttr("value", unref(passwordForm).old_password)} type="password" placeholder="Current Password" class="${ssrRenderClass([{ "border-red-500": (_h = errors.value) == null ? void 0 : _h.old_password }, "w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"])}" data-v-f175f69a>`);
      if ((_i = errors.value) == null ? void 0 : _i.old_password) {
        _push(`<p class="text-red-500 text-sm mt-1" data-v-f175f69a>${ssrInterpolate(errors.value.old_password)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="hidden sm:block" data-v-f175f69a></div><div class="relative" data-v-f175f69a><input${ssrRenderAttr("value", unref(passwordForm).newPassword)} type="password" placeholder="New Password" class="${ssrRenderClass([{ "border-red-500": (_j = errors.value) == null ? void 0 : _j.newPassword }, "w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"])}" data-v-f175f69a>`);
      if ((_k = errors.value) == null ? void 0 : _k.newPassword) {
        _push(`<p class="text-red-500 text-sm mt-1" data-v-f175f69a>${ssrInterpolate(errors.value.newPassword)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="relative" data-v-f175f69a><input${ssrRenderAttr("value", unref(passwordForm).confirmPassword)} type="password" placeholder="Confirm Password" class="${ssrRenderClass([{ "border-red-500": (_l = errors.value) == null ? void 0 : _l.confirmPassword }, "w-full py-2 px-4 bg-[#14082A] border border-[#514078] rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"])}" data-v-f175f69a>`);
      if ((_m = errors.value) == null ? void 0 : _m.confirmPassword) {
        _push(`<p class="text-red-500 text-sm mt-1" data-v-f175f69a>${ssrInterpolate(errors.value.confirmPassword)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="sm:flex grid lg:justify-start gap-4 w-full justify-center sm:justify-end" data-v-f175f69a><div class="row-start-2" data-v-f175f69a>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/dashboard",
        class: "relative w-52 h-12 flex items-center justify-center bg-transparent rounded-3xl border border-primary shadow-[0_0_6px_rgba(202,23,92,1)] text-white text-base font-medium font-['Shabnam'] hover:bg-primary/10 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flex items-center gap-2" data-v-f175f69a${_scopeId}><svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-f175f69a${_scopeId}><path d="M9 15L3 9L9 3" stroke-linecap="round" stroke-linejoin="round" data-v-f175f69a${_scopeId}></path><path d="M3 9H21" stroke-linecap="round" stroke-linejoin="round" data-v-f175f69a${_scopeId}></path></svg> Back to Dashboard </span>`);
          } else {
            return [
              createVNode("span", { class: "flex items-center gap-2" }, [
                (openBlock(), createBlock("svg", {
                  class: "w-6 h-6",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "1.5"
                }, [
                  createVNode("path", {
                    d: "M9 15L3 9L9 3",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M3 9H21",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ])),
                createTextVNode(" Back to Dashboard ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="row-start-1" data-v-f175f69a><button type="submit" class="relative w-56 h-12 flex items-center justify-center bg-primary rounded-3xl shadow-[0_0_6px_rgba(202,23,92,1)] border border-primary text-white text-base font-medium font-[&#39;Shabnam&#39;] hover:bg-primary/90 transition-colors" data-v-f175f69a><span class="flex items-center gap-2" data-v-f175f69a> Save Changes <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-f175f69a><path d="M5 13L9 17L19 7" stroke-linecap="round" stroke-linejoin="round" data-v-f175f69a></path></svg></span></button></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f175f69a"]]);

export { profile as default };
//# sourceMappingURL=profile.vue.mjs.map
