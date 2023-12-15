<template>
    <div class="blog">
        <div class="container ">
            <!-- header -->
            <div>
                <!-- title -->
                <h1 class="text-4xl font-semibold text-sky-950 dark:text-white">Mengenal Pragma di Golang</h1>
                <!-- author -->
                <p class="text-slate-400 mt-3">Chandra Agung Rizky - 14 December 2023</p>
                <!-- tags -->
                <div class="flex flex-wrap mt-3">
                    <!-- looping tags -->
                    <div class="mr-2 mb-2" v-for="tag in tags">
                        <span class="text-sky-950 dark:text-white bg-sky-100 dark:bg-sky-900 px-2 py-1 rounded-full text-sm font-semibold"> {{ tag }} </span>
                    </div>
                </div>
            </div>
            <!-- adding line sparate -->
            <div class="border-b-2 border-slate-200 dark:border-slate-600 mt-5 mb-5"></div>
            
            <!-- content -->
            <div class="pb-16">
                <div class="lg:grid lg:grid-cols-6 lg:gap-5">
                    <!-- content -->
                    <div class="lg:col-span-5">
        
                        <!-- content -->
                        <div class="text-sky-950 dark:text-white">
                            <p>Banyak programmer golang yang tidak mengenal pragma, apa itu pragma dan gimana cara kerjanya. pada tulisan kali ini saya akan membahas pragma di golang secara general (pragma yang menurut saya cukup keren). alasan kenapa banyak programmer yang jarang mengenal pragma karena <span class="font-semibold">sangat sulit mencari dokumentasinya</span>.</p>
                            <br>
                            <p><span class="font-semibold">**Pragma adalah compiler directive** </span>, yaitu statement kode program yang mengintruksikan ke compiler untuk menjalankan spesifik operasi pada fase kompilasi.</p>
                            <br>
                            <p>Banyak bahasa pemgrograman lain seperti perl, rust, dan lain-lain, sebagai contoh code rust:</p>
                            <br>
                            <Code :sourceCode="codeOne" language="rust"/>
                            <br>
                            <p><span class="font-semibold bg-green-200 dark:bg-teal-500">inline(always)</span> attribute memberitahu compiller bahwa fungsi <span class="font-semibold">sebuah_fungsi</span> harus dieksekusi secara <span class="font-semibold">inline</span>.</p>
                            <br>
                            <p><span class="font-semibold">Lalu apakah golang mempunyai pragma ?</span>, ya tentu.</p>
                            <br>
                            <p>Gimana bisa ?, padahal di golang tidak memiliki sitax #pragma seperti C dengan preprocessor, tapi Go kan tidak memiliki preprocessor?</p>
                            <br>
                            <p>Ya.. golang tidak memiliki macros atau preprocessor, tetapi golang memiliki pragma.<span class="font-semibold">Golang mengimplementasi pragma menggunakan comments.</span></p>
                            <br>
                            <p>Pragma yang paling umum di jumpai di golang 1.16 adalah <span class="font-semibold bg-green-200 dark:bg-teal-500">//go:embed</span>. contoh code :</p>
                            <br>
                            <Code :sourceCode="codeTwo" language="go"/>
                            <br>
                            <p>menggunakan pragma di golang cukup simple caranya dengan menambahkan <span class="font-semibold bg-green-200 dark:bg-teal-500">go:</span> setelah comment dan tanpa sepasi.</p>
                            <br>
                            <Note class="italic">pragma bukan bagian dari bahasa golang</Note>
                            <br>
                            <p class="italic">“Useful” is always true for a feature request. The question is, does the usefulness justify the cost? The cost here is continued proliferation of magic comments, which are becoming too numerous already.

                            –Rob Pike</p>
                            <br>
                            <p class="font-bold">//go:embed</p>
                            <p>Pragma yang satu ini mungkin akan mudah dijumpai pada project-project kita yang banyak menggunakan file statis. Dulu sebelum golang versi 1.16 release, sedikir ribet bila program kita bersangkutan dengan file statis, yang mana binary hasil compiler kita harus di eksekusi di root project kita, mungkin bisa untuk dipindah ke directory lain tapi dengan catatan asset file statis juga akan ikut dipindah. Na si embed ini ngesolving masalah itu, gimana caranya kita nge embed file statis ke dalam binary hasil compiler golang.</p>
                            <br>
                            <p>cara penggunaannya cukup simple contoh:</p>
                            <br>
                            <Code :sourceCode="codeTwo" language="go"/>
                            <p>setelah <span class="font-semibold bg-green-200 dark:bg-teal-500">//go:embed</span> kita menuliskan lokasi file static yang akan kita embed ke dalam binary aplikasi kita, untuk kasus code diatas semua asset static ada didalam folder templates, jadi kita bisa menggunakan `*` untuk menggambil semua file tersebut, atau bila ingin spesifik file kita juga bisa langsung menuliskan alamat filenya secara spesifik</p>
                            <br>
                            <p>lalu kita bisa menggunakan kode dibawah untuk membaca filenya</p>
                            <br>
                            <Code :sourceCode="codeThree" language="go"/>
                            <br>
                            <p class="font-bold">//go:noescape</p>
                            <br>
                            <p>Pada bagian bahasa pemrograman go terdiri dari Go itu sendiri, beberapa code dari C dan beberapa code dari assembly. Nah maka dari itu untuk mencampur code dari beberapa bahasa tadi seharusnya tidak akan menjadi masalah.</p>
                            <br>
                            <p>Pada bahasa Go akan sangat sering bagi kita untuk menemukan code seperti ini:</p>
                            <Code :sourceCode="codeFour" language="go"/>
                            <p>kita sering melakukan ini di Go, tetapi munkin tidak di C, hasilnya bisa terjadi kerusakan memory, karena hasil dari fungsi `NewUser()` akan menunjuk ke lokasi di stack tempat user dialokasikan untuk sementara.</p>
                            <br>
                            <p>Escape analisis akan mengidentifikasi variabel yang masa hidupnya lebih panjang dari masa hidup fungsi tersebut, dan memindahkan variabel dari <a class="underline" href="https://www.geeksforgeeks.org/stack-data-structure/" target="_blank">stack</a> ke <a class="underline" href="https://www.geeksforgeeks.org/heap-data-structure/" target="_blank">heap</a>.</p>
                            <br>
                            <p>Ini akan memakan cost untuk gerbage collector, heap akan mengalokasi variabel dan gerbage collector harus menghapusnya setelah variabel itu tidak lagi digunakan, sementara stack akan secara otomatis terhapus bila fungsi tersebut selesai dijalankan, ini menjadi salah satu rujukan kenapa saya suka dengan kinerja gerbage collector di golang.</p>
                            <br>
                            <p>Lalu misal kode di atas kita ubah seperti ini</p>
                            <br>
                            <Code :sourceCode="codeFive" language="go"/>
                            <br>
                            <p>Akan kah `user` masuk kedalam heap ?, jawabannya tergantung, tergantung dari apa yang di kakukan pada fungsi `AddAge()` (sangat labil sekali bukan ahaha). Sebagai contoh kode diatas, variabel user tidak akan di lokasikan ke heap, tetapi hanya akan di alokasikan ke stack. Berbeda jika kodenya seperti ini</p>
                            <br>
                            <Code :sourceCode="codeSix" language="go"/>
                            <br>
                            <p>Pada kode di atas, variabel user akan dimasukkan kedalam slice `users` yang mana lifetime atau masa pakai nya lebih lama dari `NewUser` dan `AddUser`, maka dari itu variabel user akan di simpan ke dalam heap.</p>
                            <br>
                            <p>Escape analisis harus mengetahui apa yang terjadi pada fungsi `AddUser`, fungsi apa saja yang dipanggil dan lain-lainnya untuk memastikan apakah variabel akan disimpan kedalam stack atau heap.</p>
                            <br>
                            <p>Mari kita lihat kode dibawah ini:</p>
                            <br>
                            <Code :sourceCode="codeSeven" language="go"/>
                            <br>
                            <p>Apakah buf akan disimpan kedalah stack ? atau malah akan di simpan kedalam heap ?</p>
                            <br>
                            <p>Seperti yang sudah saya jabarkan di atas, itu tergantung dari apa yang terjadi pada fungsi `os.File.Read()`, nah disinilah rumitnya. `os.File.Read()` akan memanggil fungsi `syscall.Read`, dan `syscall.Read` akan memanggkil `syscall.Syscall` untuk melakukan pemanggilan ke sistem operasi. Kenapa rumit, karena `syscall.Syscall` di implementasikan menggunakan Assembly, jadi escape analisis tidak tau apa yang terjadi di Assembly. Karena compiler tidak tau apakah nilainya mungkin akan lolos, maka compiler akan mengasumsikan nilainya akan lolos.</p>
                            <br>
                            <p>disinilah peran dari pragma `//go:noescape` , ini akan memberi tahu kepada kompiler bahwa deklarasi fungsi berikutnya yang Anda lihat, anggap tidak ada argumen yang lolos.</p>
                            <br>
                            <p class="font-bold">//go:norace</p>
                            <br>
                            <p>Kerja pada multithread program itu sangat complicated. fungsi pragma `//go:norace` akan mengintruksi ke untuk tidak membubuhi keterangan fungsi sehingga tidak mendeteksi apakah ada data yang mengalami race condition atau tidak.</p>
                            <br>
                            <Code :sourceCode="codeEight" language="go"/>
                            <br>
                            <p>Sekian sedikit tulisan dari saya, semoga dapat sedikit membantu belajar golang bagi teman-teman.</p>
                            <br>
                            <p>Terimakasih…</p>
                        </div>

                    </div>

                    <!-- sidebar -->
                    <div class="hidden lg:block lg:col-span-1">
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
#[inline(always)]
fn sebuah_fungsi() {}`,
            codeTwo:`
//go:embed templates/*
var Templates embed.FS`,
            codeThree:`
var tmpl, err = template.ParseFS(Templates, “template/index.html”)
if err != nil {
    panic(err)
}`,
            codeFour:`
func NewUser() *User {
    var user = User{Name: “chandra”, Location:”yogyakarta”}
    return &user
}`,
            codeFive:`
func NewUser() *User {
    var user = User{Name: “chandra”, Location:”yogyakarta”}
    AddAge(&user)
}
func AddAge(user *User) {
    user.Age = 21
}`,
            codeSix:`
var users []*User

func AddUser(user *User){
    users = append(users, user)
}`,
            codeSeven:`
f, _ := os.Open(“/template/coba.txt”)
buf := make([]byte, 1064)
n, _ := f.Read(buf)`,
            codeEight:`
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
        }
    }
}
</script>

<style scoped>
.blog {
    padding-top: 100px;
}
</style>