<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="work">
    <header class="work-header">
      <div class="work-header-left">
        <span class="work-header-link work-header-link--ghost">
          Work
        </span>
      </div>

      <div class="work-header-center">
        <h1>Work</h1>
      </div>

      <div class="work-header-right">
        <span class="work-header-link work-header-link--ghost">
          Work
        </span>
      </div>
    </header>

    <section class="work-grid">
      <RouterLink class="work-item" to="/torch">
        <div class="work-item-media">
          <video
            class="work-item-video"
            src="/torch.mp4"
            autoplay
            loop
            muted
            playsinline
          ></video>

          <div class="work-item-label">
            TORCH
          </div>
        </div>
      </RouterLink>

      <RouterLink class="work-item" to="/bunnywunny">
        <div class="work-item-media">
          <video
            class="work-item-video"
            src="/GGJ2026.mp4"
            autoplay
            loop
            muted
            playsinline
          ></video>

          <div class="work-item-label">
            GGJ2026
          </div>
        </div>
      </RouterLink>

    </section>
  </div>
</template>

<style scoped>
  .work {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    min-height: calc(100vh - 120px);
  }

  .work-header {
    padding-top: 0.5rem;
    display: flex;
    align-items: center;
  }

  .work-header-left,
  .work-header-right {
    min-width: max-content;
    padding-top: 2.5rem;
  }

  .work-header-center {
    flex: 1;
    text-align: center;
  }

    .work-header-center h1 {
      font-size: 3rem;
      font-weight: 600;
      margin: 0;
      color: #ffffff;
    }

  .work-header-link--ghost {
    visibility: hidden;
  }

  /* Grid */
  .work-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }

  .work-item-media {
  position: relative;
  }

  /* Video keeps existing look */
.work-item-video {
  width: 100%;
  display: block;
  object-fit: cover;
  border-radius: 16px;
  padding: 6px;
  background: #000000;
  outline: 8px solid transparent;
  outline-offset: 6px;
  transition: outline-color 0.2s ease, box-shadow 0.2s ease;
}

/* TORCH label: centered, airy, a bit magical */
.work-item-label {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;    /* vertical center */
  justify-content: center;/* horizontal center */
  pointer-events: none;   /* click goes to RouterLink */

  font-size: 2.4rem;
  letter-spacing: 0.2em;
  font-weight: 500;
  text-transform: uppercase;

  /* subtle gradient + transparent text for a “glow through” effect */
  background: linear-gradient(120deg, #ffe9c7, #ffd089, #f76c45);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  text-shadow:
    0 0 10px rgba(0, 0, 0, 0.7),
    0 0 20px rgba(0, 0, 0, 0.5);

  /* soft fade-in so it feels alive but not noisy */
  opacity: 0.9;

  transition: opacity 0.2s ease, text-shadow 0.2s ease;
}

.work-item:hover .work-item-label,
.work-item:focus-visible .work-item-label {
  /* shift gradient toward white */
  background: linear-gradient(120deg, #ffffff, #fff6e6, #ffe0c0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  text-shadow:
    0 0 14px rgba(255, 255, 255, 0.8),
    0 0 28px rgba(247, 108, 69, 0.7);

  opacity: 1;
}

/* Hover/focus ring on the container, not just the media */
.work-item:hover .work-item-video,
.work-item:focus-visible .work-item-video {
  outline-color: #f76c45;
  box-shadow:
    0 0 0 4px #f76c45,
    0 10px 30px rgba(0, 0, 0, 0.7);
}

  /* Clickable cells */
  .work-item {
    display: block;
    border-radius: 16px;
    overflow: hidden;
  }

    .work-item img,
    .work-item video {
      width: 100%;
      display: block;
      object-fit: cover;
      border-radius: 16px;
      padding: 6px;
      background: #000000;
      outline: 8px solid transparent;
      outline-offset: 6px;
      transition: outline-color 0.2s ease, box-shadow 0.2s ease;
    }

    .work-item:hover img,
    .work-item:focus-visible img,
    .work-item:hover video,
    .work-item:focus-visible video {
      outline-color: #f76c45;
      box-shadow: 0 0 0 4px #f76c45,
                  0 10px 30px rgba(0, 0, 0, 0.6);
    }

  @media (max-width: 768px) {
    .work-grid {
      grid-template-columns: 1fr;
    }
  }

</style>
