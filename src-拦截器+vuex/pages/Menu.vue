<template>
  <div class="menu">
    <h2>首页&nbsp;&nbsp;/<span>菜单列表</span></h2>
    <button class="add">添加</button>
    <table border="1">
      <tr>
        <td>名称</td>
        <td>图标</td>
        <td>类型</td>
        <td>菜单URL</td>
        <td>操作</td>
      </tr>
      <tr>
        <td class="show" @click="flag=!flag">系统设置</td>
        <td><i class="iconfont icon-shezhi"></i></td>
        <td>
          <button class="type">目录</button>
        </td>
        <td></td>
        <td>
          <button>编辑</button>
          <button>删除</button>
        </td>
      </tr>
      <tr v-show="flag" v-for="item in menuList.list1" :key="item.id">
        <td class="txt">{{ item.title }}</td>
        <td></td>
        <td>
          <button class="type type2">菜单</button>
        </td>
        <td>{{ item.url }}</td>
        <td>
          <button>编辑</button>
          <button @click="delFn(item.id)">删除</button>
        </td>
      </tr>
      <tr>
        <td class="show" @click="flag2=!flag2">商城管理</td>
        <td><i class="iconfont icon-bao"></i></td>
        <td>
          <button class="type">目录</button>
        </td>
        <td></td>
        <td>
          <button >编辑</button>
          <button>删除</button>
        </td>
      </tr>
      <tr v-for="item in menuList.list2" :key="item.id" v-show="flag2">
        <td class="txt">{{ item.title }}</td>
        <td></td>
        <td>
          <button class="type type2">菜单</button>
        </td>
        <td>{{ item.url }}</td>
        <td>
          <button >编辑</button>
          <button @click="delFn2(item.id)">删除</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag:false,
      flag2:false,
      menuList:{list1:[],list2:[]}
    };
  },
  methods:{
    delFn(i){
      let index =  this.menuList.list1.findIndex(item=>item.id==i)
      this.menuList.list1.splice(index,1);
    },
    delFn2(i){
      let index =  this.menuList.list2.findIndex(item=>item.id==i)
      this.menuList.list2.splice(index,1);
    }
  },
  mounted() {
    this.$axios.get("/proxy/api/menulist").then((res) => {

       let list1  = res.data.list.filter(item=>item.pid===1)
       this.menuList.list1 = list1

      let list2  = res.data.list.filter(item=>item.pid===8)
         this.menuList.list2 = list2

    });
  },
};
</script>
<style lang="">
.menu {
  width: 700px;
}
.menu h2 {
  font-size: 16px;
  margin: 10px 0px 0px 26px;
}
.menu h2 > span {
  font-size: 16px;
  color: #636569;
  margin-left: 5px;
}
.menu .add {
  margin: 15px 0px 0px 26px;
  width: 60px;
  height: 30px;
  border-radius: 6px;
  outline: none;
  border: none;
  color: #fff;
  background-color: #409eff;
}
table {
  margin-left: 26px;
  border-collapse: collapse;
  background-color: #fff;
}
td,
th {
  width: 160px;
  height: 40px;
  text-align: center;
}
button {
  cursor: pointer;
}
.type {
  width: 36px;
  height: 20px;
  border-radius: 3px;
  border: none;
  outline: none;
  color: #76b9ff;
  background-color: #ecf5ff;
  border: 1px solid #dcedff;
}
.type2{
  color: #6BC552;
  background-color: #F0F9EB;
  border: 1px solid #E4F4DB;
}
.show{
  cursor: pointer;
}
.txt{
  text-align:left;
 padding-left: 86px;
}
</style>