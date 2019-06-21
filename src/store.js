import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //是否登录状态
    isLogin:false
  },
  mutations: {
    changeLogin (state) {
      // 变更状态
      state.count++
      state.isLogin=!state.isLogin;
    }
  },
  actions: {}
});

