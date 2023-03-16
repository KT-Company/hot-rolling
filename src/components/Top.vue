<script setup>
import * as dayjs from "dayjs";
import { toArray } from "lodash";
// function dayjsGetTime() {
//   const curTime = dayjs().format("YYYY/MM/DD");
//   const week = dayjs().day();
//   const weekArr = [
//     "星期天",
//     "星期一",
//     "星期二",
//     "星期三",
//     "星期四",
//     "星期五",
//     "星期六",
//   ];
//   return [curTime, weekArr[week]];
// }
// const [curTime, curWeek] = dayjsGetTime();
// console.log("getDay: ", curTime);
// console.log("getDay: ", curWeek);
const topArray = ["总览", "加热炉", "粗轧", "精轧", "卷取"];
function changebtn(e) {
  console.log(e.parent);
  // console.log(e.target.style["text-shadow"] == 0);
  e.target.style = "text-shadow: 0 0 10px #ffffff";
}
</script>

<!-- 热轧产线可视化系统 -->
<template>
  <div id="top">
    <div id="titleBar" @click="changebtn">
      <div v-for="(top, index) in topArray" :key="index">{{ top }}</div>
    </div>
    <!-- <div id="showTime">
      <span>{{ curTime }}}</span>
      <span>{{ curWeek }}}</span>
      <button id="close2D">关闭</button>
    </div> -->
  </div>
</template>

<style scoped  lang ='scss'>
#top {
  pointer-events: all;
  display: flex;
  #titleBar {
    width: vw(1244);
    height: vh(137);
    background: url("/assets/2d/img/dingbulan@2x.png") no-repeat;
    background-position-x: vw(-1213);
    background-size: 200% 100%;
    display: flex;
  }
  div :first-child {
    margin-left: vw(443);
  }
  div {
    width: vw(148);
    height: vh(86);
    font-size: rem(16);
    color: white;
    line-height: vh(86);
    text-align: center;
  }
}
</style>