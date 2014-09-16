var DOKU_BASE   = '/';var DOKU_TPL    = '/lib/tpl/analog/';var DOKU_UHN    = 0;var DOKU_UHC    = 0;LANG = {"notsavedyet":"Unsaved changes will be lost.","searchmedia":"Search for files","keepopen":"Keep window open on selection","hidedetails":"Hide Details","mediatitle":"Link settings","mediadisplay":"Link type","mediaalign":"Alignment","mediasize":"Image size","mediatarget":"Link target","mediaclose":"Close","mediainsert":"Insert","mediadisplayimg":"Show the image.","mediadisplaylnk":"Show only the link.","mediasmall":"Small version","mediamedium":"Medium version","medialarge":"Large version","mediaoriginal":"Original version","medialnk":"Link to detail page","mediadirect":"Direct link to original","medianolnk":"No link","medianolink":"Do not link the image","medialeft":"Align the image on the left.","mediaright":"Align the image on the right.","mediacenter":"Align the image in the middle.","medianoalign":"Use no align.","nosmblinks":"Linking to Windows shares only works in Microsoft Internet Explorer.\nYou still can copy and paste the link.","linkwiz":"Link Wizard","linkto":"Link to:","del_confirm":"Really delete selected item(s)?","mu_btn":"Upload multiple files at once","plugins":{"vshare":{"button":"Insert video from video sharing sites","prompt":"Please paste the full URL to the video page here:","notfound":"Sorry, this URL wasn't recognized.\nPlease refer to the documentation on how to insert the correct syntax manually."}}};
var toolbar = [{"type":"format","title":"Bold Text","icon":"bold.png","key":"b","open":"**","close":"**","block":false},{"type":"format","title":"Italic Text","icon":"italic.png","key":"i","open":"\/\/","close":"\/\/","block":false},{"type":"format","title":"Underlined Text","icon":"underline.png","key":"u","open":"__","close":"__","block":false},{"type":"format","title":"Code Text","icon":"mono.png","key":"c","open":"''","close":"''","block":false},{"type":"format","title":"Strike-through Text","icon":"strike.png","key":"d","open":"<del>","close":"<\/del>","block":false},{"type":"autohead","title":"Same Level Headline","icon":"hequal.png","key":"8","text":"Headline","mod":0,"block":true},{"type":"autohead","title":"Lower Headline","icon":"hminus.png","key":"9","text":"Headline","mod":1,"block":true},{"type":"autohead","title":"Higher Headline","icon":"hplus.png","key":"0","text":"Headline","mod":-1,"block":true},{"type":"picker","title":"Select Headline","icon":"h.png","class":"pk_hl","list":[{"type":"format","title":"Level 1 Headline","icon":"h1.png","key":"1","open":"====== ","close":" ======\\n"},{"type":"format","title":"Level 2 Headline","icon":"h2.png","key":"2","open":"===== ","close":" =====\\n"},{"type":"format","title":"Level 3 Headline","icon":"h3.png","key":"3","open":"==== ","close":" ====\\n"},{"type":"format","title":"Level 4 Headline","icon":"h4.png","key":"4","open":"=== ","close":" ===\\n"},{"type":"format","title":"Level 5 Headline","icon":"h5.png","key":"5","open":"== ","close":" ==\\n"}],"block":true},{"type":"linkwiz","title":"Internal Link","icon":"link.png","key":"l","open":"[[","close":"]]","block":false},{"type":"format","title":"External Link","icon":"linkextern.png","open":"[[","close":"]]","sample":"http:\/\/example.com|External Link","block":false},{"type":"formatln","title":"Ordered List Item","icon":"ol.png","open":"  - ","close":"","key":"-","block":true},{"type":"formatln","title":"Unordered List Item","icon":"ul.png","open":"  * ","close":"","key":".","block":true},{"type":"insert","title":"Horizontal Rule","icon":"hr.png","insert":"\\n----\\n","block":true},{"type":"mediapopup","title":"Add Images and other files","icon":"image.png","url":"lib\/exe\/mediamanager.php?ns=","name":"mediaselect","options":"width=750,height=500,left=20,top=20,scrollbars=yes,resizable=yes","block":false},{"type":"picker","title":"Smileys","icon":"smiley.png","list":{"8-)":"icon_cool.gif","8-O":"icon_eek.gif","8-o":"icon_eek.gif",":-(":"icon_sad.gif",":-)":"icon_smile.gif","=)":"icon_smile2.gif",":-\/":"icon_doubt.gif",":-\\":"icon_doubt2.gif",":-?":"icon_confused.gif",":-D":"icon_biggrin.gif",":-P":"icon_razz.gif",":-o":"icon_surprised.gif",":-O":"icon_surprised.gif",":-x":"icon_silenced.gif",":-X":"icon_silenced.gif",":-|":"icon_neutral.gif",";-)":"icon_wink.gif","^_^":"icon_fun.gif",":?:":"icon_question.gif",":!:":"icon_exclaim.gif","LOL":"icon_lol.gif","FIXME":"fixme.gif","DELETEME":"delete.gif"},"icobase":"smileys","block":false},{"type":"picker","title":"Special Chars","icon":"chars.png","list":["\u00c0","\u00e0","\u00c1","\u00e1","\u00c2","\u00e2","\u00c3","\u00e3","\u00c4","\u00e4","\u01cd","\u01ce","\u0102","\u0103","\u00c5","\u00e5","\u0100","\u0101","\u0104","\u0105","\u00c6","\u00e6","\u0106","\u0107","\u00c7","\u00e7","\u010c","\u010d","\u0108","\u0109","\u010a","\u010b","\u00d0","\u0111","\u00f0","\u010e","\u010f","\u00c8","\u00e8","\u00c9","\u00e9","\u00ca","\u00ea","\u00cb","\u00eb","\u011a","\u011b","\u0112","\u0113","\u0116","\u0117","\u0118","\u0119","\u0122","\u0123","\u011c","\u011d","\u011e","\u011f","\u0120","\u0121","\u0124","\u0125","\u00cc","\u00ec","\u00cd","\u00ed","\u00ce","\u00ee","\u00cf","\u00ef","\u01cf","\u01d0","\u012a","\u012b","\u0130","\u0131","\u012e","\u012f","\u0134","\u0135","\u0136","\u0137","\u0139","\u013a","\u013b","\u013c","\u013d","\u013e","\u0141","\u0142","\u013f","\u0140","\u0143","\u0144","\u00d1","\u00f1","\u0145","\u0146","\u0147","\u0148","\u00d2","\u00f2","\u00d3","\u00f3","\u00d4","\u00f4","\u00d5","\u00f5","\u00d6","\u00f6","\u01d1","\u01d2","\u014c","\u014d","\u0150","\u0151","\u0152","\u0153","\u00d8","\u00f8","\u0154","\u0155","\u0156","\u0157","\u0158","\u0159","\u015a","\u015b","\u015e","\u015f","\u0160","\u0161","\u015c","\u015d","\u0162","\u0163","\u0164","\u0165","\u00d9","\u00f9","\u00da","\u00fa","\u00db","\u00fb","\u00dc","\u00fc","\u01d3","\u01d4","\u016c","\u016d","\u016a","\u016b","\u016e","\u016f","\u01d6","\u01d8","\u01da","\u01dc","\u0172","\u0173","\u0170","\u0171","\u0174","\u0175","\u00dd","\u00fd","\u0178","\u00ff","\u0176","\u0177","\u0179","\u017a","\u017d","\u017e","\u017b","\u017c","\u00de","\u00fe","\u00df","\u0126","\u0127","\u00bf","\u00a1","\u00a2","\u00a3","\u00a4","\u00a5","\u20ac","\u00a6","\u00a7","\u00aa","\u00ac","\u00af","\u00b0","\u00b1","\u00f7","\u2030","\u00bc","\u00bd","\u00be","\u00b9","\u00b2","\u00b3","\u00b5","\u00b6","\u2020","\u2021","\u00b7","\u2022","\u00ba","\u2200","\u2202","\u2203","\u018f","\u0259","\u2205","\u2207","\u2208","\u2209","\u220b","\u220f","\u2211","\u203e","\u2212","\u2217","\u221a","\u221d","\u221e","\u2220","\u2227","\u2228","\u2229","\u222a","\u222b","\u2234","\u223c","\u2245","\u2248","\u2260","\u2261","\u2264","\u2265","\u2282","\u2283","\u2284","\u2286","\u2287","\u2295","\u2297","\u22a5","\u22c5","\u25ca","\u2118","\u2111","\u211c","\u2135","\u2660","\u2663","\u2665","\u2666","\u03b1","\u03b2","\u0393","\u03b3","\u0394","\u03b4","\u03b5","\u03b6","\u03b7","\u0398","\u03b8","\u03b9","\u03ba","\u039b","\u03bb","\u03bc","\u039e","\u03be","\u03a0","\u03c0","\u03c1","\u03a3","\u03c3","\u03a4","\u03c4","\u03c5","\u03a6","\u03c6","\u03c7","\u03a8","\u03c8","\u03a9","\u03c9","\u2605","\u2606","\u260e","\u261a","\u261b","\u261c","\u261d","\u261e","\u261f","\u2639","\u263a","\u2714","\u2718","\u00d7","\u201e","\u201c","\u201d","\u201a","\u2018","\u2019","\u00ab","\u00bb","\u2039","\u203a","\u2014","\u2013","\u2026","\u2190","\u2191","\u2192","\u2193","\u2194","\u21d0","\u21d1","\u21d2","\u21d3","\u21d4","\u00a9","\u2122","\u00ae","\u2032","\u2033","[","]","{","}","~","(",")","%","\u00a7","$","#","|","@"],"block":false},{"type":"signature","title":"Insert Signature","icon":"sig.png","key":"y","block":false},{"type":"format","title":"","icon":"..\/..\/plugins\/underconstruction\/images\/underconstruction.gif","open":"~~UNDERCONSTRUCTION~~","close":""}];


/* XXXXXXXXXX begin of lib/scripts/helpers.js XXXXXXXXXX */

/**
 * Differrent helper functions
 *
 * @author Ilya Lebedev <ilya@lebedev.net>
 * @license LGPL
 */
//-----------------------------------------------------------------------------
//  Variable/property checks
//-----------------------------------------------------------------------------
/**
 *  Checks if property is undefined
 *
 *  @param {Object} prop value to check
 *  @return {Boolean} true if matched
 *  @scope public
 */
function isUndefined (prop /* :Object */) /* :Boolean */ {
  return (typeof prop == 'undefined');
}
/**
 *  Checks if property is function
 *
 *  @param {Object} prop value to check
 *  @return {Boolean} true if matched
 *  @scope public
 */
function isFunction (prop /* :Object */) /* :Boolean */ {
  return (typeof prop == 'function');
}
/**
 *  Checks if property is string
 *
 *  @param {Object} prop value to check
 *  @return {Boolean} true if matched
 *  @scope public
 */
function isString (prop /* :Object */) /* :Boolean */ {
  return (typeof prop == 'string');
}
/**
 *  Checks if property is number
 *
 *  @param {Object} prop value to check
 *  @return {Boolean} true if matched
 *  @scope public
 */
function isNumber (prop /* :Object */) /* :Boolean */ {
  return (typeof prop == 'number');
}
/**
 *  Checks if property is the calculable number
 *
 *  @param {Object} prop value to check
 *  @return {Boolean} true if matched
 *  @scope public
 */
function isNumeric (prop /* :Object */) /* :Boolean */ {
  return isNumber(prop)&&!isNaN(prop)&&isFinite(prop);
}
/**
 *  Checks if property is array
 *
 *  @param {Object} prop value to check
 *  @return {Boolean} true if matched
 *  @scope public
 */
function isArray (prop /* :Object */) /* :Boolean */ {
  return (prop instanceof Array);
}
/**
 *  Checks if property is regexp
 *
 *  @param {Object} prop value to check
 *  @return {Boolean} true if matched
 *  @scope public
 */
function isRegExp (prop /* :Object */) /* :Boolean */ {
  return (prop instanceof RegExp);
}
/**
 *  Checks if property is a boolean value
 *
 *  @param {Object} prop value to check
 *  @return {Boolean} true if matched
 *  @scope public
 */
function isBoolean (prop /* :Object */) /* :Boolean */ {
  return ('boolean' == typeof prop);
}
/**
 *  Checks if property is a scalar value (value that could be used as the hash key)
 *
 *  @param {Object} prop value to check
 *  @return {Boolean} true if matched
 *  @scope public
 */
function isScalar (prop /* :Object */) /* :Boolean */ {
  return isNumeric(prop)||isString(prop);
}
/**
 *  Checks if property is empty
 *
 *  @param {Object} prop value to check
 *  @return {Boolean} true if matched
 *  @scope public
 */
function isEmpty (prop /* :Object */) /* :Boolean */ {
  if (isBoolean(prop)) return false;
  if (isRegExp(prop) && new RegExp("").toString() == prop.toString()) return true;
  if (isString(prop) || isNumber(prop)) return !prop;
  if (Boolean(prop)&&false != prop) {
    for (var i in prop) if(prop.hasOwnProperty(i)) return false;
  }
  return true;
}

/**
 *  Checks if property is derived from prototype, applies method if it is not exists
 *
 *  @param string property name
 *  @return bool true if prototyped
 *  @access public
 */
if ('undefined' == typeof Object.hasOwnProperty) {
  Object.prototype.hasOwnProperty = function (prop) {
    return !('undefined' == typeof this[prop] || this.constructor && this.constructor.prototype[prop] && this[prop] === this.constructor.prototype[prop]);
  };
}

/**
 * Very simplistic Flash plugin check, probably works for Flash 8 and higher only
 */
function hasFlash(version){
    var ver = 0;
    try{
        if(navigator.plugins != null && navigator.plugins.length > 0){
           ver = navigator.plugins["Shockwave Flash"].description.split(' ')[2].split('.')[0];
        }else{
           var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
           ver = axo.GetVariable("$version").split(' ')[1].split(',')[0];
        }
    }catch(e){ }

    if(ver >= version) return true;
    return false;
}


/* XXXXXXXXXX end of lib/scripts/helpers.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/events.js XXXXXXXXXX */

// written by Dean Edwards, 2005
// with input from Tino Zijdel

// http://dean.edwards.name/weblog/2005/10/add-event/

function addEvent(element, type, handler) {
    // assign each event handler a unique ID
    if (!handler.$$guid) handler.$$guid = addEvent.guid++;
    // create a hash table of event types for the element
    if (!element.events) element.events = {};
    // create a hash table of event handlers for each element/event pair
    var handlers = element.events[type];
    if (!handlers) {
        handlers = element.events[type] = {};
        // store the existing event handler (if there is one)
        if (element["on" + type]) {
            handlers[0] = element["on" + type];
        }
    }
    // store the event handler in the hash table
    handlers[handler.$$guid] = handler;
    // assign a global event handler to do all the work
    element["on" + type] = handleEvent;
};
// a counter used to create unique IDs
addEvent.guid = 1;

function removeEvent(element, type, handler) {
    // delete the event handler from the hash table
    if (element.events && element.events[type]) {
        delete element.events[type][handler.$$guid];
    }
};

function handleEvent(event) {
    var returnValue = true;
    // grab the event object (IE uses a global event object)
    event = event || fixEvent(window.event, this);
    // get a reference to the hash table of event handlers
    var handlers = this.events[event.type];
    // execute each event handler
    for (var i in handlers) {
        if (!handlers.hasOwnProperty(i)) continue;
        if (handlers[i].call(this, event) === false) {
            returnValue = false;
        }
    }
    return returnValue;
};

function fixEvent(event, _this) {
    // add W3C standard event methods
    event.preventDefault = fixEvent.preventDefault;
    event.stopPropagation = fixEvent.stopPropagation;
    // fix target
    event.target = event.srcElement;
    event.currentTarget = _this;
    // fix coords
    var base = (document.documentElement.scrollTop?document.documentElement:document.body);
    event.pageX = (typeof event.pageX !== 'undefined') ? event.pageX : event.clientX + base.scrollLeft;
    event.pageY = (typeof event.pageY !== 'undefined') ? event.pageY : event.clientY + base.scrollTop;

    return event;
};
fixEvent.preventDefault = function() {
    this.returnValue = false;
};
fixEvent.stopPropagation = function() {
    this.cancelBubble = true;
};


