<template>
  <div class="relative">
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-cerulean-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="space-y-6 animate-fade-in-up">
          <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
            Hello, I'm <span class="text-cerulean-600 dark:text-cerulean-400">Chandra</span>
          </h1>
          <p class="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A passionate software developer crafting robust backends and elegant web experiences.
          </p>
          <div class="flex justify-center gap-4 pt-4">
            <UButton size="xl" color="primary" variant="solid" to="#contact">Let's Talk</UButton>
            <UButton size="xl" color="gray" variant="ghost" to="#projects">View Work</UButton>
          </div>
        </div>
        
        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <UIcon name="i-heroicons-arrow-down" class="w-8 h-8 text-slate-400" />
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">About Me</h2>
            <div class="space-y-4 text-lg text-slate-600 dark:text-slate-300">
              <p>
                I am a Backend Engineer with over 5 years of experience in the software development field. 
                I specialize in managing databases, designing scalable backend architectures, and ensuring optimal system performance.
              </p>
              <p>
                I believe that technical expertise must be paired with adaptability. 
                In the rapidly evolving world of technology, flexibility and a continuous learning mindset are my keys to staying relevant and effective.
              </p>
            </div>
          </div>
          <div class="relative">
             <div class="aspect-square rounded-2xl bg-gradient-to-br from-cerulean-500 to-indigo-600 opacity-10 absolute -inset-4 blur-lg"></div>
             <div class="aspect-square rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center relative overflow-hidden shadow-lg">
                <img src="/backend-illustration.png" alt="Backend Engineer Illustration" class="w-full h-full object-cover" />
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
        <p class="text-slate-600 dark:text-slate-400 mb-12">Personal research and tools for improving productivity.</p>

        <div class="space-y-16">
          <!-- Websites -->
          <div>
            <h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2">
              <UIcon name="i-heroicons-globe-alt" /> Websites
            </h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CardProject v-for="project in websites" :key="project.title" v-bind="project" />
            </div>
          </div>

          <!-- Backends -->
          <div>
            <h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2">
              <UIcon name="i-heroicons-server" /> Backends & Tools
            </h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CardProject v-for="project in backends" :key="project.title" v-bind="project" />
              <CardProject v-for="project in projects" :key="project.title" v-bind="project" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12">Skills & Expertise</h2>
        <div class="flex flex-wrap justify-center gap-4">
          <UBadge v-for="skill in skills" :key="skill" size="lg" color="primary" variant="subtle" class="px-4 py-2 text-base">
            {{ skill }}
          </UBadge>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-24">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Get In Touch</h2>
        <p class="text-xl text-slate-600 dark:text-slate-300 mb-8">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>
        <UButton size="xl" to="mailto:needkopi@gmail.com" icon="i-heroicons-envelope" color="primary" variant="solid">
          needkopi@gmail.com
        </UButton>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
const skills = ['Vue', 'Go', 'Python', 'Javascript', 'Php', 'Rust', 'Nuxt', 'Docker', 'SQL'];

const websites = [
  {
    title: 'Personal Site',
    description: 'My personal portfolio website built with Nuxt 3 and Tailwind CSS.',
    icon: ['i-logos-vue', 'i-logos-nuxt-icon'],
    link: 'https://github.com/born2ngopi/personal-site',
  }
];

const projects = [
  {
    title: 'Orca',
    description: 'CLI tool for auto-generating git commit messages using Ollama.',
    icon: ['i-logos-go'],
    link: 'https://github.com/born2ngopi/orca',
  },
  {
    title: 'Dolpin',
    description: 'Tool for auto-generating Go unit tests to improve code coverage.',
    icon: ['i-logos-go'],
    link: 'https://github.com/born2ngopi/dolpin',
  }
];

const backends = [
  {
    title: 'Ngamux',
    link: 'https://github.com/ngamux/ngamux',
    description: 'A simple and lightweight HTTP router for Go applications.',
    icon: ['i-logos-go']
  },
  {
    title: 'Server',
    link: 'https://github.com/indenosia/server',
    description: 'HTTP framework for Deno designed for simplicity.',
    icon: ['i-logos-deno']
  },
  {
    title: 'Requtrap',
    link: 'https://github.com/libidev/requtrap.go',
    description: 'Fast and configurable API Gateway written in Go.',
    icon: ['i-logos-go', 'i-carbon-gateway-api']
  },
  {
    title: 'Flag',
    link: 'https://github.com/naya-team/flag',
    description: 'Feature flag management library for better release control.',
    icon: ['i-logos-go', 'i-heroicons-flag']
  }
];
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
  