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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Modal/Modal */ \"(app-pages-browser)/./src/components/Modal/Modal.tsx\");\n/* harmony import */ var _context_ModalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/ModalContext */ \"(app-pages-browser)/./src/context/ModalContext.tsx\");\n/* harmony import */ var _utils_apiService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/apiService */ \"(app-pages-browser)/./src/utils/apiService.ts\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst SearchPage = ()=>{\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useSearchParams)();\n    const query = searchParams.get(\"query\");\n    const { isModal } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_context_ModalContext__WEBPACK_IMPORTED_MODULE_2__.ModalContext);\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    const loadMovies = async ()=>{\n        if (query) {\n            setLoading(true);\n            const res = await (0,_utils_apiService__WEBPACK_IMPORTED_MODULE_3__.getMovie)(\"/search/movie?query=\".concat(encodeURIComponent(query)));\n            if (res.error) {\n                setError(res.error.message);\n                console.log(\"error from search page: \", res.error.message);\n            } else {\n                var _res_data;\n                setMovies(((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.results) || []);\n            }\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        loadMovies();\n    }, [\n        query\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            isModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 19\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        component: \"strong\",\n                        sx: {\n                            fontSize: \"1.2rem\",\n                            marginLeft: \"3rem\",\n                            padding: \"0.5rem 0\",\n                            width: \"fit-content\",\n                            zIndex: 1,\n                            marginBottom: \".85rem\"\n                        },\n                        children: \"My Movie List\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Error: \",\n                                error\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 15\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: movies.length > 0 ? movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: movie.title\n                                }, movie.id, false, {\n                                    fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 21\n                                }, undefined) // Display your movie title here\n                            ) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"No results found.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 19\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, undefined),\n                    query ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Searching for: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: query\n                            }, void 0, false, {\n                                fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 28\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No search query provided.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/app/search/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(SearchPage, \"88pVnuvirESyWLFf0zfraoIUvak=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useSearchParams\n    ];\n});\n_c = SearchPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchPage);\nvar _c;\n$RefreshReg$(_c, \"SearchPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2VhcmNoL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUU2QztBQUNTO0FBRVI7QUFDRTtBQUNFO0FBQ007QUFFeEQsTUFBTVMsYUFBYTs7SUFDakIsTUFBTUMsZUFBZUwsZ0VBQWVBO0lBQ3BDLE1BQU1NLFFBQVFELGFBQWFFLEdBQUcsQ0FBQztJQUMvQixNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHUCxpREFBVUEsQ0FBQ0wsK0RBQVlBO0lBQzNDLE1BQU0sQ0FBQ2EsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBVSxFQUFFO0lBQ2hELE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBVTtJQUNoRCxNQUFNLENBQUNVLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQWdCO0lBRWxELE1BQU1ZLGFBQWE7UUFDakIsSUFBSVQsT0FBTztZQUNUTSxXQUFXO1lBQ1gsTUFBTUksTUFBTSxNQUFNbkIsMkRBQVFBLENBQ3hCLHVCQUFpRCxPQUExQm9CLG1CQUFtQlg7WUFFNUMsSUFBSVUsSUFBSUgsS0FBSyxFQUFFO2dCQUNiQyxTQUFTRSxJQUFJSCxLQUFLLENBQUNLLE9BQU87Z0JBQzFCQyxRQUFRQyxHQUFHLENBQUMsNEJBQTRCSixJQUFJSCxLQUFLLENBQUNLLE9BQU87WUFDM0QsT0FBTztvQkFDS0Y7Z0JBQVZOLFVBQVVNLEVBQUFBLFlBQUFBLElBQUlLLElBQUksY0FBUkwsZ0NBQUFBLFVBQVVNLE9BQU8sS0FBSSxFQUFFO1lBQ25DO1lBQ0FWLFdBQVc7UUFDYjtJQUNGO0lBRUFWLGdEQUFTQSxDQUFDO1FBQ1JhO0lBQ0YsR0FBRztRQUFDVDtLQUFNO0lBRVYscUJBQ0U7O1lBQ0dFLHlCQUFXLDhEQUFDYiwrREFBS0E7Ozs7OzBCQUNsQiw4REFBQ0csMEZBQUdBOztrQ0FDRiw4REFBQ0MsMEZBQVVBO3dCQUNUd0IsV0FBVTt3QkFDVkMsSUFBSTs0QkFDRkMsVUFBVTs0QkFDVkMsWUFBWTs0QkFDWkMsU0FBUzs0QkFDVEMsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUkMsY0FBYzt3QkFDaEI7a0NBQ0Q7Ozs7OztvQkFHQW5CLHdCQUNDLDhEQUFDb0I7a0NBQUU7Ozs7O2tEQUVILDhEQUFDQztrQ0FDRW5CLHNCQUNDLDhEQUFDa0I7O2dDQUFFO2dDQUFRbEI7Ozs7OztzREFFWCw4REFBQ21CO3NDQUNFdkIsT0FBT3dCLE1BQU0sR0FBRyxJQUNmeEIsT0FBT3lCLEdBQUcsQ0FBQyxDQUFDQyxzQkFDViw4REFBQ0g7OENBQW9CRyxNQUFNQyxLQUFLO21DQUF0QkQsTUFBTUUsRUFBRTs7Ozs4Q0FBc0IsZ0NBQWdDOzhDQUcxRSw4REFBQ047MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBTVp6QixzQkFDQyw4REFBQ3lCOzs0QkFBRTswQ0FDYyw4REFBQ087MENBQVFoQzs7Ozs7Ozs7Ozs7a0RBRzFCLDhEQUFDeUI7a0NBQUU7Ozs7Ozs7Ozs7Ozs7O0FBS2I7R0ExRU0zQjs7UUFDaUJKLDREQUFlQTs7O0tBRGhDSTtBQTRFTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3NlYXJjaC9wYWdlLnRzeD81M2NiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSBcIkAvY29tcG9uZW50cy9Nb2RhbC9Nb2RhbFwiO1xuaW1wb3J0IHsgTW9kYWxDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9Nb2RhbENvbnRleHRcIjtcbmltcG9ydCB7IE1lZGlhIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCB7IGdldE1vdmllIH0gZnJvbSBcIkAvdXRpbHMvYXBpU2VydmljZVwiO1xuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU2VhcmNoUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zLmdldChcInF1ZXJ5XCIpO1xuICBjb25zdCB7IGlzTW9kYWwgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcbiAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlPE1lZGlhW10+KFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgbG9hZE1vdmllcyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRNb3ZpZShcbiAgICAgICAgYC9zZWFyY2gvbW92aWU/cXVlcnk9JHtlbmNvZGVVUklDb21wb25lbnQocXVlcnkpfWBcbiAgICAgICk7XG4gICAgICBpZiAocmVzLmVycm9yKSB7XG4gICAgICAgIHNldEVycm9yKHJlcy5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBmcm9tIHNlYXJjaCBwYWdlOiBcIiwgcmVzLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0TW92aWVzKHJlcy5kYXRhPy5yZXN1bHRzIHx8IFtdKTtcbiAgICAgIH1cbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWRNb3ZpZXMoKTtcbiAgfSwgW3F1ZXJ5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzTW9kYWwgJiYgPE1vZGFsIC8+fVxuICAgICAgPEJveD5cbiAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICBjb21wb25lbnQ9XCJzdHJvbmdcIlxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxLjJyZW1cIixcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiM3JlbVwiLFxuICAgICAgICAgICAgcGFkZGluZzogXCIwLjVyZW0gMFwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcbiAgICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIuODVyZW1cIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgTXkgTW92aWUgTGlzdFxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtlcnJvciA/IChcbiAgICAgICAgICAgICAgPHA+RXJyb3I6IHtlcnJvcn08L3A+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHttb3ZpZXMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgICAgIG1vdmllcy5tYXAoKG1vdmllKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXttb3ZpZS5pZH0+e21vdmllLnRpdGxlfTwvZGl2PiAvLyBEaXNwbGF5IHlvdXIgbW92aWUgdGl0bGUgaGVyZVxuICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPHA+Tm8gcmVzdWx0cyBmb3VuZC48L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7cXVlcnkgPyAoXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBTZWFyY2hpbmcgZm9yOiA8c3Ryb25nPntxdWVyeX08L3N0cm9uZz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHA+Tm8gc2VhcmNoIHF1ZXJ5IHByb3ZpZGVkLjwvcD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZTtcbiJdLCJuYW1lcyI6WyJNb2RhbCIsIk1vZGFsQ29udGV4dCIsImdldE1vdmllIiwiQm94IiwiVHlwb2dyYXBoeSIsInVzZVNlYXJjaFBhcmFtcyIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNlYXJjaFBhZ2UiLCJzZWFyY2hQYXJhbXMiLCJxdWVyeSIsImdldCIsImlzTW9kYWwiLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkTW92aWVzIiwicmVzIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwicmVzdWx0cyIsImNvbXBvbmVudCIsInN4IiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwicGFkZGluZyIsIndpZHRoIiwiekluZGV4IiwibWFyZ2luQm90dG9tIiwicCIsImRpdiIsImxlbmd0aCIsIm1hcCIsIm1vdmllIiwidGl0bGUiLCJpZCIsInN0cm9uZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/search/page.tsx\n"));

/***/ })

});