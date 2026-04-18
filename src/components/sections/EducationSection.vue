<script setup lang="ts">
import { education } from '../../data/profile.ts'
</script>

<template>
  <section id="education" class="section section-alt">
    <div class="container">
      <h2 class="section-title">Education</h2>
      <div class="education-main">
        <div class="edu-header">
          <div>
            <h3 class="edu-degree">{{ education.degree }}</h3>
            <p class="edu-school">{{ education.school }}{{ education.location ? ` · ${education.location}` : '' }} · {{ education.period }}</p>
          </div>
        </div>
        <p v-if="education.program" class="edu-program">{{ education.program }}</p>
        <div class="edu-dissertation">
          <h4>Dissertation</h4>
          <p class="diss-title">{{ education.dissertation.title }}</p>
          <p class="diss-desc">{{ education.dissertation.description }}</p>
          <a :href="education.dissertation.link" target="_blank" rel="noopener" class="pub-link">
            View Publication →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.education-main {
  max-width: 800px;
}

.edu-header {
  margin-bottom: 1.5rem;
}

.edu-degree {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.edu-school {
  color: var(--accent);
  font-size: 1rem;
  font-weight: 500;
}

.edu-program {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.edu-dissertation {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem;
  border-left: 3px solid var(--accent);
}

.edu-dissertation h4 {
  color: var(--accent);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
}

.diss-title {
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.diss-desc {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.pub-link {
  display: inline-block;
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s;
}

.pub-link:hover {
  opacity: 0.8;
}
</style>
