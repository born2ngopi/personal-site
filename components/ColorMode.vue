<template>
    <ClientOnly>
        <div class="fixed bottom-4 right-4">
            <UButton
                :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
                color="white"
                variant="solid"
                size="md"
                aria-label="Theme"
                @click="isDark = !isDark"
            />
        </div>
        

        <template #fallback>
            <div class="w-8 h-8" />
        </template>
    </ClientOnly>
</template>

<script setup>
const colorMode = useColorMode()

const isDark = computed({
    get () {
        return colorMode.value === 'dark'
    },
    set () {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
</script>