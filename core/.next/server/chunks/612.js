"use strict";
exports.id = 612;
exports.ids = [612];
exports.modules = {

/***/ 644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const aboutData = {
    designation: "Developer",
    title: "I Develop Application that Help People",
    text: [
        "Crafting applications that make a difference. My work is driven by a passion for creating solutions that truly help people.",
        "Innovation is my compass, guiding me to build applications that seamlessly blend functionality with user experience. Let's turn ideas into impactful realities.", 
    ],
    skillIcons: [
        {
            name: "java",
            icon: "img/svg/java.svg"
        },
        {
            name: "react",
            icon: "img/svg/react.svg"
        },
        {
            name: "Javascript",
            icon: "img/svg/javascript.svg"
        },
        {
            name: "database",
            icon: "img/svg/database.svg"
        }, 
    ]
};
const About = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "devman_tm_section",
        id: "about",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "devman_tm_about",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "about_inner",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "left",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "image_wrap",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "img/thumbs/64-49.jpg",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "main",
                                        "data-img-url": "img/about/1.webp"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "extra_image",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "image_inner",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "img/thumbs/1-1.jpg",
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "main_extra",
                                                    "data-img-url": "img/about/2.webp"
                                                })
                                            ]
                                        })
                                    }),
                                    aboutData.skillIcons.map((skill, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: i === 0 ? "extra_image" : "",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: `icon_${i + 1} wow fadeIn`,
                                                "data-wow-duration": "1s",
                                                "data-wow-delay": `0.${i * 2}s`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "svg",
                                                    src: skill.icon,
                                                    alt: ""
                                                })
                                            })
                                        }, i))
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "right",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "title",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            children: [
                                                `I'm`,
                                                " a ",
                                                aboutData.designation
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: aboutData.title
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text",
                                    children: aboutData.text.map((text, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: text
                                        }, i))
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "devman_tm_button",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "anchor",
                                        href: "#portfolio",
                                        children: "View Portfolio"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);


/***/ }),

/***/ 504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(655);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Contact = ()=>{
    const { 0: mailData , 1: setMailData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const { name , email , phone , message  } = mailData;
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const onChange = (e)=>setMailData({
            ...mailData,
            [e.target.name]: e.target.value
        });
    const onSubmit = (e)=>{
        e.preventDefault();
        if (name.length === 0 || email.length === 0 || message.length === 0 || phone.length === 0) {
            setError(true);
            clearError();
        } else {
            // https://www.emailjs.com/
            emailjs_com__WEBPACK_IMPORTED_MODULE_1___default().send("service_4c5hf25", "template_ljavq66", mailData, "qpiPGqQjiX7IyNKKZ" // public api
            ).then((response)=>{
                setError(false);
                clearError();
                setMailData({
                    name: "",
                    email: "",
                    message: "",
                    phone: ""
                });
            }, (err)=>{
                console.log(err.text);
            });
        }
    };
    const clearError = ()=>{
        setTimeout(()=>{
            setError(null);
        }, 2000);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "devman_tm_section",
        id: "contact",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "devman_tm_contact",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "contact_inner",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "devman_tm_main_title",
                            "data-text-align": "left",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        `Don't`,
                                        " be shy"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: "Drop Me a Line"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "in",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "left wow fadeInLeft",
                                    "data-wow-duration": "1s",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "fields",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                            className: "contact_form",
                                            id: "contact_form",
                                            autoComplete: "off",
                                            onSubmit: (e)=>onSubmit(e),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "returnmessage",
                                                    "data-success": "Your message has been received, We will contact you soon."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: error ? "empty_notice" : "returnmessage",
                                                    style: {
                                                        display: error == null ? "none" : "block"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: error ? "Please Fill Required Fields" : "Your message has been received, We will contact you soon."
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "first",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    id: "name",
                                                                    name: "name",
                                                                    onChange: (e)=>onChange(e),
                                                                    value: name,
                                                                    type: "text",
                                                                    placeholder: "Name"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    id: "email",
                                                                    type: "text",
                                                                    name: "email",
                                                                    onChange: (e)=>onChange(e),
                                                                    value: email,
                                                                    placeholder: "Email"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    id: "phone",
                                                                    type: "Number",
                                                                    name: "phone",
                                                                    onChange: (e)=>onChange(e),
                                                                    value: phone,
                                                                    placeholder: "Phone"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "last",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                        id: "message",
                                                        placeholder: "Message",
                                                        name: "message",
                                                        onChange: (e)=>onChange(e),
                                                        value: message
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "devman_tm_button",
                                                    "data-position": "left",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "submit",
                                                        value: "Submit Message"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "right wow fadeInRight",
                                    "data-wow-duration": "1s",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "list_inner",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "icon",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "icon-location orangeText"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "short",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    children: "Address"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "Delhi,India"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "list_inner",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "icon",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "icon-mail-1 greenText"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "short",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    children: "Email"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: "#",
                                                                        children: "deepaksharmaa.39@gmail.com"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "list_inner",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "icon",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "icon-phone purpleText"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "short",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    children: "Phone"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "+91 999 355 7535"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "shape moving_effect",
                            "data-direction": "y",
                            "data-reverse": "yes"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "shape_2 moving_effect",
                            "data-direction": "y",
                            "data-reverse": "yes"
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);


/***/ }),

/***/ 105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Copyright = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "devman_tm_section",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "devman_tm_copyright",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "inner",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "left wow fadeInLeft",
                        "data-wow-duration": "1s",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "Developed by",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://themeforest.net/user/codeefly",
                                    rel: "noreferrer",
                                    target: "_blank",
                                    children: "Deepak Sharma"
                                }),
                                " ",
                                "\xa9 ",
                                new Date().getFullYear()
                            ]
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Copyright);


