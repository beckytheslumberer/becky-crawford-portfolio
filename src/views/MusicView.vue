<script setup>
  import { ref, onMounted } from 'vue'

  const volume = ref(50)

  let widget = null

  onMounted(() => {
    // Load SoundCloud API
    const script = document.createElement('script')
    script.src = 'https://w.soundcloud.com/player/api.js'
    script.onload = initWidget
    document.head.appendChild(script)
  })

  const initWidget = () => {
    widget = SC.Widget(document.getElementById('sc-widget'))
    widget.bind(SC.Widget.Events.READY, () => {
      widget.setVolume(50) // default
    })
  }

  const setVolume = () => {
    if (widget) widget.setVolume(volume.value)
  }
</script>


<template>
  <div class="music-page">
    <header class="music-header">
      <div class="music-header-left">
        <span class="music-header-link music-header-link--ghost">
          Music
        </span>
      </div>

      <div class="music-header-center">
        <h1>Music</h1>
      </div>

      <div class="music-header-right">
        <span class="music-header-link music-header-link--ghost">
          Music
        </span>
      </div>
    </header>

    <section class="music-player-section">
      <div class="music-background">
        <img src="/music-bg.jpg" alt="Music background" />
      </div>

      <div class="music-player-overlay">
        <div class="music-player-container">
          <iframe id="sc-widget"
                  width="100%"
                  height="500"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2159574563&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          <div class="soundcloud-attribution">
            <a href="https://soundcloud.com/becktobecky" title="BeckToBecky" target="_blank" style="color: #cccccc; text-decoration: none;">BeckToBecky</a> ·
            <a href="https://soundcloud.com/becktobecky/sets/beckys-playlist" title="Becky's Playlist" target="_blank" style="color: #cccccc; text-decoration: none;">Becky's Playlist</a>
          </div>
          <div class="volume-control">
            <label>Volume</label>
            <input type="range" v-model="volume" min="0" max="100" @input="setVolume" :style="`--volume: ${volume}%`" class="volume-slider">
            <span>{{ volume }}%</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .music-page {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    min-height: calc(100vh - 120px);
  }

  /* header */
  .music-header {
    padding-top: 0.5rem;
    display: flex;
    align-items: center;
  }

  .music-header-left,
  .music-header-right {
    min-width: max-content;
    padding-top: 2.5rem;
  }

  .music-header-center {
    flex: 1;
    text-align: center;
  }

    .music-header-center h1 {
      font-size: 3rem;
      font-weight: 600;
      margin: 0;
      color: #ffffff;
    }

  .music-header-link--ghost {
    visibility: hidden;
  }

  /* music section */
  .music-player-section {
    position: relative;
    flex: 1;
    min-height: 60vh;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;
    contain: layout paint;
  }

  .music-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    isolation: isolate;
  }

    .music-background img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: blur(4px) brightness(0.6);
    }

  .music-player-container {
    position: relative;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    padding: 1rem;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    filter: none;
    isolation: isolate;
  }

  .music-player-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 800px;
    z-index: 2;
  }

  .soundcloud-attribution {
    font-size: 0.8rem;
    color: #ffffff;
    text-align: center;
    padding-top: 1rem;
    font-weight: 300;
    margin-top: auto;
  }

  .volume-control {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding-top: 1.5rem;
    width: fit-content;
    margin: 0 auto;
  }

.volume-slider {
  flex: none;
  width: 120px;
  height: 6px;
  border-radius: 3px;
  background: transparent;
  outline: none;
  -webkit-appearance: none;
  margin: 0 1rem;
}

/* Webkit browsers (Chrome, Safari, Edge) */
.volume-slider::-webkit-slider-runnable-track {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  background: linear-gradient(to right, #ff5500 var(--volume, 0%), rgba(255, 255, 255, 0.3) var(--volume, 0%));
}

.volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ff5500;
  cursor: pointer;
  border: 2px solid white;
  margin-top: -6px;
}

/* Firefox */
.volume-slider::-moz-range-track {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  border: none;
}

.volume-slider::-moz-range-progress {
  height: 6px;
  background: #ff5500;
  border-radius: 3px;
}

.volume-slider::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ff5500;
  cursor: pointer;
  border: 2px solid white;
}


</style>
