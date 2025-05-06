<template>
  <div class="tp_singlepage_section py-8 bg-gray-900 text-gray-100">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Product Header -->
        <div class="lg:col-span-12">
          <div class="tp_in2_text text-center mb-6">
            <h2 class="text-3xl font-bold text-white">{{ product?.name || 'Product Name' }}</h2>
            <p class="text-gray-400">
              By <span class="font-semibold text-gray-200">{{ product?.getUser?.full_name || 'Author Name' }}</span>
            </p>
          </div>
        </div>

        <!-- Main Content -->
        <div class="lg:col-span-8">
          <div class="tp_template_box bg-gray-800 shadow-xl rounded-lg overflow-hidden">
            <!-- Product Image -->
            <div class="tp_tem_thumb relative">
              <nuxt-img
                  :src="product?.imageUrl || '/images/placeholder.jpg'"
                  alt="Product Image"
                  class="w-full h-auto object-cover"
                  loading="lazy"
              />
              <a
                  v-if="product?.preview_link"
                  :href="product.preview_link"
                  target="_blank"
                  class="tp_preview_icon absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                <nuxt-img src="/images/preview-icon.png" alt="Preview Icon" class="w-12 h-12" loading="lazy" />
              </a>
            </div>

            <!-- Tabs Navigation -->
            <div class="gallery_nav tp_tem_tab_buttom border-b border-gray-700">
              <ul class="flex space-x-2 mb-3" role="tablist">
                <li v-for="tab in tabs" :key="tab.id" role="presentation">
                  <button
                      :class="[
                      'px-4 py-2 text-sm font-medium rounded-t-md transition-colors duration-200',
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600',
                    ]"
                      :id="`tab-${tab.id}`"
                      type="button"
                      role="tab"
                      :aria-controls="tab.id"
                      :aria-selected="activeTab === tab.id"
                      @click="activeTab = tab.id"
                  >
                    {{ tab.label }}
                  </button>
                </li>
              </ul>
            </div>

            <!-- Tab Content -->
            <div class="p-6">
              <!-- Description Tab -->
              <div
                  v-show="activeTab === 'description'"
                  id="description"
                  role="tabpanel"
                  aria-labelledby="tab-description"
                  class="prose prose-invert max-w-none"
              >
                <div class="tp_tem_description" v-html="product?.description || 'No description available.'"></div>
              </div>

              <!-- Previews Tab -->
              <div
                  v-show="activeTab === 'previews'"
                  id="previews"
                  role="tabpanel"
                  aria-labelledby="tab-previews"
              >
                <div class="tp_tem_previews">
                  <h3 class="text-xl font-semibold mb-4 text-white">Previews and Screenshots</h3>
                  <!-- Images -->
                  <div v-if="product_meta?.preview_imgs?.length" class="grid grid-cols-2 gap-4 mb-4">
                    <nuxt-img
                        v-for="(img, index) in product_meta.preview_imgs"
                        :key="`img-${index}`"
                        :src="img"
                        alt="Preview Image"
                        class="w-full h-auto rounded-lg shadow-md"
                        loading="lazy"
                    />
                  </div>
                  <!-- Videos -->
                  <div v-if="product_meta?.videos?.length" class="grid grid-cols-2 gap-4 mb-4">
                    <div v-for="(video, index) in product_meta.videos" :key="`video-${index}`" class="relative">
                      <video
                          v-if="video.type === 'local'"
                          :src="video.url"
                          controls
                          class="w-full h-auto rounded-lg shadow-md"
                      ></video>
                      <iframe
                          v-else
                          :src="video.url"
                          class="w-full h-48 rounded-lg shadow-md"
                          frameborder="0"
                          allow="autoplay; encrypted-media"
                          allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <!-- Animations -->
                  <div v-if="product_meta?.animations?.length" class="grid grid-cols-2 gap-4 mb-4">
                    <div v-for="(anim, index) in product_meta.animations" :key="`anim-${index}`">
                      <D2AnimationPlayer  v-if="anim.type === '2d'"
                      :src="anim.src"
                      class="w-full h-auto rounded-lg shadow-md"
                      />
                      <D3AnimationPlayer
                      v-else
                      :src="anim.src"
                      class="w-full h-auto rounded-lg shadow-md" />
                    </div>
                  </div>
                  <p v-if="!product_meta?.preview_imgs?.length && !product_meta?.videos?.length && !product_meta?.animations?.length" class="text-gray-400">
                    No preview content available.
                  </p>
                </div>
              </div>

              <!-- Reviews Tab -->
              <div
                  v-show="activeTab === 'reviews'"
                  id="reviews"
                  role="tabpanel"
                  aria-labelledby="tab-reviews"
              >
                <div class="tp_tem_reviews">
                  <div class="tp_filter_box flex justify-between items-center mb-4">
                    <div class="tp_fil_text">
                      <h3 class="text-lg font-semibold flex items-center text-white">
                        <nuxt-img src="/images/three_star.png" alt="Stars" class="w-6 h-6 mr-2" loading="lazy" />
                        {{ product?.getProductReview?.count || 0 }} Reviews for this product
                      </h3>
                    </div>
                    <div class="tp_fil_range">
                      <ul class="flex items-center space-x-2">
                        <li class="text-sm text-gray-400">Filter by rating</li>
                        <li>
                          <select
                              v-model="filterRating"
                              @change="searchRating"
                              class="border border-gray-600 bg-gray-700 text-gray-200 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Star</option>
                            <option v-for="i in 5" :key="i" :value="i">{{ i }} Star</option>
                          </select>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="tp_comments_box" id="review_search_box">
                    <!-- Reviews will be populated dynamically -->
                  </div>
                </div>
              </div>

              <!-- Comments Tab -->
              <div
                  v-show="activeTab === 'comments'"
                  id="comments"
                  role="tabpanel"
                  aria-labelledby="tab-comments"
              >
                <div class="tp_tem_comments">
                  <div class="tp_comm_box mb-6">
                    <form @submit.prevent="addComment" id="add-product-comment-form">
                      <div class="form-outline">
                        <label class="form-label font-semibold text-white" for="comment">Add Comment</label>
                        <textarea
                            v-model="comment"
                            name="comment"
                            rows="3"
                            class="w-full border border-gray-600 bg-gray-700 text-gray-200 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Add a comment here..."
                            :disabled="!isAuthenticated"
                            lang="en"
                            dir="ltr"
                        ></textarea>
                        <button
                            class="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                            :type="isAuthenticated ? 'submit' : 'button'"
                            @click="!isAuthenticated && openLoginModal()"
                        >
                          Post Comment
                        </button>
                      </div>
                      <input type="hidden" name="product_id" :value="product?.id" />
                    </form>
                  </div>
                  <div class="tp_filter_box flex justify-between items-center mb-4">
                    <div class="tp_fil_text">
                      <h3 class="text-lg font-semibold flex items-center text-white">
                        <nuxt-img src="/images/comment_icon.png" alt="Comment" class="w-6 h-6 mr-2" loading="lazy" />
                        {{ product?.getProductComment?.count || 0 }} Comments found
                      </h3>
                    </div>
                    <div class="tp_fil_range">
                      <ul class="flex items-center space-x-2">
                        <li class="text-sm text-gray-400">Filter By</li>
                        <li>
                          <select
                              v-model="filterMonth"
                              @change="searchComment"
                              class="border border-gray-600 bg-gray-700 text-gray-200 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Month</option>
                            <option v-for="m in 12" :key="m" :value="m">{{ monthNames[m - 1] }}</option>
                          </select>
                        </li>
                        <li>
                          <select
                              v-model="filterYear"
                              @change="searchComment"
                              class="border border-gray-600 bg-gray-700 text-gray-200 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Year</option>
                            <option :value="currentYear">{{ currentYear }}</option>
                          </select>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="tp_comments_box" id="cmd_search_box">
                    <!-- Comments will be populated dynamically -->
                  </div>
                  <div class="text-center mt-4">
                    <button
                        type="button"
                        class="border border-gray-600 bg-gray-700 text-gray-200 rounded-full px-4 py-2 text-sm hover:bg-gray-600 transition-colors duration-200 hidden"
                        id="load_more_cmd_button"
                    >
                      Load More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="tp_add_image mt-6">
              <!-- Advertisement placeholder -->
              <div id="advertize-ad" class="bg-gray-700 h-32 flex items-center justify-center">
                <span class="text-gray-400">Advertisement</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-4">
          <form @submit.prevent="addToCart" id="add-to-card-form" class="space-y-6">
            <!-- Price Section -->
            <div class="tp_sidebar_category bg-gray-800 shadow-xl rounded-lg p-4">
              <div class="tp_leftbar_box">
                <div v-if="product?.is_free === '1'" class="tp_flex_price flex justify-between items-center">
                  <p class="text-sm font-medium text-gray-300">Price</p>
                  <div class="tp_lowprice">
                    <h2 class="text-lg font-bold text-white">
                      <span v-if="product?.price" class="line-through text-gray-500">{{
                          price_symbol + product?.price
                        }}</span>
                      Free
                    </h2>
                  </div>
                </div>
                <div v-else>
                  <div
                      v-if="
                      product?.is_enable_multi_price === 1 &&
                      product_meta?.multi_price?.length
                    "
                      class="space-y-2"
                  >
                    <div
                        v-for="price in product_meta?.multi_price"
                        :key="price.price_id"
                        class="tp_flex_price flex items-center space-x-2"
                    >
                      <input
                          :type="product_meta.enable_multi_option ? 'checkbox' : 'radio'"
                          :value="price.price_id"
                          v-model="selectedPrices"
                          :checked="price.default_price === 1"
                          name="price_id[]"
                          class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 bg-gray-700"
                      />
                      <p class="text-sm text-gray-300">{{ price.option_name }}</p>
                      <div class="tp_lowprice">
                        <h2 class="text-lg font-bold text-white">
                          <span
                              v-if="product?.is_offer !== 0 && price.offer_price"
                              class="line-through text-gray-500"
                          >{{ price_symbol + price.price }}</span>
                          {{ price_symbol + (price.offer_price || price.price) }}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div v-else class="tp_flex_price flex justify-between items-center">
                    <p class="text-sm font-medium text-gray-300">Price</p>
                    <div class="tp_lowprice">
                      <h2 class="text-lg font-bold text-white">
                        <span
                            v-if="product?.is_offer !== '0'"
                            class="line-through text-gray-500"
                        >{{ price_symbol + product?.price }}</span>
                        {{ price_symbol + (product?.offer_price || product?.price) }}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Buy Options -->
            <div class="tp_leftbar_box bg-gray-800 shadow-xl rounded-lg p-4">
              <div class="tp_tem_option">
                <div class="grid_icon flex justify-between items-center mb-4">
                  <div class="star_rating">
                    <StarRating :rating="product?.rating || 0" />
                  </div>
                  <span class="flex items-center text-sm text-gray-400">
                    <nuxt-img src="/images/sales.png" alt="Sales" class="w-5 h-5 mr-1" loading="lazy" />
                    {{ product?.sale_count || 0 }} Sales
                  </span>
                </div>
                <div class="tp_buy_btn space-y-2">
                  <button
                      type="button"
                      @click="isAuthenticated ? addToCart('', 1) : openLoginModal()"
                      class="tp_btn w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center justify-center transition-colors duration-200"
                  >
                    <nuxt-img src="/images/buynow.png" alt="Buy Now" class="w-5 h-5 mr-2" loading="lazy" />
                    Buy Now
                  </button>
                  <button
                      type="button"
                      @click="addToCart()"
                      class="tp_btn w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center justify-center transition-colors duration-200"
                  >
                    <nuxt-img src="/images/addtocart.png" alt="Add to Cart" class="w-5 h-5 mr-2" loading="lazy" />
                    Add to Cart
                  </button>
                  <a
                      v-if="product?.preview_link"
                      :href="product.preview_link"
                      target="_blank"
                      class="tp_btn w-full bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500 flex items-center justify-center transition-colors duration-200"
                  >
                    <nuxt-img src="/images/live_preview.png" alt="Live Preview" class="w-5 h-5 mr-2" loading="lazy" />
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          </form>

          <!-- Product Details -->
          <div class="tp_leftbar_box bg-gray-800 shadow-xl rounded-lg p-4">
            <div class="tp_product_detailhead">
              <h4 class="text-lg font-semibold mb-4 text-white">Product Details</h4>
            </div>
            <div class="tp_product_detail">
              <ul class="space-y-2">
                <li v-if="product?.published_at" class="flex justify-between text-sm text-gray-300">
                  Last Update
                  <span>{{ formatDate(product.last_modified) }}</span>
                </li>
                <li v-if="product?.published_at" class="flex justify-between text-sm text-gray-300">
                  Published
                  <span>{{ formatDate(product.published_at) }}</span>
                </li>
                <li
                    v-for="detail in product?.product_details"
                    :key="detail.key"
                    class="flex justify-between text-sm text-gray-300"
                >
                  {{ detail.key }} <span>{{ detail.value }}</span>
                </li>
                <li class="flex justify-between text-sm text-gray-300">
                  Tags <span class="ml-3">{{ product?.tags || 'No tags' }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Author Info -->
<!--          <div class="tp_leftbar_box bg-gray-800 shadow-xl rounded-lg p-4">-->
<!--            <div class="tp_product_detailhead">-->
<!--              <h4 class="text-lg font-semibold mb-4 text-white">Author</h4>-->
<!--            </div>-->
<!--            <div class="tp_product_box_flex flex items-center">-->
<!--              <div class="tp_product_user">-->
<!--                <nuxt-img-->
<!--                    src="/images/profile.png"-->
<!--                    alt="Author"-->
<!--                    class="w-12 h-12 rounded-full"-->
<!--                    loading="lazy"-->
<!--                />-->
<!--              </div>-->
<!--              <div class="tp_john_flex ml-4">-->
<!--                <h5 class="text-md font-semibold text-white">{{ product?.getUser?.full_name || 'Author' }}</h5>-->
<!--                <div class="star_rating mb-2">-->
<!--                  <StarRating :rating="product?.getUser?.rating || 0" />-->
<!--                </div>-->
<!--                <div class="star_rating">-->
<!--                  <ul class="space-y-1 text-sm text-gray-300">-->
<!--                    <li class="flex items-center">-->
<!--                      <nuxt-img src="/images/box.png" alt="Products" class="w-5 h-5 mr-1" loading="lazy" />-->
<!--                      {{ product?.getUser?.getProductCount?.count || 0 }} Products-->
<!--                    </li>-->
<!--                    <li class="flex items-center">-->
<!--                      <nuxt-img src="/images/sales.png" alt="Sales" class="w-5 h-5 mr-1" loading="lazy" />-->
<!--                      {{ product?.getUser?.getProductSales || 0 }} Sales-->
<!--                    </li>-->
<!--                  </ul>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import StarRating from '~/components/StarRating.vue';
import D2AnimationPlayer from "~/components/tools/D2AnimationPlayer.vue";
import D3AnimationPlayer from "~/components/tools/D3AnimationPlayer.vue";

import { isUserLoggedIn } from "~/utiles/check_auth";
const route = useRoute();
const router = useRouter()
const slug = route.params.slug;

const comment = ref('');
const isAuthenticated = computed(()=>isUserLoggedIn())



// Fetch product data
const { data, pending, error, refresh } = useMyFetch(`single-details/${slug}`)
// Extract product and product_meta
const product = ref(data.value?.product);
const product_meta = ref(data.value?.product_meta);

// Watch for data changes
watch(data, (newData) => {
  product.value = newData?.product || null;
  product_meta.value = newData?.product_meta || {
    preview_imgs: [],
    videos: [],
    animations: [],
    multi_price: [],
    enable_multi_option: 0,
  };
  // Update selectedPrices reactively
  selectedPrices.value = product_meta.value.multi_price?.find((p) => p.default_price === 1)?.price_id
      ? [product_meta.value.multi_price.find((p) => p.default_price === 1).price_id]
      : [];
});

// Product data (mocked or fetched from API)
// const product = ref({
//   name: 'Sample Animation Portfolio',
//   imageUrl: '/images/product.jpg',
//   preview_link: 'https://example.com/preview',
//   description: '<p>This is a sample animation and graphic design portfolio.</p>',
//   is_free: '0',
//   price: '99.99',
//   offer_price: '79.99',
//   is_offer: '1',
//   rating: 4.5,
//   sale_count: 150,
//   tags: 'animation, logo, graphic-design',
//   published_at: '2023-01-01',
//   last_modified: '2023-06-01',
//   product_details: [
//     { key: 'Category', value: 'Animation & Graphics' },
//     { key: 'Version', value: '1.0' },
//   ],
//   id: 1,
//   slug: slug,
//   getUser: {
//     full_name: 'John Doe',
//     rating: 4.8,
//     getProductCount: { count: 10 },
//     getProductSales: 500,
//   },
//   getProductReview: { count: 25 },
//   getProductComment: { count: 10 },
// });
//
// const product_meta = ref({
//   preview_imgs: ['/images/preview1.jpg', '/images/preview2.jpg'],
//   videos: [
//     { url: '/videos/sample-animation.mp4', type: 'local' },
//     { url: 'https://www.youtube.com/embed/sample-video', type: 'external' },
//   ],
//   animations: [
//     { src: '/animations/sample-2d.json', type: '2d' },
//     { src: '/animations/sample-3d.glb', type: '3d' },
//   ],
//   multi_price: [
//     { price_id: 1, option_name: 'Basic Package', price: '49.99', offer_price: '39.99', default_price: 1 },
//     { price_id: 2, option_name: 'Premium Package', price: '99.99', offer_price: '79.99', default_price: 0 },
//   ],
//   enable_multi_option: 0,
// });

const price_symbol = '$';

// Tab management
const tabs = [
  { id: 'description', label: 'Description' },
  { id: 'previews', label: 'Previews' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'comments', label: 'Comments' },
];
const activeTab = ref('description');

// Filters
const filterRating = ref('');
const filterMonth = ref('');
const filterYear = ref(new Date().getFullYear().toString());
const monthNames = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];
const currentYear = new Date().getFullYear();

