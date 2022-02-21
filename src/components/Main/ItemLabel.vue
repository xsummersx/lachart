<!--
 * @Author: your name
 * @Date: 2022-02-21 11:33:36
 * @LastEditTime: 2022-02-21 15:46:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lachart\src\components\Main\ItemLabel.vue
-->
<template>
  <div class="ItemBox">
    <div class="Title">{{ props.ItemTitle }}：</div>
    <div class="Content">{{ props.ItemContent }}</div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  ItemTitle: String,
  ItemContent: String,
});
</script>
<style scoped>
.ItemBox {
  width: 50%;
  display: flex;
  justify-content: center;
}
.Title {
  color: #aaa;
  font-size: 12px;
}
.Content {
  color: #333;
  font-size: 12px;
}
</style>
