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
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/ogl/src/math/functions/Vec3Func.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.length = length;
exports.copy = copy;
exports.set = set;
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.scale = scale;
exports.distance = distance;
exports.squaredDistance = squaredDistance;
exports.squaredLength = squaredLength;
exports.negate = negate;
exports.inverse = inverse;
exports.normalize = normalize;
exports.dot = dot;
exports.cross = cross;
exports.lerp = lerp;
exports.transformMat4 = transformMat4;
exports.scaleRotateMat4 = scaleRotateMat4;
exports.transformMat3 = transformMat3;
exports.transformQuat = transformQuat;
exports.exactEquals = exactEquals;
exports.angle = void 0;
const EPSILON = 0.000001;
/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return Math.sqrt(x * x + y * y + z * z);
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */


function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */


function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */


function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */


function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */


function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */


function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */


function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */


function distance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return Math.sqrt(x * x + y * y + z * z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */


function squaredDistance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */


function squaredLength(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */


function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */


function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */


function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */


function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */


function cross(out, a, b) {
  let ax = a[0],
      ay = a[1],
      az = a[2];
  let bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */


function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */


function transformMat4(out, a, m) {
  let x = a[0],
      y = a[1],
      z = a[2];
  let w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Same as above but doesn't apply translation.
 * Useful for rays.
 */


function scaleRotateMat4(out, a, m) {
  let x = a[0],
      y = a[1],
      z = a[2];
  let w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */


function transformMat3(out, a, m) {
  let x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */


function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  let x = a[0],
      y = a[1],
      z = a[2];
  let qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  let uvx = qy * z - qz * y;
  let uvy = qz * x - qx * z;
  let uvz = qx * y - qy * x;
  let uuvx = qy * uvz - qz * uvy;
  let uuvy = qz * uvx - qx * uvz;
  let uuvz = qx * uvy - qy * uvx;
  let w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2;
  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2;
  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */


const angle = function () {
  const tempA = [0, 0, 0];
  const tempB = [0, 0, 0];
  return function (a, b) {
    copy(tempA, a);
    copy(tempB, b);
    normalize(tempA, tempA);
    normalize(tempB, tempB);
    let cosine = dot(tempA, tempB);

    if (cosine > 1.0) {
      return 0;
    } else if (cosine < -1.0) {
      return Math.PI;
    } else {
      return Math.acos(cosine);
    }
  };
}();
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */


exports.angle = angle;

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
},{}],"../node_modules/ogl/src/math/Vec3.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vec3 = void 0;

var Vec3Func = _interopRequireWildcard(require("./functions/Vec3Func.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Vec3 extends Array {
  constructor(x = 0, y = x, z = x) {
    super(x, y, z);
    return this;
  }

  get x() {
    return this[0];
  }

  get y() {
    return this[1];
  }

  get z() {
    return this[2];
  }

  set x(v) {
    this[0] = v;
  }

  set y(v) {
    this[1] = v;
  }

  set z(v) {
    this[2] = v;
  }

  set(x, y = x, z = x) {
    if (x.length) return this.copy(x);
    Vec3Func.set(this, x, y, z);
    return this;
  }

  copy(v) {
    Vec3Func.copy(this, v);
    return this;
  }

  add(va, vb) {
    if (vb) Vec3Func.add(this, va, vb);else Vec3Func.add(this, this, va);
    return this;
  }

  sub(va, vb) {
    if (vb) Vec3Func.subtract(this, va, vb);else Vec3Func.subtract(this, this, va);
    return this;
  }

  multiply(v) {
    if (v.length) Vec3Func.multiply(this, this, v);else Vec3Func.scale(this, this, v);
    return this;
  }

  divide(v) {
    if (v.length) Vec3Func.divide(this, this, v);else Vec3Func.scale(this, this, 1 / v);
    return this;
  }

  inverse(v = this) {
    Vec3Func.inverse(this, v);
    return this;
  } // Can't use 'length' as Array.prototype uses it


  len() {
    return Vec3Func.length(this);
  }

  distance(v) {
    if (v) return Vec3Func.distance(this, v);else return Vec3Func.length(this);
  }

  squaredLen() {
    return Vec3Func.squaredLength(this);
  }

  squaredDistance(v) {
    if (v) return Vec3Func.squaredDistance(this, v);else return Vec3Func.squaredLength(this);
  }

  negate(v = this) {
    Vec3Func.negate(this, v);
    return this;
  }

  cross(va, vb) {
    if (vb) Vec3Func.cross(this, va, vb);else Vec3Func.cross(this, this, va);
    return this;
  }

  scale(v) {
    Vec3Func.scale(this, this, v);
    return this;
  }

  normalize() {
    Vec3Func.normalize(this, this);
    return this;
  }

  dot(v) {
    return Vec3Func.dot(this, v);
  }

  equals(v) {
    return Vec3Func.exactEquals(this, v);
  }

  applyMatrix4(mat4) {
    Vec3Func.transformMat4(this, this, mat4);
    return this;
  }

  scaleRotateMatrix4(mat4) {
    Vec3Func.scaleRotateMat4(this, this, mat4);
    return this;
  }

  applyQuaternion(q) {
    Vec3Func.transformQuat(this, this, q);
    return this;
  }

  angle(v) {
    return Vec3Func.angle(this, v);
  }

  lerp(v, t) {
    Vec3Func.lerp(this, this, v, t);
    return this;
  }

  clone() {
    return new Vec3(this[0], this[1], this[2]);
  }

  fromArray(a, o = 0) {
    this[0] = a[o];
    this[1] = a[o + 1];
    this[2] = a[o + 2];
    return this;
  }

  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    a[o + 2] = this[2];
    return a;
  }

  transformDirection(mat4) {
    const x = this[0];
    const y = this[1];
    const z = this[2];
    this[0] = mat4[0] * x + mat4[4] * y + mat4[8] * z;
    this[1] = mat4[1] * x + mat4[5] * y + mat4[9] * z;
    this[2] = mat4[2] * x + mat4[6] * y + mat4[10] * z;
    return this.normalize();
  }

}

exports.Vec3 = Vec3;
},{"./functions/Vec3Func.js":"../node_modules/ogl/src/math/functions/Vec3Func.js"}],"../node_modules/ogl/src/core/Geometry.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Geometry = void 0;

var _Vec = require("../math/Vec3.js");

// attribute params
// {
//     data - typed array eg UInt16Array for indices, Float32Array
//     size - int default 1
//     instanced - default null. Pass divisor amount
//     type - gl enum default gl.UNSIGNED_SHORT for 'index', gl.FLOAT for others
//     normalized - boolean default false
//     buffer - gl buffer, if buffer exists, don't need to provide data - although needs position data for bounds calculation
//     stride - default 0 - for when passing in buffer
//     offset - default 0 - for when passing in buffer
//     count - default null - for when passing in buffer
//     min - array - for when passing in buffer
//     max - array - for when passing in buffer
// }
// TODO: fit in transform feedback
const tempVec3 = new _Vec.Vec3();
let ID = 1;
let ATTR_ID = 1; // To stop inifinite warnings

let isBoundsWarned = false;

class Geometry {
  constructor(gl, attributes = {}) {
    if (!gl.canvas) console.error('gl not passed as first argument to Geometry');
    this.gl = gl;
    this.attributes = attributes;
    this.id = ID++; // Store one VAO per program attribute locations order

    this.VAOs = {};
    this.drawRange = {
      start: 0,
      count: 0
    };
    this.instancedCount = 0; // Unbind current VAO so that new buffers don't get added to active mesh

    this.gl.renderer.bindVertexArray(null);
    this.gl.renderer.currentGeometry = null; // Alias for state store to avoid redundant calls for global state

    this.glState = this.gl.renderer.state; // create the buffers

    for (let key in attributes) {
      this.addAttribute(key, attributes[key]);
    }
  }

  addAttribute(key, attr) {
    this.attributes[key] = attr; // Set options

    attr.id = ATTR_ID++; // TODO: currently unused, remove?

    attr.size = attr.size || 1;
    attr.type = attr.type || (attr.data.constructor === Float32Array ? this.gl.FLOAT : attr.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT); // Uint32Array

    attr.target = key === 'index' ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER;
    attr.normalized = attr.normalized || false;
    attr.stride = attr.stride || 0;
    attr.offset = attr.offset || 0;
    attr.count = attr.count || (attr.stride ? attr.data.byteLength / attr.stride : attr.data.length / attr.size);
    attr.divisor = attr.instanced || 0;
    attr.needsUpdate = false;

    if (!attr.buffer) {
      attr.buffer = this.gl.createBuffer(); // Push data to buffer

      this.updateAttribute(attr);
    } // Update geometry counts. If indexed, ignore regular attributes


    if (attr.divisor) {
      this.isInstanced = true;

      if (this.instancedCount && this.instancedCount !== attr.count * attr.divisor) {
        console.warn('geometry has multiple instanced buffers of different length');
        return this.instancedCount = Math.min(this.instancedCount, attr.count * attr.divisor);
      }

      this.instancedCount = attr.count * attr.divisor;
    } else if (key === 'index') {
      this.drawRange.count = attr.count;
    } else if (!this.attributes.index) {
      this.drawRange.count = Math.max(this.drawRange.count, attr.count);
    }
  }

  updateAttribute(attr) {
    if (this.glState.boundBuffer !== attr.buffer) {
      this.gl.bindBuffer(attr.target, attr.buffer);
      this.glState.boundBuffer = attr.buffer;
    }

    this.gl.bufferData(attr.target, attr.data, this.gl.STATIC_DRAW);
    attr.needsUpdate = false;
  }

  setIndex(value) {
    this.addAttribute('index', value);
  }

  setDrawRange(start, count) {
    this.drawRange.start = start;
    this.drawRange.count = count;
  }

  setInstancedCount(value) {
    this.instancedCount = value;
  }

  createVAO(program) {
    this.VAOs[program.attributeOrder] = this.gl.renderer.createVertexArray();
    this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
    this.bindAttributes(program);
  }

  bindAttributes(program) {
    // Link all attributes to program using gl.vertexAttribPointer
    program.attributeLocations.forEach((location, {
      name,
      type
    }) => {
      // If geometry missing a required shader attribute
      if (!this.attributes[name]) {
        console.warn(`active attribute ${name} not being supplied`);
        return;
      }

      const attr = this.attributes[name];
      this.gl.bindBuffer(attr.target, attr.buffer);
      this.glState.boundBuffer = attr.buffer; // For matrix attributes, buffer needs to be defined per column

      let numLoc = 1;
      if (type === 35674) numLoc = 2; // mat2

      if (type === 35675) numLoc = 3; // mat3

      if (type === 35676) numLoc = 4; // mat4

      const size = attr.size / numLoc;
      const stride = numLoc === 1 ? 0 : numLoc * numLoc * numLoc;
      const offset = numLoc === 1 ? 0 : numLoc * numLoc;

      for (let i = 0; i < numLoc; i++) {
        this.gl.vertexAttribPointer(location + i, size, attr.type, attr.normalized, attr.stride + stride, attr.offset + i * offset);
        this.gl.enableVertexAttribArray(location + i); // For instanced attributes, divisor needs to be set.
        // For firefox, need to set back to 0 if non-instanced drawn after instanced. Else won't render

        this.gl.renderer.vertexAttribDivisor(location + i, attr.divisor);
      }
    }); // Bind indices if geometry indexed

    if (this.attributes.index) this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
  }

  draw({
    program,
    mode = this.gl.TRIANGLES
  }) {
    if (this.gl.renderer.currentGeometry !== `${this.id}_${program.attributeOrder}`) {
      if (!this.VAOs[program.attributeOrder]) this.createVAO(program);
      this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
      this.gl.renderer.currentGeometry = `${this.id}_${program.attributeOrder}`;
    } // Check if any attributes need updating


    program.attributeLocations.forEach((location, {
      name
    }) => {
      const attr = this.attributes[name];
      if (attr.needsUpdate) this.updateAttribute(attr);
    });

    if (this.isInstanced) {
      if (this.attributes.index) {
        this.gl.renderer.drawElementsInstanced(mode, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * 2, this.instancedCount);
      } else {
        this.gl.renderer.drawArraysInstanced(mode, this.drawRange.start, this.drawRange.count, this.instancedCount);
      }
    } else {
      if (this.attributes.index) {
        this.gl.drawElements(mode, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * 2);
      } else {
        this.gl.drawArrays(mode, this.drawRange.start, this.drawRange.count);
      }
    }
  }

  getPosition() {
    // Use position buffer, or min/max if available
    const attr = this.attributes.position; // if (attr.min) return [...attr.min, ...attr.max];

    if (attr.data) return attr;
    if (isBoundsWarned) return;
    console.warn('No position buffer data found to compute bounds');
    return isBoundsWarned = true;
  }

  computeBoundingBox(attr) {
    if (!attr) attr = this.getPosition();
    const array = attr.data;
    const stride = attr.stride ? attr.stride / array.BYTES_PER_ELEMENT : attr.size;

    if (!this.bounds) {
      this.bounds = {
        min: new _Vec.Vec3(),
        max: new _Vec.Vec3(),
        center: new _Vec.Vec3(),
        scale: new _Vec.Vec3(),
        radius: Infinity
      };
    }

    const min = this.bounds.min;
    const max = this.bounds.max;
    const center = this.bounds.center;
    const scale = this.bounds.scale;
    min.set(+Infinity);
    max.set(-Infinity); // TODO: check size of position (eg triangle with Vec2)

    for (let i = 0, l = array.length; i < l; i += stride) {
      const x = array[i];
      const y = array[i + 1];
      const z = array[i + 2];
      min.x = Math.min(x, min.x);
      min.y = Math.min(y, min.y);
      min.z = Math.min(z, min.z);
      max.x = Math.max(x, max.x);
      max.y = Math.max(y, max.y);
      max.z = Math.max(z, max.z);
    }

    scale.sub(max, min);
    center.add(min, max).divide(2);
  }

  computeBoundingSphere(attr) {
    if (!attr) attr = this.getPosition();
    const array = attr.data;
    const stride = attr.stride ? attr.stride / array.BYTES_PER_ELEMENT : attr.size;
    if (!this.bounds) this.computeBoundingBox(attr);
    let maxRadiusSq = 0;

    for (let i = 0, l = array.length; i < l; i += stride) {
      tempVec3.fromArray(array, i);
      maxRadiusSq = Math.max(maxRadiusSq, this.bounds.center.squaredDistance(tempVec3));
    }

    this.bounds.radius = Math.sqrt(maxRadiusSq);
  }

  remove() {
    for (let key in this.VAOs) {
      this.gl.renderer.deleteVertexArray(this.VAOs[key]);
      delete this.VAOs[key];
    }

    for (let key in this.attributes) {
      this.gl.deleteBuffer(this.attributes[key].buffer);
      delete this.attributes[key];
    }
  }

}

exports.Geometry = Geometry;
},{"../math/Vec3.js":"../node_modules/ogl/src/math/Vec3.js"}],"../node_modules/ogl/src/core/Program.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Program = void 0;
// TODO: upload empty texture if null ? maybe not
// TODO: upload identity matrix if null ?
// TODO: sampler Cube
let ID = 1; // cache of typed arrays used to flatten uniform arrays

const arrayCacheF32 = {};

class Program {
  constructor(gl, {
    vertex,
    fragment,
    uniforms = {},
    transparent = false,
    cullFace = gl.BACK,
    frontFace = gl.CCW,
    depthTest = true,
    depthWrite = true,
    depthFunc = gl.LESS
  } = {}) {
    if (!gl.canvas) console.error('gl not passed as fist argument to Program');
    this.gl = gl;
    this.uniforms = uniforms;
    this.id = ID++;
    if (!vertex) console.warn('vertex shader not supplied');
    if (!fragment) console.warn('fragment shader not supplied'); // Store program state

    this.transparent = transparent;
    this.cullFace = cullFace;
    this.frontFace = frontFace;
    this.depthTest = depthTest;
    this.depthWrite = depthWrite;
    this.depthFunc = depthFunc;
    this.blendFunc = {};
    this.blendEquation = {}; // set default blendFunc if transparent flagged

    if (this.transparent && !this.blendFunc.src) {
      if (this.gl.renderer.premultipliedAlpha) this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);else this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    } // compile vertex shader and log errors


    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertex);
    gl.compileShader(vertexShader);

    if (gl.getShaderInfoLog(vertexShader) !== '') {
      console.warn(`${gl.getShaderInfoLog(vertexShader)}\nVertex Shader\n${addLineNumbers(vertex)}`);
    } // compile fragment shader and log errors


    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragment);
    gl.compileShader(fragmentShader);

    if (gl.getShaderInfoLog(fragmentShader) !== '') {
      console.warn(`${gl.getShaderInfoLog(fragmentShader)}\nFragment Shader\n${addLineNumbers(fragment)}`);
    } // compile program and log errors


    this.program = gl.createProgram();
    gl.attachShader(this.program, vertexShader);
    gl.attachShader(this.program, fragmentShader);
    gl.linkProgram(this.program);

    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      return console.warn(gl.getProgramInfoLog(this.program));
    } // Remove shader once linked


    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader); // Get active uniform locations

    this.uniformLocations = new Map();
    let numUniforms = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);

    for (let uIndex = 0; uIndex < numUniforms; uIndex++) {
      let uniform = gl.getActiveUniform(this.program, uIndex);
      this.uniformLocations.set(uniform, gl.getUniformLocation(this.program, uniform.name)); // split uniforms' names to separate array and struct declarations

      const split = uniform.name.match(/(\w+)/g);
      uniform.uniformName = split[0];

      if (split.length === 3) {
        uniform.isStructArray = true;
        uniform.structIndex = Number(split[1]);
        uniform.structProperty = split[2];
      } else if (split.length === 2 && isNaN(Number(split[1]))) {
        uniform.isStruct = true;
        uniform.structProperty = split[1];
      }
    } // Get active attribute locations


    this.attributeLocations = new Map();
    const locations = [];
    const numAttribs = gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES);

    for (let aIndex = 0; aIndex < numAttribs; aIndex++) {
      const attribute = gl.getActiveAttrib(this.program, aIndex);
      const location = gl.getAttribLocation(this.program, attribute.name);
      locations[location] = attribute.name;
      this.attributeLocations.set(attribute, location);
    }

    this.attributeOrder = locations.join('');
  }

  setBlendFunc(src, dst, srcAlpha, dstAlpha) {
    this.blendFunc.src = src;
    this.blendFunc.dst = dst;
    this.blendFunc.srcAlpha = srcAlpha;
    this.blendFunc.dstAlpha = dstAlpha;
    if (src) this.transparent = true;
  }

  setBlendEquation(modeRGB, modeAlpha) {
    this.blendEquation.modeRGB = modeRGB;
    this.blendEquation.modeAlpha = modeAlpha;
  }

  applyState() {
    if (this.depthTest) this.gl.renderer.enable(this.gl.DEPTH_TEST);else this.gl.renderer.disable(this.gl.DEPTH_TEST);
    if (this.cullFace) this.gl.renderer.enable(this.gl.CULL_FACE);else this.gl.renderer.disable(this.gl.CULL_FACE);
    if (this.blendFunc.src) this.gl.renderer.enable(this.gl.BLEND);else this.gl.renderer.disable(this.gl.BLEND);
    if (this.cullFace) this.gl.renderer.setCullFace(this.cullFace);
    this.gl.renderer.setFrontFace(this.frontFace);
    this.gl.renderer.setDepthMask(this.depthWrite);
    this.gl.renderer.setDepthFunc(this.depthFunc);
    if (this.blendFunc.src) this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha);
    this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha);
  }

  use({
    flipFaces = false
  } = {}) {
    let textureUnit = -1;
    const programActive = this.gl.renderer.currentProgram === this.id; // Avoid gl call if program already in use

    if (!programActive) {
      this.gl.useProgram(this.program);
      this.gl.renderer.currentProgram = this.id;
    } // Set only the active uniforms found in the shader


    this.uniformLocations.forEach((location, activeUniform) => {
      let name = activeUniform.uniformName; // get supplied uniform

      let uniform = this.uniforms[name]; // For structs, get the specific property instead of the entire object

      if (activeUniform.isStruct) {
        uniform = uniform[activeUniform.structProperty];
        name += `.${activeUniform.structProperty}`;
      }

      if (activeUniform.isStructArray) {
        uniform = uniform[activeUniform.structIndex][activeUniform.structProperty];
        name += `[${activeUniform.structIndex}].${activeUniform.structProperty}`;
      }

      if (!uniform) {
        return warn(`Active uniform ${name} has not been supplied`);
      }

      if (uniform && uniform.value === undefined) {
        return warn(`${name} uniform is missing a value parameter`);
      }

      if (uniform.value.texture) {
        textureUnit = textureUnit + 1; // Check if texture needs to be updated

        uniform.value.update(textureUnit);
        return setUniform(this.gl, activeUniform.type, location, textureUnit);
      } // For texture arrays, set uniform as an array of texture units instead of just one


      if (uniform.value.length && uniform.value[0].texture) {
        const textureUnits = [];
        uniform.value.forEach(value => {
          textureUnit = textureUnit + 1;
          value.update(textureUnit);
          textureUnits.push(textureUnit);
        });
        return setUniform(this.gl, activeUniform.type, location, textureUnits);
      }

      setUniform(this.gl, activeUniform.type, location, uniform.value);
    });
    this.applyState();
    if (flipFaces) this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW);
  }

  remove() {
    this.gl.deleteProgram(this.program);
  }

}

exports.Program = Program;

function setUniform(gl, type, location, value) {
  value = value.length ? flatten(value) : value;
  const setValue = gl.renderer.state.uniformLocations.get(location); // Avoid redundant uniform commands

  if (value.length) {
    if (setValue === undefined || setValue.length !== value.length) {
      // clone array to store as cache
      gl.renderer.state.uniformLocations.set(location, value.slice(0));
    } else {
      if (arraysEqual(setValue, value)) return; // Update cached array values

      setValue.set ? setValue.set(value) : setArray(setValue, value);
      gl.renderer.state.uniformLocations.set(location, setValue);
    }
  } else {
    if (setValue === value) return;
    gl.renderer.state.uniformLocations.set(location, value);
  }

  switch (type) {
    case 5126:
      return value.length ? gl.uniform1fv(location, value) : gl.uniform1f(location, value);
    // FLOAT

    case 35664:
      return gl.uniform2fv(location, value);
    // FLOAT_VEC2

    case 35665:
      return gl.uniform3fv(location, value);
    // FLOAT_VEC3

    case 35666:
      return gl.uniform4fv(location, value);
    // FLOAT_VEC4

    case 35670: // BOOL

    case 5124: // INT

    case 35678: // SAMPLER_2D

    case 35680:
      return value.length ? gl.uniform1iv(location, value) : gl.uniform1i(location, value);
    // SAMPLER_CUBE

    case 35671: // BOOL_VEC2

    case 35667:
      return gl.uniform2iv(location, value);
    // INT_VEC2

    case 35672: // BOOL_VEC3

    case 35668:
      return gl.uniform3iv(location, value);
    // INT_VEC3

    case 35673: // BOOL_VEC4

    case 35669:
      return gl.uniform4iv(location, value);
    // INT_VEC4

    case 35674:
      return gl.uniformMatrix2fv(location, false, value);
    // FLOAT_MAT2

    case 35675:
      return gl.uniformMatrix3fv(location, false, value);
    // FLOAT_MAT3

    case 35676:
      return gl.uniformMatrix4fv(location, false, value);
    // FLOAT_MAT4
  }
}

function addLineNumbers(string) {
  let lines = string.split('\n');

  for (let i = 0; i < lines.length; i++) {
    lines[i] = i + 1 + ': ' + lines[i];
  }

  return lines.join('\n');
}

function flatten(a) {
  const arrayLen = a.length;
  const valueLen = a[0].length;
  if (valueLen === undefined) return a;
  const length = arrayLen * valueLen;
  let value = arrayCacheF32[length];
  if (!value) arrayCacheF32[length] = value = new Float32Array(length);

  for (let i = 0; i < arrayLen; i++) value.set(a[i], i * valueLen);

  return value;
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0, l = a.length; i < l; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function setArray(a, b) {
  for (let i = 0, l = a.length; i < l; i++) {
    a[i] = b[i];
  }
}

let warnCount = 0;

function warn(message) {
  if (warnCount > 100) return;
  console.warn(message);
  warnCount++;
  if (warnCount > 100) console.warn('More than 100 program warnings - stopping logs.');
}
},{}],"../node_modules/ogl/src/core/Renderer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Renderer = void 0;

var _Vec = require("../math/Vec3.js");

// TODO: Handle context loss https://www.khronos.org/webgl/wiki/HandlingContextLost
// Not automatic - devs to use these methods manually
// gl.colorMask( colorMask, colorMask, colorMask, colorMask );
// gl.clearColor( r, g, b, a );
// gl.stencilMask( stencilMask );
// gl.stencilFunc( stencilFunc, stencilRef, stencilMask );
// gl.stencilOp( stencilFail, stencilZFail, stencilZPass );
// gl.clearStencil( stencil );
const tempVec3 = new _Vec.Vec3();
let ID = 1;

