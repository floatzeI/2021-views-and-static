!function(){var n={5466:function(t,o,n){var e={"./infiniteScrollDirective.js":179};function i(t){t=a(t);return n(t)}function a(t){if(n.o(e,t))return e[t];t=new Error("Cannot find module '"+t+"'");throw t.code="MODULE_NOT_FOUND",t}i.keys=function(){return Object.keys(e)},i.resolve=a,(t.exports=i).id=5466},5520:function(t,o,n){var e={"./limitedIconDirective.js":4623};function i(t){t=a(t);return n(t)}function a(t){if(n.o(e,t))return e[t];t=new Error("Cannot find module '"+t+"'");throw t.code="MODULE_NOT_FOUND",t}i.keys=function(){return Object.keys(e)},i.resolve=a,(t.exports=i).id=5520},9206:function(t,o,n){var e={"./directives/templates/limitedIconContainer.html":6049};function i(t){t=a(t);return n(t)}function a(t){if(n.o(e,t))return e[t];t=new Error("Cannot find module '"+t+"'");throw t.code="MODULE_NOT_FOUND",t}i.keys=function(){return Object.keys(e)},i.resolve=a,(t.exports=i).id=9206},6175:function(t,o,n){var e={"./modalOptions.js":9182};function i(t){t=a(t);return n(t)}function a(t){if(n.o(e,t))return e[t];t=new Error("Cannot find module '"+t+"'");throw t.code="MODULE_NOT_FOUND",t}i.keys=function(){return Object.keys(e)},i.resolve=a,(t.exports=i).id=6175},3132:function(t,o,n){var e={"./modalController.js":4103};function i(t){t=a(t);return n(t)}function a(t){if(n.o(e,t))return e[t];t=new Error("Cannot find module '"+t+"'");throw t.code="MODULE_NOT_FOUND",t}i.keys=function(){return Object.keys(e)},i.resolve=a,(t.exports=i).id=3132},2938:function(t,o,n){var e={"./modalService.js":1965,"./modalStringService.js":8519};function i(t){t=a(t);return n(t)}function a(t){if(n.o(e,t))return e[t];t=new Error("Cannot find module '"+t+"'");throw t.code="MODULE_NOT_FOUND",t}i.keys=function(){return Object.keys(e)},i.resolve=a,(t.exports=i).id=2938},3267:function(t,o,n){var e={"./controllers/templates/commonModal.html":4790};function i(t){t=a(t);return n(t)}function a(t){if(n.o(e,t))return e[t];t=new Error("Cannot find module '"+t+"'");throw t.code="MODULE_NOT_FOUND",t}i.keys=function(){return Object.keys(e)},i.resolve=a,(t.exports=i).id=3267},6704:function(t,o,n){var e={"./toastDirective.js":3039};function i(t){t=a(t);return n(t)}function a(t){if(n.o(e,t))return e[t];t=new Error("Cannot find module '"+t+"'");throw t.code="MODULE_NOT_FOUND",t}i.keys=function(){return Object.keys(e)},i.resolve=a,(t.exports=i).id=6704},7677:function(t,o,n){var e={"./directives/templates/toast.html":3973};function i(t){t=a(t);return n(t)}function a(t){if(n.o(e,t))return e[t];t=new Error("Cannot find module '"+t+"'");throw t.code="MODULE_NOT_FOUND",t}i.keys=function(){return Object.keys(e)},i.resolve=a,(t.exports=i).id=7677},6832:function(t,o,n){var e={"./verticalMenuDirective.js":5118};function i(t){t=a(t);return n(t)}function a(t){if(n.o(e,t))return e[t];t=new Error("Cannot find module '"+t+"'");throw t.code="MODULE_NOT_FOUND",t}i.keys=function(){return Object.keys(e)},i.resolve=a,(t.exports=i).id=6832},726:function(t){function a(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function r(t){return t.split("/").pop().replace(".html","")}var o={importFilesUnderPath:function(t){t.keys().forEach(t)},templateCacheGenerator:function(t,o,e,i){return t.module(o,[]).run(["$templateCache",function(n){e&&e.keys().forEach(function(t){var o=a(r(t));n.put(o,e(t))}),i&&i.keys().forEach(function(t){var o=a(r(t));n.put(o,i(t).replace(/<\/?script[^>]*>/gi,""))})}])}};t.exports=o},179:function(t,o,n){"use strict";n.r(o);n=n(7070);function e(c,u,d,m){return{link:function(o,n,e){var i,a;u=angular.element(u),a=0,null!=e.infiniteScrollDistance&&o.$watch(e.infiniteScrollDistance,function(t){return a=parseInt(t,10)});var t,r=!0,l=!0,s=!1;return null!=e.infiniteScrollDisabled&&o.$watch(e.infiniteScrollDisabled,function(t){if((l=!t)&&s)return s=!1,i()}),i=function(){if(!r)return!1;var t=u.height()+u.scrollTop(),t=n.offset().top+n.height()-t<=u.height()*a;return t&&l?c.$$phase?o.$eval(e.infiniteScroll):o.$apply(e.infiniteScroll):t?s=!0:void 0},null!==e.infiniteScrollAlwaysDisabled&&(t=o.$watch(function(){return m(e.infiniteScrollAlwaysDisabled)(o)},function(t){null!=t&&(r=!t)})),u.on("scroll",i),o.$on("manualInfiniteScrollCheck",i),o.$on("$destroy",function(){return t&&t(),u.off("scroll",i)}),d(function(){return e.infiniteScrollImmediateCheck&&o.$eval(e.infiniteScrollImmediateCheck),i()},0)}}}e.$inject=["$rootScope","$window","$timeout","$parse"],n.Z.directive("infiniteScroll",e),o.default=e},7070:function(t,o,n){"use strict";var e=n(5734),e=n.n(e)().module("infiniteScroll",[]);o.Z=e},4623:function(t,o,n){"use strict";function e(){return{restrict:"A",replace:!0,scope:{layoutOptions:"=layoutOptions"},templateUrl:"limited-icon-container"}}n.r(o),n(3329).Z.directive("limitedIcon",e),o.default=e},3329:function(t,o,n){"use strict";var e=n(5734),e=n.n(e)().module("limitedIcon",["limitedIconTemplate"]);o.Z=e},9182:function(t,o,n){"use strict";n.r(o);var e={params:{titleText:"",titleIcon:"",bodyText:"",bodyHtmlUnsafe:"",footerText:"",footerHtmlUnsafe:"",imageUrl:"",actionButtonShow:!1,actionButtonClass:"btn-secondary-md",actionButtonId:"modal-action-button",neutralButtonShow:!0,neutralButtonClass:"btn-control-md",closeButtonShow:!0,cssClass:"modal-window"},defaults:{keyboard:!0,animation:!1},commonTemplateUrl:"cc-modal-template",commonController:"modalController",layoutParams:{modalSelector:".modal",modalContentSelector:".modal-content"},backdropStatus:{static:"static"},userInteraction:{mouseDown:"mousedown"},mainButtonPressed:0};n(6635).Z.constant("modalOptions",e),o.default=e},4103:function(t,o,n){"use strict";n.r(o);n=n(6635);function e(t,o,n,e,i,a){o.modalData=i,o.closeActions=a.closeActions,o.close=function(t){e.close(t)},o.dismiss=function(){e.dismiss("dismissed")}}e.$inject=["$log","$scope","$sce","$uibModalInstance","modalData","modalService"],n.Z.controller("modalController",e),o.default=e},6635:function(t,o,n){"use strict";var e=n(792),i=n(5734),i=n.n(i)().module("modal",["ui.bootstrap","modalHtmlTemplate"]).config(["$uibModalProvider","$injector",function(t,o){t.options.openedClass="modal-open-noscroll",t.options.animation=!1,e.Lang&&e.Lang.ControlsResources&&o.get("languageResourceProvider").setLanguageKeysFromFile(e.Lang.ControlsResources)}]).run(["modalOptions","$uibModalStack","$rootScope",function(n,e,t){var o=t.$watch(function(){return document.querySelectorAll(n.layoutParams.modalSelector).length},function(t){0<t&&(window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),document.querySelectorAll(n.layoutParams.modalSelector).forEach(function(t){var o=e.getTop();o&&o.value.backdrop!==n.backdropStatus.static&&(t.addEventListener(n.userInteraction.mouseDown,function(t){t.button===n.mainButtonPressed&&e.getTop().key&&e.getTop().key.dismiss()}),t.querySelector(n.layoutParams.modalContentSelector).addEventListener(n.userInteraction.mouseDown,function(t){t.stopPropagation()}))}),e.getTop()&&(e.getTop().value.backdrop=n.backdropStatus.static))});t.$on("$destroy",function(){o()})}]);o.Z=i},1965:function(t,o,n){"use strict";n.r(o);var e=n(5734),i=n.n(e),n=n(6635);function a(o,n,t){var e=i().extend({},t.params,n.params);return{open:function(t){return t=i().extend({},e,t),(t=o.open({templateUrl:n.commonTemplateUrl,controller:n.commonController,windowClass:t.cssClass||"",animation:t.animation||n.defaults.animation,keyboard:t.keyboard||n.defaults.keyboard,backdrop:!!t.closeButtonShow||"static",openedClass:t.openedClass||"modal-open-noscroll",resolve:{modalData:t}})).result.then(i().noop,i().noop),t}}}a.$inject=["$uibModal","modalOptions","modalStringService"],n.Z.service("modalService",a),o.default=a},8519:function(t,o,n){"use strict";n.r(o);n=n(6635);function e(t){return{params:{actionButtonText:t.get("Action.Yes"),neutralButtonText:t.get("Action.OK")}}}e.$inject=["languageResource"],n.Z.service("modalStringService",e),o.default=e},3039:function(t,o,n){"use strict";n.r(o);n=n(71);function e(e){return{restrict:"A",replace:!0,scope:{toastLayout:"="},templateUrl:"toast",link:function(n){n.layout={isEnabled:!1,isVisible:!1,isNeeded:!1,text:"",timeout:null,animationDuration:200,visibilityDelay:50},n.$watch("toastLayout.isNeeded",function(t,o){t!==o&&t&&!n.layout.timeout&&(n.layout.text=n.toastLayout.text,n.layout.isEnabled=t,n.toastLayout.isNeeded=!1,e(function(){n.layout.isVisible=!0},n.layout.visibilityDelay),n.layout.timeout=e(function(){n.layout.isVisible=!1,e(function(){n.layout.isEnabled=!1,n.layout.timeout=null,n.toastLayout.isNeeded=!1},n.layout.animationDuration)},n.toastLayout.timeout),n.toastLayout.isNeeded=!1)},!0)}}}e.$inject=["$timeout"],n.Z.directive("toast",e),o.default=e},71:function(t,o,n){"use strict";var e=n(5734),e=n.n(e)().module("toast",["toastHtmlTemplate"]);o.Z=e},5118:function(t,o,n){"use strict";n.r(o);var e=n(5690),i=n(792);function a(){return{restrict:"A",link:function(t,o,n){var e=t.$watch(n.resetVerticalMenu,function(){i.BootstrapWidgets.SetupVerticalMenu()});t.$on("$destroy",function(){e&&e()})}}}e.Z.directive("verticalMenu",a),o.default=a},5690:function(t,o,n){"use strict";var e=n(5734),e=n.n(e)().module("verticalMenu",[]);o.Z=e},6049:function(t){t.exports='<span class="limited-icon-container"> <span class="icon-shop-limited" ng-hide="layoutOptions.isIconDisabled"> </span> <span class="limited-number-container" ng-show="layoutOptions.isUnique"> <span class="font-caption-header">#</span> <span class="font-caption-header text-subheader limited-number" ng-show="layoutOptions.isLimitedNumberShown" ng-bind="layoutOptions.limitedNumber"></span> </span>'},4790:function(t){t.exports='<div> <div class="modal-header"> <button type="button" class="close" ng-show="modalData.closeButtonShow" ng-click="dismiss()"> <span class="icon-close"></span> </button> <div class="modal-title"> <span ng-if="modalData.titleIcon && modalData.titleIcon.length > 0" ng-class="modalData.titleIcon"></span> <h4 ng-bind="modalData.titleText"></h4> </div> </div> <div class="modal-body"> <p ng-if="modalData.bodyText" class="body-text text-description" ng-bind="modalData.bodyText"></p> <p ng-if="modalData.bodyHtmlUnsafe" class="body-text text-description" ng-bind-html="modalData.bodyHtmlUnsafe"></p> <div class="img-container modal-image-container" ng-show="modalData.imageUrl && modalData.imageUrl.length > 0"> <img class="modal-thumb" ng-src="{{modalData.imageUrl}}"/> </div> </div> <div class="modal-buttons"> <button type="submit" ng-attr-id="{{modalData.actionButtonId}}" class="modal-button" ng-class="modalData.actionButtonClass" ng-if="modalData.actionButtonShow" ng-click="close(true)" ng-bind="modalData.actionButtonText"></button> <button type="button" class="modal-button" ng-class="modalData.neutralButtonClass" ng-if="modalData.neutralButtonShow" ng-click="dismiss()" ng-bind="modalData.neutralButtonText"></button> </div> <div class="modal-footer" ng-if="modalData.footerText && modalData.footerText.length > 0"> <div class="text-footer" ng-bind="modalData.footerText"></div> </div> <div class="modal-footer" ng-if="modalData.footerHtmlUnsafe && modalData.footerHtmlUnsafe.length > 0"> <div class="text-footer" ng-bind-html="modalData.footerHtmlUnsafe"></div> </div> </div> '},3973:function(t){t.exports='<div class="toast-container" ng-show="layout.isEnabled" ng-class="{\'toast-visible\': layout.isVisible}"> <div class="toast-content"> <span ng-bind="layout.text"></span> </div> </div>'},1716:function(){},792:function(t){"use strict";t.exports=Roblox},5734:function(t){"use strict";t.exports=angular}},e={};function i(t){if(e[t])return e[t].exports;var o=e[t]={exports:{}};return n[t](o,o.exports,i),o.exports}i.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(o,{a:o}),o},i.d=function(t,o){for(var n in o)i.o(o,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},i.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){"use strict";var t=i(5734),o=i.n(t),n=i(726),t=i(1716);i(71),i(7070),i(5690),i(6635),i(3329),(0,n.importFilesUnderPath)(i(6704)),t=i(7677),(0,n.templateCacheGenerator)(o(),"toastHtmlTemplate",t),(0,n.importFilesUnderPath)(i(5466)),(0,n.importFilesUnderPath)(i(6832)),(0,n.importFilesUnderPath)(i(6175)),(0,n.importFilesUnderPath)(i(3132)),(0,n.importFilesUnderPath)(i(2938)),t=i(3267),(0,n.templateCacheGenerator)(o(),"modalHtmlTemplate",t),(0,n.importFilesUnderPath)(i(5520)),t=i(9206),(0,n.templateCacheGenerator)(o(),"limitedIconTemplate",t)}()}();
//# sourceMappingURL=/rbxcdn/js/d2c52d9aadb435394db5-styleGuide.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("StyleGuide");