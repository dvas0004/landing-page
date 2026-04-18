<script setup lang="ts">
import { honors } from '../../data/profile.ts'
</script>

<template>
  <section id="honors" class="section">
    <div class="container">
      <h2 class="section-title">Honors & Awards</h2>
      <div class="timeline">
        <div
          v-for="(honor, i) in honors"
          :key="i"
          class="timeline-item"
        >
          <div class="timeline-marker">
            <div class="marker-dot" />
          </div>
          <div class="timeline-content">
            <div class="honor-header">
              <h3 class="honor-title">{{ honor.title }}</h3>
              <span class="honor-date">{{ honor.date }}</span>
            </div>
            <p class="honor-issuer">{{ honor.issuer }}</p>
            <p class="honor-desc">{{ honor.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  padding-left: 2rem;
  max-width: 800px;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 7px;
  width: 1px;
  background: linear-gradient(to bottom, var(--accent), var(--border));
}

.timeline-item {
  position: relative;
  padding-bottom: 2.5rem;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 0.35rem;
  width: 16px;
}

.marker-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 2px solid var(--accent);
}

.timeline-content {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.5rem;
}

.honor-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
}

.honor-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
}

.honor-date {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-family: 'SF Mono', 'Fira Code', monospace;
}

.honor-issuer {
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.honor-desc {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
}
</style>
