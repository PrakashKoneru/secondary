(function() {
var exports = {};
exports.id = 340;
exports.ids = [340,675];
exports.modules = {

/***/ 9761:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const Pool = __webpack_require__(4723).Pool;

__webpack_require__(334).config();

const pool = () => new Pool({
  user: process.env.user,
  password: process.env.poolPass,
  host: "localhost",
  port: 5432,
  database: process.env.db
});

module.exports = pool;

/***/ }),

/***/ 1952:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const express = __webpack_require__(2127);

const moment = __webpack_require__(2470);

const router = express.Router();

const pool = __webpack_require__(9761);

router.post("/sort", async (req, res) => {
  const {
    sortBy,
    selectedNav
  } = req.body;

  try {
    const loans = await pool().query(`SELECT loan_id, loan_amnt, term, interest_rate_percent, annual_inc, loan_sub_grade, default_probability_percent_updated, approval_status FROM loans WHERE approval_status=$1 ORDER BY ${sortBy} LIMIT 100`, [selectedNav]);
    return res.json({
      loans: loans.rows
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
router.post("/details", async (req, res) => {
  try {
    const {
      loan_id
    } = req.body;
    const loan = await pool().query("SELECT * FROM loans WHERE loan_id = $1", [loan_id]);

    if (loan.rows.length === 0) {
      res.status(404).send("Invalid Request");
    }

    if (loan.rows[0].approval_status === "approved" && loan.rows[0].approver_id != req.lender_id) {
      res.status(401).send("Invalid Request");
    } // Should eventually change.


    loan.rows[0].term = `${Number(loan.rows[0].term.slice(0, 1)) / 2}_years`;
    return res.json({
      loan: loan.rows[0]
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
router.post("/filter", async (req, res) => {
  let {
    fundedAmountMin,
    fundedAmountMax,
    annualIncomeMin,
    annualIncomeMax,
    loanGrade,
    selectedNav
  } = req.body;

  try {
    const loans = await pool().query(`SELECT 
				loan_id,
				loan_amnt,
				term,
				interest_rate_percent,
				annual_inc,
				loan_sub_grade,
				default_probability_percent_updated,
				approval_status
			FROM
				loans
			WHERE
				loan_amnt > $1
			AND
				loan_amnt < $2
			AND
				annual_inc > $3
			AND
				annual_inc < $4
			AND
				loan_grade LIKE $5
			AND
			approval_status = $6
			LIMIT 100`, [fundedAmountMin, fundedAmountMax, annualIncomeMin, annualIncomeMax, loanGrade, selectedNav]);
    return res.json({
      loans: loans.rows
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
router.get("/counts", async (req, res) => {
  try {
    const incomingLoans = await pool().query("SELECT count(*) AS count FROM loans WHERE approval_status = $1", ["sec_incoming"]);
    const currentLoans = await pool().query("SELECT count(*) AS count FROM loans WHERE approval_status = $1", ["sec_current"]);
    const completedLoans = await pool().query("SELECT count(*) AS count FROM loans WHERE approval_status = $1 AND secondary_approver_id = $2", ["sec_completed", req.lender_id]);
    return res.json({
      'Incoming Loans': incomingLoans.rows[0].count,
      'Current Loans': currentLoans.rows[0].count,
      'Completed Loans': completedLoans.rows[0].count
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
router.get("/completed", async (req, res) => {
  try {
    const completedLoans = await pool().query("SELECT * FROM loans WHERE approval_status = $1 AND secondary_approver_id = $2", ["sec_completed", req.lender_id]); // console.log(req.lender_id);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"];
    const loansWithMonths = completedLoans.rows.map(loan => {
      loan.issue_month = months[loan.loan_break_d_month - 1]; // loan.loan_amnt = loan.loan_amnt - loan.total_rec_principal;

      loan.term = `${Number(loan.term.slice(0, 1)) / 2}_years`;
      return loan;
    });
    return res.json({
      loans: loansWithMonths
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
router.get("/current", async (req, res) => {
  try {
    const incomingLoans = await pool().query("SELECT * FROM loans WHERE approval_status = $1", ["sec_current"]);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"];
    let loansWithMonths = [];

    if (incomingLoans.rows) {
      loansWithMonths = incomingLoans.rows.map(loan => {
        if (loan.loan_break_d_month) {
          loan.issue_month = months[loan.loan_break_d_month - 1]; // loan.loan_amnt = loan.loan_amnt - loan.total_rec_principal;

          loan.term = `${Number(loan.term.slice(0, 1)) / 2}_years`;
        }

        return loan;
      });
    }

    return res.json({
      loans: loansWithMonths
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
router.get("/incoming", async (req, res) => {
  try {
    const incomingLoans = await pool().query("SELECT * FROM loans WHERE approval_status = $1", ["sec_incoming"]);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"];
    let loansWithMonths = [];

    if (incomingLoans.rows) {
      loansWithMonths = incomingLoans.rows.map(loan => {
        if (loan.loan_break_d_month) {
          loan.issue_month = months[loan.loan_break_d_month - 1]; // loan.loan_amnt = loan.loan_amnt - loan.total_rec_principal;

          loan.term = `${Number(loan.term.slice(0, 1)) / 2}_years`;
        }

        return loan;
      });
    }

    return res.json({
      loans: loansWithMonths
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
module.exports = router;

/***/ }),

/***/ 334:
/***/ (function(module) {

"use strict";
module.exports = require("dotenv");;

/***/ }),

/***/ 2127:
/***/ (function(module) {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ 2470:
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ 4723:
/***/ (function(module) {

"use strict";
module.exports = require("pg");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(1952));
module.exports = __webpack_exports__;

})();