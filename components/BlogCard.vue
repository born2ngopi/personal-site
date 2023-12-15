<template>
    <div>
        <UCard :ui="{background: 'bg-white dark:bg-slate-800', ring:'ring-1 ring-gray-200 dark:ring-slate-400', shadow:'', divide:''}">
            <template #header>
                <h1 class="text-2xl font-semibold text-sky-950 dark:text-white">{{ blog.title }}</h1>
                <p class="text-sm text-slate-400">
                    Posted on {{ blog.date }} 
                    <!-- looping tags to badge -->
                    <span v-for="tag in blog.tags" :key="tag">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-100 text-sky-800">
                            {{ tag }}
                        </span>
                    </span>
                </p>
            </template>

            <p class="text-sky-950 dark:text-white">{{ blog.Summary }}</p>

            <template #footer>
                <UButton color="primary" variant="solid" @click="navigateTo('/commingsoon')">Read More</UButton>
            </template>
        </UCard>
    </div>
</template>

<script>
export default {
    name: 'BlogCard',
    props: {
        blog: {
            type: Object,
            required: true
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        },
    },
}
</script>