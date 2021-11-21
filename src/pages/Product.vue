<template>
  <div class="container">
    <div class="product_wraper">
      <div class="product_slider">
        <carousel :items-to-show="1">
          <slide v-for="slide in product.gallery" :key="slide">
            <div class="wrap-img product">
              <img :src="slide.img" :alt="product.title" />
            </div>
          </slide>

          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
        <!-- <div class="wrap-img product">
          <img :src="product.img" :alt="product.title" />
        </div> -->
      </div>
      <div class="produc_content">
        <h1>{{ product.title }}</h1>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      product: null,
    };
  },
  created() {
    let id = this.$route.params.id;
    this.product = this.$store.getters.getProduct(id);
  },
};
</script>

<style lang="scss">
.wrap-img.product {
  max-width: 400px;
  width: 100%;
  height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  img {
    position: absolute;
    widows: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.product_wraper {
  display: flex;
  justify-content: space-between;
}

.product_slider,
.produc_content {
  width: 49%;
}

.produc_content {
}
</style>