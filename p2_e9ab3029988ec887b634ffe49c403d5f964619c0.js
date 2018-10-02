var _i_ = this._i_ || function() {}, _r_ = this._r_ || function(e) {
return e;
};

B.define("caret", function() {
_i_("4ab:50a5d6aa");
var e = function(e) {
_i_("4ab:1399bc4f");
var t;
if (!e) return _r_();
if (document.selection) return e.focus(), t = document.selection.createRange(), t.moveStart("character", -e.value.length), _r_(t.text.length);
if (e.selectionStart || 0 === e.selectionStart) return _r_(e.selectionStart);
return _r_(0);
}, t = function(e, t) {
_i_("4ab:536e7091");
var i;
if (!e) return _r_();
document.selection ? (e.focus(), i = document.selection.createRange(), i.moveStart("character", -e.value.length), i.moveStart("character", t), i.moveEnd("character", 0), i.select()) :(e.selectionStart || 0 === e.selectionStart) && (e.selectionStart = t, e.selectionEnd = t, e.focus()), _r_();
}, i = function(e, t, i) {
_i_("4ab:b3966198");
var n;
if (!e) return _r_();
document.selection ? (e.focus(), n = document.selection.createRange(), n.moveStart("character", -e.value.length), n.moveStart("character", t), n.moveEnd("character", i - t), n.select()) :(e.selectionStart || 0 === e.selectionStart) && (e.selectionStart = t, e.selectionEnd = i, e.focus()), _r_();
}, n = function(e) {
_i_("4ab:735a2def");
var t;
if (!e) return _r_();
if (document.selection) return e.focus(), t = document.selection.createRange(), _r_(t.text.length || 0);
if (e.selectionStart || 0 === e.selectionStart) return _r_(e.selectionEnd - e.selectionStart);
return _r_(0);
};
return _r_({
getPosition:e,
setPosition:t,
setSelection:i,
getSelectionLength:n
});
}), B.define("click-out", function(e, t, i) {
"use strict";
_i_("4ab:fff452bb");
var n = {}, a = !1;
function s() {
_i_("4ab:c17566ca"), a || (a = !0, document.documentElement.addEventListener ? document.documentElement.addEventListener("click", r) :document.documentElement.attachEvent && document.documentElement.attachEvent("onclick", r)), _r_();
}
function r(e) {
_i_("4ab:ad210c4a");
var t, i = Object.keys(n), a = {}, s = !1;
if (i.length) for (t = e.target || e.srcElement; t && (i.forEach(function(e) {
_i_("4ab:efe0fbc1"), n[e].element === t && (a[e] = !0, 1 == i.length && (s = !0)), _r_();
}), !s); ) t = t.parentNode;
i.forEach(function(e) {
_i_("4ab:bf144444"), !a[e] && n[e] && (n[e].callback.call(!1), o(e)), _r_();
}), _r_();
}
function o(e) {
_i_("4ab:e16b90f5"), n[e] && delete n[e], _r_();
}
function _() {
_i_("4ab:d4e2fa88");
var e = Object.keys(n);
e.forEach(function(e) {
_i_("4ab:ffe354e3"), n[e].callback.call(!1), o(e), _r_();
}), _r_();
}
t.addMonitor = function(e, t) {
_i_("4ab:4eea37e7"), s();
var i = Math.random();
return "string" == typeof e.jquery && (e = e[0]), setTimeout(function() {
_i_("4ab:9952e084"), n[i] = {
element:e,
callback:t
}, _r_();
}, 4), _r_(i);
}, t.removeMonitor = o, t.forceClickOut = _, _r_();
}), B.define("deny-focus", function(e, t, i) {
"use strict";
return _i_("4ab:c105dfa2"), _r_({
_focusAttributes:{
tabindex:-1,
"aria-hidden":!0
},
_denyFocusOn:[],
_get:function(e) {
return _i_("4ab:49251ead"), _r_(this._denyFocusOn.filter(function(t) {
if (_i_("4ab:5bd98b23"), t.el === e) return _r_(!0);
return _r_(!1);
})[0]);
},
_add:function(e) {
_i_("4ab:3560760b");
var t = this._getFocusableElements(e), i = {
el:e,
focusable:t,
focusableOriginalAttributes:this._buildAttributesObject(t)
};
return this._denyFocusOn.push(i), _r_(i);
},
_update:function(e) {
_i_("4ab:3e71e8fe");
var t = this._getFocusableElements(e.el);
e.focusable = t, e.focusableOriginalAttributes = this._buildAttributesObject(t), _r_();
},
_buildAttributesObject:function(e) {
return _i_("4ab:9f219c08"), _r_(e.map(function(e) {
_i_("4ab:48092da2");
var t = {};
return Object.keys(this._focusAttributes).forEach(function(i) {
_i_("4ab:42b3beef"), t[i] = e.getAttribute(i), _r_();
}), _r_(t);
}.bind(this)));
},
_getFocusableElements:function(e) {
_i_("4ab:5fdb8c82");
var t = e.querySelectorAll("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]");
return _r_(Array.prototype.slice.call(t));
},
deny:function(e) {
if (_i_("4ab:71875e1f"), !e || !e instanceof Node) return console.log("Please provide a valid DOMElement to deny focus for"), _r_(!1);
var t = this._get(e);
t ? this._update(t) :t = this._add(e), t.focusable.forEach(function(e) {
_i_("4ab:ead5a0b7"), Object.keys(this._focusAttributes).forEach(function(t) {
_i_("4ab:f3a3f028"), e.setAttribute(t, this._focusAttributes[t]), _r_();
}.bind(this)), _r_();
}.bind(this)), _r_();
},
allow:function(e) {
if (_i_("4ab:1c780576"), !e || !e instanceof Node) return console.log("Please provide a valid DOMElement to deny focus for"), _r_(!1);
var t = this._get(e);
return t ? (t.focusable.forEach(function(e, i) {
_i_("4ab:79cd96c7");
var n = t.focusableOriginalAttributes[i];
Object.keys(n).forEach(function(t) {
_i_("4ab:6f949722");
var i = n[t], a = null === i || void 0 === i;
a ? e.removeAttribute(t) :e.setAttribute(t, n[t]), _r_();
}), _r_();
}), _r_(!0)) :_r_(!1);
}
});
}), B.define("keycodes", [], function() {
"use strict";
_i_("4ab:f9eca8dd");
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
return _i_("4ab:2984a907"), _r_(e.slice(0, 1).toUpperCase() + e.slice(1));
}
function i(e, t) {
_i_("4ab:83a52ba4");
for (var i = [], n = 0; t - e >= n; n++) i.push(e + n);
return _r_(i);
}
function n(e) {
_i_("4ab:0fefaabc");
var t = 65;
return _r_("abcdefghijklmnopqrstuvwxyz".split("").reduce(function(e, i) {
return _i_("4ab:d3ccc5bc"), e[i] = t++, _r_(e);
}, e));
}
function a(t, i) {
if (_i_("4ab:768b926a"), Array.isArray(e[t]) && -1 !== e[t].indexOf(i)) return _r_(!0);
if (e[t] === i) return _r_(!0);
return _r_(!1);
}
function s(e, t) {
return _i_("4ab:bf671d22"), _r_(a(t, e));
}
function r(t) {
_i_("4ab:ad5c6319");
var i = [];
return Object.keys(e).forEach(function(e) {
_i_("4ab:8fc15c2d"), a(e, t) && i.push(e), _r_();
}), _r_(i);
}
var o = {
getTypes:r,
isKeycodeType:s
};
return Object.keys(e).forEach(function(e) {
_i_("4ab:484ba84e"), o["is" + t(e)] = function(t) {
return _i_("4ab:4209f82c"), _r_(s(t, e));
}, _r_();
}), _r_(o);
}), B.define("read-data-options", function(e, t, i) {
_i_("4ab:b2e7a21d"), i.exports = function(e, t) {
_i_("4ab:9b133c1b");
var i = {};
return e.jquery && (e = e[0]), Object.keys(t).forEach(function(n) {
_i_("4ab:dcce8877");
var a = t[n], s = "data-" + n, r = null;
if ("function" == typeof a && (a = {
type:a
}), "string" == typeof a.name && (s = "data-" + a.name), !e.attributes[s]) {
if (a.hasOwnProperty("defaultValue")) i[n] = a.defaultValue; else if (a.hasOwnProperty("required")) throw new Error("read-data-options: missing required " + s + " attribute");
return _r_();
}
var r = e.getAttribute(s);
if (a.type === Boolean) r = !/^0|false|no|off$/.test(r); else if (a.type === String) r = r || a.defaultValue; else {
if (a.type !== Number) throw new Error("data-options: Invalid option type for " + n);
r = parseFloat(r, 10), isNaN(r) && (r = a.defaultValue);
}
i[n] = r, _r_();
}), _r_(i);
}, _r_();
}), B.define("calendar-base", function(e, t, i) {
_i_("4ab:75a1be19");
function n(e) {
_i_("4ab:eadb8bc9"), e = e || {}, this.startDate = e.startDate, this.endDate = e.endDate, this.siblingMonths = e.siblingMonths, this.weekNumbers = e.weekNumbers, this.weekStart = e.weekStart, void 0 === this.weekStart && (this.weekStart = 0), _r_();
}
n.prototype.getCalendar = function(e, t) {
_i_("4ab:af5a1508");
var i = new Date(Date.UTC(e, t, 1, 0, 0, 0, 0));
e = i.getUTCFullYear(), t = i.getUTCMonth();
for (var a, s, r, o, _, l = [], d = i.getUTCDay(), h = -((7 - this.weekStart + d) % 7), c = n.daysInMonth(e, t), u = (c - h) % 7, f = n.daysInMonth(e, t - 1), p = h, b = c - p + (0 != u ? 7 - u :0) + h, m = null; b > p; ) s = p + 1, a = ((1 > p ? 7 + p :p) + d) % 7, 1 > s || s > c ? this.siblingMonths ? (1 > s ? (o = t - 1, _ = e, 0 > o && (o = 11, _--), s = f + s) :s > c && (o = t + 1, _ = e, o > 11 && (o = 0, _++), s = p - c + 1), r = {
day:s,
weekDay:a,
month:o,
year:_,
siblingMonth:!0
}) :r = !1 :r = {
day:s,
weekDay:a,
month:t,
year:e
}, r && this.weekNumbers && (null === m ? m = n.calculateWeekNumber(r) :1 == a && 52 == m ? m = 1 :1 == a && m++, r.weekNumber = m), r && this.startDate && (r.selected = this.isDateSelected(r)), l.push(r), p++;
return _r_(l);
}, n.prototype.isDateSelected = function(e) {
if (_i_("4ab:15796b9b"), e.year == this.startDate.year && e.month == this.startDate.month && e.day == this.startDate.day) return _r_(!0);
if (this.endDate) {
if (e.year == this.startDate.year && e.month == this.startDate.month && e.day < this.startDate.day) return _r_(!1);
if (e.year == this.endDate.year && e.month == this.endDate.month && e.day > this.endDate.day) return _r_(!1);
if (e.year == this.startDate.year && e.month < this.startDate.month) return _r_(!1);
if (e.year == this.endDate.year && e.month > this.endDate.month) return _r_(!1);
if (e.year < this.startDate.year) return _r_(!1);
if (e.year > this.endDate.year) return _r_(!1);
return _r_(!0);
}
return _r_(!1);
}, n.prototype.setStartDate = function(e) {
_i_("4ab:b46bd485"), this.startDate = e, _r_();
}, n.prototype.setEndDate = function(e) {
_i_("4ab:5e5b3f69"), this.endDate = e, _r_();
}, n.prototype.setDate = n.prototype.setStartDate, n.diff = function(e, t) {
return _i_("4ab:bd7e1bb7"), e = new Date(Date.UTC(e.year, e.month, e.day, 0, 0, 0, 0)), t = new Date(Date.UTC(t.year, t.month, t.day, 0, 0, 0, 0)), _r_(Math.ceil((e.getTime() - t.getTime()) / 864e5));
}, n.interval = function(e, t) {
return _i_("4ab:5f59974d"), _r_(Math.abs(n.diff(e, t)) + 1);
}, n.compare = function(e, t) {
if (_i_("4ab:93d77961"), "object" != typeof e || "object" != typeof t || null === e || null === t) throw new TypeError("dates must be objects");
if (e.year < t.year) return _r_(-1);
if (e.year > t.year) return _r_(1);
if (e.month < t.month) return _r_(-1);
if (e.month > t.month) return _r_(1);
if (e.day < t.day) return _r_(-1);
if (e.day > t.day) return _r_(1);
return _r_(0);
}, n.daysInMonth = function(e, t) {
return _i_("4ab:d478bc66"), _r_(new Date(e, t + 1, 0).getDate());
}, n.isLeapYear = function(e) {
return _i_("4ab:7e93f3c0"), _r_(e % 4 == 0 && e % 100 != 0 || e % 400 == 0);
}, n.calculateWeekNumber = function(e) {
_i_("4ab:7a7ad21e");
var t = new Date(Date.UTC(e.year, e.month, e.day, 0, 0, 0, 0)), i = new Date(t.valueOf()), n = (t.getUTCDay() + 6) % 7;
i.setUTCDate(i.getUTCDate() - n + 3);
var a = i.valueOf();
return i.setUTCMonth(0, 1), 4 != i.getUTCDay() && i.setUTCMonth(0, 1 + (4 - i.getUTCDay() + 7) % 7), _r_(1 + Math.ceil((a - i) / 6048e5));
}, i.exports = {
Calendar:n
}, _r_();
}), B.define("morphdom", function(e, t, i) {
_i_("4ab:40e7d1ea"), function(e) {
if (_i_("4ab:ab944764"), "object" == typeof t && "undefined" != typeof i) i.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
var n;
n = "undefined" != typeof window ? window :"undefined" != typeof global ? global :"undefined" != typeof self ? self :this, n.morphdom = e();
}
_r_();
}(function() {
_i_("4ab:97955ce2");
var e, t;
e = {
exports:t = {}
};
var i, n, a = "undefined" != typeof document ? document.body || document.createElement("div") :{}, s = "http://www.w3.org/1999/xhtml", r = 1, o = 3, _ = 8;
n = a.hasAttributeNS ? function(e, t, i) {
return _i_("4ab:eade7059"), _r_(e.hasAttributeNS(t, i));
} :a.hasAttribute ? function(e, t, i) {
return _i_("4ab:48b626c7"), _r_(e.hasAttribute(i));
} :function(e, t, i) {
return _i_("4ab:b1b897cf"), _r_(!!e.getAttributeNode(i));
};
function l(e) {
_i_("4ab:ace7a10f");
for (var t in e) if (e.hasOwnProperty(t)) return _r_(!1);
return _r_(!0);
}
function d(e) {
_i_("4ab:6e64c2c2"), !i && document.createRange && (i = document.createRange(), i.selectNode(document.body));
var t;
return i && i.createContextualFragment ? t = i.createContextualFragment(e) :(t = document.createElement("body"), t.innerHTML = e), _r_(t.childNodes[0]);
}
var h = {
OPTION:function(e, t) {
_i_("4ab:766a26cf"), e.selected = t.selected, e.selected ? e.setAttribute("selected", "") :e.removeAttribute("selected", ""), _r_();
},
INPUT:function(e, t) {
_i_("4ab:8ce9f1cf"), e.checked = t.checked, e.checked ? e.setAttribute("checked", "") :e.removeAttribute("checked"), e.value !== t.value && (e.value = t.value), n(t, null, "value") || e.removeAttribute("value"), e.disabled = t.disabled, e.disabled ? e.setAttribute("disabled", "") :e.removeAttribute("disabled"), _r_();
},
TEXTAREA:function(e, t) {
_i_("4ab:fafa0a75");
var i = t.value;
e.value !== i && (e.value = i), e.firstChild && e.firstChild.nodeValue !== i && (e.firstChild.nodeValue = i), _r_();
}
};
function c() {}
var u = function(e, t) {
return _i_("4ab:ee20f945"), _r_(e.nodeName === t.nodeName && e.namespaceURI === t.namespaceURI);
};
function f(e, t) {
return _i_("4ab:b9ab9e43"), _r_(t && t !== s ? document.createElementNS(t, e) :document.createElement(e));
}
function p(e, t) {
_i_("4ab:deb7b359");
var i, a, s, r, o, _, l = t.attributes;
for (i = l.length - 1; i >= 0; i--) a = l[i], s = a.name, o = a.value, r = a.namespaceURI, r ? (s = a.localName || s, _ = e.getAttributeNS(r, s)) :_ = e.getAttribute(s), _ !== o && (r ? e.setAttributeNS(r, s, o) :e.setAttribute(s, o));
for (l = e.attributes, i = l.length - 1; i >= 0; i--) a = l[i], a.specified !== !1 && (s = a.name, r = a.namespaceURI, n(t, r, r ? s = a.localName || s :s) || e.removeAttributeNode(a));
_r_();
}
function b(e, t) {
_i_("4ab:6593b9e4");
for (var i = e.firstChild; i; ) {
var n = i.nextSibling;
t.appendChild(i), i = n;
}
return _r_(t);
}
function m(e) {
return _i_("4ab:dc0a4ac8"), _r_(e.id);
}
function g(e, t, i) {
if (_i_("4ab:af448acf"), i || (i = {}), "string" == typeof t) if ("#document" === e.nodeName || "HTML" === e.nodeName) {
var n = t;
t = document.createElement("html"), t.innerHTML = n;
} else t = d(t);
var a = {}, s = {}, g = i.getNodeKey || m, v = i.onBeforeNodeAdded || c, M = i.onNodeAdded || c, y = i.onBeforeElUpdated || c, B = i.onElUpdated || c, w = i.onBeforeNodeDiscarded || c, k = i.onNodeDiscarded || c, C = i.onBeforeElChildrenUpdated || c, x = i.childrenOnly === !0, $ = [];
function D(e, t) {
_i_("4ab:17cb2e51");
var i = g(e);
if (i ? a[i] = e :t || k(e), e.nodeType === r) for (var n = e.firstChild; n; ) D(n, t || i), n = n.nextSibling;
_r_();
}
function E(e) {
if (_i_("4ab:5e13d614"), e.nodeType === r) for (var t = e.firstChild; t; ) g(t) || (k(t), E(t)), t = t.nextSibling;
_r_();
}
function S(e, t, i) {
if (_i_("4ab:f34545d8"), w(e) === !1) return _r_();
t.removeChild(e), i ? g(e) || (k(e), E(e)) :D(e), _r_();
}
function N(e, t, i, n) {
_i_("4ab:cb66c668");
var l = g(t);
if (l && delete a[l], !n) {
if (y(e, t) === !1) return _r_();
if (p(e, t), B(e), C(e, t) === !1) return _r_();
}
if ("TEXTAREA" !== e.nodeName) {
var d, c, f, b, m, w = t.firstChild, k = e.firstChild;
e:for (;w; ) {
for (f = w.nextSibling, d = g(w); k; ) {
var x = g(k);
if (c = k.nextSibling, !i && x && (m = s[x])) {
m.parentNode.replaceChild(k, m), N(k, m, i), k = c;
continue;
}
var D = k.nodeType;
if (D === w.nodeType) {
var E = !1;
if (D === r ? (u(k, w) && (x || d ? d === x && (E = !0) :E = !0), E && N(k, w, i)) :(D === o || D == _) && (E = !0, k.nodeValue = w.nodeValue), E) {
w = f, k = c;
continue e;
}
}
S(k, e, i), k = c;
}
d && ((b = a[d]) ? (N(b, w, !0), w = b) :s[d] = w), v(w) !== !1 && (e.appendChild(w), M(w)), w.nodeType === r && (d || w.firstChild) && $.push(w), w = f, k = c;
}
for (;k; ) c = k.nextSibling, S(k, e, i), k = c;
}
var F = h[e.nodeName];
F && F(e, t), _r_();
}
var F = e, T = F.nodeType, j = t.nodeType;
if (!x) if (T === r) j === r ? u(e, t) || (k(e), F = b(e, f(t.nodeName, t.namespaceURI))) :F = t; else if (T === o || T === _) {
if (j === T) return F.nodeValue = t.nodeValue, _r_(F);
F = t;
}
if (F === t) k(e); else {
N(F, t, !1, x);
var I = function(e) {
_i_("4ab:07e8f038");
for (var t = e.firstChild; t; ) {
var i = t.nextSibling, n = g(t);
if (n) {
var s = a[n];
if (s && u(t, s)) {
if (t.parentNode.replaceChild(s, t), N(s, t, !0), t = i, l(a)) return _r_(!1);
continue;
}
}
t.nodeType === r && I(t), t = i;
}
_r_();
};
if (!l(a)) e:for (;$.length; ) {
var A = $;
$ = [];
for (var O = 0; O < A.length; O++) if (I(A[O]) === !1) break e;
}
for (var J in a) if (a.hasOwnProperty(J)) {
var L = a[J];
k(L), E(L);
}
}
return !x && F !== e && e.parentNode && e.parentNode.replaceChild(F, e), _r_(F);
}
return e.exports = g, _r_(e.exports);
}), _r_();
}), booking.browserStorageHandler = function(e, t, i, n) {
_i_("4ab:3fc107dc");
var a = !1;
try {
a = e.localStorage && e.sessionStorage ? !0 :!1, a && e.localStorage.setItem("btest", "1");
} catch (s) {
a = !1;
}
var r = {
_readCookie:function(e) {
_i_("4ab:a38560a0");
var t = {};
try {
"undefined" != typeof JSON && (t = JSON.parse(n.cookie(e)) || {});
} catch (i) {}
return _r_(t);
},
_modifySingleValue:function(t, s, r, o, _) {
if (_i_("4ab:2a3f9040"), !s || !r) return _r_(!1);
if (a && !_) {
var l = "session" === t ? e.sessionStorage :e.localStorage;
if ("delete" === s) l.removeItem(r); else try {
l.setItem(r, o);
} catch (d) {}
} else {
var h, c, u, f;
"session" === t ? h = "bs" :(h = "b", f = 30), c = this._readCookie(h), "delete" === s ? delete c[r] :c[r] = o, u = n.isEmptyObject(c) ? null :JSON.stringify(c), n.cookie(h, u, {
expires:f,
path:"/",
domain:i.b_domain_end
});
}
_r_();
},
_getValue:function(t, i, n) {
if (_i_("4ab:baa97cdc"), !i) return _r_(void 0);
if (a && !n) {
var s = "session" === t ? e.sessionStorage :e.localStorage;
return _r_(s.getItem(i));
}
var r, o;
return r = "session" === t ? "bs" :"b", o = this._readCookie(r), _r_(o[i]);
}
};
return _r_({
addSessionValue:function(e, t, i) {
return _i_("4ab:8dba9d97"), _r_(r._modifySingleValue("session", "add", e, t, i));
},
deleteSessionValue:function(e, t) {
return _i_("4ab:9fe487a4"), _r_(r._modifySingleValue("session", "delete", e, void 0, t));
},
getSessionValue:function(e, t) {
return _i_("4ab:8dab55f2"), _r_(r._getValue("session", e, t));
},
addPermanentValue:function(e, t, i) {
return _i_("4ab:bea78684"), _r_(r._modifySingleValue("permanent", "add", e, t, i));
},
deletePermanentValue:function(e, t) {
return _i_("4ab:7a210658"), _r_(r._modifySingleValue("permanent", "delete", e, void 0, t));
},
getPermanentValue:function(e, t) {
return _i_("4ab:d0d2ce28"), _r_(r._getValue("permanent", e, t));
},
isLocalStorageSupported:function() {
return _i_("4ab:50cc1570"), _r_(a);
}
});
}(window, document, booking.env, window.jQuery), booking.define && booking.define("browser-storage-handler", booking.browserStorageHandler), B.define("search/modules/flags", function(e, t, i) {
_i_("4ab:57d4a47a");
function n(e) {
_i_("4ab:69c5e761");
var t = {};
if ("string" != typeof e) throw new TypeError("First argument must be a string");
if (e = e.trim(), "" === e) return _r_(t);
return e.split(/\s+/).forEach(function(e) {
_i_("4ab:9427ee60");
var i = e, n = !0, s = e.indexOf(":");
-1 !== s && (i = e.substr(0, s), n = e.substr(s + 1), n || (n = 0), a(n) && (n = parseInt(n, 10))), t[i] = n, _r_();
}), _r_(t);
}
function a(e) {
return _i_("4ab:e20f3480"), _r_(!isNaN(parseFloat(e)) && isFinite(e));
}
i.exports = {
parse:n
}, _r_();
}), B.define("search/modules/search-date", function(e, t, i) {
_i_("4ab:17595073");
var n = e("calendar-base").Calendar;
function a(e) {
_i_("4ab:40685ddd"), this.year = null, this.month = null, this.day = null, this.complete = !1, "number" == typeof e.year && (this.year = e.year), "number" == typeof e.month && (this.month = e.month), "number" == typeof e.day && (this.day = e.day), null !== this.month && (this.month < 0 ? this.month = 0 :this.month > 11 && (this.month = 11)), null !== this.day && (this.day < 0 ? this.day = 0 :this.day > s(this.year, this.month) && (this.day = s(this.year, this.month))), this.complete = null !== this.year && null !== this.month && null !== this.day, _r_();
}
a.prototype = {
toString:function() {
if (_i_("4ab:d1b52d54"), !this.complete) return _r_("");
var e = this.month + 1;
return _r_(this.year + "-" + (10 > e ? "0" :"") + e + "-" + (this.day < 10 ? "0" :"") + this.day);
},
toNative:function() {
if (_i_("4ab:3b3a334b"), !this.complete) return _r_(new Date(NaN));
return _r_(new Date(Date.UTC(this.year, this.month, this.day, 0, 0, 0, 0)));
},
valueOf:function() {
return _i_("4ab:f9ce5f81"), _r_(this.toNative().valueOf());
}
}, a.create = function(e) {
_i_("4ab:08a1a2fc");
var t;
if ("string" == typeof e && (t = e.split("-"), 3 == t.length && (e = {
year:parseInt(t[0], 10),
month:parseInt(t[1], 10) - 1,
day:parseInt(t[2], 10)
})), "object" != typeof e || null === e) throw new TypeError("date must be an object");
return _r_(new a(e));
}, a.createFromString = function(e) {
if (_i_("4ab:37ad9e01"), "string" != typeof e) throw new TypeError("dateString must be a string");
var t = e.split(/-/g), i = {
year:parseInt(t[0], 10),
month:parseInt(t[1], 10) - 1,
day:parseInt(t[2], 10)
};
return _r_(a.create(i));
}, a.createFlexible = function(e) {
if (_i_("4ab:a03c854a"), "object" != typeof e || null === e) throw new TypeError("date must be an object");
if ("number" != typeof e.year || "number" != typeof e.month || "number" != typeof e.day) throw new TypeError("invalid date");
var t = new Date(Date.UTC(e.year, e.month, e.day, 0, 0, 0, 0));
return e = {
year:t.getUTCFullYear(),
month:t.getUTCMonth(),
day:t.getUTCDate()
}, _r_(a.create(e));
}, a.isStrictlyValid = function(e) {
_i_("4ab:b9e87158");
var t = a.create(e);
return _r_(e.year === t.year && e.month === t.month && e.day === t.day);
}, a.compare = function(e, t) {
if (_i_("4ab:06bb6bb8"), !(e instanceof a && t instanceof a)) throw new TypeError("dates must be an instance of SearchDate");
if (e.year < t.year) return _r_(-1);
if (e.year > t.year) return _r_(1);
if (e.month < t.month) return _r_(-1);
if (e.month > t.month) return _r_(1);
if (e.day < t.day) return _r_(-1);
if (e.day > t.day) return _r_(1);
return _r_(0);
};
function s(e, t) {
return _i_("4ab:240ba80f"), _r_("number" == typeof e && "number" == typeof t ? n.daysInMonth(e, t) :3 == t || 5 == t || 8 == t || 10 == t ? 30 :1 == t ? 29 :31);
}
i.exports = {
SearchDate:a
}, _r_();
}), B.define("component/autocomplete-core", function(e, t, i) {
_i_("4ab:7a54505f");
var n = e("jquery"), a = e("component"), s = e("read-data-options");
i.exports = a.extend({
init:function() {
_i_("4ab:666b445b"), this.highlightedIndex = -1, this.isDeletion = !1, this.items = [], this.keyDownCount = 0, this.keysDown = {}, this.listHeight = 0, this.listVisible = !1, this.preventBlurClose = !1, this.selectedIndex = -1, this.selectedValue = null, this.valueBuffer = null, this.clickOutController = e("click-out"), this.clickOutMonitorId = null, this.$input = this.$el.find('[data-input=""]'), this.input = this.$input[0], this.$list = this.$el.find('[data-list=""]'), this.$items = this.$list.children(), this.optionsSpec = this.optionsSpec || {}, this.optionsSpec = n.extend(this.optionsSpec, {
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
}), this.options = s(this.$el, this.optionsSpec), this.supportsInputEvent = this.input && "oninput" in this.input, this.addInputEventListeners(), this.addListEventListeners(), this.addItemsEventListeners(), this.calculateListHeight(), this.$input.attr("autocomplete", "off"), _r_();
},
addInputEventListeners:function() {
_i_("4ab:8c22dd2d");
var e = this.$input.component("keyboard");
e.on("keydown:Escape", this.inputEscape.bind(this)), e.on("keydown:ArrowUp", this.inputArrowUp.bind(this)), e.on("keydown:ArrowDown", this.inputArrowDown.bind(this)), e.on("keydown:Enter", this.inputEnter.bind(this)), e.on("keydown:Tab", this.inputTab.bind(this)), this.$input.on("click", this.inputClick.bind(this)), this.$input.focus(this.inputFocus.bind(this)), this.$input.blur(this.inputBlur.bind(this)), this.$input.keydown(this.inputKeyDown.bind(this)), this.$input.bind("input", this.inputInput.bind(this)), this.$input.keyup(this.inputKeyUp.bind(this)), _r_();
},
addListEventListeners:function() {
_i_("4ab:4ad6c428"), this.$list.mousedown(this.listMouseDown.bind(this)), this.$list.mouseup(this.listMouseUp.bind(this)), this.$list.on("click", '[data-list-item=""]', this.listItemClick.bind(this)), _r_();
},
addItemsEventListeners:function() {
_i_("4ab:6105a1b9"), this.$items.click(this.listItemClick.bind(this)), _r_();
},
addClickOutEventListener:function() {
_i_("4ab:5a26544b"), this.clickOutMonitorId = this.clickOutController.addMonitor(this.el, this.clickOut.bind(this)), _r_();
},
removeClickOutEventListener:function() {
_i_("4ab:ab36beb4"), this.clickOutController.removeMonitor(this.clickOutMonitorId), _r_();
},
calculateListHeight:function() {
_i_("4ab:a06d8252"), this.listHeight = this.$list.outerHeight(), _r_();
},
inputClick:function(e) {},
inputFocus:function(e) {
_i_("4ab:5cab6d89"), this.options.openFocus && (this.listShow(), this.autocomplete({
fromFocus:!0
})), _r_();
},
inputBlur:function(e) {
_i_("4ab:7b0d251b"), setTimeout(this.inputBlurSync.bind(this), 4), _r_();
},
inputBlurSync:function() {
_i_("4ab:3564bcc4"), !this.preventBlurClose && this.listVisible && (this.highlightReset(), this.reset()), _r_();
},
inputKeyDown:function(e) {
_i_("4ab:7eedd7b4");
var t = e.ctrlKey || e.metaKey || e.shiftKey || e.altKey, i = 8 == e.which || 46 == e.which;
this.isDeletion = i, this.taintedKeyDown = t, _r_();
},
inputInput:function(e) {
_i_("4ab:b3797752"), this.autocomplete(), _r_();
},
inputKeyUp:function(e) {
_i_("4ab:701df07a");
var t = this.taintedKeyDown || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.which >= 16 && e.which <= 18 || 91 == e.which, i = 32 == e.which || e.which >= 48, n = e.which >= 37 && e.which <= 40;
t || ((n || i) && this.listShow(), !this.isDeletion && !i || this.supportsInputEvent || this.autocomplete(), i && this.keyDownCount++), _r_();
},
inputEscape:function(e) {
_i_("4ab:21af7760"), this.listVisible && (e.originalEvent.preventDefault(), this.highlightReset(), this.reset()), _r_();
},
inputArrowUp:function(e) {
_i_("4ab:330b32cc"), e.originalEvent.preventDefault(), this.listVisible ? this.highlightPrevious() :this.listShow(), _r_();
},
inputArrowDown:function(e) {
_i_("4ab:8475bbad"), e.originalEvent.preventDefault(), this.listVisible ? this.highlightNext() :this.listShow(), _r_();
},
inputEnter:function(e) {
_i_("4ab:8faecce2"), this.listVisible && -1 != this.highlightedIndex && (e.originalEvent.preventDefault(), this.choose(this.highlightedIndex)), _r_();
},
inputTab:function(e) {
_i_("4ab:d6bb0389"), this.inputEnter.apply(this, arguments), _r_();
},
listItemClick:function(e) {
_i_("4ab:3a576f02");
var t = n(e.currentTarget);
this.options.focusOnItemSelect && this.input.focus(), this.choose(t.data("i")), _r_();
},
listMouseDown:function(e) {
_i_("4ab:00c6d228"), this.preventBlurClose = !0, _r_();
},
listMouseUp:function(e) {
_i_("4ab:5b7558ea"), this.preventBlurClose = !1, _r_();
},
clickOut:function() {
_i_("4ab:47c173d2"), this.listVisible && (this.highlightReset(), this.reset()), _r_();
},
setValue:function(e) {
_i_("4ab:14cae509"), this.input.value = e, _r_();
},
listShow:function() {
_i_("4ab:d93e12e8"), this.listVisible || this._loading || (this.$list.addClass("-visible"), this.listVisible = !0, this.addClickOutEventListener(), this.$list[0].scrollTop = 1, setTimeout(function() {
_i_("4ab:28fd9fe6"), this.$list[0].scrollTop = 0, _r_();
}.bind(this), 10)), _r_();
},
listHide:function() {
_i_("4ab:9c2d908d"), this.listVisible && (this.$list.removeClass("-visible"), this.resetFlags(), this.removeClickOutEventListener()), _r_();
},
highlightPrevious:function() {
_i_("4ab:de4395ef");
var e = this.highlightedIndex;
do -1 == e ? e = this.items.length - 1 :e--; while (-1 != e && this.items[e].hidden);
this.highlightFromNavigation(e), _r_();
},
highlightNext:function() {
_i_("4ab:fa949528");
var e = this.highlightedIndex;
do e == this.items.length - 1 ? e = -1 :e++; while (-1 != e && this.items[e].hidden);
this.highlightFromNavigation(e), _r_();
},
highlightFromNavigation:function(e, t, i) {
if (_i_("4ab:d9f82d1d"), (-1 == this.highlightedIndex || t) && (this.valueBuffer = this.input.value), -1 == e) this.highlightReset({
preserveFocus:!0
}); else if (this.supportsInputEvent) if (this.valueBuffer && 0 == this.items[e].valueLowerCase.indexOf(this.valueBuffer.toLowerCase())) {
var n = this.valueBuffer.length, a = this.items[e].value.length, s = this.valueBuffer + this.items[e].value.substring(n);
if (this.input.value == s || i || this.setValue(s), this.input.setSelectionRange) this.input.setSelectionRange(a, a); else if (this.input.createTextRange) {
var r = this.input.createTextRange();
r.collapse(!0), r.moveStart("character", n), r.moveEnd("character", a), r.select();
} else void 0 !== this.input.selectionStart && (this.input.selectionStart = n, this.input.selectionEnd = a);
} else i || (this.setValue(this.items[e].value), this.fixIEFocusLoss());
this.highlight(e), _r_();
},
highlightFromAutocomplete:function() {
_i_("4ab:082bdb05");
var e = this.input.value, t = this.getListFirstIndex();
-1 !== t && this.options.highlightFirst && !this.isDeletion && e && 0 === this.items[t].valueLowerCase.indexOf(e.toLowerCase()) || this.options.forceHighlight ? this.highlightFromNavigation(t, !0) :this.highlight(-1), _r_();
},
highlight:function(e) {
_i_("4ab:d5ddd8b9"), this.listShow(), -1 != this.highlightedIndex && this.$items.eq(this.highlightedIndex).removeClass("-highlighted"), -1 != e && this.$items.eq(e).addClass("-highlighted"), this.highlightedIndex = e, this.highlightScroll(), _r_();
},
highlightReset:function(e) {
_i_("4ab:f5adc469"), e = e || {}, null === this.valueBuffer || e.preserveInputValue || (this.setValue(this.valueBuffer), e.preserveFocus && this.fixIEFocusLoss()), -1 != this.highlightedIndex && this.$items.eq(this.highlightedIndex).removeClass("-highlighted"), this.highlightedIndex = -1, _r_();
},
highlightScroll:function() {
_i_("4ab:23869224");
var e = !1, t = this.$list[0].scrollTop;
if (-1 != this.highlightedIndex) {
var i = this.$items.eq(this.highlightedIndex), n = (1 == i.length && i.position().top) + t, a = i.outerHeight();
n + a > this.listHeight + t ? e = n + a - this.listHeight :t > n && (e = n);
} else e = 0;
e !== !1 && e != t && (this.$list[0].scrollTop = e), _r_();
},
getListLength:function() {
return _i_("4ab:80a0a6d3"), _r_(this.items.length);
},
getListFirstIndex:function() {
return _i_("4ab:3e3fdbb2"), _r_(0 === this.items.length ? -1 :0);
},
autocomplete:function() {
_i_("4ab:ee533fba"), this.postAutocomplete(), _r_();
},
postAutocomplete:function() {
_i_("4ab:64423811"), this.listShow(), this.calculateListHeight(), this.highlightFromAutocomplete(), _r_();
},
choose:function(e) {
_i_("4ab:38daecdd"), this.selectedIndex = e, B.et.track("PVbOMFcUNKe") > 1 ? this.selectedValue = this.items[e].valueWithPropertyType ? this.items[e].valueWithPropertyType :this.items[e].value :this.selectedValue = this.items[e].value, this.setValue(this.selectedValue), this.reset(), _r_();
},
reset:function(e) {
_i_("4ab:f52a182f"), e = e || {}, -1 != this.highlightedIndex && this.$items.eq(this.highlightedIndex).removeClass("-highlighted"), this.listHide(), e.hard && (this.resetFlags(), this.selectedIndex = -1, this.selectedValue = null, this.setValue("")), _r_();
},
resetFlags:function() {
_i_("4ab:cf298bfd"), this.highlightedIndex = -1, this.isDeletion = !1, this.keyDownCount = 0, this.keysDown = {}, this.listVisible = !1, this.preventBlurClose = !1, this.valueBuffer = null, _r_();
},
fixIEFocusLoss:function() {
if (_i_("4ab:ad6c1d0b"), this.input.createTextRange) {
var e = this.input.createTextRange();
e.moveStart("character", this.input.value.length), e.collapse(), e.select();
}
_r_();
}
}), _r_();
}), B.define("component/core/input-placeholder", function(e, t, i) {
"use strict";
_i_("4ab:99bf1e6c");
var n = e("component"), a = e("read-data-options");
return _r_(n.extend({
init:function() {
if (_i_("4ab:f4a4f5e4"), this.browserSupported()) return _r_();
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
return _i_("4ab:10b8c9bc"), _r_(!!$(t).attr("placeholder"));
}).each(function(e, t) {
_i_("4ab:bdb24f8f"), this.setupPlaceholder($(t)), _r_();
}.bind(this)), _r_();
},
browserSupported:function() {
_i_("4ab:90563039");
var e = $('input[type="text"]')[0] || $('<input type="text">')[0];
return _r_(!!("placeholder" in e));
},
setupPlaceholder:function(e) {
_i_("4ab:69f56982");
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
_i_("4ab:9e273151"), e.focus(), _r_();
}), e.focus(function() {
_i_("4ab:5c6a8b0c"), t.hide(), _r_();
}).blur(function() {
_i_("4ab:ee094ca9"), t[e.val().length ? "hide" :"show"](), _r_();
}), e.get(0) === document.activeElement ? e.triggerHandler("focus") :e.triggerHandler("blur"), _r_();
}
}));
}), B.define("component/keyboard", function(e, t, i) {
_i_("4ab:6d533b75");
var n = e("component"), a = e("event-emitter"), s = {
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
function r(e, t) {
return _i_("4ab:dc192754"), _r_(function(i) {
_i_("4ab:bd3022e0");
var n = "";
i.which && void 0 !== s[i.which.toString()] && (i.originalEvent.altKey && (n += ":alt"), i.originalEvent.ctrlKey && (n += ":ctrl"), i.originalEvent.metaKey && (n += ":meta"), i.originalEvent.shiftKey && (n += ":shift"), n += ":" + s[i.which], e.trigger(t + n, {
keys:t + n,
originalEvent:i
})), _r_();
});
}
i.exports = n.extend({
init:function() {
_i_("4ab:7a254e40"), a.extend(this), this.$el.bind("keydown", r(this, "keydown")).bind("keyup", r(this, "keyup")), _r_();
}
}), _r_();
}), B.define("component/tooltip-loc", function(e, t, i) {
"use strict";
_i_("4ab:970ba861");
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
_i_("4ab:610aec21"), this._buildOptions(), this._createTooltip(), this._attachEvents(), this.$el.trigger("ready.B.tooltip", [ this.$tip ]), _r_();
},
_buildOptions:function() {
_i_("4ab:9ddbfae8"), this.options = a.extend({}, this.DEFAULTS, this.$el.data()), this.options.intangible = "intangible" in this.options, this.options.target && (this.options.target = a(this.options.target).first()), this.options.content || (this.options.content = this.options.title || this.el.title), _r_();
},
_createTooltip:function() {
_i_("4ab:41ae04fe");
var e = "tooltip-" + this.options.placement + " tooltip-align-" + this.options.alignment;
this.options.extraClass && (e = e + " " + this.options.extraClass), "true" === this.options.animation && (e += " tooltip-animate"), this.$tip = a(this.options.template), this.$tip.addClass(e), this._attachContent(), this.$tip.appendTo(a("body")), this.$el.trigger("inserted.B.tooltip", [ this.$tip ]), _r_();
},
_attachContent:function() {
_i_("4ab:48323c54");
var e = this.$tip.find(".tooltip-inner");
this.options.target ? e.append(this.options.target.clone()) :(this.options.target = [], e.text(this.options.content)), _r_();
},
_positionTooltip:function() {
_i_("4ab:7d3c37e5"), this._defineAlignmentVars(), this._placeTooltip(), this._alignTooltip(), this.$tip.css({
left:this.left,
top:this.top
}), _r_();
},
_defineAlignmentVars:function() {
_i_("4ab:79a44411"), this.elOffset = this.$el.offset(), this.position = "left", this.dimension = "outerWidth", this.options.placement.match(/top|bottom/) && (this.position = "top", this.dimension = "outerHeight"), _r_();
},
_accountForRTL:function(e) {
if (_i_("4ab:815c5c97"), !B.env.rtl) return _r_(e);
if ("left" === e) return _r_("right");
if ("right" === e) return _r_("left");
return _r_(e);
},
_placeTooltip:function() {
_i_("4ab:ab5a83db");
var e = this._accountForRTL(this.position), t = this.dimension;
this._accountForRTL(this.options.placement) === e ? this[e] = this.elOffset[e] - this.$tip[t]() :this[e] = this.elOffset[e] + this.$el[t](), _r_();
},
_alignTooltip:function() {
_i_("4ab:e5dfbb2b");
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
if (_i_("4ab:c4be165f"), this.options.trigger.match(/manual/)) return _r_();
var e, t, i, n = this.options.trigger.split(" "), s = n.length, r = this.$el.add(this.$tip);
for (this.options.intangible && (r = this.$el), s; s--; ) e = n[s], "click" === e ? this.$el.on("click", a.proxy(this.toggle, this)) :(t = "hover" == e ? "mouseenter" :"focusin", i = "hover" == e ? "mouseleave" :"focusout", r.on(t, a.proxy(this.show, this)), r.on(i, a.proxy(this.hide, this)));
_r_();
},
_trackTransitionEnd:function(e) {
_i_("4ab:1ec652bb");
var t = this.$el;
this.$tip.one("transitionend", function(i) {
_i_("4ab:124e5a85"), t.trigger(e, [ this ]), _r_();
}), _r_();
},
show:function() {
_i_("4ab:be0b1075"), this.$el.trigger("show.B.tooltip", [ this.$tip ]), this._trackTransitionEnd("shown.B.tooltip"), this.$el.attr("aria-describedby", this.el.id), this._positionTooltip(), this.$tip.addClass("on").removeClass("off"), _r_();
},
hide:function() {
_i_("4ab:3e97dd72"), this.$el.trigger("hide.B.tooltip", [ this.$tip ]), this._trackTransitionEnd("hidden.B.tooltip"), this.$el.removeAttr("aria-describedby"), this.$tip.removeClass("on").addClass("off"), _r_();
},
toggle:function() {
_i_("4ab:e75904c1"), this.$tip.is(".on") ? this.hide() :this.show(), _r_();
}
}), _r_();
}), B.define("component/search/destination/input-placeholder", function(e, t, i) {
_i_("4ab:1088c01d");
var n = B.require("component/core/input-placeholder"), a = e("search/searchbox/model");
return _r_(n.extend({
init:function() {
_i_("4ab:f213e46f"), this.model = a.getInstance(this.$el.data("sb-id")), n.prototype.init.apply(this, arguments), _r_();
}
}));
}), B.define("component/search/destination/input", function(e, t, i) {
"use strict";
_i_("4ab:62201b0c"), booking.jstmpl("search_destination_autocomplete_results", function() {
_i_("4ab:a1188a8f");
var e, t = [ "\n		", "\n\n    ", "\n        ", "\n            ", '\n        <li class="sb-autocomplete__item sb-autocomplete__item--header">\n            <span class="sb-autocomplete__mlt--booking">\n                <img alt="', '" src="', '" class="sb-autocomplete--photo">\n                <span class="sb-autocomplete__mlt--photo-tick">', "17", "fonticon/actick", '</span>\n                <span class="sb-autocomplete__labels">\n                    ', '\n                    <span class="sb-autocomplete__item__second__line">\n                        \n                        ', "\n                            ", "\n                        ", '\n                    </span>\n                </span>\n                <span class="sb-autocomplete__badge sb-autocomplete__badge--popular">', "/private/mlt_search_dropdown_label/name", '</span>\n            </span>\n            <span class="sb-autocomplete__header--copy">', "/private/mlt_search_dropdown_extend_popular/name", "</span>\n        </li>\n        ", "\n    ", "\n\n\n    ", "\n	", "\n\n		\n\n        ", '\n            <li\n                class="', "c-autocomplete__item sb-autocomplete__item ", "sb-autocomplete__item--cjk ", '"\n                >\n                <div class="sb-autocomplete__section-title-wrapper">\n                    <div class="sb-autocomplete__section-title">\n                        ', '\n                            <i class="bicon bicon-', '"></i>\n                        ', "\n                        <span>", "</span>\n                    </div>\n                </div>\n            </li>\n        ", '\n        <li\n            class="', "c-autocomplete__item sb-autocomplete__item sb-autocomplete__item-with_photo ", "sb-autocomplete__item--airport ", "sb-autocomplete__item--city ", "sb-autocomplete__item--country ", "sb-autocomplete__item--district ", "sb-autocomplete__item--hotel ", "sb-autocomplete__item--landmark ", "sb-autocomplete__item--region ", "sb-autocomplete__item--theme ", "sb-autocomplete__item__item--elipsis ", "sb-autocomplete__item--with-title ", "sb-autocomplete__item--with-two-lines ", "sb-autocomplete__item--regioncity ", "sb-autocomplete__item--theme-expanded ", "first_theme ", "1", "smaller_theme_wrapper ", "sb-autocomplete__item--tabbed ", "sb-autocomplete__item--with-propertytype ", "sb-autocomplete__item--without-propertytype ", "sb-autocomplete__item--with-two-lines sb-autocomplete__item--mlt-recommendations ", '"\n            role="option"\n            data-list-item\n            data-i="', '"\n            data-value="', '"\n            ', '\n                data-label="', "\n            >", "", '<img alt="', '" class="sb-autocomplete--photo">', '<span class="sb-autocomplete--photo">\n                    </span>', '<div class="', "sb_passion_highlight_wrapper smaller_theme ", '">\n                        <p class="sb_passion_highlight_inner">', "</strong>\n                        </p>\n                    </div>", '<span class="airport-code">', "</span>", '<span class="sb-autocomplete__item__highlight">', '<span class="sb-autocomplete__item__extra">', "<b>", "</b>", '<span class="sb-autocomplete__item__property_in">', "/private/ss_search_box_search_property_type/name", '<span class="sb-autocomplete__item__second__line">', '<span class="searchbox__region__subcity__item">', ",", '<span class="sb-autocomplete__badge sb-autocomplete__badge--ski-area">', "/private/ski_area_autocomplete_alone/name", '<span class="sb-autocomplete__badge sb-autocomplete__badge--beach-area">', "/private/sb_autocomplete_beach_area_badge/name", '<span class="sb-autocomplete__badge sb-autocomplete__badge--popular">', "/private/search_top_50_badge/name", "</li>\n	", "\n\n	", '\n		<li class="sb-autocomplete__google"></li>\n	', "\n" ], i = [ "mlt_booking", "mlt_booking_photo_uri", "is_rtl", "total_index", "results", "lc", "section_title_icon", "section_title", "dest_type", "search_config", "group_config", "flags", "is_first_theme", "property_in_label", "mlt_recommendation", "checkin", "checkout", "index", "value", "label", "photo_uri", "fe_xpi_show_flights", "iata", "search_propertytype_destination", "label_blocks", "highlighted", "text", "label_highlighted", "additional_label", "search_propertytype_property", "b_region_city_endorsements", "is_powered_by_google" ];
return _r_(function(n) {
_i_("4ab:c3d87d4a");
var a = "", s = this.fn;
function r(a) {
if (_i_("4ab:9a239d15"), s.MD(i[4])) {
a += t[1], s.MD(i[0]) && (a += t[2], s.MJ(s.MG((s.MC(i[0]) || {}).photo_uri)) ? (a += t[3], s.MN("mlt_booking_photo_uri", s.MG((s.MC(i[0]) || {}).photo_uri)), a += t[2]) :(a += t[3], s.MN("mlt_booking_photo_uri", "/static/img/sh-placeholder.png"), a += t[2]), a += [ t[4], s.F.html((s.MC(i[0]) || {}).label), t[5], s.STATIC_HOSTNAME(s.MB(i[1]), 0, 0, 0), t[6], (n.unshift({
color:"#F7F7F7",
height:t[7],
name:t[8],
width:t[7]
}), e = s.HELPER("icon", n[0]), n.shift(), e), t[9], (s.MC(i[0]) || {}).label_highlighted, t[10] ].join(""), a += s.MD(i[2]) ? [ t[11], s.DATE(s.MG((s.MC(i[0]) || {}).checkin), "numeric_date_range", "", "", s.MG((s.MC(i[0]) || {}).checkout)), t[12] ].join("") :[ t[11], s.DATE(s.MG((s.MC(i[0]) || {}).checkin), "short_date_without_year_range", "", "", s.MG((s.MC(i[0]) || {}).checkout)), t[12] ].join(""), a += [ t[13], s.F.entities(s.ME(t[14], s.MB, s.MN, null)), t[15], s.ME(t[16], s.MB, s.MN, null), t[17] ].join(""), s.MN(i[1], void 0), a += t[18]), a += t[19], s.MN("index", 0), a += t[20], s.MN(i[3], s.MI(s.array_length(s.MB(i[4]))) - s.MI(1)), a += t[20];
var r = s.MC(i[4]) || [];
n.unshift(null);
for (var o = 1, _ = r.length; _ >= o; o++) {
if (n[0] = r[o - 1], a += t[21], s.MJ(s.MB(i[7])) && (a += t[22], a += t[23], s.MJ(/zh|xt|ja|ko/.test(s.MB(i[5]))) && (a += t[24]), a += t[25], s.MD(i[6]) && (a += [ t[26], s.MC(i[6]), t[27] ].join("")), a += [ t[28], s.MC(i[7]), t[29] ].join("")), a += t[30], a += t[31], s.MJ(/zh|xt|ja|ko/.test(s.MB(i[5]))) && (a += t[24]), a += s.MJ(s.MB(i[8]) + "" == "airport") ? t[32] :s.MJ(s.MB(i[8]) + "" == "city") ? t[33] :s.MJ(s.MB(i[8]) + "" == "country") ? t[34] :s.MJ(s.MB(i[8]) + "" == "district") ? t[35] :s.MJ(s.MB(i[8]) + "" == "hotel") ? t[36] :s.MJ(s.MB(i[8]) + "" == "landmark") ? t[37] :s.MJ(s.MB(i[8]) + "" == "region") ? t[38] :s.MJ(s.MB(i[8]) + "" == "theme") ? t[39] :t[34], a += t[40], s.MD(i[7]) && (a += t[41]), s.MJ(s.MB(i[9])) && s.MJ(s.MB(i[10])) && (a += t[42]), s.MJ(s.MB(i[11])) && s.MJ(s.MC(i[11]).is_region_city) && (a += t[43]), s.MJ(s.MB(i[8]) + "" == "theme") && (a += t[44], s.MD(i[12]) || (a += t[45], s.MN(i[12], t[46])), a += t[47]), s.MJ(s.MB(i[11])) && s.MJ(s.MC(i[11]).tabbed) && (a += t[48]), a += s.MJ(s.MB(i[13])) && s.MJ(2 == s.track_experiment("PVbOMFcUNKe")) ? t[49] :t[50], s.MJ(s.MB(i[14])) && s.MJ(s.MB(i[15])) && s.MJ(s.MB(i[16])) && (a += t[51]), a += [ t[52], s.MC(i[17]), t[53], s.F.entities(s.MC(i[18])), t[54] ].join(""), s.MD(i[19]) && (a += [ t[55], s.F.html(s.MC(i[19])), t[54] ].join("")), a += t[56], a += t[57], s.MJ(s.MC(i[11]).ski_item_replace_image) ? a += [ t[58], s.F.html(s.MC(i[19])), t[5], s.STATIC_HOSTNAME("/static/img/ski/ski.png", 0, 0, 0), t[59] ].join("") :s.MJ(s.MC(i[11]).beach_labeled_filter) ? (a += t[57], s.MJ(2 == s.track_experiment("HMDIFMWBaUEVWNERT")) ? a += [ t[58], s.F.html(s.MC(i[19])), t[5], s.STATIC_HOSTNAME("/static/img/beach/beach_icon.jpg", 0, 0, 0), t[59] ].join("") :s.MJ(3 == s.track_experiment("HMDIFMWBaUEVWNERT")) && (a += [ t[58], s.F.html(s.MC(i[19])), t[5], s.STATIC_HOSTNAME("/static/img/beach/beach_image.jpg", 0, 0, 0), t[59] ].join("")), a += t[57]) :s.MJ(s.MB(i[20])) ? a += [ t[58], s.F.html(s.MC(i[19])), t[5], s.STATIC_HOSTNAME(s.MB(i[20]), 0, 0, 0), t[59] ].join("") :(a += t[57], s.MJ(s.track_experiment("bLEGPBDWLaPJYVT")) && s.MK(s.MB(i[21])) && (a += t[60]), a += t[57]), a += t[57], s.MJ(s.MB(i[8]) + "" == "theme")) a += t[61], a += t[62], a += [ t[63], s.F.entities(s.MC(i[19])), t[64] ].join(""); else {
a += t[57], s.MJ(s.MB(i[22])) && s.MJ(s.MB(i[21])) && (a += [ t[65], s.MC(i[22]), t[66] ].join("")), a += t[57];
var l = "";
if (l += t[57], s.MD(i[24])) {
l += t[57];
var d = o, h = r, c = _, r = s.MC(i[24]) || [];
n.unshift(null);
for (var o = 1, _ = r.length; _ >= o; o++) n[0] = r[o - 1], l += t[57], s.MD(i[25]) && (l += t[67]), l += [ t[57], s.F.entities(s.MC(i[26])), t[57] ].join(""), s.MD(i[25]) && (l += t[66]), l += t[57];
n.shift(), o = d, r = h, _ = c, l += t[57];
} else s.MD(i[27]) ? l += [ t[57], s.MC(i[27]), t[57] ].join("") :s.MD(i[19]) && (l += [ t[57], s.F.entities(s.MC(i[19])), t[57] ].join(""));
if (l += t[57], s.MD(i[28]) && (l += [ t[68], s.MC(i[28]), t[66] ].join("")), l += t[57], s.MN(i[23], l), a += t[57], s.MJ(s.MB(i[13])) && s.MJ(2 == s.track_experiment("PVbOMFcUNKe")) ? (a += t[57], s.MN(i[29], [ t[69], s.F.entities(s.MC(i[13])), t[70] ].join("")), a += [ t[71], (n.unshift({
destination:s.MB(i[23]),
property_type:s.MB(i[29])
}), e = s.ME(t[72], s.MB, s.MN, null), n.shift(), e), t[57] ].join("")) :a += [ t[57], s.MC(i[23]), t[57] ].join(""), a += t[57], s.MJ(s.MB(i[14])) && s.MJ(s.MB(i[15])) && s.MJ(s.MB(i[16])) && (a += t[73], a += s.MD(i[2]) ? [ t[57], s.DATE(s.MB(i[15]), "numeric_date_range", "", "", s.MB(i[16])), t[57] ].join("") :[ t[57], s.DATE(s.MB(i[15]), "short_date_without_year_range", "", "", s.MB(i[16])), t[57] ].join(""), a += t[66]), a += t[57], s.MD(i[30])) {
a += t[57];
var d = o, h = r, c = _, u = f, r = s.MC(i[30]) || [];
n.unshift({
endorsement:null
});
for (var f, o = 1, _ = r.length; _ >= o; o++) n[0].endorsement = f = r[o - 1], a += [ t[74], f ].join(""), s.MJ(o != r.length) && (a += t[75]), a += t[66];
n.shift(), o = d, r = h, _ = c, f = u, a += t[57];
}
a += t[57], s.MJ(s.MC(i[11]).ski_item) ? a += [ t[76], s.ME(t[77], s.MB, s.MN, null), t[66] ].join("") :s.MJ(s.MC(i[11]).beach_labeled_filter) && s.MJ(3 == s.track_experiment("HMDIFMWBaUEVWNERT")) ? a += [ t[78], s.ME(t[79], s.MB, s.MN, null), t[66] ].join("") :s.MJ(s.MC(i[11]).popular) && (a += [ t[80], s.F.entities(s.ME(t[81], s.MB, s.MN, null)), t[66] ].join("")), a += t[57];
}
a += t[57], s.MN("index", s.MI(s.MB(i[17])) + s.MI(1)), a += t[57], a += t[82];
}
n.shift(), a += t[83], s.MD(i[31]) && (a += t[84]), a += t[85];
}
return a += t[85], _r_(a);
}
return a += t[0], a = r(a), a += t[20], _r_(a);
});
}()), booking.jstmpl("search_destination_autocomplete_loading", function() {
_i_("4ab:2584449c");
var e = [ "\n		", '\n\n<ul class="c-autocomplete__list sb-autocomplete__list sb-autocomplete__list--loading">\n	', '\n		<li class="c-autocomplete__item sb-autocomplete__item sb-autocomplete__item--city">\n			', '\n				<span class="sb-autocomplete__item-placeholder-text js-placeholder-text"></span>\n			', "\n		</li>\n	", "\n</ul>\n", "\n	" ], t = [ "fe_sb_autocomplete_loading_items" ];
return _r_(function(i) {
_i_("4ab:d9585df0");
var n = "", a = this.fn;
function s(n) {
_i_("4ab:2cc1f6cd"), a.MN("fe_sb_autocomplete_loading_items", 5), n += e[1];
var s = a.seq(1, a.MB(t[0])) || [];
i.unshift(null);
for (var r = 1, o = s.length; o >= r; r++) {
i[0] = s[r - 1], n += e[2];
var _ = r, l = s, d = o, s = a.seq(1, 3) || [];
i.unshift(null);
for (var r = 1, o = s.length; o >= r; r++) i[0] = s[r - 1], n += e[3];
i.shift(), r = _, s = l, o = d, n += e[4];
}
return i.shift(), n += e[5], _r_(n);
}
return n += e[0], n = s(n), n += e[6], _r_(n);
});
}());
var n = e("jquery"), a = e("component/autocomplete-core"), s = e("search/searchbox/model"), r = e("search/searchbox/analytics"), o = !1;
try {
window.sessionStorage && window.sessionStorage.getItem && (o = !0);
} catch (_) {}
if ("index" === B.env.b_action && "undefined" != typeof window.performance && window.performance.navigation && 2 === window.performance.navigation.type && o && (B.et.stage("UBKeJAESfZdCXGbTFfdbfZC", 1), B.et.stage("UBKeJAESfZdCXGbTFfdbfZC", 3), B.env.fe_exp_prev_search && null !== window.sessionStorage.getItem("previous_search_data"))) {
var l = JSON.parse(window.sessionStorage.getItem("previous_search_data"));
for (var d in l) l.hasOwnProperty(d) && (Array.isArray(l[d]) ? l[d].forEach(function(e, t) {
_i_("4ab:b117aa9a"), n("#frm[role=search] [name=" + d + "]").eq(t).val(e), _r_();
}) :(("checkin_monthday" === d || "checkout_monthday" === d) && n("#frm[role=search] [name=" + d + "]").attr("data-selected", l[d]), n("#frm[role=search] [name=" + d + "]").val(l[d])));
n(".sb-date-field.b-datepicker").attr("data-force-init-render", 1);
}
i.exports = a.extend({
init:function() {
_i_("4ab:808d39fc"), this.optionsSpec = {
delay:{
name:"delay",
type:Number,
defaultValue:300
},
modelId:{
name:"sb-id",
type:String,
required:!0
},
filterDestType:{
name:"filter-dest-type",
type:String
},
gpf:{
name:"gpf",
type:Boolean
},
gpOnly:{
name:"gp-only",
type:Boolean
},
minLength:{
name:"minlength",
type:Number,
defaultValue:2
},
focusOnLoad:{
name:"focus-on-load",
type:Boolean
},
focusOnTyping:{
name:"focus-on-typing",
type:Boolean
},
isSticky:{
name:"is-sticky",
type:Boolean
},
required:{
name:"required",
type:Boolean
},
isOrigin:{
name:"origin",
type:Boolean
},
collapseACSingleAirport:{
name:"collapse-ac-single-airport",
type:Boolean
},
flags:{
name:"flags",
type:String,
defaultValue:""
}
}, n.extend(this.optionsSpec, this.extendOptions()), this.$errors = this.$el.find("[data-error-id]"), this.$clear = this.$el.find('[data-clear=""]'), this.$searchbox = this.$el.closest(".sb-searchbox__outer"), this.isA11yMessageReading = !1, B.et.track("cJacAcfEIRbGfCHT") && (this.$searchbox.length ? this.$skiInput = this.$searchbox.find('input[name="is_ski_area"]') :this.$skiInput = n('form#frm input[name="is_ski_area"]'), this.$skiInput.length || (this.$el.after('<input type="hidden" name="is_ski_area" value="0">'), this.$skiInput = n('input[name="is_ski_area"]')), B.env.b_is_ski_area && this.$skiInput.val("1")), a.prototype.init.apply(this, arguments), this.model = s.getInstance(this.options.modelId), this.groupName = this.options.isOrigin ? "origin" :"destination", this.model.use(this.groupName), this.model.use("dates"), this.model.updateFlags(this.options.flags), this.inputUntouched = !0, this.model.on("change", this.modelChange.bind(this)), this.model.on("validation", this.modelValidation.bind(this)), this.destinationModel = this.options.isOrigin ? this.model.origin :this.model.destination, this.options.isOrigin && this.destinationModel.configure({
groupName:"origin"
}), this.options.required && this.destinationModel.configure({
validate:!0
}), this.options.gpOnly && this.destinationModel.configurePredictions({
gpo:1
}), this.options.gpf && this.destinationModel.configure({
gpf:1
}), this.options.filterDestType && this.destinationModel.configurePredictions({
dest_type:this.options.filterDestType
}), this.options.focusOnLoad && this.focusOnLoad(), this.options.focusOnTyping && this.options.isSticky && (this.stickyController = e("search/searchbox/searchbox-sticky-controller").getController()), this.options.focusOnTyping && this.enableFocusOnTyping(), this.$errors.filter(".-visible").length && (this.destinationModel.valid = !1), this.templateResults = B.jstmpl("search_destination_autocomplete_results"), this.toggleClear(), this.modelInit(), this.renderLoadingElement(), _r_();
},
addInputEventListeners:function() {
_i_("4ab:f378917f"), a.prototype.addInputEventListeners.apply(this, arguments), this.$clear.length && this.$clear.on("click", this.clearClick.bind(this)), _r_();
},
renderLoadingElement:function() {
_i_("4ab:5ef3d2ab"), this.shouldShowLoadingState = !0;
var e = {};
this.$loading = n(B.jstmpl("search_destination_autocomplete_loading").render(e)), this.$loading.find(".js-placeholder-text").each(function() {
_i_("4ab:ec304248"), n(this).width(65 + parseInt(65 * Math.random(), 10)), _r_();
}), this.$loading.insertAfter(this.$list), _r_();
},
showLoading:function() {
_i_("4ab:78a15504"), this.shouldShowLoadingState && (a.prototype.listHide.apply(this), this.$loading.addClass("-visible")), _r_();
},
hideLoading:function() {
_i_("4ab:c73e432c"), this.shouldShowLoadingState && this.$loading.removeClass("-visible"), _r_();
},
modelInit:function() {
_i_("4ab:4297a9e4");
var e = {
ss:this.input.value
};
this.destinationModel.init(e), _r_();
},
modelChange:function(e) {
if (_i_("4ab:59d4ac1d"), e && e.group && e.group == this.groupName) {
var t = this.destinationModel.get();
t.ss == this.input.value || this.isDeletion || (t.ss_modified && B.et.track("PVbOMFcUNKe") > 1 ? this.setValue(t.ss_modified) :this.setValue(t.ss)), e.onlyCurrentCountry && (this.$input.focus(), this.autocomplete()), this.inputUntouched = !1;
}
_r_();
},
modelValidation:function(e) {
_i_("4ab:5a8cdcc9"), e && e.group == this.groupName && (this.$errors.filter(".-visible").removeClass("-visible"), this.destinationModel.valid || (this.$el.find("#destination__error").addClass("-visible"), this.$errors.filter('[data-error-id="' + this.destinationModel.validationError + '"]').addClass("-visible"), r.send("[error] destination: " + this.destinationModel.validationError))), _r_();
},
inputClick:function() {
_i_("4ab:2c335fed"), ("" === this.input.value || this.inputUntouched) && this.model.getFlag("on_click_suggestions") && this.showSuggestions(), B.env.b_mlt_sb_recommendations_run && (this.model.getFlag("on_click_suggestions_track") && B.et.stage(this.model.getFlag("on_click_suggestions_track"), 1), this.model.getFlag("clear_input_on_click") && (this.$input.data("cached-value", this.input.value), this.input.value = ""), this.model.getFlag("on_click_suggestions_anywhere") && this.destinationModel && (this.suggestionsLocked = !1, this.destinationModel.suggestionsCache.results = this.destinationModel.parseMltRecommendations(B.env.b_mlt_sb_autocomplete_recommendations), this.destinationModel.suggestionsCache.on_click_suggestion = 1, this.showSuggestions(), this.listShow())), a.prototype.inputClick.apply(this, arguments), _r_();
},
inputInput:function() {
_i_("4ab:6c0cd69b"), this.isVisibleCalendar() && this.hideCalendar();
var e = this.input.value;
this.destinationModel.setSearchString(e), this.inputUntouched = !1, a.prototype.inputInput.apply(this, arguments), _r_();
},
inputKeyUp:function(e) {
_i_("4ab:a973eb51"), a.prototype.inputKeyUp.apply(this, arguments), _r_();
},
inputFocus:function(e) {
_i_("4ab:d7d815e0"), this.model.getFlag("sr_horizontal_sb") && e.target.select(), a.prototype.inputFocus.apply(this, arguments), _r_();
},
inputBlur:function() {
_i_("4ab:79247161"), clearTimeout(this.timer), this.destinationModel.abortPredictions(), this.hideLoading();
var e = this.destinationModel.get().ss_raw;
if (e) {
var t = e.split(/\s+/).length;
r.sendOnce("[interaction] autocomplete tokens typed [" + t + "]");
}
0 === this.input.value.length && this.model.getFlag("clear_input_on_click") && this.input.value !== this.$input.data("cached-value") && (this.input.value = this.$input.data("cached-value") || ""), a.prototype.inputBlur.apply(this, arguments), this.suggestionsLocked = !1, _r_();
},
inputEnter:function(e) {
_i_("4ab:8994a2f5"), r.send("[interaction] search input pressed enter"), a.prototype.inputEnter.apply(this, arguments), _r_();
},
onAutocompleteSearchStart:function() {},
clearClick:function(e) {
_i_("4ab:77e7b56d"), e.preventDefault(), this.reset({
hard:!0
}), this.input.focus(), _r_();
},
setValue:function(e) {
_i_("4ab:e818f9b0"), a.prototype.setValue.apply(this, arguments), this.toggleClear(), _r_();
},
toggleClear:function() {
_i_("4ab:06bed988"), this.$clear.length && this.$clear.toggleClass("-visible", "" !== this.input.value), _r_();
},
listShow:function() {
_i_("4ab:d5813ca9"), this.results && this.results.filter(function(e) {
return _i_("4ab:43186627"), _r_(e.photo_uri);
}).length ? this.$list.addClass("sb-autocomplete__list-with_photos") :this.$list.removeClass("sb-autocomplete__list-with_photos"), this.items.length > 0 && this.input.value.length >= this.options.minLength ? a.prototype.listShow.apply(this, arguments) :this.items.length > 0 && this.model.getFlag("on_click_suggestions") ? a.prototype.listShow.apply(this, arguments) :B.env.b_mlt_sb_recommendations_run && this.items && this.items.length && this.on_click_suggestion && a.prototype.listShow.apply(this, arguments), _r_();
},
autocomplete:function(e) {
_i_("4ab:386efa70"), e = e || {}, this.highlightReset({
preserveInputValue:!0
}), clearTimeout(this.timer), this.destinationModel.abortPredictions(), this.hideLoading(), this.toggleClear(), e.fromFocus ? this.model.getFlag("sr_horizontal_sb") && !this.items.length && this.query() && (this.showLoading(), this.destinationModel.getPredictions(this.query(), this.render.bind(this))) :(this.isDeletion ? this.destinationModel.reset() :this.postAutocomplete(), this.input.value.length >= this.options.minLength && (this._loading = !0), this.timer = setTimeout(function() {
_i_("4ab:2f091d60"), this.input.value.length >= this.options.minLength && (this.showLoading(), this.destinationModel.getPredictions(this.query(), this.render.bind(this)), this.onAutocompleteSearchStart()), _r_();
}.bind(this), this.options.delay)), _r_();
},
query:function() {
return _i_("4ab:1333d2a7"), _r_(this.input.value);
},
extendOptions:function() {
return _i_("4ab:5f5106ab"), _r_({});
},
render:function(e, t) {
_i_("4ab:3335a3b7");
var i;
if (this.results = [], this.items = [], this.$items = n({}), this.on_click_suggestion = !1, this.hideLoading(), !e && this.model.getFlag("on_click_suggestions_track") && t.on_click_suggestion && (this.on_click_suggestion = !0), this._loading = !1, !e || "service-booking-no-results" != e.toString() && -1 === e.toString().indexOf("ZERO_RESULTS") || r.send("[context] autocomplete zero results search"), !e && Array.isArray(t.results)) {
if (r.send("[context] autocomplete suggestions [" + t.results.length + "]"), t.is_powered_by_google && (B.et.stage("bLTLbFNJNfAFBaTfYSbC", 4), r.send("[context] autocomplete google place search")), B.et.track("PVbOMFcUNKe") > 1 && t.results.map(function(e) {
_i_("4ab:e9577c0a");
var t = e.meta_matches;
if (t && t.length > 0) for (var i = 0; i < t.length; i++) {
var n = t[i];
"hoteltype_new" !== n.type || e.property_in_label || (e.property_in_label = n.text, e.property_in_id = n.id);
}
_r_();
}), B.et.track("HMDIFMWBaUEVWNERT") > 1) {
var a = t.results.some(function(e) {
return _i_("4ab:f072ecd6"), _r_(e.flags && e.flags.beach_labeled_filter);
});
a && B.et.stage("HMDIFMWBaUEVWNERT", 2);
}
this.results = t.results, B.env.rtl && (t.is_rtl = !0), this.options.collapseACSingleAirport && 2 == t.results.length && "city" === t.results[0].dest_type && "airport" === t.results[1].dest_type && t.results[1].flags && t.results[1].flags.tabbed && (t.results[1].flags.tabbed = 0, t.results.shift()), this.items = t.results.filter(function(e) {
return _i_("4ab:59f3ecbb"), _r_(!!e.label);
}).map(function(e) {
if (_i_("4ab:46f22728"), e.photo_uri || B.et.stage("bLEGPBDWLaPJYVT", 1), e.property_in_label && B.et.track("PVbOMFcUNKe") > 1) return _r_({
value:e.label,
valueLowerCase:e.label.toLowerCase(),
valueWithPropertyType:B.jstmpl.translations("ss_search_box_search_property_type", null, {
property_type:e.property_in_label,
destination:e.ss
})
});
return _r_({
value:e.label,
valueLowerCase:e.label.toLowerCase()
});
}), B.env.b_mlt_sb_recommendations_run && B.env.b_mlt_sb_bookings && t.results.length && t.results[0].mlt_recommendation && (i = B.env.b_mlt_sb_bookings, i = this.destinationModel.parseMltRecommendations(i), t.mlt_booking = i[0]), this.$list.html(this.templateResults.render(t)), this.$items = this.$list.find('[data-list-item=""]'), this.model.getFlag("a11yinput") && this.a11yAnnounceResults(t);
} else e || (this.$list.html(this.templateResults.render(t)), this.model.getFlag("a11yinput") && this.a11yAnnounceResults(t));
this.postAutocomplete(), setTimeout(function() {
_i_("4ab:70d910d5"), this.$items.each(function() {
_i_("4ab:da012bc4"), this.scrollWidth > this.offsetWidth && this.setAttribute("data-title", this.getAttribute("data-label")), _r_();
}), _r_();
}.bind(this), 500), _r_();
},
a11yAnnounceResults:function(e) {
if (_i_("4ab:11e15ea1"), Array.isArray(e.results) && e.results.length > 0 && !this.isA11yMessageReading) {
this.isA11yMessageReading = !0;
var t = setTimeout(function() {
_i_("4ab:95b61f38"), this.$el.find(".sb-a11y-announcement").show(), this.$el.find(".sb-a11y-announcement").html("<p>" + B.jstmpl.translations("a11y_index_autocomplete_suggested_destinations") + "</p>"), setTimeout(function() {
_i_("4ab:6b9b89bf"), this.$el.find(".sb-a11y-announcement").html(""), this.$el.find(".sb-a11y-announcement").hide(), clearTimeout(t), this.isA11yMessageReading = !1, _r_();
}.bind(this), 500), _r_();
}.bind(this), 900);
}
_r_();
},
postAutocomplete:function() {
_i_("4ab:91933187"), a.prototype.postAutocomplete.apply(this, arguments), B.et.track("OTfdASFPVUELMfGEFbAcAIO") && this.a11yAnnounceResults(this), _r_();
},
choose:function(e) {
_i_("4ab:3aab6764"), r.send("[interaction] autocomplete click position [" + e + "]"), r.send("[interaction] autocomplete click [" + this.results[e].dest_type + "]"), clearTimeout(this.timer), this.destinationModel.abortPredictions(), this.destinationModel.set(this.results[e]), a.prototype.choose.apply(this, arguments);
var t = this.results[e];
B.et.track("PVbOMFcUNKe") > 1 && (n(".property_in_filter").remove(), t.property_in_id && n("form.sb-searchbox").append('<input class="property_in_filter" type="hidden" name="order_ht_id" value="' + t.property_in_id + '">')), t.__query_coverage < 1 && B.et.track("PVbOMFcUNKe") && B.et.stage("PVbOMFcUNKe", 5), t.flags && t.flags.deals && this.$el.after("<input type='hidden' name='em_ac_deal_option_clicked' value='1'>"), this.$skiInput && this.$skiInput.length && this.$skiInput.val(t.flags && t.flags.ski_item), B.et.goal("autocomplete_option_selected"), "theme" == this.results[e].dest_type ? B.et.goal("autocomplete_option_selected_theme") :"hotel" == this.results[e].dest_type ? B.et.goal("autocomplete_option_selected_hotel") :this.results[e].place_id ? B.et.goal("autocomplete_option_selected_google_places") :"query_finder" == this.results[e].result_type || B.et.goal("autocomplete_option_selected_destination"), "anywhere" == this.results[e].dest_type ? (this.model.setFields("drec_traffic", [ {
name:"dr_source",
value:"sb_anywhere"
} ]), this.model.emit("change", {
group:""
})) :(this.model.setFields("drec_traffic", []), this.model.emit("change", {
group:""
}));
var i = [ "landmark", "airport", "district", "region" ];
if (this.destinationModel.setTrackingFields("map_autoopen", []), -1 !== i.indexOf(t.dest_type)) {
this.locationSelected = !0;
var s = [];
(this.model.getFlag("open_location_in_map") || this.model.getFlag("open_location_in_map_checkbox")) && (this.model.getFlag("open_location_in_map") && s.push({
name:"map",
value:1
}), this.model.getFlag("open_location_in_map_checkbox") && n(".sb-searchbox__map_trigger input").prop("checked", "checked"), n(".sb-searchbox__map_trigger").removeClass("g-hidden")), this.destinationModel.setTrackingFields("map_trigger", s);
} else (this.model.getFlag("open_location_in_map") || this.model.getFlag("open_location_in_map_checkbox")) && (n(".sb-searchbox__map_trigger").addClass("g-hidden"), this.model.getFlag("open_location_in_map_checkbox") && n(".sb-searchbox__map_trigger input").prop("checked", null), this.destinationModel.setTrackingFields("map_trigger", []));
("theme" == this.results[e].dest_type || "theme_dest" == this.results[e].result_type) && this.model.submit(), this.results[e].mlt_recommendation && this.results[e].checkin && this.results[e].checkout ? (this.model.dates.setDate("checkin", this.results[e].checkin), this.model.dates.setDate("checkout", this.results[e].checkout), B.et.customGoal("OAZEUcCcCcCJNOODAKFGEVUC", 1), n("form.sb-searchbox").find('input[name="cdr"]').length || n("form.sb-searchbox").append('<input type="hidden" name="cdr" value="1" />')) :n("form.sb-searchbox").find('input[name="cdr"]').length && n("form.sb-searchbox").find('input[name="cdr"]').remove(), this.showCalendarOnDesinationChange(), _r_();
},
showCalendarOnDesinationChange:function() {
if (_i_("4ab:09bc156a"), !this.model.getFlag("calendar_on_destination_change") || this.model.dates.get().checkin) return _r_();
this.showCalendar(), _r_();
},
showCalendar:function() {
_i_("4ab:be5b36ad"), setTimeout(function() {
_i_("4ab:06a108eb"), this.$searchbox.find(".c2-wrapper-s-checkin").trigger("show"), _r_();
}.bind(this)), _r_();
},
hideCalendar:function() {
_i_("4ab:a9d1a932"), setTimeout(function() {
_i_("4ab:ac32f75e"), this.$searchbox.find(".c2-wrapper-s-checkin").trigger("hide"), this.$searchbox.find(".c2-wrapper-s-checkout").trigger("hide"), _r_();
}.bind(this)), _r_();
},
isVisibleCalendar:function() {
return _i_("4ab:11bc046e"), _r_(this.$searchbox.find(".c2-calendar").is(":visible"));
},
showSuggestions:function() {
if (_i_("4ab:dbef85d6"), this.suggestionsLocked) return _r_();
this.destinationModel.getSuggestions(this.render.bind(this)), this.suggestionsLocked = !0, _r_();
},
focusOnLoad:function() {
_i_("4ab:2740fc1e");
var e = n(document);
e.ready(function() {
_i_("4ab:32b33601"), this.input.focus(), _r_();
}.bind(this)), _r_();
},
enableFocusOnTyping:function() {
_i_("4ab:102813c8");
var e = n(document), t = this.onKeyDown.bind(this);
e.on("keydown.autofocus", t), this.$input.on("blur", function() {
_i_("4ab:daadcd04"), e.on("keydown.autofocus", t), _r_();
}.bind(this)).on("focus", function() {
_i_("4ab:af4707fe"), e.off("keydown.autofocus", t), _r_();
}.bind(this)), _r_();
},
onKeyDown:function(e) {
if (_i_("4ab:d8f98948"), B.env.copy_editor_enabled) return _r_();
var t = this.$input.offset().top, i = e.keyCode, a = e.metaKey || e.ctrlKey, s = i > 47 && 58 > i || i > 64 && 91 > i || i > 95 && 112 > i;
!s || a || !document.activeElement || /INPUT|TEXTAREA|SELECT/.test(document.activeElement.nodeName) || n(".modal-mask:visible").length || (this.options.isSticky && this.stickyController ? this.stickyController.show() :window.scrollY > t && n("html, body").animate({
scrollTop:t - 5
}), this.input.value && this.setValue(""), this.$input.focus(), this.$input.trigger("focus_destionation_whilie_typing")), _r_();
},
reset:function() {
_i_("4ab:a335a355"), this.selectedValue || this.destinationModel.reset(), a.prototype.reset.apply(this, arguments), _r_();
},
inputBlurSync:function() {
_i_("4ab:3f89dcd6"), a.prototype.inputBlurSync.apply(this, arguments), _r_();
},
clickOut:function() {
_i_("4ab:81a507d7"), a.prototype.clickOut.apply(this, arguments), _r_();
}
}), _r_();
}), B.define("search/destination/model", function(e, t, i) {
"use strict";
_i_("4ab:6907bef5");
var n = e("search/destination/service"), a = e("browser-storage-handler"), s = e("server-data");
function r(e) {
_i_("4ab:93f52184"), this.model = e, this.data = {
ss:""
}, this.valid = !0, this.validationError = "", this.options = {
groupName:"destination"
}, this.predicitonParameters = {}, this.searchInstance = null, this.skipValidation = !1, this.suggestionsCache = {
results:[]
}, this.ac = {
selected:!1,
dataset:[]
}, _r_();
}
$.extend(r.prototype, {
init:function(e) {
_i_("4ab:dd883746"), this.data = e;
var t = {};
this.model && this.model.getFlag && (this.model.getFlag("on_click_suggestions") || this.model.getFlag("on_click_suggestions_anywhere")) && (this.model.getFlag("on_click_suggestions_anywhere") && (t.anywhere = !0), s.b_ac_search_history && this.model.getFlag("on_click_suggestions") && (t.searchHistory = !0), this.model.use("group"), this.model.on("init", function(e) {
_i_("4ab:6fa2874c"), "group" === e.group && this.fetchSuggestions(t), _r_();
}.bind(this))), this.emit("init"), _r_();
},
configure:function(e, t) {
_i_("4ab:4db4fdf8"), void 0 !== t ? this.options[e] = t :"object" == typeof e && $.extend(this.options, e), _r_();
},
getOption:function(e) {
return _i_("4ab:7b16e4e9"), _r_(this.options[e]);
},
get:function() {
return _i_("4ab:6dd4b5d3"), _r_(this.data);
},
set:function(e) {
if (_i_("4ab:edaa1dff"), a.isLocalStorageSupported() && e.dest_id && e.dest_id !== a.getSessionValue("prev_destination_id")) {
var t = JSON.stringify(e);
a.addSessionValue("prev_destination_id", e.dest_id, !1), a.addSessionValue("prev_destination_data", t, !1);
}
if (this.ac.selected = !0, this.searchInstance && this.searchInstance.getResultDetails && !e._details) return this.searchInstance.getResultDetails(e, function(t, i) {
_i_("4ab:f3760c37"), i = i || {}, i._details = !0, this.set(i), window.ga && window.ga("send", "event", "ac_google_places", [ e.place_types || "unknown", e.name ].join("|"), this.data.ss_raw, e.position), _r_();
}.bind(this)), _r_();
this.data.ss = e.ss, this.data.dest_id = e.dest_id, this.data.dest_type = e.dest_type, this.data.iata = e.iata, e.property_in_label && B.et.track("PVbOMFcUNKe") > 1 && (this.data.ss_modified = B.jstmpl.translations("ss_search_box_search_property_type", null, {
property_type:e.property_in_label,
destination:e.ss
})), e.flags && B.et.track("HMDIFMWBaUEVWNERT") > 1 ? this.data.ac_flags = e.flags :this.data.ac_flags = {}, e.nr_hotels && (this.data.nr_hotels = e.nr_hotels), this.data.acc_type_id = e.acc_type_id, e.place_id && e.latitude && e.longitude ? (this.data.place_id = e.place_id, this.data.latitude = e.latitude, this.data.longitude = e.longitude, this.data.place_types = e.place_types) :e.dest_id && e.latitude && e.longitude ? (this.data.place_id = "", this.data.latitude = e.latitude, this.data.longitude = e.longitude, this.data.place_types = null) :(this.data.place_id = "", this.data.latitude = "", this.data.longitude = "", this.data.place_types = null), e._fa && this.model.setFormAction(e._fa), e._ef = e._ef || [], this.data.dest_id && e._ef.push({
name:"dest_id",
value:this.data.dest_id
}), this.data.dest_type && e._ef.push({
name:"dest_type",
value:this.data.dest_type
}), this.data.iata && e._ef.push({
name:"iata",
value:this.data.iata
}), this.data.place_id && e._ef.push({
name:"place_id",
value:this.data.place_id
}), this.data.latitude && e._ef.push({
name:"place_id_lat",
value:this.data.latitude
}), this.data.longitude && e._ef.push({
name:"place_id_lon",
value:this.data.longitude
}), this.data.place_types && Array.isArray(this.data.place_types) && e._ef.push({
name:"place_types",
value:this.data.place_types.join(",")
}), e._ef.push({
name:"search_pageview_id",
value:s.pageview_id
}), e._ef.push({
name:"search_selected",
value:"true"
}), "rentalcars" == e.type && (this.data.type = "rentalcars", this.data.placeKey = e.placeKey, this.data.rentalcarsItem = e, "origin" == this.options.groupName ? this.model.setFields("rentalcars", e.fields.puFields) :this.model.setFields("rentalcarsDrop", e.fields.doFields)), this.model.setFields("destinationNotSelected", []), this.model.setFields("destinationSelected", e._ef), this.emit("change"), _r_();
},
setSearchString:function(e) {
_i_("4ab:9e900bbe"), this.data.ss = e, this.data.ss_raw = e, this.valid || this.validate(), _r_();
},
reset:function() {
_i_("4ab:3a2fa1d0"), this.data.dest_id = null, this.data.dest_type = null, this.data.iata = null, this.data.place_id = null, this.data.latitude = null, this.data.longitude = null, this.model.setFormAction(null), this.model.setFields(this.options.groupName, []), this.model.setFields("destinationNotSelected", []), this.model.setFields("destinationSelected", [ {
name:"dest_id",
value:""
}, {
name:"dest_type",
value:""
}, {
name:"search_pageview_id",
value:s.pageview_id
}, {
name:"search_selected",
value:"false"
} ]), "rentalcars" == this.data.type && (this.ac.selected = !1, this.data.type = null, this.data.placeKey = null, this.data.rentalcarsItem = null, "origin" == this.options.groupName ? this.model.setFields("rentalcars", []) :this.model.setFields("rentalcarsDrop", [])), this.emit("change"), _r_();
},
setTrackingFields:function(e, t) {
_i_("4ab:b1a2c949"), this.model.setFields(e, t), this.emit("change"), _r_();
},
validate:function() {
_i_("4ab:dfb41e21");
var e = !0, t = "";
if (!this.options.validate) return this.valid = e, this.validationError = t, _r_(e);
return "rentalcars" != this.model.getMode() || this.ac.selected || (e = !1, t = "search-string-empty"), "" === this.data.ss && (e = !1, t = "search-string-empty"), this.valid != e && (this.valid = e, this.validationError = t, this.emit("validation")), _r_(e);
},
initPredictions:function() {
if (_i_("4ab:d62dd623"), this.options.gpf) {
var e = B.require("search/destination/service-atlas");
e.init();
}
_r_();
},
configurePredictions:function(e) {
_i_("4ab:2348e34e"), $.extend(this.predicitonParameters, e), _r_();
},
getPredictions:function(e, t) {
_i_("4ab:f598218f");
var i = $.extend({}, s.search_autocomplete_params, this.predicitonParameters);
this.searchInstance && this.searchInstance.abort(), this.ac = {
selected:!1,
dataset:[]
};
function a(e, i) {
_i_("4ab:38fe5c61");
var n = arguments;
if (i) {
if (this.model.setFields(this.options.groupName, i._ef), this.model.setFields("destinationNotSelected", i._efd), this.searchInstance && this.searchInstance.getResultDetails && i.results && i.results[0] && !i.results[0]._details) return this.searchInstance.getResultDetails(i.results[0], function(e, a) {
_i_("4ab:606dd660"), e || (this.ac.dataset = i.results, this.ac.dataset[0] = a, this.ac.dataset[0]._details = !0), t.apply(null, n), _r_();
}.bind(this)), _r_();
this.ac.dataset = i.results;
}
t.apply(null, n), _r_();
}
i.ss = e, i.gpf = this.options.gpf, this.options.onlyCurrentCountry && (i.e_acf_i = s.b_country_id, i.e_acf_t = "country"), "rentalcars" == this.model.getMode() && (i.bgo = 1), this.searchInstance = n.search(i, a.bind(this)), this.model.setFields("destinationOriginal", [ {
name:"ss_raw",
value:i.ss
} ]), this.model.setFields("destinationSelected", [ {
name:"search_pageview_id",
value:s.pageview_id
} ]), _r_();
},
abortPredictions:function() {
_i_("4ab:c8ff77c3"), this.searchInstance && this.searchInstance.abort(), _r_();
},
getSuggestions:function(e, t) {
if (_i_("4ab:3d6a9042"), this.suggestionsCache.results.length) return setTimeout(function() {
_i_("4ab:3f9d0a10"), e(null, this.suggestionsCache), _r_();
}.bind(this), 0), _r_();
this.model.one("destination:suggestions", function() {
_i_("4ab:76e249d1"), this.suggestionsCache.results.length && e(null, this.suggestionsCache), _r_();
}.bind(this)), _r_();
},
fetchSuggestions:function(e) {
if (_i_("4ab:098436b9"), this.suggestionsLoading) return _r_();
var t = function(e, t) {
if (_i_("4ab:28ad48ee"), !e && t && t.results) {
t.on_click_suggestion = t.results.length > 0;
for (var i = 0; i < t.results.length; i++) !t.results[i].ss && t.results[i].label && (t.results[i].ss = t.results[i].label);
this.suggestionsCache = t;
}
this.suggestionsLoading = !1, this.emit("destination:suggestions"), _r_();
}, i = B.require("search/destination/service-booking");
this.suggestionsInstance = i.getSuggestions(t.bind(this), e), this.suggestionsLoading = !0, _r_();
},
initOnlyCurrentCountry:function(e) {
_i_("4ab:af26eabf"), this.options.onlyCurrentCountry = !!e, _r_();
},
getOnlyCurrentCountry:function() {
return _i_("4ab:aad660fa"), _r_(!!this.options.onlyCurrentCountry);
},
setOnlyCurrentCountry:function(e) {
_i_("4ab:cdbded91"), this.options.onlyCurrentCountry = !!e, this.emit("change", {
onlyCurrentCountry:!0
}), _r_();
},
emit:function(e, t) {
_i_("4ab:a87f384f"), t = t || {}, this.model.emit(e, $.extend(t, {
group:this.options.groupName
})), _r_();
},
parseMltRecommendations:function(e) {
return _i_("4ab:f41ce8ff"), e && e.length && e.forEach(function(e) {
_i_("4ab:25d1a7d7"), e.ss = e.label, e.dest_id = e.b_ufi, e.dest_type = "city", e.photo_uri = e.picture_city ? e.picture_city :e.b_image_url, e.mlt_recommendation = 1, _r_();
}), _r_(e);
}
}), i.exports = r, _r_();
}), B.define("search/destination/service", function(e, t, i) {
"use strict";
_i_("4ab:a0e654bd");
var n = e("search/destination/service-booking"), a = e("search/destination/service-carrier"), s = e("search/destination/service-atlas");
function r(e, t, i) {
_i_("4ab:25782d5b");
var n, a, s, r = [], _ = [], l = [], d = 0, h = function(e, t, n) {
if (_i_("4ab:0f178f9a"), d++, r.length && (t ? _.push(t) :l[e] = n, d == r.length)) if (_.length == r.length) i.call(null, _[0], null); else {
var a = o(l);
i.call(null, null, a);
}
_r_();
}, c = function() {
for (_i_("4ab:576abf68"), n = 0; n < r.length; n++) r[n].abort();
_r_();
};
for (n = 0; n < e.length; n++) a = e[n].search.call(e[n], $.extend({}, t), h.bind(null, n)), a.getResultDetails && (s = a.getResultDetails), r.push(a);
return _r_({
abort:c,
getResultDetails:s
});
}
function o(e) {
_i_("4ab:a695d3d4");
var t = 6, i = 3, n = {
results:[],
_ef:[],
_efd:[]
};
return e.forEach(function(e) {
if (_i_("4ab:edffad1c"), !e) return _r_();
if (e.results) if (n.results.length) {
e.results = e.results.filter(d), e.results.splice(i);
var a = t - e.results.length;
n.results.splice(a), n.results = e.results.concat(n.results);
} else n.results = e.results;
[ "_ef", "_efd" ].forEach(function(t) {
_i_("4ab:6dab5c6f"), e[t] && (n[t] = n[t].concat(e[t].filter(_(n[t])))), _r_();
}), n.is_powered_by_google = n.is_powered_by_google || e.results.length && e.is_powered_by_google, _r_();
}), n.results.forEach(function(e, t) {
_i_("4ab:584c6ebc"), e._ef = l(e._ef, "ac_position", t), _r_();
}), n.city = n.results, n.__js_upa__ = n.is_powered_by_google, _r_(n);
}
function _(e) {
_i_("4ab:cfe35e0f");
var t = {};
return e.forEach(function(e) {
_i_("4ab:3ea7ecae"), t[e.name] = !0, _r_();
}), _r_(function(e) {
return _i_("4ab:a960f252"), _r_(!t[e.name]);
});
}
function l(e, t, i) {
return _i_("4ab:ca4a0847"), e = e.filter(function(e) {
return _i_("4ab:a68aebab"), _r_(e.name !== t);
}), e.push({
name:t,
value:i
}), _r_(e);
}
function d(e) {
return _i_("4ab:251aa6fe"), _r_(-1 != [ "route", "postal_code", "street_address" ].indexOf(e.place_type));
}
function h(e, t, i) {
_i_("4ab:6f86c29a");
var n, a = [], s = [], r = function(e, t) {
if (_i_("4ab:ed5c5479"), a.length) if (e) s.push(e), s.length == a.length && i.call(null, e, t); else for (i.call(null, e, t), n = 0; n < a.length; n++) a[n].abort();
_r_();
}, o = function() {
for (_i_("4ab:576abf681"), n = 0; n < a.length; n++) a[n].abort();
_r_();
};
for (n = 0; n < e.length; n++) a.push(e[n].search.call(e[n], $.extend({}, t), r));
return _r_({
abort:o
});
}
function c(e, t, i) {
_i_("4ab:07658647");
var n, a, s = {}, r = function(t, n) {
_i_("4ab:acba504d"), setTimeout(function() {
_i_("4ab:7f67710e"), t && e.length ? (B.et.stage("bLTLbFNJNfAFBaTfYSbC", 6), a()) :i.call(null, t, n), _r_();
}, 0), _r_();
};
a = function() {
_i_("4ab:fd77b50e");
var i = e.shift();
n = i.search.call(i, $.extend({}, t), r), s.getResultDetails = n.getResultDetails, _r_();
};
var o = function() {
_i_("4ab:bdda41de"), n && n.abort(), _r_();
};
return a(), s.abort = o, _r_(s);
}
i.exports = {
search:function(t, i) {
if (_i_("4ab:bd0b8dfe"), !t || !t.ss || "function" != typeof i) throw new Error("Invalid arguments");
if (t.bgo) return _r_(e("search/destination/service-rentalcars").search(t, i));
B.et.stage("bLTLbFNJNfAFBaTfYSbC", 1);
var o = s;
if (B.et.track("bLTLbFNJNfAFBaTfYSbC") && (o = a), "www" === B.env.b_site_type && /^[,\s]+$/.test(t.ss) && B.et.stage("bLEGPBDDUcbLWdPZWKAKBEO", 1) && B.et.track("bLEGPBDDUcbLWdPZWKAKBEO")) return i(new Error("Invalid search string"), null), _r_();
return t.gpo ? _r_(o.search(t, i)) :t.fesp_acf_i || t.fesp_acf_i_regions || t.fesp_acf_i_cities ? _r_(n.search(t, i)) :t.gpf && t.ss.match(/[0-9]/) ? (B.et.stage("bLTLbFNJNfAFBaTfYSbC", 5), _r_(r([ n, o ], t, i))) :_r_(t.gpr ? h([ n, o ], t, i) :t.gpf ? c([ n, o ], t, i) :n.search(t, i));
}
}, _r_();
}), B.define("search/destination/service-atlas", function(e, t, i) {
"use strict";
_i_("4ab:7994a9de");
var n = e("event-emitter"), a = e("server-data"), s = a.b_map_center_latitude || a.b_latitude || void 0, r = a.b_map_center_longitude || a.b_longitude || void 0, o = 3e4, _ = 2, l = [ "ChIJNy0jzGPMUQ4RWpboPw0ztMY", "ChIJ2xJC2SwmsUcRBqiHnUEubtY", "ChIJT-IyeGHurw0Rx89nUEaYTPM", "ChIJk_Swujrurw0R7yS_X2BSuD4", "ChIJv02k1k9oWQ0RWvhKDOLvTWA", "ChIJEdjOLYEU9x4RSanYNmYyKNE" ], d = {
administrative_area_level_1:"region",
administrative_area_level_2:"region",
administrative_area_level_3:"region",
administrative_area_level_4:"region",
administrative_area_level_5:"region",
region:"region",
airport:"airport",
country:"country",
locality:"city",
point_of_interest:"landmark",
poi:"landmark",
route:"region",
street_address:"region",
postal_code:"region",
sublocality:"district"
}, h = "zh" === a.b_lang || "xt" === a.b_lang || "ja" === a.b_lang || "ko" === a.b_lang, c = "cn" === a.b_guest_country, u = a.b_enable_mapbox_fallback ? !c :!0;
function f() {
return _i_("4ab:1442e591"), _r_(!!B.atlas);
}
function p(e, t, i) {
_i_("4ab:e6f25a32");
var n = {
city:[]
};
n.__upa__ = t.filter(b).slice(0, 5).map(function(t, i) {
_i_("4ab:e6d691fd"), t = t.get("data");
var n = {
upa:!0,
nr_hotels:0,
nr_hotels_25:0,
ss_raw:e.ss,
dest_id:t.id,
place_id:t.id,
dest_type:d[t.types && t.types[0]] || "landmark",
place_type:t.types && t.types[0],
place_types:t.types,
ss:t.description,
label:t.description,
label_blocks:M(t.description, t.matched_substrings),
label_highlighted:v(t.description, t.matched_substrings, {
encode:e.gpf_encode
}),
label_multiline:"<span><b>" + t.description + "</b></span>",
hotels:0,
lc:a.b_lang,
position:i,
is_google_result:u,
_ef:[],
cjk:h
};
return c && (n.is_mapbox_result = !0, n.longitude = t.longitude, n.latitude = t.latitude, n._details = !0), n._ef.push({
name:"ac_position",
value:i
}), _r_(n);
}), n.results = n.__upa__, n._ef = [], n._ef.push({
name:"search_pageview_id",
value:a.pageview_id
}), window.google && (n.is_powered_by_google = n.results.length > 0, n.__js_upa__ = n.is_powered_by_google), i(null, n), _r_();
}
function b(e) {
_i_("4ab:ef069c17");
var t = e.get("data");
return _r_(-1 === l.indexOf(t.id));
}
function m(e, t, i) {
_i_("4ab:917860fc"), e = e || {}, e.id = t.id || t.place_id, e.place_id = e.id, e.name = t.name || t.formatted_address, e.latitude = t.geometry.location.lat(), e.longitude = t.geometry.location.lng(), e.place_types = t.types, e.dest_type = d[t.types && t.types[0]] || "landmark", e._ef = e._ef || [], e._ef.push({
name:"ss_short",
value:t.name
}), i(null, e), _r_();
}
function g(e, t) {
if (_i_("4ab:9221a364"), !e.place_id) return t(null, e), _r_();
this.atlas.getGeocodeDetails({
placeId:e.place_id
}, function(i) {
_i_("4ab:c06b68e2"), m(e, i, t), _r_();
}), _r_();
}
function v(e, t, i) {
_i_("4ab:c213b701");
var n = "";
if (i = i || {}, !t || 0 === t.length) return _r_(e);
for (var a = t.map(function(e) {
return _i_("4ab:ca1dc371"), _r_(e.offset);
}), s = t.map(function(e) {
return _i_("4ab:7fb56cd4"), _r_(e.offset + e.length - 1);
}), r = 0; r < e.length; r++) -1 != a.indexOf(r) && (n += "<b>"), n += e.charAt(r), -1 != s.indexOf(r) && (n += "</b>");
return i.encode && (n = B.jstmpl.fn.FILTERS.entities(n), n = n.replace(/&lt;b&gt;/g, "<b>"), n = n.replace(/&lt;&#47;b&gt;/g, "</b>")), _r_(n);
}
function M(e, t) {
_i_("4ab:6036b1d4");
var i = [];
if (!t || 0 === t.length) return _r_([ {
text:e
} ]);
return t[0].offset && i.push({
text:e.substr(0, t[0].offset)
}), t.forEach(function(n, a) {
_i_("4ab:0ca6c165");
var s = n.offset + n.length, r = (t[a + 1] && t[a + 1].offset || e.length) - s;
i.push({
highlighted:!0,
text:e.substr(n.offset, n.length)
}), r && i.push({
text:e.substr(s, r)
}), _r_();
}), _r_(i);
}
i.exports = n.extend({
init:function(e, t) {
_i_("4ab:158480be"), e = e || {};
var i = this, n = "booking-places";
if (!f()) throw "service-atlas: B.atlas is not available";
if (this.initialized) return t && this.atlas && this.atlas.done(t), _r_();
this.initialized = !0;
var s = function(e) {
_i_("4ab:865b974b");
var s = document.createElement("div"), r = "provider-google-places";
a.b_enable_mapbox_fallback && (r = c ? "provider-mapbox-places" :"provider-google-places"), i.atlas = new e({
provider:r,
modules:[ "autocomplete", "places" ],
options:{
domNode:s,
channel:n
}
}), t && i.atlas.done(t), _r_();
};
B.require([ "async-loader" ], function(e) {
_i_("4ab:2d04b6b9"), e.load({
js:"async_atlas_places_js"
}).then(function() {
_i_("4ab:a1bb1e25"), s(B.atlas.require("atlas-places")), _r_();
}), _r_();
}), _r_();
},
search:function(e, t) {
if (_i_("4ab:40267f1e"), !e || !e.ss || "function" != typeof t) throw new Error("service-atlas-invalid-arguments");
if (B.et.stage("bLTLbFNJNfAFBaTfYSbC", 2), e.ss.length < _) return setTimeout(function() {
_i_("4ab:b941c4cc"), t(new Error("service-atlas-too-short-search-string"), {}), _r_();
}, 4), _r_({
getDetails:$.noop,
abort:$.noop
});
if (!f()) return setTimeout(function() {
_i_("4ab:db39d051"), t(new Error("service-atlas-no-atlas"), null), _r_();
}, 4), _r_({
getDetails:$.noop,
abort:$.noop
});
var i = !1, n = {
query:e.ss
};
s && r && o && (n.lat = s, n.lon = r, n.radius = o);
var a = function(n) {
_i_("4ab:a10c180e"), i || (n && Array.isArray(n) ? p(e, n, t) :(B.et.customGoal("bLTLbFNJNfAFBaTfYSbC", 1), t(new Error("service-atlas-invalid-results"), null))), _r_();
}, l = function(e) {
_i_("4ab:bb806c95"), i || (B.et.customGoal("bLTLbFNJNfAFBaTfYSbC", 1), t(new Error("service-atlas-error " + e), null)), _r_();
};
this.init(e, function() {
_i_("4ab:e076c80f"), this.atlas.autocomplete(n, a, l), _r_();
}.bind(this));
var d = function() {
_i_("4ab:3598375c"), i = !0, _r_();
};
return _r_({
getResultDetails:g.bind(this),
abort:d
});
}
}), _r_();
}), B.define("search/destination/service-booking", function(e, t, i) {
"use strict";
_i_("4ab:b86b971e");
var n = e("event-emitter"), a = B.env.b_sb_autocomplete_predictions_url, s = B.env.b_sb_autocomplete_predictions_method || "GET";
function r(e) {
return _i_("4ab:559d946f"), e.term = e.ss, delete e.ss, _r_(e);
}
function o(e, t, i) {
_i_("4ab:db325224"), e && e.city ? e.__upa__ || 0 !== e.city.length || e.bbtoollocations && 0 !== e.bbtoollocations.length || e.theme && 0 !== e.theme.length || e.searches && 0 !== e.searches.length ? (e.city = e.city.map(function(t, i) {
return _i_("4ab:ef00fe0f"), !t.label && t.labels && (t.label = _(t.labels)), !t.labels || "zh" !== t.lc && "xt" !== t.lc && "ja" !== t.lc && "ko" !== t.lc || (t.label_blocks = l(t.labels)), t.ss = t.label, t.label_highlighted = t.label_highlighted || t.label, t.position = i, t._ef = t._ef || [], t._ef.push({
name:"ac_position",
value:i
}), t._ef.push({
name:"ac_langcode",
value:t.lc
}), e.__did_you_mean__ && (t._ef.push({
name:"suggested_term",
value:e.__did_you_mean__.suggestion
}), t._ef.push({
name:"suggestion_clicked",
value:1
})), _r_(t);
}), e.results = e.city, e.bbtoollocations && (e.results = e.bbtoollocations.map(function(e, t) {
return _i_("4ab:5a42b6da"), delete e.label_highlighted, e.label_blocks = [ {
highlighted:1,
text:e.name
}, {
text:", "
}, {
text:e.address
} ], e.ss = e.name, e.latitude = e.place_id_lat, e.longitude = e.place_id_lon, e.position = t, e._ef = e._ef || [], e._ef.push({
name:"bbtoollocation",
value:"1"
}), _r_(e);
}).concat(e.results)), e.theme && (e.theme = e.theme.map(function(t, i) {
return _i_("4ab:f34bb6fb"), t.ss = t.label, t._ef = t._ef || [], t._ef.push({
name:"ac_position",
value:i + e.city.length
}), _r_(t);
}), e.theme.length && t.limitOneTheme && (e.theme = [ e.theme[0] ]), e.results = e.results.concat(e.theme)), e._ef = e._ef || [], e._ef.push({
name:"search_pageview_id",
value:B.env.pageview_id
}), e._ef.push({
name:"ac_suggestion_list_length",
value:e.city.length
}), e._ef.push({
name:"ac_suggestion_theme_list_length",
value:e.theme ? e.theme.length :0
}), e._efd = e._efd || [], i(null, e)) :i(new Error("service-booking-no-results"), e) :i(new Error("service-booking-data-invalid"), null), _r_();
}
function _(e) {
return _i_("4ab:0e901f84"), _r_(e.map(function(e) {
return _i_("4ab:5a0bfd0c"), _r_(e.text);
}).join(", "));
}
function l(e) {
_i_("4ab:b468720b");
var t = [];
return e.forEach(function(e, i) {
_i_("4ab:3460616d"), i > 0 && t.push({
text:", "
}), t.push({
highlighted:!!e.hl,
text:e.text
}), _r_();
}), _r_(t);
}
function d(e, t, i) {
if (_i_("4ab:086594e5"), "error" === t && 403 === e.status) {
var n = window.location.href;
if (n.indexOf("page_reload") < 0) {
var a = 2e3;
"mdot" === B.env.b_site_type && (a = 1e3);
var s = B.jstmpl.translations("search_sbox_abandoned_search_open_tab_message"), r = B.jstmpl.translations("search_sbox_abandoned_search_open_tab_message_refresh_cta");
n.indexOf("#") > -1 ? ($("body").append($("<div class='sb-lightbox-brick-error'><p>" + s + "<br><br><a class='btn btn-primary' onclick='window.location.reload(true)'>" + r + "</a></p></div>")), setTimeout(function() {
_i_("4ab:fd72ef7a"), window.location.reload(!0), _r_();
}, a)) :(n += n.indexOf("?") > -1 ? "&page_reload=1" :"?page_reload=1", $("body").append($("<div class='sb-lightbox-brick-error'><p>" + s + "<br><br><a class='btn btn-primary' href='" + n + "'>" + r + "</a></p></div>")), setTimeout(function() {
_i_("4ab:b9dc97e2"), window.location.href = n, _r_();
}, a));
}
}
_r_();
}
i.exports = n.extend({
search:function(e, t) {
if (_i_("4ab:62f69040"), !e || !e.ss || "function" != typeof t) throw new Error("Invalid arguments");
var i = r(e);
this.emit("beforeajax", e, i);
var n = $.ajax({
type:s,
url:a,
data:i,
success:function(i, n, a) {
_i_("4ab:bc1b1311"), o(i, e, t), _r_();
}.bind(this),
error:function(e, i, n) {
_i_("4ab:43a0a1b4"), d(e, i, n), "abort" !== i && t(new Error("service-booking-error " + n), null), _r_();
}.bind(this)
}), _ = function() {
_i_("4ab:5bcdce42"), n && n.abort && n.abort(), _r_();
};
return _r_({
abort:_
});
},
getSuggestions:function(e, t) {
_i_("4ab:20c1eb6f");
var i = B.env.search_autocomplete_params, n = 0, a = "";
if (t && t.searchHistory && B.env.b_ac_search_history) return e(!1, {
results:B.env.b_ac_search_history
}), _r_();
"searchresults" === B.env.b_action && (a = B.search.dates("checkin"), a = "valid" === a.type ? a.toString() :""), i = Object.assign({}, i, {
ttype:n,
checkin:a
});
var s = $.ajax({
type:"get",
url:"/search_history_and_suggestions",
data:i,
success:function(t, i, n) {
_i_("4ab:c06447a2"), e(null, t), _r_();
},
error:function(t, i, n) {
if (_i_("4ab:5cf8cb68"), "abort" === i) return _r_();
e(new Error("service-booking-error " + n), null), _r_();
}
}), r = function() {
_i_("4ab:5bcdce421"), s && s.abort && s.abort(), _r_();
};
return _r_({
abort:r
});
}
}), _r_();
}), B.define("search/destination/service-carrier", function(e, t, i) {
"use strict";
_i_("4ab:fea2ec2a");
var n = e("event-emitter"), a = B.env.b_sb_googleplaces_carrier_url, s = B.env.b_sb_googleplaces_carrier_method || "POST", r = 2;
function o(e) {
return _i_("4ab:a4371962"), _r_({
ss:e.ss,
languagecode:e.lang
});
}
function _(e, t, i) {
if (_i_("4ab:c8696e5a"), e && e.length) {
e = e.filter(function(e) {
if (_i_("4ab:13f0a39f"), !e) return _r_(!1);
return e.place_type - e.place_type || "", e._ef = [], _r_(e);
});
var n = {
results:e,
is_powered_by_google:1
};
i(null, n);
} else B.et.customGoal("bLTLbFNJNfAFBaTfYSbC", 1), i(new Error("service-carrier-invalid-results"), null);
_r_();
}
function l(e, t) {
if (_i_("4ab:0c9fc41f"), !e.place_id) return t(null, e), _r_();
d({
place_id:e.place_id
}, function(i, n) {
if (_i_("4ab:0a1a3e2d"), "success" != i) return t(null, e), _r_();
e = e || {}, e.latitude = n.latitude, e.longitude = n.longitude, t(null, e), _r_();
}), _r_();
}
function d(e, t) {
if (_i_("4ab:a41428fa"), !e) return _r_();
e.geo = 1, $.ajax({
type:s,
url:a,
data:JSON.stringify(e),
xhrFields:{
withCredentials:!0
},
crossDomain:!0,
success:function(e, i) {
_i_("4ab:eb5b715c"), t(i, e), _r_();
}.bind(this),
error:function(e, i, n) {
_i_("4ab:805b6ae3"), "abort" !== i && t(i, new Error("service-booking-error " + n)), _r_();
}.bind(this)
}), _r_();
}
function h(e) {
if (_i_("4ab:8ee03e8e"), e) B.et.stage("bLTLbFNJNfAFBaTfYSbC", 3), window.performance && window.performance.mark && window.performance.mark("sss_carrier_google_places_call"); else if (window.performance && window.performance.mark && window.performance.measure) {
window.performance.mark("sss_carrier_google_places_call_end"), window.performance.measure("sss_carrier_google_places_call_measure", "sss_carrier_google_places_call", "sss_carrier_google_places_call_end");
var t = window.performance.getEntriesByName("sss_carrier_google_places_call_measure"), i = t[t.length - 1];
B.et.goalWithValue("js_sss_carrier_google_places_call", parseInt(i.duration));
}
_r_();
}
i.exports = n.extend({
search:function(e, t) {
if (_i_("4ab:d9f9c32e"), !e || !e.ss || "function" != typeof t) throw new Error("service-carrier-invalid-arguments");
if (B.et.stage("bLTLbFNJNfAFBaTfYSbC", 2), e.ss.length < r) return setTimeout(function() {
_i_("4ab:18829fb0"), t(new Error("service-carrier-too-short-search-string"), {}), _r_();
}, 4), _r_({
getDetails:$.noop,
abort:$.noop
});
var i = o(e);
i.geo = 0, this.emit("beforeajax", e, i), h(!0);
var n = $.ajax({
type:s,
url:a,
data:JSON.stringify(i),
xhrFields:{
withCredentials:!0
},
crossDomain:!0,
success:function(i, n, a) {
_i_("4ab:55332c79"), h(!1), _(i, e, t), _r_();
}.bind(this),
error:function(e, i, n) {
_i_("4ab:f428d2c2"), h(!1), "abort" !== i && t(new Error("service-booking-error " + n), null), _r_();
}.bind(this)
}), d = function() {
_i_("4ab:5bcdce422"), n && n.abort && n.abort(), _r_();
};
return _r_({
getResultDetails:l.bind(this),
abort:d
});
},
getSuggestions:function(e, t) {
_i_("4ab:20c1eb6f1");
var i = B.env.search_autocomplete_params, n = 0, a = "";
if (t && t.searchHistory && B.env.b_ac_search_history) return e(!1, {
results:B.env.b_ac_search_history
}), _r_();
"searchresults" === B.env.b_action && (a = B.search.dates("checkin"), a = "valid" === a.type ? a.toString() :""), i = Object.assign({}, i, {
ttype:n,
checkin:a
});
var s = $.ajax({
type:"get",
url:"/search_history_and_suggestions",
data:i,
success:function(t, i, n) {
_i_("4ab:c06447a21"), e(null, t), _r_();
},
error:function(t, i, n) {
if (_i_("4ab:5cf8cb681"), "abort" === i) return _r_();
e(new Error("service-booking-error " + n), null), _r_();
}
}), r = function() {
_i_("4ab:5bcdce423"), s && s.abort && s.abort(), _r_();
};
return _r_({
abort:r
});
}
}), _r_();
}), B.define("component/search/destination/input-shadow-autocomplete", function(e, t, i) {
"use strict";
_i_("4ab:4823bf5d");
var n = e("jquery"), a = e("component/search/destination/input");
i.exports = a.extend({
init:function() {
_i_("4ab:31272003"), a.prototype.init.apply(this, arguments), this.shadowItem = null, this.lang = B.env.b_lang, this.isRtl = "he" == B.env.b_lang || "ar" == B.env.b_lang, this.inputWidth = this.$input.outerWidth(), this.$shadowParent = this.$input.parent(), this.$shadowParent.addClass("c-autocomplete--shadow"), this.$inputShadow = n("<div />", {
"class":this.$input.attr("class")
}), this.$inputShadow.insertBefore(this.$input), n(window).on("resize", this.windowResize.bind(this)), this.windowResize(), _r_();
},
adjustWidth:function() {
_i_("4ab:d1eea085"), this.undoShadowParentWidth();
var e = this.$shadowParent.outerWidth();
this.$shadowParent.css("max-width", e + "px"), _r_();
},
addInputEventListeners:function() {
_i_("4ab:42d6914a"), a.prototype.addInputEventListeners.apply(this, arguments), this.$input.on("input", this.populateShadowInput.bind(this)), _r_();
},
onBlurAndEnter:function() {
_i_("4ab:cd5b5884"), null !== this.shadowItem && this.choose(this.shadowItem), this.resetShadow(), _r_();
},
inputEnter:function(e) {
_i_("4ab:44fcfe9e"), a.prototype.inputEnter.apply(this, arguments), this.onBlurAndEnter(), _r_();
},
inputBlurSync:function(e) {
_i_("4ab:b452c1eb"), a.prototype.inputBlurSync.apply(this, arguments), this.preventBlurClose || this.onBlurAndEnter(), this.undoShadowParentWidth(), _r_();
},
inputKeyUp:function(e) {
_i_("4ab:5f1ab6f6"), a.prototype.inputKeyUp.apply(this, arguments);
var t = 39 == e.which;
t && this.onBlurAndEnter(), _r_();
},
inputFocus:function() {
_i_("4ab:5151b353"), this.adjustWidth(), a.prototype.inputFocus.apply(this, arguments), _r_();
},
listItemClick:function(e) {
_i_("4ab:ebd7adb1"), a.prototype.listItemClick.apply(this, arguments), this.resetShadow(), _r_();
},
render:function(e, t) {
_i_("4ab:e33137bd"), a.prototype.render.apply(this, arguments), this.populateShadowInput(), _r_();
},
resetShadow:function() {
_i_("4ab:af1e5a3c"), this.shadowItem = null, this.$inputShadow.html(""), _r_();
},
populateShadowInput:function() {
_i_("4ab:622082b1");
var e = this.$input.val(), t = "", i = null;
this.results && e && this.results.forEach(function(n, a) {
_i_("4ab:07106b40"), !t && n.label && 0 == n.label.toLowerCase().indexOf(e.toLowerCase()) && (!this.isRtl || this.isRtl && n.lc == this.lang) && (t = n.label.slice(e.length), t = '<span style="color: transparent;">' + e + "</span>" + t, i = a), _r_();
}.bind(this)), this.shadowItem = i, this.$inputShadow.html(t), _r_();
},
setValue:function() {
_i_("4ab:7be3304e"), a.prototype.setValue.apply(this, arguments), this.populateShadowInput(), _r_();
},
undoShadowParentWidth:function() {
_i_("4ab:77f8e240"), this.$shadowParent.css("max-width", "none"), _r_();
},
windowResize:function() {
_i_("4ab:cd9d01ad"), this.$input.is(":focus") && this.adjustWidth(), _r_();
}
}), _r_();
}), B.define("component/search/travel-purpose/checkbox", function(e, t, i) {
"use strict";
_i_("4ab:b77000b7");
var n = e("component"), a = e("search/searchbox/model");
i.exports = n.extend({
init:function() {
_i_("4ab:305f16ac"), this.$form = this.$el.closest("form"), this.$checkbox = this.$el.find("[name=sb_travel_purpose]"), this.profileSplitAccounts = B.env.b_connected_user_accounts, this.formAction = this.$form.attr("action"), this.model = a.getInstance(this.$form.attr("data-sb-id")), this.searchedBusiness = !1, this.$checkbox.length && "checked" === this.$checkbox[0].getAttribute("checked") && (this.searchedBusiness = !0), (this.searchedBusiness || this.profileSplitAccounts) && this.bindEvents(), _r_();
},
bindEvents:function() {
_i_("4ab:09f29515"), this.$checkbox.on("change", this.handleCheckboxChange.bind(this)), _r_();
},
handleCheckboxChange:function() {
_i_("4ab:8eb5c85b"), this.$checkbox.prop("checked") ? (this.$hidden && (this.$hidden.remove(), this.$checkbox[0].setAttribute("name", "sb_travel_purpose")), this.createRedirectFormFields()) :(this.$hidden = $('<input name="sb_travel_purpose" value="leisure" type="hidden" />').appendTo(this.$el), this.$checkbox[0].setAttribute("name", "h_sb_travel_purpose"), this.createRedirectFormFields()), _r_();
},
createRedirectFormFields:function() {
if (_i_("4ab:cf653ddd"), !this.profileSplitAccounts || !this.profileSplitAccounts.length || !B.env.feature_profile_split_sb_checkbox) return _r_();
this.model.setFields("bnss", []), this.model.trigger("change", {});
var e = this.findAccountType(this.$checkbox.prop("checked")), t = this.formAction, i = B.env.b_secure_domain + this.$el.attr("data-profile-switch-url");
-1 === t.indexOf(B.env.b_nonsecure_hostname) && (t = B.env.b_nonsecure_hostname + t), t += -1 === t.indexOf("?") ? +this.$form.serialize() :"&" + this.$form.serialize(), this.model.setFields("bnss", [ {
type:"hidden",
name:"redirect_url",
value:t
}, {
type:"hidden",
name:"switch_to_user_id",
value:e.b_user_id
} ]), this.$form.attr("method", "POST"), this.model.setFormAction(i), this.model.trigger("change", {}), _r_();
},
findAccountType:function(e) {
_i_("4ab:ac648a14");
var t, i, n;
for (t = 0, i = this.profileSplitAccounts.length; i > t; ++t) "business" === this.profileSplitAccounts[t].b_type && e ? n = this.profileSplitAccounts[t] :"business" === this.profileSplitAccounts[t].b_type || e || (n = this.profileSplitAccounts[t]);
return _r_(n);
}
}), _r_();
}), B.define("component/search/dates/date-field", function(e, t, i) {
"use strict";
_i_("4ab:af0ba23e");
var n = e("caret"), a = e("component"), s = e("formatting/date"), r = e("keycodes"), o = e("read-data-options"), _ = e("ga-tracker"), l = e("search/searchbox/model");
i.exports = a.extend({
init:function() {
_i_("4ab:cecab28d"), this.options = o(this.el, {
forceInitRender:{
name:"force-init-render",
type:Boolean,
defaultValue:!1
},
modelId:{
name:"sb-id",
type:String,
required:!0
},
modelMode:{
name:"mode",
type:String,
defaultValue:"single"
},
validators:{
name:"validators",
type:String,
defaultValue:""
}
});
var e = this.options.validators.split(",");
this.model = l.getInstance(this.options.modelId), this.model.use("dates"), this.model.on("change", this.modelChange.bind(this)), this.model.dates.configure({
noValidation:!0,
allowMaxLos:!0,
notEmpty:e.indexOf("not-empty") >= 0
}), this.$display = this.$el.find("[data-display]"), this.$inputs = this.$el.find("[data-input]"), this.$inputYear = this.$inputs.filter('[data-input-fragment="year"]'), this.$inputMonth = this.$inputs.filter('[data-input-fragment="month"]'), this.$inputDay = this.$inputs.filter('[data-input-fragment="day"]'), this.$controls = this.$el.find("[data-controls]"), this.$iconDay = this.$el.find("[data-icon-day]"), this.$field = this.$el.find("[data-field]"), this.$controls.on("mousedown", this.controlsMouseDown.bind(this)), this.$inputs.on("focus", this.inputFocus.bind(this)), this.$inputs.one("focus", this.inputFocusTrack.bind(this)), this.$inputs.on("blur", this.inputBlur.bind(this)), this.$inputs.on("keydown", this.inputKeyDown.bind(this)), this.$inputs.on("keyup", this.inputKeyUp.bind(this)), this.$inputs.on("keypress", this.inputKeyPress.bind(this)), B.eventEmitter.on("CALENDAR:shown CALENDAR:closed", this.updateFocusClass.bind(this)), this.previousState = {}, this.state = {
editing:!1,
currentField:null
}, this.checkDateFields(), this.initModel(), _r_();
},
checkDateFields:function() {
_i_("4ab:639fee1f");
var e, t;
this.$inputYear.length && this.$inputMonth.length && this.$inputDay.length || (e = this.model.dates.getFallbackDates(this.options.modelMode), 0 === this.$inputYear.length && (t = e.year || "", this.$inputYear = this.createDateInputField(this.options.modelMode + "_year", t).appendTo(this.el), setTimeout(function() {
throw _i_("4ab:f7d72499"), Error("Date input field year was not found in " + B.env.b_action + " action");
}, 0)), 0 === this.$inputMonth.length && (t = e.month || "", this.$inputMonth = this.createDateInputField(this.options.modelMode + "_month", t).appendTo(this.el), setTimeout(function() {
throw _i_("4ab:1e62334d"), Error("Date input field month was not found in " + B.env.b_action + " action");
}, 0)), 0 === this.$inputDay.length && (t = e.day || "", this.$inputDay = this.createDateInputField(this.options.modelMode + "_monthday", t).appendTo(this.el), setTimeout(function() {
throw _i_("4ab:e1a1e0b8"), Error("Date input field day was not found in " + B.env.b_action + " action");
}, 0))), _r_();
},
createDateInputField:function(e, t) {
return _i_("4ab:99d37a75"), _r_($("<input>").attr({
type:"hidden",
name:e,
value:t
}).val(t));
},
initModel:function() {
_i_("4ab:4e748ee9");
var e = !1, t = this.$inputYear.val(), i = this.$inputMonth.val(), n = this.$inputDay.val();
t && i && n ? (e = this.model.dates.initDate(this.options.modelMode, {
year:+t,
month:+i - 1,
day:+n
}), this.$field.hasClass("-empty") && "index" === B.env.b_action && this.render()) :e = this.model.dates.initDate(this.options.modelMode, null), (!e || this.options.forceInitRender) && this.render(), _r_();
},
modelChange:function(e) {
if (_i_("4ab:94cc79f8"), "dates" !== e.group || !e[this.options.modelMode]) return _r_();
this.render(), _r_();
},
controlsMouseDown:function(e) {
_i_("4ab:56a16f95"), this.inputBlurPrevented = !0, setTimeout(function() {
_i_("4ab:96f15264"), this.inputBlurPrevented = !1, _r_();
}.bind(this)), _r_();
},
inputFocus:function(e) {
_i_("4ab:a58647e4"), clearTimeout(this.inputBlurTimer), this.state.editing = !0, this.state.currentField = e.target.getAttribute("data-input-fragment"), this.startEditing(), this.updateFocusClass(), _r_();
},
inputFocusTrack:function() {
_i_("4ab:7986bd2d"), _.trackEvent(_.SearchBoxTracker, "Keyboard Focus", this.options.modelMode + " field"), _r_();
},
inputBlur:function(e) {
_i_("4ab:f8108e6d");
var t = e.target, i = t.getAttribute("data-input-fragment");
this.inputBlurPrevented || (this.state.editing = !1, this.state.currentField = null), this.setDateFragment(i, t.value), this.inputBlurTimer = setTimeout(function() {
_i_("4ab:39a28af8"), this.apply(), this.updateFocusClass(), _r_();
}.bind(this)), _r_();
},
inputKeyDown:function(e) {
_i_("4ab:edca6e04");
var t = e.target, i = t.getAttribute("data-input-fragment");
if (r.isModifier(e.which)) return _r_();
r.isUpArrow(e.which) ? (this.adjustDateFragment(i, t.value, 1), e.preventDefault()) :r.isDownArrow(e.which) ? (this.adjustDateFragment(i, t.value, -1), e.preventDefault()) :r.isLeftArrow(e.which) || r.isBackspace(e.which) ? this.inputMoveAdjacent(e, -1, {
backspace:r.isBackspace(e.which)
}) :r.isRightArrow(e.which) && this.inputMoveAdjacent(e, 1), _r_();
},
inputKeyUp:function(e) {
_i_("4ab:1328b311");
var t = e.target;
if (r.isModifier(e.which)) return _r_();
!r.isNavigation(e.which) && !r.isDeletion(e.which) && t.value.length >= Math.floor(t.getAttribute("maxlength")) && this.inputMoveAdjacent(e, 1, {
automatic:!0
}), _r_();
},
inputMoveAdjacent:function(e, t, i) {
_i_("4ab:eab99f25");
var a, s, r = e.target, o = this.$inputs.length, _ = n.getPosition(r), l = 0, d = this.$inputs.filter(r).index(), h = o - 1, i = i || {};
if (t > 0 && (l = r.value.length, h = 0), i.automatic && d == o - 1) return _r_();
if (!i.force && n.getSelectionLength(r)) return _r_();
(i.force || _ == l) && (d += t, (0 > d || d > o - 1) && (d = h), a = this.$inputs.get(d), i.automatic && a.value.length ? a.select() :(s = t > 0 ? 0 :a.value.length, n.setPosition(a, s), i.backspace || e.preventDefault())), _r_();
},
inputKeyPress:function(e) {
_i_("4ab:518cd65b"), e.keyCode && r.isNavigation(e.keyCode) || !(e.which < 48 || e.which > 57) || (this.inputMoveAdjacent(e, 1, {
automatic:!0,
force:!0
}), e.preventDefault()), _r_();
},
startEditing:function() {
_i_("4ab:84307c20"), setTimeout(function() {
_i_("4ab:71b9ac58"), this.model.dates.startEditing(), _r_();
}.bind(this)), this.render(), _r_();
},
setDateFragment:function(e, t) {
_i_("4ab:9cb37549"), t = "" === t ? null :+t, "month" === e && null !== t && (t -= 1), this.model.dates.setEditingFragment(this.options.modelMode, e, t), _r_();
},
adjustDateFragment:function(e, t, i) {
_i_("4ab:51010f90"), t = "" === t ? 0 :+t, "month" === e && (t -= 1), this.model.dates.adjustEditingFragment(this.options.modelMode, e, t, i), _r_();
},
apply:function() {
_i_("4ab:01d1593e"), this.model.dates.applyEditing(this.options.modelMode), _r_();
},
render:function() {
_i_("4ab:beff2832");
var e = this.$field.hasClass("-editing"), t = this.model.dates.get(), i = this.$inputYear.val(), n = this.$inputMonth.val(), a = this.$inputDay.val(), r = t[this.options.modelMode], o = t["editing_" + this.options.modelMode] || {}, _ = o.year, l = o.month, d = o.day, h = "date_with_weekday";
i = "" === i ? null :+i, n = "" === n ? null :+n, a = "" === a ? null :+a, _ = "number" == typeof _ ? _ :null, l = "number" == typeof l ? l + 1 :null, d = "number" == typeof d ? d :null, e != this.state.editing && (e = this.state.editing, this.$field.toggleClass("-editing", e)), i !== _ && (this.$inputYear.val(_), "year" === this.state.currentField && this.$inputYear.select()), n !== l && (this.$inputMonth.val(l), "month" === this.state.currentField && this.$inputMonth.select()), a !== d && (this.$inputDay.val(d), "day" === this.state.currentField && this.$inputDay.select()), e || r || (this.$field.addClass("-empty"), this.$display.html(this.$display.attr("data-placeholder")), this.$iconDay.html(this.$iconDay.attr("data-placeholder"))), !e && r && (this.$field.removeClass("-empty"), h = this.$display.data("date-format") || h, this.$display.html(s.format(r, h)), this.$iconDay.html(s.format(r, "{day_of_month}"))), _r_();
},
updateFocusClass:function() {
_i_("4ab:baacc28f"), setTimeout(function() {
_i_("4ab:06d1adfc");
var e = this.$el.parent(), t = this.state.editing, i = !e.hasClass("c2-wrapper-s-hidden");
t || i ? this.$el.addClass("-focus") :this.$el.removeClass("-focus"), _r_();
}.bind(this), 100), _r_();
}
}), _r_();
}), B.define("search/dates/util", function(e, t, i) {
_i_("4ab:c1df00dd"), i.exports = {
formatDate:function(e) {
_i_("4ab:d9bc22d0");
var t = new Date(e), i = "" + (t.getMonth() + 1), n = "" + t.getDate(), a = t.getFullYear();
return i.length < 2 && (i = "0" + i), n.length < 2 && (n = "0" + n), _r_([ a, i, n ].join("-"));
},
addDay:function(e) {
_i_("4ab:52a53234");
var t = new Date(e);
return t.setDate(t.getDate() + 1), _r_(t);
},
substractDay:function(e) {
_i_("4ab:ff921332");
var t = new Date(e);
return t.setDate(t.getDate() - 1), _r_(t);
},
daysBetween:function(e, t) {
_i_("4ab:c4830dfc"), e = new Date(e), t = new Date(t);
var i = 864e5, n = e.getTime(), a = t.getTime(), s = Math.abs(n - a);
return _r_(Math.round(s / i));
}
}, _r_();
}), B.define("component/search/dates/dates-errors", function(e, t, i) {
"use strict";
_i_("4ab:17a69455");
var n = e("component"), a = e("jstmpl"), s = e("read-data-options"), r = e("search/searchbox/model");
i.exports = n.extend({
init:function() {
_i_("4ab:9c2990e4"), this.options = s(this.el, {
modelId:{
name:"sb-id",
type:String,
required:!0
}
}), this.model = r.getInstance(this.options.modelId), this.model.use("dates"), this.model.on("validation", this.modelValidation.bind(this)), this.template = a("fe_search_dates_errors"), _r_();
},
modelValidation:function(e) {
if (_i_("4ab:bcf03923"), "dates" !== e.group) return _r_();
var t = s(this.el, {
viewId:{
name:"view-id",
type:String,
defaultValue:""
}
});
e.valid ? this.$el.html("") :this.$el.html(this.template.render({
fe_error:e.validationError,
fe_new:!0,
fe_view:t.viewId
})), _r_();
}
}), _r_();
}), booking.jstmpl("search_dates_length_of_stay", function() {
_i_("4ab:d04e5c1f");
var e, t = [ "\n		", "\n\n", "\n\n    ", "\n        ", "\n    ", '\n\n    <div\n      class="sb-dates__los\n      ', " sb-dates__los--bold\n      ", '\n      ">\n\n      \n      ', '\n          <i class="bicon bicon-halfmoon sb_dates__los__icon"></i>\n          <span class="sb-dates__los__text">\n      ', "\n\n        ", "\n          ", "/private/bh_gf_sbox_general_dates_num_nights_1/name", "/private/sbox_general_dates_num_nights_1/name", "\n      ", "\n         </span>\n      ", "\n    </div>\n", '\n    <div class="sb-dates--los-placeholder"></div>\n', "\n" ], i = [ "b_action", "fe_sb_los_bold", "fe_sb_state_length_of_stay", "fe_is_family", "b_search_config" ];
return _r_(function(n) {
_i_("4ab:2d0acf81");
var a = "", s = this.fn;
function r(a) {
return _i_("4ab:d7c182f9"), a += t[1], s.MJ(s.MB(i[2])) ? (a += t[2], s.MJ(s.MB(i[1]) + "" == "") && (a += t[3], s.MN("fe_sb_los_bold", s.MJ(s.MC(i[0]) + "" == "hotel") && s.track_experiment("AEJPOTIKSBOEQC")), a += t[4]), a += t[5], s.MD(i[1]) && (a += t[6]), a += t[7], s.MD(i[1]) && (a += t[8]), a += t[9], a += s.MJ(s.MB(i[3])) || s.MJ(s.MC(i[4])) && s.MJ(s.MC(i[4]).b_children_total) ? [ t[10], (n.unshift({
num_nights:s.MB(i[2])
}), e = s.ME(t[11], s.MB, s.MN, s.MO(s.MC(i[2]), null, t[11])), n.shift(), e), t[3] ].join("") :[ t[10], (n.unshift({
num_nights:s.MB(i[2])
}), e = s.ME(t[12], s.MB, s.MN, s.MO(s.MC(i[2]), null, t[12])), n.shift(), e), t[3] ].join(""), a += t[13], s.MD(i[1]) && (a += t[14]), a += t[15]) :a += t[16], a += t[17], _r_(a);
}
return a += t[0], a = r(a), a += t[4], _r_(a);
});
}()), B.define("component/search/dates/length-of-stay", function(e, t, i) {
_i_("4ab:b6b16338");
var n = e("calendar-base").Calendar, a = e("component"), s = e("read-data-options"), r = e("search/searchbox/model");
i.exports = a.extend({
init:function() {
_i_("4ab:f93f1ef5"), this.options = s(this.$el, {
modelId:{
name:"sb-id",
type:String,
required:!0
},
isAvailability:{
name:"is-availability",
type:Boolean
}
}), this.model = r.getInstance(this.options.modelId), this.model.use("dates"), this.model.use("group"), this.model.on("change", this.modelChange.bind(this)), this.state = {};
var e = "hotel" === B.env.b_action && B.et.track("AEJPOTIKSBOEQC");
e && (this.state.fe_sb_los_bold = 1), this.template = B.jstmpl("search_dates_length_of_stay"), _r_();
},
modelChange:function(e) {
if (_i_("4ab:ae188229"), !e || "dates" != e.group && "group" != e.group) return _r_();
this.render(), _r_();
},
render:function() {
_i_("4ab:f1fa6e6e");
var e = this.model.dates.get(), t = this.model.group.get();
this.state.fe_is_family = t.children_ages && t.children_ages.length > 0 ? 1 :0, this.state.fe_is_availability = this.options.isAvailability, this.state.fe_sb_state_length_of_stay = !e.editing && e.checkin && e.checkout && n.diff(e.checkout, e.checkin) > 0 ? n.interval(e.checkin, e.checkout) - 1 :"", this.$el.html(this.template.render(this.state)), _r_();
}
}), _r_();
}), B.define("search/dates/model", function(e, t, i) {
"use strict";
_i_("4ab:04aba521");
var n = e("calendar-base").Calendar, a = e("search/modules/search-date").SearchDate, s = B.env.b_timestamp, r = B.env.sunday_first, o = B.env.b_search_max_months || 13;
function _(e) {
_i_("4ab:37a8ab27"), this._model = e, this._data = {
initialized:!1,
checkin:null,
checkinTime:null,
checkout:null,
checkoutTime:null,
firstValidDay:null,
lastValidDay:null,
editing:!1,
editing_checkin:null,
editing_checkout:null,
length_of_stay:null,
week_start:r ? 0 :1
}, this._valid = !0, this._validationError = "", this._options = {
maxLos:30,
maxMonths:o,
syncLegacy:!0,
allowZeroLos:!1
};
var t = new Date(1e3 * (s - 39600));
this._data.firstValidDay = a.create({
year:t.getUTCFullYear(),
month:t.getUTCMonth(),
day:t.getUTCDate()
}), this._data.lastValidDay = a.createFlexible({
year:t.getUTCFullYear(),
month:t.getUTCMonth() + this._options.maxMonths,
day:0
}), this._data.firstValidCheckoutDay = a.create({
year:t.getUTCFullYear(),
month:t.getUTCMonth(),
day:t.getUTCDate() + 1
}), this._options.syncLegacy && (this.boundLegacyDateChange = this.legacyDateChange.bind(this), B.eventEmitter.on(B.Search.Events.DATE_CHANGED, this.boundLegacyDateChange)), _r_();
}
$.extend(_.prototype, {
init:function(e) {
_i_("4ab:53c0dd77");
var t = a.create(e.checkin), i = a.create(e.checkout);
this.validateDate("checkin", t).valid && this.validateDate("checkout", i, {
checkin:t
}).valid && (this.setDate("checkin", t, {
init:!0
}), this.setDate("checkout", i, {
init:!0
}), this.emit("init")), _r_();
},
configure:function(e, t) {
_i_("4ab:4a2cc427");
var i = this._options.maxMonths, n = this._options.syncLegacy;
void 0 !== t ? this._options[e] = t :"object" == typeof e && $.extend(this._options, e), i != this._options.maxMonths && (this._data.lastValidDay = a.createFlexible({
year:this._data.firstValidDay.year,
month:this._data.firstValidDay.month + this._options.maxMonths,
day:0
})), n !== this._options.syncLegacy && B.eventEmitter[this._options.syncLegacy ? "on" :"off"](B.Search.Events.DATE_CHANGED, this.boundLegacyDateChange), _r_();
},
getOption:function(e) {
return _i_("4ab:4efe52f0"), _r_(this._options[e]);
},
get:function() {
return _i_("4ab:e34c03cf"), _r_(this._data);
},
initDate:function(e, t, i) {
_i_("4ab:e6239d59"), i = i || {}, i.init = !0;
var n = !1;
if (this._data.initialized) return _r_(!1);
return t && (n = this.setDate(e, t, i)), this._data[e + "Time"] = {
hours:10,
minutes:0
}, this["initialized" + e] = !0, this.initializedcheckin && this.initializedcheckout && (this.emit("init"), this._data.initialized = !0), _r_(n);
},
setDate:function(e, t, i) {
_i_("4ab:b21c8d26"), i = i || {};
var s, r, o, _ = {};
if (t = a.create(t), !this._options.noValidation && !this.validateDate(e, t, {
loose:!0
}).valid) return _r_(!1);
if ("checkin" == e) this._data.checkin = t, r = !0, a.compare(this._data.checkin, this._data.firstValidDay) < 0 && (this._data.checkin = a.create(this._data.firstValidDay)), a.compare(this._data.checkin, this._data.lastValidDay) > 0 && (this._data.checkin = a.createFlexible({
year:this._data.lastValidDay.year,
month:this._data.lastValidDay.month,
day:this._data.lastValidDay.day - 1
})), this._data.checkout ? (s = n.diff(this._data.checkout, t), 0 >= s ? (this._data.checkout = a.createFlexible({
year:t.year,
month:t.month,
day:t.day + 1
}), o = !0) :!this._options.allowMaxLos && s > this._options.maxLos && (this._data.checkout = a.createFlexible({
year:t.year,
month:t.month,
day:t.day + this._options.maxLos
}), o = !0)) :(this._data.checkout = a.createFlexible({
year:t.year,
month:t.month,
day:t.day + 1
}), o = !0); else {
if ("checkout" != e) return _r_(!1);
var l;
this._data.checkout = t, o = !0, a.compare(this._data.checkout, this._data.lastValidDay) > 0 && (this._data.checkout = a.create(this._data.lastValidDay)), 0 == a.compare(this._data.checkout, this._data.firstValidDay) && (l = this._options.allowZeroLos ? 0 :1, this._data.checkin = a.create(this._data.firstValidDay), this._data.checkout = a.createFlexible({
year:this._data.firstValidDay.year,
month:this._data.firstValidDay.month,
day:this._data.firstValidDay.day + l
}), o = !0), this._data.checkin && (s = n.diff(t, this._data.checkin), 0 >= s && (this._data.checkin = null)), this._data.checkin || (l = this._options.allowZeroLos ? 0 :1, this._data.checkin = a.createFlexible({
year:t.year,
month:t.month,
day:t.day - l
}), r = !0);
}
return r && (this._options.syncLegacy && B.search.setDate_("checkin", this._data.checkin.toString(), {
referrer:"search/dates/model"
}), this._data.editing_checkin = this._data.checkin, _.checkin = !0), o && (this._options.syncLegacy && B.search.setDate_("checkout", this._data.checkout.toString(), {
referrer:"search/dates/model"
}), this._data.editing_checkout = this._data.checkout, _.checkout = !0), (r || o) && (this._data.length_of_stay = this._data.checkin && this._data.checkout && n.interval(this._data.checkin, this._data.checkout) - 1), this._data.editing = !1, i.init || this.emit("change", _), _r_(!0);
},
startEditing:function() {
if (_i_("4ab:f1d3385b"), this._data.editing) return _r_();
this._data.editing = !0, this.emit("change", {
editing:!0
}), _r_();
},
setEditingFragment:function(e, t, i) {
if (_i_("4ab:a49bffb1"), "checkin" !== e && "checkout" !== e) throw new TypeError("invalid type");
if ("day" !== t && "month" !== t && "year" !== t) throw new TypeError("invalid fragment");
if ("number" != typeof i && null !== i) throw new TypeError("invalid value");
var n = this._data["editing_" + e] || {}, s = {
year:n.year,
month:n.month,
day:n.day
}, r = {
editing:!0
};
return s[t] = i, this._data.editing = !0, this._data["editing_" + e] = a.create(s), r[e] = !0, this.emit("change", r), _r_(!0);
},
adjustEditingFragment:function(e, t, i, n) {
if (_i_("4ab:757cccbf"), "checkin" !== e && "checkout" !== e) throw new TypeError("invalid type");
if ("day" !== t && "month" !== t && "year" !== t) throw new TypeError("invalid fragment");
var a = 1, s = i + n;
return "month" == t ? a = 0 :"year" == t && (a = this._data.firstValidDay.year), a > s && (s = a), _r_(this.setEditingFragment(e, t, s));
},
applyEditing:function(e) {
if (_i_("4ab:710382f5"), "checkin" !== e && "checkout" !== e) throw new TypeError("invalid type");
return this._data["editing_" + e].complete ? _r_(this.setDate(e, this._data["editing_" + e])) :(this.clearDates(), _r_(!0));
},
clearDates:function() {
_i_("4ab:e1109c2d"), this._data.checkin = null, this._data.checkout = null, this._data.editing = !1, this._data.editing_checkin = null, this._data.editing_checkout = null, this._data.length_of_stay = null, this._options.syncLegacy && (B.search.setDate_("checkin", "", {
referrer:"search/dates/model"
}), B.search.setDate_("checkout", "", {
referrer:"search/dates/model"
})), this.emit("change", {
checkin:!0,
checkout:!0
}), _r_();
},
validate:function(e) {
_i_("4ab:f36a21e9"), e = e || {};
var t = !0, i = "";
if (!t || !e.notEmpty || this._data.checkin && this._data.checkout || (t = !1, i = "missing-dates"), t && !this._data.checkin && this._data.checkout && (t = !1, i = "missing-checkin"), t && this._data.checkin && !this._data.checkout && (t = !1, i = "missing-checkout"), t && this._data.checkin) {
var n = this.validateDate("checkin", this._data.checkin);
n.valid || (t = n.valid, i = n.validationError);
}
if (t && this._data.checkout) {
var n = this.validateDate("checkout", this._data.checkout);
n.valid || (t = n.valid, i = n.validationError);
}
if (t && e.validateTime) {
var a = new Date(1e3 * B.env.b_timestamp), s = a.getUTCDate(), r = a.getUTCMonth(), o = a.getUTCFullYear(), _ = a.getHours() + 2;
(!this._data.checkin || this._data.checkin.year === o && this._data.checkin.month === r && this._data.checkin.day == s) && this._data.checkinTime <= _ && (t = !1, i = "past-time");
}
return e.checkOnly || this._valid == t || (this._valid = t, this._validationError = i, this.emit("validation", {
valid:t,
validationError:i
})), _r_(t);
},
validateDate:function(e, t, i) {
_i_("4ab:68e8eca5"), i = i || {}, i.checkin = i.checkin || this._data.checkin;
var s = null;
if (!e || "checkin" != e && "checkout" != e) return _r_({
valid:!1,
validationError:"invalid-data"
});
if (!t || void 0 === t.year || void 0 === t.month || void 0 === t.day || isNaN(t.year) || isNaN(t.month) || isNaN(t.day)) return _r_({
valid:!1,
validationError:"invalid-data"
});
if ("checkin" == e && a.compare(t, this._data.firstValidDay) < 0 || "checkout" == e && 0 == a.compare(t, this._data.firstValidDay)) return _r_({
valid:!1,
validationError:"past"
});
if ("checkout" == e && i.checkin && (s = n.diff(t, i.checkin)), null !== s) {
if (0 == s && !this._options.allowZeroLos) return _r_({
valid:!1,
validationError:"more-than-one-day"
});
if (0 > s) return _r_({
valid:!1,
validationError:"negative-period"
});
if (s > this._options.maxLos) return _r_({
valid:!1,
validationError:"exceeds-max-los"
});
}
return _r_({
valid:!0,
validationError:""
});
},
legacyDateChange:function(e, t) {
_i_("4ab:7a3351a7");
var i, n;
if ("search/dates/model" == t.referrer) return _r_();
i = "checkin" == t.type ? "checkin" :"checkout", n = a.createFromString(t.value.toString()), this.setDate(i, n), _r_();
},
emit:function(e, t) {
_i_("4ab:96b54781"), t = t || {}, this._model.emit(e, $.extend(t, {
group:"dates"
})), _r_();
},
getFallbackDates:function(e) {
_i_("4ab:1b596316");
var t, i;
return i = "checkin" === e ? B.env.b_checkin_date :B.env.b_checkout_date, i && (i = i.split("-"), t = {
year:parseInt(i[2], 10),
month:parseInt(i[1], 10),
day:parseInt(i[0], 10)
}), _r_(t || {});
}
}), i.exports = _, _r_();
}), booking.jstmpl("fe_search_dates_errors", function() {
_i_("4ab:190e77ec");
var e = [ "\n	", "\n\n		", "\n			", "\n				", "/error/checkout_date_invalid/name", "/error/checkin_date_invalid/name", "/private/sbox_error_checkin_future/name", "/error/checkin_date_to_far_in_the_future/name", "/private/sbox_error_checkout_after/name", "/private/sbox_error_30_night_res/name", "\n		", "\n					", "/private/iq_sbox_error_flights_return_date_invalid/name", "/private/iq_sbox_error_flights_departure_date_invalid/name", "/private/iq_sbox_error_dates/name", "/private/iq_sbox_error_flights_departure_date_too_far_future/name", "/private/iq_sbox_error_flights_return_after_departure/name", "\n	\n		", "/private/iq_sbox_error_cars_arrival_date_invalid/name", "/private/iq_sbox_error_cars_departure_date_invalid/name", "/private/iq_sbox_error_cars_departure_date_too_far_future/name", "/private/iq_sbox_error_cars_arrival_after_departure/name", "/private/iq_sbox_error_cars_1_hour_future/name", "\n\n\n\n\n\n", "\n\n    ", "\n        ", "data-", '="', '"', "\n    ", " data-", '<div data-component="onview-animate" data-anim-type="fadeInBottom"> ', '<div class="fe_banner ', "fe_banner__scale_small ", "fe_banner__w-icon ", "fe_banner__w-dismiss ", "fe_banner__", " ", "fe_banner__w-icon-", "fe_banner__bp fe_banner__inherit_font_size ", ' " ', 'id="', '" ', 'role="alert"', "> ", '<i class="fe_banner__icon ', '" aria-hidden="true"></i> ', '<img class="fe_banner__icon" src="', '"> ', '<span class="fe_banner__icon"> ', " </span> ", '<div class="fe_banner__btn_container"> <div class="fe_banner__btn_container_content"> ', '<h3 class="fe_banner__title"> ', " </h3> ", '<div class="fe_banner__message ', "fe_banner__genius-trial", " </div> ", '</div> <div class="fe_banner__button"> ', "</div> ", '<span class="fe_banner__dismiss js-close"><i class="bicon-btnclose" aria-label="close"></i></span> ', '<form action="', "/genius_activate_trial", '" class="fe_banner__genius-banner-form" method="post"> <input type="hidden" name="return_url" value="', '"> <input type="hidden" name="src" value="hp_banner"> <input type="hidden" name="campaign_id" value="', '"> <input type="submit" class="button fe_banner__genius-banner-button" value="', '"> </form> ', "\n", "\n\n\n\n", "\n\n", "0", "red" ], t = [ "fe_error_message", "fe_error", "s_raw_param_errorc_checkout_date_invalid", "s_raw_param_errorc_checkin_date_invalid", "s_raw_param_errorc_checkin_date_in_the_past", "s_raw_param_errorc_checkin_date_to_far_in_the_future", "s_raw_param_errorc_checkout_date_not_after_checkin_date", "s_raw_param_errorc_checkout_date_more_than_30_days_after_checkin", "fe_view", "fe_banner__data", "fe_banner__data_id", "fe_banner__data_value", "fe_banner__data_id_2", "fe_banner__data_value_2", "fe_banner__data_id_3", "fe_banner__data_value_3", "fe_banner__data_id_4", "fe_banner__data_value_4", "fe_banner__data_id_5", "fe_banner__data_value_5", "fe_banner__animate", "fe_banner__scale", "fe_banner__icon_class", "fe_banner__icon_img_url", "fe_banner__icon_svg", "fe_banner__close_button", "fe_banner__color_scheme", "fe_banner__color_scheme_classes", "fe_banner__icon_size", "b_action", "fe_banner__extra_classes", "fe_banner__id", "fe_banner__aria_alert", "fe_banner__btn_include", "fe_banner__title_text", "fe_banner__start_genius_trial", "fe_banner__message_text", "b_secure_hostname", "b_query_params_with_lang", "b_original_url", "fe_ge_trial_desktop_campaign_id", "ge_expand_hp_trial_sidebar_cta", "fe_banner__banners_count" ];
return _r_(function(i) {
_i_("4ab:63ae98c9");
var n = "", a = this.fn;
function s(n) {
if (_i_("4ab:fb1be2ce"), a.MJ(a.MB(t[1])) || a.MJ(a.MC(t[2])) || a.MJ(a.MC(t[3])) || a.MJ(a.MC(t[4])) || a.MJ(a.MC(t[5])) || a.MJ(a.MC(t[6])) || a.MJ(a.MC(t[7]))) {
n += e[1];
var s = "";
if (s += e[2], a.MJ(a.MB(t[1]) + "" == "missing-checkout") || a.MJ(a.MC(t[2])) ? s += [ e[3], a.ME(e[4], a.MB, a.MN, null), e[2] ].join("") :a.MJ(a.MB(t[1]) + "" == "missing-checkin") || a.MJ(a.MC(t[3])) ? s += [ e[3], a.ME(e[5], a.MB, a.MN, null), e[2] ].join("") :a.MJ(a.MB(t[1]) + "" == "past") || a.MJ(a.MC(t[4])) ? s += [ e[3], a.ME(e[6], a.MB, a.MN, null), e[2] ].join("") :a.MJ(a.MB(t[1]) + "" == "checkin_date_to_far_in_the_future") || a.MJ(a.MC(t[5])) ? s += [ e[3], a.ME(e[7], a.MB, a.MN, null), e[2] ].join("") :a.MJ(a.MB(t[1]) + "" == "negative-period") || a.MJ(a.MC(t[6])) ? s += [ e[3], a.ME(e[8], a.MB, a.MN, null), e[2] ].join("") :a.MJ(a.MB(t[1]) + "" == "exceeds-max-los") || a.MJ(a.MC(t[7])) ? s += [ e[3], a.ME(e[9], a.MB, a.MN, null), e[2] ].join("") :a.MJ(a.MB(t[1])) && (s += [ e[3], a.ME(e[5], a.MB, a.MN, null), e[2] ].join("")), s += e[10], a.MN(t[0], s), n += e[1], a.MJ(a.MB(t[8]) + "" == "flights")) {
n += e[2];
var s = "";
s += e[3], a.MJ(a.MB(t[1]) + "" == "missing-checkout") ? s += [ e[11], a.ME(e[12], a.MB, a.MN, null), e[3] ].join("") :a.MJ(a.MB(t[1]) + "" == "missing-checkin") ? s += [ e[11], a.ME(e[13], a.MB, a.MN, null), e[3] ].join("") :a.MJ(a.MB(t[1]) + "" == "past") ? s += [ e[11], a.ME(e[14], a.MB, a.MN, null), e[3] ].join("") :a.MJ(a.MB(t[1]) + "" == "checkin_date_to_far_in_the_future") ? s += [ e[11], a.ME(e[15], a.MB, a.MN, null), e[3] ].join("") :a.MJ(a.MB(t[1]) + "" == "negative-period") ? s += [ e[11], a.ME(e[16], a.MB, a.MN, null), e[3] ].join("") :a.MJ(a.MB(t[1]) + "" == "missing-dates") ? s += [ e[11], a.ME(e[13], a.MB, a.MN, null), e[3] ].join("") :a.MJ(a.MB(t[1])) && (s += [ e[11], a.ME(e[13], a.MB, a.MN, null), e[3] ].join("")), s += e[2], a.MN(t[0], s), n += e[10];
}
if (n += e[17], a.MJ(a.MB(t[8]) + "" == "rentalcars")) {
n += e[2];
var s = "";
s += e[3], a.MJ(a.MB(t[1]) + "" == "missing-checkout") ? s += [ e[11], a.ME(e[18], a.MB, a.MN, null), e[3] ].join("") :a.MJ(a.MB(t[1]) + "" == "missing-checkin") ? s += [ e[11], a.ME(e[19], a.MB, a.MN, null), e[3] ].join("") :a.MJ(a.MB(t[1]) + "" == "past") ? s += [ e[11], a.ME(e[14], a.MB, a.MN, null), e[3] ].join("") :a.MJ(a.MB(t[1]) + "" == "checkin_date_to_far_in_the_future") ? s += [ e[11], a.ME(e[20], a.MB, a.MN, null), e[3] ].join("") :a.MJ(a.MB(t[1]) + "" == "negative-period") ? s += [ e[3], a.ME(e[21], a.MB, a.MN, null), e[3] ].join("") :a.MJ(a.MB(t[1]) + "" == "missing-dates") ? s += [ e[11], a.ME(e[19], a.MB, a.MN, null), e[3] ].join("") :a.MJ(a.MB(t[1]) + "" == "past-time") ? s += [ e[11], a.ME(e[22], a.MB, a.MN, null), e[3] ].join("") :a.MJ(a.MB(t[1])) && (s += [ e[11], a.ME(e[19], a.MB, a.MN, null), e[3] ].join("")), s += e[2], a.MN(t[0], s), n += e[10];
}
n += e[1], i.unshift({
fe_banner__close_button:e[69],
fe_banner__color_scheme:e[70],
fe_banner__message_text:a.MB(t[0])
}), n = r(n), i.shift(), n += e[68];
}
return n += e[66], _r_(n);
}
function r(i) {
if (_i_("4ab:a8b4588d"), i += e[23], a.MD(t[36])) {
i += e[24], a.MD(t[10]) && (i += e[25], a.MN(t[9], [ e[26], a.MB(t[10]), e[27], a.MB(t[11]), e[28] ].join("")), i += e[29]), i += e[24], a.MD(t[12]) && (i += e[25], a.MN(t[9], [ a.MB(t[9]), e[30], a.MB(t[12]), e[27], a.MB(t[13]), e[28] ].join("")), i += e[29]), i += e[24], a.MD(t[14]) && (i += e[25], a.MN(t[9], [ a.MB(t[9]), e[30], a.MB(t[14]), e[27], a.MB(t[15]), e[28] ].join("")), i += e[29]), i += e[24], a.MD(t[16]) && (i += e[25], a.MN(t[9], [ a.MB(t[9]), e[30], a.MB(t[16]), e[27], a.MB(t[17]), e[28] ].join("")), i += e[29]), i += e[24], a.MD(t[18]) && (i += e[25], a.MN(t[9], [ a.MB(t[9]), e[30], a.MB(t[18]), e[27], a.MB(t[19]), e[28] ].join("")), i += e[29]), i += e[24], a.MD(t[20]) && (i += e[31]), i += e[32];
var n = a.MB(t[21]);
a.MJ(n + "" == "small") && (i += e[33]), (a.MJ(a.MB(t[22])) || a.MJ(a.MB(t[23])) || a.MJ(a.MB(t[24]))) && (i += e[34]), a.MD(t[25]) && (i += e[35]), a.MJ(a.MB(t[26])) && (i += [ e[36], a.MC(t[26]), a.MC(t[27]), e[37] ].join("")), a.MJ(a.MB(t[22])) && a.MJ(a.MB(t[28])) && (i += [ e[38], a.MC(t[28]), e[37] ].join("")), a.MJ(a.MC(t[29]) + "" == "book") && (i += e[39]), i += [ a.MC(t[30]), e[40] ].join(""), a.MD(t[31]) && (i += [ e[41], a.MC(t[31]), e[42] ].join("")), a.MD(t[9]) && (i += [ a.MC(t[9]), e[37] ].join("")), a.MD(t[32]) && (i += e[43]), i += e[44], a.MD(t[22]) ? i += [ e[45], a.MC(t[22]), e[46] ].join("") :a.MD(t[23]) ? i += [ e[47], a.MC(t[23]), e[48] ].join("") :a.MD(t[24]) && (i += [ e[49], a.MC(t[24]), e[50] ].join("")), a.MD(t[33]) && (i += e[51]), a.MD(t[34]) && (i += [ e[52], a.MC(t[34]), e[53] ].join("")), a.MD(t[36]) && (i += e[54], a.MD(t[35]) && (i += e[55]), i += [ e[48], a.MC(t[36]), e[56] ].join("")), a.MD(t[33]) && (i += [ e[57], a.MC(t[33]), e[56] ].join("")), a.MD(t[33]) && (i += e[58]), a.MD(t[25]) && (i += e[59]), a.MD(t[35]) && (i += [ e[60], a.MC(t[37]), e[61], a.MC(t[38]), e[62], a.MC(t[39]), e[63], a.MB(t[40]), e[64], a.MB(t[41]), e[65] ].join("")), i += e[58], a.MD(t[20]) && (i += e[58]), i += e[66];
}
return i += e[67], a.MN(t[26], void 0), i += e[66], a.MN(t[22], void 0), i += e[66], a.MN(t[23], void 0), i += e[66], a.MN(t[24], void 0), i += e[66], a.MN(t[28], void 0), i += e[66], a.MN(t[34], void 0), i += e[66], a.MN(t[36], void 0), i += e[66], a.MN(t[33], void 0), i += e[66], a.MN(t[25], void 0), i += e[66], a.MN(t[31], void 0), i += e[66], a.MN(t[30], void 0), i += e[66], a.MN(t[21], void 0), i += e[68], a.MN(t[10], void 0), i += e[66], a.MN(t[11], void 0), i += e[66], a.MN(t[12], void 0), i += e[66], a.MN(t[13], void 0), i += e[66], a.MN(t[14], void 0), i += e[66], a.MN(t[15], void 0), i += e[66], a.MN(t[16], void 0), i += e[66], a.MN(t[17], void 0), i += e[66], a.MN(t[18], void 0), i += e[66], a.MN(t[19], void 0), i += e[68], a.MN(t[27], void 0), i += e[68], a.MN(t[9], void 0), i += e[66], a.MN("fe_banner__banners_count", a.MI(a.MB(t[42])) + a.MI(1)), i += e[68], a.MJ(a.MC(t[29]) + "" == "book") && a.MJ(a.track_experiment_stage("bp_banner_module_normalize_banners", 2)) ? i += e[66] :a.MJ(a.track_experiment_stage("bp_banner_module_normalize_banners", 1)) && (i += e[66]), i += e[66], _r_(i);
}
return n += e[0], n = s(n), n += e[66], _r_(n);
});
}()), B.define("component/search/destination/country-only", function(e, t, i) {
"use strict";
_i_("4ab:584073f2");
var n = e("component"), a = e("search/searchbox/model"), s = e("read-data-options");
i.exports = n.extend({
init:function() {
_i_("4ab:fac5bb27"), this.options = s(this.$el, {
modelId:{
name:"sb-id",
type:String,
required:!0
}
}), this.model = a.getInstance(this.options.modelId), this.model.use("destination"), this.model.on("change", this.modelChange.bind(this)), this.$onlyCurrentCountry = this.$el.find("[data-input]"), this.$onlyCurrentCountry.bind("change", this.onlyCurrentCountryChange.bind(this)), this.modelInit(), _r_();
},
modelInit:function() {
_i_("4ab:a1ddd507");
var e = this.$onlyCurrentCountry.is(":checked");
this.model.destination.initOnlyCurrentCountry(e), _r_();
},
modelChange:function(e) {
if (_i_("4ab:3db4fcdf"), !e || !e.onlyCurrentCountry) return _r_();
var t = this.$onlyCurrentCountry.is(":checked"), i = this.model.destination.getOnlyCurrentCountry();
t != i && this.$onlyCurrentCountry.prop("checked", i), _r_();
},
onlyCurrentCountryChange:function() {
_i_("4ab:4751d78e"), this.model.destination.setOnlyCurrentCountry(this.$onlyCurrentCountry.is(":checked")), _r_();
}
}), _r_();
}), B.define("component/search/group/group", function(e, t, i) {
_i_("4ab:e0a8601b"), booking.jstmpl("search_group_group_html", function() {
_i_("4ab:a75826f3");
var e, t = [ "\n		", "\n\n\n\n\n", "\n", " \n\n\n\n", "\n    ", '\n        <div class="sb-searchbox-children-tooltip">\n            <span class="fly-dropdown-close fly-dropdown-close-icon"></span>\n            <h4 class="sb-searchbox-children-tooltip__title">', "/private/gs_index_model_header_family/name", '</h4>\n            <p class="sb-searchbox-children-tooltip__text">', "/private/gs_index_model_desc_family/name", "</p>\n        </div>\n    ", "\n\n\n", "\n\n", '\n\n\n\n<div class="u-clearfix" data-render>\n  ', '\n    <div class="sb-custom-wrapper"', ' data-et-click="customGoal:', ':3"', ">\n  ", "\n\n  ", "\n  ", '\n    <div class="sb-group__field sb-group__field-rooms">\n      ', '\n          <label class="sb-searchbox__label sb-group__field__label ', "-inline", " -small ", "no_rooms", '"\n             ', '\n                for="no_rooms_', '"\n              ', '\n               for="no_rooms"\n              ', "\n          >\n              ", "/private/sbox_rooms/name", "\n          </label>\n      ", "\n      ", '<div class="sb-custom-select">', '\n    <select name="no_rooms"\n        ', '\n            id="no_rooms_', '"\n            class="no_rooms"\n        ', '\n            id="no_rooms"\n        ', '\n        data-group-rooms-count\n        aria-label="', "/private/index_sbox_rooms_aria/name", '"\n    >\n        ', '\n            <option value="', '" ', 'selected="selected"', ">\n                ", "/private/search_box_room_filter/name", "\n            </option>\n        ", "\n    </select>\n    ", "</div>", "\n    </div>\n  ", '\n    <input type="hidden" name="no_rooms" value="', '">\n  ', "\n\n\n  ", '\n    <div class="sb-group__field">\n      ', "\n        ", "/private/sbox_adults/name", "/private/pex_flights_search_traveller_adult_age/name", '\n  <div class="bui-stepper" data-bui-component="InputStepper">\n    <div class="bui-stepper__title-wrapper">\n      <label class="bui-stepper__title" for="', '">', "</label>\n      ", '\n        <span class="bui-stepper__subtitle">', "</span>\n      ", '\n    </div>\n    <div class="bui-stepper__wrapper">\n      <input type="range" class="bui-stepper__input" data-bui-ref="input-stepper-field" id="', '" name="', '" min="', '" max="', '" value="', ' />\n      <button class="bui-button bui-button--secondary bui-stepper__subtract-button" data-bui-ref="input-stepper-subtract-button" type="button" aria-hidden="true" ', "disabled", '>\n        <span class="bui-button__text">-</span>\n      </button>\n      <span class="bui-stepper__display" data-bui-ref="input-stepper-value" aria-hidden="true">', '</span>\n      <button class="bui-button bui-button--secondary bui-stepper__add-button" data-bui-ref="input-stepper-add-button" type="button" aria-hidden="true" ', '>\n        <span class="bui-button__text">+</span>\n      </button>\n    </div>\n  </div>\n', "data-group-adults-count", "group_adults", "1", '\n        <label class="sb-searchbox__label sb-group__field__label ', "group_children", '"\n           ', '\n              for="group_adults_', '"\n            ', '\n             for="group_adults"\n            ', "\n         >\n          ", "/private/bbt_searchbox_travellers/name", "\n        </label>\n        ", '\n  <select\n    name="group_adults"\n    aria-label="', "/private/index_sbox_adults_aria/name", '"\n    ', '\n       id="group_adults_', '"\n       class="group_adults"\n    ', '\n       id="group_adults"\n    ', "\n    data-group-adults-count\n   >\n    ", '\n      <option value="', ">\n        ", "/private/search_box_adults_filter/name", "\n      </option>\n    ", "\n  </select>\n", '\n    <input type="hidden" name="group_adults" value="', '\n      <div class="sb-group__field sb-group-children ', "sb-group-children-universal", '">\n      ', "/private/sbox_children/name", "/private/pex_flights_search_traveller_children_age/name", "data-group-children-count", "0", '\n              for="group_children_', '\n             for="group_children"\n            ', "\n            >\n          ", '\n  <select\n    name="group_children"\n    aria-label="', "/private/index_sbox_children_aria/name", '\n        id="group_children_', '"\n        class="group_children"\n    ', '\n       id="group_children"\n    ', "\n    data-group-children-count ", 'data-component="search/group/children-ages-tooltip search/group/add-children-tooltip"\n    data-add-children-tooltip="', '"', "\n  >\n    ", "\n          ", "/private/search_box_no_children_filter_default/name", "/private/search_box_children_filter/name", "\n      \n      ", '\n      <div class="sb-group__children__field clearfix">\n        ', '\n        <label class="sb-searchbox__label -small sb-group__children__label">\n          ', "/private/sxp_index_sbox_horizontal_age_of_children_q/name", "/private/bh_gsb_search_box_checkout_age/name", "/private/bh_gsb_search_box_checkout_age_plural/name", "/private/loc_sbox_children_age_singular/name", "/private/loc_sbox_children_age_plural/name", "\n\n        ", '<div class="sb-group-children-age"><div class="sb-custom-select">', '\n    <select\n      name="age"\n      data-group-child-age="', '"\n      aria-label="', "/private/acc_index_child_age_screenread/name", '"\n    >\n      <option class="sb_child_ages_empty_zero" value="12 ">\n          ', "\n            ", "/private/sxp_index_sbox_horizontal_age_at_checkout/name", "/private/sxp_index_sbox_age_at_checkout/name", "\n      </option>\n      ", '\n        <option value="', ">\n            ", "\n                ", "/private/sxp_index_sbox_num_years_old/name", "/private/loc_counter_word_child_age_cjk/name", "\n        </option>\n      ", "</div></div>", "\n      </div>\n    ", ' \n    <div class="sb-group__field">\n      ', "/private/pex_flights_search_traveller_infants/name", "/private/pex_flights_search_traveller_babies_age/name", "data-group-infants-count", "group_infants", '\n                for="group_infants_', '\n                for="group_infants"\n              ', "\n           >\n            ", "\n          </label>\n        ", " \n  ", '\n    <select\n      name="group_infants"\n      ', '\n         id="group_infants_', '"\n         class="group_infants"\n      ', '\n         id="group_infants"\n      ', "\n      data-group-infants-count\n     >\n      ", ">\n          ", "\n    </select>\n  ", "\n\n</div>\n", "\n	" ], i = [ "fe_add_children_tooltip", "b_action", "b_search_config", "b_predicted_traveller_type", "fe_sb_universal_design", "fe_sb_group_block_labels", "fe_remove_duplicate_ids", "fe_sb_unique_id", "fe_sb_group_max_rooms", "fe_sb_state_number_of_rooms", "fe_sb_group_descriptive_dropdowns", "fe_sb_group_rooms_hide", "fe_sb_width", "fe_group_adults_title", "fe_group_adults_subtitle", "fe_bui_stepper_id", "fe_bui_stepper_title", "fe_bui_stepper_subtitle", "fe_bui_stepper_min", "fe_bui_stepper_max", "fe_bui_stepper_value", "fe_bui_stepper_additional_attrs", "fe_sb_group_max_adults", "fe_sb_state_number_of_adults", "fe_sb_group_use_bui_stepper", "fe_sb_group_use_adults_label", "fe_sb_group_adults_hide", "fe_sb_state_number_of_children", "fe_sb_state_rooms", "fe_sb_state_children_ages", "fe_sb_group_has_children", "fe_group_children_title", "fe_group_children_subtitle", "fe_sb_group_max_children", "fe_sb_xpi", "fe_sb_group_localized_short_date", "fe_sb_state_checkout", "fe_children_ages", "fe_child_i", "fe_sb_group_max_children_age", "b_lang_is_cjk", "fe_sb_group_children_hide", "fe_sb_group_children_ages_hide", "fe_group_infants_title", "fe_group_infants_subtitle", "fe_sb_group_max_infants", "fe_sb_state_number_of_infants", "fe_sb_group_infants_hide" ];
return _r_(function(n) {
_i_("4ab:ff95444e");
var a = "", s = this.fn;
function r(e) {
_i_("4ab:14a1bd59"), e += t[153], s.MD(i[4]) && (e += t[32]), e += t[154], e += s.MD(i[6]) ? [ t[155], s.MC(i[7]), t[156] ].join("") :t[157], e += t[158];
var a = s.seq(0, s.MB(i[45])) || [];
n.unshift({
i:null
});
for (var r, o = 1, _ = a.length; _ >= o; o++) n[0].i = r = a[o - 1], e += [ t[136], s.F.entities(r.value), t[41] ].join(""), s.MJ(s.MB(i[46]) == r.value) && (e += t[42]), e += [ t[159], r.value, t[141] ].join("");
return n.shift(), e += t[160], s.MD(i[4]) && (e += t[47]), e += t[2], _r_(e);
}
function o(a) {
_i_("4ab:79110cf2"), a += t[18];
var r = c, o = d, _ = u, l = h, d = s.MC(i[37]) || [];
n.unshift({
fe_child_age:null
});
for (var h, c = 1, u = d.length; u >= c; c++) {
n[0].fe_child_age = h = d[c - 1], a += t[18], s.MD(i[4]) && (a += t[127]), a += [ t[128], s.F.entities(s.MC(i[38])), t[129], (n.unshift({
child_number:s.MI(s.MB(i[38])) + s.MI(1)
}), e = s.ME(t[130], s.MB, s.MN, null), n.shift(), e), t[131] ].join(""), s.MD(i[34]) ? a += [ t[132], s.ME(t[133], s.MB, s.MN, null), t[115] ].join("") :s.MD(i[4]) && (a += [ t[132], s.ME(t[134], s.MB, s.MN, null), t[115] ].join("")), a += t[135];
var f = c, p = d, b = u, m = g, d = s.seq(0, s.MB(i[39])) || [];
n.unshift({
i:null
});
for (var g, c = 1, u = d.length; u >= c; c++) n[0].i = g = d[c - 1], a += [ t[136], s.F.entities(g.value), t[41] ].join(""), s.MJ(h + "" != "") && s.MJ(h + "" == "" + g.value) && (a += t[42]), a += t[137], s.MJ(s.MB(i[4])) || s.MJ(s.MB(i[34])) ? a += [ t[138], (n.unshift({
num_years:g.value
}), e = s.ME(t[139], s.MB, s.MN, s.MO(g.value, null, t[139])), n.shift(), e), t[132] ].join("") :(a += [ t[138], g.value ].join(""), s.MD(i[40]) && (a += s.ME(t[140], s.MB, s.MN, null)), a += t[132]), a += t[141];
n.shift(), c = f, d = p, u = b, g = m, a += t[46], s.MD(i[4]) && (a += t[142]), a += t[4], s.MN("fe_child_i", s.MI(s.MB(i[38])) + s.MI(1)), a += t[18];
}
return n.shift(), c = r, d = o, u = _, h = l, a += t[2], _r_(a);
}
function _(a) {
_i_("4ab:acefbc2c"), a += t[18];
var r = c, o = d, _ = u, l = h, d = s.MC(i[37]) || [];
n.unshift({
fe_child_age:null
});
for (var h, c = 1, u = d.length; u >= c; c++) {
n[0].fe_child_age = h = d[c - 1], a += t[18], s.MD(i[4]) && (a += t[127]), a += [ t[128], s.F.entities(s.MC(i[38])), t[129], (n.unshift({
child_number:s.MI(s.MB(i[38])) + s.MI(1)
}), e = s.ME(t[130], s.MB, s.MN, null), n.shift(), e), t[131] ].join(""), s.MD(i[34]) ? a += [ t[132], s.ME(t[133], s.MB, s.MN, null), t[115] ].join("") :s.MD(i[4]) && (a += [ t[132], s.ME(t[134], s.MB, s.MN, null), t[115] ].join("")), a += t[135];
var f = c, p = d, b = u, m = g, d = s.seq(0, s.MB(i[39])) || [];
n.unshift({
i:null
});
for (var g, c = 1, u = d.length; u >= c; c++) n[0].i = g = d[c - 1], a += [ t[136], s.F.entities(g.value), t[41] ].join(""), s.MJ(h + "" != "") && s.MJ(h + "" == "" + g.value) && (a += t[42]), a += t[137], s.MJ(s.MB(i[4])) || s.MJ(s.MB(i[34])) ? a += [ t[138], (n.unshift({
num_years:g.value
}), e = s.ME(t[139], s.MB, s.MN, s.MO(g.value, null, t[139])), n.shift(), e), t[132] ].join("") :(a += [ t[138], g.value ].join(""), s.MD(i[40]) && (a += s.ME(t[140], s.MB, s.MN, null)), a += t[132]), a += t[141];
n.shift(), c = f, d = p, u = b, g = m, a += t[46], s.MD(i[4]) && (a += t[142]), a += t[4], s.MN("fe_child_i", s.MI(s.MB(i[38])) + s.MI(1)), a += t[18];
}
return n.shift(), c = r, d = o, u = _, h = l, a += t[2], _r_(a);
}
function l(a) {
_i_("4ab:a87a63a8"), a += t[18];
var r = s.MC(i[37]) || [];
n.unshift({
fe_child_age:null
});
for (var o, _ = 1, l = r.length; l >= _; _++) {
n[0].fe_child_age = o = r[_ - 1], a += t[18], s.MD(i[4]) && (a += t[127]), a += [ t[128], s.F.entities(s.MC(i[38])), t[129], (n.unshift({
child_number:s.MI(s.MB(i[38])) + s.MI(1)
}), e = s.ME(t[130], s.MB, s.MN, null), n.shift(), e), t[131] ].join(""), s.MD(i[34]) ? a += [ t[132], s.ME(t[133], s.MB, s.MN, null), t[115] ].join("") :s.MD(i[4]) && (a += [ t[132], s.ME(t[134], s.MB, s.MN, null), t[115] ].join("")), a += t[135];
var d = _, h = r, c = l, u = f, r = s.seq(0, s.MB(i[39])) || [];
n.unshift({
i:null
});
for (var f, _ = 1, l = r.length; l >= _; _++) n[0].i = f = r[_ - 1], a += [ t[136], s.F.entities(f.value), t[41] ].join(""), s.MJ(o + "" != "") && s.MJ(o + "" == "" + f.value) && (a += t[42]), a += t[137], s.MJ(s.MB(i[4])) || s.MJ(s.MB(i[34])) ? a += [ t[138], (n.unshift({
num_years:f.value
}), e = s.ME(t[139], s.MB, s.MN, s.MO(f.value, null, t[139])), n.shift(), e), t[132] ].join("") :(a += [ t[138], f.value ].join(""), s.MD(i[40]) && (a += s.ME(t[140], s.MB, s.MN, null)), a += t[132]), a += t[141];
n.shift(), _ = d, r = h, l = c, f = u, a += t[46], s.MD(i[4]) && (a += t[142]), a += t[4], s.MN("fe_child_i", s.MI(s.MB(i[38])) + s.MI(1)), a += t[18];
}
return n.shift(), a += t[2], _r_(a);
}
function d(a) {
_i_("4ab:b8db175c"), a += t[18];
var r = s.MC(i[37]) || [];
n.unshift({
fe_child_age:null
});
for (var o, _ = 1, l = r.length; l >= _; _++) {
n[0].fe_child_age = o = r[_ - 1], a += t[18], s.MD(i[4]) && (a += t[127]), a += [ t[128], s.F.entities(s.MC(i[38])), t[129], (n.unshift({
child_number:s.MI(s.MB(i[38])) + s.MI(1)
}), e = s.ME(t[130], s.MB, s.MN, null), n.shift(), e), t[131] ].join(""), s.MD(i[34]) ? a += [ t[132], s.ME(t[133], s.MB, s.MN, null), t[115] ].join("") :s.MD(i[4]) && (a += [ t[132], s.ME(t[134], s.MB, s.MN, null), t[115] ].join("")), a += t[135];
var d = _, h = r, c = l, u = f, r = s.seq(0, s.MB(i[39])) || [];
n.unshift({
i:null
});
for (var f, _ = 1, l = r.length; l >= _; _++) n[0].i = f = r[_ - 1], a += [ t[136], s.F.entities(f.value), t[41] ].join(""), s.MJ(o + "" != "") && s.MJ(o + "" == "" + f.value) && (a += t[42]), a += t[137], s.MJ(s.MB(i[4])) || s.MJ(s.MB(i[34])) ? a += [ t[138], (n.unshift({
num_years:f.value
}), e = s.ME(t[139], s.MB, s.MN, s.MO(f.value, null, t[139])), n.shift(), e), t[132] ].join("") :(a += [ t[138], f.value ].join(""), s.MD(i[40]) && (a += s.ME(t[140], s.MB, s.MN, null)), a += t[132]), a += t[141];
n.shift(), _ = d, r = h, l = c, f = u, a += t[46], s.MD(i[4]) && (a += t[142]), a += t[4], s.MN("fe_child_i", s.MI(s.MB(i[38])) + s.MI(1)), a += t[18];
}
return n.shift(), a += t[2], _r_(a);
}
function h(e) {
return _i_("4ab:e96de32f"), e += t[18], s.MK(s.MB(i[11])) ? (e += t[19], s.MD(i[4]) || (e += t[20], s.MD(i[5]) || (e += t[21]), e += t[22], s.MD(i[6]) && (e += t[23]), e += t[24], e += s.MD(i[6]) ? [ t[25], s.MC(i[7]), t[26] ].join("") :t[27], e += [ t[28], s.ME(t[29], s.MB, s.MN, null), t[30] ].join("")), e += t[31], e = b(e), e += t[48]) :e += [ t[49], s.F.entities(s.MC(i[9])), t[50] ].join(""), e += t[2], _r_(e);
}
function c(e) {
return _i_("4ab:a01ec8d0"), e += t[1], s.MN("fe_sb_group_max_rooms", 30), e += t[2], s.MN("fe_sb_group_max_pets", 10), e += t[2], s.MN("fe_sb_group_max_adults", 30), e += t[2], s.MN("fe_sb_group_max_children", 10), e += t[2], s.MN("fe_sb_group_max_children_age", 17), e += t[2], s.MN("fe_sb_group_max_infants", 10), e += t[3], s.MN("fe_add_children_tooltip", ""), e += t[2], s.MJ(s.MC(i[1]) + "" == "searchresults") && s.MJ(s.MC(i[2])) && s.MK(s.MC(i[2]).b_children_total) && s.MJ(s.MC(i[3]) + "" == "family") && (e += t[4], s.MN(i[0], [ t[5], s.ME(t[6], s.MB, s.MN, null), t[7], s.ME(t[8], s.MB, s.MN, null), t[9] ].join("")), e += t[2]), e += t[10], e += t[11], e += t[11], e += t[11], e += t[11], e += t[11], e += t[11], e += t[11], e += t[12], s.MD(i[4]) && (e += t[13], s.MJ(s.MC(i[1]) + "" == "searchresults") && (e += [ t[14], s.F.entities("OQFLIUaRfYKdBcbLHe"), t[15] ].join("")), e += t[16]), e += t[17], s.MJ(s.MB(i[12])) && s.MJ(s.MB(i[4])) || (e += t[4], e = h(e), e += t[18]), e += t[51], s.MK(s.MB(i[26])) ? (e += t[52], s.MD(i[24]) ? (e += t[53], s.MN(i[13], s.ME(t[54], s.MB, s.MN, null)), e += t[53], s.MN(i[14], s.ME(t[55], s.MB, s.MN, null)), e += t[53], n.unshift({
fe_bui_stepper_additional_attrs:t[71],
fe_bui_stepper_id:t[72],
fe_bui_stepper_max:s.MB(i[22]),
fe_bui_stepper_min:t[73],
fe_bui_stepper_subtitle:s.MB(i[14]),
fe_bui_stepper_title:s.MB(i[13]),
fe_bui_stepper_value:s.MB(i[23]) ? s.MB(i[23]) :0
}), e = g(e), n.shift(), e += t[31]) :(e += t[53], s.MD(i[4]) || (e += t[74], s.MD(i[5]) || (e += t[21]), e += t[22], s.MD(i[6]) && (e += t[75]), e += t[76], e += s.MD(i[6]) ? [ t[77], s.MC(i[7]), t[78] ].join("") :t[79], e += t[80], e += s.MD(i[25]) ? s.ME(t[81], s.MB, s.MN, null) :s.ME(t[54], s.MB, s.MN, null), e += t[82]), e += t[53], e = f(e), e += t[31]), e += t[48]) :e += [ t[95], s.F.entities(s.MC(i[23])), t[50] ].join(""), e += t[17], s.MK(s.MB(i[41])) && (e += t[31], s.MN("fe_sb_group_has_children", s.MB(i[27]) && (s.MB(i[28]) || s.MB(i[29]))), e += t[96], s.MJ(s.MB(i[4])) && s.MJ(s.MB(i[30])) && (e += t[97]), e += t[98], s.MD(i[24]) ? (e += t[53], s.MN(i[31], s.ME(t[99], s.MB, s.MN, null)), e += t[53], s.MN(i[32], s.ME(t[100], s.MB, s.MN, null)), e += t[53], n.unshift({
fe_bui_stepper_additional_attrs:t[101],
fe_bui_stepper_id:t[75],
fe_bui_stepper_max:s.MB(i[33]),
fe_bui_stepper_min:t[102],
fe_bui_stepper_subtitle:s.MB(i[32]),
fe_bui_stepper_title:s.MB(i[31]),
fe_bui_stepper_value:s.MB(i[27]) ? s.MB(i[27]) :0
}), e = g(e), n.shift(), e += t[31]) :(e += t[53], s.MD(i[4]) || (e += t[74], s.MD(i[5]) || (e += t[21]), e += t[22], s.MD(i[6]) && (e += t[75]), e += t[76], e += s.MD(i[6]) ? [ t[103], s.MC(i[7]), t[78] ].join("") :t[104], e += [ t[105], s.ME(t[99], s.MB, s.MN, null), t[82] ].join("")), e += t[53], e = u(e), e += t[31]), e += t[118], s.MK(s.MB(i[41]) || s.MB(i[42])) && s.MJ(s.MB(i[4])) && (e += t[115], e = p(e), e += t[31]), e += t[48]), e += t[17], s.MK(s.MB(i[47])) && (e += t[144], s.MD(i[24]) ? (e += t[53], s.MN(i[43], s.ME(t[145], s.MB, s.MN, null)), e += t[53], s.MN(i[44], s.ME(t[146], s.MB, s.MN, null)), e += t[53], n.unshift({
fe_bui_stepper_additional_attrs:t[147],
fe_bui_stepper_id:t[148],
fe_bui_stepper_max:s.MB(i[45]),
fe_bui_stepper_min:t[102],
fe_bui_stepper_subtitle:s.MB(i[44]),
fe_bui_stepper_title:s.MB(i[43]),
fe_bui_stepper_value:s.MB(i[46]) ? s.MB(i[46]) :0
}), e = g(e), n.shift(), e += t[31]) :(e += t[53], s.MD(i[4]) || (e += t[20], s.MD(i[5]) || (e += t[21]), e += t[22], s.MD(i[6]) && (e += t[148]), e += t[24], e += s.MD(i[6]) ? [ t[149], s.MC(i[7]), t[26] ].join("") :t[150], e += [ t[151], s.ME(t[145], s.MB, s.MN, null), t[152] ].join("")), e += t[53], e = r(e), e += t[31]), e += t[48]), e += t[17], s.MJ(s.MB(i[4])) && (e += t[4], e = h(e), e += t[18]), e += t[17], s.MD(i[4]) && (e += t[47]), e += t[17], s.MK(s.MB(i[41]) || s.MB(i[42]) || s.MB(i[4])) && (e += t[31], e = m(e), e += t[18]), e += t[161], _r_(e);
}
function u(a) {
_i_("4ab:9651fbaf"), a += t[2], s.MD(i[4]) && (a += t[32]), a += [ t[106], s.ME(t[107], s.MB, s.MN, null), t[85] ].join(""), a += s.MD(i[6]) ? [ t[108], s.MC(i[7]), t[109] ].join("") :t[110], a += t[111], s.MD(i[4]) || (a += [ t[112], s.F.html(s.MC(i[0])), t[113] ].join("")), a += t[114];
var r = s.seq(0, s.MB(i[33])) || [];
n.unshift({
i:null
});
for (var o, _ = 1, l = r.length; l >= _; _++) n[0].i = o = r[_ - 1], a += [ t[90], s.F.entities(o.value), t[41] ].join(""), s.MJ(s.MB(i[27]) == o.value) && (a += t[42]), a += t[91], a += s.MJ(s.MB(i[10])) && s.MJ(0 == o.value) ? [ t[115], s.ME(t[116], s.MB, s.MN, null), t[53] ].join("") :s.MJ(s.MB(i[10])) ? [ t[115], (n.unshift({
num_kids:o.value
}), e = s.ME(t[117], s.MB, s.MN, s.MO(o.value, null, t[117])), n.shift(), e), t[53] ].join("") :[ t[115], o.value, t[53] ].join(""), a += t[93];
return n.shift(), a += t[94], s.MD(i[4]) && (a += t[47]), a += t[2], _r_(a);
}
function f(a) {
_i_("4ab:ffa66e4d"), a += t[2], s.MD(i[4]) && (a += t[32]), a += [ t[83], s.ME(t[84], s.MB, s.MN, null), t[85] ].join(""), a += s.MD(i[6]) ? [ t[86], s.MC(i[7]), t[87] ].join("") :t[88], a += t[89];
var r = s.seq(1, s.MB(i[22])) || [];
n.unshift({
i:null
});
for (var o, _ = 1, l = r.length; l >= _; _++) n[0].i = o = r[_ - 1], a += [ t[90], s.F.entities(o.value), t[41] ].join(""), s.MJ(s.MB(i[23]) == o.value) && (a += t[42]), a += t[91], s.MD(i[10]) ? (n.unshift({
num_adults:o.value
}), e = s.ME(t[92], s.MB, s.MN, s.MO(o.value, null, t[92])), n.shift(), a += e) :a += o.value, a += t[93];
return n.shift(), a += t[94], s.MD(i[4]) && (a += t[47]), a += t[2], _r_(a);
}
function p(a) {
if (_i_("4ab:48efaf07"), a += t[4], s.MJ(s.MB(i[27])) && (s.MJ(s.MB(i[28])) || s.MJ(s.MB(i[29])))) {
if (a += t[119], s.MD(i[4]) || (a += t[120], s.MD(i[34]) ? a += [ s.ME(t[121], s.MB, s.MN, null), t[2] ].join("") :s.MD(i[36]) ? (s.MN(i[35], s.DATE(s.MB(i[36]), "short_date", "", "", "")), a += s.MJ(1 == s.MB(i[27])) ? [ (n.unshift({
date:s.MB(i[35])
}), e = s.ME(t[122], s.MB, s.MN, null), n.shift(), e), t[2] ].join("") :[ (n.unshift({
date:s.MB(i[35])
}), e = s.ME(t[123], s.MB, s.MN, null), n.shift(), e), t[2] ].join("")) :a += s.MJ(1 == s.MB(i[27])) ? [ s.ME(t[124], s.MB, s.MN, null), t[2] ].join("") :[ s.ME(t[125], s.MB, s.MN, null), t[2] ].join(""), a += t[82]), a += t[126], s.MN("fe_child_i", 0), a += t[126], s.MD(i[29])) a += t[115], n.unshift({
fe_children_ages:s.MB(i[29])
}), a = l(a), n.shift(), a += t[53]; else if (s.MD(i[28])) {
a += t[115];
var r = s.MC(i[28]) || [];
n.unshift({
fe_room:null
});
for (var _, d = 1, h = r.length; h >= d; d++) n[0].fe_room = _ = r[d - 1], a += t[132], n.unshift({
fe_children_ages:s.MG((_ || {}).b_children_ages)
}), a = o(a), n.shift(), a += t[115];
n.shift(), a += t[53];
}
a += t[143];
}
return a += t[2], _r_(a);
}
function b(a) {
_i_("4ab:b4541f50"), a += t[4], s.MD(i[4]) && (a += t[32]), a += t[33], a += s.MD(i[6]) ? [ t[34], s.MC(i[7]), t[35] ].join("") :t[36], a += [ t[37], s.ME(t[38], s.MB, s.MN, null), t[39] ].join("");
var r = s.seq(1, s.MB(i[8])) || [];
n.unshift({
i:null
});
for (var o, _ = 1, l = r.length; l >= _; _++) n[0].i = o = r[_ - 1], a += [ t[40], s.F.entities(o.value), t[41] ].join(""), s.MJ(s.MB(i[9]) == o.value) && (a += t[42]), a += t[43], s.MD(i[10]) ? (n.unshift({
num_rooms:o.value
}), e = s.ME(t[44], s.MB, s.MN, s.MO(o.value, null, t[44])), n.shift(), a += e) :a += o.value, a += t[45];
return n.shift(), a += t[46], s.MD(i[4]) && (a += t[47]), a += t[2], _r_(a);
}
function m(a) {
if (_i_("4ab:366c30ce"), a += t[4], s.MJ(s.MB(i[27])) && (s.MJ(s.MB(i[28])) || s.MJ(s.MB(i[29])))) {
if (a += t[119], s.MD(i[4]) || (a += t[120], s.MD(i[34]) ? a += [ s.ME(t[121], s.MB, s.MN, null), t[2] ].join("") :s.MD(i[36]) ? (s.MN(i[35], s.DATE(s.MB(i[36]), "short_date", "", "", "")), a += s.MJ(1 == s.MB(i[27])) ? [ (n.unshift({
date:s.MB(i[35])
}), e = s.ME(t[122], s.MB, s.MN, null), n.shift(), e), t[2] ].join("") :[ (n.unshift({
date:s.MB(i[35])
}), e = s.ME(t[123], s.MB, s.MN, null), n.shift(), e), t[2] ].join("")) :a += s.MJ(1 == s.MB(i[27])) ? [ s.ME(t[124], s.MB, s.MN, null), t[2] ].join("") :[ s.ME(t[125], s.MB, s.MN, null), t[2] ].join(""), a += t[82]), a += t[126], s.MN("fe_child_i", 0), a += t[126], s.MD(i[29])) a += t[115], n.unshift({
fe_children_ages:s.MB(i[29])
}), a = d(a), n.shift(), a += t[53]; else if (s.MD(i[28])) {
a += t[115];
var r = s.MC(i[28]) || [];
n.unshift({
fe_room:null
});
for (var o, l = 1, h = r.length; h >= l; l++) n[0].fe_room = o = r[l - 1], a += t[132], n.unshift({
fe_children_ages:s.MG((o || {}).b_children_ages)
}), a = _(a), n.shift(), a += t[115];
n.shift(), a += t[53];
}
a += t[143];
}
return a += t[2], _r_(a);
}
function g(e) {
return _i_("4ab:543e0d5a"), e += [ t[56], s.MC(i[15]), t[57], s.MC(i[16]), t[58] ].join(""), s.MD(i[17]) && (e += [ t[59], s.MC(i[17]), t[60] ].join("")), e += [ t[61], s.MC(i[15]), t[62], s.MC(i[15]), t[63], s.MC(i[18]), t[64], s.MC(i[19]), t[65], s.MC(i[20]), t[41], s.MC(i[21]), t[66] ].join(""), s.MJ(s.MB(i[20]) == s.MB(i[18])) && (e += t[67]), e += [ t[68], s.MC(i[20]), t[69] ].join(""), s.MJ(s.MB(i[20]) == s.MB(i[19])) && (e += t[67]), e += t[70], _r_(e);
}
return a += t[0], a = c(a), a += t[162], _r_(a);
});
}());
var n = e("component"), a = e("morphdom"), s = e("read-data-options"), r = e("search-config"), o = e("search/searchbox/model");
i.exports = n.extend({
init:function() {
if (_i_("4ab:416c440d"), this.options = s(this.$el, {
modelId:{
name:"sb-id",
type:String,
required:!0
},
sbWidth:{
name:"sb-width",
type:String
},
sbBBToolSearchbox:{
name:"sb-bbtool-searchbox",
type:Boolean
},
childrenHide:{
name:"sb-group-children-hide",
type:Boolean
},
childrenAgesHide:{
name:"sb-group-children-ages-hide",
type:Boolean
},
infantsHide:{
name:"sb-group-infants-hide",
type:Boolean
},
useBUIStepper:{
name:"sb-group-use-bui-stepper",
type:Boolean
},
petsHide:{
name:"sb-group-pets-hide",
type:Boolean
},
roomsHide:{
name:"sb-group-rooms-hide",
type:Boolean
},
useAdultsLabel:{
name:"sb-group-use_adults_label",
type:Boolean
},
blockLabels:{
name:"sb-group-block-labels",
type:Boolean
},
alwaysExpanded:{
name:"sb-group-always-expanded",
type:Boolean
},
descriptiveDropdowns:{
name:"fe_sb_group_descriptive_dropdowns",
type:Boolean
},
universalDesign:{
name:"fe_sb_universal_design",
type:Boolean
},
removeDuplicateIds:{
name:"fe_remove_duplicate_ids",
type:Boolean
},
searchBoxUniqueId:{
name:"fe_sb_unique_id",
type:String
},
searchboxXPI:{
name:"fe_sb_xpi",
type:Boolean
}
}), this.model = o.getInstance(this.options.modelId), this.model.use("group"), this.model.use("dates"), this.model.on("change", this.modelChange.bind(this)), this.$form = this.$el.parents("form"), r.on("change", this.searchConfigChange.bind(this)), this.$el.on("change", '[data-group-rooms-count=""]', this.groupRoomsChange.bind(this)), this.$el.on("change", '[data-group-adults-count=""]', this.groupAdultsChange.bind(this)), this.$el.on("change", '[data-group-children-count=""]', this.groupChildrenChange.bind(this)), this.$el.on("change", "[data-group-child-age]", this.groupChildAgeChange.bind(this)), this.$el.on("change", '[data-group-infants-count=""]', this.groupInfantsChange.bind(this)), this.renderEl = this.$el.find('[data-render=""]')[0], this.template = B.jstmpl("search_group_group_html"), this.$form.on("change", ".b-booker-type__input_business-booker", this.businessBookerSelected.bind(this)), this.modelInit(), "index" === B.env.b_action && "sessionStorage" in window && !r.childrenAges.length) {
var e;
try {
e = JSON.parse(window.sessionStorage.getItem("search_group_children_ages"));
} catch (t) {}
if (e) {
this.model.group.set({
key:"children_count",
value:e.length
});
for (var i = 0; i < e.length; i++) this.model.group.set({
i:i,
key:"children_ages",
value:e[i]
});
}
}
_r_();
},
modelInit:function() {
_i_("4ab:bb7aa8f3");
var e = r.rooms ? r.rooms.length :1, t = r.adults || 2, i = r.childrenAges || [];
if (B.env.fe_exp_prev_search) {
var n = $("#frm [name=no_rooms]").val();
n && (e = n), n = $("#frm [name=group_adults]").val(), n && (t = n), n = $("#frm [name=age]"), n.length && (i = [], n.each(function() {
_i_("4ab:efa5ba7d"), i.push($(this).val()), _r_();
}));
}
var a = {
rooms_count:e,
adults_count:t,
children_ages:i,
default_empty_age_to:"12 "
};
this.options.infantsHide || (a.infants_count = r.infants), this.model.group.init(a), _r_();
},
modelChange:function(e) {
if (_i_("4ab:694521b7"), !e || "group" != e.group && "dates" != e.group) return _r_();
this.render(), _r_();
},
searchConfigChange:function() {
_i_("4ab:880384aa"), this.model.group.set({
key:"rooms_count",
value:Array.isArray(r.rooms) ? r.rooms.length :1
}), this.model.group.set({
key:"adults_count",
value:r.adults
}), this.model.group.set({
key:"children_count",
value:Array.isArray(r.childrenAges) ? r.childrenAges.length :1
}), this.options.infantsHide || this.model.group.set({
key:"infants_count",
value:r.infants
}), Array.isArray(r.childrenAges) && r.childrenAges.forEach(function(e, t) {
_i_("4ab:550ed85a"), this.model.group.set({
key:"children_ages",
i:t,
value:e
}), _r_();
}.bind(this)), _r_();
},
groupRoomsChange:function(e) {
_i_("4ab:ea31094b");
var t = $(e.currentTarget);
this.model.group.set({
key:"rooms_count",
value:t.val()
}), _r_();
},
groupAdultsChange:function(e) {
_i_("4ab:87670d74");
var t = $(e.currentTarget);
this.model.group.set({
key:"adults_count",
value:t.val()
}), this.groupAdultsChanged = !0, _r_();
},
groupChildrenChange:function(e) {
_i_("4ab:d9e925f4");
var t = $(e.currentTarget);
this.model.group.set({
key:"children_count",
value:t.val()
}), _r_();
},
groupInfantsChange:function(e) {
_i_("4ab:caa31a74");
var t = $(e.currentTarget);
this.model.group.set({
key:"infants_count",
value:t.val()
}), _r_();
},
groupChildAgeChange:function(e) {
_i_("4ab:938d8031");
var t = $(e.currentTarget), i = t.attr("data-group-child-age");
this.model.group.set({
key:"children_ages",
i:+i,
value:t.val()
}), _r_();
},
render:function() {
_i_("4ab:e52e4b00");
var e = {}, t = this.model.group.get(), i = this.model.dates.get();
t = {
fe_sb_state_number_of_rooms:t.rooms_count,
fe_sb_state_number_of_adults:t.adults_count,
fe_sb_state_number_of_children:t.children_ages.length,
fe_sb_state_children_ages:t.children_ages,
fe_sb_state_number_of_infants:t.infants_count,
fe_sb_state_traveller:t.fe_sb_state_traveller,
fe_sb_state_rooms:[ {
b_adults:t.adults_count,
b_children:t.children_ages.length,
b_children_ages:t.children_ages,
b_room_order:1
} ]
}, B.env.b_lang_is_cjk && (t.b_lang_is_cjk = B.env.b_lang_is_cjk), i.checkout && (t.fe_sb_state_checkout = i.checkout.toString()), this.options.sbWidth && (t.fe_sb_width = this.options.sbWidth), this.options.childrenHide && (t.fe_sb_group_children_hide = 1), this.options.childrenAgesHide && (t.fe_sb_group_children_ages_hide = 1), this.options.infantsHide && (t.fe_sb_group_infants_hide = 1), this.options.useBUIStepper && (t.fe_sb_group_use_bui_stepper = 1), this.options.petsHide && (t.fe_sb_group_pets_hide = 1), this.options.roomsHide && (t.fe_sb_group_rooms_hide = 1), this.options.blockLabels && (t.fe_sb_group_block_labels = 1), this.options.alwaysExpanded && (t.fe_sb_group_always_expanded = 1), this.options.useAdultsLabel && (t.fe_sb_group_use_adults_label = 1), this.options.sbBBToolSearchbox && (t.fe_sb_bbtool_searchbox = 1), this.options.descriptiveDropdowns && (t.fe_sb_group_descriptive_dropdowns = 1), this.options.universalDesign && (t.fe_sb_universal_design = 1), this.options.removeDuplicateIds && (t.fe_remove_duplicate_ids = 1), this.options.searchBoxUniqueId && (t.fe_sb_unique_id = this.options.searchBoxUniqueId), this.options.searchboxXPI && (t.fe_sb_xpi = 1);
var n = this.template.render(t).trim();
"msie" === B.env.b_browser && B.env.b_browser_version <= 8 && (e.onBeforeElUpdated = function(e, t) {
_i_("4ab:2ad4db29");
var i = e.getAttribute(jQuery.expando);
return i && t.setAttribute(jQuery.expando, i), _r_(!0);
}), a(this.renderEl, n, e), _r_();
},
businessBookerSelected:function() {
_i_("4ab:4b365a2c"), this.groupAdultsChanged || this.model.group.set({
key:"adults_count",
value:1
}), _r_();
},
groupChildrenAgeSave:function(t) {
_i_("4ab:a8436cf8"), t.preventDefault();
var i = e("events");
i.trigger("SearchBox::SaveTravelGroupsClicked", t), _r_();
}
}), _r_();
}), B.define("search/group/model", function(e, t, i) {
"use strict";
_i_("4ab:73acc7d4");
function n(e) {
_i_("4ab:1117a8f7"), this.model = e, this.data = {
preset:-1
}, this.valid = !0, this.validationError = "", this.options = {}, _r_();
}
$.extend(n.prototype, {
init:function(e) {
_i_("4ab:36e46bba"), this.data = e, this.emit("init"), _r_();
},
configure:function(e, t) {
_i_("4ab:4db4fdf81"), void 0 !== t ? this.options[e] = t :"object" == typeof e && $.extend(this.options, e), _r_();
},
get:function() {
return _i_("4ab:6dd4b5d31"), _r_(this.data);
},
setAll:function(e) {
if (_i_("4ab:7bab9fd6"), !e) return _r_(!1);
var t = this;
return Object.keys(e).forEach(function(i) {
_i_("4ab:1bc66b31"), t.set({
key:i,
value:e[i]
}, !0), _r_();
}), this.emit("change"), _r_(!0);
},
set:function(e, t) {
if (_i_("4ab:8eacc4cd"), !e || !e.key) return _r_(!1);
if ("children_count" == e.key) if (this.data.children_ages || (this.data.children_ages = []), 0 == e.value) this.data.children_ages = []; else if (this.data.children_ages.length < e.value) for (var i = this.data.children_ages.length; i < e.value; i++) this.data.default_empty_age_to ? this.data.children_ages.push(this.data.default_empty_age_to) :this.data.children_ages.push(""); else this.data.children_ages.length > e.value && this.data.children_ages.splice(e.value, this.data.children_ages.length - e.value); else e.hasOwnProperty("i") ? this.data[e.key] ? this.data[e.key][e.i] = e.value :(this.data[e.key] = [], this.data[e.key][e.i] = e.value) :this.data[e.key] = e.value;
if ("index" === B.env.b_action && "sessionStorage" in window) {
var n = JSON.stringify(this.data.children_ages);
window.sessionStorage.setItem("search_group_children_ages", n);
}
return t || this.emit("change"), _r_(!0);
},
validate:function(e) {
_i_("4ab:af1265a3"), e = e || {};
var t = !0, i = "";
if (e.groupLimit) {
var n = 0;
this.data && this.data.adults_count && (n += parseInt(this.data.adults_count)), this.data && this.data.children_ages && (n += this.data.children_ages.length), n > e.groupLimit && (t = !1, i = "over-limit");
}
return this.valid != t && (this.valid = t, this.validationError = i, this.emit("validation", {
valid:t,
validationError:i
})), _r_(t);
},
modelChange:function(e) {
if (_i_("4ab:fc5eae5e"), !e || "traveller" !== e.group) return _r_();
var t = this.model.traveller.get().travellerType;
switch (t) {
case null:
case "":
case "couple":
this.data.rooms_count = 1, this.data.adults_count = 2, this.data.children_ages = [];
break;

case "solo":
case "business":
this.data.rooms_count = 1, this.data.adults_count = 1, this.data.children_ages = [];
break;

case "family":
this.data.adults_count = 1 == this.data.adults_count ? 2 :this.data.adults_count, this.data.children_ages && 0 != this.data.children_ages.length || (this.data.children_ages = [ this.data.default_empty_age_to ]);
break;

case "group":
this.data.adults_count = 1 == this.data.adults_count ? 2 :this.data.adults_count, this.data.children_ages = [];
}
this.data.fe_sb_state_traveller = t, this.emit("change"), _r_();
},
emit:function(e, t) {
_i_("4ab:73d03bf3"), t = t || {}, this.model.emit(e, $.extend(t, {
group:"group"
})), _r_();
}
}), i.exports = n, _r_();
}), B.define("search/searchbox/analytics", function(e, t, i) {
_i_("4ab:e7508c5f");
var n = {};
t.send = function(e, t, i) {
if (_i_("4ab:34abea4d"), !window.ga) return _r_();
window.ga("send", "event", "Searchbox", B.env.b_action, e, t, i), _r_();
}, t.sendNonInteractive = function(e, i) {
_i_("4ab:26b6ccd6"), t.send(e, i, {
nonInteraction:!0
}), _r_();
}, t.sendOnce = function(e, i) {
_i_("4ab:89306d8e");
var a = e + ":" + i;
n[a] || (t.send(e, i), n[a] = !0), _r_();
}, _r_();
}), B.define("search/searchbox/model", function(e, t, i) {
"use strict";
_i_("4ab:70ffa1f6");
var n = e("event-emitter"), a = e("search/modules/flags"), s = {};
function r(e) {
_i_("4ab:0c204bd6"), n.extend(this), this.id = e, this.formAction, this.fieldGroups = {
track:[]
}, this.flags = {}, this.validators = [], this.mode = "", _r_();
}
$.extend(r.prototype, {
use:function(t) {
if (_i_("4ab:3a863b20"), this[t]) return _r_();
switch (t) {
case "destination":
var i = e("search/destination/model");
this[t] = new i(this);
break;

case "origin":
var n = e("search/destination/model");
this[t] = new n(this);
break;

case "dates":
var a = e("search/dates/model");
this[t] = new a(this);
break;

case "group":
var s = e("search/group/model");
this[t] = new s(this);
break;

case "driverAge":
var r = e("search/driver-age/model");
this[t] = new r(this);
break;

case "flights":
var o = e("search/flights/model");
this[t] = new o(this);
break;

case "traveller":
var _ = e("search/traveller/model");
this[t] = new _(this);
break;

default:
return _r_();
}
if ("function" == typeof this[t].validate) {
var l = this[t]._options ? this[t]._options :this[t].options;
l || (l = {}), this.validators.push(this[t].validate.bind(this[t], l));
}
_r_();
},
submit:function() {
_i_("4ab:9812a29f"), this.emit("submit"), _r_();
},
getFormAction:function() {
return _i_("4ab:79f234f3"), _r_(this.formAction);
},
setFormAction:function(e) {
_i_("4ab:29b6d747"), this.formAction = e, _r_();
},
getFields:function() {
_i_("4ab:23eeccf0");
var e = [];
return Object.keys(this.fieldGroups).forEach(function(t) {
_i_("4ab:e7afd7a5"), Array.isArray(this.fieldGroups[t]) && (e = e.concat(this.fieldGroups[t])), _r_();
}.bind(this)), _r_(e);
},
setFields:function(e, t) {
_i_("4ab:98ae65e2"), this.fieldGroups[e] = t, _r_();
},
getMode:function() {
return _i_("4ab:0d862871"), _r_(this.mode);
},
setMode:function(e) {
_i_("4ab:09026df4"), this.mode = e, this.emit("change-mode", e), _r_();
},
hasFlag:function(e) {
return _i_("4ab:a1fc2a7f"), _r_(e in this.flags);
},
getFlag:function(e) {
return _i_("4ab:9ef09a09"), _r_(this.flags[e]);
},
updateFlags:function(e) {
_i_("4ab:e0075d67");
var t = a.parse(e);
Object.assign(this.flags, t), _r_();
},
validate:function() {
_i_("4ab:e3e8395a");
var e = this.validators.filter(function(e) {
return _i_("4ab:e115dcbd"), _r_(e.call());
});
return _r_(e.length == this.validators.length);
}
}), i.exports = {
getInstance:function(e) {
return _i_("4ab:8b26e77a"), s[e] || (s[e] = new r(e)), _r_(s[e]);
}
}, _r_();
}), B.define("component/search/searchbox/searchbox", function(e, t, i) {
"use strict";
_i_("4ab:5fa5d805");
var n = e("server-data"), a = e("component"), s = e("search/searchbox/model"), r = e("read-data-options"), o = e("events"), _ = !1, l = [ "country", "dest_id", "dest_type", "district", "iata", "landmark", "latitude", "longitude", "place_id", "place_id_lat", "place_id_lon", "region", "prefill_submitted" ];
i.exports = a.extend({
init:function() {
if (_i_("4ab:df7c8476"), this.hiddenFields = [], this.options = r(this.$el, {
modelId:{
name:"sb-id",
type:String,
required:!0
},
flags:{
name:"sb-flags",
type:String,
defaultValue:""
},
isFirstVisible:{
name:"is-first-visible",
type:Boolean
}
}), this.model = s.getInstance(this.options.modelId), this.model.on("init", this.modelChange.bind(this)), this.model.on("change", this.modelChange.bind(this)), this.model.on("submit", this.modelSubmit.bind(this)), this.model.updateFlags(this.options.flags), this.$form = this.$el.is("form") ? this.$el :this.$el.find("form:eq(0)"), this.$form.submit(this.formSubmit.bind(this)), this.originalAction = this.$form.attr("action"), this.options.isFirstVisible && this.model.hasFlag("sticky")) {
var t = e("search/searchbox/searchbox-sticky-controller").getController();
t.setElement(this.$form);
}
if (this.model.hasFlag("sticky") && this.model.hasFlag("deny_focus") && this.$el.get(0) && this.model.getFlag("deny_focus")) {
var i = e("search/searchbox/searchbox-deny-focus-controller");
new i(this.$el.get(0));
}
this.$searchOverlay = this.$el.find("[data-searching-overlay]"), this.shouldShowSearchOverlay = this.model.getFlag("AEJPAcBacPONDcFGHT") && this.$searchOverlay.length, this.shouldShowSearchOverlay && (this.$searchOverlay.on("click", this.searchOverlayClick.bind(this)), $(document).on("keydown", this.hideSearchOverlay.bind(this))), this.initCurrentCountryField();
var a = $(".sb-searchbox-horizontal__dismissible-btn");
if (a.length && !_) {
var o = a.parents(".sb-searchbox-horizontal");
_ = !0, a.click(function() {
_i_("4ab:8742af51"), o.hasClass("hidden") ? o.removeClass("hidden") :o.addClass("hidden"), _r_();
});
}
"www" == n.b_site_type && this.model.setFields("sr_traffic", [ {
name:"from_sf",
value:1
} ]), B.env.b_force_dates && (this.model.setFields("sr_user_modifications", [ {
name:"user_changed_date",
value:0
} ]), B.eventEmitter.on("FORM:user-changes", function(e, t) {
_i_("4ab:1bab8e28"), this.model.setFields("sr_user_modifications", [ {
name:"user_changed_" + t.type,
value:1
} ]), this.updateHiddenFields(), _r_();
}.bind(this))), _r_();
},
modelChange:function(e) {
_i_("4ab:88f20344"), this.updateHiddenFields(), _r_();
},
modelSubmit:function() {
_i_("4ab:92c6cafc"), this.$form.submit(), _r_();
},
initCurrentCountryField:function() {
_i_("4ab:6adc9882");
var e = !1;
this.$onlyCurrentCountry = this.$form.find("#limit-search-area"), this.$onlyCurrentCountry.length && (e = this.$onlyCurrentCountry.is(":checked"), this.$onlyCurrentCountry.bind("change", this.onlyCurrentCountryChange.bind(this)), this.model.use("destination"), this.model.destination.initOnlyCurrentCountry(e)), _r_();
},
onlyCurrentCountryChange:function() {
_i_("4ab:89625bb4"), this.model.use("destination"), this.model.destination.setOnlyCurrentCountry(this.$onlyCurrentCountry.is(":checked")), _r_();
},
updateHiddenFields:function() {
_i_("4ab:7dc447d1");
var e = this.model.getFormAction(), t = this.$form.attr("action");
e || (e = this.originalAction), t != e && this.$form.attr("action", e), this.hiddenFields && this.hiddenFields.forEach(function(e) {
_i_("4ab:b648de20"), e.$node.remove(), e.$node = null, _r_();
});
var i = this.model.getFields();
this.hiddenFields = [];
var n = [], a = !1;
i.forEach(function(e) {
_i_("4ab:3454694f"), this.hiddenFields.push({
name:e.name,
value:e.value
}), n.push(e.name), -1 != l.indexOf(e.name) && (a = !0), _r_();
}.bind(this)), this.$form.find("input").filter(function() {
return _i_("4ab:60cecddd"), _r_(a && -1 != l.indexOf(this.name) || -1 != n.indexOf(this.name));
}).remove(), this.hiddenFields.forEach(function(e) {
_i_("4ab:39b29132");
var t = $("<input>");
t.attr("type", "hidden"), t.attr("name", e.name), t.attr("value", e.value), e.$node = t, this.$form.append(t), _r_();
}.bind(this)), _r_();
},
selectFirstFromAutocomplete:function() {
_i_("4ab:c6931665");
var e = this.model.destination && this.model.destination.ac;
e && !e.selected && e.dataset && e.dataset.length && this.model.destination.set(e.dataset[0]), _r_();
},
formSubmit:function(e) {
_i_("4ab:9dc97bf0");
var t = this.model.validate();
if (!t) return e.preventDefault(), _r_();
o.trigger("SearchBox::Submit__Success", this), this.shouldShowSearchOverlay ? this.showSearchOverlay() :this.shouldShowSearchPageOverlay ? this.pageOverlay.show(this.model.destination.data.ss_raw) :this.shouldShowSRPP && this.SRPPOverlay.show(this.model.destination.data.ss_raw), this.selectFirstFromAutocomplete(), B.env.fe_exp_prev_search && this.previousDestinationStore(), _r_();
},
searchOverlayClick:function() {
_i_("4ab:86875d97"), this.abortSubmit(), this.hideSearchOverlay(), B.et.customGoal("AEJPAcBacPONDcFGHT", 1), _r_();
},
abortSubmit:function() {
_i_("4ab:59ccc51a"), window.stop ? window.stop() :document.execCommand && document.execCommand("Stop"), _r_();
},
showSearchOverlay:function() {
_i_("4ab:bdd7b242"), this.$searchOverlay.addClass("-visible"), _r_();
},
hideSearchOverlay:function() {
_i_("4ab:f79d19f5"), this.$searchOverlay.removeClass("-visible"), _r_();
},
previousDestinationStore:function() {
_i_("4ab:5e0039df");
var e = !1;
try {
window.sessionStorage && window.sessionStorage.setItem && (e = !0);
} catch (t) {}
if (e) {
var i = {};
$("#frm[role=search]").serializeArray().forEach(function(e) {
_i_("4ab:e3bde841"), i.hasOwnProperty(e.name) ? Array.isArray(i[e.name]) ? i[e.name].push(e.value) :i[e.name] = [ i[e.name], e.value ] :i[e.name] = e.value, _r_();
});
var n = JSON.stringify(i);
window.sessionStorage.setItem("previous_search_data", n);
}
_r_();
}
}), _r_();
}), B.define("search/searchbox/searchbox-sticky-controller", function(e, t, i) {
"use strict";
_i_("4ab:96010371");
var n = e("jquery"), a = e("event-emitter"), s = null;
function r() {
_i_("4ab:1842ddfa"), a.extend(this), this.visible = !1, this.bottomPosition = null, this.$el = null, this.$sticky = null, this.$window = n(window), this.$window.on("scroll", this.windowScroll.bind(this)), this.$window.on("keydown", this.onKeyDown.bind(this)), this.$window.on("click", this.clickOnWindow.bind(this)), _r_();
}
Object.assign(r.prototype, {
setElement:function(e) {
if (_i_("4ab:5c9dbbd1"), this.bottomPosition) {
var t = e.offset(), i = e.outerHeight();
if (t && t.top + i > this.bottomPosition) return _r_();
}
this.$el = e, this.recalculate(), _r_();
},
setStickyElement:function(e) {
_i_("4ab:4409ce23"), this.$sticky = e, _r_();
},
isVisible:function() {
return _i_("4ab:5393a12a"), _r_(this.visible);
},
recalculate:function() {
if (_i_("4ab:cb3bda32"), null === this.$el) return _r_();
var e = this.$el.offset(), t = this.$el.outerHeight();
if (!e) return _r_();
this.bottomPosition = e.top + t, this.updateStatus(), _r_();
},
show:function() {
_i_("4ab:ba1a50e9"), this.visible = !0, this.emit("show"), _r_();
},
onKeyDown:function(e) {
_i_("4ab:aa7bbd20");
var t = 27 === e.keyCode;
t && this.visible && this.updateStatus(), _r_();
},
clickOnWindow:function(e) {
if (_i_("4ab:0f2ac108"), this.$sticky && this.$sticky.length) {
var t = e.target, i = this.$sticky.get(0), a = n.contains(i, t) || i === t;
!a && this.visible && this.updateStatus();
}
_r_();
},
updateStatus:function() {
_i_("4ab:3e5c598e"), !this.visible && this.$window.scrollTop() >= this.bottomPosition ? (this.visible = !0, this.emit("show")) :this.visible && this.$window.scrollTop() < this.bottomPosition && (this.visible = !1, this.emit("hide")), _r_();
},
windowScroll:function(e) {
if (_i_("4ab:cf8eeb33"), null === this.bottomPosition) return _r_();
this.updateStatus(), _r_();
}
}), i.exports = {
getController:function() {
return _i_("4ab:0f46f741"), s || (s = new r()), _r_(s);
}
}, _r_();
}), B.define("component/search/searchbox/searchbox-sticky", function(e, t, i) {
"use strict";
_i_("4ab:adca3176");
var n = e("component"), a = e("events"), s = e("search/searchbox/searchbox-sticky-controller").getController();
i.exports = n.extend({
init:function() {
_i_("4ab:43f5b479"), s.on("show", this.show.bind(this)), s.on("hide", this.hide.bind(this)), s.setStickyElement(this.$el), s.isVisible() && this.hardShow(), _r_();
},
show:function(e) {
_i_("4ab:0180b0f9"), this.$el.addClass("-visible-1"), a.trigger("searchbox-sticky:show"), setTimeout(function() {
_i_("4ab:d6a5fa72"), this.$el.addClass("-visible-2"), _r_();
}.bind(this), 0), _r_();
},
hardShow:function() {
_i_("4ab:0579d075"), this.$el.addClass("-visible-1 -visible-2"), _r_();
},
hide:function(e) {
_i_("4ab:34395e9c"), this.$el.removeClass("-visible-2"), setTimeout(function() {
_i_("4ab:cfe3cb5e"), this.$el.removeClass("-visible-1"), _r_();
}.bind(this), 1e3), _r_();
}
}), _r_();
}), B.define("search/searchbox/searchbox-deny-focus-controller", function(e, t, i) {
"use strict";
_i_("4ab:e88bf486");
var n = e("jquery"), a = e("deny-focus"), s = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), *[tabindex], *[contenteditable]";
function r(e) {
_i_("4ab:947d6856"), this.el = e, this.state = null, this._timeoutId = null, this.deny();
var t = this.eventHandler.bind(this);
n(this.el).on("focus change blur", s, t), B.eventEmitter.bind("CALENDAR:dates_changed CALENDAR:dayclick", t), _r_();
}
r.prototype = r.prototype || {}, r.prototype.eventHandler = function(e) {
_i_("4ab:c680ff8a"), this._timeoutId && clearTimeout(this._timeoutId), this._timeoutId = null, "focusout" === e.type || "blur" === e.type ? this._timeoutId = setTimeout(this.deny.bind(this), 100) :this.allow(), _r_();
}, r.prototype.deny = function() {
if (_i_("4ab:3ab34bf4"), "deny" === this.state) return _r_();
this.state = "deny", a.deny(this.el), _r_();
}, r.prototype.allow = function() {
if (_i_("4ab:7603ee45"), "allow" === this.state) return _r_();
this.state = "allow", a.allow(this.el), _r_();
}, i.exports = r, _r_();
}), B.define("component/search/group/children-ages-tooltip", function(e, t, i) {
"use strict";
_i_("4ab:d930ee05");
var n = e("jquery"), a = e("jstmpl"), s = e("component"), r = e("events");
i.exports = s.extend({
init:function() {
_i_("4ab:1bcc6f96"), this.dropdown = !1, this.$form = this.$el.closest("form"), this.isPopupAlreadyShown = !1, this.agesSelector = '[name="age"]', this.addEventListeners(), _r_();
},
addEventListeners:function() {
_i_("4ab:d659cffa"), this.$el.change(this.showTooltip.bind(this)), this.$form.delegate(this.agesSelector, "click", this.hideTooltip.bind(this)), B.eventEmitter.bind("CALENDAR:opened", this.hideTooltip.bind(this)), "undefined" != typeof B.hotel.Events && (r.on(B.hotel.Events.RT.LIGHTBOX_CLOSE, this.hideTooltip.bind(this)), r.on(B.hotel.Events.RT.LIGHTBOX_OPEN, this.hideTooltip.bind(this))), _r_();
},
showTooltip:function() {
_i_("4ab:776e88ab");
var e = parseInt(this.$el.val()) > 0;
if (e && !this.isPopupAlreadyShown) var t = setTimeout(function() {
_i_("4ab:c3442845");
var e = this.$form.find(this.agesSelector).eq(0);
if (0 === e.length) return _r_();
this.dropdown = n.fly.dropdown.extend({
defaults:{
position:"bottom left",
content:function() {
return _i_("4ab:ce5204be"), _r_(a("searchbox_children_ages_tooltip").render({}));
},
extraClass:"searchbox_children_ages_tooltip"
}
}).create(e[0]), this.dropdown.show(), this.isPopupAlreadyShown = !0, clearTimeout(t), _r_();
}.bind(this), 0);
_r_();
},
hideTooltip:function() {
_i_("4ab:f7ccaced"), this.dropdown && (this.dropdown.hide(), this.dropdown.destroy()), _r_();
}
}), _r_();
}), B.define("component/search/group/add-children-tooltip", function(e, t, i) {
"use strict";
_i_("4ab:61c7b5d3");
var n = e("jquery"), a = B.env.rtl ? "left" :"right", s = "searchbox_children_tooltip", r = null, o = null === B.browserStorageHandler.getSessionValue("gs_sb_add_children_tooltip"), _ = e("component");
i.exports = _.extend({
init:function() {
_i_("4ab:b89a9bb1"), o && this.$el.data("add-children-tooltip") && (this.showTooltip(), B.browserStorageHandler.addSessionValue("gs_sb_add_children_tooltip", 1), o = !1, B.eventEmitter.bind("CALENDAR:opened", this.hideTooltip), n(".sb-destination__input").on("focus", this.hideTooltip)), _r_();
},
showTooltip:function() {
_i_("4ab:439aa3e2");
var e = this.$el;
r && r.hide(), r = n.fly.dropdown.extend({
defaults:{
position:a,
content:function() {
return _i_("4ab:8385062d"), _r_(e.data("add-children-tooltip"));
},
extraClass:s
},
actions:{
click:function(e) {
_i_("4ab:ae1f5f37"), n(e.target).is("select") && this.hide(), _r_();
}
},
_autohide:function() {},
init:function() {
_i_("4ab:3d8323e5"), this.bind(this.events.show, function() {
_i_("4ab:1b8e83a1"), n("." + s).delegate(".fly-dropdown-close", "click", function(e) {
_i_("4ab:edc671d6"), r.hide(), _r_();
}), _r_();
}), _r_();
}
}).create(e), r.show(), _r_();
},
hideTooltip:function() {
_i_("4ab:ed78e032"), r && r.hide(), _r_();
}
}), _r_();
}), booking.jstmpl("guest_errors", function() {
_i_("4ab:1cef0adf");
var e = [ "\n	", "\n		", "/private/iq_sbox_error_flights_group_size/name", "\n\n	", "\n\n\n\n\n\n", "\n\n    ", "\n        ", "data-", '="', '"', "\n    ", " data-", '<div data-component="onview-animate" data-anim-type="fadeInBottom"> ', '<div class="fe_banner ', "fe_banner__scale_small ", "fe_banner__w-icon ", "fe_banner__w-dismiss ", "fe_banner__", " ", "fe_banner__w-icon-", "fe_banner__bp fe_banner__inherit_font_size ", ' " ', 'id="', '" ', 'role="alert"', "> ", '<i class="fe_banner__icon ', '" aria-hidden="true"></i> ', '<img class="fe_banner__icon" src="', '"> ', '<span class="fe_banner__icon"> ', " </span> ", '<div class="fe_banner__btn_container"> <div class="fe_banner__btn_container_content"> ', '<h3 class="fe_banner__title"> ', " </h3> ", '<div class="fe_banner__message ', "fe_banner__genius-trial", " </div> ", '</div> <div class="fe_banner__button"> ', "</div> ", '<span class="fe_banner__dismiss js-close"><i class="bicon-btnclose" aria-label="close"></i></span> ', '<form action="', "/genius_activate_trial", '" class="fe_banner__genius-banner-form" method="post"> <input type="hidden" name="return_url" value="', '"> <input type="hidden" name="src" value="hp_banner"> <input type="hidden" name="campaign_id" value="', '"> <input type="submit" class="button fe_banner__genius-banner-button" value="', '"> </form> ', "\n", "\n\n\n\n", "\n\n", "0", "red" ], t = [ "fe_error_message", "fe_banner__data", "fe_banner__data_id", "fe_banner__data_value", "fe_banner__data_id_2", "fe_banner__data_value_2", "fe_banner__data_id_3", "fe_banner__data_value_3", "fe_banner__data_id_4", "fe_banner__data_value_4", "fe_banner__data_id_5", "fe_banner__data_value_5", "fe_banner__animate", "fe_banner__scale", "fe_banner__icon_class", "fe_banner__icon_img_url", "fe_banner__icon_svg", "fe_banner__close_button", "fe_banner__color_scheme", "fe_banner__color_scheme_classes", "fe_banner__icon_size", "b_action", "fe_banner__extra_classes", "fe_banner__id", "fe_banner__aria_alert", "fe_banner__btn_include", "fe_banner__title_text", "fe_banner__start_genius_trial", "fe_banner__message_text", "b_secure_hostname", "b_query_params_with_lang", "b_original_url", "fe_ge_trial_desktop_campaign_id", "ge_expand_hp_trial_sidebar_cta", "fe_banner__banners_count", "fe_error" ];
return _r_(function(i) {
_i_("4ab:9da72190");
var n = "", a = this.fn;
function s(n) {
return _i_("4ab:7beee42f"), a.MJ(a.MB(t[35])) && (n += e[0], a.MN(t[0], [ e[1], a.ME(e[2], a.MB, a.MN, null), e[0] ].join("")), n += e[3], i.unshift({
fe_banner__close_button:e[50],
fe_banner__color_scheme:e[51],
fe_banner__message_text:a.MB(t[0])
}), n = r(n), i.shift(), n += e[47]), n += e[47], _r_(n);
}
function r(i) {
if (_i_("4ab:4afdd192"), i += e[4], a.MD(t[28])) {
i += e[5], a.MD(t[2]) && (i += e[6], a.MN(t[1], [ e[7], a.MB(t[2]), e[8], a.MB(t[3]), e[9] ].join("")), i += e[10]), i += e[5], a.MD(t[4]) && (i += e[6], a.MN(t[1], [ a.MB(t[1]), e[11], a.MB(t[4]), e[8], a.MB(t[5]), e[9] ].join("")), i += e[10]), i += e[5], a.MD(t[6]) && (i += e[6], a.MN(t[1], [ a.MB(t[1]), e[11], a.MB(t[6]), e[8], a.MB(t[7]), e[9] ].join("")), i += e[10]), i += e[5], a.MD(t[8]) && (i += e[6], a.MN(t[1], [ a.MB(t[1]), e[11], a.MB(t[8]), e[8], a.MB(t[9]), e[9] ].join("")), i += e[10]), i += e[5], a.MD(t[10]) && (i += e[6], a.MN(t[1], [ a.MB(t[1]), e[11], a.MB(t[10]), e[8], a.MB(t[11]), e[9] ].join("")), i += e[10]), i += e[5], a.MD(t[12]) && (i += e[12]), i += e[13];
var n = a.MB(t[13]);
a.MJ(n + "" == "small") && (i += e[14]), (a.MJ(a.MB(t[14])) || a.MJ(a.MB(t[15])) || a.MJ(a.MB(t[16]))) && (i += e[15]), a.MD(t[17]) && (i += e[16]), a.MJ(a.MB(t[18])) && (i += [ e[17], a.MC(t[18]), a.MC(t[19]), e[18] ].join("")), a.MJ(a.MB(t[14])) && a.MJ(a.MB(t[20])) && (i += [ e[19], a.MC(t[20]), e[18] ].join("")), a.MJ(a.MC(t[21]) + "" == "book") && (i += e[20]), i += [ a.MC(t[22]), e[21] ].join(""), a.MD(t[23]) && (i += [ e[22], a.MC(t[23]), e[23] ].join("")), a.MD(t[1]) && (i += [ a.MC(t[1]), e[18] ].join("")), a.MD(t[24]) && (i += e[24]), i += e[25], a.MD(t[14]) ? i += [ e[26], a.MC(t[14]), e[27] ].join("") :a.MD(t[15]) ? i += [ e[28], a.MC(t[15]), e[29] ].join("") :a.MD(t[16]) && (i += [ e[30], a.MC(t[16]), e[31] ].join("")), a.MD(t[25]) && (i += e[32]), a.MD(t[26]) && (i += [ e[33], a.MC(t[26]), e[34] ].join("")), a.MD(t[28]) && (i += e[35], a.MD(t[27]) && (i += e[36]), i += [ e[29], a.MC(t[28]), e[37] ].join("")), a.MD(t[25]) && (i += [ e[38], a.MC(t[25]), e[37] ].join("")), a.MD(t[25]) && (i += e[39]), a.MD(t[17]) && (i += e[40]), a.MD(t[27]) && (i += [ e[41], a.MC(t[29]), e[42], a.MC(t[30]), e[43], a.MC(t[31]), e[44], a.MB(t[32]), e[45], a.MB(t[33]), e[46] ].join("")), i += e[39], a.MD(t[12]) && (i += e[39]), i += e[47];
}
return i += e[48], a.MN(t[18], void 0), i += e[47], a.MN(t[14], void 0), i += e[47], a.MN(t[15], void 0), i += e[47], a.MN(t[16], void 0), i += e[47], a.MN(t[20], void 0), i += e[47], a.MN(t[26], void 0), i += e[47], a.MN(t[28], void 0), i += e[47], a.MN(t[25], void 0), i += e[47], a.MN(t[17], void 0), i += e[47], a.MN(t[23], void 0), i += e[47], a.MN(t[22], void 0), i += e[47], a.MN(t[13], void 0), i += e[49], a.MN(t[2], void 0), i += e[47], a.MN(t[3], void 0), i += e[47], a.MN(t[4], void 0), i += e[47], a.MN(t[5], void 0), i += e[47], a.MN(t[6], void 0), i += e[47], a.MN(t[7], void 0), i += e[47], a.MN(t[8], void 0), i += e[47], a.MN(t[9], void 0), i += e[47], a.MN(t[10], void 0), i += e[47], a.MN(t[11], void 0), i += e[49], a.MN(t[19], void 0), i += e[49], a.MN(t[1], void 0), i += e[47], a.MN("fe_banner__banners_count", a.MI(a.MB(t[34])) + a.MI(1)), i += e[49], a.MJ(a.MC(t[21]) + "" == "book") && a.MJ(a.track_experiment_stage("bp_banner_module_normalize_banners", 2)) ? i += e[47] :a.MJ(a.track_experiment_stage("bp_banner_module_normalize_banners", 1)) && (i += e[47]), i += e[47], _r_(i);
}
return n += e[0], n = s(n), n += e[47], _r_(n);
});
}()), B.define("component/xp-index/guest-errors", function(e, t, i) {
"use strict";
_i_("4ab:36d31440");
var n = e("component"), a = e("jstmpl"), s = e("read-data-options"), r = e("search/searchbox/model");
i.exports = n.extend({
init:function() {
_i_("4ab:03f6e29f"), this.options = s(this.el, {
modelId:{
name:"sb-id",
type:String,
required:!0
}
}), this.model = r.getInstance(this.options.modelId), this.model.use("group"), this.model.on("validation", this.modelValidation.bind(this)), this.template = a("guest_errors"), _r_();
},
modelValidation:function(e) {
if (_i_("4ab:136a7bfb"), "group" !== e.group) return _r_();
var t = s(this.el, {
viewId:{
name:"view-id",
type:String,
required:!0
}
});
e.valid ? this.$el.html("") :this.$el.html(this.template.render({
fe_error:e.validationError,
fe_new:!0,
fe_view:t.viewId
})), _r_();
}
}), _r_();
}), B.define("component/search/group/group-with-modal", function(e, t, i) {
_i_("4ab:7f9c8bbf");
var n = e("component"), a = e("search/searchbox/model"), s = e("read-data-options"), r = e("jquery");
i.exports = n.extend({
init:function() {
_i_("4ab:7373343b"), this.options = s(this.$el, {
modelId:{
name:"sb-id",
type:String,
required:!0
}
}), this.$modal = this.$el.find("[data-group-modal]"), this.$toggle = this.$el.find("[data-group-toggle]"), this.model = a.getInstance(this.options.modelId), this.model.use("group"), this.$roomCount = this.$el.find("[data-room-count]"), this.$guestCount = this.$el.find("[data-guest-count]"), this.$adultsCount = this.$el.find("[data-adults-count]"), this.$childrenCount = this.$el.find("[data-children-count]"), this.addModelListeners(), this.addEventListeners(), this.$el.find("#xp__guests__input").remove(), _r_();
},
addModelListeners:function() {
_i_("4ab:8d3cbca2"), this.model.on("change", this.modelChange.bind(this)), this.model.on("init", this.modelChange.bind(this)), _r_();
},
addEventListeners:function() {
_i_("4ab:66fdfc06"), this.$toggle.on("click", function(e) {
_i_("4ab:421bf86a"), this.$modal.toggleClass("hidden"), this.$toggle[this.$modal.hasClass("hidden") ? "removeAttr" :"attr"]("data-group-toggle-shown", 1), _r_();
}.bind(this)), r(document).on("mouseup", function(e) {
_i_("4ab:956f8b44"), r(e.target).closest(this.$el).length || (this.$modal.addClass("hidden"), this.$toggle.removeAttr("data-group-toggle-shown")), _r_();
}.bind(this)), _r_();
},
modelChange:function(e) {
_i_("4ab:201be9ef"), "group" == e.group && this.render(), _r_();
},
render:function(e) {
_i_("4ab:6385c253");
var e = this.model.group.get(), t = +e.adults_count, i = e.children_ages.length, n = t + i;
this.$roomCount.html(B.jstmpl.translations("iq_sbox_accommodation_num_rooms", e.rooms_count, {
num_rooms:e.rooms_count
})), this.$adultsCount.html(B.jstmpl.translations("sxp_index_sbox_horizontal_adults", t, {
num_adults:t
})), this.$guestCount.html(B.jstmpl.translations("iq_sbox_accommodation_num_guests", n, {
num_guests:n
})), this.$childrenCount.html(B.jstmpl.translations("sxp_lp_sbox_num_children", i, {
num_children:i
})), _r_();
}
}), _r_();
}), B.define("component/search/searchbox/searchbox-xp", function(e, t, i) {
"use strict";
_i_("4ab:8255b6c1");
var n = e("component/search/searchbox/searchbox"), a = e("jquery");
i.exports = n.extend({
init:function() {
_i_("4ab:4b6fb5ae"), n.prototype.init.apply(this, arguments), this.model.use("dates"), this.model.on("change-mode", this.onChangeMode.bind(this)), this.addDestinationLogic(), this.addCalendarsLogic(), _r_();
},
addDestinationLogic:function() {
_i_("4ab:f8634e75");
var e = this.$el.find("[data-destination-input]");
e.find("#ss").on("focus", function() {
_i_("4ab:e28c388e"), e.find("#destination__error").removeClass("-visible"), e.find(".sb-searchbox__error").hide(), _r_();
}.bind(this)), _r_();
},
addCalendarsLogic:function() {
_i_("4ab:22514955");
var e = a("body"), t = this.$el.find(".xp__dates"), i = this.$el.find("[data-dates-errors]");
B.env.b_hijri_calendar_available && e.addClass("c2-wrapper-s-has-hijri-calendar"), B.eventEmitter.on("CALENDAR:opened", function(n, a) {
_i_("4ab:a82723ae"), t.attr("data-calendar-shown", 1), i.html(""), e.addClass("calendar-open"), _r_();
}), B.eventEmitter.on("CALENDAR:closed", function(i, n) {
_i_("4ab:dd794775"), t.removeAttr("data-calendar-shown"), e.removeClass("calendar-open"), _r_();
}), _r_();
},
onChangeMode:function(e) {
_i_("4ab:9e7a4011"), "accommodation" == e && (this.model.setFormAction(B.env.fe_sb_accommodation_search_url), this.model.destination && this.model.destination.configure({
validate:!1
}), this.model.emit("change", {})), _r_();
}
}), _r_();
}), B.define("component/search/dates/prompt", function(e, t, i) {
"use strict";
_i_("4ab:421396a0");
var n = "sb-dates-prompt-dismissed", a = 200, s = "mdot" === B.env.b_site_type, r = e("component"), o = e("click-out"), _ = !s && "searchresults" === B.env.b_action && e("searchresults/events");
i.exports = r.extend({
init:function() {
if (_i_("4ab:68a10fba"), this.boundHide = this.hide.bind(this), this.boundCleanUp = this.cleanUp.bind(this), this.$el.find(".sb-dates-prompt__close").on("click", this.dismiss.bind(this)), this.isDismissed()) return _r_();
_ && this.isLandingScrollStarted() ? _.once(_.UI_LANDING_SCROLL_COMPLETED, this.show.bind(this)) :this.show(), _r_();
},
show:function() {
if (_i_("4ab:eaede618"), this.hiding) return _r_();
this.$el.removeClass("g-hidden").addClass("fadein"), this.monitorId = o.addMonitor(this.el, this.boundHide), _r_();
},
hide:function() {
_i_("4ab:22797725"), this.hiding = !0, this.$el.removeClass("fadein").addClass("fadeout"), window.setTimeout(this.boundCleanUp, a), _r_();
},
dismiss:function() {
_i_("4ab:0745977a"), l(), this.hide(), _r_();
},
cleanUp:function() {
_i_("4ab:3ecc2689"), this.monitorId && o.removeMonitor(this.monitorId), this.$el.addClass("g-hidden").removeClass("fadeout"), this.hiding = !1, _r_();
},
isDismissed:function() {
_i_("4ab:98bc85c0");
var e = s ? B.storage({
key:n,
location:"sessionstorage"
}) :"true" === B.browserStorageHandler.getSessionValue(n);
return _r_(e);
},
isLandingScrollStarted:function() {
return _i_("4ab:f6bb9fa1"), _r_(B.sr && B.sr.landingScrollStarted || B.env.fe_landing_scroll_started);
}
});
function l() {
_i_("4ab:45a788dc"), s ? B.storage({
key:n,
value:!0,
location:"sessionstorage"
}) :B.browserStorageHandler.addSessionValue(n, !0), _r_();
}
_r_();
}), B.define("component/search/dates/date-field-select", function(e, t, i) {
"use strict";
_i_("4ab:de078838");
var n = "OTfdASFVFYBMFSIJWe", a = e("et"), s = e("component"), r = e("read-data-options"), o = e("search/searchbox/model"), _ = e("formatting/date"), l = e("ga-tracker"), d = "checkin", h = 12, c = "-", u = {
display:"[data-display]",
controls:"[data-controls]",
field:"[data-field]",
iconDay:"[data-icon-day]",
part:".js-date-field__part",
select:".js-date-field__select",
value:".js-date-field__value",
partMonthYear:'.js-date-field__part[data-type="month-year"]',
partDate:'.js-date-field__part[data-type="date"]',
inputYear:".js-date-field__year",
inputMonth:".js-date-field__month"
}, f = {
emptyMode:"-empty",
editMode:"-editing",
editSelectMode:"-editing-select",
selectDisabled:"sb-date-field__select_disabled",
selectFocused:"sb-date-field__select_focused",
valueEmpty:"sb-date-field__value_empty"
};
i.exports = s.extend({
init:function() {
_i_("4ab:7821d9ea"), this.options = r(this.el, {
forceInitRender:{
name:"force-init-render",
type:Boolean,
defaultValue:!1
},
modelId:{
name:"sb-id",
type:String,
required:!0
},
modelMode:{
name:"mode",
type:String,
defaultValue:"single"
},
validators:{
name:"validators",
type:String,
defaultValue:""
}
});
var e = this.options.validators.split(",");
this.model = o.getInstance(this.options.modelId), this.model.use("dates"), this.model.on("change", this.handleModelChange.bind(this)), this.model.dates.configure({
noValidation:!0,
allowMaxLos:!0,
notEmpty:e.indexOf("not-empty") >= 0
}), this.$display = this.$el.find(u.display), this.$iconDay = this.$el.find(u.iconDay), this.$controls = this.$el.find(u.controls), this.$field = this.$el.find(u.field), this.$part = this.$el.find(u.part), this.$monthYear = this.$el.find(u.partMonthYear), this.$monthYearSelect = this.$monthYear.find(u.select), this.$date = this.$el.find(u.partDate), this.$dateSelect = this.$date.find(u.select), this.$select = this.$el.find(u.select), this.$inputYear = this.$el.find(u.inputYear), this.$inputMonth = this.$el.find(u.inputMonth), this.$part.on("focus", u.select, this.handleSelectFocus.bind(this)), this.$part.on("blur", u.select, this.handleSelectBlur.bind(this)), this.$monthYearSelect.on("change", this.handleMonthYearChange.bind(this)), this.$dateSelect.on("change", this.handleDateChange.bind(this)), this.$select.one("focus", this.trackSelectFocus.bind(this)), this.initModel.call(this), _r_();
},
initModel:function() {
_i_("4ab:e3c0ae27");
var e = this.$inputYear.val(), t = this.$inputMonth.val(), i = this.$dateSelect.attr("data-selected"), n = e && t && i;
this.model.dates.initDate(this.options.modelMode, n && {
year:+e,
month:+t - 1,
day:+i
}), this.renderFields.call(this), _r_();
},
toggleMode:function(e) {
_i_("4ab:6724bf1f"), this.$field.toggleClass(f.editMode, e), this.$field.toggleClass(f.editSelectMode, e), _r_();
},
trackSelectFocus:function() {
_i_("4ab:6596f512"), a.customGoal(n, 1), l.trackEvent(l.SearchBoxTracker, "Keyboard Focus", this.options.modelMode + " field"), _r_();
},
handleModelChange:function() {
_i_("4ab:3aeed71d"), this.renderFields.call(this), _r_();
},
handleSelectFocus:function(e) {
_i_("4ab:71e33903"), clearTimeout(this.inputBlurTimer), $(e.delegateTarget).addClass(f.selectFocused), this.toggleMode(!0), setTimeout(function() {
_i_("4ab:a6a7913e"), this.model.dates.startEditing(), _r_();
}.bind(this)), _r_();
},
handleSelectBlur:function(e) {
_i_("4ab:ea58a611"), $(e.delegateTarget).removeClass(f.selectFocused), this.toggleMode(!1), this.inputBlurTimer = setTimeout(function() {
_i_("4ab:0b178f6b"), this.applyChange(), _r_();
}.bind(this)), _r_();
},
handleMonthYearChange:function(e) {
_i_("4ab:678302e0");
var t = this.options.modelMode, i = e.target, s = i.value.split(c);
this.model.dates.setEditingFragment(t, "month", +s[0]), this.model.dates.setEditingFragment(t, "year", +s[1]), this.model.dates.setEditingFragment(t, "day", null), a.customGoal(n, 2), _r_();
},
handleDateChange:function(e) {
_i_("4ab:f0c0de74");
var t = e.target, i = this.options.modelMode;
this.renderDateValue.call(this), this.model.dates.setEditingFragment(i, "day", +t.value), this.applyChange.call(this), a.customGoal(n, 3), _r_();
},
applyChange:function() {
_i_("4ab:a241b52f");
var e = this.model.dates.get();
if (!e["editing_" + this.options.modelMode]) return _r_();
this.model.dates.applyEditing(this.options.modelMode), _r_();
},
getOptionHtml:function(e, t, i) {
_i_("4ab:2825281e");
var n, a = [];
if (i) for (var s in i) if (i.hasOwnProperty(s)) {
var r = i[s];
if (!r) break;
n = s, "boolean" != typeof r && (n += "=" + r), a.push(n);
}
return _r_('<option value="' + e + '" ' + a.join(" ") + ">" + t + "</option>");
},
renderMonthYearField:function() {
_i_("4ab:8eecea0e");
var e = this.options.modelMode, t = this.model.dates.get(), i = t[e], n = t["editing_" + e], a = n || i, s = this.$monthYearSelect, r = e === d ? t.firstValidDay :t.firstValidCheckoutDay, o = t.lastValidDay, l = r.month, u = o.month, f = r.year, p = o.year;
for (s.html(this.getOptionHtml("", "", {
disabled:!0,
selected:!a
})); u >= l || p > f; ) {
var b = l + 1, m = _.format({
year:f,
month:b,
day:0
}, "month_with_year"), g = [ l, f ].join(c);
s.append(this.getOptionHtml(g, m, {
selected:a && l === a.month && f === a.year
})), b === h ? (l = 0, f += 1) :l += 1;
}
this.renderMonthYearValue.call(this), _r_();
},
renderDateField:function() {
_i_("4ab:fae83e5d");
var e = this.options.modelMode, t = this.model.dates.get(), i = t[e], n = t["editing_" + e], a = n || i, s = a && a.month, r = a && a.year, o = "number" != typeof s, l = !o && new Date(r, s, 1), h = e === d ? t.firstValidDay :t.firstValidCheckoutDay, c = t.lastValidDay, u = e === d ? c.day - 1 :c.day, p = this.$dateSelect;
if (p.html(this.getOptionHtml("", "", {
disabled:!0,
selected:!a || !a.day
})), p.prop("disabled", o), this.$date.toggleClass(f.selectDisabled, o), l) for (;l.getMonth() === s; ) {
var b = l.getDate(), m = s === h.month && r === h.year ? b >= h.day :!0, g = s === c.month && r === c.year ? u >= b :!0;
if (m && g) {
var v = _.format({
year:r,
month:s,
day:b
}, "{day_of_month}, {weekday}");
p.append(this.getOptionHtml(b, v, {
selected:a && a.day === b
}));
}
l.setDate(b + 1);
}
this.renderDateValue.call(this), _r_();
},
renderValue:function(e, t) {
_i_("4ab:1b9b0a94");
var i = t.find(u.value), n = e.options[e.selectedIndex], a = i.data("placeholder") || "", s = n && !n.disabled;
i.text(s ? n.innerHTML :a), i.toggleClass(f.valueEmpty, !s), _r_();
},
renderMonthYearValue:function() {
_i_("4ab:f4ece69f"), this.renderValue(this.$monthYearSelect[0], this.$monthYear), _r_();
},
renderDateValue:function() {
_i_("4ab:b15ca074"), this.renderValue(this.$dateSelect[0], this.$date), _r_();
},
renderFields:function() {
_i_("4ab:23a3b6a3");
var e = this.options.modelMode, t = this.model.dates.get(), i = t[e], n = t["editing_" + e], a = n || i, s = n && !n.complete;
if (this.renderMonthYearField.call(this), this.renderDateField.call(this), a && "number" == typeof a.month && this.$inputMonth.val(a.month + 1), a && "number" == typeof a.year && this.$inputYear.val(a.year), a && "number" == typeof a.day && this.$dateSelect.val(a.day), !s && i) {
var r = this.$display.data("date-format") || "date_with_weekday";
this.$field.removeClass(f.emptyMode), this.$display.html(_.format(i, r)), this.$iconDay.html(_.format(i, "{day_of_month}"));
}
s || i || (this.$field.addClass(f.emptyMode), this.$display.html(this.$display.attr("data-placeholder")), this.$iconDay.html(this.$iconDay.attr("data-placeholder"))), _r_();
}
}), _r_();
}), B.when({
events:"ready",
condition:"www" === B.env.b_site_type
}).run(function(e) {
_i_("4ab:de521f2a");
var t, i = e("jquery");
document.addEventListener("mousedown", function() {
_i_("4ab:b4693e48"), t = !0, _r_();
}), document.addEventListener("mouseup", function() {
_i_("4ab:ca4c9650"), t = !1, _r_();
}), document.addEventListener("focusin", function(e) {
_i_("4ab:df3f5640");
var n = !!i(e.target).closest(".c2-wrapper").length, a = i(e.relatedTarget).closest(".sb-searchbox").length;
n && a && !t && B.et.stage("OTfdASFVFYBMFSIJWe", 1), _r_();
}), _r_();
}), B.define("component/search/dates/single-calendar", function(e, t, i) {
"use strict";
_i_("4ab:094aca0d");
var n = e("component"), a = e("formatting/date"), s = B.require("window-scroller");
i.exports = n.extend({
init:function() {
if (_i_("4ab:78038e2d"), "index" !== B.env.b_action) return _r_();
if (this.$calendar = $(".xp-calendar .bui-calendar"), 0 === this.$calendar.length) return _r_();
this.calendarMounted = !1, this.calendarOpen = !1, this.EDGE_MARGIN = 10, this.checkinPlaceholder = $('.sb-date-field[data-mode="checkin"] .sb-date-field__display').data("placeholder"), this.checkoutPlaceholder = $('.sb-date-field[data-mode="checkout"] .sb-date-field__display').data("placeholder");
var e = this, t = {
monthsToShow:2,
renderOnHover:1,
allowSameDateSelection:0,
dayNames:{
monday:"Mon",
tuesday:"Tue",
wednesday:"Wed",
thursday:"Thu",
friday:"Fri",
saturday:"Sat",
sunday:"Sun"
},
monthNames:{
january:"January",
february:"February",
march:"March",
april:"April",
may:"May",
june:"June",
july:"July",
august:"August",
september:"September",
october:"October",
november:"November",
december:"December"
},
renderSelected:function(t) {
_i_("4ab:41f59e6b");
var i = t.startDate, n = t.endDate;
if (i && n && n > i) {
var a = e.getFormattedDate(i), s = e.getFormattedDate(n), r = B.jstmpl.translations("ss_sxp_index_sbox_calendar_num_night_stay", null, {
num_nights:Math.floor((n - i) / 864e5)
});
if (B.env.rtl) return _r_("(" + r + ") " + a + " - " + s);
return _r_(a + " - " + s + " " + r);
}
if (i) {
var a = e.getFormattedDate(i);
return _r_(a + " - " + e.checkoutPlaceholder);
}
return _r_(e.checkinPlaceholder + " - " + e.checkoutPlaceholder);
},
onDateChange:function(t) {
_i_("4ab:63295cfc");
var i = t.startDate, n = t.endDate;
if (i) {
var a = Date.UTC(i.getFullYear(), i.getMonth(), i.getDate(), 0, 0, 0, 0);
if ($(".c2-wrapper-s-checkin .c2-day[data-id=" + a + "]").trigger("click"), !n) {
var s = $(".c2-wrapper-s-checkout .sb-date-field__display");
s.text(e.checkoutPlaceholder);
}
}
if (n) {
var a = Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0, 0);
$(".c2-wrapper-s-checkout .c2-day[data-id=" + a + "]").trigger("click");
}
i && n && e.hideCalendar(), _r_();
}
};
if (B.env.b_simple_weekdays && 7 === B.env.b_simple_weekdays.length) {
var i = 0;
for (var n in t.dayNames) t.dayNames[n] = B.env.b_simple_weekdays[i], i++;
}
if (B.env.b_short_months && 12 === B.env.b_short_months.length) {
var i = 0;
for (var n in t.monthNames) t.monthNames[n] = B.env.b_short_months[i], i++;
}
B.env.sunday_first && $.extend(t, {
firstWeekDay:7
});
var a = this.getMinMaxDates();
$.extend(t, a);
var s = this.getCurrentDates();
s && $.extend(t, s), this.calendarInstance = window.BUI.createInstance("Calendar", this.$calendar[0], t), this.bindEvents(), _r_();
},
bindEvents:function() {
_i_("4ab:411ac602"), $(".xp__dates").on("mousedown touchstart", $.proxy(function() {
_i_("4ab:f341dcce"), this.calendarMounted || this.mountCalendar(), this.calendarOpen ? this.hideCalendar() :this.showCalendar(), _r_();
}, this)), $(document).on("click", $.proxy(function(e) {
_i_("4ab:0e84e070");
var t = $(e.target), i = t.parents(".xp-calendar");
t.hasClass("xp-calendar") || 0 !== i.length || this.hideCalendar(), _r_();
}, this)), $(".xp__dates").one("mouseenter touchstart", $.proxy(function() {
_i_("4ab:3ee3c73b"), this.calendarMounted || this.mountCalendar(), _r_();
}, this)), _r_();
},
getMinMaxDates:function() {
_i_("4ab:66786cae");
var e = new Date(), t = new Date();
return B.env.b_search_max_months ? (t.setMonth(t.getMonth() + B.env.b_search_max_months), t.setDate(0)) :t = new Date(t.getFullYear() + 1, t.getMonth() + 1, 0), _r_({
minDate:e.getFullYear() + "-" + this.doubleDigitify(e.getMonth() + 1) + "-" + this.doubleDigitify(e.getDate()),
maxDate:t.getFullYear() + "-" + this.doubleDigitify(t.getMonth() + 1) + "-" + this.doubleDigitify(t.getDate())
});
},
getCurrentDates:function() {
_i_("4ab:5aee0da4");
var e, t = $("input[name=checkin_year]") && $("input[name=checkin_year]").val(), i = $("input[name=checkin_month]") && $("input[name=checkin_month]").val(), n = $("input[name=checkin_monthday]") && $("input[name=checkin_monthday]").val();
t && i && n && (e = t + "-" + this.doubleDigitify(i) + "-" + this.doubleDigitify(n));
var a, s = $("input[name=checkout_year]") && $("input[name=checkout_year]").val(), r = $("input[name=checkout_month]") && $("input[name=checkout_month]").val(), o = $("input[name=checkout_monthday]") && $("input[name=checkout_monthday]").val();
if (s && r && o && (a = s + "-" + this.doubleDigitify(r) + "-" + this.doubleDigitify(o)), e && a) return _r_({
startDate:e,
endDate:a
});
return _r_(null);
},
mountCalendar:function() {
_i_("4ab:70eb7d39"), $(".c2-wrapper-s-checkin").trigger("mouseenter.calendar2"), $(".c2-wrapper-s-checkout").trigger("mouseenter.calendar2"), this.calendarInstance.mount(), this.calendarMounted = !0, _r_();
},
showCalendar:function() {
_i_("4ab:3a0bb167"), $("[data-dates-errors]").html("");
var e = $(".xp__dates-inner").offset().top - $(".xpi__searchbox").offset().top + $(".xp__dates-inner").height() + 12;
if (B.env.rtl) {
var t = $(".sb-destination").width() + 13;
this.$calendar.css({
top:e,
right:t,
left:"auto"
}).show();
} else {
var i = $(".xp__dates-inner").offset().left - $(".xpi__searchbox").offset().left;
this.$calendar.css({
top:e,
left:i
}).show();
}
this.calendarOpen = !0;
var n = $(window), a = n.scrollTop(), r = this.$calendar, o = this.EDGE_MARGIN + r.offset().top + r.outerHeight() - n.height();
o > a && s.scrollToOffset(o), B.et.stage("UBKeJAEYBXYQCLBMC", 1), _r_();
},
hideCalendar:function() {
_i_("4ab:ed0eb7c1"), this.$calendar.hide(), this.calendarOpen = !1, _r_();
},
getFormattedDate:function(e) {
_i_("4ab:1b434eec");
var t = $(".sb-date-field__display").data("date-format") || "date_with_weekday";
return _r_(a.format({
day:e.getDate(),
month:e.getMonth(),
year:e.getFullYear()
}, t));
},
doubleDigitify:function(e) {
return _i_("4ab:decc04c7"), _r_(("0" + e).slice(-2));
}
}), _r_();
});