<script setup lang="ts">
import { resources } from '../../data/profile.ts'
</script>

<template>
  <section id="resources" class="section">
    <div class="container">
      <h2 class="section-title">Resources</h2>
      <p class="section-description">
        Writing about cybersecurity, AI, engineering, and technology. Check out my latest posts, talks, and open source projects.
      </p>
      <div class="resources-grid">
        <a href="https://blog.davidvassallo.me" target="_blank" rel="noopener" class="resource-card featured">
          <div class="resource-icon" style="background: rgba(16, 185, 129, 0.12);">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 19l7-7 3 3-7 7-3-3z" />
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
              <path d="M2 2l7.586 7.586" />
              <circle cx="11" cy="11" r="2" />
            </svg>
          </div>
          <h3 class="resource-title">Personal Blog</h3>
          <p class="resource-description">Deep dives into cybersecurity, AI, and full-stack engineering. Regular posts on technical topics and industry insights.</p>
          <span class="resource-link">Read blog &rarr;</span>
        </a>          
        <a v-for="resource in resources" :key="resource.title" :href="resource.link" target="_blank" rel="noopener" class="resource-card">
          <div class="resource-icon" style="background: rgba(16, 185, 129, 0.12);">            
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </div>
          <h3 class="resource-title">{{ resource.title }}</h3>
          <p class="resource-description">{{ resource.description }}</p>
          <span class="resource-link">View resource &rarr;</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.section-description {
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 600px;
  margin-bottom: 2.5rem;
  line-height: 1.7;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}

.resource-card {
  display: flex;
  flex-direction: column;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.2s;
  text-decoration: none;
  cursor: pointer;
}

.resource-card:hover {
  border-color: rgba(16, 185, 129, 0.3);
  transform: translateY(-2px);
}

.resource-card.featured {
  grid-column: 1 / -1;
}

.resource-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  margin-bottom: 1rem;
  color: var(--accent);
}

.resource-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.resource-description {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.resource-link {
  color: var(--accent);
  font-size: 0.875rem;
  font-weight: 600;
}
</style>
