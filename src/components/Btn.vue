<template>
  <div class="main" :style="{ width: width }" ref="selectContent">
    <el-select
      @visible-change="dropShow"
      v-if="type === 'default'"
      v-model="selected"
      placeholder="请选择"
      popper-class="popper"
      :popper-append-to-body="false"
      @change="change"
    >
      <el-option
        v-for="item in list"
        :key="item.value"
        :label="item.name"
        :value="item.value"
      ></el-option>
    </el-select>

    <el-select
      @visible-change="dropShow"
      v-if="type === 'project'"
      v-model="selected"
      placeholder="请选择"
      popper-class="popper"
      :popper-append-to-body="false"
      @change="change"
    >
      <el-option
        v-for="item in list"
        :key="item.value"
        :label="item.name"
        :value="item.value"
      ></el-option>
    </el-select>

    <el-select
      @visible-change="dropShow"
      v-if="type === 'thisYear'"
      v-model="dateYSelected"
      placeholder="请选择"
      popper-class="popper"
      :popper-append-to-body="false"
      @change="change"
    >
      <el-option
        v-for="item in dateYList"
        :key="item.value"
        :label="item.name"
        :value="item.value"
      ></el-option>
    </el-select>

    <el-select
      @visible-change="dropShow"
      v-if="type === 'thisMonth'"
      v-model="dateMSelected"
      placeholder="请选择"
      popper-class="popper"
      :popper-append-to-body="false"
      @change="change"
    >
      <el-option
        v-for="item in dateMList"
        :key="item.value"
        :label="item.name"
        :value="item.value"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "selectBar",
  props: {
    type: {
      type: String,
      default: "default",
    },
    list: {
      type: Array,
      default: () => [],
    },
    name: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "80px",
    },
    allMonth: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selected: "",
      dateYList: [],
      dateMList: [],
      dateYSelected: new Date().getFullYear(),
      dateMSelected: this.allMonth ? "all" : new Date().getMonth() + 1,
      tempDomStyle: {},
    };
  },
  mounted() {
    if (this.type === "thisYear" || this.type === "thisMonth") {
      this.initCalendar();
    }
  },
  watch: {
    list(newValue) {
      if (newValue.length && this.type === "project") {
        this.selected = newValue[0].value;
        this.change("all");
      }
      if (newValue.length && this.type === "default") {
        this.selected = newValue[0].value;
      }
    },
  },
  methods: {
    initCalendar() {
      let yearList = [];
      let monthList = [];
      for (
        let i = new Date().getFullYear() - 4;
        i <= new Date().getFullYear();
        i++
      ) {
        yearList.push({
          name: i + "年",
          value: i,
        });
      }
      for (let j = 1; j <= 12; j++) {
        monthList.push({
          name: j + "月",
          value: j,
        });
      }

      if (this.allMonth) {
        monthList.push({
          name: "全年",
          value: "all",
        });
      }

      this.dateYList = yearList.reverse();
      this.dateMList = monthList.reverse();
    },
    dropShow(e) {
      this.$nextTick(() => {
        const dropDom =
          this.$refs.selectContent.firstElementChild.lastElementChild;

        const domClientRect = dropDom.getBoundingClientRect();
        const domPosition = [domClientRect.left, domClientRect.top];
        const domWidth = dropDom.offsetWidth;
        const domHeight = dropDom.offsetHeight;
        const windowWidth = document.documentElement.clientWidth;
        const windowHeight = document.documentElement.clientHeight;
        if (e) {
          this.tempDomStyle = JSON.parse(JSON.stringify(dropDom.style));
          // 底下放不下
          if (domPosition[1] + domHeight > windowHeight - 50) {
            dropDom.style.top = "auto";
            dropDom.style.bottom = "20px";
          }

          // 右边放不下
          if (domPosition[0] + domWidth > windowWidth - 50) {
            dropDom.style.left = "auto";
            dropDom.style.right = "0";
          }
        } else {
          setTimeout(() => {
            dropDom.style = this.tempDomStyle;
          }, 200);
        }
      });
    },
    change(e) {
      const res = {
        name: this.name,
        data: {
          type: this.type,
          value: e,
        },
      };
      this.$emit("fromChild", res);
    },
  },
};
</script>

<style scoped>
.main {
  position: absolute;
  top: 26px;
  right: 20px;
  width: 120px;
  height: 20px;
}
/deep/ .el-input {
  height: 20px;
  z-index: 1;
}
/deep/ .el-input input {
  height: 20px;
  font-size: 12px;
  padding: 0 0 0 4px;
  border: 1px solid #1898e2;
  background: #083752;
  color: #d9d9d9;
}
/deep/ .el-input__inner:hover {
  border: 1px solid #1898e2;
}
/deep/ input::-webkit-input-placeholder {
  color: #d9d9d9;
}
/deep/ .el-input__icon {
  line-height: 20px;
}
/deep/ .popper {
  background: #083752;
  border: 1px solid #1898e2;
}
/deep/ li {
  color: #d9d9d9;
  height: 20px;
  padding: 0;
  line-height: 16px;
  text-align: center;
  font-size: 12px;
}
/deep/ .popper__arrow {
  left: 46% !important;
}
/deep/ .el-select-dropdown__wrap {
  max-height: 294px;
  min-width: 60px;
}
/deep/ .el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background: #1898e2;
}
/deep/ .el-input__inner {
  border-color: #1898e2;
}
/deep/ .el-select-dropdown__item.selected {
  color: #d9d9d9;
}
/deep/ .el-popper[x-placement^="bottom"] .popper__arrow::after {
  border-bottom-color: #1898e2;
}
/deep/ .el-input.is-disabled .el-input__inner {
  background: #083752;
  border-color: #1898e2;
}
</style>