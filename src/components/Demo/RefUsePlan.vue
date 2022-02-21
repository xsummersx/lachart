<!--
 * @Author: your name
 * @Date: 2022-02-21 21:15:55
 * @LastEditTime: 2022-02-21 21:15:56
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lachart\src\components\Demo\RefUsePlan.vue
-->
<template>
  <div>age:{{ age }}</div>
  <div>普通age:{{ name }}</div>
</template>
<script setup lang="ts">
import { reactive, toRefs, toRef } from "vue";
const state = reactive({
  age: 20,
  name: "zhangsan",
});

const ageRef = toRef(state, "age");
setTimeout(() => {
  state.age = 25;
}, 1500);
//还是响应式的
const { age, name } = toRefs(state);
//不在响应式了
//const { age, name } = state;
</script>
