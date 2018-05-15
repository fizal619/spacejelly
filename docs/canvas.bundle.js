/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomIntFromRange = randomIntFromRange;

__webpack_require__(3);

var _spaceship = __webpack_require__(1);

var _spaceship2 = _interopRequireDefault(_spaceship);

var _star = __webpack_require__(2);

var _alien = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initial Setup
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

function canvasSize(canvas) {
  var x = void 0;
  if (innerHeight < innerWidth) {
    x = innerHeight;
    canvas.width = x;
    canvas.height = x;
  } else {
    x = innerWidth;
    canvas.width = x;
    canvas.height = x;
  }
  return canvas;
}

canvas = canvasSize(canvas);

// Variables
var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};

var colors = ['red', 'blue', 'yellow', 'green'];

// Event Listeners
// addEventListener('mousemove', event => {
//     mouse.x = event.clientX
//     mouse.y = event.clientY
// })

addEventListener('resize', function () {
  canvas = canvasSize(canvas);

  animate();
});

// Utility Functions
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

// Implementation
var player = void 0;
var stars = [];
var aliens = [];
var state = {
  player: {
    x: canvas.height / 2,
    y: canvas.width / 2
  }
};

addEventListener('keydown', function (e) {
  player.action(e, c);
});

function init() {
  for (var i = 0; i < 100; i++) {
    stars.push(new _star.Star(c));
  }
  for (var j = 0; j < 20; j++) {
    aliens.push(new _alien.Alien(c, randomColor(colors)));
  }
  player = new _spaceship2.default(randomColor(colors), c);
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update(c);
  }
  for (var _i = 0; _i < aliens.length; _i++) {
    aliens[_i].update(c);
  }
  player.update(c);
}

init();
animate();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utilities = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spaceship = function () {
  function Spaceship(color, ctx) {
    var _this = this;

    _classCallCheck(this, Spaceship);

    var oneUnit = (0, _utilities.oneUnitFromCanvas)(ctx.canvas);
    this.box = 12 * oneUnit.x;
    this.x = oneUnit.x * 94;
    this.y = oneUnit.y * 200 - (this.box + 10);
    this.image = new Image();
    this.image.src = colors[color];
    this.frame = 0;
    setInterval(function () {
      _this.frame++;
      if (_this.frame === 9) _this.frame = 0;
    }, 1000 / 12);
  }

  _createClass(Spaceship, [{
    key: 'draw',
    value: function draw(ctx) {
      ctx.drawImage(this.image, this.frame * 32, 0, 32, 32, this.x, this.y, this.box, this.box);
      console.log('canvas', this.x, this.y, 'units', (0, _utilities.XYCoordstoUnits)({ x: this.x, y: this.y }, ctx.canvas));
    }
  }, {
    key: 'action',
    value: function action(e, ctx) {
      var oneUnit = (0, _utilities.oneUnitFromCanvas)(ctx.canvas);
      var xUnitVelocity = oneUnit.x * 2;
      console.log(e.key);
      switch (e.key) {
        case 'ArrowRight':
          if (this.x + xUnitVelocity < ctx.canvas.width - (this.box + 1)) this.x += xUnitVelocity;
          break;
        case 'ArrowLeft':
          if (this.x - xUnitVelocity > 0) this.x -= xUnitVelocity;
          break;
      }
      this.update(ctx);
    }
  }, {
    key: 'update',
    value: function update(ctx) {
      this.draw(ctx);
    }
  }]);

  return Spaceship;
}();

exports.default = Spaceship;


