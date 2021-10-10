exports.id = 472;
exports.ids = [472];
exports.modules = {

/***/ 3472:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ graphView; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./pages/_app.js + 7 modules
var _app = __webpack_require__(5529);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
;// CONCATENATED MODULE: ./utils/graphLineUp.js
const curencyFormatter = new Intl.NumberFormat('en-US', {
  currency: 'USD'
});

const graphLineUp = (loans = []) => {
  let total_amount_invested = 0;
  let total_received = 0;
  let percent_of_late_payments;
  let percent_of_late_payments_filter = 0;
  let total_princ_lost = 0;
  let total_princ_received = 0;
  let total_princ_pending = 0;
  let initial_expected_returns;
  let initial_expected_returns_num = 0;
  let current_expected_returns;
  let current_expected_returns_num = 0;
  let total_interest_received_current = 0;
  let total_princ_received_current = 0;
  let total_princ_pending_current = 0;
  let total_princ_pending_lost_current = 0;
  let total_princ_lost_current = 0;
  let received_return = 0;
  loans && loans.map((loan, index) => {
    // For Field 1
    total_amount_invested += Number(loan.loan_amnt); // For Field 2

    total_received += Number(loan.total_pymnt); // For Field 3

    if (loan.loan_status === "late_16_30_days" || loan.loan_status === "late_30_120_days" || loan.loan_status === "late_grace_period") {
      percent_of_late_payments_filter += Number(loan.total_pymnt);
    } // For Field 4


    if (loan.loan_status === "default" || loan.loan_status === "charged_off") {
      total_princ_lost += Number(loan.loan_amnt) - Number(loan.total_pymnt);
    } // For Field 5


    total_princ_received += Number(loan.total_rec_principal); // For Field 6. Directly in return
    // For Field 7.

    initial_expected_returns_num += Number(loan.installment) * Number(loan.term.slice(0, 1)) * 12; // For Field 8

    if (loan.loan_status != "default" && loan.loan_status != "charged_off" && loan.loan_status != "fully_paid") {
      total_princ_pending_lost_current += Number(loan.loan_amnt) - Number(loan.total_rec_principal);

      if (loan.loan_status === "late_16_30_days" || loan.loan_status === "late_30_120_days" || loan.loan_status === "late_grace_period") {
        total_princ_lost_current += Number(loan.loan_amnt) - Number(loan.total_pymnt);
      }

      total_princ_received_current += Number(loan.total_rec_principal);
      total_interest_received_current += Number(loan.total_rec_interest); // current_expected_returns_num+=Number(loan.installment)*(Number(loan.term.slice(0,1)))*12
      // Eventually change below to above.

      current_expected_returns_num += Number(loan.installment) * 3 * 12;
    }

    total_princ_pending_current = total_princ_pending_lost_current - total_princ_lost_current; // For Field 9. Look Return Directly.
  });
  let current_expected_returns_numerator = current_expected_returns_num - (total_princ_received_current + total_interest_received_current);
  total_princ_pending = total_amount_invested - total_princ_received - total_princ_lost; // return {
  // 	total_amount_invested: total_amount_invested.toFixed(2),
  // 	total_received: total_received.toFixed(2),
  // 	percent_of_late_payments: `${((percent_of_late_payments_filter/total_received) * 100).toFixed(2)}%`,
  // 	total_princ_lost: total_princ_lost.toFixed(2),
  // 	total_princ_received: total_princ_received.toFixed(2),
  // 	total_princ_pending: (total_amount_invested - total_princ_received - total_princ_lost).toFixed(2),
  // 	initial_expected_returns: `${(((initial_expected_returns_num/total_amount_invested) - 1) * 100).toFixed(2)}%`,
  // 	current_expected_returns: `${(((current_expected_returns_numerator/total_princ_pending_current) - 1) * 100).toFixed(2)}%`,
  // 	received_return: `${(((total_received/total_princ_received) - 1)*100).toFixed(2)}%`,
  // }

  return {
    blocks: [{
      title: 'Total Amount Invested',
      value: `$${curencyFormatter.format(total_amount_invested.toFixed(2))}`
    }, {
      title: 'Total Received',
      value: `$${curencyFormatter.format(total_received.toFixed(2))}`
    }, {
      title: '% of Late Payments',
      value: `${(percent_of_late_payments_filter / total_received * 100).toFixed(2)}%`
    }, {
      title: 'Total Princ. Lost',
      value: `$${curencyFormatter.format(total_princ_lost.toFixed(2))}`
    }, {
      title: 'Total Princ. Received',
      value: `$${curencyFormatter.format(total_princ_received.toFixed(2))}`
    }, {
      title: 'Total Princ. Pending',
      value: `$${curencyFormatter.format(total_princ_pending.toFixed(2))}`
    }, // {
    // 	title: 'Initial Expected Returns',
    // 	value: `${(((initial_expected_returns_num/total_amount_invested) - 1) * 100).toFixed(2)}%`
    // },
    {
      title: 'Expected Returns',
      value: `${((current_expected_returns_numerator / total_princ_pending_current - 1) * 100).toFixed(2)}%`
    }, {
      title: 'Received Returns',
      value: `${((total_received / total_princ_received - 1) * 100).toFixed(2)}%`
    }],
    total_princ_received: Number(total_princ_received.toFixed(2)),
    total_princ_pending: Number(total_princ_pending.toFixed(2)),
    total_princ_lost: Number(total_princ_lost.toFixed(2))
  };
};

/* harmony default export */ var utils_graphLineUp = (graphLineUp);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
// EXTERNAL MODULE: external "recharts"
var external_recharts_ = __webpack_require__(7847);
// EXTERNAL MODULE: ./pages/components/reUsable/paisaPie.js
var paisaPie = __webpack_require__(5145);
;// CONCATENATED MODULE: ./pages/components/graphView.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  if (percent === 0) return null;
  return /*#__PURE__*/_jsx("text", {
    x: x,
    y: y,
    fill: "white",
    textAnchor: x > cx ? 'start' : 'end',
    dominantBaseline: "central",
    children: `${(percent * 100).toFixed(0)}%`
  });
};

