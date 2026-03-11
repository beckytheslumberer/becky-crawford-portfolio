<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import { onMounted, onBeforeUnmount, ref } from 'vue'

  const isShrunk = ref(false)

  const handleScroll = () => {
    isShrunk.value = window.scrollY > 60
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<template>
  <div class="app-layout">
    <header class="site-header"
            :class="[{ 'site-header--shrunk': isShrunk }, 'site-header--enter']">
      <div class="site-header-inner">
        <div class="brand">
          <img alt="Wunny logo"
               class="logo"
               src="@/assets/logo.svg"
               width="48"
               height="48" />
          <RouterLink to="/" class="brand-name">
            Becky Crawford
          </RouterLink>
        </div>
        <nav class="main-nav">
          <RouterLink to="/">HOME</RouterLink>
          <RouterLink to="/about">ABOUT</RouterLink>
          <RouterLink to="/music">MUSIC</RouterLink>
          <RouterLink to="/resume">RESUME</RouterLink>
        </nav>
      </div>
    </header>

    <main class="page-content">
      <div class="page-content-inner">
        <Transition name="page" mode="out-in">
          <RouterView />
        </Transition>
      </div>
    </main>
  </div>
</template>

<style scoped>
  .app-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* top bar */
  .site-header {
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100%;
    padding: 1rem 0;
    background: rgba(24, 24, 24, 0.96);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    transform: translateY(-100%);
    animation: header-slide-down 0.5s ease-out forwards;
    transition: padding 0.25s ease, background 0.25s ease, transform 0.25s ease;
  }

  .site-header-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* shrink state when scrolling */
  .site-header--shrunk {
    padding: 0.3rem 0; /* less vertical space */
    background: rgba(24, 24, 24, 0.9); /* slightly more solid */
  }

  /* logo + name left */
  .brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .logo {
    display: block;
    border-radius: 12px;
    transition: transform 0.25s ease, width 0.25s ease, height 0.25s ease;
  }

  .site-header--shrunk .logo {
    transform: scale(0.85);
  }

  .brand-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: #ffffff;
    text-decoration: none;
    transition: font-size 0.25s ease, color 0.25s ease;
  }

  .site-header--shrunk .brand-name {
    font-size: 1.1rem;
  }

  .brand-name:hover {
    color: var(--accent-salmon);
    text-decoration: none;
  }

  /* links right */
  .main-nav {
    display: flex;
    gap: 1.5rem;
    font-size: 0.95rem;
  }

    .main-nav a {
      text-decoration: none;
      text-underline-offset: 0.2em;
      padding: 0;
      color: #ffffff;
    }

      .main-nav a.router-link-exact-active {
        color: var(--accent-salmon, var(--color-text));
        text-decoration: underline var(--accent-salmon, var(--color-text)) solid 1px;
      }

      .main-nav a:active {
        color: #888 !important;
        text-decoration: underline #888 solid 1px !important;
      }

      .main-nav a:hover {
        color: #ffffff;
        text-decoration: underline #ffffff solid 1px;
      }

  /* main view area */
  .page-content {
    flex: 1;
  }

  .page-content-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1.25rem;
  }

  /* Page transitions */
  .page-enter-active,
  .page-leave-active {
    transition: all 0.5s ease;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    transform: translateX(20px);
  }

  /* Header slide-down animation on page load */
  @keyframes header-slide-down {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

</style>
