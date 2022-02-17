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
