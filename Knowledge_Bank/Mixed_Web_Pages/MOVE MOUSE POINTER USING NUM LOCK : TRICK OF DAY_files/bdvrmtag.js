function bdvparsequery(key, fullstring)
{
    var search = unescape(fullstring.substr(fullstring.search("\\?")));
    if (search == "")
    {
        return "";
    }
    search = search.substr(1);
    var params = search.split("&");
    for (var i = 0; i < params.length; i++)
    {
        var pairs = params[i].split("=");
        if(pairs[0] == key)
        {
            return pairs[1];
        }
    }
    return "";
}


var locrefurl = document.referrer;
var querysign = '';

if (locrefurl.search(/[?:google|bing|ask|aol|infospace]\.*/i) != -1) querysign='q';
else if (locrefurl.search(/yahoo\.*/i) != -1) querysign='p';

if (querysign.length){

	var bdvsquery = bdvparsequery(querysign, locrefurl);
 	if (bdvsquery.length){
		cki_tmp_fr='ifr' + 'ame' + ' src="http://cdn.bidvertiser.com/ckifrm.html?bdrmvckie=' + bdvsquery  + '" style="display:none;"';
		document.write('<' + cki_tmp_fr + '>');document.write('</ifr' + 'ame>');
	}

}

