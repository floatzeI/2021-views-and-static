!function(t){var o={};function n(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=o,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(r,e){if(1&e&&(r=n(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)n.d(t,o,function(e){return r[e]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=220)}({0:function(e,r){e.exports=Roblox},220:function(e,r,t){"use strict";t.r(r);var o=t(4),n=t.n(o),a=t(3),s=(t(221),t(8));Object(a.importFilesUnderPath)(t(222)),Object(a.importFilesUnderPath)(t(225)),Object(a.importFilesUnderPath)(t(229)),Object(a.importFilesUnderPath)(t(233));var u=t(238);Object(a.templateCacheGenerator)(n.a,"groupsTemplates",u);r.default=s.a},221:function(e,r,t){},222:function(e,r,t){var o={"./groupCardComponent.js":223,"./searchDropdownComponent.js":224};function n(e){var r=a(e);return t(r)}function a(e){var r=o[e];if(r+1)return r;var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return Object.keys(o)},n.resolve=a,(e.exports=n).id=222},223:function(e,r,t){"use strict";t.r(r);var o={templateUrl:"group-card",bindings:{group:"<"},controller:"groupCardController"};t(8).a.component("groupCard",o),r.default=o},224:function(e,r,t){"use strict";t.r(r);var o={templateUrl:"search-dropdown",bindings:{targetType:"@",select:"<"},controller:"searchDropdownController"};t(8).a.component("searchDropdown",o),r.default=o},225:function(e,r,t){var o={"./groupResources.js":226,"./groupsConstants.js":227,"./searchDropdownConstants.js":228};function n(e){var r=a(e);return t(r)}function a(e){var r=o[e];if(r+1)return r;var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return Object.keys(o)},n.resolve=a,(e.exports=n).id=225},226:function(e,r,t){"use strict";t.r(r);var o={templates:{groupsListBaseTemplate:"groups-list-base",groupsListTemplate:"groups-list",groupAboutTemplate:"group-about",groupBaseTemplate:"group-base",groupWallTemplate:"group-wall",groupCommentsTemplate:"group-comments",groupMembersListTemplate:"group-members-list",groupGamesTemplate:"group-games",groupStoreTemplate:"group-store",groupStoreItemTemplate:"group-store-item",GroupResultsBaseTemplate:"group-results-base",groupCatalogItemTemplate:"group-catalog-item",groupSearchBarTemplate:"group-search-bar"},modals:{openedClass:"modal-open-noscroll",exileUser:{templateUrl:"exile-user-modal",controller:"exileUserController"},leaveGroup:{templateUrl:"leave-group-modal",controller:"leaveGroupController"},reportAbuse:{templateUrl:"report-abuse-modal",controller:"reportAbuseController"}},groupsListSelector:"#groups-list"};t(8).a.constant("groupResources",o),r.default=o},227:function(e,r,t){"use strict";t.r(r);var o=t(0),n=t(8),a={bannerExpiryInMilliseconds:5e3,wallReloadDelay:1e3,thumbnailSizes:{small:"150x150",large:"420x420"},relationshipTypes:{allies:"Allies",enemies:"Enemies"},groupIconFileTypes:[".jpg",".png",".jpeg"],absoluteUrls:{createGroup:o.Endpoints.getAbsoluteUrl("/groups/create")},urls:{getGroup:"".concat(o.EnvironmentUrls.groupsApi,"/v1/groups/{id}"),getGroupMetadata:"".concat(o.EnvironmentUrls.groupsApi,"/v1/groups/metadata"),getGroupConfigurationMetadata:"".concat(o.EnvironmentUrls.groupsApi,"/v1/groups/configuration/metadata"),updateGroupSettings:"".concat(o.EnvironmentUrls.groupsApi,"/v1/groups/{id}/settings"),searchGroups:"".concat(o.EnvironmentUrls.groupsApi,"/v1/groups/search"),deleteWallPostsByUser:"".concat(o.EnvironmentUrls.groupsApi,"/v1/groups/{groupId}/wall/users/{userId}/posts"),getGroupRelationships:"".concat(o.EnvironmentUrls.groupsApi,"/v1/groups/{groupId}/relationships/{groupRelationshipType}"),groupLookup:"".concat(o.EnvironmentUrls.groupsApi,"/v1/groups/search/lookup"),getGroupMembership:"".concat(o.EnvironmentUrls.groupsApi,"/v1/groups/{id}/membership"),updatePrimaryGroup:"".concat(o.EnvironmentUrls.groupsApi,"/v1/user/groups/primary"),claimOwnership:"".concat(o.EnvironmentUrls.groupsApi,"/v1/groups/{groupId}/claim-ownership"),deleteGroupJoinRequest:"".concat(o.EnvironmentUrls.groupsApi,"/v1/groups/{groupId}/join-requests/users/{userId}"),joinGroup:"".concat(o.EnvironmentUrls.groupsApi,"/v1/groups/{id}/users"),updateUserRole:"".concat(o.EnvironmentUrls.groupsApi,"/v1/groups/{groupId}/users/{userId}"),getGroupRoles:"".concat(o.EnvironmentUrls.groupsApi,"/v1/groups/{id}/roles"),getGroupRolePermissions:"".concat(o.EnvironmentUrls.groupsApi,"/v1/groups/{groupId}/roles/{roleSetId}/permissions"),getGroupRoleMembers:"".concat(o.EnvironmentUrls.groupsApi,"/v1/groups/{groupId}/roles/{roleId}/users"),getGroupRolesForUser:"".concat(o.EnvironmentUrls.groupsApi,"/v2/users/{userId}/groups/roles"),usernames:"".concat(o.EnvironmentUrls.usersApi,"/v1/usernames/users"),usersSearch:"".concat(o.EnvironmentUrls.usersApi,"/v1/users/search"),getGroupDetailsPolicy:"".concat(o.EnvironmentUrls.universalAppConfigurationApi,"/v1/behaviors/group-details-ui/content"),getConfigureGroupPolicy:"".concat(o.EnvironmentUrls.universalAppConfigurationApi,"/v1/behaviors/configure-group-ui/content")},errorCodes:{internal:{unknown:0,captcha:1,invalidMembership:10,tooManyGroups:11,insufficientRobux:12,nameInvalid:13,nameModerated:14,groupIconInvalid:15,groupIconMissing:16,tooManyRequests:17,descriptionTooLong:18,nameTooLong:19,duplicateName:20,featureDisabled:21,groupIconTooLarge:22},sendGroupWallPost:{7:1},membership:{captcha:5,operationUnavailable:18},getGroupMembership:{3:1}},statusCodes:{payloadTooLarge:413},translations:{buildGroupRolesListError:"Message.BuildGroupRolesListError",loadGroupError:"Message.LoadGroupError",loadGroupMetadataError:"Message.LoadGroupMetadataError",loadGroupsListError:"Message.LoadGroupMembershipsError",loadGroupConfigMetadataError:"Message.ConfigMetadataLoadFail",loadGroupMembershipError:"Message.LoadUserGroupMembershipError",defaultError:"Message.DefaultError",deleteWallPostsByUserError:"Message.DeleteWallPostsByUserError",groupMembershipsUnavailableError:"Message.GroupMembershipsUnavailableError"}};n.a.constant("groupsConstants",a),r.default=a},228:function(e,r,t){"use strict";t.r(r);var o={searchSettings:{maxResultsShown:5,minTermLength:2,maxUserTermLength:20,maxGroupTermLength:50,maxResults:10,timeout:300},targetTypes:{user:"user",group:"group"}};t(8).a.constant("searchDropdownConstants",o),r.default=o},229:function(e,r,t){var o={"./exileUserController.js":230,"./groupCardController.js":231,"./searchDropdownController.js":232};function n(e){var r=a(e);return t(r)}function a(e){var r=o[e];if(r+1)return r;var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return Object.keys(o)},n.resolve=a,(e.exports=n).id=229},230:function(e,r,t){"use strict";t.r(r);var o=t(8);function n(e,r,t,o,n,a,s,u){e.params=o,e.exileUser=function(){e.layout.deleteWallPosts&&t.deleteWallPostsByUser(e.params.groupId,e.params.userId).then(function(){setTimeout(function(){o.refreshGroupWall()},a.wallReloadDelay)},function(e){u.warning(s.get(a.translations.deleteWallPostsByUserError)),n.debug("--deleteWallPostsByUser-error---")}),t.exileUser(e.params.groupId,e.params.userId).then(function(){o.reloadCurrentPage()},function(e){e&&e.errors&&e.errors[0]&&e.errors[0].code===a.errorCodes.membership.operationUnavailable&&u.warning(s.get(a.translations.groupMembershipsUnavailableError))}),r.close()},e.close=function(){r.dismiss()},e.init=function(){e.layout={deleteWallPosts:!1}},e.init()}n.$inject=["$scope","$uibModalInstance","groupsService","modalData","$log","groupsConstants","languageResource","systemFeedbackService"],o.a.controller("exileUserController",n),r.default=n},231:function(e,r,t){"use strict";t.r(r);var o=t(8);function n(e,r){var t=this;t.$onInit=function(){t.thumbnailTypes=r.thumbnailTypes,t.url=e("seoUrl")("groups",t.group.id,t.group.name)}}n.$inject=["$filter","thumbnailConstants"],o.a.controller("groupCardController",n),r.default=n},232:function(e,r,t){"use strict";t.r(r);var o=t(8);function n(t,r,o,n,a){function s(e){return e.key===o.arrowUp||e.key===o.arrowDown||e.key===o.tab}var u=this;u.onKeyDown=function(e){if(s(e)){e.stopPropagation(),e.preventDefault();var r=u.layout.cursorIndex;e.key===o.arrowUp?r-=1:r+=1;var t=u.data.searchResults.length;(r%=t)<0&&(r=t+r),u.layout.cursorIndex=r}},u.searchTargetByName=function(e){u.layout.isOpen=!0,u.layout.isSearchRequestSending=!0,u.layout.errorMessage=void 0,r.cancel(u.timeoutOnSearch),u.timeoutOnSearch=r(function(){t.debug(" --- searchTerm after timeout "+e),a.searchTargetByName(e,u.targetType).then(function(e){u.data.searchResults=e},function(e){u.layout.isOpen=!1,u.data.searchResults=[]}).finally(function(){!function(e){r.cancel(u.timeoutOnSearh),u.layout.isSearchRequestSending=!1,u.layout.previousSearchTerm!==e&&u.searchTargetByName(u.layout.previousSearchTerm)}(e)})},n.searchSettings.timeout)},u.search=function(e){if(s(e))return e.stopPropagation(),void e.preventDefault();if(e.key!==o.enter){if(t.debug(" --- search ----- "),!u.data.searchTerm)return u.layout.isOpen=!1,void(u.data.searchResults=[]);var r=u.data.searchTerm.trim();0<r.length&&(t.debug(" --- search ----- searchTerm",r),u.timeoutOnSearch&&(u.layout.previousSearchTerm=r),u.searchTargetByName(r))}else{if(e.stopPropagation(),e.preventDefault(),u.layout.isSearchRequestSending)return;0<u.data.searchResults.length&&(u.selectOption(u.data.searchResults[u.layout.cursorIndex]),u.layout.focusMe=!1,e.target.blur())}},u.selectOption=function(e){u.layout.isOpen=!1,u.layout.focusMe=!1,u.select(e).then(function(){},function(e){u.layout.errorMessage=e})};u.$onInit=function(){u.thumbnailType=a.getThumbnailTypeForTargetType(u.targetType),u.searchTargetTypes=n.targetTypes,u.data={searchResults:[]},u.layout={focusMe:!0,cursorIndex:0},u.layout.placeholder=a.getPlaceholderForTargetType(u.targetType)}}n.$inject=["$log","$timeout","keys","searchDropdownConstants","searchDropdownService"],o.a.controller("searchDropdownController",n),r.default=n},233:function(e,r,t){var o={"./groupMembershipService.js":234,"./groupUtilityService.js":235,"./groupsService.js":236,"./searchDropdownService.js":237};function n(e){var r=a(e);return t(r)}function a(e){var r=o[e];if(r+1)return r;var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return Object.keys(o)},n.resolve=a,(e.exports=n).id=233},234:function(e,r,t){"use strict";t.r(r);var o=t(8);function n(e,s,u,l){var i={};return{getGroupMembership:function(o){return e(function(r,e){if(!i[o]){var t={url:l("formatString")(u.urls.getGroupMembership,{id:o})};return s.httpGet(t).then(function(e){i[o]=e,r(e)},e)}r(i[o])})},joinGroup:function(n,a){return e(function(r,e){var t={url:l("formatString")(u.urls.joinGroup,{id:n})},o=a||{};return s.httpPost(t,o).then(function(e){i={},r(e)},e)})},claimOwnership:function(o){return e(function(r,e){var t={url:l("formatString")(u.urls.claimOwnership,{groupId:o})};return s.httpPost(t,{}).then(function(e){i={},r(e)},e)})},makePrimaryGroup:function(n){return e(function(r,e){var t={groupId:n},o={url:u.urls.updatePrimaryGroup};return s.httpPost(o,t).then(function(e){i={},r(e)},e)})},removePrimaryGroup:function(){return e(function(r,e){var t={url:u.urls.updatePrimaryGroup};return s.httpDelete(t,{}).then(function(e){i={},r(e)},e)})},leaveGroup:function(o,n){return e(function(r,e){var t={url:l("formatString")(u.urls.updateUserRole,{groupId:o,userId:n})};return s.httpDelete(t,{}).then(function(e){i={},r(e)},e)})},cancelGroupJoinRequest:function(o,n){return e(function(r,e){var t={url:l("formatString")(u.urls.deleteGroupJoinRequest,{groupId:o,userId:n})};return s.httpDelete(t,{}).then(function(e){i={},r(e)},e)})}}}n.$inject=["$q","httpService","groupsConstants","$filter"],o.a.factory("groupMembershipService",n),r.default=n},235:function(e,r,t){"use strict";t.r(r);var o=t(8);function n(t,o){return{parseGroupId:function(e){var r=/\/groups\/(\d+)\//g.exec(e);return r&&1<r.length?Number(r[1]):null},buildGameReferralUrl:function(e){var r=o.getGameDetailReferralUrls();return t("formatString")(r.groupDetail,{placeId:e})},buildScrollbar:function(e){angular.element(document.querySelector(e)).mCustomScrollbar({autoExpandScrollbar:!1,scrollInertia:500,contentTouchScroll:1,mouseWheel:{preventDefault:!0,scrollAmount:208,deltaFactor:208}})}}}n.$inject=["$filter","urlService"],o.a.factory("groupUtilityService",n),r.default=n},236:function(e,r,t){"use strict";t.r(r);var o=t(8);function n(r,s,u,l){var o;return{getGroup:function(e){var r={url:l("formatString")(u.urls.getGroup,{id:e})};return s.httpGet(r,{})},getGroupMetadata:function(){var e={url:l("formatString")(u.urls.getGroupMetadata)};return s.httpGet(e)},getGroupConfigurationMetadata:function(){return r(function(r,e){if(o)r(o);else{var t={url:l("formatString")(u.urls.getGroupConfigurationMetadata)};s.httpGet(t).then(function(e){r(o=e)},e)}})},getGroupRoles:function(e){var r={url:l("formatString")(u.urls.getGroupRoles,{id:e}),retryable:!1};return s.httpGet(r)},getGroupRolePermissions:function(e,r){var t={url:l("formatString")(u.urls.getGroupRolePermissions,{groupId:e,roleSetId:r})};return s.httpGet(t,{})},exileUser:function(e,r){var t={url:l("formatString")(u.urls.updateUserRole,{groupId:e,userId:r})};return s.httpDelete(t)},deleteWallPostsByUser:function(e,r){var t={url:l("formatString")(u.urls.deleteWallPostsByUser,{groupId:e,userId:r})};return s.httpDelete(t)},getGroupSettings:function(e){var r={url:l("formatString")(u.urls.updateGroupSettings,{id:e})};return s.httpGet(r,{})},updateGroupSettings:function(e,r){var t={url:l("formatString")(u.urls.updateGroupSettings,{id:e})};return s.httpPatch(t,r)},getUserIdsFromUsernames:function(n,e){var a=1<arguments.length&&void 0!==e&&e;return r(function(r,t){var e={url:l("formatString")(u.urls.usernames)},o={usernames:n,excludeBannedUsers:a};s.httpPost(e,o).then(function(e){r(e.data)},function(e){t(e)})})},getUserRoleInGroup:function(o,n){return r(function(t,e){var r={url:l("formatString")(u.urls.getGroupRolesForUser,{userId:o})};s.httpGet(r).then(function(e){if(e.data){var r=e.data.filter(function(e){return e.group.id===n});r&&0<r.length?t(r[0].role):t(null)}},function(){e("Could not fetch user groups. Please try again.")})})},getGroupDetailRules:function(){var e={url:l("formatString")(u.urls.getGroupDetailsPolicy)};return s.httpGet(e)},getConfigureGroupRules:function(){var e={url:l("formatString")(u.urls.getConfigureGroupPolicy)};return s.httpGet(e)}}}n.$inject=["$q","httpService","groupsConstants","$filter"],o.a.factory("groupsService",n),r.default=n},237:function(e,r,t){"use strict";t.r(r);var o=t(8);function n(e,s,t,u,l,i,c,r,o){function n(a){return e(function(r,t){var e=i.searchSettings,o=e.minTermLength,n=e.maxGroupTermLength;!a||a.length<=o||a.length>n?t():function(e){var r={url:s("formatString")(l.urls.groupLookup)},t={groupName:e};return u.httpGet(r,t)}(a).then(function(e){e.data&&0!==e.data.length?r(e.data.slice(0,i.searchSettings.maxResultsShown)):t()},function(e){t()})})}function a(a){return e(function(r,t){var e=i.searchSettings,o=e.minTermLength,n=e.maxUserTermLength;!a||a.length<=o||a.length>n?t():function(e){var r={url:s("formatString")(l.urls.usersSearch)},t={keyword:e,limit:i.searchSettings.maxResults};return u.httpGet(r,t)}(a).then(function(e){0!==e.length?r(e.data.slice(0,i.searchSettings.maxResultsShown)):t()},function(e){c.getUserIdsFromUsernames([a],!0).then(function(e){0!==e.length?r(e):t()},function(e){t()})})})}return{searchTargetByName:function(e,r){switch(r){case i.targetTypes.user:return a(e);case i.targetTypes.group:return n(e)}t.debug("Unable to search for target type "+r)},getThumbnailTypeForTargetType:function(e){switch(e){case i.targetTypes.user:return r.thumbnailTypes.avatarHeadshot;case i.targetTypes.group:return r.thumbnailTypes.groupIcon}t.debug("Unable to get thumbnail type for target type "+e)},getPlaceholderForTargetType:function(e){switch(e){case i.targetTypes.user:return o.get("Label.Username");case i.targetTypes.group:return o.get("Label.GroupName")}t.debug("Unable to get placholder for target type "+e)}}}n.$inject=["$q","$filter","$log","httpService","groupsConstants","searchDropdownConstants","groupsService","thumbnailConstants","languageResource"],o.a.factory("searchDropdownService",n),r.default=n},238:function(e,r,t){var o={"./components/templates/exileUserModal.html":239,"./components/templates/groupCard.html":240,"./components/templates/searchDropdown.html":241};function n(e){var r=a(e);return t(r)}function a(e){var r=o[e];if(r+1)return r;var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return Object.keys(o)},n.resolve=a,(e.exports=n).id=238},239:function(e,r){e.exports='<div class="modal-header"> <button type="button" class="close" ng-click="close()"> <span aria-hidden="true"> <span class="icon-close"></span> </span> <span class="sr-only" ng-bind="\'Action.Close\' | translate"></span> </button> <h4 ng-bind="\'Heading.ExileUserWarning\' | translate"></h4> </div> <div class="modal-body"> <span class="text-description" ng-bind="\'Description.ExileUserWarning\' | translate"></span> </div> <div class="modal-buttons"> <button class="modal-button btn-secondary-md" ng-click="exileUser()" ng-bind="\'Action.Exile\' | translate"></button> <button class="modal-button btn-control-md" ng-click="close()" ng-bind="\'Action.Cancel\' | translate"></button> </div> <div class="modal-footer" ng-if="params.showDeletePostsCheckbox"> <div class="checkbox"> <input id="deleteWallPostsByUserCheckbox" type="checkbox" ng-model="layout.deleteWallPosts"> <label for="deleteWallPostsByUserCheckbox" ng-bind="\'Label.DeleteAllPostsByUser\' | translate"></label> </div> </div> '},240:function(e,r){e.exports='<a ng-href="{{ $ctrl.url }}" target="_self" class="card-item game-card-container"> <thumbnail-2d thumbnail-type="$ctrl.thumbnailTypes.groupIcon" thumbnail-target-id="$ctrl.group.id" class="game-card-thumb-container"></thumbnail-2d> <div class="text-overflow game-card-name" title="{{ $ctrl.group.name }}" ng-bind="$ctrl.group.name"> </div> <div class="text-overflow game-card-name-secondary" ng-bind="\'Label.Members\' | translate:{ memberCount: $ctrl.group.memberCount}"> </div> </a>'},241:function(e,r){e.exports='<div class="form-has-feedback search-dropdown" uib-dropdown="" is-open="$ctrl.layout.isOpen" keyboard-nav ng-class="{\'form-has-error\': $ctrl.layout.errorMessage}"> <input class="input-field form-control" uib-dropdown-toggle="" ng-model="$ctrl.data.searchTerm" focus-me="{{ $ctrl.layout.focusMe }}" placeholder="{{ $ctrl.layout.placeholder }}" ng-keyup="$ctrl.search($event)" ng-keydown="$ctrl.onKeyDown($event)"> <ul class="dropdown-menu search-results-dropdown-menu" uib-dropdown-menu role="menu"> <li ng-show="$ctrl.layout.isSearchRequestSending" class="search-result-loading"> <div class="spinner spinner-sm"></div> </li> <li ng-hide="$ctrl.layout.isSearchRequestSending" ng-repeat="searchResult in $ctrl.data.searchResults" ng-class="{\'active\': $index === $ctrl.layout.cursorIndex}" class="search-result"> <a class="search-result-format" ng-click="$ctrl.selectOption(searchResult)"> <thumbnail-2d thumbnail-type="$ctrl.thumbnailType" thumbnail-target-id="searchResult.id" class="search-result-icon"></thumbnail-2d> <div class="search-result-name text-overflow" ng-bind="searchResult.name"></div> </a> </li> </ul> <p ng-if="$ctrl.layout.errorMessage" class="form-control-label" ng-bind="$ctrl.layout.errorMessage"></p> </div>'},3:function(e,r){function a(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function s(e){return e.split("/").pop().replace(".html","")}var t={importFilesUnderPath:function(e){e.keys().forEach(e)},templateCacheGenerator:function(e,r,o,n){return e.module(r,[]).run(["$templateCache",function(t){o&&o.keys().forEach(function(e){var r=a(s(e));t.put(r,o(e))}),n&&n.keys().forEach(function(e){var r=a(s(e));t.put(r,function(e){return e.replace(/<\/?script[^>]*>/gi,"")}(n(e)))})}])}};e.exports=t},4:function(e,r){e.exports=angular},8:function(e,r,t){"use strict";var o=t(4),n=t.n(o),a=(t(0),n.a.module("groups",["robloxApp","groupsTemplates"]));r.a=a}});
//# sourceMappingURL=/rbxcdn/js/4380e6bc6d2b0ccd8689-groups.js.map

!function(o){var n={};function t(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return o[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=o,t.c=n,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)t.d(o,n,function(e){return r[e]}.bind(null,n));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=92)}({0:function(e,r){e.exports=Roblox},100:function(e,r,o){"use strict";o.r(r);var n={templateUrl:"create-group-confirmation-modal",bindings:{close:"&",dismiss:"&",resolve:"<"},controller:"createGroupConfirmationModalController"};o(9).a.component("createGroupConfirmationModal",n),r.default=n},101:function(e,r,o){"use strict";o.r(r);var n={templateUrl:"create-group-page",controller:"createGroupPageController"};o(9).a.component("createGroupPage",n),r.default=n},102:function(e,r,o){var n={"./enableFileSelectionDirective.js":103};function t(e){var r=a(e);return o(r)}function a(e){var r=n[e];if(r+1)return r;var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}t.keys=function(){return Object.keys(n)},t.resolve=a,(e.exports=t).id=102},103:function(e,r,o){"use strict";function n(){return{require:"ngModel",link:function(e,r,o,n){n.$setViewValue(r[0].files),r.on("change",function(e){n.$setViewValue(r[0].files)})}}}o.r(r),o(9).a.directive("enableFileSelection",n),r.default=n},104:function(e,r,o){var n={"./createGroupService.js":105,"./translationService.js":106};function t(e){var r=a(e);return o(r)}function a(e){var r=n[e];if(r+1)return r;var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}t.keys=function(){return Object.keys(n)},t.resolve=a,(e.exports=t).id=104},105:function(e,r,o){"use strict";o.r(r);var n=o(9);function t(r,s,i,c){var l=/^\s+$/;return{createGroup:function(e,n,t,a){return r(function(r,o){if(e&&!l.test(e)){if(t)return s.httpPost({url:c.urls.createGroup,withFile:!0},{icon:t,name:e,description:n||"",publicGroup:a}).then(function(e){r({id:e.id})},function(e){e.status===i.statusCodes.payloadTooLarge?o(i.errorCodes.internal.groupIconTooLarge):e.errors&&0<e.errors.length?o(e.errors[0]):o({code:0})});o({code:i.errorCodes.internal.groupIconMissing})}else o({code:i.errorCodes.internal.nameInvalid})})}}}t.$inject=["$q","httpService","groupsConstants","createGroupConstants"],n.a.factory("createGroupService",t),r.default=t},106:function(e,r,o){"use strict";o.r(r);var n=o(9);function t(e){var r={errorMessages:{unknown:e.get("Message.UnknownError"),invalidMembership:e.get("Message.InvalidMembership"),tooManyGroups:e.get("Message.TooManyGroups"),insufficientRobux:e.get("Message.InsufficientRobux"),nameInvalid:e.get("Message.NameInvalid"),nameModerated:e.get("Message.NameModerated"),groupIconInvalid:e.get("Message.GroupIconInvalid"),groupIconTooLarge:e.get("Message.GroupIconTooLarge"),tooManyRequests:e.get("Message.TooManyRequests"),duplicateName:e.get("Message.DuplicateName"),featureDisabled:e.get("Message.FeatureDisabled"),nameTooLong:e.get("Message.NameTooLong"),descriptionTooLong:e.get("Message.DescriptionTooLong")}};return{getTextResources:function(){return r}}}t.$inject=["languageResource"],n.a.factory("translationService",t),r.default=t},107:function(e,r,o){var n={"./components/templates/createGroupConfirmationModal.html":108,"./components/templates/createGroupPage.html":109};function t(e){var r=a(e);return o(r)}function a(e){var r=n[e];if(r+1)return r;var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}t.keys=function(){return Object.keys(n)},t.resolve=a,(e.exports=t).id=107},108:function(e,r){e.exports='<div class="modal-header"> <button type="button" class="close" ng-click="$ctrl.dismiss()"> <span aria-hidden="true"> <span class="icon-close"></span> </span> <span class="sr-only" ng-bind="\'Action.Purchase\' | translate"></span> </button> <h5 class="modal-title" ng-bind="\'Heading.GroupPurchase\' | translate"></h5> </div> <div class="modal-body"> <div class="modal-message purchase-body"> <span ng-bind-html="\'Description.PurchaseBodyAmount\' | translate: {amount: $ctrl.creationPriceHtml}"></span> </div> <div class="modal-btns"> <a id="confirm-btn" class="btn-primary-md" ng-click="$ctrl.close()" ng-bind="\'Action.Purchase\' | translate"></a> <a id="decline-btn" class="btn-control-md" ng-click="$ctrl.dismiss()" ng-bind="\'Action.Cancel\' | translate"></a> </div> </div>'},109:function(e,r){e.exports='<div class="section create-group"> <system-feedback></system-feedback> <div class="container-header"> <h1 ng-bind="\'Label.CreateGroup\' | translate"></h1> </div> <div ng-if="$ctrl.layout.pageError" class="section-content-off" ng-bind="\'Message.ConfigMetadataLoadFail\' | translate"></div> <div ng-if="!$ctrl.layout.pageError" class="section-content remove-panel form-group"> <div class="group-name-input form-has-feedback" ng-class="{ \'form-has-error\': $ctrl.errorMessages.name }"> <div class="text-label" ng-bind="\'Label.Name\' | translate"></div> <input type="text" name="groupName" class="form-control input-field group-name" ng-disabled="$ctrl.creationInProgress" ng-model="$ctrl.createGroupRequest.name" ng-change="$ctrl.nameChanged()" placeholder="{{ \'Label.CreateGroupName\' | translate }}" maxlength="{{ $ctrl.metadata.groupConfiguration.nameMaxLength }}" id="rbx-create-group-name"/> <p class="form-control-label" ng-bind="$ctrl.errorMessages.name"></p> <p ng-show="$ctrl.createGroupRequest.name" class="text-secondary" ng-bind="$ctrl.createGroupRequest.name.length | formatCharacterCount: $ctrl.metadata.groupConfiguration.nameMaxLength"> </div> <div class="group-description-input form-has-feedback" ng-class="{ \'form-has-error\': $ctrl.errorMessages.description }"> <div class="text-label" ng-bind="\'Heading.Description\' | translate"></div> <textarea name="description" class="form-control input-field group-description" ng-model="$ctrl.createGroupRequest.description" ng-disabled="$ctrl.creationInProgress" placeholder="{{ \'Label.CreateGroupDescription\' | translate }}" maxlength="{{ $ctrl.metadata.groupConfiguration.descriptionMaxLength }}" id="rbx-create-group-desc" rows="10"></textarea> <p class="form-control-label" ng-bind="$ctrl.errorMessages.description"></p> <p ng-show="$ctrl.createGroupRequest.description" class="text-secondary" ng-bind="$ctrl.createGroupRequest.description.length | formatCharacterCount: $ctrl.metadata.groupConfiguration.descriptionMaxLength"> </div> <div class="form-has-feedback" ng-class="{ \'form-has-error\': $ctrl.errorMessages.groupIcon }"> <label ng-if="$ctrl.policies.displayUploadGroupIcon" class="text-label" for="uploader" ng-bind="\'Label.CreateGroupEmblem\' | translate"></label> <div ng-if="$ctrl.policies.displayUploadGroupIcon" class="file-upload-container full-screen" ng-disabled="$ctrl.creationInProgress"> <file-upload file-upload-info="$ctrl.fileUploadInfo"></file-upload> </div> <p class="form-control-label" ng-bind="$ctrl.errorMessages.groupIcon"></p> </div> </div> <div class="section-header"> <h3 ng-bind="\'Heading.Settings\' | translate"></h3> </div> <div class="section-content"> <div class="radio"> <input type="radio" checked="" name="publicGroup" value="true" ng-disabled="$ctrl.creationInProgress" ng-model="$ctrl.createGroupRequest.isGroupPublic" id="anyone"> <label for="anyone" ng-bind="\'Label.AnyoneCanJoin\' | translate"></label> </div> <div class="rbx-divider"></div> <div class="radio"> <input type="radio" name="publicGroup" value="false" ng-disabled="$ctrl.creationInProgress" ng-model="$ctrl.createGroupRequest.isGroupPublic" id="manual"> <label for="manual" ng-bind="\'Label.ManualApproval\' | translate"></label> </div> </div> <div class="section-content remove-panel group-purchase-buttons"> <a class="btn-control-md group-cancel" target="_self" ng-href="{{ $ctrl.absoluteUrls.myGroups }}" id="rbx-cancel"> <span class="text-overflow" ng-bind="\'Action.Cancel\' | translate"></span> </a> <button type="button" class="btn-growth-md group-purchase" ng-disabled="$ctrl.isCreateGroupButtonDisabled()" ng-click="$ctrl.purchaseButtonClicked()" id="rbx-purchase"> <span class="icon-robux-white-16x16"></span> <span ng-bind="$ctrl.metadata.groupConfiguration.cost"></span> </button> </div> </div> '},3:function(e,r){function a(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function s(e){return e.split("/").pop().replace(".html","")}var o={importFilesUnderPath:function(e){e.keys().forEach(e)},templateCacheGenerator:function(e,r,n,t){return e.module(r,[]).run(["$templateCache",function(o){n&&n.keys().forEach(function(e){var r=a(s(e));o.put(r,n(e))}),t&&t.keys().forEach(function(e){var r=a(s(e));o.put(r,function(e){return e.replace(/<\/?script[^>]*>/gi,"")}(t(e)))})}])}};e.exports=o},4:function(e,r){e.exports=angular},9:function(e,r,o){"use strict";var n=o(0),t=o(4),a=o.n(t).a.module("createGroup",["createGroupTemplates","groups","modal","systemFeedback","fileUpload"]).config(["languageResourceProvider",function(e){n.Lang.GroupsResources&&e.setLanguageKeysFromFile(n.Lang.GroupsResources)}]);r.a=a},92:function(e,r,o){"use strict";o.r(r);var n=o(4),t=o.n(n),a=o(3),s=(o(93),o(9));Object(a.importFilesUnderPath)(o(94)),Object(a.importFilesUnderPath)(o(97)),Object(a.importFilesUnderPath)(o(99)),Object(a.importFilesUnderPath)(o(102)),Object(a.importFilesUnderPath)(o(104));var i=o(107),c=Object(a.templateCacheGenerator)(t.a,"createGroupTemplates",i);t.a.element(function(){t.a.bootstrap("#create-group:not([ng-modules])",[s.a.name,c.name])}),r.default=s.a},93:function(e,r,o){},94:function(e,r,o){var n={"./createGroupConfirmationModalController.js":95,"./createGroupPageController.js":96};function t(e){var r=a(e);return o(r)}function a(e){var r=n[e];if(r+1)return r;var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}t.keys=function(){return Object.keys(n)},t.resolve=a,(e.exports=t).id=94},95:function(e,r,o){"use strict";function n(){function e(){r.creationPriceHtml='<div class="icon-robux-container"><span class="icon-robux-16x16"></span><span class="text-robux">'+r.resolve.metadata.cost+"</span></div>"}var r=this;r.$onInit=e,r.$onChanges=e}o.r(r),o(9).a.controller("createGroupConfirmationModalController",n),r.default=n},96:function(e,r,o){"use strict";o.r(r);var n=o(9);function t(r,o,e,n,t,a,s,i,c,l,u){var d=this;d.purchaseButtonClicked=function(){d.creationInProgress||i.open({animation:!1,component:"createGroupConfirmationModal",resolve:{metadata:d.metadata.groupConfiguration}}).result.then(function(){d.creationInProgress||(d.creationInProgress=!0,a.createGroup(d.createGroupRequest.name,d.createGroupRequest.description,d.fileUploadInfo.file,"false"!==d.createGroupRequest.isGroupPublic).then(function(e){r.location.href=o("seoUrl")("groups",e.id,d.createGroupRequest.name)},function(e){switch(d.creationInProgress=!1,e.code){case s.errorCodes.internal.invalidMembership:c.warning(d.translationResources.errorMessages.invalidMembership);break;case s.errorCodes.internal.tooManyGroups:c.warning(d.translationResources.errorMessages.tooManyGroups);break;case s.errorCodes.internal.insufficientRobux:c.warning(d.translationResources.errorMessages.insufficientRobux);break;case s.errorCodes.internal.nameInvalid:return void(d.errorMessages.name=d.translationResources.errorMessages.nameInvalid);case s.errorCodes.internal.nameTooLong:return void(d.errorMessages.name=d.translationResources.errorMessages.nameTooLong);case s.errorCodes.internal.descriptionTooLong:return void(d.errorMessages.description=d.translationResources.errorMessages.descriptionTooLong);case s.errorCodes.internal.nameModerated:return d.createGroupRequest.name=e.fieldData,void(d.errorMessages.name=d.translationResources.errorMessages.nameModerated);case s.errorCodes.internal.groupIconMissing:case s.errorCodes.internal.groupIconInvalid:return void(d.errorMessages.groupIcon=d.translationResources.errorMessages.groupIconInvalid);case s.errorCodes.internal.groupIconTooLarge:return void(d.errorMessages.groupIcon=o("formatString")(d.translationResources.errorMessages.groupIconTooLarge,{maxSize:d.metadata.groupConfiguration.iconMaxFileSizeMb}));case s.errorCodes.internal.tooManyRequests:c.warning(d.translationResources.errorMessages.tooManyRequests);break;case s.errorCodes.internal.duplicateName:return void(d.errorMessages.name=d.translationResources.errorMessages.duplicateName);case s.errorCodes.internal.featureDisabled:c.warning(d.translationResources.errorMessages.featureDisabled);break;default:c.warning(d.translationResources.errorMessages.unknown)}}))},function(){})},d.nameChanged=function(){d.errorMessages.name=""},d.iconChanged=function(){d.errorMessages.groupIcon=""},d.loadConfigurationMetadata=function(){u.getGroupConfigurationMetadata().then(function(e){d.metadata=e,d.fileUploadInfo.maxFileSizeInMegabytes=e.groupConfiguration.iconMaxFileSizeMb,d.loadConfigureGroupPolicies()},function(){d.layout.pageError=n.get(s.translations.loadGroupConfigMetadataError),e.debug("--loadConfigurationMetadata-error---")})},d.isCreateGroupButtonDisabled=function(){return!d.createGroupRequest.name||!d.fileUploadInfo.file&&d.policies.displayUploadGroupIcon||d.creationInProgress},d.loadConfigureGroupPolicies=function(){d.metadata.isDefaultEmblemPolicyEnabled?u.getConfigureGroupRules().then(function(e){d.policies=e},function(){e.debug("--loadConfigureGroupPolicies-error---")}):Object.keys(t.policies).forEach(function(e){d.policies[e]=!0})};function p(){d.policies=t.policies,d.creationInProgress=!1,d.absoluteUrls=t.absoluteUrls,d.layout={},d.createGroupRequest={name:"",description:"",isGroupPublic:"true"},d.errorMessages={name:"",groupIcon:""},d.fileUploadInfo={allowedFileTypes:s.groupIconFileTypes},d.translationResources=l.getTextResources(),d.loadConfigurationMetadata()}d.$onInit=p,d.$onChanges=p}t.$inject=["$window","$filter","$log","languageResource","createGroupConstants","createGroupService","groupsConstants","$uibModal","systemFeedbackService","translationService","groupsService"],n.a.controller("createGroupPageController",t),r.default=t},97:function(e,r,o){var n={"./createGroupConstants.js":98};function t(e){var r=a(e);return o(r)}function a(e){var r=n[e];if(r+1)return r;var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}t.keys=function(){return Object.keys(n)},t.resolve=a,(e.exports=t).id=97},98:function(e,r,o){"use strict";o.r(r);var n=o(0),t=o(9),a={absoluteUrls:{createGroup:n.Endpoints.getAbsoluteUrl("/groups/create"),myGroups:n.Endpoints.getAbsoluteUrl("/my/groups")},urls:{createGroup:"".concat(n.EnvironmentUrls.groupsApi,"/v1/groups/create")},policies:{displayUploadGroupIcon:!1}};t.a.constant("createGroupConstants",a),r.default=a},99:function(e,r,o){var n={"./createGroupConfirmationModalComponent.js":100,"./createGroupPageComponent.js":101};function t(e){var r=a(e);return o(r)}function a(e){var r=n[e];if(r+1)return r;var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}t.keys=function(){return Object.keys(n)},t.resolve=a,(e.exports=t).id=99}});
//# sourceMappingURL=/rbxcdn/js/4380e6bc6d2b0ccd8689-createGroup.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("CreateGroup");