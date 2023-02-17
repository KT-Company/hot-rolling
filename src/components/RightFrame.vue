<script setup>
import ShortBox from "@/components/ShortBox.vue";
import { reactive, ref, onMounted } from "vue";
import * as echarts from "echarts";

//产线总览echarts配置项
const dailyProductionData = ref(null);
const dailyProductionOption = {
  grid: {
    top: "20%",
    bottom: 30,
    right: "10%",
  },

  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
    },
  },

  xAxis: {
    data: ["8/1", "8/2", "8/3", "8/4", "8/5", "8/6"],
    axisTick: {
      show: false,
    },
  },
  yAxis: [
    {
      splitLine: {
        show: true,
        lineStyle: {
          color: ["#223c58"],
        },
      },
    },
    {
      name: "单位：(名称)",
    },
  ],
  series: [
    {
      name: "unit1",
      type: "line",
      data: [45, 39, 46, 49, 40, 46],
      lineStyle: {
        normal: {
          color: "#4bf3f9",
          shadowBlur: 3,
          shadowColor: "#4bf3f9",
          shadowOffsetY: 0,
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#4bf3f9" },
            { offset: 0.3, color: "#184267" },
            { offset: 0.7, color: "#12314b" },
          ]),
        },
      },
    },
    {
      name: "unit2",
      type: "line",
      data: [29, 22, 35, 32, 25, 26],
      lineStyle: {
        normal: {
          color: "#2eadfe",
          shadowBlur: 3,
          shadowColor: "#2eadfe",
          shadowOffsetY: 0,
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#2eadfe" },
            { offset: 0.3, color: "#184267" },
            { offset: 0.7, color: "#12314b" },
          ]),
        },
      },
    },
  ],
};

//能源环保echarts配置项
const energyEnvironmentData = ref(null);
const energyEnvironmentOption = {
  grid: {
    top: "5%",
    left: "15%",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
    },
    formatter: (params) => {
      // console.log(params);
      // 自定义 tooltip，这里返回 div 内容随意改造，打印看下 params 拿自己想要的数据
      return `
            <div style="min-width: 100px;border-radius: 5px;">
               ${params[0].axisValueLabel}月
               <div style="display: flex;justify-content: space-between;align-items: center;">
                  <p>
                     <span style="display: inline-block;margin-right:5px;width: 10px;height: 10px;border-radius: 50%;background-color: rgba(42, 130, 228, 1)"></span>
                     纯净水
                  </p>
                  <span>${[params[0].value]}</span>
               </div>
            </div>
         `;
    },
  },
  yAxis: [
    {
      type: "value",
      axisLine: {
        show: true,
        lineStyle: {
          color: "#1d5477",
        },
      },
      splitNumber: 4,
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
        color: "#fff",
      },
      splitLine: {
        show: false,
      },
    },
  ],
  xAxis: [
    {
      type: "category",
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
        margin: 15,
        textStyle: {
          color: "#E2E2E2 ",
          fontSize: 12,
          align: "center",
        },
      },
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
  ],
  graphic: {
    type: "image",
    left: "15%",
    bottom: "25%",
    z: 1,
    bounding: "raw",
    style: {
      image: "../../public/assets/2d/img/pingxingsibianxing@2x.png",
      width: 300,
      height: 20,
    },
  },
  series: [
    {
      name: "飞行员",
      type: "bar",
      data: [80, 90, 200, 320, 130, 430, 620, 140, 130, 700, 230, 340],
      barWidth: 15,

      itemStyle: {
        normal: {
          label: {
            show: true,
            position: "top",
            distance: 10,
            textStyle: {
              color: "#E2E2E2 ",
              fontSize: "12",
            },
          },
          color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
            {
              offset: 0,
              color: "#0980bc",
            },
            {
              offset: 1,
              color: "#183f7e",
            },
          ]),
          opacity: 0.8,
        },
      },
    },
    {
      name: "上部圆",
      type: "pictorialBar",
      silent: true,
      symbolSize: [15, 5],
      symbolOffset: [0, -4],
      symbolPosition: "end",
      z: 12,
      color: "#16abca",
      data: [80, 90, 200, 320, 130, 430, 620, 140, 130, 700, 230, 340],
    },
    {
      name: "底部圆",
      type: "pictorialBar",
      silent: true,
      symbolSize: [15, 5],
      symbolOffset: [0, 4],
      z: 12,
      color: "#19448e",
      data: [80, 90, 200, 320, 130, 430, 620, 140, 130, 700, 230, 340],
    },
  ],
};

