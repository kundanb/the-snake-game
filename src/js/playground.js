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

let grid = {};

// ========================
// grid

grid.cellSize = 25;
grid.cellMargin = 2;
grid.maxCells = null;
grid.margin = null;

// ========================
// setup

let initGround = () => {
    canvas.width = +getComputedStyle(canvas).width.replace('px', '');
    canvas.height = +getComputedStyle(canvas).height.replace('px', '');
    canvas.style.width = 'unset';
    canvas.style.height = 'unset';

    grid.maxCells = {
        x: parseInt(canvas.width / grid.cellSize) - 1,
        y: parseInt(canvas.height / grid.cellSize) - 1,
    };

    grid.margin = {
        x: (canvas.width - grid.cellSize * (grid.maxCells.x + 1)) / 2,
        y: (canvas.height - grid.cellSize * (grid.maxCells.y + 1)) / 2,
    };

    setTimeout(() => {
        attach($msgBox);
        show($msgWrp);
    }, transTime);
};
