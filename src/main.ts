import Vue from 'vue'
import VueCarousel from 'vue-carousel'
import App from './App.vue'
import router from './router'
import store from './store'
import './scss/main.scss'

Vue.config.productionTip = false

Vue.use(VueCarousel)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
