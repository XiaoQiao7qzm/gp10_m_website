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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/decode-uri-component/index.js":
/*!****************************************************!*\
  !*** ./node_modules/decode-uri-component/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar token = '%[a-f0-9]{2}';\nvar singleMatcher = new RegExp(token, 'gi');\nvar multiMatcher = new RegExp('(' + token + ')+', 'gi');\n\nfunction decodeComponents(components, split) {\n\ttry {\n\t\t// Try to decode the entire string first\n\t\treturn decodeURIComponent(components.join(''));\n\t} catch (err) {\n\t\t// Do nothing\n\t}\n\n\tif (components.length === 1) {\n\t\treturn components;\n\t}\n\n\tsplit = split || 1;\n\n\t// Split the array in 2 parts\n\tvar left = components.slice(0, split);\n\tvar right = components.slice(split);\n\n\treturn Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));\n}\n\nfunction decode(input) {\n\ttry {\n\t\treturn decodeURIComponent(input);\n\t} catch (err) {\n\t\tvar tokens = input.match(singleMatcher);\n\n\t\tfor (var i = 1; i < tokens.length; i++) {\n\t\t\tinput = decodeComponents(tokens, i).join('');\n\n\t\t\ttokens = input.match(singleMatcher);\n\t\t}\n\n\t\treturn input;\n\t}\n}\n\nfunction customDecodeURIComponent(input) {\n\t// Keep track of all the replacements and prefill the map with the `BOM`\n\tvar replaceMap = {\n\t\t'%FE%FF': '\\uFFFD\\uFFFD',\n\t\t'%FF%FE': '\\uFFFD\\uFFFD'\n\t};\n\n\tvar match = multiMatcher.exec(input);\n\twhile (match) {\n\t\ttry {\n\t\t\t// Decode as big chunks as possible\n\t\t\treplaceMap[match[0]] = decodeURIComponent(match[0]);\n\t\t} catch (err) {\n\t\t\tvar result = decode(match[0]);\n\n\t\t\tif (result !== match[0]) {\n\t\t\t\treplaceMap[match[0]] = result;\n\t\t\t}\n\t\t}\n\n\t\tmatch = multiMatcher.exec(input);\n\t}\n\n\t// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else\n\treplaceMap['%C2'] = '\\uFFFD';\n\n\tvar entries = Object.keys(replaceMap);\n\n\tfor (var i = 0; i < entries.length; i++) {\n\t\t// Replace all decoded components\n\t\tvar key = entries[i];\n\t\tinput = input.replace(new RegExp(key, 'g'), replaceMap[key]);\n\t}\n\n\treturn input;\n}\n\nmodule.exports = function (encodedURI) {\n\tif (typeof encodedURI !== 'string') {\n\t\tthrow new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');\n\t}\n\n\ttry {\n\t\tencodedURI = encodedURI.replace(/\\+/g, ' ');\n\n\t\t// Try the built in decoder first\n\t\treturn decodeURIComponent(encodedURI);\n\t} catch (err) {\n\t\t// Fallback to a more advanced decoder\n\t\treturn customDecodeURIComponent(encodedURI);\n\t}\n};\n\n\n//# sourceURL=webpack:///./node_modules/decode-uri-component/index.js?");

/***/ }),