class Renderer {
  constructor({
    canvas = document.createElement('canvas'),
    width = 300,
    height = 150,
    dpr = 1,
    alpha = false,
    depth = true,
    stencil = false,
    antialias = false,
    premultipliedAlpha = false,
    preserveDrawingBuffer = false,
    powerPreference = 'default',
    autoClear = true,
    webgl = 2
  } = {}) {
    const attributes = {
      alpha,
      depth,
      stencil,
      antialias,
      premultipliedAlpha,
      preserveDrawingBuffer,
      powerPreference
    };
    this.dpr = dpr;
    this.alpha = alpha;
    this.color = true;
    this.depth = depth;
    this.stencil = stencil;
    this.premultipliedAlpha = premultipliedAlpha;
    this.autoClear = autoClear;
    this.id = ID++; // Attempt WebGL2 unless forced to 1, if not supported fallback to WebGL1

    if (webgl === 2) this.gl = canvas.getContext('webgl2', attributes);
    this.isWebgl2 = !!this.gl;
    if (!this.gl) this.gl = canvas.getContext('webgl', attributes);
    if (!this.gl) console.error('unable to create webgl context'); // Attach renderer to gl so that all classes have access to internal state functions

    this.gl.renderer = this; // initialise size values

    this.setSize(width, height); // gl state stores to avoid redundant calls on methods used internally

    this.state = {};
    this.state.blendFunc = {
      src: this.gl.ONE,
      dst: this.gl.ZERO
    };
    this.state.blendEquation = {
      modeRGB: this.gl.FUNC_ADD
    };
    this.state.cullFace = null;
    this.state.frontFace = this.gl.CCW;
    this.state.depthMask = true;
    this.state.depthFunc = this.gl.LESS;
    this.state.premultiplyAlpha = false;
    this.state.flipY = false;
    this.state.unpackAlignment = 4;
    this.state.framebuffer = null;
    this.state.viewport = {
      x: 0,
      y: 0,
      width: null,
      height: null
    };
    this.state.textureUnits = [];
    this.state.activeTextureUnit = 0;
    this.state.boundBuffer = null;
    this.state.uniformLocations = new Map(); // store requested extensions

    this.extensions = {}; // Initialise extra format types

    if (this.isWebgl2) {
      this.getExtension('EXT_color_buffer_float');
      this.getExtension('OES_texture_float_linear');
    } else {
      this.getExtension('OES_texture_float');
      this.getExtension('OES_texture_float_linear');
      this.getExtension('OES_texture_half_float');
      this.getExtension('OES_texture_half_float_linear');
      this.getExtension('OES_element_index_uint');
      this.getExtension('OES_standard_derivatives');
      this.getExtension('EXT_sRGB');
      this.getExtension('WEBGL_depth_texture');
      this.getExtension('WEBGL_draw_buffers');
    }

    this.getExtension('WEBGL_compressed_texture_astc');
    this.getExtension('EXT_texture_compression_bptc');
    this.getExtension('WEBGL_compressed_texture_s3tc');
    this.getExtension('WEBGL_compressed_texture_etc1');
    this.getExtension('WEBGL_compressed_texture_pvrtc');
    this.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc'); // Create method aliases using extension (WebGL1) or native if available (WebGL2)

    this.vertexAttribDivisor = this.getExtension('ANGLE_instanced_arrays', 'vertexAttribDivisor', 'vertexAttribDivisorANGLE');
    this.drawArraysInstanced = this.getExtension('ANGLE_instanced_arrays', 'drawArraysInstanced', 'drawArraysInstancedANGLE');
    this.drawElementsInstanced = this.getExtension('ANGLE_instanced_arrays', 'drawElementsInstanced', 'drawElementsInstancedANGLE');
    this.createVertexArray = this.getExtension('OES_vertex_array_object', 'createVertexArray', 'createVertexArrayOES');
    this.bindVertexArray = this.getExtension('OES_vertex_array_object', 'bindVertexArray', 'bindVertexArrayOES');
    this.deleteVertexArray = this.getExtension('OES_vertex_array_object', 'deleteVertexArray', 'deleteVertexArrayOES');
    this.drawBuffers = this.getExtension('WEBGL_draw_buffers', 'drawBuffers', 'drawBuffersWEBGL'); // Store device parameters

    this.parameters = {};
    this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    this.parameters.maxAnisotropy = this.getExtension('EXT_texture_filter_anisotropic') ? this.gl.getParameter(this.getExtension('EXT_texture_filter_anisotropic').MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;
    this.gl.canvas.width = width * this.dpr;
    this.gl.canvas.height = height * this.dpr;
    Object.assign(this.gl.canvas.style, {
      width: width + 'px',
      height: height + 'px'
    });
  }

  setViewport(width, height, x = 0, y = 0) {
    if (this.state.viewport.width === width && this.state.viewport.height === height) return;
    this.state.viewport.width = width;
    this.state.viewport.height = height;
    this.state.viewport.x = x;
    this.state.viewport.y = y;
    this.gl.viewport(x, y, width, height);
  }

  setScissor(width, height, x = 0, y = 0) {
    this.gl.scissor(x, y, width, height);
  }

  enable(id) {
    if (this.state[id] === true) return;
    this.gl.enable(id);
    this.state[id] = true;
  }

  disable(id) {
    if (this.state[id] === false) return;
    this.gl.disable(id);
    this.state[id] = false;
  }

  setBlendFunc(src, dst, srcAlpha, dstAlpha) {
    if (this.state.blendFunc.src === src && this.state.blendFunc.dst === dst && this.state.blendFunc.srcAlpha === srcAlpha && this.state.blendFunc.dstAlpha === dstAlpha) return;
    this.state.blendFunc.src = src;
    this.state.blendFunc.dst = dst;
    this.state.blendFunc.srcAlpha = srcAlpha;
    this.state.blendFunc.dstAlpha = dstAlpha;
    if (srcAlpha !== undefined) this.gl.blendFuncSeparate(src, dst, srcAlpha, dstAlpha);else this.gl.blendFunc(src, dst);
  }

  setBlendEquation(modeRGB, modeAlpha) {
    modeRGB = modeRGB || this.gl.FUNC_ADD;
    if (this.state.blendEquation.modeRGB === modeRGB && this.state.blendEquation.modeAlpha === modeAlpha) return;
    this.state.blendEquation.modeRGB = modeRGB;
    this.state.blendEquation.modeAlpha = modeAlpha;
    if (modeAlpha !== undefined) this.gl.blendEquationSeparate(modeRGB, modeAlpha);else this.gl.blendEquation(modeRGB);
  }

  setCullFace(value) {
    if (this.state.cullFace === value) return;
    this.state.cullFace = value;
    this.gl.cullFace(value);
  }

  setFrontFace(value) {
    if (this.state.frontFace === value) return;
    this.state.frontFace = value;
    this.gl.frontFace(value);
  }

  setDepthMask(value) {
    if (this.state.depthMask === value) return;
    this.state.depthMask = value;
    this.gl.depthMask(value);
  }

  setDepthFunc(value) {
    if (this.state.depthFunc === value) return;
    this.state.depthFunc = value;
    this.gl.depthFunc(value);
  }

  activeTexture(value) {
    if (this.state.activeTextureUnit === value) return;
    this.state.activeTextureUnit = value;
    this.gl.activeTexture(this.gl.TEXTURE0 + value);
  }

  bindFramebuffer({
    target = this.gl.FRAMEBUFFER,
    buffer = null
  } = {}) {
    if (this.state.framebuffer === buffer) return;
    this.state.framebuffer = buffer;
    this.gl.bindFramebuffer(target, buffer);
  }

  getExtension(extension, webgl2Func, extFunc) {
    // if webgl2 function supported, return func bound to gl context
    if (webgl2Func && this.gl[webgl2Func]) return this.gl[webgl2Func].bind(this.gl); // fetch extension once only

    if (!this.extensions[extension]) {
      this.extensions[extension] = this.gl.getExtension(extension);
    } // return extension if no function requested


    if (!webgl2Func) return this.extensions[extension]; // Return null if extension not supported

    if (!this.extensions[extension]) return null; // return extension function, bound to extension

    return this.extensions[extension][extFunc].bind(this.extensions[extension]);
  }

  sortOpaque(a, b) {
    if (a.renderOrder !== b.renderOrder) {
      return a.renderOrder - b.renderOrder;
    } else if (a.program.id !== b.program.id) {
      return a.program.id - b.program.id;
    } else if (a.zDepth !== b.zDepth) {
      return a.zDepth - b.zDepth;
    } else {
      return b.id - a.id;
    }
  }

  sortTransparent(a, b) {
    if (a.renderOrder !== b.renderOrder) {
      return a.renderOrder - b.renderOrder;
    }

    if (a.zDepth !== b.zDepth) {
      return b.zDepth - a.zDepth;
    } else {
      return b.id - a.id;
    }
  }

  sortUI(a, b) {
    if (a.renderOrder !== b.renderOrder) {
      return a.renderOrder - b.renderOrder;
    } else if (a.program.id !== b.program.id) {
      return a.program.id - b.program.id;
    } else {
      return b.id - a.id;
    }
  }

  getRenderList({
    scene,
    camera,
    frustumCull,
    sort
  }) {
    let renderList = [];
    if (camera && frustumCull) camera.updateFrustum(); // Get visible

    scene.traverse(node => {
      if (!node.visible) return true;
      if (!node.draw) return;

      if (frustumCull && node.frustumCulled && camera) {
        if (!camera.frustumIntersectsMesh(node)) return;
      }

      renderList.push(node);
    });

    if (sort) {
      const opaque = [];
      const transparent = []; // depthTest true

      const ui = []; // depthTest false

      renderList.forEach(node => {
        // Split into the 3 render groups
        if (!node.program.transparent) {
          opaque.push(node);
        } else if (node.program.depthTest) {
          transparent.push(node);
        } else {
          ui.push(node);
        }

        node.zDepth = 0; // Only calculate z-depth if renderOrder unset and depthTest is true

        if (node.renderOrder !== 0 || !node.program.depthTest || !camera) return; // update z-depth

        node.worldMatrix.getTranslation(tempVec3);
        tempVec3.applyMatrix4(camera.projectionViewMatrix);
        node.zDepth = tempVec3.z;
      });
      opaque.sort(this.sortOpaque);
      transparent.sort(this.sortTransparent);
      ui.sort(this.sortUI);
      renderList = opaque.concat(transparent, ui);
    }

    return renderList;
  }

  render({
    scene,
    camera,
    target = null,
    update = true,
    sort = true,
    frustumCull = true,
    clear
  }) {
    if (target === null) {
      // make sure no render target bound so draws to canvas
      this.bindFramebuffer();
      this.setViewport(this.width * this.dpr, this.height * this.dpr);
    } else {
      // bind supplied render target and update viewport
      this.bindFramebuffer(target);
      this.setViewport(target.width, target.height);
    }

    if (clear || this.autoClear && clear !== false) {
      // Ensure depth buffer writing is enabled so it can be cleared
      if (this.depth && (!target || target.depth)) {
        this.enable(this.gl.DEPTH_TEST);
        this.setDepthMask(true);
      }

      this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0));
    } // updates all scene graph matrices


    if (update) scene.updateMatrixWorld(); // Update camera separately, in case not in scene graph

    if (camera) camera.updateMatrixWorld(); // Get render list - entails culling and sorting

    const renderList = this.getRenderList({
      scene,
      camera,
      frustumCull,
      sort
    });
    renderList.forEach(node => {
      node.draw({
        camera
      });
    });
  }

}

exports.Renderer = Renderer;
},{"../math/Vec3.js":"../node_modules/ogl/src/math/Vec3.js"}],"../node_modules/ogl/src/math/functions/Vec4Func.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copy = copy;
exports.set = set;
exports.add = add;
exports.scale = scale;
exports.length = length;
exports.normalize = normalize;
exports.dot = dot;
exports.lerp = lerp;
const EPSILON = 0.000001;
/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */


function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */


function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */


function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */


function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */


function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  let len = x * x + y * y + z * z + w * w;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }

  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}
/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */


function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */


function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  let aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}
},{}],"../node_modules/ogl/src/math/functions/QuatFunc.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identity = identity;
exports.setAxisAngle = setAxisAngle;
exports.multiply = multiply;
exports.rotateX = rotateX;
exports.rotateY = rotateY;
exports.rotateZ = rotateZ;
exports.slerp = slerp;
exports.invert = invert;
exports.conjugate = conjugate;
exports.fromMat3 = fromMat3;
exports.fromEuler = fromEuler;
exports.normalize = exports.length = exports.lerp = exports.dot = exports.scale = exports.add = exports.set = exports.copy = void 0;

var vec4 = _interopRequireWildcard(require("./Vec4Func.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/


function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  let s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
/**
 * Multiplies two quats
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */


function multiply(out, a, b) {
  let ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  let bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */


function rotateX(out, a, rad) {
  rad *= 0.5;
  let ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  let bx = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */


function rotateY(out, a, rad) {
  rad *= 0.5;
  let ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  let by = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */


function rotateZ(out, a, rad) {
  rad *= 0.5;
  let ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  let bz = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */


function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  let ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  let bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  let omega, cosom, sinom, scale0, scale1; // calc cosine

  cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  } // calculate coefficients


  if (1.0 - cosom > 0.000001) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  } // calculate final values


  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */


function invert(out, a) {
  let a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  let dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  let invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */


function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */


function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  let fTrace = m[0] + m[4] + m[8];
  let fRoot;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w

    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)

    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    let i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    let j = (i + 1) % 3;
    let k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}
/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} euler Angles to rotate around each axis in degrees.
 * @param {String} order detailing order of operations. Default 'XYZ'.
 * @returns {quat} out
 * @function
 */


function fromEuler(out, euler, order = 'YXZ') {
  let sx = Math.sin(euler[0] * 0.5);
  let cx = Math.cos(euler[0] * 0.5);
  let sy = Math.sin(euler[1] * 0.5);
  let cy = Math.cos(euler[1] * 0.5);
  let sz = Math.sin(euler[2] * 0.5);
  let cz = Math.cos(euler[2] * 0.5);

  if (order === 'XYZ') {
    out[0] = sx * cy * cz + cx * sy * sz;
    out[1] = cx * sy * cz - sx * cy * sz;
    out[2] = cx * cy * sz + sx * sy * cz;
    out[3] = cx * cy * cz - sx * sy * sz;
  } else if (order === 'YXZ') {
    out[0] = sx * cy * cz + cx * sy * sz;
    out[1] = cx * sy * cz - sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
  } else if (order === 'ZXY') {
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz + sx * sy * cz;
    out[3] = cx * cy * cz - sx * sy * sz;
  } else if (order === 'ZYX') {
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
  } else if (order === 'YZX') {
    out[0] = sx * cy * cz + cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz - sx * sy * sz;
  } else if (order === 'XZY') {
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz - sx * cy * sz;
    out[2] = cx * cy * sz + sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
  }

  return out;
}
/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */


const copy = vec4.copy;
/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */

exports.copy = copy;
const set = vec4.set;
/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */

exports.set = set;
const add = vec4.add;
/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */

exports.add = add;
const scale = vec4.scale;
/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

exports.scale = scale;
const dot = vec4.dot;
/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */

exports.dot = dot;
const lerp = vec4.lerp;
/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */

exports.lerp = lerp;
const length = vec4.length;
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */

exports.length = length;
const normalize = vec4.normalize;
exports.normalize = normalize;
},{"./Vec4Func.js":"../node_modules/ogl/src/math/functions/Vec4Func.js"}],"../node_modules/ogl/src/math/Quat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Quat = void 0;

var QuatFunc = _interopRequireWildcard(require("./functions/QuatFunc.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Quat extends Array {
  constructor(x = 0, y = 0, z = 0, w = 1) {
    super(x, y, z, w);

    this.onChange = () => {};

    return this;
  }

  get x() {
    return this[0];
  }

  get y() {
    return this[1];
  }

  get z() {
    return this[2];
  }

  get w() {
    return this[3];
  }

  set x(v) {
    this[0] = v;
    this.onChange();
  }

  set y(v) {
    this[1] = v;
    this.onChange();
  }

  set z(v) {
    this[2] = v;
    this.onChange();
  }

  set w(v) {
    this[3] = v;
    this.onChange();
  }

  identity() {
    QuatFunc.identity(this);
    this.onChange();
    return this;
  }

  set(x, y, z, w) {
    if (x.length) return this.copy(x);
    QuatFunc.set(this, x, y, z, w);
    this.onChange();
    return this;
  }

  rotateX(a) {
    QuatFunc.rotateX(this, this, a);
    this.onChange();
    return this;
  }

  rotateY(a) {
    QuatFunc.rotateY(this, this, a);
    this.onChange();
    return this;
  }

  rotateZ(a) {
    QuatFunc.rotateZ(this, this, a);
    this.onChange();
    return this;
  }

  inverse(q = this) {
    QuatFunc.invert(this, q);
    this.onChange();
    return this;
  }

  conjugate(q = this) {
    QuatFunc.conjugate(this, q);
    this.onChange();
    return this;
  }

  copy(q) {
    QuatFunc.copy(this, q);
    this.onChange();
    return this;
  }

  normalize(q = this) {
    QuatFunc.normalize(this, q);
    this.onChange();
    return this;
  }

  multiply(qA, qB) {
    if (qB) {
      QuatFunc.multiply(this, qA, qB);
    } else {
      QuatFunc.multiply(this, this, qA);
    }

    this.onChange();
    return this;
  }

  dot(v) {
    return QuatFunc.dot(this, v);
  }

  fromMatrix3(matrix3) {
    QuatFunc.fromMat3(this, matrix3);
    this.onChange();
    return this;
  }

  fromEuler(euler) {
    QuatFunc.fromEuler(this, euler, euler.order);
    return this;
  }

  fromAxisAngle(axis, a) {
    QuatFunc.setAxisAngle(this, axis, a);
    return this;
  }

  slerp(q, t) {
    QuatFunc.slerp(this, this, q, t);
    return this;
  }

  fromArray(a, o = 0) {
    this[0] = a[o];
    this[1] = a[o + 1];
    this[2] = a[o + 2];
    this[3] = a[o + 3];
    return this;
  }

  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    a[o + 2] = this[2];
    a[o + 3] = this[3];
    return a;
  }

}

exports.Quat = Quat;
},{"./functions/QuatFunc.js":"../node_modules/ogl/src/math/functions/QuatFunc.js"}],"../node_modules/ogl/src/math/functions/Mat4Func.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copy = copy;
exports.set = set;
exports.identity = identity;
exports.transpose = transpose;
exports.invert = invert;
exports.determinant = determinant;
exports.multiply = multiply;
exports.translate = translate;
exports.scale = scale;
exports.rotate = rotate;
exports.getTranslation = getTranslation;
exports.getScaling = getScaling;
exports.getMaxScaleOnAxis = getMaxScaleOnAxis;
exports.fromRotationTranslationScale = fromRotationTranslationScale;
exports.fromQuat = fromQuat;
exports.perspective = perspective;
exports.ortho = ortho;
exports.targetTo = targetTo;
exports.add = add;
exports.subtract = subtract;
exports.multiplyScalar = multiplyScalar;
exports.getRotation = void 0;
const EPSILON = 0.000001;
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */


function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */


function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */


function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    let a12 = a[6],
        a13 = a[7];
    let a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */


function invert(out, a) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  let a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  let a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  let a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */


function determinant(a) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  let a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  let a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  let a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */


function multiply(out, a, b) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  let a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  let a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  let a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  let b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */


function translate(out, a, v) {
  let x = v[0],
      y = v[1],
      z = v[2];
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/


function scale(out, a, v) {
  let x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */


function rotate(out, a, rad, axis) {
  let x = axis[0],
      y = axis[1],
      z = axis[2];
  let len = Math.hypot(x, y, z);
  let s, c, t;
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;
  let b00, b01, b02;
  let b10, b11, b12;
  let b20, b21, b22;

  if (Math.abs(len) < EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */


function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */


function getScaling(out, mat) {
  let m11 = mat[0];
  let m12 = mat[1];
  let m13 = mat[2];
  let m21 = mat[4];
  let m22 = mat[5];
  let m23 = mat[6];
  let m31 = mat[8];
  let m32 = mat[9];
  let m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}

function getMaxScaleOnAxis(mat) {
  let m11 = mat[0];
  let m12 = mat[1];
  let m13 = mat[2];
  let m21 = mat[4];
  let m22 = mat[5];
  let m23 = mat[6];
  let m31 = mat[8];
  let m32 = mat[9];
  let m33 = mat[10];
  const x = m11 * m11 + m12 * m12 + m13 * m13;
  const y = m21 * m21 + m22 * m22 + m23 * m23;
  const z = m31 * m31 + m32 * m32 + m33 * m33;
  return Math.sqrt(Math.max(x, y, z));
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */


const getRotation = function () {
  const temp = [0, 0, 0];
  return function (out, mat) {
    let scaling = temp;
    getScaling(scaling, mat);
    let is1 = 1 / scaling[0];
    let is2 = 1 / scaling[1];
    let is3 = 1 / scaling[2];
    let sm11 = mat[0] * is1;
    let sm12 = mat[1] * is2;
    let sm13 = mat[2] * is3;
    let sm21 = mat[4] * is1;
    let sm22 = mat[5] * is2;
    let sm23 = mat[6] * is3;
    let sm31 = mat[8] * is1;
    let sm32 = mat[9] * is2;
    let sm33 = mat[10] * is3;
    let trace = sm11 + sm22 + sm33;
    let S = 0;

    if (trace > 0) {
      S = Math.sqrt(trace + 1.0) * 2;
      out[3] = 0.25 * S;
      out[0] = (sm23 - sm32) / S;
      out[1] = (sm31 - sm13) / S;
      out[2] = (sm12 - sm21) / S;
    } else if (sm11 > sm22 && sm11 > sm33) {
      S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
      out[3] = (sm23 - sm32) / S;
      out[0] = 0.25 * S;
      out[1] = (sm12 + sm21) / S;
      out[2] = (sm31 + sm13) / S;
    } else if (sm22 > sm33) {
      S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
      out[3] = (sm31 - sm13) / S;
      out[0] = (sm12 + sm21) / S;
      out[1] = 0.25 * S;
      out[2] = (sm23 + sm32) / S;
    } else {
      S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
      out[3] = (sm12 - sm21) / S;
      out[0] = (sm31 + sm13) / S;
      out[1] = (sm23 + sm32) / S;
      out[2] = 0.25 * S;
    }

    return out;
  };
}();
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */


exports.getRotation = getRotation;

function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  let x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;
  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;
  let sx = s[0];
  let sy = s[1];
  let sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */


function fromQuat(out, q) {
  let x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;
  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */


function perspective(out, fovy, aspect, near, far) {
  let f = 1.0 / Math.tan(fovy / 2);
  let nf = 1 / (near - far);
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = 2 * far * near * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */


function ortho(out, left, right, bottom, top, near, far) {
  let lr = 1 / (left - right);
  let bt = 1 / (bottom - top);
  let nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} target Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */


function targetTo(out, eye, target, up) {
  let eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];
  let z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];
  let len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len === 0) {
    // eye and target are in the same position
    z2 = 1;
  } else {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  let x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len === 0) {
    // up and z are parallel
    if (upz) {
      upx += 1e-6;
    } else if (upy) {
      upz += 1e-6;
    } else {
      upy += 1e-6;
    }

    x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
    len = x0 * x0 + x1 * x1 + x2 * x2;
  }

  len = 1 / Math.sqrt(len);
  x0 *= len;
  x1 *= len;
  x2 *= len;
  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */


function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */


function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */


function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
},{}],"../node_modules/ogl/src/math/Mat4.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mat4 = void 0;

var Mat4Func = _interopRequireWildcard(require("./functions/Mat4Func.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Mat4 extends Array {
  constructor(m00 = 1, m01 = 0, m02 = 0, m03 = 0, m10 = 0, m11 = 1, m12 = 0, m13 = 0, m20 = 0, m21 = 0, m22 = 1, m23 = 0, m30 = 0, m31 = 0, m32 = 0, m33 = 1) {
    super(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
    return this;
  }

  get x() {
    return this[12];
  }

  get y() {
    return this[13];
  }

  get z() {
    return this[14];
  }

  get w() {
    return this[15];
  }

  set x(v) {
    this[12] = v;
  }

  set y(v) {
    this[13] = v;
  }

  set z(v) {
    this[14] = v;
  }

  set w(v) {
    this[15] = v;
  }

  set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    if (m00.length) return this.copy(m00);
    Mat4Func.set(this, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
    return this;
  }

  translate(v, m = this) {
    Mat4Func.translate(this, m, v);
    return this;
  }

  rotate(v, axis, m = this) {
    Mat4Func.rotate(this, m, v, axis);
    return this;
  }

  scale(v, m = this) {
    Mat4Func.scale(this, m, typeof v === 'number' ? [v, v, v] : v);
    return this;
  }

  multiply(ma, mb) {
    if (mb) {
      Mat4Func.multiply(this, ma, mb);
    } else {
      Mat4Func.multiply(this, this, ma);
    }

    return this;
  }

  identity() {
    Mat4Func.identity(this);
    return this;
  }

  copy(m) {
    Mat4Func.copy(this, m);
    return this;
  }

  fromPerspective({
    fov,
    aspect,
    near,
    far
  } = {}) {
    Mat4Func.perspective(this, fov, aspect, near, far);
    return this;
  }

  fromOrthogonal({
    left,
    right,
    bottom,
    top,
    near,
    far
  }) {
    Mat4Func.ortho(this, left, right, bottom, top, near, far);
    return this;
  }

  fromQuaternion(q) {
    Mat4Func.fromQuat(this, q);
    return this;
  }

  setPosition(v) {
    this.x = v[0];
    this.y = v[1];
    this.z = v[2];
    return this;
  }

  inverse(m = this) {
    Mat4Func.invert(this, m);
    return this;
  }

  compose(q, pos, scale) {
    Mat4Func.fromRotationTranslationScale(this, q, pos, scale);
    return this;
  }

  getRotation(q) {
    Mat4Func.getRotation(q, this);
    return this;
  }

  getTranslation(pos) {
    Mat4Func.getTranslation(pos, this);
    return this;
  }

  getScaling(scale) {
    Mat4Func.getScaling(scale, this);
    return this;
  }

  getMaxScaleOnAxis() {
    return Mat4Func.getMaxScaleOnAxis(this);
  }

  lookAt(eye, target, up) {
    Mat4Func.targetTo(this, eye, target, up);
    return this;
  }

  determinant() {
    return Mat4Func.determinant(this);
  }

  fromArray(a, o = 0) {
    this[0] = a[o];
    this[1] = a[o + 1];
    this[2] = a[o + 2];
    this[3] = a[o + 3];
    this[4] = a[o + 4];
    this[5] = a[o + 5];
    this[6] = a[o + 6];
    this[7] = a[o + 7];
    this[8] = a[o + 8];
    this[9] = a[o + 9];
    this[10] = a[o + 10];
    this[11] = a[o + 11];
    this[12] = a[o + 12];
    this[13] = a[o + 13];
    this[14] = a[o + 14];
    this[15] = a[o + 15];
    return this;
  }

  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    a[o + 2] = this[2];
    a[o + 3] = this[3];
    a[o + 4] = this[4];
    a[o + 5] = this[5];
    a[o + 6] = this[6];
    a[o + 7] = this[7];
    a[o + 8] = this[8];
    a[o + 9] = this[9];
    a[o + 10] = this[10];
    a[o + 11] = this[11];
    a[o + 12] = this[12];
    a[o + 13] = this[13];
    a[o + 14] = this[14];
    a[o + 15] = this[15];
    return a;
  }

}

exports.Mat4 = Mat4;
},{"./functions/Mat4Func.js":"../node_modules/ogl/src/math/functions/Mat4Func.js"}],"../node_modules/ogl/src/math/functions/EulerFunc.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromRotationMatrix = fromRotationMatrix;

// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
function fromRotationMatrix(out, m, order = 'YXZ') {
  if (order === 'XYZ') {
    out[1] = Math.asin(Math.min(Math.max(m[8], -1), 1));

    if (Math.abs(m[8]) < 0.99999) {
      out[0] = Math.atan2(-m[9], m[10]);
      out[2] = Math.atan2(-m[4], m[0]);
    } else {
      out[0] = Math.atan2(m[6], m[5]);
      out[2] = 0;
    }
  } else if (order === 'YXZ') {
    out[0] = Math.asin(-Math.min(Math.max(m[9], -1), 1));

    if (Math.abs(m[9]) < 0.99999) {
      out[1] = Math.atan2(m[8], m[10]);
      out[2] = Math.atan2(m[1], m[5]);
    } else {
      out[1] = Math.atan2(-m[2], m[0]);
      out[2] = 0;
    }
  } else if (order === 'ZXY') {
    out[0] = Math.asin(Math.min(Math.max(m[6], -1), 1));

    if (Math.abs(m[6]) < 0.99999) {
      out[1] = Math.atan2(-m[2], m[10]);
      out[2] = Math.atan2(-m[4], m[5]);
    } else {
      out[1] = 0;
      out[2] = Math.atan2(m[1], m[0]);
    }
  } else if (order === 'ZYX') {
    out[1] = Math.asin(-Math.min(Math.max(m[2], -1), 1));

    if (Math.abs(m[2]) < 0.99999) {
      out[0] = Math.atan2(m[6], m[10]);
      out[2] = Math.atan2(m[1], m[0]);
    } else {
      out[0] = 0;
      out[2] = Math.atan2(-m[4], m[5]);
    }
  } else if (order === 'YZX') {
    out[2] = Math.asin(Math.min(Math.max(m[1], -1), 1));

    if (Math.abs(m[1]) < 0.99999) {
      out[0] = Math.atan2(-m[9], m[5]);
      out[1] = Math.atan2(-m[2], m[0]);
    } else {
      out[0] = 0;
      out[1] = Math.atan2(m[8], m[10]);
    }
  } else if (order === 'XZY') {
    out[2] = Math.asin(-Math.min(Math.max(m[4], -1), 1));

    if (Math.abs(m[4]) < 0.99999) {
      out[0] = Math.atan2(m[6], m[5]);
      out[1] = Math.atan2(m[8], m[0]);
    } else {
      out[0] = Math.atan2(-m[9], m[10]);
      out[1] = 0;
    }
  }

  return out;
}
},{}],"../node_modules/ogl/src/math/Euler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Euler = void 0;

var EulerFunc = _interopRequireWildcard(require("./functions/EulerFunc.js"));

var _Mat = require("./Mat4.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const tmpMat4 = new _Mat.Mat4();

class Euler extends Array {
  constructor(x = 0, y = x, z = x, order = 'YXZ') {
    super(x, y, z);
    this.order = order;

    this.onChange = () => {};

    return this;
  }

  get x() {
    return this[0];
  }

  get y() {
    return this[1];
  }

  get z() {
    return this[2];
  }

  set x(v) {
    this[0] = v;
    this.onChange();
  }

  set y(v) {
    this[1] = v;
    this.onChange();
  }

  set z(v) {
    this[2] = v;
    this.onChange();
  }

  set(x, y = x, z = x) {
    if (x.length) return this.copy(x);
    this[0] = x;
    this[1] = y;
    this[2] = z;
    this.onChange();
    return this;
  }

  copy(v) {
    this[0] = v[0];
    this[1] = v[1];
    this[2] = v[2];
    this.onChange();
    return this;
  }

  reorder(order) {
    this.order = order;
    this.onChange();
    return this;
  }

  fromRotationMatrix(m, order = this.order) {
    EulerFunc.fromRotationMatrix(this, m, order);
    return this;
  }

  fromQuaternion(q, order = this.order) {
    tmpMat4.fromQuaternion(q);
    return this.fromRotationMatrix(tmpMat4, order);
  }

  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    a[o + 2] = this[2];
    return a;
  }

}

exports.Euler = Euler;
},{"./functions/EulerFunc.js":"../node_modules/ogl/src/math/functions/EulerFunc.js","./Mat4.js":"../node_modules/ogl/src/math/Mat4.js"}],"../node_modules/ogl/src/core/Transform.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transform = void 0;

var _Vec = require("../math/Vec3.js");

var _Quat = require("../math/Quat.js");

var _Mat = require("../math/Mat4.js");

var _Euler = require("../math/Euler.js");

class Transform {
  constructor() {
    this.parent = null;
    this.children = [];
    this.visible = true;
    this.matrix = new _Mat.Mat4();
    this.worldMatrix = new _Mat.Mat4();
    this.matrixAutoUpdate = true;
    this.position = new _Vec.Vec3();
    this.quaternion = new _Quat.Quat();
    this.scale = new _Vec.Vec3(1);
    this.rotation = new _Euler.Euler();
    this.up = new _Vec.Vec3(0, 1, 0);

    this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation);

    this.quaternion.onChange = () => this.rotation.fromQuaternion(this.quaternion);
  }

  setParent(parent, notifyParent = true) {
    if (this.parent && parent !== this.parent) this.parent.removeChild(this, false);
    this.parent = parent;
    if (notifyParent && parent) parent.addChild(this, false);
  }

  addChild(child, notifyChild = true) {
    if (!~this.children.indexOf(child)) this.children.push(child);
    if (notifyChild) child.setParent(this, false);
  }

  removeChild(child, notifyChild = true) {
    if (!!~this.children.indexOf(child)) this.children.splice(this.children.indexOf(child), 1);
    if (notifyChild) child.setParent(null, false);
  }

  updateMatrixWorld(force) {
    if (this.matrixAutoUpdate) this.updateMatrix();

    if (this.worldMatrixNeedsUpdate || force) {
      if (this.parent === null) this.worldMatrix.copy(this.matrix);else this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix);
      this.worldMatrixNeedsUpdate = false;
      force = true;
    }

    for (let i = 0, l = this.children.length; i < l; i++) {
      this.children[i].updateMatrixWorld(force);
    }
  }

  updateMatrix() {
    this.matrix.compose(this.quaternion, this.position, this.scale);
    this.worldMatrixNeedsUpdate = true;
  }

  traverse(callback) {
    // Return true in callback to stop traversing children
    if (callback(this)) return;

    for (let i = 0, l = this.children.length; i < l; i++) {
      this.children[i].traverse(callback);
    }
  }

  decompose() {
    this.matrix.getTranslation(this.position);
    this.matrix.getRotation(this.quaternion);
    this.matrix.getScaling(this.scale);
    this.rotation.fromQuaternion(this.quaternion);
  }

  lookAt(target, invert = false) {
    if (invert) this.matrix.lookAt(this.position, target, this.up);else this.matrix.lookAt(target, this.position, this.up);
    this.matrix.getRotation(this.quaternion);
    this.rotation.fromQuaternion(this.quaternion);
  }

}

