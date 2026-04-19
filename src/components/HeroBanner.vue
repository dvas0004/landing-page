<script setup lang="ts">
// Import profile data from the centralized profile module
import { name, title, tagline, contact } from '../data/profile.ts'

// Smooth-scroll handler: scrolls the page to the section with the given id
function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="hero" class="hero">
    <!-- Decorative radial-gradient background overlay -->
    <div class="hero-bg" />

    <div class="container hero-content">
      <!-- Left side: personal info and CTA buttons -->
      <div class="hero-text">
        <p class="hero-greeting">Hello, I'm</p>
        <h1 class="hero-name">{{ name }}</h1>
        <p class="hero-title">{{ title }}</p>
        <p class="hero-tagline">{{ tagline }}</p>
        <div class="hero-actions">
          <!-- "Get in Touch" scrolls to the contact section -->
          <a href="#contact" @click.prevent="scrollToSection('contact')" class="btn btn-primary">Get in Touch</a>
          <!-- Opens the blog URL in a new tab -->
          <a :href="contact.blog" target="_blank" rel="noopener" class="btn btn-secondary">View Blog</a>
        </div>
      </div>

      <!-- Right side: concentric orbiting navigation rings -->
      <div class="hero-visual">
        <!-- Each ring rotates around the center dot; buttons inside link to page sections -->
        <div class="orbit-ring ring-8">
          <span class="orbit-dot" />
          <button class="orbit-label" @click.stop="scrollToSection('contact')">Contact</button>
        </div>
        <div class="orbit-ring ring-7">
          <span class="orbit-dot" />
          <button class="orbit-label" @click.stop="scrollToSection('about')">About</button>
        </div>
        <div class="orbit-ring ring-6">
          <span class="orbit-dot" />
          <button class="orbit-label" @click.stop="scrollToSection('experience')">Experience</button>
        </div>
        <div class="orbit-ring ring-5">
          <span class="orbit-dot" />
          <button class="orbit-label" @click.stop="scrollToSection('achievements')">Achievements</button>
        </div>
        <div class="orbit-ring ring-4">
          <span class="orbit-dot" />
          <button class="orbit-label" @click.stop="scrollToSection('cybersift')">Cybersift</button>
        </div>
        <div class="orbit-ring ring-3">
          <span class="orbit-dot" />
          <button class="orbit-label" @click.stop="scrollToSection('education')">Education</button>
        </div>
        <div class="orbit-ring ring-2">
          <span class="orbit-dot" />
          <button class="orbit-label" @click.stop="scrollToSection('skills')">Skills</button>
        </div>

        <!-- Central glowing dot -->
        <div class="center-dot" />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Full-viewport hero section with centered content */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 6rem 0 4rem;
}

/* Decorative radial-gradient background for subtle green glow */
.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 70% 40%, rgba(16, 185, 129, 0.06) 0%, transparent 60%),
    radial-gradient(ellipse 40% 80% at 20% 80%, rgba(16, 185, 129, 0.04) 0%, transparent 50%);
  pointer-events: none;
}

/* Flex layout: text on left, orbits on right */
.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  position: relative;
  z-index: 1;
}

/* Personal info block */
.hero-text {
  flex: 1;
  max-width: 600px;
}

