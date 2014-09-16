var errorObj = null;
var ajaxRequest = function(url, form) {
    this.url = url;
    this.form = form;
    if (form) {
        this.method = "post";
    } else {
        this.method = "get";
    }
}
ajaxRequest.prototype = {
    action : function() {
        if (errorObj) {
            Element.hide(errorObj);
        }
        var obj = this;
        if (this.method == "get") {
            new Ajax.Request(obj.url,
            {
                method:'get',
                onSuccess: obj.displayJson,
                onFailure: function() {
                    return false;
                }
            });
        } else {
            new Ajax.Request(obj.url, {
                asynchronous : false,
                method:'post',
                parameters:Form.serialize(obj.form),
                onSuccess: obj.displayJson,
                onFailure: function() {
                    return false;
                }
            });
        }
    },
    displayJson : function() {   }
}
String.prototype.cut = function(len, tail) {
    var str = this;
    var l = 0;
    for (var i = 0; i < str.length; i++) {
        l += (str.charCodeAt(i) > 128) ? 2 : 1;
        if (l > len) return str.substring(0, i) + tail;
    }
    return str;
}
String.prototype.charSize = function() {
    var str = this;
    var l = 0;
    for (var i = 0; i < str.length; i++) {
        l += (str.charCodeAt(i) > 128) ? 2 : 1;
    }
    return l;
}

