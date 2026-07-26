// utils/ibg.js
export function ibg() {
    document.querySelectorAll('.ibg').forEach((el) => {
        const img = el.querySelector('img');
        if (img) {
            el.style.backgroundImage = `url("${img.getAttribute('src')}")`;
        }
    });
}