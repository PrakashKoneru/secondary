(function() {
var exports = {};
exports.id = 401;
exports.ids = [401];
exports.modules = {

/***/ 4250:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const jwt = __webpack_require__(9722);

__webpack_require__(334).config(); //this middleware will on continue on if the token is inside the local storage


module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("pToken"); // Check if not token

  if (!token) {
    return res.status(403).json({
      msg: "authorization denied"
    });
  } // Verify token


  try {
    //it is going to give use the user id (user:{id: user.id})
    const verify = jwt.verify(token, process.env.jwtSecret);
    req.lender_id = verify.user.id;
    next();
  } catch (err) {
    res.status(401).json({
      msg: "Token is not valid"
    });
  }
};

/***/ }),

/***/ 334:
/***/ (function(module) {

"use strict";
module.exports = require("dotenv");;

/***/ }),

/***/ 9722:
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(4250));
module.exports = __webpack_exports__;

})();