var SetAjaxDataInHTML = Class.create();
SetAjaxDataInHTML.prototype = {
    initialize : function() {},
    setHtmlinJson : function(obj, html) {
        var tmp = html
        for (var key in obj) {
            tmp = tmp.split("#" + key + "#").join(eval("obj." + key));
        }
        return tmp;
    },
    setHtmlinXmlAttribute : function(xml, html) {
        var tmp = html;
        $A(xml.attributes).each(function(attr) {
            tmp = tmp.split("#" + attr.name + "#").join(attr.value);
        });
        return tmp;
    },
    setHtmlinXmlValue : function(xml, html) {
        var thisF = this;
        var tmp = html;
        $A(xml.childNodes).each(function(node) {
            if (node.tagName) {
                var text = node.firstChild.nodeValue;
                if (node.attributes && node.attributes.length > 0) {
                    $A(node.attributes).each(function(att) {
                        switch (att.name) {
                            case "maxText" :
                                text = thisF.stringMaxText(text, node);
                                break;
                        }
                    });
                }
                var status = node.getAttribute("escapeHTML");
                if (status && status == "false") {
                    tmp = tmp.split("#" + node.tagName + "#").join(text.strip());
                } else {
                    tmp = tmp.split("#" + node.tagName + "#").join(text.escapeHTML().strip().replace(/\n/g, "<br/>"));
                }
            }
        });
        return tmp;
    },
    getXmlFirstText : function(xmlObj, tagName) {
        var result = "";
        try {
            if (xmlObj) {
                result = xmlObj.getElementsByTagName(tagName)[0].firstChild.nodeValue.strip();
            }
        } catch(e) {
        }
        return result;
    },
    getXmlChildTagValue : function(xmlObj, tagName) {
        var result = "";
        $A(xmlObj.childNodes).each(function(node) {
            if (node.tagName) {
                if (node.tagName == tagName) {
                    result = node.firstChild.nodeValue.strip();
                }
            }
        });

        return result;
    },
    stringMaxText : function(text, node) {
        var setText = "";
        var line = text.split("\n");
        var maxLine = node.getAttribute("maxLine");
        var maxText = node.getAttribute("maxText");
        if (!maxLine)
            maxLine = 1;
        var setLineNum = 0;
        $A(line).each(function(value) {
            if (setLineNum > maxLine) {
                return;
            }
            if (value.charSize() > maxText) {
                var lineNum = Math.ceil(value.charSize() / maxText);

                setText += value.cut((maxLine - setLineNum) * maxText, "");
                setLineNum += lineNum;
            } else {
                setLineNum++;
                if (setLineNum <= maxLine)
                    setText += value + "\n";
            }
            if (setLineNum > maxLine) {
                setText += "...";
            }
        });
        return setText;
    },
    errorMessage : function(message, setObj) {
        if (message.strip() != "") {
            if (setObj) {
                errorObj = setObj;
                Element.show(setObj);
                setObj.innerHTML = "<ul><li>" + message + "<\/ul><\/li>";
            } else if ($("ajaxErrMessage")) {
                errorObj = $("ajaxErrMessage");
                Element.show($("ajaxErrMessage"));
                $("ajaxErrMessage").innerHTML = "<ul><li>" + message + "<\/ul><\/li>";
            } else {
                errorObj = null;
                alert(message);
            }
        }
    },
    setXmlOption : function(xmlObj, setObj, valueName, textName, selectName) {
        var setValue = "";
        var setText = "";
        $A(xmlObj.childNodes).each(function(node) {
            if (node.tagName) {
                if (node.tagName == valueName) {
                    setValue = node.firstChild.nodeValue.strip();
                } else if (node.tagName == textName) {
                    setText = node.firstChild.nodeValue.strip();
                }
            }
        });
        this.addSelectOption(setObj, setValue, setText, selectName);
    },
    addSelectOption : function(setObj, setValue, setText, selectName) {
        var opt = new Element('OPTION', {
            value: setValue
        });
        setObj.insert(opt);
        opt.text = setText;
        if (setValue == selectName)
            opt.selected = "selected";
    },
    removeAllElement: function(element) {
        if (element.childNodes) {
            $A(element.childNodes).each(function(obj) {
                Element.remove(obj);
            });
        }
    },
    tableRowAllDelete : function(tableObj) {
        $A(tableObj.rows).each(function(row) {
            tableObj.deleteRow(0);
        });
    },
    tableRowInsert : function(tableObj) {
        return tableObj.insertRow(tableObj.rows.length);
    },
    tableCellInsert : function(tableObj) {
        return tableObj.insertCell(tableObj.cells.length);
    },
    checkBoxAll : function(allBoxObj, boxObj) {
        if (boxObj) {
            if (boxObj.length) {
                $A(boxObj).each(function(obj) {
                    if (!obj.disabled) {
                        obj.checked = allBoxObj.checked;
                    }
                });
            } else {
                if (!boxObj.disabled)
                    boxObj.checked = allBoxObj.checked;
            }
        }
    },
    groupCheckBox : function(allBoxObj, boxObj) {
        if (boxObj) {
            if (boxObj.length) {
                var checkCnt = 0;
                $A(boxObj).each(function(obj) {
                    if (obj.checked) {
                        checkCnt++;
                    }
                });
                if (boxObj.length == checkCnt) {
                    allBoxObj.checked = "true"
                } else {
                    allBoxObj.checked = "";
                }
            } else {
                allBoxObj.checked = boxObj.checked;
            }
        } else {
            allBoxObj.checked = "";
        }
    },
    groupCheckBoxClean : function(allBoxObj, boxObj) {
        allBoxObj.checked = "";
        this.checkBoxAll(allBoxObj, boxObj);
    },
    setDateOptions : function(year,month,date){
        var currentDate = new Date();
        var loadYear = currentDate.getFullYear();
        var loadMonth = currentDate.getMonth()+1;
        var loadDate = currentDate.getDate();

        this.setYearSelectOption(loadYear,$(year));
        this.setMonthSelectOption(loadMonth,$(month));
        this.setDateSelectOption(loadYear,loadMonth,loadDate,$(date));

        var current = this;
        Event.observe($(year), "change", function() {
//            current.setYearSelectOption(this.value,$(year));
            current.setDateSelectOption($(year).value, $(month).value, $(date).value, $(date));
        });

        Event.observe($(month), "change", function() {
            current.setDateSelectOption($(year).value, $(month).value, $(date).value, $(date));
        });
    },
    setYearSelectOption : function(year, obj){
        var current = this;
        var range = $R((parseInt(year) - 5), (parseInt(year) + 5));
        this.removeAllElement(obj);
        range.each(function(value) {
            current.addSelectOption(obj, value, value, year);
        });

    },
    setMonthSelectOption : function(month,obj){
        var current = this;
        var range = $R(1, 12);
        this.removeAllElement(obj);
        range.each(function(value) {
            current.addSelectOption(obj, value, value, month);
        });
    },
    setDateSelectOption : function(year, month, date, obj){
        var current = this;
        var lastDate = new Date();
        lastDate.setFullYear(year, month, 0);

        var setDate = date > lastDate.getDate() ? 1:date;
        var range = $R(1, parseInt(lastDate.getDate()));

        this.removeAllElement(obj);
        range.each(function(value) {
            current.addSelectOption(obj, value, value, date);
        });
    }
    ,
    /*dc statistics add 2010.04.09*/
    setDateOptions2 : function(year,month,date,sDate,form){
        var currentDate = new Date();

        if(sDate != ""){
        	var splitDate = sDate.split("-");

        	if(splitDate.length > 1){
            	currentDate = new Date(splitDate[0],splitDate[1]-1,splitDate[2]);
        	}
        	else{
            	currentDate = new Date(sDate.substring(0, 4),sDate.substring(4, 6)-1);
        	}
        }
        var loadYear = currentDate.getFullYear();
        var loadMonth = currentDate.getMonth()+1;
        var loadDate = currentDate.getDate();

        this.setYearSelectOption(loadYear,$(year));
        this.setMonthSelectOption(loadMonth,$(month));

        if(form == null){
            this.setDateSelectOption(loadYear,loadMonth,loadDate,$(date));
        }
        else if($(form).sort[0].checked == true){
            this.setDateSelectOption(loadYear,loadMonth,loadDate,$(date));
        }

        var current = this;
        Event.observe($(year), "change", function() {
            if(form == null){
            	current.setDateSelectOption($(year).value, $(month).value, $(date).value, $(date));
            }
            else if($(form).sort[0].checked == true){
            	current.setDateSelectOption($(year).value, $(month).value, $(date).value, $(date));
            }
        });

        Event.observe($(month), "change", function() {
            if(form == null){
                current.setDateSelectOption($(year).value, $(month).value, $(date).value, $(date));
            }
            else if($(form).sort[0].checked == true){
                current.setDateSelectOption($(year).value, $(month).value, $(date).value, $(date));
            }
        });
    },
    setDatePeriodOptions : function(year,month,date,periodSelect){
        var currentDate = new Date();
        var period = $F(periodSelect);

        if(period == 'yesterday'){
        	currentDate.setDate(currentDate.getDate() - 1);
        }
        else if(period == 'aWeekAgo'){
        	currentDate.setDate(currentDate.getDate() - 7);
        }
        else if(period == 'aMonthAgo'){
        	currentDate.setDate(currentDate.getDate() - 30);
        }
        else{
        	currentDate.setDate(currentDate.getDate());
        }

        var loadYear = currentDate.getFullYear();
        var loadMonth = currentDate.getMonth()+1;
        var loadDate = currentDate.getDate();

        this.setYearSelectOption(loadYear,$(year));
        this.setMonthSelectOption(loadMonth,$(month));

        if($('form').sort[0].checked == true){
            this.setDateSelectOption(loadYear,loadMonth,loadDate,$(date));
        }
    }
    /*dc statistics--*/
}

function addEvent(obj, type, fn){
    if (obj.addEventListener){
        obj.addEventListener(type, fn, false);
    }else if (obj.attachEvent){
        obj["e" + type + fn] = fn;
        obj[type + fn] = function() {
            obj["e" + type + fn](window.event);
        }
        obj.attachEvent("on" + type, obj[type + fn]);
    }
}