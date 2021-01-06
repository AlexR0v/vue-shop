<template>
  <div class='item'>
    <img
        :src='product.img'
        :alt='product.title'
    >
    <router-link :to='/shop/+product.id'>{{ product.title }}</router-link>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'ShopItem',
  props: {
    product: {
      type: Object,
      default: {}
    }
  }
})
</script>

<style lang='scss'>

.item_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.item {
  max-width: 48%;
  text-align: center;

  p {
    font-size: 22px;
  }
}

</style>
