<template>
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="{'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm': isScrolled, 'bg-transparent': !isScrolled}">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="flex items-center justify-between h-16">
                <!-- Logo -->
                <div class="flex-shrink-0">
                    <a @click="navigateTo('/')" class="cursor-pointer group flex items-center gap-1 text-xl font-bold text-slate-800 dark:text-white">
                        <span>hi@chan</span>
                        <UIcon name="i-heroicons-code-bracket" class="w-5 h-5 text-cerulean-500 group-hover:rotate-12 transition-transform" />
                        <span class="animate-pulse text-cerulean-500">_</span>
                    </a>
                </div>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-8">
                    <a @click="navigateTo('/')" 
                       class="text-sm font-medium transition-colors duration-200 cursor-pointer"
                       :class="currentRoute === '/' ? 'text-cerulean-600 dark:text-cerulean-400' : 'text-slate-600 dark:text-slate-300 hover:text-cerulean-600 dark:hover:text-cerulean-400'">
                        Me
                    </a>
                    <a @click="navigateTo('/blogs')" 
                       class="text-sm font-medium transition-colors duration-200 cursor-pointer"
                       :class="currentRoute === '/blogs' ? 'text-cerulean-600 dark:text-cerulean-400' : 'text-slate-600 dark:text-slate-300 hover:text-cerulean-600 dark:hover:text-cerulean-400'">
                        Blog
                    </a>
                </div>

                <!-- Mobile Menu Button (Optional, can be added later if needed) -->
            </nav>
        </div>
    </header>
</template>

<script setup>
const router = useRouter();
const route = useRoute();
const isScrolled = ref(false);

const currentRoute = computed(() => route.path);

const navigateTo = (path) => {
    router.push(path);
};

const handleScroll = () => {
    isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>