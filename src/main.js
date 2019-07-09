// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

import store from './store'

import 'common/stylus/index.styl'
// 导入store

// 使用vue-lazyload 图片默认
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

// 对vue-lazyload组件进行注册
Vue.use(VueLazyLoad, {
  // 设置加载图片options
  loading: 'common/images/default.png'
})

// 使用fastclick   移动端延迟点击
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
