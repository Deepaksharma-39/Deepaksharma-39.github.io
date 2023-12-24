"use strict";
exports.id = 564;
exports.ids = [564];
exports.modules = {

/***/ 239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/useClickOutside.js
var useClickOutside = __webpack_require__(332);
;// CONCATENATED MODULE: ./src/components/popup/ImageView.js



const ImgViews = ({ close , src  })=>{
    let domNode = (0,useClickOutside/* default */.Z)(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mfp-iframe-scaler",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "mfp-img",
                                    src: src
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const ImageView = ()=>{
    const { 0: img , 1: setImg  } = (0,external_react_.useState)(false);
    const { 0: imgValue , 1: setImgValue  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("img/")) {
                    if (a.getAttribute("download") === null) {
                        a.addEventListener("click", (e)=>{
                            e.preventDefault();
                            setImgValue(a.href);
                            setImg(true);
                        });
                    }
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: img && /*#__PURE__*/ jsx_runtime_.jsx(ImgViews, {
            close: ()=>setImg(false),
            src: imgValue
        })
    });
};
/* harmony default export */ const popup_ImageView = (ImageView);

;// CONCATENATED MODULE: ./src/components/popup/VideoPopup.js



const VideoPopup_ = ({ close , videoID  })=>{
    let domNode = (0,useClickOutside/* default */.Z)(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mfp-container mfp-s-ready mfp-iframe-holder",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mfp-iframe-scaler",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        onClick: ()=>close(),
                                        children: "\xd7"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                        src: videoID,
                                        title: "YouTube video player",
                                        frameBorder: "0",
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                        allowFullScreen: true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const VideoPopup = ()=>{
    const { 0: video , 1: setVideo  } = (0,external_react_.useState)(false);
    const { 0: videoValue , 1: setVideoValue  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("www.youtube.com") || a.href.includes("vimeo.com") || a.href.includes("soundcloud.com")) {
                    a.addEventListener("click", (e)=>{
                        e.preventDefault();
                        setVideoValue(a.href);
                        setVideo(true);
                        let href = a.href;
                        if (href.includes("youtube")) {
                            setVideoValue(`//www.youtube.com/embed/${href.split("=")[1]}?autoplay=1`);
                        } else if (href.includes("vimeo")) {
                            let splitData = href.split("/");
                            setVideoValue(`//player.vimeo.com/video/${splitData[splitData.length - 1]}?autoplay=1`);
                        } else {
                            setVideoValue(href);
                        }
                    });
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: video && /*#__PURE__*/ jsx_runtime_.jsx(VideoPopup_, {
            close: ()=>setVideo(false),
            videoID: videoValue
        })
    });
};
/* harmony default export */ const popup_VideoPopup = (VideoPopup);

// EXTERNAL MODULE: ./src/utilits.js
var utilits = __webpack_require__(917);
;// CONCATENATED MODULE: ./src/layouts/Preloader.js



const Preloader = ()=>{
    (0,external_react_.useEffect)(()=>{
        (0,utilits/* preloader */.xg)();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "preloader",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "loader_line"
        })
    });
};
/* harmony default export */ const layouts_Preloader = (Preloader);

;// CONCATENATED MODULE: ./src/layouts/Layout.js







const Layout = ({ children  })=>{
    (0,external_react_.useEffect)(()=>{
        (0,utilits/* dataImage */.CC)();
        (0,utilits/* imgToSVG */.zW)();
        (0,utilits/* wowJsAnimation */.OE)();
        (0,utilits/* devman_tm_moving_animation */.JC)();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layouts_Preloader, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(popup_VideoPopup, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(popup_ImageView, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "devman_tm_all_wrap",
                "data-magic-cursor": "show",
                children: children
            })
        ]
    });
};
/* harmony default export */ const layouts_Layout = (Layout);


/***/ }),

/***/ 363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(917);



const Mouse = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_utilits__WEBPACK_IMPORTED_MODULE_2__/* .customCursor */ ._h)();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mouse-cursor cursor-outer"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mouse-cursor cursor-inner"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mouse);


