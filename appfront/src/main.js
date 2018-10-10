// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

var vm = new Vue({
  el: '#skillobm',
  router,
  // render: h => h(this.vm),
  data: {
    sixDonecount: 25,
    yscount: 5,
    timer: null,
    isEnd: true
  },
  methods: {
    dojishi: function () {
      this.yscount--
      this.sixDonecount--
      if (this.yscount === 0) {
        this.yscount = 30
      };
      if (this.sixDonecount === 0) {
        this.sixDonecount = 45
      };
    },
    dostart: function () {
      this.timer = setInterval(this.dojishi, 1000)
      this.isEnd = false
    },
    doend: function () {
      clearInterval(this.timer)
      this.isEnd = true
      this.yscount = 5
      this.sixDonecount = 25
    }
  }
})

Vue.use({
  // ElementUI,
  vm
})
