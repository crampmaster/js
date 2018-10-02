var _i_ = this._i_ || function() {}, _r_ = this._r_ || function(e) {
return e;
};

jQuery.extend(jQuery.easing, {
easeInBackWeaker:function(e, t, i, n, a) {
_i_("3bb:53aa79b9");
var r = .8;
return _r_(n * (t /= a) * t * ((r + 1) * t - r) + i);
},
easeInBackStronger:function(e, t, i, n, a) {
_i_("3bb:a0898cc8");
var r = 3;
return _r_(n * (t /= a) * t * ((r + 1) * t - r) + i);
},
easeOutBackWeaker:function(e, t, i, n, a) {
_i_("3bb:d0cfd69f");
var r = .8;
return _r_(n * ((t = t / a - 1) * t * ((r + 1) * t + r) + 1) + i);
},
easeOutBackStronger:function(e, t, i, n, a) {
_i_("3bb:3aa68cc3");
var r = 3;
return _r_(n * ((t = t / a - 1) * t * ((r + 1) * t + r) + 1) + i);
},
easeInOutBackWeaker:function(e, t, i, n, a, r) {
if (_i_("3bb:ea0f161d"), void 0 == r && (r = .8), (t /= a / 2) < 1) return _r_(n / 2 * (t * t * (((r *= 1.525) + 1) * t - r)) + i);
return _r_(n / 2 * ((t -= 2) * t * (((r *= 1.525) + 1) * t + r) + 2) + i);
},
easeInOutBackStronger:function(e, t, i, n, a, r) {
if (_i_("3bb:6d325e27"), void 0 == r && (r = 3), (t /= a / 2) < 1) return _r_(n / 2 * (t * t * (((r *= 1.525) + 1) * t - r)) + i);
return _r_(n / 2 * ((t -= 2) * t * (((r *= 1.525) + 1) * t + r) + 2) + i);
}
}), booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.book = {
loaded:!0,
run:!1
}), B.define("async-css-style", function(e, t, i) {
"use strict";
_i_("3bb:93d289cc");
var n = e("promise"), a = window.document;
function r(e) {
if (_i_("3bb:957431ab"), "object" != typeof e) throw new Error("async-css: .load() expects options object");
var t = {
href:"",
media:"all",
after:""
};
if (e = Object.assign({}, t, e), e.href = e.href || e.path, "string" != typeof e.href || 0 === e.href.length) throw new Error("async-css: href or path should be defined.");
return _r_(_(e.href));
}
function _(e) {
return _i_("3bb:9c8fd8f1"), _r_(new n(function(t, i) {
_i_("3bb:d365b147"), o(e, function(e) {
_i_("3bb:b321ca81");
var n, a = s();
switch (e.status) {
case 200:
n = document.createElement("style"), n.innerHTML = e.responseText, a.parentNode.insertBefore(n, a.nextSibling), t();
break;

default:
i();
}
_r_();
}), _r_();
}));
}
function o(e, t) {
_i_("3bb:64bbf2ed");
var i = new XMLHttpRequest();
i.open("GET", e), i.onreadystatechange = function() {
_i_("3bb:40d64557"), i.readyState === XMLHttpRequest.DONE && t(i), _r_();
}, i.send(), _r_();
}
function s(e) {
_i_("3bb:e7129ae6");
var t = a.getElementsByTagName("head")[0], i = (a.body || t).childNodes, n = i[i.length - 1];
return _r_(n);
}
t.load = r, _r_();
}), B.define("async-css-link", function(e, t, i) {
"use strict";
_i_("3bb:96c8dfd5");
var n = e("promise"), a = window.document;
function r(e) {
if (_i_("3bb:2c8ed0e8"), "object" != typeof e) throw new Error("async-css: .load() expects options object");
var t = {
href:"",
media:"all",
after:""
};
if (e = Object.assign({}, t, e), e.href = e.href || e.path, "string" != typeof e.href || 0 === e.href.length) throw new Error("async-css: href or path should be defined.");
var i = o(e.after), n = c(e.href);
return d(function() {
_i_("3bb:cbb52693"), i.parentNode.insertBefore(n, i.nextSibling), _r_();
}), _r_(_(n, e));
}
function _(e, t) {
return _i_("3bb:63a16c21"), _r_(new n(function(i, n) {
_i_("3bb:5f729357"), s(e, t, function() {
_i_("3bb:099fe1d6"), i(), _r_();
}, function() {
_i_("3bb:d47bd0fa"), n(), _r_();
}), _r_();
}));
}
function o(e) {
_i_("3bb:7811a243");
var t = a.getElementsByTagName("head")[0], i = (a.body || t).childNodes, n = i[i.length - 1];
return "main" === e && "undefined" != typeof t && (n = l(n, t)), _r_(n);
}
function s(e, t, i, n) {
_i_("3bb:d8e74345"), e.addEventListener && (e.addEventListener("load", i), e.addEventListener("error", n)), e.attachEvent && (e.attachEvent("onload", i), e.attachEvent("onerror", n)), _r_();
}
function l(e, t) {
_i_("3bb:88118108");
for (var i = t.getElementsByTagName("link"), n = 0; n < i.length; n++) if ("1" === i[n].getAttribute("data-main-css")) return _r_(i[n]);
return _r_(e);
}
function c(e) {
_i_("3bb:851d86ba");
var t = a.createElement("link");
return t.rel = "stylesheet", t.href = e, _r_(t);
}
function d(e) {
if (_i_("3bb:47b0dd81"), a.body) return _r_(e());
window.setTimeout(function() {
_i_("3bb:7962f8f0"), d(e), _r_();
}, 100), _r_();
}
t.load = r, _r_();
}), B.define("async-css", function(e, t, i) {
"use strict";
_i_("3bb:9f8987c6"), "isApplicationInstalled" in navigator ? t.load = e("async-css-style").load :t.load = e("async-css-link").load, _r_();
}), B.define("loadscript", function(e, t, i) {
_i_("3bb:d47addb3");
var n = e("promise");
function a(e) {
return _i_("3bb:97f97f7c"), _r_(new n(function(t, i) {
_i_("3bb:92422bf0");
var n = document.createElement("script");
n.onload = n.onreadystatechange = function(e, i) {
_i_("3bb:280f4643"), (i || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, i || t()), _r_();
}, n.onerror = i, n.type = "text/javascript", n.src = e;
var a = document.getElementsByTagName("script")[0];
a.parentNode.insertBefore(n, a), _r_();
}));
}
function r(e, t) {
_i_("3bb:75dd9346");
var i = r._urls[e] || e;
if (!i) throw new Error("Must provide a URL.");
if (i === e && -1 === i.indexOf("/")) throw new Error('"' + i + "\" doesn't seem like a script URL.");
return _r_(a(i, t));
}
r._urls = {}, r.add = function(e, t) {
_i_("3bb:9f107474");
var i = r._urls;
$.isPlainObject(e) ? $.extend(i, e) :i[name] = t, _r_();
}, i.exports = r, _r_();
}), B.define("async-loader", function(e, t, i) {
"use strict";
_i_("3bb:a15e0d77");
var n = e("loadscript"), a = e("async-css"), r = e("promise"), _ = {}, o = B.env || {};
function s(e) {
if (_i_("3bb:a52750db"), "object" != typeof e) throw new Error("async-loader: load() expects an object!");
var t = Object.keys(e).map(function(t) {
_i_("3bb:b97aa9bc");
var i = e[t], n = i;
if ("string" == typeof n && n.length > 0 && (i = {
path:n
}), "object" != typeof i || !i.hasOwnProperty("path")) throw new Error("async-loader: .load() invalid argument!");
return _r_(c(t, i));
});
return _r_(r.all(t));
}
function l(e) {
_i_("3bb:5ab4a82f");
var t;
if (!o.hasOwnProperty("asyncLoader") || !o.asyncLoader.hasOwnProperty(e)) throw new Error("async-loader: could not find file " + e + " in B.env.asyncLoader");
if (t = o.asyncLoader[e], "string" != typeof t || 0 === t.length) throw new Error("async-loader: invalid path for " + e);
return _r_(t);
}
function c(e, t) {
_i_("3bb:ee19ee6e");
var i = t.path = l(t.path);
return _[i] || (_[i] = d(e, t)), _r_(_[i]);
}
function d(e, t) {
_i_("3bb:b8123876");
var i;
switch (e) {
case "css":
return i = a.load(t), i["catch"](function() {
_i_("3bb:82ff7fe4"), B.squeak && B.squeak("OdeFAAOZOGaDIARMGZYfNXMDDBXe"), _r_();
}), _r_(i);

case "js":
return i = n(t.path), i["catch"](function() {
_i_("3bb:65eb6ffd"), B.squeak && B.squeak("OdeFAAOZOGaDIARMGZGTXMDDBXe"), _r_();
}), _r_(i);

default:
throw new Error("async-loader: file type [" + e + "] not supported!");
}
_r_();
}
function b(e) {
if (_i_("3bb:111db707"), "string" == typeof e && e.length > 0 && (e = {
path:e
}), "object" != typeof e || !("path" in e)) throw new Error("async-loader: .css() invalid argument!");
return _r_(c("css", e));
}
function p(e) {
if (_i_("3bb:b4ea448e"), "string" == typeof e && e.length > 0 && (e = {
path:e
}), "object" != typeof e || !("path" in e)) throw new Error("async-loader: .js() invalid argument!");
return _r_(c("js", e));
}
function u(e) {
if (_i_("3bb:016e0e69"), "string" != typeof e || 0 === e.length) throw new Error("async-loader: registerPath() invalid argument");
if (!o.hasOwnProperty("asyncLoader")) throw new Error("async-loader: B.env.asyncLoader is not defined");
return o.asyncLoader.hasOwnProperty(e) || (o.asyncLoader[e] = e), _r_(e);
}
t.load = s, t.css = b, t.js = p, t.registerPath = u, _r_();
}), booking.jstmpl("bp_compset", function() {
_i_("3bb:ac20703f");
var e, t = [ "\n    ", "\n\n\n\n\n", "\n\n\n", "compset-list", "\n", " compset-list-", "-per-row", " ", "compset-list-header", "\n\n\n\n", '\n        <div class="', '">\n    ', "\n\n    ", '\n        <h3 class="', '">\n            ', "\n                ", "/private/{compset_header_tag}/name", "\n            ", "\n        </h3>\n    ", '\n\n    <div class="', '">\n        ', "\n            \n            ", '\n                <div class="compset-list-row">\n            ', '\n\n            <div class="compset-list-item-wrapper ', "compset-list-item-odd", '">\n                <a class="compset-list-item" href="', "&bp_nocc_compset=1", "&bp_compset_src=", '" target="_blank">\n                    <div class="compset-list-item-image">\n                        <img src="', '" alt="', '" />\n                    </div>\n\n                    <div class="compset-list-item-info">\n                        <h4 class="compset-list-item-name">\n                            ', "\n                                ", "\n                                    (", ")\n                                ", "\n                            ", "\n                                    ", " (", "\n                        </h4>\n\n                        ", '\n                            <p class="compset-list-item-review">\n                                <span class="compset-list-item-review-score">\n                                    ', "&nbsp;", '\n                                </span>\n\n                                <span class="compset-list-item-review-from">\n                                    ', "/private/score_from_number_reviews/name", "\n                                </span>\n                            </p>\n                        ", '\n\n                        <p class="compset-list-item-price">\n                            <span class="compset-list-item-price-from">', "/private/room_type_total_price_from/name", '</span>\n                            <span class="compset-list-item-price-value">', "</span>\n                        </p>\n                    </div>\n                </a>\n            </div>\n\n            \n            ", "\n                </div>\n            ", "\n        ", "\n    </div>\n\n    ", "\n        </div>\n    ", "\n\n" ], i = [ "hotels_per_row", "compset_local_list_class", "compset_local_hotels_per_row", "row_wrap", "compset_list_class", "compset_local_header_list_class", "compset_header_class", "compset_container_class", "compset_header_tag", "compset_header", "hotels", "b_domain_for_app", "compset_src", "b_lang" ];
return _r_(function(n) {
_i_("3bb:3df51510");
var a = "", r = this.fn;
function _(a) {
if (_i_("3bb:087540db"), a += t[1], r.MN("compset_local_hotels_per_row", r.MB(i[0]) || 2), a += t[2], r.MN(i[1], t[3]), a += t[4], r.MD(i[3]) && (a += t[0], r.MN(i[1], [ r.MC(i[1]), t[5], r.MC(i[2]), t[6] ].join("")), a += t[4]), a += t[4], r.MD(i[4]) && (a += t[0], r.MN(i[1], [ r.MC(i[1]), t[7], r.MC(i[4]) ].join("")), a += t[4]), a += t[2], r.MN(i[5], t[8]), a += t[4], r.MD(i[6]) && (a += t[0], r.MN(i[5], [ r.MC(i[5]), t[7], r.MC(i[6]) ].join("")), a += t[4]), a += t[9], r.MJ(r.array_length(r.MB(i[10])))) {
a += t[0], r.MD(i[7]) && (a += [ t[10], r.MC(i[7]), t[11] ].join("")), a += t[12], (r.MJ(r.MB(i[8])) || r.MJ(r.MB(i[9]))) && (a += [ t[13], r.MB(i[5]), t[14] ].join(""), r.MD(i[8]) ? a += [ t[15], r.ME(t[16], r.MB, r.MN, null), t[17] ].join("") :r.MD(i[9]) && (a += [ t[15], r.MC(i[9]), t[17] ].join("")), a += t[18]), a += [ t[19], r.MB(i[1]), t[20] ].join("");
var _ = r.MC(i[10]) || [];
n.unshift({
hotel:null
});
for (var o, s = 1, l = _.length; l >= s; s++) n[0].hotel = o = _[s - 1], a += t[21], r.MJ(r.MB(i[3])) && r.MK(r.MI(r.MI(s) - r.MI(1)) % r.MI(r.MB(i[2]))) && (a += t[22]), a += t[23], r.MJ(r.MI(s) % r.MI(2) == 1) && (a += t[24]), a += [ t[25], r.MC(i[11]), (o || {}).b_url ].join(""), r.MJ(r.MB(i[12]) + "" == "nocc") && (a += t[26]), r.MD(i[12]) && (a += [ t[27], r.F.html(r.MC(i[12])) ].join("")), a += [ t[28], r.STATIC_HOSTNAME(o.b_image_url_square60, 0, 0, 0), t[29], r.MG((o || {}).b_name), t[30] ].join(""), r.MJ(r.MC(i[13]) + "" == "ja") ? (a += [ t[31], (o || {}).b_name, t[31] ].join(""), r.MJ(r.MG((o || {}).b_name_en)) && (a += [ t[32], (o || {}).b_name_en, t[33] ].join("")), a += t[34]) :r.MJ(r.MC(i[13]) + "" == "cn") ? (a += t[31], a += r.MJ(r.MG((o || {}).b_name_en)) ? [ t[35], (o || {}).b_name_en, t[36], (o || {}).b_name, t[33] ].join("") :[ t[35], (o || {}).b_name, t[31] ].join(""), a += t[34]) :a += [ t[31], (o || {}).b_name, t[34] ].join(""), a += t[37], r.MJ(o.b_review_score > 0) && (a += [ t[38], (o || {}).b_review_score_word, t[39], (o || {}).b_review_score_formatted, t[40], (n.unshift({
num_score_from_review:o.b_review_count
}), e = r.ME(t[41], r.MB, r.MN, null), n.shift(), e), t[42] ].join("")), a += [ t[43], r.ME(t[44], r.MB, r.MN, null), t[45], (o || {}).b_price, t[46] ].join(""), r.MJ(r.MB(i[3])) && r.MK(r.MI(s) % r.MI(r.MB(i[2]))) && (a += t[47]), a += t[48];
n.shift(), a += t[49], r.MD(i[7]) && (a += t[50]), a += t[51];
}
return _r_(a);
}
return a += t[0], a = _(a), a += t[4], _r_(a);
});
}()), booking.jstmpl("circular_loader", function() {
_i_("3bb:12cd2fee");
var e = [ '\n    <div class="', "--animated", " ", '">\n        ', '\n            <svg viewBox="-10 -10 220 220" class="', '">\n                <path d="M100,0 C155.228475,0 200,44.771525 200,100 C200,155.228475 155.228475,200 100,200 C44.771525,200 0,155.228475 0,100 C0,44.771525 44.771525,0 100,0" fill="transparent"></path>\n            </svg>\n\n            <svg viewBox="-10 -10 220 220" class="', '">\n                <path d="M100,0 C155.228475,0 200,44.771525 200,100 C200,155.228475 155.228475,200 100,200 C44.771525,200 0,155.228475 0,100 C0,44.771525 44.771525,0 100,0" fill="transparent"></path>\n            </svg>\n        ', '\n            <div class="', '"></div>\n            <div class="', '"></div>\n        ', "\n    </div>\n" ], t = [ "base_class", "is_circle_animated", "no_svg_class", "supports_svg", "total_class", "current_class" ];
return _r_(function(i) {
_i_("3bb:43c86506");
var n = "", a = this.fn;
return n += [ e[0], a.MC(t[0]) ].join(""), a.MD(t[1]) && (n += [ a.MC(t[0]), e[1] ].join("")), n += e[2], a.MD(t[3]) || (n += a.MC(t[2])), n += e[3], n += a.MD(t[3]) ? [ e[4], a.MC(t[4]), e[5], a.MC(t[5]), e[6] ].join("") :[ e[7], a.MC(t[4]), e[8], a.MC(t[5]), e[9] ].join(""), n += e[10], _r_(n);
});
}()), B.define("utils/throttled", function(e, t, i) {
_i_("3bb:c05117b8"), i.exports = function(e, t) {
_i_("3bb:6684d35e");
var i, n = 0;
function a() {
_i_("3bb:f991b93f");
for (var r = this, _ = new Array(arguments.length), o = 0, s = arguments.length; s > o; o++) _[o] = arguments[o];
var l = +new Date();
if (n && clearTimeout(n), t > l - i) return n = setTimeout(function() {
_i_("3bb:74556d05"), a.apply(r, _), _r_();
}, t), _r_();
i = l, setTimeout(function() {
_i_("3bb:68a22e39"), e.apply(r, _), _r_();
}), _r_();
}
return _r_(a);
}, _r_();
}), B.define("utils/debounce", function(e, t, i) {
_i_("3bb:d27ec383");
function n(e, t, i) {
_i_("3bb:987315f9");
var n;
return _r_(function() {
_i_("3bb:d421fd91");
var a = this, r = arguments;
i === !0 && void 0 === n && e.apply(a, r), clearTimeout(n), n = setTimeout(function() {
_i_("3bb:d43ea598"), e.apply(a, r), _r_();
}, t), _r_();
});
}
i.exports = n, _r_();
}), B.define("utils", function(e, t, i) {
_i_("3bb:1ae1366f"), t.assertExists = function(e, t) {
if (_i_("3bb:9d42554a"), "object" != typeof e || !(t in e)) throw new Error("Property " + t + " is not found");
_r_();
}, t.camelCaseKeys = function(e) {
_i_("3bb:dbbbdfa4");
var t, i, n = {};
for (t in e) e.hasOwnProperty(t) && (i = t.replace(/-([a-zA-Z])/g, function(e, t) {
return _i_("3bb:aefe3784"), _r_(t.toUpperCase());
}), n[i] = e[t]);
return _r_(n);
}, t.nodeData = function(e) {
_i_("3bb:c0d6317e"), e.jquery && (e = e[0]), this.assertExists(e, "attributes");
var t, i, n, a = {};
for (t = 0, i = e.attributes.length; i > t; t++) n = e.attributes[t], n && 0 == n.name.indexOf("data-") && (a[n.name.replace(/^data-/, "")] = n.value);
return _r_(this.camelCaseKeys(a));
}, _r_();
}), B.define("utils/scrollbar", function(e, t, i) {
_i_("3bb:75c9dead");
var n, a, r, _ = document.documentElement || document.body;
function o() {
_i_("3bb:cd42c2c7"), "undefined" != typeof _.currentStyle && (n = _.currentStyle.overflow, a = _.currentStyle.overflowY), n = n || window.getComputedStyle(_, "").overflow, a = a || window.getComputedStyle(_, "").overflowY, _r_();
}
var s = {};
s.hasScrollbar = function() {
return _i_("3bb:92a2d780"), _r_(this.hasHorizontalScrollbar() || this.hasVerticalScrollbar());
}, s.hasHorizontalScrollbar = function() {
_i_("3bb:35384544"), o();
var e = _.scrollWidth > _.clientWidth, t = /^(visible|auto)$/.test(n), i = "scroll" === n;
return _r_(e && t || i);
}, s.hasVerticalScrollbar = function() {
_i_("3bb:73953e32"), o();
var e = _.scrollHeight > _.clientHeight, t = /^(visible|auto)$/.test(a), i = "scroll" === a;
return _r_(e && t || i);
}, s.getWidth = function() {
if (_i_("3bb:80b674fd"), r) return _r_(r);
var e, t, i = document.createElement("p"), n = document.createElement("div");
return i.style.width = "100%", i.style.height = "200px", n.style.position = "absolute", n.style.top = "0px", n.style.left = "0px", n.style.visibility = "hidden", n.style.width = "200px", n.style.height = "150px", n.style.overflow = "hidden", n.appendChild(i), document.body.appendChild(n), e = i.offsetWidth, n.style.overflow = "scroll", t = i.offsetWidth, e === t && (t = n.clientWidth), document.body.removeChild(n), r = e - t, _r_(r);
}, i.exports = s, _r_();
}), B.define("querystring", function(e, t, i) {
_i_("3bb:3ba17652");
function n(e, t) {
_i_("3bb:b1205794");
var i = e.split(t);
return _r_([ i.shift(), i.join(t) ]);
}
t.parseUrl = function(e) {
_i_("3bb:d897ad4d");
var i = {}, a = n(e, "#");
return i.hash = a[1], a = n(a[0], "?"), i.base = a[0], i.query = t.parse(a[1]), _r_(i);
}, t.stringify = function(e, t) {
_i_("3bb:779bf395"), t = t || {};
var i = t.sep || "&", n = t.eq || "=", a = t.skipNull, r = t.encodeURIComponent || encodeURIComponent, _ = [];
function o(e, t) {
_i_("3bb:36687cac"), (null === t || void 0 === t) && (t = ""), _.push(e + n + r(t)), _r_();
}
for (var s in e) {
if (null === e[s] && a) continue;
e[s] instanceof Array ? e[s].forEach(o.bind(this, s)) :o(s, e[s]);
}
return _r_(_.join(i));
}, t.parse = function(e, t) {
_i_("3bb:637f7447");
var i = {};
return e.split(/[\&\;]+/).forEach(function(e) {
if (_i_("3bb:20fe34d1"), !e) return _r_();
var n = e.split("="), a = n.shift(), r = n.join("=");
if (!t) try {
r = decodeURIComponent(r.replace(/\+/g, "%20"));
} catch (_) {}
a in i ? (Array.isArray(i[a]) || (i[a] = [ i[a] ]), i[a].push(r)) :i[a] = r, _r_();
}), _r_(i);
}, t.toArray = function(e) {
_i_("3bb:c31586d4");
var t, i, n = [];
for (t in e) if (e.hasOwnProperty(t)) if (i = e[t], Array.isArray(i)) for (var a = 0, r = i.length; r > a; a++) n.push({
key:t,
value:i[a]
}); else n.push({
key:t,
value:i
});
return _r_(n);
}, _r_();
}), B.define("object-assign", function(e, t, i) {
_i_("3bb:a034a556"), i.exports = Object.assign || function(e, t) {
if (_i_("3bb:9f547933"), null === e || void 0 === e) throw new TypeError("Cannot convert undefind or null to object");
for (var e = Object(e), i = 1; i < arguments.length; i++) {
var n = Object(arguments[i]);
for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
}
return _r_(e);
}, _r_();
}), B.define("promise", function(e, t, i) {
_i_("3bb:d30e5263"), "undefined" == typeof Promise ? !function(e) {
_i_("3bb:b38465dd");
var t = r.immediateFn || "function" == typeof setImmediate && setImmediate || function(e) {
_i_("3bb:6775e67a"), setTimeout(e, 1), _r_();
};
function n(e, t) {
return _i_("3bb:1d7c6867"), _r_(function() {
_i_("3bb:5ff16df2"), e.apply(t, arguments), _r_();
});
}
var a = Array.isArray || function(e) {
return _i_("3bb:f8edff11"), _r_("[object Array]" === Object.prototype.toString.call(e));
};
function r(e) {
if (_i_("3bb:4c350ba3"), "object" != typeof this) throw new TypeError("Promises must be constructed via new");
if ("function" != typeof e) throw new TypeError("not a function");
this._state = null, this._value = null, this._deferreds = [], d(e, n(o, this), n(s, this)), _r_();
}
function _(e) {
_i_("3bb:ac90a1fd");
var i = this;
if (null === this._state) return this._deferreds.push(e), _r_();
t(function() {
_i_("3bb:3a86f9ca");
var t = i._state ? e.onFulfilled :e.onRejected;
if (null === t) return (i._state ? e.resolve :e.reject)(i._value), _r_();
var n;
try {
n = t(i._value);
} catch (a) {
return e.reject(a), _r_();
}
e.resolve(n), _r_();
}), _r_();
}
function o(e) {
_i_("3bb:ff954c65");
try {
if (e === this) throw new TypeError("A promise cannot be resolved with itself.");
if (e && ("object" == typeof e || "function" == typeof e)) {
var t = e.then;
if ("function" == typeof t) return d(n(t, e), n(o, this), n(s, this)), _r_();
}
this._state = !0, this._value = e, l.call(this);
} catch (i) {
s.call(this, i);
}
_r_();
}
function s(e) {
_i_("3bb:a55a82c1"), this._state = !1, this._value = e, l.call(this), _r_();
}
function l() {
_i_("3bb:07e7fca4");
for (var e = 0, t = this._deferreds.length; t > e; e++) _.call(this, this._deferreds[e]);
this._deferreds = null, _r_();
}
function c(e, t, i, n) {
_i_("3bb:e065c025"), this.onFulfilled = "function" == typeof e ? e :null, this.onRejected = "function" == typeof t ? t :null, this.resolve = i, this.reject = n, _r_();
}
function d(e, t, i) {
_i_("3bb:d290629a");
var n = !1;
try {
e(function(e) {
if (_i_("3bb:f757cb85"), n) return _r_();
n = !0, t(e), _r_();
}, function(e) {
if (_i_("3bb:a224b2cf"), n) return _r_();
n = !0, i(e), _r_();
});
} catch (a) {
if (n) return _r_();
n = !0, i(a);
}
_r_();
}
r.prototype["catch"] = function(e) {
return _i_("3bb:d50ad370"), _r_(this.then(null, e));
}, r.prototype.then = function(e, t) {
_i_("3bb:3f0d7749");
var i = this;
return _r_(new r(function(n, a) {
_i_("3bb:9f760f9b"), _.call(i, new c(e, t, n, a)), _r_();
}));
}, r.all = function() {
_i_("3bb:a2e603ac");
var e = Array.prototype.slice.call(1 === arguments.length && a(arguments[0]) ? arguments[0] :arguments), t = new r(function(t, i) {
if (_i_("3bb:f8675742"), 0 === e.length) return _r_(t([]));
var n = e.length;
function a(r, _) {
_i_("3bb:0ec1c255");
try {
if (_ && ("object" == typeof _ || "function" == typeof _)) {
var o = _.then;
if ("function" == typeof o) return o.call(_, function(e) {
_i_("3bb:e2ee4d44"), a(r, e), _r_();
}, i), _r_();
}
e[r] = _, 0 === --n && t(e);
} catch (s) {
i(s);
}
_r_();
}
for (var r = 0; r < e.length; r++) a(r, e[r]);
_r_();
});
return _r_(t);
}, r.resolve = function(e) {
if (_i_("3bb:d79857de"), e && "object" == typeof e && e.constructor === r) return _r_(e);
return _r_(new r(function(t) {
_i_("3bb:c6c2a2aa"), t(e), _r_();
}));
}, r.reject = function(e) {
return _i_("3bb:b420b9e0"), _r_(new r(function(t, i) {
_i_("3bb:9695f944"), i(e), _r_();
}));
}, r.race = function(e) {
return _i_("3bb:20696893"), _r_(new r(function(t, i) {
_i_("3bb:0f1ca0e2");
for (var n = 0, a = e.length; a > n; n++) e[n].then(t, i);
_r_();
}));
}, "undefined" != typeof i && i.exports ? i.exports = r :e.Promise || (e.Promise = r), _r_();
}(this) :i.exports = Promise, _r_();
}), B.define("booking-store", [ "event-emitter" ], function(e) {
_i_("3bb:73512cbd");
function t(t) {
_i_("3bb:e128c6ba"), t || (t = {}), this._data = {}, e.extend(this), _r_();
}
return t.prototype.initFromData = function(e) {
_i_("3bb:1fc89d0a");
var t, i, n = e.data(), a = {};
for (t in n) if (n.hasOwnProperty(t)) {
if ("events" == t || "handle" == t) continue;
i = t.replace(/-([a-z])/g, function(e, t) {
return _i_("3bb:53df87ea"), _r_(t.toUpperCase());
}), a[i] = n[t];
}
this.initFromVar(a), _r_();
}, t.prototype.initFromForm = function(e) {
_i_("3bb:f5261feb");
for (var t, i = 0, n = e.serializeArray(), a = (n.length, {}); t = n[i]; i++) a[t.name] = t.value;
this.initFromVar(a), _r_();
}, t.prototype.initFromVar = function(e) {
_i_("3bb:f1856c78"), "object" == typeof e && (this._data = e, this.emit("data")), _r_();
}, t.prototype.get = function(e) {
return _i_("3bb:86afd500"), _r_(void 0 === e ? this._data :this._data[e]);
}, t.prototype.set = function(e, t) {
if (_i_("3bb:6495effd"), void 0 === e) throw new Error("Cannot Store.set with undefined first argument.");
if ("object" == typeof e && void 0 === t) {
var i = e;
for (e in i) i.hasOwnProperty(e) && (this._data[e] = i[e]);
} else this._data[e] = t;
this.emit("data"), _r_();
}, _r_(t);
}), B.define("click-out", function(e, t, i) {
"use strict";
_i_("3bb:fff452bb");
var n = {}, a = !1;
function r() {
_i_("3bb:c17566ca"), a || (a = !0, document.documentElement.addEventListener ? document.documentElement.addEventListener("click", _) :document.documentElement.attachEvent && document.documentElement.attachEvent("onclick", _)), _r_();
}
function _(e) {
_i_("3bb:ad210c4a");
var t, i = Object.keys(n), a = {}, r = !1;
if (i.length) for (t = e.target || e.srcElement; t && (i.forEach(function(e) {
_i_("3bb:efe0fbc1"), n[e].element === t && (a[e] = !0, 1 == i.length && (r = !0)), _r_();
}), !r); ) t = t.parentNode;
i.forEach(function(e) {
_i_("3bb:bf144444"), !a[e] && n[e] && (n[e].callback.call(!1), o(e)), _r_();
}), _r_();
}
function o(e) {
_i_("3bb:e16b90f5"), n[e] && delete n[e], _r_();
}
function s() {
_i_("3bb:d4e2fa88");
var e = Object.keys(n);
e.forEach(function(e) {
_i_("3bb:ffe354e3"), n[e].callback.call(!1), o(e), _r_();
}), _r_();
}
t.addMonitor = function(e, t) {
_i_("3bb:4eea37e7"), r();
var i = Math.random();
return "string" == typeof e.jquery && (e = e[0]), setTimeout(function() {
_i_("3bb:9952e084"), n[i] = {
element:e,
callback:t
}, _r_();
}, 4), _r_(i);
}, t.removeMonitor = o, t.forceClickOut = s, _r_();
}), B.define("data-validator", function(e, t, i) {
"use strict";
_i_("3bb:6346167d"), t.validate = function(e, t, i) {
switch (_i_("3bb:b3c7f0ab"), i = i || {}, e) {
case "required":
if (B.env && B.env.isValidationConditionFixEnabled) return _r_("" !== t && t !== !1 && void 0 !== t && null !== t);
return _r_("" !== t && t !== !1 && void 0 !== t);

case "email":
if ("" === t) return _r_(!0);
return _r_("string" == typeof t && t.match(/^[a-z0-9_.+-]+@[a-z0-9-]+\.[a-z0-9-.]+$/i));

case "phone":
if ("" === t) return _r_(!0);
return _r_("string" == typeof t && t.match(/^\+?[0-9-\s]{4,}$/));

case "email-or-phone":
if ("" === t) return _r_(!0);
return _r_("string" == typeof t && t.match(/^[a-z0-9_.+-]+@[a-z0-9-]+\.[a-z0-9-.]+$/i) || "string" == typeof t && t.match(/^\+?[0-9-\s]{4,}$/));

case "intlphone":
if ("" === t) return _r_(!0);
return _r_("string" == typeof t && t.match(/^\+?[0-9-\s]{8,}$/));

case "date":
var r, _ = {};
if (_ = n(t, 4), !_) return _r_(!1);
return _.year = a(_.year, new Date().getFullYear()), r = new Date(_.year, _.month - 1, _.day), _r_(r.getFullYear() == _.year && r.getMonth() == _.month - 1 && r.getDate() == _.day);

case "birthdate":
var _, o = this.validate("date", t);
if (!o) return _r_(!1);
if (_ = n(t, 4), !_) return _r_(!1);
return _ = new Date(_.year + (i.minAge ? i.minAge :0), _.month - 1, _.day), _r_(new Date().getTime() > _.getTime());

case "ccdate":
var _, o = this.validate("date", t);
if (!o) return _r_(!1);
if (_ = n(t, 4), _.month += 1, _.day = 0, !_) return _r_(!1);
return _ = new Date(_.year, _.month - 1, _.day), _r_(new Date().getTime() <= _.getTime());

case "password":
return _r_(t.length >= 8);

case "equal":
case "password_confirm":
return _r_(t.length && 2 == t.length && t[0] === t[1]);

case "number":
if ("" === t) return _r_(!0);
return _r_("string" == typeof t && t.match(/^\d+$/));

case "regex":
if ("" === t) return _r_(!0);
if (!i.regex) return _r_(!1);
var s = new RegExp(i.regex, i.regexFlags);
return _r_("string" == typeof t && t.match(s));

case "positive_number":
if (isNaN(parseFloat(t))) return _r_(!1);
return _r_(parseFloat(t) > 0);

default:
throw new Error("data-validation: Invalid validation " + e + ".");
}
_r_();
};
function n(e, t) {
_i_("3bb:6574896f");
var i, n = {};
if (e.day && e.month && e.year) return e.day = +e.day, e.month = +e.month, e.year = +e.year, _r_(e);
if ("string" == typeof e) {
var a = new RegExp("^(d{" + t + ",4})-(d{1,2})-(d{1,2})$");
if (i = e.match(a)) return _r_(!1);
return n.day = +i[3], n.month = +i[2], n.year = +i[1], _r_(n);
}
return _r_(!1);
}
function a(e, t) {
_i_("3bb:a2ce0b11");
var i = 100;
if (e >= i) return _r_(e);
var n = t, a = t % i;
if (e != a) {
var r = Math.floor(t / i) * i;
n = r + e + (e >= a ? 0 :i);
}
return _r_(n);
}
_r_();
}), B.define("read-data-options", function(e, t, i) {
_i_("3bb:b2e7a21d"), i.exports = function(e, t) {
_i_("3bb:9b133c1b");
var i = {};
return e.jquery && (e = e[0]), Object.keys(t).forEach(function(n) {
_i_("3bb:dcce8877");
var a = t[n], r = "data-" + n, _ = null;
if ("function" == typeof a && (a = {
type:a
}), "string" == typeof a.name && (r = "data-" + a.name), !e.attributes[r]) {
if (a.hasOwnProperty("defaultValue")) i[n] = a.defaultValue; else if (a.hasOwnProperty("required")) throw new Error("read-data-options: missing required " + r + " attribute");
return _r_();
}
var _ = e.getAttribute(r);
if (a.type === Boolean) _ = !/^0|false|no|off$/.test(_); else if (a.type === String) _ = _ || a.defaultValue; else {
if (a.type !== Number) throw new Error("data-options: Invalid option type for " + n);
_ = parseFloat(_, 10), isNaN(_) && (_ = a.defaultValue);
}
i[n] = _, _r_();
}), _r_(i);
}, _r_();
}), B.define("keycodes", [], function() {
"use strict";
_i_("3bb:f9eca8dd");
var e = {
backspace:8,
tab:9,
enter:13,
shift:16,
control:17,
alt:18,
escape:27,
space:32,
pageUp:33,
pageDown:34,
end:35,
home:36,
leftArrow:37,
upArrow:38,
rightArrow:39,
downArrow:40,
"delete":46,
navigation:[ 9 ].concat(i(33, 40)),
deletion:[ 8, 46 ],
arrow:i(37, 40),
number:i(48, 57).concat(i(96, 105)),
alphabetic:i(65, 90),
modifier:i(16, 18)
};
e = n(e);
function t(e) {
return _i_("3bb:2984a907"), _r_(e.slice(0, 1).toUpperCase() + e.slice(1));
}
function i(e, t) {
_i_("3bb:83a52ba4");
for (var i = [], n = 0; t - e >= n; n++) i.push(e + n);
return _r_(i);
}
function n(e) {
_i_("3bb:0fefaabc");
var t = 65;
return _r_("abcdefghijklmnopqrstuvwxyz".split("").reduce(function(e, i) {
return _i_("3bb:d3ccc5bc"), e[i] = t++, _r_(e);
}, e));
}
function a(t, i) {
if (_i_("3bb:768b926a"), Array.isArray(e[t]) && -1 !== e[t].indexOf(i)) return _r_(!0);
if (e[t] === i) return _r_(!0);
return _r_(!1);
}
function r(e, t) {
return _i_("3bb:bf671d22"), _r_(a(t, e));
}
function _(t) {
_i_("3bb:ad5c6319");
var i = [];
return Object.keys(e).forEach(function(e) {
_i_("3bb:8fc15c2d"), a(e, t) && i.push(e), _r_();
}), _r_(i);
}
var o = {
getTypes:_,
isKeycodeType:r
};
return Object.keys(e).forEach(function(e) {
_i_("3bb:484ba84e"), o["is" + t(e)] = function(t) {
return _i_("3bb:4209f82c"), _r_(r(t, e));
}, _r_();
}), _r_(o);
}), B.define("flux/dispatcher", function(e, t, i) {
_i_("3bb:96ecafe7");
var n = "ID_";
function a() {
_i_("3bb:0d275497"), this._callbacks = {}, this._isDispatching = !1, this._isHandled = {}, this._isPending = {}, this._lastID = 1, _r_();
}
a.prototype.register = function(e) {
_i_("3bb:466e2a7c");
var t = n + this._lastID++;
return this._callbacks[t] = e, _r_(t);
}, a.prototype.unregister = function(e) {
if (_i_("3bb:25499422"), !this._callbacks[e]) throw Error("Dispatcher.unregister(...): `" + e + "` does not map to a registered callback.");
delete this._callbacks[e], _r_();
}, a.prototype.waitFor = function(e) {
_i_("3bb:697f6a60");
var t;
if (!this._isDispatching) throw Error("Dispatcher.waitFor(...): Must be invoked while dispatching.");
for (var i = 0; i < e.length; i++) {
if (t = e[i], this._isPending[t]) {
if (!this._isHandled[t]) throw Error("Dispatcher.waitFor(...): Circular dependency detected while waiting for `" + t + "`.");
continue;
}
if (!this._callbacks[t]) throw Error("Dispatcher.waitFor(...): `" + t + "` does not map to a registered callback.");
this._invokeCallback(t);
}
_r_();
}, a.prototype.dispatch = function(e) {
if (_i_("3bb:32ec5167"), this._isDispatching) throw Error("Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.");
this._startDispatching(e);
try {
for (var t in this._callbacks) if (this._callbacks.hasOwnProperty(t)) {
if (this._isPending[t]) continue;
this._invokeCallback(t);
}
} finally {
this._stopDispatching();
}
_r_();
}, a.prototype.isDispatching = function() {
return _i_("3bb:3ef27a15"), _r_(this._isDispatching);
}, a.prototype._invokeCallback = function(e) {
_i_("3bb:a56cefcf"), this._isPending[e] = !0, this._callbacks[e](this._pendingPayload), this._isHandled[e] = !0, _r_();
}, a.prototype._startDispatching = function(e) {
_i_("3bb:f024e7d4");
for (var t in this._callbacks) this._callbacks.hasOwnProperty(t) && (this._isPending[t] = !1, this._isHandled[t] = !1);
this._pendingPayload = e, this._isDispatching = !0, _r_();
}, a.prototype._stopDispatching = function() {
_i_("3bb:ffd83fc4"), delete this._pendingPayload, this._isDispatching = !1, _r_();
}, i.exports = a, _r_();
}), /**
@license Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
 */
function() {
_i_("3bb:5a315cfe");
var e, t;
if (e = this.jQuery || window.jQuery || (window.B && B.require ? B.require("jquery") :null), !e) return _r_();
t = e(window), e.fn.stick_in_parent = function(i) {
_i_("3bb:4906fa21");
var n, a, r, _, o, s, l, c, d, b, p, u, h;
for (null == i && (i = {}), h = i.sticky_class, s = i.inner_scrolling, u = i.recalc_every, p = i.parent, d = i.offset_top, c = i.spacer, r = i.bottoming, null == d && (d = 0), null == p && (p = void 0), null == s && (s = !0), null == h && (h = "is_stuck"), n = e(document), null == r && (r = !0), b = function(e) {
_i_("3bb:c587f432");
var t, i, n;
return window.getComputedStyle ? (t = e[0], i = window.getComputedStyle(e[0]), n = parseFloat(i.getPropertyValue("width")) + parseFloat(i.getPropertyValue("margin-left")) + parseFloat(i.getPropertyValue("margin-right")), "border-box" !== i.getPropertyValue("box-sizing") && (n += parseFloat(i.getPropertyValue("border-left-width")) + parseFloat(i.getPropertyValue("border-right-width")) + parseFloat(i.getPropertyValue("padding-left")) + parseFloat(i.getPropertyValue("padding-right"))), _r_(n)) :_r_(e.outerWidth(!0));
}, _ = function(i, a, _, o, l, f, m, M) {
_i_("3bb:c112498d");
var g, v, y, B, w, C, k, N, x, E, T, D;
if (i.data("sticky_kit")) return _r_();
if (i.data("sticky_kit", !0), w = n.height(), k = i.parent(), null != p && (k = k.closest(p)), !k.length) throw "failed to find stick parent";
if (y = !1, g = !1, T = null != c ? c && i.closest(c) :e("<div />"), T && T.css("position", i.css("position")), N = function() {
_i_("3bb:124655f8");
var e, t, r;
if (M) return _r_();
if (w = n.height(), e = parseInt(k.css("border-top-width"), 10), t = parseInt(k.css("padding-top"), 10), a = parseInt(k.css("padding-bottom"), 10), _ = k.offset().top + e + t, o = k.height(), y && (y = !1, g = !1, null == c && (i.insertAfter(T), T.detach()), i.css({
position:"",
top:"",
width:"",
bottom:""
}).removeClass(h), r = !0), l = i.offset().top - (parseInt(i.css("margin-top"), 10) || 0) - d, f = i.outerHeight(!0), m = i.css("float"), T && T.css({
width:b(i),
height:f,
display:i.css("display"),
"vertical-align":i.css("vertical-align"),
"float":m
}), r) return _r_(D());
_r_();
}, N(), f === o) return _r_();
return B = void 0, C = d, E = u, D = function() {
_i_("3bb:87f12db0");
var e, b, p, v, x, D;
if (M) return _r_();
if (p = !1, null != E && (E -= 1, 0 >= E && (E = u, N(), p = !0)), p || n.height() === w || (N(), p = !0), v = t.scrollTop(), null != B && (b = v - B), B = v, y ? (r && (x = v + f + C > o + _, g && !x && (g = !1, i.css({
position:"fixed",
bottom:"",
top:C
}).trigger("sticky_kit:unbottom"))), l > v && (y = !1, C = d, null == c && (("left" === m || "right" === m) && i.insertAfter(T), T.detach()), e = {
position:"",
width:"",
top:""
}, i.css(e).removeClass(h).trigger("sticky_kit:unstick")), s && (D = t.height(), f + d > D && (g || (C -= b, C = Math.max(D - f, C), C = Math.min(d, C), y && i.css({
top:C + "px"
}))))) :v > l && (y = !0, e = {
position:"fixed",
top:C
}, e.width = "border-box" === i.css("box-sizing") ? i.outerWidth() + "px" :i.width() + "px", i.css(e).addClass(h), null == c && (i.after(T), ("left" === m || "right" === m) && T.append(i)), i.trigger("sticky_kit:stick")), y && r && (null == x && (x = v + f + C > o + _), !g && x)) return g = !0, "static" === k.css("position") && k.css({
position:"relative"
}), _r_(i.css({
position:"absolute",
bottom:a,
top:"auto"
}).trigger("sticky_kit:bottom"));
_r_();
}, x = function() {
return _i_("3bb:edf1750f"), N(), _r_(D());
}, v = function() {
if (_i_("3bb:fcbea21a"), M = !0, t.off("touchmove", D), t.off("scroll", D), t.off("resize", x), e(document.body).off("sticky_kit:recalc", x), i.off("sticky_kit:detach", v), i.removeData("sticky_kit"), i.css({
position:"",
bottom:"",
top:"",
width:""
}), k.position("position", ""), y) return null == c && (("left" === m || "right" === m) && i.insertAfter(T), T.remove()), _r_(i.removeClass(h));
_r_();
}, t.on("touchmove", D), t.on("scroll", D), t.on("resize", x), e(document.body).on("sticky_kit:recalc", x), i.on("sticky_kit:detach", v), _r_(setTimeout(D, 0));
}, o = 0, l = this.length; l > o; o++) a = this[o], _(e(a));
return _r_(this);
}, _r_();
}.call(this), B.define("ga-events-tracker", function(e, t, i) {
_i_("3bb:1b52fdbe");
var n = e("ga-tracker"), a = e("promise"), r = e("when/events-view");
function _(e) {
_i_("3bb:a8c56ec0"), this.events[e].forEach(function(t) {
_i_("3bb:41d132f9"), a.all(o.call(this, t.trigger)).then(function() {
_i_("3bb:1b07bce3");
var i = null;
"function" == typeof t.value && (i = t.value()), "number" == typeof t.value && (i = t.value), n.trackEvent(this.categoryName, e, t.label, i), _r_();
}.bind(this)), _r_();
}.bind(this)), _r_();
}
function o(e) {
if (_i_("3bb:9b1908ac"), !Array.isArray(e)) return _r_(o.call(this, [ e ]));
return _r_(e.map(function(e) {
return _i_("3bb:abbafe74"), _r_(new a(function(t) {
if (_i_("3bb:e1a276b2"), "boolean" == typeof e) return e && t(!0), _r_();
var i = e.split(/\s+/), n = i.shift(), a = i.join(" ");
switch (n) {
case "ready":
$(function() {
_i_("3bb:daa0dbee"), t(!0), _r_();
});
break;

case "presence":
$(a).length > 0 && t(!0);
break;

case "view":
r(a, function() {
_i_("3bb:de3992a7"), t(!0), _r_();
});
break;

case "hover":
n = "mouseenter";

case "click":
case "mousedown":
case "mouseup":
case "focus":
case "change":
case "input":
case "submit":
$("body").one(n, a, function() {
_i_("3bb:daa0dbee1"), t(!0), _r_();
});
break;

case "event":
this.emitter.one(a, function(e) {
_i_("3bb:1e65626c"), t(e), _r_();
});
}
_r_();
}.bind(this)));
}.bind(this)));
}
function s(t) {
if (_i_("3bb:ea97b0fc"), !t.categoryName) throw Error("ga-events-tracker: you must define a categoryName");
if (!t.eventsMap) throw Error("ga-events-tracker: you must define an eventsMap");
this.emitter = t.emitter || e("events"), this.events = t.eventsMap, this.categoryName = t.categoryName, Object.keys(this.events).forEach(_.bind(this)), _r_();
}
var l = {};
l.setup = function(e) {
return _i_("3bb:33c47c48"), _r_(new s(e));
}, i.exports = l, _r_();
}), B.define("utils/device", function(e, t, i) {
"use strict";
_i_("3bb:76f25c22");
var n = navigator.userAgent, a = /(iPad|iPhone)\b/.test(n), r = -1 !== n.indexOf("Android");
i.exports = {
isOrientationLandscape:function() {
_i_("3bb:c75d0a9c");
var e, t, i, n = Math.abs(window.orientation), _ = n || 0 === n;
if (_ && a) return _r_(90 === n);
if ("matchMedia" in window) for (e = [ "(min-aspect-ratio: 4/3)", "(orientation:landscape)" ]; t = e.shift(); ) if (i = window.matchMedia(t), t == i.media) return _r_(i.matches);
return _r_(_ && r ? 90 !== n :!1);
}
}, _r_();
}), booking.define("component/accordion", function(e, t, i) {
_i_("3bb:27a9f8af");
var n = {
container:".accordion__item, .js-accordion-toggle",
trigger:".js-accordion-trigger",
content:".accordion__item__content, .js-accordion-content"
}, a = {
expanded:"accordion__item--is-expanded",
disabled:"accordion__item--is-disabled",
active:"accordion__item--is-active"
}, r = {
duration:150,
animate:!0,
active:0,
expandActive:!0,
collapsible:!1,
enableMultiple:!1,
easing:"swing"
}, _ = {
beforeClose:"accordion:beforeClose",
afterClose:"accordion:afterClose",
beforeOpen:"accordion:beforeOpen",
afterOpen:"accordion:afterOpen"
}, o = [ "click", "tap" ], s = B.require("component"), l = B.require("events");
i.exports = s.extend({
clickHandler:function(e) {
_i_("3bb:374b1357"), this.toggle(e), _r_();
},
toggle:function(e) {
_i_("3bb:95aebc65");
var t = this, i = t.$current, r = t.options.animate ? t.options.duration :0, o = t.options.easing, s = t.options.collapsible, c = t.options.enableMultiple, d = t.$containers.filter("." + a.expanded + ", ." + a.active);
if (e.is(i) && e.hasClass(a.expanded) && !s) return _r_();
if (c || d.each(function() {
_i_("3bb:7f2422ed"), l.trigger(_.beforeClose, $(this)), $(this).children(n.content).stop().slideUp(r, o, function() {
_i_("3bb:f232a663"), $(this).removeClass(a.expanded + " " + a.active), l.trigger(_.afterClose, $(this)), t.$current = null, _r_();
}.bind(this)), _r_();
}), e.hasClass(a.expanded) && c) return l.trigger(_.beforeClose, e), e.children(n.content).stop().slideUp(r, o, function() {
_i_("3bb:67286ff6"), e.removeClass(a.expanded + " " + a.active), l.trigger(_.afterClose, e), t.$current = null, _r_();
}), _r_();
(!e.is(i) || c) && (l.trigger(_.beforeOpen, e), e.children(n.content).stop().slideDown(r, o, function() {
_i_("3bb:aa33a949"), e.addClass(a.expanded), t.$current = e, l.trigger(_.afterOpen, t.$current), _r_();
})), _r_();
},
bindEvents:function() {
_i_("3bb:9450e010");
var e = this;
this.$containers.on(o.join(" "), function(t) {
_i_("3bb:7bbdcb9a");
var i = $(this);
if (!$(t.target).closest(n.trigger).length) return _r_();
if (i.hasClass(a.disabled)) return _r_();
e.clickHandler.call(e, i), _r_();
}), this.$active.length && (this.options.active = this.$containers.index(this.$active)), this.options && void 0 != this.options.active && 1 == this.options.expandActive && this.$containers.eq(this.options.active).trigger("click"), _r_();
},
setDataOptions:function() {
_i_("3bb:a9b65784");
var e = this.$el.data("accordion-settings");
"undefined" != e && "object" == typeof e && (this.options = $.extend({}, r, e)), this.options.enableMultiple && (this.options.collapsible = !0), _r_();
},
setup:function() {
_i_("3bb:fcad1209"), this.$wrapper = this.$el, this.$containers = this.$wrapper.children(n.container);
var e = this.$containers.filter("." + a.expanded);
if (this.$current = e.length ? e :null, this.$active = this.$containers.filter("." + a.active), !this.$containers.length) return _r_();
this.setDataOptions(), this.bindEvents(), _r_();
},
init:function() {
_i_("3bb:e7e93951"), this.setup(), _r_();
}
}), _r_();
}), B.define("reducer-store", function(e, t, i) {
_i_("3bb:3e56e5a5");
function n(e, t) {
_i_("3bb:d94ee19a"), this.reduce = e, this.state = t, this.subscribers = [], _r_();
}
n.prototype.subscribe = function(e) {
_i_("3bb:3594b703"), this.subscribers.push(e), _r_();
}, n.prototype.dispatch = function(e) {
_i_("3bb:13bfdcf1");
var t = this.state, i = this.state = this.reduce(this.state, e);
this.subscribers.forEach(function(n) {
_i_("3bb:39d55cc9"), n(i, t, e), _r_();
}), _r_();
}, n.prototype.getState = function() {
return _i_("3bb:74398da2"), _r_(this.state);
}, n.prototype.use = function(e) {
_i_("3bb:ffb36cbb");
var t = this;
return this.dispatch = e.map(function(e) {
return _i_("3bb:2daca007"), _r_(e.bind(null, t));
}).reduceRight(function(e, t) {
return _i_("3bb:62771d3a"), _r_(t.bind(null, e));
}, this.dispatch.bind(this)), _r_(this);
}, i.exports = n, _r_();
}), B.define("component/autocomplete", function(e, t, i) {
_i_("3bb:da1554e5");
var n = e("component/autocomplete-core");
i.exports = n.extend({
init:function() {
_i_("3bb:99886425"), n.prototype.init.apply(this, arguments), this.firstItemIndex = -1, this.loadItems(), _r_();
},
loadItems:function() {
_i_("3bb:5e7fe492"), this.items = [], this.$items = this.$list.children(), this.$items.each(function(e, t) {
_i_("3bb:1aef962e");
var i = $(t), n = i.text(), a = i.attr("data-value") || n;
this.items.push({
value:a,
valueLowerCase:a.toLowerCase(),
hidden:!1
}), i.data("i", this.items.length - 1), _r_();
}.bind(this)), _r_();
},
getListLength:function() {
return _i_("3bb:4970b9b7"), _r_(this.items.filter(function(e) {
return _i_("3bb:7a841d6f"), _r_(!e.hidden);
}).length);
},
getListFirstIndex:function() {
return _i_("3bb:458fbaae"), _r_(this.firstItemIndex);
},
autocomplete:function() {
_i_("3bb:7d0d9b46");
for (var e = this.input.value.toLowerCase().split(/\s+/g), t = !1, i = 0, a = this.items.length; a > i; i++) {
this.items[i].hidden = !1;
for (var r = 0, _ = e.length; _ > r; r++) if (e[r] && -1 == this.items[i].valueLowerCase.indexOf(e[r])) {
this.items[i].hidden = !0;
break;
}
this.items[i].hidden || t || (t = !0, this.firstItemIndex = i), this.$items.eq(i).toggleClass("-hidden", this.items[i].hidden);
}
n.prototype.autocomplete.apply(this, arguments), _r_();
},
reset:function() {
_i_("3bb:796a44ce"), this.firstItemIndex = -1, n.prototype.reset.apply(this, arguments), _r_();
}
}), _r_();
}), B.define("component/autocomplete-core", function(e, t, i) {
_i_("3bb:7a54505f");
var n = e("jquery"), a = e("component"), r = e("read-data-options");
i.exports = a.extend({
init:function() {
_i_("3bb:666b445b"), this.highlightedIndex = -1, this.isDeletion = !1, this.items = [], this.keyDownCount = 0, this.keysDown = {}, this.listHeight = 0, this.listVisible = !1, this.preventBlurClose = !1, this.selectedIndex = -1, this.selectedValue = null, this.valueBuffer = null, this.clickOutController = e("click-out"), this.clickOutMonitorId = null, this.$input = this.$el.find('[data-input=""]'), this.input = this.$input[0], this.$list = this.$el.find('[data-list=""]'), this.$items = this.$list.children(), this.optionsSpec = this.optionsSpec || {}, this.optionsSpec = n.extend(this.optionsSpec, {
openFocus:{
name:"open-focus",
type:Boolean
},
highlightFirst:{
name:"highlight-first",
type:Boolean
},
forceHighlight:{
name:"highlight-force",
type:Boolean
},
focusOnItemSelect:{
name:"focus-on-item-select",
type:Boolean
}
}), this.options = r(this.$el, this.optionsSpec), this.supportsInputEvent = this.input && "oninput" in this.input, this.addInputEventListeners(), this.addListEventListeners(), this.addItemsEventListeners(), this.calculateListHeight(), this.$input.attr("autocomplete", "off"), _r_();
},
addInputEventListeners:function() {
_i_("3bb:8c22dd2d");
var e = this.$input.component("keyboard");
e.on("keydown:Escape", this.inputEscape.bind(this)), e.on("keydown:ArrowUp", this.inputArrowUp.bind(this)), e.on("keydown:ArrowDown", this.inputArrowDown.bind(this)), e.on("keydown:Enter", this.inputEnter.bind(this)), e.on("keydown:Tab", this.inputTab.bind(this)), this.$input.on("click", this.inputClick.bind(this)), this.$input.focus(this.inputFocus.bind(this)), this.$input.blur(this.inputBlur.bind(this)), this.$input.keydown(this.inputKeyDown.bind(this)), this.$input.bind("input", this.inputInput.bind(this)), this.$input.keyup(this.inputKeyUp.bind(this)), _r_();
},
addListEventListeners:function() {
_i_("3bb:4ad6c428"), this.$list.mousedown(this.listMouseDown.bind(this)), this.$list.mouseup(this.listMouseUp.bind(this)), this.$list.on("click", '[data-list-item=""]', this.listItemClick.bind(this)), _r_();
},
addItemsEventListeners:function() {
_i_("3bb:6105a1b9"), this.$items.click(this.listItemClick.bind(this)), _r_();
},
addClickOutEventListener:function() {
_i_("3bb:5a26544b"), this.clickOutMonitorId = this.clickOutController.addMonitor(this.el, this.clickOut.bind(this)), _r_();
},
removeClickOutEventListener:function() {
_i_("3bb:ab36beb4"), this.clickOutController.removeMonitor(this.clickOutMonitorId), _r_();
},
calculateListHeight:function() {
_i_("3bb:a06d8252"), this.listHeight = this.$list.outerHeight(), _r_();
},
inputClick:function(e) {},
inputFocus:function(e) {
_i_("3bb:5cab6d89"), this.options.openFocus && (this.listShow(), this.autocomplete({
fromFocus:!0
})), _r_();
},
inputBlur:function(e) {
_i_("3bb:7b0d251b"), setTimeout(this.inputBlurSync.bind(this), 4), _r_();
},
inputBlurSync:function() {
_i_("3bb:3564bcc4"), !this.preventBlurClose && this.listVisible && (this.highlightReset(), this.reset()), _r_();
},
inputKeyDown:function(e) {
_i_("3bb:7eedd7b4");
var t = e.ctrlKey || e.metaKey || e.shiftKey || e.altKey, i = 8 == e.which || 46 == e.which;
this.isDeletion = i, this.taintedKeyDown = t, _r_();
},
inputInput:function(e) {
_i_("3bb:b3797752"), this.autocomplete(), _r_();
},
inputKeyUp:function(e) {
_i_("3bb:701df07a");
var t = this.taintedKeyDown || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.which >= 16 && e.which <= 18 || 91 == e.which, i = 32 == e.which || e.which >= 48, n = e.which >= 37 && e.which <= 40;
t || ((n || i) && this.listShow(), !this.isDeletion && !i || this.supportsInputEvent || this.autocomplete(), i && this.keyDownCount++), _r_();
},
inputEscape:function(e) {
_i_("3bb:21af7760"), this.listVisible && (e.originalEvent.preventDefault(), this.highlightReset(), this.reset()), _r_();
},
inputArrowUp:function(e) {
_i_("3bb:330b32cc"), e.originalEvent.preventDefault(), this.listVisible ? this.highlightPrevious() :this.listShow(), _r_();
},
inputArrowDown:function(e) {
_i_("3bb:8475bbad"), e.originalEvent.preventDefault(), this.listVisible ? this.highlightNext() :this.listShow(), _r_();
},
inputEnter:function(e) {
_i_("3bb:8faecce2"), this.listVisible && -1 != this.highlightedIndex && (e.originalEvent.preventDefault(), this.choose(this.highlightedIndex)), _r_();
},
inputTab:function(e) {
_i_("3bb:d6bb0389"), this.inputEnter.apply(this, arguments), _r_();
},
listItemClick:function(e) {
_i_("3bb:3a576f02");
var t = n(e.currentTarget);
this.options.focusOnItemSelect && this.input.focus(), this.choose(t.data("i")), _r_();
},
listMouseDown:function(e) {
_i_("3bb:00c6d228"), this.preventBlurClose = !0, _r_();
},
listMouseUp:function(e) {
_i_("3bb:5b7558ea"), this.preventBlurClose = !1, _r_();
},
clickOut:function() {
_i_("3bb:47c173d2"), this.listVisible && (this.highlightReset(), this.reset()), _r_();
},
setValue:function(e) {
_i_("3bb:14cae509"), this.input.value = e, _r_();
},
listShow:function() {
_i_("3bb:d93e12e8"), this.listVisible || this._loading || (this.$list.addClass("-visible"), this.listVisible = !0, this.addClickOutEventListener(), this.$list[0].scrollTop = 1, setTimeout(function() {
_i_("3bb:28fd9fe6"), this.$list[0].scrollTop = 0, _r_();
}.bind(this), 10)), _r_();
},
listHide:function() {
_i_("3bb:9c2d908d"), this.listVisible && (this.$list.removeClass("-visible"), this.resetFlags(), this.removeClickOutEventListener()), _r_();
},
highlightPrevious:function() {
_i_("3bb:de4395ef");
var e = this.highlightedIndex;
do -1 == e ? e = this.items.length - 1 :e--; while (-1 != e && this.items[e].hidden);
this.highlightFromNavigation(e), _r_();
},
highlightNext:function() {
_i_("3bb:fa949528");
var e = this.highlightedIndex;
do e == this.items.length - 1 ? e = -1 :e++; while (-1 != e && this.items[e].hidden);
this.highlightFromNavigation(e), _r_();
},
highlightFromNavigation:function(e, t, i) {
if (_i_("3bb:d9f82d1d"), (-1 == this.highlightedIndex || t) && (this.valueBuffer = this.input.value), -1 == e) this.highlightReset({
preserveFocus:!0
}); else if (this.supportsInputEvent) if (this.valueBuffer && 0 == this.items[e].valueLowerCase.indexOf(this.valueBuffer.toLowerCase())) {
var n = this.valueBuffer.length, a = this.items[e].value.length, r = this.valueBuffer + this.items[e].value.substring(n);
if (this.input.value == r || i || this.setValue(r), this.input.setSelectionRange) this.input.setSelectionRange(a, a); else if (this.input.createTextRange) {
var _ = this.input.createTextRange();
_.collapse(!0), _.moveStart("character", n), _.moveEnd("character", a), _.select();
} else void 0 !== this.input.selectionStart && (this.input.selectionStart = n, this.input.selectionEnd = a);
} else i || (this.setValue(this.items[e].value), this.fixIEFocusLoss());
this.highlight(e), _r_();
},
highlightFromAutocomplete:function() {
_i_("3bb:082bdb05");
var e = this.input.value, t = this.getListFirstIndex();
-1 !== t && this.options.highlightFirst && !this.isDeletion && e && 0 === this.items[t].valueLowerCase.indexOf(e.toLowerCase()) || this.options.forceHighlight ? this.highlightFromNavigation(t, !0) :this.highlight(-1), _r_();
},
highlight:function(e) {
_i_("3bb:d5ddd8b9"), this.listShow(), -1 != this.highlightedIndex && this.$items.eq(this.highlightedIndex).removeClass("-highlighted"), -1 != e && this.$items.eq(e).addClass("-highlighted"), this.highlightedIndex = e, this.highlightScroll(), _r_();
},
highlightReset:function(e) {
_i_("3bb:f5adc469"), e = e || {}, null === this.valueBuffer || e.preserveInputValue || (this.setValue(this.valueBuffer), e.preserveFocus && this.fixIEFocusLoss()), -1 != this.highlightedIndex && this.$items.eq(this.highlightedIndex).removeClass("-highlighted"), this.highlightedIndex = -1, _r_();
},
highlightScroll:function() {
_i_("3bb:23869224");
var e = !1, t = this.$list[0].scrollTop;
if (-1 != this.highlightedIndex) {
var i = this.$items.eq(this.highlightedIndex), n = (1 == i.length && i.position().top) + t, a = i.outerHeight();
n + a > this.listHeight + t ? e = n + a - this.listHeight :t > n && (e = n);
} else e = 0;
e !== !1 && e != t && (this.$list[0].scrollTop = e), _r_();
},
getListLength:function() {
return _i_("3bb:80a0a6d3"), _r_(this.items.length);
},
getListFirstIndex:function() {
return _i_("3bb:3e3fdbb2"), _r_(0 === this.items.length ? -1 :0);
},
autocomplete:function() {
_i_("3bb:ee533fba"), this.postAutocomplete(), _r_();
},
postAutocomplete:function() {
_i_("3bb:64423811"), this.listShow(), this.calculateListHeight(), this.highlightFromAutocomplete(), _r_();
},
choose:function(e) {
_i_("3bb:38daecdd"), this.selectedIndex = e, B.et.track("PVbOMFcUNKe") > 1 ? this.selectedValue = this.items[e].valueWithPropertyType ? this.items[e].valueWithPropertyType :this.items[e].value :this.selectedValue = this.items[e].value, this.setValue(this.selectedValue), this.reset(), _r_();
},
reset:function(e) {
_i_("3bb:f52a182f"), e = e || {}, -1 != this.highlightedIndex && this.$items.eq(this.highlightedIndex).removeClass("-highlighted"), this.listHide(), e.hard && (this.resetFlags(), this.selectedIndex = -1, this.selectedValue = null, this.setValue("")), _r_();
},
resetFlags:function() {
_i_("3bb:cf298bfd"), this.highlightedIndex = -1, this.isDeletion = !1, this.keyDownCount = 0, this.keysDown = {}, this.listVisible = !1, this.preventBlurClose = !1, this.valueBuffer = null, _r_();
},
fixIEFocusLoss:function() {
if (_i_("3bb:ad6c1d0b"), this.input.createTextRange) {
var e = this.input.createTextRange();
e.moveStart("character", this.input.value.length), e.collapse(), e.select();
}
_r_();
}
}), _r_();
}), B.define("component/checkin-checkout-selector", function(e, t, i) {
_i_("3bb:7cf1e12b");
var n = e("component"), a = e("event-emitter"), r = 864e5;
i.exports = n.extend({
init:function() {
_i_("3bb:07de20c5"), a.extend(this), this._findCheckinCheckoutSelectors(), this.interval = this.getInterval(), this._attachEvents(), this._updateCalendarsRanges(), _r_();
},
_onCalendarOpen:function(e) {
_i_("3bb:4abcb79f");
var t = e.id;
t === this.checkinSelector.getCalendar().id() ? this.checkoutSelector.getCalendarElement().trigger("hide") :this.checkinSelector.getCalendarElement().trigger("hide"), _r_();
},
_onCheckinDateChange:function(e) {
_i_("3bb:3e1b86b6");
var t, i = this.interval || 1, n = this._getTodayDate();
this.checkinSelector.getFullDate().raw.getTime() < n.getTime() && (this.checkinSelector.setDate(n.getFullYear(), n.getMonth(), n.getDate()), this.interval = this.getInterval()), this.isCheckinCheckoutValid() || (t = this._getDateAfterInterval(this.checkinSelector.getFullDate().raw, i), this.checkoutSelector.setDate(t.getFullYear(), t.getMonth(), t.getDate())), this.interval = this.getInterval(), this._updateCalendarsRanges(), this.trigger("dates-changed", {
checkin:this.checkinSelector.getFullDate(),
checkout:this.checkoutSelector.getFullDate()
}), _r_();
},
_onCheckoutDateChange:function(e) {
_i_("3bb:39dbaeed");
var t, i, n = this.interval || 1, a = this._getTodayDate();
this.checkoutSelector.getFullDate().raw.getTime() <= a.getTime() && (i = this._getDateAfterInterval(a, 1), this.checkoutSelector.setDate(i.getFullYear(), i.getMonth(), i.getDate()), this.interval = this.getInterval()), this.isCheckinCheckoutValid() || (t = this._getDateBeforeInterval(this.checkoutSelector.getFullDate().raw, n), t.getTime() < a.getTime() && (t = a), this.checkinSelector.setDate(t.getFullYear(), t.getMonth(), t.getDate())), this.interval = this.getInterval(), this._updateCalendarsRanges(), this.trigger("dates-changed", {
checkin:this.checkinSelector.getFullDate(),
checkout:this.checkoutSelector.getFullDate()
}), _r_();
},
_attachEvents:function() {
_i_("3bb:d2cfd802"), this.checkinSelector.on("calendar-open", this._onCalendarOpen.bind(this)), this.checkoutSelector.on("calendar-open", this._onCalendarOpen.bind(this)), this.checkinSelector.on("date-change", this._onCheckinDateChange.bind(this)), this.checkoutSelector.on("date-change", this._onCheckoutDateChange.bind(this)), _r_();
},
_findCheckinCheckoutSelectors:function() {
_i_("3bb:8030861c"), this.checkinSelector = this.$el.find("[data-checkin-selector='']").component("date-selector"), this.checkoutSelector = this.$el.find("[data-checkout-selector='']").component("date-selector"), _r_();
},
_getDateAfterInterval:function(e, t) {
return _i_("3bb:aeb7395b"), _r_(new Date(e.getTime() + (t * r - 60 * e.getTimezoneOffset() * 1e3)));
},
_getDateBeforeInterval:function(e, t) {
return _i_("3bb:6d465de1"), _r_(new Date(e.getTime() - (t * r + 60 * e.getTimezoneOffset() * 1e3)));
},
_getTodayDate:function() {
_i_("3bb:f39e8d4a");
var e = new Date();
return _r_(new Date(e.getFullYear(), e.getMonth(), e.getDate()));
},
_updateCalendarsRanges:function() {
_i_("3bb:ccce968d");
var e = this.checkinSelector.getCalendarElement(), t = this.checkoutSelector.getCalendarElement(), i = this.checkinSelector.getFullDate(), n = this.checkoutSelector.getFullDate();
e && e.trigger("rangeSelected", {
startValue:i,
endValue:n
}), t && t.trigger("rangeSelected", {
startValue:i,
endValue:n
}), _r_();
},
isCheckinCheckoutValid:function() {
return _i_("3bb:52585b7f"), _r_(this.getInterval() > 0);
},
getInterval:function() {
_i_("3bb:09d315fa");
function e(e) {
return _i_("3bb:1b0849c4"), _r_(new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), 0, 0, 0, 0)));
}
var t = e(this.checkinSelector.getFullDate().raw), i = e(this.checkoutSelector.getFullDate().raw);
return _r_(parseInt((i - t) / r, 10));
},
getCheckinSelector:function() {
return _i_("3bb:9f9c7e89"), _r_(this.checkinSelector);
},
getCheckoutSelector:function() {
return _i_("3bb:e89c9c09"), _r_(this.checkoutSelector);
},
getDateRange:function() {
return _i_("3bb:110aa2e4"), _r_({
checkin:this.checkinSelector.getFullDate().raw,
checkout:this.checkoutSelector.getFullDate().raw
});
},
getDateObjectsRange:function() {
return _i_("3bb:051507dd"), _r_({
checkin:this.checkinSelector.getFullDate(),
checkout:this.checkoutSelector.getFullDate()
});
},
setDateRange:function(e, t) {
_i_("3bb:eb5ac15b"), this.checkinSelector.setDate(e.getFullYear(), e.getMonth(), e.getDate()), this.checkinSelector.broadcastDateChange(), this.checkoutSelector.setDate(t.getFullYear(), t.getMonth(), t.getDate()), this.checkoutSelector.broadcastDateChange(), _r_();
}
}), _r_();
}), B.define("component/date-selector", function(e, t, i) {
_i_("3bb:61b2fef2");
var n = e("jquery"), a = e("component"), r = e("event-emitter"), _ = e("formatting/date"), o = B.env.b_simple_weekdays_for_js.slice(0), s = o.slice(0);
s.unshift(s.pop());
var l = B.env.b_short_months, c = B.env.sunday_first, d = B.env.b_lang;
i.exports = a.extend({
init:function() {
_i_("3bb:3a6159c0"), r.extend(this);
var e = this.$el.find("[data-dateselector-calendar='']");
this.daySelect = this.$el.find("[data-dateselector-day='']"), this.monthYearSelect = this.$el.find("[data-dateselector-monthyear='']"), this.dateLabel = this.$el.find("[data-dateselector-label='']"), this.dateLabel && (this.dateFormat = this.dateLabel.data("date-format") || "date_with_year"), this.monthSelect = this.$el.find("[data-dateselector-month='']"), this.yearSelect = this.$el.find("[data-dateselector-year='']"), this.showWeekDays = !this.$el.data("no-weekdays"), this.$el.data("init-set-day-select") && this._updateDaySelect(this.getYear(), this.getMonth()), this.calendar = e.length ? this._initCalendar(e) :null, this._attachEvents(), this.$el.data("no-init-change-trigger") || this.monthYearSelect.trigger("change"), _r_();
},
_onMonthYearSelectChange:function() {
_i_("3bb:15614789");
var e = this.getDay(), t = this.getMonth(), i = this.getYear();
e = this._updateDaySelect(i, t), this.calendar && this._setCalendarDate(i, t, e), this.dateLabel.length > 0 && this._updateDateLabel(i, t, e), this.trigger("date-change", this._buildDateObject(i, t, e)), _r_();
},
_onDaySelectChange:function(e) {
_i_("3bb:8e1dcaba");
var t = this.getDay(), i = this.getMonth(), n = this.getYear();
this.calendar && this._setCalendarDate(n, i, t), this.dateLabel.length > 0 && this._updateDateLabel(n, i, t), this.trigger("date-change", this._buildDateObject(n, i, t)), _r_();
},
_onCalendarDateSelected:function(e, t, i) {
_i_("3bb:0747b6ab");
var n = t.getYear(), a = t.getMonth(), r = t.getDate();
this._setSelectsDate(n, a, r), this.dateLabel.length > 0 && this._updateDateLabel(n, a, r), this.trigger("calendar-date-selected"), this.trigger("date-change", this._buildDateObject(n, a, r)), _r_();
},
_onCalendarOpened:function(e, t) {
_i_("3bb:4dfe9ef3");
var i = this.calendar.data("calendar2");
i && t.id === i.id() && this.trigger("calendar-open", t), _r_();
},
_attachEvents:function() {
_i_("3bb:372224d7"), this.monthYearSelect.bind("change", n.proxy(this._onMonthYearSelectChange, this)), this.daySelect.bind("change", n.proxy(this._onDaySelectChange, this)), this.monthSelect.bind("change", n.proxy(this._onMonthYearSelectChange, this)), this.yearSelect.bind("change", n.proxy(this._onMonthYearSelectChange, this)), _r_();
},
_initCalendar:function(e) {
if (_i_("3bb:80320439"), !n.fn.calendar2) return _r_(null);
var t = 1 === B.env.b_is_tablet ? 400 :261;
B.eventEmitter.bind("CALENDAR:opened", n.proxy(this._onCalendarOpened, this));
var i = booking.calendar2.defaults.startDate, a = new Date(i.getFullYear() + 1, i.getMonth() + 1, 0);
return B.env.b_search_max_months && (a = new Date(i.getFullYear(), i.getMonth() + B.env.b_search_max_months, 0)), _r_(n(e).calendar2({
dayNames:c ? s :o,
sundayFirst:c,
monthNames:l,
endDate:a,
defaultDate:this.getFullDate(),
onDateSelected:n.proxy(this._onCalendarDateSelected, this),
direction:B.env.rtl ? "rtl" :"ltr",
closeButton:!0,
monthWidth:t,
arrow:!!this._showArrow,
monthTitle:function(e, t) {
if (_i_("3bb:61b9cfda"), B.env.b_year_months[e + "-" + (t + 1)]) return _r_(B.env.b_year_months[e + "-" + (t + 1)].name);
_r_();
}
}));
},
_setCalendarDate:function(e, t, i) {
_i_("3bb:e6993b87"), this.calendar.trigger("dateSelected", {
value:this._buildDateObject(e, t, i)
}), _r_();
},
_setSelectsDate:function(e, t, i) {
_i_("3bb:3453ba48"), this.monthYearSelect.val(e + "-" + (t + 1)), this._updateDaySelect(e, t), this.daySelect.val(i), _r_();
},
_updateDateLabel:function(e, t, i) {
_i_("3bb:2cee4cea");
var n = _.format({
year:e,
month:t,
day:i
}, this.dateFormat);
this.dateLabel.html(n), _r_();
},
_buildDateObject:function(e, t, i) {
return _i_("3bb:6ceb9593"), _r_({
date:i,
day:i,
month:t,
year:e,
string:e + "-" + (t + 1) + "-" + i,
raw:new Date(e, t, i)
});
},
_updateDaySelect:function(e, t) {
_i_("3bb:cb7f2cff");
var i, n, a = this.getDay();
if (isNaN(t) && (t = 0), this.daySelect.html(this._buildDayOptionsForMonthYear(e, t)), isNaN(a)) return _r_(NaN);
return i = this.daySelect.find("[value='" + a + "']"), n = i.length ? a :this.getDaysInMonth(e, t), this.daySelect.val(n), _r_(n);
},
_buildDayOptionsForMonthYear:function(e, t) {
_i_("3bb:90c39e7b");
var i, n = new Date(e, t, 1), a = n.getDay(), r = this.getDaysInMonth(e, t), _ = [], o = this.showWeekDays;
this.daySelect.find("option:first").val() || _.push("<option></option>");
for (var l = 1; r >= l; l++) i = o ? "ja" === d || "zh" === d || "ko" === d || "hu" === d ? l + " " + s[a] :s[a] + " " + l :l, _.push("<option value='" + l + "'>" + i + "</option>"), a = 6 === a ? 0 :a + 1;
return _r_(_.join(""));
},
getDaysInMonth:function(e, t) {
switch (_i_("3bb:d55c7a29"), e = parseInt(e, 10), t) {
case 1:
return _r_(e % 4 === 0 && e % 100 !== 0 || e % 400 === 0 ? 29 :28);

case 0:
case 2:
case 4:
case 6:
case 7:
case 9:
case 11:
return _r_(31);

case 3:
case 5:
case 8:
case 10:
return _r_(30);
}
_r_();
},
getYear:function() {
if (_i_("3bb:74ec9923"), this.yearSelect.length) return _r_(parseInt(this.yearSelect.val() || this.yearSelect.find("option[selected]").val(), 10));
return _r_(parseInt((this.monthYearSelect.val() || this.monthYearSelect.find("option[selected]").val()).split("-")[0], 10));
},
getMonth:function() {
if (_i_("3bb:5bd64f5c"), this.monthSelect.length) return _r_(parseInt(this.monthSelect.val() || this.monthSelect.find("option[selected]").val(), 10) - 1);
return _r_(parseInt((this.monthYearSelect.val() || this.monthYearSelect.find("option[selected]").val()).split("-")[1], 10) - 1);
},
getDay:function() {
return _i_("3bb:8017407e"), _r_(parseInt(this.daySelect.val() || this.daySelect.find("option[selected]").val(), 10));
},
getFullDate:function() {
_i_("3bb:b9b4cc77");
var e = this.getDay(), t = this.getMonth(), i = this.getYear();
return _r_(this._buildDateObject(i, t, e));
},
getCalendarElement:function() {
return _i_("3bb:48dee79a"), _r_(this.calendar);
},
getCalendar:function() {
if (_i_("3bb:2fa5c819"), !this.calendar) return _r_(null);
return _r_(this.calendar.data("calendar2"));
},
setDate:function(e, t, i) {
_i_("3bb:13bf7376"), this._setSelectsDate(e, t, i), this.calendar && this._setCalendarDate(e, t, i), this.dateLabel.length > 0 && this._updateDateLabel(e, t, i), _r_();
},
broadcastDateChange:function() {
_i_("3bb:c3d24cc9");
var e = this.getDay(), t = this.getMonth(), i = this.getYear();
this.trigger("date-change", this._buildDateObject(i, t, e)), _r_();
}
}), _r_();
}), B.define("component/core/input-placeholder", function(e, t, i) {
"use strict";
_i_("3bb:99bf1e6c");
var n = e("component"), a = e("read-data-options");
return _r_(n.extend({
init:function() {
if (_i_("3bb:f4a4f5e4"), this.browserSupported()) return _r_();
this.options = a(this.$el, {
placeholderClass:{
name:"placeholder-class",
type:String
},
placeholderColor:{
name:"placeholder-color",
type:String,
defaultValue:"#7C90A6"
}
});
var e = "input, textarea", t = this.$el.find(e);
this.$el.is(e) && (t = t.add(this.$el)), t.filter(function(e, t) {
return _i_("3bb:10b8c9bc"), _r_(!!$(t).attr("placeholder"));
}).each(function(e, t) {
_i_("3bb:bdb24f8f"), this.setupPlaceholder($(t)), _r_();
}.bind(this)), _r_();
},
browserSupported:function() {
_i_("3bb:90563039");
var e = $('input[type="text"]')[0] || $('<input type="text">')[0];
return _r_(!!("placeholder" in e));
},
setupPlaceholder:function(e) {
_i_("3bb:69f56982");
var t = $("<label />").text(e.attr("placeholder")).css({
width:e.width() + "px",
height:e.height() + "px",
paddingTop:e.css("padding-top"),
paddingLeft:e.css("padding-left"),
paddingRight:e.css("padding-right"),
fontFamily:e.css("font-family"),
fontSize:e.css("font-size"),
color:this.options.placeholderColor,
overflow:"hidden",
cursor:"text",
position:"absolute"
});
this.options.placeholderClass && t.addClass(this.options.placeholderClass), t.insertBefore(e), t.click(function() {
_i_("3bb:9e273151"), e.focus(), _r_();
}), e.focus(function() {
_i_("3bb:5c6a8b0c"), t.hide(), _r_();
}).blur(function() {
_i_("3bb:ee094ca9"), t[e.val().length ? "hide" :"show"](), _r_();
}), e.get(0) === document.activeElement ? e.triggerHandler("focus") :e.triggerHandler("blur"), _r_();
}
}));
}), B.define("component/input-limited", function(e, t, i) {
_i_("3bb:a1b88359");
var n = e("component"), a = e("keycodes"), r = {};
r._attachEvents = function(e) {
_i_("3bb:8a9d0467"), this.$el.on("keydown", this._onFieldKeydown.bind(this)).on("paste", this._onFieldPaste.bind(this)), _r_();
}, r._isAllowedType = function(e) {
return _i_("3bb:2e7bc064"), _r_(-1 !== this.allowedTypes.indexOf(e));
}, r._onFieldKeydown = function(e) {
_i_("3bb:880a18f4");
var t = e.which;
if (a.isNavigation(t) || a.isDeletion(t) || a.isTab(t) || a.isModifier(t)) return _r_(!0);
if (a.isC(t) && (e.ctrlKey || e.metaKey)) return _r_(!0);
if (a.isX(t) && (e.ctrlKey || e.metaKey)) return _r_(!0);
if (a.isV(t) && (e.ctrlKey || e.metaKey)) return _r_(!0);
if (this._isAllowedType("space") && a.isSpace(t)) return _r_(!0);
if (this._isAllowedType("number") && a.isNumber(t) && !e.shiftKey && !e.altKey) return _r_(!0);
if (this._isAllowedType("alphabetic") && a.isAlphabetic(t)) return _r_(!0);
e.preventDefault(), _r_();
}, r._onFieldPaste = function(e) {
_i_("3bb:91dccd64"), setTimeout(function() {
_i_("3bb:ecb779ff");
var e = this.$el.val();
e = e.replace(/[^\sA-Za-z0-9]/g, ""), this._isAllowedType("number") || (e = e.replace(/\d+/g, "")), this._isAllowedType("space") || (e = e.replace(/\s+/g, "")), this._isAllowedType("alphabetic") || (e = e.replace(/[A-Za-z]+/g, "")), this.$el.val(e), _r_();
}.bind(this), 0), _r_();
}, r.init = function() {
if (_i_("3bb:14c32e4a"), this.allowedTypes = this.$el.data("input-allowed-type") && this.$el.data("input-allowed-type").trim().split(/\s+/g), !this.allowedTypes || 0 === this.allowedTypes.length) return _r_();
this._attachEvents(), _r_();
}, i.exports = n.extend(r), _r_();
}), B.define("component/keyboard", function(e, t, i) {
_i_("3bb:6d533b75");
var n = e("component"), a = e("event-emitter"), r = {
8:"Backspace",
46:"Delete",
9:"Tab",
13:"Enter",
32:"Space",
27:"Escape",
33:"PageUp",
34:"PageDown",
35:"End",
36:"Home",
37:"ArrowLeft",
38:"ArrowUp",
39:"ArrowRight",
40:"ArrowDown",
48:"0",
49:"1",
50:"2",
51:"3",
52:"4",
53:"5",
54:"6",
55:"7",
56:"8",
57:"9",
65:"A",
66:"B",
67:"C",
68:"D",
69:"E",
70:"F",
71:"G",
72:"H",
73:"I",
74:"J",
75:"K",
76:"L",
77:"M",
78:"N",
79:"O",
80:"P",
81:"Q",
82:"R",
83:"S",
84:"T",
85:"U",
86:"V",
87:"W",
88:"X",
89:"Y",
90:"Z"
};
function _(e, t) {
return _i_("3bb:dc192754"), _r_(function(i) {
_i_("3bb:bd3022e0");
var n = "";
i.which && void 0 !== r[i.which.toString()] && (i.originalEvent.altKey && (n += ":alt"), i.originalEvent.ctrlKey && (n += ":ctrl"), i.originalEvent.metaKey && (n += ":meta"), i.originalEvent.shiftKey && (n += ":shift"), n += ":" + r[i.which], e.trigger(t + n, {
keys:t + n,
originalEvent:i
})), _r_();
});
}
i.exports = n.extend({
init:function() {
_i_("3bb:7a254e40"), a.extend(this), this.$el.bind("keydown", _(this, "keydown")).bind("keyup", _(this, "keyup")), _r_();
}
}), _r_();
}), booking.components.define("legacy-emitter", function(e, t) {
_i_("3bb:974be8d9"), this.eventHandlers = {}, this.bind = function(e, t) {
return _i_("3bb:d0bd264b"), this.eventHandlers[e] = this.eventHandlers[e] || [], this.eventHandlers[e].push(t), _r_(this);
}, this.once = function(e, t) {
_i_("3bb:05b26614");
var i = this, n = function(a) {
_i_("3bb:916b17c1"), i.unbind(e, n), t.apply(i, arguments), _r_();
};
return this.bind(e, n), _r_(this);
}, this.unbind = function(e, i) {
if (_i_("3bb:6a8ef19a"), this.eventHandlers[e] = this.eventHandlers[e] || [], i) {
var n = t.inArray(i, this.eventHandlers[e]);
-1 != n && this.eventHandlers[e].splice(n, 1);
} else this.eventHandlers[e] = [];
return _r_(this);
}, this.trigger = function(e, i) {
if (_i_("3bb:a6a7edbb"), !this.eventHandlers[e] || 0 == this.eventHandlers[e].length) return _r_(this);
var n = !1, a = this;
return t.each(this.eventHandlers[e], function(t, r) {
if (_i_("3bb:1c6de3a8"), n) return _r_(!1);
r && r.call && r.call(a, {
type:e,
data:i,
stopPropagation:function() {
_i_("3bb:f074716f"), n = !0, _r_();
}
}), _r_();
}), _r_(this);
}, this.on = this.bind, this.off = this.unbind, _r_();
}), B.define("component/core/lightbox/trigger", function(e, t, i) {
_i_("3bb:de9857ab");
var n = e("read-data-options"), a = e("lightbox");
i.exports = e("component").extend({
init:function() {
_i_("3bb:457b66e1");
var e = this.$el.data("event") || "click";
this.options = n(this.el, {
bCloseButton:{
name:"close-button",
type:Boolean
},
bCanScroll:{
name:"scrollable",
type:Boolean
},
bOverflowVisible:{
name:"overflow-visible",
type:Boolean
},
autoWidth:{
name:"auto-width",
type:Boolean
},
ajax:{
name:"ajax",
type:Boolean
},
iframe:{
name:"iframe",
type:Boolean
},
customWrapperClassName:{
name:"wrapper-class",
type:String
},
customMaskClassName:{
name:"mask-class",
type:String
},
bMaskClick:{
name:"mask-click",
type:Boolean
},
trigger:{
name:"trigger",
type:String
},
position:{
name:"position",
type:String
},
autoCenter:{
name:"auto-center",
type:Boolean
},
limitHeight:{
name:"limit-height",
type:Boolean
},
cloneElement:{
name:"clone-element",
type:Boolean
},
trapFocus:{
name:"trap-focus",
type:Boolean
},
modalLabeledById:{
name:"modal-labeled-by-id",
type:String
},
bAnimation:{
name:"animation",
type:Number
},
addDialogStartEndText:{
name:"add-dialog-start-end-text",
type:Boolean
}
}), "page-load" === e ? (this.target = this.$el, $(document).ready(function() {
_i_("3bb:9500b627"), setTimeout(this.open.bind(this), 150), _r_();
}.bind(this))) :(this.target = this.$el.attr("href") || this.$el.data("src") || this.target, this.$el.bind(e, this.open.bind(this))), _r_();
},
open:function(e) {
_i_("3bb:b08828d6"), e && e.preventDefault && e.preventDefault(), a.show(this.target, this.options), this.options.trigger && B.events.trigger(this.options.trigger, e, this.target), _r_();
}
}), _r_();
}), B.define("component/core/lightbox/iframe", function(e, t, i) {
_i_("3bb:b8e3a3bf"), e("jquery");
var n = e("lightbox");
i.exports = e("component").extend({
init:function() {
_i_("3bb:7430fe1a");
var e = this.$el;
e.click(function() {
return _i_("3bb:d8cf6772"), n.show(e.attr("href"), {
iframe:!0,
iframeHeight:e.data("iframe-height") || 550,
customWrapperClassName:"iframe_lightbox"
}), _r_(!1);
}), _r_();
}
}), _r_();
}), B.define("overlay", function(e, t, i) {
_i_("3bb:c57901e3");
var n, a, r = e("event-emitter");
i.exports = r.extend({
options:{},
created:!1,
visible:!1,
getElement:function(e) {
return _i_("3bb:52ae83a2"), this.created || (this.created = !0, n = $('<div class="b-overlay" style="display:none"></div>'), $("body").append(n), a = $("html").component("keyboard"), a.on("keyup:Escape", this._keyboardEscape.bind(this)), n.click(this._backgroundClick.bind(this))), this.options = e || {}, this.options.animationDuration = this.options.animationDuration || .5, _r_(n);
},
show:function() {
if (_i_("3bb:142a3d87"), this.visible || !this.created) return _r_(!1);
this.visible = !0, this.trigger("show"), n.fadeIn(1e3 * this.options.animationDuration, function() {
_i_("3bb:a3d1b998"), this.trigger("show:end"), _r_();
}.bind(this)), _r_();
},
hide:function() {
if (_i_("3bb:97d7020f"), !this.visible || !this.created) return _r_(!1);
this.visible = !1, this.trigger("hide"), n.fadeOut(1e3 * this.options.animationDuration, function() {
_i_("3bb:1517a5e2"), this.trigger("hide:end"), _r_();
}.bind(this)), _r_();
},
_keyboardEscape:function(e) {
_i_("3bb:6c33963c"), this.options.preventHide || this.hide(), _r_();
},
_backgroundClick:function(e) {
_i_("3bb:01019f59"), !this.options.preventHide && (e.currentTarget === e.target || this.options.hideElements && -1 != this.options.hideElements.indexOf(e.target)) && (e.preventDefault(), this.hide()), _r_();
}
}), _r_();
}), B.define("component/input-phone-country", function(e, t, i) {
_i_("3bb:16f489e2");
var n = e("component"), a = {
ad:0,
ae:-25,
af:-50,
ag:-75,
ai:-100,
al:-125,
am:-150,
an:-175,
ao:-200,
aq:-225,
ar:-250,
as:-275,
at:-300,
au:-325,
aw:-350,
ax:-375,
az:-400,
ba:-425,
bb:-450,
bd:-475,
be:-500,
bf:-525,
bg:-550,
bh:-575,
bi:-600,
bj:-625,
bl:-650,
bm:-675,
bn:-700,
bo:-725,
bq:-750,
br:-775,
bs:-800,
bt:-825,
bv:-850,
bw:-875,
by:-900,
bz:-925,
ca:-950,
cc:-975,
cd:-1e3,
cf:-1025,
cg:-1050,
ch:-1075,
ci:-1100,
ck:-1125,
cl:-1150,
cm:-1175,
cn:-1200,
co:-1225,
cr:-1250,
cu:-1275,
cv:-1300,
cw:-1325,
cx:-1350,
cy:-1375,
cz:-1400,
de:-1425,
dj:-1450,
dk:-1475,
dm:-1500,
"do":-1525,
dz:-1550,
ec:-1575,
ee:-1600,
eg:-1625,
eh:-1650,
er:-1675,
es:-1700,
et:-1725,
fi:-1750,
fj:-1775,
fk:-1800,
fm:-1825,
fo:-1850,
fr:-1875,
ga:-1900,
gb:-1925,
gd:-1950,
ge:-1975,
gf:-2e3,
gg:-2025,
gh:-2050,
gi:-2075,
gl:-2100,
gm:-2125,
gn:-2150,
gp:-2175,
gq:-2200,
gr:-2225,
gs:-2250,
gt:-2275,
gu:-2300,
gw:-2325,
gy:-2350,
hk:-2375,
hm:-2400,
hn:-2425,
hr:-2450,
ht:-2475,
hu:-2500,
id:-2525,
ie:-2550,
il:-2575,
im:-2600,
"in":-2625,
io:-2650,
iq:-2675,
ir:-2700,
is:-2725,
it:-2750,
je:-2775,
jm:-2800,
jo:-2825,
jp:-2850,
ke:-2875,
kg:-2900,
kh:-2925,
ki:-2950,
km:-2975,
kn:-3e3,
kp:-3025,
kr:-3050,
kw:-3075,
ky:-3100,
kz:-3125,
la:-3150,
lb:-3175,
lc:-3200,
li:-3225,
lk:-3250,
lr:-3275,
ls:-3300,
lt:-3325,
lu:-3350,
lv:-3375,
ly:-3400,
ma:-3425,
mc:-3450,
md:-3475,
me:-3500,
mf:-3525,
mg:-3550,
mh:-3575,
mk:-3600,
ml:-3625,
mm:-3650,
mn:-3675,
mo:-3700,
mp:-3725,
mq:-3750,
mr:-3775,
ms:-3800,
mt:-3825,
mu:-3850,
mv:-3875,
mw:-3900,
mx:-3925,
my:-3950,
mz:-3975,
na:-4e3,
nc:-4025,
ne:-4050,
nf:-4075,
ng:-4100,
ni:-4125,
nl:-4150,
no:-4175,
np:-4200,
nr:-4225,
nu:-4250,
nz:-4275,
om:-4300,
pa:-4325,
pe:-4350,
pf:-4375,
pg:-4400,
ph:-4425,
pk:-4450,
pl:-4475,
pm:-4500,
pn:-4525,
pr:-4550,
ps:-4575,
pt:-4600,
pw:-4625,
py:-4650,
qa:-4675,
re:-4700,
ro:-4725,
rs:-4750,
ru:-4775,
rw:-4800,
sa:-4825,
sb:-4850,
sc:-4875,
sd:-4900,
se:-4925,
sg:-4950,
sh:-4975,
si:-5e3,
sj:-5025,
sk:-5050,
sl:-5075,
sm:-5100,
sn:-5125,
so:-5150,
sr:-5175,
st:-5200,
sv:-5225,
sx:-5250,
sy:-5275,
sz:-5300,
tc:-5325,
td:-5350,
tf:-5375,
tg:-5400,
th:-5425,
tj:-5450,
tk:-5475,
tl:-5500,
tm:-5525,
tn:-5550,
to:-5575,
tr:-5600,
tt:-5625,
tv:-5650,
tw:-5675,
tz:-5700,
ua:-5725,
ug:-5750,
um:-5775,
us:-5800,
uy:-5825,
uz:-5850,
va:-5875,
vc:-5900,
ve:-5925,
vg:-5950,
vi:-5975,
vn:-6e3,
vu:-6025,
wf:-6050,
ws:-6075,
xk:-6100,
ye:-6125,
yt:-6150,
za:-6175,
zm:-6200,
zw:-6225
}, r = [ "au", "cw", "gb", "gp", "gs", "km", "mh", "mq", "nf", "no", "ru", "sm", "us" ];
B.env && B.env.ip_country && "cn" === B.env.ip_country && (a.tw = 16);
function _(e, t) {
return _i_("3bb:c5109f8e"), _r_(e.callingcode.length < t.callingcode.length ? 1 :e.callingcode.length > t.callingcode.length ? -1 :e.preferred ? -1 :1);
}
i.exports = n.extend({
init:function() {
_i_("3bb:6a74f571"), this.$country = this.$el.find('[data-phone-country=""], [data-phone-country]'), this.$input = this.$el.find('[data-phone-input=""], [data-phone-input]'), this.$flag = this.$el.find('[data-phone-flag=""], [data-phone-flag]'), this.isTriggerChange = void 0 !== this.$el.data("phone-country-trigger-change"), this.defaultCountryId = this.getDefaultCountryId(), this.countries = [], this.addEventListeners(), this.loadCountries(), this.initDefaultCountry(), _r_();
},
getDefaultCountryId:function() {
_i_("3bb:310e97ef");
var e = (this.$el.data("phone-country-default") || "").toString().toLowerCase();
return "xx" === e && (e = ""), _r_(e);
},
addEventListeners:function() {
_i_("3bb:e22405b6");
var e = this.$input[0], t = e && ("oninput" in this.$input[0] ? "input" :"keyup");
this.$country.change(this.countryChange.bind(this)), this.$input.bind("focus", this.inputFocus.bind(this)), this.$input.bind("blur", this.inputBlur.bind(this)), this.$input.bind(t + " change", this.inputInteracted.bind(this)), "msie" == B.env.b_browser && B.env.b_browser_version <= 8 && (this.$country.bind("mousedown", this.countryFocus.bind(this)), this.$country.bind("blur change", this.countryBlur.bind(this))), _r_();
},
inputFocus:function() {
_i_("3bb:82b7591d"), setTimeout(this.addDefaultCallingCode.bind(this), 4), _r_();
},
inputBlur:function() {
_i_("3bb:886a2afc"), this.removeDefaultCallingCode(), _r_();
},
countryFocus:function() {
_i_("3bb:ff5bf9db"), this.$country.css("width", "auto"), _r_();
},
countryBlur:function() {
_i_("3bb:ee7f41f2"), this.$country.css("width", ""), _r_();
},
inputInteracted:function() {
_i_("3bb:d9637942"), this.checkPlus(), this.changeCountryFromInput(), _r_();
},
countryChange:function() {
_i_("3bb:ece1e88f"), this.changeInputFromCountry(), this.$input.focus(), _r_();
},
loadCountries:function() {
_i_("3bb:f36ac589"), this.$country.find("option").each(function(e, t) {
_i_("3bb:c66ef2fb");
var i = $(t), n = i.attr("value").toLowerCase(), a = {
id:n,
callingcode:i.attr("data-calling-code"),
name:i.text(),
value:i.attr("value"),
preferred:this.defaultCountryId == n || -1 != r.indexOf(n)
};
this.countries.push(a), _r_();
}.bind(this)), this.countries.sort(_), _r_();
},
initDefaultCountry:function() {
_i_("3bb:22ccd31e"), this.defaultCountry = this.findCountryById(this.defaultCountryId), this.defaultCountry && (this.defaultCountryCallingCode = this.defaultCountry.callingcode, this.changeCountryFromInput(), this.$input.attr("placeholder", "+" + this.defaultCountryCallingCode)), _r_();
},
findCountryById:function(e) {
_i_("3bb:255dc48c");
var t = null;
return this.countries.every(function(i) {
if (_i_("3bb:fb6d66be"), i.id == e) return t = i, _r_(!1);
return _r_(!0);
}), _r_(t);
},
findCountryByNumber:function(e) {
_i_("3bb:6bc519b1");
var t = null;
return this.countries.every(function(i) {
if (_i_("3bb:07dab39e"), 0 == e.indexOf(i.callingcode)) return t = i, _r_(!1);
return _r_(!0);
}), _r_(t);
},
changeCountryCode:function(e, t) {
_i_("3bb:8c6d199c");
var i = this.findCountryByNumber(e);
return i && (e = e.substr(i.callingcode.length)), _r_(t.callingcode + e);
},
addDefaultCallingCode:function() {
_i_("3bb:8263e81e");
var e = this.$input.val();
("" == e || "+" == e) && this.$input.val("+" + this.defaultCountryCallingCode), _r_();
},
removeDefaultCallingCode:function() {
_i_("3bb:2e7bf520");
var e = this.$input.val();
("+" == e || e == "+" + this.defaultCountryCallingCode) && this.$input.val(""), _r_();
},
changeInputFromCountry:function() {
_i_("3bb:9e4a4521");
var e = this.$country.val().toLowerCase(), t = this.findCountryById(e), i = this.$input.val() || "", n = i.replace(/^\+/, "");
this.$input.val("+" + this.changeCountryCode(n, t)), this.isTriggerChange && this.$input.change(), this.updateFlag(t), _r_();
},
changeCountryFromInput:function() {
_i_("3bb:91013724");
var e = this.$input.val() || "", t = e.replace(/^\+/, ""), i = this.findCountryByNumber(t) || this.defaultCountry;
!i && booking.reportError && booking.reportError({
message:"No countries populated"
}, "No country"), this.$country.val(i.value), this.updateFlag(i), _r_();
},
checkPlus:function() {
_i_("3bb:4a0858cb");
var e = this.$input.val() || "";
0 != e.indexOf("+") && this.$input.val("+" + e), _r_();
},
updateFlag:function(e) {
_i_("3bb:ae191408"), a[e.id] && this.$flag.css("background-position", "0 " + a[e.id] + "px"), _r_();
},
selectCountry:function(e) {
_i_("3bb:10ee2401");
var t = this.findCountryById(e);
t && (this.defaultCountryId = t.id, this.initDefaultCountry()), _r_();
}
}), _r_();
}), function() {
if (_i_("3bb:8812a89c"), !B.env || ("book" !== B.env.b_action || 3 !== Number(B.env.b_stage)) && "bundle" !== B.env.b_action && "attractionsbook" !== B.env.b_action) return _r_();
var e, t, i, n, a, r, _, o, s, l, c, d, b, p, u, h, f, m, M, g, v, y, w, C, k = [].slice, N = [].indexOf || function(e) {
_i_("3bb:07fe9b6d");
for (var t = 0, i = this.length; i > t; t++) if (t in this && this[t] === e) return _r_(t);
return _r_(-1);
};
e = window.jQuery || window.Zepto || window.$, e.payment = {}, e.payment.fn = {}, e.fn.payment = function() {
_i_("3bb:7ab4b5c6");
var t, i;
return i = arguments[0], t = 2 <= arguments.length ? k.call(arguments, 1) :[], _r_(e.payment.fn[i].apply(this, t));
}, a = /(\d{1,4})/g, e.payment.cards = n = [ {
type:"visaelectron",
pattern:/^4(026|17500|405|508|844|91[37])/,
format:a,
length:[ 16 ],
cvcLength:[ 3 ],
luhn:!0
}, {
type:"maestro",
pattern:/^(5(018|0[23]|[68])|6(39|7))/,
format:a,
length:[ 12, 13, 14, 15, 16, 17, 18, 19 ],
cvcLength:[ 3 ],
luhn:!0
}, {
type:"forbrugsforeningen",
pattern:/^600/,
format:a,
length:[ 16 ],
cvcLength:[ 3 ],
luhn:!0
}, {
type:"dankort",
pattern:/^5019/,
format:a,
length:[ 16 ],
cvcLength:[ 3 ],
luhn:!0
}, {
type:"visa",
pattern:/^4/,
format:a,
length:[ 13, 16 ],
cvcLength:[ 3 ],
luhn:!0
}, {
type:"mastercard",
pattern:/^(5[1-5]|2[2-7])/,
format:a,
length:[ 16 ],
cvcLength:[ 3 ],
luhn:!0
}, {
type:"amex",
pattern:/^3[47]/,
format:/(\d{1,4})(\d{1,6})?(\d{1,5})?/,
length:[ 15 ],
cvcLength:[ 3, 4 ],
luhn:!0
}, {
type:"dinersclub",
pattern:/^3[0689]/,
format:/(\d{1,4})(\d{1,6})?(\d{1,4})?/,
length:[ 14 ],
cvcLength:[ 3 ],
luhn:!0
}, {
type:"discover",
pattern:/^6([045]|22)/,
format:a,
length:[ 16 ],
cvcLength:[ 3 ],
luhn:!0
}, {
type:"unionpay",
pattern:/^(62|88)/,
format:a,
length:[ 16, 17, 18, 19 ],
cvcLength:[ 3 ],
luhn:!1
}, {
type:"jcb",
pattern:/^35/,
format:a,
length:[ 16 ],
cvcLength:[ 3 ],
luhn:!0
} ], t = function(e) {
_i_("3bb:966aa568");
var t, i, a;
for (e = (e + "").replace(/\D/g, ""), i = 0, a = n.length; a > i; i++) if (t = n[i], t.pattern.test(e)) return _r_(t);
_r_();
}, i = function(e) {
_i_("3bb:3ad499a7");
var t, i, a;
for (i = 0, a = n.length; a > i; i++) if (t = n[i], t.type === e) return _r_(t);
_r_();
}, b = function(e) {
_i_("3bb:54807ca0");
var t, i, n, a, r, _;
for (n = !0, a = 0, i = (e + "").split("").reverse(), r = 0, _ = i.length; _ > r; r++) t = i[r], t = parseInt(t, 10), (n = !n) && (t *= 2), t > 9 && (t -= 9), a += t;
return _r_(a % 10 === 0);
}, d = function(e) {
_i_("3bb:daaba99c");
var t;
if (null != e.prop("selectionStart") && e.prop("selectionStart") !== e.prop("selectionEnd")) return _r_(!0);
if (null != ("undefined" != typeof document && null !== document && null != (t = document.selection) ? t.createRange :void 0) && document.selection.createRange().text) return _r_(!0);
return _r_(!1);
}, w = function(e, t) {
_i_("3bb:32fa8a60");
var i, n, a;
try {
i = t.prop("selectionStart");
} catch (r) {
n = r, i = null;
}
if (a = t.val(), t.val(e), null !== i && t.is(":focus")) return i === a.length && (i = e.length), t.prop("selectionStart", i), _r_(t.prop("selectionEnd", i));
_r_();
}, m = function(e) {
_i_("3bb:e1e13d77");
var t, i, n, a, r, _, o, s;
for (null == e && (e = ""), n = "０１２３４５６７８９", a = "0123456789", _ = "", i = e.split(""), o = 0, s = i.length; s > o; o++) t = i[o], r = n.indexOf(t), r > -1 && (t = a[r]), _ += t;
return _r_(_);
}, f = function(t) {
return _i_("3bb:20fd7c54"), _r_(setTimeout(function() {
_i_("3bb:5bdf4ad8");
var i, n;
return i = e(t.currentTarget), n = i.val(), n = m(n), n = n.replace(/\D/g, ""), _r_(w(n, i));
}));
}, u = function(t) {
return _i_("3bb:bd50d536"), _r_(setTimeout(function() {
_i_("3bb:a9234367");
var i, n;
return i = e(t.currentTarget), n = i.val(), n = m(n), n = e.payment.formatCardNumber(n), _r_(w(n, i));
}));
}, o = function(i) {
_i_("3bb:99c25895");
var n, a, r, _, o, s, l;
if (r = String.fromCharCode(i.which), !/^\d+$/.test(r)) return _r_();
if (n = e(i.currentTarget), l = n.val(), a = t(l + r), _ = (l.replace(/\D/g, "") + r).length, s = 16, a && (s = a.length[a.length.length - 1]), _ >= s) return _r_();
if (null != n.prop("selectionStart") && n.prop("selectionStart") !== l.length) return _r_();
if (o = a && "amex" === a.type ? /^(\d{4}|\d{4}\s\d{6})$/ :/(?:^|\s)(\d{4})$/, o.test(l)) return i.preventDefault(), _r_(setTimeout(function() {
return _i_("3bb:91d8a7e5"), _r_(n.val(l + " " + r));
}));
if (o.test(l + r)) return i.preventDefault(), _r_(setTimeout(function() {
return _i_("3bb:43959f77"), _r_(n.val(l + r + " "));
}));
_r_();
}, r = function(t) {
_i_("3bb:9032411e");
var i, n;
if (i = e(t.currentTarget), n = i.val(), 8 !== t.which) return _r_();
if (null != i.prop("selectionStart") && i.prop("selectionStart") !== n.length) return _r_();
if (/\d\s$/.test(n)) return t.preventDefault(), _r_(setTimeout(function() {
return _i_("3bb:710bd403"), _r_(i.val(n.replace(/\d\s$/, "")));
}));
if (/\s\d?$/.test(n)) return t.preventDefault(), _r_(setTimeout(function() {
return _i_("3bb:dbdfbe6c"), _r_(i.val(n.replace(/\d$/, "")));
}));
_r_();
}, h = function(t) {
return _i_("3bb:683fc590"), _r_(setTimeout(function() {
_i_("3bb:2314888a");
var i, n;
return i = e(t.currentTarget), n = i.val(), n = m(n), n = e.payment.formatExpiry(n), _r_(w(n, i));
}));
}, s = function(t) {
_i_("3bb:218e21bd");
var i, n, a;
if (n = String.fromCharCode(t.which), !/^\d+$/.test(n)) return _r_();
if (i = e(t.currentTarget), a = i.val() + n, /^\d$/.test(a) && "0" !== a && "1" !== a) return t.preventDefault(), _r_(setTimeout(function() {
return _i_("3bb:777722be"), _r_(i.val("0" + a + " / "));
}));
if (/^\d\d$/.test(a)) return t.preventDefault(), _r_(setTimeout(function() {
return _i_("3bb:a3408b8f"), _r_(i.val("" + a + " / "));
}));
_r_();
}, l = function(t) {
_i_("3bb:b7775018");
var i, n, a;
if (n = String.fromCharCode(t.which), !/^\d+$/.test(n)) return _r_();
if (i = e(t.currentTarget), a = i.val(), /^\d\d$/.test(a)) return _r_(i.val("" + a + " / "));
_r_();
}, c = function(t) {
_i_("3bb:9ad0042f");
var i, n, a;
if (a = String.fromCharCode(t.which), "/" !== a && " " !== a) return _r_();
if (i = e(t.currentTarget), n = i.val(), /^\d$/.test(n) && "0" !== n) return _r_(i.val("0" + n + " / "));
_r_();
}, _ = function(t) {
_i_("3bb:e07ea8bc");
var i, n;
if (i = e(t.currentTarget), n = i.val(), 8 !== t.which) return _r_();
if (null != i.prop("selectionStart") && i.prop("selectionStart") !== n.length) return _r_();
if (/\d\s\/\s$/.test(n)) return t.preventDefault(), _r_(setTimeout(function() {
return _i_("3bb:bb6b7704"), _r_(i.val(n.replace(/\d\s\/\s$/, "")));
}));
_r_();
}, p = function(t) {
return _i_("3bb:8b7d44f4"), _r_(setTimeout(function() {
_i_("3bb:6776d9c6");
var i, n;
return i = e(t.currentTarget), n = i.val(), n = m(n), n = n.replace(/\D/g, "").slice(0, 4), _r_(w(n, i));
}));
}, y = function(e) {
_i_("3bb:746567f2");
var t;
if (e.metaKey || e.ctrlKey) return _r_(!0);
if (32 === e.which) return _r_(!1);
if (0 === e.which) return _r_(!0);
if (e.which < 33) return _r_(!0);
return t = String.fromCharCode(e.which), _r_(!!/[\d\s]/.test(t));
}, g = function(i) {
_i_("3bb:2afff3f1");
var n, a, r, _;
if (n = e(i.currentTarget), r = String.fromCharCode(i.which), !/^\d+$/.test(r)) return _r_();
if (d(n)) return _r_();
return _ = (n.val() + r).replace(/\D/g, ""), a = t(_), _r_(a ? _.length <= a.length[a.length.length - 1] :_.length <= 16);
}, v = function(t) {
_i_("3bb:a60dcf5d");
var i, n, a;
if (i = e(t.currentTarget), n = String.fromCharCode(t.which), !/^\d+$/.test(n)) return _r_();
if (d(i)) return _r_();
if (a = i.val() + n, a = a.replace(/\D/g, ""), a.length > 6) return _r_(!1);
_r_();
}, M = function(t) {
_i_("3bb:f8b02d44");
var i, n, a;
if (i = e(t.currentTarget), n = String.fromCharCode(t.which), !/^\d+$/.test(n)) return _r_();
if (d(i)) return _r_();
return a = i.val() + n, _r_(a.length <= 4);
}, C = function(t) {
_i_("3bb:43117edc");
var i, a, r, _, o;
if (i = e(t.currentTarget), o = i.val(), _ = e.payment.cardType(o) || "unknown", !i.hasClass(_)) return a = function() {
_i_("3bb:6b39fffe");
var e, t, i;
for (i = [], e = 0, t = n.length; t > e; e++) r = n[e], i.push(r.type);
return _r_(i);
}(), i.removeClass("unknown"), i.removeClass(a.join(" ")), i.addClass(_), i.toggleClass("identified", "unknown" !== _), _r_(i.trigger("payment.cardType", _));
_r_();
}, e.payment.fn.formatCardCVC = function() {
return _i_("3bb:b4c7db67"), this.on("keypress", y), this.on("keypress", M), this.on("paste", p), this.on("change", p), this.on("input", p), _r_(this);
}, e.payment.fn.formatCardExpiry = function() {
return _i_("3bb:7577563f"), this.on("keypress", y), this.on("keypress", v), this.on("keypress", s), this.on("keypress", c), this.on("keypress", l), this.on("keydown", _), this.on("change", h), this.on("input", h), _r_(this);
}, e.payment.fn.formatCardNumber = function() {
return _i_("3bb:4d2349c8"), this.on("keypress", y), this.on("keypress", g), this.on("keypress", o), this.on("keydown", r), this.on("keyup", C), this.on("paste", u), this.on("change", u), this.on("input", u), this.on("input", C), _r_(this);
}, e.payment.fn.restrictNumeric = function() {
return _i_("3bb:430c32fd"), this.on("keypress", y), this.on("paste", f), this.on("change", f), this.on("input", f), _r_(this);
}, e.payment.fn.cardExpiryVal = function() {
return _i_("3bb:888348ea"), _r_(e.payment.cardExpiryVal(e(this).val()));
}, e.payment.cardExpiryVal = function(e) {
_i_("3bb:c5e14bf9");
var t, i, n, a;
return a = e.split(/[\s\/]+/, 2), t = a[0], n = a[1], 2 === (null != n ? n.length :void 0) && /^\d+$/.test(n) && (i = new Date().getFullYear(), i = i.toString().slice(0, 2), n = i + n), t = parseInt(t, 10), n = parseInt(n, 10), _r_({
month:t,
year:n
});
}, e.payment.validateCardNumber = function(e) {
_i_("3bb:b3b79781");
var i, n;
if (e = (e + "").replace(/\s+|-/g, ""), !/^\d+$/.test(e)) return _r_(!1);
if (i = t(e), !i) return _r_(!1);
return _r_((n = e.length, N.call(i.length, n) >= 0 && (i.luhn === !1 || b(e))));
}, e.payment.validateCardExpiry = function(t, i) {
_i_("3bb:39cd79b8");
var n, a, r;
if ("object" == typeof t && "month" in t && (r = t, t = r.month, i = r.year), !t || !i) return _r_(!1);
if (t = e.trim(t), i = e.trim(i), !/^\d+$/.test(t)) return _r_(!1);
if (!/^\d+$/.test(i)) return _r_(!1);
if (!(t >= 1 && 12 >= t)) return _r_(!1);
if (2 === i.length && (i = 70 > i ? "20" + i :"19" + i), 4 !== i.length) return _r_(!1);
return a = new Date(i, t), n = new Date(), a.setMonth(a.getMonth() - 1), a.setMonth(a.getMonth() + 1, 1), _r_(a > n);
}, e.payment.validateCardCVC = function(t, n) {
_i_("3bb:3c6aa2ec");
var a, r;
if (t = e.trim(t), !/^\d+$/.test(t)) return _r_(!1);
return a = i(n), _r_(null != a ? (r = t.length, N.call(a.cvcLength, r) >= 0) :t.length >= 3 && t.length <= 4);
}, e.payment.cardType = function(e) {
_i_("3bb:5e56e5a3");
var i;
if (!e) return _r_(null);
return _r_((null != (i = t(e)) ? i.type :void 0) || null);
}, e.payment.formatCardNumber = function(i) {
_i_("3bb:4910eb53");
var n, a, r, _;
if (i = i.replace(/\D/g, ""), n = t(i), !n) return _r_(i);
if (r = n.length[n.length.length - 1], i = i.slice(0, r), n.format.global) return _r_(null != (_ = i.match(n.format)) ? _.join(" ") :void 0);
if (a = n.format.exec(i), null == a) return _r_();
return a.shift(), a = e.grep(a, function(e) {
return _i_("3bb:da18bde4"), _r_(e);
}), _r_(a.join(" "));
}, e.payment.formatExpiry = function(e) {
_i_("3bb:14b21582");
var t, i, n, a;
if (i = e.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/), !i) return _r_("");
return t = i[1] || "", n = i[2] || "", a = i[3] || "", a.length > 0 ? n = " / " :" /" === n ? (t = t.substring(0, 1), n = "") :2 === t.length || n.length > 0 ? n = " / " :1 === t.length && "0" !== t && "1" !== t && (t = "0" + t, n = " / "), _r_(t + n + a);
}, _r_();
}.call(this), B.define("component/bh/sleeping_arrangement", function(e, t, i) {
_i_("3bb:57af9ede");
var n = e("component").extend({
lockScrollTracking:!1,
scrollInterval:300,
init:function(e) {
_i_("3bb:9f93d872"), this.$el = e, this.$elScrollable = this.$el.find(".js-unit_info__sleeping_scrollable"), this.$arrowLeft = this.$el.find(".js-unit_info__arrow_left"), this.$arrowRight = this.$el.find(".js-unit_info__arrow_right"), this.takeMeasurements(), this.toggleArrows(this.$elScrollable.scrollLeft()), this.bindUI(), _r_();
},
destroy:function() {
_i_("3bb:00d9e8fc"), this.unbindUI(), _r_();
},
scrollTo:function(e) {
_i_("3bb:dabbdca0");
var t = this;
this.lockScrollTracking = !0;
var i = Math.min(Math.max(e, 0), this.contentWidth - this.elWidth);
this.$elScrollable.animate({
scrollLeft:i
}, 300), setTimeout(function() {
_i_("3bb:6ce34d2e"), t.lockScrollTracking = !1, _r_();
}, 410), this.toggleArrows(i), _r_();
},
toggleArrows:function(e) {
_i_("3bb:e0e79023");
function t(e, t) {
_i_("3bb:fdb6b86f"), parseInt(e.css("opacity")) !== t && e.animate({
opacity:t
}, 300), _r_();
}
if (this.contentWidth < this.elWidth) return t(this.$arrowLeft, 0), t(this.$arrowRight, 0), _r_();
0 == e ? t(this.$arrowLeft, 0) :t(this.$arrowLeft, 1), e >= this.contentWidth - this.elWidth ? t(this.$arrowRight, 0) :t(this.$arrowRight, 1), _r_();
},
takeMeasurements:function() {
if (_i_("3bb:9c19d30f"), this.elWidth = this.$el.width(), this.contentWidth = this.$elScrollable.children().width(), B.env.b_is_ie10 || B.env.b_is_ie11) {
var e = this;
this.contentWidth = 0, this.$elScrollable.children().children().each(function(t, i) {
_i_("3bb:c5feadaf"), e.contentWidth += $(i).outerWidth(!0), _r_();
});
}
_r_();
},
resizeHandler:function() {
_i_("3bb:5b9faaed");
var e = this;
this.resizeThrottleTimeout && clearTimeout(this.resizeThrottleTimeout), this.resizeThrottleTimeout = setTimeout(function() {
_i_("3bb:cc627426"), e.takeMeasurements(), e.toggleArrows(e.$elScrollable.scrollLeft()), _r_();
}, 100), _r_();
},
scrollHandler:function() {
_i_("3bb:46996879");
var e = this;
this.scrollThrottleTimeout && clearTimeout(this.scrollThrottleTimeout), this.scrollThrottleTimeout = setTimeout(function() {
_i_("3bb:b205dbcf");
var t = e.$elScrollable.scrollLeft();
e.toggleArrows(t), _r_();
}, 100), _r_();
},
bindUI:function() {
_i_("3bb:71de6b95");
var e = this;
$(window).on("resize", this.resizeHandler.bind(this)), this.$elScrollable.on("scroll", this.scrollHandler.bind(this)), this.$arrowLeft.on("click", function(t) {
_i_("3bb:6ce25bb6"), e.scrollTo(e.$elScrollable.scrollLeft() - e.scrollInterval), _r_();
}), this.$arrowRight.on("click", function(t) {
_i_("3bb:6d34e11b"), e.scrollTo(e.$elScrollable.scrollLeft() + e.scrollInterval), _r_();
}), _r_();
},
unbindUI:function() {
_i_("3bb:a5be63ac"), $(window).off("resize", this.resizeHandler), this.$elScrollable.off("scroll", this.scrollHandler), this.$arrowLeft.off("click"), this.$arrowRight.off("click"), _r_();
}
});
i.exports = n, _r_();
}), B.define("tooltip", function(e, t, i) {
_i_("3bb:d80c9601");
var n, a, r = e("event-emitter"), _ = e("jquery"), o = e("jstmpl"), s = 0, l = {}, c = {
position:"top",
arrow:!0,
animation:B.env.fe_unified_tooltip ? !1 :!0,
customClass:"",
trigger:"hover focus",
hiddenClass:"tltp--hidden",
animationClass:"tltp--animate",
wrapperTemplate:'<div class="tltp tltp--hidden"></div>',
innerTemplate:'<div class="tltp__content"><div class="tltp__image" role="image"></div><div class="tltp__header" role="header"></div><div class="tltp__body" role="body"></div></div>',
latency:0,
hideLatency:0,
rtl:B.env.rtl,
triggerDelays:{
mouseenter:200,
mouseleave:200
},
keepOpen:!1,
smartPositioning:!0,
preventDefaultOnClick:!1,
a11yNavMode:!1,
a11yAriaHidden:!1,
a11yReadOnClick:!1,
theme:"dark",
useNewThemes:B.env.fe_unified_tooltip
}, d = {
booking:c
}, b = d.booking, p = _("body"), u = _(window), h = {
mouseenter:"mouseleave",
focus:"blur",
click:"click"
}, f = /^start|end$/i, m = /^top|bottom$/i, M = /^start|top$/i, g = /^end|bottom$/i, v = [ "top", "bottom", "start", "end", "middle" ], y = [ [ 0, 1, 2, 3 ], [ 1, 0, 2, 3 ], [ 2, 3, 0, 1 ], [ 3, 2, 0, 1 ] ], w = [ [ 2, 4, 3 ], [ 2, 4, 3 ], [ 0, 4, 1 ], [ 0, 4, 1 ] ], C = [ [ 0, 1, 2 ], [ 2, 1, 0 ], [ 0, 1, 2 ], [ 2, 1, 0 ], [ 1, 0, 2 ] ], k = function(e) {
_i_("3bb:d238e2dd");
var t;
try {
return t = new a(e), _r_(t.api);
} catch (i) {
B.debug("tooltip").error(i);
}
_r_();
}, N = function() {
return _i_("3bb:6950c261"), _.each(l, function(e, t) {
_i_("3bb:fe3bddc0"), t.hide(), _r_();
}), _r_(this);
}, x = function(e) {
return _i_("3bb:0e2940db"), _r_(l[e]);
}, E = function(e) {
return _i_("3bb:93a45711"), _.each(l, e), _r_(this);
}, T = function(e, t) {
return _i_("3bb:2a7a7dec"), d[e] = _.extend({}, c, t), _r_(this);
}, D = function(e) {
_i_("3bb:607143e4");
var t = d[e];
return t && (b = t), _r_(this);
}, j = function(e) {
return _i_("3bb:43443f13"), l[e.id] = e, _r_(this);
};
n = {
setup:k,
hideAll:N,
get:x,
each:E,
addPreset:T,
usePreset:D
}, r.extend(n), i.exports = n, a = function() {
_i_("3bb:d9c09e55");
var e = function(e) {
_i_("3bb:84fe1f5f"), this.options = e, _.isFunction(e.onBeforeInit) && e.onBeforeInit.call(this), this.processOptions(e), this.api = {
id:this.id,
$target:this.$el,
settings:this.settings,
isVisible:_.proxy(this.isVisible, this),
show:_.proxy(this.show, this),
hide:_.proxy(this.hide, this),
toggle:_.proxy(this.toggle, this),
set:_.proxy(this.set, this),
reposition:_.proxy(this.position, this),
destroy:_.proxy(this.destroy, this),
on:_.proxy(this.on, this)
}, j(this.api), this.$el.data("tooltip-instance", this.api), this.triggerEvent("init"), _r_();
};
return e.prototype.processOptions = function(e) {
_i_("3bb:d9413b5a");
var t = d[e.preset] || b, i = this.settings = _.extend({}, t, e);
if (this.id = i.id || ++s, l[this.id]) throw new Error('A tooltip with the same id "' + this.id + '" already exists.');
if (this.$el = _(i.target).first(), this.el = this.$el[0], !(i.title || i.text || i.content || i.contentTemplate || i.contentTarget)) throw new Error('No content for the tooltip. Please use any of these options: "content", "template" or "content-target".');
this.namespace = ".tooltip." + this.id, this.setupPosition(), this.setupEvents(), this.setupTriggers(), _r_();
}, e.prototype.setupTriggers = function() {
_i_("3bb:0a6481c2");
var e = this.settings.triggerShow ? this.settings.triggerShow.split(/\s+/) :[], t = this.settings.triggerHide ? this.settings.triggerHide.split(/\s+/) :[], i = !e.length && this.settings.trigger ? this.settings.trigger.split(/\s+/) :[], n = this, a = function(e) {
return _i_("3bb:99056c6b"), _r_(_.grep(e, function(t, i) {
return _i_("3bb:f6a7eba9"), _r_(i === _.inArray(t, e));
}));
};
_.each(i, function(i, n) {
_i_("3bb:dd678831");
var a;
"hover" === n && (n = "mouseenter"), a = h[n], e.push(n), a && t.push(a), _r_();
}), e = a(e), t = a(t), _.each(e, function(e, i) {
_i_("3bb:a5206c43");
var a, r = _.inArray(i, t);
a = i + n.namespace, r > -1 ? (n.$el.on(a, _.proxy(n.toggle, n)), t.splice(r, 1)) :(n.$el.on(a, _.proxy(n.show, n)), "click" == i ? n.$el.on(a, _.proxy(n._showOnClick, n)) :n.$el.on(a, _.proxy(n.show, n))), _r_();
}), _.each(t, function(e, t) {
_i_("3bb:f760cec9"), n.$el.on(t, _.proxy(n.hide, n)), _r_();
}), _r_();
}, e.prototype.setupPosition = function() {
_i_("3bb:d87eb396");
var e, t, i = this.settings.position;
if (i = i.replace(/left/g, "start"), i = i.replace(/right/g, "end"), this.settings.rtl && (i = i.replace(f, function(e) {
return _i_("3bb:aa17339f"), _r_("end" === e ? "start" :"end");
})), i = _.trim(i).split(/\s+/), e = this.placement = i[0], t = i[1], this.placementAxis = f.test(e) ? "x" :"y", f.test(t) || m.test(t) || (t = "middle"), this.alignment = t, !f.test(e) && !m.test(e)) throw new Error("The tooltip has to be aligned either on top, bottom, left or right.");
_r_();
}, e.prototype.setupEvents = function() {
_i_("3bb:747c49fd");
var e = /^on[A-Z].+/;
_.each(this.settings, _.proxy(function(t, i) {
if (_i_("3bb:e645a3f2"), !e.test(t)) return _r_();
var n = t[2].toLowerCase() + t.substring(3);
this.on("tooltip:" + n + ":" + this.id, _.proxy(i, this)), _r_();
}, this)), _r_();
}, e.prototype.addArrow = function(e, t) {
if (_i_("3bb:279769f7"), this.$tip.removeClass(this.arrowClass), !this.settings.arrow) return _r_();
var i = "tltp--" + e;
"middle" !== t && (i = i + "-" + t), this.$tip.addClass(i), this.arrowClass = i, _r_();
}, e.prototype.createTooltipNode = function() {
_i_("3bb:388725a1"), this.triggerEvent("beforeCreateTooltipNode");
var e = this.settings, t = this.$tip = _(e.wrapperTemplate);
if (e.useNewThemes) {
var i = "tltp--themified tltp--" + e.theme;
this.$tip.addClass(i);
}
var n;
return e.icon || e.image || e.title || e.text ? n = this.buildLayout(e) :e.content ? n = e.content :e.contentTemplate ? n = o(e.contentTemplate).render(e.contentTemplateData) :(n = _(e.contentTarget), n.is("script") && (n = _(n.html()))), t.find('[role="content"]').andSelf().last().append(n), t.addClass(this.settings.customClass), this.settings.animation && t.addClass(this.settings.animationClass), this.settings.insideTriggerHide && t.on(this.settings.insideTriggerHide, function() {
_i_("3bb:16cf2731"), this.api.hide(), _r_();
}.bind(this)), B.et.initAttributesTracking(t), p.append(t), this.api.$tooltip = t, this.triggerEvent("createTooltipNode"), _r_(this);
}, e.prototype.triggerByEvent = function(e, t) {
_i_("3bb:ee6019a2");
var i = this.settings.delay;
void 0 === i && (i = this.settings.triggerDelays[e.type]), clearTimeout(this.timeout), this.timeout = setTimeout(_.proxy(t, this), i), _r_();
}, e.prototype.isVisible = function() {
return _i_("3bb:d73a2d11"), _r_(this.$tip && (!this.$tip.hasClass(this.settings.hiddenClass) || this.$tip.hasClass(this.settings.visibleClass)));
}, e.prototype.triggerEvent = function(e) {
_i_("3bb:7486748d");
var t = _.Event("tooltip:" + e, {
tooltip:this.api
}), i = _.Event(t.type + ":" + this.id, {
tooltip:this.api
});
n.emit(t.type, t, this), this.$el.trigger(t), n.emit(i.type, i, this), this.$el.trigger(i), _r_();
}, e.prototype.on = function(e, t) {
return _i_("3bb:effaa1bc"), this.$el.on(e, t), _r_(this.api);
}, e.prototype.toggle = function() {
return _i_("3bb:56ad79f0"), this.isVisible() ? this.hide() :this.show(), _r_(this.api);
}, e.prototype.show = function() {
_i_("3bb:a4ce9c09");
var e = this;
if (this.hideTimer && (this.hideTimer = clearTimeout(this.hideTimer)), this.isVisible()) return _r_(this.api);
return this.triggerEvent("beforeShow"), this.$tip || (this.createTooltipNode(), this.options.keepOpen && (this.$tip.on("mouseenter", this.show.bind(this)), this.$tip.on("mouseleave", this.hide.bind(this)))), this.position(), clearTimeout(this.timeout), this.showTimer || (this.showTimer = setTimeout(function() {
_i_("3bb:4d3c3d4d"), e.$tip.removeClass(e.settings.hiddenClass), e.$tip.addClass(e.settings.visibleClass), _r_();
}, this.settings.latency)), this.settings.animation && this.$tip.css("transition") ? this.$tip.one("transitionend", _.proxy(this.triggerEvent, this, "show")) :this.triggerEvent("show"), _r_(this.api);
}, e.prototype._showOnClick = function(e) {
_i_("3bb:d1bbd554"), this.settings.preventDefaultOnClick && e.preventDefault(), this.show(), _r_();
}, e.prototype.hide = function() {
_i_("3bb:0fe73286");
var e = this;
if (this.showTimer && (this.showTimer = clearTimeout(this.showTimer)), !this.isVisible()) return _r_(this.api);
return this.triggerEvent("beforeHide"), clearTimeout(this.timeout), this.hideTimer || (this.hideTimer = setTimeout(function() {
_i_("3bb:1e0a6564"), e.$tip.addClass(e.settings.hiddenClass), e.$tip.removeClass(e.settings.visibleClass), _r_();
}, this.settings.hideLatency)), this.settings.animation && this.$tip.css("transition") ? this.$tip.one("transitionend", _.proxy(this.triggerEvent, this, "hide")) :this.triggerEvent("hide"), _r_(this.api);
}, e.prototype.position = function(e, t) {
_i_("3bb:103b7b49"), this.triggerEvent("beforePosition"), e = e || this.placement, t = t || this.alignment;
var i, n, a, r, _, o = this.$el, s = this.$tip, l = this.buildInsideWindowFn(s.outerWidth(), s.outerHeight(), u.scrollLeft(), u.scrollTop(), u.width(), u.height()), c = v.indexOf(e), d = v.indexOf(t), b = y[c], p = C[d], h = -1;
e:for (var f = 0; 4 > f; f++) {
c = b[f], e = v[c];
for (var m = 0; 3 > m; m++) if (d = p[m], t = v[w[c][d]], i = this.calcCoords(e, t, o, s), n = l(i.left, i.top), n > h && (h = n, a = i, r = e, _ = t), !this.settings.smartPositioning || 1 === n) break e;
}
if (this.coords && this.coords.left === a.left && this.coords.top === a.top) return _r_(this.api);
return this.settings.animation && this.$tip.removeClass(this.settings.animationClass), this.coords = a, s.css(a), this.addArrow(r, _), s.outerWidth(), this.settings.animation && this.$tip.addClass(this.settings.animationClass), this.triggerEvent("position"), _r_(this.api);
}, e.prototype.set = function(e, t) {
_i_("3bb:7408eb1a");
var i = {};
return "object" === _.type(e) ? i = e :i[e] = t, _.extend(this.settings, i), this.setupPosition(), this.$tip && (this.$tip.toggleClass(this.settings.animationClass, this.settings.animation), this.position()), _r_(this.api);
}, e.prototype.destroy = function() {
_i_("3bb:7d1010ea"), this.triggerEvent("beforeDestroy"), clearTimeout(this.timeout), this.$el.off(this.namespace), this.$el.removeData("tooltip-instance"), this.$tip && this.$tip.remove(), delete l[this.id], _r_();
}, e.prototype.calcCoords = function(e, t, i, n) {
_i_("3bb:e62a98ed");
var a = i.offset(), r = {}, _ = "top", o = "outerHeight", s = "left", l = "outerWidth";
return f.test(e) && (_ = "left", o = "outerWidth", s = "top", l = "outerHeight"), M.test(e) ? r[_] = a[_] - n[o]() :r[_] = a[_] + i[o](), M.test(t) ? r[s] = a[s] :g.test(t) ? r[s] = a[s] + i[l]() - n[l]() :r[s] = a[s] + i[l]() / 2 - n[l]() / 2, _r_(r);
}, e.prototype.buildInsideWindowFn = function(e, t, i, n, a, r) {
_i_("3bb:3d9dfcae");
var _ = i + a, o = n + r;
return _r_(function(a, r) {
_i_("3bb:ff71b79b");
var s = a + e, l = r + t, c = Math.max(i, a), d = Math.min(_, s), b = Math.max(n, r), p = Math.min(o, l), u = (s - a) * (l - r), h = Math.max(0, d - c) * Math.max(0, p - b);
return _r_(h / u);
});
}, e.prototype.buildLayout = function(e) {
_i_("3bb:fc967619");
var t = _(e.innerTemplate), i = _('[role="image"]', t);
_('[role="header"]', t).append(e.title).filter(":empty").remove(), _('[role="body"]', t).andSelf().last().append(e.text).filter(":empty").remove(), e.image ? i.append(_('<img src="' + e.image + '">')) :e.icon ? i.append(_('<i class="bicon bicon-' + e.icon + '"></i>')) :i.remove();
var n = new RegExp("(<script type=['\"]track_copy['\"] data-hash=['\"](\\w+)['\"]></script>)"), a = n.exec(e.text), r = a && a[2];
return r && B.et.stage(r, 1), _r_(t);
}, _r_(e);
}(), _r_();
}), B.define("component/tooltip", function(e, t, i) {
_i_("3bb:afc240e6");
var n = e("component"), a = e("jquery"), r = e("tooltip"), _ = function(e) {
_i_("3bb:bcfa41f3");
var t = {}, i = e.data();
return a.each(i, function(e, i) {
_i_("3bb:2ec6db28");
var n;
if (e.length < 8 || 0 !== e.indexOf("tooltip")) return _r_();
e = e.substring(7), n = e[0].toLowerCase() + e.slice(1), t[n] = i, _r_();
}), t.target = e, _r_(t);
}, o = function() {
_i_("3bb:f63c485a");
try {
if (!B.env.fe_unified_tooltip) {
var e = _(this.$el);
this.tooltip = r.setup(e);
}
} catch (t) {
B.reportError("[Tooltip] Error while creating tooltip instance.", t);
}
_r_();
};
i.exports = n.extend({
init:o
}), _r_();
}), B.define("component/tt-fancy", function(e, t, i) {
"use strict";
_i_("3bb:8b621efd");
var n = e("component"), a = {
delay:300,
width:300,
id:"tt-fancy",
content:"",
triggerOn:"hover",
trackGoals:""
};
i.exports = n.extend({
init:function() {
_i_("3bb:b67ccdca"), this.domHelper = {}, this._getOptions(), this._createDomNodes(), this._attachEvents(), this.isMouseIn = !1, _r_();
},
_getOptions:function() {
_i_("3bb:97f73db3"), $.extend(this, a, {
width:this.$el.data("width"),
id:this.$el.data("id"),
content:this.$el.data("content"),
triggerOn:this.$el.data("trigger"),
trackGoals:this.$el.data("track-goals")
}), _r_();
},
_createDomNodes:function() {
_i_("3bb:fb98f958");
var e = $("#" + this.id);
if (e.length > 0) this.domHelper = {
$parent:e,
$content:e.find(".tt-fancy-content"),
$pointer:e.find(".tt-fancy-pointer")
}; else {
var t = $('<div class="tt-fancy-pointer"></div>'), i = $('<div class="tt-fancy-content"></div>');
this.domHelper = {
$parent:$('<div id="' + this.id + '" style="width: ' + this.width + 'px;" class="tt-fancy-holder tt-fancy-holder--hidden"></div>').prepend(t).append(i).appendTo(document.body),
$pointer:t,
$content:i
};
}
_r_();
},
_attachEvents:function() {
switch (_i_("3bb:ea469340"), this.triggerOn) {
case "textSelect":
var e = this;
e.$el.bind("mouseup.fancyTT", function() {
_i_("3bb:782f7e75");
var t = $.trim(e._getSelectedText()), i = $.trim(e.$el.text());
t && i.search && i.search(t) > -1 && (e._showTT.call(e), setTimeout(function() {
_i_("3bb:08c313ac"), $("body").on("mouseup.fancyTTclose", function() {
_i_("3bb:a0a7a600"), e._hideTT.call(e), $("body").off("mouseup.fancyTTclose"), _r_();
}), _r_();
}, 200)), _r_();
});
break;

case "hover":
default:
this.$el.bind("mouseenter.fancyTT", $.proxy(this._showTT, this)).bind("mouseleave.fancyTT", $.proxy(this._hideTT, this));
}
_r_();
},
_showTT:function() {
_i_("3bb:f93f3a4d");
var e = this;
e.isMouseIn = !0, setTimeout(function() {
_i_("3bb:fd909d45"), e.isMouseIn && (e.domHelper.$content.html(e.content), e._position_tt(), e.domHelper.$parent.css({
display:"block"
}), setTimeout(function() {
_i_("3bb:67810cbd"), e.domHelper.$parent.removeClass("tt-fancy-holder--hidden"), B.events.trigger("TT-Fancy:show"), e.trackGoals.split(" ").map(function(e) {
_i_("3bb:f713ab3e");
var t = e.split(":");
2 === t.length && B.et.customGoal(t[0], t[1]), _r_();
}), _r_();
}, 10)), _r_();
}, this.delay), _r_();
},
_hideTT:function() {
_i_("3bb:d33ea963"), this.isMouseIn = !1, this.domHelper.$parent.css({
display:"none"
}).addClass("tt-fancy-holder--hidden"), B.events.trigger("TT-Fancy:hide"), _r_();
},
_position_tt:function() {
_i_("3bb:8ab4392e");
var e = $(window).width(), t = this.$el, i = this.width && "number" == typeof this.width, n = (i ? this.width :this.domHelper.$parent.width()) / 2, a = t.offset().left + t.outerWidth() / 2, r = t.offset().top + t.outerHeight() + 7, _ = a - n, o = 15, s = "auto", l = !1;
a + n > e ? (_ = "auto", s = o, l = !0, this.domHelper.$pointer.css({
right:e - a - o - 6 + "px",
left:"auto"
})) :o > a - n && (_ = o, s = "auto", l = !0, this.domHelper.$pointer.css({
left:a - o + "px",
right:"auto"
})), this.domHelper.$parent.css({
left:_,
right:s,
top:r
}), l || this.domHelper.$pointer.attr("style", ""), _r_();
},
_getSelectedText:function() {
_i_("3bb:ffa30489");
var e = "";
return "undefined" != typeof window.getSelection ? e = window.getSelection().toString() :"undefined" != typeof document.selection && "Text" == document.selection.type && (e = document.selection.createRange().text), _r_($.trim(e));
}
}), _r_();
}), B.define("company/store", function(e, t, i) {
_i_("3bb:c12469e5");
var n = e("booking-store"), a = new n(), r = B.env && B.env.b_action || "company", _ = r + "Action", o = B.env && B.env[_] && B.env[_].globals, s = e("ga-tracker");
a.initFromVar(o), a.set("b_companyname", B.env.b_companyname), a.set("b_nonsecure_hostname", B.env.b_nonsecure_hostname), a.set("b_secure_hostname", B.env.b_secure_hostname), a.set("b_domain_for_book", B.env.domain_for_book), a.set("b_query_params_with_lang", B.env.b_query_params_with_lang), a.set("b_selected_currency", B.env.b_selected_currency), a.set("fe_bbt_ga_category", s.BBToolTracker), a.set("b_reg_user_company_name", B.env.b_reg_user_company && B.env.b_reg_user_company.b_name), B.env.companyAction && a.set("b_feature_permissions", B.env.companyAction.b_feature_permissions), B.env.b_connected_user_accounts && a.set("b_connected_user_accounts", B.env.b_connected_user_accounts), i.exports = a, _r_();
}), B.define("company/functions/render", function(e, t, i) {
"use strict";
_i_("3bb:c3f4e099");
var n = e("company/store");
i.exports = function(e, t, i, a) {
_i_("3bb:9e40ec79"), a = a || {};
var i = $.extend({}, n.get(), i), r = e.html(B.jstmpl(t).render(i)).loadComponents();
return e.data("companyRenderedAlready") ? setTimeout(function() {
_i_("3bb:1b2140c7"), e.find('[data-render-focus], [data-render-focus=""]').focus(), _r_();
}, 4) :e.data("companyRenderedAlready", !0), _r_(r);
}, _r_();
}), B.define("component/company/dom-utils/autocomplete", function(e, t, i) {
_i_("3bb:3ede18ae");
var n = e("component/autocomplete"), a = e("company/utils");
i.exports = n.extend({
init:function() {
_i_("3bb:ffe75dd1"), this.data = a.nodeData(this.$el), this.data.model && (this.data.modelId ? this._model = e(this.data.model).getInstance(this.data.modelId) :this._model = e(this.data.model), this.data.listTemplate && this.render()), n.prototype.init.apply(this), _r_();
},
render:function() {
_i_("3bb:1fe4e106");
var e = a.filterObject(this.data, function(e, t) {
return _i_("3bb:79ac63991"), _r_(0 === t.indexOf("b_"));
});
this._model && $.extend(e, this._model.autocompleteLoad()), this.$el.find('[data-list], [data-list=""]').html(B.jstmpl(this.data.listTemplate).render(e)), this._model && this._model.autocompleteOpen && this.$input.on("click", function() {
_i_("3bb:af2ac487"), this._model.autocompleteOpen(), _r_();
}.bind(this)), _r_();
},
choose:function(e) {
_i_("3bb:54edfea0"), n.prototype.choose.apply(this, arguments), this._model && this._model.autocompleteChoose(e), _r_();
}
}), _r_();
}), B.define("component/company/dom-utils/autocomplete-remote", function(e, t, i) {
_i_("3bb:b24b0cad");
var n = e("component/autocomplete-core"), a = e("company/utils"), r = e("company/functions/render");
i.exports = n.extend({
init:function() {
_i_("3bb:fb41267c"), this.optionsSpec = {
delay:{
name:"delay",
type:Number,
defaultValue:300
},
model:{
name:"model",
type:String,
required:!0
},
modelId:{
name:"model-id",
type:String,
defaultValue:""
},
listTemplate:{
name:"list-template",
type:String,
required:!0
},
filterField:{
name:"b_field",
type:String,
defaultValue:"value"
},
minLength:{
name:"minlength",
type:Number,
defaultValue:2
},
useTransport:{
name:"use-transport",
type:Boolean,
defaultValue:!1
}
}, n.prototype.init.apply(this, arguments), this._tmpl_data = a.scrapeTemplateParams(this.$el), this.$el.on("click", ".js-reset", this.reset.bind(this, {
hard:!0
})), this.options.modelId ? this._model = e(this.options.model).getInstance(this.options.modelId) :this._model = e(this.options.model), _r_();
},
reset:function(e) {
_i_("3bb:94a733e5"), n.prototype.reset.apply(this, arguments), e && e.hard && this._model.reset(), _r_();
},
autocomplete:function(e) {
_i_("3bb:c9a728eb"), e = e || {}, this.highlightReset({
preserveInputValue:!0
}), this.items = [], this.$items = $({}), this.$list.empty(), clearTimeout(this.timer), this._model.abortAutocomplete(), e.fromFocus || (this.timer = setTimeout(function() {
_i_("3bb:c2548125"), this.input.value.length >= this.options.minLength && this._model.requestAutocomplete(this.input.value, this.options.filterField, this.options).then(this.render.bind(this), this.renderError.bind(this)).finishChain(), _r_();
}.bind(this), this.options.delay)), this.postAutocomplete(), _r_();
},
renderError:function(e) {
throw _i_("3bb:748e7168"), new Error(e);
},
render:function(e) {
if (_i_("3bb:68d9ab42"), !this.$input.is(":focus")) return _r_();
this.items = this._formatResult(e), this._render({
items:this.items
}), this.$items = this.$list.find('[data-list-item=""]'), this.postAutocomplete(), _r_();
},
_formatResult:function(e) {
return _i_("3bb:9259f0c4"), e.forEach(function(e) {
_i_("3bb:32213d62"), e.value = e[this.options.filterField], e.valueLowerCase = e.value.toLowerCase(), _r_();
}.bind(this)), _r_(e);
},
_render:function(e) {
return _i_("3bb:9e133992"), _r_(r(this.$list, this.options.listTemplate, $.extend({}, this._tmpl_data, e)));
},
getListLength:function() {
return _i_("3bb:ba1fa12f"), _r_(n.prototype.getListLength.apply(this, arguments) || 1);
},
choose:function(e) {
_i_("3bb:8da8d04f"), n.prototype.choose.apply(this, arguments), this._model.autocompleteChoose(e), _r_();
}
}), _r_();
}), B.define("component/company/dom-utils/component-with-data", function(e, t, i) {
_i_("3bb:2c69d23a");
var n = e("component"), a = e("utils");
i.exports = n.extend({
init:function() {
_i_("3bb:25a1130e"), this.data = {};
var e = a.nodeData(this.$el);
for (var t in e) e.hasOwnProperty(t) && (this.data[t] = e[t]);
_r_();
}
}), _r_();
}), B.define("component/company/dom-utils/toggle", function(e, t, i) {
"use strict";
_i_("3bb:88abe5ee");
var n = e("component/company/dom-utils/component-with-data"), a = e("company/functions/render"), r = e("company/utils");
return _r_(n.extend({
init:function() {
_i_("3bb:c55705a7"), n.prototype.init.call(this), this._open = null, this.options = this.data, this.options.model && (this.options.modelId ? this._model = e(this.options.model).getInstance(this.options.modelId) :this._model = e(this.options.model)), this._model.on("update", this.modelUpdate, this), this._model.on("dismiss", this.renderButton, this), this.options.detailEvent && this._model.on(this.options.detailEvent, this.renderDetail, this), this.options.showDetails ? this.renderDetail({
noDismiss:!0
}) :this.renderButton(), _r_();
},
unmountComponent:function() {
_i_("3bb:6a0bacbe"), this._model.off("dismiss", this.renderButton, this), this.options.detailEvent && this._model.off(this.options.detailEvent, this.renderDetail, this), _r_();
},
render:function(e, t, i) {
return _i_("3bb:53b21ade"), _r_(a(e, t, i));
},
modelUpdate:function() {
_i_("3bb:a08ce3ab"), this._open ? this.renderDetail({
force:!0
}) :this.renderButton({
force:!0
}), _r_();
},
renderDetail:function(e) {
if (_i_("3bb:20e96b25"), e = e || {}, this._open === !0 && !e.force) return _r_();
e.noDismiss || this._model.dismiss(), this._open = !0, this.render(this.$el, this.options.detail, this.getData()), _r_();
},
renderButton:function(e) {
if (_i_("3bb:7fca3571"), e = e || {}, this._open === !1 && !e.force) return _r_();
this._open = !1, this.render(this.$el, this.options.button, this.getData()).find('[data-detail-trigger=""]:not(.-disabled), [data-detail-trigger]:not(.-disabled)').bind("click", this.clickDismiss.bind(this)), _r_();
},
clickDismiss:function(e) {
_i_("3bb:a0fe649a"), e.preventDefault(), setTimeout(function() {
_i_("3bb:22471d21"), this.renderDetail(), _r_();
}.bind(this), 0), _r_();
},
getData:function() {
_i_("3bb:6e1cbc25");
var e = r.filterObject(this.data, function(e, t) {
return _i_("3bb:79ac6399"), _r_(0 === t.indexOf("b_"));
});
return _r_(this._model.load ? $.extend(e, this._model.load()) :e);
}
}));
}), B.define("component/company/employees/book-picker/book-picker-input", function(e, t, i) {
_i_("3bb:a9ab7757");
var n = e("component/autocomplete"), a = e("company/utils"), r = 100, _ = 30;
i.exports = n.extend({
init:function() {
_i_("3bb:79be2d56"), this.itemTemplate = B.jstmpl("company_employees_book_picker_employee_autocomplete_limited"), n.prototype.init.apply(this), this.options.model = this.$el.data("model"), this.options.name = this.$el.data("name"), a.assertExists(this.options, "model"), a.assertExists(this.options, "name"), this.data = a.nodeData(this.$el), this.model = e(this.data.model).getInstance(this.data.modelId), this._listLimited = this.model.b_employee_list.length > r, this.$input.attr("name") && this.$input.attr("name").split("_").length >= 3 && (this.fieldName = this.$input.attr("name").split("_")[2]), _r_();
},
loadItems:function() {
_i_("3bb:34599ed3"), this.items = [], n.prototype.loadItems.apply(this), _r_();
},
listShow:function(e) {
if (_i_("3bb:d5f3a931"), !e && 0 === this.$items.filter(".-visible").length) return _r_();
n.prototype.listShow.apply(this), _r_();
},
autocomplete:function() {
_i_("3bb:2c57d1dc"), this.$list.find(".c-autocomplete__nothing-found").remove(), this.renderItems(this.getFilteredItems()), _r_();
},
choose:function(e) {
_i_("3bb:a3073091"), n.prototype.choose.apply(this, arguments), this.model.autocompleteChoose(this._matched[e]), _r_();
},
renderItems:function(e) {
_i_("3bb:7f064cfe");
for (var t = {
b_employee_list:[]
}, i = Math.min(e.length, this._listLimited ? _ :e.length), n = 0; i > n; n++) {
var a = $.extend({
b_field_value:this.model.b_employee_list[e[n]][this.data.b_field]
}, this.model.b_employee_list[e[n]]);
t.b_employee_list.push(a);
}
if (this._listLimited && e.length > _ && (t.b_more_items = e.length - _), !e.length) return this.$list.html(""), this.listHide(), this.items = [], _r_();
this.firstItemIndex = 0, this.$list.html(this.itemTemplate.render(t)), this.$items = this.$list.find(".bbtebp__list__item"), this.listShow(), this.loadItems(), this.addItemsEventListeners(), this.calculateListHeight(), this.postAutocomplete(), _r_();
},
getFilteredItems:function() {
_i_("3bb:365c988b");
var e = this.input.value.trim().toLowerCase(), t = this.data.b_field;
return this._matched = this.model.b_employee_list.reduce(function(i, n, a) {
_i_("3bb:4546e725");
var r = n[t].toLowerCase();
return -1 !== r.indexOf(e) && i.push(a), _r_(i);
}, []), _r_(this._matched);
}
}), _r_();
}), B.define("company/employees/book-picker/model", function(e, t, i) {
_i_("3bb:1fa01c27");
var n = e("event-emitter"), a = {};
function r(e) {
_i_("3bb:48a2899f"), n.extend(this), this.id = e, this.b_employee_list = B.env.b_employee_list, _r_();
}
$.extend(r.prototype, {
load:function() {
return _i_("3bb:780a2ec0"), _r_({
b_stayer_employee_id:this.b_stayer_employee_id,
b_orgnode_id:this.b_orgnode_id,
b_firstname:this.b_firstname,
b_lastname:this.b_lastname,
b_email:this.b_email
});
},
autocompleteLoad:function() {
return _i_("3bb:a4f4f5b5"), _r_({
b_employee_list:this.b_employee_list
});
},
autocompleteChoose:function(e) {
_i_("3bb:a33eab4d"), this.b_stayer_employee_id = this.b_employee_list[e].b_id, this.b_orgnode_id = this.b_employee_list[e].b_orgnode_id, this.b_firstname = this.b_employee_list[e].b_firstname, this.b_lastname = this.b_employee_list[e].b_lastname, this.b_email = this.b_employee_list[e].b_email, this.dismiss(), _r_();
},
employeeChooseById:function(e) {
_i_("3bb:6c0e99b1"), $.each(this.b_employee_list, function(t, i) {
if (_i_("3bb:21a9a2ce"), i.b_id == e) return this.b_stayer_employee_id = this.b_employee_list[t].b_id, this.b_orgnode_id = this.b_employee_list[t].b_orgnode_id, this.b_firstname = this.b_employee_list[t].b_firstname, this.b_lastname = this.b_employee_list[t].b_lastname, this.b_email = this.b_employee_list[t].b_email, this.dismiss(), _r_(!1);
_r_();
}.bind(this)), _r_();
},
dismiss:function() {
_i_("3bb:574b540e"), this.trigger("dismiss"), _r_();
},
reset:function() {
_i_("3bb:84e8c15a"), this.b_stayer_employee_id = null, this.b_orgnode_id = null, this.b_firstname = "", this.b_lastname = "", this.b_email = "", _r_();
}
}), i.exports = {
getInstance:function(e) {
return _i_("3bb:a1255857"), a[e] || (a[e] = new r()), _r_(a[e]);
}
}, _r_();
}), B.define("company/employees/book-picker/model-remote", function(e, t, i) {
_i_("3bb:45bad649");
var n = e("event-emitter"), a = {};
function r(e) {
_i_("3bb:9be06313"), n.extend(this), this.id = e, this._items = [], this._last_xhr, _r_();
}
$.extend(r.prototype, {
_transport:e("company/server-transport"),
load:function() {
return _i_("3bb:67775a04"), _r_({
b_stayer_employee_id:this.b_stayer_employee_id,
b_orgnode_id:this.b_orgnode_id,
b_firstname:this.b_firstname,
b_lastname:this.b_lastname,
b_email:this.b_email
});
},
requestAutocomplete:function(e) {
return _i_("3bb:25734377"), this._items = [], _r_(this._transport.run("autocomplete_employees", {
query:e
}).then(function(e) {
return _i_("3bb:c11d3f05"), this._items = e.employees, _r_(this._items);
}.bind(this)));
},
autocompleteChoose:function(e) {
_i_("3bb:3a1fca4c"), this.b_stayer_employee_id = this._items[e].b_id, this.b_orgnode_id = this._items[e].b_orgnode_id, this.b_firstname = this._items[e].b_firstname, this.b_lastname = this._items[e].b_lastname, this.b_email = this._items[e].b_email, this.dismiss(), _r_();
},
abortAutocomplete:function() {
_i_("3bb:0e6b2089"), this._last_xhr && (this._last_xhr.abortXhr(), this._last_xhr = null), _r_();
},
dismiss:function() {
_i_("3bb:865eb288"), this.trigger("dismiss"), _r_();
},
reset:function() {
_i_("3bb:fe44205d"), this._items = [], this.b_stayer_employee_id = null, this.b_orgnode_id = null, this.b_firstname = "", this.b_lastname = "", this.b_email = "", _r_();
}
}), i.exports = {
getInstance:function(e) {
return _i_("3bb:18a792d0"), a[e] || (a[e] = new r()), _r_(a[e]);
}
}, _r_();
}), B.define("component/company/employees/book-picker/toggle", function(e, t, i) {
"use strict";
_i_("3bb:22cfc78a");
var n = e("component/company/dom-utils/toggle");
return _r_(n.extend({
clickDismiss:function() {
_i_("3bb:79598008"), this._model.reset(), n.prototype.clickDismiss.apply(this, arguments), _r_();
}
}));
}), B.define("company/labels/book-process/model", function(e, t, i) {
_i_("3bb:a74c1740");
var n = e("event-emitter"), a = {};
function r(e) {
_i_("3bb:dd858317"), n.extend(this), this.id = e, _r_();
}
$.extend(r.prototype, {
load:function() {
_i_("3bb:b8b91a4e");
var e = $.extend({}, this.b_label);
return e.b_bbtoollabel_list = B.env.b_bbtoollabel_list, _r_(e);
},
autocompleteLoad:function() {
return _i_("3bb:5ef274dd"), _r_({});
},
autocompleteOpen:function() {},
autocompleteChoose:function(e) {
_i_("3bb:b7d702ca"), this.b_label = B.env.b_bbtoollabel_list[e], this.dismiss(), _r_();
},
dismiss:function() {
_i_("3bb:574b540e1"), this.trigger("dismiss"), _r_();
}
}), i.exports = {
getInstance:function(e) {
return _i_("3bb:81fb6009"), a[e] || (a[e] = new r(e)), _r_(a[e]);
}
}, _r_();
}), B.define("company/utils", function(e, t, i) {
_i_("3bb:94919d9d");
var n = e("utils"), a = {
assert:function(e, t) {
if (_i_("3bb:bb931a53"), !e) throw new Error("Assertion error: " + t);
_r_();
},
filterObject:function(e, t) {
_i_("3bb:6fd52811");
var i = {};
for (var n in e) e.hasOwnProperty(n) && t(e[n], n) && (i[n] = e[n]);
return _r_(i);
},
mapObject:function(e, t) {
_i_("3bb:b192ba8b");
var i = {};
for (var n in e) e.hasOwnProperty(n) && (i[n] = t(e[n], n));
return _r_(i);
},
buildKeys:function(e) {
_i_("3bb:714f5753");
var t, i, n, a, r, _ = {};
for (t in e) e.hasOwnProperty(t) && (i = e[t], (r = /(\w+)\.(\d+)\.(\w+)/.exec(t)) ? (n = r[1], a = r[2], t = r[3], _[n] || (_[n] = []), _[n][a] || (_[n][a] = {}), _[n][a][t] = i) :_[t] = i);
return _r_(_);
},
flattenKeys:function(e, t) {
_i_("3bb:c0003c1d"), t = t || "";
var i, n, a = {};
for (i in e) if (e.hasOwnProperty(i)) if (n = e[i], n instanceof Array) for (var r = 0; r < n.length; ++r) $.extend(a, this.flattenKeys(n[r], i + "." + r + ".")); else a[t + i] = n;
return _r_(a);
},
addParams:function(e, t, i) {
_i_("3bb:844398f1"), i = i || B.env.b_query_params_delimiter;
var n = e.split("#"), a = n[0].split("?"), t = $.extend(B.tools.url.parse(a[1]), t), r = [ a[0], B.tools.url.stringify(t, i) ].join("?");
return _r_(n[1] ? [ r, n[1] ].join("#") :r);
},
removeParams:function(e, t, i) {
return _i_("3bb:8e2e9235"), i = i || B.env.b_query_params_delimiter, _r_(t.reduce(function(e, t) {
_i_("3bb:f5513444");
var n = new RegExp(t + "=[^" + i + "]*" + i + "?", "gi");
return _r_(e.replace(n, ""));
}, e));
},
scrapeTemplateParams:function(e) {
_i_("3bb:9f4926cd");
var t = n.nodeData(e), i = Object.keys(t).filter(function(e) {
return _i_("3bb:e67b4281"), _r_(e.match(/^b_/));
});
return _r_(B.tools.object.pick.apply(null, [ t ].concat(i)));
}
};
i.exports = $.extend({}, n, a), _r_();
}), B.define("company/bp/reload-on-travel-purpose-change", function(e, t, i) {
_i_("3bb:1e8dd06d");
function n() {
_i_("3bb:50bba9c8"), e("lightbox").show($(".js-change-purpose-loader"), {
bAnimation:!1,
bCloseButton:!1,
bCanScroll:!1,
opacity:.9,
customWrapperClassName:"bs2_bbtool_purpose_loader",
customMaskClassName:"bs2_bbtool_purpose_loader_mask"
}), _r_();
}
function a(e) {
_i_("3bb:3745fcfe"), n();
var t = "bp_travel_purpose=" + e.getTravelPurpose(), i = B.env.b_this_url.replace(/[;&]bp_travel_purpose=(leisure|business)/, "") + B.env.b_query_params_delimiter + t;
location.replace(i), _r_();
}
t.init = function() {
_i_("3bb:1dea265d");
var e = B.bp.Main.getModel();
$(e).bind(B.bp.bs2.Model.EventType.TRAVEL_PURPOSE_CHANGE, a.bind(null, e)), _r_();
}, _r_();
}), B.define("company/bp/hide-budgets-on-travel-purpose-change", function(e, t, i) {
_i_("3bb:859a0013");
function n(e) {
_i_("3bb:2a83abd4");
var t = e.getTravelPurpose(), i = $(".destination_budgets_notification_container");
"business" == t ? i.removeClass("g-hidden") :i.addClass("g-hidden"), _r_();
}
t.init = function() {
_i_("3bb:1dea265d1");
var e = B.bp.Main.getModel();
$(e).bind(B.bp.bs2.Model.EventType.TRAVEL_PURPOSE_CHANGE, n.bind(null, e)), _r_();
}, _r_();
}), B.define("component/company/bp/redemption-form", function(e, t, i) {
_i_("3bb:6bd5954f");
var n = e("component"), a = e("company/utils"), r = e("ga-tracker"), _ = "g-hidden", o = "how-to-pay--selected", s = "bb_loyalty_payment_option";
i.exports = n.extend({
init:function() {
if (_i_("3bb:b93c5aea"), this.data = a.nodeData(this.$el), this.data.nonRefundable) return _r_();
this._$noPaymentMethodAlert = this.$el.find(".js--loyalty-program__no-payment-method-selected"), this._$submitBtn = this.$el.find("button.bp-overview-buttons-submit"), this.$el.on("submit", this._onFormSubmit.bind(this)), this.$el.find("input[name=" + s + "]").on("change", this._onPaymentMethodSelected.bind(this)), this.$el.on("click", "[data-how-to-pay]", function(e) {
_i_("3bb:b1527255");
var t;
t = this._getPaymentMethod(), this._handleHowToPayControlClicked($(e.currentTarget)), "bb_loyalty_payment_option" !== e.target.name && this._onPaymentMethodSelected(), this._getPaymentMethod() != t && ("at_property" == this._getPaymentMethod() ? r.trackEvent(r.Rewards, "BS3", "Pay when I stay") :"online" == this._getPaymentMethod() && r.trackEvent(r.Rewards, "BS3", "Pay with rewards")), _r_();
}.bind(this)), this._isPaymentMethodSelected() || this._lockForm(), _r_();
},
_onFormSubmit:function(e) {
_i_("3bb:d8ae141d"), this._isPaymentMethodSelected() || (this._showSelectPaymentMethodAlert(), this._lockForm(), e.preventDefault()), _r_();
},
_handleHowToPayControlClicked:function(e) {
if (_i_("3bb:71773715"), !e || !e.length) return _r_();
this.$el.find("." + o).removeClass(o), e.addClass(o), this._selectPaymentMethod(e.attr("data-how-to-pay")), _r_();
},
_onPaymentMethodSelected:function() {
_i_("3bb:8e2eb278"), this._removeSubmitButtonTooltip(), this._hideSelectPaymentMethodAlert(), this._unlockForm(), this._togglePaymentMethods(), _r_();
},
_selectPaymentMethod:function(e) {
if (_i_("3bb:145237e1"), !e) return _r_();
this.$el.find("input[name=" + s + "][value=" + e + "]").prop("checked", !0), _r_();
},
_isPaymentMethodSelected:function() {
return _i_("3bb:170c5fb2"), _r_(void 0 !== this._getPaymentMethod());
},
_getPaymentMethod:function() {
return _i_("3bb:75be284c"), _r_(this.$el.find("input[name=" + s + "]:checked").val());
},
_showSelectPaymentMethodAlert:function() {
_i_("3bb:ea6f1593"), this._$noPaymentMethodAlert.removeClass(_), _r_();
},
_hideSelectPaymentMethodAlert:function() {
_i_("3bb:39165fb2"), this._$noPaymentMethodAlert.addClass(_), _r_();
},
_removeSubmitButtonTooltip:function() {
_i_("3bb:63057682");
var e = this._$submitBtn.data("component-instance-tooltip");
e && e.tooltip && e.tooltip.destroy.call(e), _r_();
},
_lockForm:function() {
_i_("3bb:4f169a14"), this.$el.attr("data-disabled", !0), _r_();
},
_unlockForm:function() {
_i_("3bb:dc87400b"), this.$el.removeAttr("data-disabled"), _r_();
},
_togglePaymentMethods:function() {
_i_("3bb:ed83b5c1");
var e = this.$el.find(".js--loyalty-program__payment"), t = this.$el.find(".js--loyalty-program__redeem");
switch (e.removeClass(_), this._getPaymentMethod()) {
case "online":
t.removeClass(_);
break;

case "at_property":
t.addClass(_);
}
_r_();
}
}), _r_();
}), B.define("component/company/bp/loyalty-program-payment", function(e, t, i) {
_i_("3bb:b4afd88b");
var n = e("component"), a = e("company/utils"), r = e("bp/store"), _ = B.utils.accounting.formatMoney;
i.exports = n.extend({
init:function() {
_i_("3bb:be8ac043"), this.data = a.nodeData(this.$el), this._$creditMessage = this.$el.find(".loyalty-program__redeem-credit__credit-message"), this._$creditcardMethod = this.$el.find(".payment-method-creditcard"), this._$paypalMethod = this.$el.find(".payment-method-paypal"), this._$idealMethod = this.$el.find(".payment-method-ideal"), this._$creditcardMethodLabel = this.$el.find(".loyalty-program__redeem-credit__cc-title"), this._creditcardMethodLabelOrigText = this._$creditcardMethodLabel.text(), this.$el.find(".loyalty-program__redeem-credit__form").component("company/bp/loyalty-program-redeem").on("change", function(e) {
_i_("3bb:15fd1c2b"), this._updateMethods(e), this._updateMessage(e), r.dispatch({
type:"UPDATE_REDEMPTION_AMOUNT",
payload:{
key:"bb_loyalty_redeem_credit_amount_formatted",
value:e.redeemAmount
}
}), _r_();
}.bind(this)), this._updateMethods(0), _r_();
},
_updateMethods:function(e) {
_i_("3bb:90bfcc5e"), e.redeemAmount <= 0 || 0 === e.remainingCost ? (this._hidePayMethod(this._$paypalMethod), this._hidePayMethod(this._$idealMethod), this._$creditcardMethod.click()) :(this._showPayMethod(this._$paypalMethod), this._showPayMethod(this._$idealMethod)), _r_();
},
_updateMessage:function(e) {
_i_("3bb:b1dec6d2");
var t = e.redeemAmount, i = e.remainingCost, n = _(e.remainingCost, this.data.userCurrency, {
precision:2
}), a = e.remainingCredit;
0 === a && this.$el.find(".loyalty-program__redeem-credit__credit-message-title").html(B.jstmpl.translations("bbt_loyalty_bp_all_credit", 0, {
b_companyname:B.env.b_companyname
})), this.$el.find(".loyalty-program__redeem-credit__credit-message-price").html(n), this.$el.find(".loyalty-program__redeem-credit__credit-message-price-part").html(n), this._$creditMessage.removeClass("full-amount"), this._$creditcardMethodLabel.text(this._creditcardMethodLabelOrigText), t && 0 === i && (this._$creditMessage.addClass("full-amount"), this._$creditcardMethodLabel.text(B.jstmpl.translations("bbt_loyalty_bp_full_no_charge_ccheader"))), this.$el.find(".loyalty-program__redeem-credit__cc-may-be-charged").toggle(!a || t / a > .9), _r_();
},
_hidePayMethod:function(e) {
_i_("3bb:4076f29e"), e.addClass("payment-method--disabled"), e.addClass("accordion__item--is-disabled"), e.find(".payment-method__toggle__radio").prop("disabled", !0), _r_();
},
_showPayMethod:function(e) {
_i_("3bb:a2620272"), e.removeClass("payment-method--disabled"), e.find(".payment-method__toggle__radio").prop("disabled", !1), e.removeClass("accordion__item--is-disabled"), _r_();
}
}), _r_();
}), B.define("component/company/bp/loyalty-program-redeem", function(e, t, i) {
_i_("3bb:e4d54d29");
var n = e("component"), a = e("company/utils"), r = e("ga-tracker"), _ = e("event-emitter"), o = B.utils.accounting.formatMoney, s = B.utils.accounting.getOptions() ? B.utils.accounting.getOptions().decimal :".", l = function(e) {
return _i_("3bb:612038a6"), _r_(o(e, "", {
precision:2
}).replace(/ /, ""));
}, c = function(e) {
if (_i_("3bb:ca00045e"), e = ("" + e).replace(/ /, ""), "," === s) return _r_(Number(e.replace(/\./g, "").replace(/,/g, ".")));
return _r_(Number(e.replace(/,/g, "")));
};
i.exports = n.extend({
init:function() {
_i_("3bb:466255e9"), _.extend(this), this.data = a.nodeData(this.$el), this.data.remainingCredit = this._toFixed2(+this.data.remainingCredit), this.data.currenciesNotMatch = this.data.currenciesNotMatch || !1, this.data.totalCostUserCurrency = this._toFixed2(+this.data.totalCostUserCurrency), this.data.totalCostHotelCurrency = this._toFixed2(+this.data.totalCostHotelCurrency), this.data.hotelCurrency = this.data.hotelCurrency || this.data.currency, this.data.userCurrency = this.data.userCurrency || this.data.currency, this.data.currencyRate = this.data.currencyRate || 1;
var e = this.$el;
this.$table = e.find(".loyalty-program__redeem-credit__table"), this.$applyMax = e.find(".loyalty-program__redeem-credit__apply-max"), this.$redeemValue = e.find(".loyalty-program__redeem-credit__redeem-value"), this.$redeemValueControl = e.find(".loyalty-program__redeem-credit__redeem-value--formatted"), this.$youPay = e.find(".loyalty-program__redeem-credit__you-pay"), this.data.currenciesNotMatch && (this.$youPayHotelCurrency = e.find(".loyalty-program__redeem-credit__you-pay--hotel-currency")), this.$applyMax.on("click", function() {
_i_("3bb:31ae28fc");
var e = Math.min(this.data.totalCostUserCurrency, this.data.remainingCredit);
this.$redeemValue.val(e), this._updateRedeemControlValue(), this.$redeemValueControl.trigger("blur"), r.trackEvent(r.Rewards, "BS3", "Use all my balance"), this.$redeemValue.trigger("change"), _r_();
}.bind(this)), this.$redeemValueControl.on("keyup change", this._updateRedeemValue.bind(this)).on("blur", this._updateRedeemControlValue.bind(this)), this.$redeemValueControl.one("keyup", r.trackEvent.bind(r, r.Rewards, "BS3", "Enter amount")), this.$redeemValue.on("change", this._setFormValidness.bind(this)).on("change", this._handleRedemptionValues.bind(this)).on("change.ga-invalid-amount", this._triggerGaEventOnInValid.bind(this)), this._setFormValidness(), this._handleRedemptionValues(!0), _r_();
},
_setFormValidness:function() {
_i_("3bb:6e153462");
var e = this._isValidValue(this.$redeemValue.val());
this.$el.toggleClass("loyalty-program__redeem-credit__form--redeem-value-error", !e), _r_();
},
_handleRedemptionValues:function(e) {
_i_("3bb:b6443223");
var t = Number(this.$redeemValue.val()) || 0, i = this._isValidValue(t) ? t :0, n = this._getRemainingCost(i);
if (e && i > this.data.totalCostUserCurrency) return this.$redeemValueControl.val(l(Number(this.data.totalCostUserCurrency))), this._handleRedemptionValues(), _r_(!0);
this._update({
redeemAmount:i,
remainingCost:n,
remainingCostHotelCurrency:this._getRemainingCost(i, !0),
remainingCredit:this._subtract(this.data.remainingCredit, i)
}), _r_();
},
_triggerGaEventOnInValid:function() {
_i_("3bb:71020066"), this._isValidValue(this.$redeemValue.val()) || (r.trackEvent(r.Rewards, "BS3", "Amount error"), this.$redeemValue.off("change.ga-invalid-amount")), _r_();
},
_updateRedeemValue:function() {
_i_("3bb:097fed7d");
var e = this.$redeemValueControl.val();
this.$redeemValue.val(c(e)), this.$redeemValue.trigger("change"), _r_();
},
_updateRedeemControlValue:function() {
_i_("3bb:1e23afc7");
var e = this.$redeemValue.val();
this.$redeemValueControl.val(l(e)), _r_();
},
_toFixed2:function(e) {
if (_i_("3bb:75754e83"), "number" != typeof e) throw "value must be number";
return _r_((100 * e).toFixed(0) / 100);
},
_getRemainingCost:function(e, t) {
_i_("3bb:e801e771");
var i = this._subtract(this.data.totalCostUserCurrency, e);
if (t && i) return _r_(this._subtract(this.data.totalCostHotelCurrency, this._convertValueToHotelCurrency(e)));
return _r_(i);
},
_convertValueToHotelCurrency:function(e) {
return _i_("3bb:63b156ae"), _r_(e / this.data.currencyRate);
},
_subtract:function(e, t) {
_i_("3bb:01962fd2");
var i = (100 * e - 100 * t).toFixed(0) / 100;
return 0 > i && (i = 0), _r_(i);
},
_isValidValue:function(e) {
if (_i_("3bb:5f8c4bf6"), isNaN(e)) return _r_(!1);
if (0 > e) return _r_(!1);
return _r_(!(e > this.data.remainingCredit));
},
_update:function(e) {
_i_("3bb:a6520733");
var t = e.remainingCost, i = e.remainingCostHotelCurrency;
this.$youPay.html(o(t, this.data.userCurrency, {
precision:2
})), this.data.currenciesNotMatch && this.$youPayHotelCurrency.html(o(i, this.data.hotelCurrency, {
precision:2
})), this.trigger("change", e), _r_();
}
}), _r_();
}), B.SpriteAnimator = function(e, t, i, n, a, r) {
_i_("3bb:d1506920"), this.elem_ = e, this.propToAnimate_ = n || B.SpriteAnimator.Prop.BACKGROUND_POSITION, this.frameSize_ = this.normalizeSize_(t), this.spriteSize_ = this.normalizeSize_(i), this.pauseFrames_ = this.normalizePauseFrames_(a || []), this.animating_ = !1, this.framesInterval_ = B.SpriteAnimator.DEFAULT_FRAMES_INTERVAL, this.currentFrame_ = B.SpriteAnimator.DEFAULT_START_FRAME, this.framesCols_ = this.calculateFramesCols_(), this.framesRows_ = this.calculateFramesRows_(), this.framesCount_ = "number" == typeof r ? r :this.framesCols_ * this.framesRows_, this.lastRememberedTime_ = 0, this.loopTimeout_ = 0, this.eventsDispatcher_ = $(this), _r_();
}, B.SpriteAnimator.DEFAULT_FRAMES_INTERVAL = 33, B.SpriteAnimator.DEFAULT_START_FRAME = 1, B.SpriteAnimator.EventType = {
PAUSE:"pause"
}, B.SpriteAnimator.Prop = {
BACKGROUND_POSITION:"background_position",
POSITION:"position"
}, B.SpriteAnimator.prototype.isAnimating = function() {
return _i_("3bb:f725b83a"), _r_(this.animating_);
}, B.SpriteAnimator.prototype.play = function() {
return _i_("3bb:fb4514c9"), this.animating_ || (this.animating_ = !0, this.runLoop_()), _r_(this);
}, B.SpriteAnimator.prototype.pause = function() {
return _i_("3bb:04ef9d7a"), this.animating_ && (this.animating_ = !1, clearTimeout(this.loopTimeout_), this.eventsDispatcher_.trigger(B.SpriteAnimator.EventType.PAUSE)), _r_(this);
}, B.SpriteAnimator.prototype.rewind = function() {
return _i_("3bb:837932be"), clearTimeout(this.loopTimeout_), this.currentFrame_ = B.SpriteAnimator.DEFAULT_START_FRAME, this.drawElem_(), this.animating_ && this.runLoop_(), _r_(this);
}, B.SpriteAnimator.prototype.moveToFrame = function(e) {
return _i_("3bb:3a778ecf"), this.throwErrorIfFrameIsInvalid_(e), this.moveToFrame_(e), _r_(this);
}, B.SpriteAnimator.prototype.getCurrentFrame = function() {
return _i_("3bb:43c7f516"), _r_(this.currentFrame_);
}, B.SpriteAnimator.prototype.getFramesCount = function() {
return _i_("3bb:ff9a64ba"), _r_(this.framesCount_);
}, B.SpriteAnimator.prototype.getFramesInterval = function() {
return _i_("3bb:8c3cd523"), _r_(this.framesInterval_);
}, B.SpriteAnimator.prototype.setFramesInterval = function(e) {
_i_("3bb:e716ecf7"), this.framesInterval_ = e, _r_();
}, B.SpriteAnimator.prototype.getPauseFrames = function() {
return _i_("3bb:0e5d3077"), _r_(this.pauseFrames_);
}, B.SpriteAnimator.prototype.setPauseFrames = function(e) {
_i_("3bb:ab78011c"), this.pauseFrames_ = e, _r_();
}, B.SpriteAnimator.prototype.runLoop_ = function() {
_i_("3bb:7f64a17f");
var e = this;
this.loopTimeout_ = setTimeout(function() {
_i_("3bb:90a32c6b"), e.runLoop_(), _r_();
}, 5);
var t = new Date().getTime();
this.lastRememberedTime_ <= t && (this.moveToNextFrame_(), this.lastRememberedTime_ = t + Math.abs(this.framesInterval_)), _r_();
}, B.SpriteAnimator.prototype.moveToNextFrame_ = function() {
_i_("3bb:b422e3c6");
var e = this.framesInterval_ > 0 ? 1 :-1, t = this.currentFrame_ + e;
t > this.framesCount_ && (t = 1), 1 > t && (t = this.framesCount_), this.moveToFrame(t), _r_();
}, B.SpriteAnimator.prototype.moveToFrame_ = function(e) {
_i_("3bb:108a7b48"), this.currentFrame_ = e, this.drawElem_(), -1 !== $.inArray(this.currentFrame_, this.pauseFrames_) && this.pause(), _r_();
}, B.SpriteAnimator.prototype.drawElem_ = function() {
_i_("3bb:cc5ae406");
var e = this.getFramePosition_(this.currentFrame_);
this.propToAnimate_ === B.SpriteAnimator.Prop.BACKGROUND_POSITION ? this.elem_.css("background-position", -e.left + "px " + (-e.top + "px")) :this.propToAnimate_ === B.SpriteAnimator.Prop.POSITION && (1 !== this.framesCols_ && this.elem_.css("left", -e.left), 1 !== this.framesRows_ && this.elem_.css("top", -e.top)), _r_();
}, B.SpriteAnimator.prototype.getFramePosition_ = function(e) {
_i_("3bb:d8150134"), this.throwErrorIfFrameIsInvalid_(e);
var t = Math.ceil(e / this.framesCols_), i = (e - 1) % this.framesCols_ + 1;
return _r_({
left:(i - 1) * this.frameSize_.width,
top:(t - 1) * this.frameSize_.height
});
}, B.SpriteAnimator.prototype.calculateFramesCols_ = function() {
return _i_("3bb:da2e767a"), _r_(0 !== this.frameSize_.width && 0 !== this.spriteSize_.width ? Math.floor(this.spriteSize_.width / this.frameSize_.width) :1);
}, B.SpriteAnimator.prototype.calculateFramesRows_ = function() {
return _i_("3bb:375d2e61"), _r_(0 !== this.frameSize_.height && 0 !== this.spriteSize_.height ? Math.floor(this.spriteSize_.height / this.frameSize_.height) :1);
}, B.SpriteAnimator.prototype.normalizeSize_ = function(e) {
return _i_("3bb:dc6a28bf"), _r_({
width:"number" == typeof e.width ? e.width :0,
height:"number" == typeof e.height ? e.height :0
});
}, B.SpriteAnimator.prototype.normalizePauseFrames_ = function(e) {
return _i_("3bb:3a5c85cf"), _r_(goog.isNumber(e) ? [ e ] :e);
}, B.SpriteAnimator.prototype.throwErrorIfFrameIsInvalid_ = function(e) {
if (_i_("3bb:85aeb3f3"), 1 > e || e > this.framesCount_) throw Error("Frame number must be between 1 and " + this.framesCount_ + ". Found: " + e);
_r_();
}, B.define("component/ugc/text-truncate", function(e, t, i) {
_i_("3bb:ef46d6c8");
var n = e("component");
i.exports = n.extend({
init:function() {
if (_i_("3bb:fa41f741"), this.$truncate = function() {
return _i_("3bb:80ef761a"), _r_(this.$el.attr("data-truncate-content") ? this.$el :this.$el.find("[data-truncate-content]"));
}.call(this), "book" === B.env.b_action && this.$truncate.show(), 0 === this.$truncate.length) return _r_();
if (this.options = {
limit:parseInt(this.$el.attr("data-truncate-size") || 50, 10),
sufix:this.$el.attr("data-truncate-sufix") || " ..."
}, this.fullText = this.$truncate.html(), this.truncatedText = this._getTruncatedText(this.fullText, this.options.limit), this.$truncate.attr("data-dont-truncate-to-zero") && 0 === this.truncatedText.length) return _r_();
if (this.options.limit >= this.fullText.length) return _r_();
this.$expand = this.$el.find("[data-truncate-expand]"), this._truncateText(this.fullText, this.options.limit, this.options.sufix), this.$expand.length > 0 && (this.$expand.removeClass("g-hidden"), this._attachEvents()), _r_();
},
_getTruncatedText:function(e, t) {
return _i_("3bb:1dc2a7ed"), _r_($.trim(e).substring(0, t).split(" ").slice(0, -1).join(" "));
},
_truncateText:function(e, t, i) {
_i_("3bb:0565283e"), this.$truncate.html(this.truncatedText + i), _r_();
},
_attachEvents:function() {
_i_("3bb:5f8276fb"), this.$expand.click(this._onExpandClick.bind(this)), _r_();
},
_onExpandClick:function(e) {
_i_("3bb:5f489d43"), e.preventDefault(), this.$expand.addClass("g-hidden"), this.$truncate.html(this.fullText), _r_();
}
}), _r_();
}), booking.define("squeak", function() {
"use strict";
_i_("3bb:fdba83f8");
var e = 10, t = !1, i = [], n = {};
function a() {
_i_("3bb:068737cb"), i.length ? setTimeout(_, 1e3) :t = !1, _r_();
}
function r(a) {
if (_i_("3bb:3c0bc2e3"), n.hasOwnProperty(a) || (n[a] = 0), ++n[a] > e) return _r_();
if (i.push(a), t) return _r_();
t = !0, setTimeout(_, 1e3), _r_();
}
function _() {
_i_("3bb:18b82f98"), $.ajax({
url:"/squeak",
type:"GET",
success:a,
error:a,
data:{
pid:booking.env.pageview_id,
stid:booking.env.b_stid,
sqk:"1:" + i.join(",")
}
}), i = [], _r_();
}
return _r_(r);
}), booking.squeak = booking.require("squeak"), B.define("bp/get_json_data_chunks", function() {
_i_("3bb:d4f20ca5");
function e(e) {
_i_("3bb:d0969a4e");
var t = document.getElementById(e);
if (null == t || "undefined" == t) return booking.reportError(new Error("json data missing chunk:" + e), "BP json data: Page must contain json data chunk"), _r_();
return _r_(t.innerHTML);
}
function t(t) {
_i_("3bb:89208faf");
var i, n = e(t);
if (n) try {
i = JSON.parse(n);
} catch (a) {
var r = new Error(t + ": chunk parse failure - " + a.message);
throw r.stack = a.stack, r;
}
return _r_(i);
}
return _r_(function() {
_i_("3bb:b8cdfb51");
var e = {}, i = [ "bp_json_data_general_flags", "bp_json_data_general_static", "bp_json_data_guest_pii_fields", "bp_json_data_cc_abbreviations_to_value_map", "bp_json_data_stayer_contacts_list", "bp_json_data_hotel", "bp_json_data_bs2", "bp_json_data_bs3", "bp_json_data_initial_state", "bp_json_data_validation_messages" ];
return i.forEach(function(i) {
_i_("3bb:88c339c0"), e[i] = t(i), _r_();
}), _r_(e);
});
}), B.define("bp/env-split", function(e) {
_i_("3bb:514a3808");
var t, i, n = e("bp/get_json_data_chunks");
try {
i = n();
} catch (a) {
var r = new Error("Failed to collect chunks " + a.message);
throw r.stack = a.stack, booking.reportError(r, "BP json data: Page must contain json data chunk"), r;
}
return Object.keys(i).forEach(function(e) {
_i_("3bb:660f4d15"), i[e] && (t = Object.assign({}, t, i[e])), _r_();
}), _r_({
get:function(e) {
return _i_("3bb:e6839322"), _r_(e ? t[e] :null);
},
getRaw:function() {
return _i_("3bb:b627ccd9"), _r_(Object.assign({}, t));
}
});
}), B.define("bp/env-single", function(e, t, i) {
_i_("3bb:150a7109");
var n = e("jquery"), a = n("#bp_json_data");
if (0 === a.length) throw Error("BP: Page must contain #bp_json_data element holding page json data");
var r, _ = a.html();
if (!_) return _r_();
try {
r = n.parseJSON(_);
} catch (o) {
throw Error("BP. An error occurred during parsing of page json (#bookTmpl elem): " + o.message);
}
return _r_({
get:function(e) {
return _i_("3bb:0da3e4c5"), _r_(e ? r[e] :null);
},
getRaw:function() {
return _i_("3bb:317785e0"), _r_(Object.assign({}, r));
}
});
});

function getBPEnv() {
_i_("3bb:b6a05fee");
var e, t = B.require("et"), i = "HBNHFLYDFQLNWe";
if (0 == B.et.track(i)) return _r_(B.require("bp/env-single"));
e = 1 == B.et.track(i) ? "bp/env-single" :"bp/env-split";
try {
return _r_(B.require(e));
} catch (n) {
throw t.stage(i, 1), booking.reportError(n, "BP json data: An error occurred during obtaining bp/env"), n;
}
_r_();
}

B.define("bp/env", getBPEnv()), B.define("bp/credit-card-abbreviations", {
UNSELECTED:"__null__",
MASTERCARD:"mastercard",
MASTERCARD_ALT:"mc_di",
VISA:"visa",
VISA_ALT:"visa_di",
AMEX:"americanexpress",
AMEX_ALT:"amex_di",
DISCOVER:"discover",
DISCOVER_ALT:"discover_api",
DINERS_CLUB:"dinersclub",
JCB:"jcb"
}), B.define("bp/credit-card-formats", [ "bp/credit-card-abbreviations" ], function(e) {
_i_("3bb:8339a815");
var t = "xxxx xxxx xxxx xxxx";
return _r_([ {
abbr:e.MASTERCARD,
mask:t,
regex:/^5[1-5]/
}, {
abbr:e.MASTERCARD_ALT,
mask:t,
regex:/^5[1-5]/
}, {
abbr:e.VISA,
mask:t,
regex:/^4/
}, {
abbr:e.VISA_ALT,
mask:t,
regex:/^4/
}, {
abbr:e.AMEX,
mask:"xxxx xxxxxx xxxxx",
regex:/^3[47]/
}, {
abbr:e.AMEX_ALT,
mask:"xxxx xxxxxx xxxxx",
regex:/^3[47]/
}, {
abbr:e.DISCOVER,
mask:t,
regex:/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5])|64[4-9]|65)/
}, {
abbr:e.DISCOVER_ALT,
mask:t,
regex:/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5])|64[4-9]|65)/
}, {
abbr:e.DINERS_CLUB,
mask:"xxxx xxxxxx xxxx",
regex:/^(30[0-5]|36)/
}, {
abbr:e.JCB,
mask:t,
regex:/^35(2[89]|[3-8][0-9])/
} ]);
}), B.define("bp/emitter", function(e, t, i) {
_i_("3bb:372174fb");
var n = e("event-emitter");
i.exports = new n(), _r_();
}), B.define("bp/compset", function(e, t, i) {
_i_("3bb:6d991c48");
var n = e("promise"), a = {
url:"/book_compset",
template:"bp_compset",
requiredParams:[ "hid", "checkin", "checkout", "lang", "aid", "stype" ],
params:{
no_cc:1,
max:6,
lang:"en",
stype:"1"
},
onComplete:function(e) {
return _i_("3bb:c8876626"), _r_(e);
}
}, r = function(e) {
_i_("3bb:b0ae146f"), this.options = $.extend({}, a, e), _r_();
};
function _(e) {
if (_i_("3bb:fd85ee8c"), !e.hotels.length) return _r_(n.reject());
return _r_(n.resolve(B.jstmpl(this.options.template).render(e)));
}
r.prototype.fetch = function(e) {
return _i_("3bb:56cea5b8"), e = $.extend({}, this.options.params, e), this.options.requiredParams.forEach(function(t) {
if (_i_("3bb:6266e354"), !e[t]) throw new Error("bp/compset.fetch: `" + t + "` is required.");
_r_();
}), _r_(new n(function(t, i) {
_i_("3bb:87e499b9"), $.ajax({
url:this.options.url,
type:"GET",
data:e,
success:t,
error:i
}), _r_();
}.bind(this)));
}, r.prototype.render = function(e) {
return _i_("3bb:08dcfd0e"), _r_(this.fetch(e).then(this.options.onComplete).then(_.bind(this)));
}, i.exports = r, _r_();
}), B.define("bp/leaving-users-keeper", function(e, t, i) {
_i_("3bb:0a01b0e6");
var n = e("utils/debounce"), a = e("utils/scrollbar"), r = e("events"), _ = e("bp/env").get("dismiss_rlu"), o = function() {};
o.MESSAGE_DELAY = 600;
var s = {
openOnMouseLeave:!0,
openOnIdleTime:!0
};
o.prototype.init = function(e) {
if (_i_("3bb:55648531"), s = Object.assign({}, s, e), this.page_ = $(document.documentElement), this.wasDetached = !1, this.lightBoxContentBlock_ = $("[class~='" + s.light_box_content_class_name + "']"), this.lightBoxRootClass = s.light_box_root_class_name, this.customMaskClassName = s.custom_mask_class_name, 0 === this.lightBoxContentBlock_.length) return _r_();
this.lastMouseYCoords_ = [], this.lastMouseXCoords_ = [], this.messageTimeoutId_ = 0, this.lightBox_ = booking.lightbox, this.windowFocused_ = !0, this.boundShowLeavingMessage = this.showLeavingMessage_.bind(this), this.attachEvents_(), _r_();
}, o.prototype.attachEvents_ = function() {
_i_("3bb:7843509a");
var e = this;
s.openOnMouseLeave && this.page_.bind({
"mousemove.LeavingUsersKeeper":function(t) {
_i_("3bb:4d0c22cf"), e.onPageMouseMove_(t), _r_();
},
"mouseleave.LeavingUsersKeeper":$.proxy(this.onPageMouseLeave_, this)
}), s.openOnIdleTime && r.on("bp:idle:10000", this.boundShowLeavingMessage), $(window).focus(function() {
_i_("3bb:7f9eb59e"), e.windowFocused_ = !0, _r_();
}).blur(function() {
_i_("3bb:cd927c9a"), e.windowFocused_ = !1, _r_();
}), $(window).bind("resize.LeavingUsersKeeper", n(this.onPageResize_.bind(this), 100)).trigger("resize"), _r_();
}, o.prototype.detachEvents_ = function() {
_i_("3bb:1fc28762"), s.openOnMouseLeave && (this.page_.unbind(".LeavingUsersKeeper"), $(window).off(".LeavingUsersKeeper")), s.openOnIdleTime && r.off("bp:idle:10000", this.boundShowLeavingMessage), this.wasDetached = !0, _r_();
}, o.prototype.onPageMouseMove_ = function(e) {
_i_("3bb:e847bd65"), clearTimeout(this.messageTimeoutId_), this.writeMouseCoords_(e), _r_();
}, o.prototype.onPageMouseLeave_ = function() {
if (_i_("3bb:5f37030f"), this.wasMouseMoveToScrollbar_()) return _r_();
if (!this.wasMouseMoveUpwards_()) return _r_();
if (B.require("bp/change-dates-lightbox").isOpen()) return _r_();
var e = this;
clearTimeout(this.messageTimeoutId_), this.messageTimeoutId_ = setTimeout(function() {
_i_("3bb:78d484d1"), e.showLeavingMessage_("mouseleave"), _r_();
}, o.MESSAGE_DELAY), _r_();
}, o.prototype.onPageResize_ = function() {
_i_("3bb:2be2c7f8"), this.hasVerticalScrollbar = a.hasVerticalScrollbar(), this.hasHorizontalScrollbar = a.hasHorizontalScrollbar(), _r_();
}, o.prototype.showLeavingMessage_ = function(e) {
if (_i_("3bb:40bc1518"), this.wasDetached) return _r_();
if (_) return _r_();
if (3 == B.env.b_stage && "2" == B.env.auth_level) return _r_();
if (this.lightBox_.isVisible()) return _r_();
this.detachEvents_(), this.lightBox_.show(this.lightBoxContentBlock_, {
customWrapperClassName:this.lightBoxRootClass,
customMaskClassName:this.customMaskClassName,
bAnimation:!1,
hideCallBack:function() {
_i_("3bb:d59377c2"), r.trigger("bp:leaving_users_keeper:close"), B.et.customGoal("BOeaQFCFZBPKHPPNFLFQedPYT", 1), _r_();
},
addDialogStartEndText:!0,
trapFocus:!0
}), r.trigger("bp:leaving_users_keeper:open"), B.et.stage("BOeaQFCFZBPKHPPNFLFQedPYT", 1), _r_();
}, o.prototype.writeMouseCoords_ = function(e) {
_i_("3bb:60a58f53"), this.lastMouseXCoords_.push(e.pageX), this.lastMouseYCoords_.push(e.pageY), this.lastMouseXCoords_.length > 2 && this.lastMouseXCoords_.shift(), this.lastMouseYCoords_.length > 2 && this.lastMouseYCoords_.shift(), _r_();
}, o.prototype.wasMouseMoveUpwards_ = function() {
return _i_("3bb:a147e926"), _r_(this.lastMouseYCoords_.length >= 2 && this.lastMouseYCoords_[0] > this.lastMouseYCoords_[1]);
}, o.prototype.wasMouseMoveToScrollbar_ = function() {
if (_i_("3bb:6fb24242"), !this.hasVerticalScrollbar) return _r_(!1);
var e = this.lastMouseXCoords_.length;
if (2 > e) return _r_(!1);
if (this.lastMouseXCoords_[e - 1] <= this.lastMouseXCoords_[e - 2]) return _r_(!1);
var t = 30;
if (this.lastMouseXCoords_[e - 1] < $(window).width() - t) return _r_(!1);
return _r_(!0);
}, i.exports = new o(), _r_();
}), B.define("bp/special-requests", function() {
_i_("3bb:5390828b");
var e = function() {}, t = function() {
_i_("3bb:36ec8dc0");
var e = "input:checkbox";
this.$root.find(".bp_high_floor_room_special_request_holder").find(e).click(function() {
_i_("3bb:73787b93"), $(this).attr("checked") && $(this).siblings(e).removeAttr("checked"), _r_();
}), _r_();
};
return e.prototype.init = function(e) {
if (_i_("3bb:de0842ce"), this.$root = e && e.root || $(".special_requests:first"), !this.$root.length) return _r_();
t.call(this), _r_();
}, _r_(new e());
}), B.define("bp/incomplete-booking-warning", function() {
_i_("3bb:a39938ef");
var e, t = function() {}, i = $("#" + B.book.formName), n = [ "address1", "city", "zip", "phone" ], a = function() {
_i_("3bb:802c3110");
var e = {}, t = i.find("#book_credit_card .new_card, fieldset#book_credit_card").filter(":visible").length ? [ "cc_number", "cc_name" ] :[];
return i.find(n.concat(t).map(function(e) {
return _i_("3bb:aa9ce6a3"), _r_("[name=" + e + "]:visible");
}).join(", ")).each(function() {
_i_("3bb:da07dbe3");
var t = $(this);
e[t.attr("name")] = t.val(), _r_();
}), _r_(e);
}, r = function() {
_i_("3bb:271b3d89");
var t = void 0, i = a();
return Object.keys(i).forEach(function(n) {
if (_i_("3bb:bd997a2c"), i[n] && i[n] != e[n]) return t = B.env.translation_bp_warning_booking_incomplete, _r_(!1);
_r_();
}), _r_(t);
};
e = a(), t.prototype.watch = function() {
return _i_("3bb:af7e6432"), $(window).bind("beforeunload", r), _r_(!0);
}, t.prototype.unwatch = function() {
return _i_("3bb:edee6509"), $(window).unbind("beforeunload", r), _r_(!0);
};
var _ = new t();
return i.bind("submit", _.unwatch), B.eventEmitter.bind("modal:open", _.unwatch), B.eventEmitter.bind("modal:close", _.watch), _r_(_);
}), B.define("bp/growls-manager", function(e, t, i) {
_i_("3bb:d3511c18");
var n = {
startDelay:2e3,
interval:2e3,
duration:8e3,
growls:[]
}, a = {
leftToRight:"from_left_to_right",
rightToLeft:"from_right_to_left",
topToBottom:"from_top_to_bottom",
bottomToTop:"from_bottom_to_top"
}, r = 500, _ = e("jquery"), o = e("events"), s = e("jstmpl"), l = s ? s.fn.FILTERS.html :function() {
return _i_("3bb:ef9f00e6"), _r_("");
}, c = function() {};
c.prototype._renderNext = function() {
_i_("3bb:e2b5eda6");
var e = this.queue.shift(), t = this.options.interval;
this._render(e), this.renderTimeoutId = setTimeout(function() {
_i_("3bb:62a7e989"), this.queue.length > 0 ? this._renderNext() :this.renderTimeoutId = null, _r_();
}.bind(this), t), _r_();
}, c.prototype._render = function(e) {
_i_("3bb:622d90c6");
var t = "growl_" + e.id, i = t + " " + (e.extraClasses || ""), n = "", a = _.noticeAdd({
text:l(e.content),
type:i,
close:"all",
stayTime:e.duration || this.options.duration,
isAutomatic:e.isAutomatic,
textLabel:e.textLabel,
stay:!1,
wrapperClass:n
});
if (a === !1) return _r_();
var r = _("." + t);
o.trigger("bp:growl_displayed", r), _r_();
}, c.prototype._flyInGrowl = function(e, t) {
_i_("3bb:d8fbe649");
var i = {}, n = {}, o = this._getGrowlOffset(e), s = 50, l = _(window).width();
t === a.leftToRight ? (i.left = -(o.left + e.outerWidth() + s), n.left = 0) :t === a.rightToLeft ? (i.left = l - o.left + s, n.left = 0) :t === a.topToBottom ? (i.top = -(o.top + e.outerHeight() + s), n.top = 0) :t === a.bottomToTop && (i.top = l - o.top + s, n.top = 0), _.extend(i, {
opacity:1
}), e.stop(!0).css(i).animate(n, r, "easeOutBackWeaker"), _r_();
}, c.prototype._getGrowlOffset = function(e) {
_i_("3bb:94d8ac11");
var t = e.offset() || {
top:0,
left:0
}, i = _(window);
return _r_({
left:t.left - i.scrollLeft(),
top:t.top - i.scrollTop()
});
}, c.prototype.init = function(e) {
_i_("3bb:dd75ad9c"), this.options = _.extend({}, n, e), this.queue = this.options.growls.filter(function(e, t) {
return _i_("3bb:1784ae43"), _r_(e);
}).slice(0), this.options.growls = null, setTimeout(function() {
_i_("3bb:f7d33dfd"), this._renderNext(), _r_();
}.bind(this), this.options.startDelay), _r_();
}, c.prototype.addGrowlToQueue = function(e) {
if (_i_("3bb:caf68ee5"), !e) return _r_();
this.queue.push(e), this.renderTimeoutId || this._renderNext(), _r_();
}, i.exports = new c(), _r_();
}), B.define("bp/change-dates-lightbox", function(e, t, i) {
_i_("3bb:2ac26b36");
var n, a, r, _, o, s = {
wrong_checkout_date:B.jstmpl.translations("searchbox_error_msg_earlier_checkout")
}, l = e("lightbox"), c = !1;
function d(e) {
_i_("3bb:775ab131"), e.preventDefault(), l.hide();
var t = {
bOverflowVisible:!0,
bAnimation:!1,
hideCallBack:b,
trapFocus:!0,
modalLabeledById:"bp_change_dates_lightbox_title"
};
l.show(a, t), c = !0, _r_();
}
function b() {
_i_("3bb:7030e686"), c = !1, _r_();
}
function p(e, t) {
if (_i_("3bb:b0072185"), h(), !_.isCheckinCheckoutValid()) return f(s.wrong_checkout_date), e.preventDefault(), _r_(!0);
u("checkin", _.getCheckinSelector().getFullDate().string), u("checkout", _.getCheckoutSelector().getFullDate().string), u("interval", _.getInterval()), u("stage", parseInt(o.getStage(), 10) - 1), _r_();
}
function u(e, t) {
_i_("3bb:5a35f90d");
var i = $("<input type='hidden' />");
return i.attr("name", e), i.val(t), _r_(r.prepend(i));
}
function h() {
_i_("3bb:11e850ee"), a.find(".bp_change_dates_error").remove(), _r_();
}
function f(e) {
_i_("3bb:96d47d8a");
var t = a.find(".bp_change_dates_error");
t.length || (t = $("<p />", {
"class":"bp_change_dates_error"
}), $(".bp_change_dates_submit").prepend(t)), t.html(e), _r_();
}
i.exports = {
isOpen:function() {
return _i_("3bb:3b69f4b3"), _r_(c);
},
getCheckinCheckoutSelector:function() {
return _i_("3bb:9c280270"), _r_(_);
},
init:function() {
_i_("3bb:83155850"), $(".bp_change_dates_link").bind("click touchstart", function(e) {
_i_("3bb:362c18f5"), e.preventDefault(), _r_();
}), B.when({
events:"click .bp_change_dates_link"
}).load({
js:"async_bp_change_dates_js",
css:"async_bp_change_dates_css"
}).run(function() {
if (_i_("3bb:ffb54604"), n = $(".bp_change_dates_link"), a = $(".bp_change_dates_lightbox"), 0 === a.length) return _r_();
r = a.find("form");
var e = "click touchstart";
if (n.bind(e, d), B.env.b_is_tablet) return _r_();
r.bind("submit", p), _ = r.component("checkin-checkout-selector"), o = B.bp.Main.getModel(), n.click(), _r_();
}), _r_();
}
}, _r_();
}), function(e, t) {
_i_("3bb:2c607b47"), e("ga-tracker-base", function(e, t) {
_i_("3bb:a69ba23f");
function i(e, t) {
_i_("3bb:0b8e2536"), "undefined" != typeof t && ("undefined" != typeof _gaq && _gaq.push([ "_trackPageview", t ]), window.ga && window.ga("send", "pageview", t)), _r_();
}
function n(e, t, i, n, a) {
_i_("3bb:eb08ffeb"), "undefined" == typeof a && (a = 1), "undefined" != typeof e && ("undefined" != typeof _gaq && _gaq.push([ "_trackEvent", e, t, i, n, !0 ]), window.ga && window.ga("send", {
hitType:"event",
eventCategory:e,
eventAction:t,
eventLabel:i,
eventValue:n,
nonInteraction:1
})), _r_();
}
function a(e, t, i, n) {
if (_i_("3bb:4f31b963"), !window.ga) return _r_();
if ("undefined" == typeof e) return _r_();
if (!t || "string" != typeof t) return _r_();
if ("string" == typeof i && i && (i = +i), isNaN(i) || !isFinite(i)) return _r_();
if ((!n || "string" != typeof n) && void 0 !== n) return _r_();
window.ga("send", {
hitType:"timing",
timingCategory:e,
timingVar:t,
timingValue:i,
timingLabel:n
}), _r_();
}
t.trackTiming = a, t.trackEvent = n, t.trackPageview = i, _r_();
}), B.define("utils/uuid4", [], function() {
return _i_("3bb:8fea0e4e"), _r_(function() {
_i_("3bb:ee22a2af");
var e = new Date().getTime(), t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
_i_("3bb:8aa95324");
var i = (e + 16 * Math.random()) % 16 | 0;
return e = Math.floor(e / 16), _r_(("x" == t ? i :3 & i | 8).toString(16));
});
return _r_(t);
});
}), B.define("dp-tracker", function(e, t) {
_i_("3bb:8a4b5da2");
var i = B.require("utils/uuid4"), n = B.require("server-data"), a = "/postbooking_track_data", r = i(), _ = function() {
_i_("3bb:cd6f024f");
var e = navigator.sendBeacon && "function" == typeof navigator.sendBeacon;
function t(e, t) {
_i_("3bb:e5afafbd");
var i = new XMLHttpRequest();
return i.open("POST", e), i.setRequestHeader("X-Booking-CSRF", n.b_csrf_token), i.send(t), _r_(i);
}
function i(i, a) {
_i_("3bb:ae77f2b5");
var r = JSON.stringify(a);
e ? navigator.sendBeacon(i + "?bhc_csrf_token=" + n.b_csrf_token, r) :t(i, r), _r_();
}
return _r_(i);
}();
function o(e) {
_i_("3bb:69cb6b13"), s(e, r), _r_();
}
function s(e, t) {
_i_("3bb:3af8a115");
var i = {
event_name:"Dimension",
event_data:e,
dimension_group:[ t ]
};
_(a, i), _r_();
}
function l(e, t, i, n, o) {
_i_("3bb:ce033cfd");
var s = {
hitType:e
};
i && (s.eventAction = i), t && (s.eventCategory = t), n && (s.eventLabel = n), o && (s.eventValue = o);
var l = {
event_name:"Hit",
event_data:s,
dimension_group:[ r ]
};
_(a, l), _r_();
}
t.setDimension = o, t.track = l, _r_();
}), e("ga-tracker", function(e, t) {
_i_("3bb:125648cb");
var i = e("promise"), n = e("dp-tracker"), a = e("ga-tracker-base"), r = new i(function(e, t) {
_i_("3bb:1e2182fe"), window.booking = window.booking || {}, window.__ga_tracker_set_page_as_tracked__ = e, _r_();
});
function _() {
_i_("3bb:6a3bb694");
var e = arguments;
r.then(function() {
_i_("3bb:92ec20e6"), a.trackTiming.apply(null, e), _r_();
}), _r_();
}
function o() {
_i_("3bb:2405f110");
var e = arguments;
r.then(function() {
_i_("3bb:1664453a"), a.trackEvent.apply(null, e), _r_();
}), _r_();
}
function s() {
_i_("3bb:74d3246e");
var e = arguments[5], t = e && e.indexOf("dp") > -1;
if (t) {
var i = Array.prototype.slice.call(arguments);
i.splice(0, 0, "event"), n.track.apply(n, i);
}
return _r_(a.trackEvent.apply(this, arguments));
}
t.errorTracker = "Error", t.clickTracker = "Click", t.changeTracker = "Change", t.hoverTracker = "Hover", t.mapTracker = "Map", t.pageviewTracker = "Pageview", t.viewTracker = "View", t.cityTracker = "City", t.groupTracker = "Group", t.cardTracker = "Credit Card", t.comparisonTracker = "Hotel Comparison", t.userProfileTracker = "User profile", t.bookProcessTracker = "Book process", t.bookingProcessTracker = "Booking Process", t.hotelPageTracker = "Hotel Page", t.reviewSearchTracker = "Review search", t.BBToolTracker = "Business Bookers Tool", t.TripPlannerTracker = "Trip Planner", t.growlTracker = "Growl", t.WebMessagingTracker = "Web Messaging", t.SearchResultsTracker = "Search Results", t.SearchResultsCardClickEventsTracker = "Search Results Card Click Event", t.SearchResultsCardHoverEventsTracker = "Search Results Card Hover Event", t.SearchResultsFilterTracker = "Filter", t.SearchResultsFilterMapTracker = "Filter - Map", t.articlesTracker = "Articles", t.DSFTracker = "DSF", t.ugcdTracker = "UGC Review Page", t.ugccDestinationTracker = "Destination UGC", t.ugccPropertyTracker = "Property UGC", t.assistantTracker = "Messaging V2", t.referralAdvocateTracker = "Referral - Advocate", t.referralPartnerAdvocateTracker = "Referral Partner - Advocate", t.referralFriendTracker = "Referral - Friend", t.webViralityTracker = "Web Virality", t.Rewards = "Rewards", t.SearchBoxTracker = "Searchbox", t.travelGuide = "TravelGuide", t.paymentForm = "Checkout Form", t.communityTracker = "Communities", t.TIMING = {}, t.TIMING.PERFORMANCE = "Browser Performance", t.trackEvent = s, t.trackEventAfterPageview = o, t.trackTiming = _, t.trackPageview = a.trackPageview, t.pageviewIsTracked = function() {
return _i_("3bb:1f0b3c6d"), _r_(r);
}, _r_();
}), _r_();
}(B.define, B.require), B.define("bp/ga-tracker/actions", function(e, t, i) {
_i_("3bb:0a37354b"), i.exports = {
VALIDATION_ERRORS:"Validation Errors",
INLINE_VALIDATION_ERRORS:"Inline Validation Errors",
PRICE_DETAILS_BLOCK:"Price Details Block",
HOTEL_DETAILS_BLOCK:"Hotel Details Block",
SPECIAL_REQUESTS_BLOCK:"Special Requests Block",
PERSONAL_DETAILS_BLOCK:"Personal Details Block",
ETA_BLOCK:"ETA Block",
ETA_BLOCK_IN:"ETA Block - In",
ETA_BLOCK_OUT:"ETA Block - Out",
ROOM_DETAILS_BLOCK:"Room Details Block",
ADDRESS_BLOCK:"Address Block",
PAYMENT_BLOCK:"Payment Block",
SUBMISSION_BLOCK:"Submission Block",
IDLE_TIME:"Idle Time",
RLU:"Retain Leaving Users Modal",
FORM_COMPLETION:"Form Completion",
CONTEXTUAL_SURVEY:"Contextual survey"
}, _r_();
}), B.define("bp/ga-tracker/events", function(e, t, i) {
_i_("3bb:c39057e2");
var n = e("bp/ga-tracker/actions"), a = {};
a[n.VALIDATION_ERRORS] = e("bp/ga-tracker/events/validation-errors"), a[n.INLINE_VALIDATION_ERRORS] = e("bp/ga-tracker/events/inline-validation-errors"), a[n.HOTEL_DETAILS_BLOCK] = e("bp/ga-tracker/events/hotel-details-block"), a[n.ROOM_DETAILS_BLOCK] = e("bp/ga-tracker/events/room-details-block"), a[n.ETA_BLOCK] = e("bp/ga-tracker/events/eta-block"), a[n.ETA_BLOCK_IN] = e("bp/ga-tracker/events/eta-block-in"), a[n.ETA_BLOCK_OUT] = e("bp/ga-tracker/events/eta-block-out"), a[n.IDLE_TIME] = e("bp/ga-tracker/events/idle-time"), a[n.RLU] = e("bp/ga-tracker/events/rlu"), a[n.SUBMISSION_BLOCK] = e("bp/ga-tracker/events/submission-block"), a[n.FORM_COMPLETION] = e("bp/ga-tracker/events/form-completion"), a[n.CONTEXTUAL_SURVEY] = e("bp/ga-tracker/events/contextual-survey"), i.exports = a, _r_();
}), B.define("bp/ga-tracker/events/validation-errors", function(e, t, i) {
_i_("3bb:bc2d575e"), i.exports = [ {
label:"BE - Personal Details - Title",
trigger:"presence .js-bp-ga__validation-personal__title"
}, {
label:"BE - Personal Details - Last Name",
trigger:"presence .js-bp-ga__validation-personal__lastname"
}, {
label:"BE - Personal Details - Last Name",
trigger:"presence .js-bp-ga__validation-personal__firstname"
}, {
label:"BE - Personal Details - Email",
trigger:"presence .js-bp-ga__validation-personal__email"
}, {
label:"BE - Personal Details - Email Confirm",
trigger:"presence .js-bp-ga__validation-personal__email-confirm"
}, {
label:"BE - Personal Details - Password",
trigger:"presence .js-bp-ga__validation-personal__password"
}, {
label:"BE - Personal Details - Checkin ETA",
trigger:"presence .js-bp-ga__validation-personal__checkin_eta"
}, {
label:"BE - Address Details - Address",
trigger:"presence .js-bp-ga__validation-address__address"
}, {
label:"BE - Address Details - City",
trigger:"presence .js-bp-ga__validation-address__city"
}, {
label:"BE - Address Details - ZIP",
trigger:"presence .js-bp-ga__validation-address__zip"
}, {
label:"BE - Address Details - Country",
trigger:"presence .js-bp-ga__validation-address__country"
}, {
label:"BE - Address Details - Phone",
trigger:"presence .js-bp-ga__validation-address__phone"
}, {
label:"BE - Payment Details - CC Type",
trigger:"presence .js-bp-ga__validation-payment__cc-type"
}, {
label:"BE - Payment Details - CC Number",
trigger:"presence .js-bp-ga__validation-payment__cc-number"
}, {
label:"BE - Payment Details - CC Name",
trigger:"presence .js-bp-ga__validation-payment__cc-name"
}, {
label:"BE - Payment Details - CC Date",
trigger:"presence .js-bp-ga__validation-payment__cc-date"
}, {
label:"BE - Payment Details - CC Terms",
trigger:"presence .js-bp-ga__validation-payment__cc-terms"
}, {
label:"BE - Payment Details - CC CVC",
trigger:"presence .js-bp-ga__validation-payment__cc-cvc"
}, {
label:"BE - Payment Details - CC Issue Number",
trigger:"presence .js-bp-ga__validation-payment__cc-issue-number"
}, {
label:"BE - Citizenship",
trigger:"presence .js-bp-ga__validation-citizenship"
}, {
label:"BE - Captcha",
trigger:"presence .js-bp-ga__validation-captcha"
}, {
label:"BE - Travel Purpose",
trigger:"presence .js-bp-ga__validation-personal__travel_purpose"
} ], _r_();
}), B.define("bp/ga-tracker/events/hotel-details-block", function(e, t, i) {
_i_("3bb:6462012e"), i.exports = [ {
label:"Photo Gallery - Hover",
trigger:"hover .bp_hotel_details_holder .bp_hotel_gallery"
}, {
label:"Photo Gallery - Click",
trigger:"click .bp_hotel_details_holder .bp_hotel_gallery"
}, {
label:"Hotel Name - Click",
trigger:"click .bp_hotel_details_holder .bp_hotel_name"
}, {
label:"Hotel Address - Hover",
trigger:"hover .bp_hotel_details_holder .hotel-address-text"
}, {
label:"Hotel Address - Click",
trigger:"click .bp_hotel_details_holder .hotel-address-text"
}, {
label:"Change Dates Button - Click",
trigger:"click .bp_hotel_details_holder .bp_change_dates_link"
}, {
label:"Hotel parking - Hover",
trigger:"hover .bp_hotel_details_holder .fe_bp_parking_badge"
} ], _r_();
}), B.define("bp/ga-tracker/events/room-details-block", function(e, t, i) {
_i_("3bb:9c689432"), i.exports = [ {
label:"Guests Number - Change",
trigger:"change .bp_room_details_holder .bp_bs2_guest_dropdown"
} ], _r_();
}), B.define("bp/ga-tracker/events/eta-block", function(e, t, i) {
_i_("3bb:c193fb7d");
var n = e("bp/env"), a = parseInt(n.get("checkinTimeFrom"), 10), r = parseInt(n.get("checkinTimeUntil"), 10), _ = parseInt(n.get("checkinEtaHour"), 10), o = parseInt(n.get("etaIntervalSize"), 10), s = _ + o;
a > _ && s > a ? s = a :_ > a && r > _ && s > r && (s = r);
var l = function(e) {
if (_i_("3bb:5ab71272"), e >= 24) return _r_(l(e - 24));
if (10 > e) return _r_("0" + e);
return _r_("" + e);
};
i.exports = [ {
label:"Option change",
trigger:'change [name="checkin_eta_hour"]'
}, {
label:"I don't know",
trigger:3 === B.env.b_stage && -1 === _
}, {
label:l(_) + ":00 - " + l(s) + ":00" + (_ >= 24 ? " (next day)" :""),
trigger:3 === B.env.b_stage && _ >= 0 && 25 >= _
} ], _r_();
}), B.define("bp/ga-tracker/events/eta-block-in", function(e, t, i) {
_i_("3bb:f5219e7c");
var n = e("bp/env"), a = parseInt(n.get("checkinTimeFrom"), 10), r = parseInt(n.get("checkinTimeUntil"), 10), _ = 0 == r ? 24 :r, o = parseInt(n.get("checkinEtaHour"), 10), s = parseInt(n.get("etaIntervalSize"), 10), l = o + s, c = 1 == n.get("has24hrFrontdesk") || isNaN(r);
a > o && l > a ? l = a :o > a && r > o && l > r && (l = r);
var d = function(e) {
if (_i_("3bb:d4ddaff6"), 10 > e) return _r_("0" + e);
return _r_("" + e);
};
i.exports = [ {
label:d(o) + "00-" + d(l) + "00|" + d(a) + "00-" + (c ? "9999" :d(r) + "00"),
trigger:3 === B.env.b_stage && o > -1 && o >= a && (c || _ >= l)
} ], _r_();
}), B.define("bp/ga-tracker/events/eta-block-out", function(e, t, i) {
_i_("3bb:5e1f44f5");
var n = e("bp/env"), a = parseInt(n.get("checkinTimeFrom"), 10), r = parseInt(n.get("checkinTimeUntil"), 10), _ = 0 == r ? 24 :r, o = parseInt(n.get("checkinEtaHour"), 10), s = parseInt(n.get("etaIntervalSize"), 10), l = o + s, c = 1 == n.get("has24hrFrontdesk") || isNaN(r);
a > o && l > a ? l = a :o > a && r > o && l > r && (l = r);
var d = function(e) {
if (_i_("3bb:d4ddaff61"), 10 > e) return _r_("0" + e);
return _r_("" + e);
};
i.exports = [ {
label:d(o) + "00-" + d(l) + "00|" + d(a) + "00-" + (c ? "9999" :d(r) + "00"),
trigger:3 === B.env.b_stage && o > -1 && (a > o || !c && l > _)
} ], _r_();
}), B.define("bp/ga-tracker/events/idle-time", function(e, t, i) {
_i_("3bb:0c4dcafa");
var n = B.env.b_stage;
if ("tdot" === B.env.b_site_type) return i.exports = [], _r_([]);
i.exports = [ 5e3, 1e4, 15e3, 2e4, 25e3, 3e4, 35e3, 4e4, 45e3, 5e4, 55e3, 6e4, 75e3, 9e4, 105e3, 12e4, 15e4, 18e4, 21e4, 24e4, 3e5, 36e4, 42e4, 48e4, 54e4, 6e5 ].map(function(e) {
return _i_("3bb:f1c3c683"), _r_({
label:"BS" + n + ": " + e + "ms",
trigger:"event idle:" + e
});
}), _r_();
}), B.define("bp/ga-tracker/events/rlu", function(e, t, i) {
_i_("3bb:356659c3"), i.exports = [ {
label:"Close",
trigger:"event leaving_users_keeper:close"
} ], _r_();
}), B.define("bp/ga-tracker/events/submission-block", function(e, t, i) {
_i_("3bb:393a292c"), i.exports = [ {
label:"Check Your Booking - Click",
trigger:"click .bp-overview-buttons-open-overview"
} ], _r_();
}), B.define("bp/ga-tracker/events/form-completion", function(e, t, i) {
_i_("3bb:e6578efa"), i.exports = [ {
label:"Form - submit (temp)",
trigger:"submit #bookForm"
}, {
label:"Title - change",
trigger:"change .bp_form__field--title .bp_form__field__input"
}, {
label:"First name - input",
trigger:"input .bp_form__field--firstname .bp_form__field__input"
}, {
label:"Last name - input",
trigger:"input .bp_form__field--lastname .bp_form__field__input"
}, {
label:"Email - input",
trigger:"input .bp_form__field--email .bp_form__field__input"
}, {
label:"Email confirmation - input",
trigger:"input .bp_form__field--email_confirm .bp_form__field__input"
}, {
label:"Password - input",
trigger:"input #optional_password"
}, {
label:"Guest name - input",
trigger:"input .guest-name-input"
}, {
label:"Guest email - input",
trigger:"input .guest-email-input"
}, {
label:"Addon - change",
trigger:"change .uf_checkbox input"
}, {
label:"Special requests remarks - input",
trigger:"input #remarks"
}, {
label:"ETA - change",
trigger:"change .eta_holder select"
}, {
label:"Address - input",
trigger:"input .bp_form__field--address .bp_form__field__input"
}, {
label:"City - input",
trigger:"input .bp_form__field--city .bp_form__field__input"
}, {
label:"ZIP - input",
trigger:"input .bp_form__field--zip .bp_form__field__input"
}, {
label:"Country - change",
trigger:"change .bp_form__field--country .bp_form__field__input"
}, {
label:"Phone - input",
trigger:"input .bp_form__field--phone .bp_form__field__input"
}, {
label:"CC number - input",
trigger:"input #cc_number"
}, {
label:"CC type - change",
trigger:"change #cc_type"
}, {
label:"CC month - change",
trigger:"change #cc_month"
}, {
label:"CC year - change",
trigger:"change #ccYear"
}, {
label:"CC CVC - input",
trigger:"input #cc_cvc"
}, {
label:"CC name - input",
trigger:"input #cc_name"
}, {
label:"Addons fake - click - Resort Credit",
trigger:"click .resort_credit_addon"
}, {
label:"Addons fake - click - Guides",
trigger:"click .guides_addon"
}, {
label:"Addons fake - click - My Booking",
trigger:"click .my_booking_addon"
}, {
label:"Addons fake - click - Meal plan",
trigger:"click .meal_plan_addon"
}, {
label:"Addons fake - click - Attractions pass",
trigger:"click .attr_pass_addon"
}, {
label:"Addons - remove - Bike rentals",
trigger:"change .uf_addon_type_bike input:checked"
}, {
label:"Addons - add - Bike rentals",
trigger:"change .uf_addon_type_bike input:not(:checked)"
}, {
label:"Cross sell - remove - Amsterdam attractions pass",
trigger:"change input#ams_attractions:checked"
}, {
label:"Cross sell - add - Amsterdam attractions pass",
trigger:"change input#ams_attractions:not(:checked)"
}, {
label:"Cross sell - remove - Taxi",
trigger:"change input#bbse_taxi:checked"
}, {
label:"Cross sell - add - Taxi",
trigger:"change input#bbse_taxi:not(:checked)"
}, {
label:"Cross sell - remove - Car rental",
trigger:'change input[name="interested_car_rentals"]:checked'
}, {
label:"Cross sell - add - Car rental",
trigger:'change input[name="interested_car_rentals"]:not(:checked)'
}, {
label:"Cross sell - remove - Uber",
trigger:"change input#uber_travel_pass__input:checked"
}, {
label:"Cross sell - add - Uber",
trigger:"change input#uber_travel_pass__input:not(:checked)"
}, {
label:"Complete Booking",
trigger:"click .bp-overview-buttons-submit"
} ], _r_();
}), B.define("bp/ga-tracker/events/contextual-survey", function(e, t, i) {
_i_("3bb:bfb587d0"), i.exports = [ {
label:"Are you missing any information needed to make this booking? - Yes",
trigger:'click .bp-feedback-loop span[data-model="missing_info"]'
}, {
label:"Are you missing any information needed to make this booking? - No",
trigger:'click .bp-feedback-loop span[data-model="not_missing_info"]'
} ], _r_();
}), B.define("bp/ga-tracker/events/inline-validation-errors", function(e, t, i) {
_i_("3bb:f2b879e4"), i.exports = [ {
label:"FE - Personal Details - Title",
trigger:"event inline_validation_error_title"
}, {
label:"FE - Personal Details - Last Name",
trigger:"event inline_validation_error_lastname"
}, {
label:"FE - Personal Details - First Name",
trigger:"event inline_validation_error_firstname"
}, {
label:"FE - Personal Details - Email",
trigger:"event inline_validation_error_email"
}, {
label:"FE - Personal Details - Email Confirm",
trigger:"event inline_validation_error_email_confirm"
}, {
label:"FE - Personal Details - Password",
trigger:"event inline_validation_error_password"
}, {
label:"FE - Address Details - Address",
trigger:"event inline_validation_error_address1"
}, {
label:"FE - Address Details - City",
trigger:"event inline_validation_error_city"
}, {
label:"FE - Address Details - ZIP",
trigger:"event inline_validation_error_zip"
}, {
label:"FE - Address Details - Country",
trigger:"event inline_validation_error_cc1"
}, {
label:"FE - Address Details - Phone",
trigger:"event inline_validation_error_phone"
}, {
label:"FE - Payment Details - CC Type",
trigger:"event inline_validation_error_cc_type"
}, {
label:"FE - Payment Details - CC Number",
trigger:"event inline_validation_error_cc_number"
}, {
label:"FE - Payment Details - CC Name",
trigger:"event inline_validation_error_cc_name"
}, {
label:"FE - Payment Details - CC Month",
trigger:"event inline_validation_error_cc_month"
}, {
label:"FE - Payment Details - CC Year",
trigger:"event inline_validation_error_cc_year"
}, {
label:"FE - Payment Details - CC CVC",
trigger:"event inline_validation_error_cc_cvc"
} ], _r_();
}), B.define("bp/dispatcher", function(e, t, i) {
_i_("3bb:3c51ee46");
var n = e("flux/dispatcher");
i.exports = new n(), _r_();
}), B.define("bp/dom-setup", function(e, t, i) {
_i_("3bb:1b8a5220"), $(document.documentElement).removeClass("no-js").addClass("hasJS"), _r_();
}), B.define("bp/store", function(e, t, i) {
_i_("3bb:b1cd2bd4");
var n = e("reducer-store"), a = new n(r);
function r(e, t) {
switch (_i_("3bb:5d63e8eb"), e = e || {}, t.type) {
case "INIT":
return _r_(t.payload);

default:
return _r_({
main_form:_(e.main_form, t),
validation:c(e.validation, t),
business_address:o(e.business_address, t),
personal_address:s(e.personal_address, t),
selected_bbtool_billing_address:l(e.selected_bbtool_billing_address, t),
rooms:b(e.rooms, t),
rooms_guests_total:p(e, t),
bb_loyalty_redeem_credit_amount_formatted:u(e.bb_loyalty_redeem_credit_amount_formatted, t),
bp_travel_purpose:h(e.bp_travel_purpose, t),
payment_cc_details:f(e.payment_cc_details, t)
});
}
_r_();
}
function _(e, t) {
switch (_i_("3bb:1617936e"), e = e || {}, t.type) {
case "UPDATE_MAIN_FORM":
var i = Object.assign({}, e);
return i[t.payload.key] = t.payload.value, _r_(i);

default:
return _r_(e);
}
_r_();
}
function o(e, t) {
switch (_i_("3bb:1ea5b580"), e = e || {}, t.type) {
case "UPDATE_BUSINESS_ADDRESS":
return _r_(Object.assign({}, e, t.payload));

default:
return _r_(e);
}
_r_();
}
function s(e, t) {
switch (_i_("3bb:f91df936"), e = e || {}, t.type) {
case "UPDATE_PERSONAL_ADDRESS":
return _r_(Object.assign({}, e, t.payload));

default:
return _r_(e);
}
_r_();
}
function l(e, t) {
switch (_i_("3bb:be71513a"), e = e || "", t.type) {
case "CHANGE_BBTOOL_BILLING_ADDRESS":
return _r_(t.payload);

default:
return _r_(e);
}
_r_();
}
function c(e, t) {
return _i_("3bb:49e7dfcb"), e = e || {
fields:[],
valid:!1
}, _r_({
fields:d(e.fields, t),
valid:e.valid
});
}
function d(e, t) {
switch (_i_("3bb:1d26e8c9"), e = e || [], t.type) {
case "UPDATE_VALIDATION_FIELDS":
return _r_(Object.assign({}, e, t.payload.fields));

default:
return _r_(e);
}
_r_();
}
function b(e, t) {
switch (_i_("3bb:0970d617"), e = e || [], t.type) {
case "UPDATE_ROOM_GUESTS_QUANTITY":
return _r_(e.map(function(e) {
if (_i_("3bb:ac0bd343"), parseInt(e.sequencial_id, 10) === parseInt(t.payload.sequencialId, 10)) return _r_(Object.assign({}, e, {
selected_persons:t.payload.value
}));
return _r_(e);
}));

default:
return _r_(e);
}
_r_();
}
function p(e, t) {
_i_("3bb:63aae750");
var i = e && e.rooms && e.rooms_guests_total || 0;
switch (t.type) {
case "UPDATE_ROOM_GUESTS_QUANTITY":
return _r_(Array.isArray(e.rooms) ? e.rooms.reduce(function(e, i) {
_i_("3bb:6bfe6575");
var n = parseInt(i.sequencial_id, 10) === parseInt(t.payload.sequencialId, 10) ? t.payload.value :i.selected_persons;
return _r_(e + parseInt(n, 10));
}, 0) :[]);

default:
return _r_(i);
}
_r_();
}
function u(e, t) {
switch (_i_("3bb:492aaf76"), e = e || "", t.type) {
case "UPDATE_REDEMPTION_AMOUNT":
return _r_(t.payload.value);

default:
return _r_(e);
}
_r_();
}
function h(e, t) {
switch (_i_("3bb:df083ee2"), e = e || "", t.type) {
case "UPDATE_TRAVEL_PURPOSE":
return _r_(t.payload.value);

default:
return _r_(e);
}
_r_();
}
function f(e, t) {
switch (_i_("3bb:ff84f767"), e = e || {}, t.type) {
case "UPDATE_PAYMENT_CC_DETAILS":
var i = Object.assign({}, e);
return i[t.payload.key] = t.payload.value, i.cc_cvc_hint = null, _r_(i);

case "UPDATE_CVC_HINT":
var i = Object.assign({}, e, {
cc_cvc_hint:t.payload ? t.payload.type :""
});
return _r_(i);

default:
return _r_(e);
}
_r_();
}
i.exports = a, _r_();
}), B.define("bp/main-form-validation", function(e, t, i) {
_i_("3bb:64b736e4");
var n = e("data-validator"), a = e("bp/env"), r = !0, _ = a.get("validationMessages"), o = {
firstname:{
defaultOnServer:!1,
clientValidators:[ "empty" ]
},
lastname:{
defaultOnServer:!0,
fallbackToClient:!0,
clientValidators:[ "empty" ],
messages:Object.assign({}, _.lastname)
},
email:{
defaultOnServer:!0,
fallbackToClient:!0,
clientValidators:[ "clientside_invalid_email" ],
messages:Object.assign({}, _.email)
},
email_confirm:{
defaultOnServer:!0,
fallbackToClient:!0,
clientValidators:[ "clientside_invalid_email" ],
messages:Object.assign({}, _.email_confirm)
},
phone:{
defaultOnServer:!0,
fallbackToClient:!0,
clientValidators:[ "empty", "phone" ],
messages:Object.assign({}, _.phone)
},
address1:{
defaultOnServer:!0,
fallbackToClient:!0,
clientValidators:[ "empty" ],
messages:Object.assign({}, _.address1)
},
city:{
defaultOnServer:!0,
fallbackToClient:!0,
clientValidators:[ "empty" ],
messages:Object.assign({}, _.city)
},
zip:{
defaultOnServer:!1,
clientValidators:[ "empty" ]
},
cc1:{
defaultOnServer:!0,
fallbackToClient:!0,
clientValidators:[ "empty" ],
messages:Object.assign({}, _.cc1)
},
cc_number:{
defaultOnServer:!0,
fallbackToClient:r,
clientValidators:[ "empty" ],
messages:Object.assign({}, _.cc_number)
},
cc_type:{
defaultOnServer:!0,
fallbackToClient:!0,
clientValidators:[ "empty" ],
messages:Object.assign({}, _.cc_type)
},
cc_name:{
defaultOnServer:!0,
fallbackToClient:!0,
clientValidators:[ "empty" ],
messages:Object.assign({}, _.cc_name)
},
cc_month:{
defaultOnServer:!0,
fallbackToClient:!1,
messages:Object.assign({}, _.cc_month)
},
cc_year:{
defaultOnServer:!0,
fallbackToClient:!1,
messages:Object.assign({}, _.cc_month)
},
cc_cvc:{
defaultOnServer:!0,
fallbackToClient:!0,
clientValidators:[ "empty" ],
messages:Object.assign({}, _.cc_cvc)
}
};
a.get("showBDate") && (o.bday = {
defaultOnServer:!0,
fallbackToClient:!0,
clientValidators:[ "empty" ],
messages:Object.assign({}, _.bday)
}, o.bmonth = {
defaultOnServer:!0,
fallbackToClient:!0,
clientValidators:[ "empty" ],
messages:Object.assign({}, _.bmonth)
}, o.byear = {
defaultOnServer:!0,
fallbackToClient:!0,
clientValidators:[ "empty" ],
messages:Object.assign({}, _.byear)
}), a.get("requiresZipCodeInUS") && (o.zip = Object.assign({}, o.zip, {
defaultOnServer:!0,
fallbackToClient:!0,
clientValidators:[ "empty" ],
messages:Object.assign({}, _.zip)
})), a.get("guestPIIFields") && a.get("guestPIIFields").forEach(function(e) {
_i_("3bb:c290a606"), o[e] = {
defaultOnServer:!1,
fallbackToClient:!0,
clientValidators:[ "empty" ],
messages:Object.assign({}, _[e.replace(/_[0-9]+$/, "")])
}, _r_();
}), "1" === a.get("bbloyaltyRedemptionAmountIsRequiredOnBS3") && (o.bb_loyalty_redeem_credit_amount_formatted = {
defaultOnServer:!1,
clientValidators:[ "positive_number" ],
messages:Object.assign({}, _.bb_loyalty_redeem_credit_amount_formatted)
}), a.get("travelPurposeIsRequired") && (o.bp_travel_purpose = {
defaultOnServer:!1,
clientValidators:[ "empty" ],
messages:Object.assign({}, _.bp_travel_purpose)
});
var s = {
empty:function(e) {
return _i_("3bb:dd1ed74d"), _r_(n.validate("required", e));
},
clientside_invalid_email:function(e) {
return _i_("3bb:edfc3e7e"), _r_("" !== e.trim() && n.validate("email", e));
},
positive_number:function(e) {
return _i_("3bb:09544822"), _r_(n.validate("positive_number", e));
},
phone:function(e) {
_i_("3bb:efe07ebc");
var t = e.match(/[\d]/gi);
if (!t.length || t.length < 7) return _r_(!1);
return _r_(n.validate("regex", e, {
regex:/^\+?[\d-\s\(\)]$/gi
}));
}
};
t.fields = o, t.validators = s, _r_();
}), B.define("bp/validate", function(e, t, i) {
_i_("3bb:74642a17");
var n = e("promise"), a = e("bp/main-form-validation").fields, r = e("bp/main-form-validation").validators, _ = e("jquery"), o = "/book/validate", s = 1e3;
function l(e, t) {
_i_("3bb:7d64c5e3");
var t = t || 0, i = t || 0, r = e.fields;
if (!r) throw new Error("bp/validate::validateOnServer: missing property `fields` in `validationData`");
var l = [], c = r.filter(function(e) {
return _i_("3bb:f37436bb"), a[e.name].defaultOnServer && a[e.name].optionalOnServerValidation && l.push(e.name), _r_(a[e.name].defaultOnServer);
});
return _r_(new n(function(n, a) {
if (_i_("3bb:f2143b61"), 0 === c.length) return n(e), _r_();
var d = {
fields:JSON.stringify(c),
optional:JSON.stringify(l),
is_interstitial:t,
prevent_events:i
};
_.ajax({
url:o,
timeout:s,
type:"POST",
data:d,
success:function(t, i, a) {
_i_("3bb:a2b4c8d6"), n({
results:{
fields:Object.assign({}, e.results.fields, b(t.fields)),
valid:t.valid
},
fields:r
}), _r_();
},
error:function(e, t, i) {
_i_("3bb:3b224b8d"), n({
results:"server_error",
fields:r
}), _r_();
}
}), _r_();
}));
}
function c(e) {
_i_("3bb:cb5b2a4c");
var t, i, n = e.fields;
if (!n) throw new Error("bp/validate::validateOnClient: missing property `fields` in `validationData`");
if ("server_error" === e.results ? (e.results = {
fields:{},
valid:!0
}, t = n.filter(function(e) {
return _i_("3bb:b5596c17"), _r_(a[e.name].defaultOnServer && a[e.name].fallbackToClient || !a[e.name].defaultOnServer);
})) :t = n.filter(function(e) {
return _i_("3bb:d1016aba"), _r_(!a[e.name].defaultOnServer);
}), 0 === t.length) return _r_(e);
return i = t.reduce(function(e, t) {
_i_("3bb:628e69be");
for (var i, n = a[t.name].clientValidators, _ = {
value:t.value,
status:"valid"
}, o = 0; o < n.length; o++) {
if (i = r[n[o]], "function" != typeof i) throw new Error("bp/validate::validateOnClient: validator " + n[o] + " is not a valid function");
if (!i(t.value)) {
_.status = "error", _.type = n[o], e.valid = !1;
break;
}
}
return e.fields[t.name] = _, _r_(e);
}, {
fields:{},
valid:!0
}), _r_({
results:{
fields:Object.assign({}, e.results.fields, i.fields),
valid:i.valid
},
fields:n
});
}
function d(e) {
if (_i_("3bb:8915b7a6"), 0 === e.results.fields.length) return _r_(e);
return Object.keys(e.results.fields).forEach(function(t) {
_i_("3bb:c9e5cfd4");
var i = e.results.fields[t];
return "error" !== i.status && "warning" !== i.status || !i.type || (a[t].messages && a[t].messages[i.type] ? i.message = a[t].messages[i.type] :i.message = ""), _r_(i);
}), _r_(e);
}
function b(e) {
return _i_("3bb:43c0e7be"), _r_(e.reduce(function(e, t) {
_i_("3bb:53e2b3c9");
var i = t.name;
return delete t.name, e[i] = Object.assign({}, t), _r_(e);
}, {}));
}
t.validate = function(e, t) {
_i_("3bb:1a29a87f");
var i = e.filter(function(e) {
_i_("3bb:14d8a726");
var t = a[e.name];
return t || console.warn("bp/validate: Validating field " + e.name + " with no validation data"), _r_(!!t);
});
return _r_(new n(function(e, n) {
_i_("3bb:984c5993"), l({
results:{
fields:{},
valid:!0
},
fields:i
}, t).then(c).then(d).then(e), _r_();
}));
}, _r_();
}), B.define("bp/validatable-field", function(e, t, i) {
_i_("3bb:fbc3deb7");
var n = {}, a = e("bp/inline_errors_et_tracking");
n.shouldUpdateValidation = function(e, t) {
if (_i_("3bb:3cde7f2d"), this.props && this.props.name || console.warn("bp/validatable-field: component should have a `name` props"), !e || !e.validation || !e.validation.fields) return _r_();
var i = e.validation.fields[this.props.name], n = t && t.validation ? t.validation.fields[this.props.name] :null;
if (!i && !n) return _r_(!1);
if (i && !n) return _r_(!0);
if (i && n && (i.status !== n.status || i.type !== n.type)) return _r_(!0);
return _r_(!1);
}, n.renderValidation = function(e, t) {
if (_i_("3bb:9a06190b"), this.props && this.props.name && e && e.validation && e.validation.fields) {
var i = e.validation.fields[this.props.name];
i && i.status && "error" === i.status && a(this.props.name, i);
}
if (!this.shouldUpdateValidation(e, t)) return _r_();
var i = e.validation.fields[this.props.name];
i.message && "" !== i.message ? this.$el.removeClass("bp_form__field--no-msg") :this.$el.addClass("bp_form__field--no-msg"), this.$el.removeClass("bp_form__field--valid bp_form__field--warning bp_form__field--error"), "error" === i.status ? (this.$el.addClass("bp_form__field--error"), this.$el.find("[data-bp-form-field-msg]").html(i.message)) :"valid" === i.status ? (this.$el.addClass("bp_form__field--valid"), this.$el.find("[data-bp-form-field-msg]").html("")) :"warning" === i.status && (this.$el.addClass("bp_form__field--warning"), this.$el.find("[data-bp-form-field-msg]").html(i.message)), _r_();
}, i.exports = n, _r_();
}), B.define("bp/idleness-tracker", function(e, t, i) {
_i_("3bb:f8d0213d");
var n, a = e("events"), r = e("utils/throttled"), _ = 150, o = 5e3, s = !0, l = 6e5, c = 0;
function d() {
_i_("3bb:4518f6f7");
var e = new Date();
clearInterval(n), s || (c = 0), n = setInterval(function() {
_i_("3bb:29edb939");
try {
var t = new Date() - e;
t > c + o && (c += o, a.trigger("bp:idle:" + c)), t >= l && b();
} catch (i) {
booking.reportError(i, "Idleness tracker");
}
_r_();
}, _), _r_();
}
function b() {
_i_("3bb:84c28ea0"), $(document.documentElement).off(".rlutimed"), $(window).off(".rlutimed"), clearInterval(n), _r_();
}
i.exports = {
init:function() {
_i_("3bb:a5d7aa20"), $(document.documentElement).on("keydown.rlutimed", r(d, 100)).on("mousemove.rlutimed", r(d, 100)).on("click.rlutimed", r(d, 100)), $(window).on("scroll.rlutimed", r(d, 100)), d(), _r_();
},
stop:b
}, _r_();
}), B.define("bp/circular-loader", function(e, t, i) {
_i_("3bb:61161984");
var n = e("jstmpl"), a = "circular_loader", r = "__total", _ = "__current", o = "--no_svg", s = !0, l = !1, c = 1e3, d = !("undefined" == typeof SVGRect), b = !(!B || !B.env || "msie" !== B.env.b_browser), p = function(e) {
if (_i_("3bb:fcb437e3"), !e.parentNode) throw Error("circular-loader: You should specify a parentNode");
var t = e.baseClass || a, i = e.totalClassSuffix || r, n = e.currentClassSuffix || _, d = e.noSvgClassSuffix || o;
this.baseClass = t, this.totalClass = t + i, this.currentClass = t + n, this.noSvgClass = t + d, this.isProgressAnimated = "boolean" == typeof e.isProgressAnimated ? e.isProgressAnimated :s, this.isCircleAnimated = "boolean" == typeof e.isCircleAnimated ? e.isCircleAnimated :l, this.progressAnimationDuration = e.progressAnimationDuration || c, this.parentNode = $(e.parentNode), this.currentPercentage = 0, _r_();
};
p.prototype.render = function() {
_i_("3bb:d1635a5f"), this.$baseElement = $(n("circular_loader").render({
base_class:this.baseClass,
total_class:this.totalClass,
current_class:this.currentClass,
no_svg_class:this.noSvgClass,
is_circle_animated:this.isCircleAnimated,
supports_svg:d
})), this.$currentElement = this.$baseElement.find("." + this.currentClass), this.parentNode.append(this.$baseElement), d && (this.path = this.$currentElement.find("path")[0], this.totalPathLength = this.path.getTotalLength(), this.path.style.strokeDashoffset = this.totalPathLength, this.path.style.strokeDasharray = [ this.totalPathLength, this.totalPathLength ].join(" ")), _r_();
}, p.prototype.destroy = function() {
_i_("3bb:aa031db9"), this.$baseElement.remove(), this.currentPercentage = 0, this.$baseElement = this.path = this.totalPathLength = null, _r_();
}, p.prototype.setPercentage = function(e) {
_i_("3bb:b7599ff8"), e = Math.min(parseInt(e, 10), 100), this.currentPercentage = e, d ? this.isProgressAnimated ? this._animateToPercentage(e) :this._renderPercentageOnSvg(e) :this._renderPercentageOnSprite(e), _r_();
}, p.prototype._animateToPercentage = function(e) {
_i_("3bb:49101fb1"), $(this.path).animate({
"stroke-dashoffset":this.totalPathLength - this.totalPathLength * (e / 100)
}, {
duration:this.progressAnimationDuration,
easing:"easeOutQuint",
step:b && d ? function() {
_i_("3bb:45aa51ef");
var e = this.$currentElement[0];
e.parentNode.insertBefore(e, e), _r_();
}.bind(this) :$.noop
}), _r_();
}, p.prototype._renderPercentageOnSvg = function(e) {
_i_("3bb:91a72be4"), this.path.style.strokeDashoffset = this.totalPathLength - this.totalPathLength * (e / 100), _r_();
}, p.prototype._renderPercentageOnSprite = function(e) {
_i_("3bb:268125d9");
var t = 10 * Math.round(e / 10);
this.$currentElement.removeClass().addClass(this.currentClass).addClass(this.currentClass + "--" + t), _r_();
};
var u = {};
u.create = function(e) {
return _i_("3bb:1548ca5b"), _r_(new p(e));
}, i.exports = u, _r_();
}), B.define("bp/inline-validation-errors-tracking", function(e, t, i) {
_i_("3bb:662d179e");
var n = e("bp/store"), a = e("bp/emitter");
function r(e, t, i) {
_i_("3bb:8e59a327"), i && i.type && "UPDATE_VALIDATION_FIELDS" === i.type && i.payload && i.payload.fields && (i.payload.valid === !1 || "false" === i.payload.valid) && Object.keys(i.payload.fields).forEach(function(e) {
_i_("3bb:434bd9a9"), a.trigger("inline_validation_error_" + e, i.payload.fields[e].type), _r_();
}), _r_();
}
i.exports = n.subscribe(r), _r_();
}), B.define("bp/inline_errors_et_tracking", function(e, t, i) {
_i_("3bb:4491d311");
var n = e("et");
function a(e, t) {
_i_("3bb:74f7ae9f"), 2 === B.env.b_stage ? n.goal("bp_bs2_inline_validation_errors") :3 === B.env.b_stage && n.goal("bp_bs3_inline_validation_errors"), _r_();
}
i.exports = a, _r_();
}), B.define("component/bp/personal-details-form", function(e, t, i) {
_i_("3bb:97364d58");
var n = e("component"), a = {};
a.init = function() {
_i_("3bb:a0bc2d0c"), new B.bp.bs2.TravelPurposeController(), _r_();
}, i.exports = n.extend(a), _r_();
}), B.define("component/bp/personal-details-form/title", function(e, t, i) {
_i_("3bb:7ab972f7");
var n = e("component"), a = e("bp/validatable-field"), r = e("bp/store"), _ = Object.assign({}, a);
_.init = function() {
_i_("3bb:33bb5e76"), this.props = {}, this.props.name = "booker_title", r.subscribe(this.render.bind(this)), _r_();
}, _.render = function(e, t) {
_i_("3bb:fe914cc3"), this.renderValidation(e, t), _r_();
}, i.exports = n.extend(_), _r_();
}), B.define("component/bp/personal-details-form/firstname", function(e, t, i) {
_i_("3bb:74265f63");
var n = e("component"), a = e("bp/validatable-field"), r = e("bp/store"), _ = Object.assign({}, a);
_.init = function() {
_i_("3bb:f56212ba"), this.props = {}, this.props.name = "firstname", r.subscribe(this.render.bind(this)), _r_();
}, _.render = function(e, t) {
_i_("3bb:fe914cc31"), this.renderValidation(e, t), _r_();
}, i.exports = n.extend(_), _r_();
}), B.define("component/bp/personal-details-form/lastname", function(e, t, i) {
_i_("3bb:8dbbd520");
var n = e("component"), a = e("bp/validatable-field"), r = e("bp/store"), _ = Object.assign({}, a);
_.init = function() {
_i_("3bb:d641cde6"), this.props = {}, this.props.name = "lastname", r.subscribe(this.render.bind(this)), _r_();
}, _.render = function(e, t) {
_i_("3bb:fe914cc32"), this.renderValidation(e, t), _r_();
}, i.exports = n.extend(_), _r_();
}), B.define("component/bp/personal-details-form/email", function(e, t, i) {
_i_("3bb:0a6edf57");
var n = e("component"), a = e("bp/validatable-field"), r = e("bp/store"), _ = e("promise"), o = e("jquery"), s = Object.assign({}, a);
s.init = function() {
_i_("3bb:a7ce6d5c"), this.props = {}, this.props.name = "email", this.props.suggestionAccepted = !1, this.emailSuggestionEl = this.$el.find("[data-email-suggestion]"), this.$el.on("click", ".bp_form__email_suggestion_accept", this.onEmailSuggestionClick.bind(this)), this.$emailConfirmation = o("#bookForm #email_confirm"), r.subscribe(this.render.bind(this)), _r_();
}, s.shouldUpdate = function(e, t) {
if (_i_("3bb:b6e09ac4"), !e || !e.main_form || void 0 === e.main_form.email) return _r_(!1);
if (!t) return _r_(!0);
if (e.main_form.email !== t.main_form.email) return _r_(!0);
return _r_(!1);
}, s.render = function(e, t) {
_i_("3bb:62a2ca65"), this.renderValidation(e, t), this.shouldUpdate(e, t) && !this.props.suggestionAccepted && this.fetchDomainSuggestion(e.main_form.email).then(this.renderDomainSuggestion.bind(this)), _r_();
}, s.fetchDomainSuggestion = function(e) {
_i_("3bb:5fdacd79");
var t = e.split("@"), i = t.shift(), n = t.pop();
return _r_(new _(function(e, t) {
if (_i_("3bb:31798ee8"), !i || 0 === i.trim().length) return e(), _r_();
if (!n || n.trim().length < 2) return e(), _r_();
var a = {
domain:n.trim()
};
o.ajax({
url:"/domain_suggestion",
type:"POST",
data:a
}).done(function(t) {
_i_("3bb:a6ace1e2");
var a = t.suggestions && t.suggestions.length && t.suggestions.shift().trim();
a && a !== n.trim() ? e({
user:i,
domain:a
}) :e(), _r_();
}).fail(function() {
_i_("3bb:f41e683a"), e(), _r_();
}), _r_();
}));
}, s.renderDomainSuggestion = function(e) {
_i_("3bb:c99d070d");
var t = [];
e && 0 !== e.user.length && 0 !== e.domain.length ? (t.push('<span class="bp_form__email_suggestion_accept">'), t.push([ e.user.replace("@", ""), e.domain ].join("@")), t.push("</span>"), this.emailSuggestionEl.css("display", "block").html(B.jstmpl.translations("bp_mailcheck_error", null, {
bp_mailcheck_domain:t.join("")
}))) :this.emailSuggestionEl.html("").css("display", "none"), _r_();
}, s.onEmailSuggestionClick = function(e) {
_i_("3bb:3d38c30c");
var t = o(e.target).text();
this.props.suggestionAccepted = !0, this.$el.find(".bp_form__field__input").val(t).trigger("change").trigger("blur"), this.emailSuggestionEl.css("display", "none"), _r_();
}, i.exports = n.extend(s), _r_();
}), B.define("component/bp/personal-details-form/email-confirm", function(e, t, i) {
_i_("3bb:36e0aa08");
var n = e("component"), a = e("bp/validatable-field"), r = e("bp/store"), _ = Object.assign({}, a);
_.init = function() {
_i_("3bb:169f92f4"), this.props = {}, this.props.name = "email_confirm", r.subscribe(this.render.bind(this)), _r_();
}, _.render = function(e, t) {
_i_("3bb:fe914cc33"), this.renderValidation(e, t), _r_();
}, i.exports = n.extend(_), _r_();
}), B.define("component/bp/personal-details-form/phone", function(e, t, i) {
_i_("3bb:bb654153");
var n = e("component"), a = e("bp/validatable-field"), r = e("bp/store"), _ = Object.assign({}, a);
_.init = function() {
_i_("3bb:41de14a9"), this.props = {}, this.props.name = "phone", r.subscribe(this.render.bind(this)), _r_();
}, _.render = function(e, t) {
_i_("3bb:fe914cc34"), this.renderValidation(e, t), _r_();
}, i.exports = n.extend(_), _r_();
}), B.define("component/bp/personal-details-form/birthdate", function(e, t, i) {
_i_("3bb:49180b36");
var n = e("component"), a = e("bp/validatable-field"), r = e("bp/store"), _ = Object.assign({}, a);
_.init = function() {
_i_("3bb:9535cdcc"), this.props = {}, this.props.name = "bday", r.subscribe(this.render.bind(this)), _r_();
}, _.render = function(e, t) {
_i_("3bb:fe914cc35"), this.renderValidation(e, t), _r_();
}, i.exports = n.extend(_), _r_();
}), B.define("component/bp/billing-details-form/address-type", function(e, t, i) {
_i_("3bb:fe290b6f");
var n = e("component"), a = e("bp/store"), r = {};
r.init = function() {
_i_("3bb:6fb620b8"), a.subscribe(this.render.bind(this)), _r_();
}, r.shouldUpdate = function(e, t) {
if (_i_("3bb:de3cb3cf"), !t) return _r_(!0);
return _r_(e.main_form.bp_address_type !== t.main_form.bp_address_type);
}, r.render = function(e, t) {
if (_i_("3bb:1419a10a"), !this.shouldUpdate(e, t)) return _r_();
var i = this.$el.find("#address_type_business"), n = this.$el.find("#address_type_personal");
this.$el.find(".bp__address-type__label--active").removeClass("bp__address-type__label--active"), "business" === e.main_form.bp_address_type ? i.closest("label").addClass("bp__address-type__label--active") :"personal" === e.main_form.bp_address_type && n.closest("label").addClass("bp__address-type__label--active"), _r_();
}, i.exports = n.extend(r), _r_();
}), B.define("component/bp/billing-details-form/address-details", function(e, t, i) {
_i_("3bb:3bd10150");
var n = e("component"), a = e("bp/store"), r = e("utils/throttled"), _ = {};
_.init = function() {
_i_("3bb:f15915a9"), this.$el.on({
keyup:r(this._onFieldChange.bind(this), 300),
change:this._onFieldChange.bind(this)
}), a.subscribe(this.render.bind(this)), _r_();
}, _.shouldUpdate = function(e, t) {
if (_i_("3bb:de3cb3cf1"), !t) return _r_(!0);
return _r_(e.main_form.bp_address_type !== t.main_form.bp_address_type);
}, _.render = function(e, t) {
if (_i_("3bb:5bbd4ffd"), !this.shouldUpdate(e, t)) return _r_();
var i = {};
e.main_form.bp_address_type && "" !== e.main_form.bp_address_type && "personal" !== e.main_form.bp_address_type ? "business" === e.main_form.bp_address_type && ($("#label_company_name, #label_vat_number").show(), i = e.business_address) :($("#label_company_name, #label_vat_number").hide(), i = e.personal_address), this.$el.find('[name="address1"]').val(i.address1), this.$el.find('[name="city"]').val(i.city), this.$el.find('[name="zip"]').val(i.zip), this.$el.find('[name="cc1"]').val(i.cc1), _r_();
}, _._onFieldChange = function(e) {
_i_("3bb:9b17b243");
var t = e.target.getAttribute("name"), i = e.target.value, n = a.getState(), r = {};
r[t] = i, n.main_form.bp_address_type && "personal" !== n.main_form.bp_address_type ? "business" === n.main_form.bp_address_type && a.dispatch({
type:"UPDATE_BUSINESS_ADDRESS",
payload:r
}) :a.dispatch({
type:"UPDATE_PERSONAL_ADDRESS",
payload:r
}), _r_();
}, i.exports = n.extend(_), _r_();
}), B.define("component/bp/billing-details-form/address-details-bbtool", function(e, t, i) {
_i_("3bb:8a1854d3");
var n = e("component"), a = e("bp/store"), r = e("bp/env");
function _(e) {
if (_i_("3bb:d245e2dc"), !e) return _r_(e);
var t = [ [ "&", "&amp;" ], [ "<", "&lt;" ], [ ">", "&gt;" ], [ "&", "&amp;" ], [ "'", "&#39;" ], [ '"', "&quot;" ] ];
return _r_(t.reduce(function(e, t) {
_i_("3bb:a043d74b");
var i = new RegExp(t[1], "g"), n = t[0];
return _r_(e.replace(i, n));
}, e));
}
var o = {};
o.init = function() {
_i_("3bb:637433ae"), this.$el.on("change", "[name=billing_address_id]", this._onBillinAddressChange.bind(this)), a.subscribe(this.render.bind(this)), _r_();
}, o.shouldUpdate = function(e, t) {
if (_i_("3bb:f5eaeabc"), !t) return _r_(!0);
return _r_(e.selected_bbtool_billing_address !== t.selected_bbtool_billing_address);
}, o.render = function(e, t) {
if (_i_("3bb:8ae022fb"), !this.shouldUpdate(e, t)) return _r_();
if (!e.selected_bbtool_billing_address) return _r_();
var i;
if ("other" === e.selected_bbtool_billing_address) i = {}; else {
var n = r.get("bbtool_billing_addresses");
i = n.filter(function(t) {
return _i_("3bb:62455db6"), _r_(t.b_id == e.selected_bbtool_billing_address);
})[0];
}
$("#label_vat_number").show(), $("#label_company_name").toggle("other" === e.selected_bbtool_billing_address), $(".bp_form__field--billing_address_id--disclaimer").toggle("other" !== e.selected_bbtool_billing_address), $(".booker-details-update-profile__label").toggle("other" !== e.selected_bbtool_billing_address), $(".booker-details-update-profile__add-new-label").toggle("other" == e.selected_bbtool_billing_address), this.$el.find('[name="address1"]').val(_(i.b_address)), this.$el.find('[name="city"]').val(_(i.b_city)), this.$el.find('[name="zip"]').val(_(i.b_zip)), this.$el.find('[name="cc1"]').val(_(i.b_cc1)), this.$el.find('[name="vat_number"]').val(_(i.b_vat_number)), this.$el.find('[name="company_name"]').val(_(i.b_name)), _r_();
}, o._onBillinAddressChange = function(e) {
_i_("3bb:2dffdc57");
var t = e.target.value, i = t;
a.dispatch({
type:"CHANGE_BBTOOL_BILLING_ADDRESS",
payload:i
}), _r_();
}, i.exports = n.extend(o), _r_();
}), B.define("component/bp/billing-details-form/address", function(e, t, i) {
_i_("3bb:16cf7d34");
var n = e("component"), a = e("bp/validatable-field"), r = e("bp/store"), _ = Object.assign({}, a);
_.init = function() {
_i_("3bb:8be7722a"), this.props = {}, this.props.name = "address1", r.subscribe(this.render.bind(this)), _r_();
}, _.render = function(e, t) {
_i_("3bb:fe914cc36"), this.renderValidation(e, t), _r_();
}, i.exports = n.extend(_), _r_();
}), B.define("component/bp/billing-details-form/city", function(e, t, i) {
_i_("3bb:9c9fced5");
var n = e("component"), a = e("bp/validatable-field"), r = e("bp/store"), _ = Object.assign({}, a);
_.init = function() {
_i_("3bb:1c5398d6"), this.props = {}, this.props.name = "city", r.subscribe(this.render.bind(this)), _r_();
}, _.render = function(e, t) {
_i_("3bb:fe914cc37"), this.renderValidation(e, t), _r_();
}, i.exports = n.extend(_), _r_();
}), B.define("component/bp/billing-details-form/zip", function(e, t, i) {
_i_("3bb:3097be04");
var n = e("component"), a = e("bp/validatable-field"), r = e("bp/store"), _ = Object.assign({}, a);
_.init = function() {
_i_("3bb:bc127521"), this.props = {}, this.props.name = "zip", r.subscribe(this.render.bind(this)), _r_();
}, _.render = function(e, t) {
_i_("3bb:fe914cc38"), this.renderValidation(e, t), _r_();
}, i.exports = n.extend(_), _r_();
}), B.define("component/bp/billing-details-form/country", function(e, t, i) {
_i_("3bb:85644742");
var n = e("component"), a = e("bp/validatable-field"), r = e("bp/store"), _ = Object.assign({}, a);
_.init = function() {
_i_("3bb:30296526"), this.props = {}, this.props.name = "cc1", r.subscribe(this.render.bind(this)), _r_();
}, _.render = function(e, t) {
_i_("3bb:fe914cc39"), this.renderValidation(e, t), _r_();
}, i.exports = n.extend(_), _r_();
}), B.define("component/bp/payment-details-form", function(e, t, i) {
_i_("3bb:47caf468");
var n = e("component"), a = e("bp/store"), r = e("utils/throttled"), _ = [ "cc_number", "cc_type", "cc_name", "cc_month", "cc_year", "cc_cvc" ], o = {};
o.init = function() {
_i_("3bb:ab35dfca"), this.$el.on({
keyup:r(this._onFieldChange.bind(this), 300),
change:this._onFieldChange.bind(this)
}), _r_();
}, o._onFieldChange = function(e) {
_i_("3bb:c7ca25ac");
var t = e.target.getAttribute("name"), i = e.target.value;
if (-1 === _.indexOf(t)) return _r_(!0);
a.dispatch({
type:"UPDATE_PAYMENT_CC_DETAILS",
payload:{
key:t,
value:i
}
}), _r_();
}, i.exports = n.extend(o), _r_();
}), B.define("component/bp/payment-details-form/cc-number", function(e, t, i) {
_i_("3bb:efa9b3ec");
var n = e("component"), a = e("bp/validatable-field"), r = e("bp/store"), _ = Object.assign({}, a);
_.init = function() {
_i_("3bb:3b389d04"), this.props = {}, this.props.name = "cc_number", r.subscribe(this.render.bind(this)), _r_();
}, _.render = function(e, t) {
_i_("3bb:fe914cc310"), this.renderValidation(e, t), _r_();
}, i.exports = n.extend(_), _r_();
}), B.define("component/bp/payment-details-form/cc-type", function(e, t, i) {
_i_("3bb:752d3f83");
var n = e("component"), a = e("bp/validatable-field"), r = e("bp/store"), _ = Object.assign({}, a);
_.init = function() {
_i_("3bb:dc6a3982"), this.props = {}, this.props.name = "cc_type", r.subscribe(this.render.bind(this)), _r_();
}, _.render = function(e, t) {
_i_("3bb:fe914cc311"), this.renderValidation(e, t), _r_();
}, i.exports = n.extend(_), _r_();
}), B.define("component/bp/payment-details-form/cc-name", function(e, t, i) {
_i_("3bb:1f6921b8");
var n = e("component"), a = e("bp/store"), r = e("bp/env"), _ = r.get("ccAbbreviationsToValueMap"), o = e("bp/validatable-field"), s = Object.assign({}, o);
s.init = function() {
_i_("3bb:abba5eab"), this.props = {}, this.props.name = "cc_name", this.props.isCcNamePrefilled = r.get("isPrefillCcName"), a.subscribe(this.render.bind(this)), _r_();
}, s.shouldComponentUpdate = function(e, t) {
return _i_("3bb:2222df33"), _r_(!t || e.payment_cc_details.cc_type !== t.payment_cc_details.cc_type || e.payment_cc_details.cc_name !== t.payment_cc_details.cc_name);
}, s.shouldBeHiddenBasedOnType = function(e) {
return _i_("3bb:87848a06"), _r_(this.props.isCcNamePrefilled && e !== (_.americanexpress || _.amex_di || "American Express"));
}, s.render = function(e, t) {
if (_i_("3bb:de5a1b48"), this.renderValidation(e, t), !this.shouldComponentUpdate(e, t)) return _r_();
this.shouldBeHiddenBasedOnType(e.payment_cc_details.cc_type) ? this.$el.addClass("bp_form__field--hidden") :this.$el.removeClass("bp_form__field--hidden"), this.props.isCcNamePrefilled && B.env.b_show_cc_name_field && this.$el.removeClass("bp_form__field--hidden"), _r_();
}, i.exports = n.extend(s), _r_();
}), B.define("component/bp/payment-details-form/cc-cvc", function(e, t, i) {
_i_("3bb:f32d4d34");
var n = e("component"), a = e("bp/store"), r = e("bp/env"), _ = e("server-data"), o = r.get("ccAbbreviationsToValueMap"), s = e("bp/validatable-field"), l = Object.assign({}, s);
l.init = function() {
_i_("3bb:119816f6"), this.props = {}, this.props.name = "cc_cvc", a.subscribe(this.render.bind(this)), _r_();
}, l.shouldComponentUpdate = function(e, t) {
return _i_("3bb:dac8f5ed"), _r_(!t || e.payment_cc_details.cc_type !== t.payment_cc_details.cc_type || e.payment_cc_details.cc_cvc !== t.payment_cc_details.cc_cvc);
}, l.shouldBeHiddenBasedOnType = function(e) {
if (_i_("3bb:f2550c5d"), 1 == _.fe_require_cvc) return _r_(!1);
switch (e.cc_type) {
case o.americanexpress:
return _r_(e.is_amex_cvc_required ? !1 :!0);

case o.dinersclub:
case o.jcb:
return _r_(!0);

default:
return _r_(!1);
}
_r_();
}, l.shouldShowHintTrigger = function(e) {
switch (_i_("3bb:0c303994"), e.cc_type) {
case o.visa:
case o.mastercard:
case o.mc_di:
case o.visa_di:
case o.discover:
case o.discover_api:
case o.diners:
case o.diners_api:
return _r_(!0);

default:
return _r_(!1);
}
_r_();
}, l.render = function(e, t) {
if (_i_("3bb:c42b32d1"), this.renderValidation(e, t), !this.shouldComponentUpdate(e, t)) return _r_();
this.shouldBeHiddenBasedOnType(e.payment_cc_details) ? this.$el.addClass("bp_form__field--hidden") :(this.$el.removeClass("bp_form__field--hidden"), this.$helpTrigger && (this.shouldShowHintTrigger(e.payment_cc_details) ? this.$helpTrigger.removeClass("-hidden") :this.$helpTrigger.addClass("-hidden"))), _r_();
}, i.exports = n.extend(l), _r_();
}), B.define("component/bp/payment-details-form/cc-cvc-hint", function(e, t, i) {
_i_("3bb:481a78d7");
var n = e("component"), a = e("bp/store"), r = e("bp/env"), _ = r.get("ccAbbreviationsToValueMap"), o = {};
o.init = function() {
_i_("3bb:fbf9da2a"), this.props = {}, this.$hints = this.$el.find("[data-cc-hint-type]"), this.$hints.addClass("bp_form__cc_hint_type--hidden"), a.subscribe(this.render.bind(this)), _r_();
}, o.shouldComponentUpdate = function(e, t) {
return _i_("3bb:6ddfddd7"), _r_(!t || e.payment_cc_details.cc_type !== t.payment_cc_details.cc_type);
}, o.render = function(e, t) {
if (_i_("3bb:dc2bd031"), !this.shouldComponentUpdate(e, t)) return _r_();
switch (e.payment_cc_details.cc_type) {
case _.visa:
case _.mastercard:
case _.mc_di:
case _.visa_di:
this.show("visa");
break;

case _.amex_di:
case _.americanexpress:
this.show("amex");
break;

case _.__null__:
default:
this.hide();
}
_r_();
}, o.hide = function() {
_i_("3bb:d436a535"), this.$el.addClass("bp_form__cc_hint--hidden"), _r_();
}, o.show = function(e) {
_i_("3bb:325d8e4a");
var t = this.$hints.filter('[data-cc-hint-type="' + e + '"]');
0 === t.length ? this.hide() :(this.$el.removeClass("bp_form__cc_hint--hidden"), this.$hints.addClass("bp_form__cc_hint_type--hidden").filter('[data-cc-hint-type="' + e + '"]').removeClass("bp_form__cc_hint_type--hidden")), _r_();
}, i.exports = n.extend(o), _r_();
}), B.define("component/bp/payment-details-form/cc-expiry", function(e, t, i) {
_i_("3bb:72e81f5c");
var n = e("component"), a = e("bp/validatable-field"), r = e("bp/store"), _ = Object.assign({}, a);
_.init = function() {
_i_("3bb:af4773ff"), this.props = {}, this.props.name = "cc_month", r.subscribe(this.render.bind(this)), _r_();
}, _.render = function(e, t) {
_i_("3bb:fe914cc312"), this.renderValidation(e, t), _r_();
}, i.exports = n.extend(_), _r_();
}), B.define("component/bp/payment-details-form/cc-expiry-combo", function(e, t, i) {
_i_("3bb:ba4361f2");
var n = e("component"), a = e("bp/validatable-field"), r = e("bp/store"), _ = Object.assign({}, a);
_.init = function() {
_i_("3bb:7ca8e04f"), this.props = {}, this.props.name = "cc_month", r.subscribe(this.render.bind(this)), this.$cc_month = this.$el.find('[name="cc_month"]'), this.$cc_year = this.$el.find('[name="cc_year"]'), this.$cc_month.data("blockValidation", !0), this.$cc_year.data("blockValidation", !0), this.$el.on("focusout change", "select", this._handleManipulation.bind(this)), _r_();
}, _._handleManipulation = function(e) {
if (_i_("3bb:7654cace"), $(e.currentTarget).data("hadFocus", !0), "change" === e.type) return this._maybeRenderValidation(), _r_();
var t = $(e.relatedTarget).attr("name");
"focusout" === e.type && "cc_month" !== t && "cc_year" !== t && this._maybeRenderValidation(!0), _r_();
}, _._maybeRenderValidation = function(e) {
_i_("3bb:a914efe9");
var t = !1;
this.$cc_month.data("hadFocus") && this.$cc_year.data("hadFocus") && (t = !0, this.$cc_month.data("blockValidation", !1), this.$cc_year.data("blockValidation", !1)), (t || e) && this.renderValidation(this.state, this.prevState), _r_();
}, _.render = function(e, t) {
_i_("3bb:12ca3cb6"), this.state = e, this.prevState = t, this._maybeRenderValidation(), _r_();
}, i.exports = n.extend(_), _r_();
}), B.define("component/bp/price-details", function(e, t, i) {
_i_("3bb:c2b3709b");
var n, a, r, _ = e("component"), o = e("bp/emitter"), s = B.utils.accounting, l = e("bp/store"), c = e("et"), d = {}, b = !0;
function p(e) {
_i_("3bb:940b0bb7");
var t = e.addons.reverse();
h(t), f(e), _r_();
}
function u() {
_i_("3bb:6f9f9494"), o.on("ADDONS:change", p), l.subscribe(this.render.bind(this)), o.trigger("ADDONS:init"), _r_();
}
function h(e) {
_i_("3bb:e18e9019");
var t = 0;
if (0 === e.length) return d.addonsSum.closest(".bp_pricedetails_breakdown_addons").hide(), _r_(!0);
e.forEach(function(e) {
_i_("3bb:a784cd4b"), t += e.userPrice, _r_();
}), t = s.formatMoney(t, a), d.addonsSum.closest(".bp_pricedetails_breakdown_addons").show(), d.addonsSum.html(t), _r_();
}
function f(e) {
_i_("3bb:be16b47d");
var t = e.userCurrencyTotalCost, i = e.hotelCurrencyTotalCost, n = s.formatMoney(t, a), _ = s.formatMoney(i, r);
d.todayYouPay.html(n), d.payAtStay.html(n), d.totalHotelCurrency.html(_), d.totalUserCurrency.html(n), d.clarificationHotelCurrency.html(_), d.clarificationUserCurrency.html(n), _r_();
}
function m(e) {
if (_i_("3bb:bd1c6c6d"), b ? b = !1 :B && B.env && B.env.b_hotel_has_per_person_excluded_charges && c.stage("eDUIFbOcYEMMcQefHceEcYPGCKXe", 2), !c.track("eDUIFbOcYEMMcQefHceEcYPGCKXe")) return _r_();
var t = $(".bs_left_excluded_charges_block");
if (!t.length) return _r_();
t.find("ul>li").each(function() {
_i_("3bb:247f7294");
var t = $(this);
if (!t.data("charge-depends-on-persons") && !t.data("charge-depends-on-nights")) return _r_();
var i = !!parseInt(t.data("charge-depends-on-persons"));
if (!i) return _r_();
var n = !!parseInt(t.data("charge-depends-on-nights")), a = parseFloat(t.data("charge-base-value"));
i && (a *= e), n && (a *= parseInt(t.data("charge-nights-number"))), t.find(".excluded_fees_price").html(s.formatMoney(a, r)), t.find(".charge_number_of_guests").text(B.jstmpl.translations("bh_bp_wysiwyp_math_cur_guests_x", e, {
num_guests:e
})), _r_();
}), _r_();
}
var M = {};
M.init = function() {
_i_("3bb:056a688d"), n = this.$el, d.addonsSum = n.find("[data-pd-addons-sum='']"), d.todayYouPay = n.find("[data-pd-paytoday-withaddons='']"), d.payAtStay = n.find("[data-pd-payatstay-withaddons='']"), d.totalHotelCurrency = n.find("[data-pd-total-hotelcurrency='']"), d.totalUserCurrency = n.find("[data-pd-total-usercurrency='']"), d.clarificationHotelCurrency = n.find("[data-pd-clarification-hotelcurrency='']"), d.clarificationUserCurrency = n.find("[data-pd-clarification-usercurrency='']"), a = n.data("user-currency-code"), r = n.data("hotel-currency-code"), u.call(this), _r_();
}, M.shouldUpdate = function(e, t) {
if (_i_("3bb:7e548701"), !e || !e.rooms_guests_total) return _r_(!1);
if (!t) return _r_(!0);
return _r_(e.rooms_guests_total !== t.rooms_guests_total);
}, M.render = function(e, t) {
if (_i_("3bb:f415e94d"), !this.shouldUpdate(e, t)) return _r_();
var i = this.$el.find(".bp_total_guests_copy_with_number");
if (0 === i.length) return _r_();
var n = i.data("copy"), a = parseInt(e.rooms_guests_total, 10);
i.text(B.jstmpl.translations(n, a, {
num_guests:a
})), m(a), _r_();
}, i.exports = _.extend(M), _r_();
}), B.define("component/bp/top-validation-errors", function(e, t, i) {
_i_("3bb:70835372");
var n = e("component"), a = e("jquery"), r = {};
r.init = function() {
_i_("3bb:3c588daa");
var t = this.$el.find("li a");
t.on("click", function(t) {
_i_("3bb:67f9b022");
var i, n = a(this).attr("href"), r = a(n);
if (!r) return _r_(!0);
if (i = r, i = i.length > 0 ? i :a('[name="' + n.replace("#", "") + '"]'), 0 === i.length) {
var _ = e("squeak");
return _("We showed error for a filled [" + r + "] that is not in DOM on BS" + (B.env.b_stage || "x")), _r_();
}
a(window).scrollTo(r, 350, {
easing:"easeOutCubic",
offset:{
top:-30
},
onAfter:function() {
_i_("3bb:6d2008b7"), r.focus(), _r_();
}
}), t.preventDefault(), _r_();
}), this.$el.find('[role="alert"]').focus(), _r_();
}, i.exports = n.extend(r), _r_();
}), B.define("component/bp/main-form", function(e, t, i) {
_i_("3bb:35db2b8c");
var n = e("component"), a = e("utils/throttled"), r = e("bp/env"), _ = e("bp/store"), o = e("bp/main-form-validation").fields, s = e("bp/validate").validate, l = e("events"), c = e("jquery"), d = [ "booker_title", "firstname", "lastname", "email", "email_confirm", "phone", "bp_address_type" ], b = [ "address1", "cc1", "city", "zip" ];
3 === B.env.b_stage && r.get("showBDate") && (d = d.concat([ "bday", "bmonth", "byear" ])), B.env && B.env.fe_run_enable_book_with_phone && B.env.b_stage && 2 === B.env.b_stage && (d.push("cc1"), d.push("phone")), B.env && B.env.b_is_bbtool_user && (d = d.concat(b)), 2 === B.env.b_stage && r.get("travelPurposeIsRequired") && d.push("bp_travel_purpose");
var p = !0, u = {};
u.init = function() {
_i_("3bb:26014cd7"), this.$el.on({
keyup:a(this._onFieldInput.bind(this), 300),
change:this._onFieldChange.bind(this)
}), this.$el.on("submit", this._onFormSubmit.bind(this)), p && (this.$el.find("input").not('[type="submit"]').on("blur", this._onFieldBlur.bind(this)), this.$el.find("select").on("change", this._onFieldBlur.bind(this))), setTimeout(function() {
_i_("3bb:eabec3ff"), _.dispatch({
type:"INIT",
payload:r.get("storeInitialState")
}), m("email", this.$el.find('[name="email"]').val()), m("email_confirm", this.$el.find('[name="email_confirm"]').val()), _r_();
}.bind(this), 4), r.get("guestPIIFields") && (d = d.concat(r.get("guestPIIFields"))), this.$el.find(".bp_form__field__msg").attr("role", "alert"), this.$el.find("[data-optional]").each(function(e, t) {
_i_("3bb:9991ade5");
var i = c(t).attr("name");
if (c(t).data("optional") && o[i] && (o[i].optionalOnServerValidation = !0, o[i].clientValidators)) {
var e = o[i].clientValidators.indexOf("empty");
e > -1 && o[i].clientValidators.splice(e, 1);
}
_r_();
}), _r_();
};
function h(e) {
_i_("3bb:36712bc3");
var t = _.getState();
return _r_(t.main_form && "business" === t.main_form.bp_address_type && b.indexOf(e) >= 0);
}
function f(e) {
_i_("3bb:582c831c"), _.dispatch({
type:"UPDATE_BUSINESS_ADDRESS",
payload:e
}), _r_();
}
function m(e, t) {
if (_i_("3bb:d28bd992"), -1 === d.indexOf(e)) return _r_(!0);
if (h(e)) {
var i = {};
return i[e] = t, f(i), _r_();
}
_.dispatch({
type:"UPDATE_MAIN_FORM",
payload:{
key:e,
value:t
}
}), _r_();
}
function M(e, t) {
if (_i_("3bb:00aebbe9"), B.env && B.env.fe_run_enable_book_with_phone && B.env.b_stage && 2 === B.env.b_stage && "cc1" === e) return _r_(t.main_form[e]);
if (-1 !== [ "address1", "cc1", "city", "zip" ].indexOf(e)) {
if ("business" === t.main_form.bp_address_type) return _r_(t.business_address[e]);
return _r_(t.personal_address[e]);
}
if (-1 !== [ "cc_number", "cc_type", "cc_name", "cc_cvc", "cc_month", "cc_year" ].indexOf(e)) return _r_(t.payment_cc_details[e]);
if ("bb_loyalty_redeem_credit_amount_formatted" === e) return _r_(t.bb_loyalty_redeem_credit_amount_formatted);
if ("bp_travel_purpose" === e) return _r_(t.bp_travel_purpose);
return _r_(t.main_form[e]);
}
function g(e) {
if (_i_("3bb:4ebb2642"), !o[e]) return _r_(!0);
var t = _.getState(), i = M(e, t), n = [ {
name:e,
value:i
} ];
if ("email" === e) {
var a = t.main_form.email_confirm;
a && "" !== a && n.push({
name:"email_confirm",
value:a
});
}
"email_confirm" === e && n.push({
name:"email",
value:t.main_form.email
}), "cc_number" === e || "cc_cvc" === e ? n.push({
name:"cc_type",
value:M("cc_type", t)
}) :"cc_type" === e && ("" !== M("cc_number", t).toString().trim() && n.push({
name:"cc_number",
value:M("cc_number", t).toString().trim()
}), "" !== M("cc_cvc", t).toString().trim() && n.push({
name:"cc_cvc",
value:M("cc_cvc", t).toString().trim()
})), ("cc_month" === e || "cc_year" === e) && (n = [ {
name:"cc_month",
value:M("cc_month", t)
}, {
name:"cc_year",
value:M("cc_year", t)
} ]), s(n).then(function(e) {
_i_("3bb:98bf8ad2"), _.dispatch({
type:"UPDATE_VALIDATION_FIELDS",
payload:e.results
}), _r_();
}), _r_();
}
u._onFieldInput = function(e) {
_i_("3bb:42a91c4e");
var t = e.target.getAttribute("name"), i = e.target.value;
m(t, i), _r_();
}, u._onFieldChange = function(e) {
_i_("3bb:7fbe3124");
var t = e.target.getAttribute("name"), i = e.target.value;
if (c(e.target).data("blockValidation")) return _r_();
m(t, i), p || g(t), _r_();
}, u._onFormSubmit = function() {
_i_("3bb:327dcdd6"), l.trigger("bp:form_submit"), _r_();
}, p && (u._onFieldBlur = function(e) {
_i_("3bb:4f3b9fb7"), setTimeout(function() {
_i_("3bb:bccf1fbe");
var t = e.target.getAttribute("name"), i = e.target.value;
if (c(e.target).data("blockValidation")) return _r_();
m(t, i), g(t), _r_();
}.bind(this), 4), _r_();
}), i.exports = n.extend(u), _r_();
}), B.define("component/bp/compset", function(e, t, i) {
_i_("3bb:f40616d6");
var n = e("component"), a = e("events"), r = e("event-emitter"), _ = e("read-data-options"), o = e("bp/env"), s = e("bp/compset"), l = r.extend({});
l.init = function() {
_i_("3bb:3791cdbb"), this.options = _(this.$el, {
extraClasses:{
name:"compset-extra-classes",
type:String
},
header:{
name:"compset-header",
type:String
},
headerExtraClasses:{
name:"compset-header-extra-classes",
type:String
},
rowWrap:{
name:"compset-row-wrap",
type:Boolean
},
hotelsPerRow:{
name:"compset-hotels-per-row",
type:Number
},
src:{
name:"compset-src",
type:String
}
}), this.compset = new s({
params:{
no_cc:0
},
onComplete:function(e) {
return _i_("3bb:0626c485"), e.compset_list_class = "bp-compset-list " + (this.options.extraClasses || ""), e.compset_header_class = this.options.headerExtraClasses || "", e.row_wrap = this.options.rowWrap, e.hotels_per_row = this.options.hotelsPerRow, e.compset_header = this.options.header || "", e.compset_src = this.options.src || "", e.b_lang = B.env.b_lang, e.b_domain_for_app = B.env.b_nonsecure_hostname, e.b_stage = B.env.b_stage, _r_(e);
}.bind(this)
}), this.trigger("compset:before_fetch"), this.options.src && a.trigger("compset:before_fetch:" + this.options.src), this.compset.render({
hid:B.env.b_hotel_id,
aid:B.env.aid,
label:B.env.b_label,
lang:B.env.b_lang,
stype:B.env.b_site_type_id,
checkin:o.get("checkin"),
checkout:o.get("checkout")
}).then(function(e) {
_i_("3bb:3eb63833"), this.$el.html(e).addClass("bp-compset--loaded"), this.trigger("compset:fetched"), this.trigger("compset:loaded"), this.options.src && (a.trigger("compset:fetched:" + this.options.src), a.trigger("compset:loaded:" + this.options.src)), _r_();
}.bind(this))["catch"](function() {
_i_("3bb:d6e90bbd"), this.trigger("compset:fetched"), this.trigger("compset:empty"), this.options.src && (a.trigger("compset:fetched:" + this.options.src), a.trigger("compset:empty:" + this.options.src)), _r_();
}.bind(this)), _r_();
}, i.exports = n.extend(l), _r_();
}), B.define("component/bp/room", function(e, t, i) {
_i_("3bb:55c8fd1c");
var n = e("component"), a = e("bp/store"), r = {};
r.init = function() {
_i_("3bb:f03b75d8"), this.props = {
roomId:this.$el.data("room-id"),
sequencialId:this.$el.data("room-sequencial-id")
}, this.$guestsQuantitySelects = this.$el.find("[data-room-guests-select]"), this.$el.on("change", "[data-room-guests-select]", this._onGuestsQuantityChange.bind(this)), _r_();
}, r._onGuestsQuantityChange = function(e) {
_i_("3bb:3c5cdd3d"), a.dispatch({
type:"UPDATE_ROOM_GUESTS_QUANTITY",
payload:{
roomId:this.props.roomId,
sequencialId:this.props.sequencialId,
value:e.target.value
}
}), _r_();
}, i.exports = n.extend(r), _r_();
}), B.define("component/bp/cc_block_raf_checkbox", function(e, t, i) {
"use strict";
_i_("3bb:e3ca3b81");
var n = e("component"), a = [ "625818", "601382", "621283", "621297", "621330", "621331", "621332", "621333", "621568", "621569", "621660", "621661", "621662", "621663", "621665", "621666", "621668", "621669", "621672", "621725", "621756", "621757", "621758", "621759", "621785", "621786", "621787", "621788", "621789", "621790", "622752", "622753", "622754", "622755", "622756", "622757", "622758", "622759", "622760", "622761", "622762", "622763", "622764", "622765", "622788", "623184", "623208", "623569", "623571", "623572", "623573", "623575", "623586", "625834", "625908", "625909", "628388", "622284", "622285", "622283", "625902", "625902001", "628210", "622148", "622149", "622268", "622269", "622300", "625099", "625839", "625953", "628230", "628264", "623592", "625359", "621080", "621081", "621284", "621466", "621467", "621488", "621499", "621598", "621621", "621673", "621700", "622280", "622700", "622707", "622966", "622988", "623211", "623669", "625955", "625956", "621490", "621491", "621492", "622570", "622650", "622655", "622657", "622658", "622659", "622661", "622662", "622663", "622664", "622665", "622666", "622667", "622668", "622669", "622670", "622671", "622672", "622673", "622674", "622685", "622687", "623155", "623156", "623157", "623158", "623159", "625339", "625975", "625976", "625977", "625979", "625981", "628201", "628202", "622680", "622688", "622689", "622766", "622767", "622768", "628206", "628208", "628209", "622343", "621251", "621589", "622127", "625357", "622302", "622477", "622509", "622510", "620518", "621018", "621518", "621728", "625121", "621326959", "621637008", "628320", "621637002", "621577", "622425", "621752", "621585", "622991", "621633", "622147", "623589011", "622906", "625519", "628386", "621222", "622630", "622631", "622632", "622633", "623020", "623021", "623022", "623023", "621519", "622169", "6243051", "6243052", "621225", "621226", "621227", "621281", "621288", "621558", "621559", "621721", "621722", "621723", "622200", "622202", "622203", "622206", "622208", "622210", "622211", "622212", "622213", "622214", "622215", "622220", "622223", "622224", "622225", "622229", "622230", "622231", "622232", "622233", "622234", "622235", "622237", "622238", "622239", "622240", "622245", "622246", "62451804", "62451810", "62451811", "6245806", "62458071", "6253098", "628286", "628288", "955880", "955881", "955882", "955888", "621678002", "62109202", "621326929", "622416", "628399", "623007", "621637007", "623216", "625192", "622271", "940037", "621326969", "621637003", "62163111", "622156", "622157", "622525", "622526", "625360", "625361", "62367291", "623686", "623698", "623699", "621365010", "628379", "621065", "621517", "623213", "628289", "621637009", "623551", "62127812", "622648", "628248", "621345", "621637004", "621637006", "622470", "621326939", "625150", "628326", "623589006", "62127813", "621537", "621736", "621637005", "622362", "622859", "622288", "622686", "628280" ];
i.exports = n.extend({
on_checkbox_click:function() {
_i_("3bb:18d5e4af");
var e = $(this).find("#raf_cc_checkbox").first();
r(), e.prop("checked") && $("#save_card_tick").prop("checked", !0), _r_();
},
disable_raf_checkbox_on_amex:function() {
_i_("3bb:8b67ef8b");
var e = $("#cc_type option:selected");
"americanexpress" == e.attr("data-abbr") ? ($("#raf_cc_checkbox").prop("checked", !1), $("#raf_cc_checkbox").prop("disabled", !0)) :"unionpaycreditcard" == e.attr("data-abbr") ? r() :$("#raf_cc_checkbox").prop("disabled", !1), _r_();
},
init:function() {
_i_("3bb:f94ad091"), this.$el.on("click", this.on_checkbox_click), $("#cc_type").on("change", this.disable_raf_checkbox_on_amex), $("#cc_number").on("focusout", r), _r_();
}
});
function r() {
_i_("3bb:60120bcb");
var e = $("#cc_type option:selected");
if (!e || "unionpaycreditcard" != e.attr("data-abbr")) return _r_();
for (var t = $("#cc_number").val(), i = t.length, n = 0; n < a.length; n++) {
var r = a[n].length;
if (i >= r && t.substring(0, r) == a[n]) return $("#raf_cc_checkbox").prop("disabled", !1), _r_();
}
$("#raf_cc_checkbox").prop("checked", !1), $("#raf_cc_checkbox").prop("disabled", !0), _r_();
}
_r_();
}), B.define("component/bp/stored_cc_details_for_raf", function(e, t, i) {
"use strict";
_i_("3bb:4b6c82ed");
var n = e("component");
i.exports = n.extend({
check:function() {
_i_("3bb:72322049");
var e = $("input[name=cc_card_id]:checked");
if (e) {
var t = e.closest("tr");
$("#raf_cc_checkbox").prop("disabled", t.find(".cc_name").hasClass("amex")), $("#raf_cc_checkbox").prop("checked", e.hasClass("is_used_for_raf"));
} else $("#raf_cc_checkbox").prop("checked", !1);
_r_();
},
init:function() {
_i_("3bb:35fb591e"), this.check(), $("input[name=cc_card_id]").on("change", this.check), $(".bp-bs3--add-new-cc-button a").on("click", this.check), _r_();
}
}), _r_();
}), B.define("component/bp/loyalty-redemption-form/amount", function(e, t, i) {
_i_("3bb:8c0e7054");
var n = e("component"), a = e("bp/validatable-field"), r = e("bp/store"), _ = Object.assign({}, a);
_.init = function() {
_i_("3bb:e5604973"), this.props = {}, this.props.name = "bb_loyalty_redeem_credit_amount_formatted", r.subscribe(this.render.bind(this)), _r_();
}, _.render = function(e, t) {
_i_("3bb:fe914cc313"), this.renderValidation(e, t), _r_();
}, i.exports = n.extend(_), _r_();
}), B.define("component/bp/jackpot-message", function(e, t, i) {
_i_("3bb:6c78dfbf");
var n = e("jquery"), a = e("component"), r = B.require("search-config");
function _(e, t, i) {
if (_i_("3bb:3af516ca"), r.isGroupSearch) return _r_();
var a = [ B.env.b_ufi, t, i, +r.adults ].join("_"), _ = {
method:"GET",
dataType:"json",
crossDomain:!0,
xhrFields:{
withCredentials:!0
},
url:B.env.b_nonsecure_hostname + "/is_cheapest",
data:{
hotel_id:B.env.b_hotel_id,
search_key:a
}
};
n.ajax(_).done(function(t) {
_i_("3bb:b4dcd7ba"), t.is_the_cheapest ? e.find(".bp_jackpot_message").show() :e.find(".bp_jackpot_message").hide(), _r_();
}), _r_();
}
i.exports = a.extend({
init:function() {
_i_("3bb:b20acb0f");
var e = this.$el, t = this.$el.data("checkin-date"), i = this.$el.data("checkout-date");
_(e, t, i), _r_();
}
}), _r_();
}), B.define("component/bp/autocomplete-guests", function(e, t, i) {
_i_("3bb:049b92b3");
var n = e("component/autocomplete-core"), a = e("bp/env");
i.exports = n.extend({
init:function() {
_i_("3bb:cec20af8");
var t = this;
this.optionsSpec = {
model:{
name:"model",
type:String,
required:!0
},
modelId:{
name:"model-id",
type:String,
defaultValue:""
}
}, this.items = [], this.$items = $({}), n.prototype.init.apply(this, arguments), this.options.model && (this._model = e(this.options.model)), this._model._items = a.get("stayerContactsList"), this.$input.on("focus", function() {
_i_("3bb:ec9f0955");
var e = $(this).val();
e && t._model._items.indexOf(e) < 0 && t.autocomplete(), _r_();
}), _r_();
},
autocomplete:function(e) {
if (_i_("3bb:7b5e7d8e"), e = e || {}, this.highlightReset({
preserveInputValue:!0
}), this.$list.empty(), this.$input.val() && this.$input.val().length) {
var t = this._model.filter(this.input.value, this.options.filterField, this.options);
this.items = this._model.getAggregateditems(t), t.length && this.render(t);
}
this.postAutocomplete(), _r_();
},
render:function(e) {
if (_i_("3bb:89cdd162"), !this.$input.is(":focus")) return _r_();
if (this.$list.empty(), e.length) for (var t = 0; t < e.length; t++) {
var i = e[t], n = $("<li/>").attr("data-list-item", "").attr("data-i", t).text(i);
this.$list.append(n);
}
this.$items = this.$list.children(), _r_();
},
listItemClick:function(e) {
_i_("3bb:abf265f5"), n.prototype.listItemClick.apply(this, arguments), _r_();
}
}), _r_();
}), B.define("bp/stayer-contacts", function(e, t, i) {
"use strict";
_i_("3bb:b9dcf871");
var n = e("event-emitter"), a = {};
function r() {
_i_("3bb:8b4a8cd1"), this._items = [], n.extend(this), _r_();
}
$.extend(r.prototype, {
broadcast:function(e, t) {
_i_("3bb:dc3e45d7");
var i = [].slice.apply(arguments);
Object.keys(a).forEach(function(e) {
_i_("3bb:d2c67a8e"), a[e].trigger.apply(a[e], i), _r_();
}), _r_();
},
filter:function(e) {
_i_("3bb:cdaf6857");
var t = new RegExp(e, "i");
return _r_($.grep(this._items, function(e) {
return _i_("3bb:3bf7ceb0"), _r_(e.match(t));
}));
},
getAggregateditems:function(e) {
_i_("3bb:5ececc21");
for (var t = [], i = 0; i < e.length; i++) {
var n = {};
n.value = e[i], n.valueLowerCase = e[i].toLowerCase(), t.push(n);
}
return _r_(t);
}
});
var _ = new r();
i.exports = _, _r_();
}), function(e) {
_i_("3bb:cdeb2a12"), e.define("component/feedback-base", function(i, n, a) {
_i_("3bb:09cb4987");
var r = i("component"), _ = i("jquery"), o = i("events"), s = {
StorageService:t,
submitModel:function(e, t) {
_i_("3bb:f2ba0307");
var i = _.ajax({
url:e,
method:"POST",
data:t
});
return _r_(i);
},
setObjectPath:function(e, t, i) {
_i_("3bb:a9d8ca6a");
var n = t.split("."), a = e, r = n.length - 1;
n.forEach(function(e, t) {
if (_i_("3bb:dc1ce93c"), t === r) return a[e] = i, _r_();
a[e] = a[e] || {}, a = a[e], _r_();
}), _r_();
}
};
a.exports = r.extend({
_utils:s,
config:{
url:"/receive_feedback",
defaultView:"index",
defaultErrorView:"error",
defaultActionEvent:"click",
defaultPoll:"general",
defaultStorage:"floops",
defaultTimeout:168,
defaultAutoclose:!1,
stopPropagation:!1,
neverExpire:!0
},
init:function() {
if (_i_("3bb:2aa0d7ae"), this.setupComponent(), !this.config.neverExpire && (this.setupStorage(), !this.storage)) return _r_();
if (this.setupModel(), !this.config.neverExpire) {
var e = this.storage.isExpired(this.model.poll);
if (!e) {
var t = _(".feedback-loop");
return t.length && t.hide(), _r_();
}
}
this.setupViews(), this.setupActions(), this.initActions(), this.render(), _r_();
},
setupComponent:function() {
_i_("3bb:2df8408e"), this.config = _.extend({}, this.config, this.$el.data()), _r_();
},
setupStorage:function() {
_i_("3bb:88388287");
var e = this.config.storage || this.config.defaultStorage;
this.storage = new t(e), this.storage.removeExpired(), _r_();
},
setupViews:function() {
_i_("3bb:ee1c0ac6");
var e = this.views = {}, t = this.$el;
t.children("[data-view]").each(function(t, i) {
_i_("3bb:134c4fd9");
var n = _(i), a = n.data(), r = a.view;
e[r] = {
config:a,
view:i,
$view:n
}, _r_();
}), this.setupGroups(), _r_();
},
setupGroups:function() {
_i_("3bb:6f65c131");
var e = this;
this.$el.off(".feedbackGroups").on("click.feedbackGroups", ".feedback-loop__group-header :checkbox", function() {
_i_("3bb:6dc1b123"), t(_(this).closest(".feedback-loop__group")), _r_();
});
function t(t) {
_i_("3bb:aed89ecd");
var i = t.find(".feedback-loop__group-body"), n = t.find(".feedback-loop__group-header :checkbox"), a = i.is(":visible"), r = n.is(":checked");
a != r && i.slideToggle({
duration:200,
complete:function() {
_i_("3bb:d9ba1114"), e.triggerResize(), _r_();
}
}), _r_();
}
_r_();
},
triggerResize:function() {
_i_("3bb:18bdb111"), this.$el.trigger("feedbackBase_resize"), _r_();
},
setupModel:function() {
_i_("3bb:04551eb1"), this.model = {
poll:this.config.poll || this.config.defaultPoll
}, _.extend(this.model, {
url:window.location.href,
action:window.booking && window.booking.env && window.booking.env.b_action
}), _r_();
},
setupActions:function() {
_i_("3bb:f96e2876");
var t = this.actions = {};
t.showView = function(e) {
_i_("3bb:1e9bf834"), this.render(e.view), _r_();
}, t.submit = function(e) {
_i_("3bb:85856f91");
var t = this;
s.submitModel(this.config.url, this.model).done(function() {
_i_("3bb:d3ce5433");
var e = t.config.timeout;
e && !t.config.neverExpire && t.storage.set(t.model.poll, !0, 1e3 * e * 3600), _r_();
}).fail(function() {
_i_("3bb:feb1206b");
var e = t.config.defaultErrorView;
if (t.views[e]) return _r_(t.render(e));
throw o.emit("FLOOPS.request.error"), Error("[FLOOPS] Error submitting feedback");
}), _r_();
}, t.beforeSubmit = function(e) {
_i_("3bb:6610586c"), this.$el.trigger("feedback_beforeSubmit"), this.updateModel(this.currentView), _r_();
}, t.autoClose = function() {
_i_("3bb:377948b6"), setTimeout(function() {
_i_("3bb:4493432a"), $el.fadeOut(200), _r_();
}, 3e3), _r_();
}, t.reset = function() {
_i_("3bb:2e875bc5"), this.updateModel(this.currentView, !0), _r_();
}, t.close = function() {
_i_("3bb:f56186c8"), this.$el.hide(), _r_();
}, t.trackGaEvent = function(t) {
_i_("3bb:2bd5c299");
var n, a = (t.feedbackGaEvent || "").split("|"), r = {
nonInteraction:!0
};
"www" === e.env.b_site_type ? n = i("ga-tracker") :"mdot" === e.env.b_site_type && (n = i(e.env.b_use_ga_tracker ? "ga-tracker" :"core/ga-tracker-mobile")), a.length >= 2 && (r.type = a[0], r.action = a[1] || "", r.label = a[2] || "", "undefined" != typeof a[3] && (r.value = a[3])), n && n.trackEvent && r.type && r.action && r.label && ("www" === e.env.b_site_type ? n.trackEvent(r.type, r.action, r.label, r.value) :"mdot" === e.env.b_site_type && (e.env.b_use_ga_tracker ? n.trackEvent(r.type, r.action, r.label, r.value) :n.trackEvent(r))), _r_();
}, _r_();
},
updateModel:function(e, t) {
_i_("3bb:217fdadc");
var i = this, n = this.views[e], a = n ? n.$view :this.$el, r = {};
a.find("[data-model]").each(function(e, n) {
_i_("3bb:c4bb26a2");
var a, r = _(n), l = r.data();
if (l.model && (a = String(l.model).match(/^([^\[\]]+)\[\]$/))) return o(a[1]), _r_();
if (l.hasOwnProperty("modelValue")) return _r_();
var c = t ? "" :r.val();
r.is(":checkbox,:radio") && !r.prop("checked") && (c = ""), s.setObjectPath(i.model, l.model, c), _r_();
});
function o(e) {
if (_i_("3bb:e221706d"), r[e]) return _r_();
r[e] = [], a.find('[data-model="' + e + '[]"]').each(function(i, n) {
_i_("3bb:6d4733f8");
var a = _(n), o = t ? "" :a.val();
a.is(":checkbox,:radio") && !a.prop("checked") && (o = ""), o && r[e].push(o), _r_();
}), s.setObjectPath(i.model, e, r[e].join(",")), _r_();
}
_r_();
},
initActions:function() {
_i_("3bb:541173d8");
var e = this;
this.$el.find(":not([data-component]) [data-action]").each(function(t, i) {
_i_("3bb:427d9c53");
var n = _(i), a = _.extend({
action:e.config.defaultAction,
on:e.config.defaultActionEvent,
autoclose:n.data("autoclose") || !1,
stopPropagation:n.data("stopPropagation") || e.config.stopPropagation
}, n.data()), r = a.action.split(/\s+/);
n.on(a.on, function(t) {
_i_("3bb:6a43c01a"), a.model && a.modelValue && s.setObjectPath(e.model, a.model, a.modelValue), e.updateModel(e.currentView), a.stopPropagation && t.stopPropagation(), r.forEach(function(t) {
_i_("3bb:76c8fee9"), e.actions[t].call(e, a), _r_();
}), _r_();
}), _r_();
}), e.config.stopPropagation && this.$el.on("click", function(e) {
_i_("3bb:0b1ac586"), e.stopPropagation(), _r_();
}), _r_();
},
render:function(e) {
_i_("3bb:14297540");
var t = this;
if (!this.views) return _r_();
if (this.$el.removeClass("feedback-loop--hidden"), e = e || this.config.defaultView, e === this.currentView) return _r_();
Object.keys(this.views).forEach(function(i) {
_i_("3bb:5b0f286e");
var n = this.views[i].$view;
if (i === e) {
this.currentView = i, n.data("viewAnimated") ? n.slideDown(300) :n.show();
var a = /off|0|disabled|none/g;
n.data("autoclose") && !a.test(n.data("autoclose")) && setTimeout(function() {
_i_("3bb:6893325f"), t.$el.fadeOut(300), _r_();
}, 2e3);
} else n.hide();
_r_();
}.bind(this)), this.triggerResize(), _r_();
}
}), _r_();
});
function t(e, i) {
if (_i_("3bb:84e9843d"), !(this instanceof t)) return _r_(new t(e, i));
i = i || "localStorage", this.ns = e, this._storage = this.getStorage(i), this.loadData(), _r_();
}
t.prototype.getStorage = function(e) {
_i_("3bb:b029f3ca");
try {
var t = window[e], i = "__storage_test__";
return t.setItem(i, i), t.removeItem(i), _r_(t);
} catch (n) {
return _r_();
}
_r_();
}, t.prototype.saveData = function() {
if (_i_("3bb:6864624c"), !this._storage) return _r_();
return _r_(this._storage.setItem(this.ns, JSON.stringify(this.data)));
}, t.prototype.loadData = function() {
_i_("3bb:21a7d97f");
var e = this._storage.getItem(this.ns);
try {
e = e && JSON.parse(e) || {};
} catch (t) {
e = {};
}
this.data = e, _r_();
}, t.prototype.removeExpired = function() {
_i_("3bb:a90c56f0");
var e = Object.keys(this.data), t = this.data;
e.filter(this.isExpired.bind(this)).forEach(function(e) {
_i_("3bb:c2d864c6"), delete t[e], _r_();
}), this.saveData(), _r_();
}, t.prototype.isExpired = function(e, t) {
_i_("3bb:988d3e97"), t = t || new Date().getTime();
var i = this.data[e];
if (!i || !i.expires) return _r_(!0);
return _r_(t > i.expires);
}, t.prototype.remove = function(e) {
_i_("3bb:052a98d2"), delete this.data[e], this.saveData(), _r_();
}, t.prototype.set = function(e, t, i) {
if (_i_("3bb:d60c876d"), i && i.constructor !== Date) {
var n = new Date().getTime();
i = new Date(n + i).getTime();
}
this.data[e] = {
value:t,
expires:i
}, this.saveData(), _r_();
}, t.prototype.get = function(e) {
_i_("3bb:ec4d6d94");
var t, i = this.data, n = i[e];
return i[e] && (this.isExpired(e) ? this.remove(e) :t = n.value), _r_(t);
}, _r_();
}(window.booking), function(e) {
_i_("3bb:1affab82"), e.define("component/feedback-inline", function(t, i, n) {
_i_("3bb:89db71a6");
var a = t("component"), r = t("events"), _ = t("jquery");
n.exports = a.extend({
init:function() {
_i_("3bb:0b5f0aa9");
var e = this;
this.config = {
url:"/receive_content_feedback",
modalExtraClass:"feedback-modal-wrapper",
modalMaskExtraClass:"",
hideClass:"",
modalPosition:"fixed",
modalTopMargin:0,
autoFocus:!0
}, this.setupComponent(), this.$el.on("click", "[data-action]", function(t) {
_i_("3bb:6c13f195");
var i = _(this);
t.preventDefault(), i.data("stopPropagation") && t.stopPropagation(), e.runElementActions(i), _r_();
}), _r_();
},
runElementActions:function(e, t) {
_i_("3bb:10d70a4c");
var i = this, n = (t || e.data("action") || "").split(/\s+/);
_.each(n, function(t, n) {
_i_("3bb:c569f635");
var a = i["action_" + n];
"function" == typeof a && a.call(i, e), i.triggerActionEvents(n), _r_();
}), _r_();
},
action_submit:function(e) {
_i_("3bb:ba3db9ff");
var t = e.data("model"), i = e.data("modelValue"), n = this.getModel();
return t && (n[t] = i), this.$el.trigger("feedbackInline_submit", n), _r_(_.ajax({
url:this.config.url,
method:"POST",
data:n
}));
},
action_external:function(i) {
_i_("3bb:af1cf5c7");
var n = e.env && e.env.b_is_tdot_traffic ? e.lightbox :t("lightbox"), a = i.data("url"), r = i.data("iframe_height_percentage") || 90, o = {
iframe:!0,
iframeHeight:Math.max(Math.floor(r * _(window).height() / 100), 550),
hideCallBack:function() {
_i_("3bb:d179fba7"), _(document.body).css("overflow", ""), _r_();
}
};
a && (n.show(a, o), _(document.body).css("overflow", "hidden")), _r_();
},
action_modal:function(i) {
_i_("3bb:e6f1de82");
var n, a = this, r = e.env && e.env.b_is_tdot_traffic ? e.lightbox :t("lightbox"), o = i.data("showForm"), s = i.data("modalView"), l = o ? _(o) :_(".feedback-loop-lightbox").filter('[data-poll="' + this.config.poll + '"]').eq(0), c = function() {
_i_("3bb:9bfb463f"), a.$el.trigger("feedbackInline_hideModal", {
$feedbackForm:l
}), a.triggerActionEvents("hideModal"), _r_();
}, d = function() {
_i_("3bb:8e0ca5f8"), a.$el.trigger("feedbackInline_beforeHideModal", {
$feedbackForm:l
}), _r_();
};
if (!l.length) return _r_();
s && (n = l.data("componentInstanceFeedbackBase"), n && n.render && n.render(s)), r.show(l, {
customWrapperClassName:this.config.modalExtraClass,
position:this.config.modalPosition,
topMargin:this.config.modalTopMargin,
customMaskClassName:this.config.modalMaskExtraClass,
hideCallBack:c,
hideBeforeCallBack:d
}), l.off(".feedbackInline").on("click.feedbackInline", "[data-close]", function() {
_i_("3bb:c4a9a11a"), r.hide(), _r_();
}).on("click.feedbackInline", '[data-action~="submit"]', function() {
_i_("3bb:98a239bd"), a.$el.trigger("feedbackInline_submitModal"), a.triggerActionEvents("submitModal", {
$modal:l
}), i.data("hideOnModalSubmit") && a.action_hide(), _r_();
}).on("feedbackBase_resize", function() {
_i_("3bb:2a98798c"), r.rePosition({
preserveAbsolute:!0
}), _r_();
}), a.config.autoFocus && l.find("input:visible, textarea:visible").first().focus(), a.$el.trigger("feedbackInline_showModal"), a.triggerActionEvents("showModal", {
$modal:l
}), _r_();
},
action_extraForm:function(e) {
_i_("3bb:ead0f947");
var t, i = this, n = e.data("showForm"), a = _(n ? n :'.feedback-loop-extra[data-poll="' + this.config.poll + '"]');
if (!a.length) return _r_();
a.data("tmplName") && (a = this.replaceWithJsTmpl(a), a.addClass("feedback-loop-extra").attr("data-poll", this.config.poll)), e.data("extraFormAnimated") ? a.slideDown(300) :a.show(), this.config.autoFocus && setTimeout(function() {
_i_("3bb:dceff0be"), a.find("input:text:visible,textarea:visible").focus(), _r_();
}, 50), this.$el.trigger("feedbackInline_showExtra"), a.find('[data-action~="close"],[data-close]').off(".feedbackInline").on("click.feedbackInline", function() {
_i_("3bb:c0f8663c"), i.$el.trigger("feedbackInline_hideExtra"), e.data("showOnCancel") && !t ? i.$el.show() :e.data("hideOnExtraClose") && i.action_hide(), _r_();
}).end().find('[data-action~="submit"]').off(".feedbackInline").on("click.feedbackInline", function() {
_i_("3bb:d4174a9d"), t = !0, e.data("hideOnExtraSubmit") && i.action_hide(), i.$el.trigger("feedbackInline_submitExtra"), i.triggerActionEvents("submitExtra", {
$extraForm:a
}), _r_();
}), _r_();
},
action_hide:function(e) {
_i_("3bb:adf478a2");
var t = this, i = e ? e.data("hideDelay") :null, n = e ? e.data("hideAnimated") :null, a = function() {
_i_("3bb:75a34236"), n ? t.$el.slideUp(200) :t.$el.hide(), t.config.hideClass && t.$el.addClass(t.config.hideClass), _r_();
};
i ? setTimeout(a, i) :a(), _r_();
},
action_hideOther:function(e) {
_i_("3bb:b8736d69"), _('[data-component*="feedback-inline"][data-poll="' + this.config.poll + '"]').not(this.$el).hide(), _r_();
},
action_hideForeign:function(e) {
_i_("3bb:fa1df519");
var t = (e.data("hideForeign") || "").split(/\s+/);
t.length && _.each(t, function(e, t) {
_i_("3bb:8412f2c7"), t && _('[data-component*="feedback-inline"][data-poll="' + t + '"]').hide(), _r_();
}), _r_();
},
action_showView:function(e) {
_i_("3bb:0276d38d");
var t = this, i = e.data("showView"), n = this.$el.find("[data-view]"), a = n.filter('[data-view="' + i + '"]'), r = a.data("viewAnimated");
n.each(function() {
_i_("3bb:86e0d512");
var e = _(this), n = e.data("view"), a = e.is(":visible");
n !== i || a ? n !== i && a && (r ? e.slideUp(200) :e.hide()) :r ? (t.$el.css({
overflow:"hidden",
height:t.$el.height()
}), e.slideDown(300, function() {
_i_("3bb:80a013af"), t.$el.css({
overflow:"",
height:""
}), _r_();
}), _(".inline-feedback__hidden").focus()) :e.show(), _r_();
}), _r_();
},
action_trackGaEvent:function(i) {
_i_("3bb:b141d3a7");
var n, a = (i.data("feedbackGaEvent") || "").split("|"), r = {
nonInteraction:!0
};
"www" === e.env.b_site_type ? n = t("ga-tracker") :"mdot" === e.env.b_site_type && (n = t(e.env.b_use_ga_tracker ? "ga-tracker" :"core/ga-tracker-mobile")), a.length >= 2 && (r.type = a[0], r.action = a[1] || "", r.label = a[2] || "", "undefined" != typeof a[3] && (r.value = a[3])), n && n.trackEvent && r.type && r.action && r.label && ("www" === e.env.b_site_type ? n.trackEvent(r.type, r.action, r.label, r.value) :"mdot" === e.env.b_site_type && (e.env.b_use_ga_tracker ? n.trackEvent(r.type, r.action, r.label, r.value) :n.trackEvent(r))), _r_();
},
replaceWithJsTmpl:function(t) {
_i_("3bb:9cc0ce91");
var i = t.data(), n = {
poll_id:this.config.poll
}, a = "", r = t;
return e.jstmpl && i.tmplName && (_.each(i, function(e, t) {
_i_("3bb:e8a2be23");
var i = e.match(/^tmplData(.+)$/);
i && i[1] && (n[String(i[1]).toLowerCase()] = t), _r_();
}), _.isPlainObject(i.tmplData) && _.extend(n, i.tmplData), a = e.jstmpl(i.tmplName).render(n)), a && (r = _(a), t.replaceWith(r), r.loadComponents()), _r_(r);
},
setupComponent:function() {
_i_("3bb:a765f0be"), _.extend(this.config, this.$el.data()), _r_();
},
getModel:function() {
_i_("3bb:3462e42f");
var e = this.$el.find("[data-view]:visible"), t = {
url:window.location.href,
action:window.booking && window.booking.env && window.booking.env.b_action,
poll:this.config.poll
};
return e.length || (e = this.$el), e.find("[data-model]").each(function() {
_i_("3bb:9441e65b");
var e = _(this), i = e.data();
!i.hasOwnProperty("modelValue") && i.model && (t[i.model] = e.val()), _r_();
}), _r_(t);
},
triggerActionEvents:function(e, t) {
_i_("3bb:e285197f");
var i = _.extend({
feedbackInline:this
}, t || {});
r && e && (r.emit("feedbackInline:" + e, i), this.config.poll && r.emit("feedbackInline:" + e + ":" + this.config.poll, i)), _r_();
}
}), _r_();
}), _r_();
}(window.booking), B.define("component/bp/guest-details-form/guest_pii", function(e, t, i) {
_i_("3bb:eb2c54a2");
var n = e("component"), a = e("bp/validatable-field"), r = e("bp/store"), _ = Object.assign({}, a);
_.init = function() {
_i_("3bb:bcc117e7");
var e = this.$el.find("input");
this.props = {}, this.props.name = e.attr("name"), this.$el.find(":checkbox").on("change", function(t) {
_i_("3bb:d5ad447a");
var i;
i = $(t.target).prop("checked") ? [ "address1", "city", "zip", "cc1" ].map(function(e, t) {
_i_("3bb:abada84e");
var i = $("#" + e), n = i.is("select") ? i.find(":selected").text() :i.val();
return _r_(n ? (t ? ", " :"") + n :"");
}).join("") :"", e.val(i).trigger("blur"), r.dispatch({
type:"UPDATE_MAIN_FORM",
payload:{
key:this.props.name,
value:i
}
}), _r_();
}.bind(this)), r.subscribe(this.render.bind(this)), _r_();
}, _.render = function(e, t) {
_i_("3bb:fe914cc314"), this.renderValidation(e, t), _r_();
}, i.exports = n.extend(_), _r_();
}), B.bp = {}, B.bp.bs2 = {}, B.bp.bs3 = {}, B.bp.emitter = B.require("bp/emitter"), B.bp.Main = function() {
_i_("3bb:7e20ac1a"), this.model_ = B.bp.Main.getModel(), this.preloadImages_(), this.initMainController_(), this.attachEvents_(), _r_();
}, B.bp.Main.getModel = function() {
_i_("3bb:bd1ac7c2");
var e = B.env.b_stage;
if (2 === e) return _r_(B.bp.bs2.Model.getInstance());
if (3 === e) return _r_(B.bp.bs3.Model.getInstance());
throw Error("BP. Unknown bookprocess stage: " + e);
}, B.bp.Main.prototype.preloadImages_ = function() {
_i_("3bb:ab430392");
for (var e = this.model_.getImagesToPreload(), t = 0, i = e.length; i > t; t++) B.bp.utils.preloadImage(e[t]);
_r_();
}, B.bp.Main.prototype.initMainController_ = function() {
_i_("3bb:5a63dc0e"), 2 === this.model_.getStage() ? new B.bp.bs2.MainController() :3 === this.model_.getStage() && new B.bp.bs3.MainController(), _r_();
}, B.bp.Main.prototype.attachEvents_ = function() {
_i_("3bb:2031c38c"), $(window).bind({
unload:$.noop
}), _r_();
}, $(document).ready(function() {
_i_("3bb:c9c5a978"), new B.bp.Main(), _r_();
}), B.bp.AbstractModel = function() {
_i_("3bb:1fdefd69"), this.rawData = this.initRawData_(), this.dataParser_ = new B.bp.AbstractModel.Parser(this.rawData), this.hotel_ = this.dataParser_.parseHotel(), this.imagesToPreload_ = this.dataParser_.parseImagesToPreload(), this.wasFormPrefilledByBrowser_ = this.dataParser_.parseIfFormWasPrefilledByBrowser(), this.fieldViews_ = {}, this.setFormWasRendered_(), _r_();
}, B.bp.AbstractModel.Url = {
VALIDATE:"/validate",
EMAIL_DOMAINS_SPELLING:"/email_domains_spelling",
DELETE_STORED_CC:"/delete_cc_card"
}, B.bp.AbstractModel.EventType = {
MAIN_FORM_SUBMIT:"main_form_submit",
FIELD_VALIDATION:"field_validation"
}, B.bp.AbstractModel.FieldValidationEvent = function(e, t, i, n) {
_i_("3bb:56156e8a"), this.type = B.bp.AbstractModel.EventType.FIELD_VALIDATION, this.valid = e, this.fieldName = t, this.fullValidationData = i, this.uiFieldName = n || null, _r_();
}, B.bp.AbstractModel.FieldName = {
CUSTOMER_TITLE:"customer_title",
FIRST_NAME:"firstname",
LAST_NAME:"lastname",
EMAIL:"email",
EMAIL_CONFIRM:"email_confirm",
STREET:"address1",
CITY:"city",
ZIP:"zip",
COUNTRY:"cc1",
PHONE:"phone",
VAT_NUMBER:"vat_number",
COMPANY_NAME:"company_name",
CC_TYPE:"cc_type",
CC_NUMBER:"cc_number",
CC_NAME:"cc_name",
CC_EXPIRATION_DATE:"cc_expiry_date",
CC_CVC:"cc_cvc",
VISIT_REASON:"reason_to_visit"
}, B.bp.AbstractModel.Hotel, B.bp.AbstractModel.prototype.getRawData = function() {
return _i_("3bb:b0b0a8aa"), _r_(this.rawData);
}, B.bp.AbstractModel.prototype.getStage = function() {
return _i_("3bb:339cb9d9"), _r_(B.tools.object.getByName("stage", this.rawData));
}, B.bp.AbstractModel.prototype.getInterval = function() {
return _i_("3bb:cd5a2309"), _r_(B.tools.object.getByName("interval", this.rawData));
}, B.bp.AbstractModel.prototype.getHotel = function() {
return _i_("3bb:3fd8d234"), _r_(this.hotel_);
}, B.bp.AbstractModel.prototype.wasFormPrefilledByBrowser = function() {
return _i_("3bb:c0b6ba3b"), _r_(this.wasFormPrefilledByBrowser_);
}, B.bp.AbstractModel.prototype.isAltPaymentEnabled = function() {
return _i_("3bb:23ba8313"), _r_(this.rawData.altPaymentEnabled === !0);
}, B.bp.AbstractModel.prototype.isAuthLevelHigh = function() {
return _i_("3bb:a7897271"), _r_(1 === B.env.b_user_auth_level_is_high);
}, B.bp.AbstractModel.prototype.isAuthLevelLow = function() {
return _i_("3bb:3abc59e2"), _r_(1 === B.env.b_user_auth_level_is_low);
}, B.bp.AbstractModel.prototype.isAuthLevelNone = function() {
return _i_("3bb:8dfa82bf"), _r_(!this.isAuthLevelHigh() && !this.isAuthLevelLow());
}, B.bp.AbstractModel.prototype.isTdotTraffic = function() {
return _i_("3bb:daa946e6"), _r_(1 === B.env.b_is_tdot_traffic);
}, B.bp.AbstractModel.prototype.haveServerValidationErrors = function() {
return _i_("3bb:297b7782"), _r_(this.rawData.serverValidationErrors === !0);
}, B.bp.AbstractModel.prototype.getImagesToPreload = function() {
return _i_("3bb:9c0dae51"), _r_(B.tools.object.clone(this.imagesToPreload_));
}, B.bp.AbstractModel.prototype.registerFieldView = function(e, t) {
if (_i_("3bb:f6cf830d"), this.fieldViews_[e]) throw Error("Field view with name=" + e + " already exists");
this.fieldViews_[e] = t, _r_();
}, B.bp.AbstractModel.prototype.doesFieldViewExist = function(e) {
_i_("3bb:e2c1c519");
var t = this.fieldViews_[e];
return _r_(Boolean(t));
}, B.bp.AbstractModel.prototype.getFieldViewByName = function(e) {
_i_("3bb:2a0668a4");
var t = this.fieldViews_[e];
if (!t) throw Error("Field view with name=" + e + " doesn't exist");
return _r_(t);
}, B.bp.AbstractModel.prototype.shouldWeHideCvcOnValidation = function(e) {
return _i_("3bb:41c398b1"), _r_(e.fieldName === B.bp.AbstractModel.FieldName.CC_TYPE && e.fullValidationData.cc_type_amex && 1 === e.fullValidationData.hamexc);
};

function _initRawDataFromDOM() {
_i_("3bb:0ed90497");
var e = B.require("jquery"), t = e(".bp_json_data");
if (0 === t.length) throw Error("BP. Page must contain .bp_json_data element holding page json data");
var i, n = t.html();
if (n) try {
i = e.parseJSON(n);
} catch (a) {
throw Error("BP. An error occurred during parsing of page json (#bookTmpl elem): " + a.message);
}
return _r_(i);
}

function _initRawDataFromENV() {
_i_("3bb:988935a8");
var e = B.require("bp/env");
return _r_(e.getRaw());
}

function getRawDataProvider() {
return _i_("3bb:5fd0bdcf"), _r_(B.et.track("HBNHFLYDFQLNWe") ? _initRawDataFromENV :_initRawDataFromDOM);
}

B.bp.AbstractModel.prototype.initRawData_ = getRawDataProvider(), B.bp.AbstractModel.prototype.setFormWasRendered_ = function() {
_i_("3bb:d0be1692"), this.dataParser_.formWasRenderedHiddenInput_.val("1"), _r_();
}, B.bp.AbstractModel.Parser = function(e) {
_i_("3bb:778af038"), this.rawData_ = e, this.formWasRenderedHiddenInput_ = $("#bookForm").find("input:hidden[name=form_was_rendered]"), _r_();
}, B.bp.AbstractModel.Parser.parseSimpleStringField = function(e, t, i) {
_i_("3bb:2336dd01");
var n = B.require("jquery"), a = B.tools.object.getByName(t, e);
return _r_(goog.isString(a) ? n.trim(a) :void 0 !== i ? i :null);
}, B.bp.AbstractModel.Parser.prototype.parseImagesToPreload = function() {
_i_("3bb:1d9ba5f6");
var e = B.require("jquery"), t = this.rawData_.imagesToPreload, i = [];
if (t) {
if ("array" !== e.type(t)) throw Error("Raw data must contain array member `imagesToPreload`. Found: " + t);
for (var n = 0, a = t.length; a > n; n++) {
var r = t[n];
if ("string" !== e.type(r)) throw Error("`imagesToPreload` must contain strings. Found: " + r);
"" !== r && i.push(r);
}
}
return _r_(i);
}, B.bp.AbstractModel.Parser.prototype.parseIfFormWasPrefilledByBrowser = function() {
return _i_("3bb:a1657180"), _r_("1" === this.formWasRenderedHiddenInput_.val());
}, B.bp.AbstractModel.Parser.prototype.parseHotel = function() {
_i_("3bb:8642d156");
var e = B.require("jquery"), t = this.rawData_.hotel;
if ("object" !== e.type(t)) throw Error("Raw data must contain object member `hotel`. Found: " + t);
var i = t.id;
if ("number" !== e.type(i)) throw Error("Hotel must contain number member `id`. Found: " + i);
var n = [];
if (t.size200) for (var a = 0, r = t.size200.length; r > a; a++) {
var _ = t.size200[a];
if ("string" !== e.type(_)) throw Error("Room must contain `size200` Array.<string> member. Found: " + t.size200);
n.push(_);
}
var o = [];
if (t.size400) for (var s = 0, l = t.size400.length; l > s; s++) {
var c = t.size400[s];
if ("string" !== e.type(c)) throw Error("Room must contain `size400` Array.<string> member. Found: " + t.size400);
o.push(c);
}
return _r_({
id:i,
photos:{
size200:n,
size400:o
}
});
}, B.bp.AbstractMainController = function() {
_i_("3bb:6d846a70"), this.root = $("form#bookForm").eq(0), this.pageRoot = $("#bookTmpl"), this.model = B.bp.Main.getModel(), this.initAbstractControllers_(), this.attachAbstractEvents_(), _r_();
}, B.bp.AbstractMainController.prototype.initAbstractControllers_ = function() {
_i_("3bb:82efa51f"), new B.bp.HotelDetails(), new B.bp.FormDoubleSubmitPreventer(this.root), new B.bp.DoubleBookingWarning(), _r_();
}, B.bp.AbstractMainController.prototype.attachAbstractEvents_ = function() {}, B.bp.AbstractField = function(e, t, i, n) {
_i_("3bb:1229777b"), this.name = e, this.label = t, this.input = i, this.errorTextHolder = n, this.status = this.getInitialStatus_(), this.lastValidationXhr = null, this.registerItselfInModel_(), _r_();
}, B.bp.AbstractField.Status = {
NEUTRAL:1,
VALID:2,
INVALID:3
}, B.bp.AbstractField.prototype.getName = function() {
return _i_("3bb:8b1def91"), _r_(this.name);
}, B.bp.AbstractField.prototype.getValue = goog.abstractMethod, B.bp.AbstractField.prototype.getLabel = function() {
return _i_("3bb:60b26d02"), _r_(this.label);
}, B.bp.AbstractField.prototype.getInput = function() {
return _i_("3bb:203f5106"), _r_(this.input);
}, B.bp.AbstractField.prototype.getStatus = function() {
return _i_("3bb:bcb760d6"), _r_(this.status);
}, B.bp.AbstractField.prototype.makeNeutral = function() {
if (_i_("3bb:7738e2ee"), this.status === B.bp.AbstractField.Status.NEUTRAL) return _r_();
this.status = B.bp.AbstractField.Status.NEUTRAL, this.label.removeClass("val-yes").removeClass("val-no"), this.errorTextHolder.removeClass("pay-error--visible").html(""), _r_();
}, B.bp.AbstractField.prototype.makeValid = function() {
if (_i_("3bb:665ec867"), this.status === B.bp.AbstractField.Status.VALID) return _r_();
this.status = B.bp.AbstractField.Status.VALID, this.label.removeClass("val-no").addClass("val-yes"), this.errorTextHolder.removeClass("pay-error--visible").html(""), _r_();
}, B.bp.AbstractField.prototype.makeInvalid = function(e) {
_i_("3bb:7e43056c"), this.status = B.bp.AbstractField.Status.INVALID, this.label.removeClass("val-yes").addClass("val-no"), void 0 !== e && this.errorTextHolder.html(e).addClass("errorSimpleMsg").addClass("pay-error--visible"), _r_();
}, B.bp.AbstractField.prototype.show = function() {
_i_("3bb:bd4aa593"), this.label.show(), this.errorTextHolder.show(), _r_();
}, B.bp.AbstractField.prototype.hide = function() {
_i_("3bb:a44ef78f"), this.label.hide(), this.errorTextHolder.hide(), _r_();
}, B.bp.AbstractField.prototype.validate = B.tools.abstractMethod, B.bp.AbstractField.prototype.validateLocally = function(e) {
_i_("3bb:58acc596");
var t = "" !== this.getValue();
this.onValidationSuccess_(t, this.name, void 0, e), _r_();
}, B.bp.AbstractField.prototype.validateOnServer = function(e) {
_i_("3bb:067fb17b");
var t = this;
this.lastValidationXhr = $.ajax({
type:"post",
url:B.bp.AbstractModel.Url.VALIDATE,
data:this.getDataForServerValidation_(),
cache:!1,
success:function(i, n, a) {
if (_i_("3bb:67e10c01"), a === t.lastValidationXhr) {
var r = $.parseJSON(i), _ = r.error, o = !_;
t.onValidationSuccess_(o, r.field, _, e, r);
}
_r_();
}
}), _r_();
}, B.bp.AbstractField.prototype.getNameForServerValidation = function() {
return _i_("3bb:8b1def911"), _r_(this.name);
}, B.bp.AbstractField.prototype.getValueForServerValidation = function() {
return _i_("3bb:b73138ec"), _r_(escape(this.getValue()));
}, B.bp.AbstractField.prototype.getExtraDataForServerValidation = function() {
return _i_("3bb:b5954b79"), _r_(null);
}, B.bp.AbstractField.prototype.registerItselfInModel_ = function() {
_i_("3bb:bccfd1d6"), B.bp.Main.getModel().registerFieldView(this.name, this), _r_();
}, B.bp.AbstractField.prototype.getInitialStatus_ = function() {
return _i_("3bb:6b28d99e"), _r_(this.label.hasClass("val-yes") ? B.bp.AbstractField.Status.VALID :this.label.hasClass("val-no") ? B.bp.AbstractField.Status.INVALID :B.bp.AbstractField.Status.NEUTRAL);
}, B.bp.AbstractField.prototype.getDataForServerValidation_ = function() {
_i_("3bb:571018b4");
var e = $(this.input).data("espev") ? $(this.input).data("espev") :"", t = $(this.input).data("espev") ? booking.jstmpl.translations("loc_instalments_card_check") :"", i = {
field:this.getNameForServerValidation(),
value:this.getValueForServerValidation(),
lang:B.env.b_lang_for_url,
sid:B.env.b_sid,
pvid:B.env.pageview_id,
aid:B.env.b_aid,
hcc:B.env.b_countrycode,
espev:e,
espevt:t
};
return $.extend(i, this.getExtraDataForServerValidation()), _r_(i);
}, B.bp.AbstractField.prototype.onValidationSuccess_ = function(e, t, i, n, a) {
_i_("3bb:82cb65df");
var r = i || "";
e ? this.makeValid() :this.makeInvalid(r);
var _ = a || {}, o = new B.bp.AbstractModel.FieldValidationEvent(e, t, _, this.name);
setTimeout(function() {
_i_("3bb:94b95e25"), $(B.bp.Main.getModel()).trigger(o), B.require("bp/emitter").trigger("field_validation:" + t, {
fieldName:t,
valid:e,
fullValidationData:_
}), goog.isFunction(n) && n(o), _r_();
}, 0), _r_();
}, B.bp.UserValidatingField = function(e, t) {
if (_i_("3bb:a81090f5"), !B.bp.UserValidatingField.canInitialize(e)) throw Error("B.bp.UserValidatingField instance can't be created for field name=`" + e + "`. This field doesn't exist in DOM.");
goog.base(this, e, $("#label_" + e), $("#" + e), $("#error_" + e)), this.simpleLocalValidation_ = t || !1, this.validationTimeout_ = 0, this.attachEvents0_(), _r_();
}, goog.inherits(B.bp.UserValidatingField, B.bp.AbstractField), B.bp.UserValidatingField.canInitialize = function(e) {
return _i_("3bb:bcf03de6"), _r_(0 !== $("#" + e).length);
}, B.bp.UserValidatingField.prototype.getValue = function() {
return _i_("3bb:adb35f03"), _r_(this.input.val());
}, B.bp.UserValidatingField.prototype.validate = function() {
_i_("3bb:f0346adf"), clearTimeout(this.validationTimeout_), this.validationTimeout_ = setTimeout($.proxy(this.doValidation, this), 50), _r_();
}, B.bp.UserValidatingField.prototype.doValidation = function() {
_i_("3bb:7f954a80"), this.simpleLocalValidation_ ? this.validateLocally() :this.validateOnServer(), _r_();
}, B.bp.UserValidatingField.prototype.attachEvents0_ = function() {
_i_("3bb:c283673a");
var e;
if (e = this.input.is("select") ? "change" :"change blur", this.input.is(".no-validation")) return _r_(!0);
this.input.bind(e, $.proxy(this.validate, this)), _r_();
}, function() {
_i_("3bb:c1310462"), B.when({
events:"ready",
action:"book"
}).run(function(e) {
_i_("3bb:d6e63485");
var t = e("jquery"), i = 0, n = function() {
_i_("3bb:4571b50c");
var e = 0;
t("select.number_guests").each(function() {
_i_("3bb:41bf114c"), e += parseInt(t(this).val()), _r_();
}), t("input[type=checkbox].is_extrabed:checked").each(function() {
_i_("3bb:7d9507e3"), e += 1, _r_();
});
var i = t("#person_count");
if (0 == i.length) {
i = t(".person_count");
var n = "";
i.each(function() {
_i_("3bb:648bc805"), n = t(this).text().replace(/[0-9]+/, e), t(this).html(n), _r_();
});
} else {
var n = i.text().replace(/[0-9]+/, e);
i.html(n);
}
_r_();
}, a = function() {
_i_("3bb:8637c82c");
var e = [], n = t(".bp_pricedetails_total_hotel_currency"), a = t(".bp_pricedetails_total_value"), r = 1 * (a.data("price") || 0), _ = 1 * (n.data("price") || r), o = 0, s = 0, l = t("input:checkbox[name^=f_addon]:checked,input:checkbox[name^=addon]:checked,select.addon_price option.notnull:selected").parents(".uf_addon");
l.each(function(i) {
_i_("3bb:89c09bf0");
var n = t(this), a = n.find(".addon_price");
o += 1 * a.attr("price_hotel"), s += 1 * a.attr("price"), e.push({
dom:n,
type:n.data("addon-type"),
name:t.trim(n.find(".uf_addon_title").text()),
hotelPrice:1 * a.attr("price_hotel"),
userPrice:1 * a.attr("price"),
roomId:n.closest(".bp-room").data("room-id")
}), _r_();
}), _ += o, r += s, B.bp.emitter.trigger("ADDONS:change", {
hotelCurrencyTotalCost:_,
userCurrencyTotalCost:r,
addons:e
});
var c = window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
document.body.scrollTop = document.documentElement.scrollTop = (document.body.scrollTop || document.documentElement.scrollTop) + (i - c), _r_();
}, r = function(e) {
_i_("3bb:d7aa7aeb"), i = window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop, a(), _r_();
};
t(".uf_addon .uf_hidden_price").hide(), t(".uf_addon input:checked").parents(".uf_addon").addClass("uf_addon_hover").find(".uf_hidden_price").show(), t(".uf_addon_free input:checked").parents(".uf_addon_free").addClass("uf_addon_hover"), t(".uf_addon .uf_checkbox input").click(function() {
_i_("3bb:c26b2d30");
var e = t(this);
e.parents(".uf_addon").toggleClass("uf_addon_hover").find(".uf_hidden_price").fadeToggle("fast"), _r_();
}), t(".uf_addon_free .uf_checkbox input").click(function() {
_i_("3bb:d0e59e3c");
var e = t(this);
e.parents(".uf_addon_free").toggleClass("uf_addon_hover"), _r_();
}), t(".uf_addon select").on("change", function() {
_i_("3bb:693b4ea0");
var e = t(this).parents(".uf_addon");
e.find(".uf_checkbox input:checked").length && _(t(this)), _r_();
}), t(".uf_addon .uf_checkbox input:checked").each(function(e) {
_i_("3bb:a68d64d4");
var i = t(this).parents(".uf_addon");
i.find("select").length && _(t(this)), _r_();
});
function _(e) {
_i_("3bb:1edc25ab");
var t = e.parents(".uf_addon"), i = t.find(".uf_addon_price"), n = t.find(".uf_addon--optin--total-price-value"), a = i.data("price-per-unit"), _ = i.data("price-per-hotel-unit"), o = t.find(".guests_addon").val() || 1, s = t.find(".nights_addon").val() || 1, l = t.find(".quantity_addon").val() || 1, c = o * s * l, d = a * c, b = _ * c, p = i.attr("currency_symbol");
n.html(booking.utils.accounting.formatMoney(d, p));
var u = B.jstmpl.translations("d_paid_breakfast_addon_occupancy_variable", Number(o), {
num_guests:Number(o)
}), h = B.jstmpl.translations("d_paid_breakfast_addon_nights_variable", Number(s), {
num_nights:Number(s)
});
t.find(".uf_addon__total_price .uf_addon__total_price_amount").html(booking.utils.accounting.formatMoney(d, p)), t.find(".uf_addon__total_price .uf_addon__total_price_explanation").html(B.jstmpl.translations("d_paid_breakfast_addon_occupancy_nights", +o, {
guests:u,
nights:h
})), i.attr("price", d), i.attr("price_hotel", b), r(), _r_();
}
function o(e) {
_i_("3bb:6092448b");
var i = t(e).val(), n = t(e).parents(".bp-room"), a = n.find(".uf_addon"), r = a.find(".guests_addon");
r.val(i).trigger("change"), _r_();
}
B.bp.emitter.on("ADDONS:init", function() {
_i_("3bb:6d8949cc"), t("select.bp_bs2_guest_dropdown").each(function(e, t) {
_i_("3bb:e7c40811"), o(t), _r_();
}), t(".extrabed").click(function() {
_i_("3bb:d1f7f601"), t("select.number_guests").trigger("change"), _r_();
});
var e = t("input:checkbox[name^=addon]:checked").length > 0;
e && r(), t(B.bp.Main.getModel()).bind(B.bp.bs2.Model.EventType.TOTAL_RECALCULATION_FORCE, r), _r_();
});
var s = t(document);
s.on("click", "input:checkbox[name^=addon]", r), s.on("change", "select.bp_bs2_guest_dropdown", function(e) {
_i_("3bb:57f9381b"), o(e.currentTarget), _r_();
}), s.on("change", "select.number_guests", function() {
_i_("3bb:4aa5b290"), r(), n(), _r_();
}), _r_();
}), _r_();
}(), window.popup_ccfaq = function(e) {
return _i_("3bb:4ca8c2d4"), window.open(e, "", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=500,height=300,left=200,top=200"), _r_(!1);
}, window.popup_cancel_big = function(e) {
return _i_("3bb:436dbdce"), window.open(e, "", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=800,height=500,left=200,top=200"), _r_(!1);
}, window.popup_cancel_bigish = function(e) {
return _i_("3bb:01e5d8c8"), window.open(e, "", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=600,height=580,left=200,top=200"), _r_(!1);
}, window.popup = function(e, t, i) {
_i_("3bb:1dd90eb0");
var n = window.open(e, "popupWindow", "width=" + t + ",height=" + i + ",menubar=yes,toolbar=yes,location=no,bookmarks=no,status=yes,scrollbars=yes,resizable=yes");
window.focus && n.focus(), _r_();
};

function bpDoAutocomplete() {
_i_("3bb:5b58bc63"), $("input[id^=guest_name]").each(function() {
_i_("3bb:0802ce25"), "" === $(this).val() && $(this).val(booking.env.b_prompt_text).addClass("grey").focus(function() {
_i_("3bb:60c4c4ed"), $(this).val() === booking.env.b_prompt_text && $(this).val("").removeClass("grey"), _r_();
}).blur(function() {
_i_("3bb:36ce844a"), "" === $(this).val() && $(this).val(booking.env.b_prompt_text).addClass("grey"), _r_();
}), _r_();
}), $("input[id^=guest_email]").each(function() {
_i_("3bb:b3648a02"), "" === $(this).val() && $(this).val(booking.env.b_prompt_text_email).addClass("grey").focus(function() {
_i_("3bb:d4730e9b"), $(this).val() === booking.env.b_prompt_text_email && $(this).val("").removeClass("grey"), _r_();
}).blur(function() {
_i_("3bb:413e224c"), "" === $(this).val() && $(this).val(booking.env.b_prompt_text_email).addClass("grey"), _r_();
}), _r_();
}), booking.book && $("#" + booking.book.formName).submit(function() {
_i_("3bb:a95da075"), $("input[id^=guest_name]").each(function() {
_i_("3bb:635f7a69"), $(this).val() === booking.env.b_prompt_text && $(this).val(""), _r_();
}), $("input[id^=guest_email]").each(function() {
_i_("3bb:42345699"), $(this).val() === booking.env.b_prompt_text_email && $(this).val(""), _r_();
}), _r_();
}), _r_();
}

function prefillFirstGuestName() {
_i_("3bb:c3065746"), $("input#firstname, input#lastname").blur(function() {
_i_("3bb:5d164c26");
var e = $("#guest_name_" + B.env.b_firstroom_id);
if (0 !== e.length && !B.env.prefillFirstGuestNameDisabled) {
var t = $("#firstname").val(), i = $("#lastname").val(), n = e.val();
if (n === B.env.b_prompt_text || n === t + " " || n === " " + i || n !== t + " " + i) {
var a;
a = "ja" == B.env.b_lang ? (t ? t + " " :"") + i :/^(hu|vi)$/.test(B.env.b_lang_for_url) || -1 !== B.env.b_lang.search(/zh|ja|ko/i) ? i + " " + t :t + " " + i, e.val(a).removeClass("grey").removeClass("guest-details-empty-field");
}
}
_r_();
}), _r_();
}

$(document).ready(function() {
_i_("3bb:448f5d9a"), prefillFirstGuestName(), bpDoAutocomplete(), _r_();
}), B.env.b_tech_no_sns || (booking.ensureNamespaceExists(sNSExperiments), booking.ensureNamespaceExists(sNSStartup)), B.bp.DoubleBookingWarning = function() {
_i_("3bb:ee2f4f8f"), this.root_ = $(".top-warning__m-type-double-booking"), this.hideLink_ = this.root_.find(".top-warning-double-booking-warning-hide-link"), this.attachEvents_(), _r_();
}, B.bp.DoubleBookingWarning.prototype.attachEvents_ = function() {
_i_("3bb:e0011a1b"), this.hideLink_.click($.proxy(this.hideBlock_, this)), _r_();
}, B.bp.DoubleBookingWarning.prototype.hideBlock_ = function() {
_i_("3bb:0657b0ed"), this.root_.slideUp(), _r_();
}, B.bp.FormDoubleSubmitPreventer = function(e) {
_i_("3bb:455dea33"), this.root_ = e, this.model = B.bp.Main.getModel(), this.submitted_ = !1, this.attachEvents_(), _r_();
}, B.bp.FormDoubleSubmitPreventer.SUBMITTED_CLASS = "form_is_submitted", B.bp.FormDoubleSubmitPreventer.prototype.attachEvents_ = function() {
_i_("3bb:ee618086"), this.root_.submit($.proxy(this.rememberOrPreventDoubleSubmit_, this)), _r_();
}, B.bp.FormDoubleSubmitPreventer.prototype.rememberOrPreventDoubleSubmit_ = function(e) {
_i_("3bb:e8e85a6b"), this.submitted_ && !B.bp.utils.isFormSubmittedProgramatically(e) || this.root_.attr("data-disabled") ? e.preventDefault() :(this.submitted_ = !0, this.root_.addClass(B.bp.FormDoubleSubmitPreventer.SUBMITTED_CLASS), $(this.model).trigger(B.bp.AbstractModel.EventType.MAIN_FORM_SUBMIT)), _r_();
}, B.bp.HotelAddress = function(e) {
if (_i_("3bb:3d315ad9"), this.root_ = e, 0 === this.root_.length) return _r_();
this.model_ = B.bp.Main.getModel(), this.headerText_ = this.root_.find(".hotel-address-text"), this.mapHtml_, this.mapUrl_, this.tooltipAdditionalClasses_ = this.root_.data("tooltip-additional-classes") || "", this.initMapHtmlAndUrl_(), this.mapHtml_ && this.mapUrl_ && (this.initTooltip_(), this.preloadMap_()), _r_();
}, B.bp.HotelAddress.prototype.initMapHtmlAndUrl_ = function() {
_i_("3bb:5d124b59");
var e = $("<div />");
e.html(this.root_.data("map-html"));
var t = e.find("#b_google_map_thumbnail"), i = t.data("map");
i && (i = this.preprocessUrl_(i), t.css("background-image", "url(" + i + ")"), this.mapHtml_ = e.html(), this.mapUrl_ = i), _r_();
}, B.bp.HotelAddress.prototype.initTooltip_ = function() {
_i_("3bb:17ada92d"), this.headerText_[0].tooltipText = this.mapHtml_, this.headerText_.tooltip({
track:!0,
fade:250,
extraClass:"hotel-address-map-tooltip " + this.tooltipAdditionalClasses_
}), _r_();
}, B.bp.HotelAddress.prototype.preloadMap_ = function() {
_i_("3bb:d682af2e"), B.bp.utils.preloadImage(this.preprocessUrl_(this.mapUrl_)), _r_();
}, B.bp.HotelAddress.prototype.preprocessUrl_ = function(e) {
return _i_("3bb:d7d4815d"), _r_(e.replace("http://", "//"));
}, B.bp.HotelDetails = function() {
_i_("3bb:8167c36d"), this.root_ = $(".bp_hotel_details_holder"), this.model_ = B.bp.Main.getModel(), this.data_ = this.model_.getHotel(), this.starsRating_ = this.root_.find(".bp_stars_rating"), this.hotelAddress_ = new B.bp.HotelAddress(this.root_.find(".hotel-address")), this.initGallery_(), _r_();
}, B.bp.HotelDetails.prototype.initGallery_ = function() {
_i_("3bb:b5a552a8"), new B.bp.bs2.SmallGallery(this.root_.find(".bp_hotel_gallery"), [ this.data_.photos.size200[0] ], [ this.data_.photos.size400[0] ]);
for (var e = this.root_.find(".bp_hotel_photo_preview"), t = 0, i = e.length; i > t; t++) {
var n = e.eq(t);
n[0].tooltipText = n.data("tooltip-html"), n.tooltip({
track:!0,
fade:250,
extraClass:"bp_hotel_photo_preview_tooltip"
});
}
_r_();
}, function() {
_i_("3bb:5e025f25");
function e() {
_i_("3bb:1dadb2c8");
var e = "https://secure.booking.com/htt_book", t = /booking\.com$/, i = "book.html", n = "bookForm", a = $("#bookForm");
r() || _();
function r() {
_i_("3bb:852331e0");
var e = t.test(location.hostname), r = a.attr("name") === n && a.attr("action") === i;
return _r_(e && r);
}
function _() {
_i_("3bb:bf41ca00");
var t = new Image();
t.onload = function() {
_i_("3bb:e9731233"), t = null, _r_();
}, t.src = e + "?url=" + encodeURIComponent(location.href), _r_();
}
_r_();
}
$(document).ready(function() {
_i_("3bb:08a1930a");
var t = B.require("bp/env").get("BP_REPORT_PHISHING");
t && e(), _r_();
}), _r_();
}(), B.bp.utils = {}, B.bp.utils.throwError = function(e, t) {
throw _i_("3bb:3f83e4a0"), t || B.bp.utils.logError(e), Error(e);
}, B.bp.utils.logError = function(e) {
_i_("3bb:9555f0b2"), "function" == typeof window.onerror && window.onerror(e, "", 0), _r_();
}, B.bp.utils.preloadImage = function(e) {
_i_("3bb:8aed3c58");
var t = new Image();
t.onload = $.noop, t.src = e, _r_();
}, B.bp.utils.FormSubmitEvent = function(e) {
_i_("3bb:5ce91e8a"), this.type = "submit", this.programmatical = e, _r_();
}, B.bp.utils.submitFormProgrammatically = function(e, t) {
_i_("3bb:d2faa466"), t && Object.keys(t).forEach(function(i) {
_i_("3bb:1f039ee9");
var n = t[i], a = $('<input type="hidden" />');
a.attr({
name:i,
value:n
}), e.append(a), _r_();
}), e.trigger(new B.bp.utils.FormSubmitEvent(!0)), _r_();
}, B.bp.utils.isFormSubmittedProgramatically = function(e) {
return _i_("3bb:0e514eee"), _r_("submit" === e.type && e.programmatical);
}, B.bp.bs2.Model = function() {
_i_("3bb:46f87ecc"), goog.base(this), this.parser_ = new B.bp.bs2.Model.Parser(this.getRawData()), this.customerTitle_ = this.parser_.parseCustomerTitle(), this.customerFirstName_ = this.parser_.parseCustomerFirstName(), this.companyAttached_ = this.parser_.parseCompanyAttached(), this.travelPurpose_ = this.parser_.parseTravelPurpose(), this.rooms_ = this.parser_.parseRooms(), _r_();
}, goog.inherits(B.bp.bs2.Model, B.bp.AbstractModel), goog.addSingletonGetter(B.bp.bs2.Model), B.bp.bs2.Model.EventType = {
CUSTOMER_TITLE_CHANGE:"customer_title_change",
CUSTOMER_FIRST_NAME_CHANGE:"customer_first_name_change",
CUSTOMER_LAST_NAME_CHANGE:"customer_last_name_change",
TRAVEL_PURPOSE_CHANGE:"travel_purpose_change",
VISIT_REASON_CHANGE:"visit_reason_change",
EMAIL_CHANGE:"email_change",
EMAIL_CONFIRM_CHANGE:"email_confirm_change",
GROWL_SHOW_UP:"growl_show_up",
TOTAL_RECALCULATION_FORCE:"total_recalculation_force"
}, B.bp.bs2.Model.GrowlShowUpEvent = function(e) {
_i_("3bb:5f1eea6d"), this.type = B.bp.bs2.Model.EventType.GROWL_SHOW_UP, this.abbr = e, _r_();
}, B.bp.bs2.Model.TravelPurpose = {
LEISURE:"leisure",
BUSINESS:"business",
RATHER_NOT_TO_SAY:"rathernotsay"
}, B.bp.bs2.Model.Room, B.bp.bs2.Model.Growl, B.bp.bs2.Model.prototype.getCustomerTitle = function() {
return _i_("3bb:5f90e059"), _r_(this.customerTitle_);
}, B.bp.bs2.Model.prototype.setCustomerTitle = function(e) {
_i_("3bb:bc8dad05");
var t = e;
if ("" === t && (t = null), t === this.customerTitle_) return _r_();
this.customerTitle_ = t, $(this).trigger(B.bp.bs2.Model.EventType.CUSTOMER_TITLE_CHANGE), _r_();
}, B.bp.bs2.Model.prototype.getCustomerFirstName = function() {
return _i_("3bb:137b10e1"), _r_(this.customerFirstName_);
}, B.bp.bs2.Model.prototype.setCustomerFirstName = function(e) {
_i_("3bb:97a04910"), e !== this.customerFirstName_ && (this.customerFirstName_ = e, $(this).trigger(B.bp.bs2.Model.EventType.CUSTOMER_FIRST_NAME_CHANGE)), _r_();
}, B.bp.bs2.Model.prototype.getCompanyAttached = function() {
return _i_("3bb:25931ce5"), _r_(this.companyAttached_);
}, B.bp.bs2.Model.prototype.getTravelPurpose = function() {
return _i_("3bb:a711b1db"), _r_(this.travelPurpose_);
}, B.bp.bs2.Model.prototype.getVisitReason = function() {
return _i_("3bb:1e44e8e5"), _r_(this.visitReason_);
}, B.bp.bs2.Model.prototype.setVisitReason = function(e) {
_i_("3bb:04e18502");
var t = e;
if ("" === t && (t = null), t === this.visitReason_) return _r_();
this.visitReason_ = t, $(this).trigger(B.bp.bs2.Model.EventType.VISIT_REASON_CHANGE), _r_();
}, B.bp.bs2.Model.prototype.setTravelPurpose = function(e) {
_i_("3bb:799b9083"), e !== this.travelPurpose_ && (this.travelPurpose_ = e, $(this).trigger(B.bp.bs2.Model.EventType.TRAVEL_PURPOSE_CHANGE)), _r_();
}, B.bp.bs2.Model.prototype.getRoomById = function(e) {
_i_("3bb:2f0e1470");
for (var t = null, i = 0, n = this.rooms_.length; n > i; i++) if (this.rooms_[i].id === e) {
t = B.tools.object.clone(this.rooms_[i]);
break;
}
return _r_(t);
}, B.bp.bs2.Model.prototype.getRooms = function() {
return _i_("3bb:b7c9d606"), _r_(this.rooms_);
}, B.bp.bs2.Model.prototype.getGrowlByAbbr = function(e) {
_i_("3bb:dd058189");
for (var t = null, i = 0, n = this.growls_.length; n > i; i++) if (this.growls_[i].abbr === e) {
t = B.tools.object.clone(this.growls_[i]);
break;
}
return _r_(t);
}, B.bp.bs2.Model.prototype.triggerGrowlShowUpEvent = function(e) {
_i_("3bb:2e23e5fb"), $(this).trigger(new B.bp.bs2.Model.GrowlShowUpEvent(e)), _r_();
}, B.bp.bs2.Model.prototype.forceTotalRecalculation = function() {
_i_("3bb:efd4a0a6"), $(this).trigger(B.bp.bs2.Model.EventType.TOTAL_RECALCULATION_FORCE), _r_();
}, B.bp.bs2.Model.prototype.isRetainLeavingUsersAvailable = function() {
return _i_("3bb:49164dd2"), _r_(this.rawData.retainLeavingUsersAvailable === !0);
}, B.bp.bs2.Model.Parser = function(e) {
_i_("3bb:f249fe14"), this.rawData_ = e, _r_();
}, B.bp.bs2.Model.Parser.prototype.parseRooms = function() {
_i_("3bb:71586c41");
var e = this.rawData_.rooms;
if ("array" !== $.type(e)) throw Error("Raw data must contain array member `rooms`. Found: " + e);
for (var t = [], i = 0, n = e.length; n > i; i++) t.push(this.parseOneRoom(e[i]));
return _r_(t);
}, B.bp.bs2.Model.Parser.prototype.parseOneRoom = function(e) {
_i_("3bb:10138988");
var t = e.id;
if ("number" !== $.type(t)) throw Error("Room must contain number member `id`. Found: " + t);
var i = null;
e.removeRoomConfirmMessage && (i = e.removeRoomConfirmMessage.replace(/\\n/g, "\n"));
var n = [];
if (e.size150) for (var a = 0, r = e.size150.length; r > a; a++) {
var _ = e.size150[a];
if ("string" !== $.type(_)) throw Error("Room must contain `size150` Array.<string> member. Found: " + e.size150);
n.push(_);
}
var o = [];
if (e.size300) for (var s = 0, l = e.size300.length; l > s; s++) {
var c = e.size300[s];
if ("string" !== $.type(c)) throw Error("Room must contain `size300` Array.<string> member. Found: " + e.size300);
o.push(c);
}
var d = [];
if (e.size600) for (var s = 0, r = e.size600.length; r > s; s++) {
var b = e.size600[s];
if ("string" !== $.type(b)) throw Error("Room must contain `size600` Array.<string> member. Found: " + e.size600);
d.push(b);
}
var p = [];
if (e.size1280) for (var s = 0, r = e.size1280.length; r > s; s++) {
var u = e.size1280[s];
if ("string" !== $.type(u)) throw Error("Room must contain `size1280` Array.<string> member. Found: " + e.size1280);
p.push(u);
}
var h = null;
return e.detailsHtml && (h = e.detailsHtml), _r_({
id:t,
removeConfirmMessage:i,
photos:{
size150:n,
size300:o,
size600:d,
size1280:p
},
detailsHtml:h,
bRoomId:e.bRoomId,
roomNr:e.roomNr,
maxPersons:e.maxPersons
});
}, B.bp.bs2.Model.Parser.prototype.parseGrowls = function() {
_i_("3bb:33f2724f");
var e = this.rawData_.growls;
if ("array" !== $.type(e)) throw Error("Raw data must contain array member `growls`. Found: " + e);
for (var t = [], i = 0, n = e.length; n > i; i++) {
var a = e[i];
a && t.push({
abbr:a.abbr,
content:a.content,
data:a.data || {}
});
}
return _r_(t);
}, B.bp.bs2.Model.Parser.prototype.parseCustomerTitle = function() {
_i_("3bb:019e9c77");
var e = this.parseFieldWithDomFallback_("customerTitle", ".booker_title_select");
return "" === e && (e = null), _r_(e);
}, B.bp.bs2.Model.Parser.prototype.parseCustomerFirstName = function() {
return _i_("3bb:92f7e8b6"), _r_(this.parseFieldWithDomFallback_("customerFirstName", "#firstname"));
}, B.bp.bs2.Model.Parser.prototype.parseCompanyAttached = function() {
_i_("3bb:a0c387d4");
var e = B.tools.object.getByName("companyAttached", this.rawData_);
return _r_(goog.isBoolean(e) ? e :!1);
}, B.bp.bs2.Model.Parser.prototype.parseTravelPurpose = function() {
_i_("3bb:d95fe01b");
var e = this.parseFieldWithDomFallback_("travelPurpose", ".js-purpose :radio:checked");
return _r_("leisure" === e ? B.bp.bs2.Model.TravelPurpose.LEISURE :"business" === e ? B.bp.bs2.Model.TravelPurpose.BUSINESS :this.rawData_.travelPurposeHasRatherNotToSay && "rathernotsay" === e ? B.bp.bs2.Model.TravelPurpose.RATHER_NOT_TO_SAY :null);
}, B.bp.bs2.Model.Parser.prototype.parseFieldWithDomFallback_ = function(e, t) {
_i_("3bb:0a733776");
var i = B.bp.AbstractModel.Parser.parseSimpleStringField(this.rawData_, e);
if (null === i || "" === i) {
var n = $(t).val();
i = n ? n :"";
}
return _r_(B.tools.string.htmlDecode(i));
}, B.bp.bs2.MainController = function() {
_i_("3bb:75d2599d"), goog.base(this), this.model, this.initControllers_(), _r_();
}, goog.inherits(B.bp.bs2.MainController, B.bp.AbstractMainController), B.bp.bs2.MainController.prototype.initControllers_ = function() {
_i_("3bb:c77953ab"), this.model.isAuthLevelHigh() || this.model.isTdotTraffic() || B.require("bp/leaving-users-keeper").init({
light_box_content_class_name:"bp_leaving_users_light_box_content",
light_box_root_class_name:"bp_leaving_users_light_box",
custom_mask_class_name:"bp_leaving_users_light_box_mask"
}), B.require("bp/special-requests").init(), new B.bp.bs2.LoginFormPositioner(), B.bp.bs2.gtaSendAppCheckbox.init(), B.env.bp && B.env.bp.growls && B.require("bp/growls-manager").init({
growls:B.env.bp.growls,
startDelay:2e3,
interval:2e3
}), B.env.b_action_name_is_tpi_book || (new B.bp.bs2.RoomsController(), new B.bp.bs2.SpecialRequestsController()), B.require("bp/env").get("reloadOnTravelPurposeChange") && B.require("company/bp/reload-on-travel-purpose-change").init(), B.require("bp/env").get("hideOnTravelPurposeChange") && B.require("company/bp/hide-budgets-on-travel-purpose-change").init(), _r_();
}, B.bp.bs2.AddonsController = function(e) {
if (_i_("3bb:d3c8915c"), B.events.Emitter.extend(this), this.root_ = e, 0 === this.root_.length) return _r_();
this.addons_ = [], this.initAddons_(), _r_();
}, B.bp.bs2.AddonsController.prototype.initAddons_ = function() {
_i_("3bb:bdadb3e4");
for (var e = this.root_.find(".uf_addon,.uf_addon_free"), t = 0, i = e.length; i > t; t++) {
var n = new B.bp.bs2.AddonsController.Addon(e.eq(t));
n.on("change", $.proxy(this.onAddonChange_, this)), this.addons_.push(n);
}
_r_();
}, B.bp.bs2.AddonsController.prototype.onAddonChange_ = function(e) {
_i_("3bb:e44dd790"), this.trigger("ADDON:change", e), _r_();
}, B.bp.bs2.AddonsController.Addon = function(e) {
_i_("3bb:a51c6dcc"), B.events.Emitter.extend(this), this.root_ = e, this.systemCheckbox_ = this.root_.find(".uf_checkbox input:checkbox"), this.guestsSelector_ = this.root_.find(".uf_guests .guests_addon"), this.nightsSelector_ = this.root_.find(".uf_nights .nights_addon"), this.attachEvents_(), _r_();
}, B.bp.bs2.AddonsController.Addon.prototype.attachEvents_ = function() {
_i_("3bb:dc4e6493"), this.systemCheckbox_.bind("click", $.proxy(this.onCheckboxClick_, this)), this.guestsSelector_.bind("change", $.proxy(this.onSelectChange_, this)), this.nightsSelector_.bind("change", $.proxy(this.onSelectChange_, this)), _r_();
}, B.bp.bs2.AddonsController.Addon.prototype.broadcastAddonChange_ = function(e, t) {
_i_("3bb:c30ca905");
var i = e.find(".addon_price"), n = $.extend({
changedByUser:!0
}, t);
setTimeout($.proxy(function() {
_i_("3bb:7db1f6b6"), this.trigger("change", {
dom:e,
instance:this,
type:e.data("addon-type"),
name:$.trim(e.find(".uf_addon_title").text()),
hotelPrice:1 * i.attr("price_hotel"),
userPrice:1 * i.attr("price"),
roomId:e.closest(".bp-room").data("room-id"),
isSelected:this.systemCheckbox_.is(":checked"),
changedByUser:n.changedByUser
}), _r_();
}, this), 0), _r_();
}, B.bp.bs2.AddonsController.Addon.prototype.onCheckboxClick_ = function(e) {
_i_("3bb:c5cef8d4"), this.broadcastAddonChange_(this.root_), _r_();
}, B.bp.bs2.AddonsController.Addon.prototype.onSelectChange_ = function(e) {
_i_("3bb:c5cef8d41"), this.broadcastAddonChange_(this.root_), _r_();
}, B.bp.bs2.AddonsController.Addon.prototype.isExtraBed = function() {
_i_("3bb:7c128e4f");
var e = this.root_.data("addon-type");
return _r_("extrabed" === e || "babycot" === e);
}, B.bp.bs2.GuestEmployeeList = function(e) {
_i_("3bb:2fb527f5"), this.model_ = B.bp.Main.getModel(), this.root_ = e, this.employeeList_ = this.root_.find(".js-guest-employee-list"), this.employeeLabelList_ = this.root_.find(".guest-employee-label"), this.guestDetails_ = this.root_.find(".guest-details"), this.employeeSelect_ = this.employeeList_.find(".js-guest-employee-list-select"), this.employeeList_.length && (this.attachEvents_(), this.travelPurposeChanged_()), _r_();
}, B.bp.bs2.GuestEmployeeList.prototype.attachEvents_ = function() {
_i_("3bb:9aae18fd"), $(this.model_).bind(B.bp.bs2.Model.EventType.TRAVEL_PURPOSE_CHANGE, $.proxy(this, "travelPurposeChanged_")), _r_();
}, B.bp.bs2.GuestEmployeeList.prototype.travelPurposeChanged_ = function() {
_i_("3bb:05bc0342"), this.model_.getTravelPurpose() == B.bp.bs2.Model.TravelPurpose.BUSINESS ? (this.showList_(!1), this.employeeLabelList_.show()) :(this.hideList_(!1), this.employeeLabelList_.hide()), _r_();
}, B.bp.bs2.GuestEmployeeList.prototype.showList_ = function(e) {
_i_("3bb:53485ed9"), e && e.preventDefault(), this.employeeList_.show(), this.employeeSelect_.removeAttr("disabled"), this.guestDetails_.hide(), _r_();
}, B.bp.bs2.GuestEmployeeList.prototype.hideList_ = function(e) {
_i_("3bb:53ddd785"), e && e.preventDefault(), this.employeeList_.hide(), this.employeeSelect_.attr("disabled", !0), this.guestDetails_.show(), _r_();
}, B.bp.bs2.LoginFormPositioner = function() {
if (_i_("3bb:7b8f9286"), this.form_ = $(".bp_login_form_auth_none"), 0 === this.form_.length) return _r_();
this.formVisible_ = this.isFormVisible_(), this.formOffsetParent_ = this.form_.offsetParent(), this.formPlaceKeeper_ = $(".bp_login_form_place_keeper"), this.formVisible_ && this.matchSizesAndPosition_(), this.attachEvents_(), _r_();
}, B.bp.bs2.LoginFormPositioner.prototype.attachEvents_ = function() {
_i_("3bb:1f56c85a");
var e = this;
B.eventEmitter.bind("user-access-menu:toggle", function() {
_i_("3bb:2e3bd9a7"), e.isFormVisible_() ? e.onFormOpen_() :e.onFormClose_(), _r_();
}), $(window).resize($.proxy(this.matchSizesAndPosition_, this)), _r_();
}, B.bp.bs2.LoginFormPositioner.prototype.onFormOpen_ = function() {
if (_i_("3bb:2a23df66"), this.formVisible_) return _r_();
this.formVisible_ = !0, this.matchSizesAndPosition_(), this.startFormResizeMonitoring_(), _r_();
}, B.bp.bs2.LoginFormPositioner.prototype.onFormClose_ = function() {
if (_i_("3bb:555b5dcf"), !this.formVisible_) return _r_();
this.formVisible_ = !1, this.hideFormAndPlaceKeeper_(), this.stopFormResizeMonitoring_(), _r_();
}, B.bp.bs2.LoginFormPositioner.prototype.matchSizesAndPosition_ = function() {
_i_("3bb:d9a0e243"), this.matchSizes_(), this.matchPosition_(), _r_();
}, B.bp.bs2.LoginFormPositioner.prototype.matchSizes_ = function() {
if (_i_("3bb:75c7e391"), !this.formVisible_) return _r_();
this.form_.width(this.formPlaceKeeper_.width()), this.formPlaceKeeper_.height(this.form_.height()), _r_();
}, B.bp.bs2.LoginFormPositioner.prototype.matchPosition_ = function() {
if (_i_("3bb:cdda2401"), !this.formVisible_) return _r_();
var e = B.tools.dom.getBlockOffset(this.formPlaceKeeper_, this.formOffsetParent_);
this.form_.css({
left:e.left,
top:e.top
}), _r_();
}, B.bp.bs2.LoginFormPositioner.prototype.hideFormAndPlaceKeeper_ = function() {
_i_("3bb:62a06f9a"), this.form_.css({
left:"",
top:""
}), this.formPlaceKeeper_.height(0), _r_();
}, B.bp.bs2.LoginFormPositioner.prototype.isFormVisible_ = function() {
return _i_("3bb:b2f5e1c2"), _r_(this.form_.height() > 20);
}, B.bp.bs2.LoginFormPositioner.prototype.startFormResizeMonitoring_ = function() {
_i_("3bb:ee64659a"), this.monitorTimer_ = setInterval($.proxy(function() {
_i_("3bb:3574c59a"), this.matchSizesAndPosition_(), _r_();
}, this), 50), _r_();
}, B.bp.bs2.LoginFormPositioner.prototype.stopFormResizeMonitoring_ = function() {
_i_("3bb:edab7c43"), clearInterval(this.monitorTimer_), _r_();
}, B.bp.bs2.RoomsController = function() {
_i_("3bb:60b70dcb"), this.root_ = $(".bp-facility-reassurance"), this.rooms_ = [], this.initRooms_(), _r_();
}, B.bp.bs2.RoomsController.prototype.initRooms_ = function() {
_i_("3bb:4082d068");
for (var e = this.root_.find(".bp-room"), t = 0, i = e.length; i > t; t++) this.rooms_.push(new B.bp.bs2.RoomsController.Room(e.eq(t)));
_r_();
}, B.bp.bs2.RoomsController.Room = function(e) {
_i_("3bb:86782297"), B.events.Emitter.extend(this), this.root_ = e, this.model_ = B.bp.Main.getModel(), this.data_ = this.getDataFromModel_(), this.roomName_ = this.root_.find(".room-name-pure"), this.guestNameInput_ = this.root_.find(".guest-name-details input"), this.guestEmailColumn_ = this.root_.find(".guest-email-details"), this.emailColumnIsVisible_ = !1, this.removeButton_ = this.root_.find(".bp_room_remove_link"), this.lightBox_ = booking.lightbox, this.guestEmployeeList_ = new B.bp.bs2.GuestEmployeeList(this.root_), this.addonsController_ = this.initAddons_(), this.attachEvents_(), _r_();
}, B.bp.bs2.RoomsController.Room.prototype.getDataFromModel_ = function() {
_i_("3bb:db91c577");
var e = B.tools.parseInt(this.root_.data("room-sequencial-id")), t = this.model_.getRoomById(e);
if (null === t) throw Error(B.tools.string.substitute("Room with id=%s is not found", e));
return _r_(t);
}, B.bp.bs2.RoomsController.Room.prototype.initAddons_ = function() {
_i_("3bb:1b845998");
var e = this.root_.find(".uf_addons_container");
if (0 !== e.length) return _r_(new B.bp.bs2.AddonsController(e));
_r_();
}, B.bp.bs2.RoomsController.Room.prototype.attachEvents_ = function() {
_i_("3bb:8acf3071"), this.guestNameInput_.keypress($.proxy(this.showGuestEmailColumn_, this)), this.removeButton_.click($.proxy(this.askAndRemoveIfNeeded_, this)), _r_();
}, B.bp.bs2.RoomsController.Room.prototype.showGuestEmailColumn_ = function() {
if (_i_("3bb:820f4087"), this.emailColumnIsVisible_) return _r_();
this.emailColumnIsVisible_ = !0, this.guestEmailColumn_.show(), _r_();
}, B.bp.bs2.RoomsController.Room.prototype.askAndRemoveIfNeeded_ = function(e) {
_i_("3bb:5810d964");
var t = window.confirm(this.data_.removeConfirmMessage);
t === !1 && e.preventDefault(), _r_();
}, B.bp.bs2.RoomsController.Room.prototype.initGallery_ = function() {
if (_i_("3bb:8728e90b"), this.data_.photos && this.data_.photos.size150 && 0 !== this.data_.photos.size150.length) {
this.populateEmptyLargerPhotoItems_();
var e = this.data_.photos.size150.slice(0, 10), t = this.data_.photos.size600.slice(0, 10);
return _r_(new B.bp.bs2.SmallGallery(this.root_.find(".bp_room_gallery"), e, t));
}
return _r_(null);
}, B.bp.bs2.RoomsController.Room.prototype.populateEmptyLargerPhotoItems_ = function() {
_i_("3bb:9e87fba9");
for (var e = this.data_.photos.size300, t = this.data_.photos.size600, i = this.data_.photos.size1280, n = 0, a = e.length; a > n; n++) "" === t[n] && (t[n] = e[n]), "" === i[n] && (i[n] = e[n]);
_r_();
}, B.bp.bs2.SmallGallery = function(e, t, i) {
if (_i_("3bb:7a504073"), this.root_ = e, 0 === this.root_.length || 0 === t.length) return _r_();
this.initialized_ = !0, this.images_ = t, this.tooltipImages_ = i || null, this.withScroller_ = this.images_.length > 1, this.currentPhotoId_ = 0, this.tooltipClass_ = "bp_small_gallery_tooltip bp_small_gallery_tooltip_max480", this.img_ = this.root_.find(".bp_small_gallery_main_img"), this.backButton_ = this.root_.find(".bp_small_gallery_arrow__m-back"), this.forwardButton_ = this.root_.find(".bp_small_gallery_arrow__m-forward"), this.counterCurrent_ = this.root_.find(".bp_small_gallery_counter_current"), this.counterTotal_ = this.root_.find(".bp_small_gallery_counter_total"), this.tooltipOpeners_ = $(this.img_), this.initCssClass_(), this.tooltipImages_ && this.initMainTooltip_(), this.withScroller_ && this.renderScroller_(), this.attachEvents_(), _r_();
}, B.bp.bs2.SmallGallery.prototype.isInitialized = function() {
return _i_("3bb:a5e8283d"), _r_(this.initialized_ === !0);
}, B.bp.bs2.SmallGallery.prototype.getCurrentPhotoId = function() {
if (_i_("3bb:5651ffce"), !this.initialized_) throw Error("Calling getCurrentPhotoId() on not initialized gallery");
return _r_(this.currentPhotoId_);
}, B.bp.bs2.SmallGallery.prototype.initCssClass_ = function() {
_i_("3bb:2dd098fa"), this.withScroller_ && this.root_.addClass("bp_small_gallery__m-with_scroller"), _r_();
}, B.bp.bs2.SmallGallery.prototype.initMainTooltip_ = function() {
_i_("3bb:8e6a7a76"), B.require([ "rewrite_tt" ], function(e) {
_i_("3bb:d4ce688d"), e.addTooltip(this.tooltipOpeners_, this.getHtmlForMainTooltip_(), this.tooltipClass_, !1, null, !1), _r_();
}.bind(this)), _r_();
}, B.bp.bs2.SmallGallery.prototype.attachEvents_ = function() {
_i_("3bb:4974a173"), this.withScroller_ && (this.root_.is(".bp_small_gallery_tdot") ? (this.backButton_.tap().bind("tap", $.proxy(this.scrollBack_, this)).noDoubleTapZoom(), this.forwardButton_.tap().bind("tap", $.proxy(this.scrollForward_, this)).noDoubleTapZoom()) :(this.backButton_.click($.proxy(this.scrollBack_, this)), this.forwardButton_.click($.proxy(this.scrollForward_, this)))), _r_();
}, B.bp.bs2.SmallGallery.prototype.scrollBack_ = function() {
_i_("3bb:b86131b4"), this.setCurrentPhoto_(this.getPreviousPhotoId_()), _r_();
}, B.bp.bs2.SmallGallery.prototype.scrollForward_ = function() {
_i_("3bb:b76703bd"), this.setCurrentPhoto_(this.getNextPhotoId_()), _r_();
}, B.bp.bs2.SmallGallery.prototype.setCurrentPhoto_ = function(e) {
if (_i_("3bb:e1b20119"), this.currentPhotoId_ === e) return _r_();
this.currentPhotoId_ = e, this.renderCurrentPhoto_(), this.renderScroller_(), B.require([ "rewrite_tt" ], function(e) {
_i_("3bb:8da6c32d"), this.tooltipOpeners_.each(function(t, i) {
_i_("3bb:8ef7f0cb"), e.updateTooltip(i, this.getHtmlForMainTooltip_()), _r_();
}.bind(this)), _r_();
}.bind(this)), _r_();
}, B.bp.bs2.SmallGallery.prototype.renderCurrentPhoto_ = function() {
_i_("3bb:31e68410"), this.img_.attr("src", this.images_[this.currentPhotoId_]), booking.env.b_is_tablet && (this.img_.data("title", this.tooltipImages_[this.currentPhotoId_]), this.img_.data("changed", !0), this.img_.next().data("changed", !0)), _r_();
}, B.bp.bs2.SmallGallery.prototype.renderScroller_ = function() {
_i_("3bb:099f42ad");
var e = this.currentPhotoId_ + 1;
this.counterCurrent_.html(e.toString()), this.counterTotal_.html(this.images_.length.toString()), _r_();
}, B.bp.bs2.SmallGallery.prototype.getNextPhotoId_ = function() {
_i_("3bb:a4793e39");
var e = this.currentPhotoId_ + 1;
return e >= this.images_.length && (e = 0), _r_(e);
}, B.bp.bs2.SmallGallery.prototype.getPreviousPhotoId_ = function() {
_i_("3bb:7202c37b");
var e = this.currentPhotoId_ - 1;
return 0 > e && (e = this.images_.length - 1), _r_(e);
}, B.bp.bs2.SmallGallery.prototype.getHtmlForMainTooltip_ = function() {
_i_("3bb:611e300c");
var e = this.getImgHtml_(this.tooltipImages_[this.currentPhotoId_], "bp_small_gallery_tooltip_img");
return e += this.getSleepingQualityHtml_(), _r_(e);
}, B.bp.bs2.SmallGallery.prototype.getImgHtml_ = function(e, t) {
_i_("3bb:94dab41c");
var i = '<img src="%s" class="%s" />', n = B.tools.string.substitute(i, e, t);
return _r_(n);
}, B.bp.bs2.SmallGallery.prototype.getSleepingQualityHtml_ = function() {
_i_("3bb:cbda842c");
var e = '<p class="bp-room-sleeping-quality"><i class="bp-room-sleeping-quality-icon"></i>%s</p>', t = B.jstmpl.translations("bp_bs2_sleeping_quality_reassurance");
if (!B.bp.Main.getModel().getRawData().sleepQualityScore) return _r_("");
return _r_(B.tools.string.substitute(e, t));
}, B.bp.bs2.SpecialRequestsController = function() {
if (_i_("3bb:9dd4f959"), this.root_ = $(".special_requests").eq(0), 0 === this.root_.length) return _r_();
this.textareaHolder_ = this.root_.find(".remarks_holder"), this.textarea_ = this.textareaHolder_.find("textarea[name=remarks]"), this.quietRoom_ = new B.bp.bs2.SpecialRequestsController.QuietRoom(), this.attachEvents_(), _r_();
}, B.bp.bs2.SpecialRequestsController.TEXTAREA_INCREASE_ANI_DURATION = 400, B.bp.bs2.SpecialRequestsController.TEXTAREA_HEIGHT_INCREASE_FACTOR = 2, B.bp.bs2.SpecialRequestsController.prototype.attachEvents_ = function() {
_i_("3bb:f419a030"), this.textarea_.one("focus", $.proxy(this.increaseTextareaOnce_, this)), _r_();
}, B.bp.bs2.SpecialRequestsController.prototype.increaseTextareaOnce_ = function() {
_i_("3bb:52c33014");
var e = B.tools.dom.getBlockWidth(this.textarea_), t = B.tools.dom.getBlockHeight(this.textarea_);
this.textarea_.stop(!0).css({
width:e,
height:t
}).animate({
width:this.textareaHolder_.width(),
height:t * B.bp.bs2.SpecialRequestsController.TEXTAREA_HEIGHT_INCREASE_FACTOR
}, B.bp.bs2.SpecialRequestsController.TEXTAREA_INCREASE_ANI_DURATION, "easeInOutExpo"), _r_();
}, B.bp.bs2.SpecialRequestsController.QuietRoom = function() {
_i_("3bb:fb91995f"), this.model_ = B.bp.Main.getModel(), this.root_ = $(".quiet_room_holder"), 0 === $(".js-quiet-room-chosen-input--prechecked-on-hp").length && this.travelPurposeChanged_(), this.attachEvents_(), _r_();
}, B.bp.bs2.SpecialRequestsController.QuietRoom.prototype.attachEvents_ = function() {
_i_("3bb:b12aa5a6"), $(this.model_).bind(B.bp.bs2.Model.EventType.TRAVEL_PURPOSE_CHANGE, $.proxy(this, "travelPurposeChanged_")), _r_();
}, B.bp.bs2.SpecialRequestsController.QuietRoom.prototype.travelPurposeChanged_ = function() {
_i_("3bb:e6a9cebc"), this.model_.getTravelPurpose() == B.bp.bs2.Model.TravelPurpose.BUSINESS ? this.showReassuranceText_() :this.hideReassuranceText_(), _r_();
}, B.bp.bs2.SpecialRequestsController.QuietRoom.prototype.showReassuranceText_ = function() {
_i_("3bb:f4b60fea"), this.root_.addClass("quiet_room_holder--prechecked").bind("click", $.proxy(this, "clickedQuietRoomArea_")).find(".quiet_room_holder__info").removeClass("quiet_room--is_inv").end().find("#quiet_room_chosen").prop("checked", !0), _r_();
}, B.bp.bs2.SpecialRequestsController.QuietRoom.prototype.hideReassuranceText_ = function() {
_i_("3bb:a015fc62"), this.root_.unbind("click").removeClass("quiet_room_holder--prechecked").find(".quiet_room_holder__info").addClass("quiet_room--is_inv").end().find("#quiet_room_chosen").prop("checked", !1), _r_();
}, B.bp.bs2.SpecialRequestsController.QuietRoom.prototype.clickedQuietRoomArea_ = function(e) {
_i_("3bb:663728a5");
var t = this.root_.find("#quiet_room_chosen");
t.length && e.target !== t[0] && "LABEL" != e.target.tagName && t.click(), _r_();
}, B.bp.bs2.TravelPurposeController = function() {
_i_("3bb:01fe5c2d"), this.model_ = B.bp.Main.getModel();
var e = $(".js-purpose").find("input");
this.leisureInput_ = e.filter("#bp_travel_purpose_leasure"), this.businessInput_ = e.filter("#bp_travel_purpose_business"), this.rathernotsayInput_ = e.filter("#bp_travel_purpose_rathernotsay"), this.hidden_ = $(".js-purpose-hidden"), B.bp.UserValidatingField.canInitialize(B.bp.AbstractModel.FieldName.VISIT_REASON) && new B.bp.bs2.TravelPurposeController.VisitReasonField(), B.require("bp/env").get("travelPurposeIsRequired") && this.setUpFieldValidation_(), this.updateInputValueByModel_(), this.attachEvents_(), _r_();
}, B.bp.bs2.TravelPurposeController.prototype.updateInputValueByModel_ = function() {
_i_("3bb:b0eedc5e"), this.setPurpose_(this.model_.getTravelPurpose()), _r_();
}, B.bp.bs2.TravelPurposeController.prototype.updateModelByInput_ = function() {
_i_("3bb:70159860"), this.leisureInput_.is(":checked") ? (this.model_.setTravelPurpose(B.bp.bs2.Model.TravelPurpose.LEISURE), B.env.b_is_bbtool_user && ($(".js-guest-employee-list input").prop("disabled", !0), $(".guest-employee-label input").prop("disabled", !0), $(".guest-details input").prop("disabled", !1))) :this.businessInput_.is(":checked") ? (this.model_.setTravelPurpose(B.bp.bs2.Model.TravelPurpose.BUSINESS), B.env.b_is_bbtool_user && ($(".js-guest-employee-list input").prop("disabled", !1), $(".guest-employee-label input").prop("disabled", !1), $(".guest-details input").prop("disabled", !0))) :this.rathernotsayInput_.is(":checked") && (this.model_.setTravelPurpose(B.bp.bs2.Model.TravelPurpose.RATHER_NOT_TO_SAY), B.env.b_is_bbtool_user && ($(".js-guest-employee-list input").prop("disabled", !0), $(".guest-employee-label input").prop("disabled", !0), $(".guest-details input").prop("disabled", !1))), _r_();
}, B.bp.bs2.TravelPurposeController.prototype.attachEvents_ = function() {
_i_("3bb:cfc4865d"), $(this.model_).bind(B.bp.bs2.Model.EventType.TRAVEL_PURPOSE_CHANGE, $.proxy(this.updateInputValueByModel_, this)), this.leisureInput_.change($.proxy(this.updateModelByInput_, this)), this.businessInput_.change($.proxy(this.updateModelByInput_, this)), this.rathernotsayInput_.change($.proxy(this.updateModelByInput_, this)), _r_();
}, B.bp.bs2.TravelPurposeController.prototype.setPurpose_ = function(e) {
if (_i_("3bb:4883740d"), e === B.bp.bs2.Model.TravelPurpose.BUSINESS) this.businessInput_.prop("checked", !0); else if (e === B.bp.bs2.Model.TravelPurpose.LEISURE) this.leisureInput_.prop("checked", !0); else {
if (e !== B.bp.bs2.Model.TravelPurpose.RATHER_NOT_TO_SAY) return this.businessInput_.prop("checked", !1), this.leisureInput_.prop("checked", !1), this.rathernotsayInput_.prop("checked", !1), _r_();
this.rathernotsayInput_.prop("checked", !0);
}
if (this.model_.isAuthLevelHigh() && !B.require("bp/env").get("isBBToolUser") && this.model_.getRawData().businessEmail && (e === B.bp.bs2.Model.TravelPurpose.BUSINESS ? (this.model_.setEmail(this.model_.getRawData().businessEmail), this.model_.setEmailConfirm(this.model_.getRawData().businessEmail)) :e === B.bp.bs2.Model.TravelPurpose.LEISURE && (this.model_.setEmail(this.model_.getRawData().emailConfirm), this.model_.setEmailConfirm(this.model_.getRawData().emailConfirm))), !this.model_.isAuthLevelHigh() || !this.model_.getCompanyAttached()) return _r_();
e === B.bp.bs2.Model.TravelPurpose.BUSINESS ? this.hidden_.val("1") :e === B.bp.bs2.Model.TravelPurpose.LEISURE && this.hidden_.val(""), _r_();
}, B.bp.bs2.TravelPurposeController.prototype.setUpFieldValidation_ = function() {
_i_("3bb:cdf1037e");
var e = B.require("bp/store");
$(this.model_).bind(B.bp.bs2.Model.EventType.TRAVEL_PURPOSE_CHANGE, function() {
_i_("3bb:80e9703d"), e.dispatch({
type:"UPDATE_TRAVEL_PURPOSE",
payload:{
key:"bp_travel_purpose",
value:this.model_.getTravelPurpose()
}
}), this.leisureInput_.trigger("blur"), _r_();
}.bind(this)), _r_();
}, B.bp.bs2.TravelPurposeController.VisitReasonField = function() {
_i_("3bb:c7d8082c"), goog.base(this, B.bp.AbstractModel.FieldName.VISIT_REASON, !1), this.checkbox = $("#reason_to_visit_checkbox"), this.wrapper = $("#wrapper_reason_to_visit"), this.model_ = B.bp.Main.getModel(), this.updateByModel_(), this.attachEvents_(), _r_();
}, goog.inherits(B.bp.bs2.TravelPurposeController.VisitReasonField, B.bp.UserValidatingField), B.bp.bs2.TravelPurposeController.VisitReasonField.prototype.attachEvents_ = function() {
_i_("3bb:f16525dc"), $(this.model_).bind(B.bp.bs2.Model.EventType.VISIT_REASON_CHANGE, $.proxy(this.updateByModel_, this)), this.wrapper.find("[type=radio]").click($.proxy(function(e) {
_i_("3bb:ccef4b6b"), this.updateModel_(), _r_();
}, this)), this.checkbox.click($.proxy(function() {
_i_("3bb:04cce6e2"), this.wrapper.toggleClass("g-hidden", !this.checkbox.is(":checked")), this.checkbox.is(":checked") || this.model_.setVisitReason(""), _r_();
}, this)), _r_();
}, B.bp.bs2.TravelPurposeController.VisitReasonField.prototype.updateByModel_ = function() {
_i_("3bb:75abbd5d");
var e, t = this.model_.getVisitReason();
e = null === t ? "" :t, this.wrapper.find("[type=radio]").prop("checked", !1), e && this.wrapper.find("[type=radio][value=" + e + "]").prop("checked", !0), this.input.val(e), _r_();
}, B.bp.bs2.TravelPurposeController.VisitReasonField.prototype.updateModel_ = function() {
_i_("3bb:1d0b9591");
var e, t = this.wrapper.find(":checked").val();
e = "" === t ? null :t, this.model_.setVisitReason(e), _r_();
}, B.bp.bs3.Model = function() {
_i_("3bb:cdeae615"), goog.base(this), this.parser_ = new B.bp.bs3.Model.Parser(this.rawData), this.parser = this.parser_, this.vatNumber_ = this.parser_.parseVatNumber(), this.companyName_ = this.parser_.parseCompanyName(), this.paymentMode_ = this.parser_.parsePaymentMode(), _r_();
}, goog.inherits(B.bp.bs3.Model, B.bp.AbstractModel), goog.addSingletonGetter(B.bp.bs3.Model), B.bp.bs3.Model.EventType = {
STREET_CHANGE:"street_change",
CITY_CHANGE:"city_change",
ZIP_CHANGE:"zip_change",
COUNTRY_CHANGE:"country_change",
PHONE_NUMBER_CHANGE:"phone_number_change",
VAT_NUMBER_CHANGE:"vat_number_change",
COMPANY_NAME_CHANGE:"company_name_change",
PAYMENT_TYPE_CHANGE:"payment_type_change",
CC_NUMBER_CHANGE:"cc_number_change",
CC_NAME_CHANGE:"cc_name_change",
CC_EXPIRATION_DATE_CHANGE:"cc_expiration_date_change",
CC_CVC_CHANGE:"cc_cvc_change",
PAYMENT_TYPE_ADD:"payment_type_add",
PAYMENT_TYPE_REMOVE:"payment_type_remove",
ADDRESS_TYPE_CHANGE:"address_type_change"
}, B.bp.bs3.Model.PaymentMode = {
REGULAR:1,
STORED:2,
NO_NEED_CC_DATA:3
}, B.bp.bs3.Model.prototype.getVatNumber = function() {
return _i_("3bb:bc028c31"), _r_(this.vatNumber_);
}, B.bp.bs3.Model.prototype.setVatNumber = function(e) {
_i_("3bb:6a71978d"), e !== this.vatNumber_ && (this.vatNumber_ = e, $(this).trigger(B.bp.bs3.Model.EventType.VAT_NUMBER_CHANGE)), _r_();
}, B.bp.bs3.Model.prototype.getCompanyName = function() {
return _i_("3bb:25af4e8e"), _r_(this.companyName_);
}, B.bp.bs3.Model.prototype.setCompanyName = function(e) {
_i_("3bb:0cc5a35a"), e !== this.companyName_ && (this.companyName_ = e, $(this).trigger(B.bp.bs3.Model.EventType.COMPANY_NAME_CHANGE)), _r_();
}, B.bp.bs3.Model.prototype.getPaymentMode = function() {
return _i_("3bb:d81b9cb7"), _r_(this.paymentMode_);
}, B.bp.bs3.Model.prototype.isAlternativePaymentType = function(e) {
_i_("3bb:a50b91a8");
var t = this.getPaymentTypeByAbbr(e);
return _r_(1 === t.bmp && 0 === t.direct_integration ? !0 :!1);
}, B.bp.bs3.Model.Parser = function(e) {
_i_("3bb:f249fe141"), this.rawData_ = e, _r_();
}, B.bp.bs3.Model.Parser.prototype.parsePaymentMode = function() {
_i_("3bb:089ddbc4");
var e = this.rawData_.paymentMode;
return _r_("no_need_cc_data" === e ? B.bp.bs3.Model.PaymentMode.NO_NEED_CC_DATA :"stored" === e ? B.bp.bs3.Model.PaymentMode.STORED :B.bp.bs3.Model.PaymentMode.REGULAR);
}, B.bp.bs3.Model.Parser.prototype.parseVatNumber = function() {
_i_("3bb:cac9d6e2");
var e = B.bp.AbstractModel.Parser.parseSimpleStringField(this.rawData_, "customerAddress.vatNumber", "");
return _r_(B.tools.string.htmlDecode(e));
}, B.bp.bs3.Model.Parser.prototype.parseCompanyName = function() {
_i_("3bb:e9548198");
var e = B.bp.AbstractModel.Parser.parseSimpleStringField(this.rawData_, "customerAddress.companyName", "");
return _r_(B.tools.string.htmlDecode(e));
}, B.bp.bs3.Model.Parser.prototype.parseFieldWithDomFallback_ = function(e, t) {
_i_("3bb:0a7337761");
var i = B.bp.AbstractModel.Parser.parseSimpleStringField(this.rawData_, e);
if (null === i || "" === i) {
var n = $(t).val();
i = n ? n :"";
}
return _r_(B.tools.string.htmlDecode(i));
}, B.bp.bs3.MainController = function() {
_i_("3bb:edb5338b"), goog.base(this), this.model, this.initControllers_(), _r_();
}, goog.inherits(B.bp.bs3.MainController, B.bp.AbstractMainController), B.bp.bs3.MainController.prototype.initControllers_ = function() {
_i_("3bb:ce264fd1"), new B.bp.bs3.AddressController(), B.bp.bs3.AbstractPaymentDetails.initConcreteDetails(), new B.bp.bs3.AlternativePaymentReassurance(), B.bp.bs3.gtaSendAppCheckbox.init(), B.require("bp/env").get("isSeleniumRunning") || B.require("bp/incomplete-booking-warning").watch();
var e = B.require("bp/leaving-users-keeper");
this.model.isTdotTraffic() || B.require("bp/env").get("hadRLUMessage") || e.init({
light_box_content_class_name:"bp_leaving_users_light_box_content",
light_box_root_class_name:"bp_leaving_users_light_box",
custom_mask_class_name:"bp_leaving_users_light_box_mask"
}), _r_();
}, B.bp.bs3.AbstractPaymentDetails = function() {
if (_i_("3bb:ec5f758b"), this.root = $(".payment-details"), 0 === this.root.length) return _r_();
this.model = B.bp.Main.getModel(), this.initFields_(), _r_();
}, B.bp.bs3.AbstractPaymentDetails.initConcreteDetails = function() {
_i_("3bb:996d838a");
var e = B.bp.Main.getModel().getPaymentMode();
return _r_(e === B.bp.bs3.Model.PaymentMode.REGULAR ? new B.bp.bs3.RegularPaymentDetails() :e === B.bp.bs3.Model.PaymentMode.STORED ? new B.bp.bs3.StoredPaymentDetails() :null);
}, B.bp.bs3.AbstractPaymentDetails.prototype.initFields_ = function() {
_i_("3bb:35f411cd"), B.bp.UserValidatingField.canInitialize(B.bp.AbstractModel.FieldName.CC_BRAZIL_CPF) && new B.bp.bs3.AbstractPaymentDetails.CcBrazilCpfField(), _r_();
}, B.bp.bs3.AddressController = function() {
if (_i_("3bb:cfe99c0e"), this.root_ = $(".booker-details-address"), 0 === this.root_.length) return _r_();
this.model_ = B.bp.Main.getModel(), this.initFields_(), this.initControllers_(), _r_();
}, B.bp.bs3.AddressController.prototype.initFields_ = function() {
_i_("3bb:87b2f8fb"), B.bp.UserValidatingField.canInitialize(B.bp.AbstractModel.FieldName.VAT_NUMBER) && new B.bp.bs3.AddressController.VatNumberField(), B.bp.UserValidatingField.canInitialize(B.bp.AbstractModel.FieldName.COMPANY_NAME) && new B.bp.bs3.AddressController.CompanyNameField(), _r_();
}, B.bp.bs3.AddressController.prototype.initControllers_ = function() {
_i_("3bb:005d565d"), this.model_.isAuthLevelHigh() && new B.bp.bs3.ProfileDetailsUpdater(), _r_();
}, B.bp.bs3.AddressController.VatNumberField = function() {
_i_("3bb:34ed3b6d"), goog.base(this, B.bp.AbstractModel.FieldName.VAT_NUMBER), this.model_ = B.bp.Main.getModel(), this.updateByModel_(), this.attachEvents_(), _r_();
}, goog.inherits(B.bp.bs3.AddressController.VatNumberField, B.bp.UserValidatingField), B.bp.bs3.AddressController.VatNumberField.prototype.attachEvents_ = function() {
_i_("3bb:8269f0bc"), $(this.model_).bind(B.bp.bs3.Model.EventType.VAT_NUMBER_CHANGE, $.proxy(this.updateByModel_, this)), this.input.bind("change blur", $.proxy(this.updateModel_, this)), _r_();
}, B.bp.bs3.AddressController.VatNumberField.prototype.updateByModel_ = function() {
_i_("3bb:c6904a20"), this.input.val(this.model_.getVatNumber()), _r_();
}, B.bp.bs3.AddressController.VatNumberField.prototype.updateModel_ = function() {
_i_("3bb:e1e0eeee");
var e = $.trim(this.input.val());
this.model_.setVatNumber(e), _r_();
}, B.bp.bs3.AddressController.CompanyNameField = function() {
_i_("3bb:202f9c67"), goog.base(this, B.bp.AbstractModel.FieldName.COMPANY_NAME), this.model_ = B.bp.Main.getModel(), this.updateByModel_(), this.attachEvents_(), _r_();
}, goog.inherits(B.bp.bs3.AddressController.CompanyNameField, B.bp.UserValidatingField), B.bp.bs3.AddressController.CompanyNameField.prototype.attachEvents_ = function() {
_i_("3bb:48d0e148"), $(this.model_).bind(B.bp.bs3.Model.EventType.COMPANY_NAME_CHANGE, $.proxy(this.updateByModel_, this)), this.input.bind("change blur", $.proxy(this.updateModel_, this)), _r_();
}, B.bp.bs3.AddressController.CompanyNameField.prototype.updateByModel_ = function() {
_i_("3bb:dc326a64"), this.input.val(this.model_.getCompanyName()), _r_();
}, B.bp.bs3.AddressController.CompanyNameField.prototype.updateModel_ = function() {
_i_("3bb:97aee47b");
var e = $.trim(this.input.val());
this.model_.setCompanyName(e), _r_();
}, B.bp.bs3.SpecialRequestsController = function() {
if (_i_("3bb:7c72fa0d"), this.root_ = $(".special_requests").eq(0), 0 === this.root_.length) return _r_();
this.textareaHolder_ = this.root_.find(".remarks_holder"), this.textarea_ = this.textareaHolder_.find("textarea[name=remarks]"), this.attachEvents_(), _r_();
}, B.bp.bs3.SpecialRequestsController.TEXTAREA_INCREASE_ANI_DURATION = 400, B.bp.bs3.SpecialRequestsController.TEXTAREA_HEIGHT_INCREASE_FACTOR = 2, B.bp.bs3.SpecialRequestsController.prototype.attachEvents_ = function() {
_i_("3bb:f419a0301"), this.textarea_.one("focus", $.proxy(this.increaseTextareaOnce_, this)), _r_();
}, B.bp.bs3.SpecialRequestsController.prototype.increaseTextareaOnce_ = function() {
_i_("3bb:5565fc3c");
var e = B.tools.dom.getBlockWidth(this.textarea_), t = B.tools.dom.getBlockHeight(this.textarea_);
this.textarea_.stop(!0).css({
width:e,
height:t
}).animate({
width:this.textareaHolder_.width(),
height:t * B.bp.bs3.SpecialRequestsController.TEXTAREA_HEIGHT_INCREASE_FACTOR
}, B.bp.bs3.SpecialRequestsController.TEXTAREA_INCREASE_ANI_DURATION, "easeInOutExpo"), _r_();
}, B.bp.bs3.AlternativePaymentReassurance = function() {
_i_("3bb:4a42684d"), this.model_ = B.bp.Main.getModel(), this.allAltPayments_ = $(".alt_pay"), this.attachEvents_(), _r_();
}, B.bp.bs3.AlternativePaymentReassurance.prototype.attachEvents_ = function() {
_i_("3bb:702fb80c"), $(this.model_).bind(B.bp.bs3.Model.EventType.PAYMENT_TYPE_CHANGE, $.proxy(this.toggleBannerForAltPayments_, this)), _r_();
}, B.bp.bs3.AlternativePaymentReassurance.prototype.toggleBannerForAltPayments_ = function() {
_i_("3bb:6154a2f6");
var e = this.model_.getCurrentPaymentType();
this.allAltPayments_.hide(), this.model_.isAlternativePaymentType(e.abbr) && this.allAltPayments_.filter("." + e.abbr).show(), _r_();
}, function() {
_i_("3bb:1adc1c7b");
var e, t, i = B.tools, n = B.require("bp/store"), a = B.require("bp/env"), r = a.get("ccAbbreviationsToValueMap"), _ = 30, o = "label_cc_number__format", s = '<span class="' + o + '"></span>', l = "xxxx xxxx xxxx xxxx", c = "x", d = [ {
type:r.mastercard,
mask:l
}, {
type:r.mc_di,
mask:l
}, {
type:r.visa,
mask:l
}, {
type:r.visa_di,
mask:l
} ];
function b(e) {
_i_("3bb:b3418172");
var t = n.getState().payment_cc_details.cc_type, i = $(e.currentTarget).val();
setTimeout(function() {
_i_("3bb:bd45ed44"), m(t, i), _r_();
}, 0), _r_();
}
function p(e, i) {
_i_("3bb:613179fa");
var a = n.getState().payment_cc_details.cc_type;
if (i && i.payment_cc_details.cc_type === e.payment_cc_details.cc_type) return _r_(!0);
m(a, t.val()), _r_();
}
function u(e) {
_i_("3bb:ae5251c7");
for (var t = 0, i = d.length; i > t; t++) if (e === d[t].type) return _r_(d[t]);
_r_();
}
function h() {
_i_("3bb:45da14ca"), t.bind("keyup cut paste", i.functions.throttle(b, _, {
leading:!1
})), n.subscribe(p), _r_();
}
function f() {
_i_("3bb:9a817c0f"), e.find("." + o).remove(), _r_();
}
function m(i, n) {
_i_("3bb:5937309d");
var a, r, _ = u(i);
if (!_ || "" === $.trim(n)) return f(), _r_();
a = e.find("." + o), 0 === a.length && (a = $(s), t.before(a)), r = M(_, n, i), a.html(r), _r_();
}
function M(e, t, i) {
_i_("3bb:e89ec395");
var n, a = t.replace(/\s/g, "").split(""), r = [];
if (!e) throw Error("BP: Cannot get mask value from unsupported card (" + i + ")");
return n = e.mask, n.split("").forEach(function(e, t) {
_i_("3bb:51d9cbe2");
var i = c;
"x" !== e ? i = e :a[0] && (i = a.shift()), r.push(i), _r_();
}), _r_(r.join(""));
}
function g() {
_i_("3bb:7b88ba2e"), e = $(".bp_form__field--cc_number"), t = e.find("input"), h(), _r_();
}
var v = {
init:g
};
B.bp.bs3.ccFormatLabel = v, _r_();
}(), B.bp.bs2.gtaSendAppCheckbox = B.bp.bs3.gtaSendAppCheckbox = function() {
return _i_("3bb:a3bf4403"), _r_({
init:function() {
_i_("3bb:f8f6215f");
var e = $("#send-link-app");
"1" === $.cookie("blba") && e.prop("checked", !0), e.bind("change", function() {
_i_("3bb:a7dc2b0f"), this.checked ? $.cookie("blba", 1) :$.cookie("blba", 0), _r_();
}), _r_();
}
});
}(), B.bp.bs3.ProfileDetailsUpdater = function() {
if (_i_("3bb:a425b266"), this.root_ = $(".booker-details-update-profile"), this.model_ = B.bp.Main.getModel(), 0 === this.root_.length || !this.model_.isAuthLevelHigh()) return _r_();
this.fields_ = this.getFieldsToMonitor_(), this.initialValues_ = this.getInitialValues_(), this.attachEvents_(), _r_();
}, B.bp.bs3.ProfileDetailsUpdater.FIELDS_TO_MONITOR = [ "#address1", "#city", "#zip", "#cc1", "#phone", "#company_name", "#vat_number" ], B.bp.bs3.ProfileDetailsUpdater.prototype.getFieldsToMonitor_ = function() {
_i_("3bb:6f6a0a79");
for (var e = B.bp.bs3.ProfileDetailsUpdater.FIELDS_TO_MONITOR, t = $(), i = 0, n = e.length; n > i; i++) t = t.add($(e[i]));
return _r_(t);
}, B.bp.bs3.ProfileDetailsUpdater.prototype.getInitialValues_ = function() {
_i_("3bb:57c99e23");
for (var e = {}, t = 0, i = this.fields_.length; i > t; t++) {
var n = this.getFieldName_(this.fields_.eq(t));
n && (e[n] = this.getFieldValue_(this.fields_.eq(t)));
}
return _r_(e);
}, B.bp.bs3.ProfileDetailsUpdater.prototype.attachEvents_ = function() {
_i_("3bb:99e8871a");
var e = this;
this.fields_.bind("keyup.ProfileDetailsUpdater change.ProfileDetailsUpdater", function(t) {
_i_("3bb:dac3add1");
var i = $(t.target).attr("name");
i && e.showRootIfFieldChanged_(i), _r_();
}), _r_();
}, B.bp.bs3.ProfileDetailsUpdater.prototype.detachEvents_ = function() {
_i_("3bb:0bbe5934"), this.fields_.unbind(".ProfileDetailsUpdater"), _r_();
}, B.bp.bs3.ProfileDetailsUpdater.prototype.showRootIfFieldChanged_ = function(e) {
_i_("3bb:a01e3a90"), this.hasFieldChanged_(e) && (this.detachEvents_(), this.showRootWithAnimation_()), _r_();
}, B.bp.bs3.ProfileDetailsUpdater.prototype.showRootWithAnimation_ = function() {
_i_("3bb:4cd4d69b"), this.root_.css({
opacity:0
}).removeClass("invisible").animate({
opacity:1
}, 500), _r_();
}, B.bp.bs3.ProfileDetailsUpdater.prototype.hasFieldChanged_ = function(e) {
_i_("3bb:bff0e154");
var t = this.fields_.filter("[name=" + e + "]");
return _r_(this.initialValues_[e] !== this.getFieldValue_(t));
}, B.bp.bs3.ProfileDetailsUpdater.prototype.getFieldName_ = function(e) {
_i_("3bb:57f4b3bf");
var t = e.attr("name");
return _r_(t);
}, B.bp.bs3.ProfileDetailsUpdater.prototype.getFieldValue_ = function(e) {
_i_("3bb:fc781a84");
var t = e.val();
return _r_($.trim(t));
}, B.bp.bs3.RegularPaymentDetails = function() {
_i_("3bb:53b17aab"), goog.base(this), this.saveCardCheckbox_ = this.root.find("#save_card_tick"), this.initControllers_(), this.attachEvents_(), _r_();
}, goog.inherits(B.bp.bs3.RegularPaymentDetails, B.bp.bs3.AbstractPaymentDetails), B.bp.bs3.RegularPaymentDetails.prototype.initControllers_ = function() {
_i_("3bb:4251116c"), B.bp.Main.getModel();
var e = B.require("bp/env");
e.get("format_cc_inside_field") && B.bp.bs3.formatCCInput.init(), B.bp.bs3.ccFormatLabel.init(), _r_();
}, B.bp.bs3.RegularPaymentDetails.prototype.attachEvents_ = function() {}, B.bp.bs3.StoredPaymentDetails = function() {
_i_("3bb:9367d6c9"), goog.base(this), this.items_ = [], this.currentItem_, this.saveNewCardControl_ = this.root.find(".save_my_card_tick"), this.saveNewCardCheckbox_ = this.saveNewCardControl_.find("#save_my_card"), this.cardIsBusinessCheckbox_ = this.saveNewCardControl_.find("#cc_is_business"), this.ccWhyMessage = this.root.find(".ccwhy:not(.alt_pay)"), this.altPayMessage_ = $(".alt_pay"), this.initItems_(), this.updateSaveNewCardControl_(), this.updateGreenBannerControl_(), this.attachEvents_(), _r_();
}, goog.inherits(B.bp.bs3.StoredPaymentDetails, B.bp.bs3.AbstractPaymentDetails), B.bp.bs3.StoredPaymentDetails.prototype.initItems_ = function() {
_i_("3bb:d88a3536");
for (var e, t = this.root.find(".saved_cc_table_item"), i = 0, n = t.length; n > i; i++) {
var a = t.eq(i), r = new B.bp.bs3.StoredPaymentDetails.Item(a, this);
this.items_.push(r), a.find(".cc_radio").is(":checked") && (e = r);
}
e || (e = this.items_[0]), this.setCurrentItem_(e), _r_();
}, B.bp.bs3.StoredPaymentDetails.prototype.setCurrentItem_ = function(e) {
if (_i_("3bb:02c6cc8f"), this.currentItem_ === e) return _r_();
for (var t = 0, i = this.items_.length; i > t; t++) this.items_[t].deselect();
e.select(), this.currentItem_ = e, this.updateSaveNewCardControl_(), this.updateGreenBannerControl_(), _r_();
}, B.bp.bs3.StoredPaymentDetails.prototype.updateSaveNewCardControl_ = function() {
_i_("3bb:3cabed23"), this.currentItem_ && this.currentItem_.isNewCardItem() ? this.saveNewCardControl_.show() :(this.saveNewCardControl_.hide(), this.saveNewCardCheckbox_.removeAttr("checked")), _r_();
}, B.bp.bs3.StoredPaymentDetails.prototype.updateGreenBannerControl_ = function() {
if (_i_("3bb:133d7a14"), booking.env.is_alt_payment_method && this.currentItem_ && this.currentItem_.id_) {
var e = this.currentItem_.id_;
this.altPayMessage_.hide(), booking.env.is_alt_payment_method(e) ? (this.altPayMessage_.filter("." + e).show(), this.ccWhyMessage.hide()) :this.ccWhyMessage.show();
}
_r_();
}, B.bp.bs3.StoredPaymentDetails.prototype.attachEvents_ = function() {}, B.bp.bs3.StoredPaymentDetails.Item = function(e, t) {
_i_("3bb:c192ce06"), this.root_ = e, this.id_ = String(this.root_.data("id")), this.parentController_ = t, this.newCardItem_ = this.root_.hasClass("new_card"), this.invalid_ = this.root_.hasClass("invalid"), this.radioButton_ = this.root_.find(".cc_radio"), this.cvcInput_ = this.root_.find(".cc_cvc_input"), this.deleteButton_ = this.root_.find(".cc_delete"), this.attachEvents_(), _r_();
}, B.bp.bs3.StoredPaymentDetails.Item.prototype.isNewCardItem = function() {
return _i_("3bb:1a76ccfc"), _r_(this.newCardItem_);
}, B.bp.bs3.StoredPaymentDetails.Item.prototype.select = function() {
_i_("3bb:00db562f"), this.radioButton_.prop("checked", !0), this.invalid_ || this.newCardItem_ || this.cvcInput_.prop("disabled", !1), _r_();
}, B.bp.bs3.StoredPaymentDetails.Item.prototype.deselect = function() {
_i_("3bb:4ba4fee6"), this.radioButton_.prop("checked", !1), this.invalid_ || this.newCardItem_ || this.cvcInput_.prop("disabled", !0), _r_();
}, B.bp.bs3.StoredPaymentDetails.Item.prototype.attachEvents_ = function() {
_i_("3bb:7b71219e");
var e = this;
this.radioButton_.click($.proxy(this.selectMeInParentController_, this)), this.newCardItem_ ? (this.root_.find("select").change($.proxy(this.selectMeInParentController_, this)), this.root_.find("input").keyup($.proxy(this.selectMeInParentController_, this))) :this.deleteButton_.click(function(t) {
_i_("3bb:99904dad"), e.delete_(), t.preventDefault(), _r_();
});
var t = $(".pp_info"), i = "bp_bs3_saved_cc_new_card_separate_form--active";
t.find(".bp-bs3--add-new-cc-button a").click(function() {
return _i_("3bb:db66f57b"), t.addClass(i).find(".saved_cc_table_item .cc_radio:checked").removeAttr("checked").closest("tr").find(".cc_cvc_input").attr("disabled", "disabled"), _r_(!1);
}), t.find(".cc_radio").change(function() {
_i_("3bb:6664176d"), t.removeClass(i), $(this).closest("tr").find(".cc_cvc_input").removeAttr("disabled"), _r_();
}), _r_();
}, B.bp.bs3.StoredPaymentDetails.Item.prototype.selectMeInParentController_ = function() {
_i_("3bb:611b97ad"), this.parentController_.setCurrentItem_(this), _r_();
}, B.bp.bs3.StoredPaymentDetails.Item.prototype.delete_ = function() {
_i_("3bb:21a68865");
var e = this;
$.ajax({
url:B.bp.AbstractModel.Url.DELETE_STORED_CC,
data:{
cc_id:this.id_
},
type:"POST",
success:function() {
_i_("3bb:d5674a49"), e.root_.hide(), _r_();
}
}), _r_();
}, function(e) {
_i_("3bb:f4682f39");
var t, i, n, a;
e.fn.noDoubleTapZoom = function() {
return _i_("3bb:6f54a6d6"), e(this).bind("touchstart", function(e) {
if (_i_("3bb:43109f17"), i = e.timeStamp, t = t || i, n = i - t, a = e.originalEvent && e.originalEvent.touches && e.originalEvent.touches.length, t = i, !n || n > 500 || a > 1) return _r_();
e.preventDefault(), _r_();
}), _r_(this);
}, _r_();
}(window.jQuery || window.Zepto), function(e) {
if (_i_("3bb:577f030d"), !e) return _r_();
var t, i, n, a, r, _, o, s = 20, l = "ontouchstart" in window || "createTouch" in document;
e.fn.tap = l ? function(l) {
return _i_("3bb:6729447d"), e(this).bind("touchstart", function(e) {
_i_("3bb:5da7ea48"), t = n = e.originalEvent.touches[0].clientX, i = a = e.originalEvent.touches[0].clientY, o = e, _r_();
}).bind("touchmove", function(e) {
_i_("3bb:aea67e21"), n = e.originalEvent.touches[0].clientX, a = e.originalEvent.touches[0].clientY, _r_();
}).bind("touchend", function(o) {
_i_("3bb:831acf31"), r = Math.abs(n - t), _ = Math.abs(a - i), s >= r && s >= _ && e(this).trigger("tap"), _r_();
}).bind("touchcancel", function(e) {
_i_("3bb:90efef9b"), t = i = n = a = 0, _r_();
}), l && e(this).bind("tap", function() {
_i_("3bb:9dedb4c1"), l.call(this, o, [ n, a ], [ t, i ]), _r_();
}), _r_(this);
} :function(t) {
return _i_("3bb:68f4bf1e"), _r_(e(this));
}, _r_();
}(window.jQuery || window.Zepto), B.when({
events:"ready",
action:"book"
}).run(function() {
if (_i_("3bb:67cd7825"), !B.env || !B.env.b_is_tdot_traffic) return _r_();
var e = booking.lightbox, t = "bp_iframe_popup bp_iframe_wider";
B.env.b_is_ipad && (t = "bp_iframe_popup_ios");
function i(i) {
_i_("3bb:fd35a7d3"), e.show($(i).attr("href"), {
iframe:!0,
iframeHeight:550,
customWrapperClassName:t,
bAnimation:!1
}), _r_();
}
$("a.popupit").click(function() {
return _i_("3bb:5b37d6c4"), i(this), _r_(!1);
}), _r_();
}), function(e) {
"use strict";
_i_("3bb:5e050cc6");
var t = e.require("jquery");
function i() {
if (_i_("3bb:741fae48"), "book" !== booking.env.b_action || !booking.env.b_is_tdot_traffic) return _r_(!1);
var e, i, n, a, r = {}, _ = {}, o = [ ".jq_tooltip", "*[data-title]", ".policy_name_tt" ];
t.bp_tooltip = {
blocked:!1,
defaults:{
width:300,
delay:200,
fade:!1,
extraClass:"",
top:15,
left:15,
id:"bp-tooltip"
},
block:function() {
_i_("3bb:4b2d3913"), t.bp_tooltip.blocked = !t.bp_tooltip.blocked, _r_();
}
};
function s(e) {
_i_("3bb:244ff3bf");
var n = t('<div class="pointer"></div>');
if (r.parent) return _r_(!0);
var _ = '<div class="shadow"><div class="tt_content"></div></div></div>';
r.parent = t('<div id="' + e.id + '" style="width: ' + e.width + 'px;">' + _).appendTo(document.body).hide(), r.parent.bind("touchstart", function() {
if (_i_("3bb:35de1cb3"), t.bp_tooltip.blocked) return _r_(!0);
return a && clearTimeout(a), i = null, t(this).removeClass(e.extraClass).fadeOut().css("opacity", ""), _r_(!1);
}), r.parent.prepend(n), r.pointer = n, r.title = t("div.tt_content", r.parent), r.body = t("div.body", r.parent), _r_();
}
function l(e) {
_i_("3bb:f2c6e6dc");
var i = t.data(e, "tooltip"), n = i.width;
return n && "number" != typeof n && (i.width = Number(n.replace(/px/, ""))), _r_(i);
}
function c() {
return _i_("3bb:10959d6a"), _r_({
x:t(window).scrollLeft(),
y:t(window).scrollTop(),
cx:t(window).width(),
cy:t("body").height()
});
}
function d() {
_i_("3bb:ea2cab90");
var e = c(), n = t(i);
if (!(n && n.length && r && r.parent && r.pointer && e)) return _r_();
var a = r.parent.width() / 2, _ = n.offset().left + n.outerWidth() / 2, o = n.offset().top + n.outerHeight() + 7, s = r.parent.height(), l = _ - a, d = 15, b = "auto", p = !1;
r.pointer.removeClass("pointer-bottom"), _ + a > e.cx ? (l = "auto", b = d, p = !0, r.pointer.css({
right:e.cx - _ - d - 6 + "px",
left:"auto"
})) :d > _ - a && (l = d, b = "auto", p = !0, r.pointer.css({
left:_ - d + "px",
right:"auto"
})), s + o + d > e.cy && (r.pointer.addClass("pointer-bottom"), o = n.offset().top - s - 8, p = !0, r.pointer.css({
top:"auto",
bottom:"-6px"
})), r.parent.css({
left:l,
right:b,
top:o
}), p || r.pointer.attr("style", ""), _r_();
}
function b(e) {
if (_i_("3bb:abe1ede1"), t.bp_tooltip.blocked) return _r_();
if (e && e.target && "OPTION" === e.target.tagName) return _r_();
d(), _r_();
}
function p() {
_i_("3bb:5b9ee495");
var t = n.match(/src=['"]([^'"]+)['"]/);
if (!t || _[t[1]]) return _r_();
var i = n, a = document.createElement("img"), o = "//q.bstatic.com/static/img/experiments/ajax-loader-black/d19b79c0cb26d8af016a6d84fd4bc38e1f43bb0e.gif";
n = "<img src=" + o + ' class="tooltip_loader" style="padding: 25px;"/>', a.onload = function() {
if (_i_("3bb:d7c0868d"), _[this.src] = !0, this.src !== e) return _r_();
n = i, r.title.html(n), r.parent.css("width", this.width + 38), r.parent.is(":visible") && b(), _r_();
}, e = t[1], a.src = t[1], _r_();
}
function u() {
if (_i_("3bb:82af85f5"), t.bp_tooltip.blocked || !i) return _r_();
a && clearTimeout(a);
var e = l(i);
i = null;
function n() {
_i_("3bb:f9092dfe"), r.parent.removeClass(e.extraClass).hide().css("opacity", ""), _r_();
}
e.fade ? r.parent.is(":animated") ? r.parent.stop().fadeTo(e.fade, 0, n) :r.parent.stop().fadeOut(e.fade, n) :n(), window.removeEventListener("orientationchange", b), _r_();
}
function h() {
_i_("3bb:7cfcba8d");
var e = t(i);
if (!i || !e || e.hasClass("js-block-tooltip")) return _r_();
var n = l(i);
if (a = null, !n) return _r_();
n.fade ? r.parent.is(":animated") ? r.parent.stop().show().fadeTo(n.fade, i.tOpacity) :r.parent.is(":visible") ? r.parent.fadeTo(n.fade, i.tOpacity) :r.parent.fadeIn(n.fade) :r.parent.show(), n.width && r.parent.css("width", l(i).width + "px");
var o = r.parent.find("img:eq(0)");
if (o.length > 0) {
var s = o.attr("src");
r.parent.css("width", _[s] ? o.width() + 38 :"");
}
t(document.body).bind("touchstart", function(e) {
_i_("3bb:90dadd97"), i && u.call(i), t(this).unbind(e), _r_();
}), window.addEventListener("orientationchange", b, !1), b(), _r_();
}
function f() {
if (_i_("3bb:f8020416"), !this) return _r_();
var e = l(this);
e.delay ? a = setTimeout(h, e.delay) :h(), _r_();
}
function m(e) {
if (_i_("3bb:0b85b374"), e.preventDefault(), t.bp_tooltip.blocked || this === i || !this) return _r_();
i = this;
var a = t(i), _ = t.data(i, "tooltip");
t.data(i, "changed") === !0 && (t.data(i, "changed", !1), i.tooltipText = '<img src="' + t.data(i, "title") + '"/>'), n = i.tooltipText, n && (n = n.replace(/\\n/g, "")), n.indexOf("tt_map_holder") >= 0 ? _.width = 585 :_.width = a.attr("rel") || 300, 0 === n.indexOf("<img") && (_.width = 438, p()), t.data(i, "tooltip", _), r.title.html(n).show(), r.parent.addClass(l(this).extraClass), f.apply(this, arguments), _r_();
}
t.fn.extend({
bp_tooltip:function(e) {
_i_("3bb:0c9faa78"), e = t.extend({}, t.bp_tooltip.defaults, e);
var i = function() {
_i_("3bb:182582ac");
var i = t(this);
i.data("tooltip", e), this.tOpacity = r.parent.css("opacity"), this.tooltipText = i.data("title") || this.title, this.tooltipText || (this.tooltipText = '<img src="' + this.getAttribute("src") + '"/>'), this.removeAttribute("title"), this.alt = "", _r_();
};
s(e), this.each(function() {
_i_("3bb:61874ac2");
var e = t(this);
i.call(this), e.bind("touchstart click", m), _r_();
}), _r_();
},
hideWhenEmpty:function() {
return _i_("3bb:8cb65535"), _r_(this.each(function() {
_i_("3bb:2c1814e5"), t(this)[t(this).html() ? "show" :"hide"](), _r_();
}));
}
});
var M = o.join(", ");
t(M).bp_tooltip(), _r_();
}
e.when({
events:"ready"
}).run(i), _r_();
}(window.booking), function(e, t) {
if (_i_("3bb:a93548e0"), !e.env.b_is_tablet || e.env.b_book_stage && 3 !== e.env.b_book_stage) return _r_();
t("#cc_type").on("change", function() {
_i_("3bb:c1257109");
var i = t(this).prop("selectedIndex");
i && e.et.goal("bp_cc_type_selected"), _r_();
}), t("#cc_number").on("keyup", function() {
_i_("3bb:5ac924fb");
var i = t(this).val();
i.length && e.et.goal("bp_cc_number_entered"), _r_();
}), t("#cc_month, #cc_year").on("change", function() {
_i_("3bb:04d60e95");
var i = t(this).prop("selectedIndex");
i && e.et.goal("bp_cc_expiry_date_selected"), _r_();
}), t("#cc_cvc").on("keyup", function() {
_i_("3bb:971157b4");
var i = t(this).val();
i.length && e.et.goal("bp_cc_cvc_code_entered"), _r_();
}), _r_();
}(B, jQuery), B.define("profile/profile-menu/profile-menu", function(e, t, i) {
"use strict";
_i_("3bb:535b12a7"), function() {
_i_("3bb:caafb172");
var t = e("jquery"), n = "[data-command=show-profile-menu]", a = e("et"), r = e("ga-tracker"), _ = "www" === B.env.b_site_type && B.require("trap-focus"), o = !1, s = !1;
i.exports = {
_dropdown:null,
init:function() {
_i_("3bb:efd415fb");
var e = this, i = "undefined" != typeof t && "undefined" != typeof t.fly && "undefined" != typeof t.fly.dropdown;
i && t.fly.dropdown.extend({
init:function() {
_i_("3bb:d69bc2d1"), e._dropdown = this, this.bind(this.events.show, e.onshow.bind(e));
var t = booking.jstmpl("profile_menu_extra_class");
t && "__no_op__" !== t.name ? this.options.extraClass += " " + t.render(booking.env.profile_menu) :this.options.extraClass += " g-hidden", _r_();
}
}).delegate(n, {
extraClass:"fly-dropdown--profile-menu",
position:booking.env.rtl ? "bottom left" :"bottom right",
content:function() {
_i_("3bb:f88d05f8");
var e = booking.jstmpl("profile_menu");
if ("center" === this.handle().data("menu-location") && (this.options.position = "bottom center"), !e || "__no_op__" === e.name) {
var i = (this.handle() || t()).eq(0).children("a[href]"), n = i && i.attr("href") || "";
return /\/mydashboard/.test(n) && (window.location.href = n), _r_("");
}
var a;
return a = "switch-accounts" == this.handle().data("menu-mode") ? e.render(Object.assign({}, booking.env.profile_menu, {
b_menu_mode:"switch-accounts"
})) :e.render(booking.env.profile_menu), _r_(t(a).loadComponents());
}
}), t(document).on("click", ".profile-menu__item--myreferrals .profile-menu__link", function() {
_i_("3bb:62e12540"), r.trackEvent(r.referralAdvocateTracker, "click", "myreferrals item in profile menu"), _r_();
}), t(document).on("click", ".profile_menu__item--travel-communities .profile-menu__link", function() {
_i_("3bb:a7c0741d"), r.trackEvent(r.communityTracker, "entry-point-button-click", "menu"), _r_();
}), t(document).on("mouseenter", "#current_account", function() {
_i_("3bb:6bfb1fd2"), o = !0, _r_();
}), t(document).on("mouseleave", "#current_account", function() {
_i_("3bb:a36d0c64"), o = !1, _r_();
}), _r_();
},
onshow:function() {
_i_("3bb:9729118c"), "android" === booking.env.b_browser && this.forceReflow(), t(".milk_menu").hide(), t(".b_recentlyviewed").length && t(".b_recentlyviewed").removeClass("rv-content-visible"), t(".uc_genius_tooltip").remove(), !o && _ && setTimeout(function() {
_i_("3bb:23cc2e87");
var e = this._dropdown && this._dropdown.root();
e && (_.trap(e[0]), s = !0), this.addListeners(), _r_();
}.bind(this), 200), t(".profile_menu__item--travel-communities").length && r.trackEvent(r.communityTracker, "entry-point-button-show", "menu"), "zh-cn" !== B.env.b_lang_for_url && B.env.b_user_auth_level_is_low_or_high && a.stage("BPHOUfTLKGBfRSJTSXeUMAae", 1), _r_();
},
hide:function() {
_i_("3bb:3bcd5c73"), this._dropdown && this._dropdown.hide(), s && _ && (_.release(), s = !1), _r_();
},
addListeners:function() {
_i_("3bb:f9364865");
var e = this._dropdown && this._dropdown.root();
e && e.find(".js-profile-menu__close").on("click", this.hide.bind(this)), _r_();
},
forceReflow:function() {
_i_("3bb:0e7445d0"), setTimeout(function() {
_i_("3bb:81ed97c6");
var e = this._dropdown && this._dropdown.root();
e && e.hide().show(0), _r_();
}.bind(this), 0), _r_();
}
}, _r_();
}(), _r_();
}), function() {
_i_("3bb:2c667e61"), B.when({
events:"ready"
}).run(function(e) {
_i_("3bb:04c8562e"), B.require("profile/profile-menu/profile-menu").init(), _r_();
}), _r_();
}(), function() {
_i_("3bb:c6e67d3b"), B.when({
action:[ "book" ],
events:"ready",
condition:2 === B.env.b_stage
}).run(function(e) {
_i_("3bb:8aee3567"), $("#optional_password").length && $(".bp-optional-password-strength").length && (B.userAccessFormHandler.initPassStrength("#optional_password"), $("#optional_password").one("focus", function() {
_i_("3bb:8b382910"), $(".bp-optional-password-strength").slideDown("slow"), _r_();
})), _r_();
}), _r_();
}(), B.define("component/banner", function(e, t, i) {
"use strict";
_i_("3bb:6d039ace");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("3bb:fb945527"), this.addEventListeners(), _r_();
},
addEventListeners:function() {
_i_("3bb:82d2ce08"), this.$el.on("click", ".js-close", this.hideEl.bind(this)), _r_();
},
hideEl:function(e) {
_i_("3bb:3a316e27"), e.preventDefault(), this.$el.fadeOut("fast"), _r_();
}
}), _r_();
}), B.define("payment-online", function(e, t) {
_i_("3bb:f1c454d5");
var i, n = e("jquery"), a = e("events"), r = "pay-default--hidden", _ = n("[data-default-pay-visible-for]"), o = n("[data-default-pay-disable-for]"), s = {
PAYMENT_METHOD:".payment-method__toggle__input",
PAYMENT_TIME:".bs3_when_to_pay__option,.payment_choice_timing",
FORCE_PAY_NOW_INPUT:"#check_box_pay_now",
HYBRID_FORCE_PAY_NOW_INPUT:"input[name='hybrid_pay_now']"
};
function l(e) {
_i_("3bb:864b7202"), this.group_name = e, this.init(), _r_();
}
l.prototype.init = function() {
_i_("3bb:d57ae462");
var e = n("#bookForm,.payment_choice_timing");
if (0 === e.length) return _r_();
this.UI_ELEM = {
payment_method:n(s.PAYMENT_METHOD),
payment_time:n(s.PAYMENT_TIME).find("input:enabled"),
force_pay_now_input:n(s.FORCE_PAY_NOW_INPUT),
hybrid_force_pay_now_input:n(s.HYBRID_FORCE_PAY_NOW_INPUT)
}, this.isExclusive = e.data("is-exclusive"), this.isHybrid = e.data("is-hybrid"), this.payment_changed(), a.on("pay:tab:select", this.payment_changed.bind(this)), a.on("payment:pay_online:select", this.select_online_payment_option.bind(this)), a.on("pay:timing:changed", this.payment_changed.bind(this)), this.UI_ELEM.payment_time.length && this.UI_ELEM.payment_time.on("change", this.payment_changed.bind(this)), this.UI_ELEM.force_pay_now_input.length && this.UI_ELEM.force_pay_now_input.on("change", this.payment_changed.bind(this)), _r_();
}, l.prototype.is_supporting_pay_now = function() {
return _i_("3bb:5a06ec0d"), _r_(this.UI_ELEM.payment_time.length > 0);
}, l.prototype.payment_changed = function() {
_i_("3bb:86ef1ef6");
var e = !0, t = this.UI_ELEM.payment_time.filter(":checked").val() || this.UI_ELEM.force_pay_now_input.filter(":checked").val();
null == t && this.UI_ELEM.hybrid_force_pay_now_input && "hidden" == this.UI_ELEM.hybrid_force_pay_now_input.attr("type") && (t = this.UI_ELEM.hybrid_force_pay_now_input.val());
var i = this.UI_ELEM.payment_method.filter(":checked").val() || "";
!t && B.env.b_stage < 3 && (B.env.b_alt_payment_available || B.env.b_alt_payments) ? e = !0 :this.isExclusive ? e = !0 :"pay-now" === t ? e = !0 :"pay-later" === t ? e = !1 :!this.isExclusive && i.match(/^creditcard/) ? e = !1 :2 == B.env.b_stage && B.env.bp_hybrid_can_pay_now ? e = !0 :"0" === t ? e = !1 :i || (e = !1), this.set_current_status(e), this.trigger_event(e), this.toggle_elements(e), _r_();
}, l.prototype.set_current_status = function(e) {
_i_("3bb:f08790da"), this.pay_online = e, _r_();
}, l.prototype.get_current_status = function() {
return _i_("3bb:9d5792d7"), _r_(this.pay_online);
}, l.prototype.trigger_event = function(e) {
_i_("3bb:ef1a884b"), a.trigger("payment:pay_online:changed", e), _r_();
}, l.prototype.toggle_elements = function(e) {
_i_("3bb:37370d4d");
var t = e ? "now" :"later";
_.addClass(r).filter('[data-default-pay-visible-for="' + t + '"]').removeClass(r), o.prop("disabled", !1).filter('[data-default-pay-disable-for="' + t + '"]').prop("disabled", !0), _r_();
}, l.prototype.select_online_payment_option = function() {
if (_i_("3bb:68c12a33"), this.isExclusive) return _r_();
var e = this.UI_ELEM.payment_time.filter("[value=pay-now],[value=1]").first(), t = this.UI_ELEM.payment_method.not("[value=creditcard]").not("[value=creditcards]"), i = 0 === t.filter(":checked").length;
if (e.length) e.prop("checked") && "radio" != e.attr("type").toLowerCase() || e.trigger("click"), e.trigger("change"), n(".cc_only_req_guarantee,.bp-alert__icon-nocc").hide(); else {
if (!i) return _r_();
t.first().trigger("click").trigger("change");
}
this.payment_changed(), _r_();
}, t.getInstance = function() {
return _i_("3bb:10442e09"), i || (i = new l()), _r_(i);
}, _r_();
}), B.define("campaign-discounts", function(e, t) {
_i_("3bb:1b8c0360");
var i = e("jquery"), n = e("events"), a = e("price-display-manager"), r = e("payment-online"), _ = i("#bwallet_campaign_discounts"), o = {
BS3_CC_FORM:"#bookForm"
};
function s() {
_i_("3bb:746b0de0"), this.init(), _r_();
}
s.prototype.init = function() {
_i_("3bb:762d9705"), this.$el = _, this.payment_method_allow_discounts = !0, this.payment_online_instance = r.getInstance(), this.user_total_price_display_manager = a.getInstance("bp_user_total_price"), this.property_total_price_display_manager = a.getInstance("bp_total_price"), this.property_total_price = this.property_total_price_display_manager.getValue(), this.user_total_price = this.user_total_price_display_manager.getValue(), this.is_exclusive = this.$el.data("is-exclusive"), this.notification_baloon = i(".bwallet_disabled_notification_baloon"), this.discounts_map = B.env.bwallet_campaign_discounts || {}, this.ui_setup(), this.bind_events(), this.payment_changed(this.payment_online_instance.get_current_status()), this.update_total_price({
update_immediately:!0
}), this.$el.data("error-count") || (this.payment_online_instance.select_online_payment_option(), setTimeout(function() {
_i_("3bb:3cbf3b20"), this.payment_online_instance.select_online_payment_option(), _r_();
}.bind(this), 350)), this.initialized = !0, _r_();
}, s.prototype.bind_events = function() {
_i_("3bb:035ec843"), n.on("payment:pay_online:changed", this.payment_changed.bind(this)), _r_();
}, s.prototype.bind_item_events = function(e, t) {
_i_("3bb:913e9887");
var i = e.find("input.checkbox");
i.off("click").on("click", function(e) {
_i_("3bb:099853d6"), i.prop("checked") ? this.activate_discount(t, !0) :this.deactivate_discount(t), _r_();
}.bind(this)), _r_();
}, s.prototype.on_change = function(e) {
_i_("3bb:ba5a79fe"), n.on("campaign::discounts::changed", e), _r_();
}, s.prototype.payment_changed = function(e) {
_i_("3bb:661095f1"), this.initialized && this.payment_method_allow_discounts && !e && i(this.discounts_map).size() ? this.notification_baloon.fadeIn("fast") :this.notification_baloon.stop().hide(), this.payment_method_allow_discounts = e, this.toggle_discounts(), _r_();
}, s.prototype.is_discount_active = function(e) {
if (_i_("3bb:0d8906f4"), !this.can_we_apply_discounts()) return _r_(!1);
var t = this.discounts_map[e];
return _r_(t ? t.b_is_active :!1);
}, s.prototype.can_we_apply_discounts = function() {
return _i_("3bb:e94e7a9d"), _r_(this.payment_method_allow_discounts);
}, s.prototype.deactivate_discount = function(e) {
_i_("3bb:bdc5b69a");
var t = this.discounts_map[e];
t && (t.b_is_active = !1, this.toggle_discounts()), _r_();
}, s.prototype.deactivate_all_discounts = function() {
_i_("3bb:38599517");
for (var e in this.discounts_map) {
var t = this.discounts_map[e];
t && (t.b_is_active = !1);
}
this.toggle_discounts(), _r_();
}, s.prototype.activate_discount = function(e, t) {
_i_("3bb:79ec5fba");
var i = this.discounts_map[e];
t && this.payment_online_instance.select_online_payment_option(), i && (i.b_is_active = !0, this.toggle_discounts()), _r_();
}, s.prototype.activate_all_discounts = function() {
_i_("3bb:bdc8db62");
for (var e in this.discounts_map) {
var t = this.discounts_map[e];
t && (t.b_is_active = !0);
}
this.toggle_discounts(), _r_();
}, s.prototype.toggle_discounts = function() {
_i_("3bb:8656282e");
var e = this.can_we_apply_discounts();
for (var t in this.discounts_map) {
var i = this.discounts_map[t], n = i.b_is_active, a = this.UI_ELEM.DISCOUNTS[t];
a && this.ui_toggle_activation_css(a, e && n);
}
this.ui_add_discount_inputs_in_payment_form(), this.update_total_price(), _r_();
}, s.prototype.update_total_price = function(e) {
_i_("3bb:90f90cb1"), e = e || {};
var t = this.can_we_apply_discounts(), i = 0, a = 0;
for (var r in this.discounts_map) {
var _ = this.discounts_map[r];
t && _.b_is_active && (a += parseFloat(_.b_discount_amount) || 0, i += parseFloat(_.b_uc_discount_amount) || 0);
}
this.property_total_discount = a, this.ui_update_price(this.property_total_price - a, this.property_total_price_display_manager, e.update_immediately), this.user_total_discount = i, this.ui_update_price(this.user_total_price - i, this.user_total_price_display_manager, e.update_immediately), n.trigger("campaign::discounts::changed", {
user_total_discount:i,
property_total_discount:a
}), _r_();
}, s.prototype.get_user_total_discount = function() {
return _i_("3bb:bd0a01fe"), _r_(this.user_total_discount);
}, s.prototype.get_property_total_discount = function() {
return _i_("3bb:e0ae8fbb"), _r_(this.property_total_discount);
}, s.prototype.ui_setup = function() {
_i_("3bb:0cdb4d31"), this.UI_ELEM = {
bs3_cc_form:i(o.BS3_CC_FORM),
DISCOUNTS:{}
}, this.$el.children().each(function(e, t) {
_i_("3bb:94a07160");
var n = i(t), a = n.data("campaign-id");
a && (this.UI_ELEM.DISCOUNTS[a] = n, this.bind_item_events(n, a)), _r_();
}.bind(this)), _r_();
}, s.prototype.ui_toggle_activation_css = function(e, t) {
_i_("3bb:eb5c1be7"), t ? (e.removeClass("disabled"), e.find("input.checkbox").prop("checked", !0)) :(e.addClass("disabled"), e.find("input.checkbox").prop("checked", !1)), _r_();
}, s.prototype.ui_update_price = function(e, t, i) {
_i_("3bb:5a24b1c8"), t && e > 0 && (i ? t.setValue(e) :t.update(e)), _r_();
}, s.prototype.ui_add_discount_inputs_in_payment_form = function() {
if (_i_("3bb:0cd558c1"), this.UI_ELEM.bs3_cc_form.find("[name=bwcm]").remove(), this.can_we_apply_discounts()) for (var e in this.discounts_map) {
var t = this.discounts_map[e], n = t.b_is_active;
if (n && 0 !== e) {
var a = i("<input type='hidden' name='bwcm' value='" + e + "'>");
this.UI_ELEM.bs3_cc_form.prepend(a);
}
}
_r_();
};
var l;
t.getInstance = function() {
return _i_("3bb:1638955a"), void 0 === l && this.init(), _r_(l);
}, t.init = function() {
_i_("3bb:aa13359a"), _.length > 0 && (l = new s()), _r_();
}, _r_();
}), B.require([ "campaign-discounts" ], function(e) {
_i_("3bb:01fc6ec7"), e.init(), _r_();
}), B.define("payment-schedule-details", function(e, t) {
_i_("3bb:a9900b93");
var i = e("jquery"), n = e("campaign-discounts"), a = e("wallet-payment"), r = e("price-display-manager"), _ = i("#payment_schedule_details");
function o() {
_i_("3bb:d98e6f43"), this.init(), _r_();
}
o.prototype.init = function() {
_i_("3bb:a4fe2657"), this.$el = _, this.wallet_payment_instance = a.getInstance(), this.campaign_discounts_instance = n.getInstance(), this.pay_all_price_display_manager = r.getInstance("bp_payment_schedule_pay_all"), this.du_now_price_display_manager = r.getInstance("bp_payment_schedule_du_today_price"), this.pay_all_price = this.pay_all_price_display_manager.getOriginalValue(), this.du_now_price = this.du_now_price_display_manager.getOriginalValue(), this.bp_user_total_price_display_manager = r.getInstance("bp_user_total_price"), this.bp_user_total_price_amount = this.bp_user_total_price_display_manager.getOriginalValue(), this.cancellation_cost_display_manager = [], this.cancellation_cost_amount = [], this.cancellation_cost_ratio = [];
for (var e = 0; 8 > e; e++) this.cancellation_cost_display_manager[e] = r.getInstance("bp_payment_cancellation_cost_" + e), this.cancellation_cost_amount[e] = this.cancellation_cost_display_manager[e].getOriginalValue() || 0, this.bp_user_total_price_amount ? this.cancellation_cost_ratio[e] = this.cancellation_cost_amount[e] / this.bp_user_total_price_amount :this.cancellation_cost_ratio[e] = 0;
this.init_du_later_breakdown_logic(), this.bind_events(), this.update_prices(), _r_();
}, o.prototype.init_du_later_breakdown_logic = function() {
_i_("3bb:baa6e5bc");
var e = i(".js-selector-bp-du-later");
this.du_later_breakdown_display_manager = [], this.du_later_breakdown_price = [], this.du_later_breakdown_total_price = 0, e.each(function(e, t) {
_i_("3bb:2b20952e");
var n = i(t).attr("data-animate-price-group-name"), a = r.getInstance(n);
a && (this.du_later_breakdown_display_manager[e] = a, this.du_later_breakdown_price[e] = a.getOriginalValue(), this.du_later_breakdown_total_price += a.getOriginalValue()), _r_();
}.bind(this)), _r_();
}, o.prototype.bind_events = function() {
_i_("3bb:c3d55acc"), this.campaign_discounts_instance && this.campaign_discounts_instance.on_change(function() {
_i_("3bb:49ced3ac"), this.update_prices(), _r_();
}.bind(this)), this.wallet_payment_instance && this.wallet_payment_instance.on_change(function() {
_i_("3bb:49ced3ac1"), this.update_prices(), _r_();
}.bind(this)), _r_();
}, o.prototype.update_prices = function() {
_i_("3bb:fe3ab9cb");
var e = 0, t = 0;
this.campaign_discounts_instance && (e += t = this.campaign_discounts_instance.get_user_total_discount()), this.wallet_payment_instance && (e += this.wallet_payment_instance.get_wallet_payment_amount()), this.pay_all_price_display_manager.update(this.pay_all_price - e);
var i = this.du_later_breakdown_total_price + this.du_now_price, n = (i - e) / i;
this.du_now_price_display_manager.update(this.du_now_price * n);
for (var a = 0; a < this.du_later_breakdown_display_manager.length; a++) this.du_later_breakdown_display_manager[a].update(this.du_later_breakdown_price[a] * n);
for (var a = 0; 6 > a; a++) this.cancellation_cost_amount[a] && this.cancellation_cost_display_manager[a].update(this.cancellation_cost_amount[a] - t * this.cancellation_cost_ratio[a]);
_r_();
};
var s;
t.getInstance = function() {
return _i_("3bb:65edc344"), void 0 === s && this.init(), _r_(s);
}, t.init = function() {
_i_("3bb:c1753f05"), s = new o(), _r_();
}, _r_();
}), B.require([ "payment-schedule-details" ], function(e) {
_i_("3bb:c57eb292"), e.init(), _r_();
}), B.define("wallet-payment", function(e, t) {
_i_("3bb:f6ef5443");
var i = e("jquery"), n = e("events"), a = e("price-display-manager"), r = e("payment-online"), _ = e("campaign-discounts"), o = "wallet-hidden", s = {
INPUT_VALUE_GROUP:".wallet-input-value-group",
CUSTOM_VALUE_INPUT:".wallet-input-value-input",
AVAILABLE_CREDIT:"#available_credit",
PRICE_UPDATE_BLOCK:".js-wallet-price-update-block",
INPUT_USE_WALLET:".use-wallet-input",
AMOUNT_HIDDEN_INPUT:"[name=wallet_instrument_payment_amount]",
FULL_WALLET_PAYMENT_INPUT:"[name=wallet_payment_method]",
PAYMENT_TIME_WRAPPER:".bs3_when_to_pay__wrapper",
PAYMENT_TIME:".bs3_when_to_pay__option_vertical,.bs3_when_to_pay__option,.payment_choice_timing",
CC_GUARANTEE_TEXT:".cc_only_to_guarantee_text",
PAYMENT_OVERVIEW_WALLET:".bp_overview_wallet_credit_block",
BS3_CC_FORM:"#bs3_cc_form",
WALLET_BODY:".wallet-body",
WALLET_HIDE_IF_NOT_APPLIED:"[data-hide-if-wallet-not-applied=true]"
}, l = {
DISABLED:"disabled",
ENABLED:"enabled"
}, c = {
EXCEED_AVAILABLE_CREDIT:"exceed_available_credit",
EXCEED_PAYMENT_AMOUNT:"exceed_payment_amount"
}, d = i("#bwallet_bp_payment_block");
function b() {
_i_("3bb:1a369b77"), this.init(), _r_();
}
b.prototype.init = function() {
_i_("3bb:0b3249ce"), this.$el = d, this.UI_ELEM = {
payment_amount_input_group:this.$el.find(s.INPUT_VALUE_GROUP),
payment_amount_input:this.$el.find(s.CUSTOM_VALUE_INPUT),
available_credit:this.$el.find(s.AVAILABLE_CREDIT),
price_update_block:this.$el.find(s.PRICE_UPDATE_BLOCK),
payment_amount_hidden:this.$el.find(s.AMOUNT_HIDDEN_INPUT),
full_wallet_payment_input:this.$el.find(s.FULL_WALLET_PAYMENT_INPUT),
payment_time_wrapper:i(s.PAYMENT_TIME_WRAPPER),
payment_time:i(s.PAYMENT_TIME).find("input"),
cc_guarantee_text:i(s.CC_GUARANTEE_TEXT),
bs3_cc_form:i(s.BS3_CC_FORM),
wallet_body:i(s.WALLET_BODY),
input_use_wallet:i(s.INPUT_USE_WALLET),
payment_overview_wallet:i(s.PAYMENT_OVERVIEW_WALLET)
}, this.payment_online_instance = r.getInstance(), this.campaign_discounts_instance = _.getInstance(), this.wallet_credit = parseFloat(this.$el.attr("data-wallet-credit")), this.total_price = parseFloat(this.$el.attr("data-wallet-max-amount")), this.user_total_discount = this.campaign_discounts_instance ? this.campaign_discounts_instance.get_user_total_discount() :0, this.status = null, this.wallet_currency = this.$el.data("wallet-currency"), this.first_enable = !0, this.rounding_precision = B.env.accounting_config.num_decimals[this.wallet_currency] || B.env.accounting_config.num_decimals["default"] || "2", this.available_credit_price_display_manager = a.getInstance("bwallet_bp_available_credit"), this.payment_tabs_comp = this.UI_ELEM.bs3_cc_form.component("pay/tab"), this.validationToolTip = this.UI_ELEM.payment_amount_input.component("tooltip").tooltip, this.bind_input(), n.on("payment:pay_online:changed", this.payment_changed.bind(this));
var e = Math.min(this.total_price, this.wallet_credit);
this.initial_amount = Math.min(e, "" != this.$el.data("user-selected-amount") ? this.$el.data("user-selected-amount") :e), this.UI_ELEM.payment_amount_input.attr("min", 0), this.UI_ELEM.payment_amount_input.attr("max", Math.ceil(e)), this.payment_online_instance.select_online_payment_option(), this.payment_changed(this.payment_online_instance.get_current_status()), n.on("campaign::discounts::changed", this.discount_changed.bind(this)), _r_();
}, b.prototype.get_wallet_payment_amount = function() {
return _i_("3bb:236444c2"), _r_(this.wallet_payment_amount);
}, b.prototype.on_change = function(e) {
_i_("3bb:c2ab4902"), n.on("wallet::payment::changed", e), _r_();
}, b.prototype.discount_changed = function(e) {
if (_i_("3bb:955a75f7"), this.user_total_discount == e.user_total_discount) return _r_();
this.user_total_discount = e.user_total_discount;
var t = Math.ceil(Math.min(this.total_price - this.user_total_discount, this.wallet_credit));
this.UI_ELEM.payment_amount_input.attr("max", t), t < this.wallet_payment_amount ? this.init_payment_amount_input(t) :this.ui_on_wallet_amount_changed(this.wallet_payment_amount), _r_();
}, b.prototype.payment_changed = function(e) {
_i_("3bb:a3569ec1"), e ? this.enable() :this.disable(), _r_();
}, b.prototype.disable = function(e) {
_i_("3bb:2963b2f3"), this.UI_ELEM.wallet_body.hide(), this.reset(), this.status = l.DISABLED, this.update_use_wallet_inputs(!1), e && this.$el.hide(), _r_();
}, b.prototype.enable = function(e) {
if (_i_("3bb:1dc76150"), this.$el.show(), e || this.first_enable) {
this.first_enable = !1;
var t = Math.min(this.wallet_credit, this.total_price - this.user_total_discount);
null != this.initial_amount && (t = this.initial_amount, this.initial_amount = null), this.update_available_credit(t), this.UI_ELEM.wallet_body.show(), this.update_use_wallet_inputs(!0);
}
this.status = l.ENABLED, _r_();
}, b.prototype.reset = function() {
_i_("3bb:6f48bb47"), this.update_available_credit(0), this.UI_ELEM.payment_amount_input.val(""), _r_();
}, b.prototype.bind_input = function() {
_i_("3bb:e48c6e5c"), this.UI_ELEM.payment_amount_input.change(function() {
_i_("3bb:f9dfbcbe");
var e = parseFloat(this.UI_ELEM.payment_amount_input.val());
this.update_available_credit(e || 0, !0), _r_();
}.bind(this)), this.UI_ELEM.payment_amount_input.focus(function() {
_i_("3bb:35b8d3eb"), this.UI_ELEM.payment_amount_input[0].select(), _r_();
}.bind(this)), this.UI_ELEM.payment_amount_input.blur(function() {
_i_("3bb:61d6ef63"), this.validationToolTip.hide(), _r_();
}.bind(this)), this.UI_ELEM.input_use_wallet.change(function(e) {
_i_("3bb:47ea27f6");
var t = this.UI_ELEM.input_use_wallet.is(":checked");
t ? (this.payment_online_instance.select_online_payment_option(), this.enable(!0)) :this.disable(), i(s.WALLET_HIDE_IF_NOT_APPLIED).toggleClass(o, !t), _r_();
}.bind(this)), this.UI_ELEM.payment_amount_input.keypress(function(e) {
if (_i_("3bb:5f653dd1"), 13 === e.keyCode) return e.stopPropagation(), e.preventDefault(), this.UI_ELEM.payment_amount_input.blur(), _r_(!1);
_r_();
}.bind(this)), _r_();
}, b.prototype.validate_input = function(e) {
return _i_("3bb:971ab7e8"), 0 > e ? (this.display_validation_message(c.EXCEED_AVAILABLE_CREDIT), _r_(!1)) :e > this.wallet_credit ? (this.display_validation_message(c.EXCEED_AVAILABLE_CREDIT), _r_(!1)) :e > this.total_price - this.user_total_discount ? (this.display_validation_message(c.EXCEED_PAYMENT_AMOUNT), _r_(!1)) :_r_(!0);
}, b.prototype.init_payment_amount_input = function(e) {
_i_("3bb:2e8cd17e"), this.UI_ELEM.payment_amount_input.val(e), this.UI_ELEM.payment_amount_input.trigger("change"), _r_();
}, b.prototype.update_available_credit = function(e, t) {
_i_("3bb:85b4a9aa"), this.validate_input(e) || (e = Math.min(this.wallet_credit, this.total_price - this.user_total_discount)), this.ui_on_wallet_amount_changed(e, t), this.wallet_payment_amount = e, n.trigger("wallet::payment::changed", e), _r_();
}, b.prototype.ui_on_wallet_amount_changed = function(e, t) {
_i_("3bb:a3f878cb");
var i = e.toFixed(this.rounding_precision);
this.UI_ELEM.payment_amount_input.val(i), t && this.UI_ELEM.payment_amount_input.focus(), this.available_credit_price_display_manager.update(this.wallet_credit - e), this.UI_ELEM.payment_amount_hidden.val(e), this.update_price_details_block(e), _r_();
}, b.prototype.update_use_wallet_inputs = function(e) {
_i_("3bb:5d099f17"), e ? this.UI_ELEM.input_use_wallet.prop("checked", !0) :this.UI_ELEM.input_use_wallet.removeAttr("checked"), _r_();
}, b.prototype.update_price_details_block = function(e) {
if (_i_("3bb:d8198bce"), e > 0) {
var t = parseFloat((this.total_price - e - this.user_total_discount).toFixed(this.rounding_precision));
e = parseFloat(e.toFixed(this.rounding_precision)), this.update_overview_booking(t, e);
var i = B.jstmpl("b_block_update_price_message").render({
b_amount_with_currency:B.utils.accounting.formatMoney(t, this.wallet_currency)
});
this.UI_ELEM.price_update_block.html(i), 0 === t ? (this.UI_ELEM.price_update_block.html(B.jstmpl("b_block_full_payment_message").render()), this.UI_ELEM.full_wallet_payment_input.val("1"), this.hide_cc_payment_form()) :(this.UI_ELEM.full_wallet_payment_input.val("0"), this.show_cc_payment_form());
} else this.update_overview_booking(this.total_price - this.user_total_discount, 0), this.UI_ELEM.price_update_block.html(B.jstmpl("b_block_no_credit_apply_message").render()), this.UI_ELEM.full_wallet_payment_input.val("0"), this.show_cc_payment_form();
_r_();
}, b.prototype.update_overview_booking = function(e, t) {
if (_i_("3bb:fc6254b6"), 0 === t) this.UI_ELEM.payment_overview_wallet.hide(); else {
this.UI_ELEM.payment_overview_wallet.show();
var i = this.UI_ELEM.payment_overview_wallet.find("#remaining");
i.html(B.jstmpl.translations("wallet_price_breakdown_amended_total", null, {
amount_with_currency:B.utils.accounting.formatMoney(e, this.wallet_currency)
}));
var n = this.UI_ELEM.payment_overview_wallet.find(".bwallet-wallet-label-block #text");
n.html(B.jstmpl.translations("wallet_price_breakdown_amended_credit", null, {
amount_with_currency:B.utils.accounting.formatMoney(t, this.wallet_currency)
}));
}
_r_();
}, b.prototype.display_validation_message = function(e) {
_i_("3bb:235acdd3"), e === c.EXCEED_AVAILABLE_CREDIT ? this.validationToolTip.settings.content = B.jstmpl.translations("wallet_bp_credit_error_too_much", null, {
amount_with_currency:B.utils.accounting.formatMoney(this.wallet_credit, this.wallet_currency)
}) :e === c.EXCEED_PAYMENT_AMOUNT && (this.validationToolTip.settings.content = B.jstmpl.translations("wallet_bp_credit_error_more_than_price", null, {
amount_with_currency:B.utils.accounting.formatMoney(this.total_price - this.user_total_discount, this.wallet_currency)
})), setTimeout(function() {
_i_("3bb:f56faf5f"), this.validationToolTip.show(), _r_();
}.bind(this), 250), _r_();
}, b.prototype.hide_cc_payment_form = function() {
_i_("3bb:88c03327"), this.payment_tabs_comp && this.payment_tabs_comp.disableCurrentTab(), this.UI_ELEM.bs3_cc_form.hide(), _r_();
}, b.prototype.show_cc_payment_form = function() {
_i_("3bb:5af14faf"), this.payment_tabs_comp && this.payment_tabs_comp.enableCurrentTab(), this.UI_ELEM.bs3_cc_form.show(), _r_();
};
var p;
t.getInstance = function() {
return _i_("3bb:1638955a1"), void 0 === p && this.init(), _r_(p);
}, t.init = function() {
if (_i_("3bb:38d4f75e"), p) return _r_(p);
d.length > 0 && (p = new b(), setTimeout(function() {
_i_("3bb:78e6c83e"), p.payment_online_instance.select_online_payment_option(), p.payment_changed(p.payment_online_instance.get_current_status()), _r_();
}, 333)), _r_();
}, _r_();
}), B.require([ "wallet-payment" ], function(e) {
_i_("3bb:db0bd69d"), e.init(), _r_();
}), booking.jstmpl("b_block_full_payment_message", function() {
_i_("3bb:39e8b894");
var e, t = [ "\n     ", '<div class="wallet-price_remainder">\n    ', "iconset/checkmark_selected", "large", '<span class="wallet-form_value wallet-form_value_positive">', "/private/bp_bwallet_total_price_is_covered_by_wallet/name", "</span>\n</div>\n", "\n" ];
return _r_(function(i) {
_i_("3bb:dbda326d");
var n = "", a = this.fn;
function r(n) {
return _i_("3bb:6100c971"), n += [ t[1], (i.unshift({
color:"#0AB21B",
name:t[2],
size:t[3]
}), e = a.HELPER("icon", i[0]), i.shift(), e) ].join(""), n += [ t[4], a.ME(t[5], a.MB, a.MN, null), t[6] ].join(""), _r_(n);
}
return n += t[0], n = r(n), n += t[7], _r_(n);
});
}()), booking.jstmpl("b_block_no_credit_apply_message", function() {
_i_("3bb:00cb67fd");
var e = [ "\n     ", '<div class="wallet-message-more">\n    ', "/private/wallet_bp_no_credit_applied/name", "\n</div>\n", "\n" ];
return _r_(function(t) {
_i_("3bb:05f7ba19");
var i = "", n = this.fn;
function a(t) {
return _i_("3bb:812d5154"), t += [ e[1], n.ME(e[2], n.MB, n.MN, null), e[3] ].join(""), _r_(t);
}
return i += e[0], i = a(i), i += e[4], _r_(i);
});
}()), booking.jstmpl("b_block_update_price_message", function() {
_i_("3bb:fad45593");
var e, t = [ "\n     ", '<div class="wallet-price_remainder">\n    <span class="wallet-form_label">\n        ', "/private/bp_bs3_wallet_block_amount_left_to_pay/name", "\n    </span>\n</div>\n", "\n" ], i = [ "b_amount_with_currency" ];
return _r_(function(n) {
_i_("3bb:79a2b805");
var a = "", r = this.fn;
function _(a) {
return _i_("3bb:26ac62ee"), a += [ t[1], (n.unshift({
payment_amount:"<b>" + r.MC(i[0]) + "</b>"
}), e = r.ME(t[2], r.MB, r.MN, null), n.shift(), e), t[3] ].join(""), _r_(a);
}
return a += t[0], a = _(a), a += t[4], _r_(a);
});
}()), B.require([ "jquery", "events", "campaign-discounts" ], function(e, t, i) {
_i_("3bb:59bb0934");
var n = e("#bp_campaign_raf_wallet_cash_back_modal");
if (0 === n.length) return _r_();
var a = {
CASH_BACK_BUTTON:"#cash_back_button",
INSTANT_DISCOUNT_BUTTON:"#instant_discount_button",
RAF_CASHBACK_MESSAGES:".js_raf_cashback_block,.bp_raf_friend_message,.bp_incentives_friend_message,.referral_ribbon_green,.cm_generic_instant_discount,.raf-widget,.raf-widget-text-container,.raf_cc_optin"
}, r = {
CASHBACK:"cashback",
INSTANT_DISCOUNT:"instant_discount"
}, _ = {
init:function(t) {
_i_("3bb:8e4b0799"), this.$el = t, this.UI_ELEM = {
cash_back_button:this.$el.find(a.CASH_BACK_BUTTON),
instant_discount_button:this.$el.find(a.INSTANT_DISCOUNT_BUTTON),
bwallet_raf_messages:e(a.RAF_CASHBACK_MESSAGES)
}, this.campaign_discounts_instance = i.getInstance(), this.campaign_discounts_instance.on_change(this.update_raf_messages.bind(this)), this.raf_campaign_id = this.$el.data("campaign-id"), this.bind_input(), this.$el.delay(500).fadeIn(100).promise().done(function() {
_i_("3bb:1d77dbf6"), this.update_choice(r.INSTANT_DISCOUNT), _r_();
}.bind(this)), _r_();
},
update_choice:function(e) {
if (_i_("3bb:2a545b97"), !e) return _r_();
e === r.CASHBACK ? (this.UI_ELEM.instant_discount_button.removeClass("active"), this.UI_ELEM.cash_back_button.addClass("active"), this.campaign_discounts_instance && this.campaign_discounts_instance.deactivate_discount(this.raf_campaign_id), t.trigger("bwallet:campaign_discounts:deactivate", this.raf_campaign_id)) :e === r.INSTANT_DISCOUNT && (this.UI_ELEM.cash_back_button.removeClass("active"), this.UI_ELEM.instant_discount_button.addClass("active"), this.campaign_discounts_instance && this.campaign_discounts_instance.activate_discount(this.raf_campaign_id, !0)), _r_();
},
update_raf_messages:function() {
_i_("3bb:b31aad9c");
var e = this.campaign_discounts_instance.is_discount_active(this.raf_campaign_id);
this.UI_ELEM.bwallet_raf_messages.toggle(!e), _r_();
},
close:function() {
_i_("3bb:b628042e"), this.$el.hide(400), _r_();
},
bind_input:function() {
_i_("3bb:4ae5d0eb"), this.UI_ELEM.instant_discount_button.click(function() {
_i_("3bb:dbb255d7"), this.update_choice(r.INSTANT_DISCOUNT), this.close(), _r_();
}.bind(this)), this.UI_ELEM.cash_back_button.click(function() {
_i_("3bb:e004475d"), this.update_choice(r.CASHBACK), this.close(), _r_();
}.bind(this)), _r_();
}
};
_.init(n), _r_();
}), B.when({
condition:"book" === B.env.b_action && 3 === B.env.b_stage && B.env.b_alt_payment_available && !B.env.fe_run_wechat_payment,
events:"ready",
experiment:"HBbQEdNHWEVTCTdZWPSJQIO"
}).run(function(e) {
_i_("3bb:f8776718"), $("#bookForm").on("submit", function(e) {
_i_("3bb:3ece7112");
var t = this, i = 0, n = $(this).find('[name="phone"]');
if (n.length > 0 && "" === n.val().trim()) return _r_(!0);
if ($(this).attr("data-disabled")) return _r_(!0);
e.preventDefault(), B.et.customGoal("HBbQEdNHWEVTCTdZWPSJQIO", 1), setTimeout(function() {
_i_("3bb:a315c4c8"), t.submit(), _r_();
}, i), _r_();
}), _r_();
}), B.when({
condition:"www" === B.env.b_site_type && 2 === B.env.b_stage && 0 === parseInt(B.env.auth_level, 10),
action:"book"
}).run(function() {
_i_("3bb:642cb9e3");
var e = B.require("keycodes"), t = $("#optional_password");
if (0 === t.length) return _r_();
t.on("keydown", function(t) {
_i_("3bb:7dce7d71"), e.isEnter(t.which) && t.preventDefault(), _r_();
}), _r_();
}), function() {
_i_("3bb:49d6fcb7");
var e = B && B.env && B.env.exp_hash_phone_verification, t = B && B.env && B.env.fe_run_wechat_payment;
B.when({
action:"book",
condition:3 === B.env.b_stage && !t && !e,
events:"ready"
}).run(function(e) {
_i_("3bb:dcdd2bd3");
var t = e("events"), i = $(".empty_phone_number_remedy_wrapper"), n = $("#bookForm"), a = n.find('[name="phone"]');
if (0 === a.length || 0 === i.length) return _r_();
var r = e("lightbox"), _ = e("keycodes"), o = e("bp/store"), s = e("bp/validate").validate, l = i.find(".empty_phone_number_remedy_input");
a.on("keyup", function(e) {
_i_("3bb:46cb7cfc"), l.val(e.target.value), _r_();
}), l.on("keyup", function(e) {
_i_("3bb:f4082f3d"), a.val(e.target.value), _r_();
}), t.on("bp:show_phone_remedy", d), $("body").on("click", ".empty_phone_number_remedy_main_action", b), l.on("keydown", c);
function c(e) {
_i_("3bb:dd200015"), _.isEnter(e.which) && (e.preventDefault(), b(e)), _r_();
}
function d() {
_i_("3bb:6e692366"), r.hide(), r.show(i, {
bCloseButton:!0,
bMaskClick:!0,
closeOnEsc:!1
}), _r_();
}
function b(e) {
_i_("3bb:e231c5e1"), e.preventDefault(), s([ {
name:"phone",
value:l.val()
} ]).then(function(e) {
_i_("3bb:658c9813"), o.dispatch({
type:"UPDATE_VALIDATION_FIELDS",
payload:e.results
}), e.results.fields.phone && "valid" === e.results.fields.phone.status && ($(".modal-mask-closeBtn").remove(), $(".modal-mask").off("click"), $(".empty_phone_number_remedy_main_action").addClass("bp_submit_button--disabled").find(".bp_submit_button__copy").text(B.jstmpl.translations("fe_bp_booking_in_progress_button_message_booking")), n[0].submit()), _r_();
}), _r_();
}
_r_();
}), _r_();
}(), B.require([ "jquery", "et" ], function(e, t) {
"use strict";
if (_i_("3bb:5b89629f"), "xc" !== B.env.b_countrycode) return _r_();
e("[name=reason_to_visit_checkbox]").one("change", function() {
_i_("3bb:db04e44b");
var e = B.require("ga-tracker");
e.trackEvent({
type:"Crimea",
action:"Checkbox click"
}), _r_();
}), setTimeout(function() {
if (_i_("3bb:0dc49f25"), e("[name=reason_to_visit_checkbox]").length) {
var t = B.require("ga-tracker");
t.trackEvent({
type:"Crimea",
action:"Checkbox is present"
});
}
_r_();
}, 4), _r_();
}), B.when({
action:"book",
condition:3 === B.env.b_stage && parseInt(B.env.auth_level, 10) >= 2 && B.env.b_alt_payment_available
}).run(function() {
_i_("3bb:754272d5");
var e = $(".cc_radio"), t = $(".bp_new_cc_form--with_alt_payments");
e.filter(":checked").is(".cc_radio--new_card") && t.addClass("bp_new_cc_form--active"), $(".cc_radio").on("change", function() {
_i_("3bb:2fe2383a"), $(this).is(".cc_radio--new_card") ? t.addClass("bp_new_cc_form--active") :t.removeClass("bp_new_cc_form--active"), _r_();
}), _r_();
}), B.when({
condition:!!$(".pay-faq__question").length
}).run(function() {
_i_("3bb:4bb2b5c1"), $(".pay-faq__question").on("click", function(e) {
_i_("3bb:a0d00447"), e.preventDefault(), $(this).next("div").toggle(), _r_();
}), _r_();
}), function() {
"use strict";
_i_("3bb:2cfb1680"), B.when({
condition:3 === B.env.b_stage
}).run(function(e) {
_i_("3bb:81759ea0");
var t = e("jquery");
t("#bookForm").on("submit", function() {
_i_("3bb:8d3620c3");
var e = t("#bookForm #vpmlog"), i = t(window), n = parseInt(i.width(), 10), a = parseInt(i.height(), 10);
e.length && e.val(n + "," + a), _r_();
}), _r_();
}), _r_();
}(), function() {
"use strict";
_i_("3bb:e457b013"), B.when({
events:"ready",
action:"book"
}).run(function(e) {
_i_("3bb:bc0e4595");
var t = e("events"), i = e("bp/emitter");
t.on("bp:leaving_users_keeper:open", function() {
_i_("3bb:08e84791"), i.trigger("leaving_users_keeper:open"), _r_();
}), t.on("bp:leaving_users_keeper:close", function() {
_i_("3bb:ee737c31"), i.trigger("leaving_users_keeper:close"), _r_();
}), _r_();
}), _r_();
}(), function() {
_i_("3bb:b069e994");
var e = B && B.env && B.env.exp_hash_phone_verification;
B.when({
action:"book",
condition:3 === B.env.b_stage && !B.env.fe_run_wechat_payment
}).run(function(t) {
_i_("3bb:c9a3dd9f");
var i, n, a, r, _, o, s, l, c, d, b, p = t("ga-tracker"), u = B.require("bp/validate").validate, h = B.require("bp/circular-loader"), f = B.require("jstmpl"), m = B.require("bp/env"), M = t("events"), g = t("server-data"), v = 750, y = 5e3, w = [ {
title:"bp_interstitial_header_1",
subtitle:"bp_interstitial_bline_1"
}, {
title:"bp_interstitial_header_2",
subtitle:"bp_interstitial_bline_2"
}, {
title:"bp_interstitial_header_3",
subtitle:"bp_interstitial_bline_3"
} ], C = [ "bicon-arrowup", "bicon-arrowdown", "bicon-tickfull" ], k = [], N = !1;
function x() {
_i_("3bb:22d96ff2"), n = $(".bp_interstitial"), a = n.find(".bp_interstitial__title"), r = n.find(".bp_interstitial__subtitle"), _ = n.find(".bp_interstitial__icon"), o = n.find(".bp_interstitial__logo_wrapper"), m.get("isHybridSite") && o.addClass("hidden"), s = $("#bookForm"), l = $(".submit_holder_button_wrap.jq_tooltip"), i = h.create({
parentNode:n.find(".bp_interstitial__preloader"),
baseClass:"bp_interstitial__progress"
}), T(), E(), j(), _r_();
}
function E() {
_i_("3bb:9639112c");
var e = [ "address1", "city", "phone" ];
m.get("showBDate") && (e = e.concat([ "bday", "bmonth", "byear" ])), $(".cc.pp_info", s).length && (e = e.concat([ "cc_type", "cc_number", "cc_month", "cc_year" ]), m.get("cvc_required") && (e.push("cc_cvc"), T())), c = e.reduce(function(e, t) {
return _i_("3bb:dfe9d175"), $("[name=" + t + "]", s).length && e.push(t), _r_(e);
}, []), _r_();
}
function T() {
_i_("3bb:85b5b141");
var e = m.get("payment_methods") || [];
b = e.reduce(function(e, t) {
return _i_("3bb:55a181a5"), e[t.abbr] = t.name, _r_(e);
}, {}), d = [ b.americanexpress, b.dinersclub, b.jcb ], m.get("amex_cvc_required") && d.splice(d.indexOf(b.americanexpress), 1), _r_();
}
function D(e) {
_i_("3bb:c5ad23d9");
var t = s.find('[name="cc_type"]').val();
return s.find('[name="cc_type"][type="radio"]').length && (t = s.find('[name="cc_type"][type="radio"]:checked').val()), _r_(e.reduce(function(e, i) {
if (_i_("3bb:7454ee7a"), "cc_cvc" === i && d.indexOf(t) >= 0) return _r_(e);
if ("cc_name" === i && t === b.americanexpress) return _r_(e);
return e.push({
name:i,
value:"cc_type" === i ? t :s.find('[name="' + i + '"]').val()
}), _r_(e);
}, []));
}
function j() {
_i_("3bb:35d8ed01"), e ? s.on("phone-verification:interstitial", F) :s.on("submit", F), _r_();
}
function S() {
if (_i_("3bb:e12965d0"), N) return _r_();
N = !0, $("body").css("overflow", "hidden"), n.css("display", "block"), i.render(), p.trackEvent("Booking Process", "Confirmation", "Interstitial seen", null), k.push(setTimeout(A, 250)), _r_();
}
function A() {
_i_("3bb:c7c41f2e"), O(1), _r_();
}
function I(e) {
switch (_i_("3bb:cb2bc146"), e) {
case 1:
i.setPercentage(33), k.push(setTimeout(function() {
_i_("3bb:a826be23"), I(2), _r_();
}, 2250));
break;

case 2:
i.setPercentage(66), k.push(setTimeout(function() {
_i_("3bb:0156a1eb"), I(3), _r_();
}, 2250));
break;

default:
i.setPercentage(94);
}
J(e), P(e), _r_();
}
function O(e) {
switch (_i_("3bb:ce2a1d25"), e) {
case 1:
i.setPercentage(33), k.push(setTimeout(function() {
_i_("3bb:a826be231"), I(2), _r_();
}, 2250));
break;

case 2:
i.setPercentage(66), k.push(setTimeout(function() {
_i_("3bb:0156a1eb1"), I(3), _r_();
}, 2250));
break;

default:
i.setPercentage(94);
}
J(e), P(e), _r_();
}
function J(e) {
_i_("3bb:62ee7bb5"), a.html(f.translations(w[e - 1].title)), r.html(f.translations(w[e - 1].subtitle)), _r_();
}
function P(e) {
_i_("3bb:ba0f084a"), _.removeClass(C.join(" ")), setTimeout(function() {
_i_("3bb:61370874"), _.addClass(C[e - 1]), _r_();
}, 16), _r_();
}
function L(e) {
_i_("3bb:6ee83d6b");
var t = Object.keys(e).reduce(function(t, i) {
return _i_("3bb:c54ab373"), "error" === e[i].status && (t[i] = e[i]), _r_(t);
}, {});
return _r_(1 === Object.keys(t).length && t.phone);
}
function F(e) {
_i_("3bb:8695dc3f"), s.attr("data-disabled", !0), e.preventDefault(), e.stopPropagation(), u(D(c), 1).then(function(t) {
if (_i_("3bb:7410ff8e"), t.results && "true" === (t.results.valid || "").toString()) {
if (g.b_alt_payment_available) return e.target.submit(), _r_(!0);
l.trigger("mouseleave").tooltip("destroy"), $('.submit_holder button[type="submit"]', s).addClass("bp_submit_button--disabled").find(".bp_submit_button__copy").text(B.jstmpl.translations("fe_bp_booking_in_progress_button_message_booking")), setTimeout(function() {
_i_("3bb:b4e6d5d9"), S(), _r_();
}, v), setTimeout(function() {
_i_("3bb:b6a0ed6c"), e.target.submit(), _r_();
}, y);
} else t.results && "false" === t.results.valid && L(t.results.fields) ? g.fe_run_wechat_payment || M.trigger("bp:show_phone_remedy") :e.target.submit();
_r_();
}), _r_();
}
x(), _r_();
}), _r_();
}(), function() {
_i_("3bb:046ae576"), B.when({
events:"ready",
action:"book",
condition:3 == B.env.b_stage && "www" === B.env.b_site_type && ("0" === B.env.auth_level || "1" === B.env.auth_level)
}).run(function(e) {
_i_("3bb:76e41e2c");
var t = e("jquery");
function i() {
_i_("3bb:a290b8c0");
var e = t("#address1, #city, #phone").filter(function(e, t) {
return _i_("3bb:d93ca99b"), _r_("" === t.value);
});
if ("1" === B.env.auth_level) switch (t(e[0]).attr("id")) {
case "address1":
break;

case "city":
break;

case "phone":}
return _r_(t(e[0]));
}
var n = i();
n.length && "0" === B.env.auth_level && n.trigger("focus"), _r_();
}), _r_();
}(), function() {
_i_("3bb:29f81334"), B.when({
action:"book",
events:"ready",
condition:"www" === B.env.b_site_type
}).run(function(e) {
_i_("3bb:51b5309d");
var t = e("jquery");
t(document).on("change", "#rlu_persistent_dismissal", function(e) {
_i_("3bb:bda704c6"), t.ajax({
url:"/rlu_persistent_dismissal",
method:"POST",
data:{
dismiss_rlu:t(e.currentTarget).prop("checked")
}
}), _r_();
}), _r_();
}), _r_();
}(), function(e) {
"use strict";
_i_("3bb:c970d6c8"), "function" == typeof define && define.amd ? define([ "jquery" ], e) :"undefined" != typeof exports ? module.exports = e(require("jquery")) :e(jQuery), _r_();
}(function(e) {
"use strict";
_i_("3bb:06d74a49");
var t = window.Slick || {};
t = function() {
_i_("3bb:1a9b8522");
var t = 0;
function i(i, n) {
_i_("3bb:aa04535a");
var a, r, _, o = this;
if (o.defaults = {
accessibility:!0,
adaptiveHeight:!1,
appendArrows:e(i),
appendDots:e(i),
arrows:!0,
asNavFor:null,
prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',
nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',
autoplay:!1,
autoplaySpeed:3e3,
centerMode:!1,
centerPadding:"50px",
cssEase:"ease",
customPaging:function(e, t) {
return _i_("3bb:47add93f"), _r_('<button type="button" data-role="none">' + (t + 1) + "</button>");
},
dots:!1,
dotsClass:"slick-dots",
draggable:!0,
easing:"linear",
edgeFriction:.35,
fade:!1,
focusOnSelect:!1,
galleryMode:"normal",
infinite:!0,
initialSlide:0,
lazyLoad:"ondemand",
mobileFirst:!1,
pauseOnHover:!0,
pauseOnDotsHover:!1,
respondTo:"window",
responsive:null,
rtl:!1,
slide:"",
slidesToShow:1,
slidesToScroll:1,
speed:500,
keydownOverride:!1,
keydownSpeed:500,
swipe:!0,
swipeToSlide:!1,
touchMove:!0,
touchThreshold:5,
useCSS:!0,
variableWidth:!1,
vertical:!1,
waitForAnimate:!0
}, o.initials = {
animating:!1,
dragging:!1,
autoPlayTimer:null,
currentDirection:0,
currentLeft:null,
currentSlide:0,
direction:1,
currentSpeed:null,
iskeyboardEvent:!1,
$dots:null,
listWidth:null,
listHeight:null,
loadIndex:0,
$nextArrow:null,
$prevArrow:null,
slideCount:null,
slideWidth:null,
$slideTrack:null,
$slides:null,
sliding:!1,
slideOffset:0,
swipeLeft:null,
$list:null,
touchObject:{},
transformsEnabled:!1
}, e.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.hidden = "hidden", o.paused = !1, o.positionProp = null, o.respondTo = null, o.shouldClick = !0, o.$slider = e(i), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, a = e(i).data("slick") || {}, o.options = e.extend({}, o.defaults, a, n), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, r = o.options.responsive || null, r && r.length > -1) {
o.respondTo = o.options.respondTo || "window";
for (_ in r) r.hasOwnProperty(_) && (o.breakpoints.push(r[_].breakpoint), o.breakpointSettings[r[_].breakpoint] = r[_].settings);
o.breakpoints.sort(function(e, t) {
return _i_("3bb:c2b72627"), _r_(o.options.mobileFirst === !0 ? e - t :t - e);
});
}
"undefined" != typeof document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") :"undefined" != typeof document.msHidden ? (o.hidden = "msHidden", o.visibilityChange = "msvisibilitychange") :"undefined" != typeof document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = e.proxy(o.autoPlay, o), o.autoPlayClear = e.proxy(o.autoPlayClear, o), o.changeSlide = e.proxy(o.changeSlide, o), o.clickHandler = e.proxy(o.clickHandler, o), o.selectHandler = e.proxy(o.selectHandler, o), o.setPosition = e.proxy(o.setPosition, o), o.swipeHandler = e.proxy(o.swipeHandler, o), o.dragHandler = e.proxy(o.dragHandler, o), o.keyHandler = e.proxy(o.keyHandler, o), o.autoPlayIterator = e.proxy(o.autoPlayIterator, o), o.instanceUid = t++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.init(), o.checkResponsive(!0), _r_();
}
return _r_(i);
}(), t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
_i_("3bb:1873807f");
var a = this;
if ("boolean" == typeof i) n = i, i = null; else if (0 > i || i >= a.slideCount) return _r_(!1);
a.unload(), "number" == typeof i ? 0 === i && 0 === a.$slides.length ? e(t).appendTo(a.$slideTrack) :n ? e(t).insertBefore(a.$slides.eq(i)) :e(t).insertAfter(a.$slides.eq(i)) :n === !0 ? e(t).prependTo(a.$slideTrack) :e(t).appendTo(a.$slideTrack), a.$slides = a.$slideTrack.children(this.options.slide), a.$slideTrack.children(this.options.slide).detach(), a.$slideTrack.append(a.$slides), a.$slides.each(function(t, i) {
_i_("3bb:fa93a0c01"), e(i).attr("data-slick-index", t), _r_();
}), a.$slidesCache = a.$slides, a.reinit(), _r_();
}, t.prototype.animateHeight = function() {
_i_("3bb:5c984c58");
var e = this, t = e.options.animateHeightSpeed || e.options.speed;
if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
var i = e.$slides.eq(e.currentSlide).outerHeight(!0);
e.$list.animate({
height:i
}, t);
}
_r_();
}, t.prototype.animateSlide = function(t, i) {
_i_("3bb:b902e881");
var n = {}, a = this;
a.animateHeight(), a.options.rtl === !0 && a.options.vertical === !1 && (t = -t), a.transformsEnabled === !1 ? a.options.vertical === !1 ? a.$slideTrack.animate({
left:t
}, a.options.speed, a.options.easing, i) :a.$slideTrack.animate({
top:t
}, a.options.speed, a.options.easing, i) :a.cssTransitions === !1 ? (a.options.rtl === !0 && (a.currentLeft = -a.currentLeft), e({
animStart:a.currentLeft
}).animate({
animStart:t
}, {
duration:a.options.speed,
easing:a.options.easing,
step:function(e) {
_i_("3bb:67f59eb1"), e = Math.ceil(e), a.options.vertical === !1 ? (n[a.animType] = "translate(" + e + "px, 0px)", a.$slideTrack.css(n)) :(n[a.animType] = "translate(0px," + e + "px)", a.$slideTrack.css(n)), _r_();
},
complete:function() {
_i_("3bb:ed4aef1a"), i && i.call(), _r_();
}
})) :(a.applyTransition(), t = Math.ceil(t), a.options.vertical === !1 ? n[a.animType] = "translate3d(" + t + "px, 0px, 0px)" :n[a.animType] = "translate3d(0px," + t + "px, 0px)", a.$slideTrack.css(n), i && setTimeout(function() {
_i_("3bb:07179984"), a.disableTransition(), i.call(), _r_();
}, a.options.speed)), _r_();
}, t.prototype.asNavFor = function(t) {
_i_("3bb:e8b7bb75");
var i = this, n = null !== i.options.asNavFor ? e(i.options.asNavFor).slick("getSlick") :null;
null !== n && n.slideHandler(t, !0), _r_();
}, t.prototype.applyTransition = function(e) {
_i_("3bb:5ddae8bc");
var t = this, i = {};
t.options.fade === !1 ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase :i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(i) :t.$slides.eq(e).css(i), _r_();
}, t.prototype.autoPlay = function() {
_i_("3bb:1e6757ca");
var e = this;
e.autoPlayTimer && clearInterval(e.autoPlayTimer), e.slideCount > e.options.slidesToShow && e.paused !== !0 && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed)), _r_();
}, t.prototype.autoPlayClear = function() {
_i_("3bb:af3f522d");
var e = this;
e.autoPlayTimer && clearInterval(e.autoPlayTimer), _r_();
}, t.prototype.autoPlayIterator = function() {
_i_("3bb:e6097c53");
var e = this;
e.options.infinite === !1 ? 1 === e.direction ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll)) :(e.currentSlide - 1 === 0 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) :e.slideHandler(e.currentSlide + e.options.slidesToScroll), _r_();
}, t.prototype.buildArrows = function() {
_i_("3bb:76e69167");
var t = this;
t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow = e(t.options.prevArrow), t.$nextArrow = e(t.options.nextArrow), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.appendTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled")), _r_();
}, t.prototype.buildDots = function() {
_i_("3bb:b8f116fc");
var t, i, n = this;
if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
for (i = '<ul class="' + n.options.dotsClass + '">', t = 0; t <= n.getDotCount(); t += 1) i += "<li>" + n.options.customPaging.call(this, n, t) + "</li>";
i += "</ul>", n.$dots = e(i).appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
}
_r_();
}, t.prototype.buildOut = function() {
_i_("3bb:6853e134");
var t = this;
t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
_i_("3bb:fa93a0c0"), e(i).attr("data-slick-index", t), _r_();
}), t.$slidesCache = t.$slides, t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) :t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-hidden="true" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide :0), t.options.draggable === !0 && t.$list.addClass("draggable"), _r_();
}, t.prototype.checkResponsive = function(t) {
_i_("3bb:7df269de");
var i, n, a, r = this, _ = r.$slider.width(), o = window.innerWidth || e(window).width();
if ("window" === r.respondTo ? a = o :"slider" === r.respondTo ? a = _ :"min" === r.respondTo && (a = Math.min(o, _)), r.originalSettings.responsive && r.originalSettings.responsive.length > -1 && null !== r.originalSettings.responsive) {
n = null;
for (i in r.breakpoints) r.breakpoints.hasOwnProperty(i) && (r.originalSettings.mobileFirst === !1 ? a < r.breakpoints[i] && (n = r.breakpoints[i]) :a > r.breakpoints[i] && (n = r.breakpoints[i]));
null !== n ? null !== r.activeBreakpoint ? n !== r.activeBreakpoint && (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick() :(r.options = e.extend({}, r.originalSettings, r.breakpointSettings[n]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh())) :(r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick() :(r.options = e.extend({}, r.originalSettings, r.breakpointSettings[n]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh())) :null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh());
}
_r_();
}, t.prototype.changeSlide = function(t, i) {
_i_("3bb:0c4c634e");
var n, a, r, _ = this, o = e(t.target);
switch (o.is("a") && t.preventDefault(), r = _.slideCount % _.options.slidesToScroll !== 0, n = r ? 0 :(_.slideCount - _.currentSlide) % _.options.slidesToScroll, t.data.message) {
case "previous":
a = 0 === n ? _.options.slidesToScroll :_.options.slidesToShow - n, _.slideCount > _.options.slidesToShow && _.slideHandler(_.currentSlide - a, !1, i);
break;

case "next":
a = 0 === n ? _.options.slidesToScroll :n, _.slideCount > _.options.slidesToShow && _.slideHandler(_.currentSlide + a, !1, i);
break;

case "index":
var s = 0 === t.data.index ? 0 :t.data.index || e(t.target).parent().index() * _.options.slidesToScroll;
_.slideHandler(_.checkNavigable(s), !1, i);
break;

default:
return _r_();
}
_r_();
}, t.prototype.checkNavigable = function(e) {
_i_("3bb:2e3760ed");
var t, i, n = this;
if (t = n.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1]; else for (var a in t) {
if (e < t[a]) {
e = i;
break;
}
i = t[a];
}
return _r_(e);
}, t.prototype.clickHandler = function(e) {
_i_("3bb:810abac5");
var t = this;
t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault()), _r_();
}, t.prototype.destroy = function() {
_i_("3bb:3c19434e");
var t = this;
t.autoPlayClear(), t.touchObject = {}, e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove(), t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-center slick-visible").attr("aria-hidden", "true").removeAttr("data-slick-index").css({
position:"",
left:"",
top:"",
zIndex:"",
opacity:"",
width:""
}), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$list.unbind(".slick"), e(window).unbind(".slick-" + t.instanceUid), e(document).unbind(".slick-" + t.instanceUid), t.$slider.html(t.$slides), _r_();
}, t.prototype.disableTransition = function(e) {
_i_("3bb:b2756228");
var t = this, i = {};
i[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(i) :t.$slides.eq(e).css(i), _r_();
}, t.prototype.fadeSlide = function(e, t) {
_i_("3bb:c1100626");
var i = this;
i.cssTransitions === !1 ? (i.$slides.eq(e).css({
zIndex:1e3
}), i.options.speed ? i.$slides.eq(e).animate({
opacity:1
}, i.options.speed, i.options.easing, t) :i.$slides.eq(e).show(i.options.speed, t)) :(i.applyTransition(e), i.$slides.eq(e).css({
opacity:1,
zIndex:1e3
}), t && setTimeout(function() {
_i_("3bb:a3438e15"), i.disableTransition(e), t.call(), _r_();
}, i.options.speed)), _r_();
}, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
_i_("3bb:99588b02");
var t = this;
null !== e && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit()), _r_();
}, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
_i_("3bb:d878ac94");
var e = this;
return _r_(e.currentSlide);
}, t.prototype.getDotCount = function() {
_i_("3bb:d90cc7a5");
var e = this, t = 0, i = 0, n = 0;
if (e.options.infinite === !0) n = Math.ceil(e.slideCount / e.options.slidesToScroll); else if (e.options.centerMode === !0) n = e.slideCount; else for (;t < e.slideCount; ) ++n, t = i + e.options.slidesToShow, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll :e.options.slidesToShow;
return _r_(n - 1);
}, t.prototype.getLeft = function(e) {
_i_("3bb:0a691e40");
var t, i, n, a = this, r = 0;
return a.slideOffset = 0, i = a.$slides.first().outerHeight(), a.options.infinite === !0 ? (a.slideCount > a.options.slidesToShow && (a.slideOffset = a.slideWidth * a.options.slidesToShow * -1, r = i * a.options.slidesToShow * -1), a.slideCount % a.options.slidesToScroll !== 0 && e + a.options.slidesToScroll > a.slideCount && a.slideCount > a.options.slidesToShow && (e > a.slideCount ? (a.slideOffset = (a.options.slidesToShow - (e - a.slideCount)) * a.slideWidth * -1, r = (a.options.slidesToShow - (e - a.slideCount)) * i * -1) :(a.slideOffset = a.slideCount % a.options.slidesToScroll * a.slideWidth * -1, r = a.slideCount % a.options.slidesToScroll * i * -1))) :e + a.options.slidesToShow > a.slideCount && (a.slideOffset = (e + a.options.slidesToShow - a.slideCount) * a.slideWidth, r = (e + a.options.slidesToShow - a.slideCount) * i), a.slideCount <= a.options.slidesToShow && (a.slideOffset = 0, r = 0), a.options.centerMode === !0 && a.options.infinite === !0 ? a.slideOffset += a.slideWidth * Math.floor(a.options.slidesToShow / 2) - a.slideWidth :a.options.centerMode === !0 && (a.slideOffset = 0, a.slideOffset += a.slideWidth * Math.floor(a.options.slidesToShow / 2)), t = a.options.vertical === !1 ? e * a.slideWidth * -1 + a.slideOffset :e * i * -1 + r, a.options.variableWidth === !0 && (n = a.slideCount <= a.options.slidesToShow || a.options.infinite === !1 ? a.$slideTrack.children(".slick-slide").eq(e) :a.$slideTrack.children(".slick-slide").eq(e + a.options.slidesToShow), t = n[0] ? -1 * n[0].offsetLeft :0, a.options.centerMode === !0 && (n = a.options.infinite === !1 ? a.$slideTrack.children(".slick-slide").eq(e) :a.$slideTrack.children(".slick-slide").eq(e + a.options.slidesToShow + 1), t = n[0] ? -1 * n[0].offsetLeft :0, t += (a.$list.width() - n.outerWidth()) / 2)), _r_(t);
}, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
_i_("3bb:aa126de6");
var t = this;
return _r_(t.options[e]);
}, t.prototype.getNavigableIndexes = function() {
_i_("3bb:b807f95a");
var e, t = this, i = 0, n = 0, a = [];
for (t.options.infinite === !1 ? (e = t.slideCount - t.options.slidesToShow + 1, t.options.centerMode === !0 && (e = t.slideCount)) :(i = -1 * t.slideCount, n = -1 * t.slideCount, e = 2 * t.slideCount); e > i; ) a.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll :t.options.slidesToShow;
return _r_(a);
}, t.prototype.getSlick = function() {
return _i_("3bb:b34e3db8"), _r_(this);
}, t.prototype.getSlideCount = function() {
_i_("3bb:52494332");
var t, i, n, a = this;
return n = a.options.centerMode === !0 ? a.slideWidth * Math.floor(a.options.slidesToShow / 2) :0, a.options.swipeToSlide === !0 ? (a.$slideTrack.find(".slick-slide").each(function(t, r) {
if (_i_("3bb:f3f48d61"), r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * a.swipeLeft) return i = r, _r_(!1);
_r_();
}), t = Math.abs(e(i).attr("data-slick-index") - a.currentSlide) || 1, _r_(t)) :_r_(a.options.slidesToScroll);
}, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
_i_("3bb:90487959");
var i = this;
i.changeSlide({
data:{
message:"index",
index:parseInt(e)
}
}, t), _r_();
}, t.prototype.init = function() {
_i_("3bb:72d3a587");
var t = this;
e(t.$slider).hasClass("slick-initialized") || (e(t.$slider).addClass("slick-initialized"), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots()), t.$slider.trigger("init", [ t ]), _r_();
}, t.prototype.initArrowEvents = function() {
_i_("3bb:d6e60b62");
var e = this;
e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.bind("click.slick", {
message:"previous"
}, e.changeSlide), e.$nextArrow.bind("click.slick", {
message:"next"
}, e.changeSlide)), _r_();
}, t.prototype.initDotEvents = function() {
_i_("3bb:f2531feb");
var t = this;
t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).bind("click.slick", {
message:"index"
}, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).bind("mouseenter.slick", function() {
_i_("3bb:eb68020a"), t.paused = !0, t.autoPlayClear(), _r_();
}).bind("mouseleave.slick", function() {
_i_("3bb:5e48df25"), t.paused = !1, t.autoPlay(), _r_();
}), _r_();
}, t.prototype.initializeEvents = function() {
_i_("3bb:8b9bc1fd");
var t = this;
t.initArrowEvents(), t.initDotEvents(), t.$list.bind("touchstart.slick mousedown.slick", {
action:"start"
}, t.swipeHandler), t.$list.bind("touchmove.slick mousemove.slick", {
action:"move"
}, t.swipeHandler), t.$list.bind("touchend.slick mouseup.slick", {
action:"end"
}, t.swipeHandler), t.$list.bind("touchcancel.slick mouseleave.slick", {
action:"end"
}, t.swipeHandler), t.$list.bind("click.slick", t.clickHandler), t.options.autoplay === !0 && (e(document).bind(t.visibilityChange, function() {
_i_("3bb:3965a55c"), t.visibility(), _r_();
}), t.options.pauseOnHover === !0 && (t.$list.bind("mouseenter.slick", function() {
_i_("3bb:eb68020a1"), t.paused = !0, t.autoPlayClear(), _r_();
}), t.$list.bind("mouseleave.slick", function() {
_i_("3bb:5e48df251"), t.paused = !1, t.autoPlay(), _r_();
}))), t.options.accessibility === !0 && e(document).bind("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().bind("click.slick", t.selectHandler), e(window).bind("orientationchange.slick.slick-" + t.instanceUid, function() {
_i_("3bb:71ea83f9"), t.checkResponsive(), t.setPosition(), _r_();
}), e(window).bind("resize.slick.slick-" + t.instanceUid, function() {
_i_("3bb:8841ac5e"), e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
_i_("3bb:9ccec9da"), t.windowWidth = e(window).width(), t.checkResponsive(), t.setPosition(), _r_();
}, 50)), _r_();
}), e("*[draggable!=true]", t.$slideTrack).bind("dragstart", function(e) {
_i_("3bb:a38e47a3"), e.preventDefault(), _r_();
}), e(window).bind("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).bind("ready.slick.slick-" + t.instanceUid, t.setPosition), _r_();
}, t.prototype.initUI = function() {
_i_("3bb:ea873936");
var e = this;
e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show(), e.options.autoplay === !0 && e.autoPlay(), _r_();
}, t.prototype.keyHandler = function(e) {
_i_("3bb:b1b7e014");
var t = this;
t.options.accessibility === !0 && t.options.keydownOverride === !0 && t.options.keydownSpeed && (t.iskeyboardEvent = !0, t.currentSpeed = t.options.speed, t.options.speed = t.options.keydownSpeed), 37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
data:{
message:t.options.rtl ? "next" :"previous"
}
}) :39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
data:{
message:t.options.rtl ? "previous" :"next"
}
}), _r_();
}, t.prototype.lazyLoad = function() {
_i_("3bb:02e48efc");
var t, i, n, a, r = this;
function _(t) {
_i_("3bb:828d9079"), e("img[data-lazy]", t).each(function() {
_i_("3bb:243378cc");
var t = e(this), i = e(this).attr("data-lazy");
t.load(function() {
_i_("3bb:73f61e94"), t.animate({
opacity:1
}, 200), _r_();
}).css({
opacity:0
}).attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), _r_();
}), _r_();
}
r.options.centerMode === !0 ? r.options.infinite === !0 ? (n = r.currentSlide + (r.options.slidesToShow / 2 + 1), a = n + r.options.slidesToShow + 2) :(n = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), a = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) :(n = r.options.infinite ? r.options.slidesToShow + r.currentSlide :r.currentSlide, a = n + r.options.slidesToShow, r.options.fade === !0 && (n > 0 && n--, a <= r.slideCount && a++)), t = r.$slider.find(".slick-slide").slice(n, a), _(t), r.slideCount <= r.options.slidesToShow ? (i = r.$slider.find(".slick-slide"), _(i)) :r.currentSlide >= r.slideCount - r.options.slidesToShow ? (i = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), _(i)) :0 === r.currentSlide && (i = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow), _(i)), _r_();
}, t.prototype.loadSlider = function() {
_i_("3bb:df137ba3");
var e = this;
e.setPosition(), e.$slideTrack.css({
opacity:1
}), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad(), _r_();
}, t.prototype.next = t.prototype.slickNext = function() {
_i_("3bb:88d71b69");
var e = this;
e.changeSlide({
data:{
message:"next"
}
}), _r_();
}, t.prototype.pause = t.prototype.slickPause = function() {
_i_("3bb:f2c15337");
var e = this;
e.autoPlayClear(), e.paused = !0, _r_();
}, t.prototype.play = t.prototype.slickPlay = function() {
_i_("3bb:3dce7834");
var e = this;
e.paused = !1, e.autoPlay(), _r_();
}, t.prototype.postSlide = function(e) {
_i_("3bb:5b6dc3bf");
var t = this;
t.$slider.trigger("afterChange", [ t, e ]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay === !0 && t.paused === !1 && t.autoPlay(), t.options.accessibility === !0 && t.options.keydownOverride === !0 && t.iskeyboardEvent === !0 && (t.iskeyboardEvent = !1, t.options.speed = t.currentSpeed), _r_();
}, t.prototype.prev = t.prototype.slickPrev = function() {
_i_("3bb:00586209");
var e = this;
e.changeSlide({
data:{
message:"previous"
}
}), _r_();
}, t.prototype.progressiveLazyLoad = function() {
_i_("3bb:1c406966");
var t, i, n = this;
t = e("img[data-lazy]", n.$slider).length, t > 0 && (i = e("img[data-lazy]", n.$slider).first(), i.attr("src", i.attr("data-lazy")).removeClass("slick-loading").load(function() {
_i_("3bb:6229d7ca"), i.removeAttr("data-lazy"), n.progressiveLazyLoad(), n.options.adaptiveHeight === !0 && n.setPosition(), _r_();
}).error(function() {
_i_("3bb:0fb46887"), i.removeAttr("data-lazy"), n.progressiveLazyLoad(), _r_();
})), _r_();
}, t.prototype.refresh = function() {
_i_("3bb:6dd86baa");
var t = this, i = t.currentSlide;
t.destroy(), e.extend(t, t.initials), t.init(), t.changeSlide({
data:{
message:"index",
index:i
}
}, !0), _r_();
}, t.prototype.reinit = function() {
_i_("3bb:b9485622");
var t = this;
t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().bind("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [ t ]), _r_();
}, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
_i_("3bb:6cd94992");
var n = this;
if ("boolean" == typeof e ? (t = e, e = t === !0 ? 0 :n.slideCount - 1) :e = t === !0 ? --e :e, n.slideCount < 1 || 0 > e || e > n.slideCount - 1) return _r_(!1);
n.unload(), i === !0 ? n.$slideTrack.children().remove() :n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit(), _r_();
}, t.prototype.setCSS = function(e) {
_i_("3bb:5c295263");
var t, i, n = this, a = {};
n.options.rtl === !0 && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" :"0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" :"0px", a[n.positionProp] = e, n.transformsEnabled === !1 ? n.$slideTrack.css(a) :(a = {}, n.cssTransitions === !1 ? (a[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(a)) :(a[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(a))), _r_();
}, t.prototype.setDimensions = function() {
_i_("3bb:76db605f");
var e = this;
if (e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
padding:"0px " + e.options.centerPadding
}) :(e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
padding:e.options.centerPadding + " 0px"
})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1) e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length)); else if (e.options.variableWidth === !0) {
var t = 0;
e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.children(".slick-slide").each(function() {
_i_("3bb:3b52e153"), t += e.listWidth, _r_();
}), e.$slideTrack.width(Math.ceil(t) + 1);
} else e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length));
var i = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - i), _r_();
}, t.prototype.setFade = function() {
_i_("3bb:5d0d1f0d");
var t, i = this;
i.$slides.each(function(n, a) {
_i_("3bb:04f6cdfb"), t = i.slideWidth * n * -1, i.options.rtl === !0 ? e(a).css({
position:"relative",
right:t,
top:0,
zIndex:800,
opacity:0
}) :e(a).css({
position:"relative",
left:t,
top:0,
zIndex:800,
opacity:0
}), _r_();
}), i.$slides.eq(i.currentSlide).css({
zIndex:900,
opacity:1
}), _r_();
}, t.prototype.setHeight = function() {
_i_("3bb:a1485bd1");
var e = this;
if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
e.$list.css("height", t);
}
_r_();
}, t.prototype.setOption = t.prototype.slickSetOption = function(e, t, i) {
_i_("3bb:92a239a5");
var n = this;
n.options[e] = t, i === !0 && (n.unload(), n.reinit()), _r_();
}, t.prototype.setPosition = function() {
_i_("3bb:9e0d36fb");
var e = this;
e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) :e.setFade(), e.$slider.trigger("setPosition", [ e ]), _r_();
}, t.prototype.setProps = function() {
_i_("3bb:b9a544a2");
var e = this, t = document.body.style;
e.positionProp = e.options.vertical === !0 ? "top" :"left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") :e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = null !== e.animType && e.animType !== !1, _r_();
}, t.prototype.setSlideClasses = function(e) {
_i_("3bb:42777f94");
var t, i, n, a, r = this;
r.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true").removeClass("slick-center"), i = r.$slider.find(".slick-slide"), r.options.centerMode === !0 ? (t = Math.floor(r.options.slidesToShow / 2), r.options.infinite === !0 && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") :(n = r.options.slidesToShow + e, i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") :e === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")) :e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") :i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") :(a = r.slideCount % r.options.slidesToShow, n = r.options.infinite === !0 ? r.options.slidesToShow + e :e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - a), n + a).addClass("slick-active").attr("aria-hidden", "false") :i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === r.options.lazyLoad && r.lazyLoad(), _r_();
}, t.prototype.setupInfinite = function() {
_i_("3bb:ba37ca51");
var t, i, n, a = this;
if (a.options.fade === !0 && (a.options.centerMode = !1), a.options.infinite === !0 && a.options.fade === !1 && (i = null, a.slideCount > a.options.slidesToShow)) {
for (n = a.options.centerMode === !0 ? a.options.slidesToShow + 1 :a.options.slidesToShow, t = a.slideCount; t > a.slideCount - n; t -= 1) i = t - 1, e(a.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - a.slideCount).prependTo(a.$slideTrack).addClass("slick-cloned");
for (t = 0; n > t; t += 1) i = t, e(a.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + a.slideCount).appendTo(a.$slideTrack).addClass("slick-cloned");
a.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
_i_("3bb:ebb1e066"), e(this).attr("id", ""), _r_();
});
}
_r_();
}, t.prototype.selectHandler = function(t) {
_i_("3bb:c47a628a");
var i = this, n = parseInt(e(t.target).parents(".slick-slide").attr("data-slick-index"));
if (n || (n = 0), i.slideCount <= i.options.slidesToShow) return i.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true"), i.$slides.eq(n).addClass("slick-active").attr("aria-hidden", "false"), i.options.centerMode === !0 && (i.$slider.find(".slick-slide").removeClass("slick-center"), i.$slides.eq(n).addClass("slick-center")), i.asNavFor(n), _r_();
i.slideHandler(n), _r_();
}, t.prototype.slideHandler = function(e, t, i) {
_i_("3bb:ca7773fb");
var n, a, r, _, o = null, s = this;
if (t = t || !1, s.animating === !0 && s.options.waitForAnimate === !0) return _r_();
if (s.options.fade === !0 && s.currentSlide === e) return _r_();
if (s.slideCount <= s.options.slidesToShow) return _r_();
if (t === !1 && s.asNavFor(e), n = e, o = s.getLeft(n), _ = s.getLeft(s.currentSlide), s.currentLeft = null === s.swipeLeft ? _ :s.swipeLeft, s.options.infinite === !1 && s.options.centerMode === !1 && (0 > e || e > s.getDotCount() * s.options.slidesToScroll)) return s.options.fade === !1 && (n = s.currentSlide, i !== !0 ? s.animateSlide(_, function() {
_i_("3bb:83dfe16c"), s.postSlide(n), _r_();
}) :s.postSlide(n)), _r_();
if (s.options.infinite === !1 && s.options.centerMode === !0 && (0 > e || e > s.slideCount - s.options.slidesToScroll)) return s.options.fade === !1 && (n = s.currentSlide, i !== !0 ? s.animateSlide(_, function() {
_i_("3bb:83dfe16c1"), s.postSlide(n), _r_();
}) :s.postSlide(n)), _r_();
if (s.options.autoplay === !0 && clearInterval(s.autoPlayTimer), a = 0 > n ? s.slideCount % s.options.slidesToScroll !== 0 ? s.slideCount - s.slideCount % s.options.slidesToScroll :s.slideCount + n :n >= s.slideCount ? s.slideCount % s.options.slidesToScroll !== 0 ? 0 :n - s.slideCount :n, s.animating = !0, s.$slider.trigger("beforeChange", [ s, s.currentSlide, a ]), r = s.currentSlide, s.currentSlide = a, s.setSlideClasses(s.currentSlide), s.updateDots(), s.updateArrows(), s.options.fade === !0) return i !== !0 ? s.fadeSlide(a, function() {
_i_("3bb:a126f812"), s.postSlide(a), _r_();
}) :s.postSlide(a), s.animateHeight(), _r_();
i !== !0 ? s.animateSlide(o, function() {
_i_("3bb:ff62ff23"), s.postSlide(a), _r_();
}) :s.postSlide(a), _r_();
}, t.prototype.startLoad = function() {
_i_("3bb:e1af5713");
var e = this;
e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading"), _r_();
}, t.prototype.swipeDirection = function() {
_i_("3bb:70a2ac4d");
var e, t, i, n, a = this;
if (e = a.touchObject.startX - a.touchObject.curX, t = a.touchObject.startY - a.touchObject.curY, i = Math.atan2(t, e), n = Math.round(180 * i / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0) return _r_(a.options.rtl === !1 ? "left" :"right");
if (360 >= n && n >= 315) return _r_(a.options.rtl === !1 ? "left" :"right");
if (n >= 135 && 225 >= n) return _r_(a.options.rtl === !1 ? "right" :"left");
return _r_("vertical");
}, t.prototype.swipeEnd = function(e) {
_i_("3bb:c3f8361e");
var t, i = this;
if (i.dragging = !1, i.shouldClick = i.touchObject.swipeLength > 10 ? !1 :!0, void 0 === i.touchObject.curX) return _r_(!1);
if (i.touchObject.edgeHit === !0 && i.$slider.trigger("edge", [ i, i.swipeDirection() ]), i.touchObject.swipeLength >= i.touchObject.minSwipe) switch (i.swipeDirection()) {
case "left":
t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) :i.currentSlide + i.getSlideCount(), i.slideHandler(t), i.currentDirection = 0, i.touchObject = {}, i.$slider.trigger("swipe", [ i, "left" ]);
break;

case "right":
t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) :i.currentSlide - i.getSlideCount(), i.slideHandler(t), i.currentDirection = 1, i.touchObject = {}, i.$slider.trigger("swipe", [ i, "right" ]);
} else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {});
_r_();
}, t.prototype.swipeHandler = function(e) {
_i_("3bb:e1bbc1a7");
var t = this;
if (t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1) return _r_();
if (t.options.draggable === !1 && -1 !== e.type.indexOf("mouse")) return _r_();
switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length :1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, e.data.action) {
case "start":
t.swipeStart(e);
break;

case "move":
t.swipeMove(e);
break;

case "end":
t.swipeEnd(e);
}
_r_();
}, t.prototype.swipeMove = function(e) {
_i_("3bb:1f54038b");
var t, i, n, a, r, _ = this;
if (r = void 0 !== e.originalEvent ? e.originalEvent.touches :null, !_.dragging || r && 1 !== r.length) return _r_(!1);
if (t = _.getLeft(_.currentSlide), _.touchObject.curX = void 0 !== r ? r[0].pageX :e.clientX, _.touchObject.curY = void 0 !== r ? r[0].pageY :e.clientY, _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2))), i = _.swipeDirection(), "vertical" === i) return _r_();
if (void 0 !== e.originalEvent && _.touchObject.swipeLength > 4 && e.preventDefault(), a = (_.options.rtl === !1 ? 1 :-1) * (_.touchObject.curX > _.touchObject.startX ? 1 :-1), n = _.touchObject.swipeLength, _.touchObject.edgeHit = !1, _.options.infinite === !1 && (0 === _.currentSlide && "right" === i || _.currentSlide >= _.getDotCount() && "left" === i) && (n = _.touchObject.swipeLength * _.options.edgeFriction, _.touchObject.edgeHit = !0), _.options.vertical === !1 ? _.swipeLeft = t + n * a :_.swipeLeft = t + n * (_.$list.height() / _.listWidth) * a, _.options.fade === !0 || _.options.touchMove === !1) return _r_(!1);
if (_.animating === !0) return _.swipeLeft = null, _r_(!1);
_.setCSS(_.swipeLeft), _r_();
}, t.prototype.swipeStart = function(e) {
_i_("3bb:c769c4b1");
var t, i = this;
if (1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, _r_(!1);
void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX :e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY :e.clientY, i.dragging = !0, _r_();
}, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
_i_("3bb:02fdcdc5");
var e = this;
null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit()), _r_();
}, t.prototype.unload = function() {
_i_("3bb:ff1ea595");
var t = this;
e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove(), t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden", "true").css("width", ""), _r_();
}, t.prototype.unslick = function() {
_i_("3bb:694228b1");
var e = this;
e.destroy(), _r_();
}, t.prototype.updateArrows = function() {
_i_("3bb:c5227483");
var e, t = this;
e = Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 && t.options.infinite !== !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.removeClass("slick-disabled"), t.$nextArrow.removeClass("slick-disabled"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled"), t.$nextArrow.removeClass("slick-disabled")) :t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled"), t.$prevArrow.removeClass("slick-disabled")) :t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled"), t.$prevArrow.removeClass("slick-disabled"))), _r_();
}, t.prototype.updateDots = function() {
_i_("3bb:10e22fcf");
var e = this;
null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false")), _r_();
}, t.prototype.visibility = function() {
_i_("3bb:6b86169a");
var e = this;
document[e.hidden] ? (e.paused = !0, e.autoPlayClear()) :(e.paused = !1, e.autoPlay()), _r_();
}, e.fn.slick = function() {
_i_("3bb:6828fd6b");
var e, i = this, n = arguments[0], a = Array.prototype.slice.call(arguments, 1), r = i.length, _ = 0;
for (_; r > _; _++) if ("object" == typeof n || "undefined" == typeof n ? i[_].slick = new t(i[_], n) :e = i[_].slick ? i[_].slick[n].apply(i[_].slick, a) :null, "undefined" != typeof e) return _r_(e);
return _r_(i);
}, e(function() {
_i_("3bb:d4d747eb"), e("[data-slick]").slick(), _r_();
}), _r_();
}), function() {
"use strict";
_i_("3bb:92835b08");
var e = "bhpps_eogwopd", t = {
blocked_once:1,
blocked_once_and_booked:2,
blocked_twice:3,
blocked_twice_and_booked:4
};
B.when({
events:"ready",
action:"book",
condition:B && B.env && B.env.b_stage && 2 === Number(B.env.b_stage)
}).run(i), B.when({
events:"ready",
action:"confirmation"
}).run(n);
function i(i) {
_i_("3bb:3dda149e");
var n = booking && booking.browserStorageHandler ? booking.browserStorageHandler :i("browser_storage_handler"), a = B && B.env && B.env.exp_enforce_only_guests_with_one_past_stays;
if (a) {
var r = B && B.env && B.env.b_hotel_id, _ = n.getSessionValue(e), o = _ ? _.split(",") :[];
-1 === o.indexOf(r + "") && o.push(r), _ = o.join(","), B && B.et && "function" == typeof B.et.customGoal && (1 === o.length ? B.et.customGoal(a, t.blocked_once) :2 === o.length && B.et.customGoal(a, t.blocked_twice)), n.addSessionValue(e, _);
}
_r_();
}
function n(i) {
_i_("3bb:cd7f555f");
var n = booking && booking.browserStorageHandler ? booking.browserStorageHandler :i("browser_storage_handler"), a = B && B.env && B.env.exp_enforce_only_guests_with_one_past_stays_hash;
if (a) {
var r = n.getSessionValue(e) || "", _ = r ? r.split(",") :[];
B && B.et && "function" == typeof B.et.customGoal && (1 === _.length ? B.et.customGoal(a, t.blocked_once_and_booked) :2 === _.length && B.et.customGoal(a, t.blocked_twice_and_booked));
}
_r_();
}
_r_();
}(), function() {
_i_("3bb:2ab18a76"), B.when({
events:"ready",
action:"book",
condition:2 === B.env.b_stage && "www" === B.env.b_site_type,
experiment:"NAFLeNLFTQZdbEWaHRIXTcTAcNcfEEHFRT"
}).run(function(e) {
_i_("3bb:63f44f13");
var t = e("jquery");
t("#house_rules_agreement").on("change", function() {
_i_("3bb:daf3a35c"), this.checked ? t("#house_rules_agree_error").hide() :t("#house_rules_agree_error").show(), _r_();
}), _r_();
}), _r_();
}(), B.when({
action:"book"
}).run(function() {
_i_("3bb:ae30bd48"), $("#primary_contact_select").bind("change", function() {
_i_("3bb:fe8436b2");
var e = $(this).find("option:selected").data("phone"), t = $(".bp_form__field--phone #phone");
t.val(e), t.trigger("change"), _r_();
}), _r_();
}), B.define("component/business/business-rates-lightbox", function(e, t, i) {
"use strict";
_i_("3bb:30fd9f7b");
var n = e("component"), a = e("lightbox");
i.exports = n.extend({
init:function() {
_i_("3bb:b8a5fd67"), a.show(this.el, {
customWrapperClassName:"bbrates_business_rates_lightbox__wrapper",
bAnimation:!0
}), this.$el.on("click", "#bbrates_business_rates_lightbox_button", function(e) {
_i_("3bb:50abb21e"), e.preventDefault(), a.hide(), _r_();
}), _r_();
}
}), _r_();
}), B.define("component/bp/travel-purpose", function(e, t, i) {
_i_("3bb:7b2250a2");
var n = e("component"), a = e("bp/validatable-field"), r = e("bp/store"), _ = Object.assign({}, a);
_.init = function() {
_i_("3bb:2fc520ba"), this.props = {}, this.props.name = "bp_travel_purpose", r.subscribe(this.render.bind(this)), _r_();
}, _.render = function(e, t) {
_i_("3bb:fe914cc315"), this.renderValidation(e, t), _r_();
}, i.exports = n.extend(_), _r_();
}), function() {
_i_("3bb:0ff4b659"), B.when({
action:"book",
events:"ready",
condition:2 === B.env.b_stage && !B.env.b_is_bbtool_admin && $("#notstayer").length
}).run(function() {
_i_("3bb:65fbc954"), $("#notstayer").prop("checked") && $(".guest-email-details").show(), $("#notstayer").on("change", function(e) {
if (_i_("3bb:895949b5"), $(e.target).prop("checked")) {
B.env.prefillFirstGuestNameDisabled = !0;
var t = $("#guest_name_" + B.env.b_firstroom_id);
t.val(""), $(".guest-email-details").show();
} else B.env.prefillFirstGuestNameDisabled = !1;
_r_();
}), _r_();
}), _r_();
}(), function() {
_i_("3bb:57bd44cb"), B.when({
action:"book",
events:"ready",
condition:2 === B.env.b_stage && !B.env.b_is_bbtool_admin && $(".segment-users-radio").length && $(".segment-users-radio").data("clear-guestname")
}).run(function() {
_i_("3bb:4e463ebe"), $("#notstayer_true").prop("checked") && (B.env.prefillFirstGuestNameDisabled = !0), $("#notstayer_true").on("change", function() {
_i_("3bb:707750d7"), B.env.prefillFirstGuestNameDisabled = !0;
var e = $("#guest_name_" + B.env.b_firstroom_id);
e.val(""), $(".guest-email-details").show(), _r_();
}), $("#notstayer_false").on("change", function() {
_i_("3bb:aabcfda6"), B.env.prefillFirstGuestNameDisabled = !1, _r_();
}), _r_();
}), _r_();
}(), B.when({
events:"ready",
condition:B.env.b_cfr_riskified_beacon_data_available
}).run(function() {
_i_("3bb:3c663289");
function e() {
_i_("3bb:d4110d1a");
var e = "www.booking.com", t = B.env.b_riskified_cart_token, i = ("https:" == document.location.protocol ? "https://" :"http://") + "beacon.riskified.com?shop=" + e + "&sid=" + t, n = document.createElement("script");
n.type = "text/javascript", n.async = !0, n.src = i;
var a = document.getElementsByTagName("script")[0];
a.parentNode.insertBefore(n, a), _r_();
}
window.attachEvent ? window.attachEvent("onload", e) :window.addEventListener("load", e, !1), _r_();
}), B.when({
events:"ready",
condition:B.env.b_alt_payment_methods || B.env.b_cfr_refp_available,
experiment:"GbJAHGfZOIHXWOYDIbLSBcUXO"
}).run(function(e) {
_i_("3bb:4d3941af");
var t = e("async-loader"), i = $("#bookForm>[name='cc_refp']")[0];
i || (i = document.createElement("input"), i.type = "hidden", i.name = "cc_refp", i.value = "1", i["class"] = "ClickTaleSensitive", $("#bookForm .ClickTaleSensitive[type=hidden]:last").after(i));
function n() {
_i_("3bb:259afbcb"), "undefined" != typeof REFP && new REFP({
swfPath:void 0,
excludeFlashFonts:!0
}).get(function(e) {
_i_("3bb:10ed6af6"), i.value = e, _r_();
}), _r_();
}
function a(e) {}
i.value && i.value.length > 5 || t.load({
js:"async_cfr_refp_js"
}).then(n, a), _r_();
}), B.when({
events:"ready"
}).run(function(e) {
if (_i_("3bb:d44b1255"), B.env.b_cfr_recp_available) {
var t = $("#bookForm>[name='recp']")[0];
t || (t = document.createElement("input"), t.type = "hidden", t.name = "recp", t.value = "0", t["class"] = "ClickTaleSensitive", $("#bookForm .ClickTaleSensitive[type=hidden]:last").after(t)), $("#firstname,#lastname").bind("paste", function(e) {
_i_("3bb:b394835e"), -1 == t.value.indexOf("n") && (t.value += "n"), _r_();
}), $("#cc_number").bind("paste", function(e) {
_i_("3bb:a93fbfe3"), -1 == t.value.indexOf("c") && (t.value += "c"), _r_();
});
}
_r_();
}), B.when({
events:"ready",
condition:B.env.b_cfr_ts_available
}).run(function(e) {
_i_("3bb:cb1a240b");
var t = {}, i = {}, n = {}, a = $("#bookForm>[name='rets']")[0], r = {
firstname:1,
lastname:2,
email:3,
email_confirm:4,
address1:5,
city:6,
zip:7,
phone:8,
cc_number:9,
cc_cvc:10,
password:11,
remarks:12,
others:13
};
function _(e) {
_i_("3bb:3c75711d");
for (var t = e.match(/(\d+)a(\d+)b(\d+)c/g) || [], a = 0; a < t.length; a++) {
var r = t[a].match(/(\d+)a(\d+)b(\d+)c/) || [];
r.length > 0 && (n[r[1]] = r[2], i[r[1]] = Math.round(r[3] / 100, 2));
}
_r_();
}
_(a.value);
function o() {
_i_("3bb:c607e416");
var e = "";
return Object.keys(n).forEach(function(t) {
_i_("3bb:890c99a4"), e += t + "a" + n[t] + "b" + Math.round(100 * i[t], 2) + "c", _r_();
}), _r_(e);
}
function s(e, a) {
_i_("3bb:75490f1b");
var r = new Date().getTime();
t[e] && (i[e] = i[e] || 0, i[e] += (r - t[e]) / 1e3, n[e] = Math.round(60 * a / i[e], 2)), t[e] = r, _r_();
}
$("input:visible[type=text],input:visible[type=password],textarea:visible").keyup(function(e) {
_i_("3bb:bfffa82b");
var t = e.target.id || "others", i = r[t] || 13;
s(i, $(e.target).val().length), _r_();
}), $("input:visible[type=text],input:visible[type=password],textarea:visible").focusout(function(e) {
_i_("3bb:8a2e1cd9"), a.value = o(), _r_();
}), _r_();
}), B.when({
events:"ready",
condition:B.env.b_cfr_im_available && "chrome" == B.env.b_browser
}).run(function(e) {
_i_("3bb:755fe910");
function t() {
_i_("3bb:89af8fdc");
var e = $("#bookForm>[name='recp']")[0], t = window.RequestFileSystem || window.webkitRequestFileSystem, i = -1;
if (!t) return i = -1, _r_(i);
return t(window.TEMPORARY, 100, function(e) {
_i_("3bb:ec48c1a1"), i = 0, _r_();
}, function(t) {
_i_("3bb:8a2090c2"), i = 1, -1 == e.value.indexOf("i") && (e.value += "i"), _r_();
}), _r_(i);
}
t(), _r_();
}), B.when({
events:"ready",
condition:B.env.b_cfr_mb_available
}).run(function() {
_i_("3bb:7e567923");
var e = {
distance:0,
diffTimeMs:0,
mouseClicks:0,
scrollsUp:0,
scrollsdown:0,
maxDx:0,
maxDy:0
}, t = $("#bookForm>[name='remb']")[0], i = 0, n = 0, a = 0, r = 0, _ = 0;
function o(e) {
_i_("3bb:d272d990");
var t = {
distance:"0",
diffTimeMs:"1",
mouseClicks:"2",
scrollsUp:"3",
scrollsdown:"4",
maxDx:"5",
maxDy:"6"
}, i = "";
return Object.keys(e).forEach(function(n) {
_i_("3bb:2711f30b");
var a = t[n], r = Math.round(e[n]);
r > 999999999 && (r = 999999999), i += a + "a" + r + "b", _r_();
}), _r_(i);
}
function s(t) {
_i_("3bb:96500766");
for (var i = {
"0":"distance",
"1":"diffTimeMs",
"2":"mouseClicks",
"3":"scrollsUp",
"4":"scrollsdown",
"5":"maxDx",
"6":"maxDy"
}, n = t.match(/(\d+)a(\d+)b/g) || [], a = 0; a < n.length; a++) {
var r = n[a].match(/(\d+)a(\d+)b/) || [];
if (r.length > 0) {
var _ = i[r[1]];
e[_] = parseInt(r[2], 10);
}
}
return _r_(e);
}
s(t.value), $("#b2bookPage").mousemove(function(t) {
_i_("3bb:53975e32"), (0 !== i || 0 !== n) && (a = t.pageX - i, r = t.pageY - n, e.distance += Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2)), a > e.maxDx && (e.maxDx = a), r > e.maxDy && (e.maxDy = r)), i = t.pageX, n = t.pageY, window.performance && window.performance.now && (_ = window.performance.now(), e.diffTimeMs += _ - t.timeStamp), _r_();
}), $("#b2bookPage").mousedown(function() {
_i_("3bb:89fda42c"), e.mouseClicks += 1, _r_();
}), $("#b2bookPage").bind("mousewheel", function(t) {
_i_("3bb:ea50d9c9"), t.originalEvent.wheelDelta / 120 > 0 ? e.scrollsUp += 1 :e.scrollsdown += 1, _r_();
}), $("#bookForm").submit(function() {
_i_("3bb:e6bf5da7");
try {
t.value = o(e);
} catch (i) {
return _r_(!0);
}
return _r_(!0);
}), _r_();
}), B.when({
events:"ready",
condition:B.env.b_alt_payment_available && ("chrome" == B.env.b_browser || "firefox" == B.env.b_browser)
}).run(function(e) {
_i_("3bb:872e3350");
function t(e) {
_i_("3bb:4618cd7b");
var t = {}, i = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
if (!i) {
var n = document.createElement("iframe");
n.style.display = "none", document.body.appendChild(n);
var a = n.contentWindow;
window.RTCPeerConnection = a.RTCPeerConnection, window.mozRTCPeerConnection = a.mozRTCPeerConnection, window.webkitRTCPeerConnection = a.webkitRTCPeerConnection, i = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
}
var r = {
optional:[ {
RtpDataChannels:!0
} ]
}, _ = {
iceServers:[ {
url:"stun:5.57.21.215:3478"
} ]
};
if (window.webkitRTCPeerConnection && (_ = {
iceServers:[ {
urls:"stun:5.57.21.215:3478"
} ]
}), void 0 === i) return _r_();
var o = new i(_, r);
o.onicecandidate = function(i) {
if (_i_("3bb:4dc2aa65"), i.candidate) {
var n = i.candidate.candidate.match(/([0-9]{1,3})(\.[0-9]{1,3})(\.[0-9]{1,3})(\.[0-9]{1,3})/g), a = /^(?:10|127|172\.(?:1[6-9]|2[0-9]|3[01])|192\.168)\..*/;
n && !a.test(n[0]) && (n = n[0], void 0 === t[n] && e(n), t[n] = !0);
}
_r_();
}, o.createDataChannel(""), o.createOffer(function(e) {
_i_("3bb:e031d0c6"), o.setLocalDescription(e, function() {}, function() {}), _r_();
}, function() {}), _r_();
}
function i(e) {
_i_("3bb:4a72ffbd");
var t = e.split(".");
return _r_(256 * (256 * (256 * +t[0] + +t[1]) + +t[2]) + +t[3]);
}
var n = document.createElement("input");
n.type = "hidden", n.name = "respd", n.value = "1", n["class"] = "ClickTaleSensitive", $("#bookForm .ClickTaleSensitive[type=hidden]:last").after(n), t(function(e) {
_i_("3bb:bad871c7"), n.value = i(e).toString(16), _r_();
}), _r_();
}), function() {
"use strict";
_i_("3bb:2f7f805b");
function e(e, t, i) {
_i_("3bb:26f97744");
var n = new i();
t.on("modal:open", function() {
_i_("3bb:d7466bfa"), n.init(e(".js-unit_info__sleeping")), _r_();
}), t.on("modal:close", function() {
_i_("3bb:922e8fac"), n.destroy(), _r_();
}), _r_();
}
B.when({
condition:3 === B.env.b_stage && B.env.fe_run_bh_sleeping_arrangement_js,
action:"book",
events:"ready"
}).require([ "jquery", "events", "component/bh/sleeping_arrangement" ], e), _r_();
}(), function() {
"use strict";
_i_("3bb:fa1ae28c");
function e(e) {
_i_("3bb:b4445109"), e("body").on("change", ".bp_bs2_guest_dropdown", function() {
_i_("3bb:dd916677"), this.value > 4 ? e(this).siblings(".city-regulation-fire-satefy-limit").show() :e(this).siblings(".city-regulation-fire-satefy-limit").hide(), _r_();
}), e(".bp_bs2_guest_dropdown").trigger("change"), _r_();
}
B.when({
action:"book",
events:"ready"
}).require([ "jquery" ], e), _r_();
}(), B.when({
events:"ready",
action:"book",
condition:!!$("input[name=exclusive_pay_now]").length
}).run(function(e) {
_i_("3bb:a8ea52fc");
var t = e("events"), i = $("#bookStage3Inc"), n = i.find("[data-pay-option]"), a = i.find("[data-tab-toggle]"), r = a.filter('[data-tab-toggle-for^="payment_method__content__creditcard"]'), _ = a.not('[data-tab-toggle-for^="payment_method__content__creditcard"]'), o = i.find(".payment-method__content-item"), s = o.filter("#payment_method__content__creditcard, #payment_method__content__creditcards"), l = o.not("#payment_method__content__creditcard, #payment_method__content__creditcards"), c = $(".bp_bs3_saved_cc_new_card_separate_form .cc_only_to_guarantee"), d = $(".cc_only_to_guarantee, .how_i_will_pay_holder, .submit_holder_you_wont_pay_till").not(c), b = $('[data-payment-schedule-when="now"]'), p = $('[data-payment-schedule-when="later"]'), u = $(".js--loyalty-program__redeem"), h = $(".loyalty-program__redeem-credit__cc-title");
function f() {
_i_("3bb:da51d5c8"), r.trigger("click"), r.find('input[name="payment_option"]').prop("checked", !0), _r_();
}
function m(e) {
_i_("3bb:3c60f750"), u.toggle(e), h.toggle(e), _r_();
}
function M(e) {
_i_("3bb:a1f2aad3"), _.toggle(e), _r_();
}
function g(e) {
_i_("3bb:bcf2cdbd"), $("input[name='pay_now']").val(e ? 1 :0), _r_();
}
function v(e) {
_i_("3bb:94241055");
var i = e ? s :l.first();
t.trigger("accordion:afterOpen", i), d.toggle(e), _r_();
}
function y(e) {
_i_("3bb:4f347ad5"), b.toggle(e), p.toggle(!e), _r_();
}
function B() {
_i_("3bb:1b3c8da3"), n.on("click", function() {
_i_("3bb:13f1013b");
var e = $(this), i = e.data("pay-option");
t.trigger("pay:timing:changed", i ? "later" :"now"), i && "now" == i ? (g(!0), M(!0), y(!0), v(!1), m(!0)) :(M(!1), g(!1), v(!0), y(!1), m(!1)), f(), _r_();
}), M(!1), g(!1), v(!0), m(!1), y(!1), _r_();
}
B(), _r_();
}), B.when({
events:"ready",
action:"book",
condition:!!$("input[name=exclusive_pay_now_partial]").length
}).run(function(e) {
_i_("3bb:b5e179e2");
var t = $("#bookStage3Inc"), i = $("[data-payment-schedule-partial-payment]"), n = t.find("[data-pay-option]"), a = t.find("[data-tab-toggle]"), r = a.filter('[data-tab-toggle-for^="payment_method__content__creditcard"]'), _ = a.not('[data-tab-toggle-for^="payment_method__content__creditcard"]'), o = $(".js--loyalty-program__redeem"), s = $(".loyalty-program__redeem-credit__cc-title");
function l() {
_i_("3bb:da51d5c81"), r.trigger("click"), r.find('input[name="payment_option"]').prop("checked", !0), _r_();
}
function c(e) {
_i_("3bb:a1f2aad31"), _.toggle(e), _r_();
}
function d(e) {
_i_("3bb:8ecf4e6e"), $("input[name='pay_now']").val(e ? 1 :0), _r_();
}
function b(e) {
_i_("3bb:3c60f7501"), o.toggle(e), s.toggle(e), _r_();
}
function p(e) {
_i_("3bb:226846d2"), i.each(function() {
_i_("3bb:ee41d0a4");
var t = $(this);
t.toggle(t.data("payment-schedule-partial-payment") == e), _r_();
}), _r_();
}
function u(e) {
_i_("3bb:427645d0"), p(e), "partial" == e ? (c(!1), d(!1), b(!1)) :(c(!0), d(!0), b(!0)), l(), _r_();
}
function h() {
_i_("3bb:7c8459c7"), n.on("click", function() {
_i_("3bb:c9113069");
var e = $(this), t = e.data("pay-option");
u(t), _r_();
}), _r_();
}
h(), u("partial"), b(!1), _r_();
}), B.when({
condition:null !== document.getElementById("pay_now_no_cc")
}).run(function(e) {
_i_("3bb:78b93011");
var t = e("jquery"), i = t("#pay_now_no_cc"), n = i.find(i.data("payment-methods-container") || "#paymentBlock"), a = i.find("[data-pay-now-indicator]"), r = n.find("input,select").filter(":not(disabled)");
function _() {
_i_("3bb:a179bc22");
var e = a.prop("checked");
e ? (n.show().find(".payment-method__toggle__label:first").click(), r.filter("[is-disabled-here]").prop("disabled", !1).removeAttr("is-disabled-here")) :(n.hide(), r.prop("disabled", !0).attr("is-disabled-here", 1)), _r_();
}
a.on("change", _), _(), _r_();
}), B.when({
action:"book",
condition:!!$(".payment_choice_timing").length
}).run(function(e) {
_i_("3bb:14011bdc");
var t = e("jquery"), i = e("events"), n = e("server-data"), a = e("bp/store"), r = t(".cc_only_to_guarantee, .how_i_will_pay_header, .payment-method__contents-policy-holder"), _ = t("#check_box_pay_now"), o = t("[data-check-for-chargeable]"), s = o.find('[data-is-chargeable="0"]'), l = s.closest("label"), c = t("[data-has-expanded-cards]"), d = c.find('[data-is-accepted-by-hotel="0"]'), b = d.closest("label"), p = !!c.length, u = !_.is(":checked"), h = null, f = {}, m = !1, M = t("[data-pay-now-tooltip]"), g = M.find("[data-method]"), v = "pay-xp--hidden", y = t("[data-pay-visible-for]"), B = t("[data-pay-disable-for]");
function w(e) {
_i_("3bb:67471c27"), h = null, e && e.payment_cc_details && e.payment_cc_details.cc_type && (h = e.payment_cc_details.cc_type), E(), _r_();
}
function C() {
_i_("3bb:f75edd64"), h = t(this).data("pay-method"), E(), _r_();
}
function k() {
_i_("3bb:b4ee1079"), M.hide(), _r_();
}
function N() {
_i_("3bb:0e893d9e"), g.hide().filter('[data-method="' + h + '"]').show(), M.show(), _r_();
}
function x() {
_i_("3bb:ea46330b"), u = !0, _.prop("checked", !1), m = !1, i.trigger("pay:timing:changed", u ? "later" :"now"), _r_();
}
function E() {
_i_("3bb:2c72179b");
var e = f[h];
e && (e.isChargeable ? e.isAcceptedByHotel ? (k(), m && x()) :u && (_.prop("checked", !0), m = !0, u = !1, i.trigger("pay:timing:changed", u ? "later" :"now"), N()) :u ? m = !1 :(x(), N())), _r_();
}
function T(e) {
_i_("3bb:7eee0c38"), e = e || "later", y.addClass(v).filter('[data-pay-visible-for="' + e + '"]').removeClass(v), _r_();
}
function D(e) {
_i_("3bb:418172e9"), e = e || "later", B.prop("disabled", !1).filter('[data-pay-disable-for="' + e + '"]').prop("disabled", !0), _r_();
}
function j() {
if (_i_("3bb:6e5d32dc"), M.on("click", function(e) {
_i_("3bb:5f554110"), e.preventDefault(), k(), _r_();
}), T(u ? "later" :"now"), D(u ? "later" :"now"), i.on("pay:tab:select", function(e) {
_i_("3bb:88d3548b");
var t = "payment_method__content__creditcard" !== e ? "now" :u ? "later" :"now";
i.trigger("pay:timing:changed", t), _r_();
}), i.on("pay:timing:changed", function(e) {
_i_("3bb:d598d6ec"), T(e), D(e), _r_();
}), p) return t("[data-is-chargeable]").each(function() {
_i_("3bb:3b752980");
var e = t(this), i = e.val();
if (!i) return _r_();
f[i] = {
isChargeable:1 == e.data("is-chargeable"),
isAcceptedByHotel:0 !== e.data("is-accepted-by-hotel")
}, _r_();
}), _.change(function() {
_i_("3bb:3619a56a"), u = !this.checked, E(), i.trigger("pay:timing:changed", u ? "later" :"now"), _r_();
}), a.subscribe(w), n.fe_pay__add_all_cc_types_for_pay_now && (t("input[name=cc_card_id]").change(C), t(".bp-bs3--add-new-cc-button a").click(function() {
_i_("3bb:cae48b74"), k(), m && x(), w(a.getState()), _r_();
})), _r_();
_r_();
}
j();
function $(e, t) {
_i_("3bb:ed9853a9"), e.show().removeClass("g-hidden").prop("disabled", !1), t.show().removeClass("g-hidden"), _r_();
}
function S(e, t, i) {
_i_("3bb:1b7a056d");
var n = t.filter(":checked,:selected");
t.hide().prop("disabled", !0), i.hide(), n.length && ("SELECT" === e.get(0).tagName ? e.val("") :n.prop("checked", !1), a.dispatch({
type:"UPDATE_PAYMENT_CC_DETAILS",
payload:{
key:"cc_type",
value:""
}
})), _r_();
}
_.change(function() {
_i_("3bb:cf289edd"), u = !this.checked, u ? (r.show(), o.length > 0 && $(s, l), c.length > 0 && S(c, d, b)) :(r.hide(), o.length > 0 && S(o, s, l), c.length > 0 && $(d, b)), i.trigger("pay:timing:changed", u ? "later" :"now"), _r_();
}), _r_();
}), B.when({
action:"book",
condition:!!$(".payment_choice_timing").length,
experiment:"bQddKNKNKZRVCScbQEENKZeEEFDXIVC"
}).run(function(e) {
_i_("3bb:40ffc9b5");
var t = e("events"), i = "pay-xp--hidden", n = $("[data-pay-visible-for]"), a = $("[data-pay-disable-for]"), r = $('input[name="hybrid_pay_now"]'), _ = $("#check_box_pay_to_property"), o = _.is(":checked");
function s(e) {
_i_("3bb:efb61eb9"), $("#payment_schedule_details").length > 0 && (e ? $("#payment_schedule_details").removeClass(i) :$("#payment_schedule_details").addClass(i)), _r_();
}
function l(e) {
_i_("3bb:7eee0c381"), e = e || "later", n.addClass(i).filter('[data-pay-visible-for="' + e + '"]').removeClass(i), _r_();
}
function c(e) {
_i_("3bb:418172e91"), e = e || "later", a.prop("disabled", !1).filter('[data-pay-disable-for="' + e + '"]').prop("disabled", !0), _r_();
}
function d() {
_i_("3bb:f3a9bbe8"), l(o ? "later" :"now"), c(o ? "later" :"now"), _.change(function() {
_i_("3bb:d5d5dba9"), o = this.checked, t.trigger("pay:timing:changed", o ? "later" :"now"), _r_();
}), t.on("pay:tab:select", function(e) {
_i_("3bb:88d3548b1");
var i = "payment_method__content__creditcard" !== e ? "now" :o ? "later" :"now";
t.trigger("pay:timing:changed", i), _r_();
}), t.on("pay:timing:changed", function(e) {
_i_("3bb:ce57ffa3"), s(o ? !1 :!0), l(o ? "later" :"now"), c(o ? "later" :"now"), r.attr("disabled", o ? !0 :!1), _r_();
}), _r_();
}
d(), _r_();
}), B.when({
action:"book",
condition:!!$(".payment-method__toggle-item__trigger").length
}).run(function(e) {}), function(e) {
"use strict";
_i_("3bb:a05ad9a2");
var t = "OOOTAIFOQJDJFWQIVUdHTaWe";
e.when({
action:"book",
condition:"3" == e.env.b_stage,
experiment:t
}).run(function(e) {
_i_("3bb:67b5db9b");
var i = e("et"), n = e("browser-storage-handler"), a = "used_mtv_recommended_price_filter_autoextend", r = n.getSessionValue(a, !0);
r && i.customGoal(t, 4), _r_();
}), _r_();
}(window.booking), function(e) {
"use strict";
_i_("3bb:8d1f6e16"), e.when({
action:"book",
condition:"3" == e.env.b_stage
}).run(function(e) {
_i_("3bb:c9e9d06a");
var t = e("browser-storage-handler"), i = e("jquery"), n = i("#mtv_last_sorter_used"), a = i("#bookForm"), r = "used_mtv_last_sorting";
a.length && a.on("submit", function() {
_i_("3bb:e0bf1f7b");
var e = t.getSessionValue(r, !0);
n.length && e && n.val(e), _r_();
}), _r_();
}), _r_();
}(window.booking), function(e) {
"use strict";
_i_("3bb:9bc63931"), e.when({
action:"book",
condition:"3" == e.env.b_stage
}).run(function(e) {
_i_("3bb:87951f42");
var t = e("browser-storage-handler"), i = e("jquery"), n = i("#mtv_user_viewed_comparison_component"), a = i("#bookForm"), r = "mtv_user_viewed_comparison_component";
a.length && a.on("submit", function() {
_i_("3bb:dc4a1dbd");
var e = t.getSessionValue(r, !0);
n.length && e && n.val(1), _r_();
}), _r_();
}), _r_();
}(window.booking), B.when({
hover:"300ms .js-pod_smp_nr",
action:"book",
experiment:"TULQSaTfLcWeAFBMbETDVaO",
stage:1
}).run(), function(e) {
_i_("3bb:c82ab237");
var t = "eDUIFbOcNZJScAEcSaERMJDSUHHEdQbUC";
e.when({
events:"ready",
action:"book"
}).run(function(e) {
_i_("3bb:e0738d70");
var i = e("et"), n = $("select.bp_bs2_guest_dropdown");
if (!n.length) return _r_();
n.on("change", function() {
_i_("3bb:2ae5a827"), i.customGoal(t, 1), _r_();
}), _r_();
}), _r_();
}(booking), B.when({
action:"book",
condition:!!$("[data-swap-on-hpp]").length
}).run(function() {
_i_("3bb:e3e5db5e");
var e = B.require("events"), t = B.env.paymentMethods && B.env.paymentMethods.filter(function(e) {
return _i_("3bb:1dc251b0"), _r_(e.bmp && !e.direct_integration);
}).map(function(e) {
return _i_("3bb:171ac9da"), _r_(e.abbr);
}), i = $("[data-swap-on-hpp]"), n = i.map(function() {
return _i_("3bb:5ad6fed6"), _r_(this.innerHTML);
});
i.length >= 2 && e.on("accordion:afterOpen", function(a) {
if (_i_("3bb:7151db72"), a && a.length) {
var r = a.find("[name=cc_type]").val();
t.indexOf(r) > -1 ? (i.eq(1).html(n[0]), i.eq(0).html(n[1])) :(i.eq(0).html(n[0]), i.eq(1).html(n[1]));
}
e.trigger("bwallet::raf::campaign::swaponhpp"), _r_();
}), _r_();
}), B.when({
action:"book",
condition:!!$(".bank-names__selection-item").length
}).run(function() {
_i_("3bb:17474edc");
var e = $(".selection-item--reveal"), t = $(".bank-names__selection-item");
e.on("click", function() {
_i_("3bb:a1082ae2"), t.removeClass("selection-item--hidden"), e.hide(), _r_();
}), _r_();
}), B.when({
events:"ready",
action:"book",
condition:!!$("input[name=hybrid_pay_now]").length && !$("[data-disable-pnpl-wrapper]").length
}).run(function(e) {
_i_("3bb:a4864fcf");
var t, i = e("events"), n = e("server-data"), a = e("tooltip"), r = n.bp_hybrid_pay_now, _ = $("#bookStage3Inc"), o = _.find("[data-pay-option]"), s = $("[data-check-for-chargeable]"), l = s.find('[data-is-chargeable="0"]'), c = l.closest("label"), d = s.find('[data-is-chargeable="1"]'), b = s.find('[data-is-accepted-by-hotel="0"]'), p = s.find('[data-is-accepted-by-hotel="1"]'), u = {}, h = _.find("[data-tab-toggle]"), f = h.filter('[data-tab-toggle-for^="payment_method__content__creditcard"]'), m = h.filter('[data-tab-toggle-for^="payment_method__content__company"]'), M = h.not('[data-tab-toggle-for^="payment_method__content__creditcard"],[data-tab-toggle-for^="payment_method__content__company"]'), g = "payment-method__toggle--is-hidden", v = _.find(".payment-method__content-item"), y = v.filter("#payment_method__content__creditcard, #payment_method__content__creditcards"), w = v.not("#payment_method__content__creditcard, #payment_method__content__creditcards"), C = $(".payment-details__m-stored .cc_only_to_guarantee"), k = $(".cc_only_to_guarantee, .how_i_will_pay_holder, .box__heading__sub-instructions").not(C), N = $(".payment-details-us-payout"), x = !!$("[data-hpp-pay-now-overlay]").length, E = [];
if (x) {
var T = _.find("#paymentBlock");
x = !1, T.length && M.length && (x = !0);
}
x && M.each(function() {
_i_("3bb:87072600"), E.push(this.getAttribute("data-tab-toggle-id")), _r_();
});
var D = "pay-xp--hidden", j = $("[data-pay-visible-for]"), S = $("[data-pay-disable-for]");
function A() {
_i_("3bb:0b4719ec");
var e = m.length ? m.eq(0) :f.eq(0);
e.trigger("click"), e.find('input[name="payment_option"]').prop("checked", !0), _r_();
}
function I(e) {
if (_i_("3bb:bd948306"), x && !t && (t = T.data("$component"), x = !!t), x) {
var i = {
disabled:e,
id:E
};
e ? i.showOverlay = !0 :i.hideOverlay = !0, t.update("disabled", i);
} else M.toggleClass(g, e);
_r_();
}
function O(e) {
_i_("3bb:ed59e645");
var t = e ? y :w.first();
if (i.trigger("accordion:afterOpen", t), k.toggle(e), N.toggle(!e), s.length > 0) if (e) n.fe_pay__add_all_cc_types_for_pay_now ? J(p, b) :(l.show(), c.show()); else if (n.fe_pay__add_all_cc_types_for_pay_now) J(d, l); else {
var a = l.filter(":checked,:selected");
l.hide(), c.hide(), a.length && ("SELECT" === s.get(0).tagName ? s.val("").change() :a.prop("checked", !1));
}
_r_();
}
function J(e, t) {
_i_("3bb:de5ededa"), e.show(), t.hide();
var i = t.filter(":checked,:selected");
i.length && (i.prop("checked", !1), s.val("").change()), _r_();
}
function P(e) {
_i_("3bb:7eee0c382"), e = e || "later", j.addClass(D).filter('[data-pay-visible-for="' + e + '"]').removeClass(D), _r_();
}
function L(e) {
_i_("3bb:418172e92"), e = e || "later", S.prop("disabled", !1).filter('[data-pay-disable-for="' + e + '"]').prop("disabled", !0), _r_();
}
function F() {
_i_("3bb:950f10f0"), a.get("cc-not-accepted-by-hotel-tooltip") && a.get("cc-not-accepted-by-hotel-tooltip").destroy(), _r_();
}
function R(e, t) {
_i_("3bb:f5bc083a"), e && a.setup({
id:"cc-not-accepted-by-hotel-tooltip",
target:'#book_credit_card [data-pay-method-tooltip="' + e + '"]',
text:t,
position:"bottom"
}), _r_();
}
function V(e) {
_i_("3bb:7439390b");
var t = $("#book_credit_card .saved_cc_table_item input[type=radio]"), i = "later" == e;
F(), t.each(function() {
_i_("3bb:7b1e8a02");
var e = $(this).data("pay-method"), t = !1, n = "", a = u[e];
a && ($(this).attr("disabled", !1), $(this).attr("data-tab-permanently-disabled", !1), i && !a.isAcceptedByHotel && a.isChargeable ? (t = !0, n = B.jstmpl.translations("d_bs3_pay_now_extra_options_pay_now_card_type_first", null, {
credit_card:e
})) :i || a.isChargeable || !a.isAcceptedByHotel || (t = !0, n = B.jstmpl.translations("d_bs3_paynow_not_an_option_unable_to_process_name_of_card", null, {
credit_card:e
})), t && ($(this).attr("disabled", !0), $(this).attr("data-tab-permanently-disabled", !0), R(e, n), $(this).attr("checked") && $(this).attr("checked", !1))), _r_();
}), _r_();
}
function U() {
_i_("3bb:dac66080"), o.on("click", function() {
_i_("3bb:31fdc873");
var e = $(this), t = e.data("pay-option");
i.trigger("pay:timing:changed", t ? t :"later"), t && "now" == t ? (A(), I(!1), O(!1)) :(A(), I(!0), O(!0)), P(t), L(t), n.fe_pay__add_all_cc_types_for_pay_now && V(t), _r_();
}), $("[data-is-chargeable]").each(function() {
_i_("3bb:02d7863e");
var e = $(this), t = e.val();
if (!t) return _r_();
u[t] = {
isChargeable:1 == e.data("is-chargeable"),
isAcceptedByHotel:0 !== e.data("is-accepted-by-hotel")
}, _r_();
}), _r_();
}
r && n.fe_pay__add_all_cc_types_for_pay_now ? (O("pay-now" == r ? !1 :!0), V("pay-now" == r ? "now" :"later")) :r && "pay-now" == r && O(!1), U(), _r_();
}), B.when({
action:"book",
condition:!!$(".payment-method__contents--invisible").length
}).run(function() {
_i_("3bb:fe6fd67a");
var e = $(".payment-method__contents");
e.hide();
var t = $(".payment-method__toggle-item");
t.on("click", function() {
_i_("3bb:0ec0fbcc"), e.show(), _r_();
}), _r_();
}), B.define("component/pay/installments", function(e, t, i) {
_i_("3bb:5a1d2760");
var n, a = e("component"), r = e("jquery"), _ = e("et"), o = e("server-data"), s = "bQdEbWcEIBKAXZAVeBGKMLTRe", l = o.fe_payment_installment_count ? !0 :!1, c = o.fe_payment_installment_count, d = "g-hidden";
i.exports = a.extend({
init:function() {
_i_("3bb:3757c8e6"), this.bindEvents(), _r_();
},
bindEvents:function() {
_i_("3bb:66714f4b");
var e = this, t = this.$el.find('select[name="payment_installment_count"]'), i = r('input[name="payment_timing"]');
if (i && i.length > 0 && i.on("change", function(i) {
_i_("3bb:43439d75");
var a = this.value;
if ("installments" === a ? (l = !0, e.$el.removeClass(d)) :(l = !1, e.$el.addClass(d)), t && t.length > 0 && (r(t).prop("disabled", l ? !1 :!0), l)) {
var _ = t.find("option:selected", e).data();
n = _.installmentsCc, c = _.installmentsCount, e.selectCC();
}
_r_();
}), t && t.length > 0) {
if (l) {
var a = t.find("option:selected", this);
if (a && a.length > 0) {
var o = a.data();
n = o.installmentsCc, this.selectCC();
}
}
t.on("change", function() {
_i_("3bb:fc081a20");
var t = r("option:selected", this).data();
c = this.value, n = t.installmentsCc, e.selectCC(), _.stage(s, 1), 6 > c ? _.stage(s, 2) :c >= 6 && 9 >= c ? _.stage(s, 3) :c > 9 && _.stage(s, 4), _r_();
});
}
var b = r('select[name="cc_type"]');
b && b.length > 0 && b.on("change", function() {
_i_("3bb:a885feb2");
var e = r("option:selected", this).data().abbr;
if (l && e !== n && t && t.length) {
var i = t.find('[data-installments-cc="' + e + '"][data-installments-count="' + c + '"]');
i && i.length > 0 ? (i.prop("selected", !0), t.change(), _.customGoal(s, 2)) :_.customGoal(s, 3);
}
_r_();
});
var p = r(".bp-payments-info__trigger"), u = r(".bp-payments-info__content");
p.length > 0 && u.length > 0 && r(p).on("click", function() {
_i_("3bb:4162c8e8"), u.toggleClass(d), p.toggleClass("bp-payments-info__trigger--rotated"), _r_();
}), _r_();
},
selectCC:function() {
_i_("3bb:00fa03ae");
var e = r('select[name="cc_type"]');
if (e && e.length > 0) {
var t = e.find('[data-abbr="' + n + '"]');
t && t.length > 0 && (t.prop("selected", !0), e.change());
}
_r_();
}
}), _r_();
}), B.define("component/payment/timing", function(e, t, i) {
_i_("3bb:2dd34fe9");
var n = e("component"), a = e("jquery"), r = e("server-data"), _ = e("events"), o = r.fe_is_mobile ? "m_hidden" :"pay-xp--hidden", s = a("#bookStage3Inc"), l = s.find("[data-tab-toggle]"), c = l.filter('[data-tab-toggle-for^="payment_method__content__creditcard"]'), d = l.filter('[data-tab-toggle-for^="payment_method__content__company"]'), b = l.not('[data-tab-toggle-for^="payment_method__content__creditcard"],[data-tab-toggle-for^="payment_method__content__company"]'), p = a('select[id="cc_type"]'), u = p.find('[data-is-chargeable="0"]'), h = p.find('[data-is-chargeable="1"]'), f = p.find('[data-is-accepted-by-hotel="0"]'), m = p.find('[data-is-accepted-by-hotel="1"]'), M = p.find('[data-abbr="visa"],[data-abbr="mastercard"]').filter('[data-abbr!="__null__"]'), g = p.find('[data-abbr!="visa"][data-abbr!="mastercard"]').filter('[data-abbr!="__null__"]');
i.exports = n.extend({
init:function() {
_i_("3bb:d46d4dfe");
var e = r.fe_payment_timing_selected;
e && (this.updateCreditCardTypes(e), this.updateStoredCCs(e), this.toggleVisibleOptions(e)), this.bindEvents(), _r_();
},
toggleVisibleOptions:function(e) {
_i_("3bb:f9c17418"), a('[data-pay-visible-for="' + e + '"]') && a('[data-pay-visible-for="' + e + '"]').length > 0 && a('[data-pay-visible-for="' + e + '"]').removeClass(o);
var t = "now" == e || "installments" == e ? "later" :"now";
a('[data-pay-visible-for="' + t + '"]') && a('[data-pay-visible-for="' + t + '"]').length > 0 && a('[data-pay-visible-for="' + t + '"]').addClass(o), _r_();
},
toggleHPPs:function(e) {
_i_("3bb:1650ea2d");
var t = s.find("#paymentBlock").data("$component"), i = [];
if (b && b.length > 0 && b.each(function() {
_i_("3bb:abbaa64e"), i.push(this.getAttribute("data-tab-toggle-id")), _r_();
}), t && i.length > 0) {
var n = {
id:i,
disabled:e,
showOverlay:e,
hideOverlay:!e
};
t.update("disabled", n);
}
_r_();
},
selectCC:function() {
_i_("3bb:ba9328d8");
var e = d.length > 0 ? d :c;
e.trigger("click"), e.find('input[name="payment_option"]').prop("checked", !0), _r_();
},
updateCreditCardTypes:function(e) {
_i_("3bb:85616405");
var t, i;
if ("installments" == e ? (t = M, i = g) :"now" == e || r.fe_is_exclusive_property && "later" == e ? (t = h, i = u) :(t = m, i = f), t && t.length || i && i.length) {
i.hide(), t.show();
var n = i.filter(":checked,:selected");
n.length && (n.prop("checked", !1), p.val("").change());
}
_r_();
},
updateStoredCCs:function(e) {
_i_("3bb:633cfdfd");
var t = "pay-installments-not-supported";
if ("installments" == e) {
var i = a(r.fe_is_mobile ? ".stored-cc__entry" :'.saved_cc_table_item input[name="cc_card_id"]');
i && i.length && i.each(function() {
_i_("3bb:a558f709");
var e = a(this).find('input[type="hidden"]'), i = r.fe_is_mobile ? a(this).find('input[name="cc_card_id"]') :this, n = r.fe_is_mobile && e && e.length > 0 ? e[0].value :a(this).data().payMethod;
"Visa" !== n && "MasterCard" !== n && (i.disabled = !0, a(i).addClass(t), a(i).attr("data-tab-permanently-disabled", !0), i.checked && (r.fe_is_mobile ? a('input[name="cc_select_new_cc_radio"]').prop("checked", !0).change() :a(".bp-bs3--add-new-cc-button a").click()), r.fe_is_mobile && e && e.length > 0 && (e[0].disabled = !0, a(e[0]).addClass(t), a(this).addClass("stored-cc__entry__details--hidden"))), _r_();
});
} else {
var n = a(r.fe_is_mobile ? ".stored-cc__entry" :".saved_cc_table_item"), _ = n.find(".pay-installments-not-supported");
_ && _.length && _.each(function() {
_i_("3bb:1adca7d6"), this.disabled = !1, a(this).removeClass(t), a(this).attr("data-tab-permanently-disabled", !1), _r_();
});
}
_r_();
},
bindEvents:function() {
_i_("3bb:251dafef");
var e = this, t = a('input[name="payment_timing"]');
t && t.length > 0 && t.on("change", function(t) {
_i_("3bb:80c7066e");
var i = this.value;
_.trigger("pay:timing:changed", i), "now" == i ? e.toggleHPPs(!1) :(e.toggleHPPs(!0), e.selectCC()), e.updateCreditCardTypes(i), e.updateStoredCCs(i), e.toggleVisibleOptions(i), _r_();
}), _r_();
}
}), _r_();
}), B.when({
action:"book",
condition:!!$("[data-switch-label-on-change]").length
}).run(function() {
_i_("3bb:3cec59ce");
var e = B.require("events"), t = $("[data-switch-label-on-change]:first"), i = t.data("switch-label-on-change"), n = t.data("hpp-method-names"), a = t.find("[data-switch-target]"), r = $("[data-hide-on-hpp]"), _ = t.data("label-on-hpp"), o = t.data("label-on-di");
n = n.substring(0, n.length - 1).split(","), e.on("accordion:afterOpen", function(e) {
if (_i_("3bb:4f4677bc"), e && e.length) {
var t = e.find(i).val();
n.indexOf(t) > -1 ? (r.css({
display:"none"
}), a.html(_)) :(r.css({
display:""
}).removeClass("g-hidden"), a.html(o));
}
_r_();
}), _r_();
}), B.when({
condition:B.env && ("book" === B.env.b_action && 3 == B.env.b_stage || "payment" === B.env.b_action)
}).run(function() {
_i_("3bb:d5848dd2");
var e = B.require("ga-tracker"), t = "Payment Method", i = "Select";
function n(n) {
_i_("3bb:a6dce312");
var a = n.data("ga-method-type"), r = n.data("ga-method-value");
a && r && e.trackEvent(t, i, a + " - " + r), _r_();
}
function a(e) {
_i_("3bb:1f786e89");
var t = e.target;
if ("cc_type" === t.name || "payment_option" === t.name || "pay_method" === t.name || "payment_method" === t.name) {
var i = $(t);
if ("INPUT" === t.tagName) i.prop("checked") && n(i); else if ("SELECT" === t.tagName) {
var a = i.find(":selected");
a.length && n(a);
}
}
_r_();
}
var r = $("#paymentAccordion,#paymentBlock");
r.length ? r.on("change", a) :$("[name=cc_type]").on("change", a), _r_();
}), B.define("component/pay/tab", function(e, t, i) {
_i_("3bb:b76a311f");
var n = e("component"), a = e("events"), r = {
TOGGLE_CONTAINER:"[data-tab-toggles]",
SELECTOR_CONTAINER:"[data-tab-selectors]",
CURRENT_TOGGLE:".payment-method__toggle--is-selected",
CURRENT_SELECTOR:".payment-method__selector--is-selected",
DISABLE_IF_SELECTED:"[data-tab-toggle-disable-on]",
DISABLE_IF_NOT_SELECTED:"[data-tab-toggle-disable-off]:not([data-tab-permanently-disabled=true])",
TOGGLE_ITEM:"[data-tab-toggle]",
SELECTOR_ITEM:"[data-tab-selector]",
CONTENT_ITEM:"[data-tab-content]",
TOGGLE_INPUT_ITEM:".payment-method__toggle__input",
CURRENT_CONTENT:".payment-method__content--is-selected",
PAY_NOW_REGULAR:".js-pay-now-regular",
PAY_NOW_COMPANY:".js-pay-now-company"
}, _ = {
TOGGLE_SELECTED:"payment-method__toggle--is-selected",
SELECTOR_SELECTED:"payment-method__selector--is-selected",
TOGGLE_DISABLED:"payment-method__toggle--is-disabled",
TOGGLE_DISABLED_FUNCTIONAL:"payment-method__toggle--is-disabled-only-functional",
TOGGLE_OVERLAY:"payment-method__toggle--show-overlay",
CONTENT_SELECTED:"payment-method__content--is-selected",
CONTENT_DISABLED:"payment-method__content--is-disabled",
HIDE_ME:"hide-me"
};
function o() {
_i_("3bb:b6762d00");
var e, t = document.createElement("fakeelement"), i = {
transition:"transitionend",
OTransition:"oTransitionEnd",
MozTransition:"transitionend",
WebkitTransition:"webkitTransitionEnd"
};
for (e in i) if (void 0 !== t.style[e]) return _r_(i[e]);
_r_();
}
i.exports = n.extend({
bindEvents:function() {
_i_("3bb:399f6a9e"), this.$toggleContainer.on("click", r.TOGGLE_ITEM, this.onToggleClicked.bind(this));
var e = this;
if (this.options.animatedToggle) {
var t = this.$el;
this.$el.on(this.options.transitionEvent, ".payment-method__item", function() {
_i_("3bb:78c2044a");
var i = $(this);
i.find(r.CURRENT_CONTENT).length && (t.removeClass(e.options.animationClass), e.options.calculateHeight && i.css("height", "auto")), _r_();
});
}
_r_();
},
onToggleClicked:function(e) {
_i_("3bb:7d3918d3");
var t = $(e.currentTarget), i = t.data("tab-toggle-for"), n = t.data("tab-toggle-id");
if (a.trigger("pay:tab:beforeSelect", i, e), t.hasClass(_.TOGGLE_DISABLED) || t.hasClass(_.TOGGLE_SELECTED)) return _r_();
if (t.hasClass(_.TOGGLE_DISABLED_FUNCTIONAL)) return _r_(!1);
var o = this.$toggles.filter(r.CURRENT_TOGGLE), s = this.$contents.filter(r.CURRENT_CONTENT);
if (!i) return _r_();
var l = this.$contents.filter("#" + i);
if (0 === l.length) return _r_();
if (this.options.animatedToggle && this.$el.addClass(this.options.animationClass), this.deactivateTab(o, s), this.activateTab(t, l), this.$selectors.length > 0) {
var c = this.$selectors.filter(r.CURRENT_SELECTOR), d = this.$selectors.filter("#payment_method__toggle__" + n);
c.removeClass(_.SELECTOR_SELECTED), d.addClass(_.SELECTOR_SELECTED), d.find(r.TOGGLE_INPUT_ITEM).prop("checked", !0).trigger("change");
}
this.options.centerSelectedToggle && (this.$toggleContainer[0].scrollLeft = t.position().left), this.updateCopy(i), a.trigger("pay:tab:select", i), a.trigger("pay:method:changed", n), _r_();
},
deactivateTab:function(e, t) {
if (_i_("3bb:ccbb280c"), e.removeClass(_.TOGGLE_SELECTED), t.removeClass(_.CONTENT_SELECTED), this.options.calculateHeight) {
var i = t.parent();
i.height(i.height()).height(e.outerHeight());
}
t.find(r.DISABLE_IF_NOT_SELECTED).prop("disabled", !0), t.find(r.DISABLE_IF_SELECTED).prop("disabled", !1), _r_();
},
activateTab:function(e, t) {
_i_("3bb:7a79eeaf"), e.addClass(_.TOGGLE_SELECTED), t.addClass(_.CONTENT_SELECTED), e.find(r.TOGGLE_INPUT_ITEM).prop("checked", !0).trigger("change"), t.find(r.DISABLE_IF_NOT_SELECTED).prop("disabled", !1), t.find(r.DISABLE_IF_SELECTED).prop("disabled", !0), a.trigger("accordion:afterOpen", t), this.options.animatedToggle && t.parent().height(e.outerHeight() + t.outerHeight()), _r_();
},
initializeAnimation:function() {
_i_("3bb:7b664e60");
var e = o();
e ? (this.options.calculateHeight && this.$contents.each(function() {
_i_("3bb:3e5f707d");
var e = $(this).parent();
e.height(e.height()), _r_();
}), this.$el.addClass(this.options.animationClass), this.options.transitionEvent = e) :this.options.animatedToggle = !1, _r_();
},
setupElements:function() {
_i_("3bb:92c9cb4f"), this.$toggleContainer = this.$el.find(r.TOGGLE_CONTAINER), this.$contents = this.$el.find(r.CONTENT_ITEM), this.$toggles = this.$toggleContainer.find(r.TOGGLE_ITEM), this.$selectorContainer = this.$el.find(r.SELECTOR_CONTAINER), this.$selectors = this.$selectorContainer.find(r.SELECTOR_ITEM), this.options = {
centerSelectedToggle:this.$el.attr("data-tab-center-selected-toggle"),
animatedToggle:this.$el.attr("data-tab-animated"),
calculateHeight:this.$el.attr("data-tab-calculate-height"),
animationClass:this.$el.attr("data-tab-animation-classname") || "payment-method--animated"
}, this.options.animatedToggle && this.initializeAnimation(), _r_();
},
updateStatus:function(e, t) {
if (_i_("3bb:6ec60910"), "disabled" === e && t && t.id) {
var i, n;
i = Array.isArray(t.id) ? t.id.map(function(e) {
return _i_("3bb:babc8c60"), _r_('[data-tab-toggle-id="' + e + '"]');
}).join(",") :'[data-tab-toggle-id="' + t.id + '"]', n = this.$toggles.filter(i), t.disabled ? (n.addClass(_.TOGGLE_DISABLED).find("input").prop("disabled", !0), t.showOverlay && n.addClass(_.TOGGLE_OVERLAY)) :(n.removeClass(_.TOGGLE_DISABLED).find("input").prop("disabled", !1), t.hideOverlay && n.removeClass(_.TOGGLE_OVERLAY));
}
_r_();
},
init:function() {
_i_("3bb:de154581"), this.setupElements(), this.bindEvents(), this.updateCopy(), this.$el.data("$component", {
update:this.updateStatus.bind(this)
}), _r_();
},
disableCurrentTab:function() {
_i_("3bb:97545dd9");
var e = this.$contents.filter(r.CURRENT_CONTENT);
e.find(r.DISABLE_IF_NOT_SELECTED).prop("disabled", !0), e.find(r.DISABLE_IF_SELECTED).prop("disabled", !1), _r_();
},
enableCurrentTab:function() {
_i_("3bb:7a42b0d5");
var e = this.$contents.filter(r.CURRENT_CONTENT);
e.find(r.DISABLE_IF_NOT_SELECTED).prop("disabled", !1), e.find(r.DISABLE_IF_SELECTED).prop("disabled", !0), _r_();
},
updateCopy:function(e) {
_i_("3bb:ecc97a04"), "payment_method__content__company" === e || !e && "company" === B.env.fe_payment_method_selected ? ($(r.PAY_NOW_COMPANY).removeClass(_.HIDE_ME), $(r.PAY_NOW_REGULAR).addClass(_.HIDE_ME)) :($(r.PAY_NOW_COMPANY).addClass(_.HIDE_ME), $(r.PAY_NOW_REGULAR).removeClass(_.HIDE_ME)), _r_();
}
}), i.exports.SELECTORS = r, i.exports.CLASSES = _, _r_();
}), B.when({
condition:B.env.fe_run_enable_book_with_phone,
events:"ready",
experiment:"MKMBYcWNOHfKXNDBae"
}).run(function(e) {
_i_("3bb:4e9779ec");
var t = e("jquery"), i = t(".js-phone_error_message"), n = t("#phone"), a = t("#cc1");
function r() {
_i_("3bb:25a17e3a"), t("#phone[readonly]").length && n.trigger("blur"), _r_();
}
r();
function _(e) {
_i_("3bb:004d0a49"), -1 === e ? t(".js-phone_generic_problem").removeClass("g-hidden") :-2 === e ? t(".js-phone_already_confirmed").removeClass("g-hidden") :-3 === e ? t(".js-phone_code_missing").removeClass("g-hidden") :-4 === e ? t(".js-phone_generic_problem").removeClass("g-hidden") :-5 === e ? t(".js-phone_generic_problem").removeClass("g-hidden") :-6 === e && t(".js-phone_code_wrong").removeClass("g-hidden"), _r_();
}
var o = t(".js-confirmation_method_phone"), s = t(".js-confirmation_method_email");
t("#bp_confirmation_method_phone").on("click", function() {
_i_("3bb:1dac8e1d"), s.addClass("g-hidden"), o.removeClass("g-hidden"), r(), _r_();
}), t("#bp_confirmation_method_email").on("click", function() {
_i_("3bb:72cef96a"), o.addClass("g-hidden"), s.removeClass("g-hidden"), _r_();
}), t(".js-send_verification_code_submit--same_page").on("click", function(e) {
if (_i_("3bb:2a92bd11"), e.preventDefault(), t(this).hasClass("b-button_disabled")) return _r_();
booking.phoneNumberLogin.checkSmsVerificationCode({
onBeforeSend:function() {
_i_("3bb:f7e1bdc3"), i.addClass("g-hidden"), _r_();
},
is_signup:!1,
phoneNumber:n.val(),
verificationCode:t(".js-verify_phone_confirmation_code").val(),
error:function(e) {
_i_("3bb:4202c5ff"), B.et.customGoal("MKMBYcWNOHfKXNDBae", 2), _(e), _r_();
},
success:function(e) {
_i_("3bb:29ad8dfd"), e.success ? (B.et.customGoal("MKMBYcWNOHfKXNDBae", 1), a.attr("readonly", "readonly").addClass("disabled bootstrapped-input"), n.attr("readonly", "readonly").addClass("disabled bootstrapped-input"), t(".js-verify_phone_confirmation_code_options").addClass("g-hidden"), t(".js-verify_phone_confirmation_code_success").removeClass("g-hidden"), t(".js-verify_phone_number_success_send").addClass("g-hidden")) :e.error && (B.et.customGoal("MKMBYcWNOHfKXNDBae", 2), _(e)), _r_();
}
}), _r_();
}), _r_();
}), B.define("component/bp/bp3/loader", function(e, t, i) {
_i_("3bb:45499527");
var n = e("component"), a = e("et"), r = B.require("bp/env"), _ = {
autoStart:!1,
step:15,
firstStep:20,
stepWait:100,
maximum:98,
finishDuration:200
};
function o(e) {
_i_("3bb:9a61dbd7"), this.options = $.extend({}, _, e), this.$el = $(".loader_background"), this.$bar = this.$el.children().eq(0), this.$text = $(".text-change"), this._now = 0, this.options.autoStart && this.start(), _r_();
}
o.prototype.start = o.prototype._progress = function(e) {
_i_("3bb:35ec89ef");
var t = this, i = this.options;
if (e && t.setTo(e), t._now >= i.maximum) return _r_();
var n = e ? Math.max(500, 2 * Math.random() * i.stepWait) :0;
t._t = setTimeout(function() {
_i_("3bb:82e1aac3");
var n = e ? i.step :i.firstStep;
n = s(.4 * n, 1.3 * n), t._now > 60 && (n = Math.sqrt(n * (100 - t._now) / 100)), t._progress(t._now + n), _r_();
}, n), _r_();
}, o.prototype.setTo = function(e) {
_i_("3bb:87a05bb9"), this._now = e, this.$bar.css({
width:e + "%"
}), a.track("MKMBNRYFdCLFJYbdDC") || (e > 80 ? (this.$text.eq(0).hide(), this.$text.eq(1).hide(), this.$text.eq(2).show()) :e > 60 ? (this.$text.eq(0).hide(), this.$text.eq(1).show()) :e > 10 && (this.$text.eq(0).show(), this.$text.eq(1).hide(), this.$text.eq(2).hide())), _r_();
}, o.prototype.finish = function(e) {
_i_("3bb:610044ea"), this._t && clearTimeout(this._t), this.$bar.css({
width:"100%",
transitionTimingFunction:"ease-out",
transitionDuration:this.options.finishDuration + "ms"
}), this.$bar.width("100%"), e && setTimeout(e, this.options.finishDuration), _r_();
};
function s(e, t) {
return _i_("3bb:49868156"), _r_(Math.random() * (t - e) + e);
}
function l(e) {
_i_("3bb:b3feddef");
var t = r.get("payment_methods") || [];
return _r_(t.filter(function(t) {
return _i_("3bb:0c86dd6b"), _r_(t.abbr === e);
}));
}
i.exports = n.extend({
init:function() {
_i_("3bb:633b8ec7"), $(".china_bp3_loader").length && (this._progress = new o()), this.$el.on("submit", this._onFormSubmit.bind(this)), _r_();
},
_onFormSubmit:function(e) {
if (_i_("3bb:22ecc0b0"), !$(".bp_form__field--error").length) {
var t = this;
setTimeout(function() {
if (_i_("3bb:d5bec01b"), !$(".modal_mask").length) {
var e;
if ($('[name="payment_method"]').each(function(t, i) {
_i_("3bb:1b37ee8f"), e = i.checked ? i.value :e, _r_();
}), ("cup_hpp" === e || "alipay" === e) && B.et.stage("MKMBNRYFdCLFJYbdDC", 1), "cup_hpp" !== e && "alipay" !== e || !a.track("MKMBNRYFdCLFJYbdDC")) {
var i = $(".redirecting_to_payment_page"), n = $(".confirming_booking");
"cup_hpp" === e || "alipay" === e ? (i.removeClass("g-hidden"), n.addClass("g-hidden")) :(i.addClass("g-hidden"), n.removeClass("g-hidden"));
} else {
var r = $(".js-china_payment_redirect_copy"), _ = l(e)[0].name_trans;
r.html(B.jstmpl.translations("bp_china_oneline_payment_redirecting_copy", null, {
online_payment_method:_
})), r.show();
}
t._progress && (booking.lightbox.show(".china_bp3_loader", {
bCloseButton:!1,
opacity:.8,
customWrapperClassName:"china_bp3_loader--lightbox_wrapper",
customMaskClassName:"china_bp3_loader--lightbox_mask",
hideCallBack:function() {
_i_("3bb:2f09ecc2"), t._progress.setTo(0), _r_();
}
}), t._progress.start());
}
_r_();
}, 300);
}
_r_();
}
}), _r_();
}), B.define("component/pay/payment_tab_content/wechat_pay", function(e, t, i) {
"use strict";
_i_("3bb:7b2774c8");
var n, a, r, _ = e("component"), o = e("jquery"), s = e("component/qrcode/qrcodelib").QRCode, l = e("events"), c = o("#bookForm"), d = o(".bp-overview-buttons-submit"), b = o(".bp_overview_submit"), p = "", u = o(".wptc__already_existed_operation_reference").length ? o(".wptc__already_existed_operation_reference").val() :"", h = 6e5, f = o(".wptc__qrcode_countdown"), m = o(".wptc__qrcode_countdown__counting__remaining_time_min"), M = o(".wptc__qrcode_countdown__counting__remaining_time_sec"), g = o(".wptc__qrcode_countdown__counting"), v = o(".wptc__qrcode_countdown__expired"), y = o(".wptc__qrcode_countdown__expired__refresh_link"), w = 0, C = e("bp/validate").validate, k = e("bp/store"), N = o(".wptc__before_paying__validating"), x = o(".wptc__before_paying__validate_failed"), E = o(".wptc__before_paying__validate_failed__retry"), T = o(".wptc__before_paying"), D = !1, j = o(".wptc__qrcode__success_overlay"), $ = o(".wptc__success_message"), S = {
payer:{
email:B.env.b_wechat_payment_data.b_email,
firstname:B.env.b_wechat_payment_data.b_firstname,
lastname:B.env.b_wechat_payment_data.b_lastname,
product_user_id:B.env.b_wechat_payment_data.b_reg_user_id ? B.env.b_wechat_payment_data.b_reg_user_id :void 0
},
instrument:{
payment_method_name:"wxpay"
},
product:{
product_code:"BMP",
partner_id:B.env.b_hotel_id,
delivery_date:B.env.b_wechat_payment_data.b_checkin_date_ymd,
usage_duration:B.env.b_wechat_payment_data.b_interval,
items_count:1,
sale_policy:"NR",
description:(B.env.b_companyname + "缤客 - " + B.env.b_wechat_payment_data.b_hotel_name).substring(0, 128),
full_price:{
currency:B.env.b_wechat_payment_data.b_total_price_currency,
value_decimal_major_units:B.env.b_wechat_payment_data.b_total_price
}
},
amount:{
currency:B.env.b_wechat_payment_data.b_total_price_currency,
value_decimal_major_units:B.env.b_wechat_payment_data.b_total_price,
product_amount:B.env.b_wechat_payment_data.product_amount,
product_currency:B.env.b_wechat_payment_data.product_currency
},
signature:B.env.b_sid,
book_details:{}
};
i.exports = _.extend({
generateQrCodeImg:function() {
_i_("3bb:6cc728ea");
var e = this;
e.resetQRCodeExpirationCountdown(), e.startQRCodeExpirationCountdown(), S.book_details = o("#bookForm").serializeArray().reduce(function(e, t) {
return _i_("3bb:a688b5f4"), e[t.name] = t.value, _r_(e);
}, {}), o.ajax({
method:"POST",
data:JSON.stringify(S),
url:"payment/wallet/initialize",
success:function(t) {
_i_("3bb:d998ca29"), p = t.operation_reference, new s(o(".wptc__qrcode")[0], {
text:t.remote_action_url,
width:160,
height:160,
colorDark:"#000000",
colorLight:"#ffffff",
correctLevel:s.CorrectLevel.H
}), D = !0, e.startCheckingPaymentStatus(), _r_();
},
error:function() {
_i_("3bb:86a2e389"), D = !1, _r_();
}
}), _r_();
},
checkPaymentStatus:function() {
_i_("3bb:eebe22ca");
var e = this;
if (!p) return _r_();
if (0 >= a) return _r_();
w++, o.ajax({
url:"payment/wallet/check?operation_reference=" + p + "&signature=" + B.env.b_sid + (w % 10 === 0 ? "&extended_check=1" :""),
success:function(t) {
_i_("3bb:7883c4b7"), "PENDING" === t.payment_result || "ERROR" === t.payment_result || "REFUSED" === t.payment_result || "AUTHORISED" === t.payment_result && (e.stopCheckingPaymentStatus(), j.removeClass("g-hidden"), $.removeClass("g-hidden"), f.addClass("g-hidden"), c.prepend('<input type="hidden" name="merchantReference" value="' + t.operation_reference + '"/>'), e.enableSubmitButton(), d.trigger("click")), _r_();
},
error:function() {
_i_("3bb:d2de1660"), e.checkPaymentStatus(), _r_();
},
cache:!1
}), _r_();
},
startCheckingPaymentStatus:function() {
_i_("3bb:e398561b");
var e = this;
r = setInterval(function() {
_i_("3bb:fb3fcfb7"), e.checkPaymentStatus(), _r_();
}, 1500), _r_();
},
stopCheckingPaymentStatus:function() {
_i_("3bb:65e15138"), clearInterval(r), _r_();
},
startQRCodeExpirationCountdown:function() {
_i_("3bb:ee180708");
var e, t, i = "", r = "";
a = h, n = setInterval(function() {
_i_("3bb:b3c4e23c"), a -= 1e3, e = Math.floor(a / 6e4), t = a % 6e4 / 1e3, i = 0 !== e ? B.jstmpl.translations("bp_china_payment_qr_countdown_min", e, {
num_min:e
}) :"", r = 0 !== t ? B.jstmpl.translations("bp_china_payment_qr_countdown_sec", t, {
num_sec:t
}) :"", 0 === e && 0 === t ? (clearInterval(n), g.addClass("g-hidden"), v.removeClass("g-hidden")) :(m.text(i), M.text(r)), _r_();
}, 1e3), _r_();
},
resetQRCodeExpirationCountdown:function() {
_i_("3bb:a14b0910"), clearInterval(n), g.removeClass("g-hidden"), v.addClass("g-hidden"), _r_();
},
validateBookerDetailsForm:function() {
_i_("3bb:4f814f5d");
var e = this, t = c.find(".booker-details [name]").filter('[name="phone"],[name="address1"],[name="cc1"]'), i = [];
t.each(function() {
_i_("3bb:4e00fa10"), i.push({
name:o(this).attr("name"),
value:o(this).val()
}), _r_();
}), e.showValidationMessagesContainer(), e.showValidatingMessage(), e.hideValidationFailureMessage(), C(i).then(function(t) {
_i_("3bb:d9ba850e"), k.dispatch({
type:"UPDATE_VALIDATION_FIELDS",
payload:t.results
}), "true" === t.results.valid || t.results.valid === !0 ? (e.hideValidationMessagesContainer(), D ? e.startCheckingPaymentStatus() :e.generateQrCodeImg()) :(e.hideValidatingMessage(), e.showValidationFailureMessage()), _r_();
}), _r_();
},
showValidatingMessage:function() {
_i_("3bb:26ac0a60"), N.removeClass("g-hidden"), _r_();
},
hideValidatingMessage:function() {
_i_("3bb:1df5bc4d"), N.addClass("g-hidden"), _r_();
},
showValidationFailureMessage:function() {
_i_("3bb:272d2717"), x.removeClass("g-hidden"), _r_();
},
hideValidationFailureMessage:function() {
_i_("3bb:13bd1f39"), x.addClass("g-hidden"), _r_();
},
showValidationMessagesContainer:function() {
_i_("3bb:f029f944"), T.removeClass("g-hidden"), _r_();
},
hideValidationMessagesContainer:function() {
_i_("3bb:e435de9d"), T.addClass("g-hidden"), _r_();
},
disableSubmitButton:function() {
_i_("3bb:7373b14f"), d.attr("disabled", "disabled").addClass("disabled_for_wechat_pay"), b.addClass("g-hidden"), _r_();
},
enableSubmitButton:function() {
_i_("3bb:ba79d89b"), d.removeAttr("disabled").removeClass("disabled_for_wechat_pay"), b.removeClass("g-hidden"), _r_();
},
init:function() {
_i_("3bb:5e42169f");
var e = this;
u && 2 === o('input[name="stage"]') && (p = u, e.startCheckingPaymentStatus()), l.on("pay:tab:select", function(t) {
_i_("3bb:64802f43"), "payment_method__content__wxpay" === t ? (e.disableSubmitButton(), e.validateBookerDetailsForm()) :(e.enableSubmitButton(), e.stopCheckingPaymentStatus()), _r_();
}), E.on("click", function() {
_i_("3bb:1c5d82c4"), e.validateBookerDetailsForm(), _r_();
}), y.on("click", function() {
_i_("3bb:48ca7f3d"), location.reload(), _r_();
}), _r_();
}
}), _r_();
}), B.when({
events:"ready",
action:"book",
condition:$("select#cc_type").length && $('select#cc_type option[value="cup_di"]').length
}).run(function() {
_i_("3bb:a21a7e35");
var e = $("select#cc_type"), t = $('select#cc_type option[value="cup_di"]');
function i() {
_i_("3bb:d2a161f5"), $("input#pay-now:checked").length || $("input#check_box_pay_now:checked").length ? t.removeAttr("disabled") :(t.attr("disabled", "disabled"), e.val("")), _r_();
}
i(), $('input[name="hybrid_pay_now"], input[name="exclusive_pay_now"]').length && $('input[name="hybrid_pay_now"], input[name="exclusive_pay_now"]').on("change", function() {
_i_("3bb:5f5eda0d"), i(), _r_();
}), _r_();
}), B.define("component/china_coupon/bp_reminder", function(e, t, i) {
"use strict";
_i_("3bb:08da8c9e");
var n = e("component"), a = e("events");
i.exports = n.extend({
init:function() {
_i_("3bb:fe0c03de");
var e = this;
e.$amountField = e.$el.find(".ccp__br__text__cashback_amount"), e.addEventListeners(), _r_();
},
addEventListeners:function() {
_i_("3bb:28a6ca5b");
var e = this;
a.on("china_coupon:selected", function(t) {
_i_("3bb:e7fd4e43"), e.$amountField.text(t.cashback_amount), e.$el.removeClass("g-hidden"), _r_();
}), a.on("china_coupon:unselected", function() {
_i_("3bb:5d5f496b"), e.$el.addClass("g-hidden"), _r_();
}), _r_();
}
}), _r_();
}), B.define("component/china_coupon/bp_coupon_selector/selected_indicator", function(e, t, i) {
"use strict";
_i_("3bb:fb0d8d88");
var n = e("component"), a = e("events");
i.exports = n.extend({
init:function() {
_i_("3bb:ad529807");
var e = this;
e.$nonSelectedText = e.$el.find(".ccp__bcs__panel__selected_indicator__text--non-selected"), e.$selectedText = e.$el.find(".ccp__bcs__panel__selected_indicator__text--selected"), e.$selectedTextAmountField = e.$el.find(".ccp__bcs__panel__selected_indicator__text__ticket_name__amount"), e.$hiddenInput = e.$el.find(".ccp__bcs__panel__selected_indicator__hidden_input"), e.isDisabled = e.$el.data("disabled"), e.addEventListeners(), _r_();
},
addEventListeners:function() {
_i_("3bb:7e486155");
var e = this;
e.$el.on("click", function() {
_i_("3bb:d5f5f228"), e.isDisabled || a.trigger("china_coupon:bp_coupon_selector:toggled"), _r_();
}), a.on("china_coupon:selected", function(t) {
_i_("3bb:0df929df"), e.$selectedTextAmountField.text(t.cashback_amount), e.$selectedText.removeClass("g-hidden"), e.$nonSelectedText.addClass("g-hidden"), e.$hiddenInput.val(t.template_name), _r_();
}), a.on("china_coupon:unselected", function() {
_i_("3bb:b027634b"), e.$selectedText.addClass("g-hidden"), e.$nonSelectedText.removeClass("g-hidden"), e.$hiddenInput.val(""), _r_();
}), _r_();
}
}), _r_();
}), B.define("component/china_coupon/bp_coupon_selector/playground", function(e, t, i) {
"use strict";
_i_("3bb:0fbd0057");
var n = e("component"), a = e("jquery"), r = e("events");
i.exports = n.extend({
init:function() {
_i_("3bb:0fd5438a");
var e = this;
e.$tickets = e.$el.find(".ccp__ticket--normal"), e.addEventListeners(), _r_();
},
addEventListeners:function() {
_i_("3bb:78bd0b20");
var e = this;
e.$tickets.on("click", e.onTicketClicked(e)), _r_();
},
onTicketClicked:function(e) {
return _i_("3bb:a326fd34"), _r_(function() {
_i_("3bb:5f3ccd66");
var t = a(this);
t.hasClass("ccp__ticket--selected") || t.hasClass("ccp__ticket--ineligible") ? t.hasClass("ccp__ticket--selected") && (t.removeClass("ccp__ticket--selected"), r.trigger("china_coupon:unselected")) :(e.$tickets.removeClass("ccp__ticket--selected"), t.addClass("ccp__ticket--selected"), r.trigger("china_coupon:selected", {
cashback_amount:t.data("cashback-amount"),
template_name:t.data("template-name")
})), _r_();
});
}
}), _r_();
}), B.define("component/china_coupon/bp_coupon_selector", function(e, t, i) {
"use strict";
_i_("3bb:96725153");
var n = e("component"), a = e("events");
i.exports = n.extend({
init:function() {
_i_("3bb:82901e2d");
var e = this;
e.addEventListeners(), _r_();
},
addEventListeners:function() {
_i_("3bb:d3f87d0f");
var e = this;
a.on("china_coupon:bp_coupon_selector:toggled", function() {
_i_("3bb:8085d737"), e.$el.toggleClass("ccp__bp_coupon_selector--collapsed"), _r_();
}), _r_();
}
}), _r_();
}), B.define("component/china_coupon/cc_opt_in", [ "component", "jquery" ], function(e, t) {
_i_("3bb:4fec5942");
var i = t(".ccp__coi__input"), n = t("#save_card_tick"), a = t("#cc_type");
return _r_(e.extend({
init:function() {
_i_("3bb:3342c9ec");
var e = this;
i.on("click", e.onCcOptInCheckboxClick), n.on("click", e.onSaveCardCheckboxClick), a.on("change", e.onCcTypeChange.bind(e)), _r_();
},
onCcOptInCheckboxClick:function() {
_i_("3bb:2f2a4e07"), i[0].checked && n.prop("checked", !0), _r_();
},
onSaveCardCheckboxClick:function() {
_i_("3bb:153a1736"), n[0].checked || i.prop("checked", !1), _r_();
},
onCcTypeChange:function() {
_i_("3bb:deab4f97");
var e = this, t = e.getSelectedCcTypeAbbr();
"visa" === t || "mastercard" === t || "unionpaycreditcard" === t ? e.enableCcOptInCheckbox() :e.disableCcOptInCheckbox(), _r_();
},
getSelectedCcTypeAbbr:function() {
_i_("3bb:ebcac27a");
var e = t("#cc_type option:selected"), i = e.length ? e.data("abbr") :"";
return _r_(i);
},
disableCcOptInCheckbox:function() {
_i_("3bb:cfbb55f1"), i.prop("disabled", !0).prop("checked", !1), this.$el.addClass("ccp__cc_opt_in--disabled"), _r_();
},
enableCcOptInCheckbox:function() {
_i_("3bb:b81eb394"), i.prop("disabled", !1).prop("checked", !0), n.prop("checked", !0), this.$el.removeClass("ccp__cc_opt_in--disabled"), _r_();
}
}));
}), B.define("component/china_coupon/saved_cc_syncing_with_cc_opt_in", function(e, t, i) {
"use strict";
_i_("3bb:c7abb4bb");
var n = e("component"), a = $(".ccp__coi__input");
i.exports = n.extend({
syncStatus:function() {
_i_("3bb:a25c8347");
var e = $("input[name=cc_card_id]:checked"), t = this;
if (e) {
var i = e.closest("tr");
i.find(".cc_name").hasClass("visa") || i.find(".cc_name").hasClass("mastercard") || i.find(".cc_name").hasClass("unionpaycreditcard") ? t.enableCcOptInCheckbox() :(t.disableCcOptInCheckbox(), a.prop("checked", !1)), a.prop("checked", e.hasClass("is_used_for_raf"));
} else a.prop("disabled", !1).prop("checked", !1);
_r_();
},
disableCcOptInCheckbox:function() {
_i_("3bb:3f25e8e0"), a.prop("disabled", !0), $(".ccp__cc_opt_in").addClass("ccp__cc_opt_in--disabled"), _r_();
},
enableCcOptInCheckbox:function() {
_i_("3bb:87246094"), a.prop("disabled", !1), $(".ccp__cc_opt_in").removeClass("ccp__cc_opt_in--disabled"), _r_();
},
init:function() {
_i_("3bb:6dfee9fc");
var e = this;
e.syncStatus(), $("input[name=cc_card_id]").on("change", this.syncStatus.bind(e)), $(".bp-bs3--add-new-cc-button a").on("click", this.syncStatus.bind(e)), _r_();
}
}), _r_();
}), B.when({
events:"ready"
}).run(function(e) {
_i_("3bb:b21bcbc0");
var t = e("jquery");
t(".rc-policy-open").on("click", function(e) {
_i_("3bb:dcd10b45"), e.preventDefault();
var i = t(this), n = i.parents("div.rt_resort_credits_info--policy");
n.find(".rt_resort_credits_info--policy-details").stop(!0, !0).slideToggle("fast"), _r_();
}), _r_();
}), B.when({
events:"bp:leaving_users_keeper:open"
}).run(function() {
_i_("3bb:205347a5"), B.et.stage("ZOEOADNBZKNFYZRAHNFaYJWcSXYRZOJKHRRKe", 1), _r_();
}), function() {
_i_("3bb:c39fa656");
var e = B.require("jquery");
e(".guests").one("mouseenter", ".room_policies_tooltip_icon", function() {
_i_("3bb:91e89f2e"), B.et.goal("bp_room_conditions_tooltip_viewed"), _r_();
}), _r_();
}(), B.define("component/onview-animate", function(e, t, i) {
_i_("3bb:f8cde9cb");
var n, a = e("component");
n = B.tools && B.tools.dom && "function" == typeof B.tools.dom.watchIfBlockVisibleInViewport ? B.tools.dom.watchIfBlockVisibleInViewport :e("core/utils/onview").run;
function r() {
return _i_("3bb:4ebec180"), _r_(Math.floor(400 * Math.random() + 300) + 500);
}
var _ = a.extend({
init:function() {
_i_("3bb:c733f540");
var e = this, t = e.$el, i = t.attr("data-anim-type") || "", a = t.attr("data-onview-cls") || "", _ = t.attr("data-onview-cls-remove") || "", o = t.attr("data-rollup-time") || 1500, s = t.attr("data-anim-trigger") || "onview";
function l(e) {
_i_("3bb:dea19eef");
var n = e && e.type;
switch (i) {
case "rollover":
setTimeout(function() {
_i_("3bb:6d73cf65"), t.addClass("rollover-anim"), setTimeout(function() {
_i_("3bb:d5db5f5e"), t.removeClass("rollover-anim"), _r_();
}, o), _r_();
}, "string" == typeof n ? 10 :r());
break;

default:
setTimeout(function() {
_i_("3bb:8fef69ed"), _.length && t.removeClass(_), t.addClass(i).addClass(a).trigger("complete.anim"), _r_();
}, Math.floor(250 * Math.random()) + 500);
}
_r_();
}
function c(e) {
switch (_i_("3bb:31b8f2f2"), e) {
case "mouseenter":
if ("rollover" == i) {
var a;
t.on("mouseenter", function() {
_i_("3bb:b40274fb"), clearTimeout(a), a = setTimeout(function() {
_i_("3bb:7b3c01c8"), t.addClass("rollover-anim"), _r_();
}, 100), _r_();
}), t.on("mouseleave", function() {
_i_("3bb:b0534ba0"), clearTimeout(a), a = setTimeout(function() {
_i_("3bb:377e5cdf"), t.removeClass("rollover-anim"), _r_();
}, 100), _r_();
});
} else t.on("mouseenter", l);
break;

case "manual":
t.on("anim.onview", l);
break;

case "click":
t.on("click", l);
break;

case "onview":
default:
n(t, l);
}
_r_();
}
s.trim().split(/\s+/).forEach(function(e) {
_i_("3bb:0278d06e"), c(e.trim()), _r_();
}), _r_();
}
});
i.exports = _, _r_();
}), B.define("component/referral/ribbon-green", function(e, t, i) {
_i_("3bb:205521cf");
var n = e("ga-tracker");
i.exports = e("component").extend({
init:function() {
_i_("3bb:16a217b9"), $(document.documentElement).addClass("raf-ribbon-presents"), this.$el.on("click", function() {
_i_("3bb:7ea72be4"), n.trackEvent(n.referralFriendTracker, "click", "ribbon-green"), _r_();
}.bind(this)), this.$el.on("mouseover", function() {
_i_("3bb:c0d8e3d9"), n.trackEvent(n.referralFriendTracker, "hover", "ribbon-green"), _r_();
}.bind(this)), _r_();
}
}), _r_();
}), B.define("component/referral/raf-widget", function(e, t, i) {
_i_("3bb:5c115a8e");
var n = e("et");
i.exports = e("component").extend({
init:function() {
_i_("3bb:8fcd3465");
var e = $("#raf-widget-text-container"), t = this.$el, i = e.hasClass("expanded");
t.on("click", function() {
_i_("3bb:3adb5a89"), n.customGoal("PGVfIFNPBLFTcDCASGTXT", 1), e.toggleClass("expanded"), _r_();
});
var a = e.data("expandAfter");
a && +a > 0 && !i && window.setTimeout(function() {
_i_("3bb:ec766fba"), e.addClass("expanded"), _r_();
}, +a), _r_();
}
}), _r_();
}), B.define("component/referral/web-virality/ga", function(e, t, i) {
_i_("3bb:e171b98a");
var n = e("component"), a = e("ga-tracker"), r = e("jquery"), _ = e("when/events-view");
"mdot" == B.env.b_site_type && B.events && B.eventNames && B.eventNames.TABNAV_MENU_LOADED && B.events.one(B.eventNames.TABNAV_MENU_LOADED, function() {
_i_("3bb:6da57a85"), r("#raf-nav-entrypoint").loadComponents(), _r_();
}), i.exports = n.extend({
init:function() {
_i_("3bb:8343dc70");
var e = this.$el;
switch (e.data("wv-ga-type")) {
case "pageview":
if (!B.env.fe_raf_ga_details) return _r_();
switch (B.env.b_action) {
case "index":
a.trackEvent(a.webViralityTracker, "raf-index-page-entered|" + B.env.fe_raf_ga_details);
break;

case "searchresults":
a.trackEvent(a.webViralityTracker, "raf-sr-page-entered|" + B.env.fe_raf_ga_details);
break;

case "hotel":
a.trackEvent(a.webViralityTracker, "raf-hp-page-entered|" + B.env.fe_raf_ga_details);
break;

case "book":
2 == B.env.b_stage ? a.trackEvent(a.webViralityTracker, "raf-bs2-entered|" + B.env.fe_raf_ga_details) :3 == B.env.b_stage && a.trackEvent(a.webViralityTracker, "raf-bs3-entered|" + B.env.fe_raf_ga_details);
break;

case "confirmation":
a.trackEvent(a.webViralityTracker, "raf-confirmation-page-entered|" + B.env.fe_raf_ga_details);
}
break;

case "viewandclick":
e.on("click", function() {
_i_("3bb:8fcf22e7"), a.trackEvent(a.webViralityTracker, "entry-point-button-click", e.data("wv-ga-placement")), _r_();
}), _(e, function() {
_i_("3bb:40ca6424"), a.trackEvent(a.webViralityTracker, "entry-point-button-show", e.data("wv-ga-placement")), _r_();
});
break;

case "myreferrals-pageview":
a.trackEvent(a.webViralityTracker, "raf-dashbard-show|" + e.data("wv-ga-action"));
break;

case "click":
e.on("click", function() {
_i_("3bb:9127e7ae"), a.trackEvent(a.webViralityTracker, e.data("wv-ga-action")), _r_();
});
break;

case "share":
e.on("click", function() {
_i_("3bb:b56f13a9"), a.trackEvent(a.webViralityTracker, e.data("wv-ga-action"), e.data("wv-ga-placement")), _r_();
});
}
_r_();
}
}), _r_();
}), B.define("component/coupon-field", function(e, t, i) {
_i_("3bb:58f657a9");
var n = e("component"), a = "coupon--collapsed", r = "coupon--invalid", _ = B.jstmpl.translations("growth_marketing_fake_promo_code_error");
i.exports = n.extend({
init:function() {
_i_("3bb:bdc3c101"), this.titleElement = this.$el.find(".expandable_title"), this.contentElement = this.$el.find(".expandable_content"), this.submitButton = this.$el.find("[data-coupon-submit]"), this.labelElement = this.$el.find(".coupon_label"), this.inputElement = this.$el.find(".coupon_input"), this.expHash = this.$el.data("exp-hash"), this.titleElement.click(this.onTitleClick.bind(this)), this.inputElement.one("focus", this.onInputFocus.bind(this)), this.submitButton.click(this.onSubmit.bind(this)), B.et.customGoal(this.expHash, 4), _r_();
},
onTitleClick:function() {
_i_("3bb:2819fa75"), this.$el.toggleClass(a), B.et.customGoal(this.expHash, 1), _r_();
},
onInputFocus:function() {
_i_("3bb:489c1cb1"), B.et.customGoal(this.expHash, 2), _r_();
},
onSubmit:function() {
_i_("3bb:b5cc4bbc"), this.contentElement.removeClass(r), setTimeout(this.onValidate.bind(this), 20), B.et.customGoal(this.expHash, 3), _r_();
},
onValidate:function() {
_i_("3bb:697f734e"), this.contentElement.addClass(r), this.labelElement.text(_), _r_();
}
}), _r_();
}), B.define("component/destination-os/uber-optin", function(e, t, i) {
"use strict";
_i_("3bb:531accb6");
var n = "transport_uber_banner--opted-in", a = "t_uber_opted";
return _r_(e("component").extend({
init:function() {
if (_i_("3bb:ac74a3c4"), !$ || !$.cookie) return _r_();
var e = this.$el, t = e.data("hash");
if (e.data("clear")) return $.cookie(a, "1", {
expires:-1,
path:"/",
domain:B.env.b_domain_end
}), _r_();
e.on("change", "[data-optin]", function(i) {
_i_("3bb:c20e67f3"), e.toggleClass(n), i.target.checked ? $.cookie(a, "1", {
path:"/",
domain:B.env.b_domain_end
}) :($.cookie(a, "1", {
expires:-1,
path:"/",
domain:B.env.b_domain_end
}), t && B.et.customGoal(t, 5)), _r_();
}), "1" == $.cookie(a) && (e.addClass(n), e.find("[data-optin]").prop("checked", !0)), _r_();
}
}));
}), B.require([ "jquery", "et" ], function(e, t) {
_i_("3bb:b294df9a"), e("#bookconditions").on("click", function() {
_i_("3bb:5f06f251"), t.customGoal("ZOISdGHBXReEIQDdHXSHFdBaFGKQYT", 1), _r_();
}), _r_();
}), B.define("component/pay/cc-detection", function(e, t, i) {
_i_("3bb:e8b50551");
var n = {
hidden:"pay--hidden",
persistent:"pay--persistent",
notAccepted:"pay-cc-detection__not-accepted"
}, a = {
cardDropdown:"#cc_type",
ccInputWrapper:".js__pay-cc-detection__wrapper",
ccDetectRadio:'input[type="radio"]',
ccDetectContainer:".js__pay-cc-detection__content",
ccDetectTrigger:".js__pay-cc-detection--trigger",
ccDetectInvalid:"js__pay-cc-detection--invalid"
}, r = B.require("component");
i.exports = r.extend({
responseHandler:function(e, t) {
_i_("3bb:341bcc99"), 1 === e.is_valid ? this.setAll(e.type_name) :this.resetAll(), _r_();
},
invalidInputHandler:function() {
_i_("3bb:ba34fdec"), this.resetAll(), _r_();
},
setAll:function(e) {
return _i_("3bb:4e211478"), this.isCCAccepted(e) ? this.setWrapperClass(e).updateSelectValue(e) :this.resetWrapperClass().updateSelectValue().showCCNotAccepted(), _r_(this);
},
resetAll:function() {
return _i_("3bb:8625021e"), this.resetWrapperClass().updateSelectValue(), _r_(this);
},
setWrapperClass:function(e) {
return _i_("3bb:406a0e63"), e && this.$ccInputWrapper.attr("data-card-name", e), this.$ccDetectContainer.hasClass(n.persistent) && this.$ccDetectContainer.removeClass(n.persistent), _r_(this);
},
resetWrapperClass:function() {
return _i_("3bb:e0d54515"), this.$ccInputWrapper.attr("data-card-name", ""), _r_(this);
},
toggleRadioList:function(e) {
return _i_("3bb:4f64b6ba"), this.$ccDetectContainer.toggleClass(n.hidden, e), _r_(this);
},
onRadioChange:function(e) {
return _i_("3bb:1465dccb"), this.toggleRadioList(!0).updateSelectValue(e, !0).setWrapperClass(e), this.$ccDetectContainer.hasClass(n.persistent) && this.$ccDetectContainer.removeClass(n.persistent), _r_(this);
},
getElemByDataName:function(e, t) {
return _i_("3bb:aedd131a"), _r_(e.filter('[data-card-name="' + t + '"]'));
},
updateSelectValue:function(e, t) {
_i_("3bb:03e6f656");
var i = this.getElemByDataName(this.$cardDropdownOptions, e), n = i.length && i.val(), a = this.$cardDropdown.find("option:first");
return n ? (this.$cardDropdown.val(n).change(), this.cctypeField.makeValid(), this.cctypeField.makeNeutral(), t || this.$ccRadios.filter('[data-card-name="' + e + '"]').prop("checked", !0)) :(this.$cardDropdown.val(a.val()).change(), this.$ccRadios.filter(":checked").prop("checked", !1)), _r_(this);
},
showCCNotAccepted:function() {
return _i_("3bb:6e3de877"), this.ccNumberField.makeInvalid(B.jstmpl.translations("pay_bs3_predicted_cc_type_dont_accept_no_alternative")), _r_(this);
},
isCCAccepted:function(e) {
return _i_("3bb:f76de35e"), _r_(!!this.getElemByDataName(this.$cardDropdownOptions, e).length);
},
bindEvents:function() {
_i_("3bb:1a869168");
var e = this;
e.$ccDetectTrigger.on("click", function(t) {
_i_("3bb:f8f2d078"), t.preventDefault(), t.stopPropagation(), e.trigger("cc-detection:ccRadioList:open"), e.toggleRadioList.call(e, !1), _r_();
}), e.$document.on("click", function(t) {
_i_("3bb:574586ec"), e.toggleRadioList.call(e, !0), _r_();
}), e.$ccRadios.on("click", function(t) {
_i_("3bb:56a26164"), t.stopPropagation(), e.onRadioChange.call(e, $(this).data("card-name")), _r_();
}), e.$ccInputWrapper.on("focus", "input#cc_number", function() {
_i_("3bb:0ae327a2"), e.$ccInputWrapper.addClass("focus"), _r_();
}).on("blur", "input#cc_number", function() {
_i_("3bb:5c71be7d"), e.$ccInputWrapper.removeClass("focus"), _r_();
}), $(this.bpModel).bind(this.bpValidationEvent, function(t) {
_i_("3bb:817c20be"), t && t.fullValidationData && "cc_number" === t.fieldName && e.responseController.call(e, t.fullValidationData), _r_();
}), _r_();
},
responseController:function(e) {
_i_("3bb:2698747b");
var t = {
is_valid:"true" === e.valid ? 1 :0,
type_name:e.type
};
this.trigger("cc-detection:request:complete"), t.is_valid ? (this.responseHandler(t), this.trigger("cc-detection:response:valid")) :(this.invalidInputHandler(), this.trigger("cc-detection:response:invalid")), _r_();
},
setAPIOptions:function() {
_i_("3bb:3e6b81ee"), B.require("event-emitter").extend(this), this.$document = $(document), this.$cardDropdown = $(a.cardDropdown), this.$cardDropdownOptions = this.$cardDropdown.find("option"), this.$ccDetectTrigger = $(a.ccDetectTrigger), this.$ccDetectContainer = $(a.ccDetectContainer), this.$ccInputWrapper = $(a.ccInputWrapper), this.$ccRadios = this.$ccInputWrapper.find(a.ccDetectRadio), this.bpModel = B.bp.Main.getModel(), this.ccNumberField = this.bpModel.fieldViews_.cc_number, this.cctypeField = this.bpModel.fieldViews_.cc_type, this.bpValidationEvent = B.bp.AbstractModel.EventType.FIELD_VALIDATION, this.bindEvents(), _r_();
},
init:function() {
_i_("3bb:58bf22e2"), this.setAPIOptions(), _r_();
}
}), _r_();
}), B.define("component/tooltip-loc", function(e, t, i) {
"use strict";
_i_("3bb:970ba861");
var n = e("component"), a = e("jquery");
i.exports = n.extend({
DEFAULTS:{
template:'<div class="component-tooltip off" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
placement:"top",
alignment:"center",
trigger:"hover focus",
animation:"true"
},
init:function() {
_i_("3bb:610aec21"), this._buildOptions(), this._createTooltip(), this._attachEvents(), this.$el.trigger("ready.B.tooltip", [ this.$tip ]), _r_();
},
_buildOptions:function() {
_i_("3bb:9ddbfae8"), this.options = a.extend({}, this.DEFAULTS, this.$el.data()), this.options.intangible = "intangible" in this.options, this.options.target && (this.options.target = a(this.options.target).first()), this.options.content || (this.options.content = this.options.title || this.el.title), _r_();
},
_createTooltip:function() {
_i_("3bb:41ae04fe");
var e = "tooltip-" + this.options.placement + " tooltip-align-" + this.options.alignment;
this.options.extraClass && (e = e + " " + this.options.extraClass), "true" === this.options.animation && (e += " tooltip-animate"), this.$tip = a(this.options.template), this.$tip.addClass(e), this._attachContent(), this.$tip.appendTo(a("body")), this.$el.trigger("inserted.B.tooltip", [ this.$tip ]), _r_();
},
_attachContent:function() {
_i_("3bb:48323c54");
var e = this.$tip.find(".tooltip-inner");
this.options.target ? e.append(this.options.target.clone()) :(this.options.target = [], e.text(this.options.content)), _r_();
},
_positionTooltip:function() {
_i_("3bb:7d3c37e5"), this._defineAlignmentVars(), this._placeTooltip(), this._alignTooltip(), this.$tip.css({
left:this.left,
top:this.top
}), _r_();
},
_defineAlignmentVars:function() {
_i_("3bb:79a44411"), this.elOffset = this.$el.offset(), this.position = "left", this.dimension = "outerWidth", this.options.placement.match(/top|bottom/) && (this.position = "top", this.dimension = "outerHeight"), _r_();
},
_accountForRTL:function(e) {
if (_i_("3bb:815c5c97"), !B.env.rtl) return _r_(e);
if ("left" === e) return _r_("right");
if ("right" === e) return _r_("left");
return _r_(e);
},
_placeTooltip:function() {
_i_("3bb:ab5a83db");
var e = this._accountForRTL(this.position), t = this.dimension;
this._accountForRTL(this.options.placement) === e ? this[e] = this.elOffset[e] - this.$tip[t]() :this[e] = this.elOffset[e] + this.$el[t](), _r_();
},
_alignTooltip:function() {
_i_("3bb:e5dfbb2b");
var e, t;
switch ("left" === this.position ? (e = "top", t = "outerHeight") :(e = "left", t = "outerWidth"), this._accountForRTL(this.options.alignment)) {
case e:
this[e] = this.elOffset[e];
break;

case "center":
this[e] = this.$el[t]() / 2 + this.elOffset[e] - this.$tip[t]() / 2;
break;

default:
this[e] = this.elOffset[e] + this.$el[t]() - this.$tip[t]();
}
_r_();
},
_attachEvents:function() {
if (_i_("3bb:c4be165f"), this.options.trigger.match(/manual/)) return _r_();
var e, t, i, n = this.options.trigger.split(" "), r = n.length, _ = this.$el.add(this.$tip);
for (this.options.intangible && (_ = this.$el), r; r--; ) e = n[r], "click" === e ? this.$el.on("click", a.proxy(this.toggle, this)) :(t = "hover" == e ? "mouseenter" :"focusin", i = "hover" == e ? "mouseleave" :"focusout", _.on(t, a.proxy(this.show, this)), _.on(i, a.proxy(this.hide, this)));
_r_();
},
_trackTransitionEnd:function(e) {
_i_("3bb:1ec652bb");
var t = this.$el;
this.$tip.one("transitionend", function(i) {
_i_("3bb:124e5a85"), t.trigger(e, [ this ]), _r_();
}), _r_();
},
show:function() {
_i_("3bb:be0b1075"), this.$el.trigger("show.B.tooltip", [ this.$tip ]), this._trackTransitionEnd("shown.B.tooltip"), this.$el.attr("aria-describedby", this.el.id), this._positionTooltip(), this.$tip.addClass("on").removeClass("off"), _r_();
},
hide:function() {
_i_("3bb:3e97dd72"), this.$el.trigger("hide.B.tooltip", [ this.$tip ]), this._trackTransitionEnd("hidden.B.tooltip"), this.$el.removeAttr("aria-describedby"), this.$tip.removeClass("on").addClass("off"), _r_();
},
toggle:function() {
_i_("3bb:e75904c1"), this.$tip.is(".on") ? this.hide() :this.show(), _r_();
}
}), _r_();
}), B.when({
events:"ready",
action:[ "book" ],
condition:B.env.b_user_auth_level == B.env.auth_level_high && 2 == B.env.b_stage
}).run(function(e) {
_i_("3bb:76eb1b2b");
var t, i, n = B.require("jquery"), a = B.require("async-loader"), r = n(".js-overlapping-bookings"), _ = r.data("reservationsurl"), o = B.env.b_user_auth_level_is_high || B.env.b_user_auth_level > B.env.b_auth_level_low || parseInt(B.env.auth_level, 10) >= 2, s = B.env.b_reg_user_id, l = B.env.b_action, c = B.env.b_stage, d = {
lang:B.env.b_lang,
fe_action:l
};
if (!r.length) return _r_(!1);
v();
function b() {}
function p() {
_i_("3bb:a546a7eb");
var e = r.find(".js-reservations-button");
e.on("click", function(e) {
_i_("3bb:7bb1a527"), e.preventDefault();
var t = r.hasClass("overlapping-is-active");
t ? r.removeClass("overlapping-is-active") :r.addClass("overlapping-is-active"), _r_();
}), _r_();
}
function u() {
_i_("3bb:e5682fb0"), a && 2 == c && s && o && 1 == i.all_free_cancellation_and_no_prepayment_only ? a.load({
js:"async_pob_bs2_cancel_with_slidebox_js",
css:"async_pob_bs2_cancel_with_slidebox_css"
}).then(e, t) :M();
function e() {
_i_("3bb:857df9b0"), d.all_free_cancellations_and_no_prepayment_only = i.all_free_cancellation_and_no_prepayment_only || "", d.fe_user_auth_level_is_high = o || "", d.fe_feature_running_MYBOOKING_AJAX_FAILURE_FEEDBACK = B.env.fe_feature_running_MYBOOKING_AJAX_FAILURE_FEEDBACK || "", d.fe_stage = c, d.fe_track_stage_on_view = "", M(), _r_();
}
function t() {}
_r_();
}
function h(e) {
if (_i_("3bb:4474dc80"), !e) return _r_(!1);
if (t = e.data || e, i = e.info || "", !t.length) return _r_(!1);
var n = "pob_email_reminder_body", a = {
num_overlapping_bookings:t.length,
short_date_start:r.data("checkinshort"),
short_date_end:r.data("checkoutshort"),
start_bold:"<strong>",
end_bold:"</strong>"
};
a.start_cancel_link = '<a class="js-reservations-link" target="_blank" href="' + _ + '">', a.end_cancel_link = "</a>", B.et.track("AEeNTffEebFTWcVTTDRAQZbXNUBO") ? (d.fe_title = B.jstmpl.translations(n, t.length, a), d.fe_subtitle = i.group_total_price_pretty ? "<strong>" + B.jstmpl.translations("pob_mb_cost_youll_pay_if_no_cancel") + " " + i.group_total_price_pretty + "</strong>" :"") :d.fe_subtitle = B.jstmpl.translations(n, t.length, a), d.bookings = t, d.fe_pob_show_banner_cta_url = _, f(), u(), _r_();
}
function f() {
_i_("3bb:c7c88f2a"), d.fe_cta_copy = B.jstmpl.translations("cx_double_booked_message_cancel"), d.fe_pob_class__cta = "c-button c-button--warning", d.fe_pob_show_banner = !0, d.fe_pob_show_table = !0, d.fe_pob_class__container = "overlapping-bookings--bp", d.fe_pob_show_banner_cta = !0, d.fe_pob_show_banner_cta_icon = !0, _r_();
}
function m() {
return _i_("3bb:0f4a9ab7"), d.fe_on_view_track = "", _r_(B.jstmpl("overlapping_bookings_banner_table").render(d));
}
function M() {
_i_("3bb:6fdab562");
var e = m();
r.append(e), B.et.initAttributesTracking(r), 2 == c && s && o && 1 == i.all_free_cancellation_and_no_prepayment_only && B.require("mybooking/no-lightbox").init(), p(), b(), _r_();
}
function g(e) {}
function v() {
_i_("3bb:7af7fcb3");
var e = {
checkin:r.data("checkin"),
checkout:r.data("checkout"),
cancel_summary:!0,
hotel_details:!0,
hotel_ufi:"ufi",
need_location_score:!0
};
B.require("fragment").call("mybooking.open_bookings_full", e).then(h, g), _r_();
}
_r_();
}), booking.jstmpl("overlapping_bookings_banner_table", function() {
_i_("3bb:189f142d");
var e, t = [ "\n\n  ", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "\n  ", "\n", "\n\n", "\n    ", "\n      ", "\n        ", "\n          ", "\n\n\n  ", '\n\n\n  <div\n    class="\n      ', "\n\n      ", "--rtl\n      ", "--ltr\n      ", '\n\n    "\n    data-et-view="', '"\n    >\n\n  \n  \n  \n\n  ', '\n    <p class="', "__title ", '">\n          ', "\n    </p>\n    ", "\n\n\n  \n  \n  \n\n\n  ", '\n    <table class="', "__table ", '" ', 'data-et-view="', ">\n        <tbody>\n          ", '\n\n              <tr class="', "__row ", '">\n\n                \n                \n                \n\n                <td class="', "__cell ", " ", "book_and_cancel", '">\n\n                    ', '\n                      <div class="', '__checklist">\n                        <label class="', '__checklist-label">\n                          <input class="', "__checkbox ", '" type="checkbox" name="pob_to_cancel" value="', "disabled", " >\n                          ", "\n                            ", "\n                        ", '\n                           <div class="', "__checklist-body ", '">\n                        ', '\n\n                          <a\n                            class="', "__property ", ' js-property-link"\n                            href="', '"\n                            target="', '">\n                            ', "\n                              ", "\n                          </a>\n\n                          ", "\n                                ", '\n                                  <p class="comparison-property__text--smaller--flush free-cxl">', "/private/pob_refundable_generic/name", "</p>\n                                ", "/private/pob_refundable_simple_ja/name", "/private/pob_refundable_simple/name", "\n                          ", "\n\n                          ", '\n                            <p class="overlapping-bookings__book-cancel-price">', "</p>\n                          ", "\n                          </div>\n                        ", "\n                      ", "\n                        </label>\n                    ", "\n\n                      ", "\n\n                    ", "\n                      </div>\n                    ", "\n\n                </td>\n\n                \n                \n                \n\n                ", '\n                  <td class="', '">\n                    <small class="', "__label ", '">', "/private/price/name", '</small>\n                    <strong class="', "__price ", "</strong>\n                  </td>\n                ", "\n\n                \n                \n                \n\n\n                ", "\n                    ", '\n                      <td class="', '">\n                          <a class="', "__cta ", " js-cta-link js-bs2-cancel-slidebox ", "mb-btn mb-cancel custom_track hasSlideBox", '"\n                              ', '\n                                  data-slidebox-preopen-callback="cancelOpenCallback"\n                                  data-slidebox-load="', '"\n                                  data-slidebox-submit-callback="cancelButtonSubmitCallback"\n                                  data-trackname="Cancel booking, ', '"\n                                  data-slidebox-target="#slidebox-cancel-pob"\n                                  data-slidebox-ajax-failure-feedback="', "true", '\n                                 href="', '"\n                                 target="', "\n                            >", "\n                            </a>\n\n                      </td>\n                    ", "\n                ", "\n\n\n              </tr>\n              ", '<tr class="booking-spacer"></tr>', "\n\n          ", "\n        </tbody>\n\n      </table>\n    \n    ", '\n    \n    <div class="slidebox slidebox--cancel-booking" id="slidebox-cancel-pob">\n        <div class="slidebox__inner  js-slidebox__inner  myBookingOptionsPanel">\n            ', "100px", "80%", "32px", "ajax-loader-64.gif", '\n\n\n\n<div\n    class="preloader-with-text ', '"\n    style="min-height: ', ';"\n>\n    <div class="preloader-with-text__container">\n        <div class="preloader-with-text__table" style="width: ', ';">\n            <div class="preloader-with-text__cell">\n\n                <div class="preloader-with-text__spinner">\n                    <img\n                        src="', '"\n                        style="width: ', ';"\n                        alt=""\n                    />\n                </div>\n\n                <div class="preloader-with-text__text">\n                    ', "/private/loading/name", "...\n                    ", "\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n", "\n        </div>\n    </div> <!-- /slidebox--cancel-booking -->\n    ", "\n\n    \n\n    ", "", "&nbsp;<i class='bicon bicon-downchevron'></i>", "\n\n     ", "\n\n\n\n", "b-button", "Button Text should be overriden", "button", "\n\n\n", "c-button", "\n	", "0", "\n		", " b-button_primary", " b-button_secondary", " b-button_warning", " b-button_disabled", " b-button_primary b-button_small", " b-button_secondary b-button_small", " b-button_warning b-button_small", " b-button_primary b-button_flat", "\n\n	", "1", 'id="', '"', 'href="', 'data-title="', 'type="', 'rel="', "data-", '="', " data-", 'target="', 'hotelUrl="', 'data-hotelid="', "\n\n\n<", '\n	class="', '"\n	', "\n\n    ", '\n        data-track-event="', '"\n    ', '\n		value="', '"/>\n	', '\n	>\n		<span class="b-button__text">', "</span>\n		", '\n				<span class="b-button__from-text" ', 'style="display:inline-block"', ">", "\n\n		", '\n				<span class="b-button__from-text book_now_rt_summary g-hidden"></span>\n\n				', '\n                    <span class="b-button__from-text taxes_and_charges_near_price_btn_text"></span>\n				', "\n\n		</", ">\n	", "js-reservations-button", "a", "_blank", "primary", "\n\n    \n\n     ", "\n\n        ", "__container\n          ", "\n          fe_banner__unify\n          fe_banner__inherit_font_size\n        ", "\n\n\n    \n\n    ", '\n\n      <div data-et-view="', ':1"></div>\n      ', "\n\n\n\n\n\n", '<div data-component="onview-animate" data-anim-type="fadeInBottom"> ', '<div class="fe_banner ', "fe_banner__scale_small ", "fe_banner__w-icon ", "fe_banner__w-dismiss ", "fe_banner__", "fe_banner__w-icon-", "fe_banner__bp fe_banner__inherit_font_size ", ' " ', 'role="alert"', "> ", '<i class="fe_banner__icon ', '" aria-hidden="true"></i> ', '<img class="fe_banner__icon" src="', '"> ', '<span class="fe_banner__icon"> ', " </span> ", '<div class="fe_banner__btn_container"> <div class="fe_banner__btn_container_content"> ', '<h3 class="fe_banner__title"> ', " </h3> ", '<div class="fe_banner__message ', "fe_banner__genius-trial", " </div> ", '</div> <div class="fe_banner__button"> ', "</div> ", '<span class="fe_banner__dismiss js-close"><i class="bicon-btnclose" aria-label="close"></i></span> ', '<form action="', "/genius_activate_trial", '" class="fe_banner__genius-banner-form" method="post"> <input type="hidden" name="return_url" value="', '"> <input type="hidden" name="src" value="hp_banner"> <input type="hidden" name="campaign_id" value="', '"> <input type="submit" class="button fe_banner__genius-banner-button" value="', '"> </form> ', "green", "fe_banner__unify fe_banner__inherit_font_size fe_banner__including_total", "bicon-suitcase", "fe_banner__unify fe_banner__inherit_font_size", '\n        <div class="js-overlapping-bookings-table ', '__table"></div>\n      ', "\n\n        \n        ", "\n\n\n  \n  \n  \n\n  ", '\n\n    <div class="', "__container ", '">\n\n      \n\n      ', '\n        <div class="', "__subtitle ", "\n        </div>\n      ", "\n\n      \n\n      ", "\n\n    </div>\n\n  ", "\n\n  </div>\n\n", "bs2-compare-table" ], i = [ "fe_base_css_class", "fe_title", "fe_singular_title", "active_perfectly_overlapped_bookings", "fe_plural_title", "fe_pob_show_banner", "fe_pob_cta_target", "fe_pob_property_target", "fe_pob_show_price", "fe_scoped_css_class", "b_lang_is_rtl", "fe_on_view_track", "fe_pob_class__title", "fe_pob_table", "fe_pob_class__table", "fe_track_stage_on_view", "fe_pob_class__row", "fe_pob_class__cell", "fe_book_and_cancel", "fe_pob_class__checkbox", "hres_id", "fe_pob_disabled__checkbox", "fe_pob_class__checklist_body", "fe_pob_selectable", "fe_pob_class__property", "mybooking_url", "hname", "fe_pob_property_icon", "free_cancellation_deadline_until", "lang", "free_cancellation_deadline", "cancellation_type", "fe_pob_show_policies", "total_price_pretty", "fe_show_price", "fe_show_property_block_inside_label", "fe_pob_class__label", "fe_pob_class__price", "fe_pob_class__cta", "fe_stage", "fe_user_auth_level_is_high", "all_free_cancellations_and_no_prepayment_only", "cancel_summary_url", "fe_feature_running_MYBOOKING_AJAX_FAILURE_FEEDBACK", "fe_cta_copy", "fe_individual_links_are_not_clickable", "fe_show_booking_price", "fe_preloader_with_text__min_height_default", "fe_preloader_with_text__min_height", "fe_preloader_with_text__width_default", "fe_preloader_with_text__width", "fe_preloader_with_text__spinner_size_default", "fe_preloader_with_text__spinner_size", "fe_preloader_with_text__spinner_default", "fe_preloader_with_text__spinner", "fe_preloader_with_text__class", "fe_preloader_with_text__text", "loading", "fe_pob_show_table", "pb_ss_dashboard_view_booking_cta", "gta_splash_view_booking_cta", "b_text", "fe_pob_show_banner_cta_icon", "fe_banner__btn_include", "b_btn_class", "b_btn_id", "b_btn_text", "b_btn_outside_text", "b_btn_caption_text", "b_btn_tag", "b_btn_attr_type", "b_btn_attr", "b_btn_href", "b_btn_extra_classes", "b_btn_title", "b_btn_rel", "b_btn_target", "b_btn_data", "fe_cbtn_comp_class", "fe_cbtn_class", "fe_cbtn_type", "fe_cbtn_size", "fe_cbtn_disabled", "fe_cbtn_icon_only", "fe_cbtn_icon_left", "fe_cbtn_icon_right", "fe_cbtn_track_exp", "fe_cbtn_track_event", "fe_btn_track_event", "fe_cbtn_track_goal", "fe_cbtn_track_stage", "fe_cbtn_is_anchor", "fe_cbtn_is_input", "fe_cbtn_is_button", "fe_cbtn_no_style", "b_btn_hotel_url", "b_btn_data_hotelid", "b_outside_text", "b_caption_text", "b_type", "b_tag", "fe_btn_is_anchor", "fe_btn_is_input", "fe_btn_is_button", "b_id", "b_href", "fe_btn_no_style", "b_extra_classes", "b_title", "b_attr_type", "b_attr", "b_rel", "b_data_id", "b_data_value", "b_data_id_2", "b_data_value_2", "b_data_id_3", "b_data_value_3", "b_data_id_4", "b_data_value_4", "b_data_id_5", "b_data_value_5", "b_target", "b_bb_is_sabrered_app", "b_hotel_url", "b_data_hotelid", "b_from_price_inlined", "b_guest_country", "b_add_rt_summary", "fe_pob_show_banner_cta_url", "fe_pob_show_banner_cta", "fe_pob_table__extra_classes", "fe_pob_class__container", "fe_pob_banner", "fe_banner__data", "fe_banner__data_id", "fe_banner__data_value", "fe_banner__data_id_2", "fe_banner__data_value_2", "fe_banner__data_id_3", "fe_banner__data_value_3", "fe_banner__data_id_4", "fe_banner__data_value_4", "fe_banner__data_id_5", "fe_banner__data_value_5", "fe_banner__animate", "fe_banner__scale", "fe_banner__icon_class", "fe_banner__icon_img_url", "fe_banner__icon_svg", "fe_banner__close_button", "fe_banner__color_scheme", "fe_banner__color_scheme_classes", "fe_banner__icon_size", "b_action", "fe_banner__extra_classes", "fe_banner__id", "fe_banner__aria_alert", "fe_banner__title_text", "fe_banner__start_genius_trial", "fe_banner__message_text", "b_secure_hostname", "b_query_params_with_lang", "b_original_url", "fe_ge_trial_desktop_campaign_id", "ge_expand_hp_trial_sidebar_cta", "fe_banner__banners_count", "fe_subtitle", "fe_table_container", "fe_pob_class__subtitle", "bookings" ];
return _r_(function(n) {
_i_("3bb:67036078");
var a = "", r = this.fn;
function _(e) {
_i_("3bb:6951dd76"), e += t[117], r.MN(i[64], t[118]), e += t[3], r.MN(i[65], void 0), e += t[3], r.MN(i[66], t[119]), e += t[3], r.MN(i[67], void 0), e += t[3], r.MN(i[68], void 0), e += t[3], r.MN(i[69], t[120]), e += t[3], r.MN(i[70], void 0), e += t[3], r.MN(i[71], void 0), e += t[3], r.MN(i[72], void 0), e += t[3], r.MN(i[73], void 0), e += t[3], r.MN(i[74], void 0), e += t[3], r.MN(i[75], void 0), e += t[3], r.MN(i[76], void 0), e += t[3], r.MN(i[77], void 0), e += t[121], r.MN(i[78], t[122]), e += t[4], r.MN(i[79], void 0), e += t[3], r.MN(i[80], void 0), e += t[3], r.MN(i[81], void 0), e += t[3], r.MN(i[82], void 0), e += t[3], r.MN(i[83], void 0), e += t[3], r.MN(i[84], void 0), e += t[3], r.MN(i[85], void 0), e += t[3], r.MN(i[86], void 0), e += t[4], r.MD(i[88]) ? (e += t[123], r.MN(i[87], r.MB(i[88])), e += t[3]) :(e += t[123], r.MN(i[87], void 0), e += t[3]), e += t[4], r.MN(i[89], void 0), e += t[3], r.MN(i[90], void 0), e += t[4], r.MN(i[91], t[124]), e += t[3], r.MN(i[92], t[124]), e += t[3], r.MN(i[93], t[124]), e += t[4], r.MN(i[94], t[124]), e += t[121], r.MN(i[95], void 0), e += t[3], r.MN(i[96], void 0), e += t[4], r.MD(i[61]) && (e += t[123], r.MN(i[66], r.MC(i[61])), e += t[3]), e += t[4], r.MD(i[97]) && (e += t[123], r.MN(i[67], r.MC(i[97])), e += t[3]), e += t[4], r.MD(i[98]) && (e += t[123], r.MN(i[68], r.MC(i[98])), e += t[3]), e += t[4];
var n = r.MC(i[99]);
if (r.MJ(n + "" == "primary") ? (e += t[125], r.MN(i[64], [ r.MC(i[64]), t[126] ].join("")), e += t[123]) :r.MJ(n + "" == "secondary") ? (e += t[125], r.MN(i[64], [ r.MC(i[64]), t[127] ].join("")), e += t[123]) :r.MJ(n + "" == "warning") ? (e += t[125], r.MN(i[64], [ r.MC(i[64]), t[128] ].join("")), e += t[123]) :r.MJ(n + "" == "disabled") ? (e += t[125], r.MN(i[64], [ r.MC(i[64]), t[129] ].join("")), e += t[123]) :r.MJ(n + "" == "primary-small") ? (e += t[125], r.MN(i[64], [ r.MC(i[64]), t[130] ].join("")), e += t[123]) :r.MJ(n + "" == "secondary-small") ? (e += t[125], r.MN(i[64], [ r.MC(i[64]), t[131] ].join("")), e += t[123]) :r.MJ(n + "" == "warning-small") ? (e += t[125], r.MN(i[64], [ r.MC(i[64]), t[132] ].join("")), e += t[123]) :r.MJ(n + "" == "primary-flat") && (e += t[125], r.MN(i[64], [ r.MC(i[64]), t[133] ].join("")), e += t[3]), e += t[4], r.MD(i[100]) && (e += t[123], r.MN(i[69], r.MC(i[100])), e += t[134], r.MJ(/^a$/i.test(r.MC(i[69]))) && r.MN(i[101], t[135]), e += t[123], r.MJ(/^input$/i.test(r.MC(i[69]))) && r.MN(i[102], t[135]), e += t[123], r.MJ(/^button$/i.test(r.MC(i[69]))) && r.MN(i[103], t[135]), e += t[3]), e += t[4], r.MD(i[104]) && (e += t[123], r.MN(i[65], [ t[136], r.MC(i[104]), t[137] ].join("")), e += t[3]), e += t[4], r.MD(i[105]) && (e += t[123], r.MN(i[72], [ t[138], r.MC(i[105]), t[137] ].join("")), e += t[3]), e += t[4], r.MD(i[106]) && (e += t[123], r.MN(i[94], r.MC(i[106])), e += t[3]), e += t[4], r.MD(i[107])) {
e += t[123];
var a = "";
r.MD(i[94]) || (a += r.MC(i[64])), a += [ t[30], r.MC(i[107]) ].join(""), r.MN(i[64], a), e += t[3];
}
return e += t[4], r.MD(i[108]) && (e += t[123], r.MN(i[74], [ t[139], r.F.entities(r.MC(i[108])), t[137] ].join("")), e += t[3]), e += t[4], r.MD(i[109]) && (e += t[123], r.MN(i[70], [ t[140], r.MC(i[109]), t[137] ].join("")), e += t[3]), e += t[4], r.MD(i[110]) && (e += t[123], r.MN(i[71], r.MC(i[110])), e += t[3]), e += t[4], r.MD(i[111]) && (e += t[123], r.MN(i[75], [ t[141], r.MC(i[111]), t[137] ].join("")), e += t[3]), e += t[4], r.MD(i[112]) && (e += t[5], r.MN(i[77], [ t[142], r.MC(i[112]), t[143], r.MC(i[113]), t[137] ].join("")), e += t[3]), e += t[4], r.MD(i[114]) && (e += t[5], r.MN(i[77], [ r.MC(i[77]), t[144], r.MC(i[114]), t[143], r.MC(i[115]), t[137] ].join("")), e += t[3]), e += t[4], r.MD(i[116]) && (e += t[5], r.MN(i[77], [ r.MC(i[77]), t[144], r.MC(i[116]), t[143], r.MC(i[117]), t[137] ].join("")), e += t[3]), e += t[4], r.MD(i[118]) && (e += t[5], r.MN(i[77], [ r.MC(i[77]), t[144], r.MC(i[118]), t[143], r.MC(i[119]), t[137] ].join("")), e += t[3]), e += t[4], r.MD(i[120]) && (e += t[5], r.MN(i[77], [ r.MC(i[77]), t[144], r.MC(i[120]), t[143], r.MC(i[121]), t[137] ].join("")), e += t[3]), e += t[4], r.MJ(r.MC(i[122])) && r.MK(r.MC(i[123])) && (e += t[123], r.MN(i[76], [ t[145], r.MC(i[122]), t[137] ].join("")), e += t[3]), e += t[117], r.MD(i[124]) && (e += t[123], r.MN(i[95], [ t[146], r.MC(i[124]), t[137] ].join("")), e += t[3]), e += t[4], r.MD(i[125]) && (e += t[123], r.MN(i[96], [ t[147], r.MC(i[125]), t[137] ].join("")), e += t[3]), e += [ t[148], r.MC(i[69]), t[149], r.MC(i[64]), t[150], r.MC(i[72]), t[123], r.MC(i[65]), t[123], r.MC(i[70]), t[123], r.MC(i[71]), t[123], r.MC(i[74]), t[5], r.MC(i[75]), t[123], r.MC(i[77]), t[123], r.MC(i[76]), t[123], r.MC(i[95]), t[123], r.MC(i[96]), t[151] ].join(""), r.MD(i[87]) && (e += [ t[152], r.MB(i[87]), t[153] ].join("")), e += t[134], r.MJ(r.MC(i[69]) + "" == "input") ? e += [ t[154], r.MC(i[66]), t[155] ].join("") :(e += [ t[156], r.MC(i[66]), t[157] ].join(""), r.MD(i[67]) && (e += t[158], r.MD(i[126]) && (e += t[159]), e += [ t[160], r.MC(i[67]), t[157] ].join("")), e += t[161], r.MD(i[128]) && (e += t[162], r.MJ(r.MC(i[127])) && (r.MJ(r.MC(i[127]) + "" == "nl") || r.MJ(r.MC(i[127]) + "" == "be")) && r.MJ(r.track_experiment("eDUIFBUNAAUTCKWFQTcYRJELWe")) && (e += t[163]), e += t[125]), e += [ t[164], r.MC(i[69]), t[165] ].join("")), e += t[3], _r_(e);
}
function o(e) {
if (_i_("3bb:61d1e495"), e += t[177], r.MD(i[160])) {
e += t[151], r.MD(i[135]) && (e += t[7], r.MN(i[134], [ t[142], r.MB(i[135]), t[143], r.MB(i[136]), t[137] ].join("")), e += t[5]), e += t[151], r.MD(i[137]) && (e += t[7], r.MN(i[134], [ r.MB(i[134]), t[144], r.MB(i[137]), t[143], r.MB(i[138]), t[137] ].join("")), e += t[5]), e += t[151], r.MD(i[139]) && (e += t[7], r.MN(i[134], [ r.MB(i[134]), t[144], r.MB(i[139]), t[143], r.MB(i[140]), t[137] ].join("")), e += t[5]), e += t[151], r.MD(i[141]) && (e += t[7], r.MN(i[134], [ r.MB(i[134]), t[144], r.MB(i[141]), t[143], r.MB(i[142]), t[137] ].join("")), e += t[5]), e += t[151], r.MD(i[143]) && (e += t[7], r.MN(i[134], [ r.MB(i[134]), t[144], r.MB(i[143]), t[143], r.MB(i[144]), t[137] ].join("")), e += t[5]), e += t[151], r.MD(i[145]) && (e += t[178]), e += t[179];
var n = r.MB(i[146]);
r.MJ(n + "" == "small") && (e += t[180]), (r.MJ(r.MB(i[147])) || r.MJ(r.MB(i[148])) || r.MJ(r.MB(i[149]))) && (e += t[181]), r.MD(i[150]) && (e += t[182]), r.MJ(r.MB(i[151])) && (e += [ t[183], r.MC(i[151]), r.MC(i[152]), t[30] ].join("")), r.MJ(r.MB(i[147])) && r.MJ(r.MB(i[153])) && (e += [ t[184], r.MC(i[153]), t[30] ].join("")), r.MJ(r.MC(i[154]) + "" == "book") && (e += t[185]), e += [ r.MC(i[155]), t[186] ].join(""), r.MD(i[156]) && (e += [ t[136], r.MC(i[156]), t[23] ].join("")), r.MD(i[134]) && (e += [ r.MC(i[134]), t[30] ].join("")), r.MD(i[157]) && (e += t[187]), e += t[188], r.MD(i[147]) ? e += [ t[189], r.MC(i[147]), t[190] ].join("") :r.MD(i[148]) ? e += [ t[191], r.MC(i[148]), t[192] ].join("") :r.MD(i[149]) && (e += [ t[193], r.MC(i[149]), t[194] ].join("")), r.MD(i[63]) && (e += t[195]), r.MD(i[158]) && (e += [ t[196], r.MC(i[158]), t[197] ].join("")), r.MD(i[160]) && (e += t[198], r.MD(i[159]) && (e += t[199]), e += [ t[192], r.MC(i[160]), t[200] ].join("")), r.MD(i[63]) && (e += [ t[201], r.MC(i[63]), t[200] ].join("")), r.MD(i[63]) && (e += t[202]), r.MD(i[150]) && (e += t[203]), r.MD(i[159]) && (e += [ t[204], r.MC(i[161]), t[205], r.MC(i[162]), t[206], r.MC(i[163]), t[207], r.MB(i[164]), t[208], r.MB(i[165]), t[209] ].join("")), e += t[202], r.MD(i[145]) && (e += t[202]), e += t[3];
}
return e += t[117], r.MN(i[151], void 0), e += t[3], r.MN(i[147], void 0), e += t[3], r.MN(i[148], void 0), e += t[3], r.MN(i[149], void 0), e += t[3], r.MN(i[153], void 0), e += t[3], r.MN(i[158], void 0), e += t[3], r.MN(i[160], void 0), e += t[3], r.MN(i[63], void 0), e += t[3], r.MN(i[150], void 0), e += t[3], r.MN(i[156], void 0), e += t[3], r.MN(i[155], void 0), e += t[3], r.MN(i[146], void 0), e += t[4], r.MN(i[135], void 0), e += t[3], r.MN(i[136], void 0), e += t[3], r.MN(i[137], void 0), e += t[3], r.MN(i[138], void 0), e += t[3], r.MN(i[139], void 0), e += t[3], r.MN(i[140], void 0), e += t[3], r.MN(i[141], void 0), e += t[3], r.MN(i[142], void 0), e += t[3], r.MN(i[143], void 0), e += t[3], r.MN(i[144], void 0), e += t[4], r.MN(i[152], void 0), e += t[4], r.MN(i[134], void 0), e += t[3], r.MN("fe_banner__banners_count", r.MI(r.MB(i[166])) + r.MI(1)), e += t[4], r.MJ(r.MC(i[154]) + "" == "book") && r.MJ(r.track_experiment_stage("bp_banner_module_normalize_banners", 2)) ? e += t[3] :r.MJ(r.track_experiment_stage("bp_banner_module_normalize_banners", 1)) && (e += t[3]), e += t[3], _r_(e);
}
function s(e) {
if (_i_("3bb:72530cac"), e += t[1], r.MD(i[0]) || (e += t[2], r.MN("fe_base_css_class", "overlapping-bookings"), e += t[3]), e += t[4], r.MD(i[3])) {
if (e += t[0], !r.MD(i[1])) {
if (e += t[5], r.MJ(r.MB(i[2])) && r.MJ(r.MB(i[4]))) {
e += t[6];
var a = "";
a += t[7], a += r.MJ(1 == r.array_length(r.MB(i[3]))) ? [ t[8], r.MC(i[2]), t[7] ].join("") :[ t[8], r.MC(i[4]), t[7] ].join(""), a += t[6], r.MN(i[1], a), e += t[5];
}
e += t[2];
}
if (e += t[0], r.MD(i[5]) ? e += t[2] :(e += t[5], r.MN("fe_pob_show_table", 1), e += t[2]), e += t[9], r.MD(i[6]) || (e += t[5], r.MN("fe_pob_cta_target", "_blank"), e += t[2]), e += t[0], r.MD(i[7]) || (e += t[5], r.MN("fe_pob_property_target", "_blank"), e += t[2]), e += t[0], r.MD(i[8]) || (e += t[5], r.MN("fe_pob_show_price", 1), e += t[2]), e += [ t[10], r.MB(i[0]), t[6], r.MB(i[9]), t[11] ].join(""), e += r.MJ(r.MC(i[10])) ? [ t[7], r.MB(i[0]), t[12] ].join("") :[ t[7], r.MB(i[0]), t[13] ].join(""), e += [ t[14], r.MB(i[11]), t[15] ].join(""), r.MJ(r.MB(i[1])) && (e += t[5], r.MD(i[5]) || (e += [ t[16], r.MB(i[0]), t[17], r.MB(i[12]), t[18], r.MC(i[1]), t[19] ].join("")), e += t[2]), e += t[20], r.MD(i[58])) {
e += t[5];
var a = "";
a += [ t[21], r.MB(i[0]), t[22], r.MB(i[14]), t[23] ].join(""), r.MD(i[15]) && (a += [ t[24], r.MC(i[15]), t[23] ].join("")), a += t[25];
var s = r.MC(i[3]) || [];
n.unshift(null);
for (var b = 1, p = s.length; p >= b; b++) n[0] = s[b - 1], a += [ t[26], r.MB(i[0]), t[27], r.MB(i[16]), t[28], r.MB(i[0]), t[29], r.MB(i[17]), t[30] ].join(""), r.MD(i[18]) && (a += t[31]), a += t[32], r.MD(i[23]) && (a += [ t[33], r.MB(i[0]), t[34], r.MB(i[0]), t[35], r.MB(i[0]), t[36], r.MB(i[19]), t[37], r.MC(i[20]), t[23] ].join(""), r.MD(i[21]) && (a += t[38]), a += t[39], r.MD(i[35]) && (a += t[40], a = l(a), a += t[58]), a += t[64]), a += t[65], a += t[65], r.MD(i[35]) || (a += t[41], a = c(a), a += t[63]), a += t[66], r.MD(i[23]) && (a += t[67]), a += t[68], r.MD(i[8]) && (a += [ t[69], r.MB(i[0]), t[29], r.MB(i[17]), t[70], r.MB(i[0]), t[71], r.MB(i[36]), t[72], r.ME(t[73], r.MB, r.MN, null), t[74], r.MB(i[0]), t[75], r.MB(i[37]), t[72], r.MC(i[33]), t[76] ].join("")), a += t[77], r.MD(i[44]) && (a += t[78], r.MD(i[45]) || (a += [ t[79], r.MB(i[0]), t[29], r.MB(i[17]), t[80], r.MB(i[0]), t[81], r.MB(i[38]), t[82] ].join(""), r.MJ(2 == r.MB(i[39])) && r.MJ(1 == r.MB(i[40])) && r.MJ(1 == r.MB(i[41])) && (a += t[83]), a += t[84], r.MJ(2 == r.MB(i[39])) && r.MJ(1 == r.MB(i[40])) && r.MJ(1 == r.MB(i[41])) ? (a += [ t[85], r.MC(i[42]), t[86], r.MC(i[31]), t[87] ].join(""), r.MD(i[43]) && (a += t[88]), a += t[84]) :a += [ t[89], r.MB(i[25]), t[90], r.MC(i[6]), t[84] ].join(""), a += [ t[91], r.MC(i[44]), t[92] ].join("")), a += t[93]), a += t[94], r.MD(i[46]) && (a += t[95]), a += t[96];
n.shift(), a += t[97], r.MJ(2 == r.MB(i[39])) && r.MJ(1 == r.MB(i[40])) && r.MJ(1 == r.MB(i[41])) && (a += t[98], n.unshift({
fe_preloader_with_text__text:r.MB(i[57])
}), a = d(a), n.shift(), a += t[112]), a += t[5], r.MN(i[13], a), e += t[2];
}
if (e += t[20], r.MD(i[5])) {
if (e += t[113], r.MD(i[130])) {
if (e += t[11], r.MJ(1 == r.array_length(r.MB(i[3]))) ? (e += t[7], r.MN("b_text", r.MB(i[59])), e += t[6]) :(e += t[7], r.MN("b_text", r.MB(i[60])), e += t[6]), e += t[11], r.MD(i[62])) {
e += t[7];
var a = "";
a += [ t[114], r.MC(i[61]), t[115] ].join(""), r.MN(i[61], a), e += t[6];
}
e += t[116];
var a = "";
a += t[7], n.unshift({
b_extra_classes:t[166],
b_href:r.MB(i[129]),
b_tag:t[167],
b_target:t[168],
b_type:t[169]
}), a = _(a), n.shift(), a += t[6], r.MN(i[63], a), e += t[5];
}
e += t[170], r.MD(i[58]) && (e += t[171], r.MN(i[131], [ t[8], r.MB(i[0]), t[172], r.MB(i[132]), t[173] ].join("")), e += t[151]), e += t[174];
var a = "";
a += [ t[175], r.F.entities("AEeNTffEebFTWcVTTDRAQZbXNUBO"), t[176] ].join(""), r.MJ(r.track_experiment("AEeNTffEebFTWcVTTDRAQZbXNUBO")) ? (a += t[7], n.unshift({
fe_banner__color_scheme:t[210],
fe_banner__extra_classes:t[211],
fe_banner__icon_class:t[212],
fe_banner__message_text:r.MB(i[167]),
fe_banner__title_text:r.MB(i[1])
}), a = o(a), n.shift(), a += t[6]) :(a += t[7], n.unshift({
fe_banner__color_scheme:t[210],
fe_banner__extra_classes:t[213],
fe_banner__icon_class:t[212],
fe_banner__message_text:r.MB(i[167]),
fe_banner__title_text:r.MB(i[1])
}), a = o(a), n.shift(), a += t[6]), a += t[11], r.MD(i[168]) ? a += [ t[214], r.MB(i[0]), t[215] ].join("") :r.MD(i[58]) && (a += t[216], n.unshift({
fe_banner__color_scheme:t[210],
fe_banner__extra_classes:r.MB(i[131]),
fe_banner__icon_class:t[30],
fe_banner__message_text:r.MB(i[13])
}), a = o(a), n.shift(), a += t[11]), a += t[151], r.MN(i[133], a), e += t[9];
}
e += t[217], r.MD(i[5]) ? e += [ t[5], r.MC(i[133]), t[2] ].join("") :(e += [ t[218], r.MB(i[0]), t[219], r.MB(i[132]), t[220] ].join(""), r.MD(i[167]) && (e += [ t[221], r.MB(i[0]), t[222], r.MB(i[169]), t[18], r.MB(i[167]), t[223] ].join("")), e += [ t[224], r.MC(i[13]), t[225] ].join("")), e += t[226];
}
return e += t[3], _r_(e);
}
function l(a) {
return _i_("3bb:2e9b867e"), a += t[41], r.MD(i[23]) && (a += [ t[42], r.MB(i[0]), t[43], r.MB(i[22]), t[44] ].join("")), a += [ t[45], r.MB(i[0]), t[46], r.MB(i[24]), t[47], r.MB(i[25]), t[48], r.MC(i[7]), t[49] ].join(""), a += r.MD(i[27]) ? [ t[50], r.MB(i[26]), r.MC(i[27]), t[40] ].join("") :[ t[50], r.MB(i[26]), t[40] ].join(""), a += t[51], r.MD(i[32]) && (a += t[40], r.MD(i[18]) && (a += t[50], r.MJ(r.MB(i[31]) + "" == "FREE") && (a += t[52], a += r.MK(r.MB(i[28])) ? [ t[53], r.ME(t[54], r.MB, r.MN, null), t[55] ].join("") :r.MJ(r.MB(i[29]) + "" == "ja") ? [ t[53], (n.unshift({
date_with_short_weekday_with_year:r.MB(i[28])
}), e = r.ME(t[56], r.MB, r.MN, null), n.shift(), e), t[55] ].join("") :[ t[53], (n.unshift({
date_with_short_weekday_with_year:r.MB(i[30])
}), e = r.ME(t[57], r.MB, r.MN, null), n.shift(), e), t[55] ].join(""), a += t[50]), a += t[40]), a += t[58]), a += t[59], r.MD(i[34]) && (a += [ t[60], r.MC(i[33]), t[61] ].join("")), a += t[41], r.MD(i[23]) && (a += t[62]), a += t[63], _r_(a);
}
function c(a) {
return _i_("3bb:0de29845"), a += t[41], r.MD(i[23]) && (a += [ t[42], r.MB(i[0]), t[43], r.MB(i[22]), t[44] ].join("")), a += [ t[45], r.MB(i[0]), t[46], r.MB(i[24]), t[47], r.MB(i[25]), t[48], r.MC(i[7]), t[49] ].join(""), a += r.MD(i[27]) ? [ t[50], r.MB(i[26]), r.MC(i[27]), t[40] ].join("") :[ t[50], r.MB(i[26]), t[40] ].join(""), a += t[51], r.MD(i[32]) && (a += t[40], r.MD(i[18]) && (a += t[50], r.MJ(r.MB(i[31]) + "" == "FREE") && (a += t[52], a += r.MK(r.MB(i[28])) ? [ t[53], r.ME(t[54], r.MB, r.MN, null), t[55] ].join("") :r.MJ(r.MB(i[29]) + "" == "ja") ? [ t[53], (n.unshift({
date_with_short_weekday_with_year:r.MB(i[28])
}), e = r.ME(t[56], r.MB, r.MN, null), n.shift(), e), t[55] ].join("") :[ t[53], (n.unshift({
date_with_short_weekday_with_year:r.MB(i[30])
}), e = r.ME(t[57], r.MB, r.MN, null), n.shift(), e), t[55] ].join(""), a += t[50]), a += t[40]), a += t[58]), a += t[59], r.MD(i[34]) && (a += [ t[60], r.MC(i[33]), t[61] ].join("")), a += t[41], r.MD(i[23]) && (a += t[62]), a += t[63], _r_(a);
}
function d(e) {
_i_("3bb:805ae22d"), e += t[4];
var n = "";
n += t[5], n += r.MD(i[48]) ? r.MC(i[48]) :t[99], n += t[3], r.MN(i[47], n), e += t[4];
var n = "";
n += t[5], n += r.MD(i[50]) ? r.MC(i[50]) :t[100], n += t[3], r.MN(i[49], n), e += t[4];
var n = "";
n += t[5], n += r.MD(i[52]) ? r.MC(i[52]) :t[101], n += t[3], r.MN(i[51], n), e += t[4];
var n = "";
return n += r.MD(i[54]) ? r.MC(i[54]) :t[102], r.MN(i[53], n), e += [ t[103], r.MC(i[55]), t[104], r.MC(i[47]), t[105], r.MC(i[49]), t[106], r.STATIC_HOSTNAME("/static/img/ajax-loaders/" + r.MB(i[53]), 0, 0, 0), t[107], r.MC(i[51]), t[108] ].join(""), e += r.MD(i[56]) ? [ t[41], r.MC(i[56]), t[78] ].join("") :[ t[41], r.ME(t[109], r.MB, r.MN, null), t[110] ].join(""), e += t[111], _r_(e);
}
return a += t[0], n.unshift({
active_perfectly_overlapped_bookings:r.MB(i[170]),
fe_on_view_track:r.MB(i[11]),
fe_scoped_css_class:t[227]
}), a = s(a), n.shift(), a += t[4], _r_(a);
});
}()), booking.jstmpl("overlapping_bookings_comparison_table", function() {
_i_("3bb:5af3fb82");
var e, t, i = [ "\n\n  ", "\n    ", '\n  <div class="comparison-container ', "lang_is_rtl", "lang_is_ltr", '">\n      ', '\n        <div data-et-view="', '"></div>\n      ', "\n      ", "\n        ", "<strong>", "</strong>", '\n        <p class="comparison-container__title">\n          ', "/private/pob_bp_banner_compare_bookings/name", "\n        </p>\n      ", '\n\n    <div class="comparison-layout">\n\n      ', '\n          <div  class="comparison-layout__item">\n            ', "\n\n\n\n", "\n", "\n\n\n\n\n", "\n  ", "\n\n\n\n\n\n", '<span class="u-display-inline-block">', "</span>", "/private/geo_hp_transport_hub_detail/name", '\n        - <strong class="u-display-inline-block">', "/private/sr_in_city_centre/name", "</strong>\n      ", '\n        - <span class="u-display-inline-block"> ', "/private/lp_hotel_distance_from_city_centre/name", "", "</span>\n      ", "\n\n", '\n\n\n\n\n\n\n\n\n\n<article class="comparison-property" data-id="', '">\n\n  \n  \n  \n\n  <div\n    class="comparison-property__block--image"\n      ', '\n        style="background-image:url(', ')"\n      ', "\n    >\n\n    ", '\n\n      <div class="comparison-property__overlay">\n\n          <div class="comparison-property__review">\n            ', "\n\n\n\n\n\n\n", '\n	<div style="color:#fff;background:#ff0000;padding:0.5em;border-radius:0.5em;max-width:30em;">Uh oh! looks like you are giving me a formatted score value, please give me a non formatted one</div>\n', "\n\n\n", "\n	", "none", "auto", "num_reviews_sr_page", "\n\n    ", "   ", "        ", "             ", "    ", " ", "     ", "         ", "      ", "  ", "/private/review_adj_superb/name", "\n\n	", "\n	\n	", "\n		", "review-score-widget__", "review-score-widget__score-only ", "review-score-widget__12 ", "review-score-widget__14 ", "review-score-widget__20 ", "review-score-widget__24 ", " review-score-widget ", " review-score-widget__no-subtext", " review-score-widget__flipped", 'id="', '"', "\n\n\n\n\n\n\n\n\n", "\n		<", 'a href="', ' target="', "span", ' class="review-score-widget__text" role="link" aria-label="', "/private/a11y_adjective_rating/name", '">\n			', "\n		</", "a", ">\n	", "span\n        ", ' class="review-score-widget__subtext" role="link" aria-label="', "/private/acc_sr_review_score_rated_with_score_end/name", '"\n        ', '\n            data-et-view="', ':2"\n        ', "\n        >\n        \n        ", "\n            ", "/private/ugcc_sr_num_plus_reviews/name", "50", "\n\n	\n	\n	\n\n	\n\n	<span\n		", '\n		class="', " review-score-widget__debug", '"\n			', "\n				", "\n			", '\n				data-et-view="', "\n	>\n		", "\n			\n		", "\n\n		", "\n\n		\n		", "\n\n			", "\n				\n				", "\n	<", ' class="review-score-badge" role="link" aria-label="', "/private/a11y_rating_score_for_screenreader/name", '">\n		', "\n	</", ">\n", "\n					\n					", "\n					", '\n						<span class="review-score-widget__body">\n							', "\n							", "\n						</span>\n					", '\n					<span class="review-score-widget__body">\n						', "\n						", "\n					</span>\n				", "\n	</span>\n\n	\n	\n\n", "\n\n\n\n\n\n\n\n\n\n", "\n	\n	\n", "text-only", "\n          </div>\n\n      </div>\n\n    ", '\n\n  </div>\n\n\n  \n  \n  \n\n\n  \n\n  <div class="comparison-property__block--title">\n\n    <p class=" comparison-property__text--large">\n      ', '\n        <a href="', '" class="comparison-property__link js-view_booking--cta u-text-decoration:none" title="', '"><strong class="u-font-weight:bold">', "</strong></a>\n      ", '\n        <strong class="u-font-weight:bold">', '\n    </p>\n\n\n\n  \n\n\n  </div>\n\n\n  <div class="comparison-property__block">\n\n  \n\n    ', '\n      <p class="comparison-property__text">\n\n          <strong class="u-font-weight:bold">\n            ', "\n              ", ",\n            ", "\n          </strong>\n\n          ", "\n          ", "\n\n      </p>\n    ", '\n        <p class="comparison-property__text--media">\n          <i class="bicon media-icon bicon-airport"></i> ', "\n        </p>\n    ", '\n        <p class="comparison-property__text--media">\n          <i class="bicon media-icon bicon-metro"></i> ', '\n\n        <p class="comparison-property__text--media">\n          <i class="bicon media-icon bicon-train"></i> ', "\n        </p>\n\n    ", '\n\n\n\n  </div>\n\n\n  \n  \n  \n\n  <div class="comparison-property__block--alternate--price">\n      <p class="comparison-property__text--smaller--flush">', "/private/bp_room_for_x_nights/name", '</p>\n      <p class="comparison-property__text--large"><strong class="u-font-weight:bold">', "</strong></p>\n\n      \n      ", '\n        <div class="comparison-property__text comparison-property__text--non-free-cancel fe_banner fe_banner__scale_small fe_banner__red">\n            ', "/private/bhep_bs_pob_warning_no_free_cxln/name", "\n        </div>\n      ", '\n\n  </div>\n\n\n  \n  \n  \n\n  <div class="comparison-property__block--centered--cta">\n    ', '\n\n      <p class="comparison-property__text">\n         <strong class="u-font-weight:bold comparison-property__link u-text-decoration:none js-continue-booking">', "/private/bs3_check_booking_button/name", "</strong>\n      </p>\n\n    ", '\n  <p class="comparison-property__text">\n    <a target="_blank" href="', '" class="c-button u-padding:10">', "/private/pb_ss_hp_banner_view_booking_cta/name", "</a>\n  </p>\n\n", "b-button", "Button Text should be overriden", "button", "c-button", "0", " b-button_primary", " b-button_secondary", " b-button_warning", " b-button_disabled", " b-button_primary b-button_small", " b-button_secondary b-button_small", " b-button_warning b-button_small", " b-button_primary b-button_flat", "1", 'href="', 'data-title="', 'type="', 'rel="', "data-", '="', " data-", 'target="', 'hotelUrl="', 'data-hotelid="', "\n\n\n<", '\n	class="', '"\n	', '\n        data-track-event="', '"\n    ', '\n		value="', '"/>\n	', '\n	>\n		<span class="b-button__text">', "</span>\n		", '\n				<span class="b-button__from-text" ', 'style="display:inline-block"', ">", '\n				<span class="b-button__from-text book_now_rt_summary g-hidden"></span>\n\n				', '\n                    <span class="b-button__from-text taxes_and_charges_near_price_btn_text"></span>\n				', "\n\n		</", "comparison-property__cta js-view_booking--cta", "_blank", "primary", '\n    \n    <div class="slidebox  slidebox--cancel-booking" id="slidebox-cancel-pob">\n        <div class="slidebox__inner  js-slidebox__inner  myBookingOptionsPanel">\n            ', "100px", "80%", "32px", "ajax-loader-64.gif", '\n\n\n\n<div\n    class="preloader-with-text ', '"\n    style="min-height: ', ';"\n>\n    <div class="preloader-with-text__container">\n        <div class="preloader-with-text__table" style="width: ', ';">\n            <div class="preloader-with-text__cell">\n\n                <div class="preloader-with-text__spinner">\n                    <img\n                        src="', '"\n                        style="width: ', ';"\n                        alt=""\n                    />\n                </div>\n\n                <div class="preloader-with-text__text">\n                    ', "\n                        ", "\n                    ", "/private/loading/name", "...\n                    ", "\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n", "\n        </div>\n    </div> <!-- /slidebox--cancel-booking -->\n", "\n\n            ", "true", "Cancel booking, ", "slidebox-preopen-callback", "slidebox-load", "slidebox-submit-callback", "trackname", "slidebox-target", "slidebox-ajax-failure-feedback", "cancelOpenCallback", "cancelButtonSubmitCallback", "#slidebox-cancel-pob", "c-button--warning js-cxl-btn mb-btn mb-cancel custom_track hasSlideBox js-bs2-cancel-slidebox js-cancel-lightbox js-cancel-in-same-page comparison-property__cta", "c-button--warning js-cxl-btn mb-btn mb-cancel custom_track hasSlideBox js-cancel-lightbox js-bs2-cancel-slidebox js-cancel-in-same-page comparison-property__cta", "\n\n        ", "pbsource=mybooking_widget_cancel", "c-button--warning js-cxl-btn js-cancel-in-same-page js-bs2-cancel-slidebox comparison-property__cta", "\n\n  </div>\n\n</article>\n", '\n          </div>\n          <div  class="comparison-layout__spacer"> </div>\n        ', "\n\n\n      ", '\n\n        <div  class="comparison-layout__item">\n          ', "\n        </div>\n\n      ", '\n\n      <div  class="comparison-layout__spacer--empty"> </div>\n\n    </div>\n  </div>\n', '<div data-component="onview-animate" data-anim-type="fadeInBottom"> ', '<div class="fe_banner ', "fe_banner__scale_small ", "fe_banner__w-icon ", "fe_banner__w-dismiss ", "fe_banner__", "fe_banner__w-icon-", "fe_banner__bp fe_banner__inherit_font_size ", ' " ', '" ', 'role="alert"', "> ", '<i class="fe_banner__icon ', '" aria-hidden="true"></i> ', '<img class="fe_banner__icon" src="', '"> ', '<span class="fe_banner__icon"> ', " </span> ", '<div class="fe_banner__btn_container"> <div class="fe_banner__btn_container_content"> ', '<h3 class="fe_banner__title"> ', " </h3> ", '<div class="fe_banner__message ', "fe_banner__genius-trial", " </div> ", '</div> <div class="fe_banner__button"> ', "</div> ", '<span class="fe_banner__dismiss js-close"><i class="bicon-btnclose" aria-label="close"></i></span> ', '<form action="', "/genius_activate_trial", '" class="fe_banner__genius-banner-form" method="post"> <input type="hidden" name="return_url" value="', '"> <input type="hidden" name="src" value="hp_banner"> <input type="hidden" name="campaign_id" value="', '"> <input type="submit" class="button fe_banner__genius-banner-button" value="', '"> </form> ', "green", "fe_banner__message overlapping-bookings--bp fe_banner__unify" ], n = [ "pob_comparison_component_table", "b_lang_is_rtl", "fe_track_stage_on_view", "comparison_property", "hotel_name", "hname", "active_perfectly_overlapped_bookings", "num_bookings", "review_nr", "total_score", "location_details", "distance_to_hub", "distance_formatted", "property_distance_to_airport", "airport_name", "type", "property_distance_to_train", "station_name", "property_distance_to_metro", "property_distance_from_city_center", "distance", "referenceCityCenterName", "hid", "main_photo_url", "b_dev_server", "score", "dont_format_score", "fe_text", "text", "fe_subtext", "subtext", "fe_widget_subtext", "sample_size", "fe_formatted_sample_size", "align", "b_action_name_is_searchresults", "b_action_name_is_hotel", "b_is_desktop_site", "wrapper_tag_name", "fe_review_score_word_class_list", "fe_review_score", "custom_class", "review_adj_very_poor", "review_adj_poor", "review_adj_disappointing", "review_adj_average_passable", "review_adj_average_okay", "review_adj_pleasant", "low_score_adjectives", "fd_lp_header_rs", "review_adj_good", "review_adj_very_good", "review_adj_fabulous", "fe_review_score_word_copy", "review_adj_exceptional", "fe_widget_text", "prepend_text", "append_text", "fe_score", "prefix", "fe_score_word_name", "suffix", "fe_classname", "fe_widget_style", "style", "score_only", "fe_widget_layout", "layout", "fe_widget_align", "fe_widget_size", "size", "fe_badge_style", "fe_widget_class", "flip", "extra_classes", "fe_widget_id", "widget_id", "fe_rating", "fe_widget_text_element", "text_link_url", "text_link_target", "fe_rating_adj", "fe_widget_subtext_element", "subtext_link_url", "subtext_link_target", "review_score_widget", "b_site_type", "extra_attributes", "track_view", "prepend_html", "badge_link_url", "badge_link_target", "fe_formatted_score", "fe_is_alt_version", "append_html", "render", "fe_show_overlay", "mybooking_url", "property_name", "district", "city", "num_nights", "total_price_pretty", "fe_show_non_free", "unbooked", "b_btn_class", "b_btn_id", "b_btn_text", "b_btn_outside_text", "b_btn_caption_text", "b_btn_tag", "b_btn_attr_type", "b_btn_attr", "b_btn_href", "b_btn_extra_classes", "b_btn_title", "b_btn_rel", "b_btn_target", "b_btn_data", "fe_cbtn_comp_class", "fe_cbtn_class", "fe_cbtn_type", "fe_cbtn_size", "fe_cbtn_disabled", "fe_cbtn_icon_only", "fe_cbtn_icon_left", "fe_cbtn_icon_right", "fe_cbtn_track_exp", "fe_cbtn_track_event", "fe_btn_track_event", "fe_cbtn_track_goal", "fe_cbtn_track_stage", "fe_cbtn_is_anchor", "fe_cbtn_is_input", "fe_cbtn_is_button", "fe_cbtn_no_style", "b_btn_hotel_url", "b_btn_data_hotelid", "b_text", "b_outside_text", "b_caption_text", "b_type", "b_tag", "fe_btn_is_anchor", "fe_btn_is_input", "fe_btn_is_button", "b_id", "b_href", "fe_btn_no_style", "b_extra_classes", "b_title", "b_attr_type", "b_attr", "b_rel", "b_data_id", "b_data_value", "b_data_id_2", "b_data_value_2", "b_data_id_3", "b_data_value_3", "b_data_id_4", "b_data_value_4", "b_data_id_5", "b_data_value_5", "b_target", "b_bb_is_sabrered_app", "b_hotel_url", "b_data_hotelid", "b_from_price_inlined", "b_guest_country", "b_add_rt_summary", "pb_ss_hp_banner_view_booking_cta", "fe_preloader_with_text__min_height_default", "fe_preloader_with_text__min_height", "fe_preloader_with_text__width_default", "fe_preloader_with_text__width", "fe_preloader_with_text__spinner_size_default", "fe_preloader_with_text__spinner_size", "fe_preloader_with_text__spinner_default", "fe_preloader_with_text__spinner", "fe_preloader_with_text__class", "fe_preloader_with_text__text", "loading", "fe_action", "fe_user_auth_level_is_high", "all_free_cancellations_and_no_prepayment_only", "fe_stage", "fe_feature_running_MYBOOKING_AJAX_FAILURE_FEEDBACK_copy", "fe_feature_running_MYBOOKING_AJAX_FAILURE_FEEDBACK", "cancellation_type_copy", "cancellation_type", "cancel_summary_url_copy", "cancel_summary_url", "cx_double_booked_message_cancel", "cancellation_link", "b_query_params_delimiter", "show_cancel_cta", "bookings", "fe_banner__data", "fe_banner__data_id", "fe_banner__data_value", "fe_banner__data_id_2", "fe_banner__data_value_2", "fe_banner__data_id_3", "fe_banner__data_value_3", "fe_banner__data_id_4", "fe_banner__data_value_4", "fe_banner__data_id_5", "fe_banner__data_value_5", "fe_banner__animate", "fe_banner__scale", "fe_banner__icon_class", "fe_banner__icon_img_url", "fe_banner__icon_svg", "fe_banner__close_button", "fe_banner__color_scheme", "fe_banner__color_scheme_classes", "fe_banner__icon_size", "b_action", "fe_banner__extra_classes", "fe_banner__id", "fe_banner__aria_alert", "fe_banner__btn_include", "fe_banner__title_text", "fe_banner__start_genius_trial", "fe_banner__message_text", "b_secure_hostname", "b_query_params_with_lang", "b_original_url", "fe_ge_trial_desktop_campaign_id", "ge_expand_hp_trial_sidebar_cta", "fe_banner__banners_count" ];
return _r_(function(a) {
_i_("3bb:73121025");
var r = "", _ = this.fn;
function o(t) {
if (_i_("3bb:5ec10c24"), _.MD(n[6])) {
t += i[2], t += _.MD(n[1]) ? i[3] :i[4], t += i[5], _.MD(n[2]) && (t += [ i[6], _.MC(n[2]), i[7] ].join("")), t += i[1], _.MD(n[3]) && (t += i[8], _.MJ(e = _.MC(n[3])) && !_.IS_EMPTY_OBJECT(e) && (a.unshift(e), t += i[9], _.MN(n[4], [ i[10], _.MC(n[5]), i[11] ].join("")), t += i[9], _.MN("num_bookings", _.array_length(_.MB(n[6]))), t += [ i[12], _.ME(i[13], _.MB, _.MN, _.MO(_.MC(n[7]), null, i[13])), i[14] ].join(""), a.shift()), t += i[1]), t += i[15], _.MD(n[3]) && (t += i[9], _.MJ(e = _.MC(n[3])) && !_.IS_EMPTY_OBJECT(e) && (a.unshift(e), t += i[16], a.unshift({
b_lang_is_rtl:_.MC(n[1]),
b_site_type:_.MC(n[86]),
fe_show_non_free:i[161],
hid:_.MB(n[22]),
mybooking_url:_.MB(n[97]),
num_nights:_.MB(n[101]),
property_name:_.MB(n[5]),
total_price_pretty:_.MB(n[102])
}), t = m(t), a.shift(), t += i[234], a.shift()), t += i[8]), t += i[235];
var r = _.MC(n[6]) || [];
a.unshift(null);
for (var o = 1, s = r.length; s >= o; o++) a[0] = r[o - 1], t += i[236], a.unshift({
b_lang_is_rtl:_.MC(n[1]),
b_site_type:_.MC(n[86]),
fe_show_non_free:_.MB(n[103]),
hid:_.MB(n[22]),
mybooking_url:_.MB(n[97]),
num_nights:_.MB(n[101]),
property_name:_.MB(n[5]),
total_price_pretty:_.MB(n[102])
}), t = g(t), a.shift(), t += i[237];
a.shift(), t += i[238];
}
return t += i[18], _r_(t);
}
function s(e) {
return _i_("3bb:235c0d2b"), _.MN("fe_rating", _.MI(_.MB(n[25])) + _.MI(0)), e += i[41], _.MN("fe_rating_adj", ""), e += i[18], _.MJ(_.MB(n[77]) >= 0) && _.MJ(_.MB(n[77]) < 3) && (e += i[42], _.MN("fe_rating_adj", "1"), e += i[18]), e += i[32], _.MJ(_.MB(n[77]) >= 3) && _.MJ(_.MB(n[77]) < 4) && (e += i[42], _.MN("fe_rating_adj", "2"), e += i[18]), e += i[32], _.MJ(_.MB(n[77]) >= 4) && _.MJ(_.MB(n[77]) < 5) && (e += i[42], _.MN("fe_rating_adj", "3"), e += i[18]), e += i[32], _.MJ(_.MB(n[77]) >= 5) && _.MJ(_.MB(n[77]) < 5.6) && (e += i[42], _.MN("fe_rating_adj", "4"), e += i[18]), e += i[32], _.MJ(_.MB(n[77]) >= 5.6) && _.MJ(_.MB(n[77]) < 6) && (e += i[42], _.MN("fe_rating_adj", "5"), e += i[18]), e += i[32], _.MJ(_.MB(n[77]) >= 6) && _.MJ(_.MB(n[77]) < 7) && (e += i[42], _.MN("fe_rating_adj", "6"), e += i[18]), e += i[32], _.MJ(_.MB(n[77]) >= 7) && _.MJ(_.MB(n[77]) < 8) && (e += i[42], _.MN("fe_rating_adj", "7"), e += i[18]), e += i[32], _.MJ(_.MB(n[77]) >= 8) && _.MJ(_.MB(n[77]) < 8.6) && (e += i[42], _.MN("fe_rating_adj", "8"), e += i[18]), e += i[32], _.MJ(_.MB(n[77]) >= 8.6) && _.MJ(_.MB(n[77]) < 9) && (e += i[42], _.MN("fe_rating_adj", "9"), e += i[18]), e += i[32], _.MJ(_.MB(n[77]) >= 9) && _.MJ(_.MB(n[77]) < 9.5) && (e += i[42], _.MN("fe_rating_adj", "10"), e += i[18]), e += i[32], _.MJ(_.MB(n[77]) >= 9.5) && (e += i[42], _.MN("fe_rating_adj", "11"), e += i[18]), _r_(e);
}
function l(e) {
return _i_("3bb:e72ee584"), _.MN("fe_rating", _.MI(_.MB(n[25])) + _.MI(0)), e += i[41], _.MN("fe_rating_adj", ""), e += i[18], _.MJ(_.MB(n[77]) >= 0) && _.MJ(_.MB(n[77]) < 3) && (e += i[42], _.MN("fe_rating_adj", "1"), e += i[18]), e += i[32], _.MJ(_.MB(n[77]) >= 3) && _.MJ(_.MB(n[77]) < 4) && (e += i[42], _.MN("fe_rating_adj", "2"), e += i[18]), e += i[32], _.MJ(_.MB(n[77]) >= 4) && _.MJ(_.MB(n[77]) < 5) && (e += i[42], _.MN("fe_rating_adj", "3"), e += i[18]), e += i[32], _.MJ(_.MB(n[77]) >= 5) && _.MJ(_.MB(n[77]) < 5.6) && (e += i[42], _.MN("fe_rating_adj", "4"), e += i[18]), e += i[32], _.MJ(_.MB(n[77]) >= 5.6) && _.MJ(_.MB(n[77]) < 6) && (e += i[42], _.MN("fe_rating_adj", "5"), e += i[18]), e += i[32], _.MJ(_.MB(n[77]) >= 6) && _.MJ(_.MB(n[77]) < 7) && (e += i[42], _.MN("fe_rating_adj", "6"), e += i[18]), e += i[32], _.MJ(_.MB(n[77]) >= 7) && _.MJ(_.MB(n[77]) < 8) && (e += i[42], _.MN("fe_rating_adj", "7"), e += i[18]), e += i[32], _.MJ(_.MB(n[77]) >= 8) && _.MJ(_.MB(n[77]) < 8.6) && (e += i[42], _.MN("fe_rating_adj", "8"), e += i[18]), e += i[32], _.MJ(_.MB(n[77]) >= 8.6) && _.MJ(_.MB(n[77]) < 9) && (e += i[42], _.MN("fe_rating_adj", "9"), e += i[18]), e += i[32], _.MJ(_.MB(n[77]) >= 9) && _.MJ(_.MB(n[77]) < 9.5) && (e += i[42], _.MN("fe_rating_adj", "10"), e += i[18]), e += i[32], _.MJ(_.MB(n[77]) >= 9.5) && (e += i[42], _.MN("fe_rating_adj", "11"), e += i[18]), _r_(e);
}
function c(e) {
return _i_("3bb:90e9b1bd"), e += i[105], _.MD(n[90]) ? (e += [ i[73], _.MB(n[90]), i[70] ].join(""), _.MD(n[91]) && (e += [ i[74], _.MB(n[91]), i[70] ].join(""))) :e += i[75], e += [ i[106], (a.unshift({
review_score_number:_.MB(n[92])
}), t = _.ME(i[107], _.MB, _.MN, null), a.shift(), t), i[108], _.MB(n[92]), i[109] ].join(""), e += _.MD(n[90]) ? i[80] :i[75], e += i[110], _r_(e);
}
function d(e) {
return _i_("3bb:f531a7ab"), e += i[105], _.MD(n[90]) ? (e += [ i[73], _.MB(n[90]), i[70] ].join(""), _.MD(n[91]) && (e += [ i[74], _.MB(n[91]), i[70] ].join(""))) :e += i[75], e += [ i[106], (a.unshift({
review_score_number:_.MB(n[92])
}), t = _.ME(i[107], _.MB, _.MN, null), a.shift(), t), i[108], _.MB(n[92]), i[109] ].join(""), e += _.MD(n[90]) ? i[80] :i[75], e += i[110], _r_(e);
}
function b(e) {
return _i_("3bb:d2476152"), e += i[105], _.MD(n[90]) ? (e += [ i[73], _.MB(n[90]), i[70] ].join(""), _.MD(n[91]) && (e += [ i[74], _.MB(n[91]), i[70] ].join(""))) :e += i[75], e += [ i[106], (a.unshift({
review_score_number:_.MB(n[92])
}), t = _.ME(i[107], _.MB, _.MN, null), a.shift(), t), i[108], _.MB(n[92]), i[109] ].join(""), e += _.MD(n[90]) ? i[80] :i[75], e += i[110], _r_(e);
}
function p(e) {
_i_("3bb:41ed5d97"), e += i[17], _.MN(n[105], i[157]), e += i[18], _.MN(n[106], void 0), e += i[18], _.MN(n[107], i[158]), e += i[18], _.MN(n[108], void 0), e += i[18], _.MN(n[109], void 0), e += i[18], _.MN(n[110], i[159]), e += i[18], _.MN(n[111], void 0), e += i[18], _.MN(n[112], void 0), e += i[18], _.MN(n[113], void 0), e += i[18], _.MN(n[114], void 0), e += i[18], _.MN(n[115], void 0), e += i[18], _.MN(n[116], void 0), e += i[18], _.MN(n[117], void 0), e += i[18], _.MN(n[118], void 0), e += i[41], _.MN(n[119], i[160]), e += i[32], _.MN(n[120], void 0), e += i[18], _.MN(n[121], void 0), e += i[18], _.MN(n[122], void 0), e += i[18], _.MN(n[123], void 0), e += i[18], _.MN(n[124], void 0), e += i[18], _.MN(n[125], void 0), e += i[18], _.MN(n[126], void 0), e += i[18], _.MN(n[127], void 0), e += i[32], _.MD(n[129]) ? (e += i[42], _.MN(n[128], _.MB(n[129])), e += i[18]) :(e += i[42], _.MN(n[128], void 0), e += i[18]), e += i[32], _.MN(n[130], void 0), e += i[18], _.MN(n[131], void 0), e += i[32], _.MN(n[132], i[161]), e += i[18], _.MN(n[133], i[161]), e += i[18], _.MN(n[134], i[161]), e += i[32], _.MN(n[135], i[161]), e += i[41], _.MN(n[136], void 0), e += i[18], _.MN(n[137], void 0), e += i[32], _.MD(n[138]) && (e += i[42], _.MN(n[107], _.MC(n[138])), e += i[18]), e += i[32], _.MD(n[139]) && (e += i[42], _.MN(n[108], _.MC(n[139])), e += i[18]), e += i[32], _.MD(n[140]) && (e += i[42], _.MN(n[109], _.MC(n[140])), e += i[18]), e += i[32];
var t = _.MC(n[141]);
if (_.MJ(t + "" == "primary") ? (e += i[59], _.MN(n[105], [ _.MC(n[105]), i[162] ].join("")), e += i[42]) :_.MJ(t + "" == "secondary") ? (e += i[59], _.MN(n[105], [ _.MC(n[105]), i[163] ].join("")), e += i[42]) :_.MJ(t + "" == "warning") ? (e += i[59], _.MN(n[105], [ _.MC(n[105]), i[164] ].join("")), e += i[42]) :_.MJ(t + "" == "disabled") ? (e += i[59], _.MN(n[105], [ _.MC(n[105]), i[165] ].join("")), e += i[42]) :_.MJ(t + "" == "primary-small") ? (e += i[59], _.MN(n[105], [ _.MC(n[105]), i[166] ].join("")), e += i[42]) :_.MJ(t + "" == "secondary-small") ? (e += i[59], _.MN(n[105], [ _.MC(n[105]), i[167] ].join("")), e += i[42]) :_.MJ(t + "" == "warning-small") ? (e += i[59], _.MN(n[105], [ _.MC(n[105]), i[168] ].join("")), e += i[42]) :_.MJ(t + "" == "primary-flat") && (e += i[59], _.MN(n[105], [ _.MC(n[105]), i[169] ].join("")), e += i[18]), e += i[32], _.MD(n[142]) && (e += i[42], _.MN(n[110], _.MC(n[142])), e += i[57], _.MJ(/^a$/i.test(_.MC(n[110]))) && _.MN(n[143], i[170]), e += i[42], _.MJ(/^input$/i.test(_.MC(n[110]))) && _.MN(n[144], i[170]), e += i[42], _.MJ(/^button$/i.test(_.MC(n[110]))) && _.MN(n[145], i[170]), e += i[18]), e += i[32], _.MD(n[146]) && (e += i[42], _.MN(n[106], [ i[69], _.MC(n[146]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[147]) && (e += i[42], _.MN(n[113], [ i[171], _.MC(n[147]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[148]) && (e += i[42], _.MN(n[135], _.MC(n[148])), e += i[18]), e += i[32], _.MD(n[149])) {
e += i[42];
var a = "";
_.MD(n[135]) || (a += _.MC(n[105])), a += [ i[51], _.MC(n[149]) ].join(""), _.MN(n[105], a), e += i[18];
}
return e += i[32], _.MD(n[150]) && (e += i[42], _.MN(n[115], [ i[172], _.F.entities(_.MC(n[150])), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[151]) && (e += i[42], _.MN(n[111], [ i[173], _.MC(n[151]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[152]) && (e += i[42], _.MN(n[112], _.MC(n[152])), e += i[18]), e += i[32], _.MD(n[153]) && (e += i[42], _.MN(n[116], [ i[174], _.MC(n[153]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[154]) && (e += i[1], _.MN(n[118], [ i[175], _.MC(n[154]), i[176], _.MC(n[155]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[156]) && (e += i[1], _.MN(n[118], [ _.MC(n[118]), i[177], _.MC(n[156]), i[176], _.MC(n[157]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[158]) && (e += i[1], _.MN(n[118], [ _.MC(n[118]), i[177], _.MC(n[158]), i[176], _.MC(n[159]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[160]) && (e += i[1], _.MN(n[118], [ _.MC(n[118]), i[177], _.MC(n[160]), i[176], _.MC(n[161]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[162]) && (e += i[1], _.MN(n[118], [ _.MC(n[118]), i[177], _.MC(n[162]), i[176], _.MC(n[163]), i[70] ].join("")), e += i[18]), e += i[32], _.MJ(_.MC(n[164])) && _.MK(_.MC(n[165])) && (e += i[42], _.MN(n[117], [ i[178], _.MC(n[164]), i[70] ].join("")), e += i[18]), e += i[17], _.MD(n[166]) && (e += i[42], _.MN(n[136], [ i[179], _.MC(n[166]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[167]) && (e += i[42], _.MN(n[137], [ i[180], _.MC(n[167]), i[70] ].join("")), e += i[18]), e += [ i[181], _.MC(n[110]), i[182], _.MC(n[105]), i[183], _.MC(n[113]), i[42], _.MC(n[106]), i[42], _.MC(n[111]), i[42], _.MC(n[112]), i[42], _.MC(n[115]), i[1], _.MC(n[116]), i[42], _.MC(n[118]), i[42], _.MC(n[117]), i[42], _.MC(n[136]), i[42], _.MC(n[137]), i[46] ].join(""), _.MD(n[128]) && (e += [ i[184], _.MB(n[128]), i[185] ].join("")), e += i[57], _.MJ(_.MC(n[110]) + "" == "input") ? e += [ i[186], _.MC(n[107]), i[187] ].join("") :(e += [ i[188], _.MC(n[107]), i[189] ].join(""), _.MD(n[108]) && (e += i[190], _.MD(n[168]) && (e += i[191]), e += [ i[192], _.MC(n[108]), i[189] ].join("")), e += i[101], _.MD(n[170]) && (e += i[193], _.MJ(_.MC(n[169])) && (_.MJ(_.MC(n[169]) + "" == "nl") || _.MJ(_.MC(n[169]) + "" == "be")) && _.MJ(_.track_experiment("eDUIFBUNAAUTCKWFQTcYRJELWe")) && (e += i[194]), e += i[59]), e += [ i[195], _.MC(n[110]), i[81] ].join("")), e += i[18], _r_(e);
}
function u(e) {
_i_("3bb:e75f4770"), e += i[17], _.MN(n[105], i[157]), e += i[18], _.MN(n[106], void 0), e += i[18], _.MN(n[107], i[158]), e += i[18], _.MN(n[108], void 0), e += i[18], _.MN(n[109], void 0), e += i[18], _.MN(n[110], i[159]), e += i[18], _.MN(n[111], void 0), e += i[18], _.MN(n[112], void 0), e += i[18], _.MN(n[113], void 0), e += i[18], _.MN(n[114], void 0), e += i[18], _.MN(n[115], void 0), e += i[18], _.MN(n[116], void 0), e += i[18], _.MN(n[117], void 0), e += i[18], _.MN(n[118], void 0), e += i[41], _.MN(n[119], i[160]), e += i[32], _.MN(n[120], void 0), e += i[18], _.MN(n[121], void 0), e += i[18], _.MN(n[122], void 0), e += i[18], _.MN(n[123], void 0), e += i[18], _.MN(n[124], void 0), e += i[18], _.MN(n[125], void 0), e += i[18], _.MN(n[126], void 0), e += i[18], _.MN(n[127], void 0), e += i[32], _.MD(n[129]) ? (e += i[42], _.MN(n[128], _.MB(n[129])), e += i[18]) :(e += i[42], _.MN(n[128], void 0), e += i[18]), e += i[32], _.MN(n[130], void 0), e += i[18], _.MN(n[131], void 0), e += i[32], _.MN(n[132], i[161]), e += i[18], _.MN(n[133], i[161]), e += i[18], _.MN(n[134], i[161]), e += i[32], _.MN(n[135], i[161]), e += i[41], _.MN(n[136], void 0), e += i[18], _.MN(n[137], void 0), e += i[32], _.MD(n[138]) && (e += i[42], _.MN(n[107], _.MC(n[138])), e += i[18]), e += i[32], _.MD(n[139]) && (e += i[42], _.MN(n[108], _.MC(n[139])), e += i[18]), e += i[32], _.MD(n[140]) && (e += i[42], _.MN(n[109], _.MC(n[140])), e += i[18]), e += i[32];
var t = _.MC(n[141]);
if (_.MJ(t + "" == "primary") ? (e += i[59], _.MN(n[105], [ _.MC(n[105]), i[162] ].join("")), e += i[42]) :_.MJ(t + "" == "secondary") ? (e += i[59], _.MN(n[105], [ _.MC(n[105]), i[163] ].join("")), e += i[42]) :_.MJ(t + "" == "warning") ? (e += i[59], _.MN(n[105], [ _.MC(n[105]), i[164] ].join("")), e += i[42]) :_.MJ(t + "" == "disabled") ? (e += i[59], _.MN(n[105], [ _.MC(n[105]), i[165] ].join("")), e += i[42]) :_.MJ(t + "" == "primary-small") ? (e += i[59], _.MN(n[105], [ _.MC(n[105]), i[166] ].join("")), e += i[42]) :_.MJ(t + "" == "secondary-small") ? (e += i[59], _.MN(n[105], [ _.MC(n[105]), i[167] ].join("")), e += i[42]) :_.MJ(t + "" == "warning-small") ? (e += i[59], _.MN(n[105], [ _.MC(n[105]), i[168] ].join("")), e += i[42]) :_.MJ(t + "" == "primary-flat") && (e += i[59], _.MN(n[105], [ _.MC(n[105]), i[169] ].join("")), e += i[18]), e += i[32], _.MD(n[142]) && (e += i[42], _.MN(n[110], _.MC(n[142])), e += i[57], _.MJ(/^a$/i.test(_.MC(n[110]))) && _.MN(n[143], i[170]), e += i[42], _.MJ(/^input$/i.test(_.MC(n[110]))) && _.MN(n[144], i[170]), e += i[42], _.MJ(/^button$/i.test(_.MC(n[110]))) && _.MN(n[145], i[170]), e += i[18]), e += i[32], _.MD(n[146]) && (e += i[42], _.MN(n[106], [ i[69], _.MC(n[146]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[147]) && (e += i[42], _.MN(n[113], [ i[171], _.MC(n[147]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[148]) && (e += i[42], _.MN(n[135], _.MC(n[148])), e += i[18]), e += i[32], _.MD(n[149])) {
e += i[42];
var a = "";
_.MD(n[135]) || (a += _.MC(n[105])), a += [ i[51], _.MC(n[149]) ].join(""), _.MN(n[105], a), e += i[18];
}
return e += i[32], _.MD(n[150]) && (e += i[42], _.MN(n[115], [ i[172], _.F.entities(_.MC(n[150])), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[151]) && (e += i[42], _.MN(n[111], [ i[173], _.MC(n[151]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[152]) && (e += i[42], _.MN(n[112], _.MC(n[152])), e += i[18]), e += i[32], _.MD(n[153]) && (e += i[42], _.MN(n[116], [ i[174], _.MC(n[153]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[154]) && (e += i[1], _.MN(n[118], [ i[175], _.MC(n[154]), i[176], _.MC(n[155]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[156]) && (e += i[1], _.MN(n[118], [ _.MC(n[118]), i[177], _.MC(n[156]), i[176], _.MC(n[157]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[158]) && (e += i[1], _.MN(n[118], [ _.MC(n[118]), i[177], _.MC(n[158]), i[176], _.MC(n[159]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[160]) && (e += i[1], _.MN(n[118], [ _.MC(n[118]), i[177], _.MC(n[160]), i[176], _.MC(n[161]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[162]) && (e += i[1], _.MN(n[118], [ _.MC(n[118]), i[177], _.MC(n[162]), i[176], _.MC(n[163]), i[70] ].join("")), e += i[18]), e += i[32], _.MJ(_.MC(n[164])) && _.MK(_.MC(n[165])) && (e += i[42], _.MN(n[117], [ i[178], _.MC(n[164]), i[70] ].join("")), e += i[18]), e += i[17], _.MD(n[166]) && (e += i[42], _.MN(n[136], [ i[179], _.MC(n[166]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[167]) && (e += i[42], _.MN(n[137], [ i[180], _.MC(n[167]), i[70] ].join("")), e += i[18]), e += [ i[181], _.MC(n[110]), i[182], _.MC(n[105]), i[183], _.MC(n[113]), i[42], _.MC(n[106]), i[42], _.MC(n[111]), i[42], _.MC(n[112]), i[42], _.MC(n[115]), i[1], _.MC(n[116]), i[42], _.MC(n[118]), i[42], _.MC(n[117]), i[42], _.MC(n[136]), i[42], _.MC(n[137]), i[46] ].join(""), _.MD(n[128]) && (e += [ i[184], _.MB(n[128]), i[185] ].join("")), e += i[57], _.MJ(_.MC(n[110]) + "" == "input") ? e += [ i[186], _.MC(n[107]), i[187] ].join("") :(e += [ i[188], _.MC(n[107]), i[189] ].join(""), _.MD(n[108]) && (e += i[190], _.MD(n[168]) && (e += i[191]), e += [ i[192], _.MC(n[108]), i[189] ].join("")), e += i[101], _.MD(n[170]) && (e += i[193], _.MJ(_.MC(n[169])) && (_.MJ(_.MC(n[169]) + "" == "nl") || _.MJ(_.MC(n[169]) + "" == "be")) && _.MJ(_.track_experiment("eDUIFBUNAAUTCKWFQTcYRJELWe")) && (e += i[194]), e += i[59]), e += [ i[195], _.MC(n[110]), i[81] ].join("")), e += i[18], _r_(e);
}
function h(e) {
return _i_("3bb:8afc5093"), e += i[17], _.MN("fe_score", _.MI(_.MB(n[25])) + _.MI(0)), e += i[41], _.MN("fe_score_word_name", ""), e += i[18], _.MJ(_.MB(n[58]) >= 0) && _.MJ(_.MB(n[58]) < 3) && (e += i[42], _.MN("fe_score_word_name", "very_poor"), e += i[18]), e += i[32], _.MJ(_.MB(n[58]) >= 3) && _.MJ(_.MB(n[58]) < 4) && (e += i[42], _.MN("fe_score_word_name", "poor"), e += i[18]), e += i[32], _.MJ(_.MB(n[58]) >= 4) && _.MJ(_.MB(n[58]) < 5) && (e += i[42], _.MN("fe_score_word_name", "disappointing"), e += i[18]), e += i[32], _.MJ(_.MB(n[58]) >= 5) && _.MJ(_.MB(n[58]) < 5.6) && (e += i[42], _.MN("fe_score_word_name", "average_passable"), e += i[18]), e += i[32], _.MJ(_.MB(n[58]) >= 5.6) && _.MJ(_.MB(n[58]) < 6) && (e += i[42], _.MN("fe_score_word_name", "average_okay"), e += i[18]), e += i[32], _.MJ(_.MB(n[58]) >= 6) && _.MJ(_.MB(n[58]) < 7) && (e += i[42], _.MN("fe_score_word_name", "pleasant"), e += i[18]), e += i[32], _.MJ(_.MB(n[58]) >= 7) && _.MJ(_.MB(n[58]) < 8) && (e += i[42], _.MN("fe_score_word_name", "good"), e += i[18]), e += i[32], _.MJ(_.MB(n[58]) >= 8) && _.MJ(_.MB(n[58]) < 8.6) && (e += i[42], _.MN("fe_score_word_name", "very_good"), e += i[18]), e += i[32], _.MJ(_.MB(n[58]) >= 8.6) && _.MJ(_.MB(n[58]) < 9) && (e += i[42], _.MN("fe_score_word_name", "fabulous"), e += i[18]), e += i[32], _.MJ(_.MB(n[58]) >= 9) && _.MJ(_.MB(n[58]) < 9.5) && (e += i[42], _.MN("fe_score_word_name", "superb"), e += i[18]), e += i[32], _.MJ(_.MB(n[58]) >= 9.5) && (e += i[42], _.MN("fe_score_word_name", "exceptional"), e += i[18]), e += i[41], _.MN("fe_classname", ""), e += i[18], _.MJ(_.MB(n[58]) >= 0) && _.MJ(_.MB(n[58]) <= 10) && (e += i[57], _.MN("fe_classname", _.MB(n[59]) + "" + _.MB(n[60]) + _.MB(n[61])), e += i[58], _.MJ(_.MB(n[58]) < 7) && (e += i[59], _.MN("fe_classname", _.MB(n[62]) + " " + _.MB(n[59]) + "low" + _.MB(n[61])), e += i[42]), e += i[32]), e += i[18], _r_(e);
}
function f(e) {
_i_("3bb:c85b72c2"), e += i[17], _.MN(n[105], i[157]), e += i[18], _.MN(n[106], void 0), e += i[18], _.MN(n[107], i[158]), e += i[18], _.MN(n[108], void 0), e += i[18], _.MN(n[109], void 0), e += i[18], _.MN(n[110], i[159]), e += i[18], _.MN(n[111], void 0), e += i[18], _.MN(n[112], void 0), e += i[18], _.MN(n[113], void 0), e += i[18], _.MN(n[114], void 0), e += i[18], _.MN(n[115], void 0), e += i[18], _.MN(n[116], void 0), e += i[18], _.MN(n[117], void 0), e += i[18], _.MN(n[118], void 0), e += i[41], _.MN(n[119], i[160]), e += i[32], _.MN(n[120], void 0), e += i[18], _.MN(n[121], void 0), e += i[18], _.MN(n[122], void 0), e += i[18], _.MN(n[123], void 0), e += i[18], _.MN(n[124], void 0), e += i[18], _.MN(n[125], void 0), e += i[18], _.MN(n[126], void 0), e += i[18], _.MN(n[127], void 0), e += i[32], _.MD(n[129]) ? (e += i[42], _.MN(n[128], _.MB(n[129])), e += i[18]) :(e += i[42], _.MN(n[128], void 0), e += i[18]), e += i[32], _.MN(n[130], void 0), e += i[18], _.MN(n[131], void 0), e += i[32], _.MN(n[132], i[161]), e += i[18], _.MN(n[133], i[161]), e += i[18], _.MN(n[134], i[161]), e += i[32], _.MN(n[135], i[161]), e += i[41], _.MN(n[136], void 0), e += i[18], _.MN(n[137], void 0), e += i[32], _.MD(n[138]) && (e += i[42], _.MN(n[107], _.MC(n[138])), e += i[18]), e += i[32], _.MD(n[139]) && (e += i[42], _.MN(n[108], _.MC(n[139])), e += i[18]), e += i[32], _.MD(n[140]) && (e += i[42], _.MN(n[109], _.MC(n[140])), e += i[18]), e += i[32];
var t = _.MC(n[141]);
if (_.MJ(t + "" == "primary") ? (e += i[59], _.MN(n[105], [ _.MC(n[105]), i[162] ].join("")), e += i[42]) :_.MJ(t + "" == "secondary") ? (e += i[59], _.MN(n[105], [ _.MC(n[105]), i[163] ].join("")), e += i[42]) :_.MJ(t + "" == "warning") ? (e += i[59], _.MN(n[105], [ _.MC(n[105]), i[164] ].join("")), e += i[42]) :_.MJ(t + "" == "disabled") ? (e += i[59], _.MN(n[105], [ _.MC(n[105]), i[165] ].join("")), e += i[42]) :_.MJ(t + "" == "primary-small") ? (e += i[59], _.MN(n[105], [ _.MC(n[105]), i[166] ].join("")), e += i[42]) :_.MJ(t + "" == "secondary-small") ? (e += i[59], _.MN(n[105], [ _.MC(n[105]), i[167] ].join("")), e += i[42]) :_.MJ(t + "" == "warning-small") ? (e += i[59], _.MN(n[105], [ _.MC(n[105]), i[168] ].join("")), e += i[42]) :_.MJ(t + "" == "primary-flat") && (e += i[59], _.MN(n[105], [ _.MC(n[105]), i[169] ].join("")), e += i[18]), e += i[32], _.MD(n[142]) && (e += i[42], _.MN(n[110], _.MC(n[142])), e += i[57], _.MJ(/^a$/i.test(_.MC(n[110]))) && _.MN(n[143], i[170]), e += i[42], _.MJ(/^input$/i.test(_.MC(n[110]))) && _.MN(n[144], i[170]), e += i[42], _.MJ(/^button$/i.test(_.MC(n[110]))) && _.MN(n[145], i[170]), e += i[18]), e += i[32], _.MD(n[146]) && (e += i[42], _.MN(n[106], [ i[69], _.MC(n[146]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[147]) && (e += i[42], _.MN(n[113], [ i[171], _.MC(n[147]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[148]) && (e += i[42], _.MN(n[135], _.MC(n[148])), e += i[18]), e += i[32], _.MD(n[149])) {
e += i[42];
var a = "";
_.MD(n[135]) || (a += _.MC(n[105])), a += [ i[51], _.MC(n[149]) ].join(""), _.MN(n[105], a), e += i[18];
}
return e += i[32], _.MD(n[150]) && (e += i[42], _.MN(n[115], [ i[172], _.F.entities(_.MC(n[150])), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[151]) && (e += i[42], _.MN(n[111], [ i[173], _.MC(n[151]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[152]) && (e += i[42], _.MN(n[112], _.MC(n[152])), e += i[18]), e += i[32], _.MD(n[153]) && (e += i[42], _.MN(n[116], [ i[174], _.MC(n[153]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[154]) && (e += i[1], _.MN(n[118], [ i[175], _.MC(n[154]), i[176], _.MC(n[155]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[156]) && (e += i[1], _.MN(n[118], [ _.MC(n[118]), i[177], _.MC(n[156]), i[176], _.MC(n[157]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[158]) && (e += i[1], _.MN(n[118], [ _.MC(n[118]), i[177], _.MC(n[158]), i[176], _.MC(n[159]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[160]) && (e += i[1], _.MN(n[118], [ _.MC(n[118]), i[177], _.MC(n[160]), i[176], _.MC(n[161]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[162]) && (e += i[1], _.MN(n[118], [ _.MC(n[118]), i[177], _.MC(n[162]), i[176], _.MC(n[163]), i[70] ].join("")), e += i[18]), e += i[32], _.MJ(_.MC(n[164])) && _.MK(_.MC(n[165])) && (e += i[42], _.MN(n[117], [ i[178], _.MC(n[164]), i[70] ].join("")), e += i[18]), e += i[17], _.MD(n[166]) && (e += i[42], _.MN(n[136], [ i[179], _.MC(n[166]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[167]) && (e += i[42], _.MN(n[137], [ i[180], _.MC(n[167]), i[70] ].join("")), e += i[18]), e += [ i[181], _.MC(n[110]), i[182], _.MC(n[105]), i[183], _.MC(n[113]), i[42], _.MC(n[106]), i[42], _.MC(n[111]), i[42], _.MC(n[112]), i[42], _.MC(n[115]), i[1], _.MC(n[116]), i[42], _.MC(n[118]), i[42], _.MC(n[117]), i[42], _.MC(n[136]), i[42], _.MC(n[137]), i[46] ].join(""), _.MD(n[128]) && (e += [ i[184], _.MB(n[128]), i[185] ].join("")), e += i[57], _.MJ(_.MC(n[110]) + "" == "input") ? e += [ i[186], _.MC(n[107]), i[187] ].join("") :(e += [ i[188], _.MC(n[107]), i[189] ].join(""), _.MD(n[108]) && (e += i[190], _.MD(n[168]) && (e += i[191]), e += [ i[192], _.MC(n[108]), i[189] ].join("")), e += i[101], _.MD(n[170]) && (e += i[193], _.MJ(_.MC(n[169])) && (_.MJ(_.MC(n[169]) + "" == "nl") || _.MJ(_.MC(n[169]) + "" == "be")) && _.MJ(_.track_experiment("eDUIFBUNAAUTCKWFQTcYRJELWe")) && (e += i[194]), e += i[59]), e += [ i[195], _.MC(n[110]), i[81] ].join("")), e += i[18], _r_(e);
}
function m(e) {
_i_("3bb:7c45498e"), e += i[17], _.MN("distance_to_hub", 0), e += i[18], _.MN("property_distance_to_airport", 0), e += i[18], _.MN("property_distance_to_train", 0), e += i[18], _.MN("property_distance_to_metro", 0), e += i[18], _.MN("property_distance_from_city_center", 0), e += i[18], _.MN("fe_show_overlay", 0), e += i[19], _.MJ(_.MB(n[8]) > 4) && _.MJ(_.MB(n[9])) && (e += i[20], _.MN("fe_show_overlay", 1), e += i[18]), e += i[21];
var r = _.MC(n[10]) || [];
a.unshift(null);
for (var o = 1, s = r.length; s >= o; o++) {
if (a[0] = r[o - 1], e += i[0], _.MN(n[11], [ i[22], _.MC(n[12]), i[23] ].join("")), e += i[0], _.MJ(_.MB(n[15]) + "" == "airport") && (e += i[1], _.MN(n[13], [ i[8], (a.unshift({
hub_name:_.MB(n[14])
}), t = _.ME(i[24], _.MB, _.MN, null), a.shift(), t), i[1] ].join("")), e += i[20]), e += i[20], _.MJ(_.MB(n[15]) + "" == "train_station") && (e += i[1], _.MN(n[16], [ i[8], (a.unshift({
hub_name:_.MB(n[17])
}), t = _.ME(i[24], _.MB, _.MN, null), a.shift(), t), i[1] ].join("")), e += i[20]), e += i[20], _.MJ(_.MB(n[15]) + "" == "metro") && (e += i[1], _.MN(n[18], [ i[8], (a.unshift({
hub_name:_.MB(n[17])
}), t = _.ME(i[24], _.MB, _.MN, null), a.shift(), t), i[1] ].join("")), e += i[20]), e += i[20], _.MJ(_.MB(n[15]) + "" == "city_centre")) {
e += i[1];
var l = "";
l += i[8], l += _.MJ(0 == _.MB(n[20])) ? [ i[25], _.ME(i[26], _.MB, _.MN, null), i[27] ].join("") :[ i[28], (a.unshift({
city_name:_.MB(n[21]),
measurement_unit:i[30],
num_distance:_.MB(n[12])
}), t = _.ME(i[29], _.MB, _.MN, null), a.shift(), t), i[31] ].join(""), l += i[1], _.MN(n[19], l), e += i[20];
}
e += i[32];
}
return a.shift(), e += [ i[33], _.MC(n[22]), i[34] ].join(""), _.MD(n[23]) && (e += [ i[35], _.STATIC_HOSTNAME(_.MB(n[23]), 0, 0, 0), i[36] ].join("")), e += i[37], _.MD(n[96]) && (e += i[38], a.unshift({
sample_size:_.MB(n[8]),
score:_.MB(n[9]),
style:i[122]
}), e = k(e), a.shift(), e += i[123]), e += i[124], e += _.MD(n[97]) ? [ i[125], _.MC(n[97]), i[126], _.MC(n[98]), i[127], _.MC(n[98]), i[128] ].join("") :[ i[129], _.MC(n[98]), i[27] ].join(""), e += i[130], (_.MJ(_.MB(n[99])) || _.MJ(_.MB(n[100]))) && (e += i[131], _.MD(n[99]) && (e += [ i[132], _.MC(n[99]), i[133] ].join("")), e += i[89], _.MD(n[100]) && (e += [ i[132], _.MC(n[100]), i[89] ].join("")), e += i[134], _.MD(n[19]) && (e += [ i[89], _.MC(n[19]), i[135] ].join("")), e += i[136]), e += i[46], _.MD(n[13]) && (e += [ i[137], _.MC(n[13]), i[138] ].join("")), e += i[46], _.MD(n[18]) && (e += [ i[139], _.MC(n[18]), i[138] ].join("")), e += i[46], _.MD(n[16]) && (e += [ i[140], _.MC(n[16]), i[141] ].join("")), e += [ i[142], _.ME(i[143], _.MB, _.MN, _.MO(_.MC(n[101]), null, i[143])), i[144], _.MC(n[102]), i[145] ].join(""), _.MD(n[103]) && (e += [ i[146], _.ME(i[147], _.MB, _.MN, null), i[148] ].join("")), e += i[149], _.MD(n[104]) ? e += [ i[150], _.ME(i[151], _.MB, _.MN, null), i[152] ].join("") :(e += i[8], e = N(e), e += i[1]), e += i[233], _r_(e);
}
function M(e) {
return _i_("3bb:1858dd40"), e += i[17], _.MN("fe_score", _.MI(_.MB(n[25])) + _.MI(0)), e += i[41], _.MN("fe_score_word_name", ""), e += i[18], _.MJ(_.MB(n[58]) >= 0) && _.MJ(_.MB(n[58]) < 3) && (e += i[42], _.MN("fe_score_word_name", "very_poor"), e += i[18]), e += i[32], _.MJ(_.MB(n[58]) >= 3) && _.MJ(_.MB(n[58]) < 4) && (e += i[42], _.MN("fe_score_word_name", "poor"), e += i[18]), e += i[32], _.MJ(_.MB(n[58]) >= 4) && _.MJ(_.MB(n[58]) < 5) && (e += i[42], _.MN("fe_score_word_name", "disappointing"), e += i[18]), e += i[32], _.MJ(_.MB(n[58]) >= 5) && _.MJ(_.MB(n[58]) < 5.6) && (e += i[42], _.MN("fe_score_word_name", "average_passable"), e += i[18]), e += i[32], _.MJ(_.MB(n[58]) >= 5.6) && _.MJ(_.MB(n[58]) < 6) && (e += i[42], _.MN("fe_score_word_name", "average_okay"), e += i[18]), e += i[32], _.MJ(_.MB(n[58]) >= 6) && _.MJ(_.MB(n[58]) < 7) && (e += i[42], _.MN("fe_score_word_name", "pleasant"), e += i[18]), e += i[32], _.MJ(_.MB(n[58]) >= 7) && _.MJ(_.MB(n[58]) < 8) && (e += i[42], _.MN("fe_score_word_name", "good"), e += i[18]), e += i[32], _.MJ(_.MB(n[58]) >= 8) && _.MJ(_.MB(n[58]) < 8.6) && (e += i[42], _.MN("fe_score_word_name", "very_good"), e += i[18]), e += i[32], _.MJ(_.MB(n[58]) >= 8.6) && _.MJ(_.MB(n[58]) < 9) && (e += i[42], _.MN("fe_score_word_name", "fabulous"), e += i[18]), e += i[32], _.MJ(_.MB(n[58]) >= 9) && _.MJ(_.MB(n[58]) < 9.5) && (e += i[42], _.MN("fe_score_word_name", "superb"), e += i[18]), e += i[32], _.MJ(_.MB(n[58]) >= 9.5) && (e += i[42], _.MN("fe_score_word_name", "exceptional"), e += i[18]), e += i[41], _.MN("fe_classname", ""), e += i[18], _.MJ(_.MB(n[58]) >= 0) && _.MJ(_.MB(n[58]) <= 10) && (e += i[57], _.MN("fe_classname", _.MB(n[59]) + "" + _.MB(n[60]) + _.MB(n[61])), e += i[58], _.MJ(_.MB(n[58]) < 7) && (e += i[59], _.MN("fe_classname", _.MB(n[62]) + " " + _.MB(n[59]) + "low" + _.MB(n[61])), e += i[42]), e += i[32]), e += i[18], _r_(e);
}
function g(e) {
_i_("3bb:de64e2ea"), e += i[17], _.MN("distance_to_hub", 0), e += i[18], _.MN("property_distance_to_airport", 0), e += i[18], _.MN("property_distance_to_train", 0), e += i[18], _.MN("property_distance_to_metro", 0), e += i[18], _.MN("property_distance_from_city_center", 0), e += i[18], _.MN("fe_show_overlay", 0), e += i[19], _.MJ(_.MB(n[8]) > 4) && _.MJ(_.MB(n[9])) && (e += i[20], _.MN("fe_show_overlay", 1), e += i[18]), e += i[21];
var r = c, o = l, s = d, l = _.MC(n[10]) || [];
a.unshift(null);
for (var c = 1, d = l.length; d >= c; c++) {
if (a[0] = l[c - 1], e += i[0], _.MN(n[11], [ i[22], _.MC(n[12]), i[23] ].join("")), e += i[0], _.MJ(_.MB(n[15]) + "" == "airport") && (e += i[1], _.MN(n[13], [ i[8], (a.unshift({
hub_name:_.MB(n[14])
}), t = _.ME(i[24], _.MB, _.MN, null), a.shift(), t), i[1] ].join("")), e += i[20]), e += i[20], _.MJ(_.MB(n[15]) + "" == "train_station") && (e += i[1], _.MN(n[16], [ i[8], (a.unshift({
hub_name:_.MB(n[17])
}), t = _.ME(i[24], _.MB, _.MN, null), a.shift(), t), i[1] ].join("")), e += i[20]), e += i[20], _.MJ(_.MB(n[15]) + "" == "metro") && (e += i[1], _.MN(n[18], [ i[8], (a.unshift({
hub_name:_.MB(n[17])
}), t = _.ME(i[24], _.MB, _.MN, null), a.shift(), t), i[1] ].join("")), e += i[20]), e += i[20], _.MJ(_.MB(n[15]) + "" == "city_centre")) {
e += i[1];
var b = "";
b += i[8], b += _.MJ(0 == _.MB(n[20])) ? [ i[25], _.ME(i[26], _.MB, _.MN, null), i[27] ].join("") :[ i[28], (a.unshift({
city_name:_.MB(n[21]),
measurement_unit:i[30],
num_distance:_.MB(n[12])
}), t = _.ME(i[29], _.MB, _.MN, null), a.shift(), t), i[31] ].join(""), b += i[1], _.MN(n[19], b), e += i[20];
}
e += i[32];
}
return a.shift(), c = r, l = o, d = s, e += [ i[33], _.MC(n[22]), i[34] ].join(""), _.MD(n[23]) && (e += [ i[35], _.STATIC_HOSTNAME(_.MB(n[23]), 0, 0, 0), i[36] ].join("")), e += i[37], _.MD(n[96]) && (e += i[38], a.unshift({
sample_size:_.MB(n[8]),
score:_.MB(n[9]),
style:i[122]
}), e = x(e), a.shift(), e += i[123]), e += i[124], e += _.MD(n[97]) ? [ i[125], _.MC(n[97]), i[126], _.MC(n[98]), i[127], _.MC(n[98]), i[128] ].join("") :[ i[129], _.MC(n[98]), i[27] ].join(""), e += i[130], (_.MJ(_.MB(n[99])) || _.MJ(_.MB(n[100]))) && (e += i[131], _.MD(n[99]) && (e += [ i[132], _.MC(n[99]), i[133] ].join("")), e += i[89], _.MD(n[100]) && (e += [ i[132], _.MC(n[100]), i[89] ].join("")), e += i[134], _.MD(n[19]) && (e += [ i[89], _.MC(n[19]), i[135] ].join("")), e += i[136]), e += i[46], _.MD(n[13]) && (e += [ i[137], _.MC(n[13]), i[138] ].join("")), e += i[46], _.MD(n[18]) && (e += [ i[139], _.MC(n[18]), i[138] ].join("")), e += i[46], _.MD(n[16]) && (e += [ i[140], _.MC(n[16]), i[141] ].join("")), e += [ i[142], _.ME(i[143], _.MB, _.MN, _.MO(_.MC(n[101]), null, i[143])), i[144], _.MC(n[102]), i[145] ].join(""), _.MD(n[103]) && (e += [ i[146], _.ME(i[147], _.MB, _.MN, null), i[148] ].join("")), e += i[149], _.MD(n[104]) ? e += [ i[150], _.ME(i[151], _.MB, _.MN, null), i[152] ].join("") :(e += i[8], e = E(e), e += i[1]), e += i[233], _r_(e);
}
function v(e) {
return _i_("3bb:0b72f251"), e += i[18], _.MN("fe_review_score", _.MI(_.MB(n[25])) + _.MI(0)), e += i[41], _.MN("fe_review_score_word_tag", _.MB(n[38]) || "p"), e += i[41], _.MN("fe_review_score_word_class_list", "review-score-word"), e += i[41], _.MJ(_.MB(n[40]) >= 7) && (e += i[20], _.MN("fe_review_score_word_class_list", _.MB(n[39]) + " review-score-word--highlighted"), e += i[18]), e += i[32], _.MD(n[41]) && (e += i[20], _.MN("fe_review_score_word_class_list", _.MB(n[39]) + " " + _.MB(n[41])), e += i[18]), e += i[17], _.MD(n[48]) ? (e += i[20], _.MJ(_.MB(n[40]) >= 0) && _.MJ(_.MB(n[40]) < 3) && (e += i[47], _.MN("fe_review_score_word_copy", _.MB(n[42])), e += i[48]), e += i[20], _.MJ(_.MB(n[40]) >= 3) && _.MJ(_.MB(n[40]) < 4) && (e += i[47], _.MN("fe_review_score_word_copy", _.MB(n[43])), e += i[49]), e += i[20], _.MJ(_.MB(n[40]) >= 4) && _.MJ(_.MB(n[40]) < 5) && (e += i[47], _.MN("fe_review_score_word_copy", _.MB(n[44])), e += i[50]), e += i[20], _.MJ(_.MB(n[40]) >= 5) && _.MJ(_.MB(n[40]) < 5.6) && (e += i[51], _.MN("fe_review_score_word_copy", _.MB(n[45])), e += i[51]), e += i[20], _.MJ(_.MB(n[40]) >= 5.6) && _.MJ(_.MB(n[40]) < 6) && (e += i[51], _.MN("fe_review_score_word_copy", _.MB(n[46])), e += i[52]), e += i[20], _.MJ(_.MB(n[40]) >= 6) && _.MJ(_.MB(n[40]) < 7) && (e += i[47], _.MN("fe_review_score_word_copy", _.MB(n[47])), e += i[53]), e += i[18]) :(e += i[20], _.MJ(_.MB(n[40]) >= 0) && _.MJ(_.MB(n[40]) < 7) && (e += i[51], _.MN("fe_review_score_word_copy", _.MB(n[49])), e += i[51]), e += i[18]), e += i[18], _.MJ(_.MB(n[40]) >= 7) && _.MJ(_.MB(n[40]) < 8) && (e += i[47], _.MN("fe_review_score_word_copy", _.MB(n[50])), e += i[54]), e += i[18], _.MJ(_.MB(n[40]) >= 8) && _.MJ(_.MB(n[40]) < 8.6) && (e += i[51], _.MN("fe_review_score_word_copy", _.MB(n[51])), e += i[51]), e += i[18], _.MJ(_.MB(n[40]) >= 8.6) && _.MJ(_.MB(n[40]) < 9) && (e += i[51], _.MN("fe_review_score_word_copy", _.MB(n[52])), e += i[55]), e += i[32], _.MJ(_.MB(n[40]) >= 9) && _.MJ(_.MB(n[40]) < 9.5) && (e += i[51], _.MN(n[53], _.ME(i[56], _.MB, _.MN, null)), e += i[51]), e += i[41], _.MJ(_.MB(n[40]) >= 9.5) && (e += i[51], _.MN("fe_review_score_word_copy", _.MB(n[54])), e += i[51]), e += i[41], e += i[18], _r_(e);
}
function y(e) {
return _i_("3bb:6069045f"), e += i[18], _.MN("fe_review_score", _.MI(_.MB(n[25])) + _.MI(0)), e += i[41], _.MN("fe_review_score_word_tag", _.MB(n[38]) || "p"), e += i[41], _.MN("fe_review_score_word_class_list", "review-score-word"), e += i[41], _.MJ(_.MB(n[40]) >= 7) && (e += i[20], _.MN("fe_review_score_word_class_list", _.MB(n[39]) + " review-score-word--highlighted"), e += i[18]), e += i[32], _.MD(n[41]) && (e += i[20], _.MN("fe_review_score_word_class_list", _.MB(n[39]) + " " + _.MB(n[41])), e += i[18]), e += i[17], _.MD(n[48]) ? (e += i[20], _.MJ(_.MB(n[40]) >= 0) && _.MJ(_.MB(n[40]) < 3) && (e += i[47], _.MN("fe_review_score_word_copy", _.MB(n[42])), e += i[48]), e += i[20], _.MJ(_.MB(n[40]) >= 3) && _.MJ(_.MB(n[40]) < 4) && (e += i[47], _.MN("fe_review_score_word_copy", _.MB(n[43])), e += i[49]), e += i[20], _.MJ(_.MB(n[40]) >= 4) && _.MJ(_.MB(n[40]) < 5) && (e += i[47], _.MN("fe_review_score_word_copy", _.MB(n[44])), e += i[50]), e += i[20], _.MJ(_.MB(n[40]) >= 5) && _.MJ(_.MB(n[40]) < 5.6) && (e += i[51], _.MN("fe_review_score_word_copy", _.MB(n[45])), e += i[51]), e += i[20], _.MJ(_.MB(n[40]) >= 5.6) && _.MJ(_.MB(n[40]) < 6) && (e += i[51], _.MN("fe_review_score_word_copy", _.MB(n[46])), e += i[52]), e += i[20], _.MJ(_.MB(n[40]) >= 6) && _.MJ(_.MB(n[40]) < 7) && (e += i[47], _.MN("fe_review_score_word_copy", _.MB(n[47])), e += i[53]), e += i[18]) :(e += i[20], _.MJ(_.MB(n[40]) >= 0) && _.MJ(_.MB(n[40]) < 7) && (e += i[51], _.MN("fe_review_score_word_copy", _.MB(n[49])), e += i[51]), e += i[18]), e += i[18], _.MJ(_.MB(n[40]) >= 7) && _.MJ(_.MB(n[40]) < 8) && (e += i[47], _.MN("fe_review_score_word_copy", _.MB(n[50])), e += i[54]), e += i[18], _.MJ(_.MB(n[40]) >= 8) && _.MJ(_.MB(n[40]) < 8.6) && (e += i[51], _.MN("fe_review_score_word_copy", _.MB(n[51])), e += i[51]), e += i[18], _.MJ(_.MB(n[40]) >= 8.6) && _.MJ(_.MB(n[40]) < 9) && (e += i[51], _.MN("fe_review_score_word_copy", _.MB(n[52])), e += i[55]), e += i[32], _.MJ(_.MB(n[40]) >= 9) && _.MJ(_.MB(n[40]) < 9.5) && (e += i[51], _.MN(n[53], _.ME(i[56], _.MB, _.MN, null)), e += i[51]), e += i[41], _.MJ(_.MB(n[40]) >= 9.5) && (e += i[51], _.MN("fe_review_score_word_copy", _.MB(n[54])), e += i[51]), e += i[41], e += i[18], _r_(e);
}
function B(e) {
if (_i_("3bb:0a26ed62"), e += i[21], _.MD(n[225])) {
e += i[46], _.MD(n[199]) && (e += i[9], _.MN(n[198], [ i[175], _.MB(n[199]), i[176], _.MB(n[200]), i[70] ].join("")), e += i[1]), e += i[46], _.MD(n[201]) && (e += i[9], _.MN(n[198], [ _.MB(n[198]), i[177], _.MB(n[201]), i[176], _.MB(n[202]), i[70] ].join("")), e += i[1]), e += i[46], _.MD(n[203]) && (e += i[9], _.MN(n[198], [ _.MB(n[198]), i[177], _.MB(n[203]), i[176], _.MB(n[204]), i[70] ].join("")), e += i[1]), e += i[46], _.MD(n[205]) && (e += i[9], _.MN(n[198], [ _.MB(n[198]), i[177], _.MB(n[205]), i[176], _.MB(n[206]), i[70] ].join("")), e += i[1]), e += i[46], _.MD(n[207]) && (e += i[9], _.MN(n[198], [ _.MB(n[198]), i[177], _.MB(n[207]), i[176], _.MB(n[208]), i[70] ].join("")), e += i[1]), e += i[46], _.MD(n[209]) && (e += i[239]), e += i[240];
var t = _.MB(n[210]);
_.MJ(t + "" == "small") && (e += i[241]), (_.MJ(_.MB(n[211])) || _.MJ(_.MB(n[212])) || _.MJ(_.MB(n[213]))) && (e += i[242]), _.MD(n[214]) && (e += i[243]), _.MJ(_.MB(n[215])) && (e += [ i[244], _.MC(n[215]), _.MC(n[216]), i[51] ].join("")), _.MJ(_.MB(n[211])) && _.MJ(_.MB(n[217])) && (e += [ i[245], _.MC(n[217]), i[51] ].join("")), _.MJ(_.MC(n[218]) + "" == "book") && (e += i[246]), e += [ _.MC(n[219]), i[247] ].join(""), _.MD(n[220]) && (e += [ i[69], _.MC(n[220]), i[248] ].join("")), _.MD(n[198]) && (e += [ _.MC(n[198]), i[51] ].join("")), _.MD(n[221]) && (e += i[249]), e += i[250], _.MD(n[211]) ? e += [ i[251], _.MC(n[211]), i[252] ].join("") :_.MD(n[212]) ? e += [ i[253], _.MC(n[212]), i[254] ].join("") :_.MD(n[213]) && (e += [ i[255], _.MC(n[213]), i[256] ].join("")), _.MD(n[222]) && (e += i[257]), _.MD(n[223]) && (e += [ i[258], _.MC(n[223]), i[259] ].join("")), _.MD(n[225]) && (e += i[260], _.MD(n[224]) && (e += i[261]), e += [ i[254], _.MC(n[225]), i[262] ].join("")), _.MD(n[222]) && (e += [ i[263], _.MC(n[222]), i[262] ].join("")), _.MD(n[222]) && (e += i[264]), _.MD(n[214]) && (e += i[265]), _.MD(n[224]) && (e += [ i[266], _.MC(n[226]), i[267], _.MC(n[227]), i[268], _.MC(n[228]), i[269], _.MB(n[229]), i[270], _.MB(n[230]), i[271] ].join("")), e += i[264], _.MD(n[209]) && (e += i[264]), e += i[18];
}
return e += i[17], _.MN(n[215], void 0), e += i[18], _.MN(n[211], void 0), e += i[18], _.MN(n[212], void 0), e += i[18], _.MN(n[213], void 0), e += i[18], _.MN(n[217], void 0), e += i[18], _.MN(n[223], void 0), e += i[18], _.MN(n[225], void 0), e += i[18], _.MN(n[222], void 0), e += i[18], _.MN(n[214], void 0), e += i[18], _.MN(n[220], void 0), e += i[18], _.MN(n[219], void 0), e += i[18], _.MN(n[210], void 0), e += i[32], _.MN(n[199], void 0), e += i[18], _.MN(n[200], void 0), e += i[18], _.MN(n[201], void 0), e += i[18], _.MN(n[202], void 0), e += i[18], _.MN(n[203], void 0), e += i[18], _.MN(n[204], void 0), e += i[18], _.MN(n[205], void 0), e += i[18], _.MN(n[206], void 0), e += i[18], _.MN(n[207], void 0), e += i[18], _.MN(n[208], void 0), e += i[32], _.MN(n[216], void 0), e += i[32], _.MN(n[198], void 0), e += i[18], _.MN("fe_banner__banners_count", _.MI(_.MB(n[231])) + _.MI(1)), e += i[32], _.MJ(_.MC(n[218]) + "" == "book") && _.MJ(_.track_experiment_stage("bp_banner_module_normalize_banners", 2)) ? e += i[18] :_.MJ(_.track_experiment_stage("bp_banner_module_normalize_banners", 1)) && (e += i[18]), e += i[18], _r_(e);
}
function w(e) {
_i_("3bb:160fdc32"), e += i[32];
var t = "";
t += i[1], t += _.MD(n[173]) ? _.MC(n[173]) :i[200], t += i[18], _.MN(n[172], t), e += i[32];
var t = "";
t += i[1], t += _.MD(n[175]) ? _.MC(n[175]) :i[201], t += i[18], _.MN(n[174], t), e += i[32];
var t = "";
t += i[1], t += _.MD(n[177]) ? _.MC(n[177]) :i[202], t += i[18], _.MN(n[176], t), e += i[32];
var t = "";
return t += _.MD(n[179]) ? _.MC(n[179]) :i[203], _.MN(n[178], t), e += [ i[204], _.MC(n[180]), i[205], _.MC(n[172]), i[206], _.MC(n[174]), i[207], _.STATIC_HOSTNAME("/static/img/ajax-loaders/" + _.MB(n[178]), 0, 0, 0), i[208], _.MC(n[176]), i[209] ].join(""), e += _.MD(n[181]) ? [ i[210], _.MC(n[181]), i[211] ].join("") :[ i[210], _.ME(i[212], _.MB, _.MN, null), i[213] ].join(""), e += i[214], _r_(e);
}
function C(e) {
_i_("3bb:76e3b3ec"), e += i[32];
var t = "";
t += i[1], t += _.MD(n[173]) ? _.MC(n[173]) :i[200], t += i[18], _.MN(n[172], t), e += i[32];
var t = "";
t += i[1], t += _.MD(n[175]) ? _.MC(n[175]) :i[201], t += i[18], _.MN(n[174], t), e += i[32];
var t = "";
t += i[1], t += _.MD(n[177]) ? _.MC(n[177]) :i[202], t += i[18], _.MN(n[176], t), e += i[32];
var t = "";
return t += _.MD(n[179]) ? _.MC(n[179]) :i[203], _.MN(n[178], t), e += [ i[204], _.MC(n[180]), i[205], _.MC(n[172]), i[206], _.MC(n[174]), i[207], _.STATIC_HOSTNAME("/static/img/ajax-loaders/" + _.MB(n[178]), 0, 0, 0), i[208], _.MC(n[176]), i[209] ].join(""), e += _.MD(n[181]) ? [ i[210], _.MC(n[181]), i[211] ].join("") :[ i[210], _.ME(i[212], _.MB, _.MN, null), i[213] ].join(""), e += i[214], _r_(e);
}
function k(e) {
_i_("3bb:c2bedfda"), e += i[39], _.MJ(_.MC(n[24])) && _.MJ(/,/.test(_.MB(n[25]))) && (e += i[40]), e += i[41], _.MJ(_.MB(n[26])) || _.MJ(/,/.test(_.MB(n[25]))) ? (e += i[42], _.MN("fe_formatted_score", _.MB(n[25])), e += i[18]) :(e += i[42], _.MN("fe_formatted_score", _.format_review_score_plain(_.MI(0) + _.MI(_.MB(n[25])))), e += i[18]), e += i[32];
var r = "";
r += i[30], r += _.MJ(_.MB(n[28])) ? _.MB(n[28]) :i[43], r += i[30], _.MN(n[27], r), e += i[32];
var r = "";
r += i[30], _.MJ(_.MB(n[30])) ? (r += i[30], r += _.MJ(_.MB(n[30]) + "" != "none") && _.MJ(_.MB(n[27]) + "" == "none") ? i[44] :[ i[30], _.MB(n[30]), i[30] ].join(""), r += i[30]) :r += i[43], r += i[30], _.MN(n[29], r), e += i[41];
var r = "";
r += i[30], (_.MJ(_.MB(n[30])) && _.MJ(_.MB(n[30]) + "" == "auto") || _.MK(_.MB(n[30]))) && _.MJ(_.MB(n[32])) ? (r += i[30], _.MN("fe_formatted_sample_size", _.format_number(_.MB(n[32]))), r += [ i[30], (a.unshift({
num_reviews:_.MB(n[33])
}), t = _.VP(i[45], _.MO(_.MI(_.MC(n[32])) + _.MI(0), null, i[45])), a.shift(), t), i[30] ].join("")) :_.MJ(_.MB(n[30]) + "" != "none") && _.MJ(_.MB(n[30]) + "" != "auto") && (r += [ i[30], _.MB(n[30]), i[30] ].join("")), r += i[30], _.MN(n[31], r), e += i[41], _.MN("fe_is_alt_version", _.MJ(_.MB(n[34]) + "" == "right")), e += i[17], _.MJ(_.MC(n[37])) && (e += i[1], _.MJ(_.track_experiment("ZCPQLOLOLOCcBUKZaZXeIJNZGCTKe")), e += i[46], (_.MJ(_.MC(n[35])) || _.MJ(_.MC(n[36]))) && _.MJ(_.MB(n[32]) > 50) && _.MJ(_.track_experiment_stage("cce_www_sr_hp_hotel_review_buckets", 1)), e += i[46], _.MJ(_.MC(n[35])) && _.MJ(_.MB(n[32]) > 50) && _.MJ(_.track_experiment_stage("cce_www_sr_hp_hotel_review_buckets", 2)), e += i[46], _.MJ(_.MC(n[36])) && _.MJ(_.MB(n[32]) > 50) && _.MJ(_.track_experiment_stage("cce_www_sr_hp_hotel_review_buckets", 3)), e += i[18]), e += i[41], a.unshift({
low_score_adjectives:_.MB(n[48]),
score:_.MI(0) + _.MI(_.MB(n[25]))
}), e = v(e), a.shift(), e += i[32];
var r = "";
r += i[30], _.MJ(_.MB(n[28])) && _.MJ(_.MB(n[28]) + "" == "auto") || (_.MK(_.MB(n[28])) || _.MJ(_.MB(n[28]) + "" == "none")) && _.MJ(_.MB(n[31]) + "" != "") ? r += [ i[30], _.MB(n[53]), i[30] ].join("") :_.MJ(_.MB(n[28])) && _.MJ(_.MB(n[28]) + "" != "none") && (r += [ i[30], _.MB(n[28]), i[30] ].join("")), r += i[30], _.MN(n[55], r), e += i[32], _.MD(n[55]) && (e += i[42], _.MN("fe_widget_text", _.MB(n[56]) + "" + _.MB(n[55]) + _.MB(n[57])), e += i[18]), e += i[41], _.MN("score_only", _.MJ(_.MB(n[55]) + "" == "") && _.MJ(_.MB(n[31]) + "" == "")), e += i[39], a.unshift({
prefix:i[60],
score:_.MI(0) + _.MI(_.MB(n[25]))
}), e = h(e), a.shift(), e += i[18], _.MN("fe_widget_class", _.MB(n[62])), e += i[32], _.MJ(_.MB(n[25]) < 2.5) && (e += i[42], _.MN("fe_widget_class", "review-score-widget__empty"), e += i[18]), e += i[17];
var r = "";
_.MD(n[64]) && (r += [ i[60], _.MB(n[64]), i[51] ].join("")), _.MD(n[65]) && (r += i[61]), _.MN(n[63], r), e += i[17];
var r = "";
_.MJ(_.MB(n[67])) && _.MK(_.MB(n[65])) && (r += [ i[60], _.MB(n[67]), i[51] ].join("")), _.MN(n[66], r), e += i[17];
var r = "";
_.MJ(_.MB(n[34]) + "" == "right") && _.MK(_.MB(n[65])) && (r += [ i[60], _.MB(n[34]), i[51] ].join("")), _.MN(n[68], r), e += i[17];
var r = "";
_.MJ(_.MB(n[70]) + "" == "smaller") ? r += i[62] :_.MJ(_.MB(n[70]) + "" == "small") ? r += i[63] :_.MJ(_.MB(n[70]) + "" == "large") ? r += i[64] :_.MJ(_.MB(n[70]) + "" == "larger") && (r += i[65]), _.MN(n[69], r), e += i[41];
var r = "";
(_.MJ(_.MB(n[64]) + "" == "outlined") || _.MJ(_.MB(n[64]) + "" == "text-only")) && (r += [ _.MB(n[64]), i[51] ].join("")), _.MN(n[71], r), e += i[41];
var r = "";
r += [ i[66], _.MB(n[72]), i[51], _.MB(n[63]), i[51], _.MB(n[66]), i[51], _.MB(n[68]), i[51], _.MB(n[69]), i[51] ].join(""), _.MK(_.MB(n[31])) && (r += i[67]), r += i[51], _.MD(n[73]) && (r += i[68]), r += i[51], _.MD(n[74]) && (r += [ i[51], _.MB(n[74]) ].join("")), r += i[51], _.MN(n[72], r), e += i[41];
var r = "";
_.MD(n[76]) && (r += [ i[69], _.MB(n[76]), i[70] ].join("")), _.MN(n[75], r), e += i[71], e = s(e), e += i[32], e += i[32];
var r = "";
r += i[42], _.MD(n[55]) && (r += i[72], _.MD(n[79]) ? (r += [ i[73], _.MB(n[79]), i[70] ].join(""), _.MD(n[80]) && (r += [ i[74], _.MB(n[80]), i[70] ].join(""))) :r += i[75], r += [ i[76], (a.unshift({
rating_adjective:_.MB(n[81])
}), t = _.ME(i[77], _.MB, _.MN, null), a.shift(), t), i[78], _.MB(n[55]), i[79] ].join(""), r += _.MD(n[79]) ? i[80] :i[75], r += i[81]), r += i[18], _.MN(n[78], r), e += i[32];
var r = "";
r += i[42], _.MD(n[31]) && (r += i[72], _.MD(n[83]) ? (r += [ i[73], _.MB(n[83]), i[70] ].join(""), _.MD(n[84]) && (r += [ i[74], _.MB(n[84]), i[70] ].join(""))) :r += i[82], r += [ i[83], (a.unshift({
num_reviews:_.MB(n[33])
}), t = _.ME(i[84], _.MB, _.MN, null), a.shift(), t), i[85] ].join(""), _.MJ(_.MC(n[37])) && _.MJ(_.MC(n[35])) && (r += [ i[86], _.F.entities("ZCPQLOLOLOCcBUKZaZXeIJNZGCTKe"), i[87] ].join("")), r += i[88], r += _.MJ(_.MC(n[37])) && _.MJ(_.track_experiment("ZCPQLOLOLOCcBUKZaZXeIJNZGCTKe")) && _.MJ(_.MB(n[32]) > 50) ? [ i[89], (a.unshift({
num_reviews:i[91]
}), t = _.ME(i[90], _.MB, _.MN, null), a.shift(), t), i[9] ].join("") :[ i[89], _.F.entities(_.MB(n[31])), i[9] ].join(""), r += i[79], r += _.MD(n[83]) ? i[80] :i[75], r += i[81]), r += i[18], _.MN(n[82], r), e += i[19];
var r = "";
return r += [ i[92], _.MB(n[75]), i[93] ].join(""), r += _.MB(n[72]), _.MJ(_.MC(n[24])) && _.MJ(_.MC(n[86]) + "" == "www") && _.MJ(!1) && (r += i[94]), r += i[95], _.MD(n[87]) && (r += [ i[96], _.MB(n[87]), i[97] ].join("")), r += i[97], _.MD(n[88]) && (r += [ i[98], _.MC(n[88]), i[95] ].join("")), r += i[99], _.MJ(_.MB(n[25]) < 2.5) ? r += i[100] :(r += i[101], _.MD(n[89]) && (r += [ i[97], _.MB(n[89]), i[59] ].join("")), r += i[102], _.MD(n[93]) ? (r += i[103], _.MJ(_.MB(n[67]) + "" == "inline") ? (r += [ i[104], _.MB(n[82]), i[96], _.MB(n[78]), i[96] ].join(""), r = d(r), r += i[97]) :(r += i[96], _.MJ(_.MB(n[64]) + "" == "text-only") ? (r += [ i[111], _.MB(n[78]), i[112] ].join(""), r = c(r), r += [ i[112], _.MB(n[82]), i[96] ].join("")) :(r += i[111], (_.MJ(_.MB(n[55])) || _.MJ(_.MB(n[31]))) && (r += [ i[113], _.MB(n[78]), i[114], _.MB(n[82]), i[115] ].join("")), r += i[112], r = c(r), r += i[96]), r += i[97]), r += i[101]) :(r += i[103], _.MJ(_.MB(n[64]) + "" == "text-only") || _.MJ(_.MB(n[67]) + "" == "inline") ? (r += i[104], r = d(r), r += [ i[96], _.MB(n[78]), i[96], _.MB(n[82]), i[97] ].join("")) :(r += i[104], r = d(r), r += i[96], (_.MJ(_.MB(n[55])) || _.MJ(_.MB(n[31]))) && (r += [ i[116], _.MB(n[78]), i[117], _.MB(n[82]), i[118] ].join("")), r += i[97]), r += i[101]), r += i[101], _.MD(n[94]) && (r += [ i[97], _.MB(n[94]), i[59] ].join("")), r += i[101]), r += i[119], _.MN(n[85], r), e += i[120], _.MN(n[28], void 0), e += i[18], _.MN(n[30], void 0), e += i[18], _.MN(n[25], void 0), e += i[18], _.MN(n[32], void 0), e += i[18], _.MN(n[95], void 0), e += i[18], _.MN(n[74], void 0), e += i[18], _.MN(n[87], void 0), e += i[18], _.MN(n[70], void 0), e += i[18], _.MN(n[64], void 0), e += i[18], _.MN(n[67], void 0), e += i[18], _.MN(n[34], void 0), e += i[18], _.MN(n[48], void 0), e += i[18], _.MN(n[76], void 0), e += i[19], e += _.MJ(_.MB(n[95]) + "" == "no") ? i[121] :[ i[58], _.MB(n[85]), i[18] ].join(""), e += i[18], _r_(e);
}
function N(e) {
if (_i_("3bb:3d7aabab"), e += i[39], _.MJ(_.MC(n[86]) + "" == "mdot") ? e += [ i[153], _.MC(n[97]), i[154], _.ME(i[155], _.MB, _.MN, null), i[156] ].join("") :(e += i[0], a.unshift({
b_extra_classes:i[196],
b_href:_.MB(n[97]),
b_tag:i[80],
b_target:i[197],
b_text:_.MB(n[171]),
b_type:i[198]
}), e = u(e), a.shift(), e += i[32]), e += i[32], _.MJ(_.MB(n[183]) + "" == "confirmation") && _.MJ(_.MB(n[184])) && _.MJ(_.MB(n[185])) && (e += i[199], a.unshift({
fe_preloader_with_text__text:_.MB(n[182])
}), e = w(e), a.shift(), e += i[215]), e += i[32], _.MJ(2 == _.MB(n[186])) && _.MJ(1 == _.MB(n[184])) && _.MJ(1 == _.MB(n[185])) && (e += i[199], a.unshift({
fe_preloader_with_text__text:_.MB(n[182])
}), e = w(e), a.shift(), e += i[215]), e += i[32], _.MD(n[196])) {
if (e += i[1], _.MJ(_.MB(n[183]) + "" == "confirmation") && _.MJ(_.MB(n[184])) && _.MJ(_.MB(n[185]))) {
e += i[216];
var t = "";
_.MD(n[188]) && (t += i[217]), _.MN(n[187], t), e += i[89], _.MN(n[189], [ i[218], _.MC(n[190]) ].join("")), e += i[89], _.MN(n[191], _.MC(n[192])), e += i[89], a.unshift({
b_data_id:i[219],
b_data_id_2:i[220],
b_data_id_3:i[221],
b_data_id_4:i[222],
b_data_id_5:i[223],
b_data_id_6:i[224],
b_data_value:i[225],
b_data_value_2:_.MB(n[191]),
b_data_value_3:i[226],
b_data_value_4:_.MB(n[189]),
b_data_value_5:i[227],
b_data_value_6:_.MB(n[187]),
b_extra_classes:i[228],
b_tag:i[80],
b_text:_.MB(n[193]),
b_type:i[198]
}), e = p(e), a.shift(), e += i[1];
} else if (_.MJ(2 == _.MB(n[186])) && _.MJ(1 == _.MB(n[184])) && _.MJ(1 == _.MB(n[185]))) {
e += i[216];
var t = "";
_.MD(n[188]) && (t += i[217]), _.MN(n[187], t), e += i[89], _.MN(n[189], [ i[218], _.MC(n[190]) ].join("")), e += i[89], _.MN(n[191], _.MC(n[192])), e += i[89], a.unshift({
b_data_id:i[219],
b_data_id_2:i[220],
b_data_id_3:i[221],
b_data_id_4:i[222],
b_data_id_5:i[223],
b_data_id_6:i[224],
b_data_value:i[225],
b_data_value_2:_.MB(n[191]),
b_data_value_3:i[226],
b_data_value_4:_.MB(n[189]),
b_data_value_5:i[227],
b_data_value_6:_.MB(n[187]),
b_extra_classes:i[229],
b_tag:i[80],
b_text:_.MB(n[193]),
b_type:i[198]
}), e = p(e), a.shift(), e += i[1];
} else e += i[230], _.MN(n[194], [ _.MC(n[97]), _.MC(n[195]), i[231] ].join("")), e += i[9], a.unshift({
b_extra_classes:i[232],
b_href:_.MB(n[194]),
b_tag:i[80],
b_target:i[197],
b_text:_.MB(n[193]),
b_type:i[198]
}), e = p(e), a.shift(), e += i[1];
e += i[18];
}
return e += i[18], _r_(e);
}
function x(e) {
_i_("3bb:700f8797"), e += i[39], _.MJ(_.MC(n[24])) && _.MJ(/,/.test(_.MB(n[25]))) && (e += i[40]), e += i[41], _.MJ(_.MB(n[26])) || _.MJ(/,/.test(_.MB(n[25]))) ? (e += i[42], _.MN("fe_formatted_score", _.MB(n[25])), e += i[18]) :(e += i[42], _.MN("fe_formatted_score", _.format_review_score_plain(_.MI(0) + _.MI(_.MB(n[25])))), e += i[18]), e += i[32];
var r = "";
r += i[30], r += _.MJ(_.MB(n[28])) ? _.MB(n[28]) :i[43], r += i[30], _.MN(n[27], r), e += i[32];
var r = "";
r += i[30], _.MJ(_.MB(n[30])) ? (r += i[30], r += _.MJ(_.MB(n[30]) + "" != "none") && _.MJ(_.MB(n[27]) + "" == "none") ? i[44] :[ i[30], _.MB(n[30]), i[30] ].join(""), r += i[30]) :r += i[43], r += i[30], _.MN(n[29], r), e += i[41];
var r = "";
r += i[30], (_.MJ(_.MB(n[30])) && _.MJ(_.MB(n[30]) + "" == "auto") || _.MK(_.MB(n[30]))) && _.MJ(_.MB(n[32])) ? (r += i[30], _.MN("fe_formatted_sample_size", _.format_number(_.MB(n[32]))), r += [ i[30], (a.unshift({
num_reviews:_.MB(n[33])
}), t = _.VP(i[45], _.MO(_.MI(_.MC(n[32])) + _.MI(0), null, i[45])), a.shift(), t), i[30] ].join("")) :_.MJ(_.MB(n[30]) + "" != "none") && _.MJ(_.MB(n[30]) + "" != "auto") && (r += [ i[30], _.MB(n[30]), i[30] ].join("")), r += i[30], _.MN(n[31], r), e += i[41], _.MN("fe_is_alt_version", _.MJ(_.MB(n[34]) + "" == "right")), e += i[17], _.MJ(_.MC(n[37])) && (e += i[1], _.MJ(_.track_experiment("ZCPQLOLOLOCcBUKZaZXeIJNZGCTKe")), e += i[46], (_.MJ(_.MC(n[35])) || _.MJ(_.MC(n[36]))) && _.MJ(_.MB(n[32]) > 50) && _.MJ(_.track_experiment_stage("cce_www_sr_hp_hotel_review_buckets", 1)), e += i[46], _.MJ(_.MC(n[35])) && _.MJ(_.MB(n[32]) > 50) && _.MJ(_.track_experiment_stage("cce_www_sr_hp_hotel_review_buckets", 2)), e += i[46], _.MJ(_.MC(n[36])) && _.MJ(_.MB(n[32]) > 50) && _.MJ(_.track_experiment_stage("cce_www_sr_hp_hotel_review_buckets", 3)), e += i[18]), e += i[41], a.unshift({
low_score_adjectives:_.MB(n[48]),
score:_.MI(0) + _.MI(_.MB(n[25]))
}), e = y(e), a.shift(), e += i[32];
var r = "";
r += i[30], _.MJ(_.MB(n[28])) && _.MJ(_.MB(n[28]) + "" == "auto") || (_.MK(_.MB(n[28])) || _.MJ(_.MB(n[28]) + "" == "none")) && _.MJ(_.MB(n[31]) + "" != "") ? r += [ i[30], _.MB(n[53]), i[30] ].join("") :_.MJ(_.MB(n[28])) && _.MJ(_.MB(n[28]) + "" != "none") && (r += [ i[30], _.MB(n[28]), i[30] ].join("")), r += i[30], _.MN(n[55], r), e += i[32], _.MD(n[55]) && (e += i[42], _.MN("fe_widget_text", _.MB(n[56]) + "" + _.MB(n[55]) + _.MB(n[57])), e += i[18]), e += i[41], _.MN("score_only", _.MJ(_.MB(n[55]) + "" == "") && _.MJ(_.MB(n[31]) + "" == "")), e += i[39], a.unshift({
prefix:i[60],
score:_.MI(0) + _.MI(_.MB(n[25]))
}), e = M(e), a.shift(), e += i[18], _.MN("fe_widget_class", _.MB(n[62])), e += i[32], _.MJ(_.MB(n[25]) < 2.5) && (e += i[42], _.MN("fe_widget_class", "review-score-widget__empty"), e += i[18]), e += i[17];
var r = "";
_.MD(n[64]) && (r += [ i[60], _.MB(n[64]), i[51] ].join("")), _.MD(n[65]) && (r += i[61]), _.MN(n[63], r), e += i[17];
var r = "";
_.MJ(_.MB(n[67])) && _.MK(_.MB(n[65])) && (r += [ i[60], _.MB(n[67]), i[51] ].join("")), _.MN(n[66], r), e += i[17];
var r = "";
_.MJ(_.MB(n[34]) + "" == "right") && _.MK(_.MB(n[65])) && (r += [ i[60], _.MB(n[34]), i[51] ].join("")), _.MN(n[68], r), e += i[17];
var r = "";
_.MJ(_.MB(n[70]) + "" == "smaller") ? r += i[62] :_.MJ(_.MB(n[70]) + "" == "small") ? r += i[63] :_.MJ(_.MB(n[70]) + "" == "large") ? r += i[64] :_.MJ(_.MB(n[70]) + "" == "larger") && (r += i[65]), _.MN(n[69], r), e += i[41];
var r = "";
(_.MJ(_.MB(n[64]) + "" == "outlined") || _.MJ(_.MB(n[64]) + "" == "text-only")) && (r += [ _.MB(n[64]), i[51] ].join("")), _.MN(n[71], r), e += i[41];
var r = "";
r += [ i[66], _.MB(n[72]), i[51], _.MB(n[63]), i[51], _.MB(n[66]), i[51], _.MB(n[68]), i[51], _.MB(n[69]), i[51] ].join(""), _.MK(_.MB(n[31])) && (r += i[67]), r += i[51], _.MD(n[73]) && (r += i[68]), r += i[51], _.MD(n[74]) && (r += [ i[51], _.MB(n[74]) ].join("")), r += i[51], _.MN(n[72], r), e += i[41];
var r = "";
_.MD(n[76]) && (r += [ i[69], _.MB(n[76]), i[70] ].join("")), _.MN(n[75], r), e += i[71], e = l(e), e += i[32], e += i[32];
var r = "";
r += i[42], _.MD(n[55]) && (r += i[72], _.MD(n[79]) ? (r += [ i[73], _.MB(n[79]), i[70] ].join(""), _.MD(n[80]) && (r += [ i[74], _.MB(n[80]), i[70] ].join(""))) :r += i[75], r += [ i[76], (a.unshift({
rating_adjective:_.MB(n[81])
}), t = _.ME(i[77], _.MB, _.MN, null), a.shift(), t), i[78], _.MB(n[55]), i[79] ].join(""), r += _.MD(n[79]) ? i[80] :i[75], r += i[81]), r += i[18], _.MN(n[78], r), e += i[32];
var r = "";
r += i[42], _.MD(n[31]) && (r += i[72], _.MD(n[83]) ? (r += [ i[73], _.MB(n[83]), i[70] ].join(""), _.MD(n[84]) && (r += [ i[74], _.MB(n[84]), i[70] ].join(""))) :r += i[82], r += [ i[83], (a.unshift({
num_reviews:_.MB(n[33])
}), t = _.ME(i[84], _.MB, _.MN, null), a.shift(), t), i[85] ].join(""), _.MJ(_.MC(n[37])) && _.MJ(_.MC(n[35])) && (r += [ i[86], _.F.entities("ZCPQLOLOLOCcBUKZaZXeIJNZGCTKe"), i[87] ].join("")), r += i[88], r += _.MJ(_.MC(n[37])) && _.MJ(_.track_experiment("ZCPQLOLOLOCcBUKZaZXeIJNZGCTKe")) && _.MJ(_.MB(n[32]) > 50) ? [ i[89], (a.unshift({
num_reviews:i[91]
}), t = _.ME(i[90], _.MB, _.MN, null), a.shift(), t), i[9] ].join("") :[ i[89], _.F.entities(_.MB(n[31])), i[9] ].join(""), r += i[79], r += _.MD(n[83]) ? i[80] :i[75], r += i[81]), r += i[18], _.MN(n[82], r), e += i[19];
var r = "";
return r += [ i[92], _.MB(n[75]), i[93] ].join(""), r += _.MB(n[72]), _.MJ(_.MC(n[24])) && _.MJ(_.MC(n[86]) + "" == "www") && _.MJ(!1) && (r += i[94]), r += i[95], _.MD(n[87]) && (r += [ i[96], _.MB(n[87]), i[97] ].join("")), r += i[97], _.MD(n[88]) && (r += [ i[98], _.MC(n[88]), i[95] ].join("")), r += i[99], _.MJ(_.MB(n[25]) < 2.5) ? r += i[100] :(r += i[101], _.MD(n[89]) && (r += [ i[97], _.MB(n[89]), i[59] ].join("")), r += i[102], _.MD(n[93]) ? (r += i[103], _.MJ(_.MB(n[67]) + "" == "inline") ? (r += [ i[104], _.MB(n[82]), i[96], _.MB(n[78]), i[96] ].join(""), r = b(r), r += i[97]) :(r += i[96], _.MJ(_.MB(n[64]) + "" == "text-only") ? (r += [ i[111], _.MB(n[78]), i[112] ].join(""), r = d(r), r += [ i[112], _.MB(n[82]), i[96] ].join("")) :(r += i[111], (_.MJ(_.MB(n[55])) || _.MJ(_.MB(n[31]))) && (r += [ i[113], _.MB(n[78]), i[114], _.MB(n[82]), i[115] ].join("")), r += i[112], r = d(r), r += i[96]), r += i[97]), r += i[101]) :(r += i[103], _.MJ(_.MB(n[64]) + "" == "text-only") || _.MJ(_.MB(n[67]) + "" == "inline") ? (r += i[104], r = b(r), r += [ i[96], _.MB(n[78]), i[96], _.MB(n[82]), i[97] ].join("")) :(r += i[104], r = b(r), r += i[96], (_.MJ(_.MB(n[55])) || _.MJ(_.MB(n[31]))) && (r += [ i[116], _.MB(n[78]), i[117], _.MB(n[82]), i[118] ].join("")), r += i[97]), r += i[101]), r += i[101], _.MD(n[94]) && (r += [ i[97], _.MB(n[94]), i[59] ].join("")), r += i[101]), r += i[119], _.MN(n[85], r), e += i[120], _.MN(n[28], void 0), e += i[18], _.MN(n[30], void 0), e += i[18], _.MN(n[25], void 0), e += i[18], _.MN(n[32], void 0), e += i[18], _.MN(n[95], void 0), e += i[18], _.MN(n[74], void 0), e += i[18], _.MN(n[87], void 0), e += i[18], _.MN(n[70], void 0), e += i[18], _.MN(n[64], void 0), e += i[18], _.MN(n[67], void 0), e += i[18], _.MN(n[34], void 0), e += i[18], _.MN(n[48], void 0), e += i[18], _.MN(n[76], void 0), e += i[19], e += _.MJ(_.MB(n[95]) + "" == "no") ? i[121] :[ i[58], _.MB(n[85]), i[18] ].join(""), e += i[18], _r_(e);
}
function E(e) {
if (_i_("3bb:91a1aba3"), e += i[39], _.MJ(_.MC(n[86]) + "" == "mdot") ? e += [ i[153], _.MC(n[97]), i[154], _.ME(i[155], _.MB, _.MN, null), i[156] ].join("") :(e += i[0], a.unshift({
b_extra_classes:i[196],
b_href:_.MB(n[97]),
b_tag:i[80],
b_target:i[197],
b_text:_.MB(n[171]),
b_type:i[198]
}), e = f(e), a.shift(), e += i[32]), e += i[32], _.MJ(_.MB(n[183]) + "" == "confirmation") && _.MJ(_.MB(n[184])) && _.MJ(_.MB(n[185])) && (e += i[199], a.unshift({
fe_preloader_with_text__text:_.MB(n[182])
}), e = C(e), a.shift(), e += i[215]), e += i[32], _.MJ(2 == _.MB(n[186])) && _.MJ(1 == _.MB(n[184])) && _.MJ(1 == _.MB(n[185])) && (e += i[199], a.unshift({
fe_preloader_with_text__text:_.MB(n[182])
}), e = C(e), a.shift(), e += i[215]), e += i[32], _.MD(n[196])) {
if (e += i[1], _.MJ(_.MB(n[183]) + "" == "confirmation") && _.MJ(_.MB(n[184])) && _.MJ(_.MB(n[185]))) {
e += i[216];
var t = "";
_.MD(n[188]) && (t += i[217]), _.MN(n[187], t), e += i[89], _.MN(n[189], [ i[218], _.MC(n[190]) ].join("")), e += i[89], _.MN(n[191], _.MC(n[192])), e += i[89], a.unshift({
b_data_id:i[219],
b_data_id_2:i[220],
b_data_id_3:i[221],
b_data_id_4:i[222],
b_data_id_5:i[223],
b_data_id_6:i[224],
b_data_value:i[225],
b_data_value_2:_.MB(n[191]),
b_data_value_3:i[226],
b_data_value_4:_.MB(n[189]),
b_data_value_5:i[227],
b_data_value_6:_.MB(n[187]),
b_extra_classes:i[228],
b_tag:i[80],
b_text:_.MB(n[193]),
b_type:i[198]
}), e = u(e), a.shift(), e += i[1];
} else if (_.MJ(2 == _.MB(n[186])) && _.MJ(1 == _.MB(n[184])) && _.MJ(1 == _.MB(n[185]))) {
e += i[216];
var t = "";
_.MD(n[188]) && (t += i[217]), _.MN(n[187], t), e += i[89], _.MN(n[189], [ i[218], _.MC(n[190]) ].join("")), e += i[89], _.MN(n[191], _.MC(n[192])), e += i[89], a.unshift({
b_data_id:i[219],
b_data_id_2:i[220],
b_data_id_3:i[221],
b_data_id_4:i[222],
b_data_id_5:i[223],
b_data_id_6:i[224],
b_data_value:i[225],
b_data_value_2:_.MB(n[191]),
b_data_value_3:i[226],
b_data_value_4:_.MB(n[189]),
b_data_value_5:i[227],
b_data_value_6:_.MB(n[187]),
b_extra_classes:i[229],
b_tag:i[80],
b_text:_.MB(n[193]),
b_type:i[198]
}), e = u(e), a.shift(), e += i[1];
} else e += i[230], _.MN(n[194], [ _.MC(n[97]), _.MC(n[195]), i[231] ].join("")), e += i[9], a.unshift({
b_extra_classes:i[232],
b_href:_.MB(n[194]),
b_tag:i[80],
b_target:i[197],
b_text:_.MB(n[193]),
b_type:i[198]
}), e = u(e), a.shift(), e += i[1];
e += i[18];
}
return e += i[18], _r_(e);
}
r += i[0];
var T = "";
return T += i[1], a.unshift({
active_perfectly_overlapped_bookings:_.MB(n[197])
}), T = o(T), a.shift(), T += i[20], _.MN(n[0], T), r += i[0], a.unshift({
fe_banner__color_scheme:i[272],
fe_banner__extra_classes:i[273],
fe_banner__message_text:_.MB(n[0])
}), r = B(r), a.shift(), r += i[32], _r_(r);
});
}()), B.when({
events:"ready",
action:[ "book" ],
condition:(B.env.b_user_auth_level_is_high || B.env.b_user_auth_level && B.env.b_user_auth_level == B.env.auth_level_high) && 3 == B.env.b_stage
}).run(function() {
_i_("3bb:19bbfa14");
var e, t, i, n, a = B.require("jquery"), r = a(".js-overlapping-bookings"), _ = r.data("reservationsurl"), o = {
hname:B.env.b_hotel_name,
city:B.env.b_city_name,
ufi:B.env.b_ufi,
hid:B.env.b_hotel_id,
main_photo_url:B.env.b_main_photo_840x460,
total_price_pretty:B.env.b_user_total_pretty,
total_score:B.env.b_review_score_detailed,
review_nr:B.env.b_review_nr,
cancellation_policy:B.env.b_hotel_cancellation_policy,
cancellation_date:B.env.b_hotel_cancellation_date,
cancellation_date_until:B.env.b_hotel_cancellation_until_date,
lang:B.env.b_lang,
unbooked:!0
};
if (!r.length) return _r_(!1);
B.require("fragment").call("mybooking.open_bookings_full", {
checkin:r.data("checkin"),
checkout:r.data("checkout"),
hotel_details:1,
prepayment:1,
cancel_summary:1
}).then(s, M);
function s(i) {
if (_i_("3bb:214e6dae"), !i) return _r_(!1);
if (e = i.data, t = i.info, !e || !e.length) return _r_(!1);
if (3 === B.env.b_stage && t.all_free_cancellation_and_no_prepayment_only) return _r_(!1);
l(), _r_();
}
function l() {
_i_("3bb:4450d770"), i = f(), n = m(i);
var e = h().concat(o.hid);
B.require("fragment").call("geo.hotels_location_details", {
hotel_ids:e,
ufi:i,
load_city_centre:1,
load_metro_station:1,
load_airport:1,
load_train_station:1
}).then(c, M), _r_();
}
function c(t) {
_i_("3bb:d3f74075");
for (var a = 0; a < e.length; a++) {
var r = e[a].hid;
e[a].location_details = t[r], e[a].cityCenterUFI = i, e[a].referenceCityCenterName = n;
}
o.location_details = t[o.hid], o.cityCenterUFI = i, o.referenceCityCenterName = n, d(), _r_();
}
function d() {
_i_("3bb:6a979cc8");
var e = b(), t = p();
r.append(e), r.find(".js-overlapping-bookings-table").append(t), B.et.initAttributesTracking(r), u(), 3 == B.env.b_stage && B.env.b_reg_user_id && 2 == B.env.b_user_logged_in_auth_level && "" != r.find(".js-overlapping-bookings-table").html() && r.find(".js-reservations-button").trigger("click"), _r_();
}
function b() {
_i_("3bb:a8b61f07");
var t = "pob_email_reminder_body", i = {
num_overlapping_bookings:e.length,
short_date_start:r.data("checkinshort"),
short_date_end:r.data("checkoutshort"),
start_bold:"<strong>",
end_bold:"</strong>"
};
i.start_cancel_link = '<a class="js-reservations-link" target="_blank" href="' + _ + '">', i.end_cancel_link = "</a>";
var n = {
b_lang_is_rtl:B.env.rtl,
bookings:e,
fe_subtitle:B.jstmpl.translations(t, e.length, i),
fe_cta_copy:B.jstmpl.translations("cx_double_booked_message_cancel"),
fe_pob_class__cta:"c-button c-button--warning",
fe_pob_show_banner:!0,
fe_pob_show_banner_cta:!0,
fe_pob_show_banner_cta_url:_,
fe_pob_show_table:!0,
fe_pob_class__container:"overlapping-bookings--bp",
fe_pob_show_banner_cta_icon:!0,
fe_table_container:!0,
fe_on_view_track:""
};
return _r_(B.jstmpl("overlapping_bookings_banner").render(n));
}
function p() {
_i_("3bb:41c748c5");
var t = {
b_lang_is_rtl:B.env.rtl,
b_query_params_delimiter:B.env.b_query_params_delimiter,
num_nights:r.data("nights"),
bookings:e,
comparison_property:o,
show_cancel_cta:!0
}, i = e && e.length && 1 === e.length && e[0].cancel_fee && e[0].cancel_fee.amount && e[0].cancel_fee.amount > 0, n = B.et.track("NAREDUfEebJPLBJMWJcdPIHAEfPecUJC"), a = 2 === n && i;
return n && (B.et.stage("NAREDUfEebJPLBJMWJcdPIHAEfPecUJC", 1), i && (B.et.stage("NAREDUfEebJPLBJMWJcdPIHAEfPecUJC", 2), B.env.b_is_vacation_rental_new_definition && B.et.stage("NAREDUfEebJPLBJMWJcdPIHAEfPecUJC", 3))), t.fe_show_non_free = a, t.fe_track_stage_on_view = "", _r_(B.jstmpl("overlapping_bookings_comparison").render(t));
}
function u() {
_i_("3bb:8f7bc409"), r.find(".js-reservations-button").on("click", function(e) {
_i_("3bb:2b56eb63"), e.preventDefault();
var t = r.hasClass("overlapping-is-active");
t ? r.removeClass("overlapping-is-active") :r.addClass("overlapping-is-active"), _r_();
}), r.find(".js-continue-booking").on("click", function(e) {
_i_("3bb:7c43e003"), r.removeClass("overlapping-is-active"), a(window).scrollTop(r.position().top - 20), _r_();
}), _r_();
}
function h() {
_i_("3bb:a99f5b04");
for (var t = [], i = 0; i < e.length; i++) t.indexOf(-1 == e[i].hid) && t.push(e[i].hid);
return _r_(t);
}
function f() {
_i_("3bb:c5f5a7ca");
for (var t = {}, i = [], n = 0, a = !1, r = 0; r < e.length; r++) {
var a = e[r].ufi;
i.indexOf(-1 == a) && i.push(a), t[a] = t[a] ? t[a] + 1 :1;
}
for (var r = 0; r < i.length; r++) t[i[r]] >= n && (a = i[r]);
return _r_(a);
}
function m(t) {
_i_("3bb:87c6d729");
for (var i = 0; i < e.length; i++) if (e[i].ufi == t) return _r_(e[i].city);
_r_();
}
function M(e) {
_i_("3bb:7d05e3b1"), r.removeClass("overlapping-is-active"), _r_();
}
_r_();
}), booking.jstmpl("overlapping_bookings_banner", function() {
_i_("3bb:e5b7c906");
var e, t = [ "\n\n  ", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "\n  ", "\n", "\n\n", "\n    ", "\n      ", "\n        ", "\n          ", "\n\n\n  ", '\n\n\n  <div\n    class="\n      ', "\n\n      ", "--rtl\n      ", "--ltr\n      ", '\n\n    "\n    data-et-view="', '"\n    >\n\n  \n  \n  \n\n  ', '\n    <p class="', "__title ", '">\n          ', "\n    </p>\n    ", "\n\n\n  \n  \n  \n\n\n  ", '\n    <table class="', "__table ", '" ', 'data-et-view="', ">\n        <tbody>\n          ", '\n\n              <tr class="', "__row ", '">\n\n                \n                \n                \n\n                <td class="', "__cell ", " ", "book_and_cancel", '">\n\n                    ', '\n                      <div class="', '__checklist">\n                        <label class="', '__checklist-label">\n                          <input class="', "__checkbox ", '" type="checkbox" name="pob_to_cancel" value="', "disabled", " >\n                          ", "\n                            ", "\n                        ", '\n                           <div class="', "__checklist-body ", '">\n                        ', '\n\n                          <a\n                            class="', "__property ", ' js-property-link"\n                            href="', '"\n                            target="', '">\n                            ', "\n                              ", "\n                          </a>\n\n                          ", "\n                                ", '\n                                  <p class="comparison-property__text--smaller--flush free-cxl">', "/private/pob_refundable_generic/name", "</p>\n                                ", "/private/pob_refundable_simple_ja/name", "/private/pob_refundable_simple/name", "\n                          ", "\n\n                          ", '\n                            <p class="overlapping-bookings__book-cancel-price">', "</p>\n                          ", "\n                          </div>\n                        ", "\n                      ", "\n                        </label>\n                    ", "\n\n                      ", "\n\n                    ", "\n                      </div>\n                    ", "\n\n                </td>\n\n                \n                \n                \n\n                ", '\n                  <td class="', '">\n                    <small class="', "__label ", '">', "/private/price/name", '</small>\n                    <strong class="', "__price ", "</strong>\n                  </td>\n                ", "\n\n                \n                \n                \n\n\n                ", "\n                    ", '\n                      <td class="', '">\n                          <a class="', "__cta ", " js-cta-link js-bs2-cancel-slidebox ", "mb-btn mb-cancel custom_track hasSlideBox", '"\n                              ', '\n                                  data-slidebox-preopen-callback="cancelOpenCallback"\n                                  data-slidebox-load="', '"\n                                  data-slidebox-submit-callback="cancelButtonSubmitCallback"\n                                  data-trackname="Cancel booking, ', '"\n                                  data-slidebox-target="#slidebox-cancel-pob"\n                                  data-slidebox-ajax-failure-feedback="', "true", '\n                                 href="', '"\n                                 target="', "\n                            >", "\n                            </a>\n\n                      </td>\n                    ", "\n                ", "\n\n\n              </tr>\n              ", '<tr class="booking-spacer"></tr>', "\n\n          ", "\n        </tbody>\n\n      </table>\n    \n    ", '\n    \n    <div class="slidebox slidebox--cancel-booking" id="slidebox-cancel-pob">\n        <div class="slidebox__inner  js-slidebox__inner  myBookingOptionsPanel">\n            ', "100px", "80%", "32px", "ajax-loader-64.gif", '\n\n\n\n<div\n    class="preloader-with-text ', '"\n    style="min-height: ', ';"\n>\n    <div class="preloader-with-text__container">\n        <div class="preloader-with-text__table" style="width: ', ';">\n            <div class="preloader-with-text__cell">\n\n                <div class="preloader-with-text__spinner">\n                    <img\n                        src="', '"\n                        style="width: ', ';"\n                        alt=""\n                    />\n                </div>\n\n                <div class="preloader-with-text__text">\n                    ', "/private/loading/name", "...\n                    ", "\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n", "\n        </div>\n    </div> <!-- /slidebox--cancel-booking -->\n    ", "\n\n    \n\n    ", "", "&nbsp;<i class='bicon bicon-downchevron'></i>", "\n\n     ", "\n\n\n\n", "b-button", "Button Text should be overriden", "button", "\n\n\n", "c-button", "\n	", "0", "\n		", " b-button_primary", " b-button_secondary", " b-button_warning", " b-button_disabled", " b-button_primary b-button_small", " b-button_secondary b-button_small", " b-button_warning b-button_small", " b-button_primary b-button_flat", "\n\n	", "1", 'id="', '"', 'href="', 'data-title="', 'type="', 'rel="', "data-", '="', " data-", 'target="', 'hotelUrl="', 'data-hotelid="', "\n\n\n<", '\n	class="', '"\n	', "\n\n    ", '\n        data-track-event="', '"\n    ', '\n		value="', '"/>\n	', '\n	>\n		<span class="b-button__text">', "</span>\n		", '\n				<span class="b-button__from-text" ', 'style="display:inline-block"', ">", "\n\n		", '\n				<span class="b-button__from-text book_now_rt_summary g-hidden"></span>\n\n				', '\n                    <span class="b-button__from-text taxes_and_charges_near_price_btn_text"></span>\n				', "\n\n		</", ">\n	", "js-reservations-button", "a", "_blank", "primary", "\n\n    \n\n     ", "\n\n        ", "__container\n          ", "\n          fe_banner__unify\n          fe_banner__inherit_font_size\n        ", "\n\n\n    \n\n    ", '\n\n      <div data-et-view="', ':1"></div>\n      ', "\n\n\n\n\n\n", '<div data-component="onview-animate" data-anim-type="fadeInBottom"> ', '<div class="fe_banner ', "fe_banner__scale_small ", "fe_banner__w-icon ", "fe_banner__w-dismiss ", "fe_banner__", "fe_banner__w-icon-", "fe_banner__bp fe_banner__inherit_font_size ", ' " ', 'role="alert"', "> ", '<i class="fe_banner__icon ', '" aria-hidden="true"></i> ', '<img class="fe_banner__icon" src="', '"> ', '<span class="fe_banner__icon"> ', " </span> ", '<div class="fe_banner__btn_container"> <div class="fe_banner__btn_container_content"> ', '<h3 class="fe_banner__title"> ', " </h3> ", '<div class="fe_banner__message ', "fe_banner__genius-trial", " </div> ", '</div> <div class="fe_banner__button"> ', "</div> ", '<span class="fe_banner__dismiss js-close"><i class="bicon-btnclose" aria-label="close"></i></span> ', '<form action="', "/genius_activate_trial", '" class="fe_banner__genius-banner-form" method="post"> <input type="hidden" name="return_url" value="', '"> <input type="hidden" name="src" value="hp_banner"> <input type="hidden" name="campaign_id" value="', '"> <input type="submit" class="button fe_banner__genius-banner-button" value="', '"> </form> ', "green", "fe_banner__unify fe_banner__inherit_font_size fe_banner__including_total", "bicon-suitcase", "fe_banner__unify fe_banner__inherit_font_size", '\n        <div class="js-overlapping-bookings-table ', '__table"></div>\n      ', "\n\n        \n        ", "\n\n\n  \n  \n  \n\n  ", '\n\n    <div class="', "__container ", '">\n\n      \n\n      ', '\n        <div class="', "__subtitle ", "\n        </div>\n      ", "\n\n      \n\n      ", "\n\n    </div>\n\n  ", "\n\n  </div>\n\n" ], i = [ "fe_base_css_class", "fe_title", "fe_singular_title", "active_perfectly_overlapped_bookings", "fe_plural_title", "fe_pob_show_banner", "fe_pob_cta_target", "fe_pob_property_target", "fe_pob_show_price", "fe_scoped_css_class", "b_lang_is_rtl", "fe_on_view_track", "fe_pob_class__title", "fe_pob_table", "fe_pob_class__table", "fe_track_stage_on_view", "fe_pob_class__row", "fe_pob_class__cell", "fe_book_and_cancel", "fe_pob_class__checkbox", "hres_id", "fe_pob_disabled__checkbox", "fe_pob_class__checklist_body", "fe_pob_selectable", "fe_pob_class__property", "mybooking_url", "hname", "fe_pob_property_icon", "free_cancellation_deadline_until", "lang", "free_cancellation_deadline", "cancellation_type", "fe_pob_show_policies", "total_price_pretty", "fe_show_price", "fe_show_property_block_inside_label", "fe_pob_class__label", "fe_pob_class__price", "fe_pob_class__cta", "fe_stage", "fe_user_auth_level_is_high", "all_free_cancellations_and_no_prepayment_only", "cancel_summary_url", "fe_feature_running_MYBOOKING_AJAX_FAILURE_FEEDBACK", "fe_cta_copy", "fe_individual_links_are_not_clickable", "fe_show_booking_price", "fe_preloader_with_text__min_height_default", "fe_preloader_with_text__min_height", "fe_preloader_with_text__width_default", "fe_preloader_with_text__width", "fe_preloader_with_text__spinner_size_default", "fe_preloader_with_text__spinner_size", "fe_preloader_with_text__spinner_default", "fe_preloader_with_text__spinner", "fe_preloader_with_text__class", "fe_preloader_with_text__text", "loading", "fe_pob_show_table", "pb_ss_dashboard_view_booking_cta", "gta_splash_view_booking_cta", "b_text", "fe_pob_show_banner_cta_icon", "fe_banner__btn_include", "b_btn_class", "b_btn_id", "b_btn_text", "b_btn_outside_text", "b_btn_caption_text", "b_btn_tag", "b_btn_attr_type", "b_btn_attr", "b_btn_href", "b_btn_extra_classes", "b_btn_title", "b_btn_rel", "b_btn_target", "b_btn_data", "fe_cbtn_comp_class", "fe_cbtn_class", "fe_cbtn_type", "fe_cbtn_size", "fe_cbtn_disabled", "fe_cbtn_icon_only", "fe_cbtn_icon_left", "fe_cbtn_icon_right", "fe_cbtn_track_exp", "fe_cbtn_track_event", "fe_btn_track_event", "fe_cbtn_track_goal", "fe_cbtn_track_stage", "fe_cbtn_is_anchor", "fe_cbtn_is_input", "fe_cbtn_is_button", "fe_cbtn_no_style", "b_btn_hotel_url", "b_btn_data_hotelid", "b_outside_text", "b_caption_text", "b_type", "b_tag", "fe_btn_is_anchor", "fe_btn_is_input", "fe_btn_is_button", "b_id", "b_href", "fe_btn_no_style", "b_extra_classes", "b_title", "b_attr_type", "b_attr", "b_rel", "b_data_id", "b_data_value", "b_data_id_2", "b_data_value_2", "b_data_id_3", "b_data_value_3", "b_data_id_4", "b_data_value_4", "b_data_id_5", "b_data_value_5", "b_target", "b_bb_is_sabrered_app", "b_hotel_url", "b_data_hotelid", "b_from_price_inlined", "b_guest_country", "b_add_rt_summary", "fe_pob_show_banner_cta_url", "fe_pob_show_banner_cta", "fe_pob_table__extra_classes", "fe_pob_class__container", "fe_pob_banner", "fe_banner__data", "fe_banner__data_id", "fe_banner__data_value", "fe_banner__data_id_2", "fe_banner__data_value_2", "fe_banner__data_id_3", "fe_banner__data_value_3", "fe_banner__data_id_4", "fe_banner__data_value_4", "fe_banner__data_id_5", "fe_banner__data_value_5", "fe_banner__animate", "fe_banner__scale", "fe_banner__icon_class", "fe_banner__icon_img_url", "fe_banner__icon_svg", "fe_banner__close_button", "fe_banner__color_scheme", "fe_banner__color_scheme_classes", "fe_banner__icon_size", "b_action", "fe_banner__extra_classes", "fe_banner__id", "fe_banner__aria_alert", "fe_banner__title_text", "fe_banner__start_genius_trial", "fe_banner__message_text", "b_secure_hostname", "b_query_params_with_lang", "b_original_url", "fe_ge_trial_desktop_campaign_id", "ge_expand_hp_trial_sidebar_cta", "fe_banner__banners_count", "fe_subtitle", "fe_table_container", "fe_pob_class__subtitle", "bookings" ];
return _r_(function(n) {
_i_("3bb:f5ec71e3");
var a = "", r = this.fn;
function _(e) {
_i_("3bb:6951dd761"), e += t[117], r.MN(i[64], t[118]), e += t[3], r.MN(i[65], void 0), e += t[3], r.MN(i[66], t[119]), e += t[3], r.MN(i[67], void 0), e += t[3], r.MN(i[68], void 0), e += t[3], r.MN(i[69], t[120]), e += t[3], r.MN(i[70], void 0), e += t[3], r.MN(i[71], void 0), e += t[3], r.MN(i[72], void 0), e += t[3], r.MN(i[73], void 0), e += t[3], r.MN(i[74], void 0), e += t[3], r.MN(i[75], void 0), e += t[3], r.MN(i[76], void 0), e += t[3], r.MN(i[77], void 0), e += t[121], r.MN(i[78], t[122]), e += t[4], r.MN(i[79], void 0), e += t[3], r.MN(i[80], void 0), e += t[3], r.MN(i[81], void 0), e += t[3], r.MN(i[82], void 0), e += t[3], r.MN(i[83], void 0), e += t[3], r.MN(i[84], void 0), e += t[3], r.MN(i[85], void 0), e += t[3], r.MN(i[86], void 0), e += t[4], r.MD(i[88]) ? (e += t[123], r.MN(i[87], r.MB(i[88])), e += t[3]) :(e += t[123], r.MN(i[87], void 0), e += t[3]), e += t[4], r.MN(i[89], void 0), e += t[3], r.MN(i[90], void 0), e += t[4], r.MN(i[91], t[124]), e += t[3], r.MN(i[92], t[124]), e += t[3], r.MN(i[93], t[124]), e += t[4], r.MN(i[94], t[124]), e += t[121], r.MN(i[95], void 0), e += t[3], r.MN(i[96], void 0), e += t[4], r.MD(i[61]) && (e += t[123], r.MN(i[66], r.MC(i[61])), e += t[3]), e += t[4], r.MD(i[97]) && (e += t[123], r.MN(i[67], r.MC(i[97])), e += t[3]), e += t[4], r.MD(i[98]) && (e += t[123], r.MN(i[68], r.MC(i[98])), e += t[3]), e += t[4];
var n = r.MC(i[99]);
if (r.MJ(n + "" == "primary") ? (e += t[125], r.MN(i[64], [ r.MC(i[64]), t[126] ].join("")), e += t[123]) :r.MJ(n + "" == "secondary") ? (e += t[125], r.MN(i[64], [ r.MC(i[64]), t[127] ].join("")), e += t[123]) :r.MJ(n + "" == "warning") ? (e += t[125], r.MN(i[64], [ r.MC(i[64]), t[128] ].join("")), e += t[123]) :r.MJ(n + "" == "disabled") ? (e += t[125], r.MN(i[64], [ r.MC(i[64]), t[129] ].join("")), e += t[123]) :r.MJ(n + "" == "primary-small") ? (e += t[125], r.MN(i[64], [ r.MC(i[64]), t[130] ].join("")), e += t[123]) :r.MJ(n + "" == "secondary-small") ? (e += t[125], r.MN(i[64], [ r.MC(i[64]), t[131] ].join("")), e += t[123]) :r.MJ(n + "" == "warning-small") ? (e += t[125], r.MN(i[64], [ r.MC(i[64]), t[132] ].join("")), e += t[123]) :r.MJ(n + "" == "primary-flat") && (e += t[125], r.MN(i[64], [ r.MC(i[64]), t[133] ].join("")), e += t[3]), e += t[4], r.MD(i[100]) && (e += t[123], r.MN(i[69], r.MC(i[100])), e += t[134], r.MJ(/^a$/i.test(r.MC(i[69]))) && r.MN(i[101], t[135]), e += t[123], r.MJ(/^input$/i.test(r.MC(i[69]))) && r.MN(i[102], t[135]), e += t[123], r.MJ(/^button$/i.test(r.MC(i[69]))) && r.MN(i[103], t[135]), e += t[3]), e += t[4], r.MD(i[104]) && (e += t[123], r.MN(i[65], [ t[136], r.MC(i[104]), t[137] ].join("")), e += t[3]), e += t[4], r.MD(i[105]) && (e += t[123], r.MN(i[72], [ t[138], r.MC(i[105]), t[137] ].join("")), e += t[3]), e += t[4], r.MD(i[106]) && (e += t[123], r.MN(i[94], r.MC(i[106])), e += t[3]), e += t[4], r.MD(i[107])) {
e += t[123];
var a = "";
r.MD(i[94]) || (a += r.MC(i[64])), a += [ t[30], r.MC(i[107]) ].join(""), r.MN(i[64], a), e += t[3];
}
return e += t[4], r.MD(i[108]) && (e += t[123], r.MN(i[74], [ t[139], r.F.entities(r.MC(i[108])), t[137] ].join("")), e += t[3]), e += t[4], r.MD(i[109]) && (e += t[123], r.MN(i[70], [ t[140], r.MC(i[109]), t[137] ].join("")), e += t[3]), e += t[4], r.MD(i[110]) && (e += t[123], r.MN(i[71], r.MC(i[110])), e += t[3]), e += t[4], r.MD(i[111]) && (e += t[123], r.MN(i[75], [ t[141], r.MC(i[111]), t[137] ].join("")), e += t[3]), e += t[4], r.MD(i[112]) && (e += t[5], r.MN(i[77], [ t[142], r.MC(i[112]), t[143], r.MC(i[113]), t[137] ].join("")), e += t[3]), e += t[4], r.MD(i[114]) && (e += t[5], r.MN(i[77], [ r.MC(i[77]), t[144], r.MC(i[114]), t[143], r.MC(i[115]), t[137] ].join("")), e += t[3]), e += t[4], r.MD(i[116]) && (e += t[5], r.MN(i[77], [ r.MC(i[77]), t[144], r.MC(i[116]), t[143], r.MC(i[117]), t[137] ].join("")), e += t[3]), e += t[4], r.MD(i[118]) && (e += t[5], r.MN(i[77], [ r.MC(i[77]), t[144], r.MC(i[118]), t[143], r.MC(i[119]), t[137] ].join("")), e += t[3]), e += t[4], r.MD(i[120]) && (e += t[5], r.MN(i[77], [ r.MC(i[77]), t[144], r.MC(i[120]), t[143], r.MC(i[121]), t[137] ].join("")), e += t[3]), e += t[4], r.MJ(r.MC(i[122])) && r.MK(r.MC(i[123])) && (e += t[123], r.MN(i[76], [ t[145], r.MC(i[122]), t[137] ].join("")), e += t[3]), e += t[117], r.MD(i[124]) && (e += t[123], r.MN(i[95], [ t[146], r.MC(i[124]), t[137] ].join("")), e += t[3]), e += t[4], r.MD(i[125]) && (e += t[123], r.MN(i[96], [ t[147], r.MC(i[125]), t[137] ].join("")), e += t[3]), e += [ t[148], r.MC(i[69]), t[149], r.MC(i[64]), t[150], r.MC(i[72]), t[123], r.MC(i[65]), t[123], r.MC(i[70]), t[123], r.MC(i[71]), t[123], r.MC(i[74]), t[5], r.MC(i[75]), t[123], r.MC(i[77]), t[123], r.MC(i[76]), t[123], r.MC(i[95]), t[123], r.MC(i[96]), t[151] ].join(""), r.MD(i[87]) && (e += [ t[152], r.MB(i[87]), t[153] ].join("")), e += t[134], r.MJ(r.MC(i[69]) + "" == "input") ? e += [ t[154], r.MC(i[66]), t[155] ].join("") :(e += [ t[156], r.MC(i[66]), t[157] ].join(""), r.MD(i[67]) && (e += t[158], r.MD(i[126]) && (e += t[159]), e += [ t[160], r.MC(i[67]), t[157] ].join("")), e += t[161], r.MD(i[128]) && (e += t[162], r.MJ(r.MC(i[127])) && (r.MJ(r.MC(i[127]) + "" == "nl") || r.MJ(r.MC(i[127]) + "" == "be")) && r.MJ(r.track_experiment("eDUIFBUNAAUTCKWFQTcYRJELWe")) && (e += t[163]), e += t[125]), e += [ t[164], r.MC(i[69]), t[165] ].join("")), e += t[3], _r_(e);
}
function o(e) {
if (_i_("3bb:61d1e4951"), e += t[177], r.MD(i[160])) {
e += t[151], r.MD(i[135]) && (e += t[7], r.MN(i[134], [ t[142], r.MB(i[135]), t[143], r.MB(i[136]), t[137] ].join("")), e += t[5]), e += t[151], r.MD(i[137]) && (e += t[7], r.MN(i[134], [ r.MB(i[134]), t[144], r.MB(i[137]), t[143], r.MB(i[138]), t[137] ].join("")), e += t[5]), e += t[151], r.MD(i[139]) && (e += t[7], r.MN(i[134], [ r.MB(i[134]), t[144], r.MB(i[139]), t[143], r.MB(i[140]), t[137] ].join("")), e += t[5]), e += t[151], r.MD(i[141]) && (e += t[7], r.MN(i[134], [ r.MB(i[134]), t[144], r.MB(i[141]), t[143], r.MB(i[142]), t[137] ].join("")), e += t[5]), e += t[151], r.MD(i[143]) && (e += t[7], r.MN(i[134], [ r.MB(i[134]), t[144], r.MB(i[143]), t[143], r.MB(i[144]), t[137] ].join("")), e += t[5]), e += t[151], r.MD(i[145]) && (e += t[178]), e += t[179];
var n = r.MB(i[146]);
r.MJ(n + "" == "small") && (e += t[180]), (r.MJ(r.MB(i[147])) || r.MJ(r.MB(i[148])) || r.MJ(r.MB(i[149]))) && (e += t[181]), r.MD(i[150]) && (e += t[182]), r.MJ(r.MB(i[151])) && (e += [ t[183], r.MC(i[151]), r.MC(i[152]), t[30] ].join("")), r.MJ(r.MB(i[147])) && r.MJ(r.MB(i[153])) && (e += [ t[184], r.MC(i[153]), t[30] ].join("")), r.MJ(r.MC(i[154]) + "" == "book") && (e += t[185]), e += [ r.MC(i[155]), t[186] ].join(""), r.MD(i[156]) && (e += [ t[136], r.MC(i[156]), t[23] ].join("")), r.MD(i[134]) && (e += [ r.MC(i[134]), t[30] ].join("")), r.MD(i[157]) && (e += t[187]), e += t[188], r.MD(i[147]) ? e += [ t[189], r.MC(i[147]), t[190] ].join("") :r.MD(i[148]) ? e += [ t[191], r.MC(i[148]), t[192] ].join("") :r.MD(i[149]) && (e += [ t[193], r.MC(i[149]), t[194] ].join("")), r.MD(i[63]) && (e += t[195]), r.MD(i[158]) && (e += [ t[196], r.MC(i[158]), t[197] ].join("")), r.MD(i[160]) && (e += t[198], r.MD(i[159]) && (e += t[199]), e += [ t[192], r.MC(i[160]), t[200] ].join("")), r.MD(i[63]) && (e += [ t[201], r.MC(i[63]), t[200] ].join("")), r.MD(i[63]) && (e += t[202]), r.MD(i[150]) && (e += t[203]), r.MD(i[159]) && (e += [ t[204], r.MC(i[161]), t[205], r.MC(i[162]), t[206], r.MC(i[163]), t[207], r.MB(i[164]), t[208], r.MB(i[165]), t[209] ].join("")), e += t[202], r.MD(i[145]) && (e += t[202]), e += t[3];
}
return e += t[117], r.MN(i[151], void 0), e += t[3], r.MN(i[147], void 0), e += t[3], r.MN(i[148], void 0), e += t[3], r.MN(i[149], void 0), e += t[3], r.MN(i[153], void 0), e += t[3], r.MN(i[158], void 0), e += t[3], r.MN(i[160], void 0), e += t[3], r.MN(i[63], void 0), e += t[3], r.MN(i[150], void 0), e += t[3], r.MN(i[156], void 0), e += t[3], r.MN(i[155], void 0), e += t[3], r.MN(i[146], void 0), e += t[4], r.MN(i[135], void 0), e += t[3], r.MN(i[136], void 0), e += t[3], r.MN(i[137], void 0), e += t[3], r.MN(i[138], void 0), e += t[3], r.MN(i[139], void 0), e += t[3], r.MN(i[140], void 0), e += t[3], r.MN(i[141], void 0), e += t[3], r.MN(i[142], void 0), e += t[3], r.MN(i[143], void 0), e += t[3], r.MN(i[144], void 0), e += t[4], r.MN(i[152], void 0), e += t[4], r.MN(i[134], void 0), e += t[3], r.MN("fe_banner__banners_count", r.MI(r.MB(i[166])) + r.MI(1)), e += t[4], r.MJ(r.MC(i[154]) + "" == "book") && r.MJ(r.track_experiment_stage("bp_banner_module_normalize_banners", 2)) ? e += t[3] :r.MJ(r.track_experiment_stage("bp_banner_module_normalize_banners", 1)) && (e += t[3]), e += t[3], _r_(e);
}
function s(e) {
if (_i_("3bb:72530cac1"), e += t[1], r.MD(i[0]) || (e += t[2], r.MN("fe_base_css_class", "overlapping-bookings"), e += t[3]), e += t[4], r.MD(i[3])) {
if (e += t[0], !r.MD(i[1])) {
if (e += t[5], r.MJ(r.MB(i[2])) && r.MJ(r.MB(i[4]))) {
e += t[6];
var a = "";
a += t[7], a += r.MJ(1 == r.array_length(r.MB(i[3]))) ? [ t[8], r.MC(i[2]), t[7] ].join("") :[ t[8], r.MC(i[4]), t[7] ].join(""), a += t[6], r.MN(i[1], a), e += t[5];
}
e += t[2];
}
if (e += t[0], r.MD(i[5]) ? e += t[2] :(e += t[5], r.MN("fe_pob_show_table", 1), e += t[2]), e += t[9], r.MD(i[6]) || (e += t[5], r.MN("fe_pob_cta_target", "_blank"), e += t[2]), e += t[0], r.MD(i[7]) || (e += t[5], r.MN("fe_pob_property_target", "_blank"), e += t[2]), e += t[0], r.MD(i[8]) || (e += t[5], r.MN("fe_pob_show_price", 1), e += t[2]), e += [ t[10], r.MB(i[0]), t[6], r.MB(i[9]), t[11] ].join(""), e += r.MJ(r.MC(i[10])) ? [ t[7], r.MB(i[0]), t[12] ].join("") :[ t[7], r.MB(i[0]), t[13] ].join(""), e += [ t[14], r.MB(i[11]), t[15] ].join(""), r.MJ(r.MB(i[1])) && (e += t[5], r.MD(i[5]) || (e += [ t[16], r.MB(i[0]), t[17], r.MB(i[12]), t[18], r.MC(i[1]), t[19] ].join("")), e += t[2]), e += t[20], r.MD(i[58])) {
e += t[5];
var a = "";
a += [ t[21], r.MB(i[0]), t[22], r.MB(i[14]), t[23] ].join(""), r.MD(i[15]) && (a += [ t[24], r.MC(i[15]), t[23] ].join("")), a += t[25];
var s = r.MC(i[3]) || [];
n.unshift(null);
for (var b = 1, p = s.length; p >= b; b++) n[0] = s[b - 1], a += [ t[26], r.MB(i[0]), t[27], r.MB(i[16]), t[28], r.MB(i[0]), t[29], r.MB(i[17]), t[30] ].join(""), r.MD(i[18]) && (a += t[31]), a += t[32], r.MD(i[23]) && (a += [ t[33], r.MB(i[0]), t[34], r.MB(i[0]), t[35], r.MB(i[0]), t[36], r.MB(i[19]), t[37], r.MC(i[20]), t[23] ].join(""), r.MD(i[21]) && (a += t[38]), a += t[39], r.MD(i[35]) && (a += t[40], a = l(a), a += t[58]), a += t[64]), a += t[65], a += t[65], r.MD(i[35]) || (a += t[41], a = c(a), a += t[63]), a += t[66], r.MD(i[23]) && (a += t[67]), a += t[68], r.MD(i[8]) && (a += [ t[69], r.MB(i[0]), t[29], r.MB(i[17]), t[70], r.MB(i[0]), t[71], r.MB(i[36]), t[72], r.ME(t[73], r.MB, r.MN, null), t[74], r.MB(i[0]), t[75], r.MB(i[37]), t[72], r.MC(i[33]), t[76] ].join("")), a += t[77], r.MD(i[44]) && (a += t[78], r.MD(i[45]) || (a += [ t[79], r.MB(i[0]), t[29], r.MB(i[17]), t[80], r.MB(i[0]), t[81], r.MB(i[38]), t[82] ].join(""), r.MJ(2 == r.MB(i[39])) && r.MJ(1 == r.MB(i[40])) && r.MJ(1 == r.MB(i[41])) && (a += t[83]), a += t[84], r.MJ(2 == r.MB(i[39])) && r.MJ(1 == r.MB(i[40])) && r.MJ(1 == r.MB(i[41])) ? (a += [ t[85], r.MC(i[42]), t[86], r.MC(i[31]), t[87] ].join(""), r.MD(i[43]) && (a += t[88]), a += t[84]) :a += [ t[89], r.MB(i[25]), t[90], r.MC(i[6]), t[84] ].join(""), a += [ t[91], r.MC(i[44]), t[92] ].join("")), a += t[93]), a += t[94], r.MD(i[46]) && (a += t[95]), a += t[96];
n.shift(), a += t[97], r.MJ(2 == r.MB(i[39])) && r.MJ(1 == r.MB(i[40])) && r.MJ(1 == r.MB(i[41])) && (a += t[98], n.unshift({
fe_preloader_with_text__text:r.MB(i[57])
}), a = d(a), n.shift(), a += t[112]), a += t[5], r.MN(i[13], a), e += t[2];
}
if (e += t[20], r.MD(i[5])) {
if (e += t[113], r.MD(i[130])) {
if (e += t[11], r.MJ(1 == r.array_length(r.MB(i[3]))) ? (e += t[7], r.MN("b_text", r.MB(i[59])), e += t[6]) :(e += t[7], r.MN("b_text", r.MB(i[60])), e += t[6]), e += t[11], r.MD(i[62])) {
e += t[7];
var a = "";
a += [ t[114], r.MC(i[61]), t[115] ].join(""), r.MN(i[61], a), e += t[6];
}
e += t[116];
var a = "";
a += t[7], n.unshift({
b_extra_classes:t[166],
b_href:r.MB(i[129]),
b_tag:t[167],
b_target:t[168],
b_type:t[169]
}), a = _(a), n.shift(), a += t[6], r.MN(i[63], a), e += t[5];
}
e += t[170], r.MD(i[58]) && (e += t[171], r.MN(i[131], [ t[8], r.MB(i[0]), t[172], r.MB(i[132]), t[173] ].join("")), e += t[151]), e += t[174];
var a = "";
a += [ t[175], r.F.entities("AEeNTffEebFTWcVTTDRAQZbXNUBO"), t[176] ].join(""), r.MJ(r.track_experiment("AEeNTffEebFTWcVTTDRAQZbXNUBO")) ? (a += t[7], n.unshift({
fe_banner__color_scheme:t[210],
fe_banner__extra_classes:t[211],
fe_banner__icon_class:t[212],
fe_banner__message_text:r.MB(i[167]),
fe_banner__title_text:r.MB(i[1])
}), a = o(a), n.shift(), a += t[6]) :(a += t[7], n.unshift({
fe_banner__color_scheme:t[210],
fe_banner__extra_classes:t[213],
fe_banner__icon_class:t[212],
fe_banner__message_text:r.MB(i[167]),
fe_banner__title_text:r.MB(i[1])
}), a = o(a), n.shift(), a += t[6]), a += t[11], r.MD(i[168]) ? a += [ t[214], r.MB(i[0]), t[215] ].join("") :r.MD(i[58]) && (a += t[216], n.unshift({
fe_banner__color_scheme:t[210],
fe_banner__extra_classes:r.MB(i[131]),
fe_banner__icon_class:t[30],
fe_banner__message_text:r.MB(i[13])
}), a = o(a), n.shift(), a += t[11]), a += t[151], r.MN(i[133], a), e += t[9];
}
e += t[217], r.MD(i[5]) ? e += [ t[5], r.MC(i[133]), t[2] ].join("") :(e += [ t[218], r.MB(i[0]), t[219], r.MB(i[132]), t[220] ].join(""), r.MD(i[167]) && (e += [ t[221], r.MB(i[0]), t[222], r.MB(i[169]), t[18], r.MB(i[167]), t[223] ].join("")), e += [ t[224], r.MC(i[13]), t[225] ].join("")), e += t[226];
}
return e += t[3], _r_(e);
}
function l(a) {
return _i_("3bb:2e9b867e1"), a += t[41], r.MD(i[23]) && (a += [ t[42], r.MB(i[0]), t[43], r.MB(i[22]), t[44] ].join("")), a += [ t[45], r.MB(i[0]), t[46], r.MB(i[24]), t[47], r.MB(i[25]), t[48], r.MC(i[7]), t[49] ].join(""), a += r.MD(i[27]) ? [ t[50], r.MB(i[26]), r.MC(i[27]), t[40] ].join("") :[ t[50], r.MB(i[26]), t[40] ].join(""), a += t[51], r.MD(i[32]) && (a += t[40], r.MD(i[18]) && (a += t[50], r.MJ(r.MB(i[31]) + "" == "FREE") && (a += t[52], a += r.MK(r.MB(i[28])) ? [ t[53], r.ME(t[54], r.MB, r.MN, null), t[55] ].join("") :r.MJ(r.MB(i[29]) + "" == "ja") ? [ t[53], (n.unshift({
date_with_short_weekday_with_year:r.MB(i[28])
}), e = r.ME(t[56], r.MB, r.MN, null), n.shift(), e), t[55] ].join("") :[ t[53], (n.unshift({
date_with_short_weekday_with_year:r.MB(i[30])
}), e = r.ME(t[57], r.MB, r.MN, null), n.shift(), e), t[55] ].join(""), a += t[50]), a += t[40]), a += t[58]), a += t[59], r.MD(i[34]) && (a += [ t[60], r.MC(i[33]), t[61] ].join("")), a += t[41], r.MD(i[23]) && (a += t[62]), a += t[63], _r_(a);
}
function c(a) {
return _i_("3bb:0de298451"), a += t[41], r.MD(i[23]) && (a += [ t[42], r.MB(i[0]), t[43], r.MB(i[22]), t[44] ].join("")), a += [ t[45], r.MB(i[0]), t[46], r.MB(i[24]), t[47], r.MB(i[25]), t[48], r.MC(i[7]), t[49] ].join(""), a += r.MD(i[27]) ? [ t[50], r.MB(i[26]), r.MC(i[27]), t[40] ].join("") :[ t[50], r.MB(i[26]), t[40] ].join(""), a += t[51], r.MD(i[32]) && (a += t[40], r.MD(i[18]) && (a += t[50], r.MJ(r.MB(i[31]) + "" == "FREE") && (a += t[52], a += r.MK(r.MB(i[28])) ? [ t[53], r.ME(t[54], r.MB, r.MN, null), t[55] ].join("") :r.MJ(r.MB(i[29]) + "" == "ja") ? [ t[53], (n.unshift({
date_with_short_weekday_with_year:r.MB(i[28])
}), e = r.ME(t[56], r.MB, r.MN, null), n.shift(), e), t[55] ].join("") :[ t[53], (n.unshift({
date_with_short_weekday_with_year:r.MB(i[30])
}), e = r.ME(t[57], r.MB, r.MN, null), n.shift(), e), t[55] ].join(""), a += t[50]), a += t[40]), a += t[58]), a += t[59], r.MD(i[34]) && (a += [ t[60], r.MC(i[33]), t[61] ].join("")), a += t[41], r.MD(i[23]) && (a += t[62]), a += t[63], _r_(a);
}
function d(e) {
_i_("3bb:805ae22d1"), e += t[4];
var n = "";
n += t[5], n += r.MD(i[48]) ? r.MC(i[48]) :t[99], n += t[3], r.MN(i[47], n), e += t[4];
var n = "";
n += t[5], n += r.MD(i[50]) ? r.MC(i[50]) :t[100], n += t[3], r.MN(i[49], n), e += t[4];
var n = "";
n += t[5], n += r.MD(i[52]) ? r.MC(i[52]) :t[101], n += t[3], r.MN(i[51], n), e += t[4];
var n = "";
return n += r.MD(i[54]) ? r.MC(i[54]) :t[102], r.MN(i[53], n), e += [ t[103], r.MC(i[55]), t[104], r.MC(i[47]), t[105], r.MC(i[49]), t[106], r.STATIC_HOSTNAME("/static/img/ajax-loaders/" + r.MB(i[53]), 0, 0, 0), t[107], r.MC(i[51]), t[108] ].join(""), e += r.MD(i[56]) ? [ t[41], r.MC(i[56]), t[78] ].join("") :[ t[41], r.ME(t[109], r.MB, r.MN, null), t[110] ].join(""), e += t[111], _r_(e);
}
return a += t[0], n.unshift({
active_perfectly_overlapped_bookings:r.MB(i[170]),
fe_scoped_css_class:t[114]
}), a = s(a), n.shift(), a += t[4], _r_(a);
});
}()), booking.jstmpl("overlapping_bookings_comparison", function() {
_i_("3bb:62b2a74e");
var e, t, i = [ "\n\n  ", '\n  <div class="comparison-container ', "lang_is_rtl", "lang_is_ltr", '">\n      ', '\n        <div data-et-view="', '"></div>\n      ', "\n    ", "\n      ", "\n        ", "<strong>", "</strong>", '\n        <p class="comparison-container__title">\n          ', "/private/pob_bp_banner_compare_bookings/name", "\n        </p>\n      ", '\n\n    <div class="comparison-layout">\n\n      ', '\n          <div  class="comparison-layout__item">\n            ', "\n\n\n\n", "\n", "\n\n\n\n\n", "\n  ", "\n\n\n\n\n\n", '<span class="u-display-inline-block">', "</span>", "/private/geo_hp_transport_hub_detail/name", '\n        - <strong class="u-display-inline-block">', "/private/sr_in_city_centre/name", "</strong>\n      ", '\n        - <span class="u-display-inline-block"> ', "/private/lp_hotel_distance_from_city_centre/name", "", "</span>\n      ", "\n\n", '\n\n\n\n\n\n\n\n\n\n<article class="comparison-property" data-id="', '">\n\n  \n  \n  \n\n  <div\n    class="comparison-property__block--image"\n      ', '\n        style="background-image:url(', ')"\n      ', "\n    >\n\n    ", '\n\n      <div class="comparison-property__overlay">\n\n          <div class="comparison-property__review">\n            ', "\n\n\n\n\n\n\n", '\n	<div style="color:#fff;background:#ff0000;padding:0.5em;border-radius:0.5em;max-width:30em;">Uh oh! looks like you are giving me a formatted score value, please give me a non formatted one</div>\n', "\n\n\n", "\n	", "none", "auto", "num_reviews_sr_page", "\n\n    ", "   ", "        ", "             ", "    ", " ", "     ", "         ", "      ", "  ", "/private/review_adj_superb/name", "\n\n	", "\n	\n	", "\n		", "review-score-widget__", "review-score-widget__score-only ", "review-score-widget__12 ", "review-score-widget__14 ", "review-score-widget__20 ", "review-score-widget__24 ", " review-score-widget ", " review-score-widget__no-subtext", " review-score-widget__flipped", 'id="', '"', "\n\n\n\n\n\n\n\n\n", "\n		<", 'a href="', ' target="', "span", ' class="review-score-widget__text" role="link" aria-label="', "/private/a11y_adjective_rating/name", '">\n			', "\n		</", "a", ">\n	", "span\n        ", ' class="review-score-widget__subtext" role="link" aria-label="', "/private/acc_sr_review_score_rated_with_score_end/name", '"\n        ', '\n            data-et-view="', ':2"\n        ', "\n        >\n        \n        ", "\n            ", "/private/ugcc_sr_num_plus_reviews/name", "50", "\n\n	\n	\n	\n\n	\n\n	<span\n		", '\n		class="', " review-score-widget__debug", '"\n			', "\n				", "\n			", '\n				data-et-view="', "\n	>\n		", "\n			\n		", "\n\n		", "\n\n		\n		", "\n\n			", "\n				\n				", "\n	<", ' class="review-score-badge" role="link" aria-label="', "/private/a11y_rating_score_for_screenreader/name", '">\n		', "\n	</", ">\n", "\n					\n					", "\n					", '\n						<span class="review-score-widget__body">\n							', "\n							", "\n						</span>\n					", '\n					<span class="review-score-widget__body">\n						', "\n						", "\n					</span>\n				", "\n	</span>\n\n	\n	\n\n", "\n\n\n\n\n\n\n\n\n\n", "\n	\n	\n", "text-only", "\n          </div>\n\n      </div>\n\n    ", '\n\n  </div>\n\n\n  \n  \n  \n\n\n  \n\n  <div class="comparison-property__block--title">\n\n    <p class=" comparison-property__text--large">\n      ', '\n        <a href="', '" class="comparison-property__link js-view_booking--cta u-text-decoration:none" title="', '"><strong class="u-font-weight:bold">', "</strong></a>\n      ", '\n        <strong class="u-font-weight:bold">', '\n    </p>\n\n\n\n  \n\n\n  </div>\n\n\n  <div class="comparison-property__block">\n\n  \n\n    ', '\n      <p class="comparison-property__text">\n\n          <strong class="u-font-weight:bold">\n            ', "\n              ", ",\n            ", "\n          </strong>\n\n          ", "\n          ", "\n\n      </p>\n    ", '\n        <p class="comparison-property__text--media">\n          <i class="bicon media-icon bicon-airport"></i> ', "\n        </p>\n    ", '\n        <p class="comparison-property__text--media">\n          <i class="bicon media-icon bicon-metro"></i> ', '\n\n        <p class="comparison-property__text--media">\n          <i class="bicon media-icon bicon-train"></i> ', "\n        </p>\n\n    ", '\n\n\n\n  </div>\n\n\n  \n  \n  \n\n  <div class="comparison-property__block--alternate--price">\n      <p class="comparison-property__text--smaller--flush">', "/private/bp_room_for_x_nights/name", '</p>\n      <p class="comparison-property__text--large"><strong class="u-font-weight:bold">', "</strong></p>\n\n      \n      ", '\n        <div class="comparison-property__text comparison-property__text--non-free-cancel fe_banner fe_banner__scale_small fe_banner__red">\n            ', "/private/bhep_bs_pob_warning_no_free_cxln/name", "\n        </div>\n      ", '\n\n  </div>\n\n\n  \n  \n  \n\n  <div class="comparison-property__block--centered--cta">\n    ', '\n\n      <p class="comparison-property__text">\n         <strong class="u-font-weight:bold comparison-property__link u-text-decoration:none js-continue-booking">', "/private/bs3_check_booking_button/name", "</strong>\n      </p>\n\n    ", '\n  <p class="comparison-property__text">\n    <a target="_blank" href="', '" class="c-button u-padding:10">', "/private/pb_ss_hp_banner_view_booking_cta/name", "</a>\n  </p>\n\n", "b-button", "Button Text should be overriden", "button", "c-button", "0", " b-button_primary", " b-button_secondary", " b-button_warning", " b-button_disabled", " b-button_primary b-button_small", " b-button_secondary b-button_small", " b-button_warning b-button_small", " b-button_primary b-button_flat", "1", 'href="', 'data-title="', 'type="', 'rel="', "data-", '="', " data-", 'target="', 'hotelUrl="', 'data-hotelid="', "\n\n\n<", '\n	class="', '"\n	', '\n        data-track-event="', '"\n    ', '\n		value="', '"/>\n	', '\n	>\n		<span class="b-button__text">', "</span>\n		", '\n				<span class="b-button__from-text" ', 'style="display:inline-block"', ">", '\n				<span class="b-button__from-text book_now_rt_summary g-hidden"></span>\n\n				', '\n                    <span class="b-button__from-text taxes_and_charges_near_price_btn_text"></span>\n				', "\n\n		</", "comparison-property__cta js-view_booking--cta", "_blank", "primary", '\n    \n    <div class="slidebox  slidebox--cancel-booking" id="slidebox-cancel-pob">\n        <div class="slidebox__inner  js-slidebox__inner  myBookingOptionsPanel">\n            ', "100px", "80%", "32px", "ajax-loader-64.gif", '\n\n\n\n<div\n    class="preloader-with-text ', '"\n    style="min-height: ', ';"\n>\n    <div class="preloader-with-text__container">\n        <div class="preloader-with-text__table" style="width: ', ';">\n            <div class="preloader-with-text__cell">\n\n                <div class="preloader-with-text__spinner">\n                    <img\n                        src="', '"\n                        style="width: ', ';"\n                        alt=""\n                    />\n                </div>\n\n                <div class="preloader-with-text__text">\n                    ', "\n                        ", "\n                    ", "/private/loading/name", "...\n                    ", "\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n", "\n        </div>\n    </div> <!-- /slidebox--cancel-booking -->\n", "\n\n            ", "true", "Cancel booking, ", "slidebox-preopen-callback", "slidebox-load", "slidebox-submit-callback", "trackname", "slidebox-target", "slidebox-ajax-failure-feedback", "cancelOpenCallback", "cancelButtonSubmitCallback", "#slidebox-cancel-pob", "c-button--warning js-cxl-btn mb-btn mb-cancel custom_track hasSlideBox js-bs2-cancel-slidebox js-cancel-lightbox js-cancel-in-same-page comparison-property__cta", "c-button--warning js-cxl-btn mb-btn mb-cancel custom_track hasSlideBox js-cancel-lightbox js-bs2-cancel-slidebox js-cancel-in-same-page comparison-property__cta", "\n\n        ", "pbsource=mybooking_widget_cancel", "c-button--warning js-cxl-btn js-cancel-in-same-page js-bs2-cancel-slidebox comparison-property__cta", "\n\n  </div>\n\n</article>\n", '\n          </div>\n          <div  class="comparison-layout__spacer"> </div>\n        ', "\n\n\n      ", '\n\n        <div  class="comparison-layout__item">\n          ', "\n        </div>\n\n      ", '\n\n      <div  class="comparison-layout__spacer--empty"> </div>\n\n    </div>\n  </div>\n', "mb-overlapping-bookings" ], n = [ "b_lang_is_rtl", "fe_track_stage_on_view", "comparison_property", "hotel_name", "hname", "active_perfectly_overlapped_bookings", "num_bookings", "review_nr", "total_score", "location_details", "distance_to_hub", "distance_formatted", "property_distance_to_airport", "airport_name", "type", "property_distance_to_train", "station_name", "property_distance_to_metro", "property_distance_from_city_center", "distance", "referenceCityCenterName", "hid", "main_photo_url", "b_dev_server", "score", "dont_format_score", "fe_text", "text", "fe_subtext", "subtext", "fe_widget_subtext", "sample_size", "fe_formatted_sample_size", "align", "b_action_name_is_searchresults", "b_action_name_is_hotel", "b_is_desktop_site", "wrapper_tag_name", "fe_review_score_word_class_list", "fe_review_score", "custom_class", "review_adj_very_poor", "review_adj_poor", "review_adj_disappointing", "review_adj_average_passable", "review_adj_average_okay", "review_adj_pleasant", "low_score_adjectives", "fd_lp_header_rs", "review_adj_good", "review_adj_very_good", "review_adj_fabulous", "fe_review_score_word_copy", "review_adj_exceptional", "fe_widget_text", "prepend_text", "append_text", "fe_score", "prefix", "fe_score_word_name", "suffix", "fe_classname", "fe_widget_style", "style", "score_only", "fe_widget_layout", "layout", "fe_widget_align", "fe_widget_size", "size", "fe_badge_style", "fe_widget_class", "flip", "extra_classes", "fe_widget_id", "widget_id", "fe_rating", "fe_widget_text_element", "text_link_url", "text_link_target", "fe_rating_adj", "fe_widget_subtext_element", "subtext_link_url", "subtext_link_target", "review_score_widget", "b_site_type", "extra_attributes", "track_view", "prepend_html", "badge_link_url", "badge_link_target", "fe_formatted_score", "fe_is_alt_version", "append_html", "render", "fe_show_overlay", "mybooking_url", "property_name", "district", "city", "num_nights", "total_price_pretty", "fe_show_non_free", "unbooked", "b_btn_class", "b_btn_id", "b_btn_text", "b_btn_outside_text", "b_btn_caption_text", "b_btn_tag", "b_btn_attr_type", "b_btn_attr", "b_btn_href", "b_btn_extra_classes", "b_btn_title", "b_btn_rel", "b_btn_target", "b_btn_data", "fe_cbtn_comp_class", "fe_cbtn_class", "fe_cbtn_type", "fe_cbtn_size", "fe_cbtn_disabled", "fe_cbtn_icon_only", "fe_cbtn_icon_left", "fe_cbtn_icon_right", "fe_cbtn_track_exp", "fe_cbtn_track_event", "fe_btn_track_event", "fe_cbtn_track_goal", "fe_cbtn_track_stage", "fe_cbtn_is_anchor", "fe_cbtn_is_input", "fe_cbtn_is_button", "fe_cbtn_no_style", "b_btn_hotel_url", "b_btn_data_hotelid", "b_text", "b_outside_text", "b_caption_text", "b_type", "b_tag", "fe_btn_is_anchor", "fe_btn_is_input", "fe_btn_is_button", "b_id", "b_href", "fe_btn_no_style", "b_extra_classes", "b_title", "b_attr_type", "b_attr", "b_rel", "b_data_id", "b_data_value", "b_data_id_2", "b_data_value_2", "b_data_id_3", "b_data_value_3", "b_data_id_4", "b_data_value_4", "b_data_id_5", "b_data_value_5", "b_target", "b_bb_is_sabrered_app", "b_hotel_url", "b_data_hotelid", "b_from_price_inlined", "b_guest_country", "b_add_rt_summary", "pb_ss_hp_banner_view_booking_cta", "fe_preloader_with_text__min_height_default", "fe_preloader_with_text__min_height", "fe_preloader_with_text__width_default", "fe_preloader_with_text__width", "fe_preloader_with_text__spinner_size_default", "fe_preloader_with_text__spinner_size", "fe_preloader_with_text__spinner_default", "fe_preloader_with_text__spinner", "fe_preloader_with_text__class", "fe_preloader_with_text__text", "loading", "fe_action", "fe_user_auth_level_is_high", "all_free_cancellations_and_no_prepayment_only", "fe_stage", "fe_feature_running_MYBOOKING_AJAX_FAILURE_FEEDBACK_copy", "fe_feature_running_MYBOOKING_AJAX_FAILURE_FEEDBACK", "cancellation_type_copy", "cancellation_type", "cancel_summary_url_copy", "cancel_summary_url", "cx_double_booked_message_cancel", "cancellation_link", "b_query_params_delimiter", "show_cancel_cta", "bookings" ];
return _r_(function(a) {
_i_("3bb:27cd613c");
var r = "", _ = this.fn;
function o(t) {
if (_i_("3bb:33165d2f"), _.MD(n[5])) {
t += i[1], t += _.MD(n[0]) ? i[2] :i[3], t += i[4], _.MD(n[1]) && (t += [ i[5], _.MC(n[1]), i[6] ].join("")), t += i[7], _.MD(n[2]) && (t += i[8], _.MJ(e = _.MC(n[2])) && !_.IS_EMPTY_OBJECT(e) && (a.unshift(e), t += i[9], _.MN(n[3], [ i[10], _.MC(n[4]), i[11] ].join("")), t += i[9], _.MN("num_bookings", _.array_length(_.MB(n[5]))), t += [ i[12], _.ME(i[13], _.MB, _.MN, _.MO(_.MC(n[6]), null, i[13])), i[14] ].join(""), a.shift()), t += i[7]), t += i[15], _.MD(n[2]) && (t += i[9], _.MJ(e = _.MC(n[2])) && !_.IS_EMPTY_OBJECT(e) && (a.unshift(e), t += i[16], a.unshift({
b_lang_is_rtl:_.MC(n[0]),
b_site_type:_.MC(n[85]),
fe_show_non_free:i[161],
hid:_.MB(n[21]),
mybooking_url:_.MB(n[96]),
num_nights:_.MB(n[100]),
property_name:_.MB(n[4]),
total_price_pretty:_.MB(n[101])
}), t = m(t), a.shift(), t += i[234], a.shift()), t += i[8]), t += i[235];
var r = _.MC(n[5]) || [];
a.unshift(null);
for (var o = 1, s = r.length; s >= o; o++) a[0] = r[o - 1], t += i[236], a.unshift({
b_lang_is_rtl:_.MC(n[0]),
b_site_type:_.MC(n[85]),
fe_show_non_free:_.MB(n[102]),
hid:_.MB(n[21]),
mybooking_url:_.MB(n[96]),
num_nights:_.MB(n[100]),
property_name:_.MB(n[4]),
total_price_pretty:_.MB(n[101])
}), t = g(t), a.shift(), t += i[237];
a.shift(), t += i[238];
}
return t += i[18], _r_(t);
}
function s(e) {
return _i_("3bb:83cd4f09"), _.MN("fe_rating", _.MI(_.MB(n[24])) + _.MI(0)), e += i[41], _.MN("fe_rating_adj", ""), e += i[18], _.MJ(_.MB(n[76]) >= 0) && _.MJ(_.MB(n[76]) < 3) && (e += i[42], _.MN("fe_rating_adj", "1"), e += i[18]), e += i[32], _.MJ(_.MB(n[76]) >= 3) && _.MJ(_.MB(n[76]) < 4) && (e += i[42], _.MN("fe_rating_adj", "2"), e += i[18]), e += i[32], _.MJ(_.MB(n[76]) >= 4) && _.MJ(_.MB(n[76]) < 5) && (e += i[42], _.MN("fe_rating_adj", "3"), e += i[18]), e += i[32], _.MJ(_.MB(n[76]) >= 5) && _.MJ(_.MB(n[76]) < 5.6) && (e += i[42], _.MN("fe_rating_adj", "4"), e += i[18]), e += i[32], _.MJ(_.MB(n[76]) >= 5.6) && _.MJ(_.MB(n[76]) < 6) && (e += i[42], _.MN("fe_rating_adj", "5"), e += i[18]), e += i[32], _.MJ(_.MB(n[76]) >= 6) && _.MJ(_.MB(n[76]) < 7) && (e += i[42], _.MN("fe_rating_adj", "6"), e += i[18]), e += i[32], _.MJ(_.MB(n[76]) >= 7) && _.MJ(_.MB(n[76]) < 8) && (e += i[42], _.MN("fe_rating_adj", "7"), e += i[18]), e += i[32], _.MJ(_.MB(n[76]) >= 8) && _.MJ(_.MB(n[76]) < 8.6) && (e += i[42], _.MN("fe_rating_adj", "8"), e += i[18]), e += i[32], _.MJ(_.MB(n[76]) >= 8.6) && _.MJ(_.MB(n[76]) < 9) && (e += i[42], _.MN("fe_rating_adj", "9"), e += i[18]), e += i[32], _.MJ(_.MB(n[76]) >= 9) && _.MJ(_.MB(n[76]) < 9.5) && (e += i[42], _.MN("fe_rating_adj", "10"), e += i[18]), e += i[32], _.MJ(_.MB(n[76]) >= 9.5) && (e += i[42], _.MN("fe_rating_adj", "11"), e += i[18]), _r_(e);
}
function l(e) {
return _i_("3bb:f87dc5ba"), _.MN("fe_rating", _.MI(_.MB(n[24])) + _.MI(0)), e += i[41], _.MN("fe_rating_adj", ""), e += i[18], _.MJ(_.MB(n[76]) >= 0) && _.MJ(_.MB(n[76]) < 3) && (e += i[42], _.MN("fe_rating_adj", "1"), e += i[18]), e += i[32], _.MJ(_.MB(n[76]) >= 3) && _.MJ(_.MB(n[76]) < 4) && (e += i[42], _.MN("fe_rating_adj", "2"), e += i[18]), e += i[32], _.MJ(_.MB(n[76]) >= 4) && _.MJ(_.MB(n[76]) < 5) && (e += i[42], _.MN("fe_rating_adj", "3"), e += i[18]), e += i[32], _.MJ(_.MB(n[76]) >= 5) && _.MJ(_.MB(n[76]) < 5.6) && (e += i[42], _.MN("fe_rating_adj", "4"), e += i[18]), e += i[32], _.MJ(_.MB(n[76]) >= 5.6) && _.MJ(_.MB(n[76]) < 6) && (e += i[42], _.MN("fe_rating_adj", "5"), e += i[18]), e += i[32], _.MJ(_.MB(n[76]) >= 6) && _.MJ(_.MB(n[76]) < 7) && (e += i[42], _.MN("fe_rating_adj", "6"), e += i[18]), e += i[32], _.MJ(_.MB(n[76]) >= 7) && _.MJ(_.MB(n[76]) < 8) && (e += i[42], _.MN("fe_rating_adj", "7"), e += i[18]), e += i[32], _.MJ(_.MB(n[76]) >= 8) && _.MJ(_.MB(n[76]) < 8.6) && (e += i[42], _.MN("fe_rating_adj", "8"), e += i[18]), e += i[32], _.MJ(_.MB(n[76]) >= 8.6) && _.MJ(_.MB(n[76]) < 9) && (e += i[42], _.MN("fe_rating_adj", "9"), e += i[18]), e += i[32], _.MJ(_.MB(n[76]) >= 9) && _.MJ(_.MB(n[76]) < 9.5) && (e += i[42], _.MN("fe_rating_adj", "10"), e += i[18]), e += i[32], _.MJ(_.MB(n[76]) >= 9.5) && (e += i[42], _.MN("fe_rating_adj", "11"), e += i[18]), _r_(e);
}
function c(e) {
return _i_("3bb:05ca539e"), e += i[105], _.MD(n[89]) ? (e += [ i[73], _.MB(n[89]), i[70] ].join(""), _.MD(n[90]) && (e += [ i[74], _.MB(n[90]), i[70] ].join(""))) :e += i[75], e += [ i[106], (a.unshift({
review_score_number:_.MB(n[91])
}), t = _.ME(i[107], _.MB, _.MN, null), a.shift(), t), i[108], _.MB(n[91]), i[109] ].join(""), e += _.MD(n[89]) ? i[80] :i[75], e += i[110], _r_(e);
}
function d(e) {
return _i_("3bb:ec4e833a"), e += i[105], _.MD(n[89]) ? (e += [ i[73], _.MB(n[89]), i[70] ].join(""), _.MD(n[90]) && (e += [ i[74], _.MB(n[90]), i[70] ].join(""))) :e += i[75], e += [ i[106], (a.unshift({
review_score_number:_.MB(n[91])
}), t = _.ME(i[107], _.MB, _.MN, null), a.shift(), t), i[108], _.MB(n[91]), i[109] ].join(""), e += _.MD(n[89]) ? i[80] :i[75], e += i[110], _r_(e);
}
function b(e) {
return _i_("3bb:dd496c0b"), e += i[105], _.MD(n[89]) ? (e += [ i[73], _.MB(n[89]), i[70] ].join(""), _.MD(n[90]) && (e += [ i[74], _.MB(n[90]), i[70] ].join(""))) :e += i[75], e += [ i[106], (a.unshift({
review_score_number:_.MB(n[91])
}), t = _.ME(i[107], _.MB, _.MN, null), a.shift(), t), i[108], _.MB(n[91]), i[109] ].join(""), e += _.MD(n[89]) ? i[80] :i[75], e += i[110], _r_(e);
}
function p(e) {
_i_("3bb:139f107c"), e += i[17], _.MN(n[104], i[157]), e += i[18], _.MN(n[105], void 0), e += i[18], _.MN(n[106], i[158]), e += i[18], _.MN(n[107], void 0), e += i[18], _.MN(n[108], void 0), e += i[18], _.MN(n[109], i[159]), e += i[18], _.MN(n[110], void 0), e += i[18], _.MN(n[111], void 0), e += i[18], _.MN(n[112], void 0), e += i[18], _.MN(n[113], void 0), e += i[18], _.MN(n[114], void 0), e += i[18], _.MN(n[115], void 0), e += i[18], _.MN(n[116], void 0), e += i[18], _.MN(n[117], void 0), e += i[41], _.MN(n[118], i[160]), e += i[32], _.MN(n[119], void 0), e += i[18], _.MN(n[120], void 0), e += i[18], _.MN(n[121], void 0), e += i[18], _.MN(n[122], void 0), e += i[18], _.MN(n[123], void 0), e += i[18], _.MN(n[124], void 0), e += i[18], _.MN(n[125], void 0), e += i[18], _.MN(n[126], void 0), e += i[32], _.MD(n[128]) ? (e += i[42], _.MN(n[127], _.MB(n[128])), e += i[18]) :(e += i[42], _.MN(n[127], void 0), e += i[18]), e += i[32], _.MN(n[129], void 0), e += i[18], _.MN(n[130], void 0), e += i[32], _.MN(n[131], i[161]), e += i[18], _.MN(n[132], i[161]), e += i[18], _.MN(n[133], i[161]), e += i[32], _.MN(n[134], i[161]), e += i[41], _.MN(n[135], void 0), e += i[18], _.MN(n[136], void 0), e += i[32], _.MD(n[137]) && (e += i[42], _.MN(n[106], _.MC(n[137])), e += i[18]), e += i[32], _.MD(n[138]) && (e += i[42], _.MN(n[107], _.MC(n[138])), e += i[18]), e += i[32], _.MD(n[139]) && (e += i[42], _.MN(n[108], _.MC(n[139])), e += i[18]), e += i[32];
var t = _.MC(n[140]);
if (_.MJ(t + "" == "primary") ? (e += i[59], _.MN(n[104], [ _.MC(n[104]), i[162] ].join("")), e += i[42]) :_.MJ(t + "" == "secondary") ? (e += i[59], _.MN(n[104], [ _.MC(n[104]), i[163] ].join("")), e += i[42]) :_.MJ(t + "" == "warning") ? (e += i[59], _.MN(n[104], [ _.MC(n[104]), i[164] ].join("")), e += i[42]) :_.MJ(t + "" == "disabled") ? (e += i[59], _.MN(n[104], [ _.MC(n[104]), i[165] ].join("")), e += i[42]) :_.MJ(t + "" == "primary-small") ? (e += i[59], _.MN(n[104], [ _.MC(n[104]), i[166] ].join("")), e += i[42]) :_.MJ(t + "" == "secondary-small") ? (e += i[59], _.MN(n[104], [ _.MC(n[104]), i[167] ].join("")), e += i[42]) :_.MJ(t + "" == "warning-small") ? (e += i[59], _.MN(n[104], [ _.MC(n[104]), i[168] ].join("")), e += i[42]) :_.MJ(t + "" == "primary-flat") && (e += i[59], _.MN(n[104], [ _.MC(n[104]), i[169] ].join("")), e += i[18]), e += i[32], _.MD(n[141]) && (e += i[42], _.MN(n[109], _.MC(n[141])), e += i[57], _.MJ(/^a$/i.test(_.MC(n[109]))) && _.MN(n[142], i[170]), e += i[42], _.MJ(/^input$/i.test(_.MC(n[109]))) && _.MN(n[143], i[170]), e += i[42], _.MJ(/^button$/i.test(_.MC(n[109]))) && _.MN(n[144], i[170]), e += i[18]), e += i[32], _.MD(n[145]) && (e += i[42], _.MN(n[105], [ i[69], _.MC(n[145]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[146]) && (e += i[42], _.MN(n[112], [ i[171], _.MC(n[146]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[147]) && (e += i[42], _.MN(n[134], _.MC(n[147])), e += i[18]), e += i[32], _.MD(n[148])) {
e += i[42];
var a = "";
_.MD(n[134]) || (a += _.MC(n[104])), a += [ i[51], _.MC(n[148]) ].join(""), _.MN(n[104], a), e += i[18];
}
return e += i[32], _.MD(n[149]) && (e += i[42], _.MN(n[114], [ i[172], _.F.entities(_.MC(n[149])), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[150]) && (e += i[42], _.MN(n[110], [ i[173], _.MC(n[150]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[151]) && (e += i[42], _.MN(n[111], _.MC(n[151])), e += i[18]), e += i[32], _.MD(n[152]) && (e += i[42], _.MN(n[115], [ i[174], _.MC(n[152]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[153]) && (e += i[7], _.MN(n[117], [ i[175], _.MC(n[153]), i[176], _.MC(n[154]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[155]) && (e += i[7], _.MN(n[117], [ _.MC(n[117]), i[177], _.MC(n[155]), i[176], _.MC(n[156]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[157]) && (e += i[7], _.MN(n[117], [ _.MC(n[117]), i[177], _.MC(n[157]), i[176], _.MC(n[158]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[159]) && (e += i[7], _.MN(n[117], [ _.MC(n[117]), i[177], _.MC(n[159]), i[176], _.MC(n[160]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[161]) && (e += i[7], _.MN(n[117], [ _.MC(n[117]), i[177], _.MC(n[161]), i[176], _.MC(n[162]), i[70] ].join("")), e += i[18]), e += i[32], _.MJ(_.MC(n[163])) && _.MK(_.MC(n[164])) && (e += i[42], _.MN(n[116], [ i[178], _.MC(n[163]), i[70] ].join("")), e += i[18]), e += i[17], _.MD(n[165]) && (e += i[42], _.MN(n[135], [ i[179], _.MC(n[165]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[166]) && (e += i[42], _.MN(n[136], [ i[180], _.MC(n[166]), i[70] ].join("")), e += i[18]), e += [ i[181], _.MC(n[109]), i[182], _.MC(n[104]), i[183], _.MC(n[112]), i[42], _.MC(n[105]), i[42], _.MC(n[110]), i[42], _.MC(n[111]), i[42], _.MC(n[114]), i[7], _.MC(n[115]), i[42], _.MC(n[117]), i[42], _.MC(n[116]), i[42], _.MC(n[135]), i[42], _.MC(n[136]), i[46] ].join(""), _.MD(n[127]) && (e += [ i[184], _.MB(n[127]), i[185] ].join("")), e += i[57], _.MJ(_.MC(n[109]) + "" == "input") ? e += [ i[186], _.MC(n[106]), i[187] ].join("") :(e += [ i[188], _.MC(n[106]), i[189] ].join(""), _.MD(n[107]) && (e += i[190], _.MD(n[167]) && (e += i[191]), e += [ i[192], _.MC(n[107]), i[189] ].join("")), e += i[101], _.MD(n[169]) && (e += i[193], _.MJ(_.MC(n[168])) && (_.MJ(_.MC(n[168]) + "" == "nl") || _.MJ(_.MC(n[168]) + "" == "be")) && _.MJ(_.track_experiment("eDUIFBUNAAUTCKWFQTcYRJELWe")) && (e += i[194]), e += i[59]), e += [ i[195], _.MC(n[109]), i[81] ].join("")), e += i[18], _r_(e);
}
function u(e) {
_i_("3bb:2a2eb227"), e += i[17], _.MN(n[104], i[157]), e += i[18], _.MN(n[105], void 0), e += i[18], _.MN(n[106], i[158]), e += i[18], _.MN(n[107], void 0), e += i[18], _.MN(n[108], void 0), e += i[18], _.MN(n[109], i[159]), e += i[18], _.MN(n[110], void 0), e += i[18], _.MN(n[111], void 0), e += i[18], _.MN(n[112], void 0), e += i[18], _.MN(n[113], void 0), e += i[18], _.MN(n[114], void 0), e += i[18], _.MN(n[115], void 0), e += i[18], _.MN(n[116], void 0), e += i[18], _.MN(n[117], void 0), e += i[41], _.MN(n[118], i[160]), e += i[32], _.MN(n[119], void 0), e += i[18], _.MN(n[120], void 0), e += i[18], _.MN(n[121], void 0), e += i[18], _.MN(n[122], void 0), e += i[18], _.MN(n[123], void 0), e += i[18], _.MN(n[124], void 0), e += i[18], _.MN(n[125], void 0), e += i[18], _.MN(n[126], void 0), e += i[32], _.MD(n[128]) ? (e += i[42], _.MN(n[127], _.MB(n[128])), e += i[18]) :(e += i[42], _.MN(n[127], void 0), e += i[18]), e += i[32], _.MN(n[129], void 0), e += i[18], _.MN(n[130], void 0), e += i[32], _.MN(n[131], i[161]), e += i[18], _.MN(n[132], i[161]), e += i[18], _.MN(n[133], i[161]), e += i[32], _.MN(n[134], i[161]), e += i[41], _.MN(n[135], void 0), e += i[18], _.MN(n[136], void 0), e += i[32], _.MD(n[137]) && (e += i[42], _.MN(n[106], _.MC(n[137])), e += i[18]), e += i[32], _.MD(n[138]) && (e += i[42], _.MN(n[107], _.MC(n[138])), e += i[18]), e += i[32], _.MD(n[139]) && (e += i[42], _.MN(n[108], _.MC(n[139])), e += i[18]), e += i[32];
var t = _.MC(n[140]);
if (_.MJ(t + "" == "primary") ? (e += i[59], _.MN(n[104], [ _.MC(n[104]), i[162] ].join("")), e += i[42]) :_.MJ(t + "" == "secondary") ? (e += i[59], _.MN(n[104], [ _.MC(n[104]), i[163] ].join("")), e += i[42]) :_.MJ(t + "" == "warning") ? (e += i[59], _.MN(n[104], [ _.MC(n[104]), i[164] ].join("")), e += i[42]) :_.MJ(t + "" == "disabled") ? (e += i[59], _.MN(n[104], [ _.MC(n[104]), i[165] ].join("")), e += i[42]) :_.MJ(t + "" == "primary-small") ? (e += i[59], _.MN(n[104], [ _.MC(n[104]), i[166] ].join("")), e += i[42]) :_.MJ(t + "" == "secondary-small") ? (e += i[59], _.MN(n[104], [ _.MC(n[104]), i[167] ].join("")), e += i[42]) :_.MJ(t + "" == "warning-small") ? (e += i[59], _.MN(n[104], [ _.MC(n[104]), i[168] ].join("")), e += i[42]) :_.MJ(t + "" == "primary-flat") && (e += i[59], _.MN(n[104], [ _.MC(n[104]), i[169] ].join("")), e += i[18]), e += i[32], _.MD(n[141]) && (e += i[42], _.MN(n[109], _.MC(n[141])), e += i[57], _.MJ(/^a$/i.test(_.MC(n[109]))) && _.MN(n[142], i[170]), e += i[42], _.MJ(/^input$/i.test(_.MC(n[109]))) && _.MN(n[143], i[170]), e += i[42], _.MJ(/^button$/i.test(_.MC(n[109]))) && _.MN(n[144], i[170]), e += i[18]), e += i[32], _.MD(n[145]) && (e += i[42], _.MN(n[105], [ i[69], _.MC(n[145]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[146]) && (e += i[42], _.MN(n[112], [ i[171], _.MC(n[146]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[147]) && (e += i[42], _.MN(n[134], _.MC(n[147])), e += i[18]), e += i[32], _.MD(n[148])) {
e += i[42];
var a = "";
_.MD(n[134]) || (a += _.MC(n[104])), a += [ i[51], _.MC(n[148]) ].join(""), _.MN(n[104], a), e += i[18];
}
return e += i[32], _.MD(n[149]) && (e += i[42], _.MN(n[114], [ i[172], _.F.entities(_.MC(n[149])), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[150]) && (e += i[42], _.MN(n[110], [ i[173], _.MC(n[150]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[151]) && (e += i[42], _.MN(n[111], _.MC(n[151])), e += i[18]), e += i[32], _.MD(n[152]) && (e += i[42], _.MN(n[115], [ i[174], _.MC(n[152]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[153]) && (e += i[7], _.MN(n[117], [ i[175], _.MC(n[153]), i[176], _.MC(n[154]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[155]) && (e += i[7], _.MN(n[117], [ _.MC(n[117]), i[177], _.MC(n[155]), i[176], _.MC(n[156]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[157]) && (e += i[7], _.MN(n[117], [ _.MC(n[117]), i[177], _.MC(n[157]), i[176], _.MC(n[158]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[159]) && (e += i[7], _.MN(n[117], [ _.MC(n[117]), i[177], _.MC(n[159]), i[176], _.MC(n[160]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[161]) && (e += i[7], _.MN(n[117], [ _.MC(n[117]), i[177], _.MC(n[161]), i[176], _.MC(n[162]), i[70] ].join("")), e += i[18]), e += i[32], _.MJ(_.MC(n[163])) && _.MK(_.MC(n[164])) && (e += i[42], _.MN(n[116], [ i[178], _.MC(n[163]), i[70] ].join("")), e += i[18]), e += i[17], _.MD(n[165]) && (e += i[42], _.MN(n[135], [ i[179], _.MC(n[165]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[166]) && (e += i[42], _.MN(n[136], [ i[180], _.MC(n[166]), i[70] ].join("")), e += i[18]), e += [ i[181], _.MC(n[109]), i[182], _.MC(n[104]), i[183], _.MC(n[112]), i[42], _.MC(n[105]), i[42], _.MC(n[110]), i[42], _.MC(n[111]), i[42], _.MC(n[114]), i[7], _.MC(n[115]), i[42], _.MC(n[117]), i[42], _.MC(n[116]), i[42], _.MC(n[135]), i[42], _.MC(n[136]), i[46] ].join(""), _.MD(n[127]) && (e += [ i[184], _.MB(n[127]), i[185] ].join("")), e += i[57], _.MJ(_.MC(n[109]) + "" == "input") ? e += [ i[186], _.MC(n[106]), i[187] ].join("") :(e += [ i[188], _.MC(n[106]), i[189] ].join(""), _.MD(n[107]) && (e += i[190], _.MD(n[167]) && (e += i[191]), e += [ i[192], _.MC(n[107]), i[189] ].join("")), e += i[101], _.MD(n[169]) && (e += i[193], _.MJ(_.MC(n[168])) && (_.MJ(_.MC(n[168]) + "" == "nl") || _.MJ(_.MC(n[168]) + "" == "be")) && _.MJ(_.track_experiment("eDUIFBUNAAUTCKWFQTcYRJELWe")) && (e += i[194]), e += i[59]), e += [ i[195], _.MC(n[109]), i[81] ].join("")), e += i[18], _r_(e);
}
function h(e) {
return _i_("3bb:64d913d2"), e += i[17], _.MN("fe_score", _.MI(_.MB(n[24])) + _.MI(0)), e += i[41], _.MN("fe_score_word_name", ""), e += i[18], _.MJ(_.MB(n[57]) >= 0) && _.MJ(_.MB(n[57]) < 3) && (e += i[42], _.MN("fe_score_word_name", "very_poor"), e += i[18]), e += i[32], _.MJ(_.MB(n[57]) >= 3) && _.MJ(_.MB(n[57]) < 4) && (e += i[42], _.MN("fe_score_word_name", "poor"), e += i[18]), e += i[32], _.MJ(_.MB(n[57]) >= 4) && _.MJ(_.MB(n[57]) < 5) && (e += i[42], _.MN("fe_score_word_name", "disappointing"), e += i[18]), e += i[32], _.MJ(_.MB(n[57]) >= 5) && _.MJ(_.MB(n[57]) < 5.6) && (e += i[42], _.MN("fe_score_word_name", "average_passable"), e += i[18]), e += i[32], _.MJ(_.MB(n[57]) >= 5.6) && _.MJ(_.MB(n[57]) < 6) && (e += i[42], _.MN("fe_score_word_name", "average_okay"), e += i[18]), e += i[32], _.MJ(_.MB(n[57]) >= 6) && _.MJ(_.MB(n[57]) < 7) && (e += i[42], _.MN("fe_score_word_name", "pleasant"), e += i[18]), e += i[32], _.MJ(_.MB(n[57]) >= 7) && _.MJ(_.MB(n[57]) < 8) && (e += i[42], _.MN("fe_score_word_name", "good"), e += i[18]), e += i[32], _.MJ(_.MB(n[57]) >= 8) && _.MJ(_.MB(n[57]) < 8.6) && (e += i[42], _.MN("fe_score_word_name", "very_good"), e += i[18]), e += i[32], _.MJ(_.MB(n[57]) >= 8.6) && _.MJ(_.MB(n[57]) < 9) && (e += i[42], _.MN("fe_score_word_name", "fabulous"), e += i[18]), e += i[32], _.MJ(_.MB(n[57]) >= 9) && _.MJ(_.MB(n[57]) < 9.5) && (e += i[42], _.MN("fe_score_word_name", "superb"), e += i[18]), e += i[32], _.MJ(_.MB(n[57]) >= 9.5) && (e += i[42], _.MN("fe_score_word_name", "exceptional"), e += i[18]), e += i[41], _.MN("fe_classname", ""), e += i[18], _.MJ(_.MB(n[57]) >= 0) && _.MJ(_.MB(n[57]) <= 10) && (e += i[57], _.MN("fe_classname", _.MB(n[58]) + "" + _.MB(n[59]) + _.MB(n[60])), e += i[58], _.MJ(_.MB(n[57]) < 7) && (e += i[59], _.MN("fe_classname", _.MB(n[61]) + " " + _.MB(n[58]) + "low" + _.MB(n[60])), e += i[42]), e += i[32]), e += i[18], _r_(e);
}
function f(e) {
_i_("3bb:441d5bb9"), e += i[17], _.MN(n[104], i[157]), e += i[18], _.MN(n[105], void 0), e += i[18], _.MN(n[106], i[158]), e += i[18], _.MN(n[107], void 0), e += i[18], _.MN(n[108], void 0), e += i[18], _.MN(n[109], i[159]), e += i[18], _.MN(n[110], void 0), e += i[18], _.MN(n[111], void 0), e += i[18], _.MN(n[112], void 0), e += i[18], _.MN(n[113], void 0), e += i[18], _.MN(n[114], void 0), e += i[18], _.MN(n[115], void 0), e += i[18], _.MN(n[116], void 0), e += i[18], _.MN(n[117], void 0), e += i[41], _.MN(n[118], i[160]), e += i[32], _.MN(n[119], void 0), e += i[18], _.MN(n[120], void 0), e += i[18], _.MN(n[121], void 0), e += i[18], _.MN(n[122], void 0), e += i[18], _.MN(n[123], void 0), e += i[18], _.MN(n[124], void 0), e += i[18], _.MN(n[125], void 0), e += i[18], _.MN(n[126], void 0), e += i[32], _.MD(n[128]) ? (e += i[42], _.MN(n[127], _.MB(n[128])), e += i[18]) :(e += i[42], _.MN(n[127], void 0), e += i[18]), e += i[32], _.MN(n[129], void 0), e += i[18], _.MN(n[130], void 0), e += i[32], _.MN(n[131], i[161]), e += i[18], _.MN(n[132], i[161]), e += i[18], _.MN(n[133], i[161]), e += i[32], _.MN(n[134], i[161]), e += i[41], _.MN(n[135], void 0), e += i[18], _.MN(n[136], void 0), e += i[32], _.MD(n[137]) && (e += i[42], _.MN(n[106], _.MC(n[137])), e += i[18]), e += i[32], _.MD(n[138]) && (e += i[42], _.MN(n[107], _.MC(n[138])), e += i[18]), e += i[32], _.MD(n[139]) && (e += i[42], _.MN(n[108], _.MC(n[139])), e += i[18]), e += i[32];
var t = _.MC(n[140]);
if (_.MJ(t + "" == "primary") ? (e += i[59], _.MN(n[104], [ _.MC(n[104]), i[162] ].join("")), e += i[42]) :_.MJ(t + "" == "secondary") ? (e += i[59], _.MN(n[104], [ _.MC(n[104]), i[163] ].join("")), e += i[42]) :_.MJ(t + "" == "warning") ? (e += i[59], _.MN(n[104], [ _.MC(n[104]), i[164] ].join("")), e += i[42]) :_.MJ(t + "" == "disabled") ? (e += i[59], _.MN(n[104], [ _.MC(n[104]), i[165] ].join("")), e += i[42]) :_.MJ(t + "" == "primary-small") ? (e += i[59], _.MN(n[104], [ _.MC(n[104]), i[166] ].join("")), e += i[42]) :_.MJ(t + "" == "secondary-small") ? (e += i[59], _.MN(n[104], [ _.MC(n[104]), i[167] ].join("")), e += i[42]) :_.MJ(t + "" == "warning-small") ? (e += i[59], _.MN(n[104], [ _.MC(n[104]), i[168] ].join("")), e += i[42]) :_.MJ(t + "" == "primary-flat") && (e += i[59], _.MN(n[104], [ _.MC(n[104]), i[169] ].join("")), e += i[18]), e += i[32], _.MD(n[141]) && (e += i[42], _.MN(n[109], _.MC(n[141])), e += i[57], _.MJ(/^a$/i.test(_.MC(n[109]))) && _.MN(n[142], i[170]), e += i[42], _.MJ(/^input$/i.test(_.MC(n[109]))) && _.MN(n[143], i[170]), e += i[42], _.MJ(/^button$/i.test(_.MC(n[109]))) && _.MN(n[144], i[170]), e += i[18]), e += i[32], _.MD(n[145]) && (e += i[42], _.MN(n[105], [ i[69], _.MC(n[145]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[146]) && (e += i[42], _.MN(n[112], [ i[171], _.MC(n[146]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[147]) && (e += i[42], _.MN(n[134], _.MC(n[147])), e += i[18]), e += i[32], _.MD(n[148])) {
e += i[42];
var a = "";
_.MD(n[134]) || (a += _.MC(n[104])), a += [ i[51], _.MC(n[148]) ].join(""), _.MN(n[104], a), e += i[18];
}
return e += i[32], _.MD(n[149]) && (e += i[42], _.MN(n[114], [ i[172], _.F.entities(_.MC(n[149])), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[150]) && (e += i[42], _.MN(n[110], [ i[173], _.MC(n[150]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[151]) && (e += i[42], _.MN(n[111], _.MC(n[151])), e += i[18]), e += i[32], _.MD(n[152]) && (e += i[42], _.MN(n[115], [ i[174], _.MC(n[152]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[153]) && (e += i[7], _.MN(n[117], [ i[175], _.MC(n[153]), i[176], _.MC(n[154]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[155]) && (e += i[7], _.MN(n[117], [ _.MC(n[117]), i[177], _.MC(n[155]), i[176], _.MC(n[156]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[157]) && (e += i[7], _.MN(n[117], [ _.MC(n[117]), i[177], _.MC(n[157]), i[176], _.MC(n[158]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[159]) && (e += i[7], _.MN(n[117], [ _.MC(n[117]), i[177], _.MC(n[159]), i[176], _.MC(n[160]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[161]) && (e += i[7], _.MN(n[117], [ _.MC(n[117]), i[177], _.MC(n[161]), i[176], _.MC(n[162]), i[70] ].join("")), e += i[18]), e += i[32], _.MJ(_.MC(n[163])) && _.MK(_.MC(n[164])) && (e += i[42], _.MN(n[116], [ i[178], _.MC(n[163]), i[70] ].join("")), e += i[18]), e += i[17], _.MD(n[165]) && (e += i[42], _.MN(n[135], [ i[179], _.MC(n[165]), i[70] ].join("")), e += i[18]), e += i[32], _.MD(n[166]) && (e += i[42], _.MN(n[136], [ i[180], _.MC(n[166]), i[70] ].join("")), e += i[18]), e += [ i[181], _.MC(n[109]), i[182], _.MC(n[104]), i[183], _.MC(n[112]), i[42], _.MC(n[105]), i[42], _.MC(n[110]), i[42], _.MC(n[111]), i[42], _.MC(n[114]), i[7], _.MC(n[115]), i[42], _.MC(n[117]), i[42], _.MC(n[116]), i[42], _.MC(n[135]), i[42], _.MC(n[136]), i[46] ].join(""), _.MD(n[127]) && (e += [ i[184], _.MB(n[127]), i[185] ].join("")), e += i[57], _.MJ(_.MC(n[109]) + "" == "input") ? e += [ i[186], _.MC(n[106]), i[187] ].join("") :(e += [ i[188], _.MC(n[106]), i[189] ].join(""), _.MD(n[107]) && (e += i[190], _.MD(n[167]) && (e += i[191]), e += [ i[192], _.MC(n[107]), i[189] ].join("")), e += i[101], _.MD(n[169]) && (e += i[193], _.MJ(_.MC(n[168])) && (_.MJ(_.MC(n[168]) + "" == "nl") || _.MJ(_.MC(n[168]) + "" == "be")) && _.MJ(_.track_experiment("eDUIFBUNAAUTCKWFQTcYRJELWe")) && (e += i[194]), e += i[59]), e += [ i[195], _.MC(n[109]), i[81] ].join("")), e += i[18], _r_(e);
}
function m(e) {
_i_("3bb:57c60743"), e += i[17], _.MN("distance_to_hub", 0), e += i[18], _.MN("property_distance_to_airport", 0), e += i[18], _.MN("property_distance_to_train", 0), e += i[18], _.MN("property_distance_to_metro", 0), e += i[18], _.MN("property_distance_from_city_center", 0), e += i[18], _.MN("fe_show_overlay", 0), e += i[19], _.MJ(_.MB(n[7]) > 4) && _.MJ(_.MB(n[8])) && (e += i[20], _.MN("fe_show_overlay", 1), e += i[18]), e += i[21];
var r = _.MC(n[9]) || [];
a.unshift(null);
for (var o = 1, s = r.length; s >= o; o++) {
if (a[0] = r[o - 1], e += i[0], _.MN(n[10], [ i[22], _.MC(n[11]), i[23] ].join("")), e += i[0], _.MJ(_.MB(n[14]) + "" == "airport") && (e += i[7], _.MN(n[12], [ i[8], (a.unshift({
hub_name:_.MB(n[13])
}), t = _.ME(i[24], _.MB, _.MN, null), a.shift(), t), i[7] ].join("")), e += i[20]), e += i[20], _.MJ(_.MB(n[14]) + "" == "train_station") && (e += i[7], _.MN(n[15], [ i[8], (a.unshift({
hub_name:_.MB(n[16])
}), t = _.ME(i[24], _.MB, _.MN, null), a.shift(), t), i[7] ].join("")), e += i[20]), e += i[20], _.MJ(_.MB(n[14]) + "" == "metro") && (e += i[7], _.MN(n[17], [ i[8], (a.unshift({
hub_name:_.MB(n[16])
}), t = _.ME(i[24], _.MB, _.MN, null), a.shift(), t), i[7] ].join("")), e += i[20]), e += i[20], _.MJ(_.MB(n[14]) + "" == "city_centre")) {
e += i[7];
var l = "";
l += i[8], l += _.MJ(0 == _.MB(n[19])) ? [ i[25], _.ME(i[26], _.MB, _.MN, null), i[27] ].join("") :[ i[28], (a.unshift({
city_name:_.MB(n[20]),
measurement_unit:i[30],
num_distance:_.MB(n[11])
}), t = _.ME(i[29], _.MB, _.MN, null), a.shift(), t), i[31] ].join(""), l += i[7], _.MN(n[18], l), e += i[20];
}
e += i[32];
}
return a.shift(), e += [ i[33], _.MC(n[21]), i[34] ].join(""), _.MD(n[22]) && (e += [ i[35], _.STATIC_HOSTNAME(_.MB(n[22]), 0, 0, 0), i[36] ].join("")), e += i[37], _.MD(n[95]) && (e += i[38], a.unshift({
sample_size:_.MB(n[7]),
score:_.MB(n[8]),
style:i[122]
}), e = C(e), a.shift(), e += i[123]), e += i[124], e += _.MD(n[96]) ? [ i[125], _.MC(n[96]), i[126], _.MC(n[97]), i[127], _.MC(n[97]), i[128] ].join("") :[ i[129], _.MC(n[97]), i[27] ].join(""), e += i[130], (_.MJ(_.MB(n[98])) || _.MJ(_.MB(n[99]))) && (e += i[131], _.MD(n[98]) && (e += [ i[132], _.MC(n[98]), i[133] ].join("")), e += i[89], _.MD(n[99]) && (e += [ i[132], _.MC(n[99]), i[89] ].join("")), e += i[134], _.MD(n[18]) && (e += [ i[89], _.MC(n[18]), i[135] ].join("")), e += i[136]), e += i[46], _.MD(n[12]) && (e += [ i[137], _.MC(n[12]), i[138] ].join("")), e += i[46], _.MD(n[17]) && (e += [ i[139], _.MC(n[17]), i[138] ].join("")), e += i[46], _.MD(n[15]) && (e += [ i[140], _.MC(n[15]), i[141] ].join("")), e += [ i[142], _.ME(i[143], _.MB, _.MN, _.MO(_.MC(n[100]), null, i[143])), i[144], _.MC(n[101]), i[145] ].join(""), _.MD(n[102]) && (e += [ i[146], _.ME(i[147], _.MB, _.MN, null), i[148] ].join("")), e += i[149], _.MD(n[103]) ? e += [ i[150], _.ME(i[151], _.MB, _.MN, null), i[152] ].join("") :(e += i[8], e = k(e), e += i[7]), e += i[233], _r_(e);
}
function M(e) {
return _i_("3bb:f9b6d229"), e += i[17], _.MN("fe_score", _.MI(_.MB(n[24])) + _.MI(0)), e += i[41], _.MN("fe_score_word_name", ""), e += i[18], _.MJ(_.MB(n[57]) >= 0) && _.MJ(_.MB(n[57]) < 3) && (e += i[42], _.MN("fe_score_word_name", "very_poor"), e += i[18]), e += i[32], _.MJ(_.MB(n[57]) >= 3) && _.MJ(_.MB(n[57]) < 4) && (e += i[42], _.MN("fe_score_word_name", "poor"), e += i[18]), e += i[32], _.MJ(_.MB(n[57]) >= 4) && _.MJ(_.MB(n[57]) < 5) && (e += i[42], _.MN("fe_score_word_name", "disappointing"), e += i[18]), e += i[32], _.MJ(_.MB(n[57]) >= 5) && _.MJ(_.MB(n[57]) < 5.6) && (e += i[42], _.MN("fe_score_word_name", "average_passable"), e += i[18]), e += i[32], _.MJ(_.MB(n[57]) >= 5.6) && _.MJ(_.MB(n[57]) < 6) && (e += i[42], _.MN("fe_score_word_name", "average_okay"), e += i[18]), e += i[32], _.MJ(_.MB(n[57]) >= 6) && _.MJ(_.MB(n[57]) < 7) && (e += i[42], _.MN("fe_score_word_name", "pleasant"), e += i[18]), e += i[32], _.MJ(_.MB(n[57]) >= 7) && _.MJ(_.MB(n[57]) < 8) && (e += i[42], _.MN("fe_score_word_name", "good"), e += i[18]), e += i[32], _.MJ(_.MB(n[57]) >= 8) && _.MJ(_.MB(n[57]) < 8.6) && (e += i[42], _.MN("fe_score_word_name", "very_good"), e += i[18]), e += i[32], _.MJ(_.MB(n[57]) >= 8.6) && _.MJ(_.MB(n[57]) < 9) && (e += i[42], _.MN("fe_score_word_name", "fabulous"), e += i[18]), e += i[32], _.MJ(_.MB(n[57]) >= 9) && _.MJ(_.MB(n[57]) < 9.5) && (e += i[42], _.MN("fe_score_word_name", "superb"), e += i[18]), e += i[32], _.MJ(_.MB(n[57]) >= 9.5) && (e += i[42], _.MN("fe_score_word_name", "exceptional"), e += i[18]), e += i[41], _.MN("fe_classname", ""), e += i[18], _.MJ(_.MB(n[57]) >= 0) && _.MJ(_.MB(n[57]) <= 10) && (e += i[57], _.MN("fe_classname", _.MB(n[58]) + "" + _.MB(n[59]) + _.MB(n[60])), e += i[58], _.MJ(_.MB(n[57]) < 7) && (e += i[59], _.MN("fe_classname", _.MB(n[61]) + " " + _.MB(n[58]) + "low" + _.MB(n[60])), e += i[42]), e += i[32]), e += i[18], _r_(e);
}
function g(e) {
_i_("3bb:98a99822"), e += i[17], _.MN("distance_to_hub", 0), e += i[18], _.MN("property_distance_to_airport", 0), e += i[18], _.MN("property_distance_to_train", 0), e += i[18], _.MN("property_distance_to_metro", 0), e += i[18], _.MN("property_distance_from_city_center", 0), e += i[18], _.MN("fe_show_overlay", 0), e += i[19], _.MJ(_.MB(n[7]) > 4) && _.MJ(_.MB(n[8])) && (e += i[20], _.MN("fe_show_overlay", 1), e += i[18]), e += i[21];
var r = c, o = l, s = d, l = _.MC(n[9]) || [];
a.unshift(null);
for (var c = 1, d = l.length; d >= c; c++) {
if (a[0] = l[c - 1], e += i[0], _.MN(n[10], [ i[22], _.MC(n[11]), i[23] ].join("")), e += i[0], _.MJ(_.MB(n[14]) + "" == "airport") && (e += i[7], _.MN(n[12], [ i[8], (a.unshift({
hub_name:_.MB(n[13])
}), t = _.ME(i[24], _.MB, _.MN, null), a.shift(), t), i[7] ].join("")), e += i[20]), e += i[20], _.MJ(_.MB(n[14]) + "" == "train_station") && (e += i[7], _.MN(n[15], [ i[8], (a.unshift({
hub_name:_.MB(n[16])
}), t = _.ME(i[24], _.MB, _.MN, null), a.shift(), t), i[7] ].join("")), e += i[20]), e += i[20], _.MJ(_.MB(n[14]) + "" == "metro") && (e += i[7], _.MN(n[17], [ i[8], (a.unshift({
hub_name:_.MB(n[16])
}), t = _.ME(i[24], _.MB, _.MN, null), a.shift(), t), i[7] ].join("")), e += i[20]), e += i[20], _.MJ(_.MB(n[14]) + "" == "city_centre")) {
e += i[7];
var b = "";
b += i[8], b += _.MJ(0 == _.MB(n[19])) ? [ i[25], _.ME(i[26], _.MB, _.MN, null), i[27] ].join("") :[ i[28], (a.unshift({
city_name:_.MB(n[20]),
measurement_unit:i[30],
num_distance:_.MB(n[11])
}), t = _.ME(i[29], _.MB, _.MN, null), a.shift(), t), i[31] ].join(""), b += i[7], _.MN(n[18], b), e += i[20];
}
e += i[32];
}
return a.shift(), c = r, l = o, d = s, e += [ i[33], _.MC(n[21]), i[34] ].join(""), _.MD(n[22]) && (e += [ i[35], _.STATIC_HOSTNAME(_.MB(n[22]), 0, 0, 0), i[36] ].join("")), e += i[37], _.MD(n[95]) && (e += i[38], a.unshift({
sample_size:_.MB(n[7]),
score:_.MB(n[8]),
style:i[122]
}), e = N(e), a.shift(), e += i[123]), e += i[124], e += _.MD(n[96]) ? [ i[125], _.MC(n[96]), i[126], _.MC(n[97]), i[127], _.MC(n[97]), i[128] ].join("") :[ i[129], _.MC(n[97]), i[27] ].join(""), e += i[130], (_.MJ(_.MB(n[98])) || _.MJ(_.MB(n[99]))) && (e += i[131], _.MD(n[98]) && (e += [ i[132], _.MC(n[98]), i[133] ].join("")), e += i[89], _.MD(n[99]) && (e += [ i[132], _.MC(n[99]), i[89] ].join("")), e += i[134], _.MD(n[18]) && (e += [ i[89], _.MC(n[18]), i[135] ].join("")), e += i[136]), e += i[46], _.MD(n[12]) && (e += [ i[137], _.MC(n[12]), i[138] ].join("")), e += i[46], _.MD(n[17]) && (e += [ i[139], _.MC(n[17]), i[138] ].join("")), e += i[46], _.MD(n[15]) && (e += [ i[140], _.MC(n[15]), i[141] ].join("")), e += [ i[142], _.ME(i[143], _.MB, _.MN, _.MO(_.MC(n[100]), null, i[143])), i[144], _.MC(n[101]), i[145] ].join(""), _.MD(n[102]) && (e += [ i[146], _.ME(i[147], _.MB, _.MN, null), i[148] ].join("")), e += i[149], _.MD(n[103]) ? e += [ i[150], _.ME(i[151], _.MB, _.MN, null), i[152] ].join("") :(e += i[8], e = x(e), e += i[7]), e += i[233], _r_(e);
}
function v(e) {
return _i_("3bb:b68a41b0"), e += i[18], _.MN("fe_review_score", _.MI(_.MB(n[24])) + _.MI(0)), e += i[41], _.MN("fe_review_score_word_tag", _.MB(n[37]) || "p"), e += i[41], _.MN("fe_review_score_word_class_list", "review-score-word"), e += i[41], _.MJ(_.MB(n[39]) >= 7) && (e += i[20], _.MN("fe_review_score_word_class_list", _.MB(n[38]) + " review-score-word--highlighted"), e += i[18]), e += i[32], _.MD(n[40]) && (e += i[20], _.MN("fe_review_score_word_class_list", _.MB(n[38]) + " " + _.MB(n[40])), e += i[18]), e += i[17], _.MD(n[47]) ? (e += i[20], _.MJ(_.MB(n[39]) >= 0) && _.MJ(_.MB(n[39]) < 3) && (e += i[47], _.MN("fe_review_score_word_copy", _.MB(n[41])), e += i[48]), e += i[20], _.MJ(_.MB(n[39]) >= 3) && _.MJ(_.MB(n[39]) < 4) && (e += i[47], _.MN("fe_review_score_word_copy", _.MB(n[42])), e += i[49]), e += i[20], _.MJ(_.MB(n[39]) >= 4) && _.MJ(_.MB(n[39]) < 5) && (e += i[47], _.MN("fe_review_score_word_copy", _.MB(n[43])), e += i[50]), e += i[20], _.MJ(_.MB(n[39]) >= 5) && _.MJ(_.MB(n[39]) < 5.6) && (e += i[51], _.MN("fe_review_score_word_copy", _.MB(n[44])), e += i[51]), e += i[20], _.MJ(_.MB(n[39]) >= 5.6) && _.MJ(_.MB(n[39]) < 6) && (e += i[51], _.MN("fe_review_score_word_copy", _.MB(n[45])), e += i[52]), e += i[20], _.MJ(_.MB(n[39]) >= 6) && _.MJ(_.MB(n[39]) < 7) && (e += i[47], _.MN("fe_review_score_word_copy", _.MB(n[46])), e += i[53]), e += i[18]) :(e += i[20], _.MJ(_.MB(n[39]) >= 0) && _.MJ(_.MB(n[39]) < 7) && (e += i[51], _.MN("fe_review_score_word_copy", _.MB(n[48])), e += i[51]), e += i[18]), e += i[18], _.MJ(_.MB(n[39]) >= 7) && _.MJ(_.MB(n[39]) < 8) && (e += i[47], _.MN("fe_review_score_word_copy", _.MB(n[49])), e += i[54]), e += i[18], _.MJ(_.MB(n[39]) >= 8) && _.MJ(_.MB(n[39]) < 8.6) && (e += i[51], _.MN("fe_review_score_word_copy", _.MB(n[50])), e += i[51]), e += i[18], _.MJ(_.MB(n[39]) >= 8.6) && _.MJ(_.MB(n[39]) < 9) && (e += i[51], _.MN("fe_review_score_word_copy", _.MB(n[51])), e += i[55]), e += i[32], _.MJ(_.MB(n[39]) >= 9) && _.MJ(_.MB(n[39]) < 9.5) && (e += i[51], _.MN(n[52], _.ME(i[56], _.MB, _.MN, null)), e += i[51]), e += i[41], _.MJ(_.MB(n[39]) >= 9.5) && (e += i[51], _.MN("fe_review_score_word_copy", _.MB(n[53])), e += i[51]), e += i[41], e += i[18], _r_(e);
}
function y(e) {
return _i_("3bb:316dca43"), e += i[18], _.MN("fe_review_score", _.MI(_.MB(n[24])) + _.MI(0)), e += i[41], _.MN("fe_review_score_word_tag", _.MB(n[37]) || "p"), e += i[41], _.MN("fe_review_score_word_class_list", "review-score-word"), e += i[41], _.MJ(_.MB(n[39]) >= 7) && (e += i[20], _.MN("fe_review_score_word_class_list", _.MB(n[38]) + " review-score-word--highlighted"), e += i[18]), e += i[32], _.MD(n[40]) && (e += i[20], _.MN("fe_review_score_word_class_list", _.MB(n[38]) + " " + _.MB(n[40])), e += i[18]), e += i[17], _.MD(n[47]) ? (e += i[20], _.MJ(_.MB(n[39]) >= 0) && _.MJ(_.MB(n[39]) < 3) && (e += i[47], _.MN("fe_review_score_word_copy", _.MB(n[41])), e += i[48]), e += i[20], _.MJ(_.MB(n[39]) >= 3) && _.MJ(_.MB(n[39]) < 4) && (e += i[47], _.MN("fe_review_score_word_copy", _.MB(n[42])), e += i[49]), e += i[20], _.MJ(_.MB(n[39]) >= 4) && _.MJ(_.MB(n[39]) < 5) && (e += i[47], _.MN("fe_review_score_word_copy", _.MB(n[43])), e += i[50]), e += i[20], _.MJ(_.MB(n[39]) >= 5) && _.MJ(_.MB(n[39]) < 5.6) && (e += i[51], _.MN("fe_review_score_word_copy", _.MB(n[44])), e += i[51]), e += i[20], _.MJ(_.MB(n[39]) >= 5.6) && _.MJ(_.MB(n[39]) < 6) && (e += i[51], _.MN("fe_review_score_word_copy", _.MB(n[45])), e += i[52]), e += i[20], _.MJ(_.MB(n[39]) >= 6) && _.MJ(_.MB(n[39]) < 7) && (e += i[47], _.MN("fe_review_score_word_copy", _.MB(n[46])), e += i[53]), e += i[18]) :(e += i[20], _.MJ(_.MB(n[39]) >= 0) && _.MJ(_.MB(n[39]) < 7) && (e += i[51], _.MN("fe_review_score_word_copy", _.MB(n[48])), e += i[51]), e += i[18]), e += i[18], _.MJ(_.MB(n[39]) >= 7) && _.MJ(_.MB(n[39]) < 8) && (e += i[47], _.MN("fe_review_score_word_copy", _.MB(n[49])), e += i[54]), e += i[18], _.MJ(_.MB(n[39]) >= 8) && _.MJ(_.MB(n[39]) < 8.6) && (e += i[51], _.MN("fe_review_score_word_copy", _.MB(n[50])), e += i[51]), e += i[18], _.MJ(_.MB(n[39]) >= 8.6) && _.MJ(_.MB(n[39]) < 9) && (e += i[51], _.MN("fe_review_score_word_copy", _.MB(n[51])), e += i[55]), e += i[32], _.MJ(_.MB(n[39]) >= 9) && _.MJ(_.MB(n[39]) < 9.5) && (e += i[51], _.MN(n[52], _.ME(i[56], _.MB, _.MN, null)), e += i[51]), e += i[41], _.MJ(_.MB(n[39]) >= 9.5) && (e += i[51], _.MN("fe_review_score_word_copy", _.MB(n[53])), e += i[51]), e += i[41], e += i[18], _r_(e);
}
function B(e) {
_i_("3bb:dec39d0a"), e += i[32];
var t = "";
t += i[7], t += _.MD(n[172]) ? _.MC(n[172]) :i[200], t += i[18], _.MN(n[171], t), e += i[32];
var t = "";
t += i[7], t += _.MD(n[174]) ? _.MC(n[174]) :i[201], t += i[18], _.MN(n[173], t), e += i[32];
var t = "";
t += i[7], t += _.MD(n[176]) ? _.MC(n[176]) :i[202], t += i[18], _.MN(n[175], t), e += i[32];
var t = "";
return t += _.MD(n[178]) ? _.MC(n[178]) :i[203], _.MN(n[177], t), e += [ i[204], _.MC(n[179]), i[205], _.MC(n[171]), i[206], _.MC(n[173]), i[207], _.STATIC_HOSTNAME("/static/img/ajax-loaders/" + _.MB(n[177]), 0, 0, 0), i[208], _.MC(n[175]), i[209] ].join(""), e += _.MD(n[180]) ? [ i[210], _.MC(n[180]), i[211] ].join("") :[ i[210], _.ME(i[212], _.MB, _.MN, null), i[213] ].join(""), e += i[214], _r_(e);
}
function w(e) {
_i_("3bb:7eee6a7b"), e += i[32];
var t = "";
t += i[7], t += _.MD(n[172]) ? _.MC(n[172]) :i[200], t += i[18], _.MN(n[171], t), e += i[32];
var t = "";
t += i[7], t += _.MD(n[174]) ? _.MC(n[174]) :i[201], t += i[18], _.MN(n[173], t), e += i[32];
var t = "";
t += i[7], t += _.MD(n[176]) ? _.MC(n[176]) :i[202], t += i[18], _.MN(n[175], t), e += i[32];
var t = "";
return t += _.MD(n[178]) ? _.MC(n[178]) :i[203], _.MN(n[177], t), e += [ i[204], _.MC(n[179]), i[205], _.MC(n[171]), i[206], _.MC(n[173]), i[207], _.STATIC_HOSTNAME("/static/img/ajax-loaders/" + _.MB(n[177]), 0, 0, 0), i[208], _.MC(n[175]), i[209] ].join(""), e += _.MD(n[180]) ? [ i[210], _.MC(n[180]), i[211] ].join("") :[ i[210], _.ME(i[212], _.MB, _.MN, null), i[213] ].join(""), e += i[214], _r_(e);
}
function C(e) {
_i_("3bb:7969977d"), e += i[39], _.MJ(_.MC(n[23])) && _.MJ(/,/.test(_.MB(n[24]))) && (e += i[40]), e += i[41], _.MJ(_.MB(n[25])) || _.MJ(/,/.test(_.MB(n[24]))) ? (e += i[42], _.MN("fe_formatted_score", _.MB(n[24])), e += i[18]) :(e += i[42], _.MN("fe_formatted_score", _.format_review_score_plain(_.MI(0) + _.MI(_.MB(n[24])))), e += i[18]), e += i[32];
var r = "";
r += i[30], r += _.MJ(_.MB(n[27])) ? _.MB(n[27]) :i[43], r += i[30], _.MN(n[26], r), e += i[32];
var r = "";
r += i[30], _.MJ(_.MB(n[29])) ? (r += i[30], r += _.MJ(_.MB(n[29]) + "" != "none") && _.MJ(_.MB(n[26]) + "" == "none") ? i[44] :[ i[30], _.MB(n[29]), i[30] ].join(""), r += i[30]) :r += i[43], r += i[30], _.MN(n[28], r), e += i[41];
var r = "";
r += i[30], (_.MJ(_.MB(n[29])) && _.MJ(_.MB(n[29]) + "" == "auto") || _.MK(_.MB(n[29]))) && _.MJ(_.MB(n[31])) ? (r += i[30], _.MN("fe_formatted_sample_size", _.format_number(_.MB(n[31]))), r += [ i[30], (a.unshift({
num_reviews:_.MB(n[32])
}), t = _.VP(i[45], _.MO(_.MI(_.MC(n[31])) + _.MI(0), null, i[45])), a.shift(), t), i[30] ].join("")) :_.MJ(_.MB(n[29]) + "" != "none") && _.MJ(_.MB(n[29]) + "" != "auto") && (r += [ i[30], _.MB(n[29]), i[30] ].join("")), r += i[30], _.MN(n[30], r), e += i[41], _.MN("fe_is_alt_version", _.MJ(_.MB(n[33]) + "" == "right")), e += i[17], _.MJ(_.MC(n[36])) && (e += i[7], _.MJ(_.track_experiment("ZCPQLOLOLOCcBUKZaZXeIJNZGCTKe")), e += i[46], (_.MJ(_.MC(n[34])) || _.MJ(_.MC(n[35]))) && _.MJ(_.MB(n[31]) > 50) && _.MJ(_.track_experiment_stage("cce_www_sr_hp_hotel_review_buckets", 1)), e += i[46], _.MJ(_.MC(n[34])) && _.MJ(_.MB(n[31]) > 50) && _.MJ(_.track_experiment_stage("cce_www_sr_hp_hotel_review_buckets", 2)), e += i[46], _.MJ(_.MC(n[35])) && _.MJ(_.MB(n[31]) > 50) && _.MJ(_.track_experiment_stage("cce_www_sr_hp_hotel_review_buckets", 3)), e += i[18]), e += i[41], a.unshift({
low_score_adjectives:_.MB(n[47]),
score:_.MI(0) + _.MI(_.MB(n[24]))
}), e = v(e), a.shift(), e += i[32];
var r = "";
r += i[30], _.MJ(_.MB(n[27])) && _.MJ(_.MB(n[27]) + "" == "auto") || (_.MK(_.MB(n[27])) || _.MJ(_.MB(n[27]) + "" == "none")) && _.MJ(_.MB(n[30]) + "" != "") ? r += [ i[30], _.MB(n[52]), i[30] ].join("") :_.MJ(_.MB(n[27])) && _.MJ(_.MB(n[27]) + "" != "none") && (r += [ i[30], _.MB(n[27]), i[30] ].join("")), r += i[30], _.MN(n[54], r), e += i[32], _.MD(n[54]) && (e += i[42], _.MN("fe_widget_text", _.MB(n[55]) + "" + _.MB(n[54]) + _.MB(n[56])), e += i[18]), e += i[41], _.MN("score_only", _.MJ(_.MB(n[54]) + "" == "") && _.MJ(_.MB(n[30]) + "" == "")), e += i[39], a.unshift({
prefix:i[60],
score:_.MI(0) + _.MI(_.MB(n[24]))
}), e = h(e), a.shift(), e += i[18], _.MN("fe_widget_class", _.MB(n[61])), e += i[32], _.MJ(_.MB(n[24]) < 2.5) && (e += i[42], _.MN("fe_widget_class", "review-score-widget__empty"), e += i[18]), e += i[17];
var r = "";
_.MD(n[63]) && (r += [ i[60], _.MB(n[63]), i[51] ].join("")), _.MD(n[64]) && (r += i[61]), _.MN(n[62], r), e += i[17];
var r = "";
_.MJ(_.MB(n[66])) && _.MK(_.MB(n[64])) && (r += [ i[60], _.MB(n[66]), i[51] ].join("")), _.MN(n[65], r), e += i[17];
var r = "";
_.MJ(_.MB(n[33]) + "" == "right") && _.MK(_.MB(n[64])) && (r += [ i[60], _.MB(n[33]), i[51] ].join("")), _.MN(n[67], r), e += i[17];
var r = "";
_.MJ(_.MB(n[69]) + "" == "smaller") ? r += i[62] :_.MJ(_.MB(n[69]) + "" == "small") ? r += i[63] :_.MJ(_.MB(n[69]) + "" == "large") ? r += i[64] :_.MJ(_.MB(n[69]) + "" == "larger") && (r += i[65]), _.MN(n[68], r), e += i[41];
var r = "";
(_.MJ(_.MB(n[63]) + "" == "outlined") || _.MJ(_.MB(n[63]) + "" == "text-only")) && (r += [ _.MB(n[63]), i[51] ].join("")), _.MN(n[70], r), e += i[41];
var r = "";
r += [ i[66], _.MB(n[71]), i[51], _.MB(n[62]), i[51], _.MB(n[65]), i[51], _.MB(n[67]), i[51], _.MB(n[68]), i[51] ].join(""), _.MK(_.MB(n[30])) && (r += i[67]), r += i[51], _.MD(n[72]) && (r += i[68]), r += i[51], _.MD(n[73]) && (r += [ i[51], _.MB(n[73]) ].join("")), r += i[51], _.MN(n[71], r), e += i[41];
var r = "";
_.MD(n[75]) && (r += [ i[69], _.MB(n[75]), i[70] ].join("")), _.MN(n[74], r), e += i[71], e = s(e), e += i[32], e += i[32];
var r = "";
r += i[42], _.MD(n[54]) && (r += i[72], _.MD(n[78]) ? (r += [ i[73], _.MB(n[78]), i[70] ].join(""), _.MD(n[79]) && (r += [ i[74], _.MB(n[79]), i[70] ].join(""))) :r += i[75], r += [ i[76], (a.unshift({
rating_adjective:_.MB(n[80])
}), t = _.ME(i[77], _.MB, _.MN, null), a.shift(), t), i[78], _.MB(n[54]), i[79] ].join(""), r += _.MD(n[78]) ? i[80] :i[75], r += i[81]), r += i[18], _.MN(n[77], r), e += i[32];
var r = "";
r += i[42], _.MD(n[30]) && (r += i[72], _.MD(n[82]) ? (r += [ i[73], _.MB(n[82]), i[70] ].join(""), _.MD(n[83]) && (r += [ i[74], _.MB(n[83]), i[70] ].join(""))) :r += i[82], r += [ i[83], (a.unshift({
num_reviews:_.MB(n[32])
}), t = _.ME(i[84], _.MB, _.MN, null), a.shift(), t), i[85] ].join(""), _.MJ(_.MC(n[36])) && _.MJ(_.MC(n[34])) && (r += [ i[86], _.F.entities("ZCPQLOLOLOCcBUKZaZXeIJNZGCTKe"), i[87] ].join("")), r += i[88], r += _.MJ(_.MC(n[36])) && _.MJ(_.track_experiment("ZCPQLOLOLOCcBUKZaZXeIJNZGCTKe")) && _.MJ(_.MB(n[31]) > 50) ? [ i[89], (a.unshift({
num_reviews:i[91]
}), t = _.ME(i[90], _.MB, _.MN, null), a.shift(), t), i[9] ].join("") :[ i[89], _.F.entities(_.MB(n[30])), i[9] ].join(""), r += i[79], r += _.MD(n[82]) ? i[80] :i[75], r += i[81]), r += i[18], _.MN(n[81], r), e += i[19];
var r = "";
return r += [ i[92], _.MB(n[74]), i[93] ].join(""), r += _.MB(n[71]), _.MJ(_.MC(n[23])) && _.MJ(_.MC(n[85]) + "" == "www") && _.MJ(!1) && (r += i[94]), r += i[95], _.MD(n[86]) && (r += [ i[96], _.MB(n[86]), i[97] ].join("")), r += i[97], _.MD(n[87]) && (r += [ i[98], _.MC(n[87]), i[95] ].join("")), r += i[99], _.MJ(_.MB(n[24]) < 2.5) ? r += i[100] :(r += i[101], _.MD(n[88]) && (r += [ i[97], _.MB(n[88]), i[59] ].join("")), r += i[102], _.MD(n[92]) ? (r += i[103], _.MJ(_.MB(n[66]) + "" == "inline") ? (r += [ i[104], _.MB(n[81]), i[96], _.MB(n[77]), i[96] ].join(""), r = d(r), r += i[97]) :(r += i[96], _.MJ(_.MB(n[63]) + "" == "text-only") ? (r += [ i[111], _.MB(n[77]), i[112] ].join(""), r = c(r), r += [ i[112], _.MB(n[81]), i[96] ].join("")) :(r += i[111], (_.MJ(_.MB(n[54])) || _.MJ(_.MB(n[30]))) && (r += [ i[113], _.MB(n[77]), i[114], _.MB(n[81]), i[115] ].join("")), r += i[112], r = c(r), r += i[96]), r += i[97]), r += i[101]) :(r += i[103], _.MJ(_.MB(n[63]) + "" == "text-only") || _.MJ(_.MB(n[66]) + "" == "inline") ? (r += i[104], r = d(r), r += [ i[96], _.MB(n[77]), i[96], _.MB(n[81]), i[97] ].join("")) :(r += i[104], r = d(r), r += i[96], (_.MJ(_.MB(n[54])) || _.MJ(_.MB(n[30]))) && (r += [ i[116], _.MB(n[77]), i[117], _.MB(n[81]), i[118] ].join("")), r += i[97]), r += i[101]), r += i[101], _.MD(n[93]) && (r += [ i[97], _.MB(n[93]), i[59] ].join("")), r += i[101]), r += i[119], _.MN(n[84], r), e += i[120], _.MN(n[27], void 0), e += i[18], _.MN(n[29], void 0), e += i[18], _.MN(n[24], void 0), e += i[18], _.MN(n[31], void 0), e += i[18], _.MN(n[94], void 0), e += i[18], _.MN(n[73], void 0), e += i[18], _.MN(n[86], void 0), e += i[18], _.MN(n[69], void 0), e += i[18], _.MN(n[63], void 0), e += i[18], _.MN(n[66], void 0), e += i[18], _.MN(n[33], void 0), e += i[18], _.MN(n[47], void 0), e += i[18], _.MN(n[75], void 0), e += i[19], e += _.MJ(_.MB(n[94]) + "" == "no") ? i[121] :[ i[58], _.MB(n[84]), i[18] ].join(""), e += i[18], _r_(e);
}
function k(e) {
if (_i_("3bb:74a8c6fd"), e += i[39], _.MJ(_.MC(n[85]) + "" == "mdot") ? e += [ i[153], _.MC(n[96]), i[154], _.ME(i[155], _.MB, _.MN, null), i[156] ].join("") :(e += i[0], a.unshift({
b_extra_classes:i[196],
b_href:_.MB(n[96]),
b_tag:i[80],
b_target:i[197],
b_text:_.MB(n[170]),
b_type:i[198]
}), e = u(e), a.shift(), e += i[32]), e += i[32], _.MJ(_.MB(n[182]) + "" == "confirmation") && _.MJ(_.MB(n[183])) && _.MJ(_.MB(n[184])) && (e += i[199], a.unshift({
fe_preloader_with_text__text:_.MB(n[181])
}), e = B(e), a.shift(), e += i[215]), e += i[32], _.MJ(2 == _.MB(n[185])) && _.MJ(1 == _.MB(n[183])) && _.MJ(1 == _.MB(n[184])) && (e += i[199], a.unshift({
fe_preloader_with_text__text:_.MB(n[181])
}), e = B(e), a.shift(), e += i[215]), e += i[32], _.MD(n[195])) {
if (e += i[7], _.MJ(_.MB(n[182]) + "" == "confirmation") && _.MJ(_.MB(n[183])) && _.MJ(_.MB(n[184]))) {
e += i[216];
var t = "";
_.MD(n[187]) && (t += i[217]), _.MN(n[186], t), e += i[89], _.MN(n[188], [ i[218], _.MC(n[189]) ].join("")), e += i[89], _.MN(n[190], _.MC(n[191])), e += i[89], a.unshift({
b_data_id:i[219],
b_data_id_2:i[220],
b_data_id_3:i[221],
b_data_id_4:i[222],
b_data_id_5:i[223],
b_data_id_6:i[224],
b_data_value:i[225],
b_data_value_2:_.MB(n[190]),
b_data_value_3:i[226],
b_data_value_4:_.MB(n[188]),
b_data_value_5:i[227],
b_data_value_6:_.MB(n[186]),
b_extra_classes:i[228],
b_tag:i[80],
b_text:_.MB(n[192]),
b_type:i[198]
}), e = p(e), a.shift(), e += i[7];
} else if (_.MJ(2 == _.MB(n[185])) && _.MJ(1 == _.MB(n[183])) && _.MJ(1 == _.MB(n[184]))) {
e += i[216];
var t = "";
_.MD(n[187]) && (t += i[217]), _.MN(n[186], t), e += i[89], _.MN(n[188], [ i[218], _.MC(n[189]) ].join("")), e += i[89], _.MN(n[190], _.MC(n[191])), e += i[89], a.unshift({
b_data_id:i[219],
b_data_id_2:i[220],
b_data_id_3:i[221],
b_data_id_4:i[222],
b_data_id_5:i[223],
b_data_id_6:i[224],
b_data_value:i[225],
b_data_value_2:_.MB(n[190]),
b_data_value_3:i[226],
b_data_value_4:_.MB(n[188]),
b_data_value_5:i[227],
b_data_value_6:_.MB(n[186]),
b_extra_classes:i[229],
b_tag:i[80],
b_text:_.MB(n[192]),
b_type:i[198]
}), e = p(e), a.shift(), e += i[7];
} else e += i[230], _.MN(n[193], [ _.MC(n[96]), _.MC(n[194]), i[231] ].join("")), e += i[9], a.unshift({
b_extra_classes:i[232],
b_href:_.MB(n[193]),
b_tag:i[80],
b_target:i[197],
b_text:_.MB(n[192]),
b_type:i[198]
}), e = p(e), a.shift(), e += i[7];
e += i[18];
}
return e += i[18], _r_(e);
}
function N(e) {
_i_("3bb:efc78302"), e += i[39], _.MJ(_.MC(n[23])) && _.MJ(/,/.test(_.MB(n[24]))) && (e += i[40]), e += i[41], _.MJ(_.MB(n[25])) || _.MJ(/,/.test(_.MB(n[24]))) ? (e += i[42], _.MN("fe_formatted_score", _.MB(n[24])), e += i[18]) :(e += i[42], _.MN("fe_formatted_score", _.format_review_score_plain(_.MI(0) + _.MI(_.MB(n[24])))), e += i[18]), e += i[32];
var r = "";
r += i[30], r += _.MJ(_.MB(n[27])) ? _.MB(n[27]) :i[43], r += i[30], _.MN(n[26], r), e += i[32];
var r = "";
r += i[30], _.MJ(_.MB(n[29])) ? (r += i[30], r += _.MJ(_.MB(n[29]) + "" != "none") && _.MJ(_.MB(n[26]) + "" == "none") ? i[44] :[ i[30], _.MB(n[29]), i[30] ].join(""), r += i[30]) :r += i[43], r += i[30], _.MN(n[28], r), e += i[41];
var r = "";
r += i[30], (_.MJ(_.MB(n[29])) && _.MJ(_.MB(n[29]) + "" == "auto") || _.MK(_.MB(n[29]))) && _.MJ(_.MB(n[31])) ? (r += i[30], _.MN("fe_formatted_sample_size", _.format_number(_.MB(n[31]))), r += [ i[30], (a.unshift({
num_reviews:_.MB(n[32])
}), t = _.VP(i[45], _.MO(_.MI(_.MC(n[31])) + _.MI(0), null, i[45])), a.shift(), t), i[30] ].join("")) :_.MJ(_.MB(n[29]) + "" != "none") && _.MJ(_.MB(n[29]) + "" != "auto") && (r += [ i[30], _.MB(n[29]), i[30] ].join("")), r += i[30], _.MN(n[30], r), e += i[41], _.MN("fe_is_alt_version", _.MJ(_.MB(n[33]) + "" == "right")), e += i[17], _.MJ(_.MC(n[36])) && (e += i[7], _.MJ(_.track_experiment("ZCPQLOLOLOCcBUKZaZXeIJNZGCTKe")), e += i[46], (_.MJ(_.MC(n[34])) || _.MJ(_.MC(n[35]))) && _.MJ(_.MB(n[31]) > 50) && _.MJ(_.track_experiment_stage("cce_www_sr_hp_hotel_review_buckets", 1)), e += i[46], _.MJ(_.MC(n[34])) && _.MJ(_.MB(n[31]) > 50) && _.MJ(_.track_experiment_stage("cce_www_sr_hp_hotel_review_buckets", 2)), e += i[46], _.MJ(_.MC(n[35])) && _.MJ(_.MB(n[31]) > 50) && _.MJ(_.track_experiment_stage("cce_www_sr_hp_hotel_review_buckets", 3)), e += i[18]), e += i[41], a.unshift({
low_score_adjectives:_.MB(n[47]),
score:_.MI(0) + _.MI(_.MB(n[24]))
}), e = y(e), a.shift(), e += i[32];
var r = "";
r += i[30], _.MJ(_.MB(n[27])) && _.MJ(_.MB(n[27]) + "" == "auto") || (_.MK(_.MB(n[27])) || _.MJ(_.MB(n[27]) + "" == "none")) && _.MJ(_.MB(n[30]) + "" != "") ? r += [ i[30], _.MB(n[52]), i[30] ].join("") :_.MJ(_.MB(n[27])) && _.MJ(_.MB(n[27]) + "" != "none") && (r += [ i[30], _.MB(n[27]), i[30] ].join("")), r += i[30], _.MN(n[54], r), e += i[32], _.MD(n[54]) && (e += i[42], _.MN("fe_widget_text", _.MB(n[55]) + "" + _.MB(n[54]) + _.MB(n[56])), e += i[18]), e += i[41], _.MN("score_only", _.MJ(_.MB(n[54]) + "" == "") && _.MJ(_.MB(n[30]) + "" == "")), e += i[39], a.unshift({
prefix:i[60],
score:_.MI(0) + _.MI(_.MB(n[24]))
}), e = M(e), a.shift(), e += i[18], _.MN("fe_widget_class", _.MB(n[61])), e += i[32], _.MJ(_.MB(n[24]) < 2.5) && (e += i[42], _.MN("fe_widget_class", "review-score-widget__empty"), e += i[18]), e += i[17];
var r = "";
_.MD(n[63]) && (r += [ i[60], _.MB(n[63]), i[51] ].join("")), _.MD(n[64]) && (r += i[61]), _.MN(n[62], r), e += i[17];
var r = "";
_.MJ(_.MB(n[66])) && _.MK(_.MB(n[64])) && (r += [ i[60], _.MB(n[66]), i[51] ].join("")), _.MN(n[65], r), e += i[17];
var r = "";
_.MJ(_.MB(n[33]) + "" == "right") && _.MK(_.MB(n[64])) && (r += [ i[60], _.MB(n[33]), i[51] ].join("")), _.MN(n[67], r), e += i[17];
var r = "";
_.MJ(_.MB(n[69]) + "" == "smaller") ? r += i[62] :_.MJ(_.MB(n[69]) + "" == "small") ? r += i[63] :_.MJ(_.MB(n[69]) + "" == "large") ? r += i[64] :_.MJ(_.MB(n[69]) + "" == "larger") && (r += i[65]), _.MN(n[68], r), e += i[41];
var r = "";
(_.MJ(_.MB(n[63]) + "" == "outlined") || _.MJ(_.MB(n[63]) + "" == "text-only")) && (r += [ _.MB(n[63]), i[51] ].join("")), _.MN(n[70], r), e += i[41];
var r = "";
r += [ i[66], _.MB(n[71]), i[51], _.MB(n[62]), i[51], _.MB(n[65]), i[51], _.MB(n[67]), i[51], _.MB(n[68]), i[51] ].join(""), _.MK(_.MB(n[30])) && (r += i[67]), r += i[51], _.MD(n[72]) && (r += i[68]), r += i[51], _.MD(n[73]) && (r += [ i[51], _.MB(n[73]) ].join("")), r += i[51], _.MN(n[71], r), e += i[41];
var r = "";
_.MD(n[75]) && (r += [ i[69], _.MB(n[75]), i[70] ].join("")), _.MN(n[74], r), e += i[71], e = l(e), e += i[32], e += i[32];
var r = "";
r += i[42], _.MD(n[54]) && (r += i[72], _.MD(n[78]) ? (r += [ i[73], _.MB(n[78]), i[70] ].join(""), _.MD(n[79]) && (r += [ i[74], _.MB(n[79]), i[70] ].join(""))) :r += i[75], r += [ i[76], (a.unshift({
rating_adjective:_.MB(n[80])
}), t = _.ME(i[77], _.MB, _.MN, null), a.shift(), t), i[78], _.MB(n[54]), i[79] ].join(""), r += _.MD(n[78]) ? i[80] :i[75], r += i[81]), r += i[18], _.MN(n[77], r), e += i[32];
var r = "";
r += i[42], _.MD(n[30]) && (r += i[72], _.MD(n[82]) ? (r += [ i[73], _.MB(n[82]), i[70] ].join(""), _.MD(n[83]) && (r += [ i[74], _.MB(n[83]), i[70] ].join(""))) :r += i[82], r += [ i[83], (a.unshift({
num_reviews:_.MB(n[32])
}), t = _.ME(i[84], _.MB, _.MN, null), a.shift(), t), i[85] ].join(""), _.MJ(_.MC(n[36])) && _.MJ(_.MC(n[34])) && (r += [ i[86], _.F.entities("ZCPQLOLOLOCcBUKZaZXeIJNZGCTKe"), i[87] ].join("")), r += i[88], r += _.MJ(_.MC(n[36])) && _.MJ(_.track_experiment("ZCPQLOLOLOCcBUKZaZXeIJNZGCTKe")) && _.MJ(_.MB(n[31]) > 50) ? [ i[89], (a.unshift({
num_reviews:i[91]
}), t = _.ME(i[90], _.MB, _.MN, null), a.shift(), t), i[9] ].join("") :[ i[89], _.F.entities(_.MB(n[30])), i[9] ].join(""), r += i[79], r += _.MD(n[82]) ? i[80] :i[75], r += i[81]), r += i[18], _.MN(n[81], r), e += i[19];
var r = "";
return r += [ i[92], _.MB(n[74]), i[93] ].join(""), r += _.MB(n[71]), _.MJ(_.MC(n[23])) && _.MJ(_.MC(n[85]) + "" == "www") && _.MJ(!1) && (r += i[94]), r += i[95], _.MD(n[86]) && (r += [ i[96], _.MB(n[86]), i[97] ].join("")), r += i[97], _.MD(n[87]) && (r += [ i[98], _.MC(n[87]), i[95] ].join("")), r += i[99], _.MJ(_.MB(n[24]) < 2.5) ? r += i[100] :(r += i[101], _.MD(n[88]) && (r += [ i[97], _.MB(n[88]), i[59] ].join("")), r += i[102], _.MD(n[92]) ? (r += i[103], _.MJ(_.MB(n[66]) + "" == "inline") ? (r += [ i[104], _.MB(n[81]), i[96], _.MB(n[77]), i[96] ].join(""), r = b(r), r += i[97]) :(r += i[96], _.MJ(_.MB(n[63]) + "" == "text-only") ? (r += [ i[111], _.MB(n[77]), i[112] ].join(""), r = d(r), r += [ i[112], _.MB(n[81]), i[96] ].join("")) :(r += i[111], (_.MJ(_.MB(n[54])) || _.MJ(_.MB(n[30]))) && (r += [ i[113], _.MB(n[77]), i[114], _.MB(n[81]), i[115] ].join("")), r += i[112], r = d(r), r += i[96]), r += i[97]), r += i[101]) :(r += i[103], _.MJ(_.MB(n[63]) + "" == "text-only") || _.MJ(_.MB(n[66]) + "" == "inline") ? (r += i[104], r = b(r), r += [ i[96], _.MB(n[77]), i[96], _.MB(n[81]), i[97] ].join("")) :(r += i[104], r = b(r), r += i[96], (_.MJ(_.MB(n[54])) || _.MJ(_.MB(n[30]))) && (r += [ i[116], _.MB(n[77]), i[117], _.MB(n[81]), i[118] ].join("")), r += i[97]), r += i[101]), r += i[101], _.MD(n[93]) && (r += [ i[97], _.MB(n[93]), i[59] ].join("")), r += i[101]), r += i[119], _.MN(n[84], r), e += i[120], _.MN(n[27], void 0), e += i[18], _.MN(n[29], void 0), e += i[18], _.MN(n[24], void 0), e += i[18], _.MN(n[31], void 0), e += i[18], _.MN(n[94], void 0), e += i[18], _.MN(n[73], void 0), e += i[18], _.MN(n[86], void 0), e += i[18], _.MN(n[69], void 0), e += i[18], _.MN(n[63], void 0), e += i[18], _.MN(n[66], void 0), e += i[18], _.MN(n[33], void 0), e += i[18], _.MN(n[47], void 0), e += i[18], _.MN(n[75], void 0), e += i[19], e += _.MJ(_.MB(n[94]) + "" == "no") ? i[121] :[ i[58], _.MB(n[84]), i[18] ].join(""), e += i[18], _r_(e);
}
function x(e) {
if (_i_("3bb:2acc028a"), e += i[39], _.MJ(_.MC(n[85]) + "" == "mdot") ? e += [ i[153], _.MC(n[96]), i[154], _.ME(i[155], _.MB, _.MN, null), i[156] ].join("") :(e += i[0], a.unshift({
b_extra_classes:i[196],
b_href:_.MB(n[96]),
b_tag:i[80],
b_target:i[197],
b_text:_.MB(n[170]),
b_type:i[198]
}), e = f(e), a.shift(), e += i[32]), e += i[32], _.MJ(_.MB(n[182]) + "" == "confirmation") && _.MJ(_.MB(n[183])) && _.MJ(_.MB(n[184])) && (e += i[199], a.unshift({
fe_preloader_with_text__text:_.MB(n[181])
}), e = w(e), a.shift(), e += i[215]), e += i[32], _.MJ(2 == _.MB(n[185])) && _.MJ(1 == _.MB(n[183])) && _.MJ(1 == _.MB(n[184])) && (e += i[199], a.unshift({
fe_preloader_with_text__text:_.MB(n[181])
}), e = w(e), a.shift(), e += i[215]), e += i[32], _.MD(n[195])) {
if (e += i[7], _.MJ(_.MB(n[182]) + "" == "confirmation") && _.MJ(_.MB(n[183])) && _.MJ(_.MB(n[184]))) {
e += i[216];
var t = "";
_.MD(n[187]) && (t += i[217]), _.MN(n[186], t), e += i[89], _.MN(n[188], [ i[218], _.MC(n[189]) ].join("")), e += i[89], _.MN(n[190], _.MC(n[191])), e += i[89], a.unshift({
b_data_id:i[219],
b_data_id_2:i[220],
b_data_id_3:i[221],
b_data_id_4:i[222],
b_data_id_5:i[223],
b_data_id_6:i[224],
b_data_value:i[225],
b_data_value_2:_.MB(n[190]),
b_data_value_3:i[226],
b_data_value_4:_.MB(n[188]),
b_data_value_5:i[227],
b_data_value_6:_.MB(n[186]),
b_extra_classes:i[228],
b_tag:i[80],
b_text:_.MB(n[192]),
b_type:i[198]
}), e = u(e), a.shift(), e += i[7];
} else if (_.MJ(2 == _.MB(n[185])) && _.MJ(1 == _.MB(n[183])) && _.MJ(1 == _.MB(n[184]))) {
e += i[216];
var t = "";
_.MD(n[187]) && (t += i[217]), _.MN(n[186], t), e += i[89], _.MN(n[188], [ i[218], _.MC(n[189]) ].join("")), e += i[89], _.MN(n[190], _.MC(n[191])), e += i[89], a.unshift({
b_data_id:i[219],
b_data_id_2:i[220],
b_data_id_3:i[221],
b_data_id_4:i[222],
b_data_id_5:i[223],
b_data_id_6:i[224],
b_data_value:i[225],
b_data_value_2:_.MB(n[190]),
b_data_value_3:i[226],
b_data_value_4:_.MB(n[188]),
b_data_value_5:i[227],
b_data_value_6:_.MB(n[186]),
b_extra_classes:i[229],
b_tag:i[80],
b_text:_.MB(n[192]),
b_type:i[198]
}), e = u(e), a.shift(), e += i[7];
} else e += i[230], _.MN(n[193], [ _.MC(n[96]), _.MC(n[194]), i[231] ].join("")), e += i[9], a.unshift({
b_extra_classes:i[232],
b_href:_.MB(n[193]),
b_tag:i[80],
b_target:i[197],
b_text:_.MB(n[192]),
b_type:i[198]
}), e = u(e), a.shift(), e += i[7];
e += i[18];
}
return e += i[18], _r_(e);
}
return r += i[0], a.unshift({
active_perfectly_overlapped_bookings:_.MB(n[196]),
fe_base_css_class:i[239]
}), r = o(r), a.shift(), r += i[32], _r_(r);
});
}()), B.when({
events:"ready",
action:[ "book" ],
condition:(B.env.b_user_auth_level_is_high || B.env.auth_level >= 2) && 3 == B.env.b_stage
}).run(function(e) {
_i_("3bb:ae51eee2");
var t = B.require("jquery"), i = t(".js-book-and-cancel"), n = i.find("[name=pob_to_cancel]"), a = t(".js-pob-confirm-cancel"), r = t(".js-reveal-trigger"), _ = t("[name=pob_confirm_cancel]");
n.on("change", o), r.on("click", s), o();
function o() {
_i_("3bb:8d928258");
var e = n.filter(":checked");
e.length > 0 ? a.addClass("in") :a.removeClass("in"), _r_();
}
function s(e) {
_i_("3bb:5192f304"), e.preventDefault(), i.addClass("overlapping-is-active"), _.attr("value", "on"), r.remove(), _r_();
}
_r_();
}), B.when({
events:"ready",
action:[ "book" ],
condition:(B.env.b_user_auth_level_is_high || B.env.auth_level >= 2) && 3 == B.env.b_stage
}).run(function(e) {
_i_("3bb:aa50a048");
var t = B.require("jquery"), i = t(".js-book-and-cancel_v2");
if (!i || !i.length) return _r_();
var n = i.find("[name=pob_to_cancel]"), a = i.find(".js-book-and-cancel__radio-yes"), r = i.find(".js-book-and-cancel__radio-no"), _ = t(".js-book-and-cancel__table"), o = t(".js-book-and-cancel__error_no_reply"), s = t(".js-book-and-cancel__error_no_selection"), l = t(".js-book_and_cancel-continue_btn"), c = "book-and-cancel__table_disabled", d = "js-validation_error";
l.on("click", p), a.on("change", u), r.on("change", h), n.on("change", b);
function b() {
_i_("3bb:070b605a"), s.addClass("hidden"), o.addClass("hidden"), i.removeClass(d), _r_();
}
function p(e) {
if (_i_("3bb:d6cf8cbe"), !(r && r.length && a && a.length && n && n.length)) return B.et.customGoal("AEeNTffEcOfIHNALVSTGNPFDEQdPMTAcHe", 5), _r_();
if (r.prop("checked")) return B.et.customGoal("AEeNTffEcOfIHNALVSTGNPFDEQdPMTAcHe", 1), _r_();
if (a.prop("checked")) {
var t = n.filter(":checked");
if (t.length > 0) return B.et.customGoal("AEeNTffEcOfIHNALVSTGNPFDEQdPMTAcHe", 2), _r_();
B.et.customGoal("AEeNTffEcOfIHNALVSTGNPFDEQdPMTAcHe", 3), e.preventDefault(), i.addClass(d), s.removeClass("hidden");
} else B.et.customGoal("AEeNTffEcOfIHNALVSTGNPFDEQdPMTAcHe", 4), e.preventDefault(), i.addClass(d), o.removeClass("hidden");
_r_();
}
function u() {
_i_("3bb:e87db68b"), o.addClass("hidden"), s.addClass("hidden"), i.removeClass(d), a.prop("checked") && (_.removeClass(c), B.et.track("AEeNTffEcOfIHNALVSTGNPFDEQdPMTAcHe") && 1 === n.length && n.attr("checked", !0)), _r_();
}
function h() {
_i_("3bb:e9850f4b"), o.addClass("hidden"), s.addClass("hidden"), i.removeClass(d), r.prop("checked") && (_.addClass(c), n.removeAttr("checked"), n.removeAttr("checked")), _r_();
}
_r_();
}), B.when({
events:"ready",
action:"book",
condition:2 == B.env.b_stage
}).run(function(e) {
_i_("3bb:39b527b4");
var t = B.require("jquery"), i = t("[name=checkin_eta_hour]"), n = t(".checkin_eta_date"), a = function() {
_i_("3bb:64b6f4eb");
var e = i.val();
e >= 24 ? n.addClass("checkin_eta_date__is_next_day") :n.removeClass("checkin_eta_date__is_next_day"), _r_();
};
i.on("change", a), a(), _r_();
}), B.define("utils/throttled", function(e, t, i) {
_i_("3bb:c05117b81"), i.exports = function(e, t) {
_i_("3bb:6684d35e1");
var i, n = 0;
function a() {
_i_("3bb:f991b93f1");
for (var r = this, _ = new Array(arguments.length), o = 0, s = arguments.length; s > o; o++) _[o] = arguments[o];
var l = +new Date();
if (n && clearTimeout(n), t > l - i) return n = setTimeout(function() {
_i_("3bb:74556d051"), a.apply(r, _), _r_();
}, t), _r_();
i = l, setTimeout(function() {
_i_("3bb:68a22e391"), e.apply(r, _), _r_();
}), _r_();
}
return _r_(a);
}, _r_();
}), B.define("dismiss-item", function(e, t, i) {
_i_("3bb:4fa1a5b8");
var n = e("jquery");
i.exports = function(e) {
if (_i_("3bb:ffcf03b7"), !e) throw new Error("param itemId is required");
return _r_(n.ajax({
url:"/dismiss_item",
type:"POST",
data:{
item_id:e
}
}));
}, _r_();
}), B.define("component/dismissible-item/block", function(e, t, i) {
_i_("3bb:c037f4fa");
var n = e("component"), a = e("dismiss-item"), r = e("read-data-options");
i.exports = n.extend({
init:function() {
_i_("3bb:60262eac"), this.options = r(this.$el, {
itemId:{
name:"item-id",
type:String,
required:!0
}
}), this._bindEvents(), _r_();
},
_bindEvents:function() {
_i_("3bb:90d23a28"), this.$el.on("click", ".js-close", function() {
_i_("3bb:b78bae42"), this._dismissItem(), this.hide(), _r_();
}.bind(this)), _r_();
},
_dismissItem:function() {
return _i_("3bb:40f33ccd"), _r_(a(this.options.itemId));
},
hide:function() {
_i_("3bb:9a2d9335"), this.$el.hide(), _r_();
}
}), _r_();
}), B.define("component/dismissible-item/on-init", function(e, t, i) {
_i_("3bb:8d48d686");
var n = e("component"), a = e("dismiss-item"), r = e("read-data-options");
i.exports = n.extend({
init:function() {
return _i_("3bb:16676dbf"), this.options = r(this.$el, {
itemId:{
name:"item-id",
type:String,
required:!0
}
}), _r_(a(this.options.itemId));
}
}), _r_();
}), B.when({
action:"book",
events:"load",
condition:B.env.nocc_hybrid_skip_and_pay_later_enabled
}).run(function(e) {
_i_("3bb:be1df214");
var t = {
PAYMENT_TIME_WRAPPER_CLASS:"bs3_when_to_pay__wrapper",
SKIP_EXPLANATION_CLASS:"pay-form__skip-payment__content",
BS3_CC_FORM_WRAPPER_ID:"bs3_cc_form",
BOOK_FORM_ELEMENT:"bookForm"
}, i = "dAQTIIEeYNQVeJOfAcFIYbLO", n = e("et"), a = !1, r = !1, _ = $("." + t.PAYMENT_TIME_WRAPPER_CLASS), o = $("." + t.SKIP_EXPLANATION_CLASS), s = $("#" + t.BOOK_FORM_ELEMENT);
function l(e) {
_i_("3bb:486a2bdf");
var i = $("#skip-and-pay-later"), n = $("#" + t.BS3_CC_FORM_WRAPPER_ID), _ = i.is(":checked");
n.toggle(!_), o.toggle(_), a = _, !r && _ && (r = !0), _r_();
}
function c(e) {
_i_("3bb:ec25db4a");
var t = r && !a;
n && t && n.customGoal(i, 1), _r_();
}
_.on("change", l), s.on("submit", c), $(window).on("pageshow", function(e) {
_i_("3bb:02f5efb4"), e.originalEvent.persisted && _.trigger("change"), _r_();
}), _r_();
}), function(e) {
"use strict";
_i_("3bb:4bad97ad");
var t = e.require("jquery");
function i() {
if (_i_("3bb:7af6e880"), !booking.env.b_is_tdot_traffic || !t("#b_nav_currency").length || !t("#b_nav_language").length) return _r_();
var i = {
top_last_viewed:"top_lw_wrapper",
top_notification:"top_notification_wrapper",
b_nav_language:"top_language",
b_nav_currency:"top_currency"
};
t("nav>a").click(function(e) {
_i_("3bb:ca288b4c");
var a = t(this), r = t("#" + i[a.attr("id")]);
r.length && setTimeout(function() {
_i_("3bb:d3433515"), r.is(":visible") && n(a, r), _r_();
}, 1), _r_();
}), booking.env.b_is_android || (t("#header_currency").css({
right:"auto",
left:t("#b_nav_currency").offset().left
}), t("#header_language").css({
right:"auto",
left:t("#b_nav_language").offset().left
}));
function n(i, n) {
_i_("3bb:427eb721");
var a, r, _ = n.find(".lw_corner");
"top_language" === n.attr("id") || "top_currency" === n.attr("id") ? (a = 20, e.env.rtl ? (r = e.et.track("bZOMJURSHDHT") ? i.offset().left :i.offset().left - 10, _.css("left", r)) :(r = t(window).width() - a - (i.offset().left + i.outerWidth() / 2) - _.outerWidth() / 2 / 1.4, _.css("right", r))) :a = t(window).width() - (i.offset().left + i.outerWidth() / 2) - (n.width() - _.position().left - _.outerWidth() / 2), e.env.rtl ? n.css("left", a) :n.css("right", a), _r_();
}
_r_();
}
e.when({
events:"ready"
}).run(i), _r_();
}(window.booking), B.when({
events:"ready"
}).run(function() {
_i_("3bb:e7ddd45a");
var e = document.title, t = B.jstmpl.translations("bp_tab_dont_forget_your_booking");
$(window).bind("blur", function() {
_i_("3bb:b9b6db36"), document.title = t, _r_();
}).bind("focus", function() {
_i_("3bb:de861445"), document.title = e, _r_();
}), _r_();
}), -1 !== B.env.b_lang.search(/zh|ja|ko/i) && B.when({
events:"ready"
}).run(function(e) {
_i_("3bb:35c72ee0"), $("#firstname").placeholder(), $("#lastname").placeholder(), _r_();
}), function() {
"use strict";
_i_("3bb:18c39a20"), B.when({
events:"ready"
}).run(function() {
_i_("3bb:314cb049");
var e = booking.lightbox, t = $(".bp_no_card_hint_link"), i = $(".bp_no_card_lightbox");
if (!t.length) return _r_();
t.bind("click", function(t) {
_i_("3bb:c30b933a");
var n = B.require("bp/compset"), a = new n({
onComplete:function(e) {
return _i_("3bb:acce8246"), e.compset_header = B.jstmpl.translations("bp_bs3_no_card_faq_comp_set_header"), e.compset_list_class = "bp-compset-list", e.row_wrap = !0, e.b_lang = B.env.b_lang, e.b_domain_for_app = B.env.b_nonsecure_hostname, e.compset_src = "nocc", _r_(e);
}
});
a.render({
hid:B.env.b_hotel_id,
aid:B.env.aid,
label:B.env.b_label,
lang:B.env.b_lang,
stype:B.env.b_site_type_id,
checkin:i.data("checkin"),
checkout:i.data("checkout")
}).then(function(t) {
_i_("3bb:f8804b32"), i.find(".bp_comp_set").html(t), e.rePosition(), _r_();
})["catch"](function() {}), t.preventDefault(), e.show(i, {
customWrapperClassName:"bp_no_card_lightbox_wrapper",
addDialogStartEndText:!!B.et.track("OTfdASFOMfaNbQANMfXLMdOXbSXT")
}), _r_();
}), _r_();
}), _r_();
}(), function(e, t) {
_i_("3bb:e8bbb5c6");
var i, n = t(".ge-eligibility-check"), a = t(".ge-eligibility-check input#email"), r = t(".ge-eligibility-check input#email_confirm"), _ = t("#optional_password"), o = !1;
function s() {
return _i_("3bb:4b34063f"), _r_("1" === e.env.b_site_type_id && "0" === e.env.auth_level && a.val() && r.val() && a.parent(".val-yes").length && a.val() === r.val() && i !== a.val());
}
function l() {
return _i_("3bb:53f449e4"), _r_(t(".ge-eligibility-check.ge-eligible-js").length && "" === a.val() || "" === r.val());
}
function c() {
_i_("3bb:5346e4ae"), n.addClass("ge-eligible-js"), setTimeout(function() {
_i_("3bb:7c16df0c"), n.addClass("ge-eligible-open-js"), _r_();
}, 400), _r_();
}
function d() {
_i_("3bb:145d4cb7"), n.removeClass("ge-eligible-js ge-eligible-open-js"), _r_();
}
function b(e) {
_i_("3bb:3d23e2d3"), s() ? (d(), t.post("/eligibility", {
email:a.val()
}, function(e) {
_i_("3bb:9a69acd5"), "1" === e.genius_eligibility ? o ? d() :(c(), _.unbind("focus").one("focus", function(e) {
_i_("3bb:9119e640");
var i = t(".ge-eligibility-help").height() - _.height(), n = t(".bp-optional-password-strength");
n.is(":visible") || n.height(0).show(), n.animate({
height:i
}, "slow"), _r_();
}).focus(), o = !0) :d(), i = a.val(), _r_();
})) :l() && (d(), i = null), _r_();
}
function p() {
_i_("3bb:4b55921c"), a.length && r.length && (t(".bp-email-area input#email").bind("blur", b), t(".bp-email-area input#email_confirm").bind("blur", b)), _r_();
}
e.when({
events:"ready"
}).run(function(e) {
_i_("3bb:9364ccbf"), p(), _r_();
}), _r_();
}(window.booking, window.jQuery), "en" == B.env.b_lang && $("#email, #email_confirm").bind("keydown", function(e) {
if (_i_("3bb:c64a00cc"), 222 == e.which) return this.value += "@", _r_(!1);
_r_();
}), B.when({
action:"book",
condition:!B.env.b_is_tdot_traffic
}).run(function() {
_i_("3bb:3a721e17"), $(".hotel-address-text-address").bind("click dblclick", function() {
_i_("3bb:4be1147c");
var i = $(this), n = t(i), a = $("<textarea readonly></textarea>").width(i.width());
a.val(n), a.insertAfter(i), a[0].clientHeight < a[0].scrollHeight && e(a), a.focus().select(), i.hide(), a.bind("focusout", function() {
_i_("3bb:70a7371a"), i.show(), a.remove(), _r_();
}), _r_();
});
function e(e) {
_i_("3bb:48d5a7e1");
var t = $("<div />");
t.css({
position:"absolute",
top:"0",
left:0,
background:"white",
color:"black",
overflow:"scroll"
}).width(e.width()).text(e.val()), $("body").append(t), e.height(t.height()), t.remove(), _r_();
}
function t(e) {
_i_("3bb:401329b6");
var t = e.text().trim();
return _r_(t);
}
_r_();
}), function(e) {
"use strict";
_i_("3bb:4d95efda");
var t, i, n, a;
function r() {
if (_i_("3bb:d3d22d55"), t = e("#installment_count"), i = e("option", t), n = e("#cc_type"), !t.length) return _r_();
a = t.data("accept-installments-from").split(" "), a.push("__null__"), n.on("change.installments", function() {
_i_("3bb:6822b12c");
var t = e("option:selected", this).data("abbr");
-1 === e.inArray(t, a) ? (i.slice(1).prop("disabled", !0), i.first().prop("selected", !0)) :i.prop("disabled", !1), _r_();
}), _r_();
}
e(r), _r_();
}(jQuery), B.when({
events:"click .bp_overview .submit_holder_button"
}).run(function() {
_i_("3bb:c841abbe");
var e = $("#bookForm");
e.trigger("submit-form"), e.submit(), _r_();
}), B.when({
action:"book",
events:"accordion:beforeOpen"
}).run(function() {
_i_("3bb:6f8c4947");
var e = B.require("events"), t = '[name="cc_type"]', i = 'input[name="payment_option"]', n = $("#paymentAccordion"), a = n.find(t);
e.on("accordion:afterOpen", function(e) {
_i_("3bb:0881012b"), e && e.length && (a.prop("disabled", !0), e.find(t).prop("disabled", !1).end().find(i).prop("checked", !0)), _r_();
}), _r_();
}), function(e) {
"use strict";
_i_("3bb:54244fe9");
function t() {
_i_("3bb:59551daf");
var t = e.require("user-left-master");
if (e.env.b_is_tdot_traffic) return _r_();
if (!(t.enabled && e.browserStorageHandler && e.browserStorageHandler.isLocalStorageSupported())) return _r_();
t.register("_master_", "bmst"), e.env.b_notify_favicon && t.setNotifyFavicon(e.env.b_notify_favicon), _r_();
}
e.when({
events:"ready"
}).run(t), _r_();
}(window.booking), function() {
_i_("3bb:a84469f6");
var e = $("#js--pay-form__error__anchor"), t = $("#js--pay-form__error__anchor_all"), i = function() {
_i_("3bb:c0a2157f");
var i = e.length ? e :t, n = i.offset();
"undefined" != n && $("html, body").animate({
scrollTop:n.top
}, 500, "easeOutCubic"), _r_();
};
B.when({
action:"book",
condition:!!e.length
}).run(i), B.when({
action:"book",
condition:!!t.length
}).run(i), _r_();
}(), B.when({
action:"book",
events:"ready",
condition:"cu" == B.env.b_countrycode
}).run(function(e) {
_i_("3bb:992657d8");
var t = e("jquery");
t("[name=reason_to_visit]").change(function() {
_i_("3bb:74b15c8a"), t("[name=reason_to_visit_checkbox]").val(t(this).val() ? "1" :""), _r_();
}), _r_();
}), B.define("component/sp/loyalty-number-validator", function(e, t, i) {
_i_("3bb:34b261d7"), i.exports = e("component").extend({
init:function() {
_i_("3bb:a17fb5db");
var e = this, t = $(document).find("#pl_number, #bonusmilesnr, .sp_pl_loyalty_field"), i = this.$el.attr("data-valmethod"), n = this.$el.attr("data-message"), a = parseInt(this.$el.attr("data-maxlength")), r = !1, _ = this.$el.attr("data-user-loyalty"), o = this.$el.attr("data-show"), s = !1;
this.$el.attr("data-enablesubmit") && "true" == this.$el.attr("data-enablesubmit") && (s = !0), this.setMaxLength(t, a, r), n && $(document).on("change keyup", "#pl_number, #bonusmilesnr, .sp_pl_loyalty_field", function() {
_i_("3bb:4e4743e4"), t = $(this), e.setMaxLength(t, a, r);
var _ = t.parents("form"), o = _.find("button[type='submit']");
e[i](t.val()) ? (t.next("#pl_error").remove(), o.attr("disabled", !1)) :0 == t.next("#pl_error").length && (t.after("<p id='pl_error'>" + n + "</p>"), s || o.attr("disabled", !0)), _r_();
}), _ && o && (e[i](_) || $(o).show()), _r_();
},
validateMod7:function(e) {
_i_("3bb:19800afc");
var t = parseInt(e / 10), i = t - 7 * Math.floor(t / 7);
if (e == 10 * t + i) return _r_(!0);
return _r_(!1);
},
validateLUHN:function(e) {
if (_i_("3bb:1ae2bbcb"), /[^0-9-\s]+/.test(e)) return _r_(!1);
for (var t = 0, i = 0, n = !1, a = e.length - 1; a >= 0; a--) {
var r = e.charAt(a), i = parseInt(r, 10);
n && (i *= 2) > 9 && (i -= 9), t += i, n = !n;
}
return _r_(t % 10 == 0);
},
validateLUHN_meridiana:function(e) {
if (_i_("3bb:2b65c315"), /[^0-9-\s]+/.test(e)) return _r_(!1);
for (var t = e.charAt(e.length - 1), i = 0, n = !0, a = 0; a <= e.length - 2; a++) {
var r = parseInt(e.charAt(a), 10);
n && (r *= 3), i += r, n = !n;
}
var _ = 10 - i % 10;
return _r_(_ == t);
},
validateAA:function(e) {
if (_i_("3bb:3111817c"), e.match(/[a-zA-Z0-9]{7}/)) {
var t = ((n(1) + 2 * n(3) + n(4) + n(5) + n(6)) / 5).toString().split("."), i = t[1] ? t[1].charAt(0) :"0";
return _r_(i === e.charAt(6));
}
return _r_(!1);
function n(t) {
_i_("3bb:622e15d5");
var i = {
0:240,
1:241,
2:242,
3:243,
4:244,
5:245,
6:246,
7:247,
8:248,
9:249,
a:193,
b:194,
c:195,
d:196,
e:197,
f:198,
g:199,
h:200,
i:201,
j:209,
k:210,
l:211,
m:212,
n:213,
o:214,
p:215,
q:216,
r:217,
s:226,
t:227,
u:228,
v:229,
w:230,
x:231,
y:232,
z:233
};
return _r_(i[e.charAt(t - 1).toLowerCase()]);
}
},
setMaxLength:function(e, t, i) {
_i_("3bb:2d75330b"), !i && t && e.length > 0 && e.attr("maxlength", t).keyup(function(i) {
_i_("3bb:8896c0fa"), e.val().length > t && e.val(e.val().substr(0, t)), _r_();
}), _r_();
}
}), _r_();
}), B.define("component/sp/bank-loyalty/bs3-toggle", function(e, t, i) {
_i_("3bb:bf762215");
var n = e("events"), a = e("ga-tracker"), r = B.debug("bank-loyalty");
i.exports = e("component").extend({
init:function() {
_i_("3bb:226e5429"), this.block = this.$el, this.checkbox = this.$el.find(".sp-bank-loyalty__check"), this.untickMsg = this.$el.find("#sp-bank-loyalty__uncheck_message"), this.toggles(), this.tracking(), _r_();
},
toggles:function() {
_i_("3bb:8efc242f");
var e = this;
this.checkbox.on("change", function() {
_i_("3bb:c09c2e19"), this.checked ? e.untickMsg.addClass("hidden").hide() :e.untickMsg.removeClass("hidden").show(), _r_();
}), n.on("pay:tab:select", function(t) {
_i_("3bb:e11d7ee1"), r.log(t), "payment_method__content__creditcard" == t ? (e.block.show(), e.checkbox.prop("checked", !0), e.untickMsg.add("hidden").hide()) :(e.block.hide(), e.checkbox.prop("checked", !1)), _r_();
}), _r_();
},
tracking:function() {
_i_("3bb:bf7f2df9"), this.checkbox.on("change", function() {
_i_("3bb:e7f46f2c"), a.trackEvent("Book Process", "Bank Loyalty changed", "" + this.checked), _r_();
}), _r_();
}
}), _r_();
}), $(function() {
_i_("3bb:2081d5a5"), B.require("ga-events-tracker").setup({
categoryName:"Booking Process",
eventsMap:B.require("bp/ga-tracker/events"),
emitter:B.require("bp/emitter")
}), (2 === B.require("bp/env").get("stage") || 3 === B.require("bp/env").get("stage") && "tdot" !== B.env.b_site_type) && B.require("bp/change-dates-lightbox").init(), B.require("bp/dom-setup"), B.require("bp/inline-validation-errors-tracking"), "tdot" !== B.env.b_site_type && B.require("bp/idleness-tracker").init(), _r_();
}), booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.book.run = !0), B.define("report-error", function() {
_i_("3bb:c368b216");
function e(e) {
_i_("3bb:8ea0d968");
var t = {};
return _r_(e && "[object Function]" === t.toString.call(e));
}
function t(t, i) {
_i_("3bb:cc4fb343");
var n = B.env && B.env.b_dev_server, a = e(B.reportError) && B.reportError.bind(B), r = !a;
if (n || r) throw new Error(t);
a({
message:t
}, i), _r_();
}
return _r_(t);
}), B.define("component/reactive", function(e, t, i) {
_i_("3bb:f0a681e3");
var n, a = e("morphdom"), r = e("component"), _ = e("component/loader"), o = e("event-map"), s = e("report-error"), l = B.env && B.env.is_fe_reactive_components_shout_error_on_broken_template, c = 0, d = 50;
function b(e) {
_i_("3bb:d12e6d1c"), !n && document.createRange && (n = document.createRange(), n.selectNode(document.body));
var t;
return n && n.createContextualFragment ? t = n.createContextualFragment(e) :(t = document.createElement("body"), t.innerHTML = e), _r_(t.childNodes);
}
function p(e) {
return _i_("3bb:df331070"), _r_(1 === b(e).length);
}
function u(e, t, i) {
_i_("3bb:0a9481aa");
var n, a = e.el;
if (t !== i && t !== a && (n = _.getComponent(t)) && n.render !== r.prototype.render) return n.render(), _r_(!1);
_r_();
}
function h(e, t, i) {
_i_("3bb:32fd1ba0");
var n, a, r, _, o, s = i ? i.attributes :t.attributes;
if (!s) return _r_();
for (n = 0, a = s.length; a > n; ++n) if (r = s[n], 0 === r.name.indexOf("on:")) {
o = r.name.split(":")[1], _ = r.value, t.addEventListener(o, e[_], !1);
var l = t.getAttribute(r.name);
l !== r.value && t.removeEventListener(o, e[l], !1);
}
_r_();
}
function f(e) {
return _i_("3bb:c394c36c"), _r_(e.nodeType === Node.ELEMENT_NODE);
}
function m(e, t) {
_i_("3bb:5b730617");
var i = function() {
return _i_("3bb:8d3439e9"), _r_(NodeFilter.FILTER_ACCEPT);
};
if (!f(t)) return _r_();
i.acceptNode = i;
var n = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, i, !1);
for (h(e, t); n.nextNode(); ) n.currentNode && n.currentNode.hasAttribute("data-component") && n.nextSibling(), h(e, n.currentNode);
_r_();
}
function M(e, t) {
_i_("3bb:77cf2403");
var i = e.getAttribute(jQuery.expando);
return i && t.setAttribute(jQuery.expando, i), _r_(!0);
}
function g(e) {
_i_("3bb:a21190e8");
var t = {
onBeforeElUpdated:function(t, i) {
_i_("3bb:2dd8152c"), h(e, t, i), _r_();
},
onBeforeElChildrenUpdated:function(t, i) {
return _i_("3bb:aeac559b"), _r_(u(e, t, i));
},
onBeforeNodeDiscarded:null,
onNodeAdded:function(t) {
_i_("3bb:0f4c88b2"), m(e, t), _r_();
}
};
return "msie" === B.env.b_browser && B.env.b_browser_version <= 8 && (t.onBeforeElUpdated = M), _r_(t);
}
function v(e) {
if (_i_("3bb:074605b6"), e.indexOf(" ") >= 0) throw new Error('component/reactive: invalid "' + e + '". Component name must not contain spaces');
return _r_(e);
}
function y(e) {
_i_("3bb:187091b6");
for (var t in e) "function" == typeof e[t] && (e[t] = e[t].bind(e));
_r_();
}
i.exports = r.extend({
init:function() {
_i_("3bb:57373640"), this.name = v(this.el.getAttribute("data-component")), this.renderOptions = g(this), y(this), this.initialize && this.initialize(), m(this, this.el), this.render(), _r_();
},
getState:function() {
throw _i_("3bb:292ddbaf"), new Error("getState() not implemented on component " + this.name);
},
events:function(e) {
_i_("3bb:a6e7bc31"), o(this.el, e, this), _r_();
},
render:function() {
if (_i_("3bb:b6a14e5f"), !this.template) return _r_();
if (++c > d) throw new Error(this.name + ": max render depth reached (" + d + "). Stuck in a loop?");
var e = B.jstmpl(this.template).render(this.getState()).trim();
l && !p(e) && s("Broken. Reactive components requires having one root node element in rendered template. Add a root element to the template.", "component/reactive"), a(this.el, e, this.renderOptions), _.loadComponents(this.$el), c = 0, "function" == typeof this.afterRender && this.afterRender(), _r_();
}
}), _r_();
}), B.define("components/business/payments/credit-card-search/store", function(e, t, i) {
_i_("3bb:0db48a29");
var n = e("reducer-store"), a = {
clearTextVisible:!1,
searchText:"",
cards:B.env.fe_user_cc_details.filter(function(e) {
return _i_("3bb:7b6bc3ff"), _r_("active" === e.b_cc_status);
})
};
i.exports = new n(function(e, t) {
switch (_i_("3bb:ef5d2440"), t.type) {
case "CLICK_CLEAR_FIELD":
return _r_(Object.assign({}, e, {
searchText:"",
clearTextVisible:!1
}));

case "KEYPRESS_SEARCHBOX":
return _r_(Object.assign({}, e, t.payload));

default:
return _r_(e);
}
_r_();
}, a), _r_();
}), booking.jstmpl("business_creditcard_searchbox", function() {
_i_("3bb:422b2881");
var e, t = [ "\n    ", '<div data-component="business/payments/credit-card-search/searchbox" class="bb-payments-cc-searchbox">\n    <label for="card-search" class="bp_form__field__label">\n        ', "/private/bbp_company_payment_airplus_search_header/name", '\n    </label>\n    <input id="card-search"\n        class="bp_form__field__input bp_input_text bp_phone_input_with_help_message"\n        type="text"\n        name="card-search"\n        value="', '"\n        size="40"\n        placeholder="', "/private/bbp_company_payment_airplus_search_textbox/name", '">\n\n    \n    ', "\n        ", "clear-searchbox-icon", "iconset/close_circle", "medium", "\n</div>\n", "\n" ], i = [ "searchText", "clearTextVisible" ];
return _r_(function(n) {
_i_("3bb:c65aae53");
var a = "", r = this.fn;
function _(a) {
return _i_("3bb:f33c3b23"), a += [ t[1], r.ME(t[2], r.MB, r.MN, null), t[3], r.MC(i[0]), t[4], r.ME(t[5], r.MB, r.MN, null), t[6] ].join(""), r.MJ(r.MB(i[1]) + "" == "true") && (a += [ t[7], (n.unshift({
"class":t[8],
name:t[9],
size:t[10]
}), e = r.HELPER("icon", n[0]), n.shift(), e), t[0] ].join("")), a += t[11], _r_(a);
}
return a += t[0], a = _(a), a += t[12], _r_(a);
});
}()), B.define("component/business/payments/credit-card-search/searchbox", function(e, t, i) {
_i_("3bb:0640db50");
var n = e("components/business/payments/credit-card-search/store");
i.exports = e("component/reactive").extend({
template:"business_creditcard_searchbox",
initialize:a,
getState:r
});
function a() {
_i_("3bb:d02441af"), n.subscribe(this.render.bind(this)), this.events({
"click .clear-searchbox-icon":_,
"keyup #card-search":o
}), this.render(), _r_();
}
function r() {
return _i_("3bb:96c9797f"), _r_(n.getState());
}
function _(e) {
_i_("3bb:e7c9bdc0"), e.preventDefault(), n.dispatch({
type:"CLICK_CLEAR_FIELD"
}), s(r().cards, "", this.$el), _r_();
}
function o(e) {
_i_("3bb:8f3a6288");
var t = e.target.value;
e.preventDefault(), n.dispatch({
type:"KEYPRESS_SEARCHBOX",
payload:{
searchText:t,
clearTextVisible:!!t
}
}), s(r().cards, t.toLowerCase(), this.$el), _r_();
}
function s(e, t, i) {
_i_("3bb:d995d963");
var n, a, r, _ = i.siblings("#book_credit_card").find(".saved_cc_table_item");
for (n = 0, a = e.length; a > n; ++n) t && -1 === e[n].b_cc_type.toLowerCase().indexOf(t) && -1 === e[n].b_cc_name.toLowerCase().indexOf(t) ? _.eq(n).addClass("hide-me") :(_.eq(n).removeClass("hide-me"), r || (r = _.eq(n)));
r && r.find("input").first().click(), _r_();
}
_r_();
}), B.define("component/business/payments/company-cards/company-settings/store", function(e, t, i) {
_i_("3bb:ccffa703");
var n = e("reducer-store"), a = {
dbiProps:r()
};
function r() {
_i_("3bb:06b1a360");
var e, t, i, n = [];
for (i = B.env.dbiProps ? B.env.dbiProps :[ {
isRequired:0,
code:"AE",
isDisplayed:0,
acceptedValues:[]
}, {
isDisplayed:0,
isRequired:0,
code:"AU",
acceptedValues:[]
}, {
isRequired:0,
code:"DS",
isDisplayed:0,
acceptedValues:[]
}, {
isRequired:0,
code:"IK",
isDisplayed:0,
acceptedValues:[]
}, {
code:"KS",
isRequired:0,
isDisplayed:0,
acceptedValues:[]
}, {
code:"PK",
isRequired:0,
isDisplayed:0,
acceptedValues:[]
}, {
isDisplayed:0,
isRequired:0,
code:"PR",
acceptedValues:[]
} ], e = 0, t = i.length; t > e; ++e) n.push({
code:i[e].code,
isDisplayed:!!i[e].isDisplayed,
isRequired:!!i[e].isRequired,
isRequiredActive:!!i[e].isDisplayed,
acceptedValues:i[e].acceptedValues.join(", "),
isAcceptedValuesActive:!!i[e].isDisplayed,
isLoading:!1,
hasValidationError:!1,
loadingStatus:"none"
});
return _r_(n);
}
i.exports = new n(function(e, t) {
switch (_i_("3bb:72edd910"), t.type) {
case "DISPLAYED_CLICK":
return _r_(Object.assign({}, e, {
dbiProps:t.payload.dbiProps
}));

case "REQUIRED_CLICK":
return _r_(Object.assign({}, e, {
dbiProps:t.payload.dbiProps
}));

case "ACCEPTED_VALUES_KEYPRESS":
return _r_(Object.assign({}, e, {
dbiProps:t.payload.dbiProps
}));

case "BEFORE_SEND_ROW":
return _r_(Object.assign({}, e, {
dbiProps:t.payload.dbiProps
}));

case "AFTER_SEND_ROW_SUCCESS":
return _r_(Object.assign({}, e, {
dbiProps:t.payload.dbiProps
}));

case "AFTER_SEND_ROW_ERROR":
return _r_(Object.assign({}, e, {
dbiProps:t.payload.dbiProps
}));

case "AFTER_SEND_ROW":
return _r_(Object.assign({}, e, {
dbiProps:t.payload.dbiProps
}));

case "AFTER_VALIDATION_FAIL":
return _r_(Object.assign({}, e, {
dbiProps:t.payload.dbiProps
}));

case "AFTER_VALIDATION_SHOWN":
return _r_(Object.assign({}, e, {
dbiProps:t.payload.dbiProps
}));

default:
return _r_(e);
}
_r_();
}, a), _r_();
}), booking.jstmpl("company_settings_company_cards", function() {
_i_("3bb:137426d7");
var e = [ "\n    ", '<div id="company-settings-company-cards"\n    data-component="business/payments/company-cards/company-settings/company-settings-company-cards"\n    class="w-section company-section--permissions w-box">\n\n    <div class="w-section-head">\n        <div class="w-section-head__title">\n            ', "/private/bb_company_card_header/name", '\n        </div>\n        <div class="w-section-head__subtitle">\n            ', "/private/bb_company_card_subheader/name", '\n        </div>\n    </div>\n\n    <div class="w-section-content w-section-content--paddingless">\n        <div class="w-table w-table--with-icons w-table--no-border-top">\n            <div class="row-fluid w-table__row">\n                <div class="span2 w-table__cell w-text-bold">\n                    ', "/private/bb_company_card_field_name/name", '\n                </div>\n                <div class="span2 w-table__cell w-text-bold w-text-center">\n                    ', "/private/bb_company_card_field_code/name", "/private/bb_company_card_displayed/name", '\n                </div>\n                <div class="span2 w-table__cell w-text-bold w-text-center ', "w-text-lh-14", '">\n                    ', "/private/bb_company_card_required/name", '\n                </div>\n                <div class="span4 w-table__cell w-text-bold ', "/private/bb_company_card_accepted_values_header/name", '\n                    <i class="bicon-questionmarkcircle company-settings-accepted-values-tooltip"\n                        data-component="tooltip"\n                        data-tooltip-text="', "/private/bb_company_card_accepted_values_tooltip/name", '">\n                    </i>\n                </div>\n            </div>\n\n            ', "\n                ", '\n                    <div class="row-fluid w-table__row company-airplus-fields">\n                        ', '\n                            <span class="company-airplus-fields-success">\n                                <i class="bicon-checkmark-circle"></i>\n                                ', "/private/bbt_settings_permissions_success/name", "\n                            </span>\n                        ", "\n                        ", '\n                            <span class="company-airplus-fields-error">\n                                <i class="bicon-close"></i>\n                                ', "/private/bbt_settings_permissions_error/name", '\n                            <span class="company-airplus-fields-pending">\n                                <div class="w-form-loading">\n                                    <span class="w-form-loading-content__inline">\n                                        ', "/private/bbt_settings_permissions_saving/name", "\n                                    </span>\n                                </div>\n                            </span>\n                        ", "\n                    </div>\n                ", '\n                    <div class="row-fluid w-table__row company-airplus-fields">\n                        <span class="company-airplus-fields-error">\n                            <i class="bicon-close"></i>\n                            \n                            ', "/private/bbp_company_card_settings_value_error/name", "\n                        </span>\n                    </div>\n                ", '\n                    <div class="row-fluid w-table__row">\n                        <div class="span2 w-table__cell">\n                            ', "\n                                    ", "/private/bbp_cc_project_fields_dbiae/name", "\n                                ", "/private/bbp_cc_project_fields_dbiak/name", "/private/bbp_cc_project_fields_dbiau/name", "/private/bbp_cc_project_fields_dbids/name", "/private/bbp_cc_project_fields_dbiik/name", "/private/bbp_cc_project_fields_dbipk/name", "/private/bbp_cc_project_fields_dbipr/name", "/private/bbp_cc_project_fields_dbiks/name", "\n                            ", '\n                        </div>\n                        <div class="span2 w-table__cell w-text-center">\n                            ', '\n                        </div>\n                        <div class="span2 w-table__cell w-text-center">\n                            <input type="checkbox"\n                                data-index="', '"\n                                class="w-input-centered w-input-middle js-is-displayed"\n                                ', 'checked="checked"', '>\n                        </div>\n                        <div class="span2 w-table__cell w-text-center ', '">\n                            <input type="checkbox"\n                                data-index="', '"\n                                class="w-input-centered w-input-middle js-is-required"\n                                ', "disabled", '>\n                        </div>\n                        <div class="span4 w-table__cell ', '">\n                            <input class="bootstrapped-input input-block-level input-text airplus-dbi-input js-airplus-dbi-input"\n                                data-index="', '"\n                                value="', '"\n                                placeholder="', "/private/bb_company_card_placeholder/name", '"\n                                ', ">\n                        </div>\n                    </div>\n                ", "\n            ", "\n        </div>\n    </div>\n</div>\n", "\n" ], t = [ "b_lang", "dbiProps" ];
return _r_(function(i) {
_i_("3bb:719b15a1");
var n = "", a = this.fn;
function r(n) {
_i_("3bb:4fae0b4c"), n += [ e[1], a.ME(e[2], a.MB, a.MN, null), e[3], a.ME(e[4], a.MB, a.MN, null), e[5], a.ME(e[6], a.MB, a.MN, null), e[7], a.ME(e[8], a.MB, a.MN, null), e[7], a.ME(e[9], a.MB, a.MN, null), e[10] ].join(""), a.MJ(/ru|el|es|pt|ca|uk|id|ms/.test(a.MC(t[0]))) && (n += e[11]), n += [ e[12], a.ME(e[13], a.MB, a.MN, null), e[14] ].join(""), a.MJ(/ru|el|es|pt|ca|uk|id|ms/.test(a.MC(t[0]))) && (n += e[11]), n += [ e[12], a.ME(e[15], a.MB, a.MN, null), e[16], a.ME(e[17], a.MB, a.MN, null), e[18] ].join("");
var r = a.MC(t[1]) || [];
i.unshift({
prop:null
});
for (var _, o = 1, s = r.length; s >= o; o++) {
if (i[0].prop = _ = r[o - 1], n += e[19], a.MJ(_.isLoading)) n += e[20], a.MJ(_.loadingStatus + "" == "success") && (n += [ e[21], a.ME(e[22], a.MB, a.MN, null), e[23] ].join("")), n += e[24], a.MJ(_.loadingStatus + "" == "error") && (n += [ e[25], a.ME(e[26], a.MB, a.MN, null), e[23] ].join("")), n += e[24], a.MJ(_.loadingStatus + "" == "pending") && (n += [ e[27], a.ME(e[28], a.MB, a.MN, null), e[29] ].join("")), n += e[30]; else if (a.MJ(_.hasValidationError)) n += [ e[31], a.ME(e[32], a.MB, a.MN, null), e[33] ].join(""); else {
n += e[34];
var l = _.code;
a.MJ(l + "" == "AE") ? n += [ e[35], a.ME(e[36], a.MB, a.MN, null), e[37] ].join("") :a.MJ(l + "" == "AK") ? n += [ e[35], a.ME(e[38], a.MB, a.MN, null), e[37] ].join("") :a.MJ(l + "" == "AU") ? n += [ e[35], a.ME(e[39], a.MB, a.MN, null), e[37] ].join("") :a.MJ(l + "" == "DS") ? n += [ e[35], a.ME(e[40], a.MB, a.MN, null), e[37] ].join("") :a.MJ(l + "" == "IK") ? n += [ e[35], a.ME(e[41], a.MB, a.MN, null), e[37] ].join("") :a.MJ(l + "" == "PK") ? n += [ e[35], a.ME(e[42], a.MB, a.MN, null), e[37] ].join("") :a.MJ(l + "" == "PR") ? n += [ e[35], a.ME(e[43], a.MB, a.MN, null), e[37] ].join("") :a.MJ(l + "" == "KS") && (n += [ e[35], a.ME(e[44], a.MB, a.MN, null), e[45] ].join("")), n += [ e[46], _.code, e[47], o, e[48] ].join(""), a.MJ(_.isDisplayed) && (n += e[49]), n += e[50], a.MJ(/ru|el|es|pt|ca|uk|id|ms/.test(a.MC(t[0]))) && (n += e[11]), n += [ e[51], o, e[52] ].join(""), a.MJ(_.isRequired) && (n += e[49]), n += e[37], a.MK(_.isRequiredActive) && (n += e[53]), n += e[54], a.MJ(/ru|el|es|pt|ca|uk|id|ms/.test(a.MC(t[0]))) && (n += e[11]), n += [ e[55], o, e[56], _.acceptedValues, e[57], a.ME(e[58], a.MB, a.MN, null), e[59] ].join(""), a.MK(_.isAcceptedValuesActive) && (n += e[53]), n += e[60];
}
n += e[61];
}
return i.shift(), n += e[62], _r_(n);
}
return n += e[0], n = r(n), n += e[63], _r_(n);
});
}()), B.define("component/business/payments/company-cards/company-settings/company-settings-company-cards", function(e, t, i) {
_i_("3bb:cf6ce03c");
var n = 0, a = 1500, r = e("component/business/payments/company-cards/company-settings/store");
i.exports = e("component/reactive").extend({
template:"company_settings_company_cards",
initialize:_,
getState:o
});
function _() {
_i_("3bb:cb4737a5"), r.subscribe(this.render.bind(this)), this.events({
"click .js-is-displayed":s,
"click .js-is-required":l,
"keyup .js-airplus-dbi-input":c
}), this.render(), _r_();
}
function o() {
return _i_("3bb:96c9797f1"), _r_(r.getState());
}
function s(e) {
_i_("3bb:f403ce9a");
var t = +e.target.dataset.index - 1, i = !o().dbiProps[t].isDisplayed, n = o().dbiProps;
n[t].isDisplayed = !n[t].isDisplayed, i ? (n[t].isRequiredActive = !0, n[t].isAcceptedValuesActive = !0) :(n[t].isRequired = !1, n[t].isRequiredActive = !1, n[t].isAcceptedValuesActive = !1), r.dispatch({
type:"DISPLAYED_CLICK",
payload:{
dbiProps:n
}
}), u(t, n), _r_();
}
function l(e) {
_i_("3bb:32aa5e21");
var t = +e.target.dataset.index - 1, i = o().dbiProps;
i[t].isRequired = !i[t].isRequired, r.dispatch({
type:"REQUIRED_CLICK",
payload:{
dbiProps:i
}
}), u(t, i), _r_();
}
function c(e) {
_i_("3bb:3ad46238");
var t = +e.target.dataset.index - 1, i = o().dbiProps;
i[t].acceptedValues = e.target.value, r.dispatch({
type:"ACCEPTED_VALUES_KEYPRESS",
payload:{
dbiProps:i
}
}), clearTimeout(n), n = setTimeout(u.bind(this, t, i), a), _r_();
}
function d(e) {
_i_("3bb:e165d817");
var t = o().dbiProps[e];
return _r_({
bhc_csrf_token:B.env.b_csrf_token,
code:t.code,
isDisplayed:t.isDisplayed,
isRequired:t.isRequired,
acceptedValues:t.acceptedValues.split(",").map(function(e) {
return _i_("3bb:ddb6427a"), _r_(e.trim());
})
});
}
function b(e) {
_i_("3bb:b9f885e1");
var t = 17, i = e.acceptedValues, n = !0;
return i.forEach(function(e) {
_i_("3bb:1256a2ba"), e.length > t && (n = !1), _r_();
}), _r_(n);
}
function p(e, t, i) {
_i_("3bb:b31f8ec4"), e.abort(), t[i].hasValidationError = !0, r.dispatch({
type:"AFTER_VALIDATION_FAIL",
payload:{
dbiProps:t
}
}), t[i].hasValidationError = !1, setTimeout(function() {
_i_("3bb:9a1454ef"), r.dispatch({
type:"AFTER_VALIDATION_SHOWN",
payload:{
dbiProps:t
}
}), _r_();
}, 2e3), _r_();
}
function u(e, t) {
_i_("3bb:5107b36d");
var i = d(e);
$.ajax({
type:"POST",
url:"bbtool_company_dbi_prop",
traditional:!0,
data:i,
beforeSend:function(n) {
if (_i_("3bb:7a7b4e13"), !b(i)) return _r_(p(n, t, e));
t[e].isLoading = !0, t[e].loadingStatus = "pending", r.dispatch({
type:"BEFORE_SEND_ROW",
payload:{
dbiProps:t
}
}), _r_();
},
success:function() {
_i_("3bb:c88387c4"), t[e].isLoading = !0, t[e].loadingStatus = "success", r.dispatch({
type:"AFTER_SEND_ROW_SUCCESS",
payload:{
dbiProps:t
}
}), _r_();
},
error:function() {
_i_("3bb:154d2357"), t[e].isLoading = !0, t[e].loadingStatus = "error", r.dispatch({
type:"AFTER_SEND_ROW_ERROR",
payload:{
dbiProps:t
}
}), _r_();
},
complete:function() {
_i_("3bb:2ffa39f7"), t[e].isLoading = !1, t[e].loadingStatus = "none", setTimeout(function() {
_i_("3bb:1bafbf50"), r.dispatch({
type:"AFTER_SEND_ROW",
payload:{
dbiProps:t
}
}), _r_();
}, 500), _r_();
}
}), _r_();
}
_r_();
}), B.define("component/business/payments/company-cards/company-cards-permissions/store", function(e, t, i) {
_i_("3bb:c7af5f49");
var n = e("reducer-store"), a = {
cards:r(),
itemizedChargesEnabled:B.env.itemizedChargesEnabled
};
i.exports = new n(function(e, t) {
switch (_i_("3bb:6a35b0e9"), t.type) {
case "EDIT_CLICK":
return _r_(Object.assign({}, e, {
cards:t.payload.cards
}));

case "CANCEL_CLICK":
return _r_(Object.assign({}, e, {
cards:t.payload.cards
}));

case "SHARED_WITH_CLICK":
return _r_(Object.assign({}, e, {
cards:t.payload.cards
}));

case "NAME_CHANGE":
return _r_(Object.assign({}, e, {
cards:t.payload.cards
}));

case "REMOVE_SHARED_CLICK":
return _r_(Object.assign({}, e, {
cards:t.payload.cards
}));

case "SHARED_WITH_EMAIL_CHANGE":
return _r_(Object.assign({}, e, {
cards:t.payload.cards
}));

case "SHARED_EMAIL_ADD":
return _r_(Object.assign({}, e, {
cards:t.payload.cards
}));

case "BEFORE_SEND_CARD":
return _r_(Object.assign({}, e, {
cards:t.payload.cards
}));

case "AFTER_SEND_CARD_SUCCESS":
return _r_(Object.assign({}, e, {
cards:t.payload.cards
}));

case "AFTER_SEND_CARD_ERROR":
return _r_(Object.assign({}, e, {
cards:t.payload.cards
}));

case "AFTER_SEND_CARD":
return _r_(Object.assign({}, e, {
cards:t.payload.cards
}));

case "ITEMIZED_CHARGES_CLICK":
return _r_(Object.assign({}, e, {
cards:t.payload.cards
}));

default:
return _r_(e);
}
_r_();
}, a);
function r() {
_i_("3bb:056199d9");
var e, t, i, n, a = [];
for (e = 0, t = B.env.airplusCards.length; t > e; ++e) i = B.env.airplusCards[e], n = {
id:i.id,
name:decodeURIComponent(i.name),
nameOld:decodeURIComponent(i.name),
expiry:i.expiry,
isLoading:!1,
loadingStatus:"none",
isCompanyShared:!!i.isCompanyShared,
isCompanySharedOld:!!i.isCompanyShared,
hasInvalidName:!1,
isInvalid:!1,
hasInvalidSharedWithEmail:!1,
sharedWithEmail:"",
sharedWith:i.sharedWith.slice(),
sharedWithOld:i.sharedWith.slice(),
isOpen:!1,
hasPaymentRestrictions:!!i.is_pay_restricted || !1
}, B.env.itemizedChargesEnabled && (n.itemizedCharges = {
room:!0,
breakfast:i.pay_restrictions.breakfast,
taxes:i.pay_restrictions.taxes,
parking:i.pay_restrictions.parking,
internet:i.pay_restrictions.internet,
all:i.pay_restrictions.allow_all,
other:i.pay_restrictions.other,
otherText:i.pay_restrictions.other_text
}, n.itemizedChargesOld = {
room:!0,
breakfast:i.pay_restrictions.breakfast,
taxes:i.pay_restrictions.taxes,
parking:i.pay_restrictions.parking,
internet:i.pay_restrictions.internet,
all:i.pay_restrictions.allow_all,
other:i.pay_restrictions.other,
otherText:i.pay_restrictions.other_text
}), a.push(n);
return _r_(a);
}
_r_();
}), booking.jstmpl("company_settings_company_cards_permissions", function() {
_i_("3bb:bd4a01d6");
var e, t = [ "\n    ", '<div id="company-settings-company-cards-permissions"\n    data-component="business/payments/company-cards/company-cards-permissions/company-settings-company-cards-permissions"\n    class="w-section company-section--permissions w-box">\n\n    <div class="w-section-head">\n        <div class="w-section-head__title">\n            ', "/private/bbt_settings_card_permissions_header/name", '\n        </div>\n        <div class="w-section-head__subtitle">\n            ', "/private/bbt_settings_card_permissions_subheader/name", '\n        </div>\n    </div>\n\n    <div class="w-section-content w-section-content--paddingless">\n        ', '\n            <div class="row-fluid w-table__row w-table__row--no-bottom-border">\n                ', '\n                    <div class="row-fluid w-table__row company-airplus-fields airplus-card-box">\n                        ', '\n                            <span class="airplus-card-box-success">\n                                <i class="bicon-checkmark-circle"></i>\n                                ', "/private/bbt_settings_permissions_success/name", "\n                            </span>\n                        ", "\n                        ", '\n                            <span class="airplus-card-box-error">\n                                <i class="bicon-close"></i>\n                                ', "/private/bbt_settings_permissions_error/name", '\n                            <span class="airplus-card-box-pending">\n                                <div class="w-form-loading">\n                                    <span class="w-form-loading-content__inline">\n                                        ', "/private/bbt_settings_permissions_saving/name", "\n                                    </span>\n                                </div>\n                            </span>\n                        ", "\n                    </div>\n                ", '\n                    <div class="row-fluid airplus-card-box">\n                        <div class="row-fluid  w-table__row airplus-card-box-header">\n                            <div class="span7 w-table__cell w-text-bold ellipsis">\n                                ', "\n                                    ", "/private/bbt_settings_card_permissions_name_placeholder/name", "\n                                ", '\n                            </div>\n                            <div class="span3 w-table__cell w-text-bold ellipsis">\n                                ', '\n                            </div>\n                            <div class="span2 w-table__cell w-text-bold text-align-right">\n                                <span class="w-toolbutton w-spacer-right js-airplus-edit-btn airplus-card-box-toolbox" data-index="', '">\n                                    <i class="w-toolbutton__icon bicon-acedit" data-index="', '"></i>\n                                    <span class="w-toolbutton__text" data-index="', '">\n                                        ', "/private/bbt_settings_card_permissions_edit/name", "\n                                    </span>\n                                </span>\n                            </div>\n                        </div>\n                        ", '\n                            <div class="row-fluid">\n                                <p class="airplus-card-box-shared-with ellipsis">\n                                    ', "/private/bbt_settings_card_permissions_shared_with/name", "\n                                        ", "/private/bbt_settings_card_permissions_shared_whole/name", "\n                                            ", "\n                                                ", ",\n                                            ", "\n                                </p>\n                            </div>\n                        ", "\n                        \n                        \n                        \n                        ", '\n                            <div class="company-form-container">\n                                <div class="row-fluid w-form-group">\n                                    <div class="span12">\n                                        <div class="w-form-field">\n                                            <label class="w-form-label w-form-label--thin w-form-label--required">\n                                                ', "/private/bbt_settings_card_permissions_name/name", '\n                                                <span class="w-form-label__sup">\n                                                    ✶\n                                                </span>\n                                            </label>\n                                            <input type="text"\n                                                class="airplus-card-name bootstrapped-input input-text input-block-level js-card-name ', "has-error", '"\n                                                maxlength="255"\n                                                placeholder="', '"\n                                                autocomplete="off"\n                                                data-index="', '"\n                                                value="', '">\n                                        </div>\n                                    </div>\n                                </div>\n                                ', '\n                                    <div class="row-fluid w-form-group">\n                                        <div class="span12">\n                                            <div class="w-form-field">\n                                                <label class="w-form-label w-form-label--thin w-form-label--required">\n                                                    ', "/private/bb_payments_create_card_charges_intro/name", '\n                                                    <span class="w-form-label__sup">\n                                                        ✶\n                                                    </span>\n                                                </label>\n                                            </div>\n                                            <div class="row-fluid">\n                                                <div class="span6">\n                                                    <label class="bui-checkbox">\n                                                        <input class="bui-checkbox__input" type="checkbox" checked="checked" disabled/>\n                                                        <span class="bui-checkbox__label">\n                                                            ', "/private/bb_payments_create_card_charges_room/name", '\n                                                        </span>\n                                                    </label>\n                                                </div>\n                                                <div class="span6">\n                                                    <label class="bui-checkbox">\n                                                        <input class="bui-checkbox__input js-itemized-charges-checkbox"\n                                                            data-key="breakfast"\n                                                            data-index="', '"\n                                                            ', '\n                                                                checked="checked"\n                                                            ', '\n                                                            type="checkbox" />\n                                                        <span class="bui-checkbox__label">\n                                                            ', "/private/bb_payments_create_card_charges_bfast/name", '\n                                                        </span>\n                                                    </label>\n                                                </div>\n                                            </div>\n                                            <div class="row-fluid">\n                                                <div class="span6">\n                                                    <label class="bui-checkbox">\n                                                        <input class="bui-checkbox__input js-itemized-charges-checkbox"\n                                                            data-key="taxes"\n                                                            data-index="', "/private/bb_payments_create_card_charges_taxes/name", '\n                                                        </span>\n                                                    </label>\n                                                </div>\n                                                <div class="span6">\n                                                    <label class="bui-checkbox">\n                                                        <input class="bui-checkbox__input js-itemized-charges-checkbox"\n                                                            data-key="parking"\n                                                            data-index="', "/private/bb_payments_create_card_charges_park/name", '\n                                                        </span>\n                                                    </label>\n                                                </div>\n                                            </div>\n                                            <div class="row-fluid">\n                                                <div class="span6">\n                                                    <label class="bui-checkbox">\n                                                        <input class="bui-checkbox__input js-itemized-charges-checkbox"\n                                                            data-key="internet"\n                                                            data-index="', "/private/bb_payments_create_card_charges_internet/name", '\n                                                        </span>\n                                                    </label>\n                                                </div>\n                                                <div class="span6">\n                                                    <label class="bui-checkbox">\n                                                        <input class="bui-checkbox__input js-itemized-charges-checkbox"\n                                                            data-key="all"\n                                                            data-index="', "/private/bb_payments_create_card_charges_all/name", "\n                                                        </span>\n                                                    </label>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                ", '\n                                <div class="row-fluid w-form-group">\n                                    <div class="span12">\n                                        <label class="w-form-label w-form-label--thin w-form-label--required">\n                                            ', "/private/bbt_settings_card_permissions_share/name", '\n                                            <span class="w-form-label__sup">\n                                                ✶\n                                            </span>\n                                        </label>\n                                        <label class="airplus-shared-inline">\n                                            <input type="radio"\n                                                name="shared-with-', '"\n                                                value="all"\n                                                class="w-spacer-right"\n                                                data-index="', '"\n                                                ', 'checked="checked"', ">\n                                            ", "/private/bbt_settings_card_permissions_share_company/name", '\n                                        </label>\n                                        <label class="w-spacer-left airplus-shared-inline">\n                                            <input type="radio"\n                                                name="shared-with-', '"\n                                                value="emails"\n                                                class="w-spacer-right"\n                                                data-index="', "/private/bbt_settings_card_permissions_share_selected/name", "\n                                        </label>\n                                    </div>\n                                </div>\n                                ", '\n                                    <div class="row-fluid">\n                                        <div class="span6">\n                                            <input type="text"\n                                                class="js-shared-with-email bootstrapped-input input-text input-block-level ', "/private/bbt_settings_card_permissions_email_placeholder/name", '">\n                                        </div>\n                                        <div class="span4">\n                                            <a href="javascript:void(0)"\n                                                data-index="', '"\n                                                class="js-add-shared-email ', "disabled", '">\n                                                ', "/private/bbt_settings_card_permissions_add_cta/name", "\n                                            </a>\n                                        </div>\n                                    </div>\n                                    ", '\n                                        <div class="row-fluid w-form-group">\n                                            <div class="span6" data-index="', '\n                                                    <div class="w-spacer-right" data-email-index="', '">\n                                                        ', "airplus-remove-shared", "iconset/trash", "small", "\n                                                        ", "\n                                                    </div>\n                                                ", "\n                                            </div>\n                                        </div>\n                                    ", '\n                                <div class="row-fluid">\n                                    <div class="span7">\n                                        <button class="b-button b-button_primary w-spacer-right"\n                                            ', '>\n                                            <span class="b-button__text js-airplus-save-btn" data-index="', "/private/bbt_settings_card_permissions_save_cta/name", '\n                                            </span>\n                                        </button>\n                                        <span class="w-link js-airplus-cancel-btn" data-index="', '">\n                                            ', "/private/bbt_settings_card_permissions_cancel/name", "\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                        ", "\n            </div>\n        ", "\n    </div>\n</div>\n", "\n" ], i = [ "cards", "itemizedChargesEnabled" ];
return _r_(function(n) {
_i_("3bb:f0807fc5");
var a = "", r = this.fn;
function _(a) {
_i_("3bb:36e28631"), a += [ t[1], r.ME(t[2], r.MB, r.MN, null), t[3], r.ME(t[4], r.MB, r.MN, null), t[5] ].join("");
var _ = r.MC(i[0]) || [];
n.unshift({
card:null
});
for (var o, s = 1, l = _.length; l >= s; s++) {
if (n[0].card = o = _[s - 1], a += t[6], r.MJ(o.isLoading)) a += t[7], r.MJ(o.loadingStatus + "" == "success") && (a += [ t[8], r.ME(t[9], r.MB, r.MN, null), t[10] ].join("")), a += t[11], r.MJ(o.loadingStatus + "" == "error") && (a += [ t[12], r.ME(t[13], r.MB, r.MN, null), t[10] ].join("")), a += t[11], r.MJ(o.loadingStatus + "" == "pending") && (a += [ t[14], r.ME(t[15], r.MB, r.MN, null), t[16] ].join("")), a += t[17]; else {
if (a += t[18], a += r.MJ(o.hasInvalidName) ? [ t[19], r.ME(t[20], r.MB, r.MN, null), t[21] ].join("") :[ t[19], r.F.entities((o || {}).name), t[21] ].join(""), a += [ t[22], r.F.entities((o || {}).expiry), t[23], r.F.entities(s), t[24], r.F.entities(s), t[25], r.F.entities(s), t[26], r.ME(t[27], r.MB, r.MN, null), t[28] ].join(""), r.MK(o.isOpen)) {
if (a += [ t[29], r.ME(t[30], r.MB, r.MN, null), t[19] ].join(""), r.MJ(r.MG((o || {}).isCompanyShared))) a += [ t[31], r.ME(t[32], r.MB, r.MN, null), t[19] ].join(""); else {
a += t[31];
var c = s, d = _, b = l, p = u, _ = (o || {}).sharedWith || [];
n.unshift({
email:null
});
for (var u, s = 1, l = _.length; l >= s; s++) n[0].email = u = _[s - 1], a += t[33], a += r.MK(r.MJ(s == _.length)) ? [ t[34], r.F.entities(u), t[35] ].join("") :[ t[34], r.F.entities(u), t[33] ].join(""), a += t[31];
n.shift(), s = c, _ = d, l = b, u = p, a += t[19];
}
a += t[36];
}
if (a += t[37], r.MJ(r.MG((o || {}).isOpen))) {
if (a += [ t[38], r.ME(t[39], r.MB, r.MN, null), t[40] ].join(""), r.MJ(o.hasInvalidName) && (a += t[41]), a += [ t[42], r.ME(t[20], r.MB, r.MN, null), t[43], r.F.entities(s), t[44], r.F.entities((o || {}).name), t[45] ].join(""), r.MD(i[1]) && (a += [ t[46], r.ME(t[47], r.MB, r.MN, null), t[48], r.ME(t[49], r.MB, r.MN, null), t[50], r.F.entities(s), t[51] ].join(""), r.MJ(r.MG(((o || {}).itemizedCharges || {}).breakfast)) && (a += t[52]), a += [ t[53], r.ME(t[54], r.MB, r.MN, null), t[55], r.F.entities(s), t[51] ].join(""), r.MJ(r.MG(((o || {}).itemizedCharges || {}).taxes)) && (a += t[52]), a += [ t[53], r.ME(t[56], r.MB, r.MN, null), t[57], r.F.entities(s), t[51] ].join(""), r.MJ(r.MG(((o || {}).itemizedCharges || {}).parking)) && (a += t[52]), a += [ t[53], r.ME(t[58], r.MB, r.MN, null), t[59], r.F.entities(s), t[51] ].join(""), r.MJ(r.MG(((o || {}).itemizedCharges || {}).internet)) && (a += t[52]), a += [ t[53], r.ME(t[60], r.MB, r.MN, null), t[61], r.F.entities(s), t[51] ].join(""), r.MJ(r.MG(((o || {}).itemizedCharges || {}).all)) && (a += t[52]), a += [ t[53], r.ME(t[62], r.MB, r.MN, null), t[63] ].join("")), a += [ t[64], r.ME(t[65], r.MB, r.MN, null), t[66], r.F.entities(s), t[67], r.F.entities(s), t[68] ].join(""), r.MJ(o.isCompanyShared) && (a += t[69]), a += [ t[70], r.ME(t[71], r.MB, r.MN, null), t[72], r.F.entities(s), t[73], r.F.entities(s), t[68] ].join(""), r.MK(o.isCompanyShared) && (a += t[69]), a += [ t[70], r.ME(t[74], r.MB, r.MN, null), t[75] ].join(""), r.MK(o.isCompanyShared)) {
if (a += t[76], r.MJ(o.hasInvalidSharedWithEmail) && (a += t[41]), a += [ t[42], r.ME(t[77], r.MB, r.MN, null), t[43], r.F.entities(s), t[44], r.F.entities((o || {}).sharedWithEmail), t[78], r.F.entities(s), t[79] ].join(""), r.MJ(o.hasInvalidSharedWithEmail) && (a += t[80]), a += [ t[81], r.ME(t[82], r.MB, r.MN, null), t[83] ].join(""), r.MJ(r.array_length(o.sharedWith))) {
a += [ t[84], r.F.entities(s), t[81] ].join("");
var c = s, d = _, b = l, p = u, _ = (o || {}).sharedWith || [];
n.unshift({
email:null
});
for (var u, s = 1, l = _.length; l >= s; s++) n[0].email = u = _[s - 1], a += [ t[85], r.F.entities(s), t[86], (n.unshift({
"class":t[87],
color:"#FF6C6C",
name:t[88],
size:t[89]
}), e = r.HELPER("icon", n[0]), n.shift(), e), t[90], r.F.entities(u), t[91] ].join("");
n.shift(), s = c, _ = d, l = b, u = p, a += t[92];
}
a += t[21];
}
a += t[93], (r.MJ(o.hasInvalidName) || r.MJ(o.isInvalid)) && (a += t[80]), a += [ t[94], r.F.entities(s), t[81], r.ME(t[95], r.MB, r.MN, null), t[96], r.F.entities(s), t[97], r.ME(t[98], r.MB, r.MN, null), t[99] ].join("");
}
a += t[17];
}
a += t[100];
}
return n.shift(), a += t[101], _r_(a);
}
return a += t[0], a = _(a), a += t[102], _r_(a);
});
}()), B.define("component/business/payments/company-cards/company-cards-permissions/company-settings-company-cards-permissions", function(e, t, i) {
_i_("3bb:2121565e");
var n = e("component/business/payments/company-cards/company-cards-permissions/store");
i.exports = e("component/reactive").extend({
template:"company_settings_company_cards_permissions",
initialize:a,
getState:M
});
function a() {
_i_("3bb:9792bca4"), n.subscribe(this.render.bind(this)), this.events({
"click .js-airplus-edit-btn":c,
"click .js-airplus-cancel-btn":d,
"click .js-airplus-save-btn":u,
'click input[name*="shared-with"]':m,
"keyup .js-card-name":l,
"click .airplus-remove-shared":s,
"keyup .js-shared-with-email":o,
"click .js-add-shared-email":_,
"click  .js-itemized-charges-checkbox":r
}), this.render(), _r_();
}
function r(e) {
_i_("3bb:e4ac250d");
var t = +e.target.dataset.index - 1, i = e.target.dataset.key, a = M().cards;
a[t].itemizedCharges.hasOwnProperty(i) && (a[t].itemizedCharges[i] = !a[t].itemizedCharges[i]), "all" === i && a[t].itemizedCharges.all ? a[t].itemizedCharges = {
room:!0,
breakfast:!0,
taxes:!0,
parking:!0,
internet:!0,
all:!0
} :"all" !== i || a[t].itemizedCharges.all || (a[t].itemizedCharges = {
room:!0,
breakfast:!1,
taxes:!1,
parking:!1,
internet:!1,
all:!1
}), a[t].itemizedCharges.room && a[t].itemizedCharges.breakfast && a[t].itemizedCharges.taxes && a[t].itemizedCharges.internet && a[t].itemizedCharges.parking ? a[t].itemizedCharges.all = !0 :a[t].itemizedCharges.all = !1, n.dispatch({
type:"ITEMIZED_CHARGES_CLICK",
payload:{
cards:a
}
}), _r_();
}
function _(e) {
_i_("3bb:56417e1b");
var t = +e.target.dataset.index - 1, i = M().cards, a = i[t].sharedWithEmail.toLowerCase().trim();
if (i[t].hasInvalidSharedWithEmail) return _r_();
a && -1 === i[t].sharedWith.indexOf(a) && i[t].sharedWith.push(a), i[t].isCompanyShared || i[t].sharedWith.length ? i[t].isInvalid = !1 :i[t].isInvalid = !0, i[t].sharedWithEmail = "", n.dispatch({
type:"SHARED_EMAIL_ADD",
payload:{
cards:i
}
}), _r_();
}
function o(e) {
_i_("3bb:9240f10f"), 13 === e.keyCode && _(e);
var t = +e.target.dataset.index - 1, i = e.target.value, a = M().cards, r = /\S+@\S+\.\S+/;
a[t].sharedWithEmail = i, a[t].hasInvalidSharedWithEmail = !r.test(i.toLowerCase()), n.dispatch({
type:"SHARED_WITH_EMAIL_CHANGE",
payload:{
cards:a
}
}), _r_();
}
function s(e) {
_i_("3bb:6106fe9a");
var t = +$(e.target).parents("[data-index]").data().index - 1, i = +$(e.target).parents("[data-email-index]").data().emailIndex - 1, a = M().cards;
a[t].sharedWith.splice(i, 1), a[t].isCompanyShared || a[t].sharedWith.length ? a[t].isInvalid = !1 :a[t].isInvalid = !0, n.dispatch({
type:"REMOVE_SHARED_CLICK",
payload:{
cards:a
}
}), _r_();
}
function l(e) {
_i_("3bb:48b3fb3b");
var t = +e.target.dataset.index - 1, i = e.target.value, a = M().cards;
a[t].name = i, a[t].hasInvalidName = !i, n.dispatch({
type:"NAME_CHANGE",
payload:{
cards:a
}
}), _r_();
}
function c(e) {
_i_("3bb:4c4d1f12");
var t = +e.target.dataset.index - 1, i = M().cards;
i[t].isOpen = !0, n.dispatch({
type:"EDIT_CLICK",
payload:{
cards:i
}
}), _r_();
}
function d(e) {
_i_("3bb:2b79b9ac");
var t = +e.target.dataset.index - 1, i = M().cards;
i[t] = b(i[t]), i[t].isOpen = !1, n.dispatch({
type:"CANCEL_CLICK",
payload:{
cards:i
}
}), _r_();
}
function b(e) {
return _i_("3bb:2e5fa2ac"), e.sharedWith = e.sharedWithOld.slice(), e.isCompanyShared = e.isCompanySharedOld, e.name = e.nameOld, e.itemizedCharges = e.itemizedChargesOld, e.hasInvalidName = !1, _r_(e);
}
function p(e) {
return _i_("3bb:a860d3fd"), e.sharedWithOld = e.sharedWith.slice(), e.isCompanySharedOld = e.isCompanyShared, e.nameOld = e.name, e.itemizedChargesOld = e.itemizedCharges, e.hasInvalidName = !1, _r_(e);
}
function u(e) {
_i_("3bb:4db7b3d6"), e.preventDefault();
var t = +e.target.dataset.index - 1, i = M().cards;
if (i[t].hasInvalidName || i[t].isInvalid) return _r_();
f(t, i), _r_();
}
function h(e) {
_i_("3bb:d3e66606");
var t = M().cards[e], i = {
bhc_csrf_token:B.env.b_csrf_token,
id:t.id,
name:t.name,
isCompanyShared:t.isCompanyShared,
sharedWithEmail:t.sharedWith,
companyName:B.env.companyAction.b_company_name,
lang:B.env.b_lang
};
return M().itemizedChargesEnabled && (i.perm_room = !0, i.perm_breakfast = t.itemizedCharges.breakfast, i.perm_taxes = t.itemizedCharges.taxes, i.perm_parking = t.itemizedCharges.parking, i.perm_internet = t.itemizedCharges.internet, i.perm_allow_all = t.itemizedCharges.all, i.isPayRestricted = !0, i.perm_other = !1), _r_(i);
}
function f(e, t) {
_i_("3bb:7b97190c"), $.ajax({
type:"POST",
url:"bbtool_company_airplus_cards",
traditional:!0,
data:h(e),
beforeSend:function() {
_i_("3bb:82b320c5"), t[e].isOpen = !1, t[e].isLoading = !0, t[e].loadingStatus = "pending", n.dispatch({
type:"BEFORE_SEND_CARD",
payload:{
cards:t
}
}), _r_();
},
success:function(i) {
_i_("3bb:fa60b762"), "ok" === i.status ? (t[e] = p(t[e]), t[e].isOpen = !1, t[e].isLoading = !0, t[e].loadingStatus = "success", n.dispatch({
type:"AFTER_SEND_CARD_SUCCESS",
payload:{
cards:t
}
})) :(t[e] = b(t[e]), t[e].isOpen = !0, t[e].isLoading = !0, t[e].loadingStatus = "error", n.dispatch({
type:"AFTER_SEND_CARD_ERROR",
payload:{
cards:t
}
})), _r_();
},
error:function() {
_i_("3bb:eab7a52f"), t[e] = b(t[e]), t[e].isOpen = !0, t[e].isLoading = !0, t[e].loadingStatus = "error", n.dispatch({
type:"AFTER_SEND_CARD_ERROR",
payload:{
cards:t
}
}), _r_();
},
complete:function() {
_i_("3bb:fc08ddcd"), t[e].isLoading = !1, t[e].loadingStatus = "none", setTimeout(function() {
_i_("3bb:333a5ddc"), n.dispatch({
type:"AFTER_SEND_CARD",
payload:{
cards:t
}
}), _r_();
}, 500), _r_();
}
}), _r_();
}
function m(e) {
_i_("3bb:9a29e5ba");
var t = +e.target.dataset.index - 1, i = e.target.value, a = M().cards;
a[t].isCompanyShared = "all" === i, a[t].isCompanyShared || a[t].sharedWith.length ? a[t].isInvalid = !1 :a[t].isInvalid = !0, n.dispatch({
type:"SHARED_WITH_CLICK",
payload:{
cards:a
}
}), _r_();
}
function M() {
return _i_("3bb:96c9797f2"), _r_(n.getState());
}
_r_();
}), B.define("component/business/payments/company-card/company-card-bs3/store", function(e, t, i) {
_i_("3bb:e26d0f75");
var n = e("reducer-store"), a = {
cards:o(B.env.b_user_vcc_details || []),
dbiProps:_(B.env.dbiProps || []),
isDbiAreaVisible:r(B.env.dbiProps || [])
};
function r(e) {
_i_("3bb:2f6d68b5");
var t, i;
for (t = 0, i = e.length; i > t; ++t) if (e[t].isDisplayed) return _r_(!0);
return _r_(!1);
}
function _(e) {
return _i_("3bb:e6b82bbf"), _r_(e.map(function(e) {
return _i_("3bb:ce4380e2"), _r_({
code:e.code,
value:"",
inputName:"dbi_" + e.code.toLowerCase(),
isDisplayed:!!e.isDisplayed,
isRequired:!!e.isRequired,
isValid:!!e.acceptedValues.length,
isDirty:!1,
hasRequiredError:!1,
hasLengthError:!1,
isSelect:!!e.acceptedValues.length,
acceptedValues:e.acceptedValues
});
}));
}
function o(e) {
return _i_("3bb:53541b72"), _r_(e.map(function(e, t) {
return _i_("3bb:5bc194d4"), _r_({
id:"uatp" + e.b_cc_uatp_id,
type:e.b_cc_type,
name:e.b_cc_name,
expiry:e.b_cc_expire_month + "/" + e.b_cc_expire_year,
isSelected:!t
});
}));
}
i.exports = new n(function(e, t) {
switch (_i_("3bb:e37c4294"), t.type) {
case "CARD_CLICK":
return _r_(Object.assign({}, e, {
cards:t.payload.cards
}));

case "VALIDATE_FORM":
return _r_(Object.assign({}, e, {
dbiProps:t.payload.dbiProps
}));

default:
return _r_(e);
}
_r_();
}, a), _r_();
}), booking.jstmpl("company_card_bs3", function() {
_i_("3bb:78edd84c");
var e, t = [ "\n    ", '\n<div id="business-bookers-company-card-bs3"\n    data-component="business/payments/company-cards/company-card-bs3/company-card-bs3">\n    <h3 class="company-card-bs3-header">\n        ', "/private/bb_bp_company_card/name", '\n    </h3>\n    <table class="company-card-content-table">\n        <tr class="company-card-content-table-header-row">\n            <th class="company-card-content-table-header-cell">\n                ', "/private/bb_bp_company_card_card_type/name", '\n            </th>\n            <th class="company-card-content-table-header-cell">\n                ', "/private/bb_bp_company_card_card_name/name", "/private/bb_bp_company_card_expiry_date/name", "\n\n            </th>\n        </tr>\n        ", '\n            <tr class="company-card-content-table-row">\n                <td class="company-card-content-table-cell">\n                    <input type="radio"\n                        class="company-select-cc"\n                        data-index="', '"\n                        name="cc_card_id"\n                        value="', '"\n                        ', "checked", ">\n                    \n                    ", '\n                </td>\n                <td class="company-card-content-table-cell">\n                    ', "\n                </td>\n            </tr>\n        ", "\n    </table>\n\n    ", '\n        <h3 class="company-card-bs3-header company-card-bs3-sub-header">\n            ', "/private/bb_bp_company_card_statement_fields/name", '\n        </h3>\n        <div class="company-card-bs3-bdi-props">\n            ', "\n                ", '\n                    <div class="bp_form__field">\n                        <label for="', '"\n                            class="bp_form__field__label">\n                            ', "\n                                    ", "/private/bbp_cc_project_fields_dbiae/name", "\n                                ", "/private/bbp_cc_project_fields_dbiak/name", "/private/bbp_cc_project_fields_dbiau/name", "/private/bbp_cc_project_fields_dbids/name", "/private/bbp_cc_project_fields_dbiik/name", "/private/bbp_cc_project_fields_dbipk/name", "/private/bbp_cc_project_fields_dbipr/name", "/private/bbp_cc_project_fields_dbiks/name", "\n                            ", '\n                                <abbr class="mandatory-asterisk" title="Required" aria-hidden="true"> *</abbr>\n                            ', "\n                        </label>\n                        ", '\n                            <input type="text"\n                                name="', '"\n                                id="', '"\n                                data-index="', '"\n                                class="bp_input_text\n                                    bp_form__field__input\n                                    company-card-bs3-input\n                                    ', "\n                                        company-card-bs3-input-invalid\n                                    ", '"\n                                placeholder="', "/private/bb_bp_company_card_enter_value/name", '"\n                                value="', '"\n                                size="35"\n                                ', "\n                                    required\n                                ", ">\n                        ", '\n                            <select name="', '"\n                                class="fixed_width bp_input_select\n                                    bp_form__field__input company-card-bs3-select\n                                    ', '"\n                                ', '>\n                                \n                                <option value="">\n                                    ', "/private/bb_bp_company_card_select_value/name", "\n                                </option>\n                                ", '\n                                    <option value="', '"\n                                        ', "\n                                            selected\n                                        ", ">\n                                        ", "\n                                    </option>\n                                ", "\n                            </select>\n                        ", "\n                        \n                        \n                        \n                        ", '\n                            <span class="company-card-bs3-inline-error ">\n                                ', "/private/bb_bp_company_card_required_field/name", "\n                            </span>\n                        ", "/private/bbp_bp_company_card_entry_error/name", "\n                    </div>\n                ", "\n            ", "\n        </div>\n    ", '\n</div>\n\n\n\n\n<div class="bs3-auth-form-banner-spacer"></div>\n<div class="bs3-auth-form-banner">\n    <div class="bs3-auth-form-banner-header">\n        ', "iconset/bell_normal", "medium", "\n        ", "/private/bb_airplus_payment_module_header/name", '\n    </div>\n    <div class="bs3-auth-form-banner-body">\n        ', "/private/bb_airplus_payment_module_body/name", "\n    </div>\n</div>\n\n\n\n", '\n    <input type="hidden" value="', '" name="full_cost"/>\n', "\n", '" name="full_cost_plain"/>\n' ], i = [ "cards", "dbiProps", "isDbiAreaVisible", "b_u_total_cost_with_addons_without_symbol", "b_u_total_cost_with_addons_plain" ];
return _r_(function(n) {
_i_("3bb:5aad60fd");
var a = "", r = this.fn;
function _(a) {
_i_("3bb:d5453eea"), a += [ "", t[1], r.ME(t[2], r.MB, r.MN, null), t[3], r.ME(t[4], r.MB, r.MN, null), t[5], r.ME(t[6], r.MB, r.MN, null), t[5], r.ME(t[7], r.MB, r.MN, null), t[8] ].join("");
var _ = r.MC(i[0]) || [];
n.unshift({
card:null
});
for (var o, s = 1, l = _.length; l >= s; s++) n[0].card = o = _[s - 1], a += [ t[9], s, t[10], o.id, t[11] ].join(""), r.MJ(o.isSelected) && (a += t[12]), a += [ t[13], o.type, t[14], o.name, t[14], o.expiry, t[15] ].join("");
if (n.shift(), a += t[16], r.MJ(r.MB(i[2]))) {
a += [ t[17], r.ME(t[18], r.MB, r.MN, null), t[19] ].join("");
var _ = r.MC(i[1]) || [];
n.unshift({
prop:null
});
for (var c, s = 1, l = _.length; l >= s; s++) {
if (n[0].prop = c = _[s - 1], a += t[20], r.MJ(c.isDisplayed)) {
a += [ t[21], c.inputName, t[22] ].join("");
var d = c.code;
if (r.MJ(d + "" == "AE") ? a += [ t[23], r.ME(t[24], r.MB, r.MN, null), t[25] ].join("") :r.MJ(d + "" == "AK") ? a += [ t[23], r.ME(t[26], r.MB, r.MN, null), t[25] ].join("") :r.MJ(d + "" == "AU") ? a += [ t[23], r.ME(t[27], r.MB, r.MN, null), t[25] ].join("") :r.MJ(d + "" == "DS") ? a += [ t[23], r.ME(t[28], r.MB, r.MN, null), t[25] ].join("") :r.MJ(d + "" == "IK") ? a += [ t[23], r.ME(t[29], r.MB, r.MN, null), t[25] ].join("") :r.MJ(d + "" == "PK") ? a += [ t[23], r.ME(t[30], r.MB, r.MN, null), t[25] ].join("") :r.MJ(d + "" == "PR") ? a += [ t[23], r.ME(t[31], r.MB, r.MN, null), t[25] ].join("") :r.MJ(d + "" == "KS") && (a += [ t[23], r.ME(t[32], r.MB, r.MN, null), t[33] ].join("")), a += t[33], r.MJ(c.isRequired) && (a += t[34]), a += t[35], r.MK(c.isSelect)) a += [ t[36], c.inputName, t[37], c.inputName, t[38], s, t[39] ].join(""), r.MK(c.isValid) && r.MJ(c.isDirty) && (a += t[40]), a += [ t[41], r.ME(t[42], r.MB, r.MN, null), t[43], c.value, t[44] ].join(""), r.MJ(c.isRequired) && (a += t[45]), a += t[46]; else {
a += [ t[47], c.inputName, t[38], s, t[48] ].join(""), r.MK(c.isValid) && r.MJ(c.isDirty) && (a += t[40]), a += [ t[37], c.inputName, t[49] ].join(""), r.MJ(c.isRequired) && (a += t[45]), a += [ t[50], r.ME(t[51], r.MB, r.MN, null), t[52] ].join("");
var b = s, p = _, u = l, h = f, _ = c.acceptedValues || [];
n.unshift({
option:null
});
for (var f, s = 1, l = _.length; l >= s; s++) n[0].option = f = _[s - 1], a += [ t[53], f, t[54] ].join(""), r.MJ(c.value == f) && (a += t[55]), a += [ t[56], f, t[57] ].join("");
n.shift(), s = b, _ = p, l = u, f = h, a += t[58];
}
a += t[59], r.MK(c.isValid) && r.MJ(c.isDirty) && r.MJ(c.hasRequiredError) && (a += [ t[60], r.ME(t[61], r.MB, r.MN, null), t[62] ].join("")), a += t[59], r.MK(c.isValid) && r.MJ(c.isDirty) && r.MJ(c.hasLengthError) && (a += [ t[60], r.ME(t[63], r.MB, r.MN, null), t[62] ].join("")), a += t[64];
}
a += t[65];
}
n.shift(), a += t[66];
}
return a += [ t[67], (n.unshift({
name:t[68],
size:t[69]
}), e = r.HELPER("icon", n[0]), n.shift(), e), t[70], r.ME(t[71], r.MB, r.MN, null), t[72], r.ME(t[73], r.MB, r.MN, null), t[74] ].join(""), r.MD(i[3]) && (a += [ t[75], r.MC(i[3]), t[76] ].join("")), a += t[77], r.MD(i[4]) && (a += [ t[75], r.MC(i[4]), t[78] ].join("")), a += [ t[77], "", t[77] ].join(""), _r_(a);
}
return a += t[0], a = _(a), a += t[77], _r_(a);
});
}()), B.define("component/business/payments/company-cards/company-card-bs3/company-card-bs3", function(e, t, i) {
_i_("3bb:a6719fe5");
var n = e("component/business/payments/company-card/company-card-bs3/store");
i.exports = e("component/reactive").extend({
template:"company_card_bs3",
initialize:a,
getState:b
});
function a() {
_i_("3bb:aa30917b"), n.subscribe(this.render.bind(this)), this.events({
"click .company-select-cc":d,
"keyup .company-card-bs3-input":s,
"change select.company-card-bs3-select":s
}), this.render(), _(), l(!1), r(), _r_();
}
function r() {
_i_("3bb:ac8a5d99");
var e = $(".bs3-auth-form-banner").height();
$(".bs3-auth-form-banner-spacer").height(e - 15), _r_();
}
function _() {
_i_("3bb:5cfbe5d2");
var e = document.getElementById("bookForm"), t = $('input[name="payment_method"]');
t.on("change", l.bind(this, !0)), e.addEventListener("submit", o), $(e).on("submit-form", o), _r_();
}
function o(e) {
_i_("3bb:41f46955");
var t, i = $(e.target), n = i.find('input[name="cc_card_id"]:checked').val(), a = i.find('input[name="payment_method"]:checked').val();
"company" === a && -1 !== n.indexOf("uatp") && (t = n.replace("uatp", ""), i.append('<input hidden type="radio" name="cc_uatp_id" checked="checked" value="' + t + '">'), i.append('<input hidden type="radio" name="cc_card_id" checked="checked" value="">')), _r_();
}
function s(e) {
_i_("3bb:7d3e827a");
var t = +e.target.dataset.index - 1;
l(!1, t), _r_();
}
function l(e, t) {
_i_("3bb:f2e7befa");
var i = $(".bp-overview-buttons-submit"), n = $(".bp-overview-buttons-open-overview"), a = $('input[name="payment_method"]:checked').val();
if ("company" !== a) return i.removeClass("disabled"), n.removeClass("disabled"), _r_();
c(e, t) ? (i.removeClass("disabled"), n.removeClass("disabled")) :(i.addClass("disabled"), n.addClass("disabled")), _r_();
}
function c(e, t) {
_i_("3bb:76397f04");
var i, a, r, _ = !0, o = b().dbiProps, s = 17;
for (i = 0, a = o.length; a > i; ++i) r = o[i], r.value = $("#" + r.inputName).val(), r.hasLengthError = !1, r.hasRequiredError = !1, r.isValid = !0, r.isRequired && r.isDisplayed && !r.value && (r.hasRequiredError = !0, r.isValid = !1, _ = !1), r.isDisplayed && r.value.length > s && (r.hasLengthError = !0, r.isValid = !1, _ = !1), (e || t === i) && (r.isDirty = !0);
return n.dispatch({
type:"VALIDATE_FORM",
payload:{
dbiProps:o
}
}), _r_(_);
}
function d(e) {
_i_("3bb:84500299");
var t = +e.target.dataset.index - 1, i = b().cards;
i = i.map(function(e, i) {
return _i_("3bb:53385b7d"), _r_({
id:e.id,
type:e.type,
name:e.name,
expiry:e.expiry,
isSelected:i === t
});
}), n.dispatch({
type:"CARD_CLICK",
payload:{
cards:i
}
}), _r_();
}
function b() {
return _i_("3bb:96c9797f3"), _r_(n.getState());
}
_r_();
}), B.define("component/business/payments/auth-form/store", function(e, t, i) {
_i_("3bb:635eaa75");
var n = e("reducer-store"), a = {
fe_print_url_eng:B.env.fe_print_url_eng,
fe_print_url_guest:B.env.fe_print_url_guest,
fe_print_url_hotel:B.env.fe_print_url_hotel,
b_booking_number_plain:B.env.b_booking_number_plain,
fe_bbt_ga_category:B.env.fe_bbt_ga_category,
isLoading:!1,
fe_language_trans_en:B.env.fe_language_trans_en,
fe_language_trans_guest:B.env.fe_language_trans_guest,
fe_language_trans_hotel:B.env.fe_language_trans_hotel
};
i.exports = new n(function(e, t) {
switch (_i_("3bb:e292d316"), t.type) {
case "START_LOADING":
return _r_(Object.assign({}, e, {
isLoading:t.payload.isLoading
}));

case "STOP_LOADING":
return _r_(Object.assign({}, e, {
isLoading:t.payload.isLoading
}));

default:
return _r_(e);
}
_r_();
}, a), _r_();
}), booking.jstmpl("auth_form_print", function() {
_i_("3bb:6a36a39f");
var e, t = [ "\n    ", '<div data-component="business/payments/auth-form/auth-form-print">\n    <div class="bui-dropdown" data-bui-component="Dropdown">\n        <label role="button"\n            data-bui-ref="dropdown-button"\n            for="dropdown_primary"\n            ', '\n                class="bui-dropdown__button bui-button bui-button--primary btn-print-auth-form appacq_print_lightbox is-loading"\n            ', '\n                class="bui-dropdown__button bui-button bui-button--primary btn-print-auth-form appacq_print_lightbox"\n            ', '\n            aria-haspopup="true"\n            aria-controls="dropdown_primary_menu"\n            type="button">\n\n            <span class="bui-button__text">\n                ', "/private/bb_payments_conf_airplus_request_auth/name", "\n            </span>\n            ", "\n                ", "bui-dropdown__arrows", "iconset/dropdown", "presentation", "16", "\n            ", '\n            <i class="mb-loader mb-loader--print"></i>\n        </label>\n        \n        \n        \n        <div class="bui-dropdown__menu bui_depth_2" id="dropdown_primary_menu" role="menu" data-bui-ref="dropdown-menu">\n            <ul class="bui-dropdown__content">\n                <li>\n                    <a href="#" class="bui-dropdown__item bui-dropdown__item--icon auth-form-lang-select" data-bui-ref="dropdown-item" role="button" tabindex="0" role="button"\n                        data-component="myreservations-print"\n                        data-print-url="', '"\n                        data-ga-track="click|', "|AuthForm|Click(EN): ", '">\n\n                        <span class="bui-dropdown__item-content">\n                            <span aria-role="presentation">\n                                ', "bui-dropdown__icon", "iconset/printer", "\n                            </span>\n                            ", "/private/pb_confirmation_lang_versions/name", '\n                        </span>\n                    </a>\n                </li>\n                <li>\n                    <a href="#" class="bui-dropdown__item bui-dropdown__item--icon auth-form-lang-select" data-bui-ref="dropdown-item" role="button" tabindex="0" role="button"\n                        data-component="myreservations-print"\n                        data-print-url="', "|AuthForm|Click(G): ", "|AuthForm|Click(H): ", "\n                        </span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n", "\n" ], i = [ "isLoading", "fe_print_url_eng", "fe_bbt_ga_category", "b_booking_number_plain", "fe_language_trans_en", "fe_print_url_guest", "fe_language_trans_guest", "fe_print_url_hotel", "fe_language_trans_hotel" ];
return _r_(function(n) {
_i_("3bb:12bb240f");
var a = "", r = this.fn;
function _(a) {
return _i_("3bb:6f07c0e4"), a += t[1], a += r.MJ(r.MB(i[0])) ? t[2] :t[3], a += [ t[4], r.ME(t[5], r.MB, r.MN, null), t[6] ].join(""), r.MK(r.MB(i[0])) && (a += [ t[7], (n.unshift({
"class":t[8],
name:t[9],
role:t[10],
width:t[11]
}), e = r.HELPER("icon", n[0]), n.shift(), e), t[12] ].join("")), a += [ t[13], r.F.entities(r.MC(i[1])), t[14], r.MC(i[2]), t[15], r.MC(i[3]), t[16], (n.unshift({
"class":t[17],
name:t[18]
}), e = r.HELPER("icon", n[0]), n.shift(), e), t[19], (n.unshift({
version_language:r.MB(i[4])
}), e = r.ME(t[20], r.MB, r.MN, null), n.shift(), e), t[21], r.F.entities(r.MC(i[5])), t[14], r.MC(i[2]), t[22], r.MC(i[3]), t[16], (n.unshift({
"class":t[17],
name:t[18]
}), e = r.HELPER("icon", n[0]), n.shift(), e), t[19], (n.unshift({
version_language:r.MB(i[6])
}), e = r.ME(t[20], r.MB, r.MN, null), n.shift(), e), t[21], r.F.entities(r.MC(i[7])), t[14], r.MC(i[2]), t[23], r.MC(i[3]), t[16], (n.unshift({
"class":t[17],
name:t[18]
}), e = r.HELPER("icon", n[0]), n.shift(), e), t[19], (n.unshift({
version_language:r.MB(i[8])
}), e = r.ME(t[20], r.MB, r.MN, null), n.shift(), e), t[24] ].join(""), _r_(a);
}
return a += t[0], a = _(a), a += t[25], _r_(a);
});
}()), B.define("component/business/payments/auth-form/auth-form-print", function(e, t, i) {
_i_("3bb:4d1c29e9");
var n = e("component/business/payments/auth-form/store");
i.exports = e("component/reactive").extend({
template:"auth_form_print",
initialize:a,
getState:r
});
function a() {
_i_("3bb:95b5c25b"), n.subscribe(this.render.bind(this)), this.events({
"click .auth-form-lang-select":_
}), this.render(), _r_();
}
function r() {
return _i_("3bb:96c9797f4"), _r_(n.getState());
}
function _(e) {
_i_("3bb:93f018a5");
var t = $(e.target);
n.dispatch({
type:"START_LOADING",
payload:{
isLoading:!0
}
});
var i = setInterval(function() {
_i_("3bb:76eb0ba6"), t.closest("a").hasClass("is-loading") || (n.dispatch({
type:"STOP_LOADING",
payload:{
isLoading:!1
}
}), clearInterval(i)), _r_();
}, 100);
_r_();
}
_r_();
}), B.define("component/business/payments/company-card/onboarding/store", function(e, t, i) {
_i_("3bb:0da395b4");
var n = e("reducer-store"), a = {
page:"card-details",
isAnimated:!0,
isLegalTermOneClicked:!1,
isLegalTermTwoClicked:!1,
isLegalTermThreeClicked:!1,
itemizedChargesEnabled:!0,
card:{
name:"",
expiry:"",
isLoading:!1,
loadingStatus:"none",
isCompanyShared:!0,
hasInvalidName:!1,
isInvalid:!1,
hasInvalidSharedWithEmail:!1,
sharedWithEmail:"",
sharedWith:[],
hasPaymentRestrictions:!1,
itemizedCharges:{
room:!0,
breakfast:!1,
taxes:!1,
parking:!1,
internet:!1,
all:!1,
other:!1,
otherText:""
}
}
};
i.exports = new n(function(e, t) {
switch (_i_("3bb:2233078b"), t.type) {
case "CHANGE_PAGE":
return _r_(Object.assign({}, e, {
page:t.payload.page,
isAnimated:t.payload.isAnimated
}));

case "ANIMATE":
return _r_(Object.assign({}, e, {
isAnimated:t.payload.isAnimated
}));

case "UPDATE_CARD":
return _r_(Object.assign({}, e, {
card:t.payload.card
}));

case "LEGAL_CHECKBOX_CLICK":
return _r_(Object.assign({}, e, {
isLegalTermOneClicked:t.payload.isLegalTermOneClicked,
isLegalTermTwoClicked:t.payload.isLegalTermTwoClicked,
isLegalTermThreeClicked:t.payload.isLegalTermThreeClicked
}));

default:
return _r_(e);
}
_r_();
}, a), _r_();
}), booking.jstmpl("company_settings_company_cards_onboarding", function() {
_i_("3bb:8ecd4ca6");
var e, t = [ "\n    ", '<div id="company-settings-airplus-onboarding"\n    data-component="business/payments/company-card/onboarding/onboarding"\n    class="w-section company-section--permissions w-box">\n\n    ', '\n        <div class="w-section-head">\n            <div class="w-section-head__title">\n                ', "/private/bbp_shared_card_setup_header/name", '\n            </div>\n            <div class="w-section-head__subtitle">\n                ', "/private/bbp_shared_card_setup_subheader/name", '\n            </div>\n        </div>\n        <div class="w-section-content ', "animate", '">\n            <p class="w-section-content__text">\n                ', "/private/bbp_shared_card_setup_body/name", '\n            </p>\n            <a class="bui-link bui-link--primary" href="#company-settings-airplus-onboarding" title="AirPLus" on:click="onAirPlusProviderClick">\n                ', "/private/bbp_shared_card_setup_airplus/name", '\n            </a>\n            <hr class="divider"/>\n            <a class="bui-link bui-link--secondary" href="#company-settings-airplus-onboarding" title="Other provider">\n                ', "/private/bbp_shared_card_setup_other/name", "\n            </a>\n        </div>\n    ", "\n\n    ", "/private/bbp_airplus_requirements_header/name", "/private/bbp_airplus_requirements_subheader/name", '">\n            <p class="w-section-content__text header">\n                ', "/private/bbp_airplus_setup_required/name", '\n            </p>\n            <ul class="bui-list bui-list--unordered">\n               <li class="bui-list__item">\n                   ', "/private/bbp_airplus_setup_required_1/name", "</strong>", "</a>", "<strong>", "<a target='_blank' href='https://virtualpayment.airplus.com'>", '\n               </li>\n               <li class="bui-list__item">\n                   ', "/private/bbp_airplus_setup_required_2/name", "/private/bbp_airplus_setup_required_3/name", '\n               </li>\n            </ul>\n            <button class="bui-button bui-button--primary" type="button" on:click="onStartConfigurationClick">\n                <span class="bui-button__text">\n                    ', "/private/bbp_airplus_setup_required_next/name", '\n                </span>\n            </button>\n            <a class="bui-link bui-link--primary cancel-link" title="AirPLus" on:click="onOverivewCancelClick">\n               ', "/private/bbp_airplus_setup_required_cancel/name", "/private/bbp_airplus_setup_header/name", "/private/bbp_airplus_setup_subheader/name", '">\n            <ol class="bui-nav-progress bui-nav-progress--horizontal">\n                <li class="bui-nav-progress__item bui-nav-progress__item--active">\n                    <span class="bui-nav-progress__indicator">\n                        1\n                    </span>\n                    <strong class="bui-nav-progress__title">\n                        ', "/private/bbp_airplus_setup_breadcrumb_legal/name", '\n                    </strong>\n                </li>\n                <li role="presentation" class="bui-nav-progress__divider"></li>\n                <li class="bui-nav-progress__item bui-nav-progress__item--disabled">\n                    <span class="bui-nav-progress__indicator">\n                        2\n                    </span>\n                    <strong class="bui-nav-progress__title">\n                        ', "/private/bbp_airplus_setup_breadcrumb_card/name", '\n                    </strong>\n                </li>\n                <li role="presentation" class="bui-nav-progress__divider"></li>\n                <li class="bui-nav-progress__item bui-nav-progress__item--disabled">\n                    <span class="bui-nav-progress__indicator">\n                        3\n                    </span>\n                    <strong class="bui-nav-progress__title">\n                    ', "/private/bbp_airplus_setup_breadcrumb_dbi/name", '\n                    </strong>\n                </li>\n            </ol>\n            <p class="w-section-content__text header">\n                ', "/private/bbp_airplus_setup_step_1_legal_header/name", '\n            </p>\n            <p class="w-section-content__text">\n                ', "/private/bbp_airplus_setup_step_1_body/name", "<a target='_blank' href='https://google.com'>", '\n            </p>\n            <label class="bui-checkbox legal-checkbox">\n                <input class="bui-checkbox__input"\n                    type="checkbox"\n                    on:click="onLegalCheckboxOneClick"\n                    ', 'checked="checked"', '/>\n                <span class="bui-checkbox__label">\n                    ', "/private/bbp_airplus_setup_step_1_bullet_1/name", '\n                </span>\n            </label>\n            <label class="bui-checkbox legal-checkbox">\n                <input class="bui-checkbox__input"\n                    type="checkbox"\n                    on:click="onLegalCheckboxTwoClick"\n                    ', "/private/bbp_airplus_setup_step_1_bullet_2/name", '\n                </span>\n            </label>\n            <label class="bui-checkbox legal-checkbox">\n                <input class="bui-checkbox__input"\n                    type="checkbox"\n                    on:click="onLegalCheckboxThreeClick"\n                    ', "/private/bbp_airplus_setup_step_1_bullet_3/name", '\n                </span>\n            </label>\n            <button class="bui-button bui-button--secondary" type="button" on:click="onLegalReqCancelClick">\n                <span class="bui-button__text">\n                    ', "/private/bbp_airplus_setup_step_1_cancel/name", '\n                </span>\n            </button>\n            <button class="bui-button bui-button--primary w-float-right"\n                type="button"\n                on:click="onLegalReqNextClick"\n                ', 'disabled="disabled"', '>\n                <span class="bui-button__text">\n                    ', "/private/bbp_airplus_setup_step_1_next/name", "\n                </span>\n            </button>\n        </div>\n    ", '">\n            <ol class="bui-nav-progress bui-nav-progress--horizontal">\n                <li class="bui-nav-progress__item bui-nav-progress__item--active">\n                    <span class="bui-nav-progress__indicator">\n                        <svg class="bui-nav-progress__icon" xmlns="http://www.w3.org/2000/svg" width="41" height="32" viewBox="0 0 41 32">\n                            <path class="bui-f-fill-white" d="M34.7 0l5.9 5.8L14.3 32 0 17.8 5.9 12l8.4 8.3L34.7 0z"/>\n                        </svg>\n                    </span>\n                    <strong class="bui-nav-progress__title">\n                        ', '\n                    </strong>\n                </li>\n                <li role="presentation" class="bui-nav-progress__divider"></li>\n                <li class="bui-nav-progress__item bui-nav-progress__item--active">\n                    <span class="bui-nav-progress__indicator">\n                        2\n                    </span>\n                    <strong class="bui-nav-progress__title">\n                        ', "/private/bbp_airplus_setup_step_2_card_header/name", "/private/bbp_airplus_setup_step_2_body/name", '\n            </p>\n            <div class="company-form-container">\n                <div class="row-fluid w-form-group">\n                    <div class="span12">\n                        <div class="w-form-field">\n                            <label class="w-form-label w-form-label--thin w-form-label--required">\n                                ', "/private/bbt_settings_card_permissions_name/name", '\n                                <span class="w-form-label__sup">\n                                    ✶\n                                </span>\n                            </label>\n                            <input type="text"\n                                class="airplus-card-name bootstrapped-input input-text input-block-level js-card-name ', "has-error", '"\n                                maxlength="255"\n                                placeholder="', "/private/bbt_settings_card_permissions_name_placeholder/name", '"\n                                autocomplete="off"\n                                on:keyup="onNameChange"\n                                value="', '">\n                        </div>\n                    </div>\n                </div>\n                ', '\n                    <div class="row-fluid w-form-group">\n                        <div class="span12">\n                            <div class="w-form-field">\n                                <label class="w-form-label w-form-label--thin w-form-label--required">\n                                    ', "/private/bb_payments_create_card_charges_intro/name", '\n                                    <span class="w-form-label__sup">\n                                        ✶\n                                    </span>\n                                </label>\n                            </div>\n                            <div class="row-fluid">\n                                <div class="span6">\n                                    <label class="bui-checkbox">\n                                        <input class="bui-checkbox__input" type="checkbox" checked="checked" disabled/>\n                                        <span class="bui-checkbox__label">\n                                            ', "/private/bb_payments_create_card_charges_room/name", '\n                                        </span>\n                                    </label>\n                                </div>\n                                <div class="span6">\n                                    <label class="bui-checkbox">\n                                        <input class="bui-checkbox__input js-itemized-charges-checkbox"\n                                            data-key="breakfast"\n                                            on:click="onItemizedChargesCheckboxClick"\n                                            ', '\n                                                checked="checked"\n                                            ', '\n                                            type="checkbox" />\n                                        <span class="bui-checkbox__label">\n                                            ', "/private/bb_payments_create_card_charges_bfast/name", '\n                                        </span>\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="row-fluid">\n                                <div class="span6">\n                                    <label class="bui-checkbox">\n                                        <input class="bui-checkbox__input js-itemized-charges-checkbox"\n                                            data-key="taxes"\n                                            on:click="onItemizedChargesCheckboxClick"\n                                            ', "/private/bb_payments_create_card_charges_taxes/name", '\n                                        </span>\n                                    </label>\n                                </div>\n                                <div class="span6">\n                                    <label class="bui-checkbox">\n                                        <input class="bui-checkbox__input js-itemized-charges-checkbox"\n                                            data-key="parking"\n                                            on:click="onItemizedChargesCheckboxClick"\n                                            ', "/private/bb_payments_create_card_charges_park/name", '\n                                        </span>\n                                    </label>\n                                </div>\n                            </div>\n                            <div class="row-fluid">\n                                <div class="span6">\n                                    <label class="bui-checkbox">\n                                        <input class="bui-checkbox__input js-itemized-charges-checkbox"\n                                            data-key="internet"\n                                            on:click="onItemizedChargesCheckboxClick"\n                                            ', "/private/bb_payments_create_card_charges_internet/name", '\n                                        </span>\n                                    </label>\n                                </div>\n                                <div class="span6">\n                                    <label class="bui-checkbox">\n                                        <input class="bui-checkbox__input js-itemized-charges-checkbox"\n                                            data-key="all"\n                                            on:click="onItemizedChargesCheckboxClick"\n                                            ', "/private/bb_payments_create_card_charges_all/name", "\n                                        </span>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                ", '\n                <div class="row-fluid w-form-group">\n                    <div class="span12">\n                        <label class="w-form-label w-form-label--thin w-form-label--required">\n                            ', "/private/bbt_settings_card_permissions_share/name", '\n                            <span class="w-form-label__sup">\n                                ✶\n                            </span>\n                        </label>\n                        <label class="airplus-shared-inline">\n                            <input type="radio"\n                                name="shared-with"\n                                value="all"\n                                class="w-spacer-right"\n                                on:click="onSharedWithClick"\n                                data-index="', '"\n                                ', ">\n                            ", "/private/bbt_settings_card_permissions_share_company/name", '\n                        </label>\n                        <label class="w-spacer-left airplus-shared-inline">\n                            <input type="radio"\n                                name="shared-with"\n                                value="emails"\n                                class="w-spacer-right"\n                                on:click="onSharedWithClick"\n                                data-index="', "/private/bbt_settings_card_permissions_share_selected/name", "\n                        </label>\n                    </div>\n                </div>\n                ", '\n                    <div class="row-fluid">\n                        <div class="span6">\n                            <input type="text"\n                                class="js-shared-with-email bootstrapped-input input-text input-block-level ', "/private/bbt_settings_card_permissions_email_placeholder/name", '"\n                                autocomplete="off"\n                                on:keyup="onSharedWithEmailChange"\n                                value="', '">\n                        </div>\n                        <div class="span4">\n                            <a href="javascript:void(0)"\n                                on:click="onAddSharedEmailClick"\n                                class="js-add-shared-email ', "disabled", '">\n                                ', "/private/bbt_settings_card_permissions_add_cta/name", "\n                            </a>\n                        </div>\n                    </div>\n                    ", '\n                        <div class="row-fluid w-form-group">\n                            <div class="span6" data-index="', '\n                                    <div class="w-spacer-right" data-email-index="', '">\n                                        ', "airplus-remove-shared", "iconset/trash", "onRemoveSharedClick", "small", "\n                                        ", "\n                                    </div>\n                                ", "\n                            </div>\n                        </div>\n                    ", "\n                ", '\n            </div>\n            <button class="bui-button bui-button--secondary" type="button" on:click="onCardDetailsBackClick">\n                <span class="bui-button__text">\n                    ', "/private/bbp_airplus_setup_step_2_back/name", '\n                </span>\n            </button>\n            <button class="bui-button bui-button--primary w-float-right" type="button" on:click="onCardDetailsNextClick">\n                <span class="bui-button__text">\n                    ', "/private/bbp_airplus_setup_step_2_next/name", '\n                    </strong>\n                </li>\n                <li role="presentation" class="bui-nav-progress__divider"></li>\n                <li class="bui-nav-progress__item bui-nav-progress__iteme">\n                    <span class="bui-nav-progress__indicator">\n                        <svg class="bui-nav-progress__icon" xmlns="http://www.w3.org/2000/svg" width="41" height="32" viewBox="0 0 41 32">\n                            <path class="bui-f-fill-white" d="M34.7 0l5.9 5.8L14.3 32 0 17.8 5.9 12l8.4 8.3L34.7 0z"/>\n                        </svg>\n                    </span>\n                    <strong class="bui-nav-progress__title">\n                        ', '\n                    </strong>\n                </li>\n                <li role="presentation" class="bui-nav-progress__divider"></li>\n                <li class="bui-nav-progress__item bui-nav-progress__item--active">\n                    <span class="bui-nav-progress__indicator">\n                        3\n                    </span>\n                    <strong class="bui-nav-progress__title">\n                    ', "/private/bbp_airplus_setup_step_3_dbi_header/name", "/private/bbp_airplus_setup_step_3_body/name", "\n            </p>\n            \n            \n            \n            ", '<div id="company-settings-company-cards"\n    data-component="business/payments/company-cards/company-settings/company-settings-company-cards"\n    class="w-section company-section--permissions w-box">\n\n    <div class="w-section-head">\n        <div class="w-section-head__title">\n            ', "/private/bb_company_card_header/name", '\n        </div>\n        <div class="w-section-head__subtitle">\n            ', "/private/bb_company_card_subheader/name", '\n        </div>\n    </div>\n\n    <div class="w-section-content w-section-content--paddingless">\n        <div class="w-table w-table--with-icons w-table--no-border-top">\n            <div class="row-fluid w-table__row">\n                <div class="span2 w-table__cell w-text-bold">\n                    ', "/private/bb_company_card_field_name/name", '\n                </div>\n                <div class="span2 w-table__cell w-text-bold w-text-center">\n                    ', "/private/bb_company_card_field_code/name", "/private/bb_company_card_displayed/name", '\n                </div>\n                <div class="span2 w-table__cell w-text-bold w-text-center ', "w-text-lh-14", '">\n                    ', "/private/bb_company_card_required/name", '\n                </div>\n                <div class="span4 w-table__cell w-text-bold ', "/private/bb_company_card_accepted_values_header/name", '\n                    <i class="bicon-questionmarkcircle company-settings-accepted-values-tooltip"\n                        data-component="tooltip"\n                        data-tooltip-text="', "/private/bb_company_card_accepted_values_tooltip/name", '">\n                    </i>\n                </div>\n            </div>\n\n            ', '\n                    <div class="row-fluid w-table__row company-airplus-fields">\n                        ', '\n                            <span class="company-airplus-fields-success">\n                                <i class="bicon-checkmark-circle"></i>\n                                ', "/private/bbt_settings_permissions_success/name", "\n                            </span>\n                        ", "\n                        ", '\n                            <span class="company-airplus-fields-error">\n                                <i class="bicon-close"></i>\n                                ', "/private/bbt_settings_permissions_error/name", '\n                            <span class="company-airplus-fields-pending">\n                                <div class="w-form-loading">\n                                    <span class="w-form-loading-content__inline">\n                                        ', "/private/bbt_settings_permissions_saving/name", "\n                                    </span>\n                                </div>\n                            </span>\n                        ", "\n                    </div>\n                ", '\n                    <div class="row-fluid w-table__row company-airplus-fields">\n                        <span class="company-airplus-fields-error">\n                            <i class="bicon-close"></i>\n                            \n                            ', "/private/bbp_company_card_settings_value_error/name", "\n                        </span>\n                    </div>\n                ", '\n                    <div class="row-fluid w-table__row">\n                        <div class="span2 w-table__cell">\n                            ', "\n                                    ", "/private/bbp_cc_project_fields_dbiae/name", "\n                                ", "/private/bbp_cc_project_fields_dbiak/name", "/private/bbp_cc_project_fields_dbiau/name", "/private/bbp_cc_project_fields_dbids/name", "/private/bbp_cc_project_fields_dbiik/name", "/private/bbp_cc_project_fields_dbipk/name", "/private/bbp_cc_project_fields_dbipr/name", "/private/bbp_cc_project_fields_dbiks/name", "\n                            ", '\n                        </div>\n                        <div class="span2 w-table__cell w-text-center">\n                            ', '\n                        </div>\n                        <div class="span2 w-table__cell w-text-center">\n                            <input type="checkbox"\n                                data-index="', '"\n                                class="w-input-centered w-input-middle js-is-displayed"\n                                ', '>\n                        </div>\n                        <div class="span2 w-table__cell w-text-center ', '">\n                            <input type="checkbox"\n                                data-index="', '"\n                                class="w-input-centered w-input-middle js-is-required"\n                                ', '>\n                        </div>\n                        <div class="span4 w-table__cell ', '">\n                            <input class="bootstrapped-input input-block-level input-text airplus-dbi-input js-airplus-dbi-input"\n                                data-index="', '"\n                                value="', '"\n                                placeholder="', "/private/bb_company_card_placeholder/name", ">\n                        </div>\n                    </div>\n                ", "\n            ", "\n        </div>\n    </div>\n</div>\n", '\n\n            <button class="bui-button bui-button--secondary" type="button" on:click="onDbiDetailsBackClick">\n                <span class="bui-button__text">\n                    ', "/private/bbp_airplus_setup_step_3_back/name", '\n                </span>\n            </button>\n            <button class="bui-button bui-button--primary w-float-right" type="button" on:click="onDbiDetailsNextClick">\n                <span class="bui-button__text">\n                    ', "/private/bbp_airplus_setup_step_3_next/name", "/private/bbp_airplus_setup_complete_header/name", "/private/bbp_airplus_setup_complete_body_1/name", "/private/bbp_airplus_setup_complete_body_2/name", "", '\n            </p>\n            <p class="w-section-content__text completed-last-paragraph">\n                ', "/private/bbp_airplus_setup_complete_body_3/name", '\n            </p>\n            <button class="bui-button bui-button--secondary" type="button" on:click="onCompleteBackClick">\n                <span class="bui-button__text">\n                    ', "/private/bbp_airplus_setup_complete_back/name", '\n                </span>\n            </button>\n            <button class="bui-button bui-button--primary w-float-right" type="button" on:click="onCompleteNextClick">\n                <span class="bui-button__text">\n                    ', "/private/bbp_airplus_setup_complete_finish/name", "\n                </span>\n            </button>\n\n        </div>\n    ", "\n</div>\n", "\n" ], i = [ "isAnimated", "page", "isLegalTermOneClicked", "isLegalTermTwoClicked", "isLegalTermThreeClicked", "card", "itemizedChargesEnabled", "b_lang", "dbiProps" ];
return _r_(function(n) {
_i_("3bb:52453a06");
var a = "", r = this.fn;
function _(a) {
if (_i_("3bb:477486e6"), a += t[1], r.MJ(r.MB(i[1]) + "" == "choose-provider") && (a += [ t[2], r.ME(t[3], r.MB, r.MN, null), t[4], r.ME(t[5], r.MB, r.MN, null), t[6] ].join(""), r.MJ(r.MB(i[0])) && (a += t[7]), a += [ t[8], r.ME(t[9], r.MB, r.MN, null), t[10], r.ME(t[11], r.MB, r.MN, null), t[12], r.ME(t[13], r.MB, r.MN, null), t[14] ].join("")), a += t[15], r.MJ(r.MB(i[1]) + "" == "airplus-overview") && (a += [ t[2], r.ME(t[16], r.MB, r.MN, null), t[4], r.ME(t[17], r.MB, r.MN, null), t[6] ].join(""), r.MJ(r.MB(i[0])) && (a += t[7]), a += [ t[18], r.ME(t[19], r.MB, r.MN, null), t[20], (n.unshift({
end_bold:t[22],
end_link:t[23],
start_bold:t[24],
start_link:t[25]
}), e = r.ME(t[21], r.MB, r.MN, null), n.shift(), e), t[26], (n.unshift({
end_bold:t[22],
start_bold:t[24]
}), e = r.ME(t[27], r.MB, r.MN, null), n.shift(), e), t[26], (n.unshift({
end_bold:t[22],
start_bold:t[24]
}), e = r.ME(t[28], r.MB, r.MN, null), n.shift(), e), t[29], r.ME(t[30], r.MB, r.MN, null), t[31], r.ME(t[32], r.MB, r.MN, null), t[14] ].join("")), a += t[15], r.MJ(r.MB(i[1]) + "" == "legal-requirements") && (a += [ t[2], r.ME(t[33], r.MB, r.MN, null), t[4], r.ME(t[34], r.MB, r.MN, null), t[6] ].join(""), r.MJ(r.MB(i[0])) && (a += t[7]), a += [ t[35], r.ME(t[36], r.MB, r.MN, null), t[37], r.ME(t[38], r.MB, r.MN, null), t[39], r.ME(t[40], r.MB, r.MN, null), t[41], r.ME(t[42], r.MB, r.MN, null), t[43], (n.unshift({
end_link:t[23],
start_link:t[45]
}), e = r.ME(t[44], r.MB, r.MN, null), n.shift(), e), t[46] ].join(""), r.MJ(r.MB(i[2])) && (a += t[47]), a += [ t[48], (n.unshift({
end_link:t[23],
start_link:t[45]
}), e = r.ME(t[49], r.MB, r.MN, null), n.shift(), e), t[50] ].join(""), r.MJ(r.MB(i[3])) && (a += t[47]), a += [ t[48], r.ME(t[51], r.MB, r.MN, null), t[52] ].join(""), r.MJ(r.MB(i[4])) && (a += t[47]), a += [ t[48], r.ME(t[53], r.MB, r.MN, null), t[54], r.ME(t[55], r.MB, r.MN, null), t[56] ].join(""), r.MK(r.MB(i[2]) && r.MB(i[3]) && r.MB(i[4])) && (a += t[57]), a += [ t[58], r.ME(t[59], r.MB, r.MN, null), t[60] ].join("")), a += t[15], r.MJ(r.MB(i[1]) + "" == "card-details")) {
if (a += [ t[2], r.ME(t[33], r.MB, r.MN, null), t[4], r.ME(t[34], r.MB, r.MN, null), t[6] ].join(""), r.MJ(r.MB(i[0])) && (a += t[7]), a += [ t[61], r.ME(t[36], r.MB, r.MN, null), t[62], r.ME(t[38], r.MB, r.MN, null), t[39], r.ME(t[40], r.MB, r.MN, null), t[41], r.ME(t[63], r.MB, r.MN, null), t[43], (n.unshift({
end_bold:t[22],
start_bold:t[24]
}), e = r.ME(t[64], r.MB, r.MN, null), n.shift(), e), t[65], r.ME(t[66], r.MB, r.MN, null), t[67] ].join(""), r.MJ(r.MC(i[5]).hasInvalidName) && (a += t[68]), a += [ t[69], r.ME(t[70], r.MB, r.MN, null), t[71], r.F.entities((r.MC(i[5]) || {}).name), t[72] ].join(""), r.MD(i[6]) && (a += [ t[73], r.ME(t[74], r.MB, r.MN, null), t[75], r.ME(t[76], r.MB, r.MN, null), t[77] ].join(""), r.MJ(r.MG(((r.MC(i[5]) || {}).itemizedCharges || {}).breakfast)) && (a += t[78]), a += [ t[79], r.ME(t[80], r.MB, r.MN, null), t[81] ].join(""), r.MJ(r.MG(((r.MC(i[5]) || {}).itemizedCharges || {}).taxes)) && (a += t[78]), a += [ t[79], r.ME(t[82], r.MB, r.MN, null), t[83] ].join(""), r.MJ(r.MG(((r.MC(i[5]) || {}).itemizedCharges || {}).parking)) && (a += t[78]), a += [ t[79], r.ME(t[84], r.MB, r.MN, null), t[85] ].join(""), r.MJ(r.MG(((r.MC(i[5]) || {}).itemizedCharges || {}).internet)) && (a += t[78]), a += [ t[79], r.ME(t[86], r.MB, r.MN, null), t[87] ].join(""), r.MJ(r.MG(((r.MC(i[5]) || {}).itemizedCharges || {}).all)) && (a += t[78]), a += [ t[79], r.ME(t[88], r.MB, r.MN, null), t[89] ].join("")), a += [ t[90], r.ME(t[91], r.MB, r.MN, null), t[92], r.F.entities(l), t[93] ].join(""), r.MJ(r.MC(i[5]).isCompanyShared) && (a += t[47]), a += [ t[94], r.ME(t[95], r.MB, r.MN, null), t[96], r.F.entities(l), t[93] ].join(""), r.MK(r.MC(i[5]).isCompanyShared) && (a += t[47]), a += [ t[94], r.ME(t[97], r.MB, r.MN, null), t[98] ].join(""), r.MK(r.MC(i[5]).isCompanyShared)) {
if (a += t[99], r.MJ(r.MC(i[5]).hasInvalidSharedWithEmail) && (a += t[68]), a += [ t[69], r.ME(t[100], r.MB, r.MN, null), t[101], r.F.entities((r.MC(i[5]) || {}).sharedWithEmail), t[102] ].join(""), r.MJ(r.MC(i[5]).hasInvalidSharedWithEmail) && (a += t[103]), a += [ t[104], r.ME(t[105], r.MB, r.MN, null), t[106] ].join(""), r.MJ(r.array_length(r.MC(i[5]).sharedWith))) {
a += [ t[107], r.F.entities(l), t[104] ].join("");
var _ = (r.MC(i[5]) || {}).sharedWith || [];
n.unshift({
email:null
});
for (var s, l = 1, c = _.length; c >= l; l++) n[0].email = s = _[l - 1], a += [ t[108], r.F.entities(l), t[109], (n.unshift({
"class":t[110],
color:"#FF6C6C",
name:t[111],
"on:click":t[112],
size:t[113]
}), e = r.HELPER("icon", n[0]), n.shift(), e), t[114], r.F.entities(s), t[115] ].join("");
n.shift(), a += t[116];
}
a += t[117];
}
a += [ t[118], r.ME(t[119], r.MB, r.MN, null), t[120], r.ME(t[121], r.MB, r.MN, null), t[60] ].join("");
}
return a += t[15], r.MJ(r.MB(i[1]) + "" == "dbi-setup") && (a += [ t[2], r.ME(t[33], r.MB, r.MN, null), t[4], r.ME(t[34], r.MB, r.MN, null), t[6] ].join(""), r.MJ(r.MB(i[0])) && (a += t[7]), a += [ t[61], r.ME(t[36], r.MB, r.MN, null), t[122], r.ME(t[38], r.MB, r.MN, null), t[123], r.ME(t[40], r.MB, r.MN, null), t[41], r.ME(t[124], r.MB, r.MN, null), t[43], r.ME(t[125], r.MB, r.MN, null), t[126] ].join(""), a = o(a), a += [ t[185], r.ME(t[186], r.MB, r.MN, null), t[187], r.ME(t[188], r.MB, r.MN, null), t[60] ].join("")), a += t[15], r.MJ(r.MB(i[1]) + "" == "completed") && (a += [ t[2], r.ME(t[33], r.MB, r.MN, null), t[4], r.ME(t[34], r.MB, r.MN, null), t[6] ].join(""), r.MJ(r.MB(i[0])) && (a += t[7]), a += [ t[18], r.ME(t[189], r.MB, r.MN, null), t[43], (n.unshift({
end_bold:t[22],
start_bold:t[24]
}), e = r.ME(t[190], r.MB, r.MN, null), n.shift(), e), t[43], (n.unshift({
end_bold:t[22],
end_link:t[192],
start_bold:t[24],
start_link:t[192]
}), e = r.ME(t[191], r.MB, r.MN, null), n.shift(), e), t[193], (n.unshift({
end_bold:t[22],
end_link:t[192],
start_bold:t[24],
start_link:t[192]
}), e = r.ME(t[194], r.MB, r.MN, null), n.shift(), e), t[195], r.ME(t[196], r.MB, r.MN, null), t[197], r.ME(t[198], r.MB, r.MN, null), t[199] ].join("")), a += t[200], _r_(a);
}
function o(e) {
_i_("3bb:70465cd3"), e += [ t[127], r.ME(t[128], r.MB, r.MN, null), t[129], r.ME(t[130], r.MB, r.MN, null), t[131], r.ME(t[132], r.MB, r.MN, null), t[133], r.ME(t[134], r.MB, r.MN, null), t[133], r.ME(t[135], r.MB, r.MN, null), t[136] ].join(""), r.MJ(/ru|el|es|pt|ca|uk|id|ms/.test(r.MC(i[7]))) && (e += t[137]), e += [ t[138], r.ME(t[139], r.MB, r.MN, null), t[140] ].join(""), r.MJ(/ru|el|es|pt|ca|uk|id|ms/.test(r.MC(i[7]))) && (e += t[137]), e += [ t[138], r.ME(t[141], r.MB, r.MN, null), t[142], r.ME(t[143], r.MB, r.MN, null), t[144] ].join("");
var a = r.MC(i[8]) || [];
n.unshift({
prop:null
});
for (var _, o = 1, s = a.length; s >= o; o++) {
if (n[0].prop = _ = a[o - 1], e += t[117], r.MJ(_.isLoading)) e += t[145], r.MJ(_.loadingStatus + "" == "success") && (e += [ t[146], r.ME(t[147], r.MB, r.MN, null), t[148] ].join("")), e += t[149], r.MJ(_.loadingStatus + "" == "error") && (e += [ t[150], r.ME(t[151], r.MB, r.MN, null), t[148] ].join("")), e += t[149], r.MJ(_.loadingStatus + "" == "pending") && (e += [ t[152], r.ME(t[153], r.MB, r.MN, null), t[154] ].join("")), e += t[155]; else if (r.MJ(_.hasValidationError)) e += [ t[156], r.ME(t[157], r.MB, r.MN, null), t[158] ].join(""); else {
e += t[159];
var l = _.code;
r.MJ(l + "" == "AE") ? e += [ t[160], r.ME(t[161], r.MB, r.MN, null), t[162] ].join("") :r.MJ(l + "" == "AK") ? e += [ t[160], r.ME(t[163], r.MB, r.MN, null), t[162] ].join("") :r.MJ(l + "" == "AU") ? e += [ t[160], r.ME(t[164], r.MB, r.MN, null), t[162] ].join("") :r.MJ(l + "" == "DS") ? e += [ t[160], r.ME(t[165], r.MB, r.MN, null), t[162] ].join("") :r.MJ(l + "" == "IK") ? e += [ t[160], r.ME(t[166], r.MB, r.MN, null), t[162] ].join("") :r.MJ(l + "" == "PK") ? e += [ t[160], r.ME(t[167], r.MB, r.MN, null), t[162] ].join("") :r.MJ(l + "" == "PR") ? e += [ t[160], r.ME(t[168], r.MB, r.MN, null), t[162] ].join("") :r.MJ(l + "" == "KS") && (e += [ t[160], r.ME(t[169], r.MB, r.MN, null), t[170] ].join("")), e += [ t[171], _.code, t[172], o, t[173] ].join(""), r.MJ(_.isDisplayed) && (e += t[47]), e += t[174], r.MJ(/ru|el|es|pt|ca|uk|id|ms/.test(r.MC(i[7]))) && (e += t[137]), e += [ t[175], o, t[176] ].join(""), r.MJ(_.isRequired) && (e += t[47]), e += t[162], r.MK(_.isRequiredActive) && (e += t[103]), e += t[177], r.MJ(/ru|el|es|pt|ca|uk|id|ms/.test(r.MC(i[7]))) && (e += t[137]), e += [ t[178], o, t[179], _.acceptedValues, t[180], r.ME(t[181], r.MB, r.MN, null), t[93] ].join(""), r.MK(_.isAcceptedValuesActive) && (e += t[103]), e += t[182];
}
e += t[183];
}
return n.shift(), e += t[184], _r_(e);
}
return a += t[0], a = _(a), a += t[201], _r_(a);
});
}()), B.define("component/business/payments/company-card/onboarding/onboarding", function(e, t, i) {
_i_("3bb:387818d1");
var n = e("component/business/payments/company-card/onboarding/store");
i.exports = e("component/reactive").extend({
template:"company_settings_company_cards_onboarding",
initialize:function() {
_i_("3bb:f37b88e5"), n.subscribe(this.render.bind(this)), _r_();
},
getState:function() {
return _i_("3bb:5f622c48"), _r_(n.getState());
},
onOverivewCancelClick:function() {
_i_("3bb:1666059c"), n.dispatch({
type:"CHANGE_PAGE",
payload:{
page:"choose-provider",
isAnimated:!1
}
}), setTimeout(function() {
_i_("3bb:3b254414"), n.dispatch({
type:"ANIMATE",
payload:{
isAnimated:!0
}
}), _r_();
}, 100), _r_();
},
onAirPlusProviderClick:function() {
_i_("3bb:e37cb0b3"), n.dispatch({
type:"CHANGE_PAGE",
payload:{
page:"airplus-overview",
isAnimated:!1
}
}), setTimeout(function() {
_i_("3bb:3b2544141"), n.dispatch({
type:"ANIMATE",
payload:{
isAnimated:!0
}
}), _r_();
}, 100), _r_();
},
onStartConfigurationClick:function() {
_i_("3bb:c394457b"), n.dispatch({
type:"CHANGE_PAGE",
payload:{
page:"legal-requirements",
isAnimated:!1
}
}), setTimeout(function() {
_i_("3bb:3b2544142"), n.dispatch({
type:"ANIMATE",
payload:{
isAnimated:!0
}
}), _r_();
}, 100), _r_();
},
onLegalReqCancelClick:function() {
_i_("3bb:e37cb0b31"), n.dispatch({
type:"CHANGE_PAGE",
payload:{
page:"airplus-overview",
isAnimated:!1
}
}), setTimeout(function() {
_i_("3bb:3b2544143"), n.dispatch({
type:"ANIMATE",
payload:{
isAnimated:!0
}
}), _r_();
}, 100), _r_();
},
onLegalReqNextClick:function() {
_i_("3bb:d8e97e0f"), n.dispatch({
type:"CHANGE_PAGE",
payload:{
page:"card-details",
isAnimated:!1
}
}), setTimeout(function() {
_i_("3bb:3b2544144"), n.dispatch({
type:"ANIMATE",
payload:{
isAnimated:!0
}
}), _r_();
}, 100), _r_();
},
onCardDetailsBackClick:function() {
_i_("3bb:c394457b1"), n.dispatch({
type:"CHANGE_PAGE",
payload:{
page:"legal-requirements",
isAnimated:!1
}
}), setTimeout(function() {
_i_("3bb:3b2544145"), n.dispatch({
type:"ANIMATE",
payload:{
isAnimated:!0
}
}), _r_();
}, 100), _r_();
},
onCardDetailsNextClick:function() {
_i_("3bb:e266e24d"), n.dispatch({
type:"CHANGE_PAGE",
payload:{
page:"dbi-setup",
isAnimated:!1
}
}), setTimeout(function() {
_i_("3bb:3b2544146"), n.dispatch({
type:"ANIMATE",
payload:{
isAnimated:!0
}
}), _r_();
}, 100), _r_();
},
onDbiDetailsBackClick:function() {
_i_("3bb:d8e97e0f1"), n.dispatch({
type:"CHANGE_PAGE",
payload:{
page:"card-details",
isAnimated:!1
}
}), setTimeout(function() {
_i_("3bb:3b2544147"), n.dispatch({
type:"ANIMATE",
payload:{
isAnimated:!0
}
}), _r_();
}, 100), _r_();
},
onDbiDetailsNextClick:function() {
_i_("3bb:1b3e533b"), n.dispatch({
type:"CHANGE_PAGE",
payload:{
page:"completed",
isAnimated:!1
}
}), setTimeout(function() {
_i_("3bb:3b2544148"), n.dispatch({
type:"ANIMATE",
payload:{
isAnimated:!0
}
}), _r_();
}, 100), _r_();
},
onCompleteBackClick:function() {
_i_("3bb:e266e24d1"), n.dispatch({
type:"CHANGE_PAGE",
payload:{
page:"dbi-setup",
isAnimated:!1
}
}), setTimeout(function() {
_i_("3bb:3b2544149"), n.dispatch({
type:"ANIMATE",
payload:{
isAnimated:!0
}
}), _r_();
}, 100), _r_();
},
onCompleteNextClick:function() {
_i_("3bb:5ae3369e"), location.reload(), _r_();
},
onLegalCheckboxOneClick:function() {
_i_("3bb:a09758fc");
var e = this.getState();
n.dispatch({
type:"LEGAL_CHECKBOX_CLICK",
payload:{
isLegalTermOneClicked:!e.isLegalTermOneClicked,
isLegalTermTwoClicked:e.isLegalTermTwoClicked,
isLegalTermThreeClicked:e.isLegalTermThreeClicked
}
}), _r_();
},
onLegalCheckboxTwoClick:function() {
_i_("3bb:e303eb9e");
var e = this.getState();
n.dispatch({
type:"LEGAL_CHECKBOX_CLICK",
payload:{
isLegalTermOneClicked:e.isLegalTermOneClicked,
isLegalTermTwoClicked:!e.isLegalTermTwoClicked,
isLegalTermThreeClicked:e.isLegalTermThreeClicked
}
}), _r_();
},
onLegalCheckboxThreeClick:function() {
_i_("3bb:cbc60f93");
var e = this.getState();
n.dispatch({
type:"LEGAL_CHECKBOX_CLICK",
payload:{
isLegalTermOneClicked:e.isLegalTermOneClicked,
isLegalTermTwoClicked:e.isLegalTermTwoClicked,
isLegalTermThreeClicked:!e.isLegalTermThreeClicked
}
}), _r_();
}
}), _r_();
}), B.define("component/referral/fraud-modal", function(e, t, i) {
_i_("3bb:a3c4f7cd");
var n = e("lightbox"), a = e("et"), r = null;
i.exports = e("component").extend({
init:function() {
_i_("3bb:ce17264d"), this.$lightbox = this.$el.find("#fraud-modal-lightbox"), this.showFraudModalLightbox(), $("#btn-raf-fraud-modal-continue").on("click", function() {
_i_("3bb:aeb0da6c"), "DEFER_PAYOUT" == B.env.b_raf_fraud_prediction_decision && a.customGoal("PGVfMTOBAFKFBOPAUCFZKXe", 1), $('[name="acknowledged_fraud_modal"]').val(1), n.hide(r), _r_();
}), _r_();
},
$lightbox:null,
showFraudModalLightbox:function() {
_i_("3bb:dad627e6"), r = this.$lightbox || $("#fraud-modal-lightbox"), n.show(r, {
customWrapperClassName:"raf-fraud-modal-wrapper",
bCloseButton:!1,
bMaskClick:!1
}), _r_();
}
}), _r_();
}), B.define("component/referral/bs2/fraud-detection", function(e, t, i) {
_i_("3bb:2241ae33");
var n = e("component/referral/fraud-modal"), a = $('[name="acknowledged_fraud_modal"]');
i.exports = e("component").extend({
init:function() {
_i_("3bb:0ae06c58"), 2 != B.env.b_stage || "DEFER_PAYOUT" != B.env.b_raf_fraud_prediction_decision && "DISABLE_REWARD" != B.env.b_raf_fraud_prediction_decision || (a = a && a.length > 0 ? a :$('[name="acknowledged_fraud_modal"]'), this.$el.on("submit", function(e) {
if (_i_("3bb:d2b68738"), "DISABLE_REWARD" == B.env.b_raf_fraud_prediction_decision || 1 != a.val()) return n.prototype.showFraudModalLightbox(), _r_(!1);
return _r_(!0);
})), _r_();
}
}), _r_();
}), B.define("component/hotel/contact-host-bp-bounce-lightbox", function(e, t, i) {
_i_("3bb:c515ba95");
var n = e("component"), a = e("jquery"), r = e("events"), _ = window.booking.lightbox, o = e("et"), s = "NAFQOYXbPBePNRNRTNJPBJdfYMO";
i.exports = n.extend({
init:function() {
_i_("3bb:e9e964aa"), r.on("bp:leaving_users_keeper:open", a.proxy(this.bootstrap, this)), _r_();
},
bootstrap:function() {
_i_("3bb:23d45ac8"), this.$el.append(a("template", this.el).html()), this.assign(), this.attachEvents(), _r_();
},
assign:function() {
_i_("3bb:d95e1043"), this.$lightbox = this.$el.parent(), this.$form = a("[data-contact-host-form]", this.el), this.form = this.$form[0], this.$submit = a('[type="submit"]', this.$form), this.$dismiss = a("[data-close-lightbox]", this.el), this.$errorMessageContainer = a("[data-error-message-container]", this.form), this.$errorMessageTemplate = a("#contact-the-host-error-message-template"), this.$successMessageTemplate = a("#contact-the-host-success-message-template"), _r_();
},
attachEvents:function() {
_i_("3bb:d80defa4"), this.$form.find(":input").off(), this.$dismiss.on("click", function() {
_i_("3bb:6681567e"), r.trigger("bp:leaving_users_keeper:close"), _r_();
}), this.$form.on("submit", a.proxy(function(e) {
_i_("3bb:506002d0"), e.preventDefault(), this.validateForm() && this.submitForm(), _r_();
}, this)), r.one("bp:leaving_users_keeper:close", a.proxy(this.dismissLightbox, this)), _r_();
},
validateForm:function() {
_i_("3bb:b48545ae");
var e = !0;
return a('[data-validate="required"]', this.form).each(function() {
_i_("3bb:25409524");
var t = a(this).closest(".bui-form__group");
if (this.value = a.trim(this.value), !this.value) return t.addClass("bui-has-error"), this.focus(), t.one("keyup", function() {
_i_("3bb:ede16804"), t.removeClass("bui-has-error"), _r_();
}), e = !1, _r_(!1);
_r_();
}), _r_(e);
},
submitForm:function() {
_i_("3bb:fd909a23");
var e = this.$form.serializeArray(), t = a.ajax({
context:this,
type:this.form.method,
xhrFields:{
withCredentials:!0
},
url:this.form.action,
data:e
});
this.$submit.addClass("bui-is-loading"), this.$submit.attr("disabled", !0), this.$errorMessageContainer.empty(), t.success(a.proxy(this.onXhrSuccess, this)), t.fail(a.proxy(this.onXhrFail, this)), t.always(a.proxy(this.onXhrDone, this)), o.customGoal(s, 1), _r_();
},
dismissLightbox:function() {
_i_("3bb:b33b3e1f"), _.hide(), this.$el.remove(), _r_();
},
onXhrSuccess:function() {
_i_("3bb:af013f18");
var e = a(this.$successMessageTemplate.html());
a("[data-close-lightbox]", e).on("click", function() {
_i_("3bb:6681567e1"), r.trigger("bp:leaving_users_keeper:close"), _r_();
}), this.form.reset(), _.hide(), _.show(e), _r_();
},
onXhrFail:function() {
_i_("3bb:694dd316"), this.$errorMessageContainer.html(this.$errorMessageTemplate.html()), _r_();
},
onXhrDone:function() {
_i_("3bb:a20aeec5"), this.$submit.removeClass("bui-is-loading"), this.$submit.attr("disabled", !1), _r_();
}
}), _r_();
}), B.define("component/hotel/contact-host-bp-bounce-lightbox-track", function(e, t, i) {
_i_("3bb:a27fc2c7");
var n = e("component"), a = e("et"), r = e("events"), _ = e("server-data"), o = "NAFQOYXbPBePNRNRTNJPBJdfYMO";
i.exports = n.extend({
init:function() {
_i_("3bb:c27d5e65"), r.on("bp:leaving_users_keeper:close", function() {
_i_("3bb:e5fbfc03"), a.customGoal(o, 2), _r_();
}), r.on("bp:leaving_users_keeper:open", function() {
_i_("3bb:08c30144"), a.stage(o, 1), 2 === _.b_stage && a.stage(o, 2), 3 === _.b_stage && a.stage(o, 3), _r_();
}), _r_();
}
}), _r_();
}), function() {
"use strict";
_i_("3bb:3a55c077");
function e(e) {
return _i_("3bb:03aa6f4d"), _r_(e ? e.replace(/[\W_]+/g, "") :"");
}
function t(e) {
return _i_("3bb:44ff5026"), _r_(e.match(/^\w{19}$/));
}
function i(e) {
return _i_("3bb:f0e7da74"), _r_(e.match(/^\d{4}$/));
}
B.when({
events:"ready",
action:"book",
condition:3 === B.env.b_stage && "www" === B.env.b_site_type
}).run(function(n) {
_i_("3bb:2f7af24b");
var a = B.require("jquery"), r = B.require("server-data"), _ = a("#bs2_bs3_redeem_giftcard_widget");
if (!_.length) return _r_();
_.find("input[name=giftcard_redemption_card_number]").mask("0000-0000-0000-0000-000");
var o = function(e) {
_i_("3bb:8dd22153"), e ? (_.find(".giftcard__redeem_button").addClass("bui-is-loading").attr("disabled", !0), _.find("input[name=giftcard_redemption_card_number],input[name=giftcard_redemption_pin]").attr("disabled", !0)) :(_.find(".giftcard__redeem_button").removeClass("bui-is-loading").attr("disabled", !1), _.find("input[name=giftcard_redemption_card_number],input[name=giftcard_redemption_pin]").attr("disabled", !1)), _r_();
};
if (_.find(".giftcard__redeem_button").click(function(n) {
if (_i_("3bb:03be6e28"), B.env.b_user_auth_level_is_high || 2 === B.env.auth_level) {
n.preventDefault(), _.find(".bui-has-error").removeClass("bui-has-error");
var s = _.find("input[name=giftcard_redemption_card_number]:visible"), l = _.find("input[name=giftcard_redemption_pin]:visible"), c = e(s.cleanVal()), d = e(l.val());
if (!t(c)) return s.parent().addClass("bui-has-error"), _r_();
if (!i(d)) return l.parent().addClass("bui-has-error"), _r_();
o(!0), a(".js-giftcard_bp_widget_desc_text").empty(), a(".js-giftcard_bp_widget_desc_text").removeClass("bui-alert--error bui-alert--success");
var b = r.b_secure_domain || r.b_secure_hostname;
a.ajax({
url:b + "/gift_card/redeem",
data:{
gift_card_number:c,
gift_card_pin:d,
source:"bp"
},
method:"POST"
}).then(function(e) {
if (_i_("3bb:edb977ee"), e && e.success) a.cookie("giftcard_redeem_widget_success_card_value", e.data.formatted_amount), window.location.href = b + r.b_this_url; else {
o(!1);
var t = e.message || "Unexpected Error";
a(".js-giftcard_bp_widget_desc_text").addClass("bui-alert--error bui-alert--inline").html(t).animate({
opacity:0
}, 200, "linear", function() {
_i_("3bb:b487dd5d"), a(this).animate({
opacity:1
}, 200), _r_();
});
}
_r_();
}, function() {
_i_("3bb:d8fbef9c"), o(!1), _r_();
});
}
_r_();
}), a.cookie("giftcard_redeem_widget_success_card_value")) {
var s = a.cookie("giftcard_redeem_widget_success_card_value");
a.cookie("giftcard_redeem_widget_success_card_value", null);
var l = B.jstmpl.translations("gift_card_redeemed_widget_bs3_header", null, null) + " " + B.jstmpl.translations("gift_card_redeemed_widget_bs3_subheader", null, {
gift_card_value:s,
b_companyname:"Booking.com"
});
a(".js-giftcard_bp_widget_desc_text").addClass("bui-alert--success bui-alert--inline").text(l);
}
_.find(".js-giftcard-redeem-sign-in-link").click(function(e) {
if (_i_("3bb:be14d1c9"), e.preventDefault(), B.env.b_user_auth_level_is_low_or_high) {
if (!B.env.b_user_auth_level_is_high) if (a(".js-user-access-form--signin").length) {
var t = a(".js-user-access-form--signin").find("input[type=password]").is(":visible");
t ? a(".js-user-access-form--signin").find("input[type=password]").focus() :B.command("show-auth-lightbox").run({
mode:"raise-auth",
tab:"signin"
});
} else B.command("show-auth-lightbox").run({
mode:"raise-auth",
tab:"signin"
});
} else B.command("show-auth-lightbox").run({
tab:"signin"
});
_r_();
}), _r_();
}), _r_();
}();

var $jscomp = {
scope:{},
findInternal:function(e, t, i) {
_i_("3bb:fe8438f9"), e instanceof String && (e = String(e));
for (var n = e.length, a = 0; n > a; a++) {
var r = e[a];
if (t.call(i, r, a, e)) return _r_({
i:a,
v:r
});
}
return _r_({
i:-1,
v:void 0
});
}
};

$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty :function(e, t, i) {
if (_i_("3bb:4d596497"), i.get || i.set) throw new TypeError("ES3 does not support getters and setters.");
e != Array.prototype && e != Object.prototype && (e[t] = i.value), _r_();
}, $jscomp.getGlobal = function(e) {
return _i_("3bb:b1912159"), _r_("undefined" != typeof window && window === e ? e :"undefined" != typeof global && null != global ? global :e);
}, $jscomp.global = $jscomp.getGlobal(this), $jscomp.polyfill = function(e, t, i, n) {
if (_i_("3bb:ccc87cc2"), t) {
for (i = $jscomp.global, e = e.split("."), n = 0; n < e.length - 1; n++) {
var a = e[n];
a in i || (i[a] = {}), i = i[a];
}
e = e[e.length - 1], n = i[e], t = t(n), t != n && null != t && $jscomp.defineProperty(i, e, {
configurable:!0,
writable:!0,
value:t
});
}
_r_();
}, $jscomp.polyfill("Array.prototype.find", function(e) {
return _i_("3bb:2a3cc701"), _r_(e ? e :function(e, t) {
return _i_("3bb:f28de16d"), _r_($jscomp.findInternal(this, e, t).v);
});
}, "es6-impl", "es3"), function(e, t, i) {
_i_("3bb:1e93fcd8"), "function" == typeof define && define.amd ? define([ "jquery" ], e) :"object" == typeof exports ? module.exports = e(require("jquery")) :e(t || i), _r_();
}(function(e) {
_i_("3bb:e823b871");
var t = function(t, i, n) {
_i_("3bb:d824aa10");
var a = {
invalid:[],
getCaret:function() {
_i_("3bb:fee48a41");
try {
var e, i = 0, n = t.get(0), r = document.selection, _ = n.selectionStart;
return r && -1 === navigator.appVersion.indexOf("MSIE 10") ? (e = r.createRange(), e.moveStart("character", -a.val().length), i = e.text.length) :(_ || "0" === _) && (i = _), _r_(i);
} catch (o) {}
_r_();
},
setCaret:function(e) {
_i_("3bb:14d209e4");
try {
if (t.is(":focus")) {
var i, n = t.get(0);
n.setSelectionRange ? n.setSelectionRange(e, e) :(i = n.createTextRange(), i.collapse(!0), i.moveEnd("character", e), i.moveStart("character", e), i.select());
}
} catch (a) {}
_r_();
},
events:function() {
_i_("3bb:852fa5dc"), t.on("keydown.mask", function(e) {
_i_("3bb:b1c6defd"), t.data("mask-keycode", e.keyCode || e.which), t.data("mask-previus-value", t.val()), _r_();
}).on(e.jMaskGlobals.useInput ? "input.mask" :"keyup.mask", a.behaviour).on("paste.mask drop.mask", function() {
_i_("3bb:ce657d99"), setTimeout(function() {
_i_("3bb:0590e08a"), t.keydown().keyup(), _r_();
}, 100), _r_();
}).on("change.mask", function() {
_i_("3bb:1f575ba1"), t.data("changed", !0), _r_();
}).on("blur.mask", function() {
_i_("3bb:82f979cc"), o === a.val() || t.data("changed") || t.trigger("change"), t.data("changed", !1), _r_();
}).on("blur.mask", function() {
_i_("3bb:d627933d"), o = a.val(), _r_();
}).on("focus.mask", function(t) {
_i_("3bb:faae41fb"), !0 === n.selectOnFocus && e(t.target).select(), _r_();
}).on("focusout.mask", function() {
_i_("3bb:e8d9a685"), n.clearIfNotMatch && !r.test(a.val()) && a.val(""), _r_();
}), _r_();
},
getRegexMask:function() {
_i_("3bb:024d41bf");
for (var e, t, n, a, r = [], o = 0; o < i.length; o++) (e = _.translation[i.charAt(o)]) ? (t = e.pattern.toString().replace(/.{1}$|^.{1}/g, ""), n = e.optional, (e = e.recursive) ? (r.push(i.charAt(o)), a = {
digit:i.charAt(o),
pattern:t
}) :r.push(n || e ? t + "?" :t)) :r.push(i.charAt(o).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
return r = r.join(""), a && (r = r.replace(new RegExp("(" + a.digit + "(.*" + a.digit + ")?)"), "($1)?").replace(new RegExp(a.digit, "g"), a.pattern)), _r_(new RegExp(r));
},
destroyEvents:function() {
_i_("3bb:d15e1b08"), t.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask ")), _r_();
},
val:function(e) {
_i_("3bb:cde2bf39");
var i = t.is("input") ? "val" :"text";
return 0 < arguments.length ? (t[i]() !== e && t[i](e), i = t) :i = t[i](), _r_(i);
},
calculateCaretPosition:function(e, i) {
_i_("3bb:a079148e");
var n = i.length, a = t.data("mask-previus-value"), r = a.length;
return 8 === t.data("mask-keycode") && a !== i ? e -= i.slice(0, e).length - a.slice(0, e).length :a !== i && (e = e >= r ? n :e + (i.slice(0, e).length - a.slice(0, e).length)), _r_(e);
},
behaviour:function(i) {
_i_("3bb:b062c1df"), i = i || window.event, a.invalid = [];
var n = t.data("mask-keycode");
if (-1 === e.inArray(n, _.byPassKeys)) {
var n = a.getMasked(), r = a.getCaret();
return setTimeout(function(e, t) {
_i_("3bb:594766d5"), a.setCaret(a.calculateCaretPosition(e, t)), _r_();
}, 10, r, n), a.val(n), a.setCaret(r), _r_(a.callbacks(i));
}
_r_();
},
getMasked:function(e, t) {
_i_("3bb:53a8c036");
var r, o, s = [], l = void 0 === t ? a.val() :t + "", c = 0, d = i.length, b = 0, p = l.length, u = 1, h = "push", f = -1;
n.reverse ? (h = "unshift", u = -1, r = 0, c = d - 1, b = p - 1, o = function() {
return _i_("3bb:c617b4de"), _r_(c > -1 && b > -1);
}) :(r = d - 1, o = function() {
return _i_("3bb:fc840a0f"), _r_(d > c && p > b);
});
for (var m; o(); ) {
var M = i.charAt(c), g = l.charAt(b), v = _.translation[M];
v ? (g.match(v.pattern) ? (s[h](g), v.recursive && (-1 === f ? f = c :c === r && (c = f - u), r === f && (c -= u)), c += u) :g === m ? m = void 0 :v.optional ? (c += u, b -= u) :v.fallback ? (s[h](v.fallback), c += u, b -= u) :a.invalid.push({
p:b,
v:g,
e:v.pattern
}), b += u) :(e || s[h](M), g === M ? b += u :m = M, c += u);
}
return l = i.charAt(r), d !== p + 1 || _.translation[l] || s.push(l), _r_(s.join(""));
},
callbacks:function(e) {
_i_("3bb:86897d4e");
var r = a.val(), _ = r !== o, s = [ r, e, t, n ], l = function(e, t, i) {
_i_("3bb:196fcfbe"), "function" == typeof n[e] && t && n[e].apply(this, i), _r_();
};
l("onChange", !0 === _, s), l("onKeyPress", !0 === _, s), l("onComplete", r.length === i.length, s), l("onInvalid", 0 < a.invalid.length, [ r, e, t, a.invalid, n ]), _r_();
}
};
t = e(t);
var r, _ = this, o = a.val();
i = "function" == typeof i ? i(a.val(), void 0, t, n) :i, _.mask = i, _.options = n, _.remove = function() {
_i_("3bb:cf96a3c6");
var e = a.getCaret();
return a.destroyEvents(), a.val(_.getCleanVal()), a.setCaret(e), _r_(t);
}, _.getCleanVal = function() {
return _i_("3bb:86dcc58b"), _r_(a.getMasked(!0));
}, _.getMaskedVal = function(e) {
return _i_("3bb:7485ee65"), _r_(a.getMasked(!1, e));
}, _.init = function(o) {
if (_i_("3bb:8a9bd788"), o = o || !1, n = n || {}, _.clearIfNotMatch = e.jMaskGlobals.clearIfNotMatch, _.byPassKeys = e.jMaskGlobals.byPassKeys, _.translation = e.extend({}, e.jMaskGlobals.translation, n.translation), _ = e.extend(!0, {}, _, n), r = a.getRegexMask(), o) a.events(), a.val(a.getMasked()); else {
n.placeholder && t.attr("placeholder", n.placeholder), t.data("mask") && t.attr("autocomplete", "off"), o = 0;
for (var s = !0; o < i.length; o++) {
var l = _.translation[i.charAt(o)];
if (l && l.recursive) {
s = !1;
break;
}
}
s && t.attr("maxlength", i.length), a.destroyEvents(), a.events(), o = a.getCaret(), a.val(a.getMasked()), a.setCaret(o);
}
_r_();
}, _.init(!t.is("input")), _r_();
};
e.maskWatchers = {};
var i = function() {
_i_("3bb:1a28fd3b");
var i = e(this), a = {}, r = i.attr("data-mask");
if (i.attr("data-mask-reverse") && (a.reverse = !0), i.attr("data-mask-clearifnotmatch") && (a.clearIfNotMatch = !0), "true" === i.attr("data-mask-selectonfocus") && (a.selectOnFocus = !0), n(i, r, a)) return _r_(i.data("mask", new t(this, r, a)));
_r_();
}, n = function(t, i, n) {
_i_("3bb:6becf2e5"), n = n || {};
var a = e(t).data("mask"), r = JSON.stringify;
t = e(t).val() || e(t).text();
try {
return _r_(("function" == typeof i && (i = i(t)), "object" != typeof a || r(a.options) !== r(n) || a.mask !== i));
} catch (_) {}
_r_();
}, a = function(e) {
_i_("3bb:7c04adc2");
var t, i = document.createElement("div");
return e = "on" + e, t = e in i, t || (i.setAttribute(e, "return;"), t = "function" == typeof i[e]), _r_(t);
};
e.fn.mask = function(i, a) {
_i_("3bb:33974837"), a = a || {};
var r = this.selector, _ = e.jMaskGlobals, o = _.watchInterval, _ = a.watchInputs || _.watchInputs, s = function() {
if (_i_("3bb:fc77a672"), n(this, i, a)) return _r_(e(this).data("mask", new t(this, i, a)));
_r_();
};
return e(this).each(s), r && "" !== r && _ && (clearInterval(e.maskWatchers[r]), e.maskWatchers[r] = setInterval(function() {
_i_("3bb:83d30786"), e(document).find(r).each(s), _r_();
}, o)), _r_(this);
}, e.fn.masked = function(e) {
return _i_("3bb:18ca56d4"), _r_(this.data("mask").getMaskedVal(e));
}, e.fn.unmask = function() {
return _i_("3bb:c99f7fd2"), clearInterval(e.maskWatchers[this.selector]), delete e.maskWatchers[this.selector], _r_(this.each(function() {
_i_("3bb:f35c1935");
var t = e(this).data("mask");
t && t.remove().removeData("mask"), _r_();
}));
}, e.fn.cleanVal = function() {
return _i_("3bb:7dddc991"), _r_(this.data("mask").getCleanVal());
}, e.applyDataMask = function(t) {
_i_("3bb:23df204c"), t = t || e.jMaskGlobals.maskElements, (t instanceof e ? t :e(t)).filter(e.jMaskGlobals.dataMaskAttr).each(i), _r_();
}, a = {
maskElements:"input,td,span,div",
dataMaskAttr:"*[data-mask]",
dataMask:!0,
watchInterval:300,
watchInputs:!0,
useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && a("input"),
watchDataMask:!1,
byPassKeys:[ 9, 16, 17, 18, 36, 37, 38, 39, 40, 91 ],
translation:{
0:{
pattern:/\d/
},
9:{
pattern:/\d/,
optional:!0
},
"#":{
pattern:/\d/,
recursive:!0
},
A:{
pattern:/[a-zA-Z0-9]/
},
S:{
pattern:/[a-zA-Z]/
}
}
}, e.jMaskGlobals = e.jMaskGlobals || {}, a = e.jMaskGlobals = e.extend(!0, {}, a, e.jMaskGlobals), a.dataMask && e.applyDataMask(), setInterval(function() {
_i_("3bb:5e844cb8"), e.jMaskGlobals.watchDataMask && e.applyDataMask(), _r_();
}, a.watchInterval), _r_();
}, window.jQuery, window.Zepto);