/***/ }),

/***/ 774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(609);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(882);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__);



const Counter = ({ end , decimals  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_1___default()), {
        end: end ? end : 100,
        duration: 3,
        decimals: decimals ? decimals : 0,
        children: ({ countUpRef , start  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default()), {
                onChange: start,
                delayedCall: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "tonni_tm_counter",
                    "data-from": "0",
                    "data-to": end,
                    ref: countUpRef,
                    children: "count"
                })
            })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);


/***/ }),

/***/ 567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(917);
/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(774);



const counterData = [
    {
        smallVlaue: true,
        value: 30,
        name: "Digital\nProducts"
    },
    {
        smallVlaue: true,
        value: 3,
        name: "Open Source\nProjects"
    },
    {
        smallVlaue: false,
        value: 1,
        name: "Lines of \nCode"
    }, 
];
const CounterSection = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "devman_tm_section",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "devman_tm_counter_section",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "counter_list",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            children: counterData.map((counter, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "list_inner",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "wrapper",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "value",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "abs",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Counter__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                                end: counter.value
                                                            }),
                                                            counter.smallVlaue ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                className: "small",
                                                                children: "+"
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                className: "big",
                                                                children: "M"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        dangerouslySetInnerHTML: (0,_utilits__WEBPACK_IMPORTED_MODULE_1__/* .lineBreak */ .jU)(counter.name)
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }, i))
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "shape moving_effect",
                    "data-direction": "y",
                    "data-reverse": "yes"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CounterSection);


/***/ }),

/***/ 751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const features_list = [
    {
        title: "Dedication",
        icon: "img/svg/design.svg",
        text: "Committed to excellence, I bring unwavering dedication to every project. Let's build something extraordinary together."
    },
    {
        title: "Smart Work",
        icon: "img/svg/development.svg",
        text: "In a world that moves fast, I prioritize smart work over hard work. Expect efficient solutions that make a real impact."
    },
    {
        title: "Intelligence",
        icon: "img/svg/landing.svg",
        text: "Crafting intelligent solutions is my forte. Experience thoughtful development that goes beyond expectations. Let's elevate your project."
    }, 
];
const Features = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "devman_tm_section",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "devman_tm_features",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "features_list",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        children: features_list.map((feature, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "wow fadeInUp",
                                "data-wow-duration": "1s",
                                "data-wow-delay": `"0.${i * 2}s"`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "list_inner",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "short",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "title",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: `0${i + 1}`
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            children: feature.title
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "svg",
                                                        src: feature.icon,
                                                        alt: ""
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: feature.text
                                            })
                                        })
                                    ]
                                })
                            }, i))
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Features);


/***/ }),

/***/ 791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(774);


