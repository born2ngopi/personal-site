<template>
    <div>
      <pre class="bg-gray-100 dark:bg-gray-600 p-4 overflow-auto rounded-md">
        <code :class="languageClass">
          {{ sourceCode }}
        </code>
      </pre>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      sourceCode: {
        type: String,
        required: true,
      },
      language: {
        type: String,
        default: 'plaintext',
      },
    },
    computed: {
      languageClass() {
        return `language-${this.language}`;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Gaya CSS untuk menyesuaikan tampilan blok kode */
  code {
    font-family: 'Courier New', Courier, monospace;
  }
  </style>
  