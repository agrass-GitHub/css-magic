(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-066d07d0"],{"159b":function(t,e,i){var a=i("da84"),n=i("fdbc"),r=i("17c2"),s=i("9112");for(var c in n){var o=a[c],l=o&&o.prototype;if(l&&l.forEach!==r)try{s(l,"forEach",r)}catch(u){l.forEach=r}}},"17c2":function(t,e,i){"use strict";var a=i("b727").forEach,n=i("b301");t.exports=n("forEach")?function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},"65f0":function(t,e,i){var a=i("861d"),n=i("e8b5"),r=i("b622"),s=r("species");t.exports=function(t,e){var i;return n(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!n(i.prototype)?a(i)&&(i=i[s],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===e?0:e)}},"76c6":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("nav",{staticClass:"navtab"},[i("ul",[i("li",{staticClass:"navtab-item active"},[i("i",{staticClass:"fas fa-home"}),i("span",[t._v("Home")])]),i("li",{staticClass:"navtab-item"},[i("i",{staticClass:"fas fa-compass"}),i("span",[t._v("Explore")])]),i("li",{staticClass:"navtab-item"},[i("i",{staticClass:"fas fa-bell"}),i("span",[t._v("Notification")])]),i("li",{staticClass:"navtab-item"},[i("i",{staticClass:"fas fa-user"}),i("span",[t._v("Profile")])])])])])}],r=(i("159b"),{mounted:function(){var t=document.querySelector("nav.navtab"),e=document.querySelectorAll("li.navtab-item");e.forEach((function(i,a){return i.addEventListener("click",(function(){e.forEach((function(t){return t.classList.remove("active")})),i.classList.add("active"),t.style.setProperty("--active-index","".concat(a))}))}))}}),s=r,c=(i("900e"),i("2877")),o=Object(c["a"])(s,a,n,!1,null,null,null);e["default"]=o.exports},"841d":function(t,e,i){},"900e":function(t,e,i){"use strict";var a=i("841d"),n=i.n(a);n.a},b301:function(t,e,i){"use strict";var a=i("d039");t.exports=function(t,e){var i=[][t];return!i||!a((function(){i.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,i){var a=i("f8c2"),n=i("44ad"),r=i("7b0b"),s=i("50c4"),c=i("65f0"),o=[].push,l=function(t){var e=1==t,i=2==t,l=3==t,u=4==t,f=6==t,v=5==t||f;return function(d,L,p,b){for(var h,m,S=r(d),y=n(S),C=a(L,p,3),E=s(y.length),x=0,T=b||c,M=e?T(d,E):i?T(d,0):void 0;E>x;x++)if((v||x in y)&&(h=y[x],m=C(h,x,S),t))if(e)M[x]=m;else if(m)switch(t){case 3:return!0;case 5:return h;case 6:return x;case 2:o.call(M,h)}else if(u)return!1;return f?-1:l||u?u:M}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},e8b5:function(t,e,i){var a=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-066d07d0.6f54d8df.js.map