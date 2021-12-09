import xss from '../../lib/xss';
import * as _ from 'lodash';
import * as model from '../../models';
import formatView from '../../lib/formatView';
import { IUserInfo } from '../../middleware';
import moment = require('moment');
import footer from '../partials/footer';
import { headerCss } from '../partials/header';
import systemAlert from '../partials/systemAlert';
import convertToSeoName from '../../lib/convertToSeoName';
import { encode } from 'html-entities';

export const makeProfile = (
	session: IUserInfo,
	profileData: {
		userId: number;
		username: string;
		description: string;
		imageUrl: string;
		wornAssets: any[];
		created: string;
		friendshipStatus: string;
		friends: any[];
		previousUsernames: string[];
		status?: { content: string | null; createdAt: string };
		onlineAt?: string;
		followers?: number;
		following?: number;
		canViewInventory?: boolean;
		isFollowing?: boolean;
		gameData?: { userId: number; universeId: number; placeId: number };
		gameDetails?: { name: string };
		places: model.Games.PlaceData[];
	}
) => {
	const status = profileData.status && profileData.status.content;
	const previousUsernames = profileData.previousUsernames;
	const isOwnProfile = session.userId === profileData.userId;
	const friendsCount = profileData.friends.length;
	const friendshipStatus = profileData.friendshipStatus as
		| 'Friends'
		| 'NotFriends'
		| 'RequestReceived'
		| 'RequestSent';
	const imageUrl = profileData.imageUrl;
	const followersCount = profileData.followers || 0;
	const followingsCount = profileData.following || 0;
	const isOnline =
		profileData.onlineAt &&
		moment(profileData.onlineAt).isSameOrAfter(
			moment().subtract(5, 'minutes')
		);
	const isFollowing = profileData.isFollowing || false;
	const areFriends = friendshipStatus === 'Friends';
	const canAddFriend = friendshipStatus === 'NotFriends';
	let canTrade = true;
	let canViewInventory = profileData.canViewInventory || false;
	let canMessage = true;
	if (isOwnProfile) {
		canTrade = false;
		canViewInventory = true;
		canMessage = false;
	}

	const placeId = profileData.gameData && profileData.gameData.placeId || 1;
	const incomingFriendRequest = friendshipStatus === 'RequestReceived';
	const canSendRequest =
		friendshipStatus !== 'RequestSent' &&
		friendshipStatus !== 'RequestReceived' &&
		friendshipStatus !== 'Friends';

	const isPremium = true;
	const wearingChunked = _.chunk(profileData.wornAssets, 8);
	let data = `<!DOCTYPE html><!--[if IE 8]><html class=ie8 ng-app=robloxApp><![endif]--> <!--[if gt IE 8]><!--><html><!--<![endif]--><head data-machine-id=WEB78><title>Profile - Roblox</title><meta http-equiv=X-UA-Compatible content="IE=edge,requiresActiveX=true"><meta charset=UTF-8><meta name=viewport content="width=device-width, initial-scale=1"><meta name=author content="Roblox Corporation"><meta name=description content="${profileData.username
		} is one of the millions playing, creating and exploring the endless possibilities of Roblox. Join ${profileData.username
		} on Roblox and explore together!"><meta name=keywords content="free games,online games,building games,virtual worlds,free mmo,gaming cloud,physics engine"><meta name=apple-itunes-app content="app-id=431946152"><meta id=RobotsMeta name=robots content=noindex><script type=application/ld+json>
    {
    "@context" : "http://schema.org",
    "@type" : "Organization",
    "name" : "Roblox",
    "url" : "https://www.roblox.com/",
    "logo": "/rbxcdn/images/c69b74f49e785df33b732273fad9dbe0.png",
    "sameAs" : [
    "https://www.facebook.com/ROBLOX/",
    "https://twitter.com/roblox",
    "https://www.linkedin.com/company/147977",
    "https://www.instagram.com/roblox/",
    "https://www.youtube.com/user/roblox",
    "https://plus.google.com/+roblox",
    "https://www.twitch.tv/roblox"
    ]
    }
</script>
<style>

${isOwnProfile
			? `
#profile-message-btn, li#profile-message-icon {
    display: none;
}
.btn-friends.ng-scope {
    display: none;
}

