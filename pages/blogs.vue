<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-grow pt-24 pb-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Blog
          </h1>
          <p class="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
            Sharing my journey in programming, backend development, and technology. 
            <span class="block mt-1 text-sm text-slate-500 italic">
              *Articles are written in Indonesian to support local education.
            </span>
          </p>
        </div>

        <div class="grid lg:grid-cols-12 gap-8">
          <!-- Blog Grid -->
          <div class="lg:col-span-8">
            <div class="grid md:grid-cols-2 gap-6">
              <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
            </div>
          </div>

          <!-- Sidebar (About Me) -->
          <div class="lg:col-span-4 space-y-8">
            <div class="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 sticky top-24">
              <div class="flex items-center gap-4 mb-4">
                <div class="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white dark:border-slate-700 shadow-sm">
                   <img src="/backend-illustration.png" alt="Chandra Agung Rizky" class="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-slate-900 dark:text-white">Chandra Agung Rizky</h3>
                  <p class="text-sm text-cerulean-600 dark:text-cerulean-400 font-medium">Backend Engineer</p>
                </div>
              </div>
              
              <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                I'm a software engineer passionate about Go, backend architecture, and cloud computing. 
                This blog is where I document my learning process and share knowledge with the community.
              </p>

              <div class="flex gap-2">
                <UButton size="xs" color="gray" variant="soft" icon="i-fa6-brands-github" to="https://github.com/born2ngopi" target="_blank">Github</UButton>
                <UButton size="xs" color="gray" variant="soft" icon="i-fa6-brands-linkedin" to="https://linkedin.com/in/chandra-agung-rizky" target="_blank">LinkedIn</UButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

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