var colors = {
  yellow: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAAgCAYAAACy9KU0AAAD30lEQVR4Xu2dwbXUMAxFE1YsOVRDAyzpgBIohxLogCUN/Go4LFkRjpPvfMexLcnWzBD+neVEtjLPT8+yrWTmaeyzPDefx7rpbo3/DTrw76bQUEP4N8i/UeIyAIMDMET/aQJ/8L/0BNQrQJH4efz09meNQ/yXEQN/K5P67OGfE/96Cbv8enp7uIV3H37fU4nxD/7wL0HgqvGHAHXOgAgwE1BKnasKQB/9J7cEYEiAnkGfQjA+YgDwv2ad4A//Lht/CFDfFLDOAAggAsgEMDYBIkAIUA8CCDATkMsEXBMg6XjXSkCpvzwIJHv82wJAwhP8jwhIeME/J/6VBCg/YizaGJYgmv7S4dfYWwig6Q//Lwho8AJ/fQBq8Hy1/CuKy7JsmM3zenlYgBT9HQZAYW8KAEV/+E8ESIEX+BsESIHnq+UfAnTeAVkUhCEACUDtHoiGTwhQgoAmZTQFYBbj0sY3/o+ADWeg4H9AAP61jx3uGn9Vcod7bNT2WAqRdltlrZDGHv/6SmgNnocZOBZZMv7V6n7458S/HgFaFbJSCVzaM/IOAPyDP/wrC8Dl4k9zCnZK2HLxiQaxME8oLLGmwPjPEAD/42Mg8G9D4Irxl4tBMbsQBEV9OQGoWX9UCzC1o4oh/rfK5cb7gxj/QnY5yruCQML/AhHV5KsprUY4GiKAfyX5wX8X0oM2wL9yZpiC9K/FX1RidfDHVC8eVe9T6jyf1uW1maMAAv6V4gP+21ID/h0Pq0LNnkaAs6Xaw+M/3IAp+D0CoLRe1YKH//EABP/zfgn8k7OndCk5MgGk/FsFyAp+6KB0A+H7nr562uD/PAOCP/zriaWeNl7xZxYgrwwkVUELAPj3yYDA/yULgn/67Mc7/hAgY9bmPQDWrAX/CPDoHlh+KvdIAe4WoNIGc88P6Q1A/J8RAH/7TA7/bMvW0v5hZGIP/7oEqHa6Zf0+faOgta2HPf5f3mjogae1D/AH//0UrJVRlOpOGo9i7F1lzxRZ+blvaOP/XPcC/sWX4h84Bv82jJQV0qf4bOHnxb9qRabwrw/S/yJZHtYrCZPUHv9lOd/rOgb/tQP82w9bwj8n/vUKkJTNSASmfRsB8GsIwM8vn5Y3n38cEPzz7eP0/uv3uwgw/v3wl94JnYeJ9CBptJdmCFGAKgb4l5Dbrv/X+AcBCD8yilAQn/BJBeiW/MG/H/7agNbRHisQcEAgzzCy7Gb1kNpI14N9yaZ2q/g/ZjgSvtL1Fv4IkEPA0IU/AlEEasIhCVAqUhbxib8E/5sI3Rp/BMg/dujRCYEgAsmy6tRrXApJNq3rrVvF/+3x/wsynIKS5oOG4gAAAABJRU5ErkJggg==",
  blue: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAAgCAYAAACy9KU0AAAD4ElEQVR4Xu2dQZLUMAxFE1asuRNLDkAVR+AILDkCR6CKA8ySO7FmRSgn44zj2JZkq7sJ83rZka3099e3bCvpeRr7LM/N57Fuulvjf4MO/LspNNQQ/g3yb5S4DMDgAAzRf5rAH/wvPQH1ClAkfh4/vf1Z4xD/ZcTA38qkPnv458S/XsIub7/8ONzC768f76nE+Ad/+JcgcNX4Q4A6Z0AEmAkopc5VBaCP/pNbAjAkQM+gTyEYHzEA+F+zTvCHf5eNPwSobwpYZwAEEAFkAhibABEgBKgHAQSYCchlAq4JkHS8ayWg1F8eBJI9/m0BIOEJ/kcEJLzgnxP/SgKUHzEWbQxLEE1/6fBr7C0E0PSH/xcENHiBvz4ANXi+Wv4VxWVZNszmeb08LECK/g4DoLA3BYCiP/wnAqTAC/wNAqTA89XyDwE674AsCsIQgASgdg9EwycEKEFAkzKaAjCLcWnjG/9HwIYzUPA/IAD/2scOd42/KrnDPTZqeyyFSLutslZIY49/fSW0Bs/DDByLLBn/anU//HPiX48ArQpZqQQu7Rl5BwD+wR/+lQXgcvGnOQU7JWy5+ESDWJgnFJZYU2D8ZwiA//ExEPi3IXDF+MvFoJhdCIKivpwA1Kw/qgWY2lHFEP9b5XLj/UGMfyG7HOVdQSDhf4GIavLVlFYjHA0RwL+S/OC/C+lBG+BfOTNMQfrX4i8qsTr4Y6oXj6r3KXWeT+vy2sxRAAH/SvEB/22pAf+Oh1WhZk8jwNlS7eHxH27AFPweAVBar2rBw/94AIL/eb8E/snZU7qUHJkAUv6tAmQFP3RQuoHwfU9fPW3wf54BwR/+9cRSTxuv+DMLkFcGkqqgBQD8+2RA4P+SBcE/ffbjHX8IkDFr8x4Aa9aCfwR4dA8sP5V7pAB3C1Bpg7nnh/QGIP7PCIC/fSaHf7Zla2n/MDKxh39dAlQ73bJ+n75R0NrWwx7/L2809MDT2gf4g/9+CtbKKEp1J41HMfausmeKrPzcN7Txf657Af/iS/EPHIN/G0bKCulTfLbw8+JftSJT+NcH6X+RLA/rlYRJao//spzvdR2D/9oB/u2HLeGfE/96BUjKZiQC076NAPg1BODX5w/Lm08/Dwj++f5+evft6S4CjH8//KV3QudhIj1IGu2lGUIUoIoB/iXktuv/Nf5BAMKPjCIUxCd8UgG6JX/w74e/NqB1tMcKBBwQyDOMLLtZPaQ20vVgX7Kp3Sr+jxmOhK90vYU/AuQQMHThj0AUgZpwSAKUipRFfOIvwf8mQrfGHwHyjx16dEIgiECyrDr1GpdCkk3reutW8X97/P8CmjOCkq5z/U0AAAAASUVORK5CYII=",
  red: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAAgCAYAAACy9KU0AAAD2UlEQVR4Xu2dwXnbMAyFrY7QnXrMBh0h43SEbtBjd8oIVT9KpkxSJAGQSFw1f44RRMiPDw8gCdnLbe5vvd++zA0zfDf+d+jAf5hCUzfCv0n+zRKXCZicgCn6327gD/6XTkCjAhSJX8bP6HjWOMR/HTHwtzJpzB7+OfFvlLDr2+tL9ghff/z6SCXGP/jDvwSBq8YfAjSYARFgElBKnasKwBj9b24FwJQA3UG/hWB8xgTgf6s6wR/+XTb+EKCxFLBlAAQQASQBzCVABAgBGkEAASYBuSTglgBJx7tWAkrjlUEg2ePfFgASnuCfIyDhBf+c+FcToPKIsWpjWIJoxkunX2NvIYBmPPw/ENDgBf76ANTg+Wn5VxWXdd0xW5bt8rQAKcbLJkBhbwoAxXj4TwRIgRf4GwRIgeen5R8CdN4BWRWEIQAJQO0eiIZPCFCCgKZkNAVgEePSxjf+c8CmK1DwzxCAf/1jhw+Nvya5wzN2enssjUiHrbJXSGOPf30ntAbPLAPHJkvmv9ndD/+c+DciQJtCNjqBa3tG3gGAf/CHf3UBuFz8aU7BTgVbKT7RIDbmCY0l1hIY/wUC4J+/BgL/dgSuGH+lGFSrC0FQ1JcTgLr9R60AUztqGOJ/71zufH8Q81+pLmd5VxFI+F8hopp8LaXVCEdHBPCvJD/4H0KaaQP8q1eGKUj/WvxFJVYHfyz14lH1kVKX5bQub2WOCgj4V4oP+O9LDfiXH1aFnj2NABdLtafHf3gAU/B7BEBtvaoFD//zAQj+5/0S+CdXT+lSciYBpPzbBMgKfhig9gDh/yNjjdyD/3MGBH/4NxJLI/d4xZ9ZgLwqkFQFLQDg36cCAv9HFQT/9NWPd/whQMaqzXsCrFUL/hHg2T2w8lTumQI8LEC1DeaRDzIagPg/IwD+9kwO/2zL1tr+YWTiCP+GBKh1umX9f/qNgtZ7Pezx//hGQw88rWOAP/gfp2C9iqLWd9J5FeMYqninyMrPY0Mb/+e+F/Cvfil+xjH4t2Ok7JA+xWcPPy/+NTsyhV99kH4XyfKyXk2YpPvxX5fzo69j8lc7wL//siX8c+LfqABJ1YxEYO7vIwB+HQF4e31Zv3z/nSH45+e3kOk/RIDx74e/9J3QZZhIL5JGeylDiALUMMC/hNx+/b/GPwhA+JBRhIL43JcaWWdvBSoX/uDfD3/thOhojxUIOCBQVhhFdbN5SG2k68G+ZtN6VPznFY6Er3S9hz8C5BAwDOGPQBSBlnBIApSKlEV84ifB/y5C740/AuQfO4zohEAQgWRf5zRqXApJNr3rvUfF//vj/xdoEIKSdpzhqwAAAABJRU5ErkJggg==",
  green: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAAgCAYAAACy9KU0AAAD3klEQVR4Xu2dwZnUMAyFE0qgEg60wJEO6ADKgQ7ogOO2wIFKKIHwOVlnHce2JFszQ9h/jhPZyjw/Pcu2kpmnsc/y3Hwe66a7Nf436MC/m0JDDeHfIP9GicsADA7AEP2nCfzB/9ITUK8AReLn8dPbnzUO8V9GDPytTOqzh39O/Osl7PLu8/vDLfz69vOeSox/8Id/CQJXjT8EqHMGRICZgFLqXFUA+ug/uSUAQwL0DPoUgvERA4D/NesEf/h32fhDgPqmgHUGQAARQCaAsQkQAUKAehBAgJmAXCbgmgBJx7tWAkr95UEg2ePfFgASnuB/REDCC/458a8kQPkRY9HGsATR9JcOv8beQgBNf/h/QUCDF/jrA1CD56vlX1FclmXDbJ7Xy8MCpOjvMAAKe1MAKPrDfyJACrzA3yBACjxfLf8QoPMOyKIgDAFIAGr3QDR8QoASBDQpoykAsxiXNr7xfwRsOAMF/wMC8K997HDX+KuSO9xjo7bHUoi02yprhTT2+NdXQmvwPMzAsciS8a9W98M/J/71CNCqkJVK4NKekXcA4B/84V9ZAC4Xf5pTsFPClotPNIiFeUJhiTUFxn+GAPgfHwOBfxsCV4y/XAyK2YUgKOrLCUDN+qNagKkdVQzxv1UuN94fxPgXsstR3hUEEv4XiKgmX01pNcLREAH8K8kP/ruQHrQB/pUzwxSkfy3+ohKrgz+mevGoep9S5/m0Lq/NHAUQ8K8UH/Dflhrw73hYFWr2NAKcLdUeHv/hBkzB7xEApfWqFjz8jwcg+J/3S+CfnD2lS8mRCSDl3ypAVvBDB6UbCN/39NXTBv/nGRD84V9PLPW08Yo/swB5ZSCpCloAwL9PBgT+L1kQ/NNnP97xhwAZszbvAbBmLfhHgEf3wPJTuUcKcLcAlTaYe35IbwDi/4wA+NtncvhnW7aW9g8jE3v41yVAtdMt6/fpGwWtbT3s8f/yRkMPPK19gD/476dgrYyiVHfSeBRj7yp7psjKz31DG//nuhfwL74U/8Ax+LdhpKyQPsVnCz8v/lUrMoV/fZD+F8nysF5JmKT2+C/L+V7XMfivHeDfftgS/jnxr1eApGxGIjDt2wiAX0MAfn/5uLz59HRA8M/3D9Pbrz/uIsD498Nfeid0HibSg6TRXpohRAGqGOBfQm67/l/jHwQg/MgoQkF8wicVoFvyB/9++GsDWkd7rEDAAYE8w8iym9VDaiNdD/Ylm9qt4v+Y4Uj4Stdb+CNADgFDF/4IRBGoCYckQKlIWcQn/hL8byJ0a/wRIP/YoUcnBIIIJMuqU69xKSTZtK63bhX/t8f/L6ahgpJht9qtAAAAAElFTkSuQmCC"
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Star = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvas = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Star = exports.Star = function () {
  function Star(ctx) {
    var _this = this;

    _classCallCheck(this, Star);

    this.x = (0, _canvas.randomIntFromRange)(10, ctx.canvas.width);
    this.y = (0, _canvas.randomIntFromRange)(10, ctx.canvas.height);
    this.r = (0, _canvas.randomIntFromRange)(1, 2);
    this.color = 'rgba(255,255,255,1)';
    setInterval(function () {
      _this.color = "rgba(255,255,255," + Math.random() + ")";
    }, 1000 / 12);
  }

  _createClass(Star, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
  }, {
    key: "update",
    value: function update(ctx) {
      this.draw(ctx);
    }
  }]);

  return Star;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(5);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./main.scss", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./main.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var oneUnitFromCanvas = exports.oneUnitFromCanvas = function oneUnitFromCanvas(canvas) {
  var x = canvas.height / 200;
  var y = canvas.width / 200;
  return { x: x, y: y };
};

