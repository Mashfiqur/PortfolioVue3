
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Education from './components/Education.vue'
import Experience from './components/Experience.vue'
import ProjectJson from './components/ProjectJson.vue'
import Personal from './components/Personal.vue'
import Reference from './components/Reference.vue'
import Contact from './components/Contact.vue'



Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path:'/', component: Home },
    { path:'/education', component: Education },
    { path:'/experience', component: Experience },
    { path:'/projects', component: ProjectJson },
    { path:'/personal', component: Personal },
    { path:'/reference', component: Reference },
    { path:'/contact', component: Contact }

  ],
  mode: 'history'
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
