<template>
    <footer class="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 mt-auto">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                <!-- Copyright -->
                <div class="text-slate-600 dark:text-slate-400 text-sm">
                    &copy; {{ new Date().getFullYear() }} Chandra Agung Rizky. All rights reserved.
                </div>

                <!-- Social Links -->
                <div class="flex items-center space-x-4">
                    <UButton
                        to="https://github.com/born2ngopi"
                        target="_blank"
                        color="gray"
                        variant="ghost"
                        aria-label="GitHub"
                    >
                        <UIcon name="i-mdi-github-box" dynamic class="w-5 h-5" />
                    </UButton>
                    <UButton
                        to="https://linkedin.com/in/chandra-agung-rizky"
                        target="_blank"
                        color="gray"
                        variant="ghost"
                        aria-label="LinkedIn"
                    >
                        <UIcon name="i-mdi-linkedin" dynamic class="w-5 h-5" />
                    </UButton>
                    <UButton
                        to="mailto:needkopi@gmail.com"
                        color="gray"
                        variant="ghost"
                        icon="i-heroicons-envelope"
                        aria-label="Email"
                    />
                </div>
            </div>
        </div>
    </footer>
</template>