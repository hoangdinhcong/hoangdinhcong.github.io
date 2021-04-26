const ageElement = document.querySelector('.age');
const copyRightElement = document.querySelector('.copy-right');

if (ageElement) {
    const currentYear = new Date().getFullYear();
    ageElement.textContent = currentYear - 1994;
}

if (copyRightElement) {
    copyRightElement.textContent = new Date().getFullYear();
}
