import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      name: 'index',
      path: '/index',
      component: resolve => require(['@/components/Index.vue'], resolve)
    },
    {
      name: 'article',
      path: '/article',
      component: resolve => require(['@/components/Article.vue'], resolve)
    },
    {
      name: 'about',
      path: '/about',
      component: resolve => require(['@/components/About.vue'], resolve)
    }
  ]
})
