//tealium universal tag - utag.436 ut4.0.201803071432, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={"user_location":"user_cc"};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
var cc_config={'uk':{'site_id':'TV-634572-1','subdomain':'collector-352'},'gb':{'site_id':'TV-634572-1','subdomain':'collector-352'},'us':{'site_id':'TV-451827-1','subdomain':'collector-587'},'au':{'site_id':'TV-368181-1','subdomain':'collector-611'},'de':{'site_id':'TV-274536-1','subdomain':'collector-756'},'fr':{'site_id':'TV-274527-1','subdomain':'collector-757'},'ca':{'site_id':'TV-274518-1','subdomain':'collector-758'},'br':{'site_id':'TV-274509-1','subdomain':'collector-759'},'jp':{'site_id':'TV-273690-1','subdomain':'collector-760'},'es':{'site_id':'TV-273681-1','subdomain':'collector-761'},'it':{'site_id':'TV-273672-1','subdomain':'collector-762'},'pl':{'site_id':'TV-81908109-1','subdomain':'collector-1019'},'se':{'site_id':'TV-81907290-1','subdomain':'collector-1020'},'cl':{'site_id':'TV-81366318-1','subdomain':'collector-1638'},'dk':{'site_id':'TV-81366309-1','subdomain':'collector-1639'},'fi':{'site_id':'TV-81365490-1','subdomain':'collector-1640'},'pt':{'site_id':'TV-81365481-1','subdomain':'collector-1641'},'gr':{'site_id':'TV-81365472-1','subdomain':'collector-1642'},'ie':{'site_id':'TV-81365463-1','subdomain':'collector-1643'},'ar':{'site_id':'TV-81365454-1','subdomain':'collector-1644'},'uy':{'site_id':'TV-81365454-1','subdomain':'collector-1644'},'py':{'site_id':'TV-81365454-1','subdomain':'collector-1644'},'th':{'site_id':'TV-81277263-1','subdomain':'collector-1723'},'hu':{'site_id':'TV-81277254-1','subdomain':'collector-1724'},'nl':{'site_id':'TV-81277245-1','subdomain':'collector-1725'},'sg':{'site_id':'TV-81277236-1','subdomain':'collector-1726'},'ru':{'site_id':'TV-81277227-1','subdomain':'collector-1727'},'mx':{'site_id':'TV-81182781-1','subdomain':'collector-1871'},'ae':{'site_id':'TV-81182772-1','subdomain':'collector-1872'},'hk':{'site_id':'TV-81182763-1','subdomain':'collector-1873'},'my':{'site_id':'TV-81182754-1','subdomain':'collector-1874'},'no':{'site_id':'TV-72811854-1','subdomain':'collector-2184'},'id':{'site_id':'TV-72811845-1','subdomain':'collector-2185'},'ch':{'site_id':'TV-72811881-1','subdomain':'collector-2181'},'za':{'site_id':'TV-72811872-1','subdomain':'collector-2182'},'ro':{'site_id':'TV-72811863-1','subdomain':'collector-2183'}}[u.data.user_cc];if(!cc_config){return;}
var dest="//"+cc_config.subdomain+".tvsquared.com/piwik/";var uuu=(("https:"==document.location.protocol)?"https:":"http:")+dest;var _tvq=window._tvq=window._tvq||[];_tvq.push(['setSiteId',cc_config.site_id]);_tvq.push(['setTrackerUrl',uuu+'piwik.php']);_tvq.push([function(){this.deleteCustomVariable(5,'page')}]);_tvq.push(['trackPageView']);u.data.base_url=dest+'tv2track.js';u.loader_cb=function(){u.initialized=true;};if(!u.initialized){u.loader({"type":"script","src":u.data.base_url,"cb":u.loader_cb,"loc":"script","id":'utag_436'});}else{u.loader_cb();}
}};utag.o[loader].loader.LOAD(id);})("436","booking.com.main");}catch(error){utag.DB(error);}