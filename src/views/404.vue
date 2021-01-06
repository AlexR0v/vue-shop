<template>
  <div class='wrapper-content wrapper-content--fixed'>
    <section>
      <div class='container'>
        <h1 class='title'>PAGE NOT FOUND!</h1>
        <p>Go to <router-link to='/' class='link'>home</router-link> page</p>
      </div>
    </section>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'NotFound'
})
</script>

<style
    lang='scss'
    scoped
>

.wrapper-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  text-align: center;
}

</style>
