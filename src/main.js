// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Home from './page/home.vue'
import VueRouter from 'vue-router'
import Detail from './page/detail' 
import PrDisplay from './components/prDisplay'
import BubbleConfig from './components/bubbleConfig'
Vue.use(VueRouter);

const routes = [
  { path: '/home', component: Home,children:[
      {path: '',component:PrDisplay},
      {path: 'bubbleconfig',component:BubbleConfig}
  ]},
  { path: '/detail', component: Detail }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
const app = new Vue({
  router
}).$mount('#app')