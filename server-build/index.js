/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./api/getCategories.js":
/*!******************************!*\
  !*** ./api/getCategories.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getCategories)\n/* harmony export */ });\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getCategories() {\n  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"http://www.houstonzoo.org/wp-json/wp/v2/categories?per_page=100\").then(function (res) {\n    return res.json();\n  });\n}\n\n//# sourceURL=webpack://wp-decoupled/./api/getCategories.js?");

/***/ }),

/***/ "./api/getProducts.js":
/*!****************************!*\
  !*** ./api/getProducts.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getProducts)\n/* harmony export */ });\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getProducts() {\n  var totalPages = 0;\n  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"http://www.houstonzoo.org/wp-json/wp/v2/posts?_embed&per_page=4\").then(function (res) {\n    totalPages = res.headers.get('X-WP-TotalPages');\n    return res.json();\n  }).then(function (posts) {\n    return {\n      \"posts\": posts,\n      \"totalPagesData\": totalPages\n    };\n  });\n}\n\n//# sourceURL=webpack://wp-decoupled/./api/getProducts.js?");

/***/ }),

/***/ "./api/getProductsWithFilters.js":
/*!***************************************!*\
  !*** ./api/getProductsWithFilters.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getProductsWithFilters)\n/* harmony export */ });\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getProductsWithFilters(pageNo, categories) {\n  var categoryList = categories.join(',');\n  var totalPages = 0;\n  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"http://www.houstonzoo.org/wp-json/wp/v2/posts?_embed&per_page=4&page=\".concat(pageNo, \"\\n\\t\\t\\t\\t\\t\").concat(categories ? \"&categories=\".concat(categoryList) : '')).then(function (res) {\n    totalPages = res.headers.get('X-WP-TotalPages');\n    return res.json();\n  }).then(function (posts) {\n    return {\n      \"posts\": posts,\n      \"totalPagesData\": totalPages\n    };\n  });\n}\n\n//# sourceURL=webpack://wp-decoupled/./api/getProductsWithFilters.js?");

/***/ }),

