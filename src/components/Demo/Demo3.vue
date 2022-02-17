<!--
 * @Author: your name
 * @Date: 2022-02-16 19:07:22
 * @LastEditTime: 2022-02-16 20:32:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: ref在dom下的运用
-->
<template>
<input type="text" ref="root" value="ref使用例子" />
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
const root = ref(null);
onMounted(() => {
console.log(root.value);
});
</script>