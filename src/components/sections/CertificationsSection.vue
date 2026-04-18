<script setup lang="ts">
import { certifications } from '../../data/profile.ts'
</script>

<template>
  <section id="certifications" class="section">
    <div class="container">
      <h2 class="section-title">Certifications & Honors</h2>
      <div class="cert-grid">
        <div
          v-for="cert in certifications"
          :key="cert.name"
          class="cert-card"
        >
          <div class="cert-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <div>
            <p class="cert-name">{{ cert.name }}</p>
            <p class="cert-issuer">{{ cert.issuer }}</p>
          </div>
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
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.25rem;
  transition: all 0.2s;
}

.cert-card:hover {
  border-color: rgba(16, 185, 129, 0.3);
  transform: translateY(-2px);
}

.cert-icon {
  color: var(--accent);
  flex-shrink: 0;
}

.cert-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text-primary);
  margin-bottom: 0.15rem;
}

.cert-issuer {
  font-size: 0.8rem;
  color: var(--text-secondary);
}
</style>
