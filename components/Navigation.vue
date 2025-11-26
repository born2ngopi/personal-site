<template>
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="{'bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-sm': isScrolled, 'bg-transparent': !isScrolled}">
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

                <!-- Mobile Menu Button -->
                <div class="md:hidden">
                    <button @click="mobileMenuOpen = !mobileMenuOpen" class="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <UIcon :name="mobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" class="w-6 h-6" />
                    </button>
                </div>
            </nav>
        </div>

        <!-- Mobile Menu -->
        <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
        >
            <div v-show="mobileMenuOpen" class="md:hidden bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 shadow-lg">
                <div class="max-w-7xl mx-auto px-4 py-4 space-y-2">
                    <a @click="handleMobileNavigation('/')" 
                       class="block px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                       :class="currentRoute === '/' ? 'bg-cerulean-50 dark:bg-cerulean-900/20 text-cerulean-600 dark:text-cerulean-400' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'">
                        Me
                    </a>
                    <a @click="handleMobileNavigation('/blogs')" 
                       class="block px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                       :class="currentRoute === '/blogs' ? 'bg-cerulean-50 dark:bg-cerulean-900/20 text-cerulean-600 dark:text-cerulean-400' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'">
                        Blog
                    </a>
                </div>
            </div>
        </Transition>
    </header>
</template>

<script setup>
const router = useRouter();
const route = useRoute();
const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const currentRoute = computed(() => route.path);

const navigateTo = (path) => {
    router.push(path);
};

const handleMobileNavigation = (path) => {
    navigateTo(path);
    mobileMenuOpen.value = false;
};

const handleScroll = () => {
    isScrolled.value = window.scrollY > 20;
};

// Close mobile menu when route changes
watch(() => route.path, () => {
    mobileMenuOpen.value = false;
});

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>