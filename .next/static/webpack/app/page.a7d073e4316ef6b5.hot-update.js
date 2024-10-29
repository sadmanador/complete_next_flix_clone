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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MovieSections: function() { return /* binding */ MovieSections; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,IconButton,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,IconButton,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,IconButton,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _utils_apiService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/apiService */ \"(app-pages-browser)/./src/utils/apiService.ts\");\n/* harmony import */ var _components_Cards_Cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Cards/Cards */ \"(app-pages-browser)/./src/components/Cards/Cards.tsx\");\n/* harmony import */ var _barrel_optimize_names_FaAngleRight_react_icons_fa6__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=FaAngleRight!=!react-icons/fa6 */ \"(app-pages-browser)/./node_modules/react-icons/fa6/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MovieSections = (param)=>{\n    let { heading, endpoint } = param;\n    _s();\n    const [media, setMedia] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const fetchMovies = async ()=>{\n        const res = await (0,_utils_apiService__WEBPACK_IMPORTED_MODULE_2__.getMovie)(\"\".concat(endpoint));\n        if (res.error) {\n            setError(res.error.message);\n        } else {\n            var _res_data;\n            setMedia(((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.results) || []);\n        }\n        setLoading(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (media.length === 0) {\n            fetchMovies();\n        }\n    }, [\n        media.length\n    ]);\n    const scrollRight = (event)=>{\n        var _event_currentTarget_parentNode;\n        const scrollContainer = (_event_currentTarget_parentNode = event.currentTarget.parentNode) === null || _event_currentTarget_parentNode === void 0 ? void 0 : _event_currentTarget_parentNode.querySelector(\".scroll-container\");\n        if (scrollContainer) {\n            scrollContainer.scrollBy({\n                left: 300,\n                behavior: \"smooth\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            textTransform: \"capitalize\",\n            marginTop: {\n                xs: 0,\n                sm: \"-9rem\"\n            }\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                component: \"strong\",\n                sx: {\n                    fontSize: \"1.2rem\",\n                    marginLeft: \"3rem\",\n                    padding: \"0.5rem 0\",\n                    width: \"fit-content\",\n                    zIndex: 1,\n                    marginBottom: \".85rem\"\n                },\n                children: heading\n            }, void 0, false, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, undefined) : error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: error\n            }, void 0, false, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                sx: {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    position: \"relative\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        sx: {\n                            display: \"flex\",\n                            flexDirection: \"row\",\n                            padding: {\n                                xs: \"3.2rem 6rem 2.2rem\",\n                                sm: \"3.2rem 6rem 12.5rem\"\n                            },\n                            overflowX: \"auto\",\n                            marginTop: \"-3rem\",\n                            marginLeft: \"-3rem\",\n                            \"&::-webkit-scrollbar\": {\n                                display: \"none\"\n                            }\n                        },\n                        children: media === null || media === void 0 ? void 0 : media.filter((item)=>item.poster_path !== null && item.backdrop_path !== null).map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cards_Cards__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                item: item\n                            }, index, false, {\n                                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        onClick: scrollRight,\n                        sx: {\n                            color: \"white\",\n                            position: \"absolute\",\n                            right: \"0\",\n                            top: \"20%\",\n                            zIndex: \"100\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleRight_react_icons_fa6__WEBPACK_IMPORTED_MODULE_7__.FaAngleRight, {}, void 0, false, {\n                            fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MovieSections, \"Jv97ucw0sHPQafz5DVkHNdMPjdA=\");\n_c = MovieSections;\nvar _c;\n$RefreshReg$(_c, \"MovieSections\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01vdmllU2VjdGlvbnMvTW92aWVTZWN0aW9ucy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1M7QUFDZDtBQUVEO0FBQ0U7QUFFeEMsTUFBTVMsZ0JBQTZDO1FBQUMsRUFDekRDLE9BQU8sRUFDUEMsUUFBUSxFQUNUOztJQUNDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBVSxFQUFFO0lBQzlDLE1BQU0sQ0FBQ1ksU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBVTtJQUNoRCxNQUFNLENBQUNjLE9BQU9DLFNBQVMsR0FBR2YsK0NBQVFBLENBQWdCO0lBRWxELE1BQU1nQixjQUFjO1FBQ2xCLE1BQU1DLE1BQU0sTUFBTWIsMkRBQVFBLENBQUMsR0FBWSxPQUFUSztRQUM5QixJQUFJUSxJQUFJSCxLQUFLLEVBQUU7WUFDYkMsU0FBU0UsSUFBSUgsS0FBSyxDQUFDSSxPQUFPO1FBQzVCLE9BQU87Z0JBQ0lEO1lBQVROLFNBQVNNLEVBQUFBLFlBQUFBLElBQUlFLElBQUksY0FBUkYsZ0NBQUFBLFVBQVVHLE9BQU8sS0FBSSxFQUFFO1FBQ2xDO1FBQ0FQLFdBQVc7SUFDYjtJQUVBZCxnREFBU0EsQ0FBQztRQUNSLElBQUlXLE1BQU1XLE1BQU0sS0FBSyxHQUFHO1lBQ3RCTDtRQUNGO0lBQ0YsR0FBRztRQUFDTixNQUFNVyxNQUFNO0tBQUM7SUFFakIsTUFBTUMsY0FBYyxDQUFDQztZQUVqQkE7UUFERixNQUFNQyxtQkFDSkQsa0NBQUFBLE1BQU1FLGFBQWEsQ0FBQ0MsVUFBVSxjQUE5Qkgsc0RBQUFBLGdDQUFnQ0ksYUFBYSxDQUFDO1FBQ2hELElBQUlILGlCQUFpQjtZQUNuQkEsZ0JBQWdCSSxRQUFRLENBQUM7Z0JBQUVDLE1BQU07Z0JBQUtDLFVBQVU7WUFBUztRQUMzRDtJQUNGO0lBRUEscUJBQ0UsOERBQUM3QixxR0FBR0E7UUFDRjhCLElBQUk7WUFDRkMsU0FBUztZQUNUQyxlQUFlO1lBQ2ZDLGVBQWU7WUFDZkMsV0FBVztnQkFBRUMsSUFBSTtnQkFBR0MsSUFBSTtZQUFRO1FBQ2xDOzswQkFFQSw4REFBQ2xDLHFHQUFVQTtnQkFDVG1DLFdBQVU7Z0JBQ1ZQLElBQUk7b0JBQ0ZRLFVBQVU7b0JBQ1ZDLFlBQVk7b0JBQ1pDLFNBQVM7b0JBQ1RDLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JDLGNBQWM7Z0JBQ2hCOzBCQUVDcEM7Ozs7OztZQUVGSSx3QkFDQyw4REFBQ2lDOzBCQUFJOzs7Ozs0QkFDSC9CLHNCQUNGLDhEQUFDK0I7MEJBQUsvQjs7Ozs7MENBRU4sOERBQUNiLHFHQUFHQTtnQkFDRjhCLElBQUk7b0JBQUVDLFNBQVM7b0JBQVFjLFlBQVk7b0JBQVVDLFVBQVU7Z0JBQVc7O2tDQUVsRSw4REFBQzlDLHFHQUFHQTt3QkFDRjhCLElBQUk7NEJBQ0ZDLFNBQVM7NEJBQ1RDLGVBQWU7NEJBQ2ZRLFNBQVM7Z0NBQUVMLElBQUk7Z0NBQXNCQyxJQUFJOzRCQUFzQjs0QkFDL0RXLFdBQVc7NEJBQ1hiLFdBQVc7NEJBQ1hLLFlBQVk7NEJBQ1osd0JBQXdCO2dDQUN0QlIsU0FBUzs0QkFDWDt3QkFDRjtrQ0FFQ3RCLGtCQUFBQSw0QkFBQUEsTUFDR3VDLE1BQU0sQ0FDTixDQUFDQyxPQUNDQSxLQUFLQyxXQUFXLEtBQUssUUFBUUQsS0FBS0UsYUFBYSxLQUFLLE1BRXZEQyxHQUFHLENBQUMsQ0FBQ0gsTUFBTUksc0JBQ1YsOERBQUNqRCwrREFBS0E7Z0NBQWE2QyxNQUFNQTsrQkFBYkk7Ozs7Ozs7Ozs7a0NBR2xCLDhEQUFDcEQscUdBQVVBO3dCQUNUcUQsU0FBU2pDO3dCQUNUUyxJQUFJOzRCQUFFeUIsT0FBTzs0QkFBU1QsVUFBVTs0QkFBWVUsT0FBTTs0QkFBS0MsS0FBSTs0QkFBT2YsUUFBTzt3QkFBTTtrQ0FFL0UsNEVBQUNyQyw2RkFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekIsRUFBRTtHQTlGV0M7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWVTZWN0aW9ucy9Nb3ZpZVNlY3Rpb25zLnRzeD83MWVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIEljb25CdXR0b24sIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgZ2V0TW92aWUgfSBmcm9tIFwiQC91dGlscy9hcGlTZXJ2aWNlXCI7XG5pbXBvcnQgeyBNZWRpYSwgTW92aWVTZWN0aW9uUHJvcHMgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IENhcmRzIGZyb20gXCJAL2NvbXBvbmVudHMvQ2FyZHMvQ2FyZHNcIjtcbmltcG9ydCB7IEZhQW5nbGVSaWdodCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYTZcIjtcblxuZXhwb3J0IGNvbnN0IE1vdmllU2VjdGlvbnM6IFJlYWN0LkZDPE1vdmllU2VjdGlvblByb3BzPiA9ICh7XG4gIGhlYWRpbmcsXG4gIGVuZHBvaW50LFxufSkgPT4ge1xuICBjb25zdCBbbWVkaWEsIHNldE1lZGlhXSA9IHVzZVN0YXRlPE1lZGlhW10+KFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgZmV0Y2hNb3ZpZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0TW92aWUoYCR7ZW5kcG9pbnR9YCk7XG4gICAgaWYgKHJlcy5lcnJvcikge1xuICAgICAgc2V0RXJyb3IocmVzLmVycm9yLm1lc3NhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRNZWRpYShyZXMuZGF0YT8ucmVzdWx0cyB8fCBbXSk7XG4gICAgfVxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1lZGlhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZmV0Y2hNb3ZpZXMoKTtcbiAgICB9XG4gIH0sIFttZWRpYS5sZW5ndGhdKTtcblxuICBjb25zdCBzY3JvbGxSaWdodCA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPVxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlPy5xdWVyeVNlbGVjdG9yKFwiLnNjcm9sbC1jb250YWluZXJcIik7XG4gICAgaWYgKHNjcm9sbENvbnRhaW5lcikge1xuICAgICAgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbEJ5KHsgbGVmdDogMzAwLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBzeD17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXG4gICAgICAgIG1hcmdpblRvcDogeyB4czogMCwgc206IFwiLTlyZW1cIiB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8VHlwb2dyYXBoeVxuICAgICAgICBjb21wb25lbnQ9XCJzdHJvbmdcIlxuICAgICAgICBzeD17e1xuICAgICAgICAgIGZvbnRTaXplOiBcIjEuMnJlbVwiLFxuICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiM3JlbVwiLFxuICAgICAgICAgIHBhZGRpbmc6IFwiMC41cmVtIDBcIixcbiAgICAgICAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxuICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiLjg1cmVtXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtoZWFkaW5nfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgKSA6IGVycm9yID8gKFxuICAgICAgICA8ZGl2PntlcnJvcn08L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IHsgeHM6IFwiMy4ycmVtIDZyZW0gMi4ycmVtXCIsIHNtOiBcIjMuMnJlbSA2cmVtIDEyLjVyZW1cIiB9LFxuICAgICAgICAgICAgICBvdmVyZmxvd1g6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiLTNyZW1cIixcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCItM3JlbVwiLFxuICAgICAgICAgICAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyXCI6IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge21lZGlhXG4gICAgICAgICAgICAgID8uZmlsdGVyKFxuICAgICAgICAgICAgICAgIChpdGVtKSA9PlxuICAgICAgICAgICAgICAgICAgaXRlbS5wb3N0ZXJfcGF0aCAhPT0gbnVsbCAmJiBpdGVtLmJhY2tkcm9wX3BhdGggIT09IG51bGxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxDYXJkcyBrZXk9e2luZGV4fSBpdGVtPXtpdGVtfSAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17c2Nyb2xsUmlnaHR9XG4gICAgICAgICAgICBzeD17eyBjb2xvcjogXCJ3aGl0ZVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCByaWdodDpcIjBcIiwgdG9wOlwiMjAlXCIsIHpJbmRleDpcIjEwMFwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZhQW5nbGVSaWdodCAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQm94IiwiSWNvbkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJnZXRNb3ZpZSIsIkNhcmRzIiwiRmFBbmdsZVJpZ2h0IiwiTW92aWVTZWN0aW9ucyIsImhlYWRpbmciLCJlbmRwb2ludCIsIm1lZGlhIiwic2V0TWVkaWEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaE1vdmllcyIsInJlcyIsIm1lc3NhZ2UiLCJkYXRhIiwicmVzdWx0cyIsImxlbmd0aCIsInNjcm9sbFJpZ2h0IiwiZXZlbnQiLCJzY3JvbGxDb250YWluZXIiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50Tm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxCeSIsImxlZnQiLCJiZWhhdmlvciIsInN4IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ0ZXh0VHJhbnNmb3JtIiwibWFyZ2luVG9wIiwieHMiLCJzbSIsImNvbXBvbmVudCIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsInBhZGRpbmciLCJ3aWR0aCIsInpJbmRleCIsIm1hcmdpbkJvdHRvbSIsImRpdiIsImFsaWduSXRlbXMiLCJwb3NpdGlvbiIsIm92ZXJmbG93WCIsImZpbHRlciIsIml0ZW0iLCJwb3N0ZXJfcGF0aCIsImJhY2tkcm9wX3BhdGgiLCJtYXAiLCJpbmRleCIsIm9uQ2xpY2siLCJjb2xvciIsInJpZ2h0IiwidG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/MovieSections/MovieSections.tsx\n"));

/***/ })

});