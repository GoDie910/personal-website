<template>
  <main class="about-view">
    <section class="hero">
      <p class="section-label">ABOUT ME</p>

      <h1>Building software with curiosity and intention.</h1>

      <p class="hero-description">
        I'm a software engineer focused on frontend development, user
        experience, and creating products that feel intuitive to use.
      </p>

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
        <p class="section-label">BIO</p>

        <h2>Who I am.</h2>
      </div>

      <div class="content">
        <p>
          I'm a software engineer based in Peru with a strong focus on frontend
          development and user experience. I enjoy building interfaces that are
          clean, maintainable, and easy to use.
        </p>

        <p>
          Beyond web development, I enjoy experimenting with game development,
          learning new technologies, and designing software systems that balance
          functionality with simplicity.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="section-header">
        <p class="section-label">CAREER</p>

        <h2>Professional background.</h2>
      </div>

      <div class="content">
        <p>
          My professional experience includes frontend development, internal
          business systems, healthcare platforms, financial applications, and
          custom web solutions.
        </p>

        <p>
          Throughout my career I've worked closely with designers, business
          stakeholders, and development teams to deliver reliable software and
          improve user workflows.
        </p>

        <p>
          My primary expertise is frontend engineering, although I also have
          experience working across the full web application stack when
          required.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="section-header">
        <p class="section-label">TECHNOLOGIES</p>

        <h2>Tools I work with.</h2>
      </div>

      <div class="tech-grid">
        <div class="tech-card">
          <h3>Frontend</h3>
          <p>Vue 3, TypeScript, JavaScript, HTML, CSS, Vuetify</p>
        </div>

        <div class="tech-card">
          <h3>Backend</h3>
          <p>PHP, Node.js, .NET, REST APIs</p>
        </div>

        <div class="tech-card">
          <h3>Databases</h3>
          <p>MySQL, SQL Server</p>
        </div>

        <div class="tech-card">
          <h3>Tools</h3>
          <p>Git, GitHub, Linux, VSCodium</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="section-header">
        <p class="section-label">INTERESTS</p>

        <h2>Beyond work.</h2>
      </div>

      <div class="content">
        <p>
          Outside of professional software development, I enjoy creating games,
          experimenting with RPG systems, and exploring interactive
          storytelling.
        </p>

        <p>
          I regularly work on personal projects using Godot, Unity, and RPG
          Maker, building prototypes to learn new design and development
          techniques.
        </p>

        <p>
          I'm also interested in software architecture, user experience design,
          and continuously expanding my technical knowledge.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="section-header">
        <p class="section-label">QUICK FACTS</p>

        <h2>At a glance.</h2>
      </div>

      <div class="focus-grid">
        <div class="focus-card">
          <h3>Location</h3>
          <p>Peru</p>
        </div>

        <div class="focus-card">
          <h3>Specialization</h3>
          <p>Frontend Development</p>
        </div>

        <div class="focus-card">
          <h3>Industry Experience</h3>
          <p>Healthcare, Finance, Business Systems</p>
        </div>

        <div class="focus-card">
          <h3>Personal Projects</h3>
          <p>Game Development & Experimental Systems</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-view {
  width: min(1200px, 90%);
  margin: 0 auto;
  padding: 6rem 0;
}

.hero {
  margin-bottom: 5rem;
}

.section-label {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  opacity: 0.7;
  margin-bottom: 1rem;
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

.content-section {
  margin-bottom: 6rem;
}

.section-header {
  margin-bottom: 2rem;
}

.section-header h2 {
  font-size: 2rem;
  margin-top: 0.5rem;
}

.content {
  max-width: 850px;
}

.content p {
  line-height: 1.9;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.tech-grid,
.focus-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.tech-card,
.focus-card {
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition:
    transform 0.2s ease,
    border-color 0.2s ease;
}

.tech-card:hover,
.focus-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.3);
}

.tech-card h3,
.focus-card h3 {
  margin-bottom: 0.75rem;
}

.tech-card p,
.focus-card p {
  margin: 0;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .about-view {
    width: 92%;
    padding: 4rem 0;
  }

  .content-section {
    margin-bottom: 4rem;
  }

  .tech-grid,
  .focus-grid {
    grid-template-columns: 1fr;
  }
}
</style>