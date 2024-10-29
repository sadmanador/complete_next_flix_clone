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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Modal/Modal */ \"(app-pages-browser)/./src/components/Modal/Modal.tsx\");\n/* harmony import */ var _context_ModalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/ModalContext */ \"(app-pages-browser)/./src/context/ModalContext.tsx\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst SearchPage = ()=>{\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const query = searchParams.get(\"query\");\n    const { isModal } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context_ModalContext__WEBPACK_IMPORTED_MODULE_2__.ModalContext);\n    const [movies, setMovies] = useState([]);\n    const [loading, setLoading] = useState(true);\n    const [error, setError] = useState(null);\n    const loadMovies = async ()=>{\n        const res = await getMovie(\"/movie/top_rated?language=en-US&page=1\");\n        if (res.error) {\n            setError(res.error.message);\n        } else {\n            var _res_data;\n            setMovies(((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.results) || []);\n        }\n        setLoading(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        loadMovies();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            isModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                lineNumber: 33,\n                columnNumber: 19\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        component: \"strong\",\n                        sx: {\n                            fontSize: \"1.2rem\",\n                            marginLeft: \"3rem\",\n                            padding: \"0.5rem 0\",\n                            width: \"fit-content\",\n                            zIndex: 1,\n                            marginBottom: \".85rem\"\n                        },\n                        children: \"My Movie List\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    query ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Searching for: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: query\n                            }, void 0, false, {\n                                fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 28\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No search query provided.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(SearchPage, \"88pVnuvirESyWLFf0zfraoIUvak=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams\n    ];\n});\n_c = SearchPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchPage);\nvar _c;\n$RefreshReg$(_c, \"SearchPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2VhcmNoL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTZDO0FBQ1M7QUFDTjtBQUNFO0FBQ0o7QUFFOUMsTUFBTU8sYUFBYTs7SUFDakIsTUFBTUMsZUFBZUosZ0VBQWVBO0lBQ3BDLE1BQU1LLFFBQVFELGFBQWFFLEdBQUcsQ0FBQztJQUMvQixNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHTixpREFBVUEsQ0FBQ0osK0RBQVlBO0lBQzNDLE1BQU0sQ0FBQ1csUUFBUUMsVUFBVSxHQUFHQyxTQUFrQixFQUFFO0lBQ2hELE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHRixTQUFrQjtJQUNoRCxNQUFNLENBQUNHLE9BQU9DLFNBQVMsR0FBR0osU0FBd0I7SUFFbEQsTUFBTUssYUFBYTtRQUNqQixNQUFNQyxNQUFNLE1BQU1DLFNBQVM7UUFDM0IsSUFBSUQsSUFBSUgsS0FBSyxFQUFFO1lBQ2JDLFNBQVNFLElBQUlILEtBQUssQ0FBQ0ssT0FBTztRQUM1QixPQUFPO2dCQUNLRjtZQUFWUCxVQUFVTyxFQUFBQSxZQUFBQSxJQUFJRyxJQUFJLGNBQVJILGdDQUFBQSxVQUFVSSxPQUFPLEtBQUksRUFBRTtRQUNuQztRQUNBUixXQUFXO0lBQ2I7SUFFQVYsZ0RBQVNBLENBQUM7UUFDUmE7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7WUFDR1IseUJBQVcsOERBQUNYLCtEQUFLQTs7Ozs7MEJBQ2xCLDhEQUFDRSwwRkFBR0E7O2tDQUNGLDhEQUFDQywwRkFBVUE7d0JBQ1RzQixXQUFVO3dCQUNWQyxJQUFJOzRCQUNGQyxVQUFVOzRCQUNWQyxZQUFZOzRCQUNaQyxTQUFTOzRCQUNUQyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSQyxjQUFjO3dCQUNoQjtrQ0FDRDs7Ozs7O29CQUdBdkIsc0JBQ0MsOERBQUN3Qjs7NEJBQUU7MENBQ2MsOERBQUNDOzBDQUFRekI7Ozs7Ozs7Ozs7O2tEQUcxQiw4REFBQ3dCO2tDQUFFOzs7Ozs7Ozs7Ozs7OztBQUtiO0dBakRNMUI7O1FBQ2lCSCw0REFBZUE7OztLQURoQ0c7QUFtRE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zZWFyY2gvcGFnZS50c3g/NTNjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IE1vZGFsIGZyb20gXCJAL2NvbXBvbmVudHMvTW9kYWwvTW9kYWxcIjtcbmltcG9ydCB7IE1vZGFsQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHQvTW9kYWxDb250ZXh0XCI7XG5pbXBvcnQgeyBCb3gsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFNlYXJjaFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJxdWVyeVwiKTtcbiAgY29uc3QgeyBpc01vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XG4gIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZTxNZWRpYVtdPihbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGxvYWRNb3ZpZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0TW92aWUoXCIvbW92aWUvdG9wX3JhdGVkP2xhbmd1YWdlPWVuLVVTJnBhZ2U9MVwiKTtcbiAgICBpZiAocmVzLmVycm9yKSB7XG4gICAgICBzZXRFcnJvcihyZXMuZXJyb3IubWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldE1vdmllcyhyZXMuZGF0YT8ucmVzdWx0cyB8fCBbXSk7XG4gICAgfVxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZE1vdmllcygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzTW9kYWwgJiYgPE1vZGFsIC8+fVxuICAgICAgPEJveD5cbiAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICBjb21wb25lbnQ9XCJzdHJvbmdcIlxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxLjJyZW1cIixcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiM3JlbVwiLFxuICAgICAgICAgICAgcGFkZGluZzogXCIwLjVyZW0gMFwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcbiAgICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIuODVyZW1cIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgTXkgTW92aWUgTGlzdFxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIHtxdWVyeSA/IChcbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFNlYXJjaGluZyBmb3I6IDxzdHJvbmc+e3F1ZXJ5fTwvc3Ryb25nPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8cD5ObyBzZWFyY2ggcXVlcnkgcHJvdmlkZWQuPC9wPlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlO1xuIl0sIm5hbWVzIjpbIk1vZGFsIiwiTW9kYWxDb250ZXh0IiwiQm94IiwiVHlwb2dyYXBoeSIsInVzZVNlYXJjaFBhcmFtcyIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJTZWFyY2hQYWdlIiwic2VhcmNoUGFyYW1zIiwicXVlcnkiLCJnZXQiLCJpc01vZGFsIiwibW92aWVzIiwic2V0TW92aWVzIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkTW92aWVzIiwicmVzIiwiZ2V0TW92aWUiLCJtZXNzYWdlIiwiZGF0YSIsInJlc3VsdHMiLCJjb21wb25lbnQiLCJzeCIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsInBhZGRpbmciLCJ3aWR0aCIsInpJbmRleCIsIm1hcmdpbkJvdHRvbSIsInAiLCJzdHJvbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/search/page.tsx\n"));

/***/ })

});