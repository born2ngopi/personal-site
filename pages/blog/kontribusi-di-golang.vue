<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-grow pt-24 pb-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-12">
          <!-- Main Content -->
          <article class="lg:col-span-8">
            <!-- Header -->
            <header class="mb-8">
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tag in tags" :key="tag" class="px-2.5 py-0.5 rounded-full bg-cerulean-100 dark:bg-cerulean-900/30 text-cerulean-600 dark:text-cerulean-400 text-xs font-medium">
                  {{ tag }}
                </span>
              </div>
              <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                Kontribusi di Opensource Golang
              </h1>
              <div class="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                <div class="flex items-center gap-2">
                  <UIcon name="i-heroicons-calendar" />
                  <time datetime="2024-05-17">17 Mei 2024</time>
                </div>
                <span class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                <div class="flex items-center gap-2">
                  <UIcon name="i-heroicons-user" />
                  <span>Chandra Agung Rizky</span>
                </div>
              </div>
            </header>

            <div class="prose prose-slate dark:prose-invert max-w-none">
              <p>Ketika menggunakan bahasa pemrograman tidak sedikit orang yang berfikir "apakah saya bisa ikut berkontribusi untuk mengembangkan bahasa pemrograman juga". Dalam konteks tulisan kali ini kita akan mencoba berkontribusi di ekosistem bahasa pemgrograman golang</p>
              
              <p>Apakah harus mengetahui bahasa low level terlebih dahulu untuk berkontribusi di golang?. Tidak perlu, kita cukup mengetahui bahasa golang itu sendiri.</p>
              
              <p>Pada golang versi sekarang kita dapat mengkompilasi source code golang dengan golang versi lama. ex: di komputer kita tersedia golang versi 1.22, kita dapat mengkompilasi source code golang menggunakan version go tersebut.</p>
              
              <p>Langkah awal kita perlu membaca <a href="https://go.dev/doc/contribute" target="_blank" class="text-cerulean-600 dark:text-cerulean-400 no-underline hover:underline">contributor guide line</a>.</p>
              
              <p>Selanjutnya kita perlu mengeset email kita pada git config.</p>
              
              <Code :sourceCode="codeOne" language="bash"/>
              
              <p>Selanjutnya kita perlu melakukan submit untuk google cla dengan link <a href="https://cla.developers.google.com/clas?pli=1&authuser=1" target="_blank" class="text-cerulean-600 dark:text-cerulean-400 no-underline hover:underline">berikut</a>. Pastikan teman-teman memilih dengan benar apakah teman-teman akan berkontribusi sendiri atau sebagai karyawan di perusahaan.</p>
              
              <img src="/assets/images/google_cla.png" alt="google cla" class="rounded-xl shadow-lg my-6 w-full"/>
              
              <p>Selanjutnya kita membuat akun Gerrit (jika belum ada). Teman-teman dapat menuju link berikut <a href="https://go-review.googlesource.com/login/" target="_blank" class="text-cerulean-600 dark:text-cerulean-400 no-underline hover:underline">go-review.googlesource.com/login/</a></p>
              
              <p>Next kita dapat mengkonfigurasi autentikasi git. Teman-teman dapat mengunjungi link <a href="https://go.googlesource.com" target="_blank" class="text-cerulean-600 dark:text-cerulean-400 no-underline hover:underline">go.googlesource.com</a> lalu klik <span class="font-semibold">Generate Password</span></p>
              
              <img src="/assets/images/generate_password.png" alt="generate password" class="rounded-xl shadow-lg my-6 w-full"/>
              
              <p>Selanjutnya teman-teman dapat mengcopy hasil generate password dan di eksekusi di terminal</p>
              
              <p>Next kita perlu menginstall <span class="font-semibold text-slate-900 dark:text-white">codereview</span>, kita hanya perlu menjalankan code berikut:</p>
              
              <Code :sourceCode="codeTwo" language="bash"/>
              
              <p>Nice..., sekarang kita hanya perlu untuk mengclone code go, dan code tools go. Berikut commandnya:</p>
              
              <Code :sourceCode="codeThree" language="bash"/>
              
              <p>Selanjutnya kita dapat mencoba mengkompilasi code golang dengan cara berikut:</p>
              <Code :sourceCode="codeFour" language="bash"/>
              
              <p>Mantap..., disini kita sudah bisa berkontribusi di code go. Teman teman dapat mencari issue atau proposal di <a href="https://github.com/golang/go/issues" target="_blank" class="text-cerulean-600 dark:text-cerulean-400 no-underline hover:underline">https://github.com/golang/go/issues</a>.</p>
              
              <p>Sebagai contoh saya menemukan issue berikut: </p>
              
              <img src="/assets/images/finding_issue.png" alt="issue" class="rounded-xl shadow-lg my-6 w-full"/>
              
              <p>Kita perlu membuat branch baru terlebih dahulu:</p>
              
              <Code :sourceCode="codeFive" language="bash"/>
              
              <p>Next, kita hanya perlu cari tahu dan fixing issue tersebut.</p>
              
              <img src="/assets/images/change_code.png" alt="code" class="rounded-xl shadow-lg my-6 w-full" />
              
              <p>Bila sudah kita dapat melakukat `git add`, setelah itu kita dapat melakukan commit dengan menggunakan codereview</p>
              
              <Code :sourceCode="codeSix" language="bash"/>
              
              <p>Berikut format commit message yang baik:</p>
              
              <Code :sourceCode="codeSeven" language="bash"/>
              
              <p>Setelah itu kita dapat push code kita dengan codereview</p>
              
              <Code :sourceCode="codeEight" language="bash"/>
              
              <img src="/assets/images/codereview_mail.png" alt="code" class="rounded-xl shadow-lg my-6 w-full" />
              
              <p>Jika success, kita akan mendapatkan link yang menuju halaman pull request kita</p>
              
              <img src="/assets/images/waiting_review.png" alt="code" class="rounded-xl shadow-lg my-6 w-full" />
              
              <p>Nice.., sekarang kita tinggal menunggu tim internal go untuk melakukan review (bila ada) dan merge</p>
              
              <img src="/assets/images/review.png" alt="code" class="rounded-xl shadow-lg my-6 w-full" />
              
              <p>Mantap...., Sekarang teman-teman dapat ikut serta berkontribusi di golang.</p>
              
              <p>Share bila tulisan ini bermanfaat, Terimakasih…</p>
            </div>
          </article>

          <!-- Sidebar -->
          <aside class="lg:col-span-4 space-y-8">
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
          </aside>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
const tags = ["Go", "Golang", "Programming"]

const codeOne = `
$ git config --global user.email account@email`

const codeTwo = `
$ go install golang.org/x/review/git-codereview@latest`

const codeThree = `
$ git clone https://go.googlesource.com/go
$ git clone https://go.googlesource.com/tools`

const codeFour = `
$ cd go/
$ ./all.bash`

const codeFive = `
$ git checkout -b add-feature-fullscreen-toogle-on-present-tool`

const codeSix = `
$ git codereview change`

const codeSeven = `
[Nama Feature]: [Short What You Do]

[Long Description]

Fixes #[issue number]

---- example ----
present: add feature toggle for fullscreen mode

In terms of existing features, there is no feature for full screen mode. with this change we add the fullscreen toogle feature by pressing f or F

The demo: https://drive.google.com/file/d/1Pnh4ha1vc2Xse5K2Qbn7fBipd0hCdYzN/view?usp=sharing

Fixes golang/go#12634`

const codeEight = `
$ git codereview mail`
</script>