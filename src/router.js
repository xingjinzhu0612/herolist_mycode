//路由模块
import Vue from 'vue'
//导入vue-router
import VueRouter from 'vue-router'
//配置vue的插件 vue-router
Vue .use(VueRouter)

//导入英雄列表的组件
import HeroList from './views/heroes/HeroList.vue'
import WeaponList from './views/weapons/WeaponList.vue'
import EquipList from './views/equips/EquipList.vue'

//导入添加英雄的组件
import HeroAdd from './views/heroes/HeroAdd.vue'
//创建路由对象规则
const router=new VueRouter({
  linkActiveClass:'active',
  //配置路由规则
  routes:[
    {name:'home',path:'/',redirect:'/heroes'},
    {name:'heroes',path:'/heroes',component:HeroList},
    {name:'weapons',path:'/weapons',component:WeaponList},
    {name:'equipss',path:'/equips',component:EquipList},
    {name:'heroesadd',path:'/heroes/add',component:HeroAdd},



  ]
})

//导出路由对象
export default router