const GraphView = (_ref) => {
  let {
    selectedNav
  } = _ref,
      props = _objectWithoutProperties(_ref, ["selectedNav"]);

  const {
    0: approvedLoans,
    1: setApprovedLoans
  } = (0,external_react_.useState)(null);
  const {
    0: selectedGrade,
    1: setSelectedGrade
  } = (0,external_react_.useState)('all');
  (0,external_react_.useEffect)(() => {
    const baseURL = `secondaryLenders/loans/${selectedNav.split(" ")[0]}`;
    external_axios_default().get(baseURL, {
      headers: {
        pToken: external_js_cookie_default().get('pToken')
      }
    }).then(({
      data
    }) => {
      setApprovedLoans(data.loans);
    });
  }, [selectedNav]);
  const barGraphDataByGrade = {
    'A': {
      category: 'A',
      categorySum: 0
    },
    'B': {
      category: 'B',
      categorySum: 0
    },
    'C': {
      category: 'C',
      categorySum: 0
    },
    'D': {
      category: 'D',
      categorySum: 0
    }
  };
  const barGraphDataByMonth = {
    'Jan': 'Jan',
    'Feb': 'Feb',
    'Mar': 'Mar',
    'Apr': 'Apr',
    'May': 'May',
    'Jun': 'Jun',
    'Jul': 'Jul',
    'Aug': 'Aug',
    'Sep': 'Sep',
    'Oct': 'Oct',
    'Nov': 'Nov',
    'Dec': 'Dec'
  };
  let approvedLoansMin = 1000000000000000000;
  let approvedLoansMax = 0;
  const barGraphDataHelper = approvedLoans && approvedLoans.map(each => {
    // calculates the sum of each loan category
    if (Number(each.loan_amnt_sec) > approvedLoansMax) approvedLoansMax = Number(each.loan_amnt_sec);
    if (Number(each.loan_amnt_sec) < approvedLoansMin) approvedLoansMin = Number(each.loan_amnt_sec);

    if (each.loan_grade === 'A') {
      barGraphDataByGrade['A']['categorySum'] += Number(each.loan_amnt_sec);
    }

    if (each.loan_grade === 'B') {
      barGraphDataByGrade['B']['categorySum'] += Number(each.loan_amnt_sec);
    }

    if (each.loan_grade === 'C') {
      barGraphDataByGrade['C']['categorySum'] += Number(each.loan_amnt_sec);
    }

    if (each.loan_grade === 'D') {
      barGraphDataByGrade['D']['categorySum'] += Number(each.loan_amnt_sec);
    }
  });

  const loansBySelectedGroup = groupingState => approvedLoans && approvedLoans.reduce((loan, value) => {
    if (!loan[value[groupingState]]) {
      loan[value[groupingState]] = {
        loans: [],
        loan_amnt_sec: 0
      };
    } // Grouping


    loan[value[groupingState]]['loans'] = [...loan[value[groupingState]]['loans'], value];
    loan[value[groupingState]]['loan_amnt_sec'] = loan[value[groupingState]]['loan_amnt_sec'] + parseInt(value['loan_amnt_sec'], "10");
    return loan;
  }, {}); // let loansByGrade = loansBySelectedGroup('loan_grade')


  let loansByMonth = loansBySelectedGroup('issue_month');

  let loansByAllMonths = _objectSpread(_objectSpread({}, barGraphDataByMonth), loansByMonth);

  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let loansByMonthGraphData = loansByMonth && Object.keys(loansByAllMonths).sort(function (a, b) {
    return months.indexOf(a) - months.indexOf(b);
  }).map(each => {
    if (loansByMonth[each]) {
      return {
        xAxis: each,
        monthTotal: loansByMonth[each].loan_amnt_sec
      };
    } else {
      return {
        xAxis: each,
        monthTotal: 0
      };
    }
  });
  const graphLineUpResult = utils_graphLineUp(approvedLoans);
  const graphLineUpResultByGrade = approvedLoans && utils_graphLineUp(approvedLoans.filter(each => {
    if (selectedGrade === 'all') {
      return each;
    } else {
      return each.loan_grade === selectedGrade;
    }
  }));
  const principalPieChartData = graphLineUpResultByGrade && [{
    name: "Total Principal Received",
    value: graphLineUpResultByGrade['total_princ_received'],
    fill: '#0088FE'
  }, {
    name: "Total Principal Pending",
    value: graphLineUpResultByGrade['total_princ_pending'],
    fill: '#dd7876'
  }, {
    name: "Total Principal Lost",
    value: graphLineUpResultByGrade['total_princ_lost'],
    fill: '#FFBB28'
  }];
  const loansByLoanStatus = loansBySelectedGroup('loan_status');
  const loanStatusPieChartData = loansByLoanStatus && Object.keys(loansByLoanStatus).map((each, index) => {
    return {
      name: each,
      value: loansByLoanStatus[each].loans.length
    };
  });
  return /*#__PURE__*/jsx_runtime_.jsx(_app.ThemeContext.Consumer, {
    children: theme => {
      if (!approvedLoans) return null;
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Container, {
        padding: {
          sm: "0px",
          md: "inherit"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
          mt: "30px",
          fontWeight: "700",
          children: "Loans Overview"
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
          flexWrap: "wrap",
          margin: "auto",
          mt: "30px",
          justifyContent: {
            md: "center",
            sm: "space-between"
          },
          children: graphLineUpResult.blocks.map((each, index) => {
            if (selectedNav === 'Incoming Stats' && each.title === 'Received Return') return null;
            if (selectedNav === 'Completed Stats' && each.title === 'Expected Returns') return null;
            if (each.value === 'NaN%') return null;
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
              mr: {
                md: "10px",
                sm: "0px"
              },
              mb: "25px",
              w: {
                md: "19%",
                sm: "48%"
              },
              justifyContent: "center",
              alignItems: "center",
              border: `1px solid ${theme.colors.gray}`,
              borderRadius: "3px",
              p: "10px",
              flexDirection: "column",
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
                children: each.title
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
                children: each.value
              })]
            }, index);
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
          mt: "60px",
          flexWrap: "wrap",
          alignItems: "baseline",
          justifyContent: "center",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
            w: {
              md: "50%",
              sm: "100%"
            },
            h: "400px",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
              fontWeight: "700",
              mb: "50px",
              children: "Total Amount Across Grades"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_recharts_.BarChart, {
              width: 400,
              height: 300,
              data: Object.values(barGraphDataByGrade),
              margin: {
                left: 35,
                right: 50
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_recharts_.CartesianGrid, {
                vertical: false,
                stroke: "#ebf3f0"
              }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.XAxis, {
                dataKey: "category",
                fontSize: "12" // angle="-20"
                // tickMargin={9}

              }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.YAxis, {
                type: "number" // domain={[( dataMin) => parseInt(dataMin), (dataMax) =>parseInt(dataMax)]}

              }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.Tooltip, {}), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.Bar, {
                dataKey: "categorySum",
                fill: "red",
                barSize: "170px",
                fontFamily: "sans-serif",
                children: Object.values(barGraphDataByGrade).map(each => /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.Cell, {
                  fill: theme.colors.primary
                }))
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
            mt: {
              md: "0px",
              sm: "60px"
            },
            w: {
              md: "50%",
              sm: "100%"
            },
            h: "400px",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
              fontWeight: "700",
              mb: "48px",
              children: "Total Amount Across Months"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_recharts_.BarChart, {
              width: 400,
              height: 300,
              data: loansByMonthGraphData,
              margin: {
                left: 25,
                right: 50
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_recharts_.CartesianGrid, {
                vertical: false,
                stroke: "#ebf3f0"
              }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.XAxis, {
                dataKey: "xAxis",
                fontSize: "12",
                angle: "-50",
                interval: 0,
                tickMargin: 9
              }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.YAxis, {
                type: "number",
                dataKey: "monthTotal"
              }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.Tooltip, {}), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.Bar, {
                dataKey: "monthTotal",
                fill: "red",
                barSize: "170px",
                fontFamily: "sans-serif",
                children: loansByMonthGraphData.map(each => /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.Cell, {
                  fill: theme.colors.primary
                }))
              })]
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
          w: "100%",
          flexWrap: "wrap",
          alignItems: "baseline",
          mt: {
            sm: "75px",
            md: "125px"
          },
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
            w: {
              md: "50%",
              sm: "100%"
            },
            justifyContent: "baseline",
            alignItems: "center",
            flexDirection: "column",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
              alignItems: "center",
              flexDirection: "column",
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
                fontWeight: "700",
                mb: "20px",
                children: "Loan Principal Amount"
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.Select, {
                mt: "5px",
                name: "loans",
                id: "loans",
                onChange: e => setSelectedGrade(e.target.value),
                style: {
                  border: `1px solid ${theme.colors.gray}`
                },
                children: ['all', 'A', 'B', 'C', 'D'].map((item, index) => {
                  return /*#__PURE__*/jsx_runtime_.jsx("option", {
                    value: item,
                    border: `1px solid ${theme.colors.gray}`,
                    children: index === 0 ? `All Loans` : `Grade ${item} Loans`
                  }, item);
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(paisaPie.default, {
              mt: {
                sm: "75px",
                md: "50px"
              },
              data: principalPieChartData,
              showPieCrumbs: JSON.stringify(principalPieChartData.map(each => each.value)) != JSON.stringify([0, 0, 0])
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
            w: {
              md: "50%",
              sm: "100%"
            },
            h: "400px",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mt: {
              sm: "150px",
              md: "0px"
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
              justifyContent: "center",
              children: /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
                fontWeight: "700",
                mb: "20px",
                children: "Loans Status"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(paisaPie.default, {
              mt: {
                sm: "-20px",
                md: "58px"
              },
              data: loanStatusPieChartData
            })]
          })]
        })]
      }, selectedNav);
    }
  });
};

/* harmony default export */ var graphView = (GraphView);

/***/ })

};
;