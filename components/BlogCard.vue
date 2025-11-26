<template>
  <div 
    class="group relative flex flex-col h-full bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-cerulean-500/50 dark:hover:border-cerulean-500/50"
  >
    <div class="p-6 flex flex-col h-full">
      <!-- Header: Date & Tags -->
      <div class="flex flex-wrap items-center gap-3 mb-4 text-xs">
        <time :datetime="blog.date" class="text-slate-500 dark:text-slate-400 font-medium">
          {{ formatDate(blog.date) }}
        </time>
        <span class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
        <div class="flex gap-2">
          <span 
            v-for="tag in blog.tags" 
            :key="tag"
            class="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-medium"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- Title -->
      <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cerulean-600 dark:group-hover:text-cerulean-400 transition-colors">
        {{ blog.title }}
      </h3>

      <!-- Summary -->
      <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
        {{ blog.Summary }}
      </p>

      <!-- Footer: Read More / Coming Soon -->
      <div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
        <span v-if="blog.commingsoon" class="text-sm font-medium text-slate-400 italic flex items-center gap-2">
          <UIcon name="i-heroicons-clock" /> Coming Soon
        </span>
        <button 
          v-else 
          @click="navigateTo(blog.id)"
          class="text-sm font-semibold text-cerulean-600 dark:text-cerulean-400 flex items-center gap-1 group/btn"
        >
          Read Article 
          <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
    
    <!-- Clickable Overlay -->
    <a 
      v-if="!blog.commingsoon"
      @click="navigateTo(blog.id)" 
      class="absolute inset-0 cursor-pointer z-10"
      aria-label="Read article"
    ></a>
  </div>
</template>

<script setup>
const props = defineProps({
  blog: {
    type: Object,
    required: true
  }
})

const router = useRouter()

const navigateTo = (id) => {
  router.push(`/blog/${id}`)
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('id-ID', options)
}
</script>