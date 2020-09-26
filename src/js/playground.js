/* global transTime, attach, show */
/* eslint-disable no-unused-vars */

// ========================
// globals

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let $scoreBox = document.querySelector('#playground-header .score span');
let $lifeBox = document.querySelector('#playground-header .life');
let $msgBox = document.querySelector('#playground-body .message');
let $msgWrp = document.querySelector('#playground-body .message span');

let initGround = () => {
    canvas.width = +getComputedStyle(canvas).width.replace('px', '');
    canvas.height = +getComputedStyle(canvas).height.replace('px', '');
    canvas.style.width = 'unset';
    canvas.style.height = 'unset';

    setTimeout(() => {
        attach($msgBox);
        show($msgWrp);
    }, transTime);
};
