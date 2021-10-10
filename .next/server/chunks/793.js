exports.id = 793;
exports.ids = [793];
exports.modules = {

/***/ 6793:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Simple; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3426);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3724);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1464);
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8023);
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(body_scroll_lock__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);











const NavLink = ({
  children
}) => /*#__PURE__*/_jsx(Link, {
  px: 2,
  py: 1,
  rounded: 'md',
  _hover: {
    textDecoration: 'none',
    bg: useColorModeValue('gray.200', 'gray.700')
  },
  href: '#',
  children: children
});

function Simple() {
  const isLoggedIn = js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('pToken');
  const {
    0: disableScroll,
    1: setScroll
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    isOpen,
    onOpen,
    onClose
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();
  const {
    pathname
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const borderBottom = '#19858F';
  const targetRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
  const LogoLink = js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('pToken') ? '/secondary/loans' : "/secondary";
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (disableScroll) {
      let targetElement = targetRef.current;
      (0,body_scroll_lock__WEBPACK_IMPORTED_MODULE_6__.disableBodyScroll)(targetElement);
    } else {
      (0,body_scroll_lock__WEBPACK_IMPORTED_MODULE_6__.clearAllBodyScrollLocks)();
    }
  }, [isOpen, disableScroll, targetRef]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
      position: "sticky",
      top: "0",
      left: "0",
      right: "0",
      zIndex: "1000",
      background: "white",
      borderBottom: "1px solid #BFBFBF",
      color: "#495FBF",
      overflowY: "hidden",
      maxHeight: "100vh",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
        maxHeight: "90px",
        alignItems: 'center',
        justifyContent: {
          md: 'space-between',
          sm: 'flex-start'
        },
        position: "relative",
        px: {
          sm: "25px",
          md: "48px"
        },
        minHeight: "80px",
        maxWidth: "1300px",
        margin: "auto",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
          size: 'xs',
          bg: "none",
          color: "#9AA5D9",
          icon: isOpen ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.CloseIcon, {
            height: "17px",
            width: "17px"
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.HamburgerIcon, {
            height: "25px",
            width: "25px"
          }),
          "aria-label": 'Open Menu',
          display: {
            md: !isOpen ? 'none' : 'inherit'
          },
          onClick: isOpen ? () => {
            setScroll(false);
            onClose();
          } : () => {
            setScroll(true);
            onOpen();
          },
          position: "absolute",
          left: "13px"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
          spacing: 8,
          alignItems: {
            sm: 'center',
            md: 'flex-start'
          },
          width: {
            sm: "calc(100% - 22px)",
            base: "auto"
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
            width: "100%",
            justifyContent: {
              sm: 'center',
              md: 'flex-start'
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              cursor: "pointer",
              src: "/HeaderLogo.png",
              height: "54px",
              width: "150px",
              alt: "HeaderLogo"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
          spacing: 4,
          display: {
            sm: "none",
            md: "block"
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
            display: "flex",
            width: "auto",
            whiteSpace: "nowrap",
            fontSize: "1.25rem",
            cursor: "pointer",
            alignItems: "center",
            h: "9vh",
            maxHeight: "90px",
            py: "1px",
            children: isLoggedIn && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
              onClick: () => js_cookie__WEBPACK_IMPORTED_MODULE_7___default().remove('pToken'),
              as: next__WEBPACK_IMPORTED_MODULE_4__.Link,
              maxHeight: "90px",
              variant: "navLink",
              href: "/secondary",
              mr: "5px",
              bg: pathname === '/' ? 'white' : '',
              borderRadius: "5px",
              boxShadow: pathname === '/' ? '2px 2px 10px rgba(0, 0, 0, 0.5)' : '' // borderBottom={pathname === '/' ? `3px solid ${borderBottom}` : ''}
              ,
              children: "Log Out"
            })
          })
        })]
      }), isOpen ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        onClick: e => {
          e.stopPropagation();
        },
        position: "relative",
        zIndex: "10",
        bg: "#DBF6F8",
        color: "#495FBF",
        overflowY: "hidden",
        maxHeight: "100vh",
        ref: targetRef,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
          display: "flex",
          whiteSpace: "nowrap",
          cursor: "pointer",
          alignItems: "center",
          width: "100%",
          h: "100vh",
          flexDirection: "column",
          justifyContent: "flex-start",
          fontSize: "25px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
            onClick: () => js_cookie__WEBPACK_IMPORTED_MODULE_7___default().remove('pToken'),
            as: next__WEBPACK_IMPORTED_MODULE_4__.Link,
            maxHeight: "90px",
            variant: "navLink",
            href: "/secondary",
            mr: "5px",
            bg: pathname === '/' ? 'white' : '',
            borderRadius: "5px",
            boxShadow: pathname === '/' ? '2px 2px 10px rgba(0, 0, 0, 0.5)' : '' // borderBottom={pathname === '/' ? `3px solid ${borderBottom}` : ''}
            ,
            children: "Log Out"
          })
        })
      }) : null]
    })
  });
}

/***/ })

};
;