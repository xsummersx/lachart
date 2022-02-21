<!--
 * @Author: your name
 * @Date: 2022-02-15 18:53:47
 * @LastEditTime: 2022-02-21 20:11:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lachart\README.md
-->

# 笔记

## 创建步骤

1. yarn create vite my-vue-app --template vue-ts
2. npm install 初始化的 vite
3. npm run dev 开始写代码

## 关于 viteconfigjs 配置，根目录为@

```
    resolve: {
      alias: [//配置别名
        { find: '@', replacement: resolve(__dirname, 'src') }
      ],
    }
```

## 遇到 process is not defined 在 viteconfig 下配置

```
define:{
    "process.env":{}
  }
```

## 关于 父子之间传值

1. 父传子：
   - defineProps 传给子组件数据
   - defineEmits 子组件调用父组件传过来的参数
2. 子传父：
   - defineExpose 抛出子组件的方法或对象
   ```
   <child ref="root"></child>
   ....
   const root = ref(null)
   (root.value as any).*
   ```

## 关于 封装 axios 的请求方式

- https://blog.csdn.net/weixin_44213308/article/details/113681316

1. 安装 axios、vue-axios，或者 npm 安装：npm install axios --save || npm install vue-axios --save
2. 编写 request，主要加入一个超时时间 return axios，请求拦截器和响应拦截器
3. main.ts 中引入 Vueaxios,axios(已经改为 request 的某个方法)
4. 编写接口文件，引入 request 请求接口
5. 在 vue 文件中请求接口

## 使用官方的 axios 请求方式

1. 安装 npm install axios --save //仅此一个，只使用这个就可以了，不需要 vue-axios
2. 封装一个 http
3. main.ts 挂载在全局的 ctx 上
