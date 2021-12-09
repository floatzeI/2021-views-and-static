import moment = require('moment');
import formatView from '../lib/formatView';
import replaceUrls from '../lib/replaceUrls';
import { IUserInfo } from '../middleware';
import footer from './partials/footer';
import { headerCss } from './partials/header';
import systemAlert from './partials/systemAlert';

export default (
	session: IUserInfo,
	robuxBalance: number,
	props: {
		type: string;
		genres: string[];
		creator: { id: number; type: any; name: string };
		price?: number;
		assetId: number;
		name: string;
		description: string;
		isLimited: boolean;
		isLimitedU: boolean;
		isForSale: boolean;
		copiesTotal?: number;
		copiesAvailable?: number;
		copiesOwnedByRequester: any[];
		bestPrice?: number;
		bestPriceData?: any;
		offSaleDeadline?: string;
		isPinned: boolean;
		assetTypeId: number;
		commentsEnabled: boolean;
	}
) => {
	const isFree = (props.price === 0 && props.bestPrice !== 0 && props.isForSale);
	let encodedName = encodeURIComponent(props.name);
	let typeDName = props.type;
	if (typeDName.indexOf('Accessory') !== -1) {
		typeDName = typeDName.slice(0, typeDName.indexOf('Accessory'));
	}
	let copiesToSell = props.copiesOwnedByRequester.filter((v) => {
		return v.price === 0;
	});
	let copiesOnSale = props.copiesOwnedByRequester.filter((v) => {
		return v.price > 1;
	});
	let copyToSell = copiesToSell[0];
	const thumbnail = `https://www.roblox.com/thumbs/asset.ashx?width=420&height=420&assetid=${props.assetId}`;
	let item = `
    <!DOCTYPE html>
    <!--[if IE 8]><html class="ie8" ng-app="robloxApp"><![endif]-->
    <!--[if gt IE 8]><!-->
    <html>
    <!--<![endif]-->
    <head data-machine-id="${process.env.MACHINE_ID || 'WEB0'}">
        <!-- MachineID: ${process.env.MACHINE_ID || 'WEB0'} -->
        <title>${props.name} - Roblox</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,requiresActiveX=true" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Roblox Corporation" />
    <meta name="description" content="Customize your avatar with the ${props.name
		} and millions of other items." />
    <meta name="keywords" content="free games, online games, building games, virtual worlds, free mmo, gaming cloud, physics engine" />
    <meta name="apple-itunes-app" content="app-id=431946152" />
    
    
    ${headerCss}
    
    <script type="application/ld+json">
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
    
    <meta property="og:site_name" content="ROBLOX" />
        <meta property="og:title" content="${props.name}" />
        <meta property="og:type" content="game"/>
            <meta property="og:url" content="https://www.roblox.com/catalog/${props.assetId
		}/${encodedName}" />
        <meta property="og:description" content="Customize your avatar with the ${props.name
		} and millions of other items."/>
                <meta property="og:image" content="${thumbnail}" />
        <meta property="fb:app_id" content="190191627665278">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@Roblox">
        <meta name="twitter:title" content="${props.name}">
        <meta name="twitter:description" content="Customize your avatar with the ${props.name
		} and millions of other items.">
        <meta name="twitter:creator" content="@ROBLOX">
                <meta name=twitter:image1 content="${thumbnail}" />
        <meta name="twitter:app:country" content="US">
        <meta name="twitter:app:name:iphone" content="ROBLOX Mobile">
        <meta name="twitter:app:id:iphone" content="431946152">
        <meta name="twitter:app:url:iphone">
        <meta name="twitter:app:name:ipad" content="ROBLOX Mobile">
        <meta name="twitter:app:id:ipad" content="431946152">
        <meta name="twitter:app:url:ipad">
        <meta name="twitter:app:name:googleplay" content="ROBLOX">
        <meta name="twitter:app:id:googleplay" content="com.roblox.client">
        <meta name="twitter:app:url:googleplay"/>
        <meta name="user-data"
              data-userid="1335179568"
              data-name="discofurrr"
              data-displayName="discofurrr"
              data-isunder13="false" 
              data-created="11/26/2019 5:03:41 PM" 
              data-isPremiumUser="false"/>
    
    <meta name="locale-data" 
          data-language-code="en_us" 
          data-language-name="English" /><meta name="device-meta"
          data-device-type="computer"
          data-is-in-app="false"
          data-is-desktop="true"
          data-is-phone="false"
          data-is-tablet="false"
          data-is-console="false"
          data-is-android-app="false"
          data-is-ios-app="false"
          data-is-uwp-app="false"
          data-is-xbox-app="false"
          data-is-amazon-app="false"
          data-is-win32-app="false"
          data-is-studio="false"
          data-is-game-client-browser="false"
          data-is-ios-device="false"
          data-is-android-device="false"
          data-is-universal-app="false"
          data-app-type="unknown"
    />
    <meta name="environment-meta"
          data-is-testing-site="false" />
    
    <metaflags /><meta name="page-meta" data-internal-page-name="CatalogItem" />
        
    
    <script type="text/javascript">
        var Roblox = Roblox || {};
    
        Roblox.BundleVerifierConstants = {
            isMetricsApiEnabled: true,
            eventStreamUrl: "//ecsv2.roblox.com/pe?t=diagnostic",
            deviceType: "Computer",
            cdnLoggingEnabled: JSON.parse("true")
        };
    </script>        <script type="text/javascript">
                var Roblox = Roblox || {};
    
    Roblox.BundleDetector = (function () {
        var isMetricsApiEnabled = Roblox.BundleVerifierConstants && Roblox.BundleVerifierConstants.isMetricsApiEnabled;
    
        var loadStates = {
            loadSuccess: "loadSuccess",
            loadFailure: "loadFailure",
            executionFailure: "executionFailure"
        };
    
        var bundleContentTypes = {
            javascript: "javascript",
            css: "css"
        };
    
        var ephemeralCounterNames = {
            cdnPrefix: "CDNBundleError_",
            unknown: "CDNBundleError_unknown",
            cssError: "CssBundleError",
            jsError: "JavascriptBundleError",
            jsFileError: "JsFileExecutionError",
            resourceError: "ResourcePerformance_Error",
            resourceLoaded: "ResourcePerformance_Loaded"
        };
    
        return {
            jsBundlesLoaded: {},
            bundlesReported: {},
    
            counterNames: ephemeralCounterNames,
            loadStates: loadStates,
            bundleContentTypes: bundleContentTypes,
    
            timing: undefined,
    
            setTiming: function (windowTiming) {
                this.timing = windowTiming;
            },
    
            getLoadTime: function () {
                if (this.timing && this.timing.domComplete) {
                    return this.getCurrentTime() - this.timing.domComplete;
                }
            },
    
            getCurrentTime: function () {
                return new Date().getTime();
            },
    
            getCdnProviderName: function (bundleUrl, callBack) {
                if (Roblox.BundleVerifierConstants.cdnLoggingEnabled) {
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', bundleUrl, true);
    
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === xhr.HEADERS_RECEIVED) {
                            try {
                                var headerValue = xhr.getResponseHeader("rbx-cdn-provider");
                                if (headerValue) {
                                    callBack(headerValue);
                                } else {
                                    callBack();
                                }
                            } catch (e) {
                                callBack();
                            }
                        }
                    };
    
                    xhr.onerror = function () {
                        callBack();
                    };
    
                    xhr.send();
                } else {
                    callBack();
                }
            },
    
            getCdnProviderAndReportMetrics: function (bundleUrl, bundleName, loadState, bundleContentType) {
                this.getCdnProviderName(bundleUrl, function (cdnProviderName) {
                    Roblox.BundleDetector.reportMetrics(bundleUrl, bundleName, loadState, bundleContentType, cdnProviderName);
                });
            },
    
            reportMetrics: function (bundleUrl, bundleName, loadState, bundleContentType, cdnProviderName) {
                if (!isMetricsApiEnabled
                    || !bundleUrl
                    || !loadState
                    || !loadStates.hasOwnProperty(loadState)
                    || !bundleContentType
                    || !bundleContentTypes.hasOwnProperty(bundleContentType)) {
                    return;
                }
    
                var xhr = new XMLHttpRequest();
                var metricsApiUrl = (Roblox.EnvironmentUrls && Roblox.EnvironmentUrls.metricsApi) || "https://metrics.roblox.com";
    
                xhr.open("POST", metricsApiUrl + "/v1/bundle-metrics/report", true);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.withCredentials = true;
                xhr.send(JSON.stringify({
                    bundleUrl: bundleUrl,
                    bundleName: bundleName || "",
                    bundleContentType: bundleContentType,
                    loadState: loadState,
                    cdnProviderName: cdnProviderName,
                    loadTimeInMilliseconds: this.getLoadTime() || 0
                }));
            },
    
            logToEphemeralStatistics: function (sequenceName, value) {
                var deviceType = Roblox.BundleVerifierConstants.deviceType;
                sequenceName += "_" + deviceType;
    
                var xhr = new XMLHttpRequest();
                xhr.open('POST', '/game/report-stats?name=' + sequenceName + "&value=" + value, true);
                xhr.withCredentials = true;
                xhr.send();
            },
    
            logToEphemeralCounter: function (ephemeralCounterName) {
                var deviceType = Roblox.BundleVerifierConstants.deviceType;
                ephemeralCounterName += "_" + deviceType;
                //log to ephemeral counters - taken from eventTracker.js
                var xhr = new XMLHttpRequest();
                xhr.open('POST', '/game/report-event?name=' + ephemeralCounterName, true);
                xhr.withCredentials = true;
                xhr.send();
            },
    
            logToEventStream: function (failedBundle, ctx, cdnProvider, status) {
                var esUrl = Roblox.BundleVerifierConstants.eventStreamUrl,
                    currentPageUrl = encodeURIComponent(window.location.href);
    
                var deviceType = Roblox.BundleVerifierConstants.deviceType;
                ctx += "_" + deviceType;
                //try and grab performance data.
                //Note that this is the performance of the xmlhttprequest rather than the original resource load.
                var duration = 0;
                if (window.performance) {
                    var perfTiming = window.performance.getEntriesByName(failedBundle);
                    if (perfTiming.length > 0) {
                        var data = perfTiming[0];
                        duration = data.duration || 0;
                    }
                }
                //log to event stream (diagnostic)
                var params = "&evt=webBundleError&url=" + currentPageUrl +
                    "&ctx=" + ctx + "&fileSourceUrl=" + encodeURIComponent(failedBundle) +
                    "&cdnName=" + (cdnProvider || "unknown") +
                    "&statusCode=" + (status || "unknown") +
                    "&loadDuration=" + Math.floor(duration);
                var img = new Image();
                img.src = esUrl + params;
            },
    
            getCdnInfo: function (failedBundle, ctx, fileType) {
                if (Roblox.BundleVerifierConstants.cdnLoggingEnabled) {
                    var xhr = new XMLHttpRequest();
                    var counter = this.counterNames;
                    xhr.open('GET', failedBundle, true);
                    var cdnProvider;
    
                    //succesful request
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === xhr.HEADERS_RECEIVED) {
                            cdnProvider = xhr.getResponseHeader("rbx-cdn-provider");
                            if (cdnProvider && cdnProvider.length > 0) {
                                Roblox.BundleDetector.logToEphemeralCounter(counter.cdnPrefix + cdnProvider + "_" + fileType);
                            }
                            else {
                                Roblox.BundleDetector.logToEphemeralCounter(counter.unknown + "_" + fileType);
                            }
                        }
                        else if (xhr.readyState === xhr.DONE) {
                            // append status to cdn provider so we know its not related to network error. 
                            Roblox.BundleDetector.logToEventStream(failedBundle, ctx, cdnProvider, xhr.status);
                        }
                    };
    
                    //attach to possible things that can go wrong with the request.
                    //additionally a network error will trigger this callback
                    xhr.onerror = function () {
                        Roblox.BundleDetector.logToEphemeralCounter(counter.unknown + "_" + fileType);
                        Roblox.BundleDetector.logToEventStream(failedBundle, ctx, counter.unknown);
                    };
    
                    xhr.send();
                }
                else {
                    this.logToEventStream(failedBundle, ctx);
                }
            },
    
            reportResourceError: function (resourceName) {
                var ephemeralCounterName = this.counterNames.resourceError + "_" + resourceName;
                this.logToEphemeralCounter(ephemeralCounterName);
            },
    
            reportResourceLoaded: function (resourceName) {
                var loadTimeInMs = this.getLoadTime();
                if (loadTimeInMs) {
                    var sequenceName = this.counterNames.resourceLoaded + "_" + resourceName;
                    this.logToEphemeralStatistics(sequenceName, loadTimeInMs);
                }
            },
    
            reportBundleError: function (bundleTag) {
                var ephemeralCounterName, failedBundle, ctx, contentType;
                if (bundleTag.rel && bundleTag.rel === "stylesheet") {
                    ephemeralCounterName = this.counterNames.cssError;
                    failedBundle = bundleTag.href;
                    ctx = "css";
                    contentType = bundleContentTypes.css;
                } else {
                    ephemeralCounterName = this.counterNames.jsError;
                    failedBundle = bundleTag.src;
                    ctx = "js";
                    contentType = bundleContentTypes.javascript;
                }
    
                //mark that we logged this bundle
                this.bundlesReported[failedBundle] = true;
    
                //e.g. javascriptBundleError_Computer
                this.logToEphemeralCounter(ephemeralCounterName);
                //this will also log to event stream
                this.getCdnInfo(failedBundle, ctx, ctx);
    
                var bundleName;
                if (bundleTag.dataset) {
                    bundleName = bundleTag.dataset.bundlename;
                }
                else {
                    bundleName = bundleTag.getAttribute('data-bundlename');
                }
    
                this.getCdnProviderAndReportMetrics(failedBundle, bundleName, loadStates.loadFailure, contentType);
            },
    
            bundleDetected: function (bundleName) {
                this.jsBundlesLoaded[bundleName] = true;
            },
    
            verifyBundles: function (document) {
                var ephemeralCounterName = this.counterNames.jsFileError,
                    eventContext = ephemeralCounterName;
                //grab all roblox script tags in the page. 
                var scripts = (document && document.scripts) || window.document.scripts;
                var errorsList = [];
                var bundleName;
                var monitor;
                for (var i = 0; i < scripts.length; i++) {
                    var item = scripts[i];
    
                    if (item.dataset) {
                        bundleName = item.dataset.bundlename;
                        monitor = item.dataset.monitor;
                    }
                    else {
                        bundleName = item.getAttribute('data-bundlename');
                        monitor = item.getAttribute('data-monitor');
                    }
    
                    if (item.src && monitor && bundleName) {
                        if (!Roblox.BundleDetector.jsBundlesLoaded.hasOwnProperty(bundleName)) {
                            errorsList.push(item);
                        }
                    }
                }
                if (errorsList.length > 0) {
                    for (var j = 0; j < errorsList.length; j++) {
                        var script = errorsList[j];
                        if (!this.bundlesReported[script.src]) {
                            //log the counter only if the file is actually corrupted, not just due to failure to load
                            //e.g. JsFileExecutionError_Computer
                            this.logToEphemeralCounter(ephemeralCounterName);
                            this.getCdnInfo(script.src, eventContext, 'js');
    
                            if (script.dataset) {
                                bundleName = script.dataset.bundlename;
                            }
                            else {
                                bundleName = script.getAttribute('data-bundlename');
                            }
    
                            this.getCdnProviderAndReportMetrics(script.src, bundleName, loadStates.executionFailure, bundleContentTypes.javascript);
                        }
                    }
                }
            }
        };
    })();
    
    window.addEventListener("load", function (evt) {
        Roblox.BundleDetector.verifyBundles();
    });
    
    Roblox.BundleDetector.setTiming(window.performance.timing);
                //# sourceURL=somename.js
            </script>
        
    <link href="/rbxcdn/images/23421382939a9f4ae8bbe60dbe2a3e7e.ico.gzip" rel="icon" />
    
    
        <link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet' data-bundlename='StyleGuide' href='/rbxcdn/css/e512b4bbcd60506e5c5960f3cfcc8cf2ddeaa79c23a1be3e165c396a4810e7f2.css' />
    
    <link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet' data-bundlename='Thumbnails' href='/rbxcdn/css/9517d686dc47015c200496d77e2b18146ee37652d18e25ecf9e1ed230310ea13.css' />
    
    <link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet' data-bundlename='VerificationUpsell' href='/rbxcdn/css/4cfc9413aaac922000f010ba651f264e59a200d6062d41f8196017ade0094116.css' />
    
    <link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet' data-bundlename='Navigation' href='/rbxcdn/css/b4acdc29672aaf9dec2081fb12cfd9f1c40ecfef7a80915c9e2377bdd251c8bc.css' />
    
    <link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet' data-bundlename='Footer' href='/rbxcdn/css/55b250e8473888792f885d898973a13692fb22157baf61aaffa62ce4545f3408.css' />
    
    
    
        <link rel="canonical" href="https://www.roblox.com/catalog/${props.assetId
		}/${encodedName}" />
        
    <link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet'  href='/rbxcdn/static/css/leanbase___3678d89e5ec3f4d8c65d863691f31de2_m.css/fetch' />
    
    
        
    <link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet'  href='/rbxcdn/static/css/page___57f0fc76be8833b389f705d4d8bfb935_m.css/fetch' />
    
    
    
    <link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet' data-bundlename='Recommendations' href='/rbxcdn/css/586a57331f1f34a5d9672dd52c86a5aeb59212a168d8e314455630d7e3379647.css' />
    
    <link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet' data-bundlename='ItemResale' href='/rbxcdn/css/0b2ddde7d7a30cf3ab5bebe552326a0bf58f1e96d536ec2b33c575810da75fd6.css' />
    
    <link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet' data-bundlename='Captcha' href='/rbxcdn/css/24a76e8ea70afb9462fad013faa3d22ff3e832e8327ddd764dafe328918bed90.css' />
    
    
        <link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet' data-bundlename='RobuxIcon' href='/rbxcdn/css/2f599b9e9ca20ee3c155684adbf1cdcb7220bab681b55b4505123a0c34e81969.css' />
    
    
    
    <link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet' data-bundlename='NotificationStream' href='/rbxcdn/css/b4eb6c5c73a2533aa2d99545849f741ee91a7ac409157e9a8005523abd698e29.css' />
    
        <link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet' data-bundlename='Chat' href='/rbxcdn/css/c0da40b3a6667e911346e3adfbb541802f9883b9c3933e6110ea1160109ac987.css' />
    
    
    
    
        <script type="text/javascript">
        var Roblox = Roblox || {};
        Roblox.RealTimeSettings = Roblox.RealTimeSettings ||
            {
                NotificationsEndpoint: "https://realtime.roblox.com",
                MaxConnectionTime: "21600000",
                IsEventPublishingEnabled: false,
                IsDisconnectOnSlowConnectionDisabled: true,
                IsSignalRClientTransportRestrictionEnabled: true,
                IsLocalStorageInRealTimeEnabled: true,
                IsDebuggerEnabled: "False",
                IsSequenceNumberResetEnabled: true
            }
        </script>
    
    
    
    <script type="text/javascript">
        var Roblox = Roblox || {};
        Roblox.EnvironmentUrls = Roblox.EnvironmentUrls || {};
        Roblox.EnvironmentUrls = {"abtestingApiSite":"https://abtesting.roblox.com","accountInformationApi":"https://accountinformation.roblox.com","accountSettingsApi":"https://accountsettings.roblox.com","adConfigurationApi":"https://adconfiguration.roblox.com","adsApi":"https://ads.roblox.com","apiGatewayUrl":"https://apis.roblox.com","apiProxyUrl":"https://api.roblox.com","assetDeliveryApi":"https://assetdelivery.roblox.com","authApi":"https://auth.roblox.com","authAppSite":"https://authsite.roblox.com","avatarApi":"https://avatar.roblox.com","badgesApi":"https://badges.roblox.com","billingApi":"https://billing.roblox.com","captchaApi":"https://captcha.roblox.com","catalogApi":"https://catalog.roblox.com","chatApi":"https://chat.roblox.com","contactsApi":"https://contacts.roblox.com","contentStoreApi":"https://contentstore.roblox.com","developApi":"https://develop.roblox.com","domain":"roblox.com","economyApi":"https://economy.roblox.com","economycreatorstatsApi":"https://economycreatorstats.roblox.com","engagementPayoutsApi":"https://engagementpayouts.roblox.com","followingsApi":"https://followings.roblox.com","friendsApi":"https://friends.roblox.com","friendsAppSite":"https://friendsite.roblox.com","gamesApi":"https://games.roblox.com","gameInternationalizationApi":"https://gameinternationalization.roblox.com","groupsApi":"https://groups.roblox.com","inventoryApi":"https://inventory.roblox.com","itemConfigurationApi":"https://itemconfiguration.roblox.com","localeApi":"https://locale.roblox.com","localizationTablesApi":"https://localizationtables.roblox.com","metricsApi":"https://metrics.roblox.com","midasApi":"https://midas.roblox.com","notificationApi":"https://notifications.roblox.com","premiumFeaturesApi":"https://premiumfeatures.roblox.com","presenceApi":"https://presence.roblox.com","publishApi":"https://publish.roblox.com","screenTimeApi":"https://apis.rcs.roblox.com/screen-time-api","thumbnailsApi":"https://thumbnails.roblox.com","tradesApi":"https://trades.roblox.com","translationRolesApi":"https://translationroles.roblox.com","universalAppConfigurationApi":"https://apis.roblox.com/universal-app-configuration","usersApi":"https://users.roblox.com","voiceApi":"https://voice.roblox.com","websiteUrl":"https://www.roblox.com","privateMessagesApi":"https://privatemessages.roblox.com","shareApi":"https://share.roblox.com","chatModerationApi":"https://chatmoderation.roblox.com","userModerationApi":"https://usermoderation.roblox.com","groupsModerationApi":"https://groupsmoderation.roblox.com","twoStepVerificationApi":"https://twostepverification.roblox.com"};
    
        // please keep the list in alphabetical order
        var additionalUrls = {
            amazonStoreLink: "https://www.amazon.com/Roblox-Corporation/dp/B00NUF4YOA",
            appProtocolUrl: "robloxmobile://",
            appStoreLink: "https://itunes.apple.com/us/app/roblox-mobile/id431946152",
            googlePlayStoreLink: "https://play.google.com/store/apps/details?id=com.roblox.client&amp;hl=en",
            iosAppStoreLink: "https://itunes.apple.com/us/app/roblox-mobile/id431946152",
            windowsStoreLink: "https://www.microsoft.com/en-us/store/games/roblox/9nblgggzm6wm",
            xboxStoreLink: "https://www.microsoft.com/en-us/p/roblox/bq1tn1t79v9k",
            amazonWebStoreLink: "https://www.amazon.com/roblox?&amp;_encoding=UTF8&amp;tag=r05d13-20&amp;linkCode=ur2&amp;linkId=4ba2e1ad82f781c8e8cc98329b1066d0&amp;camp=1789&amp;creative=9325"
        }
    
        for (var urlName in additionalUrls) {
            Roblox.EnvironmentUrls[urlName] = additionalUrls[urlName];
        }
    </script>
    
    
    
    <script type="text/javascript">
        var Roblox = Roblox || {};
        Roblox.GaEventSettings = {
            gaDFPPreRollEnabled: "false" === "true",
            gaLaunchAttemptAndLaunchSuccessEnabled: "false" === "true",
            gaPerformanceEventEnabled: "false" === "true"
        };
    </script>
    
    
    
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='headerinit' type='text/javascript' src='/rbxcdn/js/7bee61aedcbb4773d878992153fa64e0.js'></script>
    
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='Polyfill' type='text/javascript' src='/rbxcdn/js/4340261c6f9296c0727dc8605acada61ac3db48cad8da1cf5b25f4ac3ab18d7b.js'></script>
    
    
    
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='HeaderScripts' type='text/javascript' src='/rbxcdn/js/db5218c3fbccfaa300942c9c11f581d29079dcf3d27e2b69c410f10ba3aff8d4.js'></script>
    
    
    
    
    <meta name="sentry-meta"
          data-env-name="production"
          data-dsn="https://6750adeb1b1348e4a10b13e726d5c10b@sentry.io/1539367"
          data-sample-rate="0.01" /><script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='Sentry' type='text/javascript' src='/rbxcdn/js/edc66704bd1974195d8c60f4a163441bec82f1bcb11c492e7df07c43f45a4d49.js'></script>
    
    
    <meta name="roblox-tracer-meta-data"
          data-access-token="S3EXjCZQQr6OixnmKu+hoa3OSfpvPP5qgU0esiWgwreFUUMBnPhEaoS5yIIrf9bdYlSgW0XKCb1So9Rhtj1eMzt/MJWcyKZ4TwIckHVj"
          data-service-name="Web"
          data-tracer-enabled="false"
          data-api-sites-request-allow-list="friends.roblox.com,chat.roblox.com,thumbnails.roblox.com,games.roblox.com"
          data-sample-rate="0"
          data-is-instrument-page-performance-enabled="false"/><script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='RobloxTracer' type='text/javascript' src='/rbxcdn/js/a168257175fe69cdb0762a3b8ca5d0a5fd625f77c027d5e4cef7f90a1602d704.js'></script>
    
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='RealTime' type='text/javascript' src='/rbxcdn/js/89f30f6701e04efb9dad1b1fb75ebd7cfe55257af8c8cefbd609039c4d66d8a8.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='CrossTabCommunication' type='text/javascript' src='/rbxcdn/js/948f3bfc9bbd152f537592b51c1a7765cdc0dfc538d74b7e5fc696c476c8792b.js'></script>
    
        
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
    
    <script type="text/javascript">
        var Roblox = Roblox || {};
        Roblox.AdsHelper = Roblox.AdsHelper || {};
        Roblox.AdsLibrary = Roblox.AdsLibrary || {};
    
        Roblox.AdsHelper.toggleAdsSlot = function (slotId, GPTRandomSlotIdentifier) {
            var gutterAdsEnabled = false;
            if (gutterAdsEnabled) {
                googletag.display(GPTRandomSlotIdentifier);
                return;
            }
            
            if (typeof slotId !== 'undefined' && slotId && slotId.length > 0) {
                var slotElm = $("#"+slotId);
                if (slotElm.is(":visible")) {
                    googletag.display(GPTRandomSlotIdentifier);
                }else {
                    var adParam = Roblox.AdsLibrary.adsParameters[slotId];
                    if (adParam) {
                        adParam.template = slotElm.html();
                        slotElm.empty();
                    }
                }
            }
        }
    </script>
    
    
    
        
        <!--[if lt IE 9]>
            <script src="//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script src="//oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    
    <script>
        //Set if it browser's do not track flag is enabled
        var Roblox = Roblox || {};
        (function() {
            var dnt = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
            if (typeof window.external !== "undefined" &&
                typeof window.external.msTrackingProtectionEnabled !== "undefined") {
                dnt = dnt || window.external.msTrackingProtectionEnabled();
            }
            Roblox.browserDoNotTrack = dnt == "1" || dnt == "yes" || dnt === true;
        })();
    </script>
    
    
        <script type="text/javascript">
    
            var _gaq = _gaq || [];
    
                    window.GoogleAnalyticsDisableRoblox2 = true;
            _gaq.push(['b._setAccount', 'UA-486632-1']);
                _gaq.push(['b._setSampleRate', '10']);
            _gaq.push(['b._setCampSourceKey', 'rbx_source']);
            _gaq.push(['b._setCampMediumKey', 'rbx_medium']);
            _gaq.push(['b._setCampContentKey', 'rbx_campaign']);
    
                _gaq.push(['b._setDomainName', 'roblox.com']);
    
                _gaq.push(['b._setCustomVar', 1, 'Visitor', 'Member', 2]);
                    _gaq.push(['b._setPageGroup', 1, 'CatalogItem']);
                _gaq.push(['b._trackPageview']);
    
            _gaq.push(['c._setAccount', 'UA-26810151-2']);
                _gaq.push(['c._setSampleRate', '1']);
                        _gaq.push(['c._setDomainName', 'roblox.com']);
                        _gaq.push(['c._setPageGroup', 1, 'CatalogItem']);
                        
                (function() {
                    if (!Roblox.browserDoNotTrack) {
                        var ga = document.createElement('script');
                        ga.type = 'text/javascript';
                        ga.async = true;
                        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                        var s = document.getElementsByTagName('script')[0];
                        s.parentNode.insertBefore(ga, s);
                    }
            })();
            
         </script>
            <script async src='https://www.googletagmanager.com/gtag/js?id=AW-1065449093'></script>
            <script type="text/javascript">
                var accountCode = "AW-1065449093";
                var signupConversionEventKey = "wmuJCO3CZBCF7YX8Aw";
                var webPurchaseConversionEventKey = "XDQ_CJme6s0BEIXthfwD";
                window.dataLayer = window.dataLayer || [];
    
                function gtag() { dataLayer.push(arguments); }
                gtag.conversionEvents = {
                    signupConversionEvent: accountCode + '/' + signupConversionEventKey,
                    webPurchaseConversionEvent: accountCode + '/' + webPurchaseConversionEventKey
                }
                gtag('js', new Date());
                gtag('config', accountCode);
            </script>
    
        
                <script type="text/javascript">
                if (Roblox && Roblox.EventStream) {
                    Roblox.EventStream.Init("//ecsv2.roblox.com/www/e.png",
                        "//ecsv2.roblox.com/www/e.png",
                        "//ecsv2.roblox.com/pe?t=studio",
                        "//ecsv2.roblox.com/pe?t=diagnostic");
                }
            </script>
    
    
    
    <script type="text/javascript">
        if (Roblox && Roblox.PageHeartbeatEvent) {
            Roblox.PageHeartbeatEvent.Init([2,8,20,60]);
        }
    </script>            <script type="text/javascript">
    if (typeof(Roblox) === "undefined") { Roblox = {}; }
    Roblox.Endpoints = Roblox.Endpoints || {};
    Roblox.Endpoints.Urls = Roblox.Endpoints.Urls || {};
    Roblox.Endpoints.Urls['/asset/'] = 'https://assetgame.roblox.com/asset/';
    Roblox.Endpoints.Urls['/client-status/set'] = 'https://www.roblox.com/client-status/set';
    Roblox.Endpoints.Urls['/client-status'] = 'https://www.roblox.com/client-status';
    Roblox.Endpoints.Urls['/game/'] = 'https://assetgame.roblox.com/game/';
    Roblox.Endpoints.Urls['/game/edit.ashx'] = 'https://assetgame.roblox.com/game/edit.ashx';
    Roblox.Endpoints.Urls['/game/placelauncher.ashx'] = 'https://assetgame.roblox.com/game/placelauncher.ashx';
    Roblox.Endpoints.Urls['/game/preloader'] = 'https://assetgame.roblox.com/game/preloader';
    Roblox.Endpoints.Urls['/game/report-stats'] = 'https://assetgame.roblox.com/game/report-stats';
    Roblox.Endpoints.Urls['/game/report-event'] = 'https://assetgame.roblox.com/game/report-event';
    Roblox.Endpoints.Urls['/game/updateprerollcount'] = 'https://assetgame.roblox.com/game/updateprerollcount';
    Roblox.Endpoints.Urls['/login/default.aspx'] = 'https://www.roblox.com/login/default.aspx';
    Roblox.Endpoints.Urls['/my/avatar'] = 'https://www.roblox.com/my/avatar';
    Roblox.Endpoints.Urls['/my/money.aspx'] = 'https://www.roblox.com/my/money.aspx';
    Roblox.Endpoints.Urls['/navigation/userdata'] = 'https://www.roblox.com/navigation/userdata';
    Roblox.Endpoints.Urls['/chat/chat'] = 'https://www.roblox.com/chat/chat';
    Roblox.Endpoints.Urls['/chat/data'] = 'https://www.roblox.com/chat/data';
    Roblox.Endpoints.Urls['/friends/list'] = 'https://www.roblox.com/friends/list';
    Roblox.Endpoints.Urls['/navigation/getcount'] = 'https://www.roblox.com/navigation/getCount';
    Roblox.Endpoints.Urls['/regex/email'] = 'https://www.roblox.com/regex/email';
    Roblox.Endpoints.Urls['/catalog/browse.aspx'] = 'https://www.roblox.com/catalog/browse.aspx';
    Roblox.Endpoints.Urls['/catalog/html'] = 'https://search.roblox.com/catalog/html';
    Roblox.Endpoints.Urls['/catalog/json'] = 'https://search.roblox.com/catalog/json';
    Roblox.Endpoints.Urls['/catalog/contents'] = 'https://search.roblox.com/catalog/contents';
    Roblox.Endpoints.Urls['/catalog/lists.aspx'] = 'https://search.roblox.com/catalog/lists.aspx';
    Roblox.Endpoints.Urls['/catalog/items'] = 'https://search.roblox.com/catalog/items';
    Roblox.Endpoints.Urls['/asset-hash-thumbnail/image'] = 'https://assetgame.roblox.com/asset-hash-thumbnail/image';
    Roblox.Endpoints.Urls['/asset-hash-thumbnail/json'] = 'https://assetgame.roblox.com/asset-hash-thumbnail/json';
    Roblox.Endpoints.Urls['/asset-thumbnail-3d/json'] = 'https://assetgame.roblox.com/asset-thumbnail-3d/json';
    Roblox.Endpoints.Urls['/asset-thumbnail/image'] = 'https://assetgame.roblox.com/asset-thumbnail/image';
    Roblox.Endpoints.Urls['/asset-thumbnail/json'] = 'https://assetgame.roblox.com/asset-thumbnail/json';
    Roblox.Endpoints.Urls['/asset-thumbnail/url'] = 'https://assetgame.roblox.com/asset-thumbnail/url';
    Roblox.Endpoints.Urls['/asset/request-thumbnail-fix'] = 'https://assetgame.roblox.com/asset/request-thumbnail-fix';
    Roblox.Endpoints.Urls['/avatar-thumbnail-3d/json'] = 'https://www.roblox.com/avatar-thumbnail-3d/json';
    Roblox.Endpoints.Urls['/avatar-thumbnail/image'] = 'https://www.roblox.com/avatar-thumbnail/image';
    Roblox.Endpoints.Urls['/avatar-thumbnail/json'] = 'https://www.roblox.com/avatar-thumbnail/json';
    Roblox.Endpoints.Urls['/avatar-thumbnails'] = 'https://www.roblox.com/avatar-thumbnails';
    Roblox.Endpoints.Urls['/avatar/request-thumbnail-fix'] = 'https://www.roblox.com/avatar/request-thumbnail-fix';
    Roblox.Endpoints.Urls['/bust-thumbnail/json'] = 'https://www.roblox.com/bust-thumbnail/json';
    Roblox.Endpoints.Urls['/group-thumbnails'] = 'https://www.roblox.com/group-thumbnails';
    Roblox.Endpoints.Urls['/groups/getprimarygroupinfo.ashx'] = 'https://www.roblox.com/groups/getprimarygroupinfo.ashx';
    Roblox.Endpoints.Urls['/headshot-thumbnail/json'] = 'https://www.roblox.com/headshot-thumbnail/json';
    Roblox.Endpoints.Urls['/item-thumbnails'] = 'https://www.roblox.com/item-thumbnails';
    Roblox.Endpoints.Urls['/outfit-thumbnail/json'] = 'https://www.roblox.com/outfit-thumbnail/json';
    Roblox.Endpoints.Urls['/place-thumbnails'] = 'https://www.roblox.com/place-thumbnails';
    Roblox.Endpoints.Urls['/thumbnail/asset/'] = 'https://www.roblox.com/thumbnail/asset/';
    Roblox.Endpoints.Urls['/thumbnail/avatar-headshot'] = 'https://www.roblox.com/thumbnail/avatar-headshot';
    Roblox.Endpoints.Urls['/thumbnail/avatar-headshots'] = 'https://www.roblox.com/thumbnail/avatar-headshots';
    Roblox.Endpoints.Urls['/thumbnail/user-avatar'] = 'https://www.roblox.com/thumbnail/user-avatar';
    Roblox.Endpoints.Urls['/thumbnail/resolve-hash'] = 'https://www.roblox.com/thumbnail/resolve-hash';
    Roblox.Endpoints.Urls['/thumbnail/place'] = 'https://www.roblox.com/thumbnail/place';
    Roblox.Endpoints.Urls['/thumbnail/get-asset-media'] = 'https://www.roblox.com/thumbnail/get-asset-media';
    Roblox.Endpoints.Urls['/thumbnail/remove-asset-media'] = 'https://www.roblox.com/thumbnail/remove-asset-media';
    Roblox.Endpoints.Urls['/thumbnail/set-asset-media-sort-order'] = 'https://www.roblox.com/thumbnail/set-asset-media-sort-order';
    Roblox.Endpoints.Urls['/thumbnail/place-thumbnails'] = 'https://www.roblox.com/thumbnail/place-thumbnails';
    Roblox.Endpoints.Urls['/thumbnail/place-thumbnails-partial'] = 'https://www.roblox.com/thumbnail/place-thumbnails-partial';
    Roblox.Endpoints.Urls['/thumbnail_holder/g'] = 'https://www.roblox.com/thumbnail_holder/g';
    Roblox.Endpoints.Urls['/users/{id}/profile'] = 'https://www.roblox.com/users/{id}/profile';
    Roblox.Endpoints.Urls['/service-workers/push-notifications'] = 'https://www.roblox.com/service-workers/push-notifications';
    Roblox.Endpoints.Urls['/notification-stream/notification-stream-data'] = 'https://www.roblox.com/notification-stream/notification-stream-data';
    Roblox.Endpoints.Urls['/api/friends/acceptfriendrequest'] = 'https://www.roblox.com/api/friends/acceptfriendrequest';
    Roblox.Endpoints.Urls['/api/friends/declinefriendrequest'] = 'https://www.roblox.com/api/friends/declinefriendrequest';
    Roblox.Endpoints.Urls['/authentication/is-logged-in'] = 'https://www.roblox.com/authentication/is-logged-in';
    Roblox.Endpoints.addCrossDomainOptionsToAllRequests = true;
    </script>
    
        <script type="text/javascript">
    if (typeof(Roblox) === "undefined") { Roblox = {}; }
    Roblox.Endpoints = Roblox.Endpoints || {};
    Roblox.Endpoints.Urls = Roblox.Endpoints.Urls || {};
    </script>
    
        <script>
        Roblox = Roblox || {};
        Roblox.AbuseReportPVMeta = {
            desktopEnabled: true,
            phoneEnabled: false,
            inAppEnabled: false
        };
    </script>
    
    
    <meta name="thumbnail-meta-data" 
          data-is-webapp-cache-enabled="False"
          data-webapp-cache-expirations-timespan="00:01:00"
          data-request-min-cooldown="1000"
          data-request-max-cooldown="30000"
          data-request-max-retry-attempts="5"
          data-request-batch-size="100"
          data-thumbnail-metrics-sample-size="50"/>
                              
    
    </head>
    <body id="rbx-body"
          class="rbx-body   light-theme gotham-font"
          data-performance-relative-value="0.005"
          data-internal-page-name="CatalogItem"
          data-send-event-percentage="0">
        <div id="roblox-linkify" data-enabled="true" data-regex="(https?\\:\\/\\/)?(?:www\\.)?([a-z0-9-]{2,}\\.)*(((m|de|www|web|api|blog|wiki|corp|polls|bloxcon|developer|devforum|forum|status)\\.roblox\\.com|robloxlabs\\.com)|(www\\.shoproblox\\.com)|(roblox\\.status\\.io)|(rblx\\.co)|help\\.roblox\\.com(?![A-Za-z0-9\\/.]*\\/attachments\\/))(?!\\/[A-Za-z0-9-+&amp;@#\\/=~_|!:,.;]*%)((\\/[A-Za-z0-9-+&amp;@#\\/%?=~_|!:,.;]*)|(?=\\s|\\b))" data-regex-flags="gm" data-as-http-regex="(([^.]help|polls)\\.roblox\\.com)"></div>
    
    <div id="image-retry-data"
         data-image-retry-max-times="30"
         data-image-retry-timer="500"
         data-ga-logging-percent="10">
    </div>
    <div id="http-retry-data"
         data-http-retry-max-timeout="0"
         data-http-retry-base-timeout="0"
         data-http-retry-max-times="1">
    </div>
                    <div id="TosAgreementInfo"
                     data-terms-check-needed="False">
                </div>
    
        
    
    
    <div id="fb-root"></div>
    
    <div id="wrap" class="wrap no-gutter-ads logged-in"
         data-gutter-ads-enabled="false">
    
    
		<navbar />

        <div class="container-main 
                    
                    
                    
                    
                    
                    "
             id="container-main">
                <script type="text/javascript">
                    if (top.location != self.location) {
                        top.location = self.location.href;
                    }
                </script>
    
                <div class="alert-container">
    
                    <noscript><div><div class="alert-info" role="alert">Please enable Javascript to use all the features on this site.</div></div></noscript>
                    ${systemAlert()}
                    
    
                </div>
    
    
            <div class="content">
    
                                <div id="Leaderboard-Abp" class="abp leaderboard-abp">
                        
    
    <iframe name="Roblox_Item_Top_728x90" 
            allowtransparency="true"
            frameborder="0"
            height="110"
            scrolling="no"
            data-src=""
            src="https://www.roblox.com/user-sponsorship/1"
            width="728"
            data-js-adtype="iframead"
            data-ad-slot="Roblox_Item_Top_728x90"></iframe>
                    </div>
                
    
    
    <div id="item-container"
         class="page-content
         inline-social
         
         
         "
         data-item-id="${props.assetId}"
         data-item-type="Asset"
         data-item-name="${props.name || ''}"
         data-asset-type="${props.type || ''}"
         data-asset-type-display-name="${typeDName || ''}"
         data-userasset-id="${(copyToSell && copyToSell.id) || ''}"
         data-is-purchase-enabled="true"
         data-product-id="${props.assetId}"
         data-bc-requirement="0"
         data-expected-currency="1"
         data-expected-price="${props.bestPrice || props.price}"
         data-seller-name="${props.isForSale
			? props.creator.name
			: (props.bestPriceData && props.bestPriceData.username) ||
			''
		}"
         data-expected-seller-id="${props.isForSale
			? props.creator.id
			: (props.bestPriceData && props.bestPriceData.userId) || ''
		}"
         data-lowest-private-sale-userasset-id="${(!props.isForSale &&
			props.bestPriceData &&
			props.bestPriceData.userAssetId) ||
		''
		}"
         data-is-limited-unique="${props.isLimitedU || 'false'}"
         data-user-id="1335179568"
         data-asset-granted="False"
         data-forward-url=""
         data-avatar-wear-url="https://avatar.roblox.com/v1/avatar/assets/${props.assetId
		}/wear"
         data-avatar-remove-url="https://avatar.roblox.com/v1/avatar/assets/${props.assetId
		}/remove"
         data-current-time="${moment().format('M/D/YYYY hh:mm:ss A')}"
         data-is-try-in-studio-test-enabled="false"
         data-is-user-enrolled-in-try-in-studio-test="false">
    <div class="system-feedback">
        <div class="alert-system-feedback">
            <div class="alert alert-success">Purchase Completed</div>
        </div>
        <div class="alert-system-feedback">
            <div class="alert alert-warning">Error occurred</div>
        </div>
    </div>
        <div class="remove-panel section-content top-section">
        <div class="border-bottom item-name-container">
            <h2>${props.name}</h2>
            <div>
    
                <span class="text-label">By <a href='${props.creator.type === 'User'
			? `/users/${props.creator.id}/profile/`
			: `/groups/${props.creator.id}`
		}' class='text-name'>${props.creator.name}</a></span>
                    ${props.copiesOwnedByRequester &&
			props.copiesOwnedByRequester.length >= 1
			? `
                    <div class="divider">&nbsp;</div>
                    <div class="label-checkmark">
                        <span class="icon-checkmark-white-bold"></span>
                    </div>
                        ${props.copiesOwnedByRequester.length === 1
				? `<span>Item Owned</span>`
				: `<span>Item Owned (${props.copiesOwnedByRequester.length.toLocaleString()})</span>`
			}

        `
			: ''
		}
            </div>
        </div>
            <div class="item-thumbnail-container ">
    
    
     
    
    <div id="use-dynamic-thumbnail-lighting" class="hidden" data-use-dynamic-thumbnail-lighting="False"></div>
    
    <div id="AssetThumbnail" class="asset-thumb-container thumbnail-holder
         
         thumbnail-Large
         three-dee-static"
         
         data-reset-enabled-every-page
         data-3d-thumbs-enabled
         three-dee-static
         data-3dtype="static"
         data-url="">
        <div id="current-animation-name"></div>
    
    <span class="thumbnail-span" data-3d-url="/asset-thumbnail-3d/json?assetId=${props.assetId
		}" ><img  class='' src='${thumbnail}'/></span><span class="thumbnail-span-original hidden" data-3d-url="/asset-thumbnail-3d/json?assetId=${props.assetId
		}" ><img  class='' src='${thumbnail}'/></span><span class="thumbnail-span-try-it-on hidden" data-3d-url="/temp-outfit-thumbnail-3d/json?assetId=${props.assetId
		}" data-retry-url="/temp-outfit-thumbnail/json?assetId=${props.assetId
		}&amp;width=420&amp;height=420&amp;format=Png" data-orig-retry-url="/temp-outfit-thumbnail/json?assetId=${props.assetId
		}&amp;width=420&amp;height=420&amp;format=Png" ><img alt='You, trying the asset on.' class='' src=''/></span>    <div class="equipped-marker"></div>
    
        <div class="thumbnail-buttons">
                <span class="try-it-on btn-control-sm"></span>
                        <button class="border enable-three-dee three-dee-static-icon thumb-interactive-btn btn-control-md"></button>
        </div>
    
    
            <div class="asset-status-icon">

            <!-- Timer Badge -->
            ${props.offSaleDeadline && props.isForSale
			? `
            <div class="status-sale has-icon">
                    <span class="icon-clock"></span>
                <span>
                    
                </span>
            </div>

            `
			: ''
		}
    
            </div>
    
            ${props.isLimitedU
			? `
    <div class="asset-restriction-icon">
            <span class="rbx-tooltip" data-toggle="tooltip" title="" data-original-title="Serialized limited release, resellable.">
                <span class="icon-label icon-limited-unique-label"></span>
            </span></div>`
			: props.isLimited
				? `<div class="asset-restriction-icon">
            <span class="rbx-tooltip" data-toggle="tooltip" title="" data-original-title="Limited release, resellable.">
                <span class="icon-label icon-limited-label"></span>
            </span></div>`
				: ''
		}
    
    
    </div>
    <script type="text/javascript">
        (function () {
            if (Roblox && Roblox.Performance) {
                Roblox.Performance.setPerformanceMark("itemReskin_thumbnail_loaded");
            }
        })();
    </script>
            </div>
    
            <div id="item-details" class="content-overflow-toggle content-height content-overflow-page-loading item-details">
                        <div class="clearfix price-container">
                        ${props.copiesOwnedByRequester &&
			props.copiesOwnedByRequester.length >= 1 &&
			!props.isLimited &&
			!props.isLimitedU
			? `<div class="item-first-line mt-4">This item is available in your inventory.</div>`
			: ''
		}
                            <div class="price-container-text">
                                    ${isFree ? '' : props.isForSale
			? `<div class="text-label field-label price-label">Price</div>`
			: props.bestPrice &&
				(props.isLimited ||
					props.isLimitedU)
				? `
                                        <div class="text-label field-label price-label">Best Price</div>
                                    <div class="price-info">
    
                                            <div class="icon-text-wrapper clearfix icon-robux-price-container">
                                                    <span class="icon-robux-16x16 wait-for-i18n-format-render invisible"></span>
    
                                                    <span class="text-robux-lg wait-for-i18n-format-render invisible">${props.bestPrice.toLocaleString()}</span>
                                            </div>
                                        </div>
                                            
                                            `
				: !props.bestPrice &&
					(props.isLimited ||
						props.isLimitedU)
					? `
                                            
                                            <div class="item-first-line">There is no one currently selling this item.</div>

                                            
                                            `
					: !props.copiesOwnedByRequester ||
						(props.copiesOwnedByRequester &&
							props.copiesOwnedByRequester
								.length === 0)
						? ` <div class="item-first-line">This item is not currently for sale.</div>`
						: ''
		}


                                    ${props.isForSale &&
			props.price &&
			!props.bestPrice &&
			!isFree
			? `
                                    <div class="price-info">
                                            <div class="icon-text-wrapper clearfix icon-robux-price-container">
                                                    <span class="icon-robux-16x16 wait-for-i18n-format-render invisible"></span>
                                                    <span class="text-robux-lg wait-for-i18n-format-render invisible">${props.price.toLocaleString()}</span>
                                            </div>
                                    </div>                                    
                                    `
			: ''
		}
                            </div>
                            <div class="action-button">
                            ${(props.copiesOwnedByRequester.length === 0 &&
			props.isForSale) ||
			props.bestPrice
			? `
			${!isFree ? `<button type="button"
                                                        class="btn-fixed-width-lg btn-growth-lg PurchaseButton"
                                                        data-button-type="main"
                                                        data-button-action="buy"
                                                        >
                                                    Buy
                                                </button>` : `<button type="button"
                                                        class="btn-fixed-width-lg btn-growth-lg PurchaseButton"
                                                        data-button-type="main"
                                                        data-button-action="get"
                                                        >
                                                    Take
                                                </button>`
			}
                                                
                                                ${props.offSaleDeadline &&
				props.isForSale
				? `<div id="sale-clock" class="text-error sale-clock desktop-sale-clock" data-off-sale-deadline="${moment(
					props.offSaleDeadline
				).format(
					'M/D/YYYY hh:mm:ss A'
				)}">
                                                <div class="text"></div>
                                            </div>`
				: ''
			}
                                                `
			: !props.bestPrice &&
				!props.isForSale &&
				(props.isLimited || props.isLimitedU)
				? `
                                                
                                                <button type="button" class="btn-fixed-width-lg btn-growth-lg" disabled="">Buy</button>
                                                
                                                `
				: props.copiesOwnedByRequester
					? ''
					: `<button type="button" class="btn-fixed-width-lg btn-growth-lg" disabled="">Buy</button>`
		}
                            </div>
                            ${props.copiesAvailable &&
			typeof props.copiesTotal === 'number'
			? `
                                <div class="font-caption-body item-note has-price-label">
                                    <span class='text limited-quantity'>Limited quantity: ${props.copiesAvailable.toLocaleString()}</span><span class='text-label'>/ ${props.copiesTotal.toLocaleString()}</span>
                                </div>`
			: ''
		}
                            ${props.bestPrice &&
			(props.isLimitedU || props.isLimited)
			? `<div class="font-caption-body item-note has-price-label">
                            See more <a id='resellersLink' class='text-link'>Resellers</a>
                        </div>`
			: ''
		}
                        </div>
                        <div class="clearfix item-mobile-description item-field-container">
                            <p class="description-content font-body text wait-for-i18n-format-render invisible">${props.description || 'No description available'
		}</p>
                        </div>
                    <div class="clearfix item-type-field-container">
                        <div class="font-header-1 text-subheader text-label text-overflow field-label">Type</div>
                        <span id="type-content" class="font-body text wait-for-i18n-format-render invisible">${props.type.indexOf('Accessory') !== -1
			? 'Accessory | ' + typeDName
			: typeDName
		}</span>
                    </div>
                        <div class="clearfix item-field-container">
                            <div class="font-header-1 text-subheader text-label text-overflow field-label">Genres</div>
                            <div class="field-content">
                            ${props.genres
			.map((v) => {
				return `<a class="text-name item-genre wait-for-i18n-format-render invisible" href="https://www.roblox.com/${v}-catalog">
                                ${v}
                            </a>
                            <span class="wait-for-i18n-format-render invisible"></span>`;
			})
			.join(',')}
                                        
                            </div>
                        </div>
                        <div class="clearfix toggle-target item-field-container">
                            <div class="font-header-1 text-subheader text-label text-overflow field-label">Description</div>
                            <p id="item-details-description"
                                 class="content-overflow-toggle field-content content-height content-overflow-page-loading font-body text description-content wait-for-i18n-format-render invisible">${props.description ||
		'No description available.'
		}</p>
                            <span class="hidden field-content toggle-content text-link cursor-pointer"
                                  data-container-id="item-details-description"
                                  data-show-label="Read More"
                                  data-hide-label="Show Less">Read More</span>
                        </div>
                    <div class="hide show-more-end" data-container-id="item-details"></div>
                    <button type="button" class="hidden btn-full-width btn-control-md toggle-content" data-container-id="item-details" data-show-label="Read More" data-hide-label="Show Less">Read More</button>
    
            </div>
            <ul class="item-social-container clearfix include-favorite  include-social">
    
            <li class="favorite-button-container">
            <!--
                <div class="tooltip-container" data-toggle="tooltip" title="" data-original-title="Add to Favorites">
                    <a id="toggle-favorite" data-toggle-url="/v2/favorite/toggle" data-targetId="${props.assetId
		}" data-isguest="False" data-favoriteType="Asset" 
                       data-signin-url="https://www.roblox.com/newlogin?returnUrl=%2Fcatalog%2F${props.assetId
		}%2F${encodedName}">
                        <span title="40,107" class="text-favorite favoriteCount 40,107" id="result">40K+</span>
                        <div id="favorite-icon" class="icon-favorite "></div>
                    </a>
                </div>
                -->
            </li>
                                             <li class="social-media-share">
    
    
    
    <div class="social-share-container">
            <a class="icon-share" id="rbx-share-btn"></a>
        <div class="rbx-share-container">
            <div class="share-container-inner">
            </div>
        </div>
    </div>
    
    <div id="social-share-context"
         data-share-type="item"
         data-context="itemDetails"
         data-share-item-id="${props.assetId}"></div>
    
    <div id="facebook-button-data"
         data-provider="Facebook"
         data-enable-count="true"
         data-icon-img-up="/rbxcdn/images/4799659a1367d6c6e235b5986cb9b6b9.png"></div>
    
    <div id="twitter-button-data"
         data-provider="Twitter"
         data-enable-count="true"
         data-icon-img-up="/rbxcdn/images/d75e7a07fd4db793d79060cc5976cb29.png"></div>
    
    <div id="social-share-data"
         data-text="${props.name}"
         data-link="https://www.roblox.com/library/${props.assetId
		}/${encodedName}?rbxp=1335179568"
         data-count-url="https://www.roblox.com/catalog/${props.assetId
		}/${encodedName}"
         data-image-url="/rbxcdn/tr/e6d60ca06af1e0308c3ddb06e09037d3/140/140/Hat/Png"></div>
    
    
                    </li>
            </ul>



            ${(props.copiesOwnedByRequester &&
			props.copiesOwnedByRequester.length >= 1) ||
			props.isPinned
			? `
            <div id="item-context-menu">
   <a class="rbx-menu-item item-context-menu" data-toggle="popover" data-trigger="focus" data-bind="popover-content">
   <span class="icon-more"></span>
   </a>
   <div class="rbx-popover-content" data-toggle="popover-content">
      <ul class="dropdown-menu" role="menu">

      ${(props.isLimited || props.isLimitedU) &&
				props.copiesOwnedByRequester.length >= 1
				? `
         <li>
            <a class="toggle-wear" 
               tabindex="0" 
               role="button" 
               data-toggle="false">
            Wear
            </a>
         </li>

         
         <li class="">
            <a tabindex="0" 
               role="button" 
               id="sell">
            Sell
            </a>
         </li>
         <li class="${copiesOnSale.length > 0 ? '' : 'hidden'}">
            <a tabindex="0" 
               role="button" 
               id="take-off-sale">
            Take Off Sale
            </a>
         </li>
         `
				: ''
			}
         ${props.isPinned
				? `<li>
                    <a class="toggle-profile" 
                       tabindex="0" 
                       role="button" 
                       data-toggle="True">
                        Remove from Profile
                    </a>
                </li>`
				: props.copiesOwnedByRequester.length >= 1
					? `
         <li>
            <a class="toggle-profile" 
               tabindex="0" 
               role="button" 
               data-toggle="False">
            Add to Profile
            </a>
         </li>
         `
					: ''
			}
      </ul>
   </div>
</div>
<div id="sell-modal-content" class="hidden">
   <div class="hidden">
      <div class="text-label">Serial Number</div>
      <div class="rbx-select-group">
         <select class="rbx-select serial-dropdown">
         ${props.copiesOwnedByRequester
				.filter((v) => {
					return v.price === 0;
				})
				.map((v) => {
					return `<option value="${v.id}">${(v.serial || 'N/A') +
						' of ' +
						((props.copiesTotal &&
							props.copiesTotal.toLocaleString()) ||
							'N/A')
						}</option>`;
				})
				.join('')}
         </select>
      </div>
      <br />
   </div>
   <div class="text-label">Price (minimum 1)</div>
   <div class="form-group price-form">
      <input class="form-control input-field sell-price" maxlength="15" />
      <p class="form-control-label">Price is invalid</p>
   </div>
   <div class="text-overflow commission-label" data-rate="0.3">Marketplace fee (at 30%)<span class="icon-robux-16x16"></span><span class="text-robux commission"></span></div>
   <div class="text-overflow after-commission-label"><span>You get</span><span class="icon-robux-16x16"></span><span class="text-robux after-commission"></span></div>
</div>
<div id="confirm-sell-modal" class="hidden">
   <div class="below-market-warning" data-low-price-warning-percentage="10">
      <div>
         Are you sure you want to sell ${props.name
			} for <span class='icon-robux-20x20'></span><span class='text-robux attempted-sell-price'></span>?
      </div>
      <div>
         ${props.name
			}'s recent average price is <span class='icon-robux-20x20'></span><span class='text-robux average-price'></span>.
      </div>
      <br />
   </div>
</div>
<div id="take-off-sale-modal-content" class="hidden">
   <div class="hidden">
      <div class="text-label">Serial Number</div>
      <div class="rbx-select-group">
         <select class="rbx-select serial-dropdown">
         ${props.copiesOwnedByRequester
				.filter((v) => {
					return v.price !== 0;
				})
				.map((v) => {
					return `<option value="${v.id}">${(v.serial || 'N/A') +
						' of ' +
						((props.copiesTotal &&
							props.copiesTotal.toLocaleString()) ||
							'N/A')
						}</option>`;
				})
				.join('')}
         </select>
      </div>
      <br />
   </div>
   <div>Are you sure you want to take the item off sale?</div>
   <br />
</div>
`
			: ''
		}






</div>





    ${(props.isLimited || props.isLimitedU) && !props.isForSale
			? `
                <asset-resale-pane asset-id="${props.assetId}"></asset-resale-pane>
                <script>
                    $(document).ready(function () {
                        Roblox.Resellers.init();
                    });
                </script>
`
			: ''
		}



        <div id="recommendations-container">
            <div class="container-list recommendations-placeholder"
                 ng-hide="isPlaceholderOff">
                <span class="spinner spinner-default"></span>
            </div>
                    <recommendations recommendation-target-id="${props.assetId}"
                                     recommendation-type="0"
                                     recommendation-subtype="${props.assetTypeId}"
                                     recommendation-itemtypes={"Asset":0,"Badge":1,"Bundle":2}
                                     page-name="CatalogItem"></recommendations>
    
        </div>
    
    
    



    <div>
	${props.commentsEnabled ? `
    <div id="AjaxCommentsContainer" class="comments-container"
         data-asset-id="${props.assetId}"
         data-total-collection-size=""
         data-is-user-authenticated="True"
         data-signin-url="https://www.roblox.com/newlogin"
         data-account-url="https://www.roblox.com/my/account?confirmemail=1"
         data-newline-limit="3"
         data-character-limit="200"
         data-filter-enabled="true"
         data-bedev2-captcha-enabled="true"
         data-is-error-code-returned-from-comments-post-endpoint="true">

        <div class="container-header">
            <h3>Comments</h3>
        </div>
        <div class="section-content AddAComment">
                <captcha>
                    <div class="modal" id="comments-fun-captcha-container">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <div id="comments-fun-captcha" class="captchav2-funcaptcha-modal-body"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </captcha>
            <div class="comment-form">
                <form class="form-horizontal ng-pristine ng-valid" role="form">
                    <div class="form-group">
                        <textarea class="form-control input-field rbx-comment-input blur" placeholder="Write a comment!" rows="1"></textarea>
                        <div class="rbx-comment-msgs">
                            <span class="rbx-comment-error text-error text-overflow"></span>
                            <span class="rbx-comment-count small text"></span>
                        </div>
                    </div>
                    <button type="button" class="btn-secondary-md rbx-post-comment">Post Comment</button>
                </form>
            </div>
            <div class="comments vlist">

            </div>
            <div class="comments-item-template">
                <div class="comment-item list-item">
                    <div class="comment-user list-header">
                        <div class="Avatar avatar avatar-headshot-md" data-user-id="comment-author-id" data-image-size="small"></div>
                    </div>
                    <div class="comment-body list-body">
                        <a class="text-name">username</a>
                        <p class="comment-content list-content">text</p>
                        <span class="xsmall text-date-hint">4 hours ago</span>
                    </div>
                    <div class="comment-controls">
                        <a class="rbx-comment-report-link abuse-report-modal" href="https://www.roblox.com/abusereport/comment?id=%CommentID&amp;RedirectUrl=%PageURL" title="Report Abuse"><span class="icon-flag"></span></a>
                    </div>
                </div>
            </div>

            <div class="loader-template">
<div class="loading-animated">
    <div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
            </div>

            <div id="AjaxCommentsMoreButtonContainer" class="ajax-comments-more-button-container">
                <button type="button" class="btn-control-sm rbx-comments-see-more hidden">See More</button>
            </div>

        </div>
    </div>
` : ''}

</div></div>
    
    
    <div class="GenericModal modalPopup unifiedModal smallModal" style="display:none;">
        <div class="Title"></div>
        <div class="GenericModalBody">
            <div>
                <div class="ImageContainer">
                    <img class="GenericModalImage" alt="generic image"/>
                </div>
                <div class="Message"></div>
            </div>
            <div class="clear"></div>
            <div id="GenericModalButtonContainer" class="GenericModalButtonContainer">
                <a class="ImageButton btn-neutral btn-large roblox-ok">OK</a>
            </div>
        </div>
    </div>
    
    
    <div id="ItemPurchaseAjaxData"
         data-has-currency-service-error="False"
         data-currency-service-error-message=""
         data-authenticateduser-isnull="False"
         data-user-balance-robux="${robuxBalance}"
         data-user-bc="0"
         data-continueshopping-url="https://www.roblox.com/catalog/${props.assetId
		}/${encodedName}"
         data-imageurl ="https://www.roblox.com/thumbs/asset.ashx?width=110&height=110&assetid=${props.assetId
		}"
         data-alerturl ="/rbxcdn/images/75af9e2cb6a75450bee5245f5ee11c86.svg.gzip"
         data-inSufficentFundsurl ="/rbxcdn/images/b80339ddf867ccfe6ab23a2c263d8000.png"
         data-is-bc-only-requirement-enabled ="False"
         data-is-plugins-purchasing-enabled ="True"
         data-is-modal-footer-centered-enabled = "True"
         >
        
    </div>
                    <div id="Skyscraper-Abp-Right" class="abp abp-container right-abp">
                        
    
    <iframe name="Roblox_Item_Right_160x600" 
            allowtransparency="true"
            frameborder="0"
            height="612"
            scrolling="no"
            data-src=""
            src="https://www.roblox.com/user-sponsorship/2"
            width="160"
            data-js-adtype="iframead"
            data-ad-slot="Roblox_Item_Right_160x600"></iframe>
                    </div>
    
            </div>
                </div> 
                ${footer()}
    
    
    
    
    
    
    
    <script type="text/javascript">
        var Roblox = Roblox || {};
        Roblox.jsConsoleEnabled = false;
    </script>
    
    
    
        <script type="text/javascript">
            $(function () {
                Roblox.CookieUpgrader.domain = 'roblox.com';
                Roblox.CookieUpgrader.upgrade("GuestData", { expires: Roblox.CookieUpgrader.thirtyYearsFromNow });
                Roblox.CookieUpgrader.upgrade("RBXSource", { expires: function (cookie) { return Roblox.CookieUpgrader.getExpirationFromCookieValue("rbx_acquisition_time", cookie); } });
                Roblox.CookieUpgrader.upgrade("RBXViralAcquisition", { expires: function (cookie) { return Roblox.CookieUpgrader.getExpirationFromCookieValue("time", cookie); } });
                    
                    Roblox.CookieUpgrader.upgrade("RBXMarketing", { expires: Roblox.CookieUpgrader.thirtyYearsFromNow });
                    
                                
                    Roblox.CookieUpgrader.upgrade("RBXSessionTracker", { expires: Roblox.CookieUpgrader.fourHoursFromNow });
                    
                                
                    Roblox.CookieUpgrader.upgrade("RBXEventTrackerV2", {expires: Roblox.CookieUpgrader.thirtyYearsFromNow});
                    
            });
        </script>
    
    
        
    
        
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='intl-polyfill' type='text/javascript' src='/rbxcdn/js/d44520f7da5ec476cfb1704d91bab327.js'></script>
    
    
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='InternationalCore' type='text/javascript' src='/rbxcdn/js/ff3308aa2e909de0f9fcd5da7b529db247f69fe9b4072cbbc267749800a4d9e6.js'></script>
    
    
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='TranslationResources' type='text/javascript' src='/rbxcdn/js/83d836a661ff433d5b7ce719c489e43af590ff75ab39ccc6d393546fe91b766a.js'></script>
    
    
    
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='leanbase' type='text/javascript' src='/rbxcdn/js/63c7df988cef893b4f0e4bc471c56fff.js'></script>
        <script>
            Roblox.Linkify = {
                String: (str) => {
                    return str;
                }
            }
        </script>
    
    
        <CoreUtilities />
    
    
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='CoreRobloxUtilities' type='text/javascript' src='/rbxcdn/js/0cb1c033a6c4762465104b8b977992e95d490fee2b22c4bc2ab1ed5d48e9ebe7.js'></script>
    
    
    
    
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='React' type='text/javascript' src='/rbxcdn/js/6beb1c5bcec1a4449303da9e523d45a1aa1652f9b42ae6c8a3ac347955ca3b3f.js'></script>
    
    
        <ReactUtilities />
    
    
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='ReactStyleGuide' type='text/javascript' src='/rbxcdn/js/253dbc984ab23858a24067ed2cab303c4e8f3dbbaf8c37914bfd19d12dd0b161.js'></script>
    
    
    
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='angular' type='text/javascript' src='/rbxcdn/js/ae3d621886e736e52c97008e085fa286.js'></script>
    
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='AngularJsUtilities' type='text/javascript' src='/rbxcdn/js/dad62999a25adbced1d15f7d7caeaaab02f963ab5da93d4200b3bf1c29a91b25.js'></script>
    
    
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='InternationalAngularJs' type='text/javascript' src='/rbxcdn/js/95f7afb5fcb3c8ae379d51661e32c54ea8d8b823ace7574bd0b7fab9275cba6b.js'></script>
    
    
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='Thumbnails' type='text/javascript' src='/rbxcdn/js/ed49a01b602c4b87904bd61317bf8be809837473372bfafc163f566a30430a31.js'></script>
    
    
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='PresenceStatus' type='text/javascript' src='/rbxcdn/js/8c50632c6b51d45c814a976484564e622f462db77adfcf3c1e3c21f9a9f1722f.js'></script>
    
    
    
    
    <div id="presence-registration-bootstrap-data"
         data-is-enabled="True"
         data-interval="15000"></div><script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='PresenceRegistration' type='text/javascript' src='/rbxcdn/js/0a83202cf5f2310227e607928f73a26cdaa7d5c27f892b99ef51ec3b863a694d.js'></script>
    
        <div ng-modules="baseTemplateApp">
            <script type="text/javascript" src="/rbxcdn/js/ffcc04436179c6b2a6668fdfcfbf62b1.js"></script>
        </div>
    
        <div ng-modules="pageTemplateApp">
            <!-- Template bundle: page -->
    <script type="text/javascript">
    "use strict"; angular.module("pageTemplateApp", []).run(['$templateCache', function($templateCache) { 
    
     }]);
    </script>
    
        </div>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='VerificationUpsell' type='text/javascript' src='/rbxcdn/js/0307a8fde91ac06fe05341e0bcb6d113ee72830ddadce2463f07fdd4f6b42670.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Feature.VerificationUpsell' type='text/javascript' src='/rbxcdn/js/d9a5ba0db415cf3ff23ee004d7c8202c6cd5cbfbf0687fa11f733681130b6ead.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Feature.VerificationUpsell' type='text/javascript' src='/rbxcdn/js/2ced9fed9ee4a614a2a9f8d79d5f860c723c75876bce7ecf3befd5bf12053566.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='Navigation' type='text/javascript' src='/rbxcdn/js/b67b2e32841610cc0781c0d45fcddaec17e4fa159f24c101f5556932e39f7d85.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_CommonUI.Features' type='text/javascript' src='/rbxcdn/js/8e39f38b3ae6afcba0966973e3f4668a6a94f7b52313d8c39afa50d2355ac323.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_CommonUI.Features' type='text/javascript' src='/rbxcdn/js/a492c6d3ab5263357ae94288a7fc4889ee69c8a88bf052cc39938255170ece90.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Feature.ShopDialog' type='text/javascript' src='/rbxcdn/js/8ebb208e1b2c23f46627545bc6894d839e3d9eb908cf51ecd1c15ecd7d3b4c7f.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Feature.ShopDialog' type='text/javascript' src='/rbxcdn/js/105382fb4805646c67046c1b6f04aceee474a189df0a550bf00d861814d45964.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Common.AlertsAndOptions' type='text/javascript' src='/rbxcdn/js/1012b8f9af5f7d8e6d770c309aff87dc428f7cdc40e99a07e3c92ce2496caebd.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Common.AlertsAndOptions' type='text/javascript' src='/rbxcdn/js/1e148db91b54661ad571d33042e374da2c6d63e6bdeb458c770c6cd5b8442ffb.js'></script>
    
    
        
        <script type='text/javascript'>Roblox.config.externalResources = [];Roblox.config.paths['Pages.Catalog'] = '/rbxcdn/js/0d2759e7f03a464f0b8c0909a28405c5.js';Roblox.config.paths['Pages.CatalogShared'] = '/rbxcdn/js/1b451357891fcc5351b20d20504aa8ad.js';Roblox.config.paths['Widgets.AvatarImage'] = '/rbxcdn/js/7d49ac94271bd506077acc9d0130eebb.js';Roblox.config.paths['Widgets.DropdownMenu'] = '/rbxcdn/js/da553e6b77b3d79bec37441b5fb317e7.js';Roblox.config.paths['Widgets.GroupImage'] = '/rbxcdn/js/8ad41e45c4ac81f7d8c44ec542a2da0a.js';Roblox.config.paths['Widgets.HierarchicalDropdown'] = '/rbxcdn/js/4a0af9989732810851e9e12809aeb8ad.js';Roblox.config.paths['Widgets.ItemImage'] = '/rbxcdn/js/61a0490ba23afa17f9ecca2a079a6a57.js';Roblox.config.paths['Widgets.PlaceImage'] = '/rbxcdn/js/a6df74a754523e097cab747621643c98.js';</script>
    
        
        <script>
            Roblox.XsrfToken.setToken('t9MHBBTPFvNG');
        </script>
    
            <script>
                $(function () {
                    Roblox.DeveloperConsoleWarning.showWarning();
                });
            </script>
        
    
    <script type="text/javascript">
        $(function(){
            function trackReturns() {
                function dayDiff(d1, d2) {
                    return Math.floor((d1-d2)/86400000);
                }
                if (!localStorage) {
                    return false;
                }
    
                var cookieName = 'RBXReturn';
                var cookieOptions = {expires:9001};
                var cookieStr = localStorage.getItem(cookieName) || "";
                var cookie = {};
    
                try {
                    cookie = JSON.parse(cookieStr);
                } catch (ex) {
                    // busted cookie string from old previous version of the code
                }
    
                try {
                    if (typeof cookie.ts === "undefined" || isNaN(new Date(cookie.ts))) {
                        localStorage.setItem(cookieName, JSON.stringify({ ts: new Date().toDateString() }));
                        return false;
                    }
                } catch (ex) {
                    return false;
                }
    
                var daysSinceFirstVisit = dayDiff(new Date(), new Date(cookie.ts));
                if (daysSinceFirstVisit == 1 && typeof cookie.odr === "undefined") {
                    RobloxEventManager.triggerEvent('rbx_evt_odr', {});
                    cookie.odr = 1;
                }
                if (daysSinceFirstVisit >= 1 && daysSinceFirstVisit <= 7 && typeof cookie.sdr === "undefined") {
                    RobloxEventManager.triggerEvent('rbx_evt_sdr', {});
                    cookie.sdr = 1;
                }
                try {
                    localStorage.setItem(cookieName, JSON.stringify(cookie));
                } catch (ex) {
                    return false;
                }
            }
    
            GoogleListener.init();
    
    
        
            RobloxEventManager.initialize(true);
            RobloxEventManager.triggerEvent('rbx_evt_pageview');
            trackReturns();
            
    
        
            RobloxEventManager._idleInterval = 450000;
            RobloxEventManager.registerCookieStoreEvent('rbx_evt_initial_install_start');
            RobloxEventManager.registerCookieStoreEvent('rbx_evt_ftp');
            RobloxEventManager.registerCookieStoreEvent('rbx_evt_initial_install_success');
            RobloxEventManager.registerCookieStoreEvent('rbx_evt_fmp');
            RobloxEventManager.startMonitor();
            
    
        });
    
    </script>
    
    
        
        
    
    <script type="text/javascript">
        var Roblox = Roblox || {};
        Roblox.UpsellAdModal = Roblox.UpsellAdModal || {};
    
        Roblox.UpsellAdModal.Resources = {
            //<sl:translate>
            title: "Remove Ads Like This",
            body: "Builders Club members do not see external ads like these.",
            accept: "Upgrade Now",
            decline: "No, thanks"
            //</sl:translate>
        };
    </script>

    <!-- Required for add to profile logic -->
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='page3' type='text/javascript' src='/rbxcdn/js/9299228829b2de6978905796d2db4c48.js'></script>

    ${(props.isLimited || props.isLimitedU) && !props.isForSale
			? `

        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='page1' type='text/javascript' src='/rbxcdn/js/a76689e0d40f30dcef9ab8b6e47127c5.js'></script>
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='page2' type='text/javascript' src='/rbxcdn/js/7dec88ebb1d79cc227b28a6b28530dee.js'></script>

        `
			: `                    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='page' type='text/javascript' src='/rbxcdn/js/7dec88ebb1d79cc227b28a6b28530dee.js'></script>
        `
		}
    
	${props.commentsEnabled ? `
	<!-- Comments JS -->
    <script src='/src/Generated/js/Roblox_TranslationResources_Feature_CommentsResources_en_us_standard.js'></script>
    <script src='/src/Js/Comments.js'></script>` : ''}

        <script>
        ;// utilities/countdownTimer.js
        "use strict";var Roblox=Roblox||{};Roblox.CountdownTimer=function(){function e(e){return e<n?(t=0,i=0,r=0,u=0,f=!0):(t=Math.floor(e/n%60),i=Math.floor(e/n/60%60),r=Math.floor(e/(n*3600)%24),u=Math.floor(e/(n*86400)),f=!1),{days:u,hours:r,minutes:i,seconds:t,isDone:f}}function o(t,i,r){if(t&&i)var u=Date.parse(i)-Date.parse(t),f=setInterval(function(){var t=e(u);t.isDone&&clearInterval(f),r(t),u-=n},n)}var n=1e3,t,i,r,u,f;return{InitializeClock:o}}();
        
        </script>
    
    
    
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='StyleGuide' type='text/javascript' src='/rbxcdn/js/a7af0f9caedbf4763e66bb0d7fe240486fd6572329ea48d485580f7d9b1d8078.js'></script>
    
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='Footer' type='text/javascript' src='/rbxcdn/js/5fbe4bf3cd758289553a511c4208511ebaeaf37add48e7f10820893557c65e01.js'></script>
    
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='Recommendations' type='text/javascript' src='/rbxcdn/js/3dcf1144dd60fe6f95fec3cf383039926b01fdad72e7a8ea2b3a9dfeec9c3eca.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Feature.Recommendations' type='text/javascript' src='/rbxcdn/js/679af1f01767336788a38b207d8116ba5ab62dc6c5adf583bd1a275c0a5bc779.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Feature.Recommendations' type='text/javascript' src='/rbxcdn/js/fd3a7f6d822305e905d875f1f32976fe9368c53abb57403c687665cfc18ae4e6.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='CursorPagination' type='text/javascript' src='/rbxcdn/js/23f7ebb7d16ce4ae1bf9bdf36cb0bf52209af8e57f55b7d6d14c0d96621eeda2.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_CommonUI.Controls' type='text/javascript' src='/rbxcdn/js/3c1940561fbff1620e7fa1ef1b3ebf0e8517c70b2eff0e7bc1cd84dbe1d4db6a.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_CommonUI.Controls' type='text/javascript' src='/rbxcdn/js/d2f098e23249651588c97e0706056878d10753cfe28813f3b293b444a48f235b.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='SystemFeedback' type='text/javascript' src='/rbxcdn/js/aac542106f7f77697cbc3b36ab3cf0619bf9b69a1af0983e59dfeb6c36652d3b.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='ItemResale' type='text/javascript' src='/rbxcdn/js/438d221d07e3f0bae40d54ed07d289acbf69c0268a2622fda27533302d0b7c74.js'></script>

    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Feature.Item' type='text/javascript' src='/rbxcdn/js/22032088568496854d8035cc0c3e55c0174cfdce44f760e2f1bbd613a0add19a.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Feature.Item' type='text/javascript' src='/rbxcdn/js/e3431b6cdb5b46aff03ac2200cab5db26870bbb17b64e1cab52dc01597ec834d.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Feature.PrivateSales' type='text/javascript' src='/rbxcdn/js/3c3424f9f6766245a544d3c690d1d76c466b189968c3a63a540b8f6ce40f399b.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Feature.PrivateSales' type='text/javascript' src='/rbxcdn/js/cd21da579128bd65dddaffd6d0b612421ce5fcadbab8ad8ce05f32bb6ba1682e.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Feature.Catalog' type='text/javascript' src='/rbxcdn/js/520289e8ff3efaf2513d1ab6dd481ffa48978d77409ba78492af6b2fc3e27427.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Feature.Catalog' type='text/javascript' src='/rbxcdn/js/9b78ee6e4baeab80ae10af246eac4856a337d94a772ca85104bce2ce1a9c9b60.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='Captcha' type='text/javascript' src='/rbxcdn/js/f3975ca1156aeb76add4934067ac7248ee24ccf8182211727e249dbc17c008e8.js'></script>
    
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='NotificationStream' type='text/javascript' src='/rbxcdn/js/6d38c2b5ccd7c5d32ac721c40c9c963234c1b86fe0f2639711967d8e5c5fa878.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Notifications.NotificationStream' type='text/javascript' src='/rbxcdn/js/eacc603be30c02017409c2c3c3902bc4c40cef27e0ac751421a558e6ec89d0f8.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Notifications.NotificationStream' type='text/javascript' src='/rbxcdn/js/6e1e7e4be7934b6347a90ae31e66e579f6e8bbee371e330e9eabcbf5e31b584d.js'></script>
    
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='Contacts' type='text/javascript' src='/rbxcdn/js/bf0096e2c114d7b0ba5dbbc43ddd867fa587d1373b6ea4fd2e99ce7afb4ef8de.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='Chat' type='text/javascript' src='/rbxcdn/js/0090a61e4649e9b6915b8acbec228daa525966c174afc74ee9e6b61e2110c794.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Feature.Chat' type='text/javascript' src='/rbxcdn/js/f52cc1c95e2d3f51d346b604707e44753370802f987f173876f166eea637e2b5.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Feature.Chat' type='text/javascript' src='/rbxcdn/js/3a5b0cae308a98054f28e17a84742149e550f1a43c1f70beae276ebb3cf9ebc8.js'></script>
    
    
    
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='GameLaunch' type='text/javascript' src='/rbxcdn/js/b61681d2e9cc1d3af7b03675f3656ba5bb4fa83c57fe3205b6c001e767dc9af4.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Feature.GameLaunchGuestMode' type='text/javascript' src='/rbxcdn/js/b6f7e0e090bb44e092c19eb7e714473be92bd8b26eb53b693e03179658950b69.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Feature.GameLaunchGuestMode' type='text/javascript' src='/rbxcdn/js/75d691f0d9840862e1341c56663ab6a620bed97a721809dce6ef85c68b3b0c5b.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Common.VisitGame' type='text/javascript' src='/rbxcdn/js/8970b46e46bddd4380edbc66639b5b333720b2633a9105d4cde2c31ba2878d97.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Common.VisitGame' type='text/javascript' src='/rbxcdn/js/0ea369a7496bf1e32d7a3834a06b42b1eeea4720c6a4b5fd719792d082eba641.js'></script>
    
    
    
        
    
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='serviceworkerregistrar' type='text/javascript' src='/rbxcdn/js/d5b67abc659e3430838dada0f185cb62.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='pushnotifications' type='text/javascript' src='/rbxcdn/js/b8bf1b02993521c61489cb2f1c4fb676.js'></script>
    
    <div id="push-notification-registrar-settings"
            data-notificationshost="https://notifications.roblox.com"
            data-reregistrationinterval="0"
            data-registrationpath="register-firefox"
            data-shoulddeliveryendpointbesentduringregistration="True"
            data-platformtype="FirefoxOnDesktop">
    </div>
    <div id="push-notification-registration-ui-settings"
            data-noncontextualpromptallowed="true"
            data-promptonfriendrequestsentenabled="true"
            data-promptonprivatemessagesentenabled="false"
            data-promptintervals="[604800000,1209600000,2419200000]"
            data-notificationsdomain="https://notifications.roblox.com"
            data-userid="1335179568">
    </div>
    
    <script type="text/template" id="push-notifications-initial-global-prompt-template">
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
    </script>
    <script type="text/template" id="push-notifications-permissions-prompt-template">
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
    </script>
    <script type="text/template" id="push-notifications-permissions-disabled-instruction-template">
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
    </script>
    <script type="text/template" id="push-notifications-successfully-enabled-template">
        <div class="push-notifications-global-prompt">
            <div class="alert-system-feedback">
                <div class="alert alert-success">
                    Push notifications have been enabled!
                </div>
            </div>
        </div>
    </script>
    <script type="text/template" id="push-notifications-successfully-disabled-template">
        <div class="push-notifications-global-prompt">
            <div class="alert-system-feedback">
                <div class="alert alert-success">
                    Push notifications have been disabled.
                </div>
            </div>
        </div>
    </script>
        
        
    
    
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='pageEnd' type='text/javascript' src='/rbxcdn/js/66d1073778ce6fcacb25ef83b9b6149c.js'></script>
    
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='LatencyMeasurement' type='text/javascript' src='/rbxcdn/js/90bb51db086699ec26a6c9df04087678948883f8c3ddd1037c7223a20ff4fe90.js'></script>
    
    </body>
    </html>
    
    `;
	return formatView(item, session);
};
