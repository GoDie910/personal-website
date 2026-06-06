<template>
  <main class="contact-view">
    <section class="hero">
      <p class="section-label">CONTACT</p>

      <h1>Let's build something together.</h1>

      <p class="hero-description">
        I'm available for frontend development, web applications,
        game development, and software engineering projects.
        Whether you're looking for a collaborator, developer,
        or simply want to connect, I'd be happy to hear from you.
      </p>

      <p class="location">
        📍 Lima, Peru
      </p>
    </section>

    <section class="contact-section">
      <div class="contact-grid">

        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card resume"
        >
          <div class="card-header">
            <Icon icon="simple-icons:adobeacrobatreader" class="card-icon resume-icon" />
            <h2>Resume</h2>
          </div>

          <p>
            Download my resume to learn more about my professional
            experience, technical skills, and projects.
          </p>

          <span class="contact-link">
            Download CV →
          </span>
        </a>

        <a
          href="mailto:diego.bedrinana.910@gmail.com"
          class="contact-card email"
        >
          <div class="card-header">
            <Icon icon="simple-icons:gmail" class="card-icon gmail-icon" />
            <h2>Email</h2>
          </div>

          <p>
            The best way to reach me for professional opportunities,
            collaborations, or general inquiries.
          </p>

          <span class="contact-link">
            Send Email →
          </span>
        </a>

        <a
          href="https://github.com/GoDie910"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card github"
        >
          <div class="card-header">
            <Icon icon="simple-icons:github" class="card-icon github-icon" />
            <h2>GitHub</h2>
          </div>

          <p>
            Explore my repositories, experiments, game projects,
            and open-source work.
          </p>

          <span class="contact-link">
            View Profile →
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/diego-bed-alb/"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card linkedin"
        >
          <div class="card-header">
            <Icon icon="simple-icons:linkedin" class="card-icon linkedin-icon" />
            <h2>LinkedIn</h2>
          </div>

          <p>
            Connect professionally and stay updated on my latest
            projects and experience.
          </p>

          <span class="contact-link">
            Connect →
          </span>
        </a>

      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
</script>

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
  margin-bottom: 1.5rem;
}

.location {
  font-weight: 600;
  opacity: 0.75;
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
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.card-icon {
  width: 28px;
  height: 28px;
  flex-shrink: 0;

  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.contact-card:hover .card-icon {
  transform: scale(1.1);
}

.resume-icon {
  color: #ec1c24;
}

.gmail-icon {
  color: #ea4335;
}

.github-icon {
  color: #ffffff;
}

.linkedin-icon {
  color: #0a66c2;
}

.contact-card h2 {
  margin: 0;
}

.contact-card p {
  line-height: 1.7;
  opacity: 0.85;
  margin-bottom: 1rem;
}

.contact-link {
  font-weight: 600;
}

.email:hover {
  border-color: #ea4335;
}

.github:hover {
  border-color: #6e5494;
}

.linkedin:hover {
  border-color: #0a66c2;
}

.resume:hover {
  border-color: #22c55e;
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