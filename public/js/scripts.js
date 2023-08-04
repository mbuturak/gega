let sunIcon = document.querySelector('#sun');
let moonIcon = document.querySelector('#moon');
let body = document.querySelector('body');

sunIcon.addEventListener('click', () => {
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
    body.classList.remove('dark');
})


moonIcon.addEventListener('click', () => {
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
    body.classList.add('dark');
})