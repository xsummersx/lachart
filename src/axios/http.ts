/*
 * @Author: your name
 * @Date: 2022-02-21 20:08:31
 * @LastEditTime: 2022-02-21 20:16:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lachart\src\axios\http.ts
 */
import axios,{AxiosRequestConfig,AxiosResponse} from 'axios'

//请求拦截
axios.interceptors.request.use((config:AxiosRequestConfig)=>{
    //请求拦截器
    return config
})
axios.interceptors.response.use((response:AxiosResponse)=>{
    return response
},error=>{
    return Promise.reject(error);
})

//响应拦截
export default axios;