// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './vuex/store'
import Home from './page/home.vue'
import VueRouter from 'vue-router'
import PrDisplay from './components/prDisplay'
import BubbleConfig from './components/bubbleConfig'
import BubbleConfig1 from './components/bubbleConfig1'
import BodyChart from './components/bodyChart/index'
Vue.use(VueRouter);
//路由的配置
const routes = [
  { path: '/', component: Home,children:[
      {path: '',component:PrDisplay},
      {path: 'bubbleconfig',component:BubbleConfig},
      {path: 'bubbleconfig1',component:BubbleConfig1},
      {path: 'disChart', component:BodyChart }
  ]}
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

//在vm实例中加入路由和全局状态控制器
const vm = new Vue({
  router,
  store
}).$mount('#app')