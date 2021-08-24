import axios from 'axios'
import QS from 'qs'
import Cache from './cache'
import { ElMessage } from "element-plus"
import route from '@router'

//实例HTTP
let http=axios.create({
    timeout:14*1000,
    baseURL: import.meta.env.VUE_APP_BASE_API,
    responseType:'json',
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        Authorization:""
    }
});
/**
 * http请求配置
 */
http.interceptors.request.use(
    config=>{
        if(Cache.getLS("token")){
            //每次请求判断是否存在token，如果存在赋值到header中
            config.headers.authorization=Cache.getLS("token");
        }
        return config;
    },
    error=>{
        console.log(error) // for debug
        ElMessage.error(error);
        return Promise.reject(error);
    }
);
/**
 * http响应配置
 */
http.interceptors.response.use(
  response=>{
      //通过http请求的状态码判断服务端是否返回正常，根据业务架构可在200状态码下，细分业务状态吗
      //   switch(response.code){
      //     case 200:
      //         return Promise.resolve(response);
      //     case 400:
      //         Message.error(response.desc);
      //         break;
      //     case 500:
      //         Message.error(response.desc);
      //         break;
      //   }
      if(response.data.code===200){
        return Promise.resolve(response.data);
      }else{
        if(response.data.code===508){
            Cache.rmLS("token")
            route.push("/login");
        }
        let error=response.data.desc;
        ElMessage.error(error);
        return Promise.reject(error);
      }
  },
  error=>{
      const {response}=error;
      if(response){
          console.log(response.data);
          ELMessage.error(response.data.desc);
      }else{
          if(!window.navigator.onLine){
            //断网情况下处理逻辑
            let unLineStr="网络不给力，请检查网络后再试";
            ElMessage.error(unLineStr);
            return Promise.reject(unLineStr);
          }else{
            ElMessage.error(error);
            return Promise.reject(error);
          }
      }
  }
);



/**
 * post请求接口
 * @param url
 * @param params
 * @returns {Promise<unknown>}
 */
export function post(url,params){
    return new Promise((resolve,reject)=>{
        http.post(url,QS.stringify(params)).then(res=>{
            resolve(res.data);
        }).catch(error=>{
            ElMessage.error(error);
        })
    })
};

/**
 * get请求接口
 * @param url
 * @param params
 * @returns {Promise<unknown>}
 */
export function get(url,params){
    return new Promise((resolve,reject)=>{
        http.get(url,{params:params}).then(res=>{
            resolve(res.data);
        }).catch(error=>{
            ElMessage.error(error);
        })
    }).catch((e) => {})
};

export default http;