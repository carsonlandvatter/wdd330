import createHamburgerMenu from "./scripts/ham-menu.mjs";

createHamburgerMenu();

fetch ("https://api.pexels.com/v1/search?query=snowboarding&per_page=8", {
  headers
})