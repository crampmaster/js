var _i_ = this._i_ || function() {}, _r_ = this._r_ || function(e) {
return e;
};

booking.env.enable_scripts_tracking && ("www" === booking.env.b_site_type && (booking.env.scripts_tracking.jquery = {
loaded:!!window.jQuery,
run:!!window.jQuery
}), booking.env.scripts_tracking.main = {
loaded:!0,
run:!1
}), "function" != typeof booking.debug && (booking.debug = function() {
return _i_("3dab:4fde6557"), _r_(new function() {
_i_("3dab:284ce5e0"), this.log = this.debug = this.info = this.warn = this.error = this.assert = this.dir = this.table = this.profile = this.trace = this.time = this.timeEnd = function() {}, _r_();
}());
}, booking.debug.enabled = function() {}), booking.console = booking.debug("booking"), window.console = window.console || booking.console, B.tools = {
inherits:function(e, t, i) {
_i_("3dab:560d2453");
var n = function() {};
n.prototype = t.prototype, e.superClass_ = t.prototype, e.prototype = new n(), e.prototype.constructor = e, i && $.extend(e.prototype, i), _r_();
},
base:function(e, t, i) {
_i_("3dab:c870a5b4");
var n = arguments.callee.caller;
if (!n) throw Error("arguments.caller not defined.  tools.base() expects not to be running in strict mode. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
if (n.superClass_) return _r_(n.superClass_.constructor.apply(e, Array.prototype.slice.call(arguments, 1)));
for (var r = Array.prototype.slice.call(arguments, 2), a = !1, o = e.constructor; o; o = o.superClass_ && o.superClass_.constructor) if (o.prototype[t] === n) a = !0; else if (a) return _r_(o.prototype[t].apply(e, r));
if (e[t] === n) return _r_(e.constructor.prototype[t].apply(e, r));
throw Error("tools.base called from a method of one name to a method of a different name");
},
addSingletonGetter:function(e) {
_i_("3dab:2569923b"), e.getInstance = function() {
return _i_("3dab:2e65904b"), e.__instance__ || (e.__instance__ = new e()), _r_(e.__instance__);
}, _r_();
},
abstractMethod:function() {
throw _i_("3dab:595dbe69"), Error("unimplemented abstract method");
},
parseInt:function(e) {
return _i_("3dab:2a86d509"), _r_(parseInt(e, 10));
},
string:{
substitute:function(e, t) {
_i_("3dab:066d0ba4");
for (var i = 1; i < arguments.length; i++) {
var n = String(arguments[i]).replace(/\$/g, "$$$$");
e = e.replace(/%s/, n);
}
return _r_(e);
},
htmlEncode:function(e) {
return _i_("3dab:b96fdb50"), _r_($("<textarea />").text(e).html());
},
htmlDecode:function(e) {
return _i_("3dab:3095e0dc"), _r_($("<textarea />").html(e).text());
}
},
object:{
clone:function(e) {
_i_("3dab:1e4e7d13");
var t = $.type(e);
if ("object" === t || "array" === t) {
if ("function" == typeof e.clone) return _r_(e.clone());
var i = "array" === t ? [] :{};
for (var n in e) e.hasOwnProperty(n) && (i[n] = B.tools.object.clone(e[n]));
return _r_(i);
}
return _r_(e);
},
keys:Object.keys,
defaults:function(e, t) {
_i_("3dab:4901a9ef");
var i;
e = e || {}, t = t || {};
for (i in t) t.hasOwnProperty(i) && null == e[i] && (e[i] = t[i]);
return _r_(e);
},
getByName:function(e, t) {
_i_("3dab:5180882f");
for (var i, n = e.split("."), r = t || window; i = n.shift(); ) {
if (null === r[i] || void 0 === r[i]) return _r_(null);
r = r[i];
}
return _r_(r);
},
pick:function(e, t) {
_i_("3dab:79f493df");
var i = [].slice.call(arguments, 1), n = {};
return i.forEach(function(t) {
_i_("3dab:27f9c632"), t in e && (n[t] = e[t]), _r_();
}), _r_(n);
}
},
array:{
toObject:function(e) {
_i_("3dab:6e0dea5a");
for (var t = {}, i = 0, n = e.length; n > i; i++) t[e[i]] = !0;
return _r_(t);
},
indexOf:function(e, t, i) {
_i_("3dab:6d33f092");
for (var n = i || 0, r = e.length; r > n; n++) if (e[n] == t) return _r_(n);
return _r_(-1);
}
},
math:{
getRandomInt:function(e, t) {
return _i_("3dab:4b375f4e"), _r_(Math.round(Math.random() * (t - e)) + e);
}
},
dom:{
window:$(window),
getBlockWidth:function(e) {
return _i_("3dab:c1e845c7"), _r_(e.width());
},
getBlockHeight:function(e) {
return _i_("3dab:6fdea842"), _r_(e.height());
},
getBlockOffset:function(e, t) {
_i_("3dab:a66ada5f");
var i = e.offset(), n = {
left:0,
top:0
};
return t && (n = t.offset()), _r_({
left:i.left - n.left,
top:i.top - n.top
});
},
getBounds:function(e) {
_i_("3dab:26de9c62");
var t = $(e), i = t.offset(), n = t.outerWidth(), r = t.outerHeight();
return _r_({
left:i.left,
right:i.left + n,
top:i.top,
bottom:i.top + r,
width:n,
height:r
});
},
boundsOverlap:function(e, t) {
return _i_("3dab:f0deabdd"), _r_(e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top);
},
getWindowWidth:function() {
return _i_("3dab:ce7550f1"), _r_(B.tools.dom.getBlockWidth(B.tools.dom.window));
},
getWindowHeight:function() {
return _i_("3dab:6490d6a8"), _r_(B.tools.dom.getBlockHeight(B.tools.dom.window));
},
getWindowScrollLeft:function() {
return _i_("3dab:92b03da8"), _r_(B.tools.dom.window.scrollLeft());
},
getWindowScrollTop:function() {
return _i_("3dab:669dafc7"), _r_(B.tools.dom.window.scrollTop());
},
watchIfBlockVisibleInViewport:function(e, t, i, n) {
_i_("3dab:f0e4d240");
function r() {
_i_("3dab:df318563"), B.tools.dom.isBlockVisibleInViewport(e, i) && (t(), n || a()), _r_();
}
function a() {
_i_("3dab:a0b5f679"), B.tools.dom.window.unbind("resize scroll", r), _r_();
}
return B.tools.dom.window.bind("resize scroll", r), setTimeout(r, 0), _r_({
forceCheck:r,
stopWatch:a
});
},
isBlockVisibleInViewport:function(e, t) {
if (_i_("3dab:ce0ec9fe"), !e || 0 === e.length || !e.is(":visible")) return _r_(!1);
var i = e.offset().top, n = {
top:i,
bottom:i + e.innerHeight()
}, r = B.tools.dom.getWindowScrollTop(), a = {
top:r,
bottom:r + B.tools.dom.getWindowHeight()
};
if (t) return _r_(n.top >= a.top && n.bottom <= a.bottom);
return _r_(n.top >= a.top && n.top <= a.bottom || n.bottom >= a.top && n.bottom <= a.bottom || n.top < a.top && n.bottom > a.bottom);
},
popupCancel:function(e) {
return _i_("3dab:c905daa0"), window.open(e, "", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=400,height=350,left=200,top=200"), _r_(!1);
}
},
css:{
CSS_OPACITY_SUPPORT:"opacity" in document.body.style
},
url:{
parse:function(e) {
_i_("3dab:5821f165");
var t = {};
if ("string" != typeof e) return _r_(t);
return e.split(/[;&]/g).forEach(function(e) {
_i_("3dab:579e9282");
var i = e.indexOf("="), n = e.substr(0, i);
void 0 === t[n] && (t[n] = e.substr(i + 1)), _r_();
}), _r_(t);
},
stringify:function(e, t, i) {
_i_("3dab:f00c0aaa"), t = t || "&", i = i || "=";
var n = [];
return e && Object.keys(e).forEach(function(t) {
_i_("3dab:557f56e3"), n.push(t + i + e[t]), _r_();
}), _r_(n.join(t));
}
},
functions:{
throttle:function(e, t, i) {
_i_("3dab:38dcdb69");
var n, r, a, o = null, _ = 0, s = i || {}, d = function() {
_i_("3dab:d4de8dcf"), _ = s.leading === !1 ? 0 :+new Date(), o = null, a = e.apply(n || {}, r || []), n = r = null, _r_();
};
return _r_(function() {
_i_("3dab:16c91277");
var i = +new Date();
_ || s.leading !== !1 || (_ = i);
var c = t - (i - _);
return n = this, r = arguments, 0 >= c ? (clearTimeout(o), o = null, _ = i, a = e.apply(n, r), n = r = null) :o || s.trailing === !1 || (o = setTimeout(d, c)), _r_(a);
});
}
},
jsStaticUrl:function(e) {
return _i_("3dab:53e5cfc6"), _r_(e ? B.tools.getStaticHost(e) + e :"");
},
getStaticHost:function(e) {
if (_i_("3dab:5244fc51"), !B.env.static_hostnames || !B.env.static_hostnames.length) return _r_(document.location.protocol + "//q.bstatic.com");
if (1 === B.env.static_hostnames.length || !e) return _r_(B.env.static_hostnames[0]);
var t = B.tools.getHashCode(e.toString()), i = Math.abs(t) % B.env.static_hostnames.length;
return _r_(B.env.static_hostnames[i]);
},
getHashCode:function(e) {
_i_("3dab:b62da487");
var t, i, n, r = 0;
if (0 === e.length) return _r_(r);
for (t = 0, n = e.length; n > t; t++) i = e.charCodeAt(t), r = (r << 5) - r + i, r |= 0;
return _r_(r);
}
}, B.tools.dom.Bounds, "undefined" != typeof B.define && B.define("tools", B.tools), /* @preserve https://mths.be/cssescape v0.2.1 by @mathias | MIT license */
function(e) {
_i_("3dab:b2f7a256"), e.CSS || (e.CSS = {});
var t = e.CSS, i = function(e) {
_i_("3dab:6e65499b"), this.message = e, _r_();
};
i.prototype = new Error(), i.prototype.name = "InvalidCharacterError", t.escape ? e.CSS_escape = t.escape :t.escape = e.CSS_escape = function(e) {
_i_("3dab:885e4de6");
for (var t, n = String(e), r = n.length, a = -1, o = "", _ = n.charCodeAt(0); ++a < r; ) {
if (t = n.charCodeAt(a), 0 == t) throw new i("Invalid character: the input contains U+0000.");
if (t >= 1 && 31 >= t || 127 == t || 0 == a && t >= 48 && 57 >= t || 1 == a && t >= 48 && 57 >= t && 45 == _) {
o += "\\" + t.toString(16) + " ";
continue;
}
if (t >= 128 || 45 == t || 95 == t || t >= 48 && 57 >= t || t >= 65 && 90 >= t || t >= 97 && 122 >= t) {
o += n.charAt(a);
continue;
}
o += "\\" + n.charAt(a);
}
return _r_(o);
}, _r_();
}("undefined" != typeof global ? global :window), B.define("booking-command", function(e, t, i) {
_i_("3dab:e8e68916");
var n = e("jquery");
function r() {
_i_("3dab:a5cc80f6");
var e = "string", t = arguments;
if (typeof t[0] === e && (!t[1] || typeof t[1] === e)) return _r_(r.get.apply(r, t));
return _r_(r.define.apply(r, t));
}
n.extend(r, {
define:function() {
_i_("3dab:fc3afb38");
var e = {}, t = arguments;
return e = "object" == typeof t[0] ? t[0] :{
name:t[0],
handler:t[1]
}, "string" == typeof e.name && "function" == typeof e.handler && (this._list[this._key(e)] = this.create(e)), _r_(this);
},
get:function(e, t) {
return _i_("3dab:7f898c8b"), t = t || "", _r_(this._list[this._key(e, t)]);
},
register:function(e, t) {
_i_("3dab:111e59d2");
var i = this;
function r(r) {
_i_("3dab:1cbb8765");
var a = n(this).attr(e), o = i.get(a, t) || i.get(a);
o && o.run(i.params(this, e), r), _r_();
}
n(document.body).delegate("[" + e + "]", t, r), _r_();
},
create:function(e) {
_i_("3dab:e7c0ba6d");
var t = new this._onea();
return n.extend(t, e), _r_(t);
},
params:function(e, t, i) {
_i_("3dab:0a2c4f0f"), "string" == typeof t && (i = t, t = void 0);
var r = (i || "data-command") + "-params";
if ("object" != typeof t) return _r_(this._parse(n(e).attr(r)));
var a = [];
n.each(t, function(e, t) {
_i_("3dab:6d1b6bfd"), a.push(e + "=" + encodeURIComponent(t)), _r_();
}), n(e).attr(r, a.join(";")), _r_();
},
_list:{},
_onea:a,
_key:function(e, t) {
_i_("3dab:d34250a6");
var i = "object" == typeof e ? e :{
name:e,
type:t
};
return _r_(i.name + (i.type ? " " + i.type :""));
},
_parse:function(e) {
_i_("3dab:b8bf9251");
var t = {};
return e && n.each(e.split(";"), function(e, i) {
_i_("3dab:1d92d7f1");
var n = i.split("=");
try {
t[n.shift()] = decodeURIComponent(n.join("="));
} catch (r) {}
_r_();
}), _r_(t);
}
}), n.each([ "bind", "unbind", "one", "trigger" ], function(e, t) {
_i_("3dab:10516703"), r[t] = function() {
_i_("3dab:cc3871dd");
var e = n.makeArray(arguments);
return e[0] = "command:" + e[0], _r_(B.eventEmitter[t].apply(B.eventEmitter, e));
}, _r_();
});
function a() {}
a.prototype = {
name:"",
type:"",
run:function() {
_i_("3dab:f00990df");
var e = n.makeArray(arguments);
return e[0] = e[0] || {}, r.trigger.apply(r, [ this.name ].concat(e)), _r_(this.handler.apply(this, e));
},
handler:function() {}
}, r.register("data-command", "click"), i.exports = r, _r_();
}), booking.command = B.require("booking-command"), function(e) {
"use strict";
_i_("3dab:d1943dd3");
var t = "function", i = "object", n = "reject", r = "fulfill", a = 0, o = typeof module === i && module.exports && "function" != typeof __webpack_require__;
function _() {
_i_("3dab:28dc421c"), this._act = a, this._cbs = [], this._ebs = [], _r_();
}
_.tick = function(e) {
_i_("3dab:e461a79b"), o ? process.nextTick(e) :setTimeout(e, 0), _r_();
}, _.prototype = {
_exec:function(e) {
_i_("3dab:9c8d4251");
var i = this._val, n = this._act;
_.tick(function() {
_i_("3dab:7a3d61ec");
for (var r, a, o; r = e.shift(); ) if (a = r.pr, o = r.cb, typeof o === t) try {
a.fulfill(o(i));
} catch (_) {
a.reject(_);
} else a[n](i);
_r_();
}), _r_();
},
reject:function(e) {
_i_("3dab:ca93dd50");
var t = this;
t._act === a && (t._val = e, t._act = n, t._exec(t._ebs)), _r_();
},
fulfill:function(e) {
_i_("3dab:884d1cc1");
var n, o, _ = this, s = 1;
if (_._act === a) {
try {
if (e === _) throw TypeError();
o = e && typeof e, n = (o === t || o === i) && e.then;
} catch (d) {
return _.reject(d), _r_();
}
if (typeof n === t) try {
n.call(e, function(e) {
_i_("3dab:43100eb5"), s = s && _.fulfill(e), _r_();
}, function(e) {
_i_("3dab:18994d1e"), s = s && _.reject(e), _r_();
});
} catch (d) {
s = s && _.reject(d);
} else _._val = e, _._act = r, _._exec(_._cbs);
}
_r_();
},
then:function(e, t) {
_i_("3dab:0eb90b82");
var i = this, r = new _();
return i._act === a ? (i._cbs.push({
cb:e,
pr:r
}), i._ebs.push({
cb:t,
pr:r
})) :i._exec([ {
cb:i._act === n ? t :e,
pr:r
} ]), _r_(r);
}
}, o ? module.exports = _ :e.p0 = _, _r_();
}(booking), booking.promise = function() {
return _i_("3dab:abece4b7"), _r_(new booking.p0());
}, booking.promise.when = function(e) {
_i_("3dab:4f7a24c1");
var t, i, n;
if (t = e.length, i = [], n = booking.promise(), !t) return n.fulfill([]), _r_(n);
return e.forEach(function(e, r) {
_i_("3dab:7a161d0c");
var a = function(e) {
_i_("3dab:419f66f6"), t--, i[r] = e, t || n.fulfill(i), _r_();
};
booking.promise.is(e) ? e.then(a, function(e) {
_i_("3dab:767c08a4"), n.reject(e), _r_();
}) :a(e), _r_();
}), _r_(n);
}, booking.promise.is = function(e) {
return _i_("3dab:e15740a6"), _r_(e && "function" == typeof e.then);
}, booking.p0.prototype.pipe = function(e) {
return _i_("3dab:b4212bfe"), _r_(booking.promise.is(e) ? this.then(function(t) {
_i_("3dab:17a10be7"), e.fulfill(t), _r_();
}, function(t) {
_i_("3dab:4e45b3b9"), e.reject(t), _r_();
}) :this);
}, booking.p0.prototype.log = function(e) {
_i_("3dab:91e5f4bf"), e = e || "";
var t = function(t, i) {
return _i_("3dab:ec3fdc27"), _r_(function(n) {
if (_i_("3dab:4378b8cc"), window.console && console.log && console.log([ e, t ].join(" "), n), i) {
var r = B.promise();
return r.reject(n), _r_(r);
}
return _r_(n);
});
};
return _r_(this.then(t("resolved - "), t("rejected - ", !0)));
}, booking.p0.prototype.finishChain = function() {
_i_("3dab:5bae8755"), this.then(null, function(e) {
_i_("3dab:7c70f02f"), e instanceof Error && setTimeout(function() {
throw _i_("3dab:ee91955f"), e;
}, 0), _r_();
}), _r_();
}, window.goog = {}, goog.inherits = B.tools.inherits, goog.base = B.tools.base, goog.abstractMethod = B.tools.abstractMethod, goog.addSingletonGetter = B.tools.addSingletonGetter, goog.isBoolean = function(e) {
return _i_("3dab:b053d4d7"), _r_("boolean" == typeof e);
}, goog.isNumber = function(e) {
return _i_("3dab:88fe115d"), _r_("number" == typeof e);
}, goog.isString = function(e) {
return _i_("3dab:21414a72"), _r_("string" == typeof e);
}, goog.isObject = function(e) {
_i_("3dab:f1c197da");
var t = typeof e;
return _r_("object" === t && null != e || "function" === t);
}, goog.isArray = function(e) {
return _i_("3dab:9875fb67"), _r_("array" === $.type(e));
}, goog.isFunction = function(e) {
return _i_("3dab:a6113fff"), _r_("function" === $.type(e));
}, function(e) {
_i_("3dab:5b58d10e"), e.ajaxSetup && e.ajaxSetup({
cache:!1,
beforeSend:function(t, i) {
if (_i_("3dab:64482896"), t.setRequestHeader("X-Booking-Pageview-Id", booking.env.pageview_id), t.setRequestHeader("X-Booking-AID", booking.env.aid || booking.env.b_aid), t.setRequestHeader("X-Booking-Session-Id", booking.env.b_sid), booking.env.b_site_type_id && t.setRequestHeader("X-Booking-SiteType-Id", booking.env.b_site_type_id), booking.env.b_partner_channel_id && t.setRequestHeader("X-Partner-Channel-Id", booking.env.b_partner_channel_id), booking.env.b_label && t.setRequestHeader("X-Booking-Label", encodeURIComponent(booking.env.b_label || "")), booking.env.b_csrf_token && t.setRequestHeader("X-Booking-CSRF", booking.env.b_csrf_token), booking.env.b_lang_for_url && t.setRequestHeader("X-Booking-Language-Code", booking.env.b_lang_for_url), booking.env.b_extra_ajax_headers) for (var n in booking.env.b_extra_ajax_headers) booking.env.b_extra_ajax_headers.hasOwnProperty(n) && t.setRequestHeader(n, booking.env.b_extra_ajax_headers[n]);
var r = booking.require("et"), a = r.tracked();
a && t.setRequestHeader("X-Booking-Client-Info", a);
var o = e("#req_info").html();
o && t.setRequestHeader("X-Booking-Info", o), _r_();
}
}), _r_();
}(window.jQuery), window.bookmark = function(e, t, i) {
if (_i_("3dab:6c4a3ae5"), window.sidebar && window.sidebar.addPanel) window.sidebar.addPanel(t, e, ""); else if (window.external) try {
window.external.AddToFavoritesBar(e, t);
} catch (n) {
window.external.AddFavorite(e, t);
} else window.opera && window.print && (i.title = t);
return _r_(!1);
}, window.addBookmark = function(e, t) {
_i_("3dab:34a5d9d5"), window.sidebar ? window.sidebar.addPanel(e, t, "") :document.all ? window.external.AddFavorite(t, e) :alert("Sorry your browser doesn't support this function\nTo bookmark this page\nWindows users press ctrl + D\nMac users press cmd + D"), _r_();
}, window.hideFrameContainer = function(e) {
if (_i_("3dab:5e6e61eb"), document.getElementById) {
var t = document.getElementById(e);
t.style.display = "none", document.getElementById("headline_newsletter").style.display = "block", document.getElementById("headline_createprofile").style.display = "none";
}
_r_();
}, window.changeHeadline = function() {
_i_("3dab:e2c3df8b"), document.getElementById("headline_newsletter").style.display = "none", document.getElementById("headline_createprofile").style.display = "block", _r_();
}, window.hideEl = function e(t) {
_i_("3dab:64ca03c8"), $.isArray(t) && $.each(t, function() {
_i_("3dab:598f743f"), e(this), _r_();
}), $("#" + t).hide(), _r_();
}, window.showEl = function(e) {
_i_("3dab:1a055500"), $("#" + e).show(), _r_();
}, window.showFrameContainer = function(e, t, i, n, r, a, o, _) {
if (_i_("3dab:0dbc06a1"), document.getElementById) {
var s = document.getElementById(e), d = document.getElementById(t), c = document.getElementById(i);
if ("block" === d.style.display) return d.style.display = "none", _r_(!1);
c.src !== n && (c.src = n), d.style.visibility = "hidden", d.style.display = "block";
var l = $(s).position() || {}, u = l.left, f = l.top;
o && (u += o), _ && (f += _), r || (r = d.offsetWidth);
var h = document.getElementById("bodyconstraint").offsetWidth;
return u + r > h && (u = h - r - 40), d.style.left = u + "px", d.style.top = f + "px", d.style.visibility = "visible", _r_(!1);
}
window.open(n), _r_();
}, window.sSc = function(e, t, i) {
_i_("3dab:8535804d"), document.getElementById && (document.getElementById("rsc_" + e).innerHTML = i), _r_();
}, window.sSc3 = function(e, t) {
_i_("3dab:36464334"), $("li[id^=" + e + "]").attr("style", "display: none; "), $("li[id^=" + t + "]").removeAttr("style"), _r_();
}, window.sSc2 = function(e, t, i) {
if (_i_("3dab:0e85e805"), document.getElementById) {
document.getElementById("rnr") && (document.getElementById("rnr").innerHTML = e);
for (var n = -1; 10 > n; n++) {
var r = document.getElementById("rl" + n);
r && (r.style.color = "", r.style.textDecoration = "underline");
}
t.style.color = "#003580", t.style.textDecoration = "none", t.blur(), $("#gr_profile_chooser ul").removeClass().addClass(i), $(".review_filter_sub").text($(t).find(".key").text());
var a;
a = "group" === i || "review_category_group_of_friends" === i ? "group_big" :"solo_traveller" === i ? "solo_big" :"family_with_young_children" === i || "review_category_family" === i ? "youngchildren_big" :"mature_couple" === i ? "maturecouple_big" :"family_with_older_children" === i ? "oldchildren_big" :"with_friends" === i ? "withfriends_big" :"young_couple" === i || "review_category_couple" === i ? "youngcouple_big" :"global_big", $(".review_user_type").attr("class", "review_user_type type_" + a);
}
_r_();
}, $(function() {
_i_("3dab:14fea715"), $(".newsletter_ajax_error").hide(), $('input#to[type="text"]').css({
backgroundColor:"#FFFFFF"
}), $('input#to[type="text"]').focus(function() {
_i_("3dab:8e5c9a06"), $(this).css({
color:"#003580"
}), this.value === this.defaultValue && (this.value = ""), this.value !== this.defaultValue && this.select(), _r_();
}), $("input.text-input").blur(function() {
_i_("3dab:99652df6"), $(this).css({
backgroundColor:"#FFFFFF"
}), _r_();
}), _r_();
}), function(e, t) {
_i_("3dab:c7527012"), t = t || {};
var i = e.console || {};
i.warn = i.warn || function() {};
var n = {
_list:{},
get:function(e) {
return _i_("3dab:5e0441bf"), _r_(n._list[e]);
},
set:function(e, t) {
_i_("3dab:090f4392"), e = e || "", t = t || "", "string" == typeof e && (e = e.replace(/^\s+|\s+$/g, "")), "string" == typeof t && (t = t.replace(/^\s+|\s+$/g, "")), e.length > 0 && "string" == typeof e || "string" != typeof e ? ("undefined" != typeof n._list[e] && i.warn("Booking Strings: replacing string with id: " + e), n._list[e] = t) :i.warn("Booking Strings: trying to insert string with empty id"), _r_();
}
}, r = function(e, t) {
return _i_("3dab:476528ff"), _r_(n["undefined" != typeof t ? "set" :"get"](e, t));
};
t.strings = r, t.strings.get = n.get, t.strings.set = n.set, _r_();
}(window, booking), B.define("search-config", [ "tmpl_data", "event-emitter" ], function(e, t, i) {
"use strict";
_i_("3dab:4d70dd49");
function n(e) {
if (_i_("3dab:e7f2ca2d"), !(this instanceof n)) return _r_(new n(e));
this.adults = Number(e.b_adults) || 0, this.children = Number(e.b_children) || 0, this.childrenAges = this.children ? e.b_children_ages.map(Number) :[], this.order = Number(e.b_room_order), _r_();
}
n.prototype.toString = function() {
_i_("3dab:961d1e29");
for (var e = [], t = 0; t < this.adults; t++) e.push("A");
return e = e.concat(this.childrenAges), _r_(e.join(","));
};
function r(r) {
_i_("3dab:acebdafe"), r === i && (r = e("b_search_config")), r ? this._set(r) :(this.isDefault = !0, this.isGroupSearch = !1, this.adults = 2, this.children = 0, this.rooms = [ n({
b_adults:2,
b_children:0,
b_children_ages:[],
b_room_order:1
}) ], this.childrenAges = [], this.tripLeg = "roundtrip", this.travelClass = "", this.infants = 0), t.extend(this), _r_();
}
return r.prototype._set = function(e) {
_i_("3dab:6843f385"), e.b_rooms || (e.b_rooms = []), this.isDefault = !1, this.isGroupSearch = Boolean(Number(e.b_is_group_search)), this.adults = Number(e.b_adults_total), this.children = Number(e.b_children_total) || 0, this.infants = Number(e.b_infants_total) || 0, this.pets = Number(e.b_pets_total) || 0, this.rooms = e.b_rooms.map(n), this.childrenAges = this.rooms.reduce(function(e, t) {
return _i_("3dab:3ec3ada4"), _r_(e.concat(t.childrenAges));
}, []), 0 == this.rooms.length && this.children > 0 && e.b_children_ages_total && (this.childrenAges = e.b_children_ages_total), this.childrenAges.sort(), this.travelClass = e.travel_class ? e.travel_class :"", this.tripLeg = e.trip_leg ? e.trip_leg :"roundtrip", _r_();
}, r.prototype.set = function(e) {
_i_("3dab:ac19c19f"), this._set(e), this.emit("change"), _r_();
}, r.prototype.toArray = function(e) {
return _i_("3dab:ad251652"), _r_(e ? new r(e).toArray() :this.rooms.map(Function.prototype.call, n.prototype.toString));
}, r.prototype.toObject = function(e) {
return _i_("3dab:4783e94e"), _r_(this.toArray(e).reduce(function(e, t, i) {
return _i_("3dab:074a9374"), e["room" + (i + 1)] = t, _r_(e);
}, {}));
}, r.prototype.getRawValue = function() {
return _i_("3dab:548cb758"), _r_({
b_adults_total:this.adults,
b_nr_rooms_needed:this.rooms.length,
b_children_total:this.children,
b_children_ages_total:this.childrenAges,
b_is_group_search:this.isGroupSearch ? 1 :0,
b_pets_total:this.pets,
b_rooms:this.rooms.map(function(e) {
_i_("3dab:ae9e70ac");
var t = {
b_adults:e.adults,
b_room_order:e.order
};
return e.children && (t.b_children = e.children, t.b_children_ages = e.childrenAges), _r_(t);
})
});
}, _r_(new r());
}), booking.formatter = booking.formatter || {}, booking.formatter.date = B.require("formatting/date").compat, B.define("fragment", [ "jquery", "promise" ], function(e, t) {
_i_("3dab:b90971cd");
var i, n, r = B.debug("fragment"), a = 15, o = 200, _ = 50, s = 0, d = [], c = function() {
_i_("3dab:db8e41a3");
var t, i, n = [], a = !0;
if (1 === d.length) i = d[0], (i.args.tmpl || i.args.async_component) && (a = !1), t = Object.assign({
name:i.name
}, i.args), n.push(i); else {
for (var o = {}, _ = 0, s = d.length; s > _; _++) i = d[_], n.push(i), i.name in o || (o[i.name] = {}), o[i.name][i.id] = i.args;
t = {
batch:JSON.stringify(o)
};
}
var c = a ? B.env.b_fragment_url_json :B.env.b_fragment_url_html;
d = [], r.info("Request", c, t), e.ajax({
url:c,
data:t,
type:"POST",
cache:!1
}).done(function(e) {
_i_("3dab:fcef9659"), r.info("Resolve", e, n);
var t = function(e, t) {
_i_("3dab:219ff66e"), t && "object" == typeof t && "status" in t && "data" in t ? t.status >= 200 && t.status < 300 ? e.resolve(t.data) :e.reject(t.status) :e.resolve(t), _r_();
};
if (1 === n.length) t(n[0], e); else for (var i, a = 0, o = n.length; o > a; a++) {
if (i = n[a], !e[i.name]) {
i.resolve(void 0);
continue;
}
t(i, e[i.name][i.id]);
}
(B.env.b_dev_server || B.env.dev_server) && f(e), _r_();
}).fail(function(e) {
_i_("3dab:344e4324"), r.info("Reject", e, n);
for (var t = 0, i = n.length; i > t; t++) n[t].reject();
_r_();
}), _r_();
}, l = function(e, r) {
if (_i_("3dab:35903f34"), !e) throw new Error("Fragment name cannot be undefined.");
return _r_(new t(function(t, l) {
_i_("3dab:d2ca29a7"), clearTimeout(n), 0 === d.length && (i = Date.now()), d.push({
id:"frg-" + s++,
name:e,
args:r,
resolve:t,
reject:l
}), d.length > 1 && Date.now() - i > o || d.length === _ ? c() :n = setTimeout(c, a), _r_();
}));
}, u = function(e) {
_i_("3dab:e18fcd7e");
var t = {};
if (e) for (var i in e) if (e.hasOwnProperty(i)) {
var n = e[i];
t[i] = "object" == typeof n ? JSON.stringify(n) :n;
}
return _r_(t);
}, f = function(e) {
_i_("3dab:2a26a8c8");
var t = B.require("events"), i = B.devTools && B.devTools.trackedExperiments || [], n = {};
"object" == typeof e && (B.devTools = B.devTools || {}, i = i.concat(e._exp_debug_data)), window.B.devTools.trackedExperiments = i.reduce(function(e, t, i) {
return _i_("3dab:72064c76"), "undefined" != typeof t && (isNaN(n[t.name]) ? (n[t.name] = e.length, e.push(t)) :e[n[t.name]].name == t.name ? e[n[t.name]].trackingPoints = e[n[t.name]].trackingPoints.concat(t.trackingPoints) :console.warn("ops", e[n[t.name]].name, t.name)), _r_(e);
}, []), t.trigger("TRACKING.exp_tracking_update"), _r_();
}, h = function(e, t) {
return _i_("3dab:3d319043"), _r_(l(e, u(t)));
};
return _r_({
call:h
});
}), B.define("images", function(e, t, i) {
"use strict";
_i_("3dab:24bf386d");
var n = e("promise");
function r(e) {
return _i_("3dab:2eb9f03e"), _r_(new n(function(t, i) {
_i_("3dab:43d6da4a");
var n = new Image();
n.onload = function() {
_i_("3dab:6e7b4063"), t(e), _r_();
}, n.onerror = function() {
_i_("3dab:a5362b72"), i(e), _r_();
}, n.src = e, _r_();
}));
}
i.exports = {
getImage:r
}, _r_();
}), B.env.b_tech_no_sns ? !function(e, t, i) {
_i_("3dab:ed4ddff8");
var n = i(document), r = {
mouseenter:"hover",
click:"click"
};
n.on("click mouseenter mouseleave", "[data-google-track]", function(e) {
_i_("3dab:1464bef3");
var t = (i(this).data("google-track") || "").split("/"), n = B.require("ga-tracker");
t[0].toLowerCase() === r[e.type] && n.trackEvent.apply(n, t), _r_();
}), B.env.b_new_ga_track || n.delegate("[data-ga-track]", "click", function(e) {
_i_("3dab:d1f627b8");
var t = B.require("ga-tracker"), n = (i(this).data("ga-track") || "").split(":");
n[0].toLowerCase() === r[e.type] && t.trackPageview.apply(t, n), _r_();
}), t.env.b_occupancy = function() {
_i_("3dab:b752eb37");
var e, i, n, r, a = t.env.b_group, o = 0, _ = 0, s = {
adults:2,
children:0,
guests:2
};
if ("[object Array]" !== Object.prototype.toString.apply(a)) return _r_(s);
if (i = a.length, n = a[0], r = i > 1 || 1 === i && (1 === n.guests || n.guests > 2 || n.children > 0), !r) return _r_(s);
for (e = 0; i > e; e += 1) n = a[e], o += n.guests, _ += n.children;
return _r_({
adults:o,
children:_,
guests:o + _
});
}(), t.eventEmitter = i(e), _r_();
}(window, window.booking, window.jQuery) :!function(e, t, i) {
_i_("3dab:f2363096");
var n, r = "experiments", a = "startup", o = "experiments_load", _ = "startup_load", s = t.env, d = s && s.b_site_type_id || "", c = i(document), l = s && s.reportJSTracking || !1, u = function(e) {
return _i_("3dab:7ff5e004"), _r_("function" == typeof e);
}, f = function(e) {
_i_("3dab:c1f5122c");
var i = "b_site_experiment_" + e, n = t.jst && t.jst[e] > 0;
return _r_(i in s && +s[i] > 0 || n);
}, h = t.require("request_info");
t.ensureNamespaceExists(r), t.ensureNamespaceExists(a), t.ensureNamespaceExists(o), t.ensureNamespaceExists(_), n = t[a], n.init = function(e) {
_i_("3dab:c706b8c9");
var n, d, c, l, h, b, p, g, m, v, y, w, k, B = [], M = 9, x = "ready" === e;
if (t.env.b_inc_filters) {
var C = t.env.b_inc_filters;
for (var E in C) {
var T = C[E];
for (var S in T) t.jst[S] = T[S];
}
}
n = x ? r :o, c = t[n];
for (var A in c) {
if (t.b_disable_run && isNaN(s["b_site_experiment_" + A]) && t.jst && void 0 === t.jst[A]) continue;
c[A] && B.push([ c[A].priority || M, A, n, !f(A) ]);
}
d = x ? a :_, l = t[d];
for (h in l) v = l[h], B.push([ v.priority || M, h, d, !1 ]);
if (B.length > 0) for (B.sort(), w = 0, k = B.length; k > w; w += 1) b = B[w], p = b[1], g = b[2], v = t[g][p], i.extend(v, {
strings:t.strings
}), m = b[3] ? v.initElse :v.init, v.ns = "booking." + g, v.name = p, u(m) && setTimeout(function(e, t, i) {
return _i_("3dab:e38625eb"), _r_(function() {
_i_("3dab:433f8fc2"), y = e.execute(t, i), y === !0 && (i.init = i.initElse = null), _r_();
});
}(this, m, v), 0);
i(document).trigger(e + ":finished"), _r_();
}, n.execute = function(e, t) {
return _i_("3dab:7c09da81"), _r_(e.call(t));
}, s.amTracking = [], function() {
_i_("3dab:7d13348b");
var n = Object.prototype.toString, r = Array.prototype.slice, a = i(e), o = i(document), _ = function(e, t) {
_i_("3dab:6157e3b1");
try {
a.trigger(e, t);
} catch (i) {}
_r_();
}, c = {
css:jQuery.fn.css,
show:jQuery.fn.show,
hide:jQuery.fn.hide,
toggle:jQuery.fn.toggle
}, u = {
show:/block|inline|list-item|inline-block/,
hide:/none/
};
jQuery.fn.css = function(e, t) {
_i_("3dab:10240a9c");
var i = c.css.apply(this, r.apply(arguments));
return this.selector && ("undefined" != typeof t && "display" === e ? _("ELEMENT_DISPLAY:" + this.selector, {
elem:this,
value:t
}) :"[object Object]" === n.apply(e) && "display" in e && _("ELEMENT_DISPLAY:" + this.selector, {
elem:this,
value:e.display
})), _r_(i);
}, i.each("show hide toggle".split(" "), function(e, t) {
_i_("3dab:2cbbfa5b"), jQuery.fn[t] = function() {
_i_("3dab:44929723");
var e = c[t].apply(this, r.apply(arguments));
return this.selector && _("ELEMENT_DISPLAY:" + this.selector, {
elem:this,
value:this.css("display")
}), _r_(e);
}, _r_();
});
var f, b, p, g, m = [], v = [], y = [], w = [], k = s.b_action || "fixme";
p = function() {
_i_("3dab:22062ca3"), g = !1, _r_();
}, b = function() {
_i_("3dab:fa07224d");
var n, r, o = "", _ = "";
if (f = !1, g || t.sending_logo) return f = setTimeout(b, 50), _r_();
if (m.length > 0 || v.length > 0 || y.length > 0 || w.length > 0) {
if (g = !0, a.trigger("ClickTale:TrackDynamic", {
experiments:m
}), n = v.length ? ";what=" + v.join(",") :"", y.length) {
o = ";custom=";
for (var c = 0, u = y.length; u > c; c++) o += y[c].join("|"), u > c + 1 && (o += ",");
}
if (w.length) {
_ = ";stage=";
for (var c = 0, u = w.length; u > c; c++) _ += w[c].join("|"), u > c + 1 && (_ += ",");
}
h.populate(m), h.populate(w.map(function(e) {
return _i_("3dab:715adcbe"), _r_(e.join("|"));
}));
var M = "/js_tracking?ver=1" + n + o + _ + ";ref_action=" + k + ";sid=" + s.b_sid + ";aid=" + s.b_aid + ";lang=" + s.b_lang_for_url + ";new=1;pid=" + s.pageview_id + ";exps=" + m.join(",") + ";stype=" + d;
try {
i.ajax({
url:M,
async:!0,
type:"GET",
complete:p
});
} catch (x) {
r = new Image(), r.onload = r.onerror = p, r.src = M, l && (l = !1, e.onerror("3rd_js_tracking_report: " + M, M, 1));
}
B.devTools && B.devTools.trackedExperimentsFilter && B.eventEmitter.trigger("TRACKING.js_exp_tracking_request", {
exps:m,
jsGoals:v,
jsCustomGoals:y,
jsStages:w
}), s.b_js_tracking_info_to_console && e.console && (m.length && e.console.info("JS exp tracking triggered: " + m.join(", ")), v.length && e.console.info("JS goal tracking triggered: " + v.join(", ")), y.length && e.console.info("JS custom goal tracking triggered: " + y.join(", ")), w.length && e.console.info("JS stage tracking triggered: " + w.join(", "))), m = [], v = [], y = [], w = [];
}
_r_();
}, t.track = {
exp:function() {
_i_("3dab:1471e2de"), t.squeak("VKcAdRWSEFQBBTcO"), _r_();
},
stage:function() {
_i_("3dab:1471e2de1"), t.squeak("VKcAdRWSEFQBBTcO"), _r_();
},
goal:function() {
_i_("3dab:1471e2de2"), t.squeak("VKcAdRWSEFQBBTcO"), _r_();
},
custom_goal:function() {
_i_("3dab:1471e2de3"), t.squeak("VKcAdRWSEFQBBTcO"), _r_();
},
getVariant:function() {
_i_("3dab:1471e2de4"), t.squeak("VKcAdRWSEFQBBTcO"), _r_();
},
onView:function() {
_i_("3dab:1471e2de5"), t.squeak("VKcAdRWSEFQBBTcO"), _r_();
},
onNav:function() {
_i_("3dab:1471e2de6"), t.squeak("VKcAdRWSEFQBBTcO"), _r_();
}
}, i.each("blur change click dblclick mouseover mouseout".split(" "), function(e, n) {
_i_("3dab:102b46d3");
var a = n.slice(0, 1), _ = n.replace(a, a.toUpperCase());
t.track[n] = t.track["on" + _] = function(e) {
_i_("3dab:40065c27");
var a = i(e), o = function() {
_i_("3dab:f02733b9");
var e = r.apply(arguments), o = e.shift(), _ = i.proxy(function() {
_i_("3dab:61404d73"), o.apply(t.track, this.args), a.unbind(n, _), _r_();
}, {
args:e
});
a.bind(n, _), _r_();
};
return _r_({
exp:function() {
_i_("3dab:7e51fb4c");
var e = r.apply(arguments);
e.unshift(t.track.exp), o.apply(t.track, e), _r_();
},
stage:function() {
_i_("3dab:5edfb836");
var e = r.apply(arguments);
e.unshift(t.track.stage), o.apply(t.track, e), _r_();
}
});
}, t.track["live" + _] = function(e) {
_i_("3dab:131b4b4d");
var a = function() {
_i_("3dab:a45ea2a3");
var a = r.apply(arguments), _ = a.shift(), s = i.proxy(function() {
_i_("3dab:050689a7"), _.apply(t.track, this.args), o.undelegate(e, n, s), _r_();
}, {
args:a
});
o.delegate(e, n, s), _r_();
};
return _r_({
exp:function() {
_i_("3dab:d5783c2b");
var e = r.apply(arguments);
e.unshift(t.track.exp), a.apply(t.track, e), _r_();
},
stage:function() {
_i_("3dab:16074aaf");
var e = r.apply(arguments);
e.unshift(t.track.stage), a.apply(t.track, e), _r_();
}
});
}, _r_();
}), i.each("show hide".split(" "), function(e, n) {
_i_("3dab:5af07374"), t.track[n] = function(e) {
_i_("3dab:8fdf7537");
var o = i(e);
if (!o.selector) return _r_({
exp:function() {},
stage:function() {}
});
var _ = function() {
_i_("3dab:a266a659");
var e = r.apply(arguments), _ = e.shift(), s = i.proxy(function(e, i) {
_i_("3dab:23c06da8"), u[n].test(i.value) && (i.elem.selector === o.selector || 1 === o.length && i.elem[0] === o[0]) && (_.apply(t.track, this.args), a.unbind("ELEMENT_DISPLAY:" + o.selector, s)), _r_();
}, {
args:e
});
a.bind("ELEMENT_DISPLAY:" + o.selector, s), _r_();
};
return _r_({
exp:function() {
_i_("3dab:6fbc3fd0");
var e = r.apply(arguments);
e.unshift(t.track.exp), _.apply(t.track, e), _r_();
},
stage:function() {
_i_("3dab:611e2c42");
var e = r.apply(arguments);
e.unshift(t.track.stage), _.apply(t.track, e), _r_();
}
});
}, _r_();
}), i.each("blur change click dblclick mouseover mouseout".split(" "), function(e, n) {
_i_("3dab:4f952b15");
var r = "[data-track-on-" + n + "]", a = function() {
_i_("3dab:7c0853c6"), t.track.exp.call(t.track, i(this).data("track-on-" + n) + ""), _r_();
};
o.delegate(r, n, a), _r_();
});
var M = {
mouseenter:"hover",
click:"click"
};
o.on("click mouseenter mouseleave", "[data-google-track]", function(e) {
_i_("3dab:164d94cf");
var n = (i(this).data("google-track") || "").split("/"), r = t.require("ga-tracker");
n[0].toLowerCase() === M[e.type] && r.trackEvent.apply(r, n), _r_();
}), B.env.b_new_ga_track || o.delegate("[data-ga-track]", "click", function(e) {
_i_("3dab:d9c87e61");
var n = t.require("ga-tracker"), r = (i(this).data("ga-track") || "").split(":");
r[0].toLowerCase() === M[e.type] && n.trackPageview.apply(n, r), _r_();
}), _r_();
}(), s.trackExperiment = function() {
_i_("3dab:29e632db"), t.track.exp.apply(this, Array.prototype.slice.apply(arguments)), _r_();
}, i(function() {
_i_("3dab:8c1ac734"), c.trigger("ready:before"), t[a].init("ready"), _r_();
}), i(e).on("load", function() {
_i_("3dab:4e070eae"), t[a].init("load"), _r_();
}), t.run = function(e) {
return _i_("3dab:bf5d8e76"), _r_({
afterReady:function(e) {
_i_("3dab:be191b30"), this.onReady(function() {
_i_("3dab:82074dc1"), c.bind("ready:finished", e), _r_();
}), _r_();
},
onReady:function(i) {
_i_("3dab:b32e5996"), t[a][e] = {
priority:9,
init:i
}, _r_();
},
onLoad:function(i) {
_i_("3dab:628246e7"), t[_][e] = {
priority:9,
init:i
}, _r_();
}
});
}, t.runExp = function(e) {
return _i_("3dab:22672ef9"), _r_({
beforeReady:function(e) {
_i_("3dab:83a8bc0a"), c.bind("ready:before", e), _r_();
},
afterReady:function(e) {
_i_("3dab:be191b301"), this.onReady(function() {
_i_("3dab:82074dc11"), c.bind("ready:finished", e), _r_();
}), _r_();
},
onReady:function(i) {
_i_("3dab:393eb221"), t[r][e] = {
priority:9,
init:i
}, _r_();
},
afterLoad:function(e) {
_i_("3dab:387c98f4"), this.onLoad(function() {
_i_("3dab:08ef32f4"), c.bind("load:finished", e), _r_();
}), _r_();
},
onLoad:function(i) {
_i_("3dab:b6a190c7"), t[o][e] = {
priority:9,
init:i
}, _r_();
}
});
}, t.env.b_occupancy = function() {
_i_("3dab:ad155e28");
var e, i, n, r, a = t.env.b_group, o = 0, _ = 0, s = {
adults:2,
children:0,
guests:2
};
if ("[object Array]" !== Object.prototype.toString.apply(a)) return _r_(s);
if (i = a.length, n = a[0], r = i > 1 || 1 === i && (1 === n.guests || n.guests > 2 || n.children > 0), !r) return _r_(s);
for (e = 0; i > e; e += 1) n = a[e], o += n.guests, _ += n.children;
return _r_({
adults:o,
children:_,
guests:o + _
});
}(), t.eventEmitter = i(e), e.sNSExperiments = r, e.sNSStartup = a, e.sNSExperimentsLoad = o, e.sNSStartupLoad = _, _r_();
}(window, window.booking, window.jQuery), B.define("component", function() {
"use strict";
_i_("3dab:54b5afef");
function e() {}
return e.prototype.prepare = function(e) {
_i_("3dab:c3a19528");
for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
_r_();
}, e.prototype.init = function() {}, e.prototype.destroy = function() {}, e.prototype.render = function() {}, e.extend = function(t, i) {
_i_("3dab:7cd29073");
var n = function() {}, r = i ? new i() :new e();
for (var a in t) t.hasOwnProperty(a) && (r[a] = t[a]);
return n.prototype = r, n.extend = function(t) {
return _i_("3dab:5d973ff6"), _r_(e.extend.call(null, t, n));
}, _r_(n);
}, _r_(e);
}), B.define("component/legacy", function(e, t, i) {
"use strict";
_i_("3dab:5eac3804");
var n = {};
function r(e, t) {
_i_("3dab:8f1f98f7"), t.legacy = !0, B.define("component/" + e, function() {
return _i_("3dab:bb152c39"), _r_(t);
}), _r_();
}
function a(e, t, i) {
_i_("3dab:f951c395");
var r = B.require("component/" + e);
if (!r.legacy) throw new Error("Illegal legacy B.components.require of non-legacy component " + e + ".");
var a = t ? t.data("component-instance-" + e) :n[e];
return (i || void 0 === a) && (a = "function" == typeof r ? new r(B, $) :library[e], i || (t ? t.data("component-instance-" + e, a) :n[e] = a, a.init && a.init(t))), _r_(a);
}
function o(e) {
_i_("3dab:e41243a1");
for (var t, i = 1, n = arguments.length; n > i; i++) t = a(arguments[i], void 0, !0), t.extend ? t.extend(e) :$.extend(e, t);
_r_();
}
function _(e, t) {
_i_("3dab:f32c9b7c");
var i = a(t, void 0, !0);
$.extend(e, i, {
parent:i
}), _r_();
}
t.register = function(e) {
_i_("3dab:c9ee3103"), e.components = e.components || {}, e.components.define = r, e.components.extend = o, e.components.inherit = _, e.components.require = a, _r_();
}, _r_();
}), B.define("component/loader", function(e, t, i) {
"use strict";
_i_("3dab:b066168d");
var n = e("jquery");
function r(t, i) {
_i_("3dab:f4311e97");
var r = e("component/" + t), a = i.data("component-instance-" + t);
if ("function" != typeof r) throw new Error("component/" + t + " is not a constructor");
return void 0 === a && (r.legacy ? (a = new r(B, n), a.init && a.init(i)) :(a = new r(), a.prepare({
el:i[0],
$el:i
}), a.init && a.init()), i.data("component-instance-" + t, a)), _r_(a);
}
function a(t, i) {
_i_("3dab:60d64b1c");
var n = o(i[0]);
n ? setTimeout(function() {
_i_("3dab:61e1e386");
var a = e("async-loader");
a.load(n).then(function() {
_i_("3dab:50fef3c2"), r(t, i), _r_();
}), _r_();
}, 4) :setTimeout(r.bind(null, t, i), 4), _r_();
}
function o(e) {
_i_("3dab:83029d99");
var t, i = e.getAttribute("data-async-css"), n = e.getAttribute("data-async-js");
if (i || n) return t = {}, i && (t.css = i), n && (t.js = n), _r_(t);
return _r_(!1);
}
function _(e) {
if (_i_("3dab:522790a7"), 0 == this.length) throw new Error("No element found with selector, unable to look for component.");
if (1 != this.length) throw new Error("Multiple elements found with selector, refusing to look for component.");
return _r_(r(e, this));
}
function s() {
return _i_("3dab:890426f2"), t.loadComponents(this), e("et").initAttributesTracking(this), _r_(this);
}
t.loadComponents = function(e) {
_i_("3dab:4b140a04");
var t, i, r, o, _, s, d;
e = e || n("html");
var _ = e.find("[data-component]");
for (e.is("[data-component]") && (_ = e.length > 1 ? _.add(e) :_.add(e.filter("[data-component]"))), t = 0, r = _.length; r > t; t++) for (s = _.eq(t), d = n.trim(s.attr("data-component")).split(/\s+/g), i = 0, o = d.length; o > i; i++) a(d[i], s);
_r_();
}, t.getComponent = function(e, t) {
_i_("3dab:07ebab98");
var i, r = n(e);
if (t && r.data("component-instance-" + t)) return _r_(r.data("component-instance-" + t));
return i = r.attr("data-component"), _r_(i ? r.data("component-instance-" + i) :null);
}, t.registerJQuery = function() {
_i_("3dab:e015de72"), n.fn.component = _, n.fn.loadComponents = s, _r_();
}, _r_();
}), function(e, t) {
"use strict";
_i_("3dab:8669ba1e");
var i = e.require("component/loader"), n = e.require("component/legacy");
i.registerJQuery(), n.register(e), window.sNSStartup && e[sNSStartup] && !e.env.b_tech_no_sns ? e[sNSStartup].bComponents = {
priority:100,
init:i.loadComponents
} :t(function() {
_i_("3dab:971d97d5"), i.loadComponents(), _r_();
}), _r_();
}(booking, jQuery), function() {
_i_("3dab:5b633e84");
var e = B.require("jquery"), t = {
popups:[],
tempTar:null,
sizes:{
s:{
width:300,
height:400
},
m:{
width:400,
height:400
},
l:{
width:600,
height:580
},
xl:{
width:850,
height:600
}
},
init:function() {
_i_("3dab:ddc9778b");
var t = this;
e(document).on("click.popup_win", ".popup_s, .popup_m, .popup_l, .popup_xl", function() {
_i_("3dab:caaaaaa6");
for (var i = "l", n = e(this).attr("class").split(" "), r = 0; r < n.length; r++) n[r].indexOf("popup_") > -1 && (i = n[r].split("_")[1]);
return t.tempTar = e(this).attr("href") || e(this).data("url"), t.openPopup(i), _r_(!1);
}), _r_();
},
openPopup:function(e) {
_i_("3dab:184459e5");
var t = this.sizes[e];
this.popups.push(window.open(this.tempTar, "", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=" + t.width + ",height=" + t.height + ",left=200,top=200")), this.popups.length > 1 && (this.popups[0].close(), this.popups.shift(), this.tempTar = null), _r_();
}
};
B.when({
events:"ready"
}).run(function() {
_i_("3dab:31eef147"), t.init(), _r_();
}), _r_();
}(), B.define("component/fragment", function(e, t, i) {
_i_("3dab:15924748");
var n = e("component"), r = e("fragment"), a = e("events"), o = e("when"), _ = e("et");
i.exports = n.extend({
fragmentName:void 0,
fragmentTemplate:void 0,
fragmentIsCS:void 0,
fragmentArgs:{},
init:function() {
_i_("3dab:7cdefc33");
var e = void 0 !== this.$el.attr("data-fragment-lazy"), t = this.$el.attr("data-fragment-event") || !1;
e ? (this._fragmentId = this.$el.attr("id"), this._fragmentOnActivateFragment = this._fragmentOnActivateFragment.bind(this), a.on("ACTIVATE_FRAGMENT", this._fragmentOnActivateFragment)) :t ? this._loadWithWhen(t) :this.fragmentLoadFragment(), _r_();
},
_fragmentOnActivateFragment:function(e) {
_i_("3dab:208f035e"), e && e.id && e.id === this._fragmentId && (a.off("ACTIVATE_FRAGMENT", this._fragmentOnActivateFragment), this.fragmentLoadFragment()), _r_();
},
_loadWithWhen:function(e) {
_i_("3dab:86987240"), o({
events:e
}).run(function() {
_i_("3dab:55d7f6cb"), this.fragmentLoadFragment(), _r_();
}.bind(this)), _r_();
},
fragmentParamAttrs:function() {
_i_("3dab:d4c7c1cb");
for (var e, t, i = {}, n = this.el.attributes, r = 0, a = n.length; a > r; r++) e = n[r], t = e.nodeName, t && t.length > 5 && 0 === t.indexOf("data-param-") && (i[t.slice(11)] = e.nodeValue);
return _r_(i);
},
fragmentLoadFragment:function() {
_i_("3dab:d02f2dc1");
var e = this.fragmentParamAttrs(), t = this.$el.attr("data-fragment-source"), i = this.$el.attr("data-fragment-name");
void 0 === i && (i = this.fragmentName);
var n, r, a = this.$el.attr("data-fragment-tmpl"), o = this.$el.attr("data-fragment-cs-tmpl");
void 0 !== a && void 0 !== o && B.env.b_is_dev_server && console.error("Fragment component cannot have both `fragment-tmpl` and `fragment-cs-tmpl` defined."), void 0 !== a ? (r = a, n = !1) :void 0 !== o ? (r = o, n = !0) :(r = this.fragmentTemplate, n = this.fragmentIsCS);
var _ = Object.assign({}, this.fragmentArgs, e), s = {
soruce:t,
tmpl:r,
isCS:n,
args:_
};
if (!1 !== this.fragmentBeforeRequest(s)) {
_ = s.args, !n && r && (_.tmpl = r);
var d = this;
this.fragmentRequest(i, _).then(function(e) {
_i_("3dab:695f2fa5");
var i = {
source:t,
data:e,
ctx:{},
args:_
};
if (!1 !== d.fragmentBeforeRender(i) && r) {
var a;
a = n ? B.jstmpl(r).render(Object.assign(i.ctx, i.data ? {
data:i.data
} :{})) :i.data || "", i.$targetEl ? i.$targetEl.html(a) :d.$el.html(a), d.fragmentAfterRender(i);
}
_r_();
}, function(e) {
_i_("3dab:bd46ed7d");
var i = {
source:t,
error:e
};
d.fragmentRequestError(i), _r_();
});
}
_r_();
},
fragmentRequest:function(e, t) {
return _i_("3dab:9e2ce248"), _r_(r.call(e, t));
},
fragmentBeforeRequest:function() {},
fragmentRequestError:function() {},
fragmentBeforeRender:function() {},
fragmentAfterRender:function() {
_i_("3dab:874720f7"), _.initAttributesTracking(this.$el), this.$el.loadComponents && this.$el.loadComponents(), _r_();
}
}), _r_();
}), booking.components.define("sh", function(e, t) {
"use strict";
_i_("3dab:c2634bf0");
var i = "SH", n = t(window);
function r(t) {
_i_("3dab:2acf8ef3"), t.map(function(t) {
_i_("3dab:a9e01c97"), e.eventEmitter.triggerHandler(i + ":" + t), _r_();
}), _r_();
}
function a(e) {
return _i_("3dab:bb687f1a"), _r_(n.scrollTop() + n.height() > e);
}
this.init = function(e) {
_i_("3dab:e351c827");
var i = e.offset().top, o = function() {
_i_("3dab:5e37c483"), a(i) && (r([ "seen" ]), n.unbind("scroll", o)), _r_();
};
n.bind("scroll", o), e.delegate(".lp-search-history-list-item", "click", function(e) {
_i_("3dab:ba29c0b1");
var i = t(this), n = i.find(".lp-search-history-list-item-link");
if (!n.length) return _r_();
var a = i.get(0).className.match(/sh-timestamp[^ \n]*/g) || [];
a.push("clicked"), r(a), _r_();
}), e.find(".lp-sh-hide-search").bind("click", function(e) {
_i_("3dab:b06611e3"), r([ "removed" ]), _r_();
}), o(), _r_();
}, _r_();
}), B.define("user-left-client", function(e, t, i) {
"use strict";
_i_("3dab:59bcdf18");
var n = e("user-left-tab"), r = e("user-left-store"), a = e("utils/simple-unique-id"), o = "lastSeen";
i.exports = {
enabled:r.enabled,
onHideTab:function(e) {
_i_("3dab:94242728"), r.set(o, new Date().getTime()), _r_();
},
onShowTab:function(e) {
_i_("3dab:f80c973e"), r.set(o, 0), _r_();
},
addEventListeners:function() {
_i_("3dab:5ef8545b"), this._onShowTab = this.onShowTab.bind(this), this._onHideTab = this.onHideTab.bind(this), n.addListener("show", this._onShowTab), n.addListener("hide", this._onHideTab), _r_();
},
removeEventListeners:function() {
_i_("3dab:98384402"), this._onShowTab && n.removeListener("show", this._onShowTab), this._onHideTab && n.removeListener("hide", this._onHideTab), _r_();
},
register:function(e) {
_i_("3dab:13593386"), this.tabId = e + "_" + a(), this.addEventListeners(), _r_();
}
}, _r_();
}), B.define("user-left-master", function(e, t, i) {
_i_("3dab:6cd04fc3");
var n = e("event-emitter"), r = e("user-left-tab"), a = e("user-left-store"), o = e("utils/simple-unique-id"), _ = "lastSeen", s = booking.env.bp_has_left_threshold ? booking.env.bp_has_left_threshold :7, d = 1e3, c = "(1) ";
i.exports = n.extend({
enabled:a.enabled,
didUserLeft:function() {
if (_i_("3dab:84ceaa3d"), this.halt) return _r_();
this.checkSessionMarker() || (this.stopCounting(), this.removeEventListeners());
var e = parseInt(a.get(_), 10);
if (!e) return _r_();
var t = new Date().getTime(), i = (t - e) / 1e3;
i >= s && (this.stopCounting(), this.showNotification()), _r_();
},
removeNotification:function() {
_i_("3dab:0471214a"), this.originalFavicon && this.changeFavicon(this.originalFavicon), document.title = this.originalTitle, _r_();
},
changeFavicon:function(e) {
_i_("3dab:4d1c4104"), this.$favicon && this.$favicon.attr("href", e), _r_();
},
setNotifyFavicon:function(e) {
_i_("3dab:6282194d"), this.$favicon = $('link[rel="shortcut icon"]').first(), this.$favicon.length && (this.originalFavicon = this.$favicon.attr("href"), this.notifyFavicon = e), _r_();
},
setNotificationStatus:function(e) {
_i_("3dab:49bdade0"), this.notificationStatus = e === !1 ? !1 :!0, _r_();
},
showNotification:function() {
_i_("3dab:ce88ee18"), this.notified = !0, this.notificationStatus !== !1 && (this.notifyFavicon && this.changeFavicon(this.notifyFavicon), document.title = c + document.title), _r_();
},
startCounting:function() {
if (_i_("3dab:e4bd9b87"), this.notified) return _r_();
this.halt = !1, this.counterId = setInterval(this.didUserLeft.bind(this), d), _r_();
},
stopCounting:function() {
_i_("3dab:9eb8dc8d"), this.halt = !0, clearInterval(this.counterId), _r_();
},
onShowTab:function(e) {
_i_("3dab:04d1e8a3"), this.stopCounting(), a.set(_, 0), this.notified && !this.cameBack && (this.cameBack = !0, this.removeEventListeners(), this.removeNotification(), this.trigger("back")), _r_();
},
onHideTab:function(e) {
_i_("3dab:d00b964d"), a.set(_, new Date().getTime()), this.startCounting(), _r_();
},
addEventListeners:function() {
_i_("3dab:7814d1cc"), this._onShowTab = this.onShowTab.bind(this), this._onHideTab = this.onHideTab.bind(this), r.addListener("show", this._onShowTab), r.addListener("hide", this._onHideTab), _r_();
},
removeEventListeners:function() {
_i_("3dab:61702491"), this._onShowTab && r.removeListener("show", this._onShowTab), this._onHideTab && r.removeListener("hide", this._onHideTab), _r_();
},
setSessionMarker:function() {
if (_i_("3dab:1f335348"), !booking.browserStorageHandler) return _r_();
booking.browserStorageHandler.addPermanentValue(this.sessionMarkerKey, this.tabId, !1), _r_();
},
checkSessionMarker:function() {
if (_i_("3dab:c33202df"), this.tabId != booking.browserStorageHandler.getPermanentValue(this.sessionMarkerKey, !1)) return _r_(!1);
return _r_(!0);
},
register:function(e, t) {
_i_("3dab:b9327949"), this.originalTitle = document.title, this.tabId = e + "_" + o(), this.sessionMarkerKey = t, this.setSessionMarker(), a.set(_, 0), this.addEventListeners(), _r_();
}
}), _r_();
}), B.define("user-left-store", function(e, t, i) {
"use strict";
_i_("3dab:5be6fe9e");
var n = e("jquery");
i.exports = {
enabled:1,
encode:function(e) {
return _i_("3dab:803f6de1"), _r_(e);
},
decode:function(e) {
return _i_("3dab:803f6de11"), _r_(e);
},
get:function(e) {
return _i_("3dab:ee50ccac"), _r_(this.decode(n.cookie(e)));
},
set:function(e, t) {
return _i_("3dab:470a89b3"), _r_(n.cookie(e, this.encode(t), {
expires:null,
path:"/",
domain:"booking.com"
}));
}
}, _r_();
}), B.define("user-left-tab", function(e, t, i) {
"use strict";
_i_("3dab:019ef3c6");
var n = e("window-visibilitychange"), r = e("event-emitter"), a = r.extend({
init:function() {
_i_("3dab:a5a033db"), this.didInit || ($(window).focus(this.show.bind(this)), $(window).blur(this.hide.bind(this)), $(window).bind("load", this.onLoad.bind(this)), n.on("visibilitychange", this.visibilityChange.bind(this)), this.didInit = !0), _r_();
},
visibilityChange:function(e) {
_i_("3dab:ec74818a"), n.hidden ? this.emit("hide", e) :this.emit("show", e), _r_();
},
onLoad:function(e) {
_i_("3dab:8b815fd7"), n.hidden || this.show(e), _r_();
},
show:function(e) {
_i_("3dab:5a589ea5"), this.emit("show", e), _r_();
},
hide:function(e) {
_i_("3dab:06f0f6c8"), this.emit("hide", e), _r_();
}
});
a.addListener = a.on = function() {
_i_("3dab:8b88fd4b"), a.init(), r.prototype.addListener.apply(a, arguments), _r_();
}, i.exports = a, _r_();
}), B.define("component/popup-open", function(e, t, i) {
_i_("3dab:00a483df");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("3dab:6db6424c"), this.$el.click(this.click.bind(this)), _r_();
},
click:function(e) {
_i_("3dab:818e6969"), e.preventDefault();
var t = this.$el.attr("href"), i = Math.floor(this.$el.attr("data-width")) || 400, n = Math.floor(this.$el.attr("data-height")) || 400, r = screen.availTop || 0, a = screen.availLeft || 0, o = screen.width / 2 - i / 2 + a, _ = screen.height / 2 - n / 2 + r, s = window, d = "open", c = s[d];
c.call(s, t, "_blank", "width=" + i + ",height=" + n + ",top=" + _ + ",left=" + o + ",toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes"), _r_();
}
}), _r_();
}), function(e, t) {
_i_("3dab:5eb56742"), t.define("core/fly-content-tooltip/fly-content-tooltip", function(e, t, i) {
"use strict";
_i_("3dab:35da992d"), i.exports = function() {
_i_("3dab:860b1423");
var t = e("jquery"), i = "data-content-tooltip", n = "data-content-tooltip-element", r = ".js-fly-content-tooltip", a = "fly-content-tooltip--wrap";
if ("undefined" == typeof t || "undefined" == typeof t.fly || "undefined" == typeof t.fly.tooltip) return _r_();
var o = t.fly.tooltip.extend({
dataAttr:i,
defaults:{
baseClass:"fly-dropdown",
extraClass:"fly-content-tooltip",
hideClass:"fly-dropdown_hidden",
showDelay:100,
hideDelay:100,
arrowSize:5,
content:_
},
init:function() {
_i_("3dab:326b09c2");
var e, t = this.handle();
t.attr("data-position-tooltip") && (this.options.position = this.handle().attr("data-position-tooltip")), t.attr("data-position-tooltip-align") && (this.options.positionAlign = this.handle().attr("data-position-tooltip-align")), t.attr("data-extra-class-tooltip") && (this.options.extraClass = this.handle().attr("data-extra-class-tooltip")), e = t.attr("data-require-tooltip-class"), e && (this.options.requireTooltipClass = e), _r_();
},
timeout:null
});
function _(e) {
_i_("3dab:80a5108c");
var i = this.handle().attr(n), r = i ? t(i).html() :this.handle().attr(this.dataAttr);
r && e(s(r)), _r_();
}
function s(e) {
return _i_("3dab:56471dfd"), _r_('<div class="' + a + '">' + e + "</div>");
}
return _r_({
flyContentTooltip:o,
init:function(e) {
_i_("3dab:45010bad"), e && (o = o.extend(e)), e = e || {}, o.delegate(e.delegateTo ? e.delegateTo :r), _r_();
}
});
}(), _r_();
});
var i = {
extraClass:"fly-content-tooltip ge-fly-content-tooltip"
};
t.require([ "require" ], function(e) {
_i_("3dab:b3a64b3c");
var t = e("core/fly-content-tooltip/fly-content-tooltip");
"undefined" != typeof t && "function" == typeof t.init && (t.init(), t.init({
defaults:i,
dataAttr:"data-ge-fly-tooltip",
delegateTo:".js-fly-content-tooltip[data-ge-fly-tooltip]"
})), _r_();
}), _r_();
}(jQuery, booking), B.define("component/dropdown-onload-shower", function(e, t, i) {
_i_("3dab:69a10fe5");
var n = e("component"), r = e("jquery"), a = e("et");
i.exports = n.extend({
init:function() {
_i_("3dab:f90da99f");
var e = "undefined" != typeof r && "undefined" != typeof r.fly && "undefined" != typeof r.fly.dropdown;
if (this.isDisabled() || !e) return _r_();
var t = r.fly.dropdown.create(this.$el, {
content:this.getContent(),
position:this.getPosition(),
extraClass:"fly-dropdown--onload-shower " + this.getExtraClass(),
ignoreClicksClass:this.$el.data("component-ignore-clicks-class")
});
t.bind(t.events.rootready, function() {
_i_("3dab:2495f363"), t.root().delegate("[data-command]", "click", function() {
_i_("3dab:c15dae44"), setTimeout(t.hide.bind(t), 0), _r_();
}), t.bind(t.events.hide, t._destroy.bind(t)), _r_();
}), setTimeout(function() {
_i_("3dab:d95c8963"), t.show(), t.root().find(".header-signin-prompt [data-et-view]") && (a.initAttributesTracking(t.root()), B.eventEmitter.trigger("GENERAL:layout_changed")), _r_();
}, +this.$el.attr("data-component-delay") || 0), _r_();
},
isDisabled:function() {
_i_("3dab:f43b78c4");
var e = this.$el.attr("data-component-show-once-key");
if (e) {
if (r.cookie(e)) return _r_(!0);
r.cookie(e, 1);
}
_r_();
},
getExtraClass:function() {
return _i_("3dab:0f53b211"), _r_(this.$el.attr("data-component-extra-class") || "");
},
getPosition:function() {
return _i_("3dab:d6697d39"), _r_(this.$el.attr("data-component-position"));
},
getContent:function() {
_i_("3dab:731eb01b");
var e = this.$el.attr("data-component-content");
return _r_(/^[a-z0-9_]+$/.test(e) ? booking.jstmpl(e).render(booking.env["component/dropdown-onload-shower/" + e]) :e);
}
}), _r_();
}), B.define("component/tt-fancy", function(e, t, i) {
"use strict";
_i_("3dab:8b621efd");
var n = e("component"), r = {
delay:300,
width:300,
id:"tt-fancy",
content:"",
triggerOn:"hover",
trackGoals:""
};
i.exports = n.extend({
init:function() {
_i_("3dab:b67ccdca"), this.domHelper = {}, this._getOptions(), this._createDomNodes(), this._attachEvents(), this.isMouseIn = !1, _r_();
},
_getOptions:function() {
_i_("3dab:97f73db3"), $.extend(this, r, {
width:this.$el.data("width"),
id:this.$el.data("id"),
content:this.$el.data("content"),
triggerOn:this.$el.data("trigger"),
trackGoals:this.$el.data("track-goals")
}), _r_();
},
_createDomNodes:function() {
_i_("3dab:fb98f958");
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
switch (_i_("3dab:ea469340"), this.triggerOn) {
case "textSelect":
var e = this;
e.$el.bind("mouseup.fancyTT", function() {
_i_("3dab:782f7e75");
var t = $.trim(e._getSelectedText()), i = $.trim(e.$el.text());
t && i.search && i.search(t) > -1 && (e._showTT.call(e), setTimeout(function() {
_i_("3dab:08c313ac"), $("body").on("mouseup.fancyTTclose", function() {
_i_("3dab:a0a7a600"), e._hideTT.call(e), $("body").off("mouseup.fancyTTclose"), _r_();
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
_i_("3dab:f93f3a4d");
var e = this;
e.isMouseIn = !0, setTimeout(function() {
_i_("3dab:fd909d45"), e.isMouseIn && (e.domHelper.$content.html(e.content), e._position_tt(), e.domHelper.$parent.css({
display:"block"
}), setTimeout(function() {
_i_("3dab:67810cbd"), e.domHelper.$parent.removeClass("tt-fancy-holder--hidden"), B.events.trigger("TT-Fancy:show"), e.trackGoals.split(" ").map(function(e) {
_i_("3dab:f713ab3e");
var t = e.split(":");
2 === t.length && B.et.customGoal(t[0], t[1]), _r_();
}), _r_();
}, 10)), _r_();
}, this.delay), _r_();
},
_hideTT:function() {
_i_("3dab:d33ea963"), this.isMouseIn = !1, this.domHelper.$parent.css({
display:"none"
}).addClass("tt-fancy-holder--hidden"), B.events.trigger("TT-Fancy:hide"), _r_();
},
_position_tt:function() {
_i_("3dab:8ab4392e");
var e = $(window).width(), t = this.$el, i = this.width && "number" == typeof this.width, n = (i ? this.width :this.domHelper.$parent.width()) / 2, r = t.offset().left + t.outerWidth() / 2, a = t.offset().top + t.outerHeight() + 7, o = r - n, _ = 15, s = "auto", d = !1;
r + n > e ? (o = "auto", s = _, d = !0, this.domHelper.$pointer.css({
right:e - r - _ - 6 + "px",
left:"auto"
})) :_ > r - n && (o = _, s = "auto", d = !0, this.domHelper.$pointer.css({
left:r - _ + "px",
right:"auto"
})), this.domHelper.$parent.css({
left:o,
right:s,
top:a
}), d || this.domHelper.$pointer.attr("style", ""), _r_();
},
_getSelectedText:function() {
_i_("3dab:ffa30489");
var e = "";
return "undefined" != typeof window.getSelection ? e = window.getSelection().toString() :"undefined" != typeof document.selection && "Text" == document.selection.type && (e = document.selection.createRange().text), _r_($.trim(e));
}
}), _r_();
}), B.define("hijri-calendar", function() {
_i_("3dab:e18bb072");
var e = 10631 / 30, t = 1948084, i = .1335, n = [ "ar_islamic_calendar_muharram", "ar_islamic_calendar_safar", "ar_islamic_calendar_rabiul_awwal", "ar_islamic_calendar_rabiul_akhir", "ar_islamic_calendar_jumadal_ula", "ar_islamic_calendar_jumadal_ukhra", "ar_islamic_calendar_rajab", "ar_islamic_calendar_shaban", "ar_islamic_calendar_ramadan", "ar_islamic_calendar_shawwal", "ar_islamic_calendar_dhul_qaadah", "ar_islamic_calendar_dhul_hijjah" ];
function r(r) {
_i_("3dab:f72fb3ef");
var a = r.day, o = r.month, _ = r.year, s = o + 1, d = _;
3 > s && (d -= 1, s += 12);
var c = Math.floor(d / 100), l = 2 - c + Math.floor(c / 4);
1583 > d && (l = 0), 1582 === d && (s > 10 && (l = -10), 10 == s && (l = 0, a > 4 && (l = -10)));
var u = Math.floor(365.25 * (d + 4716)) + Math.floor(30.6001 * (s + 1)) + a + l - 1524;
l = 0, u > 2299160 && (c = Math.floor((u - 1867216.25) / 36524.25), l = 1 + c - Math.floor(c / 4));
var f = u + l + 1524, h = Math.floor((f - 122.1) / 365.25), b = Math.floor(365.25 * h), p = Math.floor((f - b) / 30.6001);
a = f - b - Math.floor(30.6001 * p), o = p - 1, p > 13 && (h += 1, o = p - 13), _ = h - 4716;
var g = u - t, m = Math.floor(g / 10631);
g -= 10631 * m;
var v = Math.floor((g - i) / e), y = 30 * m + v;
g -= Math.floor(v * e + i);
var w = Math.floor((g + 28.5001) / 29.5);
13 == w && (w = 12);
var k = g - Math.floor(29.5001 * w - 29), B = {
gregorian_day:a,
gregorian_month:o - 1,
gregorian_year:_,
julian_day:u - 1,
hijri_day:k,
hijri_month:w - 1,
hijri_year:y,
hijri_month_tag:n[w - 1]
};
return _r_(B);
}
var a = "1" === $.cookie("hijri_enabled") ? !0 :!1, o = B.env.b_hijri_calendar_available;
return _r_({
enable:function() {
_i_("3dab:f41a946d"), o && !a && (a = !0, $.cookie("hijri_enabled", 1), B.eventEmitter.trigger("CALENDAR:hijri_enabled")), _r_();
},
disable:function() {
_i_("3dab:3e456148"), o && a && (a = !1, $.cookie("hijri_enabled", 0), B.eventEmitter.trigger("CALENDAR:hijri_disabled")), _r_();
},
enabled:function() {
return _i_("3dab:d42b789f"), _r_(a);
},
available:function() {
return _i_("3dab:3ec9dd98"), _r_(o);
},
convert:r
});
}), B.define("utils", function(e, t, i) {
_i_("3dab:1ae1366f"), t.assertExists = function(e, t) {
if (_i_("3dab:9d42554a"), "object" != typeof e || !(t in e)) throw new Error("Property " + t + " is not found");
_r_();
}, t.camelCaseKeys = function(e) {
_i_("3dab:dbbbdfa4");
var t, i, n = {};
for (t in e) e.hasOwnProperty(t) && (i = t.replace(/-([a-zA-Z])/g, function(e, t) {
return _i_("3dab:aefe3784"), _r_(t.toUpperCase());
}), n[i] = e[t]);
return _r_(n);
}, t.nodeData = function(e) {
_i_("3dab:c0d6317e"), e.jquery && (e = e[0]), this.assertExists(e, "attributes");
var t, i, n, r = {};
for (t = 0, i = e.attributes.length; i > t; t++) n = e.attributes[t], n && 0 == n.name.indexOf("data-") && (r[n.name.replace(/^data-/, "")] = n.value);
return _r_(this.camelCaseKeys(r));
}, _r_();
}), B.define("utils/simple-unique-id", function(e, t, i) {
_i_("3dab:9e09743c");
function n(e, t) {
return _i_("3dab:ad6af9b3"), _r_(Math.floor(Math.random() * (t - e)) + e);
}
i.exports = function() {
return _i_("3dab:79142c91"), _r_(new Date().getTime() + "_" + n(100, 999));
}, _r_();
}), B.define("window-visibilitychange", function(e, t, i) {
"use strict";
_i_("3dab:369b7d76");
var n = e("event-emitter"), r = {
focus:"visible",
focusin:"visible",
pageshow:"visible",
blur:"hidden",
focusout:"hidden",
pagehide:"hidden"
};
i.exports = n.extend({
setup:function() {
_i_("3dab:c2393e8e"), this.didSetup || (this.didSetup = !0, this.hidden = null, this.visibilityState = null, this.hiddenAttribute = "hidden", this.hiddenAttribute in document ? document.addEventListener("visibilitychange", this.visibilityChange.bind(this)) :(this.hiddenAttribute = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", this.visibilityChange.bind(this)) :(this.hiddenAttribute = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", this.visibilityChange.bind(this)) :(this.hiddenAttribute = "msHidden") in document ? document.addEventListener("msvisibilitychange", this.visibilityChange.bind(this)) :"onfocusin" in document ? document.onfocusin = document.onfocusout = this.visibilityChange.bind(this) :window.onpageshow = window.onpagehide = window.onfocus = window.onblur = this.visibilityChange.bind(this)), _r_();
},
visibilityChange:function(e) {
_i_("3dab:2ef96ee8"), e = e || window.event;
var t = this.visibilityState;
e.type in r ? (this.hidden = "hidden" == r[e.type], this.visibilityState = r[e.type]) :(this.hidden = document[this.hiddenAttribute], this.visibilityState = document[this.hiddenAttribute] ? "hidden" :"visible"), t != this.visibilityState && this.emit("visibilitychange", this.visibilityState), _r_();
}
}), i.exports.addListener = i.exports.on = function() {
_i_("3dab:2f617f65"), i.exports.setup(), n.prototype.addListener.apply(i.exports, arguments), _r_();
}, _r_();
}), B.define("window-scroller", [ "jquery", "promise" ], function(e, t) {
_i_("3dab:a4a96a0b");
var i = e(window), n = jQuery({
progress:0
}), r = 10, a = 700, o = 5;
function _(e, n, a, o) {
_i_("3dab:9f918506");
var _, s = "number" == typeof o ? o :r;
if (!e || !e.length) return _r_(new t(function(e) {
_i_("3dab:8dee672b"), e(), _r_();
}));
if (n) _ = l(e).top - s; else {
var d = c(e, s);
null === d && (d = i.scrollTop()), _ = d;
}
return _r_(this.scrollToOffset(_, a));
}
function s(e, r) {
_i_("3dab:161038fe"), n.stop(!0);
var a = i.scrollTop(), _ = e;
return _r_(new t(function(e) {
_i_("3dab:5e09766a"), Math.abs(a - _) < o ? e() :d(a, _, r, e), _r_();
}));
}
function d(e, t, r, o) {
_i_("3dab:fafb30c7"), n[0].progress = 0, n.animate({
progress:1
}, {
step:function(n) {
_i_("3dab:3800b453"), i.scrollTop(e + n * (t - e)), _r_();
},
duration:"number" == typeof r ? r :a,
easing:"function" == typeof jQuery.easing.easeInOutExpo ? "easeInOutExpo" :"swing",
complete:o
}), _r_();
}
function c(e, t) {
if (_i_("3dab:9200966d"), 0 === e.height()) return _r_(null);
var i = l(e), n = u(), r = i.top < n.top, a = i.bottom > n.bottom, o = e.outerHeight() + t > f();
return _r_(r || a ? o || r ? i.top - t :i.bottom + t - f() :null);
}
function l(e) {
_i_("3dab:1298f338");
var t = e.offset().top;
return _r_({
top:t,
bottom:t + e.outerHeight()
});
}
function u() {
_i_("3dab:73f45065");
var e = i.scrollTop();
return _r_({
top:e,
bottom:e + f()
});
}
function f() {
return _i_("3dab:70d4d0ea"), _r_(window.innerHeight || document.documentElement.clientHeight);
}
return _r_({
scrollToBlock:_,
scrollToOffset:s
});
}), B.define("countdown", [ "jquery", "event-emitter" ], function(e, t) {
_i_("3dab:b750e9ec");
var i = function(t) {
if (_i_("3dab:ae517d41"), t.endTime) "number" == typeof t.endTime ? this.endTime = new Date(t.endTime) :this.endTime = Date.parse(t.endTime); else {
if (!t.timeLeft) throw new Error("Please pass either endTime or timeLeft.");
this.endTime = new Date(Date.now() + t.timeLeft);
}
return this.dimensionsToCheck = [ "seconds", "minutes", "hours", "days" ], this.defaults = {
updateInterval:1e3,
callback:!1,
expiredCallback:!1,
callbacks:!1,
leadingZeroes:{
seconds:!0,
minutes:!0,
hours:!0,
days:!1
}
}, this.options = e.extend(!0, {}, this.defaults, t), this._processOptions(), this._init(), _r_(this);
};
return e.extend(i.prototype, {
_processOptions:function() {
_i_("3dab:1e129d9e");
var e = this.options.leadingZeroes;
if ("boolean" == typeof e) for (var t = 0; t < this.dimensionsToCheck.length; t++) this.options.leadingZeroes[this.dimensionsToCheck[t]] = e;
_r_();
},
_init:function() {
_i_("3dab:90a28ff6"), t.extend(this), this.previousTime = !1, this._saveStartRemainingTime(), this._setCallbacks(), this._start(), _r_();
},
_saveStartRemainingTime:function() {
_i_("3dab:5239a844"), this.startRemainingTime = this._getRemainingTime(), _r_();
},
_start:function() {
_i_("3dab:c093452d"), this._processTime(), this.timer = setInterval(this._processTime.bind(this), this.options.updateInterval), _r_();
},
_processTime:function() {
_i_("3dab:5c8aa07e");
var e = this._getRemainingTime();
e.total >= 0 ? (this._fireEvents(e), this.previousTime = e) :(this.stop(), this._fireEvents(!1)), _r_();
},
_getRemainingTime:function() {
_i_("3dab:6b308dcb");
var e = this.endTime - Date.now(), t = Math.floor(e / 1e3 % 60), i = Math.floor(e / 1e3 / 60 % 60), n = Math.floor(e / 36e5 % 24), r = Math.floor(e / 864e5);
return _r_({
total:e,
days:r,
hours:n,
minutes:i,
seconds:t
});
},
_fireEvents:function(e) {
if (_i_("3dab:d85a9d51"), !this.previousTime) return _r_();
e ? (this._fireProgressEvents(e), this._fireEveryTickEvent(e)) :this._fireExpiredEvent(), _r_();
},
_fireProgressEvents:function(e) {
_i_("3dab:6a426117");
for (var t = this, i = 0; i < this.dimensionsToCheck.length; i++) this._dimensionIsChanged(e, this.dimensionsToCheck[i]) && this.trigger("changed", {
type:this.dimensionsToCheck[i],
remainingTime:t._formatDate(e)
});
_r_();
},
_fireEveryTickEvent:function(e) {
_i_("3dab:12f85d76"), this.trigger("ticked", {
remainingTime:this._formatDate(e)
}), _r_();
},
_fireExpiredEvent:function() {
_i_("3dab:89c635b0"), this.trigger("expired", {
timeExpired:this._formatDate(this.startRemainingTime)
}), _r_();
},
_dimensionIsChanged:function(e, t) {
return _i_("3dab:bdadff41"), _r_(!!(e[t] - this.previousTime[t]));
},
_setCallbacks:function() {
_i_("3dab:c395cd72");
var e = this;
this.options.callback && "function" == typeof this.options.callback && this.on("ticked", function(t) {
_i_("3dab:e0e4db99"), e.options.callback(e._formatDate(t.remainingTime)), _r_();
}), this.options.expiredCallback && "function" == typeof this.options.expiredCallback && this.on("expired", function(t) {
_i_("3dab:2cacaabf"), e.options.expiredCallback(e._formatDate(t.remainingTime)), _r_();
}), this.options.callbacks && this.on("changed", function(t) {
_i_("3dab:3ef813f1"), e.options.callbacks[t.type] && "function" == typeof e.options.callbacks[t.type] && e.options.callbacks[t.type](e._formatDate(t.remainingTime)), _r_();
}), _r_();
},
_formatDate:function(e) {
_i_("3dab:1aa570d0");
var t;
for (var i in e) this.options.leadingZeroes[i] && e.hasOwnProperty(i) && (t = "" + e[i], t.length <= 1 && (e[i] = "0" + t));
return _r_(e);
},
getStartRemainingTime:function() {
return _i_("3dab:ab1fd337"), _r_(this._formatDate(this.startRemainingTime));
},
stop:function() {
_i_("3dab:79f6c547"), clearInterval(this.timer), _r_();
},
proceed:function() {
_i_("3dab:c3c5fef5"), this._start(), _r_();
}
}), _r_(i);
}), B.Search = B.Search || {}, B.Search.Events = {
DESTINATION_CHANGED:"SEARCH:DESTINATION_CHANGED",
DESTINATION_INVALID:"SEARCH:DESTINATION_INVALID",
TRAVEL_PURPOSE_CHANGED:"SEARCH:travel_purpose_changed",
DATE_CHANGED:"SEARCH:date_changed",
DATE_MONTH_CHANGED:"SEARCH:month_changed",
DATE_MODE_CHANGED:"SEARCH:mode_changed",
DATE_INVALID:"SEARCH:dates_invalid",
DATE_VALID:"SEARCH:dates_valid",
FLEXIBLE_MONTHYEAR_CHANGED:"SEARCH:flexible_monthyear_changed",
FLEXIBLE_INTERVAL_CHANGED:"SEARCH:flexible_interval_changed",
FLEXIBLE_INVALID:"SEARCH:monthyear_invalid",
FLEXIBLE_VALID:"SEARCH:monthyear_valid",
MULTI_GROUP_CHANGED:"SEARCH:multi_group_changed",
GROUP_CHANGED:"SEARCH:group_changed",
GROUP_MODE_CHANGED:"SEARCH:group_mode_changed",
GROUP_VALID:"SEARCH:group_valid",
GROUP_INVALID:"SEARCH:group_invalid",
ADVANCED_SEARCH_ENABLED:"SEARCH:advanced_search_enabled",
ADVANCED_SEARCH_DISABLED:"SEARCH:advanced_search_disabled",
POPULAR_BUSINESS_FILTERS_OPENED:"SEARCH:pouplar_business_filters_opened",
POPULAR_BUSINESS_FILTERS_DISABLED:"SEARCH:pouplar_business_filters_closed"
}, B.Search.TrackingEvents = {
DESTINATION_CHANGED:"destination_changed",
CHECKOUT_DATEPICKER:"checkout_changed_datepicker",
CHECKOUT_MONTH_SELECTOR:"checkout_changed_month_selector",
CHECKOUT_DAY_SELECTOR:"checkout_changed_day_selector",
CHECKIN_DATEPICKER:"checkin_changed_datepicker",
CHECKIN_MONTH_SELECTOR:"checkin_changed_month_selector",
CHECKIN_DAY_SELECTOR:"checkin_changed_day_selector",
NO_DATES_SELECTED:"no_dates_selected",
FLEXIBLE_INTERVAL_SELECTED:"flexible_interval_selected",
FLEXIBLE_MONTH_SELECTED:"flexible_month_selected",
GROUP_ADVANCED_MODE_SELECTED:"group_advanced_mode_selected",
GROUP_BASIC_MODE_SELECTED:"group_basic_mode_selected",
GROUP_PREDEFINED_OPTION_SELECTED:"group_predefined_option_selected",
GROUP_ROOMS_NUMBER_CHANGED:"rooms_number_changed",
GROUP_ADULTS_NUMBER_CHANGED:"adults_number_changed",
GROUP_CHILDREN_NUMBER_CHANGED:"children_number_changed",
GROUP_CHILDREN_AGE_CHANGED:"children_age_changed",
ADVANCED_SEARCH_CHANGED:"advanced_search_changed",
ADVANCED_SEARCH_ENABLED:"advanced_search_enabled",
ADVANCED_SEARCH_DISABLED:"advanced_search_disabled",
FORM_SUBMITTED:"form_submitted"
}, B.Search.TravelTypeModes = {
BUSINESS:"business",
LEISURE:"leisure"
}, B.Search.DateModes = {
REGULAR:"regular",
NODATES:"no-dates",
FLEXIBLE:"flexible"
}, B.Search.GroupModes = {
REGULAR:"basic",
CUSTOM:"custom"
}, B.Search.rawGroupConfiguration, B.Search.groupConfiguration, B.Search.childrenConfiguration, B.Search.createGroup = function(e) {
if (_i_("3dab:0539a313"), !e || "object" != typeof e) return _r_(new B.Search.InvalidGroup());
return _r_(new B.Search.Group(e));
}, B.Search.AbstractGroup = function() {}, B.Search.AbstractGroup.prototype.parseChildrenConfig = function(e) {
_i_("3dab:48baa080");
var t, i = [];
return !e.childrenAges && e.childrenages && (e.childrenAges = e.childrenages), e.childrenAges instanceof Array ? i = e.childrenAges :"number" == typeof e.childrenAges ? i = [ e.childrenAges ] :"string" == typeof e.childrenAges ? i = e.childrenAges.split(",") :e.children instanceof Array ? i = e.children :"undefined" != typeof e.children ? (t = parseInt(e.children, 10), i = isNaN(t) ? [] :new Array(t)) :i = [], _r_({
childrenAges:i,
children:i.length
});
}, B.Search.AbstractGroup.prototype.parseConfig = function(e, t) {
_i_("3dab:9330e066");
var i = {};
return e.adults && (i.adults = e.adults), e.rooms && (i.rooms = e.rooms), 0 === i.rooms && (i.rooms = 1), $.extend(i, this.parseChildrenConfig(e)), e.name && (i.name = e.name), e.type && (i.type = e.type), t && t.useDefaults && (i = $.extend({
adults:2,
rooms:1,
children:0,
childrenAges:[]
}, i)), _r_(i);
}, B.Search.AbstractGroup.prototype.applyConfig = function(e) {
_i_("3dab:b1e17b8f");
var t;
e.name !== t && (this.name = e.name), e.type !== t && (this.type = e.type), e.rooms !== t && (this.rooms = e.rooms), e.adults !== t && (this.adults = e.adults), e.children !== t && (this.children = e.children), e.childrenAges !== t && (this.childrenAges = e.childrenAges), _r_();
}, B.Search.InvalidGroup = function() {}, B.Search.InvalidGroup.prototype = new B.Search.AbstractGroup(), B.Search.InvalidGroup.prototype.valueOf = function() {
return _i_("3dab:f87a4a80"), _r_(null);
}, B.Search.Group = function(e) {
_i_("3dab:1bce3db5");
var t = this.parseConfig(e, {
useDefaults:!0
});
this.applyConfig(t), _r_();
}, B.Search.Group.prototype = new B.Search.AbstractGroup(), B.Search.Group.prototype.update = function(e) {
_i_("3dab:f47052c5");
var t = this.parseConfig(e);
return this.applyConfig(t), _r_(this);
}, B.Search.Group.prototype.toString = function() {
return _i_("3dab:80a15b81"), _r_(this.valueOf());
}, B.Search.Group.prototype.valueOf = function() {
_i_("3dab:9ee3e446");
var e = [ "Group:" ];
return this.name && e.push("Name: " + this.name), this.type && e.push("Type: " + this.type), e.push(this.rooms), e.push(this.adults), e.push(this.children), e.push(this.childrenAges.join("|")), _r_(e.join(","));
}, B.Search.ONE_DAY = 864e5, B.Search.createDate = function(e) {
_i_("3dab:c8f0d795");
var t, i, n, r, a, o, _, s, d;
switch (typeof e) {
case "string":
d = e.split("-"), d.length > 1 && (t = parseInt(d[0], 10), i = parseInt(d[1], 10) - 1), 3 === d.length && (n = parseInt(d[2], 10));
break;

case "object":
t = parseInt(e.year, 10), i = parseInt(e.month, 10), n = parseInt("day" in e ? e.day :e.date, 10);
break;

case "number":
_ = e * B.Search.ONE_DAY, s = new Date(_), t = s.getFullYear(), i = s.getMonth(), n = s.getDate();
break;

case "undefined":
r = "invalid";
}
return o = "number" == typeof t && !isNaN(t) && "number" == typeof i && !isNaN(i), a = o && "number" == typeof n && !isNaN(n) && 0 !== n, _r_(a ? new B.Search.Date({
year:t,
month:i,
date:n
}) :o ? new B.Search.MonthDate({
year:t,
month:i
}) :new B.Search.InvalidDate());
}, B.Search.AbstractDate = function() {}, B.Search.AbstractDate.prototype.initValue_ = function() {
_i_("3dab:48dbea8d"), this.dateObject_ = new Date(Date.UTC(this.year, this.month, this.date || 1)), this.value_ = Math.floor(this.dateObject_.valueOf() / B.Search.ONE_DAY), _r_();
}, B.Search.AbstractDate.toString = function() {
throw _i_("3dab:3a3656f8"), "Abstract method should be override in child classes";
}, B.Search.AbstractDate.prototype.valueOf = function() {
return _i_("3dab:a5b127fd"), this.value_ || this.initValue_(), _r_(this.value_);
}, B.Search.Date = function(e) {
_i_("3dab:cb884152"), this.year = e.year, this.month = e.month, this.date = e.date, this.type = "valid", _r_();
}, B.Search.Date.prototype = new B.Search.AbstractDate(), B.Search.Date.prototype.toString = function() {
_i_("3dab:746955bb");
var e = [], t = this.month + 1;
return e.push(this.year), 9 >= t ? e.push("0" + t) :e.push(t), this.date <= 9 ? e.push("0" + this.date) :e.push(this.date), _r_(e.join("-"));
}, B.Search.Date.prototype.addDays = function(e) {
return _i_("3dab:f5bf5024"), _r_(B.Search.createDate(this + e));
}, B.Search.MonthDate = function(e) {
_i_("3dab:437952d6"), this.year = e.year, this.month = e.month, this.type = "month", _r_();
}, B.Search.MonthDate.prototype = new B.Search.AbstractDate(), B.Search.MonthDate.prototype.toString = function() {
_i_("3dab:9a2cc8db");
var e = [], t = this.month + 1;
return e.push(this.year), 9 >= t ? e.push("0" + t) :e.push(t), _r_(e.join("-"));
}, B.Search.InvalidDate = function() {
_i_("3dab:98aa53cf"), this.type = "invalid", _r_();
}, B.Search.InvalidDate.prototype = new B.Search.AbstractDate(), B.Search.InvalidDate.prototype.toString = function() {
return _i_("3dab:6fcbd61c"), _r_("");
}, B.Search.AbstractWidget = function() {}, B.Search.AbstractWidget.prototype.initialize = function(e, t) {
_i_("3dab:102ab2e0"), this.$element = e, this.setOptions(t), _r_();
}, B.Search.AbstractWidget.prototype.setOptions = function(e) {
_i_("3dab:97cf898d"), this.options || (this.options = {}), this.options = $.extend(this.options, e), _r_();
}, B.Search.AbstractWidget.prototype.initEvents = function() {
throw _i_("3dab:78f87b86"), "Abstract intiEvents method should be implemented in widget instances";
}, B.Search.AbstractWidget.prototype.onExternalEventConfigChanged = function() {
throw _i_("3dab:c0de0c1e"), "Abstract onExternalEventConfigChanged method should be implemented in widget instances";
}, B.Search.AbstractWidget.prototype.getConfig = function() {
throw _i_("3dab:777245ea"), "Abstract getConfig method should be implemented in widget instances";
}, B.Search.AbstractWidget.prototype.trigger = function(e) {
_i_("3dab:bee3772d"), "groupChanged" === e && "function" == typeof this.onExternalEventConfigChanged && this.onExternalEventConfigChanged.apply(this, [].slice.call(arguments, 1)), _r_();
}, B.Search.AbstractWidget.prototype.onInit = function() {
_i_("3dab:50264303");
var e = this;
"function" == typeof this.options.onInit && window.setTimeout(function() {
_i_("3dab:8c47b783"), e.options.onInit.call(e, e.getConfig()), _r_();
}, 10), _r_();
}, B.Search.AbstractWidget.prototype.onChange = function() {
_i_("3dab:5d089115"), "function" == typeof this.options.onChange && this.options.onChange.call(this, this.getConfig()), _r_();
}, B.Search.AbstractWidget.prototype.tryCallback = function(e, t, i) {
_i_("3dab:2b97ded0");
var n;
if (!e) return _r_();
t = t || [], "function" == typeof this.options[e] ? n = this.options[e] :"function" == typeof i && (n = i), n && n.apply(this, t), _r_();
}, B.Search.AbstractWidget.prototype.DISABLED_CLASS = "disabled", B.Search.AbstractWidget.prototype.hide = function() {
_i_("3dab:897e2017"), this.$element.toggleClass(this.DISABLED_CLASS, !0), _r_();
}, B.Search.AbstractWidget.prototype.show = function() {
_i_("3dab:73d23b5e"), this.$element.toggleClass(this.DISABLED_CLASS, !1), _r_();
}, B.Search.createWidgetPlugin = function(e, t) {
if (_i_("3dab:c4ac71de"), $.fn[e]) throw "Jquery plugin " + e + " is already defined";
return $.fn[e] = function(e, t) {
_i_("3dab:11140a30");
var i = [];
return _r_(function(n) {
if (_i_("3dab:031fcf1c"), "notify" === n) for (var r = arguments[1], a = arguments[2], o = 0; o < i.length; o++) i[o].trigger(r, a);
return _r_(this.each(function() {
_i_("3dab:dd78892d");
var r = e, a = $(this), o = a.data(), _ = o[r];
_ ? _.setOptions(n) :(_ = new t(a, n), a.data(r, _), i.push(_)), _r_();
}));
});
}(e, t), _r_($.fn[e]);
}, B.Search.validators = {
storage_:[]
}, B.Search.Validator = function() {}, B.Search.Validator.prototype.name = "general", B.Search.Validator.prototype.type = "general", B.Search.Validator.prototype.success = void 0, B.Search.Validator.prototype.fail = void 0, B.Search.Validator.prototype.test = function() {}, B.Search.Validator.prototype.validate = function() {
_i_("3dab:5ed6d228");
var e = this.test(), t = e ? "fail" :"success", i = {
name:this.name,
status:t
}, n = t + "Callback";
return "function" == typeof this[t] ? i.message = this[t]() :"undefined" != typeof this[t] && (i.message = this[t]), "function" == typeof this[n] && (i.callback = this[n]), this.validationParameters && (i.validationParameters = this.validationParameters), _r_(new B.Search.ValidationResult(i));
}, B.Search.ValidationResult = function(e) {
_i_("3dab:8b371c1f"), this.setOptions_(e), _r_();
}, B.Search.ValidationResult.prototype.status = void 0, B.Search.ValidationResult.prototype.message = void 0, B.Search.ValidationResult.prototype.callback = function() {}, B.Search.ValidationResult.prototype.valueOf = function() {
return _i_("3dab:d28afc8f"), _r_("fail" !== this.status);
}, B.Search.ValidationResult.prototype.toString = function() {
return _i_("3dab:37a90293"), _r_(this.message || "");
}, B.Search.ValidationResult.prototype.setOptions_ = function(e) {
if (_i_("3dab:700c405b"), !e) return _r_(this);
return e.name && (this.name = e.name), e.status && (this.status = e.status), e.message && (this.message = e.message), "function" == typeof e.callback && (this.callback = e.callback), e.validationParameters && (this.validationParameters = e.validationParameters), _r_(this);
}, B.Search.validators.create = function(e) {
_i_("3dab:e77544a2");
var t = new B.Search.Validator();
if (!e) return _r_(t);
return e.name && (t.name = e.name), e.type && (t.type = e.type), e.success && (t.success = e.success), e.fail && (t.fail = e.fail), e.failCallback && (t.failCallback = e.failCallback), e.successCallback && (t.successCallback = e.successCallback), e.test && (t.test = e.test), B.Search.validators.storage_.push(t), _r_(t);
}, B.Search.validators.all = function() {
return _i_("3dab:8eb70bf9"), _r_(this.storage_);
}, B.Search.validators.allOfType = function(e) {
_i_("3dab:29c85e5d");
for (var t = [], i = 0; i < this.storage_.length; i++) this.storage_[i].type === e && t.push(this.storage_[i]);
return _r_(t);
}, B.Search.DEFAULT_GROUP_COFIGURATION = {
adults:2,
rooms:1,
children:0
}, B.Search.Interface = function() {
_i_("3dab:0e8cdd07");
var e = this;
this.datesStorage = {
checkin:B.Search.createDate(),
checkout:B.Search.createDate(),
mode:"regular"
}, this.groupStorage = {
value:B.Search.createGroup()
}, this.flexibleDatesStorage = {
interval:null,
monthYear:B.Search.createDate()
}, this.destinationStorage = {
value:null
}, this.advancedSearchStorage = {
state:"disabled"
}, this.dates = function() {
_i_("3dab:df03ec18");
var t;
switch (arguments.length) {
case 0:
return _r_({
checkin:this.getDate_("checkin"),
checkout:this.getDate_("checkout"),
mode:this.getDatesMode_(),
validate:function() {
return _i_("3dab:192120a6"), _r_(e.validateDates_.apply(e, [].slice.call(arguments, 0)));
},
setMode:function() {
return _i_("3dab:e298fcef"), _r_(e.setDatesMode_.apply(e, [].slice.call(arguments, 0)));
},
validationResults:function() {
return _i_("3dab:4dc57560"), _r_(e.validationResults);
}
});

case 1:
return _r_(this.getDate_(arguments[0]));

case 2:
return "mode" === arguments[0] ? _r_(e.setDatesMode_.apply(e, [].slice.call(arguments, 1))) :(t = B.Search.createDate(arguments[1]), _r_(this.setDate_(arguments[0], t)));

default:
return t = B.Search.createDate(arguments[1]), _r_(this.setDate_(arguments[0], t));
}
_r_();
}, this.flexibleDates = function() {
return _i_("3dab:0903b793"), _r_({
interval:function() {
return _i_("3dab:3d6f1d43"), _r_(1 === arguments.length ? e.setInterval_.apply(e, [].slice.call(arguments, 0)) :e.getInterval_());
},
monthYear:function() {
return _i_("3dab:74eb5d6b"), _r_(1 === arguments.length ? e.setMonthYear_.apply(e, [].slice.call(arguments, 0)) :e.getMonthYear_());
},
validate:function() {
return _i_("3dab:307f9486"), _r_(e.validateFlexibleDates_.apply(e, [].slice.call(arguments, 0)));
}
});
}, this.destination = function() {
switch (_i_("3dab:4ec5e4ef"), arguments.length) {
case 0:
return _r_(this.getDestination_());

default:
return _r_(this.setDestination_(arguments[0]));
}
_r_();
}, this.group = function() {
switch (_i_("3dab:e2613e13"), arguments.length) {
case 0:
return _r_({
value:this.getGroup_(),
mode:function(t) {
return _i_("3dab:d7c3e4cf"), _r_(t ? e.setGroupMode_.apply(e, [].slice.call(arguments, 0)) :e.getGroupMode_.apply(e, [].slice.call(arguments, 0)));
},
validate:function() {
return _i_("3dab:8a37e316"), _r_(e.validateGroup_.apply(e, [].slice.call(arguments, 0)));
},
setMode:function() {
return _i_("3dab:35e54421"), _r_(e.setGroupMode_.apply(e, [].slice.call(arguments, 0)));
}
});

case 1:
return _r_("reset" === arguments[0] ? this.setGroup_("config", B.Search.DEFAULT_GROUP_COFIGURATION) :"value" === arguments[0] ? this.getGroup_() :"string" == typeof arguments[0] ? this.getGroup_(arguments[0]) :this.setGroup_("config", arguments[0]));

default:
if ("reset" === arguments[0]) return _r_(this.setGroup_("config", arguments[1]));
return _r_(this.setGroup_(arguments[0], arguments[1]));
}
_r_();
}, this.advanced = function() {
return _i_("3dab:1d531765"), _r_({
mode:function(t) {
return _i_("3dab:e997a23b"), _r_(t ? e.setAdvancedSearchMode_.apply(e, [].slice.call(arguments, 0)) :e.getAdvancedSearchMode_.apply(e, [].slice.call(arguments, 0)));
},
enable:function() {
return _i_("3dab:766b7e80"), _r_(e.setAdvancedSearchMode_.apply(e, [ "enabled" ]));
},
disable:function() {
return _i_("3dab:b0c4b370"), _r_(e.setAdvancedSearchMode_.apply(e, [ "disabled" ]));
}
});
}, _r_();
}, B.Search.Interface.prototype = {
constructor:B.Search.Interface,
sanitizeDateType_:function(e) {
return _i_("3dab:21afb8f5"), _r_("checkin" === e || "checkout" === e ? e :null);
},
getDate_:function(e) {
_i_("3dab:4c9ee08c");
var t = this.sanitizeDateType_(e);
return _r_(this.datesStorage[t]);
},
setDate_:function(e, t, i) {
_i_("3dab:63cbb727");
var n = B.Search.createDate(t), r = "valid" === n.type ? B.Search.Events.DATE_CHANGED :B.Search.Events.DATE_MONTH_CHANGED, a = this.sanitizeDateType_(e), o = this.datesStorage[a];
return i = i || {}, a ? (n.type !== o.type || n.valueOf() !== o.valueOf()) && (this.datesStorage[a] = n, B.eventEmitter.trigger(r, {
type:a,
value:n,
search:this,
referrer:i.referrer
})) :window.onerror("attempt_to_set_date_with_wrong_type:_" + e, window.location), _r_(n);
},
validateDates_:function(e, t) {
if (_i_("3dab:e65e82fa"), "reset" === e) return B.eventEmitter.trigger(B.Search.Events.DATE_VALID), _r_(!0);
var i = B.Search.validators.allOfType("dates"), n = i.map(function(e) {
return _i_("3dab:be52d473"), _r_(e.validate());
}), r = n.every(function(e) {
return _i_("3dab:5fbae929"), _r_("success" === e.status);
});
return r ? this.validationResults = null :this.validationResults = n, t && t.silent || B.eventEmitter.trigger(r ? B.Search.Events.DATE_VALID :B.Search.Events.DATE_INVALID, {
validators:n
}), _r_(r);
},
sanitizeDatesMode_:function(e) {
return _i_("3dab:7ed24308"), _r_("regular" === e || "no-dates" === e || "flexible" === e ? e :null);
},
getDatesMode_:function() {
return _i_("3dab:7e03eaf2"), _r_(this.datesStorage.mode);
},
setDatesMode_:function(e) {
_i_("3dab:e0585123");
var t = this.sanitizeDatesMode_(e);
return t && this.datesStorage.mode !== t && (this.datesStorage.mode = t, B.eventEmitter.trigger(B.Search.Events.DATE_MODE_CHANGED, {
mode:t
})), _r_(this);
},
getMonthYear_:function() {
return _i_("3dab:6c73d242"), _r_(this.flexibleDatesStorage.monthYear);
},
setMonthYear_:function(e) {
_i_("3dab:14fc3bcf");
var t = B.Search.createDate(e), i = this.flexibleDatesStorage.monthYear;
return t.valueOf() !== i.valueOf() && (this.flexibleDatesStorage.monthYear = t, B.eventEmitter.trigger(B.Search.Events.FLEXIBLE_MONTHYEAR_CHANGED, {
value:t
})), _r_(t);
},
getInterval_:function() {
return _i_("3dab:1b0e70fb"), _r_(this.flexibleDatesStorage.interval);
},
setInterval_:function(e) {
return _i_("3dab:41511fec"), "weekend" !== e && "week" !== e && (e = "any"), this.flexibleDatesStorage.interval !== e && (this.flexibleDatesStorage.interval = e, B.eventEmitter.trigger(B.Search.Events.FLEXIBLE_INTERVAL_CHANGED, {
value:e
})), _r_(this);
},
validateFlexibleDates_:function() {
_i_("3dab:ce917cf6");
var e = B.Search.validators.allOfType("flexible"), t = e.map(function(e) {
return _i_("3dab:be52d4731"), _r_(e.validate());
}), i = t.every(function(e) {
return _i_("3dab:5fbae9291"), _r_("success" === e.status);
});
return B.eventEmitter.trigger(i ? B.Search.Events.FLEXIBLE_VALID :B.Search.Events.FLEXIBLE_INVALID, {
validators:t
}), _r_(i);
},
getDestination_:function() {
return _i_("3dab:ef51eb49"), _r_(this.destinationStorage.value);
},
setDestination_:function(e) {
_i_("3dab:681d3e1e");
var t = e && e.data, i = this.destinationStorage && this.destinationStorage.value && this.destinationStorage.value;
t && (!i || i && i.dest_id !== t.dest_id) && (this.destinationStorage.value = t, B.eventEmitter.trigger(B.Search.Events.DESTINATION_CHANGED, this.destinationStorage.value)), _r_();
},
getGroup_:function(e) {
return _i_("3dab:212e6682"), _r_(e ? this.groupStorage.value[e] :this.groupStorage.value);
},
setGroup_:function(e, t) {
_i_("3dab:8b77bf55");
var i, n;
if ("rooms" === e || "adults" === e || "children" === e || "childrenAges" === e || "type" === e || "name" === e) this.setGroupValue_(e, t); else if ("config" === e) {
i = t instanceof B.Search.Group ? t :B.Search.createGroup(t);
for (var r = 0, a = i.childrenAges.length; a > r; r++) i.childrenAges[r] === n && (i.childrenAges[r] = this.groupStorage.value.childrenAges[r]);
i.valueOf() !== this.groupStorage.value.valueOf() && (this.groupStorage.value = i, this.triggerGroupEvent());
}
_r_();
},
setGroupValue_:function(e, t) {
_i_("3dab:20d5ab9f");
var i, n = {};
n[e] = t, i = B.Search.createGroup(this.groupStorage.value), i.update(n), i.valueOf() !== this.groupStorage.value.valueOf() && (this.groupStorage.value = i, this.triggerGroupEvent()), _r_();
},
getGroupMode_:function() {
return _i_("3dab:9b02c477"), _r_(this.groupStorage.mode);
},
setGroupMode_:function(e) {
return _i_("3dab:b126be05"), "basic" !== e && "custom" !== e && (e = "custom"), e && this.groupStorage.mode !== e && (this.groupStorage.mode = e, B.eventEmitter.trigger(B.Search.Events.GROUP_MODE_CHANGED, {
mode:e
})), _r_(this);
},
triggerGroupEvent:function() {
_i_("3dab:043f0a27"), B.eventEmitter.trigger(B.Search.Events.GROUP_CHANGED, this.groupStorage.value), _r_();
},
validateGroup_:function(e) {
if (_i_("3dab:388dc8b5"), "reset" === e) return B.eventEmitter.trigger(B.Search.Events.GROUP_VALID), _r_(!0);
var t = B.Search.validators.allOfType("group"), i = t.map(function(e) {
return _i_("3dab:be52d4732"), _r_(e.validate());
}), n = i.every(function(e) {
return _i_("3dab:5fbae9292"), _r_("success" === e.status);
});
return B.eventEmitter.trigger(n ? B.Search.Events.GROUP_VALID :B.Search.Events.GROUP_INVALID, {
validators:i
}), _r_(n);
},
setAdvancedSearchMode_:function(e) {
_i_("3dab:95f89962"), e === this.advancedSearchStorage.state || "enabled" !== e && "disabled" !== e || (this.advancedSearchStorage.state = e, B.eventEmitter.trigger("enabled" === e ? B.Search.Events.ADVANCED_SEARCH_ENABLED :B.Search.Events.ADVANCED_SEARCH_DISABLED)), _r_();
},
getAdvancedSearchMode_:function() {
return _i_("3dab:06d51ddb"), _r_(this.advancedSearchStorage.state);
}
}, B.search = new B.Search.Interface(), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:e3eb4571");
var t = {
init:function() {
_i_("3dab:cfd7863c"), this.initDestination(), this.initDates(), this.initGroup(), _r_();
},
initDates:function() {
_i_("3dab:bca31154");
var e, t;
function i(e, t) {
_i_("3dab:74b3143d");
var i = t.split("-"), n = new Date(i[0], i[1] - 1, e, 0, 0, 0, 0);
if (isNaN(n.getTime())) return _r_(!1);
return _r_(new B.Search.Date({
year:i[0],
month:i[1] - 1,
date:e
}));
}
function n(e) {
_i_("3dab:15d56417");
var t = e.split("-"), i = new Date(t[0], t[1] - 1, t[2], 0, 0, 0, 0);
if (isNaN(i.getTime())) return _r_(!1);
return _r_(new B.Search.Date({
year:t[0],
month:t[1] - 1,
date:t[2]
}));
}
B.env.s_value_checkin_monthday && B.env.s_value_checkin_year_month ? (e = i(B.env.s_value_checkin_monthday, B.env.s_value_checkin_year_month), e && B.search.dates("checkin", e)) :B.env.b_checkin_date ? (e = n(B.env.b_checkin_date), e && B.search.dates("checkin", e)) :B.env.b_session_checkin_date && (e = n(B.env.b_session_checkin_date), e && B.search.dates("checkin", e)), B.env.s_value_checkout_monthday && B.env.s_value_checkout_year_month ? (t = i(B.env.s_value_checkout_monthday, B.env.s_value_checkout_year_month), t && B.search.dates("checkout", t)) :B.env.b_checkout_date ? (t = n(B.env.b_checkout_date), t && B.search.dates("checkout", t)) :B.env.b_session_checkout_date && (t = n(B.env.b_session_checkout_date), t && B.search.dates("checkout", t)), B.env.b_no_dates_mode && B.search.dates("mode", B.Search.DateModes.NODATES), _r_();
},
initGroup:function() {
_i_("3dab:25c4a838");
try {
var e = B.env.b_group && B.env.b_group[0], t = B.env.b_group_rooms_wanted, i = [];
if (e && t) {
if (e.ages) for (var n = 0; n < e.ages.length; n++) "undefined" != typeof e.ages[n].age && i.push(e.ages[n].age);
B.search.group({
adults:e.guests,
childrenAges:i,
rooms:t
});
} else B.search.group("value") instanceof B.Search.InvalidGroup && B.search.group({
adults:2,
rooms:1,
type:B.Search.GroupModes.REGULAR
});
} catch (r) {
throw "Unable to set group";
}
_r_();
},
initDestination:function() {
_i_("3dab:5f78fba4");
var e = {
name:void 0,
data:{}
};
B && B.env && (B.env.sess_dest_id && (e.data.dest_id = B.env.sess_dest_id), B.env.sess_dest_type && (e.data.dest_type = B.env.sess_dest_type), B.env.sess_dest_fullname && (e.data.name = B.env.sess_dest_fullname, e.term = B.env.sess_dest_fullname)), e.data.dest_id && e.data.dest_type && e.data.name && B.search.destination(e), _r_();
}
};
t.init(), _r_();
}), function(e, t) {
_i_("3dab:9d36e10b");
function i(t, i) {
_i_("3dab:25915720");
var n = this;
this.$element = t, this.$inputs = t.find("select, input"), this.options = i || {}, this.$element.data("always-enabled") && (this.options.alwaysEnabled = !0);
var r = t.find(".b-date-selector__control-dayselector select, .js--sb-dates__select-day"), a = t.find(".b-date-selector__control-monthselector select, .js--sb-dates__select-month-year");
function o(e) {
if (_i_("3dab:11d00ced"), "string" != typeof e) return _r_(!1);
var t = e.split("-");
if (2 !== t.length) return _r_(!1);
return _r_({
year:parseInt(t[0], 10),
month:parseInt(t[1], 10) - 1
});
}
this.lastMonth = o(a.find("option:last").val());
function _(e) {
_i_("3dab:9e473485");
var t = document.createElement("option");
return t.innerHTML = e.text, t.selected = e.selected, t.value = e.value, _r_(t);
}
function s(t, n) {
_i_("3dab:124ca6d9");
var r = e.env.b_lang;
return _r_(isNaN(n) ? "ja" == r || "zh" == r || "ko" == r ? t + e.env.sbox_day :t :"ja" == r || "zh" == r || "ko" == r || "hu" == r ? "ja" == r || "zh" == r || "ko" == r ? t + e.env.sbox_day + " " + i.dayNames[n] :t + " " + i.dayNames[n] :i.dayNames[n] + " " + t);
}
function d(e, t) {
_i_("3dab:124e5b17");
var i;
switch (e.month) {
case 1:
i = e.year % 4 === 0 && e.year % 100 !== 0 || e.year % 400 === 0 ? 29 :28;
break;

case 0:
case 2:
case 4:
case 6:
case 7:
case 9:
case 11:
i = 31;
break;

case 3:
case 5:
case 8:
case 10:
i = 30;
}
return "checkin" === t && e.month === n.lastMonth.month && e.year === n.lastMonth.year && (i -= 1), _r_(i);
}
function c(t, i) {
_i_("3dab:86f63a4e");
var n, a, o, c, l = r.get(0), u = r.val();
if (t.year && t.month % 1 === 0) n = new Date(t.year, t.month, 1).getDay(), c = d(t, i), u = t.date; else {
if (t) return _r_();
c = 31;
}
for (;l.firstChild; ) l.removeChild(l.firstChild);
a = document.createDocumentFragment(), o = document.createElement("option"), o.innerHTML = e.env.sbox_day, o.value = 0, a.appendChild(o);
for (var f = 1; c >= f; f++) a.appendChild(_({
text:s(f, (n - 1 + f) % 7),
selected:u == f,
value:f
}));
l.appendChild(a), _r_();
}
function l(e) {
_i_("3dab:0ab116b4");
var t = e.year + "-" + (e.month + 1);
a.val(t), _r_();
}
function u(t) {
_i_("3dab:3614fb72"), c(p(), i.type), h(), t && t.originalEvent && ("checkin" === i.type ? e.Search.tracker.trackEvent(e.Search.TrackingEvents.CHECKIN_MONTH_SELECTOR) :"checkout" === i.type && e.Search.tracker.trackEvent(e.Search.TrackingEvents.CHECKOUT_MONTH_SELECTOR)), _r_();
}
function f(t) {
_i_("3dab:56bd5658"), h(), t && t.originalEvent && ("checkin" === i.type ? e.Search.tracker.trackEvent(e.Search.TrackingEvents.CHECKIN_DAY_SELECTOR) :"checkout" === i.type && e.Search.tracker.trackEvent(e.Search.TrackingEvents.CHECKOUT_DAY_SELECTOR)), _r_();
}
function h() {
_i_("3dab:f233b3c3");
var t = p();
if (!t) return _r_();
"checkin" === i.type ? e.search.dates("checkin", t) :"checkout" === i.type && e.search.dates("checkout", t), _r_();
}
function b(e) {
_i_("3dab:d4e5c7dd"), c(e), l(e), _r_();
}
function p() {
_i_("3dab:34da5635");
var e = o(a.val());
if (e.date = r.val(), !e || isNaN(e.date)) return _r_(!1);
return _r_(e);
}
function g(e, t) {
if (_i_("3dab:45338faf"), !t) return _r_();
t.type === i.type && b(t.value), _r_();
}
a.bind("change.dateSelector", u), r.bind("change.dateSelector", f), a.trigger("change.dateSelector"), t.bind("dateSelected", g), _r_();
}
i.prototype.setOptions = function(e) {
if (_i_("3dab:130262a2"), !e) return _r_(this);
return e.disabled ? this.$inputs.attr("disabled", !0) :this.$inputs.removeAttr("disabled"), _r_(this);
}, i.prototype.getOption = function(e) {
if (_i_("3dab:7268afe8"), !e) return _r_(this.options);
return _r_(this.options[e] ? this.options[e] :null);
}, i.prototype.trigger = function(e) {
if (_i_("3dab:ff7620ba"), !e) return _r_(this);
return "disable" !== e || this.options.alwaysEnabled ? "enable" === e && this.setOptions({
disabled:!1
}) :this.setOptions({
disabled:!0
}), _r_(this);
};
function n() {
_i_("3dab:1a1433c7"), this.instances_ = [], _r_();
}
n.prototype.create = function(e, t) {
_i_("3dab:8a73a6fc");
var n = new i(e, t);
return this.add(n), _r_(n);
}, n.prototype.add = function(e) {
return _i_("3dab:a06f5319"), this.instances_.push(e), _r_(e);
}, n.prototype.all = function() {
return _i_("3dab:2073c7c7"), _r_(this.instances_);
}, n.prototype.notifyAll = function() {
_i_("3dab:ca6cd75c");
for (var e = this.all(), t = 0; t < e.length; t++) e[t].trigger.apply(e[t], [].slice.call(arguments, 0));
return _r_(this.instances_);
};
var r = e.Search.datePickerController = new n();
t.fn.dateSelector = function(i) {
_i_("3dab:c1deefc5");
var n = e.env.b_simple_weekdays_for_js.slice(0);
return n.unshift(n.pop()), _r_(this.each(function() {
_i_("3dab:be8e5785");
var e = t(this), a = e.data(), o = a.calendar2;
o ? o.setOptions(i) :r.create(e, t.extend({
dayNames:n
}, i, a)), _r_();
}));
}, _r_();
}(B, $), function() {
_i_("3dab:f503f9b6"), B.Search = B.Search || {}, B.Search.getShiftedDate = function(e, t) {
if (_i_("3dab:4e753f87"), !e) return _r_();
var i = new Date(e.year, e.month, e.date + t);
return _r_({
year:i.getFullYear(),
month:i.getMonth(),
date:i.getDate()
});
}, B.Search.openDatepicker = function(e) {
_i_("3dab:982863c1");
var t, i, n, r = B.require("window-scroller"), a = {
selector:null,
duration:null
}, o = $.extend({}, a, e);
i = o.selector, n = o.duration, $.fn.calendar2("each", function(e) {
if (_i_("3dab:6c5f0202"), !i) return t = e, _r_(!1);
if (e.$input.is(i)) return t = e, _r_(!1);
_r_();
}), t && r.scrollToBlock(t.$input, void 0, n).then(function() {
_i_("3dab:05f18585"), t.show(), _r_();
}), _r_();
}, B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:8f684d52"), $(window).delegate(".js-open-datepicker", "click", function(e) {
_i_("3dab:c8d3c684"), e.preventDefault();
var t = $(this), i = t.data(), n = {};
"undefined" != typeof i.selector && (n.selector = i.selector), "undefined" != typeof i.duration && (n.duration = i.duration), B.Search.openDatepicker(n), _r_();
}), _r_();
}), _r_();
}(), function(e) {
_i_("3dab:2d0f5853"), e.events = e.require("events"), _r_();
}(booking), B.define("utils/wait-for-event", function(e, t, i) {
_i_("3dab:381a529d");
var n = e("promise");
function r(e, t, i) {
return _i_("3dab:9e5d3c7d"), _r_(new n(function(n) {
if (_i_("3dab:0df88881"), i) {
var r = function() {
_i_("3dab:f4d6989c"), i.apply(this, arguments) && (e.off(r), n()), _r_();
};
e.on(t, r);
} else e.once(t, n);
_r_();
}));
}
i.exports = r, _r_();
}), function() {
_i_("3dab:2e551d34");
var e = {
_count:0,
_mixin:{},
_instances:[]
};
e._base = {
events:{
hide:"hide",
show:"show",
rootready:"rootready"
},
_cuid:e._count++,
_ctor:function() {},
_$root:null,
_$handle:null,
_emitter:null,
defaults:{
content:"",
redrawOnShow:!0
},
ens:"",
options:null,
create:function(t, i) {
_i_("3dab:9c77c538");
var n = this.extend({
ens:".ns" + e._count++,
_$handle:$(t),
_emitter:$({})
});
return n.options = $.extend({}, n.defaults, i), e._instances.push(n), _r_(n._init());
},
extend:function(t) {
_i_("3dab:ba24f787"), this._ctor.prototype = this, t && "defaults" in t && (t.defaults = $.extend({}, this.defaults, t.defaults));
var i = $.extend(new this._ctor(), t);
return i._cuid = e._count++, t.register$ && e.register$(t.register$, i), _r_(i);
},
delegate:function(e, t) {
_i_("3dab:540da2b9");
var i = this, n = "fly_delegated_" + i._cuid;
$.each(i.actions, function(r) {
_i_("3dab:16172fcd"), $(document.body).delegate(e, r, function() {
if (_i_("3dab:30467c44"), $(this).data(n)) return _r_();
var e = i.create(this, t);
e.handle().data(n, 1), e._actionHandler(e.actions[r]).apply(e, arguments), _r_();
}), _r_();
}), _r_();
},
onrootready:function() {},
root:function() {
if (_i_("3dab:8b148e01"), !this._$root) {
var e = this.options;
this._$root = $("<div/>").addClass(e.baseClass).addClass(e.extraClass).addClass(e.hideClass).appendTo("body"), this.trigger(this.events.rootready);
}
return _r_(this._$root);
},
handle:function() {
return _i_("3dab:1dc488c9"), _r_(this._$handle);
},
_init:function() {
return _i_("3dab:2e70171a"), this._action(!0), this.bind(this.events.rootready, $.proxy(this.onrootready, this)), this.init(), _r_(this);
},
_destroy:function() {
_i_("3dab:396de614"), this.destroy(), this._$root && (this._$root.remove(), this._$root = null), this._action(!1);
for (var t = 0, i = e._instances.length; i > t; t++) if (e._instances[t] === this) {
e._instances.splice(t, 1);
break;
}
_r_();
},
_action:function(e, t, i) {
_i_("3dab:baf77e07"), i = i || this.handle(), t = t || this.actions;
for (var n in t) e ? i.bind(n + this.ens, this._actionHandler(t[n])) :i.unbind(n + this.ens);
_r_();
},
_actionHandler:function(e) {
return _i_("3dab:f7578e17"), _r_("string" == typeof e ? $.proxy(this[e], this) :$.proxy(e, this));
},
_content:function(e) {
_i_("3dab:28b2e141");
var t = this.options.content;
"function" == typeof t ? t.length ? t.call(this, e) :e(t.call(this)) :e(t), _r_();
},
_render:function(e) {
_i_("3dab:c54a30be"), this.root().html(e || ""), this._rendered = !0, _r_();
},
_modCss:function() {
_i_("3dab:c2fec718");
var e = this.options.position.split(" "), t = this.options.baseClass;
return _r_([ t + "_" + e[0], t + "_arrow-" + e[1] ].join(" "));
},
_position:function() {},
init:function() {},
destroy:function() {},
show:function(e) {
_i_("3dab:d89f07fa");
var t = this.options.redrawOnShow || !this._rendered;
if (t && !arguments.length) return _r_(this._content($.proxy(this.show, this)));
arguments.length && this._render(e), this.trigger(this.events.show), this.root().css(this._position()).addClass(this._modCss()).removeClass(this.options.hideClass), _r_();
},
hide:function() {
if (_i_("3dab:2e196d7f"), this.hidden()) return _r_();
this.trigger(this.events.hide), this.root().addClass(this.options.hideClass), _r_();
},
redraw:function(e) {
_i_("3dab:a2f76f3c");
var t = this;
this._content(function(i) {
_i_("3dab:8051f45b"), t._render(i), "function" == typeof e && e(i), _r_();
}), _r_();
},
toggle:function(e) {
_i_("3dab:d2ee15f5"), e = arguments.length ? e :this.hidden(), this[e ? "show" :"hide"](), _r_();
},
hidden:function() {
return _i_("3dab:68ac5a4c"), _r_(!this._$root || this.root().hasClass(this.options.hideClass));
}
}, $.each([ "bind", "unbind", "one", "trigger" ], function(t, i) {
_i_("3dab:6fb3a69d"), e._base[i] = function() {
return _i_("3dab:18ac858c"), this._emitter[i].apply(this._emitter, arguments), _r_(this);
}, _r_();
}), e._mixin.rect = function(e) {
_i_("3dab:03c4cf28");
var t = e[0].getBoundingClientRect();
return "width" in t || (t = $.extend({}, t), t.width = e.outerWidth(), t.height = e.outerHeight()), _r_(t);
}, e._mixin.position = function() {
_i_("3dab:409241a4");
var e = {}, t = $(window), i = this.options.position.split(" "), n = this.options.arrowSize, r = i.shift(), a = i.shift(), o = {}, _ = 0, s = this._rect(this.root()), d = this._rect(this.handle()), c = "fixed" === this.root().css("position"), l = c ? {
top:0,
left:0
} :{
top:t.scrollTop(),
left:t.scrollLeft()
};
switch (a) {
case "top":
o.top = d.height / 2 - 1.5 * n;
break;

case "left":
o.left = d.width / 2 - 1.5 * n;
break;

case "right":
o.left = d.width / 2 - s.width + 1.5 * n;
break;

case "bottom":
o.top = d.height / 2 - s.height + 1.5 * n;
break;

default:
o.top = (d.height - s.height) / 2, o.left = (d.width - s.width) / 2;
}
switch (_ = "right" === this.options.positionAlign || "left" === this.options.positionAlign ? 0 :o.left, r) {
case "left":
e.top = l.top + d.top + o.top, e.left = l.left + d.left - s.width - n;
break;

case "right":
e.top = l.top + d.top + o.top, e.left = l.left + d.left + d.width + n;
break;

case "top":
e.top = l.top + d.top - s.height - n, "right" === this.options.positionAlign ? e.left = l.left + d.right - s.width + _ :e.left = l.left + d.left + _;
break;

default:
e.top = l.top + d.top + d.height + n, "right" === this.options.positionAlign ? e.left = l.left + d.right - s.width + _ :e.left = l.left + d.left + _;
}
return _r_(e);
}, e.tooltip = e._base.extend({
actions:{
mouseenter:"onmouseenter",
mouseleave:"onmouseleave"
},
_showTimeout:null,
_hideTimeout:null,
onmouseenter:function() {
_i_("3dab:13e1a356");
var e = this;
if (this._hideTimeout && (clearTimeout(this._hideTimeout), this._hideTimeout = null), this.options.requireTooltipClass && this.options.requireTooltipClass.length > 0 && this._$handle && !this._$handle.hasClass(this.options.requireTooltipClass)) return _r_();
this.hidden() && (this._showTimeout = setTimeout(function() {
_i_("3dab:a1b17003"), e.show(), _r_();
}, this.options.showDelay)), this.options.keepContentOnHover && (this.root().off("mouseenter").mouseenter(function() {
_i_("3dab:5a6ff10e"), e._hideTimeout && (clearTimeout(e._hideTimeout), e._hideTimeout = null), _r_();
}), this.root().off("mouseleave").mouseleave(function() {
_i_("3dab:eaf59268"), e._hideTimeout = setTimeout(function() {
_i_("3dab:8e73cc0f"), e.hide(), _r_();
}, e.options.hideDelay), _r_();
})), _r_();
},
onmouseleave:function() {
_i_("3dab:25e8074d");
var e = this;
this._showTimeout && (clearTimeout(this._showTimeout), this._showTimeout = null), this._hideTimeout = setTimeout(function() {
_i_("3dab:a55b3d11"), e.hide(), _r_();
}, this.options.hideDelay), _r_();
},
_action:function(t) {
_i_("3dab:9c3adcf5"), e._base._action.apply(this, arguments), this.options.keepOnContent && this._keepOnContent(t), _r_();
},
_keepOnContent:function(t) {
_i_("3dab:9bea6083");
var i = this, n = this.events.rootready + "._keepOnContent";
t ? this.bind(n, function() {
_i_("3dab:dc4ce97d"), e._base._action.call(i, t, i.actions, i.root()), _r_();
}) :(this.unbind(n), e._base._action.call(this, t, this.actions, this.root())), _r_();
},
defaults:{
baseClass:"fly-tooltip",
hideClass:"fly-tooltip_hidden",
extraClass:"",
position:"bottom center",
positionAlign:"",
requireTooltipClass:"",
arrowSize:10,
showDelay:300,
hideDelay:300
},
_rect:e._mixin.rect,
_position:e._mixin.position
}), e.dropdown = e._base.extend({
actions:{
click:"onclick"
},
onclick:function() {
_i_("3dab:e0f2f340"), this.toggle(), _r_();
},
onresize:function() {
if (_i_("3dab:21ae0e9f"), this.hidden()) return _r_();
this.root().css(this._position()), _r_();
},
_action:function(t) {
_i_("3dab:a26724bd"), e._base._action.apply(this, arguments), e._base._action.call(this, t, {
resize:"onresize"
}, $(window)), this._autohide(t), _r_();
},
_autohide:function(e) {
_i_("3dab:b52be699");
var t = this, i = "click" + t.ens + " keydown" + t.ens + " touchstart" + t.ens;
if (!e) return _r_();
this.bind(this.events.show, function() {
_i_("3dab:6b0560ce"), setTimeout(n, 0), _r_();
}).bind(this.events.hide, function() {
_i_("3dab:f87e6ce9"), $(document).unbind(i), _r_();
});
function n() {
_i_("3dab:0e9772b5"), $(document).bind(i, function(e) {
_i_("3dab:6c5555de");
var i = e.target, n = t.root()[0], r = t.handle()[0];
if ("keydown" === e.type && 27 === e.which || ("click" === e.type || "touchstart" === e.type) && i !== n && !$.contains(n, i) && i !== r && !$.contains(r, i)) {
if (t.options && t.options.ignoreClicksClass && $(e.target).closest(t.options.ignoreClicksClass).length) return _r_();
t.hide();
}
_r_();
}), _r_();
}
_r_();
},
defaults:{
baseClass:"fly-dropdown",
hideClass:"fly-dropdown_hidden",
extraClass:"",
position:"bottom center",
arrowSize:10
},
_rect:e._mixin.rect,
_position:e._mixin.position
}), e.hideAll = function() {
_i_("3dab:52a8348f");
for (var t = 0, i = e._instances.length; i > t; t++) "function" == typeof e._instances[t].hide && e._instances[t].hide();
_r_();
}, $.fly = e, e.register$ = function(t, i) {
if (_i_("3dab:69fe6179"), i === e._base || !(i instanceof e._base._ctor) || $.fn[t]) return _r_();
var n = "fly_" + t + "_" + +new Date();
$.fn[t] = function(e) {
_i_("3dab:50d69545");
var t;
return this.each(function(a) {
if (_i_("3dab:a465c57f"), t) return _r_(!1);
var o = $(this), _ = o.data(n);
switch (e) {
case "instance":
t = _;
break;

case "destroy":
r(_);
break;

default:
r(_), o.data(n, i.create(o, e));
}
_r_();
}), _r_(t || this);
function r(e) {
_i_("3dab:79108a0b"), e && (e.handle().removeData(n), e._destroy()), _r_();
}
}, _r_();
}, $.each(e, e.register$), _r_();
}(), $.fly.tooltip = $.fly.tooltip.extend({
actions:{
mouseenter:"onmouseenter",
mouseleave:"onmouseleave",
focus:"onmouseenter",
blur:"onmouseleave"
}
}), B.define("lists/lists-api/lists-api", function(e, t, i) {
"use strict";
_i_("3dab:98eb1ea8");
var n = e("jquery");
function r(e) {
return _i_("3dab:0c83da36"), _r_(n.extend({}, e || {}, {
aid:B.env.aid || B.env.b_aid,
lang:B.env.b_lang_for_url,
sid:B.env.b_sid,
stype:B.env.b_site_type_id || "",
currency:B.env.b_selected_currency,
label:B.env.b_label,
partner_channel_id:B.env.partner_id,
stid:B.env.b_stid
}, B.env.b_is_bbtool_admin ? {
user_is_bbtool_admin:1
} :{}));
}
function a(e) {
return _i_("3dab:0e8fd78d"), e.data = r(e.data), _r_(n.ajax(n.extend(e, {
type:"POST"
})));
}
i.exports = {
API:{
_prepareParams:r,
request:function(e, t, i) {
return _i_("3dab:f923a2a6"), _r_(a({
url:e,
data:n.extend({}, t),
success:function(e) {
return _i_("3dab:e2747043"), _r_((i || n.noop)(e));
}
}));
},
list:function(e, t) {
return _i_("3dab:906b80ff"), _r_(a({
url:"/wishlist/get",
data:n.extend({
with_hotels:1,
include_availability:1
}, e),
success:function(e) {
return _i_("3dab:e27470431"), _r_((t || n.noop)(e));
}
}));
},
listById:function(e, t) {
return _i_("3dab:eef1a227"), _r_(a({
url:"/wishlist/get",
data:{
with_hotels:1,
include_availability:1,
id:e
},
success:function(e) {
return _i_("3dab:e27470432"), _r_((t || n.noop)(e));
}
}));
},
updateComparisonHotels:function(e, t) {
return _i_("3dab:822a5f25"), _r_(a({
url:"/wishlist/save_hotel",
data:{
hotel_id:e.hotel_id,
lists:e.list_id,
new_state:1
},
success:function(e) {
_i_("3dab:5217e995"), (t || n.noop)(e), _r_();
}
}));
},
updateHotels:function(e, t) {
return _i_("3dab:04dfdb32"), _r_(a({
url:"/wishlist/save_hotels",
data:{
list:e.list_id,
hotel_ids:e.hotel_ids.join(","),
new_states:e.states.join(","),
is_recently_viewed:e.is_recently_viewed
},
success:function(e) {
_i_("3dab:5217e9951"), (t || n.noop)(e), _r_();
}
}));
},
updateList:function(e, t) {
return _i_("3dab:b2ac332b"), _r_(a({
url:"/wishlist/update",
data:e,
success:function(i) {
_i_("3dab:c43bc88d"), i.success && (B.eventEmitter.trigger("lists:api:update", e), (t || n.noop)(i)), _r_();
}
}));
},
createList:function(e, t) {
return _i_("3dab:40f718cb"), _r_(a({
url:"/wishlist/create",
data:n.extend(e, {
name:String(e.name),
privacy:String(e.privacy)
}),
success:function(e) {
_i_("3dab:5217e9952"), (t || n.noop)(e), _r_();
}
}));
},
removeList:function(e, t) {
return _i_("3dab:6c526312"), B.listmap && B.listmap.trigger("del_list"), _r_(a({
url:"/wishlist/delete",
data:{
list_id:e.list_id
},
success:function(e) {
_i_("3dab:5217e9953"), (t || n.noop)(e), _r_();
}
}));
},
updateTag:function(e, t) {
return _i_("3dab:bb0e1154"), B.listmap && B.listmap.trigger(e.is_deleted ? "del_tag" :"added_tag"), _r_(a({
url:"/tag_item",
data:{
item_id:e.list_id,
tags:e.tags,
is_deleted:e.is_deleted || 0,
type:e.type
},
success:function(e) {
_i_("3dab:5217e9954"), (t || n.noop)(e), _r_();
}
}));
},
updateNote:function(e, t) {
return _i_("3dab:b92f5e87"), B.listmap && B.listmap.trigger("save_note"), _r_(a({
url:"/wishlist/add_note",
data:{
list_id:e.list_id,
hotel_id:e.hotel_id,
note:e.note
},
success:function(e) {
_i_("3dab:5217e9955"), (t || n.noop)(e), _r_();
}
}));
},
removeHotel:function(e, t) {
return _i_("3dab:c9a21b18"), _r_(a({
url:"/wishlist/save_hotel",
data:{
hotel_id:e.hotel_id,
lists:e.lists,
new_state:0
},
success:function(e) {
_i_("3dab:5217e9956"), (t || n.noop)(e), _r_();
}
}));
},
getRecentlyViewed:function(e, t) {
return _i_("3dab:bbf78a93"), _r_(a({
url:"/wishlist/recently_viewed_hotel",
data:{
limit:e.limit,
list_id:e.list_id
},
success:function(e) {
_i_("3dab:4d895166"), (t || n.noop)({
hotels:e
}), _r_();
}
}));
},
getAvailability:function(e, t) {
return _i_("3dab:dabb2451"), _r_(a({
url:"/wishlist/get_or_update_wishlist_hotels_dates",
data:n.extend({
hotel_ids:e.hotel_ids.join(","),
checkin:e.checkin,
checkout:e.checkout,
list_id:e.list_id || "",
is_recently_viewed:e.is_recently_viewed
}, e.additional),
success:function(e) {
_i_("3dab:5217e9957"), (t || n.noop)(e), _r_();
}
}));
}
},
type:{
RECENTLY_VIEWED:"3"
},
currentHotel:function() {
_i_("3dab:54262341");
var e = {
b_hotel_id:B.env.b_hotel_id,
b_hotel_name:B.env.b_hotel_name,
b_hotel_image_url_square60:B.env.b_hotel_image_url_square60,
b_hotel_url:"",
b_hotel_image_url_square150:""
};
return e.b_hotel_image_url_square60 && (e.b_hotel_image_url_square150 = e.b_hotel_image_url_square60.replace("square60", "square150")), !e.b_hotel_image_url_square150 && B.env.b_hotel_image_url_square90 && (e.b_hotel_image_url_square150 = B.env.b_hotel_image_url_square90.replace("square90", "square150")), "hotel" === B.env.b_action && (e.b_hotel_url = location.href), _r_(e);
},
getIdFromUrl:function(e) {
_i_("3dab:2c8a92ee");
var t = /wl_id=([a-zA-Z0-9-_]+)/, i = e.match(t);
return _r_(String(i && i[1]));
},
getLastChangedListId:function() {
_i_("3dab:493d63d1");
var e = B.env.b_reg_user_last_used_wishlist;
if (e) return _r_(e && e[0] && e[0].b_reg_user_detail_list_id);
return _r_("0");
},
storedProperty:function(e, t) {
return _i_("3dab:2520647e"), window.b && window.b.storage ? ("undefined" != typeof t && window.b.storage({
key:e,
value:String(t),
location:"cookies"
}), _r_(String(window.b.storage({
key:e,
location:"cookies"
})))) :("undefined" != typeof t && n.cookie(e, String(t), {
domain:"booking.com",
path:"/"
}), _r_(n.cookie(e)));
}
}, _r_();
}), B.define("lists/lists-tools/lists-tools", function(e, t, i) {
"use strict";
_i_("3dab:6604cded"), i.exports = {
pick:function(e) {
_i_("3dab:b6e9fc48");
var t = {};
return $.each(Array.prototype.slice.call(arguments, 1), function(i, n) {
_i_("3dab:277697e4"), t[n] = e[n], _r_();
}), _r_(t);
},
stringifyUrl:function(e, t, i) {
_i_("3dab:ef5cd7b9"), t = t || "&", i = i || "=";
var n = [];
for (var r in e) e.hasOwnProperty(r) && n.push(r + i + e[r]);
return _r_(n.join(t));
},
keys:Object.keys,
throttle:function() {
_i_("3dab:c16f679e");
var e = function() {};
try {
e = B.tools.functions.throttle;
} catch (t) {
e = function(e) {
return _i_("3dab:09312373"), _r_(e());
};
}
return _r_(e);
}(),
ellipsis:function(e, t) {
if (_i_("3dab:8909674e"), e.length < t) return _r_(e);
return _r_(e.slice(0, t) + "&hellip;");
},
htmlEncode:function() {
_i_("3dab:b34f2d39");
var e = function() {};
try {
e = B.tools.string.htmlEncode;
} catch (t) {
e = function(e) {
return _i_("3dab:9938c132"), _r_(e);
};
}
return _r_(e);
}(),
htmlDecode:function() {
_i_("3dab:65722ea7");
var e = function() {};
try {
e = B.tools.string.htmlDecode;
} catch (t) {
e = function(e) {
return _i_("3dab:9e8cd5c1"), _r_(e);
};
}
return _r_(e);
}()
}, _r_();
}), B.define("lists/lists-store/lists-store", function(e, t, i) {
"use strict";
_i_("3dab:d8916acf");
var n = e("jquery"), r = e("../lists-api/lists-api").API, a = e("lists/lists-api-legacy"), o = booking.promise;
o = booking.promise ? booking.promise :function() {
_i_("3dab:da2d1514");
var e = n.Deferred();
return e.fulfill = e.resolve, _r_(e);
};
function _(e) {
if (_i_("3dab:dcc1d61c"), !a) return _r_();
if ("searchresults" === B.env.b_action && B.et.track("OOOTAIFOQSNWWcPMO")) return _r_();
if (B.env.b_show_recently_viewed_comparison) return _r_();
setTimeout(function() {
_i_("3dab:a2bed6f1"), a.clearCache(), B.eventEmitter.trigger(a.EVENTS.EDITHOTEL, e), _r_();
}, 0), _r_();
}
function s(e) {
return _i_("3dab:d057d254"), _r_(String(e.b_id || e.b_hotel_id || e.hotel_id || e.id));
}
function d(e, t) {
_i_("3dab:a331c03c"), e.on = function(e, i) {
return _i_("3dab:0c7adb8e"), B.eventEmitter.bind(t + e, function() {
_i_("3dab:ed4ddcf7");
var e = Array.prototype.slice.call(arguments, 1);
i.apply(B.eventEmitter, e), _r_();
}), _r_(this);
}, e.emit = function(e) {
_i_("3dab:e42e68fc");
var i = Array.prototype.slice.call(arguments, 1);
B.eventEmitter.trigger(t + e, i), _r_();
}, _r_();
}
function c() {
_i_("3dab:049bf94a");
var e = [];
this._lists = e, this._requestsInProgress = {}, this._fetchedHotelIds = {}, this._backCompatibility = !0, d(this, "listStore_"), _r_();
}
c.prototype.getHotelId = s, c.prototype.backCompatibility = function(e) {
_i_("3dab:0188416a"), this._backCompatibility = e, _r_();
}, c.prototype._prepareHotelsData = function(e) {
_i_("3dab:0cd114c4");
var t = this;
return e.forEach(function(e, i, n) {
_i_("3dab:c8c15a53"), e.index = i, e.index_is_first = 0 === i, e.index_is_last = i === n.length - 1, t.emit("hotel:init", e), _r_();
}), _r_(e);
}, c.prototype._prepareListsData = function(e, t) {
_i_("3dab:39370c1a");
var i = this;
return t = t || {}, e.forEach(function(e) {
_i_("3dab:38c3d222"), e.hotels_count = e.hotels_count || 0, t.hotel_id && (e.hotels || (e.hotels = []), e.selected && e.hotels.push({
id:t.hotel_id
})), i._prepareHotelsData(e.hotels || []), _r_();
}), _r_(e);
}, c.prototype.getListById = function(e) {
_i_("3dab:8ac4533f");
var t = {};
return this._lists.forEach(function(e) {
_i_("3dab:56e07c03"), t[e.id] = e, _r_();
}), _r_(t[e]);
}, c.prototype.getListByName = function(e) {
_i_("3dab:23641b0e");
var t = {};
return this._lists.forEach(function(e) {
_i_("3dab:4fffcf1f"), t[e.name_raw] = e, _r_();
}), _r_(t[e]);
}, c.prototype.getListByDefaultListId = function(e) {
_i_("3dab:72beb357");
var t = null;
return this._lists.forEach(function(i) {
_i_("3dab:300fb57a"), i.default_list && parseFloat(i.default_list) === e && (t = i), _r_();
}), _r_(t);
};
function l(e, t) {
return _i_("3dab:af8d385b"), _r_(new Array(e + 1).join(String(t)).split(""));
}
c.prototype.toggleHotel = function(e) {
_i_("3dab:c06b9106");
var t = o(), i = this.getHotelById(e);
return i ? this.removeHotels({
hotels:[ i ],
list_id:e.list_id
}).then(function(e) {
_i_("3dab:ad9869e3"), t.fulfill({
res:e,
state:!1
}), _r_();
}) :this.addHotels({
hotels:[ {
hotel_id:e.hotel_id
} ],
list_id:e.list_id
}).then(function(e) {
_i_("3dab:4250f25f"), t.fulfill({
res:e,
state:!0
}), _r_();
}), _r_(t);
}, c.prototype.addComparisonHotels = function(e) {
_i_("3dab:28c88cb3");
var t = this, i = o(), n = s(e.hotel);
return this.emit("list:changed:loading", !0, e), r.updateComparisonHotels({
list_id:e.list_id,
hotel_id:n
}, function(r) {
_i_("3dab:e0949b60");
var a = t.getListById(e.list_id);
if (a.hotels = a.hotels || [], Array.prototype.push.apply(a.hotels, t._prepareHotelsData(r.hotels_data)), "undefined" != typeof a.hotels_count && (a.hotels_count += 1), B.eventEmitter.trigger("lists:hotels:added", e), t.emit("list:changed:loading", !1, e), t.emit("list:changed", a, {
hotel_ids:[ n ]
}), i.fulfill(r), !t._backCompatibility) return _r_();
_({
params:{
hotel_id:n,
lists:e.list_id
},
result:r
}), _r_();
}), _r_(i);
}, c.prototype.addHotels = function(e) {
_i_("3dab:0687b0df");
var t = this, i = o(), n = e.hotels.map(s);
return this.emit("list:changed:loading", !0, e), r.updateHotels({
list_id:e.list_id,
hotel_ids:n,
states:l(e.hotels.length, 1)
}, function(r) {
_i_("3dab:db5a74fa");
var a = t.getListById(e.list_id);
if (a.hotels = a.hotels || [], Array.prototype.push.apply(a.hotels, t._prepareHotelsData(r.hotels_data)), "undefined" != typeof a.hotels_count && (a.hotels_count += 1), B.eventEmitter.trigger("lists:hotels:added", e), t.emit("list:changed:loading", !1, e), t.emit("list:changed", a, {
hotel_ids:n
}), i.fulfill(r), !t._backCompatibility) return _r_();
_({
params:{
hotel_id:n[0],
lists:e.list_id
},
result:r
}), _r_();
}), _r_(i);
}, c.prototype.getListByIndex = function(e) {
return _i_("3dab:51324ddb"), _r_(this._lists[e]);
}, c.prototype.removeHotels = function(e) {
_i_("3dab:5caff346");
var t = this, i = o(), n = t.getListById(e.list_id);
e.hotels.forEach(function(e) {
_i_("3dab:bd03cf07");
var i = t.getHotelIndexById({
hotel_id:s(e),
list_id:n.id
});
-1 !== i && n.hotels.splice(i, 1), _r_();
}), B.eventEmitter.trigger("hotels:before:removed", e);
var a = e.hotels.map(s);
return this.emit("list:changed:loading", !0, e), r.updateHotels({
list_id:e.list_id,
hotel_ids:a,
states:l(e.hotels.length, 0)
}, function(r) {
if (_i_("3dab:0ccde84f"), n.hotels_count && (n.hotels_count -= e.hotels.length), B.eventEmitter.trigger("hotels:removed", e), t.emit("list:changed:loading", !1, e), t.emit("list:changed", n, {
hotel_ids:a
}), i.fulfill(r), !t._backCompatibility) return _r_();
_({
params:{
hotel_id:a[0],
lists:e.list_id,
new_state:0
},
result:r
}), _r_();
}), _r_(i);
}, c.prototype.createList = function(e) {
_i_("3dab:d459cd68");
var t = this, i = o();
return r.createList(n.extend(e, {
name:e.name
}), function(n) {
if (_i_("3dab:6e9f7ea3"), !n.success || !n.id) return _r_(i.reject(n));
t._lists.push(n), n.hotels = [], n.hotels_count = 0, e.hotel_id && (n.hotels.push({
hotel_id:e.hotel_id
}), n.hotels_count++), t.emit("list:created", n, {
hotel_ids:[ e.hotel_id ]
}), B.eventEmitter.trigger("lists:created", e), i.fulfill(n), _r_();
}), _r_(i);
}, c.prototype.updateList = function(e) {
_i_("3dab:8a7fcc67");
var t = o(), i = this.getListById(e.list_id);
return n.extend(i, e), r.updateList(e, function(e) {
_i_("3dab:2c5bd41d"), t.fulfill(e), _r_();
}), _r_(t);
}, c.prototype.getHotels = function(e) {
_i_("3dab:2bba7f7b");
var t = this, i = o();
if (e.hotels && e.hotels.length > 0 && Number(e.hotels_count) === e.hotels.length && e.hotels[0].name) return i.fulfill(e), _r_(i);
return t.emit("list:hotels:loading", !0), r.list({
id:e.id,
with_hotels:1,
include_availability:1,
comparison_mode:B.env.fe_cdm_wl_fetch_additional_data
}, function(n) {
if (_i_("3dab:a9e5eab0"), !n.success) return _r_(i.reject(n));
var r = n.lists[0];
e.hotels = t._prepareHotelsData(r.hotels), r && r.travel_group && (e.travel_group = r.travel_group), t.emit("list:hotels:loading", !1), i.fulfill(e), _r_();
}), _r_(i);
}, c.prototype.removeList = function(e) {
_i_("3dab:b2cefa4e");
var t = this, i = -1;
if (this._lists.forEach(function(t, n) {
_i_("3dab:075cbcae"), String(e.list_id) === String(t.id) && (i = n), _r_();
}), -1 === i) return _r_();
this._lists.splice(i, 1), r.removeList({
list_id:e.list_id
}, function() {
_i_("3dab:95153695"), t.emit("list:removed", e), _r_();
}), _r_();
}, c.prototype._find = function(e) {
_i_("3dab:f464991e");
var t = this, i = null, n = -1, r = t.getListById(e.list_id);
return e.list_id ? r.hotels.forEach(function(t, r) {
_i_("3dab:8736545e"), s(t) === String(e.hotel_id) && (i = t, n = r), _r_();
}) :t._lists.forEach(function(t) {
_i_("3dab:5d3377bf"), t.hotels.forEach(function(t, r) {
_i_("3dab:90a83c36"), s(t) === String(e.hotel_id) && (i = t, n = r), _r_();
}), _r_();
}), _r_({
index:n,
res:i
});
}, c.prototype.getHotelById = function(e) {
return _i_("3dab:5e5be210"), _r_(this._find(e).res);
}, c.prototype.getHotelIndexById = function(e) {
return _i_("3dab:e8309e62"), _r_(this._find(e).index);
}, c.prototype.fetch = function(e) {
_i_("3dab:2b3d7e15"), e = e || {};
var t = this, i = o();
if (this._requestsInProgress[JSON.stringify(e)]) return _r_(this._requestsInProgress[JSON.stringify(e)]);
if (t._lists.length > 0) {
if (!e.hotel_id) return i.fulfill({
lists:t._lists
}), _r_(i);
if (t._fetchedHotelIds[e.hotel_id]) return i.fulfill({
lists:t._lists
}), _r_(i);
}
this._requestsInProgress[JSON.stringify(e)] = i, e.hotel_id || t.emit("liststore:loading", !0);
function a(n) {
if (_i_("3dab:885dc042"), t._lists.length = 0, null === n) return _r_();
Array.prototype.push.apply(t._lists, t._prepareListsData(n.lists, e)), t.emit("liststore:loading", !1), t._requestsInProgress[JSON.stringify(e)] = null, i.fulfill(n), _r_();
}
function _(n) {
_i_("3dab:5391845e"), t._fetchedHotelIds[e.hotel_id] = !0;
var r = t._prepareListsData(n.lists, e);
r.forEach(function(e) {
_i_("3dab:929ec912");
var i = t.getListById(e.id);
i ? (i.hotels || (i.hotels = []), e.hotels.forEach(function(e) {
_i_("3dab:c06bbdf7");
var n = t.getHotelById({
list_id:i.id,
hotel_id:t.getHotelId(e)
});
n || i.hotels.push(e), _r_();
})) :t._lists.push(e), _r_();
}), t._requestsInProgress[JSON.stringify(e)] = null, i.fulfill(n), _r_();
}
return e.hotel_id ? r.list(n.extend({}, e), _) :r.list(n.extend({}, e), a), _r_(i);
}, c.prototype.getLists = function() {
return _i_("3dab:4c651522"), _r_(this._lists);
}, c.prototype.clearCache = function() {
_i_("3dab:8882ebf3"), this._lists.length = 0, _r_();
}, i.exports = new c(), _r_();
}), B.define("lists/listview-header/listview-header", function(e, t, i) {
"use strict";
_i_("3dab:40c22637");
var n = e("../listview-dropdown/listview-dropdown"), r = e("../lists-store/lists-store");
function a() {
_i_("3dab:e2ad723a");
var e = this, t = {
RENAME:".js-listview-header-list-rename",
REMOVE:".js-listview-header-list-remove"
};
function i() {
_i_("3dab:fd1e2aa5");
var i = r._lists.length <= 1;
e.el.find(t.REMOVE).toggleClass("g-hidden", i), _r_();
}
r.on("list:removed", $.proxy(i, e)), r.on("list:created", $.proxy(i, e)), this.el.delegate(t.RENAME, "click", function(t) {
_i_("3dab:65731034"), t.preventDefault(), n.renameList.call(e, e.getCurrentList()), _r_();
}), this.el.delegate(t.REMOVE, "click", function(t) {
_i_("3dab:42ea5233"), t.preventDefault(), n.removeList.call(e, e.getCurrentList()), _r_();
}), this.el.delegate(".listview-header-recent-link", "click", function(t) {
_i_("3dab:6067b4d8"), t.preventDefault(), e.toggleRecentlyViewed(), _r_();
}), _r_();
}
i.exports = a, _r_();
}), B.define("lists/listview-touch/listview-touch", function(e, t, i) {
"use strict";
_i_("3dab:d7ee2ded");
function n() {
_i_("3dab:1c7d7432"), $(document.body).toggleClass("listview--is-tablet", B.env.b_is_tdot_traffic), B.eventEmitter.bind("foldout:login:success", function() {
if (_i_("3dab:027f4e08"), !window.listView) return _r_();
window.listView.clearCache(), _r_();
}), _r_();
}
n.isEnabled = function() {
return _i_("3dab:008c2002"), _r_(B.env.b_is_tdot_traffic);
}, i.exports = n, _r_();
}), B.define("lists/listview-dropdown/listview-dropdown", function(e, t, i) {
"use strict";
_i_("3dab:73c026b8");
var n = e("jquery"), r = e("../lists-tools/lists-tools"), a = e("../lists-store/lists-store"), o = e("../listview-touch/listview-touch");
function _() {
_i_("3dab:564893a5");
var e = this, t = "listview__dropdown";
o.isEnabled() && (t += " listview__dropdown--touch"), n.fly.dropdown.extend({
defaults:{
position:"bottom center",
extraClass:t,
content:function() {
return _i_("3dab:e1463fe3"), _r_(B.jstmpl("listview_dropdown").render({
lists:n.map(a._lists, function(e) {
return _i_("3dab:69da53b5"), _r_(n.extend({
name_short:r.ellipsis(e.name, 18)
}, e));
}),
lists_count:a._lists.length,
currentList:e.getCurrentList(),
b_user_auth_level_is_low_or_high:B.env.b_user_auth_level_is_low_or_high,
b_lang:B.env.b_lang
}));
}
},
onrootready:function() {
_i_("3dab:abc4b1af");
var t = 10004, i = this;
i.bind("show", function() {
_i_("3dab:f423c49a"), B.eventEmitter.trigger("listview:open-dropdown"), _r_();
}), i.root().css("z-index", t).delegate(".js-listview-change-list", "click", function(t) {
_i_("3dab:b0dcf037"), t.preventDefault();
var r = n(t.currentTarget).data("id");
e.setCurrentList({
id:r
}), i.hide(), _r_();
}).delegate(".js-listview-rename-list", "click", function(t) {
_i_("3dab:76c95362"), t.preventDefault(), t.stopPropagation();
var r = n(t.currentTarget).closest(".listview__list").data("id"), a = e.getListById(r);
_.renameList.call(e, a), i.hide(), _r_();
}).delegate(".js-listview-remove-list", "click", function(t) {
_i_("3dab:cbe0408f"), t.preventDefault(), t.stopPropagation();
var r = n(t.currentTarget).closest(".listview__list").data("id");
_.removeList.call(e, {
id:r
}, function() {
_i_("3dab:7fcf1149"), i.hide(), _r_();
}), _r_();
}).delegate(".js-listview-create-list", "click", function(t) {
_i_("3dab:3c2d0442"), t.preventDefault(), t.stopPropagation();
var r = "lists_map_list_name", o = n.trim(window.prompt(B.jstmpl.translations(r), ""));
if (!o) return _r_();
a.createList({
name:o
}).then(function(t) {
_i_("3dab:ddb37ec6"), e.setCurrentList({
id:t.id
}), i.hide(), _r_();
}), _r_();
}), _r_();
}
}).delegate(".js-listview-header-dropdown"), _r_();
}
_.renameList = function(e) {
_i_("3dab:836a1cdf");
var t = "dsf_rename_list_dialogue", i = n.trim(window.prompt(B.jstmpl.translations(t), e.name));
if (!i) return _r_();
a.updateList({
list_id:e.id,
name:r.htmlEncode(i)
}), this.renderHeader(), _r_();
}, _.removeList = function(e, t) {
_i_("3dab:026eb9e3");
var i = n.trim(B.jstmpl.translations("wishlist_delete_prompt"));
window.confirm(i) && (a.removeList({
list_id:e.id
}), B.eventEmitter.trigger("listview:remove-list"), t && t()), _r_();
}, i.exports = _, _r_();
}), B.define("lists/listview-travel-party/listview-travel-party", function(e, t, i) {
"use strict";
_i_("3dab:78dc2384");
var n = e("jquery"), r = e("../lists-tools/lists-tools");
function a(e) {
_i_("3dab:a30a7549"), setTimeout(function() {
_i_("3dab:d121081c"), e.resizeLightbox(), _r_();
}, 300), _r_();
}
function o() {
_i_("3dab:63f4a80c");
var e = this;
B.env.b_is_wishlist_singlepage || e.el.find(".b-selectbox__groupselection").bind("change", function() {
_i_("3dab:44121b96"), a(e), _r_();
}), B.eventEmitter.bind("change:list:hotels", function(t, i) {
_i_("3dab:6205c0be");
var r = i.travel_group;
if ((!r || n.isEmptyObject(r)) && (r = {
rooms:1,
adults:2,
children:0
}), 1 === Number(r.rooms) && 0 === Number(r.children) && B.search.group("adults") === Number(r.adults)) return _r_();
B.search.group(r), B.env.b_is_wishlist_singlepage || a(e), _r_();
}), _r_();
}
o.buildUrlPart = function() {
_i_("3dab:2483c123");
var e = B.env.b_query_params_delimiter, t = n.map(B.search.group("childrenAges"), function(e) {
return _i_("3dab:9fad1a75"), _r_("age=" + e);
}).join(e), i = e + r.stringifyUrl({
group_rooms:B.search.group("rooms"),
group_adults:B.search.group("adults"),
group_children:B.search.group("children")
}, e) + e + t;
return _r_(i);
}, o.buildAvailabilityParams = function() {
_i_("3dab:7e6e9cb3");
var e = r.pick(B.search.group("value"), "rooms", "adults", "children", "childrenAges");
return e.childrenAges && (e.childrenAges = e.childrenAges.join(" ")), _r_({
additional:e
});
}, i.exports = o, _r_();
}), B.define("lists/listview-calendar/listview-calendar", function(e, t, i) {
"use strict";
_i_("3dab:d00e6aeb");
var n = e("../lists-tools/lists-tools"), r = e("../listview-hotel/listview-hotel"), a = e("../listview-availability/listview-availability"), o = "silent_update";
function _() {
if (_i_("3dab:754b5e26"), B.calendar2 && _._bindEvents.call(this), B.search) {
var e = B.search.dates;
B.search.dates = function(t, i, n) {
if (_i_("3dab:8e4cc0a1"), "undefined" == typeof n) return _r_(e.apply(B.search, arguments));
return i = B.Search.createDate(i), _r_(this.setDate_(t, i, n));
};
}
_r_();
}
_._bindEvents = function() {
_i_("3dab:d4e8ab09");
function e(e, t, i) {
_i_("3dab:0010cb49"), e.availability[t] = i.toString(), e.availability[t + "_localized_date_short"] = B.formatter.date(i.toString(), "short_date_without_year"), _r_();
}
var t = 0, i = this, s = null, d = $.extend({}, B.calendar2.checkinOptions, {
lazy:!1
}), c = $.extend({}, B.calendar2.checkoutOptions, {
lazy:!1
}), l = this.el.find(".b-form-checkin .b-datepicker").calendar2(d).data("calendar2"), u = this.el.find(".b-form-checkout .b-datepicker").calendar2(c).data("calendar2");
function f(e, t) {
_i_("3dab:1229a279"), B.eventEmitter.off("SEARCH:date_changed", p);
var i = B.search.dates("checkout");
i >= t ? (B.search.dates("checkin", e, {
referrer:o
}), B.search.dates("checkout", t, {
referrer:o
})) :(B.search.dates("checkout", t, {
referrer:o
}), B.search.dates("checkin", e, {
referrer:o
})), B.eventEmitter.bind("SEARCH:date_changed", p), _r_();
}
function h(e) {
_i_("3dab:c922f270");
var t = B.Search.createDate(e);
return _r_({
date:t,
dayId:B.calendar2.dayId(t.year, t.month, t.date),
monthId:B.calendar2.monthId(t.year, t.month)
});
}
function b(e) {
_i_("3dab:c17df87b");
var t = e ? e.availability || {} :{};
if (t.checkin && t.checkout) {
var i = h(t.checkin), n = h(t.checkout);
f(i.date, n.date), l.selectRange(i.dayId, n.dayId), l.selectMonth(i.monthId), u.selectRange(i.dayId, n.dayId), u.selectMonth(n.monthId);
}
_r_();
}
B.eventEmitter.bind("SEARCH:date_changed", p);
function p(r, d) {
if (_i_("3dab:a6e1ac73"), !s || d.referrer === o) return _r_();
"checkin" === d.type && e(s, "checkin", d.value), "checkout" === d.type && e(s, "checkout", d.value), s.availability.checkout || (_.ensureDates(), e(s, "checkout", B.search.dates("checkout"))), s.availability.checkin || (_.ensureDates(), e(s, "checkin", B.search.dates("checkin"))), t = setTimeout(function() {
if (_i_("3dab:df5eaa75"), t && window.clearTimeout(t), !s) return _r_();
a.checkAvailability({
list:i.getCurrentList(),
hotels:[ s ],
dates:n.pick(s.availability, "checkin", "checkout")
}), B.eventEmitter.trigger("listview:check-single-hotel-availability"), s = null, _r_();
}, 100), _r_();
}
this.el.delegate(".js-listview-toggle-calendar", "click", function(e) {
_i_("3dab:f9acb841"), e.preventDefault(), s = i.getHotelFromEvent(e), r.setHotelProperty(s, "edit", !0);
var t = $(e.currentTarget).attr("data-type");
b(s), setTimeout(function() {
_i_("3dab:c33662b0"), i.el.find(".b-form-" + t + " .b-datepicker").trigger("showCalendar"), _r_();
}, 0), _r_();
}), _r_();
}, _.ensureDates = function() {
if (_i_("3dab:9104b4ed"), !(B.search.dates("checkin") instanceof B.Search.Date && B.search.dates("checkout") instanceof B.Search.Date)) {
var e = new Date();
B.search.dates("checkin", {
date:e.getDate(),
month:e.getMonth(),
year:e.getFullYear()
}), B.search.dates("checkout") instanceof B.Search.MonthDate && B.search.dates("checkout", {
date:1,
month:B.search.dates("checkout").month,
year:B.search.dates("checkout").year
});
}
_r_();
}, i.exports = _, _r_();
}), B.define("lists/listview-note/listview-note", function(e, t, i) {
"use strict";
_i_("3dab:caf77299");
var n = e("../lists-api/lists-api").API;
function r(e) {
_i_("3dab:b7c55e46"), $(e).find("textarea").each(function() {
_i_("3dab:8b0a7c53"), this.setAttribute("style", "height:" + (this.scrollHeight - 5) + "px; overflow-y:hidden;"), _r_();
}).bind("input", function() {
_i_("3dab:be974f91"), this.style.height = "auto", this.style.height = this.scrollHeight - 5 + "px", _r_();
}), _r_();
}
function a() {
return _i_("3dab:03ed84e3"), $.extend(this, {
noteInput:function(e, t) {
_i_("3dab:54c35889");
var i = this.getHotelNodeById(e.id), n = i.find(".js-listview-note-text");
return "string" == typeof t && n.val(t), _r_(n.val());
},
toggleNote:function(e, t) {
_i_("3dab:67731d23");
var i = this.getHotelNodeById(e.id);
i.find(".js-listview-note").toggleClass("g-hidden", !t), t && i.find(".js-listview-note-text").focus(), r(i), _r_();
},
toggleWrapper:function(e, t) {
_i_("3dab:b16cd9ef");
var i = this.getHotelNodeById(e.id), n = i.find(".js-listview-note-toggle-wrapper");
n.css("visibility", t ? "visible" :"hidden"), _r_();
},
toggleNoteControls:function(e, t, i) {
_i_("3dab:f53fbc2e");
var n = this.getHotelNodeById(e.id);
n.find(".listview-note__controls").toggleClass("g-hidden", !t), i && i.blur && n.find(".js-listview-note-text").blur(), _r_();
},
showSavedConfirmation:function(e) {
if (_i_("3dab:c42dd007"), "" === e.note) return _r_();
var t = this.getHotelNodeById(e.id), i = "listview-note__saved--showing", n = t.find(".js-listview-note-saved");
n.addClass(i), setTimeout(function() {
_i_("3dab:1dc285eb"), n.removeClass(i), _r_();
}, 2e3), _r_();
},
setHotelNote:function(e) {
_i_("3dab:8608e8a0");
var t = this, i = this.getHotelById(e);
i.note = e.note, this.noteInput(i, e.note), n.updateNote({
list_id:e.list_id,
hotel_id:e.hotel_id,
note:e.note
}, function() {
_i_("3dab:f816e75a"), t.showSavedConfirmation(i), _r_();
}), _r_();
},
_bindNoteEvents:function() {
_i_("3dab:6a76824d");
var e = this;
this.delegateEvents({
"click .js-listview-note-toggle":function(e) {
_i_("3dab:81a02e2f"), e.preventDefault();
var t = this.getHotelFromEvent(e);
this.toggleWrapper(t, !1), this.toggleNote(t, !0), _r_();
},
"mousedown .js-listview-note-save":function(e) {
_i_("3dab:69f705dd"), e.preventDefault();
var t = this.getHotelFromEvent(e);
this.setHotelNote({
hotel_id:t.id,
list_id:this.currentList().id,
note:this.noteInput(t)
}), this.toggleNoteControls(t, !1, {
blur:!0
}), _r_();
},
"mousedown .js-listview-note-remove":function(e) {
_i_("3dab:326e5884"), e.preventDefault();
var t = this.getHotelFromEvent(e);
this.toggleWrapper(t, !0), this.toggleNote(t, !1), this.setHotelNote({
hotel_id:t.id,
list_id:this.currentList().id,
note:""
}), this.toggleNoteControls(t, !1, {
blur:!0
}), _r_();
},
"blur .js-listview-note-text":function(e) {
_i_("3dab:d9779921");
var t = this.getHotelFromEvent(e);
$(e.currentTarget).removeClass("listview-note__text--active"), this.toggleNoteControls(t, !1), t.note || this.noteInput(t) || (this.toggleNote(t, !1), this.toggleWrapper(t, !0)), _r_();
},
"focus .js-listview-note-text":function(e) {
_i_("3dab:f9cedccb");
var t = this.getHotelFromEvent(e);
$(e.currentTarget).addClass("listview-note__text--active"), this.toggleNoteControls(t, !0), _r_();
}
}), B.eventEmitter.bind("listview:rendered:hotels", function() {
_i_("3dab:4f67f87f"), r(e.el), _r_();
}), B.eventEmitter.bind("listview:rendered:hotel", function(e, t) {
_i_("3dab:7d028771"), r(t), _r_();
}), _r_();
}
}), _r_(this);
}
i.exports = a, _r_();
}), B.define("lists/listview-tabs/listview-tabs", function(e, t, i) {
"use strict";
_i_("3dab:af4d776e");
function n(e) {
if (_i_("3dab:b62f9dd0"), this._el = e.el, 0 === this._el.length) return _r_();
this._currentTab = null, this.currentTab(e.current), this.onSwitch = e.onSwitch, _r_();
}
n.prototype.currentTab = function(e) {
if (_i_("3dab:3617f097"), "undefined" == typeof e) return _r_(this._currentTab);
var t = this._el.find('[data-tab="' + e + '"]');
if (0 === t.length) throw new Error("[listview-tabs] No such tab");
this._currentTab = e;
var i = t.data("tab-template");
i && 0 === t.children().length && t.html(B.jstmpl(i).render()), "function" == typeof this.onSwitch && this.onSwitch(e, t), this._el.find("[data-tab]").not(t).addClass("g-hidden"), t.removeClass("g-hidden"), _r_();
}, i.exports = n, _r_();
}), B.define("lists/listview-share/listview-share", function(e, t, i) {
"use strict";
_i_("3dab:d537bde5");
var n = e("jquery");
function r() {
_i_("3dab:7227e1cf");
var e = this;
if ("0" === B.env.auth_level) return this.delegateEvents({
"click .js-listview-share-link":function(e) {
_i_("3dab:90b1e825"), e.preventDefault(), B.lightbox.hide(), B.command("show-auth-lightbox").run(), _r_();
}
}), _r_();
var t = n.fly.dropdown.extend({
defaults:{
position:"bottom center",
extraClass:"listview-share",
content:function() {
return _i_("3dab:7bc1d070"), _r_(B.jstmpl("listview_share").render(n.extend(e.getCurrentList(), {
b_selected_language:B.env.b_selected_language
})));
}
},
selectInput:function() {
_i_("3dab:433950c6");
function e() {
_i_("3dab:f373ee48"), this.root().find(".js-listview-share-url").select(), _r_();
}
setTimeout(e.bind(this), 100), _r_();
},
handleClick:function(e) {
_i_("3dab:a44bbf9c"), e.preventDefault(), this.selectInput(), _r_();
},
onrootready:function() {
_i_("3dab:6a58696e");
var e = this, t = 10004;
this.bind("show", this.selectInput.bind(this)), this.bind("show", function() {
_i_("3dab:6d547d73"), e.root().loadComponents(), _r_();
}), this.root().css("z-index", t).delegate(".js-listview-share-url", "click", this.handleClick.bind(this)), B.et.goal("wl_invite_friends"), _r_();
}
});
t.delegate(".js-listview-share-link"), _r_();
}
i.exports = r, _r_();
}), B.define("lists/lists-listview/lists-listview", function(e, t, i) {
"use strict";
_i_("3dab:9b33fb1f");
var n = e("../lists-tools/lists-tools"), r = e("../lists-api/lists-api"), a = e("../lists-api/lists-api").API, o = e("../lists-store/lists-store"), _ = e("../listview-dropdown/listview-dropdown"), s = e("../listview-travel-party/listview-travel-party"), d = e("../listview-calendar/listview-calendar"), c = e("../listview-header/listview-header"), l = e("../listview-touch/listview-touch"), u = e("../listview-tabs/listview-tabs"), f = e("../listview-share/listview-share"), h = e("../listview-header/listview-create-list"), b = e("../listview-template/listview-template"), p = e("../listview-hotel/listview-hotel"), g = e("../listview-availability/listview-availability"), m = e("jquery");
function v(e) {
_i_("3dab:9e6bd607");
var t = this;
this.el = e.el, this._currentList = {
id:"",
hotels:[],
name:"",
url:"",
privacy:"",
hotels_count:0
}, this._prevList = null, this.store = o, this._isShown = !1, o.on("hotel:init", function(e) {
_i_("3dab:23322de5"), g.setHotelAvailability(e, e.availability || {}, {
updateNights:!0,
silent:!0
}), _r_();
}), l.isEnabled() && l.call(this);
var i = "mywishlist" === B.env.b_action && "www" === B.env.b_site_type ? "loader" :"main";
this.tabs = new u({
el:this.el,
current:i,
onSwitch:function(e) {
_i_("3dab:88c77053"), "main" === e && t.renderHeader(), _r_();
}
}), _r_();
}
v.prototype.renderHeader = function() {
_i_("3dab:14063afe");
var e = this.getCurrentList(), t = B.jstmpl("listview_header").render(m.extend({
currentList:e,
currentTabName:this.tabs.currentTab(),
b_selected_language:B.env.b_selected_language,
prevList:this.getPrevList()
}, b.getEnv()));
this.el.find(".js-listview-header-wrapper").html(t).loadComponents(), _r_();
}, v.prototype.getHotelById = function(e) {
return _i_("3dab:fee295e2"), e.list_id = e.list_id || this.getCurrentList().id, _r_(o.getHotelById(e));
}, v.prototype.getHotelNodesById = function(e) {
return _i_("3dab:166424c0"), _r_(this.el.find('.listview-hotel[data-id="' + String(e) + '"]'));
}, v.prototype.getHotelNodeFromEvent = function(e) {
return _i_("3dab:168e5f3b"), _r_(m(e.currentTarget).closest(".listview-hotel"));
}, v.prototype.getHotelFromEvent = function(e) {
_i_("3dab:faa38b78");
var t = this.getHotelNodeFromEvent(e), i = t.attr("data-id");
return _r_(i && this.getHotelById({
hotel_id:i
}));
}, v.prototype.delegateEvents = function(e) {
_i_("3dab:cf090e3a");
for (var t in e) {
var i = t.split(" ");
this.el.delegate(i[1], i[0], e[t].bind(this));
}
return _r_(this);
}, v.prototype._bindEvents = function() {
_i_("3dab:dd5f9dc6");
var e = this;
o.on("list:hotels:loading", function(t) {
_i_("3dab:4a157692"), t ? e.tabs.currentTab("loader") :e.tabs.currentTab("main"), _r_();
}), o.on("list:removed", function(t) {
if (_i_("3dab:53a89d51"), String(e.getCurrentList().id) !== String(t.list_id)) return _r_();
var i = o.getListByIndex(0);
if (!i) return _r_();
e.setCurrentList(i), _r_();
}), o.on("change:hotel_b_undo", function(t) {
_i_("3dab:dd9088f3"), e.toggleUndoBlockAnimation(t), e.renderHotel(t);
var i = e.getCurrentList();
a.updateHotels({
list_id:i.id,
hotel_ids:[ t.hotel_id ],
states:[ t.b_undo ? 0 :1 ],
is_recently_viewed:i.is_recently_viewed
}), _r_();
}), o.on("change:hotel_loading", function(t) {
_i_("3dab:9a1e4ffb"), e.getHotelNodesById(t.id).toggleClass("listview-hotel--loading", t.loading), _r_();
}), o.on("change:hotel_hidden", function(t) {
_i_("3dab:40cc4554"), setTimeout(function() {
_i_("3dab:d643ea01");
var i = e.getHotelNodesById(t.id);
t.hidden ? i.hide() :i.slideDown(), _r_();
}, 0), _r_();
}), B.eventEmitter.bind("change:list", function(t, i) {
_i_("3dab:ae11abcc"), i && (o.getHotels(i).then(function() {
_i_("3dab:3d341bd5"), e.renderHotels(i), B.eventEmitter.trigger("change:list:hotels", i), i && i.hotels_count || e.tabs.currentTab("main"), _r_();
}), e.renderHeader()), _r_();
}), B.eventEmitter.bind("lists:hotels:added", function() {
_i_("3dab:bd6cd47f"), e.setCurrentList({
id:e.getCurrentList().id
}), _r_();
}), B.eventEmitter.bind("hotels:before:removed", function(t, i) {
_i_("3dab:512c8f8a");
var n = i.hotels[0];
e.getHotelNodesById(n.id).slideUp(function() {
_i_("3dab:1df57c9c"), e.updateRootClassNames(), e.renderHeader(), _r_();
}), _r_();
}), B.eventEmitter.bind("change:hotel", function(t, i) {
_i_("3dab:fa55c390"), e.renderHotel(i), _r_();
});
var t = !1;
this.delegateEvents({
"click .js-go-to-list":function() {
_i_("3dab:5b84444d"), B.eventEmitter.trigger("listview:go-to-listmap-page"), _r_();
},
"click .js-listview-hotel-title":function() {
_i_("3dab:d1443796"), B.eventEmitter.trigger("listview:click-on-hotel-link"), _r_();
},
"click .js-listview-hotel-image":function() {
_i_("3dab:3a1773fe"), B.eventEmitter.trigger("listview:click-on-hotel-image"), _r_();
},
"click .js-listview-book":function(e) {
_i_("3dab:0ae7d147"), B.eventEmitter.trigger("listview:book-now-clicked"), _r_();
},
"click .js-check-availability":function(e) {
_i_("3dab:f638a368"), e.preventDefault(), d.ensureDates(), t || (t = !0), B.eventEmitter.trigger("listview:check-all-hotels-availability"), g.checkAvailability({
list:this.getCurrentList(),
dates:{
checkin:B.search.dates("checkin").toString(),
checkout:B.search.dates("checkout").toString()
}
}), _r_();
},
"click .js-listview-add":function(e) {
_i_("3dab:f889e25c"), e.preventDefault(), o.addHotels({
hotels:[ r.currentHotel() ],
list_id:this.getCurrentList().id
}), _r_();
},
"click .js-listview-add-hotel":function(e) {
_i_("3dab:f71fa561"), e.preventDefault();
var t = m(e.currentTarget).attr("data-hotel-id");
o.addHotels({
hotels:[ {
b_hotel_id:t
} ],
list_id:this.getCurrentList().id
}), _r_();
},
"click .js-remove-hotel":function(e) {
_i_("3dab:a5dcde8a"), e.preventDefault();
var t = this.getHotelFromEvent(e);
p.setHotelProperty(t, "b_undo", !0), _r_();
},
"click .js-listview-undo":function(e) {
_i_("3dab:777ca624"), e.preventDefault();
var t = this.getHotelFromEvent(e);
p.setHotelProperty(t, "b_undo", !1), _r_();
},
"click .js-listview-footer-signin-link":function(e) {
_i_("3dab:1cac7490"), e.preventDefault(), B.lightbox.hide(), B.command("show-auth-lightbox").run(), _r_();
},
"click .js-listview-footer-remove-msg":function(t) {
_i_("3dab:3562d672"), t.preventDefault(), e.toggleSigninBlock(!1), _r_();
},
"click .js-listview-signin-banner-remove":function(e) {
_i_("3dab:f7648ac4"), e.preventDefault(), m.cookie("tfl_listview_show_signin_banner", 1, {
expires:999,
path:"/"
}), this.renderHotels(this.getCurrentList()), _r_();
}
}), B.env.b_is_shared_wishlist && (m(".js-listview-footer-signin-link").on("click", function(e) {
_i_("3dab:1cac74901"), e.preventDefault(), B.lightbox.hide(), B.command("show-auth-lightbox").run(), _r_();
}), m(".js-listview-signin-banner-remove").on("click", function(e) {
_i_("3dab:21cdc8a9"), e.preventDefault(), m.cookie("tfl_listview_show_signin_banner", 1, {
expires:999,
path:"/"
}), m(this).closest(".listview-signin-banner").remove(), _r_();
})), B.env.b_is_wishlist_singlepage || m(window).resize(n.throttle(function() {
_i_("3dab:a1e0765a"), e.resizeLightbox(), _r_();
}, 1e3)), d.call(this), _.call(this), l.isEnabled() || s.call(this), c.call(this), f.call(this), h.call(this), this._bindGA(), _r_();
}, v.prototype.toggleUndoBlockAnimation = function(e) {
_i_("3dab:a2da3db4"), clearTimeout(e.hide_timeout_id), e.b_removed = !1, this.getHotelNodesById(e.id).removeClass("listview-hotel--undo"), e.b_undo && (e.hide_timeout_id = setTimeout(this.hideUndoBlock.bind(this, e), 4e3)), _r_();
}, v.prototype.hideUndoBlock = function(e) {
if (_i_("3dab:98dba6ab"), !e.b_undo) return _r_();
this.getHotelNodesById(e.id).each(function(t, i) {
if (_i_("3dab:6231d36f"), i = m(i), !i.hasClass("listview-hotel--undo")) return _r_();
e.b_removed = !0, i.addClass("listview-hotel--hide"), setTimeout(function() {
_i_("3dab:7869d02e"), e.b_undo && i.remove(), _r_();
}, 1e3), _r_();
}), _r_();
}, v.prototype.toggleSigninBlock = function(e) {
_i_("3dab:be97841b"), this.el.find(".js-listview-footer-signin").toggleClass("g-hidden", !e), e || m.cookie("tfl_listview_lightbox_show_signin_block", 1, {
expires:999,
path:"/"
}), B.env.b_is_wishlist_singlepage || this.resizeLightbox(), _r_();
}, v.prototype._bindGA = function() {
_i_("3dab:ad9ab346");
var t = [ "listview:show", "listview:hide", "listview:open-dropdown", "listview:go-to-listmap-page", "listview:remove-hotel", "listview:check-single-hotel-availability", "listview:check-all-hotels-availability", "listview:remove-list", "listview:book-now-clicked", "listview:click-on-hotel-link", "listview:click-on-hotel-image" ];
B.eventEmitter.bind(t.join(" "), function(t) {
_i_("3dab:831570e8");
var i = {
loggedIn:B.env.b_user_auth_level_is_low ? "logged_in" :"logged_out",
pb:B.env.b_reg_user_detail_bookings_count,
ac:B.env.b_action
};
this.getCurrentList() && this.getCurrentList().hotels && m.extend(i, {
L:o._lists.length,
H:this.getCurrentList().hotels.length,
pr:this.getCurrentList().privacy
});
var r = e("ga-tracker");
r.trackEvent("Listview", t.type.toString(), n.stringifyUrl(i, " : ")), _r_();
}.bind(this)), _r_();
}, v.prototype.clearCache = function() {
return _i_("3dab:b8cfe9db"), _r_(o.clearCache());
}, v.prototype.getLists = function() {
_i_("3dab:2fe96dbe");
var e = {};
m.extend(e, {
with_hotels:0,
include_availability:0
});
var t = o.fetch(e);
return _r_(t);
}, v.prototype.getListById = function(e) {
return _i_("3dab:be0a6f47"), _r_(o.getListById(e));
}, v.prototype.getCurrentList = function() {
return _i_("3dab:c6a3cc28"), _r_(this._currentList);
}, v.prototype.getPrevList = function() {
return _i_("3dab:451bfc3d"), _r_(this._prevList);
}, v.prototype.setCurrentList = function(e) {
_i_("3dab:97a889af");
var t = this;
if (this._prevList = this._currentList, this._currentList = this.getListById(e.id), !this._currentList) return _r_(null);
return setTimeout(function() {
_i_("3dab:c89de83a"), B.env.b_is_shared_wishlist || B.eventEmitter.trigger("change:list", t._currentList), t.lastSelectedListId = t._currentList.id, _r_();
}, 0), _r_(this._currentList);
}, v.prototype.removeRackRateLoadingIcon = function(e) {
_i_("3dab:f077b5b7"), setTimeout(function() {
_i_("3dab:e7d10cdb"), e.find(".js-listview-rack-rate-animated, .js-listview-price-animated").removeClass("listview-rack-rate-animated listview-price-animated"), _r_();
}, 1500), _r_();
}, v.prototype.getHotelTmplName = function(e) {
if (_i_("3dab:fe45991b"), B.env.b_is_tdot_traffic) return _r_("listview_hotel_simple");
return _r_("listview_hotel");
}, v.prototype.renderHotel = function(e) {
_i_("3dab:d4a1561f"), this.getHotelNodesById(e.id).each(function(t, i) {
_i_("3dab:fc6d6345"), i = m(i);
var n = this.getHotelTmplName(i), r = b.prepare(e), a = m(B.jstmpl(n).render(r));
i.replaceWith(a), a.loadComponents && a.loadComponents(), B.eventEmitter.trigger("listview:rendered:hotel", a), _r_();
}.bind(this)), this.removeRackRateLoadingIcon(this.el.find(".js-listview-hotels")), _r_();
}, v.prototype.renderHotels = function(e) {
_i_("3dab:a0224327");
var t = this, i = m.extend({
is_recently_viewed:e.is_recently_viewed,
hotels_count:e.hotels_count,
hotels:e.hotels.map(function(e) {
return _i_("3dab:a88a8b98"), _r_(b.prepare(e));
}),
showListsSurvey:B.env.showListsSurvey,
fe_use_simple_hotels:B.env.b_is_tdot_traffic,
b_show_bbtool_sr_admin_favourite_hotel_badge:B.env.b_show_bbtool_sr_admin_favourite_hotel_badge ? 1 :0,
b_selected_language:B.env.b_selected_language
}, b.getEnv(), r.currentHotel()), n = this.el.find(".js-listview-hotels"), a = "listview_hotels";
B.env.b_is_tdot_traffic && (a = "listview_hotels_simple");
var o = B.jstmpl(a).render(i);
return n.html(o), "function" == typeof n.loadComponents && n.loadComponents(), this.updateRootClassNames(), B.env.b_is_wishlist_singlepage || setTimeout(function() {
_i_("3dab:e3b45ab9"), t.resizeLightbox(), _r_();
}, 0), B.env.b_mtv_compare_recruit && e.hotels && e.hotels.length >= 2 && m.getScript("//ethn.io/81334.js"), B.eventEmitter.trigger("listview:rendered:hotels"), this.removeRackRateLoadingIcon(n), _r_(this);
}, v.prototype.updateRootClassNames = function() {
_i_("3dab:16978e19");
var e = this.getCurrentList(), t = e.hotels ? 0 === e.hotels.length :!0, i = B.jstmpl("listview_root_classnames").render({
b_action:B.env.b_action,
shown:this._isShown,
isEmpty:t,
currentList:e,
singlePage:B.env.b_is_wishlist_singlepage,
full_width:!0
});
this.el.get(0).className = i, _r_();
}, v.prototype.show = function() {
_i_("3dab:f363cfaf");
var e = this;
this._binded || (this._bindEvents(), this._binded = !0), e._isShown = !0, B.eventEmitter.trigger("listview:show", this), B.events.trigger("listview:show", this);
var t = "listview_lightbox";
this.updateRootClassNames(), this.renderHeader(), B.env.b_is_wishlist_singlepage || B.lightbox.show(e.el, {
bAnimation:!0,
customWrapperClassName:t,
hideCallBack:function() {
_i_("3dab:0b1772bf"), B.eventEmitter.trigger("listview:hide"), e._isShown = !1, e.updateRootClassNames(), _r_();
}
}), m(".user_center_popover").hide(), "myreservations" === B.env.b_action && setTimeout(function() {
_i_("3dab:d07aabd4"), m(".modal-mask").css("zIndex", 10003), _r_();
}, 0), B.env.auth_level < 1 && !m.cookie("tfl_listview_lightbox_show_signin_block") && this.getCurrentList().hotels_count > 2 && this.toggleSigninBlock(!0), _r_();
}, v.prototype.isShown = function() {
return _i_("3dab:5fc636ca"), _r_(this._isShown);
}, v.prototype.resizeLightbox = function() {
_i_("3dab:70efc098");
var e = this.el.find(".listview-footer").outerHeight();
e = e > 0 ? e + 15 :e;
var t = m(".listview_lightbox").height(), i = this.el.find(".listview__controls"), n = i.is(":visible") ? this.el.find(".listview__controls").outerHeight() :0;
this.el.find(".js-listview-hotels").height(t - (75 + n) - e), _r_();
}, i.exports = v, _r_();
}), B.define("component/lists/listview-empty-list", function(e, t, i) {
"use strict";
_i_("3dab:508951f5");
var n = e("../lists-api/lists-api").API, r = {
_hotels:[],
get:function(e) {
_i_("3dab:279c29bd");
var t = this;
n.getRecentlyViewed({
limit:5
}, function(i) {
_i_("3dab:9c08bb64"), t._hotels = i.hotels, e(null, t._hotels), _r_();
}), _r_();
}
};
i.exports = e("component").extend({
tmpl:B.jstmpl("listview_empty_list_recently_viewed"),
state:{
recentlyViewedHotels:[]
},
setState:function(e) {
_i_("3dab:51a9e06a"), $.extend(this.state, e), this.render(), _r_();
},
fetch:function() {
_i_("3dab:c8069290");
var e = this;
r.get(function(t, i) {
_i_("3dab:90a0dab4"), e.setState({
recentlyViewedHotels:i
}), _r_();
}), _r_();
},
render:function() {
_i_("3dab:9e4b8915");
var e = this.tmpl.render(this.state);
this.$el.html(e), this.$el.find(".js-listview-empty-list-recently-viewed").hide().slideDown(), _r_();
},
init:function() {
_i_("3dab:a853249b"), this.render(), this.fetch(), _r_();
}
}), _r_();
}), B.define("lists/listview-template/listview-template", function(e, t, i) {
"use strict";
_i_("3dab:77b0ceaf");
var n = e("../lists-tools/lists-tools"), r = e("../listview-travel-party/listview-travel-party"), a = e("../listview-touch/listview-touch"), o = e("../lists-store/lists-store");
i.exports = {
getEnv:function() {
return _i_("3dab:bdc0d5df"), _r_({
b_action:B.env.b_action,
b_user_auth_level_is_low_or_high:B.env.b_user_auth_level_is_low_or_high,
has_cookie_tfl_listview_show_signin_banner:Boolean($.cookie("tfl_listview_show_signin_banner")),
is_desktop:"1" === B.env.b_site_type_id,
is_logged_in:B.env.auth_level > 0,
b_lang_is_rtl:B.env.rtl,
is_inside_listview:1,
b_reg_user_wishlist_remaining:B.env.b_reg_user_wishlist_remaining,
b_wishlist_referrer:B.env.b_wishlist_referrer
});
},
buildHotelLink:function(e, t) {
_i_("3dab:77a63c0a");
var i = "maxotel_rooms", o = "editDates", _ = 0 === e.url.indexOf("http") ? e.url :B.env.b_nonsecure_hostname + e.url, s = B.env.b_query_params_delimiter, d = e.availability && e.availability.checkin && e.availability.checkout;
return d && (_ = _ + s + n.stringifyUrl(n.pick(e.availability, "checkin", "checkout"), s)), a.isEnabled() || (_ += r.buildUrlPart()), t && t.from_list && (_ = _ + s + "from_list=1"), B.env.b_label && (_ = _ + s + "label=" + B.env.b_label), B.env.b_aid && !/aid=/.test(_) && (_ = _ + s + "aid=" + B.env.b_aid), t && t.from_history && (_ = _ + s + "bhh=1"), t && t.goToRoomTable && (_ = _ + "#" + (d ? i :o)), _r_(_);
},
prepare:function(e, t) {
_i_("3dab:d4ac1285");
var i = {
from_list:1
};
t && t.from_history && (i.from_history = !0);
var n = 35;
$.extend(i, {
goToRoomTable:!0
});
var r = $.extend({}, e, {
id:o.getHotelId(e),
fe_cdm_use_review_component:B.env.fe_cdm_use_review_component,
fe_cdm_font_size_to_biq:B.env.fe_cdm_font_size_to_biq,
fe_cnd_b_lang:B.env.fe_cnd_b_lang,
ip_country:B.env.ip_country,
b_guest_country:B.env.b_guest_country,
b_countrycode:e.cc1,
b_bookings_owned:B.env.b_bookings_owned,
b_partner_channel_id:B.env.b_partner_channel_id,
absolute_url:this.buildHotelLink(e, t),
book_now_url:this.buildHotelLink(e, i),
has_availability:!$.isEmptyObject(e.availability) && "undefined" != typeof e.availability.is_available,
available:Boolean(e.availability.is_available),
edit:Boolean(e.edit),
hotel_min_rate_num:parseFloat(e.hotel_min_rate_num),
hotel_review_score_non_localized:parseFloat(e.hotel_review_score_non_localized ? e.hotel_review_score_non_localized :e.hotel_review_score),
hotel_min_reviews:B.env.b_min_reviews_nr ? B.env.b_min_reviews_nr :null,
b_companyname:B.env.b_companyname ? B.env.b_companyname :null,
hotel_class:e.hotel_class ? e.hotel_class :null,
hotel_class_half:e.hotel_class_half ? e.hotel_class_half :"",
hotel_class_is_estimated:e.hotel_class_is_estimated ? e.hotel_class_is_estimated :0,
name_ellipsis:e.name && e.name.length > n ? e.name.slice(0, n) + "&hellip;" :e.name
}, this.getEnv(), t);
return r.availability && (r.availability.checkin && r.availability.checkout && (r.availability.nights = B.Search.createDate(r.availability.checkout).valueOf() - B.Search.createDate(r.availability.checkin).valueOf()), r.min_rate_availability = r.availability.is_available ? r.availability.price :void 0, r.b_rooms_left = r.availability.rooms_available), r.b_main_photos && (r.b_first_photo = r.b_main_photos[0]), _r_(r);
}
}, _r_();
}), B.define("lists/listview-hotel/listview-hotel", function(e, t, i) {
"use strict";
_i_("3dab:f17a3b99");
var n = e("../lists-store/lists-store");
i.exports = {
setHotelProperty:function(e, t, i) {
return _i_("3dab:bfe63fd4"), e[t] = i, n.emit("change:hotel_" + t, e, t), _r_(e);
}
}, _r_();
}), B.define("lists/listview-availability/listview-availability", function(e, t, i) {
"use strict";
_i_("3dab:bb30ee48");
var n = e("../lists-api/lists-api").API, r = e("../lists-store/lists-store"), a = e("../listview-hotel/listview-hotel"), o = e("../listview-touch/listview-touch"), _ = e("../listview-travel-party/listview-travel-party");
i.exports = {
setHotelAvailability:function(e, t, i) {
_i_("3dab:1340ed3e"), e.availability = t, i && i.silent || B.eventEmitter.trigger("change:hotel", e), _r_();
},
checkAvailability:function(e, t) {
_i_("3dab:d4d398e4");
var i = this, s = e.list, d = e.dates, c = e.hotels || s.hotels;
c.forEach(function(e) {
_i_("3dab:3190ff71"), a.setHotelProperty(e, "loading", !0), _r_();
});
var l = $.extend({
hotel_ids:c.map(r.getHotelId),
list_id:s.id,
is_recently_viewed:s.is_recently_viewed
}, d);
o.isEnabled() || $.extend(l, _.buildAvailabilityParams()), n.getAvailability(l, function(e) {
_i_("3dab:e4f37347"), c.forEach(function(t) {
_i_("3dab:8a4f98c4"), a.setHotelProperty(t, "edit", !1), a.setHotelProperty(t, "loading", !1);
var n = r.getHotelId(t);
e[n] && i.setHotelAvailability(t, e[n], {
updateNights:!0
}), _r_();
}), t && t(), _r_();
}), _r_();
}
}, _r_();
}), B.define("lists/listview-header/listview-create-list", function(e, t, i) {
"use strict";
_i_("3dab:3473e2fc");
var n = e("../lists-store/lists-store");
function r() {
_i_("3dab:27cc7d35");
var e = this;
$(".js-listview-header-wrapper").on("click", ".js-listview-create-list", function(t) {
_i_("3dab:7c109a47"), t.preventDefault(), t.stopPropagation();
var i = ($(t.target), "lists_map_list_name"), r = $.trim(window.prompt(B.jstmpl.translations(i), ""));
if (!r) return _r_();
n.createList({
name:r
}).then(function(t) {
_i_("3dab:c9d1d992"), e.setCurrentList({
id:t.id
}), t.remaining < 1 && (B.env.b_reg_user_wishlist_remaining = 0), _r_();
}), _r_();
}), _r_();
}
i.exports = r, _r_();
}), B.define("require_absolute", function(e, t, i) {
_i_("3dab:a450d96e"), i.exports = function(t) {
return _i_("3dab:285c8d7d"), _r_(e(t.replace(/^.*components\//g, "")));
}, _r_();
});

function init() {
_i_("3dab:67d71e8a"), B.require([ "require_absolute" ], function(e) {
_i_("3dab:d0465f0e");
var t = B.env.b_is_tdot_traffic, i = e("../../components/lists/lists-api/lists-api"), n = e("../../components/lists/lists-store/lists-store"), r = e("../../components/lists/lists-listview/lists-listview");
function a(e) {
_i_("3dab:86508246"), e.getLists().then(function() {
_i_("3dab:ff8828a8");
var t = e.getListById(i.getLastChangedListId());
e.lastSelectedListId ? e.setCurrentList({
id:e.lastSelectedListId
}) :t ? e.setCurrentList({
id:t.id
}) :e.setCurrentList({
id:n.getListByIndex(0).id
}), e.show(), _r_();
}), _r_();
}
if (t) return _r_();
if (!B.env.is_listview_page) return _r_();
var o = new r({
el:$(".listview_lightbox__container")
});
window.listView = o, $(".js-uc-listview-lightbox").click(function(e) {
_i_("3dab:01292022"), e.preventDefault(), t && $(".select_foldout").hide(), a(o), _r_();
}), B.env.b_run_tfl_move_away_from_lightbox && $(".js-uc-wishlists-trigger").click(function(e) {
return _i_("3dab:dcc731d0"), e.preventDefault(), window.location.href = B.env.b_wishlist_singlepage_url, _r_();
});
var _ = function() {
_i_("3dab:5aa5b5a7"), o && !o.isShown() && o.clearCache(), _r_();
};
B.eventEmitter.bind("wl:create", _), B.eventEmitter.bind("wl:edithotel", _);
var s = $.grep([ ".js-wishlist-added-to-name-link", ".js-open-list", '.js-uc-notification-link[href*="wl_id="]', 'a[href*="/mywishlist"][href*="wl_id="]' ], Boolean);
if ($(document.body).undelegate(".wl-dropdown-link", "click"), $(document.body).delegate(s.join(","), "click", function(e) {
if (_i_("3dab:47c4bb7c"), !B.env.is_listview_page) return _r_();
if (B.env.b_run_tfl_move_away_from_lightbox) return _r_();
var t = i.getIdFromUrl($(e.currentTarget).attr("href"));
t && (e.preventDefault(), o.getLists().then(function() {
_i_("3dab:91aa04131"), o.setCurrentList({
id:t
}), o.show(), _r_();
})), _r_();
}), B.env.b_is_wishlist_singlepage) {
var d = i.getIdFromUrl(window.location.href);
"null" != d && B.env.auth_level > 0 ? o.getLists().then(function() {
_i_("3dab:91aa0413"), o.setCurrentList({
id:d
}), o.show(), _r_();
}) :a(o), $(".listview__controls").stick_in_parent({
sticky_class:"listview__controls--sticky"
});
}
"www" === B.env.b_site_type && "mywishlist" === B.env.b_action && (B.eventEmitter.bind("listview:rendered:hotels", handleHotelsRenderedEvent), $(document.body).on("click", ".comparable-list-scroll-btn", handleScrollClickEvent)), _r_();
}), _r_();
}

var SCROLL_DURATION = 200, SCROLL_STEP = 300;

function handleScrollClickEvent(e) {
_i_("3dab:e689ef98");
var t = $(e.target), i = $(".comparable-list-container"), n = i.scrollLeft() || 0;
t.hasClass("comparable-list-scroll-btn--left") ? i.animate({
scrollLeft:n - SCROLL_STEP
}, SCROLL_DURATION) :i.animate({
scrollLeft:n + SCROLL_STEP
}, SCROLL_DURATION), _r_();
}

function handleHotelsRenderedEvent() {
_i_("3dab:626e7390");
var e = $(".comparable-list-container"), t = e.get(0);
if (!t) return _r_();
t.scrollWidth > t.clientWidth ? $(".comparable-list-scroll-btn").show() :$(".comparable-list-scroll-btn").hide(), _r_();
}

document.addEventListener("DOMContentLoaded", init), B.define("component/qrcode/qrcodelib", function(e, t, i) {
"use strict";
_i_("3dab:22b6969f");
var n;
!function() {
_i_("3dab:bb447d5b");
function e(e) {
_i_("3dab:6a350f6c"), this.mode = i.MODE_8BIT_BYTE, this.data = e, this.parsedData = [];
for (var t = 0, n = this.data.length; n > t; t++) {
var r = [], a = this.data.charCodeAt(t);
a > 65536 ? (r[0] = 240 | (1835008 & a) >>> 18, r[1] = 128 | (258048 & a) >>> 12, r[2] = 128 | (4032 & a) >>> 6, r[3] = 128 | 63 & a) :a > 2048 ? (r[0] = 224 | (61440 & a) >>> 12, r[1] = 128 | (4032 & a) >>> 6, r[2] = 128 | 63 & a) :a > 128 ? (r[0] = 192 | (1984 & a) >>> 6, r[1] = 128 | 63 & a) :r[0] = a, this.parsedData.push(r);
}
this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239)), _r_();
}
e.prototype = {
getLength:function(e) {
return _i_("3dab:5d0dfc7d"), _r_(this.parsedData.length);
},
write:function(e) {
_i_("3dab:ac0b6150");
for (var t = 0, i = this.parsedData.length; i > t; t++) e.put(this.parsedData[t], 8);
_r_();
}
};
function t(e, t) {
_i_("3dab:848638ee"), this.typeNumber = e, this.errorCorrectLevel = t, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [], _r_();
}
t.prototype = {
addData:function(t) {
_i_("3dab:4184ca21");
var i = new e(t);
this.dataList.push(i), this.dataCache = null, _r_();
},
isDark:function(e, t) {
if (_i_("3dab:a10a59c0"), 0 > e || this.moduleCount <= e || 0 > t || this.moduleCount <= t) throw new Error(e + "," + t);
return _r_(this.modules[e][t]);
},
getModuleCount:function() {
return _i_("3dab:3b9a4381"), _r_(this.moduleCount);
},
make:function() {
_i_("3dab:6dfe8dc4"), this.makeImpl(!1, this.getBestMaskPattern()), _r_();
},
makeImpl:function(e, i) {
_i_("3dab:c47b7367"), this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
for (var n = 0; n < this.moduleCount; n++) {
this.modules[n] = new Array(this.moduleCount);
for (var r = 0; r < this.moduleCount; r++) this.modules[n][r] = null;
}
this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e, i), this.typeNumber >= 7 && this.setupTypeNumber(e), null == this.dataCache && (this.dataCache = t.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, i), _r_();
},
setupPositionProbePattern:function(e, t) {
_i_("3dab:d0cac6ba");
for (var i = -1; 7 >= i; i++) {
if (-1 >= e + i || this.moduleCount <= e + i) continue;
for (var n = -1; 7 >= n; n++) {
if (-1 >= t + n || this.moduleCount <= t + n) continue;
i >= 0 && 6 >= i && (0 == n || 6 == n) || n >= 0 && 6 >= n && (0 == i || 6 == i) || i >= 2 && 4 >= i && n >= 2 && 4 >= n ? this.modules[e + i][t + n] = !0 :this.modules[e + i][t + n] = !1;
}
}
_r_();
},
getBestMaskPattern:function() {
_i_("3dab:1dce2cb5");
for (var e = 0, t = 0, i = 0; 8 > i; i++) {
this.makeImpl(!0, i);
var n = o.getLostPoint(this);
(0 == i || e > n) && (e = n, t = i);
}
return _r_(t);
},
createMovieClip:function(e, t, i) {
_i_("3dab:383aa69e");
var n = e.createEmptyMovieClip(t, i), r = 1;
this.make();
for (var a = 0; a < this.modules.length; a++) for (var o = a * r, _ = 0; _ < this.modules[a].length; _++) {
var s = _ * r, d = this.modules[a][_];
d && (n.beginFill(0, 100), n.moveTo(s, o), n.lineTo(s + r, o), n.lineTo(s + r, o + r), n.lineTo(s, o + r), n.endFill());
}
return _r_(n);
},
setupTimingPattern:function() {
_i_("3dab:318721a2");
for (var e = 8; e < this.moduleCount - 8; e++) {
if (null != this.modules[e][6]) continue;
this.modules[e][6] = e % 2 == 0;
}
for (var t = 8; t < this.moduleCount - 8; t++) {
if (null != this.modules[6][t]) continue;
this.modules[6][t] = t % 2 == 0;
}
_r_();
},
setupPositionAdjustPattern:function() {
_i_("3dab:4e8189d5");
for (var e = o.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++) for (var i = 0; i < e.length; i++) {
var n = e[t], r = e[i];
if (null != this.modules[n][r]) continue;
for (var a = -2; 2 >= a; a++) for (var _ = -2; 2 >= _; _++) -2 == a || 2 == a || -2 == _ || 2 == _ || 0 == a && 0 == _ ? this.modules[n + a][r + _] = !0 :this.modules[n + a][r + _] = !1;
}
_r_();
},
setupTypeNumber:function(e) {
_i_("3dab:40faf419");
for (var t = o.getBCHTypeNumber(this.typeNumber), i = 0; 18 > i; i++) {
var n = !e && 1 == (t >> i & 1);
this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = n;
}
for (var i = 0; 18 > i; i++) {
var n = !e && 1 == (t >> i & 1);
this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = n;
}
_r_();
},
setupTypeInfo:function(e, t) {
_i_("3dab:e4f9db77");
for (var i = this.errorCorrectLevel << 3 | t, n = o.getBCHTypeInfo(i), r = 0; 15 > r; r++) {
var a = !e && 1 == (n >> r & 1);
6 > r ? this.modules[r][8] = a :8 > r ? this.modules[r + 1][8] = a :this.modules[this.moduleCount - 15 + r][8] = a;
}
for (var r = 0; 15 > r; r++) {
var a = !e && 1 == (n >> r & 1);
8 > r ? this.modules[8][this.moduleCount - r - 1] = a :9 > r ? this.modules[8][15 - r - 1 + 1] = a :this.modules[8][15 - r - 1] = a;
}
this.modules[this.moduleCount - 8][8] = !e, _r_();
},
mapData:function(e, t) {
_i_("3dab:10392954");
for (var i = -1, n = this.moduleCount - 1, r = 7, a = 0, _ = this.moduleCount - 1; _ > 0; _ -= 2) for (6 == _ && _--; ;) {
for (var s = 0; 2 > s; s++) if (null == this.modules[n][_ - s]) {
var d = !1;
a < e.length && (d = 1 == (e[a] >>> r & 1));
var c = o.getMask(t, n, _ - s);
c && (d = !d), this.modules[n][_ - s] = d, r--, -1 == r && (a++, r = 7);
}
if (n += i, 0 > n || this.moduleCount <= n) {
n -= i, i = -i;
break;
}
}
_r_();
}
}, t.PAD0 = 236, t.PAD1 = 17, t.createData = function(e, i, n) {
_i_("3dab:aaf15052");
for (var r = c.getRSBlocks(e, i), a = new l(), _ = 0; _ < n.length; _++) {
var s = n[_];
a.put(s.mode, 4), a.put(s.getLength(), o.getLengthInBits(s.mode, e)), s.write(a);
}
for (var d = 0, _ = 0; _ < r.length; _++) d += r[_].dataCount;
if (a.getLengthInBits() > 8 * d) throw new Error("code length overflow. (" + a.getLengthInBits() + ">" + 8 * d + ")");
for (a.getLengthInBits() + 4 <= 8 * d && a.put(0, 4); a.getLengthInBits() % 8 != 0; ) a.putBit(!1);
for (;;) {
if (a.getLengthInBits() >= 8 * d) break;
if (a.put(t.PAD0, 8), a.getLengthInBits() >= 8 * d) break;
a.put(t.PAD1, 8);
}
return _r_(t.createBytes(a, r));
}, t.createBytes = function(e, t) {
_i_("3dab:99b7c05c");
for (var i = 0, n = 0, r = 0, a = new Array(t.length), _ = new Array(t.length), s = 0; s < t.length; s++) {
var c = t[s].dataCount, l = t[s].totalCount - c;
n = Math.max(n, c), r = Math.max(r, l), a[s] = new Array(c);
for (var u = 0; u < a[s].length; u++) a[s][u] = 255 & e.buffer[u + i];
i += c;
var f = o.getErrorCorrectPolynomial(l), h = new d(a[s], f.getLength() - 1), b = h.mod(f);
_[s] = new Array(f.getLength() - 1);
for (var u = 0; u < _[s].length; u++) {
var p = u + b.getLength() - _[s].length;
_[s][u] = p >= 0 ? b.get(p) :0;
}
}
for (var g = 0, u = 0; u < t.length; u++) g += t[u].totalCount;
for (var m = new Array(g), v = 0, u = 0; n > u; u++) for (var s = 0; s < t.length; s++) u < a[s].length && (m[v++] = a[s][u]);
for (var u = 0; r > u; u++) for (var s = 0; s < t.length; s++) u < _[s].length && (m[v++] = _[s][u]);
return _r_(m);
};
for (var i = {
MODE_NUMBER:1,
MODE_ALPHA_NUM:2,
MODE_8BIT_BYTE:4,
MODE_KANJI:8
}, r = {
L:1,
M:0,
Q:3,
H:2
}, a = {
PATTERN000:0,
PATTERN001:1,
PATTERN010:2,
PATTERN011:3,
PATTERN100:4,
PATTERN101:5,
PATTERN110:6,
PATTERN111:7
}, o = {
PATTERN_POSITION_TABLE:[ [], [ 6, 18 ], [ 6, 22 ], [ 6, 26 ], [ 6, 30 ], [ 6, 34 ], [ 6, 22, 38 ], [ 6, 24, 42 ], [ 6, 26, 46 ], [ 6, 28, 50 ], [ 6, 30, 54 ], [ 6, 32, 58 ], [ 6, 34, 62 ], [ 6, 26, 46, 66 ], [ 6, 26, 48, 70 ], [ 6, 26, 50, 74 ], [ 6, 30, 54, 78 ], [ 6, 30, 56, 82 ], [ 6, 30, 58, 86 ], [ 6, 34, 62, 90 ], [ 6, 28, 50, 72, 94 ], [ 6, 26, 50, 74, 98 ], [ 6, 30, 54, 78, 102 ], [ 6, 28, 54, 80, 106 ], [ 6, 32, 58, 84, 110 ], [ 6, 30, 58, 86, 114 ], [ 6, 34, 62, 90, 118 ], [ 6, 26, 50, 74, 98, 122 ], [ 6, 30, 54, 78, 102, 126 ], [ 6, 26, 52, 78, 104, 130 ], [ 6, 30, 56, 82, 108, 134 ], [ 6, 34, 60, 86, 112, 138 ], [ 6, 30, 58, 86, 114, 142 ], [ 6, 34, 62, 90, 118, 146 ], [ 6, 30, 54, 78, 102, 126, 150 ], [ 6, 24, 50, 76, 102, 128, 154 ], [ 6, 28, 54, 80, 106, 132, 158 ], [ 6, 32, 58, 84, 110, 136, 162 ], [ 6, 26, 54, 82, 110, 138, 166 ], [ 6, 30, 58, 86, 114, 142, 170 ] ],
G15:1335,
G18:7973,
G15_MASK:21522,
getBCHTypeInfo:function(e) {
_i_("3dab:2cb66f64");
for (var t = e << 10; o.getBCHDigit(t) - o.getBCHDigit(o.G15) >= 0; ) t ^= o.G15 << o.getBCHDigit(t) - o.getBCHDigit(o.G15);
return _r_((e << 10 | t) ^ o.G15_MASK);
},
getBCHTypeNumber:function(e) {
_i_("3dab:31bfa3d0");
for (var t = e << 12; o.getBCHDigit(t) - o.getBCHDigit(o.G18) >= 0; ) t ^= o.G18 << o.getBCHDigit(t) - o.getBCHDigit(o.G18);
return _r_(e << 12 | t);
},
getBCHDigit:function(e) {
_i_("3dab:2598b9a6");
for (var t = 0; 0 != e; ) t++, e >>>= 1;
return _r_(t);
},
getPatternPosition:function(e) {
return _i_("3dab:5ef7f2c4"), _r_(o.PATTERN_POSITION_TABLE[e - 1]);
},
getMask:function(e, t, i) {
switch (_i_("3dab:22766df0"), e) {
case a.PATTERN000:
return _r_((t + i) % 2 == 0);

case a.PATTERN001:
return _r_(t % 2 == 0);

case a.PATTERN010:
return _r_(i % 3 == 0);

case a.PATTERN011:
return _r_((t + i) % 3 == 0);

case a.PATTERN100:
return _r_((Math.floor(t / 2) + Math.floor(i / 3)) % 2 == 0);

case a.PATTERN101:
return _r_(t * i % 2 + t * i % 3 == 0);

case a.PATTERN110:
return _r_((t * i % 2 + t * i % 3) % 2 == 0);

case a.PATTERN111:
return _r_((t * i % 3 + (t + i) % 2) % 2 == 0);

default:
throw new Error("bad maskPattern:" + e);
}
_r_();
},
getErrorCorrectPolynomial:function(e) {
_i_("3dab:4bfdec0d");
for (var t = new d([ 1 ], 0), i = 0; e > i; i++) t = t.multiply(new d([ 1, _.gexp(i) ], 0));
return _r_(t);
},
getLengthInBits:function(e, t) {
if (_i_("3dab:e51ca4c5"), t >= 1 && 10 > t) switch (e) {
case i.MODE_NUMBER:
return _r_(10);

case i.MODE_ALPHA_NUM:
return _r_(9);

case i.MODE_8BIT_BYTE:
return _r_(8);

case i.MODE_KANJI:
return _r_(8);

default:
throw new Error("mode:" + e);
} else if (27 > t) switch (e) {
case i.MODE_NUMBER:
return _r_(12);

case i.MODE_ALPHA_NUM:
return _r_(11);

case i.MODE_8BIT_BYTE:
return _r_(16);

case i.MODE_KANJI:
return _r_(10);

default:
throw new Error("mode:" + e);
} else {
if (!(41 > t)) throw new Error("type:" + t);
switch (e) {
case i.MODE_NUMBER:
return _r_(14);

case i.MODE_ALPHA_NUM:
return _r_(13);

case i.MODE_8BIT_BYTE:
return _r_(16);

case i.MODE_KANJI:
return _r_(12);

default:
throw new Error("mode:" + e);
}
}
_r_();
},
getLostPoint:function(e) {
_i_("3dab:dcff7c73");
for (var t = e.getModuleCount(), i = 0, n = 0; t > n; n++) for (var r = 0; t > r; r++) {
for (var a = 0, o = e.isDark(n, r), _ = -1; 1 >= _; _++) {
if (0 > n + _ || n + _ >= t) continue;
for (var s = -1; 1 >= s; s++) {
if (0 > r + s || r + s >= t) continue;
if (0 == _ && 0 == s) continue;
o == e.isDark(n + _, r + s) && a++;
}
}
a > 5 && (i += 3 + a - 5);
}
for (var n = 0; t - 1 > n; n++) for (var r = 0; t - 1 > r; r++) {
var d = 0;
e.isDark(n, r) && d++, e.isDark(n + 1, r) && d++, e.isDark(n, r + 1) && d++, e.isDark(n + 1, r + 1) && d++, (0 == d || 4 == d) && (i += 3);
}
for (var n = 0; t > n; n++) for (var r = 0; t - 6 > r; r++) e.isDark(n, r) && !e.isDark(n, r + 1) && e.isDark(n, r + 2) && e.isDark(n, r + 3) && e.isDark(n, r + 4) && !e.isDark(n, r + 5) && e.isDark(n, r + 6) && (i += 40);
for (var r = 0; t > r; r++) for (var n = 0; t - 6 > n; n++) e.isDark(n, r) && !e.isDark(n + 1, r) && e.isDark(n + 2, r) && e.isDark(n + 3, r) && e.isDark(n + 4, r) && !e.isDark(n + 5, r) && e.isDark(n + 6, r) && (i += 40);
for (var c = 0, r = 0; t > r; r++) for (var n = 0; t > n; n++) e.isDark(n, r) && c++;
var l = Math.abs(100 * c / t / t - 50) / 5;
return i += 10 * l, _r_(i);
}
}, _ = {
glog:function(e) {
if (_i_("3dab:9601b075"), 1 > e) throw new Error("glog(" + e + ")");
return _r_(_.LOG_TABLE[e]);
},
gexp:function(e) {
for (_i_("3dab:01f5f72d"); 0 > e; ) e += 255;
for (;e >= 256; ) e -= 255;
return _r_(_.EXP_TABLE[e]);
},
EXP_TABLE:new Array(256),
LOG_TABLE:new Array(256)
}, s = 0; 8 > s; s++) _.EXP_TABLE[s] = 1 << s;
for (var s = 8; 256 > s; s++) _.EXP_TABLE[s] = _.EXP_TABLE[s - 4] ^ _.EXP_TABLE[s - 5] ^ _.EXP_TABLE[s - 6] ^ _.EXP_TABLE[s - 8];
for (var s = 0; 255 > s; s++) _.LOG_TABLE[_.EXP_TABLE[s]] = s;
function d(e, t) {
if (_i_("3dab:399c7d96"), void 0 == e.length) throw new Error(e.length + "/" + t);
for (var i = 0; i < e.length && 0 == e[i]; ) i++;
this.num = new Array(e.length - i + t);
for (var n = 0; n < e.length - i; n++) this.num[n] = e[n + i];
_r_();
}
d.prototype = {
get:function(e) {
return _i_("3dab:2f0bb3b0"), _r_(this.num[e]);
},
getLength:function() {
return _i_("3dab:fda85298"), _r_(this.num.length);
},
multiply:function(e) {
_i_("3dab:185703d8");
for (var t = new Array(this.getLength() + e.getLength() - 1), i = 0; i < this.getLength(); i++) for (var n = 0; n < e.getLength(); n++) t[i + n] ^= _.gexp(_.glog(this.get(i)) + _.glog(e.get(n)));
return _r_(new d(t, 0));
},
mod:function(e) {
if (_i_("3dab:78d93a47"), this.getLength() - e.getLength() < 0) return _r_(this);
for (var t = _.glog(this.get(0)) - _.glog(e.get(0)), i = new Array(this.getLength()), n = 0; n < this.getLength(); n++) i[n] = this.get(n);
for (var n = 0; n < e.getLength(); n++) i[n] ^= _.gexp(_.glog(e.get(n)) + t);
return _r_(new d(i, 0).mod(e));
}
};
function c(e, t) {
_i_("3dab:bf778816"), this.totalCount = e, this.dataCount = t, _r_();
}
c.RS_BLOCK_TABLE = [ [ 1, 26, 19 ], [ 1, 26, 16 ], [ 1, 26, 13 ], [ 1, 26, 9 ], [ 1, 44, 34 ], [ 1, 44, 28 ], [ 1, 44, 22 ], [ 1, 44, 16 ], [ 1, 70, 55 ], [ 1, 70, 44 ], [ 2, 35, 17 ], [ 2, 35, 13 ], [ 1, 100, 80 ], [ 2, 50, 32 ], [ 2, 50, 24 ], [ 4, 25, 9 ], [ 1, 134, 108 ], [ 2, 67, 43 ], [ 2, 33, 15, 2, 34, 16 ], [ 2, 33, 11, 2, 34, 12 ], [ 2, 86, 68 ], [ 4, 43, 27 ], [ 4, 43, 19 ], [ 4, 43, 15 ], [ 2, 98, 78 ], [ 4, 49, 31 ], [ 2, 32, 14, 4, 33, 15 ], [ 4, 39, 13, 1, 40, 14 ], [ 2, 121, 97 ], [ 2, 60, 38, 2, 61, 39 ], [ 4, 40, 18, 2, 41, 19 ], [ 4, 40, 14, 2, 41, 15 ], [ 2, 146, 116 ], [ 3, 58, 36, 2, 59, 37 ], [ 4, 36, 16, 4, 37, 17 ], [ 4, 36, 12, 4, 37, 13 ], [ 2, 86, 68, 2, 87, 69 ], [ 4, 69, 43, 1, 70, 44 ], [ 6, 43, 19, 2, 44, 20 ], [ 6, 43, 15, 2, 44, 16 ], [ 4, 101, 81 ], [ 1, 80, 50, 4, 81, 51 ], [ 4, 50, 22, 4, 51, 23 ], [ 3, 36, 12, 8, 37, 13 ], [ 2, 116, 92, 2, 117, 93 ], [ 6, 58, 36, 2, 59, 37 ], [ 4, 46, 20, 6, 47, 21 ], [ 7, 42, 14, 4, 43, 15 ], [ 4, 133, 107 ], [ 8, 59, 37, 1, 60, 38 ], [ 8, 44, 20, 4, 45, 21 ], [ 12, 33, 11, 4, 34, 12 ], [ 3, 145, 115, 1, 146, 116 ], [ 4, 64, 40, 5, 65, 41 ], [ 11, 36, 16, 5, 37, 17 ], [ 11, 36, 12, 5, 37, 13 ], [ 5, 109, 87, 1, 110, 88 ], [ 5, 65, 41, 5, 66, 42 ], [ 5, 54, 24, 7, 55, 25 ], [ 11, 36, 12 ], [ 5, 122, 98, 1, 123, 99 ], [ 7, 73, 45, 3, 74, 46 ], [ 15, 43, 19, 2, 44, 20 ], [ 3, 45, 15, 13, 46, 16 ], [ 1, 135, 107, 5, 136, 108 ], [ 10, 74, 46, 1, 75, 47 ], [ 1, 50, 22, 15, 51, 23 ], [ 2, 42, 14, 17, 43, 15 ], [ 5, 150, 120, 1, 151, 121 ], [ 9, 69, 43, 4, 70, 44 ], [ 17, 50, 22, 1, 51, 23 ], [ 2, 42, 14, 19, 43, 15 ], [ 3, 141, 113, 4, 142, 114 ], [ 3, 70, 44, 11, 71, 45 ], [ 17, 47, 21, 4, 48, 22 ], [ 9, 39, 13, 16, 40, 14 ], [ 3, 135, 107, 5, 136, 108 ], [ 3, 67, 41, 13, 68, 42 ], [ 15, 54, 24, 5, 55, 25 ], [ 15, 43, 15, 10, 44, 16 ], [ 4, 144, 116, 4, 145, 117 ], [ 17, 68, 42 ], [ 17, 50, 22, 6, 51, 23 ], [ 19, 46, 16, 6, 47, 17 ], [ 2, 139, 111, 7, 140, 112 ], [ 17, 74, 46 ], [ 7, 54, 24, 16, 55, 25 ], [ 34, 37, 13 ], [ 4, 151, 121, 5, 152, 122 ], [ 4, 75, 47, 14, 76, 48 ], [ 11, 54, 24, 14, 55, 25 ], [ 16, 45, 15, 14, 46, 16 ], [ 6, 147, 117, 4, 148, 118 ], [ 6, 73, 45, 14, 74, 46 ], [ 11, 54, 24, 16, 55, 25 ], [ 30, 46, 16, 2, 47, 17 ], [ 8, 132, 106, 4, 133, 107 ], [ 8, 75, 47, 13, 76, 48 ], [ 7, 54, 24, 22, 55, 25 ], [ 22, 45, 15, 13, 46, 16 ], [ 10, 142, 114, 2, 143, 115 ], [ 19, 74, 46, 4, 75, 47 ], [ 28, 50, 22, 6, 51, 23 ], [ 33, 46, 16, 4, 47, 17 ], [ 8, 152, 122, 4, 153, 123 ], [ 22, 73, 45, 3, 74, 46 ], [ 8, 53, 23, 26, 54, 24 ], [ 12, 45, 15, 28, 46, 16 ], [ 3, 147, 117, 10, 148, 118 ], [ 3, 73, 45, 23, 74, 46 ], [ 4, 54, 24, 31, 55, 25 ], [ 11, 45, 15, 31, 46, 16 ], [ 7, 146, 116, 7, 147, 117 ], [ 21, 73, 45, 7, 74, 46 ], [ 1, 53, 23, 37, 54, 24 ], [ 19, 45, 15, 26, 46, 16 ], [ 5, 145, 115, 10, 146, 116 ], [ 19, 75, 47, 10, 76, 48 ], [ 15, 54, 24, 25, 55, 25 ], [ 23, 45, 15, 25, 46, 16 ], [ 13, 145, 115, 3, 146, 116 ], [ 2, 74, 46, 29, 75, 47 ], [ 42, 54, 24, 1, 55, 25 ], [ 23, 45, 15, 28, 46, 16 ], [ 17, 145, 115 ], [ 10, 74, 46, 23, 75, 47 ], [ 10, 54, 24, 35, 55, 25 ], [ 19, 45, 15, 35, 46, 16 ], [ 17, 145, 115, 1, 146, 116 ], [ 14, 74, 46, 21, 75, 47 ], [ 29, 54, 24, 19, 55, 25 ], [ 11, 45, 15, 46, 46, 16 ], [ 13, 145, 115, 6, 146, 116 ], [ 14, 74, 46, 23, 75, 47 ], [ 44, 54, 24, 7, 55, 25 ], [ 59, 46, 16, 1, 47, 17 ], [ 12, 151, 121, 7, 152, 122 ], [ 12, 75, 47, 26, 76, 48 ], [ 39, 54, 24, 14, 55, 25 ], [ 22, 45, 15, 41, 46, 16 ], [ 6, 151, 121, 14, 152, 122 ], [ 6, 75, 47, 34, 76, 48 ], [ 46, 54, 24, 10, 55, 25 ], [ 2, 45, 15, 64, 46, 16 ], [ 17, 152, 122, 4, 153, 123 ], [ 29, 74, 46, 14, 75, 47 ], [ 49, 54, 24, 10, 55, 25 ], [ 24, 45, 15, 46, 46, 16 ], [ 4, 152, 122, 18, 153, 123 ], [ 13, 74, 46, 32, 75, 47 ], [ 48, 54, 24, 14, 55, 25 ], [ 42, 45, 15, 32, 46, 16 ], [ 20, 147, 117, 4, 148, 118 ], [ 40, 75, 47, 7, 76, 48 ], [ 43, 54, 24, 22, 55, 25 ], [ 10, 45, 15, 67, 46, 16 ], [ 19, 148, 118, 6, 149, 119 ], [ 18, 75, 47, 31, 76, 48 ], [ 34, 54, 24, 34, 55, 25 ], [ 20, 45, 15, 61, 46, 16 ] ], c.getRSBlocks = function(e, t) {
_i_("3dab:0c299188");
var i = c.getRsBlockTable(e, t);
if (void 0 == i) throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
for (var n = i.length / 3, r = [], a = 0; n > a; a++) for (var o = i[3 * a + 0], _ = i[3 * a + 1], s = i[3 * a + 2], d = 0; o > d; d++) r.push(new c(_, s));
return _r_(r);
}, c.getRsBlockTable = function(e, t) {
switch (_i_("3dab:d74515ac"), t) {
case r.L:
return _r_(c.RS_BLOCK_TABLE[4 * (e - 1) + 0]);

case r.M:
return _r_(c.RS_BLOCK_TABLE[4 * (e - 1) + 1]);

case r.Q:
return _r_(c.RS_BLOCK_TABLE[4 * (e - 1) + 2]);

case r.H:
return _r_(c.RS_BLOCK_TABLE[4 * (e - 1) + 3]);

default:
return _r_(void 0);
}
_r_();
};
function l() {
_i_("3dab:e4634369"), this.buffer = [], this.length = 0, _r_();
}
l.prototype = {
get:function(e) {
_i_("3dab:278c939d");
var t = Math.floor(e / 8);
return _r_(1 == (this.buffer[t] >>> 7 - e % 8 & 1));
},
put:function(e, t) {
_i_("3dab:3236a4ae");
for (var i = 0; t > i; i++) this.putBit(1 == (e >>> t - i - 1 & 1));
_r_();
},
getLengthInBits:function() {
return _i_("3dab:d80d0d96"), _r_(this.length);
},
putBit:function(e) {
_i_("3dab:ce9316c4");
var t = Math.floor(this.length / 8);
this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++, _r_();
}
};
var u = [ [ 17, 14, 11, 7 ], [ 32, 26, 20, 14 ], [ 53, 42, 32, 24 ], [ 78, 62, 46, 34 ], [ 106, 84, 60, 44 ], [ 134, 106, 74, 58 ], [ 154, 122, 86, 64 ], [ 192, 152, 108, 84 ], [ 230, 180, 130, 98 ], [ 271, 213, 151, 119 ], [ 321, 251, 177, 137 ], [ 367, 287, 203, 155 ], [ 425, 331, 241, 177 ], [ 458, 362, 258, 194 ], [ 520, 412, 292, 220 ], [ 586, 450, 322, 250 ], [ 644, 504, 364, 280 ], [ 718, 560, 394, 310 ], [ 792, 624, 442, 338 ], [ 858, 666, 482, 382 ], [ 929, 711, 509, 403 ], [ 1003, 779, 565, 439 ], [ 1091, 857, 611, 461 ], [ 1171, 911, 661, 511 ], [ 1273, 997, 715, 535 ], [ 1367, 1059, 751, 593 ], [ 1465, 1125, 805, 625 ], [ 1528, 1190, 868, 658 ], [ 1628, 1264, 908, 698 ], [ 1732, 1370, 982, 742 ], [ 1840, 1452, 1030, 790 ], [ 1952, 1538, 1112, 842 ], [ 2068, 1628, 1168, 898 ], [ 2188, 1722, 1228, 958 ], [ 2303, 1809, 1283, 983 ], [ 2431, 1911, 1351, 1051 ], [ 2563, 1989, 1423, 1093 ], [ 2699, 2099, 1499, 1139 ], [ 2809, 2213, 1579, 1219 ], [ 2953, 2331, 1663, 1273 ] ];
function f() {
return _i_("3dab:6e68d0c1"), _r_("undefined" != typeof CanvasRenderingContext2D);
}
function h() {
_i_("3dab:abf38cca");
var e = !1, t = navigator.userAgent;
if (/android/i.test(t)) {
e = !0;
var i = t.toString().match(/android ([0-9]\.[0-9])/i);
i && i[1] && (e = parseFloat(i[1]));
}
return _r_(e);
}
var b = function() {
_i_("3dab:0d2f3985");
var e = function(e, t) {
_i_("3dab:5c8e4d4a"), this._el = e, this._htOption = t, _r_();
};
return e.prototype.draw = function(e) {
_i_("3dab:3b130b0c");
var t = this._htOption, i = this._el, n = e.getModuleCount();
Math.floor(t.width / n), Math.floor(t.height / n);
this.clear();
function r(e, t) {
_i_("3dab:049f82d5");
var i = document.createElementNS("http://www.w3.org/2000/svg", e);
for (var n in t) t.hasOwnProperty(n) && i.setAttribute(n, t[n]);
return _r_(i);
}
var a = r("svg", {
viewBox:"0 0 " + String(n) + " " + String(n),
width:"100%",
height:"100%",
fill:t.colorLight
});
a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), i.appendChild(a), a.appendChild(r("rect", {
fill:t.colorLight,
width:"100%",
height:"100%"
})), a.appendChild(r("rect", {
fill:t.colorDark,
width:"1",
height:"1",
id:"template"
}));
for (var o = 0; n > o; o++) for (var _ = 0; n > _; _++) if (e.isDark(o, _)) {
var s = r("use", {
x:String(_),
y:String(o)
});
s.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), a.appendChild(s);
}
_r_();
}, e.prototype.clear = function() {
for (_i_("3dab:971f3d15"); this._el.hasChildNodes(); ) this._el.removeChild(this._el.lastChild);
_r_();
}, _r_(e);
}(), p = "svg" === document.documentElement.tagName.toLowerCase(), g = p ? b :f() ? function() {
_i_("3dab:db6a8b7b");
function e() {
_i_("3dab:36058078"), this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none", _r_();
}
function t(e, t) {
_i_("3dab:62accc87");
var i = this;
if (i._fFail = t, i._fSuccess = e, null === i._bSupportDataURI) {
var n = document.createElement("img"), r = function() {
_i_("3dab:296d561d"), i._bSupportDataURI = !1, i._fFail && i._fFail.call(i), _r_();
}, a = function() {
_i_("3dab:b3d5df6d"), i._bSupportDataURI = !0, i._fSuccess && i._fSuccess.call(i), _r_();
};
return n.onabort = r, n.onerror = r, n.onload = a, n.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==", _r_();
}
i._bSupportDataURI === !0 && i._fSuccess ? i._fSuccess.call(i) :i._bSupportDataURI === !1 && i._fFail && i._fFail.call(i), _r_();
}
var i = function(e, t) {
_i_("3dab:df630b92"), this._bIsPainted = !1, this._android = h(), this._htOption = t, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = t.width, this._elCanvas.height = t.height, e.appendChild(this._elCanvas), this._el = e, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.alt = "Scan me!", this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null, _r_();
};
return i.prototype.draw = function(e) {
_i_("3dab:9d192c49");
var t = this._elImage, i = this._oContext, n = this._htOption, r = e.getModuleCount(), a = n.width / r, o = n.height / r, _ = Math.round(a), s = Math.round(o);
t.style.display = "none", this.clear();
for (var d = 0; r > d; d++) for (var c = 0; r > c; c++) {
var l = e.isDark(d, c), u = c * a, f = d * o;
i.strokeStyle = l ? n.colorDark :n.colorLight, i.lineWidth = 1, i.fillStyle = l ? n.colorDark :n.colorLight, i.fillRect(u, f, a, o), i.strokeRect(Math.floor(u) + .5, Math.floor(f) + .5, _, s), i.strokeRect(Math.ceil(u) - .5, Math.ceil(f) - .5, _, s);
}
this._bIsPainted = !0, _r_();
}, i.prototype.makeImage = function() {
_i_("3dab:e6ae3626"), this._bIsPainted && t.call(this, e), _r_();
}, i.prototype.isPainted = function() {
return _i_("3dab:18799e81"), _r_(this._bIsPainted);
}, i.prototype.clear = function() {
_i_("3dab:3b235e20"), this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1, _r_();
}, i.prototype.round = function(e) {
if (_i_("3dab:d65848a8"), !e) return _r_(e);
return _r_(Math.floor(1e3 * e) / 1e3);
}, _r_(i);
}() :function() {
_i_("3dab:8eaa92b5");
var e = function(e, t) {
_i_("3dab:5c8e4d4a1"), this._el = e, this._htOption = t, _r_();
};
return e.prototype.draw = function(e) {
_i_("3dab:920a0b0e");
for (var t = this._htOption, i = this._el, n = e.getModuleCount(), r = Math.floor(t.width / n), a = Math.floor(t.height / n), o = [ '<table style="border:0;border-collapse:collapse;">' ], _ = 0; n > _; _++) {
o.push("<tr>");
for (var s = 0; n > s; s++) o.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + r + "px;height:" + a + "px;background-color:" + (e.isDark(_, s) ? t.colorDark :t.colorLight) + ';"></td>');
o.push("</tr>");
}
o.push("</table>"), i.innerHTML = o.join("");
var d = i.childNodes[0], c = (t.width - d.offsetWidth) / 2, l = (t.height - d.offsetHeight) / 2;
c > 0 && l > 0 && (d.style.margin = l + "px " + c + "px"), _r_();
}, e.prototype.clear = function() {
_i_("3dab:a15cf22c"), this._el.innerHTML = "", _r_();
}, _r_(e);
}();
function m(e, t) {
_i_("3dab:9effcde0");
for (var i = 1, n = v(e), a = 0, o = u.length; o >= a; a++) {
var _ = 0;
switch (t) {
case r.L:
_ = u[a][0];
break;

case r.M:
_ = u[a][1];
break;

case r.Q:
_ = u[a][2];
break;

case r.H:
_ = u[a][3];
}
if (_ >= n) break;
i++;
}
if (i > u.length) throw new Error("Too long data");
return _r_(i);
}
function v(e) {
_i_("3dab:d9afcbf0");
var t = encodeURI(e).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
return _r_(t.length + (t.length != e ? 3 :0));
}
n = function(e, t) {
if (_i_("3dab:6f3c472b"), this._htOption = {
width:256,
height:256,
typeNumber:4,
colorDark:"#000000",
colorLight:"#ffffff",
correctLevel:r.H
}, "string" == typeof t && (t = {
text:t
}), t) for (var i in t) this._htOption[i] = t[i];
"string" == typeof e && (e = document.getElementById(e)), this._htOption.useSVG && (g = b), this._android = h(), this._el = e, this._oQRCode = null, this._oDrawing = new g(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text), _r_();
}, n.prototype.makeCode = function(e) {
_i_("3dab:be6d9c4e"), this._oQRCode = new t(m(e, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(e), this._oQRCode.make(), this._el.title = e, this._oDrawing.draw(this._oQRCode), this.makeImage(), _r_();
}, n.prototype.makeImage = function() {
_i_("3dab:7d14ef0b"), "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage(), _r_();
}, n.prototype.clear = function() {
_i_("3dab:47e085f6"), this._oDrawing.clear(), _r_();
}, n.CorrectLevel = r, _r_();
}(), t.QRCode = n, _r_();
}), B.define("component/qrcode/qrcode", function(e, t, i) {
"use strict";
_i_("3dab:94d03f56");
var n = e("component"), r = e("read-data-options"), a = e("component/qrcode/qrcodelib").QRCode;
i.exports = n.extend({
init:function() {
_i_("3dab:25ee1895"), this.options = r(this.el, {
url:String,
width:{
type:Number,
defaultValue:160
},
height:{
type:Number,
defaultValue:160
},
skipShorten:{
type:Boolean,
defaultValue:!1
}
}), this.$el.css({
width:this.options.width + "px",
height:this.options.height + "px"
}), this.options.skipShorten ? this.createQrCode() :this.shortenUrl(), _r_();
},
shortenUrl:function() {
_i_("3dab:8699ce47");
var e = this;
$.get("/short_uri?url=" + encodeURIComponent(e.options.url) + "&aid=" + booking.env.aid, function(t) {
_i_("3dab:5b542a0b"), e.options.url = location.protocol + "//www.booking.com/" + t.short_url, e.createQrCode(), _r_();
}), _r_();
},
createQrCode:function() {
_i_("3dab:4a78535f"), new a(this.$el[0], {
text:this.options.url,
width:this.options.width,
height:this.options.height,
colorDark:"#000000",
colorLight:"#ffffff",
correctLevel:2
}), _r_();
}
}), _r_();
}), B.define("lists/lists-api-legacy", function(e, t, i) {
_i_("3dab:2ddffb5f");
var n = e("jquery"), r = {}, a = {
EDIT:"wl:edit",
FETCH:"wl:fetch",
CREATE:"wl:create",
REMOVE:"wl:remove",
EDITHOTEL:"wl:edithotel",
EDITHOTELSTART:"wl:edithotelstart",
EDITHOTELS:"wl:edithotels",
EDITHOTELSSTART:"wl:edithotelsstart",
LOADINGSTART:"wl:loadingstart",
LOADINGEND:"wl:loadingend"
}, o = {
RECENTLY_VIEWED:3
};
function _(e) {
return _i_("3dab:9c3cae55"), _r_(n.extend(e || {}, {
aid:booking.env.b_aid,
lang:booking.env.b_lang_for_url,
sid:booking.env.b_sid,
stype:booking.env.b_site_type_id,
stid:booking.env.b_stid,
label:booking.env.b_label
}));
}
function s(e, t) {
_i_("3dab:4e91493f"), t = _(t);
var i = e + n.param(t);
if (i in r) return _r_(r[i]);
var o = booking.promise();
return d(a.LOADINGSTART, {
params:t
}), n.ajax({
type:"POST",
url:e,
data:t,
success:function(e) {
_i_("3dab:27552e35"), o.fulfill({
params:t,
result:e
}), _r_();
},
error:function(e) {
_i_("3dab:112e90f8"), o.reject(e), _r_();
},
complete:function() {
_i_("3dab:f853ed9b"), d(a.LOADINGEND, {
params:t
}), _r_();
}
}), r[i] = o, _r_(o);
}
function d(e, t) {
return _i_("3dab:14982cfe"), B.eventEmitter.trigger(e, t), _r_(t);
}
function c(e) {
_i_("3dab:e5d0874b");
var t = "is_new", i = "creation_timestamp", r = [ "is_collaborated", "privacy", "selected" ];
n.each(e, function(e, a) {
_i_("3dab:fe6dfd1e"), n.each(r, function(e, t) {
_i_("3dab:001bb250"), t in a && (a[t] = Boolean(Number(a[t]))), _r_();
}), i in a && (a[t] = 1e3 * a[i] > new Date() - 864e5), _r_();
}), _r_();
}
i.exports = {
init:function() {},
EVENTS:a,
TYPE:o,
edit:function() {},
lists:{},
getHotelLists:function(e) {
return _i_("3dab:8504519f"), _r_(this.lists[e] || []);
},
getListById:function(e, t) {
_i_("3dab:55506ce2");
for (var i = this.getHotelLists(e), n = 0; n < i.length; n++) {
var r = i[n];
if (r.id == t) return _r_(r);
}
return _r_(null);
},
updateLists:function(e, t) {
if (_i_("3dab:c27efc0e"), !e || !e.params) return _r_();
var i = e.params.lists, n = this.getListById(t, i);
n && (n.selected = 1 == e.params.new_state), _r_();
},
addList:function(e, t) {
if (_i_("3dab:7fedd9f0"), !e || !e.id) return _r_();
for (var i in this.lists) if (this.lists.hasOwnProperty(i)) {
var r = this.lists[i];
r.push(n.extend({
hotels_count:1,
selected:i === t
}, e));
}
_r_();
},
fetch:function(e) {
return _i_("3dab:f84c3549"), _r_(s("/wishlist/get", e).then(function(t) {
return _i_("3dab:56665902"), c(t.result.lists), this.lists[e.hotel_id] = t.result.lists, _r_(d(a.FETCH, t));
}.bind(this)));
},
create:function(e) {
return _i_("3dab:6de873c7"), this.clearCache(), _r_(s("/wishlist/create", e).then(function(t) {
if (_i_("3dab:f40f32d8"), c([ t.result ]), this.addList(t.result, e.hotel_id), "string" == typeof e.hotel_ids) {
var i = e.hotel_ids.split(",");
n.each(i, function(e, i) {
_i_("3dab:08b2d163"), d(a.EDITHOTEL, {
params:n.extend({
hotel_id:i,
lists:t.result.id
}, t.params),
result:t.result
}), _r_();
});
}
return _r_(d(a.CREATE, t));
}.bind(this)));
},
remove:function() {},
editHotels:function(e) {
_i_("3dab:e2469d0c"), this.clearCache(), d(a.EDITHOTELSSTART, e);
var t = e.hotel_ids, i = new Array(t.length + 1).join("1").split("");
return n.isArray(t) && (e.hotel_ids = t.join(",")), _r_(s("/wishlist/save_hotels", n.extend({
new_states:i.join(",")
}, e)).then(function(e) {
return _i_("3dab:ee3861a2"), n.each(t, function(t, i) {
_i_("3dab:9ee2b61a"), d(a.EDITHOTELS, {
params:n.extend({
hotel_id:i
}, e.params),
result:e.result
}), _r_();
}), _r_(e);
}));
},
editHotel:function(e) {
return _i_("3dab:8a5e9fde"), this.clearCache(), d(a.EDITHOTELSTART, e), _r_(s("/wishlist/save_hotel", e).then(function(t) {
return _i_("3dab:7f0e2ac5"), this.updateLists(t, e.hotel_id), _r_(d(a.EDITHOTEL, t));
}.bind(this)));
},
clearCache:function() {
_i_("3dab:2766d5f5"), r = {}, _r_();
},
bind:function(e, t, i) {
_i_("3dab:a092e0ae"), B.eventEmitter.bind(e, function() {
_i_("3dab:4dc0d951"), t.apply(i, arguments), _r_();
}), _r_();
}
}, _r_();
}), B.define("lists/lists-recently-viewed/lists-recently-viewed", function(e, t, i) {
"use strict";
_i_("3dab:839bdcab");
var n = e("../lists-api/lists-api"), r = e("../lists-api/lists-api").API, a = e("../lists-store/lists-store"), o = [];
i.exports = {
recentlyViewedHotels:o,
addHotelsToList:function(e) {
_i_("3dab:697be4b7");
var t = this;
a.addHotels({
list_id:e.id,
hotels:t.recentlyViewedHotels
}).then(function() {
_i_("3dab:c8c88371"), t.onAddedtoList(e), _r_();
}), _r_();
},
onAddedtoList:function(e) {
if (_i_("3dab:bf27d00f"), this.renderAddRecentlyViewedToList({
success:1,
recently_viewed_list_name:e.name,
recently_viewed_list_url:e.url
}), window.listView && !B.env.b_run_tfl_move_away_from_lightbox) {
var t = window.listView;
t.setCurrentList({
id:e.id
}), t.show();
}
_r_();
},
toggleLoader:function(e) {
_i_("3dab:f0da46af"), $(".js-add-recently-viewed-to-list-loader").toggleClass("g-hidden", !e), _r_();
},
addBinds:function() {
_i_("3dab:b457fa04");
var e = this;
function t() {
_i_("3dab:e2d20eae");
var t = a.getListByDefaultListId(n.type.RECENTLY_VIEWED);
B.env.auth_level < 1 && (t = a.getListById("0"));
var i = booking.promise();
if (t) i.fulfill(t); else {
var r = $.trim($(".js-uc-viewed-hotels-trigger").text());
i.fulfill(a.createList({
name:r,
default_list:n.type.RECENTLY_VIEWED
}));
}
i.then(function(t) {
_i_("3dab:ac2a5c01"), e.addHotelsToList(t), _r_();
}), _r_();
}
$(".uc_viewedhotels").delegate(".js-save-recently-viewed", "click", function() {
_i_("3dab:7a190e2f");
var i = {};
i.limit = 5, e.toggleLoader(!0), r.getRecentlyViewed(i, function(i) {
_i_("3dab:48839f44"), e.recentlyViewedHotels = i.hotels, a.fetch({}).then(t), _r_();
}), _r_();
}), _r_();
},
renderAddRecentlyViewedToList:function(e) {
_i_("3dab:bfb3d665");
var t = $(".uc_viewedhotels .user_search_item:not(.no_listing)").length;
if (0 === t) return _r_();
var i = $.extend(e, {
wl_recently_viewed_loader:B.tools.jsStaticUrl("/static/img/wl-recently-viewed-loader.gif"),
properties_length:t
});
$(".save-recently-viewed-container").remove(), $(".popover_footer_add_to_list").prepend(B.jstmpl("lists_recently_viewed").render(i)), B.eventEmitter.trigger("recently_viewed_properties_nav_trigger"), _r_();
},
init:function() {
_i_("3dab:29952d2b"), booking.eventEmitter.bind("uc_recently_viewed_loaded", this.renderAddRecentlyViewedToList.bind(this)), this.addBinds(), _r_();
}
}, _r_();
}), B.define("lists/lists-header-button/lists-header-button", function(e, t, i) {
"use strict";
_i_("3dab:0b07d01a");
var n = e("lists/lists-api-legacy"), r = e("../lists-store/lists-store"), a = e("../listview-touch/listview-touch");
i.exports = e("component").extend({
init:function() {
_i_("3dab:1f85c62d");
var e = this.$el.find(".js-lists-header-button"), t = "lists-header-button--flash", i = [ n.EVENTS.EDITHOTEL ];
B.eventEmitter.bind(i.join(" "), function(i, n) {
_i_("3dab:5cff1e8c"), e.addClass(t), setTimeout(function() {
_i_("3dab:3f65c77b"), e.removeClass(t), _r_();
}, 600), _r_();
}), r.on("liststore:loading", function(e) {
_i_("3dab:fce8d2a7"), $(".lists-header-button").toggleClass("lists-header-button--loading", e), a.isEnabled() && $(".js-uc-listview-lightbox").toggleClass("uc-listview-loading", e), _r_();
}), _r_();
}
}), _r_();
}), B.require([ "require" ], function(e) {
_i_("3dab:eb777e32");
var t = e("lists/lists-recently-viewed/lists-recently-viewed");
t.init(), B.define("component/lists-header-button", function() {
return _i_("3dab:ca858179"), _r_(e("lists/lists-header-button/lists-header-button"));
}), _r_();
}), /* @preserve
 * accounting.js v0.3.2
 * Copyright 2011, Joss Crowcroft
 *
 * Freely distributable under the MIT license.
 * Portions of accounting.js are inspired or borrowed from underscore.js
 *
 * Full details and documentation:
 * http://josscrowcroft.github.com/accounting.js/
 */
function(e, t) {
_i_("3dab:f70a21a0");
var i = {};
i.version = "0.3.2", i.settings = {
currency:{
symbol:"$",
format:"%s%v",
decimal:".",
thousand:",",
precision:2,
grouping:3
},
number:{
precision:0,
grouping:3,
thousand:",",
decimal:"."
}
};
var n = Array.prototype.map, r = Array.isArray, a = Object.prototype.toString;
function o(e) {
return _i_("3dab:795d7019"), _r_(!!("" === e || e && e.charCodeAt && e.substr));
}
function _(e) {
return _i_("3dab:e44e39bd"), _r_(r ? r(e) :"[object Array]" === a.call(e));
}
function s(e) {
return _i_("3dab:5572d3b3"), _r_(e && "[object Object]" === a.call(e));
}
function d(e, t) {
_i_("3dab:17da1f12");
var i;
e = e || {}, t = t || {};
for (i in t) t.hasOwnProperty(i) && null == e[i] && (e[i] = t[i]);
return _r_(e);
}
function c(e, t, i) {
_i_("3dab:0f7966f0");
var r, a, o = [];
if (!e) return _r_(o);
if (n && e.map === n) return _r_(e.map(t, i));
for (r = 0, a = e.length; a > r; r++) o[r] = t.call(i, e[r], r, e);
return _r_(o);
}
function l(e, t) {
return _i_("3dab:423ad09f"), e = Math.round(Math.abs(e)), _r_(isNaN(e) ? t :e);
}
function u(e) {
_i_("3dab:f941cf92");
var t = i.settings.currency.format;
if ("function" == typeof e && (e = e()), o(e) && e.match("%v")) return _r_({
pos:e,
neg:e.replace("-", "").replace("%v", "-%v"),
zero:e
});
if (!e || !e.pos || !e.pos.match("%v")) return _r_(o(t) ? i.settings.currency.format = {
pos:t,
neg:t.replace("%v", "-%v"),
zero:t
} :t);
return _r_(e);
}
var f = i.unformat = i.parse = function(e, t) {
if (_i_("3dab:2cdb06bf"), _(e)) return _r_(c(e, function(e) {
return _i_("3dab:d37600ac"), _r_(f(e, t));
}));
if (e = e || 0, "number" == typeof e) return _r_(e);
t = t || i.settings.number.decimal;
var n = new RegExp("[^0-9-" + t + "]", [ "g" ]), r = parseFloat(("" + e).replace(/\((.*)\)/, "-$1").replace(n, "").replace(t, "."));
return _r_(isNaN(r) ? 0 :r);
}, h = i.toFixed = function(e, t) {
_i_("3dab:cc360289"), t = l(t, i.settings.number.precision);
var n = Math.pow(10, t);
return _r_((Math.round(i.unformat(e) * n) / n).toFixed(t));
}, b = i.formatNumber = function(e, t, n, r) {
if (_i_("3dab:bd21cd68"), _(e)) return _r_(c(e, function(e) {
return _i_("3dab:06ed8003"), _r_(b(e, t, n, r));
}));
e = f(e);
var a = d(s(t) ? t :{
precision:t,
thousand:n,
decimal:r
}, i.settings.number), o = l(a.precision), u = 0 > e ? "-" :"", p = parseInt(h(Math.abs(e || 0), o), 10) + "", g = p.length > 3 ? p.length % 3 :0;
return _r_(u + (g ? p.substr(0, g) + a.thousand :"") + p.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + a.thousand) + (o ? a.decimal + h(Math.abs(e), o).split(".")[1] :""));
}, p = i.formatMoney = function(e, t, n, r, a, o) {
if (_i_("3dab:0bec288d"), _(e)) return _r_(c(e, function(e) {
return _i_("3dab:eca60a24"), _r_(p(e, t, n, r, a, o));
}));
e = f(e);
var h = d(s(t) ? t :{
symbol:t,
precision:n,
thousand:r,
decimal:a,
format:o
}, i.settings.currency), g = u(h.format), m = e > 0 ? g.pos :0 > e ? g.neg :g.zero;
return _r_(m.replace("%s", h.symbol).replace("%v", b(Math.abs(e), l(h.precision), h.thousand, h.decimal)));
};
i.formatColumn = function(e, t, n, r, a, h) {
if (_i_("3dab:2f725b91"), !e) return _r_([]);
var p = d(s(t) ? t :{
symbol:t,
precision:n,
thousand:r,
decimal:a,
format:h
}, i.settings.currency), g = u(p.format), m = g.pos.indexOf("%s") < g.pos.indexOf("%v") ? !0 :!1, v = 0, y = c(e, function(e, t) {
if (_i_("3dab:94139f0c"), _(e)) return _r_(i.formatColumn(e, p));
e = f(e);
var n = e > 0 ? g.pos :0 > e ? g.neg :g.zero, r = n.replace("%s", p.symbol).replace("%v", b(Math.abs(e), l(p.precision), p.thousand, p.decimal));
return r.length > v && (v = r.length), _r_(r);
});
return _r_(c(y, function(e, t) {
if (_i_("3dab:f63eb5c5"), o(e) && e.length < v) return _r_(m ? e.replace(p.symbol, p.symbol + new Array(v - e.length + 1).join(" ")) :new Array(v - e.length + 1).join(" ") + e);
return _r_(e);
}));
}, i.noConflict = function(n) {
return _i_("3dab:dd0debf6"), _r_(function() {
return _i_("3dab:61b01b1b"), e.accounting = n, i.noConflict = t, _r_(i);
});
}(e.accounting), e.accounting = i, _r_();
}(window), function() {
if (_i_("3dab:1684841a"), !window.accounting || !booking.env.accounting_config) return _r_();
var e = window.accounting, t = booking.env.accounting_config, i = {
init:function(e) {
_i_("3dab:37aae2fc"), this._current = e, _r_();
},
formatMoney:function(i, a, o) {
if (_i_("3dab:a940b4e1"), "number" != typeof i && isNaN(parseFloat(i)) && ("function" == typeof B.debug && B.debug("jstmpl").warn("formatMoney expected a number but got a string.", arguments), "function" == typeof B.squeak && B.squeak("MMZXZAQUfUfWcZZYTRXO")), "undefined" != typeof a ? "object" == typeof a && (o = a, a = this._current) :a = this._current, "undefined" == typeof a) throw "The module hasn't been initiated, so you have to provide currencyCode";
i % 1 === 0 && (o = o || {}, o.precision = "undefined" != typeof o.precision ? o.precision :"integer");
var _ = o && "undefined" != typeof o.is_arabic_number ? o.is_arabic_number :"undefined" != typeof t.is_arabic_number ? t.is_arabic_number :!1, s = n(a, o), d = e.formatMoney(i, s);
return _ && (d = r(d)), _r_(d);
},
formatDistanceNumber:function(t, i) {
_i_("3dab:71c8d5bd");
var r = this._current, a = n(r, i), o = a.symbol, _ = e.formatMoney(t, a), s = new RegExp(o, "g");
return _ = _.replace(s, ""), _ = _.replace(/[^0-9\.\,]/g, ""), _r_(_);
},
formatDistance:function(e, t) {
_i_("3dab:4cb1f0fc");
var i, n = booking.env, r = {
number:e,
unit:"m",
isImperial:n.distance_config && "metric" != n.distance_config
}, a = " ";
return t = t || {}, t.unit = t.unit || r.unit, t.hasOwnProperty("precision") || (t.precision = 1), this.changeDistanceToMetricUnit(r, t), r.isImperial && this.convertDistanceToImperial(r, t), i = this.formatDistanceNumber(r.number, t), _r_(i + a + r.unit);
},
changeDistanceToMetricUnit:function(e, t) {
_i_("3dab:f0665492");
var i = e.number;
if (t.unit) switch (t.unit) {
case "m":
e.unit = "m";
break;

case "km":
e.number = .001 * i, !e.isImperial && t.autoUnit && Math.floor(e.number) < 1 ? (e.number = i, t.precision = 0, e.unit = "m") :e.unit = "km";
}
_r_();
},
convertDistanceToImperial:function(e, t) {
_i_("3dab:cb35885d");
var i = e.number;
switch (t.unit) {
case "m":
e.unit = "yd", e.number = 1.0936133 * i;
break;

case "km":
e.number = .621371192 * i, e.unit = "mi";
}
_r_();
},
getOptions:function() {
return _i_("3dab:d275547a"), _r_(n(this._current));
}
};
i.init(booking.env.b_selected_currency_symbol || booking.env.b_selected_currency || booking.env.b_hotel_currencycode), booking.utils = booking.utils || {}, booking.utils.accounting = i;
function n(e, i) {
_i_("3dab:9e130143"), i = $.extend({
symbolFormat:"%s",
valueFormat:"%s"
}, i), i.valueFormat = i.valueFormat.replace("%s", "%v");
var n, r = i.symbolFormat, a = i.valueFormat, o = "undefined" != typeof t.html_symbol[e] ? t.html_symbol[e] :e, _ = "undefined" != typeof t.decimal_separator[e] ? t.decimal_separator[e] :"undefined" != typeof t.decimal_separator["default"] ? t.decimal_separator["default"] :".", s = "undefined" != typeof t.group_separator[e] ? t.group_separator[e] :"undefined" != typeof t.group_separator["default"] ? t.group_separator["default"] :",", d = function(e, t) {
return _i_("3dab:ed260718"), _r_("before" === t ? r + e + a :a + e + r);
}("undefined" != typeof t.currency_separator[e] ? t.currency_separator[e] :"undefined" != typeof t.currency_separator["default"] && e ? t.currency_separator["default"] :" ", "undefined" != typeof t.symbol_position[e] ? t.symbol_position[e] :"undefined" != typeof t.symbol_position["default"] ? t.symbol_position["default"] :"before");
return "undefined" != typeof t.num_decimals && (n = t.num_decimals["default"]), "undefined" != typeof t.num_decimals && (n = "undefined" != typeof t.num_decimals[e] ? t.num_decimals[e] :n), "integer" === i.precision && (n = 0), isNaN(parseInt(i.precision, 10)) || (n = i.precision), _r_({
symbol:o,
decimal:_,
thousand:s,
format:d,
precision:n
});
}
function r(e) {
_i_("3dab:4542c876");
var t = [ "&#1632;", "&#1633;", "&#1634;", "&#1635;", "&#1636;", "&#1637;", "&#1638;", "&#1639;", "&#1640;", "&#1641;" ], i = "";
return i = e.replace(/(?!&#[\d|a-z|A-Z]*)\d(?![\d|a-z|A-Z]*;)/g, function(e, i, n, r) {
return _i_("3dab:614aff87"), _r_(t[parseInt(e, 10)]);
}), _r_(i);
}
_r_();
}(), $(function() {
_i_("3dab:809a7dee"), booking.jstmpl && booking.jstmpl.setup(function(e) {
if (_i_("3dab:e694ec80"), !e || !e.formatMoney) return _r_({});
function t(t, i) {
if (_i_("3dab:03fd9b5e"), isNaN(t) || t % 1 !== 0) return _r_(t);
return i = i || {}, i.precision = 0, _r_(e.formatMoney(t, "", i));
}
function i(t, i) {
if (_i_("3dab:4542c07f"), isNaN(t)) return _r_(t);
if (i = i || {}, i && !i.precision) {
var n = ("" + t).split("."), r = (n.length > 1 ? n[1] :"").length;
i.precision = r;
}
return _r_(e.formatMoney(t, "", i));
}
function n(e) {
_i_("3dab:e4052c27");
var t, i = Math.abs;
if (i(e) < 50) return _r_(e);
if (t = i(e) < 100 ? 5 :i(e) < 500 ? 10 :i(e) < 1e3 ? 50 :i(e) < 5e3 ? 100 :i(e) < 1e4 ? 500 :i(e) < 5e4 ? 1e3 :i(e) < 1e5 ? 5e3 :1e4, e % t === 0) return _r_(e);
var n = 1;
return 0 > e && (n = 0), e = Math.floor(e / t), e *= t, n && (e += t), _r_(e);
}
function r(t, i) {
if (_i_("3dab:67c4a173"), isNaN(t) || t % 1 !== 0) return _r_(t);
return i = i || {}, i.precision = 0, t = n(t), _r_(e.formatMoney(t, "", i));
}
function a(t, i) {
return _i_("3dab:68b96faf"), _r_(e.formatMoney(t, i));
}
function o(e, t) {
_i_("3dab:aeab377c");
var n = i(e, t);
return /,|\./.test(n) || 10 == n || (n += booking.env.accounting_config.decimal_separator["default"] + "0"), _r_(n);
}
function _(e) {
_i_("3dab:52e4624e");
var t = Math.round(10 * (Number(e) || 0)) / 10, n = Number(t).toFixed(1), r = 2.5 >= n ? 2.5 :n >= 10 ? 10 :n;
return _r_(i(r));
}
return _r_({
fn:{
format_number:t,
format_number_decimal:i,
format_number_rounded:r,
format_price:a,
format_review_score:o,
format_review_score_plain:o,
format_review_score_new:_
}
});
}(booking && booking.utils && booking.utils.accounting)), _r_();
}), "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = function(e) {
_i_("3dab:99774e7a");
var t = e.__proto__;
return _r_(t || null === t ? t :"[object Function]" === Function.prototype.call.call(Object.prototype.toString, e.constructor) ? e.constructor.prototype :e instanceof Object ? Object.prototype :null);
}), B.define("redux", function(e, t, i) {
_i_("3dab:f7758ddb"), function(e, n) {
_i_("3dab:cdacee32"), "object" == typeof t && "object" == typeof i ? i.exports = n() :"function" == typeof define && define.amd ? define([], n) :"object" == typeof t ? t.Redux = n() :e.Redux = n(), _r_();
}(this, function() {
return _i_("3dab:98a9b0ae"), _r_(function(e) {
_i_("3dab:efd781f9");
var t = {};
function i(n) {
if (_i_("3dab:df0bf25d"), t[n]) return _r_(t[n].exports);
var r = t[n] = {
exports:{},
id:n,
loaded:!1
};
return e[n].call(r.exports, r, r.exports, i), r.loaded = !0, _r_(r.exports);
}
return i.m = e, i.c = t, i.p = "", _r_(i(0));
}([ function(e, t, i) {
"use strict";
_i_("3dab:b154c0e9"), t.__esModule = !0, t.compose = t.applyMiddleware = t.bindActionCreators = t.combineReducers = t.createStore = void 0;
var n = i(2), r = h(n), a = i(7), o = h(a), _ = i(6), s = h(_), d = i(5), c = h(d), l = i(1), u = h(l), f = i(3);
h(f);
function h(e) {
return _i_("3dab:5b60c357"), _r_(e && e.__esModule ? e :{
"default":e
});
}
t.createStore = r["default"], t.combineReducers = o["default"], t.bindActionCreators = s["default"], t.applyMiddleware = c["default"], t.compose = u["default"], _r_();
}, function(e, t) {
"use strict";
_i_("3dab:4a4789e7"), t.__esModule = !0, t["default"] = i;
function i() {
_i_("3dab:0cc6f208");
for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
if (0 === t.length) return _r_(function(e) {
return _i_("3dab:0e026f32"), _r_(e);
});
var n = function() {
_i_("3dab:d03ba723");
var e = t[t.length - 1], i = t.slice(0, -1);
return _r_({
v:function() {
return _i_("3dab:78214a93"), _r_(i.reduceRight(function(e, t) {
return _i_("3dab:43a87ba7"), _r_(t(e));
}, e.apply(void 0, arguments)));
}
});
}();
if ("object" == typeof n) return _r_(n.v);
_r_();
}
_r_();
}, function(e, t, i) {
"use strict";
_i_("3dab:2b402008"), t.__esModule = !0, t.ActionTypes = void 0, t["default"] = d;
var n = i(4), r = _(n), a = i(11), o = _(a);
function _(e) {
return _i_("3dab:5b60c3571"), _r_(e && e.__esModule ? e :{
"default":e
});
}
var s = t.ActionTypes = {
INIT:"@@redux/INIT"
};
function d(e, t, i) {
_i_("3dab:e847f5c6");
var n;
if ("function" == typeof t && "undefined" == typeof i && (i = t, t = void 0), "undefined" != typeof i) {
if ("function" != typeof i) throw new Error("Expected the enhancer to be a function.");
return _r_(i(d)(e, t));
}
if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
var a = e, _ = t, c = [], l = c, u = !1;
function f() {
_i_("3dab:47a919c7"), l === c && (l = c.slice()), _r_();
}
function h() {
return _i_("3dab:401ca8b9"), _r_(_);
}
function b(e) {
if (_i_("3dab:948954ff"), "function" != typeof e) throw new Error("Expected listener to be a function.");
var t = !0;
return f(), l.push(e), _r_(function() {
if (_i_("3dab:2b1c1818"), !t) return _r_();
t = !1, f();
var i = l.indexOf(e);
l.splice(i, 1), _r_();
});
}
function p(e) {
if (_i_("3dab:ebb31983"), !(0, r["default"])(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
if ("undefined" == typeof e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
if (u) throw new Error("Reducers may not dispatch actions.");
try {
u = !0, _ = a(_, e);
} finally {
u = !1;
}
for (var t = c = l, i = 0; i < t.length; i++) t[i]();
return _r_(e);
}
function g(e) {
if (_i_("3dab:45410f1f"), "function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
a = e, p({
type:s.INIT
}), _r_();
}
function m() {
_i_("3dab:1082d68b");
var e, t = b;
return _r_((e = {
subscribe:function(e) {
if (_i_("3dab:c6b06053"), "object" != typeof e) throw new TypeError("Expected the observer to be an object.");
function i() {
_i_("3dab:86256af8"), e.next && e.next(h()), _r_();
}
i();
var n = t(i);
return _r_({
unsubscribe:n
});
}
}, e[o["default"]] = function() {
return _i_("3dab:08888aa1"), _r_(this);
}, e));
}
return p({
type:s.INIT
}), _r_((n = {
dispatch:p,
subscribe:b,
getState:h,
replaceReducer:g
}, n[o["default"]] = m, n));
}
_r_();
}, function(e, t) {
"use strict";
_i_("3dab:28d57c08"), t.__esModule = !0, t["default"] = i;
function i(e) {
_i_("3dab:f2a02361"), "undefined" != typeof console && "function" == typeof console.error && console.error(e);
try {
throw new Error(e);
} catch (t) {}
_r_();
}
_r_();
}, function(e, t, i) {
_i_("3dab:6b29ad30");
var n = i(8), r = i(9), a = i(10), o = "[object Object]", _ = Object.prototype, s = Function.prototype.toString, d = _.hasOwnProperty, c = s.call(Object), l = _.toString;
function u(e) {
if (_i_("3dab:446a64bb"), !a(e) || l.call(e) != o || r(e)) return _r_(!1);
var t = n(e);
if (null === t) return _r_(!0);
var i = d.call(t, "constructor") && t.constructor;
return _r_("function" == typeof i && i instanceof i && s.call(i) == c);
}
e.exports = u, _r_();
}, function(e, t, i) {
"use strict";
_i_("3dab:d98172e0"), t.__esModule = !0;
var n = Object.assign || function(e) {
_i_("3dab:e889572d");
for (var t = 1; t < arguments.length; t++) {
var i = arguments[t];
for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
}
return _r_(e);
};
t["default"] = _;
var r = i(1), a = o(r);
function o(e) {
return _i_("3dab:5b60c3572"), _r_(e && e.__esModule ? e :{
"default":e
});
}
function _() {
_i_("3dab:6f3d7eac");
for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
return _r_(function(e) {
return _i_("3dab:06055349"), _r_(function(i, r, o) {
_i_("3dab:e561fb03");
var _ = e(i, r, o), s = _.dispatch, d = [], c = {
getState:_.getState,
dispatch:function(e) {
return _i_("3dab:0fe5411b"), _r_(s(e));
}
};
return d = t.map(function(e) {
return _i_("3dab:0e53476f"), _r_(e(c));
}), s = a["default"].apply(void 0, d)(_.dispatch), _r_(n({}, _, {
dispatch:s
}));
});
});
}
_r_();
}, function(e, t) {
"use strict";
_i_("3dab:9b51b09e"), t.__esModule = !0, t["default"] = n;
function i(e, t) {
return _i_("3dab:1f384beb"), _r_(function() {
return _i_("3dab:aa71ca8f"), _r_(t(e.apply(void 0, arguments)));
});
}
function n(e, t) {
if (_i_("3dab:91a20bc4"), "function" == typeof e) return _r_(i(e, t));
if ("object" != typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" :typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
for (var n = Object.keys(e), r = {}, a = 0; a < n.length; a++) {
var o = n[a], _ = e[o];
"function" == typeof _ && (r[o] = i(_, t));
}
return _r_(r);
}
_r_();
}, function(e, t, i) {
"use strict";
_i_("3dab:85f873a8"), t.__esModule = !0, t["default"] = u;
var n = i(2), r = i(4), a = s(r), o = i(3), _ = s(o);
function s(e) {
return _i_("3dab:5b60c3573"), _r_(e && e.__esModule ? e :{
"default":e
});
}
function d(e, t) {
_i_("3dab:cff602e1");
var i = t && t.type, n = i && '"' + i.toString() + '"' || "an action";
return _r_("Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.');
}
function c(e, t, i) {
_i_("3dab:f2a73eb0");
var r = Object.keys(t), o = i && i.type === n.ActionTypes.INIT ? "initialState argument passed to createStore" :"previous state received by the reducer";
if (0 === r.length) return _r_("Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.");
if (!(0, a["default"])(e)) return _r_("The " + o + ' has unexpected type of "' + {}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + r.join('", "') + '"'));
var _ = Object.keys(e).filter(function(e) {
return _i_("3dab:34903b2b"), _r_(!t.hasOwnProperty(e));
});
if (_.length > 0) return _r_("Unexpected " + (_.length > 1 ? "keys" :"key") + " " + ('"' + _.join('", "') + '" found in ' + o + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + r.join('", "') + '". Unexpected keys will be ignored.'));
_r_();
}
function l(e) {
_i_("3dab:eb4939eb"), Object.keys(e).forEach(function(t) {
_i_("3dab:3d5a65bf");
var i = e[t], r = i(void 0, {
type:n.ActionTypes.INIT
});
if ("undefined" == typeof r) throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
var a = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
if ("undefined" == typeof i(void 0, {
type:a
})) throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + n.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.");
_r_();
}), _r_();
}
function u(e) {
_i_("3dab:e16c4d38");
for (var t = Object.keys(e), i = {}, n = 0; n < t.length; n++) {
var r = t[n];
"function" == typeof e[r] && (i[r] = e[r]);
}
var a, o = Object.keys(i);
try {
l(i);
} catch (s) {
a = s;
}
return _r_(function() {
_i_("3dab:3a86098d");
var e = arguments.length <= 0 || void 0 === arguments[0] ? {} :arguments[0], t = arguments[1];
if (a) throw a;
var n = c(e, i, t);
n && (0, _["default"])(n);
for (var r = !1, s = {}, l = 0; l < o.length; l++) {
var u = o[l], f = i[u], h = e[u], b = f(h, t);
if ("undefined" == typeof b) {
var p = d(u, t);
throw new Error(p);
}
s[u] = b, r = r || b !== h;
}
return _r_(r ? s :e);
});
}
_r_();
}, function(e, t) {
_i_("3dab:0efa003b");
var i = Object.getPrototypeOf;
function n(e) {
return _i_("3dab:62c74501"), _r_(i(Object(e)));
}
e.exports = n, _r_();
}, function(e, t) {
_i_("3dab:5ad08b03");
function i(e) {
_i_("3dab:57204afd");
var t = !1;
if (null != e && "function" != typeof e.toString) try {
t = !!(e + "");
} catch (i) {}
return _r_(t);
}
e.exports = i, _r_();
}, function(e, t) {
_i_("3dab:2dd6413a");
function i(e) {
return _i_("3dab:44c94211"), _r_(!!e && "object" == typeof e);
}
e.exports = i, _r_();
}, function(e, t, i) {
_i_("3dab:340049b5"), function(t) {
"use strict";
_i_("3dab:54146ae9"), e.exports = i(12)(t || window || this), _r_();
}.call(t, function() {
return _i_("3dab:693c131b"), _r_(this);
}()), _r_();
}, function(e, t) {
"use strict";
_i_("3dab:d8389621"), e.exports = function(e) {
_i_("3dab:16dfda09");
var t, i = e.Symbol;
return "function" == typeof i ? i.observable ? t = i.observable :(t = "function" == typeof i["for"] ? i["for"]("observable") :i("observable"), i.observable = t) :t = "@@observable", _r_(t);
}, _r_();
} ]));
}), _r_();
}), B.define("redux-thunk", function(e, t, i) {
_i_("3dab:24d16021");
function n(e) {
return _i_("3dab:a7fd3be6"), _r_(function(t) {
_i_("3dab:062ac9a3");
var i = t.dispatch, n = t.getState;
return _r_(function(t) {
return _i_("3dab:a578fd04"), _r_(function(r) {
if (_i_("3dab:e53004a6"), "function" == typeof r) return _r_(r(i, n, e));
return _r_(t(r));
});
});
});
}
var r = n();
r.withExtraArgument = n, i.exports = r, _r_();
}), B.when({
events:"load",
condition:B.env.fe_cookie_warning && B.env.b_bookings_owned && B.env.fe_cookie_detector
}).run(function(e) {
if (_i_("3dab:ffa22035"), !B.eventEmitter || !window.navigator || "function" != typeof window.navigator.sendBeacon || "function" != typeof window.FormData) return _r_();
B.eventEmitter.on("COOKIE_CONSENT_PROVIDED", function() {
_i_("3dab:32920979"), window.removeEventListener("beforeunload", t), _r_();
}), B.env.b_dev_server ? window.addEventListener("test:report:cookies", t) :window.addEventListener("beforeunload", t);
function t() {
if (_i_("3dab:75fc5f43"), !window.performance || !window.performance.getEntriesByType || "function" != typeof window.performance.getEntriesByType) return _r_();
var e = window.performance.getEntriesByType("resource"), t = n(e);
if (!t.length) return _r_();
var i = "/log_foreign_resources?bhc_csrf_token=" + B.env.b_csrf_token, r = {
action:B.env.b_action || location.pathname,
aid:B.env.b_aid || 0,
landing:B.env.b_is_landing || 0,
resources:t
};
window.navigator.sendBeacon(i, JSON.stringify(r)), _r_();
}
function i(e) {
_i_("3dab:303417bd");
for (var t = [ {
hostname:"www.google-analytics.com",
pathname:"/analytics.js"
}, {
hostname:"www.google-analytics.com",
pathname:"/collect"
}, {
hostname:"maps.googleapis.com",
pathname:"/maps/api/staticmap"
}, {
hostname:"www.google-analytics.com",
scriptname:"ec.js"
}, {
hostname:"graph.facebook.com",
scriptname:"picture"
}, {
hostname:/\.hotjar.com/
}, {
hostname:"d3sqxisklclazg.cloudfront.net"
}, {
hostname:"maps.gstatic.com"
}, {
hostname:/\.kaspersky-labs.com/
} ], i = e.pathname.split("/").pop().split(";")[0], n = 0; n < t.length; n++) {
var r = t[n];
if ("string" == typeof r.hostname) {
if (e.hostname !== r.hostname) continue;
} else if (!r.hostname.test(e.hostname)) continue;
if (r.pathname && e.pathname === r.pathname) return _r_(!0);
if (r.scriptname && r.scriptname === i) return _r_(!0);
if (!r.scriptname && !r.pathname) return _r_(!0);
}
return _r_(!1);
}
function n(e) {
_i_("3dab:7ec4798c");
for (var t, n, r, a, o = {}, _ = [], s = 0; s < e.length; s++) {
if (n = e[s], r = document.createElement("a"), r.href = n.name, a = n.initiatorType, !r.hostname || !r.pathname || /bstatic/.test(r.hostname) || /booking\.com/.test(r.hostname) || "css" === a || r.hostname === location.hostname || i(r)) continue;
t = o[r.hostname + a] = o[r.hostname + a] || {}, t.domain = r.hostname, t.scriptname = t.scriptname || [], t.scriptname.push(r.pathname.split("/").pop().split(";")[0]), t.type = a;
}
for (t in o) o.hasOwnProperty(t) && _.push(o[t]);
return _r_(_);
}
_r_();
}), function(e, t) {
if (_i_("3dab:f5fc6b37"), !t) return _r_();
t.easing.jswing = t.easing.swing, t.extend(t.easing, {
def:"easeOutQuad",
swing:function(e, i, n, r, a) {
return _i_("3dab:885049d7"), _r_(t.easing[t.easing.def](e, i, n, r, a));
},
easeInQuad:function(e, t, i, n, r) {
return _i_("3dab:a60f8a31"), _r_(n * (t /= r) * t + i);
},
easeOutQuad:function(e, t, i, n, r) {
return _i_("3dab:1429b37a"), _r_(-n * (t /= r) * (t - 2) + i);
},
easeInOutQuad:function(e, t, i, n, r) {
if (_i_("3dab:c873508e"), (t /= r / 2) < 1) return _r_(n / 2 * t * t + i);
return _r_(-n / 2 * (--t * (t - 2) - 1) + i);
},
easeInCubic:function(e, t, i, n, r) {
return _i_("3dab:9234452c"), _r_(n * (t /= r) * t * t + i);
},
easeOutCubic:function(e, t, i, n, r) {
return _i_("3dab:981f963a"), _r_(n * ((t = t / r - 1) * t * t + 1) + i);
},
easeInOutCubic:function(e, t, i, n, r) {
if (_i_("3dab:8b80c709"), (t /= r / 2) < 1) return _r_(n / 2 * t * t * t + i);
return _r_(n / 2 * ((t -= 2) * t * t + 2) + i);
},
easeInQuart:function(e, t, i, n, r) {
return _i_("3dab:6201f1a3"), _r_(n * (t /= r) * t * t * t + i);
},
easeOutQuart:function(e, t, i, n, r) {
return _i_("3dab:716de497"), _r_(-n * ((t = t / r - 1) * t * t * t - 1) + i);
},
easeInOutQuart:function(e, t, i, n, r) {
if (_i_("3dab:0ce15a2c"), (t /= r / 2) < 1) return _r_(n / 2 * t * t * t * t + i);
return _r_(-n / 2 * ((t -= 2) * t * t * t - 2) + i);
},
easeInQuint:function(e, t, i, n, r) {
return _i_("3dab:9872e11d"), _r_(n * (t /= r) * t * t * t * t + i);
},
easeOutQuint:function(e, t, i, n, r) {
return _i_("3dab:412de34e"), _r_(n * ((t = t / r - 1) * t * t * t * t + 1) + i);
},
easeInOutQuint:function(e, t, i, n, r) {
if (_i_("3dab:4c6a0089"), (t /= r / 2) < 1) return _r_(n / 2 * t * t * t * t * t + i);
return _r_(n / 2 * ((t -= 2) * t * t * t * t + 2) + i);
},
easeInSine:function(e, t, i, n, r) {
return _i_("3dab:704788a5"), _r_(-n * Math.cos(t / r * (Math.PI / 2)) + n + i);
},
easeOutSine:function(e, t, i, n, r) {
return _i_("3dab:b1cab38b"), _r_(n * Math.sin(t / r * (Math.PI / 2)) + i);
},
easeInOutSine:function(e, t, i, n, r) {
return _i_("3dab:0b3e7973"), _r_(-n / 2 * (Math.cos(Math.PI * t / r) - 1) + i);
},
easeInExpo:function(e, t, i, n, r) {
return _i_("3dab:fe6b329b"), _r_(0 == t ? i :n * Math.pow(2, 10 * (t / r - 1)) + i);
},
easeOutExpo:function(e, t, i, n, r) {
return _i_("3dab:42ce570f"), _r_(t == r ? i + n :n * (-Math.pow(2, -10 * t / r) + 1) + i);
},
easeInOutExpo:function(e, t, i, n, r) {
if (_i_("3dab:c6c5ee76"), 0 == t) return _r_(i);
if (t == r) return _r_(i + n);
if ((t /= r / 2) < 1) return _r_(n / 2 * Math.pow(2, 10 * (t - 1)) + i);
return _r_(n / 2 * (-Math.pow(2, -10 * --t) + 2) + i);
},
easeInCirc:function(e, t, i, n, r) {
return _i_("3dab:f43b702e"), _r_(-n * (Math.sqrt(1 - (t /= r) * t) - 1) + i);
},
easeOutCirc:function(e, t, i, n, r) {
return _i_("3dab:669b8915"), _r_(n * Math.sqrt(1 - (t = t / r - 1) * t) + i);
},
easeInOutCirc:function(e, t, i, n, r) {
if (_i_("3dab:dd8a0b06"), (t /= r / 2) < 1) return _r_(-n / 2 * (Math.sqrt(1 - t * t) - 1) + i);
return _r_(n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i);
},
easeInElastic:function(e, t, i, n, r) {
_i_("3dab:e8810a8f");
var a = 1.70158, o = 0, _ = n;
if (0 == t) return _r_(i);
if (1 == (t /= r)) return _r_(i + n);
if (o || (o = .3 * r), _ < Math.abs(n)) {
_ = n;
var a = o / 4;
} else var a = o / (2 * Math.PI) * Math.asin(n / _);
return _r_(-(_ * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o)) + i);
},
easeOutElastic:function(e, t, i, n, r) {
_i_("3dab:61cd3cde");
var a = 1.70158, o = 0, _ = n;
if (0 == t) return _r_(i);
if (1 == (t /= r)) return _r_(i + n);
if (o || (o = .3 * r), _ < Math.abs(n)) {
_ = n;
var a = o / 4;
} else var a = o / (2 * Math.PI) * Math.asin(n / _);
return _r_(_ * Math.pow(2, -10 * t) * Math.sin((t * r - a) * (2 * Math.PI) / o) + n + i);
},
easeInOutElastic:function(e, t, i, n, r) {
_i_("3dab:e12b4b1f");
var a = 1.70158, o = 0, _ = n;
if (0 == t) return _r_(i);
if (2 == (t /= r / 2)) return _r_(i + n);
if (o || (o = r * (.3 * 1.5)), _ < Math.abs(n)) {
_ = n;
var a = o / 4;
} else var a = o / (2 * Math.PI) * Math.asin(n / _);
if (1 > t) return _r_(-.5 * (_ * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o)) + i);
return _r_(_ * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o) * .5 + n + i);
},
easeInBack:function(e, t, i, n, r, a) {
return _i_("3dab:38e5601d"), void 0 == a && (a = 1.70158), _r_(n * (t /= r) * t * ((a + 1) * t - a) + i);
},
easeOutBack:function(e, t, i, n, r, a) {
return _i_("3dab:7aa0b251"), void 0 == a && (a = 1.70158), _r_(n * ((t = t / r - 1) * t * ((a + 1) * t + a) + 1) + i);
},
easeInOutBack:function(e, t, i, n, r, a) {
if (_i_("3dab:39ad2456"), void 0 == a && (a = 1.70158), (t /= r / 2) < 1) return _r_(n / 2 * (t * t * (((a *= 1.525) + 1) * t - a)) + i);
return _r_(n / 2 * ((t -= 2) * t * (((a *= 1.525) + 1) * t + a) + 2) + i);
},
easeInBounce:function(e, i, n, r, a) {
return _i_("3dab:2d5e6c38"), _r_(r - t.easing.easeOutBounce(e, a - i, 0, r, a) + n);
},
easeOutBounce:function(e, t, i, n, r) {
return _i_("3dab:9317b0a0"), _r_((t /= r) < 1 / 2.75 ? n * (7.5625 * t * t) + i :2 / 2.75 > t ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i :2.5 / 2.75 > t ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i :n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i);
},
easeInOutBounce:function(e, i, n, r, a) {
if (_i_("3dab:c17153c8"), a / 2 > i) return _r_(.5 * t.easing.easeInBounce(e, 2 * i, 0, r, a) + n);
return _r_(.5 * t.easing.easeOutBounce(e, 2 * i - a, 0, r, a) + .5 * r + n);
}
}), _r_();
}(window.booking, window.jQuery), /* @preserve
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
function(e, t, i) {
_i_("3dab:994c3015");
var n, r = "hashchange", a = document, o = e.event.special, _ = a.documentMode, s = "on" + r in t && (_ === i || _ > 7);
function d(e) {
return _i_("3dab:539bad7d"), e = e || location.href, _r_("#" + e.replace(/^[^#]*#?(.*)$/, "$1"));
}
e.fn[r] = function(e) {
return _i_("3dab:67fc6130"), _r_(e ? this.bind(r, e) :this.trigger(r));
}, e.fn[r].delay = 50, o[r] = e.extend(o[r], {
setup:function() {
if (_i_("3dab:83a3e31e"), s) return _r_(!1);
e(n.start), _r_();
},
teardown:function() {
if (_i_("3dab:d0c52f9e"), s) return _r_(!1);
e(n.stop), _r_();
}
}), n = function() {
_i_("3dab:d115597a");
var n, o = {}, _ = d(), c = function(e) {
return _i_("3dab:99d121f5"), _r_(e);
}, l = c, u = c;
o.start = function() {
_i_("3dab:ce717d7b"), n || f(), _r_();
}, o.stop = function() {
_i_("3dab:75089a6b"), n && clearTimeout(n), n = i, _r_();
};
function f() {
_i_("3dab:1268a9b9");
var i = d(), a = u(_);
i !== _ ? (l(_ = i, a), e(t).trigger(r)) :a !== _ && (location.href = location.href.replace(/#.*/, "") + a), n = setTimeout(f, e.fn[r].delay), _r_();
}
return "msie" === B.env.b_browser && !s && function() {
_i_("3dab:81fe97ba");
var t, i;
o.start = function() {
_i_("3dab:d8e080ef"), t || (i = e.fn[r].src, i = i && i + d(), t = e('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
_i_("3dab:d654d244"), i || l(d()), f(), _r_();
}).attr("src", i || "javascript:0").insertAfter("body")[0].contentWindow, a.onpropertychange = function() {
_i_("3dab:af1f9d27");
try {
"title" === event.propertyName && (t.document.title = a.title);
} catch (e) {}
_r_();
}), _r_();
}, o.stop = c, u = function() {
return _i_("3dab:eedd8003"), _r_(d(t.location.href));
}, l = function(i, n) {
_i_("3dab:948d5096");
var o = t.document, _ = e.fn[r].domain;
i !== n && (o.title = a.title, o.open(), _ && o.write('<script>document.domain="' + _ + '"</script>'), o.close(), t.location.hash = i), _r_();
}, _r_();
}(), _r_(o);
}(), _r_();
}(jQuery, window), function(e) {
_i_("3dab:d0d90c40"), e.fn.hint = function(t) {
return _i_("3dab:f63f2dbc"), t || (t = "blur"), _r_(this.each(function() {
_i_("3dab:fba2ab11");
var i = e(this), n = i.attr("title"), r = e(this.form), a = e(window);
function o() {
_i_("3dab:04b8889d"), i.val() === n && i.hasClass(t) && i.val("").removeClass(t), _r_();
}
n && (i.blur(function() {
_i_("3dab:07700097"), "" === this.value && i.val(n).addClass(t), _r_();
}).focus(o).blur(), r.submit(o), a.unload(o)), _r_();
}));
}, _r_();
}(jQuery), booking.env.no_search_placeholder_ie || $("input#keyword.faq_search_input").hint(), function() {
_i_("3dab:0a15e072");
var e = B.require("jquery"), t = B.env.b_is_tdot_traffic ? "click touchstart" :"click", i = 0;
e.extend({
noticeAdd:function(n) {
_i_("3dab:79976511");
var r = !1;
if (booking.events.on("growl:growlClosedManually", function(t) {
if (_i_("3dab:fea82840"), t && t.type.indexOf("abandoned-cart-growl-notification")) {
if (t.growlElem.attr("data-cart-id")) return _r_();
e.cookie("fscag01", null, {
path:"/",
domain:booking.env.b_domain_end
});
}
_r_();
}), "abandoned_cart_growl_notification" == n.textLabel) {
if (e.cookie("fscag01")) ; else if ((!e.canShowNotice() || e.isNoticesDisabled()) && !r) return _r_(!1);
} else if ("abandoned_rooms_table" == n.textLabel) {
if (e.isNoticesDisabled() && !r) return _r_(!1);
} else if ((!e.canShowNotice() || e.isNoticesDisabled()) && !r) return _r_(!1);
i++;
var n, a, o, _, s, d, c = {
inEffect:{
opacity:"show"
},
inEffectDuration:600,
stayTime:3e3,
text:"",
stay:!1,
type:"notice",
destination:"",
platform:"mac",
addClassName:"",
injectHTML:!1,
zindex:!1,
isAutomatic:!1,
textLabel:null,
wrapperClass:"",
fullyClickable:!1,
closeOnCross:!1
}, l = !1;
n = e.extend({}, c, n);
var u = " ", f = " ", h = "notice-wrap " + f + n.platform;
B.env.b_is_tablet && "book" === B.env.b_action && (h += " growl_font_stack"), B.env.rtl && (h += " growl_rtl"), e(".notice-wrap").length ? a = e(".notice-wrap") :(a = e("<div></div>").addClass(h).addClass(n.wrapperClass).appendTo("body"), a[0].id = "growl_squash"), n.zindex === !1 || isNaN(n.zindex) || a.css("z-index", n.zindex);
var b, p;
B.env.rtl && b && p && (l = "__placement_" + p), l && a.addClass(l), o = e("<div></div>").addClass("notice-item-wrapper"), d = "" == n.destination || n.fullyClickable ? "<p>" + n.text + "</p>" :'<p><a  href="' + n.destination + '">' + n.text + "</a></p>", _ = e("" !== n.destination && n.fullyClickable ? '<a  class="notice-item-clickable" href="' + n.destination + '"></a>' :"<div></div>"), n.cartId && _.attr("data-cart-id", n.cartId), _.hide().addClass("notice-item " + u + n.type + " " + n.addClassName).appendTo(a).html(d).animate(n.inEffect, n.inEffectDuration).wrap(o);
var g = _;
if (s = e("<div></div>").addClass("notice-item-close-x").prependTo(_), n.closeOnCross && (g = s), g.bind(t, function(t) {
if (_i_("3dab:b5414c23"), "hotel" === booking.env.b_action) {
var i = JSON.parse(e.cookie("bs")) || {};
i.gc = 1, "undefined" != typeof JSON && e.cookie("bs", JSON.stringify(i), {
path:"/",
domain:booking.env.b_domain_end
});
}
var r = B.require("ga-tracker");
if (r.trackEvent(r.clickTracker, "growl_removed", t && t.target && e(t.target).closest(".notice-item-close-x").length ? "x" :"message"), e.noticeRemove(_, n.addClassName, !1, !0), "" !== n.destination && n.fullyClickable && e(t.target).is(".notice-item-close-x")) return _r_(!1);
return _r_(!!n.destination);
}), n.injectHTML && _.prepend(n.injectHTML), "language" == n.type && (e(".notice-item p").css("cursor", "pointer"), e(".notice-item p").bind(t, function() {
return _i_("3dab:d7a1d3c2"), e("#langselectformlist").val(booking.env.browser_lang), e("#languageselect")[0].submit(), e.noticeRemove(_), _r_(!1);
})), !n.stay) {
var m = n.stayTime;
setTimeout(function() {
_i_("3dab:2f821d9e"), e.noticeRemove(_, "", 1), _r_();
}, m);
}
return booking.eventEmitter.triggerHandler("growl:show", n), booking.events.trigger("growl:show", n), _r_(_);
},
noticeRemove:function(t, i, n, r, a) {
_i_("3dab:0c5b08dc");
var o = t.attr("data-cart-id") && 1;
r && !o && e.setCookieOnClose(), r && B.env.b_growls_close_fast || "tdot" === B.env.b_site_type && "book" === B.env.b_action && 2 === B.env.b_stage || a ? t.parent().remove() :t.animate({
opacity:"0"
}, 600, function() {
_i_("3dab:b63f388b"), t.parent().animate({
height:"0px"
}, 300, function() {
_i_("3dab:e1704f2c"), t.parent().remove(), _r_();
}), _r_();
}), i && "" != i && e("." + i).removeClass(i), booking.eventEmitter.triggerHandler("growl:close", {
growlElem:t,
type:t.attr("class"),
isGrowlClickedManually:r
}), r && booking.events.emit("growl:growlClosedManually", {
growlElem:t,
type:t.attr("class"),
isGrowlClickedManually:r
}), _r_();
},
canShowNotice:function() {
_i_("3dab:0d56013a");
var t = !0, i = parseInt(e.cookie("gcmdt")) || !1;
if (i !== !1) {
var n = (new Date().getTime() - i) / 1e3 / 60;
20 >= n && (t = !1);
}
return _r_(t);
},
isNoticesDisabled:function() {
return _i_("3dab:fb141a1e"), _r_(!!(B && B.env && B.env.disableNotices));
},
setCookieOnClose:function() {
return _i_("3dab:2c29d5af"), booking.env.b_paid_traffic || e.cookie("gcmdt", new Date().getTime(), {
expires:30,
path:"/",
domain:booking.env.b_domain_end
}), _r_();
}
}), _r_();
}(), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:aa261be8"), booking.env.touch_os = "ontouchstart" in document.documentElement ? !0 :!1, /(chrome)[ \/]([\w.]+)/.exec(navigator.userAgent.toLowerCase()) && (booking.env.touch_os = !1), _r_();
}), B.define("growl", function(e, t, i) {
"use strict";
_i_("3dab:2f890c23");
function n(e) {
if (_i_("3dab:65b2938f"), e && booking.env.growl_triggers && booking.env.growl_triggers[e]) return _r_($.noticeAdd(booking.env.growl_triggers[e]));
_r_();
}
i.exports = {
show:$.noticeAdd,
trigger:n
}, _r_();
}), function(e) {
_i_("3dab:ee21a99d"), e.fn.placeholder = function(t) {
_i_("3dab:9a8b71fe");
var i = e.extend({
attr:"placeholder",
emptyClass:"empty"
}, t);
if ("placeholder" === i.attr && "placeholder" in document.createElement("input")) return _r_(this);
return _r_(this.each(function() {
_i_("3dab:64df5f6f");
var t, n = e(this), r = n.attr(i.attr), a = "password" === n.attr("type"), o = "placeholder-polyfill";
if (!r || n.hasClass(o)) return _r_();
n.addClass(o), a && (t = e('<input type="text" />').attr({
value:r,
className:n[0].className
}).insertAfter(n.hide())), n.closest("form").submit(function() {
_i_("3dab:2c3964eb"), n.trigger("focus"), _r_();
}), "" === n.val() && n.val(r).addClass(i.emptyClass), n.focus(function() {
_i_("3dab:4650d91b"), n.val() == r && n.val("").removeClass(i.emptyClass), _r_();
}), n.blur(function() {
if (_i_("3dab:2319735d"), "" !== e.trim(this.value)) return _r_();
a ? n.after(t).hide() :n.val(r).addClass(i.emptyClass), _r_();
}), a && t.addClass(i.emptyClass).focus(function() {
_i_("3dab:65b5ddd1"), t.detach(), n.show().focus(), _r_();
}), _r_();
}));
}, _r_();
}(jQuery), function(e) {
"use strict";
_i_("3dab:2bb30cfe"), e([ "jquery" ], function(e) {
_i_("3dab:edce74bb");
var t = e.scrollTo = function(t, i, n) {
return _i_("3dab:ced1bcc4"), _r_(e(window).scrollTo(t, i, n));
};
t.defaults = {
axis:"xy",
duration:0,
limit:!0
}, t.window = function(t) {
return _i_("3dab:636fb2f8"), _r_(e(window)._scrollable());
}, e.fn._scrollable = function() {
return _i_("3dab:e76311d3"), _r_(this.map(function() {
_i_("3dab:6735f976");
var t = this, i = !t.nodeName || -1 != e.inArray(t.nodeName.toLowerCase(), [ "iframe", "#document", "html", "body" ]);
if (!i) return _r_(t);
var n = (t.contentWindow || t).document || t.ownerDocument || t;
return _r_(/webkit/i.test(navigator.userAgent) || "BackCompat" == n.compatMode ? n.body :n.documentElement);
}));
}, e.fn.scrollTo = function(n, r, a) {
return _i_("3dab:394fef72"), "object" == typeof r && (a = r, r = 0), "function" == typeof a && (a = {
onAfter:a
}), "max" == n && (n = 9e9), a = e.extend({}, t.defaults, a), r = r || a.duration, a.queue = a.queue && a.axis.length > 1, a.queue && (r /= 2), a.offset = i(a.offset), a.over = i(a.over), _r_(this._scrollable().each(function() {
if (_i_("3dab:021b5f24"), null == n) return _r_();
var o, _ = this, s = e(_), d = n, c = {}, l = s.is("html,body");
switch (typeof d) {
case "number":
case "string":
if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(d)) {
d = i(d);
break;
}
if (d = l ? e(d) :e(d, this), !d.length) return _r_();

case "object":
(d.is || d.style) && (o = (d = e(d)).offset());
}
var u = e.isFunction(a.offset) && a.offset(_, d) || a.offset;
e.each(a.axis.split(""), function(e, i) {
_i_("3dab:36814032");
var n = "x" == i ? "Left" :"Top", r = n.toLowerCase(), h = "scroll" + n, b = _[h], p = t.max(_, i);
if (o) c[h] = o[r] + (l ? 0 :b - s.offset()[r]), a.margin && (c[h] -= parseInt(d.css("margin" + n)) || 0, c[h] -= parseInt(d.css("border" + n + "Width")) || 0), c[h] += u[r] || 0, a.over[r] && (c[h] += d["x" == i ? "width" :"height"]() * a.over[r]); else {
var g = d[r];
c[h] = g.slice && "%" == g.slice(-1) ? parseFloat(g) / 100 * p :g;
}
a.limit && /^\d+$/.test(c[h]) && (c[h] = c[h] <= 0 ? 0 :Math.min(c[h], p)), !e && a.queue && (b != c[h] && f(a.onAfterFirst), delete c[h]), _r_();
}), f(a.onAfter);
function f(e) {
_i_("3dab:edb1adc1"), s.animate(c, r, a.easing, e && function() {
_i_("3dab:fbc2bf04"), e.call(this, d, a), _r_();
}), _r_();
}
_r_();
}).end());
}, t.max = function(t, i) {
_i_("3dab:dc720258");
var n = "x" == i ? "Width" :"Height", r = "scroll" + n;
if (!e(t).is("html,body")) return _r_(t[r] - e(t)[n.toLowerCase()]());
var a = "client" + n, o = t.ownerDocument.documentElement, _ = t.ownerDocument.body;
return _r_(Math.max(o[r], _[r]) - Math.min(o[a], _[a]));
};
function i(t) {
return _i_("3dab:8b1e2503"), _r_(e.isFunction(t) || e.isPlainObject(t) ? t :{
top:t,
left:t
});
}
return _r_(t);
}), _r_();
}("function" == typeof define && define.amd ? define :function(e, t) {
_i_("3dab:d4437642"), "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) :t(jQuery), _r_();
}), function() {
_i_("3dab:23c1b560");
var e = {
priority:9,
opening_state:0,
cur_open:"",
max_select_height:240,
is_ie:0,
openSlow:!1,
init:function() {
_i_("3dab:b761cccd");
var e = this, t = $(".aff_languages_popover"), i = $(".aff_currency_popover");
$(".b_msie_6").length && (this.is_ie = 6), $(".b_msie_7").length && (this.is_ie = 7), $(".aff_select_box").mouseenter(function() {
_i_("3dab:ad4097dc"), $(this).addClass("sel_hover"), _r_();
}), $(".aff_select_box").mouseleave(function() {
_i_("3dab:24384145"), $(this).removeClass("sel_hover"), _r_();
}), $("body").click(function(t) {
if (_i_("3dab:65470668"), 2 == e.opening_state) {
var i = $(t.target);
$(i).length && e.closeSelect();
}
_r_();
}), t.css({
width:e.getPopoverWidth($(".aff_language_flags")) + "px"
}), i.css({
width:e.getPopoverWidth($("#currency_dropdown_all .currency_list")) + "px"
}), $(".aff_select_box[data-target]").click(function(t) {
_i_("3dab:59b1f0b7"), 0 == e.opening_state ? e.openSelect($(this).attr("data-target"), $(this).attr("data-parentclass")) :e.cur_open != $(this).attr("data-target") ? e.closeSelect($(this).attr("data-target"), $(this).attr("data-parentclass")) :e.closeSelect(), _r_();
}), _r_();
},
openSelect:function(e, t) {
_i_("3dab:d49621f9"), oThat = this, this.cur_open = e;
var i = $("." + t), n = 0, r = 0, a = 0, o = 0, _ = 0, s = 0, d = 0, c = 0, l = 0, u = 0, f = 0, h = 0, b = 0, p = 0, g = 0, m = 0, v = 0, y = 0, w = i.parent(), k = $("." + e), B = oThat.getScreenSize()[0], M = (oThat.getScreenSize()[1], parseInt(w.width() / 2, 10)), x = $("#partner_branding3"), C = $(".hybrid-header #aff_personal_form"), E = $($(".uc_top_arrow", k)), T = parseInt(k.outerWidth(!0) / 2, 10), S = T - M, A = T - 8, N = oThat.getLeftPos(C)[0], D = oThat.getLeftPos(C)[1], I = oThat.getRightPos(C)[0], j = oThat.getRightPos(C)[1], o = parseInt(C.css("marginLeft"), 10), _ = parseInt(C.css("marginRight"), 10), O = parseInt(w.offset().left, 10) - parseInt(x.offset().left, 10), L = parseInt(x.width(), 10), P = L - (T + M + O), H = O + M - T, R = $(".language_select_button"), F = $(".currency_select_button"), q = $(".affiliate_mybooking"), U = parseInt(F.outerWidth(), 10), J = parseInt(U / 2, 10), G = parseInt(R.outerWidth(), 10), V = parseInt(G / 2, 10), W = parseInt(q.outerWidth(), 10), z = parseInt(F.css("marginLeft"), 10), Y = parseInt(F.css("marginRight"), 10), K = parseInt(R.css("marginLeft"), 10), X = parseInt(R.css("marginRight"), 10), Q = parseInt(F.css("paddingLeft"), 10), Z = parseInt(F.css("paddingRight"), 10), ee = parseInt(R.css("paddingLeft"), 10), te = parseInt(R.css("paddingRight"), 10), ie = parseInt(q.css("marginLeft"), 10), ne = parseInt(q.css("marginRight"), 10), re = parseInt(q.css("paddingLeft"), 10), ae = parseInt(q.css("paddingRight"), 10), oe = oThat.getHeight($(".aff_select_box"));
$(".aff_select_wrap").hasClass("currency_select_button") && ((z > 0 || Y > 0) && (d = z + Y), (Q > 0 || Z > 0) && (l = Q + Z, u = Q / 2 + Z / 2), btnClear = oThat.getClearCSS(F), r = U + d), $(".aff_select_wrap").hasClass("language_select_button") && ((K > 0 || X > 0) && (s = K + X), (ee > 0 || te > 0) && (f = ee + te, h = ee / 2 + te / 2), btnClear = oThat.getClearCSS(R), a = G + s), $(".aff_select_wrap").hasClass("affiliate_mybooking") && ((ie > 0 || ne > 0) && (c = ie + ne), (re > 0 || ae > 0) && (b = re + ae), btnClear = oThat.getClearCSS(q), n = W + c);
var _e = oThat.getDistanceBetweenCenterElements(x, C);
(1625 >= B && _e >= -285 || B > 1626 && _e >= -410 || 0 > _e && _e >= -150) && (v = 1), (1625 >= B && 285 >= _e || B > 1626 && 410 >= _e || _e > 0 && 150 >= _e) && (y = 1), oThat.isrtlLang() ? N && 0 == v ? (k.hasClass("aff_currency_popover") ? (p = n + a + d + l, m = D + o + n + a + u + J - 6) :k.hasClass("aff_languages_popover") && (p = n + s + f, m = D + o + n + h + V - 6), p >= 0 && (g = p + D + o), k.css({
left:(g > 0 ? "-" :"") + g + "px",
right:"auto",
top:oe + "px"
}), E.css({
left:m
})) :I && 0 == y ? (k.hasClass("aff_currency_popover") ? (p = j, m = k.width() - j - _ + u - J - 6) :k.hasClass("aff_languages_popover") && (p = j + r, m = k.width() - j - _ + h - r - V - 6), p >= 0 && (g = p + _), k.css({
left:"auto",
right:(g > 0 ? "-" :"") + g + "px",
top:oe + "px"
}), E.css({
left:m
})) :(v || y) && (0 > P && H > 0 ? (S -= P, A -= P) :P > 0 && 0 > H && (S += H, A += H), k.css({
left:-Math.round(S),
top:oe + "px"
}), $(".aff_user_popover .uc_top_arrow", w).css("left", A)) :N && 0 == v ? (k.hasClass("aff_currency_popover") ? (p = D, m = D + o + J - u - 6) :k.hasClass("aff_languages_popover") && (p = D + d + U, m = D + o + r + V - h - 6), p >= 0 && (g = p + o), k.css({
left:(g > 0 ? "-" :"") + g + "px",
right:"auto",
top:oe + "px"
}), E.css({
left:m
})) :I && 0 == y ? (k.hasClass("aff_currency_popover") ? (p = j + (btnClear ? 0 :n) + (btnClear ? 0 :a) + d + l, m = k.width() - j - _ - (btnClear ? 0 :n) - (btnClear ? 0 :a) - d - u - J - 6) :k.hasClass("aff_languages_popover") && (p = j + (btnClear ? 0 :n) + s + f, m = k.width() - j - _ - (btnClear ? 0 :n) - s - h - V - 9), p >= 0 && (g = p + _), k.css({
left:"auto",
right:(g > 0 ? "-" :"") + g + "px",
top:oe + "px"
}), E.css({
left:m
})) :(v || y) && (0 > P && H > 0 ? (S -= P, A -= P) :P > 0 && 0 > H && (S += H, A += H), k.css({
left:-Math.round(S),
top:oe + "px"
}), $(".aff_user_popover .uc_top_arrow", w).css("left", A)), $("." + t).addClass("sel_open"), this.opening_state = 1, k.css({
display:"block",
opacity:"1"
}), this.openSlow ? (this.openSlow = !1, k.animate({
height:iNewHeight + "px"
}, 800)) :k.css({
height:"auto"
}), setTimeout(function() {
_i_("3dab:c5c47e39"), oThat.opening_state = 2, _r_();
}, 200), _r_();
},
getScreenSize:function() {
_i_("3dab:a4140a68");
var e = parseInt($("#partner_branding3").width(), 10);
return screenHW = e / 2, restCal = screenHW - 150, 1625 >= e ? restCal = screenHW - 285 :e > 1626 && (restCal = screenHW - 410), _r_([ e, restCal ]);
},
getHeight:function(e) {
_i_("3dab:33f5a3e2");
var t = parseInt(e.height(), 10);
return _r_(t);
},
getClearCSS:function(e) {
if (_i_("3dab:77498c62"), "both" == $(e).css("clear")) return _r_(!0);
return _r_(!1);
},
getLeftPos:function(e) {
_i_("3dab:49cee092");
var t = parseInt(e.css("left"), 10);
if (t >= 0 && 405 > t) return _r_([ !0, t ]);
return _r_([ !1, t ]);
},
getRightPos:function(e) {
_i_("3dab:b72c43e4");
var t = parseInt(e.css("right"), 10);
if (t >= 0 && 405 > t) return _r_([ !0, t ]);
return _r_([ !1, t ]);
},
isrtlLang:function() {
if (_i_("3dab:01b6f336"), $("body").hasClass("lang_is_rtl")) return _r_(!0);
return _r_(!1);
},
getPopoverWidth:function(e) {
_i_("3dab:ee377fb0");
var t = e.length;
switch (t) {
case 4:
columns = 802;
break;

case 3:
columns = 602;
break;

case 2:
columns = 402;
break;

default:
columns = 202;
}
return _r_(columns);
},
getDistanceBetweenCenterElements:function(e, t) {
_i_("3dab:cd7704d6");
var i = e.width(), n = t.width(), r = e.offset().left, a = t.offset().left, o = parseInt(r) + parseInt(i) / 2, _ = parseInt(a) + parseInt(n) / 2;
return _r_(_ - o);
},
closeSelect:function(e, t) {
_i_("3dab:2fe5c050");
var i = this;
2 == this.opening_state && ($(".aff_user_popover").animate({
height:"0px"
}, 200, function() {
_i_("3dab:36e0616f"), $(".aff_user_popover").css({
display:"none"
}), $(".aff_select_box").removeClass("sel_open"), e && null != e && i.openSelect(e, t), _r_();
}), this.opening_state = 0), _r_();
}
};
B.when({
events:"ready"
}).run(function(t) {
_i_("3dab:7282c405"), e.init(), _r_();
}), _r_();
}(), B.authLightbox = {
init:function() {
_i_("3dab:736bfcd6");
var e = this;
if (e.ready) return _r_();
B.eventEmitter.bind("user_access_menu_login_tab user_access_menu_register_tab", function(t, i) {
_i_("3dab:0f814323"), i = i || {};
var n = "user_access_menu_login_tab" === t.type;
if (e.form(i.mode).toggleClass("user-access-menu-lightbox--signin", n).toggleClass("user-access-menu-lightbox--signup", !n), "www" === B.env.b_site_type) {
var r = e.form(i.mode), a = r.find(".user_menu_active_tab").text().trim();
a && r.closest(".modal-wrapper").attr("aria-label", a);
}
if (!booking.env.b_is_tdot_traffic) if (B.env.b_run_prefill_login_email) e.form(i.mode).find(".user_access_password, .user_signup_password").select(); else {
var o = ".user_access_email";
"www" === B.env.b_site_type && (o += ":visible"), e.form(i.mode).find(o).select().focus();
}
_r_();
}), e.ready = !0, _r_();
},
show:function(e) {
_i_("3dab:bc9d67a4");
var t = !!(e && e.event && e.event.originalEvent);
if (B.env.b_auth_lightbox_send_opening && t && [ "header_ap", "header_m_ap", "header_t_ap", "header_prompt_ap", "header_prompt_t_ap", "bp_inline", "deals_index" ].indexOf(e.btn) >= 0) {
var i, n = 1e3, r = function() {
if (_i_("3dab:e3427d44"), e.redirect_uri) {
var t = e.redirect_uri;
if ("searchresults" === B.env.b_action) {
var i = "signup" === e.tab ? "signup" :"login", n = document.getElementById("header_login_link_" + i);
n && n.value && (t = n.value);
}
location.href = t;
}
_r_();
};
if (B.authLightbox.alreadyClicked) setTimeout(r, n); else {
B.authLightbox.alreadyClicked = !0;
var a = $.ajax({
url:"/login_lightbox",
method:"POST",
data:{
btn:e.btn,
signup_tab:"signup" === e.tab ? 1 :0,
csrf_token:B.env.b_csrf_token,
action:B.env.b_action
},
complete:function() {
_i_("3dab:c4182929"), clearTimeout(i), r(), _r_();
}
});
i = setTimeout(function() {
_i_("3dab:33d25a80"), a.abort(), _r_();
}, n);
}
if (e.redirect_uri) return _r_();
}
var o = this.form(e.mode);
if (!o.length) return _r_();
this.rewrite(e);
var _ = "user-access-menu-lightbox";
e.extraClass && (_ += " " + e.extraClass), $("#ng-overlay").hide(), $(".milk_menu").hide(), $(".b_recentlyviewed").length && $(".b_recentlyviewed").removeClass("rv-content-visible"), $(".user_center_popover").hide(), B.lightbox.hide(), $(".js-user-access-menu-lightbox--embedded").hide();
var s = booking.env.b_is_tdot_traffic && booking.et.track("fTJXNCSLFJZZVCBOPQORHe");
B.lightbox.show(o, {
bAnimation:!booking.env.b_is_tdot_traffic,
customWrapperClassName:_,
addDialogStartEndText:!0,
trapFocus:s ? !0 :void 0,
hideCallBack:function() {
_i_("3dab:4dd09787"), o.find(".form-loading").hide(), $(".js-user-access-menu-lightbox--embedded").show(), $(".user_access_form input[name=btn], .user_access_form input[name=urlarg]").remove(), B.eventEmitter.trigger("auth-dialog:hide", e), _r_();
}
}), this.initManageBooking(o, e), this.initSSO(o, e), e.targetSignin || e.targetSignup || this.updateTargetUrl(o), o.find("[data-target=user_access_" + e.tab + "_menu]").trigger("click", e), "manage_booking" === e.tab && this.showBNPForm(o), this.didLightboxShow(e), e && e.btn ? $('<input name="btn" type="hidden" class="track_login_btn" />').appendTo(".user_access_form").val(e.btn) :$(".user_access_form .track_login_btn[name=btn]").remove(), o.find(".social-connect-button").each(function(t, i) {
_i_("3dab:31e638b6");
var n = i.href;
if (!n) return _r_();
n = n.replace(new RegExp(B.env.b_query_params_delimiter + "btn=\\w*"), ""), e && e.btn && (n.charAt(n.length - 1) !== B.env.b_query_params_delimiter && (n += B.env.b_query_params_delimiter), n += "btn=" + e.btn), i.href = n, _r_();
}), "book" === B.env.b_action && 2 === B.env.b_book_stage && (e && "header" === e.btn ? $(".user_access_form input[name=login_from]").val("bs2_header") :$(".user_access_form input[name=login_from]").val("bs2")), e && e.urlarg ? $('<input name="urlarg" type="hidden" class="track_login_urlarg" />').appendTo(".user_access_form").val(e.urlarg) :$(".user_access_form .track_login_urlarg[name=urlarg]").remove(), _r_();
},
hide:function() {
_i_("3dab:a25a1fbe"), B.lightbox.hide(), _r_();
},
form:function(e) {
return _i_("3dab:d767ed20"), e = e ? "--" + e :"", _r_($(".js-user-access-menu-lightbox" + e));
},
rewrite:function(e) {
_i_("3dab:fce77b61");
var t = this, i = t.form(e.mode);
$.each(t.rewrites, function(n, r) {
_i_("3dab:6d5f1392");
var a = t.defaults[n];
a || (t.defaults[n] = a = r.call(t, i)), r.call(t, i, n in e ? e[n] :a), _r_();
}), _r_();
},
defaults:{},
rewrites:{
titleSignin:function(e, t) {
_i_("3dab:d0b6eb4e");
var i = e.find(".js-user-access-menu-lightbox__title--signin");
return _r_(void 0 !== t ? i.text(t) :i.text());
},
titleSignup:function(e, t) {
_i_("3dab:3f7fe549");
var i = e.find(".js-user-access-menu-lightbox__title--signup");
return _r_(void 0 !== t ? i.text(t) :i.text());
},
targetSignin:function(e, t) {
_i_("3dab:31075a2f");
var i = e.find(".user_access_signin_menu input[name=target_url]");
return _r_(void 0 !== t ? i.val(t) :i.val());
},
targetSignup:function(e, t) {
_i_("3dab:a989d85a");
var i = e.find(".user_access_signup_menu input[name=target_url]");
return _r_(void 0 !== t ? i.val(t) :i.val());
},
_fbFinalUrl:function(e, t) {
if (_i_("3dab:9a8400f2"), t) {
var i = e.attr("href");
if (i) {
var n = "final_url=" + encodeURIComponent(t);
i.indexOf("final_url=") > 0 ? i = i.replace(/final_url=[^&;]*/, n) :(i.charAt(i.length - 1) !== B.env.b_query_params_delimiter && (i += B.env.b_query_params_delimiter), i += n), e.attr("href", i);
}
}
_r_();
},
fbFinalUrlSignin:function(e, t) {
_i_("3dab:42d89a68");
var i = e.find(".user_access_signin_menu .social-connect-button--facebook");
return _r_(this.rewrites._fbFinalUrl(i, t));
},
fbFinalUrlSignup:function(e, t) {
_i_("3dab:17b9e916");
var i = e.find(".user_access_signup_menu .social-connect-button--facebook");
return _r_(this.rewrites._fbFinalUrl(i, t));
}
},
showBNPForm:function(e) {
if (_i_("3dab:853ea108"), B && B.env && B.env.b_partner_id && 440875 == B.env.b_partner_id) return window.location.href = (B.env.b_secure_domain || B.env.b_domain_for_book) + "/myreservations.html?aid=" + B.env.b_aid, _r_();
e.find(".form-section").addClass("form-hidden-section"), e.find(".user_access_resend_confirmation").removeClass("form-hidden-section"), e.find(".user_access_manage_booking_menu").removeClass("form-hidden-section"), e.find(".resend-conf").addClass("resend-conf--absolute"), "www" === B.env.b_site_type && $(".user_access_form input:visible").first().focus(), _r_();
},
initManageBooking:function(e, t) {
_i_("3dab:b51b88e8");
var i = e.find(".user_access_menu"), n = this;
i.unbind(".init-manage-booking"), i.delegate(".js-booking-nr-pin-link", "click.init-manage-booking", function() {
_i_("3dab:7a4f39ff"), n.showBNPForm(e), _r_();
}), i.delegate(".js-resend-conf__signin-link", "click.init-manage-booking", function() {
_i_("3dab:3a3e0cc4");
var i = "manage_booking" == t.tab ? "signin" :t.tab;
e.find("[data-target=user_access_" + i + "_menu]").trigger("click", t), _r_();
}), _r_();
},
initSSO:function(e) {
_i_("3dab:0b9ebed8");
var t = e.find(".js-sso-link");
t.on("click", function(e) {
return _i_("3dab:43096d28"), window.location = t.data("sso-url"), e.preventDefault(), _r_(!1);
}), _r_();
},
didLightboxShow:function(e) {
_i_("3dab:a569e54d");
var t = B.require("events");
t.trigger("auth-dialog:show", e), B.eventEmitter.trigger("auth-dialog:show", e), _r_();
},
updateTargetUrl:function(e) {
_i_("3dab:c4395dc3"), $("[name=target_url]", e).each(function(e, t) {
_i_("3dab:43fbc88c"), $(t).data("set-to-href") && (t.value = location.href), _r_();
}), _r_();
}
}, function() {
_i_("3dab:d0b76f49");
function e() {
_i_("3dab:e1c39f8a");
var e = $(".js-user-access-menu-lightbox--embedded"), t = B.authLightbox;
t.init(), t.initManageBooking(e, {
tab:"signin"
}), t.didLightboxShow({
tab:"signin",
mode:"embedded"
}), _r_();
}
function t() {
_i_("3dab:15a42473"), B.command && B.command("show-auth-lightbox").run({
tab:B.env.show_auth_lightbox,
extraClass:"user-access-menu-lightbox--user-center"
}), _r_();
}
var i = B.env.async_signin;
B.env.fe_m_async_login && i && i.init_cbs ? (i.init_cbs.push(e), B.env.show_auth_lightbox && i.init_cbs.push(t)) :(B.when({
condition:$(".js-user-access-menu-lightbox--embedded").length
}).run(e), B.when({
condition:B.env.show_auth_lightbox,
action:"index",
events:"ready"
}).run(t)), _r_();
}(), B.define("events", function(e, t, i) {
_i_("3dab:20ba3b3d");
var n = e("event-emitter"), r = new n();
return r.Emitter = n, _r_(r);
}), B.define("redux", function(e, t, i) {
_i_("3dab:f7758ddb1"), function(e, n) {
_i_("3dab:cdacee321"), "object" == typeof t && "object" == typeof i ? i.exports = n() :"function" == typeof define && define.amd ? define([], n) :"object" == typeof t ? t.Redux = n() :e.Redux = n(), _r_();
}(this, function() {
return _i_("3dab:98a9b0ae1"), _r_(function(e) {
_i_("3dab:efd781f91");
var t = {};
function i(n) {
if (_i_("3dab:df0bf25d1"), t[n]) return _r_(t[n].exports);
var r = t[n] = {
exports:{},
id:n,
loaded:!1
};
return e[n].call(r.exports, r, r.exports, i), r.loaded = !0, _r_(r.exports);
}
return i.m = e, i.c = t, i.p = "", _r_(i(0));
}([ function(e, t, i) {
"use strict";
_i_("3dab:b154c0e91"), t.__esModule = !0, t.compose = t.applyMiddleware = t.bindActionCreators = t.combineReducers = t.createStore = void 0;
var n = i(2), r = h(n), a = i(7), o = h(a), _ = i(6), s = h(_), d = i(5), c = h(d), l = i(1), u = h(l), f = i(3);
h(f);
function h(e) {
return _i_("3dab:5b60c3574"), _r_(e && e.__esModule ? e :{
"default":e
});
}
t.createStore = r["default"], t.combineReducers = o["default"], t.bindActionCreators = s["default"], t.applyMiddleware = c["default"], t.compose = u["default"], _r_();
}, function(e, t) {
"use strict";
_i_("3dab:4a4789e71"), t.__esModule = !0, t["default"] = i;
function i() {
_i_("3dab:0cc6f2081");
for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
if (0 === t.length) return _r_(function(e) {
return _i_("3dab:0e026f321"), _r_(e);
});
var n = function() {
_i_("3dab:d03ba7231");
var e = t[t.length - 1], i = t.slice(0, -1);
return _r_({
v:function() {
return _i_("3dab:78214a931"), _r_(i.reduceRight(function(e, t) {
return _i_("3dab:43a87ba71"), _r_(t(e));
}, e.apply(void 0, arguments)));
}
});
}();
if ("object" == typeof n) return _r_(n.v);
_r_();
}
_r_();
}, function(e, t, i) {
"use strict";
_i_("3dab:2b4020081"), t.__esModule = !0, t.ActionTypes = void 0, t["default"] = d;
var n = i(4), r = _(n), a = i(11), o = _(a);
function _(e) {
return _i_("3dab:5b60c3575"), _r_(e && e.__esModule ? e :{
"default":e
});
}
var s = t.ActionTypes = {
INIT:"@@redux/INIT"
};
function d(e, t, i) {
_i_("3dab:e847f5c61");
var n;
if ("function" == typeof t && "undefined" == typeof i && (i = t, t = void 0), "undefined" != typeof i) {
if ("function" != typeof i) throw new Error("Expected the enhancer to be a function.");
return _r_(i(d)(e, t));
}
if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
var a = e, _ = t, c = [], l = c, u = !1;
function f() {
_i_("3dab:47a919c71"), l === c && (l = c.slice()), _r_();
}
function h() {
return _i_("3dab:401ca8b91"), _r_(_);
}
function b(e) {
if (_i_("3dab:948954ff1"), "function" != typeof e) throw new Error("Expected listener to be a function.");
var t = !0;
return f(), l.push(e), _r_(function() {
if (_i_("3dab:2b1c18181"), !t) return _r_();
t = !1, f();
var i = l.indexOf(e);
l.splice(i, 1), _r_();
});
}
function p(e) {
if (_i_("3dab:ebb319831"), !(0, r["default"])(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
if ("undefined" == typeof e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
if (u) throw new Error("Reducers may not dispatch actions.");
try {
u = !0, _ = a(_, e);
} finally {
u = !1;
}
for (var t = c = l, i = 0; i < t.length; i++) t[i]();
return _r_(e);
}
function g(e) {
if (_i_("3dab:45410f1f1"), "function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
a = e, p({
type:s.INIT
}), _r_();
}
function m() {
_i_("3dab:1082d68b1");
var e, t = b;
return _r_((e = {
subscribe:function(e) {
if (_i_("3dab:c6b060531"), "object" != typeof e) throw new TypeError("Expected the observer to be an object.");
function i() {
_i_("3dab:86256af81"), e.next && e.next(h()), _r_();
}
i();
var n = t(i);
return _r_({
unsubscribe:n
});
}
}, e[o["default"]] = function() {
return _i_("3dab:08888aa11"), _r_(this);
}, e));
}
return p({
type:s.INIT
}), _r_((n = {
dispatch:p,
subscribe:b,
getState:h,
replaceReducer:g
}, n[o["default"]] = m, n));
}
_r_();
}, function(e, t) {
"use strict";
_i_("3dab:28d57c081"), t.__esModule = !0, t["default"] = i;
function i(e) {
_i_("3dab:f2a023611"), "undefined" != typeof console && "function" == typeof console.error && console.error(e);
try {
throw new Error(e);
} catch (t) {}
_r_();
}
_r_();
}, function(e, t, i) {
_i_("3dab:6b29ad301");
var n = i(8), r = i(9), a = i(10), o = "[object Object]", _ = Object.prototype, s = Function.prototype.toString, d = _.hasOwnProperty, c = s.call(Object), l = _.toString;
function u(e) {
if (_i_("3dab:446a64bb1"), !a(e) || l.call(e) != o || r(e)) return _r_(!1);
var t = n(e);
if (null === t) return _r_(!0);
var i = d.call(t, "constructor") && t.constructor;
return _r_("function" == typeof i && i instanceof i && s.call(i) == c);
}
e.exports = u, _r_();
}, function(e, t, i) {
"use strict";
_i_("3dab:d98172e01"), t.__esModule = !0;
var n = Object.assign || function(e) {
_i_("3dab:e889572d1");
for (var t = 1; t < arguments.length; t++) {
var i = arguments[t];
for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
}
return _r_(e);
};
t["default"] = _;
var r = i(1), a = o(r);
function o(e) {
return _i_("3dab:5b60c3576"), _r_(e && e.__esModule ? e :{
"default":e
});
}
function _() {
_i_("3dab:6f3d7eac1");
for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
return _r_(function(e) {
return _i_("3dab:060553491"), _r_(function(i, r, o) {
_i_("3dab:e561fb031");
var _ = e(i, r, o), s = _.dispatch, d = [], c = {
getState:_.getState,
dispatch:function(e) {
return _i_("3dab:0fe5411b1"), _r_(s(e));
}
};
return d = t.map(function(e) {
return _i_("3dab:0e53476f1"), _r_(e(c));
}), s = a["default"].apply(void 0, d)(_.dispatch), _r_(n({}, _, {
dispatch:s
}));
});
});
}
_r_();
}, function(e, t) {
"use strict";
_i_("3dab:9b51b09e1"), t.__esModule = !0, t["default"] = n;
function i(e, t) {
return _i_("3dab:1f384beb1"), _r_(function() {
return _i_("3dab:aa71ca8f1"), _r_(t(e.apply(void 0, arguments)));
});
}
function n(e, t) {
if (_i_("3dab:91a20bc41"), "function" == typeof e) return _r_(i(e, t));
if ("object" != typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" :typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
for (var n = Object.keys(e), r = {}, a = 0; a < n.length; a++) {
var o = n[a], _ = e[o];
"function" == typeof _ && (r[o] = i(_, t));
}
return _r_(r);
}
_r_();
}, function(e, t, i) {
"use strict";
_i_("3dab:85f873a81"), t.__esModule = !0, t["default"] = u;
var n = i(2), r = i(4), a = s(r), o = i(3), _ = s(o);
function s(e) {
return _i_("3dab:5b60c3577"), _r_(e && e.__esModule ? e :{
"default":e
});
}
function d(e, t) {
_i_("3dab:cff602e11");
var i = t && t.type, n = i && '"' + i.toString() + '"' || "an action";
return _r_("Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.');
}
function c(e, t, i) {
_i_("3dab:f2a73eb01");
var r = Object.keys(t), o = i && i.type === n.ActionTypes.INIT ? "initialState argument passed to createStore" :"previous state received by the reducer";
if (0 === r.length) return _r_("Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.");
if (!(0, a["default"])(e)) return _r_("The " + o + ' has unexpected type of "' + {}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + r.join('", "') + '"'));
var _ = Object.keys(e).filter(function(e) {
return _i_("3dab:34903b2b1"), _r_(!t.hasOwnProperty(e));
});
if (_.length > 0) return _r_("Unexpected " + (_.length > 1 ? "keys" :"key") + " " + ('"' + _.join('", "') + '" found in ' + o + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + r.join('", "') + '". Unexpected keys will be ignored.'));
_r_();
}
function l(e) {
_i_("3dab:eb4939eb1"), Object.keys(e).forEach(function(t) {
_i_("3dab:3d5a65bf1");
var i = e[t], r = i(void 0, {
type:n.ActionTypes.INIT
});
if ("undefined" == typeof r) throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
var a = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
if ("undefined" == typeof i(void 0, {
type:a
})) throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + n.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.");
_r_();
}), _r_();
}
function u(e) {
_i_("3dab:e16c4d381");
for (var t = Object.keys(e), i = {}, n = 0; n < t.length; n++) {
var r = t[n];
"function" == typeof e[r] && (i[r] = e[r]);
}
var a, o = Object.keys(i);
try {
l(i);
} catch (s) {
a = s;
}
return _r_(function() {
_i_("3dab:3a86098d1");
var e = arguments.length <= 0 || void 0 === arguments[0] ? {} :arguments[0], t = arguments[1];
if (a) throw a;
var n = c(e, i, t);
n && (0, _["default"])(n);
for (var r = !1, s = {}, l = 0; l < o.length; l++) {
var u = o[l], f = i[u], h = e[u], b = f(h, t);
if ("undefined" == typeof b) {
var p = d(u, t);
throw new Error(p);
}
s[u] = b, r = r || b !== h;
}
return _r_(r ? s :e);
});
}
_r_();
}, function(e, t) {
_i_("3dab:0efa003b1");
var i = Object.getPrototypeOf;
function n(e) {
return _i_("3dab:62c745011"), _r_(i(Object(e)));
}
e.exports = n, _r_();
}, function(e, t) {
_i_("3dab:5ad08b031");
function i(e) {
_i_("3dab:57204afd1");
var t = !1;
if (null != e && "function" != typeof e.toString) try {
t = !!(e + "");
} catch (i) {}
return _r_(t);
}
e.exports = i, _r_();
}, function(e, t) {
_i_("3dab:2dd6413a1");
function i(e) {
return _i_("3dab:44c942111"), _r_(!!e && "object" == typeof e);
}
e.exports = i, _r_();
}, function(e, t, i) {
_i_("3dab:340049b51"), function(t) {
"use strict";
_i_("3dab:54146ae91"), e.exports = i(12)(t || window || this), _r_();
}.call(t, function() {
return _i_("3dab:693c131b1"), _r_(this);
}()), _r_();
}, function(e, t) {
"use strict";
_i_("3dab:d83896211"), e.exports = function(e) {
_i_("3dab:16dfda091");
var t, i = e.Symbol;
return "function" == typeof i ? i.observable ? t = i.observable :(t = "function" == typeof i["for"] ? i["for"]("observable") :i("observable"), i.observable = t) :t = "@@observable", _r_(t);
}, _r_();
} ]));
}), _r_();
}), B.define("morphdom", function(e, t, i) {
_i_("3dab:40e7d1ea"), function(e) {
if (_i_("3dab:ab944764"), "object" == typeof t && "undefined" != typeof i) i.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
var n;
n = "undefined" != typeof window ? window :"undefined" != typeof global ? global :"undefined" != typeof self ? self :this, n.morphdom = e();
}
_r_();
}(function() {
_i_("3dab:97955ce2");
var e, t;
e = {
exports:t = {}
};
var i, n, r = "undefined" != typeof document ? document.body || document.createElement("div") :{}, a = "http://www.w3.org/1999/xhtml", o = 1, _ = 3, s = 8;
n = r.hasAttributeNS ? function(e, t, i) {
return _i_("3dab:eade7059"), _r_(e.hasAttributeNS(t, i));
} :r.hasAttribute ? function(e, t, i) {
return _i_("3dab:48b626c7"), _r_(e.hasAttribute(i));
} :function(e, t, i) {
return _i_("3dab:b1b897cf"), _r_(!!e.getAttributeNode(i));
};
function d(e) {
_i_("3dab:ace7a10f");
for (var t in e) if (e.hasOwnProperty(t)) return _r_(!1);
return _r_(!0);
}
function c(e) {
_i_("3dab:6e64c2c2"), !i && document.createRange && (i = document.createRange(), i.selectNode(document.body));
var t;
return i && i.createContextualFragment ? t = i.createContextualFragment(e) :(t = document.createElement("body"), t.innerHTML = e), _r_(t.childNodes[0]);
}
var l = {
OPTION:function(e, t) {
_i_("3dab:766a26cf"), e.selected = t.selected, e.selected ? e.setAttribute("selected", "") :e.removeAttribute("selected", ""), _r_();
},
INPUT:function(e, t) {
_i_("3dab:8ce9f1cf"), e.checked = t.checked, e.checked ? e.setAttribute("checked", "") :e.removeAttribute("checked"), e.value !== t.value && (e.value = t.value), n(t, null, "value") || e.removeAttribute("value"), e.disabled = t.disabled, e.disabled ? e.setAttribute("disabled", "") :e.removeAttribute("disabled"), _r_();
},
TEXTAREA:function(e, t) {
_i_("3dab:fafa0a75");
var i = t.value;
e.value !== i && (e.value = i), e.firstChild && e.firstChild.nodeValue !== i && (e.firstChild.nodeValue = i), _r_();
}
};
function u() {}
var f = function(e, t) {
return _i_("3dab:ee20f945"), _r_(e.nodeName === t.nodeName && e.namespaceURI === t.namespaceURI);
};
function h(e, t) {
return _i_("3dab:b9ab9e43"), _r_(t && t !== a ? document.createElementNS(t, e) :document.createElement(e));
}
function b(e, t) {
_i_("3dab:deb7b359");
var i, r, a, o, _, s, d = t.attributes;
for (i = d.length - 1; i >= 0; i--) r = d[i], a = r.name, _ = r.value, o = r.namespaceURI, o ? (a = r.localName || a, s = e.getAttributeNS(o, a)) :s = e.getAttribute(a), s !== _ && (o ? e.setAttributeNS(o, a, _) :e.setAttribute(a, _));
for (d = e.attributes, i = d.length - 1; i >= 0; i--) r = d[i], r.specified !== !1 && (a = r.name, o = r.namespaceURI, n(t, o, o ? a = r.localName || a :a) || e.removeAttributeNode(r));
_r_();
}
function p(e, t) {
_i_("3dab:6593b9e4");
for (var i = e.firstChild; i; ) {
var n = i.nextSibling;
t.appendChild(i), i = n;
}
return _r_(t);
}
function g(e) {
return _i_("3dab:dc0a4ac8"), _r_(e.id);
}
function m(e, t, i) {
if (_i_("3dab:af448acf"), i || (i = {}), "string" == typeof t) if ("#document" === e.nodeName || "HTML" === e.nodeName) {
var n = t;
t = document.createElement("html"), t.innerHTML = n;
} else t = c(t);
var r = {}, a = {}, m = i.getNodeKey || g, v = i.onBeforeNodeAdded || u, y = i.onNodeAdded || u, w = i.onBeforeElUpdated || u, k = i.onElUpdated || u, B = i.onBeforeNodeDiscarded || u, M = i.onNodeDiscarded || u, x = i.onBeforeElChildrenUpdated || u, C = i.childrenOnly === !0, E = [];
function T(e, t) {
_i_("3dab:17cb2e51");
var i = m(e);
if (i ? r[i] = e :t || M(e), e.nodeType === o) for (var n = e.firstChild; n; ) T(n, t || i), n = n.nextSibling;
_r_();
}
function S(e) {
if (_i_("3dab:5e13d614"), e.nodeType === o) for (var t = e.firstChild; t; ) m(t) || (M(t), S(t)), t = t.nextSibling;
_r_();
}
function A(e, t, i) {
if (_i_("3dab:f34545d8"), B(e) === !1) return _r_();
t.removeChild(e), i ? m(e) || (M(e), S(e)) :T(e), _r_();
}
function N(e, t, i, n) {
_i_("3dab:cb66c668");
var d = m(t);
if (d && delete r[d], !n) {
if (w(e, t) === !1) return _r_();
if (b(e, t), k(e), x(e, t) === !1) return _r_();
}
if ("TEXTAREA" !== e.nodeName) {
var c, u, h, p, g, B = t.firstChild, M = e.firstChild;
e:for (;B; ) {
for (h = B.nextSibling, c = m(B); M; ) {
var C = m(M);
if (u = M.nextSibling, !i && C && (g = a[C])) {
g.parentNode.replaceChild(M, g), N(M, g, i), M = u;
continue;
}
var T = M.nodeType;
if (T === B.nodeType) {
var S = !1;
if (T === o ? (f(M, B) && (C || c ? c === C && (S = !0) :S = !0), S && N(M, B, i)) :(T === _ || T == s) && (S = !0, M.nodeValue = B.nodeValue), S) {
B = h, M = u;
continue e;
}
}
A(M, e, i), M = u;
}
c && ((p = r[c]) ? (N(p, B, !0), B = p) :a[c] = B), v(B) !== !1 && (e.appendChild(B), y(B)), B.nodeType === o && (c || B.firstChild) && E.push(B), B = h, M = u;
}
for (;M; ) u = M.nextSibling, A(M, e, i), M = u;
}
var D = l[e.nodeName];
D && D(e, t), _r_();
}
var D = e, I = D.nodeType, j = t.nodeType;
if (!C) if (I === o) j === o ? f(e, t) || (M(e), D = p(e, h(t.nodeName, t.namespaceURI))) :D = t; else if (I === _ || I === s) {
if (j === I) return D.nodeValue = t.nodeValue, _r_(D);
D = t;
}
if (D === t) M(e); else {
N(D, t, !1, C);
var O = function(e) {
_i_("3dab:07e8f038");
for (var t = e.firstChild; t; ) {
var i = t.nextSibling, n = m(t);
if (n) {
var a = r[n];
if (a && f(t, a)) {
if (t.parentNode.replaceChild(a, t), N(a, t, !0), t = i, d(r)) return _r_(!1);
continue;
}
}
t.nodeType === o && O(t), t = i;
}
_r_();
};
if (!d(r)) e:for (;E.length; ) {
var $ = E;
E = [];
for (var L = 0; L < $.length; L++) if (O($[L]) === !1) break e;
}
for (var P in r) if (r.hasOwnProperty(P)) {
var H = r[P];
M(H), S(H);
}
}
return !C && D !== e && e.parentNode && e.parentNode.replaceChild(D, e), _r_(D);
}
return e.exports = m, _r_(e.exports);
}), _r_();
}), B.define("component/reactive", function(e, t, i) {
_i_("3dab:f0a681e3");
var n, r = e("morphdom"), a = e("component"), o = e("component/loader"), _ = e("event-map"), s = e("report-error"), d = B.env && B.env.is_fe_reactive_components_shout_error_on_broken_template, c = 0, l = 50;
function u(e) {
_i_("3dab:d12e6d1c"), !n && document.createRange && (n = document.createRange(), n.selectNode(document.body));
var t;
return n && n.createContextualFragment ? t = n.createContextualFragment(e) :(t = document.createElement("body"), t.innerHTML = e), _r_(t.childNodes);
}
function f(e) {
return _i_("3dab:df331070"), _r_(1 === u(e).length);
}
function h(e, t, i) {
_i_("3dab:0a9481aa");
var n, r = e.el;
if (t !== i && t !== r && (n = o.getComponent(t)) && n.render !== a.prototype.render) return n.render(), _r_(!1);
_r_();
}
function b(e, t, i) {
_i_("3dab:32fd1ba0");
var n, r, a, o, _, s = i ? i.attributes :t.attributes;
if (!s) return _r_();
for (n = 0, r = s.length; r > n; ++n) if (a = s[n], 0 === a.name.indexOf("on:")) {
_ = a.name.split(":")[1], o = a.value, t.addEventListener(_, e[o], !1);
var d = t.getAttribute(a.name);
d !== a.value && t.removeEventListener(_, e[d], !1);
}
_r_();
}
function p(e) {
return _i_("3dab:c394c36c"), _r_(e.nodeType === Node.ELEMENT_NODE);
}
function g(e, t) {
_i_("3dab:5b730617");
var i = function() {
return _i_("3dab:8d3439e9"), _r_(NodeFilter.FILTER_ACCEPT);
};
if (!p(t)) return _r_();
i.acceptNode = i;
var n = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, i, !1);
for (b(e, t); n.nextNode(); ) n.currentNode && n.currentNode.hasAttribute("data-component") && n.nextSibling(), b(e, n.currentNode);
_r_();
}
function m(e, t) {
_i_("3dab:77cf2403");
var i = e.getAttribute(jQuery.expando);
return i && t.setAttribute(jQuery.expando, i), _r_(!0);
}
function v(e) {
_i_("3dab:a21190e8");
var t = {
onBeforeElUpdated:function(t, i) {
_i_("3dab:2dd8152c"), b(e, t, i), _r_();
},
onBeforeElChildrenUpdated:function(t, i) {
return _i_("3dab:aeac559b"), _r_(h(e, t, i));
},
onBeforeNodeDiscarded:null,
onNodeAdded:function(t) {
_i_("3dab:0f4c88b2"), g(e, t), _r_();
}
};
return "msie" === B.env.b_browser && B.env.b_browser_version <= 8 && (t.onBeforeElUpdated = m), _r_(t);
}
function y(e) {
if (_i_("3dab:074605b6"), e.indexOf(" ") >= 0) throw new Error('component/reactive: invalid "' + e + '". Component name must not contain spaces');
return _r_(e);
}
function w(e) {
_i_("3dab:187091b6");
for (var t in e) "function" == typeof e[t] && (e[t] = e[t].bind(e));
_r_();
}
i.exports = a.extend({
init:function() {
_i_("3dab:57373640"), this.name = y(this.el.getAttribute("data-component")), this.renderOptions = v(this), w(this), this.initialize && this.initialize(), g(this, this.el), this.render(), _r_();
},
getState:function() {
throw _i_("3dab:292ddbaf"), new Error("getState() not implemented on component " + this.name);
},
events:function(e) {
_i_("3dab:a6e7bc31"), _(this.el, e, this), _r_();
},
render:function() {
if (_i_("3dab:b6a14e5f"), !this.template) return _r_();
if (++c > l) throw new Error(this.name + ": max render depth reached (" + l + "). Stuck in a loop?");
var e = B.jstmpl(this.template).render(this.getState()).trim();
d && !f(e) && s("Broken. Reactive components requires having one root node element in rendered template. Add a root element to the template.", "component/reactive"), r(this.el, e, this.renderOptions), o.loadComponents(this.$el), c = 0, "function" == typeof this.afterRender && this.afterRender(), _r_();
}
}), _r_();
}), B.define("report-error", function() {
_i_("3dab:c368b216");
function e(e) {
_i_("3dab:8ea0d968");
var t = {};
return _r_(e && "[object Function]" === t.toString.call(e));
}
function t(t, i) {
_i_("3dab:cc4fb343");
var n = B.env && B.env.b_dev_server, r = e(B.reportError) && B.reportError.bind(B), a = !r;
if (n || a) throw new Error(t);
r({
message:t
}, i), _r_();
}
return _r_(t);
}), B.define("event-map", function(e, t, i) {
_i_("3dab:89a520be");
var n = e("jquery");
i.exports = function(e, t, i) {
_i_("3dab:b05ebb5f");
var e = n(e);
for (var r in t) if (t.hasOwnProperty(r)) {
var a = r.split(/\s+/), o = a.shift(), _ = a.join(), s = i ? t[r].bind(i) :t[r];
"function" == typeof n.fn.on ? e.is(n(_)) ? e.on(o, s) :e.on(o, _, s) :e.delegate(_, o, s);
}
_r_();
}, _r_();
}), B.define("component/input-phone-country", function(e, t, i) {
_i_("3dab:16f489e2");
var n = e("component"), r = {
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
}, a = [ "au", "cw", "gb", "gp", "gs", "km", "mh", "mq", "nf", "no", "ru", "sm", "us" ];
B.env && B.env.ip_country && "cn" === B.env.ip_country && (r.tw = 16);
function o(e, t) {
return _i_("3dab:c5109f8e"), _r_(e.callingcode.length < t.callingcode.length ? 1 :e.callingcode.length > t.callingcode.length ? -1 :e.preferred ? -1 :1);
}
i.exports = n.extend({
init:function() {
_i_("3dab:6a74f571"), this.$country = this.$el.find('[data-phone-country=""], [data-phone-country]'), this.$input = this.$el.find('[data-phone-input=""], [data-phone-input]'), this.$flag = this.$el.find('[data-phone-flag=""], [data-phone-flag]'), this.isTriggerChange = void 0 !== this.$el.data("phone-country-trigger-change"), this.defaultCountryId = this.getDefaultCountryId(), this.countries = [], this.addEventListeners(), this.loadCountries(), this.initDefaultCountry(), _r_();
},
getDefaultCountryId:function() {
_i_("3dab:310e97ef");
var e = (this.$el.data("phone-country-default") || "").toString().toLowerCase();
return "xx" === e && (e = ""), _r_(e);
},
addEventListeners:function() {
_i_("3dab:e22405b6");
var e = this.$input[0], t = e && ("oninput" in this.$input[0] ? "input" :"keyup");
this.$country.change(this.countryChange.bind(this)), this.$input.bind("focus", this.inputFocus.bind(this)), this.$input.bind("blur", this.inputBlur.bind(this)), this.$input.bind(t + " change", this.inputInteracted.bind(this)), "msie" == B.env.b_browser && B.env.b_browser_version <= 8 && (this.$country.bind("mousedown", this.countryFocus.bind(this)), this.$country.bind("blur change", this.countryBlur.bind(this))), _r_();
},
inputFocus:function() {
_i_("3dab:82b7591d"), setTimeout(this.addDefaultCallingCode.bind(this), 4), _r_();
},
inputBlur:function() {
_i_("3dab:886a2afc"), this.removeDefaultCallingCode(), _r_();
},
countryFocus:function() {
_i_("3dab:ff5bf9db"), this.$country.css("width", "auto"), _r_();
},
countryBlur:function() {
_i_("3dab:ee7f41f2"), this.$country.css("width", ""), _r_();
},
inputInteracted:function() {
_i_("3dab:d9637942"), this.checkPlus(), this.changeCountryFromInput(), _r_();
},
countryChange:function() {
_i_("3dab:ece1e88f"), this.changeInputFromCountry(), this.$input.focus(), _r_();
},
loadCountries:function() {
_i_("3dab:f36ac589"), this.$country.find("option").each(function(e, t) {
_i_("3dab:c66ef2fb");
var i = $(t), n = i.attr("value").toLowerCase(), r = {
id:n,
callingcode:i.attr("data-calling-code"),
name:i.text(),
value:i.attr("value"),
preferred:this.defaultCountryId == n || -1 != a.indexOf(n)
};
this.countries.push(r), _r_();
}.bind(this)), this.countries.sort(o), _r_();
},
initDefaultCountry:function() {
_i_("3dab:22ccd31e"), this.defaultCountry = this.findCountryById(this.defaultCountryId), this.defaultCountry && (this.defaultCountryCallingCode = this.defaultCountry.callingcode, this.changeCountryFromInput(), this.$input.attr("placeholder", "+" + this.defaultCountryCallingCode)), _r_();
},
findCountryById:function(e) {
_i_("3dab:255dc48c");
var t = null;
return this.countries.every(function(i) {
if (_i_("3dab:fb6d66be"), i.id == e) return t = i, _r_(!1);
return _r_(!0);
}), _r_(t);
},
findCountryByNumber:function(e) {
_i_("3dab:6bc519b1");
var t = null;
return this.countries.every(function(i) {
if (_i_("3dab:07dab39e"), 0 == e.indexOf(i.callingcode)) return t = i, _r_(!1);
return _r_(!0);
}), _r_(t);
},
changeCountryCode:function(e, t) {
_i_("3dab:8c6d199c");
var i = this.findCountryByNumber(e);
return i && (e = e.substr(i.callingcode.length)), _r_(t.callingcode + e);
},
addDefaultCallingCode:function() {
_i_("3dab:8263e81e");
var e = this.$input.val();
("" == e || "+" == e) && this.$input.val("+" + this.defaultCountryCallingCode), _r_();
},
removeDefaultCallingCode:function() {
_i_("3dab:2e7bf520");
var e = this.$input.val();
("+" == e || e == "+" + this.defaultCountryCallingCode) && this.$input.val(""), _r_();
},
changeInputFromCountry:function() {
_i_("3dab:9e4a4521");
var e = this.$country.val().toLowerCase(), t = this.findCountryById(e), i = this.$input.val() || "", n = i.replace(/^\+/, "");
this.$input.val("+" + this.changeCountryCode(n, t)), this.isTriggerChange && this.$input.change(), this.updateFlag(t), _r_();
},
changeCountryFromInput:function() {
_i_("3dab:91013724");
var e = this.$input.val() || "", t = e.replace(/^\+/, ""), i = this.findCountryByNumber(t) || this.defaultCountry;
!i && booking.reportError && booking.reportError({
message:"No countries populated"
}, "No country"), this.$country.val(i.value), this.updateFlag(i), _r_();
},
checkPlus:function() {
_i_("3dab:4a0858cb");
var e = this.$input.val() || "";
0 != e.indexOf("+") && this.$input.val("+" + e), _r_();
},
updateFlag:function(e) {
_i_("3dab:ae191408"), r[e.id] && this.$flag.css("background-position", "0 " + r[e.id] + "px"), _r_();
},
selectCountry:function(e) {
_i_("3dab:10ee2401");
var t = this.findCountryById(e);
t && (this.defaultCountryId = t.id, this.initDefaultCountry()), _r_();
}
}), _r_();
}), function() {
_i_("3dab:9ecd00f8"), B.env.fe_m_async_login && B.env.async_signin ? B.env.async_signin.init_cbs.push(function() {
_i_("3dab:d73eda07"), e(B.require), _r_();
}) :B.when({
events:"ready"
}).run(e);
function e(e) {
_i_("3dab:32334fb4");
var t = e("jquery"), i = e("jstmpl").translations, n = !1, r = booking.userAccessFormHandler, a = ".js-auth_next_step__sms_", o = ".user_access_menu_auth_next_step__sms";
booking.authNextStepSMS = booking.authNextStepSMS || {};
function _(e) {
if (_i_("3dab:17fc40e1"), n) return _r_();
var o = t(a + "send_verification_code"), _ = t(a + "show-other-options"), s = {}, d = "wrong_pin_code", c = i("deals_flexi_calendar_error");
s[d] = i("auth_next_step_error_empty_verification_code");
function l(e) {
_i_("3dab:0ff92675");
var t = s[e] || c;
r.displayErrorMsg({
msg:t,
parent:".user_access_menu_auth_next_step__sms"
}), _r_();
}
function u() {
return _i_("3dab:fec79dd0"), _r_(r.getSubmitedForm() || r.getSigninForm());
}
function f() {
_i_("3dab:d69914f8"), u().submit(), _r_();
}
function h(e) {
_i_("3dab:1d7c8435");
var i = u(), n = t("input[name=second_factor]", i)[0];
n ? t(n).val(e) :i.prepend('<input type="hidden" name="second_factor" value="' + e + '">'), _r_();
}
function b(e) {
_i_("3dab:e99aad46");
var i = u(), n = t("input[name=trust_the_device]", i)[0];
n ? t(n).val(e) :i.prepend('<input type="hidden" name="trust_the_device" value="' + e + '">'), _r_();
}
function p() {
_i_("3dab:de7d0b67"), booking.userAccessFormHandler.resetErrors({
parent:".user_access_menu_auth_next_step__sms"
}), e.find(".form-loading").hide(), t(a + "verify_phone_confirmation_code").val(""), h(""), _r_();
}
function g() {
_i_("3dab:67fca844"), t(".form-section", e).addClass("form-hidden-section").removeClass("form-shown-section"), _r_();
}
function m() {
_i_("3dab:46c734e5"), p(), g(), t(".user_access_signin_menu").removeClass("form-hidden-section").addClass("form-shown-section"), _r_();
}
function v() {
_i_("3dab:87c1dac1"), p(), g(), t(".user_access_menu_auth_next_step__email").removeClass("form-hidden-section").addClass("form-shown-section"), _r_();
}
_.on("click", v), o.on("click", function(i) {
_i_("3dab:752c3006"), i.preventDefault(), h(""), f(), t(".form-loading", e).show(), _r_();
}), t(a + "verify_phone_form").on("submit", function(i) {
_i_("3dab:ecb01afb");
var n = t(a + "verify_phone_confirmation_code:visible").val() || "", r = t('input[name="trust_the_device"]:visible').is(":checked") ? 1 :0;
i.preventDefault(), n ? (h(n), b(r), f(), t(".form-loading", e).show()) :l(d), _r_();
}), t(a + "phone_number_login_close").on("click", m), e.find(".user_access_section_trigger").on("click", m), _r_();
}
booking.authNextStepSMS.promtUserForPhoneVerification = function(e, i) {
_i_("3dab:8ad6b71c"), _(e), t(".form-section", e).addClass("form-hidden-section").removeClass("form-shown-section"), t(".form-loading", e).hide(), "verify" === i && t(o, e).removeClass("form-hidden-section").addClass("form-shown-section"), _r_();
}, B.env.prompt_user_for_2fa && booking.authNextStepSMS.promtUserForPhoneVerification(t(".user_access_menu"), "verify"), _r_();
}
_r_();
}(), B.when({
events:[ "auth-dialog:show" ],
experiment:"aMYTJVPLHDEFRYAQMYaeVPSUWDKe",
stage:1
}), booking.jstmpl("auth_next_step__email", function() {
_i_("3dab:770586ac");
var e = [ "\n    \n    <div>\n        ", "\n            ", '\n                <div class="form-loading form-loading--visible">\n                    ', '<div class="m-form-loading-content">\n    <img src="', '" alt="', '" width="150" /><br/>\n    <div class="m-form-loading-meter"><div class="m-form-loading-meter-inner"> </div></div>\n    <p>', "/private/loading/name", "...</p>\n</div>\n", "\n                </div>\n            ", '\n                <div class="form-loading form-loading--visible">\n                    <span class="form-loading-content">', "...</span>\n                </div>\n            ", "\n        ", "\n\n        ", '\n    <div class="alert alert-error alert-displayed" role="alert">\n        ', "\n    </div>\n", '\n    <div>\n        <form action="', '" method="POST" target="log_tar">\n            <h3>', "/private/auth_2fa_recovery_flow_confirm_phone_number_header/name", '</h3>\n\n            <div class="clearfix"></div>\n\n            <label class="auth-next-step__section auth-next-step__section--compact">\n                ', "/private/auth_2fa_recovery_flow_confirm_phone_number_explanation/name", '\n            </label>\n\n            <div data-component="input-phone-country" class="auth-next_step__input-phone-country js-companyjoin-field-phone" data-phone-country-default="', '">\n                <label class="auth-next_step__input-phone-country-label  auth-next_step__input-phone-country-label_inline">\n                    <span class="auth-next_step__input-phone-country-label-text">', "/private/auth_2fa_recovery_flow_confirm_phone_number_input_label/name", '</span>\n                    <input type="tel"\n                        class="u-phone auth-next-step-email__verify-phone-input"\n                        name="phone_for_2fa"\n                        value=""\n                        maxlength="40"\n                        placeholder="', "/private/acc_settings_section_2fa_enrollment_phone_number_field_placeholder/name", '"\n                        required\n                        data-phone-input>\n\n                </label>\n\n                <select class="auth-next-step-email__phone-country-select" data-phone-country\n                    aria-label="', "/private/a11y_auth_2fa_recovery_flow_confirm_phone_number_country_select_label/name", '"\n                    tabindex="-1">\n                    ', '\n                        <option value="', '" data-calling-code="', '">', "</option>\n                    ", '\n                </select>\n            </div>\n\n            <input type="hidden" name="op" value="send_recovery_code">\n            <input type="hidden" name="user_access_menu" value="1">\n\n            <button type="submit" class="bootstrapped-input btn btn-primary btn_flat-wide" data-confirm-phone>\n                ', "/private/auth_2fa_recovery_flow_confirm_phone_number_cta/name", "\n            </button>\n        </form>\n    </div>\n", "\n    ", '\n\n    <form class="', 'verify_phone_form form-inline__no-block" action="#" method="POST" data-sign-in>\n\n        <h3>', "/private/auth_2fa_recovery_flow_code_sent_header/name", '</h3>\n\n        <label class="auth-next-step__section auth-next-step__section--compact">\n            ', "/private/auth_2fa_recovery_flow_code_sent_explanation/name", '\n        </label>\n\n        <label class="auth-next-step__section auth-next-step__section--bold">\n            ', "/private/auth_2fa_recovery_flow_code_sent_status/name", '\n        </label>\n\n        <input type="hidden" name="recovery_2fa" value="1">\n\n        ', '<div class="clearfix"></div>\n\n<div class="', "verify_phone_confirmation_code_options ", " verify_phone_confirmation_code_options--compact ", '">\n\n	', "/private/auth_next_step_sms_enter_code_cta/name", '\n\n	<div class="clearfix"></div>\n\n    ', '\n        <span style="color: red;">\n            For KVMs, you can use 123456\n        </span>\n        <div class="clearfix"></div>\n    ', '\n\n	<label class="verify_phone_confirmation_label">\n		<input type="text" name="confirmation_code" maxlength="80"\n            class="auth_next_step__verify_phone_confirmation_code ', 'verify_phone_confirmation_code bootstrapped-input input-text input-block-level"\n            data-validation="required{@Please enter a verification code}|numeric"\n            ', ' \n                value="123456"\n            ', "\n            >\n	</label>\n\n    ", '\n        <div class="auth_next_step__send_verification_code_actions">\n            <div\n                class="', 'send_verification_code auth_next_step__send_verification_code"\n                data-resend-copy="', "/private/auth_next_step_send_code_cta/name", '"\n            >', "</div>\n        </div>\n    ", '\n        <div class="user_access_menu_checkbox" data-et-view="', ':1">\n            <label>\n                <input type="checkbox" name="trust_the_device" value="" />\n                ', "/private/auth_trust_this_device_label/name", "\n            </label>\n        </div>\n    ", "\n\n	", '\n		<input type="submit" value="', '" class="', "bigbluebutton", " btn btn_flat-wide  bootstrapped-input btn btn-primary ", 'send_verification_code_submit">\n	', "\n		", "\n\n\n\n", "b-button", "\n", "Button Text should be overriden", "button", "\n\n\n", "c-button", "\n\n", "\n	", "0", " b-button_primary", " b-button_secondary", " b-button_warning", " b-button_disabled", " b-button_primary b-button_small", " b-button_secondary b-button_small", " b-button_warning b-button_small", " b-button_primary b-button_flat", "1", 'id="', '"', 'href="', " ", 'data-title="', 'type="', 'rel="', "data-", '="', " data-", 'target="', 'hotelUrl="', 'data-hotelid="', "\n\n\n<", '\n	class="', '"\n	', "\n\n    ", '\n        data-track-event="', '"\n    ', '\n		value="', '"/>\n	', '\n	>\n		<span class="b-button__text">', "</span>\n		", '\n				<span class="b-button__from-text" ', 'style="display:inline-block"', ">", "\n\n		", '\n				<span class="b-button__from-text book_now_rt_summary g-hidden"></span>\n\n				', '\n                    <span class="b-button__from-text taxes_and_charges_near_price_btn_text"></span>\n				', "\n\n		</", ">\n	", "submit", "<TMPL_IF [% $b_site_type eq 'mdot' %]>bigbluebutton</TMPL_IF><TMPL_V ESCAPE=maybeXSS js_class_prefix>send_verification_code_submit <TMPL_V ESCAPE=maybeXSS js_class_prefix>send_verification_code_submit--same_page", "primary", "\n\n</div>\n", "\n    </form>\n", '\n    <div>\n        <div class="auth-next-step__footer-buttons-left">\n        </div>\n\n        <div class="auth-next-step__footer-buttons-right">\n            <a href="javascript:void(0)"\n               data-dismiss>', "/private/dda_reset_password_cancel_button/name", "</a>\n        </div>\n    </div>\n" ], t = [ "b_visual_brand", "b_site_type", "is_in_loading_state", "message", "is_in_error_state", "status", "b_form_action", "b_guest_country", "b_country_code_to_phone_prefix", "cc", "mc", "name", "js_class_prefix", "fe_confirmation_code_compact", "b_dev_server", "fe_is_resend_available", "fe_verify_phone_confirmation_submit_copy", "fe_is_account_area", "b_btn_class", "b_btn_id", "b_btn_text", "b_btn_outside_text", "b_btn_caption_text", "b_btn_tag", "b_btn_attr_type", "b_btn_attr", "b_btn_href", "b_btn_extra_classes", "b_btn_title", "b_btn_rel", "b_btn_target", "b_btn_data", "fe_cbtn_comp_class", "fe_cbtn_class", "fe_cbtn_type", "fe_cbtn_size", "fe_cbtn_disabled", "fe_cbtn_icon_only", "fe_cbtn_icon_left", "fe_cbtn_icon_right", "fe_cbtn_track_exp", "fe_cbtn_track_event", "fe_btn_track_event", "fe_cbtn_track_goal", "fe_cbtn_track_stage", "fe_cbtn_is_anchor", "fe_cbtn_is_input", "fe_cbtn_is_button", "fe_cbtn_no_style", "b_btn_hotel_url", "b_btn_data_hotelid", "b_text", "b_outside_text", "b_caption_text", "b_type", "b_tag", "fe_btn_is_anchor", "fe_btn_is_input", "fe_btn_is_button", "b_id", "b_href", "fe_btn_no_style", "b_extra_classes", "b_title", "b_attr_type", "b_attr", "b_rel", "b_data_id", "b_data_value", "b_data_id_2", "b_data_value_2", "b_data_id_3", "b_data_value_3", "b_data_id_4", "b_data_value_4", "b_data_id_5", "b_data_value_5", "b_target", "b_bb_is_sabrered_app", "b_hotel_url", "b_data_hotelid", "b_from_price_inlined", "b_add_rt_summary", "real_login_signin" ];
return _r_(function(i) {
_i_("3dab:bc1de4e9");
var n = "", r = this.fn;
function a(n) {
return _i_("3dab:b2e1f8a7"), n += e[35], r.MN("js_class_prefix", "js-auth_next_step__sms_"), n += [ e[36], r.MC(t[12]), e[37], r.ME(e[38], r.MB, r.MN, null), e[39], r.ME(e[40], r.MB, r.MN, null), e[41], r.ME(e[42], r.MB, r.MN, null), e[43] ].join(""), i.unshift({
fe_is_account_area:e[89],
fe_is_resend_available:e[80],
fe_verify_phone_confirmation_submit_copy:r.MB(t[83]),
js_class_prefix:r.MB(t[12])
}), n = l(n), i.shift(), n += e[125], _r_(n);
}
function o(i) {
_i_("3dab:bd5d21f8"), i += e[71], r.MN(t[18], e[72]), i += e[73], r.MN(t[19], void 0), i += e[73], r.MN(t[20], e[74]), i += e[73], r.MN(t[21], void 0), i += e[73], r.MN(t[22], void 0), i += e[73], r.MN(t[23], e[75]), i += e[73], r.MN(t[24], void 0), i += e[73], r.MN(t[25], void 0), i += e[73], r.MN(t[26], void 0), i += e[73], r.MN(t[27], void 0), i += e[73], r.MN(t[28], void 0), i += e[73], r.MN(t[29], void 0), i += e[73], r.MN(t[30], void 0), i += e[73], r.MN(t[31], void 0), i += e[76], r.MN(t[32], e[77]), i += e[78], r.MN(t[33], void 0), i += e[73], r.MN(t[34], void 0), i += e[73], r.MN(t[35], void 0), i += e[73], r.MN(t[36], void 0), i += e[73], r.MN(t[37], void 0), i += e[73], r.MN(t[38], void 0), i += e[73], r.MN(t[39], void 0), i += e[73], r.MN(t[40], void 0), i += e[78], r.MD(t[42]) ? (i += e[79], r.MN(t[41], r.MB(t[42])), i += e[73]) :(i += e[79], r.MN(t[41], void 0), i += e[73]), i += e[78], r.MN(t[43], void 0), i += e[73], r.MN(t[44], void 0), i += e[78], r.MN(t[45], e[80]), i += e[73], r.MN(t[46], e[80]), i += e[73], r.MN(t[47], e[80]), i += e[78], r.MN(t[48], e[80]), i += e[76], r.MN(t[49], void 0), i += e[73], r.MN(t[50], void 0), i += e[78], r.MD(t[51]) && (i += e[79], r.MN(t[20], r.MC(t[51])), i += e[73]), i += e[78], r.MD(t[52]) && (i += e[79], r.MN(t[21], r.MC(t[52])), i += e[73]), i += e[78], r.MD(t[53]) && (i += e[79], r.MN(t[22], r.MC(t[53])), i += e[73]), i += e[78];
var n = r.MC(t[54]);
if (r.MJ(n + "" == "primary") ? (i += e[70], r.MN(t[18], [ r.MC(t[18]), e[81] ].join("")), i += e[79]) :r.MJ(n + "" == "secondary") ? (i += e[70], r.MN(t[18], [ r.MC(t[18]), e[82] ].join("")), i += e[79]) :r.MJ(n + "" == "warning") ? (i += e[70], r.MN(t[18], [ r.MC(t[18]), e[83] ].join("")), i += e[79]) :r.MJ(n + "" == "disabled") ? (i += e[70], r.MN(t[18], [ r.MC(t[18]), e[84] ].join("")), i += e[79]) :r.MJ(n + "" == "primary-small") ? (i += e[70], r.MN(t[18], [ r.MC(t[18]), e[85] ].join("")), i += e[79]) :r.MJ(n + "" == "secondary-small") ? (i += e[70], r.MN(t[18], [ r.MC(t[18]), e[86] ].join("")), i += e[79]) :r.MJ(n + "" == "warning-small") ? (i += e[70], r.MN(t[18], [ r.MC(t[18]), e[87] ].join("")), i += e[79]) :r.MJ(n + "" == "primary-flat") && (i += e[70], r.MN(t[18], [ r.MC(t[18]), e[88] ].join("")), i += e[73]), i += e[78], r.MD(t[55]) && (i += e[79], r.MN(t[23], r.MC(t[55])), i += e[64], r.MJ(/^a$/i.test(r.MC(t[23]))) && r.MN(t[56], e[89]), i += e[79], r.MJ(/^input$/i.test(r.MC(t[23]))) && r.MN(t[57], e[89]), i += e[79], r.MJ(/^button$/i.test(r.MC(t[23]))) && r.MN(t[58], e[89]), i += e[73]), i += e[78], r.MD(t[59]) && (i += e[79], r.MN(t[19], [ e[90], r.MC(t[59]), e[91] ].join("")), i += e[73]), i += e[78], r.MD(t[60]) && (i += e[79], r.MN(t[26], [ e[92], r.MC(t[60]), e[91] ].join("")), i += e[73]), i += e[78], r.MD(t[61]) && (i += e[79], r.MN(t[48], r.MC(t[61])), i += e[73]), i += e[78], r.MD(t[62])) {
i += e[79];
var a = "";
r.MD(t[48]) || (a += r.MC(t[18])), a += [ e[93], r.MC(t[62]) ].join(""), r.MN(t[18], a), i += e[73];
}
return i += e[78], r.MD(t[63]) && (i += e[79], r.MN(t[28], [ e[94], r.F.entities(r.MC(t[63])), e[91] ].join("")), i += e[73]), i += e[78], r.MD(t[64]) && (i += e[79], r.MN(t[24], [ e[95], r.MC(t[64]), e[91] ].join("")), i += e[73]), i += e[78], r.MD(t[65]) && (i += e[79], r.MN(t[25], r.MC(t[65])), i += e[73]), i += e[78], r.MD(t[66]) && (i += e[79], r.MN(t[29], [ e[96], r.MC(t[66]), e[91] ].join("")), i += e[73]), i += e[78], r.MD(t[67]) && (i += e[35], r.MN(t[31], [ e[97], r.MC(t[67]), e[98], r.MC(t[68]), e[91] ].join("")), i += e[73]), i += e[78], r.MD(t[69]) && (i += e[35], r.MN(t[31], [ r.MC(t[31]), e[99], r.MC(t[69]), e[98], r.MC(t[70]), e[91] ].join("")), i += e[73]), i += e[78], r.MD(t[71]) && (i += e[35], r.MN(t[31], [ r.MC(t[31]), e[99], r.MC(t[71]), e[98], r.MC(t[72]), e[91] ].join("")), i += e[73]), i += e[78], r.MD(t[73]) && (i += e[35], r.MN(t[31], [ r.MC(t[31]), e[99], r.MC(t[73]), e[98], r.MC(t[74]), e[91] ].join("")), i += e[73]), i += e[78], r.MD(t[75]) && (i += e[35], r.MN(t[31], [ r.MC(t[31]), e[99], r.MC(t[75]), e[98], r.MC(t[76]), e[91] ].join("")), i += e[73]), i += e[78], r.MJ(r.MC(t[77])) && r.MK(r.MC(t[78])) && (i += e[79], r.MN(t[30], [ e[100], r.MC(t[77]), e[91] ].join("")), i += e[73]), i += e[71], r.MD(t[79]) && (i += e[79], r.MN(t[49], [ e[101], r.MC(t[79]), e[91] ].join("")), i += e[73]), i += e[78], r.MD(t[80]) && (i += e[79], r.MN(t[50], [ e[102], r.MC(t[80]), e[91] ].join("")), i += e[73]), i += [ e[103], r.MC(t[23]), e[104], r.MC(t[18]), e[105], r.MC(t[26]), e[79], r.MC(t[19]), e[79], r.MC(t[24]), e[79], r.MC(t[25]), e[79], r.MC(t[28]), e[35], r.MC(t[29]), e[79], r.MC(t[31]), e[79], r.MC(t[30]), e[79], r.MC(t[49]), e[79], r.MC(t[50]), e[106] ].join(""), r.MD(t[41]) && (i += [ e[107], r.MB(t[41]), e[108] ].join("")), i += e[64], r.MJ(r.MC(t[23]) + "" == "input") ? i += [ e[109], r.MC(t[20]), e[110] ].join("") :(i += [ e[111], r.MC(t[20]), e[112] ].join(""), r.MD(t[21]) && (i += e[113], r.MD(t[81]) && (i += e[114]), i += [ e[115], r.MC(t[21]), e[112] ].join("")), i += e[116], r.MD(t[82]) && (i += e[117], r.MJ(r.MC(t[7])) && (r.MJ(r.MC(t[7]) + "" == "nl") || r.MJ(r.MC(t[7]) + "" == "be")) && r.MJ(r.track_experiment("eDUIFBUNAAUTCKWFQTcYRJELWe")) && (i += e[118]), i += e[70]), i += [ e[119], r.MC(t[23]), e[120] ].join("")), i += e[73], _r_(i);
}
function _(t) {
return _i_("3dab:38c8edb3"), t += [ e[126], r.ME(e[127], r.MB, r.MN, null), e[128] ].join(""), _r_(t);
}
function s(i) {
return _i_("3dab:760cc9ad"), i += [ e[13], r.MC(t[3]), e[14] ].join(""), _r_(i);
}
function d(n) {
_i_("3dab:b1a59be9"), n += [ e[15], r.MC(t[6]), e[16], r.ME(e[17], r.MB, r.MN, null), e[18], r.ME(e[19], r.MB, r.MN, null), e[20], r.MC(t[7]), e[21], r.ME(e[22], r.MB, r.MN, null), e[23], r.ME(e[24], r.MB, r.MN, null), e[25], r.ME(e[26], r.MB, r.MN, null), e[27] ].join("");
var a = r.MC(t[8]) || [];
i.unshift(null);
for (var o = 1, _ = a.length; _ >= o; o++) i[0] = a[o - 1], n += [ e[28], r.F.entities(r.MC(t[9])), e[29], r.F.entities(r.MC(t[10])), e[30], r.MC(t[11]), e[31] ].join("");
return i.shift(), n += [ e[32], r.ME(e[33], r.MB, r.MN, null), e[34] ].join(""), _r_(n);
}
function c(i) {
return _i_("3dab:70d2d4c6"), i += [ e[3], r.STATIC_HOSTNAME("/mobile/images/exps/logo_med.png", 0, 0, 0), e[4], r.MC(t[0]), e[5], r.ME(e[6], r.MB, r.MN, null), e[7] ].join(""), _r_(i);
}
function l(n) {
return _i_("3dab:f806f1a7"), n += [ e[44], r.MC(t[12]), e[45] ].join(""), r.MD(t[13]) && (n += e[46]), n += [ e[47], r.ME(e[48], r.MB, r.MN, null), e[49] ].join(""), r.MD(t[14]) && (n += e[50]), n += [ e[51], r.MC(t[12]), e[52] ].join(""), r.MD(t[14]) && (n += e[53]), n += e[54], r.MD(t[15]) && (n += [ e[55], r.MC(t[12]), e[56], r.ME(e[57], r.MB, r.MN, null), e[58], r.ME(e[57], r.MB, r.MN, null), e[59] ].join("")), n += e[49], r.MJ(r.track_experiment("aMYTJVPLHDEFRYAQMYaeVPSUWDKe")) && (n += [ e[60], "aMYTJVPLHDEFRYAQMYaeVPSUWDKe", e[61], r.ME(e[62], r.MB, r.MN, null), e[63] ].join("")), n += e[64], r.MD(t[17]) ? (n += [ e[65], r.MC(t[16]), e[66] ].join(""), r.MJ(r.MC(t[1]) + "" == "mdot") && (n += e[67]), n += [ e[68], r.MC(t[12]), e[69] ].join("")) :(n += e[70], i.unshift({
b_attr_type:e[121],
b_extra_classes:e[122],
b_tag:e[75],
b_text:r.MB(t[16]),
b_type:e[123]
}), n = o(n), i.shift(), n += e[79]), n += e[124], _r_(n);
}
n += e[0], r.MD(t[2]) && (n += e[1], r.MJ(r.MC(t[1]) + "" == "mdot") ? (n += e[2], n = c(n), n += e[8]) :n += [ e[9], r.ME(e[6], r.MB, r.MN, null), e[10] ].join(""), n += e[11]), n += e[12], r.MD(t[4]) && (n += e[1], n = s(n), n += e[11]), n += e[12];
var u = r.MB(t[5]);
return r.MJ(u + "" == "waiting_for_phone_number") ? (n = d(n), n += e[1]) :r.MJ(u + "" == "sending_email_pin_code") ? (n = d(n), n += e[1]) :r.MJ(u + "" == "pending_email_verification") ? (n = a(n), n += e[1]) :r.MJ(u + "" == "verifying_email") ? (n = a(n), n += e[1]) :r.MJ(u + "" == "authenticated") ? (n = a(n), n += e[1]) :(n = d(n), n += e[11]), n += e[12], n = _(n), n += e[14], _r_(n);
});
}()), booking.jstmpl("auth_next_step__email_errors", function() {
_i_("3dab:0c436b99");
var e = [ '\n    <div class="alert alert-error alert-displayed" role="alert">\n        ', "\n    </div>\n" ], t = [ "message" ];
return _r_(function(i) {
_i_("3dab:2a96cd0a");
var n = "", r = this.fn;
return n += [ e[0], r.MC(t[0]), e[1] ].join(""), _r_(n);
});
}()), booking.jstmpl("auth_next_step__email_footer", function() {
_i_("3dab:78a497dd");
var e = [ '\n    <div>\n        <div class="auth-next-step__footer-buttons-left">\n        </div>\n\n        <div class="auth-next-step__footer-buttons-right">\n            <a href="javascript:void(0)"\n               data-dismiss>', "/private/dda_reset_password_cancel_button/name", "</a>\n        </div>\n    </div>\n" ];
return _r_(function(t) {
_i_("3dab:bde66dc9");
var i = "", n = this.fn;
return i += [ e[0], n.ME(e[1], n.MB, n.MN, null), e[2] ].join(""), _r_(i);
});
}()), booking.jstmpl("auth_next_step__email_send_recovery_code", function() {
_i_("3dab:be8c1584");
var e = [ '\n    <div>\n        <form action="', '" method="POST" target="log_tar">\n            <h3>', "/private/auth_2fa_recovery_flow_confirm_phone_number_header/name", '</h3>\n\n            <div class="clearfix"></div>\n\n            <label class="auth-next-step__section auth-next-step__section--compact">\n                ', "/private/auth_2fa_recovery_flow_confirm_phone_number_explanation/name", '\n            </label>\n\n            <div data-component="input-phone-country" class="auth-next_step__input-phone-country js-companyjoin-field-phone" data-phone-country-default="', '">\n                <label class="auth-next_step__input-phone-country-label  auth-next_step__input-phone-country-label_inline">\n                    <span class="auth-next_step__input-phone-country-label-text">', "/private/auth_2fa_recovery_flow_confirm_phone_number_input_label/name", '</span>\n                    <input type="tel"\n                        class="u-phone auth-next-step-email__verify-phone-input"\n                        name="phone_for_2fa"\n                        value=""\n                        maxlength="40"\n                        placeholder="', "/private/acc_settings_section_2fa_enrollment_phone_number_field_placeholder/name", '"\n                        required\n                        data-phone-input>\n\n                </label>\n\n                <select class="auth-next-step-email__phone-country-select" data-phone-country\n                    aria-label="', "/private/a11y_auth_2fa_recovery_flow_confirm_phone_number_country_select_label/name", '"\n                    tabindex="-1">\n                    ', '\n                        <option value="', '" data-calling-code="', '">', "</option>\n                    ", '\n                </select>\n            </div>\n\n            <input type="hidden" name="op" value="send_recovery_code">\n            <input type="hidden" name="user_access_menu" value="1">\n\n            <button type="submit" class="bootstrapped-input btn btn-primary btn_flat-wide" data-confirm-phone>\n                ', "/private/auth_2fa_recovery_flow_confirm_phone_number_cta/name", "\n            </button>\n        </form>\n    </div>\n" ], t = [ "b_form_action", "b_guest_country", "b_country_code_to_phone_prefix", "cc", "mc", "name" ];
return _r_(function(i) {
_i_("3dab:62abf692");
var n = "", r = this.fn;
n += [ e[0], r.MC(t[0]), e[1], r.ME(e[2], r.MB, r.MN, null), e[3], r.ME(e[4], r.MB, r.MN, null), e[5], r.MC(t[1]), e[6], r.ME(e[7], r.MB, r.MN, null), e[8], r.ME(e[9], r.MB, r.MN, null), e[10], r.ME(e[11], r.MB, r.MN, null), e[12] ].join("");
var a = r.MC(t[2]) || [];
i.unshift(null);
for (var o = 1, _ = a.length; _ >= o; o++) i[0] = a[o - 1], n += [ e[13], r.F.entities(r.MC(t[3])), e[14], r.F.entities(r.MC(t[4])), e[15], r.MC(t[5]), e[16] ].join("");
return i.shift(), n += [ e[17], r.ME(e[18], r.MB, r.MN, null), e[19] ].join(""), _r_(n);
});
}()), booking.jstmpl("auth_next_step__email_verify_code", function() {
_i_("3dab:a12b4287");
var e = [ "\n    ", '\n\n    <form class="', 'verify_phone_form form-inline__no-block" action="#" method="POST" data-sign-in>\n\n        <h3>', "/private/auth_2fa_recovery_flow_code_sent_header/name", '</h3>\n\n        <label class="auth-next-step__section auth-next-step__section--compact">\n            ', "/private/auth_2fa_recovery_flow_code_sent_explanation/name", '\n        </label>\n\n        <label class="auth-next-step__section auth-next-step__section--bold">\n            ', "/private/auth_2fa_recovery_flow_code_sent_status/name", '\n        </label>\n\n        <input type="hidden" name="recovery_2fa" value="1">\n\n        ', '<div class="clearfix"></div>\n\n<div class="', "verify_phone_confirmation_code_options ", " verify_phone_confirmation_code_options--compact ", '">\n\n	', "/private/auth_next_step_sms_enter_code_cta/name", '\n\n	<div class="clearfix"></div>\n\n    ', '\n        <span style="color: red;">\n            For KVMs, you can use 123456\n        </span>\n        <div class="clearfix"></div>\n    ', '\n\n	<label class="verify_phone_confirmation_label">\n		<input type="text" name="confirmation_code" maxlength="80"\n            class="auth_next_step__verify_phone_confirmation_code ', 'verify_phone_confirmation_code bootstrapped-input input-text input-block-level"\n            data-validation="required{@Please enter a verification code}|numeric"\n            ', ' \n                value="123456"\n            ', "\n            >\n	</label>\n\n    ", '\n        <div class="auth_next_step__send_verification_code_actions">\n            <div\n                class="', 'send_verification_code auth_next_step__send_verification_code"\n                data-resend-copy="', "/private/auth_next_step_send_code_cta/name", '"\n            >', "</div>\n        </div>\n    ", '\n        <div class="user_access_menu_checkbox" data-et-view="', ':1">\n            <label>\n                <input type="checkbox" name="trust_the_device" value="" />\n                ', "/private/auth_trust_this_device_label/name", "\n            </label>\n        </div>\n    ", "\n\n	", '\n		<input type="submit" value="', '" class="', "bigbluebutton", " btn btn_flat-wide  bootstrapped-input btn btn-primary ", 'send_verification_code_submit">\n	', "\n		", "\n\n\n\n", "b-button", "\n", "Button Text should be overriden", "button", "\n\n\n", "c-button", "\n\n", "\n	", "0", " b-button_primary", " b-button_secondary", " b-button_warning", " b-button_disabled", " b-button_primary b-button_small", " b-button_secondary b-button_small", " b-button_warning b-button_small", " b-button_primary b-button_flat", "1", 'id="', '"', 'href="', " ", 'data-title="', 'type="', 'rel="', "data-", '="', " data-", 'target="', 'hotelUrl="', 'data-hotelid="', "\n\n\n<", '\n	class="', '"\n	', "\n\n    ", '\n        data-track-event="', '"\n    ', '\n		value="', '"/>\n	', '\n	>\n		<span class="b-button__text">', "</span>\n		", '\n				<span class="b-button__from-text" ', 'style="display:inline-block"', ">", "\n\n		", '\n				<span class="b-button__from-text book_now_rt_summary g-hidden"></span>\n\n				', '\n                    <span class="b-button__from-text taxes_and_charges_near_price_btn_text"></span>\n				', "\n\n		</", ">\n	", "submit", "<TMPL_IF [% $b_site_type eq 'mdot' %]>bigbluebutton</TMPL_IF><TMPL_V ESCAPE=maybeXSS js_class_prefix>send_verification_code_submit <TMPL_V ESCAPE=maybeXSS js_class_prefix>send_verification_code_submit--same_page", "primary", "\n\n</div>\n", "\n    </form>\n" ], t = [ "js_class_prefix", "fe_confirmation_code_compact", "b_dev_server", "fe_is_resend_available", "fe_verify_phone_confirmation_submit_copy", "b_site_type", "fe_is_account_area", "b_btn_class", "b_btn_id", "b_btn_text", "b_btn_outside_text", "b_btn_caption_text", "b_btn_tag", "b_btn_attr_type", "b_btn_attr", "b_btn_href", "b_btn_extra_classes", "b_btn_title", "b_btn_rel", "b_btn_target", "b_btn_data", "fe_cbtn_comp_class", "fe_cbtn_class", "fe_cbtn_type", "fe_cbtn_size", "fe_cbtn_disabled", "fe_cbtn_icon_only", "fe_cbtn_icon_left", "fe_cbtn_icon_right", "fe_cbtn_track_exp", "fe_cbtn_track_event", "fe_btn_track_event", "fe_cbtn_track_goal", "fe_cbtn_track_stage", "fe_cbtn_is_anchor", "fe_cbtn_is_input", "fe_cbtn_is_button", "fe_cbtn_no_style", "b_btn_hotel_url", "b_btn_data_hotelid", "b_text", "b_outside_text", "b_caption_text", "b_type", "b_tag", "fe_btn_is_anchor", "fe_btn_is_input", "fe_btn_is_button", "b_id", "b_href", "fe_btn_no_style", "b_extra_classes", "b_title", "b_attr_type", "b_attr", "b_rel", "b_data_id", "b_data_value", "b_data_id_2", "b_data_value_2", "b_data_id_3", "b_data_value_3", "b_data_id_4", "b_data_value_4", "b_data_id_5", "b_data_value_5", "b_target", "b_bb_is_sabrered_app", "b_hotel_url", "b_data_hotelid", "b_from_price_inlined", "b_guest_country", "b_add_rt_summary", "real_login_signin" ];
return _r_(function(i) {
_i_("3dab:dda61a32");
var n = "", r = this.fn;
function a(i) {
_i_("3dab:80faf6a5"), i += e[36], r.MN(t[7], e[37]), i += e[38], r.MN(t[8], void 0), i += e[38], r.MN(t[9], e[39]), i += e[38], r.MN(t[10], void 0), i += e[38], r.MN(t[11], void 0), i += e[38], r.MN(t[12], e[40]), i += e[38], r.MN(t[13], void 0), i += e[38], r.MN(t[14], void 0), i += e[38], r.MN(t[15], void 0), i += e[38], r.MN(t[16], void 0), i += e[38], r.MN(t[17], void 0), i += e[38], r.MN(t[18], void 0), i += e[38], r.MN(t[19], void 0), i += e[38], r.MN(t[20], void 0), i += e[41], r.MN(t[21], e[42]), i += e[43], r.MN(t[22], void 0), i += e[38], r.MN(t[23], void 0), i += e[38], r.MN(t[24], void 0), i += e[38], r.MN(t[25], void 0), i += e[38], r.MN(t[26], void 0), i += e[38], r.MN(t[27], void 0), i += e[38], r.MN(t[28], void 0), i += e[38], r.MN(t[29], void 0), i += e[43], r.MD(t[31]) ? (i += e[44], r.MN(t[30], r.MB(t[31])), i += e[38]) :(i += e[44], r.MN(t[30], void 0), i += e[38]), i += e[43], r.MN(t[32], void 0), i += e[38], r.MN(t[33], void 0), i += e[43], r.MN(t[34], e[45]), i += e[38], r.MN(t[35], e[45]), i += e[38], r.MN(t[36], e[45]), i += e[43], r.MN(t[37], e[45]), i += e[41], r.MN(t[38], void 0), i += e[38], r.MN(t[39], void 0), i += e[43], r.MD(t[40]) && (i += e[44], r.MN(t[9], r.MC(t[40])), i += e[38]), i += e[43], r.MD(t[41]) && (i += e[44], r.MN(t[10], r.MC(t[41])), i += e[38]), i += e[43], r.MD(t[42]) && (i += e[44], r.MN(t[11], r.MC(t[42])), i += e[38]), i += e[43];
var n = r.MC(t[43]);
if (r.MJ(n + "" == "primary") ? (i += e[35], r.MN(t[7], [ r.MC(t[7]), e[46] ].join("")), i += e[44]) :r.MJ(n + "" == "secondary") ? (i += e[35], r.MN(t[7], [ r.MC(t[7]), e[47] ].join("")), i += e[44]) :r.MJ(n + "" == "warning") ? (i += e[35], r.MN(t[7], [ r.MC(t[7]), e[48] ].join("")), i += e[44]) :r.MJ(n + "" == "disabled") ? (i += e[35], r.MN(t[7], [ r.MC(t[7]), e[49] ].join("")), i += e[44]) :r.MJ(n + "" == "primary-small") ? (i += e[35], r.MN(t[7], [ r.MC(t[7]), e[50] ].join("")), i += e[44]) :r.MJ(n + "" == "secondary-small") ? (i += e[35], r.MN(t[7], [ r.MC(t[7]), e[51] ].join("")), i += e[44]) :r.MJ(n + "" == "warning-small") ? (i += e[35], r.MN(t[7], [ r.MC(t[7]), e[52] ].join("")), i += e[44]) :r.MJ(n + "" == "primary-flat") && (i += e[35], r.MN(t[7], [ r.MC(t[7]), e[53] ].join("")), i += e[38]), i += e[43], r.MD(t[44]) && (i += e[44], r.MN(t[12], r.MC(t[44])), i += e[29], r.MJ(/^a$/i.test(r.MC(t[12]))) && r.MN(t[45], e[54]), i += e[44], r.MJ(/^input$/i.test(r.MC(t[12]))) && r.MN(t[46], e[54]), i += e[44], r.MJ(/^button$/i.test(r.MC(t[12]))) && r.MN(t[47], e[54]), i += e[38]), i += e[43], r.MD(t[48]) && (i += e[44], r.MN(t[8], [ e[55], r.MC(t[48]), e[56] ].join("")), i += e[38]), i += e[43], r.MD(t[49]) && (i += e[44], r.MN(t[15], [ e[57], r.MC(t[49]), e[56] ].join("")), i += e[38]), i += e[43], r.MD(t[50]) && (i += e[44], r.MN(t[37], r.MC(t[50])), i += e[38]), i += e[43], r.MD(t[51])) {
i += e[44];
var a = "";
r.MD(t[37]) || (a += r.MC(t[7])), a += [ e[58], r.MC(t[51]) ].join(""), r.MN(t[7], a), i += e[38];
}
return i += e[43], r.MD(t[52]) && (i += e[44], r.MN(t[17], [ e[59], r.F.entities(r.MC(t[52])), e[56] ].join("")), i += e[38]), i += e[43], r.MD(t[53]) && (i += e[44], r.MN(t[13], [ e[60], r.MC(t[53]), e[56] ].join("")), i += e[38]), i += e[43], r.MD(t[54]) && (i += e[44], r.MN(t[14], r.MC(t[54])), i += e[38]), i += e[43], r.MD(t[55]) && (i += e[44], r.MN(t[18], [ e[61], r.MC(t[55]), e[56] ].join("")), i += e[38]), i += e[43], r.MD(t[56]) && (i += e[0], r.MN(t[20], [ e[62], r.MC(t[56]), e[63], r.MC(t[57]), e[56] ].join("")), i += e[38]), i += e[43], r.MD(t[58]) && (i += e[0], r.MN(t[20], [ r.MC(t[20]), e[64], r.MC(t[58]), e[63], r.MC(t[59]), e[56] ].join("")), i += e[38]), i += e[43], r.MD(t[60]) && (i += e[0], r.MN(t[20], [ r.MC(t[20]), e[64], r.MC(t[60]), e[63], r.MC(t[61]), e[56] ].join("")), i += e[38]), i += e[43], r.MD(t[62]) && (i += e[0], r.MN(t[20], [ r.MC(t[20]), e[64], r.MC(t[62]), e[63], r.MC(t[63]), e[56] ].join("")), i += e[38]), i += e[43], r.MD(t[64]) && (i += e[0], r.MN(t[20], [ r.MC(t[20]), e[64], r.MC(t[64]), e[63], r.MC(t[65]), e[56] ].join("")), i += e[38]), i += e[43], r.MJ(r.MC(t[66])) && r.MK(r.MC(t[67])) && (i += e[44], r.MN(t[19], [ e[65], r.MC(t[66]), e[56] ].join("")), i += e[38]), i += e[36], r.MD(t[68]) && (i += e[44], r.MN(t[38], [ e[66], r.MC(t[68]), e[56] ].join("")), i += e[38]), i += e[43], r.MD(t[69]) && (i += e[44], r.MN(t[39], [ e[67], r.MC(t[69]), e[56] ].join("")), i += e[38]), i += [ e[68], r.MC(t[12]), e[69], r.MC(t[7]), e[70], r.MC(t[15]), e[44], r.MC(t[8]), e[44], r.MC(t[13]), e[44], r.MC(t[14]), e[44], r.MC(t[17]), e[0], r.MC(t[18]), e[44], r.MC(t[20]), e[44], r.MC(t[19]), e[44], r.MC(t[38]), e[44], r.MC(t[39]), e[71] ].join(""), r.MD(t[30]) && (i += [ e[72], r.MB(t[30]), e[73] ].join("")), i += e[29], r.MJ(r.MC(t[12]) + "" == "input") ? i += [ e[74], r.MC(t[9]), e[75] ].join("") :(i += [ e[76], r.MC(t[9]), e[77] ].join(""), r.MD(t[10]) && (i += e[78], r.MD(t[70]) && (i += e[79]), i += [ e[80], r.MC(t[10]), e[77] ].join("")), i += e[81], r.MD(t[72]) && (i += e[82], r.MJ(r.MC(t[71])) && (r.MJ(r.MC(t[71]) + "" == "nl") || r.MJ(r.MC(t[71]) + "" == "be")) && r.MJ(r.track_experiment("eDUIFBUNAAUTCKWFQTcYRJELWe")) && (i += e[83]), i += e[35]), i += [ e[84], r.MC(t[12]), e[85] ].join("")), i += e[38], _r_(i);
}
function o(n) {
return _i_("3dab:09b7fd22"), n += [ e[9], r.MC(t[0]), e[10] ].join(""), r.MD(t[1]) && (n += e[11]), n += [ e[12], r.ME(e[13], r.MB, r.MN, null), e[14] ].join(""), r.MD(t[2]) && (n += e[15]), n += [ e[16], r.MC(t[0]), e[17] ].join(""), r.MD(t[2]) && (n += e[18]), n += e[19], r.MD(t[3]) && (n += [ e[20], r.MC(t[0]), e[21], r.ME(e[22], r.MB, r.MN, null), e[23], r.ME(e[22], r.MB, r.MN, null), e[24] ].join("")), n += e[14], r.MJ(r.track_experiment("aMYTJVPLHDEFRYAQMYaeVPSUWDKe")) && (n += [ e[25], "aMYTJVPLHDEFRYAQMYaeVPSUWDKe", e[26], r.ME(e[27], r.MB, r.MN, null), e[28] ].join("")), n += e[29], r.MD(t[6]) ? (n += [ e[30], r.MC(t[4]), e[31] ].join(""), r.MJ(r.MC(t[5]) + "" == "mdot") && (n += e[32]), n += [ e[33], r.MC(t[0]), e[34] ].join("")) :(n += e[35], i.unshift({
b_attr_type:e[86],
b_extra_classes:e[87],
b_tag:e[40],
b_text:r.MB(t[4]),
b_type:e[88]
}), n = a(n), i.shift(), n += e[44]), n += e[89], _r_(n);
}
return n += e[0], r.MN("js_class_prefix", "js-auth_next_step__sms_"), n += [ e[1], r.MC(t[0]), e[2], r.ME(e[3], r.MB, r.MN, null), e[4], r.ME(e[5], r.MB, r.MN, null), e[6], r.ME(e[7], r.MB, r.MN, null), e[8] ].join(""), i.unshift({
fe_is_account_area:e[54],
fe_is_resend_available:e[45],
fe_verify_phone_confirmation_submit_copy:r.MB(t[73]),
js_class_prefix:r.MB(t[0])
}), n = o(n), i.shift(), n += e[90], _r_(n);
});
}()), B.define("component/profile/2fa/constants", function(e, t, i) {
"use strict";
_i_("3dab:e86c6d24"), i.exports = {
ACTION_TYPES:{
AUTH_NEXT_STEP_EMAIL:{
NEXT_STEP:"action_types.auth_next_step__email.next_step",
ERROR:"action_types.auth_next_step__email.error",
CANCEL:"action_types.auth_next_step__email.cancel",
FIX_FORM_ACTION:"action_types.auth_next_step__email.fix_form_action",
LOADING:"action_types.auth_next_step__email.loading"
}
}
}, _r_();
}), B.define("component/profile/2fa/store", function(e, t, i) {
"use strict";
_i_("3dab:da037e2f"), "function" == typeof window.B_init_login_flow && window.B_init_login_flow(B.env);
var n = e("redux"), r = n.createStore, a = n.combineReducers, o = e("./reducers/auth_next_step__email"), _ = r(a({
auth_next_step__email:o
}), B.env.login_flow, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
i.exports = _, _r_();
}), B.define("component/profile/2fa/reducers/auth_next_step__email", function(e, t, i) {
"use strict";
_i_("3dab:a0f4bbd7");
var n = e("../constants"), r = {
status:"waiting_for_phone_number",
message:"",
is_in_loading_state:!1,
is_in_error_state:!1
}, a = {
off:"waiting_for_phone_number",
waiting_for_phone_number:"pending_email_verification",
pending_email_verification:"authenticated"
}, o = function(e) {
if (_i_("3dab:9672897e"), "https:" === location.protocol && booking.env.b_is_app) {
if (-1 !== e.indexOf("protocol=http") && -1 === e.indexOf("protocol=https")) return _r_(e.replace("protocol=http", "protocol=https_www"));
if (-1 !== e.indexOf("protocol=https")) return _r_(e.replace("protocol=https", "protocol=https_www"));
}
return _r_(e);
};
function _(e, t) {
switch (_i_("3dab:1c857df8"), e = e || r, t.type) {
case n.ACTION_TYPES.AUTH_NEXT_STEP_EMAIL.NEXT_STEP:
return _r_(Object.assign({}, e, {
status:a[e.status],
is_in_loading_state:!1,
is_in_error_state:!1
}));

case n.ACTION_TYPES.AUTH_NEXT_STEP_EMAIL.LOADING:
return _r_(Object.assign({}, e, {
is_in_loading_state:!0
}));

case n.ACTION_TYPES.AUTH_NEXT_STEP_EMAIL.ERROR:
return _r_(Object.assign({}, e, {
is_in_error_state:!0,
is_in_loading_state:!1,
message:t.message
}));

case n.ACTION_TYPES.AUTH_NEXT_STEP_EMAIL.CANCEL:
return _r_(Object.assign({}, {}));

case n.ACTION_TYPES.AUTH_NEXT_STEP_EMAIL.FIX_FORM_ACTION:
return _r_(Object.assign({}, e, {
b_form_action:o(e.b_form_action)
}));

default:
return _r_(e);
}
_r_();
}
i.exports = _, _r_();
}), B.define("component/profile/2fa/auth_next_step__email", function(e, t, i) {
"use strict";
_i_("3dab:35ca412c");
var n = e("./store"), r = e("./constants"), a = e("jstmpl").translations, o = e("user-access-menu/api"), _ = {}, s = -1, d = a("deals_flexi_calendar_error");
_[s] = a("auth_next_step_error_empty_verification_code"), i.exports = e("component/reactive").extend({
initialize:function() {
_i_("3dab:4887e350");
var e = this;
n.subscribe(function() {
_i_("3dab:7f0c54b0"), e.render(), _r_();
}), this.events({
"click [data-confirm-phone]":this.confirmPhone,
"click [data-dismiss]":this.dismiss,
"submit [data-sign-in]":this.sendSecondFactor
}), this.render(), this.$form = this.$el.find("form"), n.dispatch({
type:r.ACTION_TYPES.AUTH_NEXT_STEP_EMAIL.FIX_FORM_ACTION
}), _r_();
},
template:"auth_next_step__email",
getState:function() {
return _i_("3dab:3f877402"), _r_(n.getState().auth_next_step__email);
},
formData:function() {
_i_("3dab:10659499");
var e, t = this.$el, i = {};
return e = t.is("form") ? t :t.find("form:eq(0)"), e.serializeArray().forEach(function(e) {
_i_("3dab:a203b90a"), i[e.name] = e.value, _r_();
}), _r_(i);
},
loading:function() {
_i_("3dab:f0524b87"), n.dispatch({
type:r.ACTION_TYPES.AUTH_NEXT_STEP_EMAIL.LOADING
}), _r_();
},
sendSecondFactor:function(e) {
_i_("3dab:629baae0");
var t = $(this.$el.find("form [name=confirmation_code]")).val() || "";
if (e.preventDefault(), t) {
var i = $(".js-user-access-form--signin"), a = $("input[name=second_factor]", i);
a.val(t);
var _ = $("input[name=recovery_2fa]", i)[0];
_ ? $(_).val(1) :i.prepend('<input type="hidden" name="recovery_2fa" value="1">');
var d = o.send({
target:$(".js-user-access-form--signin")
});
$(_).val(""), this.loading(), d.then(function() {
_i_("3dab:2bfc8bfa"), n.dispatch({
type:r.ACTION_TYPES.AUTH_NEXT_STEP_EMAIL.NEXT_STEP
}), _r_();
}, function(e) {
_i_("3dab:8ed6692c");
var t = Object.assign({}, e);
n.dispatch({
type:r.ACTION_TYPES.AUTH_NEXT_STEP_EMAIL.ERROR,
message:t.msg
}), _r_();
});
} else this.handleError(s);
_r_();
},
handleError:function(e) {
_i_("3dab:32b9ea55");
var t = _[e] || d;
n.dispatch({
type:r.ACTION_TYPES.AUTH_NEXT_STEP_EMAIL.ERROR,
message:t
}), _r_();
},
confirmPhone:function(e) {
_i_("3dab:89c4fcba"), e.preventDefault();
var t = o.send({
target:this.$form
});
this.loading(), t.then(function() {
_i_("3dab:8b22a936"), n.dispatch({
type:r.ACTION_TYPES.AUTH_NEXT_STEP_EMAIL.NEXT_STEP
}), _r_();
}, function(e) {
_i_("3dab:1ea8ab8c");
var t = Object.assign({}, e);
n.dispatch({
type:r.ACTION_TYPES.AUTH_NEXT_STEP_EMAIL.ERROR,
message:t.msg
}), _r_();
}), _r_();
},
dismiss:function(e) {
_i_("3dab:e03b5585"), n.dispatch({
type:r.ACTION_TYPES.AUTH_NEXT_STEP_EMAIL.CANCEL
}), _r_();
}
}), _r_();
}), B.define("components/security/shape", function(e, t, i) {
_i_("3dab:0e0f4ee6");
var n, r = function() {
_i_("3dab:30e918cd");
var e = document.createElement("script");
e.src = "/static/bookingcommon.js", document.body.appendChild(e), _r_();
}, a = function() {
_i_("3dab:9c202039"), n || (r(), n = !0), _r_();
};
i.exports = {
init:a
}, _r_();
}), B.when({
condition:B.env.b_might_run_shape,
events:[ "auth-dialog:show" ],
experiment:"OcRSYcTUQfbJKEeOXNQOWXOVKPDTLLFSWe",
stage:1
}).run(function(e) {
_i_("3dab:02754878");
var t = e("components/security/shape");
t.init(), _r_();
}), B.define("utils/throttled", function(e, t, i) {
_i_("3dab:c05117b8"), i.exports = function(e, t) {
_i_("3dab:6684d35e");
var i, n = 0;
function r() {
_i_("3dab:f991b93f");
for (var a = this, o = new Array(arguments.length), _ = 0, s = arguments.length; s > _; _++) o[_] = arguments[_];
var d = +new Date();
if (n && clearTimeout(n), t > d - i) return n = setTimeout(function() {
_i_("3dab:74556d05"), r.apply(a, o), _r_();
}, t), _r_();
i = d, setTimeout(function() {
_i_("3dab:68a22e39"), e.apply(a, o), _r_();
}), _r_();
}
return _r_(r);
}, _r_();
}), function(e, t) {
_i_("3dab:92e4d814");
var i = B;
i.bookingSticker = function() {
_i_("3dab:c2f02a97");
var t, n, r, a, o, _, s, d, c, l, u, f, h, b, p = 0;
i.bookingSticker.stickToZIndex = "undefined" == typeof i.bookingSticker.stickToZIndex ? 999 :i.bookingSticker.stickToZIndex, i.bookingSticker.stickedElements = "undefined" == typeof i.bookingSticker.stickedElements ? [] :i.bookingSticker.stickedElements, i.bookingSticker.stickers = "undefined" == typeof i.bookingSticker.stickers ? [] :i.bookingSticker.stickers;
var g = function(e) {
_i_("3dab:f691e65e"), a.scrollTop() + p > h - n.data("stick-to-offset") && v(), a.scrollTop() + p <= h - n.data("stick-to-offset") && y(), _r_();
}, m = function(e) {
_i_("3dab:15006df0"), n.css("width", "auto"), r.css("width", "auto").html(n.html()), r.is(":visible") ? (n.css("width", r.width()), E(r)) :(n.css("width", n.width()), E(n)), C(), g(), _r_();
}, v = function() {
_i_("3dab:7702927f");
var e = -parseInt(n.css("top"), 10) || 0, t = parseInt(n.height(), 10);
if (t > e && -1 === i.bookingSticker.stickedElements.indexOf(n) && (w(), x()), a.scrollTop() + t + n.data("stick-to-offset") > C()) return e = -(a.scrollTop() + parseInt(n.height(), 10) - C()), n.css({
top:e
}), e > t && (k(), x()), _r_();
if (b) return n.css({
top:n.data("stick-to-offset")
}), _r_();
return E(n), n.addClass("sticked").css({
top:n.data("stick-to-offset"),
"z-index":i.bookingSticker.stickToZIndex
}).before(r), i.bookingSticker.stickToZIndex--, b = !0, w(), x(), B.hotel.Events && B.events.emit(B.hotel.Events.RT.STICKY_STUCK, n), _r_();
}, y = function() {
if (_i_("3dab:9682d906"), !b) return _r_();
return n.removeClass("sticked").css({
top:u,
"z-index":f
}), r.remove(), i.bookingSticker.stickToZIndex++, b = !1, k(), x(), B.hotel.Events && B.events.emit(B.hotel.Events.RT.STICKY_RELEASE, n), _r_();
}, w = function() {
_i_("3dab:37ddd753"), -1 === i.bookingSticker.stickedElements.indexOf(n) && (i.bookingSticker.stickedElements.push(n), M()), _r_();
}, k = function() {
_i_("3dab:27d636e7");
var e = i.bookingSticker.stickedElements.indexOf(n);
-1 !== e && (i.bookingSticker.stickedElements.splice(e, 1), M()), _r_();
}, M = function() {
_i_("3dab:0216a444"), i.bookingSticker.stickedElements.sort(function(e, t) {
if (_i_("3dab:50795169"), e.data("elem-original-offset-top") > t.data("elem-original-offset-top")) return _r_(1);
if (e.data("elem-original-offset-top") < t.data("elem-original-offset-top")) return _r_(-1);
return _r_(0);
}), _r_();
}, x = function() {
if (_i_("3dab:fee43e12"), i.bookingSticker.stickedElements.length > 0) for (var e = 0; e < i.bookingSticker.stickedElements.length; e++) {
var t = i.bookingSticker.stickedElements[e], n = t.data("initial-offset") || 0;
if (t.data("stick-to-offset", n), e > 0) {
for (var r = e, a = e - 1, o = n; a >= 0; ) o += i.bookingSticker.stickedElements[a].outerHeight(), a--;
i.bookingSticker.stickedElements[r].data("stick-to-offset", o);
}
}
_r_();
}, C = function() {
_i_("3dab:40cd5919");
var e = t && t.offset && t.offset();
return c = e ? "html" === t.selector ? 0 :parseInt(e.top, 10) :0, o = parseInt(t.css("border-bottom-width"), 10), s = parseInt(t.css("padding-bottom"), 10), _ = c + parseInt(t.height(), 10) + s + o, _r_(_);
}, E = function(t) {
_i_("3dab:b5ac8b2a");
var i = e(t), r = [ "inline", "inline-block", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group" ];
n.css({
width:i.width()
}), r.indexOf(i.css("display")) > 1 && n.find("td, th").each(function(t, n) {
_i_("3dab:677aaf6e");
var r = e(i.find("td, th").get(t));
e(n).css({
width:r.width()
}), _r_();
}), _r_();
}, T = function() {
_i_("3dab:f1a28ae0"), a.bind({
scroll:g,
resize:m,
load:m
}), _r_();
}, S = function() {
_i_("3dab:1eab68ac"), h = r.is(":visible") ? parseInt(r.offset().top, 10) :parseInt(n.offset().top, 10), m(), x(), g(), _r_();
}, A = function(o, _, s) {
if (_i_("3dab:d90d700e"), t = e(_ ? _ :"html"), d = parseInt(t.height(), 10), n = e(o), l = parseInt(n.height(), 10), s = s || {}, !n.length) return _r_();
if (l >= d) return _r_();
var c = i.bookingSticker.stickers;
-1 === c.indexOf(this) && c.push(this), a = e(window), elemOriginalCSSDisplay = n.css("display"), emOriginalCSSTop = n.css("top"), f = n.css("z-index"), C(), h = parseInt(n.offset().top, 10), n.data("elem-original-offset-top", h), n.data("stick-to-offset", 0), n.data("initial-offset", s.initialOffset), r = n.clone(!1).css({
visibility:"hidden"
}).addClass("sticked-placeholder"), E(n), T(), w(), x(), g(), _r_();
};
return _r_({
init:A,
restartPosition:S,
getElement:function() {
return _i_("3dab:7b8286fe"), _r_(n);
},
getOffsetTopBoundaries:function() {
return _i_("3dab:b8f399db"), _r_({
lowerBound:h,
upperBound:C() - parseInt(n.height(), 10)
});
},
isSticked:function() {
return _i_("3dab:e83045a1"), _r_(b);
}
});
}, i.bookingSticker.update = function() {
_i_("3dab:db8570e1");
var n = i.bookingSticker.stickers || [];
if (!n.length) return _r_();
e.each(n, function(e, t) {
_i_("3dab:af820f87"), t.restartPosition(), _r_();
}), t.events.emit("booking_sticker:update"), _r_();
}, B.define("booking-sticker", function() {
return _i_("3dab:407b8700"), _r_(i.bookingSticker);
}), _r_();
}(window.jQuery, window.booking), B.define("main/old_calendar1", function(e, t, i) {
_i_("3dab:56140853");
var n = e("jquery"), r = booking.env, a = 1e3 * r.b_timestamp, o = Math.abs(+new Date() - new Date(a)) >= 864e5, _ = o;
i.exports = {
version:1.4,
datefmt:"YYYY MM DD",
minimalDays:1,
maximalDays:30,
oldDays:1,
from:{
date:null,
day:null,
month:null,
year:null
},
till:{
date:null,
day:null,
month:null,
year:null
},
viewDateFrom:_ ? new Date(a) :new Date(),
viewDateTill:_ ? new Date(a) :new Date(),
oneDayInMS:864e5,
calendars:[],
calendarTypes:{
checkin_day:{
isTill:!1,
isDay:!0
},
checkin_monthday:{
isTill:!1,
isDay:!0
},
checkin_year_month:{
isTill:!1,
isDay:!1
},
pre_checkin_year_month:{
isTill:!1,
isDay:!1
},
checkout_day:{
isTill:!0,
isDay:!0
},
checkout_monthday:{
isTill:!0,
isDay:!0
},
checkout_year_month:{
isTill:!0,
isDay:!1
},
pre_checkout_year_month:{
isTill:!0,
isDay:!1
},
start_monthday:{
isTill:!1,
isDay:!0
},
start_year_month:{
isTill:!1,
isDay:!1
},
end_monthday:{
isTill:!0,
isDay:!0
},
end_year_month:{
isTill:!0,
isDay:!1
}
},
maxMonthsInFuture:12,
maxDaysInFuture:365,
maxDaysInThePast:1,
syncDate:null,
userServDate:!1,
hasDataRange:!1,
maxYearsInFuture:function() {
_i_("3dab:7901caeb"), this.today = _ ? this.noHourDate(new Date(a)) :this.noHourDate(null), this.maxMonthsInFuture = 12, this.maxDaysInFuture = parseInt(r.calendar_days_allowed_number), this.tomorrow = this.dateAfterDays(this.today, 1), this.endOfYear1 = this.dateAfterDays(this.today, this.maxDaysInFuture), this.endOfYear2 = this.dateAfterDays(this.today, this.maxDaysInFuture - 1), _r_();
},
syncDates:function(e, t, i, r, a) {
_i_("3dab:75f81d1a"), B.et.stage("EUcKBSMJcQQOJLBWHHT", 1), n(".b_check_blocked").removeClass("b_check_blocked"), a || (n("#availcheck").attr("checked", !1), n("#define_group input, #define_group select").removeAttr("disabled"), n("#define_group").removeClass("disableme")), e ? (this.till.day = null == t ? this.till.day :t, this.till.month = null == i ? this.till.month :i, this.till.year = null == r ? this.till.year :r, null != this.till.day && null != this.till.month && null != this.till.year && (this.till.date = new Date(this.till.year + "/" + this.till.month + "/" + this.till.day + " 00:00:00"), this.viewDateTill = new Date(this.till.year + "/" + this.till.month + "/" + this.till.day + " 00:00:00"))) :(this.hasDataRange = !0, this.from.day = null == t ? this.from.day :t, this.from.month = null == i ? this.from.month :i, this.from.year = null == r ? this.from.year :r, null != this.from.day && null != this.from.month && null != this.from.year && (this.from.date = new Date(this.from.year + "/" + this.from.month + "/" + this.from.day + " 00:00:00"), this.viewDateFrom = new Date(this.from.year + "/" + this.from.month + "/" + this.from.day + " 00:00:00")));
var o = !1;
e || null == this.from.date ? e && null != this.till.date && null == this.from.date && (a || (this.from.date = this.dateAfterDays(this.till.date, ~(this.minimalDays - 1)), o = !0)) :null != this.till.date ? this.till.date <= this.from.date && (this.till.date = this.dateAfterDays(this.from.date, this.oldDays), o = !0) :a || (this.till.date = this.dateAfterDays(this.from.date, this.minimalDays), o = !0), o && (e ? (this.from.year = this.from.date.getFullYear(), this.from.month = this.from.date.getMonth() + 1, this.from.day = this.from.date.getDate(), this.viewDateFrom = new Date(this.from.year + "/" + this.from.month + "/" + this.from.day + " 00:00:00")) :(this.till.year = this.till.date.getFullYear(), this.till.month = this.till.date.getMonth() + 1, this.till.day = this.till.date.getDate(), this.viewDateTill = new Date(this.till.year + "/" + this.till.month + "/" + this.till.day + " 00:00:00")));
for (var _ = 0; _ < this.calendars.length; _++) n(this.calendars[_]).trigger("changed_date", [ e, o ]);
booking.eventEmitter.trigger("CALENDAR:dates_changed", {
type:e ? "checkout" :"checkin",
otherChanged:o,
oldApi:this
}), _r_();
},
init:function() {
if (_i_("3dab:dbcb166a"), "hotel" == booking.env.b_action) return _r_();
if (this.calendarReady) return _r_();
this.calendarReady = !0, this.maxYearsInFuture(), this.initAddHandlers(), _r_();
},
initAddHandlers:function() {
_i_("3dab:c25d0a4e");
var e = this;
n("select").each(function() {
if (_i_("3dab:2a0d00eb"), "1" == this.getAttribute("data-no-old-calendar")) return _r_(!0);
var t = n(this).attr("name");
if (t && e.calendarTypes[t]) {
B.et.stage("EUcKBSMJcQQOJLBWHHT", 2), e.calendars.push(this);
var i = n(this).val();
if ("0" != i) {
var r = e.calendarTypes[t];
if (r.isDay) r.isTill ? e.till.day = i :e.from.day = i; else {
var a = i ? i.split("-") :"";
a.length && a.length > 0 && (r.isTill ? (e.till.year = a[0], e.till.month = a[1]) :(e.from.year = a[0], e.from.month = a[1]));
}
}
n(this).bind("changed_date", function(t, i, r) {
_i_("3dab:e0d4455a"), B.et.stage("EUcKBSMJcQQOJLBWHHT", 3), n("input", this.parentNode).each(function() {
if (_i_("3dab:82b63bd4"), e.calendarTypes[n(this).attr("name")]) {
var t = e.calendarTypes[n(this).attr("name")];
t.isDay && t.isTill && null != e.till.day && n(this).val(e.till.day), t.isDay && !t.isTill && null != e.from.day && n(this).val(e.from.day), !t.isDay && t.isTill && null != e.till.month && null != e.till.year && n(this).val(e.till.year + "-" + e.till.month), t.isDay || t.isTill || null == e.from.month || null == e.from.year || n(this).val(e.from.year + "-" + e.from.month);
}
_r_();
});
var a = e.calendarTypes[n(this).attr("name")];
((i || r) && a.isTill || (!i || r) && !a.isTill) && (a.isDay ? (a.isTill && null != e.till.year && null != e.till.month || !a.isTill && null != e.from.year && null != e.from.month) && e.rebuildDaySelect(this, a.isTill) :a.isTill && null != e.till.year && null != e.till.month ? e.selectOption(this, e.till.year + "-" + e.till.month) :a.isTill || null == e.from.year || null == e.from.month || e.selectOption(this, e.from.year + "-" + e.from.month)), _r_();
}), n(this).change(function() {
_i_("3dab:194bea24");
var t, i = e.calendarTypes[n(this).attr("name")], r = n(this).val();
if (t = B.et.track("OTfdASFVFYBMFSIJWe") ? "string" == typeof r ? r.split("-") :[] :r.split("-"), "0" != r) if (n(this).parents(".newcalendar").length) {
var a = n(this).parents(".newcalendar");
t.length && t.length > 1 && (n(this).parents(".calendarTill").length ? (e.viewDateTill = new Date(t[0] + "/" + t[1] + "/" + e.viewDateTill.getDate() + " 00:00:00"), e.rebuildCalendarTable(n("table", a).get(0), !0, e.viewDateTill.getMonth() + 1, e.viewDateTill.getFullYear())) :(e.viewDateFrom = new Date(t[0] + "/" + t[1] + "/" + e.viewDateFrom.getDate() + " 00:00:00"), e.rebuildCalendarTable(n("table", a).get(0), !1, e.viewDateFrom.getMonth() + 1, e.viewDateFrom.getFullYear())));
} else e.syncDates(i.isTill, i.isDay ? r :null, i.isDay ? null :t.length && t.length > 1 ? t[1] :null, i.isDay ? null :t[0]);
_r_();
});
}
_r_();
}), n(".newcalendar").each(function() {
_i_("3dab:ac2625c0"), B.et.stage("EUcKBSMJcQQOJLBWHHT", 4), n(this).hasClass("calendarTill") ? e.rebuildCalendarTable(n("table", this).get(0), !0, e.viewDateTill.getMonth() + 1, e.viewDateTill.getFullYear()) :e.rebuildCalendarTable(n("table", this).get(0), !1, e.viewDateFrom.getMonth() + 1, e.viewDateFrom.getFullYear()), e.calendars.push(this), n(this).bind("changed_date", function(t, i, r) {
if (_i_("3dab:2414199e"), n(this).hasClass("calendarTill")) {
if (null != e.till.month && null != e.till.year) {
var a = e.till.day ? e.till.day :1;
e.viewDateTill = new Date(e.till.year + "/" + e.till.month + "/" + a + " 00:00:00"), e.rebuildCalendarTable(n("table", this).get(0), !0, e.till.month, e.till.year);
}
} else if (null != e.from.month && null != e.from.year) {
var a = e.from.day ? e.from.day :1;
e.viewDateFrom = new Date(e.from.year + "/" + e.from.month + "/" + a + " 00:00:00"), e.rebuildCalendarTable(n("table", this).get(0), !1, e.from.month, e.from.year);
}
e.updateLabels(), _r_();
}), n(".nextmonth", this).bind("click", function() {
if (_i_("3dab:ca8f7d2d"), !n(this).hasClass("disabled")) {
var t = n(this).parents(".newcalendar").get(0);
n(this).parents(".calendarTill").length ? (e.viewDateTill = e.dateAfterDays(e.viewDateTill, 0, 1), e.rebuildCalendarTable(n("table", t).get(0), !0, e.viewDateTill.getMonth() + 1, e.viewDateTill.getFullYear())) :(e.viewDateFrom = e.dateAfterDays(e.viewDateFrom, 0, 1), e.rebuildCalendarTable(n("table", t).get(0), !1, e.viewDateFrom.getMonth() + 1, e.viewDateFrom.getFullYear()));
}
return this.blur(), _r_(!1);
}), n(".prevmonth", this).bind("click", function() {
if (_i_("3dab:f12f0082"), !n(this).hasClass("disabled")) {
var t = n(this).parents(".newcalendar").get(0);
n(this).parents(".calendarTill").length ? (e.viewDateTill = e.dateAfterDays(e.viewDateTill, 0, -1), e.rebuildCalendarTable(n("table", t).get(0), !0, e.viewDateTill.getMonth() + 1, e.viewDateTill.getFullYear())) :(e.viewDateFrom = e.dateAfterDays(e.viewDateFrom, 0, -1), e.rebuildCalendarTable(n("table", t).get(0), !1, e.viewDateFrom.getMonth() + 1, e.viewDateFrom.getFullYear()));
}
return this.blur(), _r_(!1);
}), n("select", this).each(function() {
_i_("3dab:07ebf352");
var t = n(this).attr("name"), i = n(this).val();
e.calendarTypes[t] ? e.calendarTypes[t].isDay || (n(this).attr("name", "pre_" + t), n(this.parentNode).append('<input type="hidden" name="' + t + '" value="' + i + '" />')) :n(this).change(function() {
_i_("3dab:707438a2");
var t = n(this).val();
if ("0" != t) {
var i = t.split("-");
if (i.length && i.length > 0) {
var r = n(this).parents(".newcalendar");
n(this).parents(".calendarTill").length ? (e.viewDateTill = new Date(i[0] + "/" + i[1] + "/1 00:00:00"), e.rebuildCalendarTable(n("table", r).get(0), !0, i[1], i[0])) :(e.viewDateFrom = new Date(i[0] + "/" + i[1] + "/1 00:00:00"), e.rebuildCalendarTable(n("table", r).get(0), !1, i[1], i[0]));
}
}
_r_();
}), _r_();
}), _r_();
}), null != this.from.year && null != this.from.month && null != this.from.day && e.syncDates(!1, this.from.day, this.from.month, this.from.year, !0), null != this.till.year && null != this.till.month && null != this.till.day && e.syncDates(!0, this.till.day, this.till.month, this.till.year, !0), _r_();
},
updateLabels:function() {
_i_("3dab:93025717");
var e = Math.round((this.noHourDate(this.till.date) - this.noHourDate(this.from.date)) / this.oneDayInMS);
if (e > 0 && r.night && r.nights) {
var t = 1 == e ? "1 " + r.night :r.nights.replace("{amount}", e);
t.indexOf(e) < 0 && (t = e + " " + t), n(".dayamount").length && n(".dayamount").text(t), n(".no_nights_helper").length && n(".no_nights_helper").text("(" + t + ")");
}
n(".calendarFrom").length && (n(".calendarFrom .ct_month").text(r.b_short_months[parseInt(this.from.month) - 1]), n(".calendarFrom .ct_day").text(this.from.day), n(".calendarTill").length && (n(".calendarTill .ct_month").text(r.b_short_months[parseInt(this.till.month) - 1]), n(".calendarTill .ct_day").text(this.till.day))), _r_();
},
updatePrevNextLinks:function(e, t) {
_i_("3dab:f5893b78");
var i = this, r = this.dateAfterDays(this.tomorrow, this.maxDaysInFuture - 2), a = this.maxDaysInThePast > 1 ? this.dateAfterDays(this.tomorrow, ~this.maxDaysInThePast) :this.tomorrow, o = n(t).parents(".calendarTill").length ? this.viewDateTill :this.viewDateFrom;
n(".nextmonth", t.parentNode).each(function() {
_i_("3dab:a8aea86f"), i.dateAfterDays(o, 0, 1, !0) > r ? n(this).addClass("disabled") :n(this).removeClass("disabled"), _r_();
}), n(".prevmonth", t.parentNode).each(function() {
_i_("3dab:67e402ec"), i.dateAfterDays(o, 0, -1, !0) < a ? n(this).addClass("disabled") :n(this).removeClass("disabled"), _r_();
}), this.selectOption(n("select", t.parentNode), o.getFullYear() + "-" + (o.getMonth() + 1)), _r_();
},
rebuildCalendarTable:function(e, t, i, a) {
_i_("3dab:a003ab14");
var o = document.createElement("table");
n(o).html(e.innerHTML);
var _ = parseInt(new Date(a + "/" + i + "/1").getDay()) - 2;
r.sunday_first ? _ += 1 :0 > _ && (_ = 7 + _);
for (var s = o.getElementsByTagName("td"), d = 0; 42 > d; d++) {
var c = d - _, l = s[d];
if (c > 0 && c <= this.getDaysInMonth(i, a)) {
var u = new Date(a + "/" + i + "/" + c + " 00:00:00");
if (this.isValidDate(u, t)) {
var f = "";
if (u - this.today == 0 && (f += " today"), u - this.till.date == 0 && (f += t ? " selected" :" endsel"), u - this.from.date == 0 && (f += t ? " endsel" :" selected"), u < this.till.date && u > this.from.date && (f += " inbetween"), booking.env.b_fd_hotel_dates) for (var h = 0; h < booking.env.b_fd_hotel_dates.length; h++) if (booking.env.b_fd_hotel_dates[h]) {
n.lst = booking.env.b_fd_hotel_dates[h].split("-");
var b = new Date(Number(n.lst[0]), Number(n.lst[1]) - 1, Number(n.lst[2]));
u - b == 0 && (f += " flashdeals");
}
l.innerHTML = '<a href="#" class="' + f + '">' + c + "</a>";
} else u - this.today == 0 ? l.innerHTML = '<span class="today">' + c + "</span>" :l.innerHTML = "<span>" + c + "</span>";
} else l.innerHTML = "&nbsp;";
}
n(e).html(o.innerHTML), this.updatePrevNextLinks(!0, e), _r_();
},
isValidDate:function(e, t) {
_i_("3dab:64c3d483");
var i = this.maxDaysInThePast > 1 ? this.dateAfterDays(this.today, ~this.maxDaysInThePast) :this.today;
return _r_(!(i > e || t && e < this.tomorrow && this.maxDaysInThePast < 2 || e > this.endOfYear1 || !t && e > this.endOfYear2));
},
rebuildDaySelect:function(e, t) {
_i_("3dab:66e789bc");
var i = "&nbsp;";
if (t) {
var a = this.till.month, o = this.till.year, _ = this.till.day;
(null == _ || booking.env.keep_day_month) && (i = '<option style="text-transform:capitalize;" value="0">' + r.sbox_day + "</option>");
} else {
var a = this.from.month, o = this.from.year, _ = this.from.day;
(null == _ || booking.env.keep_day_month) && (i = '<option style="text-transform:capitalize;" value="0">' + r.sbox_day + "</option>");
}
n(e).html(i);
var s = this.getDaysInMonth(a, o);
function d(e, t, i) {
_i_("3dab:04fde93f");
var n = new Date(Date.UTC(e, t - 1, i)), i = n.getUTCDay();
return i = i > 0 ? i - 1 :6, _r_(i);
}
for (var c = 1; s >= c; c++) {
var l = d(o, a, c), u = r.b_simple_weekdays_for_js[l] + " " + c;
("ja" == r.b_lang || "zh" == r.b_lang || "ko" == r.b_lang || "hu" == r.b_lang) && (u = "ja" == r.b_lang || "zh" == r.b_lang || "ko" == r.b_lang ? c + B.env.sbox_day + " " + r.b_simple_weekdays_for_js[l] :c + " " + r.b_simple_weekdays_for_js[l]), n(e).append('<option value="' + c + '"' + (_ == c ? ' selected="selected"' :"") + ">" + u + "</option>");
}
_r_();
},
noHourDate:function(e) {
_i_("3dab:9e5ba172");
var t = "undefined" == typeof e || null === e ? this.userServDate ? new Date(this.syncDate) :new Date() :e;
return t.setHours(0), t.setMilliseconds(0), t.setMinutes(0), t.setSeconds(0), _r_(t);
},
getDaysInMonth:function(e, t) {
_i_("3dab:58268681");
var i = [ 31, function() {
return _i_("3dab:2e8ef3bb"), _r_(t % 4 === 0 && t % 100 !== 0 || t % 400 === 0 ? 29 :28);
}(), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
return _r_(i[e - 1]);
},
selectOption:function(e, t, i) {
_i_("3dab:806632f8");
for (var r, a, o, _ = !1, s = n("option", e), d = 0; d < s.length; d++) r = s[d], a = n(r), o = a.text(), t && "" != t && (a.val() == t ? (r.selected = !0, _ = !0) :s[d].selected = !1), i && "" != i && (o == t ? (r.selected = !0, _ = !0) :r.selected = !1);
return _r_(_);
},
dateAfterDays:function(e, t, i, n) {
_i_("3dab:c1d85026");
var r = this.oneDayInMS * t, a = 12;
if (n && e.setDate(1), i && ((i > a || -1 * a > i) && (e.setFullYear(e.getFullYear() + parseInt(i / a)), i %= a), 0 != i)) {
var o = e.getMonth();
o + i > a ? (e.setFullYear(e.getFullYear() + 1), e.setMonth(o + i - a)) :0 > o + i ? (e.setFullYear(e.getFullYear() - 1), e.setMonth(o + i + a)) :e.setMonth(o + i);
}
var _ = new Date(1 * this.noHourDate(e) + r);
if (e.getTimezoneOffset() != _.getTimezoneOffset()) {
var s = e.getTimezoneOffset() - _.getTimezoneOffset();
s = 60 * (0 > s ? ~s + 1 :s) * 1e3, s > 0 && (_ = new Date(1 * this.noHourDate(e) + r + s));
}
return _r_(_);
},
scrollHandlers:[]
}, _r_();
}), B.when({
events:"ready"
}).require([ "main/old_calendar1" ], function(e) {
_i_("3dab:e1eed346"), e.init(), _r_();
}), function() {
_i_("3dab:77b61bfc"), window.addEventListener("load", function() {
_i_("3dab:5b484b7e");
var e = booking.require("ga-tracker");
"undefined" != typeof trigger_error_template_event_tracking && trigger_error_template_event_tracking === !0 && (e.trackEvent(e.pageviewTracker, "Error Template (Aggregate)", b_errors), "" != b_this_referer && e.trackEvent(e.pageviewTracker, "Error Template (Referrer)", b_this_referer + " - " + b_errors), e.trackEvent(e.pageviewTracker, "Error Template (RequestURL)", b_this_url + " - " + b_errors)), "send_change_dates" == booking.env.b_page && ($("#message_changing-dates").fadeIn(), $("#change_dates").submit(function() {
_i_("3dab:a59e2cee");
var e = $("input[name=do]"), t = $("#change_dates input[name=checkin_date]").val(), i = $("#change_dates input[name=checkout_date]").val();
t && i && (t.length > 0 || i.length > 0) && (cin_yymm = $("#checkin_year_month").val(), cin_dd = $("#checkin_day").val(), cin_yymmdd = cin_yymm + "-" + cin_dd, cout_yymm = $("#checkout_year_month").val(), cout_dd = $("#checkout_monthday").val(), cout_yymmdd = cout_yymm + "-" + cout_dd, a = t.replace(/-0/g, "-"), b = i.replace(/-0/g, "-"), (a != cin_yymmdd || b != cout_yymmdd) && e.val("dochangedates")), _r_();
})), "mybooking" == booking.env.b_action && $("#message_changing-dates").fadeIn(), _r_();
}), _r_();
}(), booking.command("lightbox-hide", function() {
_i_("3dab:58c3be19"), booking.lightbox.hide(), _r_();
}), B.require([ "promise" ], function(e) {
_i_("3dab:2c0f7e66"), booking.command.define({
name:"show-auth-lightbox",
handler:function(e, t) {
if (_i_("3dab:8b134785"), B.env.b_run_redirect_from_app_to_book_for_login) {
var i = B.env.b_login_page_url, n = e ? e.tab :"";
n && (i += B.env.b_query_params_delimiter + "auth_tab=" + n), window.location.href = i;
} else {
if (B.authLightbox.init(), e.tab || (e.tab = "signin"), e.mode && e.mode in this.modes) return _r_(this.modes[e.mode].apply(this, arguments));
e.event = t, B.authLightbox.show(e);
}
_r_();
},
modes:{
"raise-auth":function(t) {
_i_("3dab:94e86457");
var i = function() {
_i_("3dab:40173b5b"), B.authLightbox.hide(), _r_();
}, n = new e(function(e, i) {
_i_("3dab:9f5eed76"), B.authLightbox.show(t), B.eventEmitter.one("auth-dialog:hide", i).one("UA:got_auth_level_high", function(t, n) {
_i_("3dab:6cfc0c43");
var r = $.grep(B.env.b_user_emails, function(e) {
return _i_("3dab:5bc1ca9c"), _r_(e.email === n.username);
});
r.length ? e() :i({
error:"different_email"
}), _r_();
}), _r_();
});
return n.then(i, i), _r_(n);
}
}
}), _r_();
}), B.define("component/utils/form-submit-on-click", function(e, t, i) {
"use strict";
_i_("3dab:6f765ac8");
var n = e("component"), r = e("utils");
i.exports = n.extend({
init:function() {
_i_("3dab:1b384fe7"), this.options = r.nodeData(this.el), this.$el.on("click", a.bind(this)), _r_();
}
});
function a() {
_i_("3dab:41fd958c");
var e = this.$el.find(this.options.clickOn);
e.length && this.$el.submit(), _r_();
}
_r_();
}), booking.command("show-profile-menu", function() {}), booking.command.define({
name:"show-currency-selector",
handler:function(e) {
_i_("3dab:7d2affdf"), $(".user_center_option[data-id=currency_selector] .popover_trigger").click(), _r_();
}
}), booking.command.define("social-disconnect", function(e) {
_i_("3dab:38f2c03a");
var t = B.require("lightbox"), i = $(".js-social-connect-dialog--" + e.provider + "-disconnect");
i.length && t.show(i, {
customWrapperClassName:"social-connect-dialog-wrapper"
}), _r_();
}), B.command("profile-add-email", function(e) {
if (_i_("3dab:9c98b085"), !B.require("mysettings-model-emails") || "mysettings" != booking.env.b_action) return _r_();
B.require("mysettings-model-emails").getInstance().save({
b_is_new:!0,
b_email:e.email
}), _r_();
}), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:621be65d");
var t = e("jquery");
if (!window.B || !B.env || window.self !== window.top && !+B.env.b_bookings_owned) return _r_();
if (!B.env.fe_cookie_warning) return _r_();
function i(e) {
_i_("3dab:056cd832"), B.eventEmitter && "function" == typeof B.eventEmitter.trigger && B.eventEmitter.trigger(e), _r_();
}
function n() {
_i_("3dab:923937c8"), i("COOKIE_CONSENT_PROVIDED"), _r_();
}
var r = t("#cookie_warning"), a = function(e) {
_i_("3dab:5c75ad86");
var i = t(e.target), o = i.closest("[data-gdpr-consent]");
"yes" === o.attr("data-gdpr-consent") && (r.fadeOut(1e3), n(), t(document).unbind("click", a)), _r_();
}, o = function() {
_i_("3dab:dc57517a"), r.fadeOut(1e3), n(), t(document).unbind("click", a), B.eventEmitter.off("IMPLICIT_COOKIE_CONSENT", o), _r_();
};
t(document).bind("click", a), B.eventEmitter.on("IMPLICIT_COOKIE_CONSENT", o), r.show(), i("COOKIE_WARNING_SHOWN"), B.eventEmitter && "function" == typeof B.eventEmitter.on && B.eventEmitter.on("COOKIE_CONSENT_PROVIDED", function() {
_i_("3dab:c843675f");
var e = B.env.b_analytics_tracking_string;
e && "string" == typeof e && "function" == typeof ga && (ga("require", "displayfeatures"), ga("send", "pageview", e + "&ga_virtual_pageview=1")), _r_();
}), B.eventEmitter && "function" == typeof B.eventEmitter.on && B.env && B.env.fe_tealium_src && B.eventEmitter.on("COOKIE_CONSENT_PROVIDED", function() {
_i_("3dab:6929db47");
var e = document.createElement("script");
e.src = B.env.fe_tealium_src, e.type = "text/javascript", e.async = !0, document.body.appendChild(e), _r_();
}), B.eventEmitter && "function" == typeof B.eventEmitter.on && B.eventEmitter.on("COOKIE_CONSENT_PROVIDED", function() {
_i_("3dab:03c5731a"), t.ajax("/user_gave_consent", {
type:"POST",
data:"event_name=closed_cookie_banner"
}), _r_();
}), _r_();
}), function() {
if (_i_("3dab:b9b8bb17"), !window.B || !B.env || !B.env.fe_display_package_travel_directive_warning) return _r_();
var e, t = window.jQuery, i = !1;
t(n);
function n() {
_i_("3dab:c7839548"), e = t("#package_travel_directive_warning"), "www" === B.env.b_site_type && (B.eventEmitter && "function" == typeof B.eventEmitter.on ? (B.eventEmitter.on("COOKIE_WARNING_SHOWN", a), r()) :B.env.cookie_warning ? a() :r()), e.show(), t(document).on("click", ".close_package_travel_directive_warning", o), t(document).on("click", ".expand_package_travel_directive_warning", _), _r_();
}
function r() {
_i_("3dab:f80b906e"), window.setTimeout(a, 500), _r_();
}
function a() {
if (_i_("3dab:a23455b8"), i) return _r_();
var n = t("#cookie_warning:visible");
n.length && (e.css("bottom", n.height() + "px"), i = !0), _r_();
}
function o() {
_i_("3dab:d16fe37d"), s(), e.hide(), _r_();
}
function _() {
_i_("3dab:c6770e37"), t(".package_travel_directive_warning_extra_content").show(), _r_();
}
function s() {
_i_("3dab:bdd6ec5d");
var e = B.env.b_domain_end || ".booking.com";
document.cookie = "ptdwc=1; domain=" + e + "; path=/;", _r_();
}
_r_();
}(), function(e, t) {
_i_("3dab:e3d7ca00"), e("et_copy_tracking", [ "et", "jquery" ], function(e, t) {
_i_("3dab:5e5b1729");
var i = 1e3, n = 5e3, r = [], a = t(window);
function o(i) {
_i_("3dab:b9f6c57a"), t.makeArray(document.scripts).filter(function(e) {
return _i_("3dab:2f7027e5"), _r_("track_copy" === e.type);
}).forEach(function(n) {
_i_("3dab:c7b88029");
var a = n.getAttribute("data-hash"), o = n.parentNode, _ = t(o);
o.removeChild(n), i && _.is(":visible") ? e.on("view", o).stage(a, 1) :r.push({
hash:a,
$node:_,
offsetTop:_.offset().top
}), _r_();
}), _r_();
}
function _() {
_i_("3dab:82a4de99");
var t = a.scrollTop() + a.height();
r = r.filter(function(i, n) {
if (_i_("3dab:153d5171"), i.offsetTop < t && (i.offsetTop = i.$node.offset().top, i.$node.is(":visible") && i.offsetTop < t)) return e.stage(i.hash, 1), _r_(!1);
return _r_(!0);
}), _r_();
}
return t(function() {
_i_("3dab:8f135013"), o(!0), setInterval(function() {
_i_("3dab:48f495fb"), r.length && _(), _r_();
}, i), setInterval(o, n), _r_();
}), _r_({});
}), t("et_copy_tracking"), _r_();
}(B.define, B.require), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:ebb708ed");
var t = e("events"), i = {
init:function() {
_i_("3dab:8c01a275");
var e = $("#wl252-modal-name");
if (!e.length) return _r_();
if ("true" === $.cookie("wl252-gotit") && !B.env.acc_force_show_onboarding_popup) return _r_();
booking.lightbox.show(e, {
customWrapperClassName:"wl252-modal-wrapper--styled",
hideCallBack:this.lightboxHideCallback
}, this.autoFocus.bind(this)), booking.eventEmitter.trigger("account-onboarding-modal-show"), this.addCookie(), this.initForms(), _r_();
},
lightboxHideCallback:function() {
_i_("3dab:adaefa79"), t.trigger("onboarding-lightbox-hidden"), _r_();
},
addCookie:function() {
_i_("3dab:72e8d7ae"), $.cookie("wl252-gotit", "true", {
expires:365,
path:"/",
domain:booking.env.b_domain_end
}), _r_();
},
autoFocus:function() {
_i_("3dab:ec0b3d3d"), setTimeout(function() {
_i_("3dab:40d7a501"), $("#wl252-firstname").focus(), _r_();
}, 0), _r_();
},
initForms:function() {
_i_("3dab:eb5202be");
var e = this;
$("#wl252-onboard-name, #wl252-onboard-stars").submit(function() {
_i_("3dab:7386203d"), e.showNextModal(), _r_();
}), $(".wl252-modal__skip").click(function(t) {
_i_("3dab:d64bb7df"), t.preventDefault(), e.showNextModal(), _r_();
}), $(".wl252-btn-done").click(function(e) {
_i_("3dab:4b846be2"), e.preventDefault(), booking.lightbox.hide(), window.location.reload(), _r_();
}), _r_();
},
showNextModal:function() {
_i_("3dab:a7fc946b");
var e = $(".wl252-modal--inside:visible").data("next"), t = $("#wl252-modal-" + e);
t.length ? (booking.lightbox.hide(), booking.lightbox.show(t, {
customWrapperClassName:"wl252-modal-wrapper--styled",
hideCallBack:this.lightboxHideCallback
})) :booking.lightbox.hide(), _r_();
}
};
i.init(), _r_();
}), window.switchDateStack = function(e, t) {
_i_("3dab:e565dd03");
var i = e, n = 0;
for ($(e).parents("div").length && (i = $(e).parents("div").get(0)); i; ) "div" === i.nodeName.toLowerCase() && (n++, n == t && (i.style.display = "block")), i = i.nextSibling;
_r_();
}, function() {
_i_("3dab:cb67ea76"), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:7043341e");
var t = {
init:function() {
_i_("3dab:fb7f40ec");
var e = "/resend_confirm_primary_email", t = this, i = $(".user-notification-email-confirm-resend, .js-notification-confirm-email");
this.$targetParent = i.parent(), i.click(function(n) {
_i_("3dab:d1011ce3"), n.preventDefault();
var r = $(this).data("target-url") || e;
return r && (i.hide(), t.showLoadingMsg(), $.ajax({
url:r,
dataType:"json",
data:{
aid:B.env.b_aid,
lang:B.env.b_lang
},
success:function(e) {
_i_("3dab:8c92e983"), $(".user-notification-email-confirm-default").hide(), e && "sent" === e.status ? t.showSuccessMsg() :t.showErrorMsg(), _r_();
},
error:function() {
_i_("3dab:717b878a"), $(".user-notification-email-confirm-default").hide(), t.showErrorMsg(), _r_();
}
})), _r_(!1);
}), _r_();
},
showLoadingMsg:function() {
_i_("3dab:2eb13f3c"), $(".user_resend_conf_email_status", this.$targetParent).hide(), $(".user_resend_conf_email_loading", this.$targetParent).show(), _r_();
},
showErrorMsg:function() {
_i_("3dab:21cbcc05"), $(".user_resend_conf_email_status", this.$targetParent).hide(), $(".user_resend_conf_email_retry", this.$targetParent).show(), _r_();
},
showSuccessMsg:function() {
_i_("3dab:35e58bd8"), $(".user_resend_conf_email_status", this.$targetParent).hide(), $(".user_resend_conf_email_success", this.$targetParent).show(), _r_();
}
};
t.init(), _r_();
}), _r_();
}(), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:c3d7ac70");
var t = $("#emk_header_bar");
if (!t.length) return _r_();
var i = function() {
_i_("3dab:f6037a13"), t.hide(), $("body").removeClass("emk_header"), _r_();
}, n = function() {
_i_("3dab:e4ff3880");
var e = booking.env.b_label || "";
$.ajax({
url:"/newsletter/header_bar?label=" + e,
type:"GET",
success:function() {
_i_("3dab:5709ecc5"), i(), _r_();
},
error:function() {
_i_("3dab:d298a25a"), i(), _r_();
}
}), _r_();
};
t.find(".js-close-emk-header-bar").click(function(e) {
_i_("3dab:1fab2c3d"), e.preventDefault(), n(), _r_();
}), _r_();
}), $(function() {
_i_("3dab:318ec24b");
var e = [ "item_searching", "topten", "item_volcano_eruption", "item_roomtypes", "item_pricing", "item_creditcards", "item_payments", "item_reservation_process", "item_hotelpolicies", "item_confirmation", "item_extrafacilities", "item_cancellation", "item_directions", "item_reviews" ], t = window.location.search.match(/.*?[\&\;\?]faq=([^\&\;]+)/);
if (null !== t && t.length > 1 && t[1].length) {
var i = t[1].split(",");
i.length && ($(e).each(function(e, t) {
_i_("3dab:3de40a84"), hideEl(t), _r_();
}), $.each(i, function(e, t) {
_i_("3dab:991a9bb4");
var i = $("span#" + t), n = i.prev();
i && n && t.match(/faqa\d+/) && !n.parents("span.faqA").length && (n.clone().appendTo("#faq_deeplink"), i.clone().appendTo("#faq_deeplink")), _r_();
}));
}
if ($(".staticmenustyle").children("li").children("a").each(function(e, t) {
_i_("3dab:c6f108d1"), $(t).click(function() {
_i_("3dab:f174398f"), $("#faq_deeplink").children().remove(), _r_();
}), _r_();
}), location && location.hash) {
var n = location.hash.slice(1);
if ("" != n) for (var r = 0; r < e.length; r++) {
var a = e[r];
a == "item_" + n || a == n ? showEl(a) :hideEl(a);
}
}
_r_();
}), booking.ensureNamespaceExists("feature"), booking.feature.transition = function() {
_i_("3dab:83e636cb");
var e = document.body || document.documentElement, t = e.style, i = "transition";
if ("string" == typeof t[i]) return _r_(!0);
for (var n = [ "Moz", "webkit", "Webkit", "Khtml", "O", "ms" ], i = i.charAt(0).toUpperCase() + i.substr(1), r = 0; r < n.length; r++) if ("string" == typeof t[n[r] + i]) return _r_(!0);
return _r_(!1);
}(), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:377e05cc"), $(".encrypted").each(function() {
_i_("3dab:208a890a"), $(this).html(t($(this).text())), $(this).removeClass("encrypted"), _r_();
});
function t(e) {
return _i_("3dab:0a7bfe7d"), _r_(e.replace(/[a-zA-Z]/g, function(e) {
return _i_("3dab:f20b71be"), _r_(String.fromCharCode(("Z" >= e ? 90 :122) >= (e = e.charCodeAt(0) + 13) ? e :e - 26));
}));
}
_r_();
}), booking.trapFocus = function() {
_i_("3dab:f0e58ffa");
var e, t, i = !1, n = null, r = null, a = [], o = [];
function _(i, _, c) {
if (_i_("3dab:83792434"), !i && i instanceof Node) return console.log("You must provide target container where the focus to be trapped!"), _r_();
e && s(c), e = i, n = _ || document.activeElement;
var h = f(e);
h.length && h[0].focus(), document.addEventListener("focus", l, !0), document.addEventListener("keydown", d, !0), document.addEventListener("keyup", d, !0), r = document.createElement("div"), r.setAttribute("tabindex", 0), r.addEventListener("focus", u, !0), e.appendChild(r), t = e.parentNode, t === document.body ? (a = document.querySelectorAll("body > *"), Array.prototype.forEach.call(a, function(t) {
if (_i_("3dab:66bca025"), t === e) return _r_();
"true" == t.getAttribute("aria-hidden") ? o.push(t) :t.setAttribute("aria-hidden", !0), _r_();
})) :B && B.env && B.env.b_dev_server && console.warn("trap-focus: The target element is not a direct descendant of body, therefore focus could not be trapped in it properly for screen readers! Consider appending target element to the body for better support!"), _r_();
}
function s(i) {
if (_i_("3dab:38afd117"), t === document.body && Array.prototype.forEach.call(a, function(t) {
if (_i_("3dab:32f221d6"), t === e) return _r_();
-1 == o.indexOf(t) && t.removeAttribute("aria-hidden"), _r_();
}), document.removeEventListener("focus", l, !0), document.removeEventListener("keydown", d, !0), document.removeEventListener("keyup", d, !0), i || n && n.focus(), n = null, e = null, r) {
r.removeEventListener("focus", u, !0);
var _ = r.parentNode;
_ && _.removeChild(r), r = null;
}
t = null, _r_();
}
function d(e) {
_i_("3dab:cb87d9ce"), i = e.shiftKey, _r_();
}
function c() {
_i_("3dab:6533c779");
var t = f(e);
if (!t.length) return _r_();
i ? t[t.length - 1].focus() :t[0].focus(), _r_();
}
function l(t) {
_i_("3dab:fe492bdb"), t.target instanceof Node && e.contains(t.target) || t.target && String(t.target.className || "").match(/\bforce-focusable\b/) || (t.preventDefault(), c()), _r_();
}
function u(e) {
_i_("3dab:2f542439"), e.preventDefault(), c(), _r_();
}
function f(e) {
_i_("3dab:25d669b6");
var t = e.querySelectorAll("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]");
return _r_(Array.prototype.filter.call(t, function(e) {
return _i_("3dab:f737424e"), _r_(e.offsetWidth > 0 && e.offsetHeight > 0);
}));
}
return _r_({
trap:_,
release:s
});
}(), B.define("trap-focus", booking.trapFocus), booking.jstmpl("bh_carousel_property_card", function() {
_i_("3dab:f6f11782");
var e, t = [ "\n  ", '\n    <a target="_blank" href="', 'bhc_from_index=1" class="bh-carousel--card">\n        <div class="bh-carousel--card-image">\n            <div\n              class="bh-carousel--card-image-div"\n              style="background-image: url(\'', '\')"\n            ></div>\n            <div class="bh-carousel--price-overlay ', "bh-carousel--price-overlay-rtl", '">\n                ', "\n                ", "/private/bh_index_carousel_starting_from/name", '\n            </div>\n        </div>\n        <div class="bh-carousel--card-desc">\n            <div class="wrap-for-ellipsis">\n              <h3>', "</h3>\n            </div>\n            <p>", "</p>\n\n            \n            \n            ", " ", "/private/review_adj_very_poor/name", "/private/review_adj_poor/name", "/private/review_adj_disappointing/name", "/private/review_adj_average_passable/name", "/private/review_adj_average_okay/name", "/private/review_adj_pleasant/name", "/private/review_adj_good/name", "/private/review_adj_very_good/name", "/private/review_adj_fabulous/name", "/private/review_adj_superb/name", "/private/review_adj_exceptional/name", "/private/comp_fd_lp_header_rs/name", "", '<div class="', '"> <div class="bui-review-score__badge" role="link" aria-label="', '"> ', " </div> ", '<div class="bui-review-score__content"> <div class="bui-review-score__title" aria-label="', '<span class="recent-review-score-mdot__block-icon"> ', "iconset/trend_up_right", "large", " </span> ", "</div> ", '<div class="bui-review-score__text"> ', "/private/comp_num_reviews_sr_page/name", "\n            ", "\n            \n            \n\n            ", "\n\n\n\n\n\n\n", '\n	<div style="color:#fff;background:#ff0000;padding:0.5em;border-radius:0.5em;max-width:30em;">Uh oh! looks like you are giving me a formatted score value, please give me a non formatted one</div>\n', "\n\n\n", "\n	", "\n", "\n\n", "none", "auto", "num_reviews_sr_page", "\n\n\n\n", "\n    ", "\n\n    ", "   ", "        ", "             ", "    ", "     ", "         ", "      ", "  ", "\n\n	", "\n	\n	", "\n		", "review-score-widget__", "review-score-widget__score-only ", "review-score-widget__12 ", "review-score-widget__14 ", "review-score-widget__20 ", "review-score-widget__24 ", " review-score-widget ", " review-score-widget__no-subtext", " review-score-widget__flipped", 'id="', '"', "\n\n\n\n\n\n\n\n\n", "\n		<", 'a href="', ' target="', "span", ' class="review-score-widget__text" role="link" aria-label="', "/private/a11y_adjective_rating/name", '">\n			', "\n		</", "a", ">\n	", "span\n        ", ' class="review-score-widget__subtext" role="link" aria-label="', "/private/acc_sr_review_score_rated_with_score_end/name", '"\n        ', '\n            data-et-view="', ':2"\n        ', "\n        >\n        \n        ", "/private/ugcc_sr_num_plus_reviews/name", "50", "\n        ", "\n\n\n\n\n", "\n\n	\n	\n	\n\n	\n\n	<span\n		", '\n		class="', " review-score-widget__debug", '"\n			', "\n				", "\n			", '\n				data-et-view="', "\n	>\n		", "\n			\n		", "\n\n		", "\n\n		\n		", "\n\n			", "\n				\n				", "\n	<", ' class="review-score-badge" role="link" aria-label="', "/private/a11y_rating_score_for_screenreader/name", '">\n		', "\n	</", ">\n", "\n					\n					", "\n					", '\n						<span class="review-score-widget__body">\n							', "\n							", "\n						</span>\n					", '\n					<span class="review-score-widget__body">\n						', "\n						", "\n					</span>\n				", "\n	</span>\n\n	\n	\n\n", "\n\n\n\n\n\n\n\n\n\n", "\n	\n	\n", "\n\n            \n            \n            ", "\n            \n            \n\n        </div>\n    </a>\n  " ], i = [ "b_bh_properties", "delimeter", "b_lang_is_rtl", "fe_price_property", "fe_classes", "fe_modifier_outline", "fe_modifier_end", "fe_modifier_inverse", "fe_modifier_inline", "fe_modifier_text", "fe_modifier_small", "fe_modifier_smaller", "fe_allow_zero", "fe_score", "fe_show_adjective", "fe_custom_adjective", "fe_adjective_text", "fe_adjective", "fe_hide_low_adjectives", "fe_can_show_adjective", "fe_score_formatted", "b_site_type", "b_recent_review_score", "b_recent_review_users", "fe_reviews_number", "b_dev_server", "score", "dont_format_score", "fe_text", "text", "fe_subtext", "subtext", "fe_widget_subtext", "sample_size", "fe_formatted_sample_size", "align", "b_action_name_is_searchresults", "b_action_name_is_hotel", "b_is_desktop_site", "wrapper_tag_name", "fe_review_score_word_class_list", "fe_review_score", "custom_class", "review_adj_very_poor", "review_adj_poor", "review_adj_disappointing", "review_adj_average_passable", "review_adj_average_okay", "review_adj_pleasant", "low_score_adjectives", "fd_lp_header_rs", "review_adj_good", "review_adj_very_good", "review_adj_fabulous", "fe_review_score_word_copy", "review_adj_exceptional", "fe_widget_text", "prepend_text", "append_text", "prefix", "fe_score_word_name", "suffix", "fe_classname", "fe_widget_style", "style", "score_only", "fe_widget_layout", "layout", "fe_widget_align", "fe_widget_size", "size", "fe_badge_style", "fe_widget_class", "flip", "extra_classes", "fe_widget_id", "widget_id", "fe_rating", "fe_widget_text_element", "text_link_url", "text_link_target", "fe_rating_adj", "fe_widget_subtext_element", "subtext_link_url", "subtext_link_target", "review_score_widget", "extra_attributes", "track_view", "prepend_html", "badge_link_url", "badge_link_target", "fe_formatted_score", "fe_is_alt_version", "append_html", "render" ];
return _r_(function(n) {
_i_("3dab:13eeeeeb");
var r = "", a = this.fn;
function o(e) {
if (_i_("3dab:564035ef"), a.MD(i[13])) {
var n = "";
a.MJ(a.MB(i[13]) >= 1) && a.MJ(a.MB(i[13]) < 3) && (n += a.ME(t[12], a.MB, a.MN, null)), a.MJ(a.MB(i[13]) >= 3) && a.MJ(a.MB(i[13]) < 4) && (n += a.ME(t[13], a.MB, a.MN, null)), a.MJ(a.MB(i[13]) >= 4) && a.MJ(a.MB(i[13]) < 5) && (n += a.ME(t[14], a.MB, a.MN, null)), a.MJ(a.MB(i[13]) >= 5) && a.MJ(a.MB(i[13]) < 5.6) && (n += a.ME(t[15], a.MB, a.MN, null)), a.MJ(a.MB(i[13]) >= 5.6) && a.MJ(a.MB(i[13]) < 6) && (n += a.ME(t[16], a.MB, a.MN, null)), a.MJ(a.MB(i[13]) >= 6) && a.MJ(a.MB(i[13]) < 7) && (n += a.ME(t[17], a.MB, a.MN, null)), a.MJ(a.MB(i[13]) >= 7) && a.MJ(a.MB(i[13]) < 8) && (n += a.ME(t[18], a.MB, a.MN, null)), a.MJ(a.MB(i[13]) >= 8) && a.MJ(a.MB(i[13]) < 8.6) && (n += a.ME(t[19], a.MB, a.MN, null)), a.MJ(a.MB(i[13]) >= 8.6) && a.MJ(a.MB(i[13]) < 9) && (n += a.ME(t[20], a.MB, a.MN, null)), a.MJ(a.MB(i[13]) >= 9) && a.MJ(a.MB(i[13]) < 9.5) && (n += a.ME(t[21], a.MB, a.MN, null)), a.MJ(a.MB(i[13]) >= 9.5) && (n += a.ME(t[22], a.MB, a.MN, null)), a.MN(i[17], n), a.MJ(a.MB(i[18])) && a.MJ(a.MB(i[13]) < 7) && a.MN(i[17], a.ME(t[23], a.MB, a.MN, null)), e += [ a.MC(i[17]), t[24] ].join("");
}
return a.MN("fe_adjective", 0), a.MN("fe_hide_low_adjectives", 0), a.MN("fe_score", 0), _r_(e);
}
function _(e) {
return _i_("3dab:1deafff2"), a.MN("fe_rating", a.MI(a.MB(i[26])) + a.MI(0)), e += t[41], a.MN("fe_rating_adj", ""), e += t[43], a.MJ(a.MB(i[77]) >= 0) && a.MJ(a.MB(i[77]) < 3) && (e += t[42], a.MN("fe_rating_adj", "1"), e += t[43]), e += t[44], a.MJ(a.MB(i[77]) >= 3) && a.MJ(a.MB(i[77]) < 4) && (e += t[42], a.MN("fe_rating_adj", "2"), e += t[43]), e += t[44], a.MJ(a.MB(i[77]) >= 4) && a.MJ(a.MB(i[77]) < 5) && (e += t[42], a.MN("fe_rating_adj", "3"), e += t[43]), e += t[44], a.MJ(a.MB(i[77]) >= 5) && a.MJ(a.MB(i[77]) < 5.6) && (e += t[42], a.MN("fe_rating_adj", "4"), e += t[43]), e += t[44], a.MJ(a.MB(i[77]) >= 5.6) && a.MJ(a.MB(i[77]) < 6) && (e += t[42], a.MN("fe_rating_adj", "5"), e += t[43]), e += t[44], a.MJ(a.MB(i[77]) >= 6) && a.MJ(a.MB(i[77]) < 7) && (e += t[42], a.MN("fe_rating_adj", "6"), e += t[43]), e += t[44], a.MJ(a.MB(i[77]) >= 7) && a.MJ(a.MB(i[77]) < 8) && (e += t[42], a.MN("fe_rating_adj", "7"), e += t[43]), e += t[44], a.MJ(a.MB(i[77]) >= 8) && a.MJ(a.MB(i[77]) < 8.6) && (e += t[42], a.MN("fe_rating_adj", "8"), e += t[43]), e += t[44], a.MJ(a.MB(i[77]) >= 8.6) && a.MJ(a.MB(i[77]) < 9) && (e += t[42], a.MN("fe_rating_adj", "9"), e += t[43]), e += t[44], a.MJ(a.MB(i[77]) >= 9) && a.MJ(a.MB(i[77]) < 9.5) && (e += t[42], a.MN("fe_rating_adj", "10"), e += t[43]), e += t[44], a.MJ(a.MB(i[77]) >= 9.5) && (e += t[42], a.MN("fe_rating_adj", "11"), e += t[43]), _r_(e);
}
function s(r) {
return _i_("3dab:0cd625b9"), r += t[108], a.MD(i[89]) ? (r += [ t[75], a.MB(i[89]), t[72] ].join(""), a.MD(i[90]) && (r += [ t[76], a.MB(i[90]), t[72] ].join(""))) :r += t[77], r += [ t[109], (n.unshift({
review_score_number:a.MB(i[91])
}), e = a.ME(t[110], a.MB, a.MN, null), n.shift(), e), t[111], a.MB(i[91]), t[112] ].join(""), r += a.MD(i[89]) ? t[82] :t[77], r += t[113], _r_(r);
}
function d(r) {
return _i_("3dab:ca6cf971"), r += t[108], a.MD(i[89]) ? (r += [ t[75], a.MB(i[89]), t[72] ].join(""), a.MD(i[90]) && (r += [ t[76], a.MB(i[90]), t[72] ].join(""))) :r += t[77], r += [ t[109], (n.unshift({
review_score_number:a.MB(i[91])
}), e = a.ME(t[110], a.MB, a.MN, null), n.shift(), e), t[111], a.MB(i[91]), t[112] ].join(""), r += a.MD(i[89]) ? t[82] :t[77], r += t[113], _r_(r);
}
function c(r) {
_i_("3dab:f5aec8cb"), r += t[39], a.MJ(a.MC(i[25])) && a.MJ(/,/.test(a.MB(i[26]))) && (r += t[40]), r += t[41], a.MJ(a.MB(i[27])) || a.MJ(/,/.test(a.MB(i[26]))) ? (r += t[42], a.MN("fe_formatted_score", a.MB(i[26])), r += t[43]) :(r += t[42], a.MN("fe_formatted_score", a.format_review_score_plain(a.MI(0) + a.MI(a.MB(i[26])))), r += t[43]), r += t[44];
var o = "";
o += t[24], o += a.MJ(a.MB(i[29])) ? a.MB(i[29]) :t[45], o += t[24], a.MN(i[28], o), r += t[44];
var o = "";
o += t[24], a.MJ(a.MB(i[31])) ? (o += t[24], o += a.MJ(a.MB(i[31]) + "" != "none") && a.MJ(a.MB(i[28]) + "" == "none") ? t[46] :[ t[24], a.MB(i[31]), t[24] ].join(""), o += t[24]) :o += t[45], o += t[24], a.MN(i[30], o), r += t[41];
var o = "";
o += t[24], (a.MJ(a.MB(i[31])) && a.MJ(a.MB(i[31]) + "" == "auto") || a.MK(a.MB(i[31]))) && a.MJ(a.MB(i[33])) ? (o += t[24], a.MN("fe_formatted_sample_size", a.format_number(a.MB(i[33]))), o += [ t[24], (n.unshift({
num_reviews:a.MB(i[34])
}), e = a.VP(t[47], a.MO(a.MI(a.MC(i[33])) + a.MI(0), null, t[47])), n.shift(), e), t[24] ].join("")) :a.MJ(a.MB(i[31]) + "" != "none") && a.MJ(a.MB(i[31]) + "" != "auto") && (o += [ t[24], a.MB(i[31]), t[24] ].join("")), o += t[24], a.MN(i[32], o), r += t[41], a.MN("fe_is_alt_version", a.MJ(a.MB(i[35]) + "" == "right")), r += t[48], a.MJ(a.MC(i[38])) && (r += t[49], a.MJ(a.track_experiment("ZCPQLOLOLOCcBUKZaZXeIJNZGCTKe")), r += t[50], (a.MJ(a.MC(i[36])) || a.MJ(a.MC(i[37]))) && a.MJ(a.MB(i[33]) > 50) && a.MJ(a.track_experiment_stage("cce_www_sr_hp_hotel_review_buckets", 1)), r += t[50], a.MJ(a.MC(i[36])) && a.MJ(a.MB(i[33]) > 50) && a.MJ(a.track_experiment_stage("cce_www_sr_hp_hotel_review_buckets", 2)), r += t[50], a.MJ(a.MC(i[37])) && a.MJ(a.MB(i[33]) > 50) && a.MJ(a.track_experiment_stage("cce_www_sr_hp_hotel_review_buckets", 3)), r += t[43]), r += t[41], n.unshift({
low_score_adjectives:a.MB(i[49]),
score:a.MI(0) + a.MI(a.MB(i[26]))
}), r = l(r), n.shift(), r += t[44];
var o = "";
o += t[24], a.MJ(a.MB(i[29])) && a.MJ(a.MB(i[29]) + "" == "auto") || (a.MK(a.MB(i[29])) || a.MJ(a.MB(i[29]) + "" == "none")) && a.MJ(a.MB(i[32]) + "" != "") ? o += [ t[24], a.MB(i[54]), t[24] ].join("") :a.MJ(a.MB(i[29])) && a.MJ(a.MB(i[29]) + "" != "none") && (o += [ t[24], a.MB(i[29]), t[24] ].join("")), o += t[24], a.MN(i[56], o), r += t[44], a.MD(i[56]) && (r += t[42], a.MN("fe_widget_text", a.MB(i[57]) + "" + a.MB(i[56]) + a.MB(i[58])), r += t[43]), r += t[41], a.MN("score_only", a.MJ(a.MB(i[56]) + "" == "") && a.MJ(a.MB(i[32]) + "" == "")), r += t[39], n.unshift({
prefix:t[62],
score:a.MI(0) + a.MI(a.MB(i[26]))
}), r = u(r), n.shift(), r += t[43], a.MN("fe_widget_class", a.MB(i[62])), r += t[44], a.MJ(a.MB(i[26]) < 2.5) && (r += t[42], a.MN("fe_widget_class", "review-score-widget__empty"), r += t[43]), r += t[48];
var o = "";
a.MD(i[64]) && (o += [ t[62], a.MB(i[64]), t[11] ].join("")), a.MD(i[65]) && (o += t[63]), a.MN(i[63], o), r += t[48];
var o = "";
a.MJ(a.MB(i[67])) && a.MK(a.MB(i[65])) && (o += [ t[62], a.MB(i[67]), t[11] ].join("")), a.MN(i[66], o), r += t[48];
var o = "";
a.MJ(a.MB(i[35]) + "" == "right") && a.MK(a.MB(i[65])) && (o += [ t[62], a.MB(i[35]), t[11] ].join("")), a.MN(i[68], o), r += t[48];
var o = "";
a.MJ(a.MB(i[70]) + "" == "smaller") ? o += t[64] :a.MJ(a.MB(i[70]) + "" == "small") ? o += t[65] :a.MJ(a.MB(i[70]) + "" == "large") ? o += t[66] :a.MJ(a.MB(i[70]) + "" == "larger") && (o += t[67]), a.MN(i[69], o), r += t[41];
var o = "";
(a.MJ(a.MB(i[64]) + "" == "outlined") || a.MJ(a.MB(i[64]) + "" == "text-only")) && (o += [ a.MB(i[64]), t[11] ].join("")), a.MN(i[71], o), r += t[41];
var o = "";
o += [ t[68], a.MB(i[72]), t[11], a.MB(i[63]), t[11], a.MB(i[66]), t[11], a.MB(i[68]), t[11], a.MB(i[69]), t[11] ].join(""), a.MK(a.MB(i[32])) && (o += t[69]), o += t[11], a.MD(i[73]) && (o += t[70]), o += t[11], a.MD(i[74]) && (o += [ t[11], a.MB(i[74]) ].join("")), o += t[11], a.MN(i[72], o), r += t[41];
var o = "";
a.MD(i[76]) && (o += [ t[71], a.MB(i[76]), t[72] ].join("")), a.MN(i[75], o), r += t[73], r = _(r), r += t[44], r += t[44];
var o = "";
o += t[42], a.MD(i[56]) && (o += t[74], a.MD(i[79]) ? (o += [ t[75], a.MB(i[79]), t[72] ].join(""), a.MD(i[80]) && (o += [ t[76], a.MB(i[80]), t[72] ].join(""))) :o += t[77], o += [ t[78], (n.unshift({
rating_adjective:a.MB(i[81])
}), e = a.ME(t[79], a.MB, a.MN, null), n.shift(), e), t[80], a.MB(i[56]), t[81] ].join(""), o += a.MD(i[79]) ? t[82] :t[77], o += t[83]), o += t[43], a.MN(i[78], o), r += t[44];
var o = "";
o += t[42], a.MD(i[32]) && (o += t[74], a.MD(i[83]) ? (o += [ t[75], a.MB(i[83]), t[72] ].join(""), a.MD(i[84]) && (o += [ t[76], a.MB(i[84]), t[72] ].join(""))) :o += t[84], o += [ t[85], (n.unshift({
num_reviews:a.MB(i[34])
}), e = a.ME(t[86], a.MB, a.MN, null), n.shift(), e), t[87] ].join(""), a.MJ(a.MC(i[38])) && a.MJ(a.MC(i[36])) && (o += [ t[88], a.F.entities("ZCPQLOLOLOCcBUKZaZXeIJNZGCTKe"), t[89] ].join("")), o += t[90], o += a.MJ(a.MC(i[38])) && a.MJ(a.track_experiment("ZCPQLOLOLOCcBUKZaZXeIJNZGCTKe")) && a.MJ(a.MB(i[33]) > 50) ? [ t[37], (n.unshift({
num_reviews:t[92]
}), e = a.ME(t[91], a.MB, a.MN, null), n.shift(), e), t[93] ].join("") :[ t[37], a.F.entities(a.MB(i[32])), t[93] ].join(""), o += t[81], o += a.MD(i[83]) ? t[82] :t[77], o += t[83]), o += t[43], a.MN(i[82], o), r += t[94];
var o = "";
return o += [ t[95], a.MB(i[75]), t[96] ].join(""), o += a.MB(i[72]), a.MJ(a.MC(i[25])) && a.MJ(a.MC(i[21]) + "" == "www") && a.MJ(!1) && (o += t[97]), o += t[98], a.MD(i[86]) && (o += [ t[99], a.MB(i[86]), t[100] ].join("")), o += t[100], a.MD(i[87]) && (o += [ t[101], a.MC(i[87]), t[98] ].join("")), o += t[102], a.MJ(a.MB(i[26]) < 2.5) ? o += t[103] :(o += t[104], a.MD(i[88]) && (o += [ t[100], a.MB(i[88]), t[61] ].join("")), o += t[105], a.MD(i[92]) ? (o += t[106], a.MJ(a.MB(i[67]) + "" == "inline") ? (o += [ t[107], a.MB(i[82]), t[99], a.MB(i[78]), t[99] ].join(""), o = d(o), o += t[100]) :(o += t[99], a.MJ(a.MB(i[64]) + "" == "text-only") ? (o += [ t[114], a.MB(i[78]), t[115] ].join(""), o = s(o), o += [ t[115], a.MB(i[82]), t[99] ].join("")) :(o += t[114], (a.MJ(a.MB(i[56])) || a.MJ(a.MB(i[32]))) && (o += [ t[116], a.MB(i[78]), t[117], a.MB(i[82]), t[118] ].join("")), o += t[115], o = s(o), o += t[99]), o += t[100]), o += t[104]) :(o += t[106], a.MJ(a.MB(i[64]) + "" == "text-only") || a.MJ(a.MB(i[67]) + "" == "inline") ? (o += t[107], o = d(o), o += [ t[99], a.MB(i[78]), t[99], a.MB(i[82]), t[100] ].join("")) :(o += t[107], o = d(o), o += t[99], (a.MJ(a.MB(i[56])) || a.MJ(a.MB(i[32]))) && (o += [ t[119], a.MB(i[78]), t[120], a.MB(i[82]), t[121] ].join("")), o += t[100]), o += t[104]), o += t[104], a.MD(i[93]) && (o += [ t[100], a.MB(i[93]), t[61] ].join("")), o += t[104]), o += t[122], a.MN(i[85], o), r += t[123], a.MN(i[29], void 0), r += t[43], a.MN(i[31], void 0), r += t[43], a.MN(i[26], void 0), r += t[43], a.MN(i[33], void 0), r += t[43], a.MN(i[94], void 0), r += t[43], a.MN(i[74], void 0), r += t[43], a.MN(i[86], void 0), r += t[43], a.MN(i[70], void 0), r += t[43], a.MN(i[64], void 0), r += t[43], a.MN(i[67], void 0), r += t[43], a.MN(i[35], void 0), r += t[43], a.MN(i[49], void 0), r += t[43], a.MN(i[76], void 0), r += t[94], r += a.MJ(a.MB(i[94]) + "" == "no") ? t[124] :[ t[60], a.MB(i[85]), t[43] ].join(""), r += t[43], _r_(r);
}
function l(e) {
return _i_("3dab:36a0d661"), e += t[43], a.MN("fe_review_score", a.MI(a.MB(i[26])) + a.MI(0)), e += t[41], a.MN("fe_review_score_word_tag", a.MB(i[39]) || "p"), e += t[41], a.MN("fe_review_score_word_class_list", "review-score-word"), e += t[41], a.MJ(a.MB(i[41]) >= 7) && (e += t[0], a.MN("fe_review_score_word_class_list", a.MB(i[40]) + " review-score-word--highlighted"), e += t[43]), e += t[44], a.MD(i[42]) && (e += t[0], a.MN("fe_review_score_word_class_list", a.MB(i[40]) + " " + a.MB(i[42])), e += t[43]), e += t[48], a.MD(i[49]) ? (e += t[0], a.MJ(a.MB(i[41]) >= 0) && a.MJ(a.MB(i[41]) < 3) && (e += t[51], a.MN("fe_review_score_word_copy", a.MB(i[43])), e += t[52]), e += t[0], a.MJ(a.MB(i[41]) >= 3) && a.MJ(a.MB(i[41]) < 4) && (e += t[51], a.MN("fe_review_score_word_copy", a.MB(i[44])), e += t[53]), e += t[0], a.MJ(a.MB(i[41]) >= 4) && a.MJ(a.MB(i[41]) < 5) && (e += t[51], a.MN("fe_review_score_word_copy", a.MB(i[45])), e += t[54]), e += t[0], a.MJ(a.MB(i[41]) >= 5) && a.MJ(a.MB(i[41]) < 5.6) && (e += t[11], a.MN("fe_review_score_word_copy", a.MB(i[46])), e += t[11]), e += t[0], a.MJ(a.MB(i[41]) >= 5.6) && a.MJ(a.MB(i[41]) < 6) && (e += t[11], a.MN("fe_review_score_word_copy", a.MB(i[47])), e += t[55]), e += t[0], a.MJ(a.MB(i[41]) >= 6) && a.MJ(a.MB(i[41]) < 7) && (e += t[51], a.MN("fe_review_score_word_copy", a.MB(i[48])), e += t[56]), e += t[43]) :(e += t[0], a.MJ(a.MB(i[41]) >= 0) && a.MJ(a.MB(i[41]) < 7) && (e += t[11], a.MN("fe_review_score_word_copy", a.MB(i[50])), e += t[11]), e += t[43]), e += t[43], a.MJ(a.MB(i[41]) >= 7) && a.MJ(a.MB(i[41]) < 8) && (e += t[51], a.MN("fe_review_score_word_copy", a.MB(i[51])), e += t[57]), e += t[43], a.MJ(a.MB(i[41]) >= 8) && a.MJ(a.MB(i[41]) < 8.6) && (e += t[11], a.MN("fe_review_score_word_copy", a.MB(i[52])), e += t[11]), e += t[43], a.MJ(a.MB(i[41]) >= 8.6) && a.MJ(a.MB(i[41]) < 9) && (e += t[11], a.MN("fe_review_score_word_copy", a.MB(i[53])), e += t[58]), e += t[44], a.MJ(a.MB(i[41]) >= 9) && a.MJ(a.MB(i[41]) < 9.5) && (e += t[11], a.MN(i[54], a.ME(t[21], a.MB, a.MN, null)), e += t[11]), e += t[41], a.MJ(a.MB(i[41]) >= 9.5) && (e += t[11], a.MN("fe_review_score_word_copy", a.MB(i[55])), e += t[11]), e += t[41], e += t[43], _r_(e);
}
function u(e) {
return _i_("3dab:cf27855c"), e += t[48], a.MN("fe_score", a.MI(a.MB(i[26])) + a.MI(0)), e += t[41], a.MN("fe_score_word_name", ""), e += t[43], a.MJ(a.MB(i[13]) >= 0) && a.MJ(a.MB(i[13]) < 3) && (e += t[42], a.MN("fe_score_word_name", "very_poor"), e += t[43]), e += t[44], a.MJ(a.MB(i[13]) >= 3) && a.MJ(a.MB(i[13]) < 4) && (e += t[42], a.MN("fe_score_word_name", "poor"), e += t[43]), e += t[44], a.MJ(a.MB(i[13]) >= 4) && a.MJ(a.MB(i[13]) < 5) && (e += t[42], a.MN("fe_score_word_name", "disappointing"), e += t[43]), e += t[44], a.MJ(a.MB(i[13]) >= 5) && a.MJ(a.MB(i[13]) < 5.6) && (e += t[42], a.MN("fe_score_word_name", "average_passable"), e += t[43]), e += t[44], a.MJ(a.MB(i[13]) >= 5.6) && a.MJ(a.MB(i[13]) < 6) && (e += t[42], a.MN("fe_score_word_name", "average_okay"), e += t[43]), e += t[44], a.MJ(a.MB(i[13]) >= 6) && a.MJ(a.MB(i[13]) < 7) && (e += t[42], a.MN("fe_score_word_name", "pleasant"), e += t[43]), e += t[44], a.MJ(a.MB(i[13]) >= 7) && a.MJ(a.MB(i[13]) < 8) && (e += t[42], a.MN("fe_score_word_name", "good"), e += t[43]), e += t[44], a.MJ(a.MB(i[13]) >= 8) && a.MJ(a.MB(i[13]) < 8.6) && (e += t[42], a.MN("fe_score_word_name", "very_good"), e += t[43]), e += t[44], a.MJ(a.MB(i[13]) >= 8.6) && a.MJ(a.MB(i[13]) < 9) && (e += t[42], a.MN("fe_score_word_name", "fabulous"), e += t[43]), e += t[44], a.MJ(a.MB(i[13]) >= 9) && a.MJ(a.MB(i[13]) < 9.5) && (e += t[42], a.MN("fe_score_word_name", "superb"), e += t[43]), e += t[44], a.MJ(a.MB(i[13]) >= 9.5) && (e += t[42], a.MN("fe_score_word_name", "exceptional"), e += t[43]), e += t[41], a.MN("fe_classname", ""), e += t[43], a.MJ(a.MB(i[13]) >= 0) && a.MJ(a.MB(i[13]) <= 10) && (e += t[59], a.MN("fe_classname", a.MB(i[59]) + "" + a.MB(i[60]) + a.MB(i[61])), e += t[60], a.MJ(a.MB(i[13]) < 7) && (e += t[61], a.MN("fe_classname", a.MB(i[62]) + " " + a.MB(i[59]) + "low" + a.MB(i[61])), e += t[42]), e += t[44]), e += t[43], _r_(e);
}
function f(r) {
if (_i_("3dab:c6e4a047"), r += [ "", t[11] ].join(""), a.MJ(a.MB(i[13])) || a.MJ(a.MB(i[12]))) {
if (a.MN("fe_classes", "bui-review-score c-score"), a.MJ(a.MB(i[5])) && a.MN("fe_classes", a.MB(i[4]) + " bui-review-score--outline"), a.MJ(a.MB(i[6])) && a.MN("fe_classes", a.MB(i[4]) + " bui-review-score--end"), a.MJ(a.MB(i[7])) && a.MN("fe_classes", a.MB(i[4]) + " bui-review-score--inverse"), a.MJ(a.MB(i[8])) && a.MN("fe_classes", a.MB(i[4]) + " bui-review-score--inline"), a.MJ(a.MB(i[9])) && a.MN("fe_classes", a.MB(i[4]) + " bui-review-score--text"), a.MJ(a.MB(i[10])) && a.MN("fe_classes", a.MB(i[4]) + " bui-review-score--small"), a.MJ(a.MB(i[11])) && a.MN("fe_classes", a.MB(i[4]) + " bui-review-score--smaller"), a.MJ(a.MB(i[12])) && a.MN("fe_score_formatted", 0), a.MJ(a.MB(i[13])) && a.MN("fe_score_formatted", a.format_review_score_new(a.MB(i[13]))), a.MN("fe_can_show_adjective", a.MB(i[14]) || a.MB(i[15])), a.MJ(a.MB(i[19]))) {
var _ = "";
n.unshift({
fe_hide_low_adjectives:a.MB(i[18]),
fe_score:a.MB(i[13])
}), _ = o(_), n.shift(), a.MN(i[16], _), a.MJ(a.MB(i[15])) && a.MN("fe_adjective_text", a.MB(i[15]));
}
r += [ t[25], a.MC(i[4]), t[26], a.MC(i[20]), t[27], a.MC(i[20]), t[28] ].join(""), a.MD(i[16]) && (r += [ t[29], a.MC(i[16]), t[27], a.MC(i[16]), t[11] ].join(""), a.MJ(a.MC(i[21]) + "" == "mdot") && a.MJ(a.MC(i[22])) && a.MJ(a.MC(i[23])) && a.MJ(2 == a.track_experiment("HINCDOTXKeNLEHFO")) && (r += [ t[30], (n.unshift({
color:"#0AB21B",
name:t[31],
size:t[32]
}), e = a.HELPER("icon", n[0]), n.shift(), e), t[33] ].join("")), r += t[34], a.MD(i[24]) && (r += [ t[35], (n.unshift({
num_reviews:a.format_number(a.MB(i[24]))
}), e = a.ME(t[36], a.MB, a.MN, a.MO(a.MI(a.MC(i[24])) + a.MI(0), null, t[36])), n.shift(), e), t[28] ].join("")), r += t[34]), r += t[34];
}
return a.MN("fe_adjective_text", 0), a.MN("fe_allow_zero", 0), a.MN("fe_classes", 0), a.MN("fe_custom_adjective", 0), a.MN("fe_hide_low_adjectives", 0), a.MN("fe_modifier_end", 0), a.MN("fe_modifier_inline", 0), a.MN("fe_modifier_inverse", 0), a.MN("fe_modifier_outline", 0), a.MN("fe_modifier_text", 0), a.MN("fe_reviews_number", 0), a.MN("fe_score", 0), a.MN("fe_score_formatted", 0), a.MN("fe_show_adjective", 0), r += [ "", t[11] ].join(""), _r_(r);
}
r += t[0];
var h = a.MC(i[0]) || [];
n.unshift({
property:null
});
for (var b, p = 1, g = h.length; g >= p; p++) n[0].property = b = h[p - 1], r += [ t[1], (b || {}).b_home_url, a.MC(i[1]), t[2], a.STATIC_HOSTNAME(b.b_home_photo_uri, 0, 0, 0), t[3] ].join(""), a.MJ(a.MC(i[2])) && (r += t[4]), r += t[5], a.MN("fe_price_property", a.MG((b || {}).b_price_selected_currency)), r += [ t[6], (n.unshift({
price_property:a.MB(i[3])
}), e = a.ME(t[7], a.MB, a.MN, null), n.shift(), e), t[8], a.MG((b || {}).b_home_name), t[9], a.MG((b || {}).b_home_city_name), t[10] ].join(""), a.MJ(b.b_action + "" == "index") && a.MJ(b.b_site_type + "" == "www") && a.MJ(a.track_experiment("adUTWALOLOLOMAZTZWKNUfFdHMAZdJAINRe")) ? (r += t[6], n.unshift({
fe_reviews:a.MG((b || {}).b_home_review_count),
fe_score:a.MG((b || {}).b_home_review_score),
fe_show_adjective:1
}), r = f(r), n.shift(), r += t[37]) :(r += t[38], n.unshift({
sample_size:a.MG((b || {}).b_home_review_count),
score:a.MG((b || {}).b_home_review_score),
text:a.MG((b || {}).b_home_review_score_word)
}), r = c(r), n.shift(), r += t[125]), r += t[126];
return n.shift(), r += t[43], _r_(r);
});
}());

function calcage(e, t, i) {
return _i_("3dab:444efcf5"), s = (Math.floor(e / t) % i).toString(), LeadingZero && s.length < 2 && (s = "0" + s), _r_("<b>" + s + "</b>");
}

function CountBack(e) {
if (_i_("3dab:a87c1fe4"), 0 > e) {
if (document.getElementById("cntdwn")) return document.getElementById("cntdwn").innerHTML = FinishMessage, _r_();
} else e > 86400 ? (DisplayStr_days = DisplayFormat_days.replace(/%%D%%/g, calcage(e, 86400, 1e5)), document.getElementById("flash_days").innerHTML = DisplayStr_days) :document.getElementById("flash_days_wrapper").style.display = "none";
DisplayStr_hours = DisplayFormat_hours.replace(/%%H%%/g, calcage(e, 3600, 24)), DisplayStr_minutes = DisplayFormat_minutes.replace(/%%M%%/g, calcage(e, 60, 60)), DisplayStr_seconds = DisplayFormat_seconds.replace(/%%S%%/g, calcage(e, 1, 60)), document.getElementById("flash_hours").innerHTML = DisplayStr_hours, document.getElementById("flash_minutes").innerHTML = DisplayStr_minutes, document.getElementById("flash_seconds").innerHTML = DisplayStr_seconds, CountActive && setTimeout("CountBack(" + (e + CountStepper) + ")", SetTimeOutPeriod), _r_();
}

"undefined" == typeof TargetDate && (TargetDate = "12/31/2020 5:00 AM"), "undefined" == typeof DisplayFormat && (DisplayFormat = "%%D%% Days, %%H%% Hours, %%M%% Minutes, %%S%% Seconds."), "undefined" == typeof CountActive && (CountActive = !0), "undefined" == typeof FinishMessage && (FinishMessage = ""), "number" != typeof CountStepper && (CountStepper = -1), "undefined" == typeof LeadingZero && (LeadingZero = !0), CountStepper = Math.ceil(CountStepper), 0 == CountStepper && (CountActive = !1);

var SetTimeOutPeriod = 1e3 * (Math.abs(CountStepper) - 1) + 990, dthen = new Date(TargetDate), dnow = new Date();

CountStepper > 0 ? ddiff = new Date(dnow - dthen) :ddiff = new Date(dthen - dnow), gsecs = Math.floor(ddiff.valueOf() / 1e3), document.getElementById("flash_seconds") && CountBack(gsecs), function(e, t) {
_i_("3dab:0b23913a");
function i() {
_i_("3dab:e99ce81b"), e.env.b_run_ge_new_newsletter_login && booking.eventEmitter.bind("auth-dialog:show", function() {
_i_("3dab:9166ba42"), t(".user_signup_password").focus(), _r_();
}), _r_();
}
t(document).ready(i), _r_();
}(window.booking, window.jQuery), booking.components.define("ge-lightbox", function(e, t) {
"use strict";
_i_("3dab:5499c82d");
function i(i) {
_i_("3dab:65ca1c1a");
var n = i.data, r = i.template, a = i.onOpen || function() {}, o = i.wrapperClassName || "ge-about-lightbox-wrapper", _ = t.noop, s = t.noop;
e.require("profile/profile-menu/profile-menu").hide();
var d = function() {
_i_("3dab:5ecdd695");
var i = e.env.b_user_genius_status && e.env.b_user_genius_status.b_genius_booking_for_genius;
i && (n.b_genius_booking_for_genius = e.env.b_user_genius_status.b_genius_booking_for_genius, _ = function() {
_i_("3dab:324c453f"), t(".modal-wrapper .ge-obd-tl-stamp-outer").loadComponents(), t(".modal-wrapper .ge-onboarding-index__timeline").addClass("animate"), _r_();
}), 11 != Number(e.env.ge_trial_campaign_id) && (o += " new-genius-modal-wrapper"), _r_();
}, c = "ge_aspiring_about_lightbox" == r || "ge_genius_about_lightbox" == r;
parseInt(e.env.b_reg_user_is_genius) && c && (e.et.goal("genius_about_lighbox_opened"), d()), e.env.b_reg_user_qualify_genius_challenge && c && e.et.goal("aspiring_genius_about_lighbox_opened"), setTimeout(function() {
_i_("3dab:20353944"), t("#tooltip_wrap").hide(), _r_();
}, 300), t(".user_center_popover").hide(), e.lightbox.show(e.jstmpl(r).render(n), {
customWrapperClassName:o,
hideCallBack:s
}, function(i) {
_i_("3dab:e1360ae7"), t(".ge-mod-button").click(function() {
return _i_("3dab:a3cfd21d"), e.lightbox.hide(), _r_(!1);
}), _(), a && a(i), _r_();
}), _r_();
}
function n(e) {
_i_("3dab:59bd96be");
var n = e.element;
t("body").delegate(n, "click", function(t) {
_i_("3dab:49fa0ff8"), t.preventDefault(), i(e), _r_();
}), _r_();
}
return _r_({
setup:n,
open:i
});
}), booking.jstmpl("ge_aspiring_about_lightbox", function() {
_i_("3dab:c32c4927");
var e, t = [ '\n\n    <div class="ge-about-lightbox-container ge-about-lightbox-v3">\n      <div class="ge-about-lightbox-v3__header u-clearfix">\n        <div class="ge-about-lightbox-v3__header-top u-clearfix">\n          <h1 class="ge-about-lightbox-v3__logo-container">Booking Genius</h1>\n          <p class="ge-about-lightbox-v3__slogan">', "/private/ge_exp_pb_lightbox_header/name", '</p>\n        </div>\n      </div>\n\n      <div class="ge-about-lightbox-v3__blocks-list u-clearfix">\n        <div class="u-clearfix">\n          <div class="ge-about-lightbox-v3__block">\n            <img src="', '" height="26px" class="ge-about-lightbox-v3__block-image" alt="">\n            <h3><strong class="ge-about-lightbox-v3__strong-yellow">', "/private/ge_exp_pay_less_members_usp/name", "</strong></h3>\n            <p>", '</p>\n          </div>\n\n          <div class="ge-about-lightbox-v3__block is-center-has-plus">\n            <img src="', "</strong>", "<strong>", '</p>\n          </div>\n\n          <div class="ge-about-lightbox-v3__block">\n            <img src="', '</p>\n          </div>\n        </div>\n\n        <div class="ge-about-lightbox-v3__explanation u-clearfix">\n          <div class="ge-about-lightbox-v3__genius-brand">\n            <span class="ge-iconfont-plate white ge-mod-genius-logo" style="font-size: 35px">\n              ', "35", "genius/full-logo", '\n            </span>\n          </div>\n\n          <div class="ge-about-lightbox-v3__genius-about">\n            <h3><strong class="ge-about-lightbox-v3__strong-yellow">', "/private/ge_exp_lightbox_what_is_genius_desc_2/name", "Booking.com", "</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n" ], i = [ "ge_exp_pay_less_members_desc", "ge_exp_lightbox_discount_header", "ge_exp_lightbox_discount_desc", "ge_exp_lightbox_freebies_header", "ge_exp_lightbox_freebies_desc", "ge_exp_pb_lightbox_what_is_genius" ];
return _r_(function(n) {
_i_("3dab:e67fbf59");
var r = "", a = this.fn;
return r += [ t[0], a.ME(t[1], a.MB, a.MN, null), t[2], a.STATIC_HOSTNAME("/static/img/genius-lightbox-bestprice.png", 0, 0, 0), t[3], a.ME(t[4], a.MB, a.MN, null), t[5], a.MB(i[0]), t[6], a.STATIC_HOSTNAME("/static/img/genius-lightbox-discount.png", 0, 0, 0), t[3], a.MB(i[1]), t[5], (n.unshift({
end_bold:t[7],
start_bold:t[8]
}), e = a.MB(i[2]), n.shift(), e), t[9], a.STATIC_HOSTNAME("/static/img/genius-lightbox-perks.png", 0, 0, 0), t[3], a.MB(i[3]), t[5], (n.unshift({
end_bold:t[7],
start_bold:t[8]
}), e = a.MB(i[4]), n.shift(), e), t[10], (n.unshift({
height:t[11],
name:t[12]
}), e = a.HELPER("icon", n[0]), n.shift(), e), t[13], a.MB(i[5]), t[5], (n.unshift({
b_companyname:t[15]
}), e = a.ME(t[14], a.MB, a.MN, null), n.shift(), e), t[16] ].join(""), _r_(r);
});
}()), booking.jstmpl("ge_genius_about_lightbox", function() {
_i_("3dab:ac31ea1c");
var e, t = [ "\n    ", "\n\n", '\n\n\n\n<div class="ge_new_genius_modal ge-modal-container">\n    <aside>\n        <h1 class="ge-mod-genius-logo-container">\n            ', "ge-modal-genius-logo", "genius/genius-logo", '\n        </h1>\n        <h1 class="ge-main-heading">\n            ', "/private/ge_deepen_new_genius_lbox_header/name", "\n        </h1>\n    </aside>\n\n    ", '\n        <div class="right-side-content genius_trial_campaign--right_side">\n            <div class="genius_campaing_image u-clearfix">\n                <img src="', '" alt="Genius Trial" class="genius_campaing_image--giftbox">\n            </div>\n\n            <div class="genius_campaing_header u-clearfix">\n                <h1>', "/private/ge_expand_no_opt_in_pay_less_header/name", "</h1>\n                <p>", "/private/ge_expand_index_trial_box_sub/name", '</p>\n                <hr class="genius_lightbox_line">\n            </div>\n\n            <div class="genius_campaing_text u-clearfix">\n                <span  class="ge-iconfont-extended ge-iconfont-extended-dd ge10-badge ge-iconfont-lightbox">\n                    ', "fonticon/bookingdotgenius", '\n                    <span class="genius-extended-module genius-extended-module-discount ">\n                        <i class="ge-discount-rate">%</i>\n                    </span>\n                </span>\n                <p class="genius-module-text">', "/private/ge_expand_zero_trial_index_index_look_for_logo/name", '</p>\n            </div>\n\n            <div class="genius_trial_campaign--footer-button">\n                <a class="b-button b-button_primary ge-mod-button" href="#">\n                    <span class="b-button__text">', "/private/ge_boost_lightbox_ok_cta/name", "</span>\n                </a>\n            </div>\n        </div>\n    ", '\n        <div class="right-side-content">\n            <div class="benefits-section">\n                <div class="benefits-heading">\n                    ', "/private/ge_deepen_new_genius_lbox_start/name", '\n                </div>\n                <div class="content-row">\n                    <div class="big-icon">\n                        <span class="ge-10-icon">', "/private/genius_index_lightbox_icon/name", '</span>\n                    </div>\n                    <div class="benefit-text">\n                        ', "/private/genius_index_lightbox_icon_get/name", '\n                    </div>\n                </div>\n\n                <div class="content-row">\n                    <div class="big-icon">\n                        <span class="genius-extended-module genius-extended-module-freebies">\n                            <span class="icon-gift">', "iconset/gift", '</span>\n                        </span>\n                    </div>\n                    <div class="benefit-text">\n                        ', "/private/ge_deepen_new_genius_lbox_freebies/name", "\n                    </div>\n                </div>\n            </div>\n        </div>\n    ", "\n</div>\n", "\n" ], i = [ "b_user_genius_status", "b_genius_discount_percentage" ];
return _r_(function(n) {
_i_("3dab:93b608ce");
var r = "", a = this.fn;
function o(r) {
return _i_("3dab:83017240"), r += t[1], r += [ t[2], (n.unshift({
"class":t[3],
name:t[4]
}), e = a.HELPER("icon", n[0]), n.shift(), e), t[5], a.ME(t[6], a.MB, a.MN, null), t[7] ].join(""), r += a.MJ(a.MC(i[0])) && a.MJ(a.MC(i[0]).is_genius) && a.MJ(a.MC(i[0]).trial.desktop.is_active) && a.MJ(11 == a.MC(i[0]).trial.desktop.campaign_id) ? [ t[8], a.STATIC_HOSTNAME("/static/img/genius/genius_trial/trial-gift-open.png", 0, 0, 0), t[9], a.ME(t[10], a.MB, a.MN, null), t[11], a.ME(t[12], a.MB, a.MN, null), t[13], (n.unshift({
name:t[14]
}), e = a.HELPER("icon", n[0]), n.shift(), e), t[15], a.ME(t[16], a.MB, a.MN, null), t[17], a.ME(t[18], a.MB, a.MN, null), t[19] ].join("") :[ t[20], a.ME(t[21], a.MB, a.MN, null), t[22], (n.unshift({
num_percent:a.MC(i[1]) || 10
}), e = a.ME(t[23], a.MB, a.MN, null), n.shift(), e), t[24], (n.unshift({
num_percent:a.MC(i[1]) || 10
}), e = a.ME(t[25], a.MB, a.MN, null), n.shift(), e), t[26], (n.unshift({
name:t[27]
}), e = a.HELPER("icon", n[0]), n.shift(), e), t[28], a.ME(t[29], a.MB, a.MN, null), t[30] ].join(""), r += t[31], _r_(r);
}
return r += t[0], r = o(r), r += t[32], _r_(r);
});
}()), booking.jstmpl("ge_trial_optin_lightbox", function() {
_i_("3dab:678d6828");
var e = [ '\n\n    <div class="ge-trial-optin-lightbox-container ge-trial-optin-lightbox">\n    \n        <img src="', '" alt="Genius Trial" class="genius-trial-optin-desktop--giftbox">\n\n        <div class="ge-toi-mid-bl u-clearfix">\n            <h1>', "/private/ge_expand_trial_login_lbox_header/name", "</h1>\n            <p>", "/private/ge_expand_trial_login_lbox_subheader/name", '</p>\n        </div>\n\n        <div class="ch-clearfix">\n            <a href="#" class="button ge-mod-button genius-week-later" id="">', "/private/ge_expand_trial_login_lbox_cta_1/name", '</a>\n            \n            <form action="', "/genius_activate_trial", '" method="post">\n                <input type="hidden" name="return_url" value="', '">\n                <input type="hidden" name="campaign_id" value="', '">\n                <input type="hidden" name="src" value="lb">\n                <input type="submit" class="button genius-week-button" value="', "/private/ge_hp_start_ge_week/name", '">\n            </form>\n        </div>\n\n    </div>\n\n' ], t = [ "b_secure_hostname", "b_query_params_with_lang", "b_original_url", "fe_ge_trial_desktop_campaign_id" ];
return _r_(function(i) {
_i_("3dab:9fa4917c");
var n = "", r = this.fn;
return n += [ e[0], r.STATIC_HOSTNAME("/static/img/genius/genius_trial/tier-gift.png", 0, 0, 0), e[1], r.ME(e[2], r.MB, r.MN, null), e[3], r.ME(e[4], r.MB, r.MN, null), e[5], r.ME(e[6], r.MB, r.MN, null), e[7], r.MC(t[0]), e[8], r.MC(t[1]), e[9], r.MC(t[2]), e[10], r.MB(t[3]), e[11], r.ME(e[12], r.MB, r.MN, null), e[13] ].join(""), _r_(n);
});
}()), booking.jstmpl("ge_welcome_lightbox", function() {
_i_("3dab:e113a6e3");
var e = [ '\n\n    <div class="ge-welcome-lightbox-container ge-welcome-lightbox">\n    \n        <img src="', '" alt="Genius" class="genius-welcome-desktop--giftbox">\n\n        <div class="ge-welcome-mid-bl u-clearfix">\n            <h1>', "/private/genius_new_lightbox_congratulations_header/name", "</h1>\n            <p>", "/private/genius_new_lightbox_congratulations_message/name", '</p>\n        </div>\n\n        <div class="ch-clearfix"></div>\n        \n        <a href="#" class="button ge-mod-button genius-gotit-cta" >', "/private/genius_new_lightbox_congratulations_cta/name", "</a>\n    </div>\n\n" ];
return _r_(function(t) {
_i_("3dab:0fa8c245");
var i = "", n = this.fn;
return i += [ e[0], n.STATIC_HOSTNAME("/static/img/genius/genius_trial/tier-gift.png", 0, 0, 0), e[1], n.ME(e[2], n.MB, n.MN, null), e[3], n.ME(e[4], n.MB, n.MN, null), e[5], n.ME(e[6], n.MB, n.MN, null), e[7] ].join(""), _r_(i);
});
}()), booking.jstmpl("ge_ft_welcome_lightbox", function() {
_i_("3dab:23786c2e");
var e, t = [ '\n\n    <div class="ge-welcome-lightbox-container ge-welcome-lightbox">\n    \n        <img src="', '" alt="Genius" class="genius-welcome-desktop--giftbox">\n\n        ', "ge-nl-lb-ge-badge", "genius/genius-logo", "75", '\n\n        <div class="ge-welcome-mid-bl u-clearfix">\n            <h1>', "/private/ge_sign_in_lightbox_header_alt/name", "</h1>\n            <p>", "/private/ge_sign_in_lightbox_body/name", "10", '</p>\n        </div>\n\n        <div class="ch-clearfix"></div>\n        \n        <a href="#" class="button ge-mod-button js-ge-lightbx-search-cta genius-gotit-cta" >', "/private/ge_sign_in_lightbox_cta/name", "</a>\n    </div>\n\n" ];
return _r_(function(i) {
_i_("3dab:5e65269a");
var n = "", r = this.fn;
return n += [ t[0], r.STATIC_HOSTNAME("/static/img/genius/genius_trial/tier-gift.png", 0, 0, 0), t[1], (i.unshift({
"class":t[2],
name:t[3],
width:t[4]
}), e = r.HELPER("icon", i[0]), i.shift(), e), t[5], r.ME(t[6], r.MB, r.MN, null), t[7], (i.unshift({
percent:t[9]
}), e = r.ME(t[8], r.MB, r.MN, null), i.shift(), e), t[10], r.ME(t[11], r.MB, r.MN, null), t[12] ].join(""), _r_(n);
});
}()), booking.jstmpl("ge_pilot_markets_lightbox", function() {
_i_("3dab:109ea606");
var e, t = [ '\n\n    <div class="ge-trial-optin-lightbox-container ge-trial-optin-lightbox">\n\n        <div class="ge-trial-optin-lightbox-brand">\n          <span class="ge-iconfont-plate white ge-mod-genius-logo" style="font-size: 40px">\n            <i class="bicon-dotgeniusbg"></i>\n            <i class="bicon-dotgeniusfold"></i>\n            <i class="bicon-dotgenius"></i>\n          </span>\n        </div>\n\n        <div class="ge-toi-mid-bl u-clearfix">\n\n            \n            ', "\n                <h1>", "/private/ge_expand_sr_pilot_genius_lbox_name/name", "</h1>\n            ", "/private/ge_expand_sr_pilot_genius_lbox_unknown/name", "\n\n            ", "\n                <p>", "/private/ge_expand_sr_pilot_genius_lbox_aspiring/name", "10", "</p>\n            ", "/private/ge_expand_sr_pilot_genius_lbox_genius/name", '\n\n        </div>\n\n        <div class="ch-clearfix">\n            <a href="#" class="button ge-mod-button genius-week-button is-alone" id="">', "/private/ge_expand_got_it_cta/name", "</a>\n        </div>\n\n    </div>\n\n" ], i = [ "b_user_first_name", "ge_num_trips", "b_reg_user_is_genius" ];
return _r_(function(n) {
_i_("3dab:e981ad11");
var r = "", a = this.fn;
return r += t[0], r += a.MD(i[0]) ? [ t[1], (n.unshift({
user_name:a.MC(i[0])
}), e = a.ME(t[2], a.MB, a.MN, null), n.shift(), e), t[3] ].join("") :[ t[1], a.ME(t[4], a.MB, a.MN, null), t[3] ].join(""), r += t[5], r += a.MK(a.MC(i[2])) ? [ t[6], (n.unshift({
num_percent:t[8],
num_trips:a.MI(5) - a.MI(a.MB(i[1]))
}), e = a.ME(t[7], a.MB, a.MN, a.MO(a.MI(5) - a.MI(a.MC(i[1])), null, t[7])), n.shift(), e), t[9] ].join("") :[ t[6], (n.unshift({
num_percent:t[8]
}), e = a.ME(t[10], a.MB, a.MN, null), n.shift(), e), t[9] ].join(""), r += [ t[11], a.ME(t[12], a.MB, a.MN, null), t[13] ].join(""), _r_(r);
});
}()), booking.jstmpl("ge_genius_week_lightbox", function() {
_i_("3dab:ab15b51a");
var e, t = [ "\n\n    ", "\n        ", "\n    ", '\n\n  <div class="genius-week-lightbox ', '">\n\n  ', '\n\n    <div class="ge_new_genius_modal ge-modal-container genius_trial_campaign--modal">\n        <aside>\n            <h1 class="ge-mod-genius-logo-container">\n                    <span class="ge-iconfont-plate ge-mod-genius-logo yellow">\n                        <i class="bicon-dotgeniusbg"></i>\n                        <i class="bicon-dotgeniusfold"></i>\n                        <i class="bicon-dotgenius"></i>\n                    </span>\n            </h1>\n            <h1 class="ge-main-heading">\n                ', "/private/ge_deepen_new_genius_lbox_header/name", '\n            </h1>\n        </aside>\n        <div class="right-side-content genius_trial_campaign--right_side">\n            <div class="genius_campaing_image u-clearfix">\n              <img src="', '" alt="Genius Trial" class="genius_campaing_image--giftbox">\n            </div>\n\n            <div class="genius_campaing_header u-clearfix">\n              <h1>', "/private/ge_expand_no_opt_in_pay_less_header/name", "</h1>\n              <p>", "/private/ge_expand_index_trial_box_sub/name", '</p>\n              <hr class="genius_lightbox_line">\n            </div>\n\n            <div class="genius_campaing_text u-clearfix">\n              <span  class="ge-iconfont-extended ge-iconfont-extended-dd ge10-badge ge-iconfont-lightbox">\n                <i class="bicon-bookingdotgenius"></i>\n                <span class="genius-extended-module genius-extended-module-discount ">\n                  <i class="ge-discount-rate">%</i>\n                </span>\n              </span>\n              <p class="genius-module-text">', "/private/ge_expand_zero_trial_index_index_look_for_logo/name", '</p>\n            </div>\n\n            <div class="genius_trial_campaign--footer-button">\n              <a class="b-button b-button_primary ge-mod-button" href="#">\n                <span class="b-button__text">', "/private/ge_boost_lightbox_ok_cta/name", "</span>\n              </a>\n            </div>\n        </div>\n    </div>\n\n  ", '\n    <div class="genius-week-lightbox-header u-clearfix">\n      <span class="genius-week-brand u-clearfix">\n        <i class="bicon-dotgenius"></i>\n      </span>\n      <img src="', '" alt="Genius Trial" class="genius-trial-desktop--giftbox">\n    </div>\n\n    <div class="genius-week-lightbox-block u-clearfix">\n      <h2 class="genius-week-lightbox-title">\n        ', "\n            ", "/private/ge_expand_zero_trial_index_index_lightbox/name", "/private/ge_expand_zero_trial_index_index_lightbox_unknown/name", "\n      </h2>\n      <p>", "/private/ge_expand_zero_trial_index_index_lightbox_discount/name", '</p>\n      <hr>\n    </div>\n\n    <div class="genius-week-lightbox-block2 u-clearfix">\n        <span  class="ge-iconfont-extended ge-iconfont-extended-dd ge10-badge">\n            <i class="bicon-bookingdotgenius"></i>\n            <span class="genius-extended-module genius-extended-module-discount ">\n            <i class="ge-discount-rate">10%</i>\n            </span>\n        </span>\n        <p>', '</p>\n    </div>\n\n    <a id="js_close_trial_lightbox" class="b-button b-button_primary b-button_flat ge-genius-tier-button">', "/private/ge_expand_zero_trial_index_index_lightbox_cta/name", "</a>\n  ", '\n\n\n\n    <div class="genius-week-lightbox-header u-clearfix">\n      <span class="genius-week-brand u-clearfix">\n        <i class="bicon-dotgenius"></i>\n        ', '\n        <span class="genius-week-word-brand">week</span>\n        ', '\n      </span>\n\n      <h4 class="genius-week-headline">', "/private/genius_pp_travel_rewards_programme/name", '</h4>\n    </div>\n\n    <div class="genius-week-lightbox-block u-clearfix">\n      <h2 class="genius-week-lightbox-title">', "/private/ge_lighbox_ge_week_headline/name", '</h2>\n\n      <div class="genius-week-itens u-clearfix">\n        <div class="item">\n          <span class="genius-week-icon">\n            <i class="bicon-pricetag"></i>\n          </span>\n          <h3>', "/private/ge_10_percent_headline/name", "</h3>\n          <p>", "/private/ge_email_gw_discount/name", '</p>\n        </div>\n\n        <div class="item">\n          <span class="genius-week-icon">\n            <i class="bicon-gift"></i>\n          </span>\n          <h3>', "/private/ge_free_travel_perks_headline/name", "/private/ge_email_gw_free_perks/name", '</p>\n        </div>\n\n        <div class="item">\n          <span class="genius-week-icon">\n            <i class="bicon-olderphone"></i>\n          </span>\n          <h3>', "/private/ge_faster_service/name", "/private/ge_email_gw_faster_service/name", '</p>\n        </div>\n      </div>\n\n      <div class="genius-week-about u-clearfix">\n        <div class="genius-week-ge-brand">\n          <span class="ge-iconfont-plate white ge-mod-genius-logo" style="font-size: 35px">\n            <i class="bicon-dotgeniusbg"></i>\n            <i class="bicon-dotgeniusfold"></i>\n            <i class="bicon-dotgenius"></i>\n          </span>\n        </div>\n\n        <div class="genius-week-text">\n          <h2>', "/private/ge_lightbox_gw_want_to/name", "</h2>\n          <p>", "/private/ge_lightbox_gw_good_things/name", '</p>\n        </div>\n      </div>\n    </div>\n    <a id="js_close_trial_lightbox" class="b-button b-button_primary b-button_flat ge-genius-tier-button">', "/private/ge_ligtbox_gw_cta/name", "</a>\n    ", "\n  </div>\n\n" ], i = [ "fe_is_zero_ge_trial_desktop_user", "fe_zero_trial_class", "b_user_genius_status", "b_genius_user", "fe_is_zero_ge_trial_init_lightbox" ];
return _r_(function(n) {
_i_("3dab:dc1cff1d");
var r = "", a = this.fn;
return r += t[0], a.MD(i[0]) && (r += t[1], a.MN("fe_zero_trial_class", "ge-zero-trial-lightbox"), r += t[2]), r += [ t[3], a.MB(i[1]), t[4] ].join(""), a.MJ(a.MC(i[2])) && a.MJ(a.MC(i[2]).is_genius) && a.MJ(a.MC(i[2]).trial.desktop.is_active) && a.MJ(11 == a.MC(i[2]).trial.desktop.campaign_id) ? r += [ t[5], a.ME(t[6], a.MB, a.MN, null), t[7], a.STATIC_HOSTNAME("/static/img/genius/genius_trial/trial-gift-open.png", 0, 0, 0), t[8], a.ME(t[9], a.MB, a.MN, null), t[10], a.ME(t[11], a.MB, a.MN, null), t[12], a.ME(t[13], a.MB, a.MN, null), t[14], a.ME(t[15], a.MB, a.MN, null), t[16] ].join("") :a.MD(i[4]) ? (r += t[2], a.MN("startStyle", "<strong>"), r += t[2], a.MN("endStyle", "</strong>"), r += [ t[17], a.STATIC_HOSTNAME("/static/img/genius/genius_trial/trial-gift-open.png", 0, 0, 0), t[18] ].join(""), r += a.MJ(a.MG((a.MC(i[3]) || {}).first_name)) ? [ t[19], (n.unshift({
user_name:a.MG((a.MC(i[3]) || {}).first_name)
}), e = a.ME(t[20], a.MB, a.MN, null), n.shift(), e), t[1] ].join("") :[ t[19], a.ME(t[21], a.MB, a.MN, null), t[1] ].join(""), r += [ t[22], a.ME(t[23], a.MB, a.MN, null), t[24], a.ME(t[13], a.MB, a.MN, null), t[25], a.ME(t[26], a.MB, a.MN, null), t[27] ].join("")) :(r += t[28], a.MD(i[0]) || (r += t[29]), r += [ t[30], a.ME(t[31], a.MB, a.MN, null), t[32], a.ME(t[33], a.MB, a.MN, null), t[34], a.ME(t[35], a.MB, a.MN, null), t[36], a.ME(t[37], a.MB, a.MN, null), t[38], a.ME(t[39], a.MB, a.MN, null), t[36], a.ME(t[40], a.MB, a.MN, null), t[41], a.ME(t[42], a.MB, a.MN, null), t[36], a.ME(t[43], a.MB, a.MN, null), t[44], a.ME(t[45], a.MB, a.MN, null), t[46], a.ME(t[47], a.MB, a.MN, null), t[48], a.ME(t[49], a.MB, a.MN, null), t[50] ].join("")), r += t[51], _r_(r);
});
}()), booking.jstmpl("ge_perks_lightbox", function() {
_i_("3dab:e2a20af7");
var e, t = [ '\n  <div class="ge-about-lightbox-container ge-genius-tier-lightbox">\n    <h2 class="ge-genius-tier-lightbox-title"> ', "/private/ge_lightbox_trips_are/name", ' </h2>\n    <p class="ge-genius-tier-lightbox-text"> ', "/private/ge_lightbox_you_made/name", ' </p>\n\n    <div class="ge-genius-tier-lightbox-freebies-list u-clearfix">\n      <h3 class="ge-freebies-list-title">\n        ', "/private/ge_lightbox_new/name", '\n        <span class="ge-freebies-expires">', "/private/ge_lightbox_expires/name", ' </span>\n      </h3>\n\n      <ul class="u-clearfix">\n        <li>\n            <span class="genius-extended-module-standalone-container">\n                <span class="genius-extended-module genius-extended-module-standalone">\n                    <i class="bicon-coffee"></i>\n                </span>\n            </span>\n            <span class="ge-freebie-item-text">\n                ', "/private/ge_perk_free_breakfast/name", '\n            </span>\n        </li>\n      </ul>\n    </div>\n\n    <div class="ge-genius-tier-lightbox-freebies-list u-clearfix">\n      <h3 class="ge-freebies-list-title">\n        ', "/private/ge_lightbox_travel_perks/name", "/private/ge_lightbox_no_expiry/name", '</span>\n      </h3>\n\n      <ul class="u-clearfix">\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n              <i class="ge-discount-rate">10%</i>\n            </span>\n          </span>\n          <span class="ge-freebie-item-text">\n            ', "/private/genius_get_a_discount_select_rooms/name", '\n          </span>\n        </li>\n\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n                <i class="bicon-earlycheckin"></i>\n            </span>\n        </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/3/name", '\n          </span>\n        </li>\n\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n                <i class="bicon-latecheckout"></i>\n            </span>\n        </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/2/name", '\n          </span>\n        </li>\n\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n                <i class="bicon-shuttlesmall"></i>\n            </span>\n        </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/4/name", '\n          </span>\n        </li>\n\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n                <i class="bicon-bike"></i>\n            </span>\n        </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/6/name", '\n          </span>\n        </li>\n\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n                <i class="bicon-bar"></i>\n            </span>\n        </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/5/name", '\n          </span>\n        </li>\n\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n                <i class="bicon-parking"></i>\n            </span>\n        </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/8/name", '\n          </span>\n        </li>\n      </ul>\n    </div>\n\n    <span class="genius-lightbox-tip">', "/private/ge_lightbox_some_travel_perks/name", "</span>\n  </div>\n" ], i = [ "first_name", "plus_end_date", "b_genius_discount_percentage" ];
return _r_(function(n) {
_i_("3dab:aaeadb6c");
var r = "", a = this.fn;
return r += [ t[0], a.ME(t[1], a.MB, a.MN, null), t[2], (n.unshift({
first_name:a.MB(i[0])
}), e = a.ME(t[3], a.MB, a.MN, null), n.shift(), e), t[4], a.ME(t[5], a.MB, a.MN, null), t[6], (n.unshift({
numeric_date:a.MB(i[1])
}), e = a.ME(t[7], a.MB, a.MN, null), n.shift(), e), t[8], a.ME(t[9], a.MB, a.MN, null), t[10], a.ME(t[11], a.MB, a.MN, null), t[6], a.ME(t[12], a.MB, a.MN, null), t[13], (n.unshift({
num_percent:a.MC(i[2]) || 10
}), e = a.ME(t[14], a.MB, a.MN, null), n.shift(), e), t[15], a.ME(t[16], a.MB, a.MN, null), t[17], a.ME(t[18], a.MB, a.MN, null), t[19], a.ME(t[20], a.MB, a.MN, null), t[21], a.ME(t[22], a.MB, a.MN, null), t[23], a.ME(t[24], a.MB, a.MN, null), t[25], a.ME(t[26], a.MB, a.MN, null), t[27], a.ME(t[28], a.MB, a.MN, null), t[29] ].join(""), _r_(r);
});
}()), function(e) {
_i_("3dab:84bdba4c");
var t, i = {
"SH:seen":"sh_seen",
"SH:clicked":"sh_clicked",
"SH:removed":"sh_removed",
"SH:sh-timestamp-today":"sh_resume_last_24",
"SH:sh-timestamp-24-48-hrs":"sh_resume_last_24_48",
"SH:sh-timestamp-48-72-hrs":"sh_resume_last_48_72",
"SH:sh-timestamp-72-96-hrs":"sh_resume_last_72_96"
};
for (t in i) i.hasOwnProperty(t) && e.eventEmitter.one(t, function(t) {
return _i_("3dab:ecc04ed6"), _r_(function() {
_i_("3dab:59eb86d0"), e.et.goal(t), _r_();
});
}(i[t]));
_r_();
}(booking), Array.prototype.walk || (Array.prototype.walk = function(e) {
_i_("3dab:620d28d9");
for (var t = [], i = this.length; i--; ) t.push(e(this[i]));
return _r_(t.reverse());
}), Array.prototype.flatten || (Array.prototype.flatten = function() {
_i_("3dab:dd80f6c2");
for (var e = [], t = -1, i = this.length; ++t < i; ) e = e.concat(this[t].constructor == Array ? this[t].flatten() :this[t]);
return _r_(e);
}), B.define("ga/deprecated-custom-track-click", function(e, t, i) {
_i_("3dab:4c8c3622");
var n = e("ga-tracker");
function r(e) {
_i_("3dab:7e4fd466"), !e || e.length ? e = $(".custom_track") :e.hasClass(".custom_track") || (e = e.find(".custom_track")), e.click(function() {
_i_("3dab:c24875f8");
var e = $(this).attr("data-trackname"), t = $(this).attr("data-track-prefix") || booking.env.b_action, i = $(this).attr("data-tracker") || "userProfileTracker";
e && n[i] && n.trackEvent(n[i], t + " : " + e, booking.env.b_action), _r_();
}), _r_();
}
i.exports = r, _r_();
}), function(e, t) {
_i_("3dab:2c607b47"), e("ga-tracker-base", function(e, t) {
_i_("3dab:a69ba23f");
function i(e, t) {
_i_("3dab:0b8e2536"), "undefined" != typeof t && ("undefined" != typeof _gaq && _gaq.push([ "_trackPageview", t ]), window.ga && window.ga("send", "pageview", t)), _r_();
}
function n(e, t, i, n, r) {
_i_("3dab:eb08ffeb"), "undefined" == typeof r && (r = 1), "undefined" != typeof e && ("undefined" != typeof _gaq && _gaq.push([ "_trackEvent", e, t, i, n, !0 ]), window.ga && window.ga("send", {
hitType:"event",
eventCategory:e,
eventAction:t,
eventLabel:i,
eventValue:n,
nonInteraction:1
})), _r_();
}
function r(e, t, i, n) {
if (_i_("3dab:4f31b963"), !window.ga) return _r_();
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
t.trackTiming = r, t.trackEvent = n, t.trackPageview = i, _r_();
}), B.define("utils/uuid4", [], function() {
return _i_("3dab:8fea0e4e"), _r_(function() {
_i_("3dab:ee22a2af");
var e = new Date().getTime(), t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
_i_("3dab:8aa95324");
var i = (e + 16 * Math.random()) % 16 | 0;
return e = Math.floor(e / 16), _r_(("x" == t ? i :3 & i | 8).toString(16));
});
return _r_(t);
});
}), B.define("dp-tracker", function(e, t) {
_i_("3dab:8a4b5da2");
var i = B.require("utils/uuid4"), n = B.require("server-data"), r = "/postbooking_track_data", a = i(), o = function() {
_i_("3dab:cd6f024f");
var e = navigator.sendBeacon && "function" == typeof navigator.sendBeacon;
function t(e, t) {
_i_("3dab:e5afafbd");
var i = new XMLHttpRequest();
return i.open("POST", e), i.setRequestHeader("X-Booking-CSRF", n.b_csrf_token), i.send(t), _r_(i);
}
function i(i, r) {
_i_("3dab:ae77f2b5");
var a = JSON.stringify(r);
e ? navigator.sendBeacon(i + "?bhc_csrf_token=" + n.b_csrf_token, a) :t(i, a), _r_();
}
return _r_(i);
}();
function _(e) {
_i_("3dab:69cb6b13"), s(e, a), _r_();
}
function s(e, t) {
_i_("3dab:3af8a115");
var i = {
event_name:"Dimension",
event_data:e,
dimension_group:[ t ]
};
o(r, i), _r_();
}
function d(e, t, i, n, _) {
_i_("3dab:ce033cfd");
var s = {
hitType:e
};
i && (s.eventAction = i), t && (s.eventCategory = t), n && (s.eventLabel = n), _ && (s.eventValue = _);
var d = {
event_name:"Hit",
event_data:s,
dimension_group:[ a ]
};
o(r, d), _r_();
}
t.setDimension = _, t.track = d, _r_();
}), e("ga-tracker", function(e, t) {
_i_("3dab:125648cb");
var i = e("promise"), n = e("dp-tracker"), r = e("ga-tracker-base"), a = new i(function(e, t) {
_i_("3dab:1e2182fe"), window.booking = window.booking || {}, window.__ga_tracker_set_page_as_tracked__ = e, _r_();
});
function o() {
_i_("3dab:6a3bb694");
var e = arguments;
a.then(function() {
_i_("3dab:92ec20e6"), r.trackTiming.apply(null, e), _r_();
}), _r_();
}
function _() {
_i_("3dab:2405f110");
var e = arguments;
a.then(function() {
_i_("3dab:1664453a"), r.trackEvent.apply(null, e), _r_();
}), _r_();
}
function s() {
_i_("3dab:74d3246e");
var e = arguments[5], t = e && e.indexOf("dp") > -1;
if (t) {
var i = Array.prototype.slice.call(arguments);
i.splice(0, 0, "event"), n.track.apply(n, i);
}
return _r_(r.trackEvent.apply(this, arguments));
}
t.errorTracker = "Error", t.clickTracker = "Click", t.changeTracker = "Change", t.hoverTracker = "Hover", t.mapTracker = "Map", t.pageviewTracker = "Pageview", t.viewTracker = "View", t.cityTracker = "City", t.groupTracker = "Group", t.cardTracker = "Credit Card", t.comparisonTracker = "Hotel Comparison", t.userProfileTracker = "User profile", t.bookProcessTracker = "Book process", t.bookingProcessTracker = "Booking Process", t.hotelPageTracker = "Hotel Page", t.reviewSearchTracker = "Review search", t.BBToolTracker = "Business Bookers Tool", t.TripPlannerTracker = "Trip Planner", t.growlTracker = "Growl", t.WebMessagingTracker = "Web Messaging", t.SearchResultsTracker = "Search Results", t.SearchResultsCardClickEventsTracker = "Search Results Card Click Event", t.SearchResultsCardHoverEventsTracker = "Search Results Card Hover Event", t.SearchResultsFilterTracker = "Filter", t.SearchResultsFilterMapTracker = "Filter - Map", t.articlesTracker = "Articles", t.DSFTracker = "DSF", t.ugcdTracker = "UGC Review Page", t.ugccDestinationTracker = "Destination UGC", t.ugccPropertyTracker = "Property UGC", t.assistantTracker = "Messaging V2", t.referralAdvocateTracker = "Referral - Advocate", t.referralPartnerAdvocateTracker = "Referral Partner - Advocate", t.referralFriendTracker = "Referral - Friend", t.webViralityTracker = "Web Virality", t.Rewards = "Rewards", t.SearchBoxTracker = "Searchbox", t.travelGuide = "TravelGuide", t.paymentForm = "Checkout Form", t.communityTracker = "Communities", t.TIMING = {}, t.TIMING.PERFORMANCE = "Browser Performance", t.trackEvent = s, t.trackEventAfterPageview = _, t.trackTiming = o, t.trackPageview = r.trackPageview, t.pageviewIsTracked = function() {
return _i_("3dab:1f0b3c6d"), _r_(a);
}, _r_();
}), _r_();
}(B.define, B.require), B.require([ "et", "jquery", "ga-tracker" ], function(e, t, i) {
_i_("3dab:930ded27");
var n = [ "click", "mouseenter", "mouseleave", "change" ], r = booking.debug("GA"), a = function(e) {
if (_i_("3dab:26174f72"), e && e.category) return _r_([ "category ->", e.category, "; action ->", e.action, "; label ->", e.label, "; value ->", e.value ].join(" "));
if (e && e.pageview) return _r_("link -> " + e.pageview);
_r_();
};
n = n.join(" "), n && t("body").on(n, "[data-ga-track]", function(e) {
_i_("3dab:97face21");
var n, o, _, s, d, c, l = t(this), u = l.data("ga-track");
if (!u || !u.length) return _r_();
var f = u.split("|");
if (f.length >= 2) {
if (u = f, n = u[0], n !== e.type) return _r_();
u[1].indexOf("pageview:") ? (o = u[1], _ = u[2] || "", s = u[3] || "", d = parseInt(u[4], 10) || "") :c = u[1].substr(u[1].indexOf(":") + 1);
} else {
if (u !== e.type) return _r_();
n = u, o = l.data("ga-category"), _ = l.data("ga-action"), s = l.data("ga-label"), d = parseInt(l.data("ga-value"), 10), c = l.data("ga-track-pageview");
}
n && "string" == typeof n ? o && _ && s ? ("number" == typeof d && d >= 0 ? i.trackEvent(o, _, s, d) :i.trackEvent(o, _, s), r.log("trackEvent:", a({
category:o,
action:_,
label:s,
value:d
}))) :c && (i.trackPageview(null, c), r.log("trackPageview:", a({
pageview:c
}))) :r.warn("trackEvent: DOM Event:" + n + " not supported!"), _r_();
}), _r_();
}), function() {
_i_("3dab:bfb3b398");
var e = B.require("jquery"), t = B.require("ga/deprecated-custom-track-click"), i = B.require("ga-tracker"), n = function() {
if (_i_("3dab:b915aa01"), "undefined" != typeof _gaq) {
var n = function() {
if (_i_("3dab:78dd4c58"), "undefined" != typeof booking.env.b_changed_language) {
var e = booking.env.b_lang_for_url, t = booking.env.b_changed_language;
i.trackEvent(i.changeTracker, "Language", "From " + t + " to " + e);
}
_r_();
};
B.when({
events:"load"
}).run(n);
for (var r = e(".error, .errorSimpleMsg"), a = 0; a < r.length; a++) if (0 == e(r[a]).hasClass("disabled")) {
var o = r[a].getAttribute("rel");
null != o && i.trackEvent(i.errorTracker, "Display", o);
}
t(), "undefined" != typeof trigger_error404_event_tracking && 1 == trigger_error404_event_tracking && i.trackEvent(i.pageviewTracker, "404 Error", document.location.pathname + document.location.search + "&from=" + document.referrer), e("#bookconditions").click(function() {
_i_("3dab:7d2c24c0"), i.trackEvent(i.clickTracker, "Booking Conditions", "Link clicked"), _r_();
}), e("#localcurr_dis a").mouseenter(function() {
_i_("3dab:f5b0c739"), i.trackEvent(i.clickTracker, "Action: " + booking.env.b_action, "hover_tooltip_local_currency"), _r_();
}), booking.env.smart_deals_count && booking.env.smart_deals_count > 0 && i.trackEvent(i.viewTracker, "Smart deal filter", booking.env.smart_deals_count + " deals displayed");
}
return _r_(!0);
};
B.when({
events:"ready"
}).run(n), _r_();
}(), B.when({
events:"load"
}).run(function() {
if (_i_("3dab:5f7c00c1"), "undefined" == typeof B.env.google_analytics_tracking_enabled || !B.env.google_analytics_tracking_enabled) return _r_();
var e, t = booking.env, i = t.b_action, n = booking.require("ga-tracker");
t.survey_key && $('div#survey[surveykey="' + t.survey_key + '"] button[value="accept"]').click(function() {
_i_("3dab:e400568c"), n.trackPageview("click", t.surveytracklink), _r_();
}), "confirmation" === i && $("#external_review_invite_link").click(function() {
_i_("3dab:67b9b06c"), n.trackPageview("click", "/outgoinglink/confirmation/external_review_invite/"), _r_();
}), /error/.test(i) && (e = (t.b_referrer || "").split("?")[0].replace(window.location.origin, "") || "dont-know", n.trackPageview("click", "/error-action/" + i + "/caused-by" + e)), _r_();
}), B.define("gta/impression-tracking", [ "et", "jquery" ], function(e, t) {
_i_("3dab:63b1bd46");
var i = !0, n = [], r = [], a = null;
function o(e, t) {
_i_("3dab:c44c484b");
var i = e.getAttribute("id");
i || (i = ("gta-" + t.getMethodName() + "-" + t.getCurrentPlacementName()).toLowerCase(), e.setAttribute("id", i)), B.when({
events:[ "view #" + i, "gta:lightbox:init #" + i ]
}).run(function() {
_i_("3dab:8852ad20"), d(t.getCurrentPlacementName(), t.getMethodName()), _r_();
}), _r_();
}
function _(e) {
_i_("3dab:14e5b59f");
var t = e.getAttribute("id"), i = e.getAttribute("data-placement");
t || (t = ("gta-link-" + i).toLowerCase(), e.setAttribute("id", t)), B.when({
events:[ "view #" + t, "gta:lightbox:init #" + t ]
}).run(function() {
_i_("3dab:379165dd"), d(i, "link"), _r_();
}), _r_();
}
function s() {
_i_("3dab:5b0ebc5b"), n.length && r.length && (c({
placement:n.join("|"),
method:r.join("|")
}), n.length = 0, r.length = 0), _r_();
}
function d(e, t) {
if (_i_("3dab:61fd73f4"), !e || !t) return _r_();
i ? (clearTimeout(a), n.push(e), r.push(t), a = setTimeout(s, 500)) :c({
placement:e,
method:t
}), _r_();
}
function c(e) {
_i_("3dab:67a84fd8"), t.ajax({
url:"/gta_impression",
type:"POST",
data:e
}), _r_();
}
return _r_({
trackWidgetImpressionOnView:function(e, t) {
_i_("3dab:9acdd93a"), o(e, t), _r_();
},
trackLinkImpressionOnView:function(e) {
_i_("3dab:4df570ab"), _(e), _r_();
},
trackImpression:function(e, t) {
_i_("3dab:af56aff9"), d(e, t), _r_();
}
});
}), B.require([ "gta/impression-tracking", "jquery" ], function(e, t) {
_i_("3dab:92f2595c"), t(".gta-link-track").each(function(t, i) {
_i_("3dab:506a2561"), e.trackLinkImpressionOnView(i), _r_();
}), _r_();
}), B.define("gta/country-flags-dropdown", [ "et" ], function(e) {
return _i_("3dab:42f901bd"), _r_({
init:function(e, t) {
_i_("3dab:a13c9743");
var i = t || $(".gta-country-flag-dropdown").get(0), n = $(".gta-cfd-list", i), r = $(".gta-cfd-value", i), a = r.children(".cprefix"), o = r.children('[class^="cflag"]').get(0), _ = n.children(), s = !1, d = $(document);
e.setCountryCode(a.data("prefix"), {
isUserAction:!1
});
function c() {
_i_("3dab:0f86853e"), n.hide(), s = !1, d.unbind("click", u), d.unbind("keypress", f), _r_();
}
function l() {
_i_("3dab:b591dd8b"), n.show(), s = !0, d.bind("click", u), d.bind("keypress", f), _r_();
}
function u(e) {
_i_("3dab:c7ad6cd7"), $.contains(i, e.target) || c(), _r_();
}
function f(e) {
_i_("3dab:a55a2098");
var t = String.fromCharCode(e.which).toLowerCase().replace(/[\n\s]/g, "");
if (!t.length) return _r_();
var i = _.filter('[data-s^="' + t + '"]').get(0);
if (i) {
var n = d.scrollTop();
i.scrollIntoView(!0), d.scrollTop(n);
}
_r_();
}
n.delegate("li", "click", function() {
_i_("3dab:d7990be0");
var t = $(this).data();
a.text(t.cc + " +" + t.prefix), o.className = o.className.replace(/cflag-\w+/, "cflag-" + t.cc.toLowerCase()), e.setCountryCode(t.prefix, {
isUserAction:!0
}), c(), _r_();
}), r.bind("click", function() {
_i_("3dab:875235a3"), s ? c() :l(), _r_();
}), _r_();
}
});
}), B.define("gta/base-widget", [ "gta/impression-tracking", "et" ], function(e, t) {
_i_("3dab:8dd7f8a3");
var i = [ "placement", "exp", "variant", "source", "city", "firstname", "lastname", "booknumber", "pincode", "authkey" ], n = function(e) {
_i_("3dab:865cec96"), this.dom = {
root:e,
wrapper:e.parent(),
label:e.find(".gta-widget-label"),
input:e.find(".gta-widget-input"),
button:e.find(".gta-widget-submit"),
message:e.find(".gta-widget-message")
}, this.sharedParams = this.dom.wrapper.data(), this.payload = this.getPayload(), this.isInputMasked = this.dom.input.hasClass("gta-widget-input-masked"), this.addEvents(), _r_();
};
return n.prototype.addEvents = function() {
_i_("3dab:d26b7eda"), this.dom.button.bind("click", this.onSubmit.bind(this)), this.dom.label.bind("click", function() {
_i_("3dab:2edbbe14"), this.dom.input.focus(), _r_();
}.bind(this)), this.dom.input.bind("keyup", function(e) {
_i_("3dab:79d9e5fc"), 13 == e.keyCode && this.onSubmit(e), _r_();
}.bind(this)), e.trackWidgetImpressionOnView(this.dom.root.get(0), this), _r_();
}, n.prototype.getPayload = function() {
_i_("3dab:d673635c");
var e = {
stype:B.env.b_site_type_id,
page:B.env.b_action
};
for (var t in this.sharedParams) this.sharedParams.hasOwnProperty(t) && i.indexOf(t) > -1 && (e[t] = this.sharedParams[t]);
return _r_(e);
}, n.prototype.getCurrentPlacementName = function() {
return _i_("3dab:caf9552e"), _r_(this.dom.wrapper.data("override-placement") || this.sharedParams.placement);
}, n.prototype.getMethodName = function() {
return _i_("3dab:5daac92e"), _r_(this.method);
}, n.prototype.onSubmit = function(e) {
if (_i_("3dab:36b2b9ef"), e.preventDefault(), this.hideMessage(), !this.validate()) return _r_();
this.payload.placement = this.getCurrentPlacementName(), this.disableInputs(), this.sendRequest(), _r_();
}, n.prototype.sendRequest = function() {
_i_("3dab:c8b3fc48"), $.ajax({
url:this.action,
type:"POST",
data:this.payload,
success:this.onSucessCallback.bind(this),
error:this.onErrorCallback.bind(this)
}), _r_();
}, n.prototype.onSucessCallback = function(e) {
if (_i_("3dab:702ef623"), "true" === e.isOk) this.showMessage("success"), this.enableInputs(); else switch (e.err) {
case "limited":
this.showMessage("limit");
break;

case "multiple":
this.showMessage("multiple");
break;

case "invalid":
this.showMessage("validation"), this.enableInputs(), this.dom.input.focus();
break;

default:
this.showMessage("error"), this.enableInputs();
}
_r_();
}, n.prototype.onErrorCallback = function() {
_i_("3dab:8000f1fe"), this.showMessage("error"), this.enableInputs(), _r_();
}, n.prototype.validate = function() {
return _i_("3dab:8039e006"), _r_(!1);
}, n.prototype.showMessage = function(e) {
_i_("3dab:92e86ccc"), this.dom.message.addClass(e.indexOf("success") > -1 ? "success" :"invalid").text(this.dom.message.data(e)), this.dom.message.slideDown(), _r_();
}, n.prototype.hideMessage = function() {
_i_("3dab:178d7939"), this.dom.message.hide().removeClass("success").removeClass("invalid"), _r_();
}, n.prototype.disableInputs = function() {
_i_("3dab:09de76ea"), this.dom.button.attr("disabled", !0), this.dom.input.attr("disabled", !0), _r_();
}, n.prototype.enableInputs = function() {
_i_("3dab:dfe9246f"), this.dom.button.removeAttr("disabled"), this.dom.input.removeAttr("disabled"), _r_();
}, n.extend = function() {
if (_i_("3dab:5a9ded99"), void 0 != Object.create) return _r_(Object.create(n.prototype));
function e() {}
return e.prototype = n.prototype, _r_(new e());
}, _r_(n);
}), B.define("gta/sms-widget", [ "gta/base-widget", "gta/country-flags-dropdown", "et" ], function(e, t, i) {
_i_("3dab:38c8cf36");
var n = function(i) {
_i_("3dab:b6ed42fb"), this.method = "sms", this.action = "/send_app_sms_v2", e.apply(this, arguments), this.dom.countryFlagsDropdown = this.dom.root.find(".gta-country-flag-dropdown"), this.countryCode = "", this.dom.countryFlagsDropdown.length && t.init(this, this.dom.countryFlagsDropdown.get(0)), _r_();
};
return n.prototype = e.extend(), n.prototype.addEvents = function() {
_i_("3dab:218d0abd"), e.prototype.addEvents.apply(this, arguments);
var t = this;
this.isInputMasked && (this.dom.input.one("input", function(e) {
_i_("3dab:7d3088aa"), t.clearMaskedInput(e.originalEvent.data), _r_();
}), this.dom.input.one("oncut", function() {
_i_("3dab:104081c4"), setTimeout(t.clearMaskedInput, 0), _r_();
}), this.dom.input.one("onpropertychange", function() {
_i_("3dab:1525a7d7"), "value" == event.propertyName && t.clearMaskedInput(), _r_();
})), _r_();
}, n.prototype.getPayload = function() {
_i_("3dab:67da518c");
var t = e.prototype.getPayload.apply(this);
return t.msgtype = "app_download_sms", _r_(t);
}, n.prototype.validate = function() {
if (_i_("3dab:a5486b01"), this.isInputMasked) return delete this.payload.telno, delete this.payload.cc_prefix, _r_(!0);
var e = this.countryCode + this.dom.input.val().replace(/\D/g, "");
if (e.length < 6) return this.showMessage("validation"), _r_(!1);
return this.payload.telno = e, this.payload.cc_prefix = this.countryCode, _r_(!0);
}, n.prototype.setCountryCode = function(e, t) {
_i_("3dab:cc4966d4"), this.countryCode = e, this.isInputMasked && t.isUserAction && this.clearMaskedInput(), _r_();
}, n.prototype.clearMaskedInput = function(e) {
return _i_("3dab:beb21aea"), this.dom.input.val(e ? e :""), this.isInputMasked = !1, _r_(!0);
}, _r_(n);
}), B.define("gta/quick-sms-widget", [ "gta/base-widget", "et" ], function(e, t) {
_i_("3dab:c010e0b3");
var i = function(t) {
_i_("3dab:e55306a8"), this.method = "sms", this.action = "/send_app_sms_v2", e.apply(this, arguments), _r_();
};
return i.prototype = e.extend(), i.prototype.getPayload = function() {
_i_("3dab:67da518c1");
var t = e.prototype.getPayload.apply(this);
return t.msgtype = "app_download_sms", _r_(t);
}, i.prototype.validate = function() {
return _i_("3dab:d7e5665c"), _r_(!0);
}, _r_(i);
}), B.define("gta/email-widget", [ "gta/base-widget" ], function(e) {
_i_("3dab:d5013e03");
var t = function(t) {
_i_("3dab:3aa5b941"), this.method = "email", this.action = "/send_app_email_v2", e.apply(this, arguments), _r_();
};
return t.prototype = e.extend(), t.prototype.getPayload = function() {
_i_("3dab:47592219");
var t = e.prototype.getPayload.apply(this);
return t.msgtype = "app_download_email", _r_(t);
}, t.prototype.validate = function() {
_i_("3dab:b32132d0");
var e = this.dom.input.val();
if (!e) return _r_(!1);
if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)) return this.showMessage("validation"), _r_(!1);
return this.payload.email = e, _r_(!0);
}, _r_(t);
}), B.require([ "gta/sms-widget", "gta/quick-sms-widget", "gta/email-widget", "gta/base-widget", "et" ], function(e, t, i, n, r) {
_i_("3dab:64947b35");
var a = [];
$(".gta-sms-widget").each(function(t, i) {
_i_("3dab:e98a91ec"), a.push(new e($(i))), _r_();
}), $(".gta-sms-widget-quick").each(function(e, i) {
_i_("3dab:4c8872ae"), a.push(new t($(i))), _r_();
}), $(".gta-email-widget").each(function(e, t) {
_i_("3dab:8d2d2104"), a.push(new i($(t))), _r_();
}), _r_();
}), B.require([ "gta/impression-tracking", "et", "jquery" ], function(e, t, i) {
_i_("3dab:493c26ec");
var n = function(e) {
_i_("3dab:5e94fa5d"), this.placeholder = i(e), this.placement = this.placeholder.data("placement"), this.image = null, this.init(), _r_();
};
n.prototype.loadImage = function() {
_i_("3dab:a6957317"), this.image = new Image(), this.image.onload = function() {
_i_("3dab:79864654"), this.placeholder.empty().append(this.image), e.trackImpression(this.placement, "qr"), _r_();
}.bind(this), this.image.src = this.placeholder.data("url"), _r_();
}, n.prototype.init = function() {
_i_("3dab:06b0b05e"), B.when({
events:[ "view #" + this.placeholder.attr("id"), "gta:lightbox:init #" + this.placeholder.attr("id") ]
}).run(this.loadImage.bind(this)), _r_();
}, i(".gta-qr-code-placeholder").each(function(e, t) {
_i_("3dab:61406f08"), new n(t), _r_();
}), _r_();
}), B.define("header/notifications/notifications", function(e, t, i) {
"use strict";
_i_("3dab:8ba34c83");
var n = !1, r = "1" === B.env.b_site_type_id, a = "2" === B.env.b_site_type_id;
i.exports = {
isLoggedIn:function() {
return _i_("3dab:931f52ac"), _r_(Number(B.env.auth_level) > 0);
},
init:function() {
_i_("3dab:3aa75bd1"), this.$root = $(".js-uc-notifications"), this._readNotificationsFromDOM(), this.isLoggedIn() && this.updateState(), this.bindEvents(), (this.getNotifications("unseen").length > 0 || this._hasMultipleTravelGuides) && this.lazySeen(), _r_();
},
refresh:function() {
_i_("3dab:565012a6"), this._readNotificationsFromDOM(), this.isLoggedIn() && this.updateState(), _r_();
},
_readNotificationsFromDOM:function() {
_i_("3dab:b8e7fbe5"), this._notifications = this.$root.find(".js-uc-notification").map(function(e, t) {
return _i_("3dab:a54f604e"), t = $(t), _r_({
type:t.attr("data-type"),
fingerprint:t.attr("data-fingerprint"),
id:t.data("id"),
seen:"0" !== String(t.attr("data-seen"))
});
}).toArray(), this._hasMultipleTravelGuides = this.getNotificationsByType("explorer_available").length > 1 || this.getNotificationsByType("multiple_travel_guides").length, _r_();
},
lazySeen:function() {
_i_("3dab:2ced830b");
var e = /notif_id=([\w\d]+)/.exec(window.location.href);
if (null == e) return _r_();
var t = e[1], i = this._notifications.filter(function(e) {
return _i_("3dab:929c7feb"), _r_(e.id === t);
})[0];
if (void 0 === i) return _r_();
r && this._hasMultipleTravelGuides && ("multiple_travel_guides" === i.type || "explorer_available" === i.type), _r_();
},
seen:function(e, t) {
_i_("3dab:1d8ecce9"), e.seen = t, this.getNotificationNode(e).toggleClass("uc-notification-seen", t).toggleClass("uc-notification-unseen", !t), _r_();
},
markAsSeen:function(e) {
_i_("3dab:1e3cb4ab");
var t = this;
if (0 === e.length) return _r_();
var i = JSON.stringify(e), r = "/seen_notifications";
if (e.forEach(function(e) {
_i_("3dab:3662a5c0"), t.seen(e, !0), _r_();
}), this.updateState(), n) return _r_();
$.ajax({
type:"POST",
url:r,
data:{
notifications:i
}
}), _r_();
},
_setCount:function(e) {
_i_("3dab:c1738758");
var t = a ? $(".js-uc-notifications-bell-count") :this.$root.find(".js-uc-notifications-bell-count");
if (0 === t.length) return _r_();
t.text(e), t.toggleClass("g-hidden", 0 === e), a && this.$root.toggleClass("g-hidden", 0 === this._notifications.length), _r_();
},
updateState:function() {
_i_("3dab:c86c7eab"), this.updateCounter(), this.$root.toggleClass("uc-notifactions-has-unseen", this.getNotifications("unseen").length > 0), _r_();
},
updateCounter:function() {
_i_("3dab:80360728"), this._setCount(this.getNotifications("unseen").length + this._getUnseenCountsFromGroups()), this.$root.toggleClass("uc-notifications_new", 0 !== this.getNotifications().length), _r_();
},
bindEvents:function() {
_i_("3dab:e4a7afb7");
var e = this;
B.eventEmitter.bind("header:notifications:item_removed", function() {
_i_("3dab:c12c9157"), e.updateState(), _r_();
}), B.eventEmitter.bind("uc_popover_showed", function(e, t) {
_i_("3dab:f510579c"), "notifications" === t.id && B.et.stage("HSLLaAbVTcOAYSYC", 8), _r_();
}), r && (B.eventEmitter.bind("uc_popover_showed", function(e, t) {
_i_("3dab:f10957b8"), "notifications" === t.id && (B.eventEmitter.trigger("header:notifications:shown"), B.events.emit("header:notifications:shown")), _r_();
}), this.$root.delegate(".js-uc-notification a", "click", function(t) {
_i_("3dab:45271395");
var i = e.getNotificationFromEvent(t);
if (null == i) return _r_();
_r_();
})), B.eventEmitter.bind("header:notifications:hidden", function() {
_i_("3dab:c12c91571"), e.updateState(), _r_();
}), this.$root.delegate(".js-uc-notification-close", "click", function(t) {
_i_("3dab:875d9411");
var i = e.getNotificationFromEvent(t);
e.hideNotification(i), _r_();
}), this.$root.delegate(".js-uc-notification-seen", "click", function(t) {
_i_("3dab:003864cd");
var i = e.getNotificationFromEvent(t);
"thread" === i.type || e.markAsSeen([ i ]), _r_();
}), _r_();
},
getNotificationNode:function(e) {
return _i_("3dab:38cc357d"), _r_(this.$root.find('[data-fingerprint="' + e.fingerprint + '"][data-type="' + e.type + '"]'));
},
getNotificationData:function(e) {
_i_("3dab:05be805f");
var t = null;
return this.getNotifications().forEach(function(i) {
_i_("3dab:37dc55f6"), $(e).attr("data-type") === i.type && $(e).attr("data-fingerprint") === i.fingerprint && (t = i), _r_();
}), _r_(t);
},
getNotificationFromEvent:function(e) {
_i_("3dab:fb8d4ec6");
var t = $(e.currentTarget).closest(".js-uc-notification");
return _r_(t && this.getNotificationData(t));
},
hideNotification:function(e) {
_i_("3dab:4c722f39");
var t = this.getNotifications().indexOf(e);
n || $.post("/dismiss_user_notification", e), this.getNotificationNode(e).addClass("uc-notification_hidden"), -1 !== t && this.getNotifications().splice(t, 1), B.eventEmitter.trigger("header:notifications:item_removed"), _r_();
},
_filters:{
seen:function(e) {
return _i_("3dab:db3c9429"), _r_(e.seen);
},
unseen:function(e) {
return _i_("3dab:67b995e6"), _r_(!e.seen);
}
},
getNotifications:function(e) {
if (_i_("3dab:b0d5cd85"), this._filters[e]) return _r_(this._notifications.filter(this._filters[e]));
return _r_(this._notifications);
},
getNotificationsByType:function(e) {
return _i_("3dab:ac5a446e"), _r_(this._notifications.filter(function(t) {
return _i_("3dab:1e97e6a6"), _r_(t.type === e);
}));
},
_getUnseenCountsFromGroups:function() {
_i_("3dab:0463b189");
var e = 0;
return this.$root.find(".uc-notifications-group_iframe").each(function(t, i) {
_i_("3dab:3bc423a2");
var n = $(i).data("unread-count");
"undefined" != typeof n && (e += n), _r_();
}), _r_(e);
}
}, _r_();
}), B.require([ "require" ], function(e) {
_i_("3dab:17952b9a"), e("header/notifications/notifications").init(), _r_();
}), function() {
_i_("3dab:51baaa0c");
var e = {
priority:9,
init:function() {
_i_("3dab:a47a8dca"), $(".js-user-access-form--back-to-signin").click(function() {
_i_("3dab:37437f5d");
var e = $(".user_access_signin_menu, .user_access_signup_menu");
e.find(".js-user-access-form--signin").removeClass("g-hidden"), e.find(".js-user-access-form--signup").removeClass("g-hidden"), e.find(".js-user-access-form--reminder").addClass("g-hidden"), e.find(".js-user-access-form--reminder-sent").addClass("g-hidden"), _r_();
}), $("body").delegate(".forgot_link_look, .forgot_pass_trigger", "click", function(e) {
if (_i_("3dab:889b3219"), e.preventDefault(), B.env.b_show_user_accounts_features && $(this).closest(".user_access_signin_menu, .user_access_signup_menu").length) {
var t = $(this).closest(".user_access_signin_menu, .user_access_signup_menu");
t.find(".js-user-access-form--signin").addClass("g-hidden"), t.find(".js-user-access-form--signup").addClass("g-hidden"), t.find(".js-user-access-form--reminder").removeClass("g-hidden"), t.find(".js-user-access-form--reminder .user_access_email").val(t.find(".js-user-access-form--signin .user_access_email, .js-user-access-form--signup .user_access_email").val()).focus().select(), booking.eventEmitter.one("UA:password-reminder-sent", function() {
_i_("3dab:bf6b001d"), t.find(".form-loading").hide(), t.find(".alert-error").removeClass("alert-displayed"), t.find(".js-user-access-form--reminder").addClass("g-hidden"), t.find(".js-user-access-form--reminder-sent").removeClass("g-hidden"), _r_();
});
} else {
var i = $(this).attr("data-href") || $(this).attr("href");
window.open(i, "_blank", "left=42,top=42,height=502px,width=440px,resizable=false");
}
_r_();
}), $("#foldout_loggedin").delegate("li", "click", function() {
_i_("3dab:f9a06e3a");
var e = $(this);
e.hasClass("seo_link_look") && e.attr("data-href") && (e.hasClass("my_logout") || (window.location = e.attr("data-href"))), _r_();
}), $("body").delegate(".js-sso-link", "click", function(e) {
_i_("3dab:3de666c4"), window.location = $(".js-sso-link").data("sso-url"), e.preventDefault(), _r_();
}), _r_();
}
};
B.when({
events:"ready"
}).run(function(t) {
_i_("3dab:ce733f75"), e.init(), _r_();
}), _r_();
}(), function() {
"use strict";
_i_("3dab:cdb0ac4b");
var e, t = window.jQuery, i = {
selector_badge:".d-deal",
className_tt_left:"d-deal__tooltip-left",
className_tt_right:"d-deal__tooltip-right",
className_tt_preinit:"d-deal__pre-init"
}, n = t(window);
function r() {
_i_("3dab:7ca5f83b"), clearTimeout(e), e = setTimeout(function() {
_i_("3dab:38a9732c");
var r, a, o = n.width() || 1e3;
clearTimeout(e), t(i.selector_badge).each(function(e, n) {
_i_("3dab:d83f2847"), r = t(n), r.removeClass(i.className_tt_preinit), r.removeClass(i.className_tt_left), r.removeClass(i.className_tt_right), a = r.offset().left, a > o - 270 ? r.addClass(i.className_tt_right) :200 > a && r.addClass(i.className_tt_left), _r_();
}), _r_();
}, 300), _r_();
}
r(), t(window).on("resize", r), _r_();
}(), "object" != typeof JSON && (JSON = {}), function() {
"use strict";
_i_("3dab:c157ac7b");
function f(e) {
return _i_("3dab:30074bcf"), _r_(10 > e ? "0" + e :e);
}
"function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
return _i_("3dab:f0009810"), _r_(isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" :null);
}, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
return _i_("3dab:4c255ce0"), _r_(this.valueOf());
});
var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
"\b":"\\b",
"	":"\\t",
"\n":"\\n",
"\f":"\\f",
"\r":"\\r",
'"':'\\"',
"\\":"\\\\"
}, rep;
function quote(e) {
return _i_("3dab:e0b6aac3"), escapable.lastIndex = 0, _r_(escapable.test(e) ? '"' + e.replace(escapable, function(e) {
_i_("3dab:96b3f70a");
var t = meta[e];
return _r_("string" == typeof t ? t :"\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4));
}) + '"' :'"' + e + '"');
}
function str(e, t) {
_i_("3dab:681e8617");
var i, n, r, a, o, _ = gap, s = t[e];
switch (s && "object" == typeof s && "function" == typeof s.toJSON && (s = s.toJSON(e)), "function" == typeof rep && (s = rep.call(t, e, s)), typeof s) {
case "string":
return _r_(quote(s));

case "number":
return _r_(isFinite(s) ? String(s) :"null");

case "boolean":
case "null":
return _r_(String(s));

case "object":
if (!s) return _r_("null");
if (gap += indent, o = [], "[object Array]" === Object.prototype.toString.apply(s)) {
for (a = s.length, i = 0; a > i; i += 1) o[i] = str(i, s) || "null";
return r = 0 === o.length ? "[]" :gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + _ + "]" :"[" + o.join(",") + "]", gap = _, _r_(r);
}
if (rep && "object" == typeof rep) for (a = rep.length, i = 0; a > i; i += 1) "string" == typeof rep[i] && (n = rep[i], r = str(n, s), r && o.push(quote(n) + (gap ? ": " :":") + r)); else for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (r = str(n, s), r && o.push(quote(n) + (gap ? ": " :":") + r));
return r = 0 === o.length ? "{}" :gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + _ + "}" :"{" + o.join(",") + "}", gap = _, _r_(r);
}
_r_();
}
"function" != typeof JSON.stringify && (JSON.stringify = function(e, t, i) {
_i_("3dab:e7f569e9");
var n;
if (gap = "", indent = "", "number" == typeof i) for (n = 0; i > n; n += 1) indent += " "; else "string" == typeof i && (indent = i);
if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
return _r_(str("", {
"":e
}));
}), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
_i_("3dab:fef0449c");
var j;
function walk(e, t) {
_i_("3dab:ebd021fc");
var i, n, r = e[t];
if (r && "object" == typeof r) for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (n = walk(r, i), void 0 !== n ? r[i] = n :delete r[i]);
return _r_(reviver.call(e, t, r));
}
if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
return _i_("3dab:eb610b61"), _r_("\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4));
})), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), _r_("function" == typeof reviver ? walk({
"":j
}, "") :j);
throw new SyntaxError("JSON.parse");
}), _r_();
}(), $.cookie("b") ? window.b_cookie = JSON.parse($.cookie("b")) || {} :window.b_cookie = {};

var dont_execute_in_tdot = function() {
_i_("3dab:a83bf93d");
var e = B.require("jquery"), t = booking.env, i = {
priority:9,
init:function() {
_i_("3dab:029361c1");
var n = function() {
_i_("3dab:fe2d7504"), window.b_cookie.langPrompt = "dontshow", "undefined" != typeof JSON && e.cookie("b", JSON.stringify(window.b_cookie), {
expires:30,
path:"/",
domain:t.b_domain_end
}), _r_();
};
if ("undefined" == typeof window.b_cookie && (window.b_cookie = {}), e("#langselectbutton, #languageselect input").hide(), e("#langselectformlist, #currList").change(function() {
_i_("3dab:6de1efb7"), e("#languageselect")[0].submit(), n(), _r_();
}), e(".current_language, .prompt_close").click(function(t) {
_i_("3dab:58829dfb"), t.preventDefault(), e(".language_prompt").hide(), e.get("/general." + booking.env.b_lang + ".html?tmpl=blank"), _r_();
}), e(".language_flags").click(function() {
_i_("3dab:76795bb4"), n(), _r_();
}), t.show_language_suggestion) {
if (window.b_cookie.countLang) if (isNaN(window.b_cookie.countLang)) t.language_dialog_count2 = 1, window.b_cookie.countLang = 1; else {
var r = parseInt(parseInt(window.b_cookie.countLang, 10) + 1, 10);
4 >= r && (t.language_dialog_count2 = r, window.b_cookie.countLang = t.language_dialog_count2);
} else t.language_dialog_count2 = 1, window.b_cookie.countLang = 1;
"undefined" != typeof JSON && e.cookie("b", JSON.stringify(window.b_cookie), {
expires:30,
path:"/",
domain:t.b_domain_end
}), "dontshow" !== window.b_cookie.langPrompt && t.language_dialog_count2 < 4 && !booking.affiliate.platform.isHybrid && setTimeout(i.createAlert, 2e3);
}
_r_();
},
createAlert:function(i) {
_i_("3dab:fa914c6b");
var n, r = t.show_language_suggestion, a = !1, o = "", _ = "", s = "";
if (r) {
var d = 230, c = e("#current_currency").width(), l = e("#current_language").width(), u = Math.round(c + l / 2 - d / 2), f = "";
e("#languageselect .language-wrapper").length ? (n = e("#languageselect .language-wrapper"), o = "margin-top:10px;", _ = "top: -2px;", t.b_is_ie7 && (s = "margin-top:25px;left:100px;"), a = !0) :(n = e("#personal_form"), _ = "top: -11px;", s = "top:40px;"), f += '<div id="lang-prompt" style="display:none;height:1px;position:absolute;z-index:50;width:' + d + "px;left:" + u + "px;" + s + '"><div style="position:absolute;zoom:1;' + _ + ";left:120px;width:17px;height:13px;background:url('//q.bstatic.com/static/img/experiments/top-info-arrrow2/932e26ee2c70a335e5031bf87df7595bf93ca5b9.png');\"></div><div style=\"border:2px solid #a2bbda;padding:10px;background:#e6edf6;width:230px;-moz-box-shadow:0 1px 2px rgba(0,0,0,.7);-webkit-box-shadow:0 1px 2px rgba(0,0,0,.7);" + o + '"><a href="#" class="close" style="float:right;font-weight:normal;font-size:12px;line-height:1.3;opacity:.35;filter:alpha(opacity=35);">' + t.transl_close_x + "</a>", f += '<a href="#scs" id="lang_change_link" class="lang_change_link" style="display:block;font-weight:normal;margin-right:50px;padding-left:40px;white-space:normal;background:url(' + B.tools.jsStaticUrl("/static/img/flags/24/" + t.b_flag_to_suggest + ".png") + ') no-repeat;" data-lang-code="' + r.suggested_lang_select + '">' + r.transl_change_page_lang_to_x + "</a>", f += "</div></div>", n.append(f), e("#lang-prompt").fadeIn("slow");
var h = booking.require("ga-tracker");
h.trackEvent(h.clickTracker, "Lang prompt", "Show"), e("#lang-prompt .close").click(function() {
return _i_("3dab:61bee817"), window.b_cookie.langPrompt = "dontshow", "undefined" != typeof JSON && e.cookie("b", JSON.stringify(window.b_cookie), {
expires:30,
path:"/",
domain:t.b_domain_end
}), e("#lang-prompt").hide(), h.trackEvent(h.clickTracker, "Lang prompt", "Close"), _r_(!1);
}), e("#lang-prompt .lang_change_link").click(function() {
_i_("3dab:3ba354c8");
var i;
window.b_cookie.langPrompt = "dontshow", "undefined" != typeof JSON && e.cookie("b", JSON.stringify(window.b_cookie), {
expires:30,
path:"/",
domain:t.b_domain_end
});
var n = e(this).attr("data-lang-code");
a ? (e("#langselectformlist").val(n), e("#languageselect")[0].submit()) :(i = e(".lang_" + n).find("a").attr("href"), i && (window.location = i)), _r_();
});
}
_r_();
}
};
window.addEventListener("load", i.init), _r_();
};

booking.env.b_is_tablet || dont_execute_in_tdot(), function() {
_i_("3dab:437a5d19");
var e = {
priority:9,
resultsPerPage:booking.env.b_is_android_tablet ? 4 :5,
totalPages:0,
currentPage:0,
click:null,
googleTracked:!1,
lastViewedHotels:null,
overlay:null,
ajaxPath:"/userhistory." + booking.env.b_lang_for_url + ".html",
ajaxStatus:0,
staticPath:[],
init:function() {
if (_i_("3dab:0ec63155"), "tdot" !== B.env.b_site_type) return _r_();
this.staticPath = booking.env.b_static_images_hostnames, $("body").append('<div id="ng-overlay" hidden></div>'), this.$overlay = $("#ng-overlay"), this.addEvents(), _r_();
},
addEvents:function() {
_i_("3dab:e290d6cd");
var e = this, t = $("#top_lw_wrapper"), i = $("a#top_last_viewed"), n = booking.require("ga-tracker"), r = "#ng-overlay, #current_account, #header_currency, #header_language, #current_account_create";
i.bind("click", {
exp:e
}, function(i) {
_i_("3dab:24a16dd0");
var r = $("#history_count").attr("data-count");
e.googleTracked || (n.trackEvent(n.clickTracker, "Last Viewed In Header", "Opened Last Viewed Hotels from the header button"), e.googleTracked = !0), e.isVisibleOverlay() && "lw" == e.click ? (e.distroyOverlay(), t.hide()) :(e.createOverlay(), $(".milk_menu").hide(), t.show(), e.click = "lw"), !e.ajaxStatus && r && r - 0 > 0 && e.getLastViewedHotels(), "undefined" != typeof booking.maps && booking.maps.map_opened && booking.maps.close(), i.preventDefault(), _r_();
}), $(r).bind(B.env.pointer_events_f ? "click" :B.env.pointer_events.pointerclick, function(t) {
_i_("3dab:0fa4f4e4");
var i = $(t.target);
"ng-overlay" == i.get(0).id && t.preventDefault(), e.distroyOverlay(), _r_();
}), $("#lw_next, #lw_prev").bind(B.env.pointer_events_f ? "click" :B.env.pointer_events.pointerclick, function(t) {
_i_("3dab:77a054d2");
var i = $(this);
t.preventDefault(), setTimeout(function() {
_i_("3dab:94353142"), e.renderItems(i.data("page")), _r_();
}, 300), _r_();
}), $("#sidebar_last_viewed").bind("click", function(e) {
_i_("3dab:f09955d1"), e.preventDefault(), $(document.body).animate({
scrollTop:0
}, 400, function() {
_i_("3dab:c69d1dd5"), i.trigger("click"), n.trackEvent(n.clickTracker, "Last Viewed In Header", "Opened Last Viewed Hotels from the sidebar button"), _r_();
}), _r_();
}), _r_();
},
handleCookieWarning:function(e) {
if (_i_("3dab:84de2fd5"), "nl" != booking.env.b_guest_country) return _r_();
var t = $("#cookie_warning");
t.length && ("show" == e ? t.show() :t.hide()), _r_();
},
createOverlay:function() {
_i_("3dab:b5f02a7c");
var e = this;
e.handleCookieWarning(), $("#ng-overlay").height($("html").outerHeight(!0)).show(), _r_();
},
distroyOverlay:function() {
_i_("3dab:b149e161");
var e = this;
return $("#ng-overlay").hide(), $("#top_lw_wrapper").hide(), e.handleCookieWarning("show"), $(".milk_menu").hide(), $(".b_recentlyviewed").length && $(".b_recentlyviewed").removeClass("rv-content-visible"), _r_(!1);
},
isVisibleOverlay:function() {
_i_("3dab:352cbc83");
var e = this;
return _r_(e.$overlay.is(":visible"));
},
getLastViewedHotels:function() {
_i_("3dab:637b1048");
var e = this, t = $("#lw_list #spinner");
return e.ajaxStatus = 1, $.ajax && $.ajax({
type:"GET",
cache:!1,
url:e.ajaxPath,
dataType:"JSON",
data:{
last_viewed_json:1,
tmpl:"profile/json",
stid:350339
},
success:function(i) {
if (_i_("3dab:3889b674"), e.ajaxStatus = 2, "object" != typeof i && (i = $.parseJSON(i)), !i || $.isEmptyObject(i) || i instanceof Array && !i.length) return _r_();
e.lastViewedHotels = i, e.totalPages = Math.ceil(i.length / e.resultsPerPage), e.renderItems(1), t.remove(), _r_();
}
}), _r_(!0);
},
renderItems:function(e) {
_i_("3dab:4fe2c1d4");
var t = this, i = $("#lw_next"), n = $("#lw_prev"), r = $("#lw_list"), a = t.lastViewedHotels, o = (e - 1) * t.resultsPerPage, _ = o + t.resultsPerPage;
for (_ = _ > a.length ? a.length :_, r.empty(), t.currentPage = e, o; _ > o; o++) r.append(this.renderItem(a[o]));
t.currentPage < t.totalPages ? i.data("page", t.currentPage + 1).show() :i.hide(), 1 != t.currentPage ? n.data("page", t.currentPage - 1).show() :n.hide(), _r_();
},
renderItem:function(e) {
_i_("3dab:0cf8900b");
var t = this, i = "";
if (i += "<li>", i += '<a class="ui-helper-clearfix" href="', i += booking.env.b_nonsecure_hostname_signup + e.url + booking.env.b_query_params_with_lang, i += booking.env.b_url_params + booking.env.b_query_params_delimiter, "undefined" != booking.env.b_param_do_availability_check && (i += "do_availability_check=on" + booking.env.b_query_params_delimiter, booking.env.b_checkin_date && booking.env.b_checkout_date && (i += "checkin=" + booking.env.b_checkin_date, i += booking.env.b_query_params_delimiter, i += "checkout=" + booking.env.b_checkout_date)), i += '">', e.photo_id) {
var n = Math.round(Math.random());
i += '<img width="60px" height="60px" src="' + t.staticPath[n] + "/images/hotel/square60/" + e.photo_id.substring(0, 3) + "/" + e.photo_id + '.jpg " />';
}
return i += '<span class="lw_hotel_name">' + e.title + "</span>", e.rating && (i += e.class_is_estimated && "de" == e.hotel_cc1 ? '<span class="retina_estimated_small ' + t.loadRetinaRatingClass(e.rating, e.rating_half) + '"></span>' :e.class_is_estimated && "au" == e.hotel_cc1 ? '<span class="retina_estimated_small ' + t.loadRetinaRatingClass(e.rating, e.rating_half) + '"></span>' :'<span class="retina_stars_small ' + t.loadRetinaRatingClass(e.rating, e.rating_half) + '"></span>'), e.address && (i += '<span class="lw_address">' + e.address + "</span>"), i += "</a>", i += "</li>", _r_(i);
},
loadRatingClass:function(e, t) {
return _i_("3dab:4af70438"), _r_(t ? "circle" + e + "i4half" :"circle" + e + "i4");
},
loadRetinaRatingClass:function(e, t) {
return _i_("3dab:ea95d144"), _r_("retina_stars_small_" + e + (t ? "half" :""));
}
};
B.define("t_main_rm_js/ng_last_viewed", function(t, i, n) {
_i_("3dab:8a9dc05f"), n.exports = e, _r_();
}), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:8c6e48b9"), B.require("t_main_rm_js/ng_last_viewed").init(), _r_();
}), _r_();
}(), function() {
_i_("3dab:cb79160c"), B.env && B.env.b_lazy_load_print_css && window.addEventListener("load", function() {
_i_("3dab:030fa6d7");
var e = document.createElement("link");
e.rel = "stylesheet", e.type = "text/css", e.href = booking.env.print_css_href, e.media = "print", document.getElementsByTagName("head")[0].appendChild(e), _r_();
}), _r_();
}(), booking.lightbox = function() {
_i_("3dab:47a1a86e");
var e, t, i, n, r, a, o, _ = $("body"), s = {
bAnimation:!0,
bCloseButton:!0,
bMaskClick:!0,
closeOnEsc:!0,
customWrapperClassName:"",
customMaskClassName:"",
bFullscreen:!1,
hideCallBack:null,
hideBeforeCallBack:null,
positionBeforeCallBack:null,
positionAfterCallBack:null,
cloneElement:!1,
bCanScroll:!1,
bOverflowVisible:!1,
autoCenter:!0,
limitHeight:!1,
opacity:.5,
autoWidth:!1,
position:"fixed",
topMargin:0,
bottomMargin:0,
preventBodyScroll:!1,
trapFocus:!0,
addDialogStartEndText:!1,
modalLabeledById:""
}, d = {}, c = [], l = function() {
_i_("3dab:b0c0e96f");
for (var e = [ "", "moz", "webkit" ], t = !1, i = 0; 3 > i; i++) if (e[i] + ("" === e[i] ? "b" :"B") + "oxSizing" in document.body.style) return _r_(!0);
return _r_(t);
}(), u = !1;
function f() {
_i_("3dab:0a9b623a");
var e = _.width();
o = parseInt(_.css("padding-right"), 10), _.css("overflow", "hidden");
var t = _.width() - e;
_.css("padding-right", o + t), _r_();
}
function h() {
_i_("3dab:347a5263"), _.css({
overflow:"auto",
paddingRight:o
}), _r_();
}
var b = function(i) {
_i_("3dab:4cee35e6");
var n;
d.positionBeforeCallBack && d.positionBeforeCallBack(), e.css({
width:$(document).width(),
height:$(document).height()
});
var r = $(window).width(), a = Math.max(0, $(window).height() - d.topMargin - d.bottomMargin);
if (l || (r = r - parseInt(t.css("paddingLeft")) - parseInt(t.css("paddingRight")), a = a - parseInt(t.css("paddingTop")) - parseInt(t.css("paddingBottom"))), !d.limitHeight) {
var o = Math.max(0, $(window).height() - d.topMargin - d.bottomMargin);
t.outerHeight() > o ? (t.css("height", a), n = !0) :(t.css("height", ""), t.outerHeight() >= o && t.css("height", a));
}
if (t.outerWidth() > $(window).width()) t.css("width", r); else if (t.css("width", ""), t.outerWidth() >= $(window).width()) t.css("width", r); else if (d.autoWidth) {
var _ = t.children().first().outerWidth();
l && (_ += parseInt(t.css("padding-left"), 10) + parseInt(t.css("padding-right"), 10), _ += parseInt(t.css("border-left-width"), 10) + parseInt(t.css("border-right-width"), 10)), t.css({
width:_
});
}
var s = 0, c = 0;
d.bFullscreen ? t.css({
width:r,
height:a
}) :(s = Math.max(d.topMargin, $(window).height() / 2 - t.outerHeight() / 2), c = Math.max(0, $(window).width() / 2 - t.outerWidth() / 2));
var u = "hidden";
d.bCanScroll ? u = "auto" :d.bOverflowVisible && (u = "visible"), "absolute" == d.position ? (s = Math.max(0, $(window).height() / 2 - t.outerHeight() / 2), s += $(document).scrollTop(), t.css("position", "absolute")) :"dynamic" == d.position && !function() {
_i_("3dab:247e6024");
var e = "modal-pos-abs", r = "modal-pos-to-fix";
n ? (s = i && i.preserveAbsolute && t.hasClass(e) ? (t.offset() || {}).top :$(document).scrollTop() + d.topMargin, t.css({
position:"absolute",
height:""
}).addClass(e)) :(t.css({
position:"fixed"
}), t.hasClass(e) ? t.removeClass(e).addClass(r) :t.removeClass(r)), _r_();
}(), t.css({
top:s,
left:c,
overflow:u
}), d.positionAfterCallBack && d.positionAfterCallBack(), _r_();
}, p = function(e) {
_i_("3dab:540f2962"), t && t.is(":visible") && b(e), _r_();
}, g = function() {
if (_i_("3dab:881a5a71"), !t) return _r_();
d.hideBeforeCallBack && d.hideBeforeCallBack(), d.cloneElement || (n.prepend(i), i.css("display", a)), d.trapFocus && booking.trapFocus && booking.trapFocus.release(), e.remove(), t.remove(), u = !1, $("body").removeClass("modal-visible"), $(window).unbind("scroll", p), $(window).unbind("resize", p), d.closeOnEsc && $(document).unbind("keyup", m), $(".modal-wrapper").off("click.userClose"), $("#calendar_popup").css("display", "none"), d.hideCallBack && d.hideCallBack(), d.preventBodyScroll && h(), booking.eventEmitter.trigger("modal:close"), B.events.trigger("modal:close"), _r_();
}, m = function(e) {
_i_("3dab:53ad8b02"), 27 !== e.keyCode || c.length || g(), _r_();
}, v = function() {
_i_("3dab:8fed2503"), $(".modal-wrapper .modal-mask-closeBtn").add('.modal-wrapper [data-lightbox-close=""]').one("click", function() {
_i_("3dab:b5838b9c"), g(), _r_();
}), $(".modal-wrapper").on("click.userClose", ".lightbox-element-close", function() {
_i_("3dab:ab60bbf1"), g(), _r_();
}), d.bMaskClick && $(".modal-mask").one("click", function() {
_i_("3dab:2beba14a"), g(), _r_();
}), d.closeOnEsc && $(document).bind("keyup", m), $(window).bind("resize", p), "absolute" == d.position && d.autoCenter && $(window).bind("scroll", p), _r_();
}, y = function() {
if (_i_("3dab:deba661e"), e = $('<div class="modal-mask"/>').appendTo(document.body), d.customMaskClassName.length > 0 && e.addClass(d.customMaskClassName), t = $('<div class="modal-wrapper"/>').attr({
role:"dialog",
"aria-label":"dialog",
"aria-modal":"true"
}).appendTo(document.body), d.modalLabeledById) {
var n = $("#" + d.modalLabeledById), r = n.text().trim();
n.length && r ? t.attr("aria-label", r) :t.attr("aria-labelledby", d.modalLabeledById);
}
d.customWrapperClassName.length > 0 && t.addClass(d.customWrapperClassName), d.addDialogStartEndText && booking.env.a11y_dialog_content_start_text && $('<span class="invisible_spoken"/>').text(booking.env.a11y_dialog_content_start_text).appendTo(t), d.cloneElement ? i.clone().appendTo(t) :t.append(i), d.bCloseButton && $('<button class="modal-mask-closeBtn" title="' + booking.env.experiment_popups_close + '"><span class="invisible_spoken">' + booking.env.experiment_popups_close + "</span></button>").appendTo(t), d.addDialogStartEndText && booking.env.a11y_dialog_content_end_text && $('<span class="invisible_spoken"/>').text(booking.env.a11y_dialog_content_end_text).appendTo(t), d.bFullscreen && t.addClass("modal-wrapper--fullscreen"), u = !0, $("body").addClass("modal-visible"), d.preventBodyScroll && f(), i.show(), b(), v(), _r_();
}, w = function() {
if (_i_("3dab:77b79d8f"), y(), t.css("visibility", "visible"), d.bAnimation) {
var i = d.bAnimation;
"number" != typeof i && (i = parseInt(i, 10) || 1e3), e.fadeTo(Math.max(0, Math.min(600, i - 400)), d.opacity), t.css("opacity", "0").animate({
opacity:1
}, i, function() {
_i_("3dab:2e039ac2"), $(this).css("opacity", ""), _r_();
}), d.trapFocus && booking.trapFocus && setTimeout(function() {
_i_("3dab:e718942f"), booking.trapFocus.trap(t[0], r), r = null, _r_();
}, 100);
} else e.css("opacity", d.opacity).show(), d.trapFocus && booking.trapFocus && (booking.trapFocus.trap(t[0], r), r = null);
d.ajax && "function" == typeof d.loadCallBack && d.loadCallBack.call(), booking.eventEmitter.trigger("modal:open"), B.events.trigger("modal:open"), _r_();
}, k = function(e, o, _) {
if (_i_("3dab:8db3284d"), t && t.is(":visible")) return _r_();
if (d = {}, $.extend(d, s, o), d.trapFocus && "undefined" == typeof booking.trapFocus && B.debug("The trapFocus module was not defined, include please tarpFocus module in your concat"), d.trapFocus && booking.trapFocus && (r = $(document.activeElement)), d.iframe) {
var c = $('<iframe id="lightbox_iframe" src="' + e + '" width="100%" height="' + d.iframeHeight + '"></iframe> ');
"function" == typeof d.loadCallBack && c.load(d.loadCallBack), i = c, n = i.parent(), a = i.css("display"), w();
} else d.ajax ? jQuery.ajax({
url:e,
cache:!0,
success:function(e) {
_i_("3dab:7acdb394"), i = d.ajaxRawContent ? $(e) :$($.trim(e)).eq(0), n = i.parent(), a = i.css("display"), w(), _r_();
}
}) :(i = $(e), i.length && "SCRIPT" === i[0].tagName && (i = $($.trim(i.html()))), n = i.parent(), a = i.css("display"), w());
return "undefined" != typeof _ && _(), _r_(t);
}, M = function(e, t, i, n) {
_i_("3dab:c48b243c"), booking.lightbox.show($("#" + n)), _r_();
};
return _r_({
show:k,
hide:g,
rePosition:p,
open:M,
isVisible:function() {
return _i_("3dab:460df769"), _r_(u);
},
pushEscStack:function(e) {
_i_("3dab:5fd3d9f7"), c.push(e), _r_();
},
popEscStack:function() {
_i_("3dab:29642ab7"), c.pop(), _r_();
},
hideWithFade:function(i, n) {
_i_("3dab:0cf0d60c"), t.fadeOut(i), e.fadeOut(i, function() {
_i_("3dab:b8953fa0"), g(), n && n(), _r_();
}), _r_();
}
});
}(), B.define("lightbox", booking.lightbox), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:f86bdc74"), $(".map_links").hover(function() {
_i_("3dab:5a71d28a");
var e = this.id;
$("#" + e + "_in").show(), _r_();
}, function() {
_i_("3dab:e23cb852");
var e = this.id;
$("#" + e + "_in").hide(), _r_();
}), $(".tab01").click(function() {
_i_("3dab:936e8382"), $(".map_overseas").hide(), $(".map_ja").show(), $(".tab02").removeClass("active"), $(".tab01").addClass("active"), _r_();
}), $(".tab02, #ja11").click(function() {
_i_("3dab:2ad174bf"), $(".map_ja").hide(), $(".map_overseas").show(), $(".tab01").removeClass("active"), $(".tab02").addClass("active"), _r_();
});
var t, i = $(".map_overseas"), n = $(".overseas_cities");
i.delegate(".country_list", "click", function(e) {
_i_("3dab:6b55f7ba"), e.preventDefault();
var i = $(this), r = i.data("id"), a = n.find(".country_" + r).clone();
t.open({
title:i.clone(),
content:a
}), _r_();
}), t = function() {
_i_("3dab:20f98e0c");
var e, t = $(".map_box_overlay"), i = t.find(".map_box_overlay_header_title"), n = t.find(".map_box_overlay_content");
return t.delegate(".map_box_overlay_mask", "click", function(t) {
_i_("3dab:223ec7721"), e.close(), _r_();
}).delegate(".map_box_overlay_close_button", "click", function(t) {
_i_("3dab:223ec772"), e.close(), _r_();
}), e = {
open:function(e) {
_i_("3dab:de1822c3");
var r = e.content || "", a = e.title || "";
i.empty().append(a), n.empty().append(r), t.show(), _r_();
},
close:function() {
_i_("3dab:b04c9258"), t.hide(), _r_();
}
}, _r_(e);
}(), _r_();
}), function() {
_i_("3dab:5f3c612f");
var e = B.require("jquery"), t = {
fontchange:!1,
init:function() {
_i_("3dab:3e13b246");
var t = this;
"https:" == location.protocol && booking.env.b_is_app && e(".stay_login, #login-form").each(function() {
_i_("3dab:66bd991c");
var t = e(this).attr("action");
if (-1 == t.indexOf("protocol=https")) {
var i = t;
i = t.indexOf("protocol=http") > -1 ? t.replace("protocol=http", "protocol=https_www") :t + "&protocol=https_www", e(this).attr("action", i);
}
_r_();
}), booking.env.b_can_acc_bp_auth_lightbox || e("#login_redesign").click(function() {
return _i_("3dab:097c7547"), e(this).hasClass("no_arrow") || (e(this).hasClass("login_opened") ? e(this).removeClass("login_opened") :e(this).addClass("login_opened"), e("#login-form_wrapper fieldset").toggle()), _r_(!1);
}), e(".stay_login").submit(function() {
_i_("3dab:66cbddd0");
var i = booking.require("ga-tracker");
i.userProfileTracker && i.trackEvent(i.userProfileTracker, "Login attempt : Header", booking.env.b_action), e("#foldout_error").hide(), e("#login_loading").show();
var n = document.getElementById("username_input_top").value;
if ("" == n) return t.hideLoader(), e('label[for="username_input_top"]').css({
color:"#B30000",
"font-weight":"bold"
}), e("#username_input_top").focus(), _r_(!1);
var r = /^[0-9[\.]+$/.exec(n);
if (r) {
var a = e("#bm_log").val();
a += a.indexOf(!1) ? "&" :"?";
var o = e("#password_input_top", this).val();
a += "pincode=" + o + "&bn=" + n, e("#tar_tmpl").attr("value", ""), e(this).attr("action", a), e(this).attr("target", "_top");
}
setTimeout(function() {
_i_("3dab:96b46fbd"), t.hideLoader(), _r_();
}, 1e4), _r_();
}), e("#signup_form_regular,#sign_up_form").submit(function() {
if (_i_("3dab:55d4664d"), !t.validateLoginSubmitData({
formId:this.id
})) return _r_(!1);
_r_();
}), e(window).bind("beforeunload", function() {
_i_("3dab:575b56ed"), e("iframe[name=log_tar]").each(function() {
_i_("3dab:26cd12e6");
var t = e(this).parent();
e(this).remove().attr("src", "about:blank").appendTo(t), _r_();
}), _r_();
}), _r_();
},
validateLoginSubmitData:function(t) {
_i_("3dab:9a7591bd");
var i, n, r, a, o, _, s, d = e("#" + t.formId);
if (o = d.parents(".user_login_form"), _ = e(".user_login_error_msg", o), t.loginIsBookingNr && (s = e(".user_bn_login_input", d).val(), s = s.replace(/\./g, ""), e(".user_bn_login_input", d).val(s), !s.length || !/^\d+$/g.test(s))) return this.displayLoginErrorMsg({
errorTarget:_,
errorMsg:0 === s.length ? booking.env.b_blank_bkng_nr :booking.env.b_bkng_nr_must_be_numeric
}), _r_(!1);
if (n = e(".password_input", d), !n.length) return _r_(1);
if (i = n.val(), t.passwordIsNumeric || _.length && o.hasClass("user_login_single_signup") || e(".userlogin_signup_tab", o).hasClass("active")) {
if (r = i && i.length ? i.length :0, t.passwordIsNumeric) {
if (!r || !/^\d+$/g.test(i)) return this.displayLoginErrorMsg({
errorTarget:_,
errorMsg:0 === r ? booking.env.b_blank_numeric_pin :booking.env.b_password_must_be_numeric
}), _r_(!1);
} else {
if (8 > r) return this.displayLoginErrorMsg({
errorTarget:_,
errorMsg:booking.env[r ? "password_needs_8" :"account_error_add_password"]
}), _r_(!1);
if (a = e(".username_input", d), a.length && a.val() && a.val() === i) return this.displayLoginErrorMsg({
errorTarget:_,
errorMsg:booking.env.password_cant_be_username
}), _r_(!1);
}
return _r_(!0);
}
_r_();
},
displayLoginErrorMsg:function(e) {
if (_i_("3dab:d48dba06"), !e || !e.errorTarget || !e.errorMsg) return _r_();
e.errorTarget.show().text(e.errorMsg), _r_();
},
reCall:function(t) {
_i_("3dab:de592ec8");
var i = this;
if (t.reload && (booking.env.b_req_login = "1"), "OK" == t.loginstatus) if (t.userlanguage || t.currency) {
var n = booking.env.b_this_url, r = n.indexOf("?") > 0 ? "&" :"?";
t.userlanguage && (n += r + "lang=" + t.userlanguage, r = "&"), t.currency && (n += r + "selected_currency=" + t.currency), n.replace("logout=1", ""), document.location.href = n;
} else if (booking.env.b_redirect) document.location.href = booking.env.b_redirect; else if ("1" == booking.env.b_req_login) {
var a = booking.env.b_this_url;
a.replace("logout=1", ""), document.location.href = a;
} else {
var o = booking.env.b_this_url;
if (o.replace("logout=1", ""), o = o.indexOf("?") > 0 ? o + ";logout=1" :o + "?logout=1", e("#login-form_wrapper fieldset").hide(), e(".welcome_login_link").hide(), booking.env.is_user_wishlists) {
e("#search_tab_favourite").hide(), e("#search_tab_wishlists").show(), booking.env.is_user_wishlists_for_all && (e("#wishlist_modal_user_access").hide(), e("#wishlist_modal_content").show(), booking.lightbox.rePosition(), booking.env.b_user_has_imported_faves && e("#search_tab_wishlists").find(".user_imported_faves_new").show());
var _ = booking.env.b_hotel_id;
e.get("/wishlist/get", {
hotel_id:_,
aid:booking.env.b_aid,
lang:booking.env.b_lang_for_url,
sid:booking.env.b_sid,
stype:booking.env.b_site_type_id
}, function(t) {
if (_i_("3dab:9ea9ba6e"), t && t.success && t.lists && t.lists.length) {
for (var i, n = "", r = "", a = 0, o = t.lists.length; o > a; a++) i = t.lists[a], n += '<li><label><input type="checkbox" id="wl_' + i.id + '" value="wl_' + i.id + '"' + (1 == i.selected ? 'checked="checked"' :"") + " />" + i.name + "</label></li>", r += '<li><a href="' + booking.env.new_wishlist_url + i.id + '"><span>' + i.name + "</span></a></li>";
e("#wl_list").html(n), e("#search_tab_wishlists_content .menu_wishlists").html(r), e(".wl_list_box").addClass("scrolling_list");
}
_r_();
});
} else e("#search_tab_favourite").show(), e("#search_tab_wishlists").hide(), booking.lightbox.hide();
if (e("#login_redesign").length) {
var s = e("#login_redesign").get(0);
e(s).addClass("no_arrow"), e(s).mouseover(function() {
return _i_("3dab:b6316a4c"), _r_(!1);
}), e(s.parentNode).mouseover(function() {
return _i_("3dab:b6316a4c1"), _r_(!1);
});
}
setTimeout(function() {
_i_("3dab:6b791d63"), e("#password_input_top").val(""), t.avatarurl && "0" != t.avatarurl ? e(".my_image img").length && e(".my_image img").each(function() {
_i_("3dab:978f7aae"), e(this).attr("src", t.avatarurl), e(".head_firstname").length && e(this).css({
"margin-top":"-5px",
width:"26px",
height:"26px"
}), _r_();
}) :0 != t.defaultavatar && e(".my_image img").length && (e(".my_image img").addClass("def_avtr"), e(".my_image img").addClass("t_s_avtr_" + t.defaultavatar), e(".my_image img").css({
"margin-top":"-4px",
"margin-left":"-1px",
width:"24px",
height:"24px"
})), setTimeout(function() {
_i_("3dab:d0dfeab4"), i.preShowMenu(), _r_();
}, 100), e("#b_header").length || "undefined" != typeof e.noticeAdd && t.growl1 && t.growl2 && e.noticeAdd({
text:"\n \n \n " + unescape(t.growl1) + "<br>" + unescape(t.growl2) + " \n \n \n ",
textLabel:"user_login_notice",
stay:!1,
stayTime:3e3,
type:"users",
close:"all",
destination:"",
addClassName:"notice_login"
}), _r_();
}, 500), "" != t.email && (e("#email_confirm").length && "" == e("#email_confirm").val() && (e("#email_confirm").val(t.email), e("#error_email_confirm").hide(), e("#label_email_confirm").removeClass("val-no").addClass("val-yes")), e("#email").length && "" == e("#email").val() && (e("#email").val(t.email), e("#error_email").hide(), e("#label_email").removeClass("val-no").addClass("val-yes"))), t.fdata1 && e("#address1").length && "" == e("#address1").val() && e("#address1").val(t.fdata1), t.fdata2 && e("#city").length && "" == e("#city").val() && e("#city").val(t.fdata2), t.fdata3 && e("#zip").length && "" == e("#zip").val() && e("#zip").val(t.fdata3), t.fdata4 && e("#cc1").length && "" == e("#cc1").val() && e("#cc1").val(t.fdata4), t.fdata5 && e("#phone").length && "" == e("#phone").val() && e("#phone").val(t.fdata5);
var d = " ";
if (t.fdata6 && (e("#lastname").length && "" == e("#lastname").val() && (e("#lastname").val(t.fdata6), e("#error_lastname").hide(), e("#label_lastname").removeClass("val-no").addClass("val-yes")), e(".head_lastname").text(t.fdata6), d = t.fdata6), t.fdata7 ? (e("#firstname").length && "" == e("#firstname").val() && (e("#firstname").val(t.fdata7), e("#error_firstname").hide(), e("#label_firstname").removeClass("val-no").addClass("val-yes")), e(".head_firstname").text(t.fdata7), d = t.fdata7 + " " + d) :t.fdata6 && e(".head_firstname").text(""), e(".login_for_name").length && " " != d && (e(".login_for_name").val(d), e(".login_for_name").css({
color:"#003580"
})), e("input[name='username']").val(t.email), booking.lightbox && booking.lightbox.isopen && booking.lightbox.close(), B.require("login/new-personal-menu").closeSelect(null, !0), t.has_stored_cc > 0) {
var c = booking.env.b_this_url;
c = c.replace(";logout=1", ""), c += ";tmpl=profile/creditcards_ajax;", e("#bs3_cc_form #book_credit_card").load(c + " #book_credit_card"), e("#cc_img").remove();
}
e("#multiple_login").hide(), i.hideLoader();
} else {
if (t.error) var l = unescape(t.error); else var l = "";
var u = t.nofoldout ? !1 :!0;
setTimeout(function() {
if (_i_("3dab:109d9518"), u) {
if (B.env.b_is_tdot_traffic) {
e("#foldout_error").html(l);
var t = e(".forgot_link_look").text(), i = e(".forgot_link_look").attr("data-href");
e(".forgot_pass_trigger").attr("href", i).attr("data-href", i).text(t), e("#foldout_error").show();
} else e("#foldout_error").html(l).show();
B.require("login/new-personal-menu").openSelect("current_account");
} else e("#bs2_page_login_error").length && e("#bs2_page_login_error").html(l).show();
_r_();
}, 500), i.hideLoader();
}
_r_();
},
hideLoader:function() {
_i_("3dab:eeb58029"), e("#login_loading").hide(), e("#page_login_loading").hide(), _r_();
},
preShowMenu:function() {
_i_("3dab:dd25463d");
var t = this;
("book" != booking.env.b_action || "1" == booking.env.is_exp_user_center_bar) && (B.require("login/new-personal-menu").openSelect("current_account"), t.moused_menu = !1, e("#current_account").mouseenter(function() {
_i_("3dab:07e475d8"), t.moused_menu = !0, _r_();
}), setTimeout(function() {
_i_("3dab:255b971d"), t.moused_menu || B.require("login/new-personal-menu").closeSelect(), _r_();
}, 4e3)), _r_();
}
};
B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:0e16798f"), t.init(), _r_();
}), B.define("login/new-personal-menu", function(t, i, n) {
_i_("3dab:285ae913"), n.exports = {
opening_state:0,
cur_open:"",
max_select_height:240,
init:function() {
_i_("3dab:50dd6d5d");
var t = this;
"1" == booking.env.is_user_center_bar || (e(".select_box").mouseenter(function() {
_i_("3dab:77927a9a"), e(this).addClass("sel_hover"), _r_();
}), e(".select_box").mouseleave(function() {
_i_("3dab:91bc103d"), e(this).removeClass("sel_hover"), _r_();
})), e("body").click(function(i) {
if (_i_("3dab:80cea01b"), 2 == t.opening_state) {
var n = e(i.target);
e(n).length && t.closeSelect();
}
if (booking.maps && booking.maps.map_opened && (!booking.maps.is_sr || !booking.map.mapHasBeenDragged)) {
var r = e(i.target);
!booking.maps.is_hp && !booking.maps.is_sr || !r.length || r.is("#b_map_container") || r.parents("#b_map_container,#sr_map").length || "close_map" === r.attr("id") || /gstatic/.test(r.attr("src")) || (e("#close_map").length > 0 ? e("#close_map").click() :e("#close_map_lightbox").length > 0 && e("#close_map_lightbox").click());
}
_r_();
}), e(".select_box").click(function(i) {
_i_("3dab:698f13fd"), 0 == t.opening_state ? t.openSelect(e(this).attr("id")) :t.cur_open != e(this).attr("id") ? t.closeSelect(e(this).attr("id")) :t.closeSelect(), _r_();
}), _r_();
},
openSelect:function(t) {
if (_i_("3dab:3d965fc4"), booking.env.b_is_tdot_traffic) {
var i = e("#" + t);
if ("show-auth-lightbox" === i.attr("data-command")) return _r_();
}
if ("1" != booking.env.is_user_center_bar || booking.env.b_is_tdot_traffic) {
var n = this;
if ("login_redesign" === t && booking.env.b_can_acc_bp_auth_lightbox) return _r_();
this.cur_open = t;
var r, a = e("#" + t + "_foldout");
e("#" + t).addClass("sel_open"), this.opening_state = 1, a.css({
display:"block",
opacity:"0",
overflow:"hidden",
height:"400px",
width:"200px"
}), r = e(e(".select_foldout_wrap", a).get(0)), r.css({
"overflow-y":"hidden",
height:"auto"
});
var o = r.height(), _ = r.width(), s = this.max_select_height;
if (a.hasClass("flex_foldout")) var d = _ + 10; else if (e("#" + t).hasClass("sel_done")) var d = _; else {
var d = _ + 20;
e("#" + t).addClass("sel_done");
}
o >= this.max_select_height - 10 ? a.hasClass("flex_foldout") ? (s = o + 10, 300 > s && (s = 300)) :(r.css({
"overflow-y":"scroll",
height:"230px",
width:d + "px"
}), d += 10) :(s = o + 10, r.css({
"overflow-y":"hidden",
height:"auto"
})), a.css({
opacity:"1",
height:"0px",
width:"auto"
}), a.hasClass("left_foldout") && !booking.env.rtl ? a.css({
width:d + "px",
"padding-right":"0px"
}) :a.css({
width:d + "px",
"padding-right":"10px",
left:"0"
}), a.css({
height:s + "px"
}), setTimeout(function() {
_i_("3dab:2e32d010"), n.opening_state = 2, _r_();
}, 200), booking.env.b_is_ipad && e("body").bind("touchstart", function(t) {
if (_i_("3dab:8daed0e6"), 2 == n.opening_state) {
var i = e(t.target);
e(i).length && !e(i).is("#current_account") && (e(i).parents("#login_redesign") || (n.closeSelect(), e(this).unbind(t)));
}
_r_();
});
} else ;
_r_();
},
closeSelect:function(t, i) {
_i_("3dab:327ea38b");
var n = this;
i && (e("#foldout_login").css({
display:"none"
}), e("#multiple_login").css({
display:"none"
}), e("#foldout_loggedin").css({
display:"block"
})), 2 == this.opening_state && (e(".select_foldout").animate({
height:"0px"
}, 200, function() {
_i_("3dab:91c3d40c"), e(".select_foldout").css({
display:"none"
}), e(".select_box").removeClass("sel_open"), t && null != t && n.openSelect(t), _r_();
}), this.opening_state = 0), _r_();
},
hideLoader:function() {
_i_("3dab:faac18bc"), e("#login_loading").hide(), e("#page_login_loading").hide(), _r_();
},
setOpeningState:function(e) {
_i_("3dab:2ac0d11c"), this.opening_state = e, _r_();
}
}, _r_();
}), B.when({
events:"ready"
}).require([ "login/new-personal-menu" ], function(e) {
_i_("3dab:2102759d"), e.init(), _r_();
}), _r_();
}(), function() {
_i_("3dab:f0d42a43"), B.when({
events:"ready"
}).run(function() {
_i_("3dab:089fe443");
var e = $(window);
function t() {
if (_i_("3dab:e6981672"), null == window.opener) return _r_();
if (screen.width <= e.width()) return _r_();
var t = "404815" == booking.env.b_partner_id, n = e.width() < .9 * screen.width;
t ? n && $("body").bind("click.resize_partners", function(e) {
if (_i_("3dab:09aa29cd"), e && e.target && $(e.target).hasClass("no-trigger-resize")) return _r_();
window.resizeTo(.95 * screen.width, .95 * screen.height), i(), _r_();
}) :$("body").bind("click.resize_partners", function(e) {
if (_i_("3dab:cda8516f"), e && e.target && $(e.target).hasClass("no-trigger-resize")) return _r_();
window.resizeTo(screen.width, screen.height), i(), _r_();
}), _r_();
}
function i() {
_i_("3dab:182da784"), $("body").unbind("click.resize_partners"), window.moveTo(0, 0), $(window).trigger("resize"), _r_();
}
"login_mini" !== B.env.b_action && t(), _r_();
}), _r_();
}(), window.addEventListener("load", function() {
_i_("3dab:4b3e017b"), $("#self_change1 .messageBox").click(function(e) {
_i_("3dab:f3823220");
var t = $(this).children("a").attr("href"), i = /(?:\b)tmpl[\=]docs[\\\/]customer_service(?:\b)/i;
return t && "#" != t && !i.test(t) && (location.href = $(this).children("a").attr("href")), _r_(!1);
}), $("#isDifferent").fadeIn(), _r_();
}), booking.newsLanding = function() {
_i_("3dab:5aef08e5");
var e = function() {
_i_("3dab:99d04523"), $(document).on("focus", ".location_dropdowns select", function() {
_i_("3dab:7004a786");
var e = $(this).find(":selected").text();
$(this).attr("oldValue", e), _r_();
});
var e = booking.require("ga-tracker");
$(".location_dropdowns select").change(function() {
_i_("3dab:b8e20284");
var t, i = $(this).attr("id"), n = $(this).find(":selected").val(), r = $(this).find(":selected").text(), a = $(this).attr("oldValue");
n.length > 0 ? "fd_title_countryname" == i ? t = booking.env.b_lang + " | Countries | " + r :"fd_title_regionname" == i ? t = booking.env.b_lang + " | Regions | " + r :"fd_title_cityname" == i && (t = booking.env.b_lang + " | Cities | " + r) :"fd_title_countryname" == i ? t = booking.env.b_lang + " | Countries Remove | " + a :"fd_title_regionname" == i ? t = booking.env.b_lang + " | Regions Remove | " + a :"fd_title_cityname" == i && (t = booking.env.b_lang + " | Cities Remove | " + a), e.trackEvent(e.clickTracker, "Dealfinder", t), this.form.submit(), _r_();
}), $("#b_sortbox select").change(function() {
_i_("3dab:eb512c9b"), e.trackEvent(e.clickTracker, "Dealfinder", "df_dropdown_sorting"), this.form.submit(), _r_();
}), $("#checkin-flexible-form").submit(function() {
_i_("3dab:0ed0fdd1");
var t, i = $("#b_fd_checkin_date").val(), n = $("#fd_flex").attr("checked");
t = "undefined" != i ? n ? booking.env.b_lang + " | Date Select | Flexible" :booking.env.b_lang + " | Date Select" :booking.env.b_lang + " | Date Remove | ", e.trackEvent(e.clickTracker, "Dealfinder", t), _r_();
}), _r_();
};
return _r_({
init:e
});
}(), B.when({
events:"ready"
}).run(function(e) {
if (_i_("3dab:f9114062"), $(".subscriptionbox").click(function() {
return _i_("3dab:64c7b37e"), booking.lightbox.show($("#subsciber_firstname_lightbox"), {
customWrapperClassName:"subscribername-lightbox"
}), _r_(!1);
}), booking.env.b_show_newsletter_popup && booking.lightbox.show($("#subsciber_firstname_lightbox"), {
customWrapperClassName:"subscribername-lightbox"
}), booking.env.b_show_solicitation_popup) {
if (booking.env.b_show_success_popup_content) return booking.lightbox.show($("#solicitation_feedback_success"), {
customWrapperClassName:"solicitation-lightbox"
}), _r_(!1);
if (booking.env.b_show_error_popup_content) return booking.lightbox.show($("#solicitation_feedback_error"), {
customWrapperClassName:"solicitation-lightbox"
}), _r_(!1);
}
_r_();
}), function() {
_i_("3dab:f0a82ea2");
var e = {
init:function() {
_i_("3dab:0d918448"), $(".country_flag a").click(function(e) {
_i_("3dab:cc861609");
var t = $(this).parents("div.country_block");
$("div.aaa:eq(0)", t).is(":visible") ? $("div.aaa", t).hide() :$("div.aaa", t).show(), e.preventDefault(), _r_();
}), $(".gcityname a").click(function(e) {
_i_("3dab:25c0134e");
var t = $(this).parents("div.office");
$("div.bbb:eq(0)", t).is(":visible") ? $("div.bbb", t).hide() :$("div.bbb", t).show(), e.preventDefault(), _r_();
}), _r_();
}
};
B.when({
events:"ready"
}).run(function(t) {
_i_("3dab:536b550c"), e.init(), _r_();
}), _r_();
}(), B.when({
events:"ready"
}).require([ "jquery" ], function(e) {
_i_("3dab:6bc04624");
var t = !1, i = 240, n = 0, r = 28, a = "g-hidden";
function o() {
_i_("3dab:72c3fd44"), e("body").delegate(".js-btn--invite-to-resend, .js-btn--repeat", "click", s), e("body").delegate(".js-btn--close", "click", d), e("body").delegate(".resend-conf-form", "submit", c), e("body").delegate(".resend-conf-form__send", "click", c), _r_();
}
function _() {
_i_("3dab:5f3dd957"), t || (t = !0, i = e(".popover_content--has-footer").outerHeight(), e(".popover_content--has-footer").css("min-height", i), e(".resend-conf").addClass("resend-conf--absolute")), _r_();
}
function s(t) {
_i_("3dab:ad1ebb5c");
var o = e(t.target).closest(".resend-conf");
return o.closest(".popover_content--has-footer").length && _(), n = n || o.find(".resend-conf__step--invite").outerHeight(), i = booking.env.b_is_tdot_traffic ? i + 100 :i, o.addClass("resend-conf--active"), o.animate({
height:i - r
}, 250), o.find(".resend-conf__step").addClass(a), o.find(".resend-conf__step--form").removeClass(a), _r_(!1);
}
function d(t) {
_i_("3dab:2c5d29b2");
var i = e(t.target).closest(".resend-conf");
return i.removeClass("resend-conf--active"), i.find(".resend-conf__step").addClass(a), i.find(".resend-conf__step--invite").removeClass(a), i.animate({
height:n
}, 250), _r_(!1);
}
function c(t) {
_i_("3dab:7da6c93d");
var i, n, r, o = e(t.target), _ = o.closest(".resend-conf"), s = o.is("form") ? o :o.closest(".resend-conf-form"), d = _.find(".resend-conf-form__send"), c = s.attr("action");
if (t.preventDefault(), d.is(".disabled")) return _r_(!1);
if ("" == s.find("input[name=email]").val() || !s.find("input[name=email]").val().match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) return s.find("input[name=email]").addClass("invalid-input"), s.find(".resend-conf-form__error").removeClass(a), _r_(!1);
s.find("input[name=email]").removeClass("invalid-input"), s.find(".resend-conf-form__error").addClass(a), d.addClass("disabled"), i = s.find('input[name="email"]').val(), r = s.serialize(), r && (r = r.replace(/[\?&]email=[^&]+/, "")), n = c + "?utoken=" + btoa(unescape(encodeURIComponent(i))) + "&" + r, e.ajax({
url:n,
dataType:"jsonp",
jsonpCallback:"booking_cb_" + Date.now(),
success:function() {
_i_("3dab:63cd3692"), u(_, i), l(_), _r_();
},
error:function() {
_i_("3dab:eb96a06f"), f(_), _r_();
}
}), _r_();
}
function l(e) {
_i_("3dab:5af24fbe");
var t = e.find(".resend-conf-form");
t.length && t[0].reset(), e.find(".resend-conf-form input[name=email]").removeClass("invalid-input"), e.find(".resend-conf-form .resend-conf-form__error").addClass(a), e.find(".resend-conf-form__send").removeClass("disabled"), _r_();
}
function u(e, t) {
_i_("3dab:785298e1"), e.find(".resend-conf__step").addClass(a), e.find(".resend-conf__step--success").removeClass(a), e.find(".resend-conf__success__email").text(t), _r_();
}
function f(e) {
_i_("3dab:b19c6cac"), e.find(".resend-conf__step").addClass(a), e.find(".resend-conf__step--error").removeClass(a), e.find(".resend-conf-form__send").removeClass("disabled"), _r_();
}
o(), _r_();
}), function(e, t) {
_i_("3dab:3f8f86cf");
var i = B.require("jquery"), n = function(e) {
_i_("3dab:87686e74");
var i, n, r, a = "msie" === B.env.b_browser;
for (i = 0, n = e.length; n > i; i += 1) {
if (a) {
new Image().src = e[i];
continue;
}
r = t.createElement("object"), r.data = e[i], a ? (r.width = 1, r.height = 1, r.style.visibility = "hidden", r.type = "text/plain") :(r.width = 0, r.height = 0), t.body.appendChild(r);
}
_r_();
};
i(e).on("load", function() {
_i_("3dab:90bf0673");
var e = i(t.body), r = "mousemove keyup scroll mousedown", a = i("[data-preload-assets]"), o = i.cookie("has_preloaded"), _ = 0, s = function() {
_i_("3dab:36835c80"), e.unbind(r, c), clearTimeout(_), n(a.data("preload-assets")), i.cookie && i.cookie("has_preloaded", 1, {
expires:1,
path:"/"
}), _r_();
}, d = function() {
_i_("3dab:2f674972"), _ = setTimeout(s, 1e4), _r_();
}, c = function() {
_i_("3dab:517a0f58"), clearTimeout(_), d(), _r_();
};
if (o) return _r_();
a.length && setTimeout(function() {
_i_("3dab:5f128be8"), d(), e.bind(r, c), _r_();
}, 1e4), _r_();
}), _r_();
}(window, window.document), function() {
_i_("3dab:9a2a73d5");
var e = B.require("jquery"), t = {
priority:9,
init:function() {
_i_("3dab:0920f27f");
var t = [ "#rate_guarantee a", ".rate_guaranteed a", "#rate_guaranteed", "#wrap-hotelpage-top .best_rate_guarantee a", "table.hotellist td div.room_details_usp .room_details_usp_inner.best_rate_guarantee a", "a.usps_rate_guarantee_link", "#rate_guaranteev2 a", "#ratelogo a", "#terms_rateguarantee", "a#guarantee_terms", "#rates_feedback_invite a.jq_tooltip", ".rate_guarantee_window_opener", "#sidebar_usp_box a.best_price_popup", "#sidebar_usp_box a.jq_tooltip " ].join(","), i = [ "status=1", "toolbar=0", "menubar=0", "width=450", "height=550", "scrollbars=1" ].join(","), n = function() {
return _i_("3dab:e8d6f1fa"), window.open(this.href, "RateGuarantee", i), _r_(!1);
};
return e(document).on("click", t, n), _r_(!0);
}
};
B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:850cde6a"), t.init(), _r_();
}), _r_();
}(), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:f4d65d08"), $(".disambBlockHeader").click(function() {
_i_("3dab:6a467182");
var e = $(this), t = $("#" + e.attr("data-results"));
return t.hasClass("disambBlockShown") ? t.slideUp().removeClass("disambBlockShown") :t.slideDown().addClass("disambBlockShown"), _r_(!1);
}), _r_();
}), function() {
_i_("3dab:f2308a6c");
var e = function(e, t) {
_i_("3dab:25a6ba42");
function i(t) {
_i_("3dab:6ab07b50");
var i = e.require("search/searchbox/analytics");
i.send(t), _r_();
}
function n(n) {
_i_("3dab:3b3e4020"), e.Search.validators.create({
type:"dates",
name:"dates_are_not_empty",
test:function() {
_i_("3dab:b405e4d7");
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("regular" !== e.search.dates().mode) return _r_(!1);
return _r_("valid" !== t.type && "valid" !== i.type);
},
fail:function() {
return _i_("3dab:5853de83"), i("[error] dates: dates_are_not_empty"), _r_(e.jstmpl.translations("searchbox_error_msg_need_date"));
}
}), e.Search.validators.create({
type:"dates",
name:"checkin_date_is_selected",
test:function() {
if (_i_("3dab:a56d4095"), "regular" !== e.search.dates().mode) return _r_(!1);
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("valid" !== t.type && "valid" !== i.type) return _r_(!1);
return _r_("valid" !== t.type);
},
fail:function() {
return _i_("3dab:468e3ef9"), i("[error] dates: checkin_date_is_selected"), _r_(e.jstmpl.translations("please_enter_your_check_in_date"));
}
}), e.Search.validators.create({
type:"dates",
name:"checkout_date_is_selected",
test:function() {
if (_i_("3dab:dd4afb3a"), "regular" !== e.search.dates().mode) return _r_(!1);
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("valid" !== t.type && "valid" !== i.type) return _r_(!1);
return _r_("valid" !== i.type);
},
fail:function() {
return _i_("3dab:b253da87"), i("[error] dates: checkout_date_is_selected"), _r_(e.jstmpl.translations("please_enter_your_check_out_date"));
}
}), e.Search.validators.create({
type:"dates",
name:"duration_is_less_than_30_days",
test:function() {
if (_i_("3dab:53fe6842"), "regular" !== e.search.dates().mode) return _r_(!1);
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("valid" !== t.type || "valid" !== i.type) return _r_(!1);
return _r_(Math.abs(i - t) > 30);
},
fail:function() {
return _i_("3dab:adce6491"), i("[error] dates: duration_is_less_than_30_days"), _r_(e.jstmpl.translations("sbox_error_30_night_res"));
}
}), e.Search.validators.create({
type:"dates",
name:"checkin_is_earlier_than_checkout",
test:function() {
if (_i_("3dab:5d6fedd3"), "regular" !== e.search.dates().mode) return _r_(!1);
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("valid" !== t.type || "valid" !== i.type) return _r_(!1);
return _r_(t > i);
},
fail:function() {
return _i_("3dab:9b7140e0"), i("[error] dates: checkin_is_earlier_than_checkout"), _r_(e.jstmpl.translations("sbox_error_checkout_after"));
}
}), e.Search.validators.create({
type:"dates",
name:"dates_are_not_in_past",
test:function() {
if (_i_("3dab:8ee979dc"), "regular" !== e.search.dates().mode) return _r_(!1);
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("valid" !== t.type || "valid" !== i.type) return _r_(!1);
var n = e.calendar2.minToday();
return _r_(n > t.dateObject_ || n > i.dateObject_);
},
fail:function() {
return _i_("3dab:79b55936"), i("[error] dates: dates_are_not_in_past"), _r_(e.jstmpl.translations("sbox_error_checkin_future"));
}
}), e.Search.validators.create({
type:"dates",
name:"checkin_checkout_not_on_same_day",
test:function() {
if (_i_("3dab:9f60788d"), "regular" !== e.search.dates().mode) return _r_(!1);
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("valid" !== t.type || "valid" !== i.type) return _r_(!1);
return _r_(t.valueOf() == i.valueOf());
},
fail:function() {
return _i_("3dab:fc74c28c"), i("[error] dates: checkin_checkout_not_on_same_day"), _r_(e.jstmpl.translations("search_box_cal_error_dates_same"));
}
}), e.eventEmitter.bind(e.Search.Events.DATE_INVALID, function(e, i) {
_i_("3dab:a375aa94");
var n, r = t(".js--sb-searchbox__dates-error"), a = i.validators;
if (!a) return _r_();
n = a.reduce(function(e, t) {
return _i_("3dab:b2ee8d52"), "fail" === t.status && t.message && e.push(t.message), _r_(e);
}, []), n.length > 0 && r.html(n.shift()).addClass("-visible"), _r_();
}), e.eventEmitter.bind(e.Search.Events.DATE_VALID, function() {
_i_("3dab:4d5c7f16");
var e = t(".js--sb-searchbox__dates-error");
e.html("").removeClass("-visible"), _r_();
}), e.eventEmitter.bind(e.Search.Events.DATE_MODE_CHANGED, function(t, i) {
_i_("3dab:a95dd79e"), e.search.dates().validate("reset"), _r_();
}), t("#frm, .js--sb-searchbox").bind("submit", function(i) {
if (_i_("3dab:5372d112"), t(this).data("no-validators")) return _r_(!0);
var n, r = e.search.dates();
return r.mode !== e.Search.DateModes.NODATES && "valid" !== r.checkin.type && "valid" !== r.checkout.type && r.setMode(e.Search.DateModes.NODATES), n = r.validate(), _r_(n);
}), _r_();
}
function r(e, t) {
if (_i_("3dab:0e60e980"), !e) return _r_();
var i = new Date(e.year, e.month, e.date + t);
return _r_({
year:i.getFullYear(),
month:i.getMonth(),
date:i.getDate()
});
}
function a(t, i) {
_i_("3dab:4322078a");
var n, a, _ = i.type, s = e.search.dates(i.type), d = 1;
if ("checkin" !== _ && "checkout" !== _) return _r_();
if ("valid" !== s.type && "month" !== s.type) return _r_();
if (n = e.search.dates("checkin"), a = e.search.dates("checkout"), "checkin" === _ && ("invalid" === a.type || n >= a || e.env.fe_sb_calendar_single_instance) && (a = e.search.dates("checkout", r(n, d))), "checkout" === _ && ("valid" !== n.type && (n = e.search.dates("checkin", r(e.search.dates("checkout"), -d))), n >= a && !e.env.fe_sb_rentalcars && (n = e.search.dates("checkin", r(e.search.dates("checkout"), -d)))), o(), e.search.dates("mode", e.Search.DateModes.REGULAR), "hotel" == booking.env.b_action) return _r_();
try {
"checkin" === _ && "valid" === n.type && e.require("main/old_calendar1").syncDates(!1, n.date, n.month + 1, n.year, !1), "checkout" === _ && "valid" === a.type && e.require("main/old_calendar1").syncDates(!0, a.date, a.month + 1, a.year, !1);
} catch (c) {
window.onerror("old_calendar_api_method_does_not_exist");
}
_r_();
}
function o() {
_i_("3dab:2ddf9c88");
var i = s(), n = "search_dates_length_of_stay";
t(".js--sb-dates__los").html(e.jstmpl(n).render({
b_checkin_checkout_interval:i,
fe_sb_state_length_of_stay:i,
b_lang:e.env.b_lang
})), _r_();
}
function _(t) {
_i_("3dab:78fabe95"), t.find(".b-date-selector, .js--sb-dates__check-in, .js--sb-dates__check-out").dateSelector(), e.eventEmitter.bind(e.Search.Events.DATE_CHANGED, a), e.eventEmitter.bind(e.Search.Events.DATE_MONTH_CHANGED, a), _r_();
}
function s() {
_i_("3dab:e889b548");
var t, i, n, r = 0;
return t = e.search.dates(), i = t && t.checkin, n = t && t.checkout, n && i && n.valueOf() > i.valueOf() && (r = n.valueOf() - i.valueOf()), _r_(r);
}
function d() {
_i_("3dab:4a5bf725");
var e = t(".b-form__dates, .js--sb-dates");
_(e), n(e), "company" == booking.env.b_action && e.find(".b-form-flexible-dates__toggler input:checked").length && booking.search.dates().setMode("no-dates"), _r_();
}
return _r_({
init:d
});
}(B, $);
B.when({
events:"ready"
}).run(function(t) {
_i_("3dab:676c907d"), e.init(), _r_();
}), _r_();
}(), B.Search.tracker = {
track:function(e, t, i) {
_i_("3dab:e72ce748");
var n = [ "Searchbox", B.env.b_action, "[" + e + "] " + t, i ], r = B.require("ga-tracker");
r.trackEvent.apply(r, n), _r_();
},
trackError:function(e) {},
trackEvent:function(e) {
return _i_("3dab:9ae63c83"), _r_(this.track("interaction", e));
}
}, function() {
_i_("3dab:006089e3");
var e = function() {
_i_("3dab:0256b6e3");
var e = B.require("jquery");
B.Search = B.Search || {}, B.Search.SPECIAL_DIGITS = {
"０":0,
"１":1,
"２":2,
"３":3,
"４":4,
"５":5,
"６":6,
"７":7,
"８":8,
"９":9,
"٠":0,
"١":1,
"٢":2,
"٣":3,
"٤":4,
"٥":5,
"٦":6,
"٧":7,
"٨":8,
"٩":9,
"۰":0,
"۱":1,
"۲":2,
"۳":3,
"۴":4,
"۵":5,
"۶":6,
"۷":7,
"۸":8,
"۹":9
}, B.Search.AbstractGroupConfigurationWidget = function(e, t) {}, B.Search.AbstractGroupConfigurationWidget.prototype.initialize = function(e, t) {
_i_("3dab:b0044368"), this.$element = e, this.setOptions(t), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.setOptions = function(t) {
_i_("3dab:781f78ce"), this.options || (this.options = {}), this.options = e.extend(this.options, t), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.initEvents = function() {
throw _i_("3dab:99dec0c7"), "Abstract intiEvents method should be implemented in widget instances";
}, B.Search.AbstractGroupConfigurationWidget.prototype.onExternalEventConfigChanged = function() {
throw _i_("3dab:f995297b"), "Abstract onExternalEventConfigChanged method should be implemented in widget instances";
}, B.Search.AbstractGroupConfigurationWidget.prototype.showErrorMessages = function(t) {
_i_("3dab:41ab0254"), this.$errorContainer = this.$errorContainer || this.$element.find(".b-form-group__error-messages");
for (var i = e("<ul></ul>", {
"class":"b-form-group__error-messages_list"
}), n = e("<li></li>", {
"class":"b-form-group__error-messages_list-item"
}), r = 0; r < t.length; r++) i.append(n.clone().html(t[r]));
this.$errorContainer.empty().append(i), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.hideErrorMessages = function() {
_i_("3dab:7d7e2204"), this.$errorContainer = this.$errorContainer || this.$element.find(".b-form-group__error-messages"), this.$errorContainer.empty(), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.getConfig = function() {
throw _i_("3dab:e6cd14b2"), "Abstract getConfig method should be implemented in widget instances";
}, B.Search.AbstractGroupConfigurationWidget.prototype.trigger = function(e, t) {
_i_("3dab:8128ab76"), "groupChanged" === e && "function" == typeof this.onExternalEventConfigChanged && this.onExternalEventConfigChanged.apply(this, [].slice.call(arguments, 1)), "groupModeChanged" === e && "function" == typeof this.onExternalEventModeChanged && this.onExternalEventModeChanged.apply(this, [].slice.call(arguments, 1)), "groupInvalid" === e && "function" == typeof this.onExternalEventGroupInvalid && this.onExternalEventGroupInvalid.apply(this, [].slice.call(arguments, 1)), "groupValid" === e && "function" == typeof this.onExternalEventGroupValid && this.onExternalEventGroupValid.apply(this, [].slice.call(arguments, 1)), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.onInit = function() {
_i_("3dab:63424b2e");
var e = this;
"function" == typeof this.options.onInit && window.setTimeout(function() {
_i_("3dab:8c67b482"), e.options.onInit.call(e, e.getConfig()), _r_();
}, 10), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.onChange = function() {
_i_("3dab:29170dd4"), "function" == typeof this.options.onChange && this.options.onChange.call(this, this.getConfig()), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.DISABLED_CLASS = "disabled", B.Search.AbstractGroupConfigurationWidget.prototype.hide = function() {
_i_("3dab:fbc5dc5f"), this.$element.toggleClass(this.DISABLED_CLASS, !0), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.show = function() {
_i_("3dab:5dc9244b"), this.$element.toggleClass(this.DISABLED_CLASS, !1), _r_();
}, B.Search.PredefinedGroupSelector = function(e, t) {
_i_("3dab:7ae0e6df"), this.initialize.apply(this, [].slice.call(arguments, 0)), this.initEvents(), this.onInit(), _r_();
}, B.Search.PredefinedGroupSelector.prototype = new B.Search.AbstractGroupConfigurationWidget(), B.Search.PredefinedGroupSelector.prototype.initialize = function(t, i) {
_i_("3dab:c0f7ca70");
var n, r, a = {};
this.$element = t, this.$selector = t.find("select"), this.setOptions(i), this.$selector.find("option").each(function(t, i) {
_i_("3dab:2736cefb");
var o = e(i), _ = B.Search.createGroup(o.data());
a[_] = i, "more_options" === _.type && (n = i), o.is(":selected") && (r = _), _r_();
}), this.defaultConfigurationOption = n, this.groupConfigurationOptions = a, this.selectedConfiguration = r, _r_();
}, B.Search.PredefinedGroupSelector.prototype.initEvents = function() {
_i_("3dab:76400a1b"), this.$selector.bind("change", e.proxy(this.onChange, this)), _r_();
}, B.Search.PredefinedGroupSelector.prototype.onChange = function(e) {
_i_("3dab:155c0aba");
var t = this.getConfig();
this.selectedConfiguration.valueOf() !== t.valueOf() && (this.selectConfiguration(t), "function" == typeof this.options.onChange && this.options.onChange.call(this, t)), _r_();
}, B.Search.PredefinedGroupSelector.prototype.selectConfiguration = function(e) {
_i_("3dab:48ce3b15"), this.groupConfigurationOptions[e] ? (this.groupConfigurationOptions[e].setAttribute("selected", "selected"), this.selectedConfiguration = e) :(this.selectedConfiguration = !1, this.defaultConfigurationOption.setAttribute("selected", "selected")), _r_();
}, B.Search.PredefinedGroupSelector.prototype.onExternalEventConfigChanged = function(e) {
if (_i_("3dab:9d43d253"), this.selectedConfiguration.valueOf() === e.valueOf()) return _r_();
this.selectConfiguration(e), _r_();
}, B.Search.PredefinedGroupSelector.prototype.getConfig = function() {
_i_("3dab:a0c0624c");
var t = this.$selector.get(0), i = e(t.options[t.selectedIndex]), n = this.parseOption(i);
return _r_(n);
}, B.Search.PredefinedGroupSelector.prototype.parseOption = function(e) {
_i_("3dab:3d546774");
var t = e.data(), i = B.Search.createGroup(t);
return _r_(i);
}, B.Search.CustomGroupSelector = function(t, i) {
_i_("3dab:172fe9d6"), this.$element = t, this.setOptions(i), this.$adultsSelector = t.find("select[name=group_adults]"), this.$roomsSelector = t.find("select[name=no_rooms]"), this.$childrenSelector = t.find("select[name=group_children]"), this.$element.delegate("select[name=group_adults],select[name=no_rooms],select[name=group_children]", "change", e.proxy(this.onChange, this)), this.onInit(), _r_();
}, B.Search.CustomGroupSelector.prototype = new B.Search.AbstractGroupConfigurationWidget(), B.Search.CustomGroupSelector.prototype.DISABLED_CLASS = "b-form-custom-group_disabled", B.Search.CustomGroupSelector.prototype.getConfig = function() {
_i_("3dab:c45c98d9");
var e = this.$adultsSelector.val(), t = this.$roomsSelector.val(), i = this.$childrenSelector.val(), n = {};
return e && !isNaN(parseInt(e, 10)) && (n.adults = parseInt(e, 10)), t && !isNaN(parseInt(t, 10)) && (n.rooms = parseInt(t, 10)), i && !isNaN(parseInt(i, 10)) && (n.children = parseInt(i, 10)), _r_(n);
}, B.Search.CustomGroupSelector.prototype.onChange = function(e) {
_i_("3dab:bfd65f96");
var t = this.getConfig();
"function" == typeof this.options.onChange && this.options.onChange.call(this, t), _r_();
}, B.Search.CustomGroupSelector.prototype.onExternalEventModeChanged = function(e) {
_i_("3dab:7f41f0b0"), "basic" === e.mode ? this.hide() :this.show(), _r_();
}, B.Search.CustomGroupSelector.prototype.onExternalEventConfigChanged = function(e) {
_i_("3dab:791dac09");
var t;
e.adults !== t && this.$adultsSelector.val(e.adults), e.rooms !== t && this.$roomsSelector.val(e.rooms), e.children !== t && this.$childrenSelector.val(e.children), "basic" === e.type ? this.hide() :this.show(), _r_();
}, B.Search.ChildrenAgesSelector = function(e, t) {
_i_("3dab:7ae0e6df1"), this.initialize.apply(this, [].slice.call(arguments, 0)), this.initEvents(), this.onInit(), _r_();
}, B.Search.ChildrenAgesSelector.prototype = new B.Search.AbstractGroupConfigurationWidget(), B.Search.ChildrenAgesSelector.prototype.show = function() {
_i_("3dab:95d6c794"), B.Search.AbstractGroupConfigurationWidget.prototype.show.apply(this), _r_();
}, B.Search.ChildrenAgesSelector.prototype.initialize = function(e, t) {
_i_("3dab:96e83530"), this.$element = e, this.$inputsContainer = this.$element.find(".b-custom-element__container"), this.ages = this.getAges(), this.setOptions(t), _r_();
}, B.Search.ChildrenAgesSelector.prototype.initEvents = function() {
_i_("3dab:1a7d5d69"), this.$element.delegate("select[name=age]", "change", e.proxy(this.onChange, this)), this.$inputsContainer.find(".b-custom-element__label").bind("click", e.proxy(this.onLabelClick, this)), _r_();
}, B.Search.ChildrenAgesSelector.prototype.sanitizeInput = function() {
_i_("3dab:2c8e0a25"), this.getInputs().each(function(e, t) {
_i_("3dab:587af618");
var i = t.value;
i = i.replace(/\D/g, function(e) {
return _i_("3dab:eabf3953"), _r_(B.Search.SPECIAL_DIGITS.hasOwnProperty(e) ? B.Search.SPECIAL_DIGITS[e] :e);
}), t.value = i, _r_();
}), _r_();
}, B.Search.ChildrenAgesSelector.prototype.onChange = function() {
_i_("3dab:b5250cac"), this.sanitizeInput();
var e = this.getConfig();
"function" == typeof this.options.onChange && this.options.onChange.call(this, e), _r_();
}, B.Search.ChildrenAgesSelector.prototype.onLabelClick = function(e) {
_i_("3dab:b08cad04"), e.preventDefault();
var t = this.getInputs(), i = t.filter(function() {
return _i_("3dab:28cf0af0"), _r_("" == this.value);
}).first();
i.length ? i.focus() :t.first().focus(), _r_();
}, B.Search.ChildrenAgesSelector.prototype.DISABLED_CLASS = "b-form-children-ages_disabled", B.Search.ChildrenAgesSelector.prototype.onExternalEventGroupInvalid = function(e) {
_i_("3dab:ed0ec941"), this.showErrorMessages(e.messages), _r_();
}, B.Search.ChildrenAgesSelector.prototype.onExternalEventGroupValid = function(e) {
_i_("3dab:b8388b03"), this.hideErrorMessages(e.messages), _r_();
}, B.Search.ChildrenAgesSelector.prototype.onExternalEventConfigChanged = function(e) {
_i_("3dab:569b85d3");
for (var t, i = this.getAges(), n = e.childrenAges, r = 0; r < n.length; r++) n[r] === t && (n[r] = i[r]);
0 === n.length ? this.hide() :((n.length !== i.length || n.join(",") !== this.serialize()) && this.render(n), this.show()), _r_();
}, B.Search.ChildrenAgesSelector.prototype.getInputs = function() {
return _i_("3dab:ee598e62"), _r_(this.$inputsContainer.find(".b-children-ages-configurator__element"));
}, B.Search.ChildrenAgesSelector.prototype.getConfig = function() {
return _i_("3dab:11c6dd6f"), _r_({
childrenAges:this.getAges()
});
}, B.Search.ChildrenAgesSelector.prototype.getAges = function() {
_i_("3dab:4987c6a2");
var t = this.getInputs(), i = [];
return t.each(function(t, n) {
_i_("3dab:9c031e79"), e(n).find(":selected").hasClass("sb_child_ages_empty_zero") ? i.push(void 0) :i.push(n.value), _r_();
}), this.ages = i, _r_(i);
}, B.Search.ChildrenAgesSelector.prototype.serialize = function() {
return _i_("3dab:7584e5bf"), _r_(this.ages.join(","));
}, B.Search.ChildrenAgesSelector.prototype.renderLabel = function(t) {
_i_("3dab:e8a46040");
var i = null, n = null, r = null, a = null, o = null, _ = B.require("formatting/date"), s = B.search.dates("checkout"), d = this.$element.find(".b-custom-element__label");
"valid" === s.type ? (i = {
day:s.date,
month:s.month,
year:s.year
}, r = B.jstmpl.translations("bh_gsb_search_box_checkout_age", null, {
date:_.format(i, "short_date")
}), n = B.jstmpl.translations("bh_gsb_search_box_checkout_age_plural", null, {
date:_.format(i, "short_date")
}), d.text(1 == t ? r :n), "city" === B.env.b_action && (a = e(".lp_bold_date_picker_lightbox_clear.plural"), o = e(".lp_bold_date_picker_lightbox_clear.singular"), a.text(n), o.text(r))) :(n = B.jstmpl.translations("loc_sbox_children_age_plural"), r = B.jstmpl.translations("loc_sbox_children_age_singular"), d.text(1 == t ? r :n)), _r_();
}, B.Search.ChildrenAgesSelector.prototype.render = function(e) {
_i_("3dab:79a8bc56");
var t, i = e.length, n = "";
this.$inputsContainer.find(".b-children-ages-configurator__element").remove(), this.renderLabel(i);
for (var r = 0; i > r; r++) t = e[r] >= 0 ? e[r] :"", n += this.renderSelector(t);
this.$inputsContainer.append(n), _r_();
}, B.Search.ChildrenAgesSelector.prototype.renderSelector = function(e, t, i) {
_i_("3dab:c1af04ce");
var n = "b-children-ages-configurator__element b-children-ages-configurator__element_selector js-multi-room-ages", r = '<select name="age" class="' + n + '">';
if (e) var e = parseInt(e, 10) || 0; else r += "index" === B.env.b_action || "hotel" === B.env.b_action || "searchresults" === B.env.b_action ? '<option class="sb_child_ages_empty_zero" value="12 " selected="selected"></option>' :'<option class="sb_child_ages_empty_zero" value="0 " selected="selected"></option>';
for (var a = 0; 17 >= a; a++) r += "<option " + (0 === a ? 'class="sb_child_ages_not_empty_zero"' :"") + ' value="' + a + '" ' + (a === e ? "selected" :"") + ">" + a + "</option>";
return r += "</select>", _r_(r);
}, B.Search.createWidgetPlugin("predefinedGroupSelector", B.Search.PredefinedGroupSelector), B.Search.createWidgetPlugin("customGroupSelector", B.Search.CustomGroupSelector), B.Search.createWidgetPlugin("childrenAgesSelector", B.Search.ChildrenAgesSelector);
function t() {
_i_("3dab:38ef2841"), e(".b-form-predefined-group").predefinedGroupSelector({
onChange:function(e) {
_i_("3dab:a12f7296"), "basic" === e.type ? B.search.group().mode("basic") :B.search.group().mode("custom"), "more_options" !== e.type && B.search.group(e), "more_options" === e.type ? B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_ADVANCED_MODE_SELECTED) :"basic" === e.type && 2 === e.adults && 1 === e.rooms && 0 === e.children ? B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_BASIC_MODE_SELECTED) :"basic" === e.type && B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_PREDEFINED_OPTION_SELECTED), _r_();
},
onInit:function(e) {
_i_("3dab:1be1c036"), "basic" === e.type ? B.search.group().mode("basic") :B.search.group().mode("custom"), _r_();
}
}), e(".b-form-custom-group").customGroupSelector({
onChange:function(e) {
_i_("3dab:ac1f663c");
var t = B.search.group().value;
t.adults !== e.adults && B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_ADULTS_NUMBER_CHANGED), t.rooms !== e.rooms && B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_ROOMS_NUMBER_CHANGED), t.children !== e.children && B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_CHILDREN_NUMBER_CHANGED), B.search.group(e), _r_();
},
onInit:function(e) {
_i_("3dab:27af7462"), "basic" !== B.search.group().mode() && this.show(), _r_();
}
}), e(".b-form-children-ages").childrenAgesSelector({
onChange:function(e) {
_i_("3dab:8e5eca78"), B.search.group("childrenAges", e.childrenAges), B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_CHILDREN_AGE_CHANGED), _r_();
},
onInit:function(e) {
_i_("3dab:1b458654"), e.childrenAges.length > 0 ? this.show() :this.hide(), B.eventEmitter.bind(B.Search.Events.DATE_CHANGED, function(e, t) {
_i_("3dab:050314a7"), "checkout" === t.type && this.renderLabel(this.getConfig().childrenAges.length), _r_();
}.bind(this)), B.eventEmitter.bind(B.Search.Events.DATE_INVALID, function(e, t) {
_i_("3dab:17167d60"), this.render(this.getConfig().childrenAges), _r_();
}.bind(this)), B.eventEmitter.bind(B.Search.Events.DATE_MONTH_CHANGED, function(e, t) {
_i_("3dab:17167d601"), this.render(this.getConfig().childrenAges), _r_();
}.bind(this)), _r_();
}
}), B.eventEmitter.bind(B.Search.Events.GROUP_MODE_CHANGED, function(t, i) {
_i_("3dab:35947f57"), e.fn.predefinedGroupSelector("notify", "groupModeChanged", i), e.fn.customGroupSelector("notify", "groupModeChanged", i), e.fn.childrenAgesSelector("notify", "groupModeChanged", i), B.search.group().validate("reset"), _r_();
}), B.eventEmitter.bind(B.Search.Events.GROUP_CHANGED, function(t, i) {
_i_("3dab:ab716e2b"), e.fn.predefinedGroupSelector("notify", "groupChanged", i), e.fn.customGroupSelector("notify", "groupChanged", i), e.fn.childrenAgesSelector("notify", "groupChanged", i), _r_();
}), B.eventEmitter.bind(B.Search.Events.GROUP_INVALID, function(t, i) {
_i_("3dab:770f371e");
for (var n = i.validators, r = [], a = [], o = 0; o < n.length; o++) n[o].validationParameters.invalidAges && r.push(n[o].validationParameters.invalidAges), n[o].message && a.push(n[o].message);
e.fn.childrenAgesSelector("notify", "groupInvalid", {
messages:a,
agesStatus:r
}), _r_();
}), B.eventEmitter.bind(B.Search.Events.GROUP_VALID, function(t, i) {
_i_("3dab:18accc73"), e.fn.childrenAgesSelector("notify", "groupValid", {
message:"message",
agesStatus:[]
}), _r_();
}), e("#frm").bind("submit", function(e) {
return _i_("3dab:3145cdcd"), _r_(B.search.group().validate());
}), _r_();
}
return _r_({
init:t
});
}();
B.when({
events:"ready"
}).run(function(t) {
_i_("3dab:03ad66cd"), e.init(), _r_();
}), _r_();
}(), function() {
_i_("3dab:2238ccae");
var e = {
priority:9,
init:function() {
_i_("3dab:fae56f87");
var e = B.require("jquery"), t = e("#newsletter_to", ".footerForm"), i = t.attr("value");
t.click(function() {
_i_("3dab:5425a62f");
var t = e(this);
e("dl #newsletter_to").removeClass("error"), t.val() === i ? t.val("") :t.select(), _r_();
}), t.blur(function() {
_i_("3dab:99624b4c");
var t = e(this);
"" === t.val() && t.val(i), _r_();
}), e(".signupForm").submit(function(t) {
_i_("3dab:e8eecddf"), t.preventDefault(), e(".newsletter_ajax_error").hide();
var i, n = booking.env, r = e(this), a = /^([\w-\.\+]+@([\w-]+\.)+[\w-]{2,14})?$/, o = e("input[name=url]", r).val(), _ = e("input[name=hostname]", r).val(), s = e("input[name=aid]", r).val(), d = e("input[name=companyname]", r).val(), c = e("input[name=subscribe_source]", r).val(), l = e("input[name=subscribe_notification]", r).val(), u = e("input[name=dest_id]", r).val(), f = e("input[name=dest_type]", r).val(), h = e("input[name=to]", r).val(), b = e("input[name=get_the_app]", r).is(":checked"), p = e("input[name=incentive_popup_campaign_id]", r).val(), g = e("input[name=incentive_popup_share_link]", r).val();
if ("" === h || !a.test(h)) return e(this).find(".nl_inputfield_track").addClass("error"), e(".newsletter_subscribe_error_invalid", r).show(), _r_(!1);
h = encodeURIComponent(h), i = "to=" + h + "&url=" + o + "&hostname=" + _ + "&aid=" + s + "&companyname=" + d + "&subscribe_source=" + c, "" !== l && (i = i + "&subscribe_notification=" + l), "" != u && (i = i + "&dest_id=" + u), "" != f && (i = i + "&dest_type=" + f), b === !0 && (i += "&get_the_app=1"), p && (i = i + "&incentive_popup_campaign_id=" + p), g && (i = i + "&incentive_popup_share_link=" + g), e(".newsletter_sub_preloader", r).show(), e.ajax({
type:"POST",
url:"/newslettersubscribe.json",
data:i,
dataType:"json",
success:function(t) {
if (_i_("3dab:6e027eaf"), e(".newsletter_sub_preloader", r).hide(), 0 === t.success) return "denied" === t.error ? e("form").hasClass("unsubHero-action") ? (e("form.unsubHero-action").addClass("error"), e(".unsubHero-form .blurb .error").show()) :(e(this).find(".nl_inputfield_track").addClass("error"), e(".newsletter_subscribe_error_denied", r).show(), e(".newsletter_subscribe_error_bad_unknown, .newsletter_subscribe_error_invalid, .newsletter_sub_success", r).hide()) :"bad_params" === t.error && (e("form").hasClass("unsubHero-action") ? (e("form.unsubHero-action").addClass("error"), e(".unsubHero-form .blurb .error").show()) :(e(".nl_inputfield_track").addClass("error"), e(".newsletter_subscribe_error_bad_unknown", r).show(), e(".newsletter_subscribe_error_denied, .newsletter_subscribe_error_invalid, .newsletter_sub_success", r).hide())), _r_();
if (1 === t.success) if (e("div#flashdealsbg_wrapper").length) window.location.href = n.b_nonsecure_hostname_signup + n.b_fd_searchresults_url_signup; else if (e("form").hasClass("unsubHero-action")) e("form.unsubHero-action, .unsubHero-form .blurb, .unsubHero-benefits, .unsubHero-tagline").hide(), e(".unsubHero-form .success-blurb, .b_unsubscribe_user .b_unsubscribe_user").show(), e(".unsubDesc strong").replaceWith("<strong>" + h + "</strong>"), e(".unsubHero-form").addClass("success"), e("body").hasClass("unsub_hero_thanks") || e("html, body").animate({
scrollTop:e(".unsubHero-form").offset().top
}, 750), e("input[value='subscribe_flash_deals'], input[value='subscribe_cityspecial']").attr("checked", "checked"), e(".feedback.error", ".unsub_messages").hide(), e("input[value='subscribe_genius'], input[value='subscribe_weekly'], input[value='subscribe_sunday_newsletter'], input[value='subscribe_popular']").removeAttr("checked"); else if (e(".newsletter_sub_info", r).hide(), e(".newsletter_sub_success", r).show(), e("#add_location_to").val(h), e(".newsletter_form_fields, .newsletter_subscribe_error_bad_unknown, .newsletter_subscribe_error_denied, .newsletter_subscribe_error_invalid", r).hide(), t.has_account) {
var i = e("#userdataform form").eq(0);
i && i.attr("action", i.attr("data-url-login"));
}
_r_();
}
}), _r_();
}), e(".signupWithnameForm").submit(function(t) {
_i_("3dab:2f45af25"), t.preventDefault(), e(".feedback_msg").each(function() {
_i_("3dab:04fc9220"), e(this).hide(), _r_();
});
var i, n = e(this), r = /^([\w-\.\+]+@([\w-]+\.)+[\w-]{2,14})?$/, a = e("input[name=companyname]", n).val(), o = e("input[name=aid]", n).val(), _ = e("input[name=subscribe_source]", n).val(), s = e("input[name=email]", n).val(), d = e("input[name=firstname]", n).val();
if ("" === s || !r.test(s)) return e(".newsletter_subscribe_error_invalid", n).show(), _r_(!1);
e('<div class="loader_placer"></div>').appendTo("#sfl_stepOne"), i = "to=" + s + "&email=" + s + "&aid=" + o + "&companyname=" + a + "&subscribe_source=" + _, e.ajax({
type:"POST",
url:"/newslettersubscribe.json",
data:i,
dataType:"json",
success:function(t) {
if (_i_("3dab:3d16234e"), 0 == t.success) return e(".loader_placer").hide(), "denied" == t.error ? (e(".newsletter_subscribe_error_denied", n).show(), e(".newsletter_subscribe_error_bad_unknown, .newsletter_subscribe_error_invalid, .newsletter_sub_success", n).hide()) :("bad_params" == t.error || "unknown" == t.error) && (e(".newsletter_subscribe_error_bad_unknown", n).show(), e(".newsletter_subscribe_error_denied, .newsletter_subscribe_error_invalid, .newsletter_sub_success", n).hide()), _r_();
if (1 == t.success) if (e(".loader_placer").hide(), e(".uspfield").hide(), e("#sfl_stepOne").hide(), "" == d || booking.env.b_exclude_lang_firstname) e("#sfl_stepThree").show(), e(".userWithoutFirstname").show(); else if (d = escape(d), 1 == t.has_account) e(".firstnameplacer").html(d), e("#sfl_stepThree").show(), e(".userWithAccount").show(); else {
var i = booking.env.b_signup_iframe_url + "&firstname=" + d + "&email=" + escape(s);
i += "&aid=" + B.env.aid, i += "&label=" + B.env.b_label, e('<iframe border="0" id="sfl_stepTwo" src="' + i + '" width="656" height="320" frameborder="no" scrolling="no"></iframe>').appendTo(".signupWithnameForm");
}
_r_();
}
}), _r_();
}), e("#subscriber_account_active").submit(function(t) {
if (_i_("3dab:35277f08"), e('input[name="mypassword"]').val().length < 1) return e(".newsletter_register_error_nopassword").show(), _r_(!1);
e('<input type="hidden" name="password" value="' + e('input[name="myssword"]').val() + '" />').appendTo("#subscriber_account_active"), _r_();
}), e(".modal-mask-closeBtn").click(function() {
return _i_("3dab:59572322"), _r_(!1);
}), e(".modal-mask").click(function() {
return _i_("3dab:595723221"), _r_(!1);
}), _r_();
}
};
B.when({
events:"ready"
}).run(function(t) {
_i_("3dab:4182a5b6"), e.init(), _r_();
}), _r_();
}(), B.define("component/emk/subscription-entry-point", function(e, t, i) {
"use strict";
_i_("3dab:2cb4d6b3");
var n = e("events"), r = e("when"), a = e("component");
i.exports = a.extend({
init:function() {
_i_("3dab:dd688c88"), this.$form = o(this.$el);
var e = Math.floor(1e4 * Math.random()), t = "emk-entrypoint-" + e;
this.uniqueClass = t, this.$el.addClass(t), this.entryPointLabel = this.$el.data("emk-entry-point-label"), this.addEventListeners(), _r_();
},
addEventListeners:function() {
_i_("3dab:a0758b91");
var e = this, t = this.$el.data("emk-entry-point-view-event"), i = "." + this.uniqueClass, a = function() {
_i_("3dab:db306836"), n.trigger("emk:subscription-entry-point-seen", {
$el:e.$el,
entryPointLabel:e.entryPointLabel
}), _r_();
};
t ? n.on(t, function(e) {
_i_("3dab:c026688c"), e.$el.find(i) && a(), _r_();
}) :r({
events:"view " + i
}).run(a), this.$form.on("submit", function(t) {
_i_("3dab:501ec331"), t.preventDefault(), n.trigger("emk:subscription-entry-point-submitted", {
$el:e.$el,
entryPointLabel:e.entryPointLabel
}), _(e.$form).then(function(t, i) {
_i_("3dab:9843bb19"), n.trigger("emk:subscription-success", {
$el:e.$el,
subscriberId:t.subscriber_id,
entryPointLabel:e.entryPointLabel
}), _r_();
}, function(t, i) {
_i_("3dab:1ce1ebfe");
var r = "error";
t.responseJSON && t.responseJSON.error && (r = t.responseJSON.error), n.trigger("emk:subscription-error", {
$el:e.$el,
entryPointLabel:e.entryPointLabel,
error:r
}), _r_();
}), _r_();
}), _r_();
}
});
function o(e) {
_i_("3dab:9e35f10b");
var t;
return e.is("form") ? t = e :(t = e.find("form"), t || (t = e.parents("form").first())), _r_(t);
}
function _(e) {
return _i_("3dab:fb13b339"), _r_($.ajax({
method:e.attr("method"),
url:e.attr("action"),
dataType:"json",
data:e.find("[data-ajax-submit]").serialize()
}));
}
_r_();
}), B.define("component/emk/subscription-entry-point-feedback-msg", function(e, t, i) {
"use strict";
_i_("3dab:ecfb9b14");
var n = e("events"), r = e("component"), a = {
submitted:"subscription-submitted",
success:"subscription-success",
error:"subscription-error",
invalid:"subscription-invalid"
};
i.exports = r.extend({
init:function() {
_i_("3dab:3ecb3334"), this.addEventListeners(), _r_();
},
addEventListeners:function() {
_i_("3dab:b693fc3e");
var e = this;
n.on("emk:subscription-entry-point-submitted", function(t) {
_i_("3dab:09ae3e92"), e.state = "submitted", e.render(), _r_();
}), n.on("emk:subscription-success", function(t) {
_i_("3dab:3c85a2a5"), e.state = "success", e.render(), _r_();
}), n.on("emk:subscription-error", function(t) {
_i_("3dab:1a83f04b"), e.state = "bad_params" == t.error ? "invalid" :"error", e.render(), _r_();
}), _r_();
},
render:function() {
_i_("3dab:9b32d96a");
for (var e in a) {
if (e == this.state) continue;
this.$el.removeClass(a[e]);
}
this.$el.addClass(a[this.state]), _r_();
}
}), _r_();
}), B.when({
events:"load"
}).run(function(e) {
_i_("3dab:15a9e2b7");
var t = e("events"), i = e("jquery");
t.on("emk:subscription-success", function(e) {
_i_("3dab:6ffae6a4"), setTimeout(function() {
_i_("3dab:7a9db314"), i("[data-emk-subscription-success-remove]").slideUp(), _r_();
}, 2700), _r_();
}), _r_();
}), B.define("components/emk/ga-tracking", function(e, t, i) {
_i_("3dab:e11da8a9");
var n = e("ga-tracker"), r = "EMK";
function a() {
_i_("3dab:45d68a10");
var t = e("events");
t.on("emk:subscription-success", function(e) {
_i_("3dab:8105ee76"), o("Subscribe", "both", e.entryPointLabel), _r_();
}), t.on("emk:subscription-frequency-submitted", function(e) {
_i_("3dab:674ab66b"), o("Select Frequency", "emk", e.frequency), "never" == e.frequency && o("Unsubscribe", "both"), _r_();
}), t.on("emk:subscription-feedback-submitted", function(e) {
_i_("3dab:427e0d70"), o("Unsubscription Feedback", "emk", e.unsubscriptionReason), _r_();
}), t.on("emk:unsubscription-auto", function(e) {
_i_("3dab:75fb2eff"), o("Unsubscribe"), _r_();
}), t.on("emk:subscription-entry-point-seen", function(e) {
_i_("3dab:b849e4e5"), o("Entry-Point Seen", "main", e.entryPointLabel), _r_();
}), _r_();
}
function o(e, t, i) {
_i_("3dab:932c8756");
var a = "main" == t || "both" == t;
a && n.trackEvent(r, e, i), _r_();
}
i.exports = {
addEventListeners:a
}, _r_();
}), B.when({
events:"load"
}).run(function(e) {
_i_("3dab:708f2567");
var t = e("components/emk/ga-tracking");
t.addEventListeners();
var i = e("jquery"), n = e("events"), r = i("[data-emk-ga-track-subscription]");
if (r.length) {
var a = r.data("emk-subscriber-id"), o = r.data("emk-entry-point-label");
o && a && n.trigger("emk:subscription-success", {
subscriberId:a,
entryPointLabel:o
});
}
_r_();
}), booking.social_plugins_footer = function() {
_i_("3dab:71f3680a");
var e = function() {
_i_("3dab:5d1d5184");
var e = $("#footer_weibo"), t = $("#footer_wechat"), i = $("#footer_naver");
i.hover(function() {
_i_("3dab:821129f9"), i.find(".footer_tooltip").stop(!0, !0).fadeIn(), _r_();
}, function() {
_i_("3dab:212a3316"), i.find(".footer_tooltip").stop(!0, !0).fadeOut(), _r_();
}), e.hover(function() {
_i_("3dab:f64f30e6"), e.find(".footer_tooltip").stop(!0, !0).fadeIn(), _r_();
}, function() {
_i_("3dab:9653f704"), e.find(".footer_tooltip").stop(!0, !0).fadeOut(), _r_();
}), t.hover(function() {
_i_("3dab:c6c6996d"), t.find(".footer_tooltip").stop(!0, !0).fadeIn(), _r_();
}, function() {
_i_("3dab:6a497fc3"), t.find(".footer_tooltip").stop(!0, !0).fadeOut(), _r_();
}), _r_();
};
return _r_({
init:e
});
}(), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:b7bee844"), booking.env.social_plugins_footer && booking.social_plugins_footer.init(), _r_();
}), booking.env.Tabs = function(e) {
_i_("3dab:b6bc149a");
var t = {
baseEl:"#newsletter_deals_city",
menuEl:".deals_menu",
contentEl:".deals_wrapper",
dealsEl:".deals",
navEl:".nav_menu",
defaultEl:1
}, e = $.extend(t, e);
$(e.menuEl + " li:nth-child(" + e.defaultEl + ")").addClass("active").show(), $(e.contentEl + " ul.deals:nth-child(" + e.defaultEl + ")").show(), $("li", e.menuEl).click(function() {
_i_("3dab:020bad92"), $("li", e.menuEl).removeClass("active"), $(this).addClass("active"), $(e.dealsEl, e.contentEl).hide();
var t = $(this).find("a").attr("href");
return $(t).show(), _r_(!1);
}), $(e.contentEl, e.baseEl).show(), _r_();
}, function(e, t, i, n) {
"use strict";
_i_("3dab:1450b79f"), e.when({
condition:"tdot" === e.env.b_site_type,
events:"ready"
}).run(function() {
_i_("3dab:6cd523c4");
var t = !e.env.b_is_ipad && e.env.pointer_events_s_r_n_d ? 1 :0;
if (!e.env.b_is_ipad && !t) return _r_();
var i, n, r, a, o, _ = e.require("jquery"), s = !1;
function d(e) {
if (_i_("3dab:68f6b8c3"), i.isVisibleOverlay() && i.click == e) i.distroyOverlay(); else {
var t = a.data("spinner-loaded");
if (t || (a.append('<div class="mm_loading mm_preload"><a href="#"></a></div>'), o.append('<div class="mm_loading mm_preload"><a href="#"></a></div>'), a.data("spinner-loaded", !0)), i.createOverlay(), i.click = e, _(".milk_menu").hide(), _(".b_recentlyviewed").length && _(".b_recentlyviewed").removeClass("rv-content-visible"), _("#top_lw_wrapper").hide(), "lang" === e && !s) {
s = !0;
var n = a.clone();
n.find(".t_flag").each(function() {
_i_("3dab:122ecd6f");
var e = _(this), t = e.data("img"), i = e.data("size");
e.append('<img src="' + t + '" width="' + i + '" height="' + i + '" />'), _r_();
}), a.html(n.html());
}
"lang" === e ? a.show() :"curr" === e && o.show();
}
_r_();
}
function c() {
_i_("3dab:10bf19c3"), n.on("click", function() {
_i_("3dab:933505ea"), d("lang"), _r_();
}), r.on("click", function() {
_i_("3dab:94f5c6fd"), d("curr"), _r_();
});
var e = function() {
_i_("3dab:dfd09b38");
var e = _(this), t = e.parent();
if (t.hasClass("selected")) return i.distroyOverlay(), _r_(!1);
t.parent().parent().find("li.selected").removeClass("selected"), _(".mm_loading").removeClass("mm_loading"), t.addClass("mm_loading"), _r_();
};
a.on("click", "li a", e), o.on("click", "li a", e), _r_();
}
function l() {
_i_("3dab:f6e9947f"), i = e.require("t_main_rm_js/ng_last_viewed") || "", n = _("#b_nav_language"), r = _("#b_nav_currency"), a = _("#top_language"), o = _("#top_currency"), c(), _r_();
}
l(), _r_();
}), _r_();
}(window.booking, window, document), B.define("rewrite_tt", function(e, t, i) {
_i_("3dab:30280732");
var n = e("jquery");
i.exports = {
version:"1.2.5",
tt:null,
ttWinHeight:0,
ttWinWidth:0,
ttScrollTop:0,
ttScrollLeft:0,
ttShowLeft:!1,
ttShowTop:!1,
ttCounter:0,
ttShow:null,
ttContent:"",
ttCurElem:null,
ttCurText:"",
ttTimedOut:null,
ttTimeout:300,
ttClass:"basic_tooltip_class js-tooltip-wrap",
ttHidennodeAttr:"node_tt_id",
ttNodes:[ ".jq_tooltip", "*[data-title]", ".policy_name_tt" ],
toolTips:{},
preLoadedImages:{},
init:function() {
if (_i_("3dab:22e822d0"), booking.env.b_is_tdot_traffic && "book" === booking.env.b_action) return _r_(!0);
booking.env.rtl && (this.ttClass += " rtl_tooltip_class");
var e = this;
booking.env.b_is_ie7 && (this.ttTimeout = 0), this.tt = document.getElementById("tooltip_wrap") || function() {
_i_("3dab:009a8a89");
var e = document.createElement("div");
e.id = "tooltip_wrap";
var t = '<div class="tt_shadow"><div class="tt_content"></div></div>';
return document.body.appendChild(e), e.innerHTML = t, _r_(e);
}(), window.onresize = function() {
_i_("3dab:bd9b0907"), e.setWindowSize(), _r_();
}, n(window).on("scroll", function() {
_i_("3dab:a412f28f"), e.setScrollPosition(), _r_();
}), setTimeout(function() {
_i_("3dab:50ef6ab6");
var t = e.ttNodes.join(", ");
e.ttContent = n(".tt_content", e.tt).length ? n(".tt_content", e.tt).get(0) :e.tt, e.setWindowSize(), e.setScrollPosition(), booking.env.b_is_tdot_traffic && n(document).on("touchstart.ttfix", ".js-tooltip-wrap", function() {
_i_("3dab:3100820c"), e.showHideTooltip(null, 0, 0), _r_();
});
function i(e, t) {
_i_("3dab:64082a65");
var i = e.pageX || e.clientX + t.ttScrollLeft || 0, n = e.pageY || e.clientY + t.ttScrollTop || 0;
return _r_({
iMouseX:i,
iMouseY:n
});
}
function r(e) {
return _i_("3dab:4a148596"), _r_("tooltip" === e.getAttribute("data-component"));
}
if (n("body").on("mouseleave", t, function(t) {
if (_i_("3dab:136af98b"), r(this)) return _r_();
var n = t || window.event, a = i(n, this);
e.showHideTooltip(null, a.iMouseX, a.iMouseY), _r_();
}), n("body").on("mouseover mousemove", function(a) {
_i_("3dab:7b68d662");
var o = a || window.event, _ = n(a.target), s = _.is(t) ? _ :_.parents(t).first();
if (!s.length) {
var d = e.ttCurElem && !n.contains(document, e.ttCurElem);
return d && e.showHideTooltip(null), _r_();
}
if (r(s[0])) return _r_();
var c = i(o, s[0]);
e.showHideTooltip(s[0], c.iMouseX, c.iMouseY), _r_();
}), booking.env.b_is_ie8 || booking.env.b_is_ie9) {
var a = e.ttNodes.join("[title], ");
n(a).each(function() {
_i_("3dab:facd6da7");
var e = this.getAttribute("title");
this.setAttribute("data-title", e), this.removeAttribute("title"), _r_();
});
}
_r_();
}, 500), _r_();
},
showHideTooltip:function(e, t, i) {
if (_i_("3dab:bcfb5e6e"), null != this.ttShow || null == e) {
if (e != this.ttCurElem && null != this.ttCurElem) this.ttShow = null, this.ttContent && (this.ttContent.innerHTML = ""), this.ttCurText = "", this.ttCurElem = null, this.ttShowLeft = !1, this.ttShowTop = !1, this.tt && (this.tt.style.display = "none", this.tt.className = "", this.tt.style.width = "auto"); else if (this.tt) {
var n = this.getPosition(t, i, this.tt);
n && n.length > 1 && (this.tt.style.left = n[0] + "px", this.tt.style.top = n[1] + "px");
}
} else {
var r = this.getTTNode(e);
if (null != r) {
this.ttShow = e.id;
var a = r;
this.ttCurElem = e, this.ttCurText = a[0];
var o = "" != a[1] ? a[1] :this.ttClass;
if (a[2] && (this.ttShowLeft = !0), a[5] && (this.ttShowTop = !0), a[4] && (o += " tt_loading", this.preloadImg(e.id)), this.ttContent.innerHTML = this.ttCurText, this.tt && (this.tt.className = o, null != a[3] ? this.tt.style.width = ("function" == typeof a[3] ? a[3].call(this.tt) :a[3]) + "px" :this.tt.style.width = "auto"), a[4] || this.showToolTip(0), this.tt) {
var n = this.getPosition(t, i, this.tt);
this.tt.style.left = n[0] + "px", this.tt.style.top = n[1] + "px";
}
}
}
_r_();
},
showToolTip:function(e) {
_i_("3dab:d275d0df");
var t = this;
if (0 != this.ttTimeout) {
var i = e < this.ttTimeout ? this.ttTimeout - e :10;
t.showingTooltip && clearTimeout(t.showingTooltip), t.showingTooltip = setTimeout(function() {
_i_("3dab:6cb2ef97"), "" != t.ttCurText ? (booking.eventEmitter.trigger("tooltip.show", [ t.ttCurElem, t ]), t.tt.style.display = "block") :t.showHideTooltip(null, 0, 0), _r_();
}, i);
} else this.tt && (this.tt.style.display = "block");
_r_();
},
setScrollPosition:function() {
_i_("3dab:6c9abf04"), "number" == typeof window.pageYOffset ? (this.ttScrollLeft = window.pageXOffset, this.ttScrollTop = window.pageYOffset) :document.documentElement && document.documentElement.scrollTop ? (this.ttScrollLeft = document.documentElement.scrollLeft, this.ttScrollTop = document.documentElement.scrollTop) :(this.ttScrollLeft = document.body.scrollLeft, this.ttScrollTop = document.body.scrollTop), _r_();
},
setWindowSize:function() {
_i_("3dab:eb3289fc"), window.innerWidth ? (this.ttWinWidth = window.innerWidth, this.ttWinHeight = window.innerHeight) :0 != document.documentElement.clientWidth ? (this.ttWinWidth = document.documentElement.clientWidth, this.ttWinHeight = document.documentElement.clientHeight) :(this.ttWinWidth = document.body.clientWidth, this.ttWinHeight = document.body.clientHeight), _r_();
},
getTTNode:function(e) {
if (_i_("3dab:428e1355"), !n(e).attr("data-resized")) {
if (e.id) var t = e.id; else {
this.ttCounter++;
var t = "b_tt_holder_" + this.ttCounter;
e.id = t;
}
if (this.toolTips[t]) return _r_(this.toolTips[t]);
if (n(e).attr("data-" + this.ttHidennodeAttr) && n("#" + n(e).attr("data-" + this.ttHidennodeAttr)).length) var i = n("#" + n(e).attr("data-" + this.ttHidennodeAttr)).html(); else if (n(e).hasClass("policy_name_tt")) var i = n(e).siblings(".differing_policies").html(); else if (n(e).hasClass("fleximeter_tt")) var i = n(e).parents(".hp-rt__policy-list").siblings(".differing_policies").html(); else if (n(e).hasClass("non-refundable-savings")) var i = n(e).siblings(".differing_policies").html(); else {
var i = e.getAttribute("data-title") || e.getAttribute("title");
e.getAttribute("title") && !e.getAttribute("data-title") && (e.setAttribute("data-title", e.getAttribute("title")), e.removeAttribute("title"));
}
var r = e.nodeName.toLowerCase();
if (("option" == r || "link" == r || "select" == r) && (i = ""), i && "" != i) {
var a = this.ttClass, o = n(e).hasClass("left_tt"), _ = !1, s = new RegExp("(<script type=['\"]track_copy['\"] data-hash=['\"](\\w+)['\"]></script>)"), d = s.exec(i), c = d && d[2];
if (c && (i = i.replace(s, ""), B.et.stage(c, 1)), _) return _r_(null);
var l = null, u = e.getAttribute("data-width");
if (u && !isNaN(u) && u > 150 && 1001 > u) l = u; else {
var f = e.getAttribute("rel");
f && !isNaN(f) && f > 150 && 1001 > f && (l = f);
}
var h = i.indexOf("<img") > -1 && null == l ? !0 :!1;
e.className.indexOf("large_tooltip") > -1 && (a += " tt_large"), h && (a += " blackBorderTooltip"), n(e).attr("data-tooltip-class") && (a += " " + n(e).attr("data-tooltip-class"));
var b = n(e).attr("data-toponly"), p = !!b;
return this.toolTips[t] = [ i, a, o, l, h, p ], null != e.getAttribute("title") && (null == e.getAttribute("data-title") && e.setAttribute("data-title", e.title), e.title = "", e.removeAttribute("title")), booking.env.b_is_ie && e.removeAttribute("alt"), _r_(this.toolTips[t]);
}
return _r_(null);
}
_r_();
},
getPosition:function(e, t, i) {
_i_("3dab:e7b2a320");
var r = 15, a = 10, o = e + r, _ = t + a, s = n(i).width(), d = n(i).height(), c = 20;
return (e + s + this.ttScrollLeft > this.ttWinWidth - c || this.ttShowLeft && e > s + c) && (o = e - s - c), B.env.rtl && (o = e - s - r, s + c > e - this.ttScrollLeft && (o = e + r)), this.ttShowTop ? t - d - a > this.ttScrollTop && (_ = t - d - a) :(this.ttShowTop || t + d - this.ttScrollTop > this.ttWinHeight - c) && (_ = t - d - a), _r_([ o, _ ]);
},
preloadImg:function(e) {
_i_("3dab:44833f7a");
var t = this, i = new Date(), n = this.toolTips[e][0].match(/src=['"]([^'"]+)['"]/);
if (!n[1]) return this.toolTips[e][4] = !1, _r_();
if (this.preLoadedImages[n[1]]) return this.toolTips[e][4] = !1, -1 === this.preLoadedImages[n[1]].ttid.indexOf(e) && this.preLoadedImages[n[1]].ttid.push(e), _r_();
this.preLoadedImages[n[1]] = {
ttid:[ e ],
loaded:!1
};
var r = document.createElement("img");
r.onload = function() {
_i_("3dab:d9e9c166"), t.preLoadedImages[this.src].loaded = !0, t.preLoadedImages[this.src].ttid.forEach(function(e) {
_i_("3dab:e308468f");
var n = t.toolTips[e];
if (null != n[3]) {
var r = this.width + 20;
r > 150 && (n[3] = r);
}
if (n[4] = !1, t.ttShow !== e) return _r_();
null != n[3] && (t.tt.style.width = n[3] + "px");
var a = new Date(), o = a.getTime() - i.getTime();
t.showToolTip(o), _r_();
}), _r_();
}, r.src = n[1], _r_();
},
addTooltip:function(e, t, i, r, a, o) {
_i_("3dab:f749d42f"), "function" == typeof t && (t = t());
var _ = this;
"string" == typeof e && n("#" + e).length ? (n("#" + e).addClass("jq_tooltip"), this.toolTips[e] = [ t, i, r, a, o ]) :"object" == typeof e && n(e).each(function() {
if (_i_("3dab:57f25910"), n(this).addClass("jq_tooltip"), this.id) var e = this.id; else {
_.ttCounter++;
var e = "b_tt_holder_" + _.ttCounter;
this.id = e;
}
t || (t = n(this).attr("data-title")), a || (a = n(this).attr("data-width")), _.toolTips[e] = [ t, i, r, a, o ], _r_();
}), _r_();
},
updateTooltip:function(e, t, i, r) {
if (_i_("3dab:82d74d44"), r = r || {}, n(e).attr("id")) var a = n(e).attr("id"); else {
this.ttCounter++;
var a = "b_tt_holder_" + this.ttCounter;
n(e).attr("id", a);
}
!i && this.toolTips[a] ? (this.toolTips[a][0] = t, r.width && (this.toolTips[a][3] = r.width)) :this.addTooltip(a, t, "", !1, r.width || null, !1), _r_();
}
}, _r_();
}), B.when({
events:"ready"
}).require([ "rewrite_tt" ], function(e) {
_i_("3dab:ab4fb8c7"), e.init(), _r_();
}), function() {
_i_("3dab:808b9e12");
var e = B.env.async_signin;
B.env.fe_m_async_login && e && e.init_cbs ? e.init_cbs.push(function() {
_i_("3dab:dc3b60e6"), booking.userAccessFormHandler.init(), _r_();
}) :B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:88b6e31e"), booking.userAccessFormHandler.init(), _r_();
}), _r_();
}(), B.define("user-access-menu/api", function(e, t, i) {
_i_("3dab:2b3b0b30");
var n = e("promise"), r = function(e, t) {
return _i_("3dab:b7388102"), e = Math.ceil(e), t = Math.floor(t), _r_(Math.floor(Math.random() * (t - e + 1)) + e);
}, a = {
id:null,
meta:{},
target:null,
success:function() {},
fail:function() {}
};
function o(e, t) {
_i_("3dab:04943f32");
var i = $("input[name=rid]", e)[0];
i ? $(i).val(t.id) :e.prepend('<input type="hidden" name="rid" value="' + t.id + '">'), e.trigger("submit"), $(i).val(""), _r_();
}
i.exports = {
_pendingRequests:{},
_call:function(e) {
_i_("3dab:b98f520b");
var t = $(e.target);
t.is("form") && o(t, e), _r_();
},
_getRequestById:function(e) {
return _i_("3dab:5b85c74e"), _r_(Object.assign({}, a, this._pendingRequests[e]));
},
_removeRequestById:function(e) {
_i_("3dab:8e38fc8a"), this._pendingRequests[e] = null, delete this._pendingRequests[e], _r_();
},
_registerRequest:function(e) {
_i_("3dab:aa40b489"), e.id && (this._pendingRequests[e.id] = Object.assign({}, e)), _r_();
},
requestFailed:function(e, t) {
_i_("3dab:2ecfacf6");
var i = this._getRequestById(e);
this._removeRequestById(i.id), i.fail(t), _r_();
},
requestSucceed:function(e, t) {
_i_("3dab:7d624d11");
var i = this._getRequestById(e);
this._removeRequestById(i.id), i.success(t), _r_();
},
send:function(e) {
_i_("3dab:7a464afc");
var t = this;
return _r_(new n(function(i, n) {
_i_("3dab:c6c7af0a");
var o = Object.assign({}, a, e, {
id:r(1, 1e6),
success:i,
fail:n
});
t._registerRequest(o), t._call(o), _r_();
}));
}
}, _r_();
}), booking.userAccessFormHandler = function(e) {
_i_("3dab:66d5e1cc");
var t = B.require("jquery"), i = {
$userAccessMenu:{},
$parentForm:{},
$parentFormWrapper:{},
submitHooks:{},
globalSubmitHooks:{},
api:B.require("user-access-menu/api"),
_init:function(e) {
_i_("3dab:51b52cc4");
var i = this;
this.$userAccessMenu = t(".user_access_menu"), e && (this.$userAccessMenu = t(e)), this.$userAccessMenu.delegate(".user_access_section_trigger", "click", function(e) {
_i_("3dab:ddfdc65a");
var n = t(this), r = n.parents(".user_access_menu"), a = this.getAttribute("data-target");
return t(".form-section", r).addClass("form-hidden-section").removeClass("form-shown-section"), i.$parentForm = t("." + a, r), i.$parentForm.removeClass("form-hidden-section").addClass("form-shown-section"), t(".form-tabs", r).removeClass("user_menu_active_tab").attr("aria-selected", "false"), t("." + a + "_tab", r).addClass("user_menu_active_tab").attr("aria-selected", "true"), booking.eventEmitter && ("user_access_signup_menu" === n.data("target") && booking.eventEmitter.trigger("user_access_menu_register_tab"), "user_access_signin_menu" === n.data("target") && booking.eventEmitter.trigger("user_access_menu_login_tab")), _r_(!1);
}), t(".user_access_menu_auth_low_not_me").click(function(e) {
_i_("3dab:57ab6920");
var i, n, r = t(e.target).attr("href");
r && (i = '<form method="POST" action="' + r + '" ><input type="hidden" name="logout" value="1" /></form>', n = t(i), n.prepend('<input type="hidden" name="bhc_csrf_token" value="' + booking.env.b_csrf_token + '">'), e.preventDefault(), t("body").append(n), n.submit()), _r_();
}), this.$userAccessMenu.on("click", "[data-dismiss]", function() {
_i_("3dab:feb5c396"), r(i.$userAccessMenu), _r_();
}), this.$userAccessMenu.delegate(".user_access_form", "submit", function(e, n) {
if (_i_("3dab:7dd01cb5"), i.$parentForm = t(this), i.$submitedForm = t(this), i.$parentFormWrapper = t(this).parents(".form-section"), !i._validateForm(n)) return _r_(!1);
if (i.userNameIsPhone && (i.fe_enable_login_with_phone_number && i.$parentForm.hasClass("js-user-access-form--signin") || i.fe_enable_signup_with_phone_number && i.$parentForm.hasClass("js-user-access-form--signup"))) t(".js-suppress_refresh").val(1), t(".js-no_login_after_signup").val(1), t(".js-no_redirect").val(1), t(".js-username_is_phone").val(1), booking.phoneNumberLogin.setPassword(t("input[name=password]", i.$parentFormWrapper).val()), t(".form-loading", i.$parentFormWrapper).show(); else if (i.userNameIsPhone || (t(".js-suppress_refresh").val(0), t(".js-no_login_after_signup").val(0), t(".js-username_is_phone").val(0)), t(".form-loading", i.$parentFormWrapper).show(), t(this).trigger("submit_pb_mybooking_cant_find"), t(this).hasClass("form-secondary-login") && "msie" === B.env.b_browser && B.env.b_browser_version < 9) {
var r = "&" + t(this).serialize(), a = t(this).attr("action"), o = a + r;
location.href = o;
} else booking.eventEmitter.trigger("user-acess-menu:valid-submit-start", i);
_r_();
}), t("#login_redesign").click(function() {
_i_("3dab:30ef4f70"), t(".bs2_inline_signin_box").toggle(), B.eventEmitter.trigger("user-access-menu:toggle"), _r_();
}), this._initPassStrength(), "https:" === location.protocol && booking.env.b_is_app && t(".user_access_form").each(function() {
_i_("3dab:5bc083e3");
var e = t(this), i = e.attr("action");
-1 !== i.indexOf("protocol=http") && -1 === i.indexOf("protocol=https") ? (i = i.replace("protocol=http", "protocol=https_www"), e.attr("action", i)) :-1 !== i.indexOf("protocol=https") && (i = i.replace("protocol=https", "protocol=https_www"), e.attr("action", i)), _r_();
}), _r_();
},
_initPassStrength:function(e) {
_i_("3dab:76aac521");
var i, n, r = this;
e || (e = ".password_strength"), n = t(t(e).attr("data-wrapper")), n = n.length ? n :this.$userAccessMenu, n.delegate(e, "keyup", function() {
_i_("3dab:34807c07");
var e = t(this), n = e.val();
i && clearTimeout(i), i = setTimeout(function() {
_i_("3dab:ff1632c0"), r._calculatePasswordStrength(e, n), booking.eventEmitter && B.eventEmitter.trigger("passStrength"), _r_();
}, 400), _r_();
}), _r_();
},
_validations:{
email:function(e) {
_i_("3dab:1cb768ab");
var t = e.indexOf("@"), i = e.lastIndexOf(".");
return _r_(t > 0 && i > t);
},
emailOrPhone:function(e) {
_i_("3dab:4f28b9bb");
var t = this.email(e), i = this.phone(e);
return _r_(t || i);
},
phone:function(e) {
return _i_("3dab:67c7be8e"), _r_(e.match(/1[3-9]\d{9}$/g));
},
phoneNo170:function(e) {
return _i_("3dab:a8a8ca1e"), _r_(!(e.match(/^(170|171)/g) && this.phone(e)));
}
},
fe_enable_login_with_phone_number:B.env.fe_enable_login_with_phone_number,
fe_enable_signup_with_phone_number:B.env.fe_enable_signup_with_phone_number,
fe_run_email_validation:0 === parseInt(B.env.auth_level, 10),
_validateForm:function(i) {
if (_i_("3dab:220d6242"), !this.$parentForm.length) return _r_(1);
var n = !0, r = e.error_sign_up_password_email_combo_01, a = this;
return t("input", this.$parentForm).each(function() {
_i_("3dab:057dbe08");
var e, i, o, _, s = t(this), d = s.attr("data-validation"), c = s.val();
if (d) {
d = d.split("|");
for (var l = 0, u = d.length; u > l && n; l++) e = d[l].split(/\{/), i = e[0], "required" !== i || c ? "numeric_with_dots" === i || "numeric" === i ? ("numeric_with_dots" === i && (c = c.replace(/\./g, ""), s.val(c)), /^\d+$/g.test(c) || (n = !1)) :/min_length\([0-9]+\)/.test(i) ? (o = i.split("(")[1], o = o.slice(0, -1), c.length < o && (n = !1)) :/required_match\([a-zA-Z_]+\)/.test(i) && (_ = i.split("(")[1], _ = _.slice(0, -1), t(this).val() !== t("#" + _).val() && (n = !1)) :n = !1, a.fe_enable_login_with_phone_number && ("email-or-phone" === i && (n = a._validations.emailOrPhone(c), a.userNameIsPhone = a._validations.phone(c), a.userNameIsPhone && booking.phoneNumberLogin.setPhone(c)), "phone" === i && (n = a._validations.phone(c), a.userNameIsPhone = a._validations.phone(c), a.userNameIsPhone && booking.phoneNumberLogin.setPhone(c)), "phoneNo170" === i && (n = a._validations.phoneNo170(c))), a.fe_run_email_validation && "email" === i && (n = a._validations.email(c)), e[1] && (r = e[1].slice(0, -1));
if (!n) return _r_(!1);
}
_r_();
}), n ? _r_(!0) :(t(".alert-error", this.$parentFormWrapper).html(r).show(), booking.eventEmitter.trigger("form-error", this.$parentFormWrapper), i && this.api.requestFailed(i), _r_(!1));
},
_calculatePasswordStrength:function(i, n) {
if (_i_("3dab:aa68c77f"), "undefined" == typeof n || "undefined" == typeof n.length) return _r_();
for (var r, a, o = n.length, _ = parseInt(o / 2.5, 10), s = "!@#$%^&*(){}[];:'\"\\|,.<>/?+=-_", d = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", c = 0, l = !1, u = 0, f = 0, h = i.attr("data-wrapper") ? i.parents(i.attr("data-wrapper")) :i.parents(".user_access_form"), b = t(".user_access_password_strength", h).find(".pass_strength_step").width(), p = t(".user_access_password_strength", h).find(".pass_strength_progress"), g = 0; o > g; g++) isNaN(n.charAt(g)) ? l = !0 :c += 1, s.indexOf(n.charAt(g)) > -1 && (u += 2), d.indexOf(n.charAt(g)) > -1 && (f += 1);
u > 4 && (u = 4), c > 2 && (c = 2), f > 2 && (f = 2), l && (_ += c), _ += u, _ += f, _ > 10 ? _ = 10 :0 === _ && (_ = 1), 8 > o ? (p.addClass("pass_strength_invalid"), _ > 3 && (_ = 3), a = 0) :(p.removeClass("pass_strength_invalid"), a = parseInt(_ / 2, 10) + 1), a = a > 5 ? 5 :a, r = b * _, p.animate({
width:r + "px"
}), e.b_password_strength_msg && t(".pass_strength_text", h).text(e.b_password_strength_msg[a]), _r_();
},
_displayErrorMsg:function(e) {
if (_i_("3dab:ad0346bb"), !e || !e.msg) return _r_();
var n, r, a;
if (e.parent && (r = t(e.parent)), n = e.target ? t(e.target, r) :t(".alert-error", r), i.$parentForm.length && (i.$parentForm.hasClass("js-user-access-form--signin") || i.$parentForm.hasClass("js-user-access-form--signup")) && B.et.track("OTfdASFMRcUJRIBWVUZDaORe")) {
var o = '<span class="alert-error-icon" aria-hidden="true">&#45339;</span> ' + e.msg;
n.html(o).addClass("alert-displayed");
} else n.html(e.msg).addClass("alert-displayed");
t(".form-loading, #page_login_loading").hide(), booking.env.is_genius_onboarding && (a = t("#slide1").height(), t("#slides").animate({
height:a
})), _r_();
},
_resetErrors:function(e) {
if (_i_("3dab:1aad5e0b"), !e || !e.msg) return _r_();
var i, n;
e.parent && (n = t(e.parent)), i = e.target ? t(e.target, n) :t(".alert-error", n), i.removeClass("alert-displayed"), _r_();
},
_addSubmitHook:function(e, t, i) {
_i_("3dab:5450f9e8");
var n = i ? this.globalSubmitHooks :this.submitHooks;
if (!t || !e) return _r_();
n[e] = t, _r_();
},
_removeSubmitHook:function(e, t) {
_i_("3dab:fcb9960d");
var n = t ? this.globalSubmitHooks :this.submitHooks;
if (!i) return _r_();
delete n[e], _r_();
},
_promtUserForPhoneVerification:function() {
_i_("3dab:7a2c27de"), booking.authNextStepSMS && booking.authNextStepSMS.promtUserForPhoneVerification(this.$userAccessMenu, "verify"), _r_();
},
_promptForNextAuthStep:function(e) {
_i_("3dab:30fe0b4e");
var t = e && e.step, n = function(e) {
_i_("3dab:e11a207b");
var t = {
sms:i._promtUserForPhoneVerification.bind(i)
};
return _r_(t[e] || function() {});
}(t);
n(), _r_();
}
};
function n(e) {
_i_("3dab:2220bbce"), t(".form-section", e).addClass("form-hidden-section").removeClass("form-shown-section"), _r_();
}
function r(e) {
_i_("3dab:edaf7940"), n(e), t(".user_access_signin_menu").removeClass("form-hidden-section").addClass("form-shown-section"), _r_();
}
function a() {
return _i_("3dab:c7875864"), _r_(i.$submitedForm);
}
function o() {
return _i_("3dab:3360d2a9"), _r_(t(".js-user-access-form--signin", i.$userAccessMenu));
}
return _r_({
init:function() {
_i_("3dab:05670bbb"), i._init(), _r_();
},
api:i.api,
getSubmitedForm:a,
getSigninForm:o,
initPassStrength:function(e) {
_i_("3dab:51783810"), i._initPassStrength(e), _r_();
},
displayErrorMsg:i._displayErrorMsg,
resetErrors:i._resetErrors,
promptForNextAuthStep:i._promptForNextAuthStep
});
}(booking.env), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:5496b801");
var t = !1, i = !1, n = $("#current_language_foldout"), r = function(e) {
_i_("3dab:9dff5da7"), $(e).each(function() {
_i_("3dab:16a8d871");
var e = $(this).attr("data-lang"), t = booking.env.b_switch_language_url[e];
$(this).find("a").attr("href", t), _r_();
}), _r_();
}, a = function(e) {
_i_("3dab:bb114751"), $(e).each(function() {
_i_("3dab:7676cb6f");
var e = booking.env.b_this_url;
("genius" === booking.env.b_action || "guest" === booking.env.b_action) && (e = booking.env.b_this_url_without_lang);
var t = $(this).attr("data-currency"), i = e.indexOf("?") > -1 ? ";" :"?";
t += ";changed_currency=1";
var n = $(this).closest(".select_foldout_wrap").is(".select_foldout_wrap_top");
n && (t += ";top_currency=1"), $(this).attr("href", e + i + "selected_currency=" + t), _r_();
}), _r_();
}, o = function(e) {
_i_("3dab:0b81b15c");
var t = "loading_option";
e.delegate("a", "click", function(i) {
_i_("3dab:bba0b49e");
var n = $(this).parent();
if (n.hasClass("selected_language") || n.hasClass("selected_currency")) return i.preventDefault(), _r_();
if (n.hasClass(t) ? i.preventDefault() :e.find("." + t).removeClass(t), n.addClass(t), B.env.b_run_sr_ajax) {
var r = B.require("searchresults/events");
r.trigger(r.UI_NAVIGATE_TO, {
url:$(this).attr("href"),
fixUrl:!0,
reload:!0
}), i.preventDefault();
}
_r_();
}), _r_();
}, _ = function() {
_i_("3dab:ede9bdda"), t || $.get(booking.env.b_currency_url, function(e) {
_i_("3dab:95b0332c"), $("#current_currency").html(e), o($("#current_currency_foldout")), a($("#current_currency a")), t = !0, _r_();
}), _r_();
}, s = function() {
_i_("3dab:a28a1d66"), i || $.get(booking.env.b_languages_url, function(e) {
_i_("3dab:ad7ecb10"), n.length ? n.replaceWith(e) :$("#current_language").html(e), o(n), r($("#current_language li")), i = !0, _r_();
}), _r_();
};
function d() {
_i_("3dab:af1e2ab4");
var e = $("#current_language_foldout");
o(e), $(".uc_currency a.popover_trigger").click(function() {
_i_("3dab:a87e8764"), _(), _r_();
}), "zh" === B.env.b_lang && $(".zh .uc_language a.popover_trigger").click(function() {
_i_("3dab:583ec9a5"), s(), _r_();
}), _r_();
}
d(), _r_();
}), window.addEventListener("load", function() {
_i_("3dab:00ce48eb"), $(".wl_dates_trigger").click(function() {
_i_("3dab:e79c21ff"), booking.lightbox.show($("#wl_dates_modal"), {
customWrapperClassName:"wl_dates_modal_wrapper",
bOverflowVisible:!0,
hideCallBack:function() {
_i_("3dab:bc70f46d"), $(".alert-error").hide(), _r_();
}
}), _r_();
}), _r_();
}), B.when({
condition:B.env.b_run_2fa_suggestion__mysettings,
experiment:"aMYTDVMeMZNBFWKZSUTIPTNFLFVZUOfTJEPFWFQZHT"
}).run(function(e) {
_i_("3dab:f27cc7c0");
var t = e("jquery");
t("body").on("click", "[data-add-two-factor-authentication]", function() {
_i_("3dab:b98ae6d6");
var i = new (e("component/mysettings-highlight"))();
i.highlight({
fields:"2fa_enrollment",
fieldAttribute:"data-settings-item"
}), t("[data-detail-trigger]", '[data-button="mysettings_2fa_enrollment_button"]').trigger("click"), _r_();
}), _r_();
}), B.define("profile/profile-menu/profile-menu", function(e, t, i) {
"use strict";
_i_("3dab:535b12a7"), function() {
_i_("3dab:caafb172");
var t = e("jquery"), n = "[data-command=show-profile-menu]", r = e("et"), a = e("ga-tracker"), o = "www" === B.env.b_site_type && B.require("trap-focus"), _ = !1, s = !1;
i.exports = {
_dropdown:null,
init:function() {
_i_("3dab:efd415fb");
var e = this, i = "undefined" != typeof t && "undefined" != typeof t.fly && "undefined" != typeof t.fly.dropdown;
i && t.fly.dropdown.extend({
init:function() {
_i_("3dab:d69bc2d1"), e._dropdown = this, this.bind(this.events.show, e.onshow.bind(e));
var t = booking.jstmpl("profile_menu_extra_class");
t && "__no_op__" !== t.name ? this.options.extraClass += " " + t.render(booking.env.profile_menu) :this.options.extraClass += " g-hidden", _r_();
}
}).delegate(n, {
extraClass:"fly-dropdown--profile-menu",
position:booking.env.rtl ? "bottom left" :"bottom right",
content:function() {
_i_("3dab:f88d05f8");
var e = booking.jstmpl("profile_menu");
if ("center" === this.handle().data("menu-location") && (this.options.position = "bottom center"), !e || "__no_op__" === e.name) {
var i = (this.handle() || t()).eq(0).children("a[href]"), n = i && i.attr("href") || "";
return /\/mydashboard/.test(n) && (window.location.href = n), _r_("");
}
var r;
return r = "switch-accounts" == this.handle().data("menu-mode") ? e.render(Object.assign({}, booking.env.profile_menu, {
b_menu_mode:"switch-accounts"
})) :e.render(booking.env.profile_menu), _r_(t(r).loadComponents());
}
}), t(document).on("click", ".profile-menu__item--myreferrals .profile-menu__link", function() {
_i_("3dab:62e12540"), a.trackEvent(a.referralAdvocateTracker, "click", "myreferrals item in profile menu"), _r_();
}), t(document).on("click", ".profile_menu__item--travel-communities .profile-menu__link", function() {
_i_("3dab:a7c0741d"), a.trackEvent(a.communityTracker, "entry-point-button-click", "menu"), _r_();
}), t(document).on("mouseenter", "#current_account", function() {
_i_("3dab:6bfb1fd2"), _ = !0, _r_();
}), t(document).on("mouseleave", "#current_account", function() {
_i_("3dab:a36d0c64"), _ = !1, _r_();
}), _r_();
},
onshow:function() {
_i_("3dab:9729118c"), "android" === booking.env.b_browser && this.forceReflow(), t(".milk_menu").hide(), t(".b_recentlyviewed").length && t(".b_recentlyviewed").removeClass("rv-content-visible"), t(".uc_genius_tooltip").remove(), !_ && o && setTimeout(function() {
_i_("3dab:23cc2e87");
var e = this._dropdown && this._dropdown.root();
e && (o.trap(e[0]), s = !0), this.addListeners(), _r_();
}.bind(this), 200), t(".profile_menu__item--travel-communities").length && a.trackEvent(a.communityTracker, "entry-point-button-show", "menu"), "zh-cn" !== B.env.b_lang_for_url && B.env.b_user_auth_level_is_low_or_high && r.stage("BPHOUfTLKGBfRSJTSXeUMAae", 1), _r_();
},
hide:function() {
_i_("3dab:3bcd5c73"), this._dropdown && this._dropdown.hide(), s && o && (o.release(), s = !1), _r_();
},
addListeners:function() {
_i_("3dab:f9364865");
var e = this._dropdown && this._dropdown.root();
e && e.find(".js-profile-menu__close").on("click", this.hide.bind(this)), _r_();
},
forceReflow:function() {
_i_("3dab:0e7445d0"), setTimeout(function() {
_i_("3dab:81ed97c6");
var e = this._dropdown && this._dropdown.root();
e && e.hide().show(0), _r_();
}.bind(this), 0), _r_();
}
}, _r_();
}(), _r_();
}), function() {
_i_("3dab:2c667e61"), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:04c8562e"), B.require("profile/profile-menu/profile-menu").init(), _r_();
}), _r_();
}(), B.define("component/company/account-split/profile-switch-link", function(e, t, i) {
"use strict";
_i_("3dab:54084ea3");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("3dab:802c453f"), this.$el.on("click", o.bind(this)), r.call(this), _r_();
}
});
function r() {
_i_("3dab:0e40cd79");
var e = a.call(this);
$("<input>").attr({
type:"hidden",
name:"sb_travel_purpose",
value:"business" === e.b_type ? "leisure" :"business"
}).appendTo(this.$el), _r_();
}
function a() {
_i_("3dab:1f8970ec");
var e, t, i, n = B.env.b_connected_user_accounts, r = this.$el.attr("data-user-id");
for (e = 0, t = n.length; t > e; ++e) n[e].b_user_id !== r && (i = n[e]);
return _r_(i);
}
function o() {
_i_("3dab:6128c3f0");
var e = a.call(this), t = this.$el.attr("data-href"), i = this.$el.attr("data-redirect-url-business"), n = this.$el.attr("data-redirect-url-leisure"), r = $("<form>", {
action:t,
method:"POST"
});
$("<input>").attr({
type:"hidden",
name:"redirect_url",
value:"business" === e.b_type ? i :n
}).appendTo(r), $("<input>").attr({
type:"hidden",
name:"switch_to_user_id",
value:e.b_user_id
}).appendTo(r), $("<input>").attr({
type:"hidden",
name:"bhc_csrf_token",
value:B.env.b_csrf_token
}).appendTo(r), $("<input>").attr({
type:"hidden",
name:"bhc_csrf_token_check",
value:1
}).appendTo(r), r.appendTo("body").submit(), _r_();
}
_r_();
}), function(e) {
_i_("3dab:fe0c7fd2");
var t = e.require("jquery"), i = null, n = "show_non_age_message", r = "searchresults" === e.env.b_action && e.env.fe_sr_horizontal_sb;
function a() {
return _i_("3dab:82ddb8c6"), _r_(new RegExp(n + "=1").test(location.href));
}
function o() {
_i_("3dab:bb8d7dde"), e.when({
action:"searchresults"
}).run(function(n) {
_i_("3dab:e2527d56");
function a() {
_i_("3dab:8581d04e"), i && i.hide(), _r_();
}
t('[name="group_children"]').on("change", a), e.eventEmitter.bind("CALENDAR:opened", a), r && t("#xp__guests__toggle").on("click", a), _r_();
}), _r_();
}
function _() {
_i_("3dab:0547bdd9");
var n = 200, a = e.env.rtl ? "left" :"right", o = "searchbox_children_age_default_12_dropdown", _ = ".b-children-ages-configurator, .sb-group__children__field";
r && (a = "bottom", _ = ".b-children-ages-configurator, #xp__guests__toggle"), i && i.hide(), setTimeout(function() {
if (_i_("3dab:7e606ba1"), 0 === t(".b-children-ages-configurator, .sb-group__children__field").length) return _r_();
i = t.fly.dropdown.extend({
defaults:{
position:a,
content:function() {
return _i_("3dab:74ecd5b4"), _r_(e.jstmpl("searchbox_children_ages_default_12_tooltip").render({}));
},
extraClass:o
},
actions:{
click:function(e) {
_i_("3dab:b76eb00b"), t(e.target).is("select") && this.hide(), _r_();
}
},
_autohide:function() {},
init:function() {
_i_("3dab:58af277b"), this.bind(this.events.show, function() {
_i_("3dab:96e1c342"), t("." + o).delegate(".fly-dropdown-close", "click", function(e) {
_i_("3dab:175f8690"), i.hide(), _r_();
}), _r_();
}), _r_();
}
}).create(_), i.show(), _r_();
}, n), _r_();
}
e.when({
condition:a(),
events:"load",
action:"searchresults"
}).run(function(e) {
_i_("3dab:eb1e5e60"), _(), _r_();
}), e.when({
events:"load",
action:[ "index", "hotel", "searchresults", "continent", "country", "region", "city", "district", "landmark", "airport", "reviews_region", "reviews_city", "genius", "mydashboard" ]
}).run(function(e) {
_i_("3dab:9750a0de");
var i = t("#frm"), r = i.find("[name=group_children]"), a = t('<input type="hidden" name="' + n + '" value="1">');
i.on("submit", function(e) {
_i_("3dab:6f638811");
var t = i.find("[name=" + n + "]"), o = parseInt(r.val()), _ = i.find("[name=age]").find(":selected.sb_child_ages_empty_zero").length;
o && _ ? i.append(a) :t.remove(), _r_();
}), _r_();
}), e.when({
events:"load",
action:"searchresults"
}).run(function(e) {
_i_("3dab:46b440bf");
var t = e("searchresults/events");
t.on(t.DATA_ENVIRONMENT_UPDATED, function(e) {
_i_("3dab:324e935d"), a() && (o(), _()), _r_();
}), _r_();
}), o(), _r_();
}(booking), B.when({
events:"ready",
condition:$(".pincode_expired_error").length > 0
}).run(function() {
_i_("3dab:b50ec83b");
var e = $(".pincode_expired_error"), t = e.data("bn"), i = "<p>" + e.data("msg") + "</p>";
function n() {
_i_("3dab:bacbadda"), e.html(i).closest(".js-pincode-ondemand-error").css({
backgroundColor:"#CEE5C3",
color:"#2C5520",
fontWeight:"bold"
}), _r_();
}
function r() {
_i_("3dab:2c19676c");
var e = $(i);
e.hide(), $("body").append(e), B.require("lightbox").show(e, {
customWrapperClassName:"user-access-menu-lightbox user-access-menu-lightbox--user-center pincode_expired_error__resend_lightbox",
hideCallback:function() {
_i_("3dab:1bf95c71"), e.remove(), _r_();
}
}), _r_();
}
e.find(".pincode_expired_error__resend_email_link").on("click", function(e) {
_i_("3dab:838fd39d"), e.preventDefault(), $.ajax({
url:"/resend_confirmation_email",
type:"POST",
data:{
bn:t,
bhc_csrf_token:B.env.b_csrf_token
},
success:function() {
_i_("3dab:c9825986"), "mdot" === B.env.b_site_type ? n() :r(), _r_();
}
}), _r_();
}), _r_();
}), B.define("main/calendar2-init", function(e, t, i) {
"use strict";
_i_("3dab:7badd58c");
var n = e("jquery"), r = e("hijri-calendar"), a = B.env, o = !1;
function _() {
_i_("3dab:ad9faaab"), B.search.dates("checkin") || n("#homein").find(".calendarLink").trigger("show"), _r_();
}
function s(e, t) {
_i_("3dab:98714a11");
var i = t.search || B.search, r = i.dates("checkin"), a = i.dates("checkout"), o = i.dates(t.type), _ = r && a && "valid" === r.type && "valid" === a.type;
n.fn.calendar2("each", function(e) {
if (_i_("3dab:a491601a"), t.search && t.search !== e.search) return _r_();
if (e.type() === t.type && ("month" === o.type ? e.trigger("monthSelected", {
type:t.type,
value:o
}) :"valid" === o.type && e.trigger("dateSelected", {
type:t.type,
value:o
})), _ && ("checkin" === e.type() || "checkout" === e.type())) {
e.trigger("rangeSelected", {
type:t.type,
startValue:r,
endValue:a
});
var i = a.valueOf() - r.valueOf();
M(e, r, a, i);
}
_r_();
}), _r_();
}
function d(e, t) {
_i_("3dab:a70e781c"), n.fn.calendar2("each", function(e) {
_i_("3dab:0d7bc180"), e.adjustHeight(!0), t.id !== e.id() && e.trigger("hide"), ("calendar_6" == t.id || "calendar_7" == t.id) && (r.disable(), n(".hijri-toggle-2").removeClass("active")), _r_();
}), _r_();
}
function c() {
_i_("3dab:9e95e903"), n.fn.calendar2("hide"), _r_();
}
function l() {
_i_("3dab:799d5b7f");
var e = new Date();
return u(e) && (B.et.track("AEJPAaNCWLWdeFIPeRWJSC") && e.setDate(e.getDate() - 1), "index" === B.env.b_action && B.et.stage("AEJPAaNCWLWdeFIPeRWJSC", 1), "searchresults" === B.env.b_action && B.et.stage("AEJPAaNCWLWdeFIPeRWJSC", 2), "hotel" === B.env.b_action && B.et.stage("AEJPAaNCWLWdeFIPeRWJSC", 3), [ "city", "district", "landmark", "airport", "country", "region", "continent", "place" ].indexOf(B.env.b_action) > -1 && B.et.stage("AEJPAaNCWLWdeFIPeRWJSC", 4), B.env.b_is_landing && B.et.stage("AEJPAaNCWLWdeFIPeRWJSC", 5)), _r_(e);
}
function u(e) {
return _i_("3dab:7c9619bf"), _r_(e.getHours() < 2);
}
function f() {
_i_("3dab:9dd62850");
var e = b();
return e.setDate(e.getDate() - 1), _r_(e);
}
function h() {
_i_("3dab:bf43ff9e");
var e = B.calendar2.today();
return u(new Date()) && B.et.track("AEJPAaNCWLWdeFIPeRWJSC") && e.setDate(e.getDate() - 1), e.setDate(e.getDate() + 1), _r_(e);
}
function b() {
_i_("3dab:618e1af6");
var e = B.calendar2.today();
return B.env.b_search_max_months ? (e.setMonth(e.getMonth() + B.env.b_search_max_months), e.setDate(0)) :e = new Date(e.getFullYear() + 1, e.getMonth() + 1, 0), _r_(e);
}
function p(e, t, i) {
_i_("3dab:d2cfc275");
var n = this.search || B.search;
if (!e && !t) return _r_();
var r, a, o = e.type();
n.dates(o, {
year:t.getYear(),
month:t.getMonth(),
date:t.getDate()
}), r = n.dates("checkin"), a = n.dates("checkout"), "valid" === r.type && ("invalid" === a.type ? n.dates("checkout", n.dates("checkin").addDays(1)) :r > a && n.dates("checkout", n.dates("checkin").addDays(1))), "valid" === a.type && "invalid" === r.type && n.dates("checkin", n.dates("checkout").addDays(-1)), e && e.$element && e.$element.parents(".b-searchbox").length > 0 && ("checkin" === o ? B.Search.tracker.trackEvent(B.Search.TrackingEvents.CHECKIN_DATEPICKER) :"checkout" === o && B.Search.tracker.trackEvent(B.Search.TrackingEvents.CHECKOUT_DATEPICKER)), e.$input.focus(), _r_();
}
function g(e, t) {
_i_("3dab:8d8da42f"), 13 !== t.which || e.shown() || (n("#frm").submit(), t.preventDefault()), _r_();
}
function m(e) {
_i_("3dab:b682d8d9");
var t, i, a = e.search || B.search, o = a.dates("checkout"), _ = a.dates("checkin"), s = _ && o && "valid" === _.type && "valid" === o.type, d = e.type();
"checkin" === d ? "valid" === _.type ? (t = "dateSelected", i = _) :"month" === _.type && (t = "monthSelected", i = _) :"checkout" === d && ("valid" === o.type ? (t = "dateSelected", i = o) :"month" === o.type && (t = "monthSelected", i = o)), t && i && e.trigger(t, {
type:d,
value:i
}), s && e.trigger("rangeSelected", {
startValue:_,
endValue:o
}), M(e, _, o, o.valueOf() - _.valueOf()), r.available() && (n(".c2-wrapper-s-" + d + " .c2-calendar-header").contents().filter(function() {
return _i_("3dab:f50be20b"), _r_(3 === this.nodeType);
}).replaceWith(T(d)), r.enabled() && e.addState("hijri-enabled"), e.$calendarElement.delegate(".c2-calendar-header_hijri-toggle", "click", function(t) {
_i_("3dab:432c1942"), t.preventDefault(), r.enabled() ? r.disable() :r.enable(), e.adjustHeight(!0), _r_();
})), _r_();
}
function v(e, t) {
_i_("3dab:c55d0ea3");
var i = "";
if (B.env.b_year_months[e + "-" + (t + 1)] && (i = B.env.b_year_months[e + "-" + (t + 1)].name), r.available()) {
var n = r.convert({
year:e,
month:t,
day:1
}), a = r.convert({
year:e,
month:t,
day:B.calendar2.DAYS_IN_MONTH[t]
});
i += B.jstmpl("hijri_month").render({
monthTitleAddition:y(n, a)
});
}
return _r_(i);
}
function y(e, t) {
return _i_("3dab:ba0761a3"), _r_(e.year && t.year && e.year !== t.year ? B.jstmpl.translations("ar_islamic_calendar_two_years", null, {
first_hijri_month:B.jstmpl.translations(e.hijri_month_tag),
second_hijri_month:B.jstmpl.translations(t.hijri_month_tag),
first_year:e.hijri_year,
second_year:t.hijri_year
}) :e.hijri_month_tag && t.hijri_month_tag && e.hijri_month_tag !== t.hijri_month_tag ? B.jstmpl.translations("ar_islamic_calendar_two_months", null, {
first_hijri_month:B.jstmpl.translations(e.hijri_month_tag),
second_hijri_month:B.jstmpl.translations(t.hijri_month_tag),
year:e.hijri_year
}) :B.jstmpl.translations("ar_islamic_calendar_no_month_change", null, {
hijri_month:B.jstmpl.translations(e.hijri_month_tag),
year:e.hijri_year
}));
}
var w = "hover";
function k(e, t) {
_i_("3dab:dfe1373a");
var i, n, r, a, o, _ = this.search || B.search;
if (t && t.hasState("disabled")) return _r_();
if (window.clearTimeout(e.rangeHighlightTimeout), "checkin" === e.type() ? (i = t.id(), r = B.Search.createDate({
year:t.year_,
month:t.month_,
date:t.date_
}), a = _.dates("checkout"), n = B.calendar2.dayId(a.year, a.month, a.date)) :"checkout" === e.type() && (r = _.dates("checkin"), i = B.calendar2.dayId(r.year, r.month, r.date), a = B.Search.createDate({
year:t.year_,
month:t.month_,
date:t.date_
}), n = t.id()), r && "valid" === r.type && a && "valid" === a.type && (o = a.valueOf() - r.valueOf(), o > 0)) {
if (e.unHighlightRange(w), e.selectedRange_) for (var s = 0, d = e.selectedRange_.length; d > s; s++) e.days[e.selectedRange_[s]].removeState("first-in-range").removeState("in-range").removeState("last-in-range");
e.highlightRange(i, n, {
name:w
}), M(e, r, a, o);
}
_r_();
}
function M(e, t, i, n) {
_i_("3dab:10d2b63a");
var a = "";
t && i && (a = x(t, i, n), r.available() && (a += B.jstmpl("hijri_footer_warning").render())), "" !== a && e.$element.find(".c2-calendar-footer-dynamic").html(a), _r_();
}
function x(e, t, i) {
if (_i_("3dab:806646cf"), i > 0 && e && "valid" === e.type && t && "valid" === t.type) {
var n = "short_date_with_weekday_without_year", r = "short_date_with_weekday";
return _r_(B.jstmpl("length_of_stay_detailed").render({
b_interval:i,
b_checkin_date_formatted:B.formatter.date(e.toString(), n),
b_checkout_date_formatted:B.formatter.date(t.toString(), r)
}));
}
return _r_("");
}
function C(e, t) {
_i_("3dab:4a20f55b");
var i;
t === w && (i = e.getSelectedDay(), i && i.removeState("selected")), _r_();
}
function E(e, t) {
_i_("3dab:5dc8b7ed");
var i = this.search || B.search;
e.rangeHighlightTimeout = window.setTimeout(function() {
_i_("3dab:6ec3aeea"), e.rangeHighlightTimeout && (e.unHighlightRange(w), e.selectedRange_ && e.selectedRange_.length && e.createRange_(e.selectedRange_, "selected"), M(e, i.dates("checkin"), i.dates("checkout"), i.dates("checkout").valueOf() - i.dates("checkin").valueOf())), _r_();
}, 100), _r_();
}
function T(e) {
_i_("3dab:31e7678c");
var t = "";
return r.available() && (t += B.jstmpl("hijri_toggle").render({
type:e || this.type(),
hijri_visible:!1
})), _r_(t);
}
function S(e) {
_i_("3dab:10229ad2"), n.fn.calendar2("each", function(e) {
_i_("3dab:1b845876"), e.addState("hijri-enabled"), _r_();
}), _r_();
}
function A(e) {
_i_("3dab:b9e22d98"), n.fn.calendar2("each", function(e) {
_i_("3dab:97d3b1e2"), e.removeState("hijri-enabled"), _r_();
}), _r_();
}
function N() {
_i_("3dab:553c2f90");
var e = a.sunday_first, t = a.b_simple_weekdays.slice(0), i = a.b_short_months;
e && t.unshift(t.pop());
var o = B.calendar2.generalOptions = {
dayNames:t,
sundayFirst:e,
monthNames:i,
direction:a.rtl ? "rtl" :"ltr",
lazy:!0,
closeButton:!0,
onDateSelected:p,
onLazyInitiated:m,
monthTitle:v,
onKeyDown:g,
onRangeHighlighted:C,
onDayMouseEnter:k,
onDayMouseLeave:E,
arrow:!0,
search:B.search
};
B.env.b_sb_prices && (o.pricePlaceHolder = !0), B.env.fe_sb_rentalcars && (o.showStartEndTimes = !0);
var _ = B.calendar2.checkinOptions = n.extend({}, o, {
type:"checkin",
defaultDate:B.search.dates("checkin"),
startDate:l(),
endDate:f(),
title:r.available() ? T :a.transl_checkin_title
}), s = B.calendar2.checkoutOptions = n.extend({}, o, {
type:"checkout",
defaultDate:B.search.dates("checkout"),
startDate:h(),
endDate:b(),
title:r.available() ? T :a.transl_checkout_title
});
return _r_({
checkinOptions:_,
checkoutOptions:s
});
}
function D() {
if (_i_("3dab:5ed3b528"), o) return _r_();
o = !0, B.eventEmitter.bind("SEARCH:destination_selected", _), B.eventEmitter.bind("SEARCH:date_changed", s), B.eventEmitter.bind("SEARCH:month_changed", s), B.eventEmitter.bind("CALENDAR:opened", d), B.eventEmitter.bind("AUTOCOMPLETE:opened", c), B.eventEmitter.bind("CALENDAR:hijri_enabled", S), B.eventEmitter.bind("CALENDAR:hijri_disabled", A), B.maps && "function" == typeof B.maps.on && B.maps.on("click-open", c), _r_();
}
function I() {
if (_i_("3dab:07811bee"), !B.env.b_calendar2) return _r_();
if (!B.calendar2 || B.env.b_is_tdot_traffic && "book" === B.env.b_action && 2 === B.env.b_book_stage) return _r_();
var e = n(".calendarLink, .b-datepicker");
if (0 === e.length) return _r_();
var t = N();
e.each(function(e, i) {
_i_("3dab:cc5102ef");
var r = n(i), a = r.attr("rel") || r.data("type") || r.data("calendar2-type"), o = {};
r.unbind("click.calendar"), r.unbind("click.calendar2"), r.data("calendar2-align-right") && (o.alignToRight = 1), "checkin_year_month" === a || "checkin" === a ? r.calendar2(n.extend({}, t.checkinOptions, o)) :("checkout_year_month" === a || "checkout" === a) && r.calendar2(n.extend({}, t.checkoutOptions, o)), _r_();
}), D(), B.eventEmitter.trigger("CALENDARS:initialized"), _r_();
}
function j(e, t) {
if (_i_("3dab:d89ee145"), !B.env.b_calendar2) return _r_();
if (!B.calendar2 || B.env.b_is_tdot_traffic && "book" === B.env.b_action && 2 === B.env.b_book_stage) return _r_();
D();
var i = N();
e.calendar2(i.checkinOptions), t.calendar2(i.checkoutOptions), _r_();
}
i.exports = {
init:I,
initCalendars:j
}, _r_();
}), B.when({
events:"ready"
}).require([ "main/calendar2-init" ], function(e) {
_i_("3dab:361082aa"), e.init(), _r_();
}), function() {
"use strict";
_i_("3dab:ca4adbf6");
var e, t = new Date().getTime(), i = B.require("ga-tracker"), n = B.require("jquery"), r = {
beta:!1,
mouseenterFlag:!1
}, a = void 0, o = [], _ = [], s = [ {
name:"fast-click",
type:"mouseup",
browsers:[ "chrome", "opera", "safari" ],
match:{
previous:{
type:"mousedown",
timeDiff:5,
matchElement:!0
},
isInputOrLink:!0
}
}, {
name:"fast-click-no-dblclick",
type:"mouseup",
browsers:[ "firefox", "edge" ],
match:{
previous:{
type:"mousedown",
timeDiff:5,
matchElement:!0
},
isInputOrLink:!0
},
rejections:[ {
previous:{
type:"mouseup",
timeDiff:50,
matchElement:!0
}
} ]
}, {
name:"ghost-click",
type:"click",
browsers:[ "msie" ],
match:{
isInputOrLink:!0,
hasOriginalEvent:!0
},
rejections:[ {
previous:{
type:"click",
timeDiff:500,
targetSelector:"label"
}
}, {
previous:{
type:"keydown",
timeDiff:500
}
}, {
previous:{
type:"keyup",
timeDiff:500,
matchElement:!0
}
}, {
previous:{
type:"mouseup",
timeDiff:500,
matchElement:!0
}
} ]
} ].filter(function(e) {
return _i_("3dab:41755a6c"), _r_(e.browsers.indexOf(B.env.b_browser) > -1);
});
function d(e, t) {
_i_("3dab:65bcb82f");
function i(r) {
_i_("3dab:a0cd5737");
var a = o[r - 1];
return _r_(!(a && t.previous.type === a.type && t.previous.timeDiff > e.timeStamp - a.timeStamp) || t.previous.matchElement && a.target !== e.target || t.previous.targetSelector && !n(a.target).is(t.previous.targetSelector) ? a && t.previous.timeDiff > e.timeStamp - a.timeStamp ? i(r - 1) :null :a);
}
function r() {
return _i_("3dab:0bf083f0"), _r_(n(e.target).is("a, button, input") || n(e.target).closest("a, button").length);
}
return _r_((!t.previous || i(o.indexOf(e))) && (!t.isInputOrLink || r()) && (!t.hasOriginalEvent || !!e.originalEvent));
}
function c(e, t) {
return _i_("3dab:14897fab"), _r_(d(e, t.match) && (!t.rejections || t.rejections.every(function(t) {
return _i_("3dab:02ff47f4"), _r_(!d(e, t));
})));
}
function l(e) {
return _i_("3dab:7ae5a5bd"), _r_(s.filter(function(t) {
return _i_("3dab:1ffaf269"), _r_(t.type === e.type);
}));
}
function u(e) {
_i_("3dab:34a67e6f");
for (var t = []; e && e.nodeType == Node.ELEMENT_NODE; e = e.parentNode) {
var i = e.nodeName.toLowerCase(), r = "", a = e.getAttribute("id"), o = e.getAttribute("class"), _ = i;
a && (_ += a ? "#" + a :"", r = '@id="' + a + '"'), !a && o && o.length < 40 && (o = o.replace(/\s+/g, " ").replace(/\.+/g, ".").replace(/^\s+|\s+$/gm, "").replace("@", "\\@"), r += '@class="' + o + '"', _ += "." + o.split(" ").join("."));
var s = n(e.parentNode).children(_).index(e) + 1, d = i;
r.length > 0 && (d += "[" + r + "]"), d += "[" + s + "]", t.unshift(d);
}
return _r_(t.length ? "/" + t.join("/") :null);
}
n(document.body).on("keyup keydown mouseup mousedown click", function(r) {
if (_i_("3dab:c80cce8d"), e) return _r_();
o.push(r), o.length > 15 && o.shift(), l(r).filter(c.bind(this, r)).forEach(function(e) {
if (_i_("3dab:46f725e8"), !n.cookie("qr_is_sr")) {
var o = new Date();
n.cookie("qr_is_sr", e.name, {
path:"/",
domain:"booking.com",
expires:o.setHours(o.getHours() + 1)
});
}
_.forEach(function(t) {
_i_("3dab:1521507f"), (t.mouseenterFlag && r.target != a || !t.mouseenterFlag) && (t.callback({
pattern:e.name,
mouseenterOnDifferentElement:r.target != a
}), _.splice(_.indexOf(t), 1)), _r_();
});
var s = u(r.target), d = [ B.env.b_action, e.name, B.env.b_browser, s ].join("_"), c = new Date().getTime(), l = Math.ceil((c - t) / 1e3);
B.env.a11y_is_sr = !0, i.trackEvent("Accessibility", "Detection", d, l), _r_();
}), _r_();
}), n(window).on("focus", function(t) {
_i_("3dab:d1702692"), e = !0, window.setTimeout(function() {
_i_("3dab:f597ca65"), e = !1, _r_();
}, 100), _r_();
}), B.define("screen-reader-detector", function(e, t, i) {
_i_("3dab:ac8527f7"), i.exports = {
onDetect:function(e, t) {
_i_("3dab:7c0cbbd8"), B.env.a11y_is_sr || (B.env.a11y_is_sr = !1);
var i = n.extend({}, r, t);
if (i.beta) {
if (B.env.touch_os) return _r_();
n(document.body).on("mouseenter", "a, button, input, label, span, select", function(e) {
_i_("3dab:db099018");
var t = n(e.target), i = t.closest("a, button");
a = t.is("a, button, input") ? e.target :i.length ? i[0] :void 0, _r_();
});
}
var o = n.cookie("qr_is_sr");
o && !i.beta ? (e({
pattern:o,
mouseenterOnDifferentElemen:!1
}), B.env.a11y_is_sr = !0) :_.push({
callback:e,
mouseenterFlag:i.mouseenterFlag
}), _r_();
}
}, _r_();
}), _r_();
}(), B.define("screen-reader-detection/chromevox", function(e, t, i) {
_i_("3dab:b5ec82dd");
var n, r;
function a() {
_i_("3dab:7d2555f1"), _(o, 7, 100), _r_();
}
function o() {
if (_i_("3dab:d9e9f791"), "undefined" != typeof window.cvox && "undefined" != typeof window.cvox.Api && "function" == typeof window.cvox.Api.isChromeVoxActive && window.cvox.Api.isChromeVoxActive()) return n.trigger("detected_feature", r.features.CHROMEVOX), _r_(!0);
return _r_(!1);
}
function _(e, t, i) {
_i_("3dab:563b26de");
var n, r = e();
!r && t > 0 && (n = setTimeout(function() {
_i_("3dab:c2ec828e"), clearTimeout(n), _(e, --t, 2 * i), _r_();
}, i)), _r_();
}
i.exports = function(e, t) {
_i_("3dab:7e99b977"), n = e, r = t, a(), _r_();
}, _r_();
}), B.define("screen-reader-detection/mousepos", function(e, t, i) {
_i_("3dab:65feb62f");
var n, r, a = e("jquery"), o = [ "A", "BUTTON" ];
function _() {
_i_("3dab:e3e8fbcb");
var e = !1, t = {
x:-(1 / 0),
y:-(1 / 0)
};
document.body.addEventListener("keydown", function(t) {
_i_("3dab:3c800b03");
var i = 13 === t.keyCode || 32 === t.keyCode, n = o.indexOf(document.activeElement.tagName) >= 0;
i && n && (e = !0), _r_();
}, !0), document.body.addEventListener("mousemove", function(e) {
_i_("3dab:51194ebc"), t = {
x:e.clientX,
y:e.clientY
}, _r_();
}, !0), document.body.addEventListener("click", function(i) {
if (_i_("3dab:22ebd7a1"), !a(i.target).closest(o.join(",")).length) return _r_();
if (!i.isTrusted || e) return e = !1, _r_();
e = !1;
var _ = 100, d = Math.abs(t.x - i.clientX), c = Math.abs(t.y - i.clientY), l = _ > d + c;
e || l || !s(i) || n.trigger("detected_feature", r.features.MOUSEPOS), _r_();
}, !0), _r_();
}
function s(e) {
if (_i_("3dab:24f712ca"), "msie" === B.env.b_browser && e.clientX <= 0 && e.clientY <= 0) return _r_(!0);
if (0 === e.clientX && 0 === e.clientY) return _r_(!0);
var t = e.target, i = t.getBoundingClientRect(), n = {
x:i.left + i.width / 2,
y:i.top + i.height / 2
}, r = {
x:Math.round(Math.abs(n.x - e.clientX)),
y:Math.round(Math.abs(n.y - e.clientY))
};
return _r_(0 === r.x && 0 === r.x);
}
i.exports = function(e, t) {
_i_("3dab:46531bf8"), n = e, r = t, _(), _r_();
}, _r_();
}), B.define("screen-reader-detection/fast-click", function(e, t, i) {
_i_("3dab:545372e6");
var n, r, a = e("jquery"), o = [], _ = [ {
name:"fast-click",
type:"mouseup",
browsers:[ "chrome", "opera", "safari" ],
match:{
previous:{
type:"mousedown",
timeDiff:5,
matchElement:!0
}
}
}, {
name:"fast-click-no-dblclick",
type:"mouseup",
browsers:[ "firefox", "edge" ],
match:{
previous:{
type:"mousedown",
timeDiff:5,
matchElement:!0
}
},
rejections:[ {
previous:{
type:"mouseup",
timeDiff:50,
matchElement:!0
}
} ]
}, {
name:"ghost-click",
type:"click",
browsers:[ "msie" ],
match:{
hasOriginalEvent:!0
},
rejections:[ {
previous:{
type:"click",
timeDiff:500,
targetSelector:"label"
}
}, {
previous:{
type:"keydown",
timeDiff:500
}
}, {
previous:{
type:"keyup",
timeDiff:500,
matchElement:!0
}
}, {
previous:{
type:"mouseup",
timeDiff:500,
matchElement:!0
}
} ]
} ];
function s(e, t) {
if (_i_("3dab:3a628bfd"), "undefined" == typeof t.previous && t.hasOriginalEvent && "undefined" != typeof e.originalEvent) return _r_(!0);
var i = o.some(function(i) {
_i_("3dab:b469a156");
try {
if (t.previous.type !== i.type) return _r_(!1);
if (t.previous.timeDiff < e.timeStamp - i.timeStamp) return _r_(!1);
if (t.previous.matchElement === !0 && i.target !== e.target) return _r_(!1);
if ("undefined" != typeof t.previous.targetSelector && !a(i.target).is(t.previous.targetSelector)) return _r_(!1);
return _r_(!0);
} catch (n) {
return _r_(!1);
}
_r_();
});
return _r_(i);
}
function d(e, t) {
if (_i_("3dab:39e9c3c5"), !t.rejections) return _r_(!0);
var i = t.rejections.some(function(t) {
return _i_("3dab:ffb5bdae"), _r_(s(e, t));
});
if (i === !1) return _r_(!0);
_r_();
}
function c() {
_i_("3dab:b2d46102"), a(document.body).on("keyup keydown mouseup mousedown click", function(e) {
if (_i_("3dab:8392c436"), B.env.touch_os) return _r_();
if (r.winLostFocus) return _r_();
if (!a(e.target).is("a, button, input, label") && 0 === a(e.target).closest("a, button").length) return _r_();
_.filter(function(e) {
return _i_("3dab:c64e7a20"), _r_(e.browsers.indexOf(B.env.b_browser) > -1);
}).filter(function(t) {
return _i_("3dab:5e1fb015"), _r_(t.type === e.type);
}).filter(function(t) {
return _i_("3dab:fdc1d14f"), _r_(s(e, t.match));
}).filter(function(t) {
return _i_("3dab:bec041a3"), _r_(d(e, t));
}).forEach(function(e) {
_i_("3dab:e539d768"), n.trigger("detected_feature", r.features.FAST_CLICK), _r_();
}), o.unshift(e), o.length > 15 && o.pop(), _r_();
}), _r_();
}
i.exports = function(e, t) {
_i_("3dab:46531bf81"), n = e, r = t, c(), _r_();
}, _r_();
}), B.define("screen-reader-detection/calendar", function(e, t, i) {
_i_("3dab:f45a5707");
var n, r, a = e("jquery");
function o() {
_i_("3dab:18e008a0"), a(".sb-searchbox").on("focus.srd", ".b-datepicker .sb-date-field__icon-btn", function() {
_i_("3dab:b04b36b2"), r.tabPressed ? n.trigger("detected_feature", r.features.FOCUS_CALENDAR_ICON) :n.trigger("detected_feature", r.features.FOCUS_CALENDAR_ICON_NO_TAB), _r_();
}), _r_();
}
i.exports = function(e, t) {
_i_("3dab:5eb73cb2"), n = e, r = t, a(".sb-searchbox").first().length && o(), _r_();
}, _r_();
}), B.define("screen-reader-detection/stmc", function(e, t, i) {
_i_("3dab:558807f3");
var n, r, a = e("jquery"), o = a(".a11y-skip-to-content");
function _() {
_i_("3dab:e58f801a"), o.on("focus.a11y_srd", s), _r_();
}
function s() {
_i_("3dab:c9541675");
var e;
if (r.winLostFocus) return r.winLostFocus = !1, _r_();
e = r.features.STMC_FOCUS, r.tabPressed || (e = r.features.STMC_FOCUS_NO_TAB), n.trigger("detected_feature", e), _r_();
}
i.exports = function(e, t) {
_i_("3dab:46531bf82"), n = e, r = t, _(), _r_();
}, _r_();
}), B.define("screen-reader-detection/buttons-sequence", function(e, t, i) {
_i_("3dab:e1eaecf1");
var n, r, a, o, _, s = e("jquery"), d = 0, c = 3, l = 0;
function u() {
if (_i_("3dab:b3f31b56"), a = s("button"), d = a.length, o = s("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex]:not(button), *[contenteditable]"), 2 > d) return _r_();
c > d && (c = d), a.on("focus", f), o.on("focus", h), _r_();
}
function f() {
if (_i_("3dab:2cfbf144"), _ && (s(this).next().is(_) || s(this).prev().is(_))) return _r_();
_ = s(this), l++, l >= c && (n.trigger("detected_feature", r.features.BUTTON_FOCUS_SEQUENCE), l = 0), _r_();
}
function h() {
_i_("3dab:d02de4fe"), l = 0, _r_();
}
i.exports = function(e, t) {
_i_("3dab:7e99b9771"), n = e, r = t, u(), _r_();
}, _r_();
}), B.define("screen-reader-detection", function(e, t, i) {
"use strict";
_i_("3dab:ad8b18b6");
var n = e("event-emitter"), r = e("jquery"), a = "11_srd", o = 8, _ = 0, s = {
DEBUG:{
id:9999,
score:9999,
cg:9999
},
IOS:{
id:1,
score:o,
cg:-1
},
CHROMEVOX:{
id:2,
score:o,
cg:1
},
FAST_CLICK:{
id:5,
score:3,
cg:-1
},
STMC_FOCUS:{
id:7,
score:5,
cg:-1
},
STMC_FOCUS_NO_TAB:{
id:8,
score:5,
cg:3
},
BUTTON_FOCUS_SEQUENCE:{
id:9,
score:3,
cg:4
},
FOCUS_CALENDAR_ICON:{
id:11,
score:5,
cg:-1
},
FOCUS_CALENDAR_ICON_NO_TAB:{
id:12,
score:3,
cg:5
},
MOUSEPOS:{
id:16,
score:3,
cg:-1
}
}, d = [], c = [], l = !1, u = !1, f = [], h = {
features:s,
winLostFocus:!1,
tabPressed:!1
}, b = new n();
B.env.feature_a11y_store_srd_data && "app" === B.env.b_server_role && r.post("/srd_data", {
features:"[]"
});
function p(e) {
_i_("3dab:0cf7ef52");
var t, i = !1;
if (!(e && e.id && e.cg && e.score)) return _r_();
for (t = 0; t < d.length; t++) if (d[t].id === e.id) {
i = !0;
break;
}
for (t = 0; t < f.length; t++) f[t](e);
if (i) return _r_();
d.push({
id:e.id
}), _ += e.score, _ >= o ? (M(!0), k()) :M(!1), _r_();
}
function g(e) {
_i_("3dab:6c9eca78");
for (var t in s) if (s[t].id === e) return _r_(s[t]);
return _r_(void 0);
}
function m() {
_i_("3dab:885b020d"), h.winLostFocus = !0, _r_();
}
function v() {
_i_("3dab:b3a98610");
var e = setTimeout(function() {
_i_("3dab:91b1fd97"), h.winLostFocus = !1, clearTimeout(e), _r_();
}, 100);
_r_();
}
function y(e) {
_i_("3dab:2e534d0f");
var t = e.which;
h.tabPressed = 9 === t, _r_();
}
function w() {
_i_("3dab:0dcee388");
for (var e in h.features) h.features[e].name = e.toLowerCase();
_r_();
}
function k() {
_i_("3dab:71422294");
for (var e = c.length; e >= 0; e--) "function" == typeof c[e] && (c[e](), c.splice(e, 1));
_r_();
}
function M(e) {
_i_("3dab:13de8445");
var t = new Date();
B.env.a11y_is_sr_v5 = !!e;
try {
var i = {
features:d,
score:_,
detected:B.env.a11y_is_sr_v5
};
e && !u && (i.action = B.env.b_action, "book" === i.action && (i.action = i.action + B.env.b_stage)), r.cookie(a, JSON.stringify(i), {
path:"/",
domain:"booking.com",
expires:t.setDate(t.getDate() + 7)
}), C(i);
} catch (n) {
B.reportError(n, "a11y_srd");
}
_r_();
}
function x() {
_i_("3dab:e2302a60");
try {
var e = JSON.parse(r.cookie(a)) || {};
d = e.features || [], d = d.map(function(e) {
return _i_("3dab:45c5d8ba"), _r_(g(e.id));
}).filter(function(e) {
return _i_("3dab:cbe285f7"), _r_(!!e);
}), d.length && (_ = d.reduce(function(e, t) {
return _i_("3dab:e5071716"), _r_(e + t.score);
}, 0)), u = e.action || !1, B.env.a11y_is_sr_v5 = _ >= o;
} catch (t) {
B.env.a11y_is_sr_v5 = !1, B.reportError(t, "a11y_srd");
}
_r_();
}
function C(e) {
if (_i_("3dab:310a5781"), !B.env.feature_a11y_store_srd_data || "app" !== B.env.b_server_role) return _r_();
e.features && (e.features = JSON.stringify(e.features.map(function(e) {
return _i_("3dab:227a25f8"), _r_({
id:e.id
});
}))), r.post("/srd_data", e), _r_();
}
function E() {
return _i_("3dab:5c74d08a"), _r_(B.env.a11y_is_sr_v5);
}
function T() {
_i_("3dab:7cef131f");
var t = "screen-reader-detection/";
x(), E() && (l = !0), w(), b.on("detected_feature", p), e(t + "mousepos")(b, h), e(t + "stmc")(b, h), e(t + "chromevox")(b, h), e(t + "calendar")(b, h), e(t + "buttons-sequence")(b, h), e(t + "fast-click")(b, h), r(window).on("blur.a11y_srd", m).on("focus.a11y_srd", v), r(document).on("keydown.a11y_srd", y), _r_();
}
try {
T();
} catch (S) {
B.reportError(S, "a11y_srd");
}
i.exports = {
onDetect:function(e) {
if (_i_("3dab:38fbcf5e"), "function" != typeof e) return _r_(this);
if (E()) return e(), _r_(this);
return c.push(e), _r_(this);
},
onFeatureDetect:function(e) {
return _i_("3dab:b3d17bfd"), "function" == typeof e && f.push(e), _r_(this);
},
getSubscribers:function() {
return _i_("3dab:d89dda23"), _r_(f);
},
getCurrentScore:function() {
return _i_("3dab:d058ec05"), _r_(_);
},
wasDetectedOnPageLoad:function() {
return _i_("3dab:1a1d8b74"), _r_(l);
},
getFirstSeenAction:function() {
return _i_("3dab:d9fc305c"), _r_(u);
}
}, _r_();
}), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:dd8a2933"), e("jquery");
var t = e("et"), i = e("screen-reader-detection"), n = {
OTfdASFVFYBMFSIJWe:{
options:{
events:"ready",
condition:"www" === B.env.b_site_type
},
callback:function() {
_i_("3dab:ea5ce6cd"), i.onDetect(function() {
_i_("3dab:ffcbb82f"), t.stage("OTfdASFVFYBMFSIJWe", 2), _r_();
}), _r_();
}
},
OTfdASFHBeTDLfMRRacCbZbEC:{
options:{
events:"ready",
condition:"www" === B.env.b_site_type && "book" === B.env.b_action
},
callback:function() {
_i_("3dab:fda46d70"), i.onDetect(function() {
_i_("3dab:3d5ab1f0"), t.stage("OTfdASFHBeTDLfMRRacCbZbEC", 1), _r_();
}), _r_();
}
},
OTfdASFYRTXSMZKAFSTRbAOdHRAMDeJMBTeNJJNRe:{
options:{
events:"ready",
condition:"www" === B.env.b_site_type
},
callback:function() {
_i_("3dab:43915cbd"), i.onDetect(function() {
_i_("3dab:e23d5f97"), t.stage("OTfdASFYRTXSMZKAFSTRbAOdHRAMDeJMBTeNJJNRe", 1), _r_();
}), _r_();
}
},
OTfdASFHaZFbEWDMPXLBAIXe:{
options:{
events:"ready",
condition:"www" === B.env.b_site_type
},
callback:function() {
_i_("3dab:a25f4f69"), i.onDetect(function() {
_i_("3dab:c0ecb2f2"), t.customGoal("OTfdASFHaZFbEWDMPXLBAIXe", 1), _r_();
}), _r_();
}
},
OTfdASFBPIabKeKeZQObdSVQZRO:{
options:{
events:"ready",
condition:"www" === B.env.b_site_type
}
},
OTfdASFZKZPHceNfRDccSfKLfdPLQLQZRO:{
options:{
events:"ready",
condition:"www" === B.env.b_site_type && "index" === B.env.b_action
},
callback:function() {
_i_("3dab:c654f1a6");
var e = "OTfdASFZKZPHceNfRDccSfKLfdPLQLQZRO", n = "#top-destinations-block";
t.on("view", n).stage(e, 1), i.onDetect(function() {
_i_("3dab:6d365134"), t.stage(e, 2), t.on("view", n).stage(e, 3), _r_();
}), _r_();
}
},
OTfdASFOLdaWOdRSOVLFCZSGbRFO:{
options:{
events:"ready",
condition:"www" === B.env.b_site_type && "searchresults" === B.env.b_action
}
},
OTfdASFOLJMXFSdYZdABYKe:{
options:{
events:"ready",
condition:"www" === B.env.b_site_type,
action:"searchresults"
},
callback:function() {
_i_("3dab:d2bd4e6c");
var n = "OTfdASFOLJMXFSdYZdABYKe", a = e("searchresults/events");
r(n)(), a.on(a.UI_SORTING_CHANGED, function() {
_i_("3dab:31471429"), t.stage(n, 2), i.onDetect(function() {
_i_("3dab:523b3ce8"), t.stage(n, 3), _r_();
}), _r_();
}), _r_();
}
}
};
function r(e) {
return _i_("3dab:7dba137b"), _r_(function() {
_i_("3dab:be227341"), i.onDetect(function() {
_i_("3dab:c58433ba"), t.stage(e, 1), _r_();
}), _r_();
});
}
for (var a in n) {
var o = "object" == typeof n[a].options ? n[a].options :{}, _ = "function" == typeof n[a].callback ? n[a].callback :r(a);
B.when(o).run(_);
}
_r_();
}), B.when({
events:"ready",
condition:B.env.is_user_center_bar
}).require([ "main/user-center-bar" ], function(e) {
"use strict";
_i_("3dab:a57a1d56");
var t = {
currency_selector:".js-uc-currency",
language_selector:".js-uc-language"
}, i = 27;
function n(t) {
if (_i_("3dab:51a7a268"), t.keyCode !== i) return _r_();
e.hideDropdowns(), window.removeEventListener("keyup", n), _r_();
}
B.eventEmitter.bind("uc_popover_showed", function(e, i) {
_i_("3dab:465c747a");
var r, a = t[i.id];
if (!a) return _r_();
if (r = $(a).find(".user_center_popover"), window.addEventListener("keyup", n), !r.length || !r.is(":visible")) return _r_();
r.focus(), _r_();
}), _r_();
}), function(e, t) {
_i_("3dab:98dbae68");
var i, n, r, a = 0;
function o() {
_i_("3dab:4fe6a3f6");
var r = e(document).scrollTop(), a = t.tools.dom.getBounds(i);
return a.top = n + r, a.bottom = n + a.height + r, _r_(a);
}
function _(_) {
if (_i_("3dab:2c65f721"), i || (i = e(".notice-wrap")), !i.length) return _r_();
n || (n = parseInt(i.css("top"), 10)), i.css({
transition:"0.3s top",
"-webkit-transition":"0.3s top"
});
var s = +new Date() + _.stayTime;
s > a && (a = s);
var d = n;
(function c(_) {
_i_("3dab:2a78ecd4");
var s = e(".displace_growl:visible"), l = o();
d = n, s.each(function() {
_i_("3dab:a8fb0438");
var e = t.tools.dom.getBounds(this), i = e.bottom;
t.tools.dom.boundsOverlap(e, l) && i >= d && (d = n + Math.max(0, i)), _r_();
});
var u = Math.max(n, d - e(document).scrollTop());
_ != u && i.css({
top:u + "px"
}), new Date() < a && (clearTimeout(r), r = setTimeout(c, 500, u)), _r_();
}).call(), _r_();
}
B.when({
events:"ready"
}).run(function(i) {
if (_i_("3dab:161570aa"), !window.navigator || !navigator.platform || -1 == navigator.platform.indexOf("Mac")) return _r_();
e(".uc_genius_tooltip").addClass("displace_growl"), t.eventEmitter.bind("growl:show", function(e, t) {
_i_("3dab:5d1cbeab"), _(t), _r_();
}), _r_();
}), _r_();
}(window.jQuery, window.booking), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:19992358");
var t = {
init:function() {
_i_("3dab:01b471e0");
var e, t, i = B.require("jquery"), n = this;
i('li.uc-notification[data-type="extension_announce"] a').click(function(r) {
_i_("3dab:c17f0df9"), r.preventDefault(), e = i("#promo-chrome-ext-container"), t = i("#promo-chrome-ext"), i(".user_center_popover").hide(), n.initLightbox(e, t), booking.lightbox.show(i("#promo-chrome-ext-container"), {
customWrapperClassName:"chrome-ext-container",
bAnimation:!0,
bCloseButton:!0
}), t.find(".cta-install-now a").click(function() {
_i_("3dab:ff511a77"), r.preventDefault(), chrome.webstore.install(booking.env.b_chrome_extension_install_url, function() {
_i_("3dab:90279453"), booking.lightbox.hide(), _r_();
}), _r_();
}), t.find(".cta-play-again a").click(function() {
_i_("3dab:4bc77920"), r.preventDefault(), n.resetAnimation(t), n.startAnimation(t), _r_();
}), _r_();
}), _r_();
},
initElse:function() {},
initLightbox:function(e, t) {
_i_("3dab:d860d515"), t.hide().removeClass("hidden").show(), _r_();
},
resetAnimation:function(e) {
_i_("3dab:84df2455"), e.find(".cel-header").hide().css({
width:"362px",
height:"72px",
left:"189px",
top:"242px"
}), e.find(".cel-badge").hide(), e.find(".step-info").hide(), e.find(".popup").hide(), e.find(".cel-input").hide(), e.find(".extension-usps li").hide(), e.find(".cta-install-now,.cta-play-again").hide(), _r_();
},
startAnimation:function(e) {
_i_("3dab:8c007ca9"), e.queue("promoAnim", function() {
_i_("3dab:38390348"), $(this).find(".cel-header").delay(100).fadeIn(1e3).delay(1e3).fadeOut(1e3), $(this).dequeue("promoAnim"), _r_();
}).delay(4500, "promoAnim"), e.queue("promoAnim", function() {
_i_("3dab:5057cd3a"), $(this).find(".step-1").fadeIn(500).delay(2e3).fadeOut(500), $(this).dequeue("promoAnim"), _r_();
}).delay(3500, "promoAnim"), e.queue("promoAnim", function() {
_i_("3dab:998b3e12"), $(this).find(".popup-step-1").css("opacity", 0).css("top", 55).slideDown(250).animate({
opacity:1,
top:"+=11"
}, {
queue:!1,
duration:250
}).delay(2e3).queue(function() {
_i_("3dab:f523ae99"), $(this).removeClass("part-1").addClass("part-2").delay(500).find(".cel-input__username").css({
width:0,
display:"block"
}).animate({
width:260
}, 1500), $(this).dequeue(), _r_();
}).delay(2e3).queue(function() {
_i_("3dab:788fc09f"), $(this).removeClass("part-2").addClass("part-3").delay(500).find(".cel-input__password").css({
width:0,
display:"block"
}).animate({
width:260
}, 1500), $(this).dequeue(), _r_();
}).delay(2e3).queue(function() {
_i_("3dab:ffd990c5"), $(this).fadeOut(500).dequeue(), _r_();
}), $(this).dequeue("promoAnim"), _r_();
}).delay(7e3, "promoAnim"), e.queue("promoAnim", function() {
_i_("3dab:459ebb91"), e.find(".cel-badge").fadeIn(250), e.find(".popup-step-2").css("opacity", 0).css("top", 55).slideDown(250).animate({
opacity:1,
top:"+=11"
}, {
queue:!1,
duration:250
}).delay(2e3).queue(function() {
_i_("3dab:475bddee"), e.find(".cel-badge").fadeOut(250), $(this).fadeOut(500).dequeue(), _r_();
}), $(this).dequeue("promoAnim"), _r_();
}).delay(2500, "promoAnim"), e.queue("promoAnim", function() {
_i_("3dab:a9322703"), $(this).find(".step-2").fadeIn(500).delay(2e3).fadeOut(500), $(this).dequeue("promoAnim"), _r_();
}).delay(3500, "promoAnim"), e.queue("promoAnim", function() {
_i_("3dab:6e7f5f83"), $(this).find(".popup-step-3").css("opacity", 0).css("top", 55).slideDown(250).animate({
opacity:1,
top:"+=11"
}, {
queue:!1,
duration:250
}).delay(2e3).queue(function() {
_i_("3dab:0b319bd9"), $(this).removeClass("part-1").addClass("part-2").dequeue(), _r_();
}).delay(2e3).queue(function() {
_i_("3dab:db6d3135"), $(this).removeClass("part-2").addClass("part-3").dequeue(), _r_();
}).delay(2e3).queue(function() {
_i_("3dab:ffd990c51"), $(this).fadeOut(500).dequeue(), _r_();
}), $(this).dequeue("promoAnim"), _r_();
}).delay(7e3, "promoAnim"), e.queue("promoAnim", function() {
_i_("3dab:e5c7b7b5"), $(this).find(".popup-step-4").css("opacity", 0).css("top", 55).slideDown(250).animate({
opacity:1,
top:"+=11"
}, {
queue:!1,
duration:250
}).delay(2e3).queue(function() {
_i_("3dab:0b319bd91"), $(this).removeClass("part-1").addClass("part-2").dequeue(), _r_();
}).delay(2e3).queue(function() {
_i_("3dab:db6d31351"), $(this).removeClass("part-2").addClass("part-3").dequeue(), _r_();
}).delay(2e3).queue(function() {
_i_("3dab:ffd990c52"), $(this).fadeOut(500).dequeue(), _r_();
}), $(this).dequeue("promoAnim"), _r_();
}).delay(7e3, "promoAnim"), e.queue("promoAnim", function() {
_i_("3dab:144e8e9d"), $(this).find(".step-3").fadeIn(500).delay(2e3).fadeOut(500), $(this).dequeue("promoAnim"), _r_();
}).delay(3500, "promoAnim"), e.queue("promoAnim", function() {
_i_("3dab:09d64f83"), e.find(".cel-badge").fadeIn(250), e.find(".popup-step-5").css("opacity", 0).css("top", 55).slideDown(250).animate({
opacity:1,
top:"+=11"
}, {
queue:!1,
duration:250
}).delay(3e3).queue(function() {
_i_("3dab:475bddee1"), e.find(".cel-badge").fadeOut(250), $(this).fadeOut(500).dequeue(), _r_();
}), $(this).dequeue("promoAnim"), _r_();
}).delay(4e3, "promoAnim"), e.queue("promoAnim", function() {
_i_("3dab:740d8e52"), e.find(".cel-header").delay(1e3).css({
opacity:1
}).fadeIn(1e3).delay(1e3).animate({
width:181,
height:36,
top:130
}, 750), $(this).dequeue("promoAnim"), _r_();
}).delay(4e3, "promoAnim"), e.queue("promoAnim", function() {
_i_("3dab:df1c6601"), e.queue(function() {
_i_("3dab:9d26872c"), function t() {
_i_("3dab:e26ec6dd"), e.find("li:hidden:first").delay(1e3).fadeIn(500, t), _r_();
}(), $(this).dequeue(), _r_();
}).delay(7e3).queue(function() {
_i_("3dab:bcd62e4f"), e.find(".cta-install-now,.cta-play-again").fadeIn(), $(this).dequeue(), _r_();
}), $(this).dequeue("promoAnim"), _r_();
}).delay(3500, "promoAnim"), e.dequeue("promoAnim"), _r_();
},
stopAnimation:function(e) {
_i_("3dab:af6df5a7"), e.clearQueue("promoAnim"), e.stop("promoAnim", !0, !0), _r_();
}
};
t.init(), _r_();
}), function(e, t) {
_i_("3dab:618dd53b");
function i() {
_i_("3dab:4af50996"), e.user && e.user.showGeniusForGoogle && booking.eventEmitter.bind("auth-dialog:show", function() {
_i_("3dab:55a75461"), t(".user_center_popover").css("z-index", "999"), e.lightbox.rePosition(), t(".user_access_email").focus(), _r_();
}), _r_();
}
t(document).ready(i), _r_();
}(window.booking, window.jQuery), B.when({
condition:$('li.uc-notification[data-type="genius_onboarding_reminder"] a').length && "www" === B.env.b_site_type
}).run(function(e) {
_i_("3dab:57661ffe");
var t = e("jquery"), i = t('li.uc-notification[data-type="genius_onboarding_reminder"] a');
i.click(function(e) {
_i_("3dab:9f089ce5"), e.preventDefault();
var t = B.components.require("ge-lightbox");
t.open({
template:"ge_genius_about_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_user_genius_status:B.env.b_user_genius_status,
b_is_internal_ip:B.env.b_is_internal_ip
}
}), _r_();
}), _r_();
}), function(e) {
"use strict";
_i_("3dab:a742fdd1"), $(".profile-area__nav").delegate(".js-insiderguides-track", "click", function() {
_i_("3dab:5b7ba498");
var t = $(this).data("trackname"), i = e.require("ga-tracker");
i.trackEvent("Insider Guides", "Profile Nav Click", [ e.env.b_action, ":", t ].join(" ")), _r_();
}), _r_();
}(booking), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:933260fb"), $(".ga-sh-tracker").click(function() {
_i_("3dab:b3550bdc");
var e = $(this).data("google-track-event-category") || "Click", t = $(this).data("google-track-event-label") || "", i = $(this).data("google-track-event-action") || "", i = i.replace(/\n/g, ""), n = [];
"[" === i.substr(0, 1) && "]" === i.substr(-1) ? n = i.substr(1, i.length - 2).split(";") :i && n.push(i);
for (var r = B.require("ga-tracker"), a = 0; a < n.length; a++) n[a] && r.trackEvent(e, n[a], t);
_r_();
}), _r_();
}), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:907f8eab");
var t = e("user-left-client");
if (!(t.enabled && B.browserStorageHandler && B.browserStorageHandler.isLocalStorageSupported())) return _r_();
t.register(B.env.b_action || "_client_"), _r_();
}), B.when({
events:"ready"
}).run(function(e) {
"use strict";
_i_("3dab:12cb0b23");
var t = 167;
"ar" === B.env.b_lang && (t = 295), "zh-cn" === B.env.b_lang_for_url && (t = 236);
function i(e) {
_i_("3dab:71d3b10b"), this.$element = $(e), this.priority_ = this.$element.data("priority") || 5, _r_();
}
i.prototype.width = function() {
return _i_("3dab:e298ab44"), this.width_ || (this.width_ = this.$element.outerWidth()), _r_(this.width_);
}, i.prototype.priority = function() {
return _i_("3dab:a53e7596"), _r_(this.priority_);
}, i.prototype.hide = function() {
return _i_("3dab:1c430473"), this.$element.hide(), _r_(this);
}, i.prototype.show = function() {
return _i_("3dab:ef7d983f"), this.$element.show(), _r_(this);
};
function n(e) {
_i_("3dab:038f4e2e"), this.$element = $(e), this.items = $.map(this.$element.find(".user_center_option"), function(e) {
return _i_("3dab:f44c5f0a"), _r_(new i(e));
}), this.sortedItems = this.items.sort(function(e, t) {
return _i_("3dab:1690bdfe"), _r_(e.priority() - t.priority());
}), _r_();
}
n.prototype.fitWidth = function(e) {
return _i_("3dab:474b3ea0"), $.each(this.sortedItems, function(t, i) {
_i_("3dab:0320090d"), e - i.width() > 0 ? (e -= i.width(), i.show()) :i.hide(), _r_();
}), B.events && B.events.trigger("header:fit-width"), _r_(this);
};
function r() {
_i_("3dab:b981008f");
var e = $(".header-wrapper"), i = new n(e.find(".user_center_nav"));
function r() {
_i_("3dab:c67db629"), i.fitWidth(e.width() - t), _r_();
}
$(window).bind("resize", B.tools.functions.throttle(r, 300)), r(), _r_();
}
r(), _r_();
}), function() {
_i_("3dab:dd924752");
var e = {
priority:9,
init:function() {
_i_("3dab:f59d51fb"), this.initializeNotifications(), _r_();
},
initializeNotifications:function() {
_i_("3dab:972579fb");
var e = $("#notificationMenu .alert");
e.css({
display:"block",
visibility:"hidden"
});
var t = $("#formwrap"), i = t.height(), n = $(".sidebar_menu_placeholder").height();
n > i && t.animate({
"min-height":n
}, {
duration:400
}), e.css({
display:"none",
visibility:"visible"
}).css("opacity", 0).slideDown(500).animate({
opacity:1
}, {
queue:!1,
duration:750
}), _r_();
}
};
B.when({
events:"ready"
}).run(function(t) {
_i_("3dab:0e32fe0d"), e.init(), _r_();
}), _r_();
}(), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:f1745b3d");
var t = {
priority:9,
run:function() {
_i_("3dab:6279753b");
var t = $("#survey").attr("surveyurl");
if (t && (window.b_survey_url = t, booking.env.survey_key = $("#survey").attr("surveykey"), booking.env.surveytracklink = "/outgoinglink/survey/" + booking.env.survey_key), "undefined" != typeof window.b_survey_url && window.b_survey_url) {
var i = $("#conf_survey,#survey,#conf_survey_bottom"), n = "/survey?", r = function() {
_i_("3dab:fa58d70b"), "hotel" === booking.env.b_action && e("booking-sticker").update(), _r_();
}, a = function(e) {
if (_i_("3dab:dc8089c0"), booking.env.showRevdSurvey2016Q1) var t = $(e.target).val(); else var t = $(this).val();
return t && ("accept" === t || "Yes" === t || "yes" === t || "Ja, ik doe mee" === t || "Okay" === t ? window.open(window.b_survey_url, "booking_survey_window") :i.hide("normal", r), $.get(n + "decision=" + t + "&survey_key=" + booking.env.survey_key, {}, function(e) {
_i_("3dab:91e9b692"), i.hide("normal", function() {
_i_("3dab:cde10bd8"), i.remove(), r(), _r_();
}), _r_();
})), _r_(!1);
};
booking.env.showRevdSurvey2016Q1 ? (booking.events.on("REVIEWS:fetched", function() {
_i_("3dab:7790eada"), i.addClass("show"), _r_();
}), i.find("button").on("click", a)) :(i.fadeIn("normal", r), i.find("button").click(a));
}
_r_();
},
init:function() {
if (_i_("3dab:aac32c6d"), this.run(), B.env.b_run_sr_ajax) {
var e = this;
B.require([ "searchresults/events" ], function(t) {
_i_("3dab:e24313f3"), t.on(t.UI_RESULTS_UPDATED, function() {
_i_("3dab:ae41636f"), e.run(), _r_();
}), _r_();
});
}
_r_();
}
};
t.init(), _r_();
}), B.define("component/banner", function(e, t, i) {
"use strict";
_i_("3dab:6d039ace");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("3dab:fb945527"), this.addEventListeners(), _r_();
},
addEventListeners:function() {
_i_("3dab:82d2ce08"), this.$el.on("click", ".js-close", this.hideEl.bind(this)), _r_();
},
hideEl:function(e) {
_i_("3dab:3a316e27"), e.preventDefault(), this.$el.fadeOut("fast"), _r_();
}
}), _r_();
}), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:f806b32a");
var t = e("jquery");
t(".fe_banner__dismiss").click(function(e) {
_i_("3dab:75a5d59a"), e.preventDefault(), t(this).parents(".fe_banner").fadeOut("fast", function() {}), _r_();
}), _r_();
}), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:8cc2bec9");
var t = {
$ul:!1,
setFocusAndOrTrack:function() {
_i_("3dab:3ea50566");
var e = this;
setTimeout(function() {
_i_("3dab:c5f72bfe"), e.$ul.find(".user_access_email:visible:first").select(), _r_();
}, 50), _r_();
},
setFocusSignIn:function() {
_i_("3dab:83365f40");
var e = this;
e.$ul.find(".signin_cta").add(".user_access_section_trigger").click(function() {
_i_("3dab:4523e2ae"), e.setFocusAndOrTrack(), _r_();
}), _r_();
},
setFocusSignUp:function() {
_i_("3dab:8ce730b8");
var e = this;
e.$ul.find(".user_center_nav").find(".user_access_signup_menu_tab").click(function() {
_i_("3dab:4523e2ae1"), e.setFocusAndOrTrack(), _r_();
}), _r_();
},
init:function() {
_i_("3dab:4cafcf0f"), this.$ul = $(".user_center_nav"), this.setFocusSignIn(), this.setFocusSignUp(), _r_();
}
};
t.init(), _r_();
}), B.define("main/user-center-bar", function(e, t, i) {
_i_("3dab:9afd2a44");
var n, r = e("jquery"), a = e("browser-storage-handler");
i.exports = {
init:function() {
_i_("3dab:bee24ef3"), this.initializeUserCenterBar(), booking.events.emit("user_center_bar:init"), _r_();
},
initializeUserCenterBar:function() {
_i_("3dab:0ea08eb6");
var e = this, t = ".popover_trigger", i = [];
i = i.concat([ {
className:"uc_language",
offset:0
} ]), r(".user_imported_faves_new_badge").hide(), r(document.body).on("click", t, function(t) {
_i_("3dab:262e3942");
var n = r(this);
if (n.hasClass("js-disable-popover")) return _r_();
t && t.currentTarget && r(t.currentTarget).hasClass("profile_menu_trigger") && booking.eventEmitter && booking.eventEmitter.trigger("user_access_menu_open"), t.preventDefault();
for (var a = {}, o = i.length - 1; o >= 0; o--) {
var _ = n.parent().hasClass(i[o].className);
if (_) {
a.offset = i[o].offset;
break;
}
}
n.next(".user_center_popover").is(":visible") ? e.hideDropdowns() :(e.hideDropdowns(n.parent()), e.positionPopover(n, a)), _r_();
}), r(document).ready(function() {
_i_("3dab:e2d4560f"), r("body").on("click", function(t) {
_i_("3dab:a5167458"), 0 === r(t.target).closest(".user_center_option").length && e.hideDropdowns(), _r_();
}), (booking.user.showUserLoginOnLoad || booking.user.showUserLoginOnLoadDSF) && r(".signin_cta").click(), _r_();
}), !a.getSessionValue("np_user_popover_continue_registration") && r(".uc_account .popover_trigger").length && r(".new_partnership_user_center_popover").length && (e.positionPopover(r(".uc_account .popover_trigger"), {
popover:".new_partnership_user_center_popover"
}), a.addSessionValue("np_user_popover_continue_registration", !0)), r(".new_partnership_user_center_popover").on("click", function(e) {
_i_("3dab:67fc1361"), e.stopPropagation(), _r_();
});
var n = !1, o = !1;
function _() {
if (_i_("3dab:2025ff06"), n || o) return _r_();
booking.eventEmitter.trigger("uc_recently_viewed_opened"), o = !0;
var e = r(this).attr("data-href"), t = r(".uc_viewedhotels .hotels_container");
r.ajax({
url:e,
type:"GET",
success:function(e) {
_i_("3dab:65fb7d80"), t.html(e), n = !0, booking.eventEmitter.trigger("uc_recently_viewed_loaded"), _r_();
},
complete:function() {
_i_("3dab:d1071520"), r(".uc_viewedhotels .ajax_loading").hide(), r(".user_search_header").hide(), r(".no_listing:visible").length ? r(".uc_viewed_hotels .popover_content").addClass("empty_list") :(r(".user_search_header").appendTo(".uc_viewedhotels .popover_footer"), r(".user_search_header").show()), o = !1, _r_();
}
}), _r_();
}
r(".uc_viewed_hotels .popover_trigger").click(_), r(document).on("click", ".socnet_mailafriend", function() {
_i_("3dab:f029e89f"), setTimeout(function() {
_i_("3dab:e462452f"), r(".user_center_popover").hide(), booking.env.showFavesToWishlistNotice && r(".popover_notice").remove(), r("li .popover_trigger").removeClass("active_option"), _r_();
}, 200), _r_();
}), r(document).on("click", "#user_form a.remove_hotel, #user_form a.user_search_item_remove_link", function(t) {
_i_("3dab:6725169d");
var i = r(this).attr("href").split("#")[1], n = {
hotel_id:i
};
n = e.addDefaultParams(n), r.ajax({
url:"/hotel_history",
type:"DELETE",
data:n
}), this.blur();
var a = r(this).parents(".user_search_item").get(0), o = a.parentNode;
return r(a).hide("slow", function() {
if (_i_("3dab:38b60b0f"), r(".hidden_item", o).length) {
var e = r(".hidden_item", o).get(0);
r(e).removeClass("hidden_item");
}
_r_();
}), e.removeOneHome(i), r("#user_form .user_search_item:visible").length || r(this).parents("#user_form").find(".user_search_item:visible").length || (r(".uc_viewedhotels .popover_footer").hide(), r(".uc_viewed_hotels .popover_content").addClass("empty_list"), r(".user_center_popover .no_listing").show()), _r_(!1);
}), r(document).on("click", "#user_form a#removeAllHistoryHotel", function() {
return _i_("3dab:ffe912e2"), e.removeAll("removeAllHistoryHotel"), r(".user_center_popover").hide(), r(".uc_viewed_hotels .popover_content").addClass("empty_list"), r(".user_searches_content").show(), r(".user_searches_content .user_search_item").hide(), r(".user_search_footer").hide(), r("#user_form .uc_viewed_hotels .popover_footer").remove(), r(".uc_viewed_hotels .no_listing").show(), _r_(!1);
}), booking.env.fe_currency_list_in_modal && r(document).on("click", '[data-modal-id="currency-modal"]', this.initCurrencyListInModal), booking.env.fe_language_list_in_modal && r(document).on("click", '[data-modal-id="language-modal"]', this.initLanguageListInModal), _r_();
},
initCurrencyListInModal:function() {
_i_("3dab:1ba09585");
var e = "BdTeLGZIXXcffPQDVNRfDRKe", t = r(".bui-modal#currency-modal"), i = t.find(".js-currency-select"), n = t.find(".js-currency-option-button"), a = t.find(".js-approve-button"), o = B.env.b_selected_currency || i.find("option:selected").data("currencyCode"), _ = "popular-settings--is-selected", s = function(e, t) {
_i_("3dab:aca57653");
var r = '[data-currency-code="' + e + '"]';
t || (i.find("option").prop("selected", !1), i.find(r).prop("selected", "selected")), n.removeClass(_), n.filter(r).addClass(_), o === e ? a.attr("disabled", "disabled") :a.attr("disabled", null), _r_();
};
i.on("change", function() {
_i_("3dab:f2c07c9b"), B.et.customGoal(e, 3);
var t = i.find("option:selected").data("currencyCode");
s(t, !0), _r_();
}), n.on("click", function(t) {
_i_("3dab:2261a89b"), B.et.customGoal(e, 2);
var i = r(t.currentTarget).data("currencyCode");
s(i), _r_();
}), a.on("click", function() {
_i_("3dab:3626f5c6"), B.et.customGoal(e, 1), a.addClass("bui-is-loading"), window.location.href = i.val(), _r_();
}), _r_();
},
initLanguageListInModal:function() {
_i_("3dab:26b9cee5");
var e = "BdTeLGZEfKFWDbMfZXDOXC", t = r(".bui-modal#language-modal"), i = t.find(".js-language-select"), n = t.find(".js-language-option-button"), a = t.find(".js-approve-button"), o = B.env.b_selected_language_country_flag || i.find("option:selected").data("languageCode"), _ = "popular-settings--is-selected", s = function(e, t) {
_i_("3dab:59d810cb");
var r = '[data-language-code="' + e + '"]';
t || (i.find("option").prop("selected", !1), i.find(r).prop("selected", "selected")), n.removeClass(_), n.filter(r).addClass(_), o === e ? a.attr("disabled", "disabled") :a.attr("disabled", null), _r_();
};
i.on("change", function() {
_i_("3dab:dae683b5"), B.et.customGoal(e, 3);
var t = i.find("option:selected").data("languageCode");
s(t, !0), _r_();
}), n.on("click", function(t) {
_i_("3dab:d3f74acb"), B.et.customGoal(e, 2);
var i = r(t.currentTarget).data("languageCode");
s(i), _r_();
}), a.on("click", function() {
_i_("3dab:3626f5c61"), B.et.customGoal(e, 1), a.addClass("bui-is-loading"), window.location.href = i.val(), _r_();
}), i.on("focus", function() {}), _r_();
},
hideDropdowns:function(e) {
_i_("3dab:0c706c28");
var t = r(".user_center_option").not(e), i = t.find(".user_center_popover:visible"), a = r(".new_partnership_user_center_popover");
n && (n.focus(), n = null), i.length > 0 && (i.hide(), booking.eventEmitter.trigger("uc_popover_hidden")), booking.env.showFavesToWishlistNotice && r(".popover_notice").remove(), a.length && a.remove(), t.removeClass("active_option"), _r_();
},
removeAll:function(e) {
_i_("3dab:558790cf");
var t = this, i = r("#" + e).parents(".user_searches_content"), n = {
hotel_id:-1
};
n = this.addDefaultParams(n), r.ajax({
url:"/hotel_history",
type:"DELETE",
data:n
}), t.removeAllHome(), r("#" + e).blur(), r(".user_search_item", i).each(function() {
_i_("3dab:df5e58c8"), r(this).hasClass("no_listing") ? r(this).show("slow") :r(this).hide("slow", function() {
_i_("3dab:30d8ac9f"), r(this).remove(), _r_();
}), _r_();
}), r(".user_search_header", i).hide(), r(".user_search_footer", i).hide(), _r_();
},
removeAllHome:function() {
_i_("3dab:741f4265"), r(".user_searches_content").hide(), _r_();
},
removeOneHome:function(e) {
_i_("3dab:290f7228"), r(".user_searches_content .remove_hotel").each(function() {
_i_("3dab:ec5d23dc");
var t;
r(this).attr("href") == "#" + e && (t = r(this).parents(".user_search_item"), t.remove()), _r_();
}), _r_();
},
positionPopover:function(e, t) {
_i_("3dab:c77de15c");
var i = r(e).parent();
if (!i) return _r_();
var a, o = i.width() / 2;
a = "string" == typeof t.popover ? r(t.popover, i) :r(".user_center_popover", i), "current_account" == i.attr("id") && (a.length > 1 || !a.hasClass("uc_genius_tooltip")) && (a = a.filter(":not(.uc_genius_tooltip)"), r(".uc_genius_tooltip").remove());
var _ = a.width() / 2, s = _ - o, d = _ - 8, c = i.offset().left - r("#bodyconstraint").offset().left, l = r("#bodyconstraint").width(), u = l - (_ + o + c), f = c + o - _;
0 > u && f > 0 ? (s -= u, d -= u) :u > 0 && 0 > f && (s += f, d += f);
var h = t && t.offset;
if (h && (s += h, d += h), a.css("left", -Math.round(s)), r(".user_center_popover .uc_top_arrow", i).css("left", d), r(".user_center_popover:visible").length && booking.eventEmitter.trigger("uc_popover_hidden"), r(".user_center_popover:visible", i).length) r(".user_center_popover").hide(); else {
var b = i.attr("data-id") || i.attr("id");
r(".user_center_popover").hide(), a.show(), n = e, booking.eventEmitter.trigger("uc_popover_showed", {
id:b
});
}
r("body.user_center #formwrap #signup_password:visible").length && (r("#formwrap #signup_password").css("z-index", "99"), r("#formwrap .pwd_strength").css("z-index", "99")), r("#dashboard_search #inout").css("z-index", "99"), _r_();
},
addDefaultParams:function(e) {
return _i_("3dab:61b2f534"), _r_(r.extend(e, {
aid:B.env.b_aid,
sid:B.env.b_sid,
stype:B.env.b_site_type_id,
stid:B.env.b_stid,
label:B.env.b_label
}));
}
}, _r_();
}), B.when({
events:"ready",
condition:B.env.is_user_center_bar
}).require([ "main/user-center-bar" ], function(e) {
_i_("3dab:7259f268"), e.init(), _r_();
}), function() {
_i_("3dab:8ded2e7d");
var e = B.require("ga-tracker"), t = B.require("jquery");
t(document.documentElement).on("click", ".js-raf-center-bar-link", function() {
_i_("3dab:06dbd2a4"), e.trackEvent(e.referralAdvocateTracker, "click", "center bar"), _r_();
}), _r_();
}(), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:54c5aef3");
var t = B.require("jquery");
function i() {
_i_("3dab:6cbdc82c"), t("body").on("click", "a.open-bpg-in-overlay-instead", function(e) {
_i_("3dab:c04574c3"), e.preventDefault(), e.stopPropagation();
var t = B.require("lightbox");
t.hide();
var i = B.require("async-loader");
i.load({
js:"async_wpm_overlay_js",
css:"async_wpm_overlay_css"
}).then(n), _r_();
}), _r_();
}
function n() {
_i_("3dab:569e93fa");
var e = B.require("lightbox"), i = B.jstmpl("bpg_module_overlay").render({
bpg_label:B.env.bpg_label,
b_site_type:B.env.b_site_type,
cs_page_link:B.env.prd_bpg_overlay_cs_link,
b_companyname:B.env.b_companyname,
b_action:B.env.b_action,
fe_show_booking_basic_copy:B.env.fe_show_booking_basic_copy
});
e.show(i, {
customWrapperClassName:"bgp_module_overlay",
autoWidth:!1,
bCloseButton:!1,
bAnimation:!1,
modalLabeledById:"bpg-overlay-content-title",
addDialogStartEndText:!0
}), t(".bpg-overlay--content").on("click", ".bpg-overlay--close", function() {
_i_("3dab:ab4f1701"), e.hide(), _r_();
}), _r_();
}
function r() {
_i_("3dab:d677339c");
var e = [ "#rate_guarantee a", ".rate_guaranteed a", "#rate_guaranteed", "#wrap-hotelpage-top .best_rate_guarantee a", "table.hotellist td div.room_details_usp .room_details_usp_inner.best_rate_guarantee a", "a.usps_rate_guarantee_link", "#rate_guaranteev2 a", "#ratelogo a", "#terms_rateguarantee", "a#guarantee_terms", "#rates_feedback_invite a.jq_tooltip", ".rate_guarantee_window_opener", "#sidebar_usp_box a.best_price_popup", "#sidebar_usp_box a.jq_tooltip", ".best_price_popup", ".pp_bpg_tooltip_holder", ".bp-usps__usp__title" ].join(",");
t("body").on("click", e, function() {
_i_("3dab:22c90f73"), B.events.trigger("BPG:Click"), _r_();
}).on("mouseenter", e, function() {
_i_("3dab:abeaf2c4"), B.events.trigger("BPG:Hover"), _r_();
}), _r_();
}
r(), i(), _r_();
}), B.define("font-face-on-load", function(e, t, i) {
"use strict";
_i_("3dab:8f19f5f7");
var n = e("jquery"), r = B.debug("font-face-on-load"), a = "AxmTYklsjo190QW", o = "sans-serif", _ = "serif", s = {
normal:"400",
bold:"700"
}, d = {
tolerance:2,
delay:100,
glyphs:"",
success:function() {},
error:function() {},
timeout:5e3,
weight:"400",
style:"normal"
}, c = [ "display:block", "position:absolute", "top:-999px", "left:-999px", "font-size:48px", "width:auto", "height:auto", "line-height:normal", "margin:0", "padding:0", "font-variant:normal", "white-space:nowrap" ], l = '<div style="%s">' + a + "</div>";
function u() {
_i_("3dab:a562b552"), this.fontFamily = "", this.appended = !1, this.serif = void 0, this.sansSerif = void 0, this.parent = void 0, this.options = {}, _r_();
}
u.prototype.getMeasurements = function() {
return _i_("3dab:21f719d1"), _r_({
sansSerif:{
width:this.sansSerif.offsetWidth,
height:this.sansSerif.offsetHeight
},
serif:{
width:this.serif.offsetWidth,
height:this.serif.offsetHeight
}
});
}, u.prototype.load = function() {
_i_("3dab:b42bd3c4");
var e, t = new Date(), i = this, n = i.serif, a = i.sansSerif, s = i.parent, d = i.appended, u = this.options, f = u.reference;
function h(e) {
return _i_("3dab:5ee72a73"), _r_(c.concat([ "font-weight:" + u.weight, "font-style:" + u.style ]).concat("font-family:" + e).join(";"));
}
var b = l.replace(/\%s/, h(o)), p = l.replace(/\%s/, h(_));
s || (s = i.parent = document.createElement("div")), s.innerHTML = b + p, a = i.sansSerif = s.firstChild, n = i.serif = a.nextSibling, u.glyphs && (a.innerHTML += u.glyphs, n.innerHTML += u.glyphs);
function g(e, t, i) {
return _i_("3dab:e834fba8"), _r_(Math.abs(e.width - t.offsetWidth) > i || Math.abs(e.height - t.offsetHeight) > i);
}
function m() {
return _i_("3dab:e9b305f9"), _r_(new Date().getTime() - t.getTime() > u.timeout);
}
!function v() {
_i_("3dab:f5919170"), f || (f = document.body), !d && f && (f.appendChild(s), d = i.appended = !0, e = i.getMeasurements(), a.style.fontFamily = i.fontFamily + ", " + o, n.style.fontFamily = i.fontFamily + ", " + _), d && e && (g(e.sansSerif, a, u.tolerance) || g(e.serif, n, u.tolerance)) ? (r.log(i.fontFamily + " font loaded"), u.success()) :m() ? (r.error(i.fontFamily + " font loading timed out"), u.error()) :!d && "requestAnimationFrame" in window ? window.requestAnimationFrame(v) :window.setTimeout(v, u.delay), _r_();
}(), _r_();
}, u.prototype.checkFontFaces = function(e) {
_i_("3dab:c2a26529");
var t = this;
document.fonts.forEach(function(i) {
_i_("3dab:dd58e149"), i.family.toLowerCase() === t.fontFamily.toLowerCase() && (s[i.weight] || i.weight) === "" + t.options.weight && i.style === t.options.style && i.load().then(function() {
_i_("3dab:357f8c05"), r.log(t.fontFamily + " font loaded"), t.options.success(), window.clearTimeout(e), _r_();
}), _r_();
}), _r_();
}, u.prototype.init = function(e, t) {
_i_("3dab:fa5f923d");
var i;
for (var a in d) t.hasOwnProperty(a) || (t[a] = d[a]);
this.options = t, this.fontFamily = e, !t.glyphs && "fonts" in document && "function" == typeof document.fonts.forEach ? (t.timeout && (i = window.setTimeout(n.proxy(function() {
_i_("3dab:b761d933"), r.error(this.fontFamily + " font loading timed out"), t.error(), _r_();
}, this), t.timeout)), this.checkFontFaces(i)) :this.load(), _r_();
};
function f(e, t) {
_i_("3dab:84ea2b9f");
var i = new u();
return i.init(e, t), _r_(i);
}
i.exports = f, _r_();
}), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:da1c2b1d");
var t = e("font-face-on-load"), i = {
woff:"//q.bstatic.com/static/css/fonticons_clean/base64/woff/5d61b8a7156073e5e3e9741f65dda44ae3eef7d2.css",
opentype:"//q.bstatic.com/static/css/fonticons_clean/base64/opentype/379fae32e03d316d4fa8a000bd53978baa8de48a.css",
truetype:"//r.bstatic.com/static/css/fonticons_clean/base64/truetype/789d396d92f96569dc6900688e31505670801b0e.css"
}, n = function() {
_i_("3dab:7f01455c"), $("body").removeClass("iconfont_is_loading"), _r_();
}, r = function() {
if (_i_("3dab:12d8d04b"), "msie" == B.env.b_browser) return _r_("opentype");
if ("safari" == B.env.b_browser && B.env.b_browser <= 5) return _r_("truetype");
if ("android" == B.env.b_browser && B.env.b_browser_version <= 4.4) return _r_("truetype");
return _r_("woff");
}, a = function() {
_i_("3dab:a55faee1");
var e = r();
return _r_(i[e]);
}, o = function() {
_i_("3dab:27540e04");
var e = a(), t = document.createElement("link");
t.type = "text/css", t.rel = "stylesheet", t.href = e;
var i = document.createElement("img");
i.onerror = function() {
_i_("3dab:6b7ebc0e"), n(), _r_();
}, i.src = e, document.getElementsByTagName("head")[0].appendChild(t), _r_();
}, _ = function() {
_i_("3dab:89343426"), n(), _r_();
}, s = function() {
_i_("3dab:d9273843"), o(), _r_();
};
t("booking-iconset", {
success:_,
error:s,
timeout:250
}), _r_();
}), B.define("profile/social/social-connect/social-connect", function(e, t, i) {
"use strict";
_i_("3dab:e0da0a0d"), i.exports = {
getEnv:function() {
return _i_("3dab:a0d7c492"), _r_(booking.env["social-connect"]);
},
findPendingState:function() {
return _i_("3dab:853ab917"), _r_(this.getEnv().filter(function(e) {
return _i_("3dab:46f95e6f"), _r_(/_REQUIRED|_CONFLICT|_EXISTING/.test(e.state));
})[0]);
},
clearState:function(e) {
_i_("3dab:c7fc311e"), $.get("/update_facebook_connect_state", {
action:"clear_state",
state:e.state,
provider:e.provider
}), _r_();
}
}, _r_();
}), B.define("profile/social/social-connect-dialogs/social-connect-dialogs", function(e, t, i) {
"use strict";
_i_("3dab:6295ae7a");
var n = e("profile/social/social-connect/social-connect");
i.exports = {
support:{
MERGE_REQUIRED:"merge-required",
EMAIL_REQUIRED:"email-required",
EMAIL_CONFLICT:"email-conflict",
EMAIL_EXISTING:"email-existing",
CONNECTED:void 0
},
onload:function() {
_i_("3dab:a0648a84");
var e = n.findPendingState();
e && this.show(e), _r_();
},
selector:function(e) {
return _i_("3dab:d6101463"), _r_(".js-social-connect-dialog--" + e.provider + "-" + this.support[e.state]);
},
show:function(e) {
_i_("3dab:bc5eb0a7");
var t = $(this.selector(e));
if (0 === t.length) return _r_();
booking.lightbox.show(t, {
hideCallBack:n.clearState.bind(n, e),
customWrapperClassName:"social-connect-dialog-wrapper"
}), _r_();
}
}, "b_run_wechat_connect" in B.env && B.env.b_run_wechat_connect && B.et.track("AcdJFebeHEIbQUdPUMWZYO") && (i.exports.support.UNIONID_CONFLICT = "unionid-conflict"), _r_();
}), B.when({
condition:B.env.b_run_social_connect,
events:"ready"
}).run(function() {
_i_("3dab:67288f43"), B.require("profile/social/social-connect-dialogs/social-connect-dialogs").onload(), _r_();
}), $(function() {
"use strict";
_i_("3dab:8f35519f");
var e, t = B.require("jquery"), i = "vpmss";
if (t(window).on("resize", function() {
_i_("3dab:b67fc6cb"), e && clearTimeout(e), e = setTimeout(function() {
_i_("3dab:0cc4be29"), t.cookie(i, null), _r_();
}, 2e3), _r_();
}), t.cookie(i)) return _r_();
if (!B.env.vpm_log_screen_size) return _r_();
setTimeout(function() {
_i_("3dab:eebfa55b");
var e = t(window), r = parseInt(e.width(), 10), a = parseInt(e.height(), 10);
if (!n(r) || !n(a)) return _r_();
t.post("/vpmlogdesktopscreensize", {
width:r,
height:a
}), t.cookie(i, 1, {
expires:31,
path:"/"
}), _r_();
}, 5);
function n(e) {
return _i_("3dab:c6b2d9c4"), _r_(!isNaN(e) && isFinite(e) && e > 0);
}
_r_();
}), B.when({
condition:B.env.fe_is_user_aspiring,
events:"ready"
}).run(function(e) {
_i_("3dab:715cb19a");
var t, i, n = e("jquery"), r = n(".book-challenge__stamp--current"), a = n(".book-challenge__message"), o = n(".book-challenge__message-inner"), _ = o.html();
if (n(".book-challenge__stamp--booked").on("mouseenter", function() {
_i_("3dab:a9f8f569");
var e = n(this);
i = e.index() + 1, t && clearInterval(t);
var _ = e.data("progMsg");
a.addClass("book-challenge__message__arrow--stamp" + i), r.removeClass("book-challenge__stamp--current"), o.addClass("book-challenge__message-hover"), _ && o.html(_), _r_();
}), n(".js-genius-trial-desktop---show-challange").on("click", function() {
_i_("3dab:88a8f54c"), n(".genius-trial-desktop--wrapper").toggleClass("genius-trial-desktop--ch-open"), n(".genius-trial-desktop--wrapper").toggleClass("ge-yellow-border"), n(".book-challenge").toggleClass("genius-trial-desktop-shown"), n(".book-challenge").toggleClass("ge-yellow-border"), _r_();
}), n(".js-genius-trial-desktop--lightbox").length) {
var s = B.components.require("ge-lightbox");
s.setup({
element:".js-genius-trial-desktop--lightbox",
template:"ge_aspiring_about_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_reg_user_qualify_genius_challenge:B.env.b_reg_user_qualify_genius_challenge || {}
}
});
}
if (B.env.fe_ge_show_asp_trial_opt_in_lightbox) {
var d = function() {
_i_("3dab:f0adcbf6"), n.ajax({
type:"post",
url:"/genius_trial_optin_lightbox_seen?campaign_id=4",
data:{}
}), _r_();
}, c = B.components.require("ge-lightbox");
c.open({
template:"ge_trial_optin_lightbox",
onOpen:function() {
_i_("3dab:b47b7e06"), d(), _r_();
},
data:B.env.fe_ge_asp_trial_opt_in_lightbox_data
});
}
var l = n(".book-challenge__stamp--suggested");
if ("index" == B.env.b_action && l.length) {
var u = e("ultrafocus").getInstance("ge_challenge_4th_book", "[data-sb-outer]");
l.on("click", function() {
_i_("3dab:7a78668d"), u.show(), _r_();
});
}
var f = n(".book-challenge__stamp--search");
if ("index" == B.env.b_action && f.length) {
var u = e("ultrafocus").getInstance("ge_challenge_search_stamp", "[data-sb-outer]");
f.on("click", function() {
_i_("3dab:7a78668d1"), u.show(), _r_();
});
}
if (n(".book-challenge__stamp--booked").on("mouseleave", function() {
_i_("3dab:8c3c604a"), a.removeClass("book-challenge__message__arrow--stamp" + i), t = setTimeout(function() {
_i_("3dab:a702e465"), r.addClass("book-challenge__stamp--current"), o.removeClass("book-challenge__message-hover"), o.html(_), _r_();
}, 100), _r_();
}), n(".ge_challenge_cta").length) {
var h = B.components.require("ge-lightbox");
h.setup({
element:".ge_challenge_cta",
template:"ge_aspiring_about_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_reg_user_qualify_genius_challenge:B.env.b_reg_user_qualify_genius_challenge || {},
b_action:B.env.b_action
}
});
}
_r_();
}), B.when({
condition:B.env.b_reg_user_is_genius
}).run(function() {
if (_i_("3dab:2972e440"), B.env.fe_ge_pilot_markets_lb) {
var e = function() {
_i_("3dab:29508b56"), $.ajax({
type:"post",
url:"/genius_login_lightbox_seen",
data:{}
}), _r_();
}, t = B.components.require("ge-lightbox");
t.open({
template:"ge_pilot_markets_lightbox",
onOpen:function() {
_i_("3dab:b47b7e061"), e(), _r_();
},
data:B.env.fe_ge_pilot_markets_lb_data
});
}
_r_();
}), B.when({
condition:B.env.fe_ge_show_user_lightbox
}).run(function() {
_i_("3dab:96669687");
var e = function() {
_i_("3dab:4e9809d7"), $.ajax({
type:"post",
url:"/genius_login_lightbox_seen",
data:{}
}), _r_();
}, t = B.components.require("ge-lightbox");
t.open({
template:B.env.fe_ge_lightbox_template_name,
onOpen:function() {
_i_("3dab:c06c4d06"), e(), _r_();
},
data:B.env.fe_ge_lightbox_template_data
}), _r_();
}), B.when({
events:"ready",
condition:B.env.b_reg_user_is_genius && B.env.fe_new_genius_lightbox
}).run(function() {
_i_("3dab:4bb2c334");
function e() {
_i_("3dab:03241ea9"), $.ajax({
type:"post",
url:"/new_genius_lightbox_seen",
data:{}
}), _r_();
}
var t = B.components.require("ge-lightbox");
t.open({
template:"ge_welcome_lightbox",
onOpen:function() {
_i_("3dab:ec07ed77"), e(), _r_();
}
}), _r_();
}), B.when({
events:"ready",
condition:parseInt(B.env.fe_ge_is_geff_show_lb)
}).run(function(e) {
_i_("3dab:99d8ec0b");
var t = e("jquery"), i = e("browser-storage-handler"), n = i.isLocalStorageSupported(), r = i.getSessionValue("seen_d_ge_ft_welcome_lightbox");
function a() {
_i_("3dab:e2184027"), n && i.addSessionValue("seen_d_ge_ft_welcome_lightbox", 1), t.ajax({
url:"/dismiss_item",
type:"POST",
data:{
item_id:"d_ge_ft_welcome_lightbox"
}
}), _r_();
}
if (!r) {
var o = B.components.require("ge-lightbox");
o.open({
template:"ge_ft_welcome_lightbox",
onOpen:function() {
_i_("3dab:437ba614"), a(), _r_();
}
});
}
var _ = e("ultrafocus").getInstance("ge_ft_lightbox", "[data-sb-outer]");
t(".js-ge-lightbx-search-cta").on("click", function() {
_i_("3dab:6377e53a"), _.show(), _r_();
}), _r_();
}), B.when({
condition:$(".ge_challenge_cta,.js-open-asp-about-lightbox").length
}).run(function(e) {
_i_("3dab:1099ac64");
var t = e("jquery");
t(".ge_challenge_cta,.js-open-asp-about-lightbox").click(function(e) {
_i_("3dab:129e0bda"), e.preventDefault();
var t = B.components.require("ge-lightbox");
t.open({
template:"ge_aspiring_about_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_reg_user_qualify_genius_challenge:B.env.b_reg_user_qualify_genius_challenge || {}
}
}), _r_();
}), _r_();
}), B.when({
condition:B.env.b_user_genius_status && parseInt(B.env.b_user_genius_status.is_genius_plus)
}).run(function() {
if (_i_("3dab:2e2fd7bd"), $("#genius-plus-progress-bar").length) {
var e = $("#genius-plus-progress-cont").data("days"), t = e / 365 * 100, i = $("#genius-plus-progress-bar"), n = i.attr("r"), r = Math.PI * (2 * n);
0 > t && (t = 0), t > 100 && (t = 100);
var a = (100 - t) / 100 * r;
i.css({
strokeDashoffset:a
});
}
var o = $("#js-ge-open-tier-lighbox");
o.length && o.on("click", function(e) {
_i_("3dab:99ee05e9"), e.preventDefault();
var t = B.components.require("ge-lightbox");
t.open({
template:"ge_perks_lightbox",
data:{
first_name:B.env.b_genius_user.first_name || "Genius",
plus_end_date:B.env.b_user_genius_status.plus_end_date
}
}), _r_();
});
var _ = $("#js-ge-lonely-planet-lighbox");
_.length && _.on("click", function(e) {
_i_("3dab:9498678a"), e.preventDefault();
var t = B.components.require("ge-lightbox");
t.open({
template:"ge_lonely_planet_lightbox",
data:{}
}), _r_();
}), _r_();
}), B.when({
action:"index"
}).run(function() {
_i_("3dab:5832b5dc"), $(".ge-onboarding-index__timeline").addClass("animate"), _r_();
}), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:686233b8");
var t = e("jquery"), i = B.components.require("ge-lightbox");
t(".ge-block").addClass("end"), t(".ge-show-lightbox a.ge-block__desc_cta").on("click", function() {
_i_("3dab:0c791a62"), i.open({
template:"ge_genius_about_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_user_genius_status:B.env.b_user_genius_status,
b_is_internal_ip:B.env.b_is_internal_ip
}
}), _r_();
});
var n = t(".ge-sticker.ge-sticker--empty.ge-sticker--current");
if ("index" == B.env.b_action && n.length) {
var r = e("ultrafocus").getInstance("ge_challenge_search_stamp", "[data-sb-outer]");
n.on("click", function() {
_i_("3dab:20654b27"), t("html, body").animate({
scrollTop:0
}, "slow"), r.show(), _r_();
});
}
_r_();
}), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:0d40aa75");
var t = e("jquery"), i = t(".js-ge-show-search-box");
if (("index" == B.env.b_action || "city" == B.env.b_action) && i.length) {
var n = e("ultrafocus").getInstance("ge_challenge_search_stamp", "[data-sb-outer]");
i.on("click", function(e) {
_i_("3dab:1e40ff60"), e.preventDefault(), t("html, body").animate({
scrollTop:0
}, "slow"), n.show(), _r_();
});
}
_r_();
}), B.when({
condition:"www" === B.env.b_site_type && B.env.b_reg_user_is_genius
}).run(function(e) {
_i_("3dab:88cd8eff");
var t = e("jquery"), i = B.components.require("ge-lightbox");
t(document).on("click", '[data-ge-id="js_user_menu_ge_lb_link"]', function(e) {
_i_("3dab:8afa4ba0"), e.preventDefault(), i.open({
template:"ge_genius_about_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_user_genius_status:B.env.b_user_genius_status,
b_is_internal_ip:B.env.b_is_internal_ip
}
}), _r_();
}), _r_();
}), B.when({
condition:B.env.b_action.match(/^(index|hotel|searchresults|mydashboard|continent|country|region|city|district|landmark|airport|place)$/) && "www" === B.env.b_site_type && B.env.b_reg_user_is_genius
}).run(function() {
_i_("3dab:45960e34");
var e = B.components.require("ge-lightbox");
function t() {
_i_("3dab:a914cf1c"), $.ajax({
type:"post",
url:"/genius_trial_lightbox_seen?campaign_id=" + B.env.ge_trial_campaign_id,
data:{}
}), _r_();
}
var i = {
b_genius_user:B.env.b_genius_user || {},
b_reg_user_qualify_genius_challenge:B.env.b_reg_user_qualify_genius_challenge || {},
b_user_genius_status:B.env.b_user_genius_status || {}
};
B.env.fe_is_zero_ge_trial_desktop_user && (i.fe_is_zero_ge_trial_desktop_user = 1, i.fe_is_zero_ge_trial_init_lightbox = 1), B.env.show_ge_trial_lighbox_onload && setTimeout(function() {
_i_("3dab:64c52155"), e.open({
template:"ge_genius_week_lightbox",
data:i,
onOpen:function() {
_i_("3dab:b8650811"), t(), _r_();
}
}), _r_();
}, 1500), $(document).on("click", ".js-ge-open-trial-lighbox", function(t) {
_i_("3dab:a740e7bc"), t.preventDefault(), e.open({
template:"ge_genius_week_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_reg_user_qualify_genius_challenge:B.env.b_reg_user_qualify_genius_challenge || {},
b_user_genius_status:B.env.b_user_genius_status || {}
}
}), _r_();
}), $(document).on("click", "#js_close_trial_lightbox", function() {
return _i_("3dab:33f132fa"), B.lightbox.hide(), _r_(!1);
}), _r_();
}), B.when({
condition:"www" === B.env.b_site_type && B.env.b_reg_user_is_genius
}).run(function(e) {
_i_("3dab:52ac5897");
var t = e("jquery"), i = t("#ge_genius_rate"), n = B.browserStorageHandler;
if (!n) return _r_();
var r = n.getPermanentValue("genius_search_checkbox_checked");
if (r || !i.length) return _r_();
i.prop("checked", !0).on("change", function() {
_i_("3dab:ded53334"), n.addPermanentValue("genius_search_checkbox_checked", 1), _r_();
}), _r_();
}), B.when({
condition:$('li.uc-notification[data-type="genius_trial_reminder"] a').length
}).run(function(e) {
_i_("3dab:1a05ca94");
var t = e("jquery");
t('li.uc-notification[data-type="genius_trial_reminder"] a').click(function(e) {
_i_("3dab:4a800213"), e.preventDefault(), document.forms.ge_trial_opt_in_notifi_form.submit(), _r_();
}), _r_();
}), B.when({
events:"ready",
condition:B.env.ge_b_b_notif
}).run(function(e) {
_i_("3dab:afa7dad6");
var t = e("dismiss-item"), i = e("jquery"), n = i(".fe_banner--genius-invalid-cc-booking");
n.find("button").on("click", function() {
_i_("3dab:d22927e2"), n.remove(), i(window).trigger("resize"), t("ge_b_b_notif_read"), _r_();
}), i(".fe_banner__message_short a").on("click", function() {
_i_("3dab:d08b1aa4"), n.addClass("fe_banner--genius-invalid-cc-booking-opened"), i(window).trigger("resize"), _r_();
}), _r_();
}), B.when({
experiment:"BffIEcEUXPNMPOHET",
condition:B.env.auth_level > 0,
events:"load"
}).require([ "jquery", "header/notifications/notifications" ], function(e, t) {
_i_("3dab:eb844e48");
function i(t) {
_i_("3dab:47616f7b"), e(".uc-notifications-group__messenger").height(t), _r_();
}
function n(i) {
_i_("3dab:7efcf875"), e(".uc-notifications-group__messenger").data("unread-count", i), t.refresh(), _r_();
}
window.addEventListener("message", function(e) {
if (_i_("3dab:3eff9377"), !e) return _r_();
if (!e.data) return _r_();
if (e.data.indexOf("notifications-height:") > -1) {
var t = parseInt(e.data.replace("notifications-height:", ""), 10);
isNaN(t) || i(t);
} else if (e.data.indexOf("notifications-unread-count:") > -1) {
var r = parseInt(e.data.replace("notifications-unread-count:", ""), 10);
isNaN(r) || n(r);
}
_r_();
}), B.eventEmitter.bind("uc_popover_showed", function(t, i) {
if (_i_("3dab:867bdc3b"), !i || !i.id || "notifications" !== i.id) return _r_();
var n = e(".uc-notifications__messenger").get(0);
if (!n || !n.contentWindow) return _r_();
n.contentWindow.postMessage("you-are-visible", n.src), _r_();
}), _r_();
}), B.when({
condition:B.env.fe_enable_fps_goal_with_value && void 0 !== window.requestAnimationFrame && void 0 !== window.performance && void 0 !== performance.now
}).run(function() {
"use strict";
_i_("3dab:94998539");
var e, t = B.debug("fps"), i = 200, n = 0;
function r(i) {
if (_i_("3dab:1f27ec99"), t.log(i), n) {
var r = n * e;
n += 1, e = (r + i) / n;
} else n = 1, e = i;
t.log("fps_avg", e), "hotel" == B.env.b_action && B.env.fe_has_3d_model_gallery && (B.env.fps_avg = parseInt(e)), _r_();
}
var a = !1;
function o() {
_i_("3dab:09c74618");
var e = performance.now(), t = 0;
a = !1;
var i = function() {
if (_i_("3dab:37971c60"), t++, a) {
var n = performance.now(), o = Math.round(1e3 * t / (n - e));
r(o);
} else requestAnimationFrame(i);
_r_();
};
requestAnimationFrame(i), _r_();
}
var _;
function s() {
_i_("3dab:a22a736e"), _ = void 0, a = !0, _r_();
}
function d() {
_i_("3dab:a592d981"), void 0 === _ ? o() :clearTimeout(_), _ = setTimeout(s, i), _r_();
}
window.addEventListener("scroll", d, !0), B.eventEmitter.on("et-scroll-observer:scroll", d), setTimeout(function() {
_i_("3dab:1d98ccda"), e && (t.log("js_fps_avg_1m", e), B.et.goalWithValue("js_fps_avg_1m", parseInt(e))), window.removeEventListener("scroll", d, !0), B.eventEmitter.off("et-scroll-observer:scroll", d), _r_();
}, 6e4), _r_();
}), B.define("component/core/number-input-spinner", [ "component" ], function(e) {
return _i_("3dab:de14cc59"), _r_(e.extend({
init:function() {
_i_("3dab:570ccaf1");
var e = this.$el.find("[data-input]"), t = this.$el.attr("data-max-value"), i = this.$el.attr("data-min-value"), n = this.$el.find("[data-increment]"), r = this.$el.find("[data-decrement]");
n.bind("click", function(i) {
_i_("3dab:7e4b75a3");
var n = parseInt(e.val(), 10);
if (n >= t) return _r_();
n += 1, e.val(n), e.trigger("change"), _r_();
}), r.bind("click", function(t) {
_i_("3dab:d6f771b9");
var n = parseInt(e.val(), 10);
if (i >= n) return _r_();
n -= 1, e.val(n), e.trigger("change"), _r_();
}), _r_();
}
}));
}), B.define("component/villas-redirect-msg", function(e, t, i) {
_i_("3dab:9ee4afde");
var n = e("component"), r = B.env.b_is_tdot_traffic ? B.lightbox :e("lightbox"), a = e("jquery");
i.exports = n.extend({
init:function() {
_i_("3dab:40b89c41"), a.cookie("villas_redirect_msg_seen") || (r.show(a(".villas-redirect-msg"), {
opacity:.7,
autoWidth:!0
}), a.cookie("villas_redirect_msg_seen", 1, {
path:"/"
})), _r_();
}
}), _r_();
}), B.define("detect-device", function() {
"use strict";
_i_("3dab:7e125f67");
var e = window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent :null;
if (!e) return _r_("Unknown");
return e = e.indexOf("Xbox") > -1 && e.indexOf("Xbox One") > -1 ? "Xbox One" :e.indexOf("Xbox") > -1 ? "Xbox 360" :e.indexOf("Playstation 4") > -1 ? "PlayStation 4" :e.indexOf("Playstation 3") > -1 ? "PlayStation 3" :e.indexOf("Nintendo WiiU") > -1 || e.indexOf("NintendoBrowser") > -1 ? "Nintendo" :e.indexOf("SMART-TV") > -1 || e.indexOf("SmartTV") > -1 || e.indexOf("Opera TV Store") > -1 || e.indexOf("PhilipsTV") > -1 ? "Smart TV" :e.indexOf("GoogleTV") > -1 ? "Google TV" :e.indexOf("AppleTV") > -1 ? "Apple TV" :e.indexOf("Android") > -1 && e.indexOf("SM-G900P") > -1 ? "Galaxy S5" :e.indexOf("Android") > -1 && e.indexOf("Nexus 5") > -1 ? "Nexus 5" :e.indexOf("Android") > -1 && e.indexOf("Nexus 6") > -1 ? "Nexus 6" :e.indexOf("Android") > -1 && e.indexOf("Nexus 7") > -1 ? "Nexus 7" :e.indexOf("Android") > -1 && e.indexOf("Nexus 10") > -1 ? "Nexus 10" :e.indexOf("Android") > -1 ? "Android" :e.indexOf("BlackBerry") > -1 ? "BlackBerry" :e.indexOf("KFAPWI") > -1 ? "Kindle Fire" :e.indexOf("NOKIA") > -1 || e.indexOf("NokiaBrowser") > -1 ? "Nokia" :e.indexOf("Windows Phone") > -1 ? "Windows Phone" :e.indexOf("MSIE") > -1 ? "Internet Explorer" :e.indexOf("Opera Mini") > -1 ? "Opera Mini" :e.indexOf("iPhone") > -1 ? "iPhone" :e.indexOf("iPod") > -1 ? "iPod" :e.indexOf("iPad") > -1 ? "iPad" :"Unknown", _r_(e);
}), B.define("screen-info", function() {
"use strict";
_i_("3dab:fc9bd6a4");
var e = window && window.screen ? window.screen :null;
if (!e) return _r_(null);
var t = {
height:e.height,
width:e.width
};
return t.orientation = t.height < t.width ? "landscape" :"portrait", window.devicePixelRatio && (t.pixelDensity = window.devicePixelRatio, t.retinaDisplay = t.pixelDensity > 1 ? !0 :!1), window.navigator && window.navigator.maxTouchPoints && (t.max_touch_points = window.navigator.maxTouchPoints), _r_(t);
}), B.when({
events:"ready",
condition:B.env.fe_enable_login_with_phone_number || B.env.fe_enable_signup_with_phone_number
}).run(function() {
_i_("3dab:fe88891f");
var e, t, i = !1;
booking.phoneNumberLogin = booking.phoneNumberLogin || {}, booking.phoneNumberLogin.checkSmsVerificationCode = function(e) {
if (_i_("3dab:bda09ba8"), e && e.onBeforeSend && e.onBeforeSend(), i) return _r_(!1);
i = !0, $.ajax({
method:"POST",
url:"/confirm_phone_number",
data:{
phone:e.phoneNumber,
country_code:"cn",
confirmation_code:e.verificationCode,
origin:B.env.b_action,
is_signup:e.is_signup || !0
},
success:function(t) {
_i_("3dab:784d34a9"), t && t.error && e.error && (i = !1, e.error(parseInt(t.error))), 1 === t.success && e.success && e.success(t), _r_();
},
error:function(t) {
_i_("3dab:c44ce699"), i = !1, t && e.error(parseInt(t.error)), _r_();
}
}), _r_();
}, booking.phoneNumberLogin.sendVerificationSms = function(e) {
_i_("3dab:e4bc3d72"), e && e.onBeforeSend && e.onBeforeSend(), $.ajax({
method:"POST",
url:"/send_verification_sms",
data:{
phone:e.phoneNumber,
country_code:"cn",
origin:B.env.b_action,
is_signup:e.is_signup || "true"
},
success:function(t) {
_i_("3dab:952d6562"), t && t.error && e.error && e.error(parseInt(t.error)), 1 === t.success && e.success && e.success(t), _r_();
},
error:function(t) {
_i_("3dab:6bdee4e5"), t && e.error(parseInt(t.error)), _r_();
}
}), _r_();
}, booking.phoneNumberLogin.getPassword = function() {
return _i_("3dab:a1c06a8e"), _r_(e);
}, booking.phoneNumberLogin.setPassword = function(t) {
_i_("3dab:fa11046d"), e = t, _r_();
}, booking.phoneNumberLogin.getPhone = function() {
return _i_("3dab:ae03474d"), _r_(t);
}, booking.phoneNumberLogin.setPhone = function(e) {
_i_("3dab:60205601"), t = e, _r_();
}, _r_();
}), function() {
_i_("3dab:487b9cc1"), B.env.fe_m_async_login && B.env.fe_enable_login_with_phone_number ? B.env.async_signin.init_cbs.push(function() {
_i_("3dab:d6c2423b"), e(B.require), _r_();
}) :B.when({
events:"ready",
condition:B.env.fe_enable_login_with_phone_number
}).run(e);
function e(e) {
_i_("3dab:cec541e1");
var t, i, n = e("jquery"), r = n(".js-send_verification_code"), a = n(".js-wait_resend_verification_code"), o = n(".js-resend_cta_countdown_number"), _ = n(".js-phone_error_message"), s = n(".user_access_menu");
if ("mdot" === B.env.b_site_type && !n(".m-user-access-menu").length) return _r_();
function d() {
_i_("3dab:d9e6bb18"), clearInterval(i), r.html(r.attr("data-resend-copy")), r.removeClass("g-hidden"), a.addClass("g-hidden"), _r_();
}
function c(e) {
_i_("3dab:1dd6c1d6"), B.env.fe_run_enable_book_with_phone && B.env.b_stage && 2 === B.env.b_stage && B.et.customGoal("MKMBYcWNOHfKXNDBae", 3), d(), -1 === e ? n(".js-phone_generic_problem").removeClass("g-hidden") :-2 === e ? n(".js-phone_already_confirmed").removeClass("g-hidden") :-3 === e ? n(".js-phone_code_missing").removeClass("g-hidden") :-4 === e ? n(".js-phone_generic_problem").removeClass("g-hidden") :-5 === e ? n(".js-phone_generic_problem").removeClass("g-hidden") :-6 === e && n(".js-phone_code_wrong").removeClass("g-hidden"), n(".user_access_verify_phone_menu .form-loading").hide(), _r_();
}
function l() {
_i_("3dab:45a60b70"), t = 60, o.html(t), i = setInterval(function() {
_i_("3dab:5e46e6e3"), t--, 0 === t ? d() :o.html(t), _r_();
}, 1e3), _r_();
}
function u() {
_i_("3dab:524b91de"), booking.phoneNumberLogin.sendVerificationSms({
onBeforeSend:function() {
_i_("3dab:d0de74d9"), _.addClass("g-hidden"), r.addClass("g-hidden"), a.removeClass("g-hidden"), l(), _r_();
},
phoneNumber:booking.phoneNumberLogin.getPhone() || n("#phone").val(),
error:c,
success:function(e) {
_i_("3dab:bcccb682"), n(".js-verify_phone_number_success_send").removeClass("g-hidden"), _r_();
}
}), _r_();
}
r.on("click", function(e) {
_i_("3dab:13d5ae6a"), e.preventDefault(), n(this).attr("data-add-phone-to-account") ? n.ajax({
url:B.env.b_secure_domain + "/user_settings?aid=" + encodeURIComponent(B.env.b_aid) + "&stype=" + encodeURIComponent(B.env.b_site_type_id) + "&lang=" + encodeURIComponent(B.env.b_lang_for_url),
dataType:"json",
type:"post",
data:JSON.stringify({
phone:n("#phone").val()
}),
success:function(e) {
_i_("3dab:b0ed8bb9"), "ok" === e.status && u(), _r_();
},
error:function(e) {}
}) :u(), _r_();
}), n(".js-verify_phone_confirmation_code").on("keyup", function(e) {
_i_("3dab:abb81a07"), n(this).val().length > 5 && (booking.phoneNumberLogin.getPhone() || n("#phone").length && n("#phone").val().length) ? n(".js-send_verification_code_submit").removeClass("b-button_disabled").removeAttr("disabled") :n(".js-send_verification_code_submit").addClass("b-button_disabled").attr("disabled", "disabled"), _r_();
}), n(".js-verify_phone_form").on("submit", function(e) {
_i_("3dab:e2f3247c"), e.preventDefault(), booking.phoneNumberLogin.checkSmsVerificationCode({
onBeforeSend:function() {
_i_("3dab:37fb27a4"), _.addClass("g-hidden"), n(".user_access_verify_phone_menu .form-loading").show(), _r_();
},
phoneNumber:booking.phoneNumberLogin.getPhone(),
verificationCode:n(".js-verify_phone_confirmation_code").val(),
error:c,
success:function() {
_i_("3dab:1897d111"), n(".js-user-access-form--signin input[name=username]").val(booking.phoneNumberLogin.getPhone()), n(".js-user-access-form--signin input[name=password]").val(booking.phoneNumberLogin.getPassword()), "china_mobile_campaign" === B.env.b_action && (n(".js-suppress_refresh").val(0), n(".js-no_login_after_signup").val(0), n(".js-no_redirect").val(0)), n(".js-user-access-form--signin").submit(), _r_();
}
}), _r_();
}), n(".js-phone_number_login_close").on("click", function(e) {
_i_("3dab:b3529247"), n(".form-section", s).addClass("form-hidden-section").removeClass("form-shown-section"), n(".user_access_signup_menu").removeClass("form-hidden-section").addClass("form-shown-section"), n('[name="confirmation_code"]').val(""), n('[name="password"]').val(""), n(".form-loading").hide(), _r_();
}), n(".js-reset_password_by_phone_form").on("submit", function(e) {
_i_("3dab:96337b6e"), e.preventDefault(), window.location = "" + B.env.b_secure_domain + "/login" + B.env.b_query_params_with_lang + "&reset_hash=" + n(".js-reset_by_phone_hash").val() + "&op=changepw&fbaddpw=0&go_back_url=https%3A%2F%2Fsecure.booking.com%2Fmydashboard." + B.env.b_selected_language + ".html", _r_();
}), booking.phoneNumberLogin && (booking.phoneNumberLogin.desktop = {}, booking.phoneNumberLogin.desktop.showLightbox = function(e) {
_i_("3dab:62946b6d"), n(".js-verify_phone_number").text(booking.phoneNumberLogin.getPhone()), n(".form-section", s).addClass("form-hidden-section").removeClass("form-shown-section"), "verify" === e ? n(".user_access_verify_phone_menu", s).removeClass("form-hidden-section").addClass("form-shown-section") :"reminder-sent-mobile" === e && n(".reset_password_by_phone_sent", s).removeClass("form-hidden-section").addClass("form-shown-section"), _r_();
}), _r_();
}
_r_();
}(), B.define("component/china_coupon/timestampFormat", [ "component" ], function(e) {
return _i_("3dab:fec7603d"), _r_(e.extend({
init:function() {
_i_("3dab:48b35afe");
var e = this, t = e.getTimestamp(), i = e.formatTimestamp(t);
e.printFormattedTime(i), _r_();
},
getTimestamp:function() {
return _i_("3dab:a2192396"), _r_(1e3 * this.$el.data("unix-timestamp"));
},
formatTimestamp:function(e) {
_i_("3dab:89e8ec3e");
var t = new Date(e);
return _r_(t.getFullYear() + "年" + (t.getMonth() + 1) + "月" + t.getDate() + "日");
},
printFormattedTime:function(e) {
_i_("3dab:531e704b"), this.$el.text(e), _r_();
}
}));
}), B.define("component/china_coupon/remainingDaysCalculator", [ "component" ], function(e) {
return _i_("3dab:f76e831e"), _r_(e.extend({
init:function() {
_i_("3dab:751ae170");
var e = this, t = e.getTimestamp(), i = e.calculateRemainingDays(t);
e.printRemainingDays(i), _r_();
},
getTimestamp:function() {
return _i_("3dab:a21923961"), _r_(1e3 * this.$el.data("unix-timestamp"));
},
calculateRemainingDays:function(e) {
_i_("3dab:3a5d9b12");
var t = new Date().getTime(), i = new Date(e).getTime(), n = Math.ceil((i - t) / 864e5);
return _r_(n);
},
printRemainingDays:function(e) {
_i_("3dab:bdb2dd84"), this.$el.text(e), _r_();
}
}));
}), B.define("component/china_coupon/promotion_banner", [ "component", "jquery" ], function(e, t) {
_i_("3dab:5e19609f");
var i = t(".ccp__promotion_banner"), n = t(".ccp__pb__btn_toggle"), r = "ccp__promotion_banner--collapsed", a = "ccp__promotion_banner--hidden";
return _r_(e.extend({
init:function() {
_i_("3dab:a704e058");
var e = this;
e.addEventListeners(), t.cookie("ccp__pb__collapsed") ? i.addClass(r) :i.removeClass(r), i.removeClass(a), _r_();
},
addEventListeners:function() {
_i_("3dab:42686fe4");
var e = this;
n.on("click", function() {
_i_("3dab:b54c4e62"), e.toggleBanner(), _r_();
}), _r_();
},
toggleBanner:function() {
_i_("3dab:83673429"), i.hasClass(r) ? (i.removeClass(r), t.cookie("ccp__pb__collapsed", "", {
expires:-1,
path:"/"
})) :(i.addClass(r), t.cookie("ccp__pb__collapsed", 1, {
expires:1,
path:"/"
})), _r_();
}
}));
}), B.define("component/china_coupon/get_your_coupon_popup", [ "component", "jquery", "server-data" ], function(e, t, i) {
return _i_("3dab:4c132aeb"), _r_(e.extend({
init:function() {
_i_("3dab:0f3a18af");
var e = this;
e.$btnClose = e.$el.find(".ccp__gycp__btn_close"), e.$popup = e.$el, e.ticketId = e.$el.data("ticket-id"), e.addEventListeners(), t.cookie("ccp__gycp__seen__" + e.ticketId) || e.openPopup(), _r_();
},
addEventListeners:function() {
_i_("3dab:ee9e1db6");
var e = this;
e.$btnClose.on("click", function() {
_i_("3dab:ec273aa7"), e.closePopup(), _r_();
}), t(document).keyup(function(t) {
_i_("3dab:b2983719"), 27 == t.keyCode && e.closePopup(), _r_();
}), _r_();
},
openPopup:function() {
_i_("3dab:a2628d50");
var e = this;
e.$popup.removeClass("g-hidden").addClass("ccp__get_your_coupon_popup--opened"), t.cookie("ccp__gycp__seen__" + e.ticketId, 1, {
expires:365,
path:"/",
domain:i.b_domain_end
}), _r_();
},
closePopup:function() {
_i_("3dab:016e523f");
var e = this;
e.$popup.addClass("g-hidden").removeClass("ccp__get_your_coupon_popup--opened"), _r_();
}
}));
}), B.define("async-css-style", function(e, t, i) {
"use strict";
_i_("3dab:93d289cc");
var n = e("promise"), r = window.document;
function a(e) {
if (_i_("3dab:957431ab"), "object" != typeof e) throw new Error("async-css: .load() expects options object");
var t = {
href:"",
media:"all",
after:""
};
if (e = Object.assign({}, t, e), e.href = e.href || e.path, "string" != typeof e.href || 0 === e.href.length) throw new Error("async-css: href or path should be defined.");
return _r_(o(e.href));
}
function o(e) {
return _i_("3dab:9c8fd8f1"), _r_(new n(function(t, i) {
_i_("3dab:d365b147"), _(e, function(e) {
_i_("3dab:b321ca81");
var n, r = s();
switch (e.status) {
case 200:
n = document.createElement("style"), n.innerHTML = e.responseText, r.parentNode.insertBefore(n, r.nextSibling), t();
break;

default:
i();
}
_r_();
}), _r_();
}));
}
function _(e, t) {
_i_("3dab:64bbf2ed");
var i = new XMLHttpRequest();
i.open("GET", e), i.onreadystatechange = function() {
_i_("3dab:40d64557"), i.readyState === XMLHttpRequest.DONE && t(i), _r_();
}, i.send(), _r_();
}
function s(e) {
_i_("3dab:e7129ae6");
var t = r.getElementsByTagName("head")[0], i = (r.body || t).childNodes, n = i[i.length - 1];
return _r_(n);
}
t.load = a, _r_();
}), B.define("async-css-link", function(e, t, i) {
"use strict";
_i_("3dab:96c8dfd5");
var n = e("promise"), r = window.document;
function a(e) {
if (_i_("3dab:2c8ed0e8"), "object" != typeof e) throw new Error("async-css: .load() expects options object");
var t = {
href:"",
media:"all",
after:""
};
if (e = Object.assign({}, t, e), e.href = e.href || e.path, "string" != typeof e.href || 0 === e.href.length) throw new Error("async-css: href or path should be defined.");
var i = _(e.after), n = c(e.href);
return l(function() {
_i_("3dab:cbb52693"), i.parentNode.insertBefore(n, i.nextSibling), _r_();
}), _r_(o(n, e));
}
function o(e, t) {
return _i_("3dab:63a16c21"), _r_(new n(function(i, n) {
_i_("3dab:5f729357"), s(e, t, function() {
_i_("3dab:099fe1d6"), i(), _r_();
}, function() {
_i_("3dab:d47bd0fa"), n(), _r_();
}), _r_();
}));
}
function _(e) {
_i_("3dab:7811a243");
var t = r.getElementsByTagName("head")[0], i = (r.body || t).childNodes, n = i[i.length - 1];
return "main" === e && "undefined" != typeof t && (n = d(n, t)), _r_(n);
}
function s(e, t, i, n) {
_i_("3dab:d8e74345"), e.addEventListener && (e.addEventListener("load", i), e.addEventListener("error", n)), e.attachEvent && (e.attachEvent("onload", i), e.attachEvent("onerror", n)), _r_();
}
function d(e, t) {
_i_("3dab:88118108");
for (var i = t.getElementsByTagName("link"), n = 0; n < i.length; n++) if ("1" === i[n].getAttribute("data-main-css")) return _r_(i[n]);
return _r_(e);
}
function c(e) {
_i_("3dab:851d86ba");
var t = r.createElement("link");
return t.rel = "stylesheet", t.href = e, _r_(t);
}
function l(e) {
if (_i_("3dab:47b0dd81"), r.body) return _r_(e());
window.setTimeout(function() {
_i_("3dab:7962f8f0"), l(e), _r_();
}, 100), _r_();
}
t.load = a, _r_();
}), B.define("async-css", function(e, t, i) {
"use strict";
_i_("3dab:9f8987c6"), "isApplicationInstalled" in navigator ? t.load = e("async-css-style").load :t.load = e("async-css-link").load, _r_();
}), B.define("loadscript", function(e, t, i) {
_i_("3dab:d47addb3");
var n = e("promise");
function r(e) {
return _i_("3dab:97f97f7c"), _r_(new n(function(t, i) {
_i_("3dab:92422bf0");
var n = document.createElement("script");
n.onload = n.onreadystatechange = function(e, i) {
_i_("3dab:280f4643"), (i || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, i || t()), _r_();
}, n.onerror = i, n.type = "text/javascript", n.src = e;
var r = document.getElementsByTagName("script")[0];
r.parentNode.insertBefore(n, r), _r_();
}));
}
function a(e, t) {
_i_("3dab:75dd9346");
var i = a._urls[e] || e;
if (!i) throw new Error("Must provide a URL.");
if (i === e && -1 === i.indexOf("/")) throw new Error('"' + i + "\" doesn't seem like a script URL.");
return _r_(r(i, t));
}
a._urls = {}, a.add = function(e, t) {
_i_("3dab:9f107474");
var i = a._urls;
$.isPlainObject(e) ? $.extend(i, e) :i[name] = t, _r_();
}, i.exports = a, _r_();
}), B.define("async-loader", function(e, t, i) {
"use strict";
_i_("3dab:a15e0d77");
var n = e("loadscript"), r = e("async-css"), a = e("promise"), o = {}, _ = B.env || {};
function s(e) {
if (_i_("3dab:a52750db"), "object" != typeof e) throw new Error("async-loader: load() expects an object!");
var t = Object.keys(e).map(function(t) {
_i_("3dab:b97aa9bc");
var i = e[t], n = i;
if ("string" == typeof n && n.length > 0 && (i = {
path:n
}), "object" != typeof i || !i.hasOwnProperty("path")) throw new Error("async-loader: .load() invalid argument!");
return _r_(c(t, i));
});
return _r_(a.all(t));
}
function d(e) {
_i_("3dab:5ab4a82f");
var t;
if (!_.hasOwnProperty("asyncLoader") || !_.asyncLoader.hasOwnProperty(e)) throw new Error("async-loader: could not find file " + e + " in B.env.asyncLoader");
if (t = _.asyncLoader[e], "string" != typeof t || 0 === t.length) throw new Error("async-loader: invalid path for " + e);
return _r_(t);
}
function c(e, t) {
_i_("3dab:ee19ee6e");
var i = t.path = d(t.path);
return o[i] || (o[i] = l(e, t)), _r_(o[i]);
}
function l(e, t) {
_i_("3dab:b8123876");
var i;
switch (e) {
case "css":
return i = r.load(t), i["catch"](function() {
_i_("3dab:82ff7fe4"), B.squeak && B.squeak("OdeFAAOZOGaDIARMGZYfNXMDDBXe"), _r_();
}), _r_(i);

case "js":
return i = n(t.path), i["catch"](function() {
_i_("3dab:65eb6ffd"), B.squeak && B.squeak("OdeFAAOZOGaDIARMGZGTXMDDBXe"), _r_();
}), _r_(i);

default:
throw new Error("async-loader: file type [" + e + "] not supported!");
}
_r_();
}
function u(e) {
if (_i_("3dab:111db707"), "string" == typeof e && e.length > 0 && (e = {
path:e
}), "object" != typeof e || !("path" in e)) throw new Error("async-loader: .css() invalid argument!");
return _r_(c("css", e));
}
function f(e) {
if (_i_("3dab:b4ea448e"), "string" == typeof e && e.length > 0 && (e = {
path:e
}), "object" != typeof e || !("path" in e)) throw new Error("async-loader: .js() invalid argument!");
return _r_(c("js", e));
}
function h(e) {
if (_i_("3dab:016e0e69"), "string" != typeof e || 0 === e.length) throw new Error("async-loader: registerPath() invalid argument");
if (!_.hasOwnProperty("asyncLoader")) throw new Error("async-loader: B.env.asyncLoader is not defined");
return _.asyncLoader.hasOwnProperty(e) || (_.asyncLoader[e] = e), _r_(e);
}
t.load = s, t.css = u, t.js = f, t.registerPath = h, _r_();
}), B.define("defaultsjs:modules/lib/assistant/overview/overview.js", function(e, t, i) {
_i_("3dab:443c5535");
var n, r, a, o = e("jquery"), _ = e("promise"), s = B.env.b_messaging_assistant_overview_url || "/get_ba_overview?include_cancelled_bookings=1", d = B.env.b_messaging_url || "/messages2.html", c = 6e4, l = [];
function u(e) {
return _i_("3dab:1fbe617e"), a = Object.assign({}, e, {
b_messaging_url:d,
reservations:e.reservations.map(function(e) {
return _i_("3dab:41982a96"), _r_(Object.assign({}, e, {
fe_messaging_url:d + ";bn=" + e.reservation_id
}));
})
}), _r_(a);
}
function f(e) {
return _i_("3dab:a669c065"), n = null, _r_(e);
}
function h(e) {
return _i_("3dab:34ad3a57"), l.length && (r = window.setTimeout(p, c)), _r_(e);
}
function b(e) {
return _i_("3dab:4dde841c"), l.forEach(function(t) {
_i_("3dab:ddc8d107"), t(e), _r_();
}), _r_(e);
}
function p() {
return _i_("3dab:91998a9d"), n ? _r_(n) :(n = _.resolve(o.getJSON(s)).then(u).then(f).then(h).then(b)["catch"](function(e) {
return _i_("3dab:e54a4072"), _r_(_.reject("failed to fetch overview"));
}), _r_(n));
}
function g(e) {
_i_("3dab:28e3e0ae");
var t = l.length;
return l.push(e), 1 === l.length && 0 === t && p(), a && e(a), _r_(function() {
_i_("3dab:90525fcb");
for (var t = 0; t < l.length; t++) l[t] === e && (l.splice(t, 1), l.length || window.clearTimeout(r));
_r_();
});
}
i.exports = {
subscribe:g,
fetchOnce:p
}, _r_();
}), B.define("assistant/tracker", function(e, t, i) {
_i_("3dab:7417a5cb");
var n = e("ga-tracker-base").trackEvent, r = "Messaging V2", a = {
"bk_exit menu":"BK Exit Menu",
bk_wall:"BK Wall",
entry_point:"Entry Point",
welcome_screen:"Welcome screen"
};
i.exports.actions = a, i.exports.trackAssistantEvent = n.bind(null, r), i.exports.trackAssistantEntryPoint = n.bind(null, r, a.entry_point), i.exports.trackAssistantWelcomeScreen = n.bind(null, r, a.welcome_screen), _r_();
}), B.define("component/assistant/entrypoint", function(e, t, i) {
_i_("3dab:eb0be40f");
var n = e("component"), r = e("jquery"), a = e("defaultsjs:modules/lib/assistant/overview/overview.js").subscribe, o = e("async-loader"), _ = "assistant-entry-point_has-unread", s = ".assistant-entry-point__text", d = "assistant-modal-wrapper";
B.env.b_assistant_sliding_panel && (d += " assistant-header-dark");
var c;
function l(t) {
_i_("3dab:fcf56960");
var i = e("lightbox"), n = {
customWrapperClassName:d,
preventBodyScroll:!0,
topMargin:50,
bottomMargin:50
};
c = r(B.jstmpl("assistant_modal").render(t)), i.show(c, n), _r_();
}
function u(e) {
if (_i_("3dab:5356d22a"), !e) return _r_(null);
if ("string" != typeof e) return _r_(null);
var t = /[;&]bn=(\d*)/, i = e.match(t);
return _r_(i && i[1] ? i[1] :null);
}
function f(e) {
_i_("3dab:526b1548");
var t = e.attr("data-messaging-url") || e.attr("href");
return _r_({
url:t,
privacyPolicyUrl:e.attr("data-privacy-policy-url"),
messengerUrl:e.attr("data-messenger-link"),
text:e.find(s).text(),
modal:Boolean(e.attr("data-messages-is-modal")),
reservations:[],
selectedReservationId:u(t),
consistentText:Boolean(e.attr("data-consistent-text"))
});
}
function h(e) {
_i_("3dab:0907e173");
var t = e.reservations, i = e.selectedReservationId;
if (!i) return _r_(t.reduce(function(e, t) {
return _i_("3dab:3bd776bf"), Boolean(t.has_unread) && (e += 1), _r_(e);
}, 0));
for (var n = 0; n < t.length; n++) if (String(t[n].reservation_id) === i) return _r_(Boolean(t[n].has_unread));
return _r_(!1);
}
function b(e) {
if (_i_("3dab:9ef8275f"), e.consistentText) return _r_(e.text);
var t = e.reservations, i = e.selectedReservationId, n = !1;
if (i) for (var r = 0; r < t.length; r++) String(t[r].reservation_id) === i && (n = Boolean(t[r].has_unread));
return _r_(n ? B.jstmpl.translations("msg_web_entry_new_messages") :e.text || B.jstmpl.translations("msg_www_ask_a_question"));
}
function p(e) {
_i_("3dab:a3028cdb");
var t = {
url:e.url,
text:b(e),
unread:h(e)
};
return _r_(t);
}
function g(e) {
_i_("3dab:6f8e0fd9");
var t = {
b_messaging_url:e.url,
privacy_policy_url:this.privacyPolicyUrl,
messenger_link:this.messengerUrl
};
return _r_(t);
}
function m(e, t) {
_i_("3dab:ba350e66"), e.find(s).text(t.text), e.toggleClass(_, t.unread), e.attr("href", t.url), _r_();
}
i.exports = n.extend({
init:function() {
_i_("3dab:d8ea7c7c"), o.css("async_assistant_entrypoint_css").then(function() {
_i_("3dab:aef74673"), r("#assistant-sliding-panel-wrapper").show(), _r_();
});
var t = f(this.$el);
this._defaultText = t.text, a(function(e) {
_i_("3dab:33fec92d"), t = Object.assign({}, t, {
reservations:e.reservations
}), m(this.$el, p(t)), _r_();
}.bind(this)), m(this.$el, p(t)), this.$el.on("click", function(i) {
_i_("3dab:49ce3c56"), h(t) && B.et.customGoal("bKeHAcCOSZMSMGGHSWedNTUQODWe", 1), "www" === B.env.b_site_type && B.et.stage("bKeHAcCOJNVGeZIXcYQC", 1);
var n = g(t);
if (t.modal) if (i.preventDefault(), r(".user_center_popover").hide(), B.env.b_assistant_sliding_panel) {
var a = e("sliding-panel-model"), o = r("#assistant-panel--content"), _ = a.get("assistant-panel"), s = r(B.jstmpl("assistant_modal").render(n));
_.on("sliding-panel/hide", function() {
_i_("3dab:c50597ec"), o.html(""), _r_();
}), o.html(s), _.show();
} else l(n);
_r_();
}), B.et.track("bKeHAcCOSZMSMGGHSWedNTUQODWe") && window.addEventListener("message", function(e) {
if (_i_("3dab:916f3c1d"), e.data && "BA_MESSAGES_READ" === e.data.type) {
var i = e.data.reservationId;
if (null === i) t.reservations.forEach(function(e) {
_i_("3dab:10e98708"), e.has_unread = !1, _r_();
}), m(this.$el, p(t)); else if (t.selectedReservationId == i) {
var n = t.reservations.find(function(e) {
return _i_("3dab:4f600c03"), _r_(e.reservation_id == i);
});
n && (n.has_unread = !1, m(this.$el, p(t)));
}
}
_r_();
}.bind(this), !1), _r_();
}
}), _r_();
}), B.define("component/assistant/modal-entrypoint", function(e, t, i) {
_i_("3dab:7c7e3d38");
var n = e("component/assistant/entrypoint"), r = e("lightbox"), a = e("jquery"), o = e("assistant/tracker").trackAssistantWelcomeScreen, _ = {
customWrapperClassName:"assistant-modal-wrapper",
preventBodyScroll:!0,
topMargin:50,
bottomMargin:50
};
i.exports = n.extend({
renderViews:function() {
_i_("3dab:f06acf8c"), this.$modal || (this.$modal = a(B.jstmpl("assistant_modal").render({
b_messaging_url:this._url,
privacy_policy_url:this._privacyPolicyUrl,
messenger_link:this._messenger_link
}))), _r_();
},
showModal:function(e) {
_i_("3dab:fee7159a"), this.renderViews(), this.$modal.find(".assistant-view").hide(), this.$modal.find(".assistant-view_" + e + "-screen").show(), r.show(this.$modal, _), _r_();
},
showWelcomeScreen:function(e) {
_i_("3dab:7e082f4a"), o("Shown"), this.showModal("welcome"), _r_();
},
showLoadingScreen:function() {
_i_("3dab:70701721"), this.showModal("loading"), _r_();
},
navigateToMessenger:function() {
_i_("3dab:55c0335c"), o("Assistant Chosen"), this.showModal("app"), _r_();
}
}), _r_();
}), booking.jstmpl("assistant_modal", function() {
_i_("3dab:6a5b9914");
var e = [ '\n  <div class="assistant-modal-view">\n    <div class="assistant-view assistant-view_app-screen">\n      <iframe\n        width="100%"\n        height="100%"\n        src="', '"\n        class="app-screen_iframe" frameborder="0"\n        id="assistant-iframe"></iframe>\n    </div>\n  </div>\n' ], t = [ "b_messaging_url" ];
return _r_(function(i) {
_i_("3dab:2a96cd0a1");
var n = "", r = this.fn;
return n += [ e[0], r.MC(t[0]), e[1] ].join(""), _r_(n);
});
}()), B.define("tooltip", function(e, t, i) {
_i_("3dab:d80c9601");
var n, r, a = e("event-emitter"), o = e("jquery"), _ = e("jstmpl"), s = 0, d = {}, c = {
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
}, l = {
booking:c
}, u = l.booking, f = o("body"), h = o(window), b = {
mouseenter:"mouseleave",
focus:"blur",
click:"click"
}, p = /^start|end$/i, g = /^top|bottom$/i, m = /^start|top$/i, v = /^end|bottom$/i, y = [ "top", "bottom", "start", "end", "middle" ], w = [ [ 0, 1, 2, 3 ], [ 1, 0, 2, 3 ], [ 2, 3, 0, 1 ], [ 3, 2, 0, 1 ] ], k = [ [ 2, 4, 3 ], [ 2, 4, 3 ], [ 0, 4, 1 ], [ 0, 4, 1 ] ], M = [ [ 0, 1, 2 ], [ 2, 1, 0 ], [ 0, 1, 2 ], [ 2, 1, 0 ], [ 1, 0, 2 ] ], x = function(e) {
_i_("3dab:d238e2dd");
var t;
try {
return t = new r(e), _r_(t.api);
} catch (i) {
B.debug("tooltip").error(i);
}
_r_();
}, C = function() {
return _i_("3dab:6950c261"), o.each(d, function(e, t) {
_i_("3dab:fe3bddc0"), t.hide(), _r_();
}), _r_(this);
}, E = function(e) {
return _i_("3dab:0e2940db"), _r_(d[e]);
}, T = function(e) {
return _i_("3dab:93a45711"), o.each(d, e), _r_(this);
}, S = function(e, t) {
return _i_("3dab:2a7a7dec"), l[e] = o.extend({}, c, t), _r_(this);
}, A = function(e) {
_i_("3dab:607143e4");
var t = l[e];
return t && (u = t), _r_(this);
}, N = function(e) {
return _i_("3dab:43443f13"), d[e.id] = e, _r_(this);
};
n = {
setup:x,
hideAll:C,
get:E,
each:T,
addPreset:S,
usePreset:A
}, a.extend(n), i.exports = n, r = function() {
_i_("3dab:d9c09e55");
var e = function(e) {
_i_("3dab:84fe1f5f"), this.options = e, o.isFunction(e.onBeforeInit) && e.onBeforeInit.call(this), this.processOptions(e), this.api = {
id:this.id,
$target:this.$el,
settings:this.settings,
isVisible:o.proxy(this.isVisible, this),
show:o.proxy(this.show, this),
hide:o.proxy(this.hide, this),
toggle:o.proxy(this.toggle, this),
set:o.proxy(this.set, this),
reposition:o.proxy(this.position, this),
destroy:o.proxy(this.destroy, this),
on:o.proxy(this.on, this)
}, N(this.api), this.$el.data("tooltip-instance", this.api), this.triggerEvent("init"), _r_();
};
return e.prototype.processOptions = function(e) {
_i_("3dab:d9413b5a");
var t = l[e.preset] || u, i = this.settings = o.extend({}, t, e);
if (this.id = i.id || ++s, d[this.id]) throw new Error('A tooltip with the same id "' + this.id + '" already exists.');
if (this.$el = o(i.target).first(), this.el = this.$el[0], !(i.title || i.text || i.content || i.contentTemplate || i.contentTarget)) throw new Error('No content for the tooltip. Please use any of these options: "content", "template" or "content-target".');
this.namespace = ".tooltip." + this.id, this.setupPosition(), this.setupEvents(), this.setupTriggers(), _r_();
}, e.prototype.setupTriggers = function() {
_i_("3dab:0a6481c2");
var e = this.settings.triggerShow ? this.settings.triggerShow.split(/\s+/) :[], t = this.settings.triggerHide ? this.settings.triggerHide.split(/\s+/) :[], i = !e.length && this.settings.trigger ? this.settings.trigger.split(/\s+/) :[], n = this, r = function(e) {
return _i_("3dab:99056c6b"), _r_(o.grep(e, function(t, i) {
return _i_("3dab:f6a7eba9"), _r_(i === o.inArray(t, e));
}));
};
o.each(i, function(i, n) {
_i_("3dab:dd678831");
var r;
"hover" === n && (n = "mouseenter"), r = b[n], e.push(n), r && t.push(r), _r_();
}), e = r(e), t = r(t), o.each(e, function(e, i) {
_i_("3dab:a5206c43");
var r, a = o.inArray(i, t);
r = i + n.namespace, a > -1 ? (n.$el.on(r, o.proxy(n.toggle, n)), t.splice(a, 1)) :(n.$el.on(r, o.proxy(n.show, n)), "click" == i ? n.$el.on(r, o.proxy(n._showOnClick, n)) :n.$el.on(r, o.proxy(n.show, n))), _r_();
}), o.each(t, function(e, t) {
_i_("3dab:f760cec9"), n.$el.on(t, o.proxy(n.hide, n)), _r_();
}), _r_();
}, e.prototype.setupPosition = function() {
_i_("3dab:d87eb396");
var e, t, i = this.settings.position;
if (i = i.replace(/left/g, "start"), i = i.replace(/right/g, "end"), this.settings.rtl && (i = i.replace(p, function(e) {
return _i_("3dab:aa17339f"), _r_("end" === e ? "start" :"end");
})), i = o.trim(i).split(/\s+/), e = this.placement = i[0], t = i[1], this.placementAxis = p.test(e) ? "x" :"y", p.test(t) || g.test(t) || (t = "middle"), this.alignment = t, !p.test(e) && !g.test(e)) throw new Error("The tooltip has to be aligned either on top, bottom, left or right.");
_r_();
}, e.prototype.setupEvents = function() {
_i_("3dab:747c49fd");
var e = /^on[A-Z].+/;
o.each(this.settings, o.proxy(function(t, i) {
if (_i_("3dab:e645a3f2"), !e.test(t)) return _r_();
var n = t[2].toLowerCase() + t.substring(3);
this.on("tooltip:" + n + ":" + this.id, o.proxy(i, this)), _r_();
}, this)), _r_();
}, e.prototype.addArrow = function(e, t) {
if (_i_("3dab:279769f7"), this.$tip.removeClass(this.arrowClass), !this.settings.arrow) return _r_();
var i = "tltp--" + e;
"middle" !== t && (i = i + "-" + t), this.$tip.addClass(i), this.arrowClass = i, _r_();
}, e.prototype.createTooltipNode = function() {
_i_("3dab:388725a1"), this.triggerEvent("beforeCreateTooltipNode");
var e = this.settings, t = this.$tip = o(e.wrapperTemplate);
if (e.useNewThemes) {
var i = "tltp--themified tltp--" + e.theme;
this.$tip.addClass(i);
}
var n;
return e.icon || e.image || e.title || e.text ? n = this.buildLayout(e) :e.content ? n = e.content :e.contentTemplate ? n = _(e.contentTemplate).render(e.contentTemplateData) :(n = o(e.contentTarget), n.is("script") && (n = o(n.html()))), t.find('[role="content"]').andSelf().last().append(n), t.addClass(this.settings.customClass), this.settings.animation && t.addClass(this.settings.animationClass), this.settings.insideTriggerHide && t.on(this.settings.insideTriggerHide, function() {
_i_("3dab:16cf2731"), this.api.hide(), _r_();
}.bind(this)), B.et.initAttributesTracking(t), f.append(t), this.api.$tooltip = t, this.triggerEvent("createTooltipNode"), _r_(this);
}, e.prototype.triggerByEvent = function(e, t) {
_i_("3dab:ee6019a2");
var i = this.settings.delay;
void 0 === i && (i = this.settings.triggerDelays[e.type]), clearTimeout(this.timeout), this.timeout = setTimeout(o.proxy(t, this), i), _r_();
}, e.prototype.isVisible = function() {
return _i_("3dab:d73a2d11"), _r_(this.$tip && (!this.$tip.hasClass(this.settings.hiddenClass) || this.$tip.hasClass(this.settings.visibleClass)));
}, e.prototype.triggerEvent = function(e) {
_i_("3dab:7486748d");
var t = o.Event("tooltip:" + e, {
tooltip:this.api
}), i = o.Event(t.type + ":" + this.id, {
tooltip:this.api
});
n.emit(t.type, t, this), this.$el.trigger(t), n.emit(i.type, i, this), this.$el.trigger(i), _r_();
}, e.prototype.on = function(e, t) {
return _i_("3dab:effaa1bc"), this.$el.on(e, t), _r_(this.api);
}, e.prototype.toggle = function() {
return _i_("3dab:56ad79f0"), this.isVisible() ? this.hide() :this.show(), _r_(this.api);
}, e.prototype.show = function() {
_i_("3dab:a4ce9c09");
var e = this;
if (this.hideTimer && (this.hideTimer = clearTimeout(this.hideTimer)), this.isVisible()) return _r_(this.api);
return this.triggerEvent("beforeShow"), this.$tip || (this.createTooltipNode(), this.options.keepOpen && (this.$tip.on("mouseenter", this.show.bind(this)), this.$tip.on("mouseleave", this.hide.bind(this)))), this.position(), clearTimeout(this.timeout), this.showTimer || (this.showTimer = setTimeout(function() {
_i_("3dab:4d3c3d4d"), e.$tip.removeClass(e.settings.hiddenClass), e.$tip.addClass(e.settings.visibleClass), _r_();
}, this.settings.latency)), this.settings.animation && this.$tip.css("transition") ? this.$tip.one("transitionend", o.proxy(this.triggerEvent, this, "show")) :this.triggerEvent("show"), _r_(this.api);
}, e.prototype._showOnClick = function(e) {
_i_("3dab:d1bbd554"), this.settings.preventDefaultOnClick && e.preventDefault(), this.show(), _r_();
}, e.prototype.hide = function() {
_i_("3dab:0fe73286");
var e = this;
if (this.showTimer && (this.showTimer = clearTimeout(this.showTimer)), !this.isVisible()) return _r_(this.api);
return this.triggerEvent("beforeHide"), clearTimeout(this.timeout), this.hideTimer || (this.hideTimer = setTimeout(function() {
_i_("3dab:1e0a6564"), e.$tip.addClass(e.settings.hiddenClass), e.$tip.removeClass(e.settings.visibleClass), _r_();
}, this.settings.hideLatency)), this.settings.animation && this.$tip.css("transition") ? this.$tip.one("transitionend", o.proxy(this.triggerEvent, this, "hide")) :this.triggerEvent("hide"), _r_(this.api);
}, e.prototype.position = function(e, t) {
_i_("3dab:103b7b49"), this.triggerEvent("beforePosition"), e = e || this.placement, t = t || this.alignment;
var i, n, r, a, o, _ = this.$el, s = this.$tip, d = this.buildInsideWindowFn(s.outerWidth(), s.outerHeight(), h.scrollLeft(), h.scrollTop(), h.width(), h.height()), c = y.indexOf(e), l = y.indexOf(t), u = w[c], f = M[l], b = -1;
e:for (var p = 0; 4 > p; p++) {
c = u[p], e = y[c];
for (var g = 0; 3 > g; g++) if (l = f[g], t = y[k[c][l]], i = this.calcCoords(e, t, _, s), n = d(i.left, i.top), n > b && (b = n, r = i, a = e, o = t), !this.settings.smartPositioning || 1 === n) break e;
}
if (this.coords && this.coords.left === r.left && this.coords.top === r.top) return _r_(this.api);
return this.settings.animation && this.$tip.removeClass(this.settings.animationClass), this.coords = r, s.css(r), this.addArrow(a, o), s.outerWidth(), this.settings.animation && this.$tip.addClass(this.settings.animationClass), this.triggerEvent("position"), _r_(this.api);
}, e.prototype.set = function(e, t) {
_i_("3dab:7408eb1a");
var i = {};
return "object" === o.type(e) ? i = e :i[e] = t, o.extend(this.settings, i), this.setupPosition(), this.$tip && (this.$tip.toggleClass(this.settings.animationClass, this.settings.animation), this.position()), _r_(this.api);
}, e.prototype.destroy = function() {
_i_("3dab:7d1010ea"), this.triggerEvent("beforeDestroy"), clearTimeout(this.timeout), this.$el.off(this.namespace), this.$el.removeData("tooltip-instance"), this.$tip && this.$tip.remove(), delete d[this.id], _r_();
}, e.prototype.calcCoords = function(e, t, i, n) {
_i_("3dab:e62a98ed");
var r = i.offset(), a = {}, o = "top", _ = "outerHeight", s = "left", d = "outerWidth";
return p.test(e) && (o = "left", _ = "outerWidth", s = "top", d = "outerHeight"), m.test(e) ? a[o] = r[o] - n[_]() :a[o] = r[o] + i[_](), m.test(t) ? a[s] = r[s] :v.test(t) ? a[s] = r[s] + i[d]() - n[d]() :a[s] = r[s] + i[d]() / 2 - n[d]() / 2, _r_(a);
}, e.prototype.buildInsideWindowFn = function(e, t, i, n, r, a) {
_i_("3dab:3d9dfcae");
var o = i + r, _ = n + a;
return _r_(function(r, a) {
_i_("3dab:ff71b79b");
var s = r + e, d = a + t, c = Math.max(i, r), l = Math.min(o, s), u = Math.max(n, a), f = Math.min(_, d), h = (s - r) * (d - a), b = Math.max(0, l - c) * Math.max(0, f - u);
return _r_(b / h);
});
}, e.prototype.buildLayout = function(e) {
_i_("3dab:fc967619");
var t = o(e.innerTemplate), i = o('[role="image"]', t);
o('[role="header"]', t).append(e.title).filter(":empty").remove(), o('[role="body"]', t).andSelf().last().append(e.text).filter(":empty").remove(), e.image ? i.append(o('<img src="' + e.image + '">')) :e.icon ? i.append(o('<i class="bicon bicon-' + e.icon + '"></i>')) :i.remove();
var n = new RegExp("(<script type=['\"]track_copy['\"] data-hash=['\"](\\w+)['\"]></script>)"), r = n.exec(e.text), a = r && r[2];
return a && B.et.stage(a, 1), _r_(t);
}, _r_(e);
}(), _r_();
}), B.define("component/tooltip", function(e, t, i) {
_i_("3dab:afc240e6");
var n = e("component"), r = e("jquery"), a = e("tooltip"), o = function(e) {
_i_("3dab:bcfa41f3");
var t = {}, i = e.data();
return r.each(i, function(e, i) {
_i_("3dab:2ec6db28");
var n;
if (e.length < 8 || 0 !== e.indexOf("tooltip")) return _r_();
e = e.substring(7), n = e[0].toLowerCase() + e.slice(1), t[n] = i, _r_();
}), t.target = e, _r_(t);
}, _ = function() {
_i_("3dab:f63c485a");
try {
if (!B.env.fe_unified_tooltip) {
var e = o(this.$el);
this.tooltip = a.setup(e);
}
} catch (t) {
B.reportError("[Tooltip] Error while creating tooltip instance.", t);
}
_r_();
};
i.exports = n.extend({
init:_
}), _r_();
}), B.define("component/assistant/overview", function(e, t, i) {
_i_("3dab:eb3b8e84");
var n = e("component"), r = e("defaultsjs:modules/lib/assistant/overview/overview.js").subscribe, a = e("async-loader"), o = e("et"), _ = {
ASSISTANT_WELCOME_INTERACTED:"assistant_welcome_interacted",
ASSISTANT_WELCOME_VISITED:"assistant_welcome_visited",
ASSISTANT_ENTRY_POINT_INTERACTED:"assistant_entry_point_interacted",
ASSISTANT_ENTRY_POINT_VISITED:"assistant_entry_point_visited",
ASSISTANT_THREADS_INTERACTED:"assistant_threads_interacted",
ASSISTANT_THREADS_VISITED:"assistant_threads_visited"
};
i.exports = n.extend({
init:function() {
_i_("3dab:8412e5df");
var t = this;
t.cachedData = null, t.tracked = !1, t.rendered = !1, a.css("async_assistant_entrypoint_css").then(function() {
_i_("3dab:9f4a4c94"), $("#assistant-sliding-panel-wrapper").show(), _r_();
}), r(t.render.bind(t)), B.eventNames && B.eventNames.TABNAV_OPENED && B.events.on(B.eventNames.TABNAV_OPENED, function(e) {
_i_("3dab:299c13b1"), e && e.target && "assistant" === e.target && (o.goal(_.ASSISTANT_THREADS_VISITED), o.goal(_.ASSISTANT_ENTRY_POINT_VISITED)), _r_();
}), window.addEventListener("message", function(e) {
if (_i_("3dab:49c9ef05"), e.data && "BA_MESSAGES_READ" === e.data.type && e.data.reservationId && t.cachedData) {
var i = e.data.reservationId, n = !1;
t.cachedData.reservations.forEach(function(e) {
_i_("3dab:da27fc6f"), e.reservation_id == i && (e.has_unread = !1, n = !0), _r_();
}), n && t.render(t.cachedData);
}
_r_();
}, !1), $(document).on("click", ".user_center_option.ba-notifications .popover_trigger", function() {
_i_("3dab:21576944"), !t.tracked && t.rendered && t.trackOnShow(), _r_();
}), $(document).on("click", ".ba-welcome-screen .go-to-assistant", function() {
_i_("3dab:0b9a6336"), "www" === B.env.b_site_type && e("browser-storage-handler").addSessionValue("ba-skip-welcome-screen", 1), $(".ba-tab").css({
height:$(".ba-welcome-screen").height()
}), $(".ba-tab .ba-welcome-screen").fadeOut(150, function() {
_i_("3dab:02c31953"), t.renderMenu(t.cachedData), o.goal(_.ASSISTANT_ENTRY_POINT_INTERACTED), o.goal(_.ASSISTANT_THREADS_VISITED), _r_();
}), _r_();
}), $(document).on("click", ".ba-welcome-screen button, .ba-welcome-screen a", function() {
_i_("3dab:fe06f898"), o.goal(_.ASSISTANT_WELCOME_INTERACTED), _r_();
}), _r_();
},
renderUnreadCounter:function(e) {
_i_("3dab:aefe0968");
var t = e.reservations.reduce(function(e, t) {
return _i_("3dab:32de8cac"), t.has_unread && e++, _r_(e);
}, 0), i = $(".assistant_bicon__overlay");
t ? (i.addClass("assistant_bicon__overlay_visible"), i.html(t)) :(i.removeClass("assistant_bicon__overlay_visible"), i.html("")), _r_();
},
renderMenu:function(e) {
_i_("3dab:b55e0f6e"), $(".ba-tab").html(B.jstmpl("ba_overview").render(e)).loadComponents(), _r_();
},
renderWelcomeScreen:function() {
_i_("3dab:4e680f90"), $(".ba-tab").html(B.jstmpl("ba_welcome_screen").render({
b_facebook_messenger_link:B.env.b_facebook_messenger_link,
b_messaging_privacy_policy_url:B.env.b_messaging_privacy_policy_url
})).loadComponents(), _r_();
},
render:function(t) {
_i_("3dab:887c9dfc"), this.cachedData = t;
var i = !1;
"www" === B.env.b_site_type && (i = e("browser-storage-handler").getSessionValue("ba-skip-welcome-screen")), t.show_welcome_screen && "www" === B.env.b_site_type && !i ? this.renderWelcomeScreen() :(this.renderUnreadCounter(t), this.renderMenu(t)), !this.tracked && this.popoverIsVisible() && this.trackOnShow(), this.rendered = !0, _r_();
},
trackOnShow:function() {
if (_i_("3dab:4efeaf75"), !this.cachedData) return _r_();
o.goal(_.ASSISTANT_ENTRY_POINT_VISITED), this.cachedData.show_welcome_screen ? o.goal(_.ASSISTANT_WELCOME_VISITED) :o.goal(_.ASSISTANT_THREADS_VISITED), this.tracked = !0, _r_();
},
popoverIsVisible:function() {
return _i_("3dab:8ad771f8"), _r_($(".user_center_option.ba-notifications .user_center_popover").is(":visible"));
}
}), _r_();
}), booking.jstmpl("ba_overview", function() {
_i_("3dab:1a6b8e29");
var e = [ '\n\n  <div class="ba-overview">\n\n    ', '\n\n      <div class="ba-overview__header">', "/private/msg_multithread_messages_header/name", '</div>\n\n      <div class="ba-overview__reservations">\n\n        <ul class="ba-entry-points">\n          ', "\n\n            ", " ", " | ", '\n\n            <li class="ba-entry-point ', "--cancelled", '">\n              <a\n                href="', ';entrypoint=Header+-+desktop;from=index_screen"\n                class="ba-entry-point--link ', "assistant-entry-point_has-unread", '"\n                data-component="assistant/entrypoint"\n                data-messages-is-modal="1"\n              >\n                <img\n                  class="ba-entry-point--image"\n                  src="', '"\n                  alt="', ", ", '"\n                  width=56\n                  height=56\n                />\n\n                <div class="ba-entry-point--main-column">\n\n                  <div class="ba-entry-point--title">\n                    ', '\n                  </div>\n\n                  <div class="ba-entry-point--dates ba-trip-dates">\n                    ', "\n                    <br/>\n                    ", "\n                  </div>\n\n                  ", '\n                  <span class="bui-badge bui-badge--outline ba-entry-point--cancelled-badge">\n                    ', "/private/msg_cancelled_booking_label/name", "\n                  </span>\n                  ", "\n\n                  ", '\n                    <span class="ba-entry-point--unread-indicator"></span>\n                  ', "\n\n                </div>\n              </a>\n            </li>\n\n          ", "\n        </ul>\n\n      </div>\n\n    ", '\n\n      <div class="ba-empty-overview">\n        <img src="', '" alt="">\n        <div class="ba-empty-overview--title">', "/private/msg_entry_cancelled_booking/name", "</div>\n      </div>\n\n    ", "\n\n  </div>\n\n" ], t = [ "reservations", "fe_checkin_checkout_dates", "checkin_string", "checkout_string", "is_cancelled", "fe_messaging_url", "has_unread", "thumbnail", "hotel_city", "hotel_name" ];
return _r_(function(i) {
_i_("3dab:3ab72f4e");
var n = "", r = this.fn;
if (n += e[0], r.MJ(r.array_length(r.MB(t[0])))) {
n += [ e[1], r.ME(e[2], r.MB, r.MN, null), e[3] ].join("");
var a = r.MC(t[0]) || [];
i.unshift(null);
for (var o = 1, _ = a.length; _ >= o; o++) {
i[0] = a[o - 1], n += e[4];
var s = "";
s += [ r.DATE(r.MB(t[2]), "short_month_only", "", "", ""), e[5], r.DATE(r.MB(t[2]), "day_of_month_only", "", "", ""), e[6], r.DATE(r.MB(t[3]), "short_month_only", "", "", ""), e[5], r.DATE(r.MB(t[3]), "day_of_month_only", "", "", ""), e[5] ].join(""), r.MN(t[1], s), n += e[7], r.MD(t[4]) && (n += e[8]), n += [ e[9], r.MC(t[5]), e[10] ].join(""), r.MD(t[6]) && (n += e[11]), n += [ e[12], r.MC(t[7]), e[13] ].join(""), n += [ r.MC(t[8]), e[14], r.MC(t[9]), e[14], r.MC(t[1]), e[5] ].join(""), n += [ e[15], r.MC(t[9]), e[16], r.MC(t[8]), e[17], r.MC(t[1]), e[18] ].join(""), r.MD(t[4]) && (n += [ e[19], r.ME(e[20], r.MB, r.MN, null), e[21] ].join("")), n += e[22], r.MD(t[6]) && (n += e[23]), n += e[24];
}
i.shift(), n += e[25];
} else n += [ e[26], r.STATIC_HOSTNAME("/static/img/messaging/empty_overview_white.png", 0, 0, 0), e[27], r.ME(e[28], r.MB, r.MN, null), e[29] ].join("");
return n += e[30], _r_(n);
});
}()), booking.jstmpl("ba_welcome_screen", function() {
_i_("3dab:05d7f6ca");
var e, t = [ '\n    <div class="ba-welcome-screen">\n      <div class="ba-intro">\n        <h1 class="ba-intro--title">\n          ', "/private/msg_entry_meet_assistant_header/name", '\n        </h1>\n        <div class="ba-intro--subtitle">\n          ', "/private/www_msg_welcome_value_prop/name", '\n        </div>\n        <button\n          class="ba-intro--cta go-to-assistant"\n        >\n          ', "/private/msg_wlm_screen_start_button/name", "\n        </button>\n        ", '\n          <a\n            href="', '"\n            class="ba-intro--cta go-to-messenger"\n            target="_blank"\n          >\n            ', "/private/msg_wlm_screen_start_button_fb/name", "\n          </a>\n        ", "\n\n        ", '<a class="ba-intro-privacy--link" target="_blank" href="', '">', "\n        ", "</a>", '\n        <div class="ba-intro-privacy">', "/private/msg_wlm_page_privacy_policy_agree/name", "</div>\n      </div>\n    </div>\n" ], i = [ "b_facebook_messenger_link", "fe_start_link", "b_messaging_privacy_policy_url", "fe_end_link" ];
return _r_(function(n) {
_i_("3dab:fd3fcfc7");
var r = "", a = this.fn;
return r += [ t[0], a.ME(t[1], a.MB, a.MN, null), t[2], a.ME(t[3], a.MB, a.MN, null), t[4], a.ME(t[5], a.MB, a.MN, null), t[6] ].join(""), a.MD(i[0]) && (r += [ t[7], a.MC(i[0]), t[8], a.ME(t[9], a.MB, a.MN, null), t[10] ].join("")), r += t[11], a.MN(i[1], [ t[12], a.MC(i[2]), t[13] ].join("")), r += t[14], a.MN(i[3], t[15]), r += [ t[16], (n.unshift({
end_link:a.MB(i[3]),
start_link:a.MB(i[1])
}), e = a.ME(t[17], a.MB, a.MN, null), n.shift(), e), t[18] ].join(""), _r_(r);
});
}()), B.define("component/referral/web-virality/ga", function(e, t, i) {
_i_("3dab:e171b98a");
var n = e("component"), r = e("ga-tracker"), a = e("jquery"), o = e("when/events-view");
"mdot" == B.env.b_site_type && B.events && B.eventNames && B.eventNames.TABNAV_MENU_LOADED && B.events.one(B.eventNames.TABNAV_MENU_LOADED, function() {
_i_("3dab:6da57a85"), a("#raf-nav-entrypoint").loadComponents(), _r_();
}), i.exports = n.extend({
init:function() {
_i_("3dab:8343dc70");
var e = this.$el;
switch (e.data("wv-ga-type")) {
case "pageview":
if (!B.env.fe_raf_ga_details) return _r_();
switch (B.env.b_action) {
case "index":
r.trackEvent(r.webViralityTracker, "raf-index-page-entered|" + B.env.fe_raf_ga_details);
break;

case "searchresults":
r.trackEvent(r.webViralityTracker, "raf-sr-page-entered|" + B.env.fe_raf_ga_details);
break;

case "hotel":
r.trackEvent(r.webViralityTracker, "raf-hp-page-entered|" + B.env.fe_raf_ga_details);
break;

case "book":
2 == B.env.b_stage ? r.trackEvent(r.webViralityTracker, "raf-bs2-entered|" + B.env.fe_raf_ga_details) :3 == B.env.b_stage && r.trackEvent(r.webViralityTracker, "raf-bs3-entered|" + B.env.fe_raf_ga_details);
break;

case "confirmation":
r.trackEvent(r.webViralityTracker, "raf-confirmation-page-entered|" + B.env.fe_raf_ga_details);
}
break;

case "viewandclick":
e.on("click", function() {
_i_("3dab:8fcf22e7"), r.trackEvent(r.webViralityTracker, "entry-point-button-click", e.data("wv-ga-placement")), _r_();
}), o(e, function() {
_i_("3dab:40ca6424"), r.trackEvent(r.webViralityTracker, "entry-point-button-show", e.data("wv-ga-placement")), _r_();
});
break;

case "myreferrals-pageview":
r.trackEvent(r.webViralityTracker, "raf-dashbard-show|" + e.data("wv-ga-action"));
break;

case "click":
e.on("click", function() {
_i_("3dab:9127e7ae"), r.trackEvent(r.webViralityTracker, e.data("wv-ga-action")), _r_();
});
break;

case "share":
e.on("click", function() {
_i_("3dab:b56f13a9"), r.trackEvent(r.webViralityTracker, e.data("wv-ga-action"), e.data("wv-ga-placement")), _r_();
});
}
_r_();
}
}), _r_();
}), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:6caa7d73");
var t, i = e("et"), n = e("jquery"), r = e("ga-tracker"), a = 20, o = n(".js-communities-notifications-entry-point-link"), _ = n(".js-uc-notifications-bell"), s = n(".js-uc-notifications-popover-content"), d = n(".js-travel-communities-notifications-ep-track-stage"), c = "TcZJFASESPBDOLEQYFGXITbIUONSFTUQODWe";
if (!d.length) return _r_();
_.on("click", u), s.on("scroll", l), o.on("click", h);
function l() {
_i_("3dab:0266a68e");
var e = Date.now();
if (t && 50 > e - t) return _r_();
t = e, f(), _r_();
}
function u() {
_i_("3dab:efc6c06d"), setTimeout(f, 100), _r_();
}
function f() {
_i_("3dab:12e149e8"), b() && (i.stage(c, 1), r.trackEvent(r.communityTracker, "entry-point-button-show", "notifications-bar"), _.off("click", u), s.off("scroll", l)), _r_();
}
function h() {
_i_("3dab:bd2ce15c"), r.trackEvent(r.communityTracker, "entry-point-button-click", "notifications-bar"), _r_();
}
function b() {
if (_i_("3dab:5a4c4c0e"), !s.is(":visible")) return _r_(!1);
var e = p(), t = d.offset().top;
return _r_(t >= e.top && t <= e.bottom);
}
function p() {
_i_("3dab:4296d3ee");
var e = s.offset().top;
return _r_({
top:e,
bottom:e + s.height() - a
});
}
_r_();
}), B.define("component/communities/entry-point", function(e, t, i) {
_i_("3dab:e96385ec");
var n = e("component"), r = e("core/utils/onview"), a = e("ga-tracker"), o = "[data-ep-link]";
i.exports = n.extend({
init:function() {
_i_("3dab:25551b3b"), this.eventLabel = this.$el.data("epEventLabel"), this.eventValue = this.$el.data("epEventValue"), this.$link = this.$el.is(o) ? this.$el :this.$el.find(o), r.run(this.$el, this.trackEvent.bind(this, "entry-point-button-show")), this.$link.on("click", this.trackEvent.bind(this, "entry-point-button-click")), _r_();
},
trackEvent:function(e) {
_i_("3dab:2e24b654"), a.trackEvent(a.communityTracker, e, this.eventLabel, this.eventValue), _r_();
}
}), _r_();
}), B.when({
action:"index",
events:"ready",
condition:B.env.b_bbtool_embargo_redirect && B.env.b_is_bbtool_user
}).run(function(e) {
_i_("3dab:dc21d3bf");
var t = e("jquery"), i = e("lightbox"), n = t("[data-banner-embargo] [data-close]"), r = t("[data-banner-embargo]"), a = parseInt(r.attr("data-dismiss-delay")), o = {
bCloseButton:!1,
autoWidth:!0
};
i.show(r, o);
var _ = function() {
_i_("3dab:af3cb4c5"), i.hide(r, o), _r_();
};
n.on("click", _), a > 0 && setTimeout(_, a), _r_();
}), B.when({
events:"ready",
condition:B.env.b_exp_a11y_screen_reader_detection_v5_on
}).run(function(e) {
_i_("3dab:0c4a3fc4");
var t, i = e("et"), n = "OTfdASFTUaIQLHKZKcDMeffdTDPdeRe", r = e("ga-tracker"), a = e("screen-reader-detection");
a.onDetect(function() {
switch (_i_("3dab:cd5eac9a"), i.stage(n, 1), r.trackEvent("Accessibility", "Detection (v5)", "_detected_", a.getCurrentScore()), a.getFirstSeenAction()) {
case "index":
t = 2;
break;

case "searchresults":
t = 3;
break;

case "hotel":
t = 4;
break;

case "book2":
t = 5;
break;

case "book3":
t = 6;
break;

case "confirmation":
t = 7;
}
t && i.stage(n, t), _r_();
}).onFeatureDetect(function(e) {
_i_("3dab:63925090"), e.cg > 0 && i.customGoal(n, e.cg), r.trackEvent("Accessibility", "Detection (v5)", e.name, e.score), _r_();
}), _r_();
}), B.define("screen-reader-detection/sr-click", function(e, t, i) {
"use strict";
_i_("3dab:79af8d97");
var n = e("jquery"), r = [];
function a() {
_i_("3dab:175ded8f");
for (var e = r.length; e >= 0; e--) "function" == typeof r[e] && (r[e](), r.splice(e, 1));
_r_();
}
function o() {
_i_("3dab:2c08e0e8");
var e = "a11y_srd_click", t = {};
t.set = function(t, i) {
_i_("3dab:d14f3634");
var r = {};
r[t] = i;
try {
n.cookie(e, JSON.stringify(r), {
path:"/",
domain:"booking.com",
expires:7
});
} catch (a) {
B.reportError(a, "a11y_srd");
}
_r_();
}, t.get = function(t) {
_i_("3dab:04dcfe8a");
var i;
try {
i = JSON.parse(n.cookie(e));
} catch (r) {
B.reportError(r, "a11y_srd");
}
return _r_(i);
};
var i = n(window), r = t.get("ctrlKeyUp") || !1, o = t.get("altKeyUp") || !1, s = t.get("anyClick") || !1;
i.on("keyup", function(e) {
_i_("3dab:a441318e"), (17 === e.keyCode || 18 === e.keyCode) && (17 === e.keyCode && (r = !0, t.set("ctrlKeyUp", !0)), 18 === e.keyCode && (o = !0, t.set("altKeyUp", !0)), s && r && o && (_() || (a(), B.env.a11y_is_sr_click = !0), s = !1, t.set("clicked", !1))), _r_();
}), n(window).on("keydown", function(e) {
_i_("3dab:2449f671"), (17 === e.keyCode || 18 === e.keyCode) && (s = !1, r = !1, o = !1, t.set("anyClick", !1), t.set("ctrlKeyUp", !1), t.set("altKeyUp", !1)), _r_();
}), n(window).on("click", function(e) {
_i_("3dab:f8b166fd"), s = !0, t.set("anyClick", !0), _r_();
}), _r_();
}
function _() {
return _i_("3dab:08db9e2f"), _r_(B.env.a11y_is_sr_click);
}
o(), i.exports = {
onDetect:function(e) {
if (_i_("3dab:d3663a5e"), "function" != typeof e) return _r_(this);
if (_()) return e(), _r_(this);
return r.push(e), _r_(this);
}
}, _r_();
}), B.when({
events:"ready",
condition:B.env.b_exp_a11y_screen_reader_detection_sr_click_on
}).run(function(e) {
_i_("3dab:f3374601");
var t = e("et"), i = e("screen-reader-detection/sr-click"), n = e("screen-reader-detection"), r = e("screen-reader-detector"), a = "OTfdASFTUaIQLHKZKcDMeffdTWNAFKe";
t.stage(a, 1), r.onDetect(function() {
_i_("3dab:61d78c83"), t.stage(a, 2), _r_();
}), n.onDetect(function() {
_i_("3dab:e17b10c0"), t.stage(a, 3), _r_();
}), i.onDetect(function() {
_i_("3dab:2a425c08"), t.stage(a, 4), _r_();
}), _r_();
}), booking.jstmpl("b_bwallet_notification_template", function() {
_i_("3dab:e7a049aa");
var e = [ '\n    <div class="bwalelt-credit-notification-body">\n        ', '\n    </div>\n    <div class="bwalelt-credit-notification-action">\n	    <button class="b-button b-button_primary b-button_flat">\n			', "\n		</button>\n    </div>\n" ], t = [ "b_notification_text", "b_notification_button_text" ];
return _r_(function(i) {
_i_("3dab:cbf9d4ea");
var n = "", r = this.fn;
return n += [ e[0], r.MC(t[0]), e[1], r.MC(t[1]), e[2] ].join(""), _r_(n);
});
}()), B.define("component/bwallet/desktop/credit_notification", function(e, t, i) {
"use strict";
_i_("3dab:45b1f824");
var n = e("component"), r = {
LOGIN_BLOCK:".header-user-menu-link-s-logged-in",
BALANCE_BLOCK:".available-balance-block",
DUMMY_BLOCK:".bwallet-dummy-block",
WALLET_ICON:".bwallet-icon-circle"
}, a = {
get_credit_notifications:function(e, t) {
_i_("3dab:5ef2cae8"), $.ajax({
url:B.env.b_bwallet_get_credit_notifications_url,
type:"post",
xhrFields:{
withCredentials:!0
},
context:this,
success:function(t) {
_i_("3dab:08c60fd7"), e && e(t), _r_();
},
error:function() {
_i_("3dab:45548748"), t && t(), _r_();
},
complete:function() {}
}), _r_();
},
remove_credit_notifications:function(e, t) {
_i_("3dab:a8cf8a8c"), $.ajax({
url:B.env.b_bwallet_remove_credit_notifications_url,
type:"delete",
xhrFields:{
withCredentials:!0
},
context:this,
success:function(t) {
_i_("3dab:08c60fd71"), e && e(t), _r_();
},
error:function(e) {
_i_("3dab:cebd88da"), t && t(), _r_();
},
complete:function() {}
}), _r_();
}
};
i.exports = n.extend({
init:function() {
_i_("3dab:aea7447d"), this.UI_ELEM = {
login_block:this.$el.find(r.LOGIN_BLOCK),
balance_block:this.$el.find(r.BALANCE_BLOCK),
dummy_block:this.$el.find(r.DUMMY_BLOCK),
wallet_icon:this.$el.find(r.WALLET_ICON),
other:this.$el.find(r.LOGIN_BLOCK).children()
}, this.bind_actions(), this.setup_ui(), this.block_orginal_color = this.UI_ELEM.login_block.css("background") || this.UI_ELEM.login_block.css("background-color"), this.credit_amount_component = this.$el.find(".available-credit-amount").component("core/animate-price"), this.get_credit_notifications(), _r_();
},
get_credit_notifications:function() {
_i_("3dab:45672e11"), a.get_credit_notifications(function(e) {
_i_("3dab:ca54ceb0"), this.on_credit_notifications_received(e), _r_();
}.bind(this)), _r_();
},
remove_credit_notifications:function() {
_i_("3dab:fa367dd1"), a.remove_credit_notifications(), _r_();
},
on_credit_notifications_received:function(e) {
if (_i_("3dab:a445c8b9"), e && e[0]) {
var t = e[0];
t.amount && t.currency && this.show_notification(t.currency, parseFloat(t.amount));
}
_r_();
},
show_notification:function(e, t) {
_i_("3dab:3e517e1e"), this.show_and_animate_others(), this.credit_amount_component.setValue(this.credit_amount_component.getValue() - t), this.credit_amount_component.update(this.credit_amount_component.getValue() + t), setTimeout(function() {
_i_("3dab:cefbef77"), this.show_tooltip(e, t), _r_();
}.bind(this), 600), _r_();
},
hide_notification:function(e, t) {
_i_("3dab:7424cac1"), this.hide_and_animate_others(), this.hide_tooltip(e, t), _r_();
},
show_tooltip:function(e, t) {
_i_("3dab:b25747bc");
var i = $(B.jstmpl("b_bwallet_notification_template").render({
b_notification_text:B.jstmpl.translations("wallet_notification_got_credit_text", null, {
start_bold:"<b>",
end_bold:"</b>",
amount_with_currency:"<span class='bwallet-notification-credit-amount'>" + e + t + "</span>"
}),
b_notification_button_text:B.jstmpl.translations("wallet_index_notif_got_it")
}));
i.find("button").click(function() {
_i_("3dab:37d48e77"), this.hide_notification(), this.remove_credit_notifications(), _r_();
}.bind(this)), this.credit_tooltip = B.require("tooltip").setup({
id:"bwallet_credit_tooltip",
target:this.UI_ELEM.balance_block,
content:i,
position:"bottom center",
arrow:!0,
animation:!0,
trigger:"manual",
customClass:"bwallet-credit-notification-tooltip"
}), this.credit_tooltip.show(), _r_();
},
hide_tooltip:function(e, t) {
_i_("3dab:13535b08"), this.credit_tooltip.hide(), _r_();
},
show_and_animate_others:function(e) {
_i_("3dab:13815546"), this.UI_ELEM.login_block.css("transition", "all 0.5s ease-in-out"), this.UI_ELEM.balance_block.css("transition", "all 0.5s ease-in-out"), this.UI_ELEM.other.css("transition", "all 0.5s ease-in-out"), this.UI_ELEM.wallet_icon.css("transition", "all 0.5s ease-in-out");
var t = this.UI_ELEM.balance_block.width();
this.UI_ELEM.login_block.css("width", t + "px");
var i = -this.UI_ELEM.balance_block.height();
this.UI_ELEM.other.css("transform", "translate(0px," + i + "px)  scale(0.8)"), this.UI_ELEM.wallet_icon.css("transform", "scale(1)"), this.UI_ELEM.wallet_icon.css("background-color", "#7d9ac7"), this.UI_ELEM.login_block.css("background-color", "#6080b3"), this.UI_ELEM.balance_block.css("bottom", "0px"), this.UI_ELEM.dummy_block.show(), _r_();
},
hide_and_animate_others:function(e) {
_i_("3dab:6ddf5f4d"), this.UI_ELEM.login_block.css("width", "auto"), this.UI_ELEM.login_block.css("transition", "all 0.6s ease-in-out"), this.UI_ELEM.other.css("transition", "all 0.6s ease-in-out"), this.UI_ELEM.balance_block.css("transition", "all 0.6s ease-in-out"), this.UI_ELEM.wallet_icon.css("transition", "all 0.2s ease-in-out"), this.UI_ELEM.other.css("transform", "translate(0px,0px)  scale(1)"), this.UI_ELEM.wallet_icon.css("transform", "scale(0)"), this.UI_ELEM.login_block.css("background", this.block_orginal_color), this.UI_ELEM.balance_block.css("bottom", "-100%"), this.UI_ELEM.dummy_block.hide(), _r_();
},
setup_ui:function() {
_i_("3dab:a69a81bc"), this.UI_ELEM.balance_block.css("opacity", 1), this.$el.css("width", this.$el.width() + "px"), this.UI_ELEM.login_block.css("width", this.UI_ELEM.login_block.width() + "px"), _r_();
},
bind_actions:function() {
_i_("3dab:084ec80c"), this.UI_ELEM.dummy_block.click(function(e) {
return _i_("3dab:12acabde"), e.stopPropagation(), _r_(!1);
}), _r_();
}
}), _r_();
}), booking.define("component/core/animate-price", function(e, t, i) {
_i_("3dab:b872378d");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("3dab:2db6c77a"), this.animation_speed = .003 * (this.$el.data("animation-speed") || 1), this.normalize = this.$el.data("normalize"), this.currency = this.$el.data("currency"), this.precision = this.$el.data("precision"), this.max_precision = 10;
var e = this.$el.data("value") || this.$el.html() || 0;
e = parseFloat(e.toString().replace(/^\D+/g, "")), $.trim(this.$el.html()) ? this.current_number = e :this.setValue(e), this.original_value = this.current_number;
var t = this.$el.css("display");
this.$el.css({
display:"inline" === t ? "inline-block" :t
}), this.orginal_color = this.$el.css("color"), _r_();
},
calculateDecimalDigits:function(e) {
_i_("3dab:200c4bbb");
var t = parseFloat(e).toString().split(".");
return _r_(t.length > 1 ? t[1].length :0);
},
update:function(e) {
if (_i_("3dab:8f668037"), e === this.current_number) return _r_();
this.interval && clearInterval(this.interval);
var t = this.displayed_number || this.current_number, i = e, n = new Date().getTime(), r = Math.abs(i - t), a = r * this.animation_speed, o = Math.min(this.precision || this.max_precision, Math.max(this.calculateDecimalDigits(e), this.calculateDecimalDigits(this.current_number)));
this.startAnimation(0 > i - t), this.current_number = e, this.interval = window.setInterval(function() {
_i_("3dab:9a5c365c");
var e = new Date().getTime(), r = e - n, _ = a * r;
n = e, t > i ? t -= Math.min(_, t - i) :i > t ? t += Math.min(_, i - t) :(this.stopAnimation(), clearInterval(this.interval), t = i, o = Math.min(this.precision || this.max_precision, this.calculateDecimalDigits(t))), this.displayed_number = t, this.updateUI(t, o), _r_();
}.bind(this), 70), _r_();
},
startAnimation:function(e) {
_i_("3dab:6b7e614f"), this.$el.css({
"-webkit-transition":"all 300ms ease-in",
"-ms-transition":"all 300ms ease-in",
"-moz-transition":"all 300ms ease-in",
transition:"all 300ms ease-in"
}), this.$el.css("transform", "scale(1.03)"), e && this.$el.css("color", "#10B02B"), _r_();
},
stopAnimation:function() {
_i_("3dab:4b35d51c"), this.$el.css({
"-webkit-transition":"all 200ms ease-in",
"-ms-transition":"all 200ms ease-in",
"-moz-transition":"all 200ms ease-in",
transition:"all 200ms ease-in"
}), this.$el.css("transform", "scale(1)"), this.$el.css("color", this.orginal_color), _r_();
},
updateUI:function(e, t) {
if (_i_("3dab:83caa4b1"), void 0 !== t && (e = parseFloat(e).toFixed(t)), this.currency) {
var i = {};
t && (i.precision = t), e = B.utils.accounting.formatMoney(e, this.currency);
}
this.$el.html(e), _r_();
},
getOriginalValue:function() {
return _i_("3dab:1518d8f9"), _r_(this.original_value);
},
getValue:function() {
return _i_("3dab:43ff2093"), _r_(this.current_number);
},
setValue:function(e, t) {
_i_("3dab:5f4ee1c3"), this.current_number = e, t = void 0 !== t ? Math.min(t, this.max_precision) :this.max_precision, this.updateUI(e, t), _r_();
}
}), _r_();
}), B.define("price-display-manager", function(e, t, i) {
_i_("3dab:32553724");
var n = e("jquery"), r = {};
function a(e) {
_i_("3dab:545970d5"), this.group_name = e, this.init(), _r_();
}
a.prototype.init = function() {
_i_("3dab:534a1bfa");
var e = n("[data-animate-price-group-name=" + this.group_name + "]");
this.animate_price_components = [];
var t = null;
e.each(function(e, i) {
_i_("3dab:064395c4");
var r = n(i);
"core/animate-price" !== r.attr("data-component") && (r.attr("data-component", "core/animate-price"), r.loadComponents());
var a = r.component("core/animate-price");
if (this.animate_price_components.push(a), null === t) t = a.getOriginalValue(); else if (t !== a.getOriginalValue()) throw "Inconsistent values for price display manager. group name ( " + this.group_name + ")values(" + t + " => " + a.getOriginalValue() + ")";
_r_();
}.bind(this)), _r_();
}, a.prototype.update = function(e) {
_i_("3dab:016595e6"), this.animate_price_components.forEach(function(t) {
_i_("3dab:ceefc1ed"), t.update(e), _r_();
}.bind(this)), _r_();
}, a.prototype.setValue = function(e) {
_i_("3dab:c8249d4d"), this.animate_price_components.forEach(function(t) {
_i_("3dab:5fe93fbb"), t.setValue(e), _r_();
}.bind(this)), _r_();
}, a.prototype.getOriginalValue = function() {
return _i_("3dab:f28d6993"), _r_(this.animate_price_components[0] ? this.animate_price_components[0].getOriginalValue() :null);
}, a.prototype.getValue = function() {
return _i_("3dab:685c8ff1"), _r_(this.animate_price_components[0] ? this.animate_price_components[0].getValue() :null);
}, t.getInstance = function(e) {
if (_i_("3dab:e7123830"), e && "" !== e) {
if (r[e]) return _r_(r[e]);
return _r_(r[e] = new a(e));
}
return _r_(null);
}, _r_();
}), B.define("component/bwallet/reward_prompt", function(e, t, i) {
_i_("3dab:c0eda89a");
var n = e("component"), r = e("dismiss-item"), a = e("read-data-options");
i.exports = n.extend({
init:function() {
_i_("3dab:7605e709"), this.options = a(this.$el, {
itemId:{
name:"target-item-id",
type:String,
required:!0
}
}), setTimeout(function() {
_i_("3dab:9fcc4375"), this._bindEvents(), _r_();
}.bind(this), 250), _r_();
},
_bindEvents:function() {
_i_("3dab:e311f64a");
var e = $("[data-item-id=" + this.options.itemId + "]");
e.on("click", ".js-close", function() {
_i_("3dab:fde75203"), this._dismissItem(), e.parent().hide(), _r_();
}.bind(this)), _r_();
},
_dismissItem:function() {
return _i_("3dab:40f33ccd"), _r_(r(this.options.itemId));
},
hide:function() {
_i_("3dab:9a2d9335"), this.$el.hide(), _r_();
}
}), _r_();
});

var RUMSpeedIndex = function(e) {
_i_("3dab:b65c9af8"), e = e || window;
var t, i, n = e.document, r = e.innerHeight || n.documentElement.clientHeight, a = e.innerWidth || n.documentElement.clientWidth, o = function(e) {
_i_("3dab:7282433b");
var t = !1;
if (e.getBoundingClientRect) {
var i = e.getBoundingClientRect();
t = {
top:Math.max(i.top, 0),
left:Math.max(i.left, 0),
bottom:Math.min(i.bottom, r),
right:Math.min(i.right, a)
};
var n = t.right - t.left, o = t.bottom - t.top;
0 >= n || 0 > o ? t = !1 :t.area = n * o;
}
return _r_(t);
}, _ = function(e, t) {
if (_i_("3dab:c7de9af7"), t) {
var i = o(e);
i && f.push({
url:t,
area:i.area,
rect:i
});
}
_r_();
}, s = function() {
_i_("3dab:76c20bb1");
for (var t = n.getElementsByTagName("*"), i = /url\(.*(http.*)\)/gi, r = 0; r < t.length; r++) {
var a = t[r], s = e.getComputedStyle(a);
if ("IMG" == a.tagName && _(a, a.src), s["background-image"]) {
i.lastIndex = 0;
var d = i.exec(s["background-image"]);
d && d.length > 1 && _(a, d[1].replace('"', ""));
}
if ("IFRAME" == a.tagName) try {
var c = o(a);
if (c) {
var l = RUMSpeedIndex(a.contentWindow);
l && f.push({
tm:l,
area:c.area,
rect:c
});
}
} catch (u) {}
}
_r_();
}, d = function() {
_i_("3dab:22396988");
for (var t = {}, i = e.performance.getEntriesByType("resource"), n = 0; n < i.length; n++) t[i[n].name] = i[n].responseEnd;
for (var r = 0; r < f.length; r++) "tm" in f[r] || (f[r].tm = void 0 !== t[f[r].url] ? t[f[r].url] :0);
_r_();
}, c = function() {
_i_("3dab:5bed49e5");
try {
for (var i = performance.getEntriesByType("paint"), r = 0; r < i.length; r++) if ("first-paint" == i[r].name) {
p = performance.getEntriesByType("navigation")[0].startTime, t = i[r].startTime - p;
break;
}
} catch (a) {}
if (void 0 === t && "msFirstPaint" in e.performance.timing && (t = e.performance.timing.msFirstPaint - p), void 0 === t && "chrome" in e && "loadTimes" in e.chrome) {
var o = e.chrome.loadTimes();
if ("firstPaintTime" in o && o.firstPaintTime > 0) {
var _ = o.startLoadTime;
"requestTime" in o && (_ = o.requestTime), o.firstPaintTime >= _ && (t = 1e3 * (o.firstPaintTime - _));
}
}
if (void 0 === t || 0 > t || t > 12e4) {
t = e.performance.timing.responseStart - p;
for (var s = {}, d = n.getElementsByTagName("head")[0].children, r = 0; r < d.length; r++) {
var c = d[r];
"SCRIPT" == c.tagName && c.src && !c.async && (s[c.src] = !0), "LINK" == c.tagName && "stylesheet" == c.rel && c.href && !c.hasAttribute("data-async") && (s[c.href] = !0);
}
for (var l = e.performance.getEntriesByType("resource"), u = !1, f = 0; f < l.length; f++) if (u || !s[l[f].name] || "script" != l[f].initiatorType && "link" != l[f].initiatorType) u = !0; else {
var h = l[f].responseEnd;
(void 0 === t || h > t) && (t = h);
}
}
t = Math.max(t, 0), _r_();
}, l = function() {
_i_("3dab:6958c672");
for (var i = {
"0":0
}, r = 0, a = 0; a < f.length; a++) {
var o = t;
"tm" in f[a] && f[a].tm > t && (o = f[a].tm), void 0 === i[o] && (i[o] = 0), i[o] += f[a].area, r += f[a].area;
}
var _ = Math.max(n.documentElement.clientWidth, e.innerWidth || 0) * Math.max(n.documentElement.clientHeight, e.innerHeight || 0);
if (_ > 0 && (_ = Math.max(_ - r, 0) * b, void 0 === i[t] && (i[t] = 0), i[t] += _, r += _), r) {
for (var s in i) i.hasOwnProperty(s) && h.push({
tm:s,
area:i[s]
});
h.sort(function(e, t) {
return _i_("3dab:eb7ca52f"), _r_(e.tm - t.tm);
});
for (var d = 0, c = 0; c < h.length; c++) d += h[c].area, h[c].progress = d / r;
}
_r_();
}, u = function() {
if (_i_("3dab:ba7eb729"), h.length) {
i = 0;
for (var e = 0, n = 0, r = 0; r < h.length; r++) {
var a = h[r].tm - e;
a > 0 && 1 > n && (i += (1 - n) * a), e = h[r].tm, n = h[r].progress;
}
} else i = t;
_r_();
}, f = [], h = [], b = .1;
try {
var p = e.performance.timing.navigationStart;
s(), d(), c(), l(), u();
} catch (g) {}
return _r_(i);
};

B.define("resource-timing", function(e, t) {
_i_("3dab:4322f38c");
function i(e) {
if (_i_("3dab:a90ae5d5"), e.transferSize > 0) return _r_(!1);
if (e.decodedBodySize > 0) return _r_(!0);
if (e.responseEnd) return _r_(e.responseEnd - e.startTime < 30);
return _r_(!1);
}
t.isSupported = window.performance && "function" == typeof window.performance.getEntriesByType, t.getEntries = function(e) {
_i_("3dab:9b355283");
var t = performance.getEntriesByType("resource");
return t = t.filter(function(t) {
_i_("3dab:95a89b7c");
var n = !0;
return e && (n && e.excludeThirdParty && (n = t.name && "string" == typeof t.name && (t.name.match(/bstatic/) || t.name.match(/static.booking.cn/))), n && e.excludeCache && (n = !i(t)), n && e.type && "image" === e.type && (n = t.name && "string" == typeof t.name && ("img" === t.initiatorType || "css" === t.initiatorType))), _r_(n);
}), _r_(t);
}, _r_();
}), B.when({
condition:B.env && B.env.b_site_info && B.env.b_site_info.is_bookings_owned
}).run(function(e) {
_i_("3dab:c439ccf5");
var t = e("resource-timing"), i = "js_total_static_file_transfer_size", n = "js_onload_resource_transfer_size", r = function(e) {
_i_("3dab:11bb839d");
var r = 0, a = t.getEntries({
excludeCache:!0,
excludeThirdParty:e && "static" === e ? !0 :!1
}), o = e && "static" === e ? i :n;
if (a && a.length && (a.forEach(function(e) {
_i_("3dab:efbaee91"), r += e.transferSize, _r_();
}), r = parseInt(r / 1e3, 10), "number" == typeof r && !isNaN(r))) try {
navigator.sendBeacon(B.env.js_tracking_url + "&etgwv=" + o + "|" + r + "&_=" + Date.now());
} catch (_) {
"function" == typeof B.squeak && B.squeak("Before Unload Adblock Error");
}
_r_();
}, a = function() {
_i_("3dab:11319e06"), window.navigator && navigator.sendBeacon && B.env.js_tracking_url && (window.addEventListener("load", function() {
_i_("3dab:63aca4bc"), r(), _r_();
}), window.addEventListener("beforeunload", function() {
_i_("3dab:9ae90284"), r("static"), _r_();
})), _r_();
};
t.isSupported && a(), _r_();
}), B.when({
events:"ready"
}).run(function(e) {
_i_("3dab:f61899f9"), B.et.on("view", ".hp-date-input").stage("YQecaXYRJLBWHcdXUC", 1), B.et.on("view", ".policy_name_icon").stage("YQecaXYRJLBWHcdXUC", 2), _r_();
}), B.define("components/time-tracker/time-interval", function(e, t, i) {
_i_("3dab:5c7f7595");
var n = function(e) {
_i_("3dab:50618634"), e = e || {}, this._startTime = e.startTime || null, this._firstStartTime = this._startTime, this._value = e.value || null, this._tempValue = 0, this._meta = e.meta || {}, _r_();
};
n.prototype.start = function() {
_i_("3dab:91e67b61"), this._startTime = +new Date(), this._firstStartTime || (this._firstStartTime = this._startTime), _r_();
}, n.prototype.pause = function() {
_i_("3dab:c8ffc7d4"), this._tempValue = this.value(), this._startTime = 0, _r_();
}, n.prototype.stop = function() {
_i_("3dab:6e6c1128"), this._value || (this._value = this._tempValue + this._calculateValue()), _r_();
}, n.prototype.value = function() {
if (_i_("3dab:ef8813fd"), this._value) return _r_(this._value);
return _r_(this._tempValue + this._calculateValue());
}, n.prototype.setMeta = function(e) {
_i_("3dab:58b75a96"), this._meta = e, _r_();
}, n.prototype.serialize = function() {
_i_("3dab:9628b721");
var e = "t=" + this.value() + "&h=" + +new Date();
return this._meta && Object.keys(this._meta).forEach(function(t) {
_i_("3dab:a35c5ba6"), e += "&" + t + "=" + encodeURIComponent(this._meta[t]), _r_();
}.bind(this)), _r_(e);
}, n.prototype.forFragment = function() {
_i_("3dab:97828402");
var e = JSON.parse(JSON.stringify(this._meta));
return e.time_sec = ~~(this.value() / 1e3), _r_(e);
}, n.prototype.serializeMeta = function() {
return _i_("3dab:c559d84b"), _r_(JSON.stringify(this._meta));
}, n.prototype.forLocalStorage = function() {
return _i_("3dab:59c1e4b0"), _r_({
s:this._firstStartTime,
v:this.value(),
m:this._meta
});
}, n.prototype._calculateValue = function() {
return _i_("3dab:cb8758ab"), _r_(this._startTime ? +new Date() - this._startTime :0);
}, n.fromObject = function(e) {
return _i_("3dab:8aee59a7"), _r_(new n({
startTime:e.s,
value:e.v,
meta:e.m
}));
}, i.exports = n, _r_();
}), B.define("components/time-tracker/local-storage-reader", function(e, t, i) {
_i_("3dab:ffd89b5a");
var n = e("components/time-tracker/time-interval"), r = e("fragment"), a = function(e) {
_i_("3dab:8642e516"), this._timers = [], this._key = e || a.localStorageKey, this.storage;
try {
var e = a.localStorageKey + "_test";
window.localStorage.setItem(e, 1), window.localStorage.removeItem(e), this.storage = window.localStorage;
} catch (t) {}
_r_();
};
a.prototype.start = function(e) {
if (_i_("3dab:c8111d01"), !this.storage) return _r_();
function t() {
_i_("3dab:ed3bb7f9");
var t = this.get();
t.length && (this.store(), t.forEach(function(t) {
_i_("3dab:c7e07372"), e ? e(t) :a.flushToServer(t), _r_();
})), _r_();
}
window.addEventListener("storage", this.storageListener = function(e) {
_i_("3dab:8e8e1cdf"), e.key == a.localStorageKey && setTimeout(function() {
_i_("3dab:ba0c24eb"), t.call(this), _r_();
}.bind(this), ~~(50 * Math.random())), _r_();
}.bind(this)), t.call(this), _r_();
}, a.prototype.stop = function() {
_i_("3dab:b0ea0eba"), this.storageListener && window.removeEventListener("storage", this.storageListener), _r_();
}, a.prototype.get = function(e) {
_i_("3dab:4db9ab35");
var t = [], i = [];
if (!this.storage) return _r_(i);
try {
t = JSON.parse(e || this.storage.getItem(this._key));
} catch (r) {}
return t && t.length && t.forEach(function(e) {
_i_("3dab:dfb7bea7"), i.push(n.fromObject({
s:e.s,
v:e.v,
m:e.m
})), _r_();
}), _r_(i);
}, a.prototype.store = function(e) {
_i_("3dab:7b326e34");
var t = [];
if (!this.storage) return _r_(t);
return e && e.length && e.forEach(function(e) {
_i_("3dab:641955d3"), e && t.push(e.forLocalStorage()), _r_();
}), this.storage.setItem(this._key, JSON.stringify(t)), _r_(t);
}, a.flushToServer = function(e) {
_i_("3dab:b18fd533"), r.call("personalisation_infra.track_time_spent_hotel_page", e.forFragment()).then(function(e) {}, function(e) {}), _r_();
}, a.localStorageKey = "timetracker_timers", i.exports = a, _r_();
}), B.when({
condition:B.env.b_time_spent_track
}).run(function(e) {
_i_("3dab:78cfde9c");
var t = e("components/time-tracker/local-storage-reader"), i = new t(), n = !B.env.b_time_spent_track_uuid, r = !!B.env.b_time_spent_track_pageview_id, a = null;
if ("mdot" != B.env.b_site_type || B.env.b_time_spent_track_send || (a = function() {}), n) return i.start(a), window.addEventListener("beforeunload", function() {
_i_("3dab:78ab6667"), i.stop(), _r_();
}), _r_();
var o = e("components/time-tracker/time-interval"), _ = d(), s = !1;
function d() {
_i_("3dab:203d3de6");
var e = new o(), t = {
hotel_id:B.env.b_hotel_id,
behaviour_started_at:B.env.b_time_spent_track_started_at,
behaviour_uuid:B.env.b_time_spent_track_uuid
};
return B.env.b_time_spent_track_pageview_id && (t.pageview_id = B.env.b_time_spent_track_pageview_id), e.setMeta(t), _r_(e);
}
function c(e) {
_i_("3dab:dd7c74cb"), e.value() > 999 && i.store([ e ]), _r_();
}
function l() {
if (_i_("3dab:e17d5e8e"), s) return _r_();
document.hidden ? (_.pause(), c(_)) :(r && (_ = d()), _.start()), _r_();
}
i.start(a), document.addEventListener("visibilitychange", l), l(), window.addEventListener("beforeunload", function() {
_i_("3dab:838e5304"), i.stop(), _.stop(), c(_), s = !0, _r_();
}), _r_();
}), function() {
"use strict";
_i_("3dab:fc453fc6");
var e = 9, t = {}, i = 0;
function n(e, t) {
return _i_("3dab:feef965b"), _r_((t || document).querySelector(e));
}
function r(e, t) {
_i_("3dab:1d8858ba");
var i = (t || document).querySelectorAll(e);
if ("function" == typeof i.forEach) return _r_(i);
for (var n = new Array(i.length), r = 0, a = i.length; a > r; r++) n[r] = i[r];
return _r_(n);
}
function a(e, n, r) {
_i_("3dab:a13ce368");
var a = e._eid ? e._eid :e._eid = i++, o = "_handler_" + a + "_" + n, _ = t[o] || (t[o] = []);
if ("function" == typeof e.addEventListener) e.addEventListener(n, r, !1), _.push(r); else if (e.attachEvent) {
var s = function(t) {
_i_("3dab:2f53a357");
var i = [].slice.call(arguments), n = i[0] || window.event, a = !0;
return n.target = t.target || t.srcElement, n.currentTarget = e, n.preventDefault || (n.preventDefault = function() {
_i_("3dab:3de1a2de"), a = !1, _r_();
}), r.call(this, n), _r_(a);
};
return e.attachEvent("on" + n, s), _.push(s), _r_(s);
}
return _r_(r);
}
function o(e, t) {
_i_("3dab:69db6865");
var i;
"function" == typeof Event ? i = new Event(t, {
bubbles:!0
}) :(i = document.createEvent("Event"), i.initEvent(t, !0, !0)), e.dispatchEvent(i), _r_();
}
function _(e, t, i) {
_i_("3dab:80553f69");
var n;
return _r_(function() {
_i_("3dab:d421fd91");
var r = this, a = arguments;
i === !0 && void 0 === n && e.apply(r, a), clearTimeout(n), n = setTimeout(function() {
_i_("3dab:d43ea598"), e.apply(r, a), _r_();
}, t), _r_();
});
}
function s(e, n, r) {
_i_("3dab:92562abd");
var a = e._eid ? e._eid :e._eid = i++, o = "_handler_" + a + "_" + n, _ = t[o] || (t[o] = []);
if ("function" == typeof e.removeEventListener) {
if ("function" == typeof r) return _r_(e.removeEventListener(n, r));
_.forEach(function(t) {
_i_("3dab:a7aa1461"), e.removeEventListener(n, t), _r_();
});
} else if (e.detachEvent) {
if ("function" == typeof r) return _r_(e.detachEvent(n, r));
_.forEach(function(t) {
_i_("3dab:4d0389e5"), e.detachEvent(n, t), _r_();
});
}
_r_();
}
function d(t) {
return _i_("3dab:809c0bbe"), _r_(t && t.parentElement || t.parentNode && t.parentNode.nodeType !== e ? t.parentNode :void 0);
}
function c(e, t) {
if (_i_("3dab:82dcbdef"), "function" == typeof e.closest) return _r_(e.closest(t));
for (var i = r(t), n = 0; n < i.length; n++) for (var a = e; a; ) {
if (i[n] === a) return _r_(a);
a = d(a);
}
return _r_(void 0);
}
function l(e, t) {
_i_("3dab:aabd0a30");
for (var i = e; i; ) {
if (i === t) return _r_(!1);
i = i.parentElement;
}
return _r_(!0);
}
function u(e, t, i, n) {
_i_("3dab:caaf7643");
var r = function(e) {
_i_("3dab:1b8ff611");
var t = c(e.target, i);
e.delegateTarget = t, t && n.call(null, e), _r_();
};
return a(e, t, r), _r_(function() {
_i_("3dab:4e4c540d"), s(e, t, r), _r_();
});
}
function f(e, t) {
_i_("3dab:b114fadf"), e.classList ? e.classList.add(t) :e.className = (e.className || "").split(" ").concat(t).join(" "), _r_();
}
function h(e, t) {
_i_("3dab:20801727"), e.classList ? e.classList.remove(t) :b(e, t) && (e.className = e.className.replace(new RegExp("\\b(" + t + ")\\b", "gi"), "")), _r_();
}
function b(e, t) {
_i_("3dab:9f2ca96b");
var i = new RegExp("\\b(" + t + ")\\b");
return _r_(i.test(e.className));
}
function p(e, t, i) {
_i_("3dab:05dd1481"), void 0 === i && (i = !b(e, t)), i === !0 ? f(e, t) :h(e, t), _r_();
}
function g() {
_i_("3dab:88ce9bed");
var e = document.createElement("div");
e.style.position = "absolute", e.style.top = "-9999px", e.style.width = "50px", e.style.height = "50px", e.style.overflow = "scroll", document.body.appendChild(e);
var t = e.getBoundingClientRect().width - e.clientWidth;
return document.body.removeChild(e), _r_(t);
}
var m;
function v() {
return _i_("3dab:be5057b9"), _r_(m || (m = g()));
}
function y(e) {
_i_("3dab:75365aea");
var t = e.getBoundingClientRect();
return _r_({
top:t.top,
right:t.right,
bottom:t.bottom,
left:t.left,
width:t.width,
height:t.height,
x:t.x,
y:t.y
});
}
function w(e) {
_i_("3dab:44a95bc2");
var t = y(e);
return t.width = t.width || t.right - t.left, t.height = t.height || t.bottom - t.top, _r_(t);
}
function k(e, t) {
_i_("3dab:efc077c7"), void 0 === t && (t = 0);
var i = document.documentElement.offsetWidth - t, n = document.documentElement.scrollTop + t, r = n + document.documentElement.clientHeight - t;
return _r_(e.left >= t && e.right <= i && e.top >= n && e.bottom <= r);
}
function B(e) {
_i_("3dab:13dbd2e2"), window.setImmediate ? window.setImmediate(e) :window.setTimeout(e, 4), _r_();
}
window.BUI || (window.BUI = {}), window.BUI.components || (window.BUI.components = {});
var M = function() {
_i_("3dab:3060b877"), this.store = {}, _r_();
};
M.prototype.register = function(e, t, i) {
if (_i_("3dab:347c2f0c"), e in Object.keys(this.store)) throw new Error(e + " is already registered");
this.store[e] = {
Component:t,
props:i
}, window.BUI.components[e] = e, _r_();
}, M.prototype.get = function(e) {
_i_("3dab:11921007");
var t = this.store[e];
if (!t) throw new Error("\n                Component " + e + " not found in the registry.\n                Probably it was registered or extended after components on the page got initialised.\n            ");
return _r_(t);
};
var x = new M(), C = "6.1.10";
window.BUI || (window.BUI = {}), window.BUI._version = C;
var E = function(e, t) {
_i_("3dab:8957029f"), this.root = e, this.props = t || {}, this.handlers = null, this.selectors = {}, this.modifiers = {}, this._removeHandlersMap = {}, _r_();
};
E.prototype.setState = function(e) {
_i_("3dab:2006a105");
var t = this;
if (!this.state) throw new Error("\n                You are trying to update a state that wasn't initialised yet.\n                Create it in the init method of your component first e.g. this.state = { foo: 'bar' };\n            ");
var i = this.state, n = Object.assign({}, this.state, e), r = this.handlers;
this.state = n, Object.keys(r).forEach(function(e) {
_i_("3dab:74e7bb40");
var a = t._parseHandlers(e), o = a.elName, _ = a.subscriptionName;
if ("state" !== o) return _r_();
i[_] !== n[_] && r[e].call(t, n), _r_();
}), _r_();
}, E.prototype._parseHandlers = function(e) {
_i_("3dab:a7e0e0e6");
var t = e.split("@"), i = t[0], n = t[1];
if (!i || !n) throw new Error("Wrong component handler syntax");
return _r_({
elName:i,
subscriptionName:n
});
}, E.prototype._toggleHandlers = function(e) {
_i_("3dab:d183632e");
var t = this, i = this.handlers, n = this.selectors;
if (!i) return _r_();
Object.keys(i).forEach(function(r) {
_i_("3dab:d939cce1");
var a = t._parseHandlers(r), o = a.elName, _ = a.subscriptionName, s = i[r].bind(t);
if ("state" === o) return _r_();
var d, c = n[o];
if ("window" === o && (d = window), "root" === o && (d = t.root), "scroll" === _ && (d = t.root.querySelector(c)), d) {
var l = e ? "addEventListener" :"removeEventListener";
return d[l](_, s), _r_();
}
if (!t.root) return _r_();
if (!c) throw new Error("Selector for element not found");
if (e) t._removeHandlersMap[r] = u(t.root, _, c, s); else {
var f = t._removeHandlersMap[r];
f && f();
}
_r_();
}), _r_();
}, E.prototype.onMount = function() {}, E.prototype.onUnmount = function() {}, E.prototype.mount = function() {
_i_("3dab:2ec3d6a8"), this._toggleHandlers(!0), this.onMount(), _r_();
}, E.prototype.unmount = function() {
_i_("3dab:fb48f243"), this._toggleHandlers(!1), this.onUnmount(), _r_();
};
function T(e, t, i) {
_i_("3dab:645ec97d");
var n = x.get(e), r = n.Component, a = n.props;
return _r_(new r(t, Object.assign({}, a, i)));
}
function S(e) {
_i_("3dab:dd3faaec");
var t = e || document.body, i = "data-bui-component", n = r("[" + i + "]", t);
n.forEach(function(e) {
_i_("3dab:370f0a64");
var t = e.getAttribute(i);
if (!t) return _r_();
var n = T(t, e);
n.mount(), _r_();
}), _r_();
}
function A(e, t) {
_i_("3dab:cd347bda");
var i = e.split(".")[0], n = x.get(i), r = n.Component;
x.register(e, r, t), _r_();
}
window.BUI.createInstance = T, window.BUI.initComponents = S, window.BUI.extendComponent = A, B(function() {
return _i_("3dab:9db42610"), _r_(S());
});
var N = function(e) {
_i_("3dab:299ce1d1");
function t(t, i) {
_i_("3dab:fca30bfc"), e.call(this, t, i), this.selectors = {
button:"[data-bui-ref=accordion-button]"
}, this.modifiers = {
activeRow:"bui-is-active"
}, this.handlers = {
"button@click":this._handleButtonClick
}, _r_();
}
return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype._handleButtonClick = function(e) {
_i_("3dab:cab1ca1f");
var t = this.props, i = t.onAfterItemOpen, n = t.onAfterItemClose, r = t.onAfterItemToggle, a = e.delegateTarget, o = a.parentNode, _ = "true" !== a.getAttribute("aria-expanded");
p(o, this.modifiers.activeRow, _), a.setAttribute("aria-expanded", _), _ && i && i.call(this, {
event:e,
el:o
}), !_ && n && n.call(this, {
event:e,
el:o
}), r && r.call(this, {
event:e,
el:o
}), _r_();
}, _r_(t);
}(E);
x.register("Accordion", N);
var D = function(e) {
_i_("3dab:d7a1c890");
function t(t, i) {
_i_("3dab:b5489c9b"), e.call(this, t, i), this.selectors = {
close:"[data-bui-ref=banner-close]"
}, this.handlers = {
"close@click":this.close
}, _r_();
}
return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.close = function() {
_i_("3dab:9632d8e1");
var e = this.props, t = e.onAfterClose;
this.root.style.display = "none", t && t.call(this), _r_();
}, _r_(t);
}(E);
x.register("Banner", D);
var I = 7, j = [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ], O = [ "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december" ], $ = function(e) {
return _i_("3dab:dfb4f33c"), _r_(9 >= e ? "0" + e :e.toString());
}, L = function(e) {
return _i_("3dab:3819acd5"), _r_(O.map(function(t) {
return _i_("3dab:e3ec8150"), _r_(e[t]);
}));
}, P = function(e, t) {
return _i_("3dab:7d582962"), _r_(new Date(e.getFullYear(), e.getMonth() + t, 1));
}, H = function(e, t) {
_i_("3dab:fe297ed6");
var i = j.slice(0, t), n = j.slice(t);
return _r_(n.concat(i).map(function(t) {
return _i_("3dab:1eedac8f"), _r_(e[t]);
}));
}, R = function(e, t) {
_i_("3dab:9ddf985e");
for (var i = e.getMonth(), n = e.getFullYear(), r = [], a = new Date(n, i, 1), o = null, _ = null; i === a.getMonth(); ) {
var s = a.getDay(), d = s >= t ? s - t :I - t + s;
(null === o || o > d) && (r.push([]), _ = null === _ ? 0 :_ + 1), r[_][d] = {
date:new Date(a)
}, a.setDate(a.getDate() + 1), o = d;
}
return _r_(r);
}, F = function(e) {
_i_("3dab:23017a27");
var t = e.getFullYear(), i = $(e.getMonth() + 1), n = $(e.getDate());
return _r_(t + "-" + i + "-" + n);
}, q = function(e) {
_i_("3dab:8ae4ab8d");
var t = e.split("-");
return _r_(new Date(t[0], t[1] - 1, t[2]));
}, U = function(e) {
_i_("3dab:ac1f4fc1");
var t = e.day, i = e.minDate, n = e.maxDate;
if (!t) return _r_('<td class="bui-calendar__date bui-calendar__date--empty"></td>');
var r = t.date, a = F(r), o = [ "bui-calendar__date" ], _ = F(new Date());
return a === _ && o.push("bui-calendar__date--today"), (i > a || a > n) && o.push("bui-calendar__date--disabled"), _r_('\n        <td class="' + o.join(" ") + '" data-bui-ref="calendar-date" data-date="' + a + '">\n            ' + r.getDate() + "\n        </td>\n    ");
}, J = function(e) {
_i_("3dab:69ee2a42");
for (var t = e.week, i = e.minDate, n = e.maxDate, r = '<tr class="bui-calendar__row">', a = 0; I > a; a++) r += U({
day:t[a],
minDate:i,
maxDate:n
});
return _r_(r + "</tr>");
}, G = function(e) {
return _i_("3dab:727ff966"), _r_('\n        <tr class="bui-calendar__row">\n            ' + e.map(function(e) {
return _i_("3dab:81f32fca"), _r_('<td class="bui-calendar__day-name">' + e + "</td>");
}).join("") + "\n        </tr>\n    ");
}, V = function(e) {
return _i_("3dab:7e0fe90d"), _r_('\n        <div class="bui-calendar__vertical-header">\n            <table class="bui-calendar__vertical-day-names">\n                <tr class="bui-calendar__row">\n                    ' + e.map(function(e) {
return _i_("3dab:81f32fca1"), _r_('<td class="bui-calendar__day-name">' + e + "</td>");
}).join("") + "\n                </tr>\n            </table>\n        </div>\n    ");
}, W = function(e) {
_i_("3dab:6f922546");
for (var t = e.date, i = e.dayNames, n = e.monthNames, r = e.minDate, a = e.maxDate, o = e.showDayNames, _ = e.firstWeekDay, s = R(t, _), d = n[t.getMonth()], c = t.getFullYear(), l = "", u = 0; u < s.length; u++) l += J({
week:s[u],
minDate:r,
maxDate:a
});
return _r_('\n        <div class="bui-calendar__wrapper">\n            <table class="bui-calendar__dates">\n                <div class="bui-calendar__month">' + d + " " + c + "</div>\n                " + (o ? G(i) :"") + "\n                " + l + "  \n            </table>\n        </div>\n    ");
}, z = 3, Y = function(e) {
_i_("3dab:4cd71059");
function t(t, i) {
_i_("3dab:97fd23ed"), e.call(this, t, i), this.props = Object.assign({}, {
singleDate:!!t.getAttribute("data-single-date"),
vertical:!!t.getAttribute("data-vertical"),
monthsToShow:+t.getAttribute("data-months-to-show") || 1,
minDate:t.getAttribute("data-min-date"),
maxDate:t.getAttribute("data-max-date"),
startDate:t.getAttribute("data-start-date"),
endDate:t.getAttribute("data-end-date"),
firstWeekDay:t.getAttribute("data-first-week-day") || 1,
renderOnHover:t.getAttribute("data-render-on-hover"),
allowSameDateSelection:t.getAttribute("data-allow-same-date-selection"),
renderSelected:null
}, i);
var n = new Date(), r = this.props.startDate ? q(this.props.startDate) :null, a = this.props.endDate ? q(this.props.endDate) :null, o = !this.props.startDate || this.props.endDate || this.props.singleDate ? "start" :"end";
this.modifiers = {
dateDisabled:"bui-calendar__date--disabled",
dateSelected:"bui-calendar__date--selected",
dateInRange:"bui-calendar__date--in-range",
controlHidden:"bui-u-hidden",
vertical:"bui-calendar--vertical"
}, this.attributes = {
date:"data-date"
}, this.selectors = {
content:"[data-bui-ref=calendar-content]",
selectedDisplay:"[data-bui-ref=calendar-selected-display]",
prevButton:"[data-bui-ref=calendar-prev]",
nextButton:"[data-bui-ref=calendar-next]",
date:"[data-bui-ref=calendar-date]"
}, this.handlers = {
"prevButton@click":this._handlePrevClick,
"nextButton@click":this._handleNextClick,
"date@click":this._handleDateClick,
"content@scroll":this._handleScroll,
"state@baseMonthDate":this._handleMonthChange
};
var _ = new Date(n.getFullYear(), n.getMonth(), 1);
this.state = {
today:n,
startDate:r,
endDate:a,
chooseMode:o,
baseMonthDate:_,
hoveredISODate:null
}, this.elContent = t.querySelector(this.selectors.content), this.elSelectedDisplay = t.querySelector(this.selectors.selectedDisplay), this.elPrev = t.querySelector(this.selectors.prevButton), this.elNext = t.querySelector(this.selectors.nextButton), _r_();
}
return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype._isDateDisabled = function(e) {
return _i_("3dab:863ae98e"), _r_(b(e, this.modifiers.dateDisabled));
}, t.prototype._isMinMonth = function(e) {
_i_("3dab:d2bd160a");
var t = this.props, i = t.minDate, n = new Date(e);
n.setDate(n.getDate() - 1);
var r = F(n);
return _r_(i > r);
}, t.prototype._isMaxMonth = function(e) {
_i_("3dab:d913e865");
var t = this.props, i = t.maxDate, n = P(e, 1), r = F(n);
return _r_(r > i);
}, t.prototype._updateDateClassNames = function() {
_i_("3dab:1277373b");
var e = this, t = this.state, i = t.startDate, n = t.endDate, r = t.hoveredISODate, a = t.chooseMode;
this.elsDate.forEach(function(t) {
_i_("3dab:45d75ab9");
var o = t.getAttribute(e.attributes.date), _ = i && F(i), s = n && F(n), d = o === _, c = o === s, l = d || c, u = "end" === a && r > o, f = s > o, h = o > _ && (f || u);
p(t, e.modifiers.dateSelected, l), p(t, e.modifiers.dateInRange, h), _r_();
}), _r_();
}, t.prototype._updateDisplayRender = function(e) {
if (_i_("3dab:129d7722"), !this.props.renderSelected) return _r_();
var t = this.state, i = t.startDate, n = t.endDate, r = t.chooseMode, a = e && q(e), o = "start" === r && a && !i ? a :i, _ = "end" === r && a && !n ? a :n;
this.elSelectedDisplay.innerHTML = this.props.renderSelected({
startDate:o,
endDate:_
}), _r_();
}, t.prototype._getMonthsHTML = function(e) {
_i_("3dab:e26a8eae");
var t = this.props, i = t.minDate, n = t.maxDate, r = t.vertical, a = t.firstWeekDay, o = H(this.props.dayNames, this.props.firstWeekDay), _ = L(this.props.monthNames);
return _r_(W({
date:e,
dayNames:o,
monthNames:_,
minDate:i,
maxDate:n,
firstWeekDay:a,
showDayNames:!r
}));
}, t.prototype._renderMonths = function(e) {
_i_("3dab:af1513a6");
var t = this, i = this.props, n = i.vertical, a = n ? z :this.props.monthsToShow, o = H(this.props.dayNames, this.props.firstWeekDay), _ = "", s = P(e, 0);
n && (_ += V(o));
for (var d = 0; a > d; d++) _ += t._getMonthsHTML(s), 0 === d && p(t.elPrev, t.modifiers.controlHidden, t._isMinMonth(s)), d === a - 1 && p(t.elNext, t.modifiers.controlHidden, t._isMaxMonth(s)), a - 1 > d && (s = P(s, 1));
this.elContent.innerHTML = _, this.elsDate = r(this.selectors.date, this.root), this.elsDate.forEach(function(e) {
_i_("3dab:4395b808"), e.addEventListener("mouseenter", t._handleDateMouseEnter.bind(t)), e.addEventListener("mouseleave", t._handleDateMouseLeave.bind(t)), _r_();
}), this._updateDateClassNames(), this._updateDisplayRender(), _r_();
}, t.prototype._handleScroll = function() {
_i_("3dab:1eb395d5");
var e = this.state, t = e.baseMonthDate;
if (!this.props.vertical || this._isMaxMonth(t)) return _r_();
var i = 200, n = this.elContent.scrollTop + this.elContent.clientHeight, r = this.elContent.scrollHeight - n < i;
if (!r) return _r_();
var a = P(t, 1);
this.elContent.innerHTML += this._getMonthsHTML(a), this.setState({
baseMonthDate:a
}), _r_();
}, t.prototype._handleDateClick = function(e) {
_i_("3dab:6bad8a7f");
var t = e.delegateTarget;
if (e.preventDefault(), this._isDateDisabled(t)) return _r_();
var i = t.getAttribute(this.attributes.date), n = q(i), r = this.props, a = r.onDateChange, o = r.singleDate, _ = r.allowSameDateSelection, s = this.state, d = s.chooseMode, c = s.startDate, l = c && F(c), u = {};
if (i === l && !_) return _r_();
"start" === d ? (u.startDate = n, u.endDate = null, o || (u.chooseMode = "end")) :"end" === d && l > i ? u.startDate = n :(u.endDate = n, u.chooseMode = "start"), this.setState(u), this._updateDateClassNames(), this._updateDisplayRender(), a && a({
startDate:this.state.startDate,
endDate:this.state.endDate
}), _r_();
}, t.prototype._handleDateMouseEnter = function(e) {
_i_("3dab:1a1b122e");
var t = e.target;
if (this._isDateDisabled(t)) return _r_();
var i = t.getAttribute(this.attributes.date);
this.setState({
hoveredISODate:i
}), this._updateDateClassNames(), this.props.renderOnHover && this._updateDisplayRender(i), _r_();
}, t.prototype._handleDateMouseLeave = function() {
_i_("3dab:f03da193"), this.setState({
hoveredISODate:null
}), this._updateDateClassNames(), this.props.renderOnHover && this._updateDisplayRender(), _r_();
}, t.prototype._handlePrevClick = function() {
_i_("3dab:0f6cd203"), this.setState({
baseMonthDate:P(this.state.baseMonthDate, -1)
}), _r_();
}, t.prototype._handleNextClick = function() {
_i_("3dab:f1ad3909"), this.setState({
baseMonthDate:P(this.state.baseMonthDate, 1)
}), _r_();
}, t.prototype._handleMonthChange = function(e) {
if (_i_("3dab:1c5799f5"), this.props.vertical) return _r_();
this._renderMonths(e.baseMonthDate), _r_();
}, t.prototype.onMount = function() {
_i_("3dab:d0dc38ee");
var e = this.state, t = e.baseMonthDate;
p(this.root, this.modifiers.vertical, this.props.vertical), this._renderMonths(t), this.props.vertical && this.setState({
baseMonthDate:P(t, z - 1)
}), _r_();
}, _r_(t);
}(E);
x.register("Calendar", Y);
var K = {
TAB:9,
ENTER:13,
ESCAPE:27,
SPACE:32,
LEFT:37,
UP:38,
RIGHT:39,
DOWN:40,
HOME:36
}, X = ".rtl", Q = function() {
return _i_("3dab:58165d7d"), _r_(!!n(X, document));
}, Z = "scrollBehavior" in document.documentElement.style, ee = 3e3, te = function(e) {
_i_("3dab:ce0b2387");
function t(t, i) {
_i_("3dab:047f87b7"), e.call(this, t, i), this.selectors = {
prevButton:"[data-bui-ref=carousel-prev]",
nextButton:"[data-bui-ref=carousel-next]",
container:"[data-bui-ref=carousel-container]",
item:"[data-bui-ref=carousel-item]"
}, this.modifiers = {
visible:"bui-is-visible",
clickable:"bui-is-clickable"
}, this.handlers = {
"prevButton@click":this.navigatePrev,
"nextButton@click":this.navigateNext,
"root@keyup":this._handleKeyup
}, this.prevButton = n(this.selectors.prevButton, this.root), this.nextButton = n(this.selectors.nextButton, this.root), this.container = n(this.selectors.container, this.root), this.items = r(this.selectors.item, this.root), this.timer = null, this.state = {
currentIndex:0,
atEnd:!1,
atStart:!1,
isRTL:Q()
}, _r_();
}
return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype._handleKeyup = function(e) {
_i_("3dab:655948e2"), e.keyCode === K.LEFT && this.navigatePrev(), e.keyCode === K.RIGHT && this.navigateNext(), _r_();
}, t.prototype._isAtRightPosition = function(e) {
_i_("3dab:a84761ce");
var t = w(this.container).width;
return _r_(e + t + 10 >= this.container.scrollWidth);
}, t.prototype._isAtLeftPosition = function(e) {
return _i_("3dab:c9c78ff6"), _r_(10 > e);
}, t.prototype._updateNavigation = function(e) {
_i_("3dab:16e51a4b");
var t = this, i = this._isAtRightPosition(e), n = this._isAtLeftPosition(e);
if (clearTimeout(this.timer), this.setState({
atEnd:this.state.isRTL ? n :i,
atStart:this.state.isRTL ? i :n
}), !this.prevButton || !this.nextButton) return _r_();
var r = !this.state.atStart, a = !this.state.atEnd;
r ? (f(this.prevButton, this.modifiers.visible), f(this.prevButton, this.modifiers.clickable)) :(h(this.prevButton, this.modifiers.visible), this.timer = setTimeout(function() {
return _i_("3dab:9de0cad1"), _r_(h(t.prevButton, t.modifiers.clickable));
}, ee)), a ? (f(this.nextButton, this.modifiers.visible), f(this.nextButton, this.modifiers.clickable)) :(h(this.nextButton, this.modifiers.visible), this.timer = setTimeout(function() {
return _i_("3dab:65ba4d8a"), _r_(h(t.nextButton, t.modifiers.clickable));
}, ee)), _r_();
}, t.prototype.navigate = function(e) {
_i_("3dab:53ed7c6f");
var t = this, i = t.container, n = this.props, r = n.onAfterNavigate, a = this.state, o = a.atStart, _ = a.atEnd, s = a.currentIndex;
if (void 0 === this.items[e] || o && s > e || _ && e > s) return _r_();
this.setState({
currentIndex:e
});
var d, c = this.items[e], l = w(c), u = w(i);
if (this.state.isRTL) {
var f = i.scrollLeft + l.left - u.left;
d = f + c.clientWidth - i.clientWidth;
} else d = c.offsetLeft;
var h = Math.ceil(d);
Z ? i.scrollTo({
left:h,
behavior:"smooth"
}) :i.scrollLeft = h, this._updateNavigation(h), r && r.call(this, {
index:e
}), _r_();
}, t.prototype.navigatePrev = function() {
_i_("3dab:6e981365");
var e = this.state, t = e.currentIndex;
this.navigate(t - 1), _r_();
}, t.prototype.navigateNext = function() {
_i_("3dab:b8505173");
var e = this.state, t = e.currentIndex;
this.navigate(t + 1), _r_();
}, t.prototype.onMount = function() {
_i_("3dab:9bafc3f8"), this._updateNavigation(this.container.scrollLeft), _r_();
}, _r_(t);
}(E);
x.register("Carousel", te);
var ie = function(e) {
_i_("3dab:d9f889ca");
function t(t, i) {
_i_("3dab:e88fd5a6"), e.call(this, t, i), this.selectors = Object.assign({
button:"[data-bui-ref=dropdown-button]",
menu:"[data-bui-ref=dropdown-menu]",
item:"[data-bui-ref=dropdown-item]"
}, i.selectors), this.handlers = {
"button@click":this._handleClick,
"window@click":this._handleOutsideClick,
"window@keydown":this._handleKeyDown,
"item@keyup":this._handleItemKeyUp,
"item@click":this._handleItemClick,
"state@focusIndex":this._handleFocusChange,
"state@active":this._handleActiveChange
}, this.modifiers = {
disabled:"bui-dropdown--disabled",
active:"bui-dropdown--active",
itemActive:"bui-dropdown__item--active",
itemDisabled:"bui-dropdown__item--disabled"
}, this.state = {
active:!1,
focusIndex:null
}, this.elsItem = r(this.selectors.item, t), this.elButton = n(this.selectors.button, t), _r_();
}
return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype._isItemDisabled = function(e) {
return _i_("3dab:8e23d8ba"), _r_(b(e, this.modifiers.itemDisabled));
}, t.prototype._handleOutsideClick = function(e) {
_i_("3dab:fbd1c64a"), this.state.active && l(e.target, this.root) && this.toggle(), _r_();
}, t.prototype._handleItemChoose = function(e) {
_i_("3dab:c89a8a65");
var t = e.delegateTarget;
if (this._isItemDisabled(t)) return _r_();
this.toggle(), this.props.onItemChoose && this.props.onItemChoose({
event:e,
el:t
}), _r_();
}, t.prototype._handleClick = function(e) {
_i_("3dab:29d29c57"), e.preventDefault(), this.toggle(), _r_();
}, t.prototype._handleItemClick = function(e) {
_i_("3dab:a90cc31e"), this._handleItemChoose(e), _r_();
}, t.prototype._handleItemKeyUp = function(e) {
if (_i_("3dab:4b7aaf27"), e.which !== K.SPACE && e.which !== K.ENTER) return _r_();
this._activateItem(), this._handleItemChoose(e), _r_();
}, t.prototype._handleKeyDown = function(e) {
_i_("3dab:fac67c29");
var t = RegExp(K.UP + "|" + K.DOWN + "|" + K.ESCAPE + "|" + K.TAB + "|" + K.SPACE + "|" + K.ENTER);
if (this.isDisabled() || !this.state.active || !t.test(e.which)) return _r_();
if (e.preventDefault(), e.which === K.ESCAPE) return this.toggle(), this.setState({
focusIndex:null
}), _r_();
if (!this.elsItem.length) return _r_();
e.which === K.TAB && e.shiftKey || e.which === K.UP ? this._changeItemFocus(-1) :(e.which === K.TAB || e.which === K.DOWN) && this._changeItemFocus(1), _r_();
}, t.prototype._handleFocusChange = function(e) {
if (_i_("3dab:0924de26"), null === e.focusIndex) return _r_();
var t = this.elsItem[e.focusIndex];
if (!t) return _r_();
t.focus(), _r_();
}, t.prototype._handleActiveChange = function(e) {
_i_("3dab:fbb4238c"), p(this.root, this.modifiers.active, e.active), _r_();
}, t.prototype._activateItem = function() {
_i_("3dab:227738a0");
var e = this.elsItem[this.state.focusIndex];
if (!e) return _r_();
f(e, this.modifiers.itemActive), _r_();
}, t.prototype._changeItemFocus = function(e) {
if (_i_("3dab:1685d6b8"), Math.abs(e) >= this.elsItem.length) return _r_();
var t, i = this.state, n = i.focusIndex, r = this.elsItem.length - 1, a = n >= r || null === n, o = 0 >= n || null === n;
t = e > 0 && a ? 0 :0 > e && o ? r :n + e;
var _ = this.elsItem[t];
if (this._isItemDisabled(_)) {
var s = e > 0 ? 1 :-1;
return this._changeItemFocus(e + s), _r_();
}
this.setState({
focusIndex:t
}), _r_();
}, t.prototype.isDisabled = function() {
return _i_("3dab:e411c77f"), _r_(b(this.root, this.modifiers.disabled));
}, t.prototype.toggle = function() {
if (_i_("3dab:37d7c785"), this.isDisabled()) return _r_();
var e = this.props, t = e.onAfterOpen, i = e.onAfterClose, n = e.onAfterToggle, r = !this.state.active;
this.setState({
active:r,
focusIndex:null
}), r || this.elButton.focus(), r && t && t.call(this), !r && i && i.call(this), n && n.call(this), _r_();
}, _r_(t);
}(E);
x.register("Dropdown", ie);
var ne = function(e) {
_i_("3dab:c55a7fde");
function t(t, i) {
_i_("3dab:4390a12f"), e.call(this, t, i), this.selectors = {
value:"[data-bui-ref=input-slider-value]",
handle:"[data-bui-ref=input-slider-handle]",
bar:"[data-bui-ref=input-slider-bar]",
display:"[data-bui-ref=input-slider-display]",
selectedArea:"[data-bui-ref=input-slider-selected-area]"
}, this.attributes = {
type:"data-type"
}, this.modifiers = {
activeHandle:"bui-slider__handle--active"
}, this.handlers = {
"handle@mousedown":this._handleMousedown,
"handle@touchstart":this._handleMousedown,
"bar@mousedown":this._handleBarMousedown,
"window@mouseup":this._handleMouseup,
"window@touchend":this._handleMouseup,
"window@mousemove":this._handleMousemove,
"window@touchmove":this._handleMousemove,
"value@change":this._handleChange
}, this.elSelectedArea = t.querySelector(this.selectors.selectedArea), this.elsValue = r(this.selectors.value, t), this.elsHandle = r(this.selectors.handle, t), this.elsDisplay = r(this.selectors.display, t), this.elCurrentHandle = null;
var n = +(i.min || this.elsValue[0].getAttribute("min") || 0), a = +(i.max || this.elsValue[0].getAttribute("max") || 100);
this.state = {
min:n,
max:a,
dragged:!1,
dragId:null,
disabled:this.elsValue[0].disabled,
isRTL:Q()
}, _r_();
}
return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype._getMouseX = function(e) {
if (_i_("3dab:cac1fdd8"), void 0 !== e.pageX) return _r_(e.pageX);
if (e.changedTouches && 1 === e.changedTouches.length) return _r_(e.changedTouches[0].pageX);
if (void 0 !== e.screenX) return _r_(e.screenX);
_r_();
}, t.prototype._getDragId = function() {
return _i_("3dab:c7b41bcf"), _r_(this.elCurrentHandle.getAttribute(this.attributes.type));
}, t.prototype._filterByType = function(e, t) {
_i_("3dab:014c0c1a");
var i = this, n = [];
return e.forEach(function(e) {
_i_("3dab:7c5673ba"), e.getAttribute(i.attributes.type) !== t && t || n.push(e), _r_();
}), _r_(n);
}, t.prototype._handleBarMousedown = function(e) {
_i_("3dab:912d500f");
var t, i = this, n = this._getMouseX(e);
if (this.elsHandle.forEach(function(e) {
_i_("3dab:e16bcea9");
var r = Math.abs(e.getBoundingClientRect().left - n);
(void 0 === t || t > r) && (t = r, i.elCurrentHandle = e), _r_();
}), !this.elCurrentHandle) return _r_();
f(this.elCurrentHandle, this.modifiers.activeHandle), this.setState({
dragged:!0,
dragId:this._getDragId()
}), this._handleMousemove(e), _r_();
}, t.prototype._handleMousedown = function(e) {
if (_i_("3dab:d08527af"), e.preventDefault(), this.state.disabled) return _r_();
this.elCurrentHandle = e.delegateTarget, f(this.elCurrentHandle, this.modifiers.activeHandle), this.setState({
dragged:!0,
dragId:this._getDragId()
}), _r_();
}, t.prototype._handleMouseup = function() {
if (_i_("3dab:7a0c3647"), !this.state.dragged || !this.elCurrentHandle) return _r_();
h(this.elCurrentHandle, this.modifiers.activeHandle), this.setState({
dragId:null,
dragged:!1
}), this.elCurrentHandle = null, _r_();
}, t.prototype._handleMousemove = function(e) {
if (_i_("3dab:e3a69435"), this.state.disabled || !this.state.dragged) return _r_();
var t = this.state, i = t.min, n = t.max, r = this.root.getBoundingClientRect(), a = r.left, _ = r.width, s = this.elsHandle[0], d = this.elsHandle[1], c = this.elCurrentHandle === s && d, l = this.elCurrentHandle === d && s, u = this._getDragId(), f = this._filterByType(this.elsValue, u)[0], h = a, b = h + _, p = this._getMouseX(e);
this.state.isRTL ? (c && (h = d.getBoundingClientRect().right), l && (b = s.getBoundingClientRect().left)) :(c && (b = d.getBoundingClientRect().left), l && (h = s.getBoundingClientRect().right)), h > p && (p = h), p > b && (p = b);
var g = (p - a) / _;
this.state.isRTL && (g = 1 - g), f.value = i + (n - i) * g, o(f, "change"), _r_();
}, t.prototype._handleChange = function(e) {
_i_("3dab:631433a3");
var t = this.props, i = t.onChange, n = e.delegateTarget, r = n.getAttribute(this.attributes.type);
this._moveHandle(r || null), i && i.call(this, {
event:e,
value:n.value
}), _r_();
}, t.prototype._updateSelectedArea = function(e, t) {
_i_("3dab:e44dab78");
var i = this.state.isRTL ? "left" :"right", n = this.state.isRTL ? "right" :"left", r = e.getAttribute(this.attributes.type);
"min" === r ? this.elSelectedArea.style[n] = 100 * t + "%" :this.elSelectedArea.style[i] = 100 * (1 - t) + "%", _r_();
}, t.prototype._updateValueDisplays = function(e, t) {
_i_("3dab:8d0ebe16");
var i = this.props, n = i.renderValue, r = this._filterByType(this.elsDisplay, t);
r.forEach(function(t) {
_i_("3dab:f826744d"), t.innerText = n ? n(e) :e, _r_();
}), _r_();
}, t.prototype._moveHandle = function(e) {
_i_("3dab:f4ba7e1b");
var t = this.state, i = t.min, n = t.max, r = t.isRTL, a = this._filterByType(this.elsValue, e)[0], o = this._filterByType(this.elsHandle, e)[0], _ = (a.value - i) / (n - i), s = r ? "right" :"left";
o.style[s] = 100 * _ + "%", this._updateSelectedArea(o, _), this._updateValueDisplays(a.value, e), a.setAttribute("aria-valuetext", a.value), _r_();
}, t.prototype.onMount = function() {
_i_("3dab:98aa6196");
var e = this;
this.elsHandle.forEach(function(t) {
_i_("3dab:a98bb964"), e._moveHandle(t.getAttribute(e.attributes.type)), _r_();
}), _r_();
}, _r_(t);
}(E);
x.register("InputSlider", ne);
var re = 0, ae = 100, oe = function(e) {
_i_("3dab:1092d28c");
function t(t, i) {
_i_("3dab:65ef3659"), e.call(this, t, i), this.selectors = {
addButton:"[data-bui-ref=input-stepper-add-button]",
subtractButton:"[data-bui-ref=input-stepper-subtract-button]",
value:"[data-bui-ref=input-stepper-value]",
field:"[data-bui-ref=input-stepper-field]"
}, this.handlers = {
"addButton@click":this._handleAddClick,
"subtractButton@click":this._handleSubtractClick,
"field@change":this._handleChange
}, this.elField = this.root.querySelector(this.selectors.field), this.elAddButton = this.root.querySelector(this.selectors.addButton), this.elSubtractButton = this.root.querySelector(this.selectors.subtractButton), this.elValue = this.root.querySelector(this.selectors.value), this.state = {
mounted:!1,
min:i.min || +this.elField.getAttribute("min") || re,
max:i.max || +this.elField.getAttribute("max") || ae
}, _r_();
}
return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype._updateRender = function(e) {
_i_("3dab:9a3f36cd");
var t = this.state, i = t.min, n = t.max;
this._updateButton(this.elAddButton, e === n), this._updateButton(this.elSubtractButton, e === i), this.elValue.innerText = e, _r_();
}, t.prototype._updateButton = function(e, t) {
_i_("3dab:0ed536b5"), t ? e.setAttribute("disabled", !0) :this.mounted && e.removeAttribute("disabled"), _r_();
}, t.prototype._handleAddClick = function(e) {
if (_i_("3dab:29511947"), e.delegateTarget.disabled) return _r_();
this.setValue(this.getValue() + 1), _r_();
}, t.prototype._handleSubtractClick = function(e) {
if (_i_("3dab:fe3d05bf"), e.delegateTarget.disabled) return _r_();
this.setValue(this.getValue() - 1), _r_();
}, t.prototype._handleChange = function(e) {
_i_("3dab:a147d682");
var t = this.props, i = t.onChange, n = +e.delegateTarget.value;
this._updateRender(n), i && i.call(this, {
event:e,
value:n
}), _r_();
}, t.prototype.setValue = function(e) {
_i_("3dab:827e41f3");
var t = this.state, i = t.min, n = t.max;
if (i > e || e > n) return _r_();
this.elField.value = e, o(this.elField, "change"), _r_();
}, t.prototype.getValue = function() {
return _i_("3dab:d8688c0a"), _r_(+this.elField.value || 0);
}, t.prototype.onMount = function() {
_i_("3dab:8d79d9a9");
var e = this.getValue();
this._updateRender(e), this.mounted = !0, _r_();
}, _r_(t);
}(E);
x.register("InputStepper", oe);
var _e = '\n<div class="bui-modal" id="myModal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="myModal-title" aria-describedby="myModal-subtitle">\n        <div class="bui-modal__wrapper">\n            <div class="bui-modal__align">\n                <aside class="bui-modal__content bui_depth_1">\n        \n                    <div data-bui-ref="modal-content-wrapper">\n                    </div>\n        \n                    <button type="button" class="bui-modal__close" aria-label="Close dialog" data-bui-ref="modal-close" data-no-focus-ring>\n                        <svg viewBox="0 0 128 128" height="16" width="16" role="presentation"><path d="M75.31,64l42.35-42.34a8,8,0,1,0-11.32-11.32L64,52.69,21.66,10.34A8,8,0,0,0,10.34,21.66L52.69,64,10.34,106.34a8,8,0,0,0,11.32,11.32L64,75.31l42.34,42.35a8,8,0,0,0,11.32-11.32Z"/></svg>\n                    </button>\n                </aside>\n            </div>\n            <div class="bui-modal__overlay" data-bui-ref="modal-close modal-overlay"></div>\n        </div>\n    </div>\n', se = document.createElement("div");
se.innerHTML = _e;
var de = se.children[0], ce = [ "a[href]", "area[href]", "input", "select", "button", "iframe", "object", "embed" ], le = new RegExp("^(" + ce.join("|") + ")$");
function ue(e) {
return _i_("3dab:0f360b36"), _r_(Boolean("true" === e.contentEditable || e.tabIndex >= 0 || le.test(e.tagName.toLowerCase()) && !e.disabled && "hidden" !== e.type && !e.getAttribute("aria-hidden")));
}
function fe(e) {
_i_("3dab:869dfd48");
var t = ce.concat([ "[contenteditable],[tabindex]" ]).join(",");
return _r_(Array.prototype.filter.call(e.querySelectorAll(t), ue));
}
function he(e) {
_i_("3dab:0c064ca9");
var t = document.activeElement, i = fe(e), n = i.length - 1, r = 0, o = a(document, "keydown", function(e) {
if (_i_("3dab:f3d13598"), e.keyCode !== K.TAB) return _r_();
e.preventDefault(), e.shiftKey ? --r < 0 && (r = n) :++r > n && (r = 0), i[r].focus(), _r_();
});
return i[r].focus(), _r_({
cancel:function() {
_i_("3dab:7d54515b"), s(document, "keydown", o), t && t.focus(), _r_();
}
});
}
function be(e) {
_i_("3dab:f5a984dc");
var t = e.target;
null != t.getAttribute("data-no-focus-ring") && (t.classList.add("no-outline-focus"), t.onmouseleave = function() {
_i_("3dab:2c55637f"), requestAnimationFrame(function() {
_i_("3dab:f49fa973"), h(t, "no-outline-focus"), _r_();
}), _r_();
}), _r_();
}
function pe(e) {
_i_("3dab:fc9a897a"), e.keyCode === K.TAB && document.body.removeEventListener("mouseover", be), _r_();
}
var ge = !1;
function me() {
if (_i_("3dab:2366cc31"), !document.addEventListener || !document.body.classList) return _r_();
ge || (document.body.addEventListener("mouseover", be, !1), document.addEventListener("keydown", pe, !1), ge = !0), _r_();
}
var ve = function() {
return _i_("3dab:a7abd7ad"), _r_(!1);
}, ye = function(e) {
_i_("3dab:ef60c2a6");
function t(t, i) {
_i_("3dab:2d974c02"), e.call(this, t, i), this.props = {
id:i.id || t && t.getAttribute("data-modal-id"),
onBeforeOpen:i.onBeforeOpen ? i.onBeforeOpen.bind(this) :ve,
onAfterOpen:i.onAfterOpen ? i.onAfterOpen.bind(this) :ve,
onBeforeClose:i.onBeforeClose ? i.onBeforeClose.bind(this) :ve,
onAfterClose:i.onAfterClose ? i.onAfterClose.bind(this) :ve
}, this.handlers = {
"root@click":this._handleClickOpen,
"window@keyup":this._handleCloseOnEscapeKey,
"state@isOpen":this._handleIsOpenStateChange
}, this.state = {
isOpen:!1,
template:i.template
}, this.modifiers = {
active:"bui-is-active"
}, this.selectors = {
content:"#" + this.props.id,
contentWrapper:'[data-bui-ref~="modal-content-wrapper"]',
close:'[data-bui-ref~="modal-close"]',
title:'[data-bui-ref~="modal-title"]',
subtitle:'[data-bui-ref~="modal-subtitle"]',
overlay:'[data-bui-ref~="modal-overlay"]'
}, this.elTemplate = n(this.selectors.content, document), _r_();
}
return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype._handleClickOpen = function() {
_i_("3dab:edf75555"), this.open(), _r_();
}, t.prototype._handleCloseOnEscapeKey = function(e) {
_i_("3dab:9936e028"), e.keyCode === K.ESCAPE && this.state.isOpen && this.close(), _r_();
}, t.prototype.open = function() {
_i_("3dab:62133231"), this.setState({
isOpen:!0
}), _r_();
}, t.prototype.close = function() {
_i_("3dab:195bfbae"), this.setState({
isOpen:!1
}), _r_();
}, t.prototype.updateContent = function(e) {
_i_("3dab:4a60e68d"), this._removeModalListeners(), this.setState({
template:e
}), this._buildModalContent(), this.closeEls = r(this.selectors.close, this.modalEl), this._attachModalListeners(), S(this.modalEl), _r_();
}, t.prototype.getModalRoot = function() {
if (_i_("3dab:1a4f293f"), !this.modalEl) return _r_(null);
return _r_(this.modalEl.querySelector(this.selectors.contentWrapper));
}, t.prototype._handleIsOpenStateChange = function(e) {
_i_("3dab:abb57c7b");
var t = e.isOpen;
t ? (this._embedModalEl(), this._attachModalListeners(), this.props.onBeforeOpen(), this._showModal(), S(this.modalEl), this.props.onAfterOpen()) :(this.props.onBeforeClose(), this._hideModal(), this.props.onAfterClose(), this._removeModalListeners(), this._detachModalEl()), _r_();
}, t.prototype._buildModalContent = function() {
_i_("3dab:a4366bd0");
var e = this.state, t = e.template;
this.contentWrapper = n(this.selectors.contentWrapper, this.modalEl), "string" == typeof t ? this.contentWrapper.innerHTML = t :t ? this.contentWrapper.appendChild(t) :this.contentWrapper.innerHTML = n(this.selectors.content).innerHTML;
var i = n(this.selectors.title, this.contentWrapper), r = n(this.selectors.subtitle, this.contentWrapper), a = i && i.getAttribute("id") || null, o = r && r.getAttribute("id") || null;
this.modalEl.setAttribute("id", this.props.id), a && this.modalEl.setAttribute("aria-labelledby", a), o ? this.modalEl.setAttribute("aria-describedby", o) :this.modalEl.removeAttribute("aria-describedby"), _r_();
}, t.prototype._embedModalEl = function() {
_i_("3dab:362d95c6"), this.modalEl = de, this._buildModalContent(), document.body.appendChild(this.modalEl), this.closeEls = r(this.selectors.close, this.modalEl), _r_();
}, t.prototype._detachModalEl = function() {
_i_("3dab:52e05656"), document.body.removeChild(this.modalEl), this.modalEl = null, _r_();
}, t.prototype._attachModalListeners = function() {
_i_("3dab:90c6aff3");
var e = this;
this.closeEls.forEach(function(t) {
return _i_("3dab:80902938"), _r_(a(t, "click", function() {
return _i_("3dab:9be99671"), _r_(e.close());
}));
}), _r_();
}, t.prototype._removeModalListeners = function() {
if (_i_("3dab:166ac834"), !this.closeEls) return _r_();
this.closeEls.forEach(function(e) {
return _i_("3dab:c913d46e"), _r_(s(e, "click"));
}), _r_();
}, t.prototype._showModal = function() {
_i_("3dab:32071a12"), f(this.modalEl, this.modifiers.active), this._adjustScroll(), this.trap = he(this.modalEl), me(), _r_();
}, t.prototype._hideModal = function() {
_i_("3dab:5e5899d9");
var e = this;
h(this.modalEl, this.modifiers.active), B(function() {
_i_("3dab:eed12340"), e._releaseBodyScroll(), e.trap.cancel(), _r_();
}), _r_();
}, t.prototype._adjustScroll = function() {
_i_("3dab:8c628ce9");
var e = this;
B(function() {
_i_("3dab:1099df7a"), e.modalEl.scrollTop = 0, _r_();
}), this._preventBodyScroll(), _r_();
}, t.prototype._preventBodyScroll = function() {
_i_("3dab:43e6fc9b");
var e = document.body.getBoundingClientRect();
if (this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._overflowStyle = document.body.style.overflow, document.body.style.overflow = "hidden", this._isBodyOverflowing) {
var t = v();
document.body.style.paddingRight = t + "px";
}
_r_();
}, t.prototype._releaseBodyScroll = function() {
_i_("3dab:d90f7c82"), document.body.style.overflow = this._overflowStyle, this._isBodyOverflowing && (document.body.style.paddingRight = ""), _r_();
}, t.prototype.onMount = function() {
_i_("3dab:bdbbb453"), this.elTemplate && (this.elTemplate.style.display = "none"), _r_();
}, _r_(t);
}(E);
x.register("Modal", ye);
var we = 768, ke = function() {
return _i_("3dab:b75f9f20"), _r_(document.documentElement && document.documentElement.offsetWidth < we);
};
function Be(e, t) {
return _i_("3dab:d27c0385"), _r_(Math.floor(e + (t - e) / 2));
}
function Me(e, t, i, n) {
_i_("3dab:3fbdde3b");
var r, a, o, _;
switch (e) {
case "bottom":
r = Be(i.left, i.right) - n.width / 2, a = i.bottom + t;
break;

case "top":
r = Be(i.left, i.right) - n.width / 2, a = i.top - n.height - t;
break;

case "start":
case "left":
r = i.left - t - n.width, a = Be(i.top, i.bottom) - n.height / 2;
break;

case "end":
case "right":
r = i.right + t, a = Be(i.top, i.bottom) - n.height / 2;
break;

case "top start":
case "top left":
r = i.left, a = i.top - t - n.height;
break;

case "top end":
case "top right":
r = i.right - n.width, a = i.top - t - n.height;
break;

case "bottom start":
case "bottom left":
r = i.left, a = i.bottom + t;
break;

case "bottom end":
case "bottom right":
r = i.right - n.width, a = i.bottom + t;
break;

default:
return _r_("object" == typeof console && console.warn('"' + e + '" is not a valid position'));
}
return a += window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, r += window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0, o = r + n.width, _ = a + n.height, _r_({
top:a,
left:r,
bottom:_,
right:o
});
}
var xe = [ "bottom right", "bottom", "bottom left", "top right", "top", "top left" ];
function Ce(e, t, i, n) {
_i_("3dab:2f265c0a");
var r = Me(e, t, i, n);
if (r.position = e, !k(r, t)) {
var a = /left/.test(e) ? xe.slice(0).reverse() :xe;
a.some(function(e) {
_i_("3dab:71b690ed");
var a = Me(e, t, i, n);
if (k(a, t)) return r = a, r.position = e, _r_(!0);
_r_();
});
}
return _r_(r);
}
function Ee(e, t, i, n, r) {
_i_("3dab:6811ddd4"), void 0 === i && (i = "bottom"), void 0 === n && (n = 8);
var a = w(t), o = w(e), _ = Ce(i, n, a, o);
_.top && (e.style.top = Math.round(_.top) + "px"), _.left && (e.style.left = Math.round(_.left) + "px"), "function" == typeof r && r(_), _r_();
}
var Te, Se = {
position:Ee,
positionInsideViewport:Ce,
calculatePosition:Me
}, Ae = 16, Ne = 250, De = {
contentId:"data-popover-content-id",
position:"data-popover-position",
noArrow:"data-popover-no-arrow",
trigger:"data-popover-trigger"
}, Ie = function(e) {
_i_("3dab:d25e8747");
function t(t, i) {
switch (_i_("3dab:76b75183"), e.call(this, t, i), this.props = Object.assign({}, i, {
noArrow:i.noArrow || t.hasAttribute(De.noArrow),
position:i.position || t.getAttribute(De.position),
trigger:i.trigger || t.getAttribute(De.trigger) || "hover",
contentId:i.contentId || t.getAttribute(De.contentId)
}), this.modifiers = {
hidden:"bui-u-hidden"
}, this.state = {
active:!1
}, this.handlers = {}, this.props.trigger) {
case "click":
this.handlers["root@click"] = this._handleClick, this.handlers["window@click"] = this._handleOutsideClick;
break;

case "hover":
default:
this.handlers["root@mouseenter"] = this._handleEnter, this.handlers["root@mouseleave"] = this._handleLeave, this.handlers["root@focus"] = this._handleEnter, this.handlers["root@blur"] = this._handleLeave;
}
var n = document.createElement("div");
n.setAttribute("role", "tooltip"), n.style.position = "absolute", n.id = "current-popover", this.container = n;
var r = document.createElement("div");
r.className = "bui-popover__arrow", this.arrow = r, this.leaveTimer = null, _r_();
}
return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype._handleClick = function() {
_i_("3dab:51fc2a4d"), this.state.active ? this.close() :this.open(), _r_();
}, t.prototype._handleOutsideClick = function(e) {
_i_("3dab:95a40163");
var t = this.root === e.target || this.root.contains(e.target), i = this.container === e.target || this.container.contains(e.target);
if (t || i) return _r_();
this.close(), _r_();
}, t.prototype._handleEnter = function() {
_i_("3dab:1024d27d"), this._clearTimeout(), this.open(), _r_();
}, t.prototype._handleLeave = function() {
_i_("3dab:8aad3730"), this._clearTimeout(), this.leaveTimer = setTimeout(this.close.bind(this), Ne), _r_();
}, t.prototype._clearTimeout = function() {
_i_("3dab:4b352f9c"), this.leaveTimer && clearTimeout(this.leaveTimer), _r_();
}, t.prototype.open = function() {
_i_("3dab:3b20b53d");
var e = this;
if (this.state.active || ke()) return _r_();
var t = this, i = t.root, r = t.container, o = t.arrow, _ = t.props, s = _.onAfterOpen, d = _.onAfterToggle;
if (Te && Te.close(), Te = this, this.content = _.content || _.contentId && n("#" + _.contentId).cloneNode(!0), !this.content) return _r_();
"hover" === _.trigger && (a(this.content, "mouseenter", function() {
return _i_("3dab:2acbd72c"), _r_(e._clearTimeout());
}), a(this.content, "mouseleave", function() {
return _i_("3dab:f4e1596f"), _r_(e._handleLeave());
})), i.setAttribute("aria-describedby", r.id), r.appendChild(this.content), r.appendChild(o), r.style.opacity = 0, f(r, "bui-popover"), h(this.content, this.modifiers.hidden), this.content.style.display = "block", p(this.arrow, this.modifiers.hidden, _.noArrow), document.body.appendChild(r), Se.position(r, i, _.position, Ae, function(e) {
_i_("3dab:c74ffc20");
var t = e.position, i = t.replace(" ", "-").replace("left", "start").replace("right", "end");
f(r, "bui-popover--" + i), _r_();
}), r.style.opacity = 1, this.setState({
active:!0
}), s && s.call(this), d && d.call(this), _r_();
}, t.prototype.close = function() {
if (_i_("3dab:22c52e1d"), !this.state.active) return _r_();
var e = this.props, t = e.onAfterClose, i = e.onAfterToggle;
this._clearTimeout(), s(this.content, "mouseenter"), s(this.content, "mouseleave"), document.body.removeChild(this.container), this.content = null, this.container.innerHTML = "", this.setState({
active:!1
}), Te = null, t && t.call(this), i && i.call(this), _r_();
}, _r_(t);
}(E);
x.register("Popover", Ie);
var je = function(e) {
_i_("3dab:cc796ccd");
function t(t, i) {
_i_("3dab:87fd2bad"), e.call(this, t, i), this.selectors = {
radio:"[data-bui-ref=segmented-control-radio]",
select:"[data-bui-ref=segmented-control-select]"
}, this.handlers = {
"radio@change":this._handleRadioChange,
"select@change":this._handleSelectChange,
"state@value":this._handleValueChange
}, this.radioEls = r(this.selectors.radio, this.root), this.selectEl = n(this.selectors.select, this.root), this.radioArray = [].slice.call(this.radioEls), this.state = {
value:null
}, _r_();
}
return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype._getCheckedRadio = function() {
_i_("3dab:ecd9db53");
var e = this.radioArray.filter(function(e) {
return _i_("3dab:b154b0ec"), _r_(e.hasAttribute("checked"));
})[0];
return _r_(this._getRadioValue(e));
}, t.prototype._getRadioValue = function(e) {
return _i_("3dab:2ae7f8d6"), _r_(e && e.value || this.radioArray[0].value);
}, t.prototype._getSelectValue = function() {
return _i_("3dab:338e4f56"), _r_(this.selectEl.value);
}, t.prototype._handleRadioChange = function(e) {
if (_i_("3dab:b363d508"), this.selectEl) {
var t = e && e.target || null, i = this._getRadioValue(t);
this.setState({
value:i
});
}
_r_();
}, t.prototype._handleSelectChange = function() {
if (_i_("3dab:448ce701"), this.radioArray.length) {
var e = this._getSelectValue();
this.setState({
value:e
});
}
_r_();
}, t.prototype._handleValueChange = function(e) {
_i_("3dab:abbb2c7d");
var t = e.value, i = this.props, n = i.onChange;
this.selectEl.value = t, t ? this.radioArray.forEach(function(e) {
_i_("3dab:2b82770b"), e.value === t ? (e.checked = !0, e.setAttribute("checked", "")) :e.removeAttribute("checked"), _r_();
}) :this.radioArray.forEach(function(e) {
_i_("3dab:f06216ed"), e.hasAttribute("checked") && (e.checked = !1, e.removeAttribute("checked")), _r_();
}), n && n.call(this, {
value:t
}), _r_();
}, t.prototype.onMount = function() {
_i_("3dab:e8689d34"), this.radioArray.length && this.selectEl && this.setState({
value:this._getCheckedRadio()
}), _r_();
}, _r_(t);
}(E);
x.register("SegmentedControl", je);
var Oe = {
id:"data-tab-id",
ariaSelected:"aria-selected",
moreTranslation:"data-more-translation"
}, $e = 0, Le = function(e) {
_i_("3dab:d5601ff2");
var t = {
"class":"bui-dropdown__item",
"data-bui-ref":"dropdown-item",
tabindex:"0",
role:"tab"
}, i = e.map(function(e) {
_i_("3dab:6eb1a4b7");
var i = [].slice.call(e.attributes), n = i.reduce(function(e, t) {
return _i_("3dab:d414c9dc"), e[t.name] = t.value, _r_(e);
}, {}), r = Object.assign({}, n, t), a = Object.keys(r).reduce(function(e, t) {
return _i_("3dab:cf93a7b3"), _r_(e + " " + t + '="' + r[t] + '"');
}, "");
return _r_({
text:e.innerHTML,
attrString:a
});
});
return _r_('\n        <div class="bui-dropdown__menu" data-bui-ref="dropdown-menu" role="menu">\n            <ul class="bui-dropdown__content">\n                ' + i.map(function(e) {
return _i_("3dab:37e49f47"), _r_("\n                    <li>\n                        <a " + e.attrString + '>\n                            <span class="bui-dropdown__item-content">' + e.text + "</span>\n                        </a>\n                    </li>\n                ");
}).join("") + "\n            </ul>\n        </div>\n    ");
}, Pe = function(e) {
_i_("3dab:facd410e");
function t(t, i) {
_i_("3dab:84eb646f"), e.call(this, t, i), this.props = Object.assign({}, i, {
moreTranslation:i.moreTranslation || t.getAttribute(Oe.moreTranslation)
}), this.selectors = {
item:"[data-bui-ref=tab-item]",
button:"[data-bui-ref=tab-button]",
content:"[data-bui-ref=tab-content]",
more:"[data-bui-ref=tab-more]",
moreButton:"[data-bui-ref=tab-more-button]",
moreContent:"[data-bui-ref=tab-more-content]"
}, this.modifiers = {
buttonActive:"bui-tab__link--selected",
itemHidden:"bui-tab__item--hidden",
moreActive:"bui-tab__item--more-active",
contentActive:"bui-tab__content--selected"
}, this.handlers = {
"button@click":this._handleButtonClick,
"window@resize":_(this._toggleMore, 10),
"item@focusin":this._handleTabFocus,
"root@keyup":this._handleKeyboardEvents
}, this.elsItem = r(this.selectors.item, t), this.elsContent = r(this.selectors.content, t), this.elsButton = r(this.selectors.button, t), this.elMore = t.querySelector(this.selectors.more), this.elMoreContent = t.querySelector(this.selectors.moreContent), this.elMoreButton = t.querySelector(this.selectors.moreButton), this.dropdownInstance = null, this.state = {
currentTabId:$e,
visibleButtons:this.elsButton.length,
moreWidth:0
}, _r_();
}
return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype._handleButtonClick = function(e) {
_i_("3dab:d2160c74");
var t = e.delegateTarget, i = t.getAttribute(Oe.id);
if (!i) return _r_();
e.preventDefault(), this.changeTab(i), _r_();
}, t.prototype._handleDropdownItemChoose = function(e) {
_i_("3dab:b6bd51a7");
var t = e.event, i = t.delegateTarget, n = i.getAttribute(Oe.id);
if (!n) return _r_();
t.preventDefault(), this.changeTab(n), _r_();
}, t.prototype._toggleMore = function() {
_i_("3dab:bf583f40");
var e = this;
if (!this.elMore) return _r_();
var t = !1, i = 0, n = this.root.clientWidth - this.state.moreWidth, r = [];
this.elsItem.forEach(function(a, o) {
_i_("3dab:eff2b331");
var _ = e.elsButton[o];
h(a, e.modifiers.itemHidden), i += a.clientWidth, i >= n && (t = !0), t && r.push(_), p(a, e.modifiers.itemHidden, t), _r_();
}), this.state.visibleButtons !== r.length && (this.setState({
visibleButtons:r.length
}), this.elMoreContent.innerHTML = Le(r), p(this.elMore, this.modifiers.moreActive, t)), t && this._createDropdownInstance(), _r_();
}, t.prototype._getMoreWidth = function() {
if (_i_("3dab:b5323d48"), !this.elMore) return _r_();
f(this.elMore, this.modifiers.moreActive), this.setState({
moreWidth:this.elMore.clientWidth
}), h(this.elMore, this.modifiers.moreActive), _r_();
}, t.prototype._createDropdownInstance = function() {
if (_i_("3dab:212b328f"), !this.elMore) return _r_();
this.dropdownInstance && this.dropdownInstance.unmount(), this.dropdownInstance = T("Dropdown", this.elMore, {
selectors:{
button:this.selectors.moreButton
},
onItemChoose:this._handleDropdownItemChoose.bind(this)
}), this.dropdownInstance.mount(), _r_();
}, t.prototype._handleTabFocus = function(e) {
_i_("3dab:f296d7b8");
var t = e.target.getAttribute(Oe.id);
this.changeTab(t), _r_();
}, t.prototype._handleKeyboardEvents = function(e) {
_i_("3dab:3c0a7253");
var t = this;
if (!this.elsButton || this.elsButton.length <= 1) return _r_();
var i = K.LEFT, n = K.RIGHT, r = K.HOME, a = e.keyCode, o = this.elsButton.length - 1, _ = this.state.currentTabIndex === o ? 0 :this.state.currentTabIndex + 1, s = 0 === this.state.currentTabIndex ? o :this.state.currentTabIndex - 1, d = function(e) {
return _i_("3dab:e83dbf32"), _r_(t.elsButton[e].getAttribute(Oe.id));
};
switch (a) {
case n:
this.changeTab(d(_));
break;

case i:
this.changeTab(d(s));
break;

case r:
this.changeTab(d(0));
}
_r_();
}, t.prototype.changeTab = function(e) {
_i_("3dab:4bc03295");
var t, i, n = this, r = this.props, a = r.onAfterTabChange, o = this.modifiers, _ = o.buttonActive, s = o.contentActive;
this.elsButton.forEach(function(t, r) {
_i_("3dab:5d217489");
var a = t.getAttribute(Oe.id);
h(t, _), a === e && (i = t, n.setState({
currentTabIndex:r
})), _r_();
}), this.elsContent.forEach(function(i) {
_i_("3dab:ba41e381");
var n = i.getAttribute(Oe.id);
h(i, s), n === e && (t = i), _r_();
}), this.elsItem.forEach(function(e) {
_i_("3dab:3c41067d"), "true" === e.getAttribute(Oe.ariaSelected) && e.setAttribute(Oe.ariaSelected, "false"), _r_();
}), i && (i.parentElement.setAttribute(Oe.ariaSelected, "true"), f(i, _)), t && f(t, s), a && a.call(this, {
id:e
}), _r_();
}, t.prototype.onMount = function() {
if (_i_("3dab:5562de1d"), !this.props.moreTranslation && this.elMore) throw new Error("BUI Tab: Translation is not provided for More button");
this.elMoreButton && (this.elMoreButton.innerText = this.props.moreTranslation), this._getMoreWidth(), this._toggleMore(), _r_();
}, _r_(t);
}(E);
x.register("Tab", Pe);
var He = function(e) {
_i_("3dab:760706c0");
function t(t, i) {
_i_("3dab:32697666"), e.call(this, t, i), this.selectors = {
expander:"[data-bui-ref=table-row-expander]",
selector:"[data-bui-ref=table-row-selector]",
checkbox:"[data-bui-ref=table-checkbox]",
checkboxAll:"[data-bui-ref=table-checkbox-all]",
ignoreAction:"[data-bui-ref=table-ignore-action]"
}, this.modifiers = {
rowExpanded:"bui-table__row--expanded",
rowSelected:"bui-table__row--selected",
checkboxIndeterminate:"bui-checkbox__input--indeterminate"
}, this.handlers = {
"expander@click":this._handleExpand,
"selector@click":this._handleSelect,
"checkbox@change":this._handleChange,
"checkboxAll@change":this._handleChangeAll
}, this.elCheckboxAll = t.querySelector(this.selectors.checkboxAll), this.elsCheckbox = r(this.selectors.checkbox, t), this.elsRowSelector = r(this.selectors.selector, t), this.elsIgnore = r(this.selectors.ignoreAction, t), _r_();
}
return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype._isFocusableElementClicked = function(e) {
_i_("3dab:26731ca0");
for (var t = e.target, i = [].slice.call(this.elsIgnore, 0); t !== e.delegateTarget; ) {
if (-1 != i.indexOf(t)) return _r_(!0);
t = t.parentNode;
}
return _r_(!1);
}, t.prototype._handleExpand = function(e) {
if (_i_("3dab:9870d508"), this._isFocusableElementClicked(e)) return _r_();
p(e.delegateTarget, this.modifiers.rowExpanded), _r_();
}, t.prototype._handleSelect = function(e) {
if (_i_("3dab:eac9310f"), this._isFocusableElementClicked(e)) return _r_();
var t = e.delegateTarget, i = t.querySelector(this.selectors.checkbox);
i.checked = !i.checked, o(i, "change"), _r_();
}, t.prototype._handleChange = function(e) {
_i_("3dab:6a8dc66b");
var t = c(e.target, this.selectors.selector), i = this.elsCheckbox.length, n = 0;
p(t, this.modifiers.rowSelected, e.target.checked), this.elsCheckbox.forEach(function(e) {
_i_("3dab:528a3a84"), e.checked && (n += 1), _r_();
}), this.elCheckboxAll.indeterminate = i > n && n > 0, this.elCheckboxAll.checked = n === i, _r_();
}, t.prototype._handleChangeAll = function(e) {
_i_("3dab:4bbe60de");
var t = this, i = e.delegateTarget;
this.elsCheckbox.forEach(function(e) {
return _i_("3dab:453e0de5"), _r_(e.checked = i.checked);
}), this.elsRowSelector.forEach(function(e) {
return _i_("3dab:f2153069"), _r_(p(e, t.modifiers.rowSelected, i.checked));
}), _r_();
}, _r_(t);
}(E);
x.register("Table", He);
var Re = {
text:"data-tooltip-text",
position:"data-tooltip-position",
follow:"data-tooltip-follow",
light:"data-tooltip-light"
}, Fe = 8, qe = function(e) {
return _i_("3dab:32996202"), _r_('\n    <div class="bui-tooltip__content">' + e + '</div>\n    <div class="bui-tooltip__arrow"></div>\n');
}, Ue = function(e) {
_i_("3dab:3964dec1");
function t(t, i) {
_i_("3dab:ad56ca9b"), e.call(this, t, i), this.state = {
active:!1
}, this.modifiers = {
light:"bui-tooltip--light",
noArrow:"bui-tooltip--no-arrow"
}, this.handlers = {
"root@mouseenter":this.show,
"root@mouseleave":this.hide,
"root@focus":this.show,
"root@hide":this.hide
}, this.props = Object.assign({}, i, {
text:i.text || t.getAttribute("title") || t.getAttribute("aria-label"),
position:i.position || t.getAttribute(Re.position) || "bottom",
follow:i.follow || null !== t.getAttribute(Re.follow),
light:i.light || null !== t.getAttribute(Re.light)
}), this.container = document.createElement("div"), this.container.setAttribute("role", "tooltip"), this.container.style.position = "absolute", this.container.className = "bui-tooltip", this.container.id = "current-tooltip", _r_();
}
return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype._follow = function(e) {
_i_("3dab:6a2fef8b"), this.container.style.left = e.pageX + 16 + "px", this.container.style.top = e.pageY + 16 + "px", _r_();
}, t.prototype.show = function() {
_i_("3dab:079054f7");
var e = this;
if (ke() || this.state.active) return _r_();
var t = this.props, i = this.props, n = i.onAfterShow, r = i.onAfterToggle;
this.root.setAttribute("aria-describedby", this.container.id), this.container.innerHTML = qe(t.text), this.container.style.opacity = "0", t.light && f(this.container, this.modifiers.light), document.body.appendChild(this.container), t.follow ? (f(this.container, this.modifiers.noArrow), a(this.root, "mousemove", this._follow.bind(this))) :Se.position(this.container, this.root, t.position, Fe, function(t) {
_i_("3dab:c522f05b");
var i = t.position, n = i.replace(" ", "-").replace("left", "start").replace("right", "end");
f(e.container, "bui-tooltip--" + n), _r_();
}), this.container.style.opacity = "1", this.setState({
active:!0
}), n && n.call(this), r && r.call(this), _r_();
}, t.prototype.hide = function() {
if (_i_("3dab:c47272af"), !this.state.active) return _r_();
var e = this.props, t = e.onAfterHide, i = e.onAfterToggle;
document.body.removeChild(this.container), s(this.root, "mousemove", this._follow.bind(this)), this.container.innerHTML = "", this.setState({
active:!1
}), t && t.call(this), i && i.call(this), _r_();
}, t.prototype.onMount = function() {
_i_("3dab:d832a469");
var e = this.props, t = e.text;
t && (this.root.removeAttribute("title"), this.root.removeAttribute("aria-label"), this.root.setAttribute(Re.text, t)), _r_();
}, _r_(t);
}(E);
x.register("Tooltip", Ue), _r_();
}(), B.when({
action:"index",
events:"click #btn_deals_index_banner_close"
}).run(function(e) {
_i_("3dab:1f4ab3c5");
var t = e("dismiss-item");
t("deals_index_banner"), _r_();
}), B.when({
action:"index",
events:"click #btn_deals_index_banner_cgw_close"
}).run(function(e) {
_i_("3dab:51a0ee4e");
var t = e("dismiss-item");
t("deals_index_banner_cgw"), _r_();
}), B.when({
action:"index",
events:"click #raf_banner_close"
}).run(function(e) {
_i_("3dab:97fd7ae7");
var t = e("dismiss-item");
t("raf_banner"), _r_();
}), B.when({
action:"index",
events:"click #emk_banner_index_close"
}).run(function(e) {
_i_("3dab:3a4ea5b5");
var t = e("dismiss-item");
t("emk_banner_index"), _r_();
}), B.when({
action:"index",
events:"click #signin_banner_close"
}).run(function(e) {
_i_("3dab:cd9acd7a");
var t = e("dismiss-item");
t("signin_banner"), _r_();
}), B.when({
action:"index",
events:"click #join_index_banner_close"
}).run(function(e) {
_i_("3dab:f1725239");
var t = e("dismiss-item");
t("join_index_banner"), _r_();
}), B.when({
condition:window.perfMetrics && perfMetrics.onFirstInputDelay && !0
}).run(function(e) {
"use strict";
_i_("3dab:f71e8e3e");
var t = B.debug("fid"), i = e("ga-tracker"), n = e("et");
perfMetrics.onFirstInputDelay(function(e, r) {
_i_("3dab:eb2e13b1");
var e = Math.round(e), a = Math.round(r.timeStamp);
t.log("delay", e, "time", a), i.trackTiming("Performance", "First Input Delay", e, B.env.b_action), i.trackTiming("Performance", "Time To First Input", a, B.env.b_action), n.goalWithValue("js_first_input_delay_violation", e > 100 ? 1 :0), n.goalWithValue("js_time_to_first_input", a), _r_();
}), _r_();
}), function() {
"use strict";
_i_("3dab:71521644");
var e = "Atlas/";
function t(t) {
return _i_("3dab:212232c8"), _r_(e + t);
}
function i(e, i) {
_i_("3dab:a50b4c09");
var n = [].slice.call(arguments, 0);
return "string" == typeof e ? n[0] = t(e) :Array.isArray(e) ? n[0] = e.map(t) :Array.isArray(i) && (n[1] = e.map(t)), _r_(B.require.apply(this, n));
}
function n(e, i) {
_i_("3dab:28581426");
var n = [].slice.call(arguments, 0);
n[0] = t(e), Array.isArray(i) && (n[1] = i.map(t)), B.define.apply(this, n), _r_();
}
B.atlas = B.atlas || {
requirejs:i,
require:i,
define:n
}, _r_();
}(), booking.define("squeak", function() {
"use strict";
_i_("3dab:fdba83f8");
var e = 10, t = !1, i = [], n = {};
function r() {
_i_("3dab:068737cb"), i.length ? setTimeout(o, 1e3) :t = !1, _r_();
}
function a(r) {
if (_i_("3dab:3c0bc2e3"), n.hasOwnProperty(r) || (n[r] = 0), ++n[r] > e) return _r_();
if (i.push(r), t) return _r_();
t = !0, setTimeout(o, 1e3), _r_();
}
function o() {
_i_("3dab:18b82f98"), $.ajax({
url:"/squeak",
type:"GET",
success:r,
error:r,
data:{
pid:booking.env.pageview_id,
stid:booking.env.b_stid,
sqk:"1:" + i.join(",")
}
}), i = [], _r_();
}
return _r_(a);
}), booking.squeak = booking.require("squeak"), booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.main.run = !0);