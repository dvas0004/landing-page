<script setup lang="ts">
const products = [
  {
    name: 'SIEM (Sentio)',
    description: 'Security Information & Event Management with AI-driven threat detection, IBM X-Force intelligence integration, and customizable defense strategies.',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  },
  {
    name: 'TUTELA',
    description: 'Vulnerability assessment and discovery across all assets, providing comprehensive visibility into security weaknesses.',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>',
  },
  {
    name: 'DRIVE',
    description: 'Secure file transfer and sharing platform with self-hosted and SaaS deployment options.',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
  },
  {
    name: 'DNS Protect',
    description: 'Protection from phishing and malware across 80+ threat categories, securing all network traffic.',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  },
  {
    name: 'WEB Protect',
    description: 'Web Application Firewall (WAF) protecting APIs and web applications from sophisticated attacks.',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/></svg>',
  },
  {
    name: 'Mobile Endpoint Security',
    description: 'Comprehensive protection for iOS, Android, and ChromeOS devices across your organization.',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
  },
]

const services = [
  { name: 'SOC Monitoring', description: 'Vigilant surveillance, real-time threat detection, and incident response' },
  { name: 'Managed Security', description: 'End-to-end cyber security management for infrastructure and applications' },
  { name: 'Compliance', description: 'ISO 27001 and industry standard compliance guidance' },
  { name: 'Penetration Testing', description: 'Infrastructure, web, Android & desktop app testing (PTES, OWASP)' },
  { name: 'Staff Training', description: 'Security awareness programs against phishing and emerging threats' },
]
</script>

<template>
  <section id="cybersift" class="section section-alt">
    <div class="container">
      <h2 class="section-title">CyberSift</h2>
      <p class="section-subtitle">
        Co-Founder & CTO — AI-powered cybersecurity platform based in Malta
      </p>

      <div class="cybersift-intro">
        <p>
          CyberSift delivers real-time adversary intelligence to detect, contain, and stop cyber threats before they cause damage. Our AI-driven platform merges <strong>SIEM</strong>, vulnerability detection, and host forensics into a unified dashboard, moving faster than the attack itself.
        </p>
      </div>

      <h3 class="subsection-title">Products</h3>
      <div class="products-grid">
        <div
          v-for="product in products"
          :key="product.name"
          class="product-card"
        >
          <div class="product-icon" v-html="product.icon"></div>
          <h4 class="product-name">{{ product.name }}</h4>
          <p class="product-desc">{{ product.description }}</p>
        </div>
      </div>

      <h3 class="subsection-title">Services</h3>
      <div class="services-grid">
        <div
          v-for="service in services"
          :key="service.name"
          class="service-item"
        >
          <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="service-name">{{ service.name }}</span>
          <span class="service-desc">{{ service.description }}</span>
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

.section-alt {
  background: var(--bg-secondary);
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.section-subtitle {
  text-align: center;
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 2.5rem;
}

.cybersift-intro {
  max-width: 700px;
  margin: 0 auto 2.5rem;
  text-align: center;
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

.subsection-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: center;
  margin-bottom: 1.25rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
  margin-bottom: 3rem;
}

.product-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.2s;
}

.product-card:hover {
  border-color: rgba(16, 185, 129, 0.3);
  transform: translateY(-2px);
}

.product-icon {
  color: var(--accent);
  margin-bottom: 0.75rem;
}

.product-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.product-desc {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 0.75rem;
  max-width: 900px;
  margin: 0 auto;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  transition: all 0.2s;
}

.service-item:hover {
  border-color: rgba(16, 185, 129, 0.25);
}

.check-icon {
  color: var(--accent);
  flex-shrink: 0;
}

.service-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
}

.service-desc {
  font-size: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.4;
}
</style>