`
			: ''
		}
</style>

${headerCss}


<meta property=og:site_name content=ROBLOX><meta property=og:title content="${profileData.username
		}'s Profile"><meta property=og:type content=profile><meta property=og:url content=https://www.roblox.com/users/${profileData.userId
		}/profile><meta property=og:description content="${profileData.username
		} is one of the millions playing, creating and exploring the endless possibilities of Roblox. Join ${profileData.username
		} on Roblox and explore together!"><meta property=og:image content=${imageUrl}><meta property=fb:app_id content=190191627665278><meta name=twitter:card content=summary><meta name=twitter:site content=@Roblox><meta name=twitter:title content="${profileData.username
		}'s Profile"><meta name=twitter:description content="${profileData.username
		} is one of the millions playing, creating and exploring the endless possibilities of Roblox. Join ${profileData.username
		} on Roblox and explore together!"><meta name=twitter:creator><meta name=twitter:image1 content=${imageUrl}><meta name=twitter:app:country content=US><meta name=twitter:app:name:iphone content="ROBLOX Mobile"><meta name=twitter:app:id:iphone content=431946152><meta name=twitter:app:url:iphone><meta name=twitter:app:name:ipad content="ROBLOX Mobile"><meta name=twitter:app:id:ipad content=431946152><meta name=twitter:app:url:ipad><meta name=twitter:app:name:googleplay content=ROBLOX><meta name=twitter:app:id:googleplay content=com.roblox.client><meta name=twitter:app:url:googleplay><meta name=user-data data-userid=1335179568 data-name=discofurrr data-displayname=discofurrr data-isunder13=false data-created="11/26/2019 5:03:41 PM" data-ispremiumuser=false><meta name=locale-data data-language-code=en_us data-language-name=English><meta name=device-meta data-device-type=computer data-is-in-app=false data-is-desktop=true data-is-phone=false data-is-tablet=false data-is-console=false data-is-android-app=false data-is-ios-app=false data-is-uwp-app=false data-is-xbox-app=false data-is-amazon-app=false data-is-win32-app=false data-is-studio=false data-is-game-client-browser=false data-is-ios-device=false data-is-android-device=false data-is-universal-app=false data-app-type=unknown><meta name=environment-meta data-is-testing-site=false>
		
		<metaflags />
		
		<meta name=page-meta data-internal-page-name=Profile><script>var Roblox=Roblox||{};Roblox.BundleVerifierConstants={isMetricsApiEnabled:true,eventStreamUrl:"//ecsv2.roblox.com/pe?t=diagnostic",deviceType:"Computer",cdnLoggingEnabled:JSON.parse("true")};</script><script>var Roblox=Roblox||{};Roblox.BundleDetector=(function(){var isMetricsApiEnabled=Roblox.BundleVerifierConstants&&Roblox.BundleVerifierConstants.isMetricsApiEnabled;var loadStates={loadSuccess:"loadSuccess",loadFailure:"loadFailure",executionFailure:"executionFailure"};var bundleContentTypes={javascript:"javascript",css:"css"};var ephemeralCounterNames={cdnPrefix:"CDNBundleError_",unknown:"CDNBundleError_unknown",cssError:"CssBundleError",jsError:"JavascriptBundleError",jsFileError:"JsFileExecutionError",resourceError:"ResourcePerformance_Error",resourceLoaded:"ResourcePerformance_Loaded"};return{jsBundlesLoaded:{},bundlesReported:{},counterNames:ephemeralCounterNames,loadStates:loadStates,bundleContentTypes:bundleContentTypes,timing:undefined,setTiming:function(windowTiming){this.timing=windowTiming;},getLoadTime:function(){if(this.timing&&this.timing.domComplete){return this.getCurrentTime()-this.timing.domComplete;}},getCurrentTime:function(){return new Date().getTime();},getCdnProviderName:function(bundleUrl,callBack){if(Roblox.BundleVerifierConstants.cdnLoggingEnabled){var xhr=new XMLHttpRequest();xhr.open('GET',bundleUrl,true);xhr.onreadystatechange=function(){if(xhr.readyState===xhr.HEADERS_RECEIVED){try{var headerValue=xhr.getResponseHeader("rbx-cdn-provider");if(headerValue){callBack(headerValue);}else{callBack();}}catch(e){callBack();}}};xhr.onerror=function(){callBack();};xhr.send();}else{callBack();}},getCdnProviderAndReportMetrics:function(bundleUrl,bundleName,loadState,bundleContentType){this.getCdnProviderName(bundleUrl,function(cdnProviderName){Roblox.BundleDetector.reportMetrics(bundleUrl,bundleName,loadState,bundleContentType,cdnProviderName);});},reportMetrics:function(bundleUrl,bundleName,loadState,bundleContentType,cdnProviderName){if(!isMetricsApiEnabled||!bundleUrl||!loadState||!loadStates.hasOwnProperty(loadState)||!bundleContentType||!bundleContentTypes.hasOwnProperty(bundleContentType)){return;}
var xhr=new XMLHttpRequest();var metricsApiUrl=(Roblox.EnvironmentUrls&&Roblox.EnvironmentUrls.metricsApi)||"https://metrics.roblox.com";xhr.open("POST",metricsApiUrl+"/v1/bundle-metrics/report",true);xhr.setRequestHeader("Content-Type","application/json");xhr.withCredentials=true;xhr.send(JSON.stringify({bundleUrl:bundleUrl,bundleName:bundleName||"",bundleContentType:bundleContentType,loadState:loadState,cdnProviderName:cdnProviderName,loadTimeInMilliseconds:this.getLoadTime()||0}));},logToEphemeralStatistics:function(sequenceName,value){var deviceType=Roblox.BundleVerifierConstants.deviceType;sequenceName+="_"+deviceType;var xhr=new XMLHttpRequest();xhr.open('POST','/game/report-stats?name='+sequenceName+"&value="+value,true);xhr.withCredentials=true;xhr.send();},logToEphemeralCounter:function(ephemeralCounterName){var deviceType=Roblox.BundleVerifierConstants.deviceType;ephemeralCounterName+="_"+deviceType;var xhr=new XMLHttpRequest();xhr.open('POST','/game/report-event?name='+ephemeralCounterName,true);xhr.withCredentials=true;xhr.send();},logToEventStream:function(failedBundle,ctx,cdnProvider,status){var esUrl=Roblox.BundleVerifierConstants.eventStreamUrl,currentPageUrl=encodeURIComponent(window.location.href);var deviceType=Roblox.BundleVerifierConstants.deviceType;ctx+="_"+deviceType;var duration=0;if(window.performance){var perfTiming=window.performance.getEntriesByName(failedBundle);if(perfTiming.length>0){var data=perfTiming[0];duration=data.duration||0;}}
var params="&evt=webBundleError&url="+currentPageUrl+"&ctx="+ctx+"&fileSourceUrl="+encodeURIComponent(failedBundle)+"&cdnName="+(cdnProvider||"unknown")+"&statusCode="+(status||"unknown")+"&loadDuration="+Math.floor(duration);var img=new Image();img.src=esUrl+params;},getCdnInfo:function(failedBundle,ctx,fileType){if(Roblox.BundleVerifierConstants.cdnLoggingEnabled){var xhr=new XMLHttpRequest();var counter=this.counterNames;xhr.open('GET',failedBundle,true);var cdnProvider;xhr.onreadystatechange=function(){if(xhr.readyState===xhr.HEADERS_RECEIVED){cdnProvider=xhr.getResponseHeader("rbx-cdn-provider");if(cdnProvider&&cdnProvider.length>0){Roblox.BundleDetector.logToEphemeralCounter(counter.cdnPrefix+cdnProvider+"_"+fileType);}
else{Roblox.BundleDetector.logToEphemeralCounter(counter.unknown+"_"+fileType);}}
else if(xhr.readyState===xhr.DONE){Roblox.BundleDetector.logToEventStream(failedBundle,ctx,cdnProvider,xhr.status);}};xhr.onerror=function(){Roblox.BundleDetector.logToEphemeralCounter(counter.unknown+"_"+fileType);Roblox.BundleDetector.logToEventStream(failedBundle,ctx,counter.unknown);};xhr.send();}
else{this.logToEventStream(failedBundle,ctx);}},reportResourceError:function(resourceName){var ephemeralCounterName=this.counterNames.resourceError+"_"+resourceName;this.logToEphemeralCounter(ephemeralCounterName);},reportResourceLoaded:function(resourceName){var loadTimeInMs=this.getLoadTime();if(loadTimeInMs){var sequenceName=this.counterNames.resourceLoaded+"_"+resourceName;this.logToEphemeralStatistics(sequenceName,loadTimeInMs);}},reportBundleError:function(bundleTag){var ephemeralCounterName,failedBundle,ctx,contentType;if(bundleTag.rel&&bundleTag.rel==="stylesheet"){ephemeralCounterName=this.counterNames.cssError;failedBundle=bundleTag.href;ctx="css";contentType=bundleContentTypes.css;}else{ephemeralCounterName=this.counterNames.jsError;failedBundle=bundleTag.src;ctx="js";contentType=bundleContentTypes.javascript;}
this.bundlesReported[failedBundle]=true;this.logToEphemeralCounter(ephemeralCounterName);this.getCdnInfo(failedBundle,ctx,ctx);var bundleName;if(bundleTag.dataset){bundleName=bundleTag.dataset.bundlename;}
else{bundleName=bundleTag.getAttribute('data-bundlename');}
this.getCdnProviderAndReportMetrics(failedBundle,bundleName,loadStates.loadFailure,contentType);},bundleDetected:function(bundleName){this.jsBundlesLoaded[bundleName]=true;},verifyBundles:function(document){var ephemeralCounterName=this.counterNames.jsFileError,eventContext=ephemeralCounterName;var scripts=(document&&document.scripts)||window.document.scripts;var errorsList=[];var bundleName;var monitor;for(var i=0;i<scripts.length;i++){var item=scripts[i];if(item.dataset){bundleName=item.dataset.bundlename;monitor=item.dataset.monitor;}
else{bundleName=item.getAttribute('data-bundlename');monitor=item.getAttribute('data-monitor');}
if(item.src&&monitor&&bundleName){if(!Roblox.BundleDetector.jsBundlesLoaded.hasOwnProperty(bundleName)){errorsList.push(item);}}}
if(errorsList.length>0){for(var j=0;j<errorsList.length;j++){var script=errorsList[j];if(!this.bundlesReported[script.src]){this.logToEphemeralCounter(ephemeralCounterName);this.getCdnInfo(script.src,eventContext,'js');if(script.dataset){bundleName=script.dataset.bundlename;}
else{bundleName=script.getAttribute('data-bundlename');}
this.getCdnProviderAndReportMetrics(script.src,bundleName,loadStates.executionFailure,bundleContentTypes.javascript);}}}}};})();window.addEventListener("load",function(evt){Roblox.BundleDetector.verifyBundles();});Roblox.BundleDetector.setTiming(window.performance.timing);</script><link href=/rbxcdn/images/23421382939a9f4ae8bbe60dbe2a3e7e.ico.gzip rel=icon><link onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) rel=stylesheet data-bundlename=StyleGuide href=/rbxcdn/css/e512b4bbcd60506e5c5960f3cfcc8cf2ddeaa79c23a1be3e165c396a4810e7f2.css><link onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) rel=stylesheet data-bundlename=Thumbnails href=/rbxcdn/css/9517d686dc47015c200496d77e2b18146ee37652d18e25ecf9e1ed230310ea13.css><link onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) rel=stylesheet data-bundlename=VerificationUpsell href=/rbxcdn/css/4cfc9413aaac922000f010ba651f264e59a200d6062d41f8196017ade0094116.css>

<link onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) rel=stylesheet data-bundlename=Footer href=/rbxcdn/css/55b250e8473888792f885d898973a13692fb22157baf61aaffa62ce4545f3408.css><link rel=canonical href=https://www.roblox.com/users/${profileData.userId
		}/profile><link onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) rel=stylesheet href=/rbxcdn/static/css/leanbase___3678d89e5ec3f4d8c65d863691f31de2_m.css/fetch><link onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) rel=stylesheet href=/rbxcdn/static/css/page___ac9b13e40450e952341c3607f15b592d_m.css/fetch><link onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) rel=stylesheet data-bundlename=PeopleList href=/rbxcdn/css/2a5e8fb167ab524b64008fcf121e842ea7fc4d1038018510a7c4e843601ccc2f.css><link onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) rel=stylesheet data-bundlename=Aliases href=/rbxcdn/css/953a9da513bd8e7ad185ac5197c1c7cdf2951cb17ffdf79b51e6b237c64255d3.css><link onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) rel=stylesheet data-bundlename=GroupsList href=/rbxcdn/css/f371051c904b09311eced9149fb0784291449c338af2ce585eda1474713acc9e.css><link onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) rel=stylesheet data-bundlename=ProfileBadges href=/rbxcdn/css/9a71331ed246c4c79ccb18c8582bb1366a2a66843c0776e767b0b48634d36dfa.css><link onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) rel=stylesheet data-bundlename=ProfileStatistics href=/rbxcdn/css/b52536edd49882b6c7ffbb39e44d25c8f3a96eceb0bf94b4413e6ae9f6e2477b.css><link onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) rel=stylesheet data-bundlename=RobuxIcon href=/rbxcdn/css/2f599b9e9ca20ee3c155684adbf1cdcb7220bab681b55b4505123a0c34e81969.css><link onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) rel=stylesheet data-bundlename=NotificationStream href=/rbxcdn/css/b4eb6c5c73a2533aa2d99545849f741ee91a7ac409157e9a8005523abd698e29.css><link onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) rel=stylesheet data-bundlename=Chat href=/rbxcdn/css/c0da40b3a6667e911346e3adfbb541802f9883b9c3933e6110ea1160109ac987.css><script>var Roblox=Roblox||{};Roblox.RealTimeSettings=Roblox.RealTimeSettings||{NotificationsEndpoint:"https://realtime.roblox.com",MaxConnectionTime:"21600000",IsEventPublishingEnabled:false,IsDisconnectOnSlowConnectionDisabled:true,IsSignalRClientTransportRestrictionEnabled:true,IsLocalStorageInRealTimeEnabled:true,IsDebuggerEnabled:"False",IsSequenceNumberResetEnabled:true}</script><script>var Roblox=Roblox||{};Roblox.EnvironmentUrls=Roblox.EnvironmentUrls||{};Roblox.EnvironmentUrls={"abtestingApiSite":"https://abtesting.roblox.com","accountInformationApi":"https://accountinformation.roblox.com","accountSettingsApi":"https://accountsettings.roblox.com","adConfigurationApi":"https://adconfiguration.roblox.com","adsApi":"https://ads.roblox.com","apiGatewayUrl":"https://apis.roblox.com","apiProxyUrl":"https://api.roblox.com","assetDeliveryApi":"https://assetdelivery.roblox.com","authApi":"https://auth.roblox.com","authAppSite":"https://authsite.roblox.com","avatarApi":"https://avatar.roblox.com","badgesApi":"https://badges.roblox.com","billingApi":"https://billing.roblox.com","captchaApi":"https://captcha.roblox.com","catalogApi":"https://catalog.roblox.com","chatApi":"https://chat.roblox.com","contactsApi":"https://contacts.roblox.com","contentStoreApi":"https://contentstore.roblox.com","developApi":"https://develop.roblox.com","domain":"roblox.com","economyApi":"https://economy.roblox.com","economycreatorstatsApi":"https://economycreatorstats.roblox.com","engagementPayoutsApi":"https://engagementpayouts.roblox.com","followingsApi":"https://followings.roblox.com","friendsApi":"https://friends.roblox.com","friendsAppSite":"https://friendsite.roblox.com","gamesApi":"https://games.roblox.com","gameInternationalizationApi":"https://gameinternationalization.roblox.com","groupsApi":"https://groups.roblox.com","inventoryApi":"https://inventory.roblox.com","itemConfigurationApi":"https://itemconfiguration.roblox.com","localeApi":"https://locale.roblox.com","localizationTablesApi":"https://localizationtables.roblox.com","metricsApi":"https://metrics.roblox.com","midasApi":"https://midas.roblox.com","notificationApi":"https://notifications.roblox.com","premiumFeaturesApi":"https://premiumfeatures.roblox.com","presenceApi":"https://presence.roblox.com","publishApi":"https://publish.roblox.com","screenTimeApi":"https://apis.rcs.roblox.com/screen-time-api","thumbnailsApi":"https://thumbnails.roblox.com","tradesApi":"https://trades.roblox.com","translationRolesApi":"https://translationroles.roblox.com","universalAppConfigurationApi":"https://apis.roblox.com/universal-app-configuration","usersApi":"https://users.roblox.com","voiceApi":"https://voice.roblox.com","websiteUrl":"https://www.roblox.com","privateMessagesApi":"https://privatemessages.roblox.com","shareApi":"https://share.roblox.com","chatModerationApi":"https://chatmoderation.roblox.com","userModerationApi":"https://usermoderation.roblox.com","groupsModerationApi":"https://groupsmoderation.roblox.com","twoStepVerificationApi":"https://twostepverification.roblox.com"};var additionalUrls={amazonStoreLink:"https://www.amazon.com/Roblox-Corporation/dp/B00NUF4YOA",appProtocolUrl:"robloxmobile://",appStoreLink:"https://itunes.apple.com/us/app/roblox-mobile/id431946152",googlePlayStoreLink:"https://play.google.com/store/apps/details?id=com.roblox.client&amp;hl=en",iosAppStoreLink:"https://itunes.apple.com/us/app/roblox-mobile/id431946152",windowsStoreLink:"https://www.microsoft.com/en-us/store/games/roblox/9nblgggzm6wm",xboxStoreLink:"https://www.microsoft.com/en-us/p/roblox/bq1tn1t79v9k",amazonWebStoreLink:"https://www.amazon.com/roblox?&amp;_encoding=UTF8&amp;tag=r05d13-20&amp;linkCode=ur2&amp;linkId=4ba2e1ad82f781c8e8cc98329b1066d0&amp;camp=1789&amp;creative=9325"}
for(var urlName in additionalUrls){Roblox.EnvironmentUrls[urlName]=additionalUrls[urlName];}</script><script>var Roblox=Roblox||{};Roblox.GaEventSettings={gaDFPPreRollEnabled:"false"==="true",gaLaunchAttemptAndLaunchSuccessEnabled:"false"==="true",gaPerformanceEventEnabled:"false"==="true"};</script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=headerinit src=/rbxcdn/js/7bee61aedcbb4773d878992153fa64e0.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=Polyfill src=/rbxcdn/js/4340261c6f9296c0727dc8605acada61ac3db48cad8da1cf5b25f4ac3ab18d7b.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=HeaderScripts src=/rbxcdn/js/db5218c3fbccfaa300942c9c11f581d29079dcf3d27e2b69c410f10ba3aff8d4.js></script><meta name=sentry-meta data-env-name=production data-dsn=https://6750adeb1b1348e4a10b13e726d5c10b@sentry.io/1539367 data-sample-rate=0.01><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=Sentry src=/rbxcdn/js/edc66704bd1974195d8c60f4a163441bec82f1bcb11c492e7df07c43f45a4d49.js></script><meta name=roblox-tracer-meta-data data-access-token=S3EXjCZQQr6OixnmKu+hoa3OSfpvPP5qgU0esiWgwreFUUMBnPhEaoS5yIIrf9bdYlSgW0XKCb1So9Rhtj1eMzt/MJWcyKZ4TwIckHVj data-service-name=Web data-tracer-enabled=false data-api-sites-request-allow-list=friends.roblox.com,chat.roblox.com,thumbnails.roblox.com,games.roblox.com data-sample-rate=0 data-is-instrument-page-performance-enabled=false><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=RobloxTracer src=/rbxcdn/js/a168257175fe69cdb0762a3b8ca5d0a5fd625f77c027d5e4cef7f90a1602d704.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=RealTime src=/rbxcdn/js/89f30f6701e04efb9dad1b1fb75ebd7cfe55257af8c8cefbd609039c4d66d8a8.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=CrossTabCommunication src=/rbxcdn/js/948f3bfc9bbd152f537592b51c1a7765cdc0dfc538d74b7e5fc696c476c8792b.js></script><meta name=viewport content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"><script>var Roblox=Roblox||{};Roblox.AdsHelper=Roblox.AdsHelper||{};Roblox.AdsLibrary=Roblox.AdsLibrary||{};Roblox.AdsHelper.toggleAdsSlot=function(slotId,GPTRandomSlotIdentifier){var gutterAdsEnabled=false;if(gutterAdsEnabled){googletag.display(GPTRandomSlotIdentifier);return;}
if(typeof slotId!=='undefined'&&slotId&&slotId.length>0){var slotElm=$("#"+slotId);if(slotElm.is(":visible")){googletag.display(GPTRandomSlotIdentifier);}else{var adParam=Roblox.AdsLibrary.adsParameters[slotId];if(adParam){adParam.template=slotElm.html();slotElm.empty();}}}}</script><script>if(Roblox&&Roblox.Performance){Roblox.Performance.setPerformanceMark("html_head");}</script><!--[if lt IE 9]><script src=//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js></script><script src=//oss.maxcdn.com/respond/1.4.2/respond.min.js></script><![endif]--><script>var Roblox=Roblox||{};(function(){var dnt=navigator.doNotTrack||window.doNotTrack||navigator.msDoNotTrack;if(typeof window.external!=="undefined"&&typeof window.external.msTrackingProtectionEnabled!=="undefined"){dnt=dnt||window.external.msTrackingProtectionEnabled();}
Roblox.browserDoNotTrack=dnt=="1"||dnt=="yes"||dnt===true;})();</script><script>var _gaq=_gaq||[];window.GoogleAnalyticsDisableRoblox2=true;_gaq.push(['b._setAccount','UA-486632-1']);_gaq.push(['b._setSampleRate','10']);_gaq.push(['b._setCampSourceKey','rbx_source']);_gaq.push(['b._setCampMediumKey','rbx_medium']);_gaq.push(['b._setCampContentKey','rbx_campaign']);_gaq.push(['b._setDomainName','roblox.com']);_gaq.push(['b._setCustomVar',1,'Visitor','Member',2]);_gaq.push(['b._setPageGroup',1,'Profile']);_gaq.push(['b._trackPageview']);_gaq.push(['c._setAccount','UA-26810151-2']);_gaq.push(['c._setSampleRate','1']);_gaq.push(['c._setDomainName','roblox.com']);_gaq.push(['c._setPageGroup',1,'Profile']);(function(){if(!Roblox.browserDoNotTrack){var ga=document.createElement('script');ga.type='text/javascript';ga.async=true;ga.src=('https:'==document.location.protocol?'https://ssl':'http://www')+'.google-analytics.com/ga.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga,s);}})();</script><script async src="https://www.googletagmanager.com/gtag/js?id=AW-1065449093"></script><script>var accountCode="AW-1065449093";var signupConversionEventKey="wmuJCO3CZBCF7YX8Aw";var webPurchaseConversionEventKey="XDQ_CJme6s0BEIXthfwD";window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag.conversionEvents={signupConversionEvent:accountCode+'/'+signupConversionEventKey,webPurchaseConversionEvent:accountCode+'/'+webPurchaseConversionEventKey}
gtag('js',new Date());gtag('config',accountCode);</script><script>if(Roblox&&Roblox.EventStream){Roblox.EventStream.Init("//ecsv2.roblox.com/www/e.png","//ecsv2.roblox.com/www/e.png","//ecsv2.roblox.com/pe?t=studio","//ecsv2.roblox.com/pe?t=diagnostic");}</script><script>if(Roblox&&Roblox.PageHeartbeatEvent){Roblox.PageHeartbeatEvent.Init([2,8,20,60]);}</script><script>var __nspid="alpts0";var __nsptags=[];(function(w,d){var x=function(){var j=d.createElement("script");j.type="text/javascript";j.async=true;j.src="http"+("https:"===d.location.protocol?"s://cs":"://c")+".ns1p.net/p.js?a="+__nspid;d.body.appendChild(j);}
if(w.addEventListener){w.addEventListener("load",x,false);}
else if(w.attachEvent){w.attachEvent("onload",x);}
else{w.onload=x;}}(window,document));</script><script>if(typeof(Roblox)==="undefined"){Roblox={};}
Roblox.Endpoints=Roblox.Endpoints||{};Roblox.Endpoints.Urls=Roblox.Endpoints.Urls||{};Roblox.Endpoints.Urls['/asset/']='https://assetgame.roblox.com/asset/';Roblox.Endpoints.Urls['/client-status/set']='https://www.roblox.com/client-status/set';Roblox.Endpoints.Urls['/client-status']='https://www.roblox.com/client-status';Roblox.Endpoints.Urls['/game/']='https://assetgame.roblox.com/game/';Roblox.Endpoints.Urls['/game/edit.ashx']='https://assetgame.roblox.com/game/edit.ashx';Roblox.Endpoints.Urls['/game/placelauncher.ashx']='https://assetgame.roblox.com/game/placelauncher.ashx';Roblox.Endpoints.Urls['/game/preloader']='https://assetgame.roblox.com/game/preloader';Roblox.Endpoints.Urls['/game/report-stats']='https://assetgame.roblox.com/game/report-stats';Roblox.Endpoints.Urls['/game/report-event']='https://assetgame.roblox.com/game/report-event';Roblox.Endpoints.Urls['/game/updateprerollcount']='https://assetgame.roblox.com/game/updateprerollcount';Roblox.Endpoints.Urls['/login/default.aspx']='https://www.roblox.com/login/default.aspx';Roblox.Endpoints.Urls['/my/avatar']='https://www.roblox.com/my/avatar';Roblox.Endpoints.Urls['/my/money.aspx']='https://www.roblox.com/my/money.aspx';Roblox.Endpoints.Urls['/navigation/userdata']='https://www.roblox.com/navigation/userdata';Roblox.Endpoints.Urls['/chat/chat']='https://www.roblox.com/chat/chat';Roblox.Endpoints.Urls['/chat/data']='https://www.roblox.com/chat/data';Roblox.Endpoints.Urls['/friends/list']='https://www.roblox.com/friends/list';Roblox.Endpoints.Urls['/navigation/getcount']='https://www.roblox.com/navigation/getCount';Roblox.Endpoints.Urls['/regex/email']='https://www.roblox.com/regex/email';Roblox.Endpoints.Urls['/catalog/browse.aspx']='https://www.roblox.com/catalog/browse.aspx';Roblox.Endpoints.Urls['/catalog/html']='https://search.roblox.com/catalog/html';Roblox.Endpoints.Urls['/catalog/json']='https://search.roblox.com/catalog/json';Roblox.Endpoints.Urls['/catalog/contents']='https://search.roblox.com/catalog/contents';Roblox.Endpoints.Urls['/catalog/lists.aspx']='https://search.roblox.com/catalog/lists.aspx';Roblox.Endpoints.Urls['/catalog/items']='https://search.roblox.com/catalog/items';Roblox.Endpoints.Urls['/asset-hash-thumbnail/image']='https://assetgame.roblox.com/asset-hash-thumbnail/image';Roblox.Endpoints.Urls['/asset-hash-thumbnail/json']='https://assetgame.roblox.com/asset-hash-thumbnail/json';Roblox.Endpoints.Urls['/asset-thumbnail-3d/json']='https://assetgame.roblox.com/asset-thumbnail-3d/json';Roblox.Endpoints.Urls['/asset-thumbnail/image']='https://assetgame.roblox.com/asset-thumbnail/image';Roblox.Endpoints.Urls['/asset-thumbnail/json']='https://assetgame.roblox.com/asset-thumbnail/json';Roblox.Endpoints.Urls['/asset-thumbnail/url']='https://assetgame.roblox.com/asset-thumbnail/url';Roblox.Endpoints.Urls['/asset/request-thumbnail-fix']='https://assetgame.roblox.com/asset/request-thumbnail-fix';Roblox.Endpoints.Urls['/avatar-thumbnail-3d/json']='https://www.roblox.com/avatar-thumbnail-3d/json';Roblox.Endpoints.Urls['/avatar-thumbnail/image']='https://www.roblox.com/avatar-thumbnail/image';Roblox.Endpoints.Urls['/avatar-thumbnail/json']='https://www.roblox.com/avatar-thumbnail/json';Roblox.Endpoints.Urls['/avatar-thumbnails']='https://www.roblox.com/avatar-thumbnails';Roblox.Endpoints.Urls['/avatar/request-thumbnail-fix']='https://www.roblox.com/avatar/request-thumbnail-fix';Roblox.Endpoints.Urls['/bust-thumbnail/json']='https://www.roblox.com/bust-thumbnail/json';Roblox.Endpoints.Urls['/group-thumbnails']='https://www.roblox.com/group-thumbnails';Roblox.Endpoints.Urls['/groups/getprimarygroupinfo.ashx']='https://www.roblox.com/groups/getprimarygroupinfo.ashx';Roblox.Endpoints.Urls['/headshot-thumbnail/json']='https://www.roblox.com/headshot-thumbnail/json';Roblox.Endpoints.Urls['/item-thumbnails']='https://www.roblox.com/item-thumbnails';Roblox.Endpoints.Urls['/outfit-thumbnail/json']='https://www.roblox.com/outfit-thumbnail/json';Roblox.Endpoints.Urls['/place-thumbnails']='https://www.roblox.com/place-thumbnails';Roblox.Endpoints.Urls['/thumbnail/asset/']='https://www.roblox.com/thumbnail/asset/';Roblox.Endpoints.Urls['/thumbnail/avatar-headshot']='https://www.roblox.com/thumbnail/avatar-headshot';Roblox.Endpoints.Urls['/thumbnail/avatar-headshots']='https://www.roblox.com/thumbnail/avatar-headshots';Roblox.Endpoints.Urls['/thumbnail/user-avatar']='https://www.roblox.com/thumbnail/user-avatar';Roblox.Endpoints.Urls['/thumbnail/resolve-hash']='https://www.roblox.com/thumbnail/resolve-hash';Roblox.Endpoints.Urls['/thumbnail/place']='https://www.roblox.com/thumbnail/place';Roblox.Endpoints.Urls['/thumbnail/get-asset-media']='https://www.roblox.com/thumbnail/get-asset-media';Roblox.Endpoints.Urls['/thumbnail/remove-asset-media']='https://www.roblox.com/thumbnail/remove-asset-media';Roblox.Endpoints.Urls['/thumbnail/set-asset-media-sort-order']='https://www.roblox.com/thumbnail/set-asset-media-sort-order';Roblox.Endpoints.Urls['/thumbnail/place-thumbnails']='https://www.roblox.com/thumbnail/place-thumbnails';Roblox.Endpoints.Urls['/thumbnail/place-thumbnails-partial']='https://www.roblox.com/thumbnail/place-thumbnails-partial';Roblox.Endpoints.Urls['/thumbnail_holder/g']='https://www.roblox.com/thumbnail_holder/g';Roblox.Endpoints.Urls['/users/{id}/profile']='https://www.roblox.com/users/{id}/profile';Roblox.Endpoints.Urls['/service-workers/push-notifications']='https://www.roblox.com/service-workers/push-notifications';Roblox.Endpoints.Urls['/notification-stream/notification-stream-data']='https://www.roblox.com/notification-stream/notification-stream-data';Roblox.Endpoints.Urls['/api/friends/acceptfriendrequest']='https://www.roblox.com/api/friends/acceptfriendrequest';Roblox.Endpoints.Urls['/api/friends/declinefriendrequest']='https://www.roblox.com/api/friends/declinefriendrequest';Roblox.Endpoints.Urls['/authentication/is-logged-in']='https://www.roblox.com/authentication/is-logged-in';Roblox.Endpoints.addCrossDomainOptionsToAllRequests=true;</script><script>if(typeof(Roblox)==="undefined"){Roblox={};}
Roblox.Endpoints=Roblox.Endpoints||{};Roblox.Endpoints.Urls=Roblox.Endpoints.Urls||{};</script><script>Roblox=Roblox||{};Roblox.AbuseReportPVMeta={desktopEnabled:true,phoneEnabled:false,inAppEnabled:false};</script><meta name=thumbnail-meta-data data-is-webapp-cache-enabled=False data-webapp-cache-expirations-timespan=00:01:00 data-request-min-cooldown=1000 data-request-max-cooldown=30000 data-request-max-retry-attempts=5 data-request-batch-size=100 data-thumbnail-metrics-sample-size=50><body id=rbx-body class="rbx-body light-theme gotham-font" data-performance-relative-value=0.005 data-internal-page-name=Profile data-send-event-percentage=0><div id=roblox-linkify data-enabled=true data-regex="(https?\:\/\/)?(?:www\.)?([a-z0-9-]{2,}\.)*(((m|de|www|web|api|blog|wiki|corp|polls|bloxcon|developer|devforum|forum|status)\.roblox\.com|robloxlabs\.com)|(www\.shoproblox\.com)|(roblox\.status\.io)|(rblx\.co)|help\.roblox\.com(?![A-Za-z0-9\/.]*\/attachments\/))(?!\/[A-Za-z0-9-+&amp;@#\/=~_|!:,.;]*%)((\/[A-Za-z0-9-+&amp;@#\/%?=~_|!:,.;]*)|(?=\s|\b))" data-regex-flags=gm data-as-http-regex=(([^.]help|polls)\.roblox\.com)></div><div id=image-retry-data data-image-retry-max-times=30 data-image-retry-timer=500 data-ga-logging-percent=10></div><div id=http-retry-data data-http-retry-max-timeout=0 data-http-retry-base-timeout=0 data-http-retry-max-times=1></div><div id=TosAgreementInfo data-terms-check-needed=False></div><div id=fb-root></div><div id=wrap class="wrap no-gutter-ads logged-in" data-gutter-ads-enabled=false>
<navbar />
<div class=container-main id=container-main><script>if(top.location!=self.location){top.location=self.location.href;}</script><div class=alert-container>

<noscript><div><div class=alert-info role=alert>Please enable Javascript to use all the features on this site.</div></div></noscript>
${systemAlert()}
</div><div class=content><div id=Leaderboard-Abp class="abp leaderboard-abp"><iframe name=Roblox_Profile_Top_728x90 allowtransparency=true frameborder=0 height=110 scrolling=no data-src="" src=https://www.roblox.com/user-sponsorship/1 width=728 data-js-adtype=iframead data-ad-slot=Roblox_Profile_Top_728x90></iframe></div><script>var Roblox=Roblox||{};Roblox.I18nData=Roblox.I18nData||{};Roblox.I18nData.isI18nEnabledForGroups=true;</script><div class=profile-container ng-modules="robloxApp, profile, angularLazyImg, peopleList, aliases, groupList "><div ng-controller=profileBaseController><div class="section profile-header"><div class="section-content profile-header-content" ng-controller=profileHeaderController><input type=hidden data-userstatus-disabled=False id=user-stat><script>var Roblox=Roblox||{};Roblox.ProfileHeaderData={"profileusername":"${profileData.username
		}","previoususernames":"${previousUsernames.join(
			'\\r\\n'
		)}"};</script><div data-profileuserid=${profileData.userId
		} data-friendscount=${friendsCount} data-followerscount=${followersCount} data-followingscount=${followingsCount} data-arefriends=${areFriends} data-friendurl=https://www.roblox.com/users/${profileData.userId
		}/friends#!/friends data-incomingfriendrequestpending=${incomingFriendRequest} data-maysendfriendinvitation=${canSendRequest} data-friendrequestpending=${incomingFriendRequest} data-mayfollow=${!isOwnProfile} data-isfollowing=${isFollowing} data-canmessage=${canMessage} data-messagesdisabled=${!canMessage} data-messageurl="/messages/compose?recipientId=${profileData.userId
		}" data-canbefollowed=false data-cantrade=false data-isblockbuttonvisible=true data-getfollowscript=Roblox.GameLauncher.followPlayerIntoGame(${profileData.userId
		}); data-ismorebtnvisible=true data-isvieweeblocked=false data-mayimpersonate=true data-mayupdatestatus=${isOwnProfile} data-updatestatusurl="${isOwnProfile ? '/home/updatestatus' : ''
		}" data-statustext="${xss(
			status || ''
		)}" data-statusdate="01/01/2000 0:00:00 PM" data-editstatusmaxlength=254 data-ischatdisabledbyprivacysetting=${true} profile-header-data set-message-btn-display=setMessageBtnDisplay(layout) profile-header-layout=profileHeaderLayout class=hidden></div><div class=profile-header-top><div class="avatar avatar-headshot-lg card-plain profile-avatar-image"><span class="avatar-card-link avatar-image-link"> <thumbnail-2d ng-if=profileHeaderLayout.profileUserId class="avatar-card-image profile-avatar-thumb" thumbnail-target-id=profileHeaderLayout.profileUserId thumbnail-type=thumbnailTypes.avatarHeadshot> </thumbnail-2d> </span><script>$(".profile-avatar-thumb img").on('load',function(){if(Roblox&&Roblox.Performance){Roblox.Performance.setPerformanceMark("head_avatar");}});</script>

${profileData.gameData && profileData.gameDetails ? `<div ng-non-bindable>
<a href="/games/${profileData.gameData.placeId}/${convertToSeoName(profileData.gameDetails.name)}">
<span class="avatar-status online profile-avatar-status icon-game" title="Playing &quot;${xss(profileData.gameDetails.name)}&quot;"></span>
</a>
</div>` :
			isOnline
				? `