exports.Transform = Transform;
},{"../math/Vec3.js":"../node_modules/ogl/src/math/Vec3.js","../math/Quat.js":"../node_modules/ogl/src/math/Quat.js","../math/Mat4.js":"../node_modules/ogl/src/math/Mat4.js","../math/Euler.js":"../node_modules/ogl/src/math/Euler.js"}],"../node_modules/ogl/src/core/Camera.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Camera = void 0;

var _Transform = require("./Transform.js");

var _Mat = require("../math/Mat4.js");

var _Vec = require("../math/Vec3.js");

const tempMat4 = new _Mat.Mat4();
const tempVec3a = new _Vec.Vec3();
const tempVec3b = new _Vec.Vec3();

class Camera extends _Transform.Transform {
  constructor(gl, {
    near = 0.1,
    far = 100,
    fov = 45,
    aspect = 1,
    left,
    right,
    bottom,
    top,
    zoom = 1
  } = {}) {
    super();
    Object.assign(this, {
      near,
      far,
      fov,
      aspect,
      left,
      right,
      bottom,
      top,
      zoom
    });
    this.projectionMatrix = new _Mat.Mat4();
    this.viewMatrix = new _Mat.Mat4();
    this.projectionViewMatrix = new _Mat.Mat4();
    this.worldPosition = new _Vec.Vec3(); // Use orthographic if left/right set, else default to perspective camera

    this.type = left || right ? 'orthographic' : 'perspective';
    if (this.type === 'orthographic') this.orthographic();else this.perspective();
  }

  perspective({
    near = this.near,
    far = this.far,
    fov = this.fov,
    aspect = this.aspect
  } = {}) {
    Object.assign(this, {
      near,
      far,
      fov,
      aspect
    });
    this.projectionMatrix.fromPerspective({
      fov: fov * (Math.PI / 180),
      aspect,
      near,
      far
    });
    this.type = 'perspective';
    return this;
  }

  orthographic({
    near = this.near,
    far = this.far,
    left = this.left,
    right = this.right,
    bottom = this.bottom,
    top = this.top,
    zoom = this.zoom
  } = {}) {
    Object.assign(this, {
      near,
      far,
      left,
      right,
      bottom,
      top,
      zoom
    });
    left /= zoom;
    right /= zoom;
    bottom /= zoom;
    top /= zoom;
    this.projectionMatrix.fromOrthogonal({
      left,
      right,
      bottom,
      top,
      near,
      far
    });
    this.type = 'orthographic';
    return this;
  }

  updateMatrixWorld() {
    super.updateMatrixWorld();
    this.viewMatrix.inverse(this.worldMatrix);
    this.worldMatrix.getTranslation(this.worldPosition); // used for sorting

    this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix);
    return this;
  }

  lookAt(target) {
    super.lookAt(target, true);
    return this;
  } // Project 3D coordinate to 2D point


  project(v) {
    v.applyMatrix4(this.viewMatrix);
    v.applyMatrix4(this.projectionMatrix);
    return this;
  } // Unproject 2D point to 3D coordinate


  unproject(v) {
    v.applyMatrix4(tempMat4.inverse(this.projectionMatrix));
    v.applyMatrix4(this.worldMatrix);
    return this;
  }

  updateFrustum() {
    if (!this.frustum) {
      this.frustum = [new _Vec.Vec3(), new _Vec.Vec3(), new _Vec.Vec3(), new _Vec.Vec3(), new _Vec.Vec3(), new _Vec.Vec3()];
    }

    const m = this.projectionViewMatrix;
    this.frustum[0].set(m[3] - m[0], m[7] - m[4], m[11] - m[8]).constant = m[15] - m[12]; // -x

    this.frustum[1].set(m[3] + m[0], m[7] + m[4], m[11] + m[8]).constant = m[15] + m[12]; // +x

    this.frustum[2].set(m[3] + m[1], m[7] + m[5], m[11] + m[9]).constant = m[15] + m[13]; // +y

    this.frustum[3].set(m[3] - m[1], m[7] - m[5], m[11] - m[9]).constant = m[15] - m[13]; // -y

    this.frustum[4].set(m[3] - m[2], m[7] - m[6], m[11] - m[10]).constant = m[15] - m[14]; // +z (far)

    this.frustum[5].set(m[3] + m[2], m[7] + m[6], m[11] + m[10]).constant = m[15] + m[14]; // -z (near)

    for (let i = 0; i < 6; i++) {
      const invLen = 1.0 / this.frustum[i].distance();
      this.frustum[i].multiply(invLen);
      this.frustum[i].constant *= invLen;
    }
  }

  frustumIntersectsMesh(node) {
    // If no position attribute, treat as frustumCulled false
    if (!node.geometry.attributes.position) return true;
    if (!node.geometry.bounds || node.geometry.bounds.radius === Infinity) node.geometry.computeBoundingSphere();
    if (!node.geometry.bounds) return true;
    const center = tempVec3a;
    center.copy(node.geometry.bounds.center);
    center.applyMatrix4(node.worldMatrix);
    const radius = node.geometry.bounds.radius * node.worldMatrix.getMaxScaleOnAxis();
    return this.frustumIntersectsSphere(center, radius);
  }

  frustumIntersectsSphere(center, radius) {
    const normal = tempVec3b;

    for (let i = 0; i < 6; i++) {
      const plane = this.frustum[i];
      const distance = normal.copy(plane).dot(center) + plane.constant;
      if (distance < -radius) return false;
    }

    return true;
  }

}

exports.Camera = Camera;
},{"./Transform.js":"../node_modules/ogl/src/core/Transform.js","../math/Mat4.js":"../node_modules/ogl/src/math/Mat4.js","../math/Vec3.js":"../node_modules/ogl/src/math/Vec3.js"}],"../node_modules/ogl/src/math/functions/Mat3Func.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromMat4 = fromMat4;
exports.fromQuat = fromQuat;
exports.copy = copy;
exports.set = set;
exports.identity = identity;
exports.transpose = transpose;
exports.invert = invert;
exports.determinant = determinant;
exports.multiply = multiply;
exports.translate = translate;
exports.rotate = rotate;
exports.scale = scale;
exports.normalFromMat4 = normalFromMat4;
exports.projection = projection;
exports.add = add;
exports.subtract = subtract;
exports.multiplyScalar = multiplyScalar;
const EPSILON = 0.000001;
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */

function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
 */


function fromQuat(out, q) {
  let x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;
  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */


function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */


function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */


function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */


function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */


function invert(out, a) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  let a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  let a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  let b01 = a22 * a11 - a12 * a21;
  let b11 = -a22 * a10 + a12 * a20;
  let b21 = a21 * a10 - a11 * a20; // Calculate the determinant

  let det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */


function determinant(a) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  let a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  let a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */


function multiply(out, a, b) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  let a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  let a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  let b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  let b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  let b20 = b[6],
      b21 = b[7],
      b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */


function translate(out, a, v) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */


function rotate(out, a, rad) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/


function scale(out, a, v) {
  let x = v[0],
      y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {mat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */


function normalFromMat4(out, a) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  let a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  let a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  let a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */


function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */


function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */


function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */


function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}
},{}],"../node_modules/ogl/src/math/Mat3.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mat3 = void 0;

var Mat3Func = _interopRequireWildcard(require("./functions/Mat3Func.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Mat3 extends Array {
  constructor(m00 = 1, m01 = 0, m02 = 0, m10 = 0, m11 = 1, m12 = 0, m20 = 0, m21 = 0, m22 = 1) {
    super(m00, m01, m02, m10, m11, m12, m20, m21, m22);
    return this;
  }

  set(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    if (m00.length) return this.copy(m00);
    Mat3Func.set(this, m00, m01, m02, m10, m11, m12, m20, m21, m22);
    return this;
  }

  translate(v, m = this) {
    Mat3Func.translate(this, m, v);
    return this;
  }

  rotate(v, m = this) {
    Mat3Func.rotate(this, m, v);
    return this;
  }

  scale(v, m = this) {
    Mat3Func.scale(this, m, v);
    return this;
  }

  multiply(ma, mb) {
    if (mb) {
      Mat3Func.multiply(this, ma, mb);
    } else {
      Mat3Func.multiply(this, this, ma);
    }

    return this;
  }

  identity() {
    Mat3Func.identity(this);
    return this;
  }

  copy(m) {
    Mat3Func.copy(this, m);
    return this;
  }

  fromMatrix4(m) {
    Mat3Func.fromMat4(this, m);
    return this;
  }

  fromQuaternion(q) {
    Mat3Func.fromQuat(this, q);
    return this;
  }

  fromBasis(vec3a, vec3b, vec3c) {
    this.set(vec3a[0], vec3a[1], vec3a[2], vec3b[0], vec3b[1], vec3b[2], vec3c[0], vec3c[1], vec3c[2]);
    return this;
  }

  inverse(m = this) {
    Mat3Func.invert(this, m);
    return this;
  }

  getNormalMatrix(m) {
    Mat3Func.normalFromMat4(this, m);
    return this;
  }

}

exports.Mat3 = Mat3;
},{"./functions/Mat3Func.js":"../node_modules/ogl/src/math/functions/Mat3Func.js"}],"../node_modules/ogl/src/core/Mesh.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mesh = void 0;

var _Transform = require("./Transform.js");

var _Mat = require("../math/Mat3.js");

var _Mat2 = require("../math/Mat4.js");

let ID = 0;

class Mesh extends _Transform.Transform {
  constructor(gl, {
    geometry,
    program,
    mode = gl.TRIANGLES,
    frustumCulled = true,
    renderOrder = 0
  } = {}) {
    super();
    if (!gl.canvas) console.error('gl not passed as first argument to Mesh');
    this.gl = gl;
    this.id = ID++;
    this.geometry = geometry;
    this.program = program;
    this.mode = mode; // Used to skip frustum culling

    this.frustumCulled = frustumCulled; // Override sorting to force an order

    this.renderOrder = renderOrder;
    this.modelViewMatrix = new _Mat2.Mat4();
    this.normalMatrix = new _Mat.Mat3();
    this.beforeRenderCallbacks = [];
    this.afterRenderCallbacks = [];
  }

  onBeforeRender(f) {
    this.beforeRenderCallbacks.push(f);
    return this;
  }

  onAfterRender(f) {
    this.afterRenderCallbacks.push(f);
    return this;
  }

  draw({
    camera
  } = {}) {
    this.beforeRenderCallbacks.forEach(f => f && f({
      mesh: this,
      camera
    }));

    if (camera) {
      // Add empty matrix uniforms to program if unset
      if (!this.program.uniforms.modelMatrix) {
        Object.assign(this.program.uniforms, {
          modelMatrix: {
            value: null
          },
          viewMatrix: {
            value: null
          },
          modelViewMatrix: {
            value: null
          },
          normalMatrix: {
            value: null
          },
          projectionMatrix: {
            value: null
          },
          cameraPosition: {
            value: null
          }
        });
      } // Set the matrix uniforms


      this.program.uniforms.projectionMatrix.value = camera.projectionMatrix;
      this.program.uniforms.cameraPosition.value = camera.worldPosition;
      this.program.uniforms.viewMatrix.value = camera.viewMatrix;
      this.modelViewMatrix.multiply(camera.viewMatrix, this.worldMatrix);
      this.normalMatrix.getNormalMatrix(this.modelViewMatrix);
      this.program.uniforms.modelMatrix.value = this.worldMatrix;
      this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix;
      this.program.uniforms.normalMatrix.value = this.normalMatrix;
    } // determine if faces need to be flipped - when mesh scaled negatively


    let flipFaces = this.program.cullFace && this.worldMatrix.determinant() < 0;
    this.program.use({
      flipFaces
    });
    this.geometry.draw({
      mode: this.mode,
      program: this.program
    });
    this.afterRenderCallbacks.forEach(f => f && f({
      mesh: this,
      camera
    }));
  }

}

exports.Mesh = Mesh;
},{"./Transform.js":"../node_modules/ogl/src/core/Transform.js","../math/Mat3.js":"../node_modules/ogl/src/math/Mat3.js","../math/Mat4.js":"../node_modules/ogl/src/math/Mat4.js"}],"../node_modules/ogl/src/core/Texture.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Texture = void 0;
// TODO: delete texture
// TODO: use texSubImage2D for updates (video or when loaded)
// TODO: need? encoding = linearEncoding
// TODO: support non-compressed mipmaps uploads
const emptyPixel = new Uint8Array(4);

function isPowerOf2(value) {
  return (value & value - 1) === 0;
}

let ID = 1;

class Texture {
  constructor(gl, {
    image,
    target = gl.TEXTURE_2D,
    type = gl.UNSIGNED_BYTE,
    format = gl.RGBA,
    internalFormat = format,
    wrapS = gl.CLAMP_TO_EDGE,
    wrapT = gl.CLAMP_TO_EDGE,
    generateMipmaps = true,
    minFilter = generateMipmaps ? gl.NEAREST_MIPMAP_LINEAR : gl.LINEAR,
    magFilter = gl.LINEAR,
    premultiplyAlpha = false,
    unpackAlignment = 4,
    flipY = target == gl.TEXTURE_2D ? true : false,
    anisotropy = 0,
    level = 0,
    width,
    // used for RenderTargets or Data Textures
    height = width
  } = {}) {
    this.gl = gl;
    this.id = ID++;
    this.image = image;
    this.target = target;
    this.type = type;
    this.format = format;
    this.internalFormat = internalFormat;
    this.minFilter = minFilter;
    this.magFilter = magFilter;
    this.wrapS = wrapS;
    this.wrapT = wrapT;
    this.generateMipmaps = generateMipmaps;
    this.premultiplyAlpha = premultiplyAlpha;
    this.unpackAlignment = unpackAlignment;
    this.flipY = flipY;
    this.anisotropy = Math.min(anisotropy, this.gl.renderer.parameters.maxAnisotropy);
    this.level = level;
    this.width = width;
    this.height = height;
    this.texture = this.gl.createTexture();
    this.store = {
      image: null
    }; // Alias for state store to avoid redundant calls for global state

    this.glState = this.gl.renderer.state; // State store to avoid redundant calls for per-texture state

    this.state = {};
    this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR;
    this.state.magFilter = this.gl.LINEAR;
    this.state.wrapS = this.gl.REPEAT;
    this.state.wrapT = this.gl.REPEAT;
    this.state.anisotropy = 0;
  }

  bind() {
    // Already bound to active texture unit
    if (this.glState.textureUnits[this.glState.activeTextureUnit] === this.id) return;
    this.gl.bindTexture(this.target, this.texture);
    this.glState.textureUnits[this.glState.activeTextureUnit] = this.id;
  }

  update(textureUnit = 0) {
    const needsUpdate = !(this.image === this.store.image && !this.needsUpdate); // Make sure that texture is bound to its texture unit

    if (needsUpdate || this.glState.textureUnits[textureUnit] !== this.id) {
      // set active texture unit to perform texture functions
      this.gl.renderer.activeTexture(textureUnit);
      this.bind();
    }

    if (!needsUpdate) return;
    this.needsUpdate = false;

    if (this.flipY !== this.glState.flipY) {
      this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY);
      this.glState.flipY = this.flipY;
    }

    if (this.premultiplyAlpha !== this.glState.premultiplyAlpha) {
      this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
      this.glState.premultiplyAlpha = this.premultiplyAlpha;
    }

    if (this.unpackAlignment !== this.glState.unpackAlignment) {
      this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment);
      this.glState.unpackAlignment = this.unpackAlignment;
    }

    if (this.minFilter !== this.state.minFilter) {
      this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter);
      this.state.minFilter = this.minFilter;
    }

    if (this.magFilter !== this.state.magFilter) {
      this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter);
      this.state.magFilter = this.magFilter;
    }

    if (this.wrapS !== this.state.wrapS) {
      this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS);
      this.state.wrapS = this.wrapS;
    }

    if (this.wrapT !== this.state.wrapT) {
      this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT);
      this.state.wrapT = this.wrapT;
    }

    if (this.anisotropy && this.anisotropy !== this.state.anisotropy) {
      this.gl.texParameterf(this.target, this.gl.renderer.getExtension('EXT_texture_filter_anisotropic').TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy);
      this.state.anisotropy = this.anisotropy;
    }

    if (this.image) {
      if (this.image.width) {
        this.width = this.image.width;
        this.height = this.image.height;
      }

      if (this.target === this.gl.TEXTURE_CUBE_MAP) {
        // For cube maps
        for (let i = 0; i < 6; i++) {
          this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, this.level, this.internalFormat, this.format, this.type, this.image[i]);
        }
      } else if (ArrayBuffer.isView(this.image)) {
        // Data texture
        this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
      } else if (this.image.isCompressedTexture) {
        // Compressed texture
        for (let level = 0; level < this.image.length; level++) {
          this.gl.compressedTexImage2D(this.target, level, this.internalFormat, this.image[level].width, this.image[level].height, 0, this.image[level].data);
        }
      } else {
        // Regular texture
        this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
      }

      if (this.generateMipmaps) {
        // For WebGL1, if not a power of 2, turn off mips, set wrapping to clamp to edge and minFilter to linear
        if (!this.gl.renderer.isWebgl2 && (!isPowerOf2(this.image.width) || !isPowerOf2(this.image.height))) {
          this.generateMipmaps = false;
          this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE;
          this.minFilter = this.gl.LINEAR;
        } else {
          this.gl.generateMipmap(this.target);
        }
      } // Callback for when data is pushed to GPU


      this.onUpdate && this.onUpdate();
    } else {
      if (this.target === this.gl.TEXTURE_CUBE_MAP) {
        // Upload empty pixel for each side while no image to avoid errors while image or video loading
        for (let i = 0; i < 6; i++) {
          this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, emptyPixel);
        }
      } else if (this.width) {
        // image intentionally left null for RenderTarget
        this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null);
      } else {
        // Upload empty pixel if no image to avoid errors while image or video loading
        this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, emptyPixel);
      }
    }

    this.store.image = this.image;
  }

}

exports.Texture = Texture;
},{}],"../node_modules/ogl/src/core/RenderTarget.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderTarget = void 0;

var _Texture = require("./Texture.js");

// TODO: test stencil and depth
class RenderTarget {
  constructor(gl, {
    width = gl.canvas.width,
    height = gl.canvas.height,
    target = gl.FRAMEBUFFER,
    color = 1,
    // number of color attachments
    depth = true,
    stencil = false,
    depthTexture = false,
    // note - stencil breaks
    wrapS = gl.CLAMP_TO_EDGE,
    wrapT = gl.CLAMP_TO_EDGE,
    minFilter = gl.LINEAR,
    magFilter = minFilter,
    type = gl.UNSIGNED_BYTE,
    format = gl.RGBA,
    internalFormat = format,
    unpackAlignment,
    premultiplyAlpha
  } = {}) {
    this.gl = gl;
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.buffer = this.gl.createFramebuffer();
    this.target = target;
    this.gl.bindFramebuffer(this.target, this.buffer);
    this.textures = [];
    const drawBuffers = []; // create and attach required num of color textures

    for (let i = 0; i < color; i++) {
      this.textures.push(new _Texture.Texture(gl, {
        width,
        height,
        wrapS,
        wrapT,
        minFilter,
        magFilter,
        type,
        format,
        internalFormat,
        unpackAlignment,
        premultiplyAlpha,
        flipY: false,
        generateMipmaps: false
      }));
      this.textures[i].update();
      this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + i, this.gl.TEXTURE_2D, this.textures[i].texture, 0
      /* level */
      );
      drawBuffers.push(this.gl.COLOR_ATTACHMENT0 + i);
    } // For multi-render targets shader access


    if (drawBuffers.length > 1) this.gl.renderer.drawBuffers(drawBuffers); // alias for majority of use cases

    this.texture = this.textures[0]; // note depth textures break stencil - so can't use together

    if (depthTexture && (this.gl.renderer.isWebgl2 || this.gl.renderer.getExtension('WEBGL_depth_texture'))) {
      this.depthTexture = new _Texture.Texture(gl, {
        width,
        height,
        minFilter: this.gl.NEAREST,
        magFilter: this.gl.NEAREST,
        format: this.gl.DEPTH_COMPONENT,
        internalFormat: gl.renderer.isWebgl2 ? this.gl.DEPTH_COMPONENT16 : this.gl.DEPTH_COMPONENT,
        type: this.gl.UNSIGNED_INT
      });
      this.depthTexture.update();
      this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0
      /* level */
      );
    } else {
      // Render buffers
      if (depth && !stencil) {
        this.depthBuffer = this.gl.createRenderbuffer();
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer);
        this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, width, height);
        this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthBuffer);
      }

      if (stencil && !depth) {
        this.stencilBuffer = this.gl.createRenderbuffer();
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer);
        this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, width, height);
        this.gl.framebufferRenderbuffer(this.target, this.gl.STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.stencilBuffer);
      }

      if (depth && stencil) {
        this.depthStencilBuffer = this.gl.createRenderbuffer();
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer);
        this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, width, height);
        this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.depthStencilBuffer);
      }
    }

    this.gl.bindFramebuffer(this.target, null);
  }

  setSize(width, height) {
    if (this.width === width && this.height === height) return;
    this.width = width;
    this.height = height;
    this.gl.bindFramebuffer(this.target, this.buffer);

    for (let i = 0; i < this.textures.length; i++) {
      this.textures[i].width = width;
      this.textures[i].height = height;
      this.textures[i].needsUpdate = true;
      this.textures[i].update();
      this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + i, this.gl.TEXTURE_2D, this.textures[i].texture, 0
      /* level */
      );
    }

    if (this.depthTexture) {
      this.depthTexture.width = width;
      this.depthTexture.height = height;
      this.depthTexture.needsUpdate = true;
      this.depthTexture.update();
      this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0
      /* level */
      );
    } else {
      if (this.depthBuffer) {
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer);
        this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, width, height);
      }

      if (this.stencilBuffer) {
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer);
        this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, width, height);
      }

      if (this.depthStencilBuffer) {
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer);
        this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, width, height);
      }
    }

    this.gl.bindFramebuffer(this.target, null);
  }

}

exports.RenderTarget = RenderTarget;
},{"./Texture.js":"../node_modules/ogl/src/core/Texture.js"}],"../node_modules/ogl/src/math/functions/ColorFunc.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexToRGB = hexToRGB;
exports.numberToRGB = numberToRGB;
exports.parseColor = parseColor;
const NAMES = {
  black: '#000000',
  white: '#ffffff',
  red: '#ff0000',
  green: '#00ff00',
  blue: '#0000ff',
  fuchsia: '#ff00ff',
  cyan: '#00ffff',
  yellow: '#ffff00',
  orange: '#ff8000'
};

function hexToRGB(hex) {
  if (hex.length === 4) hex = hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
  const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!rgb) console.warn(`Unable to convert hex string ${hex} to rgb values`);
  return [parseInt(rgb[1], 16) / 255, parseInt(rgb[2], 16) / 255, parseInt(rgb[3], 16) / 255];
}

function numberToRGB(num) {
  num = parseInt(num);
  return [(num >> 16 & 255) / 255, (num >> 8 & 255) / 255, (num & 255) / 255];
}

function parseColor(color) {
  // Empty
  if (color === undefined) return [0, 0, 0]; // Decimal

  if (arguments.length === 3) return arguments; // Number

  if (!isNaN(color)) return numberToRGB(color); // Hex

  if (color[0] === '#') return hexToRGB(color); // Names

  if (NAMES[color.toLowerCase()]) return hexToRGB(NAMES[color.toLowerCase()]);
  console.warn('Color format not recognised');
  return [0, 0, 0];
}
},{}],"../node_modules/ogl/src/math/Color.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = void 0;

var ColorFunc = _interopRequireWildcard(require("./functions/ColorFunc.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Color stored as an array of RGB decimal values (between 0 > 1)
// Constructor and set method accept following formats:
// new Color() - Empty (defaults to black)
// new Color([0.2, 0.4, 1.0]) - Decimal Array (or another Color instance)
// new Color(0.7, 0.0, 0.1) - Decimal RGB values
// new Color('#ff0000') - Hex string
// new Color('#ccc') - Short-hand Hex string
// new Color(0x4f27e8) - Number
// new Color('red') - Color name string (short list in ColorFunc.js)
class Color extends Array {
  constructor(color) {
    if (Array.isArray(color)) return super(...color);
    return super(...ColorFunc.parseColor(...arguments));
  }

  get r() {
    return this[0];
  }

  get g() {
    return this[1];
  }

  get b() {
    return this[2];
  }

  set r(v) {
    this[0] = v;
  }

  set g(v) {
    this[1] = v;
  }

  set b(v) {
    this[2] = v;
  }

  set(color) {
    if (Array.isArray(color)) return this.copy(color);
    return this.copy(ColorFunc.parseColor(...arguments));
  }

  copy(v) {
    this[0] = v[0];
    this[1] = v[1];
    this[2] = v[2];
    return this;
  }

}

exports.Color = Color;
},{"./functions/ColorFunc.js":"../node_modules/ogl/src/math/functions/ColorFunc.js"}],"../node_modules/ogl/src/math/functions/Vec2Func.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copy = copy;
exports.set = set;
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.scale = scale;
exports.distance = distance;
exports.squaredDistance = squaredDistance;
exports.length = length;
exports.squaredLength = squaredLength;
exports.negate = negate;
exports.inverse = inverse;
exports.normalize = normalize;
exports.dot = dot;
exports.cross = cross;
exports.lerp = lerp;
exports.transformMat2 = transformMat2;
exports.transformMat2d = transformMat2d;
exports.transformMat3 = transformMat3;
exports.transformMat4 = transformMat4;
exports.exactEquals = exactEquals;
const EPSILON = 0.000001;
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */


function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */


function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */


function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */


function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */


function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */


function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */


function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.sqrt(x * x + y * y);
}
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */


function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}
/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */


function length(a) {
  var x = a[0],
      y = a[1];
  return Math.sqrt(x * x + y * y);
}
/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */


function squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */


function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */


function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */


function normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}
/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */


function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
/**
 * Computes the cross product of two vec2's
 * Note that the cross product returns a scalar
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} cross product of a and b
 */


function cross(a, b) {
  return a[0] * b[1] - a[1] * b[0];
}
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */


function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */


function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */


function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */


function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */


function transformMat4(out, a, m) {
  let x = a[0];
  let y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */


function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
},{}],"../node_modules/ogl/src/math/Vec2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vec2 = void 0;

var Vec2Func = _interopRequireWildcard(require("./functions/Vec2Func.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Vec2 extends Array {
  constructor(x = 0, y = x) {
    super(x, y);
    return this;
  }

  get x() {
    return this[0];
  }

  get y() {
    return this[1];
  }

  set x(v) {
    this[0] = v;
  }

  set y(v) {
    this[1] = v;
  }

  set(x, y = x) {
    if (x.length) return this.copy(x);
    Vec2Func.set(this, x, y);
    return this;
  }

  copy(v) {
    Vec2Func.copy(this, v);
    return this;
  }

  add(va, vb) {
    if (vb) Vec2Func.add(this, va, vb);else Vec2Func.add(this, this, va);
    return this;
  }

  sub(va, vb) {
    if (vb) Vec2Func.subtract(this, va, vb);else Vec2Func.subtract(this, this, va);
    return this;
  }

  multiply(v) {
    if (v.length) Vec2Func.multiply(this, this, v);else Vec2Func.scale(this, this, v);
    return this;
  }

  divide(v) {
    if (v.length) Vec2Func.divide(this, this, v);else Vec2Func.scale(this, this, 1 / v);
    return this;
  }

  inverse(v = this) {
    Vec2Func.inverse(this, v);
    return this;
  } // Can't use 'length' as Array.prototype uses it


  len() {
    return Vec2Func.length(this);
  }

  distance(v) {
    if (v) return Vec2Func.distance(this, v);else return Vec2Func.length(this);
  }

  squaredLen() {
    return this.squaredDistance();
  }

  squaredDistance(v) {
    if (v) return Vec2Func.squaredDistance(this, v);else return Vec2Func.squaredLength(this);
  }

  negate(v = this) {
    Vec2Func.negate(this, v);
    return this;
  }

  cross(va, vb) {
    if (vb) return Vec2Func.cross(va, vb);
    return Vec2Func.cross(this, va);
  }

  scale(v) {
    Vec2Func.scale(this, this, v);
    return this;
  }

  normalize() {
    Vec2Func.normalize(this, this);
    return this;
  }

  dot(v) {
    return Vec2Func.dot(this, v);
  }

  equals(v) {
    return Vec2Func.exactEquals(this, v);
  }

  applyMatrix3(mat3) {
    Vec2Func.transformMat3(this, this, mat3);
    return this;
  }

  applyMatrix4(mat4) {
    Vec2Func.transformMat4(this, this, mat4);
    return this;
  }

  lerp(v, a) {
    Vec2Func.lerp(this, this, v, a);
    return this;
  }

  clone() {
    return new Vec2(this[0], this[1]);
  }

  fromArray(a, o = 0) {
    this[0] = a[o];
    this[1] = a[o + 1];
    return this;
  }

  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    return a;
  }

}

