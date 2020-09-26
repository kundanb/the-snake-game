"use strict";function ownKeys(n,e){var r,t=Object.keys(n);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(n),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,r)),t}function _objectSpread(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(r),!0).forEach(function(e){_defineProperty(n,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))})}return n}function _defineProperty(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var canvas=document.getElementById("canvas"),context=canvas.getContext("2d"),$scoreBox=document.querySelector("#playground-header .score span"),$lifeBox=document.querySelector("#playground-header .life"),$msgBox=document.querySelector("#playground-body .message"),$msgWrp=document.querySelector("#playground-body .message span"),grid={},snake={};grid.cellSize=25,grid.cellMargin=2,grid.maxCells=null,grid.margin=null,snake.minSpeed=2,snake.maxSpeed=10*snake.minSpeed,snake.boostingEnergy=2,snake.life=3,snake.subreset=function(){snake.speed=snake.minSpeed,snake.nextDirection={x:1,y:0},snake.direction=_objectSpread({},snake.nextDirection),snake.energy=0,snake.array=[{x:2,y:2},{x:3,y:2},{x:4,y:2}]},snake.reset=function(){snake.subreset(),snake.life=3;for(var e=0;e<snake.life;e++)$lifeBox.innerHTML+='<img src="./img/heart.svg" />'},snake.reset(),snake.head=function(){return snake.array[snake.array.length-1]},snake.inArray=function(e){for(var n=e.x,r=e.y,t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],a=0;a<snake.array.length-t;a++)if(n==snake.array[a].x&&r==snake.array[a].y)return!0;return!1},snake.move=function(){snake.direction=_objectSpread({},snake.nextDirection);var e={x:snake.head().x+snake.direction.x,y:snake.head().y+snake.direction.y};snake.array.shift();var n=e.x<0;return!(n=(n=(n=(n=n||e.x>grid.maxCells.x)||e.y<0)||e.y>grid.maxCells.y)||snake.inArray(e,!0))&&(snake.array.push(e),!0)},snake.moveUp=function(){snake.nextDirection.x=0,snake.nextDirection.y=snake.direction.y||-1},snake.moveDown=function(){snake.nextDirection.x=0,snake.nextDirection.y=snake.direction.y||1},snake.moveLeft=function(){snake.nextDirection.x=snake.direction.x||-1,snake.nextDirection.y=0},snake.moveRight=function(){snake.nextDirection.x=snake.direction.x||1,snake.nextDirection.y=0},snake.grow=function(){snake.energy++,snake.array.unshift(snake.array[0])},snake.injure=function(){snake.life--,$lifeBox.find("img:last-child").remove()},snake.draw=function(){context.save(),context.fillStyle="#fff",context.shadowBlur=10,context.shadowColor="#fff5";var t=grid.cellSize-2*grid.cellMargin;snake.array.forEach(function(e){var n=e.x,r=e.y,n=n*grid.cellSize+grid.cellMargin+grid.margin.x,r=r*grid.cellSize+grid.cellMargin+grid.margin.y;context.beginPath(),context.fillRect(n,r,t,t)}),context.restore()};var initGround=function(){canvas.width=+getComputedStyle(canvas).width.replace("px",""),canvas.height=+getComputedStyle(canvas).height.replace("px",""),canvas.style.width="unset",canvas.style.height="unset",grid.maxCells={x:parseInt(canvas.width/grid.cellSize)-1,y:parseInt(canvas.height/grid.cellSize)-1},grid.margin={x:(canvas.width-grid.cellSize*(grid.maxCells.x+1))/2,y:(canvas.height-grid.cellSize*(grid.maxCells.y+1))/2},document.addEventListener("keydown",function(e){"ArrowUp"===e.key?snake.moveUp():"ArrowDown"===e.key?snake.moveDown():"ArrowLeft"===e.key?snake.moveLeft():"ArrowRight"===e.key&&snake.moveRight()}),setTimeout(function(){attach($msgBox),show($msgWrp)},transTime)};