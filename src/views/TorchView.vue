<script setup>
  import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="torch-page">
    <div class="torch-back">
      <RouterLink to="/">
        ← Back to Home
      </RouterLink>
    </div>

    <header class="torch-header">
      <div class="torch-header-center">
        <h1>Torch Survival Game</h1>
      </div>
    </header>

    <section class="torch-overview">
      <h2 class="torch-overview-title">Building a Scalable Interaction Framework</h2>
      <p class="torch-overview-body">
        Torch is a survival prototype about navigating darkness with limited light. Under the hood,
        it uses a reusable interaction framework that powers items, inventory, and player-driven events.
        This page shows the game in motion; the deep dive breaks down how the system is built.
      </p>
      <p class="torch-tags">
        Unreal Engine 5 • C++ • Blueprint • Interaction Systems
      </p>
      <RouterLink to="/torch-interaction">
        Read the interaction framework deep dive →
      </RouterLink>
    </section>


    <main class="torch-content">
      <section class="torch-grid">
        <article class="torch-item">
          <h2 class="torch-item-title">Inventory System</h2>
          <div class="torch-item-video-wrap">
            <video class="torch-item-video"
                   src="/InventorySystem.mp4"
                   autoplay
                   loop
                   muted
                   playsinline></video>
          </div>
          <p class="torch-item-text">
            The player uses some rags and a first aid to fill up the fuel and health bars. Showcases moving items around, dropping them, and picking them up.
          </p>
        </article>

        <article class="torch-item">
          <h2 class="torch-item-title">Lighting Brazier</h2>
          <div class="torch-item-video-wrap">
            <video class="torch-item-video"
                   src="/LightingBrazier.mp4"
                   autoplay
                   loop
                   muted
                   playsinline></video>
          </div>
          <p class="torch-item-text">
            Collecting some firewood to light a brazier. Saves a checkpoint for the player, and unlocks a new area.
          </p>
        </article>

        <article class="torch-item">
          <h2 class="torch-item-title">Digging up Loot</h2>
          <div class="torch-item-video-wrap">
            <video class="torch-item-video"
                   src="/ShovelDigging.mp4"
                   autoplay
                   loop
                   muted
                   playsinline></video>
          </div>
          <p class="torch-item-text">
            Finding the shovel tool, and using it to dig up some loot.
          </p>
        </article>

        <article class="torch-item">
          <h2 class="torch-item-title">Chopping a Tree down</h2>
          <div class="torch-item-video-wrap">
            <video class="torch-item-video"
                   src="/AxeChopping.mp4"
                   autoplay
                   loop
                   muted
                   playsinline></video>
          </div>
          <p class="torch-item-text">
            Finding the axe tool, and using it to chop down a tree.
          </p>
        </article>
      </section>
    </main>
    <AppFooter />
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

.torch-subheader-link {
  display: inline-block;
  margin-top: 0.75rem;
  text-decoration: none;
  text-align: center;
}

.torch-subheader {
  margin: -0.4rem 0 0;
  font-size: 1.6rem;
  font-weight: 400;
  color: #f76c45;
  transition: color 0.2s ease, transform 0.2s ease;
}

.torch-tags {
  margin: 0.2rem 0 1.0rem;
  font-size: 1.0rem;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: #aeb5d0;
}

.torch-subheader-link:hover .torch-subheader,
.torch-subheader-link:focus-visible .torch-subheader {
  color: #ffffff;
  transform: translateY(-1px);
}

  .torch-overview {
    max-width: 960px;
    margin: 0 auto 2.5rem;
    padding: 1.5rem 1.25rem;
    border-radius: 16px;
    background: rgba(10, 10, 16, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.06);
  }

  .torch-overview-title {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 600;
    color: #ffffff;
  }

  .torch-overview-subtitle {
    margin: 0.35rem 0 0.75rem;
    font-size: 1rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #f5d1a5;
  }

  .torch-overview-body {
    margin: 0 0 0.5rem;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #dddfe8;
  }

  .torch-overview-tags {
    margin: 0 0 1rem;
    font-size: 0.9rem;
    color: #aeb5d0;
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

  .torch-overview a {
    position: relative;
    display: inline-block;
    line-height: 1.8;
  }

    .torch-overview a::before {
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

    .torch-overview a:hover::before,
    .torch-overview a:focus-visible::before {
      opacity: 1;
    }

  .torch-back {
    max-width: 960px;
    padding: 0.5rem 0 0 0;
  }

</style>
