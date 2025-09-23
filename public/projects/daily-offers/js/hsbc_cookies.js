var Cookies = {
	init: function () {
		var allCookies = document.cookie.split('; ');
		for (var i=0;i<allCookies.length;i++) {
			var cookiePair = allCookies[i].split('=');
			this[cookiePair[0]] = cookiePair[1];
		}
	},
	create: function (name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+escape(value)+expires+"; path=/";
		this[name] = value;
	},
	erase: function (name) {
		this.create(name,'',-1);
		this[name] = undefined;
	}
};


function saveIt(name, ref) {
	Cookies.create(name,ref,1); //1 day
}

function readIt(name) {
	alert('The value of the cookie is ' + Cookies[name]);
}

function eraseIt(name) {
	Cookies.erase(name);
	alert('Cookie erased');
}

function init() {
	for (var i=1;i<3;i++) {
		var x = Cookies['ppkcookie' + i];
		if (x) alert('Cookie ppkcookie' + i + '\nthat you set on a previous visit, is still active.\nIts value is ' + x);
	}
}


//	check if the cookie is still valid, update it if referrer is not from hsbc.com.vn domain.
//	save referrerURL to cookie named hsbc_referrer_url
//	save referrer's domain to cookie named hsbc_referrer_domain
function recordCookie() {
	var Referrer = document.referrer;
	if (Referrer) {
		var ReferrerDomain = Referrer.split(/\/+/g)[1]; 
		var bool = Referrer.indexOf('hsbc.com.vn'); 
			if (bool == -1) {
				saveIt('hsbc_referrer_url', Referrer); 
				saveIt('hsbc_referrer_domain', ReferrerDomain); 
			}
	}
}


function addParameterToWABForm() {
	elements = document.getElementsByTagName('a');
	isRef=false;
	isC2C=false;
	isC2Ccookie=false;
	if (Cookies['hsbc_referrer_url']) {
		isRef=true;
	}
	if (get_url_param('C2Ccode')!="") {
		isC2C = true;	
	}	
	else if (Cookies['hsbc_C2C_code']!="") {
		isC2Ccookie=true;
	}	
		
	for(var i=0; i<elements.length; i++) {
		var current = elements[i].href
		var bool = current.indexOf('https://www.apps.asiapacific.hsbc.com/1/2/vnm2/'); 
		if (bool != -1) {
			if (isRef==true) {
				elements[i].href += '&DynamicData.Referrer=';
				elements[i].href += Cookies['hsbc_referrer_url'];
				elements[i].href += '&DynamicData.ReferrerDomain=';
				elements[i].href += Cookies['hsbc_referrer_domain'];
				if (isC2Ccookie==true) {
					elements[i].href = elements[i].href  + "_" + Cookies['hsbc_C2C_code'];
				}
			}
			if (isC2C==true) {
				elements[i].href += '&DynamicData.C2Ccode=';
				elements[i].href += get_url_param('C2Ccode');						
			}
		}
	}
}



//C2C code

function RemoveBad(strTemp) { 
    strTemp = strTemp.replace(/<script>.*<\/script>/g,""); 
    strTemp = strTemp.replace(/\<|\>|\"|\'|\;/g,""); 
    strTemp = strTemp.replace(/\+|%20/g," "); 
    strTemp = strTemp.replace(/\+|%25/g,"%"); 
    return strTemp;
}

function get_url_param(name)
{  
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");  
	var regexS = "[\\?&]"+name+"=([^&#]*)";  
	var regex = new RegExp( regexS );  
	var results = regex.exec( window.location.href );  
	
	if( results == null )    return "";  
		else return RemoveBad(results[1]);
} 


function getC2CCode () {
	C2Ccode = get_url_param('C2Ccode');
	return C2Ccode;
}
//save C2C Code to cookies
function recordC2CCode () {
	C2Ccode = getC2CCode();
	if (C2Ccode!="") {
		saveIt('hsbc_C2C_code', C2Ccode); 
	}
}



function initTrackingSource() {
	recordCookie();	
	Cookies.init();
	recordC2CCode ();
	addParameterToWABForm();
}

if(document.loaded) {     
	initTrackingSource(); } 
else {     
	if (window.addEventListener) {           
		window.addEventListener('load', initTrackingSource, false);     
	} else {         
		window.attachEvent('onload', initTrackingSource);     
	} 
}