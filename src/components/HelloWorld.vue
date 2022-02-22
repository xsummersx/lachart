<template>
  <div>{{ cont }}</div>
</template>
<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from "vue";
// import { getInfo } from "@/api/getInfo";
import { getInfo } from "@/api/getInfo";
import axios from "./../axios/http";
const cont = ref(8);
//接口请求方式一，直接用api写好的request.ts
const token = ref("5c978c0a-916c-4f93-8f1e-1e7b75907659");
onMounted(() => {
  getInfo(token.value).then((res) => {
    console.log(res);
  });
});
//接口请求方法二，用全局挂在的$axios
const { ctx } = getCurrentInstance() as any;
console.log(ctx);
const TheAxios = ctx._.appContext.config.globalProperties;
console.log(TheAxios);
TheAxios.$axios
  .get("http://172.16.41.237:12072/api/RZZD/getUserInfo?token=0e71bb90-5936-4c1b-99c1-43668cf3221a")
  .then((res: any) => {
    console.log(res);
  });
//接口请求方式三，用当前调用的axios
axios
  .get("http://172.16.41.237:12072/api/RZZD/getUserInfo?token=0e71bb90-5936-4c1b-99c1-43668cf3221a")
  .then((res) => {
    console.log(res);
  });
</script>
