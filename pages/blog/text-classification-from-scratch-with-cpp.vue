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
                <span
                  v-for="tag in tags"
                  :key="tag"
                  class="px-2.5 py-0.5 rounded-full bg-cerulean-100 dark:bg-cerulean-900/30 text-cerulean-600 dark:text-cerulean-400 text-xs font-medium"
                >
                  {{ tag }}
                </span>
              </div>
              <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                Text Classification from Scratch with C++
              </h1>
              <div class="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                <div class="flex items-center gap-2">
                  <UIcon name="i-heroicons-calendar" />
                  <time datetime="2025-11-26">26 November 2025</time>
                </div>
                <span class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                <div class="flex items-center gap-2">
                  <UIcon name="i-heroicons-user" />
                  <span>Chandra Agung Rizky</span>
                </div>
              </div>
            </header>

            <div class="prose prose-slate dark:prose-invert max-w-none">
              <p>
                Tulisan ini dibuat untuk mendokumentasikan cara saya belajar
                <span class="font-semibold">Machine Learning</span> dari dasar.
                Saya bukan ahli matematika atau AI, hanya manusia biasa yang penasaran
                dan ingin benar-benar memahami apa yang terjadi di balik sebuah model.
              </p>

              <p>
                Pada tulisan ini saya menggunakan <span class="font-semibold">C++</span> sebagai
                bahasa pemrograman. Alasannya sederhana: saya ingin belajar dari pondasi yang kuat
                dan melihat secara eksplisit bagaimana operasi matematika dijalankan saat training
                model atau membangun NLP pipeline.
              </p>

              <p>
                Catatan ini cocok untuk kamu yang suka membaca dan haus ilmu yang tinggi,
                dan tidak terlalu cocok jika kamu mencari jalan pintas yang instan.
              </p>

              <h2 class="text-2xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">
                Membaca Sigma (∑)
              </h2>

              <p>
                Salah satu kebingungan pertama saat belajar machine learning adalah cara membaca
                simbol <span class="font-mono font-semibold">sigma (∑)</span>. Dalam banyak rumus,
                kita akan sering bertemu bentuk seperti:
              </p>

              <p class="font-mono text-sm bg-slate-100 dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                ∑<sub>i=1</sub><sup>n</sup> y<sub>i</sub> · b
              </p>

              <p>
                Bagian <span class="font-mono">∑<sub>i=1</sub><sup>n</sup></span> dibaca:
                <span class="italic">“penjumlahan dari i sama dengan 1 sampai i sama dengan n”</span>.
                Jika diterjemahkan ke dalam pemrograman, sigma adalah
                <span class="font-semibold">looping</span>.
              </p>

              <p>Contoh: misal kita punya data y = [1, 2, 3] dan b = 2.</p>

              <Code :sourceCode="sigmaCode" language="cpp" />

              <h2 class="text-2xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">
                Matriks dan Perkalian Matriks
              </h2>

              <p>
                Dalam matematika, matriks adalah susunan bilangan yang diatur dalam baris dan kolom,
                biasanya diapit oleh kurung siku. Contoh dua buah matriks:
              </p>

              <p class="font-mono text-sm bg-slate-100 dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                A = [ [1, 2, 3],
                      [4, 5, 6] ]
                <br />
                B = [ [7, 8],
                      [9, 10],
                      [11, 12] ]
              </p>

              <p>
                Matriks A berukuran 2 × 3 dan B berukuran 3 × 2.
                Sebelum menghitung hasil perkalian C = A · B, kita bahkan bisa mengetahui
                ukuran hasilnya terlebih dahulu:
              </p>

              <ul>
                <li>A: m × n</li>
                <li>B: n × p</li>
                <li>C: m × p</li>
              </ul>

              <p>
                Rumus umum elemen C<sub>ij</sub> adalah:
              </p>

              <p class="font-mono text-sm bg-slate-100 dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                C<sub>ij</sub> = ∑<sub>k=1</sub><sup>n</sup> A<sub>ik</sub> · B<sub>kj</sub>
              </p>

              <p>
                Dengan rumus ini kita bisa menghitung setiap elemen pada matriks hasil,
                dan kemudian mengimplementasikannya ke dalam C++.
              </p>

              <Code :sourceCode="matrixCode" language="cpp" />

              <h2 class="text-2xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">
                Linear Regression &amp; Loss Function
              </h2>

              <p>
                Sebelum masuk ke text classification, kita perlu memahami dulu
                <span class="font-semibold">linear regression</span>.
                Persamaan garis lurus yang sering dipakai:
              </p>

              <p class="font-mono text-sm bg-slate-100 dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                y = m · x + b
              </p>

              <ul>
                <li>y: nilai prediksi</li>
                <li>m: slope / weight (kemiringan garis)</li>
                <li>x: input</li>
                <li>b: bias / intercept</li>
              </ul>

              <p>
                Untuk mengukur seberapa jauh prediksi dari nilai asli, kita menggunakan
                <span class="font-semibold">Mean Squared Error (MSE)</span>:
              </p>

              <p class="font-mono text-sm bg-slate-100 dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                L = (1 / n) · ∑<sub>i=1</sub><sup>n</sup> (y<sub>i</sub> − ŷ<sub>i</sub>)²
              </p>

              <p>
                Di sini ŷ<sub>i</sub> adalah hasil prediksi dari persamaan linear regression,
                dan faktor 1 / n membuat kita mendapatkan nilai
                <span class="font-semibold">rata-rata error kuadrat</span>.
              </p>

              <h2 class="text-2xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">
                Gradient Descent Singkat
              </h2>

              <p>
                Gradient descent adalah metode untuk mengoptimasi parameter (weight dan bias)
                dengan cara menurunkan nilai loss function sedikit demi sedikit.
                Intinya, kita mengambil turunan (gradien) loss terhadap tiap parameter,
                lalu menggeser parameter ke arah yang menurunkan loss.
              </p>

              <p class="font-mono text-sm bg-slate-100 dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                m = m − α · (1 / n) · ∑<sub>i=1</sub><sup>n</sup> ∂L/∂m<sub>i</sub> <br />
                b = b − α · (1 / n) · ∑<sub>i=1</sub><sup>n</sup> ∂L/∂b<sub>i</sub>
              </p>

              <p>
                Nilai α adalah
                <span class="font-semibold">learning rate</span> yang mengatur seberapa besar
                langkah update parameter di setiap iterasi.
              </p>

              <h2 class="text-2xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">
                Dari Linear Regression ke Logistic Regression
              </h2>

              <p>
                Untuk text classification biner (misalnya <span class="font-mono">1 = beli</span>,
                <span class="font-mono">0 = tidak beli / malak</span>), kita akan menggunakan
                <span class="font-semibold">logistic regression</span>.
                Bedanya dengan linear regression biasa adalah kita membungkus output
                ke dalam fungsi sigmoid sehingga nilainya berada di antara 0 dan 1.
              </p>

              <p class="font-mono text-sm bg-slate-100 dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                σ(z) = 1 / (1 + e<sup>−z</sup>)
              </p>

              <p>
                Dengan <span class="font-mono">z = w · x + b</span>,
                hasil σ(z) bisa ditafsirkan sebagai probabilitas.
                Jika σ(z) ≥ 0.5 kita beri label 1, jika tidak maka 0.
              </p>

              <h2 class="text-2xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">
                Mempersiapkan Data Teks
              </h2>

              <p>
                Kita akan membangun text classifier sederhana untuk membedakan
                kalimat permintaan beli pulsa/data dengan kalimat “malak” kuota.
                Langkahnya:
              </p>

              <ol>
                <li>Membuat <span class="font-semibold">vocabulary</span> kata-kata penting.</li>
                <li>
                  Mengubah setiap kalimat menjadi
                  <span class="font-semibold">vector frekuensi kata</span> berbasis vocabulary.
                </li>
                <li>Melatih model logistic regression menggunakan gradient descent.</li>
                <li>Menggunakan model untuk memprediksi kalimat baru.</li>
              </ol>

              <Code :sourceCode="preTrainingCode" language="cpp" />

              <h2 class="text-2xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">
                Training Logistic Regression di C++
              </h2>

              <p>
                Berikut fungsi <span class="font-mono">sigmoid</span> dan
                <span class="font-mono">trainModel</span> yang mengimplementasikan
                gradient descent untuk logistic regression:
              </p>

              <Code :sourceCode="trainCode" language="cpp" />

              <h2 class="text-2xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">
                Fungsi Prediksi
              </h2>

              <p>
                Setelah training, kita gunakan weight dan bias yang sudah di-update
                untuk melakukan prediksi pada kalimat baru.
              </p>

              <Code :sourceCode="predictCode" language="cpp" />

              <h2 class="text-2xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">
                Program Lengkap
              </h2>

              <p>
                Di bawah ini adalah contoh program C++ lengkap yang melakukan:
                membangun vocabulary, mempersiapkan data, melatih model, dan
                menguji beberapa kalimat baru.
              </p>

              <Code :sourceCode="fullProgramCode" language="cpp" />

              <p class="mt-8">
                Sampai di sini kamu sudah membangun sebuah
                <span class="font-semibold">AI text classifier sederhana</span> dari nol
                menggunakan C++. Lebih penting lagi, kamu telah melihat bagaimana
                operasi matematika seperti sigma, matriks, dan gradient descent
                benar-benar diimplementasikan di level kode.
              </p>

              <p>Jika tulisan ini bermanfaat, silakan dibagikan. Terima kasih.</p>
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
                <UButton
                  size="xs"
                  color="gray"
                  variant="soft"
                  icon="i-fa6-brands-github"
                  to="https://github.com/born2ngopi"
                  target="_blank"
                >
                  Github
                </UButton>
                <UButton
                  size="xs"
                  color="gray"
                  variant="soft"
                  icon="i-fa6-brands-linkedin"
                  to="https://linkedin.com/in/chandra-agung-rizky"
                  target="_blank"
                >
                  LinkedIn
                </UButton>
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
const tags = ['C++', 'Machine Learning', 'NLP']

