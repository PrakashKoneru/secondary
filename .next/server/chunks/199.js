exports.id = 199;
exports.ids = [199];
exports.modules = {

/***/ 5529:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ThemeContext": function() { return /* binding */ ThemeContext; },
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
// EXTERNAL MODULE: external "@chakra-ui/theme-tools"
var theme_tools_ = __webpack_require__(8547);
;// CONCATENATED MODULE: ./styles/components/container.js
const Container = {
  baseStyle: {
    margin: 'auto',
    maxW: {
      lg: '1300px',
      sm: 'none'
    },
    w: '100%'
  }
};
/* harmony default export */ var container = (Container);
;// CONCATENATED MODULE: ./styles/components/button.js
const Button = {
  baseStyle: {
    padding: '5px',
    backgroundColor: 'primary',
    color: 'white',
    borderRadius: '2.5px'
  },
  variants: {
    text: {
      padding: '0px !important',
      backgroundColor: 'transparent'
    },
    transparent: {
      backgroundColor: 'transparent',
      border: '1px solid primary'
    },
    loanCard: {
      borderRadius: '5px',
      textAlign: 'center',
      padding: '5px 15px',
      cursor: 'pointer',
      border: `1px solid rgba(224,210,210, 0.6)`
    }
  }
};
/* harmony default export */ var components_button = (Button);
;// CONCATENATED MODULE: ./styles/components/link.js
const Link = {
  baseStyle: {
    _hover: {
      textDecoration: 'none'
    },
    _focus: {
      boxShadow: 'none'
    }
  },
  variants: {
    navLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: "0 20px",
      h: "100%",
      _hover: {
        backgroundColor: '#EBEDF7'
      }
    }
  }
};
/* harmony default export */ var components_link = (Link);
;// CONCATENATED MODULE: ./styles/components/input.js
const Input = {
  baseStyle: {
    padding: '5px',
    backgroundColor: 'white',
    border: '1px solid #BFBFBF',
    borderColor: '#BFBFBF !important',
    borderRadius: '3px',
    outline: '1px solid #495FBF'
  },
  variants: {
    error: {
      border: '1px solid red'
    }
  }
};
/* harmony default export */ var input = (Input);
;// CONCATENATED MODULE: ./styles/components/checkbox.js
const Checkbox = {
  baseStyle: {
    padding: '5px',
    backgroundColor: 'white',
    borderRadius: '3px',
    colorScheme: 'red'
  },
  variants: {
    error: {
      border: '1px solid red',
      colorScheme: 'red'
    }
  }
};
/* harmony default export */ var components_checkbox = (Checkbox);
;// CONCATENATED MODULE: ./styles/components/componentStyles.js





const components = {
  Container: container,
  Button: components_button,
  Link: components_link,
  Input: input,
  Checkbox: components_checkbox
};
/* harmony default export */ var componentStyles = (components);
;// CONCATENATED MODULE: ./styles/theme.js


const theme = {
  colors: {
    primary: '#495FBF',
    secondary: '#19858F',
    mustard: '#FF7D00',
    red: '#FA1103',
    darkGreen: '#179942',
    lightGreen: '#01E4AA',
    pink: '#FD998A',
    gray: '#BFBFBF',
    grayLight: '#ebebeb',
    white: '#fff',
    black: '#000',
    bgBlue: '#DBF6F8'
  },
  fontSizes: {
    large: '3rem',
    medium: '2rem',
    regular: '1rem',
    small: '0.75rem',
    xsmall: '0.5rem'
  },
  components: componentStyles,
  breakpoints: (0,theme_tools_.createBreakpoints)({
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px"
  })
};
/* harmony default export */ var styles_theme = (theme);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./pages/components/header.js
var header = __webpack_require__(6793);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: ./pages/components/reUsable/login.js
var login = __webpack_require__(9311);
;// CONCATENATED MODULE: ./pages/_app.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const themeHelper = (0,react_.extendTheme)(_objectSpread({}, styles_theme));
const ThemeContext = /*#__PURE__*/external_react_default().createContext(themeHelper);

function MyApp({
  Component,
  pageProps
}) {
  const router = (0,router_.useRouter)();
  const isLoggedIn = external_js_cookie_default().get('pToken'); // router.push('/loans');
  // useEffect(() => {
  //   if(!isLoggedIn) {
  //     router.push('/')
  //   } else {
  //     router.push('/loans')
  //   }
  // }, [])

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Paisa"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        href: "/clockLogo4x.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.ChakraProvider, {
      theme: themeHelper,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ThemeContext.Provider, {
        value: themeHelper,
        children: [/*#__PURE__*/jsx_runtime_.jsx(header.default, {
          h: "75px"
        }), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
      })
    })]
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 9311:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5529);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3426);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2662);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function Login() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();
  const {
    0: submissionError,
    1: setSubmissionError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const postSignInData = ({
    email,
    password
  }) => {
    setSubmissionError(false);
    const baseURL = '/secondary/secondaryLenders/auth/login';
    axios__WEBPACK_IMPORTED_MODULE_5___default().post(baseURL, {
      email,
      password
    }).then(({
      data
    }) => {
      js_cookie__WEBPACK_IMPORTED_MODULE_6___default().set('pToken', data.pToken);
      router.push('/secondary/loans');
    }).catch(error => {
      error.response && setSubmissionError(error.response.data);
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app__WEBPACK_IMPORTED_MODULE_2__.ThemeContext.Consumer, {
    children: theme => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
        id: "loanFlex",
        bg: theme.colors.bgBlue,
        h: "calc(100vh - 100px)",
        w: "100%",
        alignItems: "center",
        justifyContent: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
          onSubmit: handleSubmit(postSignInData),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
            id: "box",
            bg: "white",
            border: `0.3px solid ${theme.colors.secondary}`,
            borderRadius: "3px",
            minWidth: {
              sm: "325px",
              md: "600px"
            },
            maxW: "600px",
            minHeight: {
              sm: "400px",
              md: "350px",
              lg: "400px"
            },
            w: {
              sm: "100%",
              md: "auto"
            },
            py: "10px",
            px: "20px",
            my: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
              fontSize: "40px",
              children: "Lender Log In"
            }), submissionError && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
              color: theme.colors.red,
              children: submissionError === 'Password not reset' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                children: ["Password not reset. Please click", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  href: "/secondary/resetPassword",
                  style: {
                    color: `${theme.colors.primary} !important`
                  },
                  children: " here "
                }), "to reset."]
              }) : submissionError
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
              mt: "25px",
              fontWeight: "500",
              children: "Email"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, _objectSpread({
              type: "text",
              mt: "5px",
              placeholder: "Email"
            }, register("email", {
              required: true
            }))), errors.lender_name && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
              color: theme.colors.red,
              children: "Please enter a valid Name."
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
              fontWeight: "500",
              mt: "25px",
              children: "Password"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, _objectSpread({
              type: "password",
              mt: "5px",
              placeholder: "Password"
            }, register("password", {
              required: true
            }))), errors.lender_name && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
              color: theme.colors.red,
              children: "Please enter a valid Name."
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
              mt: "25px",
              justifyContent: "flex-end",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                w: "150px",
                type: "submit",
                children: "Log In"
              })
            })]
          })
        })
      }, Math.random());
    }
  });
}

/***/ })

};
;