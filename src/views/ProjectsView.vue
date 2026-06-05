<template>
  <main class="projects-view">
    <section class="hero">
      <p class="section-label">PROJECTS</p>

      <h1>Things I've built.</h1>

      <p class="hero-description">
        A collection of software products, web applications, and game
        development projects focused on creating useful and engaging
        experiences.
      </p>
    </section>

    <section class="projects-section">
      <div class="section-header">
        <p class="section-label">SOFTWARE</p>

        <h2>Professional Projects</h2>
      </div>

      <div class="projects-grid">
        <article class="project-card">
          <h3>Trainimize</h3>

          <p>
            A fitness tracking platform focused on logging workouts,
            exercises, sets, and repetitions. The application analyzes
            training history to help users understand their progress and
            identify opportunities for improvement.
          </p>

          <div class="project-tags">
            <span>Vue</span>
            <span>TypeScript</span>
            <span>Analytics</span>
            <span>Fitness</span>
          </div>
        </article>

        <article class="project-card">
          <h3>Tinnitus</h3>

          <p>
            A medical platform designed to support tinnitus treatment
            through remote therapy tools, appointment scheduling,
            patient management, and communication between patients
            and healthcare professionals.
          </p>

          <div class="project-tags">
            <span>Healthcare</span>
            <span>Scheduling</span>
            <span>Telemedicine</span>
            <span>Web App</span>
          </div>
        </article>
      </div>
    </section>

    <section class="projects-section">
      <div class="section-header">
        <p class="section-label">GAMES</p>

        <h2>Game Development</h2>
      </div>

      <div class="projects-grid">
        <article class="project-card">
          <h3>Jormun</h3>

          <p>
            A short narrative-focused game created for a game jam.
            The project explores storytelling, atmosphere, and
            player immersion through a compact experience.
          </p>

          <a
            href="https://godie910.itch.io/jormun"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link"
          >
            Play on itch.io →
          </a>
        </article>

        <article class="project-card">
          <h3>Goblin Game</h3>

          <p>
            An RPG Maker project centered around goblins, world-building,
            progression systems, and experimentation with role-playing
            game mechanics.
          </p>

          <a
            href="https://github.com/GoDie910/test-rmmz-ggg"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link"
          >
            View on GitHub →
          </a>
        </article>

        <article class="project-card">
          <h3>Experimental Projects</h3>

          <p>
            A collection of prototypes, gameplay systems, and technical
            experiments created while exploring game design, AI behavior,
            progression systems, and player interaction.
          </p>

          <div class="project-tags">
            <span>Godot</span>
            <span>Unity</span>
            <span>RPG Maker</span>
            <span>Prototyping</span>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.projects-view {
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
  opacity: 0.8;
}

.projects-section {
  margin-bottom: 6rem;
}

.section-header {
  margin-bottom: 2rem;
}

.section-header h2 {
  font-size: 2rem;
  margin-top: 0.5rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

.project-card {
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  transition:
    transform 0.2s ease,
    border-color 0.2s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.3);
}

.project-card h3 {
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.project-card p {
  line-height: 1.7;
  opacity: 0.85;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.project-tags span {
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  font-size: 0.85rem;
  background: rgba(255, 255, 255, 0.08);
}

.project-link {
  display: inline-block;
  margin-top: 1.5rem;
  text-decoration: none;
  font-weight: 600;
}

@media (max-width: 768px) {
  .projects-view {
    width: 92%;
    padding: 4rem 0;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>