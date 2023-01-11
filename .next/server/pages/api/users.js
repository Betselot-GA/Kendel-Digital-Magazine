"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

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

/***/ 345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


async function handler(req, res) {
    if (req.method == 'POST') {
        const { name , email , password  } = req.body;
        const salt = await bcrypt__WEBPACK_IMPORTED_MODULE_1__.genSalt();
        const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_1__.hash(password, salt);
        const newUser = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].user.create */ .Z.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword,
                role: 'u'
            }
        });
        res.status(200).json(newUser);
        return;
    } else if (req.method == 'GET') {
        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].user.findMany */ .Z.user.findMany();
        // @ts-ignore
        res.status(200).json(user);
    } else if (req.method == 'PUT') {
        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].user.findMany */ .Z.user.findMany();
        // @ts-ignore
        res.status(200).json(user);
    } else if (req.method == 'DELETE') {
        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].user.findMany */ .Z.user.findMany();
        // @ts-ignore
        res.status(200).json(user);
    } else {
        // @ts-ignore
        res.status(200).json({
            'message': 'error occured'
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(345));
module.exports = __webpack_exports__;

})();