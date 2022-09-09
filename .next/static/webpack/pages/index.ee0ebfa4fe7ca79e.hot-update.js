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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ \"./src/components/TimeLine/TimeLineStyles.js\");\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;\nvar Timeline = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), activeItem = ref[0], setActiveItem = ref[1];\n    var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    // const scroll = (node, left) => {\n    //   return node.scrollTo({ left, behavior: 'smooth' });\n    // }\n    var handleClick = function(e, i) {\n        e.preventDefault();\n        if (carouselRef.current) {\n            var scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length));\n            scroll(carouselRef.current, scrollLeft);\n        }\n    };\n    // const handleScroll = () => {\n    //   if (carouselRef.current) {\n    //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);\n    //     setActiveItem(index);\n    //   }\n    // }\n    // // snap back to beginning of scroll when window is resized\n    // // avoids a bug where content is covered up if coming from smaller screen\n    // useEffect(() => {\n    //   const handleResize = () => {\n    //     scroll(carouselRef.current, 0);\n    //   }\n    //   window.addEventListener('resize', handleResize);\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {\n        id: \"about\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {\n                children: \"About Me\"\n            }, void 0, false, {\n                fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {\n                ref: carouselRef,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function(param, index) {\n                        var year = param.year;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {\n                            final: index === TOTAL_CAROUSEL_COUNT - 1,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {\n                                index: index,\n                                id: \"carousel_item-\".concat(index),\n                                active: activeItem,\n                                onClick: function(e) {\n                                    return handleClick(e, index);\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {\n                                    children: [\n                                        year,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemImg, {\n                                            width: \"208\",\n                                            height: \"6\",\n                                            viewBox: \"0 0 208 6\",\n                                            fill: \"none\",\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    \"fill-rule\": \"evenodd\",\n                                                    \"clip-rule\": \"evenodd\",\n                                                    d: \"M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z\",\n                                                    fill: \"url(#paint0_linear)\",\n                                                    \"fill-opacity\": \"0.33\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"linearGradient\", {\n                                                        id: \"paint0_linear\",\n                                                        x1: \"-4.30412e-10\",\n                                                        y1: \"0.5\",\n                                                        x2: \"208\",\n                                                        y2: \"0.500295\",\n                                                        gradientUnits: \"userSpaceOnUse\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                                                \"stop-color\": \"white\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                                                                lineNumber: 103,\n                                                                columnNumber: 25\n                                                            }, _this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                                                offset: \"0.79478\",\n                                                                \"stop-color\": \"white\",\n                                                                \"stop-opacity\": \"0\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                                                                lineNumber: 104,\n                                                                columnNumber: 25\n                                                            }, _this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                                                        lineNumber: 95,\n                                                        columnNumber: 23\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                                lineNumber: 72,\n                                columnNumber: 15\n                            }, _this)\n                        }, index, false, {\n                            fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {\n                children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function(item, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {\n                        index: index,\n                        active: activeItem,\n                        onClick: function(e) {\n                            return handleClick(e, index);\n                        },\n                        type: \"button\"\n                    }, index, false, {\n                        fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, _this);\n};\n_s(Timeline, \"a+t1PkU1ZAnxlluRA0eiChBXU3s=\");\n_c = Timeline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\nvar _c;\n$RefreshReg$(_c, \"Timeline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLE1BQUk7Z0VBQUNDLFlBQVUsRUFBQyxPQUFPOzs7OztxRUFBRzswRUFDM0IsOERBQUNELE1BQUk7Z0VBQ0hFLE1BQU0sRUFBQyxTQUFTO2dFQUNoQkQsWUFBVSxFQUFDLE9BQU87Z0VBQ2xCRSxjQUFZLEVBQUMsR0FBRzs7Ozs7cUVBQ2hCOzs7Ozs7NkRBQ2E7Ozs7O3lEQUNaOzs7Ozs7aURBQ1M7Ozs7Ozt5Q0FDQTs7Ozs7cUNBQ1A7MkJBNUNWekIsS0FBSzs7OztpQ0E2Q2U7cUJBQzVCLENBQUM7aUNBQ0Q7Ozs7O3FCQUNlOzBCQUNwQiw4REFBQy9CLDREQUFlOzBCQUNiVyxrRUFBZ0IsQ0FBQyxTQUFDOEMsSUFBSSxFQUFFMUIsS0FBSzt5Q0FDNUIsOERBQUNqQywyREFBYzt3QkFFZmlDLEtBQUssRUFBRUEsS0FBSzt3QkFDWkcsTUFBTSxFQUFFbkIsVUFBVTt3QkFDbEJvQixPQUFPLEVBQUUsU0FBQ2hCLENBQUM7bUNBQUdELFdBQVcsQ0FBQ0MsQ0FBQyxFQUFFWSxLQUFLLENBQUM7eUJBQUE7d0JBQ25DMkIsSUFBSSxFQUFDLFFBQVE7dUJBSlIzQixLQUFLOzs7OzZCQUtSO2lCQUNILENBQUM7Ozs7O3FCQUNjOzs7Ozs7YUFDVixDQUNWO0FBQ0osQ0FBQztHQTNHS2pCLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQTZHZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RpbWVMaW5lL1RpbWVMaW5lLmpzPzkxMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICBDYXJvdXNlbEJ1dHRvbixcbiAgQ2Fyb3VzZWxCdXR0b25Eb3QsXG4gIENhcm91c2VsQnV0dG9ucyxcbiAgQ2Fyb3VzZWxDb250YWluZXIsXG4gIENhcm91c2VsSXRlbSxcbiAgQ2Fyb3VzZWxJdGVtSW1nLFxuICBDYXJvdXNlbEl0ZW1UZXh0LFxuICBDYXJvdXNlbEl0ZW1UaXRsZSxcbiAgQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlLFxufSBmcm9tIFwiLi9UaW1lTGluZVN0eWxlc1wiO1xuaW1wb3J0IHtcbiAgU2VjdGlvbixcbiAgU2VjdGlvbkRpdmlkZXIsXG4gIFNlY3Rpb25UZXh0LFxuICBTZWN0aW9uVGl0bGUsXG59IGZyb20gXCIuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50c1wiO1xuaW1wb3J0IHsgVGltZUxpbmVEYXRhIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9jb25zdGFudHNcIjtcblxuY29uc3QgVE9UQUxfQ0FST1VTRUxfQ09VTlQgPSBUaW1lTGluZURhdGEubGVuZ3RoO1xuXG5jb25zdCBUaW1lbGluZSA9ICgpID0+IHtcbiAgY29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGNhcm91c2VsUmVmID0gdXNlUmVmKCk7XG5cbiAgLy8gY29uc3Qgc2Nyb2xsID0gKG5vZGUsIGxlZnQpID0+IHtcbiAgLy8gICByZXR1cm4gbm9kZS5zY3JvbGxUbyh7IGxlZnQsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgLy8gfVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIGkpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xuICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IE1hdGguZmxvb3IoXG4gICAgICAgIGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcgKiAoaSAvIFRpbWVMaW5lRGF0YS5sZW5ndGgpXG4gICAgICApO1xuXG4gICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgc2Nyb2xsTGVmdCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgLy8gICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xuICAvLyAgICAgY29uc3QgaW5kZXggPSBNYXRoLnJvdW5kKChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbExlZnQgLyAoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxXaWR0aCAqIDAuNykpICogVGltZUxpbmVEYXRhLmxlbmd0aCk7XG5cbiAgLy8gICAgIHNldEFjdGl2ZUl0ZW0oaW5kZXgpO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIC8vIHNuYXAgYmFjayB0byBiZWdpbm5pbmcgb2Ygc2Nyb2xsIHdoZW4gd2luZG93IGlzIHJlc2l6ZWRcbiAgLy8gLy8gYXZvaWRzIGEgYnVnIHdoZXJlIGNvbnRlbnQgaXMgY292ZXJlZCB1cCBpZiBjb21pbmcgZnJvbSBzbWFsbGVyIHNjcmVlblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgLy8gICAgIHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCAwKTtcbiAgLy8gICB9XG5cbiAgLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgLy8gfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24gaWQ9XCJhYm91dFwiPlxuICAgICAgPFNlY3Rpb25UZXh0PkFib3V0IE1lPC9TZWN0aW9uVGV4dD5cbiAgICAgIDxDYXJvdXNlbENvbnRhaW5lciByZWY9e2Nhcm91c2VsUmVmfT5cbiAgICAgICAgPD5cbiAgICAgICAgICB7VGltZUxpbmVEYXRhLm1hcCgoeyB5ZWFyIH0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8Q2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGZpbmFsPXtpbmRleCA9PT0gVE9UQUxfQ0FST1VTRUxfQ09VTlQgLSAxfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtXG4gICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgIGlkPXtgY2Fyb3VzZWxfaXRlbS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtVGl0bGU+XG4gICAgICAgICAgICAgICAgICB7eWVhcn1cbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1JbWdcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDhcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMDggNlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xpcC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0yLjUgNS41QzMuODgwNzEgNS41IDUgNC4zODA3MSA1IDNWMy41TDIwOCAzLjUwMDAyVjIuNTAwMDJMNSAyLjVWM0M1IDEuNjE5MjkgMy44ODA3MSAwLjUgMi41IDAuNUMxLjExOTI5IDAuNSAwIDEuNjE5MjkgMCAzQzAgNC4zODA3MSAxLjExOTI5IDUuNSAyLjUgNS41WlwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cInVybCgjcGFpbnQwX2xpbmVhcilcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGwtb3BhY2l0eT1cIjAuMzNcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFpbnQwX2xpbmVhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB4MT1cIi00LjMwNDEyZS0xMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB5MT1cIjAuNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB4Mj1cIjIwOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB5Mj1cIjAuNTAwMjk1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj1cIndoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD1cIjAuNzk0NzhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wLW9wYWNpdHk9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW1JbWc+XG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW1UaXRsZT5cbiAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XG4gICAgICAgICAgICA8L0Nhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgICA8L0Nhcm91c2VsQ29udGFpbmVyPlxuICAgICAgPENhcm91c2VsQnV0dG9ucz5cbiAgICAgICAge1RpbWVMaW5lRGF0YS5tYXAoKGl0ZW0sIGluZGV4KT0+KFxuICAgICAgICAgIDxDYXJvdXNlbEJ1dHRvblxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbX1cbiAgICAgICAgICBvbkNsaWNrPXsoZSk9PmhhbmRsZUNsaWNrKGUsIGluZGV4KX1cbiAgICAgICAgICB0eXBlPSdidXR0b24nIFxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9DYXJvdXNlbEJ1dHRvbnM+XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIkNhcm91c2VsQnV0dG9uIiwiQ2Fyb3VzZWxCdXR0b25Eb3QiLCJDYXJvdXNlbEJ1dHRvbnMiLCJDYXJvdXNlbENvbnRhaW5lciIsIkNhcm91c2VsSXRlbSIsIkNhcm91c2VsSXRlbUltZyIsIkNhcm91c2VsSXRlbVRleHQiLCJDYXJvdXNlbEl0ZW1UaXRsZSIsIkNhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSIsIlNlY3Rpb24iLCJTZWN0aW9uRGl2aWRlciIsIlNlY3Rpb25UZXh0IiwiU2VjdGlvblRpdGxlIiwiVGltZUxpbmVEYXRhIiwiVE9UQUxfQ0FST1VTRUxfQ09VTlQiLCJsZW5ndGgiLCJUaW1lbGluZSIsImFjdGl2ZUl0ZW0iLCJzZXRBY3RpdmVJdGVtIiwiY2Fyb3VzZWxSZWYiLCJoYW5kbGVDbGljayIsImUiLCJpIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50Iiwic2Nyb2xsTGVmdCIsIk1hdGgiLCJmbG9vciIsInNjcm9sbFdpZHRoIiwic2Nyb2xsIiwiaWQiLCJyZWYiLCJtYXAiLCJpbmRleCIsInllYXIiLCJmaW5hbCIsImFjdGl2ZSIsIm9uQ2xpY2siLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJwYXRoIiwiZmlsbC1ydWxlIiwiY2xpcC1ydWxlIiwiZCIsImZpbGwtb3BhY2l0eSIsImRlZnMiLCJsaW5lYXJHcmFkaWVudCIsIngxIiwieTEiLCJ4MiIsInkyIiwiZ3JhZGllbnRVbml0cyIsInN0b3AiLCJzdG9wLWNvbG9yIiwib2Zmc2V0Iiwic3RvcC1vcGFjaXR5IiwiaXRlbSIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TimeLine/TimeLine.js\n"));

/***/ })

});