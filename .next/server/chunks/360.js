exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 233:
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
/* harmony import */ var _loanDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6050);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const LoanCard = ({
  loan,
  setLoansToRender,
  index,
  setLoanCounts
}, ref) => {
  const {
    0: showModal,
    1: setShowModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: showActionNotification,
    1: setActionNotification
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();

  const updateLoan = ({
    loan_id,
    approval_status
  }) => {
    setActionNotification(approval_status);
    const baseURL = '/secondary/secondaryLenders/loans/update';
    axios__WEBPACK_IMPORTED_MODULE_6___default().post(baseURL, {
      loan_id,
      approval_status
    }, {
      headers: {
        pToken: js_cookie__WEBPACK_IMPORTED_MODULE_5___default().get('pToken')
      }
    }).then(({
      data: {
        loans,
        loanCount
      }
    }) => {
      setLoansToRender(loans);
      setLoanCounts(_objectSpread({}, loanCount));
    });
  };

  if (!loan) return null;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app__WEBPACK_IMPORTED_MODULE_3__.ThemeContext.Consumer, {
    children: theme => {
      const colorHelper = {
        approved: '#179942',
        rejected: '#FA1103',
        pending: '#19858F'
      };
      if (showActionNotification) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
        alignItems: "center",
        border: `1px solid ${theme.colors.gray}`,
        borderRadius: "3px",
        p: "15px",
        mt: index === 0 ? '0px' : `15px`,
        flexDirection: "column",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          style: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            color: colorHelper[showActionNotification],
            fontSize: '25px',
            height: '75px',
            alignItems: 'center'
          },
          children: `Adding to ${showActionNotification.charAt(0).toUpperCase() + showActionNotification.slice(1)} Loans`
        })
      });
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
          alignItems: "center",
          border: `1px solid ${theme.colors.gray}`,
          borderRadius: "3px",
          p: "15px",
          flexDirection: "column",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
            flexWrap: "wrap",
            w: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            children: _utils_fieldLineUp__WEBPACK_IMPORTED_MODULE_4__/* .default.slice */ .Z.slice(0, 6).map((field, index) => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                w: {
                  sm: "46%",
                  md: "auto"
                },
                py: "10px",
                ml: {
                  md: index === 0 ? "0px" : "10px",
                  sm: "10px"
                },
                whiteSpace: "wrap",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                  children: field.title
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                  children: field.format(loan[field.def])
                })]
              }, index);
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
            w: "100%",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
              w: "100%",
              justifyContent: "flex-end",
              flexWrap: "wrap",
              children: [loan.approval_status === "new" || loan.approval_status === "pending" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                width: "110px",
                variant: "loanCard",
                style: {
                  background: '#179942',
                  color: 'white'
                },
                onClick: () => updateLoan({
                  loan_id: loan.loan_id,
                  approval_status: 'approved'
                }),
                mt: "10px" // disabled={loadingState}
                ,
                children: "Approve"
              }) : null, loan.approval_status === "new" || loan.approval_status === "pending" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                ml: "15px",
                width: "110px",
                variant: "loanCard",
                style: {
                  background: '#FA1103',
                  color: 'white'
                },
                onClick: () => updateLoan({
                  loan_id: loan.loan_id,
                  approval_status: 'rejected'
                }) // disabled={loadingState}
                ,
                mt: "10px",
                children: "Reject"
              }) : null, loan.approval_status === "new" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button // mt={{sm: "10px", md: "0px"}}
              , {
                ml: "15px",
                width: "110px",
                variant: "loanCard" // onClick={() => updateData('pending')}
                // disabled={loadingState}
                ,
                style: {
                  background: '#19858F',
                  color: 'white'
                },
                onClick: () => updateLoan({
                  loan_id: loan.loan_id,
                  approval_status: 'pending'
                }),
                mt: "10px",
                children: "Decide Later"
              }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button // mt={{sm: "10px", md: "0px"}}
              , {
                ml: "15px",
                width: "110px",
                variant: "loanCard",
                onClick: () => {
                  setShowModal(true);
                },
                mt: "10px",
                children: "All Details"
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {
          isOpen: showModal,
          onClose: () => setShowModal(false) // size="full"
          ,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {
            maxW: "56rem",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {
              children: "Loan Details"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalCloseButton, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_loanDetails__WEBPACK_IMPORTED_MODULE_9__.default, {
                loan: loan
              })
            })]
          })]
        })]
      }, loan.loan_id);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (LoanCard);

/***/ }),

/***/ 4678:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
const curencyFormatter = new Intl.NumberFormat('en-US', {
  currency: 'USD'
});
const fieldLineUp = [{
  title: 'Loan Amount',
  def: 'loan_amnt_sec',
  format: value => `$${curencyFormatter.format(value)}`
}, {
  title: 'Term',
  def: 'term',
  format: value => {
    return value.replace("_", " ");
  }
}, {
  title: 'Interest Rate',
  def: 'interest_rate_percent',
  format: value => {
    return `${value}%`;
  }
}, {
  title: 'Annual Income',
  def: 'annual_inc',
  format: value => `$${curencyFormatter.format(value)}`
}, {
  title: 'Loan Sub Grade',
  def: 'loan_sub_grade',
  format: value => {
    return value;
  }
}, {
  title: 'Payment Prob.',
  def: 'default_probability_percent_updated',
  format: value => {
    return `${(100 - Number(value).toFixed(2)).toFixed(2)}%`;
  }
}];
/* harmony default export */ __webpack_exports__["Z"] = (fieldLineUp);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;