const homeData = {
    firstName: "Deepak",
    lastName: "Sharma",
    designation: "Full stack Web Developer",
    address: "Delhi, India",
    img: "img/about/1.webp",
    bio: "Elevate Your Online Presence with Expert Solutions",
    numberOfProject: 30,
    numberofyear: 2
};
const Home = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "devman_tm_section",
        id: "home",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "devman_tm_hero",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "background",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "image",
                        "data-img-url": "img/hero/1.jpg"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "content",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "left",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "inner",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                className: "hello",
                                                children: [
                                                    "Hello ",
                                                    `I'm`
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                className: "name",
                                                children: [
                                                    homeData.firstName,
                                                    " ",
                                                    homeData.lastName
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                className: "job",
                                                children: [
                                                    homeData.designation,
                                                    " from ",
                                                    homeData.address
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text",
                                                children: homeData.bio
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "buttons",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "devman_tm_button",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "anchor",
                                                            href: "#contact",
                                                            children: "Get a Quote"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "simple_button",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "anchor",
                                                            href: "#about",
                                                            children: "About Me"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "stroke_1",
                                        children: homeData.firstName
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "stroke_2",
                                        children: homeData.lastName
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "right",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "image",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "img/thumbs/53-61.jpg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "main",
                                            "data-img-url": homeData.img
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "win",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "img/svg/award.svg",
                                                alt: "",
                                                className: "svg"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "numbers year",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "wrapper",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Counter__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                            end: homeData.numberofyear
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "item_name",
                                                        children: [
                                                            "Years of",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                            "Success"
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "numbers project",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "wrapper",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Counter__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                                end: homeData.numberOfProject
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "extra",
                                                                children: "+"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "item_name",
                                                        children: [
                                                            "Projects",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                            "Completed"
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ 280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Portfolio)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/components/popup/Popup.js
var Popup = __webpack_require__(780);
;// CONCATENATED MODULE: ./src/components/popup/DetailsPopup.js


const DetailsPopup = ({ open , close  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Popup/* default */.Z, {
        open: open,
        close: close,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "popup_details",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "top_image",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "img/thumbs/4-2.jpg",
                            alt: ""
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main",
                            "data-img-url": "img/portfolio/4.jpg",
                            style: {
                                backgroundImage: 'url("img/portfolio/4.jpg")'
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "portfolio_main_title",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Mockup Phone"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                onClick: (e)=>e.preventDefault(),
                                children: "Details"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "main_details",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "textbox",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Mockups are useful both for the creative phase of the project - for instance when ",
                                        `you're`,
                                        " trying to figure out your user flows or the proper visual hierarchy - and the production phase when they phase when they will represent the target product. Building mockups strikes the ideal balance ease of modification."
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "detailbox",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "first",
                                                children: "Client"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Alvaro Morata"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "first",
                                                children: "Category"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: "Detail"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "first",
                                                children: "Date"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "April 22, 2022"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "additional_images",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "list_inner",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "my_image",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "img/thumbs/4-2.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main",
                                                "data-img-url": "img/service/1.jpg"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "list_inner",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "my_image",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "img/thumbs/4-2.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main",
                                                "data-img-url": "img/service/2.jpg"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "list_inner",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "my_image",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "img/thumbs/4-2.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main",
                                                "data-img-url": "img/service/3.jpg"
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const popup_DetailsPopup = (DetailsPopup);

;// CONCATENATED MODULE: ./src/components/Portfolio.js



const Portfolio = ()=>{
    const { 0: popup , 1: setPopup  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(popup_DetailsPopup, {
                open: popup,
                close: ()=>setPopup(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "devman_tm_section",
                id: "portfolio",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "devman_tm_portfolio",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "devman_tm_main_title",
                                "data-text-align": "center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Portfolio"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "My Amazing Works"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Explore a showcase of my exceptional works that speak volumes about my dedication to excellence. Each project is a testament to my passion for creating meaningful digital experiences."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "portfolio_list",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "wow fadeInUp",
                                            "data-wow-duration": "1s",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "list_inner",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "background_image",
                                                        "data-img-url": "img/portfolio/1.webp"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "content",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "details",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "category",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "https://new.sewaktravels.com",
                                                                        target: "blank",
                                                                        children: "Cab Booking website"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    className: "title",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "https://new.sewaktravels.com",
                                                                        target: "blank",
                                                                        children: [
                                                                            "Web Application for",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                            " Sewak travels"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "view_project",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "https://new.sewaktravels.com",
                                                                        target: "blank",
                                                                        children: [
                                                                            "View Project ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "icon-right-big"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "overlay"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        target: "blank",
                                                        className: "devman_tm_full_link popup-youtube",
                                                        href: "https://new.sewaktravels.com"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "wow fadeInUp",
                                            "data-wow-duration": "1s",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "list_inner",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "background_image",
                                                        "data-img-url": "img/portfolio/2.webp"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "content",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "details",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "category",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "https://countryard.com/",
                                                                        target: "blank",
                                                                        children: "Hotel Booking website"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    className: "title",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "https://countryard.com/",
                                                                        target: "blank",
                                                                        children: [
                                                                            "Web Application for",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                            " Countryard"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "view_project",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "https://countryard.com/",
                                                                        target: "blank",
                                                                        children: [
                                                                            "View Project ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "icon-right-big"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "overlay"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "devman_tm_full_link popup-vimeo",
                                                        href: "https://countryard.com/",
                                                        target: "blank"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "wow fadeInUp",
                                            "data-wow-duration": "1s",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "list_inner",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "background_image",
                                                        "data-img-url": "img/portfolio/3.webp"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "content",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "details",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "category",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "https://teracure.com/",
                                                                        target: "blank",
                                                                        children: "E-commerce"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    className: "title",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "https://teracure.com/",
                                                                        target: "blank",
                                                                        children: [
                                                                            "Web Application for",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                            " Teracure"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "view_project",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "https://teracure.com/",
                                                                        target: "blank",
                                                                        children: [
                                                                            "View Project ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "icon-right-big"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "overlay"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "devman_tm_full_link soundcloude_link mfp-iframe audio",
                                                        href: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "wow fadeInUp",
                                            "data-wow-duration": "1s",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "list_inner",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "background_image",
                                                        "data-img-url": "img/portfolio/4.png",
                                                        style: {
                                                            filter: "invert(50)"
                                                        }
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "content",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "details",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "category",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "https://github.com/Deepaksharma-39/phpHRM",
                                                                        children: "Software"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    className: "title",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "https://github.com/Deepaksharma-39/phpHRM",
                                                                        children: "HRM Software"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "view_project",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "https://github.com/Deepaksharma-39/phpHRM",
                                                                        children: [
                                                                            "View Project ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "icon-right-big"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "overlay"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "devman_tm_full_link portfolio_popup c-pointer",
                                                        // onClick={() => setPopup(true)}
                                                        href: "https://github.com/Deepaksharma-39/phpHRM"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "shape_1 moving_effect",
                                            "data-direction": "y",
                                            "data-reverse": "yes"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "shape_2 moving_effect",
                                            "data-direction": "y",
                                            "data-reverse": "yes"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_Portfolio = (Portfolio);


/***/ }),

/***/ 15:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Process)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/components/Accordion.js


const accordionData = [
    {
        title: "Work Strategy",
        details: "Embracing minimalism and precision, I fuse creativity with thoughtful execution, transforming visions into tangible successes."
    },
    {
        title: "The Process of My Work",
        details: "I navigate complexities with precision, ensuring each step brings me closer to realizing your dreams.Join me in transforming aspirations into poetic realities, where every project becomes a song of joy and achievement."
    },
    {
        title: "Core Value of Development",
        details: "My development philosophy centers on meticulous craftsmanship and unwavering dedication. We believe in transcending challenges. "
    },
    {
        title: "Desire to Work Hard",
        details: " My relentless pursuit of excellence is a testament to the desire to work hard. In the realm of challenges, I find inspiration to surpass expectations"
    }, 
];
const Accordion = ()=>{
    const { 0: active , 1: setActive  } = (0,external_react_.useState)(null);
    const contentEl = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        setActive(0);
    }, [
        contentEl.current
    ]);
    const onClick = (value)=>value === active ? setActive(null) : setActive(value);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "devman_tm_accordion",
            "data-active": 1,
            "data-type": "accordion",
            children: accordionData.map((accordion, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `accordion_in ${active == i ? "acc_active" : ""}`,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "acc_head",
                            onClick: ()=>onClick(i),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "plus"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: accordion.title
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `acc_content d-block`,
                            ref: contentEl,
                            style: active === i ? {
                                height: contentEl.current && contentEl.current.scrollHeight
                            } : {
                                height: "0px"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "acc_content_in",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: accordion.details
                                })
                            })
                        })
                    ]
                }, i))
        })
    });
};
/* harmony default export */ const components_Accordion = (Accordion);

;// CONCATENATED MODULE: ./src/components/Process.js


const Process = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "devman_tm_section",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "devman_tm_process",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "process_inner",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "left",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "devman_tm_main_title",
                                "data-text-align": "left",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Working to make difference"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Real Passion to Create Amazing Things"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Fueled by a genuine passion for creating amazing things, my work is centered around making a difference. Each project is an opportunity to infuse innovation and excellence, striving to leave a positive impact through thoughtful solutions."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "right",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "acc_holder",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_Accordion, {})
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const components_Process = (Process);


/***/ }),

/***/ 973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Service)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/components/popup/Popup.js
var Popup = __webpack_require__(780);
;// CONCATENATED MODULE: ./src/components/popup/ServicePopup.js


const ServicePopup = ({ data , open , close  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Popup/* default */.Z, {
        open: open,
        close: close,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "service_popup_informations",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "main_title",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: data.name
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "descriptions",
                    children: data && data.description && data.description.map((des, i)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: des
                        }, i))
                })
            ]
        })
    });
};
/* harmony default export */ const popup_ServicePopup = (ServicePopup);

