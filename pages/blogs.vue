<template>
    <div>
        <div class="blog">
            <div class="container">
                <h1 class="text-4xl font-semibold text-sky-950 dark:text-white">Blog Page</h1>
                <p class="text-slate-400 mt-3">This blog is only written in Indonesian, in line with my goal to help educate the Indonesian generation.</p>
                <!-- adding line sparate -->
                <div class="border-b-2 border-slate-200 dark:border-slate-600 mt-5 mb-5"></div>
                <div class="block lg:hidden">
                    <div class="mt-10">
                        <BlogCard v-for="blog in blogs" :blog="blog" class="mb-4"/>
                    </div>
                </div>
                <div class="hidden lg:block">
                    <div class="grid grid-cols-7 gap-5 mt-10">
                        <div class="col-span-5">
                            <BlogCard v-for="blog in blogs" :blog="blog" class="mb-4"/>
                        </div>
                        <div class="col-span-2 hidden lg:block">
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
    }
}
</script>


<script setup>

const blogs = [
    {
        "id": "kontribusi-di-golang",
        "commingsoon": false,
        "title": "Ikut Berkontribusi di Golang",
        "tags": ["Go", "Golang", "Programming"],
        "date": "2024-05-17",
        "Summary": "Kita akan belajar dan mencoba bagaimana caranya berkontribusi di golang"
    },
    {
        "id": "parsing-by-reference-or-value",
        "commingsoon": false,
        "title": "Parsing by Reference or Value",
        "tags": ["Go", "Golang", "Programming"],
        "date": "2023-12-14",
        "Summary": "Apakah benar parsing by reference itu lebih baik manajemen memorynya daripada parsing by value?"
    },
    {
        "id": "mengenal-pragma-di-golang",
        "commingsoon": false,
        "title":"Mengenal Pragma di Golang",
        "tags": ["Go", "Golang", "Programming"],
        "date": "2023-12-14",
        "Summary": "Banyak programmer golang yang tidak mengenal pragma, apa itu pragma dan gimana cara kerjanya?"
    },
    {
        "id": "inside-channel-golang",
        "commingsoon": true,
        "title": "Inside Channel Golang",
        "tags": ["Go", "Golang", "Programming","todo"],
        "date": "2023-12-14",
        "Summary": "Kita akan berkenalan dengan channel di golang"
    },
    {
        "id": "making-2d-game-with-godot-4",
        "commingsoon": true,
        "title": "Making 2D Game with Godot 4",
        "tags": ["Godot", "GDScript", "Programming", "todo"],
        "date": "2023-12-14",
        "Summary": "Kita akan belajar membuat 2D game sederhana dengan godot 4"
    },
    {
        "id": "how-to-use-jaeger-for-logging",
        "commingsoon": true,
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