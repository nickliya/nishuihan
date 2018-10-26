import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
import wyc from './views/wyc.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '舞阳城',
      component: wyc,
    },
    {
      path: '/wl',
      name: '武林',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/wlfyl.vue'),
    },
    {
      path: '/ps',
      name: '跑商',
      component: () => import('./views/bhps.vue'),
    },
  ],
});
