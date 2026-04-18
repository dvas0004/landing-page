<script setup lang="ts">
// Flat skills list organized by category
const skills = [
  {
    category: 'Languages',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7V4h16v3M9 20h6M12 4v16"/></svg>',
    items: ['Rust', 'Python', 'JavaScript', 'Java', 'Kotlin', 'Go', 'TypeScript', 'HTML/CSS', 'SQL', 'PHP', 'Ruby', 'Bash', 'PowerShell'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
    items: ['Google ADK', 'Vue.js', 'React', 'Node.js', 'Flask', 'FastAPI', 'Spring', 'React-Native', 'Keras', 'Scikit-learn', 'GinGonic'],
  },
  {
    category: 'Databases',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'CouchDB', 'OpenSearch', 'ElasticSearch'],
  },
  {
    category: 'Security',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    items: ['Network Security', 'Penetration Testing', 'Firewalls', 'IDS/IPS', 'Threat Modeling', 'Malware Analysis'],
  },
  {
    category: 'DevOps & Infrastructure',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    items: ['Docker', 'ELK Stack', 'CI/CD', 'Linux', 'Monitoring', 'Automation', 'Git', 'InfluxDB', 'Grafana'],
  },
  {
    category: 'AI & Data',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a4 4 0 0 1 4 4c0 1.1-.9 2-2 2h-4a2 2 0 0 1-2-2 4 4 0 0 1 4-4z"/><path d="M8 8v2a4 4 0 0 0 8 0V8"/><path d="M5 15h14"/><path d="M7 19h10"/><path d="M9 13v6"/><path d="M15 13v6"/></svg>',
    items: ['Machine Learning', 'Data Mining', 'Deep Learning', 'NLP', 'Anomaly Detection', 'Pattern Analysis', 'LLM', 'Prompt Engineering', 'Agentic AI'],
  },
]
</script>

<template>
  <section id="skills" class="section section-alt">
    <div class="container">
      <h2 class="section-title">Skills</h2>
      <div class="skills-grid">
        <div
          v-for="skill in skills"
          :key="skill.category"
          class="skill-category"
        >
          <div class="skill-icon" v-html="skill.icon"></div>
          <h3 class="skill-category-name">{{ skill.category }}</h3>
          <div class="skill-items">
            <span v-for="item in skill.items" :key="item" class="skill-item">{{ item }}</span>
          </div>
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}

.skill-category {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.2s;
}

.skill-category:hover {
  border-color: rgba(16, 185, 129, 0.3);
  transform: translateY(-2px);
}

.skill-icon {
  color: var(--accent);
  margin-bottom: 0.75rem;
}

.skill-category-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.skill-item {
  font-size: 0.78rem;
  padding: 0.2rem 0.55rem;
  background: var(--bg-primary);
  color: var(--text-secondary);
  border-radius: 4px;
  border: 1px solid var(--border);
  font-weight: 500;
}
</style>
