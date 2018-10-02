var _i_ = this._i_ || function() {}, _r_ = this._r_ || function(e) {
return e;
};

!function(e, t) {
"use strict";
_i_("2de:800e1319");
var n = e.performance || e.mozPerformance || e.msPerformance || e.webkitPerformance || {}, o = !(!n || !n.getEntriesByName), i = !(!o || !n.now), r = {}, a = booking.env.b_debug_dc_performance_metrics;
function d(e) {
_i_("2de:6bf89d8b");
var t = "";
for (var n in e) if ("perf" == n) for (var o in e[n]) void 0 != e[n][o] && (t += "p_" + encodeURIComponent(o) + "=" + encodeURIComponent(e[n][o]) + "&"); else t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]) + "&";
a && console.log("Publishing metrics: " + JSON.stringify(e)), new Image(1, 1).src = "//cexp.booking.com/dc_performance.png?" + t, _r_();
}
function c(e) {
if (_i_("2de:fe64cd66"), o) {
var t = n.getEntriesByName(e);
if (t && t.length) return _r_(t[0]);
}
_r_();
}
var _ = function() {
if (_i_("2de:5ac86f49"), 0 == r[this.uid]) return a && console.log("[SUCCESS] Skipping duplicate response for " + this.uid), _r_();
a && console.log("[SUCCESS] Clearing timeout callback for " + this.uid), e.clearTimeout(r[this.uid]), r[this.uid] = !1;
var t, o = c(this.src);
if (o) a && console.log("Loading performance metrics for " + this.uid), t = parseInt(o.responseEnd - o.fetchStart, 10), d({
id:this.uid,
ms:isNaN(t) ? -1 :t,
perf:{
connect_end:o.connectEnd,
connect_start:o.connectStart,
domain_lookup_end:o.domainLookupEnd,
domain_lookup_start:o.domainLookupStart,
dom_complete:o.domComplete,
dom_content_loaded_event_end:o.domContentLoadedEventEnd,
dom_content_loaded_event_start:o.domContentLoadedEventStart,
dom_interactive:o.domInteractive,
dom_loading:o.domLoading,
fetch_start:o.fetchStart,
load_event_end:o.loadEventEnd,
load_event_start:o.loadEventStart,
navigation_start:o.navigationStart,
redirect_end:o.redirectEnd,
redirect_start:o.redirectStart,
request_start:o.requestStart,
response_end:o.responseEnd,
response_start:o.responseStart,
secure_connection_start:o.secureConnectionStart,
unload_event_end:o.unloadEventEnd,
unload_event_start:o.unloadEventStart
}
}); else {
a && console.log("Calculating basic timing data for " + this.uid);
var _ = i ? n.now() :+new Date();
t = parseInt(_ - this.start_time, 10), d({
id:this.uid,
ms:t > this.timeout ? -1 :t
});
}
_r_();
}, s = function() {
if (_i_("2de:7986b5cf"), 0 == r[this.uid]) return a && console.log("[SUCCESS] Skipping duplicate response for " + this.uid), _r_();
a && console.log("[ERROR] Clearing timeout callback for " + this.uid), e.clearTimeout(r[this.uid]), r[this.uid] = !1, d({
id:this.uid,
error:1
}), _r_();
}, u = function(e) {
return _i_("2de:8b12a1fa"), a && console.log("Creating image object for: " + JSON.stringify(e)), _r_(function() {
_i_("2de:1bb0a585");
var t = new Image(1, 1);
t.uid = e.uid, t.timeout = 1e3 * e.timeout, t.onerror = s, t.onload = _, r[e.uid] = setTimeout(function() {
_i_("2de:2b958c12"), r[e.uid] = !1, d({
id:e.uid,
error:2
}), _r_();
}, 1e3 * e.timeout), t.src = e.url, t.start_time = i ? n.now() :+new Date(), _r_();
});
};
e.dclmetrics = function(e) {
if (_i_("2de:6fa56264"), a && console.log("Got callback: " + JSON.stringify(e)), e && e.length && "[object Array]" === Object.prototype.toString.call(e)) for (var t = 0; t < e.length; t++) setTimeout(u(e[t]), 0);
_r_();
};
var l = function() {
_i_("2de:c9afb156"), setTimeout(function() {
_i_("2de:fdc1b530");
var e = t.createElement("script");
e.src = "//cexp.booking.com/dc_performance.js", t.getElementsByTagName("head")[0].appendChild(e), _r_();
}, 2e3), _r_();
};
e.addEventListener ? e.addEventListener("load", l, !1) :e.attachEvent && e.attachEvent("onload", l), _r_();
}(window, document);