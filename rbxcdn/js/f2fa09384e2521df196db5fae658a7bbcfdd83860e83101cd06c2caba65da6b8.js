!function(e){var r={};function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="",o(o.s=160)}({160:function(n,t,e){"use strict";e.r(t);function l(r){return new Promise(function(n,t){var e=new XMLHttpRequest;e.open("GET",r),e.responseType="arraybuffer",e.onload=function(){200===e.status?function(r){return new Promise(function(t,e){var n=new FileReader;n.onload=function(n){t(n.target.result)},n.onerror=function(n){e(n)},n.readAsDataURL(r)})}(new Blob([e.response],{type:"audio/mpeg"})).then(n).catch(t):t({message:"Failed to download audio",xmlHttpRequest:e})},e.onerror=function(n){t(n)},e.send()})}var r="icon-play",o="icon-pause",u={},i=null,c={getAudioPlayer:function(n){var t=u[n];return t=t||(u[n]=function(n){function t(){for(;0<c.length;){var t=c.shift();try{t.resolve({paused:0<r.currentTime&&r.currentTime<r.duration})}catch(n){try{t.reject(n)}catch(n){}}}}function e(n){for(o=n;0<c.length;){var t=c.shift();try{t.reject(n)}catch(n){}}}var r=new Audio,o=null,u=!1,i=!1,c=[],a={src:n,isPlaying:function(){return!o&&!r.paused},play:function(){return new Promise(function(n,t){if(o)t(o);else{var e=c.length<1;c.push({resolve:n,reject:t}),e&&(u=!0,i&&r.play())}})},pause:function(){u=!1,i&&r.pause()},stop:function(){this.pause(),i&&(r.currentTime=0)}};return r.addEventListener("pause",t),r.addEventListener("ended",t),r.addEventListener("error",e),r.addEventListener("canplaythrough",function(){i=!0,u?r.play():t()}),l(n).then(function(n){r.src=n}).catch(e),a}(n))},pauseRunningPlayer:function(){i&&(i.pause(),i=null)},getRunningPlayer:function(){return i},setRunningPlayer:function(n){i=n}},a="MediaPlayerIcon",s="data-mediathumb-url",f={getAudioButtons:function(n){return document.querySelectorAll(".".concat(a,"[").concat(s,"='").concat(n,"']"))},getAudioUrl:function(n){return n.getAttribute(s)},setButtonIcon:function(n,t){n.classList.toggle(o,t===o),n.classList.toggle(r,t===r)},setAllButtonIconsByAudioUrl:function(n,t){var e=this;this.getAudioButtons(n).forEach(function(n){e.setButtonIcon(n,t)})},playAudio:function(n){var t=this;c.pauseRunningPlayer(),this.setAllButtonIconsByAudioUrl(n.src,o),c.setRunningPlayer(n),n.play().then(function(){}).catch(function(n){console.error(n)}).finally(function(){t.setAllButtonIconsByAudioUrl(n.src,r),c.getRunningPlayer()===n&&c.setRunningPlayer(null)})},clickAudioButton:function(n){if(n.classList.contains(a)){var t=this.getAudioUrl(n);if(t){var e=c.getAudioPlayer(t);e.isPlaying()?e.pause():this.playAudio(e)}}},verifyRunningAudio:function(){var n=c.getRunningPlayer();n&&n.isPlaying()&&this.getAudioButtons(n.src).length<1&&n.stop()}};document.addEventListener("click",function(n){return f.clickAudioButton(n.target)}),new MutationObserver(f.verifyRunningAudio.bind(f)).observe(document,{childList:!0,subtree:!0});var d=f;window.Roblox=window.Roblox||{},window.Roblox.Audio={AudioService:c,AudioButtonService:d}}});
//# sourceMappingURL=/rbxcdn/js/ebd81adeccf6a6f13272-audioButton.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("AudioButton");