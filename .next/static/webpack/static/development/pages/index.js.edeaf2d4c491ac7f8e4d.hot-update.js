webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./actions/authActions.js":
/*!********************************!*\
  !*** ./actions/authActions.js ***!
  \********************************/
/*! exports provided: authentication, setCookie, removeCookie, getCookie, reauthenticate, deauthenticate, checkServerSideCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authentication", function() { return authentication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reauthenticate", function() { return reauthenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deauthenticate", function() { return deauthenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkServerSideCookie", function() { return checkServerSideCookie; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ "./constants/constants.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




var authentication = function authentication(user) {
  return function (dispatch) {
    return fetch("http://localhost:8000/api/signin", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(user)
    }).then(function (data) {
      return data.json();
    }).then(function (res) {
      setCookie('token', response.token);
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
      dispatch({
        type: _constants_constants__WEBPACK_IMPORTED_MODULE_1__["AUTHENTICATION"],
        payload: res.token
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};
var setCookie = function setCookie(key, value) {
  if (true) {
    Cookie.set(key, value, {
      exprires: 1,
      path: '/'
    });
  }
};
var removeCookie = function removeCookie(key) {
  if (true) {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove(key, {
      exprires: 1
    });
  }
};
var getCookie = function getCookie(key, req) {
  return  true ? getCookieFromBrowser(key) : undefined;
};

var getCookieFromBrowser = function getCookieFromBrowser(key) {
  return js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(key);
};

var getCookieFromServer = function getCookieFromServer(key, req) {
  if (!req.headers.cookie) {
    return undefined;
  }

  var rawCookie = req.headers.cookie.split(';').find(function (c) {
    return c.trim().startsWith("".concat(key, "="));
  });

  if (!rawCookie) {
    return undefined;
  }

  return rawCookie.split('=')[1];
};

var reauthenticate = function reauthenticate(token) {
  return function (dispatch) {
    return dispatch({
      type: _constants_constants__WEBPACK_IMPORTED_MODULE_1__["AUTHENTICATION"],
      payload: token
    });
  };
};
var deauthenticate = function deauthenticate() {
  return function (dispatch) {
    removeCookie('token');
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
    dispatch({
      type: _constants_constants__WEBPACK_IMPORTED_MODULE_1__["DEAUTHENTICATION"]
    });
  };
};
var checkServerSideCookie = function checkServerSideCookie(ctx) {
  if (ctx.isServer) {
    if (ctx.req.headers.cookie) {
      var token = getCookie('token', ctx.req);
      ctx.store.dispatch(reauthenticate(token, user));
    }
  } else {
    var _token = ctx.store.getState().authentication.token;

    if (_token && user && (ctx.pathname === '/signin' || ctx.pathname === '/signup')) {
      setTimeout(function () {
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
      }, 0);
    }
  }
};

/***/ })

})
//# sourceMappingURL=index.js.edeaf2d4c491ac7f8e4d.hot-update.js.map