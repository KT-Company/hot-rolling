<script setup>
import LongBox from "@/components/LongBox.vue";
//班组统计数据
const teamArray = [
  { name: "废品率", value: "4.9", unit: "%" },
  { name: "成材率", value: "98.7", unit: "%" },
  { name: "封锁率", value: "42.6", unit: "%" },
  { name: "轧制间隙", value: "10", unit: "s" },
  { name: "小时产量", value: "600", unit: "t/h" },
  { name: "作业率", value: "82.2", unit: "%" },
  { name: "故障时间", value: "210", unit: "min" },
  { name: "轧制节奏", value: "120", unit: "s" },
  { name: "吨钢能耗", value: "60", unit: "kgce/t" },
  { name: "班产量", value: "6000", unit: "t" },
  { name: "日计划", value: "13000", unit: "t" },
  { name: "消防设备完好率", value: "99.2", unit: "%" },
];

//设备总览数据
const equipmentArray = [
  { name: "R1电机", state: "normal" },
  { name: "R1主减", state: "normal" },
  { name: "R1分配箱", state: "normal" },
  { name: "E2转动测电机", state: "normal" },
  { name: "E2转动齿轮箱", state: "normal" },
  { name: "E2操作侧电机", state: "normal" },
  { name: "E2操作齿轮箱", state: "normal" },
  { name: "R2上辑电机", state: "normal" },
  { name: "R2下辑电机", state: "normal" },
  { name: "R2上辑转动轴", state: "normal" },
  { name: "R2下辑转动轴", state: "normal" },
  { name: "R2压下齿轮箱", state: "normal" },
];
</script>

<template>
  <div>
    <LongBox class="teamStatistics" title="班组统计">
      <div class="boxContainer">
        <ul class="team">
          <li v-for="(item, index) in teamArray" :key="index">
            <span>{{ item.name }}</span>
            <p>
              <span>{{ item.value }}</span>
              <span class="unit">{{ item.unit }}</span>
            </p>
          </li>
        </ul>
      </div>
    </LongBox>

    <LongBox class="equipmentOverview" title="设备总览">
      <div class="boxContainer">
        <div class="equipment">
          <div class="equipmentsBtn">
            <span>＜</span>
            <div class="spans">
              <span>加热炉2</span>
              <span>除鳞泵</span>
              <span style="color: #ffffff; text-shadow: 0 0 10px #ffffff">
                粗轧</span>
              <span> 精轧 </span>
            </div>
            <span>＞</span>
          </div>
          <ul>
            <li v-for="(item, index) in equipmentArray" :key="index">
              <span>{{ item.name }}</span>
              <span class="state"></span>
            </li>
          </ul>
        </div>
      </div>
    </LongBox>
  </div>
</template>




<style scoped lang="scss">
.teamStatistics {
  position: absolute;
  left: vw(30);
  bottom: vh(30);
  width: vw(696);
  height: vh(225);
  pointer-events: all;

  .team {
    width: vw(696);
    height: vh(186);
    margin-top: vh(17);
    display: flex;
    flex-wrap: wrap;
    padding: 0;

    li {
      width: vw(100);
      height: vh(69);
      margin-top: vh(20);
      margin-left: vw(14);
      padding: vw(12) 0 vw(12) 0;
      color: #cacbce;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      background: url("/assets/2d/img/tongjikuang@2x.png");
      background-size: 100% 100%;

      span {
        white-space: nowrap;
      }

      p {
        padding: 0 vw(25) 0 vw(25);
      }

      :nth-child(n) {
        display: flex;
        font-size: rem(14);
        align-items: center;
        justify-content: center;
        text-align: center;

        .unit {
          font-size: rem(12);
        }
      }
    }
  }
}

.boxContainer {
  background-color: $boxColor;
}

.equipmentOverview {
  position: absolute;
  left: vw(756);
  bottom: vh(30);
  width: vw(700);
  pointer-events: all;

  .equipment {
    width: vw(700);
    height: vh(186);
    margin-top: vh(17);
    padding: 0 wh(30);

    .equipmentsBtn {
      display: flex;
      padding: 20px 20px 10px 20px;
      padding: vh(15) vw(20) vh(10) vw(20);
      color: #0e66af;

      .spans {
        display: flex;
        flex: 1;
        margin: 0 vw(15);

        span {
          flex: 1;
        }

        :nth-child(-n + 3):nth-child(n + 2) {
          text-align: center;
        }

        :last-child {
          text-align: right;
        }
      }
    }

    ul {
      width: vw(700);
      height: vh(135);
      color: #ffffff;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin: 0 vw(50) 0 0;

      li {
        width: vw(168);
        height: vh(41);
        padding: 0 vw(5);
        background: url("/assets/2d/img/shebeikuang@2x.png");
        background-size: 100% 100%;
        text-align: center;
        display: flex;
        position: relative;

        :first-child {
          padding-left: vw(26);
          line-height: vh(41);
          font-size: rem(14);
        }

        :last-child {
          display: block;
          width: 12px;
          height: 12px;
          position: absolute;
          right: 20px;
          top: 15px;
          background: #08b348;
          box-shadow: 0 0 10px #43b308;
        }
      }
    }
  }
}
</style>