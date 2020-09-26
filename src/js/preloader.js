/* global loadCSS, isWindowLoaded, show */

loadCSS([
    'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap',
]);

setTimeout(() => {
    isWindowLoaded || show(document.querySelector('#preloader .loader'));
}, 500);
