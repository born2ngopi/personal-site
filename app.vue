<template>
  <div class="bg-white dark:bg-slate-800">
    <Navigation />
    <ColorMode />
    <NuxtPage />
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Afacad&display=swap');

body {
  font-family: 'Afacad', sans-serif;
}

.container {
  padding: 0 5%;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