exports.Vec2 = Vec2;
},{"./functions/Vec2Func.js":"../node_modules/ogl/src/math/functions/Vec2Func.js"}],"../node_modules/ogl/src/math/Vec4.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vec4 = void 0;

var Vec4Func = _interopRequireWildcard(require("./functions/Vec4Func.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Vec4 extends Array {
  constructor(x = 0, y = x, z = x, w = x) {
    super(x, y, z, w);
    return this;
  }

  get x() {
    return this[0];
  }

  get y() {
    return this[1];
  }

  get z() {
    return this[2];
  }

  get w() {
    return this[3];
  }

  set x(v) {
    this[0] = v;
  }

  set y(v) {
    this[1] = v;
  }

  set z(v) {
    this[2] = v;
  }

  set w(v) {
    this[3] = v;
  }

  set(x, y, z, w) {
    if (x.length) return this.copy(x);
    Vec4Func.set(this, x, y, z, w);
    return this;
  }

  copy(v) {
    Vec4Func.copy(this, v);
    return this;
  }

  normalize() {
    Vec4Func.normalize(this, this);
    return this;
  }

  fromArray(a, o = 0) {
    this[0] = a[o];
    this[1] = a[o + 1];
    this[2] = a[o + 2];
    this[3] = a[o + 3];
    return this;
  }

  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    a[o + 2] = this[2];
    a[o + 3] = this[3];
    return a;
  }

}

exports.Vec4 = Vec4;
},{"./functions/Vec4Func.js":"../node_modules/ogl/src/math/functions/Vec4Func.js"}],"../node_modules/ogl/src/extras/Plane.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plane = void 0;

var _Geometry = require("../core/Geometry.js");

class Plane extends _Geometry.Geometry {
  constructor(gl, {
    width = 1,
    height = 1,
    widthSegments = 1,
    heightSegments = 1,
    attributes = {}
  } = {}) {
    const wSegs = widthSegments;
    const hSegs = heightSegments; // Determine length of arrays

    const num = (wSegs + 1) * (hSegs + 1);
    const numIndices = wSegs * hSegs * 6; // Generate empty arrays once

    const position = new Float32Array(num * 3);
    const normal = new Float32Array(num * 3);
    const uv = new Float32Array(num * 2);
    const index = numIndices > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
    Plane.buildPlane(position, normal, uv, index, width, height, 0, wSegs, hSegs);
    Object.assign(attributes, {
      position: {
        size: 3,
        data: position
      },
      normal: {
        size: 3,
        data: normal
      },
      uv: {
        size: 2,
        data: uv
      },
      index: {
        data: index
      }
    });
    super(gl, attributes);
  }

  static buildPlane(position, normal, uv, index, width, height, depth, wSegs, hSegs, u = 0, v = 1, w = 2, uDir = 1, vDir = -1, i = 0, ii = 0) {
    const io = i;
    const segW = width / wSegs;
    const segH = height / hSegs;

    for (let iy = 0; iy <= hSegs; iy++) {
      let y = iy * segH - height / 2;

      for (let ix = 0; ix <= wSegs; ix++, i++) {
        let x = ix * segW - width / 2;
        position[i * 3 + u] = x * uDir;
        position[i * 3 + v] = y * vDir;
        position[i * 3 + w] = depth / 2;
        normal[i * 3 + u] = 0;
        normal[i * 3 + v] = 0;
        normal[i * 3 + w] = depth >= 0 ? 1 : -1;
        uv[i * 2] = ix / wSegs;
        uv[i * 2 + 1] = 1 - iy / hSegs;
        if (iy === hSegs || ix === wSegs) continue;
        let a = io + ix + iy * (wSegs + 1);
        let b = io + ix + (iy + 1) * (wSegs + 1);
        let c = io + ix + (iy + 1) * (wSegs + 1) + 1;
        let d = io + ix + iy * (wSegs + 1) + 1;
        index[ii * 6] = a;
        index[ii * 6 + 1] = b;
        index[ii * 6 + 2] = d;
        index[ii * 6 + 3] = b;
        index[ii * 6 + 4] = c;
        index[ii * 6 + 5] = d;
        ii++;
      }
    }
  }

}

exports.Plane = Plane;
},{"../core/Geometry.js":"../node_modules/ogl/src/core/Geometry.js"}],"../node_modules/ogl/src/extras/Box.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box = void 0;

var _Geometry = require("../core/Geometry.js");

var _Plane = require("./Plane.js");

class Box extends _Geometry.Geometry {
  constructor(gl, {
    width = 1,
    height = 1,
    depth = 1,
    widthSegments = 1,
    heightSegments = 1,
    depthSegments = 1,
    attributes = {}
  } = {}) {
    const wSegs = widthSegments;
    const hSegs = heightSegments;
    const dSegs = depthSegments;
    const num = (wSegs + 1) * (hSegs + 1) * 2 + (wSegs + 1) * (dSegs + 1) * 2 + (hSegs + 1) * (dSegs + 1) * 2;
    const numIndices = (wSegs * hSegs * 2 + wSegs * dSegs * 2 + hSegs * dSegs * 2) * 6;
    const position = new Float32Array(num * 3);
    const normal = new Float32Array(num * 3);
    const uv = new Float32Array(num * 2);
    const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
    let i = 0;
    let ii = 0; // left, right

    _Plane.Plane.buildPlane(position, normal, uv, index, depth, height, width, dSegs, hSegs, 2, 1, 0, -1, -1, i, ii);

    i += (dSegs + 1) * (hSegs + 1);
    ii += dSegs * hSegs;

    _Plane.Plane.buildPlane(position, normal, uv, index, depth, height, -width, dSegs, hSegs, 2, 1, 0, 1, -1, i, ii);

    i += (dSegs + 1) * (hSegs + 1);
    ii += dSegs * hSegs; // top, bottom

    _Plane.Plane.buildPlane(position, normal, uv, index, width, depth, height, dSegs, wSegs, 0, 2, 1, 1, 1, i, ii);

    i += (wSegs + 1) * (dSegs + 1);
    ii += wSegs * dSegs;

    _Plane.Plane.buildPlane(position, normal, uv, index, width, depth, -height, dSegs, wSegs, 0, 2, 1, 1, -1, i, ii);

    i += (wSegs + 1) * (dSegs + 1);
    ii += wSegs * dSegs; // front, back

    _Plane.Plane.buildPlane(position, normal, uv, index, width, height, -depth, wSegs, hSegs, 0, 1, 2, -1, -1, i, ii);

    i += (wSegs + 1) * (hSegs + 1);
    ii += wSegs * hSegs;

    _Plane.Plane.buildPlane(position, normal, uv, index, width, height, depth, wSegs, hSegs, 0, 1, 2, 1, -1, i, ii);

    Object.assign(attributes, {
      position: {
        size: 3,
        data: position
      },
      normal: {
        size: 3,
        data: normal
      },
      uv: {
        size: 2,
        data: uv
      },
      index: {
        data: index
      }
    });
    super(gl, attributes);
  }

}

exports.Box = Box;
},{"../core/Geometry.js":"../node_modules/ogl/src/core/Geometry.js","./Plane.js":"../node_modules/ogl/src/extras/Plane.js"}],"../node_modules/ogl/src/extras/Sphere.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sphere = void 0;

var _Geometry = require("../core/Geometry.js");

var _Vec = require("../math/Vec3.js");

class Sphere extends _Geometry.Geometry {
  constructor(gl, {
    radius = 0.5,
    widthSegments = 16,
    heightSegments = Math.ceil(widthSegments * 0.5),
    phiStart = 0,
    phiLength = Math.PI * 2,
    thetaStart = 0,
    thetaLength = Math.PI,
    attributes = {}
  } = {}) {
    const wSegs = widthSegments;
    const hSegs = heightSegments;
    const pStart = phiStart;
    const pLength = phiLength;
    const tStart = thetaStart;
    const tLength = thetaLength;
    const num = (wSegs + 1) * (hSegs + 1);
    const numIndices = wSegs * hSegs * 6;
    const position = new Float32Array(num * 3);
    const normal = new Float32Array(num * 3);
    const uv = new Float32Array(num * 2);
    const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
    let i = 0;
    let iv = 0;
    let ii = 0;
    let te = tStart + tLength;
    const grid = [];
    let n = new _Vec.Vec3();

    for (let iy = 0; iy <= hSegs; iy++) {
      let vRow = [];
      let v = iy / hSegs;

      for (let ix = 0; ix <= wSegs; ix++, i++) {
        let u = ix / wSegs;
        let x = -radius * Math.cos(pStart + u * pLength) * Math.sin(tStart + v * tLength);
        let y = radius * Math.cos(tStart + v * tLength);
        let z = radius * Math.sin(pStart + u * pLength) * Math.sin(tStart + v * tLength);
        position[i * 3] = x;
        position[i * 3 + 1] = y;
        position[i * 3 + 2] = z;
        n.set(x, y, z).normalize();
        normal[i * 3] = n.x;
        normal[i * 3 + 1] = n.y;
        normal[i * 3 + 2] = n.z;
        uv[i * 2] = u;
        uv[i * 2 + 1] = 1 - v;
        vRow.push(iv++);
      }

      grid.push(vRow);
    }

    for (let iy = 0; iy < hSegs; iy++) {
      for (let ix = 0; ix < wSegs; ix++) {
        let a = grid[iy][ix + 1];
        let b = grid[iy][ix];
        let c = grid[iy + 1][ix];
        let d = grid[iy + 1][ix + 1];

        if (iy !== 0 || tStart > 0) {
          index[ii * 3] = a;
          index[ii * 3 + 1] = b;
          index[ii * 3 + 2] = d;
          ii++;
        }

        if (iy !== hSegs - 1 || te < Math.PI) {
          index[ii * 3] = b;
          index[ii * 3 + 1] = c;
          index[ii * 3 + 2] = d;
          ii++;
        }
      }
    }

    Object.assign(attributes, {
      position: {
        size: 3,
        data: position
      },
      normal: {
        size: 3,
        data: normal
      },
      uv: {
        size: 2,
        data: uv
      },
      index: {
        data: index
      }
    });
    super(gl, attributes);
  }

}

exports.Sphere = Sphere;
},{"../core/Geometry.js":"../node_modules/ogl/src/core/Geometry.js","../math/Vec3.js":"../node_modules/ogl/src/math/Vec3.js"}],"../node_modules/ogl/src/extras/Cylinder.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cylinder = void 0;

var _Geometry = require("../core/Geometry.js");

var _Vec = require("../math/Vec3.js");

class Cylinder extends _Geometry.Geometry {
  constructor(gl, {
    radiusTop = 0.5,
    radiusBottom = 0.5,
    height = 1,
    radialSegments = 8,
    heightSegments = 1,
    openEnded = false,
    thetaStart = 0,
    thetaLength = Math.PI * 2,
    attributes = {}
  } = {}) {
    const rSegs = radialSegments;
    const hSegs = heightSegments;
    const tStart = thetaStart;
    const tLength = thetaLength;
    const numCaps = openEnded ? 0 : radiusBottom && radiusTop ? 2 : 1;
    const num = (rSegs + 1) * (hSegs + 1 + numCaps) + numCaps;
    const numIndices = rSegs * hSegs * 6 + numCaps * rSegs * 3;
    const position = new Float32Array(num * 3);
    const normal = new Float32Array(num * 3);
    const uv = new Float32Array(num * 2);
    const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
    let i = 0;
    let ii = 0;
    const indexArray = [];
    addHeight();

    if (!openEnded) {
      if (radiusTop) addCap(true);
      if (radiusBottom) addCap(false);
    }

    function addHeight() {
      let x, y;
      const n = new _Vec.Vec3();
      const slope = (radiusBottom - radiusTop) / height;

      for (y = 0; y <= hSegs; y++) {
        const indexRow = [];
        const v = y / hSegs;
        const r = v * (radiusBottom - radiusTop) + radiusTop;

        for (x = 0; x <= rSegs; x++) {
          const u = x / rSegs;
          const theta = u * tLength + tStart;
          const sinTheta = Math.sin(theta);
          const cosTheta = Math.cos(theta);
          position.set([r * sinTheta, (0.5 - v) * height, r * cosTheta], i * 3);
          n.set(sinTheta, slope, cosTheta).normalize();
          normal.set([n.x, n.y, n.z], i * 3);
          uv.set([u, 1 - v], i * 2);
          indexRow.push(i++);
        }

        indexArray.push(indexRow);
      }

      for (x = 0; x < rSegs; x++) {
        for (y = 0; y < hSegs; y++) {
          const a = indexArray[y][x];
          const b = indexArray[y + 1][x];
          const c = indexArray[y + 1][x + 1];
          const d = indexArray[y][x + 1];
          index.set([a, b, d, b, c, d], ii * 3);
          ii += 2;
        }
      }
    }

    function addCap(isTop) {
      let x;
      const r = isTop === true ? radiusTop : radiusBottom;
      const sign = isTop === true ? 1 : -1;
      const centerIndex = i;
      position.set([0, 0.5 * height * sign, 0], i * 3);
      normal.set([0, sign, 0], i * 3);
      uv.set([0.5, 0.5], i * 2);
      i++;

      for (x = 0; x <= rSegs; x++) {
        const u = x / rSegs;
        const theta = u * tLength + tStart;
        const cosTheta = Math.cos(theta);
        const sinTheta = Math.sin(theta);
        position.set([r * sinTheta, 0.5 * height * sign, r * cosTheta], i * 3);
        normal.set([0, sign, 0], i * 3);
        uv.set([cosTheta * 0.5 + 0.5, sinTheta * 0.5 * sign + 0.5], i * 2);
        i++;
      }

      for (x = 0; x < rSegs; x++) {
        const j = centerIndex + x + 1;

        if (isTop) {
          index.set([j, j + 1, centerIndex], ii * 3);
        } else {
          index.set([j + 1, j, centerIndex], ii * 3);
        }

        ii++;
      }
    }

    Object.assign(attributes, {
      position: {
        size: 3,
        data: position
      },
      normal: {
        size: 3,
        data: normal
      },
      uv: {
        size: 2,
        data: uv
      },
      index: {
        data: index
      }
    });
    super(gl, attributes);
  }

}

exports.Cylinder = Cylinder;
},{"../core/Geometry.js":"../node_modules/ogl/src/core/Geometry.js","../math/Vec3.js":"../node_modules/ogl/src/math/Vec3.js"}],"../node_modules/ogl/src/extras/Triangle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Triangle = void 0;

var _Geometry = require("../core/Geometry.js");

class Triangle extends _Geometry.Geometry {
  constructor(gl, {
    attributes = {}
  } = {}) {
    Object.assign(attributes, {
      position: {
        size: 2,
        data: new Float32Array([-1, -1, 3, -1, -1, 3])
      },
      uv: {
        size: 2,
        data: new Float32Array([0, 0, 2, 0, 0, 2])
      }
    });
    super(gl, attributes);
  }

}

exports.Triangle = Triangle;
},{"../core/Geometry.js":"../node_modules/ogl/src/core/Geometry.js"}],"../node_modules/ogl/src/extras/Torus.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Torus = void 0;

var _Geometry = require("../core/Geometry.js");

var _Vec = require("../math/Vec3.js");

// https://github.com/mrdoob/three.js/blob/master/src/geometries/TorusGeometry.js
class Torus extends _Geometry.Geometry {
  constructor(gl, {
    radius = 0.5,
    tube = 0.2,
    radialSegments = 8,
    tubularSegments = 6,
    arc = Math.PI * 2,
    attributes = {}
  } = {}) {
    const num = (radialSegments + 1) * (tubularSegments + 1);
    const numIndices = radialSegments * tubularSegments * 6;
    const vertices = new Float32Array(num * 3);
    const normals = new Float32Array(num * 3);
    const uvs = new Float32Array(num * 2);
    const indices = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
    const center = new _Vec.Vec3();
    const vertex = new _Vec.Vec3();
    const normal = new _Vec.Vec3(); // generate vertices, normals and uvs

    let idx = 0;

    for (let j = 0; j <= radialSegments; j++) {
      for (let i = 0; i <= tubularSegments; i++, idx++) {
        const u = i / tubularSegments * arc;
        const v = j / radialSegments * Math.PI * 2; // vertex

        vertex.x = (radius + tube * Math.cos(v)) * Math.cos(u);
        vertex.y = (radius + tube * Math.cos(v)) * Math.sin(u);
        vertex.z = tube * Math.sin(v);
        vertices.set([vertex.x, vertex.y, vertex.z], idx * 3); // normal

        center.x = radius * Math.cos(u);
        center.y = radius * Math.sin(u);
        normal.sub(vertex, center).normalize();
        normals.set([normal.x, normal.y, normal.z], idx * 3); // uv

        uvs.set([i / tubularSegments, j / radialSegments], idx * 2);
      }
    } // generate indices


    idx = 0;

    for (let j = 1; j <= radialSegments; j++) {
      for (let i = 1; i <= tubularSegments; i++, idx++) {
        // indices
        const a = (tubularSegments + 1) * j + i - 1;
        const b = (tubularSegments + 1) * (j - 1) + i - 1;
        const c = (tubularSegments + 1) * (j - 1) + i;
        const d = (tubularSegments + 1) * j + i; // faces

        indices.set([a, b, d, b, c, d], idx * 6);
      }
    }

    Object.assign(attributes, {
      position: {
        size: 3,
        data: vertices
      },
      normal: {
        size: 3,
        data: normals
      },
      uv: {
        size: 2,
        data: uvs
      },
      index: {
        data: indices
      }
    });
    super(gl, attributes);
  }

}

exports.Torus = Torus;
},{"../core/Geometry.js":"../node_modules/ogl/src/core/Geometry.js","../math/Vec3.js":"../node_modules/ogl/src/math/Vec3.js"}],"../node_modules/ogl/src/extras/Orbit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Orbit = Orbit;

var _Vec = require("../math/Vec3.js");

var _Vec2 = require("../math/Vec2.js");

// Based from ThreeJS' OrbitControls class, rewritten using es6 with some additions and subtractions.
// TODO: abstract event handlers so can be fed from other sources
// TODO: make scroll zoom more accurate than just >/< zero
// TODO: be able to pass in new camera position
const STATE = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  DOLLY_PAN: 3
};
const tempVec3 = new _Vec.Vec3();
const tempVec2a = new _Vec2.Vec2();
const tempVec2b = new _Vec2.Vec2();

function Orbit(object, {
  element = document,
  enabled = true,
  target = new _Vec.Vec3(),
  ease = 0.25,
  inertia = 0.85,
  enableRotate = true,
  rotateSpeed = 0.1,
  autoRotate = false,
  autoRotateSpeed = 1.0,
  enableZoom = true,
  zoomSpeed = 1,
  zoomStyle = 'dolly',
  enablePan = true,
  panSpeed = 0.1,
  minPolarAngle = 0,
  maxPolarAngle = Math.PI,
  minAzimuthAngle = -Infinity,
  maxAzimuthAngle = Infinity,
  minDistance = 0,
  maxDistance = Infinity
} = {}) {
  this.enabled = enabled;
  this.target = target;
  this.zoomStyle = zoomStyle; // Catch attempts to disable - set to 1 so has no effect

  ease = ease || 1;
  inertia = inertia || 0;
  this.minDistance = minDistance;
  this.maxDistance = maxDistance; // current position in sphericalTarget coordinates

  const sphericalDelta = {
    radius: 1,
    phi: 0,
    theta: 0
  };
  const sphericalTarget = {
    radius: 1,
    phi: 0,
    theta: 0
  };
  const spherical = {
    radius: 1,
    phi: 0,
    theta: 0
  };
  const panDelta = new _Vec.Vec3(); // Grab initial position values

  const offset = new _Vec.Vec3();
  offset.copy(object.position).sub(this.target);
  spherical.radius = sphericalTarget.radius = offset.distance();
  spherical.theta = sphericalTarget.theta = Math.atan2(offset.x, offset.z);
  spherical.phi = sphericalTarget.phi = Math.acos(Math.min(Math.max(offset.y / sphericalTarget.radius, -1), 1));
  this.offset = offset;

  this.update = () => {
    if (autoRotate) {
      handleAutoRotate();
    } // apply delta


    sphericalTarget.radius *= sphericalDelta.radius;
    sphericalTarget.theta += sphericalDelta.theta;
    sphericalTarget.phi += sphericalDelta.phi; // apply boundaries

    sphericalTarget.theta = Math.max(minAzimuthAngle, Math.min(maxAzimuthAngle, sphericalTarget.theta));
    sphericalTarget.phi = Math.max(minPolarAngle, Math.min(maxPolarAngle, sphericalTarget.phi));
    sphericalTarget.radius = Math.max(this.minDistance, Math.min(this.maxDistance, sphericalTarget.radius)); // ease values

    spherical.phi += (sphericalTarget.phi - spherical.phi) * ease;
    spherical.theta += (sphericalTarget.theta - spherical.theta) * ease;
    spherical.radius += (sphericalTarget.radius - spherical.radius) * ease; // apply pan to target. As offset is relative to target, it also shifts

    this.target.add(panDelta); // apply rotation to offset

    let sinPhiRadius = spherical.radius * Math.sin(Math.max(0.000001, spherical.phi));
    offset.x = sinPhiRadius * Math.sin(spherical.theta);
    offset.y = spherical.radius * Math.cos(spherical.phi);
    offset.z = sinPhiRadius * Math.cos(spherical.theta); // Apply updated values to object

    object.position.copy(this.target).add(offset);
    object.lookAt(this.target); // Apply inertia to values

    sphericalDelta.theta *= inertia;
    sphericalDelta.phi *= inertia;
    panDelta.multiply(inertia); // Reset scale every frame to avoid applying scale multiple times

    sphericalDelta.radius = 1;
  }; // Updates internals with new position


  this.forcePosition = () => {
    offset.copy(object.position).sub(this.target);
    spherical.radius = sphericalTarget.radius = offset.distance();
    spherical.theta = sphericalTarget.theta = Math.atan2(offset.x, offset.z);
    spherical.phi = sphericalTarget.phi = Math.acos(Math.min(Math.max(offset.y / sphericalTarget.radius, -1), 1));
    object.lookAt(this.target);
  }; // Everything below here just updates panDelta and sphericalDelta
  // Using those two objects' values, the orbit is calculated


  const rotateStart = new _Vec2.Vec2();
  const panStart = new _Vec2.Vec2();
  const dollyStart = new _Vec2.Vec2();
  let state = STATE.NONE;
  this.mouseButtons = {
    ORBIT: 0,
    ZOOM: 1,
    PAN: 2
  };

  function getZoomScale() {
    return Math.pow(0.95, zoomSpeed);
  }

  function panLeft(distance, m) {
    tempVec3.set(m[0], m[1], m[2]);
    tempVec3.multiply(-distance);
    panDelta.add(tempVec3);
  }

  function panUp(distance, m) {
    tempVec3.set(m[4], m[5], m[6]);
    tempVec3.multiply(distance);
    panDelta.add(tempVec3);
  }

  const pan = (deltaX, deltaY) => {
    let el = element === document ? document.body : element;
    tempVec3.copy(object.position).sub(this.target);
    let targetDistance = tempVec3.distance();
    targetDistance *= Math.tan((object.fov || 45) / 2 * Math.PI / 180.0);
    panLeft(2 * deltaX * targetDistance / el.clientHeight, object.matrix);
    panUp(2 * deltaY * targetDistance / el.clientHeight, object.matrix);
  };

  const dolly = dollyScale => {
    if (this.zoomStyle === 'dolly') sphericalDelta.radius /= dollyScale;else {
      object.fov /= dollyScale;
      if (object.type === 'orthographic') object.orthographic();else object.perspective();
    }
  };

  function handleAutoRotate() {
    const angle = 2 * Math.PI / 60 / 60 * autoRotateSpeed;
    sphericalDelta.theta -= angle;
  }

  function handleMoveRotate(x, y) {
    tempVec2a.set(x, y);
    tempVec2b.sub(tempVec2a, rotateStart).multiply(rotateSpeed);
    let el = element === document ? document.body : element;
    sphericalDelta.theta -= 2 * Math.PI * tempVec2b.x / el.clientHeight;
    sphericalDelta.phi -= 2 * Math.PI * tempVec2b.y / el.clientHeight;
    rotateStart.copy(tempVec2a);
  }

  function handleMouseMoveDolly(e) {
    tempVec2a.set(e.clientX, e.clientY);
    tempVec2b.sub(tempVec2a, dollyStart);

    if (tempVec2b.y > 0) {
      dolly(getZoomScale());
    } else if (tempVec2b.y < 0) {
      dolly(1 / getZoomScale());
    }

    dollyStart.copy(tempVec2a);
  }

  function handleMovePan(x, y) {
    tempVec2a.set(x, y);
    tempVec2b.sub(tempVec2a, panStart).multiply(panSpeed);
    pan(tempVec2b.x, tempVec2b.y);
    panStart.copy(tempVec2a);
  }

  function handleTouchStartDollyPan(e) {
    if (enableZoom) {
      let dx = e.touches[0].pageX - e.touches[1].pageX;
      let dy = e.touches[0].pageY - e.touches[1].pageY;
      let distance = Math.sqrt(dx * dx + dy * dy);
      dollyStart.set(0, distance);
    }

    if (enablePan) {
      let x = 0.5 * (e.touches[0].pageX + e.touches[1].pageX);
      let y = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
      panStart.set(x, y);
    }
  }

  function handleTouchMoveDollyPan(e) {
    if (enableZoom) {
      let dx = e.touches[0].pageX - e.touches[1].pageX;
      let dy = e.touches[0].pageY - e.touches[1].pageY;
      let distance = Math.sqrt(dx * dx + dy * dy);
      tempVec2a.set(0, distance);
      tempVec2b.set(0, Math.pow(tempVec2a.y / dollyStart.y, zoomSpeed));
      dolly(tempVec2b.y);
      dollyStart.copy(tempVec2a);
    }

    if (enablePan) {
      let x = 0.5 * (e.touches[0].pageX + e.touches[1].pageX);
      let y = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
      handleMovePan(x, y);
    }
  }

  const onMouseDown = e => {
    if (!this.enabled) return;

    switch (e.button) {
      case this.mouseButtons.ORBIT:
        if (enableRotate === false) return;
        rotateStart.set(e.clientX, e.clientY);
        state = STATE.ROTATE;
        break;

      case this.mouseButtons.ZOOM:
        if (enableZoom === false) return;
        dollyStart.set(e.clientX, e.clientY);
        state = STATE.DOLLY;
        break;

      case this.mouseButtons.PAN:
        if (enablePan === false) return;
        panStart.set(e.clientX, e.clientY);
        state = STATE.PAN;
        break;
    }

    if (state !== STATE.NONE) {
      window.addEventListener('mousemove', onMouseMove, false);
      window.addEventListener('mouseup', onMouseUp, false);
    }
  };

  const onMouseMove = e => {
    if (!this.enabled) return;

    switch (state) {
      case STATE.ROTATE:
        if (enableRotate === false) return;
        handleMoveRotate(e.clientX, e.clientY);
        break;

      case STATE.DOLLY:
        if (enableZoom === false) return;
        handleMouseMoveDolly(e);
        break;

      case STATE.PAN:
        if (enablePan === false) return;
        handleMovePan(e.clientX, e.clientY);
        break;
    }
  };

  const onMouseUp = () => {
    window.removeEventListener('mousemove', onMouseMove, false);
    window.removeEventListener('mouseup', onMouseUp, false);
    state = STATE.NONE;
  };

  const onMouseWheel = e => {
    if (!this.enabled || !enableZoom || state !== STATE.NONE && state !== STATE.ROTATE) return;
    e.stopPropagation();
    e.preventDefault();

    if (e.deltaY < 0) {
      dolly(1 / getZoomScale());
    } else if (e.deltaY > 0) {
      dolly(getZoomScale());
    }
  };

  const onTouchStart = e => {
    if (!this.enabled) return;
    e.preventDefault();

    switch (e.touches.length) {
      case 1:
        if (enableRotate === false) return;
        rotateStart.set(e.touches[0].pageX, e.touches[0].pageY);
        state = STATE.ROTATE;
        break;

      case 2:
        if (enableZoom === false && enablePan === false) return;
        handleTouchStartDollyPan(e);
        state = STATE.DOLLY_PAN;
        break;

      default:
        state = STATE.NONE;
    }
  };

  const onTouchMove = e => {
    if (!this.enabled) return;
    e.preventDefault();
    e.stopPropagation();

    switch (e.touches.length) {
      case 1:
        if (enableRotate === false) return;
        handleMoveRotate(e.touches[0].pageX, e.touches[0].pageY);
        break;

      case 2:
        if (enableZoom === false && enablePan === false) return;
        handleTouchMoveDollyPan(e);
        break;

      default:
        state = STATE.NONE;
    }
  };

  const onTouchEnd = () => {
    if (!this.enabled) return;
    state = STATE.NONE;
  };

  const onContextMenu = e => {
    if (!this.enabled) return;
    e.preventDefault();
  };

  function addHandlers() {
    element.addEventListener('contextmenu', onContextMenu, false);
    element.addEventListener('mousedown', onMouseDown, false);
    element.addEventListener('wheel', onMouseWheel, {
      passive: false
    });
    element.addEventListener('touchstart', onTouchStart, {
      passive: false
    });
    element.addEventListener('touchend', onTouchEnd, false);
    element.addEventListener('touchmove', onTouchMove, {
      passive: false
    });
  }

  this.remove = function () {
    element.removeEventListener('contextmenu', onContextMenu);
    element.removeEventListener('mousedown', onMouseDown);
    element.removeEventListener('wheel', onMouseWheel);
    element.removeEventListener('touchstart', onTouchStart);
    element.removeEventListener('touchend', onTouchEnd);
    element.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  addHandlers();
}
},{"../math/Vec3.js":"../node_modules/ogl/src/math/Vec3.js","../math/Vec2.js":"../node_modules/ogl/src/math/Vec2.js"}],"../node_modules/ogl/src/extras/Raycast.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Raycast = void 0;

