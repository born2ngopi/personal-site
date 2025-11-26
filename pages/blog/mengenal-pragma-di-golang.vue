<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-grow pt-24 pb-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <!-- Main Content -->
          <article class="w-full lg:col-span-8">
            <!-- Header -->
            <header class="mb-8">
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tag in tags" :key="tag" class="px-2.5 py-0.5 rounded-full bg-cerulean-100 dark:bg-cerulean-900/30 text-cerulean-600 dark:text-cerulean-400 text-xs font-medium">
                  {{ tag }}
                </span>
              </div>
              <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                Mengenal Pragma di Golang
              </h1>
              <div class="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                <div class="flex items-center gap-2">
                  <UIcon name="i-heroicons-calendar" />
                  <time datetime="2023-12-14">14 December 2023</time>
                </div>
                <span class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                <div class="flex items-center gap-2">
                  <UIcon name="i-heroicons-user" />
                  <span>Chandra Agung Rizky</span>
                </div>
              </div>
            </header>

            <div class="prose prose-slate dark:prose-invert max-w-none">
              <p>Banyak programmer golang yang tidak mengenal pragma, apa itu pragma dan gimana cara kerjanya. pada tulisan kali ini saya akan membahas pragma di golang secara general (pragma yang menurut saya cukup keren). alasan kenapa banyak programmer yang jarang mengenal pragma karena <span class="font-semibold">sangat sulit mencari dokumentasinya</span>.</p>
              
              <p><span class="font-semibold">**Pragma adalah compiler directive** </span>, yaitu statement kode program yang mengintruksikan ke compiler untuk menjalankan spesifik operasi pada fase kompilasi.</p>
              
              <p>Banyak bahasa pemgrograman lain seperti perl, rust, dan lain-lain, sebagai contoh code rust:</p>
              
              <Code :sourceCode="codeOne" language="rust"/>
              
              <p><span class="font-semibold bg-green-200 dark:bg-teal-500/30 px-1 rounded">inline(always)</span> attribute memberitahu compiller bahwa fungsi <span class="font-semibold">sebuah_fungsi</span> harus dieksekusi secara <span class="font-semibold">inline</span>.</p>
              
              <p><span class="font-semibold">Lalu apakah golang mempunyai pragma ?</span>, ya tentu.</p>
              
              <p>Gimana bisa ?, padahal di golang tidak memiliki sitax #pragma seperti C dengan preprocessor, tapi Go kan tidak memiliki preprocessor?</p>
              
              <p>Ya.. golang tidak memiliki macros atau preprocessor, tetapi golang memiliki pragma.<span class="font-semibold">Golang mengimplementasi pragma menggunakan comments.</span></p>
              
              <p>Pragma yang paling umum di jumpai di golang 1.16 adalah <span class="font-semibold bg-green-200 dark:bg-teal-500/30 px-1 rounded">//go:embed</span>. contoh code :</p>
              
              <Code :sourceCode="codeTwo" language="go"/>
              
              <p>menggunakan pragma di golang cukup simple caranya dengan menambahkan <span class="font-semibold bg-green-200 dark:bg-teal-500/30 px-1 rounded">go:</span> setelah comment dan tanpa sepasi.</p>
              
              <div class="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg border-l-4 border-cerulean-500 my-6">
                <p class="italic text-slate-600 dark:text-slate-300 m-0">pragma bukan bagian dari bahasa golang</p>
              </div>
              
              <blockquote class="border-l-4 border-slate-300 dark:border-slate-600 pl-4 italic text-slate-600 dark:text-slate-400 my-6">
                “Useful” is always true for a feature request. The question is, does the usefulness justify the cost? The cost here is continued proliferation of magic comments, which are becoming too numerous already.
                <footer class="mt-2 font-semibold not-italic">— Rob Pike</footer>
              </blockquote>
              
              <h3 class="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">//go:embed</h3>
              <p>Pragma yang satu ini mungkin akan mudah dijumpai pada project-project kita yang banyak menggunakan file statis. Dulu sebelum golang versi 1.16 release, sedikir ribet bila program kita bersangkutan dengan file statis, yang mana binary hasil compiler kita harus di eksekusi di root project kita, mungkin bisa untuk dipindah ke directory lain tapi dengan catatan asset file statis juga akan ikut dipindah. Na si embed ini ngesolving masalah itu, gimana caranya kita nge embed file statis ke dalam binary hasil compiler golang.</p>
              
              <p>cara penggunaannya cukup simple contoh:</p>
              
              <Code :sourceCode="codeTwo" language="go"/>
              <p>setelah <span class="font-semibold bg-green-200 dark:bg-teal-500/30 px-1 rounded">//go:embed</span> kita menuliskan lokasi file static yang akan kita embed ke dalam binary aplikasi kita, untuk kasus code diatas semua asset static ada didalam folder templates, jadi kita bisa menggunakan `*` untuk menggambil semua file tersebut, atau bila ingin spesifik file kita juga bisa langsung menuliskan alamat filenya secara spesifik</p>
              
              <p>lalu kita bisa menggunakan kode dibawah untuk membaca filenya</p>
              
              <Code :sourceCode="codeThree" language="go"/>
              
              <h3 class="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">//go:noescape</h3>
              
              <p>Pada bagian bahasa pemrograman go terdiri dari Go itu sendiri, beberapa code dari C dan beberapa code dari assembly. Nah maka dari itu untuk mencampur code dari beberapa bahasa tadi seharusnya tidak akan menjadi masalah.</p>
              
              <p>Pada bahasa Go akan sangat sering bagi kita untuk menemukan code seperti ini:</p>
              <Code :sourceCode="codeFour" language="go"/>
              <p>kita sering melakukan ini di Go, tetapi munkin tidak di C, hasilnya bisa terjadi kerusakan memory, karena hasil dari fungsi `NewUser()` akan menunjuk ke lokasi di stack tempat user dialokasikan untuk sementara.</p>
              
              <p>Escape analisis akan mengidentifikasi variabel yang masa hidupnya lebih panjang dari masa hidup fungsi tersebut, dan memindahkan variabel dari <a class="text-cerulean-600 dark:text-cerulean-400 no-underline hover:underline" href="https://www.geeksforgeeks.org/stack-data-structure/" target="_blank">stack</a> ke <a class="text-cerulean-600 dark:text-cerulean-400 no-underline hover:underline" href="https://www.geeksforgeeks.org/heap-data-structure/" target="_blank">heap</a>.</p>
              
              <p>Ini akan memakan cost untuk gerbage collector, heap akan mengalokasi variabel dan gerbage collector harus menghapusnya setelah variabel itu tidak lagi digunakan, sementara stack akan secara otomatis terhapus bila fungsi tersebut selesai dijalankan, ini menjadi salah satu rujukan kenapa saya suka dengan kinerja gerbage collector di golang.</p>
              
              <p>Lalu misal kode di atas kita ubah seperti ini</p>
              
              <Code :sourceCode="codeFive" language="go"/>
              
              <p>Akan kah `user` masuk kedalam heap ?, jawabannya tergantung, tergantung dari apa yang di kakukan pada fungsi `AddAge()` (sangat labil sekali bukan ahaha). Sebagai contoh kode diatas, variabel user tidak akan di lokasikan ke heap, tetapi hanya akan di alokasikan ke stack. Berbeda jika kodenya seperti ini</p>
              
              <Code :sourceCode="codeSix" language="go"/>
              
              <p>Pada kode di atas, variabel user akan dimasukkan kedalam slice `users` yang mana lifetime atau masa pakai nya lebih lama dari `NewUser` dan `AddUser`, maka dari itu variabel user akan di simpan ke dalam heap.</p>
              
              <p>Escape analisis harus mengetahui apa yang terjadi pada fungsi `AddUser`, fungsi apa saja yang dipanggil dan lain-lainnya untuk memastikan apakah variabel akan disimpan kedalam stack atau heap.</p>
              
              <p>Mari kita lihat kode dibawah ini:</p>
              
              <Code :sourceCode="codeSeven" language="go"/>
              
              <p>Apakah buf akan disimpan kedalah stack ? atau malah akan di simpan kedalam heap ?</p>
              
              <p>Seperti yang sudah saya jabarkan di atas, itu tergantung dari apa yang terjadi pada fungsi `os.File.Read()`, nah disinilah rumitnya. `os.File.Read()` akan memanggil fungsi `syscall.Read`, dan `syscall.Read` akan memanggkil `syscall.Syscall` untuk melakukan pemanggilan ke sistem operasi. Kenapa rumit, karena `syscall.Syscall` di implementasikan menggunakan Assembly, jadi escape analisis tidak tau apa yang terjadi di Assembly. Karena compiler tidak tau apakah nilainya mungkin akan lolos, maka compiler akan mengasumsikan nilainya akan lolos.</p>
              
              <p>disinilah peran dari pragma `//go:noescape` , ini akan memberi tahu kepada kompiler bahwa deklarasi fungsi berikutnya yang Anda lihat, anggap tidak ada argumen yang lolos.</p>
              
              <h3 class="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">//go:norace</h3>
              
              <p>Kerja pada multithread program itu sangat complicated. fungsi pragma `//go:norace` akan mengintruksi ke untuk tidak membubuhi keterangan fungsi sehingga tidak mendeteksi apakah ada data yang mengalami race condition atau tidak.</p>
              
              <Code :sourceCode="codeEight" language="go"/>
              
              <p>Sekian sedikit tulisan dari saya, semoga dapat sedikit membantu belajar golang bagi teman-teman.</p>
              
              <p>Terimakasih…</p>
            </div>
          </article>

          <!-- Sidebar -->
          <aside class="w-full lg:col-span-4 space-y-8">
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
                I'm a software engineer passionate backend architecture, and cloud computing, and maybe AI technology.
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
#[inline(always)]
fn sebuah_fungsi() {}`

const codeTwo = `
//go:embed templates/*
var Templates embed.FS`

const codeThree = `
var tmpl, err = template.ParseFS(Templates, “template/index.html”)
if err != nil {
    panic(err)
}`

const codeFour = `
func NewUser() *User {
    var user = User{Name: “chandra”, Location:”yogyakarta”}
    return &user
}`

const codeFive = `
func NewUser() *User {
    var user = User{Name: “chandra”, Location:”yogyakarta”}
    AddAge(&user)
}
func AddAge(user *User) {
    user.Age = 21
}`

const codeSix = `
var users []*User

func AddUser(user *User){
    users = append(users, user)
}`

const codeSeven = `
f, _ := os.Open(“/template/coba.txt”)
buf := make([]byte, 1064)
n, _ := f.Read(buf)`

const codeEight = `
package main

var angka int
//go:norace
func Tambah() {
    angka++
}
//go:norace
func Kurang() {
    angka--
}
func main() {
    for i := 0; i<10; i++ {
        go Tambah()
    }
    println(angka)
    for i := 0; i<10; i++ {
        go Kurang()
    }
    println(angka)
}`
</script>