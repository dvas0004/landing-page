<script setup lang="ts">
import { certifications } from '../../data/profile.ts'
</script>

<template>
  <section id="certifications" class="section section-alt">
    <div class="container">
      <h2 class="section-title">Certifications</h2>
      <div class="cert-grid">
        <div
          v-for="(cert, i) in certifications"
          :key="i"
          class="cert-card"
        >
          <div class="cert-header">
            <span class="cert-name">{{ cert.name }}</span>
            <span class="cert-year">{{ cert.year }}</span>
          </div>
          <p class="cert-issuer">{{ cert.issuer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.cert-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.25rem;
  transition: border-color 0.3s;
}

.cert-card:hover {
  border-color: rgba(16, 185, 129, 0.2);
}

.cert-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.cert-name {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text-primary);
}

.cert-year {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-family: 'SF Mono', 'Fira Code', monospace;
  white-space: nowrap;
}

.cert-issuer {
  color: var(--accent);
  font-size: 0.85rem;
}
</style>
