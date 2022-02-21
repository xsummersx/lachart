<!--
 * @Author: your name
 * @Date: 2022-02-21 16:04:36
 * @LastEditTime: 2022-02-21 17:11:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lachart\src\components\Main\Main.vue
-->
<template>
  <Editor v-model="content" lang="json" width="500" height="500" @init="initEditor"></Editor>
  <div style="width: 400px; height: 400px" id="Main"></div>
</template>
<script setup lang="ts">
import { init } from "echarts";
import { onMounted, ref } from "vue";
import Editor from "vue2-ace-editor";
let content = ref("");
onMounted(() => {
  let myChart = init(document.getElementById("Main") as HTMLFormElement);
  let option = {
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    legend: {
      data: ["销量"],
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };
  myChart.setOption(option);
});
const initEditor = () => {
  require("brace/mode/json");
  require("brace/theme/chrome");
};
</script>
