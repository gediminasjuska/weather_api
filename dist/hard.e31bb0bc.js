// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"api/fetchData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiArr = exports.fetchData = void 0;
var apiArr = [];
exports.apiArr = apiArr;
var units = 'metric';
var cityName = document.querySelector('input');

var fetchData = function fetchData() {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(cityName.value, "&units=").concat(units, "&appid=93222b93865e98e9f99d18eaf4715fbb")).then(function (response) {
    return response.json();
  }).then(function (body) {
    var inputValue = document.querySelector('#search');
    inputValue.value = '';
    console.log(apiArr);
    var date = new Date();
    var del = date.getTime();
    var city1 = JSON.stringify(body.name);
    var temp1 = JSON.stringify(body.main.temp);
    var humidity1 = JSON.stringify(body.main.humidity);
    var weather1 = JSON.stringify(body.weather[0].description);
    var weatherIcon1 = JSON.stringify(body.weather[0].icon);
    var city = JSON.parse(city1);
    var temp = JSON.parse(temp1);
    var humidity = JSON.parse(humidity1);
    var weather = JSON.parse(weather1);
    var weatherIcon = JSON.parse(weatherIcon1);
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('#submit').style.display = 'block';
    var iconLink = "http://openweathermap.org/img/wn/".concat(weatherIcon, ".png");
    var weatherImage1 = document.createElement('img');
    var weatherImage2 = document.createElement('img');
    var weatherImage3 = document.createElement('img');
    var weatherImage4 = document.createElement('img');
    weatherImage1.src = iconLink;
    weatherImage2.src = iconLink;
    weatherImage3.src = iconLink;
    weatherImage4.src = iconLink;
    weatherImage1.setAttribute('id', 'weatherId');
    weatherImage2.setAttribute('id', 'weatherId');
    weatherImage3.setAttribute('id', 'weatherId');
    weatherImage4.setAttribute('id', 'weatherId');
    var output = document.querySelector('.output');

    function newCityWeather() {
      var cityInfo = document.createElement('div');
      var deleteBtn = document.createElement('button');
      var infoUl = document.createElement('ul');
      var infoLi1 = document.createElement('li');
      var infoLi2 = document.createElement('li');
      var infoLi3 = document.createElement('li');
      var infoLi4 = document.createElement('li');
      var infoLi5 = document.createElement('li');
      var infoLi6 = document.createElement('li');
      cityInfo.setAttribute('class', 'card');
      var cardId = 'delete' + del;
      deleteBtn.setAttribute('id', 'deleteBtn');
      infoLi1.innerHTML = city;
      infoLi2.innerHTML = weatherImage1;
      infoLi2.innerHTML = weatherImage2;
      infoLi2.innerHTML = weatherImage3;
      infoLi2.innerHTML = weatherImage4;
      infoLi3.innerHTML = "Temperature: ".concat(temp, "&#176;C\u2002");
      infoLi4.innerHTML = "Description: ".concat(weather);
      infoLi5.innerHTML = "Humidity: ".concat(humidity, "%");
      infoLi6.innerHTML = "Retrieved on: ".concat(date);
      infoLi1.setAttribute('id', 'miestas');
      output.appendChild(cityInfo);
      cityInfo.appendChild(deleteBtn);
      cityInfo.appendChild(infoUl);
      infoUl.appendChild(infoLi1);
      infoUl.appendChild(weatherImage1);
      infoUl.appendChild(weatherImage2);
      infoUl.appendChild(weatherImage3);
      infoUl.appendChild(weatherImage4);
      infoUl.appendChild(infoLi3);
      infoUl.appendChild(infoLi4);
      infoUl.appendChild(infoLi5);
      infoUl.appendChild(infoLi6);
      var showMore = document.querySelector('.show-more');
      var c = document.querySelector('.output').childElementCount;
      var body = document.querySelector('body');
      var showMoreBtn = document.querySelector(".show_more_btn");
      var inputValue = document.querySelector('#search');
      inputValue.value = '';
      var w = window.innerWidth;
      var h = window.innerHeight;
      console.log("lango plotis", h % 3);
      var showMoreValue = true;

      function showMoreHide() {
        if (w >= 900) {
          if (c === 7) {
            body.style.overflow = "hidden";
            showMore.style.height = "".concat(h / 2, "px");
          }
        } else if (w < 900 && w > 450) {
          if (c > 4) {
            body.style.overflow = "hidden";
            showMore.style.height = "".concat(h / 2, "px");
          }
        } else if (w < 900 && w <= 450) {
          if (c === 2) {
            body.style.overflow = "hidden";
            showMore.style.height = "".concat(h / 2, "px");
          }
        }
      }

      showMoreHide();
      var a = city;
      a = a.toLowerCase();
      var ac = apiArr.indexOf(a);
      showMoreBtn.addEventListener('click', function () {
        body.style.overflow = "auto";
        showMore.style.height = "0px";
        showMoreValue = false;
      });
      deleteBtn.addEventListener('click', function () {
        cityInfo.remove();
        exports.apiArr = apiArr = apiArr.filter(function (name) {
          return name !== a;
        });
      });
    }

    newCityWeather();
  }).catch(function (error) {
    alert("ERROR404\nNeteisingai įvestas miesto pavadinimas!", error);
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('#submit').style.display = 'block';
  });
};

exports.fetchData = fetchData;
},{}],"api/submitButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitButton = void 0;

var _fetchData = require("./fetchData.js");

var cityName = document.querySelector('input');
var submitButton = document.querySelector('button');
exports.submitButton = submitButton;
var loader = document.querySelector('.loader');
submitButton.addEventListener('click', function () {
  if (cityName.value == "") {
    alert('Neįvestas miesto pavadinimas!');
  } else if (_fetchData.apiArr.includes(cityName.value) == true && cityName.value !== "") {
    alert('Šio miesto duomenys jau ekrane :)');
  } else if (_fetchData.apiArr == null || _fetchData.apiArr.includes(cityName.value) !== true) {
    submit.style.display = "none";
    loader.style.display = "block";
    var cardDel = cityName.value;

    _fetchData.apiArr.push(cardDel);

    (0, _fetchData.fetchData)();
  }
});
cityName.addEventListener('keyup', function (event) {
  if (cityName.value == "" && event.keyCode === 13) {
    alert('Neįvestas miesto pavadinimas!');
  } else if (_fetchData.apiArr.includes(cityName.value) == true && cityName.value !== "" && event.keyCode === 13) {
    alert('Šio miesto duomenys jau ekrane :)');
  } else if ((_fetchData.apiArr.includes(cityName.value) !== true || _fetchData.apiArr == null) && event.keyCode === 13) {
    submit.style.display = "none";
    loader.style.display = "block";
    (0, _fetchData.fetchData)();
    var cardDel = cityName.value;

    _fetchData.apiArr.push(cardDel);
  }
});
},{"./fetchData.js":"api/fetchData.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _fetchData = require("./api/fetchData.js");

var _submitButton = require("./api/submitButton.js");
},{"./api/fetchData.js":"api/fetchData.js","./api/submitButton.js":"api/submitButton.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62055" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/hard.e31bb0bc.js.map