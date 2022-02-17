<!--
 * @Author: your name
 * @Date: 2022-02-17 08:58:18
 * @LastEditTime: 2022-02-17 09:09:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: 使用root=ref(null)方法取子组件的dom节点
-->
<template>
  <div>
    <button @click="RefBtn">用ref方法调用子组件的方法</button>
    <Child ref="ch" @setNum="getBtn" :code="1" />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import Child from "@/components/Demo/Child.vue";
const ch = ref(null);
const RefBtn = () => {
  let num = 6;
  (ch.value as any).changNum(num);
};
const getBtn = (n: number) => {
  let num = n;
  (ch.value as any).changNum(num);
  console.log((ch.value as any).num);
};
</script>