/**
 * Pseudo event handler to be fired after the DOM was parsed or
 * on window load at last.
 *
 * @author based upon some code by Dean Edwards
 * @author Dean Edwards
 * @link   http://dean.edwards.name/weblog/2006/06/again/
 */
window.fireoninit = function() {
  // quit if this function has already been called
  if (arguments.callee.done) return;
  // flag this function so we don't do the same thing twice
  arguments.callee.done = true;
  // kill the timer
  if (_timer) {
     clearInterval(_timer);
     _timer = null;
  }

  if (typeof window.oninit == 'function') {
        window.oninit();
  }
};

/**
 * Run the fireoninit function as soon as possible after
 * the DOM was loaded, using different methods for different
 * Browsers
 *
 * @author Dean Edwards
 * @link   http://dean.edwards.name/weblog/2006/06/again/
 */
  // for Mozilla
  if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", window.fireoninit, null);
  }

  // for Internet Explorer (using conditional comments)
  /*@cc_on
    @if (@_win32)
    document.write("<scr" + "ipt id=\"__ie_init\" defer=\"true\" src=\"//:\"><\/script>");
    var script = document.getElementById("__ie_init");
    script.onreadystatechange = function() {
        if (this.readyState == "complete") {
            window.fireoninit(); // call the onload handler
        }
    };
    @end @*/

  // for Safari
  if (/WebKit/i.test(navigator.userAgent)) { // sniff
    var _timer = setInterval(function() {
        if (/loaded|complete/.test(document.readyState)) {
            window.fireoninit(); // call the onload handler
        }
    }, 10);
  }

  // for other browsers
  window.onload = window.fireoninit;


/**
 * This is a pseudo Event that will be fired by the fireoninit
 * function above.
 *
 * Use addInitEvent to bind to this event!
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 * @see fireoninit()
 */
window.oninit = function(){};

/**
 * Bind a function to the window.init pseudo event
 *
 * @author Simon Willison
 * @see http://simon.incutio.com/archive/2004/05/26/addLoadEvent
 */
function addInitEvent(func) {
  var oldoninit = window.oninit;
  if (typeof window.oninit != 'function') {
    window.oninit = func;
  } else {
    window.oninit = function() {
      oldoninit();
      func();
    };
  }
}

/**
 * Bind variables to a function call creating a closure
 *
 * Use this to circumvent variable scope problems when creating closures
 * inside a loop
 *
 * @author  Adrian Lang <lang@cosmocode.de>
 * @link    http://www.cosmocode.de/en/blog/gohr/2009-10/15-javascript-fixing-the-closure-scope-in-loops
 * @param   functionref fnc - the function to be called
 * @param   mixed - any arguments to be passed to the function
 * @returns functionref
 */
function bind (fnc) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
        return fnc.apply(this, args);
    };
}


/* XXXXXXXXXX end of lib/scripts/events.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/delay.js XXXXXXXXXX */

/**
 * Manage delayed and timed actions
 *
 * @license GPL2 (http://www.gnu.org/licenses/gpl.html)
 * @author  Adrian Lang <lang@cosmocode.de>
 */

/**
 * Provide a global callback for window.setTimeout
 *
 * To get a timeout for non-global functions, just call
 * delay.add(func, timeout).
 */
var timer = {
    _cur_id: 0,
    _handlers: {},

    execDispatch: function (id) {
        timer._handlers[id]();
    },

    add: function (func, timeout) {
        var id = ++timer._cur_id;
        timer._handlers[id] = func;
        return window.setTimeout('timer.execDispatch(' + id + ')', timeout);
    }
};

/**
 * Provide a delayed start
 *
 * To call a function with a delay, just create a new Delay(func, timeout) and
 * call that object’s method “start”.
 */
function Delay (func, timeout) {
    this.func = func;
    if (timeout) {
        this.timeout = timeout;
    }
}

Delay.prototype = {
    func: null,
    timeout: 500,

    delTimer: function () {
        if (this.timer !== null) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    },

    start: function () {
        this.delTimer();
        var _this = this;
        this.timer = timer.add(function () { _this.exec.call(_this); },
                               this.timeout);

        this._data = {
            _this: arguments[0],
            _params: Array.prototype.slice.call(arguments, 2)
        };
    },

    exec: function () {
        this.delTimer();
        this.func.call(this._data._this, this._data._params);
    }
};


/* XXXXXXXXXX end of lib/scripts/delay.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/cookie.js XXXXXXXXXX */

/**
 * Handles the cookie used by several JavaScript functions
 *
 * Only a single cookie is written and read. You may only save
 * sime name-value pairs - no complex types!
 *
 * You should only use the getValue and setValue methods
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
DokuCookie = {
    data: Array(),
    name: 'DOKU_PREFS',

    /**
     * Save a value to the cookie
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    setValue: function(key,val){
        DokuCookie.init();
        DokuCookie.data[key] = val;

        // prepare expire date
        var now = new Date();
        DokuCookie.fixDate(now);
        now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000); //expire in a year

        //save the whole data array
        var text = '';
        for(var key in DokuCookie.data){
            if (!DokuCookie.data.hasOwnProperty(key)) continue;
            text += '#'+escape(key)+'#'+DokuCookie.data[key];
        }
        DokuCookie.setCookie(DokuCookie.name,text.substr(1),now,DOKU_BASE);
    },

    /**
     * Get a Value from the Cookie
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    getValue: function(key){
        DokuCookie.init();
        return DokuCookie.data[key];
    },

    /**
     * Loads the current set cookie
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    init: function(){
        if(DokuCookie.data.length) return;
        var text  = DokuCookie.getCookie(DokuCookie.name);
        if(text){
            var parts = text.split('#');
            for(var i=0; i<parts.length; i+=2){
                DokuCookie.data[unescape(parts[i])] = unescape(parts[i+1]);
            }
        }
    },

    /**
     * This sets a cookie by JavaScript
     *
     * @link http://www.webreference.com/js/column8/functions.html
     */
    setCookie: function(name, value, expires, path, domain, secure) {
        var curCookie = name + "=" + escape(value) +
            ((expires) ? "; expires=" + expires.toGMTString() : "") +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            ((secure) ? "; secure" : "");
        document.cookie = curCookie;
    },

    /**
     * This reads a cookie by JavaScript
     *
     * @link http://www.webreference.com/js/column8/functions.html
     */
    getCookie: function(name) {
        var dc = document.cookie;
        var prefix = name + "=";
        var begin = dc.indexOf("; " + prefix);
        if (begin == -1) {
            begin = dc.indexOf(prefix);
            if (begin !== 0){ return null; }
        } else {
            begin += 2;
        }
        var end = document.cookie.indexOf(";", begin);
        if (end == -1){
            end = dc.length;
        }
        return unescape(dc.substring(begin + prefix.length, end));
    },

    /**
     * This is needed for the cookie functions
     *
     * @link http://www.webreference.com/js/column8/functions.html
     */
    fixDate: function(date) {
        var base = new Date(0);
        var skew = base.getTime();
        if (skew > 0){
            date.setTime(date.getTime() - skew);
        }
    }
};


/* XXXXXXXXXX end of lib/scripts/cookie.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/script.js XXXXXXXXXX */

/**
 * Some of these scripts were taken from wikipedia.org and were modified for DokuWiki
 */

/**
 * Some browser detection
 */
var clientPC  = navigator.userAgent.toLowerCase(); // Get client info
var is_macos  = navigator.appVersion.indexOf('Mac') != -1;
var is_gecko  = ((clientPC.indexOf('gecko')!=-1) && (clientPC.indexOf('spoofer')==-1) &&
                (clientPC.indexOf('khtml') == -1) && (clientPC.indexOf('netscape/7.0')==-1));
var is_safari = ((clientPC.indexOf('applewebkit')!=-1) && (clientPC.indexOf('spoofer')==-1));
var is_khtml  = (navigator.vendor == 'KDE' || ( document.childNodes && !document.all && !navigator.taintEnabled ));
if (clientPC.indexOf('opera')!=-1) {
    var is_opera = true;
    var is_opera_preseven = (window.opera && !document.childNodes);
    var is_opera_seven = (window.opera && document.childNodes);
}

/**
 * Handy shortcut to document.getElementById
 *
 * This function was taken from the prototype library
 *
 * @link http://prototype.conio.net/
 */
function $() {
  var elements = new Array();

  for (var i = 0; i < arguments.length; i++) {
    var element = arguments[i];
    if (typeof element == 'string')
      element = document.getElementById(element);

    if (arguments.length == 1)
      return element;

    elements.push(element);
  }

  return elements;
}

/**
 * Simple function to check if a global var is defined
 *
 * @author Kae Verens
 * @link http://verens.com/archives/2005/07/25/isset-for-javascript/#comment-2835
 */
function isset(varname){
  return(typeof(window[varname])!='undefined');
}

/**
 * Select elements by their class name
 *
 * @author Dustin Diaz <dustin [at] dustindiaz [dot] com>
 * @link   http://www.dustindiaz.com/getelementsbyclass/
 */
function getElementsByClass(searchClass,node,tag) {
    var classElements = new Array();
    if ( node == null )
        node = document;
    if ( tag == null )
        tag = '*';
    var els = node.getElementsByTagName(tag);
    var elsLen = els.length;
    var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
    for (var i = 0, j = 0; i < elsLen; i++) {
        if ( pattern.test(els[i].className) ) {
            classElements[j] = els[i];
            j++;
        }
    }
    return classElements;
}

/**
 * Get the X offset of the top left corner of the given object
 *
 * @link http://www.quirksmode.org/js/findpos.html
 */
function findPosX(object){
  var curleft = 0;
  var obj = $(object);
  if (obj.offsetParent){
    do {
      curleft += obj.offsetLeft;
    } while (obj = obj.offsetParent);
  }
  else if (obj.x){
    curleft += obj.x;
  }
  return curleft;
} //end findPosX function

/**
 * Get the Y offset of the top left corner of the given object
 *
 * @link http://www.quirksmode.org/js/findpos.html
 */
function findPosY(object){
  var curtop = 0;
  var obj = $(object);
  if (obj.offsetParent){
    do {
      curtop += obj.offsetTop;
    } while (obj = obj.offsetParent);
  }
  else if (obj.y){
    curtop += obj.y;
  }
  return curtop;
} //end findPosY function

/**
 * Escape special chars in JavaScript
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function jsEscape(text){
    var re=new RegExp("\\\\","g");
    text=text.replace(re,"\\\\");
    re=new RegExp("'","g");
    text=text.replace(re,"\\'");
    re=new RegExp('"',"g");
    text=text.replace(re,'&quot;');
    re=new RegExp("\\\\\\\\n","g");
    text=text.replace(re,"\\n");
    return text;
}

/**
 * This function escapes some special chars
 * @deprecated by above function
 */
function escapeQuotes(text) {
  var re=new RegExp("'","g");
  text=text.replace(re,"\\'");
  re=new RegExp('"',"g");
  text=text.replace(re,'&quot;');
  re=new RegExp("\\n","g");
  text=text.replace(re,"\\n");
  return text;
}

/**
 * Adds a node as the first childenode to the given parent
 *
 * @see appendChild()
 */
function prependChild(parent,element) {
    if(!parent.firstChild){
        parent.appendChild(element);
    }else{
        parent.insertBefore(element,parent.firstChild);
    }
}

/**
 * Prints a animated gif to show the search is performed
 *
 * Because we need to modify the DOM here before the document is loaded
 * and parsed completely we have to rely on document.write()
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function showLoadBar(){

  document.write('<img src="'+DOKU_BASE+'lib/images/loading.gif" '+
                 'width="150" height="12" alt="..." />');

  /* this does not work reliable in IE
  obj = $(id);

  if(obj){
    obj.innerHTML = '<img src="'+DOKU_BASE+'lib/images/loading.gif" '+
                    'width="150" height="12" alt="..." />';
    obj.style.display="block";
  }
  */
}

/**
 * Disables the animated gif to show the search is done
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function hideLoadBar(id){
  obj = $(id);
  if(obj) obj.style.display="none";
}

/**
 * Adds the toggle switch to the TOC
 */
function addTocToggle() {
    if(!document.getElementById) return;
    var header = $('toc__header');
    if(!header) return;
    var toc = $('toc__inside');

    var obj          = document.createElement('span');
    obj.id           = 'toc__toggle';
    obj.style.cursor = 'pointer';
    if (toc && toc.style.display == 'none') {
        obj.innerHTML    = '<span>+</span>';
        obj.className    = 'toc_open';
    } else {
        obj.innerHTML    = '<span>&minus;</span>';
        obj.className    = 'toc_close';
    }

    prependChild(header,obj);
    obj.parentNode.onclick = toggleToc;
    obj.parentNode.style.cursor = 'pointer';
}

/**
 * This toggles the visibility of the Table of Contents
 */
function toggleToc() {
  var toc = $('toc__inside');
  var obj = $('toc__toggle');
  if(toc.style.display == 'none') {
    toc.style.display   = '';
    obj.innerHTML       = '<span>&minus;</span>';
    obj.className       = 'toc_close';
  } else {
    toc.style.display   = 'none';
    obj.innerHTML       = '<span>+</span>';
    obj.className       = 'toc_open';
  }
}

/**
 * Create JavaScript mouseover popup
 */
function insitu_popup(target, popup_id) {

    // get or create the popup div
    var fndiv = $(popup_id);
    if(!fndiv){
        fndiv = document.createElement('div');
        fndiv.id        = popup_id;
        fndiv.className = 'insitu-footnote JSpopup dokuwiki';

        // autoclose on mouseout - ignoring bubbled up events
        addEvent(fndiv,'mouseout',function(e){
            var p = e.relatedTarget || e.toElement;
            while (p && p !== this) {
                p = p.parentNode;
            }
            if (p === this) {
                return;
            }
            // okay, hide it
            this.style.display='none';
        });
        getElementsByClass('dokuwiki', document.body, 'div')[0].appendChild(fndiv);
    }

    // position the div and make it visible
    fndiv.style.position = 'absolute';
    fndiv.style.left = findPosX(target)+'px';
    fndiv.style.top  = (findPosY(target)+target.offsetHeight * 1.5) + 'px';
    fndiv.style.display = '';
    return fndiv;
}

/**
 * Display an insitu footnote popup
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 * @author Chris Smith <chris@jalakai.co.uk>
 */
function footnote(e){
    var fndiv = insitu_popup(e.target, 'insitu__fn');

    // locate the footnote anchor element
    var a = $("fn__" + e.target.id.substr(5));
    if (!a){ return; }

    // anchor parent is the footnote container, get its innerHTML
    var content = new String (a.parentNode.parentNode.innerHTML);

    // strip the leading content anchors and their comma separators
    content = content.replace(/<sup>.*<\/sup>/gi, '');
    content = content.replace(/^\s+(,\s+)+/,'');

    // prefix ids on any elements with "insitu__" to ensure they remain unique
    content = content.replace(/\bid=(['"])([^"']+)\1/gi,'id="insitu__$2');

    // now put the content into the wrapper
    fndiv.innerHTML = content;
}

/**
 * Add the event handlers to footnotes
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
addInitEvent(function(){
    var elems = getElementsByClass('fn_top',null,'a');
    for(var i=0; i<elems.length; i++){
        addEvent(elems[i],'mouseover',function(e){footnote(e);});
    }
});

/**
 * Add the edit window size controls
 */
function initSizeCtl(ctlid,edid){
    if(!document.getElementById){ return; }

    var ctl      = $(ctlid);
    var textarea = $(edid);
    if(!ctl || !textarea) return;

    var hgt = DokuCookie.getValue('sizeCtl');
    if(hgt){
      textarea.style.height = hgt;
    }else{
      textarea.style.height = '300px';
    }

    var wrp = DokuCookie.getValue('wrapCtl');
    if(wrp){
      setWrap(textarea, wrp);
    } // else use default value

    var l = document.createElement('img');
    var s = document.createElement('img');
    var w = document.createElement('img');
    l.src = DOKU_BASE+'lib/images/larger.gif';
    s.src = DOKU_BASE+'lib/images/smaller.gif';
    w.src = DOKU_BASE+'lib/images/wrap.gif';
    addEvent(l,'click',function(){sizeCtl(edid,100);});
    addEvent(s,'click',function(){sizeCtl(edid,-100);});
    addEvent(w,'click',function(){toggleWrap(edid);});
    ctl.appendChild(l);
    ctl.appendChild(s);
    ctl.appendChild(w);
}

/**
 * This sets the vertical size of the editbox
 */
