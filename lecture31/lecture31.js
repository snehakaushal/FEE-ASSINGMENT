const form = document.getElementById('myForm');
const textInput = document.getElementById('textInput');

form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const inputData = textInput.value; 
    console.log('Form has been submitted! Input Data:', inputData);
});