;// CONCATENATED MODULE: ./src/components/Service.js



const serviceData = [
    {
        name: "Desktop Application",
        icon: "img/svg/cpu.svg",
        img: "img/service/1.jpg",
        description: [
            "I excel in crafting innovative and efficient desktop applications tailored to your business needs. With a focus on user-friendly interfaces and seamless functionality, I bring years of expertise to deliver desktop solutions that elevate your operations.",
            "In the ever-evolving digital landscape, your website is the cornerstone of your online presence. Recognizing that almost 95 percent of a user\u2019s initial impression is tied to web design, I prioritize crafting websites that leave a lasting impact. As a freelance developer, I bring a personalized touch to every project, ensuring a unique and tailored solution for your business.",
            "Partnering with me goes beyond just website development; it's a collaboration focused on driving results. Let's work together to create a custom website that not only reflects your brand but also propels your business forward.", 
        ]
    },
    {
        name: "Mobile Application",
        icon: "img/svg/phone.svg",
        img: "img/service/2.jpg",
        description: [
            "In the mobile-centric era, having a standout app is essential. I specialize in creating mobile applications that not only resonate with your brand but also enhance user experiences. From intuitive designs to robust functionalities, your mobile app will be a reflection of quality and innovation.",
            "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line.",
            "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Devman, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.", 
        ]
    },
    {
        name: "Website Development",
        icon: "img/svg/web.svg",
        img: "img/service/3.jpg",
        description: [
            "Crafting innovative and effective websites is my expertise. I go beyond just creating a web presence; I build digital experiences that capture your brand essence and significantly enhance conversion rates. My goal is to maximize your revenue, fostering business growth and helping you achieve your objectives.",
            "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line.",
            "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Devman, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.", 
        ]
    },
    {
        name: "API Development",
        icon: "img/svg/star.svg",
        img: "img/service/4.jpg",
        description: [
            "In the intricate world of data connectivity, API development is key. As a seasoned developer, I understand the importance of creating robust and secure APIs. Partnering with me ensures the seamless integration of your applications, facilitating efficient data flow and enhancing overall system performance.",
            "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line.",
            "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Devman, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.", 
        ]
    }, 
];
const Service = ()=>{
    const { 0: activeData , 1: setActiveData  } = (0,external_react_.useState)({});
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(popup_ServicePopup, {
                open: open,
                close: ()=>setOpen(false),
                data: activeData
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "devman_tm_section",
                id: "service",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "devman_tm_service",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "service_list",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    children: serviceData.map((service, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: `wow ${i % 2 ? "fadeInLeft" : "fadeInRight"}`,
                                            "data-wow-duration": "1s",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "list_inner",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        className: "svg",
                                                        src: service.icon,
                                                        alt: ""
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "title",
                                                        children: service.name
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: "text",
                                                        children: [
                                                            service.description[0].substring(0, 138),
                                                            "."
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "devman_tm_full_link c-pointer",
                                                        onClick: ()=>{
                                                            setActiveData(service);
                                                            setOpen(true);
                                                        }
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        className: "popup_service_image",
                                                        src: "img/service/1.jpg",
                                                        alt: ""
                                                    })
                                                ]
                                            })
                                        }, i))
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "shape moving_effect",
                            "data-direction": "y",
                            "data-reverse": "yes"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_Service = (Service);