function sizeCtl(edid,val){
  var textarea = $(edid);
  var height = parseInt(textarea.style.height.substr(0,textarea.style.height.length-2));
  height += val;
  textarea.style.height = height+'px';

  DokuCookie.setValue('sizeCtl',textarea.style.height);
}

/**
 * Toggle the wrapping mode of a textarea
 */
function toggleWrap(edid){
    var textarea = $(edid);
    var wrap = textarea.getAttribute('wrap');
    if(wrap && wrap.toLowerCase() == 'off'){
        setWrap(textarea, 'soft');
    }else{
        setWrap(textarea, 'off');
    }

    DokuCookie.setValue('wrapCtl',textarea.getAttribute('wrap'));
}

/**
 * Set the wrapping mode of a textarea
 *
 * @author Fluffy Convict <fluffyconvict@hotmail.com>
 * @author <shutdown@flashmail.com>
 * @link   http://news.hping.org/comp.lang.javascript.archive/12265.html
 * @link   https://bugzilla.mozilla.org/show_bug.cgi?id=41464
 */
function setWrap(textarea, wrapAttrValue){
    textarea.setAttribute('wrap', wrapAttrValue);

    // Fix display for mozilla
    var parNod = textarea.parentNode;
    var nxtSib = textarea.nextSibling;
    parNod.removeChild(textarea);
    parNod.insertBefore(textarea, nxtSib);
}

/**
 * Handler to close all open Popups
 */
function closePopups(){
  if(!document.getElementById){ return; }

  var divs = document.getElementsByTagName('div');
  for(var i=0; i < divs.length; i++){
    if(divs[i].className.indexOf('JSpopup') != -1){
            divs[i].style.display = 'none';
    }
  }
}

/**
 * Looks for an element with the ID scroll__here at scrolls to it
 */
function scrollToMarker(){
    var obj = $('scroll__here');
    if(obj) obj.scrollIntoView();
}

/**
 * Looks for an element with the ID focus__this at sets focus to it
 */
function focusMarker(){
    var obj = $('focus__this');
    if(obj) obj.focus();
}

/**
 * Remove messages
 */
function cleanMsgArea(){
    var elems = getElementsByClass('(success|info|error)',document,'div');
    if(elems){
        for(var i=0; i<elems.length; i++){
            elems[i].style.display = 'none';
        }
    }
}

/**
 * disable multiple revisions checkboxes if two are checked
 *
 * @author Anika Henke <anika@selfthinker.org>
 */
addInitEvent(function(){
    var revForm = $('page__revisions');
    if (!revForm) return;
    var elems = revForm.elements;
    var countTicks = 0;
    for (var i=0; i<elems.length; i++) {
        var input1 = elems[i];
        if (input1.type=='checkbox') {
            addEvent(input1,'click',function(e){
                if (this.checked) countTicks++;
                else countTicks--;
                for (var j=0; j<elems.length; j++) {
                    var input2 = elems[j];
                    if (countTicks >= 2) input2.disabled = (input2.type=='checkbox' && !input2.checked);
                    else input2.disabled = (input2.type!='checkbox');
                }
            });
            input1.checked = false; // chrome reselects on back button which messes up the logic
        } else if(input1.type=='submit'){
            input1.disabled = true;
        }
    }
});

/**
 * Add the event handler to the actiondropdown
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
addInitEvent(function(){
    var selector = $('action__selector');
    if(!selector) return;

    addEvent(selector,'change',function(e){
        this.form.submit();
    });

    $('action__selectorbtn').style.display = 'none';
});

/**
 * Display error for Windows Shares on browsers other than IE
 *
 * @author Michael Klier <chi@chimeric.de>
 */
function checkWindowsShares() {
    if(!LANG['nosmblinks']) return true;
    if(document.all != null) return true;

    var elems = getElementsByClass('windows',document,'a');
    if(elems){
        for(var i=0; i<elems.length; i++){
            var share = elems[i];
            addEvent(share,'click',function(){
                alert(LANG['nosmblinks']);
            });
        }
    }
}

/**
 * Add the event handler for the Windows Shares check
 *
 * @author Michael Klier <chi@chimeric.de>
 */
addInitEvent(function(){
    checkWindowsShares();
});

/**
 * Highlight the section when hovering over the appropriate section edit button
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
addInitEvent(function(){
    var btns = getElementsByClass('btn_secedit',document,'form');
    for(var i=0; i<btns.length; i++){
        addEvent(btns[i],'mouseover',function(e){
            var tgt = this.parentNode;
            var nr = tgt.className.match(/(\s+|^)editbutton_(\d+)(\s+|$)/)[2];
            do {
                tgt = tgt.previousSibling;
            } while (tgt !== null && typeof tgt.tagName === 'undefined');
            if (tgt === null) return;
            while(typeof tgt.className === 'undefined' ||
                  tgt.className.match('(\\s+|^)sectionedit' + nr + '(\\s+|$)') === null) {
                if (typeof tgt.className !== 'undefined') {
                    tgt.className += ' section_highlight';
                }
                tgt = (tgt.previousSibling !== null) ? tgt.previousSibling : tgt.parentNode;
            }
            if (typeof tgt.className !== 'undefined') tgt.className += ' section_highlight';
        });

        addEvent(btns[i],'mouseout',function(e){
            var secs = getElementsByClass('section_highlight');
            for(var j=0; j<secs.length; j++){
                secs[j].className = secs[j].className.replace(/section_highlight/g,'');
            }
        });
    }
});



/* XXXXXXXXXX end of lib/scripts/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/tw-sack.js XXXXXXXXXX */

/* Simple AJAX Code-Kit (SACK) */
/* ©2005 Gregory Wild-Smith */
/* www.twilightuniverse.com */
/* Software licenced under a modified X11 licence, see documentation or authors website for more details */

function sack(file){
  this.AjaxFailedAlert = "Your browser does not support the enhanced functionality of this website, and therefore you will have an experience that differs from the intended one.\n";
  this.requestFile = file;
  this.method = "POST";
  this.URLString = "";
  this.encodeURIString = true;
  this.execute = false;
  this.asynchronous = true;

  this.onLoading = function() { };
  this.onLoaded = function() { };
  this.onInteractive = function() { };
  this.onCompletion = function() { };
  this.afterCompletion = function() { };

  this.createAJAX = function() {
    try {
      this.xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (err) {
        this.xmlhttp = null;
      }
    }
    if(!this.xmlhttp && typeof XMLHttpRequest != "undefined"){
      this.xmlhttp = new XMLHttpRequest();
    }
    if (!this.xmlhttp){
      this.failed = true;
    }
  };

  this.setVar = function(name, value){
    if (this.URLString.length < 3){
      this.URLString = name + "=" + value;
    } else {
      this.URLString += "&" + name + "=" + value;
    }
  };

  this.encVar = function(name, value){
    var varString = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  return varString;
  };

  this.encodeURLString = function(string){
    varArray = string.split('&');
    for (i = 0; i < varArray.length; i++){
      urlVars = varArray[i].split('=');
      if (urlVars[0].indexOf('amp;') != -1){
        urlVars[0] = urlVars[0].substring(4);
      }
      varArray[i] = this.encVar(urlVars[0],urlVars[1]);
    }
  return varArray.join('&');
  };

  this.runResponse = function(){
    eval(this.response);
  };

  this.runAJAX = function(urlstring){
    this.responseStatus = new Array(2);
    if(this.failed && this.AjaxFailedAlert){
      alert(this.AjaxFailedAlert);
    } else {
      if (urlstring){
        if (this.URLString.length){
          this.URLString = this.URLString + "&" + urlstring;
        } else {
          this.URLString = urlstring;
        }
      }
      if (this.encodeURIString){
        var timeval = new Date().getTime();
        this.URLString = this.encodeURLString(this.URLString);
        this.setVar("rndval", timeval);
      }
      if (this.element) { this.elementObj = document.getElementById(this.element); }
      if (this.xmlhttp) {
        var self = this;
        if (this.method == "GET") {
          var totalurlstring = this.requestFile + "?" + this.URLString;
          this.xmlhttp.open(this.method, totalurlstring, this.asynchronous);
        } else {
          this.xmlhttp.open(this.method, this.requestFile, this.asynchronous);
        }
        if (this.method == "POST"){
          try {
             this.xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
          } catch (e) {}
        }

        this.xmlhttp.onreadystatechange = function() {
          switch (self.xmlhttp.readyState){
            case 1:
              self.onLoading();
            break;
            case 2:
              self.onLoaded();
            break;
            case 3:
              self.onInteractive();
            break;
            case 4:
              self.response = self.xmlhttp.responseText;
              self.responseXML = self.xmlhttp.responseXML;
              self.responseStatus[0] = self.xmlhttp.status;
              self.responseStatus[1] = self.xmlhttp.statusText;
              self.onCompletion();
              if(self.execute){ self.runResponse(); }
              if (self.elementObj) {
                var elemNodeName = self.elementObj.nodeName;
                elemNodeName.toLowerCase();
                if (elemNodeName == "input" || elemNodeName == "select" || elemNodeName == "option" || elemNodeName == "textarea"){
                  self.elementObj.value = self.response;
                } else {
                  self.elementObj.innerHTML = self.response;
                }
              }
              self.afterCompletion();
              self.URLString = "";
            break;
          }
        };
        this.xmlhttp.send(this.URLString);
      }
    }
  };
this.createAJAX();
}


/* XXXXXXXXXX end of lib/scripts/tw-sack.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/ajax.js XXXXXXXXXX */

/**
 * AJAX functions for the pagename quicksearch
 *
 * @license  GPL2 (http://www.gnu.org/licenses/gpl.html)
 * @author   Andreas Gohr <andi@splitbrain.org>
 * @author   Adrian Lang <lang@cosmocode.de>
 */
addInitEvent(function () {

    var inID  = 'qsearch__in';
    var outID = 'qsearch__out';

    var inObj  = document.getElementById(inID);
    var outObj = document.getElementById(outID);

    // objects found?
    if (inObj === null){ return; }
    if (outObj === null){ return; }

    function clear_results(){
        outObj.style.display = 'none';
        outObj.innerHTML = '';
    }

    var sack_obj = new sack(DOKU_BASE + 'lib/exe/ajax.php');
    sack_obj.AjaxFailedAlert = '';
    sack_obj.encodeURIString = false;
    sack_obj.onCompletion = function () {
        var data = sack_obj.response;
        if (data === '') { return; }

        outObj.innerHTML = data;
        outObj.style.display = 'block';
    };

    // attach eventhandler to search field
    var delay = new Delay(function () {
        clear_results();
        var value = inObj.value;
        if(value === ''){ return; }
        sack_obj.runAJAX('call=qsearch&q=' + encodeURI(value));
    });

    addEvent(inObj, 'keyup', function () {clear_results(); delay.start(); });

    // attach eventhandler to output field
    addEvent(outObj, 'click', function () {outObj.style.display = 'none'; });
});


/* XXXXXXXXXX end of lib/scripts/ajax.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/index.js XXXXXXXXXX */

/**
 * Javascript for index view
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */

var index = {

     /**
     * Delay in ms before showing the throbber.
     * Used to skip the throbber for fast AJAX calls.
     */
    throbber_delay: 500,

    /**
     * Attach event handlers to all "folders" below the given element
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    treeattach: function(obj){
        if(!obj) return;

        var items = getElementsByClass('idx_dir',obj,'a');
        for(var i=0; i<items.length; i++){
            var elem = items[i];

            // attach action to make the link clickable by AJAX
            addEvent(elem,'click',function(e){ return index.toggle(e,this); });

            // get the listitem the elem belongs to
            var listitem = elem.parentNode;
            while (listitem.tagName != 'LI') {
              listitem = listitem.parentNode;
            }
            //when there are uls under this listitem mark this listitem as opened
            if (listitem.getElementsByTagName('ul').length) {
              listitem.open = true;
            }
        }
    },

    /**
     * Open or close a subtree using AJAX
     * The contents of subtrees are "cached" untill the page is reloaded.
     * A "loading" indicator is shown only when the AJAX call is slow.
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     * @author Ben Coburn <btcoburn@silicodon.net>
     */
    toggle: function(e,clicky){
        var listitem = clicky.parentNode.parentNode;

        listitem.open = !listitem.open;
        // listitem.open represents now the action to be done

        // if already open, close by removing the sublist
        var sublists = listitem.getElementsByTagName('ul');
        if(!listitem.open){
            if (sublists.length) {
              sublists[0].style.display='none';
            }
            listitem.className='closed';
            e.preventDefault();
            return false;
        }

        // just show if already loaded
        if(sublists.length && listitem.open){
            sublists[0].style.display='';
            listitem.className='open';
            e.preventDefault();
            return false;
        }

        // prepare an AJAX call to fetch the subtree
        var ajax = new sack(DOKU_BASE + 'lib/exe/ajax.php');
        ajax.AjaxFailedAlert = '';
        ajax.encodeURIString = false;
        if(ajax.failed) return true;

        //prepare the new ul
        var ul = document.createElement('ul');
        ul.className = 'idx';
        timeout = window.setTimeout(function(){
            // show the throbber as needed
            if (listitem.open) {
              ul.innerHTML = '<li><img src="'+DOKU_BASE+'lib/images/throbber.gif" alt="loading..." title="loading..." /></li>';
              listitem.appendChild(ul);
              listitem.className='open';
            }
        }, this.throbber_delay);
        ajax.elementObj = ul;
        ajax.afterCompletion = function(){
            window.clearTimeout(timeout);
            index.treeattach(ul);
            if (listitem.className!='open') {
              if (!listitem.open) {
                ul.style.display='none';
              }
              listitem.appendChild(ul);
              if (listitem.open) {
                listitem.className='open';
              }
            }
        };
        ajax.runAJAX(clicky.search.substr(1)+'&call=index');
        e.preventDefault();
        return false;
    }
};


addInitEvent(function(){
    index.treeattach($('index__tree'));
});


/* XXXXXXXXXX end of lib/scripts/index.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/drag.js XXXXXXXXXX */

/**
 * Makes a DOM object draggable
 *
 * If you just want to move objects around, use drag.attach. For full
 * customization, drag can be used as a javascript prototype, it is
 * inheritance-aware.
 *
 * @link http://nofunc.org/Drag_Drop/
 */
var drag = {
    obj: null,
    handle: null,
    oX: 0,  // object X position
    oY: 0,  // object Y position
    eX: 0,  // event X delta
    eY: 0,  // event Y delta

    /**
     * Attaches the needed handlers to the given object
     *
     * This can be called for multiple objects, the right one is later
     * determined from the event itself. The handle is optional
     *
     * @param DOMObject obj    The object that should be draggable
     * @param DOMObject handle A handle on which the obj can be dragged
     */
    attach: function (obj,handle) {
        if(handle){
            handle.dragobject = obj;
        }else{
            handle = obj;
        }
        var _this = this;
        addEvent($(handle),'mousedown',function (e) {return _this.start(e); });
    },

    /**
     * Starts the dragging operation
     */
    start: function (e){
        this.handle = e.target;
        if(this.handle.dragobject){
            this.obj = this.handle.dragobject;
        }else{
            this.obj = this.handle;
        }

        this.handle.className += ' ondrag';
        this.obj.className    += ' ondrag';

        this.oX = parseInt(this.obj.style.left);
        this.oY = parseInt(this.obj.style.top);
        this.eX = e.pageX;
        this.eY = e.pageY;

        var _this = this;
        this.mousehandlers = [function (e) {return _this.drag(e);}, function (e) {return _this.stop(e);}];
        addEvent(document,'mousemove', this.mousehandlers[0]);
        addEvent(document,'mouseup', this.mousehandlers[1]);

        return false;
    },

    /**
     * Ends the dragging operation
     */
    stop: function(){
        this.handle.className = this.handle.className.replace(/ ?ondrag/,'');
        this.obj.className    = this.obj.className.replace(/ ?ondrag/,'');
        removeEvent(document,'mousemove', this.mousehandlers[0]);
        removeEvent(document,'mouseup', this.mousehandlers[1]);
        this.obj = null;
        this.handle = null;
    },

    /**
     * Moves the object during the dragging operation
     */
    drag: function(e) {
        if(this.obj) {
            this.obj.style.top  = (e.pageY+this.oY-this.eY+'px');
            this.obj.style.left = (e.pageX+this.oX-this.eX+'px');
        }
    }
};


/* XXXXXXXXXX end of lib/scripts/drag.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/textselection.js XXXXXXXXXX */

/**
 * Text selection related functions.
 */

