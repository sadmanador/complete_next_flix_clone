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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MovieSections: function() { return /* binding */ MovieSections; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _utils_apiService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/apiService */ \"(app-pages-browser)/./src/utils/apiService.ts\");\n/* harmony import */ var _components_Cards_Cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Cards/Cards */ \"(app-pages-browser)/./src/components/Cards/Cards.tsx\");\n/* harmony import */ var _barrel_optimize_names_FaAngleRight_react_icons_fa6__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=FaAngleRight!=!react-icons/fa6 */ \"(app-pages-browser)/./node_modules/react-icons/fa6/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MovieSections = (param)=>{\n    let { heading, endpoint } = param;\n    _s();\n    const [media, setMedia] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const fetchMovies = async ()=>{\n        const res = await (0,_utils_apiService__WEBPACK_IMPORTED_MODULE_2__.getMovie)(\"\".concat(endpoint));\n        if (res.error) {\n            setError(res.error.message);\n        } else {\n            var _res_data;\n            setMedia(((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.results) || []);\n        }\n        setLoading(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (media.length === 0) {\n            fetchMovies();\n        }\n    }, [\n        media.length\n    ]);\n    const scrollRight = (event)=>{\n        var _event_currentTarget_parentNode;\n        const scrollContainer = (_event_currentTarget_parentNode = event.currentTarget.parentNode) === null || _event_currentTarget_parentNode === void 0 ? void 0 : _event_currentTarget_parentNode.querySelector(\".scroll-container\");\n        if (scrollContainer) {\n            scrollContainer.scrollBy({\n                left: 300,\n                behavior: \"smooth\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            textTransform: \"capitalize\",\n            marginTop: {\n                xs: 0,\n                sm: \"-9rem\"\n            }\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                component: \"strong\",\n                sx: {\n                    fontSize: \"1.2rem\",\n                    marginLeft: \"3rem\",\n                    padding: \"0.5rem 0\",\n                    width: \"fit-content\",\n                    zIndex: 1,\n                    marginBottom: \".85rem\"\n                },\n                children: heading\n            }, void 0, false, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, undefined) : error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: error\n            }, void 0, false, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                sx: {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    position: \"relative\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        sx: {\n                            display: \"flex\",\n                            flexDirection: \"row\",\n                            padding: {\n                                xs: \"3.2rem 6rem 2.2rem\",\n                                sm: \"3.2rem 6rem 12.5rem\"\n                            },\n                            overflowX: \"auto\",\n                            marginTop: \"-3rem\",\n                            marginLeft: \"-3rem\",\n                            \"&::-webkit-scrollbar\": {\n                                display: \"none\"\n                            }\n                        },\n                        children: media === null || media === void 0 ? void 0 : media.filter((item)=>item.poster_path !== null && item.backdrop_path !== null).map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cards_Cards__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                item: item\n                            }, index, false, {\n                                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        onClick: scrollRight,\n                        sx: {\n                            color: \"white\",\n                            position: \"absolute\",\n                            right: \"0\",\n                            top: \"0\",\n                            zIndex: \"100\",\n                            backgroundColor: \"rgba(0,0,0,.5)\",\n                            padding: \"4rem 1rem\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaAngleRight_react_icons_fa6__WEBPACK_IMPORTED_MODULE_7__.FaAngleRight, {}, void 0, false, {\n                            fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sadmanador/GitHub/next_flix/src/components/MovieSections/MovieSections.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MovieSections, \"Jv97ucw0sHPQafz5DVkHNdMPjdA=\");\n_c = MovieSections;\nvar _c;\n$RefreshReg$(_c, \"MovieSections\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01vdmllU2VjdGlvbnMvTW92aWVTZWN0aW9ucy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2lCO0FBQ3RCO0FBRUQ7QUFDRTtBQUV4QyxNQUFNUyxnQkFBNkM7UUFBQyxFQUN6REMsT0FBTyxFQUNQQyxRQUFRLEVBQ1Q7O0lBQ0MsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFVLEVBQUU7SUFDOUMsTUFBTSxDQUFDWSxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFVO0lBQ2hELE1BQU0sQ0FBQ2MsT0FBT0MsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBZ0I7SUFFbEQsTUFBTWdCLGNBQWM7UUFDbEIsTUFBTUMsTUFBTSxNQUFNYiwyREFBUUEsQ0FBQyxHQUFZLE9BQVRLO1FBQzlCLElBQUlRLElBQUlILEtBQUssRUFBRTtZQUNiQyxTQUFTRSxJQUFJSCxLQUFLLENBQUNJLE9BQU87UUFDNUIsT0FBTztnQkFDSUQ7WUFBVE4sU0FBU00sRUFBQUEsWUFBQUEsSUFBSUUsSUFBSSxjQUFSRixnQ0FBQUEsVUFBVUcsT0FBTyxLQUFJLEVBQUU7UUFDbEM7UUFDQVAsV0FBVztJQUNiO0lBRUFkLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVcsTUFBTVcsTUFBTSxLQUFLLEdBQUc7WUFDdEJMO1FBQ0Y7SUFDRixHQUFHO1FBQUNOLE1BQU1XLE1BQU07S0FBQztJQUVqQixNQUFNQyxjQUFjLENBQUNDO1lBRWpCQTtRQURGLE1BQU1DLG1CQUNKRCxrQ0FBQUEsTUFBTUUsYUFBYSxDQUFDQyxVQUFVLGNBQTlCSCxzREFBQUEsZ0NBQWdDSSxhQUFhLENBQUM7UUFDaEQsSUFBSUgsaUJBQWlCO1lBQ25CQSxnQkFBZ0JJLFFBQVEsQ0FBQztnQkFBRUMsTUFBTTtnQkFBS0MsVUFBVTtZQUFTO1FBQzNEO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQzdCLGlHQUFHQTtRQUNGOEIsSUFBSTtZQUNGQyxTQUFTO1lBQ1RDLGVBQWU7WUFDZkMsZUFBZTtZQUNmQyxXQUFXO2dCQUFFQyxJQUFJO2dCQUFHQyxJQUFJO1lBQVE7UUFDbEM7OzBCQUVBLDhEQUFDbEMsaUdBQVVBO2dCQUNUbUMsV0FBVTtnQkFDVlAsSUFBSTtvQkFDRlEsVUFBVTtvQkFDVkMsWUFBWTtvQkFDWkMsU0FBUztvQkFDVEMsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkMsY0FBYztnQkFDaEI7MEJBRUNwQzs7Ozs7O1lBRUZJLHdCQUNDLDhEQUFDaUM7MEJBQUk7Ozs7OzRCQUNIL0Isc0JBQ0YsOERBQUMrQjswQkFBSy9COzs7OzswQ0FFTiw4REFBQ2IsaUdBQUdBO2dCQUNGOEIsSUFBSTtvQkFBRUMsU0FBUztvQkFBUWMsWUFBWTtvQkFBVUMsVUFBVTtnQkFBVzs7a0NBRWxFLDhEQUFDOUMsaUdBQUdBO3dCQUNGOEIsSUFBSTs0QkFDRkMsU0FBUzs0QkFDVEMsZUFBZTs0QkFDZlEsU0FBUztnQ0FBRUwsSUFBSTtnQ0FBc0JDLElBQUk7NEJBQXNCOzRCQUMvRFcsV0FBVzs0QkFDWGIsV0FBVzs0QkFDWEssWUFBWTs0QkFDWix3QkFBd0I7Z0NBQ3RCUixTQUFTOzRCQUNYO3dCQUNGO2tDQUVDdEIsa0JBQUFBLDRCQUFBQSxNQUNHdUMsTUFBTSxDQUNOLENBQUNDLE9BQ0NBLEtBQUtDLFdBQVcsS0FBSyxRQUFRRCxLQUFLRSxhQUFhLEtBQUssTUFFdkRDLEdBQUcsQ0FBQyxDQUFDSCxNQUFNSSxzQkFDViw4REFBQ2pELCtEQUFLQTtnQ0FBYTZDLE1BQU1BOytCQUFiSTs7Ozs7Ozs7OztrQ0FHbEIsOERBQUNwRCxpR0FBTUE7d0JBQ0xxRCxTQUFTakM7d0JBQ1RTLElBQUk7NEJBQ0Z5QixPQUFPOzRCQUNQVCxVQUFVOzRCQUNWVSxPQUFPOzRCQUNQQyxLQUFLOzRCQUNMZixRQUFROzRCQUNSZ0IsaUJBQWlCOzRCQUNqQmxCLFNBQVM7d0JBQ1g7a0NBRUEsNEVBQUNuQyw2RkFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekIsRUFBRTtHQXRHV0M7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWVTZWN0aW9ucy9Nb3ZpZVNlY3Rpb25zLnRzeD83MWVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgSWNvbkJ1dHRvbiwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBnZXRNb3ZpZSB9IGZyb20gXCJAL3V0aWxzL2FwaVNlcnZpY2VcIjtcbmltcG9ydCB7IE1lZGlhLCBNb3ZpZVNlY3Rpb25Qcm9wcyB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgQ2FyZHMgZnJvbSBcIkAvY29tcG9uZW50cy9DYXJkcy9DYXJkc1wiO1xuaW1wb3J0IHsgRmFBbmdsZVJpZ2h0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhNlwiO1xuXG5leHBvcnQgY29uc3QgTW92aWVTZWN0aW9uczogUmVhY3QuRkM8TW92aWVTZWN0aW9uUHJvcHM+ID0gKHtcbiAgaGVhZGluZyxcbiAgZW5kcG9pbnQsXG59KSA9PiB7XG4gIGNvbnN0IFttZWRpYSwgc2V0TWVkaWFdID0gdXNlU3RhdGU8TWVkaWFbXT4oW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBmZXRjaE1vdmllcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRNb3ZpZShgJHtlbmRwb2ludH1gKTtcbiAgICBpZiAocmVzLmVycm9yKSB7XG4gICAgICBzZXRFcnJvcihyZXMuZXJyb3IubWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldE1lZGlhKHJlcy5kYXRhPy5yZXN1bHRzIHx8IFtdKTtcbiAgICB9XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobWVkaWEubGVuZ3RoID09PSAwKSB7XG4gICAgICBmZXRjaE1vdmllcygpO1xuICAgIH1cbiAgfSwgW21lZGlhLmxlbmd0aF0pO1xuXG4gIGNvbnN0IHNjcm9sbFJpZ2h0ID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lciA9XG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGU/LnF1ZXJ5U2VsZWN0b3IoXCIuc2Nyb2xsLWNvbnRhaW5lclwiKTtcbiAgICBpZiAoc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsQnkoeyBsZWZ0OiAzMDAsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHN4PXt7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcbiAgICAgICAgbWFyZ2luVG9wOiB7IHhzOiAwLCBzbTogXCItOXJlbVwiIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgIGNvbXBvbmVudD1cInN0cm9uZ1wiXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgZm9udFNpemU6IFwiMS4ycmVtXCIsXG4gICAgICAgICAgbWFyZ2luTGVmdDogXCIzcmVtXCIsXG4gICAgICAgICAgcGFkZGluZzogXCIwLjVyZW0gMFwiLFxuICAgICAgICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXG4gICAgICAgICAgekluZGV4OiAxLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIuODVyZW1cIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2hlYWRpbmd9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICApIDogZXJyb3IgPyAoXG4gICAgICAgIDxkaXY+e2Vycm9yfTwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPEJveFxuICAgICAgICAgIHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICAgICAgcGFkZGluZzogeyB4czogXCIzLjJyZW0gNnJlbSAyLjJyZW1cIiwgc206IFwiMy4ycmVtIDZyZW0gMTIuNXJlbVwiIH0sXG4gICAgICAgICAgICAgIG92ZXJmbG93WDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogXCItM3JlbVwiLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIi0zcmVtXCIsXG4gICAgICAgICAgICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXJcIjoge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bWVkaWFcbiAgICAgICAgICAgICAgPy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKGl0ZW0pID0+XG4gICAgICAgICAgICAgICAgICBpdGVtLnBvc3Rlcl9wYXRoICE9PSBudWxsICYmIGl0ZW0uYmFja2Ryb3BfcGF0aCAhPT0gbnVsbFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPENhcmRzIGtleT17aW5kZXh9IGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e3Njcm9sbFJpZ2h0fVxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgcmlnaHQ6IFwiMFwiLFxuICAgICAgICAgICAgICB0b3A6IFwiMFwiLFxuICAgICAgICAgICAgICB6SW5kZXg6IFwiMTAwXCIsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLC41KVwiLFxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjRyZW0gMXJlbVwiXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGYUFuZ2xlUmlnaHQgLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQm94IiwiQnV0dG9uIiwiVHlwb2dyYXBoeSIsImdldE1vdmllIiwiQ2FyZHMiLCJGYUFuZ2xlUmlnaHQiLCJNb3ZpZVNlY3Rpb25zIiwiaGVhZGluZyIsImVuZHBvaW50IiwibWVkaWEiLCJzZXRNZWRpYSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoTW92aWVzIiwicmVzIiwibWVzc2FnZSIsImRhdGEiLCJyZXN1bHRzIiwibGVuZ3RoIiwic2Nyb2xsUmlnaHQiLCJldmVudCIsInNjcm9sbENvbnRhaW5lciIsImN1cnJlbnRUYXJnZXQiLCJwYXJlbnROb2RlIiwicXVlcnlTZWxlY3RvciIsInNjcm9sbEJ5IiwibGVmdCIsImJlaGF2aW9yIiwic3giLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInRleHRUcmFuc2Zvcm0iLCJtYXJnaW5Ub3AiLCJ4cyIsInNtIiwiY29tcG9uZW50IiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwicGFkZGluZyIsIndpZHRoIiwiekluZGV4IiwibWFyZ2luQm90dG9tIiwiZGl2IiwiYWxpZ25JdGVtcyIsInBvc2l0aW9uIiwib3ZlcmZsb3dYIiwiZmlsdGVyIiwiaXRlbSIsInBvc3Rlcl9wYXRoIiwiYmFja2Ryb3BfcGF0aCIsIm1hcCIsImluZGV4Iiwib25DbGljayIsImNvbG9yIiwicmlnaHQiLCJ0b3AiLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/MovieSections/MovieSections.tsx\n"));

/***/ })

});