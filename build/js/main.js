"use strict";function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function _toArray(r){return _arrayWithHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,t){if(r){if("string"==typeof r)return _arrayLikeToArray(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(r,t):void 0}}function _arrayLikeToArray(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function _iterableToArray(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function _arrayWithHoles(r){if(Array.isArray(r))return r}var transTime=200,delayTime=400,isWindowLoaded=!1,_cb=function(){for(var a,r=arguments.length,o=new Array(r),t=0;t<r;t++)o[t]=arguments[t];for(var e=(o=o.filter(function(r){return!!r})).length-1;0<=e;e--)!function(r){var t=_toArray(o[r]instanceof Array?o[r]:[o[r]]),e=t[0],n=t.slice(1),n=[].concat(_toConsumableArray(n),[a]);a=function(){return e.apply(void 0,_toConsumableArray(n))}}(e);return a},_delay=function(t,e){var n,r=_toArray(t instanceof Array?t:[t]);return t=r[0],n=r.slice(1),function(r){return setTimeout(function(){return t.apply(void 0,_toConsumableArray(n).concat([r]))},null!=e?e:delayTime)}},loadCSS=function(r,t){var e=0<arguments.length&&void 0!==r?r:[],n=1<arguments.length?t:void 0,a=0;e.forEach(function(r){var t=document.createElement("link");t.rel="stylesheet",t.href=r,t.onload=function(){return++a===e.length&&n&&n()},document.head.appendChild(t)})},attach=function(r,t){r.classList.remove("det_d"),t&&t()},detach=function(r,t){r.classList.add("det_d"),t&&t()},show=function(r,t){r.classList.remove("hid"),setTimeout(t,transTime)},hide=function(r,t){r.classList.add("hid"),setTimeout(t,transTime)},_attach=function(r,t){return function(){return attach(r,t)}},_detach=function(r,t){return function(){return detach(r,t)}},_show=function(r,t){return function(){return show(r,t)}},_hide=function(r,t){return function(){return hide(r,t)}};