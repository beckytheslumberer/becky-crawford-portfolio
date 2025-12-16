<script setup lang="ts">
const pdfUrl = '/becky-crawford-portfolio/resume.pdf'
const pdfFileName = 'Becky-Crawford-Resume.pdf'

const downloadResume = () => {
  const link = document.createElement('a')
  link.href = pdfUrl
  link.target = '_blank'
  link.download = pdfFileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  <div class="resume-page">
    <header class="resume-header">
      <div class="resume-header-left">
        <span class="resume-header-link resume-header-link--ghost">
          Download
        </span>
      </div>

      <div class="resume-header-center">
        <h1>Resume</h1>
      </div>

      <div class="resume-header-right">
        <button class="resume-header-button" @click="downloadResume">
          Download
        </button>
      </div>
    </header>

    <div class="resume-viewer">
      <iframe :src=pdfUrl
              width="100%"
              height="100%"
              type="application/pdf"
              frameborder="0">
      </iframe>
    </div>
  </div>
</template>

<style scoped>
  .resume-page {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    min-height: calc(100vh - 120px);
  }

  .resume-header {
    padding-top: 0.5rem;
    display: flex;
    align-items: center;
  }

  .resume-header-left,
  .resume-header-right {
    min-width: max-content;
    padding-top: 2.5rem;
  }

  .resume-header-center {
    flex: 1;
    text-align: center;
  }

    .resume-header-center h1 {
      font-size: 3rem;
      font-weight: 600;
      margin: 0;
      color: #ffffff;
    }

  .resume-header-link {
    font-size: 0.9rem;
  }

  .resume-header-link--ghost {
    visibility: hidden;
    font-size: 1.1rem;
  }

  .resume-header-button {
    font-size: 0.9rem;
    padding: 0.4rem 0.9rem;
    border-radius: 999px;
    border: 1px solid #000000;
    background: var(--accent-salmon, transparent);
    color: #000000;
    cursor: pointer;
  }

    .resume-header-button:hover {
      filter: brightness(1.05);
      transform: translateY(-1px);
      border: 1px solid #ffffff;
      color: #ffffff;
    }

  .resume-viewer {
    flex: 1;
    min-height: 60vh;
    border-radius: 0.5rem;
    overflow: hidden;
  }
</style>
