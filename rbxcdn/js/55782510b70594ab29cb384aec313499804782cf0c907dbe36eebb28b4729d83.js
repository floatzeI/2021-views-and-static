!function(t){var a={};function n(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=a,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(r,e){if(1&e&&(r=n(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var a in r)n.d(t,a,function(e){return r[e]}.bind(null,a));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=21)}([,function(e,r){e.exports=Roblox},,function(e,r){e.exports=angular},,,function(e,r){function s(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function o(e){return e.split("/").pop().replace(".html","")}var t={importFilesUnderPath:function(e){e.keys().forEach(e)},templateCacheGenerator:function(e,r,a,n){return e.module(r,[]).run(["$templateCache",function(t){a&&a.keys().forEach(function(e){var r=s(o(e));t.put(r,a(e))}),n&&n.keys().forEach(function(e){var r=s(o(e));t.put(r,function(e){return e.replace(/<\/?script[^>]*>/gi,"")}(n(e)))})}])}};e.exports=t},,,function(e,r,t){"use strict";var a=t(1),n=t(3),s=t.n(n).a.module("aliases",["aliasesAppTemplates","modal"]).config(["languageResourceProvider",function(e){a.Lang.ProfileResources&&e.setLanguageKeysFromFile(a.Lang.ProfileResources)}]);r.a=s},,,,,,,,,,,,function(e,r,t){"use strict";t.r(r);var a=t(3),n=t.n(a),s=t(6),o=(t(22),t(9));Object(s.importFilesUnderPath)(t(23)),Object(s.importFilesUnderPath)(t(25)),Object(s.importFilesUnderPath)(t(27)),Object(s.importFilesUnderPath)(t(30));var i=t(34);Object(s.templateCacheGenerator)(n.a,"aliasesAppTemplates",i),window.aliases=o.a,r.default=o.a},function(e,r,t){},function(e,r,t){var a={"./resources.js":24};function n(e){var r=s(e);return t(r)}function s(e){if(t.o(a,e))return a[e];var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}n.keys=function(){return Object.keys(a)},n.resolve=s,(e.exports=n).id=23},function(e,r,t){"use strict";t.r(r);var a=t(1),n=t(9),s={templateUrls:{aliasesContainer:"aliases-container"},httpUrlConfig:{getTags:{url:"".concat(a.EnvironmentUrls.contactsApi,"/v1/user/get-tags"),withCredentials:!0},setUserTag:{url:"".concat(a.EnvironmentUrls.contactsApi,"/v1/user/tag"),withCredentials:!0},getFriendsStatus:{url:"".concat(a.EnvironmentUrls.friendsApi,"/v1/users/{userId}/friends/statuses"),withCredentials:!0}},modals:{changeAlias:{templateUrl:"change-alias-modal",controllerName:"changeAliasController"}},maxCharactersForUserTag:20,friendsStatus:{friends:"Friends"},responseStatus:{moderated:"Moderated"}};n.a.constant("aliasesResources",s),r.default=s},function(e,r,t){var a={"./aliasesContainerDirective.js":26};function n(e){var r=s(e);return t(r)}function s(e){if(t.o(a,e))return a[e];var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}n.keys=function(){return Object.keys(a)},n.resolve=s,(e.exports=n).id=25},function(e,r,t){"use strict";t.r(r);var a=t(9);function n(e){return{restrict:"A",replace:!1,templateUrl:e.templateUrls.aliasesContainer}}n.$inject=["aliasesResources"],a.a.directive("aliasesContainer",n),r.default=n},function(e,r,t){var a={"./aliasesContainerController.js":28,"./changeAliasController .js":29};function n(e){var r=s(e);return t(r)}function s(e){if(t.o(a,e))return a[e];var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}n.keys=function(){return Object.keys(a)},n.resolve=s,(e.exports=n).id=27},function(e,r,t){"use strict";t.r(r);var c=t(1),a=t(9);function u(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(e){n(r,e,t[e])})}return r}function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(a,e,n,r,t,s,o,i,l){a.changeAlias=function(){var e=s.modals.changeAlias.templateUrl,r={layout:a.layout,library:a.library},t={animation:!1,templateUrl:e,controller:s.modals.changeAlias.controllerName,resolve:{injectedData:r}};c.EventStream.SendEvent("userTag","attempt",{userId:a.library.currentUserId,targetUserId:a.library.currentProfileUserId,alias:null}),o.open(t).result.then(function(){},function(){})},a.retrieveCurrentProfileUserId=function(){var e=r.location.pathname.match(/[0-9]+/);return e?e[0]:null},a.setup=function(){var e=parseInt(a.retrieveCurrentProfileUserId()),r=parseInt(c.CurrentUser.userId);a.layout=u({},t.aliasesLayout),a.layout.maxCharactersForUserTag=s.maxCharactersForUserTag,a.library=u({},t.defaultLibrary),a.library.currentProfileUserId=e,a.library.currentUserId=r,a.library.isProfileUserNotCurrentUser=r&&!isNaN(e)&&e!==r},a.init=function(){a.setup(),a.library.isProfileUserNotCurrentUser?l.getFriendsStatus(a.library.currentUserId,[a.library.currentProfileUserId]).then(function(e){if(n.isAliasesLoaded=!0,e&&e.data){var r=e.data;for(var t in r)r[t].status===s.friendsStatus.friends&&(a.layout.isAliasesShown=!0);a.layout.isAliasesShown&&i.getUserTags(a.library.currentProfileUserId).then(function(e){e&&0<e.length&&e.forEach(function(e){if(e.targetUserId===a.library.currentProfileUserId){var r=e.targetUserTag;a.library.currentUserTag=r,a.library.userTag=r}})})}},function(){n.isAliasesLoaded=!0}):n.isAliasesLoaded=!0},a.init()}s.$inject=["$scope","$log","$rootScope","$window","aliasesLayoutService","aliasesResources","$uibModal","contactsService","aliasesFriendsService"],a.a.controller("aliasesContainerController",s),r.default=s},function(e,r,t){"use strict";t.r(r);var a=t(3),i=t.n(a),n=t(9);function s(a,e,t,n,r,s,o){a.modalData=r,a.modalLayout=i.a.copy(s.changeAliasModalLayout),a.saveUserTag=function(){var e=a.modalData.library.currentProfileUserId,r=a.modalData.library.userTag;a.modalData.library.currentUserTag;t.setUserTag(e,r).then(function(e){a.modalData.library.currentUserTag=a.modalData.library.userTag,n.dismiss()},function(e){if(e&&e.data){var r=e.data.status,t=a.modalLayout.setUserTagResponses;r===o.responseStatus.moderated&&(a.modalData.library.userTag="",a.modalLayout.displayError=t.moderationError)}a.modalLayout.isRequestFailed=!0})},a.close=function(){a.modalData.library.userTag=a.modalData.library.currentUserTag,n.dismiss()},a.resetInputStatus=function(){a.modalLayout.isRequestFailed=!1}}s.$inject=["$scope","$log","contactsService","$uibModalInstance","injectedData","aliasesLayoutService","aliasesResources"],n.a.controller("changeAliasController",s),r.default=s},function(e,r,t){var a={"./contactsService.js":31,"./friendsService.js":32,"./layoutService.js":33};function n(e){var r=s(e);return t(r)}function s(e){if(t.o(a,e))return a[e];var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}n.keys=function(){return Object.keys(a)},n.resolve=s,(e.exports=n).id=30},function(e,r,t){"use strict";t.r(r);var a=t(9);function n(e,a,n,s){return{getUserTags:function(e){var r={targetUserIds:[e]};return a.httpPost(n.httpUrlConfig.getTags,r)},setUserTag:function(e,r){var t={targetUserId:e,userTag:r};return a.httpPost(n.httpUrlConfig.setUserTag,t,!0).then(function(e){if(e.data&&e.data.status===n.responseStatus.moderated)return s.reject(e)})}}}n.$inject=["$log","httpService","aliasesResources","$q"],a.a.factory("contactsService",n),r.default=n},function(e,r,t){"use strict";t.r(r);var a=t(9);function n(n,s,o){return{getFriendsStatus:function(e,r){var t={userIds:r},a=s.httpUrlConfig.getFriendsStatus.url;return s.httpUrlConfig.getFriendsStatus.url=o("formatString")(a,{userId:e}),n.httpGet(s.httpUrlConfig.getFriendsStatus,t)}}}n.$inject=["httpService","aliasesResources","$filter"],a.a.factory("aliasesFriendsService",n),r.default=n},function(e,r,t){"use strict";t.r(r);var a=t(9);function n(e,r){var t=r;return{defaultLibrary:{currentProfileUserId:0,currentUserTag:"",userTag:""},aliasesLayout:{label:t.get("Label.Alias"),changeAliasTile:t.get("Label.ChangeAlias"),changeAliasDescription:t.get("Description.ChangeAlias"),modalClose:t.get("Action.Close"),modalSave:t.get("Action.Save"),modalCancel:t.get("Label.Cancel"),isAliasesShown:!1},changeAliasModalLayout:{isRequestFailed:!1,displayError:t.get("Message.AliasHasError"),setUserTagResponses:{defaultError:t.get("Message.AliasHasError"),moderationError:t.get("Message.AliasIsModerated")}}}}n.$inject=["$log","languageResource"],a.a.factory("aliasesLayoutService",n),r.default=n},function(e,r,t){var a={"./directives/templates/aliasesContainer.html":35,"./directives/templates/changeAliasModal.html":36};function n(e){var r=s(e);return t(r)}function s(e){if(t.o(a,e))return a[e];var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}n.keys=function(){return Object.keys(a)},n.resolve=s,(e.exports=n).id=34},function(e,r){e.exports='<div class="border-top" ng-controller="aliasesContainerController" ng-show="layout.isAliasesShown"> <div class="user-tag-header"> <span class="font-header-2"> {{layout.label}} </span> <span class="cursor-pointer icon-edit user-tag-controller" ng-click="changeAlias()"></span> </div> <div class="font-header-2 text-subheader user-tag" ng-bind="library.currentUserTag"> </div> </div>'},function(e,r){e.exports='<div id="change-alias" class="modal-content"> <div class="modal-header"> <button type="button" class="close" ng-click="close()"> <span aria-hidden="true"><span class="icon-close"></span></span> <span class="sr-only">{{modalData.layout.modalClose}}</span> </button> <h5>{{modalData.layout.changeAliasTile}}</h5> </div> <form name="nameForm"> <div class="modal-body"> <div ng-class="{\'form-has-error\': modalLayout.isRequestFailed, \'form-has-feedback\': modalLayout.isRequestFailed }" class="form-change-alias"> <input type="text" focus-me="true" ng-model="modalData.library.userTag" maxlength="{{modalData.layout.maxCharactersForUserTag}}" class="form-control input-field" autocomplete="off" ng-change="resetInputStatus()"/> <div class="clearfix font-caption-body change-alias-feedback-container"> <p class="text-description font-caption-body"> {{modalData.layout.changeAliasDescription}} </p> <span class="count-down">{{modalData.library.userTag.length}}/{{modalData.layout.maxCharactersForUserTag}}</span> </div> <p ng-class="{\'invisible\': modalLayout.isRequestFailed }" class="font-caption-body form-control-feedback" ng-bind="modalLayout.displayError"></p> </div> </div> <div class="modal-footer"> <button class="btn-primary-md btn-min-width" ng-click="saveUserTag()"> {{modalData.layout.modalSave}} </button> <button class="btn-secondary-md btn-min-width" ng-click="close()"> {{modalData.layout.modalCancel}} </button> </div> </form> </div> '}]);
//# sourceMappingURL=https://js.rbxcdn.com/d342de3af201c039ea0d-aliases.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Aliases");