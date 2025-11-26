<template>
  <div class="my-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm max-w-full overflow-hidden">
    <div class="flex items-center justify-between px-4 py-2 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
      <div class="flex gap-1.5">
        <div class="w-3 h-3 rounded-full bg-red-400/80"></div>
        <div class="w-3 h-3 rounded-full bg-amber-400/80"></div>
        <div class="w-3 h-3 rounded-full bg-green-400/80"></div>
      </div>
      <span class="text-xs font-mono text-slate-500 dark:text-slate-400">{{ language }}</span>
    </div>
    <div class="relative group">
      <div class="overflow-x-auto">
        <div v-html="highlightedCode" class="text-sm font-mono p-4 bg-white dark:bg-[#1e1e1e]"></div>
      </div>
      <button 
        @click="copyToClipboard" 
        class="absolute top-2 right-2 p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-slate-200 dark:hover:bg-slate-600 z-10"
        title="Copy code"
      >
        <UIcon :name="copied ? 'i-heroicons-check' : 'i-heroicons-clipboard'" class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { createHighlighter } from 'shiki'

const props = defineProps({
  sourceCode: {
    type: String,
    required: true
  },
  language: {
    type: String,
    default: 'text'
  }
})

const highlightedCode = ref('')
const copied = ref(false)

const highlighter = await createHighlighter({
  themes: ['github-light', 'vitesse-dark'],
  langs: ['javascript', 'typescript', 'vue', 'html', 'css', 'bash', 'go', 'json', 'yaml', 'markdown']
})

const colorMode = useColorMode()

watchEffect(() => {
  const theme = colorMode.value === 'dark' ? 'vitesse-dark' : 'github-light'
  try {
    highlightedCode.value = highlighter.codeToHtml(props.sourceCode, {
      lang: props.language,
      theme: theme
    })
  } catch (e) {
    // Fallback if language not found
    highlightedCode.value = highlighter.codeToHtml(props.sourceCode, {
      lang: 'text',
      theme: theme
    })
  }
})

const copyToClipboard = async () => {
  await navigator.clipboard.writeText(props.sourceCode)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<style>
/* Shiki overrides */
.shiki {
  margin: 0;
  padding: 0;
  background-color: transparent !important;
}
</style>
  