const sigmaCode = `
vector<double> y = {1, 2, 3};
double b = 2;
double result = 0.0;

for (int i = 0; i < y.size(); i++) {
    result += y[i] * b;
}
`

const matrixCode = `
#include <iostream>
#include <vector>

using namespace std;

vector<vector<double>> multiplyMatrix(
    const vector<vector<double>>& A,
    const vector<vector<double>>& B
) {
    int rowsA = A.size();
    int colsA = A[0].size();
    int rowsB = B.size();
    int colsB = B[0].size();

    if (colsA != rowsB) {
        throw runtime_error("Ukuran matriks tidak sesuai untuk perkalian");
    }

    vector<vector<double>> C(rowsA, vector<double>(colsB, 0.0));

    for (int i = 0; i < rowsA; i++) {
        for (int j = 0; j < colsB; j++) {
            for (int k = 0; k < colsA; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return C;
}

void printMatrix(const vector<vector<double>>& M) {
    for (auto& row : M) {
        for (auto val : row) {
            cout << val << " ";
        }
        cout << endl;
    }
}
`

const preTrainingCode = `
void preTraining(
    vector<pair<string, double>> data,
    vector<string> vocab,
    vector<vector<double>>& x,
    vector<double>& y
) {
    for (auto& d : data) {
        vector<double> vec(vocab.size(), 0.0);
        stringstream ss(d.first);

        string word;
        while (ss >> word) {
            for (int i = 0; i < vocab.size(); i++) {
                if (word == vocab[i]) vec[i] += 1.0;
            }
        }

        x.push_back(vec);
        y.push_back(d.second);
    }
}
`

