<script setup lang="ts">
import { experience } from '../../data/profile.ts'
</script>

<template>
  <section id="experience" class="section section-alt">
    <div class="container">
      <h2 class="section-title">Experience</h2>
      <div class="timeline">
        <div
          v-for="(job, i) in experience"
          :key="i"
          class="timeline-item"
        >
          <div class="timeline-marker">
            <div class="marker-dot" />
          </div>
          <div class="timeline-content">
            <div class="job-header">
              <h3 class="job-role">{{ job.role }}</h3>
              <span class="job-company">{{ job.company }}</span>
            </div>
            <span class="job-period">{{ job.period }}</span>
            <p class="job-desc">{{ job.description }}</p>
            <div class="job-tags">
              <span v-for="tag in job.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-alt {
  background: var(--bg-secondary);
}

.timeline {
  position: relative;
  padding-left: 2rem;
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
  margin-left: 0px;
}

.timeline-content {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.5rem;
  transition: border-color 0.3s;
}

.timeline-content:hover {
  border-color: rgba(16, 185, 129, 0.2);
}

.job-header {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 0.25rem;
}

.job-role {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
}

.job-company {
  color: var(--accent);
  font-weight: 600;
  font-size: 0.95rem;
}

.job-period {
  display: inline-block;
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
  font-family: 'SF Mono', 'Fira Code', monospace;
}

.job-desc {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 0.75rem;
}

.job-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  background: var(--accent-dim);
  color: var(--accent);
  border-radius: 4px;
  font-weight: 500;
  letter-spacing: 0.02em;
}
</style>
