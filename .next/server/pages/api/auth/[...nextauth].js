"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
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

/***/ 409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
// EXTERNAL MODULE: ./lib/prisma.ts + 1 modules
var prisma = __webpack_require__(85);
// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(7096);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].ts




// @ts-ignore
let userAccount = null;
const configuration = {
    session: {
        jwt: true
    },
    // adapter: PrismaAdapter(prisma),
    providers: [
        credentials_default()({
            name: "Credentials",
            credentials: {
                email: {
                    label: "email",
                    type: "text"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            // @ts-ignore
            async authorize (credentials) {
                const user = await prisma/* default.user.findFirst */.Z.user.findFirst({
                    where: {
                        email: credentials === null || credentials === void 0 ? void 0 : credentials.email
                    }
                });
                if (user !== null) {
                    const isMatch = await external_bcrypt_.compare(// @ts-ignore
                    credentials.password, user.password);
                    if (isMatch) {
                        userAccount = {
                            name: user.name,
                            email: user.email,
                            image: user.role
                        };
                        return userAccount;
                    } else {
                        return null;
                    }
                } else {
                    return null;
                }
            }
        })
    ],
    secret: process.env.JWT_SECRET,
    callbacks: {
        // @ts-ignore
        // @ts-ignore
        async session (session, token) {
            // @ts-ignore
            if (userAccount !== null) {
                // @ts-ignore
                session.user = userAccount;
            } else if (typeof token.user !== typeof undefined && (typeof session.user === typeof undefined || typeof session.user !== typeof undefined && typeof session.user.userId === typeof undefined)) {
                session.user = token.user;
            } else if (typeof token !== typeof undefined) {
                session.token = token;
            }
            return session;
        }
    }
};
// @ts-ignore
// @ts-ignore
// @ts-ignore
/* harmony default export */ const _nextauth_ = ((req, res)=>external_next_auth_default()(req, res, configuration));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(409));
module.exports = __webpack_exports__;

})();