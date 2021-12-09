!function(){var t={2849:function(e,r,t){var n={"./premiumConstants.js":5319};function o(e){e=i(e);return t(e)}function i(e){if(t.o(n,e))return n[e];e=new Error("Cannot find module '"+e+"'");throw e.code="MODULE_NOT_FOUND",e}o.keys=function(){return Object.keys(n)},o.resolve=i,(e.exports=o).id=2849},8701:function(e,r,t){var n={"./premiumConstantsService.js":8625,"./premiumService.js":1016};function o(e){e=i(e);return t(e)}function i(e){if(t.o(n,e))return n[e];e=new Error("Cannot find module '"+e+"'");throw e.code="MODULE_NOT_FOUND",e}o.keys=function(){return Object.keys(n)},o.resolve=i,(e.exports=o).id=8701},5639:function(e,r,t){var n={"./purchaseWarningModalController.js":3321,"./robuxController.js":6721};function o(e){e=i(e);return t(e)}function i(e){if(t.o(n,e))return n[e];e=new Error("Cannot find module '"+e+"'");throw e.code="MODULE_NOT_FOUND",e}o.keys=function(){return Object.keys(n)},o.resolve=i,(e.exports=o).id=5639},6990:function(e,r,t){var n={"./robuxContainerBaseDirective.js":2359,"./robuxContainerCnbDirective.js":5345,"./robuxContainerDirective.js":4491,"./robuxPackageCnbDirective.js":6775,"./robuxPackageDirective.js":7756,"./robuxSubscriptionUpsellContainerDirective.js":7872,"./robuxSubscriptionUpsellPackageDirective.js":3419};function o(e){e=i(e);return t(e)}function i(e){if(t.o(n,e))return n[e];e=new Error("Cannot find module '"+e+"'");throw e.code="MODULE_NOT_FOUND",e}o.keys=function(){return Object.keys(n)},o.resolve=i,(e.exports=o).id=6990},6296:function(e,r,t){var n={"./directives/templates/purchaseWarningModal.html":4816,"./directives/templates/robuxContainer.html":2182,"./directives/templates/robuxContainerBase.html":7328,"./directives/templates/robuxContainerCnb.html":3732,"./directives/templates/robuxPackage.html":714,"./directives/templates/robuxPackageCnb.html":7950,"./directives/templates/robuxSubscriptionUpsellContainer.html":4582,"./directives/templates/robuxSubscriptionUpsellPackage.html":1361};function o(e){e=i(e);return t(e)}function i(e){if(t.o(n,e))return n[e];e=new Error("Cannot find module '"+e+"'");throw e.code="MODULE_NOT_FOUND",e}o.keys=function(){return Object.keys(n)},o.resolve=i,(e.exports=o).id=6296},726:function(e){function i(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function a(e){return e.split("/").pop().replace(".html","")}var r={importFilesUnderPath:function(e){e.keys().forEach(e)},templateCacheGenerator:function(e,r,n,o){return e.module(r,[]).run(["$templateCache",function(t){n&&n.keys().forEach(function(e){var r=i(a(e));t.put(r,n(e))}),o&&o.keys().forEach(function(e){var r=i(a(e));t.put(r,o(e).replace(/<\/?script[^>]*>/gi,""))})}])}};e.exports=r},5319:function(e,r,t){"use strict";t.r(r);var n={modals:{bodyCenterCss:"premium-modal-center"},templates:{subscriptionCard:"subscription-card",subscriptionContainer:"subscription-container",robuxPackage:"robux-package",robuxPackageCnb:"robux-package-cnb",robuxContainer:"robux-container",robuxContainerCnb:"robux-container-cnb",robuxContainerBase:"robux-container-base",robuxSubscriptionUpsellContainer:"robux-subscription-upsell-container",robuxSubscriptionUpsellPackage:"robux-subscription-upsell-package",purchaseWarningModal:"purchase-warning-modal"},urls:{productsUrl:"/v1/products",userStatusUrl:"/v1/users/{userid}/subscriptions",paymentPageUrl:"/upgrades/paymentmethods?",mobilePaymentUrl:"/mobile-app-upgrades/buy?",subscribePageUrl:"/premium/membership?ctx=leftnav",termsUrl:"/info/terms",privacyUrl:"/info/privacy",billingSettingUrl:"/my/account#!/billing",robuxProductPolicyUrl:"/v1/behaviors/robux-product-policy/content",purchaseWarningUrl:"/purchase-warning/v1/purchase-warnings?",acknowledgePurchaseWarningUrl:"/purchase-warning/v1/purchase-warnings/acknowledge"},pageContext:{robux:"PremiumRobux",subscription:"PremiumSubscriptions",purchaseWarningModal:"purchaseWarningModal"},errorCodes:{productsNotFound:1,userNotFound:10,userSubscriptionNotFound:20,unableToCaculateRobuxGrant:50,exceedRobuxGrantMax:51},events:{buyButtonClicked:"Roblox.Membership.buySubscription"},streamEventParams:{active:"active",willExpire:"will_expire",wantMoreBtn:"want_more",robloxHelpLink:"robux_help_page",learnMoreLink:"learn_more_premium",getMoreLink:"get_more_premium",buyBtn:"buy"},premiumFeatureType:{subscription:"Subscription",robux:"Robux",unknown:"unknown",month:"month"},messages:{upgradeErrorTitle:"Upgrade Unavailable",upgradeErrorBody:"We're sorry, we are unable to change your subscription as we can not currently pay out your remaining Robux balance. Please contact customer support at https://www.roblox.com/support."},subscriptions:{RobloxPremium450:"RobloxPremium450",RobloxPremium1000:"RobloxPremium1000",RobloxPremium2200:"RobloxPremium2200",RobloxPremium450OneMonth:"RobloxPremium450OneMonth",RobloxPremium1000OneMonth:"RobloxPremium1000OneMonth",RobloxPremium2200OneMonth:"RobloxPremium2200OneMonth"},firstTimeRobuxPurchasePackage:{FourtyRobux:"40 Robux"},platformType:{isAndroidApp:"isAndroidApp",isAmazonApp:"isAmazonApp",isIosApp:"isIosApp",isUwpApp:"isUwpApp",isXboxApp:"isXboxApp",isUniversalApp:"isUniversalApp",isDesktop:"isDesktop"},viewCategories:{RobuxPackage:"RobuxPackage",RobuxPackageCNB:"RobuxPackageCNB"},purchaseWarningActions:{U13PaymentModal:"U13PaymentModal"}};t(1545).Z.constant("premiumConstants",n),r.default=n},2138:function(e,r,t){"use strict";var n=t(726);t(1545);(0,n.importFilesUnderPath)(t(2849)),(0,n.importFilesUnderPath)(t(8701))},1545:function(e,r,t){"use strict";var n=t(792),o=t(5734),o=t.n(o)().module("premium",["robloxApp"]).config(["languageResourceProvider",function(e){n.Lang.PremiumResources&&e.setLanguageKeysFromFile(n.Lang.PremiumResources)}]);r.Z=o},8625:function(e,r,t){"use strict";t.r(r);t=t(1545);function n(e,r){var n=r;return{links:{robuxHelper:n.get("Link.RobuxHelp")},errorMessages:{noData:n.get("Message.NoDataError"),general:n.get("Message.GeneralError")},modalParams:{switchPlan:function(e,r,t){return{titleText:n.get("Heading.SwitchPlanModal"),bodyText:n.get("Message.SwitchPlanBody",{price:e,renewalDate:r}),actionButtonShow:!0,actionButtonText:n.get("Label.Confirm"),neutralButtonText:n.get("Label.Cancel"),cssClass:t}},alreadyCancelled:function(e){return{titleText:n.get("Heading.SubscriptionUnavailable"),bodyText:n.get("Message.SubscriptionUnavailableModal",{expiredDate:e}),actionButtonShow:!1}},serverError:{titleText:n.get("Heading.ServerError"),bodyText:n.get("Message.ServerError"),actionButtonShow:!1},generalError:{titleText:n.get("Heading.GeneralError"),bodyText:n.get("Message.GeneralError"),actionButtonShow:!1}}}}n.$inject=["$log","languageResource"],t.Z.factory("premiumConstantsService",n),r.default=n},1016:function(e,r,t){"use strict";t.r(r);var m=t(792),t=t(1545);function n(t,r,o,i,n,a,s,u){function e(e){if(!m.EnvironmentUrls||!m.EnvironmentUrls.premiumFeaturesApi)return t(function(e,r){r({errorMsg:"Url is null. Please try again later."})});var r={url:m.EnvironmentUrls.premiumFeaturesApi+s.urls.productsUrl};return n.httpGet(r,e)}function c(){return(0,m.DeviceMeta)().isAndroidApp}function l(){return(0,m.DeviceMeta)().isIosApp}function p(){return(0,m.DeviceMeta)().isDesktop&&!(0,m.DeviceMeta)().isUWPApp||!(0,m.DeviceMeta)().isAmazonApp&&!(0,m.DeviceMeta)().isUWPApp&&!(0,m.DeviceMeta)().isIosApp&&!(0,m.DeviceMeta)().isAndroidApp}function b(){return(0,m.DeviceMeta)().isAmazonApp||(0,m.DeviceMeta)().isUWPApp||(0,m.DeviceMeta)().isIosApp||(0,m.DeviceMeta)().isAndroidApp}function d(){return t(function(e,r){r({errorMsg:"Url is null. Please try again later."})})}return{inRobloxApp:function(){return(0,m.DeviceMeta)().isInApp},isIosApp:l,isAndroidApp:c,isWin32App:function(){return(0,m.DeviceMeta)().isWin32App},isInDesktopMode:p,isInAppMode:b,getProductPolicy:function(){if(!m.EnvironmentUrls||!m.EnvironmentUrls.universalAppConfigurationApi)return d();var e={url:"".concat(m.EnvironmentUrls.universalAppConfigurationApi).concat(s.urls.robuxProductPolicyUrl)};return n.httpGet(e)},getSubscriptionPageData:function(){return{subscriptions:[],recurringSubscriptions:[],nonRecurringSubscriptions:[],userPlan:null,errorMessage:null,isInAppMode:b()}},getRobuxPageData:function(){return{robuxs:[],userPlan:null,errorMessage:null,isInAppMode:b(),isInDesktopMode:p(),upsellPackage:null,firstTimePackage:null}},getMembershipProducts:function(){return e({typeName:s.premiumFeatureType.subscription})},getAllProducts:function(){return e()},getUserStatus:function(){if(!m.EnvironmentUrls.premiumFeaturesApi||!m.CurrentUser)return d();var e={url:m.EnvironmentUrls.premiumFeaturesApi+s.urls.userStatusUrl.replace("{userid}",m.CurrentUser.userId)};return n.httpGet(e)},getPurchaseUrl:function(e,r){if(!e)return"";var t={},n="",n=c()?(t.id=e.mobileProductId.toLowerCase(),t.recurring="Subscription"===e.premiumFeatureTypeName&&!e.mobileProductId.endsWith("OneMonth"),s.urls.mobilePaymentUrl+o(t)):(0,m.DeviceMeta)().isAmazonApp||(0,m.DeviceMeta)().isUWPApp?(t.id=e.mobileProductId.toLowerCase(),s.urls.mobilePaymentUrl+o(t)):l()?(t.id=e.mobileProductId,s.urls.mobilePaymentUrl+o(t)):(t={ap:e.productId,page:r},s.urls.paymentPageUrl+o(t));return i.getAbsoluteUrl(n)},purchaseSubscription:function(e){e=s.urls.paymentPageUrl+o(e);r.location.href=i.getAbsoluteUrl(e)},patchSubscription:function(e){if(!m.EnvironmentUrls.premiumFeaturesApi||!m.CurrentUser)return d();var r=m.EnvironmentUrls.premiumFeaturesApi+s.urls.userStatusUrl.replace("{userid}",m.CurrentUser.userId),r={url:r+="?".concat(o({productId:e}))};return n.httpPatch(r,e)},getSubscriptionPageUrl:function(){return i.getAbsoluteUrl(s.urls.subscribePageUrl)},getTermsPageUrl:function(){return i.getAbsoluteUrl(s.urls.termsUrl)},getPrivacyPageUrl:function(){return i.getAbsoluteUrl(s.urls.privacyUrl)},getBillingSettingUrl:function(){return i.getAbsoluteUrl(s.urls.billingSettingUrl)},sendInteractionClickEvent:function(e,r,t,n,o){n={pid:t,from_pid:n};m.FormEvents&&m.FormEvents.SendInteractionClick(e,o,r,n)},sendModalClickEvent:function(e,r,t,n){n={pid:t,from_pid:n};a.sendModalEvent(e,r,n)},sendModalShownEvent:function(e,r,t){t={pid:r,from_pid:t};a.sendModalEvent(e,a.modalActions.shown,t)},sendModalDismissedEvent:function(e,r,t){t={pid:r,from_pid:t};a.sendModalEvent(e,a.modalActions.dismissed,t)},getMembershipMapping:function(e){var r=u;switch(e){case s.subscriptions.RobloxPremium450:case s.subscriptions.RobloxPremium450OneMonth:return r.get("Label.RobloxPremium450");case s.subscriptions.RobloxPremium1000:case s.subscriptions.RobloxPremium1000OneMonth:return r.get("Label.RobloxPremium1000");case s.subscriptions.RobloxPremium2200:case s.subscriptions.RobloxPremium2200OneMonth:return r.get("Label.RobloxPremium2200");default:return r.get("Label.RobloxPremium")}},getUsersCurrentPlatform:function(){return(0,m.DeviceMeta)().isAndroidApp?s.platformType.isAndroidApp:(0,m.DeviceMeta)().isAmazonApp?s.platformType.isAmazonApp:(0,m.DeviceMeta)().isIosApp?s.platformType.isIosApp:(0,m.DeviceMeta)().isUWPApp?s.platformType.isUwpApp:(0,m.DeviceMeta)().isXboxApp?s.platformType.isXboxApp:(0,m.DeviceMeta)().isUniversalApp?s.platformType.isUniversalApp:s.platformType.isDesktop},getPurchaseWarning:function(e){if(!m.EnvironmentUrls||!m.EnvironmentUrls.apiGatewayUrl)return d();var r={};r.productId=e;r={url:"".concat(m.EnvironmentUrls.apiGatewayUrl).concat(s.urls.purchaseWarningUrl).concat(o(r))};return n.httpGet(r)},acknowledgePurchaseWarning:function(e,r){if(!m.EnvironmentUrls||!m.EnvironmentUrls.apiGatewayUrl)return d();r={url:"".concat(m.EnvironmentUrls.apiGatewayUrl).concat(s.urls.acknowledgePurchaseWarningUrl),timeout:r},e={acknowledgement:e};return n.httpPost(r,e)}}}n.$inject=["$q","$window","$httpParamSerializer","urlService","httpService","eventStreamService","premiumConstants","languageResource"],t.Z.factory("premiumService",n),r.default=n},3321:function(e,r,t){"use strict";t.r(r);var c=t(792),t=t(5340);function n(e,r,t,n,o,i){var a=n.pageContext.purchaseWarningModal,s={platform:(0,c.DeviceMeta)().appType,uid:c.CurrentUser.userId,pid:i.productType.productId,from_pid:i.productType.premiumFeatureId};function u(){var e;o.sendModalEvent(a,"oKButton",s),"mobile"===i.type?((e=document.createElement("a")).href=t.getPurchaseUrl(i.productType,n.pageContext.robux),e.click()):"desktop"===i.type&&t.purchaseSubscription(i.desktopPurchaseParam),r.close(!0)}o.sendModalEvent(a,o.modalActions.shown,s),e.lineBreak="<br></br>",e.continue=function(){t.acknowledgePurchaseWarning("Confirmed".concat(i.purchaseWarningAction),2e3).then(function(){u()},function(){u()})},e.close=function(){o.sendModalEvent(a,o.modalActions.dismissed,s),r.close(!0)}}n.$inject=["$scope","$uibModalInstance","premiumService","premiumConstants","eventStreamService","purchaseRedirectParams"],t.Z.controller("purchaseWarningModalController",n),r.default=n},6721:function(e,r,t){"use strict";t.r(r);var p=t(792),t=t(5340);function n(o,e,i,t){o.robuxPageData=e.getRobuxPageData(),o.robuxPageData.isUserStatusReady=!1,o.termsLinkStart='<a href="'.concat(e.getTermsPageUrl(),'" class="text-link">'),o.termsLinkEnd="</a>",o.privacyLinkStart='<a href="'.concat(e.getPrivacyPageUrl(),'" class="text-link">'),o.privacyLinkEnd="</a>",o.billingLinkStart='<a href="'.concat(e.getBillingSettingUrl(),'" class="text-link">'),o.billingLinkEnd="</a>",o.showCNBrobuxView=!1;var a={},s={},u={};function r(e){o.robuxPageData.userPlan=e&&e.subscriptionProductModel,o.isSubscriber=o.robuxPageData.userPlan&&o.robuxPageData.userPlan.hasOwnProperty("subscriptionTypeName"),o.isAmazonApp=(0,p.DeviceMeta)().isAmazonApp}function n(e){e&&e.products?(e.products.forEach(l),function(){var e,r=[];for(e in u){var t={};u.hasOwnProperty(e)&&(t.normal=u[e]),s.hasOwnProperty(e)&&(t.subscriptionOnly=s[e]),a.hasOwnProperty(e)&&(t.subscription=a[e]),r.push(t)}o.robuxPageData.robuxs=r.sort(function(e,r){return e.normal.price.amount>r.normal.price.amount?1:-1})}()):c({errorCode:i.errorCodes.productsNotFound})}function c(e){var r="";e&&(r=e.errorCode===i.errorCodes.productsNotFound?t.errorMessages.noData:t.errorMessages.general),o.robuxPageData.errorMessage=r}function l(e){var r,t,n=e.price.amount.toString();e.subscriptionTypeName!==i.subscriptions.RobloxPremium450&&e.subscriptionTypeName!==i.subscriptions.RobloxPremium450OneMonth||(o.robuxPageData.upsellPackage=e),e.premiumFeatureTypeName===i.premiumFeatureType.subscription?(t=e.subscriptionTypeName&&e.subscriptionTypeName.toString().toLowerCase(),r=o.robuxPageData.isInAppMode&&0<=t.indexOf(i.premiumFeatureType.month),t=o.robuxPageData.isInDesktopMode&&t.indexOf(i.premiumFeatureType.month)<0,(r||t)&&(a[n]=e)):e.isSubscriptionOnly?s[n]=e:u[n]=e}o.initPage=function(){e.getUserStatus().then(function(e){r(e)},function(){r(null)}).finally(function(){o.robuxPageData.isUserStatusReady=!0}),e.getAllProducts().then(n,c),e.getProductPolicy().then(function(e){e&&e.allowedViews&&Array.isArray(e.allowedViews)&&(o.showCNBrobuxView=e.allowedViews.includes(i.viewCategories.RobuxPackageCNB))},function(){})},o.initPage()}n.$inject=["$scope","premiumService","premiumConstants","premiumConstantsService"],t.Z.controller("robuxController",n),r.default=n},2359:function(e,r,t){"use strict";t.r(r);t=t(5340);function n(e){return{restrict:"A",scope:!1,templateUrl:e.templates.robuxContainerBase,link:function(e,r,t){e.isStarcodeMobileEnabled="true"===t.isStarcodeMobileEnabled,e.isPurchaseWarningModalEnabled="true"===t.isScaryModalEnabled,e.isVerificationUpsellEnabled="true"===t.isVerificationUpsellEnabled}}}n.$inject=["premiumConstants"],t.Z.directive("robuxContainerBase",n),r.default=t.Z},5345:function(e,r,t){"use strict";t.r(r);t=t(5340);function n(o,i,a,s,u){return{restrict:"A",scope:!1,templateUrl:s.templates.robuxContainerCnb,link:function(e){var r,t,n;e.subscribePageUrl=a.getSubscriptionPageUrl(),e.isShowSuperValue=!1,(n=angular.element(".top-subtitle")).childElementCount||(r='<a href="'.concat(u.links.robuxHelper,'" class="text-link" ng-click="linkClicked(\'').concat(s.streamEventParams.robloxHelpLink,"')\">"),t='<a ng-href={{subscribePageUrl}} class="text-link" ng-click="linkClicked(\''.concat(s.streamEventParams.learnMoreLink,"')\">"),t=i("translate")("Description.BuyRobuxSubtitle",{helpLinkStart:r,helpLinkEnd:"</a>",paragraphBreaker:"<br/>",learnMoreLinkStart:t,learnMoreLinkEnd:"</a>"}),t=o("<span>".concat(t,"</span>"))(e),n.append(t)),e.moreRobuxBtnClicked=function(){e.isShowSuperValue||(e.isShowSuperValue=!0),a.sendInteractionClickEvent(s.pageContext.robux,s.streamEventParams.wantMoreBtn)},e.linkClicked=function(e){a.sendInteractionClickEvent(s.pageContext.robux,e)}}}}n.$inject=["$compile","$filter","premiumService","premiumConstants","premiumConstantsService"],t.Z.directive("robuxContainerCnb",n),r.default=t.Z},4491:function(e,r,t){"use strict";t.r(r);t=t(5340);function n(o,i,a,s,u){return{restrict:"A",scope:!1,templateUrl:s.templates.robuxContainer,link:function(e){var r,t,n;e.subscribePageUrl=a.getSubscriptionPageUrl(),e.isShowSuperValue=!1,(n=angular.element(".top-subtitle")).childElementCount||(r='<a href="'.concat(u.links.robuxHelper,'" class="text-link" ng-click="linkClicked(\'').concat(s.streamEventParams.robloxHelpLink,"')\">"),t='<a ng-href={{subscribePageUrl}} class="text-link" ng-click="linkClicked(\''.concat(s.streamEventParams.learnMoreLink,"')\">"),t=i("translate")("Description.BuyRobuxSubtitle",{helpLinkStart:r,helpLinkEnd:"</a>",paragraphBreaker:"<br/>",learnMoreLinkStart:t,learnMoreLinkEnd:"</a>"}),t=o("<span>".concat(t,"</span>"))(e),n.append(t)),e.moreRobuxBtnClicked=function(){e.isShowSuperValue||(e.isShowSuperValue=!0),a.sendInteractionClickEvent(s.pageContext.robux,s.streamEventParams.wantMoreBtn)},e.linkClicked=function(e){a.sendInteractionClickEvent(s.pageContext.robux,e)}}}}n.$inject=["$compile","$filter","premiumService","premiumConstants","premiumConstantsService"],t.Z.directive("robuxContainer",n),r.default=t.Z},6775:function(e,r,t){"use strict";t.r(r);t=t(5340);function n(t,n,e){return{restrict:"A",scope:{userInfo:"=",product:"="},templateUrl:n.templates.robuxPackageCnb,link:function(r){r.layout={isPremiumUser:!1,purchaseUrl:"#",isInAppMode:t.isInAppMode(),isInDesktopMode:t.isInDesktopMode()},r.product&&r.product.subscription&&(r.product.subscription.robuxAmount=e("localNumberFormat")(r.product.subscription.robuxAmount)),r.layout.isInAppMode&&r.product&&(r.layout.purchaseUrl=t.getPurchaseUrl(r.product.normal,n.pageContext.robux)),r.buyClick=function(e){t.sendInteractionClickEvent(n.pageContext.robux,n.streamEventParams.buyBtn,e.productId),r.layout.isInDesktopMode&&(e={ap:e.productId,page:n.premiumFeatureType.robux},t.purchaseSubscription(e))}}}}n.$inject=["premiumService","premiumConstants","$filter"],t.Z.directive("robuxPackageCnb",n),r.default=t.Z},7756:function(e,r,t){"use strict";t.r(r);var s=t(792),n=t(5340),u=t(3321);function o(o,i,e,a){return{restrict:"A",scope:{userInfo:"=",product:"="},templateUrl:i.templates.robuxPackage,link:function(n){n.layout={isPremiumUser:!1,purchaseUrl:"#",isInAppMode:o.isInAppMode(),isInDesktopMode:o.isInDesktopMode()},n.product&&n.product.subscription&&(n.product.subscription.robuxAmount=e("localNumberFormat")(n.product.subscription.robuxAmount)),n.$watch(function(){return n.userInfo},function(){n.userInfo&&(n.layout.isPremiumUser=n.userInfo&&n.userInfo.hasOwnProperty("subscriptionTypeName"))}),n.getPurchaseUrl=function(e){if(n.layout.isInAppMode&&e)return o.getPurchaseUrl(e,i.pageContext.robux)};function t(r){var t;n.layout.isInDesktopMode&&(t={ap:r.productId,page:i.premiumFeatureType.robux},n.$parent.isPurchaseWarningModalEnabled?o.getPurchaseWarning(r.productId).then(function(e){e&&e.action===i.purchaseWarningActions.U13PaymentModal?(e={type:"desktop",desktopPurchaseParam:t,productType:r,purchaseWarningAction:e.action},a.open({templateUrl:i.templates.purchaseWarningModal,controller:u.default,resolve:{purchaseRedirectParams:e}})):o.purchaseSubscription(t)},function(){o.purchaseSubscription(t)}):o.purchaseSubscription(t))}n.buyClick=function(r){o.sendInteractionClickEvent(i.pageContext.robux,i.streamEventParams.buyBtn,r.productId),n.$parent.isVerificationUpsellEnabled?s.EmailVerificationService.getUserEmailVerificationStatus("buyRobuxPage",function(){t(r)}).then(function(e){null!=e&&e.emailAddress&&t(r)}):t(r)}}}}o.$inject=["premiumService","premiumConstants","$filter","$uibModal"],n.Z.directive("robuxPackage",o),r.default=n.Z},7872:function(e,r,t){"use strict";t.r(r);t=t(5340);function n(n,o,i,a,e){return{restrict:"A",scope:!1,templateUrl:a.templates.robuxSubscriptionUpsellContainer,link:function(e){var r,t;e.subscribePageUrl=i.getSubscriptionPageUrl(),e.isShowSuperValue=!1,(t=angular.element(".top-subtitle")).childElementCount||(r='<a ng-href={{subscribePageUrl}} class="text-link" ng-click="linkClicked(\''.concat(a.streamEventParams.learnMoreLink,"')\">"),r=o("translate")("Description.BuyMoreRobuxSubtitle",{lineBreak:"<br/>",learnMoreLinkStart:r,learnMoreLinkEnd:"</a>"}),r=n("<span>".concat(r,"</span>"))(e),t.append(r)),e.moreRobuxBtnClicked=function(){e.isShowSuperValue||(e.isShowSuperValue=!0),i.sendInteractionClickEvent(a.pageContext.robux,a.streamEventParams.wantMoreBtn)},e.linkClicked=function(e){i.sendInteractionClickEvent(a.pageContext.robux,e)}}}}n.$inject=["$compile","$filter","premiumService","premiumConstants","premiumConstantsService"],t.Z.directive("robuxSubscriptionUpsellContainer",n),r.default=t.Z},3419:function(e,r,t){"use strict";t.r(r);var s=t(792),n=t(5340),u=t(3321);function o(o,i,a){return{restrict:"A",scope:{product:"=",isUpsell:"="},templateUrl:i.templates.robuxSubscriptionUpsellPackage,link:function(e){e.layout={isPremiumUser:!1},e.upsellPackage=null,e.$watch(function(e){return e.$parent.robuxPageData.upsellPackage},function(e,r,t){t.isUpsell&&e&&(t.upsellPackage=e,t.upsellPackage.isRecurring=t.upsellPackage.subscriptionTypeName.toLowerCase().indexOf(i.premiumFeatureType.month)<0)});function t(e){var r=document.createElement("a");r.href=o.getPurchaseUrl(e,i.pageContext.robux),r.click()}function n(r){e.$parent.isPurchaseWarningModalEnabled?o.getPurchaseWarning(r.productId).then(function(e){e&&e.action===i.purchaseWarningActions.U13PaymentModal?(e={type:"mobile",desktopPurchaseParam:null,productType:r,purchaseWarningAction:e.action},a.open({templateUrl:i.templates.purchaseWarningModal,controller:u.default,resolve:{purchaseRedirectParams:e}})):t(r)},function(){t(r)}):t(r)}e.$watch(function(e){return e.$parent.robuxPageData.userPlan},function(e,r,t){e&&(t.layout.isPremiumUser=e.hasOwnProperty("subscriptionTypeName"))}),e.showPurchaseWarningModal=function(r){o.sendInteractionClickEvent(i.pageContext.robux,i.streamEventParams.buyBtn,r.productId),e.$parent.isVerificationUpsellEnabled?s.EmailVerificationService.getUserEmailVerificationStatus("buyRobuxPage",function(){n(r)}).then(function(e){null!=e&&e.emailAddress&&n(r)}):n(r)}}}}o.$inject=["premiumService","premiumConstants","$uibModal"],n.Z.directive("robuxSubscriptionUpsellPackage",o),r.default=n.Z},5340:function(e,r,t){"use strict";var n=t(792),o=t(5734),o=t.n(o)().module("robux",["robloxApp","modal","premium"]).config(["$injector",function(e){e=e.get("languageResourceProvider");n.Lang.PremiumResources&&e.setLanguageKeysFromFile(n.Lang.PremiumResources),n.Lang.ExternalLinksResources&&e.setLanguageKeysFromFile(n.Lang.ExternalLinksResources)}]);r.Z=o},4816:function(e){e.exports='<div class="premium-modal-center"> <div class="modal-header"> <button type="button" class="close" ng-click="close()"> <span aria-hidden="true"><span class="icon-close"></span></span><span class="sr-only">Close</span> </button> <h4 ng-bind="\'Heading.ScaryModalTitle\'|translate"></h4> </div> <div class="modal-body"> <span class="text-description" ng-bind-html="\'Description.ScaryModalBodyNew\'|translate: {lineBreak}"></span> </div> <div class="image-center"> <div class="icon-warning"></div> </div> <div class="modal-buttons"> <button class="modal-button btn-secondary-md" ng-bind="\'Action.OK\'|translate" ng-click="continue()"></button> <button class="modal-button btn-control-md" ng-bind="\'Action.Cancel\'|translate" ng-click="close()"></button> </div> </div> '},2182:function(e){e.exports='<div class="row premium-container" ng-modules="robloxApp, robux" ng-cloak> <div class="page-top"> <span class="robux-man"></span> <div class="top-header"> <h1 ng-bind="\'Action.BuyRobux\' | translate"></h1> <div class="top-subtitle"></div> </div> </div> <div class="page-content" ng-if="robuxPageData.isUserStatusReady"> <div class="robux-table"> <div class="robux-head-group"> <div class="robux-head"> </div> <div class="robux-head robux-head-40-percent"><div class="font-header-1" ng-bind="\'Action.BuyRobux\' | translate"></div></div> <div class="robux-head robux-head-40-percent" ng-hide="isSubscriber"><div class="font-header-1" ng-bind="\'Label.Subscribe\' | translate"></div><a ng-href="{{subscribePageUrl}} " class="text-link" ng-bind="\'Label.AndGetMore\' | translate"></a></div> <div class="robux-head robux-head-40-percent" ng-show="isSubscriber"><div class="font-header-1" ng-bind="\'Label.BecauseYouSubscribed\' | translate"></div></div> </div> <div class="robux-body"> <div class="robux-row" ng-repeat="product in robuxPageData.robuxs | limitTo:3" robux-package product="product" user-info="robuxPageData.userPlan"></div> </div> </div> <div class="more-robux-button" ng-if="robuxPageData.robuxs.length > 3"> <button class="btn-control-md btn-full-width" ng-hide="isShowSuperValue" ng-click="moreRobuxBtnClicked()" ng-bind="\'Label.WantMoreRobux\' | translate"> <span class="icon-down-16x16"></span> </button> </div> <div ng-show="isShowSuperValue"> <div class="robux-table"> <div class="robux-head-group"> <div class="robux-head"> </div> <div class="robux-head robux-head-40-percent"><div class="font-header-1" ng-bind="\'Label.ValuePacks\' | translate"></div></div> <div class="robux-head robux-head-40-percent" ng-hide="isSubscriber"> </div> <div class="robux-head robux-head-40-percent" ng-show="isSubscriber"><div class="font-header-1" ng-bind="\'Label.BecauseYouSubscribed\' | translate"></div></div> </div> <div class="robux-body"> <div class="robux-row" ng-repeat="product in robuxPageData.robuxs | limitTo:2:3" robux-package product="product" user-info="robuxPageData.userPlan" isSuperValue="true"></div> </div> </div> </div> <div> <p class="text-footer legal-text-holder" ng-bind-html="\'Description.legalDisclosuresNewPremiumRobuxPage\'|translate: {privacyLinkStart, privacyLinkEnd, billingLinkStart, billingLinkEnd, termsLinkStart, termsLinkEnd}"></p> </div> </div> </div> '},7328:function(e){e.exports='<div class="row" ng-modules="robloxApp, robux" ng-cloak ng-controller="robuxController"> <div ng-if="robuxPageData.isInAppMode"> <div ng-if="showCNBrobuxView" robux-container-cnb></div> <div ng-if="!showCNBrobuxView" robux-subscription-upsell-container></div> </div> <div class="premium-container" ng-if="robuxPageData.isInDesktopMode"> <div ng-if="showCNBrobuxView" robux-container-cnb></div> <div ng-if="!showCNBrobuxView" robux-container></div> </div> </div> '},3732:function(e){e.exports='<div class="row premium-container" ng-modules="robloxApp, robux" ng-cloak ng-controller="robuxController"> <div class="page-top"> <span class="robux-man"></span> <div class="top-header"> <h1 ng-bind="\'Action.BuyRobux\' | translate"></h1> <div class="top-subtitle"></div> </div> </div> <div class="page-content container-narrow" ng-if="robuxPageData.isUserStatusReady"> <div class="robux-table robux-table-2col"> <div class="robux-head-group"> <div class="robux-head"> <div class="font-header-1" ng-bind="\'Action.BuyRobux\' | translate"></div> </div> </div> <div class="robux-body"> <div class="robux-row" ng-repeat="product in robuxPageData.robuxs | limitTo:3" robux-package-cnb product="product" user-info="robuxPageData.userPlan"></div> <div ng-show="isShowSuperValue" class="robux-row" ng-repeat="product in robuxPageData.robuxs | limitTo:2:3" robux-package-cnb product="product" user-info="robuxPageData.userPlan" isSuperValue="true"></div> </div> </div> <div class="more-robux-button" ng-if="robuxPageData.robuxs.length > 3"> <button class="btn-control-md btn-full-width" ng-hide="isShowSuperValue" ng-click="moreRobuxBtnClicked()" ng-bind="\'Label.WantMoreRobux\' | translate"> <span class="icon-down-16x16"></span> </button> </div> </div> <div> <p class="text-footer legal-text-holder" ng-bind-html="\'Description.legalDisclosuresPremiumRobuxPage\'|translate: {termsLinkStart, termsLinkEnd}"></p> </div> </div> '},714:function(e){e.exports='<div class="robux-cell"> <span class="font-header-1" ng-bind="product.normal.price.amount | currency: product.normal.price.currency.currencySymbol"></span> </div> <div class="robux-cell"> <div class="robux-downsell" ng-if="layout.isPremiumUser"> <span class="icon-robux-gray"></span> <h4 class="inline-text robux-strikethrough">{{product.normal.robuxAmount | localNumberFormat}}</h4> </div> <div ng-if="!layout.isPremiumUser" class="robux-button-container robux-downsell"> <button type="button" class="btn-control-md btn-full-width" ng-if="layout.isInAppMode" ng-href="{{getPurchaseUrl(product.normal)}}"> <span class="icon-robux-gray"></span><h4 class="inline-text">{{product.normal.robuxAmount | localNumberFormat}}</h4> </button> <button type="button" class="btn-control-md btn-full-width" ng-if="layout.isInDesktopMode" ng-click="buyClick(product.normal)"> <span class="icon-robux-gray"></span><h4 class="inline-text">{{product.normal.robuxAmount | localNumberFormat}}</h4> </button> </div> </div> <div class="robux-cell"> <div class="robux-button-container robux-upsell" ng-if="layout.isInAppMode"> <button ng-if="layout.isPremiumUser" type="button" class="btn-growth-md btn-full-width subscribed" ng-href="{{getPurchaseUrl(product.subscriptionOnly)}}"> <span class="icon-robux-white"></span><h4 class="inline-text">{{product.subscriptionOnly.robuxAmount | localNumberFormat}}</h4> </button> <button ng-if="!layout.isPremiumUser && product.subscription" type="button" class="btn-growth-md btn-full-width unsubscribed" ng-href="{{getPurchaseUrl(product.subscription)}}"> <span class="icon-robux-white"></span><h4 class="inline-text" ng-bind-html="\'Label.PriceMonth\'|translate: {robux: product.subscription.robuxAmount, subTextStart: \'<span class=font-small>\', subTextEnd: \'</span>\'}"></h4> </button> </div> <div class="robux-button-container robux-upsell" ng-if="layout.isInDesktopMode"> <button ng-if="layout.isPremiumUser" type="button" class="btn-growth-md btn-full-width subscribed" ng-click="buyClick(product.subscriptionOnly)"> <span class="icon-robux-white"></span><h4 class="inline-text">{{product.subscriptionOnly.robuxAmount | localNumberFormat}}</h4> </button> <button ng-if="!layout.isPremiumUser && product.subscription" type="button" class="btn-growth-md btn-full-width unsubscribed" ng-click="buyClick(product.subscription)"> <span class="icon-robux-white"></span><h4 class="inline-text" ng-bind-html="\'Label.PriceMonth\'|translate: {robux: product.subscription.robuxAmount, subTextStart: \'<span class=font-small>\', subTextEnd: \'</span>\'}"></h4> </button> </div> </div> '},7950:function(e){e.exports='<div class="robux-cell left"> <span class="icon-robux"></span><span class="font-header-1" ng-bind="product.normal.robuxAmount | localNumberFormat"></span> </div> <div class="robux-cell right"> <div class="robux-button-container robux-upsell" ng-if="layout.isInAppMode"> <button type="button" class="btn-growth-md btn-full-width subscribed" ng-href="{{layout.purchaseUrl}}"> <h4 class="inline-text"> {{product.normal.price.amount | currency: product.normal.price.currency.currencySymbol}} </h4> </button> </div> <div class="robux-button-container robux-upsell" ng-if="layout.isInDesktopMode"> <button type="button" class="btn-growth-md btn-full-width subscribed" ng-click="buyClick(product.normal)"> <h4 class="inline-text"> {{product.normal.price.amount | currency: product.normal.price.currency.currencySymbol}} </h4> </button> </div> </div> '},4582:function(e){e.exports='<div class="row premium-container" ng-modules="robloxApp, robux" ng-cloak> <div class="page-top"> <div class="app-top-header"> <h1 ng-bind="\'Action.BuyRobux\' | translate"></h1> <div class="top-subtitle"></div> </div> </div> <div class="page-content"> <div class="robux-upsell"> <div class="subscribe-header" ng-if="!isSubscriber && !isAmazonApp"> <h3 class="inline-text" ng-bind="\'Label.Subscribe\' | translate"></h3> <a ng-href="{{subscribePageUrl}}" class="inline-text text-link" ng-bind="\'Label.AndGetMore\' | translate"></a> </div> <table class="table" ng-if="!isSubscriber && !isAmazonApp"> <tbody> <tr robux-subscription-upsell-package product="robuxPageData.upsellPackage" is-upsell="true"></tr> </tbody> </table> <h3 ng-if="!isSubscriber" class="buy-robux-header" ng-bind="\'Label.BuyRobux\'|translate"></h3> <div ng-if="isSubscriber"> <h3 class="package-header" ng-bind="\'Label.Get10PercentOffRobux\'|translate"></h3> <h5 class="label-heading" ng-bind="\'Heading.PremiumRobuxDiscounts\'|translate"></h5> </div> <table class="table" ng-if="!isShowSuperValue"> <tbody> <tr class="robux-basic" ng-repeat="product in robuxPageData.robuxs | limitTo:3" robux-subscription-upsell-package product="product" is-upsell="false"></tr> </tbody> </table> <table class="table" ng-if="isShowSuperValue"> <tbody> <tr class="robux-basic" ng-repeat="product in robuxPageData.robuxs" robux-subscription-upsell-package product="product" is-upsell="false"></tr> </tbody> </table> </div> <div class="more-robux-button" ng-class="{\'hidden\': isShowSuperValue}" ng-if="robuxPageData.robuxs.length > 3"> <button class="btn-control-md btn-full-width" ng-hide="isShowSuperValue" ng-click="moreRobuxBtnClicked()" ng-bind="\'Label.WantMoreRobux\' | translate"> <span class="icon-down-16x16"></span> </button> </div> <div ng-if="!isStarcodeMobileEnabled"> <p class="text-footer legal-text-upsell-holder" ng-bind-html="\'Description.legalDisclosuresNewPremiumRobuxPage\'|translate: {privacyLinkStart, privacyLinkEnd, billingLinkStart, billingLinkEnd, termsLinkStart, termsLinkEnd}"></p> </div> </div> </div> '},1361:function(e){e.exports='<td class="robux-row price-column"> <h4 ng-if="!layout.isPremiumUser" ng-bind="product.normal.price.amount | currency: product.normal.price.currency.currencySymbol"></h4> <h4 ng-if="layout.isPremiumUser" ng-bind="product.subscriptionOnly.price.amount | currency: product.subscriptionOnly.price.currency.currencySymbol"></h4> <h4 ng-if="upsellPackage" ng-bind="upsellPackage.price.amount | currency: upsellPackage.price.currency.currencySymbol"></h4> </td> <td class="robux-row"> <div class="robux-button-container"> <a ng-if="layout.isPremiumUser && product.subscriptionOnly" type="button" class="btn-growth-lg btn-fixed-width-lg" ng-click="showPurchaseWarningModal(product.subscriptionOnly)"> <span class="icon-robux-white"></span> <h4 class="inline-text">{{product.subscriptionOnly.robuxAmount | localNumberFormat}}</h4> </a> <a ng-if="!layout.isPremiumUser && product.normal" type="button" class="btn-control-lg btn-fixed-width-lg" ng-click="showPurchaseWarningModal(product.normal)"> <span class="icon-robux-gray"></span> <h4 class="inline-text">{{product.normal.robuxAmount | localNumberFormat}}</h4> </a> <a ng-if="upsellPackage" type="button" class="btn-growth-lg btn-fixed-width-lg" ng-click="showPurchaseWarningModal(upsellPackage)"> <span class="icon-robux-white"></span> <h4 class="inline-text" ng-if="upsellPackage.isRecurring" ng-bind-html="\'Label.PriceMonth\'|translate: {robux: upsellPackage.robuxAmount, subTextStart: \'<span class=font-small>\', subTextEnd: \'</span>\'}"></h4> <h4 class="inline-text" ng-if="!upsellPackage.isRecurring" ng-bind="upsellPackage.robuxAmount"></h4> </a> </div> </td> '},8130:function(){},792:function(e){"use strict";e.exports=Roblox},5734:function(e){"use strict";e.exports=angular}},n={};function i(e){if(n[e])return n[e].exports;var r=n[e]={exports:{}};return t[e](r,r.exports,i),r.exports}i.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(r,{a:r}),r},i.d=function(e,r){for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){"use strict";var e=i(5734),r=i.n(e),t=i(726),n=i(5340),e=i(8130);i(2138),(0,t.importFilesUnderPath)(i(5639)),(0,t.importFilesUnderPath)(i(6990));var e=i(6296),o=(0,t.templateCacheGenerator)(r(),"robuxHtmlTemplateApp",e,null);r().element(function(){r().bootstrap("#robux-page",[n.Z.name,o.name])})}()}();
//# sourceMappingURL=/rbxcdn/js/fdd6e9a440dc8f5b2632-robux.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Robux");