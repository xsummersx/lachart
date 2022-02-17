<!--
 * @Author: your name
 * @Date: 2022-02-17 19:05:35
 * @LastEditTime: 2022-02-17 19:46:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lachart\src\components\Name.vue
-->
<template>
  <el-button>Name</el-button>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route);
console.log(route.query);
console.log(route.params);
</script>
