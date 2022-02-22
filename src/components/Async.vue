<!--
 * @Author: your name
 * @Date: 2022-02-22 09:24:09
 * @LastEditTime: 2022-02-22 09:55:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lachart\src\components\Async.vue
-->
<template></template>
<script setup lang="ts">
//*****//
//Demo1
//*****//
// const getPromise = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("123");
//     }, 1000);
//   });
// };
// const study = async () => {
//   let data = await getPromise();
//   console.log("data", data);
// };
// study();
//*****//
//Demo2
//*****//
// import axios from "./../axios/http";
// const getInfo = () => {
//   return axios
//     .get(
//       "http://172.16.41.237:12072/api/RZZD/getUserInfo?token=0e71bb90-5936-4c1b-99c1-43668cf3221a",
//     )
//     .then((res) => {
//       return res;
//     });
// };
// const study = async () => {
//   let af = await getInfo();
//   console.log("af", af);
// };
// study();
//*****//
//Promise的描述
//*****//
function promiseClick() {
  let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      var num = Math.ceil(Math.random() * 20); //生成1-10的随机数
      console.log("随机数生成的值：", num);
      if (num <= 10) {
        resolve(num);
      } else {
        reject("数字太于10了即将执行失败回调");
      }
    }, 2000);
  });
  return p;
}
promiseClick()
  .then(
    function (data) {
      console.log("resolved成功回调");
      console.log("成功回调接受的值：", data);
    },
    //   function (reason) {
    //     console.log("rejected失败回调");
    //     console.log("失败执行回调抛出失败原因：", reason);
    //   },
  )
  .catch((reason) => {
    console.log("rejected失败回调");
    console.log("失败执行回调抛出失败原因：", reason);
  });
promiseClick();
</script>
