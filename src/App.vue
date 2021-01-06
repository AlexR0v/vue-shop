<template>
  <div class='wrapper'>
    <header>
      <div class='navbar'>
        <div class='container'>
          <div class='navbar-content'>
            <div class='logo'>
              VUE
            </div>
            <ul class='navbar-list'>
              <li
                  class='navbar-item'
                  v-for='(link, index) in links'
                  :key='index'
              >
                <router-link
                    class='navbar-link'
                    :to='link.path'
                >{{ link.title }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
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
        {title: 'Shop', path: '/shop'},
      ]
    }
  }
})

</script>

<style lang='scss'>
.navbar-link {
  &.router-link-exact-active {
    color: #5247e7
  }
}
</style>