<div ng-non-bindable><span class="avatar-status online profile-avatar-status icon-online" title=Website></span></div>
`
				: ''
		}
</div><div class=header-caption>

<div class=header-names>

<div class=header-title>${isPremium
			? '<span class=icon-premium-medium></span> <span class=icon-premium-small></span>'
			: ''
		}<h2 ng-non-bindable class="profile-name text-overflow">${profileData.username
		}</h2>
<h3 ng-non-bindable class="profile-name text-overflow">${profileData.username
		}</h3>
</div>
</div>

<div user-status>

</div>

<div class=header-details><ul class=details-info><li><div class="text-label font-caption-header" ng-bind="'Label.Friends' | translate"></div><a class=text-name href=https://www.roblox.com/users/${profileData.userId
		}/friends#!/friends ng-cloak> <span class=font-header-2 title="{{ profileHeaderLayout.friendsCount | number }}" ng-bind="profileHeaderLayout.friendsCount | abbreviate"></span> </a><li><div class="text-label font-caption-header" ng-bind="'Label.Followers' | translate"></div><a class=text-name href=https://www.roblox.com/users/${profileData.userId
		}/friends#!/followers ng-cloak> <span class=font-header-2 title="{{ getStringFromCountValue(profileHeaderLayout.followersCount) }}" ng-bind=getAbbreviatedStringFromCountValue(profileHeaderLayout.followersCount)></span> </a><li><div class="text-label font-caption-header" ng-bind="'Label.Following' | translate"></div><a class=text-name href=https://www.roblox.com/users/${profileData.userId
		}/friends#!/following ng-cloak> <span class=font-header-2 title="{{ getStringFromCountValue(profileHeaderLayout.followingsCount) }}" ng-bind=getAbbreviatedStringFromCountValue(profileHeaderLayout.followingsCount)></span> </a></ul><ul class="details-actions desktop-action"><li class=btn-friends ng-if=!profileHeaderLayout.areFriends ng-cloak><button ng-if=profileHeaderLayout.incomingFriendRequestPending ng-cloak class=btn-control-md data-target-user-id=${profileData.userId
		} data-friends-url=https://www.roblox.com/users/${profileData.userId
		}/friends#!/friends ng-click=acceptFriendRequest() ng-bind="'Action.Accept' | translate"></button> <button ng-if="!profileHeaderLayout.incomingFriendRequestPending
                                            &amp;&amp; profileHeaderLayout.maySendFriendInvitation" ng-cloak class=btn-control-md ng-click=sendFriendRequest() ng-bind="'Action.AddFriend' | translate"></button> <button ng-if="!profileHeaderLayout.incomingFriendRequestPending
                                        &amp;&amp; !profileHeaderLayout.maySendFriendInvitation
                                        &amp;&amp; profileHeaderLayout.friendRequestPending" ng-cloak class="btn-control-md disabled" ng-bind="'Action.Pending' | translate"></button> <button ng-if="!profileHeaderLayout.incomingFriendRequestPending
                                        &amp;&amp; !profileHeaderLayout.maySendFriendInvitation
                                        &amp;&amp; !profileHeaderLayout.friendRequestPending" ng-cloak class="btn-control-md disabled" ng-bind="'Action.AddFriend' | translate"></button><li class=btn-friends ng-if=profileHeaderLayout.areFriends ng-cloak><button class=btn-alert-md id=unfriend-btn data-target-user-id=${profileData.userId
		} ng-click=removeFriend() ng-bind="'Action.Unfriend' | translate"></button><li class=btn-messages id=profile-message-btn><button class=btn-control-md ng-disabled=!profileHeaderLayout.enableMessageBtn ng-show=profileHeaderLayout.showMessageBtn ng-click=sendMessage() ng-cloak ng-bind="'Action.Message' | translate"></button><li class=btn-messages id=profile-chat-btn ng-show=profileHeaderLayout.showChatBtn><button class=btn-control-md ng-click=chat() ng-cloak ng-bind="'Action.Chat' | translate"></button>
                                        
                                        
                                        </ul><ul class="details-actions mobile-action" ng-class="{'three-item-list': profileHeaderLayout.canBeFollowed}"><li class=btn-friends ng-if=!profileHeaderLayout.areFriends ng-cloak><a ng-if=profileHeaderLayout.incomingFriendRequestPending ng-cloak data-target-user-id=${profileData.userId
		} data-friends-url=https://www.roblox.com/users/${profileData.userId
		}/friends#!/friends class=action-add-friend ng-click=acceptFriendRequest()><div class=icon-accept-friend></div><div class="text-label small" ng-bind="'Action.Accept' | translate"></div></a> <a ng-if="!profileHeaderLayout.incomingFriendRequestPending &amp;&amp; profileHeaderLayout.maySendFriendInvitation" class=action-add-friend ng-cloak ng-click=sendFriendRequest()><div class=icon-add-friend></div><div class="text-label small" ng-bind="'Action.AddFriend' | translate"></div></a> <a ng-if="!profileHeaderLayout.incomingFriendRequestPending
                                        &amp;&amp; !profileHeaderLayout.maySendFriendInvitation
                                        &amp;&amp; profileHeaderLayout.friendRequestPending" ng-cloak class=action-friend-pending><div class=icon-friend-pending></div><div class="text-label small" ng-bind="'Action.Pending' | translate"></div></a> <a ng-if="!profileHeaderLayout.incomingFriendRequestPending
                                        &amp;&amp; !profileHeaderLayout.maySendFriendInvitation
                                        &amp;&amp; !profileHeaderLayout.friendRequestPending" ng-cloak class=action-friend-pending><div class=icon-friend-pending></div><div class="text-label small" ng-bind="'Action.AddFriend' | translate"></div></a><li class=btn-friends ng-if=profileHeaderLayout.areFriends ng-cloak><a data-target-user-id=${profileData.userId
		} ng-mouseenter="hover = true" ng-mouseleave="hover =false" ng-class="{'btn-unfollow': hover}" ng-click=removeFriend() class=action-remove-friend><div class=icon-remove-friend></div><div class="text-label small" ng-bind="'Action.Unfriend' | translate"></div></a><li class="btn-messages center-icon" id=profile-message-icon ng-if=profileHeaderLayout.showMessageBtn ng-cloak><div ng-if=!profileHeaderLayout.enableMessageBtn class=action-message-disabled ng-cloak><div class=icon-send-message-disabled></div><div class="text-label small" ng-bind="'Action.Message' | translate"></div></div><a ng-if=profileHeaderLayout.enableMessageBtn ng-click=sendMessage() class=action-message ng-cloak><div class=icon-send-message></div><div class="text-label small" ng-bind="'Action.Message' | translate"></div></a><li class="btn-messages center-icon" id=profile-chat-icon ng-if=profileHeaderLayout.showChatBtn ng-cloak><div class=action-message-disabled ng-click=chat() ng-cloak><div class=icon-start-chat></div><div class="text-label small" ng-bind="'Action.Chat' | translate"></div></div>
                                        
                                        <li class="btn-join-game last-icon" ng-if=profileHeaderLayout.canBeFollowed>
                                            <a class="profile-join-game action-join-game" ng-cloak>
                                                <div class=icon-join-game></div>
                                                <div class="text-label small" ng-bind="'Action.JoinGame' | translate"></div>
                                            </a>
                                        </ul>
                                    </div>
                                </div>
                                <div class=mobile-user-status user-status></div>
                                </div><p ng-show=profileHeaderLayout.hasError ng-cloak class="text-error header-details-error" ng-bind=profileHeaderLayout.errorMsg><div id=profile-header-more class=profile-header-more ng-show=profileHeaderLayout.isMoreBtnVisible ng-cloak><a id=popover-link class=rbx-menu-item data-toggle=popover data-bind=profile-header-popover-content> <span class=icon-more></span> </a><div id=popover-content class=rbx-popover-content data-toggle=profile-header-popover-content><ul class=dropdown-menu role=menu><li ng-show=profileHeaderLayout.showMessageLink id=profile-message-in-menu><a tabindex=0 role=button id=profile-message ng-click=sendMessage() ng-cloak ng-bind="'Action.Message' | translate"> </a>
                                        


                                        <li ng-show=profileHeaderLayout.mayFollow ng-cloak><a tabindex=0 role=button ng-bind="profileHeaderLayout.isFollowing ? 'Action.Unfollow' : 'Action.Follow' | translate" ng-click=follow() id=profile-follow-user ng-cloak></a><li ng-show=profileHeaderLayout.canTrade ng-cloak>

                                        <a tabindex=0 role=button ng-click=tradeItems() id=profile-trade-items ng-bind="'Action.TradeItems' | translate"></a>
                                        
                                        ${
											/*<li ng-show=profileHeaderLayout.isBlockButtonVisible ng-cloak>
                                        <a tabindex=0 role=button ng-bind="!profileHeaderLayout.isVieweeBlocked ? 'Action.BlockUser' : 'Action.UnblockUser'| translate" ng-click=blockUser() id=profile-block-user ng-cloak></a>*/ ''
		}
                                        ${canTrade
			? `
                                        <li>
                                            <a tabindex=0 role=button href="https://www.roblox.com/users/${profileData.userId}/trade" ng-bind="'Action.Trade' | translate"></a>
                                        </li>
                                        `
			: ''
		}

        ${session.isAdmin ? `
    <li ng-show=profileHeaderLayout.mayImpersonate ng-cloak>
        <a tabindex=0 role=button ng-bind="'Action.ImpersonateUser' | translate" ng-click=impersonate() id=profile-impersonate-user ng-cloak>

        </a>
    </li>
    <script>
    $(document).on('click', '#profile-impersonate-user', function(e) {
        $.ajax({
            method: 'POST',
            url: '/apisite/auth/v1/users/${profileData.userId}/impersonate',
        }).done(function() {
            window.location.reload();
        })
    });
    </script>` : ''}

                                        
                                        ${isOwnProfile
			? `
                                        <li ng-show="profileHeaderLayout.mayUpdateStatus &amp;&amp; !isUserStatusDisabled()"><a tabindex=0 role=button ng-click=revealStatusForm() id=profile-header-update-status ng-bind="'Action.UpdateStatus' | translate"></a></li>`
			: ''
		}
                                        
                                        ${canViewInventory
			? `
                                        <li>
                                            <a tabindex=0 role=button href="https://www.roblox.com/users/${profileData.userId}/inventory/" ng-bind="'Action.Inventory' | translate"></a>
                                        </li>`
			: ''
		}
                                        

                                        
                        
                                        
                                        
                                        </ul></div><script>$(function(){$(".details-actions, .mobile-details-actions").on("click",".profile-join-game",function(e){e.preventDefault();e.stopPropagation();play_placeId=0;try{Roblox.GameLauncher.followPlayerIntoGame(${profileData.userId
		});;var referrerId=Roblox.UrlParser?Roblox.UrlParser.getParameterValueByName("rbxp"):null;if(Roblox.GamePlayEvents){var context=Roblox.GamePlayEvents.contextCategories.joinUser;Roblox.GamePlayEvents.SendGamePlayIntent(context,play_placeId,referrerId);}}
catch(e){if(GoogleAnalyticsEvents&&GoogleAnalyticsEvents.FireEvent){GoogleAnalyticsEvents.FireEvent(["Protocol","Launch Failure","follow",0]);}}
return false;});});</script></div></div></div><div ng-include="'system-feedback'"></div><div class=rbx-tabs-horizontal><ul id=horizontal-tabs class="nav nav-tabs" role=tablist profile-tab-click><li class="rbx-tab active"><a class=rbx-tab-heading href=#about id=tab-about> <span class=text-lead>About</span> <span class=rbx-tab-subtitle></span> </a><li class=rbx-tab><a class=rbx-tab-heading href=#creations id=tab-creations> <span class=text-lead>Creations</span> <span class=rbx-tab-subtitle></span> </a></ul><div class="tab-content rbx-tab-content"><div class="tab-pane active" id=about><div class="section profile-about" ng-controller=profileUtilitiesController><div class=container-header>

<h3>About</h3>
</div>
<div class="remove-panel">
<div class="profile-about-content toggle-target">
<pre id=profile-about-text class="content-overflow-toggle content-height text profile-about-text">
<span class="profile-about-content-text linkify" ng-non-bindable>${(profileData.description && xss(profileData.description)) || ''
		}</span> 
</pre><span class="hidden toggle-content text-link cursor-pointer" data-container-id=profile-about-text data-show-label="Read More" data-hide-label="Show Less">Read More</span>
</div>
</div>
<div class="section-content remove-panel">

<div id=aliases-container>
<div class=border-top ng-hide=isAliasesLoaded>

<span class="spinner spinner-default"></span>

</div>
<div aliases-container></div>
</div>
<div class="border-top profile-about-footer">


<!-- PAST USERNAME SECTION BEGIN -->

${previousUsernames.length > 0
			? `