/***/ "./node_modules/query-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst strictUriEncode = __webpack_require__(/*! strict-uri-encode */ \"./node_modules/strict-uri-encode/index.js\");\nconst decodeComponent = __webpack_require__(/*! decode-uri-component */ \"./node_modules/decode-uri-component/index.js\");\nconst splitOnFirst = __webpack_require__(/*! split-on-first */ \"./node_modules/split-on-first/index.js\");\n\nfunction encoderForArrayFormat(options) {\n\tswitch (options.arrayFormat) {\n\t\tcase 'index':\n\t\t\treturn key => (result, value) => {\n\t\t\t\tconst index = result.length;\n\t\t\t\tif (value === undefined) {\n\t\t\t\t\treturn result;\n\t\t\t\t}\n\n\t\t\t\tif (value === null) {\n\t\t\t\t\treturn [...result, [encode(key, options), '[', index, ']'].join('')];\n\t\t\t\t}\n\n\t\t\t\treturn [\n\t\t\t\t\t...result,\n\t\t\t\t\t[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')\n\t\t\t\t];\n\t\t\t};\n\n\t\tcase 'bracket':\n\t\t\treturn key => (result, value) => {\n\t\t\t\tif (value === undefined) {\n\t\t\t\t\treturn result;\n\t\t\t\t}\n\n\t\t\t\tif (value === null) {\n\t\t\t\t\treturn [...result, [encode(key, options), '[]'].join('')];\n\t\t\t\t}\n\n\t\t\t\treturn [...result, [encode(key, options), '[]=', encode(value, options)].join('')];\n\t\t\t};\n\n\t\tcase 'comma':\n\t\t\treturn key => (result, value, index) => {\n\t\t\t\tif (value === null || value === undefined || value.length === 0) {\n\t\t\t\t\treturn result;\n\t\t\t\t}\n\n\t\t\t\tif (index === 0) {\n\t\t\t\t\treturn [[encode(key, options), '=', encode(value, options)].join('')];\n\t\t\t\t}\n\n\t\t\t\treturn [[result, encode(value, options)].join(',')];\n\t\t\t};\n\n\t\tdefault:\n\t\t\treturn key => (result, value) => {\n\t\t\t\tif (value === undefined) {\n\t\t\t\t\treturn result;\n\t\t\t\t}\n\n\t\t\t\tif (value === null) {\n\t\t\t\t\treturn [...result, encode(key, options)];\n\t\t\t\t}\n\n\t\t\t\treturn [...result, [encode(key, options), '=', encode(value, options)].join('')];\n\t\t\t};\n\t}\n}\n\nfunction parserForArrayFormat(options) {\n\tlet result;\n\n\tswitch (options.arrayFormat) {\n\t\tcase 'index':\n\t\t\treturn (key, value, accumulator) => {\n\t\t\t\tresult = /\\[(\\d*)\\]$/.exec(key);\n\n\t\t\t\tkey = key.replace(/\\[\\d*\\]$/, '');\n\n\t\t\t\tif (!result) {\n\t\t\t\t\taccumulator[key] = value;\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tif (accumulator[key] === undefined) {\n\t\t\t\t\taccumulator[key] = {};\n\t\t\t\t}\n\n\t\t\t\taccumulator[key][result[1]] = value;\n\t\t\t};\n\n\t\tcase 'bracket':\n\t\t\treturn (key, value, accumulator) => {\n\t\t\t\tresult = /(\\[\\])$/.exec(key);\n\t\t\t\tkey = key.replace(/\\[\\]$/, '');\n\n\t\t\t\tif (!result) {\n\t\t\t\t\taccumulator[key] = value;\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tif (accumulator[key] === undefined) {\n\t\t\t\t\taccumulator[key] = [value];\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\taccumulator[key] = [].concat(accumulator[key], value);\n\t\t\t};\n\n\t\tcase 'comma':\n\t\t\treturn (key, value, accumulator) => {\n\t\t\t\tconst isArray = typeof value === 'string' && value.split('').indexOf(',') > -1;\n\t\t\t\tconst newValue = isArray ? value.split(',') : value;\n\t\t\t\taccumulator[key] = newValue;\n\t\t\t};\n\n\t\tdefault:\n\t\t\treturn (key, value, accumulator) => {\n\t\t\t\tif (accumulator[key] === undefined) {\n\t\t\t\t\taccumulator[key] = value;\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\taccumulator[key] = [].concat(accumulator[key], value);\n\t\t\t};\n\t}\n}\n\nfunction encode(value, options) {\n\tif (options.encode) {\n\t\treturn options.strict ? strictUriEncode(value) : encodeURIComponent(value);\n\t}\n\n\treturn value;\n}\n\nfunction decode(value, options) {\n\tif (options.decode) {\n\t\treturn decodeComponent(value);\n\t}\n\n\treturn value;\n}\n\nfunction keysSorter(input) {\n\tif (Array.isArray(input)) {\n\t\treturn input.sort();\n\t}\n\n\tif (typeof input === 'object') {\n\t\treturn keysSorter(Object.keys(input))\n\t\t\t.sort((a, b) => Number(a) - Number(b))\n\t\t\t.map(key => input[key]);\n\t}\n\n\treturn input;\n}\n\nfunction removeHash(input) {\n\tconst hashStart = input.indexOf('#');\n\tif (hashStart !== -1) {\n\t\tinput = input.slice(0, hashStart);\n\t}\n\n\treturn input;\n}\n\nfunction extract(input) {\n\tinput = removeHash(input);\n\tconst queryStart = input.indexOf('?');\n\tif (queryStart === -1) {\n\t\treturn '';\n\t}\n\n\treturn input.slice(queryStart + 1);\n}\n\nfunction parse(input, options) {\n\toptions = Object.assign({\n\t\tdecode: true,\n\t\tsort: true,\n\t\tarrayFormat: 'none',\n\t\tparseNumbers: false,\n\t\tparseBooleans: false\n\t}, options);\n\n\tconst formatter = parserForArrayFormat(options);\n\n\t// Create an object with no prototype\n\tconst ret = Object.create(null);\n\n\tif (typeof input !== 'string') {\n\t\treturn ret;\n\t}\n\n\tinput = input.trim().replace(/^[?#&]/, '');\n\n\tif (!input) {\n\t\treturn ret;\n\t}\n\n\tfor (const param of input.split('&')) {\n\t\tlet [key, value] = splitOnFirst(param.replace(/\\+/g, ' '), '=');\n\n\t\t// Missing `=` should be `null`:\n\t\t// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters\n\t\tvalue = value === undefined ? null : decode(value, options);\n\n\t\tif (options.parseNumbers && !Number.isNaN(Number(value))) {\n\t\t\tvalue = Number(value);\n\t\t} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {\n\t\t\tvalue = value.toLowerCase() === 'true';\n\t\t}\n\n\t\tformatter(decode(key, options), value, ret);\n\t}\n\n\tif (options.sort === false) {\n\t\treturn ret;\n\t}\n\n\treturn (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {\n\t\tconst value = ret[key];\n\t\tif (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {\n\t\t\t// Sort object keys, not values\n\t\t\tresult[key] = keysSorter(value);\n\t\t} else {\n\t\t\tresult[key] = value;\n\t\t}\n\n\t\treturn result;\n\t}, Object.create(null));\n}\n\nexports.extract = extract;\nexports.parse = parse;\n\nexports.stringify = (object, options) => {\n\tif (!object) {\n\t\treturn '';\n\t}\n\n\toptions = Object.assign({\n\t\tencode: true,\n\t\tstrict: true,\n\t\tarrayFormat: 'none'\n\t}, options);\n\n\tconst formatter = encoderForArrayFormat(options);\n\tconst keys = Object.keys(object);\n\n\tif (options.sort !== false) {\n\t\tkeys.sort(options.sort);\n\t}\n\n\treturn keys.map(key => {\n\t\tconst value = object[key];\n\n\t\tif (value === undefined) {\n\t\t\treturn '';\n\t\t}\n\n\t\tif (value === null) {\n\t\t\treturn encode(key, options);\n\t\t}\n\n\t\tif (Array.isArray(value)) {\n\t\t\treturn value\n\t\t\t\t.reduce(formatter(key), [])\n\t\t\t\t.join('&');\n\t\t}\n\n\t\treturn encode(key, options) + '=' + encode(value, options);\n\t}).filter(x => x.length > 0).join('&');\n};\n\nexports.parseUrl = (input, options) => {\n\treturn {\n\t\turl: removeHash(input).split('?')[0] || '',\n\t\tquery: parse(extract(input), options)\n\t};\n};\n\n\n//# sourceURL=webpack:///./node_modules/query-string/index.js?");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nvar runtime = (function (exports) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  exports.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  exports.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  exports.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  exports.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return Promise.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function(error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  exports.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  exports.async = function(innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList)\n    );\n\n    return exports.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        // Note: [\"return\"] must be used for ES3 parsing compatibility.\n        if (delegate.iterator[\"return\"]) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  exports.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  exports.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n\n  // Regardless of whether this script is executing as a CommonJS module\n  // or not, return the runtime object so that we can declare the variable\n  // regeneratorRuntime in the outer scope, which allows this module to be\n  // injected easily by `bin/regenerator --include-runtime script.js`.\n  return exports;\n\n}(\n  // If this script is executing as a CommonJS module, use module.exports\n  // as the regeneratorRuntime namespace. Otherwise create a new empty\n  // object. Either way, the resulting object will be used to initialize\n  // the regeneratorRuntime variable at the top of this file.\n   true ? module.exports : undefined\n));\n\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  // This module should not be running in strict mode, so the above\n  // assignment should always work unless something is misconfigured. Just\n  // in case runtime.js accidentally runs in strict mode, we can escape\n  // strict mode using a global Function call. This could conceivably fail\n  // if a Content Security Policy forbids using Function, but in that case\n  // the proper solution is to fix the accidental strict mode problem. If\n  // you've misconfigured your bundler to force strict mode and applied a\n  // CSP to forbid Function, and you're not willing to fix either of those\n  // problems, please detail your unique predicament in a GitHub issue.\n  Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n}\n\n\n//# sourceURL=webpack:///./node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./node_modules/split-on-first/index.js":
/*!**********************************************!*\
  !*** ./node_modules/split-on-first/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = (string, separator) => {\n\tif (!(typeof string === 'string' && typeof separator === 'string')) {\n\t\tthrow new TypeError('Expected the arguments to be of type `string`');\n\t}\n\n\tif (separator === '') {\n\t\treturn [string];\n\t}\n\n\tconst separatorIndex = string.indexOf(separator);\n\n\tif (separatorIndex === -1) {\n\t\treturn [string];\n\t}\n\n\treturn [\n\t\tstring.slice(0, separatorIndex),\n\t\tstring.slice(separatorIndex + separator.length)\n\t];\n};\n\n\n//# sourceURL=webpack:///./node_modules/split-on-first/index.js?");

/***/ }),

