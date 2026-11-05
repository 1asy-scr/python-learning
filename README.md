# Python Learning Platform

Website pembelajaran Python untuk pemula. Website menggunakan HTML, CSS, JavaScript dan dapat dipublikasikan gratis melalui GitHub Pages. Kode Python dijalankan di Google Colab.

## 1. Pengaturan penting
Buka `assets/js/script.js`, lalu ubah:
```js
githubUsername: "USERNAME_GITHUB",
repository: "python-learning",
branch: "main"
```
Ganti `USERNAME_GITHUB` dengan username GitHub Anda. Jika nama repository atau branch berbeda, sesuaikan juga.

## 2. Upload ke GitHub
1. Buat repository baru bernama `python-learning`.
2. Unggah seluruh isi folder project ini ke repository (bukan folder pembungkusnya).
3. Pastikan file `index.html` berada di root repository.

## 3. Aktifkan GitHub Pages
1. Buka repository → Settings → Pages.
2. Pada bagian Build and deployment, pilih Deploy from a branch.
3. Pilih branch `main` dan folder `/ (root)`.
4. Klik Save dan tunggu proses publikasi selesai.
5. Website akan tersedia di `https://USERNAME_GITHUB.github.io/python-learning/`.

## 4. Menghubungkan Google Colab
Notebook sudah berada di folder `notebooks`. Tombol praktikum membentuk tautan Colab berdasarkan username, nama repository, branch, dan nama notebook.
Pengguna sebaiknya memilih File → Save a copy in Drive sebelum mengedit agar notebook asli di repository tidak berubah.

## 5. Menguji website
- Buka `index.html` secara lokal untuk memeriksa tampilan.
- Setelah upload, uji semua menu di website publik.
- Uji tombol notebook setelah repository tersedia di GitHub.
- Jika menggunakan nama branch selain `main`, perbarui konfigurasi JavaScript.

## Catatan
Website ini merupakan frontend statis. Kuis menghitung skor di browser dan tidak menyimpan identitas/nilai pengguna ke server. Untuk penyimpanan nilai, login, atau dashboard pengajar, dibutuhkan backend atau layanan tambahan.
