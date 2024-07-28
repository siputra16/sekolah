document.getElementById('contactForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const response = await fetch('http://localhost:3000/kontak', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message }),
  });

  const result = await response.json();

  const formMessage = document.getElementById('form-message');
  if (response.ok) {
    formMessage.style.color = 'green';
    formMessage.textContent = 'Pesan berhasil dikirim!';
  } else {
    formMessage.style.color = 'red';
    formMessage.textContent = result.message || 'Terjadi kesalahan. Silakan coba lagi.';
  }
});
