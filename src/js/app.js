// eslint-disable-next-line no-unused-vars
/* global isWindowLoaded, transTime, loadCSS, _cb, _delay, attach, show, hide, _detach, _show, _hide, initGround */

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

const $groundDet = document.querySelector('#playground-det');
const $ground = document.querySelector('#playground');

// const showPreloader = cb => attach($pl, _show($plBrand, _show($plLoader, cb)));
const hidePreloader = cb => {
    hide($plLoader);
    _delay(_hide($plBrand, _detach($pl, cb)), 1000)();
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
const hideAppIntro = cb => hide($playBtn, _hide($name, _detach($intro, cb)));

const showPlayground = cb => attach($groundDet, _show($ground, cb));

window.addEventListener('load', () => {
    _cb(
        _delay([loadCSS, ['./css/app.css', './css/playground.css']]),
        // eslint-disable-next-line no-global-assign
        cb => (isWindowLoaded = true) && cb && cb(),
        hidePreloader,
        showApp,
        showAppIntro
    )();
});

$playBtn.addEventListener(
    'click',
    _cb(hideAppIntro, showPlayground, initGround)
);
