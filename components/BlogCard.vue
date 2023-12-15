<template>
    <div>
        <UCard :ui="{background: 'bg-white dark:bg-slate-800', ring:'ring-1 ring-gray-200 dark:ring-slate-400', shadow:'', divide:''}">
            <template #header>
                <h1 class="text-2xl font-semibold text-sky-950 dark:text-white">{{ blog.title }}</h1>
                <div v-if="blog.commingsoon">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Comming Soon
                    </span>
                </div>
                <div v-else>
                    <p class="text-sm text-slate-400">
                        Posted on {{ blog.date }} 
                        <!-- looping tags to badge -->
                        <span v-for="tag in blog.tags" :key="tag">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-100 text-sky-800">
                                {{ tag }}
                            </span>
                        </span>
                    </p>
                </div>
                
            </template>

            <p class="text-sky-950 dark:text-white">{{ blog.Summary }}</p>

            <template #footer>
                <div v-if="blog.commingsoon">
                    <UButton color="gray" variant="solid" @click="navigateTo('/commingsoon')" disabled>Comming Soon</UButton>
                </div>
                <div v-else>
                    <UButton color="primary" variant="solid" @click="navigateTo(blog.id )">Read More</UButton>
                </div>
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
        navigateTo(id) {
            const route = `/blog/${id}`;
            console.log(route);
            this.$router.push(route);
        },
    },
}
</script>