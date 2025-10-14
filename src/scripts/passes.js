const addSeasonPass = document.querySelector('#addSeasonPass');
const addDayPass = document.querySelector('#addDayPass');
const addNightPass = document.querySelector('#addNightPass')
const cart = document.getElementById('cart');

export default function addToCart() {
    if (addDayPass, addSeasonPass) {
    addSeasonPass.addEventListener('click', () => {
        localStorage.setItem("seasonPass", "Season Pass - $1000");
    })

    addDayPass.addEventListener('click', () => {
        localStorage.setItem("dayPass", "Day Pass - $80")

    })

    addNightPass.addEventListener('click', () => {
        localStorage.setItem("nightPass", "Night pass - $60")
    })
    }
    if (cart) {
    const seasonPass = localStorage.getItem("seasonPass");
    const dayPass = localStorage.getItem("dayPass");
    const nightPass = localStorage.getItem("nightPass")
    const totalPasses = []

    if (dayPass) totalPasses.push(dayPass);
    if (nightPass) totalPasses.push(nightPass);
    if (seasonPass) totalPasses.push(seasonPass);
    console.log(totalPasses);

    totalPasses.forEach(pass => {
        const p = document.createElement('p');
        p.textContent = `${pass}`
        cart.appendChild(p);
    })

    const emptyCart = document.getElementById('empty')

    emptyCart.addEventListener('click', () => {
        localStorage.clear();
        cart.innerHTML = '';
    })
    }
}