<span class=profile-name-history> 
<button class="btn-pastnames btn-control-xs" ng-click=showPastUsernames()> 
    <span class=icon-pastname></span> 
</button> 
<span class=tooltip-pastnames data-toggle=tooltip title="${previousUsernames
				.map((v) => {
					return xss(v);
				})
				.join(', ')}"> 
    <span class=icon-pastname></span> 
</span> 
<span class=text-pastname ng-bind="'Label.PastUsernames' | translate"></span> 
</span> `
			: ''
		}

<!-- PAST USESRNAMES SECTION END -->



<a href="https://www.roblox.com/abusereport/UserProfile?id=${profileData.userId
		}&amp;redirectUrl=https%3A%2F%2Fwww.roblox.com%2Fusers%2F${profileData.userId
		}%2Fprofile" class="abuse-report-link abuse-report-modal"> <span class=text-error ng-bind="'Label.ReportAbuse' | translate"></span> </a></div></div></div><div class="section profile-avatar"><div id=use-dynamic-thumbnail-lighting class=hidden data-use-dynamic-thumbnail-lighting=False></div><div class=container-header><h3 ng-bind="'Heading.CurrentlyWearing' | translate"></h3></div><div class="col-sm-6 section-content profile-avatar-left" ng-non-bindable><div id=UserAvatar class=thumbnail-holder data-reset-enabled-every-page data-3d-thumbs-enabled data-url="/thumbnail/user-avatar?userId=${profileData.userId
		}&amp;thumbnailFormatId=124&amp;width=300&amp;height=300" style=width:300px;height:300px><span class=thumbnail-span></span> <span class="thumbnail-span-original hidden" data-3d-url="/avatar-thumbnail-3d/json?userId=${profileData.userId
		}" data-orig-retry-url="/avatar-thumbnail/json?userId=${profileData.userId
		}&amp;width=352&amp;height=352&amp;format=png"><img alt=${profileData.username
		} src=${imageUrl}></span> <span class="enable-three-dee btn-control btn-control-lg">3D</span></div></div>

<div class="col-sm-6 section-content profile-avatar-right">
<div class=profile-avatar-mask>
<div class=profile-accoutrements-container ng-controller=profileAccoutrementsController>
<div data-numberofaccoutrements=${profileData.wornAssets.length
		} data-accoutrementsperpage=8 data-intouchscreen=false profile-accoutrements-data profile-accoutrements-layout=profileAccoutrementsLayout class=hidden></div>

<div id=accoutrements-slider class=profile-accoutrements-slider profile-accoutrements-slider profile-accoutrements-layout=profileAccoutrementsLayout>
${wearingChunked
			.map((chunk) => {
				return (
					'<ul class="accoutrement-items-container">' +
					chunk
						.map((v) => {
							return `
    <li class=accoutrement-item ng-non-bindable>
        <a href="/catalog/${v.id}/--">
            <img title="${xss(v.name)}" alt="${xss(
								v.name
							)}" class=accoutrement-image style="width: 100px; height: 100px;" src="https://www.roblox.com/thumbs/asset.ashx?assetId=${v.id
								}&width=100&height=100&format=png" />
            <div class=asset-restriction-icon><span class="icon-label icon-${v.itemRestrictions && v.itemRestrictions.includes('Limited')
									? 'limited'
									: v.itemRestrictions.includes('LimitedUnique')
										? 'limited-unique'
										: ''
								}-label"></span></div>
        </a>
    </li>
    `;
						})
						.join('') +
					'</ul>'
				);
			})
			.join('')}


</div>
<div id=accoutrements-page class=profile-accoutrements-page-container profile-accoutrements-page profile-accoutrements-layout=profileAccoutrementsLayout><span class="profile-accoutrements-page ${wearingChunked.length > 1 ? '' : 'hidden'
		}" ng-class="{'page-active': profileAccoutrementsLayout.currentPageNumber == 0}" ng-click=getAccoutrementsPage(0)></span> <span class="profile-accoutrements-page ${wearingChunked.length > 1 ? '' : 'hidden'
		}" ng-class="{'page-active': profileAccoutrementsLayout.currentPageNumber == 1}" ng-click=getAccoutrementsPage(1)></span> <span class="profile-accoutrements-page ${wearingChunked.length > 2 ? '' : 'hidden'
		}" ng-class="{'page-active': profileAccoutrementsLayout.currentPageNumber == 2}" ng-click=getAccoutrementsPage(2)></span> <span class="profile-accoutrements-page hidden" ng-class="{'page-active': profileAccoutrementsLayout.currentPageNumber == 3}" ng-click=getAccoutrementsPage(3)></span> <span class="profile-accoutrements-page hidden" ng-class="{'page-active': profileAccoutrementsLayout.currentPageNumber == 4}" ng-click=getAccoutrementsPage(4)></span> <span class="profile-accoutrements-page hidden" ng-class="{'page-active': profileAccoutrementsLayout.currentPageNumber == 5}" ng-click=getAccoutrementsPage(5)></span> <span class="profile-accoutrements-page hidden" ng-class="{'page-active': profileAccoutrementsLayout.currentPageNumber == 6}" ng-click=getAccoutrementsPage(6)></span> <span class="profile-accoutrements-page hidden" ng-class="{'page-active': profileAccoutrementsLayout.currentPageNumber == 7}" ng-click=getAccoutrementsPage(7)></span> <span class="profile-accoutrements-page hidden" ng-class="{'page-active': profileAccoutrementsLayout.currentPageNumber == 8}" ng-click=getAccoutrementsPage(8)></span> <span class="profile-accoutrements-page hidden" ng-class="{'page-active': profileAccoutrementsLayout.currentPageNumber == 9}" ng-click=getAccoutrementsPage(9)></span></div></div></div></div></div>


<div id=people-list-container class="section no-self-bootstrap">
                                        <div people-list-container></div>
</div>

${canViewInventory
			? `
