<script setup lang="ts">
import { ref } from 'vue'
import { name, title, contact } from '../data/profile'

const scrolled = ref(false)

function toggleNav() {
  document.getElementById('mobile-menu')?.classList.toggle('hidden')
}

window.addEventListener('scroll', () => {
  scrolled.value = window.scrollY > 20
})

function scrollTo(section: string) {
  const el = document.getElementById(section)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    document.getElementById('mobile-menu')?.classList.add('hidden')
  }
}
</script>

<template>
  <nav
    class="navbar"
    :class="{ scrolled: scrolled }"
  >
    <div class="container navbar-inner">
      <div class="navbar-brand">DV</div>
      <button class="navbar-toggle" @click="toggleNav" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div id="mobile-menu" class="nav-links hidden">
        <a href="#about" @click.prevent="scrollTo('about')">About</a>
        <a href="#experience" @click.prevent="scrollTo('experience')">Experience</a>
        <a href="#skills" @click.prevent="scrollTo('skills')">Skills</a>
        <a href="#certifications" @click.prevent="scrollTo('certifications')">Certifications</a>
        <a href="#github" @click.prevent="scrollTo('github')">GitHub</a>
        <a href="#contact" @click.prevent="scrollTo('contact')">Contact</a>
      </div>
      <div class="nav-links desktop">
        <a @click.prevent="scrollTo('about')">About</a>
        <a @click.prevent="scrollTo('experience')">Experience</a>
        <a @click.prevent="scrollTo('skills')">Skills</a>
        <a @click.prevent="scrollTo('certifications')">Certifications</a>
        <a @click.prevent="scrollTo('github')">GitHub</a>
        <a @click.prevent="scrollTo('contact')">Contact</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1.25rem 0;
  transition: all 0.3s ease;
  background: transparent;
}

.navbar.scrolled {
  background: rgba(10, 14, 23, 0.95);
  backdrop-filter: blur(10px);
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0.1em;
}

.navbar-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.navbar-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  transition: 0.3s;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: color 0.2s;
  cursor: pointer;
}

.nav-links a:hover {
  color: var(--accent);
}

@media (max-width: 768px) {
  .navbar-toggle {
    display: flex;
  }
  .nav-links.desktop {
    display: none;
  }
  .nav-links {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(10, 14, 23, 0.98);
    padding: 1rem 2rem;
    gap: 1rem;
    border-bottom: 1px solid var(--border);
  }
}
</style>
