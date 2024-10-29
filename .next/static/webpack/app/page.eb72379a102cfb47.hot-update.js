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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MovieSections: function() { return /* binding */ MovieSections; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Cards_Cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Cards/Cards */ \"(app-pages-browser)/./src/components/Cards/Cards.tsx\");\n/* harmony import */ var _utils_apiService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/apiService */ \"(app-pages-browser)/./src/utils/apiService.ts\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_FaAngleRight_react_icons_fa6__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=FaAngleRight!=!react-icons/fa6 */ \"(app-pages-browser)/./node_modules/react-icons/fa6/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MovieSections = (param)=>{\n    let { heading, endpoint } = param;\n    _s();\n    const [media, setMedia] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const fetchMovies = async ()=>{\n        const res = await (0,_utils_apiService__WEBPACK_IMPORTED_MODULE_2__.getMovie)(\"\".concat(endpoint));\n        if (res.error) {\n            setError(res.error.message);\n        } else {\n            var _res_data;\n            setMedia(((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.results) || []);\n        }\n        setLoading(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchMovies();\n    }, [\n        endpoint\n    ]);\n    const scrollRight = (event)=>{\n        var _event_currentTarget_parentNode;\n        const scrollContainer = (_event_currentTarget_parentNode = event.currentTarget.parentNode) === null || _event_currentTarget_parentNode === void 0 ? void 0 : _event_currentTarget_parentNode.querySelector(\".scroll-container\");\n        if (scrollContainer) {\n            scrollContainer.scrollBy({\n                left: 300,\n                behavior: \"smooth\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            textTransform: \"capitalize\",\n            marginTop: {\n                xs: 0,\n                sm: \"-9rem\"\n            }\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                component: \"strong\",\n                sx: {\n                    fontSize: \"1.2rem\",\n                    marginLeft: \"3rem\",\n                    padding: \"0.5rem 0\",\n                    width: \"fit-content\",\n                    zIndex: 1,\n                    marginBottom: \".85rem\"\n                },\n                children: heading\n            }, void 0, false, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, undefined) : error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: error\n            }, void 0, false, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                sx: {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    position: \"relative\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        className: \"scroll-container\" // Ensure this class is added here\n                        ,\n                        sx: {\n                            display: \"flex\",\n                            flexDirection: \"row\",\n                            padding: {\n                                xs: \"3.2rem 6rem 2.2rem\",\n                                sm: \"3.2rem 6rem 12.5rem\"\n                            },\n                            overflowX: \"auto\",\n                            marginTop: \"-3rem\",\n                            marginLeft: \"-3rem\",\n                            \"&::-webkit-scrollbar\": {\n                                display: \"none\"\n                            }\n                        },\n                        children: media === null || media === void 0 ? void 0 : media.filter((item)=>item.poster_path !== null && item.backdrop_path !== null).map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cards_Cards__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                item: item\n                            }, index, false, {\n                                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        onClick: scrollRight,\n                        sx: {\n                            color: \"white\",\n                            position: \"absolute\",\n                            right: \"0\",\n                            top: \"0\",\n                            zIndex: \"100\",\n                            backgroundColor: \"rgba(0,0,0,.5)\",\n                            padding: \"4.2rem 1rem\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleRight_react_icons_fa6__WEBPACK_IMPORTED_MODULE_7__.FaAngleRight, {}, void 0, false, {\n                            fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MovieSections, \"Jv97ucw0sHPQafz5DVkHNdMPjdA=\");\n_c = MovieSections;\nvar _c;\n$RefreshReg$(_c, \"MovieSections\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01vdmllU2VjdGlvbnMvTW92aWVTZWN0aW9ucy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTZDO0FBRUM7QUFDVTtBQUNMO0FBQ0o7QUFFeEMsTUFBTVMsZ0JBQTZDO1FBQUMsRUFDekRDLE9BQU8sRUFDUEMsUUFBUSxFQUNUOztJQUNDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBVSxFQUFFO0lBQzlDLE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBVTtJQUNoRCxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQWdCO0lBRWxELE1BQU1XLGNBQWM7UUFDbEIsTUFBTUMsTUFBTSxNQUFNbEIsMkRBQVFBLENBQUMsR0FBWSxPQUFUVTtRQUM5QixJQUFJUSxJQUFJSCxLQUFLLEVBQUU7WUFDYkMsU0FBU0UsSUFBSUgsS0FBSyxDQUFDSSxPQUFPO1FBQzVCLE9BQU87Z0JBQ0lEO1lBQVROLFNBQVNNLEVBQUFBLFlBQUFBLElBQUlFLElBQUksY0FBUkYsZ0NBQUFBLFVBQVVHLE9BQU8sS0FBSSxFQUFFO1FBQ2xDO1FBQ0FQLFdBQVc7SUFDYjtJQUVBVCxnREFBU0EsQ0FBQztRQUNSWTtJQUNGLEdBQUc7UUFBQ1A7S0FBUztJQUViLE1BQU1ZLGNBQWMsQ0FBQ0M7WUFFakJBO1FBREYsTUFBTUMsbUJBQ0pELGtDQUFBQSxNQUFNRSxhQUFhLENBQUNDLFVBQVUsY0FBOUJILHNEQUFBQSxnQ0FBZ0NJLGFBQWEsQ0FBQztRQUNoRCxJQUFJSCxpQkFBaUI7WUFDbkJBLGdCQUFnQkksUUFBUSxDQUFDO2dCQUFFQyxNQUFNO2dCQUFLQyxVQUFVO1lBQVM7UUFDM0Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDN0IsaUdBQUdBO1FBQ0Y4QixJQUFJO1lBQ0ZDLFNBQVM7WUFDVEMsZUFBZTtZQUNmQyxlQUFlO1lBQ2ZDLFdBQVc7Z0JBQUVDLElBQUk7Z0JBQUdDLElBQUk7WUFBUTtRQUNsQzs7MEJBRUEsOERBQUNsQyxpR0FBVUE7Z0JBQ1RtQyxXQUFVO2dCQUNWUCxJQUFJO29CQUNGUSxVQUFVO29CQUNWQyxZQUFZO29CQUNaQyxTQUFTO29CQUNUQyxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxjQUFjO2dCQUNoQjswQkFFQ25DOzs7Ozs7WUFFRkksd0JBQ0MsOERBQUNnQzswQkFBSTs7Ozs7NEJBQ0g5QixzQkFDRiw4REFBQzhCOzBCQUFLOUI7Ozs7OzBDQUVOLDhEQUFDZCxpR0FBR0E7Z0JBQ0Y4QixJQUFJO29CQUFFQyxTQUFTO29CQUFRYyxZQUFZO29CQUFVQyxVQUFVO2dCQUFXOztrQ0FFbEUsOERBQUM5QyxpR0FBR0E7d0JBQ0YrQyxXQUFVLG1CQUFtQixrQ0FBa0M7O3dCQUMvRGpCLElBQUk7NEJBQ0ZDLFNBQVM7NEJBQ1RDLGVBQWU7NEJBQ2ZRLFNBQVM7Z0NBQUVMLElBQUk7Z0NBQXNCQyxJQUFJOzRCQUFzQjs0QkFDL0RZLFdBQVc7NEJBQ1hkLFdBQVc7NEJBQ1hLLFlBQVk7NEJBQ1osd0JBQXdCO2dDQUN0QlIsU0FBUzs0QkFDWDt3QkFDRjtrQ0FFQ3JCLGtCQUFBQSw0QkFBQUEsTUFDR3VDLE1BQU0sQ0FDTixDQUFDQyxPQUNDQSxLQUFLQyxXQUFXLEtBQUssUUFBUUQsS0FBS0UsYUFBYSxLQUFLLE1BRXZEQyxHQUFHLENBQUMsQ0FBQ0gsTUFBTUksc0JBQ1YsOERBQUN4RCwrREFBS0E7Z0NBQWFvRCxNQUFNQTsrQkFBYkk7Ozs7Ozs7Ozs7a0NBR2xCLDhEQUFDckQsaUdBQU1BO3dCQUNMc0QsU0FBU2xDO3dCQUNUUyxJQUFJOzRCQUNGMEIsT0FBTzs0QkFDUFYsVUFBVTs0QkFDVlcsT0FBTzs0QkFDUEMsS0FBSzs0QkFDTGhCLFFBQVE7NEJBQ1JpQixpQkFBaUI7NEJBQ2pCbkIsU0FBUzt3QkFFWDtrQ0FFQSw0RUFBQ2xDLDZGQUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16QixFQUFFO0dBdEdXQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Nb3ZpZVNlY3Rpb25zL01vdmllU2VjdGlvbnMudHN4PzcxZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmRzIGZyb20gXCJAL2NvbXBvbmVudHMvQ2FyZHMvQ2FyZHNcIjtcbmltcG9ydCB7IE1lZGlhLCBNb3ZpZVNlY3Rpb25Qcm9wcyB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRNb3ZpZSB9IGZyb20gXCJAL3V0aWxzL2FwaVNlcnZpY2VcIjtcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYUFuZ2xlUmlnaHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmE2XCI7XG5cbmV4cG9ydCBjb25zdCBNb3ZpZVNlY3Rpb25zOiBSZWFjdC5GQzxNb3ZpZVNlY3Rpb25Qcm9wcz4gPSAoe1xuICBoZWFkaW5nLFxuICBlbmRwb2ludCxcbn0pID0+IHtcbiAgY29uc3QgW21lZGlhLCBzZXRNZWRpYV0gPSB1c2VTdGF0ZTxNZWRpYVtdPihbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGZldGNoTW92aWVzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldE1vdmllKGAke2VuZHBvaW50fWApO1xuICAgIGlmIChyZXMuZXJyb3IpIHtcbiAgICAgIHNldEVycm9yKHJlcy5lcnJvci5tZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TWVkaWEocmVzLmRhdGE/LnJlc3VsdHMgfHwgW10pO1xuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoTW92aWVzKCk7XG4gIH0sIFtlbmRwb2ludF0pOyBcblxuICBjb25zdCBzY3JvbGxSaWdodCA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPVxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlPy5xdWVyeVNlbGVjdG9yKFwiLnNjcm9sbC1jb250YWluZXJcIik7XG4gICAgaWYgKHNjcm9sbENvbnRhaW5lcikge1xuICAgICAgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbEJ5KHsgbGVmdDogMzAwLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBzeD17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXG4gICAgICAgIG1hcmdpblRvcDogeyB4czogMCwgc206IFwiLTlyZW1cIiB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8VHlwb2dyYXBoeVxuICAgICAgICBjb21wb25lbnQ9XCJzdHJvbmdcIlxuICAgICAgICBzeD17e1xuICAgICAgICAgIGZvbnRTaXplOiBcIjEuMnJlbVwiLFxuICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiM3JlbVwiLFxuICAgICAgICAgIHBhZGRpbmc6IFwiMC41cmVtIDBcIixcbiAgICAgICAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxuICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiLjg1cmVtXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtoZWFkaW5nfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgKSA6IGVycm9yID8gKFxuICAgICAgICA8ZGl2PntlcnJvcn08L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2Nyb2xsLWNvbnRhaW5lclwiIC8vIEVuc3VyZSB0aGlzIGNsYXNzIGlzIGFkZGVkIGhlcmVcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgICAgICBwYWRkaW5nOiB7IHhzOiBcIjMuMnJlbSA2cmVtIDIuMnJlbVwiLCBzbTogXCIzLjJyZW0gNnJlbSAxMi41cmVtXCIgfSxcbiAgICAgICAgICAgICAgb3ZlcmZsb3dYOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIi0zcmVtXCIsXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiLTNyZW1cIixcbiAgICAgICAgICAgICAgXCImOjotd2Via2l0LXNjcm9sbGJhclwiOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHttZWRpYVxuICAgICAgICAgICAgICA/LmZpbHRlcihcbiAgICAgICAgICAgICAgICAoaXRlbSkgPT5cbiAgICAgICAgICAgICAgICAgIGl0ZW0ucG9zdGVyX3BhdGggIT09IG51bGwgJiYgaXRlbS5iYWNrZHJvcF9wYXRoICE9PSBudWxsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8Q2FyZHMga2V5PXtpbmRleH0gaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17c2Nyb2xsUmlnaHR9XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICByaWdodDogXCIwXCIsXG4gICAgICAgICAgICAgIHRvcDogXCIwXCIsXG4gICAgICAgICAgICAgIHpJbmRleDogXCIxMDBcIixcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsLjUpXCIsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiNC4ycmVtIDFyZW1cIlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZhQW5nbGVSaWdodCAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG4iXSwibmFtZXMiOlsiQ2FyZHMiLCJnZXRNb3ZpZSIsIkJveCIsIkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRmFBbmdsZVJpZ2h0IiwiTW92aWVTZWN0aW9ucyIsImhlYWRpbmciLCJlbmRwb2ludCIsIm1lZGlhIiwic2V0TWVkaWEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaE1vdmllcyIsInJlcyIsIm1lc3NhZ2UiLCJkYXRhIiwicmVzdWx0cyIsInNjcm9sbFJpZ2h0IiwiZXZlbnQiLCJzY3JvbGxDb250YWluZXIiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50Tm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxCeSIsImxlZnQiLCJiZWhhdmlvciIsInN4IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ0ZXh0VHJhbnNmb3JtIiwibWFyZ2luVG9wIiwieHMiLCJzbSIsImNvbXBvbmVudCIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsInBhZGRpbmciLCJ3aWR0aCIsInpJbmRleCIsIm1hcmdpbkJvdHRvbSIsImRpdiIsImFsaWduSXRlbXMiLCJwb3NpdGlvbiIsImNsYXNzTmFtZSIsIm92ZXJmbG93WCIsImZpbHRlciIsIml0ZW0iLCJwb3N0ZXJfcGF0aCIsImJhY2tkcm9wX3BhdGgiLCJtYXAiLCJpbmRleCIsIm9uQ2xpY2siLCJjb2xvciIsInJpZ2h0IiwidG9wIiwiYmFja2dyb3VuZENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/MovieSections/MovieSections.tsx\n"));

/***/ })

});