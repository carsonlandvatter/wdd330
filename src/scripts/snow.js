const snowBtn = document.getElementById('snowBtn');
const snowContainer = document.querySelector('.snow');

export default function displaySnow() {
    snowBtn.addEventListener('click', () => {
        snowContainer.classList.toggle('snow-falling')
    })
}