<script setup>
import { coffeList } from '@/utils/CoffeeUtils'
import { computed } from 'vue'
import { Coffee, Trophy, ClipboardList } from '@lucide/vue'

const totalCoffes = computed(() => coffeList.value.length)

const highestScore = computed(() => {
  if (!coffeList.value.length) return '0.00'
  return Math.max(...coffeList.value.map(coffe => Number(coffe.nota))).toFixed(2)
})

const lastEvaluation = computed(() => {
  if (!coffeList.value.length) return 'Nenhuma'
  return coffeList.value[coffeList.value.length - 1].data
})
</script>

<template>
  <main class="home">
    <section class="hero">
      <div class="coffee-icon">
        <Coffee :size="112" />
      </div>
      <p class="hero__subtitle">Campeonato de cafés especiais</p>
      <h1>Coffee Quality Challenge</h1>
      <p class="hero__text">Avalie,compare e descubra os melhores cafés especiais.</p>

      <div class="cards">
        <article class="card">
          <Coffee :size="40" />
          <strong>{{ totalCoffes }}</strong>
          <p>Cafés participantes</p>
        </article>

        <article class="card">
          <Trophy :size="40" />
          <strong>{{ highestScore }}</strong>
          <p>Maior nota</p>
        </article>

        <article class="card">
          <ClipboardList :size="40" />
          <strong>{{ lastEvaluation }}</strong>
          <p>Última avaliação</p>
        </article>
      </div>

      <div class="actions">
        <router-link to="/avaliacoes">Cadastrar café</router-link>
        <router-link to="/ranking">Ver ranking</router-link>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home {
  min-height: 100vh;
  padding: 7rem 1rem 3rem;
  display: grid;
  place-items: center;
  background: #f5ede4;
}

.hero {
  width: 100%;
  max-width: 900px;
  text-align: center;
}

.hero__subtitle {
  margin: 1rem 0 0.3rem;
  color: #a45b36;
  font-weight: bold;
}

h1 {
  margin: 0;
  color: #3e2318;
  font-size: clamp(2rem, 5vw, 3.5rem);
}

.hero__text {
  margin: 1rem 0 2rem;
  color: #75594a;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.card {
  display: grid;
  gap: 0.5rem;
  padding: 1.5rem 1rem;
  border-radius: 12px;
  background: #fffaf5;
  box-shadow: 0 10px 20px rgba(62, 35, 24, 0.12);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-4px);
}

.card span {
  font-size: 2.5rem;
}

.card strong {
  color: #6f3d28;
  font-size: 1.3rem;
}

.card p {
  margin: 0;
  color: #75594a;
  font-size: 0.9rem;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.actions a {
  padding: 0.8rem 1.2rem;
  border-radius: 6px;
  color: white;
  background: #6f3d28;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;
}

.actions a:hover {
  background: #8b4f32;
}

.actions a:last-child {
  color: #6f3d28;
  background: transparent;
  border: 1px solid #6f3d28;
}

.actions a:last-child:hover {
  background: #f5ede4;
}

</style>
