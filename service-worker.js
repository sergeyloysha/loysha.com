"use strict";var precacheConfig=[["/index.html","4137631d0116f31eb2d4d132c9079483"],["/static/css/main.d2728d95.css","dae48be9f92c5bd31b7113bf6a69285d"],["/static/js/main.54f97329.js","df8713c80775732fb28177dab6e57233"],["/static/media/Hellix-Black.884223a7.woff","884223a7354d914e5c884d0d672b621c"],["/static/media/Hellix-Black.a8ee2028.woff2","a8ee2028f2f1c91474e80f6ed8b39bb5"],["/static/media/Hellix-Bold.541f6e99.woff","541f6e9942ad8564237bfde8b1b7c0d0"],["/static/media/Hellix-Bold.fea1b1b9.woff2","fea1b1b94d27e275b0cd11cc646aa4e9"],["/static/media/Hellix-ExtraBold.291617a1.woff2","291617a151e342322634be5ae434991b"],["/static/media/Hellix-ExtraBold.5d3139d3.woff","5d3139d380f818a4beff0c94db8e25b6"],["/static/media/Hellix-Light.8f2f6497.woff","8f2f64975b1bc9de2f838671ea741186"],["/static/media/Hellix-Light.f23532e2.woff2","f23532e217f7c13ac07b7c3bf9521608"],["/static/media/Hellix-Medium.15db6173.woff","15db6173df8331a0d6e58cd3cba47a7f"],["/static/media/Hellix-Medium.9892241a.woff2","9892241a2e40968afc2b9fbd404429dd"],["/static/media/Hellix-Regular.6e772299.woff","6e772299167a363c3934d312e4ea2260"],["/static/media/Hellix-Regular.9fdf1c35.woff2","9fdf1c35768cdbb4caf0b53a524fef12"],["/static/media/Hellix-SemiBold.6aa05418.woff2","6aa05418154adeab7ff9a3f9b76a8531"],["/static/media/Hellix-SemiBold.b1ce2c9c.woff","b1ce2c9c035f1143a79069b2614b3542"],["/static/media/Hellix-Thin.3d1d9555.woff","3d1d95553003751a84f70f2b18df2e47"],["/static/media/Hellix-Thin.d6a25bc1.woff2","d6a25bc108dc6f60aee9165f462b2b46"],["/static/media/dribbble.841dae48.svg","841dae480399ccbe4914ecebf6a402f7"],["/static/media/email.fdfec42e.svg","fdfec42e8dd56e901006657f8296e06e"],["/static/media/github.a74e54a8.svg","a74e54a82ae78e107fb68a96971c99ae"],["/static/media/photo.fcd34b8e.png","fcd34b8ed6076e78ec12637ddc35b79b"],["/static/media/telegram.f0cb3b2b.svg","f0cb3b2bb8c12d4fbf241e5f9a6ce819"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});