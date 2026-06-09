<template>
  <main class="about-view">
    <section class="hero">
      <p class="section-label">ABOUT ME</p>

      <h1>Building software with curiosity and intention.</h1>

      <p class="hero-description">
        Fullstack software engineer from Peru, building modern web applications,
        business systems, and user-focused software solutions.
      </p>

      <div class="hero-badges">
        <div class="badge">
          <Icon icon="mdi:map-marker-outline" />
          <span>Peru</span>
        </div>
      
        <div class="badge">
          <Icon icon="mdi:briefcase-outline" />
          <span>Software Engineer</span>
        </div>
      
        <div class="badge">
          <Icon icon="mdi:web" />
          <span>Fullstack Developer</span>
        </div>
      </div>

      <div class="hero-actions">
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="cv-button"
        >
          Download CV
        </a>
      </div>
    </section>

    <section class="content-section">
      <div class="section-header">
        <p class="section-label">AT A GLANCE</p>
        <h2>Quick overview.</h2>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <Icon
            icon="mdi:briefcase-outline"
            class="stat-icon"
          />
          <h3>Experience</h3>
          <p>Professional software development across multiple industries.</p>
        </div>

        <div class="stat-card">
          <Icon
            icon="mdi:rocket-launch-outline"
            class="stat-icon"
          />
          <h3>Projects</h3>
          <p>Web applications, internal platforms, and personal products.</p>
        </div>

        <div class="stat-card">
          <Icon
            icon="mdi:tools"
            class="stat-icon"
          />
          <h3>Technology</h3>
          <p>Frontend, backend, databases, and software architecture.</p>
        </div>

        <div class="stat-card">
          <Icon
            icon="mdi:office-building-cog-outline"
            class="stat-icon"
          />
          <h3>Architecture</h3>
          <p>Designing scalable, maintainable software systems and development workflows.</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="section-header">
        <p class="section-label">TECHNOLOGIES</p>
        <h2>Core technologies.</h2>
      </div>
    
      <div class="tech-grid">
        <div class="tech-card">
          <h3>Frontend</h3>
        
          <div class="skill-icons">
            <Icon icon="logos:vue" />
            <Icon icon="logos:angular-icon" />
            <Icon icon="logos:react" />
            <Icon icon="logos:typescript-icon" />
            <Icon icon="logos:vuetifyjs" />
            <Icon icon="logos:vitejs" />
          </div>
        </div>
      
        <div class="tech-card">
          <h3>Backend</h3>
        
          <div class="skill-icons">
            <Icon icon="logos:dotnet" />
            <Icon icon="logos:php" />
            <Icon icon="logos:nodejs-icon" />
            <Icon icon="logos:fastapi-icon" />
            <Icon icon="mdi:api" />
          </div>
        </div>
      
        <div class="tech-card">
          <h3>Databases</h3>
        
          <div class="skill-icons">
            <Icon icon="logos:postgresql" />
            <Icon icon="logos:mysql" />
            <Icon icon="logos:mongodb-icon" />
            <Icon icon="mdi:database-cog" />
          </div>
        </div>
      
        <div class="tech-card">
          <h3>DevOps</h3>
        
          <div class="skill-icons">
            <Icon icon="logos:git-icon" />
            <Icon icon="logos:github-icon" />
            <Icon icon="logos:github-actions" />
            <Icon icon="logos:gitlab-icon" />
            <Icon icon="logos:netlify" />
          </div>
        </div>
      
        <div class="tech-card">
          <h3>Engineering Tools</h3>
        
          <div class="skill-icons">
            <Icon icon="logos:visual-studio-code" />
            <Icon icon="logos:figma" />
            <Icon icon="logos:postman-icon" />
            <Icon icon="logos:swagger" />
          </div>
        </div>
      </div>

      <p class="tech-footer">
        For a complete breakdown of technologies, tools, and domains, explore the
        <RouterLink to="/#skills-section">
          Skills section on the home page
        </RouterLink>
      </p>
    </section>

    <section class="content-section">
      <div class="section-header">
        <p class="section-label">INTERESTS</p>
        <h2>What keeps me learning.</h2>
      </div>
    
      <div class="interests-grid">
        <div class="interest-card">
          <Icon
            icon="mdi:palette-outline"
            class="interest-icon"
          />
          <h3>User Experience</h3>
          <p>
            Creating interfaces that feel intuitive, accessible, and enjoyable to
            use.
          </p>
        </div>
      
        <div class="interest-card">
          <Icon
            icon="mdi:cog-outline"
            class="interest-icon"
          />
          <h3>Software Architecture</h3>
          <p>
            Exploring patterns and practices that improve maintainability and
            scalability.
          </p>
        </div>
      
        <div class="interest-card">
          <Icon
            icon="mdi:laptop"
            class="interest-icon"
          />
          <h3>Modern Web Technologies</h3>
          <p>
            Keeping up with frameworks, tooling, cloud services, and development
            workflows.
          </p>
        </div>
      
        <div class="interest-card">
          <Icon
            icon="mdi:controller-classic-outline"
            class="interest-icon"
          />
          <h3>Game Development</h3>
          <p>
            A personal hobby where I experiment with gameplay systems, RPG
            mechanics, and interactive storytelling.
          </p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="section-header">
        <p class="section-label">JOURNEY</p>
        <h2>Career highlights.</h2>
      </div>

      <div class="timeline">
        <div class="timeline-item">
          <span class="timeline-year">2022</span>
          <p>Started professional software development.</p>
        </div>

        <div class="timeline-item">
          <span class="timeline-year">2023</span>
          <p>Worked on healthcare and business platforms.</p>
        </div>

        <div class="timeline-item">
          <span class="timeline-year">2024</span>
          <p>Expanded into financial systems and frontend engineering.</p>
        </div>

        <div class="timeline-item">
          <span class="timeline-year">Today</span>
          <p>Building modern web applications and personal game projects.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* =========================
   Layout
   ========================= */

