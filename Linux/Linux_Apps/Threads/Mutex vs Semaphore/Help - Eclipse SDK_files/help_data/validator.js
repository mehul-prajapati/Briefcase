var FormValidator = Class.create( {
    initialize : function(targetForm) {
        this.targetForm = targetForm;
        this.checkerList = [];
    },
    getFormName : function() {
        return this.targetForm;
    },
    validate : function() {
        for ( var index = 0, length = this.checkerList.length ; index < length ; index++ ) {
            var fieldChecker = this.checkerList[index];
            if ( fieldChecker.check() == false ) {
                alert(fieldChecker.getErrorMessage());            	
                if ( fieldChecker.isFocus() ) {
                	if(this.targetForm[fieldChecker.getFieldName()].length)
                		this.targetForm[fieldChecker.getFieldName()][0].focus();
                	else 
                		this.targetForm[fieldChecker.getFieldName()].focus();
                }
                return false;
            }
        }
        return true;
    },
    validateAlert : function() {
        for ( var index = 0, length = this.checkerList.length ; index < length ; index++ ) {
            var fieldChecker = this.checkerList[index];
            if ( fieldChecker.check() == false ) {
                alert(fieldChecker.getErrorMessage());            	
                if ( fieldChecker.isFocus() ) {
                	if(this.targetForm[fieldChecker.getFieldName()].length)
                		this.targetForm[fieldChecker.getFieldName()][0].focus();
                	else 
                		this.targetForm[fieldChecker.getFieldName()].focus();
                }
                return false;
            }
        }
        return true;
    },
    checkRequired : function(fieldName, errorMessage, focus) {
        this.checkerList.push(
                new RequiredFieldChecker(this.targetForm, fieldName, errorMessage, focus));
    },
    checkMaxLength : function(fieldName, maxLength, errorMessage, focus) {
        this.checkerList.push(
                new MaxLengthFieldChecker(this.targetForm, fieldName,
                        maxLength, errorMessage, focus));
    },
    checkMaxLengthByte : function(fieldName, maxLength, errorMessage, focus) {
        this.checkerList.push(
                new MaxLengthByteFieldChecker(this.targetForm, fieldName,
                        maxLength, errorMessage, focus));
    },
    checkMinLength : function(fieldName, minLength, errorMessage, focus) {
        this.checkerList.push(
                new MinLengthFieldChecker(this.targetForm, fieldName,
                        minLength, errorMessage, focus));
    },
    checkMinLengthByte : function(fieldName, minLength, errorMessage, focus) {
        this.checkerList.push(
                new MinLengthByteFieldChecker(this.targetForm, fieldName,
                        minLength, errorMessage, focus));
    },
    checkRegex : function(fieldName, regex, errorMessage, focus) {
        this.checkerList.push(
                new RegexFieldChecker(this.targetForm, fieldName,
                        regex, errorMessage, focus));
    },
    checkAlphaNum : function(fieldName, errorMessage, focus) {
        this.checkerList.push(
                new RegexFieldChecker(this.targetForm, fieldName,
                        /^[a-zA-Z0-9]+$/, errorMessage, focus));
    },
    checkAlphaNumSpace : function(fieldName, errorMessage, focus) {
        this.checkerList.push(
                new RegexFieldChecker(this.targetForm, fieldName,
                        /^[a-zA-Z0-9 ]+$/, errorMessage, focus));
    },
    checkOnlyNumber : function(fieldName, errorMessage, focus) {
        this.checkerList.push(
                new RegexFieldChecker(this.targetForm, fieldName,
                        /^[0-9]+$/, errorMessage, focus));
    },
    checkDecimal : function(fieldName, errorMessage, focus) {
        this.checkerList.push(
                new RegexFieldChecker(this.targetForm, fieldName,
                        /^(\-)?[0-9]*(\.[0-9]*)?$/, errorMessage, focus));
    },
    checkEmail : function(fieldName, errorMessage, focus) {
        this.checkerList.push(
                new RegexFieldChecker(this.targetForm, fieldName,
                        /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/, errorMessage, focus));
    },
    checkSelected : function(fieldName, firstIdx, errorMessage, focus) {
        this.checkerList.push(
                new SelectionFieldChecker(this.targetForm, fieldName,
                        firstIdx, errorMessage, focus));
    },
    checkAtLeastOneChecked : function(fieldName, errorMessage, focus) {
        this.checkerList.push(
                new AtLeastOneCheckFieldChecker(this.targetForm, fieldName,
                        errorMessage, focus));
    },
    checkFileExt : function(fieldName, checkExt, errorMessage, focus) {
        this.checkerList.push(
                new FileExtChecker(this.targetForm, fieldName,
                        checkExt, errorMessage, focus));
    },    
    checkFileMaxLengthByte : function(fieldName, maxLength, errorMessage, focus) {
        this.checkerList.push(
                new FileMaxLengthByteFieldChecker(this.targetForm, fieldName,
                        maxLength, errorMessage, focus));
    }
});
var FieldChecker = {
    getFieldName : function() {
        return this.fieldName;
    },
    getErrorMessage : function() {
        return this.errorMessage;
    },
    isFocus : function() {
        return this.focus;
    }
};
var RequiredFieldChecker = Class.create(FieldChecker, {
    initialize : function(form, fieldName, errorMessage, focus) {
        this.form = form;
        this.fieldName = fieldName;
        this.errorMessage = errorMessage;
        this.focus = focus;
    },
    check : function() {        
        return ( this.form[this.fieldName].value.replace(/\s/g, "").length > 0 );
    }
});
var SqlInjectionFieldChecker = Class.create(FieldChecker, {
    initialize : function(form, fieldName, errorMessage, focus) {
        this.form = form;
        this.fieldName = fieldName;
        this.errorMessage = errorMessage;
        this.focus = focus;
    },
    check : function() {
        var fieldValue = this.form[this.fieldName].value;
        if (fieldValue.indexOf("'") > -1 || fieldValue.indexOf("<") > -1
                || fieldValue.indexOf(">") > -1) {
            return false;
        }
        return true;
    }
});
var MaxLengthFieldChecker = Class.create(FieldChecker, {
    initialize : function(form, fieldName, maxLength, errorMessage, focus) {
        this.form = form;
        this.fieldName = fieldName;
        this.maxLength = maxLength;
        this.errorMessage = errorMessage;
        this.focus = focus;
    },
    getMaxLength : function() {
        return this.maxLength;
    },
    check : function() {
        return (this.form[this.fieldName].value.length <= this.maxLength);
    }
});
var MaxLengthByteFieldChecker = Class.create(FieldChecker, {
    initialize : function(form, fieldName, maxLength, errorMessage, focus) {
        this.form = form;
        this.fieldName = fieldName;
        this.maxLength = maxLength;
        this.errorMessage = errorMessage;
        this.focus = focus;
    },
    getMaxLength : function() {
        return this.maxLength;
    },
    check : function() {
        str = this.form[this.fieldName].value;
        var len = 0;
        for(var i=0; i<str.length; i++) {
            len += (str.charCodeAt(i) > 128) ? 3 : 1;
            onechar = str.charAt(i);
            if(escape(onechar)=='%0A') {
            	len++;
            }            
        }
        if (len > this.maxLength){                
        	return false;
        }
        else{
        	return true;
        }        
    }
});
var MinLengthFieldChecker = Class.create(FieldChecker, {
    initialize : function(form, fieldName, minLength, errorMessage, focus) {
        this.form = form;
        this.fieldName = fieldName;
        this.minLength = minLength;
        this.errorMessage = errorMessage;
        this.focus = focus;
    },
    getMinLength : function() {
        return this.minLength;
    },
    check : function() {
        return (this.form[this.fieldName].value.length >= this.minLength);
    }
});

