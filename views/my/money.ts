import formatView from '../../lib/formatView';
import replacer from '../../lib/replaceUrls';
import { IUserInfo } from '../../middleware';
import footer from '../partials/footer';
import { headerCss } from '../partials/header';
import systemAlert from '../partials/systemAlert';

export default (session: IUserInfo): string => {
	let DashboardStr = `

<!DOCTYPE html>
<html xmlns:fb="http://www.facebook.com/2008/fbml">
<!-- MachineID: ${process.env.MACHINE_ID || 'WEB0'} -->
<head id="ctl00_ctl00_Head1" data-machine-id="${process.env.MACHINE_ID || 'WEB0'
		}">
<title>
	Transactions - Roblox
</title>

<script type="text/javascript">
    var Roblox = Roblox || {};

    Roblox.BundleVerifierConstants = {
        isMetricsApiEnabled: true,
        eventStreamUrl: "//ecsv2.roblox.com/pe?t=diagnostic",
        deviceType: "Computer",
        cdnLoggingEnabled: JSON.parse("true")
    };
</script>
            <script type="text/javascript">
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
            </script>
        
${headerCss}

<link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet'  href='/rbxcdn/static/css/MainCSS___efc1539c380dbc77967c0bcbbecdad5e_m.css/fetch' />
<link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet' data-bundlename='LegacyStyleGuide' href='/rbxcdn/css/fdea3d360653f3675349fb04cef59f8848610c6c20261fd64386506936d93ea9.css' />

<link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet' data-bundlename='Thumbnails' href='/rbxcdn/css/9517d686dc47015c200496d77e2b18146ee37652d18e25ecf9e1ed230310ea13.css' />

<link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet' data-bundlename='VerificationUpsell' href='/rbxcdn/css/4cfc9413aaac922000f010ba651f264e59a200d6062d41f8196017ade0094116.css' />

<link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet' data-bundlename='Navigation' href='/rbxcdn/css/b4acdc29672aaf9dec2081fb12cfd9f1c40ecfef7a80915c9e2377bdd251c8bc.css' />

<link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet' data-bundlename='Footer' href='/rbxcdn/css/55b250e8473888792f885d898973a13692fb22157baf61aaffa62ce4545f3408.css' />

<link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet' data-bundlename='RobuxIcon' href='/rbxcdn/css/2f599b9e9ca20ee3c155684adbf1cdcb7220bab681b55b4505123a0c34e81969.css' />


<link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet'  href='/rbxcdn/static/css/page___2b62ecb7afd1653d96b198935c4a51e1_m.css/fetch' />
<link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet' data-bundlename='NotificationStream' href='/rbxcdn/css/b4eb6c5c73a2533aa2d99545849f741ee91a7ac409157e9a8005523abd698e29.css' />

<link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet' data-bundlename='Chat' href='/rbxcdn/css/c0da40b3a6667e911346e3adfbb541802f9883b9c3933e6110ea1160109ac987.css' />


<link href="/rbxcdn/images/23421382939a9f4ae8bbe60dbe2a3e7e.ico.gzip" rel="icon" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,requiresActiveX=true" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="Roblox Corporation" />
<meta name="description" content="Roblox is a global platform that brings people together through play." />
<meta name="keywords" content="free games, online games, building games, virtual worlds, free mmo, gaming cloud, physics engine" />
<meta name="apple-itunes-app" content="app-id=431946152" />




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
<metaflags />
        <meta name="page-meta" data-internal-page-name="MoneyLegacy" />
	    
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
                _gaq.push(['b._setPageGroup', 1, 'MoneyLegacy']);
            _gaq.push(['b._trackPageview']);

        _gaq.push(['c._setAccount', 'UA-26810151-2']);
            _gaq.push(['c._setSampleRate', '1']);
                    _gaq.push(['c._setDomainName', 'roblox.com']);
                    _gaq.push(['c._setPageGroup', 1, 'MoneyLegacy']);
                    
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
    var _prum = [['id', ''],
                 ['mark', 'firstbyte', (new Date()).getTime()]];
    (function() {
        var s = document.getElementsByTagName('script')[0]
          , p = document.createElement('script');
        p.async = 'async';
        p.src = '//rum-static.pingdom.net/prum.min.js';
        s.parentNode.insertBefore(p, s);
    })();
</script>
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

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='intl-polyfill' type='text/javascript' src='/rbxcdn/js/d44520f7da5ec476cfb1704d91bab327.js'></script>
<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='InternationalCore' type='text/javascript' src='/rbxcdn/js/ff3308aa2e909de0f9fcd5da7b529db247f69fe9b4072cbbc267749800a4d9e6.js'></script>

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='TranslationResources' type='text/javascript' src='/rbxcdn/js/83d836a661ff433d5b7ce719c489e43af590ff75ab39ccc6d393546fe91b766a.js'></script>

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='master' type='text/javascript' src='/rbxcdn/js/209860663a85ca4c7419b0a4e6951a62.js'></script>
<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='Polyfill' type='text/javascript' src='/rbxcdn/js/4340261c6f9296c0727dc8605acada61ac3db48cad8da1cf5b25f4ac3ab18d7b.js'></script>

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='HeaderScripts' type='text/javascript' src='/rbxcdn/js/db5218c3fbccfaa300942c9c11f581d29079dcf3d27e2b69c410f10ba3aff8d4.js'></script>

<meta name="roblox-tracer-meta-data"
      data-access-token="S3EXjCZQQr6OixnmKu+hoa3OSfpvPP5qgU0esiWgwreFUUMBnPhEaoS5yIIrf9bdYlSgW0XKCb1So9Rhtj1eMzt/MJWcyKZ4TwIckHVj"
      data-service-name="Web"
      data-tracer-enabled="false"
      data-api-sites-request-allow-list="friends.roblox.com,chat.roblox.com,thumbnails.roblox.com,games.roblox.com"
      data-sample-rate="0"
      data-is-instrument-page-performance-enabled="false"/><script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='RobloxTracer' type='text/javascript' src='/rbxcdn/js/a168257175fe69cdb0762a3b8ca5d0a5fd625f77c027d5e4cef7f90a1602d704.js'></script>

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='RealTime' type='text/javascript' src='/rbxcdn/js/89f30f6701e04efb9dad1b1fb75ebd7cfe55257af8c8cefbd609039c4d66d8a8.js'></script>

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='CrossTabCommunication' type='text/javascript' src='/rbxcdn/js/948f3bfc9bbd152f537592b51c1a7765cdc0dfc538d74b7e5fc696c476c8792b.js'></script>

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
</script><script type='text/javascript'>Roblox.config.externalResources = [];Roblox.config.paths['Pages.Catalog'] = '/rbxcdn/js/0d2759e7f03a464f0b8c0909a28405c5.js';Roblox.config.paths['Pages.CatalogShared'] = '/rbxcdn/js/1b451357891fcc5351b20d20504aa8ad.js';Roblox.config.paths['Widgets.AvatarImage'] = '/rbxcdn/js/7d49ac94271bd506077acc9d0130eebb.js';Roblox.config.paths['Widgets.DropdownMenu'] = '/rbxcdn/js/da553e6b77b3d79bec37441b5fb317e7.js';Roblox.config.paths['Widgets.GroupImage'] = '/rbxcdn/js/8ad41e45c4ac81f7d8c44ec542a2da0a.js';Roblox.config.paths['Widgets.HierarchicalDropdown'] = '/rbxcdn/js/4a0af9989732810851e9e12809aeb8ad.js';Roblox.config.paths['Widgets.ItemImage'] = '/rbxcdn/js/61a0490ba23afa17f9ecca2a079a6a57.js';Roblox.config.paths['Widgets.PlaceImage'] = '/rbxcdn/js/a6df74a754523e097cab747621643c98.js';</script><CoreUtilities />

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='CoreRobloxUtilities' type='text/javascript' src='/rbxcdn/js/0cb1c033a6c4762465104b8b977992e95d490fee2b22c4bc2ab1ed5d48e9ebe7.js'></script>

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='React' type='text/javascript' src='/rbxcdn/js/6beb1c5bcec1a4449303da9e523d45a1aa1652f9b42ae6c8a3ac347955ca3b3f.js'></script>

<ReactUtilities />

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='ReactStyleGuide' type='text/javascript' src='/rbxcdn/js/253dbc984ab23858a24067ed2cab303c4e8f3dbbaf8c37914bfd19d12dd0b161.js'></script>

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='Footer' type='text/javascript' src='/rbxcdn/js/5fbe4bf3cd758289553a511c4208511ebaeaf37add48e7f10820893557c65e01.js'></script>

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_CommonUI.Features' type='text/javascript' src='/rbxcdn/js/8e39f38b3ae6afcba0966973e3f4668a6a94f7b52313d8c39afa50d2355ac323.js'></script>

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_CommonUI.Features' type='text/javascript' src='/rbxcdn/js/a492c6d3ab5263357ae94288a7fc4889ee69c8a88bf052cc39938255170ece90.js'></script>

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Common.AlertsAndOptions' type='text/javascript' src='/rbxcdn/js/1012b8f9af5f7d8e6d770c309aff87dc428f7cdc40e99a07e3c92ce2496caebd.js'></script>

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Common.AlertsAndOptions' type='text/javascript' src='/rbxcdn/js/1e148db91b54661ad571d33042e374da2c6d63e6bdeb458c770c6cd5b8442ffb.js'></script>

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='angular' type='text/javascript' src='/rbxcdn/js/ae3d621886e736e52c97008e085fa286.js'></script>
<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='AngularJsUtilities' type='text/javascript' src='/rbxcdn/js/dad62999a25adbced1d15f7d7caeaaab02f963ab5da93d4200b3bf1c29a91b25.js'></script>

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='InternationalAngularJs' type='text/javascript' src='/rbxcdn/js/95f7afb5fcb3c8ae379d51661e32c54ea8d8b823ace7574bd0b7fab9275cba6b.js'></script>

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='Thumbnails' type='text/javascript' src='/rbxcdn/js/ed49a01b602c4b87904bd61317bf8be809837473372bfafc163f566a30430a31.js'></script>

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='PresenceStatus' type='text/javascript' src='/rbxcdn/js/8c50632c6b51d45c814a976484564e622f462db77adfcf3c1e3c21f9a9f1722f.js'></script>



<div id="presence-registration-bootstrap-data"
     data-is-enabled="True"
     data-interval="15000"></div><script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='PresenceRegistration' type='text/javascript' src='/rbxcdn/js/0a83202cf5f2310227e607928f73a26cdaa7d5c27f892b99ef51ec3b863a694d.js'></script>

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='VerificationUpsell' type='text/javascript' src='/rbxcdn/js/0307a8fde91ac06fe05341e0bcb6d113ee72830ddadce2463f07fdd4f6b42670.js'></script>

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Feature.VerificationUpsell' type='text/javascript' src='/rbxcdn/js/d9a5ba0db415cf3ff23ee004d7c8202c6cd5cbfbf0687fa11f733681130b6ead.js'></script>

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Feature.VerificationUpsell' type='text/javascript' src='/rbxcdn/js/2ced9fed9ee4a614a2a9f8d79d5f860c723c75876bce7ecf3befd5bf12053566.js'></script>

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='Navigation' type='text/javascript' src='/rbxcdn/js/b67b2e32841610cc0781c0d45fcddaec17e4fa159f24c101f5556932e39f7d85.js'></script>

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Feature.ShopDialog' type='text/javascript' src='/rbxcdn/js/8ebb208e1b2c23f46627545bc6894d839e3d9eb908cf51ecd1c15ecd7d3b4c7f.js'></script>

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='DynamicLocalizationResourceScript_Feature.ShopDialog' type='text/javascript' src='/rbxcdn/js/105382fb4805646c67046c1b6f04aceee474a189df0a550bf00d861814d45964.js'></script>

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='page' type='text/javascript' src='/rbxcdn/js/fd267dcdcd31bba41094317499a6e87c.js'></script>


        <link rel="canonical" href="https://www.roblox.com/My/Money.aspx" />
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
    data-performance-relative-value="0.005"
    data-internal-page-name="MoneyLegacy"
    data-send-event-percentage="0">
    <div id="roblox-linkify" data-enabled="true" data-regex="(https?\:\/\/)?(?:www\.)?([a-z0-9-]{2,}\.)*(((m|de|www|web|api|blog|wiki|corp|polls|bloxcon|developer|devforum|forum|status)\.roblox\.com|robloxlabs\.com)|(www\.shoproblox\.com)|(roblox\.status\.io)|(rblx\.co)|help\.roblox\.com(?![A-Za-z0-9\/.]*\/attachments\/))(?!\/[A-Za-z0-9-+&amp;@#\/=~_|!:,.;]*%)((\/[A-Za-z0-9-+&amp;@#\/%?=~_|!:,.;]*)|(?=\s|\b))" data-regex-flags="gm" data-as-http-regex=""></div>
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

<div id="modal-confirmation" class="modal-confirmation" data-modal-type="confirmation">
    <div id="modal-dialog"  class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true"><span class="icon-close"></span></span><span class="sr-only">Close</span>
                </button>
                <h5 class="modal-title"></h5>
            </div>

            <div class="modal-body">
                <div class="modal-top-body">
                    <div class="modal-message"></div>
                    <div class="modal-image-container roblox-item-image" data-image-size="medium" data-no-overlays data-no-click>
                        <img class="modal-thumb" alt="generic image"/>
                    </div>
                    <div class="modal-checkbox checkbox">
                        <input id="modal-checkbox-input" type="checkbox"/>
                        <label for="modal-checkbox-input"></label>
                    </div>
                </div>
                <div class="modal-btns">
                    <a href id="confirm-btn"><span></span></a>
                    <a href id="decline-btn"><span></span></a>
                </div>
                <div class="loading modal-processing">
                    <img class="loading-default" src='/rbxcdn/images/4bed93c91f909002b1f17f05c0ce13d1.gif' alt="Processing..." />
                </div>
            </div>
            <div class="modal-footer text-footer">

            </div>
        </div>
    </div>
</div>

    <script type="text/javascript">Roblox.XsrfToken.setToken('inGdHXjAeq7S');</script>
 
    <script type="text/javascript">
        if (top.location != self.location) {
            top.location = self.location.href;
        }
    </script>
  
<style type="text/css">
    
</style>

    <form name="aspnetForm" method="post" action="/My/Money.aspx" id="aspnetForm" class="nav-container no-gutter-ads">
<div>
<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="Wthkw4wBIFMFQtCb8KwxNKseZgEhyyfLrScHZVVhywmxsE0Z5fA3NNxdZcS/BeSJYv6reY9HqT0ojplA+YFTxmhf4y9F79lZwohh59xuhH+X6CuzzwtuaZ07kUB4nI5IPf0ru1Nfs0ts0NHQ5cuM6dg3jhdjRdP14Wl2YgPLH1hAx2AFBxR7vY8+/EtBX5DDeMjoPlp1BC0G6S04Ig5ZMz7yKK+xr40x89aTO9zOrfdydP5HPZfCLDSSE/0I/TrEsAXZSA1e3SXjAfzeNsUdOsM8vEaN5ZUdy61uSakagRqhsss+" />
</div>

<script type="text/javascript">
//<![CDATA[
var theForm = document.forms['aspnetForm'];
if (!theForm) {
    theForm = document.aspnetForm;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}
//]]>
</script>


<script src="http://ajax.aspnetcdn.com/ajax/4.6/1/WebForms.js" type="text/javascript"></script>
<script type="text/javascript">
//<![CDATA[
window.WebForm_PostBackOptions||document.write('<script type="text/javascript" src="/WebResource.axd?d=pynGkmcFUV13He1Qd6_TZH6GgOgBQtqMPCPjRUnhj_pzNesAXKuAdu2pj-Sq-3JDJIgwEw2&amp;t=636591453975094435"><\\/script>');
//]]>
</script>



<script src="/ScriptResource.axd?d=x6wALODbMJK5e0eRC_p1LRlWN_P2lHjmj0DZgy0wDkMjKDLpLMHjvvzFVrbrwEtPy-qVpb-q0rP0dHWRXrhOATY2TMewus5QIuw73VjXfnGWK7v40&amp;t=ffffffffe4ec58b9" type="text/javascript"></script>
<script type="text/javascript">
//<![CDATA[
(window.Sys && Sys._Application && Sys.Observer)||document.write('<script type="text/javascript" src="/ScriptResource.axd?d=x6wALODbMJK5e0eRC_p1LRlWN_P2lHjmj0DZgy0wDkMjKDLpLMHjvvzFVrbrwEtPy-qVpb-q0rP0dHWRXrhOATY2TMewus5QIuw73VjXfnGWK7v40&t=ffffffffe4ec58b9"><\\/script>');
//]]>
</script>

<script src="/ScriptResource.axd?d=P5lTttoqSeZXoYRLQMIScOnum8LyyrORW3bBn_1L26kZruwbpJKT5JB6Z2Ondv_S5-_zMTlW57HikUV3IlruMP6Uep8ybH4Rl7owqFw_AHI3HdJe0&amp;t=ffffffffe4ec58b9" type="text/javascript"></script>
<script type="text/javascript">
//<![CDATA[
(window.Sys && Sys.WebForms)||document.write('<script type="text/javascript" src="/ScriptResource.axd?d=P5lTttoqSeZXoYRLQMIScOnum8LyyrORW3bBn_1L26kZruwbpJKT5JB6Z2Ondv_S5-_zMTlW57HikUV3IlruMP6Uep8ybH4Rl7owqFw_AHI3HdJe0&t=ffffffffe4ec58b9"><\\/script>');
//]]>
</script>

<script src="/ScriptResource.axd?d=eFccyECKxzUMerpr1d8da9WR_omC26IxSk8s8SRCIij5o9JRBM8X0nIXnv8h0ywqCF64Jg7rrIimpXcjD7zFlDsXeRHYBnJ6Ra57JEyfrMEdpDJFDMWnql5x0xHFKSHx2GKOVxp3mrH8OLshpF5qDHFmRzl1M0PgyBlmbZp8Eo1Zq4TnBbgANoitro4_x6kK-5KLE2Uqi2wOwYsnaHmGPpzZCgI1" type="text/javascript"></script>
<div>

	<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="42DF5B7A" />
</div>
    <div id="fb-root">
    </div>
    <script type="text/javascript">
//<![CDATA[
Sys.WebForms.PageRequestManager._initialize('ctl00$ctl00$ScriptManager', 'aspnetForm', [], [], [], 90, 'ctl00$ctl00');
//]]>
</script>

    
         
    <navbar />


        <div id="navContent" class="nav-content logged-in">
            <div class="nav-content-inner">
                <div id="MasterContainer" >
                    

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



                    <script type="text/javascript">Roblox.FixedUI.gutterAdsEnabled=false;</script>

                    

                    <div id="Container">
                        
                        
                    </div>
                    
                    <noscript><div class="alert-info"><h5>Please enable Javascript to use all the features on this site.</h5></div></noscript>
                    ${systemAlert()}
                    
                    <div class="alert-container">
                        
                        
                    </div>
                    
                    
                    
                        <div id="AdvertisingLeaderboard">
                            

<iframe name="Roblox_MyRoblox_Top_728x90" 
        allowtransparency="true"
        frameborder="0"
        height="110"
        scrolling="no"
        data-src=""
        src="https://www.roblox.com/user-sponsorship/1"
        width="728"
        data-js-adtype="iframead"
        data-ad-slot="Roblox_MyRoblox_Top_728x90"></iframe>
                        </div>
                    
                    
                    <div id="BodyWrapper">
                        
                        <div id="RepositionBody">
                            <div id="Body" class="body-width ">
                                
    

<style type="text/css">
    #Body {
        padding: 10px;
    }

    .hint {
        margin-left: 4px;
    }
</style>
<div class="MyMoneyPage text">
    <div class="WhiteSquareTabsContainer">
        <ul class="SquareTabsContainer">
            
            <li class="SquareTabGray selected" contentid="MyTransactions_tab">
                <span><a>My Transactions</a></span>
            </li>
            
            <li class="SquareTabGray " contentid="Summary_tab">
                <span><a>Summary</a></span>
            </li>
            
        </ul>
    </div>
    <a href=https://www.roblox.com/upgrades/robux?ctx=money class="BuyRobuxButton btn-medium btn-primary">Buy Robux</a>
    <div class="StandardPanelContainer">
        <div id="TabsContentContainer" class="StandardPanelWhite">
        


            <div id="MyTransactions_tab" class="TabContent selected uninitialized">
                <div class="SortsAndFilters">
                    <div class="TransactionType">
                        <span class="form-label">Transaction Type:</span>
                        <select class="form-select" id="MyTransactions_TransactionTypeSelect">
                            <option value="purchase">Purchases</option>
                            <option value="sale">Sales</option>
                            <option value="affiliatesale">Commissions</option>
                            
                            <option value="grouppayout">Group Payouts</option>
                            
                                <option value="adspend">Ad Spend</option>
                            
                        </select>
                    </div>
                    <div style="clear:both;float:none;"></div>
                </div>
                <div class="TransactionsContainer">
                    <table class="table" cellpadding="0" cellspacing="0" border="0">
                        <tr class="table-header">
                            <th class="Date first">Date</th>
                            <th class="Member">Member</th>
                            <th class="Description">Description</th>
                            <th class="Amount">Amount</th>
                        </tr>
                        <tr class="datarow" colspan="4">
                            <td class="loading"></td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <div id="Summary_tab" class="TabContent uninitialized">
                <div class="SortsAndFilters">
                    <span class="form-label">Time Period:</span>
                    <select class="form-select" id="TimePeriod">
                        <option value="day">Past Day</option>
                        <option value="week">Past Week</option>
                        <option value="month">Past Month</option>
                        <option value="year">Past Year</option>
                    </select>
                </div>
                <div class="ColumnsContainer">
                    <div class="RobuxColumn full-column">
                        <div>
                            <h2 class="light">
                                <span class="icon-robux-16x16">&nbsp;</span>
                                <span>Robux</span>
                            </h2>
                            <table class="table" cellpadding="0" cellspacing="0" border="0" >
                            <tr class="table-header">
                                <th class="Categories first">Categories</th>
                                <th class="Credit">Credit</th>
                            </tr>
                            <tr >
                                <td class="Categories">Premium Stipend</td>
                                <td class="Credit BCStipend">&nbsp;</td>
                            </tr>
                            <tr >
                                <td class="Categories">Sale of Goods</td>
                                <td class="Credit SaleOfGoods">&nbsp;</td>
                            </tr>
                            <tr >
                                <td class="Categories">Currency Purchase</td>
                                <td class="Credit CurrencyPurchase">&nbsp;</td>
                            </tr>
                            <tr >
                                <td class="Categories">Trade System Trades</td>
                                <td class="Credit TradeSystem">&nbsp;</td>
                            </tr>
                            <tr  >
                                <td class="Categories">Pending Robux<img src="/rbxcdn/images/d3246f1ece35d773099f876a31a38e5a.png" class="TipsyImg tooltip-right hint" title="Revenue from some transactions is held for a short period of time before being released to the seller to prevent abuse." /></td>
                                <td class="Credit PendingRobux">&nbsp;</td>
                            </tr> 
                            
                            <tr>
                                <td class="Categories">Group Payouts</td>
                                <td class="Credit GroupPayouts">&nbsp;</td>
                            </tr>
                            
                                <tr>
                                    <td class="Categories">Premium Payouts</td>
                                    <td class="Credit PremiumPayouts">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="Categories">Premium Payouts from Group(s)</td>
                                    <td class="Credit PremiumGroupPayouts">&nbsp;</td>
                                </tr>
                            
                                <tr class="total">
                                <td colspan="3">
                                    <h2 class="light">TOTAL&nbsp;</h2>
                                    <span class="icon-robux-16x16"></span><span class="money"></span>
                                </td>
                            </tr>
                            </table>
                        </div>
                    </div>
                    <div style="clear:both;"></div>
                </div>
            </div>
            
            <div id="AdContainer" class="Ads_WideSkyscraper">
                

<iframe name="Roblox_Message_Right_160x600" 
        allowtransparency="true"
        frameborder="0"
        height="612"
        scrolling="no"
        data-src=""
        src="https://www.roblox.com/user-sponsorship/2"
        width="160"
        data-js-adtype="iframead"
        data-ad-slot="Roblox_Message_Right_160x600"></iframe>
            </div>
            <div style="clear: both;"></div>
        </div>
    </div>

</div>

    
    

                                <div style="clear:both"></div>
                            </div>
                        </div>
                    </div> 
                </div>
                
                ${footer()}


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

        <div ng-modules="baseTemplateApp">
            <!-- Template bundle: base -->
<script type="text/javascript">
"use strict"; angular.module("baseTemplateApp", []).run(['$templateCache', function($templateCache) { 
$templateCache.put('cc-modal-template', $('#cc-modal-template').html());
 }]);
</script>
<script type="text/ng-template" id="cc-modal-template">
        <div class="modal-header">
            <button type="button" class="close"
                    ng-show="modalData.closeButtonShow"
                    ng-click="dismiss()">
                <span class="icon-close"></span>
            </button>
            <div class="modal-title">
                <span ng-if="modalData.titleIcon && modalData.titleIcon.length > 0" ng-class="modalData.titleIcon"></span>
                <h4 ng-bind="modalData.titleText"></h4>
            </div>            
        </div>
        <div class="modal-body">
            <p ng-if="modalData.bodyText" class="body-text text-description" ng-bind-html="modalData.bodyText"></p>
            <p ng-if="modalData.bodyHtmlUnsafe" class="body-text text-description" ng-bind-html="modalData.bodyHtmlUnsafe"></p>
            <div class="img-container modal-image-container"
                 ng-show="modalData.imageUrl && modalData.imageUrl.length > 0">
                <img class="modal-thumb" ng-src="{{modalData.imageUrl}}" />
            </div>
        </div>
        <div class="modal-buttons">
            <button type="submit" ng-attr-id="{{modalData.actionButtonId}}"
                    class="modal-button" ng-class="modalData.actionButtonClass"
                    ng-if="modalData.actionButtonShow"
                    ng-click="close(true)" ng-bind="modalData.actionButtonText"></button
            ><button type="button" class="modal-button" ng-class="modalData.neutralButtonClass"
                    ng-if="modalData.neutralButtonShow"
                    ng-click="dismiss()" ng-bind="modalData.neutralButtonText"></button>
        </div>
        <div class="modal-footer"
             ng-if="modalData.footerText && modalData.footerText.length > 0">
            <div class="text-footer" ng-bind-html="modalData.footerText"></div>
        </div>
        <div class="modal-footer"
             ng-if="modalData.footerHtmlUnsafe && modalData.footerHtmlUnsafe.length > 0">
            <div class="text-footer" ng-bind-html="modalData.footerHtmlUnsafe"></div>
        </div>
</script>

        </div>
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='LegacyStyleGuide' type='text/javascript' src='/rbxcdn/js/3468fc049b99400affe1e882a676eeea25561cb8937257abe012303f6aba6f54.js'></script>

 
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

 

        <div ng-modules="pageTemplateApp">
            <!-- Template bundle: page -->
<script type="text/javascript">
"use strict"; angular.module("pageTemplateApp", []).run(['$templateCache', function($templateCache) { 

 }]);
</script>

        </div>
    
   <div id="TosAgreementInfo"
    data-terms-check-needed="False">
    </div>
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='pageEnd' type='text/javascript' src='/rbxcdn/js/467ad076d8163bb324ef9d671f5db743.js'></script>

</body>                
</html>
`;


	return formatView(DashboardStr, session);
};