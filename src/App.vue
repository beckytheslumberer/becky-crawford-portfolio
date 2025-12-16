<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-layout">
    <header class="site-header">
      <div class="brand">
        <img alt="Wunny logo"
             class="logo"
             src="@/assets/logo.svg"
             width="48"
             height="48" />
        <span class="brand-name">Becky Crawford</span>
      </div>

      <nav class="main-nav">
        <RouterLink to="/">Work</RouterLink>
        <RouterLink to="/music">Music</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/resume">Resume</RouterLink>
      </nav>
    </header>

    <main class="page-content">
      <RouterView />
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }

  /* logo + name left */
  .brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .logo {
    display: block;
  }

  .brand-name {
    font-size: 1.25rem;
    font-weight: 420;
    color: #ffffff;
  }

  /* links right */
  .main-nav {
    display: flex;
    gap: 1.5rem;
    font-size: 0.95rem;
  }

    .main-nav a {
      text-decoration: none;
      padding: 0.25rem 0;
      border-bottom: 2px solid transparent;
    }

      .main-nav a.router-link-exact-active {
        color: var(--accent-salmon, var(--color-text));
        border-color: var(--accent-salmon, var(--color-text));
      }

  /* main view area */
  .page-content {
    flex: 1;
    padding-top: 0.5rem;
  }
</style>
