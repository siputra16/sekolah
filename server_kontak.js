const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/kontak', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Semua field harus diisi.' });
  }

  // Simpan pesan ke database atau kirim email
  // Contoh ini hanya mengembalikan respons sukses

  res.status(200).json({ message: 'Pesan berhasil dikirim!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
