var _i_ = this._i_ || function() {}, _r_ = this._r_ || function(e) {
return e;
};

/* @preserve
 * jQuery UI 1.8.22
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
!function(e, t) {
if (_i_("619:6b97e317"), e.ui = e.ui || {}, e.ui.version) return _r_();
e.extend(e.ui, {
version:"1.8.22",
keyCode:{
ALT:18,
BACKSPACE:8,
CAPS_LOCK:20,
COMMA:188,
COMMAND:91,
COMMAND_LEFT:91,
COMMAND_RIGHT:93,
CONTROL:17,
DELETE:46,
DOWN:40,
END:35,
ENTER:13,
ESCAPE:27,
HOME:36,
INSERT:45,
LEFT:37,
MENU:93,
NUMPAD_ADD:107,
NUMPAD_DECIMAL:110,
NUMPAD_DIVIDE:111,
NUMPAD_ENTER:108,
NUMPAD_MULTIPLY:106,
NUMPAD_SUBTRACT:109,
PAGE_DOWN:34,
PAGE_UP:33,
PERIOD:190,
RIGHT:39,
SHIFT:16,
SPACE:32,
TAB:9,
UP:38,
WINDOWS:91
}
}), e.fn.extend({
propAttr:e.fn.prop || e.fn.attr,
_focus:e.fn.focus,
focus:function(t, i) {
return _i_("619:839443c1"), _r_("number" == typeof t ? this.each(function() {
_i_("619:a06d440b");
var n = this;
setTimeout(function() {
_i_("619:f6ff8179"), e(n).focus(), i && i.call(n), _r_();
}, t), _r_();
}) :this._focus.apply(this, arguments));
},
scrollParent:function() {
_i_("619:99a19d1b");
var t;
return t = e.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
return _i_("619:84c1a241"), _r_(/(relative|absolute|fixed)/.test(e.curCSS(this, "position", 1)) && /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1)));
}).eq(0) :this.parents().filter(function() {
return _i_("619:079dfc9a"), _r_(/(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1)));
}).eq(0), _r_(/fixed/.test(this.css("position")) || !t.length ? e(document) :t);
},
zIndex:function(i) {
if (_i_("619:2350b5a1"), i !== t) return _r_(this.css("zIndex", i));
if (this.length) for (var n, r, a = e(this[0]); a.length && a[0] !== document; ) {
if (n = a.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (r = parseInt(a.css("zIndex"), 10), !isNaN(r) && 0 !== r)) return _r_(r);
a = a.parent();
}
return _r_(0);
},
disableSelection:function() {
return _i_("619:3fc6ec46"), _r_(this.bind((e.support.selectstart ? "selectstart" :"mousedown") + ".ui-disableSelection", function(e) {
_i_("619:66eeba2e"), e.preventDefault(), _r_();
}));
},
enableSelection:function() {
return _i_("619:795aa195"), _r_(this.unbind(".ui-disableSelection"));
}
}), e("<a>").outerWidth(1).jquery || e.each([ "Width", "Height" ], function(i, n) {
_i_("619:917755ef");
var r = "Width" === n ? [ "Left", "Right" ] :[ "Top", "Bottom" ], a = n.toLowerCase(), s = {
innerWidth:e.fn.innerWidth,
innerHeight:e.fn.innerHeight,
outerWidth:e.fn.outerWidth,
outerHeight:e.fn.outerHeight
};
function o(t, i, n, a) {
return _i_("619:5ddfbac4"), e.each(r, function() {
_i_("619:a5119465"), i -= parseFloat(e.curCSS(t, "padding" + this, !0)) || 0, n && (i -= parseFloat(e.curCSS(t, "border" + this + "Width", !0)) || 0), a && (i -= parseFloat(e.curCSS(t, "margin" + this, !0)) || 0), _r_();
}), _r_(i);
}
e.fn["inner" + n] = function(i) {
if (_i_("619:7e57c312"), i === t) return _r_(s["inner" + n].call(this));
return _r_(this.each(function() {
_i_("619:24962b80"), e(this).css(a, o(this, i) + "px"), _r_();
}));
}, e.fn["outer" + n] = function(t, i) {
if (_i_("619:7f539c9f"), "number" != typeof t) return _r_(s["outer" + n].call(this, t));
return _r_(this.each(function() {
_i_("619:d8bc7bb3"), e(this).css(a, o(this, t, !0, i) + "px"), _r_();
}));
}, _r_();
});
function i(t, i) {
_i_("619:58842103");
var r = t.nodeName.toLowerCase();
if ("area" === r) {
var a, s = t.parentNode, o = s.name;
if (!t.href || !o || "map" !== s.nodeName.toLowerCase()) return _r_(!1);
return a = e("img[usemap=#" + o + "]")[0], _r_(!!a && n(a));
}
return _r_((/input|select|textarea|button|object/.test(r) ? !t.disabled :"a" == r ? t.href || i :i) && n(t));
}
function n(t) {
return _i_("619:bba8773c"), _r_(!e(t).parents().andSelf().filter(function() {
return _i_("619:7c1d2e78"), _r_("hidden" === e.curCSS(this, "visibility") || e.expr.filters.hidden(this));
}).length);
}
e.extend(e.expr[":"], {
data:e.expr.createPseudo ? e.expr.createPseudo(function(t) {
return _i_("619:b9ac1763"), _r_(function(i) {
return _i_("619:623439f5"), _r_(!!e.data(i, t));
});
}) :function(t, i, n) {
return _i_("619:35716624"), _r_(!!e.data(t, n[3]));
},
focusable:function(t) {
return _i_("619:d9813d1b"), _r_(i(t, !isNaN(e.attr(t, "tabindex"))));
},
tabbable:function(t) {
_i_("619:e6a5638f");
var n = e.attr(t, "tabindex"), r = isNaN(n);
return _r_((r || n >= 0) && i(t, !r));
}
}), e(function() {
_i_("619:e4cd384b");
var t = document.body, i = t.appendChild(i = document.createElement("div"));
i.offsetHeight, e.extend(i.style, {
minHeight:"100px",
height:"auto",
padding:0,
borderWidth:0
}), e.support.minHeight = 100 === i.offsetHeight, e.support.selectstart = "onselectstart" in i, t.removeChild(i).style.display = "none", _r_();
}), e.curCSS || (e.curCSS = e.css), e.extend(e.ui, {
plugin:{
add:function(t, i, n) {
_i_("619:fa48ee20");
var r = e.ui[t].prototype;
for (var a in n) r.plugins[a] = r.plugins[a] || [], r.plugins[a].push([ i, n[a] ]);
_r_();
},
call:function(e, t, i) {
_i_("619:2485d7e6");
var n = e.plugins[t];
if (!n || !e.element[0].parentNode) return _r_();
for (var r = 0; r < n.length; r++) e.options[n[r][0]] && n[r][1].apply(e.element, i);
_r_();
}
},
contains:function(e, t) {
return _i_("619:f555eb21"), _r_(document.compareDocumentPosition ? 16 & e.compareDocumentPosition(t) :e !== t && e.contains(t));
},
hasScroll:function(t, i) {
if (_i_("619:a5871057"), "hidden" === e(t).css("overflow")) return _r_(!1);
var n = i && "left" === i ? "scrollLeft" :"scrollTop", r = !1;
if (t[n] > 0) return _r_(!0);
return t[n] = 1, r = t[n] > 0, t[n] = 0, _r_(r);
},
isOverAxis:function(e, t, i) {
return _i_("619:d0ab3a68"), _r_(e > t && t + i > e);
},
isOver:function(t, i, n, r, a, s) {
return _i_("619:95f11aa9"), _r_(e.ui.isOverAxis(t, n, a) && e.ui.isOverAxis(i, r, s));
}
}), _r_();
}(jQuery), /* @preserve
 * jQuery UI Datepicker 1.8.22
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
function($, undefined) {
_i_("619:59606b5e"), $.extend($.ui, {
datepicker:{
version:"1.8.22"
}
});
var PROP_NAME = "datepicker", dpuuid = new Date().getTime(), instActive;
function Datepicker() {
_i_("619:d748b5a5"), this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
closeText:"Done",
prevText:"Prev",
nextText:"Next",
currentText:"Today",
monthNames:[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
monthNamesShort:[ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
dayNames:[ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
dayNamesShort:[ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
dayNamesMin:[ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ],
weekHeader:"Wk",
dateFormat:"mm/dd/yy",
firstDay:0,
isRTL:!1,
showMonthAfterYear:!1,
yearSuffix:""
}, this._defaults = {
showOn:"focus",
showAnim:"fadeIn",
showOptions:{},
defaultDate:null,
appendText:"",
buttonText:"...",
buttonImage:"",
buttonImageOnly:!1,
hideIfNoPrevNext:!1,
navigationAsDateFormat:!1,
gotoCurrent:!1,
changeMonth:!1,
changeYear:!1,
yearRange:"c-10:c+10",
showOtherMonths:!1,
selectOtherMonths:!1,
showWeek:!1,
calculateWeek:this.iso8601Week,
shortYearCutoff:"+10",
minDate:null,
maxDate:null,
duration:"fast",
beforeShowDay:null,
beforeShow:null,
onSelect:null,
onChangeMonthYear:null,
onClose:null,
numberOfMonths:1,
showCurrentAtPos:0,
stepMonths:1,
stepBigMonths:12,
altField:"",
altFormat:"",
constrainInput:!0,
showButtonPanel:!1,
autoSize:!1,
disabled:!1
}, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')), _r_();
}
$.extend(Datepicker.prototype, {
markerClassName:"hasDatepicker",
maxRows:4,
log:function() {
_i_("619:782dde73"), this.debug && console.log.apply("", arguments), _r_();
},
_widgetDatepicker:function() {
return _i_("619:6343da37"), _r_(this.dpDiv);
},
setDefaults:function(e) {
return _i_("619:b5daf186"), extendRemove(this._defaults, e || {}), _r_(this);
},
_attachDatepicker:function(target, settings) {
_i_("619:618a2a22");
var inlineSettings = null;
for (var attrName in this._defaults) {
var attrValue = target.getAttribute("date:" + attrName);
if (attrValue) {
inlineSettings = inlineSettings || {};
try {
inlineSettings[attrName] = eval(attrValue);
} catch (err) {
inlineSettings[attrName] = attrValue;
}
}
}
var nodeName = target.nodeName.toLowerCase(), inline = "div" == nodeName || "span" == nodeName;
target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
var inst = this._newInst($(target), inline);
inst.settings = $.extend({}, settings || {}, inlineSettings || {}), "input" == nodeName ? this._connectDatepicker(target, inst) :inline && this._inlineDatepicker(target, inst), _r_();
},
_newInst:function(e, t) {
_i_("619:419f925c");
var i = e[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
return _r_({
id:i,
input:e,
selectedDay:0,
selectedMonth:0,
selectedYear:0,
drawMonth:0,
drawYear:0,
inline:t,
dpDiv:t ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) :this.dpDiv
});
},
_connectDatepicker:function(e, t) {
_i_("619:e296bf77");
var i = $(e);
if (t.append = $([]), t.trigger = $([]), i.hasClass(this.markerClassName)) return _r_();
this._attachments(i, t), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(e, i, n) {
_i_("619:edb2a4dc"), t.settings[i] = n, _r_();
}).bind("getData.datepicker", function(e, i) {
return _i_("619:92990a0b"), _r_(this._get(t, i));
}), this._autoSize(t), $.data(e, PROP_NAME, t), t.settings.disabled && this._disableDatepicker(e), _r_();
},
_attachments:function(e, t) {
_i_("619:819c0cb7");
var i = this._get(t, "appendText"), n = this._get(t, "isRTL");
t.append && t.append.remove(), i && (t.append = $('<span class="' + this._appendClass + '">' + i + "</span>"), e[n ? "before" :"after"](t.append)), e.unbind("focus", this._showDatepicker), t.trigger && t.trigger.remove();
var r = this._get(t, "showOn");
if (("focus" == r || "both" == r) && e.focus(this._showDatepicker), "button" == r || "both" == r) {
var a = this._get(t, "buttonText"), s = this._get(t, "buttonImage");
t.trigger = $(this._get(t, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
src:s,
alt:a,
title:a
}) :$('<button type="button"></button>').addClass(this._triggerClass).html("" == s ? a :$("<img/>").attr({
src:s,
alt:a,
title:a
}))), e[n ? "before" :"after"](t.trigger), t.trigger.click(function() {
return _i_("619:db9c4013"), $.datepicker._datepickerShowing && $.datepicker._lastInput == e[0] ? $.datepicker._hideDatepicker() :$.datepicker._datepickerShowing && $.datepicker._lastInput != e[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(e[0])) :$.datepicker._showDatepicker(e[0]), _r_(!1);
});
}
_r_();
},
_autoSize:function(e) {
if (_i_("619:a59663cf"), this._get(e, "autoSize") && !e.inline) {
var t = new Date(2009, 11, 20), i = this._get(e, "dateFormat");
if (i.match(/[DM]/)) {
var n = function(e) {
_i_("619:4ca44f8d");
for (var t = 0, i = 0, n = 0; n < e.length; n++) e[n].length > t && (t = e[n].length, i = n);
return _r_(i);
};
t.setMonth(n(this._get(e, i.match(/MM/) ? "monthNames" :"monthNamesShort"))), t.setDate(n(this._get(e, i.match(/DD/) ? "dayNames" :"dayNamesShort")) + 20 - t.getDay());
}
e.input.attr("size", this._formatDate(e, t).length);
}
_r_();
},
_inlineDatepicker:function(e, t) {
_i_("619:30d1ddb6");
var i = $(e);
if (i.hasClass(this.markerClassName)) return _r_();
i.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker", function(e, i, n) {
_i_("619:9b1fb14d"), t.settings[i] = n, _r_();
}).bind("getData.datepicker", function(e, i) {
return _i_("619:43687520"), _r_(this._get(t, i));
}), $.data(e, PROP_NAME, t), this._setDate(t, this._getDefaultDate(t), !0), this._updateDatepicker(t), this._updateAlternate(t), t.settings.disabled && this._disableDatepicker(e), t.dpDiv.css("display", "block"), _r_();
},
_dialogDatepicker:function(e, t, i, n, r) {
_i_("619:2334261c");
var a = this._dialogInst;
if (!a) {
this.uuid += 1;
var s = "dp" + this.uuid;
this._dialogInput = $('<input type="text" id="' + s + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), a = this._dialogInst = this._newInst(this._dialogInput, !1), a.settings = {}, $.data(this._dialogInput[0], PROP_NAME, a);
}
if (extendRemove(a.settings, n || {}), t = t && t.constructor == Date ? this._formatDate(a, t) :t, this._dialogInput.val(t), this._pos = r ? r.length ? r :[ r.pageX, r.pageY ] :null, !this._pos) {
var o = document.documentElement.clientWidth, _ = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, l = document.documentElement.scrollTop || document.body.scrollTop;
this._pos = [ o / 2 - 100 + c, _ / 2 - 150 + l ];
}
return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), a.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, a), _r_(this);
},
_destroyDatepicker:function(e) {
_i_("619:98e3eeaf");
var t = $(e), i = $.data(e, PROP_NAME);
if (!t.hasClass(this.markerClassName)) return _r_();
var n = e.nodeName.toLowerCase();
$.removeData(e, PROP_NAME), "input" == n ? (i.append.remove(), i.trigger.remove(), t.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) :("div" == n || "span" == n) && t.removeClass(this.markerClassName).empty(), _r_();
},
_enableDatepicker:function(e) {
_i_("619:146a9c58");
var t = $(e), i = $.data(e, PROP_NAME);
if (!t.hasClass(this.markerClassName)) return _r_();
var n = e.nodeName.toLowerCase();
if ("input" == n) e.disabled = !1, i.trigger.filter("button").each(function() {
_i_("619:9437193d"), this.disabled = !1, _r_();
}).end().filter("img").css({
opacity:"1.0",
cursor:""
}); else if ("div" == n || "span" == n) {
var r = t.children("." + this._inlineClass);
r.children().removeClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled");
}
this._disabledInputs = $.map(this._disabledInputs, function(t) {
return _i_("619:8f8b956e"), _r_(t == e ? null :t);
}), _r_();
},
_disableDatepicker:function(e) {
_i_("619:7cba8098");
var t = $(e), i = $.data(e, PROP_NAME);
if (!t.hasClass(this.markerClassName)) return _r_();
var n = e.nodeName.toLowerCase();
if ("input" == n) e.disabled = !0, i.trigger.filter("button").each(function() {
_i_("619:6242c0e4"), this.disabled = !0, _r_();
}).end().filter("img").css({
opacity:"0.5",
cursor:"default"
}); else if ("div" == n || "span" == n) {
var r = t.children("." + this._inlineClass);
r.children().addClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled");
}
this._disabledInputs = $.map(this._disabledInputs, function(t) {
return _i_("619:8f8b956e1"), _r_(t == e ? null :t);
}), this._disabledInputs[this._disabledInputs.length] = e, _r_();
},
_isDisabledDatepicker:function(e) {
if (_i_("619:781d7b9a"), !e) return _r_(!1);
for (var t = 0; t < this._disabledInputs.length; t++) if (this._disabledInputs[t] == e) return _r_(!0);
return _r_(!1);
},
_getInst:function(e) {
_i_("619:649d633c");
try {
return _r_($.data(e, PROP_NAME));
} catch (t) {
throw "Missing instance data for this datepicker";
}
_r_();
},
_optionDatepicker:function(e, t, i) {
_i_("619:c5fdd6dd");
var n = this._getInst(e);
if (2 == arguments.length && "string" == typeof t) return _r_("defaults" == t ? $.extend({}, $.datepicker._defaults) :n ? "all" == t ? $.extend({}, n.settings) :this._get(n, t) :null);
var r = t || {};
if ("string" == typeof t && (r = {}, r[t] = i), n) {
this._curInst == n && this._hideDatepicker();
var a = this._getDateDatepicker(e, !0), s = this._getMinMaxDate(n, "min"), o = this._getMinMaxDate(n, "max");
extendRemove(n.settings, r), null !== s && r.dateFormat !== undefined && r.minDate === undefined && (n.settings.minDate = this._formatDate(n, s)), null !== o && r.dateFormat !== undefined && r.maxDate === undefined && (n.settings.maxDate = this._formatDate(n, o)), this._attachments($(e), n), this._autoSize(n), this._setDate(n, a), this._updateAlternate(n), this._updateDatepicker(n);
}
_r_();
},
_changeDatepicker:function(e, t, i) {
_i_("619:91dcb1c4"), this._optionDatepicker(e, t, i), _r_();
},
_refreshDatepicker:function(e) {
_i_("619:eb6c2266");
var t = this._getInst(e);
t && this._updateDatepicker(t), _r_();
},
_setDateDatepicker:function(e, t) {
_i_("619:72917156");
var i = this._getInst(e);
i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i)), _r_();
},
_getDateDatepicker:function(e, t) {
_i_("619:14d6164d");
var i = this._getInst(e);
return i && !i.inline && this._setDateFromField(i, t), _r_(i ? this._getDate(i) :null);
},
_doKeyDown:function(e) {
_i_("619:429b622a");
var t = $.datepicker._getInst(e.target), i = !0, n = t.dpDiv.is(".ui-datepicker-rtl");
if (t._keyEvent = !0, $.datepicker._datepickerShowing) switch (e.keyCode) {
case 9:
$.datepicker._hideDatepicker(), i = !1;
break;

case 13:
var r = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", t.dpDiv);
r[0] && $.datepicker._selectDay(e.target, t.selectedMonth, t.selectedYear, r[0]);
var a = $.datepicker._get(t, "onSelect");
if (a) {
var s = $.datepicker._formatDate(t);
a.apply(t.input ? t.input[0] :null, [ s, t ]);
} else $.datepicker._hideDatepicker();
return _r_(!1);

case 27:
$.datepicker._hideDatepicker();
break;

case 33:
$.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") :-$.datepicker._get(t, "stepMonths"), "M");
break;

case 34:
$.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") :+$.datepicker._get(t, "stepMonths"), "M");
break;

case 35:
(e.ctrlKey || e.metaKey) && $.datepicker._clearDate(e.target), i = e.ctrlKey || e.metaKey;
break;

case 36:
(e.ctrlKey || e.metaKey) && $.datepicker._gotoToday(e.target), i = e.ctrlKey || e.metaKey;
break;

case 37:
(e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, n ? 1 :-1, "D"), i = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") :-$.datepicker._get(t, "stepMonths"), "M");
break;

case 38:
(e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, -7, "D"), i = e.ctrlKey || e.metaKey;
break;

case 39:
(e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, n ? -1 :1, "D"), i = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") :+$.datepicker._get(t, "stepMonths"), "M");
break;

case 40:
(e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, 7, "D"), i = e.ctrlKey || e.metaKey;
break;

default:
i = !1;
} else 36 == e.keyCode && e.ctrlKey ? $.datepicker._showDatepicker(this) :i = !1;
i && (e.preventDefault(), e.stopPropagation()), _r_();
},
_doKeyPress:function(e) {
_i_("619:5445a112");
var t = $.datepicker._getInst(e.target);
if ($.datepicker._get(t, "constrainInput")) {
var i = $.datepicker._possibleChars($.datepicker._get(t, "dateFormat")), n = String.fromCharCode(e.charCode == undefined ? e.keyCode :e.charCode);
return _r_(e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1);
}
_r_();
},
_doKeyUp:function(e) {
_i_("619:2e1c20a3");
var t = $.datepicker._getInst(e.target);
if (t.input.val() != t.lastVal) try {
var i = $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), t.input ? t.input.val() :null, $.datepicker._getFormatConfig(t));
i && ($.datepicker._setDateFromField(t), $.datepicker._updateAlternate(t), $.datepicker._updateDatepicker(t));
} catch (n) {
$.datepicker.log(n);
}
return _r_(!0);
},
_showDatepicker:function(e) {
if (_i_("619:67987cc4"), e = e.target || e, "input" != e.nodeName.toLowerCase() && (e = $("input", e.parentNode)[0]), $.datepicker._isDisabledDatepicker(e) || $.datepicker._lastInput == e) return _r_();
var t = $.datepicker._getInst(e);
$.datepicker._curInst && $.datepicker._curInst != t && ($.datepicker._curInst.dpDiv.stop(!0, !0), t && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
var i = $.datepicker._get(t, "beforeShow"), n = i ? i.apply(e, [ e, t ]) :{};
if (n === !1) return _r_();
extendRemove(t.settings, n), t.lastVal = null, $.datepicker._lastInput = e, $.datepicker._setDateFromField(t), $.datepicker._inDialog && (e.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(e), $.datepicker._pos[1] += e.offsetHeight);
var r = !1;
$(e).parents().each(function() {
return _i_("619:66aa84b4"), r |= "fixed" == $(this).css("position"), _r_(!r);
}), r && $.browser.opera && ($.datepicker._pos[0] -= document.documentElement.scrollLeft, $.datepicker._pos[1] -= document.documentElement.scrollTop);
var a = {
left:$.datepicker._pos[0],
top:$.datepicker._pos[1]
};
if ($.datepicker._pos = null, t.dpDiv.empty(), t.dpDiv.css({
position:"absolute",
display:"block",
top:"-1000px"
}), $.datepicker._updateDatepicker(t), a = $.datepicker._checkOffset(t, a, r), t.dpDiv.css({
position:$.datepicker._inDialog && $.blockUI ? "static" :r ? "fixed" :"absolute",
display:"none",
left:a.left + "px",
top:a.top + "px"
}), !t.inline) {
var s = $.datepicker._get(t, "showAnim"), o = $.datepicker._get(t, "duration"), _ = function() {
_i_("619:a1280cec");
var e = t.dpDiv.find("iframe.ui-datepicker-cover");
if (e.length) {
var i = $.datepicker._getBorders(t.dpDiv);
e.css({
left:-i[0],
top:-i[1],
width:t.dpDiv.outerWidth(),
height:t.dpDiv.outerHeight()
});
}
_r_();
};
t.dpDiv.zIndex($(e).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && $.effects[s] ? t.dpDiv.show(s, $.datepicker._get(t, "showOptions"), o, _) :t.dpDiv[s || "show"](s ? o :null, _), s && o || _(), t.input.is(":visible") && !t.input.is(":disabled") && t.input.focus(), $.datepicker._curInst = t;
}
_r_();
},
_updateDatepicker:function(e) {
_i_("619:13a418f2");
var t = this;
t.maxRows = 4;
var i = $.datepicker._getBorders(e.dpDiv);
instActive = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
var n = e.dpDiv.find("iframe.ui-datepicker-cover");
n.length && n.css({
left:-i[0],
top:-i[1],
width:e.dpDiv.outerWidth(),
height:e.dpDiv.outerHeight()
});
var r = this._getNumberOfMonths(e), a = r[1], s = 17;
if (e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), a > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + a).css("width", s * a + "em"), e.dpDiv[(1 != r[0] || 1 != r[1] ? "add" :"remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" :"remove") + "Class"]("ui-datepicker-rtl"), e == $.datepicker._curInst && $.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] != document.activeElement && e.input.focus(), e.yearshtml) {
var o = e.yearshtml;
setTimeout(function() {
_i_("619:4f5b5432"), o === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), o = e.yearshtml = null, _r_();
}, 0);
}
_r_();
},
_getBorders:function(e) {
_i_("619:e17cef71");
var t = function(e) {
return _i_("619:c4da3b32"), _r_({
thin:1,
medium:2,
thick:3
}[e] || e);
};
return _r_([ parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width"))) ]);
},
_checkOffset:function(e, t, i) {
_i_("619:203a4aae");
var n = e.dpDiv.outerWidth(), r = e.dpDiv.outerHeight(), a = e.input ? e.input.outerWidth() :0, s = e.input ? e.input.outerHeight() :0, o = document.documentElement.clientWidth + (i ? 0 :$(document).scrollLeft()), _ = document.documentElement.clientHeight + (i ? 0 :$(document).scrollTop());
return t.left -= this._get(e, "isRTL") ? n - a :0, t.left -= i && t.left == e.input.offset().left ? $(document).scrollLeft() :0, t.top -= i && t.top == e.input.offset().top + s ? $(document).scrollTop() :0, t.left -= Math.min(t.left, t.left + n > o && o > n ? Math.abs(t.left + n - o) :0), t.top -= Math.min(t.top, t.top + r > _ && _ > r ? Math.abs(r + s) :0), _r_(t);
},
_findPos:function(e) {
_i_("619:a1fd449f");
for (var t = this._getInst(e), i = this._get(t, "isRTL"); e && ("hidden" == e.type || 1 != e.nodeType || $.expr.filters.hidden(e)); ) e = e[i ? "previousSibling" :"nextSibling"];
var n = $(e).offset();
return _r_([ n.left, n.top ]);
},
_hideDatepicker:function(e) {
_i_("619:f7aceaf6");
var t = this._curInst;
if (!t || e && t != $.data(e, PROP_NAME)) return _r_();
if (this._datepickerShowing) {
var i = this._get(t, "showAnim"), n = this._get(t, "duration"), r = function() {
_i_("619:14886831"), $.datepicker._tidyDialog(t), _r_();
};
$.effects && $.effects[i] ? t.dpDiv.hide(i, $.datepicker._get(t, "showOptions"), n, r) :t.dpDiv["slideDown" == i ? "slideUp" :"fadeIn" == i ? "fadeOut" :"hide"](i ? n :null, r), i || r(), this._datepickerShowing = !1;
var a = this._get(t, "onClose");
a && a.apply(t.input ? t.input[0] :null, [ t.input ? t.input.val() :"", t ]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
position:"absolute",
left:"0",
top:"-100px"
}), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1;
}
_r_();
},
_tidyDialog:function(e) {
_i_("619:f498208f"), e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar"), _r_();
},
_checkExternalClick:function(e) {
if (_i_("619:78237e59"), !$.datepicker._curInst) return _r_();
var t = $(e.target), i = $.datepicker._getInst(t[0]);
(t[0].id != $.datepicker._mainDivId && 0 == t.parents("#" + $.datepicker._mainDivId).length && !t.hasClass($.datepicker.markerClassName) && !t.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || t.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != i) && $.datepicker._hideDatepicker(), _r_();
},
_adjustDate:function(e, t, i) {
_i_("619:1a36b52a");
var n = $(e), r = this._getInst(n[0]);
if (this._isDisabledDatepicker(n[0])) return _r_();
this._adjustInstDate(r, t + ("M" == i ? this._get(r, "showCurrentAtPos") :0), i), this._updateDatepicker(r), _r_();
},
_gotoToday:function(e) {
_i_("619:b318df19");
var t = $(e), i = this._getInst(t[0]);
if (this._get(i, "gotoCurrent") && i.currentDay) i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear; else {
var n = new Date();
i.selectedDay = n.getDate(), i.drawMonth = i.selectedMonth = n.getMonth(), i.drawYear = i.selectedYear = n.getFullYear();
}
this._notifyChange(i), this._adjustDate(t), _r_();
},
_selectMonthYear:function(e, t, i) {
_i_("619:1fb8b237");
var n = $(e), r = this._getInst(n[0]);
r["selected" + ("M" == i ? "Month" :"Year")] = r["draw" + ("M" == i ? "Month" :"Year")] = parseInt(t.options[t.selectedIndex].value, 10), this._notifyChange(r), this._adjustDate(n), _r_();
},
_selectDay:function(e, t, i, n) {
_i_("619:5b940ca6");
var r = $(e);
if ($(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0])) return _r_();
var a = this._getInst(r[0]);
a.selectedDay = a.currentDay = $("a", n).html(), a.selectedMonth = a.currentMonth = t, a.selectedYear = a.currentYear = i, this._selectDate(e, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)), _r_();
},
_clearDate:function(e) {
_i_("619:ac9ac920");
var t = $(e);
this._getInst(t[0]);
this._selectDate(t, ""), _r_();
},
_selectDate:function(e, t) {
_i_("619:73af8941");
var i = $(e), n = this._getInst(i[0]);
t = null != t ? t :this._formatDate(n), n.input && n.input.val(t), this._updateAlternate(n);
var r = this._get(n, "onSelect");
r ? r.apply(n.input ? n.input[0] :null, [ t, n ]) :n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) :(this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.focus(), this._lastInput = null), _r_();
},
_updateAlternate:function(e) {
_i_("619:f6d431a9");
var t = this._get(e, "altField");
if (t) {
var i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), r = this.formatDate(i, n, this._getFormatConfig(e));
$(t).each(function() {
_i_("619:586bcbfb"), $(this).val(r), _r_();
});
}
_r_();
},
noWeekends:function(e) {
_i_("619:fa5b70eb");
var t = e.getDay();
return _r_([ t > 0 && 6 > t, "" ]);
},
iso8601Week:function(e) {
_i_("619:38b80e1d");
var t = new Date(e.getTime());
t.setDate(t.getDate() + 4 - (t.getDay() || 7));
var i = t.getTime();
return t.setMonth(0), t.setDate(1), _r_(Math.floor(Math.round((i - t) / 864e5) / 7) + 1);
},
parseDate:function(e, t, i) {
if (_i_("619:d519ff9c"), null == e || null == t) throw "Invalid arguments";
if (t = "object" == typeof t ? t.toString() :t + "", "" == t) return _r_(null);
var n = (i ? i.shortYearCutoff :null) || this._defaults.shortYearCutoff;
n = "string" != typeof n ? n :new Date().getFullYear() % 100 + parseInt(n, 10);
for (var r = (i ? i.dayNamesShort :null) || this._defaults.dayNamesShort, a = (i ? i.dayNames :null) || this._defaults.dayNames, s = (i ? i.monthNamesShort :null) || this._defaults.monthNamesShort, o = (i ? i.monthNames :null) || this._defaults.monthNames, _ = -1, c = -1, l = -1, d = -1, u = !1, h = function(t) {
_i_("619:a9deabb3");
var i = g + 1 < e.length && e.charAt(g + 1) == t;
return i && g++, _r_(i);
}, f = function(e) {
_i_("619:7e032a72");
var i = h(e), n = "@" == e ? 14 :"!" == e ? 20 :"y" == e && i ? 4 :"o" == e ? 3 :2, r = new RegExp("^\\d{1," + n + "}"), a = t.substring(b).match(r);
if (!a) throw "Missing number at position " + b;
return b += a[0].length, _r_(parseInt(a[0], 10));
}, p = function(e, i, n) {
_i_("619:174ed880");
var r = $.map(h(e) ? n :i, function(e, t) {
return _i_("619:3b5523a0"), _r_([ [ t, e ] ]);
}).sort(function(e, t) {
return _i_("619:9f2d477d"), _r_(-(e[1].length - t[1].length));
}), a = -1;
if ($.each(r, function(e, i) {
_i_("619:23405695");
var n = i[1];
if (t.substr(b, n.length).toLowerCase() == n.toLowerCase()) return a = i[0], b += n.length, _r_(!1);
_r_();
}), -1 != a) return _r_(a + 1);
throw "Unknown name at position " + b;
}, m = function() {
if (_i_("619:a2b30f23"), t.charAt(b) != e.charAt(g)) throw "Unexpected literal at position " + b;
b++, _r_();
}, b = 0, g = 0; g < e.length; g++) if (u) "'" != e.charAt(g) || h("'") ? m() :u = !1; else switch (e.charAt(g)) {
case "d":
l = f("d");
break;

case "D":
p("D", r, a);
break;

case "o":
d = f("o");
break;

case "m":
c = f("m");
break;

case "M":
c = p("M", s, o);
break;

case "y":
_ = f("y");
break;

case "@":
var v = new Date(f("@"));
_ = v.getFullYear(), c = v.getMonth() + 1, l = v.getDate();
break;

case "!":
var v = new Date((f("!") - this._ticksTo1970) / 1e4);
_ = v.getFullYear(), c = v.getMonth() + 1, l = v.getDate();
break;

case "'":
h("'") ? m() :u = !0;
break;

default:
m();
}
if (b < t.length) throw "Extra/unparsed characters found in date: " + t.substring(b);
if (-1 == _ ? _ = new Date().getFullYear() :100 > _ && (_ += new Date().getFullYear() - new Date().getFullYear() % 100 + (n >= _ ? 0 :-100)), d > -1) for (c = 1, l = d; ;) {
var y = this._getDaysInMonth(_, c - 1);
if (y >= l) break;
c++, l -= y;
}
var v = this._daylightSavingAdjust(new Date(_, c - 1, l));
if (v.getFullYear() != _ || v.getMonth() + 1 != c || v.getDate() != l) throw "Invalid date";
return _r_(v);
},
ATOM:"yy-mm-dd",
COOKIE:"D, dd M yy",
ISO_8601:"yy-mm-dd",
RFC_822:"D, d M y",
RFC_850:"DD, dd-M-y",
RFC_1036:"D, d M y",
RFC_1123:"D, d M yy",
RFC_2822:"D, d M yy",
RSS:"D, d M y",
TICKS:"!",
TIMESTAMP:"@",
W3C:"yy-mm-dd",
_ticksTo1970:24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
formatDate:function(e, t, i) {
if (_i_("619:b34d2773"), !t) return _r_("");
var n = (i ? i.dayNamesShort :null) || this._defaults.dayNamesShort, r = (i ? i.dayNames :null) || this._defaults.dayNames, a = (i ? i.monthNamesShort :null) || this._defaults.monthNamesShort, s = (i ? i.monthNames :null) || this._defaults.monthNames, o = function(t) {
_i_("619:a9deabb31");
var i = u + 1 < e.length && e.charAt(u + 1) == t;
return i && u++, _r_(i);
}, _ = function(e, t, i) {
_i_("619:2d829433");
var n = "" + t;
if (o(e)) for (;n.length < i; ) n = "0" + n;
return _r_(n);
}, c = function(e, t, i, n) {
return _i_("619:ab59b134"), _r_(o(e) ? n[t] :i[t]);
}, l = "", d = !1;
if (t) for (var u = 0; u < e.length; u++) if (d) "'" != e.charAt(u) || o("'") ? l += e.charAt(u) :d = !1; else switch (e.charAt(u)) {
case "d":
l += _("d", t.getDate(), 2);
break;

case "D":
l += c("D", t.getDay(), n, r);
break;

case "o":
l += _("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
break;

case "m":
l += _("m", t.getMonth() + 1, 2);
break;

case "M":
l += c("M", t.getMonth(), a, s);
break;

case "y":
l += o("y") ? t.getFullYear() :(t.getYear() % 100 < 10 ? "0" :"") + t.getYear() % 100;
break;

case "@":
l += t.getTime();
break;

case "!":
l += 1e4 * t.getTime() + this._ticksTo1970;
break;

case "'":
o("'") ? l += "'" :d = !0;
break;

default:
l += e.charAt(u);
}
return _r_(l);
},
_possibleChars:function(e) {
_i_("619:5aa6669b");
for (var t = "", i = !1, n = function(t) {
_i_("619:a9deabb32");
var i = r + 1 < e.length && e.charAt(r + 1) == t;
return i && r++, _r_(i);
}, r = 0; r < e.length; r++) if (i) "'" != e.charAt(r) || n("'") ? t += e.charAt(r) :i = !1; else switch (e.charAt(r)) {
case "d":
case "m":
case "y":
case "@":
t += "0123456789";
break;

case "D":
case "M":
return _r_(null);

case "'":
n("'") ? t += "'" :i = !0;
break;

default:
t += e.charAt(r);
}
return _r_(t);
},
_get:function(e, t) {
return _i_("619:76f43470"), _r_(e.settings[t] !== undefined ? e.settings[t] :this._defaults[t]);
},
_setDateFromField:function(e, t) {
if (_i_("619:82c30e19"), e.input.val() == e.lastVal) return _r_();
var i, n, r = this._get(e, "dateFormat"), a = e.lastVal = e.input ? e.input.val() :null;
i = n = this._getDefaultDate(e);
var s = this._getFormatConfig(e);
try {
i = this.parseDate(r, a, s) || n;
} catch (o) {
this.log(o), a = t ? "" :a;
}
e.selectedDay = i.getDate(), e.drawMonth = e.selectedMonth = i.getMonth(), e.drawYear = e.selectedYear = i.getFullYear(), e.currentDay = a ? i.getDate() :0, e.currentMonth = a ? i.getMonth() :0, e.currentYear = a ? i.getFullYear() :0, this._adjustInstDate(e), _r_();
},
_getDefaultDate:function(e) {
return _i_("619:8f14d736"), _r_(this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date())));
},
_determineDate:function(e, t, i) {
_i_("619:6ae481b5");
var n = function(e) {
_i_("619:f2cf9670");
var t = new Date();
return t.setDate(t.getDate() + e), _r_(t);
}, r = function(t) {
_i_("619:9315f9f0");
try {
return _r_($.datepicker.parseDate($.datepicker._get(e, "dateFormat"), t, $.datepicker._getFormatConfig(e)));
} catch (i) {}
for (var n = (t.toLowerCase().match(/^c/) ? $.datepicker._getDate(e) :null) || new Date(), r = n.getFullYear(), a = n.getMonth(), s = n.getDate(), o = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, _ = o.exec(t); _; ) {
switch (_[2] || "d") {
case "d":
case "D":
s += parseInt(_[1], 10);
break;

case "w":
case "W":
s += 7 * parseInt(_[1], 10);
break;

case "m":
case "M":
a += parseInt(_[1], 10), s = Math.min(s, $.datepicker._getDaysInMonth(r, a));
break;

case "y":
case "Y":
r += parseInt(_[1], 10), s = Math.min(s, $.datepicker._getDaysInMonth(r, a));
}
_ = o.exec(t);
}
return _r_(new Date(r, a, s));
}, a = null == t || "" === t ? i :"string" == typeof t ? r(t) :"number" == typeof t ? isNaN(t) ? i :n(t) :new Date(t.getTime());
return a = a && "Invalid Date" == a.toString() ? i :a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), _r_(this._daylightSavingAdjust(a));
},
_daylightSavingAdjust:function(e) {
if (_i_("619:0a9452de"), !e) return _r_(null);
return e.setHours(e.getHours() > 12 ? e.getHours() + 2 :0), _r_(e);
},
_setDate:function(e, t, i) {
_i_("619:3c185e33");
var n = !t, r = e.selectedMonth, a = e.selectedYear, s = this._restrictMinMax(e, this._determineDate(e, t, new Date()));
e.selectedDay = e.currentDay = s.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = s.getMonth(), e.drawYear = e.selectedYear = e.currentYear = s.getFullYear(), r == e.selectedMonth && a == e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(n ? "" :this._formatDate(e)), _r_();
},
_getDate:function(e) {
_i_("619:ff568734");
var t = !e.currentYear || e.input && "" == e.input.val() ? null :this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
return _r_(t);
},
_attachHandlers:function(e) {
_i_("619:517cf368");
var t = this._get(e, "stepMonths"), i = "#" + e.id;
e.dpDiv.find("[data-handler]").map(function() {
_i_("619:d8079e81");
var e = {
prev:function() {
_i_("619:65ea5799"), window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, -t, "M"), _r_();
},
next:function() {
_i_("619:8a86588c"), window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, +t, "M"), _r_();
},
hide:function() {
_i_("619:411ebe24"), window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker(), _r_();
},
today:function() {
_i_("619:d7e296fe"), window["DP_jQuery_" + dpuuid].datepicker._gotoToday(i), _r_();
},
selectDay:function() {
return _i_("619:5ada1c6b"), window["DP_jQuery_" + dpuuid].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), _r_(!1);
},
selectMonth:function() {
return _i_("619:06700975"), window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "M"), _r_(!1);
},
selectYear:function() {
return _i_("619:c8fb12b2"), window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "Y"), _r_(!1);
}
};
$(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")]), _r_();
}), _r_();
},
_generateHTML:function(e) {
_i_("619:5b11b2b6");
var t = new Date();
t = this._daylightSavingAdjust(new Date(t.getFullYear(), t.getMonth(), t.getDate()));
var i = this._get(e, "isRTL"), n = this._get(e, "showButtonPanel"), r = this._get(e, "hideIfNoPrevNext"), a = this._get(e, "navigationAsDateFormat"), s = this._getNumberOfMonths(e), o = this._get(e, "showCurrentAtPos"), _ = this._get(e, "stepMonths"), c = 1 != s[0] || 1 != s[1], l = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) :new Date(9999, 9, 9)), d = this._getMinMaxDate(e, "min"), u = this._getMinMaxDate(e, "max"), h = e.drawMonth - o, f = e.drawYear;
if (0 > h && (h += 12, f--), u) {
var p = this._daylightSavingAdjust(new Date(u.getFullYear(), u.getMonth() - s[0] * s[1] + 1, u.getDate()));
for (p = d && d > p ? d :p; this._daylightSavingAdjust(new Date(f, h, 1)) > p; ) h--, 0 > h && (h = 11, f--);
}
e.drawMonth = h, e.drawYear = f;
var m = this._get(e, "prevText");
m = a ? this.formatDate(m, this._daylightSavingAdjust(new Date(f, h - _, 1)), this._getFormatConfig(e)) :m;
var b = this._canAdjustMonth(e, -1, f, h) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" :"w") + '">' + m + "</span></a>" :r ? "" :'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" :"w") + '">' + m + "</span></a>", g = this._get(e, "nextText");
g = a ? this.formatDate(g, this._daylightSavingAdjust(new Date(f, h + _, 1)), this._getFormatConfig(e)) :g;
var v = this._canAdjustMonth(e, 1, f, h) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + g + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" :"e") + '">' + g + "</span></a>" :r ? "" :'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + g + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" :"e") + '">' + g + "</span></a>", y = this._get(e, "currentText"), k = this._get(e, "gotoCurrent") && e.currentDay ? l :t;
y = a ? this.formatDate(y, k, this._getFormatConfig(e)) :y;
var w = e.inline ? "" :'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(e, "closeText") + "</button>", $ = n ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (i ? w :"") + (this._isInRange(e, k) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + y + "</button>" :"") + (i ? "" :w) + "</div>" :"", x = parseInt(this._get(e, "firstDay"), 10);
x = isNaN(x) ? 0 :x;
for (var C = this._get(e, "showWeek"), B = this._get(e, "dayNames"), D = (this._get(e, "dayNamesShort"), this._get(e, "dayNamesMin")), E = this._get(e, "monthNames"), T = this._get(e, "monthNamesShort"), S = this._get(e, "beforeShowDay"), M = this._get(e, "showOtherMonths"), A = this._get(e, "selectOtherMonths"), j = (this._get(e, "calculateWeek") || this.iso8601Week, this._getDefaultDate(e)), O = "", I = 0; I < s[0]; I++) {
var N = "";
this.maxRows = 4;
for (var P = 0; P < s[1]; P++) {
var F = this._daylightSavingAdjust(new Date(f, h, e.selectedDay)), R = " ui-corner-all", L = "";
if (c) {
if (L += '<div class="ui-datepicker-group', s[1] > 1) switch (P) {
case 0:
L += " ui-datepicker-group-first", R = " ui-corner-" + (i ? "right" :"left");
break;

case s[1] - 1:
L += " ui-datepicker-group-last", R = " ui-corner-" + (i ? "left" :"right");
break;

default:
L += " ui-datepicker-group-middle", R = "";
}
L += '">';
}
L += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + R + '">' + (/all|left/.test(R) && 0 == I ? i ? v :b :"") + (/all|right/.test(R) && 0 == I ? i ? b :v :"") + this._generateMonthYearHeader(e, h, f, d, u, I > 0 || P > 0, E, T) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
for (var U = C ? '<th class="ui-datepicker-week-col">' + this._get(e, "weekHeader") + "</th>" :"", q = 0; 7 > q; q++) {
var V = (q + x) % 7;
U += "<th" + ((q + x + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' :"") + '><span title="' + B[V] + '">' + D[V] + "</span></th>";
}
L += U + "</tr></thead><tbody>";
var H = this._getDaysInMonth(f, h);
f == e.selectedYear && h == e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, H));
var W = (this._getFirstDayOfMonth(f, h) - x + 7) % 7, Y = Math.ceil((W + H) / 7), z = c && this.maxRows > Y ? this.maxRows :Y;
this.maxRows = z;
for (var G = this._daylightSavingAdjust(new Date(f, h, 1 - W)), K = 0; z > K; K++) {
L += "<tr>";
for (var Z = C ? '<td class="ui-datepicker-week-col">' + this._get(e, "calculateWeek")(G) + "</td>" :"", q = 0; 7 > q; q++) {
var Q = S ? S.apply(e.input ? e.input[0] :null, [ G ]) :[ !0, "" ], J = G.getMonth() != h, X = J && !A || !Q[0] || d && d > G || u && G > u;
Z += '<td class="' + ((q + x + 6) % 7 >= 5 ? " ui-datepicker-week-end" :"") + (J ? " ui-datepicker-other-month" :"") + (G.getTime() == F.getTime() && h == e.selectedMonth && e._keyEvent || j.getTime() == G.getTime() && j.getTime() == F.getTime() ? " " + this._dayOverClass :"") + (X ? " " + this._unselectableClass + " ui-state-disabled" :"") + (J && !M ? "" :" " + Q[1] + (G.getTime() == l.getTime() ? " " + this._currentClass :"") + (G.getTime() == t.getTime() ? " ui-datepicker-today" :"")) + '"' + (J && !M || !Q[2] ? "" :' title="' + Q[2] + '"') + (X ? "" :' data-handler="selectDay" data-event="click" data-month="' + G.getMonth() + '" data-year="' + G.getFullYear() + '"') + ">" + (J && !M ? "&#xa0;" :X ? '<span class="ui-state-default">' + G.getDate() + "</span>" :'<a class="ui-state-default' + (G.getTime() == t.getTime() ? " ui-state-highlight" :"") + (G.getTime() == l.getTime() ? " ui-state-active" :"") + (J ? " ui-priority-secondary" :"") + '" href="#">' + G.getDate() + "</a>") + "</td>", G.setDate(G.getDate() + 1), G = this._daylightSavingAdjust(G);
}
L += Z + "</tr>";
}
h++, h > 11 && (h = 0, f++), L += "</tbody></table>" + (c ? "</div>" + (s[0] > 0 && P == s[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' :"") :""), N += L;
}
O += N;
}
return O += $, e._keyEvent = !1, _r_(O);
},
_generateMonthYearHeader:function(e, t, i, n, r, a, s, o) {
_i_("619:df68e509");
var _ = this._get(e, "changeMonth"), c = this._get(e, "changeYear"), l = this._get(e, "showMonthAfterYear"), d = '<div class="ui-datepicker-title">', u = "";
if (a || !_) u += '<span class="ui-datepicker-month">' + s[t] + "</span>"; else {
var h = n && n.getFullYear() == i, f = r && r.getFullYear() == i;
u += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
for (var p = 0; 12 > p; p++) (!h || p >= n.getMonth()) && (!f || p <= r.getMonth()) && (u += '<option value="' + p + '"' + (p == t ? ' selected="selected"' :"") + ">" + o[p] + "</option>");
u += "</select>";
}
if (l || (d += u + (!a && _ && c ? "" :"&#xa0;")), !e.yearshtml) if (e.yearshtml = "", a || !c) d += '<span class="ui-datepicker-year">' + i + "</span>"; else {
var m = this._get(e, "yearRange").split(":"), b = new Date().getFullYear(), g = function(e) {
_i_("619:40cf54eb");
var t = e.match(/c[+-].*/) ? i + parseInt(e.substring(1), 10) :e.match(/[+-].*/) ? b + parseInt(e, 10) :parseInt(e, 10);
return _r_(isNaN(t) ? b :t);
}, v = g(m[0]), y = Math.max(v, g(m[1] || ""));
for (v = n ? Math.max(v, n.getFullYear()) :v, y = r ? Math.min(y, r.getFullYear()) :y, e.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">'; y >= v; v++) e.yearshtml += '<option value="' + v + '"' + (v == i ? ' selected="selected"' :"") + ">" + v + "</option>";
e.yearshtml += "</select>", d += e.yearshtml, e.yearshtml = null;
}
return d += this._get(e, "yearSuffix"), l && (d += (!a && _ && c ? "" :"&#xa0;") + u), d += "</div>", _r_(d);
},
_adjustInstDate:function(e, t, i) {
_i_("619:e94c2d48");
var n = e.drawYear + ("Y" == i ? t :0), r = e.drawMonth + ("M" == i ? t :0), a = Math.min(e.selectedDay, this._getDaysInMonth(n, r)) + ("D" == i ? t :0), s = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(n, r, a)));
e.selectedDay = s.getDate(), e.drawMonth = e.selectedMonth = s.getMonth(), e.drawYear = e.selectedYear = s.getFullYear(), ("M" == i || "Y" == i) && this._notifyChange(e), _r_();
},
_restrictMinMax:function(e, t) {
_i_("619:a6fe8695");
var i = this._getMinMaxDate(e, "min"), n = this._getMinMaxDate(e, "max"), r = i && i > t ? i :t;
return r = n && r > n ? n :r, _r_(r);
},
_notifyChange:function(e) {
_i_("619:181fa195");
var t = this._get(e, "onChangeMonthYear");
t && t.apply(e.input ? e.input[0] :null, [ e.selectedYear, e.selectedMonth + 1, e ]), _r_();
},
_getNumberOfMonths:function(e) {
_i_("619:48e22a03");
var t = this._get(e, "numberOfMonths");
return _r_(null == t ? [ 1, 1 ] :"number" == typeof t ? [ 1, t ] :t);
},
_getMinMaxDate:function(e, t) {
return _i_("619:3bcfc86b"), _r_(this._determineDate(e, this._get(e, t + "Date"), null));
},
_getDaysInMonth:function(e, t) {
return _i_("619:c1a4fdb9"), _r_(32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate());
},
_getFirstDayOfMonth:function(e, t) {
return _i_("619:c3e872c7"), _r_(new Date(e, t, 1).getDay());
},
_canAdjustMonth:function(e, t, i, n) {
_i_("619:cec4ca79");
var r = this._getNumberOfMonths(e), a = this._daylightSavingAdjust(new Date(i, n + (0 > t ? t :r[0] * r[1]), 1));
return 0 > t && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), _r_(this._isInRange(e, a));
},
_isInRange:function(e, t) {
_i_("619:9a65448d");
var i = this._getMinMaxDate(e, "min"), n = this._getMinMaxDate(e, "max");
return _r_((!i || t.getTime() >= i.getTime()) && (!n || t.getTime() <= n.getTime()));
},
_getFormatConfig:function(e) {
_i_("619:312dc1ed");
var t = this._get(e, "shortYearCutoff");
return t = "string" != typeof t ? t :new Date().getFullYear() % 100 + parseInt(t, 10), _r_({
shortYearCutoff:t,
dayNamesShort:this._get(e, "dayNamesShort"),
dayNames:this._get(e, "dayNames"),
monthNamesShort:this._get(e, "monthNamesShort"),
monthNames:this._get(e, "monthNames")
});
},
_formatDate:function(e, t, i, n) {
_i_("619:18b094c8"), t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
var r = t ? "object" == typeof t ? t :this._daylightSavingAdjust(new Date(n, i, t)) :this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
return _r_(this.formatDate(this._get(e, "dateFormat"), r, this._getFormatConfig(e)));
}
});
function bindHover(e) {
_i_("619:8386ac33");
var t = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return _r_(e.bind("mouseout", function(e) {
_i_("619:5c466675");
var i = $(e.target).closest(t);
if (!i.length) return _r_();
i.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover"), _r_();
}).bind("mouseover", function(i) {
_i_("619:06fa40db");
var n = $(i.target).closest(t);
if ($.datepicker._isDisabledDatepicker(instActive.inline ? e.parent()[0] :instActive.input[0]) || !n.length) return _r_();
n.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), n.addClass("ui-state-hover"), n.hasClass("ui-datepicker-prev") && n.addClass("ui-datepicker-prev-hover"), n.hasClass("ui-datepicker-next") && n.addClass("ui-datepicker-next-hover"), _r_();
}));
}
function extendRemove(e, t) {
_i_("619:8a761f00"), $.extend(e, t);
for (var i in t) (null == t[i] || t[i] == undefined) && (e[i] = t[i]);
return _r_(e);
}
function isArray(e) {
return _i_("619:714971a2"), _r_(e && ($.browser.safari && "object" == typeof e && e.length || e.constructor && e.constructor.toString().match(/\Array\(\)/)));
}
$.fn.datepicker = function(e) {
if (_i_("619:50c43485"), !this.length) return _r_(this);
$.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv), $.datepicker.initialized = !0);
var t = Array.prototype.slice.call(arguments, 1);
if ("string" == typeof e && ("isDisabled" == e || "getDate" == e || "widget" == e)) return _r_($.datepicker["_" + e + "Datepicker"].apply($.datepicker, [ this[0] ].concat(t)));
if ("option" == e && 2 == arguments.length && "string" == typeof arguments[1]) return _r_($.datepicker["_" + e + "Datepicker"].apply($.datepicker, [ this[0] ].concat(t)));
return _r_(this.each(function() {
_i_("619:f8310a1d"), "string" == typeof e ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [ this ].concat(t)) :$.datepicker._attachDatepicker(this, e), _r_();
}));
}, $.datepicker = new Datepicker(), $.datepicker.initialized = !1, $.datepicker.uuid = new Date().getTime(), $.datepicker.version = "1.8.22", window["DP_jQuery_" + dpuuid] = $, _r_();
}(jQuery), B.define("component/checkin-checkout-selector", function(e, t, i) {
_i_("619:7cf1e12b");
var n = e("component"), r = e("event-emitter"), a = 864e5;
i.exports = n.extend({
init:function() {
_i_("619:07de20c5"), r.extend(this), this._findCheckinCheckoutSelectors(), this.interval = this.getInterval(), this._attachEvents(), this._updateCalendarsRanges(), _r_();
},
_onCalendarOpen:function(e) {
_i_("619:4abcb79f");
var t = e.id;
t === this.checkinSelector.getCalendar().id() ? this.checkoutSelector.getCalendarElement().trigger("hide") :this.checkinSelector.getCalendarElement().trigger("hide"), _r_();
},
_onCheckinDateChange:function(e) {
_i_("619:3e1b86b6");
var t, i = this.interval || 1, n = this._getTodayDate();
this.checkinSelector.getFullDate().raw.getTime() < n.getTime() && (this.checkinSelector.setDate(n.getFullYear(), n.getMonth(), n.getDate()), this.interval = this.getInterval()), this.isCheckinCheckoutValid() || (t = this._getDateAfterInterval(this.checkinSelector.getFullDate().raw, i), this.checkoutSelector.setDate(t.getFullYear(), t.getMonth(), t.getDate())), this.interval = this.getInterval(), this._updateCalendarsRanges(), this.trigger("dates-changed", {
checkin:this.checkinSelector.getFullDate(),
checkout:this.checkoutSelector.getFullDate()
}), _r_();
},
_onCheckoutDateChange:function(e) {
_i_("619:39dbaeed");
var t, i, n = this.interval || 1, r = this._getTodayDate();
this.checkoutSelector.getFullDate().raw.getTime() <= r.getTime() && (i = this._getDateAfterInterval(r, 1), this.checkoutSelector.setDate(i.getFullYear(), i.getMonth(), i.getDate()), this.interval = this.getInterval()), this.isCheckinCheckoutValid() || (t = this._getDateBeforeInterval(this.checkoutSelector.getFullDate().raw, n), t.getTime() < r.getTime() && (t = r), this.checkinSelector.setDate(t.getFullYear(), t.getMonth(), t.getDate())), this.interval = this.getInterval(), this._updateCalendarsRanges(), this.trigger("dates-changed", {
checkin:this.checkinSelector.getFullDate(),
checkout:this.checkoutSelector.getFullDate()
}), _r_();
},
_attachEvents:function() {
_i_("619:d2cfd802"), this.checkinSelector.on("calendar-open", this._onCalendarOpen.bind(this)), this.checkoutSelector.on("calendar-open", this._onCalendarOpen.bind(this)), this.checkinSelector.on("date-change", this._onCheckinDateChange.bind(this)), this.checkoutSelector.on("date-change", this._onCheckoutDateChange.bind(this)), _r_();
},
_findCheckinCheckoutSelectors:function() {
_i_("619:8030861c"), this.checkinSelector = this.$el.find("[data-checkin-selector='']").component("date-selector"), this.checkoutSelector = this.$el.find("[data-checkout-selector='']").component("date-selector"), _r_();
},
_getDateAfterInterval:function(e, t) {
return _i_("619:aeb7395b"), _r_(new Date(e.getTime() + (t * a - 60 * e.getTimezoneOffset() * 1e3)));
},
_getDateBeforeInterval:function(e, t) {
return _i_("619:6d465de1"), _r_(new Date(e.getTime() - (t * a + 60 * e.getTimezoneOffset() * 1e3)));
},
_getTodayDate:function() {
_i_("619:f39e8d4a");
var e = new Date();
return _r_(new Date(e.getFullYear(), e.getMonth(), e.getDate()));
},
_updateCalendarsRanges:function() {
_i_("619:ccce968d");
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
return _i_("619:52585b7f"), _r_(this.getInterval() > 0);
},
getInterval:function() {
_i_("619:09d315fa");
function e(e) {
return _i_("619:1b0849c4"), _r_(new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), 0, 0, 0, 0)));
}
var t = e(this.checkinSelector.getFullDate().raw), i = e(this.checkoutSelector.getFullDate().raw);
return _r_(parseInt((i - t) / a, 10));
},
getCheckinSelector:function() {
return _i_("619:9f9c7e89"), _r_(this.checkinSelector);
},
getCheckoutSelector:function() {
return _i_("619:e89c9c09"), _r_(this.checkoutSelector);
},
getDateRange:function() {
return _i_("619:110aa2e4"), _r_({
checkin:this.checkinSelector.getFullDate().raw,
checkout:this.checkoutSelector.getFullDate().raw
});
},
getDateObjectsRange:function() {
return _i_("619:051507dd"), _r_({
checkin:this.checkinSelector.getFullDate(),
checkout:this.checkoutSelector.getFullDate()
});
},
setDateRange:function(e, t) {
_i_("619:eb5ac15b"), this.checkinSelector.setDate(e.getFullYear(), e.getMonth(), e.getDate()), this.checkinSelector.broadcastDateChange(), this.checkoutSelector.setDate(t.getFullYear(), t.getMonth(), t.getDate()), this.checkoutSelector.broadcastDateChange(), _r_();
}
}), _r_();
}), B.define("component/date-selector", function(e, t, i) {
_i_("619:61b2fef2");
var n = e("jquery"), r = e("component"), a = e("event-emitter"), s = e("formatting/date"), o = B.env.b_simple_weekdays_for_js.slice(0), _ = o.slice(0);
_.unshift(_.pop());
var c = B.env.b_short_months, l = B.env.sunday_first, d = B.env.b_lang;
i.exports = r.extend({
init:function() {
_i_("619:3a6159c0"), a.extend(this);
var e = this.$el.find("[data-dateselector-calendar='']");
this.daySelect = this.$el.find("[data-dateselector-day='']"), this.monthYearSelect = this.$el.find("[data-dateselector-monthyear='']"), this.dateLabel = this.$el.find("[data-dateselector-label='']"), this.dateLabel && (this.dateFormat = this.dateLabel.data("date-format") || "date_with_year"), this.monthSelect = this.$el.find("[data-dateselector-month='']"), this.yearSelect = this.$el.find("[data-dateselector-year='']"), this.showWeekDays = !this.$el.data("no-weekdays"), this.$el.data("init-set-day-select") && this._updateDaySelect(this.getYear(), this.getMonth()), this.calendar = e.length ? this._initCalendar(e) :null, this._attachEvents(), this.$el.data("no-init-change-trigger") || this.monthYearSelect.trigger("change"), _r_();
},
_onMonthYearSelectChange:function() {
_i_("619:15614789");
var e = this.getDay(), t = this.getMonth(), i = this.getYear();
e = this._updateDaySelect(i, t), this.calendar && this._setCalendarDate(i, t, e), this.dateLabel.length > 0 && this._updateDateLabel(i, t, e), this.trigger("date-change", this._buildDateObject(i, t, e)), _r_();
},
_onDaySelectChange:function(e) {
_i_("619:8e1dcaba");
var t = this.getDay(), i = this.getMonth(), n = this.getYear();
this.calendar && this._setCalendarDate(n, i, t), this.dateLabel.length > 0 && this._updateDateLabel(n, i, t), this.trigger("date-change", this._buildDateObject(n, i, t)), _r_();
},
_onCalendarDateSelected:function(e, t, i) {
_i_("619:0747b6ab");
var n = t.getYear(), r = t.getMonth(), a = t.getDate();
this._setSelectsDate(n, r, a), this.dateLabel.length > 0 && this._updateDateLabel(n, r, a), this.trigger("calendar-date-selected"), this.trigger("date-change", this._buildDateObject(n, r, a)), _r_();
},
_onCalendarOpened:function(e, t) {
_i_("619:4dfe9ef3");
var i = this.calendar.data("calendar2");
i && t.id === i.id() && this.trigger("calendar-open", t), _r_();
},
_attachEvents:function() {
_i_("619:372224d7"), this.monthYearSelect.bind("change", n.proxy(this._onMonthYearSelectChange, this)), this.daySelect.bind("change", n.proxy(this._onDaySelectChange, this)), this.monthSelect.bind("change", n.proxy(this._onMonthYearSelectChange, this)), this.yearSelect.bind("change", n.proxy(this._onMonthYearSelectChange, this)), _r_();
},
_initCalendar:function(e) {
if (_i_("619:80320439"), !n.fn.calendar2) return _r_(null);
var t = 1 === B.env.b_is_tablet ? 400 :261;
B.eventEmitter.bind("CALENDAR:opened", n.proxy(this._onCalendarOpened, this));
var i = booking.calendar2.defaults.startDate, r = new Date(i.getFullYear() + 1, i.getMonth() + 1, 0);
return B.env.b_search_max_months && (r = new Date(i.getFullYear(), i.getMonth() + B.env.b_search_max_months, 0)), _r_(n(e).calendar2({
dayNames:l ? _ :o,
sundayFirst:l,
monthNames:c,
endDate:r,
defaultDate:this.getFullDate(),
onDateSelected:n.proxy(this._onCalendarDateSelected, this),
direction:B.env.rtl ? "rtl" :"ltr",
closeButton:!0,
monthWidth:t,
arrow:!!this._showArrow,
monthTitle:function(e, t) {
if (_i_("619:61b9cfda"), B.env.b_year_months[e + "-" + (t + 1)]) return _r_(B.env.b_year_months[e + "-" + (t + 1)].name);
_r_();
}
}));
},
_setCalendarDate:function(e, t, i) {
_i_("619:e6993b87"), this.calendar.trigger("dateSelected", {
value:this._buildDateObject(e, t, i)
}), _r_();
},
_setSelectsDate:function(e, t, i) {
_i_("619:3453ba48"), this.monthYearSelect.val(e + "-" + (t + 1)), this._updateDaySelect(e, t), this.daySelect.val(i), _r_();
},
_updateDateLabel:function(e, t, i) {
_i_("619:2cee4cea");
var n = s.format({
year:e,
month:t,
day:i
}, this.dateFormat);
this.dateLabel.html(n), _r_();
},
_buildDateObject:function(e, t, i) {
return _i_("619:6ceb9593"), _r_({
date:i,
day:i,
month:t,
year:e,
string:e + "-" + (t + 1) + "-" + i,
raw:new Date(e, t, i)
});
},
_updateDaySelect:function(e, t) {
_i_("619:cb7f2cff");
var i, n, r = this.getDay();
if (isNaN(t) && (t = 0), this.daySelect.html(this._buildDayOptionsForMonthYear(e, t)), isNaN(r)) return _r_(NaN);
return i = this.daySelect.find("[value='" + r + "']"), n = i.length ? r :this.getDaysInMonth(e, t), this.daySelect.val(n), _r_(n);
},
_buildDayOptionsForMonthYear:function(e, t) {
_i_("619:90c39e7b");
var i, n = new Date(e, t, 1), r = n.getDay(), a = this.getDaysInMonth(e, t), s = [], o = this.showWeekDays;
this.daySelect.find("option:first").val() || s.push("<option></option>");
for (var c = 1; a >= c; c++) i = o ? "ja" === d || "zh" === d || "ko" === d || "hu" === d ? c + " " + _[r] :_[r] + " " + c :c, s.push("<option value='" + c + "'>" + i + "</option>"), r = 6 === r ? 0 :r + 1;
return _r_(s.join(""));
},
getDaysInMonth:function(e, t) {
switch (_i_("619:d55c7a29"), e = parseInt(e, 10), t) {
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
if (_i_("619:74ec9923"), this.yearSelect.length) return _r_(parseInt(this.yearSelect.val() || this.yearSelect.find("option[selected]").val(), 10));
return _r_(parseInt((this.monthYearSelect.val() || this.monthYearSelect.find("option[selected]").val()).split("-")[0], 10));
},
getMonth:function() {
if (_i_("619:5bd64f5c"), this.monthSelect.length) return _r_(parseInt(this.monthSelect.val() || this.monthSelect.find("option[selected]").val(), 10) - 1);
return _r_(parseInt((this.monthYearSelect.val() || this.monthYearSelect.find("option[selected]").val()).split("-")[1], 10) - 1);
},
getDay:function() {
return _i_("619:8017407e"), _r_(parseInt(this.daySelect.val() || this.daySelect.find("option[selected]").val(), 10));
},
getFullDate:function() {
_i_("619:b9b4cc77");
var e = this.getDay(), t = this.getMonth(), i = this.getYear();
return _r_(this._buildDateObject(i, t, e));
},
getCalendarElement:function() {
return _i_("619:48dee79a"), _r_(this.calendar);
},
getCalendar:function() {
if (_i_("619:2fa5c819"), !this.calendar) return _r_(null);
return _r_(this.calendar.data("calendar2"));
},
setDate:function(e, t, i) {
_i_("619:13bf7376"), this._setSelectsDate(e, t, i), this.calendar && this._setCalendarDate(e, t, i), this.dateLabel.length > 0 && this._updateDateLabel(e, t, i), _r_();
},
broadcastDateChange:function() {
_i_("619:c3d24cc9");
var e = this.getDay(), t = this.getMonth(), i = this.getYear();
this.trigger("date-change", this._buildDateObject(i, t, e)), _r_();
}
}), _r_();
}), B.define("component/dropdown", function(e, t, i) {
_i_("619:d71ff71e");
var n = e("component"), r = e("click-out");
i.exports = n.extend({
init:function() {
_i_("619:d512e63b"), this.$trigger = this.$el.find('[data-dropdown-trigger], [data-dropdown-trigger=""]'), this.$menu = this.$el.find('[data-dropdown-menu], [data-dropdown-menu=""]'), this.addEventListeners(), this.configure(), _r_();
},
addEventListeners:function() {
_i_("619:804bce29"), this.$el.find('[data-dropdown-close], [data-dropdown-close=""]').click(this.closeClick.bind(this)), this.$trigger.click(this.triggerClick.bind(this)), _r_();
},
configure:function() {
_i_("619:78e07c17"), this.$menu.hasClass("g-hidden") && (this.hideByClass = "g-hidden"), _r_();
},
closeClick:function() {
_i_("619:7c9c736b"), this.hide(), _r_();
},
triggerClick:function(e) {
_i_("619:d7898556"), e.preventDefault(), this.toggle(), _r_();
},
clickedOut:function() {
_i_("619:7c9c736b1"), this.hide(), _r_();
},
toggle:function() {
_i_("619:24290b6f"), this.visible ? this.hide() :this.show(), _r_();
},
show:function() {
_i_("619:fae4d18b"), this.visible || (this.visible = !0, this.hideByClass ? this.$menu.removeClass(this.hideByClass) :this.$menu.show(), this.$el.trigger("show.dropdown"), this.clickOutMonitorId = r.addMonitor(this.$menu, this.clickedOut.bind(this))), _r_();
},
hide:function() {
_i_("619:9b126b9d"), this.visible && (this.visible = !1, this.hideByClass ? this.$menu.addClass(this.hideByClass) :this.$menu.hide(), this.$el.trigger("hide.dropdown"), this.clickOutMonitorId && (r.removeMonitor(this.clickOutMonitorId), this.clickOutMonitorId = void 0)), _r_();
}
}), _r_();
}), B.define("component/form-validation", function(e, t, i) {
_i_("619:30971800");
var n = e("component"), r = e("data-validator");
i.exports = n.extend({
init:function() {
_i_("619:e92ccb98"), this.formValid = !0, this.inputs = [], this.$el.is("[data-validation]") ? this.hook(0, this.$el) :this.$el.find("[data-validation]").each(this.hook.bind(this)), _r_();
},
hook:function(e, t) {
_i_("619:3bdbc834"), t instanceof jQuery || (t = $(t));
var i, n, a, s, o = t.data("validation").split(/\s+/g), _ = {};
(-1 != o.indexOf("date") || -1 != o.indexOf("birthdate")) && (i = t.find('[data-validation-day], [data-validation-day=""]'), n = t.find('[data-validation-month], [data-validation-month=""]'), a = t.find('[data-validation-year], [data-validation-year=""]')), -1 != o.indexOf("birthdate") && (_.minAge = t.data("validation-min-age")), -1 != o.indexOf("ccdate") && (n = t.find('[data-validation-month], [data-validation-month=""]'), a = t.find('[data-validation-year], [data-validation-year=""]')), -1 != o.indexOf("password_confirm") && (s = this.$el.find('[data-validation-password], [data-validation-password=""]')), -1 != o.indexOf("regex") && (_.regex = t.data("validation-regex"), _.regexFlags = t.data("validation-regex-flags")), t.find("input, textarea, select").bind("change validate", function(e) {
_i_("619:08e08f7d");
var c = $(e.currentTarget), l = [], d = c.val(), u = !0;
if (o.forEach(function(e) {
if (_i_("619:8ece12f0"), "required" == e && c.attr("type") && "checkbox" == c.attr("type").toLowerCase() && (d = c.is(":checked")), "required" == e && c.attr("type") && "radio" == c.attr("type").toLowerCase() && (d = c.closest("form, html").find('input[type="radio"][name="' + c.attr("name") + '"]:checked').length ? 1 :""), ("date" == e || "birthdate" == e) && (d = {
year:a.val(),
month:n.val(),
day:i.val()
}, "" == d.day || "" == d.month || "" == d.year)) return _r_(!1);
if ("ccdate" == e && (d = {
year:a.val(),
month:n.val(),
day:1
}, "" == d.month || "" == d.year)) return _r_(!1);
if ("password_confirm" == e) {
if (2 != s.length) return _r_(!1);
if (d = [ s.eq(0).val(), s.eq(1).val() ], "" == d[0] || "" == d[1]) return _r_(!1);
}
if (!r.validate(e, d, _)) return l.push(e), this.formValid = u = !1, _r_(!1);
_r_();
}.bind(this)), t.attr("data-validation-failed", l.join(" ")), u || t.is(".-invalid")) u && t.is(".-invalid") && (t.removeAttr("data-validation-failed"), t.removeClass("-invalid").data("invalid", !1)); else {
t.addClass("-invalid").data("invalid", !0);
var h = t.find("[data-invalid-message]");
h.length && h.text(h.data("invalid-message"));
}
_r_();
}.bind(this)).each(function(e, t) {
_i_("619:8643ef2e"), this.inputs.push($(t)), _r_();
}.bind(this)), _r_();
},
unhook:function(e, t) {
_i_("619:7f8fd135"), t instanceof jQuery || (t = $(t)), t.find("input, textarea, select").unbind("change validate"), _r_();
},
validate:function() {
return _i_("619:0c4e84e5"), this.formValid = !0, this.inputs.forEach(function(e) {
_i_("619:012207bb"), e.trigger("validate"), _r_();
}.bind(this)), _r_(this.formValid);
},
reset:function() {
_i_("619:e1ba963d"), this.$el.is("[data-validation]") ? (this.unhook(0, this.$el), this.hook(0, this.$el)) :(this.$el.find("[data-validation]").each(this.unhook.bind(this)), this.$el.find("[data-validation]").each(this.hook.bind(this))), _r_();
}
}), _r_();
}), B.define("component/keyboard", function(e, t, i) {
_i_("619:6d533b75");
var n = e("component"), r = e("event-emitter"), a = {
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
function s(e, t) {
return _i_("619:dc192754"), _r_(function(i) {
_i_("619:bd3022e0");
var n = "";
i.which && void 0 !== a[i.which.toString()] && (i.originalEvent.altKey && (n += ":alt"), i.originalEvent.ctrlKey && (n += ":ctrl"), i.originalEvent.metaKey && (n += ":meta"), i.originalEvent.shiftKey && (n += ":shift"), n += ":" + a[i.which], e.trigger(t + n, {
keys:t + n,
originalEvent:i
})), _r_();
});
}
i.exports = n.extend({
init:function() {
_i_("619:7a254e40"), r.extend(this), this.$el.bind("keydown", s(this, "keydown")).bind("keyup", s(this, "keyup")), _r_();
}
}), _r_();
}), B.define("overlay", function(e, t, i) {
_i_("619:c57901e3");
var n, r, a = e("event-emitter");
i.exports = a.extend({
options:{},
created:!1,
visible:!1,
getElement:function(e) {
return _i_("619:52ae83a2"), this.created || (this.created = !0, n = $('<div class="b-overlay" style="display:none"></div>'), $("body").append(n), r = $("html").component("keyboard"), r.on("keyup:Escape", this._keyboardEscape.bind(this)), n.click(this._backgroundClick.bind(this))), this.options = e || {}, this.options.animationDuration = this.options.animationDuration || .5, _r_(n);
},
show:function() {
if (_i_("619:142a3d87"), this.visible || !this.created) return _r_(!1);
this.visible = !0, this.trigger("show"), n.fadeIn(1e3 * this.options.animationDuration, function() {
_i_("619:a3d1b998"), this.trigger("show:end"), _r_();
}.bind(this)), _r_();
},
hide:function() {
if (_i_("619:97d7020f"), !this.visible || !this.created) return _r_(!1);
this.visible = !1, this.trigger("hide"), n.fadeOut(1e3 * this.options.animationDuration, function() {
_i_("619:1517a5e2"), this.trigger("hide:end"), _r_();
}.bind(this)), _r_();
},
_keyboardEscape:function(e) {
_i_("619:6c33963c"), this.options.preventHide || this.hide(), _r_();
},
_backgroundClick:function(e) {
_i_("619:01019f59"), !this.options.preventHide && (e.currentTarget === e.target || this.options.hideElements && -1 != this.options.hideElements.indexOf(e.target)) && (e.preventDefault(), this.hide()), _r_();
}
}), _r_();
}), B.define("component/show-static-notification", function(e, t, i) {
_i_("619:843baff0");
var n = e("component"), r = e("utils");
i.exports = n.extend({
init:function() {
if (_i_("619:79e8d0ce"), this.options = r.nodeData(this.$el), r.assertExists(this.options, "message"), r.assertExists(this.options, "show"), this.options.show && !this.options.show.match(/^(success|error)$/)) throw new Error("Undedined notification type");
var e = B.require("static-notification");
e[this.options.show](this.options.message), _r_();
}
}), _r_();
}), booking.components.define("legacy-emitter", function(e, t) {
_i_("619:974be8d9"), this.eventHandlers = {}, this.bind = function(e, t) {
return _i_("619:d0bd264b"), this.eventHandlers[e] = this.eventHandlers[e] || [], this.eventHandlers[e].push(t), _r_(this);
}, this.once = function(e, t) {
_i_("619:05b26614");
var i = this, n = function(r) {
_i_("619:916b17c1"), i.unbind(e, n), t.apply(i, arguments), _r_();
};
return this.bind(e, n), _r_(this);
}, this.unbind = function(e, i) {
if (_i_("619:6a8ef19a"), this.eventHandlers[e] = this.eventHandlers[e] || [], i) {
var n = t.inArray(i, this.eventHandlers[e]);
-1 != n && this.eventHandlers[e].splice(n, 1);
} else this.eventHandlers[e] = [];
return _r_(this);
}, this.trigger = function(e, i) {
if (_i_("619:a6a7edbb"), !this.eventHandlers[e] || 0 == this.eventHandlers[e].length) return _r_(this);
var n = !1, r = this;
return t.each(this.eventHandlers[e], function(t, a) {
if (_i_("619:1c6de3a8"), n) return _r_(!1);
a && a.call && a.call(r, {
type:e,
data:i,
stopPropagation:function() {
_i_("619:f074716f"), n = !0, _r_();
}
}), _r_();
}), _r_(this);
}, this.on = this.bind, this.off = this.unbind, _r_();
}), B.define("static-notification", function(e, t, i) {
"use strict";
_i_("619:8b130e69");
var n, r;
t.show = function() {
_i_("619:e9bf1a13"), n || (n = this._getElement());
var e = this._getHTML.apply(this, arguments);
n.html(e).loadComponents(), this._showElement(), clearTimeout(r), r = setTimeout(this._hideElement.bind(this), 5e3), _r_();
}, t.success = function(e) {
_i_("619:5a69cb81"), this.show("success", e), _r_();
}, t.error = function(e) {
_i_("619:a8ecef65"), this.show("error", e), _r_();
}, t._hideElement = function() {
_i_("619:3714d23d"), n.fadeOut(), _r_();
}, t._showElement = function() {
_i_("619:e5fb7fe6"), n.fadeIn(), _r_();
}, t._getElement = function() {
return _i_("619:79d9f826"), _r_($('<div style="display:none">').appendTo("body"));
}, t._getHTML = function(e, t) {
_i_("619:016083e0");
var i = {
level:e,
message:t
};
return _r_(B.jstmpl("static_notification").render(i));
}, _r_();
}), B.define("component/input-phone-country", function(e, t, i) {
_i_("619:16f489e2");
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
function s(e, t) {
return _i_("619:c5109f8e"), _r_(e.callingcode.length < t.callingcode.length ? 1 :e.callingcode.length > t.callingcode.length ? -1 :e.preferred ? -1 :1);
}
i.exports = n.extend({
init:function() {
_i_("619:6a74f571"), this.$country = this.$el.find('[data-phone-country=""], [data-phone-country]'), this.$input = this.$el.find('[data-phone-input=""], [data-phone-input]'), this.$flag = this.$el.find('[data-phone-flag=""], [data-phone-flag]'), this.isTriggerChange = void 0 !== this.$el.data("phone-country-trigger-change"), this.defaultCountryId = this.getDefaultCountryId(), this.countries = [], this.addEventListeners(), this.loadCountries(), this.initDefaultCountry(), _r_();
},
getDefaultCountryId:function() {
_i_("619:310e97ef");
var e = (this.$el.data("phone-country-default") || "").toString().toLowerCase();
return "xx" === e && (e = ""), _r_(e);
},
addEventListeners:function() {
_i_("619:e22405b6");
var e = this.$input[0], t = e && ("oninput" in this.$input[0] ? "input" :"keyup");
this.$country.change(this.countryChange.bind(this)), this.$input.bind("focus", this.inputFocus.bind(this)), this.$input.bind("blur", this.inputBlur.bind(this)), this.$input.bind(t + " change", this.inputInteracted.bind(this)), "msie" == B.env.b_browser && B.env.b_browser_version <= 8 && (this.$country.bind("mousedown", this.countryFocus.bind(this)), this.$country.bind("blur change", this.countryBlur.bind(this))), _r_();
},
inputFocus:function() {
_i_("619:82b7591d"), setTimeout(this.addDefaultCallingCode.bind(this), 4), _r_();
},
inputBlur:function() {
_i_("619:886a2afc"), this.removeDefaultCallingCode(), _r_();
},
countryFocus:function() {
_i_("619:ff5bf9db"), this.$country.css("width", "auto"), _r_();
},
countryBlur:function() {
_i_("619:ee7f41f2"), this.$country.css("width", ""), _r_();
},
inputInteracted:function() {
_i_("619:d9637942"), this.checkPlus(), this.changeCountryFromInput(), _r_();
},
countryChange:function() {
_i_("619:ece1e88f"), this.changeInputFromCountry(), this.$input.focus(), _r_();
},
loadCountries:function() {
_i_("619:f36ac589"), this.$country.find("option").each(function(e, t) {
_i_("619:c66ef2fb");
var i = $(t), n = i.attr("value").toLowerCase(), r = {
id:n,
callingcode:i.attr("data-calling-code"),
name:i.text(),
value:i.attr("value"),
preferred:this.defaultCountryId == n || -1 != a.indexOf(n)
};
this.countries.push(r), _r_();
}.bind(this)), this.countries.sort(s), _r_();
},
initDefaultCountry:function() {
_i_("619:22ccd31e"), this.defaultCountry = this.findCountryById(this.defaultCountryId), this.defaultCountry && (this.defaultCountryCallingCode = this.defaultCountry.callingcode, this.changeCountryFromInput(), this.$input.attr("placeholder", "+" + this.defaultCountryCallingCode)), _r_();
},
findCountryById:function(e) {
_i_("619:255dc48c");
var t = null;
return this.countries.every(function(i) {
if (_i_("619:fb6d66be"), i.id == e) return t = i, _r_(!1);
return _r_(!0);
}), _r_(t);
},
findCountryByNumber:function(e) {
_i_("619:6bc519b1");
var t = null;
return this.countries.every(function(i) {
if (_i_("619:07dab39e"), 0 == e.indexOf(i.callingcode)) return t = i, _r_(!1);
return _r_(!0);
}), _r_(t);
},
changeCountryCode:function(e, t) {
_i_("619:8c6d199c");
var i = this.findCountryByNumber(e);
return i && (e = e.substr(i.callingcode.length)), _r_(t.callingcode + e);
},
addDefaultCallingCode:function() {
_i_("619:8263e81e");
var e = this.$input.val();
("" == e || "+" == e) && this.$input.val("+" + this.defaultCountryCallingCode), _r_();
},
removeDefaultCallingCode:function() {
_i_("619:2e7bf520");
var e = this.$input.val();
("+" == e || e == "+" + this.defaultCountryCallingCode) && this.$input.val(""), _r_();
},
changeInputFromCountry:function() {
_i_("619:9e4a4521");
var e = this.$country.val().toLowerCase(), t = this.findCountryById(e), i = this.$input.val() || "", n = i.replace(/^\+/, "");
this.$input.val("+" + this.changeCountryCode(n, t)), this.isTriggerChange && this.$input.change(), this.updateFlag(t), _r_();
},
changeCountryFromInput:function() {
_i_("619:91013724");
var e = this.$input.val() || "", t = e.replace(/^\+/, ""), i = this.findCountryByNumber(t) || this.defaultCountry;
!i && booking.reportError && booking.reportError({
message:"No countries populated"
}, "No country"), this.$country.val(i.value), this.updateFlag(i), _r_();
},
checkPlus:function() {
_i_("619:4a0858cb");
var e = this.$input.val() || "";
0 != e.indexOf("+") && this.$input.val("+" + e), _r_();
},
updateFlag:function(e) {
_i_("619:ae191408"), r[e.id] && this.$flag.css("background-position", "0 " + r[e.id] + "px"), _r_();
},
selectCountry:function(e) {
_i_("619:10ee2401");
var t = this.findCountryById(e);
t && (this.defaultCountryId = t.id, this.initDefaultCountry()), _r_();
}
}), _r_();
}), B.define("component/company/notifications/alert", function(e, t, i) {
_i_("619:f555d3e9");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("619:29a1c258"), this.headerHeight = $("#top").outerHeight() + $(".bbtool-notification").outerHeight(), this.template = B.jstmpl("company_notifiction"), this.visible = !1, this.fixed = void 0, this.$alert = $(), this.automaticCloseAfter = 5500, $(window).scroll($.proxy(this, "move")), _r_();
},
show:function(e, t) {
_i_("619:6ea1d6c8");
var i = this;
i.visible = !0, i.fixed = void 0, i.$el.html(i.template.render({
b_type:e,
b_message:t
})), i.$alert = i.$el.find(".bbt-alert"), i.$alert.find("[data-dismiss]").click($.proxy(i, "clickDismiss")), i.move(), setTimeout(function() {
_i_("619:fcc27caf"), i.$alert.addClass("bbt-alert--visible"), _r_();
}, 4), clearTimeout(this.automaticCloseTimer), this.automaticCloseTimer = setTimeout(function() {
_i_("619:ec379dae"), i.hide(), _r_();
}, this.automaticCloseAfter), _r_();
},
success:function(e) {
_i_("619:1b337798"), this.show("success", e), _r_();
},
warning:function(e) {
_i_("619:93c6aff7"), this.show("warning", e), _r_();
},
error:function(e) {
_i_("619:437476db"), this.show("error", e), _r_();
},
hide:function() {
_i_("619:29055130");
var e = this;
e.visible = !1, e.fixed = void 0, e.$alert.removeClass("bbt-alert--visible"), setTimeout(function() {
_i_("619:30db87a9"), e.$alert.remove(), e.$alert = $(), _r_();
}, 250), _r_();
},
clickDismiss:function(e) {
_i_("619:5ba6bb1d"), e && e.preventDefault(), clearTimeout(this.automaticCloseTimer), this.hide(), _r_();
},
move:function() {
if (_i_("619:c2b64f43"), this.visible) {
var e = document.body.scrollTop || document.documentElement.scrollTop;
(void 0 === this.fixed || !this.fixed) && e > this.headerHeight ? (this.fixed = !0, this.$alert.css({
position:"fixed",
top:"0",
"z-index":999
})) :(void 0 === this.fixed || this.fixed) && e <= this.headerHeight && (this.fixed = !1, this.$alert.css({
position:"absolute",
top:this.headerHeight + "px",
"z-index":999
}));
}
_r_();
}
}), _r_();
}), B.define("company/reservations/linking/api", function(e) {
"use strict";
_i_("619:ceba1b65");
var t = e("company/server-transport");
function i(e, i) {
_i_("619:ea401c10");
var n = {
hotelreservations:{}
};
return n.hotelreservations[e] = {
pincode:i
}, _r_(t.run("link_hotelreservations", n));
}
function n(e, i, n) {
_i_("619:e6e35685");
var r = {
hotelreservations:{},
target_user_id:n
};
return r.hotelreservations[e] = {
pincode:i
}, _r_(t.run("link_hotelreservations", r));
}
function r(e, i) {
_i_("619:d8f15a1e");
var n = {
hotelreservations:{}
};
return n.hotelreservations[e] = {
pincode:i
}, _r_(t.run("unlink_hotelreservations", n));
}
return _r_({
link:i,
linkTo:n,
unlink:r,
transport:t
});
}), B.define("component/company/reservations/linking/company-reservations", function(e, t, i) {
_i_("619:2829249c");
var n = e("company/store"), r = e("component"), a = e("company/utils"), s = e("company/reservations/linking/api"), o = e("component/injector").inject("company/notifications/alert");
i.exports = r.extend({
init:function() {
_i_("619:1a6d1a89"), this.options = a.nodeData(this.$el[0]), this.options.b_target_user_id ? this.$el.bind("click", $.proxy(this, "linkTo")) :this.$el.bind("click", $.proxy(this, "unlink")), _r_();
},
linkTo:function(e) {
_i_("619:0f0eb255"), e && e.preventDefault();
var t;
t = this.options.b_is_post_booking ? $("#" + this.options.b_booknumber).closest(".js-booking_block") :$('[data-b_booknumber="' + this.options.b_booknumber + '"]'), t.slideUp(), s.linkTo(this.options.b_booknumber, this.options.b_pincode, this.options.b_target_user_id).then(function(e) {
_i_("619:5295e230");
var t = B.env.companyNameBusiness, i = e.target.textContent.trim(), n = B.env.isBusinessAccount;
n ? o.success(B.jstmpl.translations("bbec_mb_booking_unlinked_business_success", null, {
company_name:t
})) :o.success(B.jstmpl.translations("bbec_mb_booking_unlinked_success", null, {
company_name:i
})), _r_();
}.bind(this, e), function() {
_i_("619:2e6ab2c7"), t.slideDown(), o.error(B.jstmpl.translations("account_username_technical_error")), _r_();
}).finishChain(), _r_();
},
unlink:function(e) {
_i_("619:a097c2fe"), e && e.preventDefault(), $('[data-b_booknumber="' + this.options.b_booknumber + '"]').slideUp();
var t = this;
s.unlink(this.options.b_booknumber, this.options.b_pincode).then(function() {
_i_("619:917ac2a7");
var e = '<a href="' + t.options.b_mybookings_url + '" target="_blank">', i = "</a>", r = B.jstmpl.fn.FILTERS.html(n.get("b_company_name")), a = B.jstmpl.fn.FILTERS.html(t.options.b_reservation_b_booker_employee_b_name), s = t.options.b_mybookings_url ? "bbt_bookings_unlink_success_message" :"bbt_bookings_unlink_success_message_other_person";
o.success(B.jstmpl.translations(s, 0, {
start_link:e,
end_link:i,
company_name:r,
user_name:a
})), _r_();
}, function() {
_i_("619:c3e4643e"), $('[data-b_booknumber="' + t.options.b_booknumber + '"]').slideDown(), o.error(B.jstmpl.translations("account_username_technical_error")), _r_();
}).finishChain(), _r_();
}
}), _r_();
}), B.define("component/company/reservations/linking/post-booking", function(e, t, i) {
_i_("619:3b429c5d");
var n = e("component"), r = e("booking-store"), a = e("company/utils"), s = e("company/reservations/linking/api"), o = e("component/injector").inject("company/notifications/alert");
i.exports = n.extend({
init:function() {
_i_("619:aba7b53b"), this.template = B.jstmpl("company_reservation_link_post_booking"), this.store = new r(), this.store.on("data", $.proxy(this, "render"));
var e = a.nodeData(this.$el[0]);
e.b_reservation_bbtoollabels && (e.b_reservation_bbtoollabels = this.$el.data("b_reservation_bbtoollabels")), this.store.initFromVar(e), _r_();
},
render:function() {
_i_("619:34a485fc");
var e = this.store.get();
this.$el.html(this.template.render(e)).loadComponents(), this.addEventListeners(), _r_();
},
addEventListeners:function() {
_i_("619:743562db"), this.$el.find("[data-error-dismiss]").bind("click", $.proxy(this, "errorDismiss")), this.$el.find("[data-link]").bind("click", $.proxy(this, "link")), this.$el.find("[data-unlink]").bind("click", $.proxy(this, "unlink")), _r_();
},
errorDismiss:function() {
return _i_("619:9d8a47b5"), this.store.set("b_state", !1), _r_(!1);
},
link:function() {
_i_("619:028bc5c0");
var e = this;
return e.store.set("b_is_business_booking", 1), e.store.set("b_has_bbtool_company", 1), s.link(e.store.get("b_booknumber"), e.store.get("b_pincode")).then($.noop, function() {
_i_("619:7fb5576b"), e.store.set("b_is_business_booking", 0), e.store.set("b_has_bbtool_company", 0), o.error(B.jstmpl.translations("account_username_technical_error")), _r_();
}), _r_(!1);
},
unlink:function() {
_i_("619:87dbc965");
var e = this;
return e.store.set("b_is_business_booking", 0), e.store.set("b_has_bbtool_company", 0), s.unlink(e.store.get("b_booknumber"), e.store.get("b_pincode")).then(function() {}, function() {
_i_("619:ac42cdb1"), e.store.set("b_is_business_booking", 1), e.store.set("b_has_bbtool_company", 1), o.error(B.jstmpl.translations("account_username_technical_error")), _r_();
}), _r_(!1);
}
}), _r_();
}), B.define("company/server-transport", function(e, t, i) {
_i_("619:10c009ae");
var n, r, a = [ "/orgnode/group/create", "/orgnode/group/delete", "/orgnode/group/update", "/orgnode/billing_address/create", "/orgnode/billing_address/delete", "/orgnode/billing_address/update", "/identity/connect_active_profile", "autocomplete_employees", "bbtool_company_group_details", "connect_booker_to_bbtool_company", "reports_general_data", "reports_tab_data", "reports_ttv_data", "save_destination_budgets", "travel_agent_report_data", "travel_agent_creditslip_data", "travel_agent_update_settings", "feature_permission_overview", "update_feature_permission" ];
B.env && B.env.companyAction && B.env.companyAction.b_bbtool_manage_budgets_new && a.push("delete_destination_budgets"), i.exports = {
run:function(e, t, i, n) {
if (_i_("619:5f39b2ea"), !e) throw new Error("no action specified cannot run company operation");
var r = B.promise(), s = this.run.bind(this, e, t, i), o = this.processStatus.bind(this), _ = "";
B.env && B.env.b_query_params_with_lang_no_ext_enforce_lang_aid_currency ? _ = B.env.b_query_params_with_lang_no_ext_enforce_lang_aid_currency :B.env && B.env.b_query_params_with_lang_no_ext && (_ = B.env.b_query_params_with_lang_no_ext, n && n.isRunOnSecureDomain && B.env.aid && !_.match(/aid=/i) && (_ = _ + "&aid=" + B.env.aid));
var c = n && n.domain || "";
c += e.match(/^\//) ? e + _ :"/company/" + e + _, n && n["g-recaptcha-response"] && (t["g-recaptcha-response"] = n["g-recaptcha-response"]);
var l = {
url:c,
dataType:"json",
type:"POST",
data:JSON.stringify(t || {}),
xhrFields:{
withCredentials:!0
},
success:function(e) {
_i_("619:405d3d01"), o(r, e, s, i), _r_();
},
error:function(e, t, i) {
_i_("619:8c0832b7"), r.reject({
status:"error",
error:i
}), _r_();
}
};
a.indexOf(e) >= 0 && (l.contentType = "application/json");
var d = $.ajax(l);
return r.abortXhr = function() {
_i_("619:8e1201e4"), d.abort, r.reject({
status:"abort"
}), _r_();
}, _r_(r);
},
runOnSecureDomain:function(e, t, i) {
return _i_("619:743512e2"), _r_(this.run(e, t, i, {
domain:B.env.b_secure_domain,
isRunOnSecureDomain:!0
}));
},
sendAjaxForm:function(e) {
_i_("619:9aa4f245"), n || (r = "_company-form" + +new Date(), n = $('<iframe src="" name="' + r + '" id="' + r + '"/>'), n.addClass("company-pseudo-hidden").appendTo("body"));
var t = B.promise(), i = this.sendAjaxForm.bind(this, e);
return e.attr("target", r), n.bind("load", function() {
_i_("619:31b77a8d"), n.unbind("load"), n.attr("src", "");
var e;
try {
e = JSON.parse(n.contents().find("textarea").html());
} catch (r) {
return t.reject({
status:"error",
error:"Invalid JSON in the answer"
}), _r_();
}
e || t.reject({
status:"error",
error:"Empty answer"
}), this.processStatus(t, e, i), _r_();
}.bind(this)), e.submit(), _r_(t);
},
sendAjaxFormXHR:function(e, t, i) {
_i_("619:30881311");
var n = B.promise(), r = new FormData(e.get(0));
Object.keys(i).forEach(function(e) {
_i_("619:0be29511"), r.append(e, i[e]), _r_();
});
var a = this.sendAjaxFormXHR.bind(this, e, i), s = new XMLHttpRequest();
return s.addEventListener("load", function(e) {
_i_("619:76f61e04");
var t;
try {
t = JSON.parse(e.target.responseText);
} catch (e) {
return n.reject({
status:"error",
error:"Invalid JSON in the answer"
}), _r_(n);
}
if (!t) return n.reject({
status:"error",
error:"Empty answer"
}), _r_(n);
this.processStatus(n, t, a), _r_();
}.bind(this), !1), s.addEventListener("error", function(e) {
_i_("619:e8a2ea8a"), n.reject({
status:"error",
error:e.toString()
}), _r_();
}, !1), s.addEventListener("abort", function(e) {
_i_("619:e8a2ea8a1"), n.reject({
status:"error",
error:e.toString()
}), _r_();
}, !1), s.open("POST", t, !0), s.send(r), _r_(n);
},
processStatus:function(t, i, n, r) {
_i_("619:fb1cce62"), "ok" === i.status ? t.fulfill(i.response) :"no_auth" === i.error ? r ? t.reject({
error:B.jstmpl.translations("bbt_error_authorization_signin") || "@not authorised"
}) :B.command("show-auth-lightbox").run({
mode:"raise-auth"
}).then(n, function(e) {
_i_("619:dac3b56e"), e = e || {
error:B.jstmpl.translations("bbt_error_authorization_signin") || "@not authorised"
}, "different_email" === e.error && location.reload();
var t = B.promise();
return t.reject(e), _r_(t);
}).pipe(t) :"show_captcha" === i.error ? e("recaptcha").show({
key:"6Lcl8ykUAAAAAFifjBryqVPtC_0LL6tOSslcrnw5",
message:B.jstmpl.translations("bbg_contacts_invite_recaptcha_header")
}).then(function(e) {
_i_("619:248c714a");
var i = {};
return i["g-recaptcha-response"] = e["g-recaptcha-response"], _r_(n(i).then(function(e) {
_i_("619:20c4dcc1"), t.fulfill(e), _r_();
}, function(e) {
_i_("619:e245208b"), t.reject(e), _r_();
}));
}, function(e) {
_i_("619:8cf810f4"), t.reject({
error:e
}), _r_();
}) :t.reject(i), _r_();
}
}, _r_();
}), B.define("company/utils", function(e, t, i) {
_i_("619:94919d9d");
var n = e("utils"), r = {
assert:function(e, t) {
if (_i_("619:bb931a53"), !e) throw new Error("Assertion error: " + t);
_r_();
},
filterObject:function(e, t) {
_i_("619:6fd52811");
var i = {};
for (var n in e) e.hasOwnProperty(n) && t(e[n], n) && (i[n] = e[n]);
return _r_(i);
},
mapObject:function(e, t) {
_i_("619:b192ba8b");
var i = {};
for (var n in e) e.hasOwnProperty(n) && (i[n] = t(e[n], n));
return _r_(i);
},
buildKeys:function(e) {
_i_("619:714f5753");
var t, i, n, r, a, s = {};
for (t in e) e.hasOwnProperty(t) && (i = e[t], (a = /(\w+)\.(\d+)\.(\w+)/.exec(t)) ? (n = a[1], r = a[2], t = a[3], s[n] || (s[n] = []), s[n][r] || (s[n][r] = {}), s[n][r][t] = i) :s[t] = i);
return _r_(s);
},
flattenKeys:function(e, t) {
_i_("619:c0003c1d"), t = t || "";
var i, n, r = {};
for (i in e) if (e.hasOwnProperty(i)) if (n = e[i], n instanceof Array) for (var a = 0; a < n.length; ++a) $.extend(r, this.flattenKeys(n[a], i + "." + a + ".")); else r[t + i] = n;
return _r_(r);
},
addParams:function(e, t, i) {
_i_("619:844398f1"), i = i || B.env.b_query_params_delimiter;
var n = e.split("#"), r = n[0].split("?"), t = $.extend(B.tools.url.parse(r[1]), t), a = [ r[0], B.tools.url.stringify(t, i) ].join("?");
return _r_(n[1] ? [ a, n[1] ].join("#") :a);
},
removeParams:function(e, t, i) {
return _i_("619:8e2e9235"), i = i || B.env.b_query_params_delimiter, _r_(t.reduce(function(e, t) {
_i_("619:f5513444");
var n = new RegExp(t + "=[^" + i + "]*" + i + "?", "gi");
return _r_(e.replace(n, ""));
}, e));
},
scrapeTemplateParams:function(e) {
_i_("619:9f4926cd");
var t = n.nodeData(e), i = Object.keys(t).filter(function(e) {
return _i_("619:e67b4281"), _r_(e.match(/^b_/));
});
return _r_(B.tools.object.pick.apply(null, [ t ].concat(i)));
}
};
i.exports = $.extend({}, n, r), _r_();
}), B.define("company/store", function(e, t, i) {
_i_("619:c12469e5");
var n = e("booking-store"), r = new n(), a = B.env && B.env.b_action || "company", s = a + "Action", o = B.env && B.env[s] && B.env[s].globals, _ = e("ga-tracker");
r.initFromVar(o), r.set("b_companyname", B.env.b_companyname), r.set("b_nonsecure_hostname", B.env.b_nonsecure_hostname), r.set("b_secure_hostname", B.env.b_secure_hostname), r.set("b_domain_for_book", B.env.domain_for_book), r.set("b_query_params_with_lang", B.env.b_query_params_with_lang), r.set("b_selected_currency", B.env.b_selected_currency), r.set("fe_bbt_ga_category", _.BBToolTracker), r.set("b_reg_user_company_name", B.env.b_reg_user_company && B.env.b_reg_user_company.b_name), B.env.companyAction && r.set("b_feature_permissions", B.env.companyAction.b_feature_permissions), B.env.b_connected_user_accounts && r.set("b_connected_user_accounts", B.env.b_connected_user_accounts), i.exports = r, _r_();
}), B.define("myreports/reports-model", function(e, t, i) {
_i_("619:bc799aae");
var n = e("event-emitter"), r = {};
n.extend(r), i.exports = $.extend(r, {
init:function() {
_i_("619:64f33001");
var e = this._parseData(this._getData());
return this._parsedData = e.data, this._ticks = e.ticks.map(function(e) {
return _i_("619:b6935a2e"), _r_([ e[0], this._parseColumn(e[1]) ]);
}.bind(this)), _r_(this);
},
_parseData:function(e) {
_i_("619:ebe19a7e");
for (var t = {
ticks:[],
data:[]
}, i = 0; i < e.length; ++i) t.ticks.push([ i, e[i][this._column_field] ]), t.data.push({
column:i,
value:e[i][this._value_field]
});
return _r_(t);
},
formatValue:function(e) {
return _i_("619:2f3629be"), _r_(e);
},
isRealData:function() {
return _i_("619:94b50b87"), _r_(this._data && this._data.length >= 1);
},
_parseColumn:function(e) {
return _i_("619:2f3629be1"), _r_(e);
},
_getData:function() {
return _i_("619:7d7d5348"), _r_(this.isRealData() ? this._data :this.getStubData());
},
getPlotDataSet:function(e) {
_i_("619:35d064cb");
var t = this._parsedData.map(function(t) {
return _i_("619:a091029d"), _r_(e ? [ t.value, t.column ] :[ t.column, t.value ]);
}), i = {
data:t
};
return _r_([ i ]);
},
getPlotTicks:function() {
return _i_("619:57d46cf8"), _r_(this._ticks);
},
getStubData:function() {
return _i_("619:949c4ff3"), _r_([]);
}
}), _r_();
}), B.define("myreports/reports-model-multiple", function(e, t, i) {
_i_("619:8d6d1107");
var n = e("myreports/reports-model"), r = {};
i.exports = $.extend(r, n, {
isRealData:function() {
return _i_("619:44a86277"), _r_(this._data && this._data[0] && this._data[0].length >= 1);
},
_parseData:function(e) {
if (_i_("619:bb002394"), !this._validBlocks(e)) throw new Error("multiple arrays of data for the chart are expected to be defined and to be of the same size");
for (var t, i = {
ticks:[],
data:e.map(function() {
return _i_("619:75f0f74e"), _r_([]);
})
}, n = e[0], r = 0; r < n.length; ++r) {
t = n[r][this._column_field], i.ticks.push([ r, t ]);
for (var a = 0; a < e.length; ++a) {
if (e[a][r][this._column_field] !== t) throw new Error("series are not from equal ranges");
i.data[a].push({
column:r,
value:e[a][r][this._value_field]
});
}
}
return _r_(i);
},
_validBlocks:function(e) {
_i_("619:d1b44605");
var t = e[0] && e[0].length, i = e.filter(function(e) {
return _i_("619:789313fc"), _r_(!e || e.length !== t);
});
return _r_(e.length > 0 && 0 === i.length);
},
getPlotDataSet:function(e) {
return _i_("619:01b4de4c"), _r_(this._parsedData.map(function(t) {
_i_("619:0f0d654a");
var i = t.map(function(t) {
return _i_("619:54676901"), _r_(e ? [ t.value, t.column ] :[ t.column, t.value ]);
});
return _r_({
data:i
});
}));
}
}), _r_();
}), B.define("myreports/reports-model-by-month-past-future", function(e, t, i) {
_i_("619:f639b5bb");
var n = e("myreports/reports-model-multiple"), r = {};
i.exports = $.extend(r, n, {
_data:[],
_currency:B.env.b_report_currency || "",
_column_field:"b_yyyy_mm",
_value_field:"b_month_spend",
_format:B.env.b_report_months_format,
_months:B.env.b_report_months || [],
_parseColumn:function(e) {
return _i_("619:28c10add"), _r_(this._format ? this.formatMonth(e) :B.formatter.date(e + "-01", "short_month_with_year"));
},
formatValue:function(e) {
return _i_("619:d98b20bc"), _r_(B.utils.accounting.formatMoney(e, this._currency));
},
formatMonth:function(e) {
_i_("619:e4644eff");
var t = e.split(/-/), i = {
short_month_name:this._months[parseInt(t[1], 10)],
full_year:t[0]
};
return _r_(this._format.replace(/{([^}]+)}/g, function(e, t) {
return _i_("619:37938850"), _r_(i[t]);
}));
},
getStubData:function() {
_i_("619:0f6cbb58");
function e(e) {
return _i_("619:68beec61"), _r_([ e.getFullYear(), e.getMonth() + 1 ].join("-"));
}
var t, i = new Date(), n = e(i), r = !0;
i.setMonth(i.getMonth() - 6);
for (var a = 12, s = []; a-- > 0; ) t = e(i), t === n && (r = !1), s.push({
b_yyyy_mm:t,
type:r ? "past" :t === n ? "today" :"future"
}), i.setMonth(i.getMonth() + 1);
return _r_([ s.map(function(e) {
return _i_("619:8fe84336"), _r_({
b_yyyy_mm:e.b_yyyy_mm,
b_month_spend:e.type.match(/past|today/) ? 350 * Math.random() :0
});
}), s.map(function(e) {
return _i_("619:3588c14e"), _r_({
b_yyyy_mm:e.b_yyyy_mm,
b_month_spend:e.type.match(/future|today/) ? 350 * Math.random() :0
});
}) ]);
}
}), _r_();
}), B.define("myreports/reports-model-by-month-past-future-leisure", function(e, t, i) {
_i_("619:eaff7f1a");
var n = e("myreports/reports-model-by-month-past-future"), r = {};
i.exports = $.extend(r, n, {
_data:[ B.env.b_report_by_month_past_leisure, B.env.b_report_by_month_current_and_future_leisure ]
}), _r_();
}), B.define("myreports/reports-model-by-month-past-future-business", function(e, t, i) {
_i_("619:30f17124");
var n = e("myreports/reports-model-by-month-past-future"), r = {};
i.exports = $.extend(r, n, {
_data:[ B.env.b_report_by_month_past_business, B.env.b_report_by_month_current_and_future_business ]
}), _r_();
}), B.define("myreports/reports-model-by-month-past-future-unknown", function(e, t, i) {
_i_("619:5da139c2");
var n = e("myreports/reports-model-by-month-past-future"), r = {};
i.exports = $.extend(r, n, {
_data:[ B.env.b_report_by_month_past_unknown, B.env.b_report_by_month_current_and_future_unknown ]
}), _r_();
}), booking.components.define("myreservations-print", function(e, t) {
"use strict";
_i_("619:95b8053d");
var i = this, n = null, r = !1;
i.$context = null, i.init = function(e) {
if (_i_("619:35476874"), !e || !e.length) return _r_();
i.$context = e, a(), i.$context.bind("click", i.print), r = e.data("print-url"), _r_();
}, i.render = function() {}, i.print = function(a) {
_i_("619:ce9831ac"), a && a.preventDefault(), i.$context.addClass("is-loading"), e.eventEmitter.trigger("confirmation.print"), e.components.require("legacy-emitter").trigger("confirmation.print"), setTimeout(function() {
_i_("619:3fb8a77b"), r ? (e.components.require("legacy-emitter").trigger("myreservations-print.print"), null === n ? (n = document.createElement("iframe"), t(n).attr("style", "position: absolute; top: -1000px; left: -1000px; width: 0; height: 0"), t(n).bind("load", function() {
_i_("619:7f6fdc08"), this.contentWindow.focus();
try {
this.contentWindow.print();
} catch (e) {
this.contentWindow.postMessage({
print:!0
}, "*");
}
i.$context.removeClass("is-loading"), _r_();
}), n.src = i.$context.data("print-url"), document.body.appendChild(n)) :n.src = i.$context.data("print-url")) :"complete" === document.readyState ? (i.$context.removeClass("is-loading"), window.print()) :setTimeout(function() {
_i_("619:c071a9a1"), i.print(a), _r_();
}, 1e3), _r_();
}, 0), _r_();
};
function a() {
if (_i_("619:0e6c0408"), "function" == typeof window.matchMedia) {
var e = window.matchMedia("print");
e && e.addListener(function(e) {
_i_("619:69d5c426"), e.matches && s(), _r_();
});
}
var t = window.onbeforeprint;
window.onbeforeprint = function() {
_i_("619:3fb77816"), t && t(), s(), _r_();
}, _r_();
}
function s() {
_i_("619:f1090a7d"), e.env.bhep_conf_is_nonref && (e.et.stage("NAREDUbdBYWbMDWLBLcMeZCALHXWXe", 3), e.env.b_is_vacation_rental ? e.et.stage("NAREDUbdBYWbMDWLBLcMeZCALHXWXe", 4) :e.et.stage("NAREDUbdBYWbMDWLBLcMeZCALHXWXe", 5)), _r_();
}
_r_();
}), function() {
_i_("619:d2d3d11d");
var e = "g-hidden";
booking.components.define("myreservations-resend-confirmation", function(t, i) {
_i_("619:52352ed0");
var n = this, r = i(window);
n.init = function(e) {
_i_("619:361dd66a"), n.overlay = t.require("overlay"), n.$context = e, _r_();
}, n.show = function() {
_i_("619:657db2dd");
var e = n.$context, t = n.overlay;
t.getElement({
hideElements:[ e.find(".js-close")[0] ]
}).html(""), n.overlay.on("hide", s), n.overlay.on("show", a), t.show(), _r_();
};
function a() {
_i_("619:04548489");
var t = n.$context;
t.delegate(".js-close", "click", _).removeClass(e), t.find(".resend-conf__step").addClass(e).filter(":first-child").removeClass(e), o(), _r_();
}
function s() {
_i_("619:4b985cd4");
var t = n.$context;
t.undelegate(".js-close", "click", _).addClass(e), n.overlay.off("hide", s), n.overlay.off("show", a), _r_();
}
function o() {
_i_("619:3e2b59e2");
var e = n.$context.filter(":visible"), t = (r.width() - e.outerWidth(!0)) / 2 + r.scrollLeft(), i = (r.height() - e.outerHeight(!0)) / 2 + r.scrollTop();
e.css({
top:Math.max(0, i) + "px",
left:Math.max(0, t) + "px"
}), _r_();
}
function _(e) {
_i_("619:d52e7a2b"), n.overlay.hide(), e.preventDefault(), _r_();
}
_r_();
}), _r_();
}(), booking.components.define("myreservations-trip-view-toggle", function(e, t) {
_i_("619:782405b1");
var i, n, r, a, s, o = {
TOGGLE:{
ACTIVE:"data-toggle-active"
},
VIEW:{
ACTIVE:"data-view-active"
}
}, _ = {
TOGGLE:{
LIST:"[data-toggle-list]",
TRIP:"[data-toggle-trip]",
ACTIVE:"[" + o.TOGGLE.ACTIVE + "]"
},
VIEW:{
LIST:"[data-list-view]",
TRIP:"[data-trip-view]",
ACTIVE:"[" + o.VIEW.ACTIVE + "]"
}
}, c = {
TOGGLE:{
ACTIVE:"mb-mytrip__toggle--on",
INACTIVE:"mb-mytrip__toggle--off"
},
VIEW:{
ACTIVE:"mb-mytrip__view--on",
INACTIVE:"mb-mytrip__view--off"
}
};
function l() {
if (_i_("619:38b7c486"), n.is(_.VIEW.ACTIVE)) return _r_();
r.removeClass(c.TOGGLE.ACTIVE).addClass(c.TOGGLE.INACTIVE).removeAttr(o.TOGGLE.ACTIVE), i.removeClass(c.TOGGLE.INACTIVE).addClass(c.TOGGLE.ACTIVE).attr(o.TOGGLE.ACTIVE, ""), a.removeClass(c.VIEW.ACTIVE).addClass(c.VIEW.INACTIVE).removeAttr(o.VIEW.ACTIVE), n.removeClass(c.VIEW.INACTIVE).addClass(c.VIEW.ACTIVE).attr(o.VIEW.ACTIVE, ""), _r_();
}
function d() {
if (_i_("619:8923eaa9"), a.is(_.VIEW.ACTIVE)) return _r_();
i.removeClass(c.TOGGLE.ACTIVE).addClass(c.TOGGLE.INACTIVE).removeAttr(o.TOGGLE.ACTIVE), r.removeClass(c.TOGGLE.INACTIVE).addClass(c.TOGGLE.ACTIVE).attr(o.TOGGLE.ACTIVE, ""), n.removeClass(c.VIEW.ACTIVE).addClass(c.VIEW.INACTIVE).removeAttr(o.VIEW.ACTIVE), a.removeClass(c.VIEW.INACTIVE).addClass(c.VIEW.ACTIVE).attr(o.VIEW.ACTIVE, ""), t(_.VIEW.TRIP + " .js-booking_block").css({
display:""
}), _r_();
}
this.init = function(e) {
_i_("619:b74738f0");
var o = [ _.TOGGLE.LIST, _.TOGGLE.TRIP ];
if (s = e, !s.has(o.join(" + ")).length) throw new Error("Context does not have the required children");
i = s.find(_.TOGGLE.LIST), n = t(_.VIEW.LIST), r = s.find(_.TOGGLE.TRIP), a = t(_.VIEW.TRIP), l(), i.bind("click", l), r.bind("click", d), _r_();
}, _r_();
}), booking.components.define("myreservations-toggle", function(e, t) {
_i_("619:50f4c3c2");
var i = this;
i.$context = null, i.init = function(e) {
_i_("619:0ee3c098"), i.$context = e, i.$context.find("[data-toggle], [data-toggle-class]").bind("click", n), _r_();
}, i.toggle = function() {
_i_("619:3ab06d26"), i.$context.find("[data-toggle]").trigger("click"), _r_();
};
function n(e) {
_i_("619:30b09ee4");
var n = t(this).data(), r = n["toggle-class"] || n.toggleClass;
e && e.preventDefault(), n.toggle && i.$context.find(n.toggle).toggle(), r && i.$context.toggleClass(r), _r_();
}
_r_();
}), booking.components.define("myreservations-form", function(e, t) {
_i_("619:abd02e99");
var i, n = this, r = null;
e.components.extend(this, "legacy-emitter"), this.options = {}, this.get = function(e) {
return _i_("619:6efffd84"), _r_(this.options[e]);
}, this.set = function(e, t) {
return _i_("619:70d1d41d"), this.options[e] = t, _r_(this);
}, n.init = function(e) {
if (_i_("619:38158643"), !e.is("form")) throw Error("myreservations-form is not a <form /> element");
r = e, i = r.component("form-validation"), n.$messageHolder = r.find("[data-form-message-success], [data-form-message-error]"), r.bind("submit", t.proxy(n.submit, n)), r.bind("reset", t.proxy(n.reset, n)), r.data("submit-on-change") && r.bind("change", s(function() {
_i_("619:444c3525"), r.trigger("submit"), _r_();
}, 200)), _r_();
}, n.submit = function(e) {
_i_("619:e0d66f2d");
var i = r;
if (i.removeClass("-submit-success -submit-error"), !n.validate()) return n.trigger("form-validation-error"), _r_(!1);
n.trigger("form-submit"), i.addClass("-is-loading"), t.ajax({
type:i.attr("method"),
url:i.attr("action"),
data:i.serialize(),
success:function(e) {
_i_("619:7543ecac"), e && e.success ? (i.removeClass("-is-loading -submit-error").addClass("-submit-success"), n.$messageHolder.text(n.$messageHolder.data("form-message-success")), n.trigger("form-submit-success", e)) :a(e), _r_();
},
error:a
}), e && e.preventDefault(), _r_();
}, n.reset = function() {
_i_("619:186cb128"), n.trigger("form-reset"), i.reset(), r.find("[data-validation]").removeClass("-invalid"), r.removeClass("-is-loading -submit-success -submit-error"), _r_();
}, n.validate = function() {
return _i_("619:798e18e6"), _r_(i.validate());
}, n.getFieldByName = function(e) {
return _i_("619:f7b06762"), _r_(r.find('[name="' + e + '"]'));
};
function a(e) {
_i_("619:1a8041a9");
var t = r, i = e && e.code ? "-" + e.code :"";
t.removeClass("-is-loading -submit-success").addClass("-submit-error"), n.$messageHolder.text(n.$messageHolder.data("form-message-error" + i)), n.trigger("form-submit-error", e), _r_();
}
function s(e, t) {
_i_("619:4c7d72df");
var i = null;
return _r_(function() {
_i_("619:c7c444b2"), window.clearTimeout(i), i = window.setTimeout(function(t) {
_i_("619:dabf9348"), e.apply(null, t), _r_();
}, i, arguments), _r_();
});
}
_r_();
}), booking.components.define("myreservations-select", function(e, t) {
"use strict";
_i_("619:bf16cdfd");
var i, n, r, a, s, o, _, c = this, l = !1, d = "g-hidden", u = !1;
e.components.extend(this, "legacy-emitter"), c.init = function(a) {
_i_("619:46695652"), i = a, r = i.find("[data-options]"), n = i.find("[data-select-selection]"), o = e.require("click-out"), _ = t.proxy(this, "clickedOut"), i.append(h(i.data("select-name"))), i.bind("click", t.proxy(this, "toggle")), r.delegate("li", "click", function() {
_i_("619:f1a01d16"), f(this), _r_();
}), f(r.find('[data-option-selected="true"]')[0], !0), _r_();
}, c.show = function(e) {
if (_i_("619:bb9e0715"), e && e.preventDefault(), l) return _r_();
l = !0, r.removeClass(d), i.addClass("-visible"), u = o.addMonitor(r, _), this.trigger("show"), _r_();
}, c.hide = function(e) {
if (_i_("619:2e9af80a"), e && e.preventDefault(), !l) return _r_();
l = !1, r.addClass(d), i.removeClass("-visible"), u && o.removeMonitor(u), this.trigger("hide"), _r_();
}, c.toggle = function(e) {
_i_("619:47cae18d"), l ? this.hide(e) :this.show(e), _r_();
}, c.clickedOut = function() {
_i_("619:c7f9499f"), l && this.hide(), _r_();
}, c.getValue = function() {
return _i_("619:4ef4713f"), _r_(s.val());
}, c.setSelected = function(e) {
_i_("619:ae631f98"), f(r.find('[data-option-value="' + e + '"]')[0]), _r_();
};
function h(e) {
return _i_("619:a5f5423a"), s = t("<input>").attr({
type:"hidden",
name:e
}), _r_(s);
}
function f(e, i) {
_i_("619:6e984061");
var r = t(e), o = r.data("option-value"), _ = s.val();
s.val(o), r.addClass("-selected").data("option-selected", !0), n.empty().append(r.html()), a && a.removeClass("-selected").data("option-selected", !1), a = r, o === _ || i || (s.trigger("change"), c.trigger("select", o, _)), _r_();
}
_r_();
}), B.define("object-assign", function(e, t, i) {
_i_("619:a034a556"), i.exports = Object.assign || function(e, t) {
if (_i_("619:9f547933"), null === e || void 0 === e) throw new TypeError("Cannot convert undefind or null to object");
for (var e = Object(e), i = 1; i < arguments.length; i++) {
var n = Object(arguments[i]);
for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
}
return _r_(e);
}, _r_();
}), B.define("object-create", function(e, t, i) {
_i_("619:49a3149d"), i.exports = Object.create || function(e) {
_i_("619:ad6fa236");
var t = function() {};
if (arguments.length > 1) throw Error("Second argument not supported");
if ("object" != typeof e) throw TypeError("Argument must be an object");
return t.prototype = e, _r_(new t());
}, _r_();
}), B.define("event-map", function(e, t, i) {
_i_("619:89a520be");
var n = e("jquery");
i.exports = function(e, t, i) {
_i_("619:b05ebb5f");
var e = n(e);
for (var r in t) if (t.hasOwnProperty(r)) {
var a = r.split(/\s+/), s = a.shift(), o = a.join(), _ = i ? t[r].bind(i) :t[r];
"function" == typeof n.fn.on ? e.is(n(o)) ? e.on(s, _) :e.on(s, o, _) :e.delegate(o, s, _);
}
_r_();
}, _r_();
}), B.define("redux", function(e, t, i) {
_i_("619:f7758ddb"), function(e, n) {
_i_("619:cdacee32"), "object" == typeof t && "object" == typeof i ? i.exports = n() :"function" == typeof define && define.amd ? define([], n) :"object" == typeof t ? t.Redux = n() :e.Redux = n(), _r_();
}(this, function() {
return _i_("619:98a9b0ae"), _r_(function(e) {
_i_("619:efd781f9");
var t = {};
function i(n) {
if (_i_("619:df0bf25d"), t[n]) return _r_(t[n].exports);
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
_i_("619:b154c0e9"), t.__esModule = !0, t.compose = t.applyMiddleware = t.bindActionCreators = t.combineReducers = t.createStore = void 0;
var n = i(2), r = f(n), a = i(7), s = f(a), o = i(6), _ = f(o), c = i(5), l = f(c), d = i(1), u = f(d), h = i(3);
f(h);
function f(e) {
return _i_("619:5b60c357"), _r_(e && e.__esModule ? e :{
"default":e
});
}
t.createStore = r["default"], t.combineReducers = s["default"], t.bindActionCreators = _["default"], t.applyMiddleware = l["default"], t.compose = u["default"], _r_();
}, function(e, t) {
"use strict";
_i_("619:4a4789e7"), t.__esModule = !0, t["default"] = i;
function i() {
_i_("619:0cc6f208");
for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
if (0 === t.length) return _r_(function(e) {
return _i_("619:0e026f32"), _r_(e);
});
var n = function() {
_i_("619:d03ba723");
var e = t[t.length - 1], i = t.slice(0, -1);
return _r_({
v:function() {
return _i_("619:78214a93"), _r_(i.reduceRight(function(e, t) {
return _i_("619:43a87ba7"), _r_(t(e));
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
_i_("619:2b402008"), t.__esModule = !0, t.ActionTypes = void 0, t["default"] = c;
var n = i(4), r = o(n), a = i(11), s = o(a);
function o(e) {
return _i_("619:5b60c3571"), _r_(e && e.__esModule ? e :{
"default":e
});
}
var _ = t.ActionTypes = {
INIT:"@@redux/INIT"
};
function c(e, t, i) {
_i_("619:e847f5c6");
var n;
if ("function" == typeof t && "undefined" == typeof i && (i = t, t = void 0), "undefined" != typeof i) {
if ("function" != typeof i) throw new Error("Expected the enhancer to be a function.");
return _r_(i(c)(e, t));
}
if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
var a = e, o = t, l = [], d = l, u = !1;
function h() {
_i_("619:47a919c7"), d === l && (d = l.slice()), _r_();
}
function f() {
return _i_("619:401ca8b9"), _r_(o);
}
function p(e) {
if (_i_("619:948954ff"), "function" != typeof e) throw new Error("Expected listener to be a function.");
var t = !0;
return h(), d.push(e), _r_(function() {
if (_i_("619:2b1c1818"), !t) return _r_();
t = !1, h();
var i = d.indexOf(e);
d.splice(i, 1), _r_();
});
}
function m(e) {
if (_i_("619:ebb31983"), !(0, r["default"])(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
if ("undefined" == typeof e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
if (u) throw new Error("Reducers may not dispatch actions.");
try {
u = !0, o = a(o, e);
} finally {
u = !1;
}
for (var t = l = d, i = 0; i < t.length; i++) t[i]();
return _r_(e);
}
function b(e) {
if (_i_("619:45410f1f"), "function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
a = e, m({
type:_.INIT
}), _r_();
}
function g() {
_i_("619:1082d68b");
var e, t = p;
return _r_((e = {
subscribe:function(e) {
if (_i_("619:c6b06053"), "object" != typeof e) throw new TypeError("Expected the observer to be an object.");
function i() {
_i_("619:86256af8"), e.next && e.next(f()), _r_();
}
i();
var n = t(i);
return _r_({
unsubscribe:n
});
}
}, e[s["default"]] = function() {
return _i_("619:08888aa1"), _r_(this);
}, e));
}
return m({
type:_.INIT
}), _r_((n = {
dispatch:m,
subscribe:p,
getState:f,
replaceReducer:b
}, n[s["default"]] = g, n));
}
_r_();
}, function(e, t) {
"use strict";
_i_("619:28d57c08"), t.__esModule = !0, t["default"] = i;
function i(e) {
_i_("619:f2a02361"), "undefined" != typeof console && "function" == typeof console.error && console.error(e);
try {
throw new Error(e);
} catch (t) {}
_r_();
}
_r_();
}, function(e, t, i) {
_i_("619:6b29ad30");
var n = i(8), r = i(9), a = i(10), s = "[object Object]", o = Object.prototype, _ = Function.prototype.toString, c = o.hasOwnProperty, l = _.call(Object), d = o.toString;
function u(e) {
if (_i_("619:446a64bb"), !a(e) || d.call(e) != s || r(e)) return _r_(!1);
var t = n(e);
if (null === t) return _r_(!0);
var i = c.call(t, "constructor") && t.constructor;
return _r_("function" == typeof i && i instanceof i && _.call(i) == l);
}
e.exports = u, _r_();
}, function(e, t, i) {
"use strict";
_i_("619:d98172e0"), t.__esModule = !0;
var n = Object.assign || function(e) {
_i_("619:e889572d");
for (var t = 1; t < arguments.length; t++) {
var i = arguments[t];
for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
}
return _r_(e);
};
t["default"] = o;
var r = i(1), a = s(r);
function s(e) {
return _i_("619:5b60c3572"), _r_(e && e.__esModule ? e :{
"default":e
});
}
function o() {
_i_("619:6f3d7eac");
for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
return _r_(function(e) {
return _i_("619:06055349"), _r_(function(i, r, s) {
_i_("619:e561fb03");
var o = e(i, r, s), _ = o.dispatch, c = [], l = {
getState:o.getState,
dispatch:function(e) {
return _i_("619:0fe5411b"), _r_(_(e));
}
};
return c = t.map(function(e) {
return _i_("619:0e53476f"), _r_(e(l));
}), _ = a["default"].apply(void 0, c)(o.dispatch), _r_(n({}, o, {
dispatch:_
}));
});
});
}
_r_();
}, function(e, t) {
"use strict";
_i_("619:9b51b09e"), t.__esModule = !0, t["default"] = n;
function i(e, t) {
return _i_("619:1f384beb"), _r_(function() {
return _i_("619:aa71ca8f"), _r_(t(e.apply(void 0, arguments)));
});
}
function n(e, t) {
if (_i_("619:91a20bc4"), "function" == typeof e) return _r_(i(e, t));
if ("object" != typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" :typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
for (var n = Object.keys(e), r = {}, a = 0; a < n.length; a++) {
var s = n[a], o = e[s];
"function" == typeof o && (r[s] = i(o, t));
}
return _r_(r);
}
_r_();
}, function(e, t, i) {
"use strict";
_i_("619:85f873a8"), t.__esModule = !0, t["default"] = u;
var n = i(2), r = i(4), a = _(r), s = i(3), o = _(s);
function _(e) {
return _i_("619:5b60c3573"), _r_(e && e.__esModule ? e :{
"default":e
});
}
function c(e, t) {
_i_("619:cff602e1");
var i = t && t.type, n = i && '"' + i.toString() + '"' || "an action";
return _r_("Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.');
}
function l(e, t, i) {
_i_("619:f2a73eb0");
var r = Object.keys(t), s = i && i.type === n.ActionTypes.INIT ? "initialState argument passed to createStore" :"previous state received by the reducer";
if (0 === r.length) return _r_("Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.");
if (!(0, a["default"])(e)) return _r_("The " + s + ' has unexpected type of "' + {}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + r.join('", "') + '"'));
var o = Object.keys(e).filter(function(e) {
return _i_("619:34903b2b"), _r_(!t.hasOwnProperty(e));
});
if (o.length > 0) return _r_("Unexpected " + (o.length > 1 ? "keys" :"key") + " " + ('"' + o.join('", "') + '" found in ' + s + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + r.join('", "') + '". Unexpected keys will be ignored.'));
_r_();
}
function d(e) {
_i_("619:eb4939eb"), Object.keys(e).forEach(function(t) {
_i_("619:3d5a65bf");
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
_i_("619:e16c4d38");
for (var t = Object.keys(e), i = {}, n = 0; n < t.length; n++) {
var r = t[n];
"function" == typeof e[r] && (i[r] = e[r]);
}
var a, s = Object.keys(i);
try {
d(i);
} catch (_) {
a = _;
}
return _r_(function() {
_i_("619:3a86098d");
var e = arguments.length <= 0 || void 0 === arguments[0] ? {} :arguments[0], t = arguments[1];
if (a) throw a;
var n = l(e, i, t);
n && (0, o["default"])(n);
for (var r = !1, _ = {}, d = 0; d < s.length; d++) {
var u = s[d], h = i[u], f = e[u], p = h(f, t);
if ("undefined" == typeof p) {
var m = c(u, t);
throw new Error(m);
}
_[u] = p, r = r || p !== f;
}
return _r_(r ? _ :e);
});
}
_r_();
}, function(e, t) {
_i_("619:0efa003b");
var i = Object.getPrototypeOf;
function n(e) {
return _i_("619:62c74501"), _r_(i(Object(e)));
}
e.exports = n, _r_();
}, function(e, t) {
_i_("619:5ad08b03");
function i(e) {
_i_("619:57204afd");
var t = !1;
if (null != e && "function" != typeof e.toString) try {
t = !!(e + "");
} catch (i) {}
return _r_(t);
}
e.exports = i, _r_();
}, function(e, t) {
_i_("619:2dd6413a");
function i(e) {
return _i_("619:44c94211"), _r_(!!e && "object" == typeof e);
}
e.exports = i, _r_();
}, function(e, t, i) {
_i_("619:340049b5"), function(t) {
"use strict";
_i_("619:54146ae9"), e.exports = i(12)(t || window || this), _r_();
}.call(t, function() {
return _i_("619:693c131b"), _r_(this);
}()), _r_();
}, function(e, t) {
"use strict";
_i_("619:d8389621"), e.exports = function(e) {
_i_("619:16dfda09");
var t, i = e.Symbol;
return "function" == typeof i ? i.observable ? t = i.observable :(t = "function" == typeof i["for"] ? i["for"]("observable") :i("observable"), i.observable = t) :t = "@@observable", _r_(t);
}, _r_();
} ]));
}), _r_();
}), B.define("morphdom", function(e, t, i) {
_i_("619:40e7d1ea"), function(e) {
if (_i_("619:ab944764"), "object" == typeof t && "undefined" != typeof i) i.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
var n;
n = "undefined" != typeof window ? window :"undefined" != typeof global ? global :"undefined" != typeof self ? self :this, n.morphdom = e();
}
_r_();
}(function() {
_i_("619:97955ce2");
var e, t;
e = {
exports:t = {}
};
var i, n, r = "undefined" != typeof document ? document.body || document.createElement("div") :{}, a = "http://www.w3.org/1999/xhtml", s = 1, o = 3, _ = 8;
n = r.hasAttributeNS ? function(e, t, i) {
return _i_("619:eade7059"), _r_(e.hasAttributeNS(t, i));
} :r.hasAttribute ? function(e, t, i) {
return _i_("619:48b626c7"), _r_(e.hasAttribute(i));
} :function(e, t, i) {
return _i_("619:b1b897cf"), _r_(!!e.getAttributeNode(i));
};
function c(e) {
_i_("619:ace7a10f");
for (var t in e) if (e.hasOwnProperty(t)) return _r_(!1);
return _r_(!0);
}
function l(e) {
_i_("619:6e64c2c2"), !i && document.createRange && (i = document.createRange(), i.selectNode(document.body));
var t;
return i && i.createContextualFragment ? t = i.createContextualFragment(e) :(t = document.createElement("body"), t.innerHTML = e), _r_(t.childNodes[0]);
}
var d = {
OPTION:function(e, t) {
_i_("619:766a26cf"), e.selected = t.selected, e.selected ? e.setAttribute("selected", "") :e.removeAttribute("selected", ""), _r_();
},
INPUT:function(e, t) {
_i_("619:8ce9f1cf"), e.checked = t.checked, e.checked ? e.setAttribute("checked", "") :e.removeAttribute("checked"), e.value !== t.value && (e.value = t.value), n(t, null, "value") || e.removeAttribute("value"), e.disabled = t.disabled, e.disabled ? e.setAttribute("disabled", "") :e.removeAttribute("disabled"), _r_();
},
TEXTAREA:function(e, t) {
_i_("619:fafa0a75");
var i = t.value;
e.value !== i && (e.value = i), e.firstChild && e.firstChild.nodeValue !== i && (e.firstChild.nodeValue = i), _r_();
}
};
function u() {}
var h = function(e, t) {
return _i_("619:ee20f945"), _r_(e.nodeName === t.nodeName && e.namespaceURI === t.namespaceURI);
};
function f(e, t) {
return _i_("619:b9ab9e43"), _r_(t && t !== a ? document.createElementNS(t, e) :document.createElement(e));
}
function p(e, t) {
_i_("619:deb7b359");
var i, r, a, s, o, _, c = t.attributes;
for (i = c.length - 1; i >= 0; i--) r = c[i], a = r.name, o = r.value, s = r.namespaceURI, s ? (a = r.localName || a, _ = e.getAttributeNS(s, a)) :_ = e.getAttribute(a), _ !== o && (s ? e.setAttributeNS(s, a, o) :e.setAttribute(a, o));
for (c = e.attributes, i = c.length - 1; i >= 0; i--) r = c[i], r.specified !== !1 && (a = r.name, s = r.namespaceURI, n(t, s, s ? a = r.localName || a :a) || e.removeAttributeNode(r));
_r_();
}
function m(e, t) {
_i_("619:6593b9e4");
for (var i = e.firstChild; i; ) {
var n = i.nextSibling;
t.appendChild(i), i = n;
}
return _r_(t);
}
function b(e) {
return _i_("619:dc0a4ac8"), _r_(e.id);
}
function g(e, t, i) {
if (_i_("619:af448acf"), i || (i = {}), "string" == typeof t) if ("#document" === e.nodeName || "HTML" === e.nodeName) {
var n = t;
t = document.createElement("html"), t.innerHTML = n;
} else t = l(t);
var r = {}, a = {}, g = i.getNodeKey || b, v = i.onBeforeNodeAdded || u, y = i.onNodeAdded || u, k = i.onBeforeElUpdated || u, w = i.onElUpdated || u, $ = i.onBeforeNodeDiscarded || u, x = i.onNodeDiscarded || u, C = i.onBeforeElChildrenUpdated || u, B = i.childrenOnly === !0, D = [];
function E(e, t) {
_i_("619:17cb2e51");
var i = g(e);
if (i ? r[i] = e :t || x(e), e.nodeType === s) for (var n = e.firstChild; n; ) E(n, t || i), n = n.nextSibling;
_r_();
}
function T(e) {
if (_i_("619:5e13d614"), e.nodeType === s) for (var t = e.firstChild; t; ) g(t) || (x(t), T(t)), t = t.nextSibling;
_r_();
}
function S(e, t, i) {
if (_i_("619:f34545d8"), $(e) === !1) return _r_();
t.removeChild(e), i ? g(e) || (x(e), T(e)) :E(e), _r_();
}
function M(e, t, i, n) {
_i_("619:cb66c668");
var c = g(t);
if (c && delete r[c], !n) {
if (k(e, t) === !1) return _r_();
if (p(e, t), w(e), C(e, t) === !1) return _r_();
}
if ("TEXTAREA" !== e.nodeName) {
var l, u, f, m, b, $ = t.firstChild, x = e.firstChild;
e:for (;$; ) {
for (f = $.nextSibling, l = g($); x; ) {
var B = g(x);
if (u = x.nextSibling, !i && B && (b = a[B])) {
b.parentNode.replaceChild(x, b), M(x, b, i), x = u;
continue;
}
var E = x.nodeType;
if (E === $.nodeType) {
var T = !1;
if (E === s ? (h(x, $) && (B || l ? l === B && (T = !0) :T = !0), T && M(x, $, i)) :(E === o || E == _) && (T = !0, x.nodeValue = $.nodeValue), T) {
$ = f, x = u;
continue e;
}
}
S(x, e, i), x = u;
}
l && ((m = r[l]) ? (M(m, $, !0), $ = m) :a[l] = $), v($) !== !1 && (e.appendChild($), y($)), $.nodeType === s && (l || $.firstChild) && D.push($), $ = f, x = u;
}
for (;x; ) u = x.nextSibling, S(x, e, i), x = u;
}
var A = d[e.nodeName];
A && A(e, t), _r_();
}
var A = e, j = A.nodeType, O = t.nodeType;
if (!B) if (j === s) O === s ? h(e, t) || (x(e), A = m(e, f(t.nodeName, t.namespaceURI))) :A = t; else if (j === o || j === _) {
if (O === j) return A.nodeValue = t.nodeValue, _r_(A);
A = t;
}
if (A === t) x(e); else {
M(A, t, !1, B);
var I = function(e) {
_i_("619:07e8f038");
for (var t = e.firstChild; t; ) {
var i = t.nextSibling, n = g(t);
if (n) {
var a = r[n];
if (a && h(t, a)) {
if (t.parentNode.replaceChild(a, t), M(a, t, !0), t = i, c(r)) return _r_(!1);
continue;
}
}
t.nodeType === s && I(t), t = i;
}
_r_();
};
if (!c(r)) e:for (;D.length; ) {
var N = D;
D = [];
for (var P = 0; P < N.length; P++) if (I(N[P]) === !1) break e;
}
for (var F in r) if (r.hasOwnProperty(F)) {
var R = r[F];
x(R), T(R);
}
}
return !B && A !== e && e.parentNode && e.parentNode.replaceChild(A, e), _r_(A);
}
return e.exports = g, _r_(e.exports);
}), _r_();
}), B.define("report-error", function() {
_i_("619:c368b216");
function e(e) {
_i_("619:8ea0d968");
var t = {};
return _r_(e && "[object Function]" === t.toString.call(e));
}
function t(t, i) {
_i_("619:cc4fb343");
var n = B.env && B.env.b_dev_server, r = e(B.reportError) && B.reportError.bind(B), a = !r;
if (n || a) throw new Error(t);
r({
message:t
}, i), _r_();
}
return _r_(t);
}), B.define("component/reactive", function(e, t, i) {
_i_("619:f0a681e3");
var n, r = e("morphdom"), a = e("component"), s = e("component/loader"), o = e("event-map"), _ = e("report-error"), c = B.env && B.env.is_fe_reactive_components_shout_error_on_broken_template, l = 0, d = 50;
function u(e) {
_i_("619:d12e6d1c"), !n && document.createRange && (n = document.createRange(), n.selectNode(document.body));
var t;
return n && n.createContextualFragment ? t = n.createContextualFragment(e) :(t = document.createElement("body"), t.innerHTML = e), _r_(t.childNodes);
}
function h(e) {
return _i_("619:df331070"), _r_(1 === u(e).length);
}
function f(e, t, i) {
_i_("619:0a9481aa");
var n, r = e.el;
if (t !== i && t !== r && (n = s.getComponent(t)) && n.render !== a.prototype.render) return n.render(), _r_(!1);
_r_();
}
function p(e, t, i) {
_i_("619:32fd1ba0");
var n, r, a, s, o, _ = i ? i.attributes :t.attributes;
if (!_) return _r_();
for (n = 0, r = _.length; r > n; ++n) if (a = _[n], 0 === a.name.indexOf("on:")) {
o = a.name.split(":")[1], s = a.value, t.addEventListener(o, e[s], !1);
var c = t.getAttribute(a.name);
c !== a.value && t.removeEventListener(o, e[c], !1);
}
_r_();
}
function m(e) {
return _i_("619:c394c36c"), _r_(e.nodeType === Node.ELEMENT_NODE);
}
function b(e, t) {
_i_("619:5b730617");
var i = function() {
return _i_("619:8d3439e9"), _r_(NodeFilter.FILTER_ACCEPT);
};
if (!m(t)) return _r_();
i.acceptNode = i;
var n = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, i, !1);
for (p(e, t); n.nextNode(); ) n.currentNode && n.currentNode.hasAttribute("data-component") && n.nextSibling(), p(e, n.currentNode);
_r_();
}
function g(e, t) {
_i_("619:77cf2403");
var i = e.getAttribute(jQuery.expando);
return i && t.setAttribute(jQuery.expando, i), _r_(!0);
}
function v(e) {
_i_("619:a21190e8");
var t = {
onBeforeElUpdated:function(t, i) {
_i_("619:2dd8152c"), p(e, t, i), _r_();
},
onBeforeElChildrenUpdated:function(t, i) {
return _i_("619:aeac559b"), _r_(f(e, t, i));
},
onBeforeNodeDiscarded:null,
onNodeAdded:function(t) {
_i_("619:0f4c88b2"), b(e, t), _r_();
}
};
return "msie" === B.env.b_browser && B.env.b_browser_version <= 8 && (t.onBeforeElUpdated = g), _r_(t);
}
function y(e) {
if (_i_("619:074605b6"), e.indexOf(" ") >= 0) throw new Error('component/reactive: invalid "' + e + '". Component name must not contain spaces');
return _r_(e);
}
function k(e) {
_i_("619:187091b6");
for (var t in e) "function" == typeof e[t] && (e[t] = e[t].bind(e));
_r_();
}
i.exports = a.extend({
init:function() {
_i_("619:57373640"), this.name = y(this.el.getAttribute("data-component")), this.renderOptions = v(this), k(this), this.initialize && this.initialize(), b(this, this.el), this.render(), _r_();
},
getState:function() {
throw _i_("619:292ddbaf"), new Error("getState() not implemented on component " + this.name);
},
events:function(e) {
_i_("619:a6e7bc31"), o(this.el, e, this), _r_();
},
render:function() {
if (_i_("619:b6a14e5f"), !this.template) return _r_();
if (++l > d) throw new Error(this.name + ": max render depth reached (" + d + "). Stuck in a loop?");
var e = B.jstmpl(this.template).render(this.getState()).trim();
c && !h(e) && _("Broken. Reactive components requires having one root node element in rendered template. Add a root element to the template.", "component/reactive"), r(this.el, e, this.renderOptions), s.loadComponents(this.$el), l = 0, "function" == typeof this.afterRender && this.afterRender(), _r_();
}
}), _r_();
}), B.define("component/mysettings-account-removal", function(e, t, i) {
"use strict";
_i_("619:d2d0af15");
var n = e("component"), r = e("mysettings-model-emails"), a = e("mysettings-model-account-remove");
i.exports = n.extend({
init:function() {
_i_("619:63fc9dd5");
var e = this, t = r.getInstance(), i = a.getInstance();
this.$content = $("#account-removal"), this.$el.find("a").click(function() {
_i_("619:8443c9e2");
var t = e.$el.offset().top;
e.show(), e.scrollTop = $(window).scrollTop(), $("html, body").animate({
scrollTop:t - 50
}), _r_();
}), t.on("dismiss", this.hide.bind(this)), t.on("unsubscribe-all", this.hide.bind(this)), t.on("before-add", this.storeOffset.bind(this)), t.on("before-remove", this.storeOffset.bind(this)), t.on("add", this.restoreOffset.bind(this)), t.on("remove", this.restoreOffset.bind(this)), i.on("dismiss", this.hideAndScroll.bind(this)), _r_();
},
show:function() {
_i_("619:a2150194"), this.$el.addClass("g-hidden"), this.$content.removeClass("g-hidden"), _r_();
},
hide:function(e) {
if (_i_("619:4a599d2f"), e && e.data && "mysettings-model-emails" === e.data.model) return _r_();
this.$content.addClass("g-hidden"), this.$el.removeClass("g-hidden"), _r_();
},
hideAndScroll:function(e) {
_i_("619:7f081674"), this.hide(e), $("html, body").animate({
scrollTop:this.scrollTop
}), _r_();
},
storeOffset:function() {
_i_("619:acc74c08"), this.storedOffset = this.$content.offset().top, _r_();
},
restoreOffset:function() {
if (_i_("619:33d984da"), this.storedOffset) {
var e = this.storedOffset - this.$content.offset().top;
$("html, body").scrollTop($(window).scrollTop() - e);
}
_r_();
}
}), _r_();
}), B.define("component/mysettings-avatar", function(e, t, i) {
"use strict";
_i_("619:4ca55ada");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("619:342fcb2c"), this.$el.bind("click", function() {
_i_("619:53fde4c4"), B.lightbox.show(".user-avatar-upload", {
customWrapperClassName:"user-avatar-upload-modal"
}), _r_();
}), _r_();
}
}), _r_();
}), B.define("component/mysettings-email-verification", function(e, t, i) {
"use strict";
_i_("619:80aeafe4");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("619:28fe6f81");
var t, i = this.$el, n = i.data();
if (!n["email-address"] && !n.emailAddress) return _r_();
this.transport = e("mysettings/mysettings-transport"), this.emailAddress = n["email-address"] || n.emailAddress, t = i.is("a.js-settings-form__email-verification") ? i :i.find("a.js-settings-form__email-verification:eq(0)"), t.on("click", this.resendVerificationEmail.bind(this));
var r = i.find("a.js-settings-form__new-email-cancel:first");
r.click(this.cancelEmailChange.bind(this)), _r_();
},
resendVerificationEmail:function(t) {
_i_("619:65857688");
var i = {
email:this.emailAddress
}, n = B.promise();
t.preventDefault(), this.transport.resendVerificationEmail(i).then(r, a);
function r() {
_i_("619:0136f5d1"), e("static-notification").success(B.env.mysettingsAction.b_msg_email_sent), _r_();
}
function a(t) {
_i_("619:233a8d39"), e("static-notification").error(B.env.mysettingsAction.b_msg_email_not_sent), n.reject(t), _r_();
}
_r_();
},
cancelEmailChange:function(t) {
_i_("619:252b1db1");
var i = this.$el.data("oldEmailAddress"), n = {
b_email:i,
b_new_email:null
}, r = B.promise();
t.preventDefault();
var a = $(t.target).closest("[data-component=mysettings-form]").data("model"), s = e(a), o = s.getInstance();
o.save(n).then(_, c);
function _() {}
function c(t) {
_i_("619:5fdd8f37"), e("static-notification").error(B.env.mysettingsAction.b_msg_email_change_cancel_failed), r.reject(t), _r_();
}
_r_();
}
}), _r_();
}), B.define("component/mysettings-email-verified-notification", function(e, t, i) {
"use strict";
_i_("619:eec0cb8e");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("619:3423b204");
var t = this.$el.data();
if (!t.message) return _r_();
e("static-notification").success(t.message), _r_();
}
}), _r_();
}), B.define("component/mysettings-field", function(e, t, i) {
"use strict";
_i_("619:f3cd121d");
var n = e("component"), r = e("events");
i.exports = n.extend({
init:function() {
_i_("619:9d4f0059");
var t = this, i = e(this.$el.data("model") || "mysettings-model-simple");
this.mysettingsModel = i.getInstance(), this.$el.find("input, textarea, select").each(function(e, i) {
_i_("619:a7fb0340");
var n = $(i);
void 0 === n.data("mysettings-ignore") && n.on("change", function(e) {
_i_("619:4074e43f");
var i = n.val();
t.$el.is(".-invalid") || t.save(n.attr("name"), i), _r_();
}), _r_();
}), _r_();
},
save:function(e, t) {
_i_("619:7e4a7fde");
var i = this.mysettingsModel.set(e, t);
if (!i) return r.emit("mysettings:userChange", {
name:e,
value:t
}), _r_();
this.$el.addClass("-loading").removeClass("-saved"), this.$el.find("input, textarea, select, button").attr("disabled", !0), i.then(function() {
_i_("619:24f365ea"), this.saved(), r.emit("mysettings:userChange", {
name:e,
value:t
}), _r_();
}.bind(this), this.error.bind(this)), _r_();
},
saved:function() {
_i_("619:25c03e26");
var e = this;
this.$el.addClass("-saved").removeClass("-loading -error").find("input, textarea, select, button").attr("disabled", !1), setTimeout(function() {
_i_("619:7e05ec18"), e.$el.removeClass("-saved"), _r_();
}, 3e3), _r_();
},
error:function(t) {
_i_("619:41af0b5e");
var i = this.$el.data("custom-error-messages"), n = this;
this.$el.removeClass("-error -loading").find("input, textarea, select, button").attr("disabled", !1), i && t && t.fields ? Object.keys(t.fields).forEach(function(e) {
_i_("619:c2da36ae");
var i = t.fields[e], r = i.map(function(e) {
return _i_("619:6ec97aeb"), e = e || " ", _r_(n.$el.data("error-message-" + e.replace("_", "-")));
}).filter(function(e) {
return _i_("619:532e300b"), _r_("string" == typeof e);
});
r = r && r.length ? r :t.messages && t.messages[e], a(n, r), _r_();
}) :t && t.messages ? Object.keys(t.messages).forEach(function(e) {
_i_("619:4afc5eb5");
var i = t.messages[e];
a(n, i), _r_();
}) :e("static-notification").error(B.jstmpl.translations("settings_page_error_message")), _r_();
}
});
function a(e, t) {
_i_("619:7315de5a"), t = t || [], e.$el.addClass("-error").find('[data-invalid-message], [data-invalid-message=""]').text(t.join(" ")), _r_();
}
_r_();
}), B.define("component/mysettings-field-date", function(e, t, i) {
"use strict";
_i_("619:f109af84");
var n = e("component/mysettings-field");
i.exports = n.extend({
init:function() {
_i_("619:5098f69c"), n.prototype.init.call(this), this.subscribeToDateEvents(), _r_();
},
subscribeToDateEvents:function() {
_i_("619:a09326ed");
var e = this;
this.$el.find('[data-component="date-selector"]').each(function(t, i) {
_i_("619:9a219e21");
var n = $(i).component("date-selector");
n.on("date-change", function() {
_i_("619:a49bb22f"), e.save("date", {
day:n.daySelect.val(),
month:n.monthSelect.val(),
year:n.yearSelect.val()
}), _r_();
}), _r_();
}), _r_();
}
}), _r_();
}), B.define("component/mysettings-field-reward-preference-cc", function(e, t, i) {
"use strict";
_i_("619:88b8bb31");
var n = e("jquery"), r = e("component/mysettings-field");
i.exports = r.extend({
init:function() {
_i_("619:9aea93ba"), r.prototype.init.call(this), this.hook(), _r_();
},
saved:function() {
_i_("619:e0d8b36a"), r.prototype.saved.call(this);
var e = this.$el.find("select"), t = e.val();
if (B && B.env && B.env.mysettingsAction && B.env.mysettingsAction.b_user_cc_details && B.env.mysettingsAction.b_user_cc_details.length) for (var i = 0, a = B.env.mysettingsAction.b_user_cc_details.length; a > i; i++) {
var s = B.env.mysettingsAction.b_user_cc_details[i];
s.b_cc_card_id == t ? s.b_cc_is_used_for_raf = "1" :s.b_cc_is_used_for_raf = "";
}
var o = n('input[type="hidden"][name="b_cc_card_id"]');
o.length && n('input[type="checkbox"][name="b_cc_is_used_for_raf"]').prop("checked", o.val() == t), _r_();
},
hook:function() {
_i_("619:70b073c4"), n(document).on("mysettings.credit_cards.update", function(e, t) {
_i_("619:331263be");
var i = t.credit_cards, n = i && i.find(function(e) {
return _i_("619:6c43c88e"), _r_(Number(e.cc_is_used_for_raf));
});
if (n) {
var r = this.$el.find("select");
r.val(n.cc_card_id);
}
_r_();
}.bind(this)), _r_();
}
}), _r_();
}), B.define("component/mysettings-form", function(e, t, i) {
"use strict";
_i_("619:ed95215f");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("619:0e5f85b1");
var t = this.$el, i = e(this.$el.data("model"));
this.bFormValidation = t.component("form-validation"), this.model = i.getInstance(), t.is("form") ? this.$form = t :this.$form = t.find("form:eq(0)"), this.$form.on("submit", this.submit.bind(this)), t.find('[data-dismiss], [data-dismiss=""]').on("click", this.dismiss.bind(this)), t.find('[data-remove], [data-remove=""]').on("click", this.remove.bind(this)), this.removeConfirmationMessage = this.$form.find("[data-remove-message]").data("remove-message"), _r_();
},
formData:function() {
_i_("619:e2cbba25");
var e = {};
return this.$form.serializeArray().forEach(function(t) {
_i_("619:a203b90a"), e[t.name] = t.value, _r_();
}), _r_(e);
},
invalidateFields:function(e) {
_i_("619:4ee47198");
var t = this, i = !1;
return e && Object.keys(e).forEach(function(n) {
_i_("619:799a3814");
var r = e[n], a = t.$form.find('input[name="' + n + '"], textarea[name="' + n + '"], select[name="' + n + '"], input[name="b_' + n + '"], textarea[name="b_' + n + '"], select[name="b_' + n + '"]').closest("[data-field]");
a.length && (a.addClass("-invalid").find('[data-invalid-message], [data-invalid-message=""]').text(r.join(" ")), i = !0), _r_();
}), _r_(i);
},
submit:function(e) {
_i_("619:4125dc20"), e && e.preventDefault(), this.bFormValidation.validate() && this.save("save", this.formData()), _r_();
},
remove:function(e) {
_i_("619:2634b367");
var t = this;
e && e.preventDefault(), this.confirmRemove(this.removeConfirmationMessage).then(function() {
_i_("619:384981b6"), t.save("remove", t.formData()), _r_();
}), _r_();
},
confirmRemove:function(e) {
_i_("619:01a38ba4");
var t = B.promise();
return !e || confirm(e) ? t.fulfill() :t.reject(), _r_(t);
},
save:function(t, i) {
_i_("619:54baf76f");
var n = this;
this.$form.removeClass("-error").addClass("-saving"), this.model[t](i).then(r, a).finishChain();
function r() {
_i_("619:94a9aa96"), e("static-notification").success(B.jstmpl.translations("settings_page_changes_saved")), n.dismiss(), s(), _r_();
}
function a(t) {
_i_("619:e6a94e6a");
var i = !1;
n.$form.addClass("-error"), t && t.messages && (i = n.invalidateFields(t.messages)), i || e("static-notification").error(B.jstmpl.translations("settings_page_error_message")), s(), _r_();
}
function s() {
_i_("619:98c19763"), n.$form.removeClass("-saving"), _r_();
}
_r_();
},
dismiss:function(e) {
_i_("619:ba9584a2");
var t = this;
e && e.preventDefault(), setTimeout(function() {
_i_("619:192c9c38"), t.model.dismiss(), _r_();
}, 1), _r_();
}
}), _r_();
}), B.define("component/mysettings/wizard-2fa-enrollment", function(e, t, i) {
"use strict";
_i_("619:042cf3e1");
var n = e("component/mysettings/redux/store"), r = e("component/mysettings/redux/constants"), a = e("mysettings/mysettings-transport"), s = e("jstmpl").translations, o = e("static-notification");
function _(e) {
_i_("619:a5efc608");
var t = Object.assign({
pin:"000000"
}, e);
return _r_({
auth_second_factors:[ t ]
});
}
function c(e) {
return _i_("619:6a9195a7"), _r_((e || "").replace(/[^\d]/g, ""));
}
i.exports = e("component/reactive").extend({
initialize:function() {
_i_("619:14a712be");
var e = this;
n.subscribe(function() {
_i_("619:7f0c54b0"), e.render(), _r_();
}), this.events({
"click [data-next-step]":this.nextStep,
"click [data-dismiss]":this.dismiss,
"click [data-remove]":this.remove
}), this.render(), _r_();
},
template:"mysettings_wizard_2fa_enrollment__inner",
getState:function() {
return _i_("619:52dd24f9"), _r_(n.getState().b_2fa_enrollment);
},
formData:function() {
_i_("619:10659499");
var e, t = this.$el, i = {};
return e = t.is("form") ? t :t.find("form:eq(0)"), e.serializeArray().forEach(function(e) {
_i_("619:a203b90a1"), i[e.name] = e.value, _r_();
}), _r_(i);
},
verifyCode:function(e, t, i) {
_i_("619:17108edc");
var n = _({
op:"verify",
id:t,
type:e,
pin:i
});
return _r_(a.send(n));
},
sendCode:function(e, t) {
_i_("619:6e237c55");
var i = _({
op:"add",
id:t,
type:e
}), n = B.promise();
function r(e) {
_i_("619:43c84583"), "pending" === e.auth_second_factor_challenge_status ? n.fulfill() :"success" === e.auth_second_factor_challenge_status ? n.fulfill({
isAlreadyVerified:!0
}) :n.reject(), _r_();
}
function s(e) {
_i_("619:fe3b4f20"), n.reject(e), _r_();
}
return a.send(i).then(r, s), _r_(n);
},
removeEnrollment:function(e) {
_i_("619:13c8ef25");
var t, i = B.promise();
return window.confirm(e) ? (t = _({
op:"remove",
id:"2fa",
type:"sms",
pin:"000000"
}), a.send(t).then(i.fulfill.bind(i), i.reject.bind(i))) :i.reject("canceled"), _r_(i);
},
dismiss:function(e) {
_i_("619:f4ab8cfb"), e.preventDefault(), n.dispatch({
type:r.ACTION_TYPES.AUTH_2FA_ENROLLMENT.CANCEL
}), this.$el.trigger("dismiss"), _r_();
},
remove:function(e) {
_i_("619:4932a360"), e.preventDefault();
var t = $(e.target).data("remove-message"), i = this.$el;
this.removeEnrollment(t).then(function() {
_i_("619:1c7c6f7e"), n.dispatch({
type:r.ACTION_TYPES.AUTH_2FA_ENROLLMENT.REMOVE
}), i.trigger("dismiss"), _r_();
}, function(e) {
_i_("619:cbdb98fd"), "canceled" !== e && n.dispatch({
type:r.ACTION_TYPES.AUTH_2FA_ENROLLMENT.ERROR
}), _r_();
}), _r_();
},
nextStep:function(e) {
_i_("619:a85712b0");
var t, i, a = this.$el, _ = this, l = this.formData(), d = this.getState(), u = function(e) {
_i_("619:3b4515fe"), n.dispatch({
type:r.ACTION_TYPES.AUTH_2FA_ENROLLMENT.LOADING,
details:e
}), _r_();
}, h = function() {
_i_("619:a2c60771"), n.dispatch({
type:r.ACTION_TYPES.AUTH_2FA_ENROLLMENT.NEXT_STEP
}), "enrolled" === _.getState().status && (a.trigger("dismiss"), o.show("success", s("acc_settings_section_2fa_enrollment_success"))), _r_();
}, f = function(e) {
_i_("619:60ac3d42");
var e = Object.assign({
isAlreadyVerified:!1
}, e);
h(), e.isAlreadyVerified && h(), _r_();
}, p = n.dispatch.bind(n, {
type:r.ACTION_TYPES.AUTH_2FA_ENROLLMENT.ERROR
});
switch (e.preventDefault(), d.status) {
case "waiting_for_phone_number":
i = c(l.b_2fa_id), u({
phone:i
}), this.sendCode("sms", i).then(f, p);
break;

case "waiting_for_email_address":
t = l.b_2fa_id, u({
email:t
}), this.sendCode("email", t).then(f, p);
break;

case "pending_phone_verification":
u(), this.verifyCode("sms", d.phone, l.b_2fa_pin).then(f, p);
break;

case "pending_email_verification":
u(), this.verifyCode("email", d.email, l.b_2fa_pin).then(f, p);
break;

default:
return _r_();
}
_r_();
}
}), _r_();
}), B.define("component/mysettings/redux/reducers/auth-2fa-enrollment", function(e, t, i) {
"use strict";
_i_("619:305b6163");
var n = e("component/mysettings/redux/constants"), r = e("jstmpl"), a = r.translations, s = {
status:"waiting_for_phone_number",
b_is_user_enrolled_to_2fa:0,
phone:"",
email:"",
message:"",
is_in_error_state:!1,
is_in_loading_state:!1
}, o = B.env.mysettingsAction.b_2fa_enrollment, _ = {
off:"waiting_for_phone_number",
waiting_for_phone_number:"pending_phone_verification",
pending_phone_verification:"waiting_for_email_address",
waiting_for_email_address:"pending_email_verification",
pending_email_verification:"enrolled"
};
o.should_use_primary_email_as_recovery && (_ = {
off:"waiting_for_phone_number",
waiting_for_phone_number:"pending_phone_verification",
pending_phone_verification:"enrolled"
});
function c(e) {
_i_("619:ab4506ba");
var t = "";
switch (e) {
case "waiting_for_phone_number":
t = a("auth_next_step_error_wrong_phone");
break;

case "pending_phone_verification":
t = a("auth_next_step_error_wrong_verification_code");
break;

case "waiting_for_email_address":
t = a("auth_next_step_error_wrong_email");
break;

case "pending_email_verification":
t = a("auth_next_step_error_wrong_verification_code");
break;

default:
t = a("deals_flexi_calendar_error");
}
return _r_(t);
}
function l(e) {
_i_("619:2a897b0e");
var t = "enrolled" === e.status ? "--enrolled" :"--not-enrolled", i = ".js-section_2fa_enrollment", n = r.fn.FILTERS.html("+" + e.phone);
$(i).addClass("g-hidden"), $(i + t).removeClass("g-hidden"), $(".js-section_2fa_enrollment__phone").text(n), _r_();
}
function d(e) {
return _i_("619:bd825786"), l(e), _r_(Object.assign(o, e));
}
function u(e, t) {
_i_("619:bc0f8c92");
var i, r = Object.assign({}, t.details);
switch (e = e || s, t.type) {
case n.ACTION_TYPES.AUTH_2FA_ENROLLMENT.NEXT_STEP:
return i = Object.assign({}, e, {
status:_[e.status],
is_in_error_state:!1,
is_in_loading_state:!1,
message:null
}, r), "enrolled" === i.status && (i.b_is_user_enrolled_to_2fa = 1, i = d(i)), _r_(i);

case n.ACTION_TYPES.AUTH_2FA_ENROLLMENT.LOADING:
return _r_(Object.assign({}, e, {
is_in_loading_state:!0
}, r));

case n.ACTION_TYPES.AUTH_2FA_ENROLLMENT.ERROR:
return _r_(Object.assign({}, e, {
is_in_error_state:!0,
is_in_loading_state:!1,
message:c(e.status)
}));

case n.ACTION_TYPES.AUTH_2FA_ENROLLMENT.CANCEL:
return _r_(Object.assign({}, o));

case n.ACTION_TYPES.AUTH_2FA_ENROLLMENT.REMOVE:
return i = Object.assign({}, s), i = d(i), _r_(i);

default:
return _r_(e);
}
_r_();
}
i.exports = u, _r_();
}), B.define("component/mysettings/redux/store", function(e, t, i) {
"use strict";
_i_("619:469ba8e2");
var n = e("redux"), r = n.createStore, a = n.combineReducers, s = Object.assign({}, {
b_2fa_enrollment:B.env.mysettingsAction.b_2fa_enrollment
}), o = e("component/mysettings/redux/reducers/auth-2fa-enrollment"), _ = r(a({
b_2fa_enrollment:o
}), s, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
i.exports = _, _r_();
}), B.define("component/mysettings/redux/constants", function(e, t, i) {
"use strict";
_i_("619:3970c879"), i.exports = {
ACTION_TYPES:{
AUTH_2FA_ENROLLMENT:{
NEXT_STEP:"action_types.auth_2fa_enrollment.next_step",
ERROR:"action_types.auth_2fa_enrollment.error",
CANCEL:"action_types.auth_2fa_enrollment.cancel",
REMOVE:"action_types.auth_2fa_enrollment.remove",
LOADING:"action_types.auth_2fa_enrollment.loading"
}
}
}, _r_();
}), B.define("component/mysettings-groups", function(e, t, i) {
"use strict";
_i_("619:6ab3493e");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("619:2c7a4ee0");
var t = this.$el;
this.bFormValidation = t.component("form-validation"), this.$childrenAmount = t.find('[data-groups-children-amount], [data-groups-children-amount=""]'), this.$children = t.find('[data-groups-children], [data-groups-children=""]'), this.$childrenList = this.$children.find('[data-groups-children-list], [data-groups-children-list=""]'), this.template = e("jstmpl")("mysettings_groups_child"), this.$childrenAmount.on("change", $.proxy(this, "render")), this.previousChildrenAmout = Math.floor(this.$childrenAmount.val()), _r_();
},
render:function() {
_i_("619:0d060355");
var e, t = Math.floor(this.$childrenAmount.val());
if (this.previousChildrenAmout !== t) {
if (t > this.previousChildrenAmout) for (var e = this.previousChildrenAmout, i = t; i > e; e++) this.$childrenList.append(this.template.render({
b_index:e,
b_days_31:B.env.mysettingsAction.b_days_31,
b_months:B.env.mysettingsAction.b_months,
b_children_birth_years:B.env.mysettingsAction.b_children_birth_years
})); else for (var n = this.$childrenList.children(), e = this.previousChildrenAmout, i = t - 1; e > i; e--) n.eq(e).remove();
this.bFormValidation && this.bFormValidation.reset();
}
t ? this.$children.show() :this.$children.hide(), this.previousChildrenAmout = t, _r_();
}
}), _r_();
}), B.define("component/mysettings-highlight", function(e, t, i) {
"use strict";
_i_("619:25410d7a");
var n = e("component"), r = e("et");
i.exports = n.extend({
init:function() {
_i_("619:b89740fd");
var e = this.$el.data();
(e.fieldAttribute || e.fields) && this.highlight(e), _r_();
},
highlight:function(e) {
_i_("619:2f9731f1");
var t, i, n, a = [];
if (!/^[\w\d\-]+$/.test(e.fields)) return _r_();
i = e.fields.split(",");
for (var s = 0; s < i.length; s++) a.push("[" + e.fieldAttribute + "='" + i[s] + "']"), "2fa_enrollment" === i[s] && (r.customGoal("aMYTDVMeMZNBFWKZSUTIPTNFLFVZUOfTJEPFWFQZHT", 1), r.customGoal("aMYTDVMeMZNBFWKZSUTIPTNFLFVZUOfTJEPFWFQZcSOaSJTSXeUMAae", 1), r.customGoal("aMYTDVMeMZNBFWKZSUTIPTNFLFARfDXSBObDNdQeRHfCRO", 1), r.customGoal("aMYTDVMeMZNBFWKZSUTIPTNFLFARfDXSBObDNOCROBTJPae", 1), r.customGoal("aMYTDVMeMZNBFWKZSUTIPTNFLFARfDXSBObDNBBLVbcOXT", 1));
t = a.join(","), $(t).addClass("settings-item--highlighted"), n = "[" + (e["field-attribute"] || e.fieldAttribute) + "='" + i[0] + "']";
var o = $(n).attr("data-settings-highlight-target");
o && (n = "#" + o), $("html, body").delay(500).animate({
scrollTop:$(n).offset().top - 10
}, 500), _r_();
}
}), _r_();
}), B.define("component/mysettings-list", function(e, t, i) {
_i_("619:baf3f4dc");
var n = e("component"), r = e("et");
i.exports = n.extend({
init:function() {
_i_("619:baca2445");
var t = this, i = this.$el.data(), n = e(i.model), r = n.getInstance(), a = {
header:null,
footer:null,
row:null,
detail:null
};
this.listData = i, this.model = r, this.templates = a, r.on("add", function(e) {
_i_("619:dafe0dc5"), t.addRow(e.index), _r_();
}), r.on("update", function(e) {
_i_("619:02726826"), t.renderRow(e.index), _r_();
}), r.on("remove", function(e) {
_i_("619:3186c216"), t.removeRow(e.index), _r_();
}), r.on("dismiss", function() {
_i_("619:fe55a81c"), t.dismissDetail(), _r_();
}), i.header && (a.header = B.jstmpl(i.header)), i.footer && (a.footer = B.jstmpl(i.footer)), i.row && (a.row = B.jstmpl(i.row)), i.detail && (a.detail = B.jstmpl(i.detail)), this.render(), _r_();
},
createNode:function(e, t) {
_i_("619:3185db58");
var i = $(e.render(t));
if (1 !== i.length) throw new Error("mysettings-list: createNode: Template should contain one root node, and not more than one.");
return _r_(i.loadComponents());
},
render:function() {
_i_("619:38bb3c0d"), this.$header = this.$el.find('[data-header=""]'), this.$rows = this.$el.find('[data-body=""]'), this.$footer = this.$el.find('[data-footer=""]'), this.renderHeader(), this.renderRows(), this.renderFooter(), this.$el.find(".end_session").on("click", function(e) {
_i_("619:7418137f");
var t = $(this).attr("id");
$.ajax({
url:B.env.b_secure_domain + "/end_session",
dataType:"json",
type:"post",
data:{
sid:t
},
success:function(e) {
_i_("619:0e5b5b66"), window.location.reload(), _r_();
},
error:function() {}
}), _r_();
}), $("#settings-head__raf_header").hasClass("from-reward-setup") && (window.location.hash = "credit-cards"), _r_();
},
renderHeader:function() {
if (_i_("619:3d64029e"), 1 !== this.$header.length) return _r_();
var e = this.model.getHeader ? this.model.getHeader() :{};
this.$header.html(this.templates.header.render(e)).loadComponents(), _r_();
},
renderFooter:function() {
if (_i_("619:4ee3e395"), 1 !== this.$footer.length) return _r_();
var e = this.model.getFooter ? this.model.getFooter() :{};
this.$footer.html(this.templates.footer.render(e)).loadComponents(), _r_();
},
renderRows:function() {
_i_("619:67542d9a");
for (var e = this.model.getRows(), t = 0, i = e.length; i > t; t++) this.addRow(t, e[t]);
B.env.b_run_2fa_suggestion__mysettings && (this.model.hasActiveCreditCard && this.model.hasActiveCreditCard() ? (r.stage("aMYTDVMeMZNBFWKZSUTIPTNFLFVZUOfTJEPFWFQZHT", 1), r.track("aMYTDVMeMZNBFWKZSUTIPTNFLFVZUOfTJEPFWFQZHT") && this.render2FASuggestion()) :this.remove2FASuggestion()), _r_();
},
render2FASuggestion:function() {
_i_("619:e3787d6c");
var e = B.jstmpl("mysettings_2fa_suggestion").render();
this.$2fa_suggestion = this.$rows.append(e), _r_();
},
remove2FASuggestion:function() {
_i_("619:6a935609"), this.$2fa_suggestion && this.$2fa_suggestion.remove(), _r_();
},
createRowAndAttachEvents:function(e, t, i) {
_i_("619:d8fc53db");
var n = this.createNode(this.templates.row, e ? this.model.getRow(t) :i), r = '[data-detail-trigger], [data-detail-trigger=""]', a = null, s = this.toggleDetail.bind(n, this.listData, this.renderDetail.bind(this));
return n.data("detailsOpen", !1), n.is(r) || (a = r), n.on("click", a, s), _r_(n);
},
createRowFromIndex:function(e) {
return _i_("619:683b95ec"), _r_(this.createRowAndAttachEvents(!0, e));
},
createRowFromData:function(e) {
return _i_("619:e1ea0496"), _r_(this.createRowAndAttachEvents(!1, null, e));
},
addRow:function(e, t) {
_i_("619:9bf83183"), t || (t = this.model.getRow(e));
var i = this.createRowFromData(t);
if (0 === e) this.$rows.prepend(i); else {
var n = this.$rows.children().eq(e - 1);
n.length ? n.after(i) :this.$rows.append(i);
}
_r_();
},
renderRow:function(e) {
_i_("619:af6a0e29");
var t = this.$rows.children().eq(e), i = this.createRowFromIndex(e);
t.data("detailsOpen") && (this.rowDetailsOpen = null), t.replaceWith(i), _r_();
},
removeRow:function(e) {
_i_("619:83e9d864");
var t = this.$rows.children().eq(e);
t.data("detailsOpen") && (this.rowDetailsOpen = null), t.remove(), _r_();
},
renderDetail:function(e) {
if (_i_("619:0696b2a8"), !this.listData.detail) return _r_();
this.rowDetailsOpen && this.renderRow(this.rowDetailsOpen.index());
var t = this.$rows.children().eq(e), i = this.createNode(this.templates.detail, this.model.getRow(e));
this.model.dismiss(), this.rowDetailsOpen = i, t.replaceWith(i), i.data("detailsOpen", !0), _r_();
},
toggleDetail:function(e, t, i) {
if (_i_("619:2ce64fc9"), !e.detail) return _r_();
i && i.preventDefault();
var n = $(this);
n.data("detailsOpen") || t(n.index()), _r_();
},
dismissDetail:function() {
_i_("619:0f8532a6"), this.rowDetailsOpen && this.renderRow(this.rowDetailsOpen.index()), _r_();
}
}), _r_();
}), B.define("mysettings-utils", function(e, t, i) {
_i_("619:942371dd");
var n = e("object-create"), r = e("object-assign"), a = function(e, t) {
return _i_("619:72b24b69"), e.prototype = n(t.prototype), e.prototype.constructor = t, _r_(e);
};
i.exports = {
inherits:function(e) {
return _i_("619:198509b4"), _r_(a(this, e));
},
inheritAndExtend:function(e, t) {
_i_("619:4c00e8fe");
var i = function() {
_i_("619:c2383961"), e.call(this), _r_();
};
return a(i, e), r(i.prototype, t), _r_(i);
},
makeSingleton:function(e) {
_i_("619:6bb52928"), e._instance = null, e.getInstance = function() {
return _i_("619:1c150e68"), _r_(this._instance || (this._instance = new e()));
}, _r_();
}
}, _r_();
}), B.define("mysettings-model-base", function(e, t, i) {
_i_("619:8d5f69f5");
var n = e("mysettings-utils").inheritAndExtend, r = e("event-emitter"), a = n(r, {
transport:e("mysettings/mysettings-transport")
});
i.exports = a, _r_();
}), B.define("mysettings-model-simple", function(e, t, i) {
"use strict";
_i_("619:b6fe1e48");
var n = e("mysettings-model-base"), r = e("mysettings-utils").inheritAndExtend, a = e("mysettings-utils").makeSingleton, s = r(n, {
set:function(e, t) {
_i_("619:fd3d89eb");
var i = {}, n = B.promise();
if (i[e] = t, "language" !== e) return _r_(this.transport.send(i));
this.transport.send(i).then(r, a);
function r() {
_i_("619:74cf8d3b"), location.replace(B.env.b_this_url_without_lang + B.env.b_query_params_delimiter + "lang=" + encodeURIComponent(t)), n.resolve(), _r_();
}
function a(e) {
_i_("619:30cf682b"), n.reject(e), _r_();
}
return _r_(n);
},
dismiss:function() {
_i_("619:a6755022"), this.trigger("dismiss"), _r_();
}
});
a(s), i.exports = s, _r_();
}), B.define("mysettings-model-birthdate", function(e, t, i) {
"use strict";
_i_("619:7c61b9f7");
var n = e("mysettings-model-base"), r = e("mysettings-utils").inheritAndExtend, a = e("mysettings-utils").makeSingleton, s = r(n, {
load:function() {
return _i_("619:c9cbaaa3"), _r_({
b_days_31:B.env.mysettingsAction.b_days_31,
b_months:B.env.mysettingsAction.b_months,
b_birth_years:B.env.mysettingsAction.b_birth_years,
b_bday:B.env.mysettingsAction.b_reg_user_birth_date.b_bday,
b_bmonth:B.env.mysettingsAction.b_reg_user_birth_date.b_bmonth,
b_byear:B.env.mysettingsAction.b_reg_user_birth_date.b_byear,
b_localized_date:B.env.mysettingsAction.b_reg_user_birth_date.b_localized_date
});
},
save:function(e) {
_i_("619:dd1a00f5");
var t = B.promise();
e = {
bday:e.b_bday,
bmonth:e.b_bmonth,
byear:e.b_byear
}, this.transport.send(e).then(i, n);
function i() {
_i_("619:fe858054");
var i = e.byear + "-" + e.bmonth + "-" + e.bday;
B.env.mysettingsAction.b_reg_user_birth_date.b_bday = e.bday, B.env.mysettingsAction.b_reg_user_birth_date.b_bmonth = e.bmonth, B.env.mysettingsAction.b_reg_user_birth_date.b_byear = e.byear, B.env.mysettingsAction.b_reg_user_birth_date.b_localized_date = B.formatter.date(i), t.fulfill(), _r_();
}
function n(e) {
_i_("619:30cf682b1"), t.reject(e), _r_();
}
return _r_(t);
},
remove:function() {
_i_("619:6fa5319c");
var e = B.promise(), t = {
remove_birthdate:"yes"
};
this.transport.send(t).then(i, n);
function i() {
_i_("619:a51eda30"), B.env.mysettingsAction.b_reg_user_birth_date.b_bday = "", B.env.mysettingsAction.b_reg_user_birth_date.b_bmonth = "", B.env.mysettingsAction.b_reg_user_birth_date.b_byear = "", B.env.mysettingsAction.b_reg_user_birth_date.b_localized_date = "", e.fulfill(), _r_();
}
function n(t) {
_i_("619:30cf682b2"), e.reject(t), _r_();
}
return _r_(e);
},
dismiss:function() {
_i_("619:a67550221"), this.trigger("dismiss"), _r_();
}
});
a(s), i.exports = s, _r_();
}), B.define("mysettings-model-date-of-birth", function(e, t, i) {
_i_("619:dd2f2735");
var n = e("mysettings-model-simple"), r = e("mysettings-utils").inheritAndExtend, a = e("mysettings-utils").makeSingleton, s = r(n, {
set:function(e, t) {
if (_i_("619:47b507bc"), t.day && t.month && t.year) return _r_(this.transport.send({
bday:t.day,
bmonth:t.month,
byear:t.year
}));
if (!t.day && !t.month && !t.year) return _r_(this.transport.send({
remove_birthdate:!0
}));
_r_();
}
});
a(s), i.exports = s, _r_();
}), B.define("mysettings-model-age-group", function(e, t, i) {
"use strict";
_i_("619:763c1ab9");
var n = e("mysettings-model-base"), r = e("mysettings-utils").inheritAndExtend, a = e("mysettings-utils").makeSingleton, s = r(n, {
load:function() {
return _i_("619:018bc975"), _r_(B.env.mysettingsAction.b_user_age_group);
},
save:function(e) {
_i_("619:b3185fd2");
var t = B.promise(), i = B.env.mysettingsAction.b_user_age_group != e;
i ? this.transport.send(e).then(n, r) :n();
function n() {
_i_("619:dc6963a1"), B.env.mysettingsAction.b_user_age_group = e, t.fulfill(), _r_();
}
function r(e) {
_i_("619:30cf682b3"), t.reject(e), _r_();
}
return _r_(t);
},
dismiss:function() {
_i_("619:a67550222"), this.trigger("dismiss"), _r_();
}
});
a(s), i.exports = s, _r_();
}), B.define("mysettings-model-address-personal", function(e, t, i) {
"use strict";
_i_("619:c21b5542");
var n = e("mysettings-model-base"), r = e("mysettings-utils").inheritAndExtend, a = e("mysettings-utils").makeSingleton, s = r(n, {
modelKey:"b_user_address_personal",
load:function() {
return _i_("619:07400e8b"), _r_($.extend(B.env.mysettingsAction[this.modelKey], {
b_all_countries:B.env.mysettingsAction.b_all_countries,
b_is_business:this.isBusiness
}));
},
save:function(e) {
_i_("619:703658da");
var t = B.promise(), i = this, n = !1, r = {};
Object.keys(e).forEach(function(t) {
_i_("619:ce7ccb1e");
var a = e[t];
B.env.mysettingsAction[i.modelKey][t] != a && (r[t.replace(/^b_/, "")] = a, n = !0), _r_();
}), n ? this.transport.send(r).then(a, s) :a();
function a() {
_i_("619:ad0390b2"), Object.keys(r).forEach(function(e) {
_i_("619:e63d254b");
var t = r[e];
B.env.mysettingsAction[i.modelKey]["b_" + e] = t, _r_();
}), t.fulfill(), _r_();
}
function s(e) {
_i_("619:30cf682b4"), t.reject(e), _r_();
}
return _r_(t);
},
dismiss:function() {
_i_("619:a67550223"), this.trigger("dismiss"), _r_();
}
});
a(s), i.exports = s, _r_();
}), B.define("mysettings-model-address-business", function(e, t, i) {
"use strict";
_i_("619:ed2bb84f");
var n = e("mysettings-model-address-personal"), r = e("mysettings-utils").inheritAndExtend, a = e("mysettings-utils").makeSingleton, s = r(n, {
modelKey:"b_user_address_business",
isBusiness:!0
});
a(s), i.exports = s, _r_();
}), B.define("mysettings-model-preferences", function(e, t, i) {
"use strict";
_i_("619:0a4facd9");
var n = e("mysettings-model-simple"), r = e("mysettings-utils").inheritAndExtend, a = e("mysettings-utils").makeSingleton, s = r(n, {
load:function() {
return _i_("619:6fd37f53"), _r_({
b_preferences_list:B.env.mysettingsAction.b_travel_preferences
});
},
save:function(e) {
_i_("619:57acc5f3");
var t = [];
return B.env.mysettingsAction.b_travel_preferences.forEach(function(i, n) {
_i_("619:efef8403"), e && "facility" === i.b_type && (B.env.mysettingsAction.b_travel_preferences[n].b_is_selected = e["b_preferences_" + i.b_id] ? "1" :"0"), "1" == B.env.mysettingsAction.b_travel_preferences[n].b_is_selected && t.push(i.b_id), _r_();
}), _r_(this.transport.send({
preferences:t.join(",")
}));
},
set:function(e, t) {
return _i_("619:b05148eb"), "star_rating" === e && B.env.mysettingsAction.b_travel_preferences.forEach(function(i, n) {
_i_("619:0afe0d2a"), i.b_type == e && (B.env.mysettingsAction.b_travel_preferences[n].b_is_selected = i.b_id == t ? "1" :"0"), _r_();
}), "accessibility" === e && B.env.mysettingsAction.b_travel_preferences.forEach(function(e, t) {
if (_i_("619:1b33e474"), "facility" === e.b_type && 5 === parseInt(e.b_id, 10)) {
var i = !!B.env.mysettingsAction.b_travel_preferences[t].b_is_selected;
B.env.mysettingsAction.b_travel_preferences[t].b_is_selected = i ? "0" :"1";
}
_r_();
}), _r_(this.save());
}
});
a(s), i.exports = s, _r_();
}), B.define("mysettings-model-cards", function(e, t, i) {
"use strict";
_i_("619:177a6adf");
var n = e("mysettings-model-base"), r = e("mysettings-utils").inheritAndExtend, a = e("mysettings-utils").makeSingleton, s = r(n, {
store:B.env.mysettingsAction.b_user_cc_details,
load:function() {
return _i_("619:75b2aa3b"), _r_({
b_cc_types:B.env.mysettingsAction.b_cc_types,
b_reg_user_id:B.env.mysettingsAction.b_reg_user_id,
b_connected_user_accounts:B.env.mysettingsAction.b_connected_user_accounts,
b_months:B.env.mysettingsAction.b_months,
b_cc_years:B.env.mysettingsAction.b_cc_years,
b_show_raf_campaign_v2_cc_preference:B.env.mysettingsAction.b_show_raf_campaign_v2_cc_preference,
b_show_raf_card_ui:B.env.mysettingsAction.b_show_raf_card_ui,
b_aid:B.env.b_aid,
b_reg_user_emails:B.env.mysettingsAction.b_reg_user_emails
});
},
getRows:function() {
_i_("619:08fe7e0b");
for (var e = this.store, t = 0, i = e.length; i > t; t++) this.store[t].b_aid = B.env.b_aid;
return _r_(e);
},
getRow:function(e) {
_i_("619:c9f47b0e");
var t = this.store[e];
return _r_($.extend({}, t, this.load()));
},
addRow:function(e, t) {
_i_("619:f055f189"), this.store.splice(e, 0, t), this.trigger("add", {
index:e
}), _r_();
},
setRow:function(e, t) {
_i_("619:7b2fc02c");
var i = this;
Object.keys(t).forEach(function(n) {
_i_("619:b19994a0"), i.store[e][n] = t[n], _r_();
}), this.trigger("update", {
index:e
}), _r_();
},
removeRow:function(e) {
_i_("619:8d9473f8"), this.store.splice(e, 1), this.trigger("remove", {
index:e
}), _r_();
},
indexOf:function(e) {
_i_("619:38c59f24");
for (var t = 0, i = this.store.length; i > t; t++) if (e == this.store[t].b_cc_card_id) return _r_(t);
return _r_(-1);
},
prepareToSave:function(e) {
if (_i_("619:267e9c57"), !e) return _r_({});
var t = {
op:e.b_cc_card_id ? "update" :"add"
};
return Object.keys(e).forEach(function(i) {
_i_("619:b41f3242"), t[i.replace(/^b_/, "")] = e[i], _r_();
}), _r_(t);
},
save:function(e) {
_i_("619:9bf31987");
var t = B.promise(), i = this, n = !e.b_cc_card_id, r = !1, a = {}, s = {}, o = [];
if (n || (a = this.getRow(this.indexOf(e.b_cc_card_id))), Object.keys(e).forEach(function(t) {
_i_("619:7348b519");
var i = e[t];
s[t.replace(/^b_/, "")] = i, a[t] != i && (r = !0), _r_();
}), r) {
if ("1" == e.b_cc_is_used_for_raf && B.env.mysettingsAction.b_reg_user_emails.length) for (var _ = 0, c = this.store.length; c > _; _++) this.store[_].b_cc_card_id != e.b_cc_card_id && "0" != this.store[_].b_cc_is_used_for_raf && (this.store[_].b_cc_is_used_for_raf = "0", this.trigger("update", {
index:_
}), o.push(this.prepareToSave(this.store[_])));
s.cc_card_id = e.b_cc_card_id, s.op = n ? "add" :"update", o.push(s), this.transport.send({
credit_cards:o
}).then(l, d);
} else l();
function l(r) {
_i_("619:a4d78823");
var a = {};
Object.keys(s).forEach(function(e) {
_i_("619:d1ccc898");
var t = s[e];
"cc_number" === e ? a.b_last_digits = t.substr(t.length - 4) :a["b_" + e] = t, _r_();
}), n ? (r && r.values && (a.b_cc_card_id = r.values.cc_card_id), i.addRow(i.store.length, a)) :i.setRow(i.indexOf(e.b_cc_card_id), a), $(document).trigger("mysettings.credit_cards.update", {
credit_cards:o
}), t.fulfill(), _r_();
}
function d(e) {
_i_("619:30cf682b5"), t.reject(e), _r_();
}
return _r_(t);
},
remove:function(e) {
_i_("619:dc98a188");
var t = B.promise(), i = this, n = {};
n.cc_card_id = e.b_cc_card_id, n.op = "remove", this.transport.send({
credit_cards:[ n ]
}).then(r, a);
function r() {
_i_("619:747f9e43"), i.removeRow(i.indexOf(e.b_cc_card_id)), t.fulfill(), _r_();
}
function a(e) {
_i_("619:30cf682b6"), t.reject(e), _r_();
}
return _r_(t);
},
dismiss:function() {
_i_("619:a67550224"), this.trigger("dismiss"), _r_();
},
hasActiveCreditCard:function() {
_i_("619:53d410c9");
var e = this.getRows() || [], t = e.reduce(function(e, t) {
return _i_("619:d62affb7"), _r_(e || "active" === t.b_cc_status);
}, !1);
return _r_(t);
}
});
a(s), i.exports = s, _r_();
}), B.define("mysettings-model-sessions", function(e, t, i) {
"use strict";
_i_("619:6b29077b");
var n = e("mysettings-model-base"), r = e("mysettings-utils").inheritAndExtend, a = e("mysettings-utils").makeSingleton, s = r(n, {
store:B.env.mysettingsAction.b_user_sessions,
load:function() {
return _i_("619:dc47c88e"), _r_(this.store);
},
getRows:function() {
return _i_("619:dc47c88e1"), _r_(this.store);
},
getRow:function(e) {
_i_("619:c9f47b0e1");
var t = this.store[e];
return _r_($.extend({}, t, this.load()));
},
addRow:function(e, t) {
_i_("619:f055f1891"), this.store.splice(e, 0, t), this.trigger("add", {
index:e
}), _r_();
},
setRow:function(e, t) {
_i_("619:7b2fc02c1");
var i = this;
Object.keys(t).forEach(function(n) {
_i_("619:b19994a01"), i.store[e][n] = t[n], _r_();
}), this.trigger("update", {
index:e
}), _r_();
},
removeRow:function(e) {
_i_("619:8d9473f81"), this.store.splice(e, 1), this.trigger("remove", {
index:e
}), _r_();
},
indexOf:function(e) {
_i_("619:54007f71");
for (var t = 0, i = this.store.length; i > t; t++) if (e == this.store[t].session_id) return _r_(t);
return _r_(-1);
},
remove:function(e) {
_i_("619:9bd62ab2");
var t = B.promise(), i = this, n = {};
n.session_id = e.session_data, n.op = "remove", this.transport.send({
credit_cards:[ n ]
}).then(r, a);
function r() {
_i_("619:b590773c"), i.removeRow(i.indexOf(e.session_id)), t.fulfill(), _r_();
}
function a(e) {
_i_("619:30cf682b7"), t.reject(e), _r_();
}
return _r_(t);
},
dismiss:function() {
_i_("619:a67550225"), this.trigger("dismiss"), _r_();
}
});
a(s), i.exports = s, _r_();
}), B.define("mysettings-model-bbtool-email", function(e, t, i) {
_i_("619:b2271d2d");
var n, r = e("mysettings-model-base"), a = e("mysettings-utils").inheritAndExtend, s = e("mysettings-utils").makeSingleton, o = e("mysettings-model-emails"), _ = B.env.mysettingsAction.b_reg_user_bbtool_email;
_.b_bbtool_company_admins_names = B.env.b_bbtool_company_admins_names, n = a(r, {
transport:e("company/server-transport"),
store:_,
save:function(e) {
_i_("619:a8101c24");
var t = {
employees:[ e ]
};
return _r_(this.transport.run("update_employees", t).then(function() {
_i_("619:5524d3f7"), _.b_email = e.email, this.dismiss(), _r_();
}.bind(this)));
},
load:function() {
return _i_("619:0c15b923"), _r_(_);
},
dismiss:function() {
_i_("619:6b058632");
var e = o.getInstance();
e.dismiss(), this.trigger("dismiss"), _r_();
}
}), s(n), i.exports = n, _r_();
}), B.define("mysettings-model-emails", function(e, t, i) {
"use strict";
_i_("619:63405eb0");
var n = e("mysettings-model-base"), r = e("mysettings-utils").inheritAndExtend, a = e("mysettings-utils").makeSingleton, s = r(n, {
store:B.env.mysettingsAction.b_reg_user_emails,
maxEmails:3,
load:function() {
return _i_("619:ae2fc9b0"), _r_({
b_can_add:this.getCount() < this.maxEmails ? 1 :0
});
},
getRows:function() {
return _i_("619:dc47c88e2"), _r_(this.store);
},
indexOf:function(e) {
if (_i_("619:f63fcafe"), !e.b_email) return _r_(null);
for (var t = 0; t < this.store.length; t++) if (this.store[t].b_email == e.b_email) return _r_(t);
return _r_(-1);
},
getRow:function(e) {
return _i_("619:47e97d13"), _r_(this.store[e]);
},
getCount:function() {
return _i_("619:15e7bc6a"), _r_(this.store.length);
},
addRow:function(e, t) {
_i_("619:9de46bfb"), this.trigger("before-add"), this.store.push(t), this.trigger("add", {
index:e
}), _r_();
},
setRow:function(e, t) {
_i_("619:b4381617");
var i, n;
return i = this.getRow(e), n = $.extend({}, i, t), this.store[e] = n, this.trigger("update", {
index:e
}), _r_(n);
},
set:function(t) {
_i_("619:bb29a433");
var i, n = this, r = B.promise();
i = t.subscription_type ? {
subscribe:[ {
email:t.b_email,
subscription_type:t.subscription_type || "",
subscription_notifications:t.subscription_notifications || 0
} ]
} :{
subscribe:$.makeArray(t.b_email).map(function(e) {
return _i_("619:f97729de"), _r_({
email:e,
subscribe:t.subscribe || 0,
popular:t.popular || 0,
cityspecial:t.cityspecial || 0,
flash_deals:t.flash_deals || 0,
sunday:t.sunday || 0,
genius:t.genius || 0,
villas:t.villas || 0
});
})
}, this.transport.send(i).then(a, s);
function a() {
_i_("619:db8f5d18"), r.then(function() {
_i_("619:39c79c22"), $.makeArray(t.b_email).forEach(function(e) {
_i_("619:843e1b30");
var i = $.extend({}, t, {
b_email:e
});
n.setRow(n.indexOf(i), i), _r_();
}), t.unsubscribe_all && (e("static-notification").success(B.jstmpl.translations("newsletter_unsubscribed_success_account")), n.trigger("unsubscribe-all")), _r_();
}, r.reject), r.fulfill(), _r_();
}
function s(e) {
_i_("619:38b78e42"), r.reject(e), _r_();
}
return _r_(r);
},
removeRow:function(e) {
_i_("619:03496548"), this.trigger("before-remove"), this.store.splice(e, 1), this.trigger("remove", {
index:e
}), _r_();
},
save:function(t) {
if (_i_("619:06efa734"), t.unsubscribe_all) return $.extend(t, {
b_email:t.b_email.split(","),
subscribe:0,
popular:0,
cityspecial:0,
flash_deals:0,
sunday:0,
genius:0,
villas:0
}), _r_(this.set(t));
var i = this, n = t && t.b_is_new ? !0 :!1, r = B.promise(), a = {
email:[ {
op:n === !0 ? "add" :"update",
email:t.b_email,
is_business:t.b_is_business,
is_primary:t.b_is_primary
} ]
};
if (!n) {
var s = i.getRow(i.indexOf(t));
if (s && t.b_email === s.b_email && (void 0 === t.b_new_email || t.b_new_email === s.b_email && !s.b_new_email || t.b_new_email === s.b_new_email) && (void 0 === t.b_is_business || +t.b_is_business === +s.b_is_business) && (void 0 === t.b_is_primary || +t.b_is_primary === +s.b_is_primary)) return r.fulfill(), _r_(r);
}
var o = i.getRow(i.indexOf(t));
o && (null === t.b_new_email || t.b_new_email === o.b_email ? a.email[0].op = "email_u_cancel" :t.b_new_email && t.b_email !== t.b_new_email && (a.email[0].new_email = t.b_new_email, a.email[0].op = "email_u")), this.transport.send(a).then(_, c);
function _() {
_i_("619:8fa9ce6e"), r.then(function() {
_i_("619:67143dd5"), n ? (t.b_is_primary && (t.b_is_primary = 0, e("static-notification").success(B.jstmpl.translations("new_primary_email_success_message"))), i.addRow(i.getCount(), t)) :i.setRow(i.indexOf(t), t), +t.b_is_primary && i.checkPrimary(t), _r_();
}, r.reject), r.fulfill(), _r_();
}
function c(e) {
_i_("619:38b78e421"), r.reject(e), _r_();
}
return _r_(r);
},
remove:function(e) {
_i_("619:c4c8b040");
var t = this, i = B.promise(), n = {
email:[ {
op:"delete",
email:e.b_email
} ]
};
this.transport.send(n).then(r, a);
function r() {
_i_("619:87af2895"), t.removeRow(t.indexOf(e)), i.fulfill(), _r_();
}
function a(e) {
_i_("619:38b78e422"), i.reject(e), _r_();
}
return _r_(i);
},
checkPrimary:function(e) {
if (_i_("619:51e12ad4"), !e.b_email) return _r_();
for (var t = 0; t < this.store.length; t++) this.store[t].b_email != e.b_email && this.setRow(t, {
b_is_primary:0
});
_r_();
},
dismiss:function() {
_i_("619:4f4790ed"), this.trigger("dismiss", {
model:"mysettings-model-emails"
}), _r_();
}
});
a(s), i.exports = s, _r_();
}), B.define("mysettings-model-groups", function(e, t, i) {
"use strict";
_i_("619:cdd5741a");
var n = e("mysettings-model-base"), r = e("mysettings-utils").inheritAndExtend, a = e("mysettings-utils").makeSingleton, s = r(n, {
store:B.env.mysettingsAction.b_traveller_party,
load:function() {
return _i_("619:3c29ce2f"), _r_({
b_days_31:B.env.mysettingsAction.b_days_31,
b_months:B.env.mysettingsAction.b_months,
b_children_birth_years:B.env.mysettingsAction.b_children_birth_years
});
},
getRows:function() {
return _i_("619:dc47c88e3"), _r_(this.store);
},
getRow:function(e) {
_i_("619:c9f47b0e2");
var t = this.store[e];
return _r_($.extend({}, t, this.load()));
},
addRow:function(e, t) {
_i_("619:f055f1892"), this.store.splice(e, 0, t), this.trigger("add", {
index:e
}), _r_();
},
setRow:function(e, t) {
_i_("619:7b2fc02c2");
var i = this;
Object.keys(t).forEach(function(n) {
_i_("619:b19994a02"), i.store[e][n] = t[n], _r_();
}), this.trigger("update", {
index:e
}), _r_();
},
removeRow:function(e) {
_i_("619:8d9473f82"), this.store.splice(e, 1), this.trigger("remove", {
index:e
}), _r_();
},
indexOf:function(e) {
_i_("619:0ecf922d");
for (var t = 0, i = this.store.length; i > t; t++) if (e == this.store[t].b_party_id) return _r_(t);
return _r_(-1);
},
save:function(e) {
_i_("619:2034b9dc");
var t = B.promise(), i = this, n = !1, r = {};
n = !e.b_party_id, Object.keys(e).forEach(function(t) {
_i_("619:baed6b9e");
var i = e[t], n = t.match(/birthday_(\d+)_(\w+)/);
n ? (r.birthdates = r.birthdates || [], r.birthdates[n[1]] = r.birthdates[n[1]] || {}, r.birthdates[n[1]][n[2]] = i) :r[t.replace(/^b_/, "")] = i, _r_();
}), r.op = n ? "add" :"update", this.transport.send({
travel_groups:[ r ]
}).then(a, s);
function a(a) {
_i_("619:d2ad3bf8");
var s = {};
Object.keys(r).forEach(function(e) {
_i_("619:6b3e84a1");
var t = r[e];
"birthdates" === e ? (s.b_children_info = s.b_children_info || [], t.forEach(function(e) {
_i_("619:d1bf9f86"), s.b_children_info.push({
b_bday:e.bday,
b_bmonth:e.bmonth,
b_byear:e.byear
}), _r_();
})) :"op" !== e && (s["b_" + e] = t), _r_();
}), n ? (a && a.values && (s.b_party_id = a.values.party_id), i.addRow(i.store.length, s)) :i.setRow(i.indexOf(e.b_party_id), s), t.fulfill(), _r_();
}
function s(e) {
_i_("619:30cf682b8"), t.reject(e), _r_();
}
return _r_(t);
},
remove:function(e) {
_i_("619:877738dc");
var t = B.promise(), i = this, n = {};
n.party_id = e.b_party_id, n.op = "remove", this.transport.send({
travel_groups:[ n ]
}).then(r, a);
function r() {
_i_("619:369d9aae"), i.removeRow(i.indexOf(e.b_party_id)), t.fulfill(), _r_();
}
function a(e) {
_i_("619:30cf682b9"), t.reject(e), _r_();
}
return _r_(t);
},
dismiss:function() {
_i_("619:a67550226"), this.trigger("dismiss"), _r_();
}
});
a(s), i.exports = s, _r_();
}), B.define("mysettings-model-password", function(e, t, i) {
"use strict";
_i_("619:fc6cd6d8");
var n = e("mysettings-model-base"), r = e("mysettings-utils").inheritAndExtend, a = e("mysettings-utils").makeSingleton, s = r(n, {
save:function(e) {
_i_("619:af9d6dfc");
var t = B.promise(), i = this;
e = {
password:e.b_password,
password_confirm:e.b_password_confirm,
old_password:e.b_old_password
}, this.transport.send(e).then(n, r);
function n() {
_i_("619:36154fc1"), i.trigger("update"), t.fulfill(), _r_();
}
function r(e) {
_i_("619:30cf682b10"), t.reject(e), _r_();
}
return _r_(t);
},
dismiss:function() {
_i_("619:a67550227"), this.trigger("dismiss"), _r_();
}
});
a(s), i.exports = s, _r_();
}), B.define("mysettings-model-password-reset", function(e, t, i) {
"use strict";
_i_("619:43336d44");
var n = e("mysettings-model-base"), r = e("mysettings-utils").inheritAndExtend, a = e("mysettings-utils").makeSingleton, s = r(n, {
save:function(e) {
_i_("619:6323a31f");
var t = B.promise(), i = this;
e = {
password_reset:1
}, this.transport.send(e).then(n, r);
function n() {
_i_("619:36154fc11"), i.trigger("update"), t.fulfill(), _r_();
}
function r(e) {
_i_("619:30cf682b11"), t.reject(e), _r_();
}
return _r_(t);
},
dismiss:function() {
_i_("619:8780ea43"), e("static-notification").success(B.jstmpl.translations("reset_password_success_email_sent")), this.trigger("dismiss"), _r_();
}
});
a(s), i.exports = s, _r_();
}), B.define("mysettings-model-2fa_enrollment", function(e, t, i) {
"use strict";
_i_("619:1b27e7bd");
var n = e("mysettings-model-base"), r = e("mysettings-utils").inheritAndExtend, a = e("mysettings-utils").makeSingleton, s = "", o = "verify", _ = "verified", c = "verification_pending", l = r(n, {
store:B.env.mysettingsAction.b_2fa_enrollment,
load:function() {
return _i_("619:dc47c88e4"), _r_(this.store);
},
save:function(t) {
_i_("619:af4ecc1b");
var i = B.promise(), n = this, r = t.flow, a = {
type:"sms",
id:t.b_2fa_id,
pin:t.b_2fa_pin || "000000"
};
"verify" === r ? this.verifyAuthMethod(a).then(l.bind(null, _), d) :this.addAuthMethod(a).then(l.bind(null, c), d);
function l(r) {
_i_("619:7a5545a8"), r === _ ? e("static-notification").success("You have protected your account with Two Factor Authentication!") :r === c && e("static-notification").success("We sent an sms with 6-digit code. Please, check your phone.");
var a = r === c ? o :s;
n.store.b_2fa_phone_number = t.b_2fa_id, i.fulfill(a), _r_();
}
function d(e) {
_i_("619:768897e6"), n.store.b_2fa_phone_number = "", i.reject(e), _r_();
}
return _r_(i);
},
addAuthMethod:function(e) {
_i_("619:fb930da3");
var t = B.promise(), i = {
auth_second_factors:[]
};
e.op = "add", i.auth_second_factors.push(e), this.transport.send(i).then(n, r);
function n(e) {
_i_("619:0d08fbce"), "pending" === e.auth_second_factor_challenge_status ? t.fulfill() :t.reject(), _r_();
}
function r(e) {
_i_("619:30cf682b12"), t.reject(e), _r_();
}
return _r_(t);
},
verifyAuthMethod:function(e) {
_i_("619:29155521");
var t = B.promise(), i = this, n = {
auth_second_factors:[]
};
e.op = "verify", n.auth_second_factors.push(e), this.transport.send(n).then(r, a);
function r(e) {
_i_("619:75abfcbf"), i.store.b_is_user_enrolled_to_2fa = 1, t.fulfill(), _r_();
}
function a(e) {
_i_("619:30cf682b13"), t.reject(e), _r_();
}
return _r_(t);
},
remove:function(e) {
_i_("619:6532b48c");
var t = B.promise(), i = this, n = "remove", r = {
auth_second_factors:[ {
op:n,
type:"sms",
id:"0",
pin:e.b_2fa_pin || "000000"
} ]
};
this.transport.send(r).then(a, s);
function a() {
_i_("619:86fdbd54"), i.store.b_is_user_enrolled_to_2fa = 0, t.fulfill(), _r_();
}
function s(e) {
_i_("619:30cf682b14"), t.reject(e), _r_();
}
return _r_(t);
},
dismiss:function() {
_i_("619:d150f5ba"), this.trigger("dismiss"), _r_();
}
});
a(l), i.exports = l, _r_();
}), B.define("mysettings-model-travel-purpose", function(e, t, i) {
"use strict";
_i_("619:98119eac");
var n = e("mysettings-model-simple"), r = e("mysettings-utils").inheritAndExtend, a = e("mysettings-utils").makeSingleton, s = r(n, {
transport:e("mysettings/mysettings-transport-travel-purpose")
});
a(s), i.exports = s, _r_();
}), B.define("mysettings-model-account-remove", function(e, t, i) {
"use strict";
_i_("619:d2fe2088");
var n = e("mysettings-model-base"), r = e("mysettings-utils").inheritAndExtend, a = e("mysettings-utils").makeSingleton, s = r(n, {
save:function(t) {
_i_("619:0d218d01");
var i = B.promise();
t = {
account:[ {
op:"delete",
feedback_text:t.reason || ""
} ]
}, this.transport.send(t).then(n, r);
function n() {
_i_("619:d987a5b9"), i.fulfill(), setTimeout(function() {
_i_("619:1248ae10"), e("static-notification").success(B.jstmpl.translations("marked_for_removal_confirmation_needed")), _r_();
}, 0), _r_();
}
function r(e) {
_i_("619:30cf682b15"), i.reject(e), _r_();
}
return _r_(i);
},
dismiss:function() {
_i_("619:a67550228"), this.trigger("dismiss"), _r_();
}
});
a(s), i.exports = s, _r_();
}), B.define("mysettings-model-book-for", function(e, t, i) {
"use strict";
_i_("619:9546c975");
var n = e("mysettings-model-simple"), r = e("mysettings-utils").inheritAndExtend, a = e("mysettings-utils").makeSingleton, s = r(n, {
transport:e("mysettings/mysettings-transport-book-for")
});
a(s), i.exports = s, _r_();
}), B.define("mysettings-model-paypal", function(e, t, i) {
"use strict";
_i_("619:be04867f");
var n = e("mysettings-model-simple"), r = e("mysettings-utils").inheritAndExtend, a = e("mysettings-utils").makeSingleton, s = r(n, {
save:function(e) {
return _i_("619:8456b17a"), _r_(this.transport.send(e));
}
});
a(s), i.exports = s, _r_();
}), B.define("mysettings-model-newsletter-preferences", function(e, t, i) {
"use strict";
_i_("619:706ab5f0");
var n = e("mysettings-model-base"), r = e("mysettings-utils").inheritAndExtend, a = e("mysettings-utils").makeSingleton, s = r(n, {
store:B.env.mysettingsAction.b_newsletter_preferences,
getRows:function() {
return _i_("619:a52072dc"), _r_(this.store);
}
});
a(s), i.exports = s, _r_();
}), B.define("component/mysettings-newsletter-preferences", function(e, t, i) {
"use strict";
_i_("619:8471fc18");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("619:d9b60bea");
var t, i = this;
if (this.data = this.$el.data(), !this.modelKey) return _r_();
t = e(this.$el.data("model")), this.model = t.getInstance(), this.$el.find("input, textarea, select").each(function(e, t) {
_i_("619:088c51fc");
var n = $(t);
n.on("change", function(e) {
_i_("619:95feda7b");
var t = n.val();
i.$el.is(".-invalid") || i.save(n.attr("name"), t), _r_();
}), _r_();
}), _r_();
},
save:function(e, t) {
_i_("619:bc20f833");
var i = {};
this.$el.parents(".settings-item").find('input[type="checkbox"]').each(function(e, t) {
_i_("619:7cff5c73");
var n = $(t);
i[n.attr("name")] = n.is(":checked") ? 1 :0, _r_();
}), this.$el.addClass("-loading").removeClass("-saved").parents(".settings-item").find("input, textarea, select, button").attr("disabled", !0), i.b_email = this.getKey(), this.model.set(i).then(this.saved.bind(this), this.error.bind(this)), _r_();
},
saved:function() {
_i_("619:7869f702");
var e = this;
this.$el.addClass("-saved").removeClass("-loading -error").parents(".settings-item").find("input, textarea, select, button").attr("disabled", !1), setTimeout(function() {
_i_("619:7e05ec181"), e.$el.removeClass("-saved"), _r_();
}, 3e3), _r_();
},
error:function(t) {
_i_("619:145f3217");
var i = this;
this.$el.removeClass("-error -loading").find("input, textarea, select, button").attr("disabled", !1), t && t.fields ? Object.keys(t.fields).forEach(function(e) {
_i_("619:00b5ba9d");
var n = t.fields[e];
i.$el.addClass("-error").find('[data-invalid-message], [data-invalid-message=""]').text(n.join(" ")), _r_();
}) :e("static-notification").error(B.jstmpl.translations("settings_page_error_message")), _r_();
}
}), _r_();
}), B.define("component/mysettings-frequency-newsletter-preferences", function(e, t, i) {
"use strict";
_i_("619:51b1a5c4");
var n = e("component/mysettings-field");
i.exports = n.extend({
init:function() {
_i_("619:731f8498");
var t, i = this;
this.data = this.$el.data(), this.data.modelKey && (t = e(this.$el.data("model")), this.model = t.getInstance(), this.$el.find("input").each(function(e, t) {
_i_("619:235212bd");
var n = $(t);
n.on("change", function(e) {
_i_("619:4fc5e503");
var t = n.val();
i.$el.is(".-invalid") || (n.parents(".settings-newsletters__frequency").attr("data-frequency-selected", "1").siblings(".settings-newsletters__frequency").attr("data-frequency-selected", "0"), i.save(n.attr("name"), t)), _r_();
}), _r_();
})), _r_();
},
save:function(e, t) {
_i_("619:25b53bd1");
var i = {};
this.$el.find("input").each(function(e, t) {
_i_("619:5460420b");
var n = $(t), r = n.attr("name");
r && r.indexOf("frequency_") >= 0 ? i.subscription_type = n.val() :i[r] = n.is(":checked") ? 1 :0, _r_();
}), this.$el.addClass("-loading").removeClass("-saved").parents(".settings-item").find("input, textarea, select, button").attr("disabled", !0), i.b_email = this.data.modelKey, this.model.set(i).then(this.saved.bind(this), this.error.bind(this)), _r_();
},
saved:function() {
_i_("619:7869f7021");
var e = this;
this.$el.addClass("-saved").removeClass("-loading -error").parents(".settings-item").find("input, textarea, select, button").attr("disabled", !1), setTimeout(function() {
_i_("619:7e05ec182"), e.$el.removeClass("-saved"), _r_();
}, 3e3), _r_();
},
error:function(t) {
_i_("619:49894189");
var i = this;
this.$el.removeClass("-error -loading").find("input, textarea, select, button").attr("disabled", !1), t && t.fields ? Object.keys(t.fields).forEach(function(e) {
_i_("619:00b5ba9d1");
var n = t.fields[e];
i.$el.addClass("-error").find('[data-invalid-message], [data-invalid-message=""]').text(n.join(" ")), _r_();
}) :e("static-notification").error(B.jstmpl.translations("settings_page_error_message")), _r_();
}
}), _r_();
}), B.define("component/mysettings-password", function(e, t, i) {
_i_("619:ca7e2e2e");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("619:3badc64d"), B.userAccessFormHandler.initPassStrength("input[name=b_password]"), _r_();
}
}), _r_();
}), B.define("component/mysettings-scrollspy", function(e, t, i) {
"use strict";
_i_("619:45e94508");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("619:da21812e");
var e = $(".settings-navbar__container"), t = e.offset(), i = this.$el.closest("#bodyconstraint-inner");
if (B.env.b_is_tablet) return _r_();
function n() {
return _i_("619:b3b9d395"), _r_(i ? $("body").outerHeight(!0) - i.outerHeight(!0) :0);
}
$(".settings-navbar__container").width(e.outerWidth()).affix({
offset:{
top:t.top,
bottom:n
}
}), $("body").scrollspy({
target:".settings-navbar__container",
offset:20
}), _r_();
}
}), _r_();
}), B.define("component/mysettings-select-icon", function(e, t, i) {
"use strict";
_i_("619:46b62142");
var n = e("component");
i.exports = n.extend({
setIcon:function() {
_i_("619:860da5c7");
var e, t = $(this);
e = t.find(":selected").data("icon"), t.attr("data-icon", e || t.val()), "americanexpress" == e ? ($("#raf-checkbox").addClass("settings-checkbox--disabled"), $("input[name=b_cc_is_used_for_raf]").prop("disabled", !0)) :$("#raf-checkbox").hasClass("not-enabled") || ($("#raf-checkbox").removeClass("settings-checkbox--disabled"), $("input[name=b_cc_is_used_for_raf]").prop("disabled", !1)), _r_();
},
init:function() {
_i_("619:2279cb33"), this.$el.bind("change", this.setIcon), this.setIcon.call(this.$el), _r_();
}
}), _r_();
}), B.define("component/mysettings-toggle", function(e, t, i) {
"use strict";
_i_("619:bb16f023");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("619:bbbfb0d6");
var t = this.$el.data(), i = e(t.model);
this.templates = {
detail:null
}, this.model = i.getInstance(), this.model.on("dismiss", $.proxy(this, "renderButton")), this.$el.on("dismiss", $.proxy(this, "renderButton")), t.button && (this.templates.button = B.jstmpl(t.button)), t.detail && (this.templates.detail = B.jstmpl(t.detail)), this.renderButton(), _r_();
},
renderButton:function() {
_i_("619:4ed25f1e"), this.$el.html(this.templates.button.render(this.model.load && this.model.load())).find('[data-detail-trigger=""]:not(.-disabled), [data-detail-trigger]:not(.-disabled)').bind("click", $.proxy(this, "renderDetail")).end().children().loadComponents(), this.isDetailsOpen = !1, _r_();
},
renderDetail:function() {
_i_("619:b909762c"), this.model.dismiss(), this.$el.html(this.templates.detail.render(this.model.load && this.model.load())).children().loadComponents(), this.isDetailsOpen = !0, _r_();
},
dismissDetail:function() {
_i_("619:124c011f"), this.isDetailsOpen && this.renderButton(), _r_();
}
}), _r_();
}), B.define("component/mysettings-radio-toggle", function(e, t, i) {
"use strict";
_i_("619:bbce4e95");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("619:a48f8a74");
var e = this.$el;
e.find("[data-toggle-content]").addClass("g-hidden"), e.find("input[name=" + e.data().toggleName + "]").click(function() {
_i_("619:fbff0564"), e.find("[data-toggle-content]").addClass("g-hidden"), e.find("[data-toggle-content=" + $(this).val() + "]").removeClass("g-hidden"), _r_();
}), _r_();
}
}), _r_();
}), B.define("mysettings/mysettings-transport", function(e, t, i) {
_i_("619:524ccffa"), i.exports = {
send:function(e) {
_i_("619:e973a022");
var t = B.promise(), i = B.env.b_secure_domain || B.env.b_secure_hostname;
return $.ajax({
url:i + "/user_settings?aid=" + encodeURIComponent(B.env.b_aid) + "&stype=" + encodeURIComponent(B.env.b_site_type_id) + "&lang=" + encodeURIComponent(B.env.b_lang_for_url),
dataType:"json",
type:"post",
data:JSON.stringify(e),
contentType:"application/json",
success:function(e) {
_i_("619:1afd6699"), e.status && "error" != e.status ? t.fulfill(e) :e.reauthenticate ? location.reload() :t.reject(e), _r_();
},
error:function() {
_i_("619:c80ee625"), t.reject(), _r_();
}
}), _r_(t);
},
resendVerificationEmail:function(e) {
_i_("619:452e4356");
var t = B.promise();
return e.lang = B.env.b_lang, e.aid = B.env.b_aid, $.ajax({
url:(B.env.b_secure_domain || B.env.b_secure_hostname) + "/resend_confirm_email",
dataType:"json",
type:"post",
data:e,
success:function(e) {
_i_("619:50c799d5"), "sent" == e.status ? t.fulfill(e.response) :t.reject(e), _r_();
},
error:function() {
_i_("619:c80ee6251"), t.reject(), _r_();
}
}), _r_(t);
}
}, _r_();
}), B.define("mysettings/mysettings-transport-travel-purpose", function(e, t, i) {
_i_("619:3c6a019e"), i.exports = {
send:function(e) {
_i_("619:87700a71");
var t = B.promise();
return e.lang = B.env.b_lang_for_url, e.aid = B.env.b_aid, e.stype = B.env.b_site_type_id, $.ajax({
url:B.env.b_secure_domain + "/business/update_preferred_travel_purpose?" + B.tools.url.stringify(e),
dataType:"json",
type:"post",
success:function(e) {
_i_("619:c33f858d"), e.status && "error" != e.status ? t.fulfill(e) :e.error_status && "reauthenticate" === e.error_status ? location.reload() :t.reject(e), _r_();
},
error:function() {
_i_("619:09c82b08"), t.reject(), _r_();
}
}), _r_(t);
}
}, _r_();
}), B.define("mysettings/mysettings-transport-book-for", function(e, t, i) {
_i_("619:c616d9f0");
var n = {
BT_SRC_UNKNOWN:0,
BT_SRC_COMPANY_SIGNUP:1,
BT_SRC_COMPANY_SETTINGS:2,
BT_SRC_COMPANY_SEARCH_TOP:3,
BT_SRC_USER_SETTINGS:4,
BT_SRC_COMPANY_SIGNUP_UPGRADE:5
}, r = e("mysettings/mysettings-transport");
i.exports = {
send:function(e) {
_i_("619:dfc74fe5");
var t = {
bb_settings:[ {
op:"update",
bb_common_use:e.role,
bb_update_source:n.BT_SRC_USER_SETTINGS
} ]
};
return _r_(r.send(t));
}
}, _r_();
}), B.define("component/mysettings-remove-bbtool-lite", function(e, t, i) {
_i_("619:fdff7a07");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("619:89c27e3f"), this._$content = $("#remove-bbtool-lite"), this.$el.find(".remove-bbtool-lite__delete").on("click", this._showForm.bind(this)), this._$content.find(".remove-bbtool-lite__confirm").on("click", function(e) {
if (_i_("619:b8b07cc4"), e.preventDefault(), this._disabled) return _r_();
this.send(this._$content.find(".remove-bbtool-lite__feedback").val()), _r_();
}.bind(this)), this._$content.find(".remove-bbtool-lite__keep").on("click", function(e) {
_i_("619:7f6fc67e"), e.preventDefault(), this._hideForm(), _r_();
}.bind(this)), _r_();
},
_showForm:function() {
_i_("619:617b76f9"), this.$el.hide(), this._$content.removeClass("g-hidden"), $("body").scrollTo("#remove-bbtool-lite").find(".remove-bbtool-lite__feedback").focus(), _r_();
},
_hideForm:function() {
_i_("619:ce67c00d"), this.$el.show(), this._$content.addClass("g-hidden"), _r_();
},
send:function(e) {
_i_("619:721b2f45"), this._showLoader(), $.ajax({
url:B.env.b_secure_domain + "/user_settings?aid=" + encodeURIComponent(B.env.b_aid) + "&stype=" + encodeURIComponent(B.env.b_site_type_id) + "&lang=" + encodeURIComponent(B.env.b_lang_for_url),
dataType:"json",
type:"post",
data:JSON.stringify({
bbtool_blackout_account:[ {
op:"delete",
feedback_text:e
} ]
})
}).then(function(e) {
_i_("619:842bde13"), this._hideLoader(), e.is_bbtool_blackout_account_deleted && window.location.reload(!0), _r_();
}.bind(this)), _r_();
},
_showLoader:function() {
_i_("619:9b433674"), this._disabled = !0, this._$content.find(".settings-control").addClass("settings-control--disabled"), this._$content.find(".settings-form__form").addClass("-saving"), _r_();
},
_hideLoader:function() {
_i_("619:c7ffc54e"), this._disabled = !1, this._$content.find(".settings-control").removeClass("settings-control--disabled"), this._$content.find(".settings-form__form").removeClass("-saving"), _r_();
}
}), _r_();
}), B.define("component/mysettings-disconnect-from-bbtool", function(e, t, i) {
_i_("619:38f8ebd4");
var n = e("component"), r = e("static-notification");
i.exports = n.extend({
init:function() {
_i_("619:9e4db3f0"), this._$content = $("#disconnect-from-bbtool"), this.data = this.$el.data(), this.$el.find(".disconnect-from-bbtool__delete").on("click", this._showForm.bind(this)), this._$content.find(".disconnect-from-bbtool__confirm").on("click", function(e) {
if (_i_("619:df878f2c"), e.preventDefault(), this._disabled) return _r_();
this.send(), _r_();
}.bind(this)), this._$content.find(".disconnect-from-bbtool__keep").on("click", function(e) {
_i_("619:7f6fc67e1"), e.preventDefault(), this._hideForm(), _r_();
}.bind(this)), _r_();
},
_showForm:function() {
_i_("619:c99c1754"), this.$el.hide(), this._$content.removeClass("g-hidden"), $("body").scrollTo(this._$content), _r_();
},
_hideForm:function() {
_i_("619:ce67c00d1"), this.$el.show(), this._$content.addClass("g-hidden"), _r_();
},
send:function() {
_i_("619:d0a7e230"), this._showLoader(), $.ajax({
url:B.env.b_secure_domain + "/company/disconnect_from_bbtool_company?aid=" + encodeURIComponent(B.env.b_aid) + "&stype=" + encodeURIComponent(B.env.b_site_type_id) + "&lang=" + encodeURIComponent(B.env.b_lang_for_url),
dataType:"json",
type:"post",
data:JSON.stringify({})
}).then(function(e) {
_i_("619:81f6facb"), "ok" === e.status && e.response && e.response.is_disconnected ? (r.success(B.jstmpl.translations("bbee_settings_leave_success", null, {
company_name:$("<div/>").text(this.data.b_bbtool_company_b_name).html()
})), window.location.reload(!0)) :this._showError(), _r_();
}.bind(this)).fail(this._showError.bind(this)), _r_();
},
_showLoader:function() {
_i_("619:9b4336741"), this._disabled = !0, this._$content.find(".settings-control").addClass("settings-control--disabled"), this._$content.find(".settings-form__form").addClass("-saving"), _r_();
},
_hideLoader:function() {
_i_("619:c7ffc54e1"), this._disabled = !1, this._$content.find(".settings-control").removeClass("settings-control--disabled"), this._$content.find(".settings-form__form").removeClass("-saving"), _r_();
},
_showError:function() {
_i_("619:46d2df81"), this._hideLoader(), r.error("Error"), _r_();
}
}), _r_();
}), B.define("component/mysettings-raf-checkbox", function(e, t, i) {
"use strict";
_i_("619:5535dbe9");
var n = e("component");
i.exports = n.extend({
check:function() {
_i_("619:6a636e71");
var e = $(this).find("input[name=b_cc_is_used_for_raf]").last();
$("#cardtype option[data-icon=americanexpress]").prop("disabled", e.prop("checked")), _r_();
},
init:function() {
_i_("619:5a9b9de9"), this.$el.on("click", this.check), _r_();
}
}), _r_();
}), B.define("component/mysettings-email-editor", function(e, t, i) {
"use strict";
_i_("619:f1940265");
var n = e("component"), r = e("mysettings/mysettings-transport");
i.exports = n.extend({
init:function() {
_i_("619:2c5e5c3f"), this.$input = this.$el.find("input[name=email]"), this.$legend = this.$el.find(".settings-input__legend"), this.$legendText = this.$el.find(".settings-input__legend-text"), this.$error = this.$el.find(".settings-error"), this.$errorText = this.$el.find(".settings-error-text"), this.$warning = this.$el.find(".settings-form__warning"), this.$btnSubmit = this.$el.find("button[type=submit]"), this.$btnCancel = this.$el.find("button[type=reset]"), this.$buttons = this.$el.find("button"), this.originalEmail = this.$input.data("email"), this.originalEmailActive = this.$input.data("email-active"), this.newEmail = this.$input.data("new-email"), this.$input.on("input keyup change", this.inputChanged.bind(this)), this.$btnSubmit.on("click", this.submitClick.bind(this)), this.$btnCancel.on("click", this.cancelClick.bind(this)), this.$el.on("click", ".js-settings-form__email-resend", this.resendClick.bind(this)), this.$el.on("click", ".js-settings-form__email-cancel", this.cancelChangeClick.bind(this)), _r_();
},
val:function() {
return _i_("619:51d668a7"), _r_($.trim(this.$input.val()));
},
isValid:function() {
_i_("619:a72f287a");
var e = this.val();
return _r_(/.+@.+\..+/.test(e) && (this.$input[0].validity ? this.$input[0].validity.valid :!0));
},
disableForm:function(e) {
_i_("619:b6be6d90"), this.disabled = e, this.$el.toggleClass("-loading", e), this.$input.prop("disabled", e), _r_();
},
inputChanged:function() {
_i_("619:59898040");
var e, t = this.val(), i = this.isValid(), n = t !== (this.newEmail || this.originalEmail), r = n && this.newEmail && t === this.originalEmail;
t && i && (r ? e = B.jstmpl.translations("accounts_email_update_new_previous") :n ? e = B.jstmpl.translations("accounts_email_update_new_confirmation") :this.newEmail && (e = B.jstmpl.translations("accounts_email_update_new_current", null, {
old_email_address:this.originalEmail
}))), this.$legendText.text(e), this.$legend.toggleClass("g-hidden", !e), this.$error.toggle(!i), i || this.$errorText.text(B.jstmpl.translations(t ? "accounts_email_update_new_invalid" :"rpp_required_field")), this.$buttons.toggleClass("g-hidden", !n), this.$btnSubmit.toggleClass("settings-control--disabled", !i), _r_();
},
submitClick:function(e) {
if (_i_("619:62c0b04b"), e.preventDefault(), !this.isValid()) return _r_();
this.changeEmail(this.val()), _r_();
},
cancelClick:function(e) {
if (_i_("619:1e1524d9"), e.preventDefault(), this.disabled) return _r_();
this.$input.val(this.newEmail || this.originalEmail).change(), _r_();
},
resendClick:function(t) {
if (_i_("619:76ff0e20"), t.preventDefault(), this.disabled) return _r_();
r.resendVerificationEmail({
email:this.newEmail || this.originalEmail
}).then(function() {
_i_("619:8e1acf29"), e("static-notification").success(B.env.mysettingsAction.b_msg_email_sent), _r_();
}, function() {
_i_("619:eefe2e68"), e("static-notification").error(B.env.mysettingsAction.b_msg_email_not_sent), _r_();
}), _r_();
},
cancelChangeClick:function(e) {
_i_("619:226304a8"), e.preventDefault(), this.changeEmail(this.originalEmail), _r_();
},
changeEmail:function(e) {
if (_i_("619:bf98c9d9"), this.disabled) return _r_();
this.disableForm(!0);
var t = this, i = e === this.originalEmail, n = i ? {
op:"email_u_cancel"
} :{
op:"email_u",
new_email:e
};
n.email = this.originalEmail, r.send({
email:[ n ]
}).then(function() {
_i_("619:95e2bc0c"), t.newEmail = i ? null :e, t.emailChanged(), t.disableForm(!1), _r_();
}, function(e) {
_i_("619:100bd2ec");
var i = B.jstmpl.translations("ext_message_error");
e && e.fields && e.fields.email instanceof Array && e.fields.email.indexOf("is_taken") >= 0 && (i = B.jstmpl.translations("accounts_email_taken_message")), t.$legend.addClass("g-hidden"), t.$error.show(), t.$errorText.text(i), t.disableForm(!1), _r_();
}), _r_();
},
emailChanged:function() {
if (_i_("619:b142ccfd"), this.$legend.toggleClass("g-hidden", !this.newEmail), this.newEmail) {
var e = B.jstmpl.translations("accounts_email_update_new_current", null, {
old_email_address:this.originalEmail
});
this.$legendText.text(e);
}
if (this.$buttons.addClass("g-hidden"), this.$error.hide(), this.newEmail) {
var t = B.jstmpl.translations("ugc_transactional_email_resend_or_cancel", null, {
email:this.newEmail,
start_resend_link:'<a class="js-settings-form__email-resend" href="#">',
end_resend_link:"</a>",
start_cancel_link:'<a class="js-settings-form__email-cancel" href="#">',
end_cancel_link:"</a>"
});
this.$warning.removeClass("g-hidden").html(t);
} else if (this.originalEmailActive) this.$warning.addClass("g-hidden"); else {
var i = B.jstmpl.translations("settings_page_email_not_activated_01", null, {
start_resend_link:'<a class="js-settings-form__email-resend" href="#">',
end_link:"</a>"
});
this.$warning.removeClass("g-hidden").html(i);
}
this.$input.val(this.newEmail || this.originalEmail), _r_();
}
}), _r_();
}), B.define("component/mysettings-field-autosave", function(e, t, i) {
_i_("619:66d06d2e");
var n = e("component"), r = e("mysettings/mysettings-transport"), a = e("events");
i.exports = n.extend({
SAVE_TIMEOUT:500,
SAVE_ANIMATION_TIME:1300,
init:function() {
_i_("619:a56a3820"), this.$input = this.$el.find(":input:first"), this.saveRequested = this.saveRequested.bind(this), this.save = this.save.bind(this), this.savedValue = this.$input.val(), this.initialValue = this.$input.val(), this.name = this.$input.attr("name"), this.$input.on("change input keyup", this.saveRequested), _r_();
},
saveRequested:function() {
_i_("619:ee4331b6"), this.pendingSaveTimeout && clearTimeout(this.pendingSaveTimeout), this.pendingSaveTimeout = setTimeout(this.save, this.SAVE_TIMEOUT), _r_();
},
save:function() {
_i_("619:b1dc3933"), this.pendingSaveTimeout = null;
var e = this.$input.val();
if (e === this.savedValue) return _r_(!0);
if (this.savePromise) return this.saveIsPending = !0, _r_();
this.saving = !0;
var t = {};
t[this.name] = e, this.savePromise = r.send(t).then(this.saveSuccess.bind(this, e), this.saveError.bind(this, e)), this.$el.attr("data-save-state", "saving"), _r_();
},
saveSuccess:function(e) {
if (_i_("619:114ffa6a"), a.emit("mysettings:userChange", {
name:this.name,
value:e
}), this.savedValue = e, this.showErrorMessage(null), this.saved()) {
this.$el.attr("data-save-state", "saved");
var t = this;
setTimeout(function() {
_i_("619:8ff7e580"), "saved" === t.$el.attr("data-save-state") && t.$el.removeAttr("data-save-state"), _r_();
}, this.SAVE_ANIMATION_TIME);
}
_r_();
},
saveError:function(e, t) {
_i_("619:1b609466"), this.saved() && this.$el.attr("data-save-state", "error");
var i = t && t.messages && t.messages[this.name];
i && (this.savedValue = e), this.showErrorMessage(i), _r_();
},
saved:function() {
if (_i_("619:24ef5e38"), this.savePromise = null, this.saveIsPending) {
if (this.saveIsPending = !1, this.save()) return _r_(!0);
return _r_(!1);
}
return _r_(!0);
},
showErrorMessage:function(e) {
if (_i_("619:47e004ed"), !e) return this.errorEl && (this.errorEl.remove(), this.errorEl = null), _r_();
this.errorEl || (this.errorEl = $("<div></div>").addClass("settings-error").insertAfter(this.$el).show()), this.errorEl.text(e), _r_();
}
}), _r_();
}), B.define("component/mysettings-avatar-editor", function(e, t, i) {
_i_("619:921ef95d");
var n = e("profile/avatar-upload"), r = new n(), a = e("component"), s = e("mysettings/mysettings-transport");
i.exports = a.extend({
init:function() {
_i_("619:b8a15734"), this.avatarUploadPromise = null, $(".profile__edit-avatar", this.$el).click(this.avatarUploadClick.bind(this)), $(".profile__remove-avatar", this.$el).click(this.avatarRemoveClick.bind(this)), $(".profile__avatar-upload-file", this.$el).change(this.avatarFileSelected.bind(this)), _r_();
},
avatarUploadClick:function(e) {
if (_i_("619:bfc694c0"), e.preventDefault(), this.avatarUploadPromise) return _r_();
$(".profile__avatar-upload-file", this.$el).click(), _r_();
},
avatarRemoveClick:function(e) {
_i_("619:776ca499"), e.preventDefault(), this.avatarUploadPromise && this.avatarUploadPromise.cancel(), this.removeAvatar(), _r_();
},
avatarFileSelected:function(e) {
_i_("619:ed32fa98");
var t = e.target.files[0];
t && (this.avatarUploadStarted(), this.avatarUploadPromise = r.upload(t, !0), this.avatarUploadPromise.then(this.avatarUploaded.bind(this))["catch"](this.avatarUploadFailed.bind(this))), _r_();
},
avatarUploadStarted:function() {
_i_("619:dbaa1f21"), $(".db-card--content--item-image-editor-img-progress", this.$el).removeClass("g-hidden"), $(".profile__edit-avatar-error", this.$el).addClass("g-hidden"), _r_();
},
avatarUploadComplete:function(e) {
_i_("619:63ee26f6"), this.avatarUploadPromise = null, $(".db-card--content--item-image-editor-img-progress", this.$el).addClass("g-hidden"), $(".profile__edit-avatar-error", this.$el).toggleClass("g-hidden", !e), e && e.message && $(".profile__edit-avatar-error").text(e.message), _r_();
},
avatarUploaded:function(e) {
_i_("619:fe4fde10"), this.avatarUploadComplete(!1), this.displayLoadedAvatar(e.src), _r_();
},
avatarUploadFailed:function(e) {
_i_("619:5d999117"), "cancel" !== e && (this.avatarUploadComplete(e || !0), B.env.b_dev_server && console.error("Avatar upload error", e)), _r_();
},
removeAvatar:function() {
if (_i_("619:9f554353"), !this.avatarUploadPromise) {
var e = this;
this.avatarUploadPromise = new Promise(function(t) {
_i_("619:95777685"), e.avatarUploadStarted(), s.send({
avatar:[ {
op:"remove"
} ]
}).then(function() {
_i_("619:b8526524"), e.avatarUploadComplete(!1), e.displayDefaultAvatar(), t(), _r_();
}, function() {
_i_("619:a3b1aa49"), e.avatarUploadComplete(!1), t(), _r_();
}), _r_();
});
}
_r_();
},
displayDefaultAvatar:function() {
_i_("619:456cca13");
var e = $("img.db-card--content--item-image-editor-img", this.$el);
e.attr("src", e.data("default-avatar-src")), $(".profile__remove-avatar", this.$el).addClass("g-hidden"), _r_();
},
displayLoadedAvatar:function(e) {
_i_("619:3ff8edef"), $("img.db-card--content--item-image-editor-img", this.$el).attr("src", e), $(".profile__remove-avatar", this.$el).removeClass("g-hidden"), _r_();
},
showErrorMessages:function(e) {
_i_("619:509951de"), Object.keys(e).forEach(function(e) {
_i_("619:eba1b335"), $(".profile__field-edit-error[data-field=" + e + "]", this.$el).removeClass("g-hidden"), _r_();
}), _r_();
}
}), _r_();
}), B.define("component/mysettings-reset-password-modal", function(e, t, i) {
_i_("619:a39f7a9d");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("619:09564802"), this.$el.click(function(e) {
_i_("619:9f75b9fc"), e.preventDefault();
var t = $(".m-settings-reset-password-content");
t.toggleClass("visible"), _r_();
}), _r_();
}
}), _r_();
}), B.when({
events:"ready",
action:"mysettings",
condition:B.env && "mdot" === B.env.b_site_type
}).run(function() {
_i_("619:cd41175e"), $("#check-business-address").click(function(e) {
_i_("619:d5617ad9"), $(".mysettings-business-address").toggle(e.target.checked), _r_();
}), _r_();
}), booking.jstmpl("sms_subscription_preferences_dynamic", function() {
_i_("619:5109ce5a");
var e, t = [ "\n    ", '\n\n\n<div class="settings-content">\n    <div class="settings-item u-position-relative">\n        <div class="row-fluid">\n            <div class="sms-subscription-phone-wrapper">\n                ', "/private/raf_personal_settings_page_phone_number/name", '\n            </div>\n            <div class="sms-subscription-settings-wrapper">\n                <label class="settings-checkbox">\n                    <span class="settings-checkbox__box">\n                        <input\n                            type="checkbox"\n                            ', 'checked="checked"', '\n                        >\n                    </span>\n                    <span class="settings-checkbox__title">', "/private/raf_personal_settings_sms_page_turn_on/name", '</span>\n                    \n                    <div class="settings-loader">\n                            <i class="settings-loader__icon"></i>\n                            <span class="settings-loader__saving">', '</span>\n                            <span class="settings-loader__saved">', '</span>\n                    </div>\n                    <span class="settings-checkbox__description settings-checkbox__description--align">', "/private/raf_personal_settings_sms_page_subtext/name", "</span>\n                </label>\n            </div>\n        </div>\n    </div>\n</div>\n", "\n" ], i = [ "fe_phone", "fe_sms_subscription_is_on", "settings_page_saving", "settings_page_saved" ];
return _r_(function(n) {
_i_("619:e4456f3e");
var r = "", a = this.fn;
function s(r) {
return _i_("619:2ebf61b4"), r += [ t[1], (n.unshift({
user_phone_number:a.MB(i[0])
}), e = a.ME(t[2], a.MB, a.MN, null), n.shift(), e), t[3] ].join(""), a.MD(i[1]) && (r += t[4]), r += [ t[5], a.ME(t[6], a.MB, a.MN, null), t[7], a.MB(i[2]), t[8], a.MB(i[3]), t[9], a.ME(t[10], a.MB, a.MN, null), t[11] ].join(""), _r_(r);
}
return r += t[0], r = s(r), r += t[12], _r_(r);
});
}()), B.define("component/sms-subscription-preferences", function(e, t, i) {
_i_("619:7b5339d3");
var n = e("jquery"), r = e("component"), a = e("jstmpl"), s = e("mysettings/mysettings-transport"), o = e("events"), _ = e("et"), c = "PGVfEbWcNRUbEWBSMDGOQFKFaT";
i.exports = r.extend({
userSubscribed:B.env.mysettingsAction.smsSubscriptionPreferences.smsSubscriptionEnabled,
phone:B.env.mysettingsAction.smsSubscriptionPreferences.phone,
init:function() {
_i_("619:0db2e825"), this.render(), this.$el.on("change", 'input[type="checkbox"]', this.handleSubscriptionChange.bind(this)), this.handlePhoneNumberChange(), _r_();
},
render:function() {
_i_("619:2c522ed6");
var e = a("sms_subscription_preferences_dynamic").render({
fe_sms_subscription_is_on:this.userSubscribed,
fe_phone:this.phone
});
this.$el.html(e), _r_();
},
handleSubscriptionChange:function(e) {
_i_("619:322255db");
var t = this, i = n(e.target), r = i.is(":checked"), a = B.promise(), o = {
sms_subscription:Number(r)
};
function l() {
_i_("619:9e65ffc4"), a.fulfill(), t.updateLoadingState(!1), t.userSubscribed = r, r ? _.customGoal(c, 2) :_.customGoal(c, 5), _r_();
}
function d(e) {
_i_("619:b49e1934"), a.reject(e), i.prop("checked", !r), t.userSubscribed = !r, t.updateLoadingState(!1), _.customGoal(c, 3), _r_();
}
return this.updateLoadingState(!0), _r_(s.send(o).then(l, d));
},
updateLoadingState:function(e) {
_i_("619:feca671d"), this.$el.find('input[type="checkbox"]').attr("disabled", e), this.$el.toggleClass("-loading", e), _r_();
},
handlePhoneNumberChange:function() {
_i_("619:ab1551ab"), o.on("mysettings:userChange", function(e) {
_i_("619:1bbdf25d");
var t = e.name, i = e.value;
"phone" === t && (this.phone = i, this.render()), _r_();
}.bind(this)), _r_();
}
}), _r_();
}), B.define("component/messaging-preferences", function(e, t, i) {
_i_("619:da0a7946");
var n = e("component"), r = e("mysettings/mysettings-transport");
i.exports = n.extend({
init:function() {
_i_("619:6c87614e"), this.$checkbox = this.$el.find('[name="messaging_read_status"]'), this.$item = this.$checkbox.closest(".settings-item"), this.value = this.$checkbox.prop("checked"), this.$checkbox.on("change", this.handleChange.bind(this)), this.toggleLoading(!1), _r_();
},
handleChange:function(e) {
_i_("619:4c84a830");
var t = this, i = B.promise(), n = this.$checkbox.prop("checked"), a = {
assistant_read_status_enabled:Number(n)
};
function s() {
_i_("619:d6c83578"), t.value = n, i.fulfill(), t.toggleLoading(!1), _r_();
}
function o(e) {
_i_("619:e2fe2b03"), t.$checkbox.prop("checked", t.value), i.reject(e), t.toggleLoading(!1), _r_();
}
return this.toggleLoading(!0), _r_(r.send(a).then(s, o));
},
toggleLoading:function(e) {
_i_("619:daf02c7b"), this.$item.toggleClass("-loading", e), this.$checkbox.prop("disabled", e), _r_();
}
}), _r_();
}), B.define("component/myreservations/tabs", function(e, t, i) {
_i_("619:08f9c48d");
var n = e("component"), r = n.extend({
init:function() {
_i_("619:f8b9cc2d"), this.activeTab = this.$el.find(".mb_tab__list__item--active").data("tab"), this.$el.find("[data-tab]").on("click", this._selectTab.bind(this)), _r_();
},
wait:function() {
_i_("619:c0ff9cc8"), this.$el.find(".mb_tab__contents").addClass("mb_tab__contents--loading"), _r_();
},
stopWait:function() {
_i_("619:ff8ea93d"), this.$el.find(".mb_tab__contents").removeClass("mb_tab__contents--loading"), _r_();
},
_selectTab:function(e) {
_i_("619:c2e348f6");
var t = $(e.currentTarget).data("tab");
t !== this.activeTab && this.selectTab(t), _r_();
},
selectTab:function(e) {
_i_("619:19779bdc"), this.wait(), this.$el.find('[data-tab="' + e + '"]').addClass("mb_tab__list__item--active"), this.$el.find('[data-tab="' + this.activeTab + '"]').removeClass("mb_tab__list__item--active"), this.activeTab = e, _r_();
}
});
i.exports = r, _r_();
}), B.define("component/tooltip-loc", function(e, t, i) {
"use strict";
_i_("619:970ba861");
var n = e("component"), r = e("jquery");
i.exports = n.extend({
DEFAULTS:{
template:'<div class="component-tooltip off" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
placement:"top",
alignment:"center",
trigger:"hover focus",
animation:"true"
},
init:function() {
_i_("619:610aec21"), this._buildOptions(), this._createTooltip(), this._attachEvents(), this.$el.trigger("ready.B.tooltip", [ this.$tip ]), _r_();
},
_buildOptions:function() {
_i_("619:9ddbfae8"), this.options = r.extend({}, this.DEFAULTS, this.$el.data()), this.options.intangible = "intangible" in this.options, this.options.target && (this.options.target = r(this.options.target).first()), this.options.content || (this.options.content = this.options.title || this.el.title), _r_();
},
_createTooltip:function() {
_i_("619:41ae04fe");
var e = "tooltip-" + this.options.placement + " tooltip-align-" + this.options.alignment;
this.options.extraClass && (e = e + " " + this.options.extraClass), "true" === this.options.animation && (e += " tooltip-animate"), this.$tip = r(this.options.template), this.$tip.addClass(e), this._attachContent(), this.$tip.appendTo(r("body")), this.$el.trigger("inserted.B.tooltip", [ this.$tip ]), _r_();
},
_attachContent:function() {
_i_("619:48323c54");
var e = this.$tip.find(".tooltip-inner");
this.options.target ? e.append(this.options.target.clone()) :(this.options.target = [], e.text(this.options.content)), _r_();
},
_positionTooltip:function() {
_i_("619:7d3c37e5"), this._defineAlignmentVars(), this._placeTooltip(), this._alignTooltip(), this.$tip.css({
left:this.left,
top:this.top
}), _r_();
},
_defineAlignmentVars:function() {
_i_("619:79a44411"), this.elOffset = this.$el.offset(), this.position = "left", this.dimension = "outerWidth", this.options.placement.match(/top|bottom/) && (this.position = "top", this.dimension = "outerHeight"), _r_();
},
_accountForRTL:function(e) {
if (_i_("619:815c5c97"), !B.env.rtl) return _r_(e);
if ("left" === e) return _r_("right");
if ("right" === e) return _r_("left");
return _r_(e);
},
_placeTooltip:function() {
_i_("619:ab5a83db");
var e = this._accountForRTL(this.position), t = this.dimension;
this._accountForRTL(this.options.placement) === e ? this[e] = this.elOffset[e] - this.$tip[t]() :this[e] = this.elOffset[e] + this.$el[t](), _r_();
},
_alignTooltip:function() {
_i_("619:e5dfbb2b");
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
if (_i_("619:c4be165f"), this.options.trigger.match(/manual/)) return _r_();
var e, t, i, n = this.options.trigger.split(" "), a = n.length, s = this.$el.add(this.$tip);
for (this.options.intangible && (s = this.$el), a; a--; ) e = n[a], "click" === e ? this.$el.on("click", r.proxy(this.toggle, this)) :(t = "hover" == e ? "mouseenter" :"focusin", i = "hover" == e ? "mouseleave" :"focusout", s.on(t, r.proxy(this.show, this)), s.on(i, r.proxy(this.hide, this)));
_r_();
},
_trackTransitionEnd:function(e) {
_i_("619:1ec652bb");
var t = this.$el;
this.$tip.one("transitionend", function(i) {
_i_("619:124e5a85"), t.trigger(e, [ this ]), _r_();
}), _r_();
},
show:function() {
_i_("619:be0b1075"), this.$el.trigger("show.B.tooltip", [ this.$tip ]), this._trackTransitionEnd("shown.B.tooltip"), this.$el.attr("aria-describedby", this.el.id), this._positionTooltip(), this.$tip.addClass("on").removeClass("off"), _r_();
},
hide:function() {
_i_("619:3e97dd72"), this.$el.trigger("hide.B.tooltip", [ this.$tip ]), this._trackTransitionEnd("hidden.B.tooltip"), this.$el.removeAttr("aria-describedby"), this.$tip.removeClass("on").addClass("off"), _r_();
},
toggle:function() {
_i_("619:e75904c1"), this.$tip.is(".on") ? this.hide() :this.show(), _r_();
}
}), _r_();
}), B.define("dismiss-item", function(e, t, i) {
_i_("619:4fa1a5b8");
var n = e("jquery");
i.exports = function(e) {
if (_i_("619:ffcf03b7"), !e) throw new Error("param itemId is required");
return _r_(n.ajax({
url:"/dismiss_item",
type:"POST",
data:{
item_id:e
}
}));
}, _r_();
}), B.define("component/dismissible-item/block", function(e, t, i) {
_i_("619:c037f4fa");
var n = e("component"), r = e("dismiss-item"), a = e("read-data-options");
i.exports = n.extend({
init:function() {
_i_("619:60262eac"), this.options = a(this.$el, {
itemId:{
name:"item-id",
type:String,
required:!0
}
}), this._bindEvents(), _r_();
},
_bindEvents:function() {
_i_("619:90d23a28"), this.$el.on("click", ".js-close", function() {
_i_("619:b78bae42"), this._dismissItem(), this.hide(), _r_();
}.bind(this)), _r_();
},
_dismissItem:function() {
return _i_("619:40f33ccd"), _r_(r(this.options.itemId));
},
hide:function() {
_i_("619:9a2d9335"), this.$el.hide(), _r_();
}
}), _r_();
}), B.require("tooltip").addPreset("contact_property_popover", {
position:"bottom middle",
trigger:"click",
customClass:"contact-property-popover",
smartPositioning:!1,
animation:!1,
onCreateTooltipNode:function() {
_i_("619:45a67d6e"), this.$tip.css("pointer-events", "auto"), this.$tip.append(this.$el.next().children()), _r_();
},
onShow:function() {
_i_("619:22c08647");
var e = $.proxy(this.hide, this);
setTimeout($.proxy(function() {
_i_("619:5867376a"), $(document).on("click.contact_property_popover", e), _r_();
}, this), 0), $(window).on("resize.contact_property_popover", e), _r_();
},
onHide:function() {
_i_("619:4531f2e5"), $(document).off(".contact_property_popover"), $(window).off(".contact_property_popover"), _r_();
}
}), B.define("click-out", function(e, t, i) {
"use strict";
_i_("619:fff452bb");
var n = {}, r = !1;
function a() {
_i_("619:c17566ca"), r || (r = !0, document.documentElement.addEventListener ? document.documentElement.addEventListener("click", s) :document.documentElement.attachEvent && document.documentElement.attachEvent("onclick", s)), _r_();
}
function s(e) {
_i_("619:ad210c4a");
var t, i = Object.keys(n), r = {}, a = !1;
if (i.length) for (t = e.target || e.srcElement; t && (i.forEach(function(e) {
_i_("619:efe0fbc1"), n[e].element === t && (r[e] = !0, 1 == i.length && (a = !0)), _r_();
}), !a); ) t = t.parentNode;
i.forEach(function(e) {
_i_("619:bf144444"), !r[e] && n[e] && (n[e].callback.call(!1), o(e)), _r_();
}), _r_();
}
function o(e) {
_i_("619:e16b90f5"), n[e] && delete n[e], _r_();
}
function _() {
_i_("619:d4e2fa88");
var e = Object.keys(n);
e.forEach(function(e) {
_i_("619:ffe354e3"), n[e].callback.call(!1), o(e), _r_();
}), _r_();
}
t.addMonitor = function(e, t) {
_i_("619:4eea37e7"), a();
var i = Math.random();
return "string" == typeof e.jquery && (e = e[0]), setTimeout(function() {
_i_("619:9952e084"), n[i] = {
element:e,
callback:t
}, _r_();
}, 4), _r_(i);
}, t.removeMonitor = o, t.forceClickOut = _, _r_();
}), B.define("component/injector", function(e, t, i) {
_i_("619:788f0ed8");
var n = {};
t.inject = function(e) {
return _i_("619:a60220fd"), n[e] || (n[e] = $("<span></span>").appendTo("body").component(e)), _r_(n[e]);
}, _r_();
}), B.define("data-validator", function(e, t, i) {
"use strict";
_i_("619:6346167d"), t.validate = function(e, t, i) {
switch (_i_("619:b3c7f0ab"), i = i || {}, e) {
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
var a, s = {};
if (s = n(t, 4), !s) return _r_(!1);
return s.year = r(s.year, new Date().getFullYear()), a = new Date(s.year, s.month - 1, s.day), _r_(a.getFullYear() == s.year && a.getMonth() == s.month - 1 && a.getDate() == s.day);

case "birthdate":
var s, o = this.validate("date", t);
if (!o) return _r_(!1);
if (s = n(t, 4), !s) return _r_(!1);
return s = new Date(s.year + (i.minAge ? i.minAge :0), s.month - 1, s.day), _r_(new Date().getTime() > s.getTime());

case "ccdate":
var s, o = this.validate("date", t);
if (!o) return _r_(!1);
if (s = n(t, 4), s.month += 1, s.day = 0, !s) return _r_(!1);
return s = new Date(s.year, s.month - 1, s.day), _r_(new Date().getTime() <= s.getTime());

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
var _ = new RegExp(i.regex, i.regexFlags);
return _r_("string" == typeof t && t.match(_));

case "positive_number":
if (isNaN(parseFloat(t))) return _r_(!1);
return _r_(parseFloat(t) > 0);

default:
throw new Error("data-validation: Invalid validation " + e + ".");
}
_r_();
};
function n(e, t) {
_i_("619:6574896f");
var i, n = {};
if (e.day && e.month && e.year) return e.day = +e.day, e.month = +e.month, e.year = +e.year, _r_(e);
if ("string" == typeof e) {
var r = new RegExp("^(d{" + t + ",4})-(d{1,2})-(d{1,2})$");
if (i = e.match(r)) return _r_(!1);
return n.day = +i[3], n.month = +i[2], n.year = +i[1], _r_(n);
}
return _r_(!1);
}
function r(e, t) {
_i_("619:a2ce0b11");
var i = 100;
if (e >= i) return _r_(e);
var n = t, r = t % i;
if (e != r) {
var a = Math.floor(t / i) * i;
n = a + e + (e >= r ? 0 :i);
}
return _r_(n);
}
_r_();
}), B.define("booking-store", [ "event-emitter" ], function(e) {
_i_("619:73512cbd");
function t(t) {
_i_("619:e128c6ba"), t || (t = {}), this._data = {}, e.extend(this), _r_();
}
return t.prototype.initFromData = function(e) {
_i_("619:1fc89d0a");
var t, i, n = e.data(), r = {};
for (t in n) if (n.hasOwnProperty(t)) {
if ("events" == t || "handle" == t) continue;
i = t.replace(/-([a-z])/g, function(e, t) {
return _i_("619:53df87ea"), _r_(t.toUpperCase());
}), r[i] = n[t];
}
this.initFromVar(r), _r_();
}, t.prototype.initFromForm = function(e) {
_i_("619:f5261feb");
for (var t, i = 0, n = e.serializeArray(), r = (n.length, {}); t = n[i]; i++) r[t.name] = t.value;
this.initFromVar(r), _r_();
}, t.prototype.initFromVar = function(e) {
_i_("619:f1856c78"), "object" == typeof e && (this._data = e, this.emit("data")), _r_();
}, t.prototype.get = function(e) {
return _i_("619:86afd500"), _r_(void 0 === e ? this._data :this._data[e]);
}, t.prototype.set = function(e, t) {
if (_i_("619:6495effd"), void 0 === e) throw new Error("Cannot Store.set with undefined first argument.");
if ("object" == typeof e && void 0 === t) {
var i = e;
for (e in i) i.hasOwnProperty(e) && (this._data[e] = i[e]);
} else this._data[e] = t;
this.emit("data"), _r_();
}, _r_(t);
}), B.define("timer", function(e, t, i) {
_i_("619:2e42d6e3");
var n = {
paused:"paused",
running:"running"
};
function r(e, t) {
_i_("619:fec7540a");
var i, r, a, s = t, o = !1;
this.pause = function() {
if (_i_("619:fd469644"), a === n.paused) return _r_();
a = n.paused, clearTimeout(i), s -= new Date() - r, _r_();
}, this.resume = function() {
if (_i_("619:091160df"), o || a === n.running) return _r_(!1);
a = n.running, r = new Date(), clearTimeout(i), i = setTimeout(function() {
_i_("619:4d25bb88"), e(), o = !0, _r_();
}, s), _r_();
}, this.resume(), _r_();
}
t.Timer = r, _r_();
}), B.define("utils", function(e, t, i) {
_i_("619:1ae1366f"), t.assertExists = function(e, t) {
if (_i_("619:9d42554a"), "object" != typeof e || !(t in e)) throw new Error("Property " + t + " is not found");
_r_();
}, t.camelCaseKeys = function(e) {
_i_("619:dbbbdfa4");
var t, i, n = {};
for (t in e) e.hasOwnProperty(t) && (i = t.replace(/-([a-zA-Z])/g, function(e, t) {
return _i_("619:aefe3784"), _r_(t.toUpperCase());
}), n[i] = e[t]);
return _r_(n);
}, t.nodeData = function(e) {
_i_("619:c0d6317e"), e.jquery && (e = e[0]), this.assertExists(e, "attributes");
var t, i, n, r = {};
for (t = 0, i = e.attributes.length; i > t; t++) n = e.attributes[t], n && 0 == n.name.indexOf("data-") && (r[n.name.replace(/^data-/, "")] = n.value);
return _r_(this.camelCaseKeys(r));
}, _r_();
}), function(e) {
_i_("619:dd27df8a"), e.flexslider = function(t, i) {
_i_("619:89a02281");
var n = t;
n.init = function() {
if (_i_("619:b8473131"), n.vars = e.extend({}, e.flexslider.defaults, i), n.data("flexslider", !0), n.container = e(".slides", n), n.slides = e(".slides > li", n), n.count = n.slides.length, n.animating = !1, n.currentSlide = n.vars.slideToStart, n.animatingTo = n.currentSlide, n.atEnd = 0 == n.currentSlide ? !0 :!1, n.eventType = "ontouchstart" in document.documentElement ? "touchstart" :"click", n.cloneCount = 0, n.cloneOffset = 0, n.manualPause = !1, n.vertical = "vertical" == n.vars.slideDirection, n.prop = n.vertical ? "top" :"marginLeft", n.args = {}, n.transitions = "webkitTransition" in document.body.style, n.transitions && (n.prop = "-webkit-transform"), "" != n.vars.controlsContainer && (n.controlsContainer = e(n.vars.controlsContainer).eq(e(".slides").index(n.container)), n.containerExists = n.controlsContainer.length > 0), "" != n.vars.manualControls && (n.manualControls = e(n.vars.manualControls, n.containerExists ? n.controlsContainer :n), n.manualExists = n.manualControls.length > 0), n.vars.randomize && (n.slides.sort(function() {
return _i_("619:d0fc5239"), _r_(Math.round(Math.random()) - .5);
}), n.container.empty().append(n.slides)), "slide" == n.vars.animation.toLowerCase()) {
n.transitions && n.setTransition(0), n.css({
overflow:"hidden"
}), n.vars.animationLoop && (n.cloneCount = 2, n.cloneOffset = 1, n.container.append(n.slides.filter(":first").clone().addClass("clone")).prepend(n.slides.filter(":last").clone().addClass("clone"))), n.newSlides = e(".slides > li", n);
var t = -1 * (n.currentSlide + n.cloneOffset);
n.vertical ? (n.newSlides.css({
display:"block",
width:"100%",
"float":"left"
}), n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
_i_("619:b02e55cc"), n.css({
position:"relative"
}).height(n.slides.filter(":first").height()), n.args[n.prop] = n.transitions ? "translate3d(0," + t * n.height() + "px,0)" :t * n.height() + "px", n.container.css(n.args), _r_();
}, 100)) :(n.args[n.prop] = n.transitions ? "translate3d(" + t * n.width() + "px,0,0)" :t * n.width() + "px", n.container.width(200 * (n.count + n.cloneCount) + "%").css(n.args), setTimeout(function() {
_i_("619:0df3c7e0"), n.newSlides.width(n.width()).css({
"float":"left",
display:"block"
}), _r_();
}, 100));
} else n.transitions = !1, n.slides.css({
width:"100%",
"float":"left",
marginRight:"-100%"
}).eq(n.currentSlide).fadeIn(n.vars.animationDuration);
if (n.vars.controlNav) {
if (n.manualExists) n.controlNav = n.manualControls; else {
for (var r = e('<ol class="flex-control-nav"></ol>'), a = 1, s = 0; s < n.count; s++) r.append("<li><a>" + a + "</a></li>"), a++;
n.containerExists ? (e(n.controlsContainer).append(r), n.controlNav = e(".flex-control-nav li a", n.controlsContainer)) :(n.append(r), n.controlNav = e(".flex-control-nav li a", n));
}
n.controlNav.eq(n.currentSlide).addClass("active"), n.controlNav.bind(n.eventType, function(t) {
_i_("619:df145d04"), t.preventDefault(), e(this).hasClass("active") || (n.controlNav.index(e(this)) > n.currentSlide ? n.direction = "next" :n.direction = "prev", n.flexAnimate(n.controlNav.index(e(this)), n.vars.pauseOnAction)), _r_();
});
}
if (n.vars.directionNav) {
var o = e('<ul class="flex-direction-nav"><li><a class="prev" href="#">' + n.vars.prevText + '</a></li><li><a class="next" href="#">' + n.vars.nextText + "</a></li></ul>");
n.containerExists ? (e(n.controlsContainer).append(o), n.directionNav = e(".flex-direction-nav li a", n.controlsContainer)) :(n.append(o), n.directionNav = e(".flex-direction-nav li a", n)), n.vars.animationLoop || (0 == n.currentSlide ? n.directionNav.filter(".prev").addClass("disabled") :n.currentSlide == n.count - 1 && n.directionNav.filter(".next").addClass("disabled")), n.directionNav.bind(n.eventType, function(t) {
_i_("619:e2bbc594"), t.preventDefault();
var i = e(this).hasClass("next") ? n.getTarget("next") :n.getTarget("prev");
n.canAdvance(i) && n.flexAnimate(i, n.vars.pauseOnAction), _r_();
});
}
if (n.vars.keyboardNav && 1 == e("ul.slides").length) {
function _(e) {
if (_i_("619:e37b0a18"), n.animating) return _r_();
if (39 != e.keyCode && 37 != e.keyCode) return _r_();
if (39 == e.keyCode) var t = n.getTarget("next"); else if (37 == e.keyCode) var t = n.getTarget("prev");
n.canAdvance(t) && n.flexAnimate(t, n.vars.pauseOnAction), _r_();
}
e(document).bind("keyup", _);
}
if (n.vars.mousewheel && (n.mousewheelEvent = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" :"mousewheel", n.bind(n.mousewheelEvent, function(e) {
_i_("619:e769672d"), e.preventDefault(), e = e ? e :window.event;
var t = e.detail ? -1 * e.detail :e.wheelDelta / 40, i = 0 > t ? n.getTarget("next") :n.getTarget("prev");
n.canAdvance(i) && n.flexAnimate(i, n.vars.pauseOnAction), _r_();
})), n.vars.slideshow && (n.vars.pauseOnHover && n.vars.slideshow && n.hover(function() {
_i_("619:0f66365b"), n.pause(), _r_();
}, function() {
_i_("619:c9e726a9"), n.manualPause || n.resume(), _r_();
}), n.animatedSlides = setInterval(n.animateSlides, n.vars.slideshowSpeed)), n.vars.pausePlay) {
var c = e('<div class="flex-pauseplay"><span></span></div>');
n.containerExists ? (n.controlsContainer.append(c), n.pausePlay = e(".flex-pauseplay span", n.controlsContainer)) :(n.append(c), n.pausePlay = e(".flex-pauseplay span", n));
var l = n.vars.slideshow ? "pause" :"play";
n.pausePlay.addClass(l).text("pause" == l ? n.vars.pauseText :n.vars.playText), n.pausePlay.bind(n.eventType, function(t) {
_i_("619:df5ef9fb"), t.preventDefault(), e(this).hasClass("pause") ? (n.pause(), n.manualPause = !0) :(n.resume(), n.manualPause = !1), _r_();
});
}
if ("ontouchstart" in document.documentElement) {
var d, u, h, f, p, m, b = !1;
n.each(function() {
_i_("619:89b393e3"), "ontouchstart" in document.documentElement && this.addEventListener("touchstart", g, !1), _r_();
});
function g(e) {
_i_("619:3a3f360f"), n.animating ? e.preventDefault() :1 == e.touches.length && (n.pause(), f = n.vertical ? n.height() :n.width(), m = Number(new Date()), h = n.vertical ? (n.currentSlide + n.cloneOffset) * n.height() :(n.currentSlide + n.cloneOffset) * n.width(), d = n.vertical ? e.touches[0].pageY :e.touches[0].pageX, u = n.vertical ? e.touches[0].pageX :e.touches[0].pageY, n.setTransition(0), this.addEventListener("touchmove", v, !1), this.addEventListener("touchend", y, !1)), _r_();
}
function v(e) {
_i_("619:65ccdd62"), p = n.vertical ? d - e.touches[0].pageY :d - e.touches[0].pageX, b = n.vertical ? Math.abs(p) < Math.abs(e.touches[0].pageX - u) :Math.abs(p) < Math.abs(e.touches[0].pageY - u), b || (e.preventDefault(), "slide" == n.vars.animation && n.transitions && (n.vars.animationLoop || (p /= 0 == n.currentSlide && 0 > p || n.currentSlide == n.count - 1 && p > 0 ? Math.abs(p) / f + 2 :1), n.args[n.prop] = n.vertical ? "translate3d(0," + (-h - p) + "px,0)" :"translate3d(" + (-h - p) + "px,0,0)", n.container.css(n.args))), _r_();
}
function y(e) {
if (_i_("619:d5891294"), n.animating = !1, n.animatingTo == n.currentSlide && !b && null != p) {
var t = p > 0 ? n.getTarget("next") :n.getTarget("prev");
n.canAdvance(t) && Number(new Date()) - m < 550 && Math.abs(p) > 20 || Math.abs(p) > f / 2 ? n.flexAnimate(t, n.vars.pauseOnAction) :n.flexAnimate(n.currentSlide, n.vars.pauseOnAction);
}
this.removeEventListener("touchmove", v, !1), this.removeEventListener("touchend", y, !1), d = null, u = null, p = null, h = null, _r_();
}
}
"slide" == n.vars.animation.toLowerCase() && e(window).resize(function() {
_i_("619:7dc03dd1"), n.animating || (n.vertical ? (n.height(n.slides.filter(":first").height()), n.args[n.prop] = -1 * (n.currentSlide + n.cloneOffset) * n.slides.filter(":first").height() + "px", n.transitions && (n.setTransition(0), n.args[n.prop] = n.vertical ? "translate3d(0," + n.args[n.prop] + ",0)" :"translate3d(" + n.args[n.prop] + ",0,0)"), n.container.css(n.args)) :(n.newSlides.width(n.width()), n.args[n.prop] = -1 * (n.currentSlide + n.cloneOffset) * n.width() + "px", n.transitions && (n.setTransition(0), n.args[n.prop] = n.vertical ? "translate3d(0," + n.args[n.prop] + ",0)" :"translate3d(" + n.args[n.prop] + ",0,0)"), n.container.css(n.args))), _r_();
}), n.vars.start(n), _r_();
}, n.flexAnimate = function(e, t) {
if (_i_("619:d2bc315f"), !n.animating) if (n.animating = !0, n.animatingTo = e, n.vars.before(n), t && n.pause(), n.vars.controlNav && n.controlNav.removeClass("active").eq(e).addClass("active"), n.atEnd = 0 == e || e == n.count - 1 ? !0 :!1, !n.vars.animationLoop && n.vars.directionNav && (0 == e ? n.directionNav.removeClass("disabled").filter(".prev").addClass("disabled") :e == n.count - 1 ? n.directionNav.removeClass("disabled").filter(".next").addClass("disabled") :n.directionNav.removeClass("disabled")), n.vars.animationLoop || e != n.count - 1 || (n.pause(), n.vars.end(n)), "slide" == n.vars.animation.toLowerCase()) {
var i = n.vertical ? n.slides.filter(":first").height() :n.slides.filter(":first").width();
0 == n.currentSlide && e == n.count - 1 && n.vars.animationLoop && "next" != n.direction ? n.slideString = "0px" :n.currentSlide == n.count - 1 && 0 == e && n.vars.animationLoop && "prev" != n.direction ? n.slideString = -1 * (n.count + 1) * i + "px" :n.slideString = -1 * (e + n.cloneOffset) * i + "px", n.args[n.prop] = n.slideString, n.transitions ? (n.setTransition(n.vars.animationDuration), n.args[n.prop] = n.vertical ? "translate3d(0," + n.slideString + ",0)" :"translate3d(" + n.slideString + ",0,0)", n.container.css(n.args).one("webkitTransitionEnd transitionend", function() {
_i_("619:0fdfb781"), n.wrapup(i), _r_();
})) :n.container.animate(n.args, n.vars.animationDuration, function() {
_i_("619:0fdfb7811"), n.wrapup(i), _r_();
});
} else n.slides.eq(n.currentSlide).fadeOut(n.vars.animationDuration), n.slides.eq(e).fadeIn(n.vars.animationDuration, function() {
_i_("619:8d9a1670"), n.wrapup(), _r_();
});
_r_();
}, n.wrapup = function(e) {
_i_("619:2c6f7040"), "slide" == n.vars.animation && (0 == n.currentSlide && n.animatingTo == n.count - 1 && n.vars.animationLoop ? (n.args[n.prop] = -1 * n.count * e + "px", n.transitions && (n.setTransition(0), n.args[n.prop] = n.vertical ? "translate3d(0," + n.args[n.prop] + ",0)" :"translate3d(" + n.args[n.prop] + ",0,0)"), n.container.css(n.args)) :n.currentSlide == n.count - 1 && 0 == n.animatingTo && n.vars.animationLoop && (n.args[n.prop] = -1 * e + "px", n.transitions && (n.setTransition(0), n.args[n.prop] = n.vertical ? "translate3d(0," + n.args[n.prop] + ",0)" :"translate3d(" + n.args[n.prop] + ",0,0)"), n.container.css(n.args))), n.animating = !1, n.currentSlide = n.animatingTo, n.vars.after(n), _r_();
}, n.animateSlides = function() {
_i_("619:9dc6047a"), n.animating || n.flexAnimate(n.getTarget("next")), _r_();
}, n.pause = function() {
_i_("619:a0654559"), clearInterval(n.animatedSlides), n.vars.pausePlay && n.pausePlay.removeClass("pause").addClass("play").text(n.vars.playText), _r_();
}, n.resume = function() {
_i_("619:b139b069"), n.animatedSlides = setInterval(n.animateSlides, n.vars.slideshowSpeed), n.vars.pausePlay && n.pausePlay.removeClass("play").addClass("pause").text(n.vars.pauseText), _r_();
}, n.canAdvance = function(e) {
return _i_("619:8262dcc1"), _r_(!n.vars.animationLoop && n.atEnd ? 0 == n.currentSlide && e == n.count - 1 && "next" != n.direction ? !1 :n.currentSlide == n.count - 1 && 0 == e && "next" == n.direction ? !1 :!0 :!0);
}, n.getTarget = function(e) {
return _i_("619:c3a81b75"), n.direction = e, _r_("next" == e ? n.currentSlide == n.count - 1 ? 0 :n.currentSlide + 1 :0 == n.currentSlide ? n.count - 1 :n.currentSlide - 1);
}, n.setTransition = function(e) {
_i_("619:61a0022f"), n.container.css({
"-webkit-transition-duration":e / 1e3 + "s"
}), _r_();
}, n.init(), _r_();
}, e.flexslider.defaults = {
animation:"fade",
slideDirection:"horizontal",
slideshow:!0,
slideshowSpeed:7e3,
animationDuration:600,
directionNav:!0,
controlNav:!0,
keyboardNav:!0,
mousewheel:!1,
prevText:"Previous",
nextText:"Next",
pausePlay:!1,
pauseText:"Pause",
playText:"Play",
randomize:!1,
slideToStart:0,
animationLoop:!0,
pauseOnAction:!0,
pauseOnHover:!1,
controlsContainer:"",
manualControls:"",
start:function() {},
before:function() {},
after:function() {},
end:function() {}
}, e.fn.flexslider = function(t) {
return _i_("619:7aa8325d"), _r_(this.each(function() {
_i_("619:0532acf8"), 1 == e(this).find(".slides li").length ? e(this).find(".slides li").fadeIn(400) :1 != e(this).data("flexslider") && new e.flexslider(e(this), t), _r_();
}));
}, _r_();
}(jQuery), function(e) {
_i_("619:55dbfebd"), "function" == typeof define && define.amd ? define([ "jquery" ], e) :e(jQuery), _r_();
}(function(e) {
"use strict";
_i_("619:7fb1615c");
var t = {}, i = Math.max, n = Math.min;
t.c = {}, t.c.d = e(document), t.c.t = function(e) {
return _i_("619:54e1ff7e"), _r_(e.originalEvent.touches.length - 1);
}, t.o = function() {
_i_("619:665b7a01");
var i = this;
this.o = null, this.$ = null, this.i = null, this.g = null, this.v = null, this.cv = null, this.x = 0, this.y = 0, this.w = 0, this.h = 0, this.$c = null, this.c = null, this.t = 0, this.isInit = !1, this.fgColor = null, this.pColor = null, this.dH = null, this.cH = null, this.eH = null, this.rH = null, this.scale = 1, this.relative = !1, this.relativeWidth = !1, this.relativeHeight = !1, this.$div = null, this.run = function() {
_i_("619:047fcb78");
var t = function(e, t) {
_i_("619:03693557");
var n;
for (n in t) i.o[n] = t[n];
i._carve().init(), i._configure()._draw(), _r_();
};
if (this.$.data("kontroled")) return _r_();
if (this.$.data("kontroled", !0), this.extend(), this.o = e.extend({
min:void 0 !== this.$.data("min") ? this.$.data("min") :0,
max:void 0 !== this.$.data("max") ? this.$.data("max") :100,
stopper:!0,
readOnly:this.$.data("readonly") || "readonly" === this.$.attr("readonly"),
cursor:this.$.data("cursor") === !0 && 30 || this.$.data("cursor") || 0,
thickness:this.$.data("thickness") && Math.max(Math.min(this.$.data("thickness"), 1), .01) || .35,
lineCap:this.$.data("linecap") || "butt",
width:this.$.data("width") || 200,
height:this.$.data("height") || 200,
displayInput:null == this.$.data("displayinput") || this.$.data("displayinput"),
displayPrevious:this.$.data("displayprevious"),
fgColor:this.$.data("fgcolor") || "#87CEEB",
inputColor:this.$.data("inputcolor"),
font:this.$.data("font") || "Arial",
fontWeight:this.$.data("font-weight") || "bold",
inline:!1,
step:this.$.data("step") || 1,
rotation:this.$.data("rotation"),
draw:null,
change:null,
cancel:null,
release:null,
format:function(e) {
return _i_("619:fdb2446f"), _r_(e);
},
parse:function(e) {
return _i_("619:dcdd4035"), _r_(parseFloat(e));
}
}, this.o), this.o.flip = "anticlockwise" === this.o.rotation || "acw" === this.o.rotation, this.o.inputColor || (this.o.inputColor = this.o.fgColor), this.$.is("fieldset") ? (this.v = {}, this.i = this.$.find("input"), this.i.each(function(t) {
_i_("619:4f0cf22d");
var n = e(this);
i.i[t] = n, i.v[t] = i.o.parse(n.val()), n.bind("change blur", function() {
_i_("619:6638b6d2");
var e = {};
e[t] = n.val(), i.val(e), _r_();
}), _r_();
}), this.$.find("legend").remove()) :(this.i = this.$, this.v = this.o.parse(this.$.val()), "" === this.v && (this.v = this.o.min), this.$.bind("change blur", function() {
_i_("619:0463161e"), i.val(i._validate(i.o.parse(i.$.val()))), _r_();
})), !this.o.displayInput && this.$.hide(), this.$c = e(document.createElement("canvas")).attr({
width:this.o.width,
height:this.o.height
}), this.$div = e('<div style="' + (this.o.inline ? "display:inline;" :"") + "width:" + this.o.width + "px;height:" + this.o.height + 'px;"></div>'), this.$.wrap(this.$div).before(this.$c), this.$div = this.$.parent(), "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(this.$c[0]), this.c = this.$c[0].getContext ? this.$c[0].getContext("2d") :null, !this.c) throw {
name:"CanvasNotSupportedException",
message:"Canvas not supported. Please use excanvas on IE8.0.",
toString:function() {
return _i_("619:81c7c0f4"), _r_(this.name + ": " + this.message);
}
};
return this.scale = (window.devicePixelRatio || 1) / (this.c.webkitBackingStorePixelRatio || this.c.mozBackingStorePixelRatio || this.c.msBackingStorePixelRatio || this.c.oBackingStorePixelRatio || this.c.backingStorePixelRatio || 1), this.relativeWidth = this.o.width % 1 !== 0 && this.o.width.indexOf("%"), this.relativeHeight = this.o.height % 1 !== 0 && this.o.height.indexOf("%"), this.relative = this.relativeWidth || this.relativeHeight, this._carve(), this.v instanceof Object ? (this.cv = {}, this.copy(this.v, this.cv)) :this.cv = this.v, this.$.bind("configure", t).parent().bind("configure", t), this._listen()._configure()._xy().init(), this.isInit = !0, this.$.val(this.o.format(this.v)), this._draw(), _r_(this);
}, this._carve = function() {
if (_i_("619:ea6e0071"), this.relative) {
var e = this.relativeWidth ? this.$div.parent().width() * parseInt(this.o.width) / 100 :this.$div.parent().width(), t = this.relativeHeight ? this.$div.parent().height() * parseInt(this.o.height) / 100 :this.$div.parent().height();
this.w = this.h = Math.min(e, t);
} else this.w = this.o.width, this.h = this.o.height;
return this.$div.css({
width:this.w + "px",
height:this.h + "px"
}), this.$c.attr({
width:this.w,
height:this.h
}), 1 !== this.scale && (this.$c[0].width = this.$c[0].width * this.scale, this.$c[0].height = this.$c[0].height * this.scale, this.$c.width(this.w), this.$c.height(this.h)), _r_(this);
}, this._draw = function() {
_i_("619:3fca842a");
var e = !0;
i.g = i.c, i.clear(), i.dH && (e = i.dH()), e !== !1 && i.draw(), _r_();
}, this._touch = function(e) {
_i_("619:7a4d13d9");
var n = function(e) {
_i_("619:832a96d8");
var t = i.xy2val(e.originalEvent.touches[i.t].pageX, e.originalEvent.touches[i.t].pageY);
if (t == i.cv) return _r_();
if (i.cH && i.cH(t) === !1) return _r_();
i.change(i._validate(t)), i._draw(), _r_();
};
return this.t = t.c.t(e), n(e), t.c.d.bind("touchmove.k", n).bind("touchend.k", function() {
_i_("619:83485ef4"), t.c.d.unbind("touchmove.k touchend.k"), i.val(i.cv), _r_();
}), _r_(this);
}, this._mouse = function(e) {
_i_("619:2dbef180");
var n = function(e) {
_i_("619:c79aeab8");
var t = i.xy2val(e.pageX, e.pageY);
if (t == i.cv) return _r_();
if (i.cH && i.cH(t) === !1) return _r_();
i.change(i._validate(t)), i._draw(), _r_();
};
return n(e), t.c.d.bind("mousemove.k", n).bind("keyup.k", function(e) {
if (_i_("619:8946f595"), 27 === e.keyCode) {
if (t.c.d.unbind("mouseup.k mousemove.k keyup.k"), i.eH && i.eH() === !1) return _r_();
i.cancel();
}
_r_();
}).bind("mouseup.k", function(e) {
_i_("619:195fcb5e"), t.c.d.unbind("mousemove.k mouseup.k keyup.k"), i.val(i.cv), _r_();
}), _r_(this);
}, this._xy = function() {
_i_("619:8d1eb104");
var e = this.$c.offset();
return this.x = e.left, this.y = e.top, _r_(this);
}, this._listen = function() {
return _i_("619:ade9b0d5"), this.o.readOnly ? this.$.attr("readonly", "readonly") :(this.$c.bind("mousedown", function(e) {
_i_("619:c95f9751"), e.preventDefault(), i._xy()._mouse(e), _r_();
}).bind("touchstart", function(e) {
_i_("619:5c556cfd"), e.preventDefault(), i._xy()._touch(e), _r_();
}), this.listen()), this.relative && e(window).resize(function() {
_i_("619:92480dfc"), i._carve().init(), i._draw(), _r_();
}), _r_(this);
}, this._configure = function() {
return _i_("619:2ea78168"), this.o.draw && (this.dH = this.o.draw), this.o.change && (this.cH = this.o.change), this.o.cancel && (this.eH = this.o.cancel), this.o.release && (this.rH = this.o.release), this.o.displayPrevious ? (this.pColor = this.h2rgba(this.o.fgColor, "0.4"), this.fgColor = this.h2rgba(this.o.fgColor, "0.6")) :this.fgColor = this.o.fgColor, _r_(this);
}, this._clear = function() {
_i_("619:f887b7ba"), this.$c[0].width = this.$c[0].width, _r_();
}, this._validate = function(e) {
return _i_("619:5e5893f0"), _r_(~~((0 > e ? -.5 :.5) + e / this.o.step) * this.o.step);
}, this.listen = function() {}, this.extend = function() {}, this.init = function() {}, this.change = function(e) {}, this.val = function(e) {}, this.xy2val = function(e, t) {}, this.draw = function() {}, this.clear = function() {
_i_("619:045d09ae"), this._clear(), _r_();
}, this.h2rgba = function(e, t) {
_i_("619:1702cfc9");
var i;
return e = e.substring(1, 7), i = [ parseInt(e.substring(0, 2), 16), parseInt(e.substring(2, 4), 16), parseInt(e.substring(4, 6), 16) ], _r_("rgba(" + i[0] + "," + i[1] + "," + i[2] + "," + t + ")");
}, this.copy = function(e, t) {
_i_("619:90ff0f22");
for (var i in e) t[i] = e[i];
_r_();
}, _r_();
}, t.Dial = function() {
_i_("619:3f0378a9"), t.o.call(this), this.startAngle = null, this.xy = null, this.radius = null, this.lineWidth = null, this.cursorExt = null, this.w2 = null, this.PI2 = 2 * Math.PI, this.extend = function() {
_i_("619:554c7fbd"), this.o = e.extend({
bgColor:this.$.data("bgcolor") || "#EEEEEE",
angleOffset:this.$.data("angleoffset") || 0,
angleArc:this.$.data("anglearc") || 360,
inline:!0
}, this.o), _r_();
}, this.val = function(e, t) {
if (_i_("619:bea9f6e7"), null == e) return _r_(this.v);
if (e = this.o.parse(e), t !== !1 && e != this.v && this.rH && this.rH(e) === !1) return _r_();
this.cv = this.o.stopper ? i(n(e, this.o.max), this.o.min) :e, this.v = this.cv, this.$.val(this.o.format(this.v)), this._draw(), _r_();
}, this.xy2val = function(e, t) {
_i_("619:352a3910");
var r, a;
return r = Math.atan2(e - (this.x + this.w2), -(t - this.y - this.w2)) - this.angleOffset, this.o.flip && (r = this.angleArc - r - this.PI2), this.angleArc != this.PI2 && 0 > r && r > -.5 ? r = 0 :0 > r && (r += this.PI2), a = ~~(.5 + r * (this.o.max - this.o.min) / this.angleArc) + this.o.min, this.o.stopper && (a = i(n(a, this.o.max), this.o.min)), _r_(a);
}, this.listen = function() {
_i_("619:09aa9b13");
var t, r, a, s, o = this, _ = function(e) {
_i_("619:e8a088de"), e.preventDefault();
var a = e.originalEvent, s = a.detail || a.wheelDeltaX, _ = a.detail || a.wheelDeltaY, c = o._validate(o.o.parse(o.$.val())) + (s > 0 || _ > 0 ? o.o.step :0 > s || 0 > _ ? -o.o.step :0);
c = i(n(c, o.o.max), o.o.min), o.val(c, !1), o.rH && (clearTimeout(t), t = setTimeout(function() {
_i_("619:a59316a3"), o.rH(c), t = null, _r_();
}, 100), r || (r = setTimeout(function() {
_i_("619:23261015"), t && o.rH(c), r = null, _r_();
}, 200))), _r_();
}, c = 1, l = {
37:-o.o.step,
38:o.o.step,
39:o.o.step,
40:-o.o.step
};
this.$.bind("keydown", function(t) {
_i_("619:de103fba");
var r = t.keyCode;
if (r >= 96 && 105 >= r && (r = t.keyCode = r - 48), a = parseInt(String.fromCharCode(r)), isNaN(a) && (13 !== r && 8 !== r && 9 !== r && 189 !== r && (190 !== r || o.$.val().match(/\./)) && t.preventDefault(), e.inArray(r, [ 37, 38, 39, 40 ]) > -1)) {
t.preventDefault();
var _ = o.o.parse(o.$.val()) + l[r] * c;
o.o.stopper && (_ = i(n(_, o.o.max), o.o.min)), o.change(_), o._draw(), s = window.setTimeout(function() {
_i_("619:54da2555"), c *= 2, _r_();
}, 30);
}
_r_();
}).bind("keyup", function(e) {
_i_("619:9090be15"), isNaN(a) ? s && (window.clearTimeout(s), s = null, c = 1, o.val(o.$.val())) :o.$.val() > o.o.max && o.$.val(o.o.max) || o.$.val() < o.o.min && o.$.val(o.o.min), _r_();
}), this.$c.bind("mousewheel DOMMouseScroll", _), this.$.bind("mousewheel DOMMouseScroll", _), _r_();
}, this.init = function() {
_i_("619:55037feb"), (this.v < this.o.min || this.v > this.o.max) && (this.v = this.o.min), this.$.val(this.v), this.w2 = this.w / 2, this.cursorExt = this.o.cursor / 100, this.xy = this.w2 * this.scale, this.lineWidth = this.xy * this.o.thickness, this.lineCap = this.o.lineCap, this.radius = this.xy - this.lineWidth / 2, this.o.angleOffset && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 :this.o.angleOffset), this.o.angleArc && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 :this.o.angleArc), this.angleOffset = this.o.angleOffset * Math.PI / 180, this.angleArc = this.o.angleArc * Math.PI / 180, this.startAngle = 1.5 * Math.PI + this.angleOffset, this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;
var e = i(String(Math.abs(this.o.max)).length, String(Math.abs(this.o.min)).length, 2) + 2;
this.o.displayInput && this.i.css({
width:(this.w / 2 + 4 >> 0) + "px",
height:(this.w / 3 >> 0) + "px",
position:"absolute",
"vertical-align":"middle",
"margin-top":(this.w / 3 >> 0) + "px",
"margin-left":"-" + (3 * this.w / 4 + 2 >> 0) + "px",
border:0,
background:"none",
font:this.o.fontWeight + " " + (this.w / e >> 0) + "px " + this.o.font,
"text-align":"center",
color:this.o.inputColor || this.o.fgColor,
padding:"0px",
"-webkit-appearance":"none"
}) || this.i.css({
width:"0px",
visibility:"hidden"
}), _r_();
}, this.change = function(e) {
_i_("619:c3769748"), this.cv = e, this.$.val(this.o.format(e)), _r_();
}, this.angle = function(e) {
return _i_("619:eea30a1e"), _r_((e - this.o.min) * this.angleArc / (this.o.max - this.o.min));
}, this.arc = function(e) {
_i_("619:55465641");
var t, i;
return e = this.angle(e), this.o.flip ? (t = this.endAngle + 1e-5, i = t - e - 1e-5) :(t = this.startAngle - 1e-5, i = t + e + 1e-5), this.o.cursor && (t = i - this.cursorExt) && (i += this.cursorExt), _r_({
s:t,
e:i,
d:this.o.flip && !this.o.cursor
});
}, this.draw = function() {
_i_("619:44a0b957");
var e, t = this.g, i = this.arc(this.cv), n = 1;
t.lineWidth = this.lineWidth, t.lineCap = this.lineCap, t.beginPath(), t.strokeStyle = this.o.bgColor, t.arc(this.xy, this.xy, this.radius, this.endAngle - 1e-5, this.startAngle + 1e-5, !0), t.stroke(), this.o.displayPrevious && (e = this.arc(this.v), t.beginPath(), t.strokeStyle = this.pColor, t.arc(this.xy, this.xy, this.radius, e.s, e.e, e.d), t.stroke(), n = this.cv == this.v), t.beginPath(), t.strokeStyle = n ? this.o.fgColor :this.fgColor, t.arc(this.xy, this.xy, this.radius, i.s, i.e, i.d), t.stroke(), _r_();
}, this.cancel = function() {
_i_("619:95c9bb1d"), this.val(this.v), _r_();
}, _r_();
}, e.fn.dial = e.fn.knob = function(i) {
return _i_("619:d028e181"), _r_(this.each(function() {
_i_("619:5692d49b");
var n = new t.Dial();
n.o = i, n.$ = e(this), n.run(), _r_();
}).parent());
}, _r_();
}), function() {
_i_("619:7bdbc084");
var e, t, i, n, r, a, s, o, _, c, l, d, u, h, f, p, m, b, g, v, y = [].slice, k = [].indexOf || function(e) {
_i_("619:07fe9b6d");
for (var t = 0, i = this.length; i > t; t++) if (t in this && this[t] === e) return _r_(t);
return _r_(-1);
}, w = " ";
e = jQuery, e.payment = {}, e.payment.fn = {}, B.env.rtl && (w = ""), e.fn.payment = function() {
_i_("619:7ab4b5c6");
var t, i;
return i = arguments[0], t = 2 <= arguments.length ? y.call(arguments, 1) :[], _r_(e.payment.fn[i].apply(this, t));
}, r = /(\d{1,4})/g, n = [ {
type:"visaelectron",
pattern:/^4(026|17500|405|508|844|91[37])/,
format:r,
length:[ 16 ],
cvcLength:[ 3 ],
luhn:!0
}, {
type:"maestro",
pattern:/^(5(018|0[23]|[68])|6(39|7))/,
format:r,
length:[ 12, 13, 14, 15, 16, 17, 18, 19 ],
cvcLength:[ 3 ],
luhn:!0
}, {
type:"forbrugsforeningen",
pattern:/^600/,
format:r,
length:[ 16 ],
cvcLength:[ 3 ],
luhn:!0
}, {
type:"dankort",
pattern:/^5019/,
format:r,
length:[ 16 ],
cvcLength:[ 3 ],
luhn:!0
}, {
type:"visa",
pattern:/^4/,
format:r,
length:[ 13, 16 ],
cvcLength:[ 3 ],
luhn:!0
}, {
type:"mastercard",
pattern:/^5[0-5]/,
format:r,
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
format:r,
length:[ 14 ],
cvcLength:[ 3 ],
luhn:!0
}, {
type:"discover",
pattern:/^6([045]|22)/,
format:r,
length:[ 16 ],
cvcLength:[ 3 ],
luhn:!0
}, {
type:"unionpay",
pattern:/^(62|88)/,
format:r,
length:[ 16, 17, 18, 19 ],
cvcLength:[ 3 ],
luhn:!1
}, {
type:"jcb",
pattern:/^35/,
format:r,
length:[ 16 ],
cvcLength:[ 3 ],
luhn:!0
} ], t = function(e) {
_i_("619:966aa568");
var t, i, r;
for (e = (e + "").replace(/\D/g, ""), i = 0, r = n.length; r > i; i++) if (t = n[i], t.pattern.test(e)) return _r_(t);
_r_();
}, i = function(e) {
_i_("619:3ad499a7");
var t, i, r;
for (i = 0, r = n.length; r > i; i++) if (t = n[i], t.type === e) return _r_(t);
_r_();
}, u = function(e) {
_i_("619:54807ca0");
var t, i, n, r, a, s;
for (n = !0, r = 0, i = (e + "").split("").reverse(), a = 0, s = i.length; s > a; a++) t = i[a], t = parseInt(t, 10), (n = !n) && (t *= 2), t > 9 && (t -= 9), r += t;
return _r_(r % 10 === 0);
}, d = function(e) {
_i_("619:e107cdf3");
var t;
if (null != e.attr("selectionStart") && e.attr("selectionStart") !== e.attr("selectionEnd")) return _r_(!0);
if ("undefined" != typeof document && null !== document && null != (t = document.selection) && "function" == typeof t.createRange ? t.createRange().text :void 0) return _r_(!0);
return _r_(!1);
}, h = function(t) {
return _i_("619:f0e516e0"), _r_(setTimeout(function() {
_i_("619:73597414");
var i, n;
return i = e(t.currentTarget), n = i.val(), n = e.payment.formatCardNumber(n), _r_(i.val(n));
}));
}, o = function(i) {
_i_("619:07e12812");
var n, r, a, s, o, _, c;
if (a = String.fromCharCode(i.which), !/^\d+$/.test(a)) return _r_();
if (n = e(i.currentTarget), c = n.val(), r = t(c + a), s = (c.replace(/\D/g, "") + a).length, _ = 19, r && (_ = r.length[r.length.length - 1]), s >= _) return _r_();
if (null != n.attr("selectionStart") && n.attr("selectionStart") !== c.length) return _r_();
if (o = r && "amex" === r.type ? /^(\d{4}|\d{4}\s\d{6})$/ :/(?:^|\s)(\d{4})$/, o.test(c)) return i.preventDefault(), _r_(setTimeout(function() {
return _i_("619:cb1a72dc"), _r_(n.val(c + w + a));
}));
if (o.test(c + a)) return i.preventDefault(), _r_(setTimeout(function() {
return _i_("619:bf722e09"), _r_(n.val(c + a + w));
}));
_r_();
}, a = function(t) {
_i_("619:0f7de158");
var i, n;
if (i = e(t.currentTarget), n = i.val(), 8 !== t.which) return _r_();
if (null != i.attr("selectionStart") && i.attr("selectionStart") !== n.length) return _r_();
if (/\d\s$/.test(n)) return t.preventDefault(), _r_(setTimeout(function() {
return _i_("619:710bd403"), _r_(i.val(n.replace(/\d\s$/, "")));
}));
if (/\s\d?$/.test(n)) return t.preventDefault(), _r_(setTimeout(function() {
return _i_("619:d395fa77"), _r_(i.val(n.replace(/\s\d?$/, "")));
}));
_r_();
}, f = function(t) {
return _i_("619:e92b634a"), _r_(setTimeout(function() {
_i_("619:c8108ad2");
var i, n;
return i = e(t.currentTarget), n = i.val(), n = e.payment.formatExpiry(n), _r_(i.val(n));
}));
}, _ = function(t) {
_i_("619:218e21bd");
var i, n, r;
if (n = String.fromCharCode(t.which), !/^\d+$/.test(n)) return _r_();
if (i = e(t.currentTarget), r = i.val() + n, /^\d$/.test(r) && "0" !== r && "1" !== r) return t.preventDefault(), _r_(setTimeout(function() {
return _i_("619:777722be"), _r_(i.val("0" + r + " / "));
}));
if (/^\d\d$/.test(r)) return t.preventDefault(), _r_(setTimeout(function() {
return _i_("619:a3408b8f"), _r_(i.val("" + r + " / "));
}));
_r_();
}, c = function(t) {
_i_("619:b7775018");
var i, n, r;
if (n = String.fromCharCode(t.which), !/^\d+$/.test(n)) return _r_();
if (i = e(t.currentTarget), r = i.val(), /^\d\d$/.test(r)) return _r_(i.val("" + r + " / "));
_r_();
}, l = function(t) {
_i_("619:7dc031d2");
var i, n, r;
if (r = String.fromCharCode(t.which), "/" !== r && r !== w) return _r_();
if (i = e(t.currentTarget), n = i.val(), /^\d$/.test(n) && "0" !== n) return _r_(i.val("0" + n + " / "));
_r_();
}, s = function(t) {
_i_("619:b98f69fc");
var i, n;
if (i = e(t.currentTarget), n = i.val(), 8 !== t.which) return _r_();
if (null != i.attr("selectionStart") && i.attr("selectionStart") !== n.length) return _r_();
if (/\s\/\s\d?$/.test(n)) return t.preventDefault(), _r_(setTimeout(function() {
return _i_("619:415fd59f"), _r_(i.val(n.replace(/\s\/\s\d?$/, "")));
}));
_r_();
}, g = function(e) {
_i_("619:746567f2");
var t;
if (e.metaKey || e.ctrlKey) return _r_(!0);
if (32 === e.which) return _r_(!1);
if (0 === e.which) return _r_(!0);
if (e.which < 33) return _r_(!0);
return t = String.fromCharCode(e.which), _r_(!!/[\d\s]/.test(t));
}, m = function(i) {
_i_("619:395a359d");
var n, r, a, s;
if (n = e(i.currentTarget), a = String.fromCharCode(i.which), !/^\d+$/.test(a)) return _r_();
if (d(n)) return _r_();
return s = (n.val() + a).replace(/\D/g, ""), r = t(s), _r_(r ? s.length <= r.length[r.length.length - 1] :s.length <= 19);
}, b = function(t) {
_i_("619:1c7ef8ba");
var i, n, r;
if (i = e(t.currentTarget), n = String.fromCharCode(t.which), !/^\d+$/.test(n)) return _r_();
if (d(i)) return _r_();
if (r = i.val() + n, r = r.replace(/\D/g, ""), r.length > 4) return _r_(!1);
_r_();
}, p = function(t) {
_i_("619:f8b02d44");
var i, n, r;
if (i = e(t.currentTarget), n = String.fromCharCode(t.which), !/^\d+$/.test(n)) return _r_();
if (d(i)) return _r_();
return r = i.val() + n, _r_(r.length <= 4);
}, v = function(t) {
_i_("619:12424d46");
var i, r, a, s, o;
if (i = e(t.currentTarget), o = i.val(), s = e.payment.cardType(o) || "unknown", !i.hasClass(s)) return r = function() {
_i_("619:6b39fffe");
var e, t, i;
for (i = [], e = 0, t = n.length; t > e; e++) a = n[e], i.push(a.type);
return _r_(i);
}(), i.removeClass("unknown"), i.removeClass(r.join(w)), i.addClass(s), i.toggleClass("identified", "unknown" !== s), _r_(i.trigger("payment.cardType", s));
_r_();
}, e.payment.fn.formatCardCVC = function() {
return _i_("619:466f0c79"), this.payment("restrictNumeric"), this.bind("keypress", p), _r_(this);
}, e.payment.fn.formatCardExpiry = function() {
return _i_("619:38f801fc"), this.payment("restrictNumeric"), this.bind("keypress", b), this.bind("keypress", _), this.bind("keypress", l), this.bind("keypress", c), this.bind("keydown", s), this.bind("change", f), this.bind("input", f), _r_(this);
}, e.payment.fn.formatCardNumber = function() {
return _i_("619:cca922c8"), this.payment("restrictNumeric"), this.bind("keypress", m), this.bind("keypress", o), this.bind("keydown", a), this.bind("keyup", v), this.bind("paste", h), this.bind("change", h), this.bind("input", h), this.bind("input", v), _r_(this);
}, e.payment.fn.restrictNumeric = function() {
return _i_("619:d71086f7"), this.bind("keypress", g), _r_(this);
}, e.payment.fn.cardExpiryVal = function() {
return _i_("619:888348ea"), _r_(e.payment.cardExpiryVal(e(this).val()));
}, e.payment.cardExpiryVal = function(e) {
_i_("619:12b7f8d6");
var t, i, n, r;
return e = e.replace(/\s/g, ""), r = e.split("/", 2), t = r[0], n = r[1], 2 === (null != n ? n.length :void 0) && /^\d+$/.test(n) && (i = new Date().getFullYear(), i = i.toString().slice(0, 2), n = i + n), t = parseInt(t, 10), n = parseInt(n, 10), _r_({
month:t,
year:n
});
}, e.payment.validateCardNumber = function(e) {
_i_("619:b3b79781");
var i, n;
if (e = (e + "").replace(/\s+|-/g, ""), !/^\d+$/.test(e)) return _r_(!1);
if (i = t(e), !i) return _r_(!1);
return _r_((n = e.length, k.call(i.length, n) >= 0 && (i.luhn === !1 || u(e))));
}, e.payment.validateCardExpiry = function(t, i) {
_i_("619:39cd79b8");
var n, r, a;
if ("object" == typeof t && "month" in t && (a = t, t = a.month, i = a.year), !t || !i) return _r_(!1);
if (t = e.trim(t), i = e.trim(i), !/^\d+$/.test(t)) return _r_(!1);
if (!/^\d+$/.test(i)) return _r_(!1);
if (!(t >= 1 && 12 >= t)) return _r_(!1);
if (2 === i.length && (i = 70 > i ? "20" + i :"19" + i), 4 !== i.length) return _r_(!1);
return r = new Date(i, t), n = new Date(), r.setMonth(r.getMonth() - 1), r.setMonth(r.getMonth() + 1, 1), _r_(r > n);
}, e.payment.validateCardCVC = function(t, n) {
_i_("619:3c6aa2ec");
var r, a;
if (t = e.trim(t), !/^\d+$/.test(t)) return _r_(!1);
return r = i(n), _r_(null != r ? (a = t.length, k.call(r.cvcLength, a) >= 0) :t.length >= 3 && t.length <= 4);
}, e.payment.cardType = function(e) {
_i_("619:5e56e5a3");
var i;
if (!e) return _r_(null);
return _r_((null != (i = t(e)) ? i.type :void 0) || null);
}, e.payment.formatCardNumber = function(i) {
_i_("619:c9ee3730");
var n, r, a, s;
if (n = t(i), !n) return _r_(i);
if (a = n.length[n.length.length - 1], i = i.replace(/\D/g, ""), i = i.slice(0, a), n.format.global) return _r_(null != (s = i.match(n.format)) ? s.join(w) :void 0);
if (r = n.format.exec(i), null == r) return _r_();
return r.shift(), r = e.grep(r, function(e) {
return _i_("619:da18bde4"), _r_(e);
}), _r_(r.join(w));
}, e.payment.formatExpiry = function(e) {
_i_("619:d2b69e22");
var t, i, n, r;
if (i = e.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/), !i) return _r_("");
return t = i[1] || "", n = i[2] || "", r = i[3] || "", (r.length > 0 || n.length > 0 && !/\ \/?\ ?/.test(n)) && (n = " / "), 1 === t.length && "0" !== t && "1" !== t && (t = "0" + t, n = " / "), _r_(t + n + r);
}, _r_();
}.call(this), B.when({
events:"ready"
}).run(function(e) {
_i_("619:868405df"), $(".hotelname").click(function() {
_i_("619:3e203819");
var e = this.href;
return window.opener.location.href = e, window.close(), _r_(!1);
}), $(".close_link a").click(function() {
return _i_("619:6fdf073d"), window.close(), _r_(!1);
}), _r_();
}), jQuery(function(e) {
_i_("619:30ede3da");
var t = window.booking;
t.eventEmitter.bind("tooltip.show", function(t, i, n) {
_i_("619:d087933d"), e(document.body).one("touchstart", function() {
_i_("619:f71e65ff"), n && n.parent && n.parent.hide(), _r_();
}), _r_();
}), _r_();
}), B.when({
events:"ready",
action:"myreservations"
}).run(function(e) {
_i_("619:ed33e51c");
var t = e("jquery");
function i() {
_i_("619:0959126a"), t(".js_pb_mb_hotel_gallery").on("click", n), "#gallery" === window.location.hash && n(), _r_();
}
function n(e) {
_i_("619:ee29c1c5"), e && e.preventDefault();
var t = B.env.myBookingData, i = t.reservation.hotel.name, n = t.reservation.hotel.photos;
if (Array.isArray(n)) {
var r = B.components.require("b-mybooking-gallery");
r.show({
id:"pb_mb_hotel_gallery",
title:i,
photos:n,
additionalClass:"mb-gallery--no-disclaimer"
});
}
_r_();
}
i(), _r_();
}), B.when({
events:"ready"
}).run(function(e) {
_i_("619:54b9dfab");
var t = $("#count-two-oh");
if (t.length) {
var i = 0, n = t.children();
n.each(function() {
_i_("619:329ede2d");
var e = $(this);
e.height() > i && (i = e.height()), _r_();
}), n.height(i);
}
_r_();
}), function() {
_i_("619:59a0513d");
var e = window.jQuery, t = window.booking;
t.when({
events:"ready"
}).run(function(i) {
_i_("619:a5e6eef1");
var n = t.components.require("myreservations-resend-confirmation", e(".js-modal--resend"));
e(".js-btn--show-resend-modal").click(function(e) {
_i_("619:bb1ae219"), n.show(), e.preventDefault(), _r_();
}), _r_();
}), _r_();
}(), B.when({
events:"ready"
}).run(function(e) {
_i_("619:71e11fe5"), $(".js-submit-logout-not-me").click(function(e) {
_i_("619:9dd473e3"), e.preventDefault(), $(".js-logout-not-me-form").submit(), _r_();
}), _r_();
}), function() {
_i_("619:716d07a2");
var e = function(e, t) {
_i_("619:f3e922d8");
function i() {
if (_i_("619:0ce60b7b"), e.env.b_run_sr_ajax) {
var n = e.require("searchresults/events");
n.on(n.UI_BLOCK_UPDATED, function(e) {
_i_("619:fdb0536d"), "search_history" === e.id && i(), _r_();
});
}
t(".lp-sh-hide-search, .js-lp-sh-hide-search-bicon").click(function(e) {
_i_("619:bff80192"), e.preventDefault(), e.stopPropagation();
var i = t(this).closest("li"), n = i.hasClass("lp-dest-search-history"), r = i.data("sh_id");
function a() {
_i_("619:16f62e79"), i.remove(), t(".lp-search-history-list-item").length || t(".lp-sh-block").fadeOut(), _r_();
}
n ? (i.css({
overflow:"hidden",
border:"none"
}), i.animate({
opacity:0,
height:"0px",
padding:0,
margin:0
}, 100, a)) :i.fadeOut(300, a), t.ajax({
url:"/hide_search_hist",
data:{
id:r
}
}), _r_();
}), _r_();
}
return _r_({
init:i
});
}(booking, jQuery);
B.when({
events:"ready"
}).run(function(t) {
_i_("619:ab62a663"), e.init(), _r_();
}), _r_();
}(), B.when({
events:"ready"
}).run(function(e) {
"use strict";
_i_("619:abc94c75");
var t = $(".mb-cant-find-container"), i = t.find("form"), n = t.find(".popover"), r = !1, a = e("ga-tracker"), s = function() {
_i_("619:15f418d5"), n.css({
opacity:1
}).animate({
opacity:0
}, 100, function() {
_i_("619:6c93e50d"), n.css("visibility", "hidden"), r = !1, _r_();
}), _r_();
}, o = function() {
_i_("619:0f3e1675"), n.css({
opacity:0,
visibility:"visible"
}).animate({
opacity:1
}, 100), r = !0, a && a.trackEvent && a.trackEvent(a.clickTracker, "Add booking to account - opened popup"), _r_();
};
if (B.env.scroll_to_bn) {
var _ = $("#" + B.env.scroll_to_bn);
_.length > 0 && setTimeout(function() {
_i_("619:09d6dc8c"), $("html, body").animate({
scrollTop:_.offset().top - (B.env.b_is_ipad ? 0 :150)
}, 500), _r_();
}, 200);
}
t.find(".mb-cant-find").click(function() {
_i_("619:962df24e"), r ? s() :o(), _r_();
}), $("body").click(function(e) {
_i_("619:29f38e69"), !r || $(e.target).hasClass("mb-cant-find") || $(e.target).parents(".popover--mb-cant-find").length || s(), _r_();
}), t.find(".popover--mb-cant-find .popover__close").click(s), i.bind("submit", function(e) {
_i_("619:47bfddb2"), e.preventDefault(), a && a.trackEvent && a.trackEvent(a.clickTracker, "Add booking to account - tried to submit"), _r_();
}), i.bind("submit_pb_mybooking_cant_find", function() {
_i_("619:441612db");
var e = $(this);
return $.ajax({
type:"post",
url:e.attr("action"),
data:e.serialize(),
dataType:"json",
success:function(i) {
if (_i_("619:4c515995"), 1 === i.success) window.location.href ? window.location.href = window.location.href.replace(/scroll_to_bn=([^;]+);?/, "") + ";scroll_to_bn=" + e.find(".user_access_bn_number").val() :window.location = window.location.replace(/scroll_to_bn=([^;]+);?/, "") + ";scroll_to_bn=" + e.find(".user_access_bn_number").val(); else {
var n, r = t.find(".alert-error");
t.find(".form-loading").hide(), n = "wrong_email_address" !== i.status ? r.attr("data-error") :r.attr("data-error-wrong-email"), r.html(n).show();
}
_r_();
},
error:function() {
_i_("619:19f3ca2b"), t.find(".form-loading").hide(), _r_();
}
}), _r_(!1);
}), _r_();
}), function() {
_i_("619:97fe2aa4");
var e = function() {
_i_("619:a9436eb9");
var e = booking, t = e.require("jquery"), i = t(window), n = {
init:function() {
_i_("619:e30ea73b"), i.bind("slideBox.submitCompleted slideBox.loadCompleted", n.Rooms.init), _r_();
},
Rooms:{
init:function(t, i) {
if (_i_("619:5f923274"), !i) return _r_(!0);
var r = i.$target || i.target, a = r.is("#slidebox-change-dates"), s = r.is(".slidebox--change-room-type"), o = r.find(".mb-rooms-container");
if (!a && !s && !o.length && o.hasClass("mb-rooms-container--lt3")) return _r_();
o.length ? (("msie" !== e.env.b_browser || e.env.b_browser_version > 8) && n.Rooms.fixTableHeader(o), r.find(":button").bind("click", n.Rooms.selectRoom), n.Rooms.Details.init()) :r.find(".mb-go-back").length && n.setGoBackButton(r), _r_();
},
fixTableHeader:function(e) {
_i_("619:bc815e21");
var i = e.find("table thead");
i.find("th").each(function() {
_i_("619:a36ea072"), t(this).css("width", t(this).width()), _r_();
}), i.find("tr").clone().prependTo(i).addClass("mb-room__cloned-header").css({
position:"fixed",
"z-index":1e4
}), _r_();
},
selectRoom:function(e) {
_i_("619:17a90032");
var i = t(this), n = i.data("room-id"), r = i.parents("form"), a = r.find(":button");
i.addClass("submitting"), a.attr("disabled", !0), r.find("input[name=room_id]").val(n), r.submit(), _r_();
},
Details:{
init:function() {
_i_("619:4bbef5e9");
var e = ".js-toggle-room-details", i = ".close_button_roomstable";
t(e).bind("click", n.Rooms.Details.toggle), t(i).bind("click", n.Rooms.Details.close), _r_();
},
toggle:function(e) {
_i_("619:b9554590");
var i = t(".extendedRow"), n = t(this).data("rid"), r = "#tr" + n;
i.hide().filter(r).show(), e.preventDefault(), _r_();
},
close:function(e) {
_i_("619:eb6197f1"), t(this).parents(".extendedRow").hide(), e.preventDefault(), _r_();
}
}
},
setGoBackButton:function(n) {
_i_("619:f0dc6345");
var r = n.find("form"), a = n.find(".mb-go-back"), s = t("#mb-container").hasClass("multi_room_booking"), o = a.hasClass("mb-go-back--add-room"), _ = n.hasClass("slidebox--change-room-type"), c = function(e) {
_i_("619:c301cf93");
var t = {}, i = e.find("input[name=checkin_date]").val().split("-"), n = e.find("input[name=checkout_date]").val().split("-");
return t.checkin = {
monthday:i[2],
year_month:i[0] + "-" + i[1]
}, t.checkout = {
monthday:n[2],
year_month:n[0] + "-" + n[1]
}, _r_(t);
}, l = function(e, t) {
_i_("619:65c64897");
var i = "";
i += '<input type="hidden" name="checkin_monthday" value="' + t.checkin.monthday + '">', i += '<input type="hidden" name="checkin_year_month" value="' + t.checkin.year_month + '">', i += '<input type="hidden" name="checkout_monthday" value="' + t.checkout.monthday + '">', i += '<input type="hidden" name="checkout_year_month" value="' + t.checkout.year_month + '">', e.append(i), _r_();
}, d = function(e, t) {
_i_("619:efcb6dae"), e.find("input[name=do]").val(t), _r_();
}, u = function(e, t) {
_i_("619:11e80d3e"), e.find(t).remove(), _r_();
}, h = function(t) {
_i_("619:2073e40b"), e.require("mybooking/slidebox").updateContent(t, '<div class="mb-loading"><span class="mb-loading-content"></span></div>'), t.find("input[type=submit]").addClass("submitting").attr("disabled", "disabled"), _r_();
}, f = function() {
_i_("619:d89ad381");
var e;
return e = o ? "add_room" :_ ? "send_choose_room" :s ? "do_change_room_dates" :"dochangedates", _r_(e);
}, p = function(a) {
_i_("619:28c8a44f");
var s;
if (a.preventDefault(), t(this).is("[disabled]")) return _r_();
d(r, f()), u(r, "input[name=room_id]" + (_ ? "" :", input[name=checkin_date], input[name=checkout_date]")), s = r.serialize() + "&tmpl=mybooking_lightbox_process", h(n), t.ajax({
url:r.attr("action"),
type:r.attr("method"),
data:s,
success:function(t) {
_i_("619:434743ac"), e.require("mybooking/slidebox").updateContent(n, t), n.trigger("slideBox.submitCompleted"), i.trigger("slideBox.submitCompleted", {
$target:n
}), _r_();
}
}), _r_();
};
o || _ || l(r, c(r)), a.bind("click", p), _r_();
}
};
return _r_({
priority:9,
init:n.init
});
}();
B.when({
events:"ready"
}).run(function(t) {
_i_("619:6507d417"), e.init(), _r_();
}), _r_();
}(), function() {
_i_("619:5bc0dfa2");
var e = function(e, t, i) {
_i_("619:9d535dea");
var n = {
storageKeyPrefix:"mb:feedback",
$feedback:null,
$form:null,
feedbackMaxLength:255,
animationFadeInDuration:1500,
animationFadeOutDuration:1500,
init:function() {
if (_i_("619:6ff76d3c"), n.$feedback = t(".mb-section--feedback"), "myreservations" !== e.env.b_action && !n.$feedback.length) return _r_();
n.$form = n.$feedback.find(".js-feedback-form"), n.setStorageKey(n.$feedback.find("input[name=bn]").val()), n.hasStoredFeedback() ? n.empty() :(n.$feedback.find(".js-feedback").bind("keypress", n.textareaLimit(n.feedbackMaxLength)), n.$feedback.find(".js-show-form").bind("click", n.formToggle), n.$form.bind("submit", n.formSubmit)), _r_();
},
formToggle:function(e) {
_i_("619:d106e7e0"), e && e.preventDefault(), n.$form.is(":visible") ? (n.$form.addClass("fadeOut"), setTimeout(function() {
_i_("619:6d3a3262"), n.$form.addClass("is-hidden").removeClass("fadeOut"), _r_();
}, n.animationFadeOutDuration)) :(n.$form.removeClass("is-hidden").addClass("fadeIn"), setTimeout(function() {
_i_("619:930b360b"), n.$form.removeClass("fadeIn"), _r_();
}, n.animationFadeInDuration)), _r_();
},
formSubmit:function(e) {
_i_("619:50183252"), e.preventDefault();
var i = t(this);
n.$form.find("[type=submit]").attr("disabled", !0), n.loadingShow(), t.ajax({
url:i.attr("action"),
type:i.attr("method"),
data:i.serialize(),
success:function(e) {
_i_("619:830aecf4"), n.feedbackSent(), _r_();
},
error:function(e, t, i) {
_i_("619:6a32a494"), n.feedbackError(), _r_();
}
}), _r_();
},
feedbackSent:function() {
_i_("619:65203c57");
var e = n.$feedback.find(".js-question"), t = n.$feedback.find(".js-success");
n.formToggle(), n.setStoredFeedback(), e.addClass("fadeOut"), setTimeout(function() {
_i_("619:974c5f54"), e.addClass("is-hidden"), t.removeClass("is-hidden").addClass("fadeIn"), _r_();
}, n.animationFadeOutDuration), _r_();
},
feedbackError:function() {
_i_("619:a32dd56a"), n.$feedback.find(".js-submit-error").addClass("fadeIn").removeClass("is-hidden"), n.loadingHide(), n.$form.find("[type=submit]").attr("disabled", !1), _r_();
},
empty:function() {
_i_("619:5b039b97"), n.$feedback.addClass("is-empty").empty(), _r_();
},
loadingShow:function() {
_i_("619:19da8c9a"), n.$form.find("[type=submit]").addClass("submitting"), _r_();
},
loadingHide:function() {
_i_("619:24a12dfb"), n.$form.find("[type=submit]").removeClass("submitting"), _r_();
},
setStorageKey:function(e) {
_i_("619:7c985bca"), n.storageKeyPrefix += ":" + e, _r_();
},
setStoredFeedback:function() {
_i_("619:e61c35c5");
try {
window.localStorage && localStorage.setItem(n.storageKeyPrefix, "1");
} catch (e) {}
_r_();
},
hasStoredFeedback:function() {
_i_("619:aa3807bc");
try {
return _r_(window.localStorage && localStorage.getItem(n.storageKeyPrefix));
} catch (e) {
return _r_(!1);
}
_r_();
},
textareaLimit:function(e) {
return _i_("619:991c95c2"), _r_(function(i) {
_i_("619:cb840693");
var n = t(this), r = n.val(), a = r.length;
if (a >= e) return a > e && n.val(r.substring(0, e)), _r_(!1);
_r_();
});
}
};
return _r_({
priority:9,
init:n.init
});
}(booking, jQuery, jQuery(window));
B.when({
events:"ready"
}).run(function(t) {
_i_("619:df5d5997"), e.init(), _r_();
}), _r_();
}(), function() {
_i_("619:620e4482");
var e = {
priority:9,
res_location:"/remove_booking?tid=",
selector:".js-booking_block",
init:function() {
_i_("619:85a4b876");
var e = this;
$(".booking_actions_redesign a.delete_from_list, .booking-manage-buttons .booking-manage-buttons__button-remove").click(function() {
_i_("619:3d2a5af6");
var t = $(this).attr("href");
if (t) {
$.ajax({
url:t,
type:"POST",
success:function(e) {}
});
var i = $(this).parents(e.selector + ":eq(0)");
$(i).hide("slow", function() {
_i_("619:aaabb517");
var t = $(this).parents(e.selector).get(0);
$(this).remove(), $(".bookinfo", t).length || $(t).hide("slow", function() {
_i_("619:7a1f8cf1"), $(this).remove(), _r_();
}), _r_();
});
}
return _r_(!1);
}), $(".booking_actions a.more").click(function() {
_i_("619:7abdb8d5"), $(".booking_actions").css("z-index", "100"), $(this).parents(".booking_actions").css("z-index", "101"), $(this).siblings(".booking_more_actions").is(":visible") ? $(this).siblings(".booking_more_actions").hide() :($(".booking_actions .booking_more_actions").hide(), $(this).siblings(".booking_more_actions").show()), _r_();
});
var t = !1;
$(document).ready(function() {
_i_("619:9e31150a"), $(".booking_actions").hover(function() {
_i_("619:06550275"), t = !0, _r_();
}, function() {
_i_("619:f7437816"), t = !1, _r_();
}), $("body").mouseup(function() {
_i_("619:bd4e0b95"), t || ($(".booking_actions .booking_more_actions").hide(), $(".booking_actions").css("z-index", "100")), _r_();
}), _r_();
}), _r_();
}
};
B.when({
events:"ready"
}).run(function(t) {
_i_("619:ec5903c9"), e.init(), _r_();
}), _r_();
}(), function() {
_i_("619:479156d7");
var e = function(e, t) {
_i_("619:4566ec40");
var t = booking, e = t.require("jquery");
if ("myreservations" !== t.env.b_action) return _r_({
init:e.noop
});
var i = e(window), n = e(document.body), r = t.env.b_is_tablet, a = h(), s = !0;
function o() {
if (_i_("619:3eb79097"), r) return _r_();
i.bind("slideBox.beforeOpen slideBox.beforeClose", _), _r_();
}
function _() {
_i_("619:c43a7bd4"), n.toggleClass("mb-no-scroll").css("margin-right", s ? a :0), s && c(), s = !s, _r_();
}
function c() {
_i_("619:4a08014f");
var t = e(".slideBoxWrapper");
t.css({
left:i.width() / 2 - a / 2 + "px",
"margin-left":-(t.width() / 2)
}), _r_();
}
function l() {
return _i_("619:12e60ca0"), _r_(e('<div id="sw-frame"><div style="height:70px;"></div></div>').css({
position:"absolute",
top:"-5000px",
width:"100%",
height:"50px"
}).appendTo(n));
}
function d(e, t) {
return _i_("619:2e609d99"), _r_(e.css("overflow", t).children().innerWidth());
}
function u(e) {
return _i_("619:a0246b34"), _r_(d(e, "hidden") - d(e, "auto"));
}
function h() {
return _i_("619:9a4f60c9"), _r_(u(l()));
}
return _r_({
init:o
});
}();
B.when({
events:"ready"
}).run(function(t) {
_i_("619:304e8ef0"), e.init(), _r_();
}), _r_();
}(), B.define("component/pb/cancel_fork", function(e, t, i) {
_i_("619:3b7e489e");
function n(e, t, i) {
_i_("619:f5664e13"), this.scope = e, this.target = t, this.button = i, this.$doc = $(document), this.$button = $(i), this.$target = $(t), this.$close_btn = null, this.$switch_btn = null, this.$steps = null, this.$loader = null, this.type = this.$button.data("cancelType"), this.step_string = ".js-pb-cancel-flow__step_", this.all_step_string = ".js-pb-cancel-flow__step", this.close_string = ".js-pb-cancel-flow__close", this.switch_string = ".js-pb-cancel-flow__switch", this.loader_string = ".js-pb-cancel-flow__loader", this.final_string = ".js-pb-cancel-flow__final_", this.hidden_string = "g-hidden", this.is_nonref = "non_refundable" === B.env.b_booking_cancellation_type, this.is_spcond = "special_condition" === B.env.b_booking_cancellation_type, this.toggleCancel = void 0, this.init(), _r_();
}
return n.prototype = {
init:function() {
_i_("619:59c7aa62"), this.trackGA("open_modal"), this.loadHtml(), _r_();
},
trackGAEvent:function(e) {
_i_("619:689b7335");
var t = booking.require("ga-tracker");
t.trackEvent(t.userProfileTracker, booking.env.b_action + " : " + e + ", " + B.env.b_booking_cancellation_type), _r_();
},
trackGA:function(e) {
switch (_i_("619:643a4851"), e) {
case "open_modal":
"instant" === this.type ? this.trackGAEvent("Cancel instant") :this.trackGAEvent("Cancel request");
break;

case "send":
"instant" === this.type ? this.trackGAEvent("Cancelled full price") :this.trackGAEvent("Requested reduced fees");
break;

case "keep":
this.trackGAEvent("Keep booking");
}
_r_();
},
loadHtml:function() {
_i_("619:d074d239");
var e = this;
this.$target.on("slideBox.loadCompleted", function() {
_i_("619:90223ffa"), e.htmlReady(), _r_();
}), this.scope.callbacks.loadByAjax.call(this.scope, this.target, this.button), _r_();
},
htmlReady:function() {
_i_("619:c69adc26");
var e = this;
this.$close_btn = $(this.close_string), this.$switch_btn = $(this.switch_string), this.$steps = $(this.all_step_string), this.$loader = $(this.loader_string), this.$review_slider_container = this.$target.find(".js-pb-cancellation-review-container"), this.$review_slider = this.$target.find(".js-pb-cancellation-review"), "instant" === this.type ? this._toggleInstant(!1) :this._toggleRequest(!1), this.$close_btn.on("click.cancel_flow", function(t) {
_i_("619:e16276ed"), t.preventDefault(), e.trackGA("keep"), e._close(), _r_();
}), this.$switch_btn.on("click.cancel_flow", function(t) {
_i_("619:6618b602"), t.preventDefault();
var i = $(this).data("view");
e._changeView(i), e.type = i, _r_();
}), B.et.track("IZEZVPHcVScdWHe") && this.changeDatesClick(), this.scope.callbacks.enableSurvey.call(this.scope, this.target), this.scope.callbacks.enableHidingMandatorySurveyValidationError.call(this.scope, this.target), this.$target.loadComponents(), _r_();
},
_toggleInstant:function(e) {
_i_("619:56c47252"), $(this.step_string + "instant").toggleClass(this.hidden_string, e), this.scope.updateHeight(this.target), this.cancelNow(), _r_();
},
_toggleRequest:function(e) {
_i_("619:ca4a82f5"), $(this.step_string + "request").toggleClass(this.hidden_string, e), this.scope.updateHeight(this.target), this.cancelForLess(), _r_();
},
_changeView:function(e) {
_i_("619:a3a801e2"), this.$steps.addClass(this.hidden_string), $(this.step_string + e).removeClass(this.hidden_string), this.scope.updateHeight(this.target), "instant" === e && this.cancelNow(), "request" === e && this.cancelForLess();
var t = this.$review_slider.data("reviews_slider");
t && (t.resize(), t.animate()), _r_();
},
cancelNow:function() {},
cancelForLess:function() {
_i_("619:4575557a"), B.et.stage("IZEZVPBccFRSTdLVSUZWQRKEIET", 1), B.et.stage("IZEZVPKBZTJVPfOXSdXMDDBARGRT", 1);
var e = this.$target.find(".js-cancel-for-less");
if (e.length) {
var t = B.require("toggle/cancel");
this.toggleCancel && this.toggleCancel.destroy(), this.toggleCancel = new t(e, this.$target.find("textarea"));
}
_r_();
},
_close:function() {
_i_("619:120ac835");
var e = "cancel", t = this.scope.getOption("warnOnClose");
this.scope.setOption("warnOnClose", !1), this.scope.toggleFromButton(this.button, e), this.scope.setOption("warnOnClose", t), this.$target.trigger("slideBox." + e, [ this.target, this.button ]), _r_();
},
_reload:function() {
_i_("619:aa8931da"), this.toggleLoader(!0);
var e = /(\;|&)(pbsource|source|pbmeal)\=[\w-]+/g;
e.test(location.href) ? location.href = location.href.replace(e, "") :window.location.reload(), _r_();
},
toggleLoader:function(e) {
_i_("619:7abe3d2a"), this.$loader.toggleClass(this.hidden_string, !e), _r_();
},
showFinal:function(e) {
_i_("619:1d7618a3");
var t = this;
this.$steps.addClass(this.hidden_string), this.$review_slider_container.addClass(this.hidden_string), $(this.final_string + e).removeClass("g-hidden"), this.scope.updateHeight(this.target), this.$doc.on("click.cancel_flow_reload", ".slideBoxOverlay, .MyBookingOptionsSaveChanges", function() {
_i_("619:efd310e8"), t._reload(), _r_();
}), this.toggleLoader(!1), this.trackGA("send"), "request" === e && B.et.customGoal("IZEZVPBccFRSTdLVSUZWQRKEIET", 2), _r_();
},
showError:function() {
_i_("619:be10424c");
var e = this;
this.$doc.on("click.cancel_flow_close", ".MyBookingOptionsCancel", function() {
_i_("619:cccfc7d9"), e._close(), _r_();
}), this.toggleLoader(!1), _r_();
},
destroy:function() {
_i_("619:364f0f2d"), this.$target && this.$target.off("slideBox.loadCompleted"), this.$close_btn && this.$close_btn.off("click.cancel_flow"), this.$switch_btn && this.$switch_btn.off("click.cancel_flow"), this.$doc && this.$doc.off("click.cancel_flow_close"), this.toggleCancel && (this.toggleCancel.destroy(), this.toggleCancel = void 0), _r_();
},
changeDatesClick:function() {
_i_("619:1b7c95a6");
var e = this;
this.$changeDatesBtn = this.$target.find(".js-cancel_flow_change_dates_btn"), this.$changeDatesPageLink = $(".mb-change-dates.hasSlideBox"), this.$changeDatesBtn.on("click", function() {
_i_("619:c47e564e"), e.$changeDatesPageLink && e.$changeDatesPageLink.click(), _r_();
}), _r_();
}
}, _r_(n);
}), B.define("mybooking_lightbox_mealplan_methods", function(e, t, i) {
_i_("619:1b85343d");
var n = B.require("ga-tracker"), r = {
mealPlanShown:function() {
_i_("619:c55164e9"), B.et.goal("mybooking_viewmealplan", 1), B.env.b_meal_plan_breakfast_only_modal_shown ? n.trackEvent("In-stay Services", "Add meal plan - Single", "Confirmation Seen") :B.env.b_multi_meal_plan_modal_shown && n.trackEvent("In-stay Services", "Add meal plan - Multi", "Shown"), B.et.stage("ObUJNDMLUCJCBOaRYbaTaTaET", 1), _r_();
},
pushFormData:function(e, t, i) {
_i_("619:22ad0f3a"), e.push({
name:t,
value:i
}), _r_();
}
}, a = {
requestRoomMealOpenCallback:function(e, t) {
_i_("619:1e594fad"), this.setOption("autoFormSubmit", !1), this.callbacks.myBookingButtonEvents.call(this, e, t), this.callbacks.refreshPageOnSave.call(this, e, t), r.mealPlanShown(), _r_();
},
requestRoomMealCloseCalback:function(e, t) {},
checkAutoOpenByURL:function() {
if (_i_("619:e4d02052"), booking) {
var e = this, t = booking && booking.env && booking.env.slideBox && booking.env.slideBox.rresid ? booking.env.slideBox.rresid :"", i = '[data-rresid="' + t + '"]', n = $(".mb-add-meal, .bui-button-meals");
if (n = n.is(i) ? n.filter(i).eq(0) :n.eq(0), n.length) return setTimeout(function() {
_i_("619:99d4fd53"), e.toggleFromButton.call(e, n.get(0)), _r_();
}, 200), _r_(!0);
}
return _r_(!1);
},
autoFormSubmit:function(e, t, i) {
_i_("619:f30002a9");
var a = this, s = $(e), o = $(t), _ = $(i), c = _.find("[type=submit]"), l = _.serializeArray(), d = null;
r.pushFormData(l, "tmpl", "mybooking_lightbox_process"), booking.env.slideBox.auth_key.length && r.pushFormData(l, "auth_key", booking.env.slideBox.auth_key), c.addClass("submitting").prop("disabled", !0), $(a).one("slideBox.close", function() {
_i_("619:d763aaf7"), d && (d.abort(), d = null), _r_();
}), d = $.ajax({
url:_.attr("action"),
type:"post",
data:l,
success:function(e) {
_i_("619:03a8163f"), d = null, B.require("mybooking/slidebox").setOption("hasAjaxErrors", !1), a.updateContent(s, e), s.find("form").length || (s.addClass("slidebox--success"), o.addClass("slidebox--success")), s.trigger("slideBox.submitCompleted");
var t = s.find("#meal_plan_total_amount"), i = s.find("#meal_plan_ga_string");
if (t.length && i.length) {
var r = t[0].value, _ = i[0].value;
n.trackEvent("In-stay Services", "Meal plan transaction", _, r);
} else {
var c = s.find('input[type="hidden"][name="do"]');
c.length && "confirmchangemealplan" === c.val() && B.et.customGoal("ObUJNDMLUCJCBOaRYbaTaTaET", 1);
}
_r_();
},
error:function(e) {
_i_("619:72c2560f"), 0 === e.status && "abort" === e.statusText ? n.trackEvent(n.userProfileTracker, "confirmation: no_lightbox - closed before submit finished") :(d = null, booking.eventEmitter.trigger("slideBox.loadError", [ s, e ]), n.trackEvent(n.userProfileTracker, "confirmation: no_lightbox - submit error " + e.status)), _r_();
}
}), _r_();
}
};
i.exports = a, _r_();
}), B.define("pb_eta_utils", function(e, t, i) {
_i_("619:7c17ac70"), i.exports = {
checkETAinCheckInHours:function(e, t, i, n) {
_i_("619:5ad24569");
var r = e.match(/((\d+):(\d+))?,((\d+):(\d+))?/);
if (null === r) return _r_();
var a = !1;
r[1] && t <= r[2] && (a = !0), r[4] && (30 == r[6] ? t > r[5] / 1 + 1 && (a = !0) :t > r[5] && (a = !0)), a ? n && "function" == typeof n && n() :i && "function" == typeof i && i(), _r_();
}
}, _r_();
}), B.define("mybooking/no_lightbox_opendefault", function(e, t, i) {
_i_("619:04e3aa63");
var n = [ "dashboard_cancel", "email_changeInfo", "modify_guests", "email_map" ], r = [ "do_pay_addmeals" ];
i.exports = {
getOpenDefaultSelector:function(e) {
_i_("619:21afdeaa");
var t = null;
if (!booking || !booking.env || !booking.env.slideBox) return _r_(t);
if (e && n.indexOf(booking.env.slideBox.scroll) >= 0) return _r_(t);
switch (booking.env.slideBox.scroll) {
case "email_changeDates":
t = ".mb-info__actions a.mb-change-dates";
break;

case "dashboard_cancel":
if (!$("#has_email_tracking").length) break;

case "mybooking_widget_cancel":
case "mybooking_payment_cancel":
case "confpage_cancel":
case "email_cancel":
var i = window.location.search.match(/open_room=([0-9]+)/);
i && i.length && $("button.mb-cancel-room[data-rresid=" + i[1] + "]").length ? t = "button.mb-cancel-room[data-rresid=" + i[1] + "]" :i && i.length || (t = "a.mb-cancel");
break;

case "mybooking_widget_cancel_request":
t = ".js-cancel-request-btn";
break;

case "email_changeInfo":
if (!B.et.track("eIBbFYZVZMdLEccGSODMQPNODFNaT")) break;
var r, a, s = booking.env.slideBox.rresid;
s && (r = $(".mb-section--room[data-rresid=" + s + "]")), r && r.length || (r = $(".mb-section--room:eq(0)")), a = r.find("a.js-pb-guest-details__btn-edit:visible:eq(0)"), $("html, body").animate({
scrollTop:r.offset().top - 50
}, 500), setTimeout(function() {
_i_("619:cedaeb2c"), a.click(), _r_();
}, 700);
break;

case "modify_guests":
var o = $(".js-room-info");
o.length && $("html, body").animate({
scrollTop:o.offset().top - 10
}, 500);
break;

case "email_changeRoom":
t = ".mb-room__actions a.mb-change-room";
break;

case "doChangeRoom":
t = ".mb-room__actions a.mb-change-room:eq(0)";
break;

case "doChangeRoomDates":
var s = booking.env.slideBox.rresid;
s && (t = ".mb-room__actions a.mb-change-room-dates[data-rresid=" + s + "]");
break;

case "doCheckinTime":
t = ".mb-section--requests li.changeCheckinCheckoutTime";
break;

case "email_checkinTime":
t = ".mb-section--requests li.changeCheckinCheckoutTime";
break;

case "doFlightInfo":
t = ".mb-section--requests li.flightInfo";
break;

case "doSpecialRequest":
t = ".mb-section--requests li.changeRequests";
break;

case "email_changeRequests":
t = ".mb-section--requests li.changeRequests";
break;

case "email_changeccdetails":
t = "a.change_cc";
break;

case "changecc":
t = "a.change_cc";
break;

case "doBpgClaim":
t = ".bpg_claim_button";
break;

case "email_map":
setTimeout(function() {
_i_("619:b6ba0804"), booking.eventEmitter.trigger("mb-map-open"), _r_();
}, 4);
break;

case "email_addRoom":
t = ".mb-btn--add-room";
break;

case "conf_addRoom":
t = ".mb-btn--add-room";
break;

case "do_pay_changedates":
t = ".mb-section--summary a.mb-change-dates";
break;

case "show_prepayment_bank_details":
t = ".mb-button--prepayment-details";
break;

case "price_details":
t = ".mb-price-details a";
}
return _r_(t);
},
shouldOpenDefaultBeClicked:function(e) {
if (_i_("619:6a019cb2"), !e) return _r_(!1);
var t = $(e);
if (t.length && !t.hasClass("mb-hidden") && (1 == t.length || "email_changeRoom" !== booking.env.slideBox.scroll)) return _r_(!0);
return _r_(!1);
},
willOpeningByDefault:function() {
_i_("619:b4228bc0");
var e = this.getOpenDefaultSelector(!0);
if (!e && booking && booking.env && booking.env.slideBox && booking.env.slideBox.scroll && (n.indexOf(booking.env.slideBox.scroll) >= 0 || r.indexOf(booking.env.slideBox.scroll) >= 0)) return _r_(!0);
return _r_(this.shouldOpenDefaultBeClicked(e));
}
}, _r_();
}), function(e, t, i) {
"use strict";
_i_("619:dd838e9c");
var n = B.env && "myreservations" === B.env.b_action ? B.require("mybooking_lightbox_mealplan_methods") :null, r = B.require("mybooking/no_lightbox_opendefault");
B.define("mybooking/no-lightbox", function(a, s, o) {
_i_("619:7cecb91b");
var _ = a("mybooking/slidebox"), c = a("ga-tracker"), l = "myreservation: ETA submission form", d = !1, u = a("ga/deprecated-custom-track-click"), h = {
myBookingButtonEvents:function(e, i) {
_i_("619:ff5b41fd");
var n = ".MyBookingOptionsCancel, .MyBookingOptionsSaveChanges", r = this;
t(e).off("click", n).on("click", n, function() {
_i_("619:9028c4b1");
var n = t(this).hasClass("MyBookingOptionsCancel") ? "cancel" :"save", a = r.getOption("warnOnClose");
r.setOption("warnOnClose", !1), r.toggleFromButton(i, n), r.setOption("warnOnClose", a), t(e).trigger("slideBox." + n, [ e, i ]), _r_();
}), _r_();
},
autoFormSubmit:function(n, r, a) {
_i_("619:6e2bbed5");
var s, o = this, l = t(r), d = t(n), u = d.find("form"), h = u.find("[type=submit], .slideBoxSubmit, .mb-go-back"), f = u.find("input[name=do]").val();
if (u.length > 1 && (u = t(a)), d.trigger("slideBox.submit"), s = u.serialize() + (e.env.slideBox.auth_key.length ? "&auth_key=" + e.env.slideBox.auth_key :""), B.et.track("cQHbdSVbXQNVSIRCfPXeWUSUSDRBNAPTBUEO") && "geniusFreebieShuttle" === f && !B.require("genius/ge-reservation-freebies").shuttle.validate(u)) return _r_(!1);
if ("sendchangeroom" === f) {
var p = u.find(".no-change");
if (u.serialize() === d.data("serialized")) return p.show(), _r_(!1);
p.hide();
}
"dochange" === f && u.find("textarea").length && (e.env.recentSpecialRequest = u.find("textarea").val()), h.addClass("submitting"), h.attr("disabled", "disabled"), u.find("input[type=submit][name]").each(function() {
_i_("619:3cae11e51"), s += "&" + encodeURI(t(this).attr("name")) + "=" + encodeURI(t(this).attr("value")), _r_();
});
var m = null, b = !1, g = setTimeout(function() {
_i_("619:dbc5fdf2"), m || (m = new Date()), _r_();
}, 5e3);
t(this).one("slideBox.close", function() {
_i_("619:2f2a6ffa"), m || (clearTimeout(g), c.trackEvent(c.userProfileTracker, "confirmation: no_lightbox - closed before submit finished")), b = !0, _r_();
}), t.ajax({
url:u.attr("action"),
type:"post",
data:s + "&tmpl=mybooking_lightbox_process",
success:function(n) {
if (_i_("619:14c3d662"), b) return _r_();
if (_.setOption("hasAjaxErrors", !1), m = new Date(), d.hasClass("slidebox--active")) {
var n = d.hasClass("slidebox-ge-freebie") ? B.jstmpl("myBooking_freebies_confirm_lightbox").render({
success:n.success,
confirm_msg:d.data("username")
}) :n;
if (d.hasClass("slidebox--bpg-claim")) {
var r = t(n).filter(".bpg-claim-error-container");
t(".slidebox--bpg-claim .bpg_claim_submit").removeClass("bpg_claim_submit--loading"), r.length > 0 ? e.eventEmitter.trigger("bpgClaimFrom.error", r.data()) :o.updateContent(d, n);
} else o.updateContent(d, n);
var a = d.find(".js-slidebox__inner") || d, s = a.first();
B.et.initAttributesTracking(s), B.env.b_show_arrival_time_range && s.loadComponents();
}
d.find("form").length || (d.addClass("slidebox--success"), l.addClass("slidebox--success"), "slidebox-change-dates" === d.attr("id") && c.trackEvent(c.userProfileTracker, "Dates changed, " + B.env.b_booking_cancellation_type), "slidebox-change-cc" === d.attr("id") && c.trackEvent(c.userProfileTracker, "Edited CC, " + B.env.b_booking_cancellation_type), "show-slidebox" === d.attr("data-icc") && c.trackEvent("Unblock-AV", "update-cc", "sucess")), d.trigger("slideBox.submitCompleted"), t(i).trigger("slideBox.submitCompleted", {
$target:d
});
var u = d.find("#change_cc"), h = d.find(".cc_error:visible"), f = d.find(".ga-cc-alert");
u.length && h.length && (h.each(function() {
_i_("619:4f893f6e");
var e = t(this).data("error-type");
c.trackEvent(c.userProfileTracker, "CC validation error: " + e), _r_();
}), "show-slidebox" === d.attr("data-icc") && c.trackEvent("Unblock-AV", "update-cc", "fail")), u.length && f.length && (f.each(function() {
_i_("619:4ef74437");
var e = t(this).data("error-type");
c.trackEvent(c.userProfileTracker, "CC postvalidation error: " + e), _r_();
}), "show-slidebox" === d.attr("data-icc") && c.trackEvent("Unblock-AV", "update-cc", "fail-zero-auth"));
var p = t("#change_dates"), g = d.find(".ga-dates-error");
p.length && g.length && g.each(function() {
_i_("619:1e60c4cf");
var e = t(this).attr("rel");
c.trackEvent(c.userProfileTracker, "Change dates validation error: " + e), _r_();
}), _r_();
},
error:function(t) {
_i_("619:9c78fbb4"), e.eventEmitter.trigger("slideBox.loadError", [ d, t ]), clearInterval(g), m = 1, c.trackEvent(c.userProfileTracker, "confirmation: no_lightbox - submit error " + t.status), _r_();
}
}), _r_();
},
loadByAjax:function(n, r) {
_i_("619:5f9061d1");
var a = this, s = t(n), o = r.getAttribute("data-slidebox-load");
if (!o || !o.length) return _r_();
var _ = new Date(), l = null, d = !1, h = setTimeout(function() {
_i_("619:e4106a0a"), l || (l = new Date());
var e = Math.floor((l - _) / 1e3);
e > 1 && c.trackEvent(c.userProfileTracker, "confirmation: no_lightbox - open load time " + e + "s"), _r_();
}, 5e3);
t(this).one("slideBox.close", function() {
_i_("619:d2e4d9d8"), l || (clearTimeout(h), c.trackEvent(c.userProfileTracker, "confirmation: no_lightbox - closed before loaded")), "show-slidebox" === s.attr("data-icc") && c.trackEvent("Unblock-AV", "close", "update-cc-modal"), d = !0, _r_();
});
var f = i.innerHeight >= 700 ? 1 :0;
t.ajax({
url:o + "&tmpl=mybooking_lightbox_process" + (e.env.slideBox.auth_key.length ? "&auth_key=" + e.env.slideBox.auth_key :"") + "&bhephstprf=" + f,
type:"post",
success:function(i) {
if (_i_("619:687a97ad"), d) return _r_();
l = new Date(), t(n).hasClass("slidebox--active") && a.updateContent(s, i), u(t(n)), c.trackEvent(c.userProfileTracker, "confirmation: no_lightbox - loaded successfully!"), e.eventEmitter.trigger("slideBox.loadCompleted", {
target:s
}), s.trigger("slideBox.loadCompleted"), s.loadComponents(), _r_();
},
error:function(t) {
_i_("619:8f521931"), e.eventEmitter.trigger("slideBox.loadError", [ s, t ]), clearInterval(h), l = 1, c.trackEvent(c.userProfileTracker, "confirmation: no_lightbox - open error " + t.status), _r_();
}
}), _r_();
},
refreshPageOnSave:function(e) {
_i_("619:3dfbf896");
var i = this;
t(e).unbind("slideBox.save").bind("slideBox.save", function() {
_i_("619:ab0f8e25"), i.callbacks.refreshPageWithoutLightbox(), _r_();
}), _r_();
},
refreshPageOnClose_pb_mb_reload_lightbox_after_close:function(e) {
_i_("619:09707be2"), t(this).unbind("slideBox.close").bind("slideBox.close", function() {
_i_("619:32c231a4");
var t = _.getOption("closeType");
if ("manualByCrossButton" !== t && "manualByOverlay" !== t) return _r_();
e.is("[data-slidebox-reload-on-close-after-action]"), e.data("slidebox-reload-on-close-after-action") && setTimeout(function() {
_i_("619:6da9fd81"), this.callbacks.refreshPageWithoutLightbox(), _r_();
}.bind(this), 150), _r_();
}.bind(this)), _r_();
},
refreshPageWithoutLightbox:function() {
_i_("619:fefe35c0");
var e = /(\;|&)(pbsource|source|pbmeal|op|checkin|checkout)\=[\w-]+/g;
e.test(location.href) ? location.href = location.href.replace(e, "") :i.location.reload(), _r_();
},
myBookingMealPlan:n,
cancelForkSubmit:function(e, i, n) {
_i_("619:e2626155");
var r = this, a = t(n), s = t(e), o = t(i), _ = a.serialize() + "&tmpl=mybooking_lightbox_process", c = a.find("[name=cancel_type]").prop("value"), l = a.prop("action"), d = t(e).find(".js-mybooking-cancel-survey-error");
if (a.is("[data-required-survey]") && !this.callbacks.validateSurvey(a)) return d.removeClass("g-hidden"), r.updateHeight(e), _r_();
this.cancelForkInstance.toggleLoader(!0), t.ajax({
url:l,
type:"post",
data:_,
success:function() {
_i_("619:3d78424a"), r.cancelForkInstance.showFinal(c), r.callbacks.refreshPageOnClose_pb_mb_reload_lightbox_after_close.call(r, o), _r_();
},
error:function(e) {
_i_("619:03b50ea9"), r.callbacks.showAjaxError(e, s), r.cancelForkInstance.showError(), _r_();
}
}), _r_();
},
cancelButtonSubmitCallback:function(e, i) {
_i_("619:e3257a6d");
var n = this, r = t(e), a = t(i), s = r.find("form"), o = s.find("[type=submit], .slideBoxSubmit"), c = t(e).find(".js-mybooking-cancel-survey-error"), l = s.serialize(), d = "docancel" === r.find("[name=do]").val();
if (s.is("[data-required-survey]") && !this.callbacks.validateSurvey(s)) return c.removeClass("g-hidden"), n.updateHeight(e), _r_();
o.addClass("submitting"), o.attr("disabled", "disabled"), s.find("input[type=submit][name]").each(function() {
_i_("619:3cae11e52"), l += "&" + encodeURI(t(this).attr("name")) + "=" + encodeURI(t(this).attr("value")), _r_();
});
var u = !!+B.env.b_non_refundable, h = !!+B.env.b_has_valid_grace_period;
t.ajax({
url:s.attr("action"),
type:"post",
data:l + "&tmpl=mybooking_lightbox_process",
success:function() {
if (_i_("619:82863863"), d && (B.require("events").emit("cancellation:success"), u && !h)) return t(".js-cancel-request-start").addClass("g-hidden"), t(".js-cancel-request-end").removeClass("g-hidden"), n.updateHeight(e), _r_();
_.setOption("hasAjaxErrors", !1), r.find("fieldset").remove(), r.find(".cancel-final-step").css("display", "block"), n.callbacks.refreshPageOnClose_pb_mb_reload_lightbox_after_close.call(n, a), _r_();
},
error:function(e) {
_i_("619:b6f631d1"), n.callbacks.showAjaxError(e, r), _r_();
}
}), t(i).attr(n.options.closeCallbackAttribute, "refreshPageOnClose"), _.setCallback("refreshPageOnClose", function() {
if (_i_("619:a799f69a"), _.getOption("ajaxFailureFeedback")) return _r_(!1);
this.callbacks.refreshPageWithoutLightbox(), _r_();
}), _r_();
},
showAjaxError:function(t, i) {
_i_("619:aa5f7a68");
var n = i.find(".js-slidebox__inner"), r = e.jstmpl("mybooking_ajax_error").render();
_.getOption("ajaxFailureFeedback") && (i.unbind("slideBox.save"), e.eventEmitter.trigger("slideBox.loadError", [ i, t ])), n.html(r), _r_();
},
paymentPartDetailOpenCallback:function(e, t) {
_i_("619:09790045"), this.setOption("autoFormSubmit", !1), this.setOption("autoLinkSubmit", !1), this.callbacks.myBookingButtonEvents.call(this, e, t), this.callbacks.loadByAjax.call(this, e, t), this.callbacks.refreshPageOnSave.call(this, e, t), _r_();
},
cancelOpenCallback:function(e, t) {
_i_("619:f01f067d"), this.callbacks.myBookingButtonEvents.call(this, e, t), this.callbacks.loadByAjax.call(this, e, t), this.callbacks.refreshPageOnSave.call(this, e, t), this.callbacks.enableSurvey.call(this, e), this.callbacks.enableHidingMandatorySurveyValidationError.call(this, e), B.et.stage("AEeNTfbaaNRfATRKIXbRSUWe", 1), _r_();
},
enableSurvey:function(e) {
_i_("619:7d481e7d");
var i = this, n = t(e);
n.on("change", ".mb-cancel-survey__blocks input, .mb-cancel-survey__blocks select", function() {
_i_("619:a0ad7414");
var e = t(".mb-cancel-survey__blocks"), i = e.find("input, select");
r(i), _r_();
}), n.on("click", "input:radio", function() {
_i_("619:50c7157d");
var r = t(this);
"needed_to_change_reservation" === r.val() ? r.siblings("div").removeClass("mb-hidden") :n.find(".needed_to_change_reservation").addClass("mb-hidden"), i.updateHeight(e), _r_();
}), n.off("change", "li.needed_to_change_reservation_container select").on("change", "li.needed_to_change_reservation_container select", function() {
_i_("619:2573831a");
var n = t(this);
"wanted_to_request_other" === n.val() ? n.parent().siblings(".wanted_to_request_other").removeClass("mb-hidden") :n.parent().siblings(".wanted_to_request_other").addClass("mb-hidden"), n.parent().siblings(".js-cancellation-survey-solution-dates").toggleClass("mb-hidden", "wanted_to_change_dates" !== n.val()), i.updateHeight(e), _r_();
}), n.off("click", ".js-mb-survery-solution-change-dates").on("click", ".js-mb-survery-solution-change-dates", function(e) {
_i_("619:da89c117"), t('a[data-slidebox-target="#slidebox-change-dates"]').click(), _r_();
});
function r(e) {
_i_("619:8ac7d9bb"), e.each(function(e, i) {
_i_("619:57127d7c");
var n = "." + i.value;
if ("SELECT" == t(i).prop("tagName").toUpperCase()) for (var r = i.options, e = 0; e < r.length; e++) {
var o = r[e];
o.value && (n = "." + o.value, o.selected && !i.disabled ? a(n) :s(n));
} else "INPUT" == t(i).prop("tagName").toUpperCase() && "RADIO" == t(i).prop("type").toUpperCase() && (i.checked && !i.disabled ? a(n) :s(n));
_r_();
}), _r_();
}
function a(e) {
_i_("619:52d7c3cb");
var i = t(".mb-cancel-survey__blocks"), n = i.find(e);
n.each(function(e, i) {
_i_("619:f84c7f0e");
var n = t(i);
n.removeClass("mb-hidden"), n.find("input, select, textarea").each(function(e, t) {
_i_("619:28d9a8f7"), t.disabled = "", _r_();
}), _r_();
}), _r_();
}
function s(e) {
_i_("619:95f6d7ec");
var i = t(".mb-cancel-survey__blocks"), n = i.find(e);
n.each(function(e, i) {
_i_("619:2c1cb10b");
var n = t(i);
n.addClass("mb-hidden"), n.find("input, select, textarea").each(function(e, i) {
_i_("619:1de12c54"), i.disabled = "disabled";
var n = t(i);
if ("INPUT" == n.prop("tagName").toUpperCase() && "RADIO" == n.prop("type").toUpperCase()) s("." + n.value); else if ("SELECT" == n.prop("tagName").toUpperCase()) for (var r = 0; r < i.options.length; r++) {
var a = i.options[r];
a.value && s("." + a.value);
}
_r_();
}), _r_();
}), _r_();
}
_r_();
},
cancelForkInstance:null,
cancelSureCheckbox:null,
cancelForkLightbox:function(e, t) {
_i_("619:2e9b940a");
var i = B.require("component/pb/cancel_fork");
i && (this.cancelForkInstance && this.cancelForkInstance.destroy(), this.cancelForkInstance = new i(this, e, t)), _r_();
},
changeDatesNRNewDatesInstance:null,
changeDatesNROpenCallback:function(e, t) {
_i_("619:00cd4ae0");
var i = B.require("component/myreservations/change_dates_nr");
i && (this.changeDatesNRNewDatesInstance, this.changeDatesNRNewDatesInstance = new i(this, e, t)), c.trackEvent(c.userProfileTracker, B.env.b_action + " : Change dates NR, " + B.env.b_booking_cancellation_type), B.et.stage("IZEZVPJWFNFBbWPSCMeRT", 1), _r_();
},
changeDatesNRSubmitCallback:function(e, i, n) {
_i_("619:5cb68986");
var r = t(n);
this.changeDatesNRNewDatesInstance.submitStep(r), _r_();
},
enableHidingMandatorySurveyValidationError:function(e) {
_i_("619:5f425859");
var i = t(e);
i.on("click", "input:radio", function() {
_i_("619:453a9680"), i.find(".js-mybooking-cancel-survey-error").addClass("g-hidden"), _r_();
}), _r_();
},
validateSurvey:function(e) {
_i_("619:ec0d1fc7");
var i = !0;
if (B.env.fe_feature_running_POB_CANCELLATION_SURVEY_VERSIONING) for (var n = t(".mb-cancel-survey__blocks"), r = n.find("input, select"), a = 0; a < r.length; a++) {
var s = t(r[a]);
if (!s.prop("disabled") && !s.val()) {
i = !1;
break;
}
} else {
var o = e.find('input[type="radio"]:checked'), _ = o.val();
switch (o.length || (i = !1), _) {
case "found_better_place_other":
var c = e.find('select[name="cancel_survey_found_better_place_other"]');
"" === c.val() && (i = !1);
break;

case "needed_to_change_reservation":
var l = e.find('select[name="cancel_survey_needed_to_change"]');
"" === l.val() && (i = !1);
}
}
return _r_(i);
},
showPriceDetailsCallback:function(e, t) {
_i_("619:44713a5d"), this.callbacks.myBookingButtonEvents.call(this, e, t), this.callbacks.loadByAjax.call(this, e, t), _r_();
},
changeCCOpenCallback:function(e, t) {
_i_("619:42ea33fa"), this.callbacks.myBookingButtonEvents.call(this, e, t), this.callbacks.loadByAjax.call(this, e, t), this.callbacks.refreshPageOnSave.call(this, e, t), c.trackEvent(c.userProfileTracker, B.env.b_action + " : Edit CC, " + B.env.b_booking_cancellation_type), B.et.stage("IZEZVZFJbEILFHYbcZTTae", 1), _r_();
},
pb_mb_request_lightbox_titles:function(e, i) {
_i_("619:c36a8738"), this.lb || (this.lb = B.require("lightbox/change-time")), this.lb.init(), e && B.env.b_show_arrival_time_range && t(e).loadComponents(), t(e).find(".fieldline.line_time.check-out label").one("click", function() {
_i_("619:b2deca14"), c.trackEvent(c.userProfileTracker, l, "changes ETA step1:click on checkout"), _r_();
}), e && i && t(e).hasClass("slidebox--checkin-time") && h.ga_tracking_submit_arrival_time(e, i), _r_();
},
ga_tracking_submit_arrival_time:function(e, i) {
_i_("619:e666edf0");
var n, r = t(e), a = function() {
_i_("619:41c3a044");
var e = r.find(".js-slidebox__inner > form input[name=do]").val();
switch (e) {
case "confirm_checkin_checkout_times":
return _r_(1);

case "confirmed_checkin_checkout_times":
return _r_(2);
}
return _r_(3);
};
try {
n = B.require("pb_eta_utils");
} catch (s) {}
r.find(".js_time_submit").on("click", function() {
_i_("619:6f13ff82");
var e = t(".slidebox--checkin-time [name=requested_checkin_time]");
1 === e.length && e.val() > 0 && c.trackEvent(c.userProfileTracker, l, "changes ETA step1:checkin " + (e.val() - 1));
var i = t(".slidebox--checkin-time [name=requested_checkout_time]");
1 === i.length && i.val() > 0 && c.trackEvent(c.userProfileTracker, l, "changes ETA step1:checkout " + (i.val() - 1)), _r_();
}), r.parent().delegate(".modal-mask-closeBtn", "click", function() {
_i_("619:4f9687f0");
var e = a();
2 === e ? c.trackEvent(c.userProfileTracker, l, "changes ETA step2:close box") :3 === e && c.trackEvent(c.userProfileTracker, l, "changes ETA step3:close box"), _r_();
}), r.parent().delegate(".MyBookingOptionsCancel", "click", function() {
_i_("619:aa91744b"), c.trackEvent(c.userProfileTracker, l, "changes ETA step2:click on cancel"), _r_();
}), r.parent().delegate(".js_time_submit", "click", function() {
_i_("619:cd3e28f3"), c.trackEvent(c.userProfileTracker, l, "changes ETA step1:click on next step"), _r_();
}), r.parent().delegate(".submit_checkin_time_button", "click", function() {
_i_("619:cf98c9b7"), c.trackEvent(c.userProfileTracker, l, "changes ETA step2:click on submit"), _r_();
}), r.parent().delegate(".MyBookingOptionsSaveChanges", "click", function() {
_i_("619:e7a4df44"), c.trackEvent(c.userProfileTracker, l, "changes ETA step3:click on ok"), _r_();
}), d || (r.on("slideBox.submitCompleted", function() {
if (_i_("619:949a7447"), 3 === a()) {
var e = r.find(".myBookingOptionsConfirm .js-at-submit-success");
if (0 === e.length) c.trackEvent(c.userProfileTracker, l, "Submitted ETA backend error"); else {
var s = t(i).data("checkin-time-raw"), o = e.data("time");
o && "0" != o && s && "," !== s && n && n.checkETAinCheckInHours && n.checkETAinCheckInHours(s, o, function() {
_i_("619:a249a31e"), c.trackEvent(c.userProfileTracker, l, "Submitted ETA within checkin hours"), _r_();
}, function() {
_i_("619:be970e5f"), c.trackEvent(c.userProfileTracker, l, "Submitted ETA outside checkin hours"), _r_();
});
}
}
_r_();
}), d = !0), _r_();
},
pb_checkin_and_out_close:function(e) {
_i_("619:33ee5955");
var i = t(e), n = i.find("form input[name=do]");
if (1 === n.length) {
var r = n.val();
"confirm_checkin_checkout_times" === r && c.trackEvent(c.userProfileTracker, l, "changes ETA step1:close with no changes");
} else if (1 === i.find(".myBookingOptionsConfirm[data-status=confirmed_checkin_checkout_times]").length) {
var a = i.find(".myBookingOptionsConfirm .js-at-submit-success"), s = a.data("time");
if (s && "0" != s) {
var o = t(".schedule-checkin-time-popover__link .js-schedule-checkin-time__after");
1 === o.length && (o.show(500), t(".schedule-checkin-time-popover__link .js-schedule-checkin-time__before").hide(500), t(".schedule-checkin-time-popover.schedule-checkin-time-popover__content .js-schedule-checkin-time__after").show(), t(".schedule-checkin-time-popover.schedule-checkin-time-popover__content .js-schedule-checkin-time__before").hide(), t(".js-eta-submission .eta-submission__arranged-cta").hide());
var _ = t(".js-display-eta-submitted");
if (1 === _.length) {
var d = a.data("time-fmt-next-day");
if (void 0 !== d) {
var u = "bhpse_" + ("confirmation" === B.env.b_action ? "conf" :"myres") + "_you_requested_arrival_time";
1 == d && (u += "_next_day");
var h = B.jstmpl.translations(u, null, {
start_time:a.data("time-fmt-from"),
end_time:a.data("time-fmt-to")
});
_.html(h);
}
}
B.et.stage("NVNZZFZbSOBNHSQFUUPaEBNWNAcddAbDZdfEbQMASScAae", 1);
}
}
this.lb.destroy(), _r_();
},
changeDatesOpenCallback:function(e, i) {
_i_("619:badff1d5"), this.callbacks.myBookingButtonEvents.call(this, e, i), this.callbacks.loadByAjax.call(this, e, i), this.callbacks.refreshPageOnSave.call(this, e, i);
var n = "slideBox.loadCompleted slideBox.submitCompleted slideBox.linkCompleted";
t(e).unbind(n).bind(n, function() {
_i_("619:69d0b47d");
var e = t("[data-checkin-checkout-selector]");
if (!e.length) return _r_(!0);
e.component("checkin-checkout-selector"), _r_();
}), c.trackEvent(c.userProfileTracker, B.env.b_action + " : Change dates, " + B.env.b_booking_cancellation_type), _r_();
},
changeRoomDatesOpenCallback:function(e, t) {
_i_("619:e79d79ff"), this.callbacks.changeDatesOpenCallback.call(this, e, t), _r_();
},
changeRoomOpenCallback:function(e, n) {
_i_("619:d31e615b");
var r = this, a = t(e);
this.callbacks.myBookingButtonEvents.call(this, e, n), this.callbacks.loadByAjax.call(this, e, n), this.callbacks.refreshPageOnSave.call(this, e, n), a.unbind("slideBox.loadCompleted").bind("slideBox.loadCompleted", function() {
_i_("619:52f940a3");
var t = i.toggleRD;
i.toggleRD = function() {
_i_("619:31d8c0e5");
var n = t.apply(i, arguments);
return r.updateHeight(e, a.children(".js-slidebox__inner").outerHeight(!0)), _r_(n);
}, _r_();
}), _r_();
},
cancelRoomOpenCallback:function(e, t) {
_i_("619:232f20d2"), this.callbacks.cancelOpenCallback.call(this, e, t), _r_();
},
requestsUpdateCallback:function(e, i) {
_i_("619:0fd54789");
var n = t(e), r = t(i), a = "mb-myBookingOptionItem—positive";
this.callbacks.myBookingButtonEvents.call(this, e, i), n.unbind("slideBox.save").bind("slideBox.save", function() {
_i_("619:a1efd8c4");
var e = t(".mb-section--requests"), i = r, n = i.find(".mb-myBookingOptionsStatus"), s = e.attr("data-today"), o = n.attr("data-request-copy"), _ = o + " (" + s + ")";
n.html(_).removeClass("mb-hidden"), i.hasClass("mb-ge-reservation-freebie") && i.addClass("mb-disabled"), e.find(".mb-myBookingOptionItem").removeClass(a), i.addClass(a), _r_();
}), _r_();
},
specialRequestCallback:function(i, n) {
if (_i_("619:875cbc2b"), this.callbacks.requestsUpdateCallback.call(this, i, n), e.env.pb_mybooking_special_request_textarea_placeholder) {
var r = t(i).find("textarea"), a = e.env.pb_mybooking_special_request_textarea_placeholder;
void 0 !== document.createElement("input").placeholder ? r.attr("placeholder", a) :(r.data("placeholder", a), r.text(a), r.get(0).onfocus = function() {
_i_("619:1b32ea8b"), this.value === a && (this.value = ""), _r_();
}, r.get(0).onblur = function() {
_i_("619:5a881a18"), "" === this.value && (this.value = a), _r_();
});
}
_r_();
},
addRoomOpenCallback:function(e, t) {
_i_("619:aa6845b6"), this.callbacks.myBookingButtonEvents.call(this, e, t), this.callbacks.refreshPageOnSave.call(this, e, t), _r_();
},
bpgOpenCallback:function(e, i) {
_i_("619:61ccf18c"), t(".bpg_claim_link_and_price").css("display", "none"), t(".bpg_detailed_conditions_holder").css("display", "none"), t(".bpg_helper_message_stage_2").css("display", "none"), c.trackEvent(c.userProfileTracker, "BPG claim form", "Opened"), this.callbacks.myBookingButtonEvents.call(this, e, i), _r_();
},
bpgSubmitCallback:function(e, i) {
_i_("619:5ea157e5");
var n = t(".slidebox--bpg-claim .bpg_email_sending_error"), r = t(".slidebox--bpg-claim .bpg_claim_submit");
if (n.css("display", "none"), r.hasClass("bpg_claim_submit--loading")) return _r_(!1);
r.addClass("bpg_claim_submit--loading"), c.trackEvent(c.userProfileTracker, "BPG claim form", "Form submitted"), this.callbacks.autoFormSubmit.call(this, e, i), _r_();
},
bpgCloseCallback:function() {
_i_("619:880de7c7"), c.trackEvent(c.userProfileTracker, "BPG claim form", "Closed"), _r_();
},
bpgInitCallback:function() {
_i_("619:2a45e30c");
var e = !1, i = !1, n = !1, r = t(".slidebox--bpg-claim .bpg_claim_link_and_price"), a = t(".slidebox--bpg-claim .bpg_claim_competitor_price"), s = t(".slidebox--bpg-claim .bpg_claim_competitor_price_error"), o = t(".slidebox--bpg-claim .bpg_claim_submit"), _ = t(".slidebox--bpg-claim .bpg_claim_form"), l = t(".slidebox--bpg-claim .bpg_detailed_conditions_holder"), d = t(".slidebox--bpg-claim .bpg_claim_condition_checker"), u = t(".slidebox--bpg-claim .bpg_claim_competitor_price_formatting_error"), h = t(".slidebox--bpg-claim .bpg_claim_competitor_price_be_error"), f = t(".slidebox--bpg-claim .bpg_claim_link_be_error"), p = d.find("input[type=checkbox]").length, m = function(e, t, i) {
_i_("619:bc4fc146");
var n = i || 500, r = e.parent();
t.show(0), r.height(t.height()), t.hide(0), e.css("display", "none"), t.fadeIn(n, function() {
_i_("619:b6b9687a"), r.css("height", ""), _r_();
}), _r_();
}, b = function(e) {
_i_("619:2493638c"), e.preventDefault(), e.stopPropagation(), _r_();
}, g = function() {
_i_("619:20640473"), e && i && n ? (o.removeClass("bpg_claim_submit--disabled"), o.bind("mouseover mouseout mousemove", b)) :(o.addClass("bpg_claim_submit--disabled"), o.unbind("mouseover mouseout mousemove", b)), _r_();
}, v = function(i, n) {
_i_("619:dadca2ef");
var a = d.find("[type=checkbox]:checked").length;
n ? i.removeClass("bpg_claim_condition_input__m-not-checked").addClass("bpg_claim_condition_input__m-checked") :i.removeClass("bpg_claim_condition_input__m-checked").addClass("bpg_claim_condition_input__m-not-checked"), a === p && (c.trackEvent(c.userProfileTracker, "BPG claim form", "Second page"), m(t(".slidebox--bpg-claim .bpg_claim_conditions_step_1"), r), m(t(".slidebox--bpg-claim .bpg_helper_message_stage_1"), t(".slidebox--bpg-claim .bpg_helper_message_stage_2")), e = !0), g(), _r_();
};
o.bind("click", function() {
_i_("619:9e3173b1");
var e = t(this);
e.hasClass("bpg_claim_submit--disabled") || _.submit(), _r_();
}), t(".slidebox--bpg-claim .bpg_claim_more_info").bind("click", function() {
_i_("619:575799b4"), c.trackEvent(c.userProfileTracker, "BPG claim form", "More link"), m(_, l), _r_();
}), t(".slidebox--bpg-claim .bpg_claim_more_info_back").bind("click", function() {
_i_("619:4c0e0a14"), m(l, _), _r_();
}), d.bind("click", function() {
_i_("619:c04a1483");
var e = t(this), i = e.find("input"), n = i.attr("checked");
n ? i.attr("checked", !1) :i.attr("checked", !0), v(e, !n), _r_();
}), d.find("input[type=checkbox]").bind("click", function(e) {
_i_("619:3dc2a015"), e.stopPropagation();
var i = t(this), n = i.parent(), r = i.attr("checked");
v(n, r), _r_();
}), t(".slidebox--bpg-claim .bpg_claim_price_input").keypress(function(e) {
_i_("619:f5d007d7");
var t = e.keyCode ? e.keyCode :e.which, i = !(t >= 48 && 57 >= t), n = [ 8, 16, 17, 18, 35, 36, 37, 38, 39, 40 ], r = -1 !== n.indexOf(t);
i && !r && e.preventDefault(), _r_();
}), t(".slidebox--bpg-claim .bpg_claim_customer_care .js-bpg-claim-cs-link").click(function() {
_i_("619:ba277aa9"), c.trackEvent(c.userProfileTracker, "BPG claim form", "CS link"), _r_();
}), r.find(".bpg_claim_price_input").bind("change", function() {
_i_("619:6880e789");
var e = Number(r.attr("data-b-price")), n = t(this).val(), o = Number(n), _ = n.indexOf(",") >= 0 || n.indexOf(".") >= 0;
!isNaN(o) && e > o && o > 0 && !_ ? (i = !0, s.css("display", "none"), u.css("display", "none"), h.css("display", "none"), a.removeClass("bpg_claim_condition_input__m-not-checked bpg_claim_condition_input__m-invalid").addClass("bpg_claim_condition_input__m-checked")) :!isNaN(o) && o >= e ? (i = !1, h.css("display", "none"), u.css("display", "none"), c.trackEvent(c.userProfileTracker, "BPG claim form", "Higher price"), a.removeClass("bpg_claim_condition_input__m-not-checked bpg_claim_condition_input__m-checked").addClass("bpg_claim_condition_input__m-invalid"), s.css("display", "block")) :(i = !1, h.css("display", "none"), s.css("display", "none"), a.removeClass("bpg_claim_condition_input__m-checked bpg_claim_condition_input__m-invalid").addClass("bpg_claim_condition_input__m-not-checked").addClass("bpg_claim_condition_input__m-invalid"), u.css("display", "table-cell")), g(), _r_();
}), r.find(".bpg_claim_link_input").bind("keyup", function() {
_i_("619:f48fca10");
var e = t(this).val().trim();
e ? (n = !0, c.trackEvent(c.userProfileTracker, "BPG claim form", "Competitor link"), t(".slidebox--bpg-claim .bpg_claim_competitor_link").removeClass("bpg_claim_condition_input__m-not-checked bpg_claim_condition_input__m-invalid").addClass("bpg_claim_condition_input__m-checked"), f.css("display", "none")) :(n = !1, t(".slidebox--bpg-claim .bpg_claim_competitor_link").removeClass("bpg_claim_condition_input__m-checked").addClass("bpg_claim_condition_input__m-not-checked")), g(), _r_();
}), d.find("input[type=checkbox]").removeAttr("checked"), r.find("input").trigger("keyup"), _r_();
}
};
o.exports = {
init:function() {
_i_("619:a62ddc96"), _.init({
identifier:".hasSlideBox:not(.mb-disabled,.js-mb-btn--disabled)"
});
for (var i in h) if (h.hasOwnProperty(i)) if ("function" == typeof h[i]) _.setCallback(i, h[i]); else if ("[object Object]" === Object.prototype.toString.call(h[i])) for (var a in h[i]) h[i].hasOwnProperty(a) && _.setCallback(i + "." + a, h[i][a]);
if (_.setOption("autoFormSubmit", !0), _.setOption("autoLinkSubmit", !0), _.setOption("autoLinkSubmitSelector", "a:not([onclick], .js-default-action, .js-bpg-claim-cs-link)"), _.setOption("warnOnClose", !0), _.setOption("noWarnSelector", ".MyBookingOptionsSaveChanges"), e.env.slideBox) if ("do_pay_addmeals" === e.env.slideBox.scroll && n) n.checkAutoOpenByURL.call(_); else {
var s = r.getOpenDefaultSelector();
r.shouldOpenDefaultBeClicked(s) && setTimeout(function() {
_i_("619:243d5391"), _.toggleFromButton.call(_, s), _r_();
}, 200);
}
if (e.env.mybooking_print_confirmation) {
var o = t(".mb-more__list a.view_conf").attr("href");
o && (o = o.replace(/^confirmation/, "confirmationprint")), t(".mb-more a.print_conf_trigger").click(function() {
return _i_("619:03848a2a"), e.eventEmitter.trigger("confirmation.print"), _r_(!1);
}), t("a.print_conf_lang_trigger").click(function() {
return _i_("619:03848a2a1"), e.eventEmitter.trigger("confirmation.print"), _r_(!1);
});
}
t(".mybookings_filters_container").css("z-index", "999"), _r_();
}
}, _r_();
}), B.when({
events:"ready"
}).require([ "mybooking/no-lightbox" ], function(e) {
_i_("619:de4c003b"), e.init(), _r_();
}), e.eventEmitter.bind("bpgClaimFrom.error", function(e, i) {
_i_("619:4fa32dbe");
var n = t(".slidebox--bpg-claim .bpg_claim_link_and_price"), r = t(".slidebox--bpg-claim .bpg_claim_submit"), a = t(".slidebox--bpg-claim .bpg_claim_competitor_price_error"), s = t(".slidebox--bpg-claim .bpg_claim_competitor_price_be_error"), o = t(".slidebox--bpg-claim .bpg_claim_link_be_error"), _ = t(".slidebox--bpg-claim .bpg_email_sending_error"), c = !1;
1 == i.price ? (n.find(".bpg_claim_competitor_price").removeClass("bpg_claim_condition_input__m-not-checked bpg_claim_condition_input__m-checked").addClass("bpg_claim_condition_input__m-invalid"), a.css("display", "none"), s.css("display", "block"), c = !0) :1 == i.link ? (n.find(".bpg_claim_competitor_link").removeClass("bpg_claim_condition_input__m-not-checked bpg_claim_condition_input__m-checked").addClass("bpg_claim_condition_input__m-invalid"), o.css("display", "block"), c = !0) :(1 == i.booker || 1 == i.cs) && _.css("display", "block"), c && r.addClass("bpg_claim_submit--disabled"), _r_();
}), e.eventEmitter.bind("slideBox.loadError", function(t, i) {
_i_("619:5e3a7596");
var n = B.require("mybooking/slidebox");
if (!n.getOption("ajaxFailureFeedback")) return _r_(!1);
var r, a = i.find(".js-slidebox__inner");
r = "cancel" === n.getOption("ajaxFailureFeedback") ? e.jstmpl("mybooking_ajax_error").render() :e.jstmpl("mybooking_generic_ajax_error").render(), a.html(r), n.setOption("hasAjaxErrors", !0), _r_();
}), _r_();
}(booking, jQuery, window), B.when({
events:"ready"
}).run(function(e) {
_i_("619:76cb5a4b"), $(".js-toggle-show-all-facilities").click(function() {
return _i_("619:e1b15f38"), $(this).parent().children(".mb-room__facilities__container").removeClass("one-row"), $(this).addClass("is-hidden"), _r_(!1);
}), _r_();
}), function(e, t, i) {
"use strict";
_i_("619:273c2c94");
var n = e.require("jquery");
e.components && e.components.define("b-mybooking-gallery", function() {
_i_("619:1bf67324"), e.components.extend(this, "legacy-emitter"), this.options = {}, this.get = function(e) {
return _i_("619:dc4811e8"), _r_(this.options[e]);
}, this.set = function(e, t) {
return _i_("619:2af25de5"), this.options[e] = t, _r_(this);
};
var r, a, s, o, _, c, l, d, u, h, f = this, p = {}, m = {}, b = {
stage:".b-photo-gallery-fullscreen--stage",
img:".b-photo-gallery-fullscreen--image img",
drawer:".b-photo-gallery-fullscreen--drawer",
thumbnailsWrapper:".b-photo-gallery-fullscreen--thumbnails-wrapper",
thumbnails:".b-photo-gallery-fullscreen--thumbnails",
title:".b-photo-gallery-fullscreen--title",
thumbnail:".b-photo-gallery-fullscreen--thumbnail",
previous:".b-photo-gallery-fullscreen--previous",
next:".b-photo-gallery-fullscreen--next",
close:".b-photo-gallery-fullscreen--close",
paginateLeft:".b-photo-gallery-fullscreen--paginate-left",
paginateRight:".b-photo-gallery-fullscreen--paginate-right",
pagination:".b-photo-gallery-fullscreen--pagination"
}, g = 0, v = 0, y = 0, k = !1, w = !1;
f.options.thumbnailsPaginationOffset = 400, f.init = function() {
_i_("619:a512eba1"), r = e.require("overlay"), s = n("html").component("keyboard"), w = "msie" === e.env.b_browser && e.env.b_browser_version < 9, r.on("hide", f.hide), _r_();
}, f.create = function() {
_i_("619:64e19f84"), a || (a = r.getElement(), a.html(p.gallery())), _r_();
}, f.show = function(e) {
_i_("619:f66c02be"), m.id !== e.id && (f.create(), _ = a.find(b.stage), c = a.find(b.img), l = a.find(b.drawer), d = a.find(b.thumbnailsWrapper), u = a.find(b.thumbnails), a.find(b.title).text(e.title), u.html(n.map(e.photos, p.thumbnail).join("")), a.find(b.thumbnail).bind("click", f.clickPhoto), m.additionalClass !== e.additionalClass && (m.additionalClass && a.removeClass(m.additionalClass), e.additionalClass && a.addClass(e.additionalClass))), m.id === i && (c.bind("click", f.imgClick), a.find(b.previous).bind("click", f.previousPhoto).toggle(e.photos.length > 1), a.find(b.next).bind("click", f.nextPhoto).toggle(e.photos.length > 1), a.find(b.close).bind("click", function(e) {
_i_("619:18eb7aeb"), r.hide(), e.preventDefault(), _r_();
}), a.find(b.paginateLeft).bind("click", f.thumbnailsPaginateLeft), a.find(b.paginateRight).bind("click", f.thumbnailsPaginateRight), s.on("keyup:ArrowLeft", f.previousPhoto), s.on("keyup:ArrowRight", f.nextPhoto)), n(t).bind("resize", D), r.getElement({
hideElements:[ _[0], u[0] ]
}), r.show(), m.id !== e.id ? (m = e, a.find(b.thumbnail + ":first").click(), m.photos.length > 1 ? (v = 0, a.find(b.thumbnail).each(function() {
_i_("619:f6590406"), v += n(this).outerWidth(!0), _r_();
}), B(), y = 0, a.find(b.pagination).each(function() {
_i_("619:fbe47a6d"), y += n(this).outerWidth(), _r_();
}), l.show()) :l.hide()) :D(), _r_();
}, f.hide = function() {
_i_("619:c8caf82a"), n(t).unbind("resize", D), _r_();
}, f.clickPhoto = function(e) {
_i_("619:cbd08282");
var t = n(this), i = t.data();
if (o && o.removeClass("-is-active"), o = t.addClass("-is-active"), _.addClass("-is-loading"), clearTimeout(h), h = setTimeout(function() {
_i_("619:a47f4f6f");
var e = c[0];
e.onload = function() {
_i_("619:005d8f83"), e.onload = null, C(), _.removeClass("-is-loading"), _r_();
}, e.src === i.url && e.complete ? e.onload() :e.src = i.url, _r_();
}, 250), m.photos.length > 1) {
var r = $(), a = x();
r != o && (new Image().src = r.data("url")), a != o && (new Image().src = a.data("url"));
}
_r_();
}, f.imgClick = function(e) {
_i_("619:77b5dd32");
var t = n(this).width() / 2, i = e.offsetX;
1 == m.photos.length ? r.hide() :t >= i ? f.previousPhoto() :f.nextPhoto(), _r_();
}, f.previousPhoto = function(e) {
_i_("619:8d3b7c90"), e && e.preventDefault && e.preventDefault(), m.photos.length > 1 && $().click(), _r_();
}, f.nextPhoto = function(e) {
_i_("619:8fdc28c4"), e && e.preventDefault && e.preventDefault(), m.photos.length > 1 && x().click(), _r_();
}, f.thumbnailsPaginate = function(e) {
_i_("619:838586a2");
var t = w ? parseInt(d.css("left")) - 40 :parseInt(d.css("margin-left")), i = t + e * f.options.thumbnailsPaginationOffset;
i > 0 ? i = 0 :-v + g - y > i && (i = -v + g - y), d.css(w ? "left" :"margin-left", (w ? i + 40 :i) + "px"), _r_();
}, f.thumbnailsPaginateLeft = function(e) {
_i_("619:ed7cbcb3"), e && e.preventDefault(), f.thumbnailsPaginate(1), _r_();
}, f.thumbnailsPaginateRight = function(e) {
_i_("619:89497ace"), e && e.preventDefault(), f.thumbnailsPaginate(-1), _r_();
};
function $() {
_i_("619:cd215d96");
var e = o.prev();
return e.length || (e = a.find(b.thumbnail + ":last")), _r_(e);
}
function x() {
_i_("619:6b5b46d0");
var e = o.next();
return e.length || (e = a.find(b.thumbnail + ":first")), _r_(e);
}
function C() {
_i_("619:84413989");
var e = {
width:Math.floor(_.width()),
height:Math.floor(_.height())
}, t = {
width:Math.floor(o.data("width")),
height:Math.floor(o.data("height"))
}, i = t.width, n = t.height;
i > e.width || n > e.height ? (i > e.width && (n = n * e.width / i, i = e.width), n > e.height && (i = i * e.height / n, n = e.height), c.css({
width:i + "px",
height:n + "px"
})) :c.css({
width:"auto",
height:"auto"
}), w && c.parent().css({
marginTop:"-" + Math.floor(n / 2) + "px",
marginLeft:"-" + Math.floor(i / 2) + "px"
}), _r_();
}
function B() {
_i_("619:57123328"), g = Math.floor(l.width()), v > g && !k ? (k = !0, l.addClass("-is-scrollable")) :g >= v && k && (k = !1, l.removeClass("-is-scrollable")), _r_();
}
function D() {
_i_("619:631a546d"), C(), B(), _r_();
}
p.gallery = function() {
return _i_("619:743b178e"), _r_('<div class="b-photo-gallery-fullscreen">	<div class="b-photo-gallery-fullscreen--header">		<div class="b-photo-gallery-fullscreen--title"></div>		<div class="b-photo-gallery-fullscreen--disclaimer">' + e.jstmpl.translations("pb_room_disclaimer") + '</div>		<a href="#" class="b-photo-gallery-fullscreen--close"><i class="mb-ico-gallery mb-ico-close"></i></a>	</div>	<div class="b-photo-gallery-fullscreen--stage">		<div class="b-photo-gallery-fullscreen--image">			<img>			<a href="#" class="b-photo-gallery-fullscreen--previous"><i class="mb-ico-gallery mb-ico-arrow-left"></i></a>			<a href="#" class="b-photo-gallery-fullscreen--next"><i class="mb-ico-gallery mb-ico-arrow-right"></i></a>		</div>	</div>	<div class="b-photo-gallery-fullscreen--drawer">		<div class="b-photo-gallery-fullscreen--thumbnails-wrapper">			<ul class="b-photo-gallery-fullscreen--thumbnails"></ul>		</div>		<a href="#" class="b-photo-gallery-fullscreen--pagination b-photo-gallery-fullscreen--paginate-left"><i class="mb-ico-gallery mb-ico-arrow-left"></i></a>		<a href="#" class="b-photo-gallery-fullscreen--pagination b-photo-gallery-fullscreen--paginate-right"><i class="mb-ico-gallery mb-ico-arrow-right"></i></a>	</div></div>');
}, p.thumbnail = function(e) {
return _i_("619:743ab24b"), _r_('<li class="b-photo-gallery-fullscreen--thumbnail" data-url="' + e.url + '" data-width="' + e.width + '" data-height="' + e.height + '"><img src="' + e.thumbnail_url + '" alt="" width="60" height="60"></li>');
}, _r_();
}), e.components && e.components.define("b-mybooking-gallery-rooms", function() {
_i_("619:79913d7f");
var t, i = this;
i.init = function() {
_i_("619:65ded2d1"), n(".js-mb_room__gallery__display").bind("click", r), _r_();
};
function r(i) {
_i_("619:39981e3d");
var r, a = n(this).data("room-id");
i.preventDefault();
try {
r = e.env.myBookingData.reservation.hotel.rooms[a];
} catch (s) {
return _r_(!1);
}
t = t || e.components.require("b-mybooking-gallery"), t.show({
id:a,
title:r.name,
photos:r.photos
}), _r_();
}
_r_();
});
function r() {
_i_("619:1b5f780e"), e.components.require("b-mybooking-gallery-rooms"), _r_();
}
e.when({
events:"ready"
}).run(r), _r_();
}(window.booking, window), B.define("mybooking/slidebox", function(e, t, i) {
"use strict";
_i_("619:bf613191");
var n = e("trap-focus"), r = function() {
_i_("619:fd56c48d");
var e = document.body, t = !1, i = "Webkit Moz O ms Khtml".split(" ");
if (void 0 !== e.style.animationName && (t = !0), t === !1) for (var n = 0; n < i.length; n++) if (void 0 !== e.style[i[n] + "AnimationName"]) {
t = !0;
break;
}
return _r_(t);
}, a = {
identifier:".hasSlideBox",
targetAttribute:"data-slidebox-target",
openCallbackAttribute:"data-slidebox-open-callback",
preOpenCallbackAttribute:"data-slidebox-preopen-callback",
closeCallbackAttribute:"data-slidebox-close-callback",
preCloseCallbackAttribute:"data-slidebox-preclose-callback",
submitCallbackAttribute:"data-slidebox-submit-callback",
ajaxFailureFeedbackAttribute:"data-slidebox-ajax-failure-feedback",
additionalCssClassAttribute:"data-slidebox-additional-class",
autoFormSubmit:!1,
autoLinkSubmit:!1,
autoLinkSubmitSelector:"a",
autoAssignEvents:!0,
warnOnClose:!1,
noWarnSelector:".slidebox-finish",
cssAnimations:!0,
cssAnimationTime:750,
hasAjaxErrors:!1,
ajaxFailureFeedback:!1
}, s = {
ref:null,
zindex:0,
position:"static"
}, o = null, _ = null;
function c(e) {
_i_("619:2ffcdffb"), this.setOption(e), this.options = a, this.running = !1, this.ipad_fix = !1, this.$slideBox = null, this.$overlay = null, _r_();
}
$.extend(c.prototype, {
init:function(e) {
_i_("619:f9fdc5c8");
var t = this, i = null, n = document.createElement("div");
this.setOption("cssAnimations", r()), this.setOption(e), a.autoAssignEvents && $(a.identifier).click(function(e) {
return _i_("619:63d0bb82"), e.preventDefault(), _r_(t.toggleFromButton.call(t, this));
}), i = document.createElement("div"), i.className = "slideBoxOverlay", document.body.appendChild(i), o = $(i), n.id = "slideBoxCancelOverlay", n.style.display = "none", document.body.appendChild(n), _ = $(n), _r_();
},
open:function(e, t) {
if (_i_("619:b1505ceb"), this.running) return _r_(!1);
this.running = !0;
var i = this, r = $(e), c = r.children(".js-slidebox__inner"), l = c.length ? c :r, d = s.ref.find("span"), u = s.ref.data("slidebox-title") ? s.ref.data("slidebox-title") :$.trim(d.length ? "" === d.filter(":eq(0)").text() ? d.filter(":eq(1)").text() :d.filter(":eq(0)").text() :s.ref.text()), h = $('<div class="slideBoxWrapper"><h1 class="slideBoxWrapperTitle">' + u + '</h1><button class="modal-mask-closeBtn" title="' + booking.env.experiment_popups_close + '"></button></div>').appendTo(document.body), f = r.hasClass("slidebox--request") ? "li" :"div", p = s.ref && s.ref.length ? s.ref.get(0) :null, m = r.find("[type=submit], .slideBoxSubmit");
if (!r.length) return _r_(!1);
"undefined" != typeof r.data("track") && B.et.track(r.data("track")), booking.env.b_is_tdot_traffic && booking.env.b_is_ipad && (this.ipad_fix = !0, this.ipad_open()), p && p.getAttribute && h.addClass(p.getAttribute(this.options.additionalCssClassAttribute)), r.after("<" + f + ' class="slideBoxPlaceholder"></' + f + ">").appendTo(h).addClass("slidebox--active"), r.find(".js-slidebox__inner").removeAttr("style"), _.html(l.html()), n.trap(h[0]);
var b = function() {
_i_("619:564356a3"), o.click(function(e) {
_i_("619:d7779204"), i.setOption("closeType", "manualByOverlay"), y(e), _r_();
}), o.html('<div class="slideBoxOverlay__loading"></div>'), _r_();
}, g = function() {
_i_("619:d084bb6c"), $(".modal-mask-closeBtn").click(function(e) {
_i_("619:48989b0a"), i.setOption("closeType", "manualByCrossButton"), y(e), _r_();
}), i.running = !1, r.trigger("slideBox.open"), $(window).trigger("slideBox.open", {
target:r
}), _r_();
};
if ($(window).trigger("slideBox.beforeOpen", {
target:r
}), "msie" === booking.env.b_browser && parseInt(booking.env.b_browser_version, 10) <= 8) o.css({
display:"block",
opacity:0
}).animate({
opacity:.65
}, b), h.css({
display:"block"
}), g(); else if (this.options.cssAnimations) {
h.addClass("slidebox--open"), o.addClass("slidebox--open");
var v = setTimeout(function() {
_i_("619:693e241b"), b(), g(), clearTimeout(v), _r_();
}, this.options.cssAnimationTime);
} else o.css({
display:"block",
opacity:0
}).animate({
opacity:.65
}, b), h.css({
display:"block",
opacity:0
}).animate({
opacity:1
}, g);
h.css({
"margin-top":-h.outerHeight(!0) / 2
}), booking.env.b_is_tablet && h.css({
"margin-left":-h.outerWidth() / 2
}), m.removeAttr("disabled");
function y(t) {
if (_i_("619:46df4925"), t.preventDefault(), s.ref) i.toggleFromButton(s.ref), r.hasClass("slidebox--success") && r.trigger("slideBox.save"); else {
var n = null;
if (s.ref) {
var o = s.ref.attr(a.closeCallbackAttribute);
o && o.length && i.callbacks[o] && (n = o);
}
i.close(e, n);
}
_r_();
}
return $(p).attr(a.ajaxFailureFeedbackAttribute) ? i.setOption("ajaxFailureFeedback", $(p).attr(a.ajaxFailureFeedbackAttribute)) :i.setOption("ajaxFailureFeedback", !1), "function" == typeof t ? t.call(i, r.get(0), p) :"string" == typeof t && i.callbacks[t] && i.callbacks[t].call(i, r.get(0), p), _r_(!0);
},
close:function(e, t, i) {
_i_("619:5da5e077");
var r = this, a = $(e), c = s.ref && s.ref.length ? s.ref.get(0) :null, l = $(".slideBoxPlaceholder"), d = $(".slideBoxWrapper"), u = a.hasClass("slidebox--request"), h = i && "save" === i, f = !u && h;
if (!a.length) return _r_(!1);
if (this.running) return _r_(!1);
this.running = !0, n.release();
var p = function() {
_i_("619:cc875fdf"), r.ipad_fix && r.ipad_close(), a.removeClass("slidebox--active slidebox--success"), l.before(a), l.remove(), d.remove(), r.updateContent(a, _.children(), !1), r.running = !1, "function" == typeof t ? t.call(r, a.get(0), c) :"string" == typeof t && r.callbacks[t] && r.callbacks[t].call(r, a.get(0), c), c && (s.ref = null), $(r).trigger("slideBox.close"), $(window).trigger("slideBox.close", {
target:a
}), _r_();
}, m = function() {
_i_("619:3816652a"), o.unbind(), r.options.cssAnimations || o.css("display", "none"), _r_();
};
if ($(window).trigger("slideBox.beforeClose", {
target:a
}), this.options.cssAnimations) {
d.removeClass("slidebox--open").addClass("slidebox--close"), f || o.removeClass("slidebox--open").addClass("slidebox--close");
var b = setTimeout(function() {
_i_("619:17d40162"), d.removeClass("slidebox--close"), f || (o.removeClass("slidebox--close"), m()), p(), clearTimeout(b), _r_();
}, this.options.cssAnimationTime);
} else f || o.animate({
opacity:0
}, m), d.animate({
opacity:0
}, p);
return _r_(!0);
},
ipad_open:function() {
_i_("619:f5082141"), this.$overlay = $(".slideBoxOverlay"), this.$slideBox = $(".slideBoxWrapper"), this.$slideBox.addClass("mod-ipad-fix"), this.$overlay.addClass("mod-ipad-fix");
var e = this;
$(document).on("scroll.ipad", function() {
_i_("619:d2c7ce75"), e.ipad_position(), _r_();
}), $(document).on("deviceorientation.ipad", function() {
_i_("619:d2c7ce751"), e.ipad_position(), _r_();
}), this.ipad_position(), _r_();
},
ipad_close:function() {
_i_("619:0bfa1423"), $(document).off("scroll.ipad"), $(document).off("deviceorientation.ipad"), _r_();
},
ipad_position:function() {
_i_("619:93007ed4");
var e = $(window).scrollTop(), t = $(window).innerHeight(), i = e + t / 2;
this.$slideBox[0].style.top = i + "px", this.$overlay[0].style.top = e + "px", this.$overlay[0].style.height = t + "px", _r_();
},
toggleFromButton:function(e, t) {
if (_i_("619:cf0cdc5f"), this.running) return _r_(!1);
var i = this, n = $(e);
if (!n.length || !n.filter(this.options.identifier).length) return _r_(!1);
e = n.get(0);
var r = e.getAttribute(a.targetAttribute), o = null;
if (r && $(r).length) {
var _ = $(r);
if (n.hasClass("slidebox--active")) n.removeClass("slidebox--active slidebox--success"), o = n.attr(a.preCloseCallbackAttribute), o && i.callbacks[o] && i.callbacks[o].call(i, _.get(0), e), o = e.getAttribute(a.closeCallbackAttribute), o && o.length || (o = null), this.close(r, o, t), _.find("form").unbind("submit"); else {
if (s.ref && s.ref.length) return this.toggleFromButton(s.ref), $(this).one("slideBox.close", function() {
_i_("619:325a08d3"), i.toggleFromButton.call(i, e), _r_();
}), _r_(!0);
n.addClass("slidebox--active"), o = n.attr(a.preOpenCallbackAttribute), o && i.callbacks[o] && i.callbacks[o].call(i, _.get(0), e), o = n.attr(a.openCallbackAttribute), o && o.length || (o = null), s = {
ref:n,
zindex:n.css("z-index"),
position:n.css("position")
}, this.open(r, o), o = e.getAttribute(a.submitCallbackAttribute), !o && this.options.autoFormSubmit && (o = "autoFormSubmit"), o && this.callbacks[o] && _.off("submit", "form").on("submit", "form", $.proxy(function(e) {
_i_("619:d9286564");
var t = _.find("form");
t.length > 1 && (t = $(e.target));
var i = t.attr("action");
if (i && i.match(/\payment\.html/i)) {
var n = t.find("[type=submit], .slideBoxSubmit");
n.addClass("submitting"), n.attr("disabled", "disabled");
} else e.preventDefault(), this.callbacks[o].call(this, _.get(0), s.ref.get(0), e.target);
_r_();
}, this)), this.options.autoLinkSubmit && this.callbacks.autoLinkSubmit.call(this, _.get(0), s.ref.get(0));
}
return _r_(!0);
}
return _r_(!1);
},
setOption:function(e, t) {
_i_("619:aa61c53d"), 2 === arguments.length ? a[e] = t :"string" == typeof e ? a.identifier = e :"object" == typeof e && $.extend(a, e), _r_();
},
getOption:function(e) {
return _i_("619:dec17c12"), _r_(a[e] || null);
},
setCallback:function(e, t) {
return _i_("619:23ea4127"), _r_("function" == typeof t && (this.callbacks[e] = t));
},
updateContent:function(e, t, i) {
_i_("619:1f3170f8");
var n = $(e), r = n.find(".js-slidebox__inner"), a = r.length ? r :n;
n.find(".js-slidebox__inner").css("overflow", "visible"), a.html(t), i !== !1 && this.updateHeight(e), _r_();
},
updateHeight:function(e, t) {
_i_("619:b8dd8459");
var i = $(e);
if (!t) {
var n = i.children(".js-slidebox__inner"), r = n.length ? n :i;
t = r.outerHeight(!0), n.length && (t += (parseInt(r.css("margin-top"), 10) || 0) + (parseInt(r.css("margin-bottom"), 10) || 0));
}
i.parent().css("margin-top", -(t + 50) / 2), _r_();
},
callbacks:{
example:function(e, t) {
_i_("619:271c7ce3"), alert("I'm an example!"), _r_();
},
autoFormSubmit:function(e) {
_i_("619:afccfc69");
var t = this, i = $(e), n = i.find("form"), r = n.find("[type=submit], .slideBoxSubmit"), a = n.serialize();
r.addClass("submitting"), r.attr("disabled", "disabled"), n.find("input[type=submit][name]").each(function() {
_i_("619:3cae11e5"), a += "&" + encodeURI($(this).attr("name")) + "=" + encodeURI($(this).attr("value")), _r_();
}), $.ajax({
url:n.attr("action"),
type:"post",
data:a,
success:function(e) {
_i_("619:c007eac0"), t.updateContent(i, e), i.trigger("slideBox.submitCompleted"), _r_();
},
error:function(e) {
_i_("619:f227b0bf"), booking.eventEmitter.trigger("slideBox.loadError", [ i, e ]), _r_();
}
}), _r_();
},
autoLinkSubmit:function(e) {
_i_("619:cba2a74a");
var t = this, i = $(e);
i.off("click", this.options.autoLinkSubmitSelector).on("click", this.options.autoLinkSubmitSelector, function(e) {
_i_("619:9dc0e66c"), e.preventDefault(), t.updateContent(i, '<div class="mb-loading"><span class="mb-loading-content"></span></div>'), $.ajax({
url:this.href + (-1 === this.href.indexOf("?") ? "?" :"&") + "tmpl=mybooking_lightbox_process",
type:"post",
success:function(e) {
_i_("619:478e9d1c"), t.updateContent(i, e), i.trigger("slideBox.linkCompleted"), _r_();
},
error:function(e) {
_i_("619:dcae5ecc"), booking.eventEmitter.trigger("slideBox.loadError", [ i, e ]), _r_();
}
}), _r_();
}), _r_();
}
}
}), i.exports = new c(), _r_();
}), B.when({
events:"ready"
}).run(function(e) {
_i_("619:2fced6e7"), $(".save_subscriptions").click(function() {
_i_("619:029ff30e");
var e = $(this).parents("form").get(0);
return $(e).submit(), _r_(!1);
}), $(".js-unsubscribe-all-link").click(function() {
_i_("619:abb559d2");
var e = $(this).parents("form").get(0);
return $('input[type="checkbox"]', e).each(function() {
_i_("619:c0699d85"), $(this).attr("checked", !1), _r_();
}), $(e).submit(), _r_(!1);
}), _r_();
});

function onchange_cc(e) {
_i_("619:9b5cc82a");
var t = "dc_issue_error", i = "dc_issue_label", n = "dc_issue_field", r = "dc_yyyymm_label", a = "dc_yyyymm_field", s = "cc_cvc_error", o = "label_cc_cvc", _ = "field_cc-cvc", s = "cc_cvc_error", o = "cc_cvc_label", _ = "cc_cvc_field", c = $.trim(e.options[e.selectedIndex].innerHTML.toLowerCase());
function l() {
_i_("619:550ff6ca"), showEl(s), showEl(o), showEl(_), _r_();
}
function d() {
_i_("619:b277a0d3"), hideEl(s), hideEl(o), hideEl(_), _r_();
}
function u() {
_i_("619:3493eaab"), showEl(t), showEl(i), showEl(n), showEl(r), showEl(a), _r_();
}
function h() {
_i_("619:65fbbb93"), hideEl(t), hideEl(i), hideEl(n), hideEl(r), hideEl(a), _r_();
}
function f() {
_i_("619:87240ca5"), $(document.body).removeClass("novisa"), $("#cc_img").show(), _r_();
}
function p() {
_i_("619:df904de2"), $(document.body).removeClass("noamex"), $("#cc_img").show(), _r_();
}
function m() {
_i_("619:aa1b4beb"), $(document.body).addClass("novisa"), _r_();
}
function b() {
_i_("619:ac32e3a9"), $(document.body).addClass("noamex"), _r_();
}
function g() {
if (_i_("619:3979ecae"), "book" == booking.env.b_action && 3 == booking.env.b_stage) {
var t = $(".bp_alternative_payment"), i = ".ccwhy,#label_cc_number,#label_cc_name,#label_cc_month,#label_cc_cvc, #error_cc_number, #error_cc_name, #error_cc_month, #cc_cvc_error";
"" == e.value || booking.env.is_alt_payment_method(e.value) ? ($("#cc_img").hide(), $(i, t).hide()) :$(i, t).show(), "" != e.value ? $("#newsletter,.cf,.confirmsubmit", t).show() :$("#newsletter,.cf,.confirmsubmit", t).hide();
}
_r_();
}
if (e) {
switch (c) {
case "american express":
p(), m(), l(), h();
break;

case "visa":
case "mastercard":
b(), f(), l(), h();
break;

case "jcb":
d(), h(), $("#cc_img").hide();
break;

case "diners club":
d(), h(), $("#cc_img").hide();
break;

case "kh széchényi pihenõkártya":
case "mkb széchényi pihenõkártya":
case "otp széchényi pihenõkártya":
d(), h(), $("#cc_img").hide();
break;

case "maestro (switch)":
b(), f(), l(), u();
break;

default:
l();
}
1 === $(e).data("hotel-cvc-not-required") && d();
}
g(), _r_();
}

if (function() {
_i_("619:45d47f5a");
var e = {
priority:9,
init:function() {
_i_("619:f5d4008f");
var e = this;
$("#travelpreferencesform").submit(function(e) {
_i_("619:6a3339c1");
var t = [];
t.push($("#star-rating-preference").val()), $(this).find("input:checked").each(function(e, i) {
_i_("619:60be790a"), t.push($(i).val()), _r_();
}), $(this).find("#mealplan-preference input[type=hidden]").each(function(e, i) {
_i_("619:60be790a1"), t.push($(i).val()), _r_();
}), $(this).find("input[name=preferences]").val(t.join(",")), _r_();
}), $("#all_account_settings .add_or_edit").click(function() {
_i_("619:a41ab646");
var e = $(this).parents(".settings_data_row");
if ($(this).hasClass("avatar_edit")) {
var t = $(".upload-progress");
return t.hide(), t.find(".upload-progress-msg").show(), t.find(".upload-progress-msg-completed").hide(), t.find(".upload-progress-bar-current").css("width", "0px;"), booking.lightbox.show(".user-avatar-upload", {
customWrapperClassName:"user-avatar-upload-modal"
}), _r_();
}
$(".settings_user_data").show(), $(".settings_user_data", e).hide(), $(".edit_form").hide(), $(".edit_form", e).show(), _r_();
}), $("#all_account_settings .cancel_action").click(function() {
_i_("619:e643edd3");
var e = $(this).parents(".settings_data_row");
$("#all_account_settings .edit_form").hide(), $(".inline_error,.alert-error").hide(), $("input").removeClass("errorInput"), $("#all_account_settings .settings_user_data").show(), e.find(".ua_add_credit_card").find("input, select").val(""), _r_();
}), $("#all_account_settings .save_action").click(function() {
if (_i_("619:e9483b51"), $(this).hasClass("add_email_action")) {
var t, i = $(this).parents(".edit_form"), n = !0;
$("input.input-text", i).each(function() {
_i_("619:9446d83e"), "" != $(this).val() && (e.email_check($(this).val()) ? $(this).removeClass("errorInput") :(n = !1, $(this).addClass("errorInput"), $(".email_error").show())), _r_();
}), 1 == n && $("#add_emails").submit();
} else if ($(this).hasClass("save_cc")) t = $(this).closest("form").attr("action"), t += ";op=save_cc", $(this).closest("form").attr("action", t).submit(); else if ($(this).hasClass("create_cc")) t = $(this).closest("form").attr("action"), t += ";op=create_cc", $(this).closest("form").attr("action", t).submit(); else if ($(this).hasClass("save_names")) {
i = $(this).parents(".edit_form");
var r = !0;
$("input.input-text", i).each(function() {
_i_("619:5bd6b4f2"), "" != $(this).val() && $(this).removeClass("errorInput"), _r_();
}), 1 == r && $(this).closest("form").submit();
} else if ($(this).hasClass("save_phone")) {
i = $(this).parents(".edit_form");
var a = !0;
$("input.input-text", i).each(function() {
_i_("619:ef72a9c3"), "" != $(this).val() ? e.phone_check($(this).val()) ? ($(this).removeClass("errorInput"), $(".phone_error").hide(), $(".country_code_error").hide()) :(a = !1, $(this).addClass("errorInput"), $(".phone_error").show()) :$("#telephone").val($(this).val()), _r_();
}), 1 == a && $(this).closest("form").submit();
} else if ($(this).hasClass("save_nickname")) {
var s = $(this).closest("form"), o = $("#nickname"), _ = o.val();
if ($(this).prevAll(".inline_error").hide(), 0 == _.length) s.submit(); else {
var c = $(this).text();
$(this).text($(this).data("checking"));
var l = $(this);
$.get("validate_nickname", {
nickname:_
}, function(e) {
_i_("619:aadf7e48"), e.is_valid ? s.submit() :(e.errors.is_taken && $(".nickname_error_exist").show(), e.errors.not_alphanumeric && $(".nickname_error_alphanumeric").show(), e.errors.too_long && $(".nickname_error_toolong").show(), e.errors.forbidden && $(".nickname_error_forbidden").show()), l.text(c), _r_();
});
}
} else $(this).closest("form").submit();
_r_();
}), $("#all_account_settings .settings_data_row .delete_action").click(function() {
_i_("619:dd4adaa1");
var e;
$(this).hasClass("cc_delete") && (e = $(this).closest("form").attr("action"), e += ";op=delete_cc", $(this).closest("form").attr("action", e).submit()), _r_();
}), $(".user-settings-email-remove").click(function(e) {
_i_("619:dbc9425a");
var t, i = $(this);
i.data("ge-email") && (e.preventDefault(), t = $(".user-settings-email-confirm-delete").find("[data-confirm-delete]"), t.attr("href", i.attr("href")), B.lightbox.show(".user-settings-email-confirm-delete", {
customWrapperClassName:"user-settings-email-confirm-delete-wrapper"
}), $(".user-settings-email-confirm-delete-cta").one("click", function() {
_i_("619:0c669c71"), $(this).data("comfirm-delete") ? $(this).attr("href", i.attr("href")) :B.lightbox.hide(), _r_();
})), _r_();
}), _r_();
},
email_check:function(e) {
_i_("619:834b1262");
var t = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
return _r_(t.test(e));
},
name_check:function(e) {
_i_("619:13865b46");
var t = /^[a-zA-Z \-\.]+$/;
return _r_(t.test(e));
},
phone_check:function(e) {
_i_("619:a9fa441a");
var t = /^[0-9 \-\+\(\)\.]+$/;
return _r_(t.test(e));
}
};
B.when({
events:"ready"
}).run(function(t) {
_i_("619:a8948acc"), e.init(), _r_();
}), _r_();
}(), function() {
_i_("619:5bb4d099");
var e = B.require("jquery"), t = {
show_bookings:10,
cur_page:booking.env.current_page,
totalitems:0,
item_class:e("body").hasClass("myreviews") ? "hotelwrap" :"js-booking_block",
init:function() {
return _i_("619:d88243d9"), this.totalitems = booking.env.myreservations_total_shown_bookings, e(".my_bookings_paging").on("click", "[data-go-to-page]", function(e) {
return _i_("619:58cb640c"), _r_(this.gotToPage(Number(e.currentTarget.getAttribute("data-go-to-page"))));
}.bind(this)), this.drawPaging(!0), _r_(!0);
},
drawPaging:function(t) {
_i_("619:63afa1a5"), this.totalitems > this.show_bookings && e("." + this.item_class).hide(), (this.cur_page - 1) * this.show_bookings > this.totalitems && (this.cur_page = Math.ceil(this.totalitems / this.show_bookings)), this.totalitems > 0 ? e(".my_bookings_paging").html('<div class="page_label">' + booking.env.my_bookings_page + ":</div> ") :e(".my_bookings_paging").html(" ");
var i = 10, n = ";res=" + booking.env.b_param_res;
this.disableAnimation && booking.env.my_reservation_pagination_url && booking.env.my_reservation_pagination_url.indexOf("res=") > -1 && (n = "");
for (var r = 1, a = this.totalitems / this.show_bookings + 1; a > r; r++) if (parseInt((this.cur_page - 1) / i, 10) === parseInt((r - 1) / i, 10)) r == this.cur_page ? e(".my_bookings_paging").append("<strong>" + r + "</strong>") :r >= booking.env.first_cached_page && r <= booking.env.last_cached_page ? e(".my_bookings_paging").append('<a href="#" data-go-to-page="' + r + '">' + r + "</a>") :e(".my_bookings_paging").append('<a href="' + booking.env.my_reservation_pagination_url + n + ";ufi=" + booking.env.b_param_ufi + ";hotel_id=" + booking.env.b_param_hotel_id + ";page_no=" + r + ";page_size=" + this.show_bookings + ';">' + r + "</a>"); else {
var s = r + i - 1 > a ? parseInt(a, 10) :r + i - 1;
r >= booking.env.first_cached_page && r <= booking.env.last_cached_page ? e(".my_bookings_paging").append('<a href="#" data-go-to-page="' + r + '">' + r + "-" + s + "</a>") :e(".my_bookings_paging").append('<a href="' + booking.env.my_reservation_pagination_url + n + ";ufi=" + booking.env.b_param_ufi + ";hotel_id=" + booking.env.b_param_hotel_id + ";page_no=" + r + ";page_size=" + this.show_bookings + ';">' + r + "-" + s + "</a>"), r = s;
}
this.showPage(), _r_();
},
showPage:function() {
_i_("619:c10dc590");
var t = this.show_bookings * (this.cur_page - 1), i = this.show_bookings * this.cur_page, n = this.disableAnimation;
t -= (booking.env.first_cached_page - 1) * this.show_bookings, i -= (booking.env.first_cached_page - 1) * this.show_bookings;
var r = 0, a = "." + this.item_class;
n && (a = ".bookings_list ." + this.item_class), e(a).each(function() {
_i_("619:69854fd1"), r >= t && i > r && (n ? e(this).removeClass("g-hidden") :e(this).slideDown("slow")), r++, _r_();
}), B.events.emit("myreservations:pagination:page_changed"), _r_();
},
gotToPage:function(t) {
_i_("619:7873fb59"), this.cur_page = t, this.drawPaging();
var i = e(".mb-block--get-app");
return i.length && (1 != t ? i.hide() :i.show()), _r_(!1);
},
nextPage:function() {
_i_("619:406f4561"), this.cur_page++, this.drawPaging(), _r_();
},
prevPage:function() {
_i_("619:3806e264"), this.cur_page--, this.drawPaging(), _r_();
}
};
B.define("paging-bookings/get-current-page", function() {
return _i_("619:6b0128f2"), _r_(function() {
return _i_("619:2b01599e"), _r_(t.cur_page);
});
}), B.when({
events:"ready"
}).run(t.init.bind(t)), _r_();
}(), function() {
_i_("619:94beac63");
var e = window.jQuery, t = window.booking;
t.when({
events:"ready"
}).run(function(t) {
_i_("619:25ff04c0");
var i = e(window), n = e("#slidebox-change-cc"), r = !1;
i.bind("slideBox.close", a), e(".mb-btn.change_cc").click(function() {
_i_("619:6ae7e3b0"), r = !0, _r_();
}), n.bind("slideBox.submit", function() {
_i_("619:833cada1");
var e = n.find("[name=cc_expiry_date]").val();
e ? (n.find("[name=cc_month]").val(e.substring(0, 2)), n.find("[name=cc_year]").val("20" + e.substring(5, 7))) :(n.find("[name=cc_month]").val(""), n.find("[name=cc_year]").val("")), _r_();
}).bind("slideBox.submitCompleted", function() {
_i_("619:256a4331"), 0 === n.find(".cc_error").length && i.unbind("slideBox.close", a), _r_();
}).bind("slideBox.open", function() {
_i_("619:7ad6f3ce"), r && (r = !1), _r_();
});
function a(e, t) {
if (_i_("619:998d6090"), !t) return _r_(!0);
_r_();
}
_r_();
}), _r_();
}(), B.when({
events:"ready"
}).run(function() {
_i_("619:c48073d8");
var e = booking;
e.define("mybooking/edit-guest-inline", function(t, i, n) {
_i_("619:36670818");
function r(e, t, i) {
_i_("619:0f8de5b7"), i = i || $.noop, e.fadeOut(function() {
_i_("619:6b0414a6"), t.fadeIn(i), _r_();
}), _r_();
}
function a(e) {
_i_("619:672bc1ea"), this.block = $(e), this.formFields = [ "guest_name", "nr_guests" ], this.formComp = null, this.form = this._findEl("form"), this.addButton = this._findEl(".js-guest-action--add"), this.editButton = this._findEl(".js-guest-action--edit"), this.addBlock = this._findEl(".js-guest-name--add"), this.editBlock = this._findEl(".js-guest-name--edit"), this.init(), _r_();
}
a.prototype = {
init:function() {
_i_("619:1fb45cb0"), this.bindEvents(), _r_();
},
bindEvents:function() {
_i_("619:f0e665e9"), this.addButton.bind("click", this.showForm.bind(this)), this.editButton.bind("click", this.showForm.bind(this)), _r_();
},
initForm:function() {
_i_("619:7cf26279");
var t = this.formFields;
this.formComp = e.components.require("myreservations-form", this.form), t.forEach(function(e) {
_i_("619:7e56c36d"), this.set(e, this.getFieldByName(e).val()), _r_();
}, this.formComp), this.formComp.validate = function() {
return _i_("619:6e4ab5b8"), _r_(t.some(function(e) {
return _i_("619:2f62682b"), _r_(this.get(e) !== this.getFieldByName(e).val());
}, this));
}, this._bindFormEvents(), _r_();
},
_bindFormEvents:function() {
_i_("619:92c6ef0d");
var e = this.formComp, t = this.hideForm.bind(this), i = this.updateUI.bind(this), n = this._updateForm.bind(this);
e.on("form-validation-error", t), e.on("form-reset", function() {
_i_("619:214d3d58"), t(n), _r_();
}), e.on("form-submit-success", function(e) {
_i_("619:315e04c3"), i(e.data.last_changed), t(), _r_();
}), _r_();
},
showForm:function(e) {
_i_("619:01ed59a8"), this.formComp || this.initForm();
var t = "" === this.formComp.get("guest_name") ? this.addBlock :this.editBlock;
r(t, this.form, function() {
_i_("619:4cb4aeda"), this.getFieldByName("guest_name").focus(), _r_();
}.bind(this.formComp)), e.preventDefault(), _r_();
},
hideForm:function(e) {
_i_("619:bb5bc6ca");
var t = "" === this.formComp.get("guest_name") ? this.addBlock :this.editBlock;
r(this.form, t, e), _r_();
},
updateUI:function(t) {
_i_("619:ab5c27de");
var i, n;
for (i in t) switch (n = t[i], this.formComp.set(i, n), i) {
case "nr_guests":
this._findEl(".b_nr_guests").text(e.jstmpl.translations("pb_num_of_guests_brackets", n, {
num_of_guests:n
}));
break;

default:
this._findEl(".b_" + i).text(n);
}
_r_();
},
_updateForm:function() {
_i_("619:b73566ea"), this.formFields.forEach(function(e) {
_i_("619:3aa1fa5a"), this.getFieldByName(e).val(this.get(e)), _r_();
}, this.formComp), _r_();
},
_findEl:function(e) {
return _i_("619:95ef9b14"), _r_(this.block.find(e));
}
}, n.exports = a, _r_();
});
function t() {
_i_("619:288abe41");
var t = e.require("mybooking/edit-guest-inline");
$(".js_pb_mb_edit_guest_inline.has-occupancy").each(function(e, i) {
_i_("619:d617a9f3"), new t(i), _r_();
}), _r_();
}
t(), _r_();
}), B.when({
events:"ready"
}).run(function() {
_i_("619:3ec55bca");
var e = !1;
function t(e, t) {
_i_("619:1d42ecf2");
var i = "°", n = " ", r = 180, a = 90;
if ("string" == typeof e && (e = parseFloat(e)), t = t || "lat", e = e || 0, "lat" != t && "lng" != t) throw new Error("I don't know how to parse type '" + t + "'");
var s, o = "";
"lat" == t ? (o += 0 > e ? "S " :"N ", s = a) :"lng" == t && (o += 0 > e ? "W " :"E ", s = r);
var _ = Math.abs(Math.round(1e6 * e));
if (_ > 1e6 * s) return _r_(NaN);
var c = Math.floor(_ / 1e6), l = 0 > e ? -1 :1, d = (60 * Math.abs(e - l * Math.floor(Math.abs(e)))).toFixed(3);
return o += c + i + n + d, _r_(o);
}
var i = function() {
_i_("619:d60c6557");
var i, n, r = !1;
$('<div class="pb_myres_map_content"><div class="pb_myres_map_hotel_name"></div><div class="pb_myres_map_container"></div>').appendTo(document.body);
var a = $(".pb_myres_map_content").get(0), s = $(".pb_myres_map_container").get(0), o = $(".pb_myres_map_hotel_name");
function _(t, r, a, s, _) {
if (_i_("619:0c83ac4a"), window.google && google.maps) if (e) {
var c = new google.maps.LatLng(t, r);
i.setCenter(c), n.setPosition(c), n.setTitle(s), o.html(h(s, {
lat:t,
lng:r,
directions_url:_
}));
} else u(t, r, a, s, _)(); else {
var l = document.createElement("script");
l.type = "text/javascript", l.src = booking.env.google_maps_url + "&callback=initMyresMap", window.initMyresMap = u(t, r, a, s, _), document.body.appendChild(l);
}
_r_();
}
var c = $(".pb_myres_map_show_map");
c.bind("click", function(e) {
_i_("619:1bcfe9ba"), l($(this))(e), _r_();
}), booking.eventEmitter.bind("mb-map-open", function() {
_i_("619:35d4f973"), setTimeout(function() {
_i_("619:96f55b86"), c.trigger("click"), _r_();
}, 1e3), _r_();
});
function l(e) {
return _i_("619:81c8bd90"), _r_(function(t) {
_i_("619:c73a5be5"), t.preventDefault();
var i = e.data();
i && (d(), _(i["location-lat"] || i.locationLat, i["location-long"] || i.locationLong, i.zoom, i["hotel-name"] || i.hotelName, i["directions-url"] || i.directionsUrl)), _r_();
});
}
function d(e) {
_i_("619:1704df34");
var t = "pb_myres_map_lightbox_wrapper mb-map-redesign";
B.env.b_is_vacation_rental && 1 === B.et.track("NVNefbDSDYFeZBeaT") && (t += " bh_large_map"), !r && $(window).width() <= 1024 && (r = !0), e = e || " ", booking.lightbox.show(a, {
customWrapperClassName:t + " " + e
}), _r_();
}
function u(t, r, a, _, c) {
return _i_("619:2ba53560"), _r_(function() {
_i_("619:1bcbe04e");
var l = new google.maps.LatLng(t, r), d = {
zoom:parseInt(a, 10),
center:l,
mapTypeId:google.maps.MapTypeId.ROADMAP
};
e = !0, i = window.myresMaps = new google.maps.Map(s, d), n = new google.maps.Marker({
position:l,
map:i,
title:_,
icon:booking.env.hotel_google_map_icon
}), o.html(h(_, {
lat:t,
lng:r,
directions_url:c
})), _r_();
});
}
function h(e, i) {
_i_("619:3d6a303d"), i = i || {};
var n = "", r = B.env.myBookingData.reservation.hotel.coordinates, a = B.env.myBookingData.text;
n = '<div class="mb-travel-info">', n += i.lat && i.lng ? '<span class="mb-travel-info__coordinates">' + t(i.lat, "lat") + ", " + t(i.lng, "lng") + "</span>" :'<span class="mb-travel-info__coordinates">' + r.latDegree + ", " + r.lngDegree + "</span>";
var s = i.directions_url || r.directionsURL;
return s && 0 !== s.indexOf("http") && (s = "http://" + s), s && (n += '<a class="mb-travel-info__show-directions" target="_blank" href="' + s, n += '" title="' + a.book_conf_person_driving + '"><i class="mb-icon--show-directions"></i>' + a.show_directions + "</a>"), n += "</div>", e += n, _r_(e);
}
_r_();
};
i(), _r_();
}), function(e, t) {
_i_("619:6cba1b3c");
var i;
function n() {
_i_("619:cea6aa54"), "myreservations" === e.env.b_action && (e.eventEmitter.bind("slideBox.loadError", r), t(window).bind("slideBox.close", function(e, t) {
if (_i_("619:22cf068b"), !t) return _r_(!0);
t.target[0] === i && window.location.reload(), _r_();
})), _r_();
}
function r(n, r, a) {
_i_("619:75edab51"), 405 === a.status && (i = r[0], t(r).find(".js-slidebox__inner").html(e.jstmpl("mybooking_csrf_error").render({
section_title:t(r).parent().find(".slideBoxWrapperTitle").text()
}))), _r_();
}
window.addEventListener("load", n), _r_();
}(window.booking, window.jQuery), window.picoModal = function(e, t) {
"use strict";
_i_("619:ec7b3b99");
var i = function() {
_i_("619:87c37890");
var t = [];
return _r_({
w:function(e) {
_i_("619:aa075324"), t.push(e), _r_();
},
t:function() {
_i_("619:977501a1");
for (var i = 0; i < t.length; i++) e.setTimeout(t[i], 1);
_r_();
}
});
}, n = function(e) {
_i_("619:98864b52");
var i = t.createElement("div");
(e || t.body).appendChild(i);
var r = {
e:i,
c:function() {
return _i_("619:ad2fd2b9"), _r_(n(i));
},
s:function(e) {
_i_("619:39bb660d"), e = e || {}, "undefined" != typeof e.opacity && (e.filter = "alpha(opacity=" + 100 * e.opacity + ")");
for (var t in e) e.hasOwnProperty(t) && (i.style[t] = e[t]);
return _r_(r);
},
z:function(e) {
return _i_("619:50ab76b7"), _r_((i.className += e, r));
},
h:function(e) {
return _i_("619:9de5512b"), _r_((i.innerHTML = e, r));
},
d:function() {
return _i_("619:245a5f96"), _r_(i.clientWidth);
},
o:function(e) {
return _i_("619:26732bd6"), _r_((i.attachEvent ? i.attachEvent("onclick", e) :i.addEventListener("click", e), r));
},
x:function() {
return _i_("619:a26300af"), _r_((t.body.removeChild(i), r));
}
};
return _r_(r);
}, r = function(e) {
_i_("619:4d659f45");
var t = i(), r = n().z("pico-overlay").s({
display:"block",
position:"fixed",
top:"0px",
left:"0px",
height:"100%",
width:"100%",
zIndex:1e4
}).s(e("overlayStyles", {
opacity:.5,
background:"#000"
})).o(t.t);
return _r_({
e:r.e,
x:r.x,
o:t.w
});
};
return _r_(function(e) {
_i_("619:3e92a189");
function t(t, i) {
return _i_("619:5b4f6ce8"), _r_(void 0 === e[t] ? i :e[t]);
}
"string" == typeof e && (e = {
content:e
});
var a = r(t), s = i(), o = n().z("pico-content").s({
display:"block",
position:"fixed",
zIndex:10001,
left:"50%",
top:"50px"
}).h(e.content), _ = t("width", o.d());
o.s({
width:_ + "px",
margin:"0 0 0 " + (-(_ / 2) + "px")
}).s(t("modalStyles", {
backgroundColor:"white",
padding:"20px",
borderRadius:"5px"
}));
var c = function() {
_i_("619:4c203b8d"), s.t(), a.x(), o.x(), _r_();
};
t("overlayClose", !0) && a.o(c);
var l;
return _r_((t("closeButton", !0) && (l = o.c().h(t("closeHtml", "&#xD7;")).z("pico-close").s(t("closeStyles", {
borderRadius:"2px",
cursor:"pointer",
height:"15px",
width:"15px",
position:"absolute",
top:"5px",
right:"5px",
fontSize:"16px",
textAlign:"center",
lineHeight:"15px",
background:"#CCC"
})).o(c)), {
modalElem:o.e,
closeElem:l ? l.e :null,
overlayElem:a.e,
close:c,
onClose:s.w
}));
});
}(window, document), function() {
_i_("619:332084f2");
var e = {
priority:9,
init:function() {
if (_i_("619:ce88df31"), B.env.is_profile_menu_horizontal) {
var e = !1;
booking.eventEmitter.bind("profile_nav:fix_height", function() {
_i_("619:feccfc4a");
var t = $(".profile-area__sidebar-filter-wrapper"), i = B.env.has_manage_reviews_entry ? 500 :450, n = t.next(), r = n.outerHeight(!0), a = $(".yp_cards").length, s = r;
a && (s = r > i ? r :i), s && t.css({
height:s,
"min-height":s
});
var o = $(".dashboard_nav_horizontal .profile-area__nav-wrapper");
if (o.length) {
var _ = o.offset().top;
if (_ > 0) {
var c = $(".dashboard_nav_horizontal_bg");
if (!e) {
var l = $(".profile-area--horizontal-layout-bg-container");
l.length ? c.prependTo(l) :c.appendTo("body").css("z-index", -1), e = !0;
}
c.css({
top:_,
left:0,
width:"100%"
});
}
}
_r_();
});
} else booking.eventEmitter.bind("profile_nav:fix_height", function(e, t) {
_i_("619:3427beac");
var i = $(".profile-area__nav-wrapper, .profile-area__sidebar-wrapper"), n = $(".profile-area__sidebar-filter-wrapper"), r = $(".profile-area__sidebar-wrapper_vtohstyle").height(), a = i.parent();
if (a.length) {
if (t) {
var s = $(".yp_cards"), o = s.outerHeight(!0);
s.css("height", ""), i.css({
height:"",
"min-height":""
}), a.css({
height:"",
"min-height":""
});
}
var _ = i.height(), c = i.find(".profile-area__nav"), l = c.outerHeight(!0), d = a.height();
t && o > o && (_ = o, d = o), i.height(d).css("min-height", _), a.css("min-height", l > _ ? l :_), n.height(d - r).css("min-height", _);
}
_r_();
});
booking.eventEmitter.trigger("profile_nav:fix_height"), B.events && B.events.on("header:fit-width", function() {
_i_("619:047e47a3"), booking.eventEmitter.trigger("profile_nav:fix_height"), _r_();
});
var t = B.require("ga-tracker");
$(".profile-area__nav-item-myreferrals").on("click", function() {
_i_("619:de2ec628"), t.trackEvent("Referral - Advocate", "click", "myreferrals item on profile_nav"), _r_();
});
function i() {
_i_("619:a0be03e7"), $(".profile-area__nav a").click(function(e) {
_i_("619:55272252");
var t = "js_profile_nav_click";
$(e.target).closest(".profile-area__nav-item-business").length ? t = "js_profile_nav_click_business" :$(e.target).closest(".profile-area__nav-item-myreferrals").length && (t = "js_profile_nav_click_join"), B.et.goalWithValue(t, 1), _r_();
}), _r_();
}
i(), _r_();
}
};
B.when({
events:"ready"
}).run(function(t) {
_i_("619:8270b17f"), e.init(), _r_();
}), _r_();
}(), function() {
_i_("619:b0055af9"), $(".flexslider").flexslider({
animation:"slide",
slideshowSpeed:8e3
});
var e = 1, t = 9, i = $(".reviews_feed .rl_page_grid");
booking.env.url_param_page_size && (t = booking.env.url_param_page_size);
function n(e) {
_i_("619:cd73bc7d"), $(".rl_preloader").show(), $("#rl_top_hundred_loadmore").hide();
var n = booking.env.b_canonical_url;
-1 == n.indexOf("?") && (n += "?"), n += "&mode=top&tmpl=reviews_feed_top_hundred&page_size=" + t + "&page=" + e, "europe" == $(".selection select[name=location]").val() ? n += "&type=europe" :"beach" == $(".selection select[name=location]").val() ? n += "&type=beach" :"family" == $(".selection select[name=traveler_type]").val() ? n += "&type=family" :"apartments" == $(".selection select[name=property_type]").val() && (n += "&type=apartments"), $.ajax({
url:n,
success:function(t) {
if (_i_("619:37da8003"), t.length) {
var n = $(t);
i.html().length ? i.append(n).isotope("appended", n) :i.append(n).isotope(), e++;
}
$(".rl_preloader").hide(), $("#rl_top_hundred_loadmore").show(), _r_();
},
error:function() {
_i_("619:840b0134"), $(".rl_preloader").hide(), $("#rl_top_hundred_loadmore").show(), _r_();
}
}), _r_();
}
$("#rl_top_hundred_loadmore").click(function() {
_i_("619:ccb5c002"), n(e++), _r_();
}), $(".selection select").change(function() {
_i_("619:ed05d8c2"), i.html("").isotope("destroy"), n(1), _r_();
}), $(".rl_page_wrapper").each(function(e, t) {
_i_("619:641c8a03");
var i = $(t), n = i.data("background-url");
i.closest("li").css({
background:"url(" + n + ") center center / cover no-repeat"
}), _r_();
}), $(".db_horizontal_profile_menu_search").click(function(e) {
_i_("619:928311fb");
var t = $("#db_search_reveal");
t.is(":visible") ? t.fadeOut() :t.fadeIn(), e.preventDefault(), _r_();
}), _r_();
}(), function() {
_i_("619:37fc6a71");
var e = window.jQuery, t = window.booking;
function i() {
_i_("619:5ca15cc7"), e(".profile-area__sidebar-public-switch-bg").click(function(t) {
_i_("619:63fa919c"), t.preventDefault();
var i = e(this);
i.hasClass("is-public") ? _() :i.hasClass("is-private") && (e(".public-timeline-modal__step-wrapper.show").removeClass("show"), e(".public-timeline-modal__step-wrapper.public-timeline-modal__step1").addClass("show"), booking.lightbox.show(e("#public-timeline-modal"))), e(".profile-area__sidebar-public-switch-tooltip").removeClass("active").hide(), _r_();
}), n(), e(".public-timeline-modal__btn-steps-next").click(function(t) {
_i_("619:7b533ea0"), t.preventDefault();
var i = e(this);
if (i.hasClass("disabled")) return _r_();
i.hasClass("public-timeline-modal__btn-make-public") ? o(1) :a(i), _r_();
});
var i = e(".public-timeline-modal__btn-username-save");
i.click(function(t) {
_i_("619:d696d282"), t.preventDefault(), s(e(this), e(".public-timeline-modal__username-field").val()), _r_();
});
var r = e(".public-timeline-modal__username-field");
r.keypress(function(e) {
_i_("619:4c4990e9"), 13 == e.which && s(i, r.val()), _r_();
}), e(".public-timeline-modal__btn-username-edit").click(function(t) {
_i_("619:e618eb77"), t.preventDefault(), e(".public-timeline-modal__username-display-wrapper").removeClass("show"), e(".public-timeline-modal__username-save-wrapper").addClass("show"), _r_();
}), booking.eventEmitter.bind("RPP:upload-complete", function(i, n) {
_i_("619:5d1ed6f7"), a(e(".public-timeline-modal__step2").find(".public-timeline-modal__btn-steps-next"));
var r = t.require("ga-tracker");
r.trackEvent(r.clickTracker, "Action: reviewtimeline", "Avatar upload"), _r_();
}), e(".public-timeline-modal__step-cancel").find(".b-button").click(function(t) {
_i_("619:59150e7b"), t.preventDefault(), e(this).hasClass("public-timeline-modal__btn-make-private") && o(0), booking.lightbox.hide(e("#public-timeline-modal")), _r_();
}), _r_();
}
function n() {
_i_("619:ddf775b6");
var t = e(".profile-area__sidebar-public-switch-tooltip");
r(t), e(".profile-area__sidebar-public-switch, .profile-area__sidebar-public-switch-tooltip").hover(function() {
_i_("619:c44bf250"), t.show(), _r_();
}, function() {
_i_("619:52ddfd4c"), t.hide(), _r_();
}), t.find(".profile-area__sidebar-public-switch-tooltip-close").click(function(e) {
_i_("619:1a35c31a"), e.preventDefault(), t.removeClass("active").hide(), _r_();
}), t.find(".profile-area__sidebar-public-switch-tooltip-link").click(function(i) {
_i_("619:b55a3d94"), i.preventDefault(), e(".public-timeline-modal__step-wrapper.show").removeClass("show"), e(".public-timeline-modal__step-wrapper.public-timeline-modal__step1").addClass("show"), booking.lightbox.show(e("#public-timeline-modal")), t.removeClass("active").hide(), _r_();
}), _r_();
}
function r(t) {
if (_i_("619:cdd9ac32"), t.length) {
var i = t.height() / 2, n = e(".profile-area__sidebar-public-switch-bg"), r = n.width(), a = n.height() / 2, s = n.offset();
s && (t.appendTo("body"), t.css({
left:s.left + r + "px"
}), t.css({
top:s.top + a - i + "px"
}));
}
_r_();
}
function a(t) {
_i_("619:cd146a75");
var i = t.data("next-step");
e(".public-timeline-modal__step-wrapper.show").removeClass("show"), e(".public-timeline-modal__step-wrapper.public-timeline-modal__step" + i).addClass("show"), _r_();
}
function s(t, i) {
_i_("619:e7b5ecc4");
var n = t.text(), r = t.data("checking");
if (t.text(r), e(".public-timeline-modal__error-message").hide(), "" === i) return e(".nickname_error_forbidden").show(), t.text(n), _r_();
e.post("/user_settings", JSON.stringify({
nickname:i
}), function(r) {
_i_("619:6ec1c557"), "error" === r.status ? ("is_taken" === r.fields.nickname[0] ? e(".nickname_error_exist").show() :"not_alphanumeric" === r.fields.nickname[0] ? e(".nickname_error_alphanumeric").show() :"too_long" === r.fields.nickname[0] ? e(".nickname_error_toolong").show() :e(".nickname_error_forbidden").show(), e(".public-timeline-modal__btn-make-public").addClass("disabled")) :(e(".public-timeline-modal__error-message").hide(), e(".public-timeline-modal__username-save-wrapper").removeClass("show"), e(".public-timeline-modal__title-username").text(i), e(".public-timeline-modal__username-display-wrapper").addClass("show"), e(".public-timeline-modal__btn-make-public").removeClass("disabled")), t.text(n), _r_();
}), _r_();
}
function o(i, n) {
_i_("619:923f69a2");
var s = e(".profile-area__sidebar-public-switch-bg"), o = ".profile-area__sidebar-public-switch-label";
e.post("/profile/privacy_settings", {
public_profile:i
}, function(i) {
if (_i_("619:74aa27c6"), i.success) if (s.hasClass("is-private")) {
var _ = e(".public-timeline-modal__timeline-link"), c = _.data("url") + e(".public-timeline-modal__username-field").val() + ".html";
_.attr("href", c).text(c), a("msie" === t.env.b_browser && t.env.b_browser_version <= 9 ? e(".public-timeline-modal__step2").find(".public-timeline-modal__btn-steps-next") :e(".public-timeline-modal__step1").find(".public-timeline-modal__btn-steps-next")), s.removeClass("is-private").addClass("is-public"), e(o).removeClass("show"), e(o + ".is-public").addClass("show"), e(".profile-area__sidebar-public-switch-tooltip").removeClass("is-private").addClass("is-public"), r(e(".profile-area__sidebar-public-switch-tooltip"));
var l = t.require("ga-tracker");
l.trackEvent(l.clickTracker, "Action: reviewtimeline", "Profile status: PUBLIC");
} else if (s.hasClass("is-public")) {
s.removeClass("is-public").addClass("is-private"), e(o).removeClass("show"), e(o + ".is-private").addClass("show"), e(".profile-area__sidebar-public-switch-tooltip").removeClass("is-public").addClass("is-private"), r(e(".profile-area__sidebar-public-switch-tooltip"));
var l = t.require("ga-tracker");
l.trackEvent(l.clickTracker, "Action: reviewtimeline", "Profile status: PRIVATE"), n && setTimeout(function() {
_i_("619:211cfe4b"), location.reload(), _r_();
}, 200);
}
_r_();
}), _r_();
}
function _() {
_i_("619:63121cfa"), e(".public-timeline-modal__step-wrapper.show").removeClass("show"), e(".public-timeline-modal__step-wrapper.public-timeline-modal__step-cancel").addClass("show"), booking.lightbox.show(e("#public-timeline-modal")), _r_();
}
t.when({
events:"ready"
}).run(function(e) {
_i_("619:9364ccbf"), i(), _r_();
}), _r_();
}(), booking.components.define("myreservations-select", function(e, t) {
"use strict";
_i_("619:bf16cdfd1");
var i, n, r, a, s, o, _, c = this, l = !1, d = "g-hidden", u = !1;
e.components.extend(this, "legacy-emitter"), c.init = function(a) {
_i_("619:466956521"), i = a, r = i.find("[data-options]"), n = i.find("[data-select-selection]"), o = e.require("click-out"), _ = t.proxy(this, "clickedOut"), i.append(h(i.data("select-name"))), i.bind("click", t.proxy(this, "toggle")), r.delegate("li", "click", function() {
_i_("619:f1a01d161"), f(this), _r_();
}), f(r.find('[data-option-selected="true"]')[0], !0), _r_();
}, c.show = function(e) {
if (_i_("619:bb9e07151"), e && e.preventDefault(), l) return _r_();
l = !0, r.removeClass(d), i.addClass("-visible"), u = o.addMonitor(r, _), this.trigger("show"), _r_();
}, c.hide = function(e) {
if (_i_("619:2e9af80a1"), e && e.preventDefault(), !l) return _r_();
l = !1, r.addClass(d), i.removeClass("-visible"), u && o.removeMonitor(u), this.trigger("hide"), _r_();
}, c.toggle = function(e) {
_i_("619:47cae18d1"), l ? this.hide(e) :this.show(e), _r_();
}, c.clickedOut = function() {
_i_("619:c7f9499f1"), l && this.hide(), _r_();
}, c.getValue = function() {
return _i_("619:4ef4713f1"), _r_(s.val());
}, c.setSelected = function(e) {
_i_("619:ae631f981"), f(r.find('[data-option-value="' + e + '"]')[0]), _r_();
};
function h(e) {
return _i_("619:a5f5423a1"), s = t("<input>").attr({
type:"hidden",
name:e
}), _r_(s);
}
function f(e, i) {
_i_("619:6e9840611");
var r = t(e), o = r.data("option-value"), _ = s.val();
s.val(o), r.addClass("-selected").data("option-selected", !0), n.empty().append(r.html()), a && a.removeClass("-selected").data("option-selected", !1), a = r, o === _ || i || (s.trigger("change"), c.trigger("select", o, _)), _r_();
}
_r_();
}), function(e, t) {
_i_("619:6d9677ea");
function i() {
_i_("619:beeac152"), t(".js-mb_room__main-facility--smoking").each(n), _r_();
}
function n(i, n) {
_i_("619:34f9c8fd"), e.components.require("myreservations-form", t(n)).bind("form-submit-success", function() {
_i_("619:a2060b98");
var e = this;
setTimeout(function() {
_i_("619:562f4c35"), e.reset(), _r_();
}, 3e3), _r_();
}), _r_();
}
window.addEventListener("load", i), _r_();
}(booking, jQuery), B.when({
events:"ready"
}).run(function(e) {
_i_("619:90945abf");
var t = "/user_bookings?action=show_imported_bookings";
$("#unhide_trigger").click(function() {
_i_("619:b25ec613"), booking.lightbox.show($("#unhide_window")), _r_();
}), $("#unhide_window .cancel_action").click(function() {
_i_("619:2444b990"), booking.lightbox.hide($("#unhide_window")), _r_();
}), $(".do_unhide").click(function() {
_i_("619:b9bf4f1a"), $("#unhide_window .main_warning").hide(), $("#unhide_window .info").hide(), $("#unhide_window .do_unhide").hide(), $("#unhide_window .cancel_action").hide(), $("#unhide_window .loading").show();
var e = $("#unhide_window .main_warning strong").text(), i = t;
return $.ajax({
url:i,
type:"GET",
success:function(t) {
_i_("619:341e2725");
var i = window.location.href, i = i += "unhb=1;ibk=" + e;
window.location.href = i, _r_();
}
}), _r_(!1);
}), _r_();
}), booking.env.pageIsUserSettings && booking.user.enableAJAXAvatarUpload) {
var hash_user_revisited_avatar_upload = {
MAX_FILE_SIZE:20971520,
DEFAULT_AVATAR_WIDTH:128,
$progressBar:$(".upload-progress-bar-current"),
BOOKING_UPLOAD_ENDPOINT:"https://ugcupload.booking.com/upload_user_avatar",
CHECK_AVATAR_STATUS_ENDPOINT:"/update_avatar_status",
GET_TOKEN_ENDPOINT:"/generate_avatar_token",
CREATE_AVATAR_DELAY_GRUMBLE_ENDPOINT:"/create_avatar_delay_grumble",
CHECK_AVATAR_TIMEOUT:1e3,
SUCCESS_STATUS:"ok",
INVALID_SIZE:"Invalid width or height.",
INVALID_SIZE_CODE:"accounts_photo_error_too_small_pixels",
init:function() {
_i_("619:a3bc71c7");
var e = this, t = function() {
_i_("619:9e6a7582"), $.get(e.GET_TOKEN_ENDPOINT, function(t) {
_i_("619:33e5eb8d");
var i, n = e.BOOKING_UPLOAD_ENDPOINT, r = function(t, r) {
_i_("619:273c3035"), i = '<form id="avatar-upload-form" action="' + n + '" method="POST" enctype="multipart/form-data"><input type="hidden" name="token" value="' + r + '" /><input type="hidden" name="submit" value="" /><input type="file" name="upload" id="avatar-upload-file"/></form>', e.formAction = n, e.token = r, $(i).insertBefore(".upload-progress"), _r_();
};
if (t && t.message) switch (t.message) {
case e.SUCCESS_STATUS:
r(n, t.token);
break;

default:
e.showStatusMsg(booking.user.avatarUploadMsgs.uploadFailed);
}
_r_();
}), _r_();
};
t(), $(".user-avatar-upload").delegate(".submit-avatar", "click", function(t) {
if (_i_("619:c663339b"), t.preventDefault(), $(this).hasClass("disabled")) return _r_();
var i, n = document.getElementById("avatar-upload-form");
n && (e.avatarFormData = new FormData(n), $(".upload-progress").show(), i = new XMLHttpRequest(), i.upload.addEventListener("progress", function(t) {
_i_("619:90a1ac4b"), e.updateUploadProgress.call(e, t), _r_();
}, !1), i.addEventListener("load", function(t) {
_i_("619:678636b1"), e.handleUploadComplete.call(e, t), _r_();
}, !1), i.addEventListener("error", function(t) {
_i_("619:74ba9e58"), e.handleUploadFail.call(e, t), _r_();
}, !1), i.addEventListener("abort", function(t) {
_i_("619:e0e618a6"), e.handleUploadCancel.call(e, t), _r_();
}, !1), i.open("POST", e.formAction, !0), i.send(e.avatarFormData)), _r_();
}).delegate("#avatar-upload-file", "change", function(t) {
_i_("619:3e1002b1");
var i = t.target.files[0], n = $(".avatar-upload-preview"), r = new FileReader(), a = !1;
if (i ? i.type.match("image.*") ? i.size > e.MAX_FILE_SIZE && (e.showStatusMsg(booking.user.avatarUploadMsgs.fileTooLarge), a = 1) :(e.showStatusMsg(booking.user.avatarUploadMsgs.fileTypeNotSupported), a = 1) :n.hide(), a) return $(".submit-avatar").addClass("disabled"), t.preventDefault(), _r_();
$(".submit-avatar").removeClass("disabled"), r.onload = function(t) {
return _i_("619:f3e64dd9"), _r_(function(t) {
_i_("619:f156f352");
var i, r = new Image(), a = t.target.result;
r.onload = function(t) {
_i_("619:9e9ee4b0"), i = r.height / e.DEFAULT_AVATAR_WIDTH, n.css({
background:'url("' + a + '") 50% 50%',
"background-size":r.width / i + "px, " + r.height / i + "px"
}).show(), $(".submit-avatar").removeClass("disabled"), e.hideStatusMsg(), _r_();
}, r.src = a, _r_();
});
}(i), r.readAsDataURL(i), _r_();
}), _r_();
},
showStatusMsg:function(e, t) {
if (_i_("619:6cc38905"), !e) return _r_();
var i = "success" === t ? ".alert-success" :".alert-error";
$(".user-avatar-upload").find(i).html(e).show(), "success" !== t && $(".upload-progress").hide(), _r_();
},
hideStatusMsg:function(e) {
_i_("619:45e10fe4");
var t;
t = "success" === e ? ".alert-success" :"error" === e ? ".alert-error" :".alert-error, .alert-success", $(".user-avatar-upload").find(t).hide(), _r_();
},
updateUploadProgress:function(e) {
if (_i_("619:ee798b10"), e.lengthComputable) {
var t = Math.round(100 * e.loaded / e.total);
this.$progressBar.css("width", t + "%");
}
_r_();
},
updateAvatarImg:function() {
_i_("619:9edb4c21");
var e = this, t = /^(http|\/\/)/, i = "//aff.bstatic.com/";
$.ajax({
url:"/get_user_image?aid=" + B.env.b_aid + ";stype=" + B.env.b_site_type_id + ";lang=" + B.env.b_lang_for_url,
success:function(n) {
if (_i_("619:5c587f12"), n && n.avatar_details && n.avatar_details.available) {
var r = n.avatar_details.urls[128], a = n.avatar_details.urls[32], s = t.test(a), o = t.test(r), _ = s ? "" :i, c = o ? "" :i, l = c + r + (r.indexOf("?") > -1 ? "&" :"?") + "cachevar=" + Math.random(), d = _ + a + (a.indexOf("?") > -1 ? "&" :"?") + "cachevar=" + Math.random();
$(".avatar_img").attr("src", l), $(".user-avatar-header-img").attr("src", d);
}
e.updatedAvatarImg || (e.updatedAvatarImg = 1, setTimeout(function() {
_i_("619:79d29427"), e.updateAvatarImg.call(e), _r_();
}, 3e3), setTimeout(function() {
_i_("619:79d294271"), e.updateAvatarImg.call(e), _r_();
}, 7e3)), _r_();
}
}), _r_();
},
sendUploadTimeStats:function(e) {
_i_("619:c92aa326"), $.get(this.CREATE_AVATAR_DELAY_GRUMBLE_ENDPOINT + "?delay=" + e), _r_();
},
watchOnImageProcessing:function(e) {
_i_("619:44b7faca");
var t = this, i = new Date().getTime(), n = this.SUCCESS_STATUS, r = function() {
_i_("619:eca32ace"), $(".upload-progress-spinner").removeClass("g-hidden"), _r_();
}, a = function() {
_i_("619:4390da26"), $(".upload-progress-spinner").addClass("g-hidden"), _r_();
}, s = function(e) {
return _i_("619:f624f48c"), _r_(e === n);
}, o = function _() {
_i_("619:507a22e9"), $.get(e).then(function(e) {
_i_("619:9a188b37");
var n, r;
e && e.message && "error" !== e.message && (s(e.message) ? (n = new Date().getTime(), r = n - i, a(), t.handleSuccessAvatarChange(), t.sendUploadTimeStats(r)) :setTimeout(_, t.CHECK_AVATAR_TIMEOUT)), _r_();
}), _r_();
};
setTimeout(o, t.CHECK_AVATAR_TIMEOUT), $(".upload-progress-bar").hide(), r(), _r_();
},
handleSuccessAvatarChange:function() {
_i_("619:58952279");
var e = this;
this.showStatusMsg(booking.user.avatarUploadMsgs.uploadSuccess, "success"), this.updatedAvatarImg = !1, $(".upload-progress-msg").hide(), $(".upload-progress-msg-completed").show(), setTimeout(function() {
_i_("619:026b27d0"), e.updateAvatarImg(), booking.env.rppReviewTimelinePublicSwitch ? booking.eventEmitter.trigger("RPP:upload-complete") :$(".user-avatar-upload-modal").fadeOut(1e3, function() {
_i_("619:45c2eb44"), e.hideStatusMsg(), booking.lightbox.hide(), _r_();
}), _r_();
}, 3e3), _r_();
},
handleUploadComplete:function(e) {
_i_("619:2b6acaac");
var t, i = this.CHECK_AVATAR_STATUS_ENDPOINT;
try {
switch (t = $.parseJSON(e.target.responseText), t.message) {
case this.SUCCESS_STATUS:
this.watchOnImageProcessing(i + "?photo_id=" + t.photo_id);
break;

case this.INVALID_SIZE:
case this.INVALID_SIZE_CODE:
this.showStatusMsg(booking.user.avatarUploadMsgs.invalidImageSize);
break;

default:
this.showStatusMsg(booking.user.avatarUploadMsgs.uploadFailed);
}
} catch (e) {
this.showStatusMsg(booking.user.avatarUploadMsgs.uploadFailed);
}
_r_();
},
handleUploadFail:function(e) {
_i_("619:3223572c"), this.showStatusMsg(booking.user.avatarUploadMsgs.uploadFailed), _r_();
},
handleUploadCancel:function(e) {
_i_("619:0f47acab"), this.showStatusMsg(booking.user.avatarUploadMsgs.uploadFailed), _r_();
}
};
B.when({
events:"ready"
}).run(function(e) {
_i_("619:2ad03f90"), hash_user_revisited_avatar_upload.init(), _r_();
});
}

!function() {
_i_("619:8c451929");
var e = {
priority:9,
$targetParent:{},
init:function() {
_i_("619:03ef0aa7");
var e = this;
$(".user_resend_conf_email_link").click(function() {
_i_("619:86cbcd3d");
var t = $(this), i = t.attr("data-email");
return e.$targetParent = t.parent().parent(), i && (e.showLoadingMsg(), $.ajax({
url:"/resend_confirm_email",
type:"POST",
data:{
email:i,
lang:booking.env.b_lang,
aid:booking.env.b_aid
},
success:function(t) {
_i_("619:c688f929"), t && "sent" === t.status ? e.showSuccessMsg() :e.showErrorMsg(), _r_();
},
error:function() {
_i_("619:4ce122db"), e.showErrorMsg(), _r_();
}
})), _r_(!1);
}), _r_();
},
showLoadingMsg:function() {
_i_("619:d279e8bd"), $(".user_resend_conf_email_status", this.$targetParent).hide(), $(".user_resend_conf_email_loading", this.$targetParent).show(), _r_();
},
showErrorMsg:function() {
_i_("619:ac423d9c"), $(".user_resend_conf_email_status", this.$targetParent).hide(), $(".user_resend_conf_email_retry", this.$targetParent).show(), _r_();
},
showSuccessMsg:function() {
_i_("619:27766c99"), $(".user_resend_conf_email_status", this.$targetParent).hide(), $(".user_resend_conf_email_success", this.$targetParent).show(), _r_();
}
};
B.when({
events:"ready"
}).run(function(t) {
_i_("619:e0c624fe"), e.init(), _r_();
}), _r_();
}(), function() {
_i_("619:58bf5799");
var e = {
priority:9,
cur_open_menu:null,
one_arrow_height:15,
sprite_count:6,
shouldTrack:!0,
init:function() {
_i_("619:e6e267bc");
var e = this, t = $(".open_menu");
t.length && (this.cur_open_menu = t.get(0), $(this).parents(".selected") || $(".open_close", this.cur_open_menu.parentNode).css({
"background-position":"0px 0px"
}), this.resizeFormwrap()), $("#profileMenu a").click(function() {
_i_("619:be8a81ba");
var t = $(this).attr("data-trackname"), i = $("ul", this.parentNode), n = booking.require("ga-tracker");
if (n.userProfileTracker && t && n.trackEvent(n.userProfileTracker, "Sidebar Menu : " + t, booking.env.b_action), i.length) {
var r = $("ul", this.parentNode).get(0);
return null != e.cur_open_menu && (e.timerArrow(e.cur_open_menu, !1), $(e.cur_open_menu).slideUp()), r === e.cur_open_menu ? e.cur_open_menu = null :(e.cur_open_menu = r, e.timerArrow(e.cur_open_menu, !0), $(r).slideDown(function() {
_i_("619:904ccc9f"), e.resizeFormwrap(), _r_();
})), _r_(!1);
}
return _r_(!0);
}), _r_();
},
resizeFormwrap:function() {
_i_("619:e0b3e148");
var e = $("#formwrap").css("height"), t = $(".sidebar_menu_placeholder").css("height");
t > e && $("#formwrap").css("min-height", t), _r_();
},
timerArrow:function(e, t) {
_i_("619:04c2889c");
for (var i = 0; i < this.sprite_count; i++) {
var n = $(".open_close", e.parentNode).get(0);
this.animateArrow(n, i, t);
}
_r_();
},
animateArrow:function(e, t, i) {
_i_("619:066e618d");
var n = this;
setTimeout(function() {
_i_("619:76791f27");
var r = i ? t * n.one_arrow_height :n.one_arrow_height * (n.sprite_count - 1) - t * n.one_arrow_height, a = "0px -" + r + "px";
$(e).css({
"background-position":a
}), _r_();
}, 50 * t), _r_();
}
};
B.when({
events:"ready"
}).run(function(t) {
_i_("619:7134ef29"), e.init(), _r_();
}), _r_();
}(), function() {
_i_("619:e2c58d4f");
function e() {
_i_("619:3150d7e2");
var e = $("#slides"), t = $("#slide1").height(), i = 1;
$(".onboarding_header, #slide1").show(), e.animate({
height:t
}), $("#genius_onboarding_container").delegate("#slide1 .btn-primary", "click", function() {
_i_("619:4a499a8c"), n(), _r_();
});
function n() {
_i_("619:e70cdaf1");
var t = 1200;
if (booking.env.is_genius_onboarding_auth_success && ($("#slide1 h2").fadeOut(700), $(".genius_icon_placeholder").fadeOut(800), setTimeout(function() {
_i_("619:0bbb146b"), $(".user_auth_success").fadeOut(800), _r_();
}, 100), setTimeout(function() {
_i_("619:025471bf"), $("#slide1").slideUp(400, "swing"), setTimeout(function() {
_i_("619:b80b8405"), $("#slides").css("background", "none"), $(".preview_slider").show(), $(".genius_example_details").show(), $(".genius_screen_01").css("opacity", "1"), _r_();
}, 300), _r_();
}, 800), setTimeout(function() {
_i_("619:e29fbd09");
var t = $("#slide2").height();
e.animate({
height:t
}), _r_();
}, t)), !$(this).hasClass("auth_action")) return _r_(!1);
_r_();
}
$("#genius_onboarding_container").delegate("#slide2 .example_nav", "click", function() {
_i_("619:49698357");
var e = !0;
return $(this).hasClass("example_nav_prev") && (e = !1), e ? 3 === i ? i = 1 :i++ :1 === i ? i = 3 :i--, $("ul.preview_slider li").css("z-index", "1").animate({
opacity:"0"
}, 200), $(".genius_screen_0" + i).css("z-index", "2").animate({
opacity:"1"
}, 200), $(".screen_text").hide(), $(".screen_visible_" + i).show(), _r_(!1);
}), $(".drag_bookmark").click(function() {
return _i_("619:f43b4509"), _r_(!1);
}), $("#genius_onboarding_container").delegate(".screen1_trigger", "click", function() {
return _i_("619:054cb0ae"), $(".genius_screen .screen").hide(), $(".genius_screen .screen1").show(), $(".genius_example_info a").removeClass("current"), $(this).addClass("current"), _r_(!1);
}), $("#genius_onboarding_container").delegate(".screen2_trigger", "click", function() {
return _i_("619:dfc3f120"), $(".genius_screen .screen").hide(), $(".genius_screen .screen2").show(), $(".genius_example_info a").removeClass("current"), $(this).addClass("current"), _r_(!1);
}), $("#genius_onboarding_container").delegate(".screen3_trigger", "click", function() {
return _i_("619:ec3b490d"), $(".genius_screen .screen").hide(), $(".genius_screen .screen3").show(), $(".genius_example_info a").removeClass("current"), $(this).addClass("current"), _r_(!1);
}), _r_();
}
B.env && B.env.is_genius_onboarding && window.addEventListener("load", e), _r_();
}(), function() {
_i_("619:d32cbf1c");
var e = {
priority:9,
init:function() {
_i_("619:fcaef19e");
var e = this;
if (!$(".mybookings_filters_container").length) return _r_();
booking.env.filter_on && $("#mb_res_chzn").trigger("mousedown");
var t = booking.require("ga-tracker");
$("#reset_filters_trigger").click(function() {
_i_("619:b83bef7f"), $(".filter-box select").each(function() {
_i_("619:dfb087e4"), $("option", this).first().attr("selected", "selected"), _r_();
}), $("#my_bookings_order").submit(), t.trackEvent("PROaccount", "click", "filter_reset"), _r_();
}), booking.env.b_is_ie6 || booking.env.b_is_ie7 || booking.env.b_is_tablet || ($(window).scroll(function() {
_i_("619:4401af80"), e.fixedMenu($(window).scrollTop()), _r_();
}), $(window).resize(function() {
_i_("619:4401af801"), e.fixedMenu($(window).scrollTop()), _r_();
})), this.googleTracking(), this.minOffset = $(".mybookings_filters_container").offset().top, _r_();
},
minOffset:0,
googleTracking:function() {
_i_("619:53c9c205");
var e = $(document), t = booking.require("ga-tracker");
e.delegate("#mb_res_chzn .active-result", "click", function() {
_i_("619:6cd98959"), t.trackEvent("PROaccount", "click", "show-option: " + $("#mb_res_chzn .active-result").index(this)), _r_();
}), e.delegate("#hotelsList_chzn .active-result, #citiesList_chzn .active-result", "click", function() {
_i_("619:71a0ce2f"), t.trackEvent("PROaccount", "click", $(this).closest("#hotelsList_chzn").length ? "hotels-list" :"cities-list"), _r_();
}), _r_();
},
fixedMenu:function(e) {
_i_("619:00cb1dd7");
var t = $(".mybookings_filters_container"), i = this.minOffset, n = $(".profile_wrapper").offset().top + $(".profile_wrapper").height() - $(".mybookings_filters_container").height() - 30;
if (e > i && n > e && $(".bookings_list").length && $(".mybookings_filters_container").length) {
var r = $(".bookings_list").offset().left, r = Math.round(r);
if (!$(".mybookings_filters_container").hasClass("fixed_filters") && ($(".mybookings_filters_container").addClass("fixed_filters"), $(".mybookings_filters_container").css("left", r + "px"), t.parent().css("padding-top", t.outerHeight() + "px"), $(".sidebar_menu_wrapper").length)) {
var a = $("#formwrap").width();
$(".mybookings_filters_container").css("width", a + "px"), $(".mybookings_filters_container").css("margin-top", "0");
}
} else $(".mybookings_filters_container").removeClass("fixed_filters"), t.parent().css("padding-top", 0);
_r_();
}
};
B.when({
events:"ready"
}).run(function(t) {
_i_("619:b91d5c04"), e.init(), _r_();
}), _r_();
}(), B.require([ "jquery", "et" ], function(e, t) {
_i_("619:377cf916");
var i, n;
"tdot" == B.env.b_site_type ? (i = e("#confirmation_lightbox_app_download_content"), n = "confirmation_lightbox_app_download_content_wrapper") :(i = e("#gta-lightbox-container"), n = B.et.track("cCcCcCDXEcdfYOMYdNXYXaDBUcRe") ? "gta-lightbox-wrapper gta-lightbox-v2" :"gta-lightbox-wrapper");
var r = i.find(".gta-widget"), a = e(".gta-lightbox-autofocus").find(".gta-widget-input"), s = !1, o = {
myreservations:"MyReservations-Lightbox-Widget",
confirmation:"Confirmation-Lightbox-Widget"
};
function _(t) {
_i_("619:1b67a339"), c(t), e.cookie("clba_auto", 1, {
domain:B.env.b_domain_end
}), _r_();
}
function c(e) {
_i_("619:ccb5ab61"), "tdot" != B.env.b_site_type && r.data("override-placement", e), booking.lightbox.show(i, {
customWrapperClassName:n,
bOverflowVisible:!0,
hideCallBack:function() {
_i_("619:342d4a12"), r.removeData("override-placement"), _r_();
}
}), s || (s = !0, l()), a.length && a.focus(), h(), _r_();
}
function l() {
_i_("619:f1b5d80f"), i.find(".gta-sms-widget, .gta-email-widget, .gta-qr-code-placeholder, .gta-link-track").trigger("gta:lightbox:init"), "confirmation" == B.env.b_action, _r_();
}
function d() {
if (_i_("619:5fc25dbd"), !i.length || i.data("dont-show-on-load")) return _r_(!1);
if (!o.hasOwnProperty(B.env.b_action)) return _r_(!1);
if (B.env.confirmation_page_show_signup) return _r_(!1);
if ("1" === e.cookie("clba")) return _r_(!1);
if ("1" === e.cookie("blba")) return _r_(!1);
if (("1" === !e.cookie("clba") || "1" === !e.cookie("blba")) && i.data("show-with-ml")) return _r_(!0);
return _r_(!0);
}
function u() {
if (_i_("619:b285621e"), "myreservations" == B.env.b_action) {
var e = new Date(i.data("checkin")), t = new Date();
return (isNaN(e.getDate()) || t > e) && (e = t, e.setDate(e.getDate() + 7)), _r_(e);
}
return _r_(null);
}
function h() {
_i_("619:a489ebe2"), ("myreservations" == B.env.b_action || "1" != e.cookie("clba")) && e.cookie("clba", 1, {
domain:B.env.b_domain_end,
expires:u()
}), _r_();
}
if (e(".gta-lightbox-trigger").on("click", function() {
_i_("619:c4c0f0c0"), c(this.getAttribute("data-placement")), _r_();
}), d()) {
var f = B.require && B.require("mybooking/no_lightbox_opendefault"), p = f ? f.willOpeningByDefault() :!1;
(!B.env || "myreservations" !== B.env.b_action || !p || p && !i.data("myres-prevent-modal-clashing")) && _(o[B.env.b_action]);
}
_r_();
}), booking.ensureNamespaceExists("conf"), B.conf.Url = {
DONT_ASK_ME_AGAIN_FOR_ACCOUNT:"/dont_ask_me_again_for_account_overlay",
NEWSLETTER_SUBSCRIBE:"/newslettersubscribe.json",
NPS_FEEDBACK:"/receive_nps_feedback",
SEND_APP_SMS:"/send_app_sms_v2",
SEND_APP_EMAIL:"/send_app_email_v2",
GET_RC_DATA:"/get_rental_car_data"
}, $(document).ready(function() {
if (_i_("619:5483c037"), booking.env.confirmation_page_show_signup) {
var e = $("#confirmation_signup_lightbox_content");
if (0 === e.length) return _r_();
var t = function() {
_i_("619:b5ecc57d"), $(".confirmation-signup-overlay-wrapper").hide(), $("#footer, #footer_tablet").undelegate(".confirmation-signup-overlay-wrapper", "click").undelegate(".confirmation-signup-overlay-close", "click"), _r_();
};
setTimeout(function() {
_i_("619:3adc6587"), e.find(".user_signup_password").focus(), _r_();
}, 0);
var i = {
customWrapperClassName:"user_access_menu__confirmation--lightbox"
};
booking.lightbox.show(e, i), $(".signup_no_thanks").click(function() {
_i_("619:a1d54f77");
var e = $(this).closest(".user_access_form_signup").find("[name=username]").val();
return $.get(B.conf.Url.DONT_ASK_ME_AGAIN_FOR_ACCOUNT, {
email:e,
aid:booking.env.b_aid,
stype:booking.env.b_site_type_id
}), booking.env.confirmation_page_show_signup_no_js ? t() :booking.lightbox.hide(), _r_(!1);
});
}
_r_();
}), function() {
_i_("619:bc65a143");
var e = window.jQuery, t = window.booking, i = {
visa:"Visa",
mastercard:"MasterCard",
amex:"American Express",
dinersclub:"Diners Club",
discover:"Discover",
jcb:"JCB",
maestro:"Maestro"
};
function n() {
_i_("619:46c7c3d2"), r(function() {
_i_("619:c7e029a8");
var n = e(".js-cc-field--type"), r = e(".js-cc-field--number"), s = e.map(n.find("option"), a);
r.payment("formatCardNumber"), e(".js-cc-field--expiry").payment("formatCardExpiry"), e(".js-cc-field--cvc").payment("formatCardCVC"), t.require("component/loader").loadComponents(n), n.triggerHandler("change"), r.bind("keyup input", function(t) {
_i_("619:419e9a9a");
var r = e.payment.cardType(t.target.value), a = r && i[r];
if (a) {
var o = -1 !== e.inArray(a, s);
o && a !== n.val() && n.val(a).change();
}
_r_();
}), r.val() && r.triggerHandler("input"), e("[placeholder]", "#change_cc").placeholder(), _r_();
}), _r_();
}
function r(e) {
_i_("619:e2a48a3c"), t.eventEmitter.bind("slideBox.loadCompleted slideBox.submitCompleted", function(t, i) {
if (_i_("619:70bd685d"), !i) return _r_(!0);
var n = i.$target || i.target;
"slidebox-change-cc" === n.attr("id") && e(), _r_();
}), _r_();
}
function a(e) {
return _i_("619:375cd492"), _r_(e.value);
}
t.when({
condition:t.env.pb_mb_cc_fields_change
}).run(n), _r_();
}(), function(e, t) {
_i_("619:cfaaab7f");
function i(i, n) {
_i_("619:34f9c8fd1"), e.components.require("myreservations-form", t(n)).bind("form-submit-success", function() {
_i_("619:a2060b981");
var e = this;
setTimeout(function() {
_i_("619:562f4c351"), e.reset(), _r_();
}, 3e3), _r_();
}), _r_();
}
e.when({
events:"ready"
}).run(function(e) {
_i_("619:819740b3"), t(".js-mb_room__main-facility--bed-preference").each(i), _r_();
}), _r_();
}(booking, jQuery), function(e, t) {
_i_("619:7cfa85f1");
var i, n, r, a = !1, s = !1;
function o(e) {
_i_("619:db18935b");
var i = t(e.target);
"confirm_checkin_checkout_times" === i.find('[name="do"]').val() && (a = !1, s = !1, t(".changeCheckinCheckoutTime").removeClass("request status--approved").find(".request__content").remove(), _(e)), "confirmed_checkin_checkout_times" === i.find('[name="do"]').val() && c(e), _r_();
}
function _(e) {
_i_("619:eb65a929");
var i = t(e.target), n = i.find("[data-checkin-from][data-checkin-until]"), r = i.find("[data-checkout-from][data-checkout-until]");
if (!n || !r) return _r_();
var o = parseInt(n.data("checkin-from").substring(0, 2), 10) || 0, _ = parseInt(n.data("checkin-until").substring(0, 2), 10) || 27, c = parseInt(r.data("checkout-from").substring(0, 2), 10) || 0, l = parseInt(r.data("checkout-until").substring(0, 2), 10) || 24, d = parseInt(i.find('[name="requested_checkin_time"]').val(), 10), u = parseInt(i.find('[name="requested_checkout_time"]').val(), 10);
(d > o && _ >= d || 0 === d) && (a = !0), (u > c && l >= u || 0 === u) && (s = !0), _r_();
}
function c(e) {
if (_i_("619:903b09e1"), !a || !s) return _r_();
var o = t('<span class="request__content"></span>'), _ = t('<div class="request__status"><i class="request__status__icon"></i><span class="request__status__text">' + r + "</span></div>"), c = t(e.target), u = parseInt(c.find('[name="requested_checkin_time"]').val(), 10), h = parseInt(c.find('[name="requested_checkout_time"]').val(), 10), f = [];
a && u && f.push(i + ": " + l(u)), s && h && f.push(n + ": " + l(h)), o.html(f.join(", ")), t(".changeCheckinCheckoutTime .mb-myBookingOptionsTitle").addClass("request status--approved").append(o).append(_), t("#slidebox-checkin-time").one("slideBox.submit", d), _r_();
}
function l(e) {
return _i_("619:894a9d16"), _r_(e - 1 + ":00 - " + e + ":00");
}
function d(i) {
_i_("619:42a486c9");
var n = t(i.target);
"confirmed_checkin_checkout_times" === n.find("[name=do]").val() && n.one("slideBox.submitCompleted", function(i) {
_i_("619:dbcfa28f"), n.is(".slidebox--success") && (e.require("mybooking/slidebox").close(n), t(".changeCheckinCheckoutTime").removeClass("slidebox--success slidebox--active")), _r_();
}), _r_();
}
e.when({
events:"ready"
}).run(function(a) {
_i_("619:c693b69a"), i = e.jstmpl.translations("check_in"), n = e.jstmpl.translations("check_out"), r = e.jstmpl.translations("pb_special_request_quicknote_approved"), t(document.body).bind("slideBox.open", function(e) {
_i_("619:35d7a8b0");
var i = t(e.target);
i.is("#slidebox-checkin-time") && i.find("form").one("submit", o), _r_();
}), _r_();
}), _r_();
}(window.booking, window.jQuery), function(e, t) {
_i_("619:f01b0e74");
function i(e) {
_i_("619:d03544c0");
var i = t(e.target), n = t(i).closest(".mb-options-tb--item");
n.find(".mb-options-togglable").toggleClass("invisible_spoken"), n.find(".mb-options-toggle span").toggleClass("invisible_silent"), _r_();
}
t(function() {
_i_("619:cb87cecd"), t(".mb-options-tb").delegate(".mb-options-toggle a", "click", i), _r_();
}), _r_();
}(booking, jQuery), function() {
_i_("619:db1e270e");
var e = window.jQuery, t = window.booking, i = "#slidebox-special-request";
t.when({
events:"ready"
}).run(function(n) {
_i_("619:4ec13cbe");
var r = e(i), a = t.jstmpl("special_requests_entry");
r.bind("slideBox.open", function() {
_i_("619:efee4431"), r.bind("slideBox.save", function() {
_i_("619:a9a12983");
var t = {
request_content:booking.env.recentSpecialRequest,
b_hide_request_status:!0
}, i = e("[data-special-request] .requests-history"), n = e(a.render(t));
i.append(n), _r_();
}), _r_();
}), _r_();
}), _r_();
}(), B.when({
action:[ "myreservations", "confirmation" ],
events:"ready"
}).run(function() {
_i_("619:529bafc8");
var e = "#slidebox-cancel-booking, #slidebox-cancel-pob", t = "pb_mcc", i = B.eventEmitter;
i.bind("slideBox.open", n);
function n(i, n) {
if (_i_("619:9d73aacb"), !n) return _r_(!0);
var r = n.$target || n.target, a = $(r);
if (!a.is(e)) return _r_();
a.delegate("input:radio", "click." + t, function() {
_i_("619:3f6c3284");
var e = $(this);
"found_better_place_other" === e.val() ? e.siblings("div").removeClass("mb-hidden") :a.find(".found_better_place_other").addClass("mb-hidden"), _r_();
}), a.delegate("li.found_better_place_other_container select", "change." + t, function() {
_i_("619:312d26c0");
var e = $(this);
"found_better_place_other_other" === e.val() ? e.parent().siblings(".found_better_place_other_other").removeClass("mb-hidden") :e.parent().siblings(".found_better_place_other_other").addClass("mb-hidden"), _r_();
}), a.delegate('li.found_better_place_other_container found_better_place_other_other input[type="text"]', "blur." + t, function() {
_i_("619:4a7d8761");
var e = $(this);
"" != e.val(), _r_();
}), _r_();
}
_r_();
}), function(e, t) {
"use strict";
_i_("619:1836997a"), e.define("lightbox/change-time", function(e, i, n) {
_i_("619:be1c11d8");
var r = t("body"), a = null;
function s() {
_i_("619:cc839313"), this.$lightbox = null, this.$base = null, this.$select = null, this.$submit = null, this.enabled_counter = 0, this.init(), _r_();
}
return s.prototype = {
init:function() {
_i_("619:26f172e4");
var e = this;
this.$lightbox = r.find(".slideBoxWrapper"), this.$lightbox.delegate(".js_line_switch", "change.highlight", function() {
_i_("619:497eb0bc"), e.change(t(this)), _r_();
}), this._prepare(), _r_();
},
destroy:function() {
_i_("619:5579d8d3"), this.$lightbox.undelegate("change.highlight"), this.$lightbox = null, _r_();
},
change:function(e) {
_i_("619:21f38be8"), this.$base = e.closest(".js_line_time"), this.$select = this.$base.find("select"), this.$submit = this.$lightbox.find(".js_time_submit");
var t = this.$base.hasClass("mod--disabled");
t ? this._tgl(!1) :this._tgl(!0), _r_();
},
_tgl:function(e) {
_i_("619:002d94a0"), this.$base.toggleClass("mod--disabled", e), this.$select.attr("disabled", e), e ? this.enabled_counter-- :this.enabled_counter++, this._tgl_submit(!this.enabled_counter), _r_();
},
_tgl_submit:function(e) {
_i_("619:e5431c7f"), this.$submit.attr("disabled", e), _r_();
},
_prepare:function() {
_i_("619:d6803e55");
var e = this.$lightbox.find(".js_line_time"), i = this;
e.each(function() {
_i_("619:2db27c67");
var e = t(this), n = e.hasClass("mod--disabled");
n ? e.find("select").attr("disabled", !0) :i.enabled_counter += 1, _r_();
}), _r_();
}
}, _r_({
init:function() {
_i_("619:66c4408f"), a = new s(), _r_();
},
destroy:function() {
_i_("619:04925a78"), a.destroy(), a = null, _r_();
}
});
}), _r_();
}(B, $), B.when({
events:"ready"
}).run(function(e) {
_i_("619:6fe1c2ae");
var t = "";
function i() {
_i_("619:d2da01ef");
var e = $(".email_box_list__email"), t = $(".email-box-list__note");
e.length > 1 && e.not(":last").remove(), e.children("input").val(""), t.val(""), _r_();
}
$(".send_confirmation_trigger").click(function() {
return _i_("619:123c57b8"), "" != t && ($(".details_frm", t).slideUp(), $(".validate_emails", t).slideUp(), $(".send_confirmation_trigger").show()), t = "#" + $(this).attr("id").replace("_trigger", ""), $(t).show().slideDown(), B.et.track("OTfdASFIZETQWUZbeKRJOLdKQNQFKe") && $(t).attr("aria-expanded", !0).find(".email_box_list__email_input").first().focus(), $(".details_frm", t).show().slideDown(), $(this).hide(), _r_(!1);
}), $(".addnote_trigger").click(function() {
_i_("619:5ee44f8e");
var e = "#" + $(this).attr("id").replace("_trigger", "");
return $(".note", t).is(":visible") && "" == $(".note textarea", t).val() ? ($(".note", t).hide(), $(e).toggle()) :$(e).toggle(), _r_(!1);
}), $("#fwd_details_frm input.bluebutton").click(function() {
_i_("619:d739da78");
var e = !0, t = 0, r = $("#fwd_details_frm");
if (B.et.track("OTfdASFIZETQWUZbeKRJOLdKQNQFKe") && $("#fwd_details_frm .error").hide(), $("input.inputText", r).each(function() {
_i_("619:8550dad5");
var i, r, a;
if (B.et.track("OTfdASFIZETQWUZbeKRJOLdKQNQFKe") ? (i = $(".email-box-list__note", "#fwd_details_frm").val(), r = ", " + i) :(a = "", a = $(this).siblings("a.addnote_trigger").length > 0 ? "#" + $(this).siblings("a.addnote_trigger").attr("id").replace("_trigger", "") :$(this).closest("table"), r = ", " + $("textarea", a).val()), $(this).val($.trim($(this).val())), "" != $(this).val() && $(this).val() != $(this).attr("title")) if (t++, n($(this).val())) {
var s = "#" + $(this).attr("id") + "_check";
$(s).show(), $("strong", s).text($(this).val()), B.et.track("OTfdASFIZETQWUZbeKRJOLdKQNQFKe") ? "" !== i && ($(".guest_note", s).show(), $(".guest_note", s).text(r)) :"" != $("textarea", a).val() && ($(".guest_note", s).show(), $(".guest_note", s).text(r)), $(".error", this.parentNode).hide(), $("p.nodata").hide(), $(this).css("border", "2px solid #00a9ff");
} else {
e = !1, $(this).css("border", "1px solid #B30000"), $("p.nodata").hide(), $(".error", this.parentNode).show();
var s = $(this).attr("id") + "_check";
$(s).hide();
}
_r_();
}), 0 == t) return $("p.nodata").show(), $(window).trigger("confirmation_share_email:error"), _r_(!1);
if (1 == e && t > 0) {
var a = "";
$("input.inputText", r).each(function() {
_i_("619:fe13333d");
var e = "", t = "";
if (B.et.track("OTfdASFIZETQWUZbeKRJOLdKQNQFKe")) e = $(".email-box-list__note", r).val(); else {
var i = "";
i = $(this).siblings("a.addnote_trigger").length > 0 ? "#" + $(this).siblings("a.addnote_trigger").attr("id").replace("_trigger", "") :$(this).closest("table"), e = $("textarea", i).val();
}
if ("" != e && (t = encodeURIComponent(e)), "" != $(this).val() && $(this).val() != $(this).attr("title") && n($(this).val())) {
var s = "" == a ? "" :",";
a += s + $(this).val() + ":1:" + t;
}
_r_();
});
}
if (a && "" != a) {
var s = {
emails:a,
update:1,
lang:booking.env.b_lang_for_url,
stype:booking.env.b_site_type_id,
auth_key:$('[name="auth_key"]', r).val()
};
$.post($(".details_frm").attr("action"), s, function(e) {
_i_("619:fe6174d1"), e.status && "ok" == e.status ? ($("p.nodata").hide(), $(".confirm_send", r).slideDown(), $("input.inputText", r).each(function() {
if (_i_("619:7672da74"), "" != $(this).val() && $(this).val() != $(this).attr("title")) {
var e, t = $(".email_already_sent", r);
e = B.et.track("OTfdASFIZETQWUZbeKRJOLdKQNQFKe") ? $(".email-box-list__note", r).val() || "" :$(this).closest("table").find("textarea").val() || "";
var i = "";
e.length > 0 && (i = '<p class="guest_note" style="">, ' + $("<div/>").text(e).html() + "</p></li>");
var n = $('<li style="display:none"><strong>' + $(this).val() + "</strong>" + i);
t.append(n), n.fadeIn();
}
_r_();
}), $(window).trigger("confirmation_share_email:sent")) :($("#confirm_send .error").show(), $(window).trigger("confirmation_share_email:error")), i(), _r_();
});
} else $(window).trigger("confirmation_share_email:error");
_r_();
}), $(".details_frm").submit(function() {
return _i_("619:038f74a6"), _r_(!1);
}), $(".back_link").click(function() {
_i_("619:3a66213f"), $("p.nodata").hide(), $(".validate_emails", t).slideup(), $(".details_frm", t).slideDown(), _r_();
}), $(".cancel_link").click(function() {
_i_("619:6039da48"), $(t).slideUp(), B.et.track("OTfdASFIZETQWUZbeKRJOLdKQNQFKe") && $(t).attr("aria-expanded", !1), $(".validate_emails", t).hide(), $(".details_frm", t).hide(), $("p.nodata").hide(), $(".send_confirmation_trigger").show(), _r_();
}), $(".close_link").click(function() {
_i_("619:318fa775"), $(t).slideUp(), $(".validate_emails", t).hide(), $(".details_frm", t).hide(), $("p.nodata").hide(), $(".send_confirmation_trigger").show(), _r_();
});
function n(e) {
_i_("619:daf51e84");
var t = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
return _r_(t.test(e));
}
_r_();
}), function(e) {
"use strict";
_i_("619:4bad97ad");
var t = e.require("jquery");
function i() {
if (_i_("619:7af6e880"), !booking.env.b_is_tdot_traffic || !t("#b_nav_currency").length || !t("#b_nav_language").length) return _r_();
var i = {
top_last_viewed:"top_lw_wrapper",
top_notification:"top_notification_wrapper",
b_nav_language:"top_language",
b_nav_currency:"top_currency"
};
t("nav>a").click(function(e) {
_i_("619:ca288b4c");
var r = t(this), a = t("#" + i[r.attr("id")]);
a.length && setTimeout(function() {
_i_("619:d3433515"), a.is(":visible") && n(r, a), _r_();
}, 1), _r_();
}), booking.env.b_is_android || (t("#header_currency").css({
right:"auto",
left:t("#b_nav_currency").offset().left
}), t("#header_language").css({
right:"auto",
left:t("#b_nav_language").offset().left
}));
function n(i, n) {
_i_("619:427eb721");
var r, a, s = n.find(".lw_corner");
"top_language" === n.attr("id") || "top_currency" === n.attr("id") ? (r = 20, e.env.rtl ? (a = e.et.track("bZOMJURSHDHT") ? i.offset().left :i.offset().left - 10, s.css("left", a)) :(a = t(window).width() - r - (i.offset().left + i.outerWidth() / 2) - s.outerWidth() / 2 / 1.4, s.css("right", a))) :r = t(window).width() - (i.offset().left + i.outerWidth() / 2) - (n.width() - s.position().left - s.outerWidth() / 2), e.env.rtl ? n.css("left", r) :n.css("right", r), _r_();
}
_r_();
}
e.when({
events:"ready"
}).run(i), _r_();
}(window.booking), function(e, t) {
_i_("619:bf9a836f"), t.when({
events:"ready"
}).run(function(i) {
if (_i_("619:f0f80646"), t.env && "myreservations" !== t.env.b_action) return _r_();
var n = e(".js-mb-block__bbtool-banner-inline");
if (!n.length) return _r_();
e.cookie("bb_reports_gotit") || (n.find(".mb-bbtool-banner-inline").addClass("mb-bbtool-banner-inline--open"), n.addClass("mb-block__bbtool-banner-inline--open"), n.on("click", ".js-cancel", function(t) {
_i_("619:1c2cef82"), t.preventDefault(), e.cookie("bb_reports_gotit", 1, {
expires:365
}), n.find(".mb-bbtool-banner-inline--open").removeClass("mb-bbtool-banner-inline--open"), n.removeClass("mb-block__bbtool-banner-inline--open"), _r_();
})), _r_();
}), _r_();
}(window.jQuery, window.booking), function(e, t) {
_i_("619:c507ec71"), t.when({
events:"ready"
}).run(function(i) {
if (_i_("619:f39c1b0e"), t.env && "myreservations" !== t.env.b_action) return _r_();
var n = e(".js-mb-block-rent-out-your-apartment");
if (!n.length) return _r_();
e.cookie("mb_rent_out_your_apartment_hidden") || (n.find(".mb-bbtool-banner-inline").addClass("mb-bbtool-banner-inline--open"), n.addClass("mb-block__bbtool-banner-inline--open"), n.on("click", ".js-cancel", function(t) {
_i_("619:3a7183e1"), t.preventDefault(), e.cookie("mb_rent_out_your_apartment_hidden", 1, {
expires:365
}), n.find(".mb-bbtool-banner-inline--open").removeClass("mb-bbtool-banner-inline--open"), n.removeClass("mb-block__bbtool-banner-inline--open"), _r_();
})), _r_();
}), _r_();
}(window.jQuery, window.booking), function(e, t) {
_i_("619:526719ac");
var i;
function n() {
_i_("619:d9785ea4"), i = t(".mb-masthead__map"), i.length && r(i.data("latitude"), i.data("longitude"), i.data("hotel-name")), e.env.confirmationPrint && window.setTimeout(function() {
_i_("619:659f6bf4"), t(".js-print-confirmation-start").click(), _r_();
}, 1e3), _r_();
}
function r(t, i, n) {
if (_i_("619:59406290"), window.google && google.maps) a(t, i, n)(); else {
var r = "_pb_mapcallback_" + new Date().getTime(), s = document.createElement("script");
window[r] = a(t, i, n), s.type = "text/javascript", s.src = e.env.google_maps_url + "&callback=" + r, s.async = !0, document.getElementsByTagName("head")[0].appendChild(s);
}
_r_();
}
function a(t, n, r) {
return _i_("619:4ffa2928"), _r_(function() {
_i_("619:f3340acf");
var a = new google.maps.LatLng(t, n), s = {
zoom:12,
center:a,
mapTypeId:google.maps.MapTypeId.ROADMAP,
panControl:!1,
mapTypeControl:!1,
zoomControlOptions:{
style:google.maps.ZoomControlStyle.SMALL,
position:e.env.rtl ? google.maps.ControlPosition.TOP_LEFT :google.maps.ControlPosition.TOP_RIGHT
},
scrollwheel:!1
}, o = new google.maps.Map(i.get(0), s);
new google.maps.Marker({
position:a,
map:o,
title:r,
icon:e.env.hotel_google_map_icon
}), _r_();
});
}
e.when({
condition:t(".mb-masthead__map").length
}).run(n), _r_();
}(booking, jQuery), B.define("component/myreservations/change_dates_nr", function(e, t, i) {
_i_("619:67186025");
var n = e("main/calendar2-init");
function r(e, t, i) {
_i_("619:930075a4"), this.scope = e, this.target = t, this.button = i, this.hidden = "g-hidden", this.$target = $(t), this.$content = this.$target.find(".js-slidebox__inner"), this.$slideboxWrapper = this.$target.closest(".slideBoxWrapper"), this.$slideboxWrapperTitle = this.$slideboxWrapper.find(".slideBoxWrapperTitle"), this.$sliderCloseBtn = this.$slideboxWrapper.find(".modal-mask-closeBtn"), this.HASH = "IZEZVPHcVScdWHe", this.formStep2Str = ".js-pb-change-dates-nr__form-step2", this.formStep2TextareaStr = ".js-pb-change-dates-nr__request-textarea", this.formStep2NewDatesStr = ".js-pb-change-dates-nr__button-new-dates", this.formStep2CharCounterStr = ".js-pb-change-dates-nr__characters-typed", this.requestFinishedStr = ".js-pb-change-dates-nr__request_finished", this.init(), _r_();
}
return r.prototype = {
init:function() {
_i_("619:b337480a"), this.loadHtml(), _r_();
},
loadHtml:function() {
_i_("619:856bc3ec");
var e = this;
this.scope.callbacks.loadByAjax.call(this.scope, this.target, this.button), this.$target.on("slideBox.loadCompleted", e.bindEventsStep1.bind(e)), _r_();
},
bindEventsStep1:function() {
_i_("619:7fd1b0da"), this.triggerCalendars(), this.repositionLightbox(), _r_();
},
triggerCalendars:function() {
_i_("619:0fa6b26d");
var e = this.$target.find(".js--sb-dates"), t = e.find(".--checkin-field").find("[data-sb-id]"), i = e.find(".--checkout-field").find("[data-sb-id]");
this.$target.loadComponents(), n.initCalendars(t, i), _r_();
},
submitStep:function(e) {
_i_("619:59bd63b8");
var t = this, i = e.serialize(), n = e.attr("action");
this.preloaderButton(e), $.ajax({
url:n,
data:i,
method:"POST",
dataType:"html",
success:function(e) {
_i_("619:4a56245e"), t.loadContent(e), _r_();
}
}), _r_();
},
repositionLightbox:function() {
_i_("619:da8afd0b"), this.windowHeight = $(window).height(), this.sliderHeight = this.$slideboxWrapper.outerHeight(), this.newMarginTop = -(this.sliderHeight / 2), this.$slideboxWrapper.css({
marginTop:this.newMarginTop + "px"
}), _r_();
},
preloaderButton:function(e, t) {
_i_("619:c14fe3d9"), t ? e.find(t).addClass("submitting") :e.find('input[type="submit"]').addClass("submitting"), _r_();
},
loadContent:function(e) {
_i_("619:d23b1f4d");
var t = this, i = $(e).attr("data-callback"), n = $(e).attr("data-unavailable");
t.$content.html(e), i && t[i](n), _r_();
},
_bindEventsStep2:function(e) {
_i_("619:43fd5a20");
var t = this, i = B.jstmpl.translations("pb_ss_mb_cd_lb_header");
this.$formStep2 = this.$target.find(this.formStep2Str), this.$reasonTextarea = this.$formStep2.find(this.formStep2TextareaStr), this.$newDatesButton = this.$formStep2.find(this.formStep2NewDatesStr), this.changeLightboxTitle(i), this.repositionLightbox(), this.characterCount(this.$reasonTextarea), this.$newDatesButton.on("click", t.selectNewDates.bind(t, t.$formStep2, t.$newDatesButton)), e && B.et.customGoal(this.HASH, 3), _r_();
},
changeLightboxTitle:function(e) {
_i_("619:e25a0fca"), this.$slideboxWrapperTitle.html(e), _r_();
},
selectNewDates:function(e, t) {
_i_("619:bb377996"), this.$doInput = e.find('input[name="do"]'), this.$doInput.val("main_change_dates_request");
var i = this, n = e.attr("action") + "?" + e.serialize();
this.preloaderButton(e, t), $.ajax({
url:n,
method:"POST",
dataType:"html",
success:function(e) {
_i_("619:f1c13f7b"), i.loadContent(e), i.bindEventsStep1(), _r_();
}
}), _r_();
},
characterCount:function(e) {
_i_("619:33e2071c");
var t = this;
this.$characterCounter = this.$target.find(this.formStep2CharCounterStr), e.on("keypress", function() {
_i_("619:77d5ae3c");
var e = $(this), t = e.val().length;
if (t >= 250) return _r_(!1);
_r_();
}), e.on("keyup", function() {
_i_("619:3c6576c0");
var i = e.val().length;
t.$characterCounter.html(i), _r_();
}), _r_();
},
_bindEventsStep3:function(e) {
_i_("619:a69b62d0");
var t = B.jstmpl.translations("pb_ss_mb_cd_lb_sent_header");
this.$closeBtn = this.$target.find(this.requestFinishedStr), this.changeLightboxTitle(t), this.repositionLightbox(), this.$closeBtn.on("click", function() {
_i_("619:5cf9982b"), location.reload(), _r_();
}), this.$sliderCloseBtn.on("click:change_dates_nr", function() {
_i_("619:5cf9982b1"), location.reload(), _r_();
}), B.et.customGoal(this.HASH, 2), _r_();
}
}, _r_(r);
}), B.when({
action:"myreservations",
experiment:"IZEZVZfZZbeQeWPMbQGWUC"
}).run(function(e) {
_i_("619:c27ef59f");
var t = e("jquery"), i = t(".js-payments-questions__button"), n = t(".js-payments-questions__textarea"), r = t(".js-payments-questions__feedback--success"), a = t(".js-payments-questions__feedback--error"), s = t(".js-payments-questions__textarea-callback"), o = t(".js-payments-questions__block"), _ = t(".js-payments-questions__button-wrapper");
i.on("click", function() {
_i_("619:21293f12"), s.hide();
var e = n.val();
e && B.env.myBookingData.reservation.bn ? (c(), d(e)) :e || s.show(), _r_();
});
function c() {
_i_("619:f72def83"), i.addClass("loading"), i.attr("disabled", "disabled"), n.attr("disabled", "disabled"), _r_();
}
function l() {
_i_("619:67c9d668"), i.removeClass("loading"), i.removeAttr("disabled"), n.removeAttr("disabled"), _r_();
}
function d(t) {
_i_("619:f515f7ff"), s.hide(), e("fragment").call("mybooking.new_guest_request", {
hres_id:B.env.myBookingData.reservation.bn,
msg:t,
is_payment_question:1
}).then(function(e) {
_i_("619:48176b8f"), e ? u() :f(), _r_();
}, function(e) {
_i_("619:ace440cd"), f(), _r_();
}), _r_();
}
function u() {
_i_("619:33e4f8dd"), l(), h(), r.show(), B.et.customGoal("IZEZVZfZZbeQeWPMbQGWUC", 1), _r_();
}
function h() {
_i_("619:2ba2a4c6"), o.hide(), _.hide(), _r_();
}
function f(e) {
_i_("619:1f1defd5"), l(), a.show(), _r_();
}
_r_();
}), B.define("component/profile/profile-completeness-card", function(e, t, i) {
_i_("619:9c52d215");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("619:60a53701");
var e = parseInt(this.$el.data("completenessPercentage"), 10);
this.$el.width(e + "%"), _r_();
}
}), _r_();
}), B.when({
action:"mydashboard",
events:"ready"
}).run(function(e) {
_i_("619:e9646443");
var t = "js-exp-copy_bb_tpurpose_user_account_tooltip", i = "ZOICQEeUdcCGZMJeHcOTQcCcEO", n = e("jquery"), r = booking.et;
booking.eventEmitter.on("tooltip.show", function a(e, s) {
if (_i_("619:5a682e83"), 0 == n(s).hasClass(t)) return _r_();
r.stage(i, 1), booking.eventEmitter.off("tooltip.show", a), _r_();
}), _r_();
}), B.define("component/profile/email-confirm-banner", function(e, t, i) {
_i_("619:5b7b0023");
var n = e("component"), r = e("mysettings/mysettings-transport"), a = e("static-notification");
i.exports = n.extend({
init:function() {
_i_("619:2ba7c0aa"), this.$el.find(".email-confirm-banner__button").click(this.resendButtonClick.bind(this)), this.emailTextBox = this.$el.find(".email-confirm-banner__email-text"), this.emailAddress = this.emailTextBox.val(), _r_();
},
resendButtonClick:function() {
if (_i_("619:45e608c9"), this.sending) return _r_();
this.sending = !0, this.emailTextBox.prop("disabled", !0);
var e, t = this.emailTextBox.val(), i = !1;
t && t !== this.emailAddress ? (e = r.send({
email:[ {
op:"email_u",
email:this.emailAddress,
new_email:t
} ]
}), i = !0) :e = r.resendVerificationEmail({
email:this.emailAddress
}), e.then(this.emailSent.bind(this, i), this.emailFailedToSend.bind(this)), this.$el.find(".email-confirm-banner__button .email-confirm-banner__button-text").toggle(), this.$el.find(".email-confirm-banner__email-progress").addClass("email-confirm-banner__email-progress--running"), _r_();
},
emailSent:function(e) {
_i_("619:9f3972f9");
var t = {
"gmail.com":"gmail.com",
"hotmail.com":"hotmail.com",
"yahoo.com":"mail.yahoo.com"
};
this.sending = !1;
var i = this.emailTextBox.val(), n = i.replace(/.*@/, ""), r = t[n];
if (r) {
var a = '<a href="https://' + r + '" target="_blank">' + n + "</a>", s = e ? "ugc_transactional_email_changed_address_with_link" :"ugc_trabsalctional_email_verification_with_link", o = B.jstmpl.translations(s, null, {
email:i,
link:a
});
this.$el.find(".email-confirm-banner__resend-done-block-text").html(o);
} else this.$el.find(".email-confirm-banner__resend-done-block-text").html(B.jstmpl.translations(e ? "ugc_transactional_email_changed_address_no_link" :"ugc_trabsalctional_email_verification_no_link", null, {
email:i
}));
this.$el.find(".email-confirm-banner__resend-block").hide(), this.$el.find(".email-confirm-banner__resend-done-block").fadeIn(), _r_();
},
emailFailedToSend:function() {
_i_("619:923a6c28"), this.sending = !1, this.emailTextBox.prop("disabled", !1), this.$el.find(".email-confirm-banner__button .email-confirm-banner__button-text").toggle(), this.$el.find(".email-confirm-banner__email-progress").removeClass("email-confirm-banner__email-progress--running"), a.error(B.jstmpl.translations("ugc_transactional_email_send_again")), _r_();
}
}), _r_();
}), function(e, t) {
"use strict";
_i_("619:6b34c64a");
var i = !1, n = "#mb-badge-", r = "myreservations";
function a(t) {
_i_("619:14d7ab2c");
var i = e(this), n = i.data();
if (!(n.bn || n.pin || n["travel-purpose"] || n.travelPurpose)) return _r_();
t.stopPropagation(), t.preventDefault(), s(i), c(n, i), _r_();
}
function s(e) {
_i_("619:2f1125d8");
var t = e.parents(".mark-booking__container");
t.addClass("mark-booking__container--saving").removeClass("mark-booking__container--open"), i = !1, _r_();
}
function o(e) {
_i_("619:6549f0c4");
var t = e.parents(".mark-booking__container");
t.removeClass("mark-booking__container--saving"), _r_();
}
function _(e) {
if (_i_("619:1f9eaa90"), !(e.bn || e.pin || e["travel-purpose"] || e.travelPurpose)) return _r_();
var t = {};
return t.bn = e.bn + "", t.pin = e.pin + "", t.travel_purpose = e["travel-purpose"] || e.travelPurpose, _r_(t);
}
function c(t, i) {
_i_("619:c45ec52b"), e.ajax({
url:"/update_reservation_travel_purpose?aid=" + encodeURIComponent(B.env.b_aid) + "&stype=" + encodeURIComponent(B.env.b_site_type_id) + "&lang=" + encodeURIComponent(B.env.b_lang_for_url),
dataType:"json",
type:"post",
data:_(t),
success:function(e) {
_i_("619:81258c1c"), e.success && 0 !== e.success ? (l(!1), o(i), d(t, i)) :e.reauthenticate ? location.reload() :(l(!0), o(i)), _r_();
},
error:function() {
_i_("619:88f20371"), l(!0), o(i), _r_();
}
}), _r_();
}
function l(e) {
_i_("619:4d65a2b6"), "undefined" == typeof e || e === !1 ? B.require("static-notification").success(B.jstmpl.translations("bb_business_or_leasure_success_notification")) :B.require("static-notification").error(B.jstmpl.translations("settings_page_error_message")), _r_();
}
function d(t, i) {
if (_i_("619:1e589ef3"), "undefined" == typeof t || "object" != typeof t || t instanceof Array || !t.hasOwnProperty("bn")) return _r_();
var s = n + t.bn, o = i.parents(".mark-booking__container");
if (!t.hasOwnProperty("travel-purpose") && !t.hasOwnProperty("travelPurpose") || t.hasOwnProperty("bn") && ("leisure" === t["travel-purpose"] || "leisure" === t.travelPurpose)) e(s).html(""), e(o).removeClass("mark-booking__container--has-menu").html(B.jstmpl(r + "_leisure_booking").render({
cta_text:B.jstmpl.translations("bb_business_or_leasure_cta_bt"),
extra_classes:t["class"],
booknumber:t.bn + "",
pincode:t.pin + "",
show_icon:t.icon || !1
})).loadComponents().find(".mark-booking__link").bind("click", a); else {
var _ = "_business_trip_badge";
e(s).html(B.jstmpl(r + _).render({
extra_classes:t["class"]
})), e(o).removeClass("mark-booking__container--has-menu").html(B.jstmpl(r + "_business_booking").render({
cta_text:B.jstmpl.translations("bb_business_or_leasure_cta_lt"),
extra_classes:t["class"],
booknumber:t.bn + "",
pincode:t.pin + "",
show_icon:t.icon || !1
})).loadComponents().find(".mark-booking__link").bind("click", a);
}
_r_();
}
B.when({
events:"ready"
}).run(function(t) {
_i_("619:9c3c20dd"), e("html").bind("click", function(t) {
_i_("619:9e1b41e1"), e(".mark-booking__container.mark-booking__container--has-menu").removeClass("mark-booking__container--open"), i = !1, _r_();
}), e(".mark-booking__container.mark-booking__container--has-menu").bind("click", function(t) {
_i_("619:7062771d"), e(".mark-booking__container.mark-booking__container--has-menu").removeClass("mark-booking__container--open"), i = !1, i ? (e(this).removeClass("mark-booking__container--open"), i = !1) :(e(this).addClass("mark-booking__container--open"), i = !0), t.stopPropagation(), t.preventDefault(), _r_();
}), e(".mark-booking__link,.mark-booking__list-link").filter("a[data-action-type]").bind("click", a), _r_();
}), _r_();
}(window.jQuery, window.booking), B.when({
condition:B.env.auth_level > 0,
action:"myreports",
events:"change .js-bb-report-year"
}).run(function(e) {
_i_("619:bedeb89f");
var t = e("querystring"), i = t.parse(window.location.search), n = parseInt($.trim($(".js-bb-report-year").val()), 10);
i.year = n, window.location.search = t.stringify(i), _r_();
}), +function(e) {
"use strict";
_i_("619:adcd1709");
var t = function(i, n) {
_i_("619:5ec17364"), this.options = e.extend({}, t.DEFAULTS, n), this.$target = e(this.options.target).bind("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).bind("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(i), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition(), _r_();
};
t.VERSION = "3.2.0", t.RESET = "affix affix-top affix-bottom", t.DEFAULTS = {
offset:0,
target:window
}, t.prototype.getPinnedOffset = function() {
if (_i_("619:72486761"), this.pinnedOffset) return _r_(this.pinnedOffset);
this.$element.removeClass(t.RESET).addClass("affix");
var e = this.$target.scrollTop(), i = this.$element.offset();
return _r_(this.pinnedOffset = i.top - e);
}, t.prototype.checkPositionWithEventLoop = function() {
_i_("619:ae723b5c"), setTimeout(e.proxy(this.checkPosition, this), 1), _r_();
}, t.prototype.checkPosition = function() {
if (_i_("619:5e321c62"), !this.$element.is(":visible")) return _r_();
var i = e(document).height(), n = this.$target.scrollTop(), r = this.$element.offset(), a = this.options.offset, s = a.top, o = a.bottom;
"object" != typeof a && (o = s = a), "function" == typeof s && (s = a.top(this.$element)), "function" == typeof o && (o = a.bottom(this.$element));
var _ = null != this.unpin && n + this.unpin <= r.top ? !1 :null != o && r.top + this.$element.height() >= i - o + ("bottom" === this.affixed ? -s :s) ? "bottom" :null != s && s >= n ? "top" :!1;
if (this.affixed === _) return _r_();
null != this.unpin && this.$element.css("top", "");
var c = "affix" + (_ ? "-" + _ :""), l = e.Event(c + ".bs.affix");
if (this.$element.trigger(l), l.isDefaultPrevented()) return _r_();
this.affixed = _, this.unpin = "bottom" == _ ? this.getPinnedOffset() :null, this.$element.removeClass(t.RESET).addClass(c).trigger(e.Event(c.replace("affix", "affixed"))), "bottom" == _ && this.$element.offset({
top:i - this.$element.height() - o
}), _r_();
};
function i(i) {
return _i_("619:15fcdfcd"), _r_(this.each(function() {
_i_("619:58095e9d");
var n = e(this), r = n.data("bs.affix"), a = "object" == typeof i && i;
r || n.data("bs.affix", r = new t(this, a)), "string" == typeof i && r[i](), _r_();
}));
}
var n = e.fn.affix;
e.fn.affix = i, e.fn.affix.Constructor = t, e.fn.affix.noConflict = function() {
return _i_("619:64e65759"), e.fn.affix = n, _r_(this);
}, e(window).bind("load", function() {
_i_("619:3bedd8f0"), e('[data-spy="affix"]').each(function() {
_i_("619:85c441e6");
var t = e(this), n = t.data();
n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), i.call(t, n), _r_();
}), _r_();
}), _r_();
}(jQuery), +function(e) {
"use strict";
_i_("619:c8b5f14d");
function t(i, n) {
_i_("619:b95f8947");
var r = e.proxy(this.process, this);
this.$body = e("body"), this.$scrollElement = e(e(i).is("body") ? window :i), this.options = e.extend({}, t.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.bind("scroll.bs.scrollspy", r), this.refresh(), this.process(), _r_();
}
t.VERSION = "3.2.0", t.DEFAULTS = {
offset:10
}, t.prototype.getScrollHeight = function() {
return _i_("619:346b53a6"), _r_(this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight));
}, t.prototype.refresh = function() {
_i_("619:ad7ef99f");
var t = "offset", i = 0;
e.isWindow(this.$scrollElement[0]) || (t = "position", i = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
var n = this;
this.$body.find(this.selector).map(function() {
_i_("619:6c93fbc7");
var n = e(this), r = n.data("target") || n.attr("href"), a = /^#./.test(r) && e(r);
return _r_(a && a.length && a.is(":visible") && [ [ a[t]().top + i, r ] ] || null);
}).sort(function(e, t) {
return _i_("619:0e916ac7"), _r_(e[0] - t[0]);
}).each(function() {
_i_("619:4e7490f3"), n.offsets.push(this[0]), n.targets.push(this[1]), _r_();
}), _r_();
}, t.prototype.process = function() {
_i_("619:9a6fcab5");
var e, t = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(), n = this.options.offset + i - this.$scrollElement.height(), r = this.offsets, a = this.targets, s = this.activeTarget;
if (this.scrollHeight != i && this.refresh(), t >= n) return _r_(s != (e = a[a.length - 1]) && this.activate(e));
if (s && t <= r[0]) return _r_(s != (e = a[0]) && this.activate(e));
for (e = r.length; e--; ) s != a[e] && t >= r[e] && (!r[e + 1] || t <= r[e + 1]) && this.activate(a[e]);
_r_();
}, t.prototype.activate = function(t) {
_i_("619:f2e2c974"), this.activeTarget = t, e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
var i = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', n = e(i).parents("li").addClass("active");
n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy"), _r_();
};
function i(i) {
return _i_("619:8163c4e1"), _r_(this.each(function() {
_i_("619:085e9220");
var n = e(this), r = n.data("bs.scrollspy"), a = "object" == typeof i && i;
r || n.data("bs.scrollspy", r = new t(this, a)), "string" == typeof i && r[i](), _r_();
}));
}
var n = e.fn.scrollspy;
e.fn.scrollspy = i, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
return _i_("619:cc07f1f4"), e.fn.scrollspy = n, _r_(this);
}, e(window).bind("load.bs.scrollspy.data-api", function() {
_i_("619:8a72324d"), e('[data-spy="scroll"]').each(function() {
_i_("619:9db66236");
var t = e(this);
i.call(t, t.data()), _r_();
}), _r_();
}), _r_();
}(jQuery), B.define("component/clipboard", function(e, t, i) {
_i_("619:c9a1081a");
var n = e("component"), r = e("read-data-options"), a = e("events");
i.exports = n.extend({
init:function() {
_i_("619:ca791c85"), this.optionsSpec = this.optionsSpec || {}, this.optionsSpec = $.extend(this.optionsSpec, {
text:{
name:"text",
type:String
}
}), this.options = r(this.$el, this.optionsSpec), this.$el.on("click", ".js-copy", this.copyText.bind(this, this.options.text)), _r_();
},
copyText:function(e) {
_i_("619:52f52524");
var t = B.env.b_lang_rtl, i = document.createElement("textarea");
i.style.fontSize = "12pt", i.style.border = "0", i.style.padding = "0", i.style.margin = "0", i.style.position = "fixed", i.style[t ? "right" :"left"] = "-9999px", i.style.top = (window.pageYOffset || document.documentElement.scrollTop) + "px", i.setAttribute("readonly", ""), i.value = this.options.text, document.body.appendChild(i), $(i).select(), i.setSelectionRange && i.setSelectionRange(0, 9999), this.execCopyText(), $(i).remove(), _r_();
},
execCopyText:function() {
_i_("619:f2f2802c");
var e;
try {
e = document.execCommand("copy");
} catch (t) {
e = !1;
}
this.handleResult(e), _r_();
},
handleResult:function(e) {
_i_("619:b53c3a09"), this.$el.toggleClass("-success", e), this.$el.toggleClass("-error", !e), a.emit("CLIPBOARD.copy_" + (e ? "success" :"error")), _r_();
}
}), _r_();
}), B.define("component/bbg-pending-bbtool-invite-modal", function(e, t, i) {
_i_("619:54d7677f");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("619:9acfee77"), B.lightbox.show(".bbg-pending-bbtool-invite", {
customWrapperClassName:"bbg-pending-bbtool-invite-modal"
}, function() {
_i_("619:b7193511"), $(".bbg-pending-bbtool-invite-modal").on("click", ".bbg-pending-bbtool-invite__hide", function() {
_i_("619:00be7170"), B.lightbox.hide(), _r_();
}), _r_();
}), _r_();
}
}), _r_();
}), B.define("component/bbg_show_popup_for_invited_booker", function(e, t, i) {
_i_("619:14ca73a8");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("619:34ecce4a"), this.$el.on("click", ".bba-uncommon-email__button--traveler", function(e) {
_i_("619:785c5956");
var t = B.lightbox.show(".bba-uncommon-email__modal", {
customWrapperClassName:"bbg-uncommon-email-invite-tm-modal-wrapper"
}, function() {
_i_("619:85c0409e"), $(".bbg-uncommon-email-invite-tm-modal").on("click", ".bbg-uncommon-email-invite-tm-modal__hide", function() {
_i_("619:75ea9b63"), B.lightbox.hide(), _r_();
}), _r_();
});
B.et.initAttributesTracking(t), e.preventDefault(), _r_();
}.bind(this)), _r_();
}
}), _r_();
}), function() {
_i_("619:deb10421"), B.define("ugc/star-rating/model", function(e, t, i) {
_i_("619:93e7ce92");
var n = e("event-emitter"), r = {};
function a(e) {
_i_("619:a6fae5db"), n.extend(this), this.id = e, this.star = 0, _r_();
}
$.extend(a.prototype, {
getStar:function() {
return _i_("619:71efbafd"), _r_(this.star);
},
setStar:function(e) {
_i_("619:cb642b93"), this.star = e, this.emit("change", {
index:e
}), _r_();
},
reset:function() {
_i_("619:4eb3bb01"), this.setStar(0), _r_();
}
}), i.exports = {
getInstance:function(e) {
return _i_("619:a1ab4eca"), r[e] || (r[e] = new a(e)), _r_(r[e]);
}
}, _r_();
}), _r_();
}(), B.define("component/ugc/star-rating", function(e, t, i) {
_i_("619:5455941d");
var n = e("component"), r = {
full_star:"is-full-star",
selected_star:"is-selected"
}, a = ".c-star-rating-star", s = [ "ugc_new_entry_1staradj", "ugc_new_entry_2staradj", "ugc_new_entry_3staradj", "ugc_new_entry_4staradj", "ugc_new_entry_5staradj" ], o = e("ugc/star-rating/model");
i.exports = n.extend({
init:function() {
_i_("619:372c3ec6"), this.$starElements = this.$el.find(a), this.$starRadioButtons = this.$el.find("input:radio"), this.$label = this.$el.find("[data-label]"), this.rateUfi = this.$el.attr("data-ufi") || "", this.model = o.getInstance(this.rateUfi), this.displayLabel = this.$label.length > 0, this._attachEvents(), _r_();
},
_getStar:function() {
return _i_("619:8b3e40f3"), _r_(this.model.getStar());
},
_setStar:function(e) {
_i_("619:1aff4c37"), this.model.setStar(e), _r_();
},
_attachEvents:function() {
if (_i_("619:1ba1f77e"), this.$starElements.mouseenter(this._onStarMouseEnter.bind(this)), this.$starElements.mouseleave(this._onStarMouseLeave.bind(this)), this.$starElements.click(this._onStarClick.bind(this)), this.$starRadioButtons.is(":checked") && 0 === this._getStar()) {
var e = this.$starRadioButtons.filter(":checked").val();
this._setStar(parseInt(e, 10));
}
this.model.on("change", this._onStarsChange.bind(this)), _r_();
},
_onStarsChange:function() {
_i_("619:f5b81b27");
var e = this._getStar();
if (0 === e) return this._clearLabel(), _r_();
var t = this.$el.find(a).eq(e - 1);
this._highlightStarsUpTo(t[0]), t.find("input:checked").length || t.find("input").prop("checked", !0), _r_();
},
_onStarMouseEnter:function(e) {
_i_("619:11e9af4c"), this._highlightStarsUpTo(e.target), this.displayLabel && this._updateLabel(e.target), _r_();
},
_onStarMouseLeave:function() {
_i_("619:3af81c29"), this._updateHighlightedStars(), _r_();
},
_getSelectedStar:function() {
_i_("619:293b804d");
var e = this.$el.find("input:checked");
return _r_(e.length ? e.parent(a) :[]);
},
_highlightStarsUpTo:function(e) {
_i_("619:9824af0e"), this.$el.find(a).removeClass(r.full_star), $(e).addClass(r.full_star).prevAll().addClass(r.full_star), this.displayLabel && this._updateLabel(e), _r_();
},
_onStarClick:function(e) {
_i_("619:94d7c226");
var t = $(e.target), i = t.attr("data-i");
this._setStar(parseInt(i, 10)), ("locationreview" === B.env.b_action || "multiplelocationreviews" === B.env.b_action) && t.addClass(r.selected_star).siblings().removeClass(r.selected_star), e.preventDefault(), _r_();
},
_updateHighlightedStars:function() {
_i_("619:18a9566e");
var e = this._getSelectedStar();
e.length ? this._highlightStarsUpTo(e) :this._clearLabel(), _r_();
},
_updateLabel:function(e) {
_i_("619:ab3eb383");
var t = $(e).find("input").val(), i = s[parseInt(t, 10) - 1], n = B.jstmpl.translations(i);
this.$label.html(n), _r_();
},
_clearLabel:function() {
_i_("619:d695b83d"), this.$el.find(a).removeClass(r.full_star), this.$el.find("input:checked").prop("checked", !1), this.displayLabel && this.$label.html(""), _r_();
}
}), _r_();
}), function() {
_i_("619:ab36053a"), B.define("ugc/star-rating/model", function(e, t, i) {
_i_("619:93e7ce921");
var n = e("event-emitter"), r = {};
function a(e) {
_i_("619:a6fae5db1"), n.extend(this), this.id = e, this.star = 0, _r_();
}
$.extend(a.prototype, {
getStar:function() {
return _i_("619:71efbafd1"), _r_(this.star);
},
setStar:function(e) {
_i_("619:cb642b931"), this.star = e, this.emit("change", {
index:e
}), _r_();
},
reset:function() {
_i_("619:4eb3bb011"), this.setStar(0), _r_();
}
}), i.exports = {
getInstance:function(e) {
return _i_("619:a1ab4eca1"), r[e] || (r[e] = new a(e)), _r_(r[e]);
}
}, _r_();
}), _r_();
}(), B.define("component/ugc/smiley-faces", function(e, t, i) {
_i_("619:6d00dd4c");
var n = e("component"), r = e("ugc/star-rating/model"), a = "is-selected", s = [ "ugc_new_entry_1staradj", "ugc_new_entry_2staradj", "ugc_new_entry_3staradj", "ugc_new_entry_4staradj", "ugc_new_entry_5staradj" ];
i.exports = n.extend({
init:function() {
_i_("619:810502c1");
var e = this.$el.attr("data-ufi") || this.$el.attr("data-id");
if ("undefined" == typeof e) throw new Error("component/ugc/smiley-faces: `data-ufi` is invalid!");
this.$smileys = this.$el.find("[data-rating], .c-star-rating-star"), this.$radioInputs = this.$el.find("input:radio"), this.$label = this.$el.find("[data-label]"), this.model = r.getInstance(e), this._attachEvents(), _r_();
},
_getRating:function() {
return _i_("619:8b3e40f31"), _r_(this.model.getStar());
},
_setRating:function(e) {
_i_("619:1aff4c371"), this.model.setStar(e), _r_();
},
_attachEvents:function() {
if (_i_("619:5a489c69"), this.$smileys.on("mouseenter", this._onSmileyMouseEnter.bind(this)), this.$smileys.on("click", this._onSmileyClick.bind(this)), this.$radioInputs.is(":checked") && 0 === this._getRating()) {
var e = this.$radioInputs.filter(":checked").val();
this._setRating(parseInt(e, 10));
}
this.model.on("change", this._onRatingChange.bind(this)), _r_();
},
_onRatingChange:function() {
_i_("619:27cd10ca");
var e, t = this._getRating();
if (0 === t) return this._clearRating(), _r_();
e = this.$smileys.eq(t - 1), e.find("input:checked").length || e.find("input").prop("checked", !0), _r_();
},
_onSmileyClick:function(e) {
_i_("619:258b7989");
var t = $(e.currentTarget), i = t.attr("data-i");
this._setRating(parseInt(i, 10)), t.addClass(a), this.$smileys.removeClass(a), this.$smileys.attr("aria-checked", "false"), t.attr("aria-checked", "true"), e.preventDefault(), _r_();
},
_clearRating:function() {
_i_("619:dc080b86"), this.$smileys.removeClass(a), this.$el.find("input:checked").prop("checked", !1), _r_();
},
_updateLabel:function(e) {
if (_i_("619:725110ec"), !this.$label) return _r_();
var t = $(e).find("input").val(), i = s[parseInt(t, 10) - 1], n = B.jstmpl.translations(i);
this.$label.html(n), _r_();
},
_onSmileyMouseEnter:function(e) {
_i_("619:a862ffd8"), this._updateLabel(e.currentTarget), _r_();
}
}), _r_();
}), B.when({
events:"ready",
condition:"mydashboard" === B.env.b_action && $("#ugc-dashboard-entry-point").length > 0
}).run(function(e) {
_i_("619:d20f396c");
var t = e("jquery");
function i(e, t, i, n) {
_i_("619:6d95f03e"), this.ratingModel = e.getInstance(t), this.ufi = t, this.reservationId = i, this.id = n, this.ratingModel.on("change", this.onStarRatingChange.bind(this)), _r_();
}
i.prototype.onStarRatingChange = function(e) {
_i_("619:f084830f");
var t = {
ufi:this.ufi,
rating:e.index,
source:"dashboard",
action_name:B.env.b_action,
hotelreservation_id:this.reservationId,
destinationreview_type:"location",
blacklisted:0,
should_highlight:0,
aid:B.env.b_aid,
lang:B.env.b_lang_for_url,
sid:B.env.b_sid,
stype:B.env.b_site_type_id
};
this.id.length > 0 && (t.id = this.id), this.saveRating(t).done(function(e) {}).fail(function(e, t, i) {
_i_("619:5f5f3046"), console.log(":: dsfreviewstarrating error: ", t, i), _r_();
}), _r_();
}, i.prototype.saveRating = function(e) {
return _i_("619:835b0646"), _r_(t.ajax({
type:"POST",
url:"/dsfreviewstarrating",
data:e,
dataType:"json"
}));
};
function n() {
_i_("619:8b821636");
var n = e("ugc/star-rating/model"), r = t("#ugc-dashboard-entry-point"), a = r.attr("data-id");
r.find("[data-destination-review]").each(function() {
_i_("619:1133de1d");
var e = t(this), r = e.find('[data-component="ugc/star-rating"]'), s = r.attr("data-ufi"), o = e.attr("data-destination-review");
s && new i(n, s, o, a), _r_();
}), _r_();
}
n(), _r_();
}), B.define("component/xsell/rentalcars-mybooking-widget", [ "component" ], function(e) {
return _i_("619:4b3f3b08"), _r_(e.extend({
init:function() {
_i_("619:f79c3e05");
var e = document.createElement("iframe");
e.src = this.$el.data("iframeSrc") || this.$el.data("iframe-src"), e.height = this.$el.data("iframeHeight") || this.$el.data("iframe-height") || "453", e.width = "100%", e.frameBorder = 0, this.$el.append(e), _r_();
}
}));
}), B.define("utils/throttled", function(e, t, i) {
_i_("619:c05117b8"), i.exports = function(e, t) {
_i_("619:6684d35e");
var i, n = 0;
function r() {
_i_("619:f991b93f");
for (var a = this, s = new Array(arguments.length), o = 0, _ = arguments.length; _ > o; o++) s[o] = arguments[o];
var c = +new Date();
if (n && clearTimeout(n), t > c - i) return n = setTimeout(function() {
_i_("619:74556d05"), r.apply(a, s), _r_();
}, t), _r_();
i = c, setTimeout(function() {
_i_("619:68a22e39"), e.apply(a, s), _r_();
}), _r_();
}
return _r_(r);
}, _r_();
}), B.define("component/messages-cta", function(e, t, i) {
_i_("619:3dbb5c8d");
var n = e("component"), r = e("messages/loader");
i.exports = n.extend({
init:function() {
_i_("619:36b5b544");
var e, t = this.$el.data("messages-bn"), i = this.$el.data("messages-pincode"), n = Boolean(this.$el.data("messages-auto-open"));
if (!t || !i) throw new Error("Tried to load Messages without `bn` or `pincode`");
e = new r({
bn:t,
pincode:i
});
var a = this.$el.data("entrypoint-name");
this.$el.on("click", function(t) {
_i_("619:291ef9f4"), t.preventDefault(), t.stopPropagation();
var i = $(this).data("messages-type");
e.show(i, a), _r_();
}), (n || "messages" == window.location.hash.substr(1) || "request" == window.location.hash.substr(1)) && e.show(), _r_();
}
}), _r_();
}), B.define("messages/loader", function(e, t, i) {
_i_("619:ed212356");
var n = -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome"), r = -1 != navigator.userAgent.indexOf("iPad"), a = e("lightbox"), s = e("utils/throttled"), o = $(window);
function _(e) {
_i_("619:146e9434"), this.env = e, this.iframe = $("<iframe>", {
frameborder:0,
framespacing:0,
id:"messages-iframe"
}), this.resize(), this.updateURL(), o.on("resize", s(this.resize.bind(this), 50)), this.iframe.hide(), this.attached = !1, _r_();
}
_.prototype = {
constructor:_,
show:function(e, t) {
_i_("619:69ae99a7"), this.attached || (this.iframe.appendTo("body"), this.attached = !0), this.updateURL(e, t), a.show(this.iframe, {
autoWidth:!0,
customWrapperClassName:"messaging_overlay",
position:n && r ? "absolute" :"fixed"
}), _r_();
},
hide:function() {
_i_("619:fe937695"), a.close(), _r_();
},
resize:function() {
_i_("619:81f3506a"), this.iframe.css({
width:o.width() - 100,
height:o.height() - 100
}), a.rePosition(), _r_();
},
updateURL:function(e, t) {
_i_("619:df388878");
var i;
if (this.env.b_messenger_url) i = this.env.b_messenger_url; else {
i = "/messages.html?bn=" + this.env.bn + ";pincode=" + this.env.pincode, B.env.b_lang_for_url && (i += ";lang=" + B.env.b_lang_for_url);
var n = B.env.b_aid || B.env.aid;
n && (i += ";aid=" + n), B.env.b_label && (i += ";label=" + B.env.b_label), t && (i += ";entrypoint=" + encodeURIComponent(t)), e && (i += "#" + e);
}
this.iframe.attr("src", i), _r_();
}
};
var c = {};
i.exports = function(e) {
if (_i_("619:0fb13fcf"), !(e.bn && e.pincode || e.b_messenger_url)) throw new Error("Failed to load Messages. No `bn` and `pincode` or `b_messenger_url` provided.");
var t = e.bn || e.b_messenger_url;
return c[t] || (c[t] = new _(e)), _r_(c[t]);
}, _r_();
}), B.when({
events:"ready"
}).require([ "messages/loader" ], function(e) {
if (_i_("619:436c46ec"), B && B.env && B.env.b_messenger_url && B.env.b_open_messenger) {
var t = new e({
b_messenger_url:B.env.b_messenger_url
});
t.show();
}
_r_();
}), B.define("referral/raf-goal", function(e, t, i) {
_i_("619:3c8136dd");
var n = e("et"), r = {}, a = [];
i.exports = {
shareGoal:function(e) {
_i_("619:dc8ab684"), n.goal(e), n.goal("gm_share"), this._trackShareBehavior(e), _r_();
},
_trackShareBehavior:function(e) {
if (_i_("619:9e90e945"), "www" === B.env.b_site_type && "myreferrals" === B.env.b_action) try {
this._storeShareGoal(e);
var t = this._setDifferentBtnStages(e, a);
n.track("PGVfCNETFFbDfTDPdDcTYFPMbPYHXT"), Object.keys(r).filter(function(e) {
if (_i_("619:2d399850"), 1 === r[e]) return _r_(e);
_r_();
}).length > 0 && n.stage("PGVfCNETFFbDfTDPdDcTYFPMbPYHXT", 1), Object.keys(r).filter(function(e) {
if (_i_("619:80399ead"), 2 === r[e]) return _r_(e);
_r_();
}).length > 0 && n.stage("PGVfCNETFFbDfTDPdDcTYFPMbPYHXT", 2), Object.keys(r).filter(function(e) {
if (_i_("619:3a33cba5"), 3 === r[e]) return _r_(e);
_r_();
}).length > 0 && n.stage("PGVfCNETFFbDfTDPdDcTYFPMbPYHXT", 3), Object.keys(r).filter(function(e) {
if (_i_("619:5ad29dbb"), r[e] >= 4) return _r_(e);
_r_();
}).length > 0 && n.stage("PGVfCNETFFbDfTDPdDcTYFPMbPYHXT", 4), null != t && (n.track("PGVfCNETRSRWCQWBTAUTAFTfeJZVPTODXKe"), n.stage("PGVfCNETRSRWCQWBTAUTAFTfeJZVPTODXKe", t));
} catch (i) {}
_r_();
},
_storeShareGoal:function(e) {
if (_i_("619:e5d687c2"), Object.keys(r).indexOf(e) > -1) r[e] = r[e] + 1; else {
var t = {};
t[e] = 1, r = $.extend({}, t, r);
}
return _r_();
},
_setDifferentBtnStages:function(e, t) {
return _i_("619:a91aefb8"), t.indexOf(e) >= 0 ? _r_(null) :(t.push(e), _r_(t.length > 4 ? 4 :t.length));
}
}, _r_();
}), B.define("referral/rap-goal", function(e, t, i) {
_i_("619:cb4f717b");
var n = e("et");
i.exports = {
shareGoal:function(e) {
_i_("619:2cd92b4e"), n.goal("grap_share"), _r_();
}
}, _r_();
}), B.define("component/referral/share", function(e, t, i) {
_i_("619:2ca2dedf");
var n = e("ga-tracker"), r = e("tooltip"), a = e("referral/clipboard"), s = e("referral/raf-goal"), o = e("referral/rap-goal"), _ = e("et");
function c(e) {
_i_("619:73af4510"), e && e.hide && e.hide(), _r_();
}
i.exports = e("component").extend({
init:function() {
_i_("619:6acf9832");
var e = this, t = this.$el.data("share-link"), i = this.$el.data("tooltip-id") || "clipboard-tooltip", l = this.$el.is("[data-is-partner-program]");
this.$emailShare = this.$el.find(".js-raf-share-email"), this.$emailShare.on("click", function(e) {
_i_("619:2ca71eaf"), l ? (n.trackEvent(n.referralPartnerAdvocateTracker, "share - source: " + B.env.b_action, "click email mobile button"), o.shareGoal("share_email")) :(s.shareGoal("gm_share_email"), n.trackEvent(n.referralAdvocateTracker, "share - source: " + B.env.b_action, "click email button")), _r_();
}), this.$fbShare = this.$el.find(".js-raf-share-facebook"), this.$fbShare.on("click", function(t) {
_i_("619:5c5192f1"), t.preventDefault(), e.showPopupWindow($(this).attr("href"), "Share", 480, 320), l ? (n.trackEvent(n.referralPartnerAdvocateTracker, "share - source: " + B.env.b_action, "click facebook button"), o.shareGoal("share_facebook")) :(s.shareGoal("gm_share_facebook"), n.trackEvent(n.referralAdvocateTracker, "share - source: " + B.env.b_action, "click facebook button")), _r_();
}), this.$twShare = this.$el.find(".js-raf-share-twitter"), this.$twShare.on("click", function(t) {
_i_("619:2ea0cfab"), t.preventDefault(), l ? (o.shareGoal("share_twitter"), n.trackEvent(n.referralPartnerAdvocateTracker, "share - source: " + B.env.b_action, "click twitter button")) :(s.shareGoal("gm_share_twitter"), n.trackEvent(n.referralAdvocateTracker, "share - source: " + B.env.b_action, "click twitter button")), e.showPopupWindow($(this).attr("href"), "Share", 480, 320), _r_();
}), this.$el.find(".raf-scoreboard--link").on("click", function(t) {
_i_("619:6f14df94");
var i = $(this).val();
a.copy(i, function(i) {
if (_i_("619:b71a200b"), i) return _r_(!1);
l ? o.shareGoal("share_copy") :s.shareGoal("gm_share_copy"), e.$urlShare.text(e.$urlShare.data("success-copy")), t.target.select(), _r_();
}), _r_();
}), this.$el.find(".raf-scoreboard--link").on("copy", function() {
_i_("619:5b888ba3"), n.trackEvent(n.referralAdvocateTracker, "copy link", "myreferrals"), _r_();
}), this.$urlShare = this.$el.find(".js-raf-share-copy"), this.$urlShare.on("click", function(t) {
_i_("619:ff5ef747");
var _ = e.$urlShare.data("share-link"), d = r.get(i);
t.preventDefault(), a.copy(_, function(t) {
if (_i_("619:52054580"), t) return _r_(!1);
l ? o.shareGoal("share_copy") :s.shareGoal("gm_share_copy"), d ? (d.show(), setTimeout(function() {
_i_("619:d5add9e4"), c(d), _r_();
}, 1e3)) :e.$urlShare.text(e.$urlShare.data("success-copy")), _r_();
}), n.trackEvent(n.referralAdvocateTracker, "share - source: " + B.env.b_action, "click url button"), _r_();
}), this.$whatsappShare = this.$el.find(".js-raf-share-whatsapp"), this.$whatsappShare.on("click", function(e) {
_i_("619:7d0aac35"), l ? (n.trackEvent(n.referralPartnerAdvocateTracker, "share - source: " + B.env.b_action, "click whatsapp button"), o.shareGoal("share_whatsapp")) :(s.shareGoal("gm_share_whatsapp"), n.trackEvent(n.referralAdvocateTracker, "share - source: " + B.env.b_action, "click whatsapp button")), _r_();
}), this.$messengerShare = this.$el.find(".raf_scoreboard--social_share_link.-messenger, .js-raf-share-messenger"), this.$messengerShare.on("click", function(e) {
_i_("619:bf64c0f9"), e.preventDefault(), l ? (o.shareGoal("share_messenger"), n.trackEvent(n.referralPartnerAdvocateTracker, "share - source: " + B.env.b_action, "click messenger button")) :(s.shareGoal("gm_share_messenger"), n.trackEvent(n.referralAdvocateTracker, "share - source: " + B.env.b_action, "click messenger button")), "undefined" != typeof FB && "undefined" != typeof FB.ui && (t || (t = $(this).data("share-link")), FB.ui({
method:"send",
link:t
})), _r_();
}), this.$el.on("click", ".raf-share-buttons--button", function(e) {
_i_("619:cc28b2e8"), _.stage("PGVfIFNRUbEWBSMSOONDXKe", 3), _r_();
}), _r_();
},
showPopupWindow:function(e, t, i, n) {
_i_("619:647d3c7d");
var r = window.screen.width / 2 - i / 2, a = window.screen.height / 2 - n / 2;
return _r_(window.open(e, t, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + i + ", height=" + n + ", top=" + a + ", left=" + r));
}
}), _r_();
}), B.define("referral/clipboard", function(e, t, i) {
_i_("619:2b68585d");
function n(e) {
_i_("619:3ab68b84");
var t;
if ("SELECT" === e.nodeName) e.focus(), t = e.value; else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
var i = e.hasAttribute("readonly");
i || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), i || e.removeAttribute("readonly"), t = e.value;
} else {
e.hasAttribute("contenteditable") && e.focus();
var n = window.getSelection(), r = document.createRange();
r.selectNodeContents(e), n.removeAllRanges(), n.addRange(r), t = n.toString();
}
return _r_(t);
}
var r = function() {};
r.prototype.copy = function(e, t) {
_i_("619:7fe4e409"), this.text = e, this.isRTL = B.env.b_lang_rtl, "function" == typeof t && (this.copyCallback = t), this.selectFake(), _r_();
}, r.prototype.selectFake = function() {
_i_("619:156826d2"), this.removeFake();
var e = document.createElement("textarea");
this.fakeElement = e, e.style.fontSize = "12pt", e.style.border = "0", e.style.padding = "0", e.style.margin = "0", e.style.position = "absolute", e.style[this.isRTL ? "right" :"left"] = "-9999px";
var t = window.pageYOffset || document.documentElement.scrollTop;
e.style.top = t + "px", e.setAttribute("readonly", ""), e.value = this.text, document.body.appendChild(e), n(e), this.copyText(), _r_();
}, r.prototype.removeFake = function() {
_i_("619:89943584"), this.fakeElement && (document.body.removeChild(this.fakeElement), this.fakeElement = null), _r_();
}, r.prototype.copyText = function() {
_i_("619:3b706215");
var e;
try {
e = document.execCommand("copy");
} catch (t) {
e = !1;
}
this.handleResult(e), _r_();
}, r.prototype.handleResult = function(e) {
_i_("619:7e3bde23"), this.copyCallback && (e ? this.copyCallback(null) :this.copyCallback(!0)), this.removeFake(), _r_();
}, i.exports = new r(), _r_();
}), B.define("component/referral/rap-dashboard-tabs", function(e, t, i) {
_i_("619:2bf9c55c");
var n = e("et");
i.exports = e("component").extend({
init:function() {
_i_("619:af480986"), this.$tabsButton = this.$el.find(".js-rap-dashboard-tabs"), this.$tabsButton.find(".js-rap-dashboard-tabs__item").on("click", this.changeTabs.bind(this)), _r_();
},
activateTab:function(e) {
if (_i_("619:366a887d"), !this.$el.find(".js-rap-dashboard-tabs__tab--invite-partner") || !this.$el.find(".js-rap-dashboard-tabs__tab--invite-traveller")) return _r_();
"traveller" === e && (this.$el.find(".js-rap-dashboard-tabs__tab--invite-traveller").removeClass("profile-refer-card--hidden"), this.$el.find(".js-rap-dashboard-tabs__tab--invite-partner").addClass("profile-refer-card--hidden"), this.$tabsButton.find(".js-rap-dashboard-tabs__item--traveller").addClass("profile-refer-card-tabs__tab--active"), this.$tabsButton.find(".js-rap-dashboard-tabs__item--partner").removeClass("profile-refer-card-tabs__tab--active")), "partner" === e && (this.$el.find(".js-rap-dashboard-tabs__tab--invite-partner").removeClass("profile-refer-card--hidden"), this.$el.find(".js-rap-dashboard-tabs__tab--invite-traveller").addClass("profile-refer-card--hidden"), this.$tabsButton.find(".js-rap-dashboard-tabs__item--partner").addClass("profile-refer-card-tabs__tab--active"), this.$tabsButton.find(".js-rap-dashboard-tabs__item--traveller").removeClass("profile-refer-card-tabs__tab--active")), _r_();
},
changeTabs:function(e) {
_i_("619:3b38a9f7");
var t = $(e.currentTarget);
t.is(".js-rap-dashboard-tabs__item--traveller") && this.activateTab("traveller"), t.is(".js-rap-dashboard-tabs__item--partner") && (n.customGoal("dVRAfIEcIUfUYCeHHQJIbeXe", 1), this.activateTab("partner")), _r_();
}
}), _r_();
}), B.when({
events:"ready"
}).run(function() {
_i_("619:e756fb5d"), $(".raf_scoreboard--share_link").on("copy", function() {
_i_("619:2d9a01a3");
var e = B.require("ga-tracker");
e.trackEvent(e.referralAdvocateTracker, "share - source: " + B.env.b_action, "manually copy url"), _r_();
}), _r_();
}), function() {
"use strict";
_i_("619:5f5b6be0");
var e = B.require("jquery"), t = !1, i = {
init:function() {
_i_("619:fc9b0721"), e("body").on("click", ".slideBoxOverlay, .myBookingButtonRow input, button.modal-mask-closeBtn", function(i) {
if (_i_("619:5d32e696"), !t) {
for (e(i.target).attr("name") && "change_ok" == e(i.target).attr("name") ? (e(i.target).addClass("submitting"), e("head").append("<style>#bf_only {display:block !important;}#bf_add_only {display:none !important;}</style>")) :e("head").append("<style>#bf_only {display:block !important;}#bf_add_only {display:none !important;}.meal_start1 {display:block !important;}.meal_start2 {display:none !important;}</style>"); e("#bf_add_only").length; ) e("#bf_add_only").remove();
t = !0;
}
_r_();
}), _r_();
}
};
B.when({
events:"ready"
}).run(function(e) {
_i_("619:6ad14e6c"), i.init(), _r_();
}), _r_();
}(), B.when({
events:"ready",
action:[ "myreservations" ],
condition:B.env.b_user_auth_level == B.env.auth_level_high
}).run(function(e) {
_i_("619:8a84885f");
var t = B.require("jquery"), i = t(".js-overlapping-bookings");
if (!i.length) return _r_(!1);
function n() {
_i_("619:6ea2b7bc"), i.find(".js-reservations-button").on("click", function(e) {
_i_("619:0e832c2c"), e.preventDefault();
var t = "overlapping-is-active", n = i.hasClass(t);
n ? i.removeClass(t) :i.addClass(t), _r_();
}), i.find("[href]").on("click", function(e) {}), _r_();
}
function r(e) {
if (_i_("619:05574de3"), !e) return _r_(!1);
var t = e.data || e, r = e.info || !1;
if (!t || !t.length || t.length < 2) return _r_(!1);
var a = {
b_lang_is_rtl:B.env.rtl,
lang:B.env.b_lang,
bookings:t
};
a.fe_title = B.jstmpl.translations("pob_overlapping_booking_header_human", t.length, {
num_overlapping_bookings:t.length
}), a.fe_subtitle = r.group_total_price_pretty ? "<strong>" + B.jstmpl.translations("pob_mb_cost_youll_pay_if_no_cancel") + " " + r.group_total_price_pretty + "</strong>" :"";
var s = B.jstmpl("overlapping_bookings").render(a);
i.append(s), B.et.initAttributesTracking(i), n(), _r_();
}
function a(e) {}
B.require("fragment").call("mybooking.open_bookings_full", {
checkin:i.data("checkin"),
checkout:i.data("checkout")
}).then(r, a), _r_();
}), booking.jstmpl("overlapping_bookings", function() {
_i_("619:a07aa45f");
var e = [ "\n\n  ", "\n", "\n  ", "\n\n", '\n\n  <div\n    class="\n      overlapping-bookings\n      ', "\n\n      ", "\n        ", "--rtl\n      ", "--ltr\n      ", ' ">\n\n    \n    \n    \n\n    <div class="', '__icon">\n      <i class="bicon bicon-suitcase"></i>\n    </div>\n\n    <div class="', '__content">\n\n      \n      \n      \n\n      <div class="', "__cta ", " nudged ", '">\n\n          ', "\n            ", "\n          ", "\n\n          ", " ", " <i class='bicon bicon-downchevron'></i> ", "\n\n\n\n", "b-button", "Button Text should be overriden", "button", "\n\n\n", "c-button", "\n	", "0", "\n		", " b-button_primary", " b-button_secondary", " b-button_warning", " b-button_disabled", " b-button_primary b-button_small", " b-button_secondary b-button_small", " b-button_warning b-button_small", " b-button_primary b-button_flat", "\n\n	", "1", 'id="', '"', 'href="', 'data-title="', 'type="', 'rel="', "\n    ", "data-", '="', " data-", 'target="', 'hotelUrl="', 'data-hotelid="', "\n\n\n<", '\n	class="', '"\n	', "\n\n    ", '\n        data-track-event="', '"\n    ', '\n		value="', '"/>\n	', '\n	>\n		<span class="b-button__text">', "</span>\n		", '\n				<span class="b-button__from-text" ', 'style="display:inline-block"', ">", "\n\n		", '\n				<span class="b-button__from-text book_now_rt_summary g-hidden"></span>\n\n				', '\n                    <span class="b-button__from-text taxes_and_charges_near_price_btn_text"></span>\n				', "\n\n		</", ">\n	", "js-reservations-button", "_blank", "primary", "\n      </div>\n\n\n\n      \n      \n      \n\n      ", '\n\n        <p class="', '__title">\n          ', "\n        </p>\n\n      ", "\n\n      \n      \n      \n\n      ", '\n        <p class="', '__subtitle">\n          ', "\n\n\n      \n      \n      \n\n      ", '\n\n        <table class="', '__table">\n          <tbody>\n            ', '\n\n                <tr class="', '__row">\n\n\n                  \n                  \n                  \n\n                  <td class="', '__cell">\n\n                        <a class="', '__property" href="', '" target="_blank">\n                          ', '\n                        </a>\n                  </td>\n\n                  \n                  \n                  \n                  <td class="', '__cell">\n                    <small class="', '__label">', "/private/price/name", '</small>\n                    <strong class="', '__price">', "</strong>\n                  </td>\n\n                </tr>\n\n            ", "\n          </tbody>\n\n        </table>\n\n      ", "\n\n    </div>\n    ", '\n      <div class="js-overlapping-bookings-table ', '__table"></div>\n    ', "\n  </div>\n\n", "overlapping-bookings-outlined" ], t = [ "fe_base_css_class", "b_lang_is_rtl", "fe_subtitle", "pb_ss_dashboard_view_booking_cta", "active_perfectly_overlapped_bookings", "gta_splash_view_booking_cta", "b_text", "b_btn_class", "b_btn_id", "b_btn_text", "b_btn_outside_text", "b_btn_caption_text", "b_btn_tag", "b_btn_attr_type", "b_btn_attr", "b_btn_href", "b_btn_extra_classes", "b_btn_title", "b_btn_rel", "b_btn_target", "b_btn_data", "fe_cbtn_comp_class", "fe_cbtn_class", "fe_cbtn_type", "fe_cbtn_size", "fe_cbtn_disabled", "fe_cbtn_icon_only", "fe_cbtn_icon_left", "fe_cbtn_icon_right", "fe_cbtn_track_exp", "fe_cbtn_track_event", "fe_btn_track_event", "fe_cbtn_track_goal", "fe_cbtn_track_stage", "fe_cbtn_is_anchor", "fe_cbtn_is_input", "fe_cbtn_is_button", "fe_cbtn_no_style", "b_btn_hotel_url", "b_btn_data_hotelid", "b_outside_text", "b_caption_text", "b_type", "b_tag", "fe_btn_is_anchor", "fe_btn_is_input", "fe_btn_is_button", "b_id", "b_href", "fe_btn_no_style", "b_extra_classes", "b_title", "b_attr_type", "b_attr", "b_rel", "b_data_id", "b_data_value", "b_data_id_2", "b_data_value_2", "b_data_id_3", "b_data_value_3", "b_data_id_4", "b_data_value_4", "b_data_id_5", "b_data_value_5", "b_target", "b_bb_is_sabrered_app", "b_hotel_url", "b_data_hotelid", "b_from_price_inlined", "b_guest_country", "b_add_rt_summary", "fe_title", "fe_table_container", "mybooking_url", "hname", "total_price_pretty", "bookings" ];
return _r_(function(i) {
_i_("619:48830b52");
var n = "", r = this.fn;
function a(n) {
if (_i_("619:897e73f7"), n += e[1], r.MD(t[0]) || (n += e[2], r.MN("fe_base_css_class", "overlapping-bookings"), n += e[1]), n += e[3], r.MD(t[4])) {
if (n += [ e[4], r.MB(t[0]), e[5] ].join(""), n += r.MJ(r.MC(t[1])) ? [ e[6], r.MB(t[0]), e[7] ].join("") :[ e[6], r.MB(t[0]), e[8] ].join(""), n += [ e[9], r.MB(t[0]), e[10], r.MB(t[0]), e[11], r.MB(t[0]), e[12] ].join(""), r.MD(t[2]) || (n += e[13]), n += e[14], r.MJ(1 == r.array_length(r.MB(t[4]))) ? (n += e[15], r.MN("b_text", r.MB(t[3])), n += e[16]) :(n += e[15], r.MN("b_text", r.MB(t[5])), n += e[16]), n += e[17], r.MN(t[6], [ e[18], r.MC(t[6]), e[19] ].join("")), n += e[17], i.unshift({
b_extra_classes:e[70],
b_tag:e[23],
b_target:e[71],
b_type:e[72]
}), n = s(n), i.shift(), n += e[73], r.MJ(r.MB(t[72])) && (n += [ e[74], r.MB(t[0]), e[75], r.MC(t[72]), e[76] ].join("")), n += e[77], r.MJ(r.MB(t[2])) && (n += [ e[78], r.MB(t[0]), e[79], r.MC(t[2]), e[76] ].join("")), n += e[80], r.MD(t[73])) n += e[5]; else {
n += [ e[81], r.MB(t[0]), e[82] ].join("");
var a = r.MC(t[4]) || [];
i.unshift(null);
for (var o = 1, _ = a.length; _ >= o; o++) i[0] = a[o - 1], n += [ e[83], r.MB(t[0]), e[84], r.MB(t[0]), e[85], r.MB(t[0]), e[86], r.MB(t[74]), e[87], r.MB(t[75]), e[88], r.MB(t[0]), e[89], r.MB(t[0]), e[90], r.ME(e[91], r.MB, r.MN, null), e[92], r.MB(t[0]), e[93], r.MC(t[76]), e[94] ].join("");
i.shift(), n += e[95];
}
n += e[96], r.MD(t[73]) && (n += [ e[97], r.MB(t[0]), e[98] ].join("")), n += e[99];
}
return n += e[3], _r_(n);
}
function s(i) {
_i_("619:d4bc8870"), i += e[20], r.MN(t[7], e[21]), i += e[1], r.MN(t[8], void 0), i += e[1], r.MN(t[9], e[22]), i += e[1], r.MN(t[10], void 0), i += e[1], r.MN(t[11], void 0), i += e[1], r.MN(t[12], e[23]), i += e[1], r.MN(t[13], void 0), i += e[1], r.MN(t[14], void 0), i += e[1], r.MN(t[15], void 0), i += e[1], r.MN(t[16], void 0), i += e[1], r.MN(t[17], void 0), i += e[1], r.MN(t[18], void 0), i += e[1], r.MN(t[19], void 0), i += e[1], r.MN(t[20], void 0), i += e[24], r.MN(t[21], e[25]), i += e[3], r.MN(t[22], void 0), i += e[1], r.MN(t[23], void 0), i += e[1], r.MN(t[24], void 0), i += e[1], r.MN(t[25], void 0), i += e[1], r.MN(t[26], void 0), i += e[1], r.MN(t[27], void 0), i += e[1], r.MN(t[28], void 0), i += e[1], r.MN(t[29], void 0), i += e[3], r.MD(t[31]) ? (i += e[26], r.MN(t[30], r.MB(t[31])), i += e[1]) :(i += e[26], r.MN(t[30], void 0), i += e[1]), i += e[3], r.MN(t[32], void 0), i += e[1], r.MN(t[33], void 0), i += e[3], r.MN(t[34], e[27]), i += e[1], r.MN(t[35], e[27]), i += e[1], r.MN(t[36], e[27]), i += e[3], r.MN(t[37], e[27]), i += e[24], r.MN(t[38], void 0), i += e[1], r.MN(t[39], void 0), i += e[3], r.MD(t[6]) && (i += e[26], r.MN(t[9], r.MC(t[6])), i += e[1]), i += e[3], r.MD(t[40]) && (i += e[26], r.MN(t[10], r.MC(t[40])), i += e[1]), i += e[3], r.MD(t[41]) && (i += e[26], r.MN(t[11], r.MC(t[41])), i += e[1]), i += e[3];
var n = r.MC(t[42]);
if (r.MJ(n + "" == "primary") ? (i += e[28], r.MN(t[7], [ r.MC(t[7]), e[29] ].join("")), i += e[26]) :r.MJ(n + "" == "secondary") ? (i += e[28], r.MN(t[7], [ r.MC(t[7]), e[30] ].join("")), i += e[26]) :r.MJ(n + "" == "warning") ? (i += e[28], r.MN(t[7], [ r.MC(t[7]), e[31] ].join("")), i += e[26]) :r.MJ(n + "" == "disabled") ? (i += e[28], r.MN(t[7], [ r.MC(t[7]), e[32] ].join("")), i += e[26]) :r.MJ(n + "" == "primary-small") ? (i += e[28], r.MN(t[7], [ r.MC(t[7]), e[33] ].join("")), i += e[26]) :r.MJ(n + "" == "secondary-small") ? (i += e[28], r.MN(t[7], [ r.MC(t[7]), e[34] ].join("")), i += e[26]) :r.MJ(n + "" == "warning-small") ? (i += e[28], r.MN(t[7], [ r.MC(t[7]), e[35] ].join("")), i += e[26]) :r.MJ(n + "" == "primary-flat") && (i += e[28], r.MN(t[7], [ r.MC(t[7]), e[36] ].join("")), i += e[1]), i += e[3], r.MD(t[43]) && (i += e[26], r.MN(t[12], r.MC(t[43])), i += e[37], r.MJ(/^a$/i.test(r.MC(t[12]))) && r.MN(t[44], e[38]), i += e[26], r.MJ(/^input$/i.test(r.MC(t[12]))) && r.MN(t[45], e[38]), i += e[26], r.MJ(/^button$/i.test(r.MC(t[12]))) && r.MN(t[46], e[38]), i += e[1]), i += e[3], r.MD(t[47]) && (i += e[26], r.MN(t[8], [ e[39], r.MC(t[47]), e[40] ].join("")), i += e[1]), i += e[3], r.MD(t[48]) && (i += e[26], r.MN(t[15], [ e[41], r.MC(t[48]), e[40] ].join("")), i += e[1]), i += e[3], r.MD(t[49]) && (i += e[26], r.MN(t[37], r.MC(t[49])), i += e[1]), i += e[3], r.MD(t[50])) {
i += e[26];
var a = "";
r.MD(t[37]) || (a += r.MC(t[7])), a += [ e[18], r.MC(t[50]) ].join(""), r.MN(t[7], a), i += e[1];
}
return i += e[3], r.MD(t[51]) && (i += e[26], r.MN(t[17], [ e[42], r.F.entities(r.MC(t[51])), e[40] ].join("")), i += e[1]), i += e[3], r.MD(t[52]) && (i += e[26], r.MN(t[13], [ e[43], r.MC(t[52]), e[40] ].join("")), i += e[1]), i += e[3], r.MD(t[53]) && (i += e[26], r.MN(t[14], r.MC(t[53])), i += e[1]), i += e[3], r.MD(t[54]) && (i += e[26], r.MN(t[18], [ e[44], r.MC(t[54]), e[40] ].join("")), i += e[1]), i += e[3], r.MD(t[55]) && (i += e[45], r.MN(t[20], [ e[46], r.MC(t[55]), e[47], r.MC(t[56]), e[40] ].join("")), i += e[1]), i += e[3], r.MD(t[57]) && (i += e[45], r.MN(t[20], [ r.MC(t[20]), e[48], r.MC(t[57]), e[47], r.MC(t[58]), e[40] ].join("")), i += e[1]), i += e[3], r.MD(t[59]) && (i += e[45], r.MN(t[20], [ r.MC(t[20]), e[48], r.MC(t[59]), e[47], r.MC(t[60]), e[40] ].join("")), i += e[1]), i += e[3], r.MD(t[61]) && (i += e[45], r.MN(t[20], [ r.MC(t[20]), e[48], r.MC(t[61]), e[47], r.MC(t[62]), e[40] ].join("")), i += e[1]), i += e[3], r.MD(t[63]) && (i += e[45], r.MN(t[20], [ r.MC(t[20]), e[48], r.MC(t[63]), e[47], r.MC(t[64]), e[40] ].join("")), i += e[1]), i += e[3], r.MJ(r.MC(t[65])) && r.MK(r.MC(t[66])) && (i += e[26], r.MN(t[19], [ e[49], r.MC(t[65]), e[40] ].join("")), i += e[1]), i += e[20], r.MD(t[67]) && (i += e[26], r.MN(t[38], [ e[50], r.MC(t[67]), e[40] ].join("")), i += e[1]), i += e[3], r.MD(t[68]) && (i += e[26], r.MN(t[39], [ e[51], r.MC(t[68]), e[40] ].join("")), i += e[1]), i += [ e[52], r.MC(t[12]), e[53], r.MC(t[7]), e[54], r.MC(t[15]), e[26], r.MC(t[8]), e[26], r.MC(t[13]), e[26], r.MC(t[14]), e[26], r.MC(t[17]), e[45], r.MC(t[18]), e[26], r.MC(t[20]), e[26], r.MC(t[19]), e[26], r.MC(t[38]), e[26], r.MC(t[39]), e[55] ].join(""), r.MD(t[30]) && (i += [ e[56], r.MB(t[30]), e[57] ].join("")), i += e[37], r.MJ(r.MC(t[12]) + "" == "input") ? i += [ e[58], r.MC(t[9]), e[59] ].join("") :(i += [ e[60], r.MC(t[9]), e[61] ].join(""), r.MD(t[10]) && (i += e[62], r.MD(t[69]) && (i += e[63]), i += [ e[64], r.MC(t[10]), e[61] ].join("")), i += e[65], r.MD(t[71]) && (i += e[66], r.MJ(r.MC(t[70])) && (r.MJ(r.MC(t[70]) + "" == "nl") || r.MJ(r.MC(t[70]) + "" == "be")) && r.MJ(r.track_experiment("eDUIFBUNAAUTCKWFQTcYRJELWe")) && (i += e[67]), i += e[28]), i += [ e[68], r.MC(t[12]), e[69] ].join("")), i += e[1], _r_(i);
}
return n += e[0], i.unshift({
active_perfectly_overlapped_bookings:r.MB(t[77]),
fe_base_css_class:e[100]
}), n = a(n), i.shift(), n += e[3], _r_(n);
});
}()), function(e) {
_i_("619:cdeb2a12"), e.define("component/feedback-base", function(i, n, r) {
_i_("619:09cb4987");
var a = i("component"), s = i("jquery"), o = i("events"), _ = {
StorageService:t,
submitModel:function(e, t) {
_i_("619:f2ba0307");
var i = s.ajax({
url:e,
method:"POST",
data:t
});
return _r_(i);
},
setObjectPath:function(e, t, i) {
_i_("619:a9d8ca6a");
var n = t.split("."), r = e, a = n.length - 1;
n.forEach(function(e, t) {
if (_i_("619:dc1ce93c"), t === a) return r[e] = i, _r_();
r[e] = r[e] || {}, r = r[e], _r_();
}), _r_();
}
};
r.exports = a.extend({
_utils:_,
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
if (_i_("619:2aa0d7ae"), this.setupComponent(), !this.config.neverExpire && (this.setupStorage(), !this.storage)) return _r_();
if (this.setupModel(), !this.config.neverExpire) {
var e = this.storage.isExpired(this.model.poll);
if (!e) {
var t = s(".feedback-loop");
return t.length && t.hide(), _r_();
}
}
this.setupViews(), this.setupActions(), this.initActions(), this.render(), _r_();
},
setupComponent:function() {
_i_("619:2df8408e"), this.config = s.extend({}, this.config, this.$el.data()), _r_();
},
setupStorage:function() {
_i_("619:88388287");
var e = this.config.storage || this.config.defaultStorage;
this.storage = new t(e), this.storage.removeExpired(), _r_();
},
setupViews:function() {
_i_("619:ee1c0ac6");
var e = this.views = {}, t = this.$el;
t.children("[data-view]").each(function(t, i) {
_i_("619:134c4fd9");
var n = s(i), r = n.data(), a = r.view;
e[a] = {
config:r,
view:i,
$view:n
}, _r_();
}), this.setupGroups(), _r_();
},
setupGroups:function() {
_i_("619:6f65c131");
var e = this;
this.$el.off(".feedbackGroups").on("click.feedbackGroups", ".feedback-loop__group-header :checkbox", function() {
_i_("619:6dc1b123"), t(s(this).closest(".feedback-loop__group")), _r_();
});
function t(t) {
_i_("619:aed89ecd");
var i = t.find(".feedback-loop__group-body"), n = t.find(".feedback-loop__group-header :checkbox"), r = i.is(":visible"), a = n.is(":checked");
r != a && i.slideToggle({
duration:200,
complete:function() {
_i_("619:d9ba1114"), e.triggerResize(), _r_();
}
}), _r_();
}
_r_();
},
triggerResize:function() {
_i_("619:18bdb111"), this.$el.trigger("feedbackBase_resize"), _r_();
},
setupModel:function() {
_i_("619:04551eb1"), this.model = {
poll:this.config.poll || this.config.defaultPoll
}, s.extend(this.model, {
url:window.location.href,
action:window.booking && window.booking.env && window.booking.env.b_action
}), _r_();
},
setupActions:function() {
_i_("619:f96e2876");
var t = this.actions = {};
t.showView = function(e) {
_i_("619:1e9bf834"), this.render(e.view), _r_();
}, t.submit = function(e) {
_i_("619:85856f91");
var t = this;
_.submitModel(this.config.url, this.model).done(function() {
_i_("619:d3ce5433");
var e = t.config.timeout;
e && !t.config.neverExpire && t.storage.set(t.model.poll, !0, 1e3 * e * 3600), _r_();
}).fail(function() {
_i_("619:feb1206b");
var e = t.config.defaultErrorView;
if (t.views[e]) return _r_(t.render(e));
throw o.emit("FLOOPS.request.error"), Error("[FLOOPS] Error submitting feedback");
}), _r_();
}, t.beforeSubmit = function(e) {
_i_("619:6610586c"), this.$el.trigger("feedback_beforeSubmit"), this.updateModel(this.currentView), _r_();
}, t.autoClose = function() {
_i_("619:377948b6"), setTimeout(function() {
_i_("619:4493432a"), $el.fadeOut(200), _r_();
}, 3e3), _r_();
}, t.reset = function() {
_i_("619:2e875bc5"), this.updateModel(this.currentView, !0), _r_();
}, t.close = function() {
_i_("619:f56186c8"), this.$el.hide(), _r_();
}, t.trackGaEvent = function(t) {
_i_("619:2bd5c299");
var n, r = (t.feedbackGaEvent || "").split("|"), a = {
nonInteraction:!0
};
"www" === e.env.b_site_type ? n = i("ga-tracker") :"mdot" === e.env.b_site_type && (n = i(e.env.b_use_ga_tracker ? "ga-tracker" :"core/ga-tracker-mobile")), r.length >= 2 && (a.type = r[0], a.action = r[1] || "", a.label = r[2] || "", "undefined" != typeof r[3] && (a.value = r[3])), n && n.trackEvent && a.type && a.action && a.label && ("www" === e.env.b_site_type ? n.trackEvent(a.type, a.action, a.label, a.value) :"mdot" === e.env.b_site_type && (e.env.b_use_ga_tracker ? n.trackEvent(a.type, a.action, a.label, a.value) :n.trackEvent(a))), _r_();
}, _r_();
},
updateModel:function(e, t) {
_i_("619:217fdadc");
var i = this, n = this.views[e], r = n ? n.$view :this.$el, a = {};
r.find("[data-model]").each(function(e, n) {
_i_("619:c4bb26a2");
var r, a = s(n), c = a.data();
if (c.model && (r = String(c.model).match(/^([^\[\]]+)\[\]$/))) return o(r[1]), _r_();
if (c.hasOwnProperty("modelValue")) return _r_();
var l = t ? "" :a.val();
a.is(":checkbox,:radio") && !a.prop("checked") && (l = ""), _.setObjectPath(i.model, c.model, l), _r_();
});
function o(e) {
if (_i_("619:e221706d"), a[e]) return _r_();
a[e] = [], r.find('[data-model="' + e + '[]"]').each(function(i, n) {
_i_("619:6d4733f8");
var r = s(n), o = t ? "" :r.val();
r.is(":checkbox,:radio") && !r.prop("checked") && (o = ""), o && a[e].push(o), _r_();
}), _.setObjectPath(i.model, e, a[e].join(",")), _r_();
}
_r_();
},
initActions:function() {
_i_("619:541173d8");
var e = this;
this.$el.find(":not([data-component]) [data-action]").each(function(t, i) {
_i_("619:427d9c53");
var n = s(i), r = s.extend({
action:e.config.defaultAction,
on:e.config.defaultActionEvent,
autoclose:n.data("autoclose") || !1,
stopPropagation:n.data("stopPropagation") || e.config.stopPropagation
}, n.data()), a = r.action.split(/\s+/);
n.on(r.on, function(t) {
_i_("619:6a43c01a"), r.model && r.modelValue && _.setObjectPath(e.model, r.model, r.modelValue), e.updateModel(e.currentView), r.stopPropagation && t.stopPropagation(), a.forEach(function(t) {
_i_("619:76c8fee9"), e.actions[t].call(e, r), _r_();
}), _r_();
}), _r_();
}), e.config.stopPropagation && this.$el.on("click", function(e) {
_i_("619:0b1ac586"), e.stopPropagation(), _r_();
}), _r_();
},
render:function(e) {
_i_("619:14297540");
var t = this;
if (!this.views) return _r_();
if (this.$el.removeClass("feedback-loop--hidden"), e = e || this.config.defaultView, e === this.currentView) return _r_();
Object.keys(this.views).forEach(function(i) {
_i_("619:5b0f286e");
var n = this.views[i].$view;
if (i === e) {
this.currentView = i, n.data("viewAnimated") ? n.slideDown(300) :n.show();
var r = /off|0|disabled|none/g;
n.data("autoclose") && !r.test(n.data("autoclose")) && setTimeout(function() {
_i_("619:6893325f"), t.$el.fadeOut(300), _r_();
}, 2e3);
} else n.hide();
_r_();
}.bind(this)), this.triggerResize(), _r_();
}
}), _r_();
});
function t(e, i) {
if (_i_("619:84e9843d"), !(this instanceof t)) return _r_(new t(e, i));
i = i || "localStorage", this.ns = e, this._storage = this.getStorage(i), this.loadData(), _r_();
}
t.prototype.getStorage = function(e) {
_i_("619:b029f3ca");
try {
var t = window[e], i = "__storage_test__";
return t.setItem(i, i), t.removeItem(i), _r_(t);
} catch (n) {
return _r_();
}
_r_();
}, t.prototype.saveData = function() {
if (_i_("619:6864624c"), !this._storage) return _r_();
return _r_(this._storage.setItem(this.ns, JSON.stringify(this.data)));
}, t.prototype.loadData = function() {
_i_("619:21a7d97f");
var e = this._storage.getItem(this.ns);
try {
e = e && JSON.parse(e) || {};
} catch (t) {
e = {};
}
this.data = e, _r_();
}, t.prototype.removeExpired = function() {
_i_("619:a90c56f0");
var e = Object.keys(this.data), t = this.data;
e.filter(this.isExpired.bind(this)).forEach(function(e) {
_i_("619:c2d864c6"), delete t[e], _r_();
}), this.saveData(), _r_();
}, t.prototype.isExpired = function(e, t) {
_i_("619:988d3e97"), t = t || new Date().getTime();
var i = this.data[e];
if (!i || !i.expires) return _r_(!0);
return _r_(t > i.expires);
}, t.prototype.remove = function(e) {
_i_("619:052a98d2"), delete this.data[e], this.saveData(), _r_();
}, t.prototype.set = function(e, t, i) {
if (_i_("619:d60c876d"), i && i.constructor !== Date) {
var n = new Date().getTime();
i = new Date(n + i).getTime();
}
this.data[e] = {
value:t,
expires:i
}, this.saveData(), _r_();
}, t.prototype.get = function(e) {
_i_("619:ec4d6d94");
var t, i = this.data, n = i[e];
return i[e] && (this.isExpired(e) ? this.remove(e) :t = n.value), _r_(t);
}, _r_();
}(window.booking), function(e) {
_i_("619:1affab82"), e.define("component/feedback-inline", function(t, i, n) {
_i_("619:89db71a6");
var r = t("component"), a = t("events"), s = t("jquery");
n.exports = r.extend({
init:function() {
_i_("619:0b5f0aa9");
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
_i_("619:6c13f195");
var i = s(this);
t.preventDefault(), i.data("stopPropagation") && t.stopPropagation(), e.runElementActions(i), _r_();
}), _r_();
},
runElementActions:function(e, t) {
_i_("619:10d70a4c");
var i = this, n = (t || e.data("action") || "").split(/\s+/);
s.each(n, function(t, n) {
_i_("619:c569f635");
var r = i["action_" + n];
"function" == typeof r && r.call(i, e), i.triggerActionEvents(n), _r_();
}), _r_();
},
action_submit:function(e) {
_i_("619:ba3db9ff");
var t = e.data("model"), i = e.data("modelValue"), n = this.getModel();
return t && (n[t] = i), this.$el.trigger("feedbackInline_submit", n), _r_(s.ajax({
url:this.config.url,
method:"POST",
data:n
}));
},
action_external:function(i) {
_i_("619:af1cf5c7");
var n = e.env && e.env.b_is_tdot_traffic ? e.lightbox :t("lightbox"), r = i.data("url"), a = i.data("iframe_height_percentage") || 90, o = {
iframe:!0,
iframeHeight:Math.max(Math.floor(a * s(window).height() / 100), 550),
hideCallBack:function() {
_i_("619:d179fba7"), s(document.body).css("overflow", ""), _r_();
}
};
r && (n.show(r, o), s(document.body).css("overflow", "hidden")), _r_();
},
action_modal:function(i) {
_i_("619:e6f1de82");
var n, r = this, a = e.env && e.env.b_is_tdot_traffic ? e.lightbox :t("lightbox"), o = i.data("showForm"), _ = i.data("modalView"), c = o ? s(o) :s(".feedback-loop-lightbox").filter('[data-poll="' + this.config.poll + '"]').eq(0), l = function() {
_i_("619:9bfb463f"), r.$el.trigger("feedbackInline_hideModal", {
$feedbackForm:c
}), r.triggerActionEvents("hideModal"), _r_();
}, d = function() {
_i_("619:8e0ca5f8"), r.$el.trigger("feedbackInline_beforeHideModal", {
$feedbackForm:c
}), _r_();
};
if (!c.length) return _r_();
_ && (n = c.data("componentInstanceFeedbackBase"), n && n.render && n.render(_)), a.show(c, {
customWrapperClassName:this.config.modalExtraClass,
position:this.config.modalPosition,
topMargin:this.config.modalTopMargin,
customMaskClassName:this.config.modalMaskExtraClass,
hideCallBack:l,
hideBeforeCallBack:d
}), c.off(".feedbackInline").on("click.feedbackInline", "[data-close]", function() {
_i_("619:c4a9a11a"), a.hide(), _r_();
}).on("click.feedbackInline", '[data-action~="submit"]', function() {
_i_("619:98a239bd"), r.$el.trigger("feedbackInline_submitModal"), r.triggerActionEvents("submitModal", {
$modal:c
}), i.data("hideOnModalSubmit") && r.action_hide(), _r_();
}).on("feedbackBase_resize", function() {
_i_("619:2a98798c"), a.rePosition({
preserveAbsolute:!0
}), _r_();
}), r.config.autoFocus && c.find("input:visible, textarea:visible").first().focus(), r.$el.trigger("feedbackInline_showModal"), r.triggerActionEvents("showModal", {
$modal:c
}), _r_();
},
action_extraForm:function(e) {
_i_("619:ead0f947");
var t, i = this, n = e.data("showForm"), r = s(n ? n :'.feedback-loop-extra[data-poll="' + this.config.poll + '"]');
if (!r.length) return _r_();
r.data("tmplName") && (r = this.replaceWithJsTmpl(r), r.addClass("feedback-loop-extra").attr("data-poll", this.config.poll)), e.data("extraFormAnimated") ? r.slideDown(300) :r.show(), this.config.autoFocus && setTimeout(function() {
_i_("619:dceff0be"), r.find("input:text:visible,textarea:visible").focus(), _r_();
}, 50), this.$el.trigger("feedbackInline_showExtra"), r.find('[data-action~="close"],[data-close]').off(".feedbackInline").on("click.feedbackInline", function() {
_i_("619:c0f8663c"), i.$el.trigger("feedbackInline_hideExtra"), e.data("showOnCancel") && !t ? i.$el.show() :e.data("hideOnExtraClose") && i.action_hide(), _r_();
}).end().find('[data-action~="submit"]').off(".feedbackInline").on("click.feedbackInline", function() {
_i_("619:d4174a9d"), t = !0, e.data("hideOnExtraSubmit") && i.action_hide(), i.$el.trigger("feedbackInline_submitExtra"), i.triggerActionEvents("submitExtra", {
$extraForm:r
}), _r_();
}), _r_();
},
action_hide:function(e) {
_i_("619:adf478a2");
var t = this, i = e ? e.data("hideDelay") :null, n = e ? e.data("hideAnimated") :null, r = function() {
_i_("619:75a34236"), n ? t.$el.slideUp(200) :t.$el.hide(), t.config.hideClass && t.$el.addClass(t.config.hideClass), _r_();
};
i ? setTimeout(r, i) :r(), _r_();
},
action_hideOther:function(e) {
_i_("619:b8736d69"), s('[data-component*="feedback-inline"][data-poll="' + this.config.poll + '"]').not(this.$el).hide(), _r_();
},
action_hideForeign:function(e) {
_i_("619:fa1df519");
var t = (e.data("hideForeign") || "").split(/\s+/);
t.length && s.each(t, function(e, t) {
_i_("619:8412f2c7"), t && s('[data-component*="feedback-inline"][data-poll="' + t + '"]').hide(), _r_();
}), _r_();
},
action_showView:function(e) {
_i_("619:0276d38d");
var t = this, i = e.data("showView"), n = this.$el.find("[data-view]"), r = n.filter('[data-view="' + i + '"]'), a = r.data("viewAnimated");
n.each(function() {
_i_("619:86e0d512");
var e = s(this), n = e.data("view"), r = e.is(":visible");
n !== i || r ? n !== i && r && (a ? e.slideUp(200) :e.hide()) :a ? (t.$el.css({
overflow:"hidden",
height:t.$el.height()
}), e.slideDown(300, function() {
_i_("619:80a013af"), t.$el.css({
overflow:"",
height:""
}), _r_();
}), s(".inline-feedback__hidden").focus()) :e.show(), _r_();
}), _r_();
},
action_trackGaEvent:function(i) {
_i_("619:b141d3a7");
var n, r = (i.data("feedbackGaEvent") || "").split("|"), a = {
nonInteraction:!0
};
"www" === e.env.b_site_type ? n = t("ga-tracker") :"mdot" === e.env.b_site_type && (n = t(e.env.b_use_ga_tracker ? "ga-tracker" :"core/ga-tracker-mobile")), r.length >= 2 && (a.type = r[0], a.action = r[1] || "", a.label = r[2] || "", "undefined" != typeof r[3] && (a.value = r[3])), n && n.trackEvent && a.type && a.action && a.label && ("www" === e.env.b_site_type ? n.trackEvent(a.type, a.action, a.label, a.value) :"mdot" === e.env.b_site_type && (e.env.b_use_ga_tracker ? n.trackEvent(a.type, a.action, a.label, a.value) :n.trackEvent(a))), _r_();
},
replaceWithJsTmpl:function(t) {
_i_("619:9cc0ce91");
var i = t.data(), n = {
poll_id:this.config.poll
}, r = "", a = t;
return e.jstmpl && i.tmplName && (s.each(i, function(e, t) {
_i_("619:e8a2be23");
var i = e.match(/^tmplData(.+)$/);
i && i[1] && (n[String(i[1]).toLowerCase()] = t), _r_();
}), s.isPlainObject(i.tmplData) && s.extend(n, i.tmplData), r = e.jstmpl(i.tmplName).render(n)), r && (a = s(r), t.replaceWith(a), a.loadComponents()), _r_(a);
},
setupComponent:function() {
_i_("619:a765f0be"), s.extend(this.config, this.$el.data()), _r_();
},
getModel:function() {
_i_("619:3462e42f");
var e = this.$el.find("[data-view]:visible"), t = {
url:window.location.href,
action:window.booking && window.booking.env && window.booking.env.b_action,
poll:this.config.poll
};
return e.length || (e = this.$el), e.find("[data-model]").each(function() {
_i_("619:9441e65b");
var e = s(this), i = e.data();
!i.hasOwnProperty("modelValue") && i.model && (t[i.model] = e.val()), _r_();
}), _r_(t);
},
triggerActionEvents:function(e, t) {
_i_("619:e285197f");
var i = s.extend({
feedbackInline:this
}, t || {});
a && e && (a.emit("feedbackInline:" + e, i), this.config.poll && a.emit("feedbackInline:" + e + ":" + this.config.poll, i)), _r_();
}
}), _r_();
}), _r_();
}(window.booking);