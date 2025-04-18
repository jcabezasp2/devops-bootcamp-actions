/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 991:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 731:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ }),

/***/ 396:
/***/ ((module) => {

module.exports = eval("require")("axios");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
const core = __nccwpck_require__(991);
const github = __nccwpck_require__(731);
const axios = __nccwpck_require__(396);

async function run() {
  try {
    const issueNumber = core.getInput('issue_number');
    console.log(`Procesando la issue #${issueNumber}...`);

    const response = await axios.get('https://favqs.com/api/qotd');
    const quote = response.data.quote.body;
    const author = response.data.quote.author;

    console.log(`🌟 Cita motivacional: "${quote}" - ${author}`);
  } catch (error) {
    core.setFailed(`Error ejecutando la Action: ${error.message}`);
  }
}

run();
module.exports = __webpack_exports__;
/******/ })()
;