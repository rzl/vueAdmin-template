import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import Layout from '../views/layout/Layout'

Vue.use(Router)

 /**
  * icon : the icon show in the sidebar
  * hidden : if `hidden:true` will not show in the sidebar
  * redirect : if `redirect:noredirect` will not redirct in the levelbar
  * noDropdown : if `noDropdown:true` will not has submenu in the sidebar
  * meta : `{ role: ['admin'] }`  will control the page role
  **/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{ path: 'dashboard', component: _import('dashboard/index') }]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/monthSign',
    component: Layout,
    icon: 'zujian',
    noDropdown: true,
    children: [
      { path: 'index', name: '当月签到', icon: 'zonghe', component: _import('monthSign/index') },
      { path: 'daySign/:day', name: '日期签到查询', icon: 'zonghe', component: _import('monthSign/daySign') }
    ]
  },
  {
    path: '/querySign',
    component: Layout,
    icon: 'zujian',
    noDropdown: true,
    children: [
      { path: 'index', name: '签到查询', icon: 'zonghe', component: _import('querySign/index') },
      { path: 'timeSign/:startDay/:endDay', name: '时间段签到查询', icon: 'zonghe', component: _import('querySign/result') }
    ]
  },
  {
    path: '/peopleManage',
    component: Layout,
    icon: 'zujian',
    noDropdown: true,
    children: [
      { path: 'index', name: '人员管理', icon: 'yonghuming', component: _import('peopleManage/index') },
    ]
  },
  {
    path: '/setting',
    component: Layout,
    icon: 'zujian',
    noDropdown: true,
    children: [
      { path: 'index', name: '设置', icon: 'zonghe', component: _import('setting/index') }
    ]
  },
 /* {
    path: '/example',
    component: Layout,
    redirect: 'noredirect',
    name: 'Example',
    icon: 'zujian',
    children: [
      { path: 'index', name: 'Form', icon: 'zonghe', component: _import('page/form') }
    ]
  },

  {
    path: '/table',
    component: Layout,
    redirect: '/table/index',
    icon: 'tubiao',
    noDropdown: true,
    children: [{ path: 'index', name: 'Table', component: _import('table/index'), meta: { role: ['admin'] }}]
  },*/

  //{ path: '*', redirect: '/404', hidden: true }
]