//产线总览数据
const productionArray = [
  { name: "生产效率", value: "220%" },
  { name: "液位置报警", value: "15" },
  { name: "成品库", value: "14450" },
  { name: "板柸库", value: "14450" },
];
//能源环保数据
const energyEnvironmentArray = [
  {
    name: "净化水",
    value: "1150",
    unit: "T",
    url: "../../public/assets/2d/img/tubiao1@2x1.png",
  },
  {
    name: "生活水",
    value: "1150",
    unit: "T",
    url: "../../public/assets/2d/img/tubiao2@2x.png",
  },
  {
    name: "焦炉煤气",
    value: "350000",
    unit: "m³",
    url: "../../public/assets/2d/img/tubiao3@2x.png",
  },
  {
    name: "氮气",
    value: "1150",
    unit: "m³",
    url: "../../public/assets/2d/img/tubiao4@2x.png",
  },
  {
    name: "电量",
    value: "1150",
    unit: "T",
    url: "../../public/assets/2d/img/tubiao5@2x.png",
  },
  {
    name: "氧气",
    value: "1150",
    unit: "T",
    url: "../../public/assets/2d/img/tubiao6@2x.png",
  },
  {
    name: "混合煤气",
    value: "3500000",
    unit: "m³",
    url: "../../public/assets/2d/img/tubiao7@2x.png",
  },
  {
    name: "蒸汽",
    value: "3500000",
    unit: "m³",
    url: "../../public/assets/2d/img/tubiao8@2x.png",
  },
];

const Optionparent = ref("请选择");
const energyOptions = [
  {
    value: "Option1",
    label: "Option1",
    se: true,
  },
  {
    value: "Option2",
    label: "Option2",
    se: false,
  },
  {
    value: "Option3",
    label: "Option3",
    se: false,
  },
  {
    value: "Option4",
    label: "Option4",
    se: false,
  },
];

onMounted(() => {
  //日生产折线图
  const dailyProductionEchart = echarts.init(dailyProductionData.value);
  dailyProductionEchart.setOption(dailyProductionOption);
  //能源环保柱状图
  const energyEnvironmentEchart = echarts.init(energyEnvironmentData.value);
  energyEnvironmentEchart.setOption(energyEnvironmentOption);

  window.addEventListener("resize", () => {
    dailyProductionEchart.resize();
    energyEnvironmentEchart.resize();
  });

  var currentIndex = -1;
  //折线图定时跳动
  setInterval(function () {
    var dataLen = dailyProductionOption.series[0].data.length;
    // 取消之前高亮的图形
    dailyProductionEchart.dispatchAction({
      type: "downplay",
      seriesIndex: 0, //表示series中的第几个data数据循环展示
      dataIndex: currentIndex,
    });
    currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
    // 高亮当前图形
    dailyProductionEchart.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: currentIndex,
    });
    // 显示 tooltip
    dailyProductionEchart.dispatchAction({
      type: "showTip",
      seriesIndex: 0,
      dataIndex: currentIndex,
    });
  }, 1000);
  //柱状图定时跳动
  setInterval(function () {
    var dataLen1 = energyEnvironmentOption.series[0].data.length;
    // 取消之前高亮的图形
    energyEnvironmentEchart.dispatchAction({
      type: "downplay",
      seriesIndex: 0, //表示series中的第几个data数据循环展示
      dataIndex: currentIndex,
    });
    currentIndex = (currentIndex + 1) % dataLen1; //+1表示每次跳转一个
    // 高亮当前图形
    energyEnvironmentEchart.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: currentIndex,
    });
    // 显示 tooltip
    energyEnvironmentEchart.dispatchAction({
      type: "showTip",
      seriesIndex: 0,
      dataIndex: currentIndex,
    });
  }, 1000);
});

function handlerSelect() {
  console.log(Optionparent.value);
}
</script>

<template>
  <div>
    <ShortBox class="dailyProductionTrend" title="日生产趋势">
      <div class="boxContainer">
        <div class="rightLineEchart" ref="dailyProductionData"></div>
      </div>
    </ShortBox>

    <ShortBox class="energyEnvironment" title="能源环保">
      <div class="boxContainer">
        <div class="energy">
          <ul>
            <li v-for="(item, index) in energyEnvironmentArray" :key="index">
              <div class="downPng">
                <div
                  class="upPng"
                  :style="{
                    background: `url(${item.url})`,
                    backgroundSize: '100% 100%',
                  }"
                ></div>
              </div>
              <div class="energyData">
                <span>{{ item.name }}</span>
                <span
                  >{{ item.value
                  }}<span class="unit">{{ item.unit }}</span></span
                >
              </div>
            </li>
          </ul>
          <el-select
            v-model="Optionparent"
            class="m-2"
            placeholder="Select"
            @change="handlerSelect(value)"
          >
            <el-option
              v-for="(item, index) in energyOptions"
              :label="item.label"
              :value="item.value"
              :key="index"
            ></el-option>
          </el-select>
          <button>月</button>
          <button>年</button>
          <span class="energyUnit">单位：(m³)</span>
          <div class="rightBarEchart" ref="energyEnvironmentData"></div>
        </div>
      </div>
    </ShortBox>

    <ShortBox class="productionOverview" title="产线总览">
      <div class="boxContainer">
        <div class="production">
          <div class="title">
            <span>停机：</span>
            <span>5次</span>
            <span>总时长：</span>
            <span>220分钟</span>
          </div>
          <ul>
            <li v-for="(item, index) in productionArray" :key="index">
              <span>{{ item.name }}：</span>
              <span>{{ item.value }}</span>
            </li>
          </ul>
        </div>
      </div>
    </ShortBox>
  </div>
