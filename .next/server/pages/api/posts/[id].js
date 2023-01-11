"use strict";
(() => {
var exports = {};
exports.id = 789;
exports.ids = [789];
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

/***/ 1570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);

async function handler(req, res) {
    const { id  } = req.query;
    if (req.method == 'GET') {
        const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post.findUnique */ .Z.post.findUnique({
            where: {
                id: Number(id)
            },
            include: {
                author: {}
            }
        });
        // @ts-ignore
        res.status(200).json(post);
    } else if (req.method == 'POST') {
        const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post.update */ .Z.post.update({
            where: {
                id: Number(id)
            },
            data: {
                published: true
            }
        });
        // @ts-ignore
        res.status(200).json(post);
    } else if (req.method == 'PUT') {
        const { title , content  } = req.body;
        const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post.update */ .Z.post.update({
            where: {
                id: Number(id)
            },
            data: {
                title: title,
                content: content
            }
        });
        // @ts-ignore
        res.status(200).json(post);
    } else if (req.method == 'DELETE') {
        const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post["delete"] */ .Z.post["delete"]({
            where: {
                id: Number(id)
            }
        });
        // @ts-ignore
        res.status(200).json(post);
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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1570));
module.exports = __webpack_exports__;

})();