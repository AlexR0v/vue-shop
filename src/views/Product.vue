<template>
  <div class='wrapper-content wrapper-content--fixed'>
    <section>
      <div class='container'>
        <div class='product_wrapper'>
          <div class='product-slider'>
            <carousel
                :per-page='1'
                :pagination-enabled='true'
                pagination-color='#b3b3b3'
                pagination-active-color='#494ce8'
            >
              <slide
                  v-for='(slide, index) in product.gallery'
                  :key='index'
              >
                <img
                    :src='slide.img'
                    :alt='slide.name'
                >
              </slide>
            </carousel>
          </div>
          <div class='product-content'>
            <h1 class='title'>{{ product.title }}</h1>
            <p>{{ product.descr }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'Product',
  data() {
    return {
      product: null
    }
  },
  created() {
    let id = this.$route.params.id
    this.product = this.$store.getters.getProduct(id)
  }
})
</script>

<style
    lang='scss'
>
.product_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-slider, .product-content {
  max-width: 48%;
  text-align: center;
}

.VueCarousel-inner{
  visibility: visible !important;
  flex-basis: 100%!important;
  width: 100%!important;
}

</style>
