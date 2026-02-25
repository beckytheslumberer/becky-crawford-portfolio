<template>
  <div class="torch-page">
    <header class="torch-header">
      <div class="torch-header-left">
        <span class="torch-header-link torch-header-link--ghost"></span>
      </div>

      <div class="torch-header-center">
        <h1>Torch Survival Game</h1>
      </div>

      <div class="torch-header-right">
        <span class="torch-header-link torch-header-link--ghost"></span>
      </div>
    </header>

    <main class="torch-content">
      <section class="torch-grid">
        <article class="torch-item">
          <h2 class="torch-item-title">Inventory System</h2>
          <div class="torch-item-video-wrap">
            <video
              class="torch-item-video"
              src="/InventorySystem.mp4"
              autoplay
              loop
              muted
              playsinline
            ></video>
          </div>
          <p class="torch-item-text">
            The player uses some rags and a first aid to fill up the fuel and health bars. Showcases moving items around, dropping them, and picking them up.
          </p>
        </article>

        <article class="torch-item">
          <h2 class="torch-item-title">Lighting Brazier</h2>
          <div class="torch-item-video-wrap">
            <video
              class="torch-item-video"
              src="/LightingBrazier.mp4"
              autoplay
              loop
              muted
              playsinline
            ></video>
          </div>
          <p class="torch-item-text">
            Collecting some firewood to light a brazier. Saves a checkpoint for the player, and unlocks a new area.
          </p>
        </article>

        <article class="torch-item">
          <h2 class="torch-item-title">Digging up Loot</h2>
          <div class="torch-item-video-wrap">
            <video
              class="torch-item-video"
              src="/ShovelDigging.mp4"
              autoplay
              loop
              muted
              playsinline
            ></video>
          </div>
          <p class="torch-item-text">
            Finding the shovel tool, and using it to dig up some loot.
          </p>
        </article>

        <article class="torch-item">
          <h2 class="torch-item-title">Chopping a Tree down</h2>
          <div class="torch-item-video-wrap">
            <video
              class="torch-item-video"
              src="/AxeChopping.mp4"
              autoplay
              loop
              muted
              playsinline
            ></video>
          </div>
          <p class="torch-item-text">
            Finding the axe tool, and using it to chop down a tree.
          </p>
        </article>
      </section>
    </main>
  </div>
</template>

<style scoped>
.torch-page {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-height: calc(100vh - 120px);
}

/* Header */
.torch-header {
  padding-top: 0.5rem;
  display: flex;
  align-items: center;
}

.torch-header-left,
.torch-header-right {
  min-width: max-content;
  padding-top: 2.5rem;
}

.torch-header-center {
  flex: 1;
  text-align: center;
}

.torch-header-center h1 {
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0;
  color: #ffffff;
}

.torch-header-link--ghost {
  visibility: hidden;
}

/* Content layout */
.torch-content {
  padding-top: 1rem;
}

/* Grid of videos */
.torch-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
}

/* Individual item */
.torch-item {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 960px;
  margin: 0 auto;
}

.torch-item-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #ffffff;
}

/* Video styling */
.torch-item-video-wrap {
  border-radius: 16px;
  overflow: hidden;
  background: #000000;
  padding: 6px;
}

.torch-item-video {
  width: 100%;
  display: block;
  object-fit: cover;
  border-radius: 12px;
}

/* Description text */
.torch-item-text {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #dddfe8;
}
</style>
