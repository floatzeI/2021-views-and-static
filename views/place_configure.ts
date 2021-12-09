import xss from 'xss';
import convertToSeoName from '../lib/convertToSeoName';
import formatView from '../lib/formatView';
import replacer from '../lib/replaceUrls';
import { IUserInfo } from '../middleware';
import { GameAccess } from '../models/Games';
import getTemplate from './partials/general-page-template';
import { headerCss } from './partials/header';
import systemAlert from './partials/systemAlert';
import * as model from '../models';
import moment from 'moment';

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



    <link rel="canonical" href="https://www.roblox.com/places/${gameInfo.placeId}/update" />

<link href="/rbxcdn/images/3b43a5c16ec359053fef735551716fc5.ico" rel="icon" />




<link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet'  href='/rbxcdn/static/css/MainCSS___0921edf3222ac7b5f224256c078ea1b1_m.css/fetch' />

    <link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="LegacyStyleGuide" data-bundle-source="Main" href="/rbxcdn/css/549b976e2d39abc487ceeba8044b42b8f35bc98f4087dd78aa3eff7a7f16eec7.css" />

    <link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="Thumbnails" data-bundle-source="Main" href="/rbxcdn/css/9517d686dc47015c200496d77e2b18146ee37652d18e25ecf9e1ed230310ea13.css" />


<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="VerificationUpsell" data-bundle-source="Main" href="/rbxcdn/css/4cfc9413aaac922000f010ba651f264e59a200d6062d41f8196017ade0094116.css" />

<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="Footer" data-bundle-source="Main" href="/rbxcdn/css/d5344f38053922e5936f0d7e2d3496ee4f83b46f0bb40d1d2c253b80ac82668e.css" />


    <link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="ConfigureWebApps" data-bundle-source="Main" href="/rbxcdn/css/08def520152a575438e73a81aa9a310c2415c327df7b624a24aa6e794d24dba3.css" />


<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="AccountSecurityPrompt" data-bundle-source="Main" href="/rbxcdn/css/9856228925f28fad6a7bdb2fd7f92be876ba970048ad6384195a735184161ce4.css" />

    <link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="RobuxIcon" data-bundle-source="Main" href="/rbxcdn/css/2f599b9e9ca20ee3c155684adbf1cdcb7220bab681b55b4505123a0c34e81969.css" />


<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="NotificationStream" data-bundle-source="Main" href="/rbxcdn/css/d1c36a57982296706964ac2b650ba2f3087c47056ba37ac02822dc0192ce7820.css" />


<link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet'  href='/rbxcdn/static/css/page___e9d8b2749afd64635aa799f1865e040a_m.css/fetch' />

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


<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="Footer" data-bundle-source="Main" src="/rbxcdn/js/310bda9a8ee2f36524a0c5e0e94c5f3801548431acdf617638feebf62eb1c5c2.js"></script>
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
        <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='page' type='text/javascript' src='/rbxcdn/js/84edbc831bd52ae63c9900645ce28746.js'></script>




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

    <meta name="csrf-token" data-token="wJPPUiF6hsfR" />

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
        <!-- Template bundle: page -->
<script type="text/javascript">
"use strict"; angular.module("pageTemplateApp", []).run(['$templateCache', function($templateCache) {

 }]);
</script>

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








<h1>Configure Place</h1>
<div class="boxed-body">
    <div id="navbar" class="divider-right" data-isBC="false">
        <div class="verticaltab selected" id="basicSettingsTab">
            <a href="#">Basic Settings</a>
        </div>
            <div class="verticaltab" id="iconsTab">
                <a href="#">Icon</a>
            </div>
        <div class="verticaltab" id="thumbnailTab">
            <a href="#">Thumbnails</a>
        </div>
        <div class="verticaltab" id="playerAccessTab">
            <a href="#">Access</a>
        </div>
        <div class="verticaltab" id="permissionsTab">
            <a href="#">Permissions</a>
        </div>
            <div class="verticaltab" id="versionHistoryTab">
                <a href="#">Version History</a>
            </div>
                    <div class="verticaltab" id="developerProductsTab">
                <a href="#">Developer Products</a>
            </div>
        <div class="verticaltab" id="universeTab">
            <a href="#">Games</a>
        </div>
    </div>
    <div id="content">
        <form method="post" id="placeForm" action="/places/${gameInfo.placeId}/update">

            <input name="__RequestVerificationToken" type="hidden" value="${csrf}" />
            <div id="basicSettings">
                <div class="validation-summary-valid" data-valmsg-summary="true"><ul><li style="display:none"></li>
</ul></div>
                <div class="headline">
    <h2>Basic Settings</h2>
</div>
<span id="userData" style="display: none;" data-name="${xss(session.username)}" data-place-number="7">{0}&#39;s Place Number: {1}</span>
<label class="form-label" for="Name">Name:</label>
<input autofocus="" class="text-box text-box-medium" data-val="true" data-val-regex="Illegal characters" data-val-regex-pattern="^[^&lt;>]+$" data-val-required="Name is required" id="Name" name="Name" type="text" value="${xss(gameInfo.name)}" />
<span id="nameRow"><span class="field-validation-valid" data-valmsg-for="Name" data-valmsg-replace="true"></span></span>

<label class="form-label" for="Description">Description:</label>
<div>
    <span>If you have built <a href="https://www.roblox.com/develop/premium-payout?ctx=gameDetail">Premium benefits</a> into your game, please list those benefits in the description.</span>
</div>
<textarea class="text-box text-area-medium" cols="80" id="Description" maxlength="1000" name="Description" rows="6">
${xss(gameInfo.description || '')}
</textarea>
<span class="field-validation-valid" data-valmsg-for="Description" data-valmsg-replace="true"></span>

    <div>
        <span class="icon-warning"></span>
        <span class="text-warning">
            Updating the start place's name or description will also apply to the game.
        </span>
    </div>

<label class="form-label" for="Genre">Genre:</label>
<select class="form-select no-margins" id="Genre" name="Genre">
${Object.getOwnPropertyNames(model.Asset.Genre).filter(v => isNaN(parseInt(v, 10))).map(v => {
		return `<option ${model.Asset.Genre[gameInfo.genre] === v ? 'selected="selected"' : ''}>${model.Asset.formatGenre(model.Asset.strToGenre(v))}</option>`;
	}).join('\n')}
</select>
<span class="field-validation-valid" data-valmsg-for="Genre" data-valmsg-replace="true"></span>

