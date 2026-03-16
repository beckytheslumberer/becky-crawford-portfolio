<script setup>
  import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="bunny-page">
    <div class="bunny-back">
      <RouterLink to="/">
        ← Back to Home
      </RouterLink>
    </div>

    <header class="bunny-header">
      <div class="bunny-header-left">
        <span class="bunny-header-link bunny-header-link--ghost"></span>
      </div>

      <div class="bunny-header-center">
        <h1>Bunny and Wunny Escape!</h1>
      </div>

      <div class="bunny-header-right">
        <span class="bunny-header-link bunny-header-link--ghost"></span>
      </div>
    </header>

    <main class="bunny-content">
      <section class="bunny-overview">
        <h2 class="bunny-overview-title">Bunny and Wunny Escape</h2>
        <p class="bunny-overview-subtitle">
          Global Game Jam 2026 – Stealth Puzzle Game
        </p>

        <p class="bunny-overview-body">
          Bunny and Wunny Escape is a stealth puzzle game I made for the
          <a href="https://globalgamejam.org/games/2026/bunny-and-wunny-escape-8"
             target="_blank"
             rel="noopener noreferrer">
            Global Game Jam 2026
          </a>, where Bunny and Wunny must mask their feelings from their caretaker.
          If the caretaker spots Bunny or Wunny not smiling, they step in to “help.”
          Bunny and Wunny have to work together to escape: Wunny is always smiling
          (except when he gets stinky), and the caretakers always assume Bunny isn’t
          smiling because of her beak. Wunny needs a shower to stay happy, and Bunny
          needs a good disguise. Be especially careful of the red caretaker by the
          front door – Bunny and Wunny need to be clean and disguised to fool them.
        </p>

        <p class="bunny-overview-links">
          <a href="https://beckyflower.itch.io/bunny-and-wunny-escape"
             target="_blank"
             rel="noopener noreferrer"
             class="bunny-overview-link">
            Play Bunny and Wunny Escape on itch.io →
          </a>
        </p>
      </section>

      <section class="bunny-grid">
        <!-- 1. Intro -->
        <article class="bunny-item">
          <h2 class="bunny-item-title">Bunny and Wunny Intro</h2>
          <div class="bunny-item-video-wrap">
            <video class="bunny-item-video"
                   src="/BunnyWunnyIntro.mp4"
                   autoplay
                   loop
                   muted
                   playsinline></video>
          </div>
          <p class="bunny-item-text">
            Shows the main menu, the level zoomed out, and switching between the characters Bunny and Wunny.
          </p>
        </article>

        <!-- 2. Wunny Stinky -->
        <article class="bunny-item">
          <h2 class="bunny-item-title">Wunny Is Stinky</h2>
          <div class="bunny-item-video-wrap">
            <video class="bunny-item-video"
                   src="/WunnyStinky.mp4"
                   autoplay
                   loop
                   muted
                   playsinline></video>
          </div>
          <p class="bunny-item-text">
            Wunny is stinky and sad. Bunny helps him out by turning on the shower.
          </p>
        </article>

        <!-- 3. Bunny Caught -->
        <article class="bunny-item">
          <h2 class="bunny-item-title">Bunny Gets Caught</h2>
          <div class="bunny-item-video-wrap">
            <video class="bunny-item-video"
                   src="/BunnyCaught.mp4"
                   autoplay
                   loop
                   muted
                   playsinline></video>
          </div>
          <p class="bunny-item-text">
            Bunny taunts the caretaker, and tries to run away. But she gets caught!
          </p>
        </article>

        <!-- 4. Bunny Disguised -->
        <article class="bunny-item">
          <h2 class="bunny-item-title">Bunny in Disguise</h2>
          <div class="bunny-item-video-wrap">
            <video class="bunny-item-video"
                   src="/BunnyDisguised.mp4"
                   autoplay
                   loop
                   muted
                   playsinline></video>
          </div>
          <p class="bunny-item-text">
            Bunny slips into disguise. Now the caretakers don't try and chase her on sight.
          </p>
        </article>

        <!-- 5. Bunny & Wunny Escape -->
        <article class="bunny-item">
          <h2 class="bunny-item-title">Bunny and Wunny Escape</h2>
          <div class="bunny-item-video-wrap">
            <video class="bunny-item-video"
                   src="/BunnyWunnyEscape.mp4"
                   autoplay
                   loop
                   muted
                   playsinline></video>
          </div>
          <p class="bunny-item-text">
            Bunny and Wunny break free. They go enjoy the outside world with its sunshine, candy rain, and confetti.
          </p>
        </article>
      </section>

      <section class="bunny-conclusion">
        <h2 class="bunny-conclusion-title">Game Jam Reflections</h2>
        <p class="bunny-conclusion-body">
          Participating in this jam was a big personal milestone. I challenged myself
          to solo‑develop a game in a week, and seeing Bunny and Wunny Escape come
          together was incredibly rewarding. The first development day in Unreal
          Engine felt discouraging—I originally wanted full two‑player support with
          separate inputs for each character and spent an entire day wrestling with
          that setup. In the end, switching to a single controller with character
          swapping turned out to be the right choice; it feels snappy and fun in
          practice, and that initial failure made the final result even more
          satisfying.
        </p>
        <p class="bunny-conclusion-body">
          One of my favorite outcomes is the dynamic between the characters: in
          gameplay, Bunny effectively becomes a caretaker for Wunny. To avoid the
          caretakers’ intervention, the player has to take care of the children
          themselves—keeping Wunny clean and cheerful while helping Bunny stay
          disguised. That relationship, and the way it’s expressed through the
          mechanics, is what I’m most proud of in this project.
        </p>
      </section>

    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.bunny-page {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-height: calc(100vh - 120px);
}

