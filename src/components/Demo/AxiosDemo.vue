<!--
 * @Author: your name
 * @Date: 2022-02-17 14:45:45
 * @LastEditTime: 2022-02-17 16:54:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: 如何请求接口的例子
-->
<template>
  <div>{{ cont }}</div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
// import { getInfo } from "@/api/getInfo";
import { getInfo } from "@/api/getInfo";
const cont = ref(8);
const token = ref("5c978c0a-916c-4f93-8f1e-1e7b75907659");
onMounted(() => {
  getInfo(token.value).then((res) => {
    console.log(res);
  });
});
</script>