<input data-val="true" data-val-number="The field TemplateID must be a number." id="TemplateID" name="TemplateID" type="hidden" value="" />
            </div>
                <div id="icons" class="default-hidden">
                    <div class="headline">
    <h2>Icon</h2>
</div>
<div id="IconDisplayContainer" class="thumbnail-display-container icon-display-container" data-place-id="${gameInfo.placeId}" data-place-icon-id="0" data-remove-icon-url='/places/icons/remove-icon'>
    <div class="icon-thumbnail">
        <span>
		${gameInfo.icon ? `<img src='/images/thumbnails/${gameInfo.icon.content_url}.png' style="width: 100%; height: auto;"/>` : 'N/A'
		}
        </span>
        <span class="icon-note icon-special">Note: You can only have 1 icon per game.</span>
    </div>
</div>
<div id="IconPurchaseContainer" class="thumbnail-purchase-container icon-purchase-container">
    <div id="UploadStatus" class="error-message" style="width: 207px; margin-bottom: 10px" ></div>
    <h3 class="add-media-title">Change the Icon</h3>
    <fieldset id="mediaTypeSelection">
        <label for="iconType" class="form-label">Media type:</label>
        <label class="radio-selection">
            <input type="radio" name="iconType" id="imageIcon" checked="checked" value="image"/>
            <span class="checkboxListItem">Image</span>
        </label>
        <label class="radio-selection">
            <input type="radio" name="iconType" id="autogenerated" value="autogenerated"/>
            <span class="checkboxListItem">Auto generated Image </span>
        </label>
    </fieldset>

    <div id="ImageUpload">
        <fieldset>
            <label for="iconImageFile" class="form-label" >Select image:</label>
            <input type="file" id="iconImageFile" accept="image/*" name="iconImageFile"/>
        </fieldset>
        <a  data-form-post-url="/places/icons/add-icon" class="btn-small btn-neutral add-image-button" id="addIconButton">Upload Image</a>
        <div class="clear"></div>
        <span class="icon-note icon-special">Icon must be square.</span>
    </div>
    <div id="autogenerate">
        <fieldset>
            <span ><img class='MainIcon' src='/img/placeholder.png' style="width:100%;height:auto;"/></span>
        </fieldset>
        <div id="generatedImageUploadButton">
            <a  data-form-post-url="/places/icons/add-generated-image" class="btn-small btn-neutral add-generated-image-button" id="addGeneratedIconImageButton">Set Icon</a>
        </div>
    </div>
    <img id="LoadingImage" class="add-image-button default-hidden" src='/rbxcdn/images/ec4e85b0c4396cf753a06fade0a8d8af.gif' alt="Updating place..." />
    <div class="game-icon-message">
        <h3>
            New to making icons? Check out the <a href="https://developer.roblox.com/articles/game-metadata">Icon Tutorial</a>.
        </h3>
    </div>
</div>
<div class="clear"></div>

<script type="text/javascript">
    Roblox.Resources.Icons = {
        AddtitleText: "Add Icon",
        AddbodyContent: "Are you sure you want to add this icon? This will delete your existing icon.",
        AddacceptText: "Upload Now",
        CancelText: "Cancel",
        DeletetitleText: "Delete Icon",
        DeletebodyContent: "Are you sure you want to permanently delete this icon?",
        DeleteText: "Delete",
        ErrorText: "An unknown error occurred.",
        EmptyText: "Please choose a file.",
        AddGeneratedThumbTitleText: "Auto Generated Icon",
        AddGeneratedThumbBodyText: "This icon will be moderated. Are you sure you want to submit this icon?",
        AddGeneratedThumbAcceptText: "Submit",
        AddGeneratedThumbCancelText: "Cancel"
    };

    $(function() {
        Roblox.Icons.Init();
    });
</script>

                </div>
            <div id="thumbnails" class="default-hidden">
                <div class="headline">
    <h2>Thumbnails</h2>
</div>
<div id="ThumbnailDisplayContainer" class="thumbnail-display-container" data-place-id="${gameInfo.placeId}" data-remove-url='/thumbnail/remove-asset-media'>
        <div id="ItemThumbnail" style="height: 230px; width: 420px;">
            <div id="bigGalleryThumbItem" style="position: absolute">
<a href="" class="MainThumbnail" ><img  class='' src='/rbxcdn/t2/8bf7c2d866a7bbd3bb2ee60dc01bfc78'/></a>            </div>
        </div>
        <div id="remove-thumbnail-error"></div>
        <div id="divSmallGalleryItemBox">
            <div id="divSmallGalleryScrollContainer">
                    <div class='divSmallGalleryItem' data-place-media-item-id="46577291">
                        <a data-remove-url='/thumbnail/remove-asset-media' data-thumbnailid="46577291" class="ImageButton closeBtnCircle_35h RemoveYouTubeGalleryImage">
                        </a>
                        <div class="smallGalleryThumbItem">
<a href="" class="" ><img  class='small-image-item' src='/rbxcdn/t2/8bf7c2d866a7bbd3bb2ee60dc01bfc78'/></a>                        </div>
                        <div class="youTubeVideoOverlay"></div>
                    </div>
                <input type="hidden" name="thumbnailid" value="" />
            </div>
        </div>
