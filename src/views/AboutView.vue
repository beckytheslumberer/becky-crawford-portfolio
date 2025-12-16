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
        <!-- empty for now, or add a small link later -->
      </div>
    </header>

    <section class="about-content">
      <div class="about-photo">
        <img src="/portrait.jpg" alt="Portrait of Becky Crawford" />
      </div>

      <div class="about-text">
        <p class="about-main">
          Lorem ipsum main background paragraph about you, your work, and what you care about.
        </p>

        <p class="about-sub">
          <strong>Interests.</strong>
          Short paragraph about your interests, hobbies, and what you do for fun.
        </p>

        <p class="about-sub">
          <strong>Favorite games.</strong>
          Short paragraph listing a few favorite games and why you like them.
        </p>
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
    align-items: flex-start;
  }

  /* portrait */
  .about-photo img {
    width: 100%;
    max-width: 280px;
    border-radius: 16px;
    object-fit: cover;
    display: block;
  }

  /* text blocks */
  .about-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #ffffff;
  }

  .about-main {
    font-size: 1rem;
    line-height: 1.7;
  }

  .about-sub {
    font-size: 0.95rem;
    line-height: 1.6;
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
