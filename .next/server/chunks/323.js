exports.id = 323;
exports.ids = [323];
exports.modules = {

/***/ 5323:
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
/* harmony import */ var _utils_fieldLineUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4678);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _loanCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(233);












const LoansDeck = ({
  loans,
  key,
  selectedNav,
  setLoanCounts
}, ref) => {
  const {
    0: loansToRender,
    1: setLoansToRender
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(loans);
  const {
    0: loansByGroup,
    1: setLoansByGroup
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: expandedLoanGroup,
    1: setExpandedLoanGroup
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async () => {
    const groupingState = 'issue_month';
    const loansBySelectedGroup = loans.reduce((loan, value) => {
      if (!loan[value[groupingState]]) {
        loan[value[groupingState]] = {
          loans: [],
          loan_amnt_sec: 0,
          int_rate_sum: 0,
          default_probability_percent_updated_sum: 0,
          late_duration_days_total_sum: 0,
          loan_status_count: 0
        };
      } // Grouping


      loan[value[groupingState]]['loans'] = [...loan[value[groupingState]]['loans'], value];
      loan[value[groupingState]]['loan_amnt_sec'] = loan[value[groupingState]]['loan_amnt_sec'] + parseInt(value['loan_amnt_sec'], "10");
      loan[value[groupingState]]['int_rate_sum'] = loan[value[groupingState]]['int_rate_sum'] + Number(value['interest_rate_percent']);
      loan[value[groupingState]]['default_probability_percent_updated_sum'] = loan[value[groupingState]]['default_probability_percent_updated_sum'] + Number(value['default_probability_percent_updated']);
      loan[value[groupingState]]['late_duration_days_total_sum'] = loan[value[groupingState]]['late_duration_days_total_sum'] + Number(value['late_duration_days_total']);

      if (value['loan_status'] === 'current') {
        // console.log('how many loans')
        loan[value[groupingState]]['loan_status_count'] = loan[value[groupingState]]['loan_status_count'] + 1;
      }

      return loan;
    }, {});
    setLoansToRender(loans);
    setLoansByGroup(loansBySelectedGroup);
  }, [loans]);
  const currentMonths = ['January', 'February', 'March', 'April'];
  const incomingMonths = ['May', 'June', 'July', 'August', 'September', 'October', 'November', "December"];
  const monthsToRender = selectedNav === 'current' ? currentMonths : incomingMonths;
  if (!loansByGroup) return null;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app__WEBPACK_IMPORTED_MODULE_3__.ThemeContext.Consumer, {
    children: theme => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
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
        mb: "75px",
        children: monthsToRender.map((month, index) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
            mt: index === 0 ? '0px' : `40px`,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                  width: '100%'
                },
                children: month
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                  width: 'auto',
                  display: 'flex'
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                  style: {
                    padding: '5px 10px',
                    cursor: 'pointer'
                  },
                  onClick: () => setExpandedLoanGroup(month.slice(0, 3)),
                  children: "Expand"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                  style: {
                    padding: '5px 10px',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  },
                  onClick: () => setExpandedLoanGroup(null),
                  children: "Collapse All"
                })]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
              children: loansByGroup[month.slice(0, 3)] ? expandedLoanGroup === month.slice(0, 3) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                w: "100%",
                children: loansByGroup[month.slice(0, 3)]['loans'].map((loan, index) => {
                  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    mt: index === 0 ? '0px' : `15px`,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_loanCard__WEBPACK_IMPORTED_MODULE_9__.default, {
                      index: index,
                      loan: loan,
                      setLoansToRender: setLoansToRender,
                      setLoanCounts: setLoanCounts
                    })
                  });
                })
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                w: "100%",
                border: `1px solid ${theme.colors.gray}`,
                borderRadius: "3px",
                p: "15px",
                mt: index === 0 ? '0px' : `5px`,
                alignItems: "flex-end",
                flexDirection: "column",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                  w: "100%",
                  flexWrap: "wrap",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    w: "18%",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                      style: {
                        fontWeight: '500'
                      },
                      children: "Total Loan Amount"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                      style: {
                        marginTop: '10px'
                      },
                      children: _utils_fieldLineUp__WEBPACK_IMPORTED_MODULE_4__/* .default[0].format */ .Z[0].format(Math.round(loansByGroup[month.slice(0, 3)]['loan_amnt_sec']))
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    ml: "10px",
                    w: "18%",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                      style: {
                        fontWeight: '500'
                      },
                      children: "Average Interest Rate"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                      style: {
                        marginTop: '10px'
                      },
                      children: [Math.round(loansByGroup[month.slice(0, 3)]['int_rate_sum'] / loansByGroup[month.slice(0, 3)]['loans'].length * 100) / 100, "%"]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    ml: "10px",
                    w: "18%",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                      style: {
                        fontWeight: '500'
                      },
                      children: "Average Payment Probability"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                      style: {
                        marginTop: '10px'
                      },
                      children: [100 - Math.round(loansByGroup[month.slice(0, 3)]['default_probability_percent_updated_sum'] / loansByGroup[month.slice(0, 3)]['loans'].length * 100) / 100, "%"]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    ml: "10px",
                    w: "18%",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                      style: {
                        fontWeight: '500'
                      },
                      children: "Average Late Status Days"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                      style: {
                        marginTop: '10px'
                      },
                      children: Math.round(loansByGroup[month.slice(0, 3)]['late_duration_days_total_sum'] / loansByGroup[month.slice(0, 3)]['loans'].length) * 100 / 100
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    ml: "10px",
                    w: "18%",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                      style: {
                        fontWeight: '500'
                      },
                      children: "% of Current Loans"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                      style: {
                        marginTop: '10px'
                      },
                      children: [Math.round(loansByGroup[month.slice(0, 3)]['loan_status_count'] / loansByGroup[month.slice(0, 3)]['loans'].length * 100) / 100 * 100, "%"]
                    })]
                  })]
                }), selectedNav === 'current' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                  mt: {
                    md: "0px",
                    sm: "20px"
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    disabled: true,
                    children: "Purchased Loans"
                  })
                }), selectedNav === 'incoming' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                  mt: "20px",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    children: "Commit to Buy"
                  })
                })]
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                w: "100%",
                border: `1px solid ${theme.colors.gray}`,
                borderRadius: "3px",
                p: "15px",
                mt: index === 0 ? '0px' : `5px`,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                      fontWeight: '500'
                    },
                    children: "Loan Amount"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                      marginTop: '10px'
                    },
                    children: "$0"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                  ml: "20px",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                      fontWeight: '500'
                    },
                    children: "Average Interest Rate"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                      marginTop: '10px'
                    },
                    children: "0%"
                  })]
                })]
              })
            })]
          });
        })
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (LoansDeck);

/***/ })

};
;