!function(){var n={962:function(e,a,n){"use strict";n.r(a);var a=jQuery,k=n.n(a),D=Roblox;document.addEventListener("DOMContentLoaded",function(){var e,a,o=k()("#upload-button"),r=k()("#estimate-price-button"),i=k()("#audio-bucket-data"),n=k()("#assetTypeId").val(),t=k()("#captchaEnabled"),s=k()("#captchaToken"),c=k()("#captchaProvider"),d=k()("#upload-fee-item-result-error"),l=k()("#upload-fee-item-result-success"),u=3===parseInt(n,10),p=u?D.EmbeddedUpload.Resources.invalidSoundFile:D.EmbeddedUpload.Resources.invalidImageFile,f=u?[".mp3"]:[".png",".jpg",".jpeg",".jpe",".bmp",".tga"],m=[2,11,12],v=[11,12],g={verifyCaptcha:"verifyCaptcha",confirmTransaction:"confirmTransaction",declineTransaction:"declineTransaction",insufficientFundsForTransaction:"insufficientFunds"},h={user:"User",group:"Group"};function b(){return!(k()("#file").val()&&!k()("#name").val().trim())||(k()("#name-error").text(D.EmbeddedUpload.Resources.noName),!1)}function y(e,a,n){a?(e.addClass("btn-primary").removeClass("btn-disabled-primary"),e.removeAttr("disabled")):(e.addClass("btn-disabled-primary").removeClass("btn-primary"),e.attr("disabled","disabled")),e[a||n?"removeClass":"addClass"]("invisible")}function w(e){if(!e.attr("disabled")){y(o,!1,!0);e=k()("#onVerificationPage");if(!e.get(0)||"True"!=e.val()){if(!k()("#file").val())return k()("#file-error").text(D.EmbeddedUpload.Resources.noFile),void y(o,!0,!0);e=k()("#file").val().replace(/^.*[\\\/]/,""),e=e.substr(e.lastIndexOf(".")).toLowerCase();if(-1===k().inArray(e,f))return k()("#file-error").text(p),void y(o,!0,!0);if(!b())return void y(o,!0,!0)}k()("#loading-container").show(),k()("#upload-button").hide(),k()("#cancel-upload-button").hide(),k()("#purchase-amount-message").hide(),(m.includes(L())?function(){d[0].innerHTML="",d[0].classList.add("hidden");var e=k()("#file").val().replace(/^.*[\\\/]/,""),a=e.substr(e.lastIndexOf(".")).toLowerCase(),n=new FormData,t=new Blob([I()],{type:"application/json"});n.append("config",t,"config.json"),t="image/".concat(a.replace(".","")),t=new Blob([k()("#file").prop("files")[0]],{type:t}),n.append(e,t,e+a),k().ajax({type:"POST",url:"".concat(D.EnvironmentUrls.itemConfigurationApi,"/v1/avatar-assets/").concat(L(),"/get-upload-fee"),data:n,contentType:!1,processData:!1,success:function(e){var a;e.canAfford?(e=e.price,a=e,e="null",void 0!==x()&&(e=x()),k().ajax({type:"POST",url:"".concat(D.EnvironmentUrls.itemConfigurationApi,"/v1/avatar-assets/").concat(L(),"/upload-captcha-test?groupId=").concat(e),contentType:!1,processData:!1,success:function(e){!0===e.success?O(a):U(function(e){e?O(a):window.location.reload()})},error:function(){y(o,!0,!0),k()("#upload-button").show(),document.getElementById("upload-form").reset(),d[0].innerHTML="A Captcha Error Occured",d.classList[0].remove("hidden")}})):(k()("#loading-container").hide(),d[0].innerHTML="Insufficient funds",d[0].classList.remove("hidden"))},error:function(e){y(o,!0,!0),k()("#upload-button").show(),document.getElementById("upload-form").reset(),400===e.status?2===e.responseJSON.errors[0].code?T():(k()("#loading-container").hide(),d[0].innerHTML="Please make sure your file is an image",d[0].classList.remove("hidden")):503===e.status||404===e.status?T():(k()("#loading-container").hide(),d[0].innerHTML="An unexpected error occured. Please try again later",d[0].classList.remove("hidden"))}})}:T)()}}function T(){"true"===t.val().toLowerCase()?U(function(e){e?k()("#upload-form").submit():window.location.reload()}):k()("#upload-form").submit()}function L(){return parseInt(n,10)}function x(){var e=k()("#groupId").val(),e=parseInt(e,10);if(!isNaN(e))return e}function C(){var e=k()("#groupId").val();return e&&0<e.length}function I(){var e=D.CurrentUser.userId,a=h.user;C()&&(e=x(),a=h.group);a={name:k()("#name").val(),description:"New clothing asset",creatorTargetId:e,creatorType:a};return JSON.stringify(a)}function U(a){var e={method:g.verifyCaptcha,isGroupUpload:C(),assetTypeId:L(),groupId:x()};window.parent.postMessage(e,"*"),window.addEventListener("message",function(e){e.origin===window.location.origin&&e.data&&e.data.method===g.verifyCaptcha&&(s.val(e.data.captchaToken),c.val(e.data.captchaProvider),a(e.data.success))})}function O(e){e<=0?E():(e={method:g.confirmTransaction,price:e,assetType:L(),isGroupUpload:void 0!==x()},window.parent.postMessage(e,"*"),window.addEventListener("message",function(e){e.origin===window.location.origin&&(e.data&&e.data.method===g.declineTransaction&&window.location.reload(),e.data&&e.data.method===g.confirmTransaction&&E())}))}function E(){var e=k()("#file").val().replace(/^.*[\\\/]/,""),a=e.substr(e.lastIndexOf(".")).toLowerCase(),n=new FormData,t=new Blob([I()],{type:"application/json"});n.append("config",t,"config.json");t="image/".concat(a.replace(".","")),t=new Blob([k()("#file").prop("files")[0]],{type:t});n.append(e,t,e+a);a={captchaToken:s.val(),captchaProvider:c.val()},a=new Blob([JSON.stringify(a)],{type:"application/json"});n.append("captcha-token-request",a,"captcha-token-request.json"),k().ajax({type:"POST",url:"".concat(D.EnvironmentUrls.itemConfigurationApi,"/v1/avatar-assets/").concat(L(),"/upload"),data:n,contentType:!1,processData:!1,success:function(e){k()("#loading-container").hide(),document.getElementById("upload-fee-confirmation-link").href="".concat(D.EnvironmentUrls.websiteUrl,"/catalog/").concat(e.assetId),l[0].classList.remove("hidden"),y(o,!0,!0),window.top.location.reload()},error:function(e){y(o,!0,!0),k()("#upload-button").show(),document.getElementById("upload-form").reset(),400===e.status?(k()("#loading-container").hide(),7===e.responseJSON.errors[0].code?d[0].innerHTML="Upload failed. Did you use the template?":16===e.responseJSON.errors[0].code&&(d[0].innerHTML="Asset name was moderated. Please try again.")):402===e.status?(k()("#loading-container").hide(),d[0].innerHTML="Insufficient funds."):403===e.status&&15===e.responseJSON.errors[0].code?(k()("#loading-container").hide(),d[0].innerHTML="Captcha required."):500===e.status&&12===e.responseJSON.errors[0].code?v.includes(L())?(k()("#loading-container").hide(),d[0].innerHTML="Upload failed. Did you use the template?"):(k()("#loading-container").hide(),d[0].innerHTML="Upload failed. Please try again later."):(k()("#loading-container").hide(),d[0].innerHTML="An unexpected error occured. Please try again later"),d[0].classList.remove("hidden")}})}m.includes(L())&&(e=new FormData,a=new Blob([I()],{type:"application/json"}),e.append("config",a,"config.json"),a=new Blob,e.append("GetUploadFeePrice",a,"GetUploadFeePrice".concat(".png")),k().ajax({type:"POST",url:"".concat(D.EnvironmentUrls.itemConfigurationApi,"/v1/avatar-assets/").concat(L(),"/get-upload-fee"),data:e,contentType:!1,processData:!1,success:function(e){0<e.price&&(o[0].innerHTML="Upload for ".concat(e.price," Robux"))}})),u&&"true"===k()("#isOggUploadEnabled").val().toLowerCase()&&f.push(".ogg"),k()("ul.nav-pills li").click(function(e){e.preventDefault(),k()(".nav-pills li.active").removeClass("active"),k()(this).addClass("active");e=k()(this).data("asset-type-id");k()("input[name=assetTypeId]").val(e)}),k()("#file").change(function(){var e,a;k()("#upload-result").remove(),k()("#file-error").text(""),k()("#name-error").text(""),k()("#file").val()&&(a=(e=k()("#file").val().replace(/^.*[\\\/]/,"")).substr(e.lastIndexOf(".")).toLowerCase(),-1===k().inArray(a,f)?k()("#file-error").text(p):(k()("#name").val(e.slice(0,-a.length)),k()("#name").select()))}),k()("#name").focusout(b),o.click(function(){w(k()(this))}),r.click(function(){k()(this).attr("disabled")||u&&(y(r,!1,!0),k().ajax({type:"POST",url:D.Endpoints.getAbsoluteUrl("/build/verifyaudio"),data:new FormData(k()("form")[0]),contentType:!1,processData:!1,success:function(e){k()("#file-error").text(e.message),e.price&&o.text("Purchase for ".concat(e.price," Robux")),y(o,!e.message&&e.canAfford,!!e.price),y(r,!1,!e.price)},error:function(){y(r,!0,!0)}}))});var P,j=k()("#selectedPlaceId",parent.document);!j||(P=k()("#badge-place-select"))&&0<P.children("option").length&&(j=j.val(),0<k()("#badge-place-select option[value=".concat(j,"]")).length&&P.val(j));for(var M=[],S=["shortsoundeffect","longsoundeffect","music","longmusic"],A=0;A<S.length;A++)i.data("".concat(S[A],"-enabled"))&&M.push({size:i.data("".concat(S[A],"-size")),price:i.data("".concat(S[A],"-price"))});i.data("audiobuckets-enabled")&&0<M.length&&k()("#file[accept='audio/*']").change(function(){k()("#file-error").text(""),y(r,!1,!0),y(o,!1,!1);var e=this.files&&this.files[0];if(e){var a=!1;if(e.size<1)k()("#file-error").text(D.EmbeddedUpload.Resources.fileIsEmpty);else if(e.size<=i.data("max-audio-size"))for(var n=0;n<M.length;n++){var t=M[n];if(e.size<=t.size){a=!0;break}}else k()("#file-error").text(D.EmbeddedUpload.Resources.fileTooLarge);y(r,a,!0)}})})}},t={};function o(e){if(t[e])return t[e].exports;var a=t[e]={exports:{}};return n[e](a,a.exports,o),a.exports}o.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(a,{a:a}),a},o.d=function(e,a){for(var n in a)o.o(a,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},window.AssetsUploader=o(962)}();
//# sourceMappingURL=/rbxcdn/js/070dc10caa7fb1f836b4-assetsUploader.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("AssetsUploader");