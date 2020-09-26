/* global transTime, loadCSS, _cb, _delay, attach, show, hide, _detach, _show */

const $pl = document.querySelector('#preloader');
const $plBrand = document.querySelector('#preloader .brand-cont');
const $plLoader = document.querySelector('#preloader .loader');

const $app = document.querySelector('#app');

const $intro = document.querySelector('#app-intro');
const $name = document.querySelector('#app-name');
const $playBtn = document.querySelector('#play-btn');

const $footerBrand = document.querySelector('#app-footer .brand-cont');
const $footerBtns = [].slice.call(
    document.querySelectorAll('#app-footer .social-links a')
);

// const showPreloader = cb => attach($pl, _show($plBrand, _show($plLoader, cb)));
const hidePreloader = cb => {
    hide($plBrand);
    hide($plLoader, _detach($pl, cb));
};

const showApp = cb => {
    attach($app);
    show($footerBrand);

    $footerBtns.forEach((btn, idx) => {
        setTimeout(_show(btn), transTime * (idx + 1));
    });

    setTimeout(cb, transTime * ($footerBtns.length + 1));
};

const showAppIntro = cb => attach($intro, _show($name, _show($playBtn, cb)));

window.addEventListener('load', () => {
    _cb(
        _delay([loadCSS, ['./css/app.css']]),
        _delay(hidePreloader, 1000),
        showApp,
        showAppIntro
    )();
});
