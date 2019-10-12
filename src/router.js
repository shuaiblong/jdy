/*
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-09-28 17:54:07
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-12 16:09:03
 */
import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import index from './views/index/index.vue'

Vue.use(Router)
const router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '首页',
      component: index
    },
    {
      path: '/login',
      name: '登录',
      component: () => import( './views/login/login.vue')
    },
    {
      path: '/regist',
      name: '注册',
      component: () => import( './views/regist/regist.vue')
    },
    {
      path: '/forget',
      name: '忘记密码',
      component: () => import( './views/forget/forget.vue')
    },
    {
      path: '/naifen',
      name: '奶粉专区',
      component: () => import( './views/naifen/naifen.vue')
    },
    {
      path: '/sou',
      name: 'sou',
      component: () => import('./views/sou/sou.vue')
    },
    {
      path: '/fenlei',
      name: '分类',
      component: () => import( './views/fenlei/fenlei.vue')
    },
    {
      path: '/shopcar',
      name: '购物车空',
      component: () => import( './views/shopcar/shopcar.vue')
    },
    {
      path: '/shopche',
      name: '购物车有',
      component: () => import( './views/shopcar/shopche.vue')
    },
    {
      path:'/ceshi',
      name:'测试',
      component: () => import( './views/ceshi/ceshi.vue')
    },
    {
      path: '/xbannerlist',
      name: 'xbannerlist',
      component: () => import('./views/index/xbannerlist.vue')
    },
    {
      path: '/renjian',
      name: 'renjian',
      component: () => import('./views/active/renjian.vue')
    },
    {
      path: '/goodxq',
      name: 'goodxq',
      component: () => import('./views/good/goodxq.vue')
    },
    {
      path: '/pingjia',
      name: 'pingjia',
      component: () => import('./views/pingjia/pingjia.vue')
    },
    {
      path:'/dingdan',
      name:'订单',
      component: () => import( './views/dingdan/dingdan.vue')
    },
    {
      path: '/denglu',
      name: 'denglu',
      component: () => import('./views/denglu/denglu.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/index/About.vue')
    // }
  ]
})
export default router