<template>
  <h1>{{ msg }}</h1>
</template>
<script setup lang="ts">
import { ref, reactive, defineProps, toRefs } from "vue";
defineProps({
  msg: String,
});
const cont = ref(0);
console.log("数量：" + cont.value);
const obj = reactive({
  ct: 0,
  name: "",
});
console.log("objct", obj.ct);
</script>