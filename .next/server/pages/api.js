(function() {
var exports = {};
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 5665:
/***/ (function(module) {

module.exports = async (req, res) => {
  try {
    res.status(200).json({
      result: 'sucesss'
    });
  } catch (e) {
    res.status(500).json({
      error: e.message
    });
  }
};

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(5665));
module.exports = __webpack_exports__;

})();