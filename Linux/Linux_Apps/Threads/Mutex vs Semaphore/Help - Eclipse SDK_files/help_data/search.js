var startText = "";
var acListLength = 0;
function subBuildAcWordListJson(_classBank, json) {
    var parentEl = _classBank.wordListWrap;
    var query = _classBank.qt.value.toLowerCase();
    var len = acListLength = json.length;
    while (parentEl.childNodes.length > 0) {
        parentEl.removeChild(parentEl.childNodes[0]);
    }
    if (len > 0) {
        var mistakeQuery = "";
        if (query.charCodeAt(0) < 127) mistakeQuery = assembleHangul(query);
        var ulEl = document.createElement("UL");
        ulEl.style.padding = "5px 0px 5px 0px";
        for (var i = 0; i < len; i++) {
            var value = json[i];
            value = value.toLowerCase().replace(/^\s*/, "").replace(/\s*$/, "");
            var tempValue = replaceRegExp(value, query, _classBank.G_AC_START_HL_TAG + query + _classBank.G_AC_END_HL_TAG);
            if (mistakeQuery.length > 0) tempValue = replaceRegExp(tempValue, mistakeQuery, _classBank.G_AC_START_HL_TAG + mistakeQuery + _classBank.G_AC_END_HL_TAG);
            var liEl = document.createElement("LI");
            liEl.style.color = "#494a4d";
            liEl.style.fontWeight = "bold";
            liEl.style.height = "20px";
            liEl.style.margin = "0 0 0px 0";
            liEl.style.textAlign = "left";
            liEl.instance = _classBank;
            liEl.onmouseover = function() {
                this.instance.setAcWordFocus(this, 1);
            }
            liEl.onmouseout = function() {
                this.instance.setAcWordFocus(this, 0);
            }
            var aEl = document.createElement("A");
            aEl.href = "#";
            aEl.innerHTML = "<span style='font-size:" + _classBank.Auto.fontSize + ";'>" + tempValue + "</span>";
            aEl.instance = _classBank;
            aEl.onclick = function(e) {
                this.instance.qt.value = this.innerHTML.stripTags().strip();
                this.instance.displayoutLayer();
                goTopSearch();
            };
            aEl.style.fontSize = _classBank.Auto.fontSize;
            liEl.appendChild(aEl);
            liEl.appendChild(document.createElement("BR"));
            ulEl.appendChild(liEl);
        }
        parentEl.appendChild(ulEl);
        _classBank.acListPos = -1;
    }
}
var TAutoComplete2 = Class.create();
var classBankSub = null;
TAutoComplete2.prototype = {
    initialize: function(initVar, tSearch)    {
        this.G_AC_START_HL_TAG = "<font color=#b85c2e>";
        this.G_AC_END_HL_TAG = "</font>";
        this.G_AC_BG_COLOR = "#EFEFEF";
        this.url = '/common/search/queryCompletionList.do';
        this.lastQuery = "";
        this.obj = new String();
        this.Auto = initVar;
        this.observeAutoArea = 0;
        this.acListPos = 0;
        this.scrollTopId = 0;
        this.scrollBottomId = this.Auto.listSize - 1;
        this.height = this.Auto.listSize * 20;
        if (!this.createAutoWap()){
        }
        if (!this.initQt()){
        }
        this.displayoutLayer();
    },
    createObj: function(_objNm) {
        try {
            var tmpObj = document.getElementById(_objNm);
            if (!tmpObj){
            }

            return tmpObj
        } catch(e) {
            alert(e);
            return false;
        }
    },
    createAutoWap: function() {

        try {
            this.autoCompleteWrap = document.createElement("DIV");
            this.autoCompleteWrap.style.display = "none";
            this.autoCompleteWrap.style.position = "absolute";
            this.autoCompleteWrap.style.top = "-15px";
            this.autoCompleteWrap.style.left = "257px";
            this.autoCompleteWrap.style.zIndex = "99999";
            this.autoCompleteWrap.style.width = "300px";
            this.autoCompleteWrap.style.background = "#ffffff no-repeat 0 100%";
            this.autoCompleteWrap.style.padding = "0 0 0px 0";
            this.autoCompleteWrap.style.margin = "-2px 0 0 -3px";
            this.autoCompleteWrap.style.border = "0px solid #D0D0D0";
            this.autoCompleteWrap.style.borderTop = "none";
            this.wordListWrap = document.createElement("DIV");
            this.wordListWrap.style.borderBottom = "1px solid #f2f2f2";
            this.wordListWrap.style.padding = "0px 0 0 8px";
            this.wordListWrap.style.overflowY = "auto";
            this.wordListWrap.style.lineHeight = "18px";
            this.wordListWrap.style.height = (this.height + 10) + "px";
            this.wordListWrap.style.overflowX = "auto";
            this.wordListWrap.style.whiteSpace = "nowrap";
            this.wordListWrap.style.border = "1px solid #D0D0D0";
            this.autoCompleteWrap.appendChild(this.wordListWrap);
            var parent = document.getElementsByTagName("BODY")[0];
            parent.insertBefore(this.autoCompleteWrap, parent.firstChild);
            this.wordListWrap.style.display = "none";
            this.autoCompleteWrap.style.display = "none";
            this.autoCompleteWrap.instance = this;
            this.autoCompleteWrap.onmouseover = function() {
                this.instance.observeAutoArea = 1
            };
            this.autoCompleteWrap.onmouseout = function() {
                this.instance.observeAutoArea = 0
            };

            return true;
        } catch(e) {
            return false;

        }
    },
    initQt: function() {
        try {
            this.qt = this.createObj(this.Auto.autoKeywordInputId);
            startText = this.qt.value;
            this.qt.AutoComplete = "off";
            this.qt.autoInstance = this;
            this.qt.onkeydown = function(e) {
                this.autoInstance.displayoutLayer();
                this.autoInstance.open(e, 1);
            };
            this.qt.onkeyup = function(e) {
                this.autoInstance.open(e, 0);
            };
            this.qt.onblur = function(e) {
                this.autoInstance.displayoutLayer();
            };
            this.qt.onfocus = function(e) {
                this.autoInstance.clearVal();
            };
            return true;
        } catch(e) {
            return false;
        }
    },
    get: function()    {
        var value = this.qt.value.replace(/^\s*/, "").replace(/\s*$/, "");
        if (value == "") {
            this.lastQuery = value;
            this.displayoutLayer();
            return;
        }
        if (this.lastQuery == value) return;
        this.lastQuery = value;
        value = encodeURI(value);
        var setUrl = this.url + "?" + 'keyword=' + value;
        this.autoCompleteWrap.style.width = eval(this.qt.offsetWidth + 24) + 'px';
        this.autoCompleteWrap.style.left = eval(getRealOffsetLeft(this.qt) + 4) + 'px';
        this.autoCompleteWrap.style.top = eval(getRealOffsetTop(this.qt) + 22) + 'px';
        classBankSub = this;
        var ajax = new ajaxRequest(setUrl, null);
        ajax.displayJson = function(data) {
            var json = data.responseText.evalJSON(true);
            try {
                if (json.length > 0) {
                    subBuildAcWordListJson(classBankSub, json);
                    classBankSub.wordListWrap.style.display = "";
                    classBankSub.autoCompleteWrap.style.display = "";
                } else {
                    classBankSub.wordListWrap.style.display = "none";
                    classBankSub.autoCompleteWrap.style.display = "none";
                }
            } catch(e) {
            }
        }
        ajax.action();
    },
    open: function(e, arg)    {
        var key = window.ActiveXObject ? window.event.keyCode : e.which;
        switch (key) {
            case 13:
                this.displayoutLayer();
                break;
            case 27:
                break;
            case 38:
            case 37:
                if (acListLength > 0 && parseInt(arg) == 1) this.setPosAcword(-1, this.wordListWrap);
                break;
            case 40:
            case 39:
                if (acListLength > 0 && parseInt(arg) == 1) this.setPosAcword(1, this.wordListWrap);
                break;
            default:
                if (parseInt(arg) == 0 && key != 229) {
                    this.get();
                }
                break;
        }
    },
    displayoutLayer: function() {
        if ((this.wordListWrap && this.observeAutoArea == "0" ))        {
            this.wordListWrap.style.display = "none";
            this.autoCompleteWrap.style.display = "none";
        }
    },
    clearVal: function() {
        var inputQr = this.qt;
        if (inputQr.value == startText || inputQr.value == startText) {
            inputQr.value = "";
        }
    },
    setPosAcword: function(value, tmpListSection) {
        try {
            var acListPosLast = this.acListPos;
            this.acListPos += parseInt(value);
            if (this.acListPos < 0) {
                this.acListPos = 0;
            } else {
                if (this.acListPos >= acListLength - 1) this.acListPos = acListLength - 1;
                this.qt.value = tmpListSection.childNodes[0].childNodes[this.acListPos].childNodes[0].innerHTML.stripTags().strip();
                if (acListPosLast >= 0) this.setAcWordFocus(tmpListSection.childNodes[0].childNodes[acListPosLast], 0, "");
                this.setAcWordFocus(tmpListSection.childNodes[0].childNodes[this.acListPos], 1, this.acListPos);
                if (this.autoCompleteWrap.style.display == "none") {
                    this.wordListWrap.style.display = "";
                    this.autoCompleteWrap.style.display = "";
                }
                if (value > 0) {
                    if (this.acListPos > this.scrollBottomId) {
                        this.scrollTopId = this.scrollTopId + 1;
                        this.scrollBottomId = this.scrollBottomId + 1;
                        this.wordListWrap.scrollTop = this.acListPos * 20 - (this.height - 20);
                    }
                } else {
                    if (this.acListPos < this.scrollTopId) {
                        this.scrollTopId = this.scrollTopId - 1;
                        this.scrollBottomId = this.scrollBottomId - 1;
                        this.wordListWrap.scrollTop = this.wordListWrap.scrollTop - 20;
                    }
                }
            }
        } catch(e) {
        }
    },
    setAcWordFocus: function(_li, numType, i) {
        _li.style.backgroundColor = (parseInt(numType) > 0) ? this.G_AC_BG_COLOR : "";
    }
}
{
    var qt2 = new String();
    qt2.fontSize = "12px";
    qt2.listSize = "5";
    qt2.autoKeywordInputId = "topSearch";
}
var autoInit2 = function() {
    var tSearch = null;
    new TAutoComplete2(qt2, tSearch);
}
addEvent(window, 'load', autoInit2);
function getRealOffsetTop(el) {
    return el ? el.offsetTop + getRealOffsetTop(el.offsetParent) : 0;
}
function getRealOffsetLeft(el) {
    return el ? el.offsetLeft + getRealOffsetLeft(el.offsetParent) : 0;
}
function assembleHangul(strValue) {
    var firstSoundsEngMapCode = 0;
    var middleSoundsEngMapCode = 0;
    var lastSoundsEngMapCode = 0;
    var resultValue = "";
    for (var idx = 0; idx < strValue.length; idx++) {
        firstSoundsEngMapCode = getHangulCode('firstSoundsEngMap', strValue.substring(idx, idx + 1));
        idx++;
        var tempMedialCode = getHangulCode('middleSoundsEngMap', strValue.substring(idx, idx + 2));
        if (tempMedialCode != -1) {
            middleSoundsEngMapCode = tempMedialCode;
            idx += 2;
        } else {
            middleSoundsEngMapCode = getHangulCode('middleSoundsEngMap', strValue.substring(idx, idx + 1));
            idx++;
        }
        var tempFinalCode = getHangulCode('lastSoundsEngMap', strValue.substring(idx, idx + 2));
        if (tempFinalCode != -1) {
            lastSoundsEngMapCode = tempFinalCode;
            tempMedialCode = getHangulCode('middleSoundsEngMap', strValue.substring(idx + 2, idx + 3));
            if (tempMedialCode != -1) {
                lastSoundsEngMapCode = getHangulCode('lastSoundsEngMap', strValue.substring(idx, idx + 1));
            } else {
                idx++;
            }
        } else {
            tempMedialCode = getHangulCode('middleSoundsEngMap', strValue.substring(idx + 1, idx + 2));
            if (tempMedialCode != -1) {
                lastSoundsEngMapCode = 0;
                idx--;
            } else {
                lastSoundsEngMapCode = getHangulCode('lastSoundsEngMap', strValue.substring(idx, idx + 1));
                if (lastSoundsEngMapCode == -1) lastSoundsEngMapCode = 0;
            }
        }
        resultValue += String.fromCharCode(0xAC00 + firstSoundsEngMapCode + middleSoundsEngMapCode + lastSoundsEngMapCode);
    }
    return resultValue;
}
var firstSoundsEngMap = new Array(
        "r", "R", "s", "e", "E", "f", "a", "q", "Q", "t",
        "T", "d", "w", "W", "c", "z", "x", "v", "g"); 
