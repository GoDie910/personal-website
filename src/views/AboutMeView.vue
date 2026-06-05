<template>
  <main class="about-view">
    <section class="hero">
      <p class="section-label">ABOUT ME</p>

      <h1>Building software with curiosity and intention.</h1>

      <p class="hero-description">
        I'm a software engineer focused on frontend development, user
        experience, and creating products that feel intuitive to use.
        I enjoy building both practical applications and game systems,
        always looking for opportunities to learn and experiment.
      </p>
    </section>

    <section class="content-section">
      <div class="section-header">
        <p class="section-label">MY JOURNEY</p>

        <h2>From curiosity to creation.</h2>
      </div>

      <div class="content">
        <p>
          My path into software development started with a simple interest in
          understanding how technology works. Over time, that curiosity evolved
          into a passion for building applications, solving problems, and
          creating experiences that people genuinely enjoy using.
        </p>

        <p>
          Throughout my career, I've worked on web applications, internal
          business tools, financial platforms, and healthcare-related projects.
          Each project has taught me something new about technology,
          collaboration, and product design.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="section-header">
        <p class="section-label">WHAT I BUILD</p>

        <h2>Software that serves a purpose.</h2>
      </div>

      <div class="content">
        <p>
          I enjoy creating interfaces that feel clean, responsive, and easy to
          understand. My primary focus is frontend development, but I'm also
          interested in application architecture, usability, and long-term
          maintainability.
        </p>

        <p>
          Whether it's a business dashboard, a healthcare platform, or a
          personal project, I try to approach every application with the same
          mindset: build something useful, understandable, and reliable.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="section-header">
        <p class="section-label">GAME DEVELOPMENT</p>

        <h2>Exploring systems and storytelling.</h2>
      </div>

      <div class="content">
        <p>
          Outside of professional software development, I enjoy designing and
          experimenting with games. Game development allows me to explore
          systems design, progression mechanics, worldbuilding, and interactive
          storytelling.
        </p>

        <p>
          I frequently work with engines and tools such as Godot, Unity, and
          RPG Maker, creating prototypes and learning through experimentation.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="section-header">
        <p class="section-label">CURRENT FOCUS</p>

        <h2>Always learning.</h2>
      </div>

      <div class="content">
        <div class="focus-grid">
          <div class="focus-card">
            <h3>Frontend Engineering</h3>
            <p>Vue 3, TypeScript, responsive interfaces, and UI architecture.</p>
          </div>

          <div class="focus-card">
            <h3>Product Development</h3>
            <p>
              Building applications that solve real-world problems and improve
              user workflows.
            </p>
          </div>

          <div class="focus-card">
            <h3>Game Systems</h3>
            <p>
              RPG mechanics, progression systems, inventory design, and player
              experience.
            </p>
          </div>

          <div class="focus-card">
            <h3>Continuous Learning</h3>
            <p>
              Exploring new technologies, development practices, and creative
              challenges.
            </p>
          </div>
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

.focus-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.focus-card {
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition:
    transform 0.2s ease,
    border-color 0.2s ease;
}

.focus-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.3);
}

.focus-card h3 {
  margin-bottom: 0.75rem;
}

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

  .focus-grid {
    grid-template-columns: 1fr;
  }
}
</style>