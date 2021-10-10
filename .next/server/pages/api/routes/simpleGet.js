(function() {
var exports = {};
exports.id = 633;
exports.ids = [633,743,675];
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

/***/ 1651:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const express = __webpack_require__(2127);

const router = express.Router();

const bcrypt = __webpack_require__(6552);

const pool = __webpack_require__(9761);

const jwtGenerator = __webpack_require__(5096);

router.get("/", async (req, res) => {
  try {
    return res.json({
      loans: 'loans'
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
var __webpack_exports__ = (__webpack_exec__(1651));
module.exports = __webpack_exports__;

})();