/***/ "./node_modules/strict-uri-encode/index.js":
/*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);\n\n\n//# sourceURL=webpack:///./node_modules/strict-uri-encode/index.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router/index */ \"./src/router/index.js\");\n// import indexController from './controllers/index';\n// import posController from './controllers/position';\n // indexController.renderIndex();\n// posController.renderList();\n\nnew _router_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  mode: 'hash'\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/controllers/details.js":
/*!************************************!*\
  !*** ./src/controllers/details.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_details_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/details.html */ \"./src/views/details.html\");\n/* harmony import */ var _views_details_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_details_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ \"./node_modules/query-string/index.js\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: function render() {\n    var query = query_string__WEBPACK_IMPORTED_MODULE_1___default.a.parse(location.hash.split('?')[1]);\n    var renderedDetailsTpl = template.render(_views_details_html__WEBPACK_IMPORTED_MODULE_0___default.a, {\n      id: query.id\n    });\n    $('#index').html(renderedDetailsTpl);\n  }\n});\n\n//# sourceURL=webpack:///./src/controllers/details.js?");

/***/ }),

/***/ "./src/controllers/error.js":
/*!**********************************!*\
  !*** ./src/controllers/error.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_error_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/error.html */ \"./src/views/error.html\");\n/* harmony import */ var _views_error_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_error_html__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: function render() {\n    $('#index').html(_views_error_html__WEBPACK_IMPORTED_MODULE_0___default.a);\n  }\n});\n\n//# sourceURL=webpack:///./src/controllers/error.js?");

