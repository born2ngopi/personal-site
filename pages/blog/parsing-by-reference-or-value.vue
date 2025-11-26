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
                Parsing by Reference or Value
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
              <p class="lead text-xl text-slate-600 dark:text-slate-300">Benarkah return by reference (pointer) lebih bagus dibandingkan return by value ?</p>
              
              <p>
                  Banyak programmer golang yang ketika membuat fungsi atau method selalu menggunakan return by reference. Ketika saya tanya "kenapa menggunakan return by reference ?", kebanyakan dari mereka menjawab "lebih bagus, karena kita menggunakan alamat memory yang sama". Apakah benar seperti itu?
              </p>
              
              <p>
                  Jika saya diberi pertanyaan seperti itu, maka jawaban saya adalah <span class="font-semibold bg-green-200 dark:bg-teal-500/30 px-1 rounded"> Tergantung cara penggunaan</span>.
              </p>
              
              <p>
                  Golang memiliki memory manajement yang bisa dibilang sangat bagus. Golang memiliki gerbage collector (GC), tetapi penggunaan GC disini tidaklah gratis seperti yang kita banyangkan. Biaya yang kita bayarkan seperti resource, latency dan sebagainya.
              </p>
              
              <p>
                  Secara default, GC di golang running setiap 2 menit sekali (source bisa dibaca disini). Jadi selama GC itu belum dijalankan semua alamat memory akan terus bertambah di heap.
              </p>
              
              <p>
                  Di golang tidak semua alamat memory masuk kedalam heap, golang akan memvalidate lifetime dari setiap alamat memory tersebut apakah melebihi lifetime dari fungsi yang membuatnya atau tidak, bila lebih dari fungsi yang membuatnya maka akan masuk kedalam heap.
              </p>
              
              <p>
                  Contoh kode pertama :
              </p>
              
              <Code :sourceCode="sampleOne" language="go" />
              
              <p>Dari contoh kode di atas, kita dapat melihat bahwa variable s <span class="font-semibold bg-green-200 dark:bg-teal-500/30 px-1 rounded">s := "hello"</span> lifetimenya tidak melebihi dari fungsi Hello().</p>
              
              <p>Contoh kode kedua :</p>
              
              <Code :sourceCode="sampleTwo" language="go" />
              
              <p>Jika kita lihat dari contoh kode di atas, kita dapat melihat bahwa variable s <span class="font-semibold bg-green-200 dark:bg-teal-500/30 px-1 rounded">s := "hello"</span> lifetimenya melebihi dari fungsi Hello() maka alamat memory s tersebut akan disimpan kedalam heap.</p>
              
              <p>Apakah benar seperti itu ?, oke.., mari kita berbicara dengan compiler. Kita dapat tahu bahwa pada command <span class="font-semibold bg-green-200 dark:bg-teal-500/30 px-1 rounded">go build</span> memiliki options <span class="font-semibold bg-green-200 dark:bg-teal-500/30 px-1 rounded">-gcflags</span></p>
              
              <div class="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg border-l-4 border-cerulean-500 my-6">
                  <p class="font-mono text-sm mb-2">-gcflags '[pattern=]arg list'</p>
                  <p class="m-0">arguments to pass on each go tool compile invocation.</p>
              </div>
              
              <p>lalu kita jalan kan perintah ini : </p>
              <Code :sourceCode="sampleThree" language="bash"/>
              
              <p>Pada kode pertama kita akan mendapatkan output:</p>
              
              <Code :sourceCode="sampleFour" language="bash"/>
              
              <p>Dan pada kode kedua mendapatkan output:</p>
              
              <Code :sourceCode="sampleFive" language="bash"/>
              <p>Dari sini kita dapat melihat pada hasil kode ke 2, bahwa alamat memory dari s dipindahkan kedalam heap untuk selanjutnya di bersihkan oleh GC bila tidak lagi digunakan, sementara pada kode pertama golang akan langsung menghapus alamat memory tersebut setelah fungsi Hello() selesai.</p>
              
              <p>Oke kita coba lihat kode assemblynya,</p>
              
              <p>pada kode pertama kita akan menghasilkan output:</p>
              
              <Code :sourceCode="sampleSix" language="asm"/>
              
              <p>Bisa kita lihat pada output diatas, <span class="font-semibold bg-green-200 dark:bg-teal-500/30 px-1 rounded">main.Hello(SB), NOSPLIT|ABIInternal, $0-0</span>. NOSPLIT adalah sebuah opcode atau instruksi pada assembly yang digunakan untuk menghindari pembuatan stack frame pada saat fungsi dipanggil. Pembuatan stack frame dapat memakan waktu dan ruang yang cukup besar pada memori, sehingga NOSPLIT digunakan untuk mengoptimalkan kinerja program dengan menghindari pembuatan stack frame.</p>
              
              <p>pada kode kedua kita akan menghasilkan output :</p>
              
              <Code :sourceCode="sampleSeven" language="asm"/>
              
              <p>Dari output diatas kita dapat melihat kode, <span class="font-semibold bg-green-200 dark:bg-teal-500/30 px-1 rounded">CALL runtime.newobject(SB)</span> yang berfungsi untuk mengalokasikan memory pada heap untuk objek yang baru dibuat.</p>
              
              <p>Sekian artikel kali ini, bila bermanfaat silahkan share.</p>
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

