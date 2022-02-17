<!--
 * @Author: your name
 * @Date: 2022-02-16 19:38:38
 * @LastEditTime: 2022-02-16 19:38:40
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: watch监听
-->
<template>
  <h1>{{ state.cont }}</h1>
  <h2>{{ data.name }}</h2>
</template>
<script setup lang="ts">
import { reactive, watch } from "vue";
const state = reactive({
  cont: 0,
});
const data = reactive({
  name: { age: 15 },
});
watch(
  () => state.cont,
  (cont, oldcont) => {
    console.log("监听值", cont, oldcont);
  }
);
watch(
  () => data.name,
  (nameObj, nameOld) => {
    console.log("监听：", nameObj, nameOld);
  },
  { deep: true }
);
setTimeout(() => {
  state.cont++;
}, 1500);
setTimeout(() => {
  data.name.age++;
}, 1500);
</script>