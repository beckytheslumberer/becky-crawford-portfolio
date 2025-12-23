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
      <!-- Item 1 -->
      <RouterLink class="work-item" to="/modeling">
        <img src="/Modeling.png" alt="Modeling" />
      </RouterLink>

      <!-- add more items as needed -->
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

  /* Clickable cells */
  .work-item {
    display: block;
    border-radius: 16px;
    overflow: hidden;
  }

    .work-item img {
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
    .work-item:focus-visible img {
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
