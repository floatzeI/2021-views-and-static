import { IUserInfo } from "../../middleware";
import { headerCss } from "./header";
import systemAlert from "./systemAlert";

export default (
	user: IUserInfo,
): string => {
	const html = `
    <!DOCTYPE html>
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
    
    
    
        <link rel="canonical" href="https://www.roblox.com/Feeds/" />
        
    <link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet'  href='/rbxcdn/static/css/leanbase___3678d89e5ec3f4d8c65d863691f31de2_m.css/fetch' />
    
    
        
    <link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet'  href='/rbxcdn/static/css/page___51bd29f22d6632c0dc3c3ad0e09dfd8d_m.css/fetch' />
    
    
    
    
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
                IsDebuggerEnabled: "False"
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
                    
                </div>`
	return html;
}