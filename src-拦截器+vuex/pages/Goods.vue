<template>
  <div id="goods">
    <h2>首页&nbsp;&nbsp;/<span>商品列表</span></h2>
    <button class="add">添加</button>
    <table border="1">
      <tr>
        <td>一级分类</td>
        <td>二级分类</td>
        <td>商品名称</td>
        <td>销售价</td>
        <td>市场价</td>
        <td>状态</td>
        <td>操作</td>
      </tr>
      <tr v-for="(item,index) in goodsList" :key="index">
        <td>{{item.firstcatename}}</td>
        <td>{{item.secondcatename}}</td>
        <td>{{item.goodsname}}</td>
        <td>{{item.price}}</td>
        <td>{{item.market_price}}</td>
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
export default {
  data() {
    return {
      goodsList: [ ]
    };
  },
  methods: {

  },
  mounted(){
    this.$axios.get("/proxy/api/goodslist").then(res=>{
       console.log(res.data.list);
       this.goodsList=res.data.list
    })
  }
};
</script>
<style lang="">
#goods {
  width: 600px;
}
#goods h2{
    font-size: 16px;
    margin: 10px 0px 0px 15px;
}
#goods h2>span{
  font-size: 16px;
  color: #636569;
  margin-left: 5px;
}
#goods .add{
  margin: 15px 0px 0px 15px;
  width: 60px;
  height: 30px;
  border-radius: 6px;
  outline: none;
  border: none;
  color: #fff;
  background-color:#409EFF ;
}
table {
  margin:0px auto;
  border-collapse: collapse;
  background-color: #fff;
}
td,
th {
  width: 80px;
  height: 40px;
  text-align: center;
}
button {
  cursor: pointer;
}
</style>