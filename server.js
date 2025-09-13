// Sesi praktikum
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3300;
// let idSeq = 4;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/status', (req, res) => {
    res.json({
        ok: true,
        service: 'ulasan-api-film',
        time: new Date().toISOString()
    });
});

// // Middleware fallback untuk menangani rute 404NotFound
// app.use((req, res) => {
//     res.status(404).json({ error: 'Rute tidak ditemukan' });
// });

// Start server
app.listen(port, () => {
    console.log(`Server Running on localhost:  ${port}`);
});


//dummy data
app.get('/', (req, res) => {
    res.send('Selamat Datang di Server Node.js Tahap awal, Terimakasih');
});

// Implementasi Operasi Baca
// Daftar film awal
let reviews = [
    {id: 1, film_id: '578ae244-7750-4d9f-867b-f3cd3d6fecf4', user: 'Firman', rating: 10, comment: 'Ini adalah film terbaik'}, // The Tale of the Princess Kaguya
    {id: 2, film_id: '578ae244-7750-4d9f-867b-f3cd3d6fecf4', user: 'Virdan', rating: 9, comment: 'Ini adalah film terseru'}, // The Tale of the Princess Kaguya
    {id: 3, film_id: '86e544fd-79de-4e04-be62-5be67d8dd92e', user: 'Nuris', rating: 8, comment: 'Ini adalah film terlucu'}, // Nausicaä of the Valley of the Wind
];
// console.log(movies);

// Mengembalikan daftar semua film
app.get('/reviews', (req, res) => {
    res.json(reviews);
});

// Mengembalikan detail satu film berdasarkan id
app.get('/reviews/:id', (req, res) => {
    const id = Number(req.params.id);
    const review = reviews.find(m => m.id === parseInt(req.params.id));
    if (review) {
        res.json(review);
    } else {
        res.status(404).send('Review not found');
    }
});


// Implementasi Operasi Tulis (CRUD)

// Membuat film baru
app.post('/reviews', (req, res) => {
    const {film_id, user, rating, comment} = req.body || {};
    if(!film_id || !user || !rating || !comment) {
        returnres.status(400).json({error:'film_id, user, rating, comment wajib di isi'});
    }
    const newReview = {id: reviews.length + 1, film_id, user, rating, comment};
    reviews.push(newReview);
    res.status(201).json(newReview);
});

// Memperbarui data film berdasarkan id
app.put('/reviews/:id', (req, res) => {
    const id = Number(req.params.id);
    const reviewIndex = reviews.findIndex(m => m.id === id);
    if (reviewIndex === -1) {
        returnres.status(404).json({error: 'Review tidak ditemukan'});
    }
    const {film_id, user, rating, comment} = req.body || {};
    const updatedReview = {id, film_id, user, rating, comment};
    reviews[reviewIndex] = updatedReview;
    res.json(updatedReview);
});

// Menghapus film berdasarkan id
app.delete('/reviews/:id', (req, res) => {
    const id = Number(req.params.id);
    const reviewIndex = reviews.findIndex(m => m.id === id);
    if (reviewIndex === -1) {
        returnres.status(404).json({error: 'Review tidak ditemukan'});
    }
    reviews.splice(reviewIndex, 1);
    res.status(204).send();
});