/***/ "./routes/routes.js":
/*!**************************!*\
  !*** ./routes/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_components_Posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/components/Posts */ \"./src/components/Posts.js\");\n/* harmony import */ var _src_components_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Post */ \"./src/components/Post.js\");\n\n\nvar routes = [{\n  path: '/',\n  exact: true,\n  component: _src_components_Posts__WEBPACK_IMPORTED_MODULE_0__.default\n}, {\n  path: '/post/:id',\n  component: _src_components_Post__WEBPACK_IMPORTED_MODULE_1__.default\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://wp-decoupled/./routes/routes.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _api_getProducts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/getProducts */ \"./api/getProducts.js\");\n/* harmony import */ var _api_getCategories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/getCategories */ \"./api/getCategories.js\");\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n/* harmony import */ var _src_components_Post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/Post */ \"./src/components/Post.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../routes/routes */ \"./routes/routes.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar PORT = process.env.PORT || 3000;\nvar app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.get('/', function (req, res) {\n  (0,_api_getCategories__WEBPACK_IMPORTED_MODULE_6__.default)().then(function (categories) {\n    (0,_api_getProducts__WEBPACK_IMPORTED_MODULE_5__.default)().then(function (posts) {\n      var context = {};\n      var app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.StaticRouter, {\n        location: req.url,\n        context: context\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_src_App__WEBPACK_IMPORTED_MODULE_7__.default, {\n        postData: posts.posts,\n        categories: categories,\n        totalPagesData: posts.totalPagesData\n      })));\n\n      if (context.url) {\n        redirect(req.url);\n      } else {\n        var indexFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve('./build/index.html');\n        fs__WEBPACK_IMPORTED_MODULE_1___default().readFile(indexFile, 'utf8', function (err, data) {\n          if (err) {\n            console.error('Something went wrong:', err);\n            return res.status(500).send('Oops, better luck next time!');\n          }\n\n          return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\")));\n        });\n      }\n    });\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default().static('./build'));\napp.listen(PORT, function () {\n  console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack://wp-decoupled/./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Posts */ \"./src/components/Posts.js\");\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Post */ \"./src/components/Post.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Navbar */ \"./src/components/Navbar.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _api_getProductsWithFilters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/getProductsWithFilters */ \"./api/getProductsWithFilters.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nvar App = function App(_ref) {\n  var postData = _ref.postData,\n      categories = _ref.categories,\n      totalPagesData = _ref.totalPagesData;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(postData),\n      _useState2 = _slicedToArray(_useState, 2),\n      posts = _useState2[0],\n      setPosts = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),\n      _useState4 = _slicedToArray(_useState3, 2),\n      pageNo = _useState4[0],\n      setPageNo = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(totalPagesData),\n      _useState6 = _slicedToArray(_useState5, 2),\n      totalPages = _useState6[0],\n      setTotalPages = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState8 = _slicedToArray(_useState7, 2),\n      categoriesArray = _useState8[0],\n      setCategoriesArray = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"categories__filter\"),\n      _useState10 = _slicedToArray(_useState9, 2),\n      categoriesMenuFilter = _useState10[0],\n      setCategoriesMenuFilter = _useState10[1];\n\n  var updatePage = function updatePage(newPage) {\n    setPageNo(newPage);\n    (0,_api_getProductsWithFilters__WEBPACK_IMPORTED_MODULE_5__.default)(newPage, categoriesArray).then(function (data) {\n      setPosts(data.posts);\n      setTotalPages(data.totalPagesData);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  };\n\n  var updatePosts = function updatePosts(event) {\n    event.preventDefault();\n    setPageNo(1);\n    console.log(categoriesArray);\n    (0,_api_getProductsWithFilters__WEBPACK_IMPORTED_MODULE_5__.default)(1, categoriesArray).then(function (data) {\n      console.log(data);\n      setPosts(data.posts);\n      setTotalPages(data.totalPagesData);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  };\n\n  var updateCategories = function updateCategories(event, id) {\n    var categories = _toConsumableArray(categoriesArray);\n\n    var index = categories.indexOf(id);\n    index !== -1 ? categories.splice(index, 1) : categories.push(id);\n    console.log(\"up\", categories);\n    setCategoriesArray(categories);\n  };\n\n  console.log(totalPages);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {\n    exact: true,\n    path: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"filter__button\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"\",\n    onClick: function onClick() {\n      categoriesMenuFilter === 'categories__filter' ? setCategoriesMenuFilter('categories__filter show') : setCategoriesMenuFilter('categories__filter');\n      event.target.className === '' ? event.target.className = 'selected' : event.target.className = '';\n    }\n  }, \"CATEGORIES FILTERS\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: categoriesMenuFilter\n  }, categories === null || categories === void 0 ? void 0 : categories.map(function (category) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n      key: category.id,\n      className: \"category \".concat(categoriesArray.includes(category.id) ? 'selected' : ''),\n      onClick: function onClick(event) {\n        event.target.className === \"category\" ? event.target.className = \"category selected\" : event.target.className = \"category\";\n        updateCategories(event, category.id);\n      }\n    }, category.name);\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"btn\",\n    onClick: updatePosts\n  }, \"Apply Filters \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Posts__WEBPACK_IMPORTED_MODULE_1__.default, {\n    posts: posts\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"pagination\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"btn\",\n    onClick: function onClick(event) {\n      var newPage = pageNo - 1;\n      updatePage(newPage);\n    },\n    disabled: pageNo === 1\n  }, \"Previous\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"btn\",\n    onClick: function onClick() {\n      var newPage = pageNo + 1;\n      updatePage(newPage);\n    },\n    disabled: pageNo == totalPages\n  }, \"Next\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {\n    path: \"/post/:id\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Post__WEBPACK_IMPORTED_MODULE_2__.default, null))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://wp-decoupled/./src/App.js?");

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Navbar = function Navbar() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"nav\", {\n    className: \"navbar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/\"\n  }, \"WP-DECOUPLED\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\n\n//# sourceURL=webpack://wp-decoupled/./src/components/Navbar.js?");

/***/ }),

/***/ "./src/components/Post.js":
/*!********************************!*\
  !*** ./src/components/Post.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-html-parser */ \"react-html-parser\");\n/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Post = function Post() {\n  var post = JSON.parse(localStorage.getItem('post'));\n  console.log(post);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"post\"\n  }, react_html_parser__WEBPACK_IMPORTED_MODULE_1___default()(post.content.rendered));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n//# sourceURL=webpack://wp-decoupled/./src/components/Post.js?");

/***/ }),

/***/ "./src/components/Posts.js":
/*!*********************************!*\
  !*** ./src/components/Posts.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-html-parser */ \"react-html-parser\");\n/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Posts = function Posts(_ref) {\n  var posts = _ref.posts;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"posts\"\n  }, posts ? posts.map(function (post) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"card\",\n      key: post.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      src: post[\"_embedded\"][\"wp:featuredmedia\"][0][\"source_url\"],\n      className: \"card__image\",\n      alt: \"Image\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"b\", null, react_html_parser__WEBPACK_IMPORTED_MODULE_1___default()(post.title.rendered))), react_html_parser__WEBPACK_IMPORTED_MODULE_1___default()(post.excerpt.rendered), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n      className: \"btn\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n      to: \"/post/\".concat(post.id),\n      onClick: function onClick() {\n        localStorage.setItem('post', JSON.stringify(post));\n      }\n    }, \"Read More\"))));\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Loading\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);\n\n//# sourceURL=webpack://wp-decoupled/./src/components/Posts.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("isomorphic-fetch");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-html-parser":
/*!************************************!*\
  !*** external "react-html-parser" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react-html-parser");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;