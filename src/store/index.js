import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './action';
import getters from './getters';

Vue.use(Vuex);
const state = {
  userInfo: {}, // 用户信息
  address: {}
};

export default new Vuex.Store({
  // store全局状态
  state,
  // 改变store的状态 必须为同步
  mutations,
  // 获取store的信息
  getters,
  // 处理同步事件把异步转同步 this.$store.dispatch('increment') 触发action
  actions
});
