// mouse Events
const box = document.getElementById('myBox');

box.addEventListener('click', () => {
    console.log('Box clicked!');
});

box.addEventListener('mouseover', () => {
    box.style.transform = 'scale(1.1)';
    console.log('Mouse over the box!');
});

box.addEventListener('mouseout', () => {
    box.style.transform = 'scale(1)';
    console.log('Mouse left the box!');
});

// keyboard events
const inputField = document.getElementById('myInput');

inputField.addEventListener('keydown', (event) => {
    console.log(`Key down: ${event.key}`);
});

inputField.addEventListener('keyup', (event) => {
    console.log(`Key up: ${event.key}`);
});

// form events
const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    console.log('Form submitted!');
});

// window events
window.addEventListener('resize', () => {
    console.log('Window resized!');
});

// touch events
box.addEventListener('touchstart', () => {
    console.log('Touch started on box!');
});

box.addEventListener('touchend', () => {
    console.log('Touch ended on box!');
});

// clipboard events
inputField.addEventListener('copy', () => {
    console.log('Text copied to clipboard!');
});

inputField.addEventListener('paste', () => {
    console.log('Text pasted from clipboard!');
});

// media events
const video = document.getElementById('myVideo');

video.addEventListener('play', () => {
    console.log('Video is playing!');
});

video.addEventListener('pause', () => {
    console.log('Video is paused!');
});

// drag and drop events
box.setAttribute('draggable', 'true');

box.addEventListener('dragstart', () => {
    console.log('Drag started!');
});

box.addEventListener('dragend', () => {
    console.log('Drag ended!');
});

// custom events
const myCustomEvent = new CustomEvent('myCustomEvent', { detail: { message: 'Hello from custom event!' } });

box.addEventListener('myCustomEvent', (event) => {
    console.log(event.detail.message);
});

// dispatch the custom event
box.dispatchEvent(myCustomEvent);
