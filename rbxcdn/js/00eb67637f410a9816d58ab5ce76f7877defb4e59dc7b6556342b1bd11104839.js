!function(){"use strict";function i(){return-1!==(null===window||void 0===window?void 0:window.navigator.userAgent.toUpperCase().indexOf("TRIDENT/"))||-1!==(null===window||void 0===window?void 0:window.navigator.userAgent.toUpperCase().indexOf("MSIE"))}function n(){var i=document.querySelector('meta[name="user-data"]');return null!==(i=null==i?void 0:i.dataset)&&void 0!==i?i:null}var e={isIos13Ipad:!!window.navigator&&"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints,isMac:-1<(null===window||void 0===window?void 0:window.navigator.platform.toUpperCase().indexOf("MAC")),isWindows:-1<(null===window||void 0===window?void 0:window.navigator.platform.toUpperCase().indexOf("WIN")),isIE:i(),isIE11:i()&&!(null===window||void 0===window||!window.navigator.userAgent.match(/rv[: ]\d+./))},o={isAuthenticated:!!n(),isUnder13:"true"===(null===(o=n())||void 0===o?void 0:o.isunder13),name:null!==(d=null===(d=n())||void 0===d?void 0:d.name)&&void 0!==d?d:null,id:null!==(o=n())&&void 0!==o&&o.userid?Number.parseInt(null===(o=n())||void 0===o?void 0:o.userid,10):-1,isPremiumUser:"true"===(null===(d=n())||void 0===d?void 0:d.ispremiumuser),created:null!==(o=null===(o=n())||void 0===o?void 0:o.created)&&void 0!==o?o:null,displayName:null!==(d=null===(d=n())||void 0===d?void 0:d.displayname)&&void 0!==d?d:null},d={isTestSite:"true"===(null===(d=null!==(d=null==(d=document.querySelector('meta[name="environment-meta"]'))?void 0:d.dataset)&&void 0!==d?d:null)||void 0===d?void 0:d.isTestingSite)};window.Roblox.JsClientDeviceIdentifier=e,window.HeaderScripts={jsClientDeviceIdentifier:e,authenticatedUser:o,environmentSites:d}}();
//# sourceMappingURL=/rbxcdn/js/1e2904e3891ab7491bc8-headerScripts.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("HeaderScripts");