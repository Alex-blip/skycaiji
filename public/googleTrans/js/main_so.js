(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var d=this||self;function e(a,v){a=a.split(".");var b=d;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===v?b[c]&&b[c]!==Object.prototype[c]?b=b[c]:b=b[c]={}:b[c]=v};var f={0:"Tarjum",1:"dhaaf",2:"Xir",3:function(a){return"Google wuxuu toos ugu tarjumay boggaan"+a},4:function(a){return"Ku turjun "+a},5:"Cilad: Mashiinku ma dhamestiri karo codsigaaga. Isku-day inyar kadib.",6:"Baro inbadan",7:function(a){return"Waxa taaba galiyaya"+a},8:"Tarjum",9:"Tarjumaadu way socataa",10:function(a){return"Utarjum boggan af: "+(a+" adigoo adeegsanaya tarjumaada Google")},11:function(a){return"Kufiiri degelkan: "+a},12:"Muuji asalka",13:"Waxa kujira faylkan waxaa loo dirayaa Google si loo soo tarjumo iyadoo la la adeegsanayo isku xire xafidan.",
14:"Qoraalka kujira boggan xafidan waxaa loo  dirayaa Google si loo soo turjumo iyadoo la adeegsanayoisku xire xafidan.",15:"Qoraalka boogan kuqoran waxaan u diraynaa Google si loo soo tarjumo iyadoo la adeegsanayo isku xire xafidan.",16:"Xulo luuqad",17:function(a){return"Dami tarjumaada "+a},18:function(a){return"Ka dami: "+a},19:"Qari markasta",20:"Qoraalka asalka",21:"ugu deeq tarjumaad tan ka wanaagsan",22:"Kudeeq",23:"Wada turjum",24:"Dhammaan soo celi",25:"Wada dhaaf",26:"Qeybaha uturjum luuqadeyda",
27:function(a){return"Wax walba u turjun "+a},28:"Muuji luqadihii hore",29:"Ikhtiyaari",30:"Ka dami turjumaadda degelkan",31:null,32:"Muuji turjumaado ka duwan",33:"Guji ereyada kore si aad u hesho turjumaado ka duwan",34:"Adeegso",35:"Ku jiid badhanka shift si aad isugu habeyso",36:"Guji turjumaadyo ka duwan si aad u hesho",37:"Qabo badhanka shift, guji oo jiid ereyada kore si aad isugu habeyso.",38:"Waad ku mahadsantahay Google in aad  ugu deeqdo tarjumaad",39:"U maamul turjumaadda degelkan",40:"Guji erey oo eeg turjumaad ka duwan, ama laba-jeer guji si aad toos ugu tifatirto",
41:"Qoraalkii hoe",42:"TarjuM",43:"TarjuM",44:"Sixitaankaagi waa la gudbiyay.",45:"Cillad: Luqadda degelka lama saacido.",46:"Barnaamijka Turjun Luqadda"};var g=window.google&&google.translate&&google.translate._const;
if(g){var h;a:{for(var k=[],l=[""],m=0;m<l.length;++m){var n=l[m].split(","),p=n[0];if(p){var q=Number(n[1]);if(!(!q||.1<q||0>q)){var r=Number(n[2]),t=new Date,u=1E4*t.getFullYear()+100*(t.getMonth()+1)+t.getDate();!r||r<u||k.push({version:p,ratio:q,a:r})}}}var w=0,x=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),y=Number(x&&x[1])||Math.random();for(m=0;m<k.length;++m){var z=k[m];w+=z.ratio;if(1<=w)break;if(y<w){h=z.version;break a}}h="TE_20200210_00"}var A="/element/%s/e/js/element/element_main.js".replace("%s",
h);if("0"==h){var B=" element %s e js element element_main.js".split(" ");B[B.length-1]="main_so.js";A=B.join("/").replace("%s",h)}if(g._cjlc)g._cjlc(g._pas+g._pah+A);else{var C=g._pas+g._pah+A,D=document.createElement("script");D.type="text/javascript";D.charset="UTF-8";D.src=resourcesUrl+"/js/element_main.js";var E=document.getElementsByTagName("head")[0];E||(E=document.body.parentNode.appendChild(document.createElement("head")));E.appendChild(D)}e("google.translate.m",f);e("google.translate.v",h)};}).call(window)