</div>
<div id="ThumbnailPurchaseContainer" class="thumbnail-purchase-container">
    <div class="add-media-title"><h3>Add a New Thumbnail</h3></div>
    <fieldset id="allowedGenre">
        <label for="thumbnailType" class="form-label">Media type:</label>
        <label class="radio-selection">
                <input type="radio" name="thumbnailType" id="imageThumbnail" checked="checked" value="image" />
                <span class="checkboxListItem">Image (Free)</span>
        </label>
            <label class="radio-selection">
                <input type="radio" name="thumbnailType" id="youtubeThumbnail" value="youtube" data-cost-in-robux="500"/>
                <span class="checkboxListItem">
                    Video (
                    <span class="icon-robux-16x16"></span>
                    <span>
                        500
                    </span>)
                </span>
            </label>
                    <label class="radio-selection">
                <input type="radio" name="thumbnailType" id="autogenerated" value="autogenerated" />
                <span class="checkboxListItem">Auto generated Image (Free) </span>
            </label>
    </fieldset>
    <div id="ImageUpload">
        <fieldset>
            <label for="thumbnailImageFile" class="form-label" style="width:150px;">Select image:</label>
            <input type="file" accept="image/*" id="thumbnailImageFile" name="thumbnailImageFile" />
        </fieldset>
        <div class="field-validation-valid"></div>

        <a  data-form-post-url="/places/thumbnails/add-image" class="btn-small btn-disabled-neutral add-image-button" id="addImageButton" disabled>Upload Image</a>
    </div>
        <div id="VideoUpload" style="display: none">
            <fieldset>
                <label for="txtYouTubeVideoUrl" class="form-label" style="width:150px;">
                    YouTube URL:
                    <a href="https://roblox.zendesk.com/entries/21153041-video-advertisment-policy" class="tooltip" target="_blank" style="position:relative; left:5px;">
                        <img class="TipsyImg" title="Click here to learn more." height="13" width="12" src="/rbxcdn/images/65cb6e4009a00247ca02800047aafb87.png" alt="Click here to learn more." />

                    </a>
                </label>
                <input type="text" name="ThumbnailYoutubeUrl" id="txtYouTubeVideoUrl" class="text-box text-box-medium" style="width:242px;" />
            </fieldset>

            <a  data-form-post-url="/places/thumbnails/add-video" class="btn-small btn-disabled-neutral" id="addVideoButton" disabled>Add Video</a>
            <div class="moderation-note">Videos will not be displayed on the Game page until they have been reviewed by moderation.</div>
        </div>
            <div id="autogenerate" style="display: none">
            <fieldset>
                <span ><img  class='MainThumbnail' src='/img/placeholder.png'/></span>
            </fieldset>
            <div id="generatedImageUploadButton">
                <a  data-form-post-url="/places/thumbnails/add-generated-image" class="btn-small btn-neutral add-generated-image-button" id="addGeneratedImageButton">Set Thumbnail</a>
            </div>
        </div>
    <img id="LoadingImage" class="add-image-button" style="display: none" src='/rbxcdn/images/ec4e85b0c4396cf753a06fade0a8d8af.gif' alt="Updating place..." />
</div>
<div class="clear"></div>
<script type="text/javascript">
    //Todo: Place Media Stuff cleanup. Putitng this in a JS file breaks it.
    var autotransition = false;
    var muted = true;

    function autotransitionNext() {
        if (!autotransition)
            return;

        var next = $('.SelectedYouTubeGalleryIcon').next();
        if (next.length > 0)
            transitionGallery(next);
    }

    function transitionGallery(divSmallGalleryItem) {
        var thisItem = $(divSmallGalleryItem).find('.smallGalleryThumbItem');
        var youTubeVideoItem = thisItem.find('.divYouTubeVideoPlayer');
        if (youTubeVideoItem.length != 0) {
            thisItem = $(youTubeVideoItem.children()[0].cloneNode(true)); //jQuery has an issue with IE9 and .clone() for objects - $(youTubeVideoItem.children()[0]).clone();
            if (thisItem.is("object") || thisItem.is("iframe")) {
                thisItem.height('230');
                thisItem.attr('Height', '230px'); // Iframes need height and width?
                thisItem.width('420');
                thisItem.attr('Width', '420px');
                var video = RobloxYouTubeVideoManager.GetVideo(thisItem.attr('id'));
                video.Muted = muted;
                video.Autoplay = true;
            }
        } else {
            var assetImageChild = thisItem.find('img')[0]; // Asset Image
            thisItem = $(assetImageChild).clone();
            thisItem.height('230');
            thisItem.width('420');
            setTimeout(function() { autotransitionNext(); }, 5000);
        }

        // Clear our any existing transitions incase they're going fast through them.
        $('#divTransitionLargeGalleryItem').remove();
        $('#ItemThumbnail').append("<div id='divTransitionLargeGalleryItem' style='display: none; position: absolute;'>");
        $('#divTransitionLargeGalleryItem').append(thisItem);
        $('#divTransitionLargeGalleryItem').fadeIn('slow', function() {
        });
        $('#bigGalleryThumbItem').fadeOut('slow', function() {
            $('#divTransitionLargeGalleryItem').attr('id', 'bigGalleryThumbItem');
            $(this).remove();
        });
        $('.divSmallGalleryItem').removeClass('SelectedYouTubeGalleryIcon');
        $(divSmallGalleryItem).addClass('SelectedYouTubeGalleryIcon');
    }

    function initYoutubeVideo(ranPlayerId, videoId, width, height) {

        function videoStateChange(newState, playerId, videoObject) {
            if (newState == RobloxYouTube.Events.States.Ended) {
                muted = videoObject.Player().isMuted();
            }
        }

        var ytPlayerId = ranPlayerId;
        var video = RobloxYouTubeVideoManager.AddVideo(new RobloxYouTubeVideo(ytPlayerId, videoStateChange));
        var youTubeVideoId = videoId;
        var divToFillId = ranPlayerId;
        var chromeless = false;
        var autoplay = false;
        video.Init(youTubeVideoId, chromeless, divToFillId, width, height, autoplay);
    }

    $('.youTubeVideoOverlay').click(function() {
        muted = false;
        transitionGallery($(this).parent());
    });

    $("#divSmallGalleryScrollContainer").width('130');

    $("#divSmallGalleryScrollContainer").sortable({
            update: function() { UpdateSort(); }
        }
    );

    function UpdateSort() {
        var isPlaceAsset = true;
        var sortOrder = [];
        $('.divSmallGalleryItem').each(function(i) {
            var itemId = $(this).data('place-media-item-id');
            sortOrder[i] = itemId;
        });
        var sortOrderString = '';
        for (key in sortOrder) {
            sortOrderString += sortOrder[key] + ',';
        }

        if (isPlaceAsset) {
            $.getJSON("/Thumbs/AssetMedia/PlaceMediaItemSortHandler.ashx",
                { "sort": sortOrderString }
            );
        } else {
            $.post("/thumbnail/set-asset-media-sort-order",
                { "sort": sortOrderString }
            );
        }
    }

    $(function() {
        if (typeof Roblox === "undefined") {
            Roblox = {};
        }
        if (typeof Roblox.IDE === "undefined") {
            Roblox.IDE = {};
        }
        if (typeof Roblox.IDE.Resources === "undefined") {
            Roblox.IDE.Resources = {};
        }
        $.extend(Roblox.IDE.Resources, {
            DeletetitleText: "Delete Thumbnail",
            DeletebodyContent: "Are you sure you want to permanently delete this thumbnail?",
            DeleteText: "Delete",
            AddtitleText: "Add Thumbnail",
            AddbodyContent: "Are you sure you want to buy this thumbnail for ",
            AddacceptText: "Buy Now",
            CancelText: "Cancel",
            AddGeneratedThumbTitleText: "Auto Generated Thumbnail",
            AddGeneratedThumbBodyText: "This thumbnail will be moderated. Are you sure you want to submit this thumbnail?",
            AddGeneratedThumbAcceptText: "Submit",
            AddGeneratedThumbCancelText: "Cancel"
        });
        Roblox.IDE.Thumbnails.init();
    });
