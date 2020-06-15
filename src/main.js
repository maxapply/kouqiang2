import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/assets/css/index.less'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import BaiduMap from 'vue-baidu-map'

// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper/* { default options with global component } */)
Vue.use(BaiduMap, {
  ak: 'X2455as78Q7aVDj5nWMRKBLKWly7pWdq'
})

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
