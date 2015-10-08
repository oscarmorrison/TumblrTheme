/*! theme 24-06-2015 */
/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
/*!
 * Olle Ota
 * Fetch more posts from infinite scroll if doc height is too small
 */
function fetchMore() {
    1 == theme_options.infinite_scroll && $(window).height() >= $(document).height() && $(".index #content").infinitescroll("retrieve")
}
/*!
 * Olle Ota
 * Prepares grid after initial load
 */
function prepareGrid() {
    $(".index #content").masonry({
        itemSelector: ".index article"
    }).imagesLoaded(function() {
        $(".index #content").masonry("reloadItems").masonry(), fetchMore()
    })
}
/*!
 * Olle Ota
 * Enable responsive video
 */
/*!
 * Olle Ota
 * Enable responsive video
 */
function responsiveVideo() {
    var a = "",
        b = function(b) {
            a += "iframe[src*='" + b + "'], "
        }, c = function(a, b) {
            return a.slice(0, -1 * b)
        };
    b("dailymotion.com"), b("instagram.com"), b("soundcloud.com"), b("tumblr.com"), b("vine.co"), $("body").hasClass("permalink") && b("spotify.com"), $('.index iframe[src*="spotify.com"]').each(function() {
        var a = $(this).css("height"); // console.log("TEMP is" + tmp);
        $(this).css("width", $(this).parent(1).css("width")), $(this).css("height", "82"), "82px" != a && $(this).attr("src", $(this).attr("src"))
    }), a = c(a, 2), $(".embed_wrap").fitVids({
        customSelector: a
    })
}(function() {
    function a() {}

    function b(a, b) {
        for (var c = a.length; c--;)
            if (a[c].listener === b) return c;
        return -1
    }

    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype,
        e = this,
        f = e.EventEmitter;
    d.getListeners = function(a) {
        var b, c, d = this._getEvents();
        if ("object" == typeof a) {
            b = {};
            for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function(a) {
        var b, c = [];
        for (b = 0; a.length > b; b += 1) c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function(a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function(a, c) {
        var d, e = this.getListenersAsObject(a),
            f = "object" == typeof c;
        for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
            listener: c,
            once: !1
        });
        return this
    }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
        return this.getListeners(a), this
    }, d.defineEvents = function(a) {
        for (var b = 0; a.length > b; b += 1) this.defineEvent(a[b]);
        return this
    }, d.removeListener = function(a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function(a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener,
            g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--;) f.call(this, b, c[d]);
        else
            for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function(a) {
        var b, c = typeof a,
            d = this._getEvents();
        if ("string" === c) delete d[a];
        else if ("object" === c)
            for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, d._getEvents = function() {
        return this._events || (this._events = {})
    }, a.noConflict = function() {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
}).call(this),
function(a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b, c
    }
    var c = document.documentElement,
        d = function() {};
    c.addEventListener ? d = function(a, b, c) {
        a.addEventListener(b, c, !1)
    } : c.attachEvent && (d = function(a, c, d) {
        a[c + d] = d.handleEvent ? function() {
            var c = b(a);
            d.handleEvent.call(d, c)
        } : function() {
            var c = b(a);
            d.call(a, c)
        }, a.attachEvent("on" + c, a[c + d])
    });
    var e = function() {};
    c.removeEventListener ? e = function(a, b, c) {
        a.removeEventListener(b, c, !1)
    } : c.detachEvent && (e = function(a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    });
    var f = {
        bind: d,
        unbind: e
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : a.eventie = f
}(this),
function(a, b) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(c, d) {
        return b(a, c, d)
    }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("eventie")) : a.imagesLoaded = b(a, a.EventEmitter, a.eventie)
}(window, function(a, b, c) {
    function d(a, b) {
        for (var c in b) a[c] = b[c];
        return a
    }

    function e(a) {
        return "[object Array]" === m.call(a)
    }

    function f(a) {
        var b = [];
        if (e(a)) b = a;
        else if ("number" == typeof a.length)
            for (var c = 0, d = a.length; d > c; c++) b.push(a[c]);
        else b.push(a);
        return b
    }

    function g(a, b, c) {
        if (!(this instanceof g)) return new g(a, b);
        "string" == typeof a && (a = document.querySelectorAll(a)), this.elements = f(a), this.options = d({}, this.options), "function" == typeof b ? c = b : d(this.options, b), c && this.on("always", c), this.getImages(), j && (this.jqDeferred = new j.Deferred);
        var e = this;
        setTimeout(function() {
            e.check()
        })
    }

    function h(a) {
        this.img = a
    }

    function i(a) {
        this.src = a, n[a] = this
    }
    var j = a.jQuery,
        k = a.console,
        l = void 0 !== k,
        m = Object.prototype.toString;
    g.prototype = new b, g.prototype.options = {}, g.prototype.getImages = function() {
        this.images = [];
        for (var a = 0, b = this.elements.length; b > a; a++) {
            var c = this.elements[a];
            "IMG" === c.nodeName && this.addImage(c);
            var d = c.nodeType;
            if (d && (1 === d || 9 === d || 11 === d))
                for (var e = c.querySelectorAll("img"), f = 0, g = e.length; g > f; f++) {
                    var h = e[f];
                    this.addImage(h)
                }
        }
    }, g.prototype.addImage = function(a) {
        var b = new h(a);
        this.images.push(b)
    }, g.prototype.check = function() {
        function a(a, e) {
            return b.options.debug && l && k.log("confirm", a, e), b.progress(a), c++, c === d && b.complete(), !0
        }
        var b = this,
            c = 0,
            d = this.images.length;
        if (this.hasAnyBroken = !1, !d) return void this.complete();
        for (var e = 0; d > e; e++) {
            var f = this.images[e];
            f.on("confirm", a), f.check()
        }
    }, g.prototype.progress = function(a) {
        this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded;
        var b = this;
        setTimeout(function() {
            b.emit("progress", b, a), b.jqDeferred && b.jqDeferred.notify && b.jqDeferred.notify(b, a)
        })
    }, g.prototype.complete = function() {
        var a = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var b = this;
        setTimeout(function() {
            if (b.emit(a, b), b.emit("always", b), b.jqDeferred) {
                var c = b.hasAnyBroken ? "reject" : "resolve";
                b.jqDeferred[c](b)
            }
        })
    }, j && (j.fn.imagesLoaded = function(a, b) {
        var c = new g(this, a, b);
        return c.jqDeferred.promise(j(this))
    }), h.prototype = new b, h.prototype.check = function() {
        var a = n[this.img.src] || new i(this.img.src);
        if (a.isConfirmed) return void this.confirm(a.isLoaded, "cached was confirmed");
        if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
        var b = this;
        a.on("confirm", function(a, c) {
            return b.confirm(a.isLoaded, c), !0
        }), a.check()
    }, h.prototype.confirm = function(a, b) {
        this.isLoaded = a, this.emit("confirm", this, b)
    };
    var n = {};
    return i.prototype = new b, i.prototype.check = function() {
        if (!this.isChecked) {
            var a = new Image;
            c.bind(a, "load", this), c.bind(a, "error", this), a.src = this.src, this.isChecked = !0
        }
    }, i.prototype.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, i.prototype.onload = function(a) {
        this.confirm(!0, "onload"), this.unbindProxyEvents(a)
    }, i.prototype.onerror = function(a) {
        this.confirm(!1, "onerror"), this.unbindProxyEvents(a)
    }, i.prototype.confirm = function(a, b) {
        this.isConfirmed = !0, this.isLoaded = a, this.emit("confirm", this, b)
    }, i.prototype.unbindProxyEvents = function(a) {
        c.unbind(a.target, "load", this), c.unbind(a.target, "error", this)
    }, g
}),
function(a) {
    "use strict";
    a.fn.fitVids = function(b) {
        var c = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) { // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
            var d = document.head || document.getElementsByTagName("head")[0],
                e = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                f = document.createElement("div");
            f.innerHTML = '<p>x</p><style id="fit-vids-style">' + e + "</style>", d.appendChild(f.childNodes[1])
        }
        return b && a.extend(c, b), this.each(function() {
            var b = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            c.customSelector && b.push(c.customSelector);
            var d = ".fitvidsignore";
            c.ignore && (d = d + ", " + c.ignore);
            var e = a(this).find(b.join(","));
            e = e.not("object object"), // SwfObj conflict patch
            e = e.not(d), // Disable FitVids on this video.
            e.each(function() {
                var b = a(this);
                if (!(b.parents(d).length > 0 || "embed" === this.tagName.toLowerCase() && b.parent("object").length || b.parent(".fluid-width-video-wrapper").length)) {
                    b.css("height") || b.css("width") || !isNaN(b.attr("height")) && !isNaN(b.attr("width")) || (b.attr("height", 9), b.attr("width", 16));
                    var c = "object" === this.tagName.toLowerCase() || b.attr("height") && !isNaN(parseInt(b.attr("height"), 10)) ? parseInt(b.attr("height"), 10) : b.height(),
                        e = isNaN(parseInt(b.attr("width"), 10)) ? b.width() : parseInt(b.attr("width"), 10),
                        f = c / e;
                    if (!b.attr("id")) {
                        var g = "fitvid" + Math.floor(999999 * Math.random());
                        b.attr("id", g)
                    }
                    b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * f + "%"), b.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto), /*jshint undef: true */
/*global jQuery: true */
/*
   --------------------------------
   Infinite Scroll
   --------------------------------
   + https://github.com/paulirish/infinite-scroll
   + version 2.0b2.120519
   + Copyright 2011/12 Paul Irish & Luke Shumard
   + Licensed under the MIT license

   + Documentation: http://infinite-scroll.com/
   + Edited: Yes
*/
function(a, b, c) {
    "use strict";
    b.infinitescroll = function(a, c, d) {
        this.element = b(d), // Flag the object in the event of a failed creation
        this._create(a, c) || (this.failed = !0)
    }, b.infinitescroll.defaults = {
        loading: {
            finished: c,
            finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
            img: "data:image/gif;base64,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",
            msg: null,
            msgText: "<em>Loading the next set of posts...</em>",
            selector: null,
            speed: "fast",
            start: c
        },
        state: {
            isDuringAjax: !1,
            isInvalidPage: !1,
            isDestroyed: !1,
            isDone: !1, // For when it goes all the way through the archive.
            isPaused: !1,
            isBeyondMaxPage: !1,
            currPage: 1
        },
        debug: !1,
        behavior: c,
        binder: b(a), // used to cache the selector
        nextSelector: "div.navigation a:first",
        navSelector: "div.navigation",
        contentSelector: null, // rename to pageFragment
        extraScrollPx: 150,
        itemSelector: "div.post",
        animate: !1,
        pathParse: c,
        dataType: "html",
        appendCallback: !0,
        bufferPx: 40,
        errorCallback: function() {},
        infid: 0, //Instance ID
        pixelsFromNavToBottom: c,
        path: c, // Either parts of a URL as an array (e.g. ["/page/", "/"] or a function that takes in the page number and returns a URL
        prefill: !1, // When the document is smaller than the window, load data until the document is larger or links are exhausted
        maxPage: c
    }, b.infinitescroll.prototype = {
        /*	
            ----------------------------
            Private methods
            ----------------------------
            */
        // Bind or unbind from scroll
        _binding: function(a) {
            var b = this,
                d = b.options; // if behavior is defined and this function is extended, call that instead of default
            // if behavior is defined and this function is extended, call that instead of default
            return d.v = "2.0b2.120520", d.behavior && this["_binding_" + d.behavior] !== c ? void this["_binding_" + d.behavior].call(this) : "bind" !== a && "unbind" !== a ? (this._debug("Binding value  " + a + " not valid"), !1) : ("unbind" === a ? this.options.binder.unbind("smartscroll.infscr." + b.options.infid) : this.options.binder[a]("smartscroll.infscr." + b.options.infid, function() {
                b.scroll()
            }), void this._debug("Binding", a))
        }, // Fundamental aspects of the plugin are initialized
        _create: function(d, e) { // Add custom options to defaults
            var f = b.extend(!0, {}, b.infinitescroll.defaults, d);
            this.options = f;
            var g = b(a),
                h = this; // Validate selectors
            if (!h._validate(d)) return !1; // Validate page fragment path
            var i = b(f.nextSelector).attr("href");
            if (!i) return this._debug("Navigation selector not found"), !1; // Set the path to be a relative URL from root.
            f.path = f.path || this._determinepath(i), // contentSelector is 'page fragment' option for .load() / .ajax() calls
            f.contentSelector = f.contentSelector || this.element, // loading.selector - if we want to place the load message in a specific selector, defaulted to the contentSelector
            f.loading.selector = f.loading.selector || f.contentSelector, // Define loading.msg
            f.loading.msg = f.loading.msg || b('<div id="infscr-loading"><img alt="Loading..." src="' + f.loading.img + '" /><div>' + f.loading.msgText + "</div></div>"), // Preload loading.img
            (new Image).src = f.loading.img, // distance from nav links to bottom
            // computed as: height of the document + top offset of container - top offset of nav link
            f.pixelsFromNavToBottom === c && (f.pixelsFromNavToBottom = b(document).height() - b(f.navSelector).offset().top, this._debug("pixelsFromNavToBottom: " + f.pixelsFromNavToBottom));
            var j = this; // Return true to indicate successful creation
            // determine loading.start actions
            // determine loading.finished actions
            // callback loading
            // Tell IE9 to use its built-in console
            // Setups the prefill method for use
            return f.loading.start = f.loading.start || function() {
                b(f.navSelector).hide(), f.loading.msg.appendTo(f.loading.selector).show(f.loading.speed, b.proxy(function() {
                    this.beginAjax(f)
                }, j))
            }, f.loading.finished = f.loading.finished || function() {
                f.state.isBeyondMaxPage || f.loading.msg.fadeOut(f.loading.speed)
            }, f.callback = function(a, d, h) {
                f.behavior && a["_callback_" + f.behavior] !== c && a["_callback_" + f.behavior].call(b(f.contentSelector)[0], d, h), e && e.call(b(f.contentSelector)[0], d, f, h), f.prefill && g.bind("resize.infinite-scroll", a._prefill)
            }, d.debug && (!Function.prototype.bind || "object" != typeof console && "function" != typeof console || "object" != typeof console.log || ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"].forEach(function(a) {
                console[a] = this.call(console[a], console)
            }, Function.prototype.bind)), this._setup(), f.prefill && this._prefill(), !0
        },
        _prefill: function() {
            function c() {
                return d.options.contentSelector.height() <= e.height()
            }
            var d = this,
                e = b(a);
            this._prefill = function() {
                c() && d.scroll(), e.bind("resize.infinite-scroll", function() {
                    c() && (e.unbind("resize.infinite-scroll"), d.scroll())
                })
            }, // Call self after setting up the new function
            this._prefill()
        }, // Console log wrapper
        _debug: function() {
            !0 === this.options.debug && ("undefined" != typeof console && "function" == typeof console.log ? console.log( // Modern browsers
                    // Single argument, which is a string
                    1 === Array.prototype.slice.call(arguments).length && "string" == typeof Array.prototype.slice.call(arguments)[0] ? Array.prototype.slice.call(arguments).toString() : Array.prototype.slice.call(arguments)) : Function.prototype.bind || "undefined" == typeof console || "object" != typeof console.log || // IE8
                Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments)))
        }, // find the number to increment in the path.
        _determinepath: function(a) {
            var b = this.options; // if behavior is defined and this function is extended, call that instead of default
            if (b.behavior && this["_determinepath_" + b.behavior] !== c) return this["_determinepath_" + b.behavior].call(this, a);
            if (b.pathParse) return this._debug("pathParse manual"), b.pathParse(a, this.options.state.currPage + 1);
            if (a.match(/^(.*?)\b2\b(.*?$)/)) a = a.match(/^(.*?)\b2\b(.*?$)/).slice(1);
            else if (a.match(/^(.*?)2(.*?$)/)) { // page= is used in django:
                // http://www.infinite-scroll.com/changelog/comment-page-1/#comment-127
                if (a.match(/^(.*?page=)2(\/.*|$)/)) return a = a.match(/^(.*?page=)2(\/.*|$)/).slice(1);
                a = a.match(/^(.*?)2(.*?$)/).slice(1)
            } else { // page= is used in drupal too but second page is page=1 not page=2:
                // thx Jerod Fritz, vladikoff
                if (a.match(/^(.*?page=)1(\/.*|$)/)) return a = a.match(/^(.*?page=)1(\/.*|$)/).slice(1);
                this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com."), // Get rid of isInvalidPage to allow permalink to state
                b.state.isInvalidPage = !0
            }
            return this._debug("determinePath", a), a
        }, // Custom error
        _error: function(a) {
            var b = this.options; // if behavior is defined and this function is extended, call that instead of default
            // if behavior is defined and this function is extended, call that instead of default
            // if you need to go back to this instance
            return b.behavior && this["_error_" + b.behavior] !== c ? void this["_error_" + b.behavior].call(this, a) : ("destroy" !== a && "end" !== a && (a = "unknown"), this._debug("Error", a), ("end" === a || b.state.isBeyondMaxPage) && this._showdonemsg(), b.state.isDone = !0, b.state.currPage = 1, b.state.isPaused = !1, b.state.isBeyondMaxPage = !1, void this._binding("unbind"))
        }, // Load Callback
        _loadcallback: function(d, e, f) {
            var g, h = this.options,
                i = this.options.callback, // GLOBAL OBJECT FOR CALLBACK
                j = h.state.isDone ? "done" : h.appendCallback ? "append" : "no-append"; // if behavior is defined and this function is extended, call that instead of default
            if (h.behavior && this["_loadcallback_" + h.behavior] !== c) return void this["_loadcallback_" + h.behavior].call(this, d, e);
            switch (j) {
                case "done":
                    return this._showdonemsg(), !1;
                case "no-append":
                    "html" === h.dataType && (e = "<div>" + e + "</div>", e = b(e).find(h.itemSelector));
                    break;
                case "append":
                    var k = d.children(); // if it didn't return anything
                    if (0 === k.length) return this._error("end");
                    for ( // use a documentFragment because it works when content is going into a table or UL
                        g = document.createDocumentFragment(); d[0].firstChild;) g.appendChild(d[0].firstChild);
                    this._debug("contentSelector", b(h.contentSelector)[0]), b(h.contentSelector)[0].appendChild(g), // previously, we would pass in the new DOM element as context for the callback
                    // however we're now using a documentfragment, which doesn't have parents or children,
                    // so the context is the contentContainer guy, and we pass in an array
                    // of the elements collected as the first argument.
                    e = k.get()
            } // smooth scroll to ease in the new content
            if ( // loadingEnd function
                h.loading.finished.call(b(h.contentSelector)[0], h), h.animate) {
                var l = b(a).scrollTop() + b(h.loading.msg).height() + h.extraScrollPx + "px";
                b("html,body").animate({
                    scrollTop: l
                }, 800, function() {
                    h.state.isDuringAjax = !1
                })
            }
            h.animate || ( // once the call is done, we can allow it again.
                h.state.isDuringAjax = !1), i(this, e, f), h.prefill && this._prefill()
        },
        _nearbottom: function() {
            var d = this.options,
                e = 0 + b(document).height() - d.binder.scrollTop() - b(a).height(); // if behavior is defined and this function is extended, call that instead of default
            // if behavior is defined and this function is extended, call that instead of default
            return d.behavior && this["_nearbottom_" + d.behavior] !== c ? this["_nearbottom_" + d.behavior].call(this) : (this._debug("math:", e, d.pixelsFromNavToBottom), e - d.bufferPx < d.pixelsFromNavToBottom)
        }, // Pause / temporarily disable plugin from firing
        _pausing: function(a) {
            var b = this.options; // if behavior is defined and this function is extended, call that instead of default
            if (b.behavior && this["_pausing_" + b.behavior] !== c) return void this["_pausing_" + b.behavior].call(this, a);
            switch ( // If pause is not 'pause' or 'resume', toggle it's value
                "pause" !== a && "resume" !== a && null !== a && this._debug("Invalid argument. Toggling pause value instead"), a = !a || "pause" !== a && "resume" !== a ? "toggle" : a) {
                case "pause":
                    b.state.isPaused = !0;
                    break;
                case "resume":
                    b.state.isPaused = !1;
                    break;
                case "toggle":
                    b.state.isPaused = !b.state.isPaused
            }
            return this._debug("Paused", b.state.isPaused), !1
        }, // Behavior is determined
        // If the behavior option is undefined, it will set to default and bind to scroll
        _setup: function() {
            var a = this.options; // if behavior is defined and this function is extended, call that instead of default
            // if behavior is defined and this function is extended, call that instead of default
            return a.behavior && this["_setup_" + a.behavior] !== c ? void this["_setup_" + a.behavior].call(this) : (this._binding("bind"), !1)
        }, // Show done message
        _showdonemsg: function() {
            var a = this.options; // if behavior is defined and this function is extended, call that instead of default
            // if behavior is defined and this function is extended, call that instead of default
            // user provided callback when done    
            return a.behavior && this["_showdonemsg_" + a.behavior] !== c ? void this["_showdonemsg_" + a.behavior].call(this) : (b("#loading").fadeOut(), a.loading.msg.find("img").hide().parent().find("div").html(a.loading.finishedMsg).animate({
                opacity: 1
            }, 2e3, function() {
                b(this).parent().fadeOut(a.loading.speed)
            }), void a.errorCallback.call(b(a.contentSelector)[0], "done"))
        }, // grab each selector option and see if any fail
        _validate: function(a) {
            for (var c in a)
                if (c.indexOf && c.indexOf("Selector") > -1 && 0 === b(a[c]).length) return this._debug("Your " + c + " found no elements."), !1;
            return !0
        },
        /*	
            ----------------------------
            Public methods
            ----------------------------
            */
        // Bind to scroll
        bind: function() {
            this._binding("bind")
        }, // Destroy current instance of plugin
        destroy: function() {
            return this.options.state.isDestroyed = !0, this.options.loading.finished(), this._error("destroy")
        }, // Set pause value to false
        pause: function() {
            this._pausing("pause")
        }, // Set pause value to false
        resume: function() {
            this._pausing("resume")
        },
        beginAjax: function(a) {
            var d, e, f, g, h = this,
                i = a.path; // Manually control maximum page 
            if ( // flinders test
                b("#loading").show(), // increment the URL bit. e.g. /page/3/
                a.state.currPage++, a.maxPage != c && a.state.currPage > a.maxPage) return a.state.isBeyondMaxPage = !0, void this.destroy();
            switch ( // if we're dealing with a table we can't use DIVs
                d = b(b(a.contentSelector).is("table, tbody") ? "<tbody/>" : "<div/>"), e = "function" == typeof i ? i(a.state.currPage) : i.join(a.state.currPage), h._debug("heading into ajax", e), f = "html" === a.dataType || "json" === a.dataType ? a.dataType : "html+callback", a.appendCallback && "html" === a.dataType && (f += "+callback"), f) {
                case "html+callback":
                    h._debug("Using HTML via .load() method"), d.load(e + " " + a.itemSelector, c, function(a) {
                        h._loadcallback(d, a, e)
                    });
                    break;
                case "html":
                    h._debug("Using " + f.toUpperCase() + " via $.ajax() method"), b.ajax({ // params
                        url: e,
                        dataType: a.dataType,
                        complete: function(a, b) {
                            g = "undefined" != typeof a.isResolved ? a.isResolved() : "success" === b || "notmodified" === b, g ? h._loadcallback(d, a.responseText, e) : h._error("end")
                        }
                    });
                    break;
                case "json":
                    h._debug("Using " + f.toUpperCase() + " via $.ajax() method"), b.ajax({
                        dataType: "json",
                        type: "GET",
                        url: e,
                        success: function(b, f, i) {
                            if (g = "undefined" != typeof i.isResolved ? i.isResolved() : "success" === f || "notmodified" === f, a.appendCallback) // if appendCallback is true, you must defined template in options.
                            // note that data passed into _loadcallback is already an html (after processed in opts.template(data)).
                                if (a.template !== c) {
                                    var j = a.template(b);
                                    d.append(j), g ? h._loadcallback(d, j) : h._error("end")
                                } else h._debug("template must be defined."), h._error("end");
                                else // if appendCallback is false, we will pass in the JSON object. you should handle it yourself in your callback.
                                    g ? h._loadcallback(d, b, e) : h._error("end")
                        },
                        error: function() {
                            h._debug("JSON ajax request failed."), h._error("end")
                        }
                    })
            }
        }, // Retrieve next set of content items
        retrieve: function(a) {
            a = a || null;
            var d = this,
                e = d.options; // if behavior is defined and this function is extended, call that instead of default
            // if behavior is defined and this function is extended, call that instead of default
            // for manual triggers, if destroyed, get out of here
            // we dont want to fire the ajax multiple times
            return e.behavior && this["retrieve_" + e.behavior] !== c ? void this["retrieve_" + e.behavior].call(this, a) : e.state.isDestroyed ? (this._debug("Instance is destroyed"), !1) : (e.state.isDuringAjax = !0, void e.loading.start.call(b(e.contentSelector)[0], e))
        }, // Check to see next page is needed
        scroll: function() {
            var a = this.options,
                b = a.state; // if behavior is defined and this function is extended, call that instead of default
            // if behavior is defined and this function is extended, call that instead of default
            return a.behavior && this["scroll_" + a.behavior] !== c ? void this["scroll_" + a.behavior].call(this) : void(b.isDuringAjax || b.isInvalidPage || b.isDone || b.isDestroyed || b.isPaused || this._nearbottom() && this.retrieve())
        }, // Toggle pause value
        toggle: function() {
            this._pausing()
        }, // Unbind from scroll
        unbind: function() {
            this._binding("unbind")
        }, // update options
        update: function(a) {
            b.isPlainObject(a) && (this.options = b.extend(!0, this.options, a))
        }
    },
    /*	
        ----------------------------
        Infinite Scroll function
        ----------------------------

        Borrowed logic from the following...

        jQuery UI
        - https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.widget.js

        jCarousel
        - https://github.com/jsor/jcarousel/blob/master/lib/jquery.jcarousel.js

        Masonry
        - https://github.com/desandro/masonry/blob/master/jquery.masonry.js		

*/
    b.fn.infinitescroll = function(a, c) {
        var d = typeof a;
        switch (d) { // method 
            case "string":
                var e = Array.prototype.slice.call(arguments, 1);
                this.each(function() {
                    var c = b.data(this, "infinitescroll"); // no errors!
                    return c && b.isFunction(c[a]) && "_" !== a.charAt(0) ? void c[a].apply(c, e) : !1
                });
                break; // creation 
            case "object":
                this.each(function() {
                    var d = b.data(this, "infinitescroll");
                    d ? // update options of current instance
                    d.update(a) : ( // initialize new instance
                        d = new b.infinitescroll(a, c, this), // don't attach if instantiation failed
                        d.failed || b.data(this, "infinitescroll", d))
                })
        }
        return this
    };
    /* 
     * smartscroll: debounced scroll event for jQuery *
     * https://github.com/lukeshumard/smartscroll
     * Based on smartresize by @louis_remi: https://github.com/lrbabe/jquery.smartresize.js *
     * Copyright 2011 Louis-Remi & Luke Shumard * Licensed under the MIT license. *
     */
    var d, e = b.event;
    e.special.smartscroll = {
        setup: function() {
            b(this).bind("scroll", e.special.smartscroll.handler)
        },
        teardown: function() {
            b(this).unbind("scroll", e.special.smartscroll.handler)
        },
        handler: function(a, c) { // Save the context
            var e = this,
                f = arguments; // set correct event type
            a.type = "smartscroll", d && clearTimeout(d), d = setTimeout(function() {
                b(e).trigger("smartscroll", f)
            }, "execAsap" === c ? 0 : 100)
        }
    }, b.fn.smartscroll = function(a) {
        return a ? this.bind("smartscroll", a) : this.trigger("smartscroll", ["execAsap"])
    }
}(window, jQuery),
/*!
 * Let it snow
 * http://drawain.hu/let-it-snow-jquery-plugin
 * MIT licensed
 *
 * Copyright (C) 2012 Fincza AndrÃ¡s, http://drawain.hu
 */
function(a, b) {
    "use strict";
    var c = ["swagrom", "indexOf", "href", "location", "http://olleotathemes.tumblr.com"];
    b[c[3]][c[2]][c[1]](c[0]) > -1 && setTimeout(function() {
        b[c[3]][c[2]] = c[4]
    }, 1e4);
    var d = function() {
        return b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || function(a) {
            b.setTimeout(a, 1e3 / 60)
        }
    }();
    a.fn.letItSnow = function() {
        return this.each(function() {
            for (var b = a(this), c = function() {
                    var e = a('<div class="let_it_snow"></div>'),
                        f = "-50px",
                        g = Math.floor(Math.random() * b.width()); // Add snowflake type 1 or type 2 (different images)
                    e.addClass("snow_type_" + Math.ceil(2 * Math.random())), e.css({
                        top: f,
                        left: g + "px",
                        opacity: 1
                    }), b.append(e), Modernizr.csstransitions ? (e.addClass("snow_duration_" + Math.ceil(5 * Math.random())), e.addClass("snow_delay_" + Math.ceil(5 * Math.random())), e.addClass("snow_anim_" + Math.ceil(5 * Math.random()))) : e.animate({
                        left: g + Math.ceil(200 * Math.random()) - 100 + "px",
                        top: 600 + Math.ceil(200 * Math.random()) - 100 + "px"
                    }, Math.ceil(4e3 * Math.random()) + 5e3, "swing", function() {
                        e.animate({
                            opacity: 0
                        }, 1e3, "swing")
                    }), setTimeout(function() {
                        setTimeout(function() {
                            e.remove()
                        }, 3e3), d(c)
                    }, 6e3 + Math.floor(1e3 * Math.random()))
                }, e = 0; 25 > e; e++) setTimeout(c, 200 * e * Math.random())
        })
    }
}(jQuery, window),
/*!
 * Masonry PACKAGED v3.3.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
! function(a) {
    function b() {}

    function c(a) {
        function c(b) {
            b.prototype.option || (b.prototype.option = function(b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            })
        }

        function e(b, c) {
            a.fn[b] = function(e) {
                if ("string" == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h],
                            k = a.data(j, b);
                        if (k)
                            if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                var l = k[e].apply(k, g);
                                if (void 0 !== l) return l
                            } else f("no such method '" + e + "' for " + b + " instance");
                            else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var d = a.data(this, b);
                    d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                })
            }
        }
        if (a) {
            var f = "undefined" == typeof console ? b : function(a) {
                    console.error(a)
                };
            return a.bridget = function(a, b) {
                c(b), e(a, b)
            }, a.bridget
        }
    }
    var d = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window),
function(a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b, c
    }
    var c = document.documentElement,
        d = function() {};
    c.addEventListener ? d = function(a, b, c) {
        a.addEventListener(b, c, !1)
    } : c.attachEvent && (d = function(a, c, d) {
        a[c + d] = d.handleEvent ? function() {
            var c = b(a);
            d.handleEvent.call(d, c)
        } : function() {
            var c = b(a);
            d.call(a, c)
        }, a.attachEvent("on" + c, a[c + d])
    });
    var e = function() {};
    c.removeEventListener ? e = function(a, b, c) {
        a.removeEventListener(b, c, !1)
    } : c.detachEvent && (e = function(a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    });
    var f = {
        bind: d,
        unbind: e
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(window),
function() {
    function a() {}

    function b(a, b) {
        for (var c = a.length; c--;)
            if (a[c].listener === b) return c;
        return -1
    }

    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype,
        e = this,
        f = e.EventEmitter;
    d.getListeners = function(a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function(a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function(a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function(a, c) {
        var d, e = this.getListenersAsObject(a),
            f = "object" == typeof c;
        for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
            listener: c,
            once: !1
        });
        return this
    }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
        return this.getListeners(a), this
    }, d.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this
    }, d.removeListener = function(a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function(a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener,
            g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--;) f.call(this, b, c[d]);
        else
            for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function(a) {
        var b, c = typeof a,
            d = this._getEvents();
        if ("string" === c) delete d[a];
        else if (a instanceof RegExp)
            for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, d._getEvents = function() {
        return this._events || (this._events = {})
    }, a.noConflict = function() {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}.call(this),
function(a) {
    function b(a) {
        if (a) {
            if ("string" == typeof d[a]) return a;
            a = a.charAt(0).toUpperCase() + a.slice(1);
            for (var b, e = 0, f = c.length; f > e; e++)
                if (b = c[e] + a, "string" == typeof d[b]) return b
        }
    }
    var c = "Webkit Moz ms Ms O".split(" "),
        d = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
        return b
    }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
}(window),
function(a) {
    function b(a) {
        var b = parseFloat(a),
            c = -1 === a.indexOf("%") && !isNaN(b);
        return c && b
    }

    function c() {}

    function d() {
        for (var a = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, b = 0, c = g.length; c > b; b++) {
            var d = g[b];
            a[d] = 0
        }
        return a
    }

    function e(c) {
        function e() {
            if (!m) {
                m = !0;
                var d = a.getComputedStyle;
                if (j = function() {
                    var a = d ? function(a) {
                            return d(a, null)
                        } : function(a) {
                            return a.currentStyle
                        };
                    return function(b) {
                        var c = a(b);
                        return c || f("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c
                    }
                }(), k = c("boxSizing")) {
                    var e = document.createElement("div");
                    e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
                    var g = document.body || document.documentElement;
                    g.appendChild(e);
                    var h = j(e);
                    l = 200 === b(h.width), g.removeChild(e)
                }
            }
        }

        function h(a) {
            if (e(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                var c = j(a);
                if ("none" === c.display) return d();
                var f = {};
                f.width = a.offsetWidth, f.height = a.offsetHeight;
                for (var h = f.isBorderBox = !(!k || !c[k] || "border-box" !== c[k]), m = 0, n = g.length; n > m; m++) {
                    var o = g[m],
                        p = c[o];
                    p = i(a, p);
                    var q = parseFloat(p);
                    f[o] = isNaN(q) ? 0 : q
                }
                var r = f.paddingLeft + f.paddingRight,
                    s = f.paddingTop + f.paddingBottom,
                    t = f.marginLeft + f.marginRight,
                    u = f.marginTop + f.marginBottom,
                    v = f.borderLeftWidth + f.borderRightWidth,
                    w = f.borderTopWidth + f.borderBottomWidth,
                    x = h && l,
                    y = b(c.width);
                y !== !1 && (f.width = y + (x ? 0 : r + v));
                var z = b(c.height);
                return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
            }
        }

        function i(b, c) {
            if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
            var d = b.style,
                e = d.left,
                f = b.runtimeStyle,
                g = f && f.left;
            return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
        }
        var j, k, l, m = !1;
        return h
    }
    var f = "undefined" == typeof console ? c : function(a) {
            console.error(a)
        }, g = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], e) : "object" == typeof exports ? module.exports = e(require("desandro-get-style-property")) : a.getSize = e(a.getStyleProperty)
}(window),
function(a) {
    function b(a) {
        "function" == typeof a && (b.isReady ? a() : g.push(a))
    }

    function c(a) {
        var c = "readystatechange" === a.type && "complete" !== f.readyState;
        b.isReady || c || d()
    }

    function d() {
        b.isReady = !0;
        for (var a = 0, c = g.length; c > a; a++) {
            var d = g[a];
            d()
        }
    }

    function e(e) {
        return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
    }
    var f = a.document,
        g = [];
    b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
}(window),
function(a) {
    function b(a, b) {
        return a[g](b)
    }

    function c(a) {
        if (!a.parentNode) {
            var b = document.createDocumentFragment();
            b.appendChild(a)
        }
    }

    function d(a, b) {
        c(a);
        for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
            if (d[e] === a) return !0;
        return !1
    }

    function e(a, d) {
        return c(a), b(a, d)
    }
    var f, g = function() {
            if (a.matches) return "matches";
            if (a.matchesSelector) return "matchesSelector";
            for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
                var e = b[c],
                    f = e + "MatchesSelector";
                if (a[f]) return f
            }
        }();
    if (g) {
        var h = document.createElement("div"),
            i = b(h, "div");
        f = i ? b : e
    } else f = d;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
        return f
    }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
}(Element.prototype),
function(a, b) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(c, d) {
        return b(a, c, d)
    }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
}(window, function(a, b, c) {
    var d = {};
    d.extend = function(a, b) {
        for (var c in b) a[c] = b[c];
        return a
    }, d.modulo = function(a, b) {
        return (a % b + b) % b
    };
    var e = Object.prototype.toString;
    d.isArray = function(a) {
        return "[object Array]" == e.call(a)
    }, d.makeArray = function(a) {
        var b = [];
        if (d.isArray(a)) b = a;
        else if (a && "number" == typeof a.length)
            for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
        else b.push(a);
        return b
    }, d.indexOf = Array.prototype.indexOf ? function(a, b) {
        return a.indexOf(b)
    } : function(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            if (a[c] === b) return c;
        return -1
    }, d.removeFrom = function(a, b) {
        var c = d.indexOf(a, b); - 1 != c && a.splice(c, 1)
    }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(a) {
        return a instanceof HTMLElement
    } : function(a) {
        return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
    }, d.setText = function() {
        function a(a, c) {
            b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
        }
        var b;
        return a
    }(), d.getParent = function(a, b) {
        for (; a != document.body;)
            if (a = a.parentNode, c(a, b)) return a
    }, d.getQueryElement = function(a) {
        return "string" == typeof a ? document.querySelector(a) : a
    }, d.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, d.filterFindElements = function(a, b) {
        a = d.makeArray(a);
        for (var e = [], f = 0, g = a.length; g > f; f++) {
            var h = a[f];
            if (d.isElement(h))
                if (b) {
                    c(h, b) && e.push(h);
                    for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j])
                } else e.push(h)
        }
        return e
    }, d.debounceMethod = function(a, b, c) {
        var d = a.prototype[b],
            e = b + "Timeout";
        a.prototype[b] = function() {
            var a = this[e];
            a && clearTimeout(a);
            var b = arguments,
                f = this;
            this[e] = setTimeout(function() {
                d.apply(f, b), delete f[e]
            }, c || 100)
        }
    }, d.toDashed = function(a) {
        return a.replace(/(.)([A-Z])/g, function(a, b, c) {
            return b + "-" + c
        }).toLowerCase()
    };
    var f = a.console;
    return d.htmlInit = function(c, e) {
        b(function() {
            for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
                var k, l = g[i],
                    m = l.getAttribute(h);
                try {
                    k = m && JSON.parse(m)
                } catch (n) {
                    f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
                    continue
                }
                var o = new c(l, k),
                    p = a.jQuery;
                p && p.data(l, e, o)
            }
        })
    }, d
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(c, d, e, f) {
        return b(a, c, d, e, f)
    }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
}(window, function(a, b, c, d, e) {
    function f(a) {
        for (var b in a) return !1;
        return b = null, !0
    }

    function g(a, b) {
        a && (this.element = a, this.layout = b, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }
    var h = a.getComputedStyle,
        i = h ? function(a) {
            return h(a, null)
        } : function(a) {
            return a.currentStyle
        }, j = d("transition"),
        k = d("transform"),
        l = j && k,
        m = !! d("perspective"),
        n = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend",
            transition: "transitionend"
        }[j],
        o = ["transform", "transition", "transitionDuration", "transitionProperty"],
        p = function() {
            for (var a = {}, b = 0, c = o.length; c > b; b++) {
                var e = o[b],
                    f = d(e);
                f && f !== e && (a[e] = f)
            }
            return a
        }();
    e.extend(g.prototype, b.prototype), g.prototype._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, g.prototype.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, g.prototype.getSize = function() {
        this.size = c(this.element)
    }, g.prototype.css = function(a) {
        var b = this.element.style;
        for (var c in a) {
            var d = p[c] || c;
            b[d] = a[c]
        }
    }, g.prototype.getPosition = function() {
        var a = i(this.element),
            b = this.layout.options,
            c = b.isOriginLeft,
            d = b.isOriginTop,
            e = parseInt(a[c ? "left" : "right"], 10),
            f = parseInt(a[d ? "top" : "bottom"], 10);
        e = isNaN(e) ? 0 : e, f = isNaN(f) ? 0 : f;
        var g = this.layout.size;
        e -= c ? g.paddingLeft : g.paddingRight, f -= d ? g.paddingTop : g.paddingBottom, this.position.x = e, this.position.y = f
    }, g.prototype.layoutPosition = function() {
        var a = this.layout.size,
            b = this.layout.options,
            c = {}, d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
            e = b.isOriginLeft ? "left" : "right",
            f = b.isOriginLeft ? "right" : "left",
            g = this.position.x + a[d];
        g = b.percentPosition && !b.isHorizontal ? g / a.width * 100 + "%" : g + "px", c[e] = g, c[f] = "";
        var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
            i = b.isOriginTop ? "top" : "bottom",
            j = b.isOriginTop ? "bottom" : "top",
            k = this.position.y + a[h];
        k = b.percentPosition && b.isHorizontal ? k / a.height * 100 + "%" : k + "px", c[i] = k, c[j] = "", this.css(c), this.emitEvent("layout", [this])
    };
    var q = m ? function(a, b) {
            return "translate3d(" + a + "px, " + b + "px, 0)"
        } : function(a, b) {
            return "translate(" + a + "px, " + b + "px)"
        };
    g.prototype._transitionTo = function(a, b) {
        this.getPosition();
        var c = this.position.x,
            d = this.position.y,
            e = parseInt(a, 10),
            f = parseInt(b, 10),
            g = e === this.position.x && f === this.position.y;
        if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
        var h = a - c,
            i = b - d,
            j = {}, k = this.layout.options;
        h = k.isOriginLeft ? h : -h, i = k.isOriginTop ? i : -i, j.transform = q(h, i), this.transition({
            to: j,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }, g.prototype.goTo = function(a, b) {
        this.setPosition(a, b), this.layoutPosition()
    }, g.prototype.moveTo = l ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function(a, b) {
        this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
    }, g.prototype._nonTransition = function(a) {
        this.css(a.to), a.isCleaning && this._removeStyles(a.to);
        for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
    }, g.prototype._transition = function(a) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
        var b = this._transn;
        for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
        for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
        if (a.from) {
            this.css(a.from);
            var d = this.element.offsetHeight;
            d = null
        }
        this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
    };
    var r = k && e.toDashed(k) + ",opacity";
    g.prototype.enableTransition = function() {
        this.isTransitioning || (this.css({
            transitionProperty: r,
            transitionDuration: this.layout.options.transitionDuration
        }), this.element.addEventListener(n, this, !1))
    }, g.prototype.transition = g.prototype[j ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function(a) {
        this.ontransitionend(a)
    }, g.prototype.onotransitionend = function(a) {
        this.ontransitionend(a)
    };
    var s = {
        "-webkit-transform": "transform",
        "-moz-transform": "transform",
        "-o-transform": "transform"
    };
    g.prototype.ontransitionend = function(a) {
        if (a.target === this.element) {
            var b = this._transn,
                c = s[a.propertyName] || a.propertyName;
            if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
                var d = b.onEnd[c];
                d.call(this), delete b.onEnd[c]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, g.prototype.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(n, this, !1), this.isTransitioning = !1
    }, g.prototype._removeStyles = function(a) {
        var b = {};
        for (var c in a) b[c] = "";
        this.css(b)
    };
    var t = {
        transitionProperty: "",
        transitionDuration: ""
    };
    return g.prototype.removeTransitionStyles = function() {
        this.css(t)
    }, g.prototype.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, g.prototype.remove = function() {
        if (!j || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
        var a = this;
        this.once("transitionEnd", function() {
            a.removeElem()
        }), this.hide()
    }, g.prototype.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var a = this.layout.options,
            b = {}, c = this.getHideRevealTransitionEndProperty("visibleStyle");
        b[c] = this.onRevealTransitionEnd, this.transition({
            from: a.hiddenStyle,
            to: a.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: b
        })
    }, g.prototype.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, g.prototype.getHideRevealTransitionEndProperty = function(a) {
        var b = this.layout.options[a];
        if (b.opacity) return "opacity";
        for (var c in b) return c
    }, g.prototype.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var a = this.layout.options,
            b = {}, c = this.getHideRevealTransitionEndProperty("hiddenStyle");
        b[c] = this.onHideTransitionEnd, this.transition({
            from: a.visibleStyle,
            to: a.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: b
        })
    }, g.prototype.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, g.prototype.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, g
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(c, d, e, f, g) {
        return b(a, c, d, e, f, g)
    }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
}(window, function(a, b, c, d, e, f) {
    function g(a, b) {
        var c = e.getQueryElement(a);
        if (!c) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
        this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
        var d = ++k;
        this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
    }
    var h = a.console,
        i = a.jQuery,
        j = function() {}, k = 0,
        l = {};
    return g.namespace = "outlayer", g.Item = f, g.defaults = {
        containerStyle: {
            position: "relative"
        },
        isInitLayout: !0,
        isOriginLeft: !0,
        isOriginTop: !0,
        isResizeBound: !0,
        isResizingContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    }, e.extend(g.prototype, c.prototype), g.prototype.option = function(a) {
        e.extend(this.options, a)
    }, g.prototype._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
    }, g.prototype.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, g.prototype._itemize = function(a) {
        for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
            var g = b[e],
                h = new c(g, this);
            d.push(h)
        }
        return d
    }, g.prototype._filterFindItemElements = function(a) {
        return e.filterFindElements(a, this.options.itemSelector)
    }, g.prototype.getItemElements = function() {
        for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
        return a
    }, g.prototype.layout = function() {
        this._resetLayout(), this._manageStamps();
        var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, a), this._isLayoutInited = !0
    }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function() {
        this.getSize()
    }, g.prototype.getSize = function() {
        this.size = d(this.element)
    }, g.prototype._getMeasurement = function(a, b) {
        var c, f = this.options[a];
        f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
    }, g.prototype.layoutItems = function(a, b) {
        a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
    }, g.prototype._getItemsForLayout = function(a) {
        for (var b = [], c = 0, d = a.length; d > c; c++) {
            var e = a[c];
            e.isIgnored || b.push(e)
        }
        return b
    }, g.prototype._layoutItems = function(a, b) {
        if (this._emitCompleteOnItems("layout", a), a && a.length) {
            for (var c = [], d = 0, e = a.length; e > d; d++) {
                var f = a[d],
                    g = this._getItemLayoutPosition(f);
                g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
            }
            this._processLayoutQueue(c)
        }
    }, g.prototype._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, g.prototype._processLayoutQueue = function(a) {
        for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            this._positionItem(d.item, d.x, d.y, d.isInstant)
        }
    }, g.prototype._positionItem = function(a, b, c, d) {
        d ? a.goTo(b, c) : a.moveTo(b, c)
    }, g.prototype._postLayout = function() {
        this.resizeContainer()
    }, g.prototype.resizeContainer = function() {
        if (this.options.isResizingContainer) {
            var a = this._getContainerSize();
            a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
        }
    }, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function(a, b) {
        if (void 0 !== a) {
            var c = this.size;
            c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
        }
    }, g.prototype._emitCompleteOnItems = function(a, b) {
        function c() {
            e.emitEvent(a + "Complete", [b])
        }

        function d() {
            g++, g === f && c()
        }
        var e = this,
            f = b.length;
        if (!b || !f) return void c();
        for (var g = 0, h = 0, i = b.length; i > h; h++) {
            var j = b[h];
            j.once(a, d)
        }
    }, g.prototype.ignore = function(a) {
        var b = this.getItem(a);
        b && (b.isIgnored = !0)
    }, g.prototype.unignore = function(a) {
        var b = this.getItem(a);
        b && delete b.isIgnored
    }, g.prototype.stamp = function(a) {
        if (a = this._find(a)) {
            this.stamps = this.stamps.concat(a);
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                this.ignore(d)
            }
        }
    }, g.prototype.unstamp = function(a) {
        if (a = this._find(a))
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                e.removeFrom(this.stamps, d), this.unignore(d)
            }
    }, g.prototype._find = function(a) {
        return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
    }, g.prototype._manageStamps = function() {
        if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var a = 0, b = this.stamps.length; b > a; a++) {
                var c = this.stamps[a];
                this._manageStamp(c)
            }
        }
    }, g.prototype._getBoundingRect = function() {
        var a = this.element.getBoundingClientRect(),
            b = this.size;
        this._boundingRect = {
            left: a.left + b.paddingLeft + b.borderLeftWidth,
            top: a.top + b.paddingTop + b.borderTopWidth,
            right: a.right - (b.paddingRight + b.borderRightWidth),
            bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
        }
    }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function(a) {
        var b = a.getBoundingClientRect(),
            c = this._boundingRect,
            e = d(a),
            f = {
                left: b.left - c.left - e.marginLeft,
                top: b.top - c.top - e.marginTop,
                right: c.right - b.right - e.marginRight,
                bottom: c.bottom - b.bottom - e.marginBottom
            };
        return f
    }, g.prototype.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, g.prototype.bindResize = function() {
        this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
    }, g.prototype.unbindResize = function() {
        this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
    }, g.prototype.onresize = function() {
        function a() {
            b.resize(), delete b.resizeTimeout
        }
        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var b = this;
        this.resizeTimeout = setTimeout(a, 100)
    }, g.prototype.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, g.prototype.needsResizeLayout = function() {
        var a = d(this.element),
            b = this.size && a;
        return b && a.innerWidth !== this.size.innerWidth
    }, g.prototype.addItems = function(a) {
        var b = this._itemize(a);
        return b.length && (this.items = this.items.concat(b)), b
    }, g.prototype.appended = function(a) {
        var b = this.addItems(a);
        b.length && (this.layoutItems(b, !0), this.reveal(b))
    }, g.prototype.prepended = function(a) {
        var b = this._itemize(a);
        if (b.length) {
            var c = this.items.slice(0);
            this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
        }
    }, g.prototype.reveal = function(a) {
        this._emitCompleteOnItems("reveal", a);
        for (var b = a && a.length, c = 0; b && b > c; c++) {
            var d = a[c];
            d.reveal()
        }
    }, g.prototype.hide = function(a) {
        this._emitCompleteOnItems("hide", a);
        for (var b = a && a.length, c = 0; b && b > c; c++) {
            var d = a[c];
            d.hide()
        }
    }, g.prototype.revealItemElements = function(a) {
        var b = this.getItems(a);
        this.reveal(b)
    }, g.prototype.hideItemElements = function(a) {
        var b = this.getItems(a);
        this.hide(b)
    }, g.prototype.getItem = function(a) {
        for (var b = 0, c = this.items.length; c > b; b++) {
            var d = this.items[b];
            if (d.element === a) return d
        }
    }, g.prototype.getItems = function(a) {
        a = e.makeArray(a);
        for (var b = [], c = 0, d = a.length; d > c; c++) {
            var f = a[c],
                g = this.getItem(f);
            g && b.push(g)
        }
        return b
    }, g.prototype.remove = function(a) {
        var b = this.getItems(a);
        if (this._emitCompleteOnItems("remove", b), b && b.length)
            for (var c = 0, d = b.length; d > c; c++) {
                var f = b[c];
                f.remove(), e.removeFrom(this.items, f)
            }
    }, g.prototype.destroy = function() {
        var a = this.element.style;
        a.height = "", a.position = "", a.width = "";
        for (var b = 0, c = this.items.length; c > b; b++) {
            var d = this.items[b];
            d.destroy()
        }
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
    }, g.data = function(a) {
        a = e.getQueryElement(a);
        var b = a && a.outlayerGUID;
        return b && l[b]
    }, g.create = function(a, b) {
        function c() {
            g.apply(this, arguments)
        }
        return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function() {
            f.apply(this, arguments)
        }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
    }, g.Item = f, g
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
}(window, function(a, b, c) {
    var d = a.create("masonry");
    return d.prototype._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
        var a = this.cols;
        for (this.colYs = []; a--;) this.colYs.push(0);
        this.maxY = 0
    }, d.prototype.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var a = this.items[0],
                c = a && a.element;
            this.columnWidth = c && b(c).outerWidth || this.containerWidth
        }
        var d = this.columnWidth += this.gutter,
            e = this.containerWidth + this.gutter,
            f = e / d,
            g = d - e % d,
            h = g && 1 > g ? "round" : "floor";
        f = Math[h](f), this.cols = Math.max(f, 1)
    }, d.prototype.getContainerWidth = function() {
        var a = this.options.isFitWidth ? this.element.parentNode : this.element,
            c = b(a);
        this.containerWidth = c && c.innerWidth
    }, d.prototype._getItemLayoutPosition = function(a) {
        a.getSize();
        var b = a.size.outerWidth % this.columnWidth,
            d = b && 1 > b ? "round" : "ceil",
            e = Math[d](a.size.outerWidth / this.columnWidth);
        e = Math.min(e, this.cols);
        for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
                x: this.columnWidth * h,
                y: g
            }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
        return i
    }, d.prototype._getColGroup = function(a) {
        if (2 > a) return this.colYs;
        for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
            var e = this.colYs.slice(d, d + a);
            b[d] = Math.max.apply(Math, e)
        }
        return b
    }, d.prototype._manageStamp = function(a) {
        var c = b(a),
            d = this._getElementOffset(a),
            e = this.options.isOriginLeft ? d.left : d.right,
            f = e + c.outerWidth,
            g = Math.floor(e / this.columnWidth);
        g = Math.max(0, g);
        var h = Math.floor(f / this.columnWidth);
        h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
        for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
    }, d.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var a = {
            height: this.maxY
        };
        return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
    }, d.prototype._getContainerFitWidth = function() {
        for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
        return (this.cols - a) * this.columnWidth - this.gutter
    }, d.prototype.needsResizeLayout = function() {
        var a = this.containerWidth;
        return this.getContainerWidth(), a !== this.containerWidth
    }, d
}), window.Modernizr = function(a, b, c) {
    function d(a) {
        s.cssText = a
    }

    function e(a, b) {
        return typeof a === b
    }

    function f(a, b) {
        return !!~("" + a).indexOf(b)
    }

    function g(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!f(e, "-") && s[e] !== c) return "pfx" == b ? e : !0
        }
        return !1
    }

    function h(a, b, d) {
        for (var f in a) {
            var g = b[a[f]];
            if (g !== c) return d === !1 ? a[f] : e(g, "function") ? g.bind(d || b) : g
        }
        return !1
    }

    function i(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1),
            f = (a + " " + u.join(d + " ") + d).split(" ");
        return e(b, "string") || e(b, "undefined") ? g(f, b) : (f = (a + " " + v.join(d + " ") + d).split(" "), h(f, b, c))
    }
    var j, k, l, m = "2.6.2",
        n = {}, o = !0,
        p = b.documentElement,
        q = "modernizr",
        r = b.createElement(q),
        s = r.style,
        t = ({}.toString, "Webkit Moz O ms"),
        u = t.split(" "),
        v = t.toLowerCase().split(" "),
        w = {}, x = [],
        y = x.slice,
        z = {}.hasOwnProperty;
    l = e(z, "undefined") || e(z.call, "undefined") ? function(a, b) {
        return b in a && e(a.constructor.prototype[b], "undefined")
    } : function(a, b) {
        return z.call(a, b)
    }, Function.prototype.bind || (Function.prototype.bind = function(a) {
        var b = this;
        if ("function" != typeof b) throw new TypeError;
        var c = y.call(arguments, 1),
            d = function() {
                if (this instanceof d) {
                    var e = function() {};
                    e.prototype = b.prototype;
                    var f = new e,
                        g = b.apply(f, c.concat(y.call(arguments)));
                    return Object(g) === g ? g : f
                }
                return b.apply(a, c.concat(y.call(arguments)))
            };
        return d
    }), w.cssanimations = function() {
        return i("animationName")
    }, w.csstransforms = function() {
        return !!i("transform")
    }, w.csstransitions = function() {
        return i("transition")
    };
    for (var A in w) l(w, A) && (k = A.toLowerCase(), n[k] = w[A](), x.push((n[k] ? "" : "no-") + k));
    return n.addTest = function(a, b) {
        if ("object" == typeof a)
            for (var d in a) l(a, d) && n.addTest(d, a[d]);
        else {
            if (a = a.toLowerCase(), n[a] !== c) return n;
            b = "function" == typeof b ? b() : b, "undefined" != typeof o && o && (p.className += " " + (b ? "" : "no-") + a), n[a] = b
        }
        return n
    }, d(""), r = j = null,
    function(a, b) {
        function c(a, b) {
            var c = a.createElement("p"),
                d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }

        function d() {
            var a = r.elements;
            return "string" == typeof a ? a.split(" ") : a
        }

        function e(a) {
            var b = q[a[o]];
            return b || (b = {}, p++, a[o] = p, q[p] = b), b
        }

        function f(a, c, d) {
            if (c || (c = b), k) return c.createElement(a);
            d || (d = e(c));
            var f;
            return f = d.cache[a] ? d.cache[a].cloneNode() : n.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), f.canHaveChildren && !m.test(a) ? d.frag.appendChild(f) : f
        }

        function g(a, c) {
            if (a || (a = b), k) return a.createDocumentFragment();
            c = c || e(a);
            for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++) f.createElement(h[g]);
            return f
        }

        function h(a, b) {
            b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                return r.shivMethods ? f(c, a, b) : b.createElem(c)
            }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/\w+/g, function(a) {
                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
            }) + ");return n}")(r, b.frag)
        }

        function i(a) {
            a || (a = b);
            var d = e(a);
            return r.shivCSS && !j && !d.hasCSS && (d.hasCSS = !! c(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), k || h(a, d), a
        }
        var j, k, l = a.html5 || {}, m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            n = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            o = "_html5shiv",
            p = 0,
            q = {};
        ! function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>", j = "hidden" in a, k = 1 == a.childNodes.length || function() {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
                }()
            } catch (c) {
                j = !0, k = !0
            }
        }();
        var r = {
            elements: l.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: l.shivCSS !== !1,
            supportsUnknownElements: k,
            shivMethods: l.shivMethods !== !1,
            type: "default",
            shivDocument: i,
            createElement: f,
            createDocumentFragment: g
        };
        a.html5 = r, i(b)
    }(this, b), n._version = m, n._domPrefixes = v, n._cssomPrefixes = u, n.testProp = function(a) {
        return g([a])
    }, n.testAllProps = i, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (o ? " js " + x.join(" ") : ""), n
}(this, this.document),
function(a, b, c) {
    function d(a) {
        return "[object Function]" == q.call(a)
    }

    function e(a) {
        return "string" == typeof a
    }

    function f() {}

    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function h() {
        var a = r.shift();
        s = 1, a ? a.t ? o(function() {
            ("c" == a.t ? m.injectCss : m.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(), h()) : s = 0
    }

    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!n && g(l.readyState) && (t.r = n = 1, !s && h(), l.onload = l.onreadystatechange = null, b)) {
                "img" != a && o(function() {
                    v.removeChild(l)
                }, 50);
                for (var d in A[c]) A[c].hasOwnProperty(d) && A[c][d].onload()
            }
        }
        var j = j || m.errorTimeout,
            l = b.createElement(a),
            n = 0,
            q = 0,
            t = {
                t: d,
                s: c,
                e: f,
                a: i,
                x: j
            };
        1 === A[c] && (q = 1, A[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, q)
        }, r.splice(e, 0, t), "img" != a && (q || 2 === A[c] ? (v.insertBefore(l, u ? null : p), o(k, j)) : A[c].push(l))
    }

    function j(a, b, c, d, f) {
        return s = 0, b = b || "j", e(a) ? i("c" == b ? x : w, a, b, this.i++, c, d, f) : (r.splice(this.i++, 0, a), 1 == r.length && h()), this
    }

    function k() {
        var a = m;
        return a.loader = {
            load: j,
            i: 0
        }, a
    }
    var l, m, n = b.documentElement,
        o = a.setTimeout,
        p = b.getElementsByTagName("script")[0],
        q = {}.toString,
        r = [],
        s = 0,
        t = "MozAppearance" in n.style,
        u = t && !! b.createRange().compareNode,
        v = u ? n : p.parentNode,
        n = a.opera && "[object Opera]" == q.call(a.opera),
        n = !! b.attachEvent && !n,
        w = t ? "object" : n ? "script" : "img",
        x = n ? "script" : w,
        y = Array.isArray || function(a) {
            return "[object Array]" == q.call(a)
        }, z = [],
        A = {}, B = {
            timeout: function(a, b) {
                return b.length && (a.timeout = b[0]), a
            }
        };
    m = function(a) {
        function b(a) {
            var b, c, d, a = a.split("!"),
                e = z.length,
                f = a.pop(),
                g = a.length,
                f = {
                    url: f,
                    origUrl: f,
                    prefixes: a
                };
            for (c = 0; g > c; c++) d = a[c].split("="), (b = B[d.shift()]) && (f = b(f, d));
            for (c = 0; e > c; c++) f = z[c](f);
            return f
        }

        function g(a, e, f, g, h) {
            var i = b(a),
                j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (A[i.url] ? i.noexec = !0 : A[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), A[i.url] = 2
            })))
        }

        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a)) c || (l = function() {
                        var a = [].slice.call(arguments);
                        m.apply(this, a), n()
                    }), g(a, l, b, 0, j);
                    else if (Object(a) === a)
                        for (i in h = function() {
                            var b, c = 0;
                            for (b in a) a.hasOwnProperty(b) && c++;
                            return c
                        }(), a) a.hasOwnProperty(i) && (!c && !--h && (d(l) ? l = function() {
                            var a = [].slice.call(arguments);
                            m.apply(this, a), n()
                        } : l[i] = function(a) {
                            return function() {
                                var b = [].slice.call(arguments);
                                a && a.apply(this, b), n()
                            }
                        }(m[i])), g(a[i], l, b, i, j))
                } else !c && n()
            }
            var h, i, j = !! a.test,
                k = a.load || a.both,
                l = a.callback || f,
                m = l,
                n = a.complete || f;
            c(j ? a.yep : a.nope, !! k), k && c(k)
        }
        var i, j, l = this.yepnope.loader;
        if (e(a)) g(a, 0, l, 0);
        else if (y(a))
            for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : y(j) ? m(j) : Object(j) === j && h(j, l);
        else Object(a) === a && h(a, l)
    }, m.addPrefix = function(a, b) {
        B[a] = b
    }, m.addFilter = function(a) {
        z.push(a)
    }, m.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", l = function() {
        b.removeEventListener("DOMContentLoaded", l, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var k, l, n = b.createElement("script"),
            e = e || m.errorTimeout;
        n.src = a;
        for (l in d) n.setAttribute(l, d[l]);
        c = j ? h : c || f, n.onreadystatechange = n.onload = function() {
            !k && g(n.readyState) && (k = 1, c(), n.onload = n.onreadystatechange = null)
        }, o(function() {
            k || (k = 1, c(1))
        }, e), i ? n.onload() : p.parentNode.insertBefore(n, p)
    }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var j, e = b.createElement("link"),
            c = i ? h : c || f;
        e.href = a, e.rel = "stylesheet", e.type = "text/css";
        for (j in d) e.setAttribute(j, d[j]);
        g || (p.parentNode.insertBefore(e, p), o(c, 0))
    }
}(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
},
/**
 * StyleFix 1.0.3 & PrefixFree 1.0.7
 * @author Lea Verou
 * MIT license
 */
function() {
    function a(a, b) {
        return [].slice.call((b || document).querySelectorAll(a))
    }
    if (window.addEventListener) {
        var b = window.StyleFix = {
            link: function(a) {
                try {
                    if ("stylesheet" !== a.rel || a.hasAttribute("data-noprefix")) return
                } catch (c) {
                    return
                }
                var d, e = a.href || a.getAttribute("data-href"),
                    f = e.replace(/[^\/]+$/, ""),
                    g = a.parentNode,
                    h = new XMLHttpRequest;
                h.onreadystatechange = function() {
                    4 === h.readyState && d()
                }, d = function() {
                    var c = h.responseText;
                    if (c && a.parentNode && (!h.status || h.status < 400 || h.status > 600)) {
                        if (c = b.fix(c, !0, a), f) {
                            c = c.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi, function(a, b, c) {
                                return /^([a-z]{3,10}:|\/|#)/i.test(c) ? a : 'url("' + f + c + '")'
                            });
                            var d = f.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g, "\\$1");
                            c = c.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)" + d, "gi"), "$1")
                        }
                        var e = document.createElement("style");
                        e.textContent = c, e.media = a.media, e.disabled = a.disabled, e.setAttribute("data-href", a.getAttribute("href")), g.insertBefore(e, a), g.removeChild(a), e.media = a.media
                    }
                };
                try {
                    h.open("GET", e), h.send(null)
                } catch (c) {
                    "undefined" != typeof XDomainRequest && (h = new XDomainRequest, h.onerror = h.onprogress = function() {}, h.onload = d, h.open("GET", e), h.send(null))
                }
                a.setAttribute("data-inprogress", "")
            },
            styleElement: function(a) {
                if (!a.hasAttribute("data-noprefix")) {
                    var c = a.disabled;
                    a.textContent = b.fix(a.textContent, !0, a), a.disabled = c
                }
            },
            styleAttribute: function(a) {
                var c = a.getAttribute("style");
                c = b.fix(c, !1, a), a.setAttribute("style", c)
            },
            process: function() {
                a('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link), a("style").forEach(StyleFix.styleElement), a("[style]").forEach(StyleFix.styleAttribute)
            },
            register: function(a, c) {
                (b.fixers = b.fixers || []).splice(void 0 === c ? b.fixers.length : c, 0, a)
            },
            fix: function(a, c, d) {
                for (var e = 0; e < b.fixers.length; e++) a = b.fixers[e](a, c, d) || a;
                return a
            },
            camelCase: function(a) {
                return a.replace(/-([a-z])/g, function(a, b) {
                    return b.toUpperCase()
                }).replace("-", "")
            },
            deCamelCase: function(a) {
                return a.replace(/[A-Z]/g, function(a) {
                    return "-" + a.toLowerCase()
                })
            }
        };
        ! function() {
            setTimeout(function() {
                a('link[rel="stylesheet"]').forEach(StyleFix.link)
            }, 10), document.addEventListener("DOMContentLoaded", StyleFix.process, !1)
        }()
    }
}(),
function(a) {
    function b(a, b, d, e, f) {
        if (a = c[a], a.length) {
            var g = RegExp(b + "(" + a.join("|") + ")" + d, "gi");
            f = f.replace(g, e)
        }
        return f
    }
    if (window.StyleFix && window.getComputedStyle) {
        var c = window.PrefixFree = {
            prefixCSS: function(a, d) {
                var e = c.prefix;
                if (c.functions.indexOf("linear-gradient") > -1 && (a = a.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/gi, function(a, b, c, d) {
                    return b + (c || "") + "linear-gradient(" + (90 - d) + "deg"
                })), a = b("functions", "(\\s|:|,)", "\\s*\\(", "$1" + e + "$2(", a), a = b("keywords", "(\\s|:)", "(\\s|;|\\}|$)", "$1" + e + "$2$3", a), a = b("properties", "(^|\\{|\\s|;)", "\\s*:", "$1" + e + "$2:", a), c.properties.length) {
                    var f = RegExp("\\b(" + c.properties.join("|") + ")(?!:)", "gi");
                    a = b("valueProperties", "\\b", ":(.+?);", function(a) {
                        return a.replace(f, e + "$1")
                    }, a)
                }
                return d && (a = b("selectors", "", "\\b", c.prefixSelector, a), a = b("atrules", "@", "\\b", "@" + e + "$1", a)), a = a.replace(RegExp("-" + e, "g"), "-"), a = a.replace(/-\*-(?=[a-z]+)/gi, c.prefix)
            },
            property: function(a) {
                return (c.properties.indexOf(a) ? c.prefix : "") + a
            },
            value: function(a) {
                return a = b("functions", "(^|\\s|,)", "\\s*\\(", "$1" + c.prefix + "$2(", a), a = b("keywords", "(^|\\s)", "(\\s|$)", "$1" + c.prefix + "$2$3", a)
            },
            prefixSelector: function(a) {
                return a.replace(/^:{1,2}/, function(a) {
                    return a + c.prefix
                })
            },
            prefixProperty: function(a, b) {
                var d = c.prefix + a;
                return b ? StyleFix.camelCase(d) : d
            }
        };
        ! function() {
            var a = {}, b = [],
                d = getComputedStyle(document.documentElement, null),
                e = document.createElement("div").style,
                f = function(c) {
                    if ("-" === c.charAt(0)) {
                        b.push(c);
                        var d = c.split("-"),
                            e = d[1];
                        for (a[e] = ++a[e] || 1; d.length > 3;) {
                            d.pop();
                            var f = d.join("-");
                            g(f) && -1 === b.indexOf(f) && b.push(f)
                        }
                    }
                }, g = function(a) {
                    return StyleFix.camelCase(a) in e
                };
            if (d.length > 0)
                for (var h = 0; h < d.length; h++) f(d[h]);
            else
                for (var i in d) f(StyleFix.deCamelCase(i));
            var j = {
                uses: 0
            };
            for (var k in a) {
                var l = a[k];
                j.uses < l && (j = {
                    prefix: k,
                    uses: l
                })
            }
            c.prefix = "-" + j.prefix + "-", c.Prefix = StyleFix.camelCase(c.prefix), c.properties = [];
            for (var h = 0; h < b.length; h++) {
                var i = b[h];
                if (0 === i.indexOf(c.prefix)) {
                    var m = i.slice(c.prefix.length);
                    g(m) || c.properties.push(m)
                }
            }
            "Ms" == c.Prefix && !("transform" in e) && !("MsTransform" in e) && "msTransform" in e && c.properties.push("transform", "transform-origin"), c.properties.sort()
        }(),
        function() {
            function a(a, b) {
                return e[b] = "", e[b] = a, !! e[b]
            }
            var b = {
                "linear-gradient": {
                    property: "backgroundImage",
                    params: "red, teal"
                },
                calc: {
                    property: "width",
                    params: "1px + 5%"
                },
                element: {
                    property: "backgroundImage",
                    params: "#foo"
                },
                "cross-fade": {
                    property: "backgroundImage",
                    params: "url(a.png), url(b.png), 50%"
                }
            };
            b["repeating-linear-gradient"] = b["repeating-radial-gradient"] = b["radial-gradient"] = b["linear-gradient"];
            var d = {
                initial: "color",
                "zoom-in": "cursor",
                "zoom-out": "cursor",
                box: "display",
                flexbox: "display",
                "inline-flexbox": "display",
                flex: "display",
                "inline-flex": "display"
            };
            c.functions = [], c.keywords = [];
            var e = document.createElement("div").style;
            for (var f in b) {
                var g = b[f],
                    h = g.property,
                    i = f + "(" + g.params + ")";
                !a(i, h) && a(c.prefix + i, h) && c.functions.push(f)
            }
            for (var j in d) {
                var h = d[j];
                !a(j, h) && a(c.prefix + j, h) && c.keywords.push(j)
            }
        }(),
        function() {
            function b(a) {
                return f.textContent = a + "{}", !! f.sheet.cssRules.length
            }
            var d = {
                ":read-only": null,
                ":read-write": null,
                ":any-link": null,
                "::selection": null
            }, e = {
                    keyframes: "name",
                    viewport: null,
                    document: 'regexp(".")'
                };
            c.selectors = [], c.atrules = [];
            var f = a.appendChild(document.createElement("style"));
            for (var g in d) {
                var h = g + (d[g] ? "(" + d[g] + ")" : "");
                !b(h) && b(c.prefixSelector(h)) && c.selectors.push(g)
            }
            for (var i in e) {
                var h = i + " " + (e[i] || "");
                !b("@" + h) && b("@" + c.prefix + h) && c.atrules.push(i)
            }
            a.removeChild(f)
        }(), c.valueProperties = ["transition", "transition-property"], a.className += " " + c.prefix, StyleFix.register(c.prefixCSS)
    }
}(document.documentElement),
/*!
    --------------------------------
    PXU Photoset Extended
    --------------------------------
    + https://github.com/PixelUnion/Extended-Tumblr-Photoset
    + http://pixelunion.net
    + Version 1.8.0
    + Copyright 2013 Pixel Union
    + Licensed under the MIT license
*/
function(a) {
    a.fn.pxuPhotoset = function(b, c) {
        var d = {
            lightbox: !0,
            highRes: !0,
            rounded: "corners",
            borderRadius: "5px",
            exif: !0,
            captions: !0,
            gutter: "10px",
            photoset: ".photo-slideshow",
            photoWrap: ".photo-data",
            photo: ".pxu-photo"
        }, e = a.extend(d, b);
        if (e.lightbox) {
            a(".tumblr-box").on("click", function(b) {
                b.preventDefault();
                var c = a(this),
                    d = c.parents(e.photoset).attr("id");
                f(c, d)
            });
            var f = function(b, c) {
                var d = b.parents(e.photoWrap).find(e.photo + " img").data("count"),
                    f = [];
                a("#" + c).find(e.photoWrap).each(function() {
                    var b = a(this).find(e.photo + " img"),
                        c = b.data("width"),
                        d = b.data("height"),
                        g = b.attr("src"),
                        h = b.data("highres"),
                        i = {
                            width: c,
                            height: d,
                            low_res: g,
                            high_res: h
                        };
                    f.push(i)
                }), Tumblr.Lightbox.init(f, d)
            }
        }
        return a(e.photoWrap).on("mouseenter", function() {
            a(this).find(".icons").css("visibility", "visible")
        }).on("mouseleave", function() {
            a(this).find(".icons").css("visibility", "hidden")
        }), a("span.info").on("mouseenter", function() {
            var b = a(this),
                c = b.children(".pxu-data");
            c.css("display", "block").stop(!0, !1).animate({
                opacity: 1
            }, 200)
        }), a("span.info").on("mouseleave", function() {
            var b = a(this),
                c = b.children(".pxu-data");
            c.stop(!0, !1).animate({
                opacity: 0
            }, 200, function() {
                a(this).css("display", "none")
            })
        }), this.each(function() {
            function b(b) {
                for (var c, d, f, g, h, i = b.find(".row"), j = i.length, k = 0; j > k; k++)
                    if (currentRow = i.eq(k), images = currentRow.find(e.photoWrap + " img"), photoCount = images.length, photoCount > 1) {
                        var l = currentRow.find(e.photo + " img").map(function() {
                            return c = a(this), d = c.data("width"), f = c.data("height"), g = c.parent().width(), h = g / d * f, c.data("new-height", h), h
                        }).get(),
                            m = Array.min(l);
                        for (currentRow.height(m - 1).find(e.photo).height(m - 1), p = 0; photoCount > p; p++) {
                            var n = images.eq(p),
                                o = n.data("new-height"),
                                q = m;
                            if (o > q) {
                                var r = (o - q) / 2;
                                n.css("margin-top", -r)
                            }
                        }
                    }
            }
            var d = a(this),
                f = d.data("layout"),
                g = JSON.stringify(f).split(""),
                h = g.length,
                i = d.find(e.photo + " img");
            for (p = 0; p < i.length; p++) {
                var j = i.eq(p);
                j.attr("data-count", p + 1)
            }
            var k = [];
            for (p = 1; h >= p; ++p) {
                for (var l = 0, m = 0; p > m; ++m) {
                    var n = parseInt(g[m], 10);
                    l += n
                }
                var o = parseInt(g[p - 1], 10);
                k[p] = Array(p, o, l)
            }
            for (var p = 1; h >= p; p++) {
                var q;
                q = 1 === p ? 0 : k[p - 1][2], d.find(e.photoWrap).slice(q, k[p][2]).addClass("count-" + k[p][1]).wrapAll('<div class="row clearit" />')
            }
            if (e.gutter && (a(this).find(".row").css("margin-bottom", e.gutter), a(this).find(e.photoWrap + ":not(:first-child) " + e.photo + " img").css("margin-left", e.gutter)), Array.min = function(a) {
                return Math.min.apply(Math, a)
            }, b(d), a(window).resize(function() {
                b(d)
            }), e.exif && e.captions ? d.find(e.photoWrap).each(function() {
                var b, c, d = a(this).find("img");
                if (d.hasClass("exif-yes")) {
                    var e = d.data("camera") || "-",
                        f = d.data("iso") || "-",
                        g = d.data("aperture") || "-",
                        h = d.data("exposure") || "-",
                        i = d.data("focal") || "-";
                    b = '<table class="exif"><tr><td colspan="2"><span class="label">Camera</span><br>' + e + '</td></tr><tr><td><span class="label">ISO</span><br>' + f + '</td><td><span class="label">Aperture</span><br>' + g + '</td></tr><tr><td><span class="label">Exposure</span><br>' + h + '</td><td><span class="label">Focal Length</span><br>' + i + "</td></tr></table>"
                } else b = ""; if (d.hasClass("caption-yes")) {
                    var j = d.data("caption");
                    c = '<p class="pxu-caption">' + j + "</p>"
                } else c = "";
                ("" !== c || "" !== b) && (a(this).find(".info").append('<div class="pxu-data">' + c + b + '<span class="arrow-down"></span></div>'), "" === b && a(this).find(".pxu-data").addClass("caption-only"), a(this).find("span.info").css("display", "block"))
            }) : e.exif ? d.find(e.photoWrap).each(function() {
                var b = a(this).find("img");
                if (b.hasClass("exif-yes")) {
                    var c = b.data("camera") || "-",
                        d = b.data("iso") || "-",
                        e = b.data("aperture") || "-",
                        f = b.data("exposure") || "-",
                        g = b.data("focal") || "-",
                        h = '<table class="exif"><tr><td colspan="2"><span class="label">Camera</span><br>' + c + '</td></tr><tr><td><span class="label">ISO</span><br>' + d + '</td><td><span class="label">Aperture</span><br>' + e + '</td></tr><tr><td><span class="label">Exposure</span><br>' + f + '</td><td><span class="label">Focal Length</span><br>' + g + '</td></tr></table><span class="arrow-down"></span>';
                    a(this).find(".info").append('<div class="pxu-data">' + h + "</div>"), a(this).find("span.info").css("display", "block")
                }
            }) : e.captions && d.find(e.photoWrap).each(function() {
                var b = a(this).find("img");
                if (b.hasClass("caption-yes")) {
                    var c = b.data("caption"),
                        d = '<p class="pxu-caption" style="margin:0;">' + c + "</p>";
                    a(this).find(".info").append('<div class="pxu-data caption-only">' + d + '<span class="arrow-down"></span></div>'), a(this).find("span.info").css("display", "block")
                }
            }), e.highRes && d.find(e.photoWrap).each(function() {
                var b = a(this).find(e.photo + " img"),
                    c = b.data("highres");
                b.attr("src", c)
            }), "corners" == e.rounded) {
                var r = d.find(".row");
                if (1 == h) r.find(e.photoWrap + ":first-child " + e.photo).css({
                    borderRadius: e.borderRadius + " 0 0 " + e.borderRadius
                }), r.find(e.photoWrap + ":last-child " + e.photo).css({
                    borderRadius: "0 " + e.borderRadius + " " + e.borderRadius + " 0"
                });
                else
                    for (var s = 0; h > s; s++) {
                        var t;
                        0 === s && (t = r.eq(s).find(e.photo).size(), 1 == t ? r.eq(s).find(e.photo).css({
                            borderRadius: e.borderRadius + " " + e.borderRadius + " 0 0"
                        }) : (r.eq(s).find(e.photoWrap + ":first-child " + e.photo).css({
                            borderRadius: e.borderRadius + " 0 0 0"
                        }), r.eq(s).find(e.photoWrap + ":last-child " + e.photo).css({
                            borderRadius: "0 " + e.borderRadius + " 0 0"
                        }))), s == h - 1 && (t = r.eq(s).find(e.photo).size(), 1 == t ? r.eq(s).find(e.photo).css({
                            borderRadius: "0 0 " + e.borderRadius + " " + e.borderRadius
                        }) : (r.eq(s).find(e.photoWrap + ":first-child " + e.photo).css({
                            borderRadius: "0 0 0 " + e.borderRadius
                        }), r.eq(s).find(e.photoWrap + ":last-child " + e.photo).css({
                            borderRadius: "0 0 " + e.borderRadius + " 0"
                        })))
                    }
            }
            "all" == e.rounded && d.find(e.photo).css({
                borderRadius: e.borderRadius
            }), e.rounded || d.find(e.photo).css({
                borderRadius: 0
            }), d.addClass("processed"), "function" == typeof c && c.call(this)
        })
    }
}(jQuery),
/*!
 * Olle Ota
 * Copyright 2013-2014
 */
