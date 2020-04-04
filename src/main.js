import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store/store.js'
import VueLazyload from 'vue-lazyload'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//const google = require('../src/assets/jsapi');
//import * from '../src/assets/jsapi'



// set default config
//Vue.$cookies.config('7d')

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require(`./assets/images/loading.gif`),
  loading: require(`./assets/images/loading.gif`),
  attempt: 1
})


Vue.use(BootstrapVue)


//Vue.use(hello);
import Mainpage from '../src/components/main.vue';

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Mainpage,props: true }
]

const router = new VueRouter({
  store,
  routes, // short for `routes: routes`
  mode:'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
