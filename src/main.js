import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//导入样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

//导入vue-router
import VueRouter from 'vue-router'
//配置vue的插件 vue-router
Vue .use(VueRouter)

//导入英雄列表的组件
import HeroList from './views/heroes/HeroList.vue'
import WeaponList from './views/weapons/WeaponList.vue'
import EquipList from './views/equips/EquipList.vue'
//创建路由对象规则
const router=new VueRouter({
  //配置路由规则
  routes:[
    {name:'home',path:'/',redirect:'/heroes'},
    {name:'heroes',path:'/heroes',component:HeroList},
    {name:'weapons',path:'/weapons',component:WeaponList},
    {name:'equipss',path:'/equips',component:EquipList}


  ]
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