/***/ }),

/***/ 318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(917);



const Skills = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("scroll", _utilits__WEBPACK_IMPORTED_MODULE_2__/* .activeSkillProgress */ .H8);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "devman_tm_section",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "devman_tm_skills",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "devman_tm_main_title",
                        "data-text-align": "center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "My Skills"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: "I Develop Skills Regularly"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Constantly honing my craft, I actively develop and refine my skills. Driven by a commitment to excellence, I stay at the forefront of industry trends and best practices to deliver exceptional results."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "skills_wrapper",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "left",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "dodo_progress",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "skillsInner___ progress_inner",
                                            "data-value": 95,
                                            "data-color": "#142eb5",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "label",
                                                            children: "React"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "number",
                                                            children: "95%"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "background",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "bar",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "bar_in"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "skillsInner___ progress_inner",
                                            "data-value": 75,
                                            "data-color": "#142eb5",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "label",
                                                            children: "Java"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "number",
                                                            children: "75%"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "background",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "bar",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "bar_in"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "skillsInner___ progress_inner",
                                            "data-value": 90,
                                            "data-color": "#142eb5",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "label",
                                                            children: "HTML"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "number",
                                                            children: "90%"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "background",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "bar",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "bar_in"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "right",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "dodo_progress",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "skillsInner___ progress_inner",
                                            "data-value": 70,
                                            "data-color": "#142eb5",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "label",
                                                            children: "Wordpress"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "number",
                                                            children: "70%"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "background",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "bar",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "bar_in"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "skillsInner___ progress_inner",
                                            "data-value": 80,
                                            "data-color": "#142eb5",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "label",
                                                            children: "PHP"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "number",
                                                            children: "80%"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "background",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "bar",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "bar_in"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "skillsInner___ progress_inner",
                                            "data-value": 60,
                                            "data-color": "#142eb5",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "label",
                                                            children: "DBMS"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "number",
                                                            children: "60%"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "background",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "bar",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "bar_in"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skills);


