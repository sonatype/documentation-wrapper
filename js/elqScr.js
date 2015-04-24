// Copyright Eloqua Corporation.
var elqDt = new Date();
var elqMs = elqDt.getMilliseconds();
if ((typeof elqCurE != 'undefined') && (typeof elqPPS != 'undefined')){
	
	//Added to test for XSS attack via location.hash
	var XSSAnchorPattern = /^#.*(<.*script.*>|['"]).*$/i;
	var safeLocationHref = location.href;
	if (XSSAnchorPattern.test(location.hash) || XSSAnchorPattern.test(encodeURIComponent(location.hash)))
		safeLocationHref = location.href.split('#')[0];


	document.write('<SCR' + 'IPT TYPE="text/javascript" LANGUAGE="JavaScript" SRC="' + elqCurE + '?pps=' + elqPPS + '&siteid=' + elqSiteID + '&ref=' + elqReplace(elqReplace(safeLocationHref,'&','%26'),'#','%23') + '&ms=' + elqMs + '"><\/SCR' + 'IPT>');
}