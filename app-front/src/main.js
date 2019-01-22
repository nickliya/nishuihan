import Vue from 'vue';
import { message } from 'ant-design-vue';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.prototype.$message = message;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

