
<template>
  <div>数字{{ state.cont }}</div>
  <div>双数{{ state.double }}</div>
  <button type="button" @click="addBtn">ADD</button>
</template>
<script setup lang="ts">
import { reactive, computed } from "vue";
interface typeState {
  cont: number;
  double: number;
  arry: Array<number>;
}
const state:typeState = reactive({
  cont: 0,
  double: computed(() => state.cont * 2),
  arry: [1, 2, 3, 4],
});
const addBtn = ():void => {
  state.cont++;
};
</script>
