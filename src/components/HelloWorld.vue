<!--
 * @Author: your name
 * @Date: 2022-02-21 21:15:55
 * @LastEditTime: 2022-02-22 21:05:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lachart\src\components\Demo\RefUsePlan.vue
-->
<template>
  <div>普通age:{{ age }}</div>
  <div>响应值ageRef:{{ ageRef }}</div>
  <div>响应对象ageReact:{{ ageReact }}</div>
  <div>toRef的对象ageRRREF:{{ ageRRREF }}</div>
</template>
<script setup lang="ts">
import { ref, reactive, toRefs, toRef } from "vue";
//普通值
let age = 20;
let ageRef = ref(20);
let obj = reactive({
  ageReact: 20,
  name: "zhangsan",
});
setTimeout(() => {
  age = 25;
  ageRef.value = 25;
  obj.ageReact = 30;
}, 1500);
const { ageReact } = { ...toRefs(obj) };
const ageRRREF = toRef(obj, "ageReact");
</script>
