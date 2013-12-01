var fun =   function(details) {
    			//console.log("hola");
        		if( details.url == "http://dcc.uchile.cl/~eacha/script.js" )
            		return {redirectUrl: "http://dcc.uchile.cl/~eacha/script-2.js" };
    		};
var filter = {urls: ["<all_urls>"]};
var opt_extraInfoSpec= ["blocking"];

chrome.webRequest.onBeforeRequest.addListener(
	fun, filter, opt_extraInfoSpec
  );