/**
 * selection prototype
 *
 * Object that capsulates the selection in a textarea. Returned by getSelection.
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function selection_class(){
    this.start     = 0;
    this.end       = 0;
    this.obj       = null;
    this.rangeCopy = null;
    this.scroll    = 0;
    this.fix       = 0;

    this.getLength = function(){
        return this.end - this.start;
    };

    this.getText = function(){
        if(!this.obj) return '';
        return this.obj.value.substring(this.start,this.end);
    };
}

/**
 * Get current selection/cursor position in a given textArea
 *
 * @link   http://groups.drupal.org/node/1210
 * @author Andreas Gohr <andi@splitbrain.org>
 * @link   http://linebyline.blogspot.com/2006/11/textarea-cursor-position-in-internet.html
 * @returns object - a selection object
 */
function getSelection(textArea) {
    var sel = new selection_class();

    sel.obj   = textArea;
    sel.start = textArea.value.length;
    sel.end   = textArea.value.length;
    textArea.focus();
    if(document.getSelection) {          // Mozilla et al.
        sel.start  = textArea.selectionStart;
        sel.end    = textArea.selectionEnd;
        sel.scroll = textArea.scrollTop;
    } else if(document.selection) {      // MSIE
        /*
         * This huge lump of code is neccessary to work around two MSIE bugs:
         *
         * 1. Selections trim newlines at the end of the code
         * 2. Selections count newlines as two characters
         */

        // The current selection
        sel.rangeCopy = document.selection.createRange().duplicate();
        if (textArea.tagName === 'INPUT')  {
            var before_range = textArea.createTextRange();
            before_range.expand('textedit');                       // Selects all the text
        } else {
            var before_range = document.body.createTextRange();
            before_range.moveToElementText(textArea);              // Selects all the text
        }
        before_range.setEndPoint("EndToStart", sel.rangeCopy);     // Moves the end where we need it

        var before_finished = false, selection_finished = false;
        var before_text, selection_text;
        // Load the text values we need to compare
        before_text  = before_range.text;
        selection_text = sel.rangeCopy.text;

        sel.start = before_text.length;
        sel.end   = sel.start + selection_text.length;

        // Check each range for trimmed newlines by shrinking the range by 1 character and seeing
        // if the text property has changed.  If it has not changed then we know that IE has trimmed
        // a \r\n from the end.
        do {
            if (!before_finished) {
                if (before_range.compareEndPoints("StartToEnd", before_range) == 0) {
                    before_finished = true;
                } else {
                    before_range.moveEnd("character", -1);
                    if (before_range.text == before_text) {
                        sel.start += 2;
                        sel.end += 2;
                    } else {
                        before_finished = true;
                    }
                }
            }
            if (!selection_finished) {
                if (sel.rangeCopy.compareEndPoints("StartToEnd", sel.rangeCopy) == 0) {
                    selection_finished = true;
                } else {
                    sel.rangeCopy.moveEnd("character", -1);
                    if (sel.rangeCopy.text == selection_text) {
                        sel.end += 2;
                    } else {
                        selection_finished = true;
                    }
                }
            }
        } while ((!before_finished || !selection_finished));


        // count number of newlines in str to work around stupid IE selection bug
        var countNL = function(str) {
            var m = str.split("\r\n");
            if (!m || !m.length) return 0;
            return m.length-1;
        };
        sel.fix = countNL(sel.obj.value.substring(0,sel.start));

    }
    return sel;
}

/**
 * Set the selection
 *
 * You need to get a selection object via getSelection() first, then modify the
 * start and end properties and pass it back to this function.
 *
 * @link http://groups.drupal.org/node/1210
 * @author Andreas Gohr <andi@splitbrain.org>
 * @param object selection - a selection object as returned by getSelection()
 */
function setSelection(selection){
    if(document.getSelection){ // FF
        // what a pleasure in FF ;)
        selection.obj.setSelectionRange(selection.start,selection.end);
        if(selection.scroll) selection.obj.scrollTop = selection.scroll;
    } else if(document.selection) { // IE
        selection.rangeCopy.collapse(true);
        selection.rangeCopy.moveStart('character',selection.start - selection.fix);
        selection.rangeCopy.moveEnd('character',selection.end - selection.start);
        selection.rangeCopy.select();
    }
}

/**
 * Inserts the given text at the current cursor position or replaces the current
 * selection
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 * @param string text          - the new text to be pasted
 * @param objct  selecttion    - selection object returned by getSelection
 * @param int    opts.startofs - number of charcters at the start to skip from new selection
 * @param int    opts.endofs   - number of characters at the end to skip from new selection
 * @param bool   opts.nosel    - set true if new text should not be selected
 */
function pasteText(selection,text,opts){
    if(!opts) opts = {};
    // replace the content

    selection.obj.value =
        selection.obj.value.substring(0, selection.start) + text +
        selection.obj.value.substring(selection.end, selection.obj.value.length);

    // set new selection
    if (is_opera) {
        // Opera replaces \n by \r\n when inserting text.
        selection.end = selection.start + text.replace(/\r?\n/g, '\r\n').length;
    } else {
        selection.end = selection.start + text.length;
    }

    // modify the new selection if wanted
    if(opts.startofs) selection.start += opts.startofs;
    if(opts.endofs)   selection.end   -= opts.endofs;

    // no selection wanted? set cursor to end position
    if(opts.nosel) selection.start = selection.end;

    setSelection(selection);
}


/**
 * Format selection
 *
 * Apply tagOpen/tagClose to selection in textarea, use sampleText instead
 * of selection if there is none.
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function insertTags(textAreaID, tagOpen, tagClose, sampleText){
    var txtarea = $(textAreaID);

    var selection = getSelection(txtarea);
    var text = selection.getText();
    var opts;

    // don't include trailing space in selection
    if(text.charAt(text.length - 1) == ' '){
        selection.end--;
        text = selection.getText();
    }

    if(!text){
        // nothing selected, use the sample text and select it
        text = sampleText;
        opts = {
            startofs: tagOpen.length,
            endofs: tagClose.length
        };
    }else{
        // place cursor at the end
        opts = {
            nosel: true
        };
    }

    // surround with tags
    text = tagOpen + text + tagClose;

    // do it
    pasteText(selection,text,opts);
}

/**
 * Wraps around pasteText() for backward compatibility
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function insertAtCarret(textAreaID, text){
    var txtarea = $(textAreaID);
    var selection = getSelection(txtarea);
    pasteText(selection,text,{nosel: true});
}



/* XXXXXXXXXX end of lib/scripts/textselection.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/toolbar.js XXXXXXXXXX */


// used to identify pickers
var pickercounter=0;

/**
 * Create a toolbar
 *
 * @param  string tbid       ID of the element where to insert the toolbar
 * @param  string edid       ID of the editor textarea
 * @param  array  tb         Associative array defining the buttons
 * @param  bool   allowblock Allow buttons creating multiline content
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function initToolbar(tbid,edid,tb, allowblock){
    var toolbar = $(tbid);
    if(!toolbar) return;
    var edit = $(edid);
    if(!edit) return;
    if(edit.readOnly) return;

    if (typeof allowblock === 'undefined') {
        allowblock = true;
    }

    //empty the toolbar area:
    toolbar.innerHTML='';

    var cnt = tb.length;
    for(var i=0; i<cnt; i++){
        if (!allowblock && tb[i].block === true) {
            continue;
        }
        var actionFunc;

        // create new button
        var btn = createToolButton(tb[i]['icon'],
                                   tb[i]['title'],
                                   tb[i]['key'],
                                   tb[i]['id'],
                                   tb[i]['class']);


        // type is a tb function -> assign it as onclick
        actionFunc = 'tb_'+tb[i]['type'];
        if( isFunction(window[actionFunc]) ){
            addEvent(btn,'click', bind(window[actionFunc],btn,tb[i],edid));
            toolbar.appendChild(btn);
            continue;
        }

        // type is a init function -> execute it
        actionFunc = 'addBtnAction'+tb[i]['type'].charAt(0).toUpperCase()+tb[i]['type'].substring(1);
        if( isFunction(window[actionFunc]) ){
            if(window[actionFunc](btn, tb[i], edid)){
                toolbar.appendChild(btn);
            }
            continue;
        }

        alert('unknown toolbar type: '+tb[i]['type']+'  '+actionFunc);
    } // end for

}

/**
 * Button action for format buttons
 *
 * @param  DOMElement btn   Button element to add the action to
 * @param  array      props Associative array of button properties
 * @param  string     edid  ID of the editor textarea
 * @author Gabriel Birke <birke@d-scribe.de>
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function tb_format(btn, props, edid) {
    var sample = props['title'];
    if(props['sample']){
        sample = props['sample'];
    }
    insertTags(edid,
               fixtxt(props['open']),
               fixtxt(props['close']),
               fixtxt(sample));
    pickerClose();
    return false;
}

/**
 * Button action for format buttons
 *
 * This works exactly as tb_format() except that, if multiple lines
 * are selected, each line will be formatted seperately
 *
 * @param  DOMElement btn   Button element to add the action to
 * @param  array      props Associative array of button properties
 * @param  string     edid  ID of the editor textarea
 * @author Gabriel Birke <birke@d-scribe.de>
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function tb_formatln(btn, props, edid) {
    var sample = props['title'];
    if(props['sample']){
        sample = props['sample'];
    }
    sample = fixtxt(sample);

    props['open']  = fixtxt(props['open']);
    props['close'] = fixtxt(props['close']);

    // is something selected?
    var opts;
    var selection = getSelection($(edid));
    if(selection.getLength()){
        sample = selection.getText();
        opts = {nosel: true};
    }else{
        opts = {
            startofs: props['open'].length,
            endofs: props['close'].length
        };
    }

    sample = sample.split("\n").join(props['close']+"\n"+props['open']);
    sample = props['open']+sample+props['close'];

    pasteText(selection,sample,opts);

    pickerClose();
    return false;
}

/**
 * Button action for insert buttons
 *
 * @param  DOMElement btn   Button element to add the action to
 * @param  array      props Associative array of button properties
 * @param  string     edid  ID of the editor textarea
 * @author Gabriel Birke <birke@d-scribe.de>
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function tb_insert(btn, props, edid) {
    insertAtCarret(edid,fixtxt(props['insert']));
    pickerClose();
    return false;
}

/**
 * Button action for the media popup
 *
 * @param  DOMElement btn   Button element to add the action to
 * @param  array      props Associative array of button properties
 * @param  string     edid  ID of the editor textarea
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function tb_mediapopup(btn, props, edid) {
    window.open(
        DOKU_BASE+props['url']+encodeURIComponent(NS),
        props['name'],
        props['options']);
    return false;
}

/**
 * Button action for automatic headlines
 *
 * Insert a new headline based on the current section level
 *
 * @param  DOMElement btn   Button element to add the action to
 * @param  array      props Associative array of button properties
 * @param  string     edid  ID of the editor textarea
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function tb_autohead(btn, props, edid){
    var lvl = currentHeadlineLevel(edid);

    // determine new level
    lvl += props['mod'];
    if(lvl < 1) lvl = 1;
    if(lvl > 5) lvl = 5;

    var tags = '=';
    for(var i=0; i<=5-lvl; i++) tags += '=';
    insertTags(edid, tags+' ', ' '+tags+"\n", props['text']);
    pickerClose();
    return false;
}


/**
 * Add button action for picker buttons and create picker element
 *
 * @param  DOMElement btn   Button element to add the action to
 * @param  array      props Associative array of button properties
 * @param  string     edid  ID of the editor textarea
 * @return boolean    If button should be appended
 * @author Gabriel Birke <birke@d-scribe.de>
 */
function addBtnActionPicker(btn, props, edid) {
    var pickerid = 'picker'+(pickercounter++);
    createPicker(pickerid, props, edid);
    addEvent(btn,'click',function(){
        pickerToggle(pickerid,btn);
        return false;
    });
    return true;
}

/**
 * Add button action for the link wizard button
 *
 * @param  DOMElement btn   Button element to add the action to
 * @param  array      props Associative array of button properties
 * @param  string     edid  ID of the editor textarea
 * @return boolean    If button should be appended
 * @author Andreas Gohr <gohr@cosmocode.de>
 */
function addBtnActionLinkwiz(btn, props, edid) {
    linkwiz.init($(edid));
    addEvent(btn,'click',function(){
        linkwiz.toggle();
        return false;
    });
    return true;
}

/**
 * Show/Hide a previosly created picker window
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function pickerToggle(pickerid,btn){
    var picker = $(pickerid);
    if(picker.style.marginLeft == '-10000px'){
        var x = findPosX(btn);
        var y = findPosY(btn);
        picker.style.left = (x+3)+'px';
        picker.style.top = (y+btn.offsetHeight+3)+'px';
        picker.style.marginLeft = '0px';
        picker.style.marginTop  = '0px';
    }else{
        picker.style.marginLeft = '-10000px';
        picker.style.marginTop  = '-10000px';
    }
}

/**
 * Close all open pickers
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function pickerClose(){
    var pobjs = getElementsByClass('picker');
    for(var i=0; i<pobjs.length; i++){
        pobjs[i].style.marginLeft = '-10000px';
        pobjs[i].style.marginTop  = '-10000px';
    }
}


/**
 * Replaces \n with linebreaks
 */
function fixtxt(str){
    return str.replace(/\\n/g,"\n");
}



/* XXXXXXXXXX end of lib/scripts/toolbar.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/edit.js XXXXXXXXXX */

/**
 * Functions for text editing (toolbar stuff)
 *
 * @todo most of the stuff in here should be revamped and then moved to toolbar.js
 * @author Andreas Gohr <andi@splitbrain.org>
 */

/**
 * Creates a toolbar button through the DOM
 *
 * Style the buttons through the toolbutton class
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function createToolButton(icon,label,key,id,classname){
    var btn = document.createElement('button');
    var ico = document.createElement('img');

    // preapare the basic button stuff
    btn.className = 'toolbutton';
    if(classname){
        btn.className += ' '+classname;
    }
    btn.title = label;
    if(key){
        btn.title += ' ['+key.toUpperCase()+']';
        btn.accessKey = key;
    }

    // set IDs if given
    if(id){
        btn.id = id;
        ico.id = id+'_ico';
    }

    // create the icon and add it to the button
    if(icon.substr(0,1) == '/'){
        ico.src = icon;
    }else{
        ico.src = DOKU_BASE+'lib/images/toolbar/'+icon;
    }
    btn.appendChild(ico);

    return btn;
}

/**
 * Creates a picker window for inserting text
 *
 * The given list can be an associative array with text,icon pairs
 * or a simple list of text. Style the picker window through the picker
 * class or the picker buttons with the pickerbutton class. Picker
 * windows are appended to the body and created invisible.
 *
 * @param  string id    the ID to assign to the picker
 * @param  array  props the properties for the picker
 * @param  string edid  the ID of the textarea
 * @rteurn DOMobject    the created picker
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function createPicker(id,props,edid){
    var icobase = props['icobase'];
    var list    = props['list'];

    // create the wrapping div
    var picker            = document.createElement('div');
    picker.className      = 'picker';
    if(props['class']){
        picker.className += ' '+props['class'];
    }
    picker.id               = id;
    picker.style.position   = 'absolute';
    picker.style.marginLeft = '-10000px'; // no display:none, to keep access keys working
    picker.style.marginTop  = '-10000px';

    for(var key in list){
        if (!list.hasOwnProperty(key)) continue;

        if(isNaN(key)){
            // associative array -> treat as image/value pairs
            var btn = document.createElement('button');
            btn.className = 'pickerbutton';
            var ico = document.createElement('img');
            if(list[key].substr(0,1) == '/'){
                ico.src = list[key];
            }else{
                ico.src = DOKU_BASE+'lib/images/'+icobase+'/'+list[key];
            }
            btn.title     = key;
            btn.appendChild(ico);
            addEvent(btn,'click',bind(pickerInsert,key,edid));
            picker.appendChild(btn);
        }else if(isString(list[key])){
            // a list of text -> treat as text picker
            var btn = document.createElement('button');
            btn.className = 'pickerbutton';
            var txt = document.createTextNode(list[key]);
            btn.title     = list[key];
            btn.appendChild(txt);
            addEvent(btn,'click',bind(pickerInsert,list[key],edid));
            picker.appendChild(btn);
        }else{
            // a list of lists -> treat it as subtoolbar
            initToolbar(picker,edid,list);
            break; // all buttons handled already
        }

    }
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(picker);
    return picker;
}

/**
 * Called by picker buttons to insert Text and close the picker again
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function pickerInsert(text,edid){
    insertAtCarret(edid,text);
    pickerClose();
}

/**
 * Add button action for signature button
 *
 * @param  DOMElement btn   Button element to add the action to
 * @param  array      props Associative array of button properties
 * @param  string     edid  ID of the editor textarea
 * @return boolean    If button should be appended
 * @author Gabriel Birke <birke@d-scribe.de>
 */
