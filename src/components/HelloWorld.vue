<template>
  <el-button type="danger">{{ name }}</el-button>
  <el-button type="success">{{ cont }}</el-button>
  <el-button type="success">{{ doubleCont }}</el-button>
  <el-button type="success" @click="change">改变名称</el-button>
  <el-button type="info" @click="RouterPush">router push</el-button>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStore } from "@/store/index";
import { useRouter } from "vue-router";
const router = useRouter();
const { name, cont, doubleCont } = storeToRefs(useStore());
const change = () => {
  useStore().changState("张三");
};
const RouterPush = () => {
  router.push({
    path: "/Name",
    name: "name",
    query: {
      id: 123,
      name: "zhangsan",
    },
    params: {
      code: 1,
      url: "wwwww",
    },
  });
};
</script>
