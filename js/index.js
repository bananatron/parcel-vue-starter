import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';
// import VueRouter from 'vue-router/dist/vue-router.esm.js';

import HelloWorld from './components/helloWorld/HelloWorld';
import ButtonClicker from './components/buttonClicker/ButtonClicker';
import Navigation from './components/navigation/Navigation';
import User from './components/user/User';


Vue.use(VueRouter)

const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/bar', component: Bar },
  { path: '/user', component: User },
  { path: '/user/:id', component: User },
]

const router = new VueRouter({
  routes: routes
})

const app = new Vue({
  router
}).$mount('#app')
