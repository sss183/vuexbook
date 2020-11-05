<template>
  <div class="classify">
    <h2>首页&nbsp;&nbsp;/<span>分类列表</span></h2>
    <button class="add">添加</button>
    <table border="1">
      <tr>
        <td>分类名称</td>
        <td>状态</td>
        <td class="play">操作</td>
      </tr>
      <tr v-for="(item,index) in cateList" :key="index">
        <td>{{item.catename}}</td>
        <td>
          <button>启用</button>
        </td>
        <td>
          <button>编辑</button>
          <button>删除</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
  export default{
    data(){
      return{
         cateList:[]
      }
    },
    mounted(){
        this.$axios.get("/proxy/api/catelist").then(res=>{
          this.cateList = res.data.list;
        })
     }
  }
</script>
<style lang="">
.classify{
  width: 600px;
}
.classify h2{
    font-size: 16px;
    margin: 10px 0px 0px 26px;
}
.classify h2>span{
  font-size: 16px;
  color: #636569;
  margin-left: 5px;
}
.classify .add{
  margin: 15px 0px 0px 26px;
  width: 60px;
  height: 30px;
  border-radius: 6px;
  outline: none;
  border: none;
  color: #fff;
  background-color:#409EFF ;
}
table {
  margin-left:26px;
  border-collapse: collapse;
  background-color: #fff;
}
td,
th {
  width: 200px;
  height: 40px;
  text-align: center;
}
button {
  cursor: pointer;
}
</style>