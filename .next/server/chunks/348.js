exports.id = 348;
exports.ids = [348];
exports.modules = {

/***/ 1348:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3426);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5529);


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const SubNav = (_ref) => {
  let {
    navList = [],
    onClick,
    loanCounts = {}
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["navList", "onClick", "loanCounts"]);

  const {
    0: activeIndex,
    1: setActiveIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app__WEBPACK_IMPORTED_MODULE_3__.ThemeContext.Consumer, {
    children: theme => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
        flexWrap: "wrap",
        justifyContent: {
          sm: "space-between",
          md: "flex-start"
        },
        children: navList.map((each, index) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
            justifyContent: "center",
            alignItems: "center" // mr={{ md: "10px", sm: "0px" }}
            ,
            ml: {
              md: "0px",
              sm: index % 2 != 0 ? '6px' : "0px"
            },
            mb: {
              md: index === navList.length ? "0px" : "10px",
              sm: "5px"
            },
            w: {
              sm: "49%",
              md: "auto"
            },
            minHeight: {
              sm: "40px"
            },
            mt: {
              sm: "10px",
              md: "0px"
            },
            padding: "5px 15px",
            border: activeIndex === index ? `1px solid ${theme.colors.primary}` : `1px solid ${theme.colors.gray}` // borderRadius="3px"
            ,
            bg: activeIndex === index ? theme.colors.primary : 'white',
            color: activeIndex === index ? 'white' : 'black',
            onClick: () => {
              setActiveIndex(index);
              onClick(index);
            },
            cursor: "pointer",
            children: loanCounts[each] ? `${each} (${loanCounts[each]})` : each
          }, index);
        })
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SubNav);

/***/ })

};
;