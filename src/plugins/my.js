import Vue from "vue";
import store from '../store'

const MyPlugin = function(Vue) {
  Vue.prototype.$showSnackbar = message => {
    store.dispatch("showSnackbar" , message);
  };
  Vue.prototype.$hideSnackbar = () => {
    store.dispatch("hideSnackbar");
  };
};

Vue.use(MyPlugin);
