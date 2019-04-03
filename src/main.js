/* Install Vue */
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import VueResource from 'vue-resource'
import { store } from './store/store' 

/* Install Bootstrap */
Vue.use(BootstrapVue)

/* Install Vue Router */
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})

/* Setup Vue Resource */
Vue.use(VueResource)
Vue.http.options.root = 'https://buzz-236307.firebaseio.com/'

/* Setup Vue */
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