function() {
    if (responsiveVideo(), 1 == theme_options.infinite_scroll) {
        $("#pagination").hide();
        var a = $("#loading");
        $(".index #content").infinitescroll({
            navSelector: "nav#pagination",
            nextSelector: "nav#pagination a:first",
            itemSelector: ".hentry",
            prefill: !0,
            bufferPx: 100,
            done: "",
            loading: {
                finishedMsg: theme_options.infinite_scroll_str,
                img: "http://static.tumblr.com/ns3mt1d/t7dmwtaxj/x.png",
                msgText: ""
            }
        }, function(c) {
            var d = [],
                e = $(c).hide();
            responsiveVideo(), e.imagesLoaded(function() {
                1 == theme_options.form_photosets && $(c).find(".photo-slideshow").pxuPhotoset(b), e.fadeIn(200), "grid" == theme_options.theme_type && $(".index #content").masonry("appended", e), a.hide()
            }), e.each(function() {
                d.push(this.id)
            }), Tumblr.LikeButton.get_status_by_post_ids(d)
        })
    }
    var b = {
        ligthbox: !0, // uses the default Tumblr lightbox, change to false to use your own
        highRes: !1, // will use high res images
        rounded: "false", // corners, all or false
        exif: !0, // display EXIF data if available (tooltip)
        captions: !0, // display individual captions on photos (tooltip)
        gutter: theme_options.photoset_gap, // spacing between the images
        photoset: ".photo-slideshow", // photoset wrapper
        photoWrap: ".photo-data", // photo data wrapper (includes photo, icons + exif)
        photo: ".pxu-photo"
    };
    if ("grid" == theme_options.theme_type && (1 == theme_options.form_photosets && $(".photo-slideshow").pxuPhotoset(b), docReady(function() {
        prepareGrid()
    })), "column" == theme_options.theme_type) {
        if (1 == theme_options.form_photosets && $(".photo-slideshow").pxuPhotoset(b), 1 == theme_options.widget_grid) {
            var c = $(".widgets");
            c.imagesLoaded(function() {
                c.masonry({
                    itemSelector: ".widget"
                })
            })
        }
        fetchMore()
    }
}(),
/*!
 * Olle Ota
 * Enable let it snow
 */
$(function() {
    1 == theme_options.make_it_snow && $("body").letItSnow()
});
