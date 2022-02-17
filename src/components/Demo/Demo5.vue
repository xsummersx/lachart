<!--
 * @Author: your name
 * @Date: 2022-02-16 19:52:46
 * @LastEditTime: 2022-02-16 20:32:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: watchEffect的监听，基本上替代了watch
-->
<template>
  <h1>{{ count }}</h1>
</template>
<script setup lang="ts">
import { ref, watchEffect, onMounted } from "vue";
let count = ref(0);
onMounted(() => {
  console.log("onMounted");
});
const stop = watchEffect((onInvalidata) => {
  console.log("watchEffect", count.value);
  onInvalidata(() => {
    //清楚副作用，比如清楚一些定时器
  });
});
setTimeout(() => {
  count.value++;
}, 1500);
setTimeout(() => {
  stop();
}, 2500);
setTimeout(() => {
  count.value++;
}, 3000);
</script>
