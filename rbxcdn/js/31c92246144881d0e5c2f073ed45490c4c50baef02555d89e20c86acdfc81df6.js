!function(t){var a={};function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(e,s,t){n.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(s,e){if(1&e&&(s=n(s)),8&e)return s;if(4&e&&"object"==typeof s&&s&&s.__esModule)return s;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:s}),2&e&&"string"!=typeof s)for(var a in s)n.d(t,a,function(e){return s[e]}.bind(null,a));return t},n.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(s,"a",s),s},n.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},n.p="",n(n.s=5)}([function(e,s){e.exports=Roblox},function(e,s,t){"use strict";var l=t(0),a=t(2),n=t.n(a).a.module("messages",["robloxApp","ui.router","thumbnails","systemFeedback"]).config(["$stateProvider","$urlRouterProvider","$locationProvider","languageResourceProvider",function(e,s,t,a){var n="message-tab",r="notification-tab",i=window.location.href;if(-1!=i.indexOf("#")&&-1==i.indexOf("#!")&&(window.location.href=i.replace("#","#!")),t.html5Mode(!1),t.hashPrefix("!"),s.otherwise("/inbox"),e.state("inbox",{url:"/inbox?page&messageIdx&conversationId",templateUrl:n,controller:"messagesContentController"}).state("sent",{url:"/sent?page&messageIdx",templateUrl:n,controller:"messagesContentController"}).state("notifications",{url:"/notifications",templateUrl:r,controller:"messagesContentController"}).state("archive",{url:"/archive?page&messageIdx",templateUrl:n,controller:"messagesContentController"}),l.TranslationResourceProvider){var o=(new l.TranslationResourceProvider).getTranslationResource("Feature.Messages");a.setTranslationResources([o])}}]);s.a=n},function(e,s){e.exports=angular},function(e,s){function r(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function i(e){return e.split("/").pop().replace(".html","")}var t={importFilesUnderPath:function(e){e.keys().forEach(e)},templateCacheGenerator:function(e,s,a,n){return e.module(s,[]).run(["$templateCache",function(t){a&&a.keys().forEach(function(e){var s=r(i(e));t.put(s,a(e))}),n&&n.keys().forEach(function(e){var s=r(i(e));t.put(s,function(e){return e.replace(/<\/?script[^>]*>/gi,"")}(n(e)))})}])}};e.exports=t},function(e,s){e.exports=CoreUtilities},function(e,s,t){"use strict";t.r(s);var a=t(2),n=t.n(a),r=t(3),i=(t(6),t(1));Object(r.importFilesUnderPath)(t(7)),Object(r.importFilesUnderPath)(t(13)),Object(r.importFilesUnderPath)(t(16)),Object(r.importFilesUnderPath)(t(19));var o=t(24),l=Object(r.templateCacheGenerator)(n.a,"messagesHtmlTemplate",o),c="#private-message";n.a.element(c).ready(function(){n.a.bootstrap(c,[i.a.name,l.name])}),s.default=i.a},function(e,s,t){},function(e,s,t){var a={"./messagesDetailDirective.js":8,"./messagesListDirective.js":9,"./messagesNavDirective.js":10,"./privateMessageBaseDirective.js":11,"./tabsHeaderDirective.js":12};function n(e){var s=r(e);return t(s)}function r(e){if(t.o(a,e))return a[e];var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}n.keys=function(){return Object.keys(a)},n.resolve=r,(e.exports=n).id=7},function(e,s,t){"use strict";t.r(s);var a=t(2),g=t.n(a),n=t(1);function r(r,i,o,e,l,a,c,d){return{restrict:"A",scope:{toggleMessagesBox:"&",shouldShowSystemUser:"&",selectedMessage:"=",sendMessage:"=",currentStatus:"=",messageDefaults:"="},replace:!0,templateUrl:e.templates.messagesBodyTemplate,link:function(n,e,s){o.debug("============== message detail =============="),n.sendMessage.disableSendBtn=!1,n.sendMessage.disableReplyBtn=!1,n.sendMessage.sendComplete=!1,n.sendMessage.sendResult={},n.sendMessage.replyContent="";var t=a.thumbnailTypes;n.thumbnailTypes=t,n.tabDict=g.a.copy(d.tabDict),n.sendReply=function(){o.debug("inside send reply function"),n.sendMessage.disableSendBtn=!0;var e=i.trustAsHtml(n.sendMessage.replyContent).$$unwrapTrustedValue(),s=d.messages,t=s.sendSuccessfully,a=s.unknownError;r.beginSendMessage(n.selectedMessage.subject,e,n.selectedMessage.sender.id,n.selectedMessage.id,n.sendMessage.includePreviousMessage).then(function(){n.sendMessage.disableReplyBtn=!1,n.sendMessage.replyContent="",l.triggerHandler("Roblox.Messages.MessageSent"),c.openBanner(t,{type:c.bannerTypes.SUCCESS})},function(e){var s,t=a;(null==e?void 0:e.message)?t=e.message:0<(null==e?void 0:null===(s=e.errors)||void 0===s?void 0:s.length)&&(t=e.errors[0].message),c.openBanner(t,{type:c.bannerTypes.WARNING,isHtmlAllowed:!0})}).finally(function(){n.sendMessage.sendComplete=!0,n.sendMessage.disableSendBtn=!1})},n.presetMessage=function(e){n.sendMessage.replyContent=e.Message}}}}r.$inject=["messagesService","$sce","$log","messagesConstants","$document","thumbnailConstants","systemFeedbackService","messageLanguageService"],n.a.directive("messagesDetail",r),s.default=r},function(e,s,t){"use strict";t.r(s);var a=t(1);function n(e,r,i,s){return{restrict:"A",scope:!0,replace:!0,templateUrl:s.templates.messagesListTemplate,link:function(n,e,s){i.debug("============== message list =============="),n.$watch(function(){return n.messageContent.messages},function(e,s){if(!e.hasError&&n.messageContent.loadingComplete){i.debug("  ========== roblox message page =========== ");var t=e.data?+e.data.PageNumber+1:1;if("notifications"==n.currentStatus.activeTab?n.notifications=e.data:n.messages=e.data,r.search().page!=t){var a=1<t?{page:t}:{};r.search(a)}}},!1)}}}n.$inject=["messagesService","$location","$log","messagesConstants"],a.a.directive("messagesList",n),s.default=n},function(e,s,t){"use strict";t.r(s);var a=t(1);function n(n,r,i,o,e){return{restrict:"A",scope:!0,replace:!0,templateUrl:e.templates.messagesNavTemplate,link:function(a,e,s){i.debug("message navigation"),a.markRead=function(s){if(i.debug("========Read======="),0<a.messageContent.selectedMessageIndexes.length){var t=[];angular.forEach(a.messageContent.selectedMessageIndexes,function(e){a.messageContent.messages.data.Collection[e].IsRead=s,t.push(a.messageContent.messages.data.Collection[e].Id)}),a.resetCheckboxStatusByMessageIndexes(),n.beginMarkMessagesRead(t,s).then(function(){o.triggerHandler("Roblox.Messages.CountChanged")})}},a.markArchive=function(e){i.debug("======= Archive========");var s=[];0<a.messageContent.selectedMessageIndexes.length?(angular.forEach(a.messageContent.selectedMessageIndexes,function(e){s.push(a.messageContent.messages.data.Collection[e].Id)}),a.resetCheckboxStatusByMessageIndexes(),n.beginSetArchiveMessages(s,e).then(function(){a.getMessages(a.currentStatus.activeTab,a.currentStatus.currentPage),a.toggleMessagesBox("list"),o.triggerHandler("Roblox.Messages.CountChanged")})):null!==a.messageContent.selectedMessage&&(s.push(a.messageContent.selectedMessage.Id),n.beginSetArchiveMessages(s,e).then(function(){a.toggleMessagesBox(a.moduleState.list)}))},a.pagination=function(e){var s,t;switch(e){case"prev":s=a.currentStatus.currentPage-1;break;case"next":s=a.currentStatus.currentPage+1;break;case"end":s=a.currentStatus.totalPages;break;case"start":s=1;break;default:s=1}t=1<s?{page:s}:{},r.search(t)},a.requestReply=function(){a.sendMessage.disableReplyBtn=!0,a.sendMessage.disableSendBtn=!1,a.sendMessage.sendComplete=!1,a.sendMessage.sendResult={}}}}}n.$inject=["messagesService","$location","$log","$document","messagesConstants"],a.a.directive("messagesNav",n),s.default=n},function(e,s,t){"use strict";t.r(s);var n=t(0),a=t(1);function r(e,s){return{restrict:"A",scope:!0,replace:!0,templateUrl:s.templates.privateMessageBaseTemplate,link:function(e,s,t){var a=n.DeviceMeta&&new n.DeviceMeta;e.messageBaseLayout={isApp:a.isInApp}}}}r.$inject=["$log","messagesConstants"],a.a.directive("privateMessageBase",r),s.default=r},function(e,s,t){"use strict";t.r(s);var a=t(1);function n(a,e){return{restrict:"A",scope:!0,replace:!0,templateUrl:e.templates.tabsHeaderTemplate,link:function(s,e,t){a.debug("..start roblox tabs .."),s.currentStatus.moduleState=s.moduleState.list,s.onClickTab=function(e){s.currentStatus.moduleState===s.moduleState.detail&&(s.currentStatus.isSingleMessageDetail||(s.currentStatus.loadMessages=!1),s.currentStatus.moduleState=s.moduleState.list),e.name!==s.currentStatus.activeTab&&s.resetMessageContent()}}}}n.$inject=["$log","messagesConstants"],a.a.directive("tabsHeader",n),s.default=n},function(e,s,t){var a={"./messagesConstants.js":14,"./moduleState.js":15};function n(e){var s=r(e);return t(s)}function r(e){if(t.o(a,e))return a[e];var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}n.keys=function(){return Object.keys(a)},n.resolve=r,(e.exports=n).id=13},function(e,s,t){"use strict";t.r(s);var a=t(0),n=t(1),r={endpoints:{getMessages:{url:"".concat(a.EnvironmentUrls.privateMessagesApi,"/v1/messages"),noCache:!0,retryable:!0,withCredentials:!0},archiveMessages:{url:"".concat(a.EnvironmentUrls.privateMessagesApi,"/v1/messages/archive"),retryable:!1,withCredentials:!0},unarchiveMessages:{url:"".concat(a.EnvironmentUrls.privateMessagesApi,"/v1/messages/unarchive"),retryable:!1,withCredentials:!0},markMessagesRead:{url:"".concat(a.EnvironmentUrls.privateMessagesApi,"/v1/messages/mark-read"),retryable:!1,withCredentials:!0},markMessagesUnread:{url:"".concat(a.EnvironmentUrls.privateMessagesApi,"/v1/messages/mark-unread"),retryable:!1,withCredentials:!0},sendMessage:{url:"".concat(a.EnvironmentUrls.privateMessagesApi,"/v1/messages/send"),retryable:!1,withCredentials:!0},getMessageDetailById:{url:"".concat(a.EnvironmentUrls.privateMessagesApi,"/v1/messages/{messageId}"),noCache:!0,retryable:!0,withCredentials:!0},getAnnouncements:{url:"".concat(a.EnvironmentUrls.privateMessagesApi,"/v1/announcements"),noCache:!0,retryable:!0,withCredentials:!0},getAnnouncementsMetadata:{url:"".concat(a.EnvironmentUrls.privateMessagesApi,"/v1/announcements/metadata"),noCache:!0,retryable:!0,withCredentials:!0}},templates:{privateMessageBaseTemplate:"private-message-base",messageThumbnailTemplate:"message-thumbnail",tabsHeaderTemplate:"tabs-header",messagesNavTemplate:"messages-nav",messagesListTemplate:"messages-list",messagesBodyTemplate:"messages-detail",messageTemplate:"messages-tab",notificationTemplate:"notification-tab"},defaultMessageInfo:{robloxUserId:1,robloxUserName:"Roblox",robloxUserAbsoluteUrl:a.Endpoints.getAbsoluteUrl("/users/1/profile/")},maxRowsOfMessages:20,lastAdRefresh:new Date,messageContentInitializedData:{messages:{},selectedMessageIndexes:[],selectedMessage:null,selectedAll:!1,loadingComplete:!1,messageDict:{}},layoutInitializedData:{maxRowsOfMessages:20}};n.a.constant("messagesConstants",r),s.default=r},function(e,s,t){"use strict";t.r(s);var a={list:"list",detail:"detail"};t(1).a.constant("moduleState",a),s.default=a},function(e,s,t){var a={"./messagesContentController.js":17,"./messagesController.js":18};function n(e){var s=r(e);return t(s)}function r(e){if(t.o(a,e))return a[e];var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}n.keys=function(){return Object.keys(a)},n.resolve=r,(e.exports=n).id=16},function(e,s,t){"use strict";t.r(s);var l=t(0),a=t(2),c=t.n(a),n=t(1);function r(n,r,i,o,e,s,t){n.toggleMessagesBox=function(e,s,t){if(n.resetCurrentStatus(),e===n.moduleState.detail){n.currentStatus.loadMessages=!1,s.IsRead||(s.IsRead=!0,r.beginMarkMessagesRead([s.Id],!0,!1).then(function(){i.triggerHandler("Roblox.Messages.CountChanged")})),n.toggleSelection(t),n.messageContent.selectedMessage=s,void 0===l.Linkify||s.IsSystemMessage||(s.Body=l.Linkify.String(s.Body));var a=o.search();a.messageIdx=t,o.search(a)}else n.messageContent.selectedMessageIndexes=[],n.messageContent.selectedMessage=null;n.currentStatus.moduleState=e},n.messageContent.selectedAll=!1,n.messageContent.selectedMessageIndexes=[],n.resetCheckboxStatusByMessageIndexes=function(){c.a.forEach(n.messageContent.selectedMessageIndexes,function(e){n.messageContent.messages.data.Collection[e].checked=!1}),n.messageContent.selectedMessageIndexes=[],n.messageContent.selectedAll&&(n.messageContent.selectedAll=!1)},n.toggleSelection=function(e){var s=n.messageContent.selectedMessageIndexes.indexOf(e);-1<s?n.messageContent.selectedMessageIndexes.splice(s,1):n.messageContent.selectedMessageIndexes.push(e)},n.checkAll=function(){n.messageContent.selectedAll=!n.messageContent.selectedAll,c.a.forEach(n.messageContent.messages.data.Collection,function(e,s){e.checked=n.messageContent.selectedAll,n.messageContent.selectedAll&&n.messageContent.selectedMessageIndexes.push(s)}),n.messageContent.selectedAll||(n.messageContent.selectedMessageIndexes=[])},n.sendMessage={disableReplyBtn:!1,disableSendBtn:!1,replyContent:"",sendComplete:!1,sendResult:{},includePreviousMessage:!0},n.shouldShowSystemUser=function(e){return n.currentStatus.activeTab!==s.tabDict.sent.name&&e.sender.id===t.defaultMessageInfo.robloxUserId}}r.$inject=["$scope","messagesService","$document","$location","$log","messageLanguageService","messagesConstants"],n.a.controller("messagesContentController",r),s.default=r},function(e,s,t){"use strict";t.r(s);var a=t(2),c=t.n(a),n=t(1);function r(o,a,t,n,l,r,s,i,e){o.initializeData=function(){var e=i.thumbnailTypes;o.thumbnailTypes=e,l.debug("scope from messagesController "),o.tabList=c.a.copy(t.tabList),o.tabDict=c.a.copy(t.tabDict),o.moduleState=n,o.MESSAGEDEFAULTS=c.a.copy(s.defaultMessageInfo),o.currentStatus=o.currentStatus||t.currentStatusInitializedData,o.messageContent=c.a.copy(s.messageContentInitializedData),o.layout=c.a.copy(s.layoutInitializedData)},o.resetCurrentStatus=function(){o.currentStatus.isSingleMessageDetail&&(o.currentStatus.isSingleMessageDetail=!1)},o.resetMessageContent=function(){o.messageContent&&(o.messageContent.messages={},o.messageContent.selectedMessageIndexes=[],o.messageContent.selectedMessage=null),o.resetCurrentStatus()},o.getMessageDetailById=function(){o.resetMessageContent(),o.messageContent.loadingComplete=!1,o.currentStatus.loadMessages=!1,o.currentStatus.isSingleMessageDetail=!0,a.getMessageDetailById(o.currentStatus.conversationId).then(function(e){e&&(o.messageContent.loadingComplete=!0,o.currentStatus.loadMessages=!0,o.currentStatus.conversationId=null,o.currentStatus.moduleState=n.detail,o.messageContent.selectedMessage=e,o.messageContent.selectedMessage.IsRead||a.beginMarkMessagesRead([o.messageContent.selectedMessage.Id],!0,!1),r.triggerHandler("Roblox.Messages.CountChanged"))},function(e){o.currentStatus.currentPage=1,o.currentStatus.totalPages=1,o.messageContent.loadingComplete=!0,o.messageContent.messages={data:e,hasError:!0}})},o.getMessages=function(e,s){o.messageContent.loadingComplete=!1,a.beginUpdateMessages(e,s-1).then(function(e){var s=e.PageNumber?+e.PageNumber+1:1;o.currentStatus.currentPage=s,o.currentStatus.totalPages=e.TotalPages?e.TotalPages:1,o.messageContent.loadingComplete=!0,o.messageContent.messages={data:e,hasError:!1},c.a.forEach(e.Collection,function(e){o.messageContent.messageDict[e.Id]=e});var t=o.currentStatus.messageIdx;null!=t?(o.currentStatus.moduleState=n.detail,o.messageContent.selectedMessage=e.Collection[t],o.messageContent.selectedMessage.IsRead||a.beginMarkMessagesRead([o.messageContent.selectedMessage.Id],!0,!1)):o.currentStatus.moduleState=n.list,r.triggerHandler("Roblox.Messages.CountChanged")},function(e){o.currentStatus.currentPage=1,o.currentStatus.totalPages=1,o.messageContent.loadingComplete=!0,o.messageContent.messages={data:e,hasError:!0}})},o.$on("$stateChangeSuccess",function(e,s,t,a,n){if(l.debug(" --- receiving route is changing --- "),o.currentStatus.loadMessages){var r=t.page?t.page:1,i=c.a.isDefined(t.messageIdx)?t.messageIdx:null;o.currentStatus.activeTab=s.name,o.currentStatus.activeTabLabel=o.tabDict[s.name].label,o.currentStatus.messageIdx=i,c.a.isDefined(t.conversationId)?(o.currentStatus.conversationId=t.conversationId,o.getMessageDetailById(s.name,r)):o.getMessages(s.name,r)}else o.currentStatus.loadMessages=!0}),o.init=function(){o.initializeData(),e.getMetadata().then(function(s){o.tabList.some(function(e){e.name===t.tabDict.notifications.name&&(e.count=s?s.numOfAnnouncements:0)})})},o.init()}r.$inject=["$scope","messagesService","messageLanguageService","moduleState","$log","$document","messagesConstants","thumbnailConstants","announcementsService"],n.a.controller("messagesController",r),s.default=r},function(e,s,t){var a={"./announcementsService.js":20,"./messageLanguageService.js":21,"./messageUtility.js":22,"./messagesService.js":23};function n(e){var s=r(e);return t(s)}function r(e){if(t.o(a,e))return a[e];var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}n.keys=function(){return Object.keys(a)},n.resolve=r,(e.exports=n).id=19},function(e,s,t){"use strict";t.r(s);var a=t(2),n=t.n(a),r=t(1);function i(e,s,t,a){return{getMetadata:function(){return e.httpGet(t.endpoints.getAnnouncementsMetadata)},getAnnouncements:function(){return e.httpGet(t.endpoints.getAnnouncements,null).then(function(e){return e&&e.collection&&(n.a.forEach(e.collection,function(e){a.processUserData(e.sender),a.convertResponseToPascalCase(e)}),a.convertResponseToPascalCase(e)),e})}}}i.$inject=["httpService","$log","messagesConstants","messageUtility"],r.a.factory("announcementsService",i),s.default=i},function(e,s,t){"use strict";t.r(s);var a=t(1);function n(e,s,t){var a=s,n={name:"inbox",label:a.get("Label.Inbox")},r={name:"sent",label:a.get("Label.Sent")},i={name:"notifications",label:a.get("Label.News"),count:0},o={name:"archive",label:a.get("Label.Archive")},l=[n,r,i,o],c={inbox:n,sent:r,notifications:i,archive:o};return{messages:{sendSuccessfully:a.get("Message.SendSuccessfully"),unknownError:a.get("Message.UnknownError")},tabList:l,tabDict:c,currentStatusInitializedData:{activeTabLabel:n.label,activeTab:n.name,currentPage:1,totalPages:1,moduleState:t.list,messageIdx:null,conversationId:null,loadMessages:!0,isSingleMessageDetail:!1}}}n.$inject=["$log","languageResource","moduleState"],a.a.factory("messageLanguageService",n),s.default=n},function(e,s,t){"use strict";t.r(s);var l=t(0),c=t(4),a=t(1);function n(e,o){return{appendAbuseReportUrl:function(e){e&&(e.abuseReportUrl=function(e){var s=l.Endpoints.getAbsoluteUrl("/my/messages/"),t="/AbuseReport/message?ID=".concat(e,"&RedirectUrl=").concat(s);return l.Endpoints.getAbsoluteUrl(t)}(e.id))},convertResponseToPascalCase:function(t){t&&Object.keys(t).forEach(function(e){var s=e.charAt(0).toUpperCase()+e.substr(1);t[s]=t[e]})},processUserData:function(e,s){var t=e.name,a=e.id,n=e.displayName,r=e,i=t;!s&&(null===l.DisplayNames||void 0===l.DisplayNames?void 0:l.DisplayNames.Enabled())&&(i=c.concatTexts.concat([o("escapeHtml")(n),o("escapeHtml")(t)],null,!0)),r.UserName=i,r.UserId=a,r.profileLink=l.Endpoints.getAbsoluteUrl("/users/".concat(a,"/profile"))}}}n.$inject=["$log","$filter"],a.a.factory("messageUtility",n),s.default=n},function(e,s,t){"use strict";t.r(s);var d=t(0),a=t(2),i=t.n(a),n=t(1);function r(o,e,l,n,t,a,r,c){return{beginUpdateMessages:function(e,s){return e===r.tabDict.notifications.name?a.getAnnouncements():function(e,s){var t={pageNumber:s,pageSize:l.maxRowsOfMessages,messageTab:e};return o.httpGet(l.endpoints.getMessages,t).then(function(e){return e&&e.collection&&(i.a.forEach(e.collection,function(e){var s=e.recipient,t=e.sender,a=e.isSystemMessage;n.processUserData(s),n.processUserData(t,a),n.convertResponseToPascalCase(e),n.appendAbuseReportUrl(e)}),n.convertResponseToPascalCase(e)),e})}(e,s)},getMessageDetailById:function(e){var s=l.endpoints.getMessageDetailById;return s.url=t("formatString")(s.url,{messageId:e}),o.httpGet(s).then(function(e){return e&&(n.processUserData(e.recipient),n.processUserData(e.sender),n.convertResponseToPascalCase(e),n.appendAbuseReportUrl(e)),e})},beginMarkMessagesRead:function(e,s){var t=s?l.endpoints.markMessagesRead:l.endpoints.markMessagesUnread,a={messageIds:e};return o.httpPost(t,a)},beginSetArchiveMessages:function(e,s){var t=s?l.endpoints.archiveMessages:l.endpoints.unarchiveMessages,a={messageIds:e};return o.httpPost(t,a)},beginSendMessage:function(e,s,t,a,n){var r=l.endpoints.sendMessage,i={userId:parseInt(d.CurrentUser.userId,10),subject:e,body:s,recipientId:t,replyMessageId:a,includePreviousMessage:n};return o.httpPost(r,i).then(function(e){return e&&!e.success?c.reject(e):e})}}}r.$inject=["httpService","$log","messagesConstants","messageUtility","$filter","announcementsService","messageLanguageService","$q"],n.a.factory("messagesService",r),s.default=r},function(e,s,t){var a={"./directives/templates/messageTab.html":25,"./directives/templates/messagesDetail.html":26,"./directives/templates/messagesList.html":27,"./directives/templates/messagesNav.html":28,"./directives/templates/notificationTab.html":29,"./directives/templates/privateMessageBase.html":30,"./directives/templates/tabsHeader.html":31};function n(e){var s=r(e);return t(s)}function r(e){if(t.o(a,e))return a[e];var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}n.keys=function(){return Object.keys(a)},n.resolve=r,(e.exports=n).id=24},function(e,s){e.exports='<div ng-switch="currentStatus.moduleState" class="tab-content rbx-tab-content"> <div messages-nav class="top-nav"></div> <div ng-switch-when="list"> <div messages-list></div> </div> <div ng-switch-when="detail" class="roblox-message-body"> <div messages-detail selected-message="messageContent.selectedMessage" send-message="sendMessage" current-status="currentStatus" toggle-messages-box="toggleMessagesBox(\'list\')" message-defaults="MESSAGEDEFAULTS" should-show-system-user="shouldShowSystemUser(messageContent.selectedMessage)"></div> </div> <div ng-switch-when="list" messages-nav class="bottom-nav"></div> </div> '},function(e,s){e.exports='<div class="messages message-detail section-content"> <system-feedback id="message-system-feedback"></system-feedback> <div class="clearfix"> <div class="subject roblox-send-message-subject"> <h3 id="rbx-message-detail-subject" class="message-detail-subject"> {{ selectedMessage.Subject }} </h3> <div class="sender"> <div class="roblox-avatar-image message-detail-image roblox-message-avatar" ng-class="{\'avatar\': selectedMessage.Sender.UserId != messageDefaults.robloxUserId,\'avatar-headshot-sm\': selectedMessage.Sender.UserId != messageDefaults.robloxUserId }"> <a ng-if="shouldShowSystemUser(selectedMessage)" ng-href="{{ selectedMessage.SenderAbsoluteUrl }}" class="avatar-card-link icon-logo-r icon-logo-notification system-card-image"> </a> <a ng-if="!shouldShowSystemUser(selectedMessage)" ng-href="{{ currentStatus.activeTab === tabDict.sent.name ? selectedMessage.recipient.profileLink : selectedMessage.sender.profileLink }}" class="avatar-card-link"> <thumbnail-2d class="avatar-card-image" thumbnail-type="thumbnailTypes.avatarHeadshot" thumbnail-target-id="selectedMessage.sender.id" ng-if="currentStatus.activeTab !== tabDict.sent.name"> </thumbnail-2d> <thumbnail-2d class="avatar-card-image" thumbnail-type="thumbnailTypes.avatarHeadshot" thumbnail-target-id="selectedMessage.recipient.id" ng-if="currentStatus.activeTab === tabDict.sent.name"> </thumbnail-2d> </a> </div> </div> <div class="roblox-send-message-content"> <p class="roblox-sender-link" ng-if="currentStatus.activeTab !== tabDict.sent.name"> <a class="paired-name text-name" ng-href="{{ selectedMessage.sender.profileLink }}" ng-bind-html="selectedMessage.Sender.UserName | isEmpty:\r\n            messageDefaults.robloxUserName:selectedMessage.Sender.UserName "> </a> <span class="date text-date-hint">{{ selectedMessage.Created | datetime: \'full\'}}</span> </p> <p class="roblox-sender-link" ng-if="currentStatus.activeTab === tabDict.sent.name"> <a class="paired-name text-name" ng-href="{{ selectedMessage.recipient.profileLink }}" ng-bind-html="selectedMessage.Recipient.UserName"> </a> <span class="date text-label xsmall">{{ selectedMessage.Created | datetime: \'full\'}}</span> </p> <a ng-if="selectedMessage.IsReportAbuseDisplayed == true" ng-href="{{ selectedMessage.abuseReportUrl }}" ng-bind="\'Action.ReportAbuse\' | translate" class="abuse-button text-report roblox-abuse-btn roblox-abuse-btn abuse-report-modal"></a> </div> </div> </div> <div class="body text clearfix message-detail-body"> <div ng-bind-html="selectedMessage.Body"></div> </div> <div class="message-reply" ng-hide="sendMessage.disableReplyBtn == false || sendMessage.sendResult.hasError == false"> <textarea rows="2" cols="20" class="border messages-reply-box text-box" placeholder="{{ \'Message.ReplyHere\' | translate }}" ng-model="sendMessage.replyContent" ng-disabled="sendMessage.disableSendBtn == true" focus-me="{{ sendMessage.disableReplyBtn }}"></textarea> <div class="message-reply-footer"> <div class="roblox-sendMessage-action"> <button class="roblox-sendMessage btn-primary-sm" ng-bind="\'Action.SendReply\' | translate" ng-click="sendReply()" ng-disabled="sendMessage.disableSendBtn == true || sendMessage.replyContent.length == 0"></button> </div> <div class="include-previous-message"> <div class="checkbox messageCheckbox"> <input id="includePreviousMessage" type="checkbox" ng-checked="sendMessage.includePreviousMessage" ng-model="sendMessage.includePreviousMessage"/> <label id="includePreviousMessage" for="includePreviousMessage" ng-bind="\'Label.IncludeMessage\'| translate"></label> </div> </div> <div ng-bind="\'Message.IdTheftWarning\' | translate" class="text-warning xsmall"></div> </div> </div> </div>'},function(e,s){e.exports='<div ng-switch="currentStatus.activeTab"> <div ng-switch-when="notifications" class="notifications"> <div id="Notifications" class="messages notifications-list"> <div ng-show="notifications.TotalCollectionSize == 0" class="section-content-off"> <span ng-bind="\'Message.NoNews\' | translate"></span> </div> <div class="border-top message-news sub-divider-bottom messageDivider" ng-repeat="notification in notifications.Collection" ng-click="showBody = !showBody" ng-class="{\'opened\': showBody}"> <div class="clearfix"> <div class="roblox-avatar-image" ng-class="{\'roblox-system-image\': notification.Sender.UserId == MESSAGEDEFAULTS.robloxUserId, \'avatar\': notification.Sender.UserId != MESSAGEDEFAULTS.robloxUserId, \'avatar-headshot-sm\': notification.Sender.UserId != MESSAGEDEFAULTS.robloxUserId}"> <a ng-if="notification.Sender.UserId === MESSAGEDEFAULTS.robloxUserId" class="icon-logo-r icon-logo-notification"> </a> <a class="avatar-card-link" ng-if="notification.Sender.UserId !== MESSAGEDEFAULTS.robloxUserId"> <thumbnail-2d class="avatar-card-image" thumbnail-type="thumbnailTypes.avatarHeadshot" thumbnail-target-id="notification.sender.id"></thumbnail-2d> </a> </div> <div class="roblox-message-title clearfix roblox-message-summary"> <span class="roblox-message-subject"> <a ng-hide="showBody"> <span class="paired-name" ng-bind-html="notification.Sender.UserName"></span> </a> <a ng-show="showBody" ng-click="showBody = false" ng-href="{{ notification.sender.profileLink }}"> <span class="paired-name" ng-bind-html="notification.Sender.UserName"></span> </a> <br/> <div class="text-subject">{{ notification.Subject }}</div> </span> <span class="text-date-hint message-summary-date greyedout" style="float:right">{{ notification.Created | datetime: \'full\' }}</span> </div> </div> <div class="font-caption-body message-body news-body" ng-class="{\'opened\': showBody}" ng-hide="!showBody"> <span ng-bind-html="notification.Body"><br/></span> </div> </div> </div> </div> <div ng-switch-default> <div id="MessagesInbox" class="messages"> <div ng-show="messages.TotalCollectionSize == 0" class="section-content-off"> <span ng-bind="\'Label.NoMessagesInCategory\' | translate:{activeTab:currentStatus.activeTabLabel}"></span> </div> <div class="border-top sub-divider-bottom messageDivider roblox-message-row" ng-class="{\'unread\': message.IsRead === false && currentStatus.activeTab !== tabDict.sent.name,\'read\': message.IsRead === true && currentStatus.activeTab !== tabDict.sent.name}" ng-repeat="message in messages.Collection"> <a class="messageRowAnchor"></a> <div class="checkbox messageCheckbox roblox-inboxCheckbox" ng-class="{robloxInvisibility: currentStatus.activeTab === tabDict.sent.name}"> <input type="checkbox" id="inbox{{ $index }}" ng-checked="message.checked" ng-model="message.checked" class="inbox-check userCheckbox"/> <label for="inbox{{ $index }}" id="userCheckbox" ng-click="toggleSelection($index)"></label> </div> <div class="roblox-avatar-image" ng-class="{\'roblox-system-image\': message.Sender.UserId == MESSAGEDEFAULTS.robloxUserId, \'avatar\':message.Sender.UserId != MESSAGEDEFAULTS.robloxUserId, \'avatar-headshot-sm\': message.Sender.UserId != MESSAGEDEFAULTS.robloxUserId}"> <a ng-if="shouldShowSystemUser(message)" ng-click="toggleMessagesBox(\'detail\', message, $index)" class="avatar-card-link icon-logo-r icon-logo-notification"> </a> <a ng-if="!shouldShowSystemUser(message)" ng-click="toggleMessagesBox(\'detail\', message, $index)" class="avatar-card-link"> <thumbnail-2d class="avatar-card-image" thumbnail-type="thumbnailTypes.avatarHeadshot" thumbnail-target-id="message.sender.id" ng-if="currentStatus.activeTab !== tabDict.sent.name"> </thumbnail-2d> <thumbnail-2d class="avatar-card-image" thumbnail-type="thumbnailTypes.avatarHeadshot" thumbnail-target-id="message.recipient.id" ng-if="currentStatus.activeTab === tabDict.sent.name"> </thumbnail-2d> </a> </div> <div class="roblox-messageRow roblox-message-summary" ng-click="toggleMessagesBox(\'detail\', message, $index)"> <div class="wrapped-text message-summary-body"> <span class="font-header-2 paired-name message-summary-username positionAboveLink" ng-if="currentStatus.activeTab !== tabDict.sent.name" ng-bind-html="message.Sender.UserName | isEmpty : MESSAGEDEFAULTS.robloxUserName:message.Sender.UserName"></span> <span class="font-header-2 paired-name message-summary-username positionAboveLink" ng-if="currentStatus.activeTab === tabDict.sent.name" ng-bind-html="message.Recipient.UserName"></span> <div class="text-label text-overflow message-summary-content"> <span class="font-subheader-2 text-subheader subject" ng-bind="message.Subject">-</span> <span ng-bind-html="message.Body | htmlToPlaintext" class="text-preview"></span> </div> </div> <span class="font-caption-body text-date-hint text message-summary-date text-messageDate read" ng-bind="message.Created | datetime: \'full\'"></span> </div> </div> </div> </div> </div>'},function(e,s){e.exports='<div id="inbox-general-buttons" class="inbox-buttons" ng-switch="currentStatus.moduleState" ng-class="{\'invisible\': !messageContent.loadingComplete}"> <div ng-switch-when="list"> <div class="roblox-messages-btns" ng-show="messageContent.messages.data.TotalCollectionSize > 0"> <div ng-if="currentStatus.activeTab === tabDict.inbox.name" class="message-actions"> <div class="checkbox messageCheckbox"> <input id="messageCheckbox" type="checkbox" ng-checked="messageContent.selectedAll" ng-click="checkAll()"/> <label id="messageCheckbox" ng-bind="\'Label.All\' | translate" for="messageCheckbox"></label> </div> <span class="action-buttons hidden-xs"> <button class="btn-control-sm roblox-archiveButton" ng-bind="\'Action.Archive\' | translate" ng-click="markArchive(true)"></button> <button class="btn-control-sm roblox-markAsReadInbox" ng-bind="\'Action.MarkAsRead\' | translate" ng-click="markRead(true)"></button> <button class="btn-control-sm roblox-markAsUnreadInbox" ng-bind="\'Action.MarkAsUnread\' | translate" ng-click="markRead(false)"></button> </span> <span class="action-buttons hidden-sm hidden-md hidden-lg" ng-show="messageContent.selectedMessageIndexes.length > 0"> <button class="btn-control-sm roblox-archiveButton" ng-bind="\'Action.Archive\' | translate" ng-click="markArchive(true)"></button> <button class="btn-control-sm roblox-markAsReadInbox" ng-bind="\'Action.MarkAsRead\' | translate" ng-click="markRead(true)"></button> <button class="btn-control-sm roblox-markAsUnreadInbox" ng-bind="\'Action.MarkAsUnread\' | translate" ng-click="markRead(false)"></button> </span> </div> <div id="pagingInbox"> <ul id="pagingInbox" class="pagingDiv pagination-container clearfix pager" data-toggle="pager" ng-if="currentStatus.totalPages > 1" ng-cloak> <li class="first" ng-click="pagination(\'start\')" ng-class="{\'disabled\': currentStatus.currentPage == 1}"> <a> <span class="icon-first-page"></span> </a> </li> <li id="previous" class="pager-prev" ng-click="pagination(\'prev\')" ng-class="{\'disabled\': currentStatus.currentPage == 1}"> <a> <span class="icon-left"></span> </a> </li> <li class="pager-cur"> <span id="rbx-current-page" class="CurrentPage" ng-bind="currentStatus.currentPage">1</span> </li> <li class="pager-total"> <span>/</span> <span ng-bind="currentStatus.totalPages" class="TotalPages">35</span> </li> <li id="next" class="pager-next" ng-click="pagination(\'next\')" ng-class="{\'disabled\': currentStatus.currentPage == currentStatus.totalPages}"> <a> <span class="icon-right"></span> </a> </li> <li class="last" ng-click="pagination(\'end\')" ng-class="{\'disabled\': currentStatus.currentPage == currentStatus.totalPages}"> <a> <span class="icon-last-page"></span> </a> </li> </ul> </div> <div ng-if="currentStatus.activeTab === tabDict.archive.name" class="message-actions"> <div class="checkbox messageCheckbox"> <input id="messageCheckbox" type="checkbox" ng-checked="messageContent.selectedAll" ng-click="checkAll()"/> <label id="messageCheckbox" for="messageCheckbox" ng-bind="\'Label.All\' | translate"></label> </div> <span class="action-buttons hidden-xs"> <button class="roblox-moveToInboxButton btn-control btn-control-sm" ng-bind="\'Action.MoveToInbox\' | translate" ng-click="markArchive(false)"></button> <button class="roblox-markAsReadInbox btn-control btn-control-sm" ng-bind="\'Action.MarkAsRead\' | translate" ng-click="markRead(true)"></button> <button class="roblox-markAsUnreadInbox btn-control btn-control-sm" ng-bind="\'Action.MarkAsUnread\' | translate" ng-click="markRead(false)"></button> </span> <span class="action-buttons hidden-sm hidden-md hidden-lg" ng-show="messageContent.selectedMessageIndexes.length > 0"> <button class="roblox-moveToInboxButton btn-control btn-control-sm" ng-bind="\'Action.MoveToInbox\' | translate" ng-click="markArchive(false)"></button> <button class="roblox-markAsReadInbox btn-control btn-control-sm" ng-bind="\'Action.MarkAsRead\' | translate" ng-click="markRead(true)"></button> <button class="roblox-markAsUnreadInbox btn-control btn-control-sm" ng-bind="\'Action.MarkAsUnread\' | translate" ng-click="markRead(false)"></button> </span> </div> </div> </div> <div ng-switch-when="detail"> <div class="roblox-messages-btns"> <button class="roblox-messageback pager previous roblox-message-back-btn btn-control-sm" ng-click="toggleMessagesBox(\'list\')"> <span class="icon-left"></span> </button> <div ng-if="currentStatus.activeTab === tabDict.inbox.name || currentStatus.activeTab  === tabDict.archive.name"> <button id="roblox-reply-btn" class="btn-control roblox-message-large-btn btn-secondary-sm" ng-click="requestReply()" ng-disabled="sendMessage.disableReplyBtn" ng-bind="\'Action.Reply\' | translate" ng-hide="messageContent.selectedMessage.IsSystemMessage == true"></button> </div> <div ng-if="currentStatus.activeTab === tabDict.inbox.name && !currentStatus.isSingleMessageDetail"> <button class="btn-control roblox-message-large-btn message-detail-mark-archive btn-control-sm" ng-bind="\'Action.Archive\' | translate" ng-click="markArchive(true)"></button> </div> <div ng-if="currentStatus.activeTab === tabDict.archive.name && !currentStatus.isSingleMessageDetail"> <button id="roblox-archive-btn" class="btn-control roblox-message-large-btn btn-control-sm" ng-bind="\'Action.MoveToInbox\' | translate" ng-click="markArchive(false)"></button> </div> </div> </div> </div> '},function(e,s){e.exports="<div messages-list> </div>"},function(e,s){e.exports='<div> <h1 ng-bind="\'Heading.Message\'|translate" ng-hide="messageBaseLayout.isApp"></h1> <div class="rbx-tabs-horizontal rbx-scrollable-tabs-horizontal roblox-messages-container" ng-controller="messagesController"> <div tabs-header></div> <ui-view class="tab-content rbx-tab-content tab-active"></ui-view> </div> </div> '},function(e,s){e.exports='<ul class="nav nav-tabs" ng-init="currentStatus.activeTab"> <li class="rbx-tab" ng-repeat="tab in tabList" ng-class="{\'active\': currentStatus.activeTab == tab.name}" ng-click="onClickTab(tab)"> <a class="rbx-tab-heading" ui-sref="{{tab.name}}"> <span class="text-lead">{{tab.label}}</span> <span class="notification-red notification" ng-show="tab.count">{{tab.count}}</span> </a> </li> </ul> '}]);
//# sourceMappingURL=/rbxcdn/js/aab8153094101f9aff3f-privateMessage.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("PrivateMessage");