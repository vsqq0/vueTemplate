import Vue from 'vue';
import FastClick from 'fastclick';
import router from './router';
import store from './store';
import App from './App';

// 开启本地mock 需引入mockjs，不需要请直接注释，首选远程mock，后端不愿意联调配合再本地mock
import './mock';

FastClick.attach(document.body);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box');
