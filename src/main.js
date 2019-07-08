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

//创建路由对象规则
const router=new VueRouter({
  routes:[

  ]
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
