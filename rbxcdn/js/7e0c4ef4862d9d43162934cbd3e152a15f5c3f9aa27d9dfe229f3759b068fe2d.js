!function(r){var n={};function a(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=r,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=37)}([function(e,t){e.exports=Roblox},,,function(e,t){e.exports=angular},,function(e,t,r){"use strict";var n=r(0),a=r(3),i=r.n(a).a.module("peopleList",["peopleListHtmlTemplateApp","robloxApp","ui.bootstrap","thumbnails"]).config(["languageResourceProvider",function(e){n.Lang.PeopleListResources&&e.setLanguageKeysFromFile(n.Lang.PeopleListResources)}]);t.a=i},function(e,t){function i(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function s(e){return e.split("/").pop().replace(".html","")}var r={importFilesUnderPath:function(e){e.keys().forEach(e)},templateCacheGenerator:function(e,t,n,a){return e.module(t,[]).run(["$templateCache",function(r){n&&n.keys().forEach(function(e){var t=i(s(e));r.put(t,n(e))}),a&&a.keys().forEach(function(e){var t=i(s(e));r.put(t,function(e){return e.replace(/<\/?script[^>]*>/gi,"")}(a(e)))})}])}};e.exports=r},,,,,,,function(e,t,r){"use strict";function n(){var e=/\/users\/(\d+)\//g.exec(window.location.href);return e?e[1]:null}r.d(t,"a",function(){return n})},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";r.r(t);var n=r(3),a=r.n(n),i=r(6),s=(r(38),r(5));Object(i.importFilesUnderPath)(r(39)),Object(i.importFilesUnderPath)(r(41)),Object(i.importFilesUnderPath)(r(45)),Object(i.importFilesUnderPath)(r(50));var o=r(55),l=Object(i.templateCacheGenerator)(a.a,"peopleListHtmlTemplateApp",o);a.a.element("#people-list-container").hasClass("no-self-bootstrap")?window.peopleList=s.a:a.a.element(function(){a.a.bootstrap("#people-list-container",[s.a.name,l.name])}),t.default=s.a},function(e,t,r){},function(e,t,r){var n={"./resources.js":40};function a(e){var t=i(e);return r(t)}function i(e){if(r.o(n,e))return n[e];var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return Object.keys(n)},a.resolve=i,(e.exports=a).id=39},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(5),i={templateUrls:{peopleListContainer:"people-list-container",peopleList:"people-list",peopleInfoCard:"people-info-card",people:"people"},apiSets:{getFriendsListUrl:{url:n.EnvironmentUrls?"".concat(n.EnvironmentUrls.friendsApi,"/v1/users/{userId}/friends"):"/v1/users/{userId}/friends",retryable:!0,withCredentials:!0},getPresences:{url:n.EnvironmentUrls?"".concat(n.EnvironmentUrls.presenceApi,"/v1/presence/users"):"/v1/presence/users",retryable:!0,withCredentials:!0},multiGetPlaceDetails:{url:n.EnvironmentUrls?"".concat(n.EnvironmentUrls.gamesApi,"/v1/games/multiget-place-details"):"/v1/games/multiget-place-details",retryable:!0,withCredentials:!0},multiGetGameIcons:{url:n.EnvironmentUrls?"".concat(n.EnvironmentUrls.gamesApi,"/v1/games/game-thumbnails"):"/v1/games/game-thumbnails",retryable:!0,withCredentials:!0}},apiParams:{avatarMultiGetLimit:100,presenceMultiGetLimit:100},gameIconSize:{lg:{width:150,height:150}},eventStreamParams:{goToProfileFromAvatar:{name:"goToProfileFromAvatar",ctx:"click"},goToProfileInPeopleList:{name:"goToProfileFromPeopleList",ctx:"click"},openPeopleList:{name:"openPeopleList",ctx:"hover"},goToChatInPeopleList:{name:"goToChatFromPeopleList",ctx:"click"},joinGameInPeopleList:{name:"joinGameInPeopleList",ctx:"click"},goToGameDetailFromAvatar:{name:"goToGameDetailFromAvatar",ctx:"click"},goToGameDetailInPeopleList:{name:"goToGameDetailInPeopleList",ctx:"click"},gamePlayIntentInPeopleList:{ctx:"peopleListInHomePage"}},hoverPopoverParams:{isOpen:!1,triggerSelector:"",hoverPopoverSelector:"",isDisabled:!!n.DeviceMeta&&(!Object(n.DeviceMeta)().isDesktop||Object(n.DeviceMeta)().isUWPApp)},reasonProhibitedMessage:{None:"None",PurchaseRequired:"PurchaseRequired"},peopleInfoCardContainerClass:"card-with-game"};a.a.constant("resources",i),t.default=i},function(e,t,r){var n={"./peopleDirective.js":42,"./peopleListContainerDirective.js":43,"./peopleListDirective.js":44};function a(e){var t=i(e);return r(t)}function i(e){if(r.o(n,e))return n[e];var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return Object.keys(n)},a.resolve=i,(e.exports=a).id=41},function(e,t,r){"use strict";r.r(t);var n=r(5);function a(e){return{restrict:"A",scope:!0,replace:!0,templateUrl:e.templateUrls.people}}a.$inject=["resources"],n.a.directive("people",a),t.default=a},function(e,t,r){"use strict";r.r(t);var n=r(5);function a(e,t){return{restrict:"A",scope:!0,replace:!0,templateUrl:e.templateUrls.peopleListContainer,link:function(){t.isFriendsListLoaded=!0}}}a.$inject=["resources","$rootScope"],n.a.directive("peopleListContainer",a),t.default=a},function(e,t,r){"use strict";r.r(t);var n=r(5);function a(e){return{restrict:"A",scope:!0,replace:!0,templateUrl:e.templateUrls.peopleList}}a.$inject=["resources"],n.a.directive("peopleList",a),t.default=a},function(e,t,r){var n={"./friendsListController.js":46,"./peopleController.js":47,"./peopleInfoCardController.js":48,"./peopleListContainerController.js":49};function a(e){var t=i(e);return r(t)}function i(e){if(r.o(n,e))return n[e];var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return Object.keys(n)},a.resolve=i,(e.exports=a).id=45},function(e,t,r){"use strict";r.r(t);var n=r(3),o=r.n(n),a=r(5);function i(a,e,t,i,s,r){a.clickAvatar=function(e,t){var r=s.eventStreamParams.goToProfileFromAvatar,n={friendId:e.id,presentStatus:e.presence.userPresenceType,position:t};e.presence.rootPlaceId&&(n.rootPlaceId=e.presence.rootPlaceId),i.sendEventWithTarget(r.name,r.ctx,n)},a.clickPlaceLink=function(e,t){var r=s.eventStreamParams.goToGameDetailFromAvatar,n={friendId:e.id,position:t,rootPlaceId:e.presence.rootPlaceId};i.sendEventWithTarget(r.name,r.ctx,n)},a.updatePresenceStatus=function(e){for(var t=[],r=0;r<e.length;r++){var n=e[r];n.rootPlaceId&&!a.library.placesDict[n.rootPlaceId]&&t.push(n.rootPlaceId),a.updatePresenceData(n)}0<t.length&&o.a.isFunction(a.setPlaceDetails)&&a.setPlaceDetails(t)},a.listenToPresenceUpdate=function(){document.addEventListener("Roblox.Presence.Update",function(e){(null==e?void 0:e.detail)&&r(function(){a.updatePresenceStatus(e.detail)})})},a.init=function(){a.listenToPresenceUpdate()},a.init()}i.$inject=["$scope","$log","$document","eventStreamService","resources","$timeout"],a.a.controller("friendsListController",i),t.default=i},function(e,t,r){"use strict";r.r(t);var n=r(3),a=r.n(n),i=r(5);function s(e,t,r){e.setupHoverPopover=function(){e.peopleInfoCardPlacement="bottom",e.peopleInfoCardTemplateUrl=r.templateUrls.peopleInfoCard,e.peopleInfoCardContainerClass=e.friend.presence&&e.friend.presence.placeUrl?r.peopleInfoCardContainerClass:"",e.hoverPopoverParams=a.a.copy(r.hoverPopoverParams),e.hoverPopoverParams.triggerSelector="#people-".concat(e.friend.id),e.hoverPopoverParams.hoverPopoverSelector=".people-info-".concat(e.friend.id),e.hoverPopoverParams.isDisabled=e.hoverPopoverParams.isDisabled||!e.library.isForCurrentUsersFriends},e.init=function(){e.setupHoverPopover()},e.init()}s.$inject=["$scope","$log","resources"],i.a.controller("peopleController",s),t.default=s},function(e,t,r){"use strict";r.r(t);var n=r(5);function a(p,e,u,d,r,f,t,n,m){p.sendEventStream=function(e,t){(t=t||{}).friendId=p.friend.id,t.position=p.$index,n.sendEventWithTarget(e.name,e.ctx,t)},p.sendGamePlayEvent=function(e){n.sendGamePlayEvent(u.eventStreamParams.gamePlayIntentInPeopleList.ctx,e)},p.clickBtn=function(e){var t=p.friend.presence.rootPlaceId,r=p.library.placesDict[t],n=d.playButtons,a={rootPlaceId:t},i=u.eventStreamParams;switch(r.buttonLayout.type){case n.join.type:var s=p.friend.presence.gameId,o=p.friend.id,l=m.buildPlayGameProperties(t,p.friend.presence.placeId,s,o);a.gameInstanceId=s,a.friendId=p.friend.id,a.position=p.$index;var c={eventName:i.joinGameInPeopleList.name,ctx:i.joinGameInPeopleList.ctx,properties:a,gamePlayIntentEventCtx:u.eventStreamParams.gamePlayIntentInPeopleList.ctx};m.launchGame(l,c);break;case n.details.type:a.fromWhere=e,p.sendEventStream(i.goToGameDetailInPeopleList,a),f.location.href=p.friend.presence.placeUrl}},p.goToGameDetails=function(e){var t={rootPlaceId:p.friend.presence.rootPlaceId,fromWhere:e};p.sendEventStream(u.eventStreamParams.goToGameDetailInPeopleList,t),f.location.href=p.friend.presence.placeUrl},p.goToChat=function(){var e=p.friend.id;p.sendEventStream(u.eventStreamParams.goToChatInPeopleList);var t=r.buildPermissionVerifier({});r.startChat(e,t)},p.goToProfilePage=function(){p.sendEventStream(u.eventStreamParams.goToGameDetailInPeopleList),f.location.href=p.friend.profileUrl},p.init=function(){p.sendEventStream(u.eventStreamParams.openPeopleList)},p.init()}a.$inject=["$scope","$log","resources","layoutService","chatDispatchService","$window","gamesService","eventStreamService","playGameService"],n.a.controller("peopleInfoCardController",a),t.default=a},function(e,t,r){"use strict";r.r(t);var n=r(3),c=r.n(n),p=r(0),a=r(5),u=r(13);function i(o,e,r,n,a,t,i,s){function l(){var e=Object(u.a)();return null===e&&p.CurrentUser&&(e=p.CurrentUser.userId),e}o.setPlaceDetails=function(e){t.multiGetPlaceDetails(e).then(function(e){c.a.forEach(e,function(e,t){if(e)switch((o.library.placesDict[t]=e).reasonProhibited){case i.reasonProhibitedMessage.None:o.library.placesDict[t].buttonLayout=c.a.copy(a.playButtons.join);break;case i.reasonProhibitedMessage.PurchaseRequired:o.library.placesDict[t].requiredPurchase=!0;default:o.library.placesDict[t].buttonLayout=c.a.copy(a.playButtons.details)}})})},o.updatePresenceData=function(e){var t=a.presenceTypes;switch(e.userPresenceType){case t.online.status:e.className=a.presenceTypes.online.className;break;case t.ingame.status:e.className=a.presenceTypes.ingame.className,e.rootPlaceId&&(e.placeUrl=a.getGameDetailsPageUrl(e.rootPlaceId));break;case t.instudio.status:e.className=a.presenceTypes.instudio.className}o.library.friendsDict[e.userId]||(o.library.friendsDict[e.userId]={}),o.library.friendsDict[e.userId].presence=e},o.buildFriendsInfo=function(e,t){t.shouldGetPresenceData?r.getPresences(e).then(function(e){var r=[];c.a.forEach(e,function(e){var t=e.rootPlaceId;t&&!o.library.placesDict[t]&&r.push(t),o.updatePresenceData(e)}),n.sortFriendsByPresenceType(o.library),0<r.length&&o.setPlaceDetails(r),o.layout.isAllFriendsDataLoaded=!0}):(e.sort(function(e,t){var r=o.library.friendsDict[e],n=o.library.friendsDict[t];return r.name.toLowerCase()>n.name.toLowerCase()?1:-1}),o.library.friendIds=e,o.layout.isAllFriendsDataLoaded=!0)},o.buildFriendsList=function(e){r.getFriendsList(e).then(function(e){var t=e.data||e,r=[];c.a.forEach(t,function(e){var t=e.id;r.indexOf(t)<0&&r.push(t),e.profileUrl=a.getProfilePageUrl(t),e.nameToDisplay=p.DisplayNames.Enabled()?e.displayName:e.name,o.library.friendsDict[t]=e}),o.buildFriendsInfo(r,{shouldGetPresenceData:o.library.isForCurrentUsersFriends}),o.library.numOfFriends=t.length})},o.setup=function(){o.library={friendsDict:{},friendIds:[],isForCurrentUsersFriends:p.CurrentUser&&l()===p.CurrentUser.userId,placesDict:{},numOfFriends:null},o.layout=a},o.buildFriendsListFromSharedService=function(e){o.$evalAsync(function(){if(null==e?void 0:e.length){var a=[],i=[],s=0;c.a.forEach(e,function(e){var t=e,r=t.id;o.library.friendsDict[r]=e,a.push(r),t.nameToDisplay=p.DisplayNames.Enabled()?e.displayName:e.name;var n=e.presence.rootPlaceId;n&&!o.library.placesDict[n]&&i.push(n),o.updatePresenceData(e.presence),s+=1}),o.library.numOfFriends=s,n.sortFriendsByPresenceType(o.library),0<i.length&&o.setPlaceDetails(i)}o.layout.isAllFriendsDataLoaded=!0})},o.init=function(){o.setup();var e=l();p.CurrentUser&&e===p.CurrentUser.userId?s.getFriendsPresence().then(function(e){o.buildFriendsListFromSharedService(e)},function(e){console.debug(e)}):o.buildFriendsList(e)},o.init()}i.$inject=["$scope","$log","friendsService","utilityService","layoutService","gamesService","resources","usersPresenceService"],a.a.controller("peopleListContainerController",i),t.default=i},function(e,t,r){var n={"./friendsService.js":51,"./gamesService.js":52,"./layoutService.js":53,"./utilityService.js":54};function a(e){var t=i(e);return r(t)}function i(e){if(r.o(n,e))return n[e];var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return Object.keys(n)},a.resolve=i,(e.exports=a).id=50},function(e,t,r){"use strict";r.r(t);var n=r(5);function a(l,r,c,n){var a=r.apiSets;return{getFriendsList:function(e){var t=a.getFriendsListUrl.url;return a.getFriendsListUrl.url=n("formatString")(t,{userId:e}),c.httpGet(a.getFriendsListUrl)},buildBatchPromises:function(e,t,r,n){for(var a=[],i=0,s=e.slice(i,t);0<s.length;){var o={userIds:s};n?a.push(c.httpPost(r,o)):a.push(c.httpGet(r,o)),i++,s=e.slice(i*t,i*t+t)}return l.all(a)},getPresences:function(e){var t=r.apiParams.presenceMultiGetLimit;return this.buildBatchPromises(e,t,a.getPresences,!0).then(function(e){if(e&&0<e.length){var r=[];return angular.forEach(e,function(e){var t=e.userPresences;r=r.concat(t)}),r}return null})}}}a.$inject=["$q","resources","httpService","$filter"],n.a.factory("friendsService",a),t.default=a},function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(5);function i(e,t,r){var n=t.apiSets;return{joinGame:function(e,t){a.GameLauncher.joinGameInstance(e,t,!0,!0)},multiGetPlaceDetails:function(e){var t={placeIds:e};return r.httpGet(n.multiGetPlaceDetails,t).then(function(e){var t=[],r={};return angular.forEach(e,function(e){e&&e.imageToken&&t.push(e.imageToken),r[e.placeId]=e}),r})}}}i.$inject=["$q","resources","httpService"],n.a.factory("gamesService",i),t.default=i},function(e,t,r){"use strict";r.r(t);var n=r(5),i=r(13);function a(e,r,n,t){var a=e;return{sectionTitle:a.get("Heading.Friends"),seeAllBtnText:a.get("Heading.SeeAll"),maxNumberOfFriendsDisplayed:9,isAllFriendsDataLoaded:!1,isAvatarDataLoaded:!1,presenceTypes:{offline:{status:0,className:""},online:{status:1,className:"icon-online"},ingame:{status:2,className:"icon-game"},instudio:{status:3,className:"icon-studio"}},getFriendsPageUrl:function(){var e=Object(i.a)();return null!==e?r.getAbsoluteUrl("/users/".concat(e,"/friends")):r.getAbsoluteUrl("/users/friends")},getGameDetailsPageUrl:function(e){var t=n("formatString")("/games/{placeId}/gamename",{placeId:e});return r.getAbsoluteUrl(t)},getProfilePageUrl:function(e){var t=n("formatString")("/users/{userId}/profile",{userId:e});return r.getAbsoluteUrl(t)},playButtons:{join:{type:"join",text:a.get("Action.Join"),className:"btn-primary-sm",isPlayable:!0},buy:{type:"buy",text:a.get("Action.Buy"),className:"btn-primary-sm",isPlayable:!1},details:{type:"details",text:a.get("Action.ViewDetails"),className:"btn-control-sm",isPlayable:!1}},interactionLabels:{chat:function(e){return a.get("Label.Chat",{username:e})},viewProfile:a.get("Label.ViewProfile")},thumbnailTypes:t.thumbnailTypes}}a.$inject=["languageResource","urlService","$filter","thumbnailConstants"],n.a.factory("layoutService",a),t.default=a},function(e,t,r){"use strict";r.r(t);var n=r(5);function a(o,l,e){return{sortFriendsByOnlineOffline:function(t){var e=o("orderBy"),r=[],n=[];angular.forEach(t.friendsDict,function(e){e.presence&&0<e.presence.userPresenceType?r.push(e):n.push(e)}),r=e(r,"+name"),n=e(n,"+name"),(r=r.concat(n)).forEach(function(e){t.friendIds.push(e.id)})},sortFriendsByPresenceType:function(t){var e=o("orderBy"),r=[],n=[],a=[],i=[],s=l.presenceTypes;angular.forEach(t.friendsDict,function(e){if(!e.presence)return!1;switch(e.presence.userPresenceType){case s.online.status:r.push(e);break;case s.offline.status:n.push(e);break;case s.ingame.status:a.push(e);break;case s.instudio.status:i.push(e)}}),r=e(r,"+name"),n=e(n,"+name"),a=e(a,"+name"),i=e(i,"+name"),(a=(a=(a=a.concat(r)).concat(i)).concat(n)).forEach(function(e){t.friendIds.indexOf(e.id)<0&&t.friendIds.push(e.id)})}}}a.$inject=["$filter","layoutService","$log"],n.a.factory("utilityService",a),t.default=a},function(e,t,r){var n={"./directives/templates/people.html":56,"./directives/templates/peopleInfoCard.html":57,"./directives/templates/peopleList.html":58,"./directives/templates/peopleListContainer.html":59};function a(e){var t=i(e);return r(t)}function i(e){if(r.o(n,e))return n[e];var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return Object.keys(n)},a.resolve=i,(e.exports=a).id=55},function(e,t){e.exports='<div ng-controller="peopleController"> <div class="avatar-container"> <a href="{{friend.profileUrl}}" class="text-link friend-link" ng-click="clickAvatar(friend, $index)" popover-trigger=" \'none\' " popover-class="people-info-card-container {{peopleInfoCardContainerClass}} people-info-{{friend.id}}" popover-placement="{{peopleInfoCardPlacement}}" popover-append-to-body="true" popover-is-open="hoverPopoverParams.isOpen" hover-popover-params="hoverPopoverParams" hover-popover uib-popover-template="\'{{peopleInfoCardTemplateUrl}}\'"> <div class="avatar avatar-card-fullbody"> <span class="avatar-card-link friend-avatar" ng-class="{\'icon-placeholder-avatar-headshot\': !friend.avatar.imageUrl}"> <thumbnail-2d class="avatar-card-image" thumbnail-type="layout.thumbnailTypes.avatarHeadshot" thumbnail-target-id="friend.id"></thumbnail-2d> </span> </div> <span class="text-overflow friend-name font-caption-header" ng-bind="friend.nameToDisplay" title="{{friend.nameToDisplay}}"></span> <div class="text-overflow xsmall text-label place-name" ng-if="friend.presence.placeUrl" ng-bind="library.placesDict[friend.presence.rootPlaceId].name"></div> </a> <a class="friend-status place-link" ng-href="{{friend.presence.placeUrl}}" ng-if="friend.presence.placeUrl" ng-click="clickPlaceLink(friend, $index)"> <span class="avatar-status friend-status {{friend.presence.className}}" title="{{friend.presence.lastLocation}}"></span> </a> <span ng-if="!friend.presence.placeUrl" class="avatar-status friend-status {{friend.presence.className}}" title="{{friend.presence.lastLocation}}"></span> </div> </div>'},function(e,t){e.exports='<div ng-controller="peopleInfoCardController" ng-class="{\'card-with-game\': friend.presence.placeUrl}"> <div class="border-bottom place-container" ng-show="friend.presence.placeUrl"> <span ng-click="goToGameDetails(\'icon\')"> <thumbnail-2d class="cursor-pointer place-icon" thumbnail-type="layout.thumbnailTypes.gameIcon" thumbnail-target-id="library.placesDict[friend.presence.rootPlaceId].universeId"></thumbnail-2d> </span> <div class="place-info-container"> <div class="place-info"> <span class="text-subject cursor-pointer place-title" ng-bind="library.placesDict[friend.presence.rootPlaceId].name" ng-click="goToGameDetails(\'link\')"></span> <div class="icon-text-wrapper" ng-show="library.placesDict[friend.presence.rootPlaceId].requiredPurchase"> <span class="icon-robux"></span> <span class="text-robux" ng-bind="library.placesDict[friend.presence.rootPlaceId].price"></span> </div> </div> <div class="place-btn-container"> <button class="btn-full-width place-btn {{library.placesDict[friend.presence.rootPlaceId].buttonLayout.className}}" ng-click="clickBtn(\'btn\')"> {{library.placesDict[friend.presence.rootPlaceId].buttonLayout.text}} </button> </div> </div> </div> <ul class="dropdown-menu interaction-container"> <li class="interaction-item" ng-click="goToChat()"> <span class="icon icon-chat-gray"></span> <span class="text-overflow border-bottom label" ng-bind="layout.interactionLabels.chat(friend.nameToDisplay)" title="{{layout.interactionLabels.chat(friend.nameToDisplay)}}"></span> </li> <li class="interaction-item" ng-click="goToProfilePage()"> <span class="icon icon-viewdetails"></span> <span class="label" ng-bind="layout.interactionLabels.viewProfile"></span> </li> </ul> </div>'},function(e,t){e.exports='<ul class="hlist" ng-controller="friendsListController"> <li id="people-{{friend.id}}" class="list-item friend" ng-repeat="friend in library.friendsDict | orderList: library.friendIds | limitTo: layout.maxNumberOfFriendsDisplayed"> <div people></div> </li> </ul> '},function(e,t){e.exports='<div ng-controller="peopleListContainerController"> <div class="col-xs-12 people-list-container" ng-show="layout.isAllFriendsDataLoaded && library.numOfFriends > 0"> <div class="section home-friends"> <div class="container-header people-list-header"> <h3> {{layout.sectionTitle}}<span ng-show="library.numOfFriends !== null" class="friends-count">({{library.numOfFriends}})</span> </h3> <a href="{{layout.getFriendsPageUrl()}}" class="btn-secondary-xs btn-more see-all-link-icon">{{layout.seeAllBtnText}}</a> </div> <div class="section-content remove-panel people-list"> <div people-list ng-class="{\'invisible\': !layout.isAllFriendsDataLoaded}"></div> <span class="spinner spinner-default" ng-show="!layout.isAllFriendsDataLoaded"></span> </div> </div> </div> <div class="col-xs-12 people-list-container" ng-hide="layout.isAllFriendsDataLoaded"> <div class="section home-friends"> <div class="container-header people-list-header"> <h3>{{layout.sectionTitle}}</h3> </div> <div class="section-content remove-panel people-list"> <span class="spinner spinner-default"></span> </div> </div> </div> </div> '}]);
//# sourceMappingURL=/rbxcdn/js/74744d61318d64bbd18a-peopleList.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("PeopleList");