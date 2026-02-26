const addSeasonPass = document.querySelector('#addSeasonPass');
const addDayPass = document.querySelector('#addDayPass');
const addNightPass = document.querySelector('#addNightPass');
const cart = document.getElementById('cart');
const addSeasonMsg = document.getElementById('add-season-msg');
const addDayMsg = document.getElementById('add-day-msg');
const addNightMsg = document.getElementById('add-night-msg'); 
const purchaseBtn = document.getElementById('purchase');
const purchaseMsg = document.getElementById('purchase-msg');

export default function addToCart() {
    if (addDayPass, addSeasonPass) {
    addSeasonPass.addEventListener('click', () => {
        localStorage.setItem("seasonPass", "Season Pass - $1000");
        addSeasonMsg.textContent = "Item successfully added to cart."
    })

    addDayPass.addEventListener('click', () => {
        localStorage.setItem("dayPass", "Day Pass - $80");
        addDayMsg.textContent = "Item successfully added to cart."
    })

    addNightPass.addEventListener('click', () => {
        localStorage.setItem("nightPass", "Night pass - $60");
        addNightMsg.textContent = "Item successfully added to cart."
    })
    }

    if (cart) {
    const seasonPass = localStorage.getItem("seasonPass");
    const dayPass = localStorage.getItem("dayPass");
    const nightPass = localStorage.getItem("nightPass");
    let totalPasses = []

    if (dayPass) totalPasses.push(dayPass);
    if (nightPass) totalPasses.push(nightPass);
    if (seasonPass) totalPasses.push(seasonPass);

    totalPasses.forEach(pass => {
        const p = document.createElement('p');
        p.textContent = `${pass}`
        cart.appendChild(p);
    })

    const emptyCart = document.getElementById('empty')

    emptyCart.addEventListener('click', () => {
        localStorage.clear();
        totalPasses = [];
        cart.innerHTML = "";
        purchaseMsg.textContent = "";
    })

    purchaseBtn.addEventListener('click', () => {
        if (totalPasses.length > 0) {
            purchaseMsg.textContent = "Purchase successful!";
        }
    });
    }
}
