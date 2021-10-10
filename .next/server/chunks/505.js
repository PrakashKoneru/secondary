exports.id = 505;
exports.ids = [505];
exports.modules = {

/***/ 7505:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3426);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reUsable_loansDeck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5323);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5529);
/* harmony import */ var _utils_fieldLineUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4678);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2662);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_8__);











function removeEmptyFields(data) {
  Object.keys(data).forEach(key => {
    if (data[key] === '' || data[key] == null) {
      delete data[key];
    }
  });
}

const LoanView = ({
  loans,
  setLoansToRender,
  setLoanCounts,
  selectedNav
}) => {
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: filterBy,
    1: setFilterBy
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)();

  const sortLoans = sortBy => {
    const baseURL = '/secondary/secondaryLenders/loans/sort';
    axios__WEBPACK_IMPORTED_MODULE_3___default().post(baseURL, {
      sortBy,
      selectedNav
    }, {
      headers: {
        pToken: js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('pToken')
      }
    }).then(({
      data: {
        loans
      }
    }) => {
      setLoansToRender(loans);
      setLoading(false);
    });
  };

  const filterLoans = ({
    fundedAmountMin,
    fundedAmountMax,
    annualIncomeMin,
    annualIncomeMax,
    loanGrade
  }) => {
    const baseURL = '/secondary/secondaryLenders/loans/filter';
    if (fundedAmountMin === '') fundedAmountMin = '0';
    if (fundedAmountMax === '') fundedAmountMax = '75000';
    if (annualIncomeMin === '') annualIncomeMin = '0';
    if (annualIncomeMax === '') annualIncomeMax = '10000000000000000';
    axios__WEBPACK_IMPORTED_MODULE_3___default().post(baseURL, {
      fundedAmountMin,
      fundedAmountMax,
      annualIncomeMin,
      annualIncomeMax,
      loanGrade,
      selectedNav
    }, {
      headers: {
        pToken: js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('pToken')
      }
    }).then(({
      data: {
        loans
      }
    }) => {
      setLoansToRender(loans);
      setLoading(false);
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app__WEBPACK_IMPORTED_MODULE_5__.ThemeContext.Consumer, {
    children: theme => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
        mt: "30px",
        flexDirection: {
          sm: "column",
          md: "row"
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
          w: {
            md: "300px",
            sm: "100%"
          },
          minWidth: {
            md: "300px",
            sm: "100%"
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
            px: "15px",
            py: "25px",
            border: `1px solid ${theme.colors.gray}`,
            borderRadius: "3px",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                  fontWeight: '700'
                },
                children: "Year"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {
                name: "loans",
                id: "loans",
                style: {
                  border: `1px solid ${theme.colors.gray}`
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                  value: selectedNav === 'completed' ? '2018' : '2020',
                  border: `1px solid ${theme.colors.gray}`,
                  children: selectedNav === 'completed' ? '2018' : '2020'
                })
              })]
            })
          }, selectedNav)
        }), loans && !loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_reUsable_loansDeck__WEBPACK_IMPORTED_MODULE_4__.default, {
          loans: loans,
          filterBy: filterBy,
          setLoanCounts: setLoanCounts,
          selectedNav: selectedNav
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
          w: "100%",
          maxHeight: {
            md: "100vh",
            sm: "auto"
          },
          overflowY: "scroll",
          ml: {
            md: "30px",
            sm: "0px"
          },
          mt: {
            md: "0px",
            sm: "30px"
          },
          alignItems: "center",
          justifyContent: "center",
          fontSize: "50px",
          color: theme.colors.secondary,
          children: "Loading..."
        })]
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (LoanView);

/***/ })

};
;