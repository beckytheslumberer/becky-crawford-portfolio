<template>
  <footer class="site-footer">
    <div class="site-footer-inner">
      <div class="site-footer-contact">
        <span class="footer-label">Contact</span>
        <span class="footer-value">
          bwcbeck@gmail.com
        </span>
        <span class="footer-separator">|</span>
        <span class="footer-value">
          (828) 305-5505
        </span>
      </div>

      <div class="site-footer-meta">
        <span>
          Website created by
          <a href="https://github.com/beckytheslumberer/becky-crawford-portfolio"
             target="_blank"
             rel="noopener noreferrer">
            Becky Crawford
          </a>.
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  .site-footer {
    margin-top: 3rem;
    padding: 1.5rem 1.25rem 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    color: #aeb5d0;
    font-size: 0.85rem;
  }

  .site-footer-inner {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    text-align: center;
  }

  .site-footer-contact {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    align-items: center;
    justify-content: center;
  }

  .footer-label {
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }

  .footer-value {
    opacity: 0.9;
  }

  .footer-separator {
    opacity: 0.5;
  }

  .site-footer-meta {
    font-style: italic;
  }

  .site-footer-meta a {
    color: #f5d1a5;
    text-decoration: none;
  }

    .site-footer-meta a:hover {
      text-decoration: underline;
    }

  @media (max-width: 600px) {
    .site-footer-contact {
      flex-direction: column;
      align-items: flex-start;
    }

    .footer-separator {
      display: none;
    }
  }
</style>
