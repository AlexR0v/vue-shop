<template>
  <div>
    <div class='navbar'>
      <div class='navbar-content'>
        <div class='logo'>VUE</div>
        <div>
          <router-link
              v-for='(link, index) in links'
              :key='index'
              :to='link.path'
          >{{ link.title }}
          </router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      links: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
      ]
    }
  }
})

</script>

<style lang='scss'>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
