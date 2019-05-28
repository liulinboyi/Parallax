// function(t, e, n) {
    // "use strict";
    // var a = function() {
    //     for (var t = "transform webkitTransform mozTransform oTransform msTransform".split(" "), e = void 0, n = 0; void 0 === e; )
    //         e = void 0 !== document.createElement("div").style[t[n]] ? t[n] : void 0,
    //         n++;
    //     return e
    // }()
    let a = "transform",i = false;
    // console.log(navigator.userAgent.match(/Android/i))
    // (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (i = !0);
    // console.log(navigator.userAgent.match(/Android/i))
    var header = document.querySelector("header")
      , logodark = document.querySelector(".logo-dark")
      , logolight = document.querySelector(".logo-light")
      , height = window.innerHeight
      , width = window.innerWidth;
      header.addEventListener("mousemove", function(event) {
        if (!i) {
            // console.log(event)
            var e = ((event.clientX / width * 100).toFixed(0) - 50) / 4
              , n = ((event.clientY / height * 100).toFixed(0) - 50) / 4
              , s = "translate3d(" + e + "px, " + n + "px, 0)"
              , c = "translate3d(" + -e + "px, " + -n + "px, 0)";
            logodark.style[a] = s,
            logolight.style[a] = c
        }
    })
// }