// Prepare container for GA events
var _gaq = _gaq || [];

// "Sonatype ORG Site" GA tracking ID
_gaq.push(['_setAccount', 'UA-1693297-17']);
_gaq.push(['_setDomainName', 'sonatype.org']);
_gaq.push(['_setAllowLinker', true]);
_gaq.push(['_trackPageview']);

// cdt = Cross domain tracker
_gaq.push(['cdt._setAccount', 'UA-1693297-29']);
_gaq.push(['cdt._setAllowLinker', true]);
_gaq.push(['cdt._trackPageview']);

// Google Async code
(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();

jQuery(document).ready( function(){
	jQuery('.communitySignupForm').submit( function(){
	    _gaq.push(['_trackEvent', 'Community Signup', 'Form Submit', 'Sonatype.org']);
	    _gaq.push(['cdt._trackEvent', 'Community Signup', 'Form Submit', 'Sonatype.org']);
	});
});