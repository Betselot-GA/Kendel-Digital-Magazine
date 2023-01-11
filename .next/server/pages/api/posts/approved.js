"use strict";
(() => {
var exports = {};
exports.id = 791;
exports.ids = [791];
exports.modules = {

/***/ 85:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ lib_prisma)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./lib/prisma.ts

let prisma;
if (true) {
    prisma = new client_namespaceObject.PrismaClient();
} else {}
/* harmony default export */ const lib_prisma = (prisma);


/***/ }),

/***/ 6175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

async function handler(// @ts-ignore
req, // @ts-ignore
res) {
    const posts = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post.findMany */ .Z.post.findMany({
        where: {
            published: true
        },
        orderBy: {
            id: 'desc'
        },
        include: {
            author: {}
        }
    });
    res.status(200).json(posts);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6175));
module.exports = __webpack_exports__;

})();