<div class="section layer profile-collections" ng-controller=profileCollectionsController>
    <div class=container-header>
        <h3 ng-bind="'Heading.Collections' | translate"></h3>
        <div class=collection-btns>
            <a href="https://www.roblox.com/users/${profileData.userId}/inventory/" class="btn-min-width btn-secondary-xs btn-more inventory-link see-all-link-icon" ng-bind="'Action.Inventory' | translate">
            </a>
        </div>
    </div>
    <div class="section-content remove-panel" ng-include="'profile-collections-section'"></div>
</div>
`
			: ''
		}
<div groups-showcase display-user-id=${profileData.userId}></div>
<div class=section id=roblox-badges-container></div>
<div class=section id=player-badges-container></div>
<div class="section profile-statistics" id=profile-statistics-container></div>
</div>
<div class=tab-pane id=creations profile-empty-tab><div class=profile-game ng-controller=profileGridController ng-init="init('game-cards','game-container')" ng-class="{'section': !isGridOn,
                    'container-list': isGridOn}">
                    
                    <div class=container-header><h3 ng-non-bindable>Games</h3>
                    
                    <div class=container-buttons>
					
					<button class=profile-view-selector title="Slideshow View" type=button ng-click=updateDisplay(false) ng-class="{'btn-secondary-xs btn-generic-slideshow-xs': !isGridOn, 'btn-control-xs btn-generic-slideshow-xs': isGridOn}"> <span class=icon-slideshow ng-class="{'selected': !isGridOn}"></span> </button> <button class=profile-view-selector title="Grid View" type=button ng-click=updateDisplay(true) ng-class="{'btn-secondary-xs btn-generic-grid-xs': isGridOn, 'btn-control-xs btn-generic-grid-xs': !isGridOn}"> <span class=icon-grid ng-class="{'selected': isGridOn}"></span> </button></div></div>
					
	<div ng-show=isGridOn class=game-grid>
	<ul class="hlist game-cards" style="max-height: {{containerHeight}}px" horizontal-scroll-bar=loadMore()>
			${profileData.places.map((v, i) => {
			return `<div class=game-container data-index="${i}" ng-class="{'shown': 0 &lt; visibleItems}">
			<li class="list-item game-card game-tile">
				<div class=game-card-container>
					<a href="/games/refer?PlaceId=${v.placeId}&amp;Position=${i + 1}&amp;PageType=Profile" class=game-card-link>
						<div class=game-card-thumb-container>
							<img class=game-card-thumb data-src="/icons/asset.ashx?assetid=${v.placeId}" alt="${xss(v.name)}" image-retry />
						</div>
						<div class="game-card-name game-name-title" title="${xss(v.name)}" ng-non-bindable>${xss(v.name)}</div>
						<div class=game-card-info><span class="info-label icon-votes-gray"></span> 
						<span class="info-label vote-percentage-label hidden">0%</span> 
						<span class="info-label no-vote"></span> 
						<span class="info-label icon-playing-counts-gray"></span> 
						<span class="info-label playing-counts-label" title="${v.playerCount}">${v.playerCount.toLocaleString()}</span>
						</div>
					</a>
				</div>
			</li>
		</div>`}).join('')}
	</ul>
	<a ng-click=loadMore() class="btn btn-control-xs load-more-button" ng-show="1 > 6 * NumberOfVisibleRows">Load More</a>
</div>
<div id=games-switcher class="switcher slide-switcher games" ng-hide=isGridOn switcher itemscount=switcher.games.itemsCount currpage=switcher.games.currPage>
	<ul class="slide-items-container switcher-items hlist">
	<!-- Reverse is required due to roblox apparently reversing their collection(?)
	If you don't reverse, it messes up the grid/switcher order -->
		${profileData.places.reverse().map((v, i) => {
				return `<li class="switcher-item slide-item-container active" ng-class="{'active': switcher.games.currPage == ${i}}" data-index="${i}">
			<div class="col-sm-6 slide-item-container-left">
				<div class=slide-item-emblem-container>
					<a href="/games/refer?PlaceId=${v.placeId}&amp;Position=${i + 1}&amp;PageType=Profile"> 
						<img class=slide-item-image src="/icons/asset.ashx?assetid=${v.placeId}" data-src="/icons/asset.ashx?assetid=${v.placeId}" data-emblem-id="${v.placeId}" image-retry> 
					</a>
				</div>
			</div>
			<div class="col-sm-6 slide-item-container-right games">
				<div class="slide-item-info">
					<h2 class="text-overflow slide-item-name games" ng-non-bindable>${xss(v.name)}</h2>
					<p class="text-description para-overflow slide-item-description games" ng-non-bindable>${xss(v.description || '')}</p>
				</div>
				<div class="slide-item-stats">
					<ul class="hlist">
						<li class="list-item">
							<div class="text-label slide-item-stat-title" ng-if=appMeta.isI18nEnabled ng-bind="'Label.Playing' | translate"></div>
							<div class="text-label slide-item-stat-title" ng-if=!appMeta.isI18nEnabled>Playing</div>
							<div class="text-lead slide-item-members-count">${v.playerCount.toLocaleString()}</div>
						</li>
						<li class="list-item">
							<div class="text-label slide-item-stat-title" ng-if=appMeta.isI18nEnabled ng-bind="'Label.Visits' | translate"></div>
							<div class="text-label slide-item-stat-title" ng-if=!appMeta.isI18nEnabled>Visits</div>
							<div class="text-lead text-overflow slide-item-my-rank games">${v.visitCount.toLocaleString()}</div>
						</li>
					</ul>
				</div>
			</div>
		</li>`}).join('')}
	</ul>
</div>
</div>
<div class=section ng-controller=profileUtilitiesController ng-init="getPlayerAssets('10')">
	<div ng-if="assets.length > 0" ng-include="'profile-player-assets'"></div>
</div>
<div class=section ng-controller=profileUtilitiesController ng-init="getPlayerAssets('11')">
	<div ng-if="assets.length > 0" ng-include="'profile-player-assets'"></div>
</div>
<div class="col-xs-12 section-content-off section-content" ng-if=profileLayout.userHasNoCreations><span ng-non-bindable>${profileData.username} has no creations.</span>
</div>
</div></div></div></div></div>
<div>
		
		
		<div class=profile-ads-container><div id=ProfilePageAdDiv1 class=profile-ad><iframe name=Roblox_Profile_Left_300x250 allowtransparency=true frameborder=0 height=270 scrolling=no data-src="" src=https://www.roblox.com/user-sponsorship/3 width=300 data-js-adtype=iframead data-ad-slot=Roblox_Profile_Left_300x250></iframe></div><div id=ProfilePageAdDiv2 class=profile-ad><iframe name=Roblox_Profile_Right_300x250 allowtransparency=true frameborder=0 height=270 scrolling=no data-src="" src=https://www.roblox.com/user-sponsorship/3 width=300 data-js-adtype=iframead data-ad-slot=Roblox_Profile_Right_300x250></iframe></div></div></div></div></div>
                    
                    ${footer()}
<script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=intl-polyfill src=/rbxcdn/js/d44520f7da5ec476cfb1704d91bab327.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=InternationalCore src=/rbxcdn/js/ff3308aa2e909de0f9fcd5da7b529db247f69fe9b4072cbbc267749800a4d9e6.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=TranslationResources src=/rbxcdn/js/83d836a661ff433d5b7ce719c489e43af590ff75ab39ccc6d393546fe91b766a.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=leanbase src=/rbxcdn/js/63c7df988cef893b4f0e4bc471c56fff.js></script><CoreUtilities /><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=CoreRobloxUtilities src=/rbxcdn/js/0cb1c033a6c4762465104b8b977992e95d490fee2b22c4bc2ab1ed5d48e9ebe7.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=React src=/rbxcdn/js/6beb1c5bcec1a4449303da9e523d45a1aa1652f9b42ae6c8a3ac347955ca3b3f.js></script><ReactUtilities /><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=ReactStyleGuide src=/rbxcdn/js/253dbc984ab23858a24067ed2cab303c4e8f3dbbaf8c37914bfd19d12dd0b161.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=angular src=/rbxcdn/js/ae3d621886e736e52c97008e085fa286.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=AngularJsUtilities src=/rbxcdn/js/dad62999a25adbced1d15f7d7caeaaab02f963ab5da93d4200b3bf1c29a91b25.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=InternationalAngularJs src=/rbxcdn/js/95f7afb5fcb3c8ae379d51661e32c54ea8d8b823ace7574bd0b7fab9275cba6b.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=Thumbnails src=/rbxcdn/js/ed49a01b602c4b87904bd61317bf8be809837473372bfafc163f566a30430a31.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=PresenceStatus src=/rbxcdn/js/8c50632c6b51d45c814a976484564e622f462db77adfcf3c1e3c21f9a9f1722f.js></script><div id=presence-registration-bootstrap-data data-is-enabled=True data-interval=15000></div><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=PresenceRegistration src=/rbxcdn/js/0a83202cf5f2310227e607928f73a26cdaa7d5c27f892b99ef51ec3b863a694d.js></script><div ng-modules=baseTemplateApp><script src=/rbxcdn/js/ffcc04436179c6b2a6668fdfcfbf62b1.js></script></div><div ng-modules=pageTemplateApp><script src=/rbxcdn/js/6e5c4bee856b869239dbbc6f29bb699f.js></script></div><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=VerificationUpsell src=/rbxcdn/js/0307a8fde91ac06fe05341e0bcb6d113ee72830ddadce2463f07fdd4f6b42670.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_Feature.VerificationUpsell src=/rbxcdn/js/d9a5ba0db415cf3ff23ee004d7c8202c6cd5cbfbf0687fa11f733681130b6ead.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_Feature.VerificationUpsell src=/rbxcdn/js/2ced9fed9ee4a614a2a9f8d79d5f860c723c75876bce7ecf3befd5bf12053566.js></script>
<authScripts />
<script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_CommonUI.Features src=/rbxcdn/js/8e39f38b3ae6afcba0966973e3f4668a6a94f7b52313d8c39afa50d2355ac323.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_CommonUI.Features src=/rbxcdn/js/a492c6d3ab5263357ae94288a7fc4889ee69c8a88bf052cc39938255170ece90.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_Feature.ShopDialog src=/rbxcdn/js/8ebb208e1b2c23f46627545bc6894d839e3d9eb908cf51ecd1c15ecd7d3b4c7f.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_Feature.ShopDialog src=/rbxcdn/js/105382fb4805646c67046c1b6f04aceee474a189df0a550bf00d861814d45964.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_Common.AlertsAndOptions src=/rbxcdn/js/1012b8f9af5f7d8e6d770c309aff87dc428f7cdc40e99a07e3c92ce2496caebd.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_Common.AlertsAndOptions src=/rbxcdn/js/1e148db91b54661ad571d33042e374da2c6d63e6bdeb458c770c6cd5b8442ffb.js></script><script>Roblox.config.externalResources=[];Roblox.config.paths['Pages.Catalog']='/rbxcdn/js/0d2759e7f03a464f0b8c0909a28405c5.js';Roblox.config.paths['Pages.CatalogShared']='/rbxcdn/js/1b451357891fcc5351b20d20504aa8ad.js';Roblox.config.paths['Widgets.AvatarImage']='/rbxcdn/js/7d49ac94271bd506077acc9d0130eebb.js';Roblox.config.paths['Widgets.DropdownMenu']='/rbxcdn/js/da553e6b77b3d79bec37441b5fb317e7.js';Roblox.config.paths['Widgets.GroupImage']='/rbxcdn/js/8ad41e45c4ac81f7d8c44ec542a2da0a.js';Roblox.config.paths['Widgets.HierarchicalDropdown']='/rbxcdn/js/4a0af9989732810851e9e12809aeb8ad.js';Roblox.config.paths['Widgets.ItemImage']='/rbxcdn/js/61a0490ba23afa17f9ecca2a079a6a57.js';Roblox.config.paths['Widgets.PlaceImage']='/rbxcdn/js/a6df74a754523e097cab747621643c98.js';</script><script>Roblox.XsrfToken.setToken('RCMO0hZ0E/BN');</script><script>$(function(){Roblox.DeveloperConsoleWarning.showWarning();});</script><script>$(function(){function trackReturns(){function dayDiff(d1,d2){return Math.floor((d1-d2)/86400000);}
if(!localStorage){return false;}
var cookieName='RBXReturn';var cookieOptions={expires:9001};var cookieStr=localStorage.getItem(cookieName)||"";var cookie={};try{cookie=JSON.parse(cookieStr);}catch(ex){}
try{if(typeof cookie.ts==="undefined"||isNaN(new Date(cookie.ts))){localStorage.setItem(cookieName,JSON.stringify({ts:new Date().toDateString()}));return false;}}catch(ex){return false;}
var daysSinceFirstVisit=dayDiff(new Date(),new Date(cookie.ts));if(daysSinceFirstVisit==1&&typeof cookie.odr==="undefined"){RobloxEventManager.triggerEvent('rbx_evt_odr',{});cookie.odr=1;}
if(daysSinceFirstVisit>=1&&daysSinceFirstVisit<=7&&typeof cookie.sdr==="undefined"){RobloxEventManager.triggerEvent('rbx_evt_sdr',{});cookie.sdr=1;}
try{localStorage.setItem(cookieName,JSON.stringify(cookie));}catch(ex){return false;}}
GoogleListener.init();RobloxEventManager.initialize(true);RobloxEventManager.triggerEvent('rbx_evt_pageview');trackReturns();RobloxEventManager._idleInterval=450000;RobloxEventManager.registerCookieStoreEvent('rbx_evt_initial_install_start');RobloxEventManager.registerCookieStoreEvent('rbx_evt_ftp');RobloxEventManager.registerCookieStoreEvent('rbx_evt_initial_install_success');RobloxEventManager.registerCookieStoreEvent('rbx_evt_fmp');RobloxEventManager.startMonitor();});</script><script>var Roblox=Roblox||{};Roblox.UpsellAdModal=Roblox.UpsellAdModal||{};Roblox.UpsellAdModal.Resources={title:"Remove Ads Like This",body:"Builders Club members do not see external ads like these.",accept:"Upgrade Now",decline:"No, thanks"};</script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=page src=/rbxcdn/js/2e4c6406fa09af7e8416722a46e0539e.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=StyleGuide src=/rbxcdn/js/a7af0f9caedbf4763e66bb0d7fe240486fd6572329ea48d485580f7d9b1d8078.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=Footer src=/rbxcdn/js/5fbe4bf3cd758289553a511c4208511ebaeaf37add48e7f10820893557c65e01.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=PeopleList src=/rbxcdn/js/7e0c4ef4862d9d43162934cbd3e152a15f5c3f9aa27d9dfe229f3759b068fe2d.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_Feature.PeopleList src=/rbxcdn/js/c1469697c655ad58f27f0fb4f240a9d838d9f0fbb772b937745c0d2742e8d290.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_Feature.PeopleList src=/rbxcdn/js/229695ac3b47817d11d663e23b32bfa97736a182941ed1971ecaebdb57e3d1e0.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=Aliases src=/rbxcdn/js/55782510b70594ab29cb384aec313499804782cf0c907dbe36eebb28b4729d83.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_Feature.Profile src=/rbxcdn/js/d028634c5a098c24897d0ca3b4ca190d8b5327c43fe1a0fe99e73e943b5803bb.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_Feature.Profile src=/rbxcdn/js/215ea799008c21141ac4c67f78e148146548b0d43d7cd8eb7322d8901160180a.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=GroupsList src=/rbxcdn/js/f35b4e67aa3d4491f88e78efe2c1ebdc9a3cb98253c1c1e068fd6323ed720521.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_Feature.Groups src=/rbxcdn/js/961306d1779667d3dc6ec14e151a652a2a2c1919871dec816330212d3de43c49.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_Feature.Groups src=/rbxcdn/js/16888b07b03b69bd84a8c42d9367dcb7d6d590f588695303523c544a9b84dc0c.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=ProfileBadges src=/rbxcdn/js/27c7680b24b7e3a8c77cf232ef8268188a7bf085552ba02169a001093810d726.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_CommonUI.Controls src=/rbxcdn/js/3c1940561fbff1620e7fa1ef1b3ebf0e8517c70b2eff0e7bc1cd84dbe1d4db6a.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_CommonUI.Controls src=/rbxcdn/js/d2f098e23249651588c97e0706056878d10753cfe28813f3b293b444a48f235b.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_Feature.ProfileBadges src=/rbxcdn/js/3c045ba373b81fb2199f33377710c2484b3e5ec72670ba29c72fbc15dd0a4200.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_Feature.ProfileBadges src=/rbxcdn/js/86211aca1f9830fea9ffd21674592177a0ffec0600f4fbfadd575ed687317372.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=ProfileStatistics src=/rbxcdn/js/ad70c22265e8bade767cda69a066ef60f8f51f59965136904793ddd0acc199d6.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_Feature.Statistics src=/rbxcdn/js/4ea99ba2ef9d519b636c937a4db0c28c6a0ff76b9cef296d553f250016b92613.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_Feature.Statistics src=/rbxcdn/js/f7bc7a4de3c8aa28326ed2c129b1cc9bc68a3950f0fe706cd4a05a8f2def0043.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=NotificationStream src=/rbxcdn/js/6d38c2b5ccd7c5d32ac721c40c9c963234c1b86fe0f2639711967d8e5c5fa878.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_Notifications.NotificationStream src=/rbxcdn/js/eacc603be30c02017409c2c3c3902bc4c40cef27e0ac751421a558e6ec89d0f8.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_Notifications.NotificationStream src=/rbxcdn/js/6e1e7e4be7934b6347a90ae31e66e579f6e8bbee371e330e9eabcbf5e31b584d.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=Contacts src=/rbxcdn/js/bf0096e2c114d7b0ba5dbbc43ddd867fa587d1373b6ea4fd2e99ce7afb4ef8de.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=Chat src=/rbxcdn/js/0090a61e4649e9b6915b8acbec228daa525966c174afc74ee9e6b61e2110c794.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_Feature.Chat src=/rbxcdn/js/f52cc1c95e2d3f51d346b604707e44753370802f987f173876f166eea637e2b5.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_Feature.Chat src=/rbxcdn/js/3a5b0cae308a98054f28e17a84742149e550f1a43c1f70beae276ebb3cf9ebc8.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=GameLaunch src=/rbxcdn/js/b61681d2e9cc1d3af7b03675f3656ba5bb4fa83c57fe3205b6c001e767dc9af4.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_Feature.GameLaunchGuestMode src=/rbxcdn/js/b6f7e0e090bb44e092c19eb7e714473be92bd8b26eb53b693e03179658950b69.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_Feature.GameLaunchGuestMode src=/rbxcdn/js/75d691f0d9840862e1341c56663ab6a620bed97a721809dce6ef85c68b3b0c5b.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_Common.VisitGame src=/rbxcdn/js/8970b46e46bddd4380edbc66639b5b333720b2633a9105d4cde2c31ba2878d97.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=DynamicLocalizationResourceScript_Common.VisitGame src=/rbxcdn/js/0ea369a7496bf1e32d7a3834a06b42b1eeea4720c6a4b5fd719792d082eba641.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=serviceworkerregistrar src=/rbxcdn/js/d5b67abc659e3430838dada0f185cb62.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=pushnotifications src=/rbxcdn/js/b8bf1b02993521c61489cb2f1c4fb676.js></script><div id=push-notification-registrar-settings data-notificationshost=https://notifications.roblox.com data-reregistrationinterval=0 data-registrationpath=register-firefox data-shoulddeliveryendpointbesentduringregistration=True data-platformtype=FirefoxOnDesktop></div><div id=push-notification-registration-ui-settings data-noncontextualpromptallowed=true data-promptonfriendrequestsentenabled=true data-promptonprivatemessagesentenabled=false data-promptintervals=[604800000,1209600000,2419200000] data-notificationsdomain=https://notifications.roblox.com data-userid=1335179568></div><script type=text/template id=push-notifications-initial-global-prompt-template>
    <div class="push-notifications-global-prompt">
        <div class="alert-info push-notifications-global-prompt-site-wide-body">
            <div class="push-notifications-prompt-content">
                <h5>
                    <span class="push-notifications-prompt-text">
                        Can we send you notifications on this computer?
                    </span>
                </h5>
            </div>
            <div class="push-notifications-prompt-actions">
                <button type="button" class="btn-min-width btn-control-xs push-notifications-prompt-accept">Notify Me</button>
                <span class="icon-close push-notifications-dismiss-prompt"></span>
            </div>
        </div>
    </div>
</script><script type=text/template id=push-notifications-permissions-prompt-template>
    <div class="modal fade" id="push-notifications-permissions-prompt-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog rbx-modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">
                            <span class="icon-close"></span>
                        </span>
                        <span class="sr-only">Close</span>
                    </button>
                    <h5>Enable Desktop Push Notifications</h5>
                </div>
                <div class="modal-body">
                    <div>
                        Now just click <strong>Always Receive Notifications</strong> in your browser, and we'll start sending you push notifications!
                    </div>
                        <div class="push-notifications-permissions-prompt-instructional-image">
                                <img width="380" height="250" src="/rbxcdn/static/images/Notifications/push-permission-prompt-firefox-windows-20160701.png" />
                        </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
</script><script type=text/template id=push-notifications-permissions-disabled-instruction-template>
    <div class="modal fade" id="push-notifications-permissions-disabled-instruction-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog rbx-modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">
                            <span class="icon-close"></span>
                        </span>
                        <span class="sr-only">Close</span>
                    </button>
                    <h5>Turn Push Notifications Back On</h5>
                </div>
                <div class="instructions-body">
                    <div class="reenable-step reenable-step1-of3">
                        <h1>1</h1>
                        <p class="larger-font-size push-notifications-modal-step-instruction">Click the green lock next to the URL bar to open up your site permissions.</p>
                                <img width="270" height="139" src="/rbxcdn/static/images/Notifications/push-permission-unblock-step1-firefox-windows-20160701.png" />
                    </div>
                    <div class="reenable-step reenable-step2-of3">
                        <h1>2</h1>
                            <p class="larger-font-size push-notifications-modal-step-instruction">Click the drop-down arrow next to Notifications in the <strong>Permissions</strong> tab.</p>
                                <img width="270" height="142" src="/rbxcdn/static/images/Notifications/push-permission-unblock-step2-firefox-windows-20160701.png" />
                    </div>
                    <div class="reenable-step reenable-step3-of3">
                        <h1>3</h1>
                            <p class="larger-font-size push-notifications-modal-step-instruction">Select <strong>Allow</strong> to turn notifications back on.</p>
                                <img width="270" height="182" src="/rbxcdn/static/images/Notifications/push-permission-unblock-step3-firefox-windows-20160701.png" />
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
</script><script type=text/template id=push-notifications-successfully-enabled-template>
    <div class="push-notifications-global-prompt">
        <div class="alert-system-feedback">
            <div class="alert alert-success">
                Push notifications have been enabled!
            </div>
        </div>
    </div>
</script><script type=text/template id=push-notifications-successfully-disabled-template>
    <div class="push-notifications-global-prompt">
        <div class="alert-system-feedback">
            <div class="alert alert-success">
                Push notifications have been disabled.
            </div>
        </div>
    </div>
</script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=pageEnd src=/rbxcdn/js/8926ed07f25b78ec3a5a6c7febec06ad.js></script><script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=LatencyMeasurement src=/rbxcdn/js/90bb51db086699ec26a6c9df04087678948883f8c3ddd1037c7223a20ff4fe90.js></script>

`;
	return formatView(data, session);
};