/***/ }),

/***/ "./src/controllers/home.js":
/*!*********************************!*\
  !*** ./src/controllers/home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_home_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/home.html */ \"./src/views/home.html\");\n/* harmony import */ var _views_home_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_home_html__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: function render() {\n    $('#index').html(_views_home_html__WEBPACK_IMPORTED_MODULE_0___default.a);\n  }\n});\n\n//# sourceURL=webpack:///./src/controllers/home.js?");

/***/ }),

/***/ "./src/controllers/index.js":
/*!**********************************!*\
  !*** ./src/controllers/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/index.html */ \"./src/views/index.html\");\n/* harmony import */ var _views_index_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_index_html__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: function render() {\n    $('#app').html(_views_index_html__WEBPACK_IMPORTED_MODULE_0___default.a);\n  }\n});\n\n//# sourceURL=webpack:///./src/controllers/index.js?");

/***/ }),

/***/ "./src/controllers/position.js":
/*!*************************************!*\
  !*** ./src/controllers/position.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _views_position_list_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/position_list.html */ \"./src/views/position_list.html\");\n/* harmony import */ var _views_position_list_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_views_position_list_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _views_position_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/position.html */ \"./src/views/position.html\");\n/* harmony import */ var _views_position_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_views_position_html__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _router_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router/index */ \"./src/router/index.js\");\n/* harmony import */ var _models_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/fetch */ \"./src/models/fetch.js\");\n\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\nvar currentPage = 1;\nvar positionList = [];\n\nvar gotoPage = function gotoPage(id) {\n  var router = new _router_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    mode: 'hash'\n  });\n  router.push('/index/details?id=' + id);\n};\n\nvar render =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n    var result, data, renderedPositionListTpl, bScroll, head, topImgHasClass, foot, bottomImgHasClass;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return _models_fetch__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get('/api/listmore.json?pageNo=1&pageSize=15');\n\n          case 2:\n            result = _context2.sent;\n            data = positionList = result.content.data.page.result;\n            $('#main_scroll').html(_views_position_html__WEBPACK_IMPORTED_MODULE_2___default.a);\n            renderedPositionListTpl = template.render(_views_position_list_html__WEBPACK_IMPORTED_MODULE_1___default.a, {\n              data: data\n            });\n            $('#position-list').html(renderedPositionListTpl); // better-saroll 实例化\n\n            bScroll = new BScroll('#main_scroll', {\n              // probeType: 2 //屏幕滑动时实时派发scroll事件\n              probeType: 1,\n              // 节流2\n              click: true\n            }); // 初始化位置\n\n            bScroll.scrollTo(0, -40);\n            head = $('.head img');\n            topImgHasClass = head.hasClass('up');\n            foot = $('.foot img');\n            bottomImgHasClass = foot.hasClass('down'); // 绑定滑动事件\n\n            bScroll.on('scroll', function () {\n              var y = this.y;\n              var maxY = this.maxScrollY - y; //下拉， \n\n              if (y >= 0) {\n                !topImgHasClass && head.addClass('up');\n                return;\n              } //上拉\n\n\n              if (maxY >= 0) {\n                !bottomImgHasClass && foot.addClass('down');\n                return;\n              }\n            }); //绑定手指松开触发的事件\n\n            bScroll.on('scrollEnd',\n            /*#__PURE__*/\n            _asyncToGenerator(\n            /*#__PURE__*/\n            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n              var _result, _data, _renderedPositionListTpl, maxY, _result2, _data2, _renderedPositionListTpl2;\n\n              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n                while (1) {\n                  switch (_context.prev = _context.next) {\n                    case 0:\n                      if (!(this.y >= -40 && this.y < 0)) {\n                        _context.next = 5;\n                        break;\n                      }\n\n                      this.scrollTo(0, -40);\n                      head.removeClass('up');\n                      _context.next = 17;\n                      break;\n\n                    case 5:\n                      if (!(this.y >= 0)) {\n                        _context.next = 17;\n                        break;\n                      }\n\n                      head.attr('src', '/images/ajax-loader.gif'); //异步加载数据\n\n                      _context.next = 9;\n                      return _models_fetch__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get('/api/listmore.json?pageNo=2&pageSize=2');\n\n                    case 9:\n                      _result = _context.sent;\n                      _data = positionList = [].concat(_toConsumableArray(_result.content.data.page.result), _toConsumableArray(positionList));\n                      _renderedPositionListTpl = template.render(_views_position_list_html__WEBPACK_IMPORTED_MODULE_1___default.a, {\n                        data: _data\n                      });\n                      $('#position-list').html(_renderedPositionListTpl);\n                      this.refresh(); //刷新bScroll高度\n\n                      this.scrollTo(0, -40);\n                      head.attr('src', '/images/arrow.png');\n                      head.removeClass('up');\n\n                    case 17:\n                      // 上拉加载处理\n                      maxY = this.maxScrollY - this.y;\n\n                      if (!(maxY > -40 && maxY < 0)) {\n                        _context.next = 23;\n                        break;\n                      }\n\n                      this.scrollTo(0, this.maxScrollY + 40);\n                      foot.removeClass('down');\n                      _context.next = 35;\n                      break;\n\n                    case 23:\n                      if (!(maxY >= 0)) {\n                        _context.next = 35;\n                        break;\n                      }\n\n                      foot.attr('src', '/images/ajax-loader.gif'); //异步加载数据\n\n                      _context.next = 27;\n                      return _models_fetch__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/listmore.json?pageNo=\".concat(++currentPage, \"&pageSize=2\"));\n\n                    case 27:\n                      _result2 = _context.sent;\n                      _data2 = positionList = [].concat(_toConsumableArray(positionList), _toConsumableArray(_result2.content.data.page.result));\n                      _renderedPositionListTpl2 = template.render(_views_position_list_html__WEBPACK_IMPORTED_MODULE_1___default.a, {\n                        data: _data2\n                      });\n                      $('#position-list').html(_renderedPositionListTpl2);\n                      this.refresh(); //刷新bScroll高度\n\n                      this.scrollTo(0, this.maxScrollY + 40);\n                      foot.attr('src', '/images/arrow.png');\n                      foot.removeClass('down');\n\n                    case 35:\n                    case \"end\":\n                      return _context.stop();\n                  }\n                }\n              }, _callee, this);\n            })));\n            $('#position-list').on('click', 'li', function (e) {\n              gotoPage($(e.currentTarget).attr('data-positionid'));\n            });\n\n          case 16:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function render() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: render\n  /*\r\n    $.camelCase\r\n    $.contains\r\n    $.each\r\n    $.extend\r\n    $.grep\r\n    $.noop\r\n    $.os.phone\r\n  */\n\n});\n\n//# sourceURL=webpack:///./src/controllers/position.js?");

