import Vue from 'vue';
import Router from 'vue-router';

const home = r => require.ensure([], () => r(require('@/routes/home')), 'js1');
const list = r => require.ensure([], () => r(require('@/routes/list')), 'js2');
const userInfo = r =>
  require.ensure([], () => r(require('@/routes/userInfo')), 'js3');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: userInfo
    }
  ]
});
