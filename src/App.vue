<script setup lang="ts">
import { useRoute } from 'vue-router'
import HomeView from './views/HomeView.vue'

const route = useRoute()
</script>

<template>
  <HomeView v-if="route.path === '/'" />
  <router-view v-else />
</template>

<style>
/* Global styles handled in base.css */
</style>
