<script setup>
import { reactive, ref } from 'vue'
import { addCoffe } from '@/utils/CoffeeUtils'

const emit = defineEmits(['saved'])

const success = ref('')

const coffe = reactive({
  nome: '',
  produtor: '',
  categoria: '',
  aroma: 0,
  sabor: 0,
  acidez: 0,
  corpo: 0,
  finalizacao: 0
})

function resetForm() {
  Object.assign(coffe, {
    nome: '',
    produtor: '',
    categoria: '',
    aroma: 0,
    sabor: 0,
    acidez: 0,
    corpo: 0,
    finalizacao: 0
  })
}

function submitForm() {
  addCoffe(coffe)
  success.value = 'Café cadastrado com sucesso!'
  resetForm()
  emit('saved')

  setTimeout(() => {
    success.value = ''
  }, 3000)
}
</script>

<template>
  <form class="coffee-form" @submit.prevent="submitForm">
    <h1>Cadastrar café</h1>

    <div class="field">
      <label for="nome">Nome do café</label>
      <input id="nome" v-model="coffe.nome" type="text" required>
    </div>

    <div class="field">
      <label for="produtor">Produtor</label>
      <input id="produtor" v-model="coffe.produtor" type="text" required>
    </div>

    <div class="field">
      <label for="categoria">Categoria</label>
      <select id="categoria" v-model="coffe.categoria" required>
        <option value="">Selecione uma categoria</option>
        <option>Catuaí Amarelo</option>
        <option>Bourbon Amarelo</option>
        <option>Mundo Novo</option>
        <option>Arábica</option>
      </select>
    </div>

    <div class="scores">
      <div class="field">
        <label for="aroma">Aroma</label>
        <input id="aroma" v-model.number="coffe.aroma" type="number" min="0" max="10" step=".1" required>
      </div>

      <div class="field">
        <label for="sabor">Sabor</label>
        <input id="sabor" v-model.number="coffe.sabor" type="number" min="0" max="10" step=".1" required>
      </div>

      <div class="field">
        <label for="acidez">Acidez</label>
        <input id="acidez" v-model.number="coffe.acidez" type="number" min="0" max="10" step=".1" required>
      </div>

      <div class="field">
        <label for="corpo">Corpo</label>
        <input id="corpo" v-model.number="coffe.corpo" type="number" min="0" max="10" step=".1" required>
      </div>

      <div class="field">
        <label for="finalizacao">Finalização</label>
        <input id="finalizacao" v-model.number="coffe.finalizacao" type="number" min="0" max="10" step=".1" required>
      </div>
    </div>

    <button type="submit">Cadastrar café</button>
    <p v-if="success" class="success">{{ success }}</p>
  </form>
</template>

<style scoped>
.coffee-form {
  width: 90%;
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 10px;
  background: #fffaf5;
}

h1 {
  margin: 0;
  color: #3e2318;
}

.field {
  display: grid;
  gap: 0.4rem;
}

label {
  color: #6f3d28;
  font-weight: bold;
}

input,
select {
  padding: 0.7rem;
  border: 1px solid #d9c1ac;
  border-radius: 6px;
  font-family: inherit;
}

input:focus,
select:focus {
  outline: 2px solid #c76b3f;
  outline-offset: 0;
}

.scores {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.7rem;
}

button {
  padding: 0.8rem;
  border: 0;
  border-radius: 6px;
  color: white;
  background: #6f3d28;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover {
  background: #8b4f32;
}

.success {
  margin: 0;
  color: #2f6b45;
  font-weight: bold;
  text-align: center;
}

@media (max-width: 700px) {
  .scores {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
