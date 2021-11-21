<template>
  <div class="Item">
    <div class="wrap-img">
      <img :src="product.img" :alt="product.title" />
    </div>
    <router-link :to="/shop/ + product.id" class="link">{{
      product.title
    }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.Item {
  max-width: 300px;
  width: 100%;
}

.Item .wrap-img {
  width: 100%;
  height: 300px;
  position: relative;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>