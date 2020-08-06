import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './routes/index'
import { store } from './store/index'
import * as firebase from "firebase/app";

Vue.prototype.$http = axios;
Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyD67nEd_zlkr3o3hnrwy35s08rvIk0f-Qg",
  authDomain: "blog-d24e2.firebaseapp.com",
  databaseURL: "https://blog-d24e2.firebaseio.com",
  projectId: "blog-d24e2",
  storageBucket: "blog-d24e2.appspot.com",
  messagingSenderId: "274757690132",
  appId: "1:274757690132:web:ee0d4aff601a24b4"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
