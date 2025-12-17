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
            Frick okay Idk this is hard to think about. I'm a little nerd who likes video games and likes making them. I've been making games since I was little. Growing up I made games in Scratch, Pygame, Gamemaker Studio, and Unity. I studied for a few years working towards a computer science degree at NC State. I joined the esports group there and quickly fell in love with it. I started doing pretty well, won some smaller tournaments, and I tried to pursue it as a career. I got to learn a lot of skills in a team environment and as a team leader. I was somewhat successful, but got burned out putting so much time into it. Eventually I decided to transfer to SNHU to pursue a degree in game development. This allowed me a unique experience of learning coding at a deeper level and the core aspects of software development. Then switching over to a broader focus on game development in Unreal Engine. In my studies, I got experience designing levels, implementing gameplay mechanics, creating terrain, designing UI, soundtrack composition, and sound design. I've worked on projects with a team, and as a solo dev. I have experience using version control such as Github, Bitbucket, and Jenkins.
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
