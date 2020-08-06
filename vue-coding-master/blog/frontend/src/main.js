import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './routes/index'
import { store } from './store/index'

Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
