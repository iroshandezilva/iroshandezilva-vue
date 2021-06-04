import Vue from 'vue'
import App from './App.vue'
import './index.css'
import VueRouter from "vue-router";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home";

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/about-me', component: AboutMe },
  { path: '/contact-me', component: ContactMe },
  { path: '/', component: Home },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