/***/ }),

/***/ "./src/controllers/profile.js":
/*!************************************!*\
  !*** ./src/controllers/profile.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_profile_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/profile.html */ \"./src/views/profile.html\");\n/* harmony import */ var _views_profile_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_profile_html__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: function render() {\n    $('main').html(_views_profile_html__WEBPACK_IMPORTED_MODULE_0___default.a);\n  }\n});\n\n//# sourceURL=webpack:///./src/controllers/profile.js?");

/***/ }),

/***/ "./src/controllers/search.js":
/*!***********************************!*\
  !*** ./src/controllers/search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_search_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/search.html */ \"./src/views/search.html\");\n/* harmony import */ var _views_search_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_search_html__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: function render() {\n    $('main').html(_views_search_html__WEBPACK_IMPORTED_MODULE_0___default.a);\n  }\n});\n\n//# sourceURL=webpack:///./src/controllers/search.js?");

/***/ }),

/***/ "./src/models/fetch.js":
/*!*****************************!*\
  !*** ./src/models/fetch.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  get: function get(url) {\n    return $.ajax({\n      url: url,\n      //后端有接口的场景\n      type: 'GET',\n      // 请求json-server时  get为获取  post为添加\n      success: function success(result) {\n        return result;\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/models/fetch.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Router; });\n/* harmony import */ var _controllers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/index */ \"./src/controllers/index.js\");\n/* harmony import */ var _controllers_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/position */ \"./src/controllers/position.js\");\n/* harmony import */ var _controllers_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/search */ \"./src/controllers/search.js\");\n/* harmony import */ var _controllers_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/profile */ \"./src/controllers/profile.js\");\n/* harmony import */ var _controllers_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/details */ \"./src/controllers/details.js\");\n/* harmony import */ var _controllers_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controllers/home */ \"./src/controllers/home.js\");\n/* harmony import */ var _controllers_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../controllers/error */ \"./src/controllers/error.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\n\nvar Router =\n/*#__PURE__*/\nfunction () {\n  function Router(obj) {\n    _classCallCheck(this, Router);\n\n    this.mode = obj.mode; //this.mode = 'history'\n    //路由配置\n\n    this.routes = {\n      '/index': _controllers_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n      '/index/home': _controllers_home__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n      '/index/details': _controllers_details__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n      '/index/home/position': _controllers_position__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      '/index/home/search': _controllers_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      '/index/home/profile': _controllers_profile__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      '/error': _controllers_error__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    };\n    this.init();\n  }\n\n  _createClass(Router, [{\n    key: \"init\",\n    value: function init() {\n      _controllers_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render();\n\n      if (this.mode === 'hash') {\n        window.addEventListener('load', this.hashRefresh.bind(this), false);\n        window.addEventListener('hashchange', this.hashRefresh.bind(this), false);\n      } else {\n        this.bindLink();\n        window.addEventListener('load', this.loadView.bind(this, location.pathname), false);\n        window.addEventListener('popstate', this.historyRefresh.bind(this), false);\n      }\n    }\n    /* \r\n      history模式拦截 a链接\r\n    */\n\n  }, {\n    key: \"bindLink\",\n    value: function bindLink() {\n      $('nav a').on('click', this.handleLink.bind(this));\n    }\n    /* \r\n      history 处理a链接 @param e 当前Event\r\n    */\n\n  }, {\n    key: \"handleLink\",\n    value: function handleLink(e) {\n      e.preventDefault(); //获取点击a的 href值\n\n      var href = $(e.target).attr('href');\n\n      if (href.slice(0, 1) !== '#') {\n        window.location.href = href;\n      } else {\n        var path = href.slice(1);\n        history.pushState({\n          path: path\n        }, null, path);\n        this.loadView(path.split('?')[0]);\n      }\n    }\n    /* \r\n      hash路由刷新执行 @param {object} e\r\n    */\n\n  }, {\n    key: \"hashRefresh\",\n    value: function hashRefresh(e) {\n      if (e.newURL) {\n        var newURL = e.newURL.split('#')[1];\n        var oldURL = e.oldURL.split('#')[1]; // console.dir({\n        //   oldURL, newURL\n        // });\n      }\n\n      var currentURL = location.hash.slice(1).split('?')[0] || '/index/home/position';\n      this.loadView(currentURL);\n    }\n    /* \r\n      history模式刷新页面 @param e 当前对象Event\r\n    */\n\n  }, {\n    key: \"historyRefresh\",\n    value: function historyRefresh(e) {\n      var state = e.state || {};\n\n      if (state.path) {\n        this.loadView(state.path.split('?')[0]);\n      }\n    }\n    /* \r\n      加载页面 @param {string} currentURL\r\n    */\n\n  }, {\n    key: \"loadView\",\n    value: function loadView(currentURL) {\n      var _this = this;\n\n      if (this.mode === 'history' && currentURL === '/') {\n        history.replaceState({\n          path: '/'\n        }, null, '/');\n        currentURL = '/position';\n      } //多级链接拆分为数组， 遍历依次加载\n\n\n      this.currentURLlist = currentURL.slice(1).split('/');\n      this.url = \"\";\n      this.currentURLlist.forEach(function (item, index) {\n        _this.url += '/' + item;\n        _this.controllerName = _this.routes[_this.url]; //404页面处理\n\n        if (!_this.controllerName) {\n          _this.errorPage();\n\n          return false;\n        } //对于嵌套路由的处理\n\n\n        if (_this.oldURL && _this.oldURL[index] === _this.currentURLlist[index]) {\n          _this.handleSubRouter(item, index);\n        } else {\n          _this.controller(_this.controllerName);\n        }\n      }); //记录链接数组， 后续处理自己组件\n\n      this.oldURL = JSON.parse(JSON.stringify(this.currentURLlist));\n    }\n    /* \r\n      处理嵌套路由 \r\n      @param {string} item 链接list中当前项\r\n      @param {number} index 链接list中当前索引\r\n    */\n\n  }, {\n    key: \"handleSubRouter\",\n    value: function handleSubRouter(item, index) {\n      //新路由是旧路由的子集\n      if (this.oldURL.length < this.currentURLlist.length) {\n        if (item !== this.oldURL[index]) {\n          this.controller(this.controllerName);\n        }\n      } //新路由是旧路由的父级  \n\n\n      if (this.oldURL.length > this.currentURLlist.length) {\n        if (index === this.currentURLlist.length - 1) {\n          this.controller(this.controllerName);\n        }\n      }\n    }\n    /* \r\n      404页面处理\r\n    */\n\n  }, {\n    key: \"errorPage\",\n    value: function errorPage() {\n      if (this.mode === 'hash') {\n        location.href = '#/error';\n      } else {\n        history.replaceState({\n          path: '/error'\n        }, null, '/error');\n        this.loadView('/error');\n      }\n    }\n    /* \r\n      组件控制器 @param {string} name\r\n    */\n\n  }, {\n    key: \"controller\",\n    value: function controller(controllerName) {\n      controllerName.render();\n      this.navActive(this.url);\n    }\n    /* \r\n      手动跳转路由 @param {string} path\r\n    */\n\n  }, {\n    key: \"push\",\n    value: function push(path) {\n      if (this.mode === 'hash') {\n        location.href = '#' + path;\n      } else {\n        history.pushState({\n          path: path\n        }, null, path);\n        this.loadView(path.split('?'[0]));\n      }\n    }\n    /* \r\n      绑定组件对象中events 事件\r\n      @desc 将组件对象中this通过call绑定\r\n      ！ 仅支持绑定当前组件下的DOM事件\r\n    */\n\n  }, {\n    key: \"bindEvents\",\n    value: function bindEvents() {\n      var self = this;\n      var eventType = \"\";\n      var selector = \"\";\n      var handleEvent = \"\";\n\n      var Event = function Event(eventType, selector, handleEvent) {\n        self.$el.find(selector).on(eventType, function (e) {\n          self[handleEvent](e);\n        });\n      };\n\n      for (var _index in self.events) {\n        eventType = _index.match(/[0-9A-Za-z]+\\s/i)[0].trim();\n        selector = _index.replace(/[0-9A-Za-z]+\\s/i, \"\").trim();\n        handleEvent = self.events[_index];\n        var obj = new Event(eventType, selector, handleEvent);\n        obj = null;\n      }\n\n      Event = null;\n    }\n    /* \r\n      导航激活显示\r\n      @param item 当前router对象\r\n    */\n\n  }, {\n    key: \"navActive\",\n    value: function navActive(item) {\n      $(\"nav a[href='#\".concat(item, \"']\")).closest('li').addClass('active').siblings().removeClass('active');\n    }\n  }]);\n\n  return Router;\n}();\n\n\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/views/details.html":
