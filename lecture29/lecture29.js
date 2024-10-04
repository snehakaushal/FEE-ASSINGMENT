
const paragraph = document.getElementById('myParagraph');
const button = document.getElementById('toggleBtn');

button.addEventListener('click', () => {
   
    paragraph.classList.toggle('highlight');
});