/* "Hello, I'm" label in accent color */
.hero-greeting {
  color: var(--accent);
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

/* Large responsive name using clamp() */
.hero-name {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

/* Job title, slightly smaller */
.hero-title {
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

/* Brief descriptive tagline */
.hero-tagline {
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 500px;
  line-height: 1.7;
  margin-bottom: 2rem;
}

/* CTA button row */
.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Base button styles */
.btn {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.75rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.02em;
}

/* Primary filled button (accent color) */
.btn-primary {
  background: var(--accent);
  color: #000;
  border: none;
}
.btn-primary:hover {
  background: var(--accent-hover);
  color: #000;
  transform: translateY(-1px);
  box-shadow: 0 4px 20px var(--glow);
}

/* Secondary outline button */
.btn-secondary {
  background: transparent;
  color: var(--accent);
  border: 1px solid var(--accent);
}
.btn-secondary:hover {
  background: var(--accent-dim);
  color: var(--accent);
  transform: translateY(-1px);
}

/* Right-side visual: fixed-size container for orbit rings */
.hero-visual {
  flex-shrink: 0;
  width: 320px;
  height: 320px;
  position: relative;
}

/* Shared orbit ring: centered, circular, semi-transparent border */
.orbit-ring {
  position: absolute;
  border: 1px solid rgba(16, 185, 129, 0.15);
  border-radius: 50%;
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  overflow: visible;
}

/* Accent dot at the top of each ring */
.orbit-dot {
  position: absolute;
  top: 0;
  left: 50%;
  width: 8px;
  height: 8px;
  background: var(--accent);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 8px var(--glow);
}

/* Individual ring sizes and rotation speeds (alternating directions) */
.orbit-ring.ring-1 {
  width: 100px;
  height: 100px;
  animation: spin 20s linear infinite;
}
.orbit-ring.ring-2 {
  width: 150px;
  height: 150px;
  animation: spin 30s linear infinite reverse;
}
.orbit-ring.ring-3 {
  width: 190px;
  height: 190px;
  animation: spin 40s linear infinite;
}
.orbit-ring.ring-4 {
  width: 210px;
  height: 210px;
  animation: spin 35s linear infinite reverse;
}
.orbit-ring.ring-5 {
  width: 250px;
  height: 250px;
  animation: spin 45s linear infinite;
}
.orbit-ring.ring-6 {
  width: 290px;
  height: 290px;
  animation: spin 55s linear infinite reverse;
}
.orbit-ring.ring-7 {
  width: 330px;
  height: 330px;
  animation: spin 65s linear infinite;
}
.orbit-ring.ring-8 {
  width: 370px;
  height: 370px;
  animation: spin 75s linear infinite reverse;
}

/* Central glowing dot at the center of all rings */
.center-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  background: var(--accent);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 20px var(--glow), 0 0 40px var(--glow);
}

/* Spin keyframes: each ring rotates around the center point */
@keyframes spin {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

/* Navigation label on each ring: small, uppercase text positioned near the top */
.orbit-label {
  position: absolute;
  top: 12px;
  left: 50%;
  font-size: 0.65rem;
  font-weight: 600;
  color: var(--text-secondary);
  white-space: nowrap;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  pointer-events: auto;
  cursor: pointer;
  background: none;
  border: none;
  padding: 4px 8px;
  margin: 0;
  font-family: inherit;
  line-height: inherit;
  text-shadow: 0 0 6px rgba(16, 185, 129, 0.3);
  transition: color 0.2s, text-shadow 0.2s;
}
.orbit-label:hover {
  color: var(--accent);
  text-shadow: 0 0 8px var(--glow), 0 0 16px var(--glow);
}

/* Counter-spin animations keep labels upright (readable) as their ring rotates.
   Each ring's label counter-rotates at the same speed but opposite direction. */
.orbit-ring.ring-2 .orbit-label {
  animation: counter-spin 30s linear infinite;
}
.orbit-ring.ring-3 .orbit-label {
  animation: counter-spin 40s linear infinite reverse;
}
.orbit-ring.ring-4 .orbit-label {
  animation: counter-spin 35s linear infinite;
}
.orbit-ring.ring-5 .orbit-label {
  animation: counter-spin 45s linear infinite reverse;
}
.orbit-ring.ring-6 .orbit-label {
  animation: counter-spin 55s linear infinite;
}
.orbit-ring.ring-7 .orbit-label {
  animation: counter-spin 65s linear infinite reverse;
}
.orbit-ring.ring-8 .orbit-label {
  animation: counter-spin 75s linear infinite;
}

/* Counter-spin keyframes (same as spin, used to cancel ring rotation for labels) */
@keyframes counter-spin {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

/* Responsive: stack content vertically on small screens, shrink orbit visual */
@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
  }
  .hero-text {
    max-width: 100%;
  }
  .hero-tagline {
    max-width: 100%;
  }
  .hero-actions {
    justify-content: center;
  }
  .hero-visual {
    width: 260px;
    height: 260px;
  }
}
</style>