/*!********************************!*\
  !*** ./src/views/details.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"m-details\\\">  <header>拉勾网</header>  <section>    详情页面 -- {{id}}  </section></div>\"\n\n//# sourceURL=webpack:///./src/views/details.html?");

/***/ }),

/***/ "./src/views/error.html":
/*!******************************!*\
  !*** ./src/views/error.html ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>  路由加载错误404</div>\"\n\n//# sourceURL=webpack:///./src/views/error.html?");

/***/ }),

/***/ "./src/views/home.html":
/*!*****************************!*\
  !*** ./src/views/home.html ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"container\\\">  <header>拉勾网</header>  <main id=\\\"main_scroll\\\"></main>  <nav>    <ul>      <li class=\\\"active\\\">        <i class=\\\"yo-ico\\\">&#xe6b8;</i>        <b><a href=\\\"#/index/home/position\\\">职位</a></b>      </li>      <li>        <i class=\\\"yo-ico\\\">&#xe7d5;</i>        <b><a href=\\\"#/index/home/search\\\">搜索</a></b>      </li>      <li>        <i class=\\\"yo-ico\\\">&#xe7da;</i>        <b><a href=\\\"#/index/home/profile\\\">我的</a></b>      </li>    </ul>  </nav></div>\"\n\n//# sourceURL=webpack:///./src/views/home.html?");

/***/ }),

