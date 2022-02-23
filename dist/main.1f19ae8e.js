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
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"style/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/interface/Nav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Navbar = function Navbar() {
  var template = "\n        <nav>\n            <button id=\"home\">About Me </button>\n            <button id=\"experiment\">Experiments</button> \n            <button id=\"project\">Work</button> \n        </nav>\n       \n    ";
  return template;
};

var _default = Navbar;
exports.default = _default;
},{}],"js/interface/Contact.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Contact = function Contact() {
  var template = "\n\n        <ul id=\"links\">\n            <a href =\"https://www.instagram.com/cyrstem/\"target=\"_blank\"><img src=\"insta.png\" width=\"20\"></a>\n                <a href =\"http://ec.linkedin.com/in/jacobohz\" target=\"_blank\"><img src=\"in.png\" width=\"20\"></a>\n            <a href =\"https://github.com/cyrstem/\" target=\"_blank\"><img src=\"git.png\" width=\"20\"></a>\n        </ul>\n    ";
  return template;
};

var _default = Contact;
exports.default = _default;
},{}],"js/pages/Home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Home = function Home() {
  var template = "\n    <h1>Hello..</h1>\n        <main>\n            <p>I'm <b>Jacob</b> a <b>Creative Developer</b> and <b>FrontEnd Developer</b> based in Quito - Ecuador.</p> \n            <p>I specialize in working with emerging tech to build custom tools for digital or physical experiences.</p>\n            <p>Im a <b>self-taught</b> developer, <b>fast learner</b> and recently curious about <b>Machine Learning.</b></p>\n            <p> contact me at <b>cyrstem[at]gmail[dot]com</b></p>   \n        </main>\n    ";
  return template;
};

var _default = Home;
exports.default = _default;
},{}],"js/pages/Portafolio.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Portafolio = function Portafolio() {
  var template = "\n      <div class =\"sites\">\n         <p>I worked as <b>Front-End</b> developer and <b>Lead Designer</b> for the following :  </p>\n         <ul>\n         <li><a href=\"https://activetheory.net/\" target=\"_blank\">Active Theory = WebGL Developer(2021)</a>\n         </li>\n           <li><a href=\"https://myuniguru.com/\" target=\"_blank\">myuniguru.com = FullStack Developer(2021)</a>\n           </li>\n           <li><a href=\"http://161.97.94.209//\" target=\"_blank\">can-can.org = Made some games for a band website</a>\n           </li>\n           <li><a href=\"https://www.yaesta.com\" target=\"_blank\">YaEsta.com = Frontend Developer and Lead Designer (2016-2018)</a>\n           </li>\n           <li><a href=\"https://todo.legal\" target=\"_blank\">Todo.legal = Frontend Developer and Web Developer</a>\n\n           </li>\n           <li><a href=\"https://smartco.com.ec\" target=\"_blank\">Smartco = Frontend Developer and Unity Developer (2019-2020)</a>\n           </li>\n           <li><a href=\"https://www.pachamama.org.ec/en/\" target=\"_blank\">Pachamama Alliance = Front-end Developer and Lead Designer (2010\u20132013)</a></li>\n\n         </ul>\n      </div>\n    ";
  return template;
};

var _default = Portafolio;
exports.default = _default;
},{}],"js/pages/Not4u.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Not4u = function Not4u() {
  var template = "\n       <div >\n            <h1>i'm updating this..... </h1>\n       </div>\n    ";
  return template;
};

var _default = Not4u;
exports.default = _default;
},{}],"js/pages/Experiments.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Experiments = function Experiments() {
  var template = "\n    <div id =\"portafolio\">\n      <section class=\"proj\">\n         <a href=\"https://www.instagram.com/p/CNRC1QZHf66/\"> <img src= \"insta-0.jpg\" width=\"500\"/></a>\n      </section>\n      <section class=\"proj\">\n         <a href=\"https://www.instagram.com/p/B7mSmESgpNr/\"> <img src= \"insta-2.jpg\" width=\"500\"/></a>\n      </section>\n      <section class=\"proj\">\n         <a href=\"https://onesimpleidea.itch.io/noizu\" target=\"_blank\"><img src= \"noizu.png\" width=\"500\"/></a>\n      </section>\n      <section class=\"proj\">\n        \n         <a href=\"https://www.youtube.com/watch?v=YHZd0TxPMkY\"> <img src= \"insta-3.jpg\" width=\"500\"/></a>\n           \n      </section>\n      <section class=\"proj\">\n       \n         <a href=\"https://www.instagram.com/p/CRXhMmMnwe2/\"> <img src= \"glitch.png\" width=\"500\"/></a>\n           \n      </section>\n\n      <section class=\"proj\">\n        \n         <a href=\"https://rutas-ec.herokuapp.com/\" target=\"_blank\"> <img src= \"rutas.png\" width=\"500\"/></a>\n          \n      </section>\n      \n\n    </div>\n    ";
  return template;
};

var _default = Experiments;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

require("./style/main.scss");

var _Nav = _interopRequireDefault(require("./js/interface/Nav"));

var _Contact = _interopRequireDefault(require("./js/interface/Contact"));

var _Home = _interopRequireDefault(require("./js/pages/Home"));

var _Portafolio = _interopRequireDefault(require("./js/pages/Portafolio"));

var _Not4u = _interopRequireDefault(require("./js/pages/Not4u"));

var _Experiments = _interopRequireDefault(require("./js/pages/Experiments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//console.clear();
// import init from "./js/stage";
document.addEventListener("click", function (event) {
  if (event.target.id !== "home") return;
  document.getElementById("container").innerHTML = (0, _Home.default)();
}, false);
document.addEventListener("click", function (event) {
  if (event.target.id !== "experiment") return;
  document.getElementById("container").innerHTML = (0, _Experiments.default)();
}, false);
document.addEventListener("click", function (event) {
  if (event.target.id !== "project") return;
  document.getElementById("container").innerHTML = (0, _Portafolio.default)();
}, false);
document.addEventListener("click", function (event) {
  if (event.target.id !== "about") return;
  document.getElementById("container").innerHTML = (0, _Home.default)();
}, false);

function responsiviti() {
  //responsive screens
  var x = window.matchMedia("(max-width: 700px)");

  if (x.matches) {
    //console.log("responsive biatch");
    document.addEventListener("click", function (event) {
      if (event.target.id !== "experiment") return;
      document.getElementById("container").innerHTML = (0, _Experiments.default)();
      document.getElementById("ui").style.bottom = "20vh";
    });
  }
}

var app = function app() {
  //load UI and socials media  plus main content
  document.getElementById("ui").innerHTML = (0, _Nav.default)();
  document.getElementById("container").innerHTML = (0, _Home.default)();
  document.getElementById("contact").innerHTML = (0, _Contact.default)();
  responsiviti();
};

var sayHello = function sayHello() {
  if (window.navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
    var args = ["\n %c -created by cyrstem \n", "border: 1px solid #000;color: #fff; background: #171717; padding:5px 0;"];
    window.console.log.apply(console, args);
  } else if (window.console) {
    window.console.log("-created by cyrstem  -");
  }
};

window.onload = function (event) {
  app();
  sayHello();
};
},{"./style/main.scss":"style/main.scss","./js/interface/Nav":"js/interface/Nav.js","./js/interface/Contact":"js/interface/Contact.js","./js/pages/Home":"js/pages/Home.js","./js/pages/Portafolio":"js/pages/Portafolio.js","./js/pages/Not4u":"js/pages/Not4u.js","./js/pages/Experiments":"js/pages/Experiments.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "44241" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map