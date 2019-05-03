import Vue from 'vue'
import App from './App.vue'
import BootrapsVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import Axios from 'axios'
import {routes} from './router/routes'
import firebase from 'firebase'
import firestore from 'firebase/firestore'
Vue.config.productionTip = false
Vue.use(BootrapsVue)
Vue.use(Axios)
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   if (requiresAuth && !currentUser) next('login');
//   else if (!requiresAuth && currentUser) next('home');
//   else next();
// });
