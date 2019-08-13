import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadingCheckSum : 0,
    loadingTimeout : null
  },
  getters: {
    isLoading(state) {
      return state.loadingCheckSum > 0;
    }
  },
  mutations: {
    showLoading(state) {
      state.loadingCheckSum = state.loadingCheckSum + 1;
      if(state.loadingTimeout) {
        clearTimeout(state.loadingTimeout);
      }
      state.loadingTimeout = setTimeout(() => {
        state.loadingTimeout = null;
        state.loadingCheckSum = 0
      }, 5000);
    },
    hideLoading(state) {
      state.loadingCheckSum = state.loadingCheckSum - 1;
      if(state.loadingCheckSum <= 0) {
        clearTimeout(state.loadingTimeout);
        state.loadingTimeout = null;
        state.loadingCheckSum = 0;
      }
    }, 
  },
  actions: {
    showLoading({ commit }) {
      commit("showLoading");
    },
    hideLoading({ commit }) {
      commit("hideLoading");
    }
  }
})
