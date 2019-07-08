<template>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">编辑英雄</h2>
    <form>
      <div class="form-group">
        <label for="txtName">英雄名称</label>
        <input
          type="txt"
          class="form-control"
          v-model=" formData.name"
          id="txtName"
          placeholder="英雄名称"
        />
      </div>
      <div class="form-group">
        <label for="sex">英雄性别</label>
        <select class="form-control" v-model=" formData.gender">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <!-- ptrvent 阻止默认行为的执行 -->
      <button @click.prevent="add" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>

//在组建中获取路由参数$route.param.id
import axios from 'axios'
export default {
    //接收外部传递的参数
    props:['id'],
    data() {
        return {
            //双向绑定数据
           formData:{
               name:'',
               gender:'男'
           } 
        }
    },
    //组件加载完毕
    mounted() {
        this.loadDataById()
    },
    methods: {
      //根据id 加载英雄数据
      loadDataById(){
          //发送请求
          axios
            .get(`http://localhost:3000/heroes/${this.id}`)
            .then((res)=>{
                // console.log(res)
                const{data,status}=res;
                if(status===200){
                    this.formData=data
                }
            })
            .catch((err)=>{

            })
      }  
    },
}
</script>

<style>

</style>
