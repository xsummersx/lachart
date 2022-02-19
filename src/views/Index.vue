<!--
 * @Author: your name
 * @Date: 2022-02-17 20:08:24
 * @LastEditTime: 2022-02-18 17:25:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lachart\src\views\index.vue
-->
<template>
  <h1>首页</h1>
  <strk></strk>
  <p>
    123
    <span>321</span>
  </p>
</template>
<script setup lang="ts">
import { h, ref } from "vue";
const ar = [1, 2, 3, 4];
const redcol = ref("red");
const strk = {
  render() {
    return h(
      "div",
      { class: "name", id: "kuaile" },
      ar.map((item) => {
        return h("span", { class: `name${item}` }, `hello${item}`);
      }),
    );
  },
};
</script>
<style scoped>
p {
  color: red;
}
span {
  color: green;
}
</style>
