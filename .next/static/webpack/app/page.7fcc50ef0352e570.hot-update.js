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

/***/ "(app-pages-browser)/./src/components/home/Navbar.js":
/*!***************************************!*\
  !*** ./src/components/home/Navbar.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search */ \"(app-pages-browser)/./src/components/home/Search.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Navbar() {\n    _s();\n    const item = (name, link)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: \"p-8 flex items-center text-white\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: link,\n                className: \"flex items-center text-lg hover:text-gray-500 2xl:text-2xl laptop:text-lg font-bold\",\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/albertogarcia/Public/vscode/OEVP/src/components/home/Navbar.js\",\n                lineNumber: 10,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/albertogarcia/Public/vscode/OEVP/src/components/home/Navbar.js\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, this);\n    };\n    const logoref = \"/evp-logo.png\";\n    const icon = \"/down.svg\";\n    const [menuVisible, setMenuVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const toggleMenu = ()=>{\n        setMenuVisible(!menuVisible);\n        console.log(\"Icon toggled!\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex flex-row bg-[#003A70] text-white\",\n        style: {\n            height: '100px'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/\",\n                className: \"basis-1/6 flex justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: logoref,\n                    alt: \"Logo\",\n                    className: \"block\",\n                    style: {\n                        width: \"20vh\",\n                        height: \"15vh\",\n                        objectFit: \"contain\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/albertogarcia/Public/vscode/OEVP/src/components/home/Navbar.js\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/albertogarcia/Public/vscode/OEVP/src/components/home/Navbar.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"basis-2/3  flex flex-row justify-center text-white self-center\",\n                children: [\n                    item(\"Home\", \"/\"),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"relative p-8 flex items-center text-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: toggleMenu,\n                                className: \"flex items-center text-lg hover:text-gray-500 2xl:text-2xl laptop:text-lg font-bold   bg-transparent\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"px-1 w-[25px]\",\n                                        src: icon,\n                                        alt: \"Toggle icon\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/albertogarcia/Public/vscode/OEVP/src/components/home/Navbar.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 25\n                                    }, this),\n                                    \"Offices\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/albertogarcia/Public/vscode/OEVP/src/components/home/Navbar.js\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            }, this),\n                            menuVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg w-48\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"px-4 py-2  rounded-lg  hover:bg-gray-200\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/offices/2024\",\n                                        children: \"2024-2025\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/albertogarcia/Public/vscode/OEVP/src/components/home/Navbar.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/albertogarcia/Public/vscode/OEVP/src/components/home/Navbar.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/albertogarcia/Public/vscode/OEVP/src/components/home/Navbar.js\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/albertogarcia/Public/vscode/OEVP/src/components/home/Navbar.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    item(\"Resources\", \"/resources\"),\n                    item(\"Partnerships\", \"/partnerships\"),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"relative p-8 flex items-center text-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: toggleMenu,\n                                className: \"flex items-center text-lg hover:text-gray-500 2xl:text-2xl laptop:text-lg font-bold   bg-transparent\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"px-1 w-[25px]\",\n                                        src: icon,\n                                        alt: \"Toggle icon\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/albertogarcia/Public/vscode/OEVP/src/components/home/Navbar.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 25\n                                    }, this),\n                                    \"Offices\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/albertogarcia/Public/vscode/OEVP/src/components/home/Navbar.js\",\n                                lineNumber: 66,\n                                columnNumber: 21\n                            }, this),\n                            menuVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg w-48\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"px-4 py-2  rounded-lg  hover:bg-gray-200\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/offices/2024\",\n                                        children: \"2024-2025\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/albertogarcia/Public/vscode/OEVP/src/components/home/Navbar.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/albertogarcia/Public/vscode/OEVP/src/components/home/Navbar.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/albertogarcia/Public/vscode/OEVP/src/components/home/Navbar.js\",\n                                lineNumber: 74,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/albertogarcia/Public/vscode/OEVP/src/components/home/Navbar.js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"flex items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"rounded-md font-bold hover:bg-gray-200 text-lg 2xl:text-2xl bg-[#265885] block text-white px-4 py-2 flex items-center\",\n                            children: \"Partner With Us\"\n                        }, void 0, false, {\n                            fileName: \"/Users/albertogarcia/Public/vscode/OEVP/src/components/home/Navbar.js\",\n                            lineNumber: 84,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/albertogarcia/Public/vscode/OEVP/src/components/home/Navbar.js\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/albertogarcia/Public/vscode/OEVP/src/components/home/Navbar.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"basis-1/6 flex justify-center items-center  text-gray-800 font-bold\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Search__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/albertogarcia/Public/vscode/OEVP/src/components/home/Navbar.js\",\n                    lineNumber: 94,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/albertogarcia/Public/vscode/OEVP/src/components/home/Navbar.js\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/albertogarcia/Public/vscode/OEVP/src/components/home/Navbar.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_s(Navbar, \"S8fHTNgi/KNDbc3f2iwwwdPIbEc=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hvbWUvTmF2YmFyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDaUM7QUFDQTtBQUdsQixTQUFTRTs7SUFDcEIsTUFBTUMsT0FBTyxDQUFDQyxNQUFNQztRQUNoQixxQkFDSSw4REFBQ0M7WUFBR0MsV0FBVTtzQkFDViw0RUFBQ0M7Z0JBQUVDLE1BQU1KO2dCQUFNRSxXQUFVOzBCQUNwQkg7Ozs7Ozs7Ozs7O0lBSWpCO0lBRUEsTUFBTU0sVUFBVTtJQUNoQixNQUFNQyxPQUFPO0lBRWIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdaLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1hLGFBQWE7UUFDZkQsZUFBZSxDQUFDRDtRQUNoQkcsUUFBUUMsR0FBRyxDQUFDO0lBRWQ7SUFFRixxQkFDSSw4REFBQ0M7UUFBSVYsV0FBVTtRQUF3Q1csT0FBTztZQUFDQyxRQUFPO1FBQU87OzBCQUN6RSw4REFBQ1g7Z0JBQUVDLE1BQUs7Z0JBQUlGLFdBQVU7MEJBQ2xCLDRFQUFDYTtvQkFDT0MsS0FBS1g7b0JBQ0xZLEtBQUk7b0JBQ0pmLFdBQVU7b0JBQ1ZXLE9BQU87d0JBQ0hLLE9BQU87d0JBQ1BKLFFBQVE7d0JBQ1JLLFdBQVc7b0JBQ2Y7Ozs7Ozs7Ozs7OzBCQUdaLDhEQUFDQztnQkFBR2xCLFdBQVU7O29CQUNUSixLQUFLLFFBQVE7a0NBRWQsOERBQUNHO3dCQUFHQyxXQUFVOzswQ0FDViw4REFBQ21CO2dDQUNHQyxTQUFTYjtnQ0FDVFAsV0FBVTs7a0RBRVYsOERBQUNhO3dDQUFJYixXQUFVO3dDQUFnQmMsS0FBS1Y7d0NBQU1XLEtBQUk7Ozs7OztvQ0FBZ0I7Ozs7Ozs7NEJBR2pFViw2QkFDRyw4REFBQ2E7Z0NBQUdsQixXQUFVOzBDQUNWLDRFQUFDRDtvQ0FBR0MsV0FBVTs4Q0FDViw0RUFBQ0M7d0NBQUVDLE1BQUs7a0RBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQU92Q04sS0FBSyxhQUFhO29CQUNsQkEsS0FBSyxnQkFBZ0I7a0NBRXRCLDhEQUFDRzt3QkFBR0MsV0FBVTs7MENBQ1YsOERBQUNtQjtnQ0FDR0MsU0FBU2I7Z0NBQ1RQLFdBQVU7O2tEQUVWLDhEQUFDYTt3Q0FBSWIsV0FBVTt3Q0FBZ0JjLEtBQUtWO3dDQUFNVyxLQUFJOzs7Ozs7b0NBQWdCOzs7Ozs7OzRCQUdqRVYsNkJBQ0csOERBQUNhO2dDQUFHbEIsV0FBVTswQ0FDViw0RUFBQ0Q7b0NBQUdDLFdBQVU7OENBQ1YsNEVBQUNDO3dDQUFFQyxNQUFLO2tEQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FPeEMsOERBQUNIO3dCQUFHQyxXQUFVO2tDQUNWLDRFQUFDbUI7NEJBQ0duQixXQUFVO3NDQUF3SDs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBUTlJLDhEQUFDQztnQkFBRUQsV0FBVTswQkFDYiw0RUFBQ1AsK0NBQVNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBT3RCO0dBL0Z3QkU7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGJlcnRvZ2FyY2lhL1B1YmxpYy92c2NvZGUvT0VWUC9zcmMvY29tcG9uZW50cy9ob21lL05hdmJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuL1NlYXJjaFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XG4gICAgY29uc3QgaXRlbSA9IChuYW1lLCBsaW5rKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicC04IGZsZXggaXRlbXMtY2VudGVyIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtsaW5rfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWxnIGhvdmVyOnRleHQtZ3JheS01MDAgMnhsOnRleHQtMnhsIGxhcHRvcDp0ZXh0LWxnIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbG9nb3JlZiA9IFwiL2V2cC1sb2dvLnBuZ1wiICAgXG4gICAgY29uc3QgaWNvbiA9IFwiL2Rvd24uc3ZnXCJcblxuICAgIGNvbnN0IFttZW51VmlzaWJsZSwgc2V0TWVudVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgICAgIHNldE1lbnVWaXNpYmxlKCFtZW51VmlzaWJsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSWNvbiB0b2dnbGVkIVwiKTsgXG5cbiAgICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgYmctWyMwMDNBNzBdIHRleHQtd2hpdGVcIiBzdHlsZT17e2hlaWdodDonMTAwcHgnfX0+XG4gICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImJhc2lzLTEvNiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bG9nb3JlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMHZoXCIsIC8vIFNldCB0aGUgZGVzaXJlZCB3aWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNXZoXCIsIC8vIFNldCB0aGUgZGVzaXJlZCBoZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY29udGFpblwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYmFzaXMtMi8zICBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgc2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7aXRlbShcIkhvbWVcIiwgXCIvXCIpfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBwLTggZmxleCBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNZW51fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1sZyBob3Zlcjp0ZXh0LWdyYXktNTAwIDJ4bDp0ZXh0LTJ4bCBsYXB0b3A6dGV4dC1sZyBmb250LWJvbGQgICBiZy10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHgtMSB3LVsyNXB4XVwiIHNyYz17aWNvbn0gYWx0PVwiVG9nZ2xlIGljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgT2ZmaWNlc1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAge21lbnVWaXNpYmxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtZnVsbCBsZWZ0LTAgbXQtMiBiZy13aGl0ZSB0ZXh0LWJsYWNrIHJvdW5kZWQtbGcgc2hhZG93LWxnIHctNDhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHgtNCBweS0yICByb3VuZGVkLWxnICBob3ZlcjpiZy1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL29mZmljZXMvMjAyNFwiPjIwMjQtMjAyNTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuXG5cbiAgICAgICAgICAgICAgICB7aXRlbShcIlJlc291cmNlc1wiLCBcIi9yZXNvdXJjZXNcIil9XG4gICAgICAgICAgICAgICAge2l0ZW0oXCJQYXJ0bmVyc2hpcHNcIiwgXCIvcGFydG5lcnNoaXBzXCIpfVxuXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJlbGF0aXZlIHAtOCBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWxnIGhvdmVyOnRleHQtZ3JheS01MDAgMnhsOnRleHQtMnhsIGxhcHRvcDp0ZXh0LWxnIGZvbnQtYm9sZCAgIGJnLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJweC0xIHctWzI1cHhdXCIgc3JjPXtpY29ufSBhbHQ9XCJUb2dnbGUgaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBPZmZpY2VzXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB7bWVudVZpc2libGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC1mdWxsIGxlZnQtMCBtdC0yIGJnLXdoaXRlIHRleHQtYmxhY2sgcm91bmRlZC1sZyBzaGFkb3ctbGcgdy00OFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJweC00IHB5LTIgIHJvdW5kZWQtbGcgIGhvdmVyOmJnLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvb2ZmaWNlcy8yMDI0XCI+MjAyNC0yMDI1PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvbGk+XG5cblxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGZvbnQtYm9sZCBob3ZlcjpiZy1ncmF5LTIwMCB0ZXh0LWxnIDJ4bDp0ZXh0LTJ4bCBiZy1bIzI2NTg4NV0gYmxvY2sgdGV4dC13aGl0ZSBweC00IHB5LTIgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBhcnRuZXIgV2l0aCBVc1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJhc2lzLTEvNiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAgdGV4dC1ncmF5LTgwMCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgIDxTZWFyY2hCYXIgLz5cbiAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgXG4gICAgICAgIDwvbmF2PiApO1xuICAgIFxuICAgIFxufVxuXG4iXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwidXNlU3RhdGUiLCJOYXZiYXIiLCJpdGVtIiwibmFtZSIsImxpbmsiLCJsaSIsImNsYXNzTmFtZSIsImEiLCJocmVmIiwibG9nb3JlZiIsImljb24iLCJtZW51VmlzaWJsZSIsInNldE1lbnVWaXNpYmxlIiwidG9nZ2xlTWVudSIsImNvbnNvbGUiLCJsb2ciLCJuYXYiLCJzdHlsZSIsImhlaWdodCIsImltZyIsInNyYyIsImFsdCIsIndpZHRoIiwib2JqZWN0Rml0IiwidWwiLCJidXR0b24iLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/home/Navbar.js\n"));

/***/ })

});