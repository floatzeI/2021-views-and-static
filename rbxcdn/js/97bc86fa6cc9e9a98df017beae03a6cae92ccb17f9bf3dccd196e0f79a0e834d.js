!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=87)}({0:function(e,t){e.exports=React},1:function(e,t){e.exports=Roblox},12:function(e,t){e.exports=ReactDOM},13:function(e,t){e.exports=ReactUtilities},2:function(e,t){e.exports=PropTypes},7:function(e,t){e.exports=ReactStyleGuide},8:function(e,t){e.exports=CoreUtilities},82:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);function b(){var e={retryable:!0,withCredentials:!0,url:"".concat(l,"/v1/credit")};return o.httpService.get(e).then(function(e){return e.data})}function p(){var e={withCredentials:!0,url:"".concat(l,"/v1/credit/redeem-robux")};return o.httpService.post(e)}var m=n(0),x=n.n(m),r=n(12),o=n(8),a="roblox-credit-container",i=n(2),u=n.n(i),c=n(13),v=n(7),l=n(1).EnvironmentUrls.billingApi;function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var s=y(Object(v.createModal)(),2),h=s[0],R=s[1],d=y(Object(v.createSystemFeedback)(),2),g=d[0],O=d[1];function f(e){function t(){b().then(function(e){a(parseFloat(e.balance).toFixed(2)),c(e.robuxAmount),d(e.canRedeemCreditForRobux)})}var n=e.translate,r=y(Object(m.useState)(null),2),o=r[0],a=r[1],i=y(Object(m.useState)(null),2),u=i[0],c=i[1],l=y(Object(m.useState)(null),2),s=l[0],d=l[1],f=x.a.createElement("div",{dangerouslySetInnerHTML:{__html:n("Description.ConfirmRobloxCreditToRobuxRedemption",{balance:o,iconRobux:'<span class="icon-robux-16x16"></span>',robuxAmount:u})}});return Object(m.useEffect)(function(){t()},[]),x.a.createElement("div",null,x.a.createElement("span",{className:"text-label account-settings-label"},n("Heading.RobloxCredit")),x.a.createElement("p",null," ",n("Label.CurrentBalance",{balance:o})),s&&x.a.createElement(v.Button,{id:"redeem-robux-button",className:"redeem-robux-button",variant:v.Button.variants.secondary,size:v.Button.sizes.medium,width:v.Button.widths.min,onClick:function(){R.open().then(function(){p().then(function(e){e&&(O.success(n("Message.RobloxCreditToRobuxRedemptionConfirmation",{robuxAmount:u})),t())},function(){O.warning(n("Message.FailedDebitRobloxCredit"))})})}},n("Action.ConvertToRobux")),x.a.createElement(h,{title:n("Heading.GetRobux"),body:f,actionButtonText:n("Action.Redeem"),neutralButtonText:n("Action.Cancel"),actionButtonShow:!0}),x.a.createElement(g,null))}f.propTypes={translate:u.a.func.isRequired};var j=f;function C(e){var t=e.translate;return x.a.createElement(j,{translate:t})}C.propTypes={translate:u.a.func.isRequired};var E=Object(c.withTranslations)(C,{common:["CommonUI.Controls"],feature:"Feature.RobloxCredit"});n(82);Object(o.ready)(function(){var e=document.getElementById(a);e&&Object(r.render)(x.a.createElement(E,null),e),window.addEventListener("hashchange",function(){if("#!/billing"===window.location.hash){var e=document.getElementById(a);e&&Object(r.render)(x.a.createElement(E,null),e)}})})}});
//# sourceMappingURL=/rbxcdn/js/9bd988649b62f8661970-robloxCredit.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("RobloxCredit");