jQuery(document).ready(function() {
  function setStatus(space,icon,color,display) {
    jQuery("#"+space+"-status-link").html('<span class="glyphicon ' + icon + '" style="color:' + color + ';"></span> ' + display + ' Status');
  }
  jQuery.get('http://status.sonatype.com',function(data) {
    var htmlString = jQuery.parseHTML(data);
    var statusString = jQuery(htmlString).find('td:first').html();
    var classList = jQuery(statusString).attr('class').split(/\s+/);
    var re = /icon-(ok-circle|warning-sign|remove-circle|wrench|question-sign)/mg;
    var statuses = (classList[2].match(re));
    if (statuses.length != 1) {
      setStatus("Central","glyphicon-question-sign","grey","Central");
    } else {
      if ( jQuery.inArray( "icon-remove-circle", statuses ) != -1 ) {
        setStatus("central","glyphicon-exclamation-sign","red","Central");
      } else if ( jQuery.inArray( "icon-warning-sign", statuses ) != -1 ) {
        setStatus("central","glyphicon-warning-sign","yellow","Central");
      } else if ( jQuery.inArray( "icon-wrench", statuses ) != -1 ) {
        setStatus("central","glyphicon-wrench","orange","Central");
      } else if ( jQuery.inArray( "icon-ok-circle", statuses) != -1 ) {
        setStatus("central","glyphicon-ok-sign","green","Central");
      } else {
        setStatus("central","glyphicon-question-sign","grey","Central");
      }
    }

    var statusString2 = jQuery(htmlString).find('tr').eq(2).find('td:first').html();
    var classList2 = jQuery(statusString2).attr('class').split(/\s+/);
    var statuses2 = (classList2[2].match(re));
    if (statuses2.length != 1) {
      setStatus("oss","glyphicon-question-sign","grey","oss.Sonatype.org");
    } else {
      if ( jQuery.inArray( "icon-remove-circle", statuses ) != -1 ) {
        setStatus("oss","glyphicon-exclamation-sign","red","oss.Sonatype.org");
      } else if ( jQuery.inArray( "icon-warning-sign", statuses ) != -1 ) {
        setStatus("oss","glyphicon-warning-sign","yellow","oss.Sonatype.org");
      } else if ( jQuery.inArray( "icon-wrench", statuses ) != -1 ) {
        setStatus("oss","glyphicon-wrench","orange","oss.Sonatype.org");
      } else if ( jQuery.inArray( "icon-ok-circle", statuses) != -1 ) {
        setStatus("oss","glyphicon-ok-sign","green","oss.Sonatype.org");
      } else {
        setStatus("oss","glyphicon-question-sign","grey","oss.Sonatype.org");
      }
    }
  });
});


function updateStep2(version,filebase){
  jQuery('#step2').show();
  var downloadpanelhtml =  "<b>Download Nexus " + version + "</b>";
    downloadpanelhtml += "<div>";
    downloadpanelhtml += "<a class='greenbox' href='http://download.sonatype.com/nexus/oss/" + filebase + "-bundle.tar.gz'>NEXUS OSS (TGZ)</a>";
    downloadpanelhtml += "</div>";
    downloadpanelhtml += "<p>Checksums: <a href='http://download.sonatype.com/nexus/oss/" + filebase + "-bundle.tar.gz.md5'>MD5</a> <a href='http://download.sonatype.com/nexus/oss/" + filebase + "-bundle.tar.gz.sha1'>SHA</a> Signature: <a href='http://download.sonatype.com/nexus/oss/" + filebase + "-bundle.tar.gz.asc'>PGP</a></p>";
    downloadpanelhtml += "<div>";
    downloadpanelhtml += "<a class='greenbox' href='http://download.sonatype.com/nexus/oss/" + filebase + "-bundle.zip'>NEXUS OSS (ZIP)</a>";
    downloadpanelhtml += "</div>";
    downloadpanelhtml += "<p>Checksums: <a href='http://download.sonatype.com/nexus/oss/" + filebase + "-bundle.zip.md5'>MD5</a> <a href='http://download.sonatype.com/nexus/oss/" + filebase + "-bundle.zip.sha1'>SHA</a> Signature: <a href='http://download.sonatype.com/nexus/oss/" + filebase + "-bundle.zip.asc'>PGP</a></p>";


  jQuery('#downloadpanel').html(downloadpanelhtml);
}