!function(){var t={9662:function(t,n,r){var e=r(7854),o=r(614),i=r(6330),u=e.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not a function")}},9670:function(t,n,r){var e=r(7854),o=r(111),i=e.String,u=e.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not an object")}},1318:function(t,n,r){var e=r(5656),o=r(1400),i=r(6244),u=function(t){return function(n,r,u){var c,f=e(n),a=i(f),s=o(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},4326:function(t,n,r){var e=r(1702),o=e({}.toString),i=e("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:function(t,n,r){var e=r(7854),o=r(1694),i=r(614),u=r(4326),c=r(5112)("toStringTag"),f=e.Object,a="Arguments"==u(function(){return arguments}());t.exports=o?u:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=f(t),c))?r:a?u(n):"Object"==(e=u(n))&&i(n.callee)?"Arguments":e}},9920:function(t,n,r){var e=r(2597),o=r(3887),i=r(1236),u=r(3070);t.exports=function(t,n,r){for(var c=o(n),f=u.f,a=i.f,s=0;s<c.length;s++){var p=c[s];e(t,p)||r&&e(r,p)||f(t,p,a(n,p))}}},8880:function(t,n,r){var e=r(9781),o=r(3070),i=r(9114);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},9781:function(t,n,r){var e=r(7293);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,r){var e=r(7854),o=r(111),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},8113:function(t,n,r){var e=r(5005);t.exports=e("navigator","userAgent")||""},7392:function(t,n,r){var e,o,i=r(7854),u=r(8113),c=i.process,f=i.Deno,a=c&&c.versions||f&&f.version,s=a&&a.v8;s&&(o=(e=s.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=+e[1]),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,n,r){var e=r(7854),o=r(1236).f,i=r(8880),u=r(1320),c=r(3505),f=r(9920),a=r(4705);t.exports=function(t,n){var r,s,p,l,v,b=t.target,g=t.global,y=t.stat;if(r=g?e:y?e[b]||c(b,{}):(e[b]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!a(g?s:b+(y?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;f(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),u(r,s,l,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},6916:function(t){var n=Function.prototype.call;t.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},6530:function(t,n,r){var e=r(9781),o=r(2597),i=Function.prototype,u=e&&Object.getOwnPropertyDescriptor,c=o(i,"name"),f=c&&"something"===function(){}.name,a=c&&(!e||e&&u(i,"name").configurable);t.exports={EXISTS:c,PROPER:f,CONFIGURABLE:a}},1702:function(t){var n=Function.prototype,r=n.bind,e=n.call,o=r&&r.bind(e,e);t.exports=r?function(t){return t&&o(t)}:function(t){return t&&function(){return e.apply(t,arguments)}}},5005:function(t,n,r){var e=r(7854),o=r(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t]):e[t]&&e[t][n]}},8173:function(t,n,r){var e=r(9662);t.exports=function(t,n){var r=t[n];return null==r?void 0:e(r)}},7854:function(t,n,r){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:function(t,n,r){var e=r(1702),o=r(7908),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},3501:function(t){t.exports={}},4664:function(t,n,r){var e=r(9781),o=r(7293),i=r(317);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,r){var e=r(7854),o=r(1702),i=r(7293),u=r(4326),c=e.Object,f=o("".split);t.exports=i((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==u(t)?f(t,""):c(t)}:c},2788:function(t,n,r){var e=r(1702),o=r(614),i=r(5465),u=e(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},9909:function(t,n,r){var e,o,i,u=r(8536),c=r(7854),f=r(1702),a=r(111),s=r(8880),p=r(2597),l=r(5465),v=r(6200),b=r(3501),g="Object already initialized",y=c.TypeError,d=c.WeakMap;if(u||l.state){var h=l.state||(l.state=new d),m=f(h.get),x=f(h.has),w=f(h.set);e=function(t,n){if(x(h,t))throw new y(g);return n.facade=t,w(h,t,n),n},o=function(t){return m(h,t)||{}},i=function(t){return x(h,t)}}else{var O=v("state");b[O]=!0,e=function(t,n){if(p(t,O))throw new y(g);return n.facade=t,s(t,O,n),n},o=function(t){return p(t,O)?t[O]:{}},i=function(t){return p(t,O)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw y("Incompatible receiver, "+t+" required");return r}}}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,n,r){var e=r(7293),o=r(614),i=/#|\.prototype\./,u=function(t,n){var r=f[c(t)];return r==s||r!=a&&(o(n)?e(n):!!n)},c=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},f=u.data={},a=u.NATIVE="N",s=u.POLYFILL="P";t.exports=u},111:function(t,n,r){var e=r(614);t.exports=function(t){return"object"==typeof t?null!==t:e(t)}},1913:function(t){t.exports=!1},2190:function(t,n,r){var e=r(7854),o=r(5005),i=r(614),u=r(7976),c=r(3307),f=e.Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return i(n)&&u(n.prototype,f(t))}},6244:function(t,n,r){var e=r(7466);t.exports=function(t){return e(t.length)}},133:function(t,n,r){var e=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},8536:function(t,n,r){var e=r(7854),o=r(614),i=r(2788),u=e.WeakMap;t.exports=o(u)&&/native code/.test(i(u))},2814:function(t,n,r){var e=r(7854),o=r(7293),i=r(1702),u=r(1340),c=r(3111).trim,f=r(1361),a=i("".charAt),s=e.parseFloat,p=e.Symbol,l=p&&p.iterator,v=1/s(f+"-0")!=-1/0||l&&!o((function(){s(Object(l))}));t.exports=v?function(t){var n=c(u(t)),r=s(n);return 0===r&&"-"==a(n,0)?-0:r}:s},3070:function(t,n,r){var e=r(7854),o=r(9781),i=r(4664),u=r(3353),c=r(9670),f=r(4948),a=e.TypeError,s=Object.defineProperty,p=Object.getOwnPropertyDescriptor;n.f=o?u?function(t,n,r){if(c(t),n=f(n),c(r),"function"==typeof t&&"prototype"===n&&"value"in r&&"writable"in r&&!r.writable){var e=p(t,n);e&&e.writable&&(t[n]=r.value,r={configurable:"configurable"in r?r.configurable:e.configurable,enumerable:"enumerable"in r?r.enumerable:e.enumerable,writable:!1})}return s(t,n,r)}:s:function(t,n,r){if(c(t),n=f(n),c(r),i)try{return s(t,n,r)}catch(t){}if("get"in r||"set"in r)throw a("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},1236:function(t,n,r){var e=r(9781),o=r(6916),i=r(5296),u=r(9114),c=r(5656),f=r(4948),a=r(2597),s=r(4664),p=Object.getOwnPropertyDescriptor;n.f=e?p:function(t,n){if(t=c(t),n=f(n),s)try{return p(t,n)}catch(t){}if(a(t,n))return u(!o(i.f,t,n),t[n])}},8006:function(t,n,r){var e=r(6324),o=r(748).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},5181:function(t,n){n.f=Object.getOwnPropertySymbols},7976:function(t,n,r){var e=r(1702);t.exports=e({}.isPrototypeOf)},6324:function(t,n,r){var e=r(1702),o=r(2597),i=r(5656),u=r(1318).indexOf,c=r(3501),f=e([].push);t.exports=function(t,n){var r,e=i(t),a=0,s=[];for(r in e)!o(c,r)&&o(e,r)&&f(s,r);for(;n.length>a;)o(e,r=n[a++])&&(~u(s,r)||f(s,r));return s}},5296:function(t,n){"use strict";var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!r.call({1:2},1);n.f=o?function(t){var n=e(this,t);return!!n&&n.enumerable}:r},2140:function(t,n,r){var e=r(7854),o=r(6916),i=r(614),u=r(111),c=e.TypeError;t.exports=function(t,n){var r,e;if("string"===n&&i(r=t.toString)&&!u(e=o(r,t)))return e;if(i(r=t.valueOf)&&!u(e=o(r,t)))return e;if("string"!==n&&i(r=t.toString)&&!u(e=o(r,t)))return e;throw c("Can't convert object to primitive value")}},3887:function(t,n,r){var e=r(5005),o=r(1702),i=r(8006),u=r(5181),c=r(9670),f=o([].concat);t.exports=e("Reflect","ownKeys")||function(t){var n=i.f(c(t)),r=u.f;return r?f(n,r(t)):n}},1320:function(t,n,r){var e=r(7854),o=r(614),i=r(2597),u=r(8880),c=r(3505),f=r(2788),a=r(9909),s=r(6530).CONFIGURABLE,p=a.get,l=a.enforce,v=String(String).split("String");(t.exports=function(t,n,r,f){var a,p=!!f&&!!f.unsafe,b=!!f&&!!f.enumerable,g=!!f&&!!f.noTargetGet,y=f&&void 0!==f.name?f.name:n;o(r)&&("Symbol("===String(y).slice(0,7)&&(y="["+String(y).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(r,"name")||s&&r.name!==y)&&u(r,"name",y),(a=l(r)).source||(a.source=v.join("string"==typeof y?y:""))),t!==e?(p?!g&&t[n]&&(b=!0):delete t[n],b?t[n]=r:u(t,n,r)):b?t[n]=r:c(n,r)})(Function.prototype,"toString",(function(){return o(this)&&p(this).source||f(this)}))},4488:function(t,n,r){var e=r(7854).TypeError;t.exports=function(t){if(null==t)throw e("Can't call method on "+t);return t}},3505:function(t,n,r){var e=r(7854),o=Object.defineProperty;t.exports=function(t,n){try{o(e,t,{value:n,configurable:!0,writable:!0})}catch(r){e[t]=n}return n}},6200:function(t,n,r){var e=r(2309),o=r(9711),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,r){var e=r(7854),o=r(3505),i="__core-js_shared__",u=e[i]||o(i,{});t.exports=u},2309:function(t,n,r){var e=r(1913),o=r(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.20.2",mode:e?"pure":"global",copyright:"© 2022 Denis Pushkarev (zloirock.ru)"})},3111:function(t,n,r){var e=r(1702),o=r(4488),i=r(1340),u=r(1361),c=e("".replace),f="["+u+"]",a=RegExp("^"+f+f+"*"),s=RegExp(f+f+"*$"),p=function(t){return function(n){var r=i(o(n));return 1&t&&(r=c(r,a,"")),2&t&&(r=c(r,s,"")),r}};t.exports={start:p(1),end:p(2),trim:p(3)}},1400:function(t,n,r){var e=r(9303),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},5656:function(t,n,r){var e=r(8361),o=r(4488);t.exports=function(t){return e(o(t))}},9303:function(t){var n=Math.ceil,r=Math.floor;t.exports=function(t){var e=+t;return e!=e||0===e?0:(e>0?r:n)(e)}},7466:function(t,n,r){var e=r(9303),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},7908:function(t,n,r){var e=r(7854),o=r(4488),i=e.Object;t.exports=function(t){return i(o(t))}},7593:function(t,n,r){var e=r(7854),o=r(6916),i=r(111),u=r(2190),c=r(8173),f=r(2140),a=r(5112),s=e.TypeError,p=a("toPrimitive");t.exports=function(t,n){if(!i(t)||u(t))return t;var r,e=c(t,p);if(e){if(void 0===n&&(n="default"),r=o(e,t,n),!i(r)||u(r))return r;throw s("Can't convert object to primitive value")}return void 0===n&&(n="number"),f(t,n)}},4948:function(t,n,r){var e=r(7593),o=r(2190);t.exports=function(t){var n=e(t,"string");return o(n)?n:n+""}},1694:function(t,n,r){var e={};e[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(e)},1340:function(t,n,r){var e=r(7854),o=r(648),i=e.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:function(t,n,r){var e=r(7854).String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},9711:function(t,n,r){var e=r(1702),o=0,i=Math.random(),u=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},3307:function(t,n,r){var e=r(133);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,n,r){var e=r(9781),o=r(7293);t.exports=e&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,n,r){var e=r(7854),o=r(2309),i=r(2597),u=r(9711),c=r(133),f=r(3307),a=o("wks"),s=e.Symbol,p=s&&s.for,l=f?s:s&&s.withoutSetter||u;t.exports=function(t){if(!i(a,t)||!c&&"string"!=typeof a[t]){var n="Symbol."+t;c&&i(s,t)?a[t]=s[t]:a[t]=f&&p?p(n):l(n)}return a[t]}},1361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},4678:function(t,n,r){var e=r(2109),o=r(2814);e({global:!0,forced:parseFloat!=o},{parseFloat:o})}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,{a:n}),n},r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){"use strict";r(4678),AFRAME.registerComponent("box",{init:function(){var t=this;this.el.addEventListener("click",(function(){liff.init({liffId:"1656788750-0YlgEZw2"}).then((function(){alert(liff.getProfile().displayName)})).catch((function(t){alert(t)}))}),!1),this.el.addEventListener("raycaster-intersected",(function(){console.log(t),t.el.setAttribute("color","#0000FF")}),!1),this.el.addEventListener("raycaster-intersected-cleared",(function(){t.el.setAttribute("color","#FFFFFF")}),!1)}}),AFRAME.registerComponent("apple",{init:function(){var t=this;this.el.addEventListener("click",(function(){t.el.setAttribute("visible",!1)}),!1)}}),AFRAME.registerComponent("cage",{init:function(){this.el.addEventListener("click",(function(){console.log("clicked")}),!1)}}),document.addEventListener("load",(function(){"ios"===liff.getOS()&&parseFloat(liff.getLineVersion())<14.3&&liff.openWindow({url:"https://www.google.com/",external:!0}),liff.init({liffId:"1656788750-0YlgEZw2"}).then((function(){alert(liff.getProfile().displayName)})).catch((function(t){console.log(t)}))}))}()}();