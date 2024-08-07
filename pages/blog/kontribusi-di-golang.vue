<template>
    <div class="blog">
        <div class="container ">
            <!-- header -->
            <div>
                <!-- title -->
                <h1 class="text-4xl font-semibold text-sky-950 dark:text-white">Kontribusi di Opensource Golang</h1>
                <!-- author -->
                <p class="text-slate-400 mt-3">Chandra Agung Rizky - 17 Mei 2024</p>
                <!-- tags -->
                <div class="flex flex-wrap mt-3">
                    <!-- looping tags -->
                    <div class="mr-2 mb-2" v-for="tag in tags">
                        <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100"> {{ tag }} </span>
                    </div>
                </div>
            </div>
            <!-- adding line sparate -->
            <div class="border-b-2 border-slate-200 dark:border-slate-600 mt-5 mb-5"></div>
            
            <!-- content -->
            <div class="pb-16">
                <div class="lg:grid lg:grid-cols-7 lg:gap-5">
                    <!-- content -->
                    <div class="lg:col-span-5">
        
                        <!-- content -->
                        <div class="text-sky-950 dark:text-white">
                            <!-- <span class="font-semibold">sangat sulit mencari dokumentasinya</span> -->
                            <!-- <span class="font-semibold bg-green-200 dark:bg-teal-500">//go:embed</span> -->
                            <!-- <Note class="italic">pragma bukan bagian dari bahasa golang</Note> -->
                            <p>Ketika menggunakan bahasa pemrograman tidak sedikit orang yang berfikir "apakah saya bisa ikut berkontribusi untuk mengembangkan bahasa pemrograman juga". Dalam konteks tulisan kali ini kita akan mencoba berkontribusi di ekosistem bahasa pemgrograman golang</p>
                            <br>
                            <p>Apakah harus mengetahui bahasa low level terlebih dahulu untuk berkontribusi di golang?. Tidak perlu, kita cukup mengetahui bahasa golang itu sendiri.</p>
                            <br>
                            <p>Pada golang versi sekarang kita dapat mengkompilasi source code golang dengan golang versi lama. ex: di komputer kita tersedia golang versi 1.22, kita dapat mengkompilasi source code golang menggunakan version go tersebut.</p>
                            <br>
                            <p>Langkah awal kita perlu membaca <a href="https://go.dev/doc/contribute">contributor guide line</a>.</p>
                            <br>
                            <p>Selanjutnya kita perlu mengeset email kita pada git config.</p>
                            <br>
                            <Code :sourceCode="codeOne" language="bash"/>
                            <br>
                            <p>Selanjutnya kita perlu melakukan submit untuk google cla dengan link <a href="https://cla.developers.google.com/clas?pli=1&authuser=1">berikut</a>. Pastikan teman-teman memilih dengan benar apakah teman-teman akan berkontribusi sendiri atau sebagai karyawan di perusahaan.</p>
                            <br>
                            <!-- get image google_cla.png from public/assets/images -->
                            <img src="/assets/images/google_cla.png" alt="google cla" class="w-full h-auto"/>
                            <br>
                            <p>Selanjutnya kita membuat akun Gerrit (jika belum ada). Teman-teman dapat menuju link berikut <a href="https://go-review.googlesource.com/login/">go-review.googlesource.com/login/</a></p>
                            <br>
                            <p>Next kita dapat mengkonfigurasi autentikasi git. Teman-teman dapat mengunjungi link <a href="https://go.googlesource.com">go.googlesource.com</a> lalu klik <span class="font-semibold">Generate Password</span></p>
                            <br>
                            <img src="/assets/images/generate_password.png" alt="generate password" class="w-full h-auto"/>
                            <br>
                            <p>Selanjutnya teman-teman dapat mengcopy hasil generate password dan di eksekusi di terminal</p>
                            <br>
                            <p>Next kita perlu menginstall <span class="font-semibold">codereview</span>, kita hanya perlu menjalankan code berikut:</p>
                            <br>
                            <Code :sourceCode="codeTwo" language="bash"/>
                            <br>
                            <p>Nice..., sekarang kita hanya perlu untuk mengclone code go, dan code tools go. Berikut commandnya:</p>
                            <br>
                            <Code :sourceCode="codeThree" language="bash"/>
                            <br>
                            <p>Selanjutnya kita dapat mencoba mengkompilasi code golang dengan cara berikut:</p>
                            <Code :sourceCode="codeFour" language="bash"/>
                            <br>
                            <p>Mantap..., disini kita sudah bisa berkontribusi di code go. Teman teman dapat mencari issue atau proposal di <a href="https://github.com/golang/go/issues">https://github.com/golang/go/issues</a>.</p>
                            <br>
                            <p>Sebagai contoh saya menemukan issue berikut: </p>
                            <br>
                            <img src="/assets/images/finding_issue.png" alt="issue" class="w-full h-auto"/>
                            <br>
                            <br>
                            <p>Kita perlu membuat branch baru terlebih dahulu:</p>
                            <br>
                            <Code :sourceCode="codeFive" language="bash"/>
                            <p></p>
                            <p>Next, kita hanya perlu cari tahu dan fixing issue tersebut.</p>
                            <br>
                            <img src="/assets/images/change_code.png" alt="code" class="w-full h-auto" />
                            <br>
                            <p>Bila sudah kita dapat melakukat `git add`, setelah itu kita dapat melakukan commit dengan menggunakan codereview</p>
                            <br>
                            <Code :sourceCode="codeSix" language="bash"/>
                            <br>
                            <p>Berikut format commit message yang baik:</p>
                            <br>
                            <Code :sourceCode="codeSeven" language="bash"/>
                            <br>
                            <p>Setelah itu kita dapat push code kita dengan codereview</p>
                            <br>
                            <Code :sourceCode="codeEight" language="bash"/>
                            <br>
                            <img src="/assets/images/codereview_mail.png" alt="code" class="w-full h-auto" />
                            <br>
                            <p>Jika success, kita akan mendapatkan link yang menuju halaman pull request kita</p>
                            <br>
                            <img src="/assets/images/waiting_review.png" alt="code" class="w-full h-auto" />
                            <br>
                            <p>Nice.., sekarang kita tinggal menunggu tim internal go untuk melakukan review (bila ada) dan merge</p>
                            <br>
                            <img src="/assets/images/review.png" alt="code" class="w-full h-auto" />
                            <p>Mantap...., Sekarang teman-teman dapat ikut serta berkontribusi di golang.</p>
                            <br>
                            <p>Share bila tulisan ini bermanfaat, Terimakasih…</p>
                        </div>

                    </div>

                    <!-- sidebar -->
                    <div class="hidden lg:block lg:col-span-2">
                        <div class="text-sky-950 dark:text-white">
                            <h2 class="text-2xl font-semibold">About Me</h2>
                            <p class="mt-3">Chandra Agung Rizky</p>
                            <p class="mt-3">Software Engineer</p>
                            <p class="mt-3">Indonesia</p>
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
            tags: ["Go", "Golang", "Programming"],
            codeOne:`
$ git config --global user.email account@email`,
            codeTwo:`
$ go install golang.org/x/review/git-codereview@latest`,
            codeThree:`
$ git clone https://go.googlesource.com/go
$ git clone https://go.googlesource.com/tools`,
            codeFour:`
$ cd go/
$ ./all.bash`,
            codeFive:`
$ git checkout -b add-feature-fullscreen-toogle-on-present-tool`,
            codeSix:`
$ git codereview change`,
            codeSeven:`
[Nama Feature]: [Short What You Do]

[Long Description]

Fixes #[issue number]

---- example ----
present: add feature toggle for fullscreen mode

In terms of existing features, there is no feature for full screen mode. with this change we add the fullscreen toogle feature by pressing f or F

The demo: https://drive.google.com/file/d/1Pnh4ha1vc2Xse5K2Qbn7fBipd0hCdYzN/view?usp=sharing

Fixes golang/go#12634`,
            codeEight:`
$ git codereview mail`
        }
    }
}
</script>

<style scoped>
.blog {
    padding-top: 100px;
}
</style>