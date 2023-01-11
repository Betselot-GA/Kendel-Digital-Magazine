"use strict";
(() => {
var exports = {};
exports.id = 223;
exports.ids = [223];
exports.modules = {

/***/ 3518:
/***/ ((module) => {

module.exports = require("cloudinary");

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

/***/ 4447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./lib/prisma.ts + 1 modules
var prisma = __webpack_require__(85);
;// CONCATENATED MODULE: external "formidable"
const external_formidable_namespaceObject = require("formidable");
;// CONCATENATED MODULE: ./lib/images.ts
// @ts-ignore

const cloudinary = (__webpack_require__(3518).v2);
cloudinary.config({
    cloud_name: "instant-chat",
    api_key: "695445746752269",
    api_secret: "32Mumw4vAUNmkmC36qTn951vR54"
});
// @ts-ignore
function uploadImage(imageUploaded) {
    return new Promise((resolve, reject)=>{
        cloudinary.uploader.upload(imageUploaded, {
            width: 400,
            height: 300,
            crop: "fill"
        }, // @ts-ignore
        // @ts-ignore
        (err, res)=>{
            if (err) reject(err);
            resolve(res);
        });
    });
}
// @ts-ignore
async function getImage(formData) {
    const data = await new Promise(function(resolve, reject) {
        const form = new external_formidable_namespaceObject.IncomingForm({
            keepExtensions: true
        });
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        form.parse(formData, function(err, fields, files) {
            if (err) return reject(err);
            resolve({
                fields,
                files
            });
        });
    });
    return data;
}

;// CONCATENATED MODULE: ./pages/api/posts/index.ts
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const config = {
    api: {
        bodyParser: false
    }
};
async function handler(req, res) {
    if (req.method == 'POST') {
        const imageUploaded = await getImage(req);
        // @ts-ignore
        const { title , content  } = imageUploaded.fields;
        // @ts-ignore
        const imageData = await uploadImage(imageUploaded.files.image.filepath);
        console.log(imageData);
        const post = await prisma/* default.post.create */.Z.post.create({
            data: {
                title: title,
                content: content,
                // @ts-ignore
                publicId: imageData.public_id,
                // @ts-ignore
                format: imageData.format,
                // @ts-ignore
                version: imageData.version.toString(),
                published: false
            }
        });
        // @ts-ignore
        res.status(200).json(post);
    } else if (req.method == 'GET') {
        const posts = await prisma/* default.post.findMany */.Z.post.findMany({
            orderBy: {
                id: 'desc'
            },
            include: {
                author: {}
            }
        });
        // @ts-ignore
        res.status(200).json(posts);
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
var __webpack_exports__ = (__webpack_exec__(4447));
module.exports = __webpack_exports__;

})();