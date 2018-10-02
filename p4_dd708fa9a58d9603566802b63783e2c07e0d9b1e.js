var _i_ = this._i_ || function() {}, _r_ = this._r_ || function(t) {
return t;
};

booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.calendar2 = {
loaded:!0,
run:!1
}), booking.ensureNamespaceExists("calendar2"), function(t, e, i, a, n) {
_i_("a41:14f21211"), i.ONE_DAY = 864e5, i.SUNDAY_FIRST = !0, i.DAYS_IN_MONTH = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ], i.DAY_STATES = {
disabled:!0,
weekend:!0,
selected:!0,
hilighted:!0,
"in-range":!0,
"first-in-range":!0,
"last-in-range":!0,
today:!0
};
var r = 1;
i.uid = function() {
return _i_("a41:f3cdee9f"), r++, _r_("calendar_" + r);
}, i.today = function() {
_i_("a41:18b0daf9");
var e = new Date(1e3 * t.env.b_timestamp), a = new Date(), n = Math.abs(e - a) > i.ONE_DAY;
return _r_(n ? new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), 0, 0, 0, 0) :new Date(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0, 0));
}, i.minToday = function() {
_i_("a41:994da17b");
var t = new Date(Date.now() - 396e5);
return _r_(new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), 0, 0, 0, 0)));
}, i.dayId = function(t, e, i) {
return _i_("a41:edc759a8"), _r_(Date.UTC(t, e, i, 0, 0, 0, 0));
}, i.monthId = function(t, e) {
return _i_("a41:7a731e19"), _r_("M" + Date.UTC(t, e, 1, 0, 0, 0, 0));
}, i.nextMonthId = function(t) {
if (_i_("a41:bf2f368a"), "string" != typeof t) return _r_(!1);
var a = t.split("-"), n = e.parseInt(a[0]), r = e.parseInt(a[1]), s = new Date(r, n + 1, 1);
return _r_(i.monthId(s));
}, i.previousMonthId = function(t) {
_i_("a41:597c618d");
var a = t.split("-"), n = e.parseInt(a[0]), r = e.parseInt(a[1]), s = new Date(r, n - 1, 1);
return _r_(i.monthId(s));
}, i.dayFactory = function(t, e) {
_i_("a41:06b06cb2");
var e = e || {};
return e.isWeekend = 0 === t.getDay() || 6 === t.getDay(), e.isDisabled = e.startDate && t < e.startDate || e.endDate && t > e.endDate || e.type && "checkin" === e.type && Math.abs(t - e.endDate) <= i.ONE_DAY, _r_(new i.Day(t, e));
}, i.weekFactory = function(t, e) {
return _i_("a41:42120a76"), _r_(new i.Week(e));
}, i.monthFactory = function(t, e, a) {
return _i_("a41:c50bfa50"), _r_(new i.Month(t, e, a));
}, i.yearFactory = function(t, e) {
return _i_("a41:2e954552"), _r_(new i.Year(t, e));
}, i.getNumberOfDaysInMonth = function(t, e) {
_i_("a41:70750c2d");
var a = i.DAYS_IN_MONTH[t];
return 1 === t && (e % 4 == 0 && e % 100 != 0 || e % 400 == 0) && (a = 29), _r_(a);
}, t.calendar2.WRAPPER_CLASS = "c2-wrapper", t.calendar2.STATES = {
HIDDEN:"hidden",
RANGE_SELECTED:"range-highlighted"
}, _r_();
}(booking, booking.tools, booking.calendar2, $), B.define("hijri-calendar", function() {
_i_("a41:e18bb072");
var t = 10631 / 30, e = 1948084, i = .1335, a = [ "ar_islamic_calendar_muharram", "ar_islamic_calendar_safar", "ar_islamic_calendar_rabiul_awwal", "ar_islamic_calendar_rabiul_akhir", "ar_islamic_calendar_jumadal_ula", "ar_islamic_calendar_jumadal_ukhra", "ar_islamic_calendar_rajab", "ar_islamic_calendar_shaban", "ar_islamic_calendar_ramadan", "ar_islamic_calendar_shawwal", "ar_islamic_calendar_dhul_qaadah", "ar_islamic_calendar_dhul_hijjah" ];
function n(n) {
_i_("a41:f72fb3ef");
var r = n.day, s = n.month, o = n.year, _ = s + 1, d = o;
3 > _ && (d -= 1, _ += 12);
var c = Math.floor(d / 100), h = 2 - c + Math.floor(c / 4);
1583 > d && (h = 0), 1582 === d && (_ > 10 && (h = -10), 10 == _ && (h = 0, r > 4 && (h = -10)));
var l = Math.floor(365.25 * (d + 4716)) + Math.floor(30.6001 * (_ + 1)) + r + h - 1524;
h = 0, l > 2299160 && (c = Math.floor((l - 1867216.25) / 36524.25), h = 1 + c - Math.floor(c / 4));
var u = l + h + 1524, f = Math.floor((u - 122.1) / 365.25), m = Math.floor(365.25 * f), g = Math.floor((u - m) / 30.6001);
r = u - m - Math.floor(30.6001 * g), s = g - 1, g > 13 && (f += 1, s = g - 13), o = f - 4716;
var p = l - e, b = Math.floor(p / 10631);
p -= 10631 * b;
var v = Math.floor((p - i) / t), y = 30 * b + v;
p -= Math.floor(v * t + i);
var D = Math.floor((p + 28.5001) / 29.5);
13 == D && (D = 12);
var C = p - Math.floor(29.5001 * D - 29), E = {
gregorian_day:r,
gregorian_month:s - 1,
gregorian_year:o,
julian_day:l - 1,
hijri_day:C,
hijri_month:D - 1,
hijri_year:y,
hijri_month_tag:a[D - 1]
};
return _r_(E);
}
var r = "1" === $.cookie("hijri_enabled") ? !0 :!1, s = B.env.b_hijri_calendar_available;
return _r_({
enable:function() {
_i_("a41:f41a946d"), s && !r && (r = !0, $.cookie("hijri_enabled", 1), B.eventEmitter.trigger("CALENDAR:hijri_enabled")), _r_();
},
disable:function() {
_i_("a41:3e456148"), s && r && (r = !1, $.cookie("hijri_enabled", 0), B.eventEmitter.trigger("CALENDAR:hijri_disabled")), _r_();
},
enabled:function() {
return _i_("a41:d42b789f"), _r_(r);
},
available:function() {
return _i_("a41:3ec9dd98"), _r_(s);
},
convert:n
});
}), B.define("utils", function(t, e, i) {
_i_("a41:1ae1366f"), e.assertExists = function(t, e) {
if (_i_("a41:9d42554a"), "object" != typeof t || !(e in t)) throw new Error("Property " + e + " is not found");
_r_();
}, e.camelCaseKeys = function(t) {
_i_("a41:dbbbdfa4");
var e, i, a = {};
for (e in t) t.hasOwnProperty(e) && (i = e.replace(/-([a-zA-Z])/g, function(t, e) {
return _i_("a41:aefe3784"), _r_(e.toUpperCase());
}), a[i] = t[e]);
return _r_(a);
}, e.nodeData = function(t) {
_i_("a41:c0d6317e"), t.jquery && (t = t[0]), this.assertExists(t, "attributes");
var e, i, a, n = {};
for (e = 0, i = t.attributes.length; i > e; e++) a = t.attributes[e], a && 0 == a.name.indexOf("data-") && (n[a.name.replace(/^data-/, "")] = a.value);
return _r_(this.camelCaseKeys(n));
}, _r_();
}), B.define("utils/simple-unique-id", function(t, e, i) {
_i_("a41:9e09743c");
function a(t, e) {
return _i_("a41:ad6af9b3"), _r_(Math.floor(Math.random() * (e - t)) + t);
}
i.exports = function() {
return _i_("a41:79142c91"), _r_(new Date().getTime() + "_" + a(100, 999));
}, _r_();
}), B.define("window-visibilitychange", function(t, e, i) {
"use strict";
_i_("a41:369b7d76");
var a = t("event-emitter"), n = {
focus:"visible",
focusin:"visible",
pageshow:"visible",
blur:"hidden",
focusout:"hidden",
pagehide:"hidden"
};
i.exports = a.extend({
setup:function() {
_i_("a41:c2393e8e"), this.didSetup || (this.didSetup = !0, this.hidden = null, this.visibilityState = null, this.hiddenAttribute = "hidden", this.hiddenAttribute in document ? document.addEventListener("visibilitychange", this.visibilityChange.bind(this)) :(this.hiddenAttribute = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", this.visibilityChange.bind(this)) :(this.hiddenAttribute = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", this.visibilityChange.bind(this)) :(this.hiddenAttribute = "msHidden") in document ? document.addEventListener("msvisibilitychange", this.visibilityChange.bind(this)) :"onfocusin" in document ? document.onfocusin = document.onfocusout = this.visibilityChange.bind(this) :window.onpageshow = window.onpagehide = window.onfocus = window.onblur = this.visibilityChange.bind(this)), _r_();
},
visibilityChange:function(t) {
_i_("a41:2ef96ee8"), t = t || window.event;
var e = this.visibilityState;
t.type in n ? (this.hidden = "hidden" == n[t.type], this.visibilityState = n[t.type]) :(this.hidden = document[this.hiddenAttribute], this.visibilityState = document[this.hiddenAttribute] ? "hidden" :"visible"), e != this.visibilityState && this.emit("visibilitychange", this.visibilityState), _r_();
}
}), i.exports.addListener = i.exports.on = function() {
_i_("a41:2f617f65"), i.exports.setup(), a.prototype.addListener.apply(i.exports, arguments), _r_();
}, _r_();
}), B.define("window-scroller", [ "jquery", "promise" ], function(t, e) {
_i_("a41:a4a96a0b");
var i = t(window), a = jQuery({
progress:0
}), n = 10, r = 700, s = 5;
function o(t, a, r, s) {
_i_("a41:9f918506");
var o, _ = "number" == typeof s ? s :n;
if (!t || !t.length) return _r_(new e(function(t) {
_i_("a41:8dee672b"), t(), _r_();
}));
if (a) o = h(t).top - _; else {
var d = c(t, _);
null === d && (d = i.scrollTop()), o = d;
}
return _r_(this.scrollToOffset(o, r));
}
function _(t, n) {
_i_("a41:161038fe"), a.stop(!0);
var r = i.scrollTop(), o = t;
return _r_(new e(function(t) {
_i_("a41:5e09766a"), Math.abs(r - o) < s ? t() :d(r, o, n, t), _r_();
}));
}
function d(t, e, n, s) {
_i_("a41:fafb30c7"), a[0].progress = 0, a.animate({
progress:1
}, {
step:function(a) {
_i_("a41:3800b453"), i.scrollTop(t + a * (e - t)), _r_();
},
duration:"number" == typeof n ? n :r,
easing:"function" == typeof jQuery.easing.easeInOutExpo ? "easeInOutExpo" :"swing",
complete:s
}), _r_();
}
function c(t, e) {
if (_i_("a41:9200966d"), 0 === t.height()) return _r_(null);
var i = h(t), a = l(), n = i.top < a.top, r = i.bottom > a.bottom, s = t.outerHeight() + e > u();
return _r_(n || r ? s || n ? i.top - e :i.bottom + e - u() :null);
}
function h(t) {
_i_("a41:1298f338");
var e = t.offset().top;
return _r_({
top:e,
bottom:e + t.outerHeight()
});
}
function l() {
_i_("a41:73f45065");
var t = i.scrollTop();
return _r_({
top:t,
bottom:t + u()
});
}
function u() {
return _i_("a41:70d4d0ea"), _r_(window.innerHeight || document.documentElement.clientHeight);
}
return _r_({
scrollToBlock:o,
scrollToOffset:_
});
}), B.define("countdown", [ "jquery", "event-emitter" ], function(t, e) {
_i_("a41:b750e9ec");
var i = function(e) {
if (_i_("a41:ae517d41"), e.endTime) "number" == typeof e.endTime ? this.endTime = new Date(e.endTime) :this.endTime = Date.parse(e.endTime); else {
if (!e.timeLeft) throw new Error("Please pass either endTime or timeLeft.");
this.endTime = new Date(Date.now() + e.timeLeft);
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
}, this.options = t.extend(!0, {}, this.defaults, e), this._processOptions(), this._init(), _r_(this);
};
return t.extend(i.prototype, {
_processOptions:function() {
_i_("a41:1e129d9e");
var t = this.options.leadingZeroes;
if ("boolean" == typeof t) for (var e = 0; e < this.dimensionsToCheck.length; e++) this.options.leadingZeroes[this.dimensionsToCheck[e]] = t;
_r_();
},
_init:function() {
_i_("a41:90a28ff6"), e.extend(this), this.previousTime = !1, this._saveStartRemainingTime(), this._setCallbacks(), this._start(), _r_();
},
_saveStartRemainingTime:function() {
_i_("a41:5239a844"), this.startRemainingTime = this._getRemainingTime(), _r_();
},
_start:function() {
_i_("a41:c093452d"), this._processTime(), this.timer = setInterval(this._processTime.bind(this), this.options.updateInterval), _r_();
},
_processTime:function() {
_i_("a41:5c8aa07e");
var t = this._getRemainingTime();
t.total >= 0 ? (this._fireEvents(t), this.previousTime = t) :(this.stop(), this._fireEvents(!1)), _r_();
},
_getRemainingTime:function() {
_i_("a41:6b308dcb");
var t = this.endTime - Date.now(), e = Math.floor(t / 1e3 % 60), i = Math.floor(t / 1e3 / 60 % 60), a = Math.floor(t / 36e5 % 24), n = Math.floor(t / 864e5);
return _r_({
total:t,
days:n,
hours:a,
minutes:i,
seconds:e
});
},
_fireEvents:function(t) {
if (_i_("a41:d85a9d51"), !this.previousTime) return _r_();
t ? (this._fireProgressEvents(t), this._fireEveryTickEvent(t)) :this._fireExpiredEvent(), _r_();
},
_fireProgressEvents:function(t) {
_i_("a41:6a426117");
for (var e = this, i = 0; i < this.dimensionsToCheck.length; i++) this._dimensionIsChanged(t, this.dimensionsToCheck[i]) && this.trigger("changed", {
type:this.dimensionsToCheck[i],
remainingTime:e._formatDate(t)
});
_r_();
},
_fireEveryTickEvent:function(t) {
_i_("a41:12f85d76"), this.trigger("ticked", {
remainingTime:this._formatDate(t)
}), _r_();
},
_fireExpiredEvent:function() {
_i_("a41:89c635b0"), this.trigger("expired", {
timeExpired:this._formatDate(this.startRemainingTime)
}), _r_();
},
_dimensionIsChanged:function(t, e) {
return _i_("a41:bdadff41"), _r_(!!(t[e] - this.previousTime[e]));
},
_setCallbacks:function() {
_i_("a41:c395cd72");
var t = this;
this.options.callback && "function" == typeof this.options.callback && this.on("ticked", function(e) {
_i_("a41:e0e4db99"), t.options.callback(t._formatDate(e.remainingTime)), _r_();
}), this.options.expiredCallback && "function" == typeof this.options.expiredCallback && this.on("expired", function(e) {
_i_("a41:2cacaabf"), t.options.expiredCallback(t._formatDate(e.remainingTime)), _r_();
}), this.options.callbacks && this.on("changed", function(e) {
_i_("a41:3ef813f1"), t.options.callbacks[e.type] && "function" == typeof t.options.callbacks[e.type] && t.options.callbacks[e.type](t._formatDate(e.remainingTime)), _r_();
}), _r_();
},
_formatDate:function(t) {
_i_("a41:1aa570d0");
var e;
for (var i in t) this.options.leadingZeroes[i] && t.hasOwnProperty(i) && (e = "" + t[i], e.length <= 1 && (t[i] = "0" + e));
return _r_(t);
},
getStartRemainingTime:function() {
return _i_("a41:ab1fd337"), _r_(this._formatDate(this.startRemainingTime));
},
stop:function() {
_i_("a41:79f6c547"), clearInterval(this.timer), _r_();
},
proceed:function() {
_i_("a41:c3c5fef5"), this._start(), _r_();
}
}), _r_(i);
}), function(t, e, i) {
_i_("a41:37664f8a");
var a = t.require("jquery"), n = t.require("window-scroller"), r = 10, s = "OTfdASFbLYQCLBMWLMSFKTSdZPBcfTRe", o = "index" === t.env.b_action && t.et.track(s);
i.Calendar = function(e, a) {
_i_("a41:3af59e17"), this.id_ = i.uid(), this.lazyEvents = {}, this.days = {}, this.daysIndex = [], this.months = {}, this.monthsIndex = [], this.selectedDays_ = [], this.states_ = {}, this.highlightedRanges_ = {}, this.highlightedRangesMeta_ = {}, this.firstShow = !0, this.search = a.search, this.initBaseMarkup(e, a.positioning), this.addState(t.calendar2.STATES.HIDDEN), this.$input.data("calendar2", this), this.setOptions(a), a.type && this.$element.addClass(this.getStateClassName_(a.type)), a.arrow && this.$element.addClass(this.getStateClassName_("has-arrow")), a.lazy ? this.bindLazyLoadingEvents() :this.initLazyMethods(), this.onReady(), this.initialized = !0, _r_();
}, i.Calendar.prototype = {
constructor:i.Calendar,
id:function() {
return _i_("a41:b559b2e8"), _r_(this.id_);
},
type:function() {
return _i_("a41:a7af9e56"), _r_(this.options && this.options.type || "unknown");
},
initBaseMarkup:function(e, i) {
_i_("a41:b3470771"), this.$input = e;
var n = a('<div class="' + t.calendar2.WRAPPER_CLASS + " " + this.getStateClassName_("hidden") + '"></div>');
"inside" === i ? (this.$element = n, this.$input.append(this.$element)) :"outside" === i ? (this.$element = n, a(document.body).append(this.$element)) :this.$element = this.$input.wrap(n).parent(), this.$element.addClass(this.getStateClassName_("position-" + i)), this.startListeningForTrigger(), _r_();
},
setOptions:function(t) {
_i_("a41:6678db7e");
var e = this.initialized && (t.startDate || t.endDate);
t = a.extend(this.options || {}, t), t.startDate = new Date(t.startDate), t.endDate = new Date(t.endDate), t.startDateId = i.dayId(t.startDate.getFullYear(), t.startDate.getMonth(), t.startDate.getDate()), t.endDateId = i.dayId(t.endDate.getFullYear(), t.endDate.getMonth(), t.endDate.getDate()), t.calendarWidth = t.monthWidth * t.monthsVisible + t.borderWidth * (t.monthsVisible - 1), this.options = t, e && this.rebuildCalendarMarkup(), _r_();
},
setDefaultDates:function() {
_i_("a41:5c4fab4a");
var t = this.options, e = t.defaultDate || null;
e && e.year && e.month >= 0 && e.date >= 0 ? (this.selectDay(i.dayId(e.year, e.month, e.date)), this.selectMonth(i.monthId(e.year, e.month))) :this.selectMonth(this.monthsIndex[0], {
force:!0
}), _r_();
},
getCalendarClassname:function() {
_i_("a41:9e69e85e");
var t = "c2-calendar";
return "rtl" === this.options.direction && (t += " c2-calendar-rtl"), this.options.extraClasses && (t += " " + this.options.extraClasses), _r_(t);
},
initLazyMethods:function() {
_i_("a41:e657515d"), this.unbindLazyLoadingEvents(), this.rebuildCalendarMarkup(), this.setDefaultDates(), this.onLazyInitiated(), _r_();
},
rebuildCalendarMarkup:function() {
_i_("a41:6ad81de5"), this.initialized && (this.$calendarElement && this.$calendarElement.remove(), this.months = {}, this.monthsIndex = []), this.initMarkup(), this.bindElementsToModels(), this.setupOffsetsAndViewport_(), this.fitHorizontalPosition(), this.bindEvents(), o && this.initAccessibility(), _r_();
},
refreshDisabledDays:function() {
_i_("a41:b87c03fa");
var t = this;
a.each(this.days, function(e, i) {
_i_("a41:0ff4043f"), i.id() <= t.options.startDateId || i.id() > t.options.endDateId ? i.addState("disabled") :i.removeState("disabled"), _r_();
}), _r_();
},
initMarkup:function() {
_i_("a41:0810e6e4");
var e = this.getOption_("title"), i = this.createMonths(), n = "", r = this.options.closeButton ? '<button class="c2-calendar-close-button c2-calendar-close-button-clearappearance" tabindex="0" aria-label="' + t.jstmpl.translations("a11y_sr_close_calendar_icon") + '"><i class="c2-calendar-close-button-icon">×</i></button>' :"", s = this.options.calendarWidth + "px", _ = "";
this.options.pricePlaceHolder && (_ = '<div class="c2-progress-bar"><div class="c2-progress-bar-inner"></div></div>');
var d = "";
if (this.options.showStartEndTimes && (d = this.createTimeSelectors()), o) {
var c = '<div class="c2-button c2-button-earlier"><div class="c2-button-inner a11y_sb_calendar_prev_next_month_button" role="presentation" aria-hidden="true">&larr;</div></div><div class="c2-button c2-button-further"><div class="c2-button-inner a11y_sb_calendar_prev_next_month_button" role="presentation" aria-hidden="true">&rarr;</div></div>', h = t.jstmpl.translations("acc_index_checkin_calendar_opened"), l = t.jstmpl.translations("acc_index_checkout_calendar_opened"), u = t.jstmpl.translations("acc_index_choose_checkin_date_arrowkeys"), f = t.jstmpl.translations("acc_index_choose_checkout_date_arrowkeys"), m = t.jstmpl.translations("acc_cal_open_open"), g = t.jstmpl.translations("acc_cal_open_notification");
"checkin" === this.options.type && (m = h, g = u), "checkout" === this.options.type && (m = l, g = f);
var p = '<div style="width:' + s + ';" class="' + this.getCalendarClassname() + '" role="dialog" aria-label="' + m + '" aria-modal="true"><div role="application"><div class="c2-calendar-header" aria-label="' + g + '" tabindex="-1" >' + e + n + r + _ + '</div><div class="c2-calendar-body" role="presentation">' + c + '<div class="c2-calendar-viewport" role="presentation"><div class="c2-calendar-inner" role="presentation">' + i + "</div></div>" + d + '<div class="c2-calendar-footer" role="presentation"><div class="c2-calendar-footer-dynamic"></div></div></div></div></div>';
} else var c = '<div class="c2-button c2-button-earlier"><span class="c2-button-inner">&larr;</span></div><div class="c2-button c2-button-further"><span class="c2-button-inner">&rarr;</span></div>', p = '<div style="width:' + s + ';" class="' + this.getCalendarClassname() + '"><div class="c2-calendar-header">' + e + n + r + _ + '</div><div class="c2-calendar-body"><div class="c2-button c2-button-earlier"><span class="c2-button-inner">&larr;</span></div><div class="c2-button c2-button-further"><span class="c2-button-inner">&rarr;</span></div><div class="c2-calendar-viewport"><div class="c2-calendar-inner">' + i + "</div></div>" + d + '<div class="c2-calendar-footer"><div class="c2-calendar-footer-dynamic"></div></div></div></div>';
this.$calendarElement = a(p), this.$viewport = this.$calendarElement.find(".c2-calendar-viewport"), this.$screen = this.$viewport.find(".c2-calendar-inner"), this.$footer = this.$calendarElement.find(".c2-calendar-footer"), this.$header = this.$calendarElement.find(".c2-calendar-header"), this.$element.append(this.$calendarElement), _r_();
},
createMonths:function() {
_i_("a41:cd28dc6c");
var t = "", e = this.options, i = e.startDate.getFullYear(), a = e.endDate.getFullYear(), n = e.startDate.getMonth(), r = e.endDate.getMonth();
for (t += '<div class="c2-months-table">'; a > i || i === a && r >= n; ) t += this.createMonth(i, n).getHTML(), (n + 1) % 12 === 0 && i++, n = (n + 1) % 12;
return t += "</div>", _r_(t);
},
createMonth:function(t, e, a) {
_i_("a41:1aa78f3a");
var n = new i.Month(t, e, this), r = n.id();
return this.months[r] = n, this.monthsIndex.push(r), _r_(n);
},
createDay:function(t, e, a) {
_i_("a41:246e6763");
var n = new i.Day(t, e, a, this), r = n.id();
return (r < this.options.startDateId || r > this.options.endDateId) && n.addState("disabled"), this.days[r] = n, this.daysIndex.push(r), _r_(n);
},
getDay:function(t) {
return _i_("a41:caeaab6a"), _r_(this.days[t]);
},
createTimeSelectors:function() {
return _i_("a41:a7d1202c"), _r_('<div class="c2-calendar-time-selectors"></div>');
},
bindElementsToModels:function() {
_i_("a41:5ff4ec32");
for (var t = this.$calendarElement.find(".c2-month"), e = this.$calendarElement.find(".c2-day"), i = 0, a = t.length; a > i; i++) this.months[t[i].getAttribute("data-id")].setElement(t[i]);
for (var i = 0, a = e.length; a > i; i++) this.days[e[i].getAttribute("data-id")].setElement(e[i]);
_r_();
},
setupOffsetsAndViewport_:function() {
_i_("a41:8c1995eb");
for (var t, e, i = this.options.borderWidth, a = this.options.monthWidth, n = 0, r = this.monthsIndex.length; r > n; n++) "rtl" === this.options.direction ? (e = (r - (n + 1)) * (a + i), t = (r - (n + this.options.monthsVisible)) * (a + i)) :(t = n * (a + i), e = t), this.months[this.monthsIndex[n]].setOffset(t), this.months[this.monthsIndex[n]].setPosition(e);
_r_();
},
setCurrentMonth:function(t) {
return _i_("a41:3edd5f8a"), t ? -1 === this.monthsIndex.indexOf(t) && (t = this.monthsIndex[0]) :t = this.monthsIndex[0], this.currentMonth_ = t, _r_(this.currentMonth_);
},
getCurrentMonth:function() {
return _i_("a41:ad05a228"), _r_(this.currentMonth_ || this.setCurrentMonth());
},
getCurrentMonthUtc:function() {
return _i_("a41:873a1de2"), _r_(this.months[this.getCurrentMonth()].utcts_);
},
getCurrentDay:function() {
return _i_("a41:d0280da5"), _r_(this.selectedDays()[0]);
},
getSelectedDay:function() {
_i_("a41:e9997857");
var t = this.getCurrentDay();
return _r_(t && this.days[t] ? this.days[t] :null);
},
selectMonth:function(t, e) {
_i_("a41:626176cc");
var i, e = e || {}, a = this.getTargetMonth(t), n = {
type:"any"
};
if (this.getCurrentMonth() === a && !e.force) return _r_();
i = this.months[a], i && (this.setOffset_(i.getOffset()), this.setCurrentMonth(t)), this.monthsIndex[0] === this.getCurrentMonth() ? n.type = "first" :this.monthsIndex[this.monthsIndex.length - this.options.monthsVisible] === a && (n.type = "last"), this.onMonthShown(null, n), _r_();
},
getNextMonth:function() {
_i_("a41:8ab75bf0");
var t = this.monthsIndex.indexOf(this.getCurrentMonth()), e = t + 1;
return _r_(this.monthsIndex[e]);
},
getPreviousMonth:function() {
_i_("a41:5cd9ed37");
var t = this.monthsIndex.indexOf(this.getCurrentMonth()), e = t - 1;
return _r_(this.monthsIndex[e]);
},
getTargetMonth:function(t) {
_i_("a41:d3da97d7");
var e, i = this.monthsIndex.indexOf(t), a = i + this.options.monthsVisible - 1;
return a >= this.monthsIndex.length && (e = a - (this.monthsIndex.length - 1), a -= e, i -= e), _r_(this.monthsIndex[i]);
},
getVisibleMonths:function() {
_i_("a41:f64e12f2");
var t = this.monthsIndex.slice(0), e = this.monthsIndex.indexOf(this.getCurrentMonth());
return t = t.slice(e, e + this.options.monthsVisible), _r_(t);
},
setOffset_:function(e, i) {
_i_("a41:eaa4bf92");
var a = "margin-left", n = {};
n[a] = -e, i || 2 == t.env.b_site_type_id ? this.$screen.stop(!0, !0).css(n) :this.$screen.stop(!0, !0).animate(n, 300, "easeOutQuad"), _r_();
},
selectedDays:function() {
return _i_("a41:c44eba76"), _r_(this.selectedDays_);
},
selectDay:function(t, e) {
if (_i_("a41:a6e23148"), !t) return _r_(!1);
var i, a = this.days[t];
if (!a || a.hasState("disabled")) return _r_();
for (i in this.days) this.days.hasOwnProperty(i) && this.days[i].hasState("selected") && this.days[i].removeState("selected");
a.addState("selected"), this.selectedDays_ = [ a.id() ], this.onDateSelected(null, a.id(), e), _r_();
},
selectRange:function(e, i) {
_i_("a41:b3bf941e");
var a = this.daysIndex.indexOf(e), n = this.daysIndex.indexOf(i) + 1, r = this.daysIndex.slice(a, n);
if (this.selectedRange_) for (var s = 0, o = this.selectedRange_.length; o > s; s++) this.days[this.selectedRange_[s]].removeState("first-in-range").removeState("in-range").removeState("last-in-range");
for (var s = 0, o = r.length; o > s; s++) this.days[r[s]].addState("in-range"), 0 === s ? this.days[r[s]].addState("first-in-range") :s === o - 1 && this.days[r[s]].addState("last-in-range");
r.length ? this.addState(t.calendar2.STATES.RANGE_SELECTED) :this.removeState(t.calendar2.STATES.RANGE_SELECTED), this.selectedRange_ = r, _r_();
},
highlightRange:function(e, a, n) {
_i_("a41:b8f6c09d"), this.highlightedRanges_ || (this.highlightedRanges_ = {}, this.highlightedRangesMeta_ = {});
var r, s = this.daysIndex.indexOf(e), o = this.daysIndex.indexOf(a) + 1, _ = this.daysIndex.slice(s, o);
return r = n && n.name ? n.name :i.uid(), this.deleteRange_(r), _.length ? (this.createRange_(_, r, n), this.addState(t.calendar2.STATES.RANGE_SELECTED), this.fireCallback("onRangeHighlighted", r)) :(this.removeState(t.calendar2.STATES.RANGE_SELECTED), this.fireCallback("onRangeUnHighlighted", r)), _r_(r);
},
unHighlightRange:function(e) {
_i_("a41:c9d31b03"), this.highlightedRanges_[e] && (this.deleteRange_(e), this.removeState(t.calendar2.STATES.RANGE_SELECTED), this.fireCallback("onRangeUnHighlighted", e)), _r_();
},
createRange_:function(t, e, i) {
_i_("a41:dadedf21");
for (var a = 0, n = t.length; n > a; a++) i && i.className ? this.days[t[a]].addState(i.className) :this.days[t[a]].addState("in-range"), i && i.tooltip && this.days[t[a]].setTitle(i.tooltip), 0 === a ? this.days[t[a]].addState("first-in-range") :a === n - 1 && this.days[t[a]].addState("last-in-range");
this.highlightedRanges_[e] = t, this.highlightedRangesMeta_[e] = t, _r_();
},
deleteRange_:function(t) {
_i_("a41:f6d550ce");
var e = this.highlightedRanges_[t], i = !1, a = !1;
if (this.highlightedRangesMeta_[t] && (i = this.highlightedRangesMeta_[t].className || !1, a = this.highlightedRangesMeta_[t].tooltip || !1), e) {
for (var n = 0, r = e.length; r > n; n++) this.days[e[n]].removeState("first-in-range").removeState("in-range").removeState("last-in-range"), i && this.days[e[n]].removeState(i), a && this.days[e[n]].removeTitle();
this.highlightedRanges_[t] = null, this.highlightedRangesMeta_[t] = null;
}
_r_();
},
shown:function() {
return _i_("a41:23b3127c"), _r_(!this.hasState(t.calendar2.STATES.HIDDEN));
},
changeInput:function(t) {
_i_("a41:5f69b673"), this.$input = t, _r_();
},
show:function() {
_i_("a41:90fc3341"), this.lazyInitiated || this.initLazyMethods(), this.firstShow && "checkin" == this.options["calendar2-type"] && (this.firstShow = !1), t.eventEmitter.trigger("CALENDAR:opened", {
id:this.id(),
instance:this
}), this.removeState(t.calendar2.STATES.HIDDEN), this.onReflow(), this.fireCallback("onShow"), "outside" === this.options.positioning ? this.fitVerticalPositionAbsolute() :this.fitVerticalPosition(), this.adjustHeight(), t.eventEmitter.trigger("CALENDAR:shown", {
id:this.id(),
instance:this
});
var e = this.getTargetMonth(this.getCurrentMonth()), i = this.months[e];
t.env.rtl && i && this.setOffset_(i.getOffset(), !0), "index" === t.env.b_action && t.et.stage("UBKeJAEYBXYQCLBMC", 1), _r_();
},
hide:function() {
_i_("a41:5f45cc83"), t.eventEmitter.trigger("CALENDAR:closed", {
id:this.id(),
instance:this
}), this.addState(t.calendar2.STATES.HIDDEN), this.fireCallback("onHide"), _r_();
},
toggle:function() {
_i_("a41:16d59d71"), this.shown() ? this.hide() :this.show(), _r_();
},
fitHorizontalPosition:function() {
_i_("a41:4961bdc3");
var t = window, e = this.$element, i = this.$calendarElement, n = "rtl" === this.options.direction, s = n ? "right" :"left", o = 0, _ = e.offset().left, d = i.outerWidth() + r;
n ? o = e.width() + _ - d :(o = a(t).width() - (_ + d), r > _ + o && (o = -r)), this.options.alignToRight && (o = this.$element.width() - this.$calendarElement.outerWidth()), 0 > o ? i.css(s, o) :i.css(s, 0), _r_();
},
fitVerticalPosition:function() {
_i_("a41:4eb2a3d8");
var t = a(window), e = t.scrollTop(), i = this.$calendarElement, s = r + i.offset().top + i.height() - t.height();
s > e && n.scrollToOffset(s), _r_();
},
fitVerticalPositionAbsolute:function() {
_i_("a41:e33cb137");
var t = this.$input.offset();
this.$element.css({
position:"absolute",
top:t.top,
left:t.left
}), _r_();
},
resetModes:function() {
_i_("a41:6f9c7dae"), this.selectRange(), _r_();
},
adjustHeight:function(t) {
_i_("a41:e9fa1d23");
for (var e = this.getVisibleMonths(), i = 0, a = 0, n = 0; n < e.length; n++) i = this.months[e[n]].getHeight(t), a = i > a ? i :a;
a > 0 && this.$viewport.height(a), _r_();
},
trigger:function() {
_i_("a41:943f72a4"), this.$element.trigger.apply(this.$element, arguments), _r_();
},
fireCallback:function(t) {
_i_("a41:ad572c8a");
var e = [].slice.call(arguments, 1);
e.unshift(this), this.options[t] && "function" == typeof this.options[t] && this.options[t].apply(this, e), _r_();
},
bindEvents:function() {
_i_("a41:a451cea7");
var e = this, i = a(window);
this.eventsAttached || (this.$input.bind("keydown", function(t) {
_i_("a41:610f0ef8"), e.onKeyDown(t), _r_();
}), this.$input.bind("click touchstart", function(i) {
if (_i_("a41:3abe27f4"), "index" === t.env.b_action && t.env.fe_sb_calendar_single_instance) return _r_(!0);
for (var a = i.target; a && a !== i.currentTarget; ) {
if (a.hasAttribute && a.hasAttribute("data-calendar2-cant-touch-this")) return _r_();
a = a.parentNode;
}
return e.toggle(), _r_(!1);
}), this.$element.bind("toggleCalendar", function() {
_i_("a41:c1f82844"), e.toggle(), _r_();
}), this.$element.bind("showCalendar", function() {
_i_("a41:3ae0b305"), e.show(), _r_();
}), this.$element.bind("hideCalendar", function() {
_i_("a41:5aeaafc0"), e.hide(), _r_();
}), this.$element.click(function(t) {
_i_("a41:22420d87"), 0 === a(t.target).parents(".b-link_external").length && (t.preventDefault(), t.stopPropagation()), _r_();
}), i.click(function() {
_i_("a41:cca1a92f"), e.shown() && e.hide(), _r_();
}), i.resize(function() {
_i_("a41:8f702416"), e.fitHorizontalPosition(), _r_();
}), i.resize(function() {
_i_("a41:4d71f5b3");
var t, i, a, n = 100, r = +new Date() - n - 1, s = function() {
_i_("a41:6155d326"), e.shown() && e.onReflow(), _r_();
};
return _r_(function() {
_i_("a41:70206ab0"), window.clearTimeout(t), i = +new Date(), a = i - r, a >= n ? (r = i, s()) :t = window.setTimeout(s, n), _r_();
});
}()), this.$element.bind("dateSelected", a.proxy(this.onExternalDateSelected, this)), this.$element.bind("rangeSelected", a.proxy(this.onExternalRangeSelected, this)), this.$element.bind("monthSelected", a.proxy(this.onExternalMonthSelected, this)), this.eventsAttached = !0), this.$calendarElement.on("mouseenter", ".c2-day", a.proxy(this.onDayMouseEnter, this)), this.$calendarElement.on("mouseleave", ".c2-day", a.proxy(this.onDayMouseLeave, this)), this.$calendarElement.on("click touchstart", ".c2-day", a.proxy(this.onDayClick, this)), this.$calendarElement.on("click touchstart", ".c2-button-earlier", a.proxy(this.onEarlierButtonClick, this)), this.$calendarElement.on("click touchstart", ".c2-button-further", a.proxy(this.onFurtherButtonClick, this)), this.$calendarElement.on("click touchstart", ".c2-calendar-close-button", a.proxy(this.onCloseButtonClick, this)), _r_();
},
bindLazyLoadingEvents:function() {
_i_("a41:93d4cf5a"), this.$element.bind("mouseenter.calendar2", a.proxy(this.onElementMouseEnter, this)), this.$element.bind("touchstart.calendar2", a.proxy(this.onElementTouchStart, this)), this.$element.bind("show", a.proxy(this.show, this)), this.$element.bind("hide", a.proxy(this.hide, this)), this.$element.bind("toggle", a.proxy(this.toggle, this)), this.$input.bind("mouseenter.calendar2", a.proxy(this.onElementMouseEnter, this)), this.$input.bind("touchstart.calendar2", a.proxy(this.onElementTouchStart, this)), _r_();
},
unbindLazyLoadingEvents:function() {
_i_("a41:11834d12"), this.$element.unbind("mouseenter.calendar2 touchstart.calendar2"), this.$input.unbind("mouseenter.calendar2 touchstart.calendar2"), _r_();
},
addState:function(t) {
_i_("a41:9a42e3bc"), this.states_[t] || (this.states_[t] = !0, this.$element.addClass(this.getStateClassName_(t))), _r_();
},
removeState:function(t) {
_i_("a41:f248a07d"), this.states_[t] && (this.states_[t] = !1, this.$element.removeClass(this.getStateClassName_(t))), _r_();
},
hasState:function(t) {
return _i_("a41:b3421365"), _r_(!!this.states_[t]);
},
getStateClassName_:function(t) {
return _i_("a41:65422e32"), _r_(t ? "c2-wrapper-s-" + t :"");
},
onElementMouseEnter:function() {
_i_("a41:019e42e8"), this.unbindLazyLoadingEvents(), this.initLazyMethods(), _r_();
},
onElementTouchStart:function(t) {
_i_("a41:7103119a"), t.preventDefault(), this.unbindLazyLoadingEvents(), this.$element.bind("lazyInitiated", a.proxy(function() {
_i_("a41:28b1a0be"), this.show(), this.$element.unbind("lazyInitiated"), _r_();
}, this)), this.initLazyMethods(), _r_();
},
onDayClick:function(e) {
_i_("a41:8f2ee414"), e.preventDefault(), e.stopPropagation();
var i = t.search.dates("checkout"), n = e.currentTarget.getAttribute("data-id");
if (t.eventEmitter.trigger("CALENDAR:dayclick", {
instance:this
}), this.fireCallback("onDayClick", n), this.selectDay(n, {
type:"user"
}), "checkin" === this.options.type) {
var r = t.search.dates("checkin"), s = t.search.dates("checkout");
1 >= s - r && i !== s && (a(".c2-wrapper-s-checkout").trigger("mouseenter.calendar2"), a(".xp__dates__checkout .b-datepicker").trigger("showCalendar"));
}
_r_();
},
onCloseButtonClick:function(t) {
_i_("a41:84dc9915"), t.preventDefault(), t.stopPropagation(), this.hide(), _r_();
},
onFurtherButtonClick:function(e) {
_i_("a41:dfdad9cf"), e.preventDefault(), e.stopPropagation(), this.selectMonth(this.getNextMonth()), t.eventEmitter.trigger("CALENDAR:nextclick", {
instance:this
}), _r_();
},
onEarlierButtonClick:function(e) {
_i_("a41:7916f504"), e.preventDefault(), e.stopPropagation(), this.selectMonth(this.getPreviousMonth()), t.eventEmitter.trigger("CALENDAR:previousclick", {
instance:this
}), _r_();
},
onMonthShown:function(t, e) {
_i_("a41:d27a6bd5"), e && (this.$calendarElement.find(".c2-button-s-disabled").removeClass("c2-button-s-disabled"), "first" === e.type ? this.$calendarElement.find(".c2-button-earlier").addClass("c2-button-s-disabled") :"last" === e.type && this.$calendarElement.find(".c2-button-further").addClass("c2-button-s-disabled")), this.adjustHeight(), _r_();
},
onDateSelected:function(e, a, n) {
_i_("a41:d912ece7");
var r = this.getDay(a), s = i.monthId(r.getYear(), r.getMonth()), o = this.getVisibleMonths(), _ = n || {};
-1 === o.indexOf(s) && this.selectMonth(s), "api" !== _.type && this.options.closeOnDateSelected === !0 && this.hide(), "user" === _.type && (this.fireCallback("onDateSelected", r, _, this.search), t.env.b_force_dates && t.eventEmitter.trigger("FORM:user-changes", {
type:"date"
})), _r_();
},
onDayMouseEnter:function(t) {
_i_("a41:2bd69e40"), t.preventDefault();
var e = this.getDay(t.currentTarget.getAttribute("data-id"));
e.addState("hilighted"), this.fireCallback("onDayMouseEnter", e), _r_();
},
onDayMouseLeave:function(t) {
_i_("a41:2688ada9"), t.preventDefault();
var e = this.getDay(t.currentTarget.getAttribute("data-id"));
e.removeState("hilighted"), this.fireCallback("onDayMouseLeave", e), _r_();
},
onExternalMonthSelected:function(t, e) {
_i_("a41:0a96a051");
var a = e.value, n = i.monthId(a.year, a.month);
this.selectMonth(n), _r_();
},
onExternalDateSelected:function(t, e) {
_i_("a41:d252d31e");
var a, n = e.value;
if (!n) return _r_();
if (a = i.dayId(n.year, n.month, n.date), !a) return _r_();
if (this.getCurrentDay() === a) return _r_();
this.selectDay(a), _r_();
},
onExternalRangeSelected:function(t, e) {
_i_("a41:a4c1c165");
var a, n, r, s;
if (!e) return _r_();
if (a = e.startValue, n = e.endValue, !a || !n) return _r_();
r = i.dayId(a.year, a.month, a.date), s = i.dayId(n.year, n.month, n.date), this.selectRange(r, s), _r_();
},
hilightToday:function() {
_i_("a41:6bedb65c");
var t = i.today(), e = this.getDay(i.dayId(t.getFullYear(), t.getMonth(), t.getDate()));
e && e.addState("today"), _r_();
},
toggleNextPreviousControls:function() {
_i_("a41:b6975442"), 0 === this.monthsIndex.indexOf(this.getCurrentMonth()) && this.$calendarElement.find(".c2-button-earlier").addClass("c2-button-s-disabled"), _r_();
},
onReady:function() {
_i_("a41:f9a2b1cd"), this.fireCallback("onReady"), _r_();
},
onLazyInitiated:function() {
_i_("a41:18bdc275"), this.hilightToday(), this.toggleNextPreviousControls(), this.lazyInitiated = !0, this.fireCallback("onLazyInitiated"), this.trigger("lazyInitiated"), _r_();
},
onKeyDown:function(t) {
_i_("a41:7b351877"), this.fireCallback("onKeyDown", t), _r_();
},
adjustArrowPosition:function() {
_i_("a41:a9c7d1de");
var t, e, i, a;
this.options.arrow && ("rtl" === this.options.direction ? (t = -1 * parseInt(this.$calendarElement.css("right"), 10) + 9, a = ".c2-wrapper-s-has-arrow .c2-calendar:before { right: " + t + "px !important;}") :(t = -1 * parseInt(this.$calendarElement.css("left"), 10) + 14, a = ".c2-wrapper-s-has-arrow .c2-calendar:before { left: " + t + "px !important;}"), isNaN(t) || (this.data("arrowStyleElement") ? i = this.data("arrowStyleElement") :(e = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style"), i.type = "text/css", e.appendChild(i), this.data("arrowStyleElement", i)), i.styleSheet ? i.styleSheet.cssText = a :i.appendChild(document.createTextNode(a)))), _r_();
},
onReflow:function() {
_i_("a41:43b568d9"), this.fitHorizontalPosition(), this.adjustArrowPosition(), this.fireCallback("onReflow"), _r_();
},
customData_:{},
setCustomVariable_:function(t, e) {
if (_i_("a41:7687f3ff"), !t) throw new Error("setCustomVariable method requires a name parameter");
return "undefined" == typeof e && this.customData_.hasOwnProperty(t) && delete this.customData_[t], this.customData_[t] = e, _r_(this);
},
getCustomVariable_:function(t) {
if (_i_("a41:c932f3fc"), !t) throw new Error("getCustomVariable method requires a name parameter");
return _r_(this.customData_[t]);
},
data:function() {
if (_i_("a41:602c3ec4"), 1 === arguments.length) return _r_(this.getCustomVariable_(arguments[0]));
if (2 === arguments.length) return _r_(this.setCustomVariable_(arguments[0], arguments[1]));
throw new Error("calendar2 data function accepts maximum 2 parameters");
},
getOption_:function(t, e) {
_i_("a41:74fc21d2");
var i, a;
if (!t) throw new Error("calendar2 getOption_ function requires name parameter");
return i = this.options[t], e = e || {}, a = e.defaultValue || "", a = "function" == typeof i && e.interpolate !== !1 ? i.call(this) :i, _r_(a);
},
startListeningForTrigger:function() {
_i_("a41:233e23d9");
var e = ".sb-date-field__icon", i = this.$element.find(e);
i.length > 0 && (a(i).on("keydown click", function() {
_i_("a41:02e3a5a1"), t.et.stage(s, 1), _r_();
}), o && (a(i).bind("focusin", a.proxy(this.onDateIconFocus, this, this)), a(i).bind("keydown click", a.proxy(this.onDateIconAction, this, this))), this.initScreenReaderDetectedStages()), _r_();
},
onDateIconFocus:function(t, e) {
_i_("a41:3ee6cba6");
var i = e.target;
function n(e) {
if (_i_("a41:899f0577"), !t) return _r_();
t.$prevActiveElem = e, _r_();
}
function r(e) {
if (_i_("a41:5dd9cfa2"), !t) return _r_();
t.a11yNavMode = e, _r_();
}
n(a(i)), r(!0), t.$element && t.$element.trigger("mouseenter.calendar2"), _r_();
},
onDateIconAction:function(t, e) {
_i_("a41:f2d06302");
var i = [ 13, 32 ], a = e.keyCode;
if (!t) return _r_();
(i.indexOf(a) > -1 || "click" === e.type) && n();
function n() {
_i_("a41:451253c1"), t.shown() || setTimeout(function() {
_i_("a41:f51ec692"), t.$calendarElement && (t.$calendarElement.trigger("mouseenter.calendar2").trigger("showCalendar"), t.$calendarElement.addClass("cal_a11y_initialized")), _r_();
}, 300), _r_();
}
_r_();
},
initAccessibility:function() {
_i_("a41:53901279");
var e, i, n = this, r = 0, o = 0, _ = 0, d = '[tabindex="0"], button', c = t.jstmpl.translations("acc_cal_selected_you");
function h(e, i) {
if (_i_("a41:18ddc8d7"), !e || !i) return _r_();
var a = e.options.type || e.options.mode || e.options.calendar2Type, n = {
open:[ 1, 2 ],
monthFocus:[ 3 ],
daySelected:[ 4, 5 ]
}, r = 0;
"checkout" === a && "monthFocus" !== i && (r = 1), t.et.customGoal(s, n[i][r]), _r_();
}
function l(t, e) {
_i_("a41:3eeec227");
var i = n.monthsIndex[n.monthsIndex.length - 1], a = n.getCurrentMonth();
if (!t || !n.months[t]) return _r_();
a !== t && (n.setCurrentMonth(t), t !== i && n.setOffset_(e)), _r_();
}
function u(t) {
if (_i_("a41:56799461"), !t) return _r_();
t instanceof a && t.focus(), _r_();
}
function f() {
_i_("a41:ce5e8990");
var t = n.$calendarElement[0].querySelectorAll(d);
e = Array.prototype.slice.call(t), i = t.length, _r_();
}
function m(t, e) {
_i_("a41:342c07c2");
var i = document.getElementById("announcer");
if (!i) return _r_();
i.innerHTML = t, e && setTimeout(function() {
_i_("a41:c30dc1ac"), y(), _r_();
}, 50), _r_();
}
function g() {
if (_i_("a41:5d74e2f4"), document.getElementById("announcer")) return _r_();
var t = document.querySelector("body"), e = document.createElement("div");
e.setAttribute("aria-live", "assertive"), e.setAttribute("role", "alert"), e.setAttribute("aria-atomic", "true"), e.setAttribute("id", "announcer"), e.style.position = "absolute", e.style.opacity = 0, e.style.left = "-4000px", t.appendChild(e), _r_();
}
function p() {
_i_("a41:374a4918"), _ = 1, _r_();
}
function b() {
_i_("a41:6e2cfdb2"), _ = 0, _r_();
}
function v(t) {
if (_i_("a41:d827ffa5"), !n) return _r_();
n.a11yNavMode = t, _r_();
}
function y() {
if (_i_("a41:8451194f"), !n) return _r_();
if (n.$prevActiveElem) return _r_(a(n.$prevActiveElem).focus());
if (n.$input) return _r_(n.$input.focus());
n.$element && n.$element.focus(), _r_();
}
function D() {
_i_("a41:0c9f276b"), n.$prevActiveElem = document.activeElement || null, _r_();
}
function C() {
_i_("a41:b7d590d5"), o && (o = 0), _r_();
}
function E() {
_i_("a41:1eb41f68");
var t = i - 1;
o >= t ? o = 0 :o += 1, e[o] && e[o].focus(), _r_();
}
function w() {
_i_("a41:0f7edca8");
var t = i - 1;
0 === o ? o = t :o > t ? o = t :o -= 1, e[o] && e[o].focus(), _r_();
}
function k(t) {
if (_i_("a41:5b924f41"), !this.a11yNavMode) return _r_();
var e = this, i = t.keyCode;
switch (i) {
case 27:
t.preventDefault(), e.hide(), y(), b();
break;

case 37:
if (1 === _) return _r_();
w();
break;

case 39:
if (1 === _) return _r_();
E();
}
_r_();
}
function S(t) {
if (_i_("a41:019981b6"), !this.a11yNavMode) return _r_();
var e, i, r = t.type, s = a(t.target), o = s.hasClass("c2-month") || s.hasClass("c2-month-table");
switch (r) {
case "focusin":
o && (e = s.data("id") || s.parent().data("id"), i = s.data("offset") || s.parent().data("offset"), e && i >= 0 && l(e, i), h(n, "monthFocus")), s.hasClass("c2-day") || b();
break;

case "focusout":
o && b();
}
_r_();
}
function x(t) {
if (_i_("a41:94534e5c"), !this.a11yNavMode) return _r_();
var e = this, i = t.target, n = t.keyCode, s = t._currentTarget || null, o = e.months[a(s).data("id")] || null, d = o ? a(o.element_) :null, l = d.find(".c2-day:not(.c2-day-s-disabled)"), f = l.length, g = f - 1;
function v() {
if (_i_("a41:ab5cd370"), !a(i).hasClass("c2-day")) return _r_();
l.removeAttr("tabindex"), a(i).trigger("click", {
ignore:!0
}), h(e, "daySelected"), b(), i.title ? m(c + " " + i.title, !0) :y(), _r_();
}
switch (n) {
case 9:
1 === _ && (l.removeAttr("tabindex"), u(d), b(), E(), r = 0);
break;

case 37:
if (0 === _) return _r_();
if (t.preventDefault(), 0 === r) return r = g, l[r].focus(), _r_();
r -= 1, l[r].focus();
break;

case 38:
if (0 === _) return _r_();
if (t.preventDefault(), r -= 7, 0 > r) return r += 7, r = 0, d.find(".c2-month-table").focus(), l.removeAttr("tabindex"), b(), _r_();
l[r].focus();
break;

case 39:
if (0 === _) return _r_();
if (t.preventDefault(), r === g) return r = 0, l[r].focus(), _r_();
r += 1, l[r].focus();
break;

case 40:
if (t.preventDefault(), 0 === _) return l.attr("tabindex", -1), u(a(l[r])), p(), _r_();
if (r += 7, r > g) return r -= 7, _r_();
l[r].focus();
break;

case 13:
t.preventDefault(), v();
break;

case 32:
t.preventDefault(), v();
}
_r_();
}
function T(t, e) {
if (_i_("a41:66b35a8a"), !this.a11yNavMode) return _r_();
if (e && e.ignore) return _r_();
var i = t.target, r = a(i);
(r.hasClass("c2-day-inner") || r.hasClass("c2-day")) && (h(n, "daySelected"), b(), i.title ? m(c + " " + i.title, !0) :y()), _r_();
}
function M(t) {
_i_("a41:baa659f8");
var e = a(t.target);
e.hasClass("c2-calendar-close-button") && y(), _r_();
}
function $() {
_i_("a41:0ac35bd2");
var e = t.require("trap-focus");
e && n.$calendarElement[0] && e.trap(n.$calendarElement[0]), _r_();
}
function A() {
_i_("a41:c42f4101"), n.$calendarElement.on("keydown", a.proxy(k, n)), n.$calendarElement.on("focusin focusout", a.proxy(S, n)), n.$viewport.find(".c2-month").on("keydown", a.proxy(x, n)), n.$viewport.on("click", a.proxy(T, n)), n.$header.on("click", a.proxy(M, n)), _r_();
}
function I() {
_i_("a41:f77cd76f"), t.eventEmitter.on("CALENDAR:opened", function(t, e) {
_i_("a41:16d4bf80");
var i = n.id(), a = e.id;
i !== a || n.states_.hidden || setTimeout(function() {
_i_("a41:a839e6b4"), b(), n.$header && n.$header.focus(), C(), h(n, "open"), _r_();
}, 25), _r_();
}), t.eventEmitter.on("CALENDAR:closed", function(t, e) {
_i_("a41:20a6769f");
var i = n.id(), a = e.id;
i === a && (n.a11yNavMode && v(!1), b()), _r_();
}), _r_();
}
function R() {
_i_("a41:854c85ff"), D(), g(), f(), $(), A(), I(), _r_();
}
R(), _r_();
},
initScreenReaderDetectedStages:function() {
_i_("a41:840f5ee2");
var e = t.require("screen-reader-detector"), i = t.env.touch_os;
e && e.onDetect(function(e) {
_i_("a41:ecfa13a9"), i || t.et.stage(s, 2), _r_();
}), _r_();
}
}, _r_();
}(booking, booking.tools, booking.calendar2), function(t, e, i, a, n) {
_i_("a41:1abc5ae9");
var r = t.require("hijri-calendar"), s = t.require("et"), o = "OTfdASFbLYQCLBMWLMSFKTSdZPBcfTRe", _ = "index" === t.env.b_action && s.track(o), d = [];
if (t.env.b_week_start_correction_for_cc1 && t.env.b_week_end_correction_for_cc1) {
var c = 7, h = 1, l = 6, u = t.env.b_week_start_correction_for_cc1, f = t.env.b_week_end_correction_for_cc1;
h += u, l += f;
for (var m = 0; h > m; m++) d.push(m);
for (var m = l; c > m; m++) d.push(m);
}
i.Day = function(t, e, i, a) {
_i_("a41:84463b9e"), this.calendar_ = a, this.date_ = i, this.month_ = e, this.year_ = t, this.utcts_ = Date.UTC(t, e, i, 0, 0, 0, 0), this.id_ = this.utcts_, this.dateObject_ = new Date(this.utcts_), this.states_ = {}, this.stateClasses_ = "", _r_();
}, a.extend(i.Day.prototype, {
id:function() {
return _i_("a41:b5957501"), _r_(this.id_);
},
valueOf:function() {
return _i_("a41:1db0ea4a"), _r_(this.utcts_);
},
toString:function() {
return _i_("a41:e7ae972f"), _r_([ this.getDate(), this.getMonth() + 1, this.getYear() ].join("."));
},
setElement:function(t) {
return _i_("a41:c084de68"), this.element_ = t, _r_(this);
},
getElement:function() {
return _i_("a41:c1d65b6f"), _r_(this.element_);
},
getStateClasses_:function() {
_i_("a41:600f93d4");
var t, e = [];
for (t in this.states_) this.states_.hasOwnProperty(t) && this.states_[t] && e.push("c2-day-s-" + t);
return _r_(e);
},
getStateClassNames_:function() {
return _i_("a41:9342156b"), _r_(this.getStateClasses_().join(" "));
},
setTitle:function(t) {
_i_("a41:1b46f604"), this.element_.setAttribute("data-title", t), _r_();
},
removeTitle:function() {
_i_("a41:5cee1fd1"), this.element_.removeAttribute("data-title"), _r_();
},
applyStates_:function() {
if (_i_("a41:486667c3"), !this.element_) return _r_();
var t = this.element_.className, e = this.stateClasses_ || "", i = this.getStateClasses_();
return i !== e && (e = e.split(" "), e.length > 0 && (t = t.replace(new RegExp(e.join("|"), "g"), "")), i.length > 0 && (t = t.replace(new RegExp(i.join("|"), "g"), "")), t = a.trim(t) + " " + i.join(" "), this.stateClasses_ = i.join(" "), this.element_.className = t), _r_(this);
},
addState:function(t) {
return _i_("a41:483f6cd6"), this.states_[t] = !0, this.applyStates_(), _r_(this);
},
removeState:function(t) {
return _i_("a41:4a448e8c"), this.states_[t] = !1, this.applyStates_(), _r_(this);
},
hasState:function(t) {
return _i_("a41:5ad00c3f"), _r_(this.states_[t]);
},
getDate:function() {
return _i_("a41:4a624aa3"), _r_(this.date_);
},
getMonth:function() {
return _i_("a41:befb8df2"), _r_(this.month_);
},
getYear:function() {
return _i_("a41:31dc35e5"), _r_(this.year_);
},
getFormattedDate:function() {
_i_("a41:8049be09");
var t = this.getDate();
return _r_(10 > t ? "&nbsp;" + t :"" + t);
},
isWeekend:function() {
if (_i_("a41:215f9f85"), d.length > 0) return _r_(d.indexOf(this.dateObject_.getUTCDay()) > -1);
return _r_(0 === this.dateObject_.getUTCDay() || 6 === this.dateObject_.getUTCDay());
},
getHijriFormattedDate:function() {
_i_("a41:4da3662a");
var t = r.convert({
day:this.getDate(),
month:this.getMonth(),
year:this.getYear()
});
return _r_(t.hijri_day < 10 ? "&nbsp;" + t.hijri_day :"" + t.hijri_day);
},
getHTML:function() {
_i_("a41:432cf784");
var e = "";
if (_) {
var i = this, a = i.getStateClassNames_(), n = p(i), s = i.getYear(), o = i.getDate(), d = g(i), c = d + " " + o + ", " + n + " " + s, h = "";
this.isWeekend() && this.addState("weekend"), a.indexOf("disabled") > 0 && (h = 'aria-hidden="true"'), e += '<td role="button" title="' + c + '" aria-label="' + c + '" class="c2-day ' + a + ' "', e += h, e += ' data-id="' + this.id() + '">', e += '<span aria-hidden="true" role="presentation" class="c2-day-inner">', e += this.getFormattedDate(), r.available() && (e += t.jstmpl("hijri_day").render({
hijriDate:this.getHijriFormattedDate()
})), e += "</span>", this.calendar_ && this.calendar_.options.pricePlaceHolder && (e += '<span class="c2-day-price">', e += '<i class="bicon bicon-search"></i>', e += "</span>"), e += "</td>";
} else this.isWeekend() && this.addState("weekend"), e += '<td class="c2-day ', e += this.getStateClassNames_(), e += '" data-id="' + this.id() + '">', e += '<span class="c2-day-inner">', e += this.getFormattedDate(), r.available() && (e += t.jstmpl("hijri_day").render({
hijriDate:this.getHijriFormattedDate()
})), e += "</span>", this.calendar_ && this.calendar_.options.pricePlaceHolder && (e += '<span class="c2-day-price">', e += '<i class="bicon bicon-search"></i>', e += "</span>"), e += "</td>";
return _r_(e);
}
});
function g(e) {
_i_("a41:5faade2d");
var i = t.env.b_weekday_formatted_date, a = e.dateObject_.getUTCDay();
return _r_(i[a].name || "");
}
function p(t) {
_i_("a41:30fce0d1");
var e = t.calendar_, i = t.month_, a = e.options.monthNames;
return _r_(a[i] ? a[i] :"");
}
_r_();
}(booking, booking.tools, booking.calendar2, $), function(t, e, i, a, n) {
"use strict";
_i_("a41:48d9563f");
function r() {
_i_("a41:b4ca73ef");
var t = i.today();
return _r_(t);
}
function s() {
_i_("a41:ac3fa6db");
var e = i.today();
return t.env.b_search_max_months ? e.setMonth(e.getMonth() + t.env.b_search_max_months) :e.setFullYear(e.getFullYear() + 1), e.setDate(0), _r_(e);
}
i.defaults = {
startDate:r(),
endDate:s(),
defaultDate:null,
sundayFirst:!1,
direction:"ltr",
monthNames:[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
dayNames:[ "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su" ],
monthsVisible:2,
monthWidth:261,
monthHeight:210,
borderWidth:1,
extraClasses:"",
title:"",
mode:"single_date",
lazy:!1,
closeButton:!1,
closeOnDateSelected:!0,
onDayClick:function(t, e, i) {},
onDaySelected:function(t, e, i) {},
onRangeSelected:function(t, e, i, a) {},
onLazyInitiated:function(t) {}
}, _r_();
}(booking, booking.tools, booking.calendar2, $), function(t, e, i, a, n) {
_i_("a41:cc273fb6");
var r = "OTfdASFbLYQCLBMWLMSFKTSdZPBcfTRe", s = "index" === t.env.b_action && t.et.track(r);
i.Month = function(t, e, i) {
_i_("a41:40e0bea4"), this.calendar_ = i, this.month_ = e, this.year_ = t, this.utcts_ = Date.UTC(t, e, 1, 0, 0, 0, 0), this.id_ = "M" + this.utcts_, _r_();
}, a.extend(i.Month.prototype, {
id:function() {
return _i_("a41:b59575011"), _r_(this.id_);
},
valueOf:function() {
return _i_("a41:1db0ea4a1"), _r_(this.utcts_);
},
setElement:function(t) {
_i_("a41:66870561"), this.element_ = t, _r_();
},
getElement:function() {
return _i_("a41:c1d65b6f1"), _r_(this.element_);
},
setOffset:function(t) {
_i_("a41:584e89b6"), this.element_ && this.element_.setAttribute("data-offset", t), this.offset_ = t, _r_();
},
setPosition:function(t) {
_i_("a41:294d7b9d"), this.element_ && (this.element_.style.left = t + "px"), _r_();
},
getOffset:function() {
return _i_("a41:842d2121"), _r_(this.offset_);
},
getHeight:function(t) {
return _i_("a41:0317141a"), (t || !this.height_) && (this.height_ = a(this.getElement()).find(".c2-month-table").height()), _r_(this.height_);
},
getMonth:function() {
return _i_("a41:befb8df21"), _r_(this.month_);
},
getYear:function() {
return _i_("a41:31dc35e51"), _r_(this.year_);
},
getTitle:function() {
_i_("a41:b1ea8a2a");
var t = "", e = this.getYear(), i = this.getMonth();
return "function" == typeof this.calendar_.options.monthTitle && (t = this.calendar_.options.monthTitle(e, i)), t || (t = this.calendar_.options.monthNames[i] + " " + e), _r_(t);
},
getHTML:function() {
_i_("a41:b13f6229");
var e = this.getMonth(), a = this.getYear(), n = i.getNumberOfDaysInMonth(e, a), r = 1, o = new Date(a, e, 1).getDay(), _ = "";
if (this.calendar_.options.sundayFirst || (o = (o + 6) % 7), s) {
var d = t.jstmpl.translations("acc_cal_week_number"), c = this.getTitle(), h = "", l = 0;
h = c && c.indexOf("<") > -1 ? c.split("<")[0] :c, _ += '<div class="c2-month" style="width:' + this.calendar_.options.monthWidth + 'px;" data-id="' + this.id() + '">', _ += '<table class="c2-month-table" aria-label="' + h + '" tabindex="0">', _ += '<thead role="presentation" aria-hidden="true">', _ += '<tr class="c2-month-header" role="presentation" aria-hidden="true"><th colspan="7" role="presentation" aria-hidden="true"  class="c2-month-header-monthname">' + c + "</th></tr>", _ += '<tr role="presentation" aria-hidden="true">';
for (var u = 0; 6 >= u; u++) _ += '<th role="presentation" aria-hidden="true" class="c2-month-header-dayname">', _ += '<abbr role="presentation" aria-hidden="true">' + this.calendar_.options.dayNames[u] + "</abbr>", _ += "</td>";
_ += "</tr>", _ += "</thead>", _ += '<tbody role="presentation">';
for (var u = 0; 9 > u; u++) {
l = u, l++, 0 === u && (_ += '<tr role="presentation" class="c2-week-number" aria-label="' + d + " " + l + '">');
for (var f = 0; 6 >= f; f++) n >= r && (u > 0 || f >= o) ? (_ += this.calendar_.createDay(a, e, r, this.calendar_).getHTML(), r++) :_ += '<td role="presentation" aria-hidden="true"></td>';
if (r > n) break;
l++, _ += '</tr><tr class="c2-week-number" role="presentation" aria-label="' + d + " " + l + '">';
}
_ += "</tr>", _ += "</tbody>", _ += "</table>", _ += '<div role="presentation" aria-hidden="true" class="c2-month__separator"></div>', _ += "</div>";
} else {
_ += '<div class="c2-month" style="width:' + this.calendar_.options.monthWidth + 'px;" data-id="' + this.id() + '">', _ += '<table class="c2-month-table">', _ += "<thead>", _ += '<tr class="c2-month-header"><th colspan="7" class="c2-month-header-monthname">' + this.getTitle() + "</th></tr>", _ += "<tr>";
for (var u = 0; 6 >= u; u++) _ += '<td class="c2-month-header-dayname">', _ += this.calendar_.options.dayNames[u], _ += "</td>";
_ += "</tr>", _ += "</thead>", _ += "<tbody>", _ += "<tr>";
for (var u = 0; 9 > u; u++) {
for (var f = 0; 6 >= f; f++) n >= r && (u > 0 || f >= o) ? (_ += this.calendar_.createDay(a, e, r, this.calendar_).getHTML(), r++) :_ += "<td></td>";
if (r > n) break;
_ += "</tr><tr>";
}
_ += "</tr>", _ += "</tbody>", _ += "</table>", _ += '<div class="c2-month__separator"></div>', _ += "</div>";
}
return _r_(_);
}
}), _r_();
}(booking, booking.tools, booking.calendar2, $), function(t, e, i, a, n) {
_i_("a41:da74f120"), a.fn.calendar2 = function() {
_i_("a41:f89855b0"), i.Controller_ = function() {
_i_("a41:6643d90f"), this.instances_ = [], _r_();
}, i.Controller_.prototype.createCalendar = function(t, e) {
_i_("a41:d47d2870");
var a = new i.Calendar(t, e);
return this.addCalendar(a), _r_(a);
}, i.Controller_.prototype.addCalendar = function(t) {
return _i_("a41:619b4969"), this.instances_.push(t), _r_(t);
}, i.Controller_.prototype.getCalendars = function() {
return _i_("a41:2b9d602f"), _r_(this.instances_);
}, i.Controller_.prototype.each = function(t) {
if (_i_("a41:e23a12eb"), "function" == typeof t) for (var e = 0; e < this.instances_.length && t.call(this.instances_[e], this.instances_[e]) !== !1; e++) ;
return _r_(this.instances_);
};
var t = i.controller = new i.Controller_();
return _r_(function(e, n) {
if (_i_("a41:b3a90f10"), "all" === e) return _r_(t.getCalendars());
if ("each" === e) return _r_(t.each(n));
if ("show" === e) return _r_(t.each(function() {
_i_("a41:026fde4b"), this.show(), _r_();
}));
if ("hide" === e) return _r_(t.each(function() {
_i_("a41:0b45ce14"), this.hide(), _r_();
}));
var r = e;
return _r_(this.each(function() {
_i_("a41:3117f4c8");
var e = a(this), n = e.data(), s = n.calendar2;
n.calendar2Title && (r.title = n.calendar2Title), s ? s.setOptions(r) :t.createCalendar(e, a.extend({}, i.defaults, r, n)), _r_();
}));
});
}(), a(function() {
_i_("a41:388c66e0"), a(".calendar2").calendar2(), _r_();
}), _r_();
}(booking, booking.tools, booking.calendar2, $), booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.calendar2.run = !0);