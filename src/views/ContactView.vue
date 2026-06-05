<template>
  <main class="contact-view">
    <section class="hero">
      <p class="section-label">CONTACT</p>

      <h1>Let's build something together.</h1>

      <p class="hero-description">
        Whether you have a project in mind, a collaboration opportunity,
        or simply want to connect, I'd be happy to hear from you.
      </p>
    </section>

    <section class="contact-section">
      <div class="contact-grid">
        <a
          href="mailto:diego.bedrinana.910@gmail.com"
          class="contact-card"
        >
          <h2>Email</h2>

          <p>
            The best way to reach me for professional opportunities,
            collaborations, or general inquiries.
          </p>

          <span>diego.bedrinana.910@gmail.com</span>
        </a>

        <a
          href="https://github.com/GoDie910"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card"
        >
          <h2>GitHub</h2>

          <p>
            Explore my repositories, experiments, game projects,
            and open-source work.
          </p>

          <span>github.com/GoDie910</span>
        </a>

        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card"
        >
          <h2>LinkedIn</h2>

          <p>
            Connect professionally and stay updated on my latest
            projects and experience.
          </p>

          <span>linkedin.com/in/your-linkedin</span>
        </a>
      </div>
    </section>

    <section class="availability">
      <p class="section-label">CURRENT STATUS</p>

      <h2>Open to opportunities.</h2>

      <p>
        I'm interested in frontend engineering, web application
        development, healthcare technology, game development,
        and product-focused software projects.
      </p>
    </section>
  </main>
</template>

<style scoped>
.contact-view {
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

.contact-section {
  margin-bottom: 6rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

.contact-card {
  display: block;
  text-decoration: none;
  color: inherit;

  padding: 2rem;

  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);

  transition:
    transform 0.2s ease,
    border-color 0.2s ease;
}

.contact-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.3);
}

.contact-card h2 {
  margin-bottom: 1rem;
}

.contact-card p {
  line-height: 1.7;
  opacity: 0.85;
  margin-bottom: 1rem;
}

.contact-card span {
  font-weight: 600;
}

.availability {
  max-width: 700px;
}

.availability h2 {
  margin-bottom: 1rem;
}

.availability p:last-child {
  line-height: 1.8;
  opacity: 0.85;
}

@media (max-width: 768px) {
  .contact-view {
    width: 92%;
    padding: 4rem 0;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>