<template>
  <div class="about-page">
    <header class="about-header">
      <div class="about-header-left">
        <span class="about-header-link about-header-link--ghost">
          About
        </span>
      </div>

      <div class="about-header-center">
        <h1>About</h1>
      </div>

      <div class="about-header-right">
        <span class="about-header-link about-header-link--ghost">
          About
        </span>
      </div>
    </header>

    <section class="about-content">
      <div class="about-photo">
        <img src="/portrait.jpg" alt="Portrait of Becky Crawford" />
      </div>

      <div class="about-text">
        <div class="about-section">
          <span class="about-header">Background</span>
          <p class="about-main">
            I'm a game developer with a passion for creating immersive experiences. My journey began early, teaching myself game development through Scratch, Pygame, GameMaker Studio, and Unity before pursuing computer science at NC State. As I was building a technical foundation in programming and software development principles, I joined the university's esports club. I fell in love with competitive esports and quickly excelled, winning some tournaments and competing at a semi-professional level. Soon I discovered an unexpected opportunity to apply my technical skills in a competitive context. I developed Python scripts for performance analysis to help identify areas my teams could improve, created strategic diagramming tools using Processing, and served as a bridge between players and developers - communicating bugs, structural issues, and gameplay ideas. As I progressed in my esports career, I gained experience in team coordination, leadership under pressure, and iterative improvement. However, after experiencing burnout from the intense time commitment, I realized I wanted to channel my passion and technical skills back into game creation, leading me to transfer to SNHU's game development program. This move let me combine my strong foundation in computer science fundamentals with a more specialized expertise in game design and Unreal Engine. During my studies, I picked up my hobby of music production more seriously, and I got to compose soundtracks and work on sound design for many of my projects. My skillset spans gameplay mechanics implementation, UI design, soundtrack composition, level design, terrain creation, sound design, and more. I've worked on projects both as a solo developer and as part of collaborative teams, utilizing industry-standard version control systems including Github, Bitbucket, and Jenkins. I'm excited to bring my technical skills, creative vision, and competitive mindset to more challenging projects to come.
          </p>
        </div>

        <div class="about-section">
          <span class="about-header">Interests</span>
          <p class="about-sub">
            Soccer, Music Production, Esports, Cycling, Hiking
          </p>
        </div>

        <div class="about-section">
          <span class="about-header">Favorite Games</span>
          <p class="about-sub">
            PUBG, Counter Strike, Minecraft, Age of Empires II: DE, OpenTTD, Kerbal Space Program, Dwarf Fortress, Factorio, Football Manager
          </p>
        </div>
      </div>
    </section>
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
      outline: 4px solid #f76c45;
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
