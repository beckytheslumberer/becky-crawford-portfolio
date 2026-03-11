<script setup>
  import AppFooter from '@/components/AppFooter.vue'
</script>
<template>
  <div class="about-page">
    <header class="about-header">
      <div class="about-header-left">
        <span class="about-header-link about-header-link--ghost">
          About Me
        </span>
      </div>

      <div class="about-header-center">
        <h1>About Me</h1>
      </div>

      <div class="about-header-right">
        <span class="about-header-link about-header-link--ghost">
          About Me
        </span>
      </div>
    </header>

    <section class="about-content">
      <div class="about-photo">
        <img src="/portrait.jpg" alt="Portrait of Becky Crawford" />
      </div>

      <div class="about-text">
        <div class="about-section">
          <p class="about-main">
            Hi, I’m Becky Crawford — a Gameplay Programmer focused on building expressive, systems-driven experiences in Unreal Engine 5.

            I’ve been making games since I was young, starting with Scratch before moving through Pygame, GameMaker Studio, and Unity. That early curiosity grew into a deeper interest in programming, systems design, and player interaction emerging from well-structured mechanics. I later pursued computer science studies at NC State, where I developed a strong foundation in software development and problem solving.

            During college, I joined the university esports club and unexpectedly discovered another side of game development: analyzing games as complex systems. Competing at a semi-professional level taught me how small mechanical and feedback changes can dramatically affect player experience. I began applying my programming skills directly to competition by building Python tools for performance analysis, creating strategic visualization tools using Processing, and acting as a bridge between players and developers by communicating gameplay issues and design insights.

            That experience shaped how I approach development today — with a strong focus on iteration, clarity, and player-centered systems design.

            After stepping away from competitive esports, I transferred to Southern New Hampshire University’s Game Programming and Development program to fully focus on creating games. There, I specialized in Unreal Engine development, working across gameplay programming, UI systems, technical art workflows, and interactive audio.
          </p>
        </div>

        <div class="about-section">
          <p class="about-main">
            My work combines programming and creativity, including:<br />

            • Gameplay systems and mechanics implementation (C++ & Blueprints)<br />
            <!-- • Shader experimentation and real-time visuals<br /> -->
            <!-- • Interactive audio and sound design using MetaSounds<br /> -->
            • UI and player feedback systems<br />

            • Level and environment development<br />

            • Music composition and soundtrack production<br />

            I enjoy working at the intersection of engineering and art — building tools and systems that empower expressive gameplay while remaining performant and scalable.

            Whether working solo or collaboratively, I emphasize iterative development, clear communication, and thoughtful technical design.
            <!-- or Technical Artist -->
            I’m currently seeking opportunities as a Gameplay Programmer, where I can contribute strong technical foundations, creative problem-solving, and a competitive mindset shaped by years of esports experience.
          </p>
        </div>

        <div class="about-section">
          <span class="about-header">Interests</span>
          <p class="about-sub">
            Soccer • Music Production • Esports • Cycling • Hiking
          </p>
        </div>

        <div class="about-section">
          <span class="about-header">Favorite Games</span>
          <p class="about-sub">
            PUBG • Minecraft • Age of Empires II: DE • Kerbal Space Program • Dwarf Fortress • Factorio • Football Manager
          </p>
        </div>
      </div>
    </section>
    <AppFooter />
  </div>
</template>


<style scoped>
  .about-page {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    min-height: calc(100vh - 120px);
  }

  .about-header {
    padding-top: 0.5rem;
    display: flex;
    align-items: center;
  }

  .about-header-left,
  .about-header-right {
    min-width: max-content;
    padding-top: 2.5rem;
  }

  .about-header-center {
    flex: 1;
    text-align: center;
  }

    .about-header-center h1 {
      font-size: 3rem;
      font-weight: 600;
      margin: 0;
      color: #ffffff;
    }

  .about-header-link--ghost {
    visibility: hidden;
  }

  /* main content layout */
  .about-content {
    display: grid;
    grid-template-columns: minmax(0, 280px) minmax(0, 1fr);
    gap: 2rem;
    align-items: start;
  }

  /* portrait */
  .about-photo img {
    width: 100%;
    max-width: 280px;
    border-radius: 16px;
    object-fit: cover;
    display: block;
    margin-top: 1.25rem;
  }

  /* text blocks */
  .about-text {
    display: flex;
    flex-direction: column;
    color: #ffffff;
  }

  .about-photo {
    position: relative;
  }

    .about-photo img {
      width: 100%;
      max-width: 280px;
      border-radius: 20px;
      object-fit: cover;
      display: block;
      padding: 4px;
      outline: 4px solid #ffffff;
      outline-offset: 4px;
      background: #000000;
    }

  .about-section {
    margin-bottom: 1.5rem;
    }

  .about-main {
    font-size: 1rem;
    line-height: 1.7;
    margin: 0;
    }

  .about-sub {
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
    }

  /* stack on small screens */
  @media (max-width: 768px) {
    .about-content {
      grid-template-columns: 1fr;
    }

    .about-photo {
      display: flex;
      justify-content: center;
    }

      .about-photo img {
        max-width: 220px;
      }
  }
</style>
