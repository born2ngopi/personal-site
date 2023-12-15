<template>
    <div>
        <div class="blog">
            <div class="container">
                <h1 class="text-4xl font-semibold text-sky-950 dark:text-white">Blog Page</h1>

                <div v-if="this.isLargeScreen">
                    <div class="mt-10">
                        <BlogCard v-for="blog in blogs" :blog="blog" class="mb-4"/>
                    </div>
                </div>
                <div v-else>
                    <div class="grid grid-cols-6 gap-5 mt-10">
                        <div class="col-span-5">
                            <BlogCard v-for="blog in blogs" :blog="blog" class="mb-4"/>
                        </div>
                        <div class="hidden lg:block">
                            <h2 class="text-4xl mb-4 font-semibold text-sky-950 dark:text-white">About Me</h2>
                            <!-- adding name  -->
                            <nuxt-link to="/" class="text-2xl mt-4 font-semibold text-sky-950 dark:text-white">Chandra Agung Rizky</nuxt-link>
                            <!-- sort description about this blog -->
                            <div class="text-slate-400 mt-3">
                                <p> This is my personal blog, where I write about my journey in programming. I'm a software engineer and i'm interested in backend development, especially in Go. I also interested in DevOps and Cloud Computing. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    
</template>

<script>
export default {
    data(){
        return {
            isLargeScreen: true
        }
    },
    mounted(){
        if (process.client) {
            if (window.innerWidth !== undefined && window.innerHeight !== undefined) {
                this.isLargeScreen = window.innerWidth < 1024;
            } else {
                this.isLargeScreen = document.documentElement.clientWidth < 1024;
            }

            window.addEventListener('resize', () => {
                if (window.innerWidth !== undefined && window.innerHeight !== undefined) {
                    if (window.innerWidth < 1024) {
                        this.isLargeScreen = true;
                    } else {
                        this.isLargeScreen = false;
                    }
                } else {
                    this.isLargeScreen = document.documentElement.clientWidth > 1024;

                    if (document.documentElement.clientWidth < 1024) {
                        this.isLargeScreen = true;
                    } else {
                        this.isLargeScreen = false;
                    }
                }
            });
        }
        
    }
}
</script>


<script setup>

const blogs = [
    {
        "id": "parsing-by-reference-or-value",
        "title": "Parsing by Reference or Value",
        "tags": ["Go", "Golang", "Programming", "todo"],
        "date": "2023-12-14",
        "Summary": "Apakah benar parsing by reference itu lebih baik manajemen memorynya daripada parsing by value?"
    },
    {
        "id": "inside-channel-golang",
        "title": "Inside Channel Golang",
        "tags": ["Go", "Golang", "Programming","todo"],
        "date": "2023-12-14",
        "Summary": "Kita akan berkenalan dengan channel di golang"
    },
    {
        "id": "making-2d-game-with-godot-4",
        "title": "Making 2D Game with Godot 4",
        "tags": ["Godot", "GDScript", "Programming", "todo"],
        "date": "2023-12-14",
        "Summary": "Kita akan belajar membuat 2D game sederhana dengan godot 4"
    },
    {
        "id": "how-to-use-jaeger-for-logging",
        "title": "How to Use Jaeger for Logging",
        "tags": ["Go", "Golang", "Programming", "todo"],
        "date": "2023-12-14",
        "Summary": "Kita akan belajar menggunakan jaeger untuk logging di golang"
    }
]

</script>


<style scoped>
.blog {
    padding-top: 6%;
}
</style>