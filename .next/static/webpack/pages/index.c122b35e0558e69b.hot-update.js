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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ \"./src/components/TimeLine/TimeLineStyles.js\");\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;\nvar Timeline = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), activeItem = ref[0], setActiveItem = ref[1];\n    var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    // const scroll = (node, left) => {\n    //   return node.scrollTo({ left, behavior: 'smooth' });\n    // }\n    // const handleClick = (e, i) => {\n    //   e.preventDefault();\n    //   if (carouselRef.current) {\n    //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));\n    //     scroll(carouselRef.current, scrollLeft);\n    //   }\n    // }\n    // const handleScroll = () => {\n    //   if (carouselRef.current) {\n    //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);\n    //     setActiveItem(index);\n    //   }\n    // }\n    // // snap back to beginning of scroll when window is resized\n    // // avoids a bug where content is covered up if coming from smaller screen\n    // useEffect(() => {\n    //   const handleResize = () => {\n    //     scroll(carouselRef.current, 0);\n    //   }\n    //   window.addEventListener('resize', handleResize);\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {\n        id: \"about\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {\n                children: \"About Me\"\n            }, void 0, false, {\n                fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {\n                ref: carouselRef,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function(item, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {\n                            final: index === TOTAL_CAROUSEL_COUNT - 1,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {\n                                index: index,\n                                id: \"carousel_item-\".concat(index),\n                                active: activeItem,\n                                onClick: function(e) {\n                                    return handleClick(e, index);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                                lineNumber: 70,\n                                columnNumber: 15\n                            }, _this)\n                        }, index, false, {\n                            fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/stephennwachukwu/Desktop/Projects/myPortfolio/src/components/TimeLine/TimeLine.js\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, _this);\n};\n_s(Timeline, \"a+t1PkU1ZAnxlluRA0eiChBXU3s=\");\n_c = Timeline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\nvar _c;\n$RefreshReg$(_c, \"Timeline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7QUFBMkQ7QUFZakM7QUFNYTtBQUNrQjtBQUV6RCxJQUFNa0Isb0JBQW9CLEdBQUdELHFFQUFtQjtBQUVoRCxJQUFNRyxRQUFRLEdBQUcsV0FBTTs7SUFDckIsSUFBb0NuQixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQXhDb0IsVUFBVSxHQUFtQnBCLEdBQVcsR0FBOUIsRUFBRXFCLGFBQWEsR0FBSXJCLEdBQVcsR0FBZjtJQUNoQyxJQUFNc0IsV0FBVyxHQUFHckIsNkNBQU0sRUFBRTtJQUU1QixtQ0FBbUM7SUFDbkMsd0RBQXdEO0lBQ3hELElBQUk7SUFFSixrQ0FBa0M7SUFDbEMsd0JBQXdCO0lBRXhCLCtCQUErQjtJQUMvQix3R0FBd0c7SUFFeEcsK0NBQStDO0lBQy9DLE1BQU07SUFDTixJQUFJO0lBRUosK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQixrSUFBa0k7SUFFbEksNEJBQTRCO0lBQzVCLE1BQU07SUFDTixJQUFJO0lBRUosNkRBQTZEO0lBQzdELDRFQUE0RTtJQUM1RSxvQkFBb0I7SUFDcEIsaUNBQWlDO0lBQ2pDLHNDQUFzQztJQUN0QyxNQUFNO0lBRU4scURBQXFEO0lBQ3JELFVBQVU7SUFFVixxQkFDRSw4REFBQ1csNkRBQU87UUFBQ1csRUFBRSxFQUFDLE9BQU87OzBCQUNqQiw4REFBQ1QsaUVBQVc7MEJBQUMsVUFBUTs7Ozs7cUJBQWM7MEJBQ25DLDhEQUFDUiw4REFBaUI7Z0JBQUNrQixHQUFHLEVBQUVGLFdBQVc7MEJBQ2pDOzhCQUNHTixrRUFBZ0IsQ0FBQyxTQUFDVSxJQUFJLEVBQUVDLEtBQUs7NkNBQzVCLDhEQUFDaEIscUVBQXdCOzRCQUV2QmlCLEtBQUssRUFBRUQsS0FBSyxLQUFLVixvQkFBb0IsR0FBRyxDQUFDO3NDQUV6Qyw0RUFBQ1YseURBQVk7Z0NBQ1hvQixLQUFLLEVBQUVBLEtBQUs7Z0NBQ1pKLEVBQUUsRUFBRSxnQkFBZSxDQUFRLE9BQU5JLEtBQUssQ0FBRTtnQ0FDNUJFLE1BQU0sRUFBRVQsVUFBVTtnQ0FDbEJVLE9BQU8sRUFBRSxTQUFDQyxDQUFDOzJDQUFLQyxXQUFXLENBQUNELENBQUMsRUFBRUosS0FBSyxDQUFDO2lDQUFBOzs7OztxQ0FDdkI7MkJBUlhBLEtBQUs7Ozs7aUNBU2U7cUJBQzVCLENBQUM7aUNBQ0Q7Ozs7O3FCQUNlOzs7Ozs7YUFDWixDQUNWO0FBQ0osQ0FBQztHQTFES1IsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBNERkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmUuanM/OTEwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gIENhcm91c2VsQnV0dG9uLFxuICBDYXJvdXNlbEJ1dHRvbkRvdCxcbiAgQ2Fyb3VzZWxCdXR0b25zLFxuICBDYXJvdXNlbENvbnRhaW5lcixcbiAgQ2Fyb3VzZWxJdGVtLFxuICBDYXJvdXNlbEl0ZW1JbWcsXG4gIENhcm91c2VsSXRlbVRleHQsXG4gIENhcm91c2VsSXRlbVRpdGxlLFxuICBDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGUsXG59IGZyb20gXCIuL1RpbWVMaW5lU3R5bGVzXCI7XG5pbXBvcnQge1xuICBTZWN0aW9uLFxuICBTZWN0aW9uRGl2aWRlcixcbiAgU2VjdGlvblRleHQsXG4gIFNlY3Rpb25UaXRsZSxcbn0gZnJvbSBcIi4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzXCI7XG5pbXBvcnQgeyBUaW1lTGluZURhdGEgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50c1wiO1xuXG5jb25zdCBUT1RBTF9DQVJPVVNFTF9DT1VOVCA9IFRpbWVMaW5lRGF0YS5sZW5ndGg7XG5cbmNvbnN0IFRpbWVsaW5lID0gKCkgPT4ge1xuICBjb25zdCBbYWN0aXZlSXRlbSwgc2V0QWN0aXZlSXRlbV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgY2Fyb3VzZWxSZWYgPSB1c2VSZWYoKTtcblxuICAvLyBjb25zdCBzY3JvbGwgPSAobm9kZSwgbGVmdCkgPT4ge1xuICAvLyAgIHJldHVybiBub2RlLnNjcm9sbFRvKHsgbGVmdCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAvLyB9XG5cbiAgLy8gY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSwgaSkgPT4ge1xuICAvLyAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAvLyAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XG4gIC8vICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gTWF0aC5mbG9vcihjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43ICogKGkgLyBUaW1lTGluZURhdGEubGVuZ3RoKSk7XG5cbiAgLy8gICAgIHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCBzY3JvbGxMZWZ0KTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICAvLyBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gIC8vICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcbiAgLy8gICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZCgoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC8gKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcpKSAqIFRpbWVMaW5lRGF0YS5sZW5ndGgpO1xuXG4gIC8vICAgICBzZXRBY3RpdmVJdGVtKGluZGV4KTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICAvLyAvLyBzbmFwIGJhY2sgdG8gYmVnaW5uaW5nIG9mIHNjcm9sbCB3aGVuIHdpbmRvdyBpcyByZXNpemVkXG4gIC8vIC8vIGF2b2lkcyBhIGJ1ZyB3aGVyZSBjb250ZW50IGlzIGNvdmVyZWQgdXAgaWYgY29taW5nIGZyb20gc21hbGxlciBzY3JlZW5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gIC8vICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgMCk7XG4gIC8vICAgfVxuXG4gIC8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gIC8vIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uIGlkPVwiYWJvdXRcIj5cbiAgICAgIDxTZWN0aW9uVGV4dD5BYm91dCBNZTwvU2VjdGlvblRleHQ+XG4gICAgICA8Q2Fyb3VzZWxDb250YWluZXIgcmVmPXtjYXJvdXNlbFJlZn0+XG4gICAgICAgIDw+XG4gICAgICAgICAge1RpbWVMaW5lRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8Q2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGZpbmFsPXtpbmRleCA9PT0gVE9UQUxfQ0FST1VTRUxfQ09VTlQgLSAxfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtXG4gICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgIGlkPXtgY2Fyb3VzZWxfaXRlbS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9XG4gICAgICAgICAgICAgID48L0Nhcm91c2VsSXRlbT5cbiAgICAgICAgICAgIDwvQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlPlxuICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICAgIDwvQ2Fyb3VzZWxDb250YWluZXI+XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIkNhcm91c2VsQnV0dG9uIiwiQ2Fyb3VzZWxCdXR0b25Eb3QiLCJDYXJvdXNlbEJ1dHRvbnMiLCJDYXJvdXNlbENvbnRhaW5lciIsIkNhcm91c2VsSXRlbSIsIkNhcm91c2VsSXRlbUltZyIsIkNhcm91c2VsSXRlbVRleHQiLCJDYXJvdXNlbEl0ZW1UaXRsZSIsIkNhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSIsIlNlY3Rpb24iLCJTZWN0aW9uRGl2aWRlciIsIlNlY3Rpb25UZXh0IiwiU2VjdGlvblRpdGxlIiwiVGltZUxpbmVEYXRhIiwiVE9UQUxfQ0FST1VTRUxfQ09VTlQiLCJsZW5ndGgiLCJUaW1lbGluZSIsImFjdGl2ZUl0ZW0iLCJzZXRBY3RpdmVJdGVtIiwiY2Fyb3VzZWxSZWYiLCJpZCIsInJlZiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImZpbmFsIiwiYWN0aXZlIiwib25DbGljayIsImUiLCJoYW5kbGVDbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TimeLine/TimeLine.js\n"));

/***/ })

});