/* Install Vue */
import Vue from 'vue'
import App from './App.vue'

/* Install Bootstrap */
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

/* Install Vue Router */
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import { routes } from './routes.js'
const router = new VueRouter({
  mode: 'history',
  routes
})

/* Setup Vue */
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
