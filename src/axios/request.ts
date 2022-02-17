/*
 * @Author: your name
 * @Date: 2022-02-17 10:41:06
 * @LastEditTime: 2022-02-17 13:49:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lachart\src\axios\request.ts
 */

import axios,{AxiosInstance,AxiosRequestConfig,AxiosResponse} from 'axios';
export class Request {
    public static axiosInstantce:AxiosInstance;
    //创建初始化方法，绑定请求拦截器
    public static init(){
        //创建axios实例
        const bUrl = import.meta.env.VITE_APP_BASE_API
        this.axiosInstantce = axios.create({
            baseURL:bUrl+'api/',
            timeout:1000 * 60 * 5 //超时时间5分钟
        })
        //初始化拦截器
        this.initInterceptors();
        return axios;
    }
    //初始化拦截器方法
    public static initInterceptors(){
        //设置post请求头
        this.axiosInstantce.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        // 请求拦截器
        // 每次请求前，如果存在token则在拦截器上带上token】
        this.axiosInstantce.interceptors.request.use(
            (config:AxiosRequestConfig) =>{
                // 登录流程控制中，根据本地是否存在token判断用户的登录情况
                // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
                // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
                // const token = localStorage.getItem("ACCESS_TOKEN");
                // if(token){
                //     config.headers.Authorization = 'Bearer'+token;
                // }
                return config;
            },
            (error:any)=>{
                console.log(error);
            }
        );
        //响应拦截器
        this.axiosInstantce.interceptors.response.use(
            //请求成功
            (response:AxiosResponse)=>{
                if(response.status ===200){
                    return response;
                }else{
                    Request.errorHandle(response);
                    return response;
                }
            },
            (error:any)=>{
                const {response} = error;
                if(response){
                    //请求已发出，但是不在2XX范围
                    Request.errorHandle(response);
                    return Promise.reject(response.data);
                }else{
                    console.log("网络异常连接，请稍后~");
                }
            }
        );
    }
    // http握手错误
    // 响应回调根据不同操作判断
    private static errorHandle(res:any){
        switch(res.status){
            case 401:
                break;
            case 403:
                break;
            case 404:
                console.log("请求资源不存在");
                break;
            default:
                console.log("连接错误")
        }
    }
}
