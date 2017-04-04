// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './vuex/store'
import Home from './page/home.vue'
import VueRouter from 'vue-router'
import Bubble from './page/bubble' 
import PrDisplay from './components/prDisplay'
import BubbleConfig from './components/bubbleConfig'
import BubbleConfig1 from './components/bubbleConfig1'
import BodyChart from './components/bodyChart/index'
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home,children:[
      {path: '',component:PrDisplay},
      {path: 'bubbleconfig',component:BubbleConfig},
      {path: 'bubbleconfig1',component:BubbleConfig1},
      {path: 'disChart', component:BodyChart }
  ]},
  { path: '/bubble', component: Bubble }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
const vm = new Vue({
  router,
  store
}).$mount('#app')