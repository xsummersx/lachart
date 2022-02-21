/*
 * @Author: your name
 * @Date: 2022-02-15 18:53:47
 * @LastEditTime: 2022-02-21 20:00:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lachart\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [vue(),
    //elemetnUI配置
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })],
  define:{
    "process.env":{}
  },
  base:'./',//如果不配置base打包后找不到根目录的IP端口
  resolve:{
    alias:{
      "@":"/src/"
    }
  },
  // server: {
  //   port: 3000,
  //   open: false, //自动打开 
  //   base: "./ ", //生产环境路径
  //   proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
  //     // 正则表达式写法
  //     '^/api': {
  //       target: 'http://xxx.xxx.xxx.xxx:9999', // 后端服务实际地址
  //       changeOrigin: true, //开启代理
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // }
})
