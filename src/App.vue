<script setup>
import AppFooter from './components/layout/AppFooter.vue';
import AppHeader from './components/layout/AppHeader.vue';
</script>
<template>
  <header>
    <AppHeader />
  </header>
  <RouterView />

  <footer>
    <AppFooter />
  </footer>
</template>
