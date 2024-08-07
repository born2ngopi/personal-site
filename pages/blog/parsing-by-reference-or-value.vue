<template>
    <div class="blog">
        <div class="container ">
            <!-- header -->
            <div>
                <!-- title -->
                <h1 class="text-4xl font-semibold text-sky-950 dark:text-white">Parsing by Reference or Value</h1>
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
                <div class="lg:grid lg:grid-cols-7 lg:gap-5">
                    <!-- content -->
                    <div class="lg:col-span-5">
                        <!-- content -->
                        <div class="text-sky-950 dark:text-white">
                            <p>Benarkah return by reference (pointer) lebih bagus dibandingkan return by value ?</p>
                            <br>
                            <p>
                                Banyak programmer golang yang ketika membuat fungsi atau method selalu menggunakan return by reference. Ketika saya tanya "kenapa menggunakan return by reference ?", kebanyakan dari mereka menjawab "lebih bagus, karena kita menggunakan alamat memory yang sama". Apakah benar seperti itu?
                            </p>
                            <br>
                            <p>
                                Jika saya diberi pertanyaan seperti itu, maka jawaban saya adalah <span class="font-semibold bg-green-200 dark:bg-teal-500"> Tergantung cara penggunaan</span>.
                            </p>
                            <br>
                            <p>
                                Golang memiliki memory manajement yang bisa dibilang sangat bagus. Golang memiliki gerbage collector (GC), tetapi penggunaan GC disini tidaklah gratis seperti yang kita banyangkan. Biaya yang kita bayarkan seperti resource, latency dan sebagainya.
                            </p>
                            <br>
                            <p>
                                Secara default, GC di golang running setiap 2 menit sekali (source bisa dibaca disini). Jadi selama GC itu belum dijalankan semua alamat memory akan terus bertambah di heap.
                            </p>
                            <br>
                            <p>
                                Di golang tidak semua alamat memory masuk kedalam heap, golang akan memvalidate lifetime dari setiap alamat memory tersebut apakah melebihi lifetime dari fungsi yang membuatnya atau tidak, bila lebih dari fungsi yang membuatnya maka akan masuk kedalam heap.
                            </p>
                            <br>
                            <p>
                                Contoh kode pertama :
                            </p>
                            <br>
                            <Code :sourceCode="sampleOne" language="golang" />
                            <br>
                            <p>Dari contoh kode di atas, kita dapat melihat bahwa variable s <span class="font-semibold bg-green-200 dark:bg-teal-500">s := "hello"</span> lifetimenya tidak melebihi dari fungsi Hello().</p>
                            <br>
                            <p>Contoh kode kedua :</p>
                            <br>
                            <Code :sourceCode="sampleTwo" language="golang" />
                            <br>
                            <p>Jika kita lihat dari contoh kode di atas, kita dapat melihat bahwa variable s <span class="font-semibold bg-green-200 dark:bg-teal-500">s := "hello"</span> lifetimenya melebihi dari fungsi Hello() maka alamat memory s tersebut akan disimpan kedalam heap.</p>
                            <br>
                            <p>Apakah benar seperti itu ?, oke.., mari kita berbicara dengan compiler. Kita dapat tahu bahwa pada command <span class="font-semibold bg-green-200 dark:bg-teal-500">go build</span> memiliki options <span class="font-semibold bg-green-200 dark:bg-teal-500">-gcflags</span></p>
                            <br>
                            <Note>
                                -gcflags '[pattern=]arg list'
                                <br><br>
                                arguments to pass on each go tool compile invocation.
                            </Note>
                            <br>
                            <p>lalu kita jalan kan perintah ini : </p>
                            <Code :sourceCode="sampleThree" language="shell"/>
                            <br>
                            <p>Pada kode pertama kita akan mendapatkan output:</p>
                            <br>
                            <Code :sourceCode="sampleFour" language="bash"/>
                            <br>
                            <p>Dan pada kode kedua mendapatkan output:</p>
                            <br>
                            <Code :sourceCode="sampleFive" language="bash"/>
                            <p>Dari sini kita dapat melihat pada hasil kode ke 2, bahwa alamat memory dari s dipindahkan kedalam heap untuk selanjutnya di bersihkan oleh GC bila tidak lagi digunakan, sementara pada kode pertama golang akan langsung menghapus alamat memory tersebut setelah fungsi Hello() selesai.</p>
                            <br>
                            <p>Oke kita coba lihat kode assemblynya,</p>
                            <br>
                            <p>pada kode pertama kita akan menghasilkan output:</p>
                            <br>
                            <Code :sourceCode="sampleSix" language="assembly"/>
                            <br>
                            <p>Bisa kita lihat pada output diatas, <span class="font-semibold bg-green-200 dark:bg-teal-500">main.Hello(SB), NOSPLIT|ABIInternal, $0-0</span>. NOSPLIT adalah sebuah opcode atau instruksi pada assembly yang digunakan untuk menghindari pembuatan stack frame pada saat fungsi dipanggil. Pembuatan stack frame dapat memakan waktu dan ruang yang cukup besar pada memori, sehingga NOSPLIT digunakan untuk mengoptimalkan kinerja program dengan menghindari pembuatan stack frame.</p>
                            <br>
                            <p>pada kode kedua kita akan menghasilkan output :</p>
                            <br>
                            <Code :sourceCode="sampleSeven" language="assembly"/>
                            <br>
                            <p>Dari output diatas kita dapat melihat kode, <span class="font-semibold bg-green-200 dark:bg-teal-500">CALL runtime.newobject(SB)</span> yang berfungsi untuk mengalokasikan memory pada heap untuk objek yang baru dibuat.</p>
                            <br>
                            <p>Sekian artikel kali ini, bila bermanfaat silahkan share.</p>
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
            sampleOne: `
func Hello() string {
    s := "hello"
    return s
}

func main() {
    print(Hello())
}`,
            sampleTwo: `
func Hello() *string {
    s := "hello"
    return &s
}

func main() {
    print(Hello())
}`,
            sampleThree:`
go build -gcflags "-l -m" .`,
            sampleFour: `
# command-line-arguments
./main.go:14:13: ... argument does not escape
./main.go:14:19: Hello() escapes to heap
`,
            sampleFive: `
# command-line-arguments
./main.go:9:6: moved to heap: s
./main.go:14:13: ... argument does not escape
`,
            sampleSix: `
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
`,
            sampleSeven: `
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
        }
    }
}
</script>

<style scoped>
.blog {
    padding-top: 100px;
}
</style>