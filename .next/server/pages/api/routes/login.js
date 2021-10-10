(function() {
var exports = {};
exports.id = 543;
exports.ids = [543,743,675];
exports.modules = {

/***/ 5096:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const jwt = __webpack_require__(9722);

__webpack_require__(334).config();

function jwtGenerator(user_id) {
  const payload = {
    user: {
      id: user_id
    }
  };
  return jwt.sign(payload, process.env.jwtSecret);
}

module.exports = jwtGenerator;

/***/ }),

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

/***/ 9365:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const express = __webpack_require__(2127);

const router = express.Router();

const bcrypt = __webpack_require__(6552);

const pool = __webpack_require__(9761);

const jwtGenerator = __webpack_require__(5096);

router.post("/resetPassword", async (req, res) => {
  try {
    const {
      email,
      oldPassword,
      newPassword
    } = req.body;
    const lender = await pool().query("SELECT * FROM lenders WHERE lender_email = $1", [email]);

    if (lender.rows.length === 0) {
      return res.status(401).json("Lender Doesnot Exist.");
    }

    const validPassword = await bcrypt.compare(oldPassword, lender.rows[0].lender_password);

    if (!validPassword) {
      return res.status(401).json("Invalid Password from email.");
    } else if (oldPassword === newPassword) {
      return res.status(401).json("Old Password Canot match New Password");
    } else {
      const salt = await bcrypt.genSalt(10);
      const bcryptPassword = await bcrypt.hash(newPassword, salt);
      pool().query('UPDATE lenders SET lender_password = $1, lender_password_changed = $2 WHERE lender_id = $3', [bcryptPassword, true, lender.rows[0].lender_id], (error, results) => {
        if (error) {
          throw error;
        }

        const pToken = jwtGenerator(lender.rows[0].lender_id);
        return res.json({
          pToken
        });
      });
    } // const loans = await pool().query("SELECT * FROM loans");
    // return res.json({ loans: loans.rows });

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
router.post("/login", async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;
    const lender = await pool().query("SELECT * FROM lenders WHERE lender_email = $1", [email]);

    if (lender.rows.length === 0) {
      return res.status(401).json("Invalid Credential");
    } else if (lender.rows[0].lender_password_changed === false) {
      return res.status(401).json("Password not reset");
    }

    const validPassword = await bcrypt.compare(password, lender.rows[0].lender_password);

    if (!validPassword) {
      return res.status(401).json("Invalid Credential");
    }

    const pToken = jwtGenerator(lender.rows[0].lender_id);
    return res.json({
      pToken
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
module.exports = router;

/***/ }),

/***/ 6552:
/***/ (function(module) {

"use strict";
module.exports = require("bcrypt");;

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

/***/ 9722:
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

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
var __webpack_exports__ = (__webpack_exec__(9365));
module.exports = __webpack_exports__;

})();