.about-view {
  width: min(1200px, 90%);
  margin: 0 auto;
  padding: 6rem 0;
}

.content-section {
  margin-bottom: 6rem;
}

/* =========================
   Hero
   ========================= */

.hero {
  margin-bottom: 6rem;
}

.hero h1 {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.hero-description {
  max-width: 700px;
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.85;
}

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.75rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.hero-actions {
  margin-top: 2rem;
}

.cv-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid currentColor;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.cv-button:hover {
  transform: translateY(-2px);
  opacity: 0.85;
}

/* =========================
   Shared Section Styles
   ========================= */

.section-label {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  opacity: 0.7;
  margin-bottom: 1rem;
}

.section-header {
  margin-bottom: 2rem;
}

.section-header h2 {
  font-size: 2rem;
}

/* =========================
   Cards & Grids
   ========================= */

.stats-grid,
.tech-grid,
.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.stat-card,
.tech-card,
.interest-card {
  padding: 1.5rem;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: transform 0.2s ease;
}

.stat-card:hover,
.tech-card:hover,
.interest-card:hover {
  transform: translateY(-4px);
}

.stat-icon,
.interest-card span {
  display: block;
  margin-bottom: 1rem;
  font-size: 2rem;
}

/* =========================
   Technologies
   ========================= */

.tech-card {
  display: flex;
  flex-direction: column;
}

.tech-card h3 {
  margin-bottom: 1rem;
}

.skill-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.skill-icons :deep(svg) {
  font-size: 2.25rem;
}

.tech-footer {
  margin-top: 2rem;
  text-align: center;
  opacity: 0.7;
}

/* =========================
   Timeline
   ========================= */

.timeline {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.timeline-item {
  padding-left: 1.5rem;
  border-left: 2px solid rgba(255, 255, 255, 0.15);
}

.timeline-year {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.timeline-item p {
  margin: 0;
  line-height: 1.7;
  opacity: 0.85;
}

/* =========================
   Responsive
   ========================= */

@media (max-width: 768px) {
  .about-view {
    width: 92%;
    padding: 4rem 0;
  }

  .content-section {
    margin-bottom: 4rem;
  }

  .hero-badges {
    flex-direction: column;
  }
}
</style>