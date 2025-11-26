<template>
  <div class="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
    <Navigation />
    <NuxtPage />
    <ColorMode class="fixed bottom-4 right-4 z-50" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Outfit', sans-serif;
  @apply bg-white dark:bg-slate-900;
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
