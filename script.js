// Interaksi sederhana untuk form kontak
const contactForm = document.getElementById('contactForm');
const formAlert = document.getElementById('formAlert');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    formAlert.style.display = 'block';
    formAlert.className = 'alert alert-success';
    formAlert.textContent = 'Terima kasih, pesan Anda telah terkirim!';
    contactForm.reset();
    setTimeout(() => {
      formAlert.style.display = 'none';
    }, 4000);
  });
}
