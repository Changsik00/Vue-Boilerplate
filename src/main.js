import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import './plugins/axios';
import './plugins/my';


// https://vuejs.org/v2/guide/components-registration.html
const Loading = () => import( /* webpackChunkName: "Header" */ "./components/Loading.vue");
const Snackbar = () => import( /* webpackChunkName: "Snackbar" */ "./components/Snackbar.vue");

Vue.component("Loading", Loading);
Vue.component("Snackbar", Snackbar);

// https://kr.vuejs.org/v2/api/index.html
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')