<template>
  <a :href="Link" target="_blank" class="block h-full group">
    <UCard class="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-slate-700/50 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-600">
      <template #header>
        <div class="flex justify-between items-start">
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-cerulean-600 dark:group-hover:text-cerulean-400 transition-colors">
            {{ title }}
          </h3>
          <div class="flex gap-2">
            <UIcon v-for="icon in Icon" :key="icon" :name="icon" class="w-5 h-5 text-slate-400 dark:text-slate-300 group-hover:text-cerulean-500 transition-colors" dynamic />
          </div>
        </div>
      </template>

      <p class="text-slate-600 dark:text-slate-200 text-sm leading-relaxed">
        {{ description }}
      </p>
    </UCard>
  </a>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  Icon: {
    type: Array,
    required: true
  },
  Link: {
    type: String,
    required: true
  }
})
</script>