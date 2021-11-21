<template>
  <div class="container">
    <h1>ShopPage</h1>
    <div class="wrap_list">
      <shopItem
        v-for="product in shopList"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import shopItem from "@/components/ShopItem.vue";
export default {
  components: {
    shopItem,
  },
  data() {
    return {
      shopList: null,
    };
  },
  created() {
    this.shopList = this.$store.getters.getShopList;
  },
};
</script>

<style lang="scss">
.wrap_list {
  display: flex;
  flex-wrap: wrap;
  grid-gap: 20px;
}
</style>