const sampleOne = `
func Hello() string {
    s := "hello"
    return s
}

func main() {
    print(Hello())
}`

const sampleTwo = `
func Hello() *string {
    s := "hello"
    return &s
}

func main() {
    print(Hello())
}`

const sampleThree = `
go build -gcflags "-l -m" .`

const sampleFour = `
# command-line-arguments
./main.go:14:13: ... argument does not escape
./main.go:14:19: Hello() escapes to heap
`

const sampleFive = `
# command-line-arguments
./main.go:9:6: moved to heap: s
./main.go:14:13: ... argument does not escape
`

const sampleSix = `
main.Hello STEXT nosplit size=13 args=0x0 locals=0x0 funcid=0x0 align=0x0
	0x0000  	TEXT	main.Hello(SB), NOSPLIT|ABIInternal, $0-0
	0x0000  	FUNCDATA	$0, gclocals·g2BeySu+wFnoycgXfElmcg==(SB)
	0x0000  	FUNCDATA	$1, gclocals·g2BeySu+wFnoycgXfElmcg==(SB)
	0x0000  	LEAQ	go.string."hello"(SB), AX
	0x0007  	MOVL	$5, BX
	0x000c  	RET
	0x0000 48 8d 05 00 00 00 00 bb 05 00 00 00 c3           H............
	rel 3+4 t=14 go.string."hello"+0
main.main STEXT size=71 args=0x0 locals=0x18 funcid=0x0 align=0x0
	0x0000  	TEXT	main.main(SB), ABIInternal, $24-0
	0x0000  	CMPQ	SP, 16(R14)
	0x0004  	PCDATA	$0, $-2
	0x0004  	JLS	62
	0x0006  	PCDATA	$0, $-1
	0x0006  	SUBQ	$24, SP
	0x000a  	MOVQ	BP, 16(SP)
	0x000f  	LEAQ	16(SP), BP
	0x0014  	FUNCDATA	$0, gclocals·g2BeySu+wFnoycgXfElmcg==(SB)
	0x0014  	FUNCDATA	$1, gclocals·g2BeySu+wFnoycgXfElmcg==(SB)
	0x0014  	PCDATA	$1, $0
	0x0014  	CALL	runtime.printlock(SB)
	0x0019  	LEAQ	go.string."hello"(SB), AX
	0x0020  	MOVL	$5, BX
	0x0025  	CALL	runtime.printstring(SB)
	0x002a  	CALL	runtime.printnl(SB)
	0x002f  	CALL	runtime.printunlock(SB)
	0x0034  	MOVQ	16(SP), BP
	0x0039  	ADDQ	$24, SP
	0x003d  	RET
	0x003e  	NOP
	0x003e  	PCDATA	$1, $-1
	0x003e  	PCDATA	$0, $-2
	0x003e  	NOP
	0x0040  	CALL	runtime.morestack_noctxt(SB)
	0x0045  	PCDATA	$0, $-1
	0x0045  	JMP	0
`

