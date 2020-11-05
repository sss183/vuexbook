<template>
  <ul class="nav_bar">
    <li class="sc">
      <router-link to="/home"><i class="iconfont icon-shouye"></i>首页</router-link>
    </li>
    <li class="sc iconfont icon-shezhi" @click="flag=!flag">
      系统设置
      <ul v-show="flag">
        <li><router-link to="/menu" exact-active-class="active">菜单管理</router-link></li>
        <li><router-link to="/role" exact-active-class="active">角色管理</router-link></li>
        <li><router-link to="/manager" exact-active-class="active">管理员管理</router-link></li>
      </ul>
    </li>
    <li class="sc iconfont icon-bao" @click="flag2=!flag2">
     商城管理
      <ul v-show="flag2">
        <li>
          <router-link to="/classify" exact-active-class="active"
            >商品分类</router-link
          >
        </li>
        <li>
          <router-link to="/size" exact-active-class="active"
            >商品规格</router-link
          >
        </li>
        <li>
          <router-link to="/goods" exact-active-class="active"
            >商品管理</router-link
          >
        </li>
        <li>
          <router-link to="/lunbo" exact-active-class="active"
            >轮播图管理</router-link
          >
        </li>
        <li>
          <router-link to="/member" exact-active-class="active"
            >会员管理</router-link
          >
        </li>
        <li>
          <router-link to="/flash" exact-active-class="active"
            >秒杀活动</router-link
          >
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
    export default{
      data(){
        return{
          flag:false,
          flag2:false,
        }
      }
    }
</script>
