/*
 * @Author: your name
 * @Date: 2022-02-15 18:53:47
 * @LastEditTime: 2022-02-17 11:50:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lachart\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import { Request } from '@/axios/request'


createApp(App).use(VueAxios,Request.init()).mount('#app')
