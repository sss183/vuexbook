import axios from "axios"
// 全局默认配置：超时时间
axios.defaults.timeout = 3000;

//定义请求拦截器   config:请求配置对象
axios.interceptors.request.use(config => {
  // Do something before request is sent
  // console.log(config)
  let token = sessionStorage.getItem("token")?sessionStorage.getItem("token"):"";
  config.headers.Authorization = token;
  console.log(config);
  return config;
}, error => {
  // Do something with request error
  return Promise.reject(error);
});

//定义请求拦截器：响应拦截器 response:响应对象
axios.interceptors.response.use(response => {
  // Do something before response is sent
  // console.log(response);
  // return response;
  // 
  return response.data;
}, error => {
  // Do something with response error
  return Promise.reject(error);
});


// 自己封装的 get 方法
// @url:路径   @params:请求参数
 function get(url,params={}){
    /* 
    axios实例化： instance
    let token = sessionStorage.getItem("token")?sessionStorage.getItem("token"):"";
    const instance = axios.create({
        timeout: 1000,
        headers:{
            "Authorization":token 
        }
    });

    return instance({
        url,
        method:"get",
        params,
    }); */

  return new Promise((res,rej)=>{
        axios({
            url,
            method:"get",
            params,
        }).then(data=>{
            res(data);
        }).catch(err=>{
            rej(err);
        })
    })
} 

/// 自己封装的 post 方法
// @url:路径   @data:请求参数
 function post(url,data={}){
    return new Promise((res,rej)=>{
        axios({
            url,
            method:"post",
            data,
        }).then(data=>{
            res(data);
        }).catch(err=>{
            rej(err);
        })
    })
}


//  export default axios;
export default {
    get,
    post,
    // all:axios.all,
    // spread:axios.spread
}