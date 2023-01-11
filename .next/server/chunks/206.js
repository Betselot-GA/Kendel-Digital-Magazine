"use strict";
exports.id = 206;
exports.ids = [206];
exports.modules = {

/***/ 4206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T6": () => (/* binding */ fetchPosts),
/* harmony export */   "HQ": () => (/* binding */ fetchApprovedPosts),
/* harmony export */   "qb": () => (/* binding */ createPost),
/* harmony export */   "is": () => (/* binding */ fetchSinglePosts),
/* harmony export */   "DJ": () => (/* binding */ ApprovePost),
/* harmony export */   "o1": () => (/* binding */ createAccount)
/* harmony export */ });
const apiEndpoint = "http://localhost:3000/api/";
// users
// GET - fetch logged in user
// POST - create new account
// PUT - update logged in user account
// /posts
// GET - fetch all posts
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}
async function fetchPosts() {
    return await fetch(apiEndpoint + 'posts').then((res)=>res.json()
    );
}
async function fetchApprovedPosts() {
    return await fetch(apiEndpoint + 'posts/approved').then((res)=>res.json()
    );
}
// POST - create new post
// @ts-ignore
async function createPost(data) {
    const response = await fetch(apiEndpoint + 'posts', {
        method: 'POST',
        body: data
    });
    return response.json();
}
// /posts/{id}
// GET - fetch single post
// @ts-ignore
async function fetchSinglePosts({ queryKey  }) {
    const [_, id] = queryKey;
    return await fetch(apiEndpoint + 'posts/' + id).then((res)=>res.json()
    );
}
// POST - Approve post to be seen(by admin)
// @ts-ignore
async function ApprovePost(data) {
    await postData(apiEndpoint + 'posts/' + data.id, data).then((res)=>res
    );
}
// PUT - update the post
// DELETE - delete the post
// create account
// @ts-ignore
async function createAccount(data) {
    return await fetch("/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((res)=>{
        res.json();
    });
}


/***/ })

};
;