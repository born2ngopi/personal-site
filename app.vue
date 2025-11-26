<template>
  <div class="min-h-screen bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-colors duration-300">
    <Navigation />
    <NuxtPage />
    <ColorMode class="fixed bottom-4 right-4 z-50" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Outfit', sans-serif;
}

/* Prevent horizontal scroll on body, but let inner elements handle their own scroll */
html,
body {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

/* Ensure prose content wraps properly */
.prose {
  max-width: 100% !important;
  width: 100%;
  box-sizing: border-box;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
}

/* Allow code blocks to scroll horizontally without memotong teks */
.prose pre,
.prose code {
  max-width: 100%;
  overflow-x: auto;
  word-break: normal;
  white-space: pre;
}

/* Ensure regular text wraps */
.prose p,
.prose h1,
.prose h2,
.prose h3,
.prose h4,
.prose h5,
.prose h6,
.prose li,
.prose span {
  word-break: break-word;
  overflow-wrap: break-word;
}

/* Handle very long URL di dalam konten */
.prose a {
  word-break: break-all;
}

/* Ensure images don't overflow */
.prose img {
  max-width: 100%;
  height: auto;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-in-out;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
  filter: blur(0.5rem);
}
</style>
