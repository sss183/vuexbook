<template>
  <div id="index">
    <div class="side">
      <side-bar></side-bar>
    </div>
    <div class="main">
      <div class="header">
         <span @click="loginout">退出登录</span>
        <!-- <router-link to="/login">admin</router-link> -->
      </div>
      <div class="article">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "@/pages/SideBar"
export default {
  data() {
    return {
      flag:false,
    };
  },
  components:{
      SideBar,
  },
  mounted(){

  },
 methods: {
    loginout(){
        // sessionStorage.setItem("isLogin",false);
        // sessionStorage.removeItem("isLogin")
        sessionStorage.clear();
        this.$router.replace("/login")
    }
  }
}
</script>
<style lang="">
#index {
  height: 100%;
  display: flex;
}
#index > .side {
  width: 180px;
  height: 100%;
}
#index > .main {
  flex-grow: 1;
  background-color: #e5e5e5;
}
.nav_bar {
  background-color: #3c3c3c;
  color: #fff;
  height:calc(100% - 10px);
  padding-top: 10px;
}
.nav_bar li {
  margin: 20px;
  cursor: pointer;
}
.header {
  height: 60px;
  background-color: #b3c0d1;
}
.header span{
  float: right;
  text-decoration: none;
  margin: 16px 30px 0px 0px;
  cursor: pointer;
}
.header a {
  float: right;
  text-decoration: none;
  margin: 20px 30px 0px 0px;
}

.sc ul>li:hover a{
  color: #EFC946;
}

.sc a {
  text-decoration: none;
  color: #fff;
}
.sc .active {
  color: #EFC946;
}
</style>