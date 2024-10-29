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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Modal/Modal */ \"(app-pages-browser)/./src/components/Modal/Modal.tsx\");\n/* harmony import */ var _context_ModalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/ModalContext */ \"(app-pages-browser)/./src/context/ModalContext.tsx\");\n/* harmony import */ var _utils_apiService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/apiService */ \"(app-pages-browser)/./src/utils/apiService.ts\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst SearchPage = ()=>{\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useSearchParams)();\n    const query = searchParams.get(\"query\");\n    const { isModal } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_context_ModalContext__WEBPACK_IMPORTED_MODULE_2__.ModalContext);\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    const loadMovies = async ()=>{\n        const res = await (0,_utils_apiService__WEBPACK_IMPORTED_MODULE_3__.getMovie)(\"/search/movie&query=\".concat(query));\n        if (res.error) {\n            setError(res.error.message);\n            console.log(\"error from search page: \", error);\n        } else {\n            var _res_data;\n            setMovies(((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.results) || []);\n        }\n        setLoading(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        loadMovies();\n    }, []);\n    console.log(object);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            isModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 19\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        component: \"strong\",\n                        sx: {\n                            fontSize: \"1.2rem\",\n                            marginLeft: \"3rem\",\n                            padding: \"0.5rem 0\",\n                            width: \"fit-content\",\n                            zIndex: 1,\n                            marginBottom: \".85rem\"\n                        },\n                        children: \"My Movie List\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    query ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Searching for: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: query\n                            }, void 0, false, {\n                                fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 28\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No search query provided.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(SearchPage, \"mQJmsTwN6DH8p7NwFr7Hhy2YzBw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useSearchParams\n    ];\n});\n_c = SearchPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchPage);\nvar _c;\n$RefreshReg$(_c, \"SearchPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2VhcmNoL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUU2QztBQUNTO0FBQ1I7QUFDRTtBQUNFO0FBQ007QUFFeEQsTUFBTVMsYUFBYTs7SUFDakIsTUFBTUMsZUFBZUwsZ0VBQWVBO0lBQ3BDLE1BQU1NLFFBQVFELGFBQWFFLEdBQUcsQ0FBQztJQUMvQixNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHUCxpREFBVUEsQ0FBQ0wsK0RBQVlBO0lBQzNDLE1BQU0sQ0FBQ2EsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBVSxFQUFFO0lBQ2hELE1BQU0sR0FBR1EsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBVTtJQUN6QyxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQWdCO0lBRWxELE1BQU1XLGFBQWE7UUFDakIsTUFBTUMsTUFBTSxNQUFNbEIsMkRBQVFBLENBQUMsdUJBQTZCLE9BQU5TO1FBQ2xELElBQUlTLElBQUlILEtBQUssRUFBRTtZQUNiQyxTQUFTRSxJQUFJSCxLQUFLLENBQUNJLE9BQU87WUFDMUJDLFFBQVFDLEdBQUcsQ0FBQyw0QkFBNEJOO1FBQzFDLE9BQU87Z0JBQ0tHO1lBQVZMLFVBQVVLLEVBQUFBLFlBQUFBLElBQUlJLElBQUksY0FBUkosZ0NBQUFBLFVBQVVLLE9BQU8sS0FBSSxFQUFFO1FBQ25DO1FBQ0FULFdBQVc7SUFDYjtJQUVBVCxnREFBU0EsQ0FBQztRQUNSWTtJQUNGLEdBQUcsRUFBRTtJQUVMRyxRQUFRQyxHQUFHLENBQUNHO0lBRVoscUJBQ0U7O1lBQ0diLHlCQUFXLDhEQUFDYiwrREFBS0E7Ozs7OzBCQUNsQiw4REFBQ0csMEZBQUdBOztrQ0FDRiw4REFBQ0MsMEZBQVVBO3dCQUNUdUIsV0FBVTt3QkFDVkMsSUFBSTs0QkFDRkMsVUFBVTs0QkFDVkMsWUFBWTs0QkFDWkMsU0FBUzs0QkFDVEMsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUkMsY0FBYzt3QkFDaEI7a0NBQ0Q7Ozs7OztvQkFHQXZCLHNCQUNDLDhEQUFDd0I7OzRCQUFFOzBDQUNjLDhEQUFDQzswQ0FBUXpCOzs7Ozs7Ozs7OztrREFHMUIsOERBQUN3QjtrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7QUFLYjtHQXBETTFCOztRQUNpQkosNERBQWVBOzs7S0FEaENJO0FBc0ROLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc2VhcmNoL3BhZ2UudHN4PzUzY2IiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBNb2RhbCBmcm9tIFwiQC9jb21wb25lbnRzL01vZGFsL01vZGFsXCI7XG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0L01vZGFsQ29udGV4dFwiO1xuaW1wb3J0IHsgZ2V0TW92aWUgfSBmcm9tIFwiQC91dGlscy9hcGlTZXJ2aWNlXCI7XG5pbXBvcnQgeyBCb3gsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTZWFyY2hQYWdlID0gKCkgPT4ge1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXMuZ2V0KFwicXVlcnlcIik7XG4gIGNvbnN0IHsgaXNNb2RhbCB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGU8TWVkaWFbXT4oW10pO1xuICBjb25zdCBbLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGxvYWRNb3ZpZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0TW92aWUoYC9zZWFyY2gvbW92aWUmcXVlcnk9JHtxdWVyeX1gKTtcbiAgICBpZiAocmVzLmVycm9yKSB7XG4gICAgICBzZXRFcnJvcihyZXMuZXJyb3IubWVzc2FnZSk7XG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yIGZyb20gc2VhcmNoIHBhZ2U6IFwiLCBlcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldE1vdmllcyhyZXMuZGF0YT8ucmVzdWx0cyB8fCBbXSk7XG4gICAgfVxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZE1vdmllcygpO1xuICB9LCBbXSk7XG5cbiAgY29uc29sZS5sb2cob2JqZWN0KVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc01vZGFsICYmIDxNb2RhbCAvPn1cbiAgICAgIDxCb3g+XG4gICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgY29tcG9uZW50PVwic3Ryb25nXCJcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgZm9udFNpemU6IFwiMS4ycmVtXCIsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjNyZW1cIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMC41cmVtIDBcIixcbiAgICAgICAgICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXG4gICAgICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiLjg1cmVtXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIE15IE1vdmllIExpc3RcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICB7cXVlcnkgPyAoXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBTZWFyY2hpbmcgZm9yOiA8c3Ryb25nPntxdWVyeX08L3N0cm9uZz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHA+Tm8gc2VhcmNoIHF1ZXJ5IHByb3ZpZGVkLjwvcD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZTtcbiJdLCJuYW1lcyI6WyJNb2RhbCIsIk1vZGFsQ29udGV4dCIsImdldE1vdmllIiwiQm94IiwiVHlwb2dyYXBoeSIsInVzZVNlYXJjaFBhcmFtcyIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNlYXJjaFBhZ2UiLCJzZWFyY2hQYXJhbXMiLCJxdWVyeSIsImdldCIsImlzTW9kYWwiLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImxvYWRNb3ZpZXMiLCJyZXMiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJyZXN1bHRzIiwib2JqZWN0IiwiY29tcG9uZW50Iiwic3giLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nIiwid2lkdGgiLCJ6SW5kZXgiLCJtYXJnaW5Cb3R0b20iLCJwIiwic3Ryb25nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/search/page.tsx\n"));

/***/ })

});