webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Layout/Layout.js":
/*!*************************************!*\
  !*** ./components/Layout/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/authActions */ "./actions/authActions.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Layout = function Layout(_ref) {
  var children = _ref.children,
      title = _ref.title,
      deauthenticate = _ref.deauthenticate,
      isAuthenticated = _ref.isAuthenticated;
  return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, title && __jsx("title", {
    key: key
  }, title)), __jsx("div", null, __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, __jsx("a", null, "Home"))), !isAuthenticated && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/signin"
  }, __jsx("a", null, "Sign In"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/signup"
  }, __jsx("a", null, "Sign Up")))), isAuthenticated && __jsx("li", {
    onClick: deauthenticate
  }, __jsx("a", null, "Sign Out")), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/whoami"
  }, __jsx("a", null, "Who Am I"))))), __jsx("div", {
    className: "has-text-centered"
  }, children));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.authentication
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  deauthenticate: _actions_authActions__WEBPACK_IMPORTED_MODULE_4__["deauthenticate"]
})(Layout));

/***/ })

})
//# sourceMappingURL=index.js.ac87f7d47a39cf14bfdc.hot-update.js.map