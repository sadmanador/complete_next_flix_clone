"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/search/page",{

/***/ "(app-pages-browser)/./src/app/search/page.tsx":
/*!*********************************!*\
  !*** ./src/app/search/page.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst SearchPage = ()=>{\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const query = searchParams.get(\"query\");\n    const { isModal } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(ModalContext);\n    const [movies, setMovies] = useState([]);\n    const [loading, setLoading] = useState(true);\n    const [error, setError] = useState(null);\n    const loadMovies = async ()=>{\n        const res = await getMovie(\"/movie/top_rated?language=en-US&page=1\");\n        if (res.error) {\n            setError(res.error.message);\n        } else {\n            var _res_data;\n            setMovies(((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.results) || []);\n        }\n        setLoading(false);\n    };\n    useEffect(()=>{\n        loadMovies();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                component: \"strong\",\n                sx: {\n                    fontSize: \"1.2rem\",\n                    marginLeft: \"3rem\",\n                    padding: \"0.5rem 0\",\n                    width: \"fit-content\",\n                    zIndex: 1,\n                    marginBottom: \".85rem\"\n                },\n                children: \"My Movie List\"\n            }, void 0, false, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            query ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Searching for: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: query\n                    }, void 0, false, {\n                        fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 26\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No search query provided.\"\n            }, void 0, false, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchPage, \"88pVnuvirESyWLFf0zfraoIUvak=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n_c = SearchPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchPage);\nvar _c;\n$RefreshReg$(_c, \"SearchPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2VhcmNoL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVnRDtBQUNFO0FBQ2Y7QUFFbkMsTUFBTUksYUFBYTs7SUFDakIsTUFBTUMsZUFBZUgsZ0VBQWVBO0lBQ3BDLE1BQU1JLFFBQVFELGFBQWFFLEdBQUcsQ0FBQztJQUMvQixNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHTCxpREFBVUEsQ0FBQ007SUFDL0IsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdDLFNBQWtCLEVBQUU7SUFDaEQsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdGLFNBQWtCO0lBQ2hELE1BQU0sQ0FBQ0csT0FBT0MsU0FBUyxHQUFHSixTQUF3QjtJQUVsRCxNQUFNSyxhQUFhO1FBQ2pCLE1BQU1DLE1BQU0sTUFBTUMsU0FBUztRQUMzQixJQUFJRCxJQUFJSCxLQUFLLEVBQUU7WUFDYkMsU0FBU0UsSUFBSUgsS0FBSyxDQUFDSyxPQUFPO1FBQzVCLE9BQU87Z0JBQ0tGO1lBQVZQLFVBQVVPLEVBQUFBLFlBQUFBLElBQUlHLElBQUksY0FBUkgsZ0NBQUFBLFVBQVVJLE9BQU8sS0FBSSxFQUFFO1FBQ25DO1FBQ0FSLFdBQVc7SUFDYjtJQUVBUyxVQUFVO1FBQ1JOO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNqQiwwRkFBR0E7OzBCQUNGLDhEQUFDQywwRkFBVUE7Z0JBQ1R1QixXQUFVO2dCQUNWQyxJQUFJO29CQUNGQyxVQUFVO29CQUNWQyxZQUFZO29CQUNaQyxTQUFTO29CQUNUQyxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxjQUFjO2dCQUNoQjswQkFDRDs7Ozs7O1lBR0F6QixzQkFDQyw4REFBQzBCOztvQkFBRTtrQ0FDYyw4REFBQ0M7a0NBQVEzQjs7Ozs7Ozs7Ozs7MENBRzFCLDhEQUFDMEI7MEJBQUU7Ozs7Ozs7Ozs7OztBQUlYO0dBOUNNNUI7O1FBQ2lCRiw0REFBZUE7OztLQURoQ0U7QUFnRE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zZWFyY2gvcGFnZS50c3g/NTNjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU2VhcmNoUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zLmdldChcInF1ZXJ5XCIpO1xuICBjb25zdCB7IGlzTW9kYWwgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcbiAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlPE1lZGlhW10+KFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgbG9hZE1vdmllcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRNb3ZpZShcIi9tb3ZpZS90b3BfcmF0ZWQ/bGFuZ3VhZ2U9ZW4tVVMmcGFnZT0xXCIpO1xuICAgIGlmIChyZXMuZXJyb3IpIHtcbiAgICAgIHNldEVycm9yKHJlcy5lcnJvci5tZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TW92aWVzKHJlcy5kYXRhPy5yZXN1bHRzIHx8IFtdKTtcbiAgICB9XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkTW92aWVzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8VHlwb2dyYXBoeVxuICAgICAgICBjb21wb25lbnQ9XCJzdHJvbmdcIlxuICAgICAgICBzeD17e1xuICAgICAgICAgIGZvbnRTaXplOiBcIjEuMnJlbVwiLFxuICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiM3JlbVwiLFxuICAgICAgICAgIHBhZGRpbmc6IFwiMC41cmVtIDBcIixcbiAgICAgICAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxuICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiLjg1cmVtXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIE15IE1vdmllIExpc3RcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIHtxdWVyeSA/IChcbiAgICAgICAgPHA+XG4gICAgICAgICAgU2VhcmNoaW5nIGZvcjogPHN0cm9uZz57cXVlcnl9PC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxwPk5vIHNlYXJjaCBxdWVyeSBwcm92aWRlZC48L3A+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZTtcbiJdLCJuYW1lcyI6WyJCb3giLCJUeXBvZ3JhcGh5IiwidXNlU2VhcmNoUGFyYW1zIiwidXNlQ29udGV4dCIsIlNlYXJjaFBhZ2UiLCJzZWFyY2hQYXJhbXMiLCJxdWVyeSIsImdldCIsImlzTW9kYWwiLCJNb2RhbENvbnRleHQiLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImxvYWRNb3ZpZXMiLCJyZXMiLCJnZXRNb3ZpZSIsIm1lc3NhZ2UiLCJkYXRhIiwicmVzdWx0cyIsInVzZUVmZmVjdCIsImNvbXBvbmVudCIsInN4IiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwicGFkZGluZyIsIndpZHRoIiwiekluZGV4IiwibWFyZ2luQm90dG9tIiwicCIsInN0cm9uZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/search/page.tsx\n"));

/***/ })

});