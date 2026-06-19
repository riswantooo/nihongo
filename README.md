# 🇯🇵 Aplikasi Belajar Bahasa Jepang (Minna no Nihongo & JLPT)

Aplikasi pembelajaran Bahasa Jepang interaktif yang dirancang untuk membimbing Anda belajar dari tingkat paling dasar (Hiragana & Katakana) hingga tingkat menengah (JLPT N5 & N4) menggunakan kurikulum terstruktur **Minna no Nihongo** (Bab 1-50) serta dilengkapi dengan metode latihan modern.

---

## Fitur Utama

### 1. Roadmap Terstruktur (Minna no Nihongo)
*   **Tahap Dasar (Kana)**: Belajar Hiragana dan Katakana dilengkapi dengan Ujian Kana untuk menguji daya ingat. Ujian Kana dengan nilai $\ge 80$ diperlukan untuk membuka akses ke Bab N5.
*   **JLPT N5 (Bab 1 - 25 Minna no Nihongo I)**: Pembelajaran Kanji dasar, Kosakata, dan Tata Bahasa.
*   **JLPT N4 (Bab 26 - 50 Minna no Nihongo II)**: Pembelajaran Kanji lanjutan, Kosakata, dan Tata Bahasa tingkat menengah-bawah.
*   **Dokkai & Choukai Quiz**: Latihan pemahaman membaca (*Dokkai*) dan mendengarkan (*Choukai*) untuk setiap bab.

### 2. Training Ground (Pusat Latihan Refleks)
*   **Particle Dojo**: Latihan interaktif untuk mengasah insting penempatan 12 partikel dasar Jepang (seperti は, が, に, を, で, dll.) pada puluhan kalimat acak.
*   **Conjugation Gym**: Pembentukan refleks cepat untuk menguasai konjugasi lebih dari 80 kata kerja Jepang (seperti Bentuk Te, Ta, Nai, Kamus, Pasif, dll.).
*   **Contextual Synonyms**: Latihan mencocokkan sinonim kosakata berdasarkan konteks kalimat yang diberikan.

### 3. Sistem Memori & Evaluasi
*   **SRS Review Mode (Spaced Repetition System)**: Algoritma pengulangan terjadwal untuk membantu Anda mengingat kosakata dan kanji secara permanen dalam memori jangka panjang.
*   **JLPT Mini Test**: Simulasi tes mini JLPT untuk menguji kesiapan Anda sebelum menghadapi ujian yang sesungguhnya.
*   **Flashcards**: Kartu memori interaktif untuk menghafal huruf, kanji, dan kosakata.
*   **Voice Typist**: Latihan mengetik dan pengenalan suara bahasa Jepang untuk melatih pelafalan (*speaking*).

### 4. Progress Dashboard
*   Dashboard visual untuk melihat statistik performa belajar Anda, skor kuis, dan persentase penyelesaian modul belajar.

---

## Tech Stack

Aplikasi ini dibangun menggunakan teknologi web modern:
*   **Framework**: [React](https://react.dev/) (v19)
*   **Build Tool**: [Vite](https://vite.dev/)
*   **Routing**: [React Router DOM](https://reactrouter.com/) (v7)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Styling**: Vanilla CSS dengan desain **Glassmorphism**, tata letak **Bento Grid**, serta tampilan responsif (mobile-friendly).

---

## Struktur Folder Proyek

```text
├── public/                 # Aset statis (gambar, audio choukai)
├── scripts/                # Script Node.js untuk seeding, import, dan manipulasi data kosakata/kanji
├── src/
│   ├── assets/             # Aset gambar & stylesheet global
│   ├── components/         # Komponen UI reusable (Navigation, Flashcard, dll.)
│   ├── context/            # State global React (ProgressContext, dll.)
│   ├── data/               # Data JSON mentah (Kosakata, Kanji, Partikel, Ujian)
│   ├── pages/              # Halaman-halaman fitur aplikasi (Home, Dojo, Gym, dll.)
│   ├── utils/              # Helper functions (manajer SRS, pemrosesan teks, dll.)
│   ├── App.jsx             # Router utama aplikasi
│   ├── index.css           # Desain sistem dan styling kustom aplikasi
│   └── main.jsx            # Entry point aplikasi React
├── .gitignore              # Konfigurasi file yang diabaikan Git
├── package.json            # Daftar dependency dan script npm
└── vite.config.js          # Konfigurasi bundler Vite
```

---

## Cara Menjalankan Proyek di Lokal

### Prasyarat
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) di perangkat Anda.

### Langkah-langkah
1.  **Clone Repositori**:
    ```bash
    git clone <url-repositori-anda>
    cd <nama-folder-repositori>
    ```

2.  **Instal Dependency**:
    ```bash
    npm install
    ```

3.  **Jalankan Server Development**:
    ```bash
    npm run dev
    ```
    Aplikasi akan berjalan di alamat `http://localhost:5173`.

4.  **Build untuk Produksi**:
    ```bash
    npm run build
    ```
    Hasil build siap dideploy akan berada di folder `/dist`.
