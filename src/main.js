// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill';//解决ES6不兼容
import fastclick from 'fastclick'

Vue.use(VueAwesomeSwiper);
Vue.use(VueMaterial);
Vue.material.registerTheme({
  default: {
    primary: {
      color: 'red',
      hue: 700
    }
  }
})

fastclick.attach(document.body)  // 解决移动端点击延迟300毫秒

Vue.config.productionTip = false

import './assets/css/reset.css'
import './assets/css/common.css'
import 'animate.css'

/*
router.beforeEach((to, from, next) => {
  // 全局钩子：用来做loading...
  console.log('路由切换');
  next();
});

router.afterEach(route => {
  console.log('路由切换完成');
});
*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
