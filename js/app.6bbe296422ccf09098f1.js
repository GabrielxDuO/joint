webpackJsonp([1],{117:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(345),i=n(330),a=n(331),r=n.n(a),s=n(127);o.a.config.productionTip=!1,o.a.use(i.a);var c=window.navigator.userLanguage||window.navigator.language,d=c.startsWith("en")?"en-US":"zh-CN";new o.a({el:"#app",template:"<App />",components:{App:r.a},i18n:new i.a({locale:d,messages:s.a})})},119:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(332),i=n.n(o),a=n(333),r=n.n(a),s=n(334),c=n.n(s),d=n(335),l=n.n(d),u=n(60),h=n.n(u),f=n(336),v=n.n(f),m=n(126),p=n(327),g=n.n(p),I=n(329),w=n.n(I);e.default={name:"app",components:{AddScreenshotsButton:i.a,AppBar:r.a,DonateDialog:c.a,JoinedScreenshotView:l.a,MdButton:h.a,ScreenshotView:v.a},data:function(){return{images:[],topRatio:.85,bottomRatio:1,screenshots:[],showDonationDialog:!1,FileDownloadIcon:g.a,PlayArrowIcon:w.a}},mounted:function(){window.addEventListener("error",(function(t){t instanceof ErrorEvent&&n.i(m.a)(t.message)}),!1),document.title=this.$t("window_title")},methods:{isAndroidWebView:function(){var t=navigator.userAgent;return!(!t.includes("Linux; U; Android")||t.includes("UCBrowser"))||(!(!t.includes(") Version/")||!t.includes(" Chrome/"))||!!t.includes("; wv)"))},isChromeOrFirefox:function(){var t=navigator.userAgent;return!(!t.includes("Chrome")&&!t.includes("Chromium"))||!!t.includes("Firefox")},isIos:function(){var t=navigator.userAgent;return!!(t.includes("iPad")||t.includes("iPhone")||t.includes("iPod")&&!window.MSStream)},addScreenshot:function(t){n.i(m.b)("Functionality","Add screenshot"),this.images.push(t)},changeTopRatio:function(t){this.topRatio=t},changeBottomRatio:function(t){this.bottomRatio=t},moveScreenshotUp:function(t){var e=this.images,n=this.$refs.screenshotViews,o=e.splice(t,1)[0];e.splice(t-1,0,o);var i=n.splice(t,1)[0];n.splice(t-1,0,i)},moveScreenshotDown:function(t){var e=this.images,n=this.$refs.screenshotViews,o=e.splice(t,1)[0];e.splice(t+1,0,o);var i=n.splice(t,1)[0];n.splice(t+1,0,i)},removeScreenshot:function(t){this.images.splice(t,1)},generateJoinedScreenshot:function(){n.i(m.b)("Functionality","Generate");var t=this.$refs.screenshotViews;this.screenshots=t.map((function(t){return{image:t.image,topRatio:t.isFirst?0:t.localTopRatio,bottomRatio:t.isLast?1:t.localBottomRatio}}))},downloadJoinedScreenshot:function(){n.i(m.b)("Functionality","Download"),this.$refs.joinedScreenshotView.downloadJoinedScreenshot()},donate:function(){n.i(m.b)("Functionality","Donate"),this.showDonationDialog=!0}}}},120:function(t,e,n){"use strict";function o(t){return function(){var e=t.apply(this,arguments);return new Promise((function(t,n){function o(i,a){try{var r=e[i](a),s=r.value}catch(t){return void n(t)}if(!r.done)return Promise.resolve(s).then((function(t){o("next",t)}),(function(t){o("throw",t)}));t(s)}return o("next")}))}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(60),a=n.n(i),r=n(88),s=n(323),c=n.n(s);e.default={name:"add-screenshots-button",components:{MdButton:a.a},data:function(){return{AddIcon:c.a}},methods:{addScreenshots:function(){var t=this;return o(regeneratorRuntime.mark((function e(){var o,i,a,s,c,d,l,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.i(r.b)(r.c,!0);case 2:o=e.sent,i=!0,a=!1,s=void 0,e.prev=6,c=o[Symbol.iterator]();case 8:if(i=(d=c.next()).done){e.next=17;break}return l=d.value,e.next=12,n.i(r.d)(l);case 12:u=e.sent,t.$emit("addScreenshot",u);case 14:i=!0,e.next=8;break;case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(6),a=!0,s=e.t0;case 23:e.prev=23,e.prev=24,!i&&c.return&&c.return();case 26:if(e.prev=26,!a){e.next=29;break}throw s;case 29:return e.finish(26);case 30:return e.finish(23);case 31:case"end":return e.stop()}}),e,t,[[6,19,23,31],[24,,26,30]])})))()}}}},121:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(60),i=n.n(o),a=n(328),r=n.n(a);e.default={name:"app-bar",components:{MdButton:i.a},data:function(){return{MonetizationOnIcon:r.a}}}},122:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(60),i=n.n(o);e.default={name:"donate-dialog",components:{MdButton:i.a}}},123:function(t,e,n){"use strict";function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(129),a=(n.n(i),n(88)),r=function(){function t(t,e){var n=[],o=!0,i=!1,a=void 0;try{for(var r,s=t[Symbol.iterator]();!(o=(r=s.next()).done)&&(n.push(r.value),!e||n.length!==e);o=!0);}catch(t){i=!0,a=t}finally{try{!o&&s.return&&s.return()}finally{if(i)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.default={name:"joined-screenshot-view",props:{screenshots:Array},watch:{screenshots:function(){this.onScreenshotsChanged()}},mounted:function(){this.onScreenshotsChanged()},methods:{onScreenshotsChanged:function(){var t=this.screenshots,e=this.$refs.canvas;if(0===t.length){e.width=16,e.height=9;var n=e.getContext("2d"),i=e.fillStyle;return n.fillStyle="white",n.fillRect(0,0,e.width,e.height),void(n.fillStyle=i)}var a=Math.min.apply(Math,o(t.map((function(t){return t.image.width})))),s=0,c=[],d=!0,l=!1,u=void 0;try{for(var h,f=t.entries()[Symbol.iterator]();!(d=(h=f.next()).done);d=!0){var v=h.value,m=r(v,2),p=m[0],g=m[1],I=g.image,w=g.topRatio,y=g.bottomRatio,b=0===p?0:w*I.height,x=p===t.length-1?I.height:y*I.height,M=x-b,C=M/I.width*a;c.push([I,0,b,I.width,M,0,s,a,C]),s+=C}}catch(t){l=!0,u=t}finally{try{!d&&f.return&&f.return()}finally{if(l)throw u}}e.width=a,e.height=s;var D=e.getContext("2d"),S=!0,R=!1,L=void 0;try{for(var j,_=c[Symbol.iterator]();!(S=(j=_.next()).done);S=!0){var A=j.value;D.drawImage.apply(D,o(A))}}catch(t){R=!0,L=t}finally{try{!S&&_.return&&_.return()}finally{if(R)throw L}}},downloadJoinedScreenshot:function(){var t=this;this.$refs.canvas.toBlob((function(e){return n.i(a.a)(e,t.$t("joined_screenshot")+".jpg")}),"image/jpeg",.95)}}}},124:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-button",props:{icon:String,text:{type:String,default:""},enabled:{type:Boolean,default:!0},flat:{type:Boolean,default:!1},dark:{type:Boolean,default:!1}}}},125:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(320),i=(n.n(o),n(128)),a=n(324),r=n.n(a),s=n(325),c=n.n(s),d=n(326),l=n.n(d);e.default={name:"screenshot-view",props:{isFirst:Boolean,isLast:Boolean,image:window.ImageBitmap?ImageBitmap:HTMLImageElement,topRatio:Number,bottomRatio:Number},data:function(){return{useLocalRatio:!1,localTopRatio:this.topRatio,localBottomRatio:this.bottomRatio,ArrowDownwardIcon:r.a,ArrowUpwardIcon:c.a,CloseIcon:l.a}},watch:{image:function(){this.onImageChanged()},topRatio:function(){this.useLocalRatio||(this.localTopRatio=this.topRatio)},bottomRatio:function(){this.useLocalRatio||(this.localBottomRatio=this.bottomRatio)}},mounted:function(){this.onImageChanged()},methods:{onImageChanged:function(){var t=this.image,e=this.$refs.canvas;e.width=t.width,e.height=t.height,e.getContext("2d").drawImage(this.image,0,0)},onHandlePointerDown:function(t){var e=this;t.preventDefault(),t.stopPropagation(),n.i(i.a)(t);var o=t.target,a=!o.previousElementSibling,r=o.getBoundingClientRect().top-t.clientY,s=function(t){var n=o.offsetParent.offsetHeight,i=o.offsetTop,s=t.clientY-o.getBoundingClientRect().top+r,c=a?0:o.previousElementSibling.offsetTop,d=a?o.nextElementSibling.offsetTop:n,l=Math.min(Math.max(c,i+s),d),u=l/n;a?e.localTopRatio=u:e.localBottomRatio=u},c=function(){e.useLocalRatio||(a?e.$emit("changeTopRatio",e.localTopRatio):e.$emit("changeBottomRatio",e.localBottomRatio))},d=function(t){t.preventDefault(),t.stopPropagation(),s(t)};document.addEventListener("pointermove",d,!0);var l=function t(o){o.preventDefault(),o.stopPropagation(),document.removeEventListener("pointermove",d,!0),document.removeEventListener("pointerup",t,!0),n.i(i.a)(o)&&e.toggleUseLocalRatio(),s(o),c()};document.addEventListener("pointerup",l,!0)},toggleUseLocalRatio:function(){this.useLocalRatio=!this.useLocalRatio,this.useLocalRatio||(this.localTopRatio=this.topRatio,this.localBottomRatio=this.bottomRatio)}}}},126:function(t,e,n){"use strict";function o(t,e){window.ga instanceof Function&&window.ga("send","event",t,e)}function i(t){window.ga instanceof Function&&window.ga("send","exception",{exDescription:t,exFatal:!0})}e.b=o,e.a=i},127:function(t,e,n){"use strict";e.a={"zh-CN":{close:"关闭",window_title:"截图拼接工具 - 在线拼接电影字幕截图",app_bar_title:"截图拼接工具",tutorial:["本工具可以帮助您方便地生成电影字幕截图。","","使用步骤：","1. 点击<b>添加屏幕截图</b>（可选择多张）；","2. <b>移动手柄</b>选择字幕区域；","3. <b>生成</b>并<b>下载</b>拼接的截图。","","通过<b>双击</b>手柄为<b>选中的单张截图</b>选择特定的字幕区域。"].join("<br>"),android_webview_tip:"<i>如果您正在使用应用内置的网页视图，您可能无法正常添加截图。您可以尝试<b>在 Chrome 或 Firefox 浏览器中打开本工具</b>来解决这个问题。</i>",ios_tip:"<i>推荐使用桌面版 Chrome 或 Firefox 访问本工具。</i>",browser_tip:"<i>推荐使用 Chrome 或 Firefox 访问本工具。</i>",add_screenshots:"添加屏幕截图",generate:"生成拼接截图",download:"下载拼接截图",joined_screenshot:"拼接截图",donate:"Github",link_text:"https://github.com/zhanghai/join-screenshots.zhanghai.me"},"en-US":{close:"Close",window_title:"Join Screenshots - Join movie subtitle screenshots online",app_bar_title:"Join Screenshots",tutorial:["This tool can help you join multiple screenshots together.","","Steps to use:","1. Click <b>Add screenshots</b> (You can add multiple screenshots at a time);","2. <b>Move handles</b> to select the content area;","3. <b>Generate</b> and <b>Download</b> the joined screenshot.","","<b>Double-click a handle</b> to select a content area specifically for one screenshot."].join("<br>"),android_webview_tip:"<i>You may be using an in-app web view where adding screenshots may not work properly. If you encountered any problem, you can try opening this tool in Chrome or Firefox.</i>",ios_tip:"<i>Using Desktop Chrome or Firefox is recommended for this tool to function properly.</i>",browser_tip:"<i>Using Chrome or Firefox is recommended for this tool to function properly.</i>",add_screenshots:"Add Screenshots",generate:"Generate",download:"Download",joined_screenshot:"joined-screenshot",donate:"Github",link_text:"https://github.com/zhanghai/join-screenshots.zhanghai.me"}}},128:function(t,e,n){"use strict";function o(t,e){var n=e.clientX-t.clientX,o=e.clientY-t.clientY;return Math.sqrt(n*n+o*o)}function i(t,e){return e.timeStamp-t.timeStamp}function a(t){var e=t[l]||null;return e&&delete t[l],e}function r(t){var e=t[u]||null;return e&&delete t[u],e}function s(t){var e=t[h]||0;return e&&delete t[h],e}function c(t){delete t[l],delete t[u],delete t[h]}function d(t){var e=t.target;switch(t.type){case"pointerdown":var n=r(e);n&&(i(n,t)>m||o(n,t)>p)&&c(e),e[l]=t;break;case"pointerup":var d=a(e);if(!d)return c(e),!1;(i(d,t)>f||o(d,t)>v)&&c(e);var g=s(e)+1;if(2===g)return c(e),!0;e[u]=t,e[h]=g}return!1}e.a=d;var l=Symbol("LAST_DOWN_EVENT"),u=Symbol("LAST_CLICK_EVENT"),h=Symbol("LAST_CLICK_COUNT"),f=250,v=9,m=300,p=10},311:function(t,e){},312:function(t,e){},313:function(t,e){},314:function(t,e){},315:function(t,e){},316:function(t,e){},317:function(t,e){},318:function(t,e){},322:function(t,e,n){t.exports=n.p+"img/donate-alipay.e9c18fa.png"},323:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjRkZGRkZGIj4KICAgIDxwYXRoIGQ9Ik0xOSAxM2gtNnY2aC0ydi02SDV2LTJoNlY1aDJ2Nmg2djJ6IiAvPgo8L3N2Zz4K"},324:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjRkZGRkZGIj4KICAgIDxwYXRoIGQ9Ik0yMCAxMmwtMS40MS0xLjQxTDEzIDE2LjE3VjRoLTJ2MTIuMTdsLTUuNTgtNS41OUw0IDEybDggOCA4LTh6IiAvPgo8L3N2Zz4K"},325:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjRkZGRkZGIj4KICAgIDxwYXRoIGQ9Ik00IDEybDEuNDEgMS40MUwxMSA3LjgzVjIwaDJWNy44M2w1LjU4IDUuNTlMMjAgMTJsLTgtOC04IDh6IiAvPgo8L3N2Zz4K"},326:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjRkZGRkZGIj4KICAgIDxwYXRoIGQ9Ik0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6IiAvPgo8L3N2Zz4K"},327:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjRkZGRkZGIj4KICAgIDxwYXRoIGQ9Ik0xOSA5aC00VjNIOXY2SDVsNyA3IDctN3pNNSAxOHYyaDE0di0ySDV6IiAvPgo8L3N2Zz4K"},328:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWdpdGh1YiIgZGF0YS1kYXJrcmVhZGVyLWlubGluZS1zdHJva2U9IiIgc3R5bGU9Ii0tZGFya3JlYWRlci1pbmxpbmUtc3Ryb2tlOiBjdXJyZW50Y29sb3I7Ij48cGF0aCBkPSJNOSAxOWMtNSAxLjUtNS0yLjUtNy0zbTE0IDZ2LTMuODdhMy4zNyAzLjM3LjAgMDAtLjk0LTIuNjFjMy4xNC0uMzUgNi40NC0xLjU0IDYuNDQtN0E1LjQ0IDUuNDQuMCAwMDIwIDQuNzcgNS4wNyA1LjA3LjAgMDAxOS45MSAxUzE4LjczLjY1IDE2IDIuNDhhMTMuMzggMTMuMzguMCAwMC03IDBDNi4yNy42NSA1LjA5IDEgNS4wOSAxQTUuMDcgNS4wNy4wIDAwNSA0Ljc3IDUuNDQgNS40NC4wIDAwMy41IDguNTVjMCA1LjQyIDMuMyA2LjYxIDYuNDQgN0EzLjM3IDMuMzcuMCAwMDkgMTguMTNWMjIiPjwvcGF0aD48L3N2Zz4="},329:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjRkZGRkZGIj4KICAgIDxwYXRoIGQ9Ik04IDV2MTRsMTEtN3oiIC8+Cjwvc3ZnPgo="},331:function(t,e,n){function o(t){n(313),n(314)}var i=n(40)(n(119),n(339),o,"data-v-420dd202",null);t.exports=i.exports},332:function(t,e,n){function o(t){n(316)}var i=n(40)(n(120),n(341),o,"data-v-a5452596",null);t.exports=i.exports},333:function(t,e,n){function o(t){n(315)}var i=n(40)(n(121),n(340),o,"data-v-4f6154e9",null);t.exports=i.exports},334:function(t,e,n){function o(t){n(311)}var i=n(40)(n(122),n(337),o,"data-v-2de3218e",null);t.exports=i.exports},335:function(t,e,n){function o(t){n(312)}var i=n(40)(n(123),n(338),o,"data-v-3f19384b",null);t.exports=i.exports},336:function(t,e,n){function o(t){n(318)}var i=n(40)(n(125),n(343),o,"data-v-efff2f3c",null);t.exports=i.exports},337:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"dialog"}},[o("div",{staticClass:"dialog-dim",on:{click:function(e){t.$emit("close")}}},[o("div",{staticClass:"dialog",on:{click:function(t){t.stopPropagation()}}},[o("div",{staticClass:"dialog-content"},[o("div",{staticClass:"dialog-title"},[t._v(t._s(t.$t("donate")))]),t._v(" "),o("div",{staticClass:"dialog-body"},[t._v(" "),o("a",{attrs:{href:t.$t("link_text"),target:"_blank"}},[t._v(t._s(t.$t("link_text")))])])]),t._v(" "),o("div",{staticClass:"dialog-button-bar"},[o("md-button",{attrs:{text:t.$t("close"),flat:!0},on:{click:function(e){t.$emit("close")}}})],1)])])])},staticRenderFns:[]}},338:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("canvas",{ref:"canvas"})},staticRenderFns:[]}},339:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("app-bar",{staticClass:"app-bar",on:{donate:t.donate}}),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"screenshots"},[t.images.length?t._e():n("div",{staticClass:"tip",domProps:{innerHTML:t._s(t.$t("tutorial"))}}),t._v(" "),!t.isChromeOrFirefox()||t.isAndroidWebView()?n("div",{staticClass:"tip",domProps:{innerHTML:t._s(t.$t(t.isIos()?"ios_tip":t.isAndroidWebView()?"android_webview_tip":"browser_tip"))}}):t._e(),t._v(" "),t._l(t.images,(function(e,o){return n("screenshot-view",{key:e,ref:"screenshotViews",refInFor:!0,attrs:{isFirst:0===o,isLast:o===t.images.length-1,image:e,topRatio:t.topRatio,bottomRatio:t.bottomRatio},on:{changeTopRatio:t.changeTopRatio,changeBottomRatio:t.changeBottomRatio,moveScreenshotUp:function(e){t.moveScreenshotUp(o)},moveScreenshotDown:function(e){t.moveScreenshotDown(o)},removeScreenshot:function(e){t.removeScreenshot(o)}}})})),t._v(" "),n("add-screenshots-button",{staticClass:"add-screenshots-button",on:{addScreenshot:t.addScreenshot}})],2)]),t._v(" "),n("div",{staticClass:"panel"},[n("div",{staticClass:"joined-screenshot"},[n("joined-screenshot-view",{ref:"joinedScreenshotView",attrs:{screenshots:t.screenshots}}),t._v(" "),n("div",{staticClass:"button-bar"},[n("md-button",{attrs:{icon:t.PlayArrowIcon,text:t.$t("generate"),enabled:!!t.images.length},on:{click:t.generateJoinedScreenshot}}),t._v(" "),n("md-button",{attrs:{icon:t.FileDownloadIcon,text:t.$t("download"),enabled:!!t.screenshots.length},on:{click:t.downloadJoinedScreenshot}})],1)],1)])]),t._v(" "),n("donate-dialog",{directives:[{name:"show",rawName:"v-show",value:t.showDonationDialog,expression:"showDonationDialog"}],on:{close:function(e){t.showDonationDialog=!1}}})],1)},staticRenderFns:[]}},340:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-bar"},[n("div",{staticClass:"title"},[t._v(t._s(t.$t("app_bar_title")))]),t._v(" "),n("div",{staticClass:"actions"},[n("md-button",{attrs:{icon:t.MonetizationOnIcon,text:t.$t("donate"),flat:!0,dark:!0},on:{click:function(e){t.$emit("donate")}}})],1)])},staticRenderFns:[]}},341:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("md-button",{attrs:{icon:t.AddIcon,text:t.$t("add_screenshots")},on:{click:t.addScreenshots}})},staticRenderFns:[]}},342:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:{flat:t.flat,dark:t.dark},attrs:{disabled:!t.enabled},on:{click:function(e){t.$emit("click",e)}}},[n("span",[t.icon?n("img",{attrs:{src:t.icon}}):t._e(),t._v(" "),n("span",[t._v(t._s(t.text))])])])},staticRenderFns:[]}},343:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view"},[n("canvas",{ref:"canvas"}),t._v(" "),n("div",{staticClass:"shadow-layer"},[n("div",{staticClass:"top-shadow",style:{height:(t.isFirst?0:100*t.localTopRatio)+"%"}}),t._v(" "),n("div",{staticClass:"bottom-shadow",style:{height:100*(t.isLast?0:1-t.localBottomRatio)+"%"}})]),t._v(" "),n("div",{staticClass:"handle-layer"},[n("div",{staticClass:"top-handle",class:{"local-ratio-handle":t.useLocalRatio},style:{top:100*t.localTopRatio+"%"},attrs:{"touch-action":"none"},on:{pointerdown:t.onHandlePointerDown}}),t._v(" "),n("div",{staticClass:"bottom-handle",class:{"local-ratio-handle":t.useLocalRatio},style:{top:100*t.localBottomRatio+"%"},attrs:{"touch-action":"none"},on:{pointerdown:t.onHandlePointerDown}})]),t._v(" "),n("div",{staticClass:"action-layer"},[n("button",{directives:[{name:"show",rawName:"v-show",value:!t.isFirst,expression:"!isFirst"}],on:{click:function(e){t.$emit("moveScreenshotUp")}}},[n("img",{attrs:{src:t.ArrowUpwardIcon}})]),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:!t.isLast,expression:"!isLast"}],on:{click:function(e){t.$emit("moveScreenshotDown")}}},[n("img",{attrs:{src:t.ArrowDownwardIcon}})]),t._v(" "),n("button",{on:{click:function(e){t.$emit("removeScreenshot")}}},[n("img",{attrs:{src:t.CloseIcon}})])])])},staticRenderFns:[]}},348:function(t,e,n){n(118),t.exports=n(117)},60:function(t,e,n){function o(t){n(317)}var i=n(40)(n(124),n(342),o,"data-v-df7001c0",null);t.exports=i.exports},88:function(t,e,n){"use strict";function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new Promise((function(n,o){var i=document.createElement("input");i.type="file",i.accept=t,i.multiple=e;var a="file-utils-select-file-div";Array.from(document.body.children).filter((function(t){return t.id===a})).forEach((function(t){return t.parentNode.removeChild(t)}));var r=document.createElement("div");r.id=a,r.style.position="fixed",r.style.width="0",r.style.height="0",r.style.overflow="hidden",r.appendChild(i),document.body.appendChild(r),i.onchange=function(){var t=e?Array.from(i.files):i.files[0]||null;document.body.removeChild(r),n(t)},i.click()}))}function i(t){if(window.createImageBitmap)return window.createImageBitmap(t).catch((function(e){if("InvalidStateError"===e.name)return console.warn(e),delete window.createImageBitmap,i(t);throw e}));var e=URL.createObjectURL||webkitURL.createObjectURL,n=URL.revokeObjectURL||webkitURL.revokeObjectURL;if(e)return new Promise((function(o,i){var a=document.createElement("img"),r=e(t);a.onload=function(){n(r),o(a)},a.src=r}));throw new Error("Unsupported browser: ")}function a(t,e){return s.a.saveAs(t,e,!0)}n.d(e,"c",(function(){return c})),e.b=o,e.d=i,e.a=a;var r=n(319),s=n.n(r),c="image/*"}},[348]);