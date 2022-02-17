<!--
 * @Author: your name
 * @Date: 2022-02-16 20:35:41
 * @LastEditTime: 2022-02-17 08:59:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: 利用defineProps获取父组件的传值，利用defineEmits获取父组件的方法，利用defnieExpose抛出方法
-->
<template>
  <div>
    <h1>{{ num }}</h1>
    <button @click="setNumFun">子组件的按钮</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
let num = ref(0);
const changNum = (val: number) => {
  num.value = val;
};
defineExpose({
  changNum,
  num,
});
const emit = defineEmits(["setNum"]);
const props = defineProps({
  code: Number,
});
const setNumFun = () => {
  emit("setNum", 8);
};

console.log(props.code);
</script>
