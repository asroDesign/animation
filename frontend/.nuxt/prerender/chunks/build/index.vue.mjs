import { ref, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext, defineAsyncComponent, defineComponent, computed, withAsyncContext, unref, createVNode } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { _ as __nuxt_component_1 } from './nuxt-link.mjs';
import { _ as _export_sfc, a as useState, b as useSeoMeta, c as useRuntimeConfig, d as useRoute } from './server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$5 } from './SecondaryButton.vue.mjs';
import { u as useMyFetch } from './apiFetch.mjs';
import { useIntersectionObserver } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/@vueuse/core/index.mjs';
import { _ as _sfc_main$3 } from './NuxtImg.vue2.mjs';
import { _ as _sfc_main$4 } from './LiveChat.vue2.mjs';
import { _ as _sfc_main$6 } from './nuxt-icon.vue3.mjs';
import { _ as _sfc_main$7 } from './Portfolio.vue2.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/ufo/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unctx/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/h3/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/radix3/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/defu/dist/defu.mjs';
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
import './PrimaryButton.vue.mjs';

const _sfc_main$2 = {
  __name: "ServicesStepDesign",
  __ssrInlineRender: true,
  props: {
    data: Object
  },
  setup(__props) {
    const props = __props;
    const dots = ref(Object.keys((props == null ? void 0 : props.data) || {}));
    const lines = ref(Object.keys((props == null ? void 0 : props.data) || {}));
    const activeStep = ref(1);
    const getStepPosition = (index) => {
      const positions = [
        "left-[41px] top-0",
        "left-[40px] top-[64px]",
        "left-0 top-[128px]",
        "left-[60px] top-[192px]",
        "left-[13px] top-[256px]"
      ];
      return positions[index];
    };
    const getDotPosition = (index) => {
      const positions = [
        "left-[227px] top-[14px]",
        "left-[227px] top-[142px]",
        "left-[227px] top-[206px]",
        "left-[227px] top-[269px]"
      ];
      return positions[index];
    };
    const getLinePosition = (index) => {
      const positions = [
        "left-[232px] top-[25px]",
        "left-[232px] top-[89px]",
        "left-[232px] top-[153px]",
        "left-[232px] top-[217px]"
      ];
      return positions[index];
    };
    const getActiveDotPosition = (activeStep2) => {
      const positions = [
        "left-[224px] top-[12px]",
        // 2D Animation
        "left-[224px] top-[76px]",
        // 3D Animation
        "left-[224px] top-[140px]",
        // Motion Graphics
        "left-[224px] top-[204px]",
        // Whiteboard
        "left-[224px] top-[267px]"
        // Logo Animation
      ];
      return positions[activeStep2];
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-60 h-72 relative justify-self-end" }, _attrs))} data-v-6817dbcf><!--[-->`);
      ssrRenderList(__props.data, (step, index) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: index,
          to: `/${step == null ? void 0 : step.slug}-service`,
          class: ["absolute text-right text-3xl font-normal font-['Impact'] transition-colors duration-300", [
            activeStep.value === index ? "text-red-500" : "text-white",
            index === 1 ? "text-primary" : "",
            getStepPosition(index)
          ]]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(step.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(step.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(dots.value, (dot, index) => {
        _push(`<div class="${ssrRenderClass([getDotPosition(index), "size-2.5 absolute bg-light-shade rounded-full"])}" data-v-6817dbcf></div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(lines.value, (line, index) => {
        _push(`<div class="${ssrRenderClass([getLinePosition(index), "w-14 h-0 absolute origin-top-left rotate-90 outline outline-[0.75px] outline-offset-[-0.38px] outline-light-shade"])}" data-v-6817dbcf></div>`);
      });
      _push(`<!--]--><div class="${ssrRenderClass([getActiveDotPosition(activeStep.value), "size-4 absolute bg-primary rounded-full transition-all duration-300"])}" data-v-6817dbcf></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/ServicesStepDesign.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ServicesStepDesign = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6817dbcf"]]);

const _sfc_main$1 = {
  __name: "VideoPlayer",
  __ssrInlineRender: true,
  props: {
    video_url: String
  },
  setup(__props) {
    const videoRef = ref(null);
    const isVisible = ref(false);
    useIntersectionObserver(
      videoRef,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          isVisible.value = true;
        }
      },
      { threshold: 0.1 }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><video${ssrRenderAttr("src", isVisible.value ? __props.video_url : null)} autoplay loop muted playsinline class="w-full h-auto" aria-label="Sample video"><source type="video/webm"> Your browser does not support the video tag. </video></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tools/VideoPlayer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const __nuxt_component_1_lazy = defineAsyncComponent(() => import('./RequestQuote.vue.mjs').then(function (n) { return n.a; }).then((c) => c.default || c));
const __nuxt_component_2_lazy = defineAsyncComponent(() => import('./AnimationToolkit.vue.mjs').then((c) => c.default || c));
const __nuxt_component_6_lazy = defineAsyncComponent(() => import('./ProcessStep.vue.mjs').then((c) => c.default || c));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g;
    let __temp, __restore;
    const service_active = ref(0);
    const configs = computed(() => {
      var _a2;
      return (_a2 = useState("config")) == null ? void 0 : _a2.value;
    });
    const { data, status } = ([__temp, __restore] = withAsyncContext(() => useMyFetch("/")), __temp = await __temp, __restore(), __temp);
    const response = computed(() => data == null ? void 0 : data.value);
    useState("animation_category").value = response == null ? void 0 : response.animation_category;
    useState("featured_category").value = response == null ? void 0 : response.featured_category;
    useSeoMeta({
      title: (_a = configs.value) == null ? void 0 : _a.site_title,
      ogTitle: (_b = configs.value) == null ? void 0 : _b.meta_title,
      description: (_c = configs.value) == null ? void 0 : _c.site_meta_desc,
      ogDescription: (_d = configs.value) == null ? void 0 : _d.site_meta_desc,
      keywords: (_e = configs.value) == null ? void 0 : _e.site_meta_keywords,
      ogType: "article",
      ogLocale: (_f = configs.value) == null ? void 0 : _f.current_lang,
      ogUrl: useRoute().fullPath,
      ogImage: `${useRuntimeConfig().public.baseURL}/${(_g = configs.value) == null ? void 0 : _g.my_logo}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h, _i, _j, _k, _l, _m;
      const _component_nuxt_img = _sfc_main$3;
      const _component_LazyRequestQuote = __nuxt_component_1_lazy;
      const _component_LazyMainAnimationToolkit = __nuxt_component_2_lazy;
      const _component_nuxt_link = __nuxt_component_1;
      const _component_nuxt_icon = _sfc_main$6;
      const _component_Portfolio = _sfc_main$7;
      const _component_LazyMainProcessStep = __nuxt_component_6_lazy;
      _push(`<!--[--><div data-v-79878a33>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/system/main_mask.png",
        class: "w-full relative hover:scale-105 transition transform duration-700"
      }, null, _parent));
      _push(`<div class="sm:absolute grid grid-cols-2 gap-3 container mx-auto sm:px-0 px-2" style="${ssrRenderStyle({ "align-self": "anchor-center", "justify-self": "anchor-center" })}" data-v-79878a33><div class="grid text-start sm:col-span-1 col-span-2" data-v-79878a33><div class="flex items-center text-xs justify-start" data-v-79878a33><div class="bg-secondary-shade h-1 w-9 mx-1" data-v-79878a33></div> Welcome to Animation Studio </div><h2 class="sm:text-4xl font-bold text-xl leading-8 my-6" data-v-79878a33> REDEFINING ANIMATION IN <br data-v-79878a33> THE DIGITAL AGE </h2><p data-v-79878a33> Through captivating animated content and cutting-edge technologies, <br data-v-79878a33> showcase what sets your brand apart, bring your story to life, and foster <br data-v-79878a33> lasting connections. Embrace the dynamic potential of animation to <br data-v-79878a33> elevate your brand and drive growth. </p><div class="flex items-center justify-start mx-auto my-4 space-x-2" data-v-79878a33>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(_component_LazyRequestQuote, null, null, _parent));
      _push(`</div></div><div class="sm:col-span-1 col-span-2" data-v-79878a33>`);
      _push(ssrRenderComponent(ServicesStepDesign, {
        data: (_a2 = unref(response)) == null ? void 0 : _a2.animation_category
      }, null, _parent));
      _push(`</div></div></div><div class="container mx-auto px-2" data-v-79878a33><div class="lg:-mt-[16rem] mt-[2rem] px-3 z-50 relative" data-v-79878a33><div class="flex items-center text-xs text-start justify-items-start" data-v-79878a33><div class="bg-secondary-shade h-1 w-9 mx-1" data-v-79878a33></div> Why choose </div><div class="my-6 font-[Impact]" data-v-79878a33><h2 class="sm:text-4xl text-xl font-bold" data-v-79878a33> Animation Studios \u2028 <br data-v-79878a33> for Animation? </h2></div><div data-v-79878a33><!--[-->`);
      ssrRenderList((_b2 = unref(response)) == null ? void 0 : _b2.why_choose_us, (item, key) => {
        _push(`<div class="collapse collapse-plus text-white" data-v-79878a33><input type="radio" name="my-accordion-3" class="peer"${ssrIncludeBooleanAttr(key === 0) ? " checked" : ""} data-v-79878a33><div class="collapse-title font-[&#39;Impact&#39;] sm:text-3xl text-gray-400 peer-checked:text-secondary-shade" data-v-79878a33>${ssrInterpolate(item.heading)}</div><div class="collapse-content text-sm" data-v-79878a33>${ssrInterpolate(item.sub_heading)}</div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="container mx-auto grid gap-9 px-2" data-v-79878a33><div class="text-center grid gap-9 w-full my-9" data-v-79878a33><div class="contact-title flex items-center justify-center gap-2 sm:gap-4 w-full" data-v-79878a33><div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[400px] h-1 bg-gray-300 rounded relative" data-v-79878a33><div class="absolute top-0 right-0 w-16 sm:w-24 h-1 bg-primary rounded" data-v-79878a33></div></div><h2 class="title text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-normal font-[&#39;Impact&#39;] text-center font-display whitespace-nowrap" data-v-79878a33> OUR ANIMATION TOOLKIT </h2><div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[400px] h-1 bg-gray-300 rounded relative" data-v-79878a33><div class="absolute top-0 left-0 w-16 sm:w-24 h-1 bg-primary rounded" data-v-79878a33></div></div></div>`);
      _push(ssrRenderComponent(_component_LazyMainAnimationToolkit, {
        items: (_c2 = unref(response)) == null ? void 0 : _c2.start_section
      }, null, _parent));
      _push(`</div><div class="text-center justify-center grid space-y-4" data-v-79878a33><div class="contact-title flex items-center justify-center gap-2 sm:gap-4 w-full" data-v-79878a33><div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[400px] h-1 bg-gray-300 rounded relative" data-v-79878a33><div class="absolute top-0 right-0 w-16 sm:w-24 h-1 bg-primary rounded" data-v-79878a33></div></div><div class="grid gap-0.5" data-v-79878a33><small data-v-79878a33>Animation Services</small><h2 class="sm:text-5xl text-xl font-normal font-[&#39;Impact&#39;]" data-v-79878a33> Animation for the digital age </h2></div><div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[400px] h-1 bg-gray-300 rounded relative" data-v-79878a33><div class="absolute top-0 left-0 w-16 sm:w-24 h-1 bg-primary rounded" data-v-79878a33></div></div></div><div class="w-[90vw] overflow-scroll flex space-x-2" data-v-79878a33><!--[-->`);
      ssrRenderList((_d2 = unref(response)) == null ? void 0 : _d2.animation_category, (service, key) => {
        _push(`<div class="${ssrRenderClass([{ "bg-secondary-shade": unref(service_active) == key }, "border border-secondary-shade rounded-full hover:bg-secondary-shade px-5 py-1 text-nowrap cursor-pointer"])}" data-v-79878a33>${ssrInterpolate(service == null ? void 0 : service.name)}</div>`);
      });
      _push(`<!--]--></div><div class="grid grid-cols-1 sm:grid-cols-3 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16" data-v-79878a33><div class="relative z-10 sm:col-span-2 col-start-1 sm:col-start-2 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none" data-v-79878a33><h2 class="text-xl font-bold text-white sm:text-4xl sm:leading-7 md:text-3xl sm:text-start" data-v-79878a33>${ssrInterpolate((_f2 = (_e2 = unref(response)) == null ? void 0 : _e2.animation_category[unref(service_active)]) == null ? void 0 : _f2.name)}</h2></div><div class="col-start-1 sm:col-span-2 row-start-2 sm:col-start-2 px-4 sm:pb-16" data-v-79878a33><p class="text-start" data-v-79878a33>${((_h = (_g2 = unref(response)) == null ? void 0 : _g2.animation_category[unref(service_active)]) == null ? void 0 : _h.short_desc) ?? ""}</p></div><div class="col-start-1 sm:col-span-2 sm:col-start-2 row-start-3 space-y-3 px-4 text-start my-4" data-v-79878a33>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `/${(_j = (_i = unref(response)) == null ? void 0 : _i.animation_category[unref(service_active)]) == null ? void 0 : _j.slug}-service`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, { class: "!sm:w-fit" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Learn More `);
                  _push3(ssrRenderComponent(_component_nuxt_icon, {
                    name: "iconsax/linear/arrow-right",
                    class: "text-xl"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" Learn More "),
                    createVNode(_component_nuxt_icon, {
                      name: "iconsax/linear/arrow-right",
                      class: "text-xl"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$5, { class: "!sm:w-fit" }, {
                default: withCtx(() => [
                  createTextVNode(" Learn More "),
                  createVNode(_component_nuxt_icon, {
                    name: "iconsax/linear/arrow-right",
                    class: "text-xl"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-start-1 row-start-1 flex sm:row-span-3" data-v-79878a33><div class="w-full grid grid-cols-3 grid-rows-2 gap-2" data-v-79878a33><div class="relative col-span-3 row-span-2" data-v-79878a33>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: `${("useRuntimeConfig" in _ctx ? _ctx.useRuntimeConfig : unref(useRuntimeConfig))().public.fileURL}/${(_k = unref(response)) == null ? void 0 : _k.animation_category[unref(service_active)].file}`,
        alt: "",
        class: "sm:absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg"
      }, null, _parent));
      _push(`</div></div></div></div></div><div class="py-5 md:py-10 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-3 lg:gap-20 max-w-7xl mx-auto px-4" data-v-79878a33><div class="w-full md:w-1/2 max-w-[791px] relative" data-v-79878a33><div class="flex flex-col justify-start items-start gap-4" data-v-79878a33><h1 class="text-4xl sm:text-5xl grid gap-1 md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight" data-v-79878a33><span class="text-white line-1 anim-typewriter" data-v-79878a33>There is no limit for </span><span class="text-pink-700" data-v-79878a33>creativity</span></h1><p class="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal font-[&#39;Impact&#39;]" data-v-79878a33> We create brand and experience </p><div class="w-16 md:w-24 h-1 bg-primary rounded-[3px] transform rotate-180" data-v-79878a33></div></div></div><div class="w-full md:w-1/2 max-w-[806px] h-auto mix-blend-lighten object-contain" data-v-79878a33>`);
      _push(ssrRenderComponent(_sfc_main$1, { video_url: "/system/vecteezy_energy_blue_glowing_cosmic_magic_sphere_futuristic_round.webm" }, null, _parent));
      _push(`</div></div><div class="text-center justify-center grid space-y-4" data-v-79878a33><div class="contact-title flex items-center justify-center gap-2 sm:gap-4 w-full" data-v-79878a33><div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[600px] h-1 bg-gray-300 rounded relative" data-v-79878a33><div class="absolute top-0 right-0 w-16 sm:w-24 h-1 bg-primary rounded" data-v-79878a33></div></div><h2 class="sm:text-5xl text-xl font-normal font-[&#39;Impact&#39;]" data-v-79878a33> Portfolio </h2><div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[600px] h-1 bg-gray-300 rounded relative" data-v-79878a33><div class="absolute top-0 left-0 w-16 sm:w-24 h-1 bg-primary rounded" data-v-79878a33></div></div></div>`);
      _push(ssrRenderComponent(_component_Portfolio, {
        services: (_l = unref(response)) == null ? void 0 : _l.featured_category
      }, null, _parent));
      _push(`</div><div class="text-center justify-center grid space-y-4 mt-9 justify-items-center" data-v-79878a33><div class="contact-title flex items-center justify-center gap-2 sm:gap-4 w-full" data-v-79878a33><div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[300px] h-1 bg-gray-300 rounded relative" data-v-79878a33><div class="absolute top-0 right-0 w-16 sm:w-24 h-1 bg-primary rounded" data-v-79878a33></div></div><div class="grid gap-0" data-v-79878a33><small data-v-79878a33>Process</small><h2 class="sm:text-5xl text-xl font-normal font-[&#39;Impact&#39;]" data-v-79878a33> Matching Your Business Needs Effectively </h2><span class="text-xs text-wrap" data-v-79878a33>We’re determined to explore more than what may be just a quick fix for your business. Together, we can tailor our proven processes for continual growth.</span></div><div class="separator hidden sm:block flex-1 max-w-[100px] md:max-w-[200px] lg:max-w-[300px] h-1 bg-gray-300 rounded relative" data-v-79878a33><div class="absolute top-0 left-0 w-16 sm:w-24 h-1 bg-primary rounded" data-v-79878a33></div></div></div>`);
      _push(ssrRenderComponent(_component_LazyMainProcessStep, {
        process_step: (_m = unref(response)) == null ? void 0 : _m.process_step_section
      }, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-79878a33"]]);

export { index as default };
//# sourceMappingURL=index.vue.mjs.map
