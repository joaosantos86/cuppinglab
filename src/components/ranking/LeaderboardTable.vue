<script setup>
import { computed } from 'vue'
import { getRanking } from '@/utils/CoffeeUtils'
import { Trophy, Coffee } from '@lucide/vue'

const ranking = computed(() => getRanking())

function getPositionClass(index) {
  if (index === 0) return 'gold'
  if (index === 1) return 'silver'
  if (index === 2) return 'bronze'
  return ''
}
</script>

<template>
  <section class="leaderboard">
    <div class="leaderboard__title">
      <Trophy :size="40" />
      <div>
        <p>Campeonato de cafés especiais</p>
        <h1>Ranking geral</h1>
      </div>
    </div>

    <div v-if="ranking.length" class="leaderboard__table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Posição</th>
            <th>Café</th>
            <th>Produtor</th>
            <th>Categoria</th>
            <th>Nota</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(coffe, index) in ranking" :key="coffe.id">
            <td>
              <span class="position" :class="getPositionClass(index)">
                {{ index + 1 }}º
              </span>
            </td>
            <td class="coffe-name">{{ coffe.nome }}</td>
            <td>{{ coffe.produtor }}</td>
            <td>{{ coffe.categoria }}</td>
            <td>
              <strong class="score">{{ coffe.nota.toFixed(2) }}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p v-else class="empty">
      <Coffee :size="24" style="display: inline; margin-right: 0.5rem;" />
      Nenhum café avaliado ainda
    </p>
  </section>
</template>
<style scoped>
.leaderboard {
  width: 90%;
  max-width: 900px;
  margin: 2rem auto;
}

.leaderboard__title {
  margin-bottom: 1.5rem;
  color: #3e2318;
}

.leaderboard__title p,
.leaderboard__title h1 {
  margin: 0;
}

.leaderboard__table-wrapper {
  overflow-x: auto;
  background: #fffaf5;
  border-radius: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #ead8c7;
}

th {
  color: #fffaf5;
  background: #6f3d28;
}

.coffe-name {
  color: #3e2318;
  font-weight: 700;
}

.position {
  color: #6f3d28;
  font-weight: 700;
}

.score {
  color: #a45b36;
  font-size: 1.1rem;
}

.empty {
  padding: 2rem;
  text-align: center;
  color: #6f3d28;
  background: #fffaf5;
  border-radius: 10px;
}
</style>
