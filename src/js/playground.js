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
let snake = {};

// ========================
// grid

grid.cellSize = 25;
grid.cellMargin = 2;
grid.maxCells = null;
grid.margin = null;

// ========================
// snake

snake.minSpeed = 2;
snake.maxSpeed = snake.minSpeed * 10;
snake.boostingEnergy = 2;
snake.life = 3;

snake.subreset = () => {
    snake.speed = snake.minSpeed;
    snake.nextDirection = { x: 1, y: 0 };
    snake.direction = { ...snake.nextDirection };
    snake.energy = 0;
    snake.array = [
        { x: 2, y: 2 },
        { x: 3, y: 2 },
        { x: 4, y: 2 },
    ];
};

snake.reset = () => {
    snake.subreset();
    snake.life = 3;

    for (let i = 0; i < snake.life; i++) {
        $lifeBox.innerHTML += '<img src="./img/heart.svg" />';
    }
};

snake.reset();

snake.head = () => snake.array[snake.array.length - 1];

snake.inArray = ({ x, y }, leaveHead = false) => {
    for (let i = 0; i < snake.array.length - +leaveHead; i++) {
        if (x == snake.array[i].x && y == snake.array[i].y) {
            return true;
        }
    }

    return false;
};

snake.move = () => {
    snake.direction = { ...snake.nextDirection };

    let newHead = {
        x: snake.head().x + snake.direction.x,
        y: snake.head().y + snake.direction.y,
    };

    // remove tail block
    snake.array.shift();

    let crashed = newHead.x < 0;
    crashed = crashed || newHead.x > grid.maxCells.x;
    crashed = crashed || newHead.y < 0;
    crashed = crashed || newHead.y > grid.maxCells.y;
    crashed = crashed || snake.inArray(newHead, true);

    if (crashed) {
        return false;
    }

    // add head block
    snake.array.push(newHead);

    return true;
};

snake.moveUp = () => {
    snake.nextDirection.x = 0;
    snake.nextDirection.y = snake.direction.y || -1;
};

snake.moveDown = () => {
    snake.nextDirection.x = 0;
    snake.nextDirection.y = snake.direction.y || 1;
};

snake.moveLeft = () => {
    snake.nextDirection.x = snake.direction.x || -1;
    snake.nextDirection.y = 0;
};

snake.moveRight = () => {
    snake.nextDirection.x = snake.direction.x || 1;
    snake.nextDirection.y = 0;
};

snake.grow = () => {
    snake.energy++;
    snake.array.unshift(snake.array[0]);
};

snake.injure = () => {
    snake.life--;
    $lifeBox.find('img:last-child').remove();
};

snake.draw = () => {
    context.save();

    context.fillStyle = '#fff';
    context.shadowBlur = 10;
    context.shadowColor = '#fff5';

    let size = grid.cellSize - grid.cellMargin * 2;

    snake.array.forEach(({ x, y }) => {
        x = x * grid.cellSize + grid.cellMargin + grid.margin.x;
        y = y * grid.cellSize + grid.cellMargin + grid.margin.y;

        context.beginPath();
        context.fillRect(x, y, size, size);
    });

    context.restore();
};

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

    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowUp') {
            snake.moveUp();
        } else if (e.key === 'ArrowDown') {
            snake.moveDown();
        } else if (e.key === 'ArrowLeft') {
            snake.moveLeft();
        } else if (e.key === 'ArrowRight') {
            snake.moveRight();
        }
    });

    setTimeout(() => {
        attach($msgBox);
        show($msgWrp);
    }, transTime);
};