// Comment

const selectedPrices = ref([product_meta?.value?.multi_price?.find(p => p.default_price === 1)?.price_id]);

// Methods
const searchRating = () => {
  console.log('Filtering reviews by rating:', filterRating.value);
  // Implement review filtering logic
};

const searchComment = () => {
  console.log('Filtering comments by:', filterMonth.value, filterYear.value);
  // Implement comment filtering logic
};

const addComment = () => {
  if (!isAuthenticated) return;
  console.log('Adding comment:', comment.value, 'for product:', product?.value?.id);
  // Implement comment submission
  comment.value = '';
};

const addToCart = async(type = '', buyNow = 0) => {
  console.log('Adding to cart:', { slug: product?.value?.slug, prices: selectedPrices.value, buyNow });
  const {data,status,error} = await useMyFetch(`cart`,{
    body:{ slug: product?.value?.slug, prices: selectedPrices.value, buyNow },
    method:'POST',
    headers:{
      Authorization: `Bearer ${useCookie('CSRF_ASRO_TOKEN')?.value}`
    }
  })
  router.push('/dashboard/cart')

  // Implement cart logic
};

const openLoginModal = () => {
  router.push(`/auth/login?to=${route.fullPath}`)
  // Implement modal logic (e.g., using a modal component)
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
</script>