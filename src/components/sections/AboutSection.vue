<script setup lang="ts">
import { about } from '../../data/profile.ts'
</script>

<template>
  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title">About</h2>
      <p class="about-text">{{ about }}</p>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 5rem 0;
}

.about-text {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  text-align: center;
}

@media (max-width: 768px) {
  .about-text {
    padding: 0 1.5rem;
  }
}
</style>
