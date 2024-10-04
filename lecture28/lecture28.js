const toggleButton = document.getElementById('toggleButton');
const toggleImage = document.getElementById('toggleImage');

const images = [
    'images/cute-zodiac-cakes-y2k-style-600nw-2456538021.webp', 
    'images/ok.jpeg'
];
let currentImageIndex = 0;

toggleButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    toggleImage.src = images[currentImageIndex];
});
