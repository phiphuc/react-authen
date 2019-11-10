webpackHotUpdate("static\\development\\pages\\whoami.js",{

/***/ "./pages/whoami.js":
/*!*************************!*\
  !*** ./pages/whoami.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.js");




var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var Whoami = function Whoami(_ref) {
  var user = _ref.user;

  __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Who Am I"
  }, user && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("h2", null, "Who im i"), _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(user)) || 'Please sign in');
};

Whoami.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var _token, _token2, token;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log();

            if (ctx.isServer) {
              if (ctx.req.headers.cookie) {
                _token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_6__["getCookie"])('token', ctx.req);
                console.log('WHOAMI ', _token);
                ctx.store.dispatch(Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_6__["reauthenticate"])(_token));
              }
            } else {
              _token2 = ctx.store.getState().authentication.token;

              if (_token2 && (ctx.pathname === '/signin' || ctx.pathname === '/signup')) {
                setTimeout(function () {
                  next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/');
                }, 0);
              }
            }

            token = ctx.store.getState().authentication.token;

            if (!token) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", {
              user: 'Ryan'
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(function (state) {
  return state;
}, {
  reauthenticate: _actions_authActions__WEBPACK_IMPORTED_MODULE_6__["reauthenticate"]
})(Whoami));

/***/ })

})
//# sourceMappingURL=whoami.js.6047da68af472d6014ed.hot-update.js.map