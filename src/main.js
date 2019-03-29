/* Install Vue */
import Vue from 'vue'
import App from './App.vue'

/* Install Bootstrap */
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

/* Setup Vue */
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
