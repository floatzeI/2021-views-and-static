import xss from 'xss';
import convertToSeoName from '../../lib/convertToSeoName';
import formatView from '../../lib/formatView';
import replacer from '../../lib/replaceUrls';
import { IUserInfo } from '../../middleware';
import { GameAccess } from '../../models/Games';
import getTemplate from '../partials/general-page-template';
import { headerCss } from '../partials/header';
import systemAlert from '../partials/systemAlert';

export default (gameInfo: any, session: IUserInfo, csrf: string): string => {
	return formatView(replacer(`

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" xmlns:fb="http://www.facebook.com/2008/fbml">
<head data-machine-id="${process.env.MACHINE_ID || 'WEB0'}">
    <!-- MachineID: ${process.env.MACHINE_ID || 'WEB0'} -->
    <title>Configure game - Roblox</title>
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
    "logo": "/rbxcdn/images/cece570e37aa8f95a450ab0484a18d91",
    "sameAs" : [
    "https://www.facebook.com/roblox/",
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

<metaflags />
<meta name="page-meta" data-internal-page-name="" />


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
        </script>



    <link rel="canonical" href="https://www.roblox.com/universes/configure?id=${gameInfo.universeId}" />

<link href="/rbxcdn/images/3b43a5c16ec359053fef735551716fc5.ico" rel="icon" />




<link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet'  href='/rbxcdn/static/css/MainCSS___0921edf3222ac7b5f224256c078ea1b1_m.css/fetch' />

    <link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="LegacyStyleGuide" data-bundle-source="Main" href="/rbxcdn/css/549b976e2d39abc487ceeba8044b42b8f35bc98f4087dd78aa3eff7a7f16eec7.css" />

    <link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="Thumbnails" data-bundle-source="Main" href="/rbxcdn/css/9517d686dc47015c200496d77e2b18146ee37652d18e25ecf9e1ed230310ea13.css" />


<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="VerificationUpsell" data-bundle-source="Main" href="/rbxcdn/css/4cfc9413aaac922000f010ba651f264e59a200d6062d41f8196017ade0094116.css" />

<link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet' data-bundlename='Footer' href='/rbxcdn/css/55b250e8473888792f885d898973a13692fb22157baf61aaffa62ce4545f3408.css' />


    <link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="ConfigureWebApps" data-bundle-source="Main" href="/rbxcdn/css/08def520152a575438e73a81aa9a310c2415c327df7b624a24aa6e794d24dba3.css" />


<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="AccountSecurityPrompt" data-bundle-source="Main" href="/rbxcdn/css/9856228925f28fad6a7bdb2fd7f92be876ba970048ad6384195a735184161ce4.css" />
<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="SocialLinksConfiguration" data-bundle-source="Main" href="/rbxcdn/css/753d45dbe3705764f5bd30ad4d49302ec414724d9604c1fc151bb801597ad575.css" />

    <link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="RobuxIcon" data-bundle-source="Main" href="/rbxcdn/css/2f599b9e9ca20ee3c155684adbf1cdcb7220bab681b55b4505123a0c34e81969.css" />


<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="NotificationStream" data-bundle-source="Main" href="/rbxcdn/css/d1c36a57982296706964ac2b650ba2f3087c47056ba37ac02822dc0192ce7820.css" />


<link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet'  href='/rbxcdn/static/css/page___787cfec803809e6cd744187083f1ce55_m.css/fetch' />

<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="Chat" data-bundle-source="Main" href="/rbxcdn/css/c0da40b3a6667e911346e3adfbb541802f9883b9c3933e6110ea1160109ac987.css" />




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
            gtag ('set', 'allow_ad_personalization_signals', false) ;
            gtag('js', new Date());
            gtag('config', accountCode);
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
            IsDebuggerEnabled: "False"
        }
    </script>





<script type="text/javascript">
    var Roblox = Roblox || {};
    Roblox.EnvironmentUrls = Roblox.EnvironmentUrls || {};
    Roblox.EnvironmentUrls = {"abtestingApiSite":"https://abtesting.roblox.com","accountInformationApi":"https://accountinformation.roblox.com","accountSettingsApi":"https://accountsettings.roblox.com","adConfigurationApi":"https://adconfiguration.roblox.com","adsApi":"https://ads.roblox.com","apiGatewayCdnUrl":"https://apis.rbxcdn.com","apiGatewayUrl":"https://apis.roblox.com","apiProxyUrl":"https://api.roblox.com","assetDeliveryApi":"https://assetdelivery.roblox.com","authApi":"https://auth.roblox.com","avatarApi":"https://avatar.roblox.com","badgesApi":"https://badges.roblox.com","billingApi":"https://billing.roblox.com","captchaApi":"https://captcha.roblox.com","catalogApi":"https://catalog.roblox.com","chatApi":"https://chat.roblox.com","chatModerationApi":"https://chatmoderation.roblox.com","contactsApi":"https://contacts.roblox.com","contentStoreApi":"https://contentstore.roblox.com","developApi":"https://develop.roblox.com","domain":"roblox.com","economyApi":"https://economy.roblox.com","economycreatorstatsApi":"https://economycreatorstats.roblox.com","engagementPayoutsApi":"https://engagementpayouts.roblox.com","followingsApi":"https://followings.roblox.com","friendsApi":"https://friends.roblox.com","gameInternationalizationApi":"https://gameinternationalization.roblox.com","gamesApi":"https://games.roblox.com","groupsApi":"https://groups.roblox.com","groupsModerationApi":"https://groupsmoderation.roblox.com","inventoryApi":"https://inventory.roblox.com","itemConfigurationApi":"https://itemconfiguration.roblox.com","localeApi":"https://locale.roblox.com","localizationTablesApi":"https://localizationtables.roblox.com","metricsApi":"https://metrics.roblox.com","midasApi":"https://midas.roblox.com","notificationApi":"https://notifications.roblox.com","premiumFeaturesApi":"https://premiumfeatures.roblox.com","presenceApi":"https://presence.roblox.com","privateMessagesApi":"https://privatemessages.roblox.com","publishApi":"https://publish.roblox.com","restrictedHoursServiceApi":"https://apis.roblox.com/restricted-hours-service","screenTimeApi":"https://apis.rcs.roblox.com/screen-time-api","shareApi":"https://share.roblox.com","thumbnailsApi":"https://thumbnails.roblox.com","tradesApi":"https://trades.roblox.com","translationRolesApi":"https://translationroles.roblox.com","twoStepVerificationApi":"https://twostepverification.roblox.com","universalAppConfigurationApi":"https://apis.roblox.com/universal-app-configuration","userAgreementsServiceApi":"https://apis.roblox.com/user-agreements","userModerationApi":"https://usermoderation.roblox.com","usersApi":"https://users.roblox.com","voiceApi":"https://voice.roblox.com","websiteUrl":"https://www.roblox.com"};

    // please keep the list in alphabetical order
    var additionalUrls = {
        amazonStoreLink: "https://www.amazon.com/Roblox-Corporation/dp/B00NUF4YOA",
        amazonWebStoreLink: "https%3a%2f%2fwww.amazon.com%2froblox%3f%26_encoding%3dUTF8%26tag%3dr05d13-20%26linkCode%3dur2%26linkId%3d5562fc29c05b45562a86358c198356eb%26camp%3d1789%26creative%3d9325",
        appProtocolUrl: "robloxmobile://",
        appStoreLink: "https://itunes.apple.com/us/app/roblox-mobile/id431946152",
        googlePlayStoreLink: "https://play.google.com/store/apps/details?id=com.roblox.client&amp;hl=en",
        iosAppStoreLink: "https://itunes.apple.com/us/app/roblox-mobile/id431946152",
        windowsStoreLink: "https://www.microsoft.com/en-us/store/games/roblox/9nblgggzm6wm",
        xboxStoreLink: "https://www.microsoft.com/en-us/p/roblox/bq1tn1t79v9k"
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



    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='header' type='text/javascript' src='/rbxcdn/js/2469d979b1ba0d936a57c243e7bb1b84.js'></script>


    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="Polyfill" data-bundle-source="Main" src="/rbxcdn/js/772034db167d3f4260047db4a7f2b8a58cf448709327013541e47c8962b6e556.js"></script>


    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="XsrfProtection" data-bundle-source="Main" src="/rbxcdn/js/4db2f741b7a3ec36d11fec999ce33f708ae85641cabfd27e11e0935928f7d9c4.js"></script>


    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="HeaderScripts" data-bundle-source="Main" src="/rbxcdn/js/97cb9ac7262155c329a259fce9f940f9bcfa852a6a1ccb44bd8a41c31e84e54b.js"></script>


<meta name="roblox-tracer-meta-data"
      data-access-token="S3EXjCZQQr6OixnmKu+hoa3OSfpvPP5qgU0esiWgwreFUUMBnPhEaoS5yIIrf9bdYlSgW0XKCb1So9Rhtj1eMzt/MJWcyKZ4TwIckHVj"
      data-service-name="Web"
      data-tracer-enabled="false"
      data-api-sites-request-allow-list="friends.roblox.com,chat.roblox.com,thumbnails.roblox.com,games.roblox.com"
      data-sample-rate="5"
      data-is-instrument-page-performance-enabled="true"/><script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="RobloxTracer" data-bundle-source="Main" src="/rbxcdn/js/a168257175fe69cdb0762a3b8ca5d0a5fd625f77c027d5e4cef7f90a1602d704.js"></script>

<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="RealTime" data-bundle-source="Main" src="/rbxcdn/js/89f30f6701e04efb9dad1b1fb75ebd7cfe55257af8c8cefbd609039c4d66d8a8.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="CrossTabCommunication" data-bundle-source="Main" src="/rbxcdn/js/948f3bfc9bbd152f537592b51c1a7765cdc0dfc538d74b7e5fc696c476c8792b.js"></script>
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
</script>    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='intl-polyfill' type='text/javascript' src='/rbxcdn/js/d44520f7da5ec476cfb1704d91bab327.js'></script>


    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="InternationalCore" data-bundle-source="Main" src="/rbxcdn/js/95044be3ff42e3dc429313faca1316cea62f328a39e29689ffeda9002f3a8bc6.js"></script>

    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="TranslationResources" data-bundle-source="Main" src="/rbxcdn/js/83d836a661ff433d5b7ce719c489e43af590ff75ab39ccc6d393546fe91b766a.js"></script>


    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='base' type='text/javascript' src='/rbxcdn/js/f5c646fd7f56d2cba8a9c7c243601848.js'></script>

    <script type='text/javascript'>Roblox.config.externalResources = [];Roblox.config.paths['Pages.Catalog'] = '/rbxcdn/js/719f30d64facebed285eccd90ed19da1.js';Roblox.config.paths['Pages.CatalogShared'] = '/rbxcdn/js/1b451357891fcc5351b20d20504aa8ad.js';Roblox.config.paths['Widgets.AvatarImage'] = '/rbxcdn/js/7d49ac94271bd506077acc9d0130eebb.js';Roblox.config.paths['Widgets.DropdownMenu'] = '/rbxcdn/js/da553e6b77b3d79bec37441b5fb317e7.js';Roblox.config.paths['Widgets.HierarchicalDropdown'] = '/rbxcdn/js/4a0af9989732810851e9e12809aeb8ad.js';Roblox.config.paths['Widgets.ItemImage'] = '/rbxcdn/js/61a0490ba23afa17f9ecca2a079a6a57.js';Roblox.config.paths['Widgets.PlaceImage'] = '/rbxcdn/js/a6df74a754523e097cab747621643c98.js';</script>

    <CoreUtilities />

    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="CoreRobloxUtilities" data-bundle-source="Main" src="/rbxcdn/js/09c0fe73025a49dbb397295b5ee57e7b5c7a20e7b74645178c037a7438d7f810.js"></script>


    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="React" data-bundle-source="Main" src="/rbxcdn/js/6beb1c5bcec1a4449303da9e523d45a1aa1652f9b42ae6c8a3ac347955ca3b3f.js"></script>

    <ReactUtilities />

    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="ReactStyleGuide" data-bundle-source="Main" src="/rbxcdn/js/c65d6975bac58c3e22cd6f6ac6ed7c6da662106271a0107e06c3aaa2a1d85ef4.js"></script>

    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="ConfigureWebApps" data-bundle-source="Main" src="/rbxcdn/js/c756de2b0f5f2f05d62899a3b602b4a3b573ad3faa1adea789291ebe9c66a002.js"></script>


<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='Footer' type='text/javascript' src='/rbxcdn/js/5fbe4bf3cd758289553a511c4208511ebaeaf37add48e7f10820893557c65e01.js'></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_CommonUI.Features" data-bundle-source="Unknown" src="/rbxcdn/js/3c2e73691069105f1967dda486910c6441a55674c940ea5a9e5ee391b1a8a3ad.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_CommonUI.Features" data-bundle-source="Unknown" src="/rbxcdn/js/3fb9aa72de2a170e85eafc002144750baf669402547cb7d4235e33e59e20453c.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Common.AlertsAndOptions" data-bundle-source="Unknown" src="/rbxcdn/js/8f06fef33a61a6c67e1e6d93829b9bb03476bc976102d7bcebe4bfe85a3d4328.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Common.AlertsAndOptions" data-bundle-source="Unknown" src="/rbxcdn/js/03a64d3850925b52ee73bd27b41658f4a35a2b33b4a499fcb2ce72dcbd98020f.js"></script>
    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='angular' type='text/javascript' src='/rbxcdn/js/ae3d621886e736e52c97008e085fa286.js'></script>

    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="AngularJsUtilities" data-bundle-source="Main" src="/rbxcdn/js/81164cee2ed2b07903bf00968368213664e0e78bdbdf9418389c2d2a8512cccf.js"></script>

    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="InternationalAngularJs" data-bundle-source="Main" src="/rbxcdn/js/90f18784a43a70553e967191b948f70b0193df565f1605762c3c1e245ab4b55a.js"></script>

    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="Thumbnails" data-bundle-source="Main" src="/rbxcdn/js/5cbced54f9f243ae5e05e7d00f87fc7b966e65b549cb20701b781d1b1b74f154.js"></script>


<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="PresenceStatus" data-bundle-source="Main" src="/rbxcdn/js/bc21a1cb026cbbe9d57b77c1811f0925ca574a53a55a656c4ca4e216dda96eb3.js"></script>


<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="VerificationUpsell" data-bundle-source="Main" src="/rbxcdn/js/77e7b5a83c50728043207196edb8679437757b6de6e82ca180d507a28f869c96.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.VerificationUpsell" data-bundle-source="Unknown" src="/rbxcdn/js/752ac61628171b24b3f66c79e3108fd66665ca9b6a9a2eb510bea0819a8f0409.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.VerificationUpsell" data-bundle-source="Unknown" src="/rbxcdn/js/65f6244558f4f126933c1e10dac2ee444435700b61db456d4823d286ccbcf47f.js"></script>
<authScripts />
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.ShopDialog" data-bundle-source="Unknown" src="/rbxcdn/js/c0606e8d6eb4487cdc70d318e6de3d9aaeeb465ddb84acd95139011e56c5e5c6.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.ShopDialog" data-bundle-source="Unknown" src="/rbxcdn/js/95fdafe5af749e388de603b9ee7f67bb092c3c790badc572db4e2bca0c32b49a.js"></script>
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='page' type='text/javascript' src='/rbxcdn/js/d261e51291faa081c140744c1b149c43.js'></script>




<script type="text/javascript">
    var Roblox = Roblox || {};
    Roblox.UpsellAdModal = Roblox.UpsellAdModal || {};

    Roblox.UpsellAdModal.Resources = {
        title: "Remove Ads Like This",
        body: "Builders Club members do not see external ads like these.",
        accept: "Upgrade Now",
        decline: "No, thanks"
    };
</script>
    <script type="text/javascript">
        Roblox.FixedUI.gutterAdsEnabled = false;
    </script>


    <script type="text/javascript">
        var Roblox = Roblox || {};
        Roblox.jsConsoleEnabled = false;
    </script>

        <script>
            $(function () {
                Roblox.DeveloperConsoleWarning.showWarning();
            });
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
      data-thumbnail-metrics-sample-size="20"
      data-concurrent-thumbnail-request-count="4"/>

</head>
<body id="rbx-body"
      data-performance-relative-value="0.005"
      data-internal-page-name=""
      data-send-event-percentage="0">

    <meta name="csrf-token" data-token="ShPSnfXJwjuY" />

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

    <div ng-modules="baseTemplateApp">
        <script type="text/javascript" src="/rbxcdn/js/ffcc04436179c6b2a6668fdfcfbf62b1.js"></script>
    </div>

    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="LegacyStyleGuide" data-bundle-source="Main" src="/rbxcdn/js/cf931642dd2280a025049c4c6b4a31ebd0c1eae26ade87d8cc90767d6b292b4f.js"></script>

<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="AccountSecurityPrompt" data-bundle-source="Main" src="/rbxcdn/js/57aec4f897d28943f4150609c1d7fbd7f52a812b9695b03ba069fe7201e22691.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Authentication.SignUp" data-bundle-source="Unknown" src="/rbxcdn/js/1827da1405f369519d5ab9c306377bd0b1c0119ecf40ce469bb148dc488b73aa.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Authentication.SignUp" data-bundle-source="Unknown" src="/rbxcdn/js/60590d1351314288e47c3c359bbb7678f2a8bf118cd446ac9ad73bbc892ee446.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.AccountSecurityPrompt" data-bundle-source="Unknown" src="/rbxcdn/js/80dc8421f56679cf70640c566a25e4f80d7c2f0e50b778751136976b2d9b8cbb.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.AccountSecurityPrompt" data-bundle-source="Unknown" src="/rbxcdn/js/daa982b20fd38cc6355719293666a21f17955b2546241e8404b08b77bdb256cf.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="SystemFeedback" data-bundle-source="Main" src="/rbxcdn/js/aac542106f7f77697cbc3b36ab3cf0619bf9b69a1af0983e59dfeb6c36652d3b.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="SocialLinksConfiguration" data-bundle-source="Main" src="/rbxcdn/js/14b921ab9ecada13efb22009f2e0cede9469a9e58d0fce3034b9f0a1a5986b54.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.PromotedChannels" data-bundle-source="Unknown" src="/rbxcdn/js/af8cdbaeb57985f23b72f079c67f40debbea47af094dd6051f12b176492c2e09.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.PromotedChannels" data-bundle-source="Unknown" src="/rbxcdn/js/a9238207bc9ad295084e9a24589d3ea66d8ec4dc1016ad59ba4fa48b3a2aed8a.js"></script>

<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="NotificationStream" data-bundle-source="Main" src="/rbxcdn/js/6ebdd3991ff7b7a9d637b5c5db24e90f164e15f3552fed70d09ca8f3cb4ea064.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Notifications.NotificationStream" data-bundle-source="Unknown" src="/rbxcdn/js/d277150124669542c2c5cab9a28e2944816841ef6cf4c8e3ad2e7c1c27933d94.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Notifications.NotificationStream" data-bundle-source="Unknown" src="/rbxcdn/js/157c8127f6bb008b9665d81a3b1abec8785bb67ffcd3b21ae2c6ba7b3e65ae85.js"></script>
    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="Contacts" data-bundle-source="Main" src="/rbxcdn/js/bf0096e2c114d7b0ba5dbbc43ddd867fa587d1373b6ea4fd2e99ce7afb4ef8de.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="Chat" data-bundle-source="Main" src="/rbxcdn/js/39a1587966c7f3abd0e3b32bbda3b0f34f350fa42d3daf7d8995f32a5d856ffc.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.Chat" data-bundle-source="Unknown" src="/rbxcdn/js/fa72396066e6281487ac88403442eedb3f1fd2bfa5d7ce9d3f24555d47b07927.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.Chat" data-bundle-source="Unknown" src="/rbxcdn/js/c2e07c35f6b6f198f4cdd7617700e3fdc08a4950057b5d951e177cb3a799925f.js"></script>

    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="ItemPurchase" data-bundle-source="Main" src="/rbxcdn/js/bf6ae6dfa7d79f9ffe1a0c1b3a22c25707722264d9afdd2fae5cc3e7f51e5d70.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Purchasing.PurchaseDialog" data-bundle-source="Unknown" src="/rbxcdn/js/bed4301242a08489111ebfe8aad4034273c3aa8e267840f32f7d3f7af241ca78.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Purchasing.PurchaseDialog" data-bundle-source="Unknown" src="/rbxcdn/js/9ac0c0bd0fbda0a0b718470ef85b5206c0997111f8735294c638812e8d3d615a.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="IdVerification" data-bundle-source="Main" src="/rbxcdn/js/0a08c56eebb8cb4fb9eaae87fc988e200650f8c3e6a3c9d64b24568b8563d351.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_CommonUI.Controls" data-bundle-source="Unknown" src="/rbxcdn/js/ee6a5ad0dd6831cbde49fac0632a1faa3a8584bb93815f2e91afefd2ecd0afb5.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_CommonUI.Controls" data-bundle-source="Unknown" src="/rbxcdn/js/d65d38b7c8e854eb865388749efd0ccf6f86bfa8eb798975bd81ff5d5120204d.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Verification.Identity" data-bundle-source="Unknown" src="/rbxcdn/js/a9461c1138c54b80136604e6cf5d1c8f7de2ff0ae7307778296676f204a171aa.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Verification.Identity" data-bundle-source="Unknown" src="/rbxcdn/js/07151234187d229c3853ee4fb7a819f527398798f37bbcfa02e6c9da8804846c.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="GameLaunch" data-bundle-source="Main" src="/rbxcdn/js/59c5190902481b50c55512aadf69c17e522bc9dd364979261974e85d69125114.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.GameLaunchGuestMode" data-bundle-source="Unknown" src="/rbxcdn/js/6852af8f7df15395ccb3d121a914ee7301a7162f5afb3395575c6075c617923f.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Feature.GameLaunchGuestMode" data-bundle-source="Unknown" src="/rbxcdn/js/f41ec06eeae79fa94e6ae9f435b0a1c6743085e898884eddb4d4025ca3af8a44.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Common.VisitGame" data-bundle-source="Unknown" src="/rbxcdn/js/c76f1b1aed5ee44ddb32b19dbb7496a06e7b85847b284e9d6478cd56144d5e7a.js"></script>
<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="DynamicLocalizationResourceScript_Common.VisitGame" data-bundle-source="Unknown" src="/rbxcdn/js/d11df52fdb9676a899b9a715f89867b86d1d8a897da128936a143ecb653db48a.js"></script>



    <div ng-modules="pageTemplateApp">
        <script type="text/javascript" src="/rbxcdn/js/4d7d61d6c52a2859d049266f1b35b33f.js"></script>
    </div>








<div id="fb-root"></div>


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

<div class="nav-container no-gutter-ads">

<navbar />

    <div id="navContent" class="nav-content


                                logged-in">
        <div class="nav-content-inner">
            <div id="MasterContainer">
                    <script type="text/javascript">
                        if (top.location != self.location) {
                            top.location = self.location.href;
                        }
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


                <div>
                    <div class="alert-container">

                        <noscript><div class="alert-info">Please enable Javascript to use all the features on this site.</div></noscript>
						${systemAlert()}
                    </div>

                                        <div id="BodyWrapper" class="">
                        <div id="RepositionBody">
                            <div id="Body" class="body-width">
                                        <div id="TosAgreementInfo"
                                             data-terms-check-needed="True">
                                        </div>




<h1>Configure game</h1>
<span class="back-button"><a href="https://www.roblox.com/games/${gameInfo.assetId}/${convertToSeoName(gameInfo.name)}">Back</a></span>
<div>
    <div id="navbar" class="nav-bar">
        <div class="verticaltab selected" data-maindiv="basicSettings">
            <a href="#">Basic Settings</a>
        </div>
        <div class="verticaltab" data-maindiv="avatarSettings">
            <a href="#">Avatar Settings</a>
        </div>
        <div class="verticaltab" data-maindiv="places">
            <a href="#">Places</a>
        </div>
        <div class="verticaltab" data-maindiv="createdPlaces">
            <a href="#">Created Places</a>
        </div>
        <div class="verticaltab" data-maindiv="developerProducts">
            <a href="#">Developer Products</a>
        </div>
        <div class="verticaltab" data-maindiv="socialMedia">
            <a href="#">Social Links</a>
        </div>
                    <div class="verticaltab" data-maindiv="gameUpdate">
                <a href="#">Updates</a>
            </div>
    </div>
    <div id="universe-configure" class="universe-content divider-left"
         data-universeid="${gameInfo.universeId}"
         data-addplaceurl="/universes/addplace"
         data-removeplaceurl="/universes/removeplace"
         data-configureplaceurl="/universes/configure-universe-places"
         data-loadmoreplacesurl="/universes/get-universe-places">


        <form id="configureUniverseForm" method="post" action="/universes/doconfigure">
            <input id="Id" name="Id" type="hidden" value="${gameInfo.universeId}" />
            <input name="__RequestVerificationToken" type="hidden" value="${csrf}" />
            <div id="basicSettings" class="configure-tab">
                <div class="headline">
                    <h2>Basic Settings</h2>
                </div>


                <div class="universe-form-label ">
                    <label class="form-label" for="Name">Name</label>:
                </div>
                <div class="name-field-container">
                    <input autofocus="" class="text-box text-box-medium universe-input" id="Name" maxlength="50" name="Name" type="text" value="${xss(gameInfo.name)}" />
                    <div class="tool-tip warning-text name-error" style="display: none">
                        Name cannot be empty
                        <img src="/rbxcdn/images/77c4414271016f8257c136305b7888b4.png" class="right">
                    </div>
                </div>
                <br />
                <div class="universe-form-label privacy-label">
                    <span class="form-label">
                        Privacy: <br />
                        <span class="radio-selection">
                            <input ${gameInfo.isPublic ? 'checked="checked"' : ''} id="IsPublic" name="IsPublic" type="radio" value="True" /> <span class="checkboxListItem">
                                Public
                                <img class="TipsyImg tooltip-right" src="/rbxcdn/images/65cb6e4009a00247ca02800047aafb87.png" data-toggle="tooltip" alt="Everyone can see your public games." title="Everyone can see your public games." />
                            </span>
                        </span>
                        <br />
                        <span class="radio-selection-last">
                            <input ${!gameInfo.isPublic ? 'checked="checked"' : ''} id="IsPublic" name="IsPublic" type="radio" value="False" /> <span class="checkboxListItem">
                                Private
                                <img class="TipsyImg tooltip-right" src="/rbxcdn/images/65cb6e4009a00247ca02800047aafb87.png" data-toggle="tooltip" alt="Only you can see your private games." title="Only you can see your private games." />
                            </span>
                        </span>
                        <br />

                    </span>
                </div>
                <div class="universe-form-label studio-access-label">
                    <span class="form-label">
                        Enable Studio Access to API Services:
                        <input id="AllowStudioAccessToApis" name="AllowStudioAccessToApis" type="checkbox" value="true" /><input name="AllowStudioAccessToApis" type="hidden" value="false" />
                    </span>
                </div>

                <div class="universe-buttons">
                    <a  class="btn-medium btn-neutral configure-save-button" id="okButton">Save</a>
                    <a  href="https://www.roblox.com/develop?Page=Universes" class="btn-medium btn-negative" id="cancelButton">Cancel</a>
                </div>
            </div>
        </form>

        <div id="avatarSettings" class="configure-tab" style="display: none">


<script type="text/javascript">
    if (typeof Roblox.UniverseData === "undefined") {
        Roblox.UniverseData = {"developDomain":"https://develop.roblox.com","userId":1335179568,"model":{"universeId":${gameInfo.universeId}},"developPagePath":"/develop?Page=universes","isProportionDeveloperSettingEnabled":true,"isJointPositioningTypeSettingEnabled":true,"isMorphingSettingEnabled":true};
    }
</script>

    <div id="ConfigureUniverseAvatarSettings" ng-controller="universeController" ng-modules="robloxApp, universe" ng-cloak>
        <div universe-avatar-settings></div>
    </div>
        <!-- System Feedback -->
        <div class="alert-system-feedback">
            <div class="alert alert-warning">
                <span class="alert-context">Warning</span>
                <span id="close" class="icon-close-white"></span>
            </div>
        </div>
        <div class="alert-system-feedback">
            <div class="alert alert-loading">Loading...</div>
        </div>
        <div class="alert-system-feedback">
            <div class="alert alert-success">Success</div>
        </div>

        </div>
        <div id="places" class="configure-tab" style="display: none">


    <div id="configure-places" class="configure-places-container">
        <div id="universe-error" style="display: none" class="error-message"></div>
        <div id="set-startplace-container" class="start-place-container divider-bottom">
            <div class="configure-places-title">
                <h3>Start Place </h3><span class="universe-configure-tooltip info-tool-tip tooltip-top" title="This place will be the starting point for your game"></span>
            </div>
            <div id="startplace-container" class="start-place">
                    <div class="universe-place-container">
                        <div class="universe-place-thumb">
                            <a href="https://www.roblox.com/games/${gameInfo.assetId}/${convertToSeoName(gameInfo.name)}" class="universe-place" ><img style='height: 68px; width: 120px;' class='universe-place-image' src='/thumbs/asset.ashx?assetid=${gameInfo.assetId}'/></a>
                        </div>
                        <div class="universe-detail">
                            <a href="https://www.roblox.com/games/${gameInfo.assetId}/${convertToSeoName(gameInfo.name)}">${xss(gameInfo.name)}</a>
                        </div>
                        <div class="clear"></div>
                    </div>
            </div>
        </div>
        <div class="configure-places-title">
            <h3>Other Places </h3><span class="universe-configure-tooltip info-tool-tip tooltip-top" title="Add more places to your game"></span>
        </div>
        <div id="add-universe-places" class="add-places-container">
            <a  class="btn-small btn-primary add-place-button" id="add-place-modal-button">Add Place</a>
            <div class="universe-places-paged" data-isuniversecreation="false">


    <div id="current-places" data-startrow="0" data-universeid="${gameInfo.universeId}" data-totalcount="1">
    </div>
        <div class="missing-start-place blank-box">
                <span>You can add more places to your game.</span>
        </div>

            </div>
        </div>
        <div class="clear"></div>
    </div>


<div class="PlaceSelectorModal modalPopup unifiedModal" style="display:none;">
    <div class="Title">Select Place</div>
    <div class="GenericModalBody text">
        <div class="place-selector-modal" data-place-loader-url="/universes/get-places-by-context?creationContext=NonGameCreation&amp;universeId=0">
            <div class="place-selector-container">
                <div id="PlaceSelectorItemContainer" class="place-selector-item-container"></div>
                <div id="PlaceSelectorPagerContainer" class="place-selector-pager-container"></div>
            </div>
            <div class="place-selector selectable template" title="Place" style="display: none">
                <div class="place-image" data-retry-url-template="https://thumbnails.roblox.com/v1/assets?size=160x100&amp;format=jpeg&amp;returnPolicy=AutoGenerated">
                    <img alt="^_^" class="item-image" src="/rbxcdn/images/ec5c01d220bf1b73403fa51519267742.gif"/>
                </div>
                <div class="InfoContainer">
                    <div class="place-name"></div>
                    <div class="game-name"><span class="form-label">Game: </span><span class="game-name-text"></span></div>
                    <div class="root-place" style="display: none"><span>Cannot choose start places</span></div>
                </div>
                <div style="clear:both;"></div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
    $(function () {
        Roblox.PlaceSelector.Init();
        Roblox.PlaceSelector.Resources = {
            anErrorOccurred: 'An error occurred, please try again.'
        };
    });
</script>
        </div>
        <div id="createdPlaces" class="configure-tab" style="display: none">


    <div id="configure-places" class="configure-places-container">
        <div id="universe-error" style="display: none" class="error-message"></div>
        <div class="configure-places-title">
            <h3>Created Places </h3><span class="universe-configure-tooltip info-tool-tip tooltip-top" title="These places were created using your game."></span>
        </div>
        <div class="universe-places-paged" data-isuniversecreation="true" >


    <div id="current-places" data-startrow="0" data-universeid="${gameInfo.universeId}" data-totalcount="0">
    </div>
        <div class="missing-start-place blank-box">
                <span>You can use the <a href="https://developer.roblox.com/en-us/api-reference/function/AssetService/CreatePlaceAsync" target="blank">Create and Save Place API</a> for creating Places. Check the
                <a href="https://developer.roblox.com/en-us/articles/games-and-places" target="blank">Roblox DevHub</a> for more information.</span>
        </div>

        </div>
        <div class="clear"></div>
    </div>

        </div>
        <div id="developerProducts" class="configure-tab" style="display:none">




<div id="DevProducts" class="developerProductsContainer">
    <div id="DeveloperProductsLoading">
        <img class="developerProductsLoadingImage" src='/rbxcdn/images/ec4e85b0c4396cf753a06fade0a8d8af.gif' />
    </div>
    <div id="DeveloperProductsError" >
        An error occurred while fetching the developer products.  Please try again later.
    </div>
    <div id="DeveloperProductsInnerContainer">
            <div class="headline">
                <h2>
                    Developer Products
                </h2>
                <span id="createButtonRow" class="createNewButtonSection">
                    <a  data-url="/places/create-developerproduct?universeId=${gameInfo.universeId}" class="btn-small btn-neutral" id="createNewButton">Create new</a>
                </span>
            </div>

            <div>
                <strong>You do not have any developer products.
                    <span>Click <a href="https://developer.roblox.com/articles/Developer-Products-In-Game-Purchases" target="_blank">here</a> for more information on developer products.</span>
                </strong>
            </div>
            </div>

</div>

        </div>
            <div id="socialMedia" class="configure-tab" style="display: none">
                <div ng-modules="robloxApp, socialLinksConfiguration">
                    <social-links-configuration target-type="game"
                                                target-id="${gameInfo.universeId}"
                                                social-link-limit="3"></social-links-configuration>
                </div>
            </div>
                    <div id="gameUpdate" class="configure-tab" style="display: none">



    <div class="configure-game-update"
         data-universe-id="${gameInfo.universeId}"
         data-universe-name="${xss(gameInfo.name)}"
         data-user-id="1335179568"
         data-user-name="discofurrr"
         data-publish-endpoint-url="https://develop.roblox.com/v1/gameUpdateNotifications/${gameInfo.universeId}">

        <div class="headline">
            <h2>Updates</h2>
            <span class="tooltip-container" data-toggle="tooltip" title="You can send update notifications to your game followers, which can be viewed in the notification tray.">
                <span class="icon-moreinfo-16x16"></span>
            </span>
        </div>

        <div class="game-update-sent-message">
            <a class="close-icon icon-close-white"></a>
            <span class="message"></span>
        </div>

        <div class="game-update-input-container"
             data-text-filter-url="https://develop.roblox.com/v1/gameUpdateNotifications/filter"
             data-enabled="true"
             data-last-sent-date="">

            <div class="game-update-messages">
                <div class="last-sent"></div>
                <span class="frequency">You can only send one update in a week.</span>
            </div>

            <div class="game-update-input-control">

                <textarea class="form-control game-update-input-text text" id="game-update-input" maxlength="60"
                            placeholder="Tell your game's followers what has been updated!"></textarea>


                <div id="game-update-content-length" class="game-update-content-length">60 character limit</div>


                <div class="game-update-buttons">
                    <a class="btn-control-sm game-update-button preview-button">Preview</a>
                    <a class="btn-secondary-sm game-update-button send-button" id="">Send</a>
                </div>
            </div>

        </div>

        <div class="history-spinner spinner spinner-sm"></div>
        <div class="no-history-data-message">No game update history</div>


        <div class="game-update-history-container"
             data-record-count="0"
             data-page-size="10"
             data-history-data-endpoint-url="https://develop.roblox.com/v1/gameUpdateNotifications/${gameInfo.universeId}">

            <div class="game-update-history-section-header">
                <span class="section-title">History</span>
                <span class="result-index"></span>
            </div>

            <table class="game-update-history-table">
                <colgroup>
                    <col class="col-date" />
                    <col class="col-sender" />
                    <col class="col-message" />
                </colgroup>
                    <colgroup class="col-group-stats">
                        <col class="col-vws" />
                        <col class="col-pr" />
                        <col class="col-ur" />
                    </colgroup>
                <thead>
                    <tr>
                        <th class="col-date">Date</th>
                        <th class="col-sender">Sender</th>
                        <th class="col-message">Message</th>
                            <th class="col-vws">
                                <span>Views</span>
                                <span class="tooltip-container" data-toggle="tooltip" title="Views: Number of people who have viewed the update.">
                                    <span class="icon-moreinfo-16x16"></span>
                                </span>
                            </th>
                            <th class="col-pr">
                                <span>Visit Rate</span>
                                <span class="tooltip-container" data-toggle="tooltip" title="Visit Rate: Percentage of people who visit the game from the notification.">
                                    <span class="icon-moreinfo-16x16"></span>
                                </span>
                            </th>
                            <th class="col-ur">
                                <span>Unfollow Rate</span>
                                <span class="tooltip-container" data-toggle="tooltip" title="Unfollow Rate: Percentage of people who unfollow the game from the notification.">
                                    <span class="icon-moreinfo-16x16"></span>
                                </span>
                            </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="history-row-template">
                        <td class='col-date'>{date}<br />{time}</td>
                        <td class='col-sender'><a class="text-link" {profile-url}><span>{sender}</span></a></td>
                        <td class='col-message'>{content}</td>
                            <td class='col-vws'>{vws}</td>
                            <td class='col-pr'>{pr}</td>
                            <td class='col-ur'>{ur}</td>
                    </tr>
                </tbody>
            </table>

            <div class="game-update-history-pager">
                <a class="pager-link pager-first"><span class="pager-link-icon"></span></a>
                <a class="pager-link pager-prev"><span class="pager-link-icon"></span></a>
                <span class="pager-index"></span>
                <a class="pager-link pager-next"><span class="pager-link-icon"></span></a>
                <a class="pager-link pager-last"><span class="pager-link-icon"></span></a>
            </div>
        </div>


        <div class="game-update-preview-container">
            <div class="game-update-preview-panel" data-game-name="${xss(gameInfo.name)}">
                <div class="preview-error">
                    <div class="filtered-error"><span class="icon-remove"></span>Your message was blocked by our filter. Please revise it and try again.</div>
                    <div class="truncated-warning"><span class="truncated-warning-icon"><span class="icon-warning-orange"></span></span>Your message will be truncated.</div>
                </div>

                <div class="device desktop playable">
                    <div class="device-name"><span>Desktop</span><span class="truncated-warning-icon"><span class="icon-warning-orange" /></span></div>
                    <div class="preview-box">
                        <div class="game-icon" data-retry-url="">
                            <img src="/rbxcdn/t5/4dbbac744c22857a41ed2534fa684710" />
                        </div>
                        <div class="play-button"><a class="btn-primary-xs">Play</a></div>
                        <div class="not-playable-message">(Not available on this device)</div>
                        <div class="preview-text">
                            <span class="game-name">${xss(gameInfo.name)}</span>: <span class="update-message"></span>
                        </div>
                        <div class="preview-date">May 4, 2018 | 4:15 PM</div>
                    </div>

                </div>
                <div class="device tablet playable">
                    <div class="device-name"><span>Tablet</span><span class="truncated-warning-icon"><span class="icon-warning-orange" /></span></div>
                    <div class="preview-box">
                        <div class="game-icon" data-retry-url="">
                            <img src="/rbxcdn/t5/4dbbac744c22857a41ed2534fa684710" />
                        </div>
                        <div class="more"><span class="icon-more-gray-vertical"></span></div>

                        <div class="not-playable-message">(Not available on this device)</div>
                        <div class="preview-text">
                            <span class="game-name">${xss(gameInfo.name)}</span>: <span class="update-message"></span>
                        </div>
                        <div class="preview-date">May 4, 2018 | 4:15 PM</div>
                    </div>
                </div>
                <div class="device phone playable">
                    <div class="device-name"><span>Phone</span><span class="truncated-warning-icon"><span class="icon-warning-orange" /></span></div>
                    <div class="preview-box">
                        <div class="game-icon" data-retry-url="">
                            <img src="/rbxcdn/t5/4dbbac744c22857a41ed2534fa684710" />
                        </div>
                        <div class="more"><span class="icon-more-gray-vertical"></span></div>
                        <div class="preview-text">
                            <span class="game-name">${xss(gameInfo.name)}</span>: <span class="update-message"></span>
                        </div>
                        <div class="preview-date">May 4, 2018 | 4:15 PM</div>

                        <div class="not-playable-message">(Not available on this device)</div>
                    </div>
                </div>
            </div>
        </div>


        <div class="game-update-send-confirm-container">
            <div class="filtered-confirm">
                <div><h3>Failed to send update</h3></div>
                <div class="filtered-error">
                    <span class="icon-remove"></span>Your message was blocked by our filter. Please revise it and try again. <a class="preview-link">Preview</a>
                </div>
            </div>
            <div class="send-confirm">
                <div><h3>Send update?</h3></div>
                <div class="confirm-message">You will not be able to send another update for a week.</div>
                <div class="truncated-warning"><span class="icon-warning-orange"></span>Your message will be truncated. <a class="preview-link">Preview</a></div>
            </div>
        </div>
    </div>

            </div>
    </div>
</div>

<div id="ProcessingView" style="display: none">

    <div class="ProcessingModalBody">
        <p class="processing-indicator"><img src='/rbxcdn/images/ec4e85b0c4396cf753a06fade0a8d8af.gif' alt="Saving the Game..."/>
        </p>
        <p class="processing-text">Saving the Game...</p>
    </div>
</div>

<script type="text/javascript">
    if (typeof Roblox === "undefined") {
        Roblox = {};
    }
    if (typeof Roblox.UniverseConfigurePage === "undefined") {
        Roblox.UniverseConfigurePage = {};
    }
</script>
                                <div style="clear: both"></div>
                            </div>
                        </div>
                    </div>
<!--Bootstrap Footer React Component -->

<footer class="container-footer" id="footer-container"
        data-is-giftcards-footer-enabled="True">
</footer>

                </div>
            </div>
        </div>
    </div>
</div>
    <div id="chat-container"
         class="chat chat-container light-theme gotham-font"
         chat-base>
    </div>



    <script type="text/javascript">function urchinTracker() {}</script>


<script type="text/javascript">
    if (typeof Roblox === "undefined") {
        Roblox = {};
    }
    if (typeof Roblox.PlaceLauncher === "undefined") {
        Roblox.PlaceLauncher = {};
    }
    var isRobloxIconEnabledForRetheme = "True";
    var robloxIcon = isRobloxIconEnabledForRetheme === 'True' ? "<span class='icon-logo-r-95'></span>" : "<img src='/rbxcdn/images/8e7879f99cfa7cc3b1fce74f8191be03.svg' width='90' height='90' alt='R'/>";
    Roblox.PlaceLauncher.Resources = {
        RefactorEnabled: "True",
        IsProtocolHandlerBaseUrlParamEnabled: "False",
        ProtocolHandlerAreYouInstalled: {
            play: {
                content: robloxIcon + "<p>You&#39;re moments away from getting into the game!</p>",
                buttonText: "Download and Install Roblox",
                footerContent: "<a href='https://assetgame.roblox.com/game/help'class= 'text-name small' target='_blank' >Click here for help</a> "
            },
            studio: {
                content: "<img src='/rbxcdn/images/f25e4cadae29ae9a57a962126b2d2e2a.png' width='95' height='95' alt='R' /><p>Get started creating your own games!</p>",
                buttonText: "Download Studio"
            }
        },
        ProtocolHandlerStartingDialog: {
            play: {
                content: robloxIcon + "<p>Roblox is now loading. Get ready!</p>"
            },
            studio: {
                content: "<img src='/rbxcdn/images/f25e4cadae29ae9a57a962126b2d2e2a.png' width='95' height='95' alt='R' /><p>Checking for Roblox Studio...</p>"
            },
            loader: "<span class='spinner spinner-default'></span>"
        }
    };
</script>
<div id="PlaceLauncherStatusPanel" style="display:none;width:300px"
     data-new-plugin-events-enabled="True"
     data-event-stream-for-plugin-enabled="True"
     data-event-stream-for-protocol-enabled="True"
     data-is-game-launch-interface-enabled="True"
     data-is-protocol-handler-launch-enabled="True"
     data-is-user-logged-in="True"
     data-os-name="Windows"
     data-protocol-name-for-client="roblox-player"
     data-protocol-name-for-studio="roblox-studio"
     data-protocol-roblox-locale="en_us"
     data-protocol-game-locale="en_us"
     data-protocol-url-includes-launchtime="true"
     data-protocol-detection-enabled="true"
     data-protocol-separate-script-parameters-enabled="true"
     data-protocol-avatar-parameter-enabled="true"
     data-protocol-channel-name="LIVE"
     data-protocol-studio-channel-name="LIVE"
     data-protocol-player-channel-name="LIVE">
    <div class="modalPopup blueAndWhite PlaceLauncherModal" style="min-height: 160px">
        <div id="Spinner" class="Spinner" style="padding:20px 0;">
            <img data-delaysrc="/rbxcdn/images/e998fb4c03e8c2e30792f2f3436e9416.gif" height="32" width="32" alt="Progress" />
        </div>
        <div id="status" style="min-height:40px;text-align:center;margin:5px 20px">
            <div id="Starting" class="PlaceLauncherStatus MadStatusStarting" style="display:block">
                Starting Roblox...
            </div>
            <div id="Waiting" class="PlaceLauncherStatus MadStatusField">Connecting to People...</div>
            <div id="StatusBackBuffer" class="PlaceLauncherStatus PlaceLauncherStatusBackBuffer MadStatusBackBuffer"></div>
        </div>
        <div style="text-align:center;margin-top:1em">
            <input type="button" class="Button CancelPlaceLauncherButton translate" value="Cancel" />
        </div>
    </div>
</div>
<div id="ProtocolHandlerClickAlwaysAllowed"
     class="ph-clickalwaysallowed"

     style="display:none;">
    <p class="larger-font-size">
        <span class="icon-moreinfo"></span>

                Check <strong>Remember my choice</strong> and click <strong>OK</strong> in the dialog box above to join games faster in the future!

    </p>
</div>

<script type="text/javascript">
function checkRobloxInstall() {
         return RobloxLaunch.CheckRobloxInstall('https://www.roblox.com/Download');
}
</script>


    <div id="InstallationInstructions" class="style2016" style="display:none;">
        <div class="ph-installinstructions">
            <div class="ph-modal-header">
                    <span class="icon-close-16x16 simplemodal-close"></span>
                    <h5 class="title">Thanks for visiting Roblox</h5>
            </div>
            <div class="modal-content-container">
                <div class="ph-installinstructions-body ">


        <ul class="modal-col-5">
            <li class="step1-of-5">
                <h2>1</h2>
                <p class="larger-font-size">Click <strong>Save File</strong> when the download window pops up</p>
                <img data-delaysrc="/rbxcdn/images/06b51c8849130f46e38bfa01f0e5c8d2.png" />
            </li>
            <li class="2-of-5">
                <h2>2</h2>
                <p class="larger-font-size">Go to Downloads and double click <strong>RobloxPlayer.exe</strong></p>
                <img data-delaysrc="/rbxcdn/images/62b8b3f6c856acd74ff7ea49dab56889.png" />
            </li>
            <li class="step3-of-5">
                <h2>3</h2>
                <p class="larger-font-size">Click <strong>Run</strong></p>
                <img data-delaysrc="/rbxcdn/images/aee74021bb3ba2a4956449b62cd35405.png" />
            </li>
            <li class="step4-of-5">
                <h2>4</h2>
                <p class="larger-font-size">Once installed, click <strong>Join</strong> to join the action!</p>
                <div class="VisitButton VisitButtonContinueGLI">
                    <a class="btn btn-primary-lg disabled btn-full-width">Join</a>
                </div>
            </li>
            <li class="step5-of-5">
                <h2>5</h2>
                <p class="larger-font-size">Click <strong>Ok</strong> when the alert pops up</p>
                <img data-delaysrc="/rbxcdn/images/9168d6c2974f4bd80e741b31257b4fc9.png" />
            </li>
        </ul>

                </div>
            </div>
            <div class="xsmall">
                The Roblox installer should download shortly. If it doesn’t, start the <a id="GameLaunchManualInstallLink" href="#" class="text-link">download now.</a>
 <script>
                       if (Roblox.ProtocolHandlerClientInterface && typeof Roblox.ProtocolHandlerClientInterface.attachManualDownloadToLink === 'function') {
                           Roblox.ProtocolHandlerClientInterface.attachManualDownloadToLink();
                       }
                   </script>
            </div>
        </div>
    </div>
    <div class="InstallInstructionsImage" data-modalwidth="970" style="display:none;"></div>


<div id="pluginObjDiv" style="height:1px;width:1px;visibility:hidden;position: absolute;top: 0;"></div>
<iframe id="downloadInstallerIFrame" name="downloadInstallerIFrame" style="visibility:hidden;height:0;width:1px;position:absolute"></iframe>

<script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='clientinstaller' type='text/javascript' src='/rbxcdn/js/459f4d69b0709806c7ee83714896739e.js'></script>

<script type="text/javascript">
    Roblox.Client._skip = null;
    Roblox.Client._CLSID = '76D50904-6780-4c8b-8986-1A7EE0B1716D';
    Roblox.Client._installHost = 'setup.roblox.com';
    Roblox.Client.ImplementsProxy = true;
    Roblox.Client._silentModeEnabled = true;
    Roblox.Client._bringAppToFrontEnabled = false;
    Roblox.Client._currentPluginVersion = '';
    Roblox.Client._eventStreamLoggingEnabled = true;


        Roblox.Client._installSuccess = function() {
            if(GoogleAnalyticsEvents){
                GoogleAnalyticsEvents.ViewVirtual('InstallSuccess');
                GoogleAnalyticsEvents.FireEvent(['Plugin','Install Success']);
                if (Roblox.Client._eventStreamLoggingEnabled && typeof Roblox.GamePlayEvents != "undefined") {
                    Roblox.GamePlayEvents.SendInstallSuccess(Roblox.Client._launchMode, play_placeId);
                }
            }
        }

    </script>


<div class="ConfirmationModal modalPopup unifiedModal smallModal" data-modal-handle="confirmation" style="display:none;">
    <a class="genericmodal-close ImageButton closeBtnCircle_20h"></a>
    <div class="Title"></div>
    <div class="GenericModalBody">
        <div class="TopBody">
            <div class="ImageContainer roblox-item-image" data-image-size="small" data-no-overlays data-no-click>
                <img class="GenericModalImage" alt="generic image" />
            </div>
            <div class="Message"></div>
        </div>
        <div class="ConfirmationModalButtonContainer GenericModalButtonContainer">
            <a href id="roblox-confirm-btn"><span></span></a>
            <a href id="roblox-decline-btn"><span></span></a>
        </div>
        <div class="ConfirmationModalFooter">

        </div>
    </div>
    <script type="text/javascript">
        Roblox = Roblox || {};
        Roblox.Resources = Roblox.Resources || {};

        Roblox.Resources.GenericConfirmation = {
            yes: "Yes",
            No: "No",
            Confirm: "Confirm",
            Cancel: "Cancel"
        };
    </script>
</div>






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
                <button type="button" class="btn-min-width btn-growth-xs push-notifications-prompt-accept">Notify Me</button>
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

    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='pageEnd' type='text/javascript' src='/rbxcdn/js/f1b2d9a81a55b977107f5ae361c1eb48.js'></script>

</body>
</html>
`), session);
};
