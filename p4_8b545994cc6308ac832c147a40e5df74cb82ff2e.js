!function(e, r, n) {
var t, o = [];
e._i_ = function(e) {
o.push(e);
}, e._r_ = function(e) {
return o.pop(), e;
};
function i() {
o = [];
}
function a(e) {
return e;
}
function c(e) {
var r, n, t = "";
for (r in e) e.hasOwnProperty(r) && (n = e[r], "undefined" != typeof n && (t += "&be_" + r + "=" + encodeURIComponent(n)));
return t;
}
function s(r, n, c, s, l) {
var _;
function f() {
var e, r, n;
try {
for (e = 0, r = arguments.length; r > e; e += 1) if (n = u(arguments[e])) return n;
} catch (o) {}
return t;
}
function u(e) {
var r;
try {
r = e();
} catch (n) {
r = t;
}
return r;
}
return _ = {
function_offset:u(function() {
var e = o.length;
return e > 0 ? a(o[e - 1]) :t;
}),
caller_offset:u(function() {
var e = o.length;
return e > 1 ? a(o[e - 2]) :t;
}),
message:f(function() {
return r;
}, function() {
return l.message;
}),
file:f(function() {
return "string" == typeof r.srcElement.src ? r.srcElement.src :t;
}, function() {
return n;
}, function() {
return e.document.location.href.split("?")[0];
}),
line:c,
column:s,
stack:u(function() {
return l.stack;
}),
bot:u(function() {
return booking_extra.b01;
})
}, i(), _;
}
var l = 0, _ = 0, f = 0;
function u(e, n, t) {
var o = "";
if (t) {
var i = new Date();
i.setTime(i.getTime() + 24 * t * 60 * 60 * 1e3), o = "; expires=" + i.toGMTString();
}
r.cookie = e + "=" + n + o + "; path=/";
}
function b(e) {
for (var n = e + "=", t = r.cookie.split(";"), o = 0; o < t.length; o++) {
for (var i = t[o]; " " == i.charAt(0); ) i = i.substring(1, i.length);
if (0 === i.indexOf(n)) return i.substring(n.length, i.length);
}
return null;
}
function g(e) {
var r, t, o = {}, i = !1, a = n.env.scripts_tracking || {};
if (e && 0 !== e.line && /.*bstatic.*\.js/.test(e.file)) {
var c = /js\/(\w*)_/.exec(e.file);
c && c[1] && a[c[1]] && (a[c[1]].line = a[c[1]].line || e.line);
}
for (r in a) a.hasOwnProperty(r) && (t = a[r], t.loaded && t.run || (i = !0, o[r] = {
loaded:!!t.loaded,
run:!!t.run
}, t.line && (o[r].line = t.line)));
if (!i) return "";
return "&scripts=" + encodeURIComponent(JSON.stringify(o));
}
var p = 0, d = !1, v = !0;
e.addEventListener("load", function() {
d = !0;
});
function k(e) {
e && r.getElementById && r.getElementById("req_info") ? (e(r.getElementById("req_info").innerHTML), e = null) :e && (d && p > 12 && v && B.squeak ? (B.squeak("cDPcVDZBAcDXNaPRKecNfae"), v = !1) :p++, setTimeout(k.bind(null, e), 100));
}
e.onabort = function() {
r.ff_kill = !0;
};
function h() {
var t;
r.ff_kill = !0, n.env && n.env.cssCoverageController && "IDLE_TIME_ONLY" === n.env.cssCoverageController.TYPE && !n.env.cssCoverageController.__processed__ && n.env.b_domain_for_book && n.env.cssCoverageController.__collecting__ && (t = navigator.serviceWorker, t.controller && t.controller.postMessage && (n.env.cssCoverageController.__processed__ = !0, t.controller.postMessage({
type:"css_coverage",
coverage:n.env.cssCoverageController.getCoverage(),
extra:booking_extra,
csrf:n.env.b_csrf_token,
endpoint:n.env.b_domain_for_book + "/css_selectors",
origin:e.location.origin
})));
}
e.addEventListener && "undefined" != typeof e.onbeforeunload && e.addEventListener("beforeunload", h, !1);
function y(t, o, i, a, p) {
var d = s.apply(this, [].slice.apply(arguments)), v = b("error_catcher");
if ("undefined" != typeof r.ff_kill && r.ff_kill === !0 && -1 != navigator.userAgent.search("Firefox") && "Error loading script" === t) return !1;
if ("kill" == v || "undefined" != typeof r.kill && r.kill === !0) return !1;
if (f >= 3) return;
l++;
var h;
if (e.XMLHttpRequest) try {
h = new e.XMLHttpRequest();
} catch (y) {
h = !1;
} else for (var x = new Array("Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP", "Microsoft.XMLHTTP"), m = 0; m < x.length; m++) try {
h = new ActiveXObject(x[m]), e.status = m;
break;
} catch (y) {
h = !1;
}
if (h) {
var C = function(e) {
var t = "pid=" + encodeURIComponent(booking_extra.pageview_id);
if (t += "&url=" + encodeURIComponent("" !== o && "undefined" != typeof o ? o :location.href.split("?")[0]), n && n.env && n.env.enable_scripts_tracking) try {
t += g(d);
} catch (i) {
t += "&scripts=error";
}
e && (t += "&info=" + e), t += "&aid=" + booking_extra.b_aid + "&lang=" + booking_extra.b_lang_for_url, l > 6 && (l = _ ? _ + 1 :5), t += "&errc=" + l + "&errp=" + _, t += "&stid=" + booking_extra.b_stid, t += "&ch=" + booking_extra.b_ch, t += "&ref_action=" + booking_extra.b_action, booking_extra.b_site_type_id && (t += "&stype=" + booking_extra.b_site_type_id), booking_extra.b_bbtool && (t += "&bbtool=1"), booking_extra.b_gtt && (t += "&gtt=" + encodeURIComponent(booking_extra.b_gtt)), d && (t += "&error=" + encodeURIComponent(d.message), t += "&be_running=1" + c(d)), booking_extra.b_bp_stage && (t += "&bp_stage=" + booking_extra.b_bp_stage), booking_extra.b_bp_hid && booking_extra.b_bp_blocks && (t += "&bp_blocks=" + booking_extra.b_bp_hid + ":" + booking_extra.b_bp_blocks.join(","), booking_extra.b_bp_checkin && booking_extra.b_bp_checkout && (t += ":" + booking_extra.b_bp_checkin + ":" + booking_extra.b_bp_checkout));
try {
var a = /cors_js=1/.test(r.cookie) ? 1 :0;
t += "&cors=" + a;
} catch (i) {}
if (p && "object" == typeof p) for (var s in p) p.hasOwnProperty(s) && p[s] && (t += "&" + s + "=" + encodeURIComponent(p[s]));
_ = l, h.open("GET", "/js_errors?" + t, !0), h.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), h.onreadystatechange = function() {
4 != h.readyState || 503 != h.status && "shut up" != h.responseText || (r.kill = !0, u("error_catcher", "kill", 30));
}, h.send(), f++;
};
k(C);
}
return !1;
}
var x = y;
if (B && B.alrt_js && (x = alert), e.onerror = x, n.reportError = function(r, n, t) {
var o = "", i = "[" + (n || "Reported Error") + "] ";
try {
o = (i + (r.message || "") + " " + (r.stack || "")).slice(0, 500);
} catch (a) {}
o && (t && "object" == typeof t ? e.onerror(o, null, null, null, t) :e.onerror(o));
}, e.b_early_errors) for (var m = 0; m < e.b_early_errors.length; m++) e.onerror.apply(null, e.b_early_errors[m]);
}(window, document, window.booking);