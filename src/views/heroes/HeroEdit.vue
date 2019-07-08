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
export default {
    data() {
        return {
            //双向绑定数据
           formData:{
               name:'',
               gender:'男'
           } 
        }
    },
}
</script>

<style>

</style>