function addBtnActionSignature(btn, props, edid) {
    if(typeof(SIG) != 'undefined' && SIG != ''){
        addEvent(btn,'click',bind(insertAtCarret,edid,SIG));
        return true;
    }
    return false;
}

/**
 * Make intended formattings easier to handle
 *
 * Listens to all key inputs and handle indentions
 * of lists and code blocks
 *
 * Currently handles space, backspce and enter presses
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 * @fixme handle tabs
 */
function keyHandler(e){
    if(e.keyCode != 13 &&
       e.keyCode != 8  &&
       e.keyCode != 32) return;
    var field     = e.target;
    var selection = getSelection(field);
    if(selection.getLength()) return; //there was text selected, keep standard behavior
    var search    = "\n"+field.value.substr(0,selection.start);
    var linestart = Math.max(search.lastIndexOf("\n"),
                             search.lastIndexOf("\r")); //IE workaround
    search = search.substr(linestart);


    if(e.keyCode == 13){ // Enter
        // keep current indention for lists and code
        var match = search.match(/(\n  +([\*-] ?)?)/);
        if(match){
            var scroll = field.scrollHeight;
            var match2 = search.match(/^\n  +[\*-]\s*$/);
            // Cancel list if the last item is empty (i. e. two times enter)
            if (match2 && field.value.substr(selection.start).match(/^($|\r?\n)/)) {
                field.value = field.value.substr(0, linestart) + "\n" +
                              field.value.substr(selection.start);
                selection.start = linestart + 1;
                selection.end = linestart + 1;
                setSelection(selection);
            } else {
                insertAtCarret(field.id,match[1]);
            }
            field.scrollTop += (field.scrollHeight - scroll);
            e.preventDefault(); // prevent enter key
            return false;
        }
    }else if(e.keyCode == 8){ // Backspace
        // unindent lists
        var match = search.match(/(\n  +)([*-] ?)$/);
        if(match){
            var spaces = match[1].length-1;

            if(spaces > 3){ // unindent one level
                field.value = field.value.substr(0,linestart)+
                              field.value.substr(linestart+2);
                selection.start = selection.start - 2;
                selection.end   = selection.start;
            }else{ // delete list point
                field.value = field.value.substr(0,linestart)+
                              field.value.substr(selection.start);
                selection.start = linestart;
                selection.end   = linestart;
            }
            setSelection(selection);
            e.preventDefault(); // prevent backspace
            return false;
        }
    }else if(e.keyCode == 32){ // Space
        // intend list item
        var match = search.match(/(\n  +)([*-] )$/);
        if(match){
            field.value = field.value.substr(0,linestart)+'  '+
                          field.value.substr(linestart);
            selection.start = selection.start + 2;
            selection.end   = selection.start;
            setSelection(selection);
            e.preventDefault(); // prevent space
            return false;
        }
    }
}

//FIXME consolidate somewhere else
addInitEvent(function(){
    var field = $('wiki__text');
    if(!field) return;
    // in Firefox, keypress doesn't send the correct keycodes,
    // in Opera, the default of keydown can't be prevented
    if (is_opera) {
        addEvent(field,'keypress',keyHandler);
    } else {
        addEvent(field,'keydown',keyHandler);
    }
});

/**
 * Determine the current section level while editing
 *
 * @author Andreas Gohr <gohr@cosmocode.de>
 */
function currentHeadlineLevel(textboxId){
    var field     = $(textboxId);
    var selection = getSelection(field);
    var search    = "\n"+field.value.substr(0,selection.start);
    var lasthl    = search.lastIndexOf("\n==");
    if(lasthl == -1 && field.form.prefix){
        // we need to look in prefix context
        search = field.form.prefix.value;
        lasthl    = search.lastIndexOf("\n==");
    }
    search    = search.substr(lasthl+1,6);

    if(search == '======') return 1;
    if(search.substr(0,5) == '=====') return 2;
    if(search.substr(0,4) == '====') return 3;
    if(search.substr(0,3) == '===') return 4;
    if(search.substr(0,2) == '==') return 5;

    return 0;
}


/**
 * global var used for not saved yet warning
 */
var textChanged = false;
var clickedSave = false;

/**
 * Delete the draft before leaving the page
 */
function deleteDraft() {
    if (is_opera) return;

    // remove a possibly saved draft using ajax
    var dwform = $('dw__editform');
    if(dwform){
        var params = 'call=draftdel';
        params += '&id='+encodeURIComponent(dwform.elements.id.value);

        var sackobj = new sack(DOKU_BASE + 'lib/exe/ajax.php');
        // this needs to be synchronous and GET to not be aborted upon page unload
        sackobj.asynchronous = false;
        sackobj.method = 'GET';
        sackobj.AjaxFailedAlert = '';
        sackobj.encodeURIString = false;
        sackobj.runAJAX(params);
    }
}

function checkSummary() {
	clickedSave = false;
	var ret = true;
	var summary = document.getElementById('edit__summary');

	var value = summary.value.replace(/^ */,"").replace(/ *$/,"");
	if (value === '') {
		ret = false;
		alert('You need to enter a valid summary of your changes.\nSkipping this step makes maintenance a lot harder on other people.');
		summary.focus();
	}

	return ret;
}

/**
 * Activate "not saved" dialog, add draft deletion to page unload,
 * add handlers to monitor changes
 *
 * Sets focus to the editbox as well
 */
addInitEvent(function (){
    var editform = $('dw__editform');
    if (!editform) return;

    var edit_text   = $('wiki__text');
    if(edit_text) {
        if(edit_text.readOnly) return;

        // set focus
        edit_text.focus();
    }

    var checkfunc = function(){
        textChanged = true; //global var
        summaryCheck();
    };
    addEvent(editform, 'change', checkfunc);
    addEvent(editform, 'keydown', checkfunc);

    window.onbeforeunload = function(){
        if(textChanged) {
            return LANG.notsavedyet;
        }
        if(clickedSave) {
            clickedSave = false;
            var summary = $('edit__summary');
            var value = summary.value.replace(/^ */,"").replace(/ *$/,"");
            if (value === '') {
                return 'You need to enter a valid summary of your changes.\nSkipping this step makes maintenance a lot harder on other people.';
            }
        }
    };
    window.onunload = deleteDraft;

    // reset change memory var on submit
    addEvent($('edbtn__save'), 'click', function(){ textChanged = false; clickedSave = true; });
    addEvent($('edbtn__preview'), 'click', function(){ textChanged = false; });

    var summary = $('edit__summary');
    addEvent(summary, 'change', summaryCheck);
    addEvent(summary, 'keyup', summaryCheck);
    if (textChanged) summaryCheck();
});

/**
 * Checks if a summary was entered - if not the style is changed
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function summaryCheck(){
    var sum = document.getElementById('edit__summary');
    if(sum.value === ''){
        sum.className='missing';
    }else{
        sum.className='edit';
    }
}


/**
 * Class managing the timer to display a warning on a expiring lock
 */
function locktimer_class(){
        this.sack     = null;
        this.timeout  = 0;
        this.timerID  = null;
        this.lasttime = null;
        this.msg      = '';
        this.pageid   = '';
};
var locktimer = new locktimer_class();
    locktimer.init = function(timeout,msg,draft){
        // init values
        locktimer.timeout  = timeout*1000;
        locktimer.msg      = msg;
        locktimer.draft    = draft;
        locktimer.lasttime = new Date();

        if(!$('dw__editform')) return;
        locktimer.pageid = $('dw__editform').elements.id.value;
        if(!locktimer.pageid) return;

        // init ajax component
        locktimer.sack = new sack(DOKU_BASE + 'lib/exe/ajax.php');
        locktimer.sack.AjaxFailedAlert = '';
        locktimer.sack.encodeURIString = false;
        locktimer.sack.onCompletion = locktimer.refreshed;

        // register refresh event
        addEvent($('dw__editform'),'keypress',function(){locktimer.refresh();});
        // start timer
        locktimer.reset();
    };

    /**
     * (Re)start the warning timer
     */
    locktimer.reset = function(){
        locktimer.clear();
        locktimer.timerID = window.setTimeout("locktimer.warning()", locktimer.timeout);
    };

    /**
     * Display the warning about the expiring lock
     */
    locktimer.warning = function(){
        locktimer.clear();
        alert(locktimer.msg);
    };

    /**
     * Remove the current warning timer
     */
    locktimer.clear = function(){
        if(locktimer.timerID !== null){
            window.clearTimeout(locktimer.timerID);
            locktimer.timerID = null;
        }
    };

    /**
     * Refresh the lock via AJAX
     *
     * Called on keypresses in the edit area
     */
    locktimer.refresh = function(){
        var now = new Date();
        // refresh every minute only
        if(now.getTime() - locktimer.lasttime.getTime() > 30*1000){ //FIXME decide on time
            var params = 'call=lock&id='+encodeURIComponent(locktimer.pageid);
            var dwform = $('dw__editform');
            if(locktimer.draft && dwform.elements.wikitext){
                params += '&prefix='+encodeURIComponent(dwform.elements.prefix.value);
                params += '&wikitext='+encodeURIComponent(dwform.elements.wikitext.value);
                params += '&suffix='+encodeURIComponent(dwform.elements.suffix.value);
                if(dwform.elements.date){
                    params += '&date='+encodeURIComponent(dwform.elements.date.value);
                }
            }
            locktimer.sack.runAJAX(params);
            locktimer.lasttime = now;
        }
    };


    /**
     * Callback. Resets the warning timer
     */
    locktimer.refreshed = function(){
        var data  = this.response;
        var error = data.charAt(0);
            data  = data.substring(1);

        $('draft__status').innerHTML=data;
        if(error != '1') return; // locking failed
        locktimer.reset();
    };
// end of locktimer class functions



/* XXXXXXXXXX end of lib/scripts/edit.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/linkwiz.js XXXXXXXXXX */

/**
 * The Link Wizard
 *
 * @author Andreas Gohr <gohr@cosmocode.de>
 */
