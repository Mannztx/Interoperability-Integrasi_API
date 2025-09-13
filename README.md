# Proyek API Ulasan Film - Kelompok 4

## Anggota Kelompok
- Firman Ardiansyah (362458302101)
- Virdan Andi Wardana (362458302039)
- Moh. Nuris Gustian Arrafi (362458302040)

## Deskripsi Proyek
API ini adalah layanan internal untuk mengelola ulasan film dari Studio Ghibli,
dengan data film yang direferensikan dari Ghibli API publik, kemudian diperkaya dengan data ulasan buatan (CRUD).
Tujuan proyek ini adalah memberikan contoh integrasi API eksternal dengan layanan,
serta menampilkan informasi restful API dengan express.js.

Fitur Utama API:
- Menyediakan endpoint untuk membuat, membaca, memperbarui, dan menghapus ulasan (POST, GET, PUT, DELETE).
- Menggunakan ekspress.js sebagai framework server.
- Mendukung cors agar dapat diakses dari aplikasi frontend. 

## Cara Menjalankan Proyek
1. Masuk ke folder proyek (Integrasi_API)
Pastikan sudah berada pada direktori/folder tempat proyek yang akan disimpan.
2. Clone repository: "git clone https://github.com/Mannztx/Interoperability-Integrasi_API.git"
Jalankan perintah tersebut untuk menyalin kode proyek ke komputer lokal.
3. Masuk ke direktori: "cd Interoperability-Integrasi_API"
Setelah berhasil di clone masuk ke folder hasil clone dengan menjalankan perintah tersebut.
4. Install dependensi: "npm install express cors", "npm install nodemon" agar auto update,
Proyek membutuhkan beberapa package agar dapat dijalankan. Express adalah framework untuk membuat server, Cors digunakan untuk memberi izin akses dari aplikasi frontend.
5. Jalankan server: "node server.js" atau "nodemon server.js" lebih direkomendasikan menggunakan nodemon karena server akan auto restart saat ada perubahan kode. 
Jika berhasil, server akan berjalan di "http://localhost:3300".
6. Buka URL tersebut di browser atau gunakan tools seperti postman untuk menguji endpoint.
7. Pastikan server aktif dengan mengakses endpoint GET /status.

## Daftar Endpoint
- "GET /status": Mengecek status API (apakah sudah berhasil berjalan dengan benar).
![](image/get-status.png)
- "GET reviews": Mengambil semua ulasan film.
![](image/get-reviews.png)
- "GET /reviews/:id": Mengambil ulasan film tertentu berdasarkan ID.
![](image/get-reviews-id.png)
- "POST reviews": Membuat ulasan film baru.
![](image/post-reviews.png)
- "PUT /reviews/:id": Memperbarui ulasan film tertentu berdasarkan ID.
![](image/put-reviews.png)
- "DELETE /reviews:id": Menghapus ulasan film tertentu berdasarkan ID.
![](image/delete-reviews.png)
- "GET /reviews" after POST, PUT, dan DELETE.
![](image/get-reviews-after-post-dan-put.png)
(setelah penghapusan data ulasan dengan ID 4)
![](image/get-reviews-after-delete.png)

## Tabel Checklist Pengujian
![](image/tabel-checklist-pengujian.png)
Tabel tersebut berisi daftar skenario pengujian API beserta hasil pengujian untuk memastikan setiap endpoint berjalan sesuai ekspektasi/harapan.
