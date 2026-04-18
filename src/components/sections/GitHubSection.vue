<script setup lang="ts">
import { github } from '../../data/profile.ts'
</script>

<template>
  <section id="github" class="section section-alt">
    <div class="container">
      <h2 class="section-title">GitHub</h2>
      <p class="github-intro">
        Open-source contributor with <strong>{{ github.contributions }}</strong> contributions.
        <a :href="github.url" target="_blank" rel="noopener">{{ github.username }} →</a>
      </p>
      <div class="repo-grid">
        <div
          v-for="repo in github.repos"
          :key="repo.name"
          class="repo-card"
        >
          <div class="repo-header">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            <h3 class="repo-name">{{ repo.name }}</h3>
            <span v-if="repo.stars > 0" class="repo-stars">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              {{ repo.stars }}
            </span>
          </div>
          <p class="repo-desc">{{ repo.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.github-intro {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 2rem;
}

.github-intro strong {
  color: var(--accent);
}

.repo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.repo-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.2s;
}

.repo-card:hover {
  border-color: rgba(16, 185, 129, 0.3);
  transform: translateY(-2px);
}

.repo-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.repo-name {
  font-weight: 700;
  color: var(--text-primary);
  font-size: 1rem;
}

.repo-stars {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #f59e0b;
  font-size: 0.85rem;
  font-weight: 600;
}

.repo-desc {
  color: var(--text-secondary);
  font-size: 0.85rem;
  line-height: 1.6;
}
</style>
