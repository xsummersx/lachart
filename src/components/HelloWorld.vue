<template>
  <el-button type="danger">{{ name }}</el-button>
  <el-button type="success">{{ cont }}</el-button>
  <el-button type="success">{{ doubleCont }}</el-button>
  <el-button type="success" @click="change">改变名称</el-button>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStore } from "@/store/index";
const { name, cont, doubleCont } = storeToRefs(useStore());
const change = () => {
  useStore().changState("张三");
};
</script>