var _Vec = require("../math/Vec2.js");

var _Vec2 = require("../math/Vec3.js");

var _Mat = require("../math/Mat4.js");

// TODO: barycentric code shouldn't be here, but where?
// TODO: SphereCast?
const tempVec2a = new _Vec.Vec2();
const tempVec2b = new _Vec.Vec2();
const tempVec2c = new _Vec.Vec2();
const tempVec3a = new _Vec2.Vec3();
const tempVec3b = new _Vec2.Vec3();
const tempVec3c = new _Vec2.Vec3();
const tempVec3d = new _Vec2.Vec3();
const tempVec3e = new _Vec2.Vec3();
const tempVec3f = new _Vec2.Vec3();
const tempVec3g = new _Vec2.Vec3();
const tempVec3h = new _Vec2.Vec3();
const tempVec3i = new _Vec2.Vec3();
const tempVec3j = new _Vec2.Vec3();
const tempVec3k = new _Vec2.Vec3();
const tempMat4 = new _Mat.Mat4();

class Raycast {
  constructor() {
    this.origin = new _Vec2.Vec3();
    this.direction = new _Vec2.Vec3();
  } // Set ray from mouse unprojection


  castMouse(camera, mouse = [0, 0]) {
    if (camera.type === 'orthographic') {
      // Set origin
      // Since camera is orthographic, origin is not the camera position
      const {
        left,
        right,
        bottom,
        top,
        zoom
      } = camera;
      const x = left / zoom + (right - left) / zoom * (mouse[0] * 0.5 + 0.5);
      const y = bottom / zoom + (top - bottom) / zoom * (mouse[1] * 0.5 + 0.5);
      this.origin.set(x, y, 0);
      this.origin.applyMatrix4(camera.worldMatrix); // Set direction
      // https://community.khronos.org/t/get-direction-from-transformation-matrix-or-quat/65502/2

      this.direction.x = -camera.worldMatrix[8];
      this.direction.y = -camera.worldMatrix[9];
      this.direction.z = -camera.worldMatrix[10];
    } else {
      // Set origin
      camera.worldMatrix.getTranslation(this.origin); // Set direction

      this.direction.set(mouse[0], mouse[1], 0.5);
      camera.unproject(this.direction);
      this.direction.sub(this.origin).normalize();
    }
  }

  intersectBounds(meshes, {
    maxDistance,
    output = []
  } = {}) {
    if (!Array.isArray(meshes)) meshes = [meshes];
    const invWorldMat4 = tempMat4;
    const origin = tempVec3a;
    const direction = tempVec3b;
    const hits = output;
    hits.length = 0;
    meshes.forEach(mesh => {
      // Create bounds
      if (!mesh.geometry.bounds || mesh.geometry.bounds.radius === Infinity) mesh.geometry.computeBoundingSphere();
      const bounds = mesh.geometry.bounds;
      invWorldMat4.inverse(mesh.worldMatrix); // Get max distance locally

      let localMaxDistance;

      if (maxDistance) {
        direction.copy(this.direction).scaleRotateMatrix4(invWorldMat4);
        localMaxDistance = maxDistance * direction.len();
      } // Take world space ray and make it object space to align with bounding box


      origin.copy(this.origin).applyMatrix4(invWorldMat4);
      direction.copy(this.direction).transformDirection(invWorldMat4); // Break out early if bounds too far away from origin

      if (maxDistance) {
        if (origin.distance(bounds.center) - bounds.radius > localMaxDistance) return;
      }

      let localDistance = 0; // Check origin isn't inside bounds before testing intersection

      if (mesh.geometry.raycast === 'sphere') {
        if (origin.distance(bounds.center) > bounds.radius) {
          localDistance = this.intersectSphere(bounds, origin, direction);
          if (!localDistance) return;
        }
      } else {
        if (origin.x < bounds.min.x || origin.x > bounds.max.x || origin.y < bounds.min.y || origin.y > bounds.max.y || origin.z < bounds.min.z || origin.z > bounds.max.z) {
          localDistance = this.intersectBox(bounds, origin, direction);
          if (!localDistance) return;
        }
      }

      if (maxDistance && localDistance > localMaxDistance) return; // Create object on mesh to avoid generating lots of objects

      if (!mesh.hit) mesh.hit = {
        localPoint: new _Vec2.Vec3(),
        point: new _Vec2.Vec3()
      };
      mesh.hit.localPoint.copy(direction).multiply(localDistance).add(origin);
      mesh.hit.point.copy(mesh.hit.localPoint).applyMatrix4(mesh.worldMatrix);
      mesh.hit.distance = mesh.hit.point.distance(this.origin);
      hits.push(mesh);
    });
    hits.sort((a, b) => a.hit.distance - b.hit.distance);
    return hits;
  }

  intersectMeshes(meshes, {
    cullFace = true,
    maxDistance,
    includeUV = true,
    includeNormal = true,
    output = []
  } = {}) {
    // Test bounds first before testing geometry
    const hits = this.intersectBounds(meshes, {
      maxDistance,
      output
    });
    if (!hits.length) return hits;
    const invWorldMat4 = tempMat4;
    const origin = tempVec3a;
    const direction = tempVec3b;
    const a = tempVec3c;
    const b = tempVec3d;
    const c = tempVec3e;
    const closestFaceNormal = tempVec3f;
    const faceNormal = tempVec3g;
    const barycoord = tempVec3h;
    const uvA = tempVec2a;
    const uvB = tempVec2b;
    const uvC = tempVec2c;

    for (let i = hits.length - 1; i >= 0; i--) {
      const mesh = hits[i];
      invWorldMat4.inverse(mesh.worldMatrix); // Get max distance locally

      let localMaxDistance;

      if (maxDistance) {
        direction.copy(this.direction).scaleRotateMatrix4(invWorldMat4);
        localMaxDistance = maxDistance * direction.len();
      } // Take world space ray and make it object space to align with bounding box


      origin.copy(this.origin).applyMatrix4(invWorldMat4);
      direction.copy(this.direction).transformDirection(invWorldMat4);
      let localDistance = 0;
      let closestA, closestB, closestC;
      const geometry = mesh.geometry;
      const attributes = geometry.attributes;
      const index = attributes.index;
      const position = attributes.position;
      const start = Math.max(0, geometry.drawRange.start);
      const end = Math.min(index ? index.count : position.count, geometry.drawRange.start + geometry.drawRange.count);
      const stride = position.stride ? position.stride / position.data.BYTES_PER_ELEMENT : position.size;

      for (let j = start; j < end; j += 3) {
        // Position attribute indices for each triangle
        const ai = index ? index.data[j] : j;
        const bi = index ? index.data[j + 1] : j + 1;
        const ci = index ? index.data[j + 2] : j + 2;
        a.fromArray(position.data, ai * stride);
        b.fromArray(position.data, bi * stride);
        c.fromArray(position.data, ci * stride);
        const distance = this.intersectTriangle(a, b, c, cullFace, origin, direction, faceNormal);
        if (!distance) continue; // Too far away

        if (maxDistance && distance > localMaxDistance) continue;

        if (!localDistance || distance < localDistance) {
          localDistance = distance;
          closestA = ai;
          closestB = bi;
          closestC = ci;
          closestFaceNormal.copy(faceNormal);
        }
      }

      if (!localDistance) hits.splice(i, 1); // Update hit values from bounds-test

      mesh.hit.localPoint.copy(direction).multiply(localDistance).add(origin);
      mesh.hit.point.copy(mesh.hit.localPoint).applyMatrix4(mesh.worldMatrix);
      mesh.hit.distance = mesh.hit.point.distance(this.origin); // Add unique hit objects on mesh to avoid generating lots of objects

      if (!mesh.hit.faceNormal) {
        mesh.hit.localFaceNormal = new _Vec2.Vec3();
        mesh.hit.faceNormal = new _Vec2.Vec3();
        mesh.hit.uv = new _Vec.Vec2();
        mesh.hit.localNormal = new _Vec2.Vec3();
        mesh.hit.normal = new _Vec2.Vec3();
      } // Add face normal data which is already computed


      mesh.hit.localFaceNormal.copy(closestFaceNormal);
      mesh.hit.faceNormal.copy(mesh.hit.localFaceNormal).transformDirection(mesh.worldMatrix); // Optional data, opt out to optimise a bit if necessary

      if (includeUV || includeNormal) {
        // Calculate barycoords to find uv values at hit point
        a.fromArray(position.data, closestA * 3);
        b.fromArray(position.data, closestB * 3);
        c.fromArray(position.data, closestC * 3);
        this.getBarycoord(mesh.hit.localPoint, a, b, c, barycoord);
      }

      if (includeUV && attributes.uv) {
        uvA.fromArray(attributes.uv.data, closestA * 2);
        uvB.fromArray(attributes.uv.data, closestB * 2);
        uvC.fromArray(attributes.uv.data, closestC * 2);
        mesh.hit.uv.set(uvA.x * barycoord.x + uvB.x * barycoord.y + uvC.x * barycoord.z, uvA.y * barycoord.x + uvB.y * barycoord.y + uvC.y * barycoord.z);
      }

      if (includeNormal && attributes.normal) {
        a.fromArray(attributes.normal.data, closestA * 3);
        b.fromArray(attributes.normal.data, closestB * 3);
        c.fromArray(attributes.normal.data, closestC * 3);
        mesh.hit.localNormal.set(a.x * barycoord.x + b.x * barycoord.y + c.x * barycoord.z, a.y * barycoord.x + b.y * barycoord.y + c.y * barycoord.z, a.z * barycoord.x + b.z * barycoord.y + c.z * barycoord.z);
        mesh.hit.normal.copy(mesh.hit.localNormal).transformDirection(mesh.worldMatrix);
      }
    }

    hits.sort((a, b) => a.hit.distance - b.hit.distance);
    return hits;
  }

  intersectSphere(sphere, origin = this.origin, direction = this.direction) {
    const ray = tempVec3c;
    ray.sub(sphere.center, origin);
    const tca = ray.dot(direction);
    const d2 = ray.dot(ray) - tca * tca;
    const radius2 = sphere.radius * sphere.radius;
    if (d2 > radius2) return 0;
    const thc = Math.sqrt(radius2 - d2);
    const t0 = tca - thc;
    const t1 = tca + thc;
    if (t0 < 0 && t1 < 0) return 0;
    if (t0 < 0) return t1;
    return t0;
  } // Ray AABB - Ray Axis aligned bounding box testing


  intersectBox(box, origin = this.origin, direction = this.direction) {
    let tmin, tmax, tYmin, tYmax, tZmin, tZmax;
    const invdirx = 1 / direction.x;
    const invdiry = 1 / direction.y;
    const invdirz = 1 / direction.z;
    const min = box.min;
    const max = box.max;
    tmin = ((invdirx >= 0 ? min.x : max.x) - origin.x) * invdirx;
    tmax = ((invdirx >= 0 ? max.x : min.x) - origin.x) * invdirx;
    tYmin = ((invdiry >= 0 ? min.y : max.y) - origin.y) * invdiry;
    tYmax = ((invdiry >= 0 ? max.y : min.y) - origin.y) * invdiry;
    if (tmin > tYmax || tYmin > tmax) return 0;
    if (tYmin > tmin) tmin = tYmin;
    if (tYmax < tmax) tmax = tYmax;
    tZmin = ((invdirz >= 0 ? min.z : max.z) - origin.z) * invdirz;
    tZmax = ((invdirz >= 0 ? max.z : min.z) - origin.z) * invdirz;
    if (tmin > tZmax || tZmin > tmax) return 0;
    if (tZmin > tmin) tmin = tZmin;
    if (tZmax < tmax) tmax = tZmax;
    if (tmax < 0) return 0;
    return tmin >= 0 ? tmin : tmax;
  }

  intersectTriangle(a, b, c, backfaceCulling = true, origin = this.origin, direction = this.direction, normal = tempVec3g) {
    // from https://github.com/mrdoob/three.js/blob/master/src/math/Ray.js
    // which is from http://www.geometrictools.com/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h
    const edge1 = tempVec3h;
    const edge2 = tempVec3i;
    const diff = tempVec3j;
    edge1.sub(b, a);
    edge2.sub(c, a);
    normal.cross(edge1, edge2);
    let DdN = direction.dot(normal);
    if (!DdN) return 0;
    let sign;

    if (DdN > 0) {
      if (backfaceCulling) return 0;
      sign = 1;
    } else {
      sign = -1;
      DdN = -DdN;
    }

    diff.sub(origin, a);
    let DdQxE2 = sign * direction.dot(edge2.cross(diff, edge2));
    if (DdQxE2 < 0) return 0;
    let DdE1xQ = sign * direction.dot(edge1.cross(diff));
    if (DdE1xQ < 0) return 0;
    if (DdQxE2 + DdE1xQ > DdN) return 0;
    let QdN = -sign * diff.dot(normal);
    if (QdN < 0) return 0;
    return QdN / DdN;
  }

  getBarycoord(point, a, b, c, target = tempVec3h) {
    // From https://github.com/mrdoob/three.js/blob/master/src/math/Triangle.js
    // static/instance method to calculate barycentric coordinates
    // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
    const v0 = tempVec3i;
    const v1 = tempVec3j;
    const v2 = tempVec3k;
    v0.sub(c, a);
    v1.sub(b, a);
    v2.sub(point, a);
    const dot00 = v0.dot(v0);
    const dot01 = v0.dot(v1);
    const dot02 = v0.dot(v2);
    const dot11 = v1.dot(v1);
    const dot12 = v1.dot(v2);
    const denom = dot00 * dot11 - dot01 * dot01;
    if (denom === 0) return target.set(-2, -1, -1);
    const invDenom = 1 / denom;
    const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
    const v = (dot00 * dot12 - dot01 * dot02) * invDenom;
    return target.set(1 - u - v, v, u);
  }

}

exports.Raycast = Raycast;
},{"../math/Vec2.js":"../node_modules/ogl/src/math/Vec2.js","../math/Vec3.js":"../node_modules/ogl/src/math/Vec3.js","../math/Mat4.js":"../node_modules/ogl/src/math/Mat4.js"}],"../node_modules/ogl/src/extras/Curve.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Curve = void 0;

var _Vec = require("../math/Vec3.js");

const CATMULLROM = 'catmullrom';
const CUBICBEZIER = 'cubicbezier';
const QUADRATICBEZIER = 'quadraticbezier'; // temp

const _a0 = new _Vec.Vec3(),
      _a1 = new _Vec.Vec3(),
      _a2 = new _Vec.Vec3(),
      _a3 = new _Vec.Vec3();
/**
 * Get the control points of cubic bezier curve.
 * @param {*} i
 * @param {*} a
 * @param {*} b
 */


function getCtrlPoint(points, i, a = 0.168, b = 0.168) {
  if (i < 1) {
    _a0.sub(points[1], points[0]).scale(a).add(points[0]);
  } else {
    _a0.sub(points[i + 1], points[i - 1]).scale(a).add(points[i]);
  }

  if (i > points.length - 3) {
    const last = points.length - 1;

    _a1.sub(points[last - 1], points[last]).scale(b).add(points[last]);
  } else {
    _a1.sub(points[i], points[i + 2]).scale(b).add(points[i + 1]);
  }

  return [_a0.clone(), _a1.clone()];
}

function getQuadraticBezierPoint(t, p0, c0, p1) {
  const k = 1 - t;

  _a0.copy(p0).scale(k ** 2);

  _a1.copy(c0).scale(2 * k * t);

  _a2.copy(p1).scale(t ** 2);

  const ret = new _Vec.Vec3();
  ret.add(_a0, _a1).add(_a2);
  return ret;
}

function getCubicBezierPoint(t, p0, c0, c1, p1) {
  const k = 1 - t;

  _a0.copy(p0).scale(k ** 3);

  _a1.copy(c0).scale(3 * k ** 2 * t);

  _a2.copy(c1).scale(3 * k * t ** 2);

  _a3.copy(p1).scale(t ** 3);

  const ret = new _Vec.Vec3();
  ret.add(_a0, _a1).add(_a2).add(_a3);
  return ret;
}

class Curve {
  constructor({
    points = [new _Vec.Vec3(0, 0, 0), new _Vec.Vec3(0, 1, 0), new _Vec.Vec3(1, 1, 0), new _Vec.Vec3(1, 0, 0)],
    divisions = 12,
    type = CATMULLROM
  } = {}) {
    this.points = points;
    this.divisions = divisions;
    this.type = type;
  }

  _getQuadraticBezierPoints(divisions = this.divisions) {
    const points = [];
    const count = this.points.length;

    if (count < 3) {
      console.warn('Not enough points provided.');
      return [];
    }

    const p0 = this.points[0];
    let c0 = this.points[1],
        p1 = this.points[2];

    for (let i = 0; i <= divisions; i++) {
      const p = getQuadraticBezierPoint(i / divisions, p0, c0, p1);
      points.push(p);
    }

    let offset = 3;

    while (count - offset > 0) {
      p0.copy(p1);
      c0 = p1.scale(2).sub(c0);
      p1 = this.points[offset];

      for (let i = 1; i <= divisions; i++) {
        const p = getQuadraticBezierPoint(i / divisions, p0, c0, p1);
        points.push(p);
      }

      offset++;
    }

    return points;
  }

  _getCubicBezierPoints(divisions = this.divisions) {
    const points = [];
    const count = this.points.length;

    if (count < 4) {
      console.warn('Not enough points provided.');
      return [];
    }

    let p0 = this.points[0],
        c0 = this.points[1],
        c1 = this.points[2],
        p1 = this.points[3];

    for (let i = 0; i <= divisions; i++) {
      const p = getCubicBezierPoint(i / divisions, p0, c0, c1, p1);
      points.push(p);
    }

    let offset = 4;

    while (count - offset > 1) {
      p0.copy(p1);
      c0 = p1.scale(2).sub(c1);
      c1 = this.points[offset];
      p1 = this.points[offset + 1];

      for (let i = 1; i <= divisions; i++) {
        const p = getCubicBezierPoint(i / divisions, p0, c0, c1, p1);
        points.push(p);
      }

      offset += 2;
    }

    return points;
  }

  _getCatmullRomPoints(divisions = this.divisions, a = 0.168, b = 0.168) {
    const points = [];
    const count = this.points.length;

    if (count <= 2) {
      return this.points;
    }

    let p0;
    this.points.forEach((p, i) => {
      if (i === 0) {
        p0 = p;
      } else {
        const [c0, c1] = getCtrlPoint(this.points, i - 1, a, b);
        const c = new Curve({
          points: [p0, c0, c1, p],
          type: CUBICBEZIER
        });
        points.pop();
        points.push(...c.getPoints(divisions));
        p0 = p;
      }
    });
    return points;
  }

  getPoints(divisions = this.divisions, a = 0.168, b = 0.168) {
    const type = this.type;

    if (type === QUADRATICBEZIER) {
      return this._getQuadraticBezierPoints(divisions);
    }

    if (type === CUBICBEZIER) {
      return this._getCubicBezierPoints(divisions);
    }

    if (type === CATMULLROM) {
      return this._getCatmullRomPoints(divisions, a, b);
    }

    return this.points;
  }

}

exports.Curve = Curve;
Curve.CATMULLROM = CATMULLROM;
Curve.CUBICBEZIER = CUBICBEZIER;
Curve.QUADRATICBEZIER = QUADRATICBEZIER;
},{"../math/Vec3.js":"../node_modules/ogl/src/math/Vec3.js"}],"../node_modules/ogl/src/extras/Post.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Post = void 0;

var _Program = require("../core/Program.js");

var _Mesh = require("../core/Mesh.js");

var _RenderTarget = require("../core/RenderTarget.js");

var _Triangle = require("./Triangle.js");

// TODO: Destroy render targets if size changed and exists
class Post {
  constructor(gl, {
    width,
    height,
    dpr,
    wrapS = gl.CLAMP_TO_EDGE,
    wrapT = gl.CLAMP_TO_EDGE,
    minFilter = gl.LINEAR,
    magFilter = gl.LINEAR,
    geometry = new _Triangle.Triangle(gl),
    targetOnly = null
  } = {}) {
    this.gl = gl;
    this.options = {
      wrapS,
      wrapT,
      minFilter,
      magFilter
    };
    this.passes = [];
    this.geometry = geometry;
    this.uniform = {
      value: null
    };
    this.targetOnly = targetOnly;
    const fbo = this.fbo = {
      read: null,
      write: null,
      swap: () => {
        let temp = fbo.read;
        fbo.read = fbo.write;
        fbo.write = temp;
      }
    };
    this.resize({
      width,
      height,
      dpr
    });
  }

  addPass({
    vertex = defaultVertex,
    fragment = defaultFragment,
    uniforms = {},
    textureUniform = 'tMap',
    enabled = true
  } = {}) {
    uniforms[textureUniform] = {
      value: this.fbo.read.texture
    };
    const program = new _Program.Program(this.gl, {
      vertex,
      fragment,
      uniforms
    });
    const mesh = new _Mesh.Mesh(this.gl, {
      geometry: this.geometry,
      program
    });
    const pass = {
      mesh,
      program,
      uniforms,
      enabled,
      textureUniform
    };
    this.passes.push(pass);
    return pass;
  }

  resize({
    width,
    height,
    dpr
  } = {}) {
    if (dpr) this.dpr = dpr;

    if (width) {
      this.width = width;
      this.height = height || width;
    }

    dpr = this.dpr || this.gl.renderer.dpr;
    width = Math.floor((this.width || this.gl.renderer.width) * dpr);
    height = Math.floor((this.height || this.gl.renderer.height) * dpr);
    this.options.width = width;
    this.options.height = height;
    this.fbo.read = new _RenderTarget.RenderTarget(this.gl, this.options);
    this.fbo.write = new _RenderTarget.RenderTarget(this.gl, this.options);
  } // Uses same arguments as renderer.render, with addition of optional texture passed in to avoid scene render


  render({
    scene,
    camera,
    texture,
    target = null,
    update = true,
    sort = true,
    frustumCull = true
  }) {
    const enabledPasses = this.passes.filter(pass => pass.enabled);

    if (!texture) {
      this.gl.renderer.render({
        scene,
        camera,
        target: enabledPasses.length || !target && this.targetOnly ? this.fbo.write : target,
        update,
        sort,
        frustumCull
      });
      this.fbo.swap();
    }

    enabledPasses.forEach((pass, i) => {
      pass.mesh.program.uniforms[pass.textureUniform].value = !i && texture ? texture : this.fbo.read.texture;
      this.gl.renderer.render({
        scene: pass.mesh,
        target: i === enabledPasses.length - 1 && (target || !this.targetOnly) ? target : this.fbo.write,
        clear: true
      });
      this.fbo.swap();
    });
    this.uniform.value = this.fbo.read.texture;
  }

}

exports.Post = Post;
const defaultVertex =
/* glsl */
`
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`;
const defaultFragment =
/* glsl */
`
    precision highp float;

    uniform sampler2D tMap;
    varying vec2 vUv;

    void main() {
        gl_FragColor = texture2D(tMap, vUv);
    }
`;
},{"../core/Program.js":"../node_modules/ogl/src/core/Program.js","../core/Mesh.js":"../node_modules/ogl/src/core/Mesh.js","../core/RenderTarget.js":"../node_modules/ogl/src/core/RenderTarget.js","./Triangle.js":"../node_modules/ogl/src/extras/Triangle.js"}],"../node_modules/ogl/src/extras/Animation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Animation = void 0;

var _Vec = require("../math/Vec3.js");

var _Quat = require("../math/Quat.js");

const prevPos = new _Vec.Vec3();
const prevRot = new _Quat.Quat();
const prevScl = new _Vec.Vec3();
const nextPos = new _Vec.Vec3();
const nextRot = new _Quat.Quat();
const nextScl = new _Vec.Vec3();

class Animation {
  constructor({
    objects,
    data
  }) {
    this.objects = objects;
    this.data = data;
    this.elapsed = 0;
    this.weight = 1;
    this.duration = data.frames.length - 1;
  }

  update(totalWeight = 1, isSet) {
    const weight = isSet ? 1 : this.weight / totalWeight;
    const elapsed = this.elapsed % this.duration;
    const floorFrame = Math.floor(elapsed);
    const blend = elapsed - floorFrame;
    const prevKey = this.data.frames[floorFrame];
    const nextKey = this.data.frames[(floorFrame + 1) % this.duration];
    this.objects.forEach((object, i) => {
      prevPos.fromArray(prevKey.position, i * 3);
      prevRot.fromArray(prevKey.quaternion, i * 4);
      prevScl.fromArray(prevKey.scale, i * 3);
      nextPos.fromArray(nextKey.position, i * 3);
      nextRot.fromArray(nextKey.quaternion, i * 4);
      nextScl.fromArray(nextKey.scale, i * 3);
      prevPos.lerp(nextPos, blend);
      prevRot.slerp(nextRot, blend);
      prevScl.lerp(nextScl, blend);
      object.position.lerp(prevPos, weight);
      object.quaternion.slerp(prevRot, weight);
      object.scale.lerp(prevScl, weight);
    });
  }

}

exports.Animation = Animation;
},{"../math/Vec3.js":"../node_modules/ogl/src/math/Vec3.js","../math/Quat.js":"../node_modules/ogl/src/math/Quat.js"}],"../node_modules/ogl/src/extras/Skin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Skin = void 0;

var _Mesh = require("../core/Mesh.js");

var _Transform = require("../core/Transform.js");

var _Mat = require("../math/Mat4.js");

var _Texture = require("../core/Texture.js");

var _Animation = require("./Animation.js");

const tempMat4 = new _Mat.Mat4();

class Skin extends _Mesh.Mesh {
  constructor(gl, {
    rig,
    geometry,
    program,
    mode = gl.TRIANGLES
  } = {}) {
    super(gl, {
      geometry,
      program,
      mode
    });
    this.createBones(rig);
    this.createBoneTexture();
    this.animations = [];
    Object.assign(this.program.uniforms, {
      boneTexture: {
        value: this.boneTexture
      },
      boneTextureSize: {
        value: this.boneTextureSize
      }
    });
  }

  createBones(rig) {
    // Create root so that can simply update world matrix of whole skeleton
    this.root = new _Transform.Transform(); // Create bones

    this.bones = [];
    if (!rig.bones || !rig.bones.length) return;

    for (let i = 0; i < rig.bones.length; i++) {
      const bone = new _Transform.Transform(); // Set initial values (bind pose)

      bone.position.fromArray(rig.bindPose.position, i * 3);
      bone.quaternion.fromArray(rig.bindPose.quaternion, i * 4);
      bone.scale.fromArray(rig.bindPose.scale, i * 3);
      this.bones.push(bone);
    } // Once created, set the hierarchy


    rig.bones.forEach((data, i) => {
      this.bones[i].name = data.name;
      if (data.parent === -1) return this.bones[i].setParent(this.root);
      this.bones[i].setParent(this.bones[data.parent]);
    }); // Then update to calculate world matrices

    this.root.updateMatrixWorld(true); // Store inverse of bind pose to calculate differences

    this.bones.forEach(bone => {
      bone.bindInverse = new _Mat.Mat4(...bone.worldMatrix).inverse();
    });
  }

  createBoneTexture() {
    if (!this.bones.length) return;
    const size = Math.max(4, Math.pow(2, Math.ceil(Math.log(Math.sqrt(this.bones.length * 4)) / Math.LN2)));
    this.boneMatrices = new Float32Array(size * size * 4);
    this.boneTextureSize = size;
    this.boneTexture = new _Texture.Texture(this.gl, {
      image: this.boneMatrices,
      generateMipmaps: false,
      type: this.gl.FLOAT,
      internalFormat: this.gl.renderer.isWebgl2 ? this.gl.RGBA32F : this.gl.RGBA,
      minFilter: this.gl.NEAREST,
      magFilter: this.gl.NEAREST,
      flipY: false,
      width: size
    });
  }

  addAnimation(data) {
    const animation = new _Animation.Animation({
      objects: this.bones,
      data
    });
    this.animations.push(animation);
    return animation;
  }

  update() {
    // Calculate combined animation weight
    let total = 0;
    this.animations.forEach(animation => total += animation.weight);
    this.animations.forEach((animation, i) => {
      // force first animation to set in order to reset frame
      animation.update(total, i === 0);
    });
  }

  draw({
    camera
  } = {}) {
    // Update world matrices manually, as not part of scene graph
    this.root.updateMatrixWorld(true); // Update bone texture

    this.bones.forEach((bone, i) => {
      // Find difference between current and bind pose
      tempMat4.multiply(bone.worldMatrix, bone.bindInverse);
      this.boneMatrices.set(tempMat4, i * 16);
    });
    if (this.boneTexture) this.boneTexture.needsUpdate = true;
    super.draw({
      camera
    });
  }

}

exports.Skin = Skin;
},{"../core/Mesh.js":"../node_modules/ogl/src/core/Mesh.js","../core/Transform.js":"../node_modules/ogl/src/core/Transform.js","../math/Mat4.js":"../node_modules/ogl/src/math/Mat4.js","../core/Texture.js":"../node_modules/ogl/src/core/Texture.js","./Animation.js":"../node_modules/ogl/src/extras/Animation.js"}],"../node_modules/ogl/src/extras/Text.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = Text;

