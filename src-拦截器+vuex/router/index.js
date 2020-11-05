import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Home from  '@/pages/Home'
import Goods from '@/pages/Goods'
import Classify from '@/pages/Classify'
import Member from '@/pages/Member'
import Size from '@/pages/Size'
import Flash from '@/pages/Flash'
import Lunbo from '@/pages/Lunbo'
import Login from '@/pages/Login'
import Menu from '@/pages/Menu'
import Role from '@/pages/Role'
import Manager from '@/pages/Manager'
// 重复点击报错
const originalPush = Router.prototype.push

Router.prototype.push = function push(location) { 
  return originalPush.call(this, location).catch(err => err) 
}

Vue.use(Router)

let router =  new Router({
  routes: [
    {
     path:'/',
     component:Index,
     children:[
       {
        path:"home",
        component:Home
      },
      {
        path:"menu",
        component:Menu
      },
      {
        path:"role",
        component:Role
      },
      {
        path:"manager",
        component:Manager
      },
      {
        path:"classify",
        component:Classify
      },{
        path:"size",
        component:Size
      },{
        path:"goods",
        component:Goods
      },{
        path:"lunbo",
        component:Lunbo
      },
      {
       path:"member",
       component:Member
     },
     {
      path:"flash",
      component:Flash,
     },
     {
      path:"",
      redirect:"/home",
    }]
    },
    {
      path:'/login',
      component:Login
     }
  ]
});

/* router.beforeEach((to,from,next)=>{
  //登录状态
    // let isLogin =sessionStorage.getItem("isLogin")?JSON.parse(sessionStorage.getItem("isLogin")):false;
    let isLogin =sessionStorage.getItem("token")?sessionStorage.getItem("token"):false;
    if(isLogin){
      if(to.path=="/login"){
        next(false);//取消本次导航
      }else{
        next();
      }
    }else{
      if(to.path=="/login"){
        next();
      }else{
        next("/login")
      }
    }

}) */
export default router;