/***/ }),

/***/ 332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

let useClickOutside = (handler)=>{
    let domNode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useClickOutside);


/***/ }),

/***/ 917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CC": () => (/* binding */ dataImage),
/* harmony export */   "H8": () => (/* binding */ activeSkillProgress),
/* harmony export */   "JC": () => (/* binding */ devman_tm_moving_animation),
/* harmony export */   "L7": () => (/* binding */ scrollSection),
/* harmony export */   "OE": () => (/* binding */ wowJsAnimation),
/* harmony export */   "SM": () => (/* binding */ scrollTop),
/* harmony export */   "_h": () => (/* binding */ customCursor),
/* harmony export */   "h4": () => (/* binding */ stickyNav),
/* harmony export */   "jU": () => (/* binding */ lineBreak),
/* harmony export */   "xg": () => (/* binding */ preloader),
/* harmony export */   "zW": () => (/* binding */ imgToSVG)
/* harmony export */ });
/* unused harmony exports aTagClick, activeSection */
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);

const preloader_ = ()=>{
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    let preloader = document.getElementById("preloader");
    if (preloader) {
        if (!isMobile) {
            setTimeout(function() {
                preloader.classList.add("preloaded");
            }, 800);
            setTimeout(function() {
                preloader.remove();
            }, 2000);
        } else {
            preloader.remove();
        }
    }
};
const customCursor = ()=>{
    var myCursor = document.querySelectorAll(".mouse-cursor"), hamburger = document.querySelector(".hamburger"), kura_tm_topbar = document.querySelector(".kura_tm_topbar "), pointer = document.querySelector(".cursor-pointer"), e = document.querySelector(".cursor-inner"), t = document.querySelector(".cursor-outer");
    function mouseEvent(element) {
        react_dom__WEBPACK_IMPORTED_MODULE_0___default().findDOMNode(element).addEventListener("mouseenter", function() {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
        });
        react_dom__WEBPACK_IMPORTED_MODULE_0___default().findDOMNode(element).addEventListener("mouseleave", function() {
            e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover");
        });
    }
    if (myCursor.length) {
        if (document.body) {
            let n, i = 0, o = !1;
            window.onmousemove = function(s) {
                o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX;
            }, document.body.addEventListener("mouseenter", // "a,.kura_tm_topbar .trigger, .cursor-pointer",
            function() {
                let a = document.querySelectorAll("a");
                e.classList.add("cursor-inner"), t.classList.add("cursor-outer");
                for(let i = 0; i < a.length; i++){
                    const element = a[i];
                    mouseEvent(element);
                }
                hamburger && mouseEvent(hamburger);
                kura_tm_topbar && mouseEvent(kura_tm_topbar);
                pointer && mouseEvent(pointer);
            }), e.style.visibility = "visible", t.style.visibility = "visible";
        }
    }
};
const preloader = ()=>{
    preloader_();
    setTimeout(()=>{
        document.querySelector("body").classList.add("opened");
    }, 3000);
};
const aTagClick = ()=>{
    const aTag = document.querySelectorAll("[href='#']");
    for(let i = 0; i < aTag.length; i++){
        const a = aTag[i];
        ReactDOM.findDOMNode(a).addEventListener("click", (e)=>{
            e.preventDefault();
        });
    }
};
// Data image
const dataImage = ()=>{
    let d = document.querySelectorAll("[data-img-url");
    for(let i = 0; i < d.length; i++){
        const element = d[i];
        element.style.backgroundImage = `url(${element.getAttribute("data-img-url")})`;
    }
};
const imgToSVG = ()=>{
    document.querySelectorAll("img.svg").forEach((el)=>{
        const imgID = el.getAttribute("id");
        const imgClass = el.getAttribute("class");
        const imgURL = el.getAttribute("src");
        fetch(imgURL).then((data)=>data.text()).then((response)=>{
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(response, "text/html");
            let svg = xmlDoc.querySelector("svg");
            if (typeof imgID !== "undefined") {
                svg.setAttribute("id", imgID);
            }
            if (typeof imgClass !== "undefined") {
                svg.setAttribute("class", imgClass + " replaced-svg");
            }
            svg.removeAttribute("xmlns:a");
            if (el.parentNode) {
                el.parentNode.replaceChild(svg, el);
            }
        });
    });
};
const activeSection = (value)=>{
    const sections = document.querySelectorAll(".edrea_tm_section");
    sections.forEach((section)=>{
        let id = section.getAttribute("id");
        if (id == value) {
            section.className = "edrea_tm_section active wow animated fadeInUp";
        } else {
            section.className = "edrea_tm_section hidden animated";
        }
    });
};
const activeSkillProgress = ()=>{
    const progress_inner = document.querySelectorAll(".skillsInner___"), triggerBottom = window.innerHeight / 5 * 5;
    progress_inner.forEach((box)=>{
        const boxTop = box.getBoundingClientRect().top, boxElement = box.getElementsByClassName("bar"), label = box.getElementsByClassName("label"), number = box.getElementsByClassName("number"), boxItem = boxElement[0], pWidth = box.getAttribute("data-value"), pColor = box.getAttribute("data-color");
        if (boxTop < triggerBottom) {
            boxItem.classList.add("open");
            label[0].classList.add("opened");
            number[0].style.right = `${100 - pWidth}%`;
            boxItem.getElementsByClassName("bar_in")[0].style.width = `${pWidth}%`;
            boxItem.getElementsByClassName("bar_in")[0].style.backgroundColor = pColor;
        } else {
            boxItem.classList.remove("open");
            label[0].classList.remove("opened");
            number[0].style.right = `${120}%`;
        }
    });
};
const scrollSection = ()=>{
    const sections = document.querySelectorAll(".devman_tm_section");
    const navLi = document.querySelectorAll(".anchor_nav li");
    let current = "";
    sections.forEach((section)=>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });
    navLi.forEach((li)=>{
        if (current !== null) {
            li.classList.remove("current");
        }
        if (li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`) {
            li.classList.add("current");
        }
    });
};
const stickyNav = ()=>{
    let offset = window.scrollY;
    const stickys = document.querySelectorAll(".devman_tm_header");
    stickys.forEach((sticky)=>{
        if (sticky) {
            if (offset > 100) {
                sticky.classList.add("animate");
            } else {
                sticky.classList.remove("animate");
            }
        }
    });
};
const scrollTop = ()=>{
    var bar = document.querySelector(".progressbar");
    var line = document.querySelector(".progressbar .line");
    var documentHeight = document.documentElement.scrollHeight;
    var windowHeight = window.innerHeight;
    var winScroll = window.scrollY;
    var value = winScroll / (documentHeight - windowHeight) * 100;
    var position = value;
    if (winScroll > 100) {
        bar.classList.add("animate");
        line.style.height = position + "%";
    } else {
        bar.classList.remove("animate");
    }
};
const wowJsAnimation = ()=>{
    if (false) {}
    new WOW.WOW().init();
};
// Moveing effect
const devman_tm_moving_animation = ()=>{
    var detail = document.querySelectorAll(".moving_effect");
    var offset = 0;
    detail.forEach((element)=>{
        var direction = element.getAttribute("data-direction");
        window.addEventListener("scroll", function() {
            offset = window.scrollY;
            var h = window.innerHeight;
            var i = element.getBoundingClientRect().top + window.scrollY - offset - h;
            if (element.getAttribute("data-reverse") == "yes") {
                i *= -1;
            }
            var x = direction === "x" ? i * 70 / h : 0;
            var y = direction === "x" ? 0 : i * 70 / h;
            if (element.getAttribute("data-reverse") == "yes") {
                i *= -1;
            }
            if (i * -1 < h + 300 && i < 300) {
                element.style.transform = `translate3d(${x}px,${y}px, 0px)`;
            }
        });
    });
};
// linebrack
const lineBreak = (value)=>{
    return {
        __html: value.replace(/\n/g, "<br />")
    };
};


/***/ })

};
;