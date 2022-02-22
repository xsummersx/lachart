/*
 * @Author: your name
 * @Date: 2022-02-15 18:53:47
 * @LastEditTime: 2022-02-22 08:59:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lachart\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import { Request } from '@/axios/request'
//使用官方封装的axios的方法调用接口
import axios from "./axios/http"

const app = createApp(App)
app.config.globalProperties.$axios = axios;
app.use(VueAxios,Request.init()).mount('#app')

