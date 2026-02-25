<template>
  <div class="bunny-page">
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
      <section class="bunny-grid">
        <!-- 1. Intro -->
        <article class="bunny-item">
          <h2 class="bunny-item-title">Bunny and Wunny Intro</h2>
          <div class="bunny-item-video-wrap">
            <video
              class="bunny-item-video"
              src="/BunnyWunnyIntro.mp4"
              autoplay
              loop
              muted
              playsinline
            ></video>
          </div>
          <p class="bunny-item-text">
            Shows the main menu, the level zoomed out, and switching between the characters Bunny and Wunny.
          </p>
        </article>

        <!-- 2. Wunny Stinky -->
        <article class="bunny-item">
          <h2 class="bunny-item-title">Wunny Is Stinky</h2>
          <div class="bunny-item-video-wrap">
            <video
              class="bunny-item-video"
              src="/WunnyStinky.mp4"
              autoplay
              loop
              muted
              playsinline
            ></video>
          </div>
          <p class="bunny-item-text">
            Wunny is stinky and sad. Bunny helps him out by turning on the shower.
          </p>
        </article>

        <!-- 3. Bunny Caught -->
        <article class="bunny-item">
          <h2 class="bunny-item-title">Bunny Gets Caught</h2>
          <div class="bunny-item-video-wrap">
            <video
              class="bunny-item-video"
              src="/BunnyCaught.mp4"
              autoplay
              loop
              muted
              playsinline
            ></video>
          </div>
          <p class="bunny-item-text">
            Bunny taunts the caretaker, and tries to run away. But she gets caught!
          </p>
        </article>

        <!-- 4. Bunny Disguised -->
        <article class="bunny-item">
          <h2 class="bunny-item-title">Bunny in Disguise</h2>
          <div class="bunny-item-video-wrap">
            <video
              class="bunny-item-video"
              src="/BunnyDisguised.mp4"
              autoplay
              loop
              muted
              playsinline
            ></video>
          </div>
          <p class="bunny-item-text">
            Bunny slips into disguise. Now the caretakers don't try and chase her on sight.
          </p>
        </article>

        <!-- 5. Bunny & Wunny Escape -->
        <article class="bunny-item">
          <h2 class="bunny-item-title">Bunny and Wunny Escape</h2>
          <div class="bunny-item-video-wrap">
            <video
              class="bunny-item-video"
              src="/BunnyWunnyEscape.mp4"
              autoplay
              loop
              muted
              playsinline
            ></video>
          </div>
          <p class="bunny-item-text">
            Bunny and Wunny break free. They go enjoy the outside world with its sunshine, candy rain, and confetti.
          </p>
        </article>
      </section>
    </main>
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
</style>