var unitCoordsToXY = exports.unitCoordsToXY = function unitCoordsToXY(units, canvas) {
  var oneUnit = oneUnitFromCanvas(canvas);
  return {
    x: units.x * oneUnit.x,
    y: units.y * oneUnit.y
  };
};

var XYCoordstoUnits = exports.XYCoordstoUnits = function XYCoordstoUnits(xy, canvas) {
  var oneUnit = oneUnitFromCanvas(canvas);
  return {
    x: xy.x / oneUnit.x,
    y: xy.y / oneUnit.y
  };
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  height: 100vh;\n  background: #0a0a0a; }\n\ncanvas {\n  display: block;\n  margin: 0 auto;\n  background: #272727;\n  background-size: cover; }\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alien = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvas = __webpack_require__(0);

var _utilities = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Alien = exports.Alien = function () {
  function Alien(ctx, color) {
    _classCallCheck(this, Alien);

    this.color = color;
    this.resposition(ctx);
    this.timeout = 1000;
  }

  _createClass(Alien, [{
    key: "resposition",
    value: function resposition(ctx) {
      var _this = this;

      var oneUnit = (0, _utilities.oneUnitFromCanvas)(ctx.canvas);
      this.unitX = (0, _canvas.randomIntFromRange)(0, 200);
      this.unitY = (0, _canvas.randomIntFromRange)(50, 150);
      this.x = this.unitX * oneUnit.x;
      this.y = this.unitY * oneUnit.y;
      setTimeout(function () {
        _this.timeout = (0, _canvas.randomIntFromRange)(1000, 5000);
        _this.resposition(ctx);
      }, this.timeout);
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 5, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
  }, {
    key: "update",
    value: function update(ctx) {
      this.draw(ctx);
    }
  }]);

  return Alien;
}();

/***/ })
/******/ ]);
//# sourceMappingURL=canvas.bundle.js.map