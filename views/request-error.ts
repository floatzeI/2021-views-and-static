import formatView from '../lib/formatView';
import { IUserInfo } from '../middleware';
import footer from './partials/footer';
import { headerCss } from './partials/header';
import systemAlert from './partials/systemAlert';

export default (session: IUserInfo, status: number = 500): string => {
	const x = `<!DOCTYPE html>
    <!--[if IE 8]><html class="ie8" ng-app="robloxApp"><![endif]-->
    <!--[if gt IE 8]><!-->
    <html>
    <!--<![endif]-->
    <head data-machine-id="${process.env.MACHINE_ID || 'WEB0'}">
        <!-- MachineID: ${process.env.MACHINE_ID || 'WEB0'} -->
        <title>Roblox</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,requiresActiveX=true" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Roblox Corporation" />
    <meta name="description" content="Roblox is a global platform that brings people together through play." />
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
    </script>    <meta name="user-data"
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
    
    <metaflags /><meta name="page-meta" data-internal-page-name="" />
        
    
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
    
    
    
        <link rel="canonical" href="https://www.roblox.com/request-error" />
        
    <link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet'  href='/rbxcdn/static/css/leanbase___3678d89e5ec3f4d8c65d863691f31de2_m.css/fetch' />
    
    
        
    <link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet'  href='/rbxcdn/static/css/page___09145266285d81a4a457f2e4f9f83caa_m.css/fetch' />
    
    
    
    
        <link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet' data-bundlename='RobuxIcon' href='/rbxcdn/css/2f599b9e9ca20ee3c155684adbf1cdcb7220bab681b55b4505123a0c34e81969.css' />
    
    
    
    <link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet' data-bundlename='NotificationStream' href='/rbxcdn/css/b4eb6c5c73a2533aa2d99545849f741ee91a7ac409157e9a8005523abd698e29.css' />
    
        
    
    
    
    
    
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
                _gaq.push(['b._trackPageview']);
    
            _gaq.push(['c._setAccount', 'UA-26810151-2']);
                _gaq.push(['c._setSampleRate', '1']);
                        _gaq.push(['c._setDomainName', 'roblox.com']);
                                
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
    </script>        
        <script type="text/javascript">
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
          data-internal-page-name=""
          data-send-event-percentage="0">
            <iframe id="nsPulsarFrame" name="nsPulsarFrame" style="visibility:hidden;height:0;width:1px;position:absolute"></iframe>
            <script type='text/javascript'>
                var __nspid = "alpts0";
                var __nsptags = [];
                (function (w, d) {
                    var x = function () {
                        var iframe = document.getElementById('nsPulsarFrame');
                        var iframeDoc = iframe.contentDocument;
                        var script = iframeDoc.createElement("script"); script.type = "text/javascript"; script.async = true;
                        script.src = "http" + ("https:" === d.location.protocol ? "s://cs" : "://c") + ".ns1p.net/p.js?a=" + __nspid;
                        iframeDoc.body.appendChild(script);
                    }
                    if (w.addEventListener) { w.addEventListener("load", x, false); }
                    else if (w.attachEvent) { w.attachEvent("onload", x); }
                    else { w.onload = x; }
                }(window, document));
            </script>
        <div id="roblox-linkify" data-enabled="true" data-regex="(https?\:\/\/)?(?:www\.)?([a-z0-9-]{2,}\.)*(((m|de|www|web|api|blog|wiki|corp|polls|bloxcon|developer|devforum|forum|status)\.roblox\.com|robloxlabs\.com)|(www\.shoproblox\.com)|(roblox\.status\.io)|(rblx\.co)|help\.roblox\.com(?![A-Za-z0-9\/.]*\/attachments\/))(?!\/[A-Za-z0-9-+&amp;@#\/=~_|!:,.;]*%)((\/[A-Za-z0-9-+&amp;@#\/%?=~_|!:,.;]*)|(?=\s|\b))" data-regex-flags="gm" data-as-http-regex="(([^.]help|polls)\.roblox\.com)"></div>
    
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
    
               
            

            ${status === 404
			? `<div class="request-error-page-content">
            <div class="default-error-page">
                <div class="message-container">
                    <h3 class="error-title">Page cannot be found or no longer exists</h3>
                    <h4 class="error-message">404 <span>|</span>Page Not found</h4>
                </div>
                <img src="/rbxcdn/images/9281912c23312bc0d08ab750afa588cc.png" class="error-image " alt="Error Image" />
                <div class="action-buttons">
                    <a class="btn-primary-md btn-min-width" title="Go to the Previous Page" onclick="history.back();return false;" href="#">Back</a>
                    <a class="btn-control-md btn-min-width" title="Return Home" href="https://www.roblox.com/">Home</a>
                </div>
            </div>
        </div>`
			: status === 500
				? `
<div class="request-error-page-content">
<div class="default-error-page">
    <div class="message-container">
        <h3 class="error-title">Internal Server Error</h3>
        <h4 class="error-message">500 <span>|</span>An unexpected error occurred</h4>
    </div>
    <img src="/rbxcdn/images/52b5e003c896c50caec4ab1027168cc6.png" class="error-image " alt="Error Image" />
    <div class="action-buttons">
        <a class="btn-primary-md btn-min-width" title="Go to the Previous Page" onclick="history.back();return false;" href="#">Back</a>
        <a class="btn-control-md btn-min-width" title="Return Home" href="https://www.roblox.com/">Home</a>
    </div>
</div>
    <p class="contact-message text-footer">If you continue to receive this page, please contact customer service at <a href="mailto:info@roblox.com" class="text-link">info@roblox.com</a>.</p>
</div>
        `
				: status === 403
					? `<div class="request-error-page-content">
        <div class="default-error-page">
            <div class="message-container">
                <h3 class="error-title">Access Denied</h3>
                <h4 class="error-message">403 <span>|</span>You don&#39;t have permission to view this page</h4>
            </div>
            <img src="/rbxcdn/images/ad109e93f630415cde65a19fd2f84d2b.png" class="error-image " alt="Error Image" />
            <div class="action-buttons">
                <a class="btn-primary-md btn-min-width" title="Go to the Previous Page" onclick="history.back();return false;" href="#">Back</a>
                <a class="btn-control-md btn-min-width" title="Return Home" href="https://www.roblox.com/">Home</a>
            </div>
        </div>
    </div>`
					: status === 400
						? `
    <div class="request-error-page-content">
        <div class="default-error-page">
            <div class="message-container">
                <h3 class="error-title">Bad Request</h3>
                <h4 class="error-message">400 <span>|</span>There was a problem with your request</h4>
            </div>
            <img src="/rbxcdn/images/52b5e003c896c50caec4ab1027168cc6.png" class="error-image " alt="Error Image" />
            <div class="action-buttons">
                <a class="btn-primary-md btn-min-width" title="Go to the Previous Page" onclick="history.back();return false;" href="#">Back</a>
                <a class="btn-control-md btn-min-width" title="Return Home" href="https://www.roblox.com/">Home</a>
            </div>
        </div>
    </div>`
						: `<div class="request-error-page-content">
    <div class="default-error-page">
        <div class="message-container">
            <h3 class="error-title">Something went wrong</h3>
            <h4 class="error-message">Error <span>|</span>An unexpected error occurred. Please try again later.</h4>
        </div>
        <img src="/rbxcdn/images/9281912c23312bc0d08ab750afa588cc.png" class="error-image " alt="Error Image" />
        <div class="action-buttons">
            <a class="btn-primary-md btn-min-width" title="Go to the Previous Page" onclick="history.back();return false;" href="#">Back</a>
            <a class="btn-control-md btn-min-width" title="Return Home" href="https://www.roblox.com/">Home</a>
        </div>
    </div>
</div>`
		}








    
            </div>
                </div> 
                
                ${footer()}
        
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='intl-polyfill' type='text/javascript' src='/rbxcdn/js/d44520f7da5ec476cfb1704d91bab327.js'></script>
    
    
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='InternationalCore' type='text/javascript' src='/rbxcdn/js/ff3308aa2e909de0f9fcd5da7b529db247f69fe9b4072cbbc267749800a4d9e6.js'></script>
    
    
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='TranslationResources' type='text/javascript' src='/rbxcdn/js/83d836a661ff433d5b7ce719c489e43af590ff75ab39ccc6d393546fe91b766a.js'></script>
    
    
    
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='leanbase' type='text/javascript' src='/rbxcdn/js/2c3bb864dd01959f8cf13fe9d5d34c3b.js'></script>
    
    
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
            Roblox.XsrfToken.setToken('MePbtsOLLLDg');
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
    
        
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='page' type='text/javascript' src='/rbxcdn/js/727ff391d75de7deebe96b0bdbf74ee4.js'></script>
    
    
    
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='StyleGuide' type='text/javascript' src='/rbxcdn/js/a7af0f9caedbf4763e66bb0d7fe240486fd6572329ea48d485580f7d9b1d8078.js'></script>
    
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='Footer' type='text/javascript' src='/rbxcdn/js/5fbe4bf3cd758289553a511c4208511ebaeaf37add48e7f10820893557c65e01.js'></script>
    
    
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='NotificationStream' type='text/javascript' src='/rbxcdn/js/6d38c2b5ccd7c5d32ac721c40c9c963234c1b86fe0f2639711967d8e5c5fa878.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Notifications.NotificationStream' type='text/javascript' src='/rbxcdn/js/eacc603be30c02017409c2c3c3902bc4c40cef27e0ac751421a558e6ec89d0f8.js'></script>
    
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Notifications.NotificationStream' type='text/javascript' src='/rbxcdn/js/6e1e7e4be7934b6347a90ae31e66e579f6e8bbee371e330e9eabcbf5e31b584d.js'></script>
    
    
    
    
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
        
        
    
    
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='pageEnd' type='text/javascript' src='/rbxcdn/js/67255cc103c71a72731c9e1d2a1e6656.js'></script>
    
    
    </body>
    </html>
    
    `;
	return formatView(x, session);
};
