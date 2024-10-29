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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Modal/Modal */ \"(app-pages-browser)/./src/components/Modal/Modal.tsx\");\n/* harmony import */ var _context_ModalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/ModalContext */ \"(app-pages-browser)/./src/context/ModalContext.tsx\");\n/* harmony import */ var _utils_apiService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/apiService */ \"(app-pages-browser)/./src/utils/apiService.ts\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst SearchPage = ()=>{\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useSearchParams)();\n    const query = searchParams.get(\"query\");\n    const { isModal } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_context_ModalContext__WEBPACK_IMPORTED_MODULE_2__.ModalContext);\n    const [movies, setMovies] = useState([]);\n    const [loading, setLoading] = useState(true);\n    const [error, setError] = useState(null);\n    const loadMovies = async ()=>{\n        const res = await (0,_utils_apiService__WEBPACK_IMPORTED_MODULE_3__.getMovie)(\"/search/movie&query=\".concat(query));\n        if (res.error) {\n            setError(res.error.message);\n            console.log();\n        } else {\n            var _res_data;\n            setMovies(((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.results) || []);\n        }\n        setLoading(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        loadMovies();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            isModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                lineNumber: 35,\n                columnNumber: 19\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        component: \"strong\",\n                        sx: {\n                            fontSize: \"1.2rem\",\n                            marginLeft: \"3rem\",\n                            padding: \"0.5rem 0\",\n                            width: \"fit-content\",\n                            zIndex: 1,\n                            marginBottom: \".85rem\"\n                        },\n                        children: \"My Movie List\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    query ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Searching for: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: query\n                            }, void 0, false, {\n                                fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 28\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No search query provided.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(SearchPage, \"88pVnuvirESyWLFf0zfraoIUvak=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useSearchParams\n    ];\n});\n_c = SearchPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchPage);\nvar _c;\n$RefreshReg$(_c, \"SearchPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2VhcmNoL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUU2QztBQUNTO0FBQ1I7QUFDRTtBQUNFO0FBQ0o7QUFFOUMsTUFBTVEsYUFBYTs7SUFDakIsTUFBTUMsZUFBZUosZ0VBQWVBO0lBQ3BDLE1BQU1LLFFBQVFELGFBQWFFLEdBQUcsQ0FBQztJQUMvQixNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHTixpREFBVUEsQ0FBQ0wsK0RBQVlBO0lBQzNDLE1BQU0sQ0FBQ1ksUUFBUUMsVUFBVSxHQUFHQyxTQUFrQixFQUFFO0lBQ2hELE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHRixTQUFrQjtJQUNoRCxNQUFNLENBQUNHLE9BQU9DLFNBQVMsR0FBR0osU0FBd0I7SUFFbEQsTUFBTUssYUFBYTtRQUNqQixNQUFNQyxNQUFNLE1BQU1uQiwyREFBUUEsQ0FBQyx1QkFBNkIsT0FBTlE7UUFDbEQsSUFBSVcsSUFBSUgsS0FBSyxFQUFFO1lBQ2JDLFNBQVNFLElBQUlILEtBQUssQ0FBQ0ksT0FBTztZQUMxQkMsUUFBUUMsR0FBRztRQUNiLE9BQU87Z0JBQ0tIO1lBQVZQLFVBQVVPLEVBQUFBLFlBQUFBLElBQUlJLElBQUksY0FBUkosZ0NBQUFBLFVBQVVLLE9BQU8sS0FBSSxFQUFFO1FBQ25DO1FBQ0FULFdBQVc7SUFDYjtJQUVBVixnREFBU0EsQ0FBQztRQUNSYTtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFOztZQUNHUix5QkFBVyw4REFBQ1osK0RBQUtBOzs7OzswQkFDbEIsOERBQUNHLDBGQUFHQTs7a0NBQ0YsOERBQUNDLDBGQUFVQTt3QkFDVHVCLFdBQVU7d0JBQ1ZDLElBQUk7NEJBQ0ZDLFVBQVU7NEJBQ1ZDLFlBQVk7NEJBQ1pDLFNBQVM7NEJBQ1RDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLGNBQWM7d0JBQ2hCO2tDQUNEOzs7Ozs7b0JBR0F4QixzQkFDQyw4REFBQ3lCOzs0QkFBRTswQ0FDYyw4REFBQ0M7MENBQVExQjs7Ozs7Ozs7Ozs7a0RBRzFCLDhEQUFDeUI7a0NBQUU7Ozs7Ozs7Ozs7Ozs7O0FBS2I7R0FsRE0zQjs7UUFDaUJILDREQUFlQTs7O0tBRGhDRztBQW9ETiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3NlYXJjaC9wYWdlLnRzeD81M2NiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSBcIkAvY29tcG9uZW50cy9Nb2RhbC9Nb2RhbFwiO1xuaW1wb3J0IHsgTW9kYWxDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9Nb2RhbENvbnRleHRcIjtcbmltcG9ydCB7IGdldE1vdmllIH0gZnJvbSBcIkAvdXRpbHMvYXBpU2VydmljZVwiO1xuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTZWFyY2hQYWdlID0gKCkgPT4ge1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXMuZ2V0KFwicXVlcnlcIik7XG4gIGNvbnN0IHsgaXNNb2RhbCB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGU8TWVkaWFbXT4oW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBsb2FkTW92aWVzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldE1vdmllKGAvc2VhcmNoL21vdmllJnF1ZXJ5PSR7cXVlcnl9YCk7XG4gICAgaWYgKHJlcy5lcnJvcikge1xuICAgICAgc2V0RXJyb3IocmVzLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgY29uc29sZS5sb2coKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRNb3ZpZXMocmVzLmRhdGE/LnJlc3VsdHMgfHwgW10pO1xuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWRNb3ZpZXMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc01vZGFsICYmIDxNb2RhbCAvPn1cbiAgICAgIDxCb3g+XG4gICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgY29tcG9uZW50PVwic3Ryb25nXCJcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgZm9udFNpemU6IFwiMS4ycmVtXCIsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjNyZW1cIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMC41cmVtIDBcIixcbiAgICAgICAgICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXG4gICAgICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiLjg1cmVtXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIE15IE1vdmllIExpc3RcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICB7cXVlcnkgPyAoXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBTZWFyY2hpbmcgZm9yOiA8c3Ryb25nPntxdWVyeX08L3N0cm9uZz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHA+Tm8gc2VhcmNoIHF1ZXJ5IHByb3ZpZGVkLjwvcD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZTtcbiJdLCJuYW1lcyI6WyJNb2RhbCIsIk1vZGFsQ29udGV4dCIsImdldE1vdmllIiwiQm94IiwiVHlwb2dyYXBoeSIsInVzZVNlYXJjaFBhcmFtcyIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJTZWFyY2hQYWdlIiwic2VhcmNoUGFyYW1zIiwicXVlcnkiLCJnZXQiLCJpc01vZGFsIiwibW92aWVzIiwic2V0TW92aWVzIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkTW92aWVzIiwicmVzIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwicmVzdWx0cyIsImNvbXBvbmVudCIsInN4IiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwicGFkZGluZyIsIndpZHRoIiwiekluZGV4IiwibWFyZ2luQm90dG9tIiwicCIsInN0cm9uZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/search/page.tsx\n"));

/***/ })

});