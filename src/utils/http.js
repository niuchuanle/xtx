// axios 配置
import axios from "axios";

 const httpInstance =axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})
//请求 拦截器和响应拦截器
httpInstance.interceptors.request.use(config => {
    return config;
},e=>Promise.reject(e));
 httpInstance.interceptors.response.use(res=>res.data,e=>{
     return Promise.reject(e);
 })


export default  httpInstance