function Text({
  font,
  text,
  width = Infinity,
  align = 'left',
  size = 1,
  letterSpacing = 0,
  lineHeight = 1.4,
  wordSpacing = 0,
  wordBreak = false
}) {
  const _this = this;

  let glyphs, buffers;
  let fontHeight, baseline, scale;
  const newline = /\n/;
  const whitespace = /\s/;
  {
    parseFont();
    createGeometry();
  }

  function parseFont() {
    glyphs = {};
    font.chars.forEach(d => glyphs[d.char] = d);
  }

  function createGeometry() {
    fontHeight = font.common.lineHeight;
    baseline = font.common.base; // Use baseline so that actual text height is as close to 'size' value as possible

    scale = size / baseline; // Strip spaces and newlines to get actual character length for buffers

    let chars = text.replace(/[ \n]/g, '');
    let numChars = chars.length; // Create output buffers

    buffers = {
      position: new Float32Array(numChars * 4 * 3),
      uv: new Float32Array(numChars * 4 * 2),
      id: new Float32Array(numChars * 4),
      index: new Uint16Array(numChars * 6)
    }; // Set values for buffers that don't require calculation

    for (let i = 0; i < numChars; i++) {
      buffers.id[i] = i;
      buffers.index.set([i * 4, i * 4 + 2, i * 4 + 1, i * 4 + 1, i * 4 + 2, i * 4 + 3], i * 6);
    }

    layout();
  }

  function layout() {
    const lines = [];
    let cursor = 0;
    let wordCursor = 0;
    let wordWidth = 0;
    let line = newLine();

    function newLine() {
      const line = {
        width: 0,
        glyphs: []
      };
      lines.push(line);
      wordCursor = cursor;
      wordWidth = 0;
      return line;
    }

    let maxTimes = 100;
    let count = 0;

    while (cursor < text.length && count < maxTimes) {
      count++;
      const char = text[cursor]; // Skip whitespace at start of line

      if (!line.width && whitespace.test(char)) {
        cursor++;
        wordCursor = cursor;
        wordWidth = 0;
        continue;
      } // If newline char, skip to next line


      if (newline.test(char)) {
        cursor++;
        line = newLine();
        continue;
      }

      const glyph = glyphs[char] || glyphs[' ']; // Find any applicable kern pairs

      if (line.glyphs.length) {
        const prevGlyph = line.glyphs[line.glyphs.length - 1][0];
        let kern = getKernPairOffset(glyph.id, prevGlyph.id) * scale;
        line.width += kern;
        wordWidth += kern;
      } // add char to line


      line.glyphs.push([glyph, line.width]); // calculate advance for next glyph

      let advance = 0; // If whitespace, update location of current word for line breaks

      if (whitespace.test(char)) {
        wordCursor = cursor;
        wordWidth = 0; // Add wordspacing

        advance += wordSpacing * size;
      } else {
        // Add letterspacing
        advance += letterSpacing * size;
      }

      advance += glyph.xadvance * scale;
      line.width += advance;
      wordWidth += advance; // If width defined

      if (line.width > width) {
        // If can break words, undo latest glyph if line not empty and create new line
        if (wordBreak && line.glyphs.length > 1) {
          line.width -= advance;
          line.glyphs.pop();
          line = newLine();
          continue; // If not first word, undo current word and cursor and create new line
        } else if (!wordBreak && wordWidth !== line.width) {
          let numGlyphs = cursor - wordCursor + 1;
          line.glyphs.splice(-numGlyphs, numGlyphs);
          cursor = wordCursor;
          line.width -= wordWidth;
          line = newLine();
          continue;
        }
      }

      cursor++; // Reset infinite loop catch

      count = 0;
    } // Remove last line if empty


    if (!line.width) lines.pop();
    populateBuffers(lines);
  }

  function populateBuffers(lines) {
    const texW = font.common.scaleW;
    const texH = font.common.scaleH; // For all fonts tested, a little offset was needed to be right on the baseline, hence 0.07.

    let y = 0.07 * size;
    let j = 0;

    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
      let line = lines[lineIndex];

      for (let i = 0; i < line.glyphs.length; i++) {
        const glyph = line.glyphs[i][0];
        let x = line.glyphs[i][1];

        if (align === 'center') {
          x -= line.width * 0.5;
        } else if (align === 'right') {
          x -= line.width;
        } // If space, don't add to geometry


        if (whitespace.test(glyph.char)) continue; // Apply char sprite offsets

        x += glyph.xoffset * scale;
        y -= glyph.yoffset * scale; // each letter is a quad. axis bottom left

        let w = glyph.width * scale;
        let h = glyph.height * scale;
        buffers.position.set([x, y - h, 0, x, y, 0, x + w, y - h, 0, x + w, y, 0], j * 4 * 3);
        let u = glyph.x / texW;
        let uw = glyph.width / texW;
        let v = 1.0 - glyph.y / texH;
        let vh = glyph.height / texH;
        buffers.uv.set([u, v - vh, u, v, u + uw, v - vh, u + uw, v], j * 4 * 2); // Reset cursor to baseline

        y += glyph.yoffset * scale;
        j++;
      }

      y -= size * lineHeight;
    }

    _this.buffers = buffers;
    _this.numLines = lines.length;
    _this.height = _this.numLines * size * lineHeight;
    _this.width = Math.max(...lines.map(line => line.width));
  }

  function getKernPairOffset(id1, id2) {
    for (let i = 0; i < font.kernings.length; i++) {
      let k = font.kernings[i];
      if (k.first < id1) continue;
      if (k.second < id2) continue;
      if (k.first > id1) return 0;
      if (k.first === id1 && k.second > id2) return 0;
      return k.amount;
    }

    return 0;
  } // Update buffers to layout with new layout


  this.resize = function (options) {
    ({
      width
    } = options);
    layout();
  }; // Completely change text (like creating new Text)


  this.update = function (options) {
    ({
      text
    } = options);
    createGeometry();
  };
}
},{}],"../node_modules/ogl/src/extras/NormalProgram.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NormalProgram = NormalProgram;

var _Program = require("../core/Program.js");

const vertex =
/* glsl */
`
    precision highp float;
    precision highp int;

    attribute vec3 position;
    attribute vec3 normal;

    uniform mat3 normalMatrix;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    varying vec3 vNormal;

    void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;
const fragment =
/* glsl */
`
    precision highp float;
    precision highp int;

    varying vec3 vNormal;

    void main() {
        gl_FragColor.rgb = normalize(vNormal);
        gl_FragColor.a = 1.0;
    }
`;

function NormalProgram(gl) {
  return new _Program.Program(gl, {
    vertex: vertex,
    fragment: fragment,
    cullFace: null
  });
}
},{"../core/Program.js":"../node_modules/ogl/src/core/Program.js"}],"../node_modules/ogl/src/extras/Flowmap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flowmap = void 0;

var _RenderTarget = require("../core/RenderTarget.js");

var _Program = require("../core/Program.js");

var _Mesh = require("../core/Mesh.js");

var _Vec = require("../math/Vec2.js");

var _Triangle = require("./Triangle.js");

class Flowmap {
  constructor(gl, {
    size = 128,
    // default size of the render targets
    falloff = 0.3,
    // size of the stamp, percentage of the size
    alpha = 1,
    // opacity of the stamp
    dissipation = 0.98,
    // affects the speed that the stamp fades. Closer to 1 is slower
    type // Pass in gl.FLOAT to force it, defaults to gl.HALF_FLOAT

  } = {}) {
    const _this = this;

    this.gl = gl; // output uniform containing render target textures

    this.uniform = {
      value: null
    };
    this.mask = {
      read: null,
      write: null,
      // Helper function to ping pong the render targets and update the uniform
      swap: () => {
        let temp = _this.mask.read;
        _this.mask.read = _this.mask.write;
        _this.mask.write = temp;
        _this.uniform.value = _this.mask.read.texture;
      }
    };
    {
      createFBOs();
      this.aspect = 1;
      this.mouse = new _Vec.Vec2();
      this.velocity = new _Vec.Vec2();
      this.mesh = initProgram();
    }

    function createFBOs() {
      // Requested type not supported, fall back to half float
      if (!type) type = gl.HALF_FLOAT || gl.renderer.extensions['OES_texture_half_float'].HALF_FLOAT_OES;

      let minFilter = (() => {
        if (gl.renderer.isWebgl2) return gl.LINEAR;
        if (gl.renderer.extensions[`OES_texture_${type === gl.FLOAT ? '' : 'half_'}float_linear`]) return gl.LINEAR;
        return gl.NEAREST;
      })();

      const options = {
        width: size,
        height: size,
        type,
        format: gl.RGBA,
        internalFormat: gl.renderer.isWebgl2 ? type === gl.FLOAT ? gl.RGBA32F : gl.RGBA16F : gl.RGBA,
        minFilter,
        depth: false
      };
      _this.mask.read = new _RenderTarget.RenderTarget(gl, options);
      _this.mask.write = new _RenderTarget.RenderTarget(gl, options);

      _this.mask.swap();
    }

    function initProgram() {
      return new _Mesh.Mesh(gl, {
        // Triangle that includes -1 to 1 range for 'position', and 0 to 1 range for 'uv'.
        geometry: new _Triangle.Triangle(gl),
        program: new _Program.Program(gl, {
          vertex,
          fragment,
          uniforms: {
            tMap: _this.uniform,
            uFalloff: {
              value: falloff * 0.5
            },
            uAlpha: {
              value: alpha
            },
            uDissipation: {
              value: dissipation
            },
            // User needs to update these
            uAspect: {
              value: 1
            },
            uMouse: {
              value: _this.mouse
            },
            uVelocity: {
              value: _this.velocity
            }
          },
          depthTest: false
        })
      });
    }
  }

  update() {
    this.mesh.program.uniforms.uAspect.value = this.aspect;
    this.gl.renderer.render({
      scene: this.mesh,
      target: this.mask.write,
      clear: false
    });
    this.mask.swap();
  }

}

exports.Flowmap = Flowmap;
const vertex =
/* glsl */
`
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`;
const fragment =
/* glsl */
`
    precision highp float;

    uniform sampler2D tMap;

    uniform float uFalloff;
    uniform float uAlpha;
    uniform float uDissipation;
    
    uniform float uAspect;
    uniform vec2 uMouse;
    uniform vec2 uVelocity;

    varying vec2 vUv;

    void main() {
        vec4 color = texture2D(tMap, vUv) * uDissipation;

        vec2 cursor = vUv - uMouse;
        cursor.x *= uAspect;

        vec3 stamp = vec3(uVelocity * vec2(1, -1), 1.0 - pow(1.0 - min(1.0, length(uVelocity)), 3.0));
        float falloff = smoothstep(uFalloff, 0.0, length(cursor)) * uAlpha;

        color.rgb = mix(color.rgb, stamp, vec3(falloff));

        gl_FragColor = color;
    }
`;
},{"../core/RenderTarget.js":"../node_modules/ogl/src/core/RenderTarget.js","../core/Program.js":"../node_modules/ogl/src/core/Program.js","../core/Mesh.js":"../node_modules/ogl/src/core/Mesh.js","../math/Vec2.js":"../node_modules/ogl/src/math/Vec2.js","./Triangle.js":"../node_modules/ogl/src/extras/Triangle.js"}],"../node_modules/ogl/src/extras/GPGPU.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GPGPU = void 0;

var _Program = require("../core/Program.js");

var _Mesh = require("../core/Mesh.js");

var _Texture = require("../core/Texture.js");

var _RenderTarget = require("../core/RenderTarget.js");

var _Triangle = require("./Triangle.js");

class GPGPU {
  constructor(gl, {
    // Always pass in array of vec4s (RGBA values within texture)
    data = new Float32Array(16),
    geometry = new _Triangle.Triangle(gl),
    type // Pass in gl.FLOAT to force it, defaults to gl.HALF_FLOAT

  }) {
    this.gl = gl;
    const initialData = data;
    this.passes = [];
    this.geometry = geometry;
    this.dataLength = initialData.length / 4; // Windows and iOS only like power of 2 textures
    // Find smallest PO2 that fits data

    this.size = Math.pow(2, Math.ceil(Math.log(Math.ceil(Math.sqrt(this.dataLength))) / Math.LN2)); // Create coords for output texture

    this.coords = new Float32Array(this.dataLength * 2);

    for (let i = 0; i < this.dataLength; i++) {
      const x = i % this.size / this.size; // to add 0.5 to be center pixel ?

      const y = Math.floor(i / this.size) / this.size;
      this.coords.set([x, y], i * 2);
    } // Use original data if already correct length of PO2 texture, else copy to new array of correct length


    const floatArray = (() => {
      if (initialData.length === this.size * this.size * 4) {
        return initialData;
      } else {
        const a = new Float32Array(this.size * this.size * 4);
        a.set(initialData);
        return a;
      }
    })(); // Create output texture uniform using input float texture with initial data


    this.uniform = {
      value: new _Texture.Texture(gl, {
        image: floatArray,
        target: gl.TEXTURE_2D,
        type: gl.FLOAT,
        format: gl.RGBA,
        internalFormat: gl.renderer.isWebgl2 ? gl.RGBA32F : gl.RGBA,
        wrapS: gl.CLAMP_TO_EDGE,
        wrapT: gl.CLAMP_TO_EDGE,
        generateMipmaps: false,
        minFilter: gl.NEAREST,
        magFilter: gl.NEAREST,
        width: this.size,
        flipY: false
      })
    }; // Create FBOs

    const options = {
      width: this.size,
      height: this.size,
      type: type || gl.HALF_FLOAT || gl.renderer.extensions['OES_texture_half_float'].HALF_FLOAT_OES,
      format: gl.RGBA,
      internalFormat: gl.renderer.isWebgl2 ? type === gl.FLOAT ? gl.RGBA32F : gl.RGBA16F : gl.RGBA,
      minFilter: gl.NEAREST,
      depth: false,
      unpackAlignment: 1
    };
    this.fbo = {
      read: new _RenderTarget.RenderTarget(gl, options),
      write: new _RenderTarget.RenderTarget(gl, options),
      swap: () => {
        let temp = this.fbo.read;
        this.fbo.read = this.fbo.write;
        this.fbo.write = temp;
        this.uniform.value = this.fbo.read.texture;
      }
    };
  }

  addPass({
    vertex = defaultVertex,
    fragment = defaultFragment,
    uniforms = {},
    textureUniform = 'tMap',
    enabled = true
  } = {}) {
    uniforms[textureUniform] = this.uniform;
    const program = new _Program.Program(this.gl, {
      vertex,
      fragment,
      uniforms
    });
    const mesh = new _Mesh.Mesh(this.gl, {
      geometry: this.geometry,
      program
    });
    const pass = {
      mesh,
      program,
      uniforms,
      enabled,
      textureUniform
    };
    this.passes.push(pass);
    return pass;
  }

  render() {
    const enabledPasses = this.passes.filter(pass => pass.enabled);
    enabledPasses.forEach((pass, i) => {
      this.gl.renderer.render({
        scene: pass.mesh,
        target: this.fbo.write,
        clear: false
      });
      this.fbo.swap();
    });
  }

}

exports.GPGPU = GPGPU;
const defaultVertex =
/* glsl */
`
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`;
const defaultFragment =
/* glsl */
`
    precision highp float;

    uniform sampler2D tMap;
    varying vec2 vUv;

    void main() {
        gl_FragColor = texture2D(tMap, vUv);
    }
`;
},{"../core/Program.js":"../node_modules/ogl/src/core/Program.js","../core/Mesh.js":"../node_modules/ogl/src/core/Mesh.js","../core/Texture.js":"../node_modules/ogl/src/core/Texture.js","../core/RenderTarget.js":"../node_modules/ogl/src/core/RenderTarget.js","./Triangle.js":"../node_modules/ogl/src/extras/Triangle.js"}],"../node_modules/ogl/src/extras/Polyline.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Polyline = void 0;

var _Geometry = require("../core/Geometry.js");

var _Program = require("../core/Program.js");

var _Mesh = require("../core/Mesh.js");

var _Vec = require("../math/Vec2.js");

var _Vec2 = require("../math/Vec3.js");

var _Color = require("../math/Color.js");

const tmp = new _Vec2.Vec3();

class Polyline {
  constructor(gl, {
    points,
    // Array of Vec3s
    vertex = defaultVertex,
    fragment = defaultFragment,
    uniforms = {},
    attributes = {} // For passing in custom attribs

  }) {
    this.gl = gl;
    this.points = points;
    this.count = points.length; // Create buffers

    this.position = new Float32Array(this.count * 3 * 2);
    this.prev = new Float32Array(this.count * 3 * 2);
    this.next = new Float32Array(this.count * 3 * 2);
    const side = new Float32Array(this.count * 1 * 2);
    const uv = new Float32Array(this.count * 2 * 2);
    const index = new Uint16Array((this.count - 1) * 3 * 2); // Set static buffers

    for (let i = 0; i < this.count; i++) {
      side.set([-1, 1], i * 2);
      const v = i / (this.count - 1);
      uv.set([0, v, 1, v], i * 4);
      if (i === this.count - 1) continue;
      const ind = i * 2;
      index.set([ind + 0, ind + 1, ind + 2], (ind + 0) * 3);
      index.set([ind + 2, ind + 1, ind + 3], (ind + 1) * 3);
    }

    const geometry = this.geometry = new _Geometry.Geometry(gl, Object.assign(attributes, {
      position: {
        size: 3,
        data: this.position
      },
      prev: {
        size: 3,
        data: this.prev
      },
      next: {
        size: 3,
        data: this.next
      },
      side: {
        size: 1,
        data: side
      },
      uv: {
        size: 2,
        data: uv
      },
      index: {
        size: 1,
        data: index
      }
    })); // Populate dynamic buffers

    this.updateGeometry();
    if (!uniforms.uResolution) this.resolution = uniforms.uResolution = {
      value: new _Vec.Vec2()
    };
    if (!uniforms.uDPR) this.dpr = uniforms.uDPR = {
      value: 1
    };
    if (!uniforms.uThickness) this.thickness = uniforms.uThickness = {
      value: 1
    };
    if (!uniforms.uColor) this.color = uniforms.uColor = {
      value: new _Color.Color('#000')
    };
    if (!uniforms.uMiter) this.miter = uniforms.uMiter = {
      value: 1
    }; // Set size uniforms' values

    this.resize();
    const program = this.program = new _Program.Program(gl, {
      vertex,
      fragment,
      uniforms
    });
    this.mesh = new _Mesh.Mesh(gl, {
      geometry,
      program
    });
  }

  updateGeometry() {
    this.points.forEach((p, i) => {
      p.toArray(this.position, i * 3 * 2);
      p.toArray(this.position, i * 3 * 2 + 3);

      if (!i) {
        // If first point, calculate prev using the distance to 2nd point
        tmp.copy(p).sub(this.points[i + 1]).add(p);
        tmp.toArray(this.prev, i * 3 * 2);
        tmp.toArray(this.prev, i * 3 * 2 + 3);
      } else {
        p.toArray(this.next, (i - 1) * 3 * 2);
        p.toArray(this.next, (i - 1) * 3 * 2 + 3);
      }

      if (i === this.points.length - 1) {
        // If last point, calculate next using distance to 2nd last point
        tmp.copy(p).sub(this.points[i - 1]).add(p);
        tmp.toArray(this.next, i * 3 * 2);
        tmp.toArray(this.next, i * 3 * 2 + 3);
      } else {
        p.toArray(this.prev, (i + 1) * 3 * 2);
        p.toArray(this.prev, (i + 1) * 3 * 2 + 3);
      }
    });
    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.prev.needsUpdate = true;
    this.geometry.attributes.next.needsUpdate = true;
  } // Only need to call if not handling resolution uniforms manually


  resize() {
    // Update automatic uniforms if not overridden
    if (this.resolution) this.resolution.value.set(this.gl.canvas.width, this.gl.canvas.height);
    if (this.dpr) this.dpr.value = this.gl.renderer.dpr;
  }

}

exports.Polyline = Polyline;
const defaultVertex =
/* glsl */
`
    precision highp float;

    attribute vec3 position;
    attribute vec3 next;
    attribute vec3 prev;
    attribute vec2 uv;
    attribute float side;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform vec2 uResolution;
    uniform float uDPR;
    uniform float uThickness;
    uniform float uMiter;

    varying vec2 vUv;

    vec4 getPosition() {
        mat4 mvp = projectionMatrix * modelViewMatrix;
        vec4 current = mvp * vec4(position, 1);
        vec4 nextPos = mvp * vec4(next, 1);
        vec4 prevPos = mvp * vec4(prev, 1);

        vec2 aspect = vec2(uResolution.x / uResolution.y, 1);    
        vec2 currentScreen = current.xy / current.w * aspect;
        vec2 nextScreen = nextPos.xy / nextPos.w * aspect;
        vec2 prevScreen = prevPos.xy / prevPos.w * aspect;
    
        vec2 dir1 = normalize(currentScreen - prevScreen);
        vec2 dir2 = normalize(nextScreen - currentScreen);
        vec2 dir = normalize(dir1 + dir2);
    
        vec2 normal = vec2(-dir.y, dir.x);
        normal /= mix(1.0, max(0.3, dot(normal, vec2(-dir1.y, dir1.x))), uMiter);
        normal /= aspect;

        float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
        float pixelWidth = current.w * pixelWidthRatio;
        normal *= pixelWidth * uThickness;
        current.xy -= normal * side;
    
        return current;
    }

    void main() {
        vUv = uv;
        gl_Position = getPosition();
    }
`;
const defaultFragment =
/* glsl */
`
    precision highp float;

    uniform vec3 uColor;
    
    varying vec2 vUv;

    void main() {
        gl_FragColor.rgb = uColor;
        gl_FragColor.a = 1.0;
    }
`;
},{"../core/Geometry.js":"../node_modules/ogl/src/core/Geometry.js","../core/Program.js":"../node_modules/ogl/src/core/Program.js","../core/Mesh.js":"../node_modules/ogl/src/core/Mesh.js","../math/Vec2.js":"../node_modules/ogl/src/math/Vec2.js","../math/Vec3.js":"../node_modules/ogl/src/math/Vec3.js","../math/Color.js":"../node_modules/ogl/src/math/Color.js"}],"../node_modules/ogl/src/extras/Shadow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shadow = void 0;

var _Camera = require("../core/Camera.js");

var _Program = require("../core/Program.js");

var _RenderTarget = require("../core/RenderTarget.js");

class Shadow {
  constructor(gl, {
    light = new _Camera.Camera(gl),
    width = 1024,
    height = width
  }) {
    this.gl = gl;
    this.light = light;
    this.target = new _RenderTarget.RenderTarget(gl, {
      width,
      height
    });
    this.depthProgram = new _Program.Program(gl, {
      vertex: defaultVertex,
      fragment: defaultFragment,
      cullFace: null
    });
    this.castMeshes = [];
  }

  add({
    mesh,
    receive = true,
    cast = true,
    vertex = defaultVertex,
    fragment = defaultFragment,
    uniformProjection = 'shadowProjectionMatrix',
    uniformView = 'shadowViewMatrix',
    uniformTexture = 'tShadow'
  }) {
    // Add uniforms to existing program
    if (receive && !mesh.program.uniforms[uniformProjection]) {
      mesh.program.uniforms[uniformProjection] = {
        value: this.light.projectionMatrix
      };
      mesh.program.uniforms[uniformView] = {
        value: this.light.viewMatrix
      };
      mesh.program.uniforms[uniformTexture] = {
        value: this.target.texture
      };
    }

    if (!cast) return;
    this.castMeshes.push(mesh); // Store program for when switching between depth override

    mesh.colorProgram = mesh.program; // Check if depth program already attached

    if (mesh.depthProgram) return; // Use global depth override if nothing custom passed in

    if (vertex === defaultVertex && fragment === defaultFragment) {
      mesh.depthProgram = this.depthProgram;
      return;
    } // Create custom override program


    mesh.depthProgram = new _Program.Program(this.gl, {
      vertex,
      fragment,
      cullFace: null
    });
  }

  render({
    scene
  }) {
    // For depth render, replace program with depth override.
    // Hide meshes not casting shadows.
    scene.traverse(node => {
      if (!node.draw) return;

      if (!!~this.castMeshes.indexOf(node)) {
        node.program = node.depthProgram;
      } else {
        node.isForceVisibility = node.visible;
        node.visible = false;
      }
    }); // Render the depth shadow map using the light as the camera

    this.gl.renderer.render({
      scene,
      camera: this.light,
      target: this.target
    }); // Then switch the program back to the normal one

    scene.traverse(node => {
      if (!node.draw) return;

      if (!!~this.castMeshes.indexOf(node)) {
        node.program = node.colorProgram;
      } else {
        node.visible = node.isForceVisibility;
      }
    });
  }

}

exports.Shadow = Shadow;
const defaultVertex =
/* glsl */
`
    attribute vec3 position;
    attribute vec2 uv;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;
const defaultFragment =
/* glsl */
`
    precision highp float;

    vec4 packRGBA (float v) {
        vec4 pack = fract(vec4(1.0, 255.0, 65025.0, 16581375.0) * v);
        pack -= pack.yzww * vec2(1.0 / 255.0, 0.0).xxxy;
        return pack;
    }

    void main() {
        gl_FragColor = packRGBA(gl_FragCoord.z);
    }
`;
},{"../core/Camera.js":"../node_modules/ogl/src/core/Camera.js","../core/Program.js":"../node_modules/ogl/src/core/Program.js","../core/RenderTarget.js":"../node_modules/ogl/src/core/RenderTarget.js"}],"../node_modules/ogl/src/extras/KTXTexture.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KTXTexture = void 0;

var _Texture = require("../core/Texture.js");

// TODO: Support cubemaps
// Generate textures using https://github.com/TimvanScherpenzeel/texture-compressor
class KTXTexture extends _Texture.Texture {
  constructor(gl, {
    buffer,
    wrapS = gl.CLAMP_TO_EDGE,
    wrapT = gl.CLAMP_TO_EDGE,
    anisotropy = 0,
    minFilter,
    magFilter
  } = {}) {
    super(gl, {
      generateMipmaps: false,
      wrapS,
      wrapT,
      anisotropy,
      minFilter,
      magFilter
    });
    if (buffer) return this.parseBuffer(buffer);
  }

  parseBuffer(buffer) {
    const ktx = new KhronosTextureContainer(buffer);
    ktx.mipmaps.isCompressedTexture = true; // Update texture

    this.image = ktx.mipmaps;
    this.internalFormat = ktx.glInternalFormat;

    if (ktx.numberOfMipmapLevels > 1) {
      if (this.minFilter === this.gl.LINEAR) this.minFilter = this.gl.NEAREST_MIPMAP_LINEAR;
    } else {
      if (this.minFilter === this.gl.NEAREST_MIPMAP_LINEAR) this.minFilter = this.gl.LINEAR;
    } // TODO: support cube maps
    // ktx.numberOfFaces

  }

}

exports.KTXTexture = KTXTexture;

function KhronosTextureContainer(buffer) {
  const idCheck = [0xab, 0x4b, 0x54, 0x58, 0x20, 0x31, 0x31, 0xbb, 0x0d, 0x0a, 0x1a, 0x0a];
  const id = new Uint8Array(buffer, 0, 12);

  for (let i = 0; i < id.length; i++) if (id[i] !== idCheck[i]) return console.error('File missing KTX identifier'); // TODO: Is this always 4? Tested: [android, macos]


  const size = Uint32Array.BYTES_PER_ELEMENT;
  const head = new DataView(buffer, 12, 13 * size);
  const littleEndian = head.getUint32(0, true) === 0x04030201;
  const glType = head.getUint32(1 * size, littleEndian);
  if (glType !== 0) return console.warn('only compressed formats currently supported');
  this.glInternalFormat = head.getUint32(4 * size, littleEndian);
  let width = head.getUint32(6 * size, littleEndian);
  let height = head.getUint32(7 * size, littleEndian);
  this.numberOfFaces = head.getUint32(10 * size, littleEndian);
  this.numberOfMipmapLevels = Math.max(1, head.getUint32(11 * size, littleEndian));
  const bytesOfKeyValueData = head.getUint32(12 * size, littleEndian);
  this.mipmaps = [];
  let offset = 12 + 13 * 4 + bytesOfKeyValueData;

  for (let level = 0; level < this.numberOfMipmapLevels; level++) {
    const levelSize = new Int32Array(buffer, offset, 1)[0]; // size per face, since not supporting array cubemaps

    offset += 4; // levelSize field

    for (let face = 0; face < this.numberOfFaces; face++) {
      const data = new Uint8Array(buffer, offset, levelSize);
      this.mipmaps.push({
        data,
        width,
        height
      });
      offset += levelSize;
      offset += 3 - (levelSize + 3) % 4; // add padding for odd sized image
    }

    width = width >> 1;
    height = height >> 1;
  }
}
},{"../core/Texture.js":"../node_modules/ogl/src/core/Texture.js"}],"../node_modules/ogl/src/extras/TextureLoader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextureLoader = void 0;

var _Texture = require("../core/Texture.js");

var _KTXTexture = require("./KTXTexture.js");

// For compressed textures, generate using https://github.com/TimvanScherpenzeel/texture-compressor
let cache = {};
const supportedExtensions = [];