var MinLengthByteFieldChecker = Class.create(FieldChecker, {
    initialize : function(form, fieldName, minLength, errorMessage, focus) {
        this.form = form;
        this.fieldName = fieldName;
        this.minLength = minLength;
        this.errorMessage = errorMessage;
        this.focus = focus;
    },
    getMinLength : function() {
        return this.minLength;
    },
    check : function() {        
        str = this.form[this.fieldName].value;
        var len = 0;
        for(var i=0; i<str.length; i++) {
            len += (str.charCodeAt(i) > 128) ? 3 : 1;
            onechar = str.charAt(i);
            if(escape(onechar)=='%0A') {
            	len++;
            }            
        }
        if (len < this.minLength){                
        	return false;
        }
        else{
        	return true;
        }        
    }
});
var RegexFieldChecker = Class.create(FieldChecker, {
    initialize : function(form, fieldName, regex, errorMessage, focus) {
        this.form = form;
        this.fieldName = fieldName;
        this.regex = regex;
        this.errorMessage = errorMessage;
        this.focus = focus;
    },
    getRegex: function() {
        return this.regex;
    },
    check : function() {
        var str = this.form[this.fieldName].value;
        if (str.length == 0) {
            return true;
        }
        return ( str.search(this.regex) != -1 );
    }
});
var SelectionFieldChecker = Class.create(FieldChecker, {
    initialize: function(form, fieldName, firstIdx, errorMessage, focus) {
        this.form = form;
        this.fieldName = fieldName;
        this.firstIdx = firstIdx;
        this.errorMessage = errorMessage;
        this.focus = focus;
    },
    getFirstIndex: function() {
        return this.firstIdx;
    },
    check : function() {
        var selectedIndex = this.form[this.fieldName].selectedIndex;
        return ( selectedIndex >= this.firstIdx );
    }
});
var AtLeastOneCheckFieldChecker = Class.create(FieldChecker, {
    initialize: function(form, fieldName, errorMessage, focus) {
        this.form = form;
        this.fieldName = fieldName;
        this.errorMessage = errorMessage;
        if ( focus == true || focus == false ) {
            this.focus = focus;
        } else {
            this.focus = false;
        }
    },
    check: function () {
        var ele = this.form[this.fieldName];
        if ( typeof(ele[0]) != "undefined" ) {
            for (var idxe = 0 ; idxe < ele.length ; idxe++) {
                if (ele[idxe].checked == true) {
                    return true;
                }
            }
            return false;
        } else {
            return ele.checked == true;
        }
    }
});
var FileExtChecker = Class.create(FieldChecker, {
    initialize : function(form, fieldName, checkExt, errorMessage, focus) {
        this.form = form;
        this.fieldName = fieldName;
        this.checkExt = checkExt;
        this.errorMessage = errorMessage;
        this.focus = focus;
    },
    getCheckExt : function() {
        return this.checkExt;
    },
    check : function() {
		var value = $F(this.form[this.fieldName]);
        if (value.strip().length > 0) {
			if (this.checkExt.search(/^[a-zA-Z0-9]+(\|[a-zA-Z0-9]+)*$/) != -1) {
				if (value == "") {
					return true;
				} else {
	                var dotIndex = value.lastIndexOf(".");
	                var ext = value.substring(dotIndex+1).toLowerCase();
					var pattern = eval("/^(" + this.checkExt.toLowerCase() + "){1}$/");
					
					return (ext.search(pattern) != -1);
				}
			}
		}
		return true;
    }
});
var FileMaxLengthByteFieldChecker = Class.create(FieldChecker, {
    initialize : function(form, fieldName, maxLength, errorMessage, focus) {
        this.form = form;
        this.fieldName = fieldName;
        this.maxLength = maxLength;
        this.errorMessage = errorMessage;
        this.focus = focus;
    },
    getMaxLength : function() {
        return this.maxLength;
    },
    check : function() {
        str = this.form[this.fieldName].value;
        var dotIndex = str.lastIndexOf('\\');
        str = str.substring(dotIndex+1).toLowerCase();
        var len = 0;
        for(var i=0; i<str.length; i++) {
            len += (str.charCodeAt(i) > 128) ? 3 : 1;
            onechar = str.charAt(i);
            if(escape(onechar)=='%0A') {
            	len++;
            }            
        }
        if (len > this.maxLength){                
        	return false;
        }
        else{
        	return true;
        }        
    }
});