<script setup>
const props = defineProps({ title: String });
</script>

<template>
  <div id="shortBox">
    <div id="title">{{ title }}</div>
    <slot> </slot>
  </div>
</template>



<style scoped lang="scss">
#title {
  width: vw(380);
  height: vh(22);
  font-size: rem(16);
  line-height: vh(0);
  color: #ffffff;
  padding-left: vw(20);
  background: url("/assets/2d/img/biaotilanLiang@2x.png") no-repeat;
  background-size: 100% 100%;
  animation: changebackground 2s infinite;
}

@keyframes changebackground {
  0% {
    background: url("/assets/2d/img/biaotilanLiang@2x.png") no-repeat;
    background-size: 100% 100%;
  }
  50% {
    background: url("/assets/2d/img/biaotilanAn@2x.png") no-repeat;
    background-size: 100% 100%;
  }
  100% {
    background: url("/assets/2d/img/biaotilanLiang@2x.png") no-repeat;
    background-size: 100% 100%;
  }
}
</style>