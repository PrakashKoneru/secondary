(function() {
var exports = {};
exports.id = 675;
exports.ids = [675];
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

/***/ 334:
/***/ (function(module) {

"use strict";
module.exports = require("dotenv");;

/***/ }),

/***/ 4723:
/***/ (function(module) {

"use strict";
module.exports = require("pg");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(9761));
module.exports = __webpack_exports__;

})();