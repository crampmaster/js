!function() {
/**
     * @license almond 0.3.0 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
     * Available via the MIT or new BSD license.
     * see: http://github.com/jrburke/almond for details
     */
var e, t, n;
!function(r) {
var i, o, a, u, s = {}, f = {}, c = {}, l = {}, p = Object.prototype.hasOwnProperty, h = [].slice, d = /\.js$/;
function v(e) {
var t = {};
return e && "[object Function]" === t.toString.call(e);
}
function _(e, t) {
var n = B.env && B.env.b_dev_server, r = v(B.reportError) && B.reportError.bind(B), i = !r;
if (n || i) throw new Error(e);
r({
message:e
}, t);
}
function m(e, t) {
return p.call(e, t);
}
function g(e, t) {
var n, r, i, o, a, u, s, f, l, p, h, v = t && t.split("/"), _ = c.map, m = _ && _["*"] || {};
if (e && "." === e.charAt(0)) if (t) {
for (v = v.slice(0, v.length - 1), e = e.split("/"), a = e.length - 1, c.nodeIdCompat && d.test(e[a]) && (e[a] = e[a].replace(d, "")), e = v.concat(e), l = 0; l < e.length; l += 1) if (h = e[l], "." === h) e.splice(l, 1), l -= 1; else if (".." === h) {
if (1 === l && (".." === e[2] || ".." === e[0])) break;
l > 0 && (e.splice(l - 1, 2), l -= 2);
}
e = e.join("/");
} else 0 === e.indexOf("./") && (e = e.substring(2));
if ((v || m) && _) {
for (n = e.split("/"), l = n.length; l > 0; l -= 1) {
if (r = n.slice(0, l).join("/"), v) for (p = v.length; p > 0; p -= 1) if (i = _[v.slice(0, p).join("/")], i && (i = i[r])) {
o = i, u = l;
break;
}
if (o) break;
!s && m && m[r] && (s = m[r], f = l);
}
!o && s && (o = s, u = f), o && (n.splice(0, u, o), e = n.join("/"));
}
return e;
}
function y(e, t) {
return function() {
var n = h.call(arguments, 0);
return "string" != typeof n[0] && 1 === n.length && n.push(null), o.apply(r, n.concat([ e, t ]));
};
}
function w(e) {
return function(t) {
return g(t, e);
};
}
function b(e) {
return function(t) {
s[e] = t;
};
}
function T(e) {
if (m(f, e)) {
var t = f[e];
delete f[e], l[e] = !0, i.apply(r, t);
}
return m(s, e) || m(l, e) || _("No " + e, "almond"), s[e];
}
function E(e) {
var t, n = e ? e.indexOf("!") :-1;
return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [ t, e ];
}
a = function(e, t) {
var n, r = E(e), i = r[0];
return e = r[1], i && (i = g(i, t), n = T(i)), i ? e = n && n.normalize ? n.normalize(e, w(t)) :g(e, t) :(e = g(e, t), r = E(e), i = r[0], e = r[1], i && (n = T(i))), {
f:i ? i + "!" + e :e,
n:e,
pr:i,
p:n
};
};
function k(e) {
return function() {
return c && c.config && c.config[e] || {};
};
}
u = {
require:function(e) {
return y(e);
},
exports:function(e) {
var t = s[e];
return "undefined" != typeof t ? t :s[e] = {};
},
module:function(e) {
return {
id:e,
uri:"",
exports:s[e],
config:k(e)
};
}
}, i = function(e, t, n, i) {
var o, c, p, h, d, v, g = [], w = typeof n;
if (i = i || e, "undefined" === w || "function" === w) {
for (t = !t.length && n.length ? [ "require", "exports", "module" ] :t, d = 0; d < t.length; d += 1) h = a(t[d], i), c = h.f, "require" === c ? g[d] = u.require(e) :"exports" === c ? (g[d] = u.exports(e), v = !0) :"module" === c ? o = g[d] = u.module(e) :m(s, c) || m(f, c) || m(l, c) ? g[d] = T(c) :h.p ? (h.p.load(h.n, y(i, !0), b(c), {}), g[d] = s[c]) :_(e + " missing " + c, "almond");
p = n ? n.apply(s[e], g) :void 0, e && (o && o.exports !== r && o.exports !== s[e] ? s[e] = o.exports :p === r && v || (s[e] = p));
} else e && (s[e] = n);
}, e = t = o = function(e, t, n, s, f) {
if ("string" == typeof e) {
if (u[e]) return u[e](t);
return T(a(e, t).f);
}
if (!e.splice) {
if (c = e, c.deps && o(c.deps, c.callback), !t) return;
t.splice ? (e = t, t = n, n = null) :e = r;
}
return t = t || function() {}, "function" == typeof n && (n = s, s = f), s ? i(r, e, t, n) :setTimeout(function() {
i(r, e, t, n);
}, 4), o;
}, o.config = function(e) {
return o(e);
}, e._defined = s, n = function(e, t, n) {
t.splice || (n = t, t = []), m(s, e) || m(f, e) || (f[e] = [ e, t, n ]);
}, n.amd = {
jQuery:!0
};
}(), B.define = n, B.require = t, B.requirejs = e;
}(), "function" != typeof Function.prototype.bind && (Function.prototype.bind = function(e) {
var t = Array.prototype.slice.call(arguments, 1), n = this, r = function() {}, i = function() {
return n.apply(this instanceof r ? this :e || {}, t.concat(Array.prototype.slice.call(arguments)));
};
return r.prototype = this.prototype || {}, i.prototype = new r(), i;
}), "function" != typeof Object.assign && !function() {
Object.assign = function(e) {
"use strict";
if (void 0 === e || null === e) throw new TypeError("Cannot convert undefined or null to object");
for (var t = Object(e), n = 1; n < arguments.length; n++) {
var r = arguments[n];
if (void 0 !== r && null !== r) for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
}
return t;
};
}(), booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.bhc = {
loaded:!0,
run:!1
}), function(e, t) {
"use strict";
if (t.jstmpl) return;
var n, r, i, o, a, u, s, f, c, l, p, h, d, v, _, m, g, y, w, b, T, E, k, x, j, B, A, N, O, S, I, L, C, R, M, q, P, D = [], F = 42;
u = function(e, t) {
this.closure = e, this.name = t;
}, s = function(e) {
var t = [];
return h(t, e, 0), 1 === t.length ? t[0] :t.join("");
}, l = function(e, t, n) {
if (/^[0-9]+$/.test(e)) return e;
if ("" === e) return null;
return P("Attempting to use non-numeric value '" + e + "' for translation tag '" + n + "'"), 0;
}, P = function(r, i) {
r = r || "BHCJS runtime issue", t && t.env && t.env.b_dev_server ? (i && console.warn("Template: " + i), console.error(r)) :n.error_out && e.onerror && e.onerror("JSTMPL:: " + r, i || "jstmpl", 0);
}, p = function(e) {
if ("string" != typeof e || -1 === e.indexOf("{")) return e;
var t = [];
return v(t, e, 0), 1 === t.length ? t[0] :t.join("");
}, _ = new Array(F), v = function(e, t, n) {
var r = 0;
for (t.length; ;) {
var i = t.indexOf("{", r);
if (-1 === i) {
0 === r ? e.push(t) :e.push(t.substring(r));
break;
}
i !== r && (e.push(t.substring(r, i)), r = i);
var o = t.indexOf("}", i + 1);
if (o === i + 1) {
e.push("{}"), r = o + 1;
continue;
}
if (-1 === o) {
e.push(t.substring(r));
break;
}
for (var a = i + 1; o > a; ++a) {
var u = t.charAt(a).toLowerCase();
if (!(u >= "0" && "9" >= u || u >= "a" && "z" >= u || "_" == u || "/" == u || "-" == u)) break;
}
a === o ? (h(e, t.substring(i + 1, o), n + 1), r = o + 1) :(e.push(t.substring(i, a)), r = a);
}
}, h = function(e, t, n) {
if (n > 0) {
if (n >= F) return console.warn("Detected excessive recursion in tag sequence: %s, returning '%s'", interpolate_tags.slice(1, F).join(" "), value), void e.push(t);
if (t === _[n - 1]) return console.warn("Detected self-referential tag '%s', returning '%s'", value, value), void e.push(t);
}
_[n] = t;
for (var r = 0, o = i.length; o > r; ++r) if (t in i[r]) {
var u = i[r][t];
return void ("string" == typeof u && -1 !== u.indexOf("{") ? v(e, u, n + 1) :e.push(u));
}
if (a && t in a) return u = a[t], void ("string" == typeof u && -1 !== u.indexOf("{") ? v(e, u, n + 1) :e.push(u));
e.push("");
}, d = function(e) {
for (var t = 0, n = i.length; n > t; ++t) if (e in i[t]) return i[t][e];
return "";
}, m = function(e) {
for (var t = 0, n = i.length; n > t; ++t) if (e in i[t]) {
var r = i[t][e];
return r instanceof Array ? r.length :"0" === r ? 0 :r;
}
if (a && e in a) return a[e];
return !1;
}, w = function(e) {
return "0" === e ? "" :e ? 1 :"";
}, b = function(e) {
return "0" === e ? 1 :e ? "" :1;
}, T = function(e) {
var t = parseFloat(e);
return isFinite(t) ? t :0;
}, y = function(e, t) {
i[i.length - 2][e] = t;
}, x = function(e) {
for (var t in e) if (e.hasOwnProperty(t)) return !1;
return !0;
}, j = function(e, t, n) {
var r = [];
if (e = e || 0, t = t || 0, n = Math.abs(n || 1), "string" != typeof e || isNaN(e) || (e = Number(e)), "string" != typeof t || isNaN(t) || (t = Number(t)), /^[A-Za-z]$/.exec(e) || /^[A-Za-z]$/.exec(t)) if ((1 !== e.length || 1 !== t.length || /[a-z]/.exec(e) && !/[a-z]/.exec(t) || /[A-Z]/.exec(e) && !/[A-Z]/.exec(t)) && P("Invalid range '" + e + "'-'" + t + "' in seq()"), e = e.charCodeAt(0), t = t.charCodeAt(0), t >= e) for (;t >= e; ) r.push({
value:String.fromCharCode(e)
}), e += n; else for (;e >= t; ) r.push({
value:String.fromCharCode(e)
}), e -= n; else if (t >= e) for (;t >= e; ) r.push({
value:e
}), e += n; else for (;e >= t; ) r.push({
value:e
}), e -= n;
return r;
}, E = function(e, t) {
for (var n = [], r = 0; t > r; ++r) for (var i = 0, o = e.length; o > i; ++i) n.push(e[i]);
return n;
}, S = function(e) {
return e.charAt(0).toUpperCase() + e.substr(1);
}, I = function(e) {
return e.charAt(0).toLowerCase() + e.substr(1);
}, L = function(e) {
for (var t = e.split(/\s/), n = 0, r = t.length; r > n; ++n) t[n] = S(t[n]);
return t.join(" ");
}, R = function(e) {
for (var t = e.toString(), n = 1, r = arguments.length; r > n; ++n) if (arguments[n].toString() === t) return 1;
return 0;
}, B = function(e) {
return void 0 === e ? Math.random() :Math.random() * e;
}, g = function(e, t, n, r) {
P("to use TMPL_TRANS/TMPL_TRANSLIST, pass 'get_trans' to setup()");
}, f = function(e, t, n) {
P("to use TMPL_TEXT, pass 'get_text' to setup()");
}, c = function(e, t) {
P("to use TMPL_VAR, with N attribute, pass 'get_var_plural' to setup()");
}, k = function(e, t, n, r) {
P("to use TMPL_STATIC_URL/TMPL_SCRIPT_URL, pass 'get_static_hostname' to setup()");
}, N = function(e, t, n) {
return e.substr(t, n);
}, O = function() {
for (var e, t = [].slice.apply(arguments), n = t.splice(0, 1)[0]; e = t.splice(0, 1)[0]; ) n = n.replace(/%\w/, e);
return n;
}, A = function(e) {
return void 0 !== e ? 1 :0;
}, C = function() {
return +new Date() / 1e3;
}, o = function(e) {
return i = e, e;
}, q = {}, M = {}, u.prototype = {
render:function(e, t) {
e = e || {};
var n = "";
D.push(i), i = [ {}, e ];
try {
n = this.closure(i);
} catch (r) {
P(r, this.name);
}
return i = D.pop(), n;
},
fn:{
FILTERS:q,
F:q,
GET_VAR:s,
GET_V:d,
GET_IF_VAR:m,
INTERPOLATE:p,
GET_TRANS:g,
SET_VAR:y,
GET_TEXT:f,
PERL_BOOL:w,
PERL_NOT:b,
PARSE_FLOAT:T,
REPEAT_ARRAY:E,
STATIC_HOSTNAME:k,
IS_EMPTY_OBJECT:x,
MB:s,
MC:d,
MD:m,
ME:g,
MF:f,
MG:p,
MI:T,
MJ:w,
MK:b,
ML:E,
MN:y,
MO:l,
VP:c,
SV:o,
seq:j,
defined:A,
substr:N,
sprintf:O,
ucfirst:S,
lcfirst:I,
ucfirstword:L,
rand:B,
time:C,
in_array:R
}
}, r = function(e) {
var t = function(e, t) {
if (!t) return;
for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
};
t(u.prototype.fn, e.fn), t(u.prototype.fn.FILTERS, e.filters), "get_trans" in e && (u.prototype.fn.GET_TRANS = u.prototype.fn.ME = e.get_trans), "get_text" in e && (u.prototype.fn.GET_TEXT = u.prototype.fn.MF = e.get_text), "get_var_plural" in e && (u.prototype.fn.GET_VAR_PLURAL = u.prototype.fn.VP = e.get_var_plural), "get_static_hostname" in e && (u.prototype.fn.STATIC_HOSTNAME = e.get_static_hostname), "get_csrf_token" in e && (u.prototype.fn.CSRF_TOKEN = e.get_csrf_token), "get_date" in e && (u.prototype.fn.DATE = e.get_date), "get_helper" in e && (u.prototype.fn.HELPER = e.get_helper), "translations" in e && (a = e.translations);
}, n = function(e, t) {
if (void 0 === t) return e in M ? M[e] :M.__no_op__;
var n = new u(t, e);
return M[e] = n, n;
}, n.setup = r, n.fn = u.prototype.fn, n("__no_op__", function() {
return P("JSTMPL -> TMPL not found") || "";
}), t.jstmpl = n;
}(window, window.booking || {}), function() {
var e;
e = function() {
return booking.env.b_csrf_token || "";
}, booking.jstmpl.setup({
get_csrf_token:e
});
}(), function(e) {
if (e.jstmpl = e.jstmpl || {
setup:function() {
console.error("This is a mocked method. It's needed for client BHC templates to work, and doesn't need to work while we don't use them");
}
}, e.jstmpl.translations) return;
var t, n, r, i, o, a, u = e.jstmpl, s = e.env, t = function(e, t, n, i) {
var o = 0, a = !(0 !== i && !i);
if (a) {
if (/^[0-9]+$/.test(i)) o = parseInt(i, 10); else {
var u = t(i);
/^[0-9]+$/.test(u) ? o = u :console.warn("Trying to use a non-numeric template var for exception tool on copy '%s'", e);
}
n("num", o);
}
if (s && s.global_translation_tags) for (var f in s.global_translation_tags) t(f) || n(f, s.global_translation_tags[f]);
return r(e, t, n, o, a);
}, r = function(e, t, n, a, u) {
var s, f = e.split("/");
if ("" === f[0] && f.shift(), 1 == f.length) {
var c = f[0];
"{" === c.charAt(0) && "}" === c.charAt(c.length - 1) && (c = c.substr(1, c.length - 2)), f = [ "private", c, "name" ];
}
for (var l = 0, p = f.length; p > l; ++l) {
var c = f[l];
"[" === c.charAt(0) && "]" === c.charAt(c.length - 1) && (f[l] = t(c.substr(1, c.length - 2)) + "");
}
for (var l = 0, p = f.length; p > l; ++l) {
var c = f[l];
"{" === c.charAt(0) && "}" === c.charAt(c.length - 1) && (f[l] = t(c.substr(1, c.length - 2)));
}
if (s = i(f[0], f[1], f[2]), u && (s = o(f, a) || s), s) {
var h = s.match(/{.*?}/g);
if (!h) return s;
for (var l = 0, p = h.length; p > l; ++l) {
var d, v = h[l];
d = -1 === v.indexOf("/") ? t(v.substr(1, v.length - 2)) :r(v.substr(1, v.length - 2), t, n, a, u), s = s.split(v).join(d);
}
}
return s || "";
}, i = function(t, n, r) {
if ("private" === t) {
var i = (a && a["private"] || {})[n];
return i && "string" != typeof i && i.experiment_hash && i.value && (e.et && e.et.stage(i.experiment_hash, 1), i = i.value), i;
}
return ((a && a[t] || {})[n] || {})[r || "name"];
}, o = function(e, t) {
var n = "", r = "language_exception_" + e[1] + "_";
"private" !== e[0] && (n = "_" + e[2]);
var o = [ t ];
if (t >= 100) {
var a = t % 100;
10 > a && o.push("*0"), o.push("*" + a);
}
t >= 10 && o.push("*" + t % 10);
for (var u = 0, s = o.length; s > u; ++u) {
var f = i(e[0], r + o[u] + n, e[2]);
if (f) return f;
}
return "";
}, n = function(e, n, r) {
if (r) throw "Can't use TMPL_TEXT on client-side templates";
return t(e, u.fn.GET_VAR, u.fn.SET_VAR, n);
};
u.setup({
get_trans:t,
get_var_plural:n,
get_text:n
});
var f = function(e) {
var e = e || {};
return {
gv:function(t) {
return "undefined" != typeof e[t] ? e[t] :"";
},
sv:function(t, n) {
e[t] = n;
}
};
};
u.translations = function(e, n, r) {
var i = f(r);
return t(e, i.gv, i.sv, n);
}, u.translations.set = function(e) {
return e && (a = e, u.setup({
translations:e["private"] || {}
})), a;
};
}(window.booking || {}), function() {
if (booking.jstmpl.fn.track_experiment) return;
var e, t, n, r;
e = function(e) {
return booking.et.track(e);
}, n = function(e, t) {
return booking.et.stage(e, t);
}, t = function(e) {
return booking.et.track(e);
}, r = function(e, t) {
return booking.et.customGoal(e, t);
}, booking.jstmpl.setup({
fn:{
track_experiment:e,
track_experiment_stage:n,
experiment_variant:t,
track_custom_goal:r
}
});
}(), function(e) {
"use strict";
if (!e.jstmpl) return;
var t, n, r, i, o, a, u, s, f, c, l, p, h, d, v, _, m, g, y, w, b, T, E = {
"&":"&amp;",
"<":"&lt;",
">":"&gt;",
'"':"&quot;",
"'":"&#39;",
"/":"&#47;"
}, k = {
"\b":"\\b",
"\f":"\\f",
"\n":"\\n",
"\r":"\\r",
"	":"\\t",
"'":"\\'",
'"':'\\"',
"<":"\\u003c",
">":"\\u003e",
"\\":"\\\\",
"&#39;":"&#39;",
"&quot;":"&quot;"
}, x = {
">":"\\u003e",
"<":"\\u003c"
};
n = function(e) {
return E[e];
}, t = function(e) {
return String(e).replace(/&(?!amp;|lt;|gt;|quot;|#39;|#47;)/g, "&amp;").replace(/[<>"'\/]/g, n);
}, i = function(e, t) {
return "\n<br />" + (t ? "\n<br />" :"");
}, r = function(e) {
return e.replace(/(?:\r?\n)((?:\r?\n)*)/, i);
}, a = function(e, t) {
return t ? "</p>\n<p>" :"\n<br />";
}, o = function(e) {
return e.replace(/(?:\r?\n)((?:\r?\n)*)/, a);
}, s = function(e) {
return r(g(e));
}, u = function(e) {
return r(t(e));
}, f = function(e) {
return "<p>" + o(t(e)) + "</p>";
}, c = function(e) {
return "<p>" + o(String(e)) + "</p>";
}, p = function(e) {
return k[e];
}, l = function(e) {
return String(e).replace(/([\b\f\n\r\t'"\\<>]|&quot;|&#39;)/g, p);
}, h = function(t) {
return e.jstmpl.fn.PERL_BOOL(t) ? "true" :"false";
}, d = function(e) {
return null === e || void 0 === e ? "" :"'" + l(e) + "'";
}, v = function(e) {
return encodeURIComponent(e).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
}, _ = function(e) {
return String(e).replace(/ /g, "");
}, m = function(e) {
return String(e).replace(/\n/g, "<br />");
}, b = function(e) {
return e in E ? E[e] :"&#" + e.charCodeAt(0) + ";";
}, g = function(e) {
return String(e).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f&<>"'\/\u00A0-\u9999<>]/g, b);
}, T = function(e) {
return String(e).replace(/^\s+|\s+$/g, "");
}, w = function(e) {
return x[e];
}, y = function(e) {
return JSON.stringify(e).replace(/[<>]/g, w);
}, e.jstmpl.setup({
filters:{
html:t,
text2entities:s,
text2html:u,
text2para:f,
html2para:c,
js:l,
jsbool:h,
jsstr:d,
url:v,
nospace:_,
br:m,
entities:g,
json:y,
trim:T
}
});
}(window.booking || {}), function(e) {
"use strict";
if (!e.jstmpl) return;
var t, n, r, i, o, a, u, s, f, c, l;
t = function(e) {
var t, n, r, i = 0;
if (!e || 0 === e.length) return i;
for (t = 0, r = e.length; r > t; t++) n = e.charCodeAt(t), i = (i << 5) - i + n, i |= 0;
return i;
}, n = function(n, r, i, o) {
var a = "", u = i ? "" :document.location.protocol;
if (e && e.env && e.env.static_hostnames && e.env.static_hostnames.length) if (1 !== e.env.static_hostnames.length && n) {
if (!/https?:/.test(n.toString())) {
var s = t(n.toString()), f = Math.abs(s) % e.env.static_hostnames.length;
a = e.env.static_hostnames[f];
}
} else a = e.env.static_hostnames[0]; else a = u + "//q.bstatic.com";
return i && (a = a.replace(/^https?:/, "")), a + n;
}, a = function(e) {
return Array.isArray(e) ? e.length :0;
}, r = function(e, t, n, r, i) {
var o = B.require("utils/string-interpolate"), a = B.require("formatting/date").locale_format;
if (!e) return "";
-1 != e.indexOf("T") && 3 == e.split(":").length && (e = e.substr(0, e.lastIndexOf(":")).replace("T", " "));
var u = e.split(" ").slice(0, 2), s = (i || "").split(" ").slice(0, 2), f = {
date:u[0],
time:u[1],
date_until:s[0],
time_until:s[1],
format:t
};
return o(a(f), {
begin_marker:n,
end_marker:r
});
}, u = function(t) {
return e.jstmpl.fn && e.jstmpl.fn.FILTERS && e.jstmpl.fn.FILTERS.html ? e.jstmpl.fn.FILTERS.html(t) :"";
}, s = function(t) {
return e.jstmpl.fn && e.jstmpl.fn.FILTERS && e.jstmpl.fn.FILTERS.entities ? e.jstmpl.fn.FILTERS.entities(t) :"";
}, o = function(e, t, n) {
if ("string" == typeof e && "string" == typeof t) return e.indexOf(t, n || 0);
return -1;
}, f = function(e, t) {
var n = t.height, r = t.width, i = t["class"], o = t.size, a = e.replace(/\//g, "-"), u = document.querySelector(".bk-icon.-" + a);
if (!e || !t || !u) return "";
if (i = "bk-icon -" + a + (i ? " " + i :""), "IMG" === u.tagName) return '<img src="' + u.src + '" class="' + i + ' -fallback" />';
var s = {
largest:32,
larger:24,
large:20,
medium:16,
small:14,
smaller:12
};
o && (n = r = s[o]);
var f = u.getAttribute("viewBox"), c = f.split(" "), l = parseInt(c[2] - c[0], 10), p = parseInt(c[3] - c[1], 10);
n && !r ? r = Math.floor(n / (p / l)) :r && !n && (n = Math.floor(r / (l / p))), Object.assign(t, {
width:r || l,
height:n || p,
viewBox:f,
"class":i
});
var h = {
color:"fill"
}, d = Object.keys(t).reduce(function(e, n) {
return e + " " + (h[n] || n) + '="' + t[n] + '"';
}, ""), v = u.innerHTML;
if (!v && void 0 !== typeof XMLSerializer) {
var _ = new XMLSerializer();
v = "";
for (var m = u.childNodes, g = 0; g < m.length; g++) v += _.serializeToString(m[g]);
}
return "<svg " + d + ">" + v + "</svg>";
}, c = function(e, t, n, r) {
try {
return f(e, {
width:t,
height:n,
"class":r
});
} catch (i) {
if (window.B && B.env.b_dev_server) throw i;
return "";
}
}, i = function(e, t) {
switch (e) {
case "icon":
var n = t.name;
return delete t.name, f(n, t);

default:
throw new Error("unkown TMPL_HELPER " + name);
}
}, l = function() {
return B.env.is_rooms_table_splitter;
}, e.jstmpl.setup({
get_static_hostname:n,
get_date:r,
get_helper:i,
fn:{
escape_html:u,
escape_entities:s,
array_length:a,
index:o,
icon:c,
is_rooms_table_splitter:l
}
});
}(window.booking), function(e) {
if (!e.jstmpl) return;
e.jstmpl.error_out = 1;
}(window.booking), window.booking && booking.define && booking.jstmpl && (booking.define("jstmpl", function() {
return booking.jstmpl;
}), booking.define("jstmpl-translations", function() {
var e = booking.require("jstmpl");
return e.translations;
})), booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.bhc.run = !0), function(e, t) {
e("tmpl_data", [], function() {
"use strict";
var e = {};
function t(t, n, r) {
void 0 === e[t] ? e[t] = n :(e.b_dev_server && console.warn("SERVER::Trying to override " + t + " with value: " + n), r && (e[t] = n));
}
function n(n, r) {
if (r) t(n, r); else {
if ("string" == typeof n) return e[n];
if ("object" != typeof n) return Object.keys(e).reduce(function(t, n) {
return t[n] = e[n], t;
}, {});
if (n.slice) {
for (var i, o = {}, a = 0, u = n.length; u > a; ++a) i = n[a], o[i] = e[i];
return o;
}
for (var s in n) n.hasOwnProperty(s) && t(s, n[s]);
}
}
return n.reset = function(e) {
for (var n in e) e.hasOwnProperty(n) && t(n, e[n], !0);
}, n;
});
}(B.define, B.require), function(e, t) {
e("request_info", [], function() {
"use strict";
var e, t = {}, n = "";
function r() {
var r = n;
n = Object.keys(t).join(","), (e || (e = document.getElementById("req_info"))) && (e.innerHTML !== r && (i(e.innerHTML), n = Object.keys(t).join(",")), e.innerHTML = n);
}
function i(e) {
t = e.split(",").reduce(function(e, t) {
return e[t] = !0, e;
}, t);
}
function o(e) {
t[e] = !0;
}
function a(e) {
o(e), "string" == typeof e ? (o(e), r()) :e instanceof Array && (e.forEach(o), r());
}
return {
populate:a
};
});
}(B.define, B.require), function(e, t) {
e("et", function() {
return window.et;
}), e("et_debug", [], function() {
var e, n = {
UNABLE_TO_STRINGIFY:"unable_to_stringify",
INIT_BEACON:"init_beacon",
DEFER_BEACON:"defer_beacon",
SEND_BEACON:"send_beacon",
BEACON_SENT:"beacon_sent",
TRACK_UNKNOWN_ITEM:"track_unknown_item",
SHOULD_TRACK:"should_track",
TRACKING_ATTEMPT:"tracking_attempt",
NOT_TRACKING_WAS_TRACKED:"not_tracking_was_tracked",
NOT_TRACKING_FULLON:"not_tracking_fullon",
NOT_TRACKING_NOT_RUNNING:"not_tracking_not_running",
ADD_EVENT_LISTENER:"add_event_listener",
NOT_EXISTING_ELEMENT_WONT_ADD_LISTENER:"not_existing_element_wont_add_listener",
ADD_DEBOUNCED_VIEW_HANDLER:"add_view_handler",
ATTACH_VIEW_LISTENER:"attach_view_listener",
DETACH_VIEW_LISTENER:"detach_view_listener",
CHECK_IF_VISIBLE:"check_if_visible",
ONVIEW_TRACKING_TRIGGERED:"onview_tracking_triggered",
VISIBLE_CHECK_FINISHED:"visible_check_finished",
WONT_ATTACH_EVENT_TRACKING:"wont_attach_event_tracking"
}, r = B.env.b_dev_server && B.env.et_debug_level ? parseInt(B.env.et_debug_level, 10) :0;
function i(e, t) {
try {
var n = o();
n.trigger.apply(n, [].slice.call(arguments));
} catch (i) {
r && console.log("Error when trying to report et event", e, t, "error:", i);
}
}
function o() {
try {
if (!e) {
var n = t("event-emitter");
e = new n("et", {
async:!0
});
}
return e;
} catch (i) {
return r && console.log("Error when trying to init et event emitter", "error:", i), null;
}
}
return {
level:r,
events:n,
report:i,
getEventEmitter:o
};
}), t([ "et", "et_debug" ], function(e, t) {
e.registerDebug(t);
});
}(B.define, B.require), B.define("env", function(e, t, n) {
var r = "benv/env.js is deprecated, use server-data instead";
if (B.reportError({
message:r
}, "benv"), B.env && B.env.b_dev_server) throw new Error(r);
return B.env;
}), B.define("server-data", function(e, t, n) {
return B.env;
}), B.define("utils/string-interpolate", function(e, t, n) {
n.exports = function(e, t) {
return e.replace(/{([^{}]*)}/g, function(e, n) {
var r = t[n];
return "string" == typeof r || "number" == typeof r ? r :e;
});
};
}), B.define("utils/string-pad", function(e, t, n) {
function r(e, t, n, r) {
var i = (t || 2) - e.toString().length + 1;
if (0 >= i) return e;
var o = new Array(i).join(n || "0");
return r ? e + o :o + e;
}
r.left = r, r.right = function(e, t, n) {
return r(e, t, n, !0);
}, n.exports = r;
}), B.define("formatting/date", function(e, t, n) {
var r = B.env.b_date_format, i = B.env.b_month_for_formatted_date, o = B.env.b_weekday_formatted_date, a = B.require("utils/string-interpolate");
o[0] = o[7];
function u(e) {
return (10 > e ? "0" :"") + e;
}
t.format = function(e, t) {
if (!e || void 0 === e.year || void 0 === e.month || void 0 === e.day) throw new Error("formatting/date: invalid date provided");
if (!t) throw new Error("formatting/date: invalid format provided");
if (e.year = +e.year, e.month = +e.month, e.day = +e.day, isNaN(e.year) || isNaN(e.month) || isNaN(e.day)) throw new Error("formatting/date: invalid date provided");
var n = r[t] || t, s = new Date(Date.UTC(e.year, e.month, e.day, e.hours || 0, e.minutes || 0)), f = s.getUTCMonth() + 1, c = s.getUTCDate(), l = i[f], p = o[s.getUTCDay()], h = {
weekday:p.name,
short_weekday:p["short"],
day_of_month:c,
zero_padded_day_of_month:u(c),
month:f,
month_name_with_year_only:l.name_with_year_only,
zero_padded_month:u(f),
month_name:l.name,
short_month_name:l.short_name,
full_year:s.getUTCFullYear(),
time:u(s.getUTCHours()) + ":" + u(s.getUTCMinutes())
};
return a(n, h);
}, t.compat = function(e, n) {
var r;
if (e instanceof Date) r = e; else if (e && e.indexOf && -1 === e.indexOf(":") && (e += " 00:00"), r = isNaN(Date.parse(e)) ? !1 :new Date(e), r || "undefined" == typeof e || null === e || (e = e.replace(/-/g, "/"), r = isNaN(Date.parse(e)) ? !1 :new Date(e)), !r) return !1;
n = n || "short_date", e = t.breakdown(r);
try {
return t.format(e, n);
} catch (i) {
return !1;
}
};
var s = /^([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}).*/;
t.locale_format = function(e) {
var t = "object" == typeof e ? e.date :e, n = e.time, u = e.date_until, f = e.time_until;
if (!t) throw new Error("formatting/date: no date provided");
if (t = t.replace(s, function(e, t) {
return t;
}), !t.match(s)) throw new Error("formatting/date: invalid date provided — " + t);
if (u && (u = u.replace(s, function(e, t) {
return t;
}), !u.match(s))) throw new Error("formatting/date: invalid date_until provided — " + u);
var c = e.format || "short_date";
if (!r[c]) return "";
var l = t.split(/-0*/), p = u ? u.split(/-0*/) :void 0, h = {};
if (n) {
var d = B.require("formatting/time").locale_format;
h.time = n ? d(n) :"", h.time_until = f ? d(f) :"";
}
return [ l ].concat(u ? [ p ] :[]).forEach(function(e, n) {
var r = (n ? u :t).split(/-0*/), a = {
month_name:i[parseInt(e[1], 10)],
weekday:o[new Date(Date.UTC(+r[0], +r[1] - 1, +r[2], 0, 0, 0, 0)).getUTCDay()]
};
[ "full_year", "month", "day_of_month" ].forEach(function(t, r) {
h[t + (n ? "_until" :"")] = e[r];
}), [ "%", "%_nom", "%_in", "%_from", "%_to", "short_%" ].forEach(function(e) {
Object.keys(a).forEach(function(t) {
h[(e + (n ? "_until" :"")).replace("%", t)] = a[t]["%" === e[0] || "month_name" === t ? e.replace("%", "name").replace(/_nom$/, "_only") :"short"];
});
}), n || (h.month_name_with_year_only = i[parseInt(e[1], 10)].name_with_year_only);
}), a(r[c], h);
}, t.breakdown = function(e) {
return {
year:e.getFullYear(),
month:e.getMonth(),
day:e.getDate(),
hours:e.getHours(),
minutes:e.getMinutes()
};
}, t.stringify = function(e) {
return t.format(t.breakdown(e), "{full_year}-{zero_padded_month}-{zero_padded_day_of_month} {time}");
};
}), B.define("formatting/time", function(e, t, n) {
var r = B.env.b_time_format, i = B.require("utils/string-interpolate"), o = B.require("utils/string-pad");
return {
locale_format:function(e) {
e = "object" != typeof e ? {
time:e
} :e;
var t, n = {};
if (!e.time) throw new Error("formatting/time: no time provided");
if (e.until = e.until || !1, e.no_html = e.no_html || !0, e.time.match(/^(?:([0-2]?[0-9])[.: -]?([0-5]?[0-9]))$/).slice(1).forEach(function(e, t) {
n[t ? "minutes" :"hour"] = e.replace(/^0/, "") || 0;
}), Math.abs(n.hour - 12) > 12 || Math.abs(n.minutes - 30) > 30) throw new Error("formatting/time: invalid time provided — " + e.time);
return n.hour = n.hour % 24, n.hour_24h_no0 = n.hour, n.hour_24h = o(n.hour), n.hour_24h_show24_no0 = n.minutes || n.hour ? n.hour_24h_no0 :24, n.hour_24h_show24 = o(n.hour_24h_show24_no0), n.hour_24h_until24_no0 = n[e.until ? "hour_24h_show24_no0" :"hour_24h_no0"], n.hour_24h_until24 = o(n.hour_24h_until24_no0), n.hour_12h_no0 = n.hour % 12 || 12, n.hour_12h = o(n.hour_12h_no0), n.minutes_no0 = n.minutes, n.minutes = o(n.minutes_no0), n.AM_PM = r[(n.hour < 12 ? "AM" :"PM") + "_symbol"].name, t = i(r.time.name, n).trim(), e.no_html ? t.replace(/\s/g, "&nbsp;") :t;
}
};
}), function() {
if (B.env.no_jq_event_emitter) return;
B.define("event-emitter", function(e, t, n) {
(function() {
var e = Array.prototype.slice, t = "function" == typeof setImmediate, r = 0;
function i(e, t, n) {
return function() {
return e.apply(t, n);
};
}
function o(e) {
e || (e = {});
var t = this._events = {
events:{},
listening:[],
context:e.context,
count:0,
name:e.name || ++r
};
if (e.debug && (t.debug = !0, t.last = {
time:0,
eventCount:0
}), e.strict && (t.strict = !0, t.strictKeys = e.events, !e.events)) throw new Error("No events defined for emitter " + t.name);
e.async && (this.emitSync = this.emit, this.emit = this.emitNext, t.async = !0);
}
function a(e, t, n) {
var r = e._events;
if (r.strict && r.strictKeys.hasOwnProperty(n)) return;
var i = new Error(t + "(): event '" + n + "' has not been registered for emitter " + r.name);
throw i.emitter = e, i;
}
o.prototype.addListener = function(e, t, n) {
var r = this._events;
if (null == e) throw new Error("addListener(name, fn, context): name cant be " + e);
r.strict && a(this, "addListener", e);
var i = r.events[e] || (r.events[e] = []);
return i.push(n ? {
fn:t,
context:n
} :t), this;
}, o.prototype.once = function(e, t) {
var n = this._events;
n.strict && a(this, "once", e);
var r = this, i = !1;
function o() {
i || (i = !0, t.apply(this, arguments), r.removeListener(e, o));
}
return this.addListener(e, o);
}, o.prototype.removeListener = function(t, n) {
var r = this._events;
r.strict && a(this, "removeListener", t);
var i = this, o = this._events.events[t];
if ("*" === t) if (n) for (var u in r.events) r.events.hasOwnProperty(u) && i.removeListener(u, n); else r.events = {}; else if (n && o) {
for (var s = e.call(o, 0), f = 0; f < s.length; f++) {
var r = r;
!s[f] || s[f] !== n && s[f].fn !== n || o.splice(f, 1);
}
0 === o.length && delete r.events[t];
} else delete r.events[t];
return this;
}, o.prototype.emit = function(t) {
var n = this._events;
if (null == t) throw new Error("emit(name): name cant be " + t);
n.strict && a(this, "emit", t), n.debug && this.tick();
var r = n.events[t];
if (!r) return this;
r = e.call(r, 0);
for (var i = 0; i < r.length; i++) {
var o = r[i], u = o.context || n._context || this, s = o.fn || o, f = arguments.length;
if (this.emitCallAsJQ) switch (f) {
case 1:
s.call(u);
break;

case 2:
s.call(u, null, arguments[1]);
break;

case 3:
s.call(u, null, arguments[1], arguments[2]);
break;

default:
for (var c = new Array(f - 1), l = 1; f > l; l++) c[l - 1] = arguments[l];
s.apply(u, c);
} else switch (f) {
case 1:
s.call(u);
break;

case 2:
s.call(u, arguments[1]);
break;

case 3:
s.call(u, arguments[1], arguments[2]);
break;

default:
for (var c = new Array(f - 1), l = 1; f > l; l++) c[l - 1] = arguments[l];
s.apply(u, c);
}
}
return this;
}, o.prototype.emitNext = function(e) {
var n = this._events;
n.strict && a(this, "emitNext", e);
var r = this, u = arguments, s = i(o.prototype.emit, r, u);
return t ? setImmediate(s) :setTimeout(s, 0);
}, o.prototype.tick = function() {
var e = this._events, t = +new Date(), n = e.last;
e.count++, t - n.time > 5e3 && (e.rate = Math.floor((e.count - n.count) / (t - n.time) / 1e3), e.last = {
time:t,
count:e.count
});
}, o.prototype.proxy = function(t, n) {
var r = this;
return function() {
var i = e.call(arguments, 0);
"function" == typeof n && (i = n.apply(null, i)), i.unshift(t), r.emit.apply(r, i);
};
}, o.extend = function(e, t) {
o.call(e, t);
var n = o.prototype;
for (var r in n) {
if (!n.hasOwnProperty(r)) continue;
e[r] = n[r];
}
return e;
}, o.create = function(e) {
return new o(e);
};
var u = {
on:"addListener",
off:"removeListener",
trigger:"emit",
one:"once",
bind:"addListener",
unbind:"removeListener",
triggerHandler:"emit"
};
for (var s in u) {
if (!u.hasOwnProperty(s)) continue;
o.prototype[s] = o.prototype[u[s]];
}
"undefined" != typeof n && n.exports ? n.exports = o :"function" == typeof define ? define("Evy", function() {
return o;
}) :this.Evy = o;
}).call(this);
});
}(), B.define("events", function(e, t, n) {
var r = e("event-emitter"), i = new r();
return i.Emitter = r, i;
}), B.define("jquery", function() {
return window.jQuery || window.$;
}), B.define("promise", function(e, t, n) {
"undefined" == typeof Promise ? !function(e) {
var t = o.immediateFn || "function" == typeof setImmediate && setImmediate || function(e) {
setTimeout(e, 1);
};
function r(e, t) {
return function() {
e.apply(t, arguments);
};
}
var i = Array.isArray || function(e) {
return "[object Array]" === Object.prototype.toString.call(e);
};
function o(e) {
if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
if ("function" != typeof e) throw new TypeError("not a function");
this._state = null, this._value = null, this._deferreds = [], l(e, r(u, this), r(s, this));
}
function a(e) {
var n = this;
if (null === this._state) return void this._deferreds.push(e);
t(function() {
var t = n._state ? e.onFulfilled :e.onRejected;
if (null === t) return void (n._state ? e.resolve :e.reject)(n._value);
var r;
try {
r = t(n._value);
} catch (i) {
return void e.reject(i);
}
e.resolve(r);
});
}
function u(e) {
try {
if (e === this) throw new TypeError("A promise cannot be resolved with itself.");
if (e && ("object" == typeof e || "function" == typeof e)) {
var t = e.then;
if ("function" == typeof t) return void l(r(t, e), r(u, this), r(s, this));
}
this._state = !0, this._value = e, f.call(this);
} catch (n) {
s.call(this, n);
}
}
function s(e) {
this._state = !1, this._value = e, f.call(this);
}
function f() {
for (var e = 0, t = this._deferreds.length; t > e; e++) a.call(this, this._deferreds[e]);
this._deferreds = null;
}
function c(e, t, n, r) {
this.onFulfilled = "function" == typeof e ? e :null, this.onRejected = "function" == typeof t ? t :null, this.resolve = n, this.reject = r;
}
function l(e, t, n) {
var r = !1;
try {
e(function(e) {
if (r) return;
r = !0, t(e);
}, function(e) {
if (r) return;
r = !0, n(e);
});
} catch (i) {
if (r) return;
r = !0, n(i);
}
}
o.prototype["catch"] = function(e) {
return this.then(null, e);
}, o.prototype.then = function(e, t) {
var n = this;
return new o(function(r, i) {
a.call(n, new c(e, t, r, i));
});
}, o.all = function() {
var e = Array.prototype.slice.call(1 === arguments.length && i(arguments[0]) ? arguments[0] :arguments), t = new o(function(t, n) {
if (0 === e.length) return t([]);
var r = e.length;
function i(o, a) {
try {
if (a && ("object" == typeof a || "function" == typeof a)) {
var u = a.then;
if ("function" == typeof u) return void u.call(a, function(e) {
i(o, e);
}, n);
}
e[o] = a, 0 === --r && t(e);
} catch (s) {
n(s);
}
}
for (var o = 0; o < e.length; o++) i(o, e[o]);
});
return t;
}, o.resolve = function(e) {
if (e && "object" == typeof e && e.constructor === o) return e;
return new o(function(t) {
t(e);
});
}, o.reject = function(e) {
return new o(function(t, n) {
n(e);
});
}, o.race = function(e) {
return new o(function(t, n) {
for (var r = 0, i = e.length; i > r; r++) e[r].then(t, n);
});
}, "undefined" != typeof n && n.exports ? n.exports = o :e.Promise || (e.Promise = o);
}(this) :n.exports = Promise;
}), B.define("when/core", function(e, t, n) {
var r = e("promise"), i = {};
function o(e, t) {
var n = [], r = [];
return Object.keys(e).map(function(o) {
var a = i[o];
if (!a || "function" != typeof a.handler) throw new Error("B.when: " + o + " is not a valid condition");
a.defer === !0 ? r.push({
key:o,
value:e[o]
}) :n.push(a.handler.call(null, e[o], t)), t.conditions[o] = e[o];
}), {
resolved:n,
deferred:r
};
}
function a(t) {
if ("object" != typeof t) throw new Error("B.when: expecting an object as argument");
var n, a, u, s, f = {
conditions:{}
}, c = o(t, f), l = r.all(c.resolved).then(function(e) {
if (!e.every(Boolean)) return u && u.call(f);
var t = c.deferred.map(function(e) {
var t = i[e.key];
return t.handler.call(null, e.value, f);
});
if (!t.every(Boolean)) return u && u.call(f);
"function" == typeof n && B.require(a || [ "require" ], n.bind(f));
})["catch"](function(e) {
if ("function" == typeof u) return u.call(f, e);
setTimeout(function() {
throw e;
}, 0);
});
return l.run = function(e, t) {
"function" == typeof n ? s = e :n = e || function() {}, u = t;
}, l.load = function(t) {
return n = function() {
var n = e("async-loader").load(t);
"function" == typeof s && n.then(function() {
B.require([], s.bind(f));
}, function() {});
}, {
run:l.run
};
}, l.require = function(e, t, r) {
n = t, a = e, u = r;
}, l;
}
a.add = function(e, t) {
if ("string" == typeof e) i[e] = {
name:e,
handler:t
}; else {
var n = e;
i[n.name] = n;
}
}, n.exports = a;
}), function() {
var e = !1, t = !1, n = B.require("events"), r = B.require("jquery");
r(window).on("load", function() {
e = !0, n.trigger("load");
}), r(function() {
t = !0, n.trigger("ready");
}), B.define("when/events", function(i, o, a) {
var u = i("promise"), s = i("when/events-view");
function f(e) {
var t, n, r, i, o, a = "string" == typeof e ? [ e ] :e, u = [];
for (i = 0, r = a.length; r > i; ++i) n = a[i], t = !1, o = n.indexOf(" "), o > -1 && (t = n.slice(o + 1), n = n.slice(0, o)), u.push({
evt:n,
node:t
});
return u;
}
function c(i) {
var o, a = f(i);
return new u(function(i) {
function u() {
i(!0);
}
for (;a.length; ) switch (o = a.pop(), !0) {
case "view" === o.evt && !!o.node:
s(o.node, u);
break;

case !!o.node:
r(o.node).one(o.evt, u);
break;

case "ready" === o.evt && t:
u();
break;

case "load" === o.evt && e:
u();
break;

default:
n.on(o.evt, u);
}
});
}
a.exports = {
name:"events",
handler:c
};
});
}(), B.define("when/events-view", function(e, t, n) {
var r = e("jquery"), i = 100, o = 20, a = [], u = r(window), s = !1, f = !1;
function c(e) {
var t = u.scrollTop(), n = e[0], r = u.height(), i = n.offset(), a = e[3] || o;
if (i && t + r > i.top + a && n.is(":visible")) return e[1].call(e[2], n), !1;
return !0;
}
function l() {
if (f) return;
f = !0, a = a.filter(c), a.length || (u.off("scroll", l), u.off("resize", l), s = !1), setTimeout(function() {
f = !1;
}, i);
}
function p(e, t, n, i) {
var o, f = r(e);
if (!f.length || "function" != typeof t) return;
o = [ r(e), t, n || this, i ], c(o) && a.push(o), !s && a.length && (u.on("scroll", l), u.on("resize", l), s = !0);
}
n.exports = p;
}), B.define("when/click", function(e, t, n) {
var r = e("promise"), i = e("jquery");
function o(e) {
return new r(function(t) {
i(function() {
i(e).on("click", t);
});
});
}
n.exports = {
name:"click",
handler:o
};
}), B.define("when/hover", function(e, t, n) {
var r = e("promise"), i = e("jquery");
function o(e) {
var t = e.match(/^(\d+)(\w+)?\s(.*)/);
return {
delay:t ? "s" === t[2] ? 1e3 * t[1] :t[1] :0,
selector:t ? t[3] :e
};
}
function a(e) {
return e = o(e), new r(function(t) {
i(e.selector).each(function() {
var n = i(this), r = null, o = function() {
r = setTimeout(function() {
n.unbind("mouseenter", o), n.unbind("mouseleave", a), t(!0);
}, +e.delay);
}, a = function() {
clearTimeout(r);
};
n.bind("mouseenter.when-hover", o), n.bind("mouseleave.when-hover", a);
});
});
}
n.exports = {
name:"hover",
handler:a
};
}), B.define("when/ready", function(e, t, n) {
var r = e("jquery"), i = e("events"), o = !1;
r(function() {
o = !0, i.trigger("when:ready");
});
function a() {
return o || new Promise(function(e) {
i.on("when:ready", e);
});
}
n.exports = {
name:"ready",
handler:a
};
}), B.define("when/load", function(e, t, n) {
var r = e("promise"), i = e("events"), o = e("jquery"), a = "complete" === document.readyState;
o(window).on("load", function() {
a = !0, i.trigger("when:load");
});
function u() {
return a || new r(function(e) {
event.on("when:load", e);
});
}
n.exports = {
name:"load",
handler:u
};
}), B.define("when/action", function(e, t, n) {
function r(e) {
if (e instanceof Array) return e.indexOf(B.env.b_action) > -1;
return B.env.b_action === e;
}
n.exports = {
name:"action",
handler:r
};
}), B.define("when/condition", function(e, t, n) {
var r = e("server-data");
function i(e) {
return "function" == typeof e ? e.call(null, r) :e;
}
n.exports = {
name:"condition",
handler:i
};
}), B.define("when/experiment", function(e, t, n) {
var r = e("et");
function i(e, t) {
return t.hash = e, t.variant = function() {
return r.track(e);
}, r.track(e) > 0;
}
n.exports = {
name:"experiment",
handler:i,
defer:!0
};
}), B.define("when/stage", function(e, t, n) {
var r = e("et");
function i(e, t) {
if (!t.conditions.experiment) throw new Error('when: "stage" must come after "experiment" condition');
return t.stage = e, r.stage(t.hash, e), !0;
}
n.exports = {
name:"stage",
handler:i,
defer:!0
};
}), B.define("when/language", function(e, t, n) {
function r(e) {
if ("string" != typeof e || "function" != typeof e.split) return !1;
var t = e.split(",").map(function(e) {
return e.trim();
});
if (1 === t.length && "cjk" === t[0]) return Boolean(B.env.b_lang_is_cjk);
return t.indexOf(B.env.b_lang) > -1;
}
n.exports = {
name:"language",
handler:r
};
}), B.define("when", function(e, t, n) {
for (var r = e("when/core"), i = [ "when/events", "when/click", "when/hover", "when/ready", "when/load", "when/action", "when/condition", "when/experiment", "when/stage", "when/language" ], o = 0; o < i.length; o++) {
var a = i[o];
r.add(e(a));
}
return r;
}), window.B && (B.when = B.require("when")), window.jQuery.cookie = function(e, t, n) {
if ("undefined" == typeof t) {
var r = null;
if (document.cookie && "" != document.cookie) for (var i = document.cookie.split(";"), o = 0; o < i.length; o++) {
var a = i[o].trim();
if (a.substring(0, e.length + 1) == e + "=") {
r = decodeURIComponent(a.substring(e.length + 1));
break;
}
}
return r;
}
n = n || {}, null === t && (t = "", n = $.extend({}, n), n.expires = -1);
var u = "";
if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
var s;
"number" == typeof n.expires ? (s = new Date(), s.setTime(s.getTime() + 24 * n.expires * 60 * 60 * 1e3)) :s = n.expires, u = "; expires=" + s.toUTCString();
}
var f = n.path ? "; path=" + n.path :"", c = n.domain ? "; domain=" + n.domain :"", l = n.secure ? "; secure" :"";
document.cookie = [ e, "=", encodeURIComponent(t), u, f, c, l ].join("");
}, B.define("utils/on-next-tick", function(e, t, n) {
n.exports = function(e) {
setTimeout(e, 0);
};
}), B.define("component/csir-ga-tracking", function(e) {
"use strict";
var t = e("component"), n = e("ga-tracker"), r = e("utils/on-next-tick");
return t.extend({
init:function() {
var e = this.$el.data("csGaTrack").split("|"), t = this.$el.data("csGaOnchange"), i = e[0], o = e[1], a = e[2];
t ? this.$el.on("change", function(e) {
n.trackEvent(i, o, a + e.target.value);
}) :this.$el.on("click", "a", function(e) {
e.preventDefault(), n.trackEvent(i, o, a), r(function() {
window.location.href = e.target.href;
});
});
}
});
});