/***/ "./src/views/index.html":
/*!******************************!*\
  !*** ./src/views/index.html ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div id=\\\"index\\\"></div>\"\n\n//# sourceURL=webpack:///./src/views/index.html?");

/***/ }),

/***/ "./src/views/position.html":
/*!*********************************!*\
  !*** ./src/views/position.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>  <div class=\\\"head\\\">    <img src=\\\"/images/arrow.png\\\" alt=\\\"\\\">    <b>下拉刷新...</b>  </div>  <div>    <h3>十秒钟定制职位</h3>    <button>去登录</button>  </div>  <ul id=\\\"position-list\\\">    </ul>  <div class=\\\"foot\\\">    <img src=\\\"/images/arrow.png\\\" alt=\\\"\\\">    <b>上拉加载更多...</b>  </div></div>\"\n\n//# sourceURL=webpack:///./src/views/position.html?");

/***/ }),

/***/ "./src/views/position_list.html":
/*!**************************************!*\
  !*** ./src/views/position_list.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"{{each data}}<li data-positionid=\\\"{{$value[\\'positionId\\']}}\\\">  <img src=\\\"//www.lgstatic.com/{{$value[\\'companyLogo\\']}}\\\" class=\\\"item-logo\\\">  <div class=\\\"item-desc\\\">    <h2 class=\\\"item-title\\\">{{$value[\\'companyName\\']}}</h2>    <p class=\\\"item-info\\\">      <span class=\\\"item-pos\\\">        <b>{{$value[\\'positionName\\']}} [ {{$value[\\'city\\']}} ]</b>      </span>      <span class=\\\"item-salary\\\">{{$value[\\'salary\\']}}</span>    </p>    <p class=\\\"item-time\\\">{{$value[\\'createTime\\']}}</p>  </div></li>{{/each}}\"\n\n//# sourceURL=webpack:///./src/views/position_list.html?");

/***/ }),

/***/ "./src/views/profile.html":
/*!********************************!*\
  !*** ./src/views/profile.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<h2>profile</h2>\"\n\n//# sourceURL=webpack:///./src/views/profile.html?");

/***/ }),

/***/ "./src/views/search.html":
/*!*******************************!*\
  !*** ./src/views/search.html ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<h2>search</h2>\"\n\n//# sourceURL=webpack:///./src/views/search.html?");

/***/ })

/******/ });