</script>
            </div>
            <div id="playerAccess" class="default-hidden">


<div class="headline">
    <h2>Access</h2>
</div>
<script type="text/javascript">

    var Roblox = Roblox || {};
    Roblox.AccessData = {"isDevelopSiteForVipServersEnabled":true,"vipServerConfigurationLink":"https://develop.roblox.com/v1/universes/${gameInfo.universeId}/configuration/vip-servers"};
</script>

<!-- Checkbox list needs custom extensions in the current version of mvc. -->
    <div class="deviceTypeSection" data-console-agreement-enabled="True" style="display: none;">
        <label class="form-label" for="DeviceSectionHeader">Playable devices:</label>
            <label class="checkboxListItem" data-device="Computer">
                <input checked="checked" data-val="true" data-val-required="The Selected field is required." id="PlayableDevices_0__Selected" name="PlayableDevices[0].Selected" type="checkbox" value="true" /><input name="PlayableDevices[0].Selected" type="hidden" value="false" />
                <input data-val="true" data-val-required="The DeviceType field is required." id="PlayableDevices_0__DeviceType" name="PlayableDevices[0].DeviceType" type="hidden" value="Computer" />
                Computer
            </label>
            <label class="checkboxListItem" data-device="Phone">
                <input checked="checked" data-val="true" data-val-required="The Selected field is required." id="PlayableDevices_1__Selected" name="PlayableDevices[1].Selected" type="checkbox" value="true" /><input name="PlayableDevices[1].Selected" type="hidden" value="false" />
                <input data-val="true" data-val-required="The DeviceType field is required." id="PlayableDevices_1__DeviceType" name="PlayableDevices[1].DeviceType" type="hidden" value="Phone" />
                Phone
            </label>
            <label class="checkboxListItem" data-device="Tablet">
                <input checked="checked" data-val="true" data-val-required="The Selected field is required." id="PlayableDevices_2__Selected" name="PlayableDevices[2].Selected" type="checkbox" value="true" /><input name="PlayableDevices[2].Selected" type="hidden" value="false" />
                <input data-val="true" data-val-required="The DeviceType field is required." id="PlayableDevices_2__DeviceType" name="PlayableDevices[2].DeviceType" type="hidden" value="Tablet" />
                Tablet
            </label>
            <label class="checkboxListItem" data-device="Console">
                <input data-val="true" data-val-required="The Selected field is required." id="PlayableDevices_3__Selected" name="PlayableDevices[3].Selected" type="checkbox" value="true" /><input name="PlayableDevices[3].Selected" type="hidden" value="false" />
                <input data-val="true" data-val-required="The DeviceType field is required." id="PlayableDevices_3__DeviceType" name="PlayableDevices[3].DeviceType" type="hidden" value="Console" />
                Console
            </label>
        <div id="device-type-error" class="error-message">You must select one or more playable devices.</div>
    </div>

    <div id="SellGameAccess" class="sellgameaccess" data-minprice="25" data-maxprice="1000" data-commisionrate="0.3" data-bcsellrequirementmet="true" data-is-seller-banned="False">
        <label class="form-label" for="SellGameAccessSectionHeader">Game Access:</label>
        <label id="SellGameAccessLabel" class="checkboxListItem" style="display: none;">
            <input data-val="true" data-val-required="The Sell Game Access: field is required." id="SellGameAccessCheckbox" name="SellGameAccess" type="checkbox" value="true" /><input name="SellGameAccess" type="hidden" value="false" />
            <span>Sell access to this game</span>
            <img class="TipsyImg tooltip-bottom h2-tooltip sell-access-tooltip" src="/rbxcdn/images/65cb6e4009a00247ca02800047aafb87.png" data-toggle="tooltip" alt="To sell access to this place, first you must disable private servers and ensure &#39;Access&#39; is set to &#39;Everyone&#39;." title="To sell access to this place, first you must disable private servers and ensure &#39;Access&#39; is set to &#39;Everyone&#39;."/>
        </label>
        <div style="clear: both"></div>
        <div id="PricingPanel" style="display: none">
            <div class="top-pricing pricingrow">
                <div class="pricinglabel">Price:</div>
                <div class="toppricingfield">
                        <span class="icon-robux-16x16">&nbsp;</span><span class="robuxspan"><input class="TextBox priceinput" data-val="true" data-val-number="The field Price must be a number." data-val-required="The Price field is required." id="PriceInput" name="Price" type="text" value="0" /></span>
                    <span class="perpurchase">Per Purchase</span>
                </div>
                <span id="PricingError" class="status-error priceerror" style="display:none;">
                    The minimum price for this item is
                    <span class="icon-robux-16x16"></span><span>25</span>
                </span>
                <span id="PricingErrorMax" class="status-error priceerror" style="display:none;">
                    The maximum price for this item is
                    <span class="icon-robux-16x16"></span><span>1000</span>
                </span>
                <div style="clear: both"></div>
            </div>
            <div class="marketplace-fee pricingrow">
                <div class="pricinglabel">
                    Marketplace Fee <img class="h2-tooltip private-server-tooltip" src="/rbxcdn/images/65cb6e4009a00247ca02800047aafb87.png" data-toggle="tooltip" data-toggle-mobile="true" data-original-title="30% - minimum 1" />:<br />
                </div>
                <div class="pricingfield">
                    <span class="icon-robux-16x16"></span><span id="MarketPlaceFee"></span><span class="perpurchase">Per Purchase</span>
                </div>
                <div style="clear: both"></div>
            </div>
            <div class="profit pricingrow">
                <div class="pricinglabel">You Earn:</div>
                <div class="pricingfield">
                    <span class="icon-robux-16x16"></span><span id="Profit"></span><span class="perpurchase">Per Purchase</span>
                </div>
                <div style="clear: both"></div>
            </div>
        </div>
    </div>
<div id="NumPlayers">
    <div class="access-label">
        <label class="form-label" for="NumberOfPlayersMax">Maximum Visitor Count:</label>
    </div>