/***/ }),

/***/ 780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useClickOutside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(332);


const Popup = ({ open , close , children  })=>{
    let domNode = (0,_useClickOutside__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(()=>{
        close();
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `devman_tm_modalbox ${open ? "opened" : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "box_inner",
            ref: domNode,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "close",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "c-pointer",
                        onClick: ()=>close(),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "icon-cancel"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "description_wrap",
                    children: children
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);


/***/ }),

/***/ 591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(917);



const Header = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("scroll", _utilits__WEBPACK_IMPORTED_MODULE_2__/* .stickyNav */ .h4);
        window.addEventListener("scroll", _utilits__WEBPACK_IMPORTED_MODULE_2__/* .scrollSection */ .L7);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "devman_tm_header",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "header_inner",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "logo",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "light",
                                href: "#",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "img/logo/logo.png",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "dark",
                                href: "#",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "img/logo/logo-dark.png",
                                    alt: "",
                                    style: {
                                        "height": "40px"
                                    }
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "menu",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "anchor_nav",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "current",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#home",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#about",
                                        children: "About"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#portfolio",
                                        children: "Portfolio"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#service",
                                        children: "Service"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#contact",
                                        children: "Contact"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "download_cv",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "img/Deepak_Sharma_Resume.pdf",
                                        target: "blank",
                                        children: "Download CV"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const MobileHeader = ()=>{
    const { 0: toggle , 1: setToggle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "devman_tm_mobile_menu",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mobile_menu_inner",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mobile_in",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "logo",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "img/logo/dark.png",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "trigger",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `hamburger hamburger--slider ${toggle ? "is-active" : ""}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "hamburger-box",
                                    onClick: ()=>setToggle(!toggle),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "hamburger-inner"
                                    })
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "dropdown",
                style: {
                    display: toggle ? "block" : "none"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "dropdown_inner",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "anchor_nav",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#home",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#about",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#portfolio",
                                    children: "Portfolio"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#service",
                                    children: "Service"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#contact",
                                    children: "Contact"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#blog",
                                    children: "Blog"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "download_cv",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "img/cv/1.jpg",
                                    download: true,
                                    children: "Download CV"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileHeader);


/***/ }),

/***/ 108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(917);



const ScrollTop = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("scroll", _utilits__WEBPACK_IMPORTED_MODULE_2__/* .scrollTop */ .SM);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "progressbar",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "#",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text",
                    style: {
                        bottom: "150.75px"
                    },
                    children: "To Top"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "line"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollTop);


/***/ })

};
;