<!--
 * @Author: your name
 * @Date: 2022-02-16 20:08:07
 * @LastEditTime: 2022-02-16 20:08:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: 生命周期
-->
<template>
  <div>{{ conut }}</div>
</template>
<script setup lang="ts">
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  ref,
} from "vue";
const conut = ref(0);
onBeforeMount(() => {
  console.log("onBeforeMount");
});
onMounted(() => {
  console.log("onMounted");
});
onBeforeUpdate(() => {
  console.log("onBeforeUpdate", conut.value);
  conut.value += 5;
});
onUpdated(() => {
  console.log("onUpdated", conut.value);
});
onBeforeUnmount(() => {
  console.log("onBeforeUnmount");
});
onUnmounted(() => {
  console.log("onUnmounted");
});
onErrorCaptured(() => {
  console.log("onErrorCaptured");
});
</script>