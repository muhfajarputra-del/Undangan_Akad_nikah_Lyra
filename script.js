const cover = document.querySelector('#cover');
const openInvitation = document.querySelector('#openInvitation');
const menuToggle = document.querySelector('#menuToggle');
const navLinks = document.querySelector('.nav-links');

document.body.classList.add('locked');
openInvitation.addEventListener('click', () => {
  cover.classList.add('is-hidden');
  document.body.classList.remove('locked');
});

menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const galleryImages = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=85'
];
const galleryImage = document.querySelector('#galleryImage');
const galleryCount = document.querySelector('#galleryCount');
const galleryDots = document.querySelector('#galleryDots');
let currentImage = 0;

galleryImages.forEach((image, index) => {
  const dot = document.createElement('button');
  dot.className = `dot${index === 0 ? ' active' : ''}`;
  dot.type = 'button';
  dot.setAttribute('aria-label', `Tampilkan gambar ${index + 1}`);
  dot.addEventListener('click', () => showImage(index));
  galleryDots.appendChild(dot);
});

function showImage(index) {
  currentImage = (index + galleryImages.length) % galleryImages.length;
  galleryImage.classList.add('fade');
  setTimeout(() => {
    galleryImage.src = galleryImages[currentImage];
    galleryCount.textContent = String(currentImage + 1).padStart(2, '0');
    galleryImage.classList.remove('fade');
  }, 180);
  document.querySelectorAll('.dot').forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === currentImage));
}

document.querySelector('#prevImage').addEventListener('click', () => showImage(currentImage - 1));
document.querySelector('#nextImage').addEventListener('click', () => showImage(currentImage + 1));
setInterval(() => showImage(currentImage + 1), 5000);

document.querySelector('#rsvpForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#guestName').value.trim();
  const attendance = document.querySelector('#attendance').value;
  document.querySelector('#formMessage').textContent = `Terima kasih, ${name}! Konfirmasi “${attendance}” sudah diterima. ♡`;
  event.target.reset();
});

document.querySelector('#musicButton').addEventListener('click', (event) => {
  event.currentTarget.textContent = event.currentTarget.textContent === '♪' ? '♫' : '♪';
  event.currentTarget.setAttribute('aria-label', 'Musik dekorasi belum disetel');
});
