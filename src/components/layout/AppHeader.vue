<script setup>
import { Coffee } from '@lucide/vue'
</script>

<template>
  <header class="navbar">
    <router-link to="/" class="navbar__brand">
      <Coffee :size="24" />
      Coffee Quality
    </router-link>

    <nav class="navbar__links">
      <router-link to="/">Início</router-link>
      <router-link to="/avaliacoes">Avaliações</router-link>
      <router-link to="/ranking">Ranking</router-link>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 1rem;
  left: 50%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 2rem);
  max-width: 1100px;
  padding: 0.9rem 1.5rem;
  background-color: #722f15;
  border: 1px solid #8f5638;
  border-radius: 18px;
  box-shadow: 0 12px 30px rgba(35, 18, 10, 0.28);
  transform: translateX(-50%);
}

.navbar__brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #f8ead7;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.2s;
}

.navbar__brand:hover {
  color: #d9a066;
}

.navbar__links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar__links a {
  color: #f8ead7;
  text-decoration: none;
  transition: color 0.2s;
}

.navbar__links a:hover,
.navbar__links a.router-link-active {
  color: #d9a066;
}
</style>
