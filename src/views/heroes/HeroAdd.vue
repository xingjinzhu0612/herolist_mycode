<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
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
      <button @click.prevent="add" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      //1.绑定文本框
      formData: {
        name: "",
        gender: "男"
      }
    };
  },
  methods: {
    //2.点击提交按钮,添加英雄
    add() {
      this.axios
        .post("heroes", this.formData)
        .then(res => {
          const status = res.status;
          if (status === 201) {
            //3跳转到列表组件
            this.$router.push({ name: "heroes" });
          } else {
            alert("添加失败");
          }
        })
        .catch(err => {
          alert("服务器错误" + err);
        });
    }
  }
};
</script>

<style>
</style>
