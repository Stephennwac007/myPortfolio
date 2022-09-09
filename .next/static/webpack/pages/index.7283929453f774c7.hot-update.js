"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ \"./src/components/TimeLine/TimeLineStyles.js\");\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;\nvar Timeline = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), activeItem = ref[0], setActiveItem = ref[1];\n    var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    // const scroll = (node, left) => {\n    //   return node.scrollTo({ left, behavior: 'smooth' });\n    // }\n    var handleClick = function(e, i) {\n        e.preventDefault();\n        if (carouselRef.current) {\n            var scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length));\n            scroll(carouselRef.current, scrollLeft);\n        }\n    };\n    // const handleScroll = () => {\n    //   if (carouselRef.current) {\n    //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);\n    //     setActiveItem(index);\n    //   }\n    // }\n    // // snap back to beginning of scroll when window is resized\n    // // avoids a bug where content is covered up if coming from smaller screen\n    // useEffect(() => {\n    //   const handleResize = () => {\n    //     scroll(carouselRef.current, 0);\n    //   }\n    //   window.addEventListener('resize', handleResize);\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {\n        id: \"about\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {\n                children: \"About Me\"\n            }, void 0, false, {\n                fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {\n                ref: carouselRef,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function(param, index) {\n                        var year = param.year;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {\n                            final: index === TOTAL_CAROUSEL_COUNT - 1,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {\n                                index: index,\n                                id: \"carousel_item-\".concat(index),\n                                active: activeItem,\n                                onClick: function(e) {\n                                    return handleClick(e, index);\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {\n                                    children: [\n                                        year,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemImg, {\n                                            width: \"208\",\n                                            height: \"6\",\n                                            viewBox: \"0 0 208 6\",\n                                            fill: \"none\",\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    \"fill-rule\": \"evenodd\",\n                                                    \"clip-rule\": \"evenodd\",\n                                                    d: \"M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z\",\n                                                    fill: \"url(#paint0_linear)\",\n                                                    \"fill-opacity\": \"0.33\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"linearGradient\", {\n                                                        id: \"paint0_linear\",\n                                                        x1: \"-4.30412e-10\",\n                                                        y1: \"0.5\",\n                                                        x2: \"208\",\n                                                        y2: \"0.500295\",\n                                                        gradientUnits: \"userSpaceOnUse\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                                                \"stop-color\": \"white\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                                                                lineNumber: 103,\n                                                                columnNumber: 25\n                                                            }, _this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                                                offset: \"0.79478\",\n                                                                \"stop-color\": \"white\",\n                                                                \"stop-opacity\": \"0\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                                                                lineNumber: 104,\n                                                                columnNumber: 25\n                                                            }, _this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                                                        lineNumber: 95,\n                                                        columnNumber: 23\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                                lineNumber: 72,\n                                columnNumber: 15\n                            }, _this)\n                        }, index, false, {\n                            fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {\n                children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function(item, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {\n                        index: index,\n                        active: ac\n                    }, index, false, {\n                        fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, _this);\n};\n_s(Timeline, \"a+t1PkU1ZAnxlluRA0eiChBXU3s=\");\n_c = Timeline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\nvar _c;\n$RefreshReg$(_c, \"Timeline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7QUFBMkQ7QUFZakM7QUFNYTtBQUNrQjtBQUV6RCxJQUFNa0Isb0JBQW9CLEdBQUdELHFFQUFtQjtBQUVoRCxJQUFNRyxRQUFRLEdBQUcsV0FBTTs7SUFDckIsSUFBb0NuQixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQXhDb0IsVUFBVSxHQUFtQnBCLEdBQVcsR0FBOUIsRUFBRXFCLGFBQWEsR0FBSXJCLEdBQVcsR0FBZjtJQUNoQyxJQUFNc0IsV0FBVyxHQUFHckIsNkNBQU0sRUFBRTtJQUU1QixtQ0FBbUM7SUFDbkMsd0RBQXdEO0lBQ3hELElBQUk7SUFFSixJQUFNc0IsV0FBVyxHQUFHLFNBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUFLO1FBQzVCRCxDQUFDLENBQUNFLGNBQWMsRUFBRSxDQUFDO1FBRW5CLElBQUlKLFdBQVcsQ0FBQ0ssT0FBTyxFQUFFO1lBQ3ZCLElBQU1DLFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQzNCUixXQUFXLENBQUNLLE9BQU8sQ0FBQ0ksV0FBVyxHQUFHLEdBQUcsR0FBRyxDQUFDTixDQUFDLEdBQUdULHFFQUFtQixDQUFDLENBQ2xFO1lBRURnQixNQUFNLENBQUNWLFdBQVcsQ0FBQ0ssT0FBTyxFQUFFQyxVQUFVLENBQUMsQ0FBQztRQUMxQyxDQUFDO0lBQ0gsQ0FBQztJQUVELCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0Isa0lBQWtJO0lBRWxJLDRCQUE0QjtJQUM1QixNQUFNO0lBQ04sSUFBSTtJQUVKLDZEQUE2RDtJQUM3RCw0RUFBNEU7SUFDNUUsb0JBQW9CO0lBQ3BCLGlDQUFpQztJQUNqQyxzQ0FBc0M7SUFDdEMsTUFBTTtJQUVOLHFEQUFxRDtJQUNyRCxVQUFVO0lBRVYscUJBQ0UsOERBQUNoQiw2REFBTztRQUFDcUIsRUFBRSxFQUFDLE9BQU87OzBCQUNqQiw4REFBQ25CLGlFQUFXOzBCQUFDLFVBQVE7Ozs7O3FCQUFjOzBCQUNuQyw4REFBQ1IsOERBQWlCO2dCQUFDNEIsR0FBRyxFQUFFWixXQUFXOzBCQUNqQzs4QkFDR04sa0VBQWdCLENBQUMsZ0JBQVdvQixLQUFLOzRCQUFiQyxJQUFJLFNBQUpBLElBQUk7NkNBQ3ZCLDhEQUFDMUIscUVBQXdCOzRCQUV2QjJCLEtBQUssRUFBRUYsS0FBSyxLQUFLbkIsb0JBQW9CLEdBQUcsQ0FBQztzQ0FFekMsNEVBQUNWLHlEQUFZO2dDQUNYNkIsS0FBSyxFQUFFQSxLQUFLO2dDQUNaSCxFQUFFLEVBQUUsZ0JBQWUsQ0FBUSxPQUFORyxLQUFLLENBQUU7Z0NBQzVCRyxNQUFNLEVBQUVuQixVQUFVO2dDQUNsQm9CLE9BQU8sRUFBRSxTQUFDaEIsQ0FBQzsyQ0FBS0QsV0FBVyxDQUFDQyxDQUFDLEVBQUVZLEtBQUssQ0FBQztpQ0FBQTswQ0FFckMsNEVBQUMxQiw4REFBaUI7O3dDQUNmMkIsSUFBSTtzREFDTCw4REFBQzdCLDREQUFlOzRDQUNkaUMsS0FBSyxFQUFDLEtBQUs7NENBQ1hDLE1BQU0sRUFBQyxHQUFHOzRDQUNWQyxPQUFPLEVBQUMsV0FBVzs0Q0FDbkJDLElBQUksRUFBQyxNQUFNOzRDQUNYQyxLQUFLLEVBQUMsNEJBQTRCOzs4REFFbEMsOERBQUNDLE1BQUk7b0RBQ0hDLFdBQVMsRUFBQyxTQUFTO29EQUNuQkMsV0FBUyxFQUFDLFNBQVM7b0RBQ25CQyxDQUFDLEVBQUMsMkpBQTJKO29EQUM3SkwsSUFBSSxFQUFDLHFCQUFxQjtvREFDMUJNLGNBQVksRUFBQyxNQUFNOzs7Ozt5REFDbkI7OERBQ0YsOERBQUNDLE1BQUk7OERBQ0gsNEVBQUNDLGdCQUFjO3dEQUNibkIsRUFBRSxFQUFDLGVBQWU7d0RBQ2xCb0IsRUFBRSxFQUFDLGNBQWM7d0RBQ2pCQyxFQUFFLEVBQUMsS0FBSzt3REFDUkMsRUFBRSxFQUFDLEtBQUs7d0RBQ1JDLEVBQUUsRUFBQyxVQUFVO3dEQUNiQyxhQUFhLEVBQUMsZ0JBQWdCOzswRUFFOUIsOERBQUNDLE1BQUk7Z0VBQUNDLFlBQVUsRUFBQyxPQUFPOzs7OztxRUFBRzswRUFDM0IsOERBQUNELE1BQUk7Z0VBQ0hFLE1BQU0sRUFBQyxTQUFTO2dFQUNoQkQsWUFBVSxFQUFDLE9BQU87Z0VBQ2xCRSxjQUFZLEVBQUMsR0FBRzs7Ozs7cUVBQ2hCOzs7Ozs7NkRBQ2E7Ozs7O3lEQUNaOzs7Ozs7aURBQ1M7Ozs7Ozt5Q0FDQTs7Ozs7cUNBQ1A7MkJBNUNWekIsS0FBSzs7OztpQ0E2Q2U7cUJBQzVCLENBQUM7aUNBQ0Q7Ozs7O3FCQUNlOzBCQUNwQiw4REFBQy9CLDREQUFlOzBCQUNiVyxrRUFBZ0IsQ0FBQyxTQUFDOEMsSUFBSSxFQUFFMUIsS0FBSzt5Q0FDNUIsOERBQUNqQywyREFBYzt3QkFFZmlDLEtBQUssRUFBRUEsS0FBSzt3QkFDWkcsTUFBTSxFQUFFd0IsRUFBRTt1QkFGTDNCLEtBQUs7Ozs7NkJBR1I7aUJBQ0gsQ0FBQzs7Ozs7cUJBQ2M7Ozs7OzthQUNWLENBQ1Y7QUFDSixDQUFDO0dBekdLakIsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBMkdkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmUuanM/OTEwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gIENhcm91c2VsQnV0dG9uLFxuICBDYXJvdXNlbEJ1dHRvbkRvdCxcbiAgQ2Fyb3VzZWxCdXR0b25zLFxuICBDYXJvdXNlbENvbnRhaW5lcixcbiAgQ2Fyb3VzZWxJdGVtLFxuICBDYXJvdXNlbEl0ZW1JbWcsXG4gIENhcm91c2VsSXRlbVRleHQsXG4gIENhcm91c2VsSXRlbVRpdGxlLFxuICBDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGUsXG59IGZyb20gXCIuL1RpbWVMaW5lU3R5bGVzXCI7XG5pbXBvcnQge1xuICBTZWN0aW9uLFxuICBTZWN0aW9uRGl2aWRlcixcbiAgU2VjdGlvblRleHQsXG4gIFNlY3Rpb25UaXRsZSxcbn0gZnJvbSBcIi4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzXCI7XG5pbXBvcnQgeyBUaW1lTGluZURhdGEgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50c1wiO1xuXG5jb25zdCBUT1RBTF9DQVJPVVNFTF9DT1VOVCA9IFRpbWVMaW5lRGF0YS5sZW5ndGg7XG5cbmNvbnN0IFRpbWVsaW5lID0gKCkgPT4ge1xuICBjb25zdCBbYWN0aXZlSXRlbSwgc2V0QWN0aXZlSXRlbV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgY2Fyb3VzZWxSZWYgPSB1c2VSZWYoKTtcblxuICAvLyBjb25zdCBzY3JvbGwgPSAobm9kZSwgbGVmdCkgPT4ge1xuICAvLyAgIHJldHVybiBub2RlLnNjcm9sbFRvKHsgbGVmdCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAvLyB9XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSwgaSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gTWF0aC5mbG9vcihcbiAgICAgICAgY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxXaWR0aCAqIDAuNyAqIChpIC8gVGltZUxpbmVEYXRhLmxlbmd0aClcbiAgICAgICk7XG5cbiAgICAgIHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCBzY3JvbGxMZWZ0KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAvLyAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XG4gIC8vICAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAvIChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43KSkgKiBUaW1lTGluZURhdGEubGVuZ3RoKTtcblxuICAvLyAgICAgc2V0QWN0aXZlSXRlbShpbmRleCk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gLy8gc25hcCBiYWNrIHRvIGJlZ2lubmluZyBvZiBzY3JvbGwgd2hlbiB3aW5kb3cgaXMgcmVzaXplZFxuICAvLyAvLyBhdm9pZHMgYSBidWcgd2hlcmUgY29udGVudCBpcyBjb3ZlcmVkIHVwIGlmIGNvbWluZyBmcm9tIHNtYWxsZXIgc2NyZWVuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAvLyAgICAgc2Nyb2xsKGNhcm91c2VsUmVmLmN1cnJlbnQsIDApO1xuICAvLyAgIH1cblxuICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAvLyB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbiBpZD1cImFib3V0XCI+XG4gICAgICA8U2VjdGlvblRleHQ+QWJvdXQgTWU8L1NlY3Rpb25UZXh0PlxuICAgICAgPENhcm91c2VsQ29udGFpbmVyIHJlZj17Y2Fyb3VzZWxSZWZ9PlxuICAgICAgICA8PlxuICAgICAgICAgIHtUaW1lTGluZURhdGEubWFwKCh7IHllYXIgfSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGVcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgZmluYWw9e2luZGV4ID09PSBUT1RBTF9DQVJPVVNFTF9DT1VOVCAtIDF9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1cbiAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgaWQ9e2BjYXJvdXNlbF9pdGVtLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIGluZGV4KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1UaXRsZT5cbiAgICAgICAgICAgICAgICAgIHt5ZWFyfVxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbUltZ1xuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwOFwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjZcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwOCA2XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGlwLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIuNSA1LjVDMy44ODA3MSA1LjUgNSA0LjM4MDcxIDUgM1YzLjVMMjA4IDMuNTAwMDJWMi41MDAwMkw1IDIuNVYzQzUgMS42MTkyOSAzLjg4MDcxIDAuNSAyLjUgMC41QzEuMTE5MjkgMC41IDAgMS42MTkyOSAwIDNDMCA0LjM4MDcxIDEuMTE5MjkgNS41IDIuNSA1LjVaXCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNwYWludDBfbGluZWFyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbC1vcGFjaXR5PVwiMC4zM1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYWludDBfbGluZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxPVwiLTQuMzA0MTJlLTEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkxPVwiMC41XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgyPVwiMjA4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkyPVwiMC41MDAyOTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PVwiMC43OTQ3OFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3AtY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3Atb3BhY2l0eT1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbUltZz5cbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbVRpdGxlPlxuICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbT5cbiAgICAgICAgICAgIDwvQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlPlxuICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICAgIDwvQ2Fyb3VzZWxDb250YWluZXI+XG4gICAgICA8Q2Fyb3VzZWxCdXR0b25zPlxuICAgICAgICB7VGltZUxpbmVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpPT4oXG4gICAgICAgICAgPENhcm91c2VsQnV0dG9uXG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgYWN0aXZlPXthY30gXG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0Nhcm91c2VsQnV0dG9ucz5cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiQ2Fyb3VzZWxCdXR0b24iLCJDYXJvdXNlbEJ1dHRvbkRvdCIsIkNhcm91c2VsQnV0dG9ucyIsIkNhcm91c2VsQ29udGFpbmVyIiwiQ2Fyb3VzZWxJdGVtIiwiQ2Fyb3VzZWxJdGVtSW1nIiwiQ2Fyb3VzZWxJdGVtVGV4dCIsIkNhcm91c2VsSXRlbVRpdGxlIiwiQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlIiwiU2VjdGlvbiIsIlNlY3Rpb25EaXZpZGVyIiwiU2VjdGlvblRleHQiLCJTZWN0aW9uVGl0bGUiLCJUaW1lTGluZURhdGEiLCJUT1RBTF9DQVJPVVNFTF9DT1VOVCIsImxlbmd0aCIsIlRpbWVsaW5lIiwiYWN0aXZlSXRlbSIsInNldEFjdGl2ZUl0ZW0iLCJjYXJvdXNlbFJlZiIsImhhbmRsZUNsaWNrIiwiZSIsImkiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwiTWF0aCIsImZsb29yIiwic2Nyb2xsV2lkdGgiLCJzY3JvbGwiLCJpZCIsInJlZiIsIm1hcCIsImluZGV4IiwieWVhciIsImZpbmFsIiwiYWN0aXZlIiwib25DbGljayIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsInBhdGgiLCJmaWxsLXJ1bGUiLCJjbGlwLXJ1bGUiLCJkIiwiZmlsbC1vcGFjaXR5IiwiZGVmcyIsImxpbmVhckdyYWRpZW50IiwieDEiLCJ5MSIsIngyIiwieTIiLCJncmFkaWVudFVuaXRzIiwic3RvcCIsInN0b3AtY29sb3IiLCJvZmZzZXQiLCJzdG9wLW9wYWNpdHkiLCJpdGVtIiwiYWMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TimeLine/TimeLine.js\n"));

/***/ })

});