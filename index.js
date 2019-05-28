!function(t) {
    var e = {};
    function n(a) {
        if (e[a])
            return e[a].exports;
        var i = e[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return t[a].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, a) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var a = Object.create(null);
        if (n.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                n.d(a, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return a
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "",
    n(n.s = 1)
}([function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    var a = s(n(2));
    n(3);
    var i = s(n(4));
    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    n(5),
    window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(t, e) {
        e = e || window;
        for (var n = 0; n < this.length; n++)
            t.call(e, this[n], n, this)
    }
    );
    var o = function(t) {
        var e = t.closest(".js-example")
          , n = {};
        if (e) {
            var i = e.getAttribute("data-example-id");
            2 == i ? n = {
                orientation: "right"
            } : 3 == i ? n = {
                scale: 1.5
            } : 4 == i ? n = {
                scale: 1.5,
                orientation: "left",
                overflow: !0
            } : 5 == i && (n = {
                scale: 1.4,
                delay: 2
            })
        } else
            n.scale = 1.5,
            n.orientation = "up";
        new a.default(t,n)
    };
    window.onload = function() {
        var t = {
            threshold: 1e3,
            callback_load: o
        };
        new i.default(t,{
            elements_selector: ".lazy"
        })
    }
    ;
    var r = -1
      , l = ""
      , u = ""
      , c = document.querySelectorAll(".js-section");
    c && function t() {
        var e = window.pageYOffset;
        if (e != r) {
            for (var n = e + document.documentElement.clientHeight, a = 0; a < c.length; a++) {
                var i = c[a].offsetTop;
                if (i + c[a].offsetHeight > e && i < n) {
                    document.querySelectorAll(".js-nav li").forEach(function(t) {
                        t.classList.remove("active")
                    });
                    var s = 1 * c[a].getAttribute("data-section-id");
                    document.querySelector('.js-nav li[data-section-id="' + s + '"').classList.add("active"),
                    (l = c[a].getAttribute("data-section-name")) != u && "undefined" != typeof gtag && gtag("config", "UA-93163144-2", {
                        page_title: l,
                        page_path: "/" + l.toLowerCase()
                    });
                    break
                }
            }
            var o = document.getElementById("installation")
              , d = document.getElementById("examples")
              , f = o.offsetTop
              , h = d.offsetTop + d.offsetHeight;
            e > f && n < h ? document.querySelector(".js-nav").classList.add("active") : document.querySelector(".js-nav").classList.remove("active"),
            r = e,
            u = l,
            window.requestAnimationFrame(t)
        } else
            window.requestAnimationFrame(t)
    }();
    new (n(6))('a[href*="#"]',{
        speed: 800,
        speedAsDuration: !0
    });
    var d = document.querySelectorAll(".share__link");
    d && d.forEach(function(t) {
        t.addEventListener("click", function(t) {
            var e = this.getAttribute("data-sharer");
            "undefined" != typeof gtag && gtag("event", "click", {
                event_category: "social_share",
                event_label: e
            })
        })
    });
    var f = document.querySelector(".js-header-download")
      , h = document.querySelector(".js-header-github")
      , g = document.querySelector(".js-header-arrow");
    f && f.addEventListener("click", function(t) {
        gtag("event", "click", {
            event_category: "header",
            event_label: "download repo"
        })
    }),
    h && h.addEventListener("click", function(t) {
        gtag("event", "click", {
            event_category: "header",
            event_label: "go to github"
        })
    }),
    g && g.addEventListener("click", function(t) {
        gtag("event", "click", {
            event_category: "header",
            event_label: "arrow"
        })
    })
}
, function(t, e, n) {
    /*!
 * simpleParallax.min - simpleParallax is a simple JavaScript library that gives your website parallax animations on any images, 
 * @date: 22-05-2019 18:36:24, 
 * @version: 5.0.0,
 * @link: https://simpleparallax.com/
 */
    window,
    t.exports = function() {
        return n = {},
        t.m = e = [function(t, e, n) {
            "use strict";
            function a(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var a = e[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(t, a.key, a)
                }
            }
            n.r(e);
            var i = function() {
                function t() {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.positions = {
                        top: 0,
                        bottom: 0,
                        height: 0
                    }
                }
                return function(t, e, n) {
                    e && a(t.prototype, e)
                }(t, [{
                    key: "setViewportTop",
                    value: function() {
                        return this.positions.top = window.pageYOffset,
                        this.positions
                    }
                }, {
                    key: "setViewportBottom",
                    value: function() {
                        return this.positions.bottom = this.positions.top + this.positions.height,
                        this.positions
                    }
                }, {
                    key: "setViewportHeight",
                    value: function() {
                        return this.positions.height = document.documentElement.clientHeight,
                        this.positions
                    }
                }, {
                    key: "setViewportAll",
                    value: function() {
                        return this.positions.top = window.pageYOffset,
                        this.positions.bottom = this.positions.top + this.positions.height,
                        this.positions.height = document.documentElement.clientHeight,
                        this.positions
                    }
                }]),
                t
            }()
              , s = function() {
                for (var t, e = "transform webkitTransform mozTransform oTransform msTransform".split(" "), n = 0; void 0 === t; )
                    t = void 0 !== document.createElement("div").style[e[n]] ? e[n] : void 0,
                    n++;
                return t
            }()
              , o = function(t) {
                return !(!t || !t.complete || void 0 !== t.naturalWidth && 0 === t.naturalWidth)
            };
            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var a = e[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(t, a.key, a)
                }
            }
            var l = function() {
                function t(e, n) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.element = e,
                    this.elementContainer = e,
                    this.settings = n,
                    this.isVisible = !0,
                    this.isInit = !1,
                    this.oldTranslateValue = -1,
                    this.init = this.init.bind(this),
                    o(e) ? this.init() : this.element.addEventListener("load", this.init)
                }
                return e = t,
                (n = [{
                    key: "init",
                    value: function() {
                        this.isInit || (!1 === this.settings.overflow && this.wrapElement(this.element),
                        this.setStyle(),
                        this.getElementOffset(),
                        this.intersectionObserver(),
                        this.getTranslateValue(),
                        this.animate(),
                        this.isInit = !0)
                    }
                }, {
                    key: "wrapElement",
                    value: function() {
                        var t = this.element.closest("picture") || this.element
                          , e = document.createElement("div");
                        e.classList.add("simpleParallax"),
                        e.style.overflow = "hidden",
                        t.parentNode.insertBefore(e, t),
                        e.appendChild(t),
                        this.elementContainer = e
                    }
                }, {
                    key: "unWrapElement",
                    value: function() {
                        var t = this.elementContainer;
                        t.replaceWith.apply(t, function(t) {
                            return function(t) {
                                if (Array.isArray(t)) {
                                    for (var e = 0, n = new Array(t.length); e < t.length; e++)
                                        n[e] = t[e];
                                    return n
                                }
                            }(t) || function(t) {
                                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
                                    return Array.from(t)
                            }(t) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance")
                            }()
                        }(t.childNodes))
                    }
                }, {
                    key: "setStyle",
                    value: function() {
                        !1 === this.settings.overflow && (this.element.style[s] = "scale(" + this.settings.scale + ")"),
                        0 < this.settings.delay && (this.element.style.transition = "transform " + this.settings.delay + "s " + this.settings.transition),
                        this.element.style.willChange = "transform"
                    }
                }, {
                    key: "unSetStyle",
                    value: function() {
                        this.element.style.willChange = "",
                        this.element.style[s] = "",
                        this.element.style.transition = ""
                    }
                }, {
                    key: "getElementOffset",
                    value: function() {
                        var t = this.elementContainer.getBoundingClientRect();
                        this.elementHeight = t.height,
                        this.elementTop = t.top + f.positions.top,
                        this.elementBottom = this.elementHeight + this.elementTop
                    }
                }, {
                    key: "buildThresholdList",
                    value: function() {
                        for (var t = [], e = 1; e <= this.elementHeight; e++) {
                            var n = e / this.elementHeight;
                            t.push(n)
                        }
                        return t
                    }
                }, {
                    key: "intersectionObserver",
                    value: function() {
                        var t = {
                            root: null,
                            threshold: this.buildThresholdList()
                        };
                        this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this),t),
                        this.observer.observe(this.element)
                    }
                }, {
                    key: "intersectionObserverCallback",
                    value: function(t) {
                        for (var e = t.length - 1; 0 <= e; e--)
                            t[e].isIntersecting ? this.isVisible = !0 : this.isVisible = !1
                    }
                }, {
                    key: "checkIfVisible",
                    value: function() {
                        return this.elementBottom > f.positions.top && this.elementTop < f.positions.bottom
                    }
                }, {
                    key: "getRangeMax",
                    value: function() {
                        var t = this.element.clientHeight;
                        this.rangeMax = t * this.settings.scale - t
                    }
                }, {
                    key: "getTranslateValue",
                    value: function() {
                        var t = ((f.positions.bottom - this.elementTop) / ((f.positions.height + this.elementHeight) / 100)).toFixed(1);
                        return t = Math.min(100, Math.max(0, t)),
                        this.oldPercentage !== t && (this.rangeMax || this.getRangeMax(),
                        this.translateValue = (t / 100 * this.rangeMax - this.rangeMax / 2).toFixed(0),
                        this.oldTranslateValue !== this.translateValue && (this.oldPercentage = t,
                        this.oldTranslateValue = this.translateValue,
                        !0))
                    }
                }, {
                    key: "animate",
                    value: function() {
                        var t, e = 0, n = 0;
                        (this.settings.orientation.includes("left") || this.settings.orientation.includes("right")) && (n = (this.settings.orientation.includes("left") ? -1 * this.translateValue : this.translateValue) + "px"),
                        (this.settings.orientation.includes("up") || this.settings.orientation.includes("down")) && (e = (this.settings.orientation.includes("up") ? -1 * this.translateValue : this.translateValue) + "px"),
                        t = !1 === this.settings.overflow ? "translate3d(" + n + ", " + e + ", 0) scale(" + this.settings.scale + ")" : "translate3d(" + n + ", " + e + ", 0)",
                        this.element.style[s] = t
                    }
                }]) && r(e.prototype, n),
                t;
                var e, n
            }();
            function u(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var a = e[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(t, a.key, a)
                }
            }
            n.d(e, "viewport", function() {
                return f
            }),
            n.d(e, "default", function() {
                return m
            });
            var c, d, f = new i, h = !0, g = !1, p = [], m = function() {
                function t(e, n) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.elements = void 0 !== e && NodeList.prototype.isPrototypeOf(e) ? e : [e],
                    this.defaults = {
                        delay: .4,
                        orientation: "up",
                        scale: 1.3,
                        overflow: !1,
                        transition: "cubic-bezier(0,0,0,1)",
                        breakpoint: !1
                    },
                    this.settings = Object.assign(this.defaults, n),
                    this.settings.breakpoint && document.documentElement.clientWidth <= this.settings.breakpoint || (!1 in window && (h = !1),
                    this.lastPosition = -1,
                    this.handleResize = this.handleResize.bind(this),
                    this.proceedRequestAnimationFrame = this.proceedRequestAnimationFrame.bind(this),
                    this.init())
                }
                return e = t,
                (n = [{
                    key: "init",
                    value: function() {
                        f.setViewportAll();
                        for (var t = this.elements.length - 1; 0 <= t; t--) {
                            var e = new l(this.elements[t],this.settings);
                            p.push(e)
                        }
                        c = p.length,
                        g || (this.proceedRequestAnimationFrame(),
                        window.addEventListener("resize", this.handleResize),
                        g = !0)
                    }
                }, {
                    key: "handleResize",
                    value: function() {
                        f.setViewportAll(),
                        this.settings.breakpoint && document.documentElement.clientWidth <= this.settings.breakpoint && this.destroy();
                        for (var t = c - 1; 0 <= t; t--)
                            p[t].getElementOffset(),
                            p[t].getRangeMax()
                    }
                }, {
                    key: "proceedRequestAnimationFrame",
                    value: function() {
                        if (f.setViewportTop(),
                        this.lastPosition !== f.positions.top) {
                            f.setViewportBottom();
                            for (var t = c - 1; 0 <= t; t--)
                                this.proceedElement(p[t]);
                            d = window.requestAnimationFrame(this.proceedRequestAnimationFrame),
                            this.lastPosition = f.positions.top
                        } else
                            d = window.requestAnimationFrame(this.proceedRequestAnimationFrame)
                    }
                }, {
                    key: "proceedElement",
                    value: function(t) {
                        (h ? t.isVisible : t.checkIfVisible()) && t.getTranslateValue() && t.animate()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        for (var t = [], e = c - 1; 0 <= e; e--)
                            for (var n = this.elements.length - 1; 0 <= n; n--)
                                if (p[e].element === this.elements[n]) {
                                    t.push(e);
                                    break
                                }
                        for (var a = 0; a < t.length; a++) {
                            var i = t[a];
                            p[i].unSetStyle(),
                            !1 === this.settings.overflow && p[i].unWrapElement(),
                            p = p.slice(0, i).concat(p.slice(i + 1, p.length))
                        }
                        (c = p.length) || (window.cancelAnimationFrame(d),
                        window.removeEventListener("resize", this.handleResize))
                    }
                }]) && u(e.prototype, n),
                t;
                var e, n
            }()
        }
        ],
        t.c = n,
        t.d = function(e, n, a) {
            t.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: a
            })
        }
        ,
        t.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        t.t = function(e, n) {
            if (1 & n && (e = t(e)),
            8 & n)
                return e;
            if (4 & n && "object" == typeof e && e && e.__esModule)
                return e;
            var a = Object.create(null);
            if (t.r(a),
            Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }),
            2 & n && "string" != typeof e)
                for (var i in e)
                    t.d(a, i, function(t) {
                        return e[t]
                    }
                    .bind(null, i));
            return a
        }
        ,
        t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return t.d(n, "a", n),
            n
        }
        ,
        t.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        t.p = "",
        t(t.s = 0);
        function t(a) {
            if (n[a])
                return n[a].exports;
            var i = n[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            return e[a].call(i.exports, i, i.exports, t),
            i.l = !0,
            i.exports
        }
        var e, n
    }()
}
, function(t, e, n) {
    (function(e) {
        var n = function(t) {
            var e = /\blang(?:uage)?-([\w-]+)\b/i
              , n = 0
              , a = {
                manual: t.Prism && t.Prism.manual,
                disableWorkerMessageHandler: t.Prism && t.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function(t) {
                        return t instanceof i ? new i(t.type,a.util.encode(t.content),t.alias) : Array.isArray(t) ? t.map(a.util.encode) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    },
                    type: function(t) {
                        return Object.prototype.toString.call(t).slice(8, -1)
                    },
                    objId: function(t) {
                        return t.__id || Object.defineProperty(t, "__id", {
                            value: ++n
                        }),
                        t.__id
                    },
                    clone: function t(e, n) {
                        var i, s, o = a.util.type(e);
                        switch (n = n || {},
                        o) {
                        case "Object":
                            if (s = a.util.objId(e),
                            n[s])
                                return n[s];
                            for (var r in i = {},
                            n[s] = i,
                            e)
                                e.hasOwnProperty(r) && (i[r] = t(e[r], n));
                            return i;
                        case "Array":
                            return s = a.util.objId(e),
                            n[s] ? n[s] : (i = [],
                            n[s] = i,
                            e.forEach(function(e, a) {
                                i[a] = t(e, n)
                            }),
                            i);
                        default:
                            return e
                        }
                    }
                },
                languages: {
                    extend: function(t, e) {
                        var n = a.util.clone(a.languages[t]);
                        for (var i in e)
                            n[i] = e[i];
                        return n
                    },
                    insertBefore: function(t, e, n, i) {
                        var s = (i = i || a.languages)[t]
                          , o = {};
                        for (var r in s)
                            if (s.hasOwnProperty(r)) {
                                if (r == e)
                                    for (var l in n)
                                        n.hasOwnProperty(l) && (o[l] = n[l]);
                                n.hasOwnProperty(r) || (o[r] = s[r])
                            }
                        var u = i[t];
                        return i[t] = o,
                        a.languages.DFS(a.languages, function(e, n) {
                            n === u && e != t && (this[e] = o)
                        }),
                        o
                    },
                    DFS: function t(e, n, i, s) {
                        s = s || {};
                        var o = a.util.objId;
                        for (var r in e)
                            if (e.hasOwnProperty(r)) {
                                n.call(e, r, e[r], i || r);
                                var l = e[r]
                                  , u = a.util.type(l);
                                "Object" !== u || s[o(l)] ? "Array" !== u || s[o(l)] || (s[o(l)] = !0,
                                t(l, n, r, s)) : (s[o(l)] = !0,
                                t(l, n, null, s))
                            }
                    }
                },
                plugins: {},
                highlightAll: function(t, e) {
                    a.highlightAllUnder(document, t, e)
                },
                highlightAllUnder: function(t, e, n) {
                    var i = {
                        callback: n,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    a.hooks.run("before-highlightall", i);
                    for (var s, o = i.elements || t.querySelectorAll(i.selector), r = 0; s = o[r++]; )
                        a.highlightElement(s, !0 === e, i.callback)
                },
                highlightElement: function(n, i, s) {
                    for (var o, r, l = n; l && !e.test(l.className); )
                        l = l.parentNode;
                    l && (o = (l.className.match(e) || [, ""])[1].toLowerCase(),
                    r = a.languages[o]),
                    n.className = n.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o,
                    n.parentNode && (l = n.parentNode,
                    /pre/i.test(l.nodeName) && (l.className = l.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o));
                    var u = {
                        element: n,
                        language: o,
                        grammar: r,
                        code: n.textContent
                    }
                      , c = function(t) {
                        u.highlightedCode = t,
                        a.hooks.run("before-insert", u),
                        u.element.innerHTML = u.highlightedCode,
                        a.hooks.run("after-highlight", u),
                        a.hooks.run("complete", u),
                        s && s.call(u.element)
                    };
                    if (a.hooks.run("before-sanity-check", u),
                    u.code)
                        if (a.hooks.run("before-highlight", u),
                        u.grammar)
                            if (i && t.Worker) {
                                var d = new Worker(a.filename);
                                d.onmessage = function(t) {
                                    c(t.data)
                                }
                                ,
                                d.postMessage(JSON.stringify({
                                    language: u.language,
                                    code: u.code,
                                    immediateClose: !0
                                }))
                            } else
                                c(a.highlight(u.code, u.grammar, u.language));
                        else
                            c(a.util.encode(u.code));
                    else
                        a.hooks.run("complete", u)
                },
                highlight: function(t, e, n) {
                    var s = {
                        code: t,
                        grammar: e,
                        language: n
                    };
                    return a.hooks.run("before-tokenize", s),
                    s.tokens = a.tokenize(s.code, s.grammar),
                    a.hooks.run("after-tokenize", s),
                    i.stringify(a.util.encode(s.tokens), s.language)
                },
                matchGrammar: function(t, e, n, s, o, r, l) {
                    for (var u in n)
                        if (n.hasOwnProperty(u) && n[u]) {
                            if (u == l)
                                return;
                            var c = n[u];
                            c = "Array" === a.util.type(c) ? c : [c];
                            for (var d = 0; d < c.length; ++d) {
                                var f = c[d]
                                  , h = f.inside
                                  , g = !!f.lookbehind
                                  , p = !!f.greedy
                                  , m = 0
                                  , y = f.alias;
                                if (p && !f.pattern.global) {
                                    var b = f.pattern.toString().match(/[imuy]*$/)[0];
                                    f.pattern = RegExp(f.pattern.source, b + "g")
                                }
                                f = f.pattern || f;
                                for (var v = s, A = o; v < e.length; A += e[v].length,
                                ++v) {
                                    var w = e[v];
                                    if (e.length > t.length)
                                        return;
                                    if (!(w instanceof i)) {
                                        if (p && v != e.length - 1) {
                                            if (f.lastIndex = A,
                                            !(O = f.exec(t)))
                                                break;
                                            for (var E = O.index + (g ? O[1].length : 0), F = O.index + O[0].length, _ = v, S = A, x = e.length; _ < x && (S < F || !e[_].type && !e[_ - 1].greedy); ++_)
                                                E >= (S += e[_].length) && (++v,
                                                A = S);
                                            if (e[v]instanceof i)
                                                continue;
                                            j = _ - v,
                                            w = t.slice(A, S),
                                            O.index -= A
                                        } else {
                                            f.lastIndex = 0;
                                            var O = f.exec(w)
                                              , j = 1
                                        }
                                        if (O) {
                                            g && (m = O[1] ? O[1].length : 0);
                                            F = (E = O.index + m) + (O = O[0].slice(m)).length;
                                            var L = w.slice(0, E)
                                              , P = w.slice(F)
                                              , M = [v, j];
                                            L && (++v,
                                            A += L.length,
                                            M.push(L));
                                            var T = new i(u,h ? a.tokenize(O, h) : O,y,O,p);
                                            if (M.push(T),
                                            P && M.push(P),
                                            Array.prototype.splice.apply(e, M),
                                            1 != j && a.matchGrammar(t, e, n, v, A, !0, u),
                                            r)
                                                break
                                        } else if (r)
                                            break
                                    }
                                }
                            }
                        }
                },
                tokenize: function(t, e) {
                    var n = [t]
                      , i = e.rest;
                    if (i) {
                        for (var s in i)
                            e[s] = i[s];
                        delete e.rest
                    }
                    return a.matchGrammar(t, n, e, 0, 0, !1),
                    n
                },
                hooks: {
                    all: {},
                    add: function(t, e) {
                        var n = a.hooks.all;
                        n[t] = n[t] || [],
                        n[t].push(e)
                    },
                    run: function(t, e) {
                        var n = a.hooks.all[t];
                        if (n && n.length)
                            for (var i, s = 0; i = n[s++]; )
                                i(e)
                    }
                },
                Token: i
            };
            function i(t, e, n, a, i) {
                this.type = t,
                this.content = e,
                this.alias = n,
                this.length = 0 | (a || "").length,
                this.greedy = !!i
            }
            if (t.Prism = a,
            i.stringify = function(t, e, n) {
                if ("string" == typeof t)
                    return t;
                if (Array.isArray(t))
                    return t.map(function(n) {
                        return i.stringify(n, e, t)
                    }).join("");
                var s = {
                    type: t.type,
                    content: i.stringify(t.content, e, n),
                    tag: "span",
                    classes: ["token", t.type],
                    attributes: {},
                    language: e,
                    parent: n
                };
                if (t.alias) {
                    var o = Array.isArray(t.alias) ? t.alias : [t.alias];
                    Array.prototype.push.apply(s.classes, o)
                }
                a.hooks.run("wrap", s);
                var r = Object.keys(s.attributes).map(function(t) {
                    return t + '="' + (s.attributes[t] || "").replace(/"/g, "&quot;") + '"'
                }).join(" ");
                return "<" + s.tag + ' class="' + s.classes.join(" ") + '"' + (r ? " " + r : "") + ">" + s.content + "</" + s.tag + ">"
            }
            ,
            !t.document)
                return t.addEventListener ? (a.disableWorkerMessageHandler || t.addEventListener("message", function(e) {
                    var n = JSON.parse(e.data)
                      , i = n.language
                      , s = n.code
                      , o = n.immediateClose;
                    t.postMessage(a.highlight(s, a.languages[i], i)),
                    o && t.close()
                }, !1),
                a) : a;
            var s = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
            return s && (a.filename = s.src,
            a.manual || s.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(a.highlightAll) : window.setTimeout(a.highlightAll, 16) : document.addEventListener("DOMContentLoaded", a.highlightAll))),
            a
        }("undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
        t.exports && (t.exports = n),
        void 0 !== e && (e.Prism = n),
        n.languages.markup = {
            comment: /<!--[\s\S]*?-->/,
            prolog: /<\?[\s\S]+?\?>/,
            doctype: /<!DOCTYPE[\s\S]+?>/i,
            cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
            tag: {
                pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s\/>])))+)?\s*\/?>/i,
                greedy: !0,
                inside: {
                    tag: {
                        pattern: /^<\/?[^\s>\/]+/i,
                        inside: {
                            punctuation: /^<\/?/,
                            namespace: /^[^\s>\/:]+:/
                        }
                    },
                    "attr-value": {
                        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
                        inside: {
                            punctuation: [/^=/, {
                                pattern: /^(\s*)["']|["']$/,
                                lookbehind: !0
                            }]
                        }
                    },
                    punctuation: /\/?>/,
                    "attr-name": {
                        pattern: /[^\s>\/]+/,
                        inside: {
                            namespace: /^[^\s>\/:]+:/
                        }
                    }
                }
            },
            entity: /&#?[\da-z]{1,8};/i
        },
        n.languages.markup.tag.inside["attr-value"].inside.entity = n.languages.markup.entity,
        n.hooks.add("wrap", function(t) {
            "entity" === t.type && (t.attributes.title = t.content.replace(/&amp;/, "&"))
        }),
        Object.defineProperty(n.languages.markup.tag, "addInlined", {
            value: function(t, e) {
                var a = {};
                a["language-" + e] = {
                    pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                    lookbehind: !0,
                    inside: n.languages[e]
                },
                a.cdata = /^<!\[CDATA\[|\]\]>$/i;
                var i = {
                    "included-cdata": {
                        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                        inside: a
                    }
                };
                i["language-" + e] = {
                    pattern: /[\s\S]+/,
                    inside: n.languages[e]
                };
                var s = {};
                s[t] = {
                    pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, t), "i"),
                    lookbehind: !0,
                    greedy: !0,
                    inside: i
                },
                n.languages.insertBefore("markup", "cdata", s)
            }
        }),
        n.languages.xml = n.languages.extend("markup", {}),
        n.languages.html = n.languages.markup,
        n.languages.mathml = n.languages.markup,
        n.languages.svg = n.languages.markup,
        function(t) {
            var e = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
            t.languages.css = {
                comment: /\/\*[\s\S]*?\*\//,
                atrule: {
                    pattern: /@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,
                    inside: {
                        rule: /@[\w-]+/
                    }
                },
                url: RegExp("url\\((?:" + e.source + "|.*?)\\)", "i"),
                selector: RegExp("[^{}\\s](?:[^{};\"']|" + e.source + ")*?(?=\\s*\\{)"),
                string: {
                    pattern: e,
                    greedy: !0
                },
                property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
                important: /!important\b/i,
                function: /[-a-z0-9]+(?=\()/i,
                punctuation: /[(){};:,]/
            },
            t.languages.css.atrule.inside.rest = t.languages.css;
            var n = t.languages.markup;
            n && (n.tag.addInlined("style", "css"),
            t.languages.insertBefore("inside", "attr-value", {
                "style-attr": {
                    pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                    inside: {
                        "attr-name": {
                            pattern: /^\s*style/i,
                            inside: n.tag.inside
                        },
                        punctuation: /^\s*=\s*['"]|['"]\s*$/,
                        "attr-value": {
                            pattern: /.+/i,
                            inside: t.languages.css
                        }
                    },
                    alias: "language-css"
                }
            }, n.tag))
        }(n),
        n.languages.clike = {
            comment: [{
                pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                lookbehind: !0
            }, {
                pattern: /(^|[^\\:])\/\/.*/,
                lookbehind: !0,
                greedy: !0
            }],
            string: {
                pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                greedy: !0
            },
            "class-name": {
                pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
                lookbehind: !0,
                inside: {
                    punctuation: /[.\\]/
                }
            },
            keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
            boolean: /\b(?:true|false)\b/,
            function: /\w+(?=\()/,
            number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
            operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
            punctuation: /[{}[\];(),.:]/
        },
        n.languages.javascript = n.languages.extend("clike", {
            "class-name": [n.languages.clike["class-name"], {
                pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
                lookbehind: !0
            }],
            keyword: [{
                pattern: /((?:^|})\s*)(?:catch|finally)\b/,
                lookbehind: !0
            }, {
                pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                lookbehind: !0
            }],
            number: /\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
            function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
            operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
        }),
        n.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,
        n.languages.insertBefore("javascript", "keyword", {
            regex: {
                pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
                lookbehind: !0,
                greedy: !0
            },
            "function-variable": {
                pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
                alias: "function"
            },
            parameter: [{
                pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
                lookbehind: !0,
                inside: n.languages.javascript
            }, {
                pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
                inside: n.languages.javascript
            }, {
                pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: n.languages.javascript
            }, {
                pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: n.languages.javascript
            }],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
        }),
        n.languages.insertBefore("javascript", "string", {
            "template-string": {
                pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
                greedy: !0,
                inside: {
                    interpolation: {
                        pattern: /\${[^}]+}/,
                        inside: {
                            "interpolation-punctuation": {
                                pattern: /^\${|}$/,
                                alias: "punctuation"
                            },
                            rest: n.languages.javascript
                        }
                    },
                    string: /[\s\S]+/
                }
            }
        }),
        n.languages.markup && n.languages.markup.tag.addInlined("script", "javascript"),
        n.languages.js = n.languages.javascript,
        "undefined" != typeof self && self.Prism && self.document && document.querySelector && (self.Prism.fileHighlight = function(t) {
            t = t || document;
            var e = {
                js: "javascript",
                py: "python",
                rb: "ruby",
                ps1: "powershell",
                psm1: "powershell",
                sh: "bash",
                bat: "batch",
                h: "c",
                tex: "latex"
            };
            Array.prototype.slice.call(t.querySelectorAll("pre[data-src]")).forEach(function(t) {
                if (!t.hasAttribute("data-src-loaded")) {
                    for (var a, i = t.getAttribute("data-src"), s = t, o = /\blang(?:uage)?-([\w-]+)\b/i; s && !o.test(s.className); )
                        s = s.parentNode;
                    if (s && (a = (t.className.match(o) || [, ""])[1]),
                    !a) {
                        var r = (i.match(/\.(\w+)$/) || [, ""])[1];
                        a = e[r] || r
                    }
                    var l = document.createElement("code");
                    l.className = "language-" + a,
                    t.textContent = "",
                    l.textContent = "Loading…",
                    t.appendChild(l);
                    var u = new XMLHttpRequest;
                    u.open("GET", i, !0),
                    u.onreadystatechange = function() {
                        4 == u.readyState && (u.status < 400 && u.responseText ? (l.textContent = u.responseText,
                        n.highlightElement(l),
                        t.setAttribute("data-src-loaded", "")) : u.status >= 400 ? l.textContent = "✖ Error " + u.status + " while fetching file: " + u.statusText : l.textContent = "✖ Error: File does not exist or is empty")
                    }
                    ,
                    u.send(null)
                }
            }),
            n.plugins.toolbar && n.plugins.toolbar.registerButton("download-file", function(t) {
                var e = t.element.parentNode;
                if (e && /pre/i.test(e.nodeName) && e.hasAttribute("data-src") && e.hasAttribute("data-download-link")) {
                    var n = e.getAttribute("data-src")
                      , a = document.createElement("a");
                    return a.textContent = e.getAttribute("data-download-link-label") || "Download",
                    a.setAttribute("download", ""),
                    a.href = n,
                    a
                }
            })
        }
        ,
        document.addEventListener("DOMContentLoaded", function() {
            self.Prism.fileHighlight()
        }))
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    "use strict";
    n.r(e);
    const a = (t,e)=>t.getAttribute("data-" + e)
      , i = t=>((t,e,n)=>{
        var a = "data-" + e;
        null !== n ? t.setAttribute(a, n) : t.removeAttribute(a)
    }
    )(t, "was-processed", "true")
      , s = t=>"true" === a(t, "was-processed")
      , o = function(t) {
        return t.getBoundingClientRect().top + window.pageYOffset - t.ownerDocument.documentElement.clientTop
    }
      , r = function(t, e, n) {
        return (e === window ? window.innerHeight + window.pageYOffset : o(e) + e.offsetHeight) <= o(t) - n
    }
      , l = function(t) {
        return t.getBoundingClientRect().left + window.pageXOffset - t.ownerDocument.documentElement.clientLeft
    }
      , u = function(t, e, n) {
        const a = window.innerWidth;
        return (e === window ? a + window.pageXOffset : l(e) + a) <= l(t) - n
    }
      , c = function(t, e, n) {
        return (e === window ? window.pageYOffset : o(e)) >= o(t) + n + t.offsetHeight
    }
      , d = function(t, e, n) {
        return (e === window ? window.pageXOffset : l(e)) >= l(t) + n + t.offsetWidth
    };
    function f(t, e, n) {
        return !(r(t, e, n) || c(t, e, n) || u(t, e, n) || d(t, e, n))
    }
    const h = function(t, e) {
        var n;
        let a = new t(e);
        try {
            n = new CustomEvent("LazyLoad::Initialized",{
                detail: {
                    instance: a
                }
            })
        } catch (t) {
            (n = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
                instance: a
            })
        }
        window.dispatchEvent(n)
    };
    const g = (t,e)=>e ? t.replace(/\.(jpe?g|png)/gi, ".webp") : t
      , p = "undefined" != typeof window
      , m = p && !("onscroll"in window) || /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)
      , y = p && "classList"in document.createElement("p")
      , b = p && (!(!(v = document.createElement("canvas")).getContext || !v.getContext("2d")) && 0 === v.toDataURL("image/webp").indexOf("data:image/webp"));
    var v;
    const A = (t,e)=>{
        y ? t.classList.add(e) : t.className += (t.className ? " " : "") + e
    }
      , w = function(t, e, n, i) {
        for (let s, o = 0; s = t.children[o]; o += 1)
            if ("SOURCE" === s.tagName) {
                let t = a(s, n);
                E(s, e, t, i)
            }
    }
      , E = function(t, e, n, a) {
        n && t.setAttribute(e, g(n, a))
    }
      , F = {
        IMG: (t,e)=>{
            const n = b && e.to_webp
              , i = e.data_srcset
              , s = t.parentNode;
            s && "PICTURE" === s.tagName && w(s, "srcset", i, n);
            const o = a(t, e.data_sizes);
            E(t, "sizes", o);
            const r = a(t, i);
            E(t, "srcset", r, n);
            const l = a(t, e.data_src);
            E(t, "src", l, n)
        }
        ,
        IFRAME: (t,e)=>{
            const n = a(t, e.data_src);
            E(t, "src", n)
        }
        ,
        VIDEO: (t,e)=>{
            const n = e.data_src
              , i = a(t, n);
            w(t, "src", n),
            E(t, "src", i),
            t.load()
        }
    }
      , _ = (t,e)=>{
        const n = e._settings
          , i = t.tagName
          , s = F[i];
        if (s)
            return s(t, n),
            e._updateLoadingCount(1),
            void (e._elements = ((t,e)=>t.filter(t=>t !== e))(e._elements, t));
        ((t,e)=>{
            const n = b && e.to_webp
              , i = a(t, e.data_src)
              , s = a(t, e.data_bg);
            if (i) {
                let e = g(i, n);
                t.style.backgroundImage = `url("${e}")`
            }
            if (s) {
                let e = g(s, n);
                t.style.backgroundImage = e
            }
        }
        )(t, n)
    }
      , S = function(t, e) {
        t && t(e)
    }
      , x = (t,e,n)=>{
        t.addEventListener(e, n)
    }
      , O = (t,e,n)=>{
        t.removeEventListener(e, n)
    }
      , j = (t,e,n)=>{
        O(t, "load", e),
        O(t, "loadeddata", e),
        O(t, "error", n)
    }
      , L = function(t, e, n) {
        var a = n._settings;
        const i = e ? a.class_loaded : a.class_error
          , s = e ? a.callback_load : a.callback_error
          , o = t.target;
        ((t,e)=>{
            y ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
        }
        )(o, a.class_loading),
        A(o, i),
        S(s, o),
        n._updateLoadingCount(-1)
    }
      , P = (t,e)=>{
        const n = i=>{
            L(i, !0, e),
            j(t, n, a)
        }
          , a = i=>{
            L(i, !1, e),
            j(t, n, a)
        }
        ;
        ((t,e,n)=>{
            x(t, "load", e),
            x(t, "loadeddata", e),
            x(t, "error", n)
        }
        )(t, n, a)
    }
      , M = ["IMG", "IFRAME", "VIDEO"];
    const T = function(t) {
        this._settings = Object.assign({}, (()=>({
            elements_selector: "img",
            container: window,
            threshold: 300,
            throttle: 150,
            data_src: "src",
            data_srcset: "srcset",
            data_sizes: "sizes",
            data_bg: "bg",
            class_loading: "loading",
            class_loaded: "loaded",
            class_error: "error",
            class_initial: "initial",
            skip_invisible: !0,
            callback_load: null,
            callback_error: null,
            callback_set: null,
            callback_enter: null,
            callback_finish: null,
            to_webp: !1
        }))(), t),
        this._loadingCount = 0,
        this._queryOriginNode = this._settings.container === window ? document : this._settings.container,
        this._previousLoopTime = 0,
        this._loopTimeout = null,
        this._boundHandleScroll = this.handleScroll.bind(this),
        this._isFirstLoop = !0,
        window.addEventListener("resize", this._boundHandleScroll),
        this.update()
    };
    T.prototype = {
        _loopThroughElements: function(t) {
            const e = this._settings
              , n = this._elements
              , a = n ? n.length : 0;
            let i, s = [], o = this._isFirstLoop;
            if (o && (this._isFirstLoop = !1),
            0 !== a) {
                for (i = 0; i < a; i++) {
                    let a = n[i];
                    e.skip_invisible && null === a.offsetParent || (t || f(a, e.container, e.threshold)) && (o && A(a, e.class_initial),
                    this.load(a),
                    s.push(i))
                }
                ((t,e)=>{
                    for (; e.length; )
                        t.splice(e.pop(), 1)
                }
                )(n, s)
            } else
                this._stopScrollHandler()
        },
        _startScrollHandler: function() {
            this._isHandlingScroll || (this._isHandlingScroll = !0,
            this._settings.container.addEventListener("scroll", this._boundHandleScroll))
        },
        _stopScrollHandler: function() {
            this._isHandlingScroll && (this._isHandlingScroll = !1,
            this._settings.container.removeEventListener("scroll", this._boundHandleScroll))
        },
        _updateLoadingCount: function(t) {
            this._loadingCount += t,
            0 === this._elements.length && 0 === this._loadingCount && S(this._settings.callback_finish)
        },
        handleScroll: function() {
            const t = this._settings.throttle;
            if (0 !== t) {
                let e = Date.now()
                  , n = t - (e - this._previousLoopTime);
                n <= 0 || n > t ? (this._loopTimeout && (clearTimeout(this._loopTimeout),
                this._loopTimeout = null),
                this._previousLoopTime = e,
                this._loopThroughElements()) : this._loopTimeout || (this._loopTimeout = setTimeout(function() {
                    this._previousLoopTime = Date.now(),
                    this._loopTimeout = null,
                    this._loopThroughElements()
                }
                .bind(this), n))
            } else
                this._loopThroughElements()
        },
        loadAll: function() {
            this._loopThroughElements(!0)
        },
        update: function(t) {
            const e = this._settings
              , n = t || this._queryOriginNode.querySelectorAll(e.elements_selector);
            this._elements = (t=>t.filter(t=>!s(t)))(Array.prototype.slice.call(n)),
            m ? this.loadAll() : (this._loopThroughElements(),
            this._startScrollHandler())
        },
        destroy: function() {
            window.removeEventListener("resize", this._boundHandleScroll),
            this._loopTimeout && (clearTimeout(this._loopTimeout),
            this._loopTimeout = null),
            this._stopScrollHandler(),
            this._elements = null,
            this._queryOriginNode = null,
            this._settings = null
        },
        load: function(t, e) {
            !function(t, e, n) {
                var a = e._settings;
                !n && s(t) || (S(a.callback_enter, t),
                M.indexOf(t.tagName) > -1 && (P(t, e),
                A(t, a.class_loading)),
                _(t, e),
                i(t),
                S(a.callback_set, t))
            }(t, this, e)
        }
    },
    p && function(t, e) {
        if (e)
            if (e.length)
                for (let n, a = 0; n = e[a]; a += 1)
                    h(t, n);
            else
                h(t, e)
    }(T, window.lazyLoadOptions),
    e.default = T
}
, function(t, e, n) {
    "use strict";
    var a = function() {
        for (var t = "transform webkitTransform mozTransform oTransform msTransform".split(" "), e = void 0, n = 0; void 0 === e; )
            e = void 0 !== document.createElement("div").style[t[n]] ? t[n] : void 0,
            n++;
        return e
    }()
      , i = !1;
      console.log(i)
    (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (i = !0);
    var s = document.querySelector("header")
      , o = document.querySelector(".logo-dark")
      , r = document.querySelector(".logo-light")
      , l = window.innerHeight
      , u = window.innerWidth;
    s.addEventListener("mousemove", function(t) {
        if (!i) {
            var e = ((t.clientX / u * 100).toFixed(0) - 50) / 4
              , n = ((t.clientY / l * 100).toFixed(0) - 50) / 4
              , s = "translate3d(" + e + "px, " + n + "px, 0)"
              , c = "translate3d(" + -e + "px, " + -n + "px, 0)";
            o.style[a] = s,
            r.style[a] = c
        }
    })
}
, function(t, e, n) {
    (function(n) {
        var a, i;
        /*!
 * smooth-scroll v16.0.3
 * Animate scrolling to anchor links
 * (c) 2019 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/smooth-scroll
 */
        /*!
 * smooth-scroll v16.0.3
 * Animate scrolling to anchor links
 * (c) 2019 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/smooth-scroll
 */
        i = void 0 !== n ? n : "undefined" != typeof window ? window : this,
        void 0 === (a = function() {
            return function(t) {
                "use strict";
                var e = {
                    ignore: "[data-scroll-ignore]",
                    header: null,
                    topOnEmptyHash: !0,
                    speed: 500,
                    speedAsDuration: !1,
                    durationMax: null,
                    durationMin: null,
                    clip: !0,
                    offset: 0,
                    easing: "easeInOutCubic",
                    customEasing: null,
                    updateURL: !0,
                    popstate: !0,
                    emitEvents: !0
                }
                  , n = function() {
                    var t = {};
                    return Array.prototype.forEach.call(arguments, function(e) {
                        for (var n in e) {
                            if (!e.hasOwnProperty(n))
                                return;
                            t[n] = e[n]
                        }
                    }),
                    t
                }
                  , a = function(t) {
                    "#" === t.charAt(0) && (t = t.substr(1));
                    for (var e, n = String(t), a = n.length, i = -1, s = "", o = n.charCodeAt(0); ++i < a; ) {
                        if (0 === (e = n.charCodeAt(i)))
                            throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                        s += e >= 1 && e <= 31 || 127 == e || 0 === i && e >= 48 && e <= 57 || 1 === i && e >= 48 && e <= 57 && 45 === o ? "\\" + e.toString(16) + " " : e >= 128 || 45 === e || 95 === e || e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122 ? n.charAt(i) : "\\" + n.charAt(i)
                    }
                    return "#" + s
                }
                  , i = function() {
                    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
                }
                  , s = function(e) {
                    return e ? (n = e,
                    parseInt(t.getComputedStyle(n).height, 10) + e.offsetTop) : 0;
                    var n
                }
                  , o = function(e, n, a, i) {
                    if (n.emitEvents && "function" == typeof t.CustomEvent) {
                        var s = new CustomEvent(e,{
                            bubbles: !0,
                            detail: {
                                anchor: a,
                                toggle: i
                            }
                        });
                        document.dispatchEvent(s)
                    }
                };
                return function(r, l) {
                    var u, c, d, f, h = {
                        cancelScroll: function(t) {
                            cancelAnimationFrame(f),
                            f = null,
                            t || o("scrollCancel", u)
                        },
                        animateScroll: function(a, r, l) {
                            h.cancelScroll();
                            var c = n(u || e, l || {})
                              , g = "[object Number]" === Object.prototype.toString.call(a)
                              , p = g || !a.tagName ? null : a;
                            if (g || p) {
                                var m = t.pageYOffset;
                                c.header && !d && (d = document.querySelector(c.header));
                                var y, b, v, A = s(d), w = g ? a : function(e, n, a, s) {
                                    var o = 0;
                                    if (e.offsetParent)
                                        do {
                                            o += e.offsetTop,
                                            e = e.offsetParent
                                        } while (e);return o = Math.max(o - n - a, 0),
                                    s && (o = Math.min(o, i() - t.innerHeight)),
                                    o
                                }(p, A, parseInt("function" == typeof c.offset ? c.offset(a, r) : c.offset, 10), c.clip), E = w - m, F = i(), _ = 0, S = function(t, e) {
                                    var n = e.speedAsDuration ? e.speed : Math.abs(t / 1e3 * e.speed);
                                    return e.durationMax && n > e.durationMax ? e.durationMax : e.durationMin && n < e.durationMin ? e.durationMin : parseInt(n, 10)
                                }(E, c), x = function(e, n) {
                                    var i = t.pageYOffset;
                                    if (e == n || i == n || (m < n && t.innerHeight + i) >= F)
                                        return h.cancelScroll(!0),
                                        function(e, n, a) {
                                            0 === e && document.body.focus(),
                                            a || (e.focus(),
                                            document.activeElement !== e && (e.setAttribute("tabindex", "-1"),
                                            e.focus(),
                                            e.style.outline = "none"),
                                            t.scrollTo(0, n))
                                        }(a, n, g),
                                        o("scrollStop", c, a, r),
                                        y = null,
                                        f = null,
                                        !0
                                }, O = function(e) {
                                    var n, a, i;
                                    y || (y = e),
                                    _ += e - y,
                                    v = m + E * (a = b = (b = 0 === S ? 0 : _ / S) > 1 ? 1 : b,
                                    "easeInQuad" === (n = c).easing && (i = a * a),
                                    "easeOutQuad" === n.easing && (i = a * (2 - a)),
                                    "easeInOutQuad" === n.easing && (i = a < .5 ? 2 * a * a : (4 - 2 * a) * a - 1),
                                    "easeInCubic" === n.easing && (i = a * a * a),
                                    "easeOutCubic" === n.easing && (i = --a * a * a + 1),
                                    "easeInOutCubic" === n.easing && (i = a < .5 ? 4 * a * a * a : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1),
                                    "easeInQuart" === n.easing && (i = a * a * a * a),
                                    "easeOutQuart" === n.easing && (i = 1 - --a * a * a * a),
                                    "easeInOutQuart" === n.easing && (i = a < .5 ? 8 * a * a * a * a : 1 - 8 * --a * a * a * a),
                                    "easeInQuint" === n.easing && (i = a * a * a * a * a),
                                    "easeOutQuint" === n.easing && (i = 1 + --a * a * a * a * a),
                                    "easeInOutQuint" === n.easing && (i = a < .5 ? 16 * a * a * a * a * a : 1 + 16 * --a * a * a * a * a),
                                    n.customEasing && (i = n.customEasing(a)),
                                    i || a),
                                    t.scrollTo(0, Math.floor(v)),
                                    x(v, w) || (f = t.requestAnimationFrame(O),
                                    y = e)
                                };
                                0 === t.pageYOffset && t.scrollTo(0, 0),
                                function(t, e, n) {
                                    e || history.pushState && n.updateURL && history.pushState({
                                        smoothScroll: JSON.stringify(n),
                                        anchor: t.id
                                    }, document.title, t === document.documentElement ? "#top" : "#" + t.id)
                                }(a, g, c),
                                o("scrollStart", c, a, r),
                                h.cancelScroll(!0),
                                t.requestAnimationFrame(O)
                            }
                        }
                    }, g = function(e) {
                        if (!("matchMedia"in t && t.matchMedia("(prefers-reduced-motion)").matches) && !e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && "closest"in e.target && (c = e.target.closest(r)) && "a" === c.tagName.toLowerCase() && !e.target.closest(u.ignore) && c.hostname === t.location.hostname && c.pathname === t.location.pathname && /#/.test(c.href)) {
                            var n, i = a(c.hash);
                            if ("#" === i) {
                                if (!u.topOnEmptyHash)
                                    return;
                                n = document.documentElement
                            } else
                                n = document.querySelector(i);
                            (n = n || "#top" !== i ? n : document.documentElement) && (e.preventDefault(),
                            function(e) {
                                if (history.replaceState && e.updateURL && !history.state) {
                                    var n = t.location.hash;
                                    n = n || "",
                                    history.replaceState({
                                        smoothScroll: JSON.stringify(e),
                                        anchor: n || t.pageYOffset
                                    }, document.title, n || t.location.href)
                                }
                            }(u),
                            h.animateScroll(n, c))
                        }
                    }, p = function(t) {
                        if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(u)) {
                            var e = history.state.anchor;
                            "string" == typeof e && e && !(e = document.querySelector(a(history.state.anchor))) || h.animateScroll(e, null, {
                                updateURL: !1
                            })
                        }
                    };
                    return h.destroy = function() {
                        u && (document.removeEventListener("click", g, !1),
                        t.removeEventListener("popstate", p, !1),
                        h.cancelScroll(),
                        u = null,
                        c = null,
                        d = null,
                        f = null)
                    }
                    ,
                    function() {
                        if (!("querySelector"in document && "addEventListener"in t && "requestAnimationFrame"in t && "closest"in t.Element.prototype))
                            throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                        h.destroy(),
                        u = n(e, l || {}),
                        d = u.header ? document.querySelector(u.header) : null,
                        document.addEventListener("click", g, !1),
                        u.updateURL && u.popstate && t.addEventListener("popstate", p, !1)
                    }(),
                    h
                }
            }(i)
        }
        .apply(e, [])) || (t.exports = a)
    }
    ).call(this, n(0))
}
]);
