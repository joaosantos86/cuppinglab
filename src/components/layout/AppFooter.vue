<script setup>
import { Coffee } from '@lucide/vue'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <p>© {{ year }} Coffee Quality Challenge</p>
    <p>
      Desenvolvido por João Pedro Matos Santos
      <Coffee :size="18" style="display: inline; margin-left: 0.5rem;" />
    </p>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 5%;
  color: #f8ead7;
  background: #3e2318;
}

.footer p {
  margin: 0;
}

@media(max-width:600px) {
  .footer {
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
}
</style>
