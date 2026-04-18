<script setup lang="ts">
import { about, education } from '../../data/profile.ts'
</script>

<template>
  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title">About</h2>
      <div class="about-content">
        <p class="about-text">{{ about }}</p>
        <div class="education-card">
          <h3>Education</h3>
          <p class="edu-degree">{{ education.degree }}</p>
          <p class="edu-school">{{ education.school }} · {{ education.period }}</p>
          <p class="edu-focus">{{ education.focus }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 5rem 0;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 3rem;
  align-items: start;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.education-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.education-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), transparent);
}

.education-card h3 {
  color: var(--accent);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.edu-degree {
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.edu-school {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.edu-focus {
  color: var(--text-secondary);
  font-size: 0.85rem;
  line-height: 1.6;
  font-style: italic;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }
}
</style>
