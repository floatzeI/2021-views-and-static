!function(t){var r={};function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i(i.s=216)}({14:function(e,n,t){"use strict";var r=t(2),i=t.n(r),o=t(7),l=i.a.module("fileUpload",["fileUploadHtmlTemplate","systemFeedback","thumbnails"]).config(["languageResourceProvider",function(e){o.Lang.FileUploadComponentResources&&e.setLanguageKeysFromFile(o.Lang.FileUploadComponentResources)}]);n.a=l},2:function(e,n){e.exports=angular},216:function(e,n,t){"use strict";t.r(n);var r=t(2),i=t.n(r),o=t(4),l=(t(217),t(14));Object(o.importFilesUnderPath)(t(218)),Object(o.importFilesUnderPath)(t(220)),Object(o.importFilesUnderPath)(t(222)),Object(o.importFilesUnderPath)(t(224));var a=t(228);Object(o.templateCacheGenerator)(i.a,"fileUploadHtmlTemplate",a),n.default=l.a},217:function(e,n,t){},218:function(e,n,t){var r={"./fileUploadController.js":219};function i(e){var n=o(e);return t(n)}function o(e){var n=r[e];if(n+1)return n;var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}i.keys=function(){return Object.keys(r)},i.resolve=o,(e.exports=i).id=218},219:function(e,n,t){"use strict";t.r(n);var r=t(14),s=t(7);function i(r,i,o,l,e,n){var a=this;function c(){return a.fileUploadInfo.maxFileSizeInMegabytes||i.defaultMaxFileSizeInMegabytes}a.getCssClasses=function(){return n.getCssClass(a.thumbnailState)},a.allowedFileTypesString=function(){var e=a.fileUploadInfo.allowedFileTypes;return e?1===e.length?e[0]:e.join(", "):""},a.onFileChange=function(e){var n=a.fileModel[0];if(e&&(n=e.type===i.eventTypes.drop?(e.preventDefault(),e.originalEvent.dataTransfer.files[0]):e.target.file[0],a.fileModel=[]),n)if(function(e){if(!e||!e.name||0===!e.name.length)return!1;var n=a.fileUploadInfo.allowedFileTypes;if(!n||0===n.length)return!0;var t="."+e.name.split(".").pop().toLowerCase();return n.includes(t)}(n))if(function(e){return e.size<=1e3*c()*1e3}(n)){var t=new FileReader;t.onload=function(e){r.$apply(function(){a.fileUploadInfo.previewSrc=e.target.result,a.fileUploadInfo.fileSelected=!0,a.fileUploadInfo.file=n,a.thumbnailState=""})},t.readAsDataURL(n)}else l.warning(o.get("Message.InvalidFileSize",{fileSize:c()})),a.fileModel=[];else l.warning(o.get("Message.InvalidFile",{fileTypes:a.allowedFileTypesString()})),a.fileModel=[]};a.$onInit=function(){a.fileModel=[],s.DeviceMeta&&!Object(s.DeviceMeta)().isDesktop&&(a.fileUploadInfo.mobileDevice=!0)}}i.$inject=["$scope","fileUploadConstants","languageResource","systemFeedbackService","thumbnailConstants","thumbnailService"],r.a.controller("fileUploadController",i),n.default=i},220:function(e,n,t){var r={"./fileUploadConstants.js":221};function i(e){var n=o(e);return t(n)}function o(e){var n=r[e];if(n+1)return n;var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}i.keys=function(){return Object.keys(r)},i.resolve=o,(e.exports=i).id=220},221:function(e,n,t){"use strict";t.r(n);var r={effectTypes:{copy:"copy"},eventTypes:{drop:"drop"},defaultMaxFileSizeInMegabytes:4};t(14).a.constant("fileUploadConstants",r),n.default=r},222:function(e,n,t){var r={"./fileUploadComponent.js":223};function i(e){var n=o(e);return t(n)}function o(e){var n=r[e];if(n+1)return n;var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}i.keys=function(){return Object.keys(r)},i.resolve=o,(e.exports=i).id=222},223:function(e,n,t){"use strict";t.r(n);var r={templateUrl:"file-upload",bindings:{fileUploadInfo:"=",thumbnailState:"<"},controller:"fileUploadController"};t(14).a.component("fileUpload",r),n.default=r},224:function(e,n,t){var r={"./dropzoneDirective.js":225,"./enableFileSelectionDirective.js":226,"./imagePreviewDirective.js":227};function i(e){var n=o(e);return t(n)}function o(e){var n=r[e];if(n+1)return n;var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}i.keys=function(){return Object.keys(r)},i.resolve=o,(e.exports=i).id=224},225:function(e,n,t){"use strict";t.r(n);var r=t(14);function i(i){var o="dragover";return{scope:{onFileChange:"="},link:function(n,t,e){function r(e){e.preventDefault();var n=e&&e.originalEvent;return n&&(e.dataTransfer&&(e.dataTransfer.setData("text","anything"),n.dataTransfer.effectAllowed=i.effectTypes.copy),t.addClass(o)),!1}t.on("drop",function(e){e.preventDefault(),n.onFileChange(e),t.removeClass(o)}),t.on("dragover",r),t.on("dragenter",r),t.on("dragleave",function(e){t.removeClass(o)})}}}i.$inject=["fileUploadConstants"],r.a.directive("dropzone",i),n.default=i},226:function(e,n,t){"use strict";function r(){return{scope:{onFileChange:"="},require:"ngModel",link:function(n,t,e,r){r.$setViewValue(t[0].files),t.on("change",function(e){r.$setViewValue(t[0].files),"function"==typeof n.onFileChange&&n.onFileChange()})}}}t.r(n),t(14).a.directive("enableFileSelection",r),n.default=r},227:function(e,n,t){"use strict";function r(){return{link:function(e,c,n){c.on("load",function(e){c.removeClass("scale-height"),c.removeClass("scale-width");var n=c[0],t=n.parentElement,r=t.clientHeight,i=t.clientWidth,o=n.naturalHeight,l=n.naturalWidth;if(o<r&&l<i){var a=l<o?"scale-height":"scale-width";c.addClass(a)}})}}}t.r(n),t(14).a.directive("imagePreview",r),n.default=r},228:function(e,n,t){var r={"./components/templates/fileUpload.html":229};function i(e){var n=o(e);return t(n)}function o(e){var n=r[e];if(n+1)return n;var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}i.keys=function(){return Object.keys(r)},i.resolve=o,(e.exports=i).id=228},229:function(e,n){e.exports='<div id="file-upload-widget"> <div class="file-upload-content"> <div class="thumbnail-holder asset-thumb-container image-wrapper contain" ng-class="$ctrl.getCssClasses()"> <img class="image" ng-if="$ctrl.fileUploadInfo.previewSrc" ng-src="{{ $ctrl.fileUploadInfo.previewSrc }}" image-preview/> <div class="preview-overlay" ng-show="$ctrl.fileUploadInfo.fileSelected"> <div class="font-caption-header preview-text text-overflow" ng-bind="$ctrl.fileUploadInfo.file.name"></div> </div> </div> <dropzone class="dropzone" ng-show="!$ctrl.fileUploadInfo.mobileDevice" on-file-change="$ctrl.onFileChange"></dropzone> <div class="instruction-container"> <div ng-show="!$ctrl.fileUploadInfo.mobileDevice"> <p class="instruction-text" ng-bind="\'Label.DragImage\' | translate"></p> <p class="text-on-line"> — <span ng-bind="\'Label.Or\' | translate"></span> — </p> </div> <input type="file" name="file" id="selectFile" class="hidden file-upload-elem" ng-model="$ctrl.fileModel" on-file-change="$ctrl.onFileChange" accept="{{ $ctrl.allowedFileTypesString() }}" enable-file-selection/> <label for="selectFile" class="btn-control-sm btn-action file-btn" ng-bind="$ctrl.fileUploadInfo.mobileDevice ? (\'Label.SelectFromDevice\' | translate) : (\'Label.SelectFromComputer\' | translate)"> </label> </div> </div> </div> '},4:function(e,n){function o(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function l(e){return e.split("/").pop().replace(".html","")}var t={importFilesUnderPath:function(e){e.keys().forEach(e)},templateCacheGenerator:function(e,n,r,i){return e.module(n,[]).run(["$templateCache",function(t){r&&r.keys().forEach(function(e){var n=o(l(e));t.put(n,r(e))}),i&&i.keys().forEach(function(e){var n=o(l(e));t.put(n,function(e){return e.replace(/<\/?script[^>]*>/gi,"")}(i(e)))})}])}};e.exports=t},7:function(e,n){e.exports=Roblox}});
//# sourceMappingURL=/rbxcdn/js/5d4b39f6afbc599b148a-fileUpload.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("FileUpload");