/* Header */
.bunny-header {
  padding-top: 0.5rem;
  display: flex;
  align-items: center;
}

.bunny-header-left,
.bunny-header-right {
  min-width: max-content;
  padding-top: 2.5rem;
}

.bunny-header-center {
  flex: 1;
  text-align: center;
}

.bunny-header-center h1 {
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0;
  color: #ffffff;
}

.bunny-header-link--ghost {
  visibility: hidden;
}

/* Content layout */
.bunny-content {
  padding-top: 1rem;
}

/* One item per row */
.bunny-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
}

/* Individual item */
.bunny-item {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 960px;
  margin: 0 auto;
}

.bunny-item-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #ffffff;
}

/* Video styling */
.bunny-item-video-wrap {
  border-radius: 16px;
  overflow: hidden;
  background: #000000;
  padding: 6px;
}

.bunny-item-video {
  width: 100%;
  display: block;
  object-fit: cover;
  border-radius: 12px;
}

/* Description text */
.bunny-item-text {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #dddfe8;
}

  .bunny-overview {
    max-width: 960px;
    margin: 0 auto 2.5rem;
    padding: 1.5rem 1.25rem;
    border-radius: 16px;
    background: rgba(10, 10, 16, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.06);
  }

  .bunny-overview-title {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 600;
    color: #ffffff;
  }

  .bunny-overview-subtitle {
    margin: 0.35rem 0 0.75rem;
    font-size: 1rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #f5d1a5;
  }

  .bunny-overview-body {
    margin: 0 0 0.5rem;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #dddfe8;
  }

  .bunny-overview-links {
    margin: 0.25rem 0 0;
  }

  .bunny-conclusion {
    max-width: 960px;
    margin: 2.5rem auto 0;
    padding: 1.5rem 1.25rem 0;
  }

  .bunny-conclusion-title {
    margin: 0 0 0.75rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: #ffffff;
  }

  .bunny-conclusion-body {
    margin: 0 0 0.75rem;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #dddfe8;
  }

  .bunny-back {
    max-width: 960px;
    padding: 0.5rem 0 0 0;
  }

  .bunny-overview a {
    position: relative;
    display: inline-block;
    line-height: 1.8;
  }

    .bunny-overview a::before {
      content: '';
      position: absolute;
      top: 0.1em;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% + 12px);
      height: var(--link-line-height, 1.8em);
      background-color: hsla(178, 91%, 80%, 0.75);
      border-radius: 9px;
      opacity: 0;
      transition: opacity 0.2s ease;
      z-index: -1;
    }

    .bunny-overview a:hover::before,
    .bunny-overview a:focus-visible::before {
      opacity: 1;
    }


</style>
