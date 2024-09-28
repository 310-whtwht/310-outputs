<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainHeader from './components/HeaderComponent.vue'
import './assets/reset.css'
</script>

<template>
  <MainHeader />
  <RouterView />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap');
main {
  background-color: #1d1d1d;
  width: 100vw;
  height: 100vh;
  color: #aaa9a9;
  padding: 96px 48px 24px 48px;
}
</style>