var linkwiz = {
    wiz:    null,
    entry:  null,
    result: null,
    timer:  null,
    sack:   null,
    textArea: null,
    selected: -1,
    selection: null,

    /**
     * Initialize the linkwizard by creating the needed HTML
     * and attaching the eventhandlers
     */
    init: function(textArea){
        // prepare AJAX object
        linkwiz.sack = new sack(DOKU_BASE + 'lib/exe/ajax.php');
        linkwiz.sack.AjaxFailedAlert = '';
        linkwiz.sack.encodeURIString = false;

        // create HTML Structure
        linkwiz.wiz = document.createElement('div');
        linkwiz.wiz.id = 'link__wiz';
        linkwiz.wiz.className     = 'picker';
        linkwiz.wiz.style.top  = (findPosY(textArea)+20)+'px';
        linkwiz.wiz.style.left = (findPosX(textArea)+80)+'px';
        linkwiz.wiz.style.marginLeft = '-10000px';
        linkwiz.wiz.style.marginTop  = '-10000px';
        linkwiz.wiz.style.position = 'absolute';

        linkwiz.wiz.innerHTML =
             '<div id="link__wiz_header">'+
             '<img src="'+DOKU_BASE+'lib/images/close.png" width="16" height="16" align="right" alt="" id="link__wiz_close" />'+
             LANG['linkwiz']+'</div>'+
             '<div>'+LANG['linkto']+' <input type="text" class="edit" id="link__wiz_entry" autocomplete="off" /></div>'+
             '<div id="link__wiz_result"></div>';
        $('dw__editform').parentNode.appendChild(linkwiz.wiz);
        linkwiz.textArea = textArea;
        linkwiz.result = $('link__wiz_result');
        linkwiz.entry = $('link__wiz_entry');

        // attach event handlers
        var obj;
        obj = $('link__wiz_close');
        obj.onclick = linkwiz.hide;

        linkwiz.sack.elementObj = linkwiz.result;
        addEvent(linkwiz.entry,'keyup',linkwiz.onEntry);
        addEvent(linkwiz.result,'click',linkwiz.onResultClick);
        drag.attach(linkwiz.wiz,$('link__wiz_header'));
    },

    /**
     * handle all keyup events in the entry field
     */
    onEntry: function(e){
        if(e.keyCode == 37 || e.keyCode == 39){ //left/right
            return true; //ignore
        }
        if(e.keyCode == 27){
            linkwiz.hide();
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        if(e.keyCode == 38){ //Up
            linkwiz.select(linkwiz.selected -1);
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        if(e.keyCode == 40){ //Down
            linkwiz.select(linkwiz.selected +1);
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        if(e.keyCode == 13){ //Enter
            if(linkwiz.selected > -1){
                var obj = linkwiz.getResult(linkwiz.selected);
                if(obj){
                    var a = obj.getElementsByTagName('A')[0];
                    linkwiz.resultClick(a);
                }
            }else if(linkwiz.entry.value){
                linkwiz.insertLink(linkwiz.entry.value);
            }

            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        linkwiz.autocomplete();
    },

    /**
     * Get one of the result by index
     *
     * @param int result div to return
     * @returns DOMObject or null
     */
    getResult: function(num){
        var obj;
        var childs = linkwiz.result.getElementsByTagName('DIV');
        obj = childs[num];
        if(obj){
            return obj;
        }else{
            return null;
        }
    },

    /**
     * Select the given result
     */
    select: function(num){
        if(num < 0){
            linkwiz.deselect();
            return;
        }

        var obj = linkwiz.getResult(num);
        if(obj){
            linkwiz.deselect();
            obj.className += ' selected';

            // make sure the item is viewable in the scroll view
            // FIXME check IE compatibility
            if(obj.offsetTop > linkwiz.result.scrollTop + linkwiz.result.clientHeight){
                linkwiz.result.scrollTop += obj.clientHeight;
            }else if(obj.offsetTop - linkwiz.result.clientHeight < linkwiz.result.scrollTop){ // this works but isn't quite right, fixes welcome
                linkwiz.result.scrollTop -= obj.clientHeight;
            }
            // now recheck - if still not in view, the user used the mouse to scroll
            if( (obj.offsetTop > linkwiz.result.scrollTop + linkwiz.result.clientHeight) ||
                (obj.offsetTop < linkwiz.result.scrollTop) ){
                obj.scrollIntoView();
            }

            linkwiz.selected = num;
        }
    },

    /**
     * deselect a result if any is selected
     */
    deselect: function(){
        if(linkwiz.selected > -1){
            var obj = linkwiz.getResult(linkwiz.selected);
            if(obj){
                obj.className = obj.className.replace(/ ?selected/,'');
            }
        }
        linkwiz.selected = -1;
    },

    /**
     * Handle clicks in the result set an dispatch them to
     * resultClick()
     */
    onResultClick: function(e){
        if(e.target.tagName != 'A') return;
        e.stopPropagation();
        e.preventDefault();
        linkwiz.resultClick(e.target);
        return false;
    },

    /**
     * Handles the "click" on a given result anchor
     */
    resultClick: function(a){
        var id = a.title;
        if(id == '' || id.substr(id.length-1) == ':'){
            linkwiz.entry.value = id;
            linkwiz.autocomplete_exec();
        }else{
            linkwiz.entry.value = id;
            if(a.nextSibling && a.nextSibling.tagName == 'SPAN'){
                linkwiz.insertLink(a.nextSibling.innerHTML);
            }else{
                linkwiz.insertLink('');
            }
        }
    },

    /**
     * Insert the id currently in the entry box to the textarea,
     * replacing the current selection or at the curso postion.
     * When no selection is available the given title will be used
     * as link title instead
     */
    insertLink: function(title){
        if(!linkwiz.entry.value) return;

        var sel = getSelection(linkwiz.textArea);
        if(sel.start == 0 && sel.end == 0) sel = linkwiz.selection;

        var stxt = sel.getText();

        // don't include trailing space in selection
        if(stxt.charAt(stxt.length - 1) == ' '){
            sel.end--;
            stxt = sel.getText();
        }

        if(!stxt && !DOKU_UHC) stxt=title;

        // prepend colon inside namespaces for non namespace pages
        if(linkwiz.textArea.form['id'].value.indexOf(':') != -1 &&
           linkwiz.entry.value.indexOf(':') == -1){
            linkwiz.entry.value = ':'+linkwiz.entry.value;
        }

        var link = '[['+linkwiz.entry.value+'|';
        if(stxt) link += stxt;
        link += ']]';

        var so = linkwiz.entry.value.length+3;
        var eo = 2;

        pasteText(sel,link,{startofs: so, endofs: eo});
        linkwiz.hide();
        // reset the entry to the parent namespace and remove : at the beginning
        linkwiz.entry.value = linkwiz.entry.value.replace(/(^:)?[^:]*$/, '');
    },

    /**
     * Start the page/namespace lookup timer
     *
     * Calls autocomplete_exec when the timer runs out
     */
    autocomplete: function(){
        if(linkwiz.timer !== null){
            window.clearTimeout(linkwiz.timer);
            linkwiz.timer = null;
        }

        linkwiz.timer = window.setTimeout(linkwiz.autocomplete_exec,350);
    },

    /**
     * Executes the AJAX call for the page/namespace lookup
     */
    autocomplete_exec: function(){
        linkwiz.deselect();
        linkwiz.result.innerHTML = '<img src="'+DOKU_BASE+'lib/images/throbber.gif" alt="" width="16" height="16" />';
        linkwiz.sack.runAJAX('call=linkwiz&q='+encodeURI(linkwiz.entry.value));
    },

    /**
     * Clears the result area
     */
    clear: function(){
        linkwiz.result.innerHTML = 'Search for a matching page name above, or browse through the pages on the right';
        linkwiz.entry.value = '';
    },

    /**
     * Show the linkwizard
     */
    show: function(){
        linkwiz.selection  = getSelection(linkwiz.textArea);
        linkwiz.wiz.style.marginLeft = '0px';
        linkwiz.wiz.style.marginTop = '0px';
        linkwiz.entry.focus();
        linkwiz.autocomplete();
    },

    /**
     * Hide the link wizard
     */
    hide: function(){
        linkwiz.wiz.style.marginLeft = '-10000px';
        linkwiz.wiz.style.marginTop  = '-10000px';
        linkwiz.textArea.focus();
    },

    /**
     * Toggle the link wizard
     */
    toggle: function(){
        if(linkwiz.wiz.style.marginLeft == '-10000px'){
            linkwiz.show();
        }else{
            linkwiz.hide();
        }
    }
};



/* XXXXXXXXXX end of lib/scripts/linkwiz.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/media.js XXXXXXXXXX */

/**
 * JavaScript functionality for the media management popup
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
var media_manager = {
    keepopen: false,
    hide: false,
    align: false,
    popup: false,
    id: false,
    display: false,
    link: false,
    size: false,
    ext: false,

    /**
     * Attach event handlers to all "folders" below the given element
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    treeattach: function(obj){
        if(!obj) return;

        var items = obj.getElementsByTagName('li');
        for(var i=0; i<items.length; i++){
            var elem = items[i];

            // attach action to make the +/- clickable
            var clicky = elem.getElementsByTagName('img')[0];
            clicky.style.cursor = 'pointer';
            addEvent(clicky,'click',function(event){ return media_manager.toggle(event,this); });

            // attach action load folder list via AJAX
            var link = elem.getElementsByTagName('a')[0];
            link.style.cursor = 'pointer';
            addEvent(link,'click',function(event){ return media_manager.list(event,this); });
        }
    },

    /**
     * Attach the image selector action to all links below the given element
     * also add the action to autofill the "upload as" field
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    selectorattach: function(obj){
        if(!obj) return;

        var items = getElementsByClass('select',obj,'a');
        for(var i=0; i<items.length; i++){
            var elem = items[i];
            elem.style.cursor = 'pointer';
            addEvent(elem,'click',function(event){ return media_manager.select(event,this); });
        }

        // hide syntax example
        items = getElementsByClass('example',obj,'div');
        for(var i=0; i<items.length; i++){
            elem = items[i];
            elem.style.display = 'none';
        }

        var file = $('upload__file');
        if(!file) return;
        addEvent(file,'change',media_manager.suggest);
    },

    /**
     * Attach deletion confirmation dialog to the delete buttons.
     *
     * Michael Klier <chi@chimeric.de>
     */
    confirmattach: function(obj){
        if(!obj) return;

        items = getElementsByClass('btn_media_delete',obj,'a');
        for(var i=0; i<items.length; i++){
            var elem = items[i];
            addEvent(elem,'click',function(e){
                if(e.target.tagName == 'IMG'){
                    var name = e.target.parentNode.title;
                }else{
                    var name = e.target.title;
                }
                if(!confirm(LANG['del_confirm'] + "\n" + name)) {
                    e.preventDefault();
                    return false;
                } else {
                    return true;
                }
            });
        }
    },

    /**
     * Creates checkboxes for additional options
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    attachoptions: function(obj){
        if(!obj) return;

        // keep open
        if(opener){
            var kobox  = document.createElement('input');
            kobox.type = 'checkbox';
            kobox.id   = 'media__keepopen';
            if(DokuCookie.getValue('keepopen')){
                kobox.checked  = true;
                kobox.defaultChecked = true; //IE wants this
                media_manager.keepopen = true;
            }
            addEvent(kobox,'click',function(event){ return media_manager.togglekeepopen(event,this); });

            var kolbl  = document.createElement('label');
            kolbl.htmlFor   = 'media__keepopen';
            kolbl.innerHTML = LANG['keepopen'];

            var kobr = document.createElement('br');

            obj.appendChild(kobox);
            obj.appendChild(kolbl);
            obj.appendChild(kobr);
        }

        // hide details
        var hdbox  = document.createElement('input');
        hdbox.type = 'checkbox';
        hdbox.id   = 'media__hide';
        if(DokuCookie.getValue('hide')){
            hdbox.checked = true;
            hdbox.defaultChecked = true; //IE wants this
            media_manager.hide    = true;
        }
        addEvent(hdbox,'click',function(event){ return media_manager.togglehide(event,this); });

        var hdlbl  = document.createElement('label');
        hdlbl.htmlFor   = 'media__hide';
        hdlbl.innerHTML = LANG['hidedetails'];

        var hdbr = document.createElement('br');

        obj.appendChild(hdbox);
        obj.appendChild(hdlbl);
        obj.appendChild(hdbr);
        media_manager.updatehide();
    },

    /**
     * Toggles the keep open state
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    togglekeepopen: function(event,cb){
        if(cb.checked){
            DokuCookie.setValue('keepopen',1);
            media_manager.keepopen = true;
        }else{
            DokuCookie.setValue('keepopen','');
            media_manager.keepopen = false;
        }
    },

    /**
     * Toggles the hide details state
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    togglehide: function(event,cb){
        if(cb.checked){
            DokuCookie.setValue('hide',1);
            media_manager.hide = true;
        }else{
            DokuCookie.setValue('hide','');
            media_manager.hide = false;
        }
        media_manager.updatehide();
    },

    /**
     * Sets the visibility of the image details accordingly to the
     * chosen hide state
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    updatehide: function(){
        var obj = $('media__content');
        if(!obj) return;
        var details = getElementsByClass('detail',obj,'div');
        for(var i=0; i<details.length; i++){
            if(media_manager.hide){
                details[i].style.display = 'none';
            }else{
                details[i].style.display = '';
            }
        }
    },

    /**
     * shows the popup for a image link
     */
    select: function(event,link){
        var id = link.name.substr(2);

        media_manager.id = id;
        if(!opener){
            // if we don't run in popup display example
            var ex = $('ex_'+id.replace(/:/g,'_'));
            if(ex.style.display == ''){
                ex.style.display = 'none';
            } else {
                ex.style.display = '';
            }
            return false;
        }

        // FIXME these lines deactivate the media options dialog and restore
        // the old behavior according to FS#2047
        opener.insertTags('wiki__text','{{'+id+'|','}}','');
        if(!media_manager.keepopen) window.close();
        opener.focus();
        return false;


        media_manager.ext = false;
        var dot = id.lastIndexOf(".");
        if (dot != -1) {
            var ext = id.substr(dot,id.length);

            if (ext != '.jpg' && ext != '.jpeg' && ext != '.png' && ext != '.gif' && ext != '.swf') {
                media_manager.insert(null);
                return false;
            }
        } else {
            media_manager.insert(null);
            return false;
        }

        media_manager.popup.style.display = 'inline';
        media_manager.popup.style.left = event.pageX + 'px';
        media_manager.popup.style.top = event.pageY + 'px';

        // set all buttons to outset
        media_manager.outSet('media__linkbtn1');
        media_manager.outSet('media__linkbtn2');
        media_manager.outSet('media__linkbtn3');
        media_manager.outSet('media__linkbtn4');

        media_manager.outSet('media__alignbtn0');
        media_manager.outSet('media__alignbtn1');
        media_manager.outSet('media__alignbtn2');
        media_manager.outSet('media__alignbtn3');

        media_manager.outSet('media__sizebtn1');
        media_manager.outSet('media__sizebtn2');
        media_manager.outSet('media__sizebtn3');
        media_manager.outSet('media__sizebtn4');


        if (ext == '.swf') {
            media_manager.ext = 'swf';

            // disable display buttons for detail and linked image
            $('media__linkbtn1').style.display = 'none';
            $('media__linkbtn2').style.display = 'none';

            // set the link button to default
            if (media_manager.link != false) {
                if ( media_manager.link == '2' || media_manager.link == '1')  {
                    media_manager.inSet('media__linkbtn3');
                    media_manager.link = '3';
                    DokuCookie.setValue('link','3');
                } else {
                    media_manager.inSet('media__linkbtn'+media_manager.link);
                }
            } else if (DokuCookie.getValue('link')) {
                if ( DokuCookie.getValue('link') == '2' ||  DokuCookie.getValue('link') == '1')  {
                    // this options are not availible
                    media_manager.inSet('media__linkbtn3');
                    media_manager.link = '3';
                    DokuCookie.setValue('link','3');
                } else {
                    media_manager.inSet('media__linkbtn'+DokuCookie.getValue('link'));
                    media_manager.link = DokuCookie.getValue('link');
                }
            } else {
                // default case
                media_manager.link = '3';
                media_manager.inSet('media__linkbtn3');
                DokuCookie.setValue('link','3');
            }

            // disable button for original size
            $('media__sizebtn4').style.display = 'none';

        } else {
            media_manager.ext = 'img';

            // ensure that the display buttons are there
            $('media__linkbtn1').style.display = 'inline';
            $('media__linkbtn2').style.display = 'inline';
            $('media__sizebtn4').style.display = 'inline';

            // set the link button to default
            if (DokuCookie.getValue('link')) {
                media_manager.link = DokuCookie.getValue('link');
            }
            if (media_manager.link == false) {
                // default case
                media_manager.link = '1';
                DokuCookie.setValue('link','1');
            }
            media_manager.inSet('media__linkbtn'+media_manager.link);
        }

        if (media_manager.link == '4') {
            media_manager.align = false;
            media_manager.size = false;
            $('media__align').style.display = 'none';
            $('media__size').style.display = 'none';
        } else {
            $('media__align').style.display = 'block';
            $('media__size').style.display = 'block';

            // set the align button to default
            if (media_manager.align != false) {
                media_manager.inSet('media__alignbtn'+media_manager.align);
            } else if (DokuCookie.getValue('align')) {
                media_manager.inSet('media__alignbtn'+DokuCookie.getValue('align'));
                media_manager.align = DokuCookie.getValue('align');
            } else {
                // default case
                media_manager.align = '0';
                media_manager.inSet('media__alignbtn0');
                DokuCookie.setValue('align','0');
            }

            // set the size button to default
            if (DokuCookie.getValue('size')) {
                media_manager.size = DokuCookie.getValue('size');
            }
            if (media_manager.size == false || (media_manager.size === '4' && ext === '.swf')) {
                // default case
                media_manager.size = '2';
                DokuCookie.setValue('size','2');
            }
            media_manager.inSet('media__sizebtn'+media_manager.size);

            $('media__sendbtn').focus();
        }

       return false;
    },

    /**
     * build the popup window
     *
     * @author Dominik Eckelmann <eckelmann@cosmocode.de>
     */
    initpopup: function() {

        media_manager.popup = document.createElement('div');
        media_manager.popup.setAttribute('id','media__popup');

        var root = document.getElementById('media__manager');
        if (root == null) return;
        root.appendChild(media_manager.popup);

        var headline    = document.createElement('h1');
        headline.innerHTML = LANG.mediatitle;
        var headlineimg = document.createElement('img');
        headlineimg.src = DOKU_BASE + 'lib/images/close.png';
        headlineimg.id  = 'media__closeimg';
        addEvent(headlineimg,'click',function(event){ return media_manager.closePopup(event,this); });
        headline.insertBefore(headlineimg, headline.firstChild);
        media_manager.popup.appendChild(headline);
        drag.attach(media_manager.popup,headline);

        // link

        var linkp = document.createElement('p');

        linkp.id = "media__linkstyle";
        if (media_manager.display == "2") {
            linkp.style.display = "none";
        }

        var linkl = document.createElement('label');
        linkl.innerHTML = LANG.mediatarget;
        linkp.appendChild(linkl);

        var linkbtns = ['lnk', 'direct', 'nolnk', 'displaylnk'];
        for (var i = 0 ; i < linkbtns.length ; ++i) {
            var linkbtn = document.createElement('button');
            linkbtn.className = 'button';
            linkbtn.value = i + 1;
            linkbtn.id    = "media__linkbtn" + (i + 1);
            linkbtn.title = LANG['media' + linkbtns[i]];
            linkbtn.style.borderStyle = 'outset';
            addEvent(linkbtn,'click',function(event){ return media_manager.setlink(event,this); });

            var linkimg = document.createElement('img');
            linkimg.src = DOKU_BASE + 'lib/images/media_link_' + linkbtns[i] + '.png';

            linkbtn.appendChild(linkimg);
            linkp.appendChild(linkbtn);
        }

        media_manager.popup.appendChild(linkp);

        // align

        var alignp    = document.createElement('p');
        var alignl    = document.createElement('label');

        alignp.appendChild(alignl);
        alignp.id = 'media__align';
        if (media_manager.display == "2") {
            alignp.style.display = "none";
        }
        alignl.innerHTML = LANG['mediaalign'];

        var alignbtns = ['noalign', 'left', 'center', 'right'];
        for (var n = 0 ; n < alignbtns.length ; ++n) {
            var alignbtn = document.createElement('button');
            var alignimg = document.createElement('img');
            alignimg.src = DOKU_BASE + 'lib/images/media_align_' + alignbtns[n] + '.png';

            alignbtn.id    = "media__alignbtn" + n;
            alignbtn.value = n;
            alignbtn.title = LANG['media' + alignbtns[n]];
            alignbtn.className = 'button';
            alignbtn.appendChild(alignimg);
            alignbtn.style.borderStyle = 'outset';
            addEvent(alignbtn,'click',function(event){ return media_manager.setalign(event,this); });

            alignp.appendChild(alignbtn);
        }

        media_manager.popup.appendChild(alignp);

        // size

        var sizep    = document.createElement('p');
        var sizel    = document.createElement('label');

        sizep.id = 'media__size';
        if (media_manager.display == "2") {
            sizep.style.display = "none";
        }
        sizep.appendChild(sizel);
        sizel.innerHTML = LANG['mediasize'];

        var sizebtns = ['small', 'medium', 'large', 'original'];
        for (var size = 0 ; size < sizebtns.length ; ++size) {
            var sizebtn = document.createElement('button');
            var sizeimg = document.createElement('img');

            sizep.appendChild(sizebtn);
            sizeimg.src = DOKU_BASE + 'lib/images/media_size_' + sizebtns[size] + '.png';

            sizebtn.className = 'button';
            sizebtn.appendChild(sizeimg);
            sizebtn.value = size + 1;
            sizebtn.id    = 'media__sizebtn' + (size + 1);
            sizebtn.title = LANG['media' + sizebtns[size]];
            sizebtn.style.borderStyle = 'outset';
            addEvent(sizebtn,'click',function(event){ return media_manager.setsize(event,this); });
        }

        media_manager.popup.appendChild(sizep);

        // send and close button

        var btnp = document.createElement('p');
        media_manager.popup.appendChild(btnp);
        btnp.setAttribute('class','btnlbl');

        var btn  = document.createElement('input');
        btn.type = 'button';
        btn.id   = 'media__sendbtn';
        btn.setAttribute('class','button');
        btn.value = LANG['mediainsert'];
        btnp.appendChild(btn);
        addEvent(btn,'click',function(event){ return media_manager.insert(event); });
    },

    /**
     * Insert the clicked image into the opener's textarea
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     * @author Dominik Eckelmann <eckelmann@cosmocode.de>
     */
    insert: function(event){
        var id = media_manager.id;
        // set syntax options
        $('media__popup').style.display = 'none';

        var opts       = '';
        var optsstart  = '';
        var alignleft  = '';
        var alignright = '';

        if (media_manager.ext == 'img' || media_manager.ext == 'swf') {

            if (media_manager.link == '4') {
                    opts = '?linkonly';
            } else {

                if (media_manager.link == "3" && media_manager.ext == 'img') {
                    opts = '?nolink';
                    optsstart = true;
                } else if (media_manager.link == "2" && media_manager.ext == 'img') {
                    opts = '?direct';
                    optsstart = true;
                }

                var s = parseInt(media_manager.size);

                if (s && s >= 1) {
                    opts += (optsstart)?'&':'?';
                    if (s=="1") {
                        opts += '100';
                        if (media_manager.ext == 'swf') {
                            opts += 'x62';
                        }
                    } else if (s=="2") {
                        opts += '200';
                        if (media_manager.ext == 'swf') {
                            opts += 'x123';
                        }
                    } else if (s=="3"){
                        opts += '300';
                        if (media_manager.ext == 'swf') {
                            opts += 'x185';
                        }
                    }
                }
                if (media_manager.align == '1') {
                    alignleft = '';
                    alignright = ' ';
                }
                if (media_manager.align == '2') {
                    alignleft = ' ';
                    alignright = ' ';
                }
                if (media_manager.align == '3') {
                    alignleft = ' ';
                    alignright = '';
                }
            }
        }
        opener.insertTags('wiki__text','{{'+alignleft+id+opts+alignright+'|','}}','');

        if(!media_manager.keepopen) window.close();
        opener.focus();
        return false;
    },

    /**
     * list the content of a namespace using AJAX
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    list: function(event,link){
        // prepare an AJAX call to fetch the subtree
        var ajax = new sack(DOKU_BASE + 'lib/exe/ajax.php');
        ajax.AjaxFailedAlert = '';
        ajax.encodeURIString = false;
        if(ajax.failed) return true;

        cleanMsgArea();

        var content = $('media__content');
        content.innerHTML = '<img src="'+DOKU_BASE+'lib/images/loading.gif" alt="..." class="load" />';

        ajax.elementObj = content;
        ajax.afterCompletion = function(){
            media_manager.selectorattach(content);
            media_manager.confirmattach(content);
            media_manager.updatehide();
            media_manager.initFlashUpload();
        };
        ajax.runAJAX(link.search.substr(1)+'&call=medialist');
        return false;
    },


    /**
     * Open or close a subtree using AJAX
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    toggle: function(event,clicky){
        var listitem = clicky.parentNode;

        // if already open, close by removing the sublist
        var sublists = listitem.getElementsByTagName('ul');
        if(sublists.length){
            listitem.removeChild(sublists[0]);
            clicky.src = DOKU_BASE+'lib/images/plus.gif';
            return false;
        }

        // get the enclosed link (is always the first one)
        var link = listitem.getElementsByTagName('a')[0];

        // prepare an AJAX call to fetch the subtree
        var ajax = new sack(DOKU_BASE + 'lib/exe/ajax.php');
        ajax.AjaxFailedAlert = '';
        ajax.encodeURIString = false;
        if(ajax.failed) return true;

        //prepare the new ul
        var ul = document.createElement('ul');
        //fixme add classname here
        listitem.appendChild(ul);
        ajax.elementObj = ul;
        ajax.afterCompletion = function(){ media_manager.treeattach(ul); };
        ajax.runAJAX(link.search.substr(1)+'&call=medians');
        clicky.src = DOKU_BASE+'lib/images/minus.gif';
        return false;
    },

    /**
     * Prefills the wikiname.
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    suggest: function(){
        var file = $('upload__file');
        var name = $('upload__name');
        if(!file || !name) return;

        var text = file.value;
        text = text.substr(text.lastIndexOf('/')+1);
        text = text.substr(text.lastIndexOf('\\')+1);
        name.value = text;
    },


    initFlashUpload: function(){
        if(!hasFlash(8)) return;
        var oform  = $('dw__upload');
        var oflash = $('dw__flashupload');
        if(!oform || !oflash) return;

        var clicky = document.createElement('img');
        clicky.src     = DOKU_BASE+'lib/images/multiupload.png';
        clicky.title   = LANG['mu_btn'];
        clicky.alt     = LANG['mu_btn'];
        clicky.style.cursor = 'pointer';
        clicky.onclick = function(){
                            oform.style.display  = 'none';
                            oflash.style.display = '';
                         };
        oform.appendChild(clicky);
    },

    /**
     * closes the link type popup
     */
    closePopup: function(event) {
        $('media__popup').style.display = 'none';
    },

    /**
     * set the align
     *
     * @author Dominik Eckelmann <eckelmann@cosmocode.de>
     */
    setalign: function(event,cb){
        if(cb.value){
            DokuCookie.setValue('align',cb.value);
            media_manager.align = cb.value;
            media_manager.outSet("media__alignbtn0");
            media_manager.outSet("media__alignbtn1");
            media_manager.outSet("media__alignbtn2");
            media_manager.outSet("media__alignbtn3");
            media_manager.inSet("media__alignbtn"+cb.value);
        }else{
            DokuCookie.setValue('align','');
            media_manager.align = false;
        }
    },
    /**
     * set the link type
     *
     * @author Dominik Eckelmann <eckelmann@cosmocode.de>
     */
    setlink: function(event,cb){
        if(cb.value){
            DokuCookie.setValue('link',cb.value);
            media_manager.link = cb.value;
            media_manager.outSet("media__linkbtn1");
            media_manager.outSet("media__linkbtn2");
            media_manager.outSet("media__linkbtn3");
            media_manager.outSet("media__linkbtn4");
            media_manager.inSet("media__linkbtn"+cb.value);
            var size = document.getElementById("media__size");
            var align = document.getElementById("media__align");
            if (cb.value != '4') {
                size.style.display  = "block";
                align.style.display = "block";
            } else {
                size.style.display  = "none";
                align.style.display = "none";
            }
        }else{
            DokuCookie.setValue('link','');
            media_manager.link = false;
        }
    },

    /**
     * set the display type
     *
     * @author Dominik Eckelmann <eckelmann@cosmocode.de>
     */
    setdisplay: function(event,cb){
        if(cb.value){
            DokuCookie.setValue('display',cb.value);
            media_manager.display = cb.value;
            media_manager.outSet("media__displaybtn1");
            media_manager.outSet("media__displaybtn2");
            media_manager.inSet("media__displaybtn"+cb.value);

        }else{
            DokuCookie.setValue('display','');
            media_manager.align = false;
        }
    },

    /**
     * sets the border to outset
     */
    outSet: function(id) {
        var ele = document.getElementById(id);
        if (ele == null) return;
        ele.style.borderStyle = "outset";
    },
    /**
     * sets the border to inset
     */
    inSet: function(id) {
        var ele = document.getElementById(id);
        if (ele == null) return;
        ele.style.borderStyle = "inset";
    },

    /**
     * set the image size
     *
     * @author Dominik Eckelmann <eckelmann@cosmocode.de>
     */
    setsize: function(event,cb){
        if (cb.value) {
            DokuCookie.setValue('size',cb.value);
            media_manager.size = cb.value;
            for (var i = 1 ; i <= 4 ; ++i) {
                media_manager.outSet("media__sizebtn" + i);
            }
            media_manager.inSet("media__sizebtn"+cb.value);
        } else {
            DokuCookie.setValue('size','');
            media_manager.width = false;
        }
    }
};

addInitEvent(function(){
    media_manager.treeattach($('media__tree'));
    media_manager.selectorattach($('media__content'));
    media_manager.confirmattach($('media__content'));
    media_manager.attachoptions($('media__opts'));
    media_manager.initpopup();
    media_manager.initFlashUpload();
});


/* XXXXXXXXXX end of lib/scripts/media.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/subscriptions.js XXXXXXXXXX */

/**
 * Hide list subscription style if target is a page
 *
 * @author Adrian Lang <lang@cosmocode.de>
 */

addInitEvent(function () {
    var form = $('subscribe__form');
    if (!form) {
        return;
    }

    var styleradios = {};

    function update_state() {
        if (!this.checked) {
            return;
        }
        if (this.value.match(/:$/)) {
            styleradios.list.parentNode.style.display = '';
        } else {
            styleradios.list.parentNode.style.display = 'none';
            if (styleradios.list.checked) {
                styleradios.digest.checked = 'checked';
            }
        }
    }

    var cur_sel = null;

    var inputs = form.getElementsByTagName('input');
    for (var i = 0; i < inputs.length ; ++i) {
        switch (inputs[i].name) {
        case 'sub_target':
            addEvent(inputs[i], 'click', update_state);
            if (inputs[i].checked) {
                cur_sel = inputs[i];
            }
            break;
        case 'sub_style':
            styleradios[inputs[i].value] = inputs[i];
            break;
        }
    }
    update_state.call(cur_sel);
});


/* XXXXXXXXXX end of lib/scripts/subscriptions.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/scripts/diff_sel.js XXXXXXXXXX */

/**
 * Swap between inline and side by side diffs
 */
function DiffSelection()
{
    var diff_sel    = document.getElementById('diff_sel');
    var diff_table  = document.getElementById('diff_table');
    var diff_inline = document.getElementById('diff_inline');

    if (diff_sel !== null && diff_table !== null && diff_inline !== null) {
        var inline = diff_sel.diff_radio[0].checked;
        if (inline) {
            diff_table.style.display  = "none";
            diff_inline.style.display = "block";
            DokuCookie.setValue('diff_select_inline',1);
        } else {
            diff_inline.style.display = "none";
            diff_table.style.display  = "block";
            DokuCookie.setValue('diff_select_inline','');
        }
    }
}

function installDiffSelection()
{
        var diff_sel = document.getElementById('diff_sel');
        if(diff_sel !== null) {
            diff_sel.style.display = "block";
            addEvent(diff_sel, 'click', DiffSelection);
            if(!DokuCookie.getValue('diff_select_inline')) {
                diff_sel.diff_radio[0].checked = false;
                diff_sel.diff_radio[1].checked = true;
            } else {
                diff_sel.diff_radio[0].checked = true;
                diff_sel.diff_radio[1].checked = false;
            }
            DiffSelection();
        }
}

addInitEvent(installDiffSelection);



/* XXXXXXXXXX end of lib/scripts/diff_sel.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/tpl/analog/script.js XXXXXXXXXX */


addInitEvent(function(){

    var navi = $('lo__navigation');
    if(!navi) return;

    var lis = getElementsByClass('level1',navi,'li');

    for(var i=0; i<lis.length; i++){
        var subs = lis[i].getElementsByTagName('ul');
        for(var j=0; j<subs.length; j++){
            subs[j].style.display = 'none';
            subs[j].className += ' flyout';
        }
        if (subs.length === 0) {
            lis[i].className += ' noflyout';
        }
    }

    addEvent(navi,'mouseover',function(e){
        var relTarg = e.target;

        var node = null;
        if(relTarg.nodeName == 'A'){
            node = relTarg.parentNode.parentNode;
            if(node.className != 'level1') return;
        }else if(relTarg.className && relTarg.className.match(/li/)){
            node = relTarg.parentNode;
            if(node.className != 'level1') return;
        }else if(relTarg.className == 'level1'){
            node = relTarg;
        }
        if(!node) return;

        node.firstChild.className += ' flying';

        var subs = node.getElementsByTagName('ul');
        for(var j=0; j<subs.length; j++){
            subs[j].style.display = '';
        }
    });

    addEvent(navi,'mouseout',function(e){
        var t1 = e.relatedTarget || e.toElement;
        var t2 = e.target;

        while (t1 && t1.className !== 'level1') {
            t1 = t1.parentNode;
        }
        while (t2 && t2.className !== 'level1') {
            t2 = t2.parentNode;
        }

        if (t1 === t2) {
            return;
        }

        if(t1 && t1.firstChild && t1.firstChild.className){
            t1.firstChild.className = t1.firstChild.className.replace(/flying/g,'');
        }
        if(t2 && t2.firstChild && t2.firstChild.className){
            t2.firstChild.className = t2.firstChild.className.replace(/flying/g,'');
        }

        if(!t2) return;

        // okay, hide it
        var subs = t2.getElementsByTagName('ul');
        for(var j=0; j<subs.length; j++){
            subs[j].style.display = 'none';
        }
    });

});

function installSummaryEnforcement()
{
    var summary_input = document.getElementById('edit__summary');
    if(summary_input !== null)
    {
        var minoredit_input = document.getElementById('minoredit');

        addEvent(summary_input, 'change', enforceSummary);
        addEvent(summary_input, 'keyup', enforceSummary);
        addEvent(minoredit_input, 'change', enforceSummary);
        addEvent(minoredit_input, 'click', enforceSummary);
        enforceSummary(); // summary may be there if we're previewing
    }
}

function enforceSummary()
{
    var btn_save = document.getElementById('edbtn__save');
    var summary_input = document.getElementById('edit__summary');
    var minoredit_input = document.getElementById('minoredit');
    var disabled = false;

    if(summary_input.value.replace(/^\s+/,"") === '')
        {disabled = true;}

    if(disabled != btn_save.disabled || btn_save.disabled === null)
    {
        btn_save.className = disabled ? 'button button_disabled' : 'button';
        btn_save.disabled = disabled;
    }
}

addInitEvent(function(){installSummaryEnforcement();});


/* XXXXXXXXXX end of lib/tpl/analog/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/math/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/math/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/definitionlist/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/definitionlist/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/plugin/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/plugin/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/searchindex/script.js XXXXXXXXXX */

/**
 * Javascript for searchindex manager plugin
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */

/**
 * Class to hold some values
 */
function plugin_searchindex_class(){
    this.pages = null;
    this.page = null;
    this.sack = null;
    this.done = 1;
    this.count = 0;
}
var pl_si = new plugin_searchindex_class();
pl_si.sack = new sack(DOKU_BASE + 'lib/plugins/searchindex/ajax.php');
pl_si.sack.AjaxFailedAlert = '';
pl_si.sack.encodeURIString = false;

/**
 * Display the loading gif
 */
function plugin_searchindex_throbber(on){
    obj = document.getElementById('pl_si_throbber');
    if(on){
        obj.style.visibility='visible';
    }else{
        obj.style.visibility='hidden';
    }
}

/**
 * Gives textual feedback
 */
function plugin_searchindex_status(text){
    obj = document.getElementById('pl_si_out');
    obj.innerHTML = text;
}

/**
 * Callback. Gets the list of all pages
 */
function plugin_searchindex_cb_clear(){
    ok = this.response;
    if(ok == 1){
        // start indexing
        window.setTimeout("plugin_searchindex_index()",1000);
    }else{
        plugin_searchindex_status(ok);
        // retry
        window.setTimeout("plugin_searchindex_clear()",5000);
    }
}

/**
 * Callback. Gets the list of all pages
 */
function plugin_searchindex_cb_pages(){
    data = this.response;
    pl_si.pages = data.split("\n");
    pl_si.count = pl_si.pages.length;
    plugin_searchindex_status(pl_si.pages.length+" pages found");

    pl_si.page = pl_si.pages.shift();
    window.setTimeout("plugin_searchindex_clear()",1000);
}

/**
 * Callback. Gets the info if indexing of a page was successful
 *
 * Calls the next index run.
 */
function plugin_searchindex_cb_index(){
    ok = this.response;
    if(ok == 1){
        pl_si.page = pl_si.pages.shift();
        pl_si.done++;
        // get next one
        window.setTimeout("plugin_searchindex_index()",1000);
    }else{
        plugin_searchindex_status(ok);
        // get next one
        window.setTimeout("plugin_searchindex_index()",5000);
    }
}

/**
 * Starts the indexing of a page.
 */
function plugin_searchindex_index(){
    if(pl_si.page){
        plugin_searchindex_status('indexing '+pl_si.page+' ('+pl_si.done+'/'+pl_si.count+')');
        pl_si.sack.onCompletion = plugin_searchindex_cb_index;
        pl_si.sack.URLString = '';
        pl_si.sack.runAJAX('call=indexpage&page='+encodeURI(pl_si.page));
    }else{
        plugin_searchindex_status('finished');
        plugin_searchindex_throbber(false);
    }
}

/**
 * Cleans the index
 */
function plugin_searchindex_clear(){
    plugin_searchindex_status('clearing index...');
    pl_si.sack.onCompletion = plugin_searchindex_cb_clear;
    pl_si.sack.URLString = '';
    pl_si.sack.runAJAX('call=clearindex');
}

/**
 * Starts the whole index rebuild process
 */
function plugin_searchindex_go(){
    document.getElementById('pl_si_gobtn').style.display = 'none';
    plugin_searchindex_throbber(true);

    plugin_searchindex_status('Finding all pages');
    pl_si.sack.onCompletion = plugin_searchindex_cb_pages;
    pl_si.sack.URLString = '';
    pl_si.sack.runAJAX('call=pagelist');
}

//Setup VIM: ex: et ts=4 enc=utf-8 :


/* XXXXXXXXXX end of lib/plugins/searchindex/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/templater/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/templater/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/text/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/text/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/usermanager/script.js XXXXXXXXXX */

/**
 * Add JavaScript confirmation to the User Delete button
 */
function usrmgr_delconfirm(){
    if($('usrmgr__del')){
        addEvent( $('usrmgr__del'),'click',function(){ return confirm(reallyDel); } );
    }
};
addInitEvent(usrmgr_delconfirm);


/* XXXXXXXXXX end of lib/plugins/usermanager/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/acl/script.js XXXXXXXXXX */

acl = {
    init: function(){
        this.ctl = $('acl_manager');
        if(!this.ctl) return;

        var sel = $('acl__user').getElementsByTagName('select')[0];

        addEvent(sel,'change',acl.userselhandler);
        addEvent($('acl__tree'),'click',acl.treehandler);
        addEvent($('acl__user').getElementsByTagName('input')[1],'click',acl.loadinfo);
    },


    /**
     * Handle user dropdown
     */
    userselhandler: function(e){
        // make entry field visible/invisible
        if(this.value == '__g__' || this.value == '__u__'){
            $('acl__user').getElementsByTagName('input')[0].style.display = ''; //acl_w
            $('acl__user').getElementsByTagName('input')[1].style.display = ''; //submit
        }else{
            $('acl__user').getElementsByTagName('input')[0].style.display = 'none';
            $('acl__user').getElementsByTagName('input')[1].style.display = 'none';
        }

        acl.loadinfo();
    },

    /**
     * Load the current permission info and edit form
     *
     * @param frm - Form element with needed data
     */
    loadinfo: function(){
        // get form
        var frm = $('acl__detail').getElementsByTagName('form')[0];

        // prepare an AJAX call
        var ajax = new sack(DOKU_BASE + 'lib/plugins/acl/ajax.php');
        ajax.AjaxFailedAlert = '';
        ajax.encodeURIString = false;
        if(ajax.failed) return true;

        // prepare data
        var data = Array();
        data[0] = ajax.encVar('ns',frm.elements['ns'].value);
        data[1] = ajax.encVar('id',frm.elements['id'].value);
        data[2] = ajax.encVar('acl_t',frm.elements['acl_t'].value);
        data[3] = ajax.encVar('acl_w',frm.elements['acl_w'].value);
        data[4] = ajax.encVar('sectok',frm.elements['sectok'].value);
        data[5] = ajax.encVar('ajax','info');

        ajax.elementObj = $('acl__info');

        ajax.runAJAX(data.join('&'));
        return false;
    },

    /**
     * parse URL attributes into a associative array
     *
     * @todo put into global script lib?
     */
    parseatt: function(str){
        if(str[0] == '?') str = str.substr(1);
        var attributes = {};
        var all = str.split('&');
        for(var i=0; i<all.length; i++){
            var att = all[i].split('=');
            attributes[att[0]] = decodeURIComponent(att[1]);
        }
        return attributes;
    },

    /**
     * htmlspecialchars equivalent
     *
     * @todo put in gloabl scripts lib?
     */
    hsc: function(str) {
        str = str.replace(/&/g,"&amp;");
        str = str.replace(/\"/g,"&quot;");
        str = str.replace(/\'/g,"&#039;");
        str = str.replace(/</g,"&lt;");
        str = str.replace(/>/g,"&gt;");
        return str;
    },


    /**
     * Open or close a subtree using AJAX
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    treetoggle: function(clicky){
        var listitem = clicky.parentNode.parentNode;

        // if already open, close by removing the sublist
        var sublists = listitem.getElementsByTagName('ul');
        if(sublists.length){
            listitem.removeChild(sublists[0]);
            clicky.src = DOKU_BASE+'lib/images/plus.gif';
            clicky.alt = '+';
            return false;
        }

        // get the enclosed link (is always the first one)
        var link = listitem.getElementsByTagName('a')[0];

        // prepare an AJAX call to fetch the subtree
        var ajax = new sack(DOKU_BASE + 'lib/plugins/acl/ajax.php');
        ajax.AjaxFailedAlert = '';
        ajax.encodeURIString = false;
        if(ajax.failed) return true;

        //prepare the new ul
        var ul = document.createElement('ul');
        listitem.appendChild(ul);
        ajax.elementObj = ul;
        ajax.setVar('ajax', 'tree');
        var frm = $('acl__detail').getElementsByTagName('form')[0];
        ajax.setVar('current_ns', encodeURIComponent(frm.elements['ns'].value));
        ajax.setVar('current_id', encodeURIComponent(frm.elements['id'].value));
        ajax.runAJAX(link.search.substr(1));
        clicky.src = DOKU_BASE+'lib/images/minus.gif';
        return false;
    },

    /**
     * Handles all clicks in the tree, dispatching the right action based on the
     * clicked element
     */
    treehandler: function(e){
        if(e.target.src){ // is it an image?
            acl.treetoggle(e.target);
        } else if(e.target.href){ // is it a link?
            // remove highlighting
            var obj = getElementsByClass('cur',$('acl__tree'),'a');
            for(var i=0; i<obj.length; i++){
                obj[i].className = obj[i].className.replace(/ cur/,'');
            }

            // add new highlighting
            e.target.className += ' cur';

            // set new page to detail form
            var frm = $('acl__detail').getElementsByTagName('form')[0];
            if(e.target.className.search(/wikilink1/) > -1){
                frm.elements['ns'].value = '';
                frm.elements['id'].value = acl.hsc(acl.parseatt(e.target.search)['id']);
            }else if(e.target.className.search(/idx_dir/) > -1){
                frm.elements['ns'].value = acl.hsc(acl.parseatt(e.target.search)['ns']);
                frm.elements['id'].value = '';
            }

            acl.loadinfo();
        }

        e.stopPropagation();
        e.preventDefault();
        return false;
    }

};

addInitEvent(acl.init);


/* XXXXXXXXXX end of lib/plugins/acl/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/config/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/config/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/wikitracer/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/wikitracer/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/info/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/info/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/revert/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/revert/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/xterm/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/xterm/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/customizer/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/customizer/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/underconstruction/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/underconstruction/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/amazon/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/amazon/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/odt/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/odt/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/discussion/script.js XXXXXXXXXX */

function isBlank(s){
  if ((s === null) || (s.length === 0)){
    return true;
  }

  for (var i = 0; i < s.length; i++){
    var c = s.charAt(i);
	  if ((c != ' ') && (c != '\n') && (c != '\t')){
	    return false;
    }
  }
  return true;
}

function validate(frm){
  if (isBlank(frm.mail.value) || frm.mail.value.indexOf("@") == -1){
    frm.mail.focus();
    return false;
  }
  if (isBlank(frm.name.value)){
    frm.name.focus();
    return false;
  }

  if (isBlank(frm.text.value)){
    frm.text.focus();
    return false;
	}
}

/* XXXXXXXXXX end of lib/plugins/discussion/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/toc/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/toc/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/folded/script.js XXXXXXXXXX */

/*
 * For Folded Text Plugin
 *
 * @author Fabian van-de-l_Isle <webmaster [at] lajzar [dot] co [dot] uk>
 * @author Christopher Smith <chris [at] jalakai [dot] co [dot] uk>
 */

// containers for localised reveal/hide strings, 
// populated from html comments in hidden elements on the page
var folded_reveal = 'reveal';
var folded_hide = 'hide';

/*
 * toggle the folded element via className change
 * also adjust the classname and title tooltip on the folding link
 */
function folded_toggle(evt) {
  id = this.href.match(/#(.*)$/)[1];
  e = $(id);
  if (!e) return;

  if (e.className.match(/\bhidden\b/)) {
    e.className = e.className.replace(/\bhidden\b/g,'');
    e.className = e.className.replace(/  /g,' ');

    this.title = folded_hide;

    this.className += ' open';
  } else {
    e.className += ' hidden';

    this.title = folded_reveal;

    this.className = this.className.replace(/\bopen\b/g,'');
    this.className = this.className.replace(/  /g,' ');
  }

  evt.preventDefault();
  return false;
}

/*
 * run on document load, setup everything we need
 */
function folded_setup() {
  
  // extract and save localised title tooltip strings
  var eStrings = $('folded_reveal','folded_hide');
  if (!eStrings[0]) return;

  folded_reveal = eStrings[0].innerHTML.match(/^<!-- (.*) -->$/)[1];
  folded_hide = eStrings[1].innerHTML.match(/^<!-- (.*) -->$/)[1];

  // find all folder links, assign onclick handler and title tooltip for initial state
  var folds = getElementsByClass('folder');
  for (var i=0; i<folds.length; i++) {    
    addEvent(folds[i], 'click', folded_toggle);
    folds[i].title = folded_reveal;
  }
}

addInitEvent(folded_setup);

// support graceful js degradation, this hides the folded blocks from view before they are shown, 
// whilst still allowing non-js user to see any folded content.
document.write('<style type="text/css" media="screen"><!--/*--><![CDATA[/*><!--*/ .folded.hidden { display: none; } .folder .indicator { visibility: visible; } /*]]>*/--></style>');


/* XXXXXXXXXX end of lib/plugins/folded/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/vshare/script.js XXXXXXXXXX */


/**
 * Append a toolbar button
 */
if(window.toolbar != undefined){
    toolbar[toolbar.length] = {"type":  "pluginvshare",
                               "title": LANG['plugins']['vshare']['button'],
                               "icon":  DOKU_BASE+"lib/plugins/vshare/button.png",
                               "key":   ""};
}

/**
 * Try to determine the video service, extract the ID and insert
 * the correct syntax
 */
function tb_pluginvshare(btn, props, edid) {
    var text = prompt(LANG['plugins']['vshare']['prompt']);
    if(!text) return;

    // This includes the site patterns:
    /**
 * video URL recognition patterns
 *
 * The first match group is used as video ID
 *
 * You need to touch conf/local.php to refresh the cache after changing
 * this file
 */

var sites = {
    'youtube':     'youtube\\.com/.*[&?]v=([a-z0-9_\\-]+)',
    '12seconds':   '12seconds\\.com\\/v\\/([a-z0-9_]+)',
    '5min':        '5min\\.com\\/Video/.*-([0-9]+)([&?]|$)',
    'clipfish':    'clipfishi\\.de\\/.*\\/video\\/([0-9])+\\/',
    'blogtv':      'blogtv\.com\\/Shows\\/\\d+\\/([a-z0-9]+_[a-z0-9]+)([&?]|$)',
    'current':     'current\\.com\\/items\\/(\\d+)',
    'dailymotion': 'dailymotion\\.com\\/video\\/([a-z0-9]+)_',
    'googlevideo': 'video\\.google\\.com\\/videoplay\\?docid=([\\-\\d]+)',
    'gtrailers':   'gametrailers\\.com\\/.*\\/(\\d+)',
    'justintv':    'justin\\.tv\\/clip\\/([a-f0-9]+)',
    'metacafe':    'metacafe\\.com\\/watch\\/(\\d+)\\/',
    'myspacetv':   'vids\\.myspace\\.com\\/.*videoid=(\\d+)',
    'rcmovie':     'rcmovie\\.de\\/video\\/([a-f0-9]+)\\/',
    'revver':      'revver\\.com\\/video\\/(\\d+)\\/',
    'scivee':      'scivee\\.tv\\/node\\/(\\d+)',
    'sevenload':   'sevenload\\.com\\/.*\\/([a-z0-9]+)-[^\\/]*$',
    'stickam':     'stickam\\.com\\/viewMedia.do\\?mId=(\\d+)',
    'ustream':     'ustream\\.tv\\/recorded\\/(\\d+)\\/',
    'veoh':        'veoh\\.com\\/.*watch[^v]*(v[a-z0-9]+)',
    'vimeo':       'vimeo\\.com\\/(\\d+)'
};



    for (var key in sites){
        var RE = new RegExp(sites[key],'i');
        var match = text.match(RE);
        if(match){
            var code = '{{'+key+'>'+match[1]+'?medium}}';
            insertAtCarret(edid, code);
            return;
        }
    }

    alert(LANG['plugins']['vshare']['notfound']);
}



/* XXXXXXXXXX end of lib/plugins/vshare/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/popularity/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/popularity/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/include/script.js XXXXXXXXXX */

/**
 * Javascript functionality for the include plugin
 */

/**
 * Highlight the included section when hovering over the appropriate include edit button
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 * @author Michael Klier <chi@chimeric.de>
 */
addInitEvent(function(){
    var btns = getElementsByClass('btn_incledit',document,'form');
    for(var i=0; i<btns.length; i++){
        addEvent(btns[i],'mouseover',function(e){
            var tgt = e.target;
            if(tgt.form) tgt = tgt.form;
            id = 'plugin_include__' + tgt.id.value;
            var divs = getElementsByClass('plugin_include_content');
            for(var j=0; j<divs.length; j++) {
                if(divs[j].id == id) {
                    divs[j].className += ' section_highlight';
                }
            }
        });

        addEvent(btns[i],'mouseout',function(e){
            var secs = getElementsByClass('section_highlight',document,'div');
            for(var j=0; j<secs.length; j++){
                secs[j].className = secs[j].className.replace(/ section_highlight/,'');
            }
        });
    }
});

// vim:ts:4:sw:4:et:enc=utf-8:


/* XXXXXXXXXX end of lib/plugins/include/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/translation/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/translation/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/goto/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/goto/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/s5/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/s5/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/note/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/note/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/draw/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/draw/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/alphaindex/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/alphaindex/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/box/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/box/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/graphviz/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/graphviz/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/dw2pdf/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/dw2pdf/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/source/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/source/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of lib/plugins/register/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of lib/plugins/register/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of conf/userscript.js XXXXXXXXXX */

var default_text = " Enter Keywords, Page Name, or part number to search the Wiki";

function DefaultSearch_blur()
{
	var search_input = document.getElementById('qsearch__in');
	if (search_input !== null && search_input.value == "")
		search_input.value = default_text;
}

function DefaultSearch_focus()
{
	var search_input = document.getElementById('qsearch__in');
	if (search_input !== null && search_input.value == default_text)
		search_input.value = "";
}

function CheckSearch()
{
	var search_input = document.getElementById('qsearch__in');
	if (search_input !== null && search_input.value == default_text)
		search_input.value = "";
}

function installDefaultSearch()
{
	var search_input = document.getElementById('qsearch__in');
	var search_form  = document.getElementById('dw__search');
	if(search_input !== null) {
		addEvent(search_input, 'focus', DefaultSearch_focus);
		addEvent(search_input, 'blur',  DefaultSearch_blur);
		search_input.value = default_text;
	}
	if (search_form !== null) {
		addEvent(search_form, 'click', CheckSearch);
	}
        

}

addInitEvent(installDefaultSearch);


/* XXXXXXXXXX end of conf/userscript.js XXXXXXXXXX */

addInitEvent(function(){ addEvent(document,'click',closePopups); });
addInitEvent(function(){ addTocToggle(); });
addInitEvent(function(){ initSizeCtl('size__ctl','wiki__text'); });
addInitEvent(function(){ initToolbar('tool__bar','wiki__text',toolbar); });
addInitEvent(function(){ locktimer.init(840,'Your lock for editing this page is about to expire in a minute.\nTo avoid conflicts use the preview button to reset the locktimer.',1); });
addInitEvent(function(){ scrollToMarker(); });
addInitEvent(function(){ focusMarker(); });

