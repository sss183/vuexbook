<template>
    <div class="login">
        <h2>用户登录</h2>
            账号：<input type="text" v-model="info.username"><br>
            密码：<input type="text" v-model="info.password"><br>
            <button @click="login">登录</button> 
    </div> 
 
</template>
<script>
   export default{  
        data(){
           return{
               info:{
                  username:"",
                  password:""               }
           }
       },
       methods:{
           login(){
               this.$axios.post("/proxy/api/userlogin",this.info).then(res=>{
                         console.log(res.list);
                        if(res.code==200){
                            sessionStorage.setItem("token","res.list.token");
                            sessionStorage.setItem("info",JSON.stringify(res.list));
                            // sessionStorage.setItem("isLogin",true);
                            this.$router.replace("/home")
                        }else{
                           alert(res.msg); 
                        }
                 })
               } 
           },
   }

</script>
<style lang="">
    .login{
        width: 400px;
        height: 200px;
        border: 1px solid #e4e4e4;
        text-align: center;
        margin: 20px auto;
    }
    .login h2{
        font-size: 24px;
        margin-top: 10px;
    }
    .login input{
        margin:10px;
        outline: none;
        height: 20px;
    }
    .login button{
        outline: none;
        cursor: pointer;
        width: 40px;
        margin-top: 10px;
    }

</style>
