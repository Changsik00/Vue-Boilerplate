// https://github.com/axios/axios
// https://github.com/imcvampire/vue-axios

import Vue from 'vue';
import axios from 'axios';
import store from '../store'

Vue.prototype.$axios = axios;

axios.defaults.timeout = 3000;
axios.defaults.baseURL = "https://reqres.in/api/";


axios.interceptors.request.use(
    config => {
        store.dispatch("showLoading");
        return config;
    },
    error => {
        console.log("#@# Axios error", error)
        store.dispatch("hideLoading");
        return Promise.reject(error.response);
    }
);

axios.interceptors.response.use(
    response => {
        store.dispatch("hideLoading");
        return response;
    },
    error => {
        console.log("#@# Axios error", error)
        store.dispatch("hideLoading");
        return Promise.reject(error.response);
    }
);