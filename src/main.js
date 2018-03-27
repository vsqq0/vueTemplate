import Vue from 'vue';
import FastClick from 'fastclick';
import router from './router';
import store from './store';
import App from './App';

FastClick.attach(document.body);

Vue.config.productionTip = false;

// 开启easy-mock如不需要,请设为false https://easy-mock.com/project/5ab89b57ff419d770cd3cb4b
Vue.prototype.env_mock = true;

// 开启本地mock 需引入mockjs，不需要请直接注释，首选远程mock，后端不愿意联调配合再本地mock
// import './mock';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box');