var middleSoundsEngMap = new Array(
        "k", "o", "i", "O", "j", "p", "u", "P", "h", "hk",
        "ho", "hl", "y", "n", "nj", "np", "nl", "b", "m", "ml",
        "l");
var lastSoundsEngMap = new Array(
        "", "r", "R", "rt", "s", "sw", "sg", "e", "f", "fr", "fa",
        "fq", "ft", "fx", "fv", "fg", "a", "q", "qt", "t", "T",
        "d", "w", "c", "z", "x", "v", "g");
function getHangulCode(typeVar, charVar) {
    var returnCode;
    var isFind = false;
    if (typeVar == 'firstSoundsEngMap') {
        for (var i = 0; i < firstSoundsEngMap.length; i++) {
            if (firstSoundsEngMap[i] == charVar) {
                returnCode = i * 21 * 28;
                isFind = true;
                break;
            }
        }
    } else if (typeVar == 'middleSoundsEngMap') {
        for (var i = 0; i < middleSoundsEngMap.length; i++) {
            if (middleSoundsEngMap[i] == charVar) {
                returnCode = i * 28;
                isFind = true;
                break;
            }
        }
    } else if (typeVar == 'lastSoundsEngMap') {
        for (var i = 0; i < lastSoundsEngMap.length; i++) {
            if (lastSoundsEngMap[i] == charVar) {
                returnCode = i + 1;
                isFind = true;
                break;
            }
        }
    }
    if (isFind == false) returnCode = -1; // 값을 찾지 못했을 경우 -1 리턴
    return returnCode;
}
function replaceRegExp(strValue, strReceptor, strEffector) {
    var objRegExp = new RegExp(strReceptor, "gi"); //정규식선언
    strValue = strValue.replace(objRegExp, strEffector);
    return strValue;
}