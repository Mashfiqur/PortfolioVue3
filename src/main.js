
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
import Skill from './components/Skills.vue'

import Toaster from 'v-toaster'
 
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-toaster/dist/v-toaster.css'
 
// optional set default imeout, the default is 10000 (10 seconds).
Vue.use(Toaster, {timeout: 5000})


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
    { path:'/contact', component: Contact },
    { path:'/skills', component: Skill },


  ],
  mode: 'history'
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
