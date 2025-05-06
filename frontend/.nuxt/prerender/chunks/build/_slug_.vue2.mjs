import { mergeProps, useSSRContext, ref, computed, watch, unref } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderDynamicModel } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue/server-renderer/index.mjs';
import { useRoute } from 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/vue-router/dist/vue-router.node.mjs';
import { _ as _export_sfc, a as useState, e as useRouter } from './server.mjs';
import { u as useCookie } from './cookie.mjs';
import { u as useMyFetch } from './apiFetch.mjs';
import { _ as _sfc_main$4 } from './NuxtImg.vue2.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/unctx/dist/index.mjs';
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/h3/dist/index.mjs';
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
import 'file:///Users/mohammadrassoulzadeh/Documents/project/marktify/front/node_modules/cookie-es/dist/index.mjs';

const _sfc_main$3 = {
  __name: "StarRating",
  __ssrInlineRender: true,
  props: {
    rating: {
      type: Number,
      required: true,
      default: 0
    },
    showRating: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "star-rating flex items-center" }, _attrs))} data-v-1525717f><!--[-->`);
      ssrRenderList(5, (i) => {
        _push(`<span class="text-yellow-400" data-v-1525717f><i class="${ssrRenderClass({
          "fas fa-star": i <= Math.floor(__props.rating),
          "fas fa-star-half-alt": i === Math.ceil(__props.rating) && __props.rating % 1 !== 0,
          "far fa-star": i > Math.ceil(__props.rating)
        })}" data-v-1525717f></i></span>`);
      });
      _push(`<!--]-->`);
      if (__props.showRating) {
        _push(`<span class="ml-2 text-sm text-gray-600" data-v-1525717f>${ssrInterpolate(__props.rating.toFixed(1))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StarRating.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const StarRating = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-1525717f"]]);

const _sfc_main$2 = {
  __name: "D2AnimationPlayer",
  __ssrInlineRender: true,
  props: {
    video_ur: String
  },
  setup(__props) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-2382189f><video autoplay loop muted playsinline class="w-full h-auto" data-v-2382189f><source${ssrRenderAttr("src", __props.video_ur)} type="video/webm" data-v-2382189f></video></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tools/D2AnimationPlayer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const D2AnimationPlayer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2382189f"]]);

const _sfc_main$1 = {
  __name: "D3AnimationPlayer",
  __ssrInlineRender: true,
  props: {
    video_url: String
  },
  setup(__props) {
    const canvasRef = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<canvas${ssrRenderAttrs(mergeProps({
        ref_key: "canvasRef",
        ref: canvasRef
      }, _attrs))}></canvas>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tools/D3AnimationPlayer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const isUserLoggedIn = () => {
  var _a;
  return !!(useState("userData").value || ((_a = useCookie("CSRF_ASRO_TOKEN")) == null ? void 0 : _a.value));
};

const price_symbol = "$";
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c, _d, _e;
    const route = useRoute();
    useRouter();
    const slug = route.params.slug;
    const comment = ref("");
    const isAuthenticated = computed(() => isUserLoggedIn());
    const { data, pending, error, refresh } = useMyFetch(`single-details/${slug}`);
    const product = ref((_a = data.value) == null ? void 0 : _a.product);
    const product_meta = ref((_b = data.value) == null ? void 0 : _b.product_meta);
    watch(data, (newData) => {
      var _a2, _b2;
      product.value = (newData == null ? void 0 : newData.product) || null;
      product_meta.value = (newData == null ? void 0 : newData.product_meta) || {
        preview_imgs: [],
        videos: [],
        animations: [],
        multi_price: [],
        enable_multi_option: 0
      };
      selectedPrices.value = ((_b2 = (_a2 = product_meta.value.multi_price) == null ? void 0 : _a2.find((p) => p.default_price === 1)) == null ? void 0 : _b2.price_id) ? [product_meta.value.multi_price.find((p) => p.default_price === 1).price_id] : [];
    });
    const tabs = [
      { id: "description", label: "Description" },
      { id: "previews", label: "Previews" },
      { id: "reviews", label: "Reviews" },
      { id: "comments", label: "Comments" }
    ];
    const activeTab = ref("description");
    const filterRating = ref("");
    const filterMonth = ref("");
    const filterYear = ref((/* @__PURE__ */ new Date()).getFullYear().toString());
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const selectedPrices = ref([(_e = (_d = (_c = product_meta == null ? void 0 : product_meta.value) == null ? void 0 : _c.multi_price) == null ? void 0 : _d.find((p) => p.default_price === 1)) == null ? void 0 : _e.price_id]);
    const formatDate = (date) => {
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d2, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O;
      const _component_nuxt_img = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tp_singlepage_section py-8 bg-gray-900 text-gray-100" }, _attrs))}><div class="container mx-auto px-4"><div class="grid grid-cols-1 lg:grid-cols-12 gap-6"><div class="lg:col-span-12"><div class="tp_in2_text text-center mb-6"><h2 class="text-3xl font-bold text-white">${ssrInterpolate(((_a2 = product.value) == null ? void 0 : _a2.name) || "Product Name")}</h2><p class="text-gray-400"> By <span class="font-semibold text-gray-200">${ssrInterpolate(((_c2 = (_b2 = product.value) == null ? void 0 : _b2.getUser) == null ? void 0 : _c2.full_name) || "Author Name")}</span></p></div></div><div class="lg:col-span-8"><div class="tp_template_box bg-gray-800 shadow-xl rounded-lg overflow-hidden"><div class="tp_tem_thumb relative">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: ((_d2 = product.value) == null ? void 0 : _d2.imageUrl) || "/images/placeholder.jpg",
        alt: "Product Image",
        class: "w-full h-auto object-cover",
        loading: "lazy"
      }, null, _parent));
      if ((_e2 = product.value) == null ? void 0 : _e2.preview_link) {
        _push(`<a${ssrRenderAttr("href", product.value.preview_link)} target="_blank" class="tp_preview_icon absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: "/images/preview-icon.png",
          alt: "Preview Icon",
          class: "w-12 h-12",
          loading: "lazy"
        }, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="gallery_nav tp_tem_tab_buttom border-b border-gray-700"><ul class="flex space-x-2 mb-3" role="tablist"><!--[-->`);
      ssrRenderList(tabs, (tab) => {
        _push(`<li role="presentation"><button class="${ssrRenderClass([
          "px-4 py-2 text-sm font-medium rounded-t-md transition-colors duration-200",
          activeTab.value === tab.id ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
        ])}"${ssrRenderAttr("id", `tab-${tab.id}`)} type="button" role="tab"${ssrRenderAttr("aria-controls", tab.id)}${ssrRenderAttr("aria-selected", activeTab.value === tab.id)}>${ssrInterpolate(tab.label)}</button></li>`);
      });
      _push(`<!--]--></ul></div><div class="p-6"><div style="${ssrRenderStyle(activeTab.value === "description" ? null : { display: "none" })}" id="description" role="tabpanel" aria-labelledby="tab-description" class="prose prose-invert max-w-none"><div class="tp_tem_description">${((_f = product.value) == null ? void 0 : _f.description) || "No description available."}</div></div><div style="${ssrRenderStyle(activeTab.value === "previews" ? null : { display: "none" })}" id="previews" role="tabpanel" aria-labelledby="tab-previews"><div class="tp_tem_previews"><h3 class="text-xl font-semibold mb-4 text-white">Previews and Screenshots</h3>`);
      if ((_h = (_g = product_meta.value) == null ? void 0 : _g.preview_imgs) == null ? void 0 : _h.length) {
        _push(`<div class="grid grid-cols-2 gap-4 mb-4"><!--[-->`);
        ssrRenderList(product_meta.value.preview_imgs, (img, index) => {
          _push(ssrRenderComponent(_component_nuxt_img, {
            key: `img-${index}`,
            src: img,
            alt: "Preview Image",
            class: "w-full h-auto rounded-lg shadow-md",
            loading: "lazy"
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_j = (_i = product_meta.value) == null ? void 0 : _i.videos) == null ? void 0 : _j.length) {
        _push(`<div class="grid grid-cols-2 gap-4 mb-4"><!--[-->`);
        ssrRenderList(product_meta.value.videos, (video, index) => {
          _push(`<div class="relative">`);
          if (video.type === "local") {
            _push(`<video${ssrRenderAttr("src", video.url)} controls class="w-full h-auto rounded-lg shadow-md"></video>`);
          } else {
            _push(`<iframe${ssrRenderAttr("src", video.url)} class="w-full h-48 rounded-lg shadow-md" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_l = (_k = product_meta.value) == null ? void 0 : _k.animations) == null ? void 0 : _l.length) {
        _push(`<div class="grid grid-cols-2 gap-4 mb-4"><!--[-->`);
        ssrRenderList(product_meta.value.animations, (anim, index) => {
          _push(`<div>`);
          if (anim.type === "2d") {
            _push(ssrRenderComponent(D2AnimationPlayer, {
              src: anim.src,
              class: "w-full h-auto rounded-lg shadow-md"
            }, null, _parent));
          } else {
            _push(ssrRenderComponent(_sfc_main$1, {
              src: anim.src,
              class: "w-full h-auto rounded-lg shadow-md"
            }, null, _parent));
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!((_n = (_m = product_meta.value) == null ? void 0 : _m.preview_imgs) == null ? void 0 : _n.length) && !((_p = (_o = product_meta.value) == null ? void 0 : _o.videos) == null ? void 0 : _p.length) && !((_r = (_q = product_meta.value) == null ? void 0 : _q.animations) == null ? void 0 : _r.length)) {
        _push(`<p class="text-gray-400"> No preview content available. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div style="${ssrRenderStyle(activeTab.value === "reviews" ? null : { display: "none" })}" id="reviews" role="tabpanel" aria-labelledby="tab-reviews"><div class="tp_tem_reviews"><div class="tp_filter_box flex justify-between items-center mb-4"><div class="tp_fil_text"><h3 class="text-lg font-semibold flex items-center text-white">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/images/three_star.png",
        alt: "Stars",
        class: "w-6 h-6 mr-2",
        loading: "lazy"
      }, null, _parent));
      _push(` ${ssrInterpolate(((_t = (_s = product.value) == null ? void 0 : _s.getProductReview) == null ? void 0 : _t.count) || 0)} Reviews for this product </h3></div><div class="tp_fil_range"><ul class="flex items-center space-x-2"><li class="text-sm text-gray-400">Filter by rating</li><li><select class="border border-gray-600 bg-gray-700 text-gray-200 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"><option value=""${ssrIncludeBooleanAttr(Array.isArray(filterRating.value) ? ssrLooseContain(filterRating.value, "") : ssrLooseEqual(filterRating.value, "")) ? " selected" : ""}>Star</option><!--[-->`);
      ssrRenderList(5, (i) => {
        _push(`<option${ssrRenderAttr("value", i)}${ssrIncludeBooleanAttr(Array.isArray(filterRating.value) ? ssrLooseContain(filterRating.value, i) : ssrLooseEqual(filterRating.value, i)) ? " selected" : ""}>${ssrInterpolate(i)} Star</option>`);
      });
      _push(`<!--]--></select></li></ul></div></div><div class="tp_comments_box" id="review_search_box"></div></div></div><div style="${ssrRenderStyle(activeTab.value === "comments" ? null : { display: "none" })}" id="comments" role="tabpanel" aria-labelledby="tab-comments"><div class="tp_tem_comments"><div class="tp_comm_box mb-6"><form id="add-product-comment-form"><div class="form-outline"><label class="form-label font-semibold text-white" for="comment">Add Comment</label><textarea name="comment" rows="3" class="w-full border border-gray-600 bg-gray-700 text-gray-200 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Add a comment here..."${ssrIncludeBooleanAttr(!unref(isAuthenticated)) ? " disabled" : ""} lang="en" dir="ltr">${ssrInterpolate(comment.value)}</textarea><button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"${ssrRenderAttr("type", unref(isAuthenticated) ? "submit" : "button")}> Post Comment </button></div><input type="hidden" name="product_id"${ssrRenderAttr("value", (_u = product.value) == null ? void 0 : _u.id)}></form></div><div class="tp_filter_box flex justify-between items-center mb-4"><div class="tp_fil_text"><h3 class="text-lg font-semibold flex items-center text-white">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/images/comment_icon.png",
        alt: "Comment",
        class: "w-6 h-6 mr-2",
        loading: "lazy"
      }, null, _parent));
      _push(` ${ssrInterpolate(((_w = (_v = product.value) == null ? void 0 : _v.getProductComment) == null ? void 0 : _w.count) || 0)} Comments found </h3></div><div class="tp_fil_range"><ul class="flex items-center space-x-2"><li class="text-sm text-gray-400">Filter By</li><li><select class="border border-gray-600 bg-gray-700 text-gray-200 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"><option value=""${ssrIncludeBooleanAttr(Array.isArray(filterMonth.value) ? ssrLooseContain(filterMonth.value, "") : ssrLooseEqual(filterMonth.value, "")) ? " selected" : ""}>Month</option><!--[-->`);
      ssrRenderList(12, (m) => {
        _push(`<option${ssrRenderAttr("value", m)}${ssrIncludeBooleanAttr(Array.isArray(filterMonth.value) ? ssrLooseContain(filterMonth.value, m) : ssrLooseEqual(filterMonth.value, m)) ? " selected" : ""}>${ssrInterpolate(monthNames[m - 1])}</option>`);
      });
      _push(`<!--]--></select></li><li><select class="border border-gray-600 bg-gray-700 text-gray-200 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"><option value=""${ssrIncludeBooleanAttr(Array.isArray(filterYear.value) ? ssrLooseContain(filterYear.value, "") : ssrLooseEqual(filterYear.value, "")) ? " selected" : ""}>Year</option><option${ssrRenderAttr("value", unref(currentYear))}${ssrIncludeBooleanAttr(Array.isArray(filterYear.value) ? ssrLooseContain(filterYear.value, unref(currentYear)) : ssrLooseEqual(filterYear.value, unref(currentYear))) ? " selected" : ""}>${ssrInterpolate(unref(currentYear))}</option></select></li></ul></div></div><div class="tp_comments_box" id="cmd_search_box"></div><div class="text-center mt-4"><button type="button" class="border border-gray-600 bg-gray-700 text-gray-200 rounded-full px-4 py-2 text-sm hover:bg-gray-600 transition-colors duration-200 hidden" id="load_more_cmd_button"> Load More </button></div></div></div></div><div class="tp_add_image mt-6"><div id="advertize-ad" class="bg-gray-700 h-32 flex items-center justify-center"><span class="text-gray-400">Advertisement</span></div></div></div></div><div class="lg:col-span-4"><form id="add-to-card-form" class="space-y-6"><div class="tp_sidebar_category bg-gray-800 shadow-xl rounded-lg p-4"><div class="tp_leftbar_box">`);
      if (((_x = product.value) == null ? void 0 : _x.is_free) === "1") {
        _push(`<div class="tp_flex_price flex justify-between items-center"><p class="text-sm font-medium text-gray-300">Price</p><div class="tp_lowprice"><h2 class="text-lg font-bold text-white">`);
        if ((_y = product.value) == null ? void 0 : _y.price) {
          _push(`<span class="line-through text-gray-500">${ssrInterpolate(price_symbol + ((_z = product.value) == null ? void 0 : _z.price))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(` Free </h2></div></div>`);
      } else {
        _push(`<div>`);
        if (((_A = product.value) == null ? void 0 : _A.is_enable_multi_price) === 1 && ((_C = (_B = product_meta.value) == null ? void 0 : _B.multi_price) == null ? void 0 : _C.length)) {
          _push(`<div class="space-y-2"><!--[-->`);
          ssrRenderList((_D = product_meta.value) == null ? void 0 : _D.multi_price, (price) => {
            var _a3;
            _push(`<div class="tp_flex_price flex items-center space-x-2"><input${ssrRenderAttr("type", product_meta.value.enable_multi_option ? "checkbox" : "radio")}${ssrRenderAttr("value", price.price_id)}${ssrRenderDynamicModel(product_meta.value.enable_multi_option ? "checkbox" : "radio", selectedPrices.value, price.price_id)}${ssrIncludeBooleanAttr(price.default_price === 1) ? " checked" : ""} name="price_id[]" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 bg-gray-700"><p class="text-sm text-gray-300">${ssrInterpolate(price.option_name)}</p><div class="tp_lowprice"><h2 class="text-lg font-bold text-white">`);
            if (((_a3 = product.value) == null ? void 0 : _a3.is_offer) !== 0 && price.offer_price) {
              _push(`<span class="line-through text-gray-500">${ssrInterpolate(price_symbol + price.price)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(` ${ssrInterpolate(price_symbol + (price.offer_price || price.price))}</h2></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="tp_flex_price flex justify-between items-center"><p class="text-sm font-medium text-gray-300">Price</p><div class="tp_lowprice"><h2 class="text-lg font-bold text-white">`);
          if (((_E = product.value) == null ? void 0 : _E.is_offer) !== "0") {
            _push(`<span class="line-through text-gray-500">${ssrInterpolate(price_symbol + ((_F = product.value) == null ? void 0 : _F.price))}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(` ${ssrInterpolate(price_symbol + (((_G = product.value) == null ? void 0 : _G.offer_price) || ((_H = product.value) == null ? void 0 : _H.price)))}</h2></div></div>`);
        }
        _push(`</div>`);
      }
      _push(`</div></div><div class="tp_leftbar_box bg-gray-800 shadow-xl rounded-lg p-4"><div class="tp_tem_option"><div class="grid_icon flex justify-between items-center mb-4"><div class="star_rating">`);
      _push(ssrRenderComponent(StarRating, {
        rating: ((_I = product.value) == null ? void 0 : _I.rating) || 0
      }, null, _parent));
      _push(`</div><span class="flex items-center text-sm text-gray-400">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/images/sales.png",
        alt: "Sales",
        class: "w-5 h-5 mr-1",
        loading: "lazy"
      }, null, _parent));
      _push(` ${ssrInterpolate(((_J = product.value) == null ? void 0 : _J.sale_count) || 0)} Sales </span></div><div class="tp_buy_btn space-y-2"><button type="button" class="tp_btn w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center justify-center transition-colors duration-200">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/images/buynow.png",
        alt: "Buy Now",
        class: "w-5 h-5 mr-2",
        loading: "lazy"
      }, null, _parent));
      _push(` Buy Now </button><button type="button" class="tp_btn w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center justify-center transition-colors duration-200">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/images/addtocart.png",
        alt: "Add to Cart",
        class: "w-5 h-5 mr-2",
        loading: "lazy"
      }, null, _parent));
      _push(` Add to Cart </button>`);
      if ((_K = product.value) == null ? void 0 : _K.preview_link) {
        _push(`<a${ssrRenderAttr("href", product.value.preview_link)} target="_blank" class="tp_btn w-full bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500 flex items-center justify-center transition-colors duration-200">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: "/images/live_preview.png",
          alt: "Live Preview",
          class: "w-5 h-5 mr-2",
          loading: "lazy"
        }, null, _parent));
        _push(` Live Preview </a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></form><div class="tp_leftbar_box bg-gray-800 shadow-xl rounded-lg p-4"><div class="tp_product_detailhead"><h4 class="text-lg font-semibold mb-4 text-white">Product Details</h4></div><div class="tp_product_detail"><ul class="space-y-2">`);
      if ((_L = product.value) == null ? void 0 : _L.published_at) {
        _push(`<li class="flex justify-between text-sm text-gray-300"> Last Update <span>${ssrInterpolate(formatDate(product.value.last_modified))}</span></li>`);
      } else {
        _push(`<!---->`);
      }
      if ((_M = product.value) == null ? void 0 : _M.published_at) {
        _push(`<li class="flex justify-between text-sm text-gray-300"> Published <span>${ssrInterpolate(formatDate(product.value.published_at))}</span></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList((_N = product.value) == null ? void 0 : _N.product_details, (detail) => {
        _push(`<li class="flex justify-between text-sm text-gray-300">${ssrInterpolate(detail.key)} <span>${ssrInterpolate(detail.value)}</span></li>`);
      });
      _push(`<!--]--><li class="flex justify-between text-sm text-gray-300"> Tags <span class="ml-3">${ssrInterpolate(((_O = product.value) == null ? void 0 : _O.tags) || "No tags")}</span></li></ul></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_.vue2.mjs.map
