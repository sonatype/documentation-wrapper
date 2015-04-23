jQuery(document).ready(function(){
  if(jQuery('.invokeDownload').length > 0){
    setTimeout(function(){
      var l = document.location.href.split('?');
      if(l.length > 1) {
        var pairs = l[1].split('&');
        for(var i = 0; i < pairs.length; i++) {
          var pair = pairs[i].split('=');
          if(pair.length > 1 && pair[0] == 'dl') {
            if(pair[1] == 'zip') { document.location.href = 'http://www.sonatype.org/downloads/nexus-latest-bundle.zip';}
            else if(pair[1] == 'tgz') { document.location.href = 'http://www.sonatype.org/downloads/nexus-latest-bundle.tar.gz';}
          }
        }
      }
    }, 3000);
  }
});