class TextureLoader {
  static load(gl, {
    src,
    // string or object of extension:src key-values
    // {
    //     pvrtc: '...ktx',
    //     s3tc: '...ktx',
    //     etc: '...ktx',
    //     etc1: '...ktx',
    //     astc: '...ktx',
    //     webp: '...webp',
    //     jpg: '...jpg',
    //     png: '...png',
    // }
    // Only props relevant to KTXTexture
    wrapS = gl.CLAMP_TO_EDGE,
    wrapT = gl.CLAMP_TO_EDGE,
    anisotropy = 0,
    // For regular images
    format = gl.RGBA,
    internalFormat = format,
    generateMipmaps = true,
    minFilter = generateMipmaps ? gl.NEAREST_MIPMAP_LINEAR : gl.LINEAR,
    magFilter = gl.LINEAR,
    premultiplyAlpha = false,
    unpackAlignment = 4,
    flipY = true
  } = {}) {
    const support = this.getSupportedExtensions(gl);
    let ext = 'none'; // If src is string, determine which format from the extension

    if (typeof src === 'string') {
      ext = src.split('.').pop().split('?')[0].toLowerCase();
    } // If src is object, use supported extensions and provided list to choose best option
    // Get first supported match, so put in order of preference


    if (typeof src === 'object') {
      for (const prop in src) {
        if (support.includes(prop.toLowerCase())) {
          ext = prop.toLowerCase();
          src = src[prop];
          break;
        }
      }
    } // Stringify props


    const cacheID = src + wrapS + wrapT + anisotropy + format + internalFormat + generateMipmaps + minFilter + magFilter + premultiplyAlpha + unpackAlignment + flipY + gl.renderer.id; // Check cache for existing texture

    if (cache[cacheID]) return cache[cacheID];
    let texture;

    switch (ext) {
      case 'ktx':
      case 'pvrtc':
      case 's3tc':
      case 'etc':
      case 'etc1':
      case 'astc':
        // Load compressed texture using KTX format
        texture = new _KTXTexture.KTXTexture(gl, {
          src,
          wrapS,
          wrapT,
          anisotropy,
          minFilter,
          magFilter
        });
        texture.loaded = this.loadKTX(src, texture);
        break;

      case 'webp':
      case 'jpg':
      case 'jpeg':
      case 'png':
        texture = new _Texture.Texture(gl, {
          wrapS,
          wrapT,
          anisotropy,
          format,
          internalFormat,
          generateMipmaps,
          minFilter,
          magFilter,
          premultiplyAlpha,
          unpackAlignment,
          flipY
        });
        texture.loaded = this.loadImage(gl, src, texture, flipY);
        break;

      default:
        console.warn('No supported format supplied');
        texture = new _Texture.Texture(gl);
    }

    texture.ext = ext;
    cache[cacheID] = texture;
    return texture;
  }

  static getSupportedExtensions(gl) {
    if (supportedExtensions.length) return supportedExtensions;
    const extensions = {
      pvrtc: gl.renderer.getExtension('WEBGL_compressed_texture_pvrtc') || gl.renderer.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc'),
      s3tc: gl.renderer.getExtension('WEBGL_compressed_texture_s3tc'),
      // etc: gl.renderer.getExtension('WEBGL_compressed_texture_etc'),
      etc1: gl.renderer.getExtension('WEBGL_compressed_texture_etc1'),
      astc: gl.renderer.getExtension('WEBGL_compressed_texture_astc'),
      bc7: gl.renderer.getExtension('EXT_texture_compression_bptc')
    };

    for (const ext in extensions) if (extensions[ext]) supportedExtensions.push(ext); // Check for WebP support


    if (detectWebP()) supportedExtensions.push('webp'); // Formats supported by all

    supportedExtensions.push('png', 'jpg');
    return supportedExtensions;
  }

  static loadKTX(src, texture) {
    return fetch(src).then(res => res.arrayBuffer()).then(buffer => texture.parseBuffer(buffer));
  }

  static loadImage(gl, src, texture, flipY) {
    return decodeImage(src, flipY).then(imgBmp => {
      // Catch non POT textures and update params to avoid errors
      if (!powerOfTwo(imgBmp.width) || !powerOfTwo(imgBmp.height)) {
        if (texture.generateMipmaps) texture.generateMipmaps = false;
        if (texture.minFilter === gl.NEAREST_MIPMAP_LINEAR) texture.minFilter = gl.LINEAR;
        if (texture.wrapS === gl.REPEAT) texture.wrapS = texture.wrapT = gl.CLAMP_TO_EDGE;
      }

      texture.image = imgBmp; // For createImageBitmap, close once uploaded

      texture.onUpdate = () => {
        if (imgBmp.close) imgBmp.close();
        texture.onUpdate = null;
      };

      return imgBmp;
    });
  }

  static clearCache() {
    cache = {};
  }

}

exports.TextureLoader = TextureLoader;

function detectWebP() {
  return document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
}

function powerOfTwo(value) {
  // (width & (width - 1)) !== 0
  return Math.log2(value) % 1 === 0;
}

function decodeImage(src, flipY) {
  return new Promise(resolve => {
    // Only chrome's implementation of createImageBitmap is fully supported
    const isChrome = navigator.userAgent.toLowerCase().includes('chrome');

    if (!!window.createImageBitmap && isChrome) {
      fetch(src, {
        mode: 'cors'
      }).then(r => r.blob()).then(b => createImageBitmap(b, {
        imageOrientation: flipY ? 'flipY' : 'none',
        premultiplyAlpha: 'none'
      })).then(resolve);
    } else {
      const img = new Image();
      img.crossOrigin = '';
      img.src = src;

      img.onload = () => resolve(img);
    }
  });
}
},{"../core/Texture.js":"../node_modules/ogl/src/core/Texture.js","./KTXTexture.js":"../node_modules/ogl/src/extras/KTXTexture.js"}],"../node_modules/ogl/src/extras/GLTFAnimation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GLTFAnimation = void 0;

var _Vec = require("../math/Vec3.js");

var _Quat = require("../math/Quat.js");

const tmpVec3A = new _Vec.Vec3();
const tmpVec3B = new _Vec.Vec3();
const tmpVec3C = new _Vec.Vec3();
const tmpVec3D = new _Vec.Vec3();
const tmpQuatA = new _Quat.Quat();
const tmpQuatB = new _Quat.Quat();
const tmpQuatC = new _Quat.Quat();
const tmpQuatD = new _Quat.Quat();

class GLTFAnimation {
  constructor(data, weight = 1) {
    this.data = data;
    this.elapsed = 0;
    this.weight = weight; // Set to false to not apply modulo to elapsed against duration

    this.loop = true; // Find starting time as exports from blender (perhaps others too) don't always start from 0

    this.startTime = data.reduce((a, {
      times
    }) => Math.min(a, times[0]), Infinity); // Get largest final time in all channels to calculate duration

    this.endTime = data.reduce((a, {
      times
    }) => Math.max(a, times[times.length - 1]), 0);
    this.duration = this.endTime - this.startTime;
  }

  update(totalWeight = 1, isSet) {
    const weight = isSet ? 1 : this.weight / totalWeight;
    const elapsed = !this.duration ? 0 : (this.loop ? this.elapsed % this.duration : Math.min(this.elapsed, this.duration - 0.001)) + this.startTime;
    this.data.forEach(({
      node,
      transform,
      interpolation,
      times,
      values
    }) => {
      if (!this.duration) {
        let val = tmpVec3A;
        let size = 3;

        if (transform === 'quaternion') {
          val = tmpQuatA;
          size = 4;
        }

        val.fromArray(values, 0);
        if (size === 4) node[transform].slerp(val, weight);else node[transform].lerp(val, weight);
        return;
      } // Get index of two time values elapsed is between


      const prevIndex = Math.max(1, times.findIndex(t => t > elapsed)) - 1;
      const nextIndex = prevIndex + 1; // Get linear blend/alpha between the two

      let alpha = (elapsed - times[prevIndex]) / (times[nextIndex] - times[prevIndex]);
      if (interpolation === 'STEP') alpha = 0;
      let prevVal = tmpVec3A;
      let prevTan = tmpVec3B;
      let nextTan = tmpVec3C;
      let nextVal = tmpVec3D;
      let size = 3;

      if (transform === 'quaternion') {
        prevVal = tmpQuatA;
        prevTan = tmpQuatB;
        nextTan = tmpQuatC;
        nextVal = tmpQuatD;
        size = 4;
      }

      if (interpolation === 'CUBICSPLINE') {
        // Get the prev and next values from the indices
        prevVal.fromArray(values, prevIndex * size * 3 + size * 1);
        prevTan.fromArray(values, prevIndex * size * 3 + size * 2);
        nextTan.fromArray(values, nextIndex * size * 3 + size * 0);
        nextVal.fromArray(values, nextIndex * size * 3 + size * 1); // interpolate for final value

        prevVal = this.cubicSplineInterpolate(alpha, prevVal, prevTan, nextTan, nextVal);
        if (size === 4) prevVal.normalize();
      } else {
        // Get the prev and next values from the indices
        prevVal.fromArray(values, prevIndex * size);
        nextVal.fromArray(values, nextIndex * size); // interpolate for final value

        if (size === 4) prevVal.slerp(nextVal, alpha);else prevVal.lerp(nextVal, alpha);
      } // interpolate between multiple possible animations


      if (size === 4) node[transform].slerp(prevVal, weight);else node[transform].lerp(prevVal, weight);
    });
  }

  cubicSplineInterpolate(t, prevVal, prevTan, nextTan, nextVal) {
    const t2 = t * t;
    const t3 = t2 * t;
    const s2 = 3 * t2 - 2 * t3;
    const s3 = t3 - t2;
    const s0 = 1 - s2;
    const s1 = s3 - t2 + t;

    for (let i = 0; i < prevVal.length; i++) {
      prevVal[i] = s0 * prevVal[i] + s1 * (1 - t) * prevTan[i] + s2 * nextVal[i] + s3 * t * nextTan[i];
    }

    return prevVal;
  }

}

exports.GLTFAnimation = GLTFAnimation;
},{"../math/Vec3.js":"../node_modules/ogl/src/math/Vec3.js","../math/Quat.js":"../node_modules/ogl/src/math/Quat.js"}],"../node_modules/ogl/src/extras/GLTFSkin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GLTFSkin = void 0;

var _Mesh = require("../core/Mesh.js");

var _Mat = require("../math/Mat4.js");

var _Texture = require("../core/Texture.js");

const tempMat4 = new _Mat.Mat4();
const identity = new _Mat.Mat4();

class GLTFSkin extends _Mesh.Mesh {
  constructor(gl, {
    skeleton,
    geometry,
    program,
    mode = gl.TRIANGLES
  } = {}) {
    super(gl, {
      geometry,
      program,
      mode
    });
    this.skeleton = skeleton;
    this.program = program;
    this.createBoneTexture();
    this.animations = [];
  }

  createBoneTexture() {
    if (!this.skeleton.joints.length) return;
    const size = Math.max(4, Math.pow(2, Math.ceil(Math.log(Math.sqrt(this.skeleton.joints.length * 4)) / Math.LN2)));
    this.boneMatrices = new Float32Array(size * size * 4);
    this.boneTextureSize = size;
    this.boneTexture = new _Texture.Texture(this.gl, {
      image: this.boneMatrices,
      generateMipmaps: false,
      type: this.gl.FLOAT,
      internalFormat: this.gl.renderer.isWebgl2 ? this.gl.RGBA32F : this.gl.RGBA,
      minFilter: this.gl.NEAREST,
      magFilter: this.gl.NEAREST,
      flipY: false,
      width: size
    });
  } // addAnimation(data) {
  //     const animation = new Animation({ objects: this.bones, data });
  //     this.animations.push(animation);
  //     return animation;
  // }
  // updateAnimations() {
  //     // Calculate combined animation weight
  //     let total = 0;
  //     this.animations.forEach((animation) => (total += animation.weight));
  //     this.animations.forEach((animation, i) => {
  //         // force first animation to set in order to reset frame
  //         animation.update(total, i === 0);
  //     });
  // }


  updateUniforms() {
    // Update bone texture
    this.skeleton.joints.forEach((bone, i) => {
      // Find difference between current and bind pose
      tempMat4.multiply(bone.worldMatrix, bone.bindInverse);
      this.boneMatrices.set(tempMat4, i * 16);
    });
    if (this.boneTexture) this.boneTexture.needsUpdate = true;
  }

  draw({
    camera
  } = {}) {
    if (!this.program.uniforms.boneTexture) {
      Object.assign(this.program.uniforms, {
        boneTexture: {
          value: this.boneTexture
        },
        boneTextureSize: {
          value: this.boneTextureSize
        }
      });
    }

    this.updateUniforms(); // Switch the world matrix with identity to ignore any transforms
    // on the mesh itself - only use skeleton's transforms

    const _worldMatrix = this.worldMatrix;
    this.worldMatrix = identity;
    super.draw({
      camera
    }); // Switch back to leave identity untouched

    this.worldMatrix = _worldMatrix;
  }

}

exports.GLTFSkin = GLTFSkin;
},{"../core/Mesh.js":"../node_modules/ogl/src/core/Mesh.js","../math/Mat4.js":"../node_modules/ogl/src/math/Mat4.js","../core/Texture.js":"../node_modules/ogl/src/core/Texture.js"}],"../node_modules/ogl/src/extras/GLTFLoader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GLTFLoader = void 0;

var _Geometry = require("../core/Geometry.js");

var _Transform = require("../core/Transform.js");

var _Texture = require("../core/Texture.js");

var _Mesh = require("../core/Mesh.js");

var _GLTFAnimation = require("./GLTFAnimation.js");

var _GLTFSkin = require("./GLTFSkin.js");

var _Mat = require("../math/Mat4.js");

var _Vec = require("../math/Vec3.js");

var _NormalProgram = require("./NormalProgram.js");

// Supports
// [x] glb
// [x] Geometry
// [x] Nodes and Hierarchy
// [x] Instancing
// [x] Skins
// [x] Textures
// [x] Animation
// [x] GLB support
// [x] Basis/ktx2
// [x] KHR_lights_punctual lights
// [ ] Morph Targets
// [ ] Materials
// [ ] Cameras
// TODO: Sparse accessor packing? For morph targets basically
// TODO: init accessor missing bufferView with 0s
// TODO: morph target animations
// TODO: option to turn off GPU instancing
const TYPE_ARRAY = {
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array,
  'image/jpeg': Uint8Array,
  'image/png': Uint8Array
};
const TYPE_SIZE = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
};
const ATTRIBUTES = {
  POSITION: 'position',
  NORMAL: 'normal',
  TANGENT: 'tangent',
  TEXCOORD_0: 'uv',
  TEXCOORD_1: 'uv2',
  COLOR_0: 'color',
  WEIGHTS_0: 'skinWeight',
  JOINTS_0: 'skinIndex'
};
const TRANSFORMS = {
  translation: 'position',
  rotation: 'quaternion',
  scale: 'scale'
};

class GLTFLoader {
  static setBasisManager(manager) {
    this.basisManager = manager;
  }

  static async load(gl, src) {
    const dir = src.split('/').slice(0, -1).join('/') + '/'; // load main description json

    const desc = await this.parseDesc(src);
    return await this.parse(gl, desc, dir);
  }

  static async parse(gl, desc, dir) {
    if (desc.asset === undefined || desc.asset.version[0] < 2) console.warn('Only GLTF >=2.0 supported. Attempting to parse.');
    if (desc.extensionsRequired?.includes('KHR_texture_basisu') && !this.basisManager) console.warn('KHR_texture_basisu extension required but no manager supplied. Use .setBasisManager()'); // Load buffers async

    const buffers = await this.loadBuffers(desc, dir); // Unbind current VAO so that new buffers don't get added to active mesh

    gl.renderer.bindVertexArray(null); // Create gl buffers from bufferViews

    const bufferViews = this.parseBufferViews(gl, desc, buffers); // Create images from either bufferViews or separate image files

    const images = await this.parseImages(gl, desc, dir, bufferViews);
    const textures = this.parseTextures(gl, desc, images); // Just pass through material data for now

    const materials = this.parseMaterials(gl, desc, textures); // Fetch the inverse bind matrices for skeleton joints

    const skins = this.parseSkins(gl, desc, bufferViews); // Create geometries for each mesh primitive

    const meshes = this.parseMeshes(gl, desc, bufferViews, materials, skins); // Create transforms, meshes and hierarchy

    const nodes = this.parseNodes(gl, desc, meshes, skins, images); // Place nodes in skeletons

    this.populateSkins(skins, nodes); // Create animation handlers

    const animations = this.parseAnimations(gl, desc, nodes, bufferViews); // Get top level nodes for each scene

    const scenes = this.parseScenes(desc, nodes);
    const scene = scenes[desc.scene]; // Create uniforms for scene lights (TODO: light linking?)

    const lights = this.parseLights(gl, desc, nodes, scenes); // Remove null nodes (instanced transforms)

    for (let i = nodes.length; i >= 0; i--) if (!nodes[i]) nodes.splice(i, 1);

    return {
      json: desc,
      buffers,
      bufferViews,
      images,
      textures,
      materials,
      meshes,
      nodes,
      lights,
      animations,
      scenes,
      scene
    };
  }

  static async parseDesc(src) {
    if (!src.match(/\.glb/)) {
      return await fetch(src).then(res => res.json());
    } else {
      return await fetch(src).then(res => res.arrayBuffer()).then(glb => this.unpackGLB(glb));
    }
  } // From https://github.com/donmccurdy/glTF-Transform/blob/e4108cc/packages/core/src/io/io.ts#L32


  static unpackGLB(glb) {
    // Decode and verify GLB header.
    const header = new Uint32Array(glb, 0, 3);

    if (header[0] !== 0x46546c67) {
      throw new Error('Invalid glTF asset.');
    } else if (header[1] !== 2) {
      throw new Error(`Unsupported glTF binary version, "${header[1]}".`);
    } // Decode and verify chunk headers.


    const jsonChunkHeader = new Uint32Array(glb, 12, 2);
    const jsonByteOffset = 20;
    const jsonByteLength = jsonChunkHeader[0];

    if (jsonChunkHeader[1] !== 0x4e4f534a) {
      throw new Error('Unexpected GLB layout.');
    } // Decode JSON.


    const jsonText = new TextDecoder().decode(glb.slice(jsonByteOffset, jsonByteOffset + jsonByteLength));
    const json = JSON.parse(jsonText); // JSON only

    if (jsonByteOffset + jsonByteLength === glb.byteLength) return json;
    const binaryChunkHeader = new Uint32Array(glb, jsonByteOffset + jsonByteLength, 2);

    if (binaryChunkHeader[1] !== 0x004e4942) {
      throw new Error('Unexpected GLB layout.');
    } // Decode content.


    const binaryByteOffset = jsonByteOffset + jsonByteLength + 8;
    const binaryByteLength = binaryChunkHeader[0];
    const binary = glb.slice(binaryByteOffset, binaryByteOffset + binaryByteLength); // Attach binary to buffer

    json.buffers[0].binary = binary;
    return json;
  } // Threejs GLTF Loader https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/GLTFLoader.js#L1085


  static resolveURI(uri, dir) {
    // Invalid URI
    if (typeof uri !== 'string' || uri === '') return ''; // Host Relative URI

    if (/^https?:\/\//i.test(dir) && /^\//.test(uri)) {
      dir = dir.replace(/(^https?:\/\/[^\/]+).*/i, '$1');
    } // Absolute URI http://, https://, //


    if (/^(https?:)?\/\//i.test(uri)) return uri; // Data URI

    if (/^data:.*,.*$/i.test(uri)) return uri; // Blob URI

    if (/^blob:.*$/i.test(uri)) return uri; // Relative URI

    return dir + uri;
  }

  static async loadBuffers(desc, dir) {
    if (!desc.buffers) return null;
    return await Promise.all(desc.buffers.map(buffer => {
      // For GLB, binary buffer ready to go
      if (buffer.binary) return buffer.binary;
      const uri = this.resolveURI(buffer.uri, dir);
      return fetch(uri).then(res => res.arrayBuffer());
    }));
  }

  static parseBufferViews(gl, desc, buffers) {
    if (!desc.bufferViews) return null; // Clone to leave description pure

    const bufferViews = desc.bufferViews.map(o => Object.assign({}, o));
    desc.meshes && desc.meshes.forEach(({
      primitives
    }) => {
      primitives.forEach(({
        attributes,
        indices
      }) => {
        // Flag bufferView as an attribute, so it knows to create a gl buffer
        for (let attr in attributes) bufferViews[desc.accessors[attributes[attr]].bufferView].isAttribute = true;

        if (indices === undefined) return;
        bufferViews[desc.accessors[indices].bufferView].isAttribute = true; // Make sure indices bufferView have a target property for gl buffer binding

        bufferViews[desc.accessors[indices].bufferView].target = gl.ELEMENT_ARRAY_BUFFER;
      });
    }); // Get componentType of each bufferView from the accessors

    desc.accessors.forEach(({
      bufferView: i,
      componentType
    }) => {
      bufferViews[i].componentType = componentType;
    }); // Get mimetype of bufferView from images

    desc.images && desc.images.forEach(({
      uri,
      bufferView: i,
      mimeType
    }) => {
      if (i === undefined) return;
      bufferViews[i].mimeType = mimeType;
    }); // Push each bufferView to the GPU as a separate buffer

    bufferViews.forEach(({
      buffer: bufferIndex,
      // required
      byteOffset = 0,
      // optional
      byteLength,
      // required
      byteStride,
      // optional
      target = gl.ARRAY_BUFFER,
      // optional, added above for elements
      name,
      // optional
      extensions,
      // optional
      extras,
      // optional
      componentType,
      // optional, added from accessor above
      mimeType,
      // optional, added from images above
      isAttribute
    }, i) => {
      // For basis, just slice buffer
      if (mimeType === 'image/ktx2') {
        bufferViews[i].data = buffers[bufferIndex].slice(byteOffset, byteOffset + byteLength);
        return;
      }

      const TypeArray = TYPE_ARRAY[componentType || mimeType];
      const elementBytes = TypeArray.BYTES_PER_ELEMENT;
      const data = new TypeArray(buffers[bufferIndex], byteOffset, byteLength / elementBytes);
      bufferViews[i].data = data;
      bufferViews[i].originalBuffer = buffers[bufferIndex];
      if (!isAttribute) return; // Create gl buffers for the bufferView, pushing it to the GPU

      const buffer = gl.createBuffer();
      gl.bindBuffer(target, buffer);
      gl.renderer.state.boundBuffer = buffer;
      gl.bufferData(target, data, gl.STATIC_DRAW);
      bufferViews[i].buffer = buffer;
    });
    return bufferViews;
  }

  static async parseImages(gl, desc, dir, bufferViews) {
    if (!desc.images) return null;
    return await Promise.all(desc.images.map(async ({
      uri,
      bufferView: bufferViewIndex,
      mimeType,
      name
    }) => {
      if (mimeType === 'image/ktx2') {
        const {
          data
        } = bufferViews[bufferViewIndex];
        const image = await this.basisManager.parseTexture(data);
        return image;
      } // jpg / png


      const image = new Image();
      image.name = name;

      if (uri) {
        image.src = this.resolveURI(uri, dir);
      } else if (bufferViewIndex !== undefined) {
        const {
          data
        } = bufferViews[bufferViewIndex];
        const blob = new Blob([data], {
          type: mimeType
        });
        image.src = URL.createObjectURL(blob);
      }

      image.ready = new Promise(res => {
        image.onload = () => res();
      });
      return image;
    }));
  }

  static parseTextures(gl, desc, images) {
    if (!desc.textures) return null;
    return desc.textures.map(textureInfo => this.createTexture(gl, desc, images, textureInfo));
  }

  static createTexture(gl, desc, images, {
    sampler: samplerIndex,
    source: sourceIndex,
    name,
    extensions,
    extras
  }) {
    if (sourceIndex === undefined && !!extensions) {
      // Basis extension source index
      if (extensions.KHR_texture_basisu) sourceIndex = extensions.KHR_texture_basisu.source;
    }

    const image = images[sourceIndex];
    if (image.texture) return image.texture;
    const options = {
      flipY: false,
      wrapS: gl.REPEAT,
      // Repeat by default, opposed to OGL's clamp by default
      wrapT: gl.REPEAT
    };
    const sampler = samplerIndex !== undefined ? desc.samplers[samplerIndex] : null;

    if (sampler) {
      ['magFilter', 'minFilter', 'wrapS', 'wrapT'].forEach(prop => {
        if (sampler[prop]) options[prop] = sampler[prop];
      });
    } // For compressed textures


    if (image.isBasis) {
      options.image = image;
      options.internalFormat = image.internalFormat;

      if (image.isCompressedTexture) {
        options.generateMipmaps = false;
        if (image.length > 1) this.minFilter = gl.NEAREST_MIPMAP_LINEAR;
      }

      const texture = new _Texture.Texture(gl, options);
      texture.name = name;
      image.texture = texture;
      return texture;
    }

    const texture = new _Texture.Texture(gl, options);
    texture.name = name;
    image.texture = texture;
    image.ready.then(() => {
      texture.image = image;
    });
    return texture;
  }

  static parseMaterials(gl, desc, textures) {
    if (!desc.materials) return null;
    return desc.materials.map(({
      name,
      extensions,
      extras,
      pbrMetallicRoughness = {},
      normalTexture,
      occlusionTexture,
      emissiveTexture,
      emissiveFactor = [0, 0, 0],
      alphaMode = 'OPAQUE',
      alphaCutoff = 0.5,
      doubleSided = false
    }) => {
      const {
        baseColorFactor = [1, 1, 1, 1],
        baseColorTexture,
        metallicFactor = 1,
        roughnessFactor = 1,
        metallicRoughnessTexture //   extensions,
        //   extras,

      } = pbrMetallicRoughness;

      if (baseColorTexture) {
        baseColorTexture.texture = textures[baseColorTexture.index]; // texCoord
      }

      if (normalTexture) {
        normalTexture.texture = textures[normalTexture.index]; // scale: 1
        // texCoord
      }

      if (metallicRoughnessTexture) {
        metallicRoughnessTexture.texture = textures[metallicRoughnessTexture.index]; // texCoord
      }

      if (occlusionTexture) {
        occlusionTexture.texture = textures[occlusionTexture.index]; // strength 1
        // texCoord
      }

      if (emissiveTexture) {
        emissiveTexture.texture = textures[emissiveTexture.index]; // texCoord
      }

      return {
        name,
        extensions,
        extras,
        baseColorFactor,
        baseColorTexture,
        metallicFactor,
        roughnessFactor,
        metallicRoughnessTexture,
        normalTexture,
        occlusionTexture,
        emissiveTexture,
        emissiveFactor,
        alphaMode,
        alphaCutoff,
        doubleSided
      };
    });
  }

  static parseSkins(gl, desc, bufferViews) {
    if (!desc.skins) return null;
    return desc.skins.map(({
      inverseBindMatrices,
      // optional
      skeleton,
      // optional
      joints // required
      // name,
      // extensions,
      // extras,

    }) => {
      return {
        inverseBindMatrices: this.parseAccessor(inverseBindMatrices, desc, bufferViews),
        skeleton,
        joints
      };
    });
  }

  static parseMeshes(gl, desc, bufferViews, materials, skins) {
    if (!desc.meshes) return null;
    return desc.meshes.map(({
      primitives,
      // required
      weights,
      // optional
      name,
      // optional
      extensions,
      // optional
      extras // optional

    }, meshIndex) => {
      // TODO: weights stuff ?
      // Parse through nodes to see how many instances there are
      // and if there is a skin attached
      let numInstances = 0;
      let skinIndex = false;
      let isLightmap = false;
      desc.nodes && desc.nodes.forEach(({
        mesh,
        skin,
        extras
      }) => {
        if (mesh === meshIndex) {
          numInstances++;
          if (skin !== undefined) skinIndex = skin;
          if (extras && extras.lightmap_scale_offset) isLightmap = true;
        }
      });
      primitives = this.parsePrimitives(gl, primitives, desc, bufferViews, materials, numInstances, isLightmap).map(({
        geometry,
        program,
        mode
      }) => {
        // Create either skinned mesh or regular mesh
        const mesh = typeof skinIndex === 'number' ? new _GLTFSkin.GLTFSkin(gl, {
          skeleton: skins[skinIndex],
          geometry,
          program,
          mode
        }) : new _Mesh.Mesh(gl, {
          geometry,
          program,
          mode
        });
        mesh.name = name;

        if (mesh.geometry.isInstanced) {
          // Tag mesh so that nodes can add their transforms to the instance attribute
          mesh.numInstances = numInstances; // Avoid incorrect culling for instances

          mesh.frustumCulled = false;
        }

        return mesh;
      });
      return {
        primitives,
        weights,
        name
      };
    });
  }

  static parsePrimitives(gl, primitives, desc, bufferViews, materials, numInstances, isLightmap) {
    return primitives.map(({
      attributes,
      // required
      indices,
      // optional
      material: materialIndex,
      // optional
      mode = 4,
      // optional
      targets,
      // optional
      extensions,
      // optional
      extras // optional

    }) => {
      // TODO: materials
      const program = new _NormalProgram.NormalProgram(gl);

      if (materialIndex !== undefined) {
        program.gltfMaterial = materials[materialIndex];
      }

      const geometry = new _Geometry.Geometry(gl); // Add each attribute found in primitive

      for (let attr in attributes) {
        geometry.addAttribute(ATTRIBUTES[attr], this.parseAccessor(attributes[attr], desc, bufferViews));
      } // Add index attribute if found


      if (indices !== undefined) {
        geometry.addAttribute('index', this.parseAccessor(indices, desc, bufferViews));
      } // Add instanced transform attribute if multiple instances


      if (numInstances > 1) {
        geometry.addAttribute('instanceMatrix', {
          instanced: 1,
          size: 16,
          data: new Float32Array(numInstances * 16)
        });

        if (isLightmap) {
          geometry.addAttribute('lightmapScaleOffset', {
            instanced: 1,
            size: 4,
            data: new Float32Array(numInstances * 4)
          });
        }
      }

      return {
        geometry,
        program,
        mode
      };
    });
  }

  static parseAccessor(index, desc, bufferViews) {
    // TODO: init missing bufferView with 0s
    // TODO: support sparse
    const {
      bufferView: bufferViewIndex,
      // optional
      byteOffset = 0,
      // optional
      componentType,
      // required
      normalized = false,
      // optional
      count,
      // required
      type,
      // required
      min,
      // optional
      max,
      // optional
      sparse // optional
      // name, // optional
      // extensions, // optional
      // extras, // optional

    } = desc.accessors[index];
    const {
      data,
      // attached in parseBufferViews
      originalBuffer,
      // attached in parseBufferViews
      buffer,
      // replaced to be the actual GL buffer
      byteOffset: bufferByteOffset = 0,
      // byteLength, // applied in parseBufferViews
      byteStride = 0,
      target // name,
      // extensions,
      // extras,

    } = bufferViews[bufferViewIndex];
    const size = TYPE_SIZE[type]; // Parse data from joined buffers

    const TypeArray = TYPE_ARRAY[componentType];
    const elementBytes = data.BYTES_PER_ELEMENT;
    const componentOffset = byteOffset / elementBytes;
    const componentStride = byteStride / elementBytes;
    const isInterleaved = !!byteStride && componentStride !== size; // TODO: interleaved

    const newData = isInterleaved ? data : new TypeArray(originalBuffer, byteOffset + bufferByteOffset, count * size); // Return attribute data

    return {
      data: newData,
      size,
      type: componentType,
      normalized,
      buffer,
      stride: byteStride,
      offset: byteOffset,
      count,
      min,
      max
    };
  }

  static parseNodes(gl, desc, meshes, skins, images) {
    if (!desc.nodes) return null;
    const nodes = desc.nodes.map(({
      camera,
      // optional
      children,
      // optional
      skin: skinIndex,
      // optional
      matrix,
      // optional
      mesh: meshIndex,
      // optional
      rotation,
      // optional
      scale,
      // optional
      translation,
      // optional
      weights,
      // optional
      name,
      // optional
      extensions,
      // optional
      extras // optional

    }) => {
      const node = new _Transform.Transform();
      if (name) node.name = name;
      node.extras = extras;
      node.extensions = extensions; // Need to attach to node as may have same material but different lightmap

      if (extras && extras.lightmapTexture !== undefined) {
        extras.lightmapTexture.texture = this.createTexture(gl, desc, images, {
          source: extras.lightmapTexture.index
        });
      } // Apply transformations


      if (matrix) {
        node.matrix.copy(matrix);
        node.decompose();
      } else {
        if (rotation) node.quaternion.copy(rotation);
        if (scale) node.scale.copy(scale);
        if (translation) node.position.copy(translation);
        node.updateMatrix();
      } // Flags for avoiding duplicate transforms and removing unused instance nodes


      let isInstanced = false;
      let isFirstInstance = true; // add mesh if included

      if (meshIndex !== undefined) {
        meshes[meshIndex].primitives.forEach(mesh => {
          mesh.extras = extras;

          if (mesh.geometry.isInstanced) {
            isInstanced = true;

            if (!mesh.instanceCount) {
              mesh.instanceCount = 0;
            } else {
              isFirstInstance = false;
            }

            node.matrix.toArray(mesh.geometry.attributes.instanceMatrix.data, mesh.instanceCount * 16);

            if (mesh.geometry.attributes.lightmapScaleOffset && extras && extras.lightmap_scale_offset) {
              mesh.geometry.attributes.lightmapScaleOffset.data.set(extras.lightmap_scale_offset, mesh.instanceCount * 4);
            }

            mesh.instanceCount++;

            if (mesh.instanceCount === mesh.numInstances) {
              // Remove properties once all instances added
              delete mesh.numInstances;
              delete mesh.instanceCount; // Flag attribute as dirty

              mesh.geometry.attributes.instanceMatrix.needsUpdate = true;

              if (mesh.geometry.attributes.lightmapScaleOffset) {
                mesh.geometry.attributes.lightmapScaleOffset.needsUpdate = true;
              }
            }
          } // For instances, only the first node will actually have the mesh


          if (isInstanced) {
            if (isFirstInstance) mesh.setParent(node);
          } else {
            mesh.setParent(node);
          }
        });
      } // Reset node if instanced to not duplicate transforms


      if (isInstanced) {
        // Remove unused nodes just providing an instance transform
        if (!isFirstInstance) return null; // Avoid duplicate transform for node containing the instanced mesh

        node.matrix.identity();
        node.decompose();
      }

      return node;
    });
    desc.nodes.forEach(({
      children = []
    }, i) => {
      // Set hierarchy now all nodes created
      children.forEach(childIndex => {
        if (!nodes[childIndex]) return;
        nodes[childIndex].setParent(nodes[i]);
      });
    });
    return nodes;
  }

  static populateSkins(skins, nodes) {
    if (!skins) return;
    skins.forEach(skin => {
      skin.joints = skin.joints.map((i, index) => {
        const joint = nodes[i];
        joint.bindInverse = new _Mat.Mat4(...skin.inverseBindMatrices.data.slice(index * 16, (index + 1) * 16));
        return joint;
      });
      if (skin.skeleton) skin.skeleton = nodes[skin.skeleton];
    });
  }

  static parseAnimations(gl, desc, nodes, bufferViews) {
    if (!desc.animations) return null;
    return desc.animations.map(({
      channels,
      // required
      samplers,
      // required
      name // optional
      // extensions, // optional
      // extras,  // optional

    }) => {
      const data = channels.map(({
        sampler: samplerIndex,
        // required
        target // required
        // extensions, // optional
        // extras, // optional

      }) => {
        const {
          input: inputIndex,
          // required
          interpolation = 'LINEAR',
          output: outputIndex // required
          // extensions, // optional
          // extras, // optional

        } = samplers[samplerIndex];
        const {
          node: nodeIndex,
          // optional - TODO: when is it not included?
          path // required
          // extensions, // optional
          // extras, // optional

        } = target;
        const node = nodes[nodeIndex];
        const transform = TRANSFORMS[path];
        const times = this.parseAccessor(inputIndex, desc, bufferViews).data;
        const values = this.parseAccessor(outputIndex, desc, bufferViews).data;
        return {
          node,
          transform,
          interpolation,
          times,
          values
        };
      });
      return {
        name,
        animation: new _GLTFAnimation.GLTFAnimation(data)
      };
    });
  }

  static parseScenes(desc, nodes) {
    if (!desc.scenes) return null;
    return desc.scenes.map(({
      nodes: nodesIndices = [],
      name,
      // optional
      extensions,
      extras
    }) => {
      const scene = nodesIndices.reduce((map, i) => {
        // Don't add null nodes (instanced transforms)
        if (nodes[i]) map.push(nodes[i]);
        return map;
      }, []);
      scene.extras = extras;
      return scene;
    });
  }

  static parseLights(gl, desc, nodes, scenes) {
    const lights = {
      directional: [],
      point: [],
      spot: []
    }; // Update matrices on root nodes

    scenes.forEach(scene => scene.forEach(node => node.updateMatrixWorld())); // uses KHR_lights_punctual extension

    const lightsDescArray = desc.extensions?.KHR_lights_punctual?.lights || []; // Need nodes for transforms

    nodes.forEach(node => {
      if (!node?.extensions?.KHR_lights_punctual) return;
      const lightIndex = node.extensions.KHR_lights_punctual.light;
      const lightDesc = lightsDescArray[lightIndex];
      const light = {
        name: lightDesc.name || '',
        color: {
          value: new _Vec.Vec3().set(lightDesc.color || 1)
        }
      }; // Apply intensity directly to color

      if (lightDesc.intensity !== undefined) light.color.value.multiply(lightDesc.intensity);

      switch (lightDesc.type) {
        case 'directional':
          light.direction = {
            value: new _Vec.Vec3(0, 0, 1).transformDirection(node.worldMatrix)
          };
          break;

        case 'point':
          light.position = {
            value: new _Vec.Vec3().applyMatrix4(node.worldMatrix)
          };
          light.distance = {
            value: lightDesc.range
          };
          light.decay = {
            value: 2
          };
          break;

        case 'spot':
          // TODO: support spot uniforms
          Object.assign(light, lightDesc);
          break;
      }

      lights[lightDesc.type].push(light);
    });
    return lights;
  }

}

exports.GLTFLoader = GLTFLoader;
},{"../core/Geometry.js":"../node_modules/ogl/src/core/Geometry.js","../core/Transform.js":"../node_modules/ogl/src/core/Transform.js","../core/Texture.js":"../node_modules/ogl/src/core/Texture.js","../core/Mesh.js":"../node_modules/ogl/src/core/Mesh.js","./GLTFAnimation.js":"../node_modules/ogl/src/extras/GLTFAnimation.js","./GLTFSkin.js":"../node_modules/ogl/src/extras/GLTFSkin.js","../math/Mat4.js":"../node_modules/ogl/src/math/Mat4.js","../math/Vec3.js":"../node_modules/ogl/src/math/Vec3.js","./NormalProgram.js":"../node_modules/ogl/src/extras/NormalProgram.js"}],"../node_modules/ogl/src/extras/BasisManager.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasisManager = void 0;
let supportedFormat;
let id = 0;

