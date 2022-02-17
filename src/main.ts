/*
 * @Author: your name
 * @Date: 2022-02-15 18:53:47
 * @LastEditTime: 2022-02-17 18:22:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lachart\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import { Request } from '@/axios/request'
import {createPinia} from 'pinia';
//创建实例
const pinia = createPinia();
// //全局引入样式
import "element-plus/theme-chalk/index.css";


createApp(App).use(VueAxios,Request.init()).use(pinia).mount('#app')