</template>



<style scoped lang="scss">
.dailyProductionTrend {
  width: vw(380);
  height: vh(225);
  pointer-events: all;
  position: absolute;
  right: vw(30);
  top: vh(43);
  .rightLineEchart {
    width: vw(380);
    height: vh(186);
    margin-top: vh(20);
  }
}

.energyEnvironment {
  width: vw(380);
  height: vh(225);
  pointer-events: all;
  position: absolute;
  right: vw(30);
  top: vh(308);
  color: #cacbce;
  .energy {
    width: vw(380);
    height: vh(473);
    margin-top: vh(21);
    ul {
      width: vw(380);
      height: 50%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
      li {
        width: 25%;
        height: 50%;
        .downPng {
          width: vw(72);
          height: vh(73);
          margin: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          background: url("../../public/assets/2d/img/tubiaobeijng@2x.png");
          background-size: 100% 100%;
          .upPng {
            width: vw(50);
            height: vh(50);
            display: inline-block;
            text-align: center;
            z-index: 2;
            animation: upAndDown 2.5s infinite;
            @keyframes upAndDown {
              0% {
                margin-bottom: vh(-12);
              }
              50% {
                margin-bottom: vh(12);
              }
              100% {
                margin-bottom: vh(-12);
              }
            }
          }
        }
        .energyData {
          height: 40%;
          display: flex;
          flex-direction: column;
          span {
            text-align: center;
            .unit {
              font-size: rem(12);
            }
          }
        }
      }
    }

    button {
      width: vw(50);
      height: vh(42);
      border: none;
      color: #ffffff;
      padding: 0;
      background: url("../../public/assets/2d/img/yue@2x.png");
      background-size: 100% 100%;
    }
    .energyUnit {
      margin-left: vw(80);
      font-size: rem(14);
    }
    .rightBarEchart {
      height: 50%;
    }
  }
}
.productionOverview {
  width: vw(380);
  height: vh(225);
  position: absolute;
  right: 30px;
  bottom: 30px;
  color: #cacbce;
  pointer-events: all;
  font-size: rem(14);
  .production {
    height: vh(186);
    margin-top: vh(17);
    .title {
      display: flex;
      padding-top: vh(20);
      span {
        flex: 1;
      }
      :nth-child(2n-1) {
        text-align: center;
      }
    }
    ul {
      // margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      li {
        width: vw(350);
        height: vh(41);
        display: flex;
        margin-bottom: -10px;
        padding: 0 vw(30) 0 vw(30);
        background: url("../../public/assets/2d/img/changkuang@2x.png");
        background-size: 100% 100%;
        text-align: justify;
        span {
          display: block;
          flex: 1;
          line-height: vh(41);
        }
        :last-child {
          text-align: right;
        }
      }
    }
  }
}
.boxContainer {
  background-color: $boxColor;
}

//elmentplus 选择框样式
:deep(.el-input__inner) {
  width: vw(80);
  height: vh(40);
}
:deep(.el-popper.is-light) {
  background: none;
}
:deep(.el-input) {
  --el-input-text-color: #ffffff;
}
:deep(.el-select) {
  --el-select-input-focus-border-color: none !important;
  background: url("../../public/assets/2d/img/jingshui1@2x.png");
  background-size: 100% 100%;
  --el-select-input-color: #ffffff;
}
:deep(.el-input__wrapper) {
  background: none;
  box-shadow: none !important;
}
:deep(.el-select .el-input.is-focus .el-input__wrapper) {
  box-shadow: none !important;
}
:deep(.el-select .el-input__wrapper.is-focus) {
  box-shadow: none !important;
}
:deep(.el-select:hover:not(.el-select--disabled) .el-input__wrapper) {
  box-shadow: none !important;
}
</style>