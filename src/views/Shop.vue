<template>
  <div class='wrapper-content wrapper-content--fixed'>
    <section>
      <div class='container'>
        <h1>Shop page</h1>
        <div class='item_wrapper'>
          <shop-item
              v-for='product in shopList'
              :key='product.id'
              :product='product'
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import ShopItem from '../components/ShopItem'

export default Vue.extend({
  components: {
    'shop-item': ShopItem
  },
  data () {
    return {
      shopList: null
    }
  },
  created () {
    this.shopList = this.$store.getters.getShopList
  }
})
</script>
