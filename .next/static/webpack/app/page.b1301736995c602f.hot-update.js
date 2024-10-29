"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/MovieSections/MovieSections.tsx":
/*!********************************************************!*\
  !*** ./src/components/MovieSections/MovieSections.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MovieSections: function() { return /* binding */ MovieSections; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,IconButton,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,IconButton,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,IconButton,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _utils_apiService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/apiService */ \"(app-pages-browser)/./src/utils/apiService.ts\");\n/* harmony import */ var _components_Cards_Cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Cards/Cards */ \"(app-pages-browser)/./src/components/Cards/Cards.tsx\");\n/* harmony import */ var _barrel_optimize_names_FaAngleRight_react_icons_fa6__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=FaAngleRight!=!react-icons/fa6 */ \"(app-pages-browser)/./node_modules/react-icons/fa6/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MovieSections = (param)=>{\n    let { heading, endpoint } = param;\n    _s();\n    const [media, setMedia] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const fetchMovies = async ()=>{\n        const res = await (0,_utils_apiService__WEBPACK_IMPORTED_MODULE_2__.getMovie)(\"\".concat(endpoint));\n        if (res.error) {\n            setError(res.error.message);\n        } else {\n            var _res_data;\n            setMedia(((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.results) || []);\n        }\n        setLoading(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (media.length === 0) {\n            fetchMovies();\n        }\n    }, [\n        media.length\n    ]);\n    const scrollRight = (event)=>{\n        var _event_currentTarget_parentNode;\n        const scrollContainer = (_event_currentTarget_parentNode = event.currentTarget.parentNode) === null || _event_currentTarget_parentNode === void 0 ? void 0 : _event_currentTarget_parentNode.querySelector(\".scroll-container\");\n        if (scrollContainer) {\n            scrollContainer.scrollBy({\n                left: 300,\n                behavior: \"smooth\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            textTransform: \"capitalize\",\n            marginTop: {\n                xs: 0,\n                sm: \"-9rem\"\n            }\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                component: \"strong\",\n                sx: {\n                    fontSize: \"1.2rem\",\n                    marginLeft: \"3rem\",\n                    padding: \"0.5rem 0\",\n                    width: \"fit-content\",\n                    zIndex: 1,\n                    marginBottom: \".85rem\"\n                },\n                children: heading\n            }, void 0, false, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, undefined) : error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: error\n            }, void 0, false, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                sx: {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    position: \"relative\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        sx: {\n                            display: \"flex\",\n                            flexDirection: \"row\",\n                            padding: {\n                                xs: \"3.2rem 6rem 2.2rem\",\n                                sm: \"3.2rem 6rem 12.5rem\"\n                            },\n                            overflowX: \"auto\",\n                            marginTop: \"-3rem\",\n                            marginLeft: \"-3rem\",\n                            \"&::-webkit-scrollbar\": {\n                                display: \"none\"\n                            }\n                        },\n                        children: media === null || media === void 0 ? void 0 : media.filter((item)=>item.poster_path !== null && item.backdrop_path !== null).map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cards_Cards__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                item: item\n                            }, index, false, {\n                                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        onClick: scrollRight,\n                        sx: {\n                            color: \"white\",\n                            position: \"absolute\",\n                            right: \"0\",\n                            top: \"0\",\n                            zIndex\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleRight_react_icons_fa6__WEBPACK_IMPORTED_MODULE_7__.FaAngleRight, {}, void 0, false, {\n                            fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MovieSections, \"Jv97ucw0sHPQafz5DVkHNdMPjdA=\");\n_c = MovieSections;\nvar _c;\n$RefreshReg$(_c, \"MovieSections\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01vdmllU2VjdGlvbnMvTW92aWVTZWN0aW9ucy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1M7QUFDZDtBQUVEO0FBQ0U7QUFFeEMsTUFBTVMsZ0JBQTZDO1FBQUMsRUFDekRDLE9BQU8sRUFDUEMsUUFBUSxFQUNUOztJQUNDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBVSxFQUFFO0lBQzlDLE1BQU0sQ0FBQ1ksU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBVTtJQUNoRCxNQUFNLENBQUNjLE9BQU9DLFNBQVMsR0FBR2YsK0NBQVFBLENBQWdCO0lBRWxELE1BQU1nQixjQUFjO1FBQ2xCLE1BQU1DLE1BQU0sTUFBTWIsMkRBQVFBLENBQUMsR0FBWSxPQUFUSztRQUM5QixJQUFJUSxJQUFJSCxLQUFLLEVBQUU7WUFDYkMsU0FBU0UsSUFBSUgsS0FBSyxDQUFDSSxPQUFPO1FBQzVCLE9BQU87Z0JBQ0lEO1lBQVROLFNBQVNNLEVBQUFBLFlBQUFBLElBQUlFLElBQUksY0FBUkYsZ0NBQUFBLFVBQVVHLE9BQU8sS0FBSSxFQUFFO1FBQ2xDO1FBQ0FQLFdBQVc7SUFDYjtJQUVBZCxnREFBU0EsQ0FBQztRQUNSLElBQUlXLE1BQU1XLE1BQU0sS0FBSyxHQUFHO1lBQ3RCTDtRQUNGO0lBQ0YsR0FBRztRQUFDTixNQUFNVyxNQUFNO0tBQUM7SUFFakIsTUFBTUMsY0FBYyxDQUFDQztZQUVqQkE7UUFERixNQUFNQyxtQkFDSkQsa0NBQUFBLE1BQU1FLGFBQWEsQ0FBQ0MsVUFBVSxjQUE5Qkgsc0RBQUFBLGdDQUFnQ0ksYUFBYSxDQUFDO1FBQ2hELElBQUlILGlCQUFpQjtZQUNuQkEsZ0JBQWdCSSxRQUFRLENBQUM7Z0JBQUVDLE1BQU07Z0JBQUtDLFVBQVU7WUFBUztRQUMzRDtJQUNGO0lBRUEscUJBQ0UsOERBQUM3QixxR0FBR0E7UUFDRjhCLElBQUk7WUFDRkMsU0FBUztZQUNUQyxlQUFlO1lBQ2ZDLGVBQWU7WUFDZkMsV0FBVztnQkFBRUMsSUFBSTtnQkFBR0MsSUFBSTtZQUFRO1FBQ2xDOzswQkFFQSw4REFBQ2xDLHFHQUFVQTtnQkFDVG1DLFdBQVU7Z0JBQ1ZQLElBQUk7b0JBQ0ZRLFVBQVU7b0JBQ1ZDLFlBQVk7b0JBQ1pDLFNBQVM7b0JBQ1RDLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JDLGNBQWM7Z0JBQ2hCOzBCQUVDcEM7Ozs7OztZQUVGSSx3QkFDQyw4REFBQ2lDOzBCQUFJOzs7Ozs0QkFDSC9CLHNCQUNGLDhEQUFDK0I7MEJBQUsvQjs7Ozs7MENBRU4sOERBQUNiLHFHQUFHQTtnQkFDRjhCLElBQUk7b0JBQUVDLFNBQVM7b0JBQVFjLFlBQVk7b0JBQVVDLFVBQVU7Z0JBQVc7O2tDQUVsRSw4REFBQzlDLHFHQUFHQTt3QkFDRjhCLElBQUk7NEJBQ0ZDLFNBQVM7NEJBQ1RDLGVBQWU7NEJBQ2ZRLFNBQVM7Z0NBQUVMLElBQUk7Z0NBQXNCQyxJQUFJOzRCQUFzQjs0QkFDL0RXLFdBQVc7NEJBQ1hiLFdBQVc7NEJBQ1hLLFlBQVk7NEJBQ1osd0JBQXdCO2dDQUN0QlIsU0FBUzs0QkFDWDt3QkFDRjtrQ0FFQ3RCLGtCQUFBQSw0QkFBQUEsTUFDR3VDLE1BQU0sQ0FDTixDQUFDQyxPQUNDQSxLQUFLQyxXQUFXLEtBQUssUUFBUUQsS0FBS0UsYUFBYSxLQUFLLE1BRXZEQyxHQUFHLENBQUMsQ0FBQ0gsTUFBTUksc0JBQ1YsOERBQUNqRCwrREFBS0E7Z0NBQWE2QyxNQUFNQTsrQkFBYkk7Ozs7Ozs7Ozs7a0NBR2xCLDhEQUFDcEQscUdBQVVBO3dCQUNUcUQsU0FBU2pDO3dCQUNUUyxJQUFJOzRCQUFFeUIsT0FBTzs0QkFBU1QsVUFBVTs0QkFBWVUsT0FBTTs0QkFBS0MsS0FBSTs0QkFBS2Y7d0JBQU87a0NBRXZFLDRFQUFDckMsNkZBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpCLEVBQUU7R0E5RldDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01vdmllU2VjdGlvbnMvTW92aWVTZWN0aW9ucy50c3g/NzFlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94LCBJY29uQnV0dG9uLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IGdldE1vdmllIH0gZnJvbSBcIkAvdXRpbHMvYXBpU2VydmljZVwiO1xuaW1wb3J0IHsgTWVkaWEsIE1vdmllU2VjdGlvblByb3BzIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCBDYXJkcyBmcm9tIFwiQC9jb21wb25lbnRzL0NhcmRzL0NhcmRzXCI7XG5pbXBvcnQgeyBGYUFuZ2xlUmlnaHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmE2XCI7XG5cbmV4cG9ydCBjb25zdCBNb3ZpZVNlY3Rpb25zOiBSZWFjdC5GQzxNb3ZpZVNlY3Rpb25Qcm9wcz4gPSAoe1xuICBoZWFkaW5nLFxuICBlbmRwb2ludCxcbn0pID0+IHtcbiAgY29uc3QgW21lZGlhLCBzZXRNZWRpYV0gPSB1c2VTdGF0ZTxNZWRpYVtdPihbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGZldGNoTW92aWVzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldE1vdmllKGAke2VuZHBvaW50fWApO1xuICAgIGlmIChyZXMuZXJyb3IpIHtcbiAgICAgIHNldEVycm9yKHJlcy5lcnJvci5tZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TWVkaWEocmVzLmRhdGE/LnJlc3VsdHMgfHwgW10pO1xuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtZWRpYS5sZW5ndGggPT09IDApIHtcbiAgICAgIGZldGNoTW92aWVzKCk7XG4gICAgfVxuICB9LCBbbWVkaWEubGVuZ3RoXSk7XG5cbiAgY29uc3Qgc2Nyb2xsUmlnaHQgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyID1cbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZT8ucXVlcnlTZWxlY3RvcihcIi5zY3JvbGwtY29udGFpbmVyXCIpO1xuICAgIGlmIChzY3JvbGxDb250YWluZXIpIHtcbiAgICAgIHNjcm9sbENvbnRhaW5lci5zY3JvbGxCeSh7IGxlZnQ6IDMwMCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgc3g9e3tcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxuICAgICAgICBtYXJnaW5Ub3A6IHsgeHM6IDAsIHNtOiBcIi05cmVtXCIgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgY29tcG9uZW50PVwic3Ryb25nXCJcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBmb250U2l6ZTogXCIxLjJyZW1cIixcbiAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjNyZW1cIixcbiAgICAgICAgICBwYWRkaW5nOiBcIjAuNXJlbSAwXCIsXG4gICAgICAgICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcbiAgICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiBcIi44NXJlbVwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7aGVhZGluZ31cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICkgOiBlcnJvciA/IChcbiAgICAgICAgPGRpdj57ZXJyb3J9PC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgICAgICBwYWRkaW5nOiB7IHhzOiBcIjMuMnJlbSA2cmVtIDIuMnJlbVwiLCBzbTogXCIzLjJyZW0gNnJlbSAxMi41cmVtXCIgfSxcbiAgICAgICAgICAgICAgb3ZlcmZsb3dYOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIi0zcmVtXCIsXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiLTNyZW1cIixcbiAgICAgICAgICAgICAgXCImOjotd2Via2l0LXNjcm9sbGJhclwiOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHttZWRpYVxuICAgICAgICAgICAgICA/LmZpbHRlcihcbiAgICAgICAgICAgICAgICAoaXRlbSkgPT5cbiAgICAgICAgICAgICAgICAgIGl0ZW0ucG9zdGVyX3BhdGggIT09IG51bGwgJiYgaXRlbS5iYWNrZHJvcF9wYXRoICE9PSBudWxsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8Q2FyZHMga2V5PXtpbmRleH0gaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e3Njcm9sbFJpZ2h0fVxuICAgICAgICAgICAgc3g9e3sgY29sb3I6IFwid2hpdGVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgcmlnaHQ6XCIwXCIsIHRvcDpcIjBcIiwgekluZGV4IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZhQW5nbGVSaWdodCAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQm94IiwiSWNvbkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJnZXRNb3ZpZSIsIkNhcmRzIiwiRmFBbmdsZVJpZ2h0IiwiTW92aWVTZWN0aW9ucyIsImhlYWRpbmciLCJlbmRwb2ludCIsIm1lZGlhIiwic2V0TWVkaWEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaE1vdmllcyIsInJlcyIsIm1lc3NhZ2UiLCJkYXRhIiwicmVzdWx0cyIsImxlbmd0aCIsInNjcm9sbFJpZ2h0IiwiZXZlbnQiLCJzY3JvbGxDb250YWluZXIiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50Tm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxCeSIsImxlZnQiLCJiZWhhdmlvciIsInN4IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ0ZXh0VHJhbnNmb3JtIiwibWFyZ2luVG9wIiwieHMiLCJzbSIsImNvbXBvbmVudCIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsInBhZGRpbmciLCJ3aWR0aCIsInpJbmRleCIsIm1hcmdpbkJvdHRvbSIsImRpdiIsImFsaWduSXRlbXMiLCJwb3NpdGlvbiIsIm92ZXJmbG93WCIsImZpbHRlciIsIml0ZW0iLCJwb3N0ZXJfcGF0aCIsImJhY2tkcm9wX3BhdGgiLCJtYXAiLCJpbmRleCIsIm9uQ2xpY2siLCJjb2xvciIsInJpZ2h0IiwidG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/MovieSections/MovieSections.tsx\n"));

/***/ })

});