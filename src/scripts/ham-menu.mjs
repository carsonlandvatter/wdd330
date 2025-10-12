export default function createHamburgerMenu() {
    const hamButton = document.querySelector(".ham-btn")
    const navigation = document.querySelector(".navigation")

    hamButton.addEventListener("click", () => {
        hamButton.classList.toggle("active")
        navigation.classList.toggle("show")
    })
}