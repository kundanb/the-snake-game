/* eslint-disable no-unused-vars */

// transition and delay timings
const transTime = 200;
const delayTime = 400;

// loaded
let isWindowLoaded = false;

// returns function with callback series caller
const _cb = (...funcs) => {
    funcs = funcs.filter(func => !!func);

    let startFunc;

    for (let i = funcs.length - 1; i >= 0; i--) {
        let [func, ...funcArgs] =
            funcs[i] instanceof Array ? funcs[i] : [funcs[i]];

        funcArgs = [...funcArgs, startFunc];
        startFunc = () => func(...funcArgs);
    }

    return startFunc;
};

// returns function with delay caller
const _delay = (func, time) => {
    let funcArgs;
    [func, ...funcArgs] = func instanceof Array ? func : [func];
    return cb => setTimeout(() => func(...funcArgs, cb), time ?? delayTime);
};

// load css

const loadCSS = (urls = [], cb) => {
    let count = 0;

    urls.forEach(url => {
        let file = document.createElement('link');
        file.rel = 'stylesheet';
        file.href = url;
        file.onload = () => ++count === urls.length && cb && cb();

        document.head.appendChild(file);
    });
};

// transition handlers
// ========================

const attach = (elem, cb) => {
    elem.classList.remove('det_d');
    cb && cb();
};

const detach = (elem, cb) => {
    elem.classList.add('det_d');
    cb && cb();
};

const show = (elem, cb) => {
    elem.classList.remove('hid');
    setTimeout(cb, transTime);
};

const hide = (elem, cb) => {
    elem.classList.add('hid');
    setTimeout(cb, transTime);
};

// HOFs

const _attach = (elem, cb) => () => attach(elem, cb);
const _detach = (elem, cb) => () => detach(elem, cb);
const _show = (elem, cb) => () => show(elem, cb);
const _hide = (elem, cb) => () => hide(elem, cb);
