<!--
 * @Author: your name
 * @Date: 2022-02-16 19:01:07
 * @LastEditTime: 2022-02-16 19:11:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: ref  reactive，toRefs的运用
-->

<template>
  <h1>{{ cont }}</h1>
  <h1>{{ obj.ct }}</h1>
  <h1>{{ name }}</h1>
</template>
<script setup lang="ts">
import { ref, reactive, toRefs } from "vue";
const cont = ref(0);
console.log("数量：" + cont.value);
const obj = reactive({
  ct: 0,
  name: "jact",
});
console.log("objct", obj.ct);
const { name } = { ...toRefs(obj) };
</script>