<script setup lang="ts">
import Scene from "@/views/Scene.vue";
import Popup from "./components/Popup.vue";
</script>

<template>
  <Scene />
  <router-view></router-view>
  <!-- <Popup></Popup> -->
</template>

<style scoped>
:global(#app) {
  width: 100vw;
  height: 100vh;
  background-color: #09354c;
  pointer-events: none;
}
</style>
