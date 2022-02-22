<!--
 * @Author: your name
 * @Date: 2022-02-22 19:03:04
 * @LastEditTime: 2022-02-22 19:50:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lachart\src\components\Main\Editor.vue
-->
<template>
  <div>123</div>
  <div id="container" style="width: 400px; height: 400px"></div>
</template>
<script>
import * as monaco from "monaco-editor";
import { reactive } from "vue";
const data = reactive({
  editor: null,
});
const initEditor = () => {
  data.editor = monaco.editor.create(document.getElementById("container") as HTMLElement, {
    value: "", //编辑器初始显示文字 也是编辑器的绑定值
    language: "sql", //支持的语言
    automaticLayout: true, //是否开启自动布局
    theme: "vs-dark", //官方自带三种主题vs 白色, hc-black 黑色, or vs-dark 非常黑
  }) as any;
};
const getValue = () => {
  (data.editor as any).getValue(); //获取编辑器中的文本
};
initEditor();
</script>