<select class="form-select" data-val="true" data-val-number="The field Maximum Visitor Count: must be a number." data-val-required="The Maximum Visitor Count: field is required." id="MaxPlayersInput" name="NumberOfPlayersMax">${[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map(v => {
			return `<option${v === gameInfo.maxPlayerCount ? ' selected="selected"' : ''}>${v}</option>`;
		}).join('\n')}
</select>    <img class="TipsyImg tooltip-bottom h2-tooltip number-of-players-max-tooltip" src="/rbxcdn/images/65cb6e4009a00247ca02800047aafb87.png" data-toggle="tooltip" title="The maximum number of people allowed in one instance of the game." />
    <span class="field-validation-valid" data-valmsg-for="NumberOfPlayersMax" data-valmsg-replace="true"></span>

        <div class="access-label">
            <label class="form-label" for="SocialSlotType">Server Fill:</label>
        </div>
        <div class="formRadio" id="FriendSlotRadioButtons">
            <label class="checkboxListItem"> <input checked="checked" data-val="true" data-val-required="The Server Fill: field is required." id="AutomaticFriendSlots" name="SocialSlotType" type="radio" value="Automatic" /> <span class="checkboxListItem">Roblox optimizes server fill for me</span> <img class="TipsyImg tooltip-bottom h2-tooltip" src="/rbxcdn/images/65cb6e4009a00247ca02800047aafb87.png" data-toggle="tooltip" title="Roblox will fill your server to optimize for the best social game." /> </label>
            <label class="checkboxListItem"> <input id="EmptyFriendSlots" name="SocialSlotType" type="radio" value="Empty" /> <span class="checkboxListItem">Fill each server as full as possible</span></label>
            <div id="EmptyFriendSlotError" hidden="hidden">
                <p class="status-error" id="FriendSlotWarning">Choosing this option will cause you to lose out on engagement time and Robux earned.</p>
            </div>
            <label class="checkboxListItem"> <input id="CustomFriendSlots" name="SocialSlotType" type="radio" value="Custom" /> <span class="checkboxListItem">Customize how many server slots to reserve</span> <img class="TipsyImg tooltip-bottom h2-tooltip" src="/rbxcdn/images/65cb6e4009a00247ca02800047aafb87.png" data-toggle="tooltip" title="Friends are more likely to join people in your game if you reserve more slots." /> </label>
            <div id="CustomFriendSlotDropdown" style="margin-left:3%" hidden="hidden">
<select class="form-select" data-val="true" data-val-number="The field NumberOfCustomSocialSlots must be a number." data-val-required="The NumberOfCustomSocialSlots field is required." id="FriendSlotsInput" name="NumberOfCustomSocialSlots"><option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>6</option>
<option>7</option>
<option>8</option>
<option>9</option>
<option selected="selected">10</option>
<option>11</option>
<option>12</option>
<option>13</option>
<option>14</option>
<option>15</option>
<option>16</option>
<option>17</option>
<option>18</option>
<option>19</option>
<option>20</option>
<option>21</option>
<option>22</option>
<option>23</option>
<option>24</option>
<option>25</option>
<option>26</option>
<option>27</option>
<option>28</option>
<option>29</option>
<option>30</option>
<option>31</option>
<option>32</option>
<option>33</option>
<option>34</option>
<option>35</option>
<option>36</option>
<option>37</option>
<option>38</option>
<option>39</option>
<option>40</option>
<option>41</option>
<option>42</option>
<option>43</option>
<option>44</option>
<option>45</option>
<option>46</option>
<option>47</option>
<option>48</option>
<option>49</option>
</select>            </div>
            <span class="field-validation-valid" data-valmsg-for="SocialSlotType" data-valmsg-replace="true"></span>
        </div>
</div>

<br />

<div id="GamePlaceAccess">
    <label class="form-label" for="Access">Access:</label>
    <select class="form-select" id="Access" name="Access"><option selected="selected">Everyone</option>
<option>Friends</option>
</select>
    <img class="TipsyImg tooltip-bottom h2-tooltip place-access-tooltip" src="/rbxcdn/images/65cb6e4009a00247ca02800047aafb87.png" data-toggle="tooltip" alt="To restrict who may access this place, first you must disable private servers and not sell game access." title="To restrict who may access this place, first you must disable private servers and not sell game access." />
    <span class="field-validation-valid" data-valmsg-for="Access" data-valmsg-replace="true"></span>
</div>
    <div id="PrivateServersAccess" class="privateserversaccess">
        <label class="form-label" for="ArePrivateServersAllowed">Private Servers:</label>
        <label id="PrivateServerAccessLabel" class="checkboxListItem">
            <input data-val="true" data-val-required="The ArePrivateServersAllowed field is required." id="AllowPrivateServersCheckbox" name="ArePrivateServersAllowed" type="checkbox" value="true" /><input name="ArePrivateServersAllowed" type="hidden" value="false" />
            <span>
                Allow Private Servers                     <a href="https://developer.roblox.com/en-us/articles/Creating-a-VIP-Server-on-Roblox" target="_blank">
                        <img class="h2-tooltip private-server-tooltip" src="/rbxcdn/images/65cb6e4009a00247ca02800047aafb87.png" alt="Click here to learn about private servers" data-toggle="tooltip" title="Click here to learn about private servers" />
                    </a>
            </span>
        </label>
        <div id="PrivateServerDetails">
            <div id="ActivePrivateServersCount">There are currently 0 private servers active for this place. Disabling private servers will disable all of these private servers.</div>
                <div id="PrivateServerDetailsError" class="status-error">Unable to load private server subscriptions.</div>
                <div id="ActivePrivateServersSubscriptions">
                    <img src="/rbxcdn/images/e0802687d8357fbc484a75914e4447dc.gif" alt="Loading private server subscriptions...">
                    Loading private server subscriptions...
                </div>
            <div class="formRadio" id="PrivateServerRadioButtons">
                <label class="checkboxListItem"> <input data-val="true" data-val-required="The IsFreePrivateServer field is required." id="FreePrivateServers" name="IsFreePrivateServer" type="radio" value="True" /> <span class="checkboxListItem">Free</span></label>
                <label class="checkboxListItem"> <input checked="checked" id="PaidPrivateServers" name="IsFreePrivateServer" type="radio" value="False" /> <span class="checkboxListItem">Paid</span></label>
            </div>
            <div id="PrivateServerPriceContainer" data-minprice="10" data-defaultprice="100" data-taxrate="0.3" style="display:none;">
                <div id="PrivateServerPrice" class="pricingrow">
                    <div class="pricinglabel">Price:</div>
                    <div class="toppricingfield">
                        <span class="icon-robux-16x16"></span><input class="TextBox priceinput" data-val="true" data-val-number="The field Price: must be a number." data-val-required="The Price: field is required." id="PrivateServerPriceInput" name="PrivateServersPrice" type="text" value="100" />
                    </div>
                    <span id="PrivateServerPricingError" class="status-error priceerror">
                        The minimum price for this item is
                        <span class="icon-robux-16x16"></span><span>10</span>
                    </span>
                    <div style="clear: both"></div>
                </div>
                <div id="PrivateServerMarketplaceFee" class="pricingrow">
                    <div class="pricinglabel">
                        Marketplace Fee <img class="h2-tooltip private-server-tooltip" src="/rbxcdn/images/65cb6e4009a00247ca02800047aafb87.png" data-toggle="tooltip" data-toggle-mobile="true" data-original-title="30% - minimum 1" />:<br />

                    </div>
                    <div class="pricingfield">
                        <span class="icon-robux-16x16"></span><span id="PrivateServerMarketplaceFeeText"></span>
                    </div>
                    <div style="clear: both"></div>
                </div>
                <div id="PrivateServerUserProfit" class="pricingrow">
                    <div class="pricinglabel">You Earn:</div>
                    <div class="pricingfield">
                        <span class="icon-robux-16x16"></span><span id="PrivateServerUserProfitText"></span>
                    </div>
                    <div style="clear: both"></div>
                </div>
            </div>
            <div id="PrivateServerPriceChangeWarning" class="status-error">Warning: Changing the price of private servers will cancel all existing subscriptions.</div>
        </div>
        <div id="PrivateServersError" class="status-error">To create a private server for this game, you must first allow access to Everyone, and you must disable Paid Access.</div>
    </div>
<div style="clear:both;"></div>
<script type="text/javascript">
    Roblox.PlayerAccess.strings = {
        PayToPlayBCOnlyBodyContent: "Pay to Play places are a premium feature only available to users with None.",
        PayToPlayBCOnlyAcceptText: "Upgrade Now",
        PayToPlayBCOnlyDeclineText: "Cancel",
        SellingSuspendedTitleText: "Selling Suspended",
        SellingSuspendedBodyContent: "Your account has had the privilege of selling paid access to any of your places on Roblox suspended.",
        OKText: "OK",
        UsernameDoesNotExist: "That username does not exist.",
        UserAlreadyAdded: "You've already added that username.",
        UserLimitReached: "You've reached the user name limit.",
        SearchingFor: "Searching for ",
        InviteList: "Invite List",
        SellingSuspendedTitleText: "Selling Suspended",
        SellingSuspendedBodyContent: "Your account has had the privilege of selling paid access to any of your places on Roblox suspended.",
        OKText: "OK",

        ConsoleAccessContentAgreementTitleText: "Content Agreement",
        ConsoleAccessContentAgreementBodyContent: "<div style='width: 350px; margin-left: 25px;'>Do you agree that your game is controller compatible and contains NONE of the following? <ul style='text-align: left; margin-left: 110px; padding: 0;'><li style='list-style: disc;'>Blood or Gore</li> <li style='list-style: disc;'>Intense Violence</li> <li style='list-style: disc;'>Strong Language (Swearing)</li> <li style='list-style: disc;'>Robux Gambling</li> <li style='list-style: disc;'>Drug Reference or Use</li> <li style='list-style: disc;'>In-Game Messaging (Text Chat)</li> </ul> </div>",
        ConsoleAccessContentAgreementAcceptText: "AGREE",
        ConsoleAccessContentAgreementDeclineText: "DISAGREE"
    };
    Roblox.PlayerAccess.AlertImageUrl = '/rbxcdn/images/cbb24e0c0f1fb97381a065bd1e056fcb.png';
    Roblox.PlayerAccess.tailLeftImage = '/rbxcdn/images/77c4414271016f8257c136305b7888b4.png';
</script>

            </div>
            <div id="permissions" class="default-hidden">

<div class="headline">
    <h2>Gear Permissions</h2>
    <img class="TipsyImg tooltip-bottom h2-tooltip" data-toggle="tooltip" title="The type of gear allowed in your game. By default the same genre of gear is allowed as the genre of the game." height="13" width="12" src="/rbxcdn/images/65cb6e4009a00247ca02800047aafb87.png" alt="The type of gear allowed in your game. By default the same genre of gear is allowed as the genre of the game." />
</div>
<label class="form-label radio-button-label" for="IsAllGenresAllowed">Allowed Genre:</label>
<label class="radio-selection">
    <input checked="checked" data-val="true" data-val-required="The Allowed Genre: field is required." id="IsAllGenresAllowed" name="IsAllGenresAllowed" type="radio" value="False" />
    <span class="checkboxListItem">Game genre (<span id="advancedsettings_genre">All</span>)</span>
</label>
<label class="radio-selection-last">
    <input id="IsAllGenresAllowed" name="IsAllGenresAllowed" type="radio" value="True" /><span class="checkboxListItem">All genres</span>
</label>
<span class="field-validation-valid" data-valmsg-for="IsAllGenresAllowed" data-valmsg-replace="true"></span>

<label class="form-label check-box-label">Gear types:</label>
<ul id="gearTypes">
<li class="gearCheckbox">
    <label class="checkboxListItem"><input data-val="true" data-val-required="The IsSelected field is required." id="AllowedGearTypes_0__IsSelected" name="AllowedGearTypes[0].IsSelected" type="checkbox" value="true" /><input name="AllowedGearTypes[0].IsSelected" type="hidden" value="false" /> Melee</label>
    <input id="AllowedGearTypes_0__GearTypeDisplayName" name="AllowedGearTypes[0].GearTypeDisplayName" type="hidden" value="Melee" />
    <input id="AllowedGearTypes_0__EncodedBitMask" name="AllowedGearTypes[0].EncodedBitMask" type="hidden" value="1" />
</li><li class="gearCheckbox">
    <label class="checkboxListItem"><input data-val="true" data-val-required="The IsSelected field is required." id="AllowedGearTypes_1__IsSelected" name="AllowedGearTypes[1].IsSelected" type="checkbox" value="true" /><input name="AllowedGearTypes[1].IsSelected" type="hidden" value="false" /> Power ups</label>
    <input id="AllowedGearTypes_1__GearTypeDisplayName" name="AllowedGearTypes[1].GearTypeDisplayName" type="hidden" value="Power ups" />
    <input id="AllowedGearTypes_1__EncodedBitMask" name="AllowedGearTypes[1].EncodedBitMask" type="hidden" value="8" />
</li><li class="gearCheckbox">
    <label class="checkboxListItem"><input data-val="true" data-val-required="The IsSelected field is required." id="AllowedGearTypes_2__IsSelected" name="AllowedGearTypes[2].IsSelected" type="checkbox" value="true" /><input name="AllowedGearTypes[2].IsSelected" type="hidden" value="false" /> Ranged</label>
    <input id="AllowedGearTypes_2__GearTypeDisplayName" name="AllowedGearTypes[2].GearTypeDisplayName" type="hidden" value="Ranged" />
    <input id="AllowedGearTypes_2__EncodedBitMask" name="AllowedGearTypes[2].EncodedBitMask" type="hidden" value="2" />
</li><li class="gearCheckbox">
    <label class="checkboxListItem"><input data-val="true" data-val-required="The IsSelected field is required." id="AllowedGearTypes_3__IsSelected" name="AllowedGearTypes[3].IsSelected" type="checkbox" value="true" /><input name="AllowedGearTypes[3].IsSelected" type="hidden" value="false" /> Navigation</label>
    <input id="AllowedGearTypes_3__GearTypeDisplayName" name="AllowedGearTypes[3].GearTypeDisplayName" type="hidden" value="Navigation" />
    <input id="AllowedGearTypes_3__EncodedBitMask" name="AllowedGearTypes[3].EncodedBitMask" type="hidden" value="16" />
</li><li class="gearCheckbox">
    <label class="checkboxListItem"><input data-val="true" data-val-required="The IsSelected field is required." id="AllowedGearTypes_4__IsSelected" name="AllowedGearTypes[4].IsSelected" type="checkbox" value="true" /><input name="AllowedGearTypes[4].IsSelected" type="hidden" value="false" /> Explosives</label>
    <input id="AllowedGearTypes_4__GearTypeDisplayName" name="AllowedGearTypes[4].GearTypeDisplayName" type="hidden" value="Explosives" />
    <input id="AllowedGearTypes_4__EncodedBitMask" name="AllowedGearTypes[4].EncodedBitMask" type="hidden" value="4" />
</li><li class="gearCheckbox">
    <label class="checkboxListItem"><input data-val="true" data-val-required="The IsSelected field is required." id="AllowedGearTypes_5__IsSelected" name="AllowedGearTypes[5].IsSelected" type="checkbox" value="true" /><input name="AllowedGearTypes[5].IsSelected" type="hidden" value="false" /> Musical</label>
    <input id="AllowedGearTypes_5__GearTypeDisplayName" name="AllowedGearTypes[5].GearTypeDisplayName" type="hidden" value="Musical" />
    <input id="AllowedGearTypes_5__EncodedBitMask" name="AllowedGearTypes[5].EncodedBitMask" type="hidden" value="32" />
</li><li class="gearCheckbox">
    <label class="checkboxListItem"><input data-val="true" data-val-required="The IsSelected field is required." id="AllowedGearTypes_6__IsSelected" name="AllowedGearTypes[6].IsSelected" type="checkbox" value="true" /><input name="AllowedGearTypes[6].IsSelected" type="hidden" value="false" /> Social</label>
    <input id="AllowedGearTypes_6__GearTypeDisplayName" name="AllowedGearTypes[6].GearTypeDisplayName" type="hidden" value="Social" />
    <input id="AllowedGearTypes_6__EncodedBitMask" name="AllowedGearTypes[6].EncodedBitMask" type="hidden" value="64" />
</li><li class="gearCheckbox">
    <label class="checkboxListItem"><input data-val="true" data-val-required="The IsSelected field is required." id="AllowedGearTypes_7__IsSelected" name="AllowedGearTypes[7].IsSelected" type="checkbox" value="true" /><input name="AllowedGearTypes[7].IsSelected" type="hidden" value="false" /> Transport</label>
    <input id="AllowedGearTypes_7__GearTypeDisplayName" name="AllowedGearTypes[7].GearTypeDisplayName" type="hidden" value="Transport" />
    <input id="AllowedGearTypes_7__EncodedBitMask" name="AllowedGearTypes[7].EncodedBitMask" type="hidden" value="256" />
</li><li class="gearCheckbox">
    <label class="checkboxListItem"><input data-val="true" data-val-required="The IsSelected field is required." id="AllowedGearTypes_8__IsSelected" name="AllowedGearTypes[8].IsSelected" type="checkbox" value="true" /><input name="AllowedGearTypes[8].IsSelected" type="hidden" value="false" /> Building</label>
    <input id="AllowedGearTypes_8__GearTypeDisplayName" name="AllowedGearTypes[8].GearTypeDisplayName" type="hidden" value="Building" />
    <input id="AllowedGearTypes_8__EncodedBitMask" name="AllowedGearTypes[8].EncodedBitMask" type="hidden" value="128" />
</li></ul>
<div class="divider-bottom spacing"></div>
<div class="headline">
    <h2 id="otherSettings">Other Permissions</h2>
</div>

<input id="ChatType" name="ChatType" type="hidden" value="Classic" />

<fieldset>
    By checking this box, <b>you are granting every other user of Roblox the right to use</b> (in various ways) the content you are now sharing. <b>If you do not want to grant this right, please do not check this box</b>. For more information about sharing content, please review the Roblox <a class='text-link' href='https://www.roblox.com/info/terms' class='rbx-link'>Terms of Use</a>.
    <label id="copyLock">
        <input data-val="true" data-val-required="The Allow Copying field is required." id="IsCopyingAllowed" name="IsCopyingAllowed" type="checkbox" value="true" /><input name="IsCopyingAllowed" type="hidden" value="false" /> <span class="checkboxListItem">Allow Copying</span>
    </label>
</fieldset>

<input data-val="true" data-val-required="The Avatar Appearance Override: field is required." id="OverridesDefaultAvatar" name="OverridesDefaultAvatar" type="hidden" value="False" />

<script type="text/javascript">
    $(function () {
        if (typeof Roblox === "undefined") {
            Roblox = {};
        }
        if (typeof Roblox.IDE === "undefined") {
            Roblox.IDE = {};
        }
        if (typeof Roblox.IDE.Resources === "undefined") {
            Roblox.IDE.Resources = {};
        }
        $.extend(Roblox.IDE.Resources, {
            AllowCopyingTitleText: "Allow Copying",
            AllowCopyingTitleContent: "Are you sure you want to allow this place to be copied?",
            AllowCopyingAcceptText: "Save",
            AllowCopyingCancelText: "Cancel",

            DisableVIPServersWarningTitleText: "Turn Off Private Servers",
            DisableVIPServersWarningBodyContent: "Are you sure you want to turn off private servers? All private server subscriptions will be cancelled.",
            DisableVIPServersWarningAcceptText: "Turn Off",
            DisableVIPServersWarningDeclineText: "Cancel"
        });
    });
</script>
            </div>

                <div id="versionHistory" class="default-hidden">
                    <div class="headline">
    <h2>Version History</h2>
</div>
<!--
    <div class="headline-banner blank-box">
        <span>
            Reverting to a previous version will save the place instead of publish. In order to publish the place please open the place in Roblox Studio and then go to, File &gt; Publish to Roblox.
        </span>
    </div>-->
<div id="versionHistoryLoading" style="text-align:center; padding-top: 180px; display:none;">
    <img src='/rbxcdn/images/ec4e85b0c4396cf753a06fade0a8d8af.gif' />
</div>
<div id="versionHistoryError" style="display:none;">
    An error occurred getting the version history.  Please try again later.
</div>
<div id="versionHistoryRevertError" style="display:none;">
    An error occurred reverting your place.  Please try again later.
</div>
<div id="versionHistoryItems"
    data-asset-id="${gameInfo.placeId}"
    data-revert-url="/places/revert"
    data-version-history-items-url="/places/version-history-items"
    data-show-popup="true">
    <div class="versionHistoryTableContainer">
    <table class="versionHistoryTable">
        <tr>
            <th>Version number</th>
            <th>Created</th>
            <th>Published</th>
            <th></th>
        </tr>
			${gameInfo.versionHistory.map((v: any) => {
			return `<tr>
                    <td>${v.version_number}</td>
                    <td>${moment(v.created_at).format('M/D/YYYY h:mm:ss A')}</td>
                    <td><span class="icon-checkmark-16x16"></span></td>
                    <td><span  data-asset-version-id="${v.id}" class="btn-control btn-control-medium revertLink">Revert to this version</span></td>
                </tr>`;
		}).join('\n')}
    </table>
</div>
<div class="pagerContainer">
    <span class="pager previous disabled"></span>
    <span class="page text">
        Page <span class="robloxVersionHistoryPageNum">1</span> of 1
    </span>
    <span class="pager next disabled"></span>
</div>
</div>

<script type="text/javascript">
    $(function () {
        if (typeof Roblox === "undefined") {
            Roblox = {};
        }
        if (typeof Roblox.IDE === "undefined") {
            Roblox.IDE = {};
        }
        if (typeof Roblox.IDE.Resources === "undefined") {
            Roblox.IDE.Resources = {};
        }
        $.extend(Roblox.IDE.Resources, {
            RevertTitleText: "Revert Place",
            RevertBodyContent: "Are you sure you want to revert to this version?",
            RevertAcceptText: "Revert",
            CancelText: "Cancel",
            VersionHistoryBehaviorTitleText: "Revert to a previous version",
            VersionHistoryBehaviorBodyText: "Reverting to a previous version will now save the place instead of publish. In order to publish the place please open the place in Roblox Studio and then go to, File > Publish to Roblox.",
            OkText: "OK"
            }
        );
    });
</script>
                </div>
                            <div id="developerProducts" class="default-hidden" src="/places/developerproducts?universeId=${gameInfo.universeId}&amp;pageNo=1&amp;pageSize=10">




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
            <div id="universe" class="default-hidden">

<h2>Game</h2>
<div style="min-height: 250px;">
    <div style="margin: 20px 0">
            <span>This place is part of the Game:
                    <a href="/universes/configure?id=${gameInfo.universeId}">${xss(gameInfo.name)}</a>
            </span>
    </div>
    <div class="divider-bottom spacing"></div>
    <div class="headline">
        <h2 id="otherSettings">In-Game Permissions</h2>
    </div>
    <div id="AllowCopyInGame">
        <label id="AllowPlaceToBeCopied">
            <input data-val="true" data-val-required="The AllowPlaceToBeCopiedInGame field is required." id="AllowPlaceToBeCopiedInGame" name="AllowPlaceToBeCopiedInGame" type="checkbox" value="true" /><input name="AllowPlaceToBeCopiedInGame" type="hidden" value="false" />
            <span class="checkboxListItem">Allow this place to be copied as a template using the
                <a href="https://developer.roblox.com/en-us/api-reference/function/AssetService/CreatePlaceAsync" target="blank">Create Place API</a>
                 in your game.
            </span>
        </label>
    </div>
    <div id="AllowUpdateInGame">
        <label id="AllowPlaceToBeUpdated">
            <input data-val="true" data-val-required="The AllowPlaceToBeUpdatedInGame field is required." id="AllowPlaceToBeUpdatedInGame" name="AllowPlaceToBeUpdatedInGame" type="checkbox" value="true" /><input name="AllowPlaceToBeUpdatedInGame" type="hidden" value="false" />
            <span class="checkboxListItem">Allow this place to be updated using the
                <a href="https://developer.roblox.com/en-us/api-reference/function/AssetService/SavePlaceAsync" target="blank">Save Place API</a>
                in your game.
            </span>
        </label>
    </div>
</div>

            </div>
            <div>
                <div id="buttonRow" class="actionButtons">
                    <a  class="btn-medium btn-neutral" id="okButton">Save</a>
                    <a  href="https://www.roblox.com/develop" class="btn-medium btn-negative" id="cancelButton">Cancel</a>
                </div>
            </div>
        </form>
    </div>
</div>

<div id="ProcessingView" class="default-hidden">
    <div class="ProcessingModalBody">
        <p class="processing-indicator"><img src='/rbxcdn/images/ec4e85b0c4396cf753a06fade0a8d8af.gif' alt="Updating place..." /></p>
        <p class="processing-text">Updating place...</p>
    </div>
</div>

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

    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='pageEnd' type='text/javascript' src='/rbxcdn/js/5f25ff98e45c539173dea50f2ccac7fe.js'></script>

</body>
</html>

`), session);
};
