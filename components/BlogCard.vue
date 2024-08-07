<template>
    <article 
    class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25"
  >
    <a type="button" @click="!blog.commingsoon && navigateTo(blog.id )">
        <div class="rounded-[10px] bg-white p-4 !pt-20 sm:p-6 dark:bg-gray-900">
            <div v-if="blog.commingsoon">
                <span class="block text-xs text-gray-500 dark:text-gray-400"> Comming Soon</span>
            </div>
            <div v-else>
                <time datetime="2022-10-10" class="block text-xs text-gray-500 dark:text-gray-400"> {{ blog.date }}  </time>
            </div>

            <h3 class="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
                {{ blog.title }}
            </h3>

            <div class="mt-4 flex flex-wrap gap-1">
                <span v-for="tag in blog.tags" :key="tag">
                    <span
                    class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100"
                    >
                        {{ tag }}
                    </span>
                </span>
            </div>
        </div>
    </a>
  </article>
    <!-- <div>
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
    </div>  -->
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