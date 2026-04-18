<script setup lang="ts">
import { achievements } from '../../data/profile.ts'
</script>

<template>
  <section id="achievements" class="section section-alt">
    <div class="container">
      <h2 class="section-title">Achievements</h2>
      <div class="achievements-grid">
        <div
          v-for="(item, i) in achievements"
          :key="i"
          class="achievement-card"
        >
          <div class="achievement-header">
            <div class="achievement-icon" v-html="item.icon"></div>
            <span class="achievement-year">{{ item.year }}</span>
          </div>
          <h3 class="achievement-title">{{ item.title }}</h3>

          <p class="achievement-desc">{{ item.description }}</p>

          <ul v-if="item.highlights" class="achievement-highlights">
            <li v-for="(h, j) in item.highlights" :key="j">{{ h }}</li>
          </ul>

          <div v-if="item.result" class="achievement-result">
            <span>{{ item.result }}</span>
          </div>

          <!-- Open source contributions -->
          <div v-if="item.contributions" class="contributions-grid">
            <div v-for="(contrib, j) in item.contributions" :key="j" class="contribution-item">
              <span class="contribution-project">{{ contrib.project }}</span>
              <div class="contribution-links">
                <a
                  v-for="(link, k) in contrib.links"
                  :key="k"
                  :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="contribution-link"
                >{{ link.label }}</a>
              </div>
            </div>
          </div>

          <!-- External link -->
          <a
            v-if="item.link"
            :href="item.link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="achievement-link"
          >{{ item.link.label }} →</a>
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

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.25rem;
}

.achievement-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.2s;
}

.achievement-card:hover {
  border-color: rgba(16, 185, 129, 0.3);
  transform: translateY(-2px);
}

.achievement-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.achievement-icon {
  color: var(--accent);
  flex-shrink: 0;
}

.achievement-year {
  font-size: 0.78rem;
  color: var(--text-secondary);
  font-family: 'SF Mono', 'Fira Code', monospace;
  background: var(--bg-primary);
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  border: 1px solid var(--border);
}

.achievement-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.achievement-desc {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.achievement-highlights {
  list-style: none;
  padding: 0;
  margin: 0 0 0.75rem 0;
}

.achievement-highlights li {
  position: relative;
  padding-left: 1.25rem;
  margin-bottom: 0.4rem;
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.achievement-highlights li::before {
  content: '•';
  position: absolute;
  left: 0.25rem;
  color: var(--accent);
  font-weight: 700;
}

.achievement-result {
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin-top: 0.75rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.contributions-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.75rem;
}

.contribution-item {
  font-size: 0.88rem;
}

.contribution-project {
  font-weight: 600;
  color: var(--text-primary);
  display: block;
  margin-bottom: 0.25rem;
}

.contribution-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.contribution-link {
  font-size: 0.8rem;
  color: var(--accent);
  text-decoration: none;
  font-family: 'SF Mono', 'Fira Code', monospace;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}

.contribution-link:hover {
  border-bottom-color: var(--accent);
}

.achievement-link {
  display: inline-block;
  margin-top: 0.75rem;
  font-size: 0.85rem;
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}

.achievement-link:hover {
  border-bottom-color: var(--accent);
}
</style>
