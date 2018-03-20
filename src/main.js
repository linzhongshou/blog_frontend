import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './utils/http'
import AmazeVue from 'amaze-vue'
import 'babel-polyfill'
import highlight from './assets/js/highlight'

// Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(AmazeVue)
Vue.use(highlight)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')