class BasisManager {
  constructor(workerSrc) {
    if (!supportedFormat) supportedFormat = this.getSupportedFormat();
    this.onMessage = this.onMessage.bind(this);
    this.queue = new Map();
    this.initWorker(workerSrc);
  }

  getSupportedFormat() {
    const gl = document.createElement('canvas').getContext('webgl');
    /* if (!!gl.getExtension('WEBGL_compressed_texture_etc')) {
        return 'etc2';
    } else  */

    if (!!gl.getExtension('WEBGL_compressed_texture_astc')) {
      return 'astc';
    } else if (!!gl.getExtension('EXT_texture_compression_bptc')) {
      return 'bptc';
    } else if (!!gl.getExtension('WEBGL_compressed_texture_s3tc')) {
      return 's3tc';
    } else if (!!gl.getExtension('WEBGL_compressed_texture_etc1')) {
      return 'etc1';
    } else if (!!gl.getExtension('WEBGL_compressed_texture_pvrtc') || !!gl.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc')) {
      return 'pvrtc'; // } else if (!!gl.getExtension('WEBGL_compressed_texture_atc')) {
      //     return 'atc';
    }

    return 'none';
  }

  initWorker(workerSrc) {
    this.worker = new Worker(workerSrc);
    this.worker.onmessage = this.onMessage;
  }

  onMessage({
    data
  }) {
    const {
      id,
      error,
      image
    } = data;

    if (error) {
      console.log(error, id);
      return;
    }

    const textureResolve = this.queue.get(id);
    this.queue.delete(id);
    image.isBasis = true;
    textureResolve(image);
  }

  parseTexture(buffer) {
    id++;
    this.worker.postMessage({
      id,
      buffer,
      supportedFormat
    });
    let textureResolve;
    const promise = new Promise(res => textureResolve = res);
    this.queue.set(id, textureResolve);
    return promise;
  }

}

exports.BasisManager = BasisManager;
},{}],"../node_modules/ogl/src/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Geometry", {
  enumerable: true,
  get: function () {
    return _Geometry.Geometry;
  }
});
Object.defineProperty(exports, "Program", {
  enumerable: true,
  get: function () {
    return _Program.Program;
  }
});
Object.defineProperty(exports, "Renderer", {
  enumerable: true,
  get: function () {
    return _Renderer.Renderer;
  }
});
Object.defineProperty(exports, "Camera", {
  enumerable: true,
  get: function () {
    return _Camera.Camera;
  }
});
Object.defineProperty(exports, "Transform", {
  enumerable: true,
  get: function () {
    return _Transform.Transform;
  }
});
Object.defineProperty(exports, "Mesh", {
  enumerable: true,
  get: function () {
    return _Mesh.Mesh;
  }
});
Object.defineProperty(exports, "Texture", {
  enumerable: true,
  get: function () {
    return _Texture.Texture;
  }
});
Object.defineProperty(exports, "RenderTarget", {
  enumerable: true,
  get: function () {
    return _RenderTarget.RenderTarget;
  }
});
Object.defineProperty(exports, "Color", {
  enumerable: true,
  get: function () {
    return _Color.Color;
  }
});
Object.defineProperty(exports, "Euler", {
  enumerable: true,
  get: function () {
    return _Euler.Euler;
  }
});
Object.defineProperty(exports, "Mat3", {
  enumerable: true,
  get: function () {
    return _Mat.Mat3;
  }
});
Object.defineProperty(exports, "Mat4", {
  enumerable: true,
  get: function () {
    return _Mat2.Mat4;
  }
});
Object.defineProperty(exports, "Quat", {
  enumerable: true,
  get: function () {
    return _Quat.Quat;
  }
});
Object.defineProperty(exports, "Vec2", {
  enumerable: true,
  get: function () {
    return _Vec.Vec2;
  }
});
Object.defineProperty(exports, "Vec3", {
  enumerable: true,
  get: function () {
    return _Vec2.Vec3;
  }
});
Object.defineProperty(exports, "Vec4", {
  enumerable: true,
  get: function () {
    return _Vec3.Vec4;
  }
});
Object.defineProperty(exports, "Plane", {
  enumerable: true,
  get: function () {
    return _Plane.Plane;
  }
});
Object.defineProperty(exports, "Box", {
  enumerable: true,
  get: function () {
    return _Box.Box;
  }
});
Object.defineProperty(exports, "Sphere", {
  enumerable: true,
  get: function () {
    return _Sphere.Sphere;
  }
});
Object.defineProperty(exports, "Cylinder", {
  enumerable: true,
  get: function () {
    return _Cylinder.Cylinder;
  }
});
Object.defineProperty(exports, "Triangle", {
  enumerable: true,
  get: function () {
    return _Triangle.Triangle;
  }
});
Object.defineProperty(exports, "Torus", {
  enumerable: true,
  get: function () {
    return _Torus.Torus;
  }
});
Object.defineProperty(exports, "Orbit", {
  enumerable: true,
  get: function () {
    return _Orbit.Orbit;
  }
});
Object.defineProperty(exports, "Raycast", {
  enumerable: true,
  get: function () {
    return _Raycast.Raycast;
  }
});
Object.defineProperty(exports, "Curve", {
  enumerable: true,
  get: function () {
    return _Curve.Curve;
  }
});
Object.defineProperty(exports, "Post", {
  enumerable: true,
  get: function () {
    return _Post.Post;
  }
});
Object.defineProperty(exports, "Skin", {
  enumerable: true,
  get: function () {
    return _Skin.Skin;
  }
});
Object.defineProperty(exports, "Animation", {
  enumerable: true,
  get: function () {
    return _Animation.Animation;
  }
});
Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function () {
    return _Text.Text;
  }
});
Object.defineProperty(exports, "NormalProgram", {
  enumerable: true,
  get: function () {
    return _NormalProgram.NormalProgram;
  }
});
Object.defineProperty(exports, "Flowmap", {
  enumerable: true,
  get: function () {
    return _Flowmap.Flowmap;
  }
});
Object.defineProperty(exports, "GPGPU", {
  enumerable: true,
  get: function () {
    return _GPGPU.GPGPU;
  }
});
Object.defineProperty(exports, "Polyline", {
  enumerable: true,
  get: function () {
    return _Polyline.Polyline;
  }
});
Object.defineProperty(exports, "Shadow", {
  enumerable: true,
  get: function () {
    return _Shadow.Shadow;
  }
});
Object.defineProperty(exports, "KTXTexture", {
  enumerable: true,
  get: function () {
    return _KTXTexture.KTXTexture;
  }
});
Object.defineProperty(exports, "TextureLoader", {
  enumerable: true,
  get: function () {
    return _TextureLoader.TextureLoader;
  }
});
Object.defineProperty(exports, "GLTFLoader", {
  enumerable: true,
  get: function () {
    return _GLTFLoader.GLTFLoader;
  }
});
Object.defineProperty(exports, "GLTFSkin", {
  enumerable: true,
  get: function () {
    return _GLTFSkin.GLTFSkin;
  }
});
Object.defineProperty(exports, "BasisManager", {
  enumerable: true,
  get: function () {
    return _BasisManager.BasisManager;
  }
});

var _Geometry = require("./core/Geometry.js");

var _Program = require("./core/Program.js");

var _Renderer = require("./core/Renderer.js");

var _Camera = require("./core/Camera.js");

var _Transform = require("./core/Transform.js");

var _Mesh = require("./core/Mesh.js");

var _Texture = require("./core/Texture.js");

var _RenderTarget = require("./core/RenderTarget.js");

var _Color = require("./math/Color.js");

var _Euler = require("./math/Euler.js");

var _Mat = require("./math/Mat3.js");

var _Mat2 = require("./math/Mat4.js");

var _Quat = require("./math/Quat.js");

var _Vec = require("./math/Vec2.js");

var _Vec2 = require("./math/Vec3.js");

var _Vec3 = require("./math/Vec4.js");

var _Plane = require("./extras/Plane.js");

var _Box = require("./extras/Box.js");

var _Sphere = require("./extras/Sphere.js");

var _Cylinder = require("./extras/Cylinder.js");

var _Triangle = require("./extras/Triangle.js");

var _Torus = require("./extras/Torus.js");

var _Orbit = require("./extras/Orbit.js");

var _Raycast = require("./extras/Raycast.js");

var _Curve = require("./extras/Curve.js");

var _Post = require("./extras/Post.js");

var _Skin = require("./extras/Skin.js");

var _Animation = require("./extras/Animation.js");

var _Text = require("./extras/Text.js");

var _NormalProgram = require("./extras/NormalProgram.js");

var _Flowmap = require("./extras/Flowmap.js");

var _GPGPU = require("./extras/GPGPU.js");

var _Polyline = require("./extras/Polyline.js");

var _Shadow = require("./extras/Shadow.js");

var _KTXTexture = require("./extras/KTXTexture.js");

var _TextureLoader = require("./extras/TextureLoader.js");

var _GLTFLoader = require("./extras/GLTFLoader.js");

var _GLTFSkin = require("./extras/GLTFSkin.js");

var _BasisManager = require("./extras/BasisManager.js");
},{"./core/Geometry.js":"../node_modules/ogl/src/core/Geometry.js","./core/Program.js":"../node_modules/ogl/src/core/Program.js","./core/Renderer.js":"../node_modules/ogl/src/core/Renderer.js","./core/Camera.js":"../node_modules/ogl/src/core/Camera.js","./core/Transform.js":"../node_modules/ogl/src/core/Transform.js","./core/Mesh.js":"../node_modules/ogl/src/core/Mesh.js","./core/Texture.js":"../node_modules/ogl/src/core/Texture.js","./core/RenderTarget.js":"../node_modules/ogl/src/core/RenderTarget.js","./math/Color.js":"../node_modules/ogl/src/math/Color.js","./math/Euler.js":"../node_modules/ogl/src/math/Euler.js","./math/Mat3.js":"../node_modules/ogl/src/math/Mat3.js","./math/Mat4.js":"../node_modules/ogl/src/math/Mat4.js","./math/Quat.js":"../node_modules/ogl/src/math/Quat.js","./math/Vec2.js":"../node_modules/ogl/src/math/Vec2.js","./math/Vec3.js":"../node_modules/ogl/src/math/Vec3.js","./math/Vec4.js":"../node_modules/ogl/src/math/Vec4.js","./extras/Plane.js":"../node_modules/ogl/src/extras/Plane.js","./extras/Box.js":"../node_modules/ogl/src/extras/Box.js","./extras/Sphere.js":"../node_modules/ogl/src/extras/Sphere.js","./extras/Cylinder.js":"../node_modules/ogl/src/extras/Cylinder.js","./extras/Triangle.js":"../node_modules/ogl/src/extras/Triangle.js","./extras/Torus.js":"../node_modules/ogl/src/extras/Torus.js","./extras/Orbit.js":"../node_modules/ogl/src/extras/Orbit.js","./extras/Raycast.js":"../node_modules/ogl/src/extras/Raycast.js","./extras/Curve.js":"../node_modules/ogl/src/extras/Curve.js","./extras/Post.js":"../node_modules/ogl/src/extras/Post.js","./extras/Skin.js":"../node_modules/ogl/src/extras/Skin.js","./extras/Animation.js":"../node_modules/ogl/src/extras/Animation.js","./extras/Text.js":"../node_modules/ogl/src/extras/Text.js","./extras/NormalProgram.js":"../node_modules/ogl/src/extras/NormalProgram.js","./extras/Flowmap.js":"../node_modules/ogl/src/extras/Flowmap.js","./extras/GPGPU.js":"../node_modules/ogl/src/extras/GPGPU.js","./extras/Polyline.js":"../node_modules/ogl/src/extras/Polyline.js","./extras/Shadow.js":"../node_modules/ogl/src/extras/Shadow.js","./extras/KTXTexture.js":"../node_modules/ogl/src/extras/KTXTexture.js","./extras/TextureLoader.js":"../node_modules/ogl/src/extras/TextureLoader.js","./extras/GLTFLoader.js":"../node_modules/ogl/src/extras/GLTFLoader.js","./extras/GLTFSkin.js":"../node_modules/ogl/src/extras/GLTFSkin.js","./extras/BasisManager.js":"../node_modules/ogl/src/extras/BasisManager.js"}],"js/follow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ogl = require("ogl");

var lines = function lines() {
  var vertex =
  /* glsl */
  "\n    precision highp float;\n    attribute vec3 position;\n    attribute vec3 next;\n    attribute vec3 prev;\n    attribute vec2 uv;\n    attribute float side;\n    uniform vec2 uResolution;\n    uniform float uDPR;\n    uniform float uThickness;\n    vec4 getPosition() {\n        vec4 current = vec4(position, 1);\n        vec2 aspect = vec2(uResolution.x / uResolution.y, 1);\n        vec2 nextScreen = next.xy * aspect;\n        vec2 prevScreen = prev.xy * aspect;\n    \n        // Calculate the tangent direction\n        vec2 tangent = normalize(nextScreen - prevScreen);\n    \n        // Rotate 90 degrees to get the normal\n        vec2 normal = vec2(-tangent.y, tangent.x);\n        normal /= aspect;\n        // Taper the line to be fatter in the middle, and skinny at the ends using the uv.y\n        normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0) );\n        // When the points are on top of each other, shrink the line to avoid artifacts.\n        float dist = length(nextScreen - prevScreen);\n        normal *= smoothstep(0.0, 0.06, dist);\n        float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);\n        float pixelWidth = current.w * pixelWidthRatio;\n        normal *= pixelWidth * uThickness;\n        current.xy -= normal * side;\n    \n        return current;\n    }\n    void main() {\n        gl_Position = getPosition();\n    }\n";
  {
    var resize = function resize() {
      renderer.setSize(window.innerWidth, window.innerHeight); // We call resize on the polylines to update their resolution uniforms

      _lines.forEach(function (line) {
        return line.polyline.resize();
      });
    };

    // Just a helper function to make the code neater
    var random = function random(a, b) {
      var alpha = Math.random();
      return a * (1.0 - alpha) + b * alpha;
    }; // If you're interested in learning about drawing lines with geometry,
    // go through this detailed article by Matt DesLauriers
    // https://mattdesl.svbtle.com/drawing-lines-is-hard
    // It's an excellent breakdown of the approaches and their pitfalls.
    // In this example, we're making screen-space polylines. Basically it
    // involves creating a geometry of vertices along a path - with two vertices
    // at each point. Then in the vertex shader, we push each pair apart to
    // give the line some width.
    // We're going to make a number of different coloured lines for fun.


    var updateMouse = function updateMouse(e) {
      if (e.changedTouches && e.changedTouches.length) {
        e.x = e.changedTouches[0].pageX;
        e.y = e.changedTouches[0].pageY;
      }

      if (e.x === undefined) {
        e.x = e.pageX;
        e.y = e.pageY;
      } // Get mouse value in -1 to 1 range, with y flipped


      mouse.set(e.x / gl.renderer.width * 2 - 1, e.y / gl.renderer.height * -2 + 1, 0);
    };

    var update = function update(t) {
      requestAnimationFrame(update);

      _lines.forEach(function (line) {
        // Update polyline input points
        for (var i = line.points.length - 1; i >= 0; i--) {
          if (!i) {
            // For the first point, spring ease it to the mouse position
            tmp.copy(mouse).add(line.mouseOffset).sub(line.points[i]).multiply(line.spring);
            line.mouseVelocity.add(tmp).multiply(line.friction);
            line.points[i].add(line.mouseVelocity);
          } else {
            // The rest of the points ease to the point in front of them, making a line
            line.points[i].lerp(line.points[i - 1], 0.9);
          }
        }

        line.polyline.updateGeometry();
      });

      renderer.render({
        scene: scene
      });
    };

    var renderer = new _ogl.Renderer({
      dpr: 2
    });
    var gl = renderer.gl;
    document.body.appendChild(gl.canvas);
    gl.clearColor(0.945, 0.945, 0.945, 0.1);
    var scene = new _ogl.Transform();
    var _lines = [];
    window.addEventListener('resize', resize, false);
    ['#e09f7d', '#ef5d60', '#ec4067', '#a01a7d', '#311847'].forEach(function (color, i) {
      // Store a few values for each lines' spring movement
      var line = {
        spring: random(0.02, 0.1),
        friction: random(0.7, 0.95),
        mouseVelocity: new _ogl.Vec3(),
        mouseOffset: new _ogl.Vec3(random(-1, 1) * 0.02)
      }; // Create an array of Vec3s (eg [[0, 0, 0], ...])
      // Note: Only pass in one for each point on the line - the class will handle
      // the doubling of vertices for the polyline effect.

      var count = 30;
      var points = line.points = [];

      for (var _i = 0; _i < count; _i++) {
        points.push(new _ogl.Vec3());
      } // Pass in the points, and any custom elements - for example here we've made
      // custom shaders, and accompanying uniforms.


      line.polyline = new _ogl.Polyline(gl, {
        points: points,
        vertex: vertex,
        uniforms: {
          uColor: {
            value: new _ogl.Color(color)
          },
          uThickness: {
            value: random(10, 150)
          }
        }
      });
      line.polyline.mesh.setParent(scene);

      _lines.push(line);
    }); // Call initial resize after creating the polylines

    resize(); // Add handlers to get mouse position

    var mouse = new _ogl.Vec3();

    if ('ontouchstart' in window) {
      window.addEventListener('touchstart', updateMouse, false);
      window.addEventListener('touchmove', updateMouse, false);
    } else {
      window.addEventListener('mousemove', updateMouse, false);
    }

    var tmp = new _ogl.Vec3();
    requestAnimationFrame(update);
  }
};

var _default = lines;
exports.default = _default;
},{"ogl":"../node_modules/ogl/src/index.mjs"}],"js/interface/Nav.js":[function(require,module,exports) {
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
  var template = "\n    <h1>Hello..</h1>\n        <main>\n            <p>I'm <b>Jacob</b> a <b>Creative Developer</b> and <b>Front-End Developer</b> based in Quito - Ecuador.</p> \n            <p>I specialize building custom digital or physical experiences.</p>\n            <p>Im a <b>self-taught</b> developer, <b>fast learner</b> that works with<b> WebGL, JS, C++, OpenGL, GLSL</b></p>\n            <p>and recently curious about <b>Machine Learning.</b></p>\n            <p> contact me at <b>cyrstem[at]gmail[dot]com</b></p>   \n        </main>\n    ";
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
  var template = "\n      <div class =\"sites\"> \n         <ul>\n         <li>\n          <a href=\"https://activetheory.net/\" target=\"_blank\">\n            <span>Active Theory</span> \n            <span>WebGL Developer</span>\n            <span>2021</span>\n          </a>\n         </li>\n         <li>\n            <a href=\"https://myuniguru.com/\" target=\"_blank\">\n              <span>My Uniguru</span>\n              <span>FullStack Developer</span>\n              <span class=\"number\">2020 - 2021</span>\n            </a>\n          </li>\n         \n          <li>\n            <a href=\"https://www.yaesta.com\" target=\"_blank\">\n              <span> YaEsta </span>\n              <span> Front-end Developer & Designer</span> \n              <span class=\"number\">2016 - 2018</span>\n            </a>\n          </li>\n          <li>\n            <a href=\"https://todo.legal\" target=\"_blank\">\n              <span>Todo.legal</span> \n              <span>Front-end Developer & Web Designer</span>\n              <span class=\"number\">2020 - 2020</span>\n            </a>\n          </li>\n          <li>\n            <a href=\"https://smartco.com.ec\" target=\"_blank\"> \n              <span>Smartco </span>\n              <span> Front-end Developer & Unity Developer</span>\n              <span class=\"number\">2019 - 2020</span>\n            </a>\n          </li>\n          <li>\n            <a href=\"https://www.pachamama.org.ec/en/\" target=\"_blank\">\n              <span> Pachamama</span>\n              <span> Front-end Developer</span>\n              <span class=\"number\">2010 \u2013 2013</span>\n            </a>\n          </li>\n         </ul>\n      </div>\n    ";
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

var _follow = _interopRequireDefault(require("./js/follow"));

var _Nav = _interopRequireDefault(require("./js/interface/Nav"));

var _Contact = _interopRequireDefault(require("./js/interface/Contact"));

var _Home = _interopRequireDefault(require("./js/pages/Home"));

var _Portafolio = _interopRequireDefault(require("./js/pages/Portafolio"));

var _Not4u = _interopRequireDefault(require("./js/pages/Not4u"));

var _Experiments = _interopRequireDefault(require("./js/pages/Experiments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  (0, _follow.default)();
};
},{"./style/main.scss":"style/main.scss","./js/follow":"js/follow.js","./js/interface/Nav":"js/interface/Nav.js","./js/interface/Contact":"js/interface/Contact.js","./js/pages/Home":"js/pages/Home.js","./js/pages/Portafolio":"js/pages/Portafolio.js","./js/pages/Not4u":"js/pages/Not4u.js","./js/pages/Experiments":"js/pages/Experiments.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37217" + '/');

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