const sampleSeven = `
main.Hello STEXT size=72 args=0x0 locals=0x18 funcid=0x0 align=0x0
	0x0000  	TEXT	main.Hello(SB), ABIInternal, $24-0
	0x0000  	CMPQ	SP, 16(R14)
	0x0004  	PCDATA	$0, $-2
	0x0004  	JLS	65
	0x0006  	PCDATA	$0, $-1
	0x0006  	SUBQ	$24, SP
	0x000a  	MOVQ	BP, 16(SP)
	0x000f  	LEAQ	16(SP), BP
	0x0014  	FUNCDATA	$0, gclocals·g2BeySu+wFnoycgXfElmcg==(SB)
	0x0014  	FUNCDATA	$1, gclocals·g2BeySu+wFnoycgXfElmcg==(SB)
	0x0014  	LEAQ	type.string(SB), AX
	0x001b  	PCDATA	$1, $0
	0x001b  	NOP
	0x0020  	CALL	runtime.newobject(SB)
	0x0025  	MOVQ	$5, 8(AX)
	0x002d  	LEAQ	go.string."hello"(SB), CX
	0x0034  	MOVQ	CX, (AX)
	0x0037  	MOVQ	16(SP), BP
	0x003c  	ADDQ	$24, SP
	0x0040  	RET
	0x0041  	NOP
	0x0041  	PCDATA	$1, $-1
	0x0041  	PCDATA	$0, $-2
	0x0041  	CALL	runtime.morestack_noctxt(SB)
	0x0046  	PCDATA	$0, $-1
	0x0046  	JMP	0
main.main STEXT size=86 args=0x0 locals=0x20 funcid=0x0 align=0x0
	0x0000  	TEXT	main.main(SB), ABIInternal, $32-0
	0x0000  	CMPQ	SP, 16(R14)
	0x0004  	PCDATA	$0, $-2
	0x0004  	JLS	79
	0x0006  	PCDATA	$0, $-1
	0x0006  	SUBQ	$32, SP
	0x000a  	MOVQ	BP, 24(SP)
	0x000f  	LEAQ	24(SP), BP
	0x0014  	FUNCDATA	$0, gclocals·J5F+7Qw7O7ve2QcWC7DpeQ==(SB)
	0x0014  	FUNCDATA	$1, gclocals·u97U1TPSCOlmat2W1oBl9Q==(SB)
	0x0014  	FUNCDATA	$2, main.main.stkobj(SB)
	0x0014  (<unknown line number>)	NOP
	0x0014  	LEAQ	go.string."hello"(SB), AX
	0x001b  	MOVQ	AX, main.s+8(SP)
	0x0020  	MOVQ	$5, main.s+16(SP)
	0x0029  	PCDATA	$1, $1
	0x0029 		CALL	runtime.printlock(SB)
	0x002e 		LEAQ	main.s+8(SP), AX
	0x0033 		PCDATA	$1, $0
	0x0033 		CALL	runtime.printpointer(SB)
	0x0038 		CALL	runtime.printnl(SB)
	0x003d 		NOP
	0x0040 		CALL	runtime.printunlock(SB)
	0x0045  	MOVQ	24(SP), BP
	0x004a  	ADDQ	$32, SP
	0x004e  	RET
	0x004f  	NOP
	0x004f  	PCDATA	$1, $-1
	0x004f  	PCDATA	$0, $-2
	0x004f  	CALL	runtime.morestack_noctxt(SB)
	0x0054  	PCDATA	$0, $-1
	0x0054  	JMP	0
`
</script>