const trainCode = `
// Sigmoid function
double sigmoid(double z) {
    return 1.0 / (1.0 + exp(-z));
}

void trainModel(
    vector<vector<double>>& x,
    vector<double>& y,
    vector<double>& weights,
    double& bias,
    double lr,
    int epochs
) {
    int n = x.size();      // jumlah data
    int m = x[0].size();   // jumlah fitur

    for (int epoch = 0; epoch < epochs; epoch++) {
        vector<double> gradients(m, 0.0);
        double bias_grad = 0.0;

        // hitung gradien
        for (int i = 0; i < n; i++) {
            double z = bias;
            for (int j = 0; j < m; j++) {
                z += x[i][j] * weights[j];
            }

            double pred = sigmoid(z);
            double error = y[i] - pred;

            for (int j = 0; j < m; j++) {
                gradients[j] += error * x[i][j];
            }

            bias_grad += error;
        }

        // update bobot
        for (int j = 0; j < m; j++) {
            weights[j] += lr * gradients[j] / n;
        }

        // update bias
        bias += lr * bias_grad / n;

        // monitor loss setiap beberapa epoch
        if (epoch % 100 == 0) {
            double loss = 0.0;
            for (int i = 0; i < n; i++) {
                double z = bias;
                for (int j = 0; j < m; j++) {
                    z += x[i][j] * weights[j];
                }
                double pred = sigmoid(z);
                loss += -(y[i] * log(pred + 1e-9) +
                          (1 - y[i]) * log(1 - pred + 1e-9));
            }
            cout << "Epoch " << epoch << " - Loss: " << loss / n << endl;
        }
    }
}
`

const predictCode = `
int predict(vector<double> x, vector<double> weights, double bias) {
    double z = bias;
    for (int i = 0; i < x.size(); i++) {
        z += x[i] * weights[i];
    }

    double pred = sigmoid(z);

    return pred >= 0.5 ? 1 : 0;
}
`

const fullProgramCode = `
#include <bits/stdc++.h>

using namespace std;

double sigmoid(double z) {
    return 1.0 / (1.0 + exp(-z));
}

void trainModel(
    vector<vector<double>>& x,
    vector<double>& y,
    vector<double>& weights,
    double& bias,
    double lr,
    int epochs
) {
    int n = x.size();
    int m = x[0].size();

    for (int epoch = 0; epoch < epochs; epoch++) {
        vector<double> gradients(m, 0.0);
        double bias_grad = 0.0;

        for (int i = 0; i < n; i++) {
            double z = bias;
            for (int j = 0; j < m; j++) {
                z += x[i][j] * weights[j];
            }

            double pred = sigmoid(z);
            double error = y[i] - pred;

            for (int j = 0; j < m; j++) {
                gradients[j] += error * x[i][j];
            }

            bias_grad += error;
        }

        for (int j = 0; j < m; j++) {
            weights[j] += lr * gradients[j] / n;
        }

        bias += lr * bias_grad / n;

        if (epoch % 100 == 0) {
            double loss = 0.0;
            for (int i = 0; i < n; i++) {
                double z = bias;
                for (int j = 0; j < m; j++) {
                    z += x[i][j] * weights[j];
                }
                double pred = sigmoid(z);
                loss += -(y[i] * log(pred + 1e-9) +
                          (1 - y[i]) * log(1 - pred + 1e-9));
            }
            cout << "Epoch " << epoch << " - Loss: " << loss / n << endl;
        }
    }
}

void preTraining(
    vector<pair<string, double>> data,
    vector<string> vocab,
    vector<vector<double>>& x,
    vector<double>& y
) {
    for (auto& d : data) {
        vector<double> vec(vocab.size(), 0.0);
        stringstream ss(d.first);

        string word;
        while (ss >> word) {
            for (int i = 0; i < vocab.size(); i++) {
                if (word == vocab[i]) vec[i] += 1.0;
            }
        }

        x.push_back(vec);
        y.push_back(d.second);
    }
}

int predict(vector<double> x, vector<double> weights, double bias) {
    double z = bias;
    for (int i = 0; i < x.size(); i++) {
        z += x[i] * weights[i];
    }

    double pred = sigmoid(z);
    return pred >= 0.5 ? 1 : 0;
}

int main() {
    // Vocabulary sederhana
    vector<string> vocab = {
        "pulsa", "beli", "data", "mau", "giga", "kuota",
        "kuotanya", "berapa", "coy", "mas"
    };

    // Data training (kalimat, label)
    vector<pair<string, double>> data = {
        {"mau beli pulsa", 1},
        {"mau beli data", 1},
        {"beli data mas", 1},
        {"ada data berapa giga", 1},
        {"bagi kuota dong", 0},
        {"minta kuotanya dong", 0},
        {"minta pulsa dong", 0},
        {"beli pulsa 5 ribu mas", 1},
        {"mau pulsa coy", 0},
        {"ada kuota berapa giga mas", 1}
    };

    vector<vector<double>> x;
    vector<double> y;

    preTraining(data, vocab, x, y);

    vector<double> weights(vocab.size(), 0.0);
    double bias = 0.0;

    trainModel(x, y, weights, bias, 0.1, 1000);

    cout << endl;

    vector<string> inputs = {
        "pakde, beli kuota 10 giga",
        "bagi kuotanya dong mas"
    };

    for (auto& input : inputs) {
        vector<double> test(vocab.size(), 0.0);

        stringstream ss(input);
        string word;
        while (ss >> word) {
            for (int i = 0; i < vocab.size(); i++) {
                if (word == vocab[i]) test[i] += 1.0;
            }
        }

        int result = predict(test, weights, bias);
        cout << "Kalimat: " << input
             << " -> Prediksi kelas (1 = beli, 0 = malak): "
             << result << endl;
    }

    return 0;
}
`
</script>


