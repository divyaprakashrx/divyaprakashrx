(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/@lottiefiles/react-lottie-player/dist/lottie-react.esm.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@lottiefiles/react-lottie-player/dist/lottie-react.esm.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controls": function() { return /* binding */ Controls; },
/* harmony export */   "Player": function() { return /* binding */ Player; },
/* harmony export */   "PlayerEvent": function() { return /* binding */ PlayerEvent; },
/* harmony export */   "PlayerState": function() { return /* binding */ PlayerState; },
/* harmony export */   "Seeker": function() { return /* binding */ Seeker; },
/* harmony export */   "parseSrc": function() { return /* binding */ parseSrc; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)};function __extends(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}extendStatics(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var __assign=function(){return(__assign=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)};function __rest(t,e){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(r[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(t);a<i.length;a++)e.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(t,i[a])&&(r[i[a]]=t[i[a]])}return r}function __decorate(t,e,r,i){var a,s=arguments.length,n=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,i);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(n=(s<3?a(n):s>3?a(e,r,n):a(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n}function __param(t,e){return function(r,i){e(r,i,t)}}function __metadata(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function __awaiter(t,e,r,i){return new(r||(r=Promise))((function(a,s){function n(t){try{h(i.next(t))}catch(t){s(t)}}function o(t){try{h(i.throw(t))}catch(t){s(t)}}function h(t){var e;t.done?a(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(n,o)}h((i=i.apply(t,e||[])).next())}))}function __generator(t,e){var r,i,a,s,n={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=2&s[0]?i.return:s[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;switch(i=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,i=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if(!(a=n.trys,(a=a.length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){n=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){n.label=s[1];break}if(6===s[0]&&n.label<a[1]){n.label=a[1],a=s;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(s);break}a[2]&&n.ops.pop(),n.trys.pop();continue}s=e.call(t,n)}catch(t){s=[6,t],i=0}finally{r=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}}var __createBinding=Object.create?function(t,e,r,i){void 0===i&&(i=r),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,i){void 0===i&&(i=r),t[i]=e[r]};function __exportStar(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||__createBinding(e,t,r)}function __values(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],i=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var i,a,s=r.call(t),n=[];try{for(;(void 0===e||e-- >0)&&!(i=s.next()).done;)n.push(i.value)}catch(t){a={error:t}}finally{try{i&&!i.done&&(r=s.return)&&r.call(s)}finally{if(a)throw a.error}}return n}function __spread(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(__read(arguments[e]));return t}function __spreadArrays(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var i=Array(t),a=0;for(e=0;e<r;e++)for(var s=arguments[e],n=0,o=s.length;n<o;n++,a++)i[a]=s[n];return i}function __spreadArray(t,e){for(var r=0,i=e.length,a=t.length;r<i;r++,a++)t[a]=e[r];return t}function __await(t){return this instanceof __await?(this.v=t,this):new __await(t)}function __asyncGenerator(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,a=r.apply(t,e||[]),s=[];return i={},n("next"),n("throw"),n("return"),i[Symbol.asyncIterator]=function(){return this},i;function n(t){a[t]&&(i[t]=function(e){return new Promise((function(r,i){s.push([t,e,r,i])>1||o(t,e)}))})}function o(t,e){try{(r=a[t](e)).value instanceof __await?Promise.resolve(r.value.v).then(h,l):p(s[0][2],r)}catch(t){p(s[0][3],t)}var r}function h(t){o("next",t)}function l(t){o("throw",t)}function p(t,e){t(e),s.shift(),s.length&&o(s[0][0],s[0][1])}}function __asyncDelegator(t){var e,r;return e={},i("next"),i("throw",(function(t){throw t})),i("return"),e[Symbol.iterator]=function(){return this},e;function i(i,a){e[i]=t[i]?function(e){return(r=!r)?{value:__await(t[i](e)),done:"return"===i}:a?a(e):e}:a}}function __asyncValues(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,r=t[Symbol.asyncIterator];return r?r.call(t):(t="function"==typeof __values?__values(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(r){e[r]=t[r]&&function(e){return new Promise((function(i,a){(function(t,e,r,i){Promise.resolve(i).then((function(e){t({value:e,done:r})}),e)})(i,a,(e=t[r](e)).done,e.value)}))}}}function __makeTemplateObject(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}var __setModuleDefault=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e};function __importStar(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&__createBinding(e,t,r);return __setModuleDefault(e,t),e}function __importDefault(t){return t&&t.__esModule?t:{default:t}}function __classPrivateFieldGet(t,e,r,i){if("a"===r&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(t):i?i.value:e.get(t)}function __classPrivateFieldSet(t,e,r,i,a){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!a)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!a:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?a.call(t,r):a?a.value=r:e.set(t,r),r}var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function unwrapExports(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function createCommonjsModule(t,e){return t(e={exports:{}},e.exports),e.exports}function getCjsExportFromNamespace(t){return t&&t.default||t}function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var lottie=createCommonjsModule((function(module){"undefined"!=typeof navigator&&function(t,e){module.exports?module.exports=e(t):(t.lottie=e(t),t.bodymovin=t.lottie)}(window||{},(function(window){var svgNS="http://www.w3.org/2000/svg",locationHref="",initialDefaultFrame=-999999,subframeEnabled=!0,expressionsPlugin,isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),cachedColors={},bmRnd,bmPow=Math.pow,bmSqrt=Math.sqrt,bmFloor=Math.floor,bmMax=Math.max,bmMin=Math.min,BMMath={};function ProjectInterface(){return{}}!function(){var t,e=["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2"],r=e.length;for(t=0;t<r;t+=1)BMMath[e[t]]=Math[e[t]]}(),BMMath.random=Math.random,BMMath.abs=function(t){if("object"===typeof t&&t.length){var e,r=createSizedArray(t.length),i=t.length;for(e=0;e<i;e+=1)r[e]=Math.abs(t[e]);return r}return Math.abs(t)};var defaultCurveSegments=150,degToRads=Math.PI/180,roundCorner=.5519;function roundValues(t){bmRnd=t?Math.round:function(t){return t}}function styleDiv(t){t.style.position="absolute",t.style.top=0,t.style.left=0,t.style.display="block",t.style.transformOrigin="0 0",t.style.webkitTransformOrigin="0 0",t.style.backfaceVisibility="visible",t.style.webkitBackfaceVisibility="visible",t.style.transformStyle="preserve-3d",t.style.webkitTransformStyle="preserve-3d",t.style.mozTransformStyle="preserve-3d"}function BMEnterFrameEvent(t,e,r,i){this.type=t,this.currentTime=e,this.totalTime=r,this.direction=i<0?-1:1}function BMCompleteEvent(t,e){this.type=t,this.direction=e<0?-1:1}function BMCompleteLoopEvent(t,e,r,i){this.type=t,this.currentLoop=r,this.totalLoops=e,this.direction=i<0?-1:1}function BMSegmentStartEvent(t,e,r){this.type=t,this.firstFrame=e,this.totalFrames=r}function BMDestroyEvent(t,e){this.type=t,this.target=e}function BMRenderFrameErrorEvent(t,e){this.type="renderFrameError",this.nativeError=t,this.currentTime=e}function BMConfigErrorEvent(t){this.type="configError",this.nativeError=t}function BMAnimationConfigErrorEvent(t,e){this.type=t,this.nativeError=e}roundValues(!1);var createElementID=(_count=0,function(){return"__lottie_element_"+(_count+=1)}),_count;function HSVtoRGB(t,e,r){var i,a,s,n,o,h,l,p;switch(h=r*(1-e),l=r*(1-(o=6*t-(n=Math.floor(6*t)))*e),p=r*(1-(1-o)*e),n%6){case 0:i=r,a=p,s=h;break;case 1:i=l,a=r,s=h;break;case 2:i=h,a=r,s=p;break;case 3:i=h,a=l,s=r;break;case 4:i=p,a=h,s=r;break;case 5:i=r,a=h,s=l}return[i,a,s]}function RGBtoHSV(t,e,r){var i,a=Math.max(t,e,r),s=Math.min(t,e,r),n=a-s,o=0===a?0:n/a,h=a/255;switch(a){case s:i=0;break;case t:i=e-r+n*(e<r?6:0),i/=6*n;break;case e:i=r-t+2*n,i/=6*n;break;case r:i=t-e+4*n,i/=6*n}return[i,o,h]}function addSaturationToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[1]+=e,r[1]>1?r[1]=1:r[1]<=0&&(r[1]=0),HSVtoRGB(r[0],r[1],r[2])}function addBrightnessToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[2]+=e,r[2]>1?r[2]=1:r[2]<0&&(r[2]=0),HSVtoRGB(r[0],r[1],r[2])}function addHueToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[0]+=e/360,r[0]>1?r[0]-=1:r[0]<0&&(r[0]+=1),HSVtoRGB(r[0],r[1],r[2])}var rgbToHex=function(){var t,e,r=[];for(t=0;t<256;t+=1)e=t.toString(16),r[t]=1===e.length?"0"+e:e;return function(t,e,i){return t<0&&(t=0),e<0&&(e=0),i<0&&(i=0),"#"+r[t]+r[e]+r[i]}}();function BaseEvent(){}BaseEvent.prototype={triggerEvent:function(t,e){if(this._cbs[t])for(var r=this._cbs[t].length,i=0;i<r;i+=1)this._cbs[t][i](e)},addEventListener:function(t,e){return this._cbs[t]||(this._cbs[t]=[]),this._cbs[t].push(e),function(){this.removeEventListener(t,e)}.bind(this)},removeEventListener:function(t,e){if(e){if(this._cbs[t]){for(var r=0,i=this._cbs[t].length;r<i;)this._cbs[t][r]===e&&(this._cbs[t].splice(r,1),r-=1,i-=1),r+=1;this._cbs[t].length||(this._cbs[t]=null)}}else this._cbs[t]=null}};var createTypedArray=function(){function t(t,e){var r,i=0,a=[];switch(t){case"int16":case"uint8c":r=1;break;default:r=1.1}for(i=0;i<e;i+=1)a.push(r);return a}return"function"==typeof Uint8ClampedArray&&"function"==typeof Float32Array?function(e,r){return"float32"===e?new Float32Array(r):"int16"===e?new Int16Array(r):"uint8c"===e?new Uint8ClampedArray(r):t(e,r)}:t}();function createSizedArray(t){return Array.apply(null,{length:t})}function createNS(t){return document.createElementNS(svgNS,t)}function createTag(t){return document.createElement(t)}function DynamicPropertyContainer(){}DynamicPropertyContainer.prototype={addDynamicProperty:function(t){-1===this.dynamicProperties.indexOf(t)&&(this.dynamicProperties.push(t),this.container.addDynamicProperty(this),this._isAnimated=!0)},iterateDynamicProperties:function(){var t;this._mdf=!1;var e=this.dynamicProperties.length;for(t=0;t<e;t+=1)this.dynamicProperties[t].getValue(),this.dynamicProperties[t]._mdf&&(this._mdf=!0)},initDynamicPropertyContainer:function(t){this.container=t,this.dynamicProperties=[],this._mdf=!1,this._isAnimated=!1}};var getBlendMode=(blendModeEnums={0:"source-over",1:"multiply",2:"screen",3:"overlay",4:"darken",5:"lighten",6:"color-dodge",7:"color-burn",8:"hard-light",9:"soft-light",10:"difference",11:"exclusion",12:"hue",13:"saturation",14:"color",15:"luminosity"},function(t){return blendModeEnums[t]||""}),blendModeEnums,Matrix=function(){var t=Math.cos,e=Math.sin,r=Math.tan,i=Math.round;function a(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function s(r){if(0===r)return this;var i=t(r),a=e(r);return this._t(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1)}function n(r){if(0===r)return this;var i=t(r),a=e(r);return this._t(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1)}function o(r){if(0===r)return this;var i=t(r),a=e(r);return this._t(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1)}function h(r){if(0===r)return this;var i=t(r),a=e(r);return this._t(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1)}function l(t,e){return this._t(1,e,t,1,0,0)}function p(t,e){return this.shear(r(t),r(e))}function f(i,a){var s=t(a),n=e(a);return this._t(s,n,0,0,-n,s,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,r(i),1,0,0,0,0,1,0,0,0,0,1)._t(s,-n,0,0,n,s,0,0,0,0,1,0,0,0,0,1)}function c(t,e,r){return r||0===r||(r=1),1===t&&1===e&&1===r?this:this._t(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1)}function m(t,e,r,i,a,s,n,o,h,l,p,f,c,m,d,u){return this.props[0]=t,this.props[1]=e,this.props[2]=r,this.props[3]=i,this.props[4]=a,this.props[5]=s,this.props[6]=n,this.props[7]=o,this.props[8]=h,this.props[9]=l,this.props[10]=p,this.props[11]=f,this.props[12]=c,this.props[13]=m,this.props[14]=d,this.props[15]=u,this}function d(t,e,r){return r=r||0,0!==t||0!==e||0!==r?this._t(1,0,0,0,0,1,0,0,0,0,1,0,t,e,r,1):this}function u(t,e,r,i,a,s,n,o,h,l,p,f,c,m,d,u){var y=this.props;if(1===t&&0===e&&0===r&&0===i&&0===a&&1===s&&0===n&&0===o&&0===h&&0===l&&1===p&&0===f)return y[12]=y[12]*t+y[15]*c,y[13]=y[13]*s+y[15]*m,y[14]=y[14]*p+y[15]*d,y[15]*=u,this._identityCalculated=!1,this;var g=y[0],v=y[1],b=y[2],x=y[3],E=y[4],P=y[5],S=y[6],C=y[7],_=y[8],A=y[9],k=y[10],T=y[11],w=y[12],D=y[13],M=y[14],F=y[15];return y[0]=g*t+v*a+b*h+x*c,y[1]=g*e+v*s+b*l+x*m,y[2]=g*r+v*n+b*p+x*d,y[3]=g*i+v*o+b*f+x*u,y[4]=E*t+P*a+S*h+C*c,y[5]=E*e+P*s+S*l+C*m,y[6]=E*r+P*n+S*p+C*d,y[7]=E*i+P*o+S*f+C*u,y[8]=_*t+A*a+k*h+T*c,y[9]=_*e+A*s+k*l+T*m,y[10]=_*r+A*n+k*p+T*d,y[11]=_*i+A*o+k*f+T*u,y[12]=w*t+D*a+M*h+F*c,y[13]=w*e+D*s+M*l+F*m,y[14]=w*r+D*n+M*p+F*d,y[15]=w*i+D*o+M*f+F*u,this._identityCalculated=!1,this}function y(){return this._identityCalculated||(this._identity=!(1!==this.props[0]||0!==this.props[1]||0!==this.props[2]||0!==this.props[3]||0!==this.props[4]||1!==this.props[5]||0!==this.props[6]||0!==this.props[7]||0!==this.props[8]||0!==this.props[9]||1!==this.props[10]||0!==this.props[11]||0!==this.props[12]||0!==this.props[13]||0!==this.props[14]||1!==this.props[15]),this._identityCalculated=!0),this._identity}function g(t){for(var e=0;e<16;){if(t.props[e]!==this.props[e])return!1;e+=1}return!0}function v(t){var e;for(e=0;e<16;e+=1)t.props[e]=this.props[e];return t}function b(t){var e;for(e=0;e<16;e+=1)this.props[e]=t[e]}function x(t,e,r){return{x:t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12],y:t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13],z:t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]}}function E(t,e,r){return t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12]}function P(t,e,r){return t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13]}function S(t,e,r){return t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]}function C(){var t=this.props[0]*this.props[5]-this.props[1]*this.props[4],e=this.props[5]/t,r=-this.props[1]/t,i=-this.props[4]/t,a=this.props[0]/t,s=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/t,n=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/t,o=new Matrix;return o.props[0]=e,o.props[1]=r,o.props[4]=i,o.props[5]=a,o.props[12]=s,o.props[13]=n,o}function _(t){return this.getInverseMatrix().applyToPointArray(t[0],t[1],t[2]||0)}function A(t){var e,r=t.length,i=[];for(e=0;e<r;e+=1)i[e]=_(t[e]);return i}function k(t,e,r){var i=createTypedArray("float32",6);if(this.isIdentity())i[0]=t[0],i[1]=t[1],i[2]=e[0],i[3]=e[1],i[4]=r[0],i[5]=r[1];else{var a=this.props[0],s=this.props[1],n=this.props[4],o=this.props[5],h=this.props[12],l=this.props[13];i[0]=t[0]*a+t[1]*n+h,i[1]=t[0]*s+t[1]*o+l,i[2]=e[0]*a+e[1]*n+h,i[3]=e[0]*s+e[1]*o+l,i[4]=r[0]*a+r[1]*n+h,i[5]=r[0]*s+r[1]*o+l}return i}function T(t,e,r){return this.isIdentity()?[t,e,r]:[t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12],t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13],t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]]}function w(t,e){if(this.isIdentity())return t+","+e;var r=this.props;return Math.round(100*(t*r[0]+e*r[4]+r[12]))/100+","+Math.round(100*(t*r[1]+e*r[5]+r[13]))/100}function D(){for(var t=0,e=this.props,r="matrix3d(";t<16;)r+=i(1e4*e[t])/1e4,r+=15===t?")":",",t+=1;return r}function M(t){return t<1e-6&&t>0||t>-1e-6&&t<0?i(1e4*t)/1e4:t}function F(){var t=this.props;return"matrix("+M(t[0])+","+M(t[1])+","+M(t[4])+","+M(t[5])+","+M(t[12])+","+M(t[13])+")"}return function(){this.reset=a,this.rotate=s,this.rotateX=n,this.rotateY=o,this.rotateZ=h,this.skew=p,this.skewFromAxis=f,this.shear=l,this.scale=c,this.setTransform=m,this.translate=d,this.transform=u,this.applyToPoint=x,this.applyToX=E,this.applyToY=P,this.applyToZ=S,this.applyToPointArray=T,this.applyToTriplePoints=k,this.applyToPointStringified=w,this.toCSS=D,this.to2dCSS=F,this.clone=v,this.cloneFromProps=b,this.equals=g,this.inversePoints=A,this.inversePoint=_,this.getInverseMatrix=C,this._t=this.transform,this.isIdentity=y,this._identity=!0,this._identityCalculated=!1,this.props=createTypedArray("float32",16),this.reset()}}();
/*!
 Transformation Matrix v2.0
 (c) Epistemex 2014-2015
 www.epistemex.com
 By Ken Fyrstenberg
 Contributions by leeoniya.
 License: MIT, header required.
 */!function(t,e){var r=this,i=e.pow(256,6),a=e.pow(2,52),s=2*a;function n(t){var e,r=t.length,i=this,a=0,s=i.i=i.j=0,n=i.S=[];for(r||(t=[r++]);a<256;)n[a]=a++;for(a=0;a<256;a++)n[a]=n[s=255&s+t[a%r]+(e=n[a])],n[s]=e;i.g=function(t){for(var e,r=0,a=i.i,s=i.j,n=i.S;t--;)e=n[a=255&a+1],r=256*r+n[255&(n[a]=n[s=255&s+e])+(n[s]=e)];return i.i=a,i.j=s,r}}function o(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function h(t,e){for(var r,i=t+"",a=0;a<i.length;)e[255&a]=255&(r^=19*e[255&a])+i.charCodeAt(a++);return l(e)}function l(t){return String.fromCharCode.apply(0,t)}e.seedrandom=function(p,f,c){var m=[],d=h(function t(e,r){var i,a=[],s=typeof e;if(r&&"object"==s)for(i in e)try{a.push(t(e[i],r-1))}catch(t){}return a.length?a:"string"==s?e:e+"\0"}((f=!0===f?{entropy:!0}:f||{}).entropy?[p,l(t)]:null===p?function(){try{void 0;var e=new Uint8Array(256);return(r.crypto||r.msCrypto).getRandomValues(e),l(e)}catch(e){var i=r.navigator,a=i&&i.plugins;return[+new Date,r,a,r.screen,l(t)]}}():p,3),m),u=new n(m),y=function(){for(var t=u.g(6),e=i,r=0;t<a;)t=256*(t+r),e*=256,r=u.g(1);for(;t>=s;)t/=2,e/=2,r>>>=1;return(t+r)/e};return y.int32=function(){return 0|u.g(4)},y.quick=function(){return u.g(4)/4294967296},y.double=y,h(l(u.S),t),(f.pass||c||function(t,r,i,a){return a&&(a.S&&o(a,u),t.state=function(){return o(u,{})}),i?(e.random=t,r):t})(y,d,"global"in f?f.global:this==e,f.state)},h(e.random(),t)}([],BMMath);var BezierFactory=function(){var t={getBezierEasing:function(t,r,i,a,s){var n=s||("bez_"+t+"_"+r+"_"+i+"_"+a).replace(/\./g,"p");if(e[n])return e[n];var o=new h([t,r,i,a]);return e[n]=o,o}},e={};var r="function"==typeof Float32Array;function i(t,e){return 1-3*e+3*t}function a(t,e){return 3*e-6*t}function s(t){return 3*t}function n(t,e,r){return((i(e,r)*t+a(e,r))*t+s(e))*t}function o(t,e,r){return 3*i(e,r)*t*t+2*a(e,r)*t+s(e)}function h(t){this._p=t,this._mSampleValues=r?new Float32Array(11):new Array(11),this._precomputed=!1,this.get=this.get.bind(this)}return h.prototype={get:function(t){var e=this._p[0],r=this._p[1],i=this._p[2],a=this._p[3];return this._precomputed||this._precompute(),e===r&&i===a?t:0===t?0:1===t?1:n(this._getTForX(t),r,a)},_precompute:function(){var t=this._p[0],e=this._p[1],r=this._p[2],i=this._p[3];this._precomputed=!0,t===e&&r===i||this._calcSampleValues()},_calcSampleValues:function(){for(var t=this._p[0],e=this._p[2],r=0;r<11;++r)this._mSampleValues[r]=n(.1*r,t,e)},_getTForX:function(t){for(var e=this._p[0],r=this._p[2],i=this._mSampleValues,a=0,s=1;10!==s&&i[s]<=t;++s)a+=.1;var h=a+.1*((t-i[--s])/(i[s+1]-i[s])),l=o(h,e,r);return l>=.001?function(t,e,r,i){for(var a=0;a<4;++a){var s=o(e,r,i);if(0===s)return e;e-=(n(e,r,i)-t)/s}return e}(t,h,e,r):0===l?h:function(t,e,r,i,a){var s,o,h=0;do{(s=n(o=e+(r-e)/2,i,a)-t)>0?r=o:e=o}while(Math.abs(s)>1e-7&&++h<10);return o}(t,a,a+.1,e,r)}},t}();function extendPrototype(t,e){var r,i,a=t.length;for(r=0;r<a;r+=1)for(var s in i=t[r].prototype)Object.prototype.hasOwnProperty.call(i,s)&&(e.prototype[s]=i[s])}function getDescriptor(t,e){return Object.getOwnPropertyDescriptor(t,e)}function createProxyFunction(t){function e(){}return e.prototype=t,e}function bezFunction(){var t=Math;function e(t,e,r,i,a,s){var n=t*i+e*a+r*s-a*i-s*t-r*e;return n>-.001&&n<.001}var r=function(t,e,r,i){var a,s,n,o,h,l,p=defaultCurveSegments,f=0,c=[],m=[],d=bezierLengthPool.newElement();for(n=r.length,a=0;a<p;a+=1){for(h=a/(p-1),l=0,s=0;s<n;s+=1)o=bmPow(1-h,3)*t[s]+3*bmPow(1-h,2)*h*r[s]+3*(1-h)*bmPow(h,2)*i[s]+bmPow(h,3)*e[s],c[s]=o,null!==m[s]&&(l+=bmPow(c[s]-m[s],2)),m[s]=c[s];l&&(f+=l=bmSqrt(l)),d.percents[a]=h,d.lengths[a]=f}return d.addedLength=f,d};function i(t){this.segmentLength=0,this.points=new Array(t)}function a(t,e){this.partialLength=t,this.point=e}var s,n=(s={},function(t,r,n,o){var h=(t[0]+"_"+t[1]+"_"+r[0]+"_"+r[1]+"_"+n[0]+"_"+n[1]+"_"+o[0]+"_"+o[1]).replace(/\./g,"p");if(!s[h]){var l,p,f,c,m,d,u,y=defaultCurveSegments,g=0,v=null;2===t.length&&(t[0]!==r[0]||t[1]!==r[1])&&e(t[0],t[1],r[0],r[1],t[0]+n[0],t[1]+n[1])&&e(t[0],t[1],r[0],r[1],r[0]+o[0],r[1]+o[1])&&(y=2);var b=new i(y);for(f=n.length,l=0;l<y;l+=1){for(u=createSizedArray(f),m=l/(y-1),d=0,p=0;p<f;p+=1)c=bmPow(1-m,3)*t[p]+3*bmPow(1-m,2)*m*(t[p]+n[p])+3*(1-m)*bmPow(m,2)*(r[p]+o[p])+bmPow(m,3)*r[p],u[p]=c,null!==v&&(d+=bmPow(u[p]-v[p],2));g+=d=bmSqrt(d),b.points[l]=new a(d,u),v=u}b.segmentLength=g,s[h]=b}return s[h]});function o(t,e){var r=e.percents,i=e.lengths,a=r.length,s=bmFloor((a-1)*t),n=t*e.addedLength,o=0;if(s===a-1||0===s||n===i[s])return r[s];for(var h=i[s]>n?-1:1,l=!0;l;)if(i[s]<=n&&i[s+1]>n?(o=(n-i[s])/(i[s+1]-i[s]),l=!1):s+=h,s<0||s>=a-1){if(s===a-1)return r[s];l=!1}return r[s]+(r[s+1]-r[s])*o}var h=createTypedArray("float32",8);return{getSegmentsLength:function(t){var e,i=segmentsLengthPool.newElement(),a=t.c,s=t.v,n=t.o,o=t.i,h=t._length,l=i.lengths,p=0;for(e=0;e<h-1;e+=1)l[e]=r(s[e],s[e+1],n[e],o[e+1]),p+=l[e].addedLength;return a&&h&&(l[e]=r(s[e],s[0],n[e],o[0]),p+=l[e].addedLength),i.totalLength=p,i},getNewSegment:function(e,r,i,a,s,n,l){s<0?s=0:s>1&&(s=1);var p,f=o(s,l),c=o(n=n>1?1:n,l),m=e.length,d=1-f,u=1-c,y=d*d*d,g=f*d*d*3,v=f*f*d*3,b=f*f*f,x=d*d*u,E=f*d*u+d*f*u+d*d*c,P=f*f*u+d*f*c+f*d*c,S=f*f*c,C=d*u*u,_=f*u*u+d*c*u+d*u*c,A=f*c*u+d*c*c+f*u*c,k=f*c*c,T=u*u*u,w=c*u*u+u*c*u+u*u*c,D=c*c*u+u*c*c+c*u*c,M=c*c*c;for(p=0;p<m;p+=1)h[4*p]=t.round(1e3*(y*e[p]+g*i[p]+v*a[p]+b*r[p]))/1e3,h[4*p+1]=t.round(1e3*(x*e[p]+E*i[p]+P*a[p]+S*r[p]))/1e3,h[4*p+2]=t.round(1e3*(C*e[p]+_*i[p]+A*a[p]+k*r[p]))/1e3,h[4*p+3]=t.round(1e3*(T*e[p]+w*i[p]+D*a[p]+M*r[p]))/1e3;return h},getPointInSegment:function(e,r,i,a,s,n){var h=o(s,n),l=1-h;return[t.round(1e3*(l*l*l*e[0]+(h*l*l+l*h*l+l*l*h)*i[0]+(h*h*l+l*h*h+h*l*h)*a[0]+h*h*h*r[0]))/1e3,t.round(1e3*(l*l*l*e[1]+(h*l*l+l*h*l+l*l*h)*i[1]+(h*h*l+l*h*h+h*l*h)*a[1]+h*h*h*r[1]))/1e3]},buildBezierData:n,pointOnLine2D:e,pointOnLine3D:function(r,i,a,s,n,o,h,l,p){if(0===a&&0===o&&0===p)return e(r,i,s,n,h,l);var f,c=t.sqrt(t.pow(s-r,2)+t.pow(n-i,2)+t.pow(o-a,2)),m=t.sqrt(t.pow(h-r,2)+t.pow(l-i,2)+t.pow(p-a,2)),d=t.sqrt(t.pow(h-s,2)+t.pow(l-n,2)+t.pow(p-o,2));return(f=c>m?c>d?c-m-d:d-m-c:d>m?d-m-c:m-c-d)>-1e-4&&f<1e-4}}}!function(){for(var t=0,e=["ms","moz","webkit","o"],r=0;r<e.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[e[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[r]+"CancelAnimationFrame"]||window[e[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e){var r=(new Date).getTime(),i=Math.max(0,16-(r-t)),a=setTimeout((function(){e(r+i)}),i);return t=r+i,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();var bez=bezFunction();function dataFunctionManager(){function t(a,s,n){var o,h,l,f,c,m,d=a.length;for(h=0;h<d;h+=1)if("ks"in(o=a[h])&&!o.completed){if(o.completed=!0,o.tt&&(a[h-1].td=o.tt),o.hasMask){var u=o.masksProperties;for(f=u.length,l=0;l<f;l+=1)if(u[l].pt.k.i)i(u[l].pt.k);else for(m=u[l].pt.k.length,c=0;c<m;c+=1)u[l].pt.k[c].s&&i(u[l].pt.k[c].s[0]),u[l].pt.k[c].e&&i(u[l].pt.k[c].e[0])}0===o.ty?(o.layers=e(o.refId,s),t(o.layers,s,n)):4===o.ty?r(o.shapes):5===o.ty&&p(o)}}function e(t,e){for(var r=0,i=e.length;r<i;){if(e[r].id===t)return e[r].layers.__used?JSON.parse(JSON.stringify(e[r].layers)):(e[r].layers.__used=!0,e[r].layers);r+=1}return null}function r(t){var e,a,s;for(e=t.length-1;e>=0;e-=1)if("sh"===t[e].ty)if(t[e].ks.k.i)i(t[e].ks.k);else for(s=t[e].ks.k.length,a=0;a<s;a+=1)t[e].ks.k[a].s&&i(t[e].ks.k[a].s[0]),t[e].ks.k[a].e&&i(t[e].ks.k[a].e[0]);else"gr"===t[e].ty&&r(t[e].it)}function i(t){var e,r=t.i.length;for(e=0;e<r;e+=1)t.i[e][0]+=t.v[e][0],t.i[e][1]+=t.v[e][1],t.o[e][0]+=t.v[e][0],t.o[e][1]+=t.v[e][1]}function a(t,e){var r=e?e.split("."):[100,100,100];return t[0]>r[0]||!(r[0]>t[0])&&(t[1]>r[1]||!(r[1]>t[1])&&(t[2]>r[2]||!(r[2]>t[2])&&null))}var s,n=function(){var t=[4,4,14];function e(t){var e,r,i,a=t.length;for(e=0;e<a;e+=1)5===t[e].ty&&(r=t[e],i=void 0,i=r.t.d,r.t.d={k:[{s:i,t:0}]})}return function(r){if(a(t,r.v)&&(e(r.layers),r.assets)){var i,s=r.assets.length;for(i=0;i<s;i+=1)r.assets[i].layers&&e(r.assets[i].layers)}}}(),o=(s=[4,7,99],function(t){if(t.chars&&!a(s,t.v)){var e,r,n,o,h,l=t.chars.length;for(e=0;e<l;e+=1)if(t.chars[e].data&&t.chars[e].data.shapes)for(n=(h=t.chars[e].data.shapes[0].it).length,r=0;r<n;r+=1)(o=h[r].ks.k).__converted||(i(h[r].ks.k),o.__converted=!0)}}),h=function(){var t=[4,1,9];function e(t){var r,i,a,s=t.length;for(r=0;r<s;r+=1)if("gr"===t[r].ty)e(t[r].it);else if("fl"===t[r].ty||"st"===t[r].ty)if(t[r].c.k&&t[r].c.k[0].i)for(a=t[r].c.k.length,i=0;i<a;i+=1)t[r].c.k[i].s&&(t[r].c.k[i].s[0]/=255,t[r].c.k[i].s[1]/=255,t[r].c.k[i].s[2]/=255,t[r].c.k[i].s[3]/=255),t[r].c.k[i].e&&(t[r].c.k[i].e[0]/=255,t[r].c.k[i].e[1]/=255,t[r].c.k[i].e[2]/=255,t[r].c.k[i].e[3]/=255);else t[r].c.k[0]/=255,t[r].c.k[1]/=255,t[r].c.k[2]/=255,t[r].c.k[3]/=255}function r(t){var r,i=t.length;for(r=0;r<i;r+=1)4===t[r].ty&&e(t[r].shapes)}return function(e){if(a(t,e.v)&&(r(e.layers),e.assets)){var i,s=e.assets.length;for(i=0;i<s;i+=1)e.assets[i].layers&&r(e.assets[i].layers)}}}(),l=function(){var t=[4,4,18];function e(t){var r,i,a;for(r=t.length-1;r>=0;r-=1)if("sh"===t[r].ty)if(t[r].ks.k.i)t[r].ks.k.c=t[r].closed;else for(a=t[r].ks.k.length,i=0;i<a;i+=1)t[r].ks.k[i].s&&(t[r].ks.k[i].s[0].c=t[r].closed),t[r].ks.k[i].e&&(t[r].ks.k[i].e[0].c=t[r].closed);else"gr"===t[r].ty&&e(t[r].it)}function r(t){var r,i,a,s,n,o,h=t.length;for(i=0;i<h;i+=1){if((r=t[i]).hasMask){var l=r.masksProperties;for(s=l.length,a=0;a<s;a+=1)if(l[a].pt.k.i)l[a].pt.k.c=l[a].cl;else for(o=l[a].pt.k.length,n=0;n<o;n+=1)l[a].pt.k[n].s&&(l[a].pt.k[n].s[0].c=l[a].cl),l[a].pt.k[n].e&&(l[a].pt.k[n].e[0].c=l[a].cl)}4===r.ty&&e(r.shapes)}}return function(e){if(a(t,e.v)&&(r(e.layers),e.assets)){var i,s=e.assets.length;for(i=0;i<s;i+=1)e.assets[i].layers&&r(e.assets[i].layers)}}}();function p(t){0!==t.t.a.length||"m"in t.t.p||(t.singleShape=!0)}var f={completeData:function(e,r){e.__complete||(h(e),n(e),o(e),l(e),t(e.layers,e.assets,r),e.__complete=!0)}};return f.checkColors=h,f.checkChars=o,f.checkShapes=l,f.completeLayers=t,f}var dataManager=dataFunctionManager();function getFontProperties(t){for(var e=t.fStyle?t.fStyle.split(" "):[],r="normal",i="normal",a=e.length,s=0;s<a;s+=1)switch(e[s].toLowerCase()){case"italic":i="italic";break;case"bold":r="700";break;case"black":r="900";break;case"medium":r="500";break;case"regular":case"normal":r="400";break;case"light":case"thin":r="200"}return{style:i,weight:t.fWeight||r}}var FontManager=function(){var t={w:0,size:0,shapes:[]},e=[];function r(t,e){var r=createTag("span");r.setAttribute("aria-hidden",!0),r.style.fontFamily=e;var i=createTag("span");i.innerText="giItT1WQy@!-/#",r.style.position="absolute",r.style.left="-10000px",r.style.top="-10000px",r.style.fontSize="300px",r.style.fontVariant="normal",r.style.fontStyle="normal",r.style.fontWeight="normal",r.style.letterSpacing="0",r.appendChild(i),document.body.appendChild(r);var a=i.offsetWidth;return i.style.fontFamily=function(t){var e,r=t.split(","),i=r.length,a=[];for(e=0;e<i;e+=1)"sans-serif"!==r[e]&&"monospace"!==r[e]&&a.push(r[e]);return a.join(",")}(t)+", "+e,{node:i,w:a,parent:r}}function i(t,e){var r=createNS("text");r.style.fontSize="100px";var i=getFontProperties(e);return r.setAttribute("font-family",e.fFamily),r.setAttribute("font-style",i.style),r.setAttribute("font-weight",i.weight),r.textContent="1",e.fClass?(r.style.fontFamily="inherit",r.setAttribute("class",e.fClass)):r.style.fontFamily=e.fFamily,t.appendChild(r),createTag("canvas").getContext("2d").font=e.fWeight+" "+e.fStyle+" 100px "+e.fFamily,r}e=e.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);var a=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.isLoaded=!1,this._warned=!1,this.initTime=Date.now(),this.setIsLoadedBinded=this.setIsLoaded.bind(this),this.checkLoadedFontsBinded=this.checkLoadedFonts.bind(this)};return a.getCombinedCharacterCodes=function(){return e},a.prototype={addChars:function(t){if(t){var e;this.chars||(this.chars=[]);var r,i,a=t.length,s=this.chars.length;for(e=0;e<a;e+=1){for(r=0,i=!1;r<s;)this.chars[r].style===t[e].style&&this.chars[r].fFamily===t[e].fFamily&&this.chars[r].ch===t[e].ch&&(i=!0),r+=1;i||(this.chars.push(t[e]),s+=1)}}},addFonts:function(t,e){if(t){if(this.chars)return this.isLoaded=!0,void(this.fonts=t.list);var a,s=t.list,n=s.length,o=n;for(a=0;a<n;a+=1){var h,l,p=!0;if(s[a].loaded=!1,s[a].monoCase=r(s[a].fFamily,"monospace"),s[a].sansCase=r(s[a].fFamily,"sans-serif"),s[a].fPath){if("p"===s[a].fOrigin||3===s[a].origin){if((h=document.querySelectorAll('style[f-forigin="p"][f-family="'+s[a].fFamily+'"], style[f-origin="3"][f-family="'+s[a].fFamily+'"]')).length>0&&(p=!1),p){var f=createTag("style");f.setAttribute("f-forigin",s[a].fOrigin),f.setAttribute("f-origin",s[a].origin),f.setAttribute("f-family",s[a].fFamily),f.type="text/css",f.innerText="@font-face {font-family: "+s[a].fFamily+"; font-style: normal; src: url('"+s[a].fPath+"');}",e.appendChild(f)}}else if("g"===s[a].fOrigin||1===s[a].origin){for(h=document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),l=0;l<h.length;l+=1)-1!==h[l].href.indexOf(s[a].fPath)&&(p=!1);if(p){var c=createTag("link");c.setAttribute("f-forigin",s[a].fOrigin),c.setAttribute("f-origin",s[a].origin),c.type="text/css",c.rel="stylesheet",c.href=s[a].fPath,document.body.appendChild(c)}}else if("t"===s[a].fOrigin||2===s[a].origin){for(h=document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),l=0;l<h.length;l+=1)s[a].fPath===h[l].src&&(p=!1);if(p){var m=createTag("link");m.setAttribute("f-forigin",s[a].fOrigin),m.setAttribute("f-origin",s[a].origin),m.setAttribute("rel","stylesheet"),m.setAttribute("href",s[a].fPath),e.appendChild(m)}}}else s[a].loaded=!0,o-=1;s[a].helper=i(e,s[a]),s[a].cache={},this.fonts.push(s[a])}0===o?this.isLoaded=!0:setTimeout(this.checkLoadedFonts.bind(this),100)}else this.isLoaded=!0},getCharData:function(e,r,i){for(var a=0,s=this.chars.length;a<s;){if(this.chars[a].ch===e&&this.chars[a].style===r&&this.chars[a].fFamily===i)return this.chars[a];a+=1}return("string"==typeof e&&13!==e.charCodeAt(0)||!e)&&console&&console.warn&&!this._warned&&(this._warned=!0),t},getFontByName:function(t){for(var e=0,r=this.fonts.length;e<r;){if(this.fonts[e].fName===t)return this.fonts[e];e+=1}return this.fonts[0]},measureText:function(t,e,r){var i=this.getFontByName(e),a=t.charCodeAt(0);if(!i.cache[a+1]){var s=i.helper;if(" "===t){s.textContent="|"+t+"|";var n=s.getComputedTextLength();s.textContent="||";var o=s.getComputedTextLength();i.cache[a+1]=(n-o)/100}else s.textContent=t,i.cache[a+1]=s.getComputedTextLength()/100}return i.cache[a+1]*r},checkLoadedFonts:function(){var t,e,r,i=this.fonts.length,a=i;for(t=0;t<i;t+=1)this.fonts[t].loaded?a-=1:"n"===this.fonts[t].fOrigin||0===this.fonts[t].origin?this.fonts[t].loaded=!0:(e=this.fonts[t].monoCase.node,r=this.fonts[t].monoCase.w,e.offsetWidth!==r?(a-=1,this.fonts[t].loaded=!0):(e=this.fonts[t].sansCase.node,r=this.fonts[t].sansCase.w,e.offsetWidth!==r&&(a-=1,this.fonts[t].loaded=!0)),this.fonts[t].loaded&&(this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent),this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));0!==a&&Date.now()-this.initTime<5e3?setTimeout(this.checkLoadedFontsBinded,20):setTimeout(this.setIsLoadedBinded,10)},setIsLoaded:function(){this.isLoaded=!0}},a}(),PropertyFactory=function(){var t=initialDefaultFrame,e=Math.abs;function r(t,e){var r,a=this.offsetTime;"multidimensional"===this.propType&&(r=createTypedArray("float32",this.pv.length));for(var s,n,o,h,l,p,f,c,m=e.lastIndex,d=m,u=this.keyframes.length-1,y=!0;y;){if(s=this.keyframes[d],n=this.keyframes[d+1],d===u-1&&t>=n.t-a){s.h&&(s=n),m=0;break}if(n.t-a>t){m=d;break}d<u-1?d+=1:(m=0,y=!1)}var g,v=n.t-a,b=s.t-a;if(s.to){s.bezierData||(s.bezierData=bez.buildBezierData(s.s,n.s||s.e,s.to,s.ti));var x=s.bezierData;if(t>=v||t<b){var E=t>=v?x.points.length-1:0;for(h=x.points[E].point.length,o=0;o<h;o+=1)r[o]=x.points[E].point[o]}else{s.__fnct?c=s.__fnct:(c=BezierFactory.getBezierEasing(s.o.x,s.o.y,s.i.x,s.i.y,s.n).get,s.__fnct=c),l=c((t-b)/(v-b));var P,S=x.segmentLength*l,C=e.lastFrame<t&&e._lastKeyframeIndex===d?e._lastAddedLength:0;for(f=e.lastFrame<t&&e._lastKeyframeIndex===d?e._lastPoint:0,y=!0,p=x.points.length;y;){if(C+=x.points[f].partialLength,0===S||0===l||f===x.points.length-1){for(h=x.points[f].point.length,o=0;o<h;o+=1)r[o]=x.points[f].point[o];break}if(S>=C&&S<C+x.points[f+1].partialLength){for(P=(S-C)/x.points[f+1].partialLength,h=x.points[f].point.length,o=0;o<h;o+=1)r[o]=x.points[f].point[o]+(x.points[f+1].point[o]-x.points[f].point[o])*P;break}f<p-1?f+=1:y=!1}e._lastPoint=f,e._lastAddedLength=C-x.points[f].partialLength,e._lastKeyframeIndex=d}}else{var _,A,k,T,w;if(u=s.s.length,g=n.s||s.e,this.sh&&1!==s.h)if(t>=v)r[0]=g[0],r[1]=g[1],r[2]=g[2];else if(t<=b)r[0]=s.s[0],r[1]=s.s[1],r[2]=s.s[2];else{!function(t,e){var r=e[0],i=e[1],a=e[2],s=e[3],n=Math.atan2(2*i*s-2*r*a,1-2*i*i-2*a*a),o=Math.asin(2*r*i+2*a*s),h=Math.atan2(2*r*s-2*i*a,1-2*r*r-2*a*a);t[0]=n/degToRads,t[1]=o/degToRads,t[2]=h/degToRads}(r,function(t,e,r){var i,a,s,n,o,h=[],l=t[0],p=t[1],f=t[2],c=t[3],m=e[0],d=e[1],u=e[2],y=e[3];(a=l*m+p*d+f*u+c*y)<0&&(a=-a,m=-m,d=-d,u=-u,y=-y);1-a>1e-6?(i=Math.acos(a),s=Math.sin(i),n=Math.sin((1-r)*i)/s,o=Math.sin(r*i)/s):(n=1-r,o=r);return h[0]=n*l+o*m,h[1]=n*p+o*d,h[2]=n*f+o*u,h[3]=n*c+o*y,h}(i(s.s),i(g),(t-b)/(v-b)))}else for(d=0;d<u;d+=1)1!==s.h&&(t>=v?l=1:t<b?l=0:(s.o.x.constructor===Array?(s.__fnct||(s.__fnct=[]),s.__fnct[d]?c=s.__fnct[d]:(_=void 0===s.o.x[d]?s.o.x[0]:s.o.x[d],A=void 0===s.o.y[d]?s.o.y[0]:s.o.y[d],k=void 0===s.i.x[d]?s.i.x[0]:s.i.x[d],T=void 0===s.i.y[d]?s.i.y[0]:s.i.y[d],c=BezierFactory.getBezierEasing(_,A,k,T).get,s.__fnct[d]=c)):s.__fnct?c=s.__fnct:(_=s.o.x,A=s.o.y,k=s.i.x,T=s.i.y,c=BezierFactory.getBezierEasing(_,A,k,T).get,s.__fnct=c),l=c((t-b)/(v-b)))),g=n.s||s.e,w=1===s.h?s.s[d]:s.s[d]+(g[d]-s.s[d])*l,"multidimensional"===this.propType?r[d]=w:r=w}return e.lastIndex=m,r}function i(t){var e=t[0]*degToRads,r=t[1]*degToRads,i=t[2]*degToRads,a=Math.cos(e/2),s=Math.cos(r/2),n=Math.cos(i/2),o=Math.sin(e/2),h=Math.sin(r/2),l=Math.sin(i/2);return[o*h*n+a*s*l,o*s*n+a*h*l,a*h*n-o*s*l,a*s*n-o*h*l]}function a(){var e=this.comp.renderedFrame-this.offsetTime,r=this.keyframes[0].t-this.offsetTime,i=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(e===this._caching.lastFrame||this._caching.lastFrame!==t&&(this._caching.lastFrame>=i&&e>=i||this._caching.lastFrame<r&&e<r))){this._caching.lastFrame>=e&&(this._caching._lastKeyframeIndex=-1,this._caching.lastIndex=0);var a=this.interpolateValue(e,this._caching);this.pv=a}return this._caching.lastFrame=e,this.pv}function s(t){var r;if("unidimensional"===this.propType)r=t*this.mult,e(this.v-r)>1e-5&&(this.v=r,this._mdf=!0);else for(var i=0,a=this.v.length;i<a;)r=t[i]*this.mult,e(this.v[i]-r)>1e-5&&(this.v[i]=r,this._mdf=!0),i+=1}function n(){if(this.elem.globalData.frameId!==this.frameId&&this.effectsSequence.length)if(this.lock)this.setVValue(this.pv);else{var t;this.lock=!0,this._mdf=this._isFirstFrame;var e=this.effectsSequence.length,r=this.kf?this.pv:this.data.k;for(t=0;t<e;t+=1)r=this.effectsSequence[t](r);this.setVValue(r),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}function o(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function h(t,e,r,i){this.propType="unidimensional",this.mult=r||1,this.data=e,this.v=r?e.k*r:e.k,this.pv=e.k,this._mdf=!1,this.elem=t,this.container=i,this.comp=t.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=n,this.setVValue=s,this.addEffect=o}function l(t,e,r,i){var a;this.propType="multidimensional",this.mult=r||1,this.data=e,this._mdf=!1,this.elem=t,this.container=i,this.comp=t.comp,this.k=!1,this.kf=!1,this.frameId=-1;var h=e.k.length;for(this.v=createTypedArray("float32",h),this.pv=createTypedArray("float32",h),this.vel=createTypedArray("float32",h),a=0;a<h;a+=1)this.v[a]=e.k[a]*this.mult,this.pv[a]=e.k[a];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=n,this.setVValue=s,this.addEffect=o}function p(e,i,h,l){this.propType="unidimensional",this.keyframes=i.k,this.offsetTime=e.data.st,this.frameId=-1,this._caching={lastFrame:t,lastIndex:0,value:0,_lastKeyframeIndex:-1},this.k=!0,this.kf=!0,this.data=i,this.mult=h||1,this.elem=e,this.container=l,this.comp=e.comp,this.v=t,this.pv=t,this._isFirstFrame=!0,this.getValue=n,this.setVValue=s,this.interpolateValue=r,this.effectsSequence=[a.bind(this)],this.addEffect=o}function f(e,i,h,l){var p;this.propType="multidimensional";var f,c,m,d,u=i.k.length;for(p=0;p<u-1;p+=1)i.k[p].to&&i.k[p].s&&i.k[p+1]&&i.k[p+1].s&&(f=i.k[p].s,c=i.k[p+1].s,m=i.k[p].to,d=i.k[p].ti,(2===f.length&&(f[0]!==c[0]||f[1]!==c[1])&&bez.pointOnLine2D(f[0],f[1],c[0],c[1],f[0]+m[0],f[1]+m[1])&&bez.pointOnLine2D(f[0],f[1],c[0],c[1],c[0]+d[0],c[1]+d[1])||3===f.length&&(f[0]!==c[0]||f[1]!==c[1]||f[2]!==c[2])&&bez.pointOnLine3D(f[0],f[1],f[2],c[0],c[1],c[2],f[0]+m[0],f[1]+m[1],f[2]+m[2])&&bez.pointOnLine3D(f[0],f[1],f[2],c[0],c[1],c[2],c[0]+d[0],c[1]+d[1],c[2]+d[2]))&&(i.k[p].to=null,i.k[p].ti=null),f[0]===c[0]&&f[1]===c[1]&&0===m[0]&&0===m[1]&&0===d[0]&&0===d[1]&&(2===f.length||f[2]===c[2]&&0===m[2]&&0===d[2])&&(i.k[p].to=null,i.k[p].ti=null));this.effectsSequence=[a.bind(this)],this.data=i,this.keyframes=i.k,this.offsetTime=e.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=h||1,this.elem=e,this.container=l,this.comp=e.comp,this.getValue=n,this.setVValue=s,this.interpolateValue=r,this.frameId=-1;var y=i.k[0].s.length;for(this.v=createTypedArray("float32",y),this.pv=createTypedArray("float32",y),p=0;p<y;p+=1)this.v[p]=t,this.pv[p]=t;this._caching={lastFrame:t,lastIndex:0,value:createTypedArray("float32",y)},this.addEffect=o}return{getProp:function(t,e,r,i,a){var s;if(e.k.length)if("number"==typeof e.k[0])s=new l(t,e,i,a);else switch(r){case 0:s=new p(t,e,i,a);break;case 1:s=new f(t,e,i,a)}else s=new h(t,e,i,a);return s.effectsSequence.length&&a.addDynamicProperty(s),s}}}(),TransformPropertyFactory=function(){var t=[0,0];function e(t,e,r){if(this.elem=t,this.frameId=-1,this.propType="transform",this.data=e,this.v=new Matrix,this.pre=new Matrix,this.appliedTransformations=0,this.initDynamicPropertyContainer(r||t),e.p&&e.p.s?(this.px=PropertyFactory.getProp(t,e.p.x,0,0,this),this.py=PropertyFactory.getProp(t,e.p.y,0,0,this),e.p.z&&(this.pz=PropertyFactory.getProp(t,e.p.z,0,0,this))):this.p=PropertyFactory.getProp(t,e.p||{k:[0,0,0]},1,0,this),e.rx){if(this.rx=PropertyFactory.getProp(t,e.rx,0,degToRads,this),this.ry=PropertyFactory.getProp(t,e.ry,0,degToRads,this),this.rz=PropertyFactory.getProp(t,e.rz,0,degToRads,this),e.or.k[0].ti){var i,a=e.or.k.length;for(i=0;i<a;i+=1)e.or.k[i].to=null,e.or.k[i].ti=null}this.or=PropertyFactory.getProp(t,e.or,1,degToRads,this),this.or.sh=!0}else this.r=PropertyFactory.getProp(t,e.r||{k:0},0,degToRads,this);e.sk&&(this.sk=PropertyFactory.getProp(t,e.sk,0,degToRads,this),this.sa=PropertyFactory.getProp(t,e.sa,0,degToRads,this)),this.a=PropertyFactory.getProp(t,e.a||{k:[0,0,0]},1,0,this),this.s=PropertyFactory.getProp(t,e.s||{k:[100,100,100]},1,.01,this),e.o?this.o=PropertyFactory.getProp(t,e.o,0,.01,t):this.o={_mdf:!1,v:1},this._isDirty=!0,this.dynamicProperties.length||this.getValue(!0)}return e.prototype={applyToMatrix:function(t){var e=this._mdf;this.iterateDynamicProperties(),this._mdf=this._mdf||e,this.a&&t.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&t.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&t.skewFromAxis(-this.sk.v,this.sa.v),this.r?t.rotate(-this.r.v):t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?t.translate(this.px.v,this.py.v,-this.pz.v):t.translate(this.px.v,this.py.v,0):t.translate(this.p.v[0],this.p.v[1],-this.p.v[2])},getValue:function(e){if(this.elem.globalData.frameId!==this.frameId){if(this._isDirty&&(this.precalculateMatrix(),this._isDirty=!1),this.iterateDynamicProperties(),this._mdf||e){var r;if(this.v.cloneFromProps(this.pre.props),this.appliedTransformations<1&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations<2&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.appliedTransformations<3&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r&&this.appliedTransformations<4?this.v.rotate(-this.r.v):!this.r&&this.appliedTransformations<4&&this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented){var i,a;if(r=this.elem.globalData.frameRate,this.p&&this.p.keyframes&&this.p.getValueAtTime)this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(i=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/r,0),a=this.p.getValueAtTime(this.p.keyframes[0].t/r,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(i=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/r,0),a=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.05)/r,0)):(i=this.p.pv,a=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/r,this.p.offsetTime));else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){i=[],a=[];var s=this.px,n=this.py;s._caching.lastFrame+s.offsetTime<=s.keyframes[0].t?(i[0]=s.getValueAtTime((s.keyframes[0].t+.01)/r,0),i[1]=n.getValueAtTime((n.keyframes[0].t+.01)/r,0),a[0]=s.getValueAtTime(s.keyframes[0].t/r,0),a[1]=n.getValueAtTime(n.keyframes[0].t/r,0)):s._caching.lastFrame+s.offsetTime>=s.keyframes[s.keyframes.length-1].t?(i[0]=s.getValueAtTime(s.keyframes[s.keyframes.length-1].t/r,0),i[1]=n.getValueAtTime(n.keyframes[n.keyframes.length-1].t/r,0),a[0]=s.getValueAtTime((s.keyframes[s.keyframes.length-1].t-.01)/r,0),a[1]=n.getValueAtTime((n.keyframes[n.keyframes.length-1].t-.01)/r,0)):(i=[s.pv,n.pv],a[0]=s.getValueAtTime((s._caching.lastFrame+s.offsetTime-.01)/r,s.offsetTime),a[1]=n.getValueAtTime((n._caching.lastFrame+n.offsetTime-.01)/r,n.offsetTime))}else i=a=t;this.v.rotate(-Math.atan2(i[1]-a[1],i[0]-a[0]))}this.data.p&&this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}},precalculateMatrix:function(){if(!this.a.k&&(this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations=1,!this.s.effectsSequence.length)){if(this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.appliedTransformations=2,this.sk){if(this.sk.effectsSequence.length||this.sa.effectsSequence.length)return;this.pre.skewFromAxis(-this.sk.v,this.sa.v),this.appliedTransformations=3}this.r?this.r.effectsSequence.length||(this.pre.rotate(-this.r.v),this.appliedTransformations=4):this.rz.effectsSequence.length||this.ry.effectsSequence.length||this.rx.effectsSequence.length||this.or.effectsSequence.length||(this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.appliedTransformations=4)}},autoOrient:function(){}},extendPrototype([DynamicPropertyContainer],e),e.prototype.addDynamicProperty=function(t){this._addDynamicProperty(t),this.elem.addDynamicProperty(t),this._isDirty=!0},e.prototype._addDynamicProperty=DynamicPropertyContainer.prototype.addDynamicProperty,{getTransformProperty:function(t,r,i){return new e(t,r,i)}}}();function ShapePath(){this.c=!1,this._length=0,this._maxLength=8,this.v=createSizedArray(this._maxLength),this.o=createSizedArray(this._maxLength),this.i=createSizedArray(this._maxLength)}ShapePath.prototype.setPathData=function(t,e){this.c=t,this.setLength(e);for(var r=0;r<e;)this.v[r]=pointPool.newElement(),this.o[r]=pointPool.newElement(),this.i[r]=pointPool.newElement(),r+=1},ShapePath.prototype.setLength=function(t){for(;this._maxLength<t;)this.doubleArrayLength();this._length=t},ShapePath.prototype.doubleArrayLength=function(){this.v=this.v.concat(createSizedArray(this._maxLength)),this.i=this.i.concat(createSizedArray(this._maxLength)),this.o=this.o.concat(createSizedArray(this._maxLength)),this._maxLength*=2},ShapePath.prototype.setXYAt=function(t,e,r,i,a){var s;switch(this._length=Math.max(this._length,i+1),this._length>=this._maxLength&&this.doubleArrayLength(),r){case"v":s=this.v;break;case"i":s=this.i;break;case"o":s=this.o;break;default:s=[]}(!s[i]||s[i]&&!a)&&(s[i]=pointPool.newElement()),s[i][0]=t,s[i][1]=e},ShapePath.prototype.setTripleAt=function(t,e,r,i,a,s,n,o){this.setXYAt(t,e,"v",n,o),this.setXYAt(r,i,"o",n,o),this.setXYAt(a,s,"i",n,o)},ShapePath.prototype.reverse=function(){var t=new ShapePath;t.setPathData(this.c,this._length);var e=this.v,r=this.o,i=this.i,a=0;this.c&&(t.setTripleAt(e[0][0],e[0][1],i[0][0],i[0][1],r[0][0],r[0][1],0,!1),a=1);var s,n=this._length-1,o=this._length;for(s=a;s<o;s+=1)t.setTripleAt(e[n][0],e[n][1],i[n][0],i[n][1],r[n][0],r[n][1],s,!1),n-=1;return t};var ShapePropertyFactory=function(){function t(t,e,r){var i,a,s,n,o,h,l,p,f,c=r.lastIndex,m=this.keyframes;if(t<m[0].t-this.offsetTime)i=m[0].s[0],s=!0,c=0;else if(t>=m[m.length-1].t-this.offsetTime)i=m[m.length-1].s?m[m.length-1].s[0]:m[m.length-2].e[0],s=!0;else{for(var d,u,y=c,g=m.length-1,v=!0;v&&(d=m[y],!((u=m[y+1]).t-this.offsetTime>t));)y<g-1?y+=1:v=!1;if(c=y,!(s=1===d.h)){if(t>=u.t-this.offsetTime)p=1;else if(t<d.t-this.offsetTime)p=0;else{var b;d.__fnct?b=d.__fnct:(b=BezierFactory.getBezierEasing(d.o.x,d.o.y,d.i.x,d.i.y).get,d.__fnct=b),p=b((t-(d.t-this.offsetTime))/(u.t-this.offsetTime-(d.t-this.offsetTime)))}a=u.s?u.s[0]:d.e[0]}i=d.s[0]}for(h=e._length,l=i.i[0].length,r.lastIndex=c,n=0;n<h;n+=1)for(o=0;o<l;o+=1)f=s?i.i[n][o]:i.i[n][o]+(a.i[n][o]-i.i[n][o])*p,e.i[n][o]=f,f=s?i.o[n][o]:i.o[n][o]+(a.o[n][o]-i.o[n][o])*p,e.o[n][o]=f,f=s?i.v[n][o]:i.v[n][o]+(a.v[n][o]-i.v[n][o])*p,e.v[n][o]=f}function e(){var t=this.comp.renderedFrame-this.offsetTime,e=this.keyframes[0].t-this.offsetTime,r=this.keyframes[this.keyframes.length-1].t-this.offsetTime,i=this._caching.lastFrame;return-999999!==i&&(i<e&&t<e||i>r&&t>r)||(this._caching.lastIndex=i<t?this._caching.lastIndex:0,this.interpolateShape(t,this.pv,this._caching)),this._caching.lastFrame=t,this.pv}function r(){this.paths=this.localShapeCollection}function i(t){(function(t,e){if(t._length!==e._length||t.c!==e.c)return!1;var r,i=t._length;for(r=0;r<i;r+=1)if(t.v[r][0]!==e.v[r][0]||t.v[r][1]!==e.v[r][1]||t.o[r][0]!==e.o[r][0]||t.o[r][1]!==e.o[r][1]||t.i[r][0]!==e.i[r][0]||t.i[r][1]!==e.i[r][1])return!1;return!0})(this.v,t)||(this.v=shapePool.clone(t),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection)}function a(){if(this.elem.globalData.frameId!==this.frameId)if(this.effectsSequence.length)if(this.lock)this.setVValue(this.pv);else{var t,e;this.lock=!0,this._mdf=!1,t=this.kf?this.pv:this.data.ks?this.data.ks.k:this.data.pt.k;var r=this.effectsSequence.length;for(e=0;e<r;e+=1)t=this.effectsSequence[e](t);this.setVValue(t),this.lock=!1,this.frameId=this.elem.globalData.frameId}else this._mdf=!1}function s(t,e,i){this.propType="shape",this.comp=t.comp,this.container=t,this.elem=t,this.data=e,this.k=!1,this.kf=!1,this._mdf=!1;var a=3===i?e.pt.k:e.ks.k;this.v=shapePool.clone(a),this.pv=shapePool.clone(this.v),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=r,this.effectsSequence=[]}function n(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function o(t,i,a){this.propType="shape",this.comp=t.comp,this.elem=t,this.container=t,this.offsetTime=t.data.st,this.keyframes=3===a?i.pt.k:i.ks.k,this.k=!0,this.kf=!0;var s=this.keyframes[0].s[0].i.length;this.v=shapePool.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,s),this.pv=shapePool.clone(this.v),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=-999999,this.reset=r,this._caching={lastFrame:-999999,lastIndex:0},this.effectsSequence=[e.bind(this)]}s.prototype.interpolateShape=t,s.prototype.getValue=a,s.prototype.setVValue=i,s.prototype.addEffect=n,o.prototype.getValue=a,o.prototype.interpolateShape=t,o.prototype.setVValue=i,o.prototype.addEffect=n;var h=function(){var t=roundCorner;function e(t,e){this.v=shapePool.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=e.d,this.elem=t,this.comp=t.comp,this.frameId=-1,this.initDynamicPropertyContainer(t),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.s=PropertyFactory.getProp(t,e.s,1,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertEllToPath())}return e.prototype={reset:r,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertEllToPath())},convertEllToPath:function(){var e=this.p.v[0],r=this.p.v[1],i=this.s.v[0]/2,a=this.s.v[1]/2,s=3!==this.d,n=this.v;n.v[0][0]=e,n.v[0][1]=r-a,n.v[1][0]=s?e+i:e-i,n.v[1][1]=r,n.v[2][0]=e,n.v[2][1]=r+a,n.v[3][0]=s?e-i:e+i,n.v[3][1]=r,n.i[0][0]=s?e-i*t:e+i*t,n.i[0][1]=r-a,n.i[1][0]=s?e+i:e-i,n.i[1][1]=r-a*t,n.i[2][0]=s?e+i*t:e-i*t,n.i[2][1]=r+a,n.i[3][0]=s?e-i:e+i,n.i[3][1]=r+a*t,n.o[0][0]=s?e+i*t:e-i*t,n.o[0][1]=r-a,n.o[1][0]=s?e+i:e-i,n.o[1][1]=r+a*t,n.o[2][0]=s?e-i*t:e+i*t,n.o[2][1]=r+a,n.o[3][0]=s?e-i:e+i,n.o[3][1]=r-a*t}},extendPrototype([DynamicPropertyContainer],e),e}(),l=function(){function t(t,e){this.v=shapePool.newElement(),this.v.setPathData(!0,0),this.elem=t,this.comp=t.comp,this.data=e,this.frameId=-1,this.d=e.d,this.initDynamicPropertyContainer(t),1===e.sy?(this.ir=PropertyFactory.getProp(t,e.ir,0,0,this),this.is=PropertyFactory.getProp(t,e.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=PropertyFactory.getProp(t,e.pt,0,0,this),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.r=PropertyFactory.getProp(t,e.r,0,degToRads,this),this.or=PropertyFactory.getProp(t,e.or,0,0,this),this.os=PropertyFactory.getProp(t,e.os,0,.01,this),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertToPath())}return t.prototype={reset:r,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertToPath())},convertStarToPath:function(){var t,e,r,i,a=2*Math.floor(this.pt.v),s=2*Math.PI/a,n=!0,o=this.or.v,h=this.ir.v,l=this.os.v,p=this.is.v,f=2*Math.PI*o/(2*a),c=2*Math.PI*h/(2*a),m=-Math.PI/2;m+=this.r.v;var d=3===this.data.d?-1:1;for(this.v._length=0,t=0;t<a;t+=1){r=n?l:p,i=n?f:c;var u=(e=n?o:h)*Math.cos(m),y=e*Math.sin(m),g=0===u&&0===y?0:y/Math.sqrt(u*u+y*y),v=0===u&&0===y?0:-u/Math.sqrt(u*u+y*y);u+=+this.p.v[0],y+=+this.p.v[1],this.v.setTripleAt(u,y,u-g*i*r*d,y-v*i*r*d,u+g*i*r*d,y+v*i*r*d,t,!0),n=!n,m+=s*d}},convertPolygonToPath:function(){var t,e=Math.floor(this.pt.v),r=2*Math.PI/e,i=this.or.v,a=this.os.v,s=2*Math.PI*i/(4*e),n=.5*-Math.PI,o=3===this.data.d?-1:1;for(n+=this.r.v,this.v._length=0,t=0;t<e;t+=1){var h=i*Math.cos(n),l=i*Math.sin(n),p=0===h&&0===l?0:l/Math.sqrt(h*h+l*l),f=0===h&&0===l?0:-h/Math.sqrt(h*h+l*l);h+=+this.p.v[0],l+=+this.p.v[1],this.v.setTripleAt(h,l,h-p*s*a*o,l-f*s*a*o,h+p*s*a*o,l+f*s*a*o,t,!0),n+=r*o}this.paths.length=0,this.paths[0]=this.v}},extendPrototype([DynamicPropertyContainer],t),t}(),p=function(){function t(t,e){this.v=shapePool.newElement(),this.v.c=!0,this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=t,this.comp=t.comp,this.frameId=-1,this.d=e.d,this.initDynamicPropertyContainer(t),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.s=PropertyFactory.getProp(t,e.s,1,0,this),this.r=PropertyFactory.getProp(t,e.r,0,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertRectToPath())}return t.prototype={convertRectToPath:function(){var t=this.p.v[0],e=this.p.v[1],r=this.s.v[0]/2,i=this.s.v[1]/2,a=bmMin(r,i,this.r.v),s=a*(1-roundCorner);this.v._length=0,2===this.d||1===this.d?(this.v.setTripleAt(t+r,e-i+a,t+r,e-i+a,t+r,e-i+s,0,!0),this.v.setTripleAt(t+r,e+i-a,t+r,e+i-s,t+r,e+i-a,1,!0),0!==a?(this.v.setTripleAt(t+r-a,e+i,t+r-a,e+i,t+r-s,e+i,2,!0),this.v.setTripleAt(t-r+a,e+i,t-r+s,e+i,t-r+a,e+i,3,!0),this.v.setTripleAt(t-r,e+i-a,t-r,e+i-a,t-r,e+i-s,4,!0),this.v.setTripleAt(t-r,e-i+a,t-r,e-i+s,t-r,e-i+a,5,!0),this.v.setTripleAt(t-r+a,e-i,t-r+a,e-i,t-r+s,e-i,6,!0),this.v.setTripleAt(t+r-a,e-i,t+r-s,e-i,t+r-a,e-i,7,!0)):(this.v.setTripleAt(t-r,e+i,t-r+s,e+i,t-r,e+i,2),this.v.setTripleAt(t-r,e-i,t-r,e-i+s,t-r,e-i,3))):(this.v.setTripleAt(t+r,e-i+a,t+r,e-i+s,t+r,e-i+a,0,!0),0!==a?(this.v.setTripleAt(t+r-a,e-i,t+r-a,e-i,t+r-s,e-i,1,!0),this.v.setTripleAt(t-r+a,e-i,t-r+s,e-i,t-r+a,e-i,2,!0),this.v.setTripleAt(t-r,e-i+a,t-r,e-i+a,t-r,e-i+s,3,!0),this.v.setTripleAt(t-r,e+i-a,t-r,e+i-s,t-r,e+i-a,4,!0),this.v.setTripleAt(t-r+a,e+i,t-r+a,e+i,t-r+s,e+i,5,!0),this.v.setTripleAt(t+r-a,e+i,t+r-s,e+i,t+r-a,e+i,6,!0),this.v.setTripleAt(t+r,e+i-a,t+r,e+i-a,t+r,e+i-s,7,!0)):(this.v.setTripleAt(t-r,e-i,t-r+s,e-i,t-r,e-i,1,!0),this.v.setTripleAt(t-r,e+i,t-r,e+i-s,t-r,e+i,2,!0),this.v.setTripleAt(t+r,e+i,t+r-s,e+i,t+r,e+i,3,!0)))},getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertRectToPath())},reset:r},extendPrototype([DynamicPropertyContainer],t),t}();var f={getShapeProp:function(t,e,r){var i;return 3===r||4===r?i=(3===r?e.pt:e.ks).k.length?new o(t,e,r):new s(t,e,r):5===r?i=new p(t,e):6===r?i=new h(t,e):7===r&&(i=new l(t,e)),i.k&&t.addDynamicProperty(i),i},getConstructorFunction:function(){return s},getKeyframedConstructorFunction:function(){return o}};return f}(),ShapeModifiers=(ob={},modifiers={},ob.registerModifier=function(t,e){modifiers[t]||(modifiers[t]=e)},ob.getModifier=function(t,e,r){return new modifiers[t](e,r)},ob),ob,modifiers;function ShapeModifier(){}function TrimModifier(){}function RoundCornersModifier(){}function PuckerAndBloatModifier(){}function RepeaterModifier(){}function ShapeCollection(){this._length=0,this._maxLength=4,this.shapes=createSizedArray(this._maxLength)}function DashProperty(t,e,r,i){var a;this.elem=t,this.frameId=-1,this.dataProps=createSizedArray(e.length),this.renderer=r,this.k=!1,this.dashStr="",this.dashArray=createTypedArray("float32",e.length?e.length-1:0),this.dashoffset=createTypedArray("float32",1),this.initDynamicPropertyContainer(i);var s,n=e.length||0;for(a=0;a<n;a+=1)s=PropertyFactory.getProp(t,e[a].v,0,0,this),this.k=s.k||this.k,this.dataProps[a]={n:e[a].n,p:s};this.k||this.getValue(!0),this._isAnimated=this.k}function GradientProperty(t,e,r){this.data=e,this.c=createTypedArray("uint8c",4*e.p);var i=e.k.k[0].s?e.k.k[0].s.length-4*e.p:e.k.k.length-4*e.p;this.o=createTypedArray("float32",i),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=i,this.initDynamicPropertyContainer(r),this.prop=PropertyFactory.getProp(t,e.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}ShapeModifier.prototype.initModifierProperties=function(){},ShapeModifier.prototype.addShapeToModifier=function(){},ShapeModifier.prototype.addShape=function(t){if(!this.closed){t.sh.container.addDynamicProperty(t.sh);var e={shape:t.sh,data:t,localShapeCollection:shapeCollectionPool.newShapeCollection()};this.shapes.push(e),this.addShapeToModifier(e),this._isAnimated&&t.setAsAnimated()}},ShapeModifier.prototype.init=function(t,e){this.shapes=[],this.elem=t,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e),this.frameId=initialDefaultFrame,this.closed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},ShapeModifier.prototype.processKeys=function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties())},extendPrototype([DynamicPropertyContainer],ShapeModifier),extendPrototype([ShapeModifier],TrimModifier),TrimModifier.prototype.initModifierProperties=function(t,e){this.s=PropertyFactory.getProp(t,e.s,0,.01,this),this.e=PropertyFactory.getProp(t,e.e,0,.01,this),this.o=PropertyFactory.getProp(t,e.o,0,0,this),this.sValue=0,this.eValue=0,this.getValue=this.processKeys,this.m=e.m,this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length},TrimModifier.prototype.addShapeToModifier=function(t){t.pathsData=[]},TrimModifier.prototype.calculateShapeEdges=function(t,e,r,i,a){var s=[];e<=1?s.push({s:t,e:e}):t>=1?s.push({s:t-1,e:e-1}):(s.push({s:t,e:1}),s.push({s:0,e:e-1}));var n,o,h=[],l=s.length;for(n=0;n<l;n+=1){var p,f;if(!((o=s[n]).e*a<i||o.s*a>i+r))p=o.s*a<=i?0:(o.s*a-i)/r,f=o.e*a>=i+r?1:(o.e*a-i)/r,h.push([p,f])}return h.length||h.push([0,0]),h},TrimModifier.prototype.releasePathsData=function(t){var e,r=t.length;for(e=0;e<r;e+=1)segmentsLengthPool.release(t[e]);return t.length=0,t},TrimModifier.prototype.processShapes=function(t){var e,r,i,a;if(this._mdf||t){var s=this.o.v%360/360;if(s<0&&(s+=1),(e=this.s.v>1?1+s:this.s.v<0?0+s:this.s.v+s)>(r=this.e.v>1?1+s:this.e.v<0?0+s:this.e.v+s)){var n=e;e=r,r=n}e=1e-4*Math.round(1e4*e),r=1e-4*Math.round(1e4*r),this.sValue=e,this.eValue=r}else e=this.sValue,r=this.eValue;var o,h,l,p,f,c=this.shapes.length,m=0;if(r===e)for(a=0;a<c;a+=1)this.shapes[a].localShapeCollection.releaseShapes(),this.shapes[a].shape._mdf=!0,this.shapes[a].shape.paths=this.shapes[a].localShapeCollection,this._mdf&&(this.shapes[a].pathsData.length=0);else if(1===r&&0===e||0===r&&1===e){if(this._mdf)for(a=0;a<c;a+=1)this.shapes[a].pathsData.length=0,this.shapes[a].shape._mdf=!0}else{var d,u,y=[];for(a=0;a<c;a+=1)if((d=this.shapes[a]).shape._mdf||this._mdf||t||2===this.m){if(h=(i=d.shape.paths)._length,f=0,!d.shape._mdf&&d.pathsData.length)f=d.totalShapeLength;else{for(l=this.releasePathsData(d.pathsData),o=0;o<h;o+=1)p=bez.getSegmentsLength(i.shapes[o]),l.push(p),f+=p.totalLength;d.totalShapeLength=f,d.pathsData=l}m+=f,d.shape._mdf=!0}else d.shape.paths=d.localShapeCollection;var g,v=e,b=r,x=0;for(a=c-1;a>=0;a-=1)if((d=this.shapes[a]).shape._mdf){for((u=d.localShapeCollection).releaseShapes(),2===this.m&&c>1?(g=this.calculateShapeEdges(e,r,d.totalShapeLength,x,m),x+=d.totalShapeLength):g=[[v,b]],h=g.length,o=0;o<h;o+=1){v=g[o][0],b=g[o][1],y.length=0,b<=1?y.push({s:d.totalShapeLength*v,e:d.totalShapeLength*b}):v>=1?y.push({s:d.totalShapeLength*(v-1),e:d.totalShapeLength*(b-1)}):(y.push({s:d.totalShapeLength*v,e:d.totalShapeLength}),y.push({s:0,e:d.totalShapeLength*(b-1)}));var E=this.addShapes(d,y[0]);if(y[0].s!==y[0].e){if(y.length>1)if(d.shape.paths.shapes[d.shape.paths._length-1].c){var P=E.pop();this.addPaths(E,u),E=this.addShapes(d,y[1],P)}else this.addPaths(E,u),E=this.addShapes(d,y[1]);this.addPaths(E,u)}}d.shape.paths=u}}},TrimModifier.prototype.addPaths=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)e.addShape(t[r])},TrimModifier.prototype.addSegment=function(t,e,r,i,a,s,n){a.setXYAt(e[0],e[1],"o",s),a.setXYAt(r[0],r[1],"i",s+1),n&&a.setXYAt(t[0],t[1],"v",s),a.setXYAt(i[0],i[1],"v",s+1)},TrimModifier.prototype.addSegmentFromArray=function(t,e,r,i){e.setXYAt(t[1],t[5],"o",r),e.setXYAt(t[2],t[6],"i",r+1),i&&e.setXYAt(t[0],t[4],"v",r),e.setXYAt(t[3],t[7],"v",r+1)},TrimModifier.prototype.addShapes=function(t,e,r){var i,a,s,n,o,h,l,p,f=t.pathsData,c=t.shape.paths.shapes,m=t.shape.paths._length,d=0,u=[],y=!0;for(r?(o=r._length,p=r._length):(r=shapePool.newElement(),o=0,p=0),u.push(r),i=0;i<m;i+=1){for(h=f[i].lengths,r.c=c[i].c,s=c[i].c?h.length:h.length+1,a=1;a<s;a+=1)if(d+(n=h[a-1]).addedLength<e.s)d+=n.addedLength,r.c=!1;else{if(d>e.e){r.c=!1;break}e.s<=d&&e.e>=d+n.addedLength?(this.addSegment(c[i].v[a-1],c[i].o[a-1],c[i].i[a],c[i].v[a],r,o,y),y=!1):(l=bez.getNewSegment(c[i].v[a-1],c[i].v[a],c[i].o[a-1],c[i].i[a],(e.s-d)/n.addedLength,(e.e-d)/n.addedLength,h[a-1]),this.addSegmentFromArray(l,r,o,y),y=!1,r.c=!1),d+=n.addedLength,o+=1}if(c[i].c&&h.length){if(n=h[a-1],d<=e.e){var g=h[a-1].addedLength;e.s<=d&&e.e>=d+g?(this.addSegment(c[i].v[a-1],c[i].o[a-1],c[i].i[0],c[i].v[0],r,o,y),y=!1):(l=bez.getNewSegment(c[i].v[a-1],c[i].v[0],c[i].o[a-1],c[i].i[0],(e.s-d)/g,(e.e-d)/g,h[a-1]),this.addSegmentFromArray(l,r,o,y),y=!1,r.c=!1)}else r.c=!1;d+=n.addedLength,o+=1}if(r._length&&(r.setXYAt(r.v[p][0],r.v[p][1],"i",p),r.setXYAt(r.v[r._length-1][0],r.v[r._length-1][1],"o",r._length-1)),d>e.e)break;i<m-1&&(r=shapePool.newElement(),y=!0,u.push(r),o=0)}return u},ShapeModifiers.registerModifier("tm",TrimModifier),extendPrototype([ShapeModifier],RoundCornersModifier),RoundCornersModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.rd=PropertyFactory.getProp(t,e.r,0,null,this),this._isAnimated=!!this.rd.effectsSequence.length},RoundCornersModifier.prototype.processPath=function(t,e){var r,i=shapePool.newElement();i.c=t.c;var a,s,n,o,h,l,p,f,c,m,d,u,y=t._length,g=0;for(r=0;r<y;r+=1)a=t.v[r],n=t.o[r],s=t.i[r],a[0]===n[0]&&a[1]===n[1]&&a[0]===s[0]&&a[1]===s[1]?0!==r&&r!==y-1||t.c?(o=0===r?t.v[y-1]:t.v[r-1],l=(h=Math.sqrt(Math.pow(a[0]-o[0],2)+Math.pow(a[1]-o[1],2)))?Math.min(h/2,e)/h:0,p=d=a[0]+(o[0]-a[0])*l,f=u=a[1]-(a[1]-o[1])*l,c=p-(p-a[0])*roundCorner,m=f-(f-a[1])*roundCorner,i.setTripleAt(p,f,c,m,d,u,g),g+=1,o=r===y-1?t.v[0]:t.v[r+1],l=(h=Math.sqrt(Math.pow(a[0]-o[0],2)+Math.pow(a[1]-o[1],2)))?Math.min(h/2,e)/h:0,p=c=a[0]+(o[0]-a[0])*l,f=m=a[1]+(o[1]-a[1])*l,d=p-(p-a[0])*roundCorner,u=f-(f-a[1])*roundCorner,i.setTripleAt(p,f,c,m,d,u,g),g+=1):(i.setTripleAt(a[0],a[1],n[0],n[1],s[0],s[1],g),g+=1):(i.setTripleAt(t.v[r][0],t.v[r][1],t.o[r][0],t.o[r][1],t.i[r][0],t.i[r][1],g),g+=1);return i},RoundCornersModifier.prototype.processShapes=function(t){var e,r,i,a,s,n,o=this.shapes.length,h=this.rd.v;if(0!==h)for(r=0;r<o;r+=1){if(n=(s=this.shapes[r]).localShapeCollection,s.shape._mdf||this._mdf||t)for(n.releaseShapes(),s.shape._mdf=!0,e=s.shape.paths.shapes,a=s.shape.paths._length,i=0;i<a;i+=1)n.addShape(this.processPath(e[i],h));s.shape.paths=s.localShapeCollection}this.dynamicProperties.length||(this._mdf=!1)},ShapeModifiers.registerModifier("rd",RoundCornersModifier),extendPrototype([ShapeModifier],PuckerAndBloatModifier),PuckerAndBloatModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amount=PropertyFactory.getProp(t,e.a,0,null,this),this._isAnimated=!!this.amount.effectsSequence.length},PuckerAndBloatModifier.prototype.processPath=function(t,e){var r=e/100,i=[0,0],a=t._length,s=0;for(s=0;s<a;s+=1)i[0]+=t.v[s][0],i[1]+=t.v[s][1];i[0]/=a,i[1]/=a;var n,o,h,l,p,f,c=shapePool.newElement();for(c.c=t.c,s=0;s<a;s+=1)n=t.v[s][0]+(i[0]-t.v[s][0])*r,o=t.v[s][1]+(i[1]-t.v[s][1])*r,h=t.o[s][0]+(i[0]-t.o[s][0])*-r,l=t.o[s][1]+(i[1]-t.o[s][1])*-r,p=t.i[s][0]+(i[0]-t.i[s][0])*-r,f=t.i[s][1]+(i[1]-t.i[s][1])*-r,c.setTripleAt(n,o,h,l,p,f,s);return c},PuckerAndBloatModifier.prototype.processShapes=function(t){var e,r,i,a,s,n,o=this.shapes.length,h=this.amount.v;if(0!==h)for(r=0;r<o;r+=1){if(n=(s=this.shapes[r]).localShapeCollection,s.shape._mdf||this._mdf||t)for(n.releaseShapes(),s.shape._mdf=!0,e=s.shape.paths.shapes,a=s.shape.paths._length,i=0;i<a;i+=1)n.addShape(this.processPath(e[i],h));s.shape.paths=s.localShapeCollection}this.dynamicProperties.length||(this._mdf=!1)},ShapeModifiers.registerModifier("pb",PuckerAndBloatModifier),extendPrototype([ShapeModifier],RepeaterModifier),RepeaterModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.c=PropertyFactory.getProp(t,e.c,0,null,this),this.o=PropertyFactory.getProp(t,e.o,0,null,this),this.tr=TransformPropertyFactory.getTransformProperty(t,e.tr,this),this.so=PropertyFactory.getProp(t,e.tr.so,0,.01,this),this.eo=PropertyFactory.getProp(t,e.tr.eo,0,.01,this),this.data=e,this.dynamicProperties.length||this.getValue(!0),this._isAnimated=!!this.dynamicProperties.length,this.pMatrix=new Matrix,this.rMatrix=new Matrix,this.sMatrix=new Matrix,this.tMatrix=new Matrix,this.matrix=new Matrix},RepeaterModifier.prototype.applyTransforms=function(t,e,r,i,a,s){var n=s?-1:1,o=i.s.v[0]+(1-i.s.v[0])*(1-a),h=i.s.v[1]+(1-i.s.v[1])*(1-a);t.translate(i.p.v[0]*n*a,i.p.v[1]*n*a,i.p.v[2]),e.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),e.rotate(-i.r.v*n*a),e.translate(i.a.v[0],i.a.v[1],i.a.v[2]),r.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),r.scale(s?1/o:o,s?1/h:h),r.translate(i.a.v[0],i.a.v[1],i.a.v[2])},RepeaterModifier.prototype.init=function(t,e,r,i){for(this.elem=t,this.arr=e,this.pos=r,this.elemsData=i,this._currentCopies=0,this._elements=[],this._groups=[],this.frameId=-1,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e[r]);r>0;)r-=1,this._elements.unshift(e[r]);this.dynamicProperties.length?this.k=!0:this.getValue(!0)},RepeaterModifier.prototype.resetElements=function(t){var e,r=t.length;for(e=0;e<r;e+=1)t[e]._processed=!1,"gr"===t[e].ty&&this.resetElements(t[e].it)},RepeaterModifier.prototype.cloneElements=function(t){var e=JSON.parse(JSON.stringify(t));return this.resetElements(e),e},RepeaterModifier.prototype.changeGroupRender=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)t[r]._render=e,"gr"===t[r].ty&&this.changeGroupRender(t[r].it,e)},RepeaterModifier.prototype.processShapes=function(t){var e,r,i,a,s,n=!1;if(this._mdf||t){var o,h=Math.ceil(this.c.v);if(this._groups.length<h){for(;this._groups.length<h;){var l={it:this.cloneElements(this._elements),ty:"gr"};l.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:1,ix:6,k:[{s:0,e:0,t:0},{s:0,e:0,t:1}]},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,l),this._groups.splice(0,0,l),this._currentCopies+=1}this.elem.reloadShapes(),n=!0}for(s=0,i=0;i<=this._groups.length-1;i+=1){if(o=s<h,this._groups[i]._render=o,this.changeGroupRender(this._groups[i].it,o),!o){var p=this.elemsData[i].it,f=p[p.length-1];0!==f.transform.op.v?(f.transform.op._mdf=!0,f.transform.op.v=0):f.transform.op._mdf=!1}s+=1}this._currentCopies=h;var c=this.o.v,m=c%1,d=c>0?Math.floor(c):Math.ceil(c),u=this.pMatrix.props,y=this.rMatrix.props,g=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var v,b,x=0;if(c>0){for(;x<d;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),x+=1;m&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,m,!1),x+=m)}else if(c<0){for(;x>d;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),x-=1;m&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-m,!0),x-=m)}for(i=1===this.data.m?0:this._currentCopies-1,a=1===this.data.m?1:-1,s=this._currentCopies;s;){if(b=(r=(e=this.elemsData[i].it)[e.length-1].transform.mProps.v.props).length,e[e.length-1].transform.mProps._mdf=!0,e[e.length-1].transform.op._mdf=!0,e[e.length-1].transform.op.v=1===this._currentCopies?this.so.v:this.so.v+(this.eo.v-this.so.v)*(i/(this._currentCopies-1)),0!==x){for((0!==i&&1===a||i!==this._currentCopies-1&&-1===a)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7],y[8],y[9],y[10],y[11],y[12],y[13],y[14],y[15]),this.matrix.transform(g[0],g[1],g[2],g[3],g[4],g[5],g[6],g[7],g[8],g[9],g[10],g[11],g[12],g[13],g[14],g[15]),this.matrix.transform(u[0],u[1],u[2],u[3],u[4],u[5],u[6],u[7],u[8],u[9],u[10],u[11],u[12],u[13],u[14],u[15]),v=0;v<b;v+=1)r[v]=this.matrix.props[v];this.matrix.reset()}else for(this.matrix.reset(),v=0;v<b;v+=1)r[v]=this.matrix.props[v];x+=1,s-=1,i+=a}}else for(s=this._currentCopies,i=0,a=1;s;)r=(e=this.elemsData[i].it)[e.length-1].transform.mProps.v.props,e[e.length-1].transform.mProps._mdf=!1,e[e.length-1].transform.op._mdf=!1,s-=1,i+=a;return n},RepeaterModifier.prototype.addShape=function(){},ShapeModifiers.registerModifier("rp",RepeaterModifier),ShapeCollection.prototype.addShape=function(t){this._length===this._maxLength&&(this.shapes=this.shapes.concat(createSizedArray(this._maxLength)),this._maxLength*=2),this.shapes[this._length]=t,this._length+=1},ShapeCollection.prototype.releaseShapes=function(){var t;for(t=0;t<this._length;t+=1)shapePool.release(this.shapes[t]);this._length=0},DashProperty.prototype.getValue=function(t){if((this.elem.globalData.frameId!==this.frameId||t)&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf=this._mdf||t,this._mdf)){var e=0,r=this.dataProps.length;for("svg"===this.renderer&&(this.dashStr=""),e=0;e<r;e+=1)"o"!==this.dataProps[e].n?"svg"===this.renderer?this.dashStr+=" "+this.dataProps[e].p.v:this.dashArray[e]=this.dataProps[e].p.v:this.dashoffset[0]=this.dataProps[e].p.v}},extendPrototype([DynamicPropertyContainer],DashProperty),GradientProperty.prototype.comparePoints=function(t,e){for(var r=0,i=this.o.length/2;r<i;){if(Math.abs(t[4*r]-t[4*e+2*r])>.01)return!1;r+=1}return!0},GradientProperty.prototype.checkCollapsable=function(){if(this.o.length/2!=this.c.length/4)return!1;if(this.data.k.k[0].s)for(var t=0,e=this.data.k.k.length;t<e;){if(!this.comparePoints(this.data.k.k[t].s,this.data.p))return!1;t+=1}else if(!this.comparePoints(this.data.k.k,this.data.p))return!1;return!0},GradientProperty.prototype.getValue=function(t){if(this.prop.getValue(),this._mdf=!1,this._cmdf=!1,this._omdf=!1,this.prop._mdf||t){var e,r,i,a=4*this.data.p;for(e=0;e<a;e+=1)r=e%4==0?100:255,i=Math.round(this.prop.v[e]*r),this.c[e]!==i&&(this.c[e]=i,this._cmdf=!t);if(this.o.length)for(a=this.prop.v.length,e=4*this.data.p;e<a;e+=1)r=e%2==0?100:1,i=e%2==0?Math.round(100*this.prop.v[e]):this.prop.v[e],this.o[e-4*this.data.p]!==i&&(this.o[e-4*this.data.p]=i,this._omdf=!t);this._mdf=!t}},extendPrototype([DynamicPropertyContainer],GradientProperty);var buildShapeString=function(t,e,r,i){if(0===e)return"";var a,s=t.o,n=t.i,o=t.v,h=" M"+i.applyToPointStringified(o[0][0],o[0][1]);for(a=1;a<e;a+=1)h+=" C"+i.applyToPointStringified(s[a-1][0],s[a-1][1])+" "+i.applyToPointStringified(n[a][0],n[a][1])+" "+i.applyToPointStringified(o[a][0],o[a][1]);return r&&e&&(h+=" C"+i.applyToPointStringified(s[a-1][0],s[a-1][1])+" "+i.applyToPointStringified(n[0][0],n[0][1])+" "+i.applyToPointStringified(o[0][0],o[0][1]),h+="z"),h},audioControllerFactory=function(){function t(t){this.audios=[],this.audioFactory=t,this._volume=1,this._isMuted=!1}return t.prototype={addAudio:function(t){this.audios.push(t)},pause:function(){var t,e=this.audios.length;for(t=0;t<e;t+=1)this.audios[t].pause()},resume:function(){var t,e=this.audios.length;for(t=0;t<e;t+=1)this.audios[t].resume()},setRate:function(t){var e,r=this.audios.length;for(e=0;e<r;e+=1)this.audios[e].setRate(t)},createAudio:function(t){return this.audioFactory?this.audioFactory(t):Howl?new Howl({src:[t]}):{isPlaying:!1,play:function(){this.isPlaying=!0},seek:function(){this.isPlaying=!1},playing:function(){},rate:function(){},setVolume:function(){}}},setAudioFactory:function(t){this.audioFactory=t},setVolume:function(t){this._volume=t,this._updateVolume()},mute:function(){this._isMuted=!0,this._updateVolume()},unmute:function(){this._isMuted=!1,this._updateVolume()},getVolume:function(){return this._volume},_updateVolume:function(){var t,e=this.audios.length;for(t=0;t<e;t+=1)this.audios[t].volume(this._volume*(this._isMuted?0:1))}},function(){return new t}}(),ImagePreloader=function(){var t=function(){var t=createTag("canvas");t.width=1,t.height=1;var e=t.getContext("2d");return e.fillStyle="rgba(0,0,0,0)",e.fillRect(0,0,1,1),t}();function e(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function r(){this.loadedFootagesCount+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function i(t,e,r){var i="";if(t.e)i=t.p;else if(e){var a=t.p;-1!==a.indexOf("images/")&&(a=a.split("/")[1]),i=e+a}else i=r,i+=t.u?t.u:"",i+=t.p;return i}function a(t){var e=0,r=setInterval(function(){(t.getBBox().width||e>500)&&(this._imageLoaded(),clearInterval(r)),e+=1}.bind(this),50)}function s(t){var e={assetData:t},r=i(t,this.assetsPath,this.path);return assetLoader.load(r,function(t){e.img=t,this._footageLoaded()}.bind(this),function(){e.img={},this._footageLoaded()}.bind(this)),e}function n(){this._imageLoaded=e.bind(this),this._footageLoaded=r.bind(this),this.testImageLoaded=a.bind(this),this.createFootageData=s.bind(this),this.assetsPath="",this.path="",this.totalImages=0,this.totalFootages=0,this.loadedAssets=0,this.loadedFootagesCount=0,this.imagesLoadedCb=null,this.images=[]}return n.prototype={loadAssets:function(t,e){var r;this.imagesLoadedCb=e;var i=t.length;for(r=0;r<i;r+=1)t[r].layers||(t[r].t?3===t[r].t&&(this.totalFootages+=1,this.images.push(this.createFootageData(t[r]))):(this.totalImages+=1,this.images.push(this._createImageData(t[r]))))},setAssetsPath:function(t){this.assetsPath=t||""},setPath:function(t){this.path=t||""},loadedImages:function(){return this.totalImages===this.loadedAssets},loadedFootages:function(){return this.totalFootages===this.loadedFootagesCount},destroy:function(){this.imagesLoadedCb=null,this.images.length=0},getAsset:function(t){for(var e=0,r=this.images.length;e<r;){if(this.images[e].assetData===t)return this.images[e].img;e+=1}return null},createImgData:function(e){var r=i(e,this.assetsPath,this.path),a=createTag("img");a.crossOrigin="anonymous",a.addEventListener("load",this._imageLoaded,!1),a.addEventListener("error",function(){s.img=t,this._imageLoaded()}.bind(this),!1),a.src=r;var s={img:a,assetData:e};return s},createImageData:function(e){var r=i(e,this.assetsPath,this.path),a=createNS("image");isSafari?this.testImageLoaded(a):a.addEventListener("load",this._imageLoaded,!1),a.addEventListener("error",function(){s.img=t,this._imageLoaded()}.bind(this),!1),a.setAttributeNS("http://www.w3.org/1999/xlink","href",r),this._elementHelper.append?this._elementHelper.append(a):this._elementHelper.appendChild(a);var s={img:a,assetData:e};return s},imageLoaded:e,footageLoaded:r,setCacheType:function(t,e){"svg"===t?(this._elementHelper=e,this._createImageData=this.createImageData.bind(this)):this._createImageData=this.createImgData.bind(this)}},n}(),featureSupport=function(){var t={maskType:!0};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(t.maskType=!1),t}(),filtersFactory=function(){var t={};return t.createFilter=function(t,e){var r=createNS("filter");r.setAttribute("id",t),!0!==e&&(r.setAttribute("filterUnits","objectBoundingBox"),r.setAttribute("x","0%"),r.setAttribute("y","0%"),r.setAttribute("width","100%"),r.setAttribute("height","100%"));return r},t.createAlphaToLuminanceFilter=function(){var t=createNS("feColorMatrix");return t.setAttribute("type","matrix"),t.setAttribute("color-interpolation-filters","sRGB"),t.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),t},t}(),assetLoader=function(){function t(t){return t.response&&"object"==typeof t.response?t.response:t.response&&"string"==typeof t.response?JSON.parse(t.response):t.responseText?JSON.parse(t.responseText):null}return{load:function(e,r,i){var a,s=new XMLHttpRequest;try{s.responseType="json"}catch(t){}s.onreadystatechange=function(){if(4===s.readyState)if(200===s.status)a=t(s),r(a);else try{a=t(s),r(a)}catch(t){i&&i(t)}},s.open("GET",e,!0),s.send()}}}();function TextAnimatorProperty(t,e,r){this._isFirstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._textData=t,this._renderType=e,this._elem=r,this._animatorsData=createSizedArray(this._textData.a.length),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1,this.initDynamicPropertyContainer(r)}function TextAnimatorDataProperty(t,e,r){var i={propType:!1},a=PropertyFactory.getProp,s=e.a;this.a={r:s.r?a(t,s.r,0,degToRads,r):i,rx:s.rx?a(t,s.rx,0,degToRads,r):i,ry:s.ry?a(t,s.ry,0,degToRads,r):i,sk:s.sk?a(t,s.sk,0,degToRads,r):i,sa:s.sa?a(t,s.sa,0,degToRads,r):i,s:s.s?a(t,s.s,1,.01,r):i,a:s.a?a(t,s.a,1,0,r):i,o:s.o?a(t,s.o,0,.01,r):i,p:s.p?a(t,s.p,1,0,r):i,sw:s.sw?a(t,s.sw,0,0,r):i,sc:s.sc?a(t,s.sc,1,0,r):i,fc:s.fc?a(t,s.fc,1,0,r):i,fh:s.fh?a(t,s.fh,0,0,r):i,fs:s.fs?a(t,s.fs,0,.01,r):i,fb:s.fb?a(t,s.fb,0,.01,r):i,t:s.t?a(t,s.t,0,0,r):i},this.s=TextSelectorProp.getTextSelectorProp(t,e.s,r),this.s.t=e.s.t}function LetterProps(t,e,r,i,a,s){this.o=t,this.sw=e,this.sc=r,this.fc=i,this.m=a,this.p=s,this._mdf={o:!0,sw:!!e,sc:!!r,fc:!!i,m:!0,p:!0}}function TextProperty(t,e){this._frameId=initialDefaultFrame,this.pv="",this.v="",this.kf=!1,this._isFirstFrame=!0,this._mdf=!1,this.data=e,this.elem=t,this.comp=this.elem.comp,this.keysIndex=0,this.canResize=!1,this.minimumFontSize=1,this.effectsSequence=[],this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:!1},this.copyData(this.currentData,this.data.d.k[0].s),this.searchProperty()||this.completeTextData(this.currentData)}TextAnimatorProperty.prototype.searchProperties=function(){var t,e,r=this._textData.a.length,i=PropertyFactory.getProp;for(t=0;t<r;t+=1)e=this._textData.a[t],this._animatorsData[t]=new TextAnimatorDataProperty(this._elem,e,this);this._textData.p&&"m"in this._textData.p?(this._pathData={f:i(this._elem,this._textData.p.f,0,0,this),l:i(this._elem,this._textData.p.l,0,0,this),r:this._textData.p.r,m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=i(this._elem,this._textData.m.a,1,0,this)},TextAnimatorProperty.prototype.getMeasures=function(t,e){if(this.lettersChangedFlag=e,this._mdf||this._isFirstFrame||e||this._hasMaskedPath&&this._pathData.m._mdf){this._isFirstFrame=!1;var r,i,a,s,n,o,h,l,p,f,c,m,d,u,y,g,v,b,x,E=this._moreOptions.alignment.v,P=this._animatorsData,S=this._textData,C=this.mHelper,_=this._renderType,A=this.renderedLetters.length,k=t.l;if(this._hasMaskedPath){if(x=this._pathData.m,!this._pathData.n||this._pathData._mdf){var T,w=x.v;for(this._pathData.r&&(w=w.reverse()),n={tLength:0,segments:[]},s=w._length-1,g=0,a=0;a<s;a+=1)T=bez.buildBezierData(w.v[a],w.v[a+1],[w.o[a][0]-w.v[a][0],w.o[a][1]-w.v[a][1]],[w.i[a+1][0]-w.v[a+1][0],w.i[a+1][1]-w.v[a+1][1]]),n.tLength+=T.segmentLength,n.segments.push(T),g+=T.segmentLength;a=s,x.v.c&&(T=bez.buildBezierData(w.v[a],w.v[0],[w.o[a][0]-w.v[a][0],w.o[a][1]-w.v[a][1]],[w.i[0][0]-w.v[0][0],w.i[0][1]-w.v[0][1]]),n.tLength+=T.segmentLength,n.segments.push(T),g+=T.segmentLength),this._pathData.pi=n}if(n=this._pathData.pi,o=this._pathData.f.v,c=0,f=1,l=0,p=!0,u=n.segments,o<0&&x.v.c)for(n.tLength<Math.abs(o)&&(o=-Math.abs(o)%n.tLength),f=(d=u[c=u.length-1].points).length-1;o<0;)o+=d[f].partialLength,(f-=1)<0&&(f=(d=u[c-=1].points).length-1);m=(d=u[c].points)[f-1],y=(h=d[f]).partialLength}s=k.length,r=0,i=0;var D,M,F,I,R,V=1.2*t.finalSize*.714,B=!0;F=P.length;var L,z,G,N,O,H,j,q,W,Y,X,K,$=-1,U=o,J=c,Z=f,Q=-1,tt="",et=this.defaultPropsArray;if(2===t.j||1===t.j){var rt=0,it=0,at=2===t.j?-.5:-1,st=0,nt=!0;for(a=0;a<s;a+=1)if(k[a].n){for(rt&&(rt+=it);st<a;)k[st].animatorJustifyOffset=rt,st+=1;rt=0,nt=!0}else{for(M=0;M<F;M+=1)(D=P[M].a).t.propType&&(nt&&2===t.j&&(it+=D.t.v*at),(R=P[M].s.getMult(k[a].anIndexes[M],S.a[M].s.totalChars)).length?rt+=D.t.v*R[0]*at:rt+=D.t.v*R*at);nt=!1}for(rt&&(rt+=it);st<a;)k[st].animatorJustifyOffset=rt,st+=1}for(a=0;a<s;a+=1){if(C.reset(),N=1,k[a].n)r=0,i+=t.yOffset,i+=B?1:0,o=U,B=!1,this._hasMaskedPath&&(f=Z,m=(d=u[c=J].points)[f-1],y=(h=d[f]).partialLength,l=0),tt="",X="",W="",K="",et=this.defaultPropsArray;else{if(this._hasMaskedPath){if(Q!==k[a].line){switch(t.j){case 1:o+=g-t.lineWidths[k[a].line];break;case 2:o+=(g-t.lineWidths[k[a].line])/2}Q=k[a].line}$!==k[a].ind&&(k[$]&&(o+=k[$].extra),o+=k[a].an/2,$=k[a].ind),o+=E[0]*k[a].an*.005;var ot=0;for(M=0;M<F;M+=1)(D=P[M].a).p.propType&&((R=P[M].s.getMult(k[a].anIndexes[M],S.a[M].s.totalChars)).length?ot+=D.p.v[0]*R[0]:ot+=D.p.v[0]*R),D.a.propType&&((R=P[M].s.getMult(k[a].anIndexes[M],S.a[M].s.totalChars)).length?ot+=D.a.v[0]*R[0]:ot+=D.a.v[0]*R);for(p=!0;p;)l+y>=o+ot||!d?(v=(o+ot-l)/h.partialLength,z=m.point[0]+(h.point[0]-m.point[0])*v,G=m.point[1]+(h.point[1]-m.point[1])*v,C.translate(-E[0]*k[a].an*.005,-E[1]*V*.01),p=!1):d&&(l+=h.partialLength,(f+=1)>=d.length&&(f=0,u[c+=1]?d=u[c].points:x.v.c?(f=0,d=u[c=0].points):(l-=h.partialLength,d=null)),d&&(m=h,y=(h=d[f]).partialLength));L=k[a].an/2-k[a].add,C.translate(-L,0,0)}else L=k[a].an/2-k[a].add,C.translate(-L,0,0),C.translate(-E[0]*k[a].an*.005,-E[1]*V*.01,0);for(M=0;M<F;M+=1)(D=P[M].a).t.propType&&(R=P[M].s.getMult(k[a].anIndexes[M],S.a[M].s.totalChars),0===r&&0===t.j||(this._hasMaskedPath?R.length?o+=D.t.v*R[0]:o+=D.t.v*R:R.length?r+=D.t.v*R[0]:r+=D.t.v*R));for(t.strokeWidthAnim&&(H=t.sw||0),t.strokeColorAnim&&(O=t.sc?[t.sc[0],t.sc[1],t.sc[2]]:[0,0,0]),t.fillColorAnim&&t.fc&&(j=[t.fc[0],t.fc[1],t.fc[2]]),M=0;M<F;M+=1)(D=P[M].a).a.propType&&((R=P[M].s.getMult(k[a].anIndexes[M],S.a[M].s.totalChars)).length?C.translate(-D.a.v[0]*R[0],-D.a.v[1]*R[1],D.a.v[2]*R[2]):C.translate(-D.a.v[0]*R,-D.a.v[1]*R,D.a.v[2]*R));for(M=0;M<F;M+=1)(D=P[M].a).s.propType&&((R=P[M].s.getMult(k[a].anIndexes[M],S.a[M].s.totalChars)).length?C.scale(1+(D.s.v[0]-1)*R[0],1+(D.s.v[1]-1)*R[1],1):C.scale(1+(D.s.v[0]-1)*R,1+(D.s.v[1]-1)*R,1));for(M=0;M<F;M+=1){if(D=P[M].a,R=P[M].s.getMult(k[a].anIndexes[M],S.a[M].s.totalChars),D.sk.propType&&(R.length?C.skewFromAxis(-D.sk.v*R[0],D.sa.v*R[1]):C.skewFromAxis(-D.sk.v*R,D.sa.v*R)),D.r.propType&&(R.length?C.rotateZ(-D.r.v*R[2]):C.rotateZ(-D.r.v*R)),D.ry.propType&&(R.length?C.rotateY(D.ry.v*R[1]):C.rotateY(D.ry.v*R)),D.rx.propType&&(R.length?C.rotateX(D.rx.v*R[0]):C.rotateX(D.rx.v*R)),D.o.propType&&(R.length?N+=(D.o.v*R[0]-N)*R[0]:N+=(D.o.v*R-N)*R),t.strokeWidthAnim&&D.sw.propType&&(R.length?H+=D.sw.v*R[0]:H+=D.sw.v*R),t.strokeColorAnim&&D.sc.propType)for(q=0;q<3;q+=1)R.length?O[q]+=(D.sc.v[q]-O[q])*R[0]:O[q]+=(D.sc.v[q]-O[q])*R;if(t.fillColorAnim&&t.fc){if(D.fc.propType)for(q=0;q<3;q+=1)R.length?j[q]+=(D.fc.v[q]-j[q])*R[0]:j[q]+=(D.fc.v[q]-j[q])*R;D.fh.propType&&(j=R.length?addHueToRGB(j,D.fh.v*R[0]):addHueToRGB(j,D.fh.v*R)),D.fs.propType&&(j=R.length?addSaturationToRGB(j,D.fs.v*R[0]):addSaturationToRGB(j,D.fs.v*R)),D.fb.propType&&(j=R.length?addBrightnessToRGB(j,D.fb.v*R[0]):addBrightnessToRGB(j,D.fb.v*R))}}for(M=0;M<F;M+=1)(D=P[M].a).p.propType&&(R=P[M].s.getMult(k[a].anIndexes[M],S.a[M].s.totalChars),this._hasMaskedPath?R.length?C.translate(0,D.p.v[1]*R[0],-D.p.v[2]*R[1]):C.translate(0,D.p.v[1]*R,-D.p.v[2]*R):R.length?C.translate(D.p.v[0]*R[0],D.p.v[1]*R[1],-D.p.v[2]*R[2]):C.translate(D.p.v[0]*R,D.p.v[1]*R,-D.p.v[2]*R));if(t.strokeWidthAnim&&(W=H<0?0:H),t.strokeColorAnim&&(Y="rgb("+Math.round(255*O[0])+","+Math.round(255*O[1])+","+Math.round(255*O[2])+")"),t.fillColorAnim&&t.fc&&(X="rgb("+Math.round(255*j[0])+","+Math.round(255*j[1])+","+Math.round(255*j[2])+")"),this._hasMaskedPath){if(C.translate(0,-t.ls),C.translate(0,E[1]*V*.01+i,0),S.p.p){b=(h.point[1]-m.point[1])/(h.point[0]-m.point[0]);var ht=180*Math.atan(b)/Math.PI;h.point[0]<m.point[0]&&(ht+=180),C.rotate(-ht*Math.PI/180)}C.translate(z,G,0),o-=E[0]*k[a].an*.005,k[a+1]&&$!==k[a+1].ind&&(o+=k[a].an/2,o+=.001*t.tr*t.finalSize)}else{switch(C.translate(r,i,0),t.ps&&C.translate(t.ps[0],t.ps[1]+t.ascent,0),t.j){case 1:C.translate(k[a].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[k[a].line]),0,0);break;case 2:C.translate(k[a].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[k[a].line])/2,0,0)}C.translate(0,-t.ls),C.translate(L,0,0),C.translate(E[0]*k[a].an*.005,E[1]*V*.01,0),r+=k[a].l+.001*t.tr*t.finalSize}"html"===_?tt=C.toCSS():"svg"===_?tt=C.to2dCSS():et=[C.props[0],C.props[1],C.props[2],C.props[3],C.props[4],C.props[5],C.props[6],C.props[7],C.props[8],C.props[9],C.props[10],C.props[11],C.props[12],C.props[13],C.props[14],C.props[15]],K=N}A<=a?(I=new LetterProps(K,W,Y,X,tt,et),this.renderedLetters.push(I),A+=1,this.lettersChangedFlag=!0):(I=this.renderedLetters[a],this.lettersChangedFlag=I.update(K,W,Y,X,tt,et)||this.lettersChangedFlag)}}},TextAnimatorProperty.prototype.getValue=function(){this._elem.globalData.frameId!==this._frameId&&(this._frameId=this._elem.globalData.frameId,this.iterateDynamicProperties())},TextAnimatorProperty.prototype.mHelper=new Matrix,TextAnimatorProperty.prototype.defaultPropsArray=[],extendPrototype([DynamicPropertyContainer],TextAnimatorProperty),LetterProps.prototype.update=function(t,e,r,i,a,s){this._mdf.o=!1,this._mdf.sw=!1,this._mdf.sc=!1,this._mdf.fc=!1,this._mdf.m=!1,this._mdf.p=!1;var n=!1;return this.o!==t&&(this.o=t,this._mdf.o=!0,n=!0),this.sw!==e&&(this.sw=e,this._mdf.sw=!0,n=!0),this.sc!==r&&(this.sc=r,this._mdf.sc=!0,n=!0),this.fc!==i&&(this.fc=i,this._mdf.fc=!0,n=!0),this.m!==a&&(this.m=a,this._mdf.m=!0,n=!0),!s.length||this.p[0]===s[0]&&this.p[1]===s[1]&&this.p[4]===s[4]&&this.p[5]===s[5]&&this.p[12]===s[12]&&this.p[13]===s[13]||(this.p=s,this._mdf.p=!0,n=!0),n},TextProperty.prototype.defaultBoxWidth=[0,0],TextProperty.prototype.copyData=function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},TextProperty.prototype.setCurrentData=function(t){t.__complete||this.completeTextData(t),this.currentData=t,this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth,this._mdf=!0},TextProperty.prototype.searchProperty=function(){return this.searchKeyframes()},TextProperty.prototype.searchKeyframes=function(){return this.kf=this.data.d.k.length>1,this.kf&&this.addEffect(this.getKeyframeValue.bind(this)),this.kf},TextProperty.prototype.addEffect=function(t){this.effectsSequence.push(t),this.elem.addDynamicProperty(this)},TextProperty.prototype.getValue=function(t){if(this.elem.globalData.frameId!==this.frameId&&this.effectsSequence.length||t){this.currentData.t=this.data.d.k[this.keysIndex].s.t;var e=this.currentData,r=this.keysIndex;if(this.lock)this.setCurrentData(this.currentData);else{var i;this.lock=!0,this._mdf=!1;var a=this.effectsSequence.length,s=t||this.data.d.k[this.keysIndex].s;for(i=0;i<a;i+=1)s=r!==this.keysIndex?this.effectsSequence[i](s,s.t):this.effectsSequence[i](this.currentData,s.t);e!==s&&this.setCurrentData(s),this.v=this.currentData,this.pv=this.v,this.lock=!1,this.frameId=this.elem.globalData.frameId}}},TextProperty.prototype.getKeyframeValue=function(){for(var t=this.data.d.k,e=this.elem.comp.renderedFrame,r=0,i=t.length;r<=i-1&&!(r===i-1||t[r+1].t>e);)r+=1;return this.keysIndex!==r&&(this.keysIndex=r),this.data.d.k[this.keysIndex].s},TextProperty.prototype.buildFinalText=function(t){for(var e,r=FontManager.getCombinedCharacterCodes(),i=[],a=0,s=t.length;a<s;)e=t.charCodeAt(a),-1!==r.indexOf(e)?i[i.length-1]+=t.charAt(a):e>=55296&&e<=56319&&(e=t.charCodeAt(a+1))>=56320&&e<=57343?(i.push(t.substr(a,2)),a+=1):i.push(t.charAt(a)),a+=1;return i},TextProperty.prototype.completeTextData=function(t){t.__complete=!0;var e,r,i,a,s,n,o,h=this.elem.globalData.fontManager,l=this.data,p=[],f=0,c=l.m.g,m=0,d=0,u=0,y=[],g=0,v=0,b=h.getFontByName(t.f),x=0,E=getFontProperties(b);t.fWeight=E.weight,t.fStyle=E.style,t.finalSize=t.s,t.finalText=this.buildFinalText(t.t),r=t.finalText.length,t.finalLineHeight=t.lh;var P,S=t.tr/1e3*t.finalSize;if(t.sz)for(var C,_,A=!0,k=t.sz[0],T=t.sz[1];A;){C=0,g=0,r=(_=this.buildFinalText(t.t)).length,S=t.tr/1e3*t.finalSize;var w=-1;for(e=0;e<r;e+=1)P=_[e].charCodeAt(0),i=!1," "===_[e]?w=e:13!==P&&3!==P||(g=0,i=!0,C+=t.finalLineHeight||1.2*t.finalSize),h.chars?(o=h.getCharData(_[e],b.fStyle,b.fFamily),x=i?0:o.w*t.finalSize/100):x=h.measureText(_[e],t.f,t.finalSize),g+x>k&&" "!==_[e]?(-1===w?r+=1:e=w,C+=t.finalLineHeight||1.2*t.finalSize,_.splice(e,w===e?1:0,"\r"),w=-1,g=0):(g+=x,g+=S);C+=b.ascent*t.finalSize/100,this.canResize&&t.finalSize>this.minimumFontSize&&T<C?(t.finalSize-=1,t.finalLineHeight=t.finalSize*t.lh/t.s):(t.finalText=_,r=t.finalText.length,A=!1)}g=-S,x=0;var D,M=0;for(e=0;e<r;e+=1)if(i=!1,13===(P=(D=t.finalText[e]).charCodeAt(0))||3===P?(M=0,y.push(g),v=g>v?g:v,g=-2*S,a="",i=!0,u+=1):a=D,h.chars?(o=h.getCharData(D,b.fStyle,h.getFontByName(t.f).fFamily),x=i?0:o.w*t.finalSize/100):x=h.measureText(a,t.f,t.finalSize)," "===D?M+=x+S:(g+=x+S+M,M=0),p.push({l:x,an:x,add:m,n:i,anIndexes:[],val:a,line:u,animatorJustifyOffset:0}),2==c){if(m+=x,""===a||" "===a||e===r-1){for(""!==a&&" "!==a||(m-=x);d<=e;)p[d].an=m,p[d].ind=f,p[d].extra=x,d+=1;f+=1,m=0}}else if(3==c){if(m+=x,""===a||e===r-1){for(""===a&&(m-=x);d<=e;)p[d].an=m,p[d].ind=f,p[d].extra=x,d+=1;m=0,f+=1}}else p[f].ind=f,p[f].extra=0,f+=1;if(t.l=p,v=g>v?g:v,y.push(g),t.sz)t.boxWidth=t.sz[0],t.justifyOffset=0;else switch(t.boxWidth=v,t.j){case 1:t.justifyOffset=-t.boxWidth;break;case 2:t.justifyOffset=-t.boxWidth/2;break;default:t.justifyOffset=0}t.lineWidths=y;var F,I,R,V,B=l.a;n=B.length;var L=[];for(s=0;s<n;s+=1){for((F=B[s]).a.sc&&(t.strokeColorAnim=!0),F.a.sw&&(t.strokeWidthAnim=!0),(F.a.fc||F.a.fh||F.a.fs||F.a.fb)&&(t.fillColorAnim=!0),V=0,R=F.s.b,e=0;e<r;e+=1)(I=p[e]).anIndexes[s]=V,(1==R&&""!==I.val||2==R&&""!==I.val&&" "!==I.val||3==R&&(I.n||" "==I.val||e==r-1)||4==R&&(I.n||e==r-1))&&(1===F.s.rn&&L.push(V),V+=1);l.a[s].s.totalChars=V;var z,G=-1;if(1===F.s.rn)for(e=0;e<r;e+=1)G!=(I=p[e]).anIndexes[s]&&(G=I.anIndexes[s],z=L.splice(Math.floor(Math.random()*L.length),1)[0]),I.anIndexes[s]=z}t.yOffset=t.finalLineHeight||1.2*t.finalSize,t.ls=t.ls||0,t.ascent=b.ascent*t.finalSize/100},TextProperty.prototype.updateDocumentData=function(t,e){e=void 0===e?this.keysIndex:e;var r=this.copyData({},this.data.d.k[e].s);r=this.copyData(r,t),this.data.d.k[e].s=r,this.recalculate(e),this.elem.addDynamicProperty(this)},TextProperty.prototype.recalculate=function(t){var e=this.data.d.k[t].s;e.__complete=!1,this.keysIndex=0,this._isFirstFrame=!0,this.getValue(e)},TextProperty.prototype.canResizeFont=function(t){this.canResize=t,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)},TextProperty.prototype.setMinimumFontSize=function(t){this.minimumFontSize=Math.floor(t)||1,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)};var TextSelectorProp=function(){var t=Math.max,e=Math.min,r=Math.floor;function i(t,e){this._currentTextLength=-1,this.k=!1,this.data=e,this.elem=t,this.comp=t.comp,this.finalS=0,this.finalE=0,this.initDynamicPropertyContainer(t),this.s=PropertyFactory.getProp(t,e.s||{k:0},0,0,this),this.e="e"in e?PropertyFactory.getProp(t,e.e,0,0,this):{v:100},this.o=PropertyFactory.getProp(t,e.o||{k:0},0,0,this),this.xe=PropertyFactory.getProp(t,e.xe||{k:0},0,0,this),this.ne=PropertyFactory.getProp(t,e.ne||{k:0},0,0,this),this.a=PropertyFactory.getProp(t,e.a,0,.01,this),this.dynamicProperties.length||this.getValue()}return i.prototype={getMult:function(i){this._currentTextLength!==this.elem.textProperty.currentData.l.length&&this.getValue();var a=0,s=0,n=1,o=1;this.ne.v>0?a=this.ne.v/100:s=-this.ne.v/100,this.xe.v>0?n=1-this.xe.v/100:o=1+this.xe.v/100;var h=BezierFactory.getBezierEasing(a,s,n,o).get,l=0,p=this.finalS,f=this.finalE,c=this.data.sh;if(2===c)l=h(l=f===p?i>=f?1:0:t(0,e(.5/(f-p)+(i-p)/(f-p),1)));else if(3===c)l=h(l=f===p?i>=f?0:1:1-t(0,e(.5/(f-p)+(i-p)/(f-p),1)));else if(4===c)f===p?l=0:(l=t(0,e(.5/(f-p)+(i-p)/(f-p),1)))<.5?l*=2:l=1-2*(l-.5),l=h(l);else if(5===c){if(f===p)l=0;else{var m=f-p,d=-m/2+(i=e(t(0,i+.5-p),f-p)),u=m/2;l=Math.sqrt(1-d*d/(u*u))}l=h(l)}else 6===c?(f===p?l=0:(i=e(t(0,i+.5-p),f-p),l=(1+Math.cos(Math.PI+2*Math.PI*i/(f-p)))/2),l=h(l)):(i>=r(p)&&(l=t(0,e(i-p<0?e(f,1)-(p-i):f-i,1))),l=h(l));return l*this.a.v},getValue:function(t){this.iterateDynamicProperties(),this._mdf=t||this._mdf,this._currentTextLength=this.elem.textProperty.currentData.l.length||0,t&&2===this.data.r&&(this.e.v=this._currentTextLength);var e=2===this.data.r?1:100/this.data.totalChars,r=this.o.v/e,i=this.s.v/e+r,a=this.e.v/e+r;if(i>a){var s=i;i=a,a=s}this.finalS=i,this.finalE=a}},extendPrototype([DynamicPropertyContainer],i),{getTextSelectorProp:function(t,e,r){return new i(t,e,r)}}}(),poolFactory=function(t,e,r){var i=0,a=t,s=createSizedArray(a);return{newElement:function(){return i?s[i-=1]:e()},release:function(t){i===a&&(s=pooling.double(s),a*=2),r&&r(t),s[i]=t,i+=1}}},pooling={double:function(t){return t.concat(createSizedArray(t.length))}},pointPool=poolFactory(8,(function(){return createTypedArray("float32",2)})),shapePool=(factory=poolFactory(4,(function(){return new ShapePath}),(function(t){var e,r=t._length;for(e=0;e<r;e+=1)pointPool.release(t.v[e]),pointPool.release(t.i[e]),pointPool.release(t.o[e]),t.v[e]=null,t.i[e]=null,t.o[e]=null;t._length=0,t.c=!1})),factory.clone=function(t){var e,r=factory.newElement(),i=void 0===t._length?t.v.length:t._length;for(r.setLength(i),r.c=t.c,e=0;e<i;e+=1)r.setTripleAt(t.v[e][0],t.v[e][1],t.o[e][0],t.o[e][1],t.i[e][0],t.i[e][1],e);return r},factory),factory,shapeCollectionPool=function(){var t={newShapeCollection:function(){var t;t=e?i[e-=1]:new ShapeCollection;return t},release:function(t){var a,s=t._length;for(a=0;a<s;a+=1)shapePool.release(t.shapes[a]);t._length=0,e===r&&(i=pooling.double(i),r*=2);i[e]=t,e+=1}},e=0,r=4,i=createSizedArray(r);return t}(),segmentsLengthPool=poolFactory(8,(function(){return{lengths:[],totalLength:0}}),(function(t){var e,r=t.lengths.length;for(e=0;e<r;e+=1)bezierLengthPool.release(t.lengths[e]);t.lengths.length=0})),bezierLengthPool=poolFactory(8,(function(){return{addedLength:0,percents:createTypedArray("float32",defaultCurveSegments),lengths:createTypedArray("float32",defaultCurveSegments)}})),markerParser=function(){function t(t){for(var e,r=t.split("\r\n"),i={},a=0,s=0;s<r.length;s+=1)2===(e=r[s].split(":")).length&&(i[e[0]]=e[1].trim(),a+=1);if(0===a)throw new Error;return i}return function(e){for(var r=[],i=0;i<e.length;i+=1){var a=e[i],s={time:a.tm,duration:a.dr};try{s.payload=JSON.parse(e[i].cm)}catch(r){try{s.payload=t(e[i].cm)}catch(t){s.payload={name:e[i]}}}r.push(s)}return r}}();function BaseRenderer(){}function SVGRenderer(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.svgElement=createNS("svg");var r="";if(e&&e.title){var i=createNS("title"),a=createElementID();i.setAttribute("id",a),i.textContent=e.title,this.svgElement.appendChild(i),r+=a}if(e&&e.description){var s=createNS("desc"),n=createElementID();s.setAttribute("id",n),s.textContent=e.description,this.svgElement.appendChild(s),r+=" "+n}r&&this.svgElement.setAttribute("aria-labelledby",r);var o=createNS("defs");this.svgElement.appendChild(o);var h=createNS("g");this.svgElement.appendChild(h),this.layerElement=h,this.renderConfig={preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",progressiveLoad:e&&e.progressiveLoad||!1,hideOnTransparent:!(e&&!1===e.hideOnTransparent),viewBoxOnly:e&&e.viewBoxOnly||!1,viewBoxSize:e&&e.viewBoxSize||!1,className:e&&e.className||"",id:e&&e.id||"",focusable:e&&e.focusable,filterSize:{width:e&&e.filterSize&&e.filterSize.width||"100%",height:e&&e.filterSize&&e.filterSize.height||"100%",x:e&&e.filterSize&&e.filterSize.x||"0%",y:e&&e.filterSize&&e.filterSize.y||"0%"}},this.globalData={_mdf:!1,frameNum:-1,defs:o,renderConfig:this.renderConfig},this.elements=[],this.pendingElements=[],this.destroyed=!1,this.rendererType="svg"}function CanvasRenderer(t,e){this.animationItem=t,this.renderConfig={clearCanvas:!e||void 0===e.clearCanvas||e.clearCanvas,context:e&&e.context||null,progressiveLoad:e&&e.progressiveLoad||!1,preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",className:e&&e.className||"",id:e&&e.id||""},this.renderConfig.dpr=e&&e.dpr||1,this.animationItem.wrapper&&(this.renderConfig.dpr=e&&e.dpr||window.devicePixelRatio||1),this.renderedFrame=-1,this.globalData={frameNum:-1,_mdf:!1,renderConfig:this.renderConfig,currentGlobalAlpha:-1},this.contextData=new CVContextData,this.elements=[],this.pendingElements=[],this.transformMat=new Matrix,this.completeLayers=!1,this.rendererType="canvas"}function HybridRenderer(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.renderConfig={className:e&&e.className||"",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",hideOnTransparent:!(e&&!1===e.hideOnTransparent),filterSize:{width:e&&e.filterSize&&e.filterSize.width||"400%",height:e&&e.filterSize&&e.filterSize.height||"400%",x:e&&e.filterSize&&e.filterSize.x||"-100%",y:e&&e.filterSize&&e.filterSize.y||"-100%"}},this.globalData={_mdf:!1,frameNum:-1,renderConfig:this.renderConfig},this.pendingElements=[],this.elements=[],this.threeDElements=[],this.destroyed=!1,this.camera=null,this.supports3d=!0,this.rendererType="html"}function MaskElement(t,e,r){this.data=t,this.element=e,this.globalData=r,this.storedData=[],this.masksProperties=this.data.masksProperties||[],this.maskElement=null;var i,a,s=this.globalData.defs,n=this.masksProperties?this.masksProperties.length:0;this.viewData=createSizedArray(n),this.solidPath="";var o,h,l,p,f,c,m=this.masksProperties,d=0,u=[],y=createElementID(),g="clipPath",v="clip-path";for(i=0;i<n;i+=1)if(("a"!==m[i].mode&&"n"!==m[i].mode||m[i].inv||100!==m[i].o.k||m[i].o.x)&&(g="mask",v="mask"),"s"!==m[i].mode&&"i"!==m[i].mode||0!==d?l=null:((l=createNS("rect")).setAttribute("fill","#ffffff"),l.setAttribute("width",this.element.comp.data.w||0),l.setAttribute("height",this.element.comp.data.h||0),u.push(l)),a=createNS("path"),"n"===m[i].mode)this.viewData[i]={op:PropertyFactory.getProp(this.element,m[i].o,0,.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,m[i],3),elem:a,lastPath:""},s.appendChild(a);else{var b;if(d+=1,a.setAttribute("fill","s"===m[i].mode?"#000000":"#ffffff"),a.setAttribute("clip-rule","nonzero"),0!==m[i].x.k?(g="mask",v="mask",c=PropertyFactory.getProp(this.element,m[i].x,0,null,this.element),b=createElementID(),(p=createNS("filter")).setAttribute("id",b),(f=createNS("feMorphology")).setAttribute("operator","erode"),f.setAttribute("in","SourceGraphic"),f.setAttribute("radius","0"),p.appendChild(f),s.appendChild(p),a.setAttribute("stroke","s"===m[i].mode?"#000000":"#ffffff")):(f=null,c=null),this.storedData[i]={elem:a,x:c,expan:f,lastPath:"",lastOperator:"",filterId:b,lastRadius:0},"i"===m[i].mode){h=u.length;var x=createNS("g");for(o=0;o<h;o+=1)x.appendChild(u[o]);var E=createNS("mask");E.setAttribute("mask-type","alpha"),E.setAttribute("id",y+"_"+d),E.appendChild(a),s.appendChild(E),x.setAttribute("mask","url("+locationHref+"#"+y+"_"+d+")"),u.length=0,u.push(x)}else u.push(a);m[i].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[i]={elem:a,lastPath:"",op:PropertyFactory.getProp(this.element,m[i].o,0,.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,m[i],3),invRect:l},this.viewData[i].prop.k||this.drawPath(m[i],this.viewData[i].prop.v,this.viewData[i])}for(this.maskElement=createNS(g),n=u.length,i=0;i<n;i+=1)this.maskElement.appendChild(u[i]);d>0&&(this.maskElement.setAttribute("id",y),this.element.maskedElement.setAttribute(v,"url("+locationHref+"#"+y+")"),s.appendChild(this.maskElement)),this.viewData.length&&this.element.addRenderableComponent(this)}function HierarchyElement(){}function FrameElement(){}function TransformElement(){}function RenderableElement(){}function RenderableDOMElement(){}function ProcessedElement(t,e){this.elem=t,this.pos=e}function SVGStyleData(t,e){this.data=t,this.type=t.ty,this.d="",this.lvl=e,this._mdf=!1,this.closed=!0===t.hd,this.pElem=createNS("path"),this.msElem=null}function SVGShapeData(t,e,r){this.caches=[],this.styles=[],this.transformers=t,this.lStr="",this.sh=r,this.lvl=e,this._isAnimated=!!r.k;for(var i=0,a=t.length;i<a;){if(t[i].mProps.dynamicProperties.length){this._isAnimated=!0;break}i+=1}}function SVGTransformData(t,e,r){this.transform={mProps:t,op:e,container:r},this.elements=[],this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length}function SVGStrokeStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.w=PropertyFactory.getProp(t,e.w,0,null,this),this.d=new DashProperty(t,e.d||{},"svg",this),this.c=PropertyFactory.getProp(t,e.c,1,255,this),this.style=r,this._isAnimated=!!this._isAnimated}function SVGFillStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.c=PropertyFactory.getProp(t,e.c,1,255,this),this.style=r}function SVGGradientFillStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.initGradientData(t,e,r)}function SVGGradientStrokeStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.w=PropertyFactory.getProp(t,e.w,0,null,this),this.d=new DashProperty(t,e.d||{},"svg",this),this.initGradientData(t,e,r),this._isAnimated=!!this._isAnimated}function ShapeGroupData(){this.it=[],this.prevViewData=[],this.gr=createNS("g")}BaseRenderer.prototype.checkLayers=function(t){var e,r,i=this.layers.length;for(this.completeLayers=!0,e=i-1;e>=0;e-=1)this.elements[e]||(r=this.layers[e]).ip-r.st<=t-this.layers[e].st&&r.op-r.st>t-this.layers[e].st&&this.buildItem(e),this.completeLayers=!!this.elements[e]&&this.completeLayers;this.checkPendingElements()},BaseRenderer.prototype.createItem=function(t){switch(t.ty){case 2:return this.createImage(t);case 0:return this.createComp(t);case 1:return this.createSolid(t);case 3:return this.createNull(t);case 4:return this.createShape(t);case 5:return this.createText(t);case 6:return this.createAudio(t);case 13:return this.createCamera(t);case 15:return this.createFootage(t);default:return this.createNull(t)}},BaseRenderer.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},BaseRenderer.prototype.createAudio=function(t){return new AudioElement(t,this.globalData,this)},BaseRenderer.prototype.createFootage=function(t){return new FootageElement(t,this.globalData,this)},BaseRenderer.prototype.buildAllItems=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.buildItem(t);this.checkPendingElements()},BaseRenderer.prototype.includeLayers=function(t){var e;this.completeLayers=!1;var r,i=t.length,a=this.layers.length;for(e=0;e<i;e+=1)for(r=0;r<a;){if(this.layers[r].id===t[e].id){this.layers[r]=t[e];break}r+=1}},BaseRenderer.prototype.setProjectInterface=function(t){this.globalData.projectInterface=t},BaseRenderer.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},BaseRenderer.prototype.buildElementParenting=function(t,e,r){for(var i=this.elements,a=this.layers,s=0,n=a.length;s<n;)a[s].ind==e&&(i[s]&&!0!==i[s]?(r.push(i[s]),i[s].setAsParent(),void 0!==a[s].parent?this.buildElementParenting(t,a[s].parent,r):t.setHierarchy(r)):(this.buildItem(s),this.addPendingElement(t))),s+=1},BaseRenderer.prototype.addPendingElement=function(t){this.pendingElements.push(t)},BaseRenderer.prototype.searchExtraCompositions=function(t){var e,r=t.length;for(e=0;e<r;e+=1)if(t[e].xt){var i=this.createComp(t[e]);i.initExpressions(),this.globalData.projectInterface.registerComposition(i)}},BaseRenderer.prototype.setupGlobalData=function(t,e){this.globalData.fontManager=new FontManager,this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,e),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.imageLoader=this.animationItem.imagePreloader,this.globalData.audioController=this.animationItem.audioController,this.globalData.frameId=0,this.globalData.frameRate=t.fr,this.globalData.nm=t.nm,this.globalData.compSize={w:t.w,h:t.h}},extendPrototype([BaseRenderer],SVGRenderer),SVGRenderer.prototype.createNull=function(t){return new NullElement(t,this.globalData,this)},SVGRenderer.prototype.createShape=function(t){return new SVGShapeElement(t,this.globalData,this)},SVGRenderer.prototype.createText=function(t){return new SVGTextLottieElement(t,this.globalData,this)},SVGRenderer.prototype.createImage=function(t){return new IImageElement(t,this.globalData,this)},SVGRenderer.prototype.createComp=function(t){return new SVGCompElement(t,this.globalData,this)},SVGRenderer.prototype.createSolid=function(t){return new ISolidElement(t,this.globalData,this)},SVGRenderer.prototype.configAnimation=function(t){this.svgElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.renderConfig.viewBoxSize?this.svgElement.setAttribute("viewBox",this.renderConfig.viewBoxSize):this.svgElement.setAttribute("viewBox","0 0 "+t.w+" "+t.h),this.renderConfig.viewBoxOnly||(this.svgElement.setAttribute("width",t.w),this.svgElement.setAttribute("height",t.h),this.svgElement.style.width="100%",this.svgElement.style.height="100%",this.svgElement.style.transform="translate3d(0,0,0)"),this.renderConfig.className&&this.svgElement.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.svgElement.setAttribute("id",this.renderConfig.id),void 0!==this.renderConfig.focusable&&this.svgElement.setAttribute("focusable",this.renderConfig.focusable),this.svgElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.svgElement);var e=this.globalData.defs;this.setupGlobalData(t,e),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.data=t;var r=createNS("clipPath"),i=createNS("rect");i.setAttribute("width",t.w),i.setAttribute("height",t.h),i.setAttribute("x",0),i.setAttribute("y",0);var a=createElementID();r.setAttribute("id",a),r.appendChild(i),this.layerElement.setAttribute("clip-path","url("+locationHref+"#"+a+")"),e.appendChild(r),this.layers=t.layers,this.elements=createSizedArray(t.layers.length)},SVGRenderer.prototype.destroy=function(){var t;this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.layerElement=null,this.globalData.defs=null;var e=this.layers?this.layers.length:0;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},SVGRenderer.prototype.updateContainerSize=function(){},SVGRenderer.prototype.buildItem=function(t){var e=this.elements;if(!e[t]&&99!==this.layers[t].ty){e[t]=!0;var r=this.createItem(this.layers[t]);e[t]=r,expressionsPlugin&&(0===this.layers[t].ty&&this.globalData.projectInterface.registerComposition(r),r.initExpressions()),this.appendElementInPos(r,t),this.layers[t].tt&&(this.elements[t-1]&&!0!==this.elements[t-1]?r.setMatte(e[t-1].layerId):(this.buildItem(t-1),this.addPendingElement(r)))}},SVGRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();if(t.checkParenting(),t.data.tt)for(var e=0,r=this.elements.length;e<r;){if(this.elements[e]===t){t.setMatte(this.elements[e-1].layerId);break}e+=1}}},SVGRenderer.prototype.renderFrame=function(t){if(this.renderedFrame!==t&&!this.destroyed){var e;null===t?t=this.renderedFrame:this.renderedFrame=t,this.globalData.frameNum=t,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t,this.globalData._mdf=!1;var r=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=r-1;e>=0;e-=1)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);if(this.globalData._mdf)for(e=0;e<r;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}},SVGRenderer.prototype.appendElementInPos=function(t,e){var r=t.getBaseElement();if(r){for(var i,a=0;a<e;)this.elements[a]&&!0!==this.elements[a]&&this.elements[a].getBaseElement()&&(i=this.elements[a].getBaseElement()),a+=1;i?this.layerElement.insertBefore(r,i):this.layerElement.appendChild(r)}},SVGRenderer.prototype.hide=function(){this.layerElement.style.display="none"},SVGRenderer.prototype.show=function(){this.layerElement.style.display="block"},extendPrototype([BaseRenderer],CanvasRenderer),CanvasRenderer.prototype.createShape=function(t){return new CVShapeElement(t,this.globalData,this)},CanvasRenderer.prototype.createText=function(t){return new CVTextElement(t,this.globalData,this)},CanvasRenderer.prototype.createImage=function(t){return new CVImageElement(t,this.globalData,this)},CanvasRenderer.prototype.createComp=function(t){return new CVCompElement(t,this.globalData,this)},CanvasRenderer.prototype.createSolid=function(t){return new CVSolidElement(t,this.globalData,this)},CanvasRenderer.prototype.createNull=SVGRenderer.prototype.createNull,CanvasRenderer.prototype.ctxTransform=function(t){if(1!==t[0]||0!==t[1]||0!==t[4]||1!==t[5]||0!==t[12]||0!==t[13])if(this.renderConfig.clearCanvas){this.transformMat.cloneFromProps(t);var e=this.contextData.cTr.props;this.transformMat.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]),this.contextData.cTr.cloneFromProps(this.transformMat.props);var r=this.contextData.cTr.props;this.canvasContext.setTransform(r[0],r[1],r[4],r[5],r[12],r[13])}else this.canvasContext.transform(t[0],t[1],t[4],t[5],t[12],t[13])},CanvasRenderer.prototype.ctxOpacity=function(t){if(!this.renderConfig.clearCanvas)return this.canvasContext.globalAlpha*=t<0?0:t,void(this.globalData.currentGlobalAlpha=this.contextData.cO);this.contextData.cO*=t<0?0:t,this.globalData.currentGlobalAlpha!==this.contextData.cO&&(this.canvasContext.globalAlpha=this.contextData.cO,this.globalData.currentGlobalAlpha=this.contextData.cO)},CanvasRenderer.prototype.reset=function(){this.renderConfig.clearCanvas?this.contextData.reset():this.canvasContext.restore()},CanvasRenderer.prototype.save=function(t){if(this.renderConfig.clearCanvas){t&&this.canvasContext.save();var e,r=this.contextData.cTr.props;this.contextData._length<=this.contextData.cArrPos&&this.contextData.duplicate();var i=this.contextData.saved[this.contextData.cArrPos];for(e=0;e<16;e+=1)i[e]=r[e];this.contextData.savedOp[this.contextData.cArrPos]=this.contextData.cO,this.contextData.cArrPos+=1}else this.canvasContext.save()},CanvasRenderer.prototype.restore=function(t){if(this.renderConfig.clearCanvas){t&&(this.canvasContext.restore(),this.globalData.blendMode="source-over"),this.contextData.cArrPos-=1;var e,r=this.contextData.saved[this.contextData.cArrPos],i=this.contextData.cTr.props;for(e=0;e<16;e+=1)i[e]=r[e];this.canvasContext.setTransform(r[0],r[1],r[4],r[5],r[12],r[13]),r=this.contextData.savedOp[this.contextData.cArrPos],this.contextData.cO=r,this.globalData.currentGlobalAlpha!==r&&(this.canvasContext.globalAlpha=r,this.globalData.currentGlobalAlpha=r)}else this.canvasContext.restore()},CanvasRenderer.prototype.configAnimation=function(t){if(this.animationItem.wrapper){this.animationItem.container=createTag("canvas");var e=this.animationItem.container.style;e.width="100%",e.height="100%";var r="0px 0px 0px";e.transformOrigin=r,e.mozTransformOrigin=r,e.webkitTransformOrigin=r,e["-webkit-transform"]=r,this.animationItem.wrapper.appendChild(this.animationItem.container),this.canvasContext=this.animationItem.container.getContext("2d"),this.renderConfig.className&&this.animationItem.container.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.animationItem.container.setAttribute("id",this.renderConfig.id)}else this.canvasContext=this.renderConfig.context;this.data=t,this.layers=t.layers,this.transformCanvas={w:t.w,h:t.h,sx:0,sy:0,tx:0,ty:0},this.setupGlobalData(t,document.body),this.globalData.canvasContext=this.canvasContext,this.globalData.renderer=this,this.globalData.isDashed=!1,this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.globalData.transformCanvas=this.transformCanvas,this.elements=createSizedArray(t.layers.length),this.updateContainerSize()},CanvasRenderer.prototype.updateContainerSize=function(){var t,e,r,i;if(this.reset(),this.animationItem.wrapper&&this.animationItem.container?(t=this.animationItem.wrapper.offsetWidth,e=this.animationItem.wrapper.offsetHeight,this.animationItem.container.setAttribute("width",t*this.renderConfig.dpr),this.animationItem.container.setAttribute("height",e*this.renderConfig.dpr)):(t=this.canvasContext.canvas.width*this.renderConfig.dpr,e=this.canvasContext.canvas.height*this.renderConfig.dpr),-1!==this.renderConfig.preserveAspectRatio.indexOf("meet")||-1!==this.renderConfig.preserveAspectRatio.indexOf("slice")){var a=this.renderConfig.preserveAspectRatio.split(" "),s=a[1]||"meet",n=a[0]||"xMidYMid",o=n.substr(0,4),h=n.substr(4);r=t/e,(i=this.transformCanvas.w/this.transformCanvas.h)>r&&"meet"===s||i<r&&"slice"===s?(this.transformCanvas.sx=t/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=t/(this.transformCanvas.w/this.renderConfig.dpr)):(this.transformCanvas.sx=e/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.sy=e/(this.transformCanvas.h/this.renderConfig.dpr)),this.transformCanvas.tx="xMid"===o&&(i<r&&"meet"===s||i>r&&"slice"===s)?(t-this.transformCanvas.w*(e/this.transformCanvas.h))/2*this.renderConfig.dpr:"xMax"===o&&(i<r&&"meet"===s||i>r&&"slice"===s)?(t-this.transformCanvas.w*(e/this.transformCanvas.h))*this.renderConfig.dpr:0,this.transformCanvas.ty="YMid"===h&&(i>r&&"meet"===s||i<r&&"slice"===s)?(e-this.transformCanvas.h*(t/this.transformCanvas.w))/2*this.renderConfig.dpr:"YMax"===h&&(i>r&&"meet"===s||i<r&&"slice"===s)?(e-this.transformCanvas.h*(t/this.transformCanvas.w))*this.renderConfig.dpr:0}else"none"===this.renderConfig.preserveAspectRatio?(this.transformCanvas.sx=t/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=e/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.tx=0,this.transformCanvas.ty=0):(this.transformCanvas.sx=this.renderConfig.dpr,this.transformCanvas.sy=this.renderConfig.dpr,this.transformCanvas.tx=0,this.transformCanvas.ty=0);this.transformCanvas.props=[this.transformCanvas.sx,0,0,0,0,this.transformCanvas.sy,0,0,0,0,1,0,this.transformCanvas.tx,this.transformCanvas.ty,0,1],this.ctxTransform(this.transformCanvas.props),this.canvasContext.beginPath(),this.canvasContext.rect(0,0,this.transformCanvas.w,this.transformCanvas.h),this.canvasContext.closePath(),this.canvasContext.clip(),this.renderFrame(this.renderedFrame,!0)},CanvasRenderer.prototype.destroy=function(){var t;for(this.renderConfig.clearCanvas&&this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),t=(this.layers?this.layers.length:0)-1;t>=0;t-=1)this.elements[t]&&this.elements[t].destroy();this.elements.length=0,this.globalData.canvasContext=null,this.animationItem.container=null,this.destroyed=!0},CanvasRenderer.prototype.renderFrame=function(t,e){if((this.renderedFrame!==t||!0!==this.renderConfig.clearCanvas||e)&&!this.destroyed&&-1!==t){var r;this.renderedFrame=t,this.globalData.frameNum=t-this.animationItem._isFirstFrame,this.globalData.frameId+=1,this.globalData._mdf=!this.renderConfig.clearCanvas||e,this.globalData.projectInterface.currentFrame=t;var i=this.layers.length;for(this.completeLayers||this.checkLayers(t),r=0;r<i;r+=1)(this.completeLayers||this.elements[r])&&this.elements[r].prepareFrame(t-this.layers[r].st);if(this.globalData._mdf){for(!0===this.renderConfig.clearCanvas?this.canvasContext.clearRect(0,0,this.transformCanvas.w,this.transformCanvas.h):this.save(),r=i-1;r>=0;r-=1)(this.completeLayers||this.elements[r])&&this.elements[r].renderFrame();!0!==this.renderConfig.clearCanvas&&this.restore()}}},CanvasRenderer.prototype.buildItem=function(t){var e=this.elements;if(!e[t]&&99!==this.layers[t].ty){var r=this.createItem(this.layers[t],this,this.globalData);e[t]=r,r.initExpressions()}},CanvasRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){this.pendingElements.pop().checkParenting()}},CanvasRenderer.prototype.hide=function(){this.animationItem.container.style.display="none"},CanvasRenderer.prototype.show=function(){this.animationItem.container.style.display="block"},extendPrototype([BaseRenderer],HybridRenderer),HybridRenderer.prototype.buildItem=SVGRenderer.prototype.buildItem,HybridRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){this.pendingElements.pop().checkParenting()}},HybridRenderer.prototype.appendElementInPos=function(t,e){var r=t.getBaseElement();if(r){var i=this.layers[e];if(i.ddd&&this.supports3d)this.addTo3dContainer(r,e);else if(this.threeDElements)this.addTo3dContainer(r,e);else{for(var a,s,n=0;n<e;)this.elements[n]&&!0!==this.elements[n]&&this.elements[n].getBaseElement&&(s=this.elements[n],a=(this.layers[n].ddd?this.getThreeDContainerByPos(n):s.getBaseElement())||a),n+=1;a?i.ddd&&this.supports3d||this.layerElement.insertBefore(r,a):i.ddd&&this.supports3d||this.layerElement.appendChild(r)}}},HybridRenderer.prototype.createShape=function(t){return this.supports3d?new HShapeElement(t,this.globalData,this):new SVGShapeElement(t,this.globalData,this)},HybridRenderer.prototype.createText=function(t){return this.supports3d?new HTextElement(t,this.globalData,this):new SVGTextLottieElement(t,this.globalData,this)},HybridRenderer.prototype.createCamera=function(t){return this.camera=new HCameraElement(t,this.globalData,this),this.camera},HybridRenderer.prototype.createImage=function(t){return this.supports3d?new HImageElement(t,this.globalData,this):new IImageElement(t,this.globalData,this)},HybridRenderer.prototype.createComp=function(t){return this.supports3d?new HCompElement(t,this.globalData,this):new SVGCompElement(t,this.globalData,this)},HybridRenderer.prototype.createSolid=function(t){return this.supports3d?new HSolidElement(t,this.globalData,this):new ISolidElement(t,this.globalData,this)},HybridRenderer.prototype.createNull=SVGRenderer.prototype.createNull,HybridRenderer.prototype.getThreeDContainerByPos=function(t){for(var e=0,r=this.threeDElements.length;e<r;){if(this.threeDElements[e].startPos<=t&&this.threeDElements[e].endPos>=t)return this.threeDElements[e].perspectiveElem;e+=1}return null},HybridRenderer.prototype.createThreeDContainer=function(t,e){var r,i,a=createTag("div");styleDiv(a);var s=createTag("div");if(styleDiv(s),"3d"===e){(r=a.style).width=this.globalData.compSize.w+"px",r.height=this.globalData.compSize.h+"px";r.webkitTransformOrigin="50% 50%",r.mozTransformOrigin="50% 50%",r.transformOrigin="50% 50%";var n="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";(i=s.style).transform=n,i.webkitTransform=n}a.appendChild(s);var o={container:s,perspectiveElem:a,startPos:t,endPos:t,type:e};return this.threeDElements.push(o),o},HybridRenderer.prototype.build3dContainers=function(){var t,e,r=this.layers.length,i="";for(t=0;t<r;t+=1)this.layers[t].ddd&&3!==this.layers[t].ty?("3d"!==i&&(i="3d",e=this.createThreeDContainer(t,"3d")),e.endPos=Math.max(e.endPos,t)):("2d"!==i&&(i="2d",e=this.createThreeDContainer(t,"2d")),e.endPos=Math.max(e.endPos,t));for(t=(r=this.threeDElements.length)-1;t>=0;t-=1)this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)},HybridRenderer.prototype.addTo3dContainer=function(t,e){for(var r=0,i=this.threeDElements.length;r<i;){if(e<=this.threeDElements[r].endPos){for(var a,s=this.threeDElements[r].startPos;s<e;)this.elements[s]&&this.elements[s].getBaseElement&&(a=this.elements[s].getBaseElement()),s+=1;a?this.threeDElements[r].container.insertBefore(t,a):this.threeDElements[r].container.appendChild(t);break}r+=1}},HybridRenderer.prototype.configAnimation=function(t){var e=createTag("div"),r=this.animationItem.wrapper,i=e.style;i.width=t.w+"px",i.height=t.h+"px",this.resizerElem=e,styleDiv(e),i.transformStyle="flat",i.mozTransformStyle="flat",i.webkitTransformStyle="flat",this.renderConfig.className&&e.setAttribute("class",this.renderConfig.className),r.appendChild(e),i.overflow="hidden";var a=createNS("svg");a.setAttribute("width","1"),a.setAttribute("height","1"),styleDiv(a),this.resizerElem.appendChild(a);var s=createNS("defs");a.appendChild(s),this.data=t,this.setupGlobalData(t,a),this.globalData.defs=s,this.layers=t.layers,this.layerElement=this.resizerElem,this.build3dContainers(),this.updateContainerSize()},HybridRenderer.prototype.destroy=function(){var t;this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.animationItem.container=null,this.globalData.defs=null;var e=this.layers?this.layers.length:0;for(t=0;t<e;t+=1)this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},HybridRenderer.prototype.updateContainerSize=function(){var t,e,r,i,a=this.animationItem.wrapper.offsetWidth,s=this.animationItem.wrapper.offsetHeight,n=a/s;this.globalData.compSize.w/this.globalData.compSize.h>n?(t=a/this.globalData.compSize.w,e=a/this.globalData.compSize.w,r=0,i=(s-this.globalData.compSize.h*(a/this.globalData.compSize.w))/2):(t=s/this.globalData.compSize.h,e=s/this.globalData.compSize.h,r=(a-this.globalData.compSize.w*(s/this.globalData.compSize.h))/2,i=0);var o=this.resizerElem.style;o.webkitTransform="matrix3d("+t+",0,0,0,0,"+e+",0,0,0,0,1,0,"+r+","+i+",0,1)",o.transform=o.webkitTransform},HybridRenderer.prototype.renderFrame=SVGRenderer.prototype.renderFrame,HybridRenderer.prototype.hide=function(){this.resizerElem.style.display="none"},HybridRenderer.prototype.show=function(){this.resizerElem.style.display="block"},HybridRenderer.prototype.initItems=function(){if(this.buildAllItems(),this.camera)this.camera.setup();else{var t,e=this.globalData.compSize.w,r=this.globalData.compSize.h,i=this.threeDElements.length;for(t=0;t<i;t+=1){var a=this.threeDElements[t].perspectiveElem.style;a.webkitPerspective=Math.sqrt(Math.pow(e,2)+Math.pow(r,2))+"px",a.perspective=a.webkitPerspective}}},HybridRenderer.prototype.searchExtraCompositions=function(t){var e,r=t.length,i=createTag("div");for(e=0;e<r;e+=1)if(t[e].xt){var a=this.createComp(t[e],i,this.globalData.comp,null);a.initExpressions(),this.globalData.projectInterface.registerComposition(a)}},MaskElement.prototype.getMaskProperty=function(t){return this.viewData[t].prop},MaskElement.prototype.renderFrame=function(t){var e,r=this.element.finalTransform.mat,i=this.masksProperties.length;for(e=0;e<i;e+=1)if((this.viewData[e].prop._mdf||t)&&this.drawPath(this.masksProperties[e],this.viewData[e].prop.v,this.viewData[e]),(this.viewData[e].op._mdf||t)&&this.viewData[e].elem.setAttribute("fill-opacity",this.viewData[e].op.v),"n"!==this.masksProperties[e].mode&&(this.viewData[e].invRect&&(this.element.finalTransform.mProp._mdf||t)&&this.viewData[e].invRect.setAttribute("transform",r.getInverseMatrix().to2dCSS()),this.storedData[e].x&&(this.storedData[e].x._mdf||t))){var a=this.storedData[e].expan;this.storedData[e].x.v<0?("erode"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="erode",this.storedData[e].elem.setAttribute("filter","url("+locationHref+"#"+this.storedData[e].filterId+")")),a.setAttribute("radius",-this.storedData[e].x.v)):("dilate"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="dilate",this.storedData[e].elem.setAttribute("filter",null)),this.storedData[e].elem.setAttribute("stroke-width",2*this.storedData[e].x.v))}},MaskElement.prototype.getMaskelement=function(){return this.maskElement},MaskElement.prototype.createLayerSolidPath=function(){var t="M0,0 ";return t+=" h"+this.globalData.compSize.w,t+=" v"+this.globalData.compSize.h,t+=" h-"+this.globalData.compSize.w,t+=" v-"+this.globalData.compSize.h+" "},MaskElement.prototype.drawPath=function(t,e,r){var i,a,s=" M"+e.v[0][0]+","+e.v[0][1];for(a=e._length,i=1;i<a;i+=1)s+=" C"+e.o[i-1][0]+","+e.o[i-1][1]+" "+e.i[i][0]+","+e.i[i][1]+" "+e.v[i][0]+","+e.v[i][1];if(e.c&&a>1&&(s+=" C"+e.o[i-1][0]+","+e.o[i-1][1]+" "+e.i[0][0]+","+e.i[0][1]+" "+e.v[0][0]+","+e.v[0][1]),r.lastPath!==s){var n="";r.elem&&(e.c&&(n=t.inv?this.solidPath+s:s),r.elem.setAttribute("d",n)),r.lastPath=s}},MaskElement.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null},HierarchyElement.prototype={initHierarchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(t){this.hierarchy=t},setAsParent:function(){this._isParent=!0},checkParenting:function(){void 0!==this.data.parent&&this.comp.buildElementParenting(this,this.data.parent,[])}},FrameElement.prototype={initFrame:function(){this._isFirstFrame=!1,this.dynamicProperties=[],this._mdf=!1},prepareProperties:function(t,e){var r,i=this.dynamicProperties.length;for(r=0;r<i;r+=1)(e||this._isParent&&"transform"===this.dynamicProperties[r].propType)&&(this.dynamicProperties[r].getValue(),this.dynamicProperties[r]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(t){-1===this.dynamicProperties.indexOf(t)&&this.dynamicProperties.push(t)}},TransformElement.prototype={initTransform:function(){this.finalTransform={mProp:this.data.ks?TransformPropertyFactory.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:!1,_opMdf:!1,mat:new Matrix},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.data.ty},renderTransform:function(){if(this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame,this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame,this.hierarchy){var t,e=this.finalTransform.mat,r=0,i=this.hierarchy.length;if(!this.finalTransform._matMdf)for(;r<i;){if(this.hierarchy[r].finalTransform.mProp._mdf){this.finalTransform._matMdf=!0;break}r+=1}if(this.finalTransform._matMdf)for(t=this.finalTransform.mProp.v.props,e.cloneFromProps(t),r=0;r<i;r+=1)t=this.hierarchy[r].finalTransform.mProp.v.props,e.transform(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}},globalToLocal:function(t){var e=[];e.push(this.finalTransform);for(var r,i=!0,a=this.comp;i;)a.finalTransform?(a.data.hasMask&&e.splice(0,0,a.finalTransform),a=a.comp):i=!1;var s,n=e.length;for(r=0;r<n;r+=1)s=e[r].mat.applyToPointArray(0,0,0),t=[t[0]-s[0],t[1]-s[1],0];return t},mHelper:new Matrix},RenderableElement.prototype={initRenderable:function(){this.isInRange=!1,this.hidden=!1,this.isTransparent=!1,this.renderableComponents=[]},addRenderableComponent:function(t){-1===this.renderableComponents.indexOf(t)&&this.renderableComponents.push(t)},removeRenderableComponent:function(t){-1!==this.renderableComponents.indexOf(t)&&this.renderableComponents.splice(this.renderableComponents.indexOf(t),1)},prepareRenderableFrame:function(t){this.checkLayerLimits(t)},checkTransparency:function(){this.finalTransform.mProp.o.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.isTransparent&&(this.isTransparent=!1,this.show())},checkLayerLimits:function(t){this.data.ip-this.data.st<=t&&this.data.op-this.data.st>t?!0!==this.isInRange&&(this.globalData._mdf=!0,this._mdf=!0,this.isInRange=!0,this.show()):!1!==this.isInRange&&(this.globalData._mdf=!0,this.isInRange=!1,this.hide())},renderRenderable:function(){var t,e=this.renderableComponents.length;for(t=0;t<e;t+=1)this.renderableComponents[t].renderFrame(this._isFirstFrame)},sourceRectAtTime:function(){return{top:0,left:0,width:100,height:100}},getLayerSize:function(){return 5===this.data.ty?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}}},extendPrototype([RenderableElement,createProxyFunction({initElement:function(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initTransform(t,e,r),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide()},hide:function(){this.hidden||this.isInRange&&!this.isTransparent||((this.baseElement||this.layerElement).style.display="none",this.hidden=!0)},show:function(){this.isInRange&&!this.isTransparent&&(this.data.hd||((this.baseElement||this.layerElement).style.display="block"),this.hidden=!1,this._isFirstFrame=!0)},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},renderInnerContent:function(){},prepareFrame:function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),this.checkTransparency()},destroy:function(){this.innerElem=null,this.destroyBaseElement()}})],RenderableDOMElement),SVGStyleData.prototype.reset=function(){this.d="",this._mdf=!1},SVGShapeData.prototype.setAsAnimated=function(){this._isAnimated=!0},extendPrototype([DynamicPropertyContainer],SVGStrokeStyleData),extendPrototype([DynamicPropertyContainer],SVGFillStyleData),SVGGradientFillStyleData.prototype.initGradientData=function(t,e,r){this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.s=PropertyFactory.getProp(t,e.s,1,null,this),this.e=PropertyFactory.getProp(t,e.e,1,null,this),this.h=PropertyFactory.getProp(t,e.h||{k:0},0,.01,this),this.a=PropertyFactory.getProp(t,e.a||{k:0},0,degToRads,this),this.g=new GradientProperty(t,e.g,this),this.style=r,this.stops=[],this.setGradientData(r.pElem,e),this.setGradientOpacity(e,r),this._isAnimated=!!this._isAnimated},SVGGradientFillStyleData.prototype.setGradientData=function(t,e){var r=createElementID(),i=createNS(1===e.t?"linearGradient":"radialGradient");i.setAttribute("id",r),i.setAttribute("spreadMethod","pad"),i.setAttribute("gradientUnits","userSpaceOnUse");var a,s,n,o=[];for(n=4*e.g.p,s=0;s<n;s+=4)a=createNS("stop"),i.appendChild(a),o.push(a);t.setAttribute("gf"===e.ty?"fill":"stroke","url("+locationHref+"#"+r+")"),this.gf=i,this.cst=o},SVGGradientFillStyleData.prototype.setGradientOpacity=function(t,e){if(this.g._hasOpacity&&!this.g._collapsable){var r,i,a,s=createNS("mask"),n=createNS("path");s.appendChild(n);var o=createElementID(),h=createElementID();s.setAttribute("id",h);var l=createNS(1===t.t?"linearGradient":"radialGradient");l.setAttribute("id",o),l.setAttribute("spreadMethod","pad"),l.setAttribute("gradientUnits","userSpaceOnUse"),a=t.g.k.k[0].s?t.g.k.k[0].s.length:t.g.k.k.length;var p=this.stops;for(i=4*t.g.p;i<a;i+=2)(r=createNS("stop")).setAttribute("stop-color","rgb(255,255,255)"),l.appendChild(r),p.push(r);n.setAttribute("gf"===t.ty?"fill":"stroke","url("+locationHref+"#"+o+")"),this.of=l,this.ms=s,this.ost=p,this.maskId=h,e.msElem=n}},extendPrototype([DynamicPropertyContainer],SVGGradientFillStyleData),extendPrototype([SVGGradientFillStyleData,DynamicPropertyContainer],SVGGradientStrokeStyleData);var SVGElementsRenderer=function(){var t=new Matrix,e=new Matrix;function r(t,e,r){(r||e.transform.op._mdf)&&e.transform.container.setAttribute("opacity",e.transform.op.v),(r||e.transform.mProps._mdf)&&e.transform.container.setAttribute("transform",e.transform.mProps.v.to2dCSS())}function i(r,i,a){var s,n,o,h,l,p,f,c,m,d,u,y=i.styles.length,g=i.lvl;for(p=0;p<y;p+=1){if(h=i.sh._mdf||a,i.styles[p].lvl<g){for(c=e.reset(),d=g-i.styles[p].lvl,u=i.transformers.length-1;!h&&d>0;)h=i.transformers[u].mProps._mdf||h,d-=1,u-=1;if(h)for(d=g-i.styles[p].lvl,u=i.transformers.length-1;d>0;)m=i.transformers[u].mProps.v.props,c.transform(m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8],m[9],m[10],m[11],m[12],m[13],m[14],m[15]),d-=1,u-=1}else c=t;if(n=(f=i.sh.paths)._length,h){for(o="",s=0;s<n;s+=1)(l=f.shapes[s])&&l._length&&(o+=buildShapeString(l,l._length,l.c,c));i.caches[p]=o}else o=i.caches[p];i.styles[p].d+=!0===r.hd?"":o,i.styles[p]._mdf=h||i.styles[p]._mdf}}function a(t,e,r){var i=e.style;(e.c._mdf||r)&&i.pElem.setAttribute("fill","rgb("+bmFloor(e.c.v[0])+","+bmFloor(e.c.v[1])+","+bmFloor(e.c.v[2])+")"),(e.o._mdf||r)&&i.pElem.setAttribute("fill-opacity",e.o.v)}function s(t,e,r){n(t,e,r),o(t,e,r)}function n(t,e,r){var i,a,s,n,o,h=e.gf,l=e.g._hasOpacity,p=e.s.v,f=e.e.v;if(e.o._mdf||r){var c="gf"===t.ty?"fill-opacity":"stroke-opacity";e.style.pElem.setAttribute(c,e.o.v)}if(e.s._mdf||r){var m=1===t.t?"x1":"cx",d="x1"===m?"y1":"cy";h.setAttribute(m,p[0]),h.setAttribute(d,p[1]),l&&!e.g._collapsable&&(e.of.setAttribute(m,p[0]),e.of.setAttribute(d,p[1]))}if(e.g._cmdf||r){i=e.cst;var u=e.g.c;for(s=i.length,a=0;a<s;a+=1)(n=i[a]).setAttribute("offset",u[4*a]+"%"),n.setAttribute("stop-color","rgb("+u[4*a+1]+","+u[4*a+2]+","+u[4*a+3]+")")}if(l&&(e.g._omdf||r)){var y=e.g.o;for(s=(i=e.g._collapsable?e.cst:e.ost).length,a=0;a<s;a+=1)n=i[a],e.g._collapsable||n.setAttribute("offset",y[2*a]+"%"),n.setAttribute("stop-opacity",y[2*a+1])}if(1===t.t)(e.e._mdf||r)&&(h.setAttribute("x2",f[0]),h.setAttribute("y2",f[1]),l&&!e.g._collapsable&&(e.of.setAttribute("x2",f[0]),e.of.setAttribute("y2",f[1])));else if((e.s._mdf||e.e._mdf||r)&&(o=Math.sqrt(Math.pow(p[0]-f[0],2)+Math.pow(p[1]-f[1],2)),h.setAttribute("r",o),l&&!e.g._collapsable&&e.of.setAttribute("r",o)),e.e._mdf||e.h._mdf||e.a._mdf||r){o||(o=Math.sqrt(Math.pow(p[0]-f[0],2)+Math.pow(p[1]-f[1],2)));var g=Math.atan2(f[1]-p[1],f[0]-p[0]),v=e.h.v;v>=1?v=.99:v<=-1&&(v=-.99);var b=o*v,x=Math.cos(g+e.a.v)*b+p[0],E=Math.sin(g+e.a.v)*b+p[1];h.setAttribute("fx",x),h.setAttribute("fy",E),l&&!e.g._collapsable&&(e.of.setAttribute("fx",x),e.of.setAttribute("fy",E))}}function o(t,e,r){var i=e.style,a=e.d;a&&(a._mdf||r)&&a.dashStr&&(i.pElem.setAttribute("stroke-dasharray",a.dashStr),i.pElem.setAttribute("stroke-dashoffset",a.dashoffset[0])),e.c&&(e.c._mdf||r)&&i.pElem.setAttribute("stroke","rgb("+bmFloor(e.c.v[0])+","+bmFloor(e.c.v[1])+","+bmFloor(e.c.v[2])+")"),(e.o._mdf||r)&&i.pElem.setAttribute("stroke-opacity",e.o.v),(e.w._mdf||r)&&(i.pElem.setAttribute("stroke-width",e.w.v),i.msElem&&i.msElem.setAttribute("stroke-width",e.w.v))}return{createRenderFunction:function(t){switch(t.ty){case"fl":return a;case"gf":return n;case"gs":return s;case"st":return o;case"sh":case"el":case"rc":case"sr":return i;case"tr":return r;default:return null}}}}();function ShapeTransformManager(){this.sequences={},this.sequenceList=[],this.transform_key_count=0}function CVShapeData(t,e,r,i){this.styledShapes=[],this.tr=[0,0,0,0,0,0];var a,s=4;"rc"===e.ty?s=5:"el"===e.ty?s=6:"sr"===e.ty&&(s=7),this.sh=ShapePropertyFactory.getShapeProp(t,e,s,t);var n,o=r.length;for(a=0;a<o;a+=1)r[a].closed||(n={transforms:i.addTransformSequence(r[a].transforms),trNodes:[]},this.styledShapes.push(n),r[a].elements.push(n))}function BaseElement(){}function NullElement(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initFrame(),this.initTransform(t,e,r),this.initHierarchy()}function SVGBaseElement(){}function IShapeElement(){}function ITextElement(){}function ICompElement(){}function IImageElement(t,e,r){this.assetData=e.getAssetData(t.refId),this.initElement(t,e,r),this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h}}function ISolidElement(t,e,r){this.initElement(t,e,r)}function AudioElement(t,e,r){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.initBaseData(t,e,r),this._isPlaying=!1,this._canPlay=!1;var i=this.globalData.getAssetsPath(this.assetData);this.audio=this.globalData.audioController.createAudio(i),this._currentTime=0,this.globalData.audioController.addAudio(this),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function FootageElement(t,e,r){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.footageData=e.imageLoader.getAsset(this.assetData),this.initBaseData(t,e,r)}function SVGCompElement(t,e,r){this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?createSizedArray(this.layers.length):[],this.initElement(t,e,r),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function SVGTextLottieElement(t,e,r){this.textSpans=[],this.renderType="svg",this.initElement(t,e,r)}function SVGShapeElement(t,e,r){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.initElement(t,e,r),this.prevViewData=[]}function SVGTintFilter(t,e){this.filterManager=e;var r=createNS("feColorMatrix");if(r.setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","linearRGB"),r.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),r.setAttribute("result","f1"),t.appendChild(r),(r=createNS("feColorMatrix")).setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","sRGB"),r.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),r.setAttribute("result","f2"),t.appendChild(r),this.matrixFilter=r,100!==e.effectElements[2].p.v||e.effectElements[2].p.k){var i,a=createNS("feMerge");t.appendChild(a),(i=createNS("feMergeNode")).setAttribute("in","SourceGraphic"),a.appendChild(i),(i=createNS("feMergeNode")).setAttribute("in","f2"),a.appendChild(i)}}function SVGFillFilter(t,e){this.filterManager=e;var r=createNS("feColorMatrix");r.setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","sRGB"),r.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),t.appendChild(r),this.matrixFilter=r}function SVGGaussianBlurEffect(t,e){t.setAttribute("x","-100%"),t.setAttribute("y","-100%"),t.setAttribute("width","300%"),t.setAttribute("height","300%"),this.filterManager=e;var r=createNS("feGaussianBlur");t.appendChild(r),this.feGaussianBlur=r}function SVGStrokeEffect(t,e){this.initialized=!1,this.filterManager=e,this.elem=t,this.paths=[]}function SVGTritoneFilter(t,e){this.filterManager=e;var r=createNS("feColorMatrix");r.setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","linearRGB"),r.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),r.setAttribute("result","f1"),t.appendChild(r);var i=createNS("feComponentTransfer");i.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(i),this.matrixFilter=i;var a=createNS("feFuncR");a.setAttribute("type","table"),i.appendChild(a),this.feFuncR=a;var s=createNS("feFuncG");s.setAttribute("type","table"),i.appendChild(s),this.feFuncG=s;var n=createNS("feFuncB");n.setAttribute("type","table"),i.appendChild(n),this.feFuncB=n}function SVGProLevelsFilter(t,e){this.filterManager=e;var r=this.filterManager.effectElements,i=createNS("feComponentTransfer");(r[10].p.k||0!==r[10].p.v||r[11].p.k||1!==r[11].p.v||r[12].p.k||1!==r[12].p.v||r[13].p.k||0!==r[13].p.v||r[14].p.k||1!==r[14].p.v)&&(this.feFuncR=this.createFeFunc("feFuncR",i)),(r[17].p.k||0!==r[17].p.v||r[18].p.k||1!==r[18].p.v||r[19].p.k||1!==r[19].p.v||r[20].p.k||0!==r[20].p.v||r[21].p.k||1!==r[21].p.v)&&(this.feFuncG=this.createFeFunc("feFuncG",i)),(r[24].p.k||0!==r[24].p.v||r[25].p.k||1!==r[25].p.v||r[26].p.k||1!==r[26].p.v||r[27].p.k||0!==r[27].p.v||r[28].p.k||1!==r[28].p.v)&&(this.feFuncB=this.createFeFunc("feFuncB",i)),(r[31].p.k||0!==r[31].p.v||r[32].p.k||1!==r[32].p.v||r[33].p.k||1!==r[33].p.v||r[34].p.k||0!==r[34].p.v||r[35].p.k||1!==r[35].p.v)&&(this.feFuncA=this.createFeFunc("feFuncA",i)),(this.feFuncR||this.feFuncG||this.feFuncB||this.feFuncA)&&(i.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(i),i=createNS("feComponentTransfer")),(r[3].p.k||0!==r[3].p.v||r[4].p.k||1!==r[4].p.v||r[5].p.k||1!==r[5].p.v||r[6].p.k||0!==r[6].p.v||r[7].p.k||1!==r[7].p.v)&&(i.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(i),this.feFuncRComposed=this.createFeFunc("feFuncR",i),this.feFuncGComposed=this.createFeFunc("feFuncG",i),this.feFuncBComposed=this.createFeFunc("feFuncB",i))}function SVGDropShadowEffect(t,e){var r=e.container.globalData.renderConfig.filterSize;t.setAttribute("x",r.x),t.setAttribute("y",r.y),t.setAttribute("width",r.width),t.setAttribute("height",r.height),this.filterManager=e;var i=createNS("feGaussianBlur");i.setAttribute("in","SourceAlpha"),i.setAttribute("result","drop_shadow_1"),i.setAttribute("stdDeviation","0"),this.feGaussianBlur=i,t.appendChild(i);var a=createNS("feOffset");a.setAttribute("dx","25"),a.setAttribute("dy","0"),a.setAttribute("in","drop_shadow_1"),a.setAttribute("result","drop_shadow_2"),this.feOffset=a,t.appendChild(a);var s=createNS("feFlood");s.setAttribute("flood-color","#00ff00"),s.setAttribute("flood-opacity","1"),s.setAttribute("result","drop_shadow_3"),this.feFlood=s,t.appendChild(s);var n=createNS("feComposite");n.setAttribute("in","drop_shadow_3"),n.setAttribute("in2","drop_shadow_2"),n.setAttribute("operator","in"),n.setAttribute("result","drop_shadow_4"),t.appendChild(n);var o,h=createNS("feMerge");t.appendChild(h),o=createNS("feMergeNode"),h.appendChild(o),(o=createNS("feMergeNode")).setAttribute("in","SourceGraphic"),this.feMergeNode=o,this.feMerge=h,this.originalNodeAdded=!1,h.appendChild(o)}ShapeTransformManager.prototype={addTransformSequence:function(t){var e,r=t.length,i="_";for(e=0;e<r;e+=1)i+=t[e].transform.key+"_";var a=this.sequences[i];return a||(a={transforms:[].concat(t),finalTransform:new Matrix,_mdf:!1},this.sequences[i]=a,this.sequenceList.push(a)),a},processSequence:function(t,e){for(var r,i=0,a=t.transforms.length,s=e;i<a&&!e;){if(t.transforms[i].transform.mProps._mdf){s=!0;break}i+=1}if(s)for(t.finalTransform.reset(),i=a-1;i>=0;i-=1)r=t.transforms[i].transform.mProps.v.props,t.finalTransform.transform(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15]);t._mdf=s},processSequences:function(t){var e,r=this.sequenceList.length;for(e=0;e<r;e+=1)this.processSequence(this.sequenceList[e],t)},getNewKey:function(){return this.transform_key_count+=1,"_"+this.transform_key_count}},CVShapeData.prototype.setAsAnimated=SVGShapeData.prototype.setAsAnimated,BaseElement.prototype={checkMasks:function(){if(!this.data.hasMask)return!1;for(var t=0,e=this.data.masksProperties.length;t<e;){if("n"!==this.data.masksProperties[t].mode&&!1!==this.data.masksProperties[t].cl)return!0;t+=1}return!1},initExpressions:function(){this.layerInterface=LayerExpressionInterface(this),this.data.hasMask&&this.maskManager&&this.layerInterface.registerMaskInterface(this.maskManager);var t=EffectsExpressionInterface.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(t),0===this.data.ty||this.data.xt?this.compInterface=CompExpressionInterface(this):4===this.data.ty?(this.layerInterface.shapeInterface=ShapeExpressionInterface(this.shapesData,this.itemsData,this.layerInterface),this.layerInterface.content=this.layerInterface.shapeInterface):5===this.data.ty&&(this.layerInterface.textInterface=TextExpressionInterface(this),this.layerInterface.text=this.layerInterface.textInterface)},setBlendMode:function(){var t=getBlendMode(this.data.bm);(this.baseElement||this.layerElement).style["mix-blend-mode"]=t},initBaseData:function(t,e,r){this.globalData=e,this.comp=r,this.data=t,this.layerId=createElementID(),this.data.sr||(this.data.sr=1),this.effectsManager=new EffectsManager(this.data,this,this.dynamicProperties)},getType:function(){return this.type},sourceRectAtTime:function(){}},NullElement.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},NullElement.prototype.renderFrame=function(){},NullElement.prototype.getBaseElement=function(){return null},NullElement.prototype.destroy=function(){},NullElement.prototype.sourceRectAtTime=function(){},NullElement.prototype.hide=function(){},extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement],NullElement),SVGBaseElement.prototype={initRendererElement:function(){this.layerElement=createNS("g")},createContainerElements:function(){this.matteElement=createNS("g"),this.transformedElement=this.layerElement,this.maskedElement=this.layerElement,this._sizeChanged=!1;var t,e,r,i=null;if(this.data.td){if(3==this.data.td||1==this.data.td){var a=createNS("mask");a.setAttribute("id",this.layerId),a.setAttribute("mask-type",3==this.data.td?"luminance":"alpha"),a.appendChild(this.layerElement),i=a,this.globalData.defs.appendChild(a),featureSupport.maskType||1!=this.data.td||(a.setAttribute("mask-type","luminance"),t=createElementID(),e=filtersFactory.createFilter(t),this.globalData.defs.appendChild(e),e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),(r=createNS("g")).appendChild(this.layerElement),i=r,a.appendChild(r),r.setAttribute("filter","url("+locationHref+"#"+t+")"))}else if(2==this.data.td){var s=createNS("mask");s.setAttribute("id",this.layerId),s.setAttribute("mask-type","alpha");var n=createNS("g");s.appendChild(n),t=createElementID(),e=filtersFactory.createFilter(t);var o=createNS("feComponentTransfer");o.setAttribute("in","SourceGraphic"),e.appendChild(o);var h=createNS("feFuncA");h.setAttribute("type","table"),h.setAttribute("tableValues","1.0 0.0"),o.appendChild(h),this.globalData.defs.appendChild(e);var l=createNS("rect");l.setAttribute("width",this.comp.data.w),l.setAttribute("height",this.comp.data.h),l.setAttribute("x","0"),l.setAttribute("y","0"),l.setAttribute("fill","#ffffff"),l.setAttribute("opacity","0"),n.setAttribute("filter","url("+locationHref+"#"+t+")"),n.appendChild(l),n.appendChild(this.layerElement),i=n,featureSupport.maskType||(s.setAttribute("mask-type","luminance"),e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),r=createNS("g"),n.appendChild(l),r.appendChild(this.layerElement),i=r,n.appendChild(r)),this.globalData.defs.appendChild(s)}}else this.data.tt?(this.matteElement.appendChild(this.layerElement),i=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),0===this.data.ty&&!this.data.hd){var p=createNS("clipPath"),f=createNS("path");f.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var c=createElementID();if(p.setAttribute("id",c),p.appendChild(f),this.globalData.defs.appendChild(p),this.checkMasks()){var m=createNS("g");m.setAttribute("clip-path","url("+locationHref+"#"+c+")"),m.appendChild(this.layerElement),this.transformedElement=m,i?i.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+locationHref+"#"+c+")")}0!==this.data.bm&&this.setBlendMode()},renderElement:function(){this.finalTransform._matMdf&&this.transformedElement.setAttribute("transform",this.finalTransform.mat.to2dCSS()),this.finalTransform._opMdf&&this.transformedElement.setAttribute("opacity",this.finalTransform.mProp.o.v)},destroyBaseElement:function(){this.layerElement=null,this.matteElement=null,this.maskManager.destroy()},getBaseElement:function(){return this.data.hd?null:this.baseElement},createRenderableComponents:function(){this.maskManager=new MaskElement(this.data,this,this.globalData),this.renderableEffectsManager=new SVGEffects(this)},setMatte:function(t){this.matteElement&&this.matteElement.setAttribute("mask","url("+locationHref+"#"+t+")")}},IShapeElement.prototype={addShapeToModifiers:function(t){var e,r=this.shapeModifiers.length;for(e=0;e<r;e+=1)this.shapeModifiers[e].addShape(t)},isShapeInAnimatedModifiers:function(t){for(var e=this.shapeModifiers.length;0<e;)if(this.shapeModifiers[0].isAnimatedWithShape(t))return!0;return!1},renderModifiers:function(){if(this.shapeModifiers.length){var t,e=this.shapes.length;for(t=0;t<e;t+=1)this.shapes[t].sh.reset();for(t=(e=this.shapeModifiers.length)-1;t>=0&&!this.shapeModifiers[t].processShapes(this._isFirstFrame);t-=1);}},lcEnum:{1:"butt",2:"round",3:"square"},ljEnum:{1:"miter",2:"round",3:"bevel"},searchProcessedElement:function(t){for(var e=this.processedElements,r=0,i=e.length;r<i;){if(e[r].elem===t)return e[r].pos;r+=1}return 0},addProcessedElement:function(t,e){for(var r=this.processedElements,i=r.length;i;)if(r[i-=1].elem===t)return void(r[i].pos=e);r.push(new ProcessedElement(t,e))},prepareFrame:function(t){this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange)}},ITextElement.prototype.initElement=function(t,e,r){this.lettersChangedFlag=!0,this.initFrame(),this.initBaseData(t,e,r),this.textProperty=new TextProperty(this,t.t,this.dynamicProperties),this.textAnimator=new TextAnimatorProperty(t.t,this.renderType,this),this.initTransform(t,e,r),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide(),this.textAnimator.searchProperties(this.dynamicProperties)},ITextElement.prototype.prepareFrame=function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),(this.textProperty._mdf||this.textProperty._isFirstFrame)&&(this.buildNewText(),this.textProperty._isFirstFrame=!1,this.textProperty._mdf=!1)},ITextElement.prototype.createPathShape=function(t,e){var r,i,a=e.length,s="";for(r=0;r<a;r+=1)i=e[r].ks.k,s+=buildShapeString(i,i.i.length,!0,t);return s},ITextElement.prototype.updateDocumentData=function(t,e){this.textProperty.updateDocumentData(t,e)},ITextElement.prototype.canResizeFont=function(t){this.textProperty.canResizeFont(t)},ITextElement.prototype.setMinimumFontSize=function(t){this.textProperty.setMinimumFontSize(t)},ITextElement.prototype.applyTextPropertiesToMatrix=function(t,e,r,i,a){switch(t.ps&&e.translate(t.ps[0],t.ps[1]+t.ascent,0),e.translate(0,-t.ls,0),t.j){case 1:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[r]),0,0);break;case 2:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[r])/2,0,0)}e.translate(i,a,0)},ITextElement.prototype.buildColor=function(t){return"rgb("+Math.round(255*t[0])+","+Math.round(255*t[1])+","+Math.round(255*t[2])+")"},ITextElement.prototype.emptyProp=new LetterProps,ITextElement.prototype.destroy=function(){},extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement,RenderableDOMElement],ICompElement),ICompElement.prototype.initElement=function(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initTransform(t,e,r),this.initRenderable(),this.initHierarchy(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),!this.data.xt&&e.progressiveLoad||this.buildAllItems(),this.hide()},ICompElement.prototype.prepareFrame=function(t){if(this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),this.isInRange||this.data.xt){if(this.tm._placeholder)this.renderedFrame=t/this.data.sr;else{var e=this.tm.v;e===this.data.op&&(e=this.data.op-1),this.renderedFrame=e}var r,i=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),r=i-1;r>=0;r-=1)(this.completeLayers||this.elements[r])&&(this.elements[r].prepareFrame(this.renderedFrame-this.layers[r].st),this.elements[r]._mdf&&(this._mdf=!0))}},ICompElement.prototype.renderInnerContent=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},ICompElement.prototype.setElements=function(t){this.elements=t},ICompElement.prototype.getElements=function(){return this.elements},ICompElement.prototype.destroyElements=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy()},ICompElement.prototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()},extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],IImageElement),IImageElement.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData);this.innerElem=createNS("image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio",this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.innerElem)},IImageElement.prototype.sourceRectAtTime=function(){return this.sourceRect},extendPrototype([IImageElement],ISolidElement),ISolidElement.prototype.createContent=function(){var t=createNS("rect");t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.layerElement.appendChild(t)},AudioElement.prototype.prepareFrame=function(t){if(this.prepareRenderableFrame(t,!0),this.prepareProperties(t,!0),this.tm._placeholder)this._currentTime=t/this.data.sr;else{var e=this.tm.v;this._currentTime=e}},extendPrototype([RenderableElement,BaseElement,FrameElement],AudioElement),AudioElement.prototype.renderFrame=function(){this.isInRange&&this._canPlay&&(this._isPlaying?(!this.audio.playing()||Math.abs(this._currentTime/this.globalData.frameRate-this.audio.seek())>.1)&&this.audio.seek(this._currentTime/this.globalData.frameRate):(this.audio.play(),this.audio.seek(this._currentTime/this.globalData.frameRate),this._isPlaying=!0))},AudioElement.prototype.show=function(){},AudioElement.prototype.hide=function(){this.audio.pause(),this._isPlaying=!1},AudioElement.prototype.pause=function(){this.audio.pause(),this._isPlaying=!1,this._canPlay=!1},AudioElement.prototype.resume=function(){this._canPlay=!0},AudioElement.prototype.setRate=function(t){this.audio.rate(t)},AudioElement.prototype.volume=function(t){this.audio.volume(t)},AudioElement.prototype.getBaseElement=function(){return null},AudioElement.prototype.destroy=function(){},AudioElement.prototype.sourceRectAtTime=function(){},AudioElement.prototype.initExpressions=function(){},FootageElement.prototype.prepareFrame=function(){},extendPrototype([RenderableElement,BaseElement,FrameElement],FootageElement),FootageElement.prototype.getBaseElement=function(){return null},FootageElement.prototype.renderFrame=function(){},FootageElement.prototype.destroy=function(){},FootageElement.prototype.initExpressions=function(){this.layerInterface=FootageInterface(this)},FootageElement.prototype.getFootageData=function(){return this.footageData},extendPrototype([SVGRenderer,ICompElement,SVGBaseElement],SVGCompElement),extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],SVGTextLottieElement),SVGTextLottieElement.prototype.createContent=function(){this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=createNS("text"))},SVGTextLottieElement.prototype.buildTextContents=function(t){for(var e=0,r=t.length,i=[],a="";e<r;)t[e]===String.fromCharCode(13)||t[e]===String.fromCharCode(3)?(i.push(a),a=""):a+=t[e],e+=1;return i.push(a),i},SVGTextLottieElement.prototype.buildNewText=function(){var t,e,r=this.textProperty.currentData;this.renderedLetters=createSizedArray(r?r.l.length:0),r.fc?this.layerElement.setAttribute("fill",this.buildColor(r.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),r.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(r.sc)),this.layerElement.setAttribute("stroke-width",r.sw)),this.layerElement.setAttribute("font-size",r.finalSize);var i=this.globalData.fontManager.getFontByName(r.f);if(i.fClass)this.layerElement.setAttribute("class",i.fClass);else{this.layerElement.setAttribute("font-family",i.fFamily);var a=r.fWeight,s=r.fStyle;this.layerElement.setAttribute("font-style",s),this.layerElement.setAttribute("font-weight",a)}this.layerElement.setAttribute("aria-label",r.t);var n,o=r.l||[],h=!!this.globalData.fontManager.chars;e=o.length;var l,p=this.mHelper,f="",c=this.data.singleShape,m=0,d=0,u=!0,y=.001*r.tr*r.finalSize;if(!c||h||r.sz){var g,v,b=this.textSpans.length;for(t=0;t<e;t+=1)h&&c&&0!==t||(n=b>t?this.textSpans[t]:createNS(h?"path":"text"),b<=t&&(n.setAttribute("stroke-linecap","butt"),n.setAttribute("stroke-linejoin","round"),n.setAttribute("stroke-miterlimit","4"),this.textSpans[t]=n,this.layerElement.appendChild(n)),n.style.display="inherit"),p.reset(),p.scale(r.finalSize/100,r.finalSize/100),c&&(o[t].n&&(m=-y,d+=r.yOffset,d+=u?1:0,u=!1),this.applyTextPropertiesToMatrix(r,p,o[t].line,m,d),m+=o[t].l||0,m+=y),h?(l=(g=(v=this.globalData.fontManager.getCharData(r.finalText[t],i.fStyle,this.globalData.fontManager.getFontByName(r.f).fFamily))&&v.data||{}).shapes?g.shapes[0].it:[],c?f+=this.createPathShape(p,l):n.setAttribute("d",this.createPathShape(p,l))):(c&&n.setAttribute("transform","translate("+p.props[12]+","+p.props[13]+")"),n.textContent=o[t].val,n.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"));c&&n&&n.setAttribute("d",f)}else{var x=this.textContainer,E="start";switch(r.j){case 1:E="end";break;case 2:E="middle";break;default:E="start"}x.setAttribute("text-anchor",E),x.setAttribute("letter-spacing",y);var P=this.buildTextContents(r.finalText);for(e=P.length,d=r.ps?r.ps[1]+r.ascent:0,t=0;t<e;t+=1)(n=this.textSpans[t]||createNS("tspan")).textContent=P[t],n.setAttribute("x",0),n.setAttribute("y",d),n.style.display="inherit",x.appendChild(n),this.textSpans[t]=n,d+=r.finalLineHeight;this.layerElement.appendChild(x)}for(;t<this.textSpans.length;)this.textSpans[t].style.display="none",t+=1;this._sizeChanged=!0},SVGTextLottieElement.prototype.sourceRectAtTime=function(){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderInnerContent(),this._sizeChanged){this._sizeChanged=!1;var t=this.layerElement.getBBox();this.bbox={top:t.y,left:t.x,width:t.width,height:t.height}}return this.bbox},SVGTextLottieElement.prototype.renderInnerContent=function(){if(!this.data.singleShape&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){var t,e;this._sizeChanged=!0;var r,i,a=this.textAnimator.renderedLetters,s=this.textProperty.currentData.l;for(e=s.length,t=0;t<e;t+=1)s[t].n||(r=a[t],i=this.textSpans[t],r._mdf.m&&i.setAttribute("transform",r.m),r._mdf.o&&i.setAttribute("opacity",r.o),r._mdf.sw&&i.setAttribute("stroke-width",r.sw),r._mdf.sc&&i.setAttribute("stroke",r.sc),r._mdf.fc&&i.setAttribute("fill",r.fc))}},extendPrototype([BaseElement,TransformElement,SVGBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableDOMElement],SVGShapeElement),SVGShapeElement.prototype.initSecondaryElement=function(){},SVGShapeElement.prototype.identityMatrix=new Matrix,SVGShapeElement.prototype.buildExpressionInterface=function(){},SVGShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes()},SVGShapeElement.prototype.filterUniqueShapes=function(){var t,e,r,i,a=this.shapes.length,s=this.stylesList.length,n=[],o=!1;for(r=0;r<s;r+=1){for(i=this.stylesList[r],o=!1,n.length=0,t=0;t<a;t+=1)-1!==(e=this.shapes[t]).styles.indexOf(i)&&(n.push(e),o=e._isAnimated||o);n.length>1&&o&&this.setShapesAsAnimated(n)}},SVGShapeElement.prototype.setShapesAsAnimated=function(t){var e,r=t.length;for(e=0;e<r;e+=1)t[e].setAsAnimated()},SVGShapeElement.prototype.createStyleElement=function(t,e){var r,i=new SVGStyleData(t,e),a=i.pElem;if("st"===t.ty)r=new SVGStrokeStyleData(this,t,i);else if("fl"===t.ty)r=new SVGFillStyleData(this,t,i);else if("gf"===t.ty||"gs"===t.ty){r=new("gf"===t.ty?SVGGradientFillStyleData:SVGGradientStrokeStyleData)(this,t,i),this.globalData.defs.appendChild(r.gf),r.maskId&&(this.globalData.defs.appendChild(r.ms),this.globalData.defs.appendChild(r.of),a.setAttribute("mask","url("+locationHref+"#"+r.maskId+")"))}return"st"!==t.ty&&"gs"!==t.ty||(a.setAttribute("stroke-linecap",this.lcEnum[t.lc]||"round"),a.setAttribute("stroke-linejoin",this.ljEnum[t.lj]||"round"),a.setAttribute("fill-opacity","0"),1===t.lj&&a.setAttribute("stroke-miterlimit",t.ml)),2===t.r&&a.setAttribute("fill-rule","evenodd"),t.ln&&a.setAttribute("id",t.ln),t.cl&&a.setAttribute("class",t.cl),t.bm&&(a.style["mix-blend-mode"]=getBlendMode(t.bm)),this.stylesList.push(i),this.addToAnimatedContents(t,r),r},SVGShapeElement.prototype.createGroupElement=function(t){var e=new ShapeGroupData;return t.ln&&e.gr.setAttribute("id",t.ln),t.cl&&e.gr.setAttribute("class",t.cl),t.bm&&(e.gr.style["mix-blend-mode"]=getBlendMode(t.bm)),e},SVGShapeElement.prototype.createTransformElement=function(t,e){var r=TransformPropertyFactory.getTransformProperty(this,t,this),i=new SVGTransformData(r,r.o,e);return this.addToAnimatedContents(t,i),i},SVGShapeElement.prototype.createShapeElement=function(t,e,r){var i=4;"rc"===t.ty?i=5:"el"===t.ty?i=6:"sr"===t.ty&&(i=7);var a=new SVGShapeData(e,r,ShapePropertyFactory.getShapeProp(this,t,i,this));return this.shapes.push(a),this.addShapeToModifiers(a),this.addToAnimatedContents(t,a),a},SVGShapeElement.prototype.addToAnimatedContents=function(t,e){for(var r=0,i=this.animatedContents.length;r<i;){if(this.animatedContents[r].element===e)return;r+=1}this.animatedContents.push({fn:SVGElementsRenderer.createRenderFunction(t),element:e,data:t})},SVGShapeElement.prototype.setElementStyles=function(t){var e,r=t.styles,i=this.stylesList.length;for(e=0;e<i;e+=1)this.stylesList[e].closed||r.push(this.stylesList[e])},SVGShapeElement.prototype.reloadShapes=function(){var t;this._isFirstFrame=!0;var e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes(),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers()},SVGShapeElement.prototype.searchShapes=function(t,e,r,i,a,s,n){var o,h,l,p,f,c,m=[].concat(s),d=t.length-1,u=[],y=[];for(o=d;o>=0;o-=1){if((c=this.searchProcessedElement(t[o]))?e[o]=r[c-1]:t[o]._render=n,"fl"===t[o].ty||"st"===t[o].ty||"gf"===t[o].ty||"gs"===t[o].ty)c?e[o].style.closed=!1:e[o]=this.createStyleElement(t[o],a),t[o]._render&&i.appendChild(e[o].style.pElem),u.push(e[o].style);else if("gr"===t[o].ty){if(c)for(l=e[o].it.length,h=0;h<l;h+=1)e[o].prevViewData[h]=e[o].it[h];else e[o]=this.createGroupElement(t[o]);this.searchShapes(t[o].it,e[o].it,e[o].prevViewData,e[o].gr,a+1,m,n),t[o]._render&&i.appendChild(e[o].gr)}else"tr"===t[o].ty?(c||(e[o]=this.createTransformElement(t[o],i)),p=e[o].transform,m.push(p)):"sh"===t[o].ty||"rc"===t[o].ty||"el"===t[o].ty||"sr"===t[o].ty?(c||(e[o]=this.createShapeElement(t[o],m,a)),this.setElementStyles(e[o])):"tm"===t[o].ty||"rd"===t[o].ty||"ms"===t[o].ty||"pb"===t[o].ty?(c?(f=e[o]).closed=!1:((f=ShapeModifiers.getModifier(t[o].ty)).init(this,t[o]),e[o]=f,this.shapeModifiers.push(f)),y.push(f)):"rp"===t[o].ty&&(c?(f=e[o]).closed=!0:(f=ShapeModifiers.getModifier(t[o].ty),e[o]=f,f.init(this,t,o,e),this.shapeModifiers.push(f),n=!1),y.push(f));this.addProcessedElement(t[o],o+1)}for(d=u.length,o=0;o<d;o+=1)u[o].closed=!0;for(d=y.length,o=0;o<d;o+=1)y[o].closed=!0},SVGShapeElement.prototype.renderInnerContent=function(){var t;this.renderModifiers();var e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].reset();for(this.renderShape(),t=0;t<e;t+=1)(this.stylesList[t]._mdf||this._isFirstFrame)&&(this.stylesList[t].msElem&&(this.stylesList[t].msElem.setAttribute("d",this.stylesList[t].d),this.stylesList[t].d="M0 0"+this.stylesList[t].d),this.stylesList[t].pElem.setAttribute("d",this.stylesList[t].d||"M0 0"))},SVGShapeElement.prototype.renderShape=function(){var t,e,r=this.animatedContents.length;for(t=0;t<r;t+=1)e=this.animatedContents[t],(this._isFirstFrame||e.element._isAnimated)&&!0!==e.data&&e.fn(e.data,e.element,this._isFirstFrame)},SVGShapeElement.prototype.destroy=function(){this.destroyBaseElement(),this.shapesData=null,this.itemsData=null},SVGTintFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=this.filterManager.effectElements[2].p.v/100;this.matrixFilter.setAttribute("values",r[0]-e[0]+" 0 0 0 "+e[0]+" "+(r[1]-e[1])+" 0 0 0 "+e[1]+" "+(r[2]-e[2])+" 0 0 0 "+e[2]+" 0 0 0 "+i+" 0")}},SVGFillFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[2].p.v,r=this.filterManager.effectElements[6].p.v;this.matrixFilter.setAttribute("values","0 0 0 0 "+e[0]+" 0 0 0 0 "+e[1]+" 0 0 0 0 "+e[2]+" 0 0 0 "+r+" 0")}},SVGGaussianBlurEffect.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=.3*this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=3==r?0:e,a=2==r?0:e;this.feGaussianBlur.setAttribute("stdDeviation",i+" "+a);var s=1==this.filterManager.effectElements[2].p.v?"wrap":"duplicate";this.feGaussianBlur.setAttribute("edgeMode",s)}},SVGStrokeEffect.prototype.initialize=function(){var t,e,r,i,a=this.elem.layerElement.children||this.elem.layerElement.childNodes;for(1===this.filterManager.effectElements[1].p.v?(i=this.elem.maskManager.masksProperties.length,r=0):i=(r=this.filterManager.effectElements[0].p.v-1)+1,(e=createNS("g")).setAttribute("fill","none"),e.setAttribute("stroke-linecap","round"),e.setAttribute("stroke-dashoffset",1);r<i;r+=1)t=createNS("path"),e.appendChild(t),this.paths.push({p:t,m:r});if(3===this.filterManager.effectElements[10].p.v){var s=createNS("mask"),n=createElementID();s.setAttribute("id",n),s.setAttribute("mask-type","alpha"),s.appendChild(e),this.elem.globalData.defs.appendChild(s);var o=createNS("g");for(o.setAttribute("mask","url("+locationHref+"#"+n+")");a[0];)o.appendChild(a[0]);this.elem.layerElement.appendChild(o),this.masker=s,e.setAttribute("stroke","#fff")}else if(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v){if(2===this.filterManager.effectElements[10].p.v)for(a=this.elem.layerElement.children||this.elem.layerElement.childNodes;a.length;)this.elem.layerElement.removeChild(a[0]);this.elem.layerElement.appendChild(e),this.elem.layerElement.removeAttribute("mask"),e.setAttribute("stroke","#fff")}this.initialized=!0,this.pathMasker=e},SVGStrokeEffect.prototype.renderFrame=function(t){var e;this.initialized||this.initialize();var r,i,a=this.paths.length;for(e=0;e<a;e+=1)if(-1!==this.paths[e].m&&(r=this.elem.maskManager.viewData[this.paths[e].m],i=this.paths[e].p,(t||this.filterManager._mdf||r.prop._mdf)&&i.setAttribute("d",r.lastPath),t||this.filterManager.effectElements[9].p._mdf||this.filterManager.effectElements[4].p._mdf||this.filterManager.effectElements[7].p._mdf||this.filterManager.effectElements[8].p._mdf||r.prop._mdf)){var s;if(0!==this.filterManager.effectElements[7].p.v||100!==this.filterManager.effectElements[8].p.v){var n=.01*Math.min(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v),o=.01*Math.max(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v),h=i.getTotalLength();s="0 0 0 "+h*n+" ";var l,p=h*(o-n),f=1+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v*.01,c=Math.floor(p/f);for(l=0;l<c;l+=1)s+="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v*.01+" ";s+="0 "+10*h+" 0 0"}else s="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v*.01;i.setAttribute("stroke-dasharray",s)}if((t||this.filterManager.effectElements[4].p._mdf)&&this.pathMasker.setAttribute("stroke-width",2*this.filterManager.effectElements[4].p.v),(t||this.filterManager.effectElements[6].p._mdf)&&this.pathMasker.setAttribute("opacity",this.filterManager.effectElements[6].p.v),(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v)&&(t||this.filterManager.effectElements[3].p._mdf)){var m=this.filterManager.effectElements[3].p.v;this.pathMasker.setAttribute("stroke","rgb("+bmFloor(255*m[0])+","+bmFloor(255*m[1])+","+bmFloor(255*m[2])+")")}},SVGTritoneFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=this.filterManager.effectElements[2].p.v,a=i[0]+" "+r[0]+" "+e[0],s=i[1]+" "+r[1]+" "+e[1],n=i[2]+" "+r[2]+" "+e[2];this.feFuncR.setAttribute("tableValues",a),this.feFuncG.setAttribute("tableValues",s),this.feFuncB.setAttribute("tableValues",n)}},SVGProLevelsFilter.prototype.createFeFunc=function(t,e){var r=createNS(t);return r.setAttribute("type","table"),e.appendChild(r),r},SVGProLevelsFilter.prototype.getTableValue=function(t,e,r,i,a){for(var s,n,o=0,h=Math.min(t,e),l=Math.max(t,e),p=Array.call(null,{length:256}),f=0,c=a-i,m=e-t;o<=256;)n=(s=o/256)<=h?m<0?a:i:s>=l?m<0?i:a:i+c*Math.pow((s-t)/m,1/r),p[f]=n,f+=1,o+=256/255;return p.join(" ")},SVGProLevelsFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e,r=this.filterManager.effectElements;this.feFuncRComposed&&(t||r[3].p._mdf||r[4].p._mdf||r[5].p._mdf||r[6].p._mdf||r[7].p._mdf)&&(e=this.getTableValue(r[3].p.v,r[4].p.v,r[5].p.v,r[6].p.v,r[7].p.v),this.feFuncRComposed.setAttribute("tableValues",e),this.feFuncGComposed.setAttribute("tableValues",e),this.feFuncBComposed.setAttribute("tableValues",e)),this.feFuncR&&(t||r[10].p._mdf||r[11].p._mdf||r[12].p._mdf||r[13].p._mdf||r[14].p._mdf)&&(e=this.getTableValue(r[10].p.v,r[11].p.v,r[12].p.v,r[13].p.v,r[14].p.v),this.feFuncR.setAttribute("tableValues",e)),this.feFuncG&&(t||r[17].p._mdf||r[18].p._mdf||r[19].p._mdf||r[20].p._mdf||r[21].p._mdf)&&(e=this.getTableValue(r[17].p.v,r[18].p.v,r[19].p.v,r[20].p.v,r[21].p.v),this.feFuncG.setAttribute("tableValues",e)),this.feFuncB&&(t||r[24].p._mdf||r[25].p._mdf||r[26].p._mdf||r[27].p._mdf||r[28].p._mdf)&&(e=this.getTableValue(r[24].p.v,r[25].p.v,r[26].p.v,r[27].p.v,r[28].p.v),this.feFuncB.setAttribute("tableValues",e)),this.feFuncA&&(t||r[31].p._mdf||r[32].p._mdf||r[33].p._mdf||r[34].p._mdf||r[35].p._mdf)&&(e=this.getTableValue(r[31].p.v,r[32].p.v,r[33].p.v,r[34].p.v,r[35].p.v),this.feFuncA.setAttribute("tableValues",e))}},SVGDropShadowEffect.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){if((t||this.filterManager.effectElements[4].p._mdf)&&this.feGaussianBlur.setAttribute("stdDeviation",this.filterManager.effectElements[4].p.v/4),t||this.filterManager.effectElements[0].p._mdf){var e=this.filterManager.effectElements[0].p.v;this.feFlood.setAttribute("flood-color",rgbToHex(Math.round(255*e[0]),Math.round(255*e[1]),Math.round(255*e[2])))}if((t||this.filterManager.effectElements[1].p._mdf)&&this.feFlood.setAttribute("flood-opacity",this.filterManager.effectElements[1].p.v/255),t||this.filterManager.effectElements[2].p._mdf||this.filterManager.effectElements[3].p._mdf){var r=this.filterManager.effectElements[3].p.v,i=(this.filterManager.effectElements[2].p.v-90)*degToRads,a=r*Math.cos(i),s=r*Math.sin(i);this.feOffset.setAttribute("dx",a),this.feOffset.setAttribute("dy",s)}}};var _svgMatteSymbols=[];function SVGMatte3Effect(t,e,r){this.initialized=!1,this.filterManager=e,this.filterElem=t,this.elem=r,r.matteElement=createNS("g"),r.matteElement.appendChild(r.layerElement),r.matteElement.appendChild(r.transformedElement),r.baseElement=r.matteElement}function SVGEffects(t){var e,r,i=t.data.ef?t.data.ef.length:0,a=createElementID(),s=filtersFactory.createFilter(a,!0),n=0;for(this.filters=[],e=0;e<i;e+=1)r=null,20===t.data.ef[e].ty?(n+=1,r=new SVGTintFilter(s,t.effectsManager.effectElements[e])):21===t.data.ef[e].ty?(n+=1,r=new SVGFillFilter(s,t.effectsManager.effectElements[e])):22===t.data.ef[e].ty?r=new SVGStrokeEffect(t,t.effectsManager.effectElements[e]):23===t.data.ef[e].ty?(n+=1,r=new SVGTritoneFilter(s,t.effectsManager.effectElements[e])):24===t.data.ef[e].ty?(n+=1,r=new SVGProLevelsFilter(s,t.effectsManager.effectElements[e])):25===t.data.ef[e].ty?(n+=1,r=new SVGDropShadowEffect(s,t.effectsManager.effectElements[e])):28===t.data.ef[e].ty?r=new SVGMatte3Effect(s,t.effectsManager.effectElements[e],t):29===t.data.ef[e].ty&&(n+=1,r=new SVGGaussianBlurEffect(s,t.effectsManager.effectElements[e])),r&&this.filters.push(r);n&&(t.globalData.defs.appendChild(s),t.layerElement.setAttribute("filter","url("+locationHref+"#"+a+")")),this.filters.length&&t.addRenderableComponent(this)}function CVContextData(){var t;this.saved=[],this.cArrPos=0,this.cTr=new Matrix,this.cO=1;for(this.savedOp=createTypedArray("float32",15),t=0;t<15;t+=1)this.saved[t]=createTypedArray("float32",16);this._length=15}function CVBaseElement(){}function CVImageElement(t,e,r){this.assetData=e.getAssetData(t.refId),this.img=e.imageLoader.getAsset(this.assetData),this.initElement(t,e,r)}function CVCompElement(t,e,r){this.completeLayers=!1,this.layers=t.layers,this.pendingElements=[],this.elements=createSizedArray(this.layers.length),this.initElement(t,e,r),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function CVMaskElement(t,e){var r;this.data=t,this.element=e,this.masksProperties=this.data.masksProperties||[],this.viewData=createSizedArray(this.masksProperties.length);var i=this.masksProperties.length,a=!1;for(r=0;r<i;r+=1)"n"!==this.masksProperties[r].mode&&(a=!0),this.viewData[r]=ShapePropertyFactory.getShapeProp(this.element,this.masksProperties[r],3);this.hasMasks=a,a&&this.element.addRenderableComponent(this)}function CVShapeElement(t,e,r){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.itemsData=[],this.prevViewData=[],this.shapeModifiers=[],this.processedElements=[],this.transformsManager=new ShapeTransformManager,this.initElement(t,e,r)}function CVSolidElement(t,e,r){this.initElement(t,e,r)}function CVTextElement(t,e,r){this.textSpans=[],this.yOffset=0,this.fillColorAnim=!1,this.strokeColorAnim=!1,this.strokeWidthAnim=!1,this.stroke=!1,this.fill=!1,this.justifyOffset=0,this.currentRender=null,this.renderType="canvas",this.values={fill:"rgba(0,0,0,0)",stroke:"rgba(0,0,0,0)",sWidth:0,fValue:""},this.initElement(t,e,r)}function CVEffects(){}function HBaseElement(){}function HSolidElement(t,e,r){this.initElement(t,e,r)}function HCompElement(t,e,r){this.layers=t.layers,this.supports3d=!t.hasMask,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?createSizedArray(this.layers.length):[],this.initElement(t,e,r),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function HShapeElement(t,e,r){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.shapesContainer=createNS("g"),this.initElement(t,e,r),this.prevViewData=[],this.currentBBox={x:999999,y:-999999,h:0,w:0}}function HTextElement(t,e,r){this.textSpans=[],this.textPaths=[],this.currentBBox={x:999999,y:-999999,h:0,w:0},this.renderType="svg",this.isMasked=!1,this.initElement(t,e,r)}function HImageElement(t,e,r){this.assetData=e.getAssetData(t.refId),this.initElement(t,e,r)}function HCameraElement(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initHierarchy();var i=PropertyFactory.getProp;if(this.pe=i(this,t.pe,0,0,this),t.ks.p.s?(this.px=i(this,t.ks.p.x,1,0,this),this.py=i(this,t.ks.p.y,1,0,this),this.pz=i(this,t.ks.p.z,1,0,this)):this.p=i(this,t.ks.p,1,0,this),t.ks.a&&(this.a=i(this,t.ks.a,1,0,this)),t.ks.or.k.length&&t.ks.or.k[0].to){var a,s=t.ks.or.k.length;for(a=0;a<s;a+=1)t.ks.or.k[a].to=null,t.ks.or.k[a].ti=null}this.or=i(this,t.ks.or,1,degToRads,this),this.or.sh=!0,this.rx=i(this,t.ks.rx,0,degToRads,this),this.ry=i(this,t.ks.ry,0,degToRads,this),this.rz=i(this,t.ks.rz,0,degToRads,this),this.mat=new Matrix,this._prevMat=new Matrix,this._isFirstFrame=!0,this.finalTransform={mProp:this}}function HEffects(){}SVGMatte3Effect.prototype.findSymbol=function(t){for(var e=0,r=_svgMatteSymbols.length;e<r;){if(_svgMatteSymbols[e]===t)return _svgMatteSymbols[e];e+=1}return null},SVGMatte3Effect.prototype.replaceInParent=function(t,e){var r=t.layerElement.parentNode;if(r){for(var i,a=r.children,s=0,n=a.length;s<n&&a[s]!==t.layerElement;)s+=1;s<=n-2&&(i=a[s+1]);var o=createNS("use");o.setAttribute("href","#"+e),i?r.insertBefore(o,i):r.appendChild(o)}},SVGMatte3Effect.prototype.setElementAsMask=function(t,e){if(!this.findSymbol(e)){var r=createElementID(),i=createNS("mask");i.setAttribute("id",e.layerId),i.setAttribute("mask-type","alpha"),_svgMatteSymbols.push(e);var a=t.globalData.defs;a.appendChild(i);var s=createNS("symbol");s.setAttribute("id",r),this.replaceInParent(e,r),s.appendChild(e.layerElement),a.appendChild(s);var n=createNS("use");n.setAttribute("href","#"+r),i.appendChild(n),e.data.hd=!1,e.show()}t.setMatte(e.layerId)},SVGMatte3Effect.prototype.initialize=function(){for(var t=this.filterManager.effectElements[0].p.v,e=this.elem.comp.elements,r=0,i=e.length;r<i;)e[r]&&e[r].data.ind===t&&this.setElementAsMask(this.elem,e[r]),r+=1;this.initialized=!0},SVGMatte3Effect.prototype.renderFrame=function(){this.initialized||this.initialize()},SVGEffects.prototype.renderFrame=function(t){var e,r=this.filters.length;for(e=0;e<r;e+=1)this.filters[e].renderFrame(t)},CVContextData.prototype.duplicate=function(){var t=2*this._length,e=this.savedOp;this.savedOp=createTypedArray("float32",t),this.savedOp.set(e);var r=0;for(r=this._length;r<t;r+=1)this.saved[r]=createTypedArray("float32",16);this._length=t},CVContextData.prototype.reset=function(){this.cArrPos=0,this.cTr.reset(),this.cO=1},CVBaseElement.prototype={createElements:function(){},initRendererElement:function(){},createContainerElements:function(){this.canvasContext=this.globalData.canvasContext,this.renderableEffectsManager=new CVEffects(this)},createContent:function(){},setBlendMode:function(){var t=this.globalData;if(t.blendMode!==this.data.bm){t.blendMode=this.data.bm;var e=getBlendMode(this.data.bm);t.canvasContext.globalCompositeOperation=e}},createRenderableComponents:function(){this.maskManager=new CVMaskElement(this.data,this)},hideElement:function(){this.hidden||this.isInRange&&!this.isTransparent||(this.hidden=!0)},showElement:function(){this.isInRange&&!this.isTransparent&&(this.hidden=!1,this._isFirstFrame=!0,this.maskManager._isFirstFrame=!0)},renderFrame:function(){if(!this.hidden&&!this.data.hd){this.renderTransform(),this.renderRenderable(),this.setBlendMode();var t=0===this.data.ty;this.globalData.renderer.save(t),this.globalData.renderer.ctxTransform(this.finalTransform.mat.props),this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v),this.renderInnerContent(),this.globalData.renderer.restore(t),this.maskManager.hasMasks&&this.globalData.renderer.restore(!0),this._isFirstFrame&&(this._isFirstFrame=!1)}},destroy:function(){this.canvasContext=null,this.data=null,this.globalData=null,this.maskManager.destroy()},mHelper:new Matrix},CVBaseElement.prototype.hide=CVBaseElement.prototype.hideElement,CVBaseElement.prototype.show=CVBaseElement.prototype.showElement,extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement],CVImageElement),CVImageElement.prototype.initElement=SVGShapeElement.prototype.initElement,CVImageElement.prototype.prepareFrame=IImageElement.prototype.prepareFrame,CVImageElement.prototype.createContent=function(){if(this.img.width&&(this.assetData.w!==this.img.width||this.assetData.h!==this.img.height)){var t=createTag("canvas");t.width=this.assetData.w,t.height=this.assetData.h;var e,r,i=t.getContext("2d"),a=this.img.width,s=this.img.height,n=a/s,o=this.assetData.w/this.assetData.h,h=this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio;n>o&&"xMidYMid slice"===h||n<o&&"xMidYMid slice"!==h?e=(r=s)*o:r=(e=a)/o,i.drawImage(this.img,(a-e)/2,(s-r)/2,e,r,0,0,this.assetData.w,this.assetData.h),this.img=t}},CVImageElement.prototype.renderInnerContent=function(){this.canvasContext.drawImage(this.img,0,0)},CVImageElement.prototype.destroy=function(){this.img=null},extendPrototype([CanvasRenderer,ICompElement,CVBaseElement],CVCompElement),CVCompElement.prototype.renderInnerContent=function(){var t,e=this.canvasContext;for(e.beginPath(),e.moveTo(0,0),e.lineTo(this.data.w,0),e.lineTo(this.data.w,this.data.h),e.lineTo(0,this.data.h),e.lineTo(0,0),e.clip(),t=this.layers.length-1;t>=0;t-=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},CVCompElement.prototype.destroy=function(){var t;for(t=this.layers.length-1;t>=0;t-=1)this.elements[t]&&this.elements[t].destroy();this.layers=null,this.elements=null},CVMaskElement.prototype.renderFrame=function(){if(this.hasMasks){var t,e,r,i,a=this.element.finalTransform.mat,s=this.element.canvasContext,n=this.masksProperties.length;for(s.beginPath(),t=0;t<n;t+=1)if("n"!==this.masksProperties[t].mode){var o;this.masksProperties[t].inv&&(s.moveTo(0,0),s.lineTo(this.element.globalData.compSize.w,0),s.lineTo(this.element.globalData.compSize.w,this.element.globalData.compSize.h),s.lineTo(0,this.element.globalData.compSize.h),s.lineTo(0,0)),i=this.viewData[t].v,e=a.applyToPointArray(i.v[0][0],i.v[0][1],0),s.moveTo(e[0],e[1]);var h=i._length;for(o=1;o<h;o+=1)r=a.applyToTriplePoints(i.o[o-1],i.i[o],i.v[o]),s.bezierCurveTo(r[0],r[1],r[2],r[3],r[4],r[5]);r=a.applyToTriplePoints(i.o[o-1],i.i[0],i.v[0]),s.bezierCurveTo(r[0],r[1],r[2],r[3],r[4],r[5])}this.element.globalData.renderer.save(!0),s.clip()}},CVMaskElement.prototype.getMaskProperty=MaskElement.prototype.getMaskProperty,CVMaskElement.prototype.destroy=function(){this.element=null},extendPrototype([BaseElement,TransformElement,CVBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableElement],CVShapeElement),CVShapeElement.prototype.initElement=RenderableDOMElement.prototype.initElement,CVShapeElement.prototype.transformHelper={opacity:1,_opMdf:!1},CVShapeElement.prototype.dashResetter=[],CVShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,!0,[])},CVShapeElement.prototype.createStyleElement=function(t,e){var r={data:t,type:t.ty,preTransforms:this.transformsManager.addTransformSequence(e),transforms:[],elements:[],closed:!0===t.hd},i={};if("fl"===t.ty||"st"===t.ty?(i.c=PropertyFactory.getProp(this,t.c,1,255,this),i.c.k||(r.co="rgb("+bmFloor(i.c.v[0])+","+bmFloor(i.c.v[1])+","+bmFloor(i.c.v[2])+")")):"gf"!==t.ty&&"gs"!==t.ty||(i.s=PropertyFactory.getProp(this,t.s,1,null,this),i.e=PropertyFactory.getProp(this,t.e,1,null,this),i.h=PropertyFactory.getProp(this,t.h||{k:0},0,.01,this),i.a=PropertyFactory.getProp(this,t.a||{k:0},0,degToRads,this),i.g=new GradientProperty(this,t.g,this)),i.o=PropertyFactory.getProp(this,t.o,0,.01,this),"st"===t.ty||"gs"===t.ty){if(r.lc=this.lcEnum[t.lc]||"round",r.lj=this.ljEnum[t.lj]||"round",1==t.lj&&(r.ml=t.ml),i.w=PropertyFactory.getProp(this,t.w,0,null,this),i.w.k||(r.wi=i.w.v),t.d){var a=new DashProperty(this,t.d,"canvas",this);i.d=a,i.d.k||(r.da=i.d.dashArray,r.do=i.d.dashoffset[0])}}else r.r=2===t.r?"evenodd":"nonzero";return this.stylesList.push(r),i.style=r,i},CVShapeElement.prototype.createGroupElement=function(){return{it:[],prevViewData:[]}},CVShapeElement.prototype.createTransformElement=function(t){return{transform:{opacity:1,_opMdf:!1,key:this.transformsManager.getNewKey(),op:PropertyFactory.getProp(this,t.o,0,.01,this),mProps:TransformPropertyFactory.getTransformProperty(this,t,this)}}},CVShapeElement.prototype.createShapeElement=function(t){var e=new CVShapeData(this,t,this.stylesList,this.transformsManager);return this.shapes.push(e),this.addShapeToModifiers(e),e},CVShapeElement.prototype.reloadShapes=function(){var t;this._isFirstFrame=!0;var e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,!0,[]),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers(),this.transformsManager.processSequences(this._isFirstFrame)},CVShapeElement.prototype.addTransformToStyleList=function(t){var e,r=this.stylesList.length;for(e=0;e<r;e+=1)this.stylesList[e].closed||this.stylesList[e].transforms.push(t)},CVShapeElement.prototype.removeTransformFromStyleList=function(){var t,e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].closed||this.stylesList[t].transforms.pop()},CVShapeElement.prototype.closeStyles=function(t){var e,r=t.length;for(e=0;e<r;e+=1)t[e].closed=!0},CVShapeElement.prototype.searchShapes=function(t,e,r,i,a){var s,n,o,h,l,p,f=t.length-1,c=[],m=[],d=[].concat(a);for(s=f;s>=0;s-=1){if((h=this.searchProcessedElement(t[s]))?e[s]=r[h-1]:t[s]._shouldRender=i,"fl"===t[s].ty||"st"===t[s].ty||"gf"===t[s].ty||"gs"===t[s].ty)h?e[s].style.closed=!1:e[s]=this.createStyleElement(t[s],d),c.push(e[s].style);else if("gr"===t[s].ty){if(h)for(o=e[s].it.length,n=0;n<o;n+=1)e[s].prevViewData[n]=e[s].it[n];else e[s]=this.createGroupElement(t[s]);this.searchShapes(t[s].it,e[s].it,e[s].prevViewData,i,d)}else"tr"===t[s].ty?(h||(p=this.createTransformElement(t[s]),e[s]=p),d.push(e[s]),this.addTransformToStyleList(e[s])):"sh"===t[s].ty||"rc"===t[s].ty||"el"===t[s].ty||"sr"===t[s].ty?h||(e[s]=this.createShapeElement(t[s])):"tm"===t[s].ty||"rd"===t[s].ty||"pb"===t[s].ty?(h?(l=e[s]).closed=!1:((l=ShapeModifiers.getModifier(t[s].ty)).init(this,t[s]),e[s]=l,this.shapeModifiers.push(l)),m.push(l)):"rp"===t[s].ty&&(h?(l=e[s]).closed=!0:(l=ShapeModifiers.getModifier(t[s].ty),e[s]=l,l.init(this,t,s,e),this.shapeModifiers.push(l),i=!1),m.push(l));this.addProcessedElement(t[s],s+1)}for(this.removeTransformFromStyleList(),this.closeStyles(c),f=m.length,s=0;s<f;s+=1)m[s].closed=!0},CVShapeElement.prototype.renderInnerContent=function(){this.transformHelper.opacity=1,this.transformHelper._opMdf=!1,this.renderModifiers(),this.transformsManager.processSequences(this._isFirstFrame),this.renderShape(this.transformHelper,this.shapesData,this.itemsData,!0)},CVShapeElement.prototype.renderShapeTransform=function(t,e){(t._opMdf||e.op._mdf||this._isFirstFrame)&&(e.opacity=t.opacity,e.opacity*=e.op.v,e._opMdf=!0)},CVShapeElement.prototype.drawLayer=function(){var t,e,r,i,a,s,n,o,h,l=this.stylesList.length,p=this.globalData.renderer,f=this.globalData.canvasContext;for(t=0;t<l;t+=1)if(("st"!==(o=(h=this.stylesList[t]).type)&&"gs"!==o||0!==h.wi)&&h.data._shouldRender&&0!==h.coOp&&0!==this.globalData.currentGlobalAlpha){for(p.save(),s=h.elements,"st"===o||"gs"===o?(f.strokeStyle="st"===o?h.co:h.grd,f.lineWidth=h.wi,f.lineCap=h.lc,f.lineJoin=h.lj,f.miterLimit=h.ml||0):f.fillStyle="fl"===o?h.co:h.grd,p.ctxOpacity(h.coOp),"st"!==o&&"gs"!==o&&f.beginPath(),p.ctxTransform(h.preTransforms.finalTransform.props),r=s.length,e=0;e<r;e+=1){for("st"!==o&&"gs"!==o||(f.beginPath(),h.da&&(f.setLineDash(h.da),f.lineDashOffset=h.do)),a=(n=s[e].trNodes).length,i=0;i<a;i+=1)"m"===n[i].t?f.moveTo(n[i].p[0],n[i].p[1]):"c"===n[i].t?f.bezierCurveTo(n[i].pts[0],n[i].pts[1],n[i].pts[2],n[i].pts[3],n[i].pts[4],n[i].pts[5]):f.closePath();"st"!==o&&"gs"!==o||(f.stroke(),h.da&&f.setLineDash(this.dashResetter))}"st"!==o&&"gs"!==o&&f.fill(h.r),p.restore()}},CVShapeElement.prototype.renderShape=function(t,e,r,i){var a,s;for(s=t,a=e.length-1;a>=0;a-=1)"tr"===e[a].ty?(s=r[a].transform,this.renderShapeTransform(t,s)):"sh"===e[a].ty||"el"===e[a].ty||"rc"===e[a].ty||"sr"===e[a].ty?this.renderPath(e[a],r[a]):"fl"===e[a].ty?this.renderFill(e[a],r[a],s):"st"===e[a].ty?this.renderStroke(e[a],r[a],s):"gf"===e[a].ty||"gs"===e[a].ty?this.renderGradientFill(e[a],r[a],s):"gr"===e[a].ty?this.renderShape(s,e[a].it,r[a].it):e[a].ty;i&&this.drawLayer()},CVShapeElement.prototype.renderStyledShape=function(t,e){if(this._isFirstFrame||e._mdf||t.transforms._mdf){var r,i,a,s=t.trNodes,n=e.paths,o=n._length;s.length=0;var h=t.transforms.finalTransform;for(a=0;a<o;a+=1){var l=n.shapes[a];if(l&&l.v){for(i=l._length,r=1;r<i;r+=1)1===r&&s.push({t:"m",p:h.applyToPointArray(l.v[0][0],l.v[0][1],0)}),s.push({t:"c",pts:h.applyToTriplePoints(l.o[r-1],l.i[r],l.v[r])});1===i&&s.push({t:"m",p:h.applyToPointArray(l.v[0][0],l.v[0][1],0)}),l.c&&i&&(s.push({t:"c",pts:h.applyToTriplePoints(l.o[r-1],l.i[0],l.v[0])}),s.push({t:"z"}))}}t.trNodes=s}},CVShapeElement.prototype.renderPath=function(t,e){if(!0!==t.hd&&t._shouldRender){var r,i=e.styledShapes.length;for(r=0;r<i;r+=1)this.renderStyledShape(e.styledShapes[r],e.sh)}},CVShapeElement.prototype.renderFill=function(t,e,r){var i=e.style;(e.c._mdf||this._isFirstFrame)&&(i.co="rgb("+bmFloor(e.c.v[0])+","+bmFloor(e.c.v[1])+","+bmFloor(e.c.v[2])+")"),(e.o._mdf||r._opMdf||this._isFirstFrame)&&(i.coOp=e.o.v*r.opacity)},CVShapeElement.prototype.renderGradientFill=function(t,e,r){var i,a=e.style;if(!a.grd||e.g._mdf||e.s._mdf||e.e._mdf||1!==t.t&&(e.h._mdf||e.a._mdf)){var s,n=this.globalData.canvasContext,o=e.s.v,h=e.e.v;if(1===t.t)i=n.createLinearGradient(o[0],o[1],h[0],h[1]);else{var l=Math.sqrt(Math.pow(o[0]-h[0],2)+Math.pow(o[1]-h[1],2)),p=Math.atan2(h[1]-o[1],h[0]-o[0]),f=e.h.v;f>=1?f=.99:f<=-1&&(f=-.99);var c=l*f,m=Math.cos(p+e.a.v)*c+o[0],d=Math.sin(p+e.a.v)*c+o[1];i=n.createRadialGradient(m,d,0,o[0],o[1],l)}var u=t.g.p,y=e.g.c,g=1;for(s=0;s<u;s+=1)e.g._hasOpacity&&e.g._collapsable&&(g=e.g.o[2*s+1]),i.addColorStop(y[4*s]/100,"rgba("+y[4*s+1]+","+y[4*s+2]+","+y[4*s+3]+","+g+")");a.grd=i}a.coOp=e.o.v*r.opacity},CVShapeElement.prototype.renderStroke=function(t,e,r){var i=e.style,a=e.d;a&&(a._mdf||this._isFirstFrame)&&(i.da=a.dashArray,i.do=a.dashoffset[0]),(e.c._mdf||this._isFirstFrame)&&(i.co="rgb("+bmFloor(e.c.v[0])+","+bmFloor(e.c.v[1])+","+bmFloor(e.c.v[2])+")"),(e.o._mdf||r._opMdf||this._isFirstFrame)&&(i.coOp=e.o.v*r.opacity),(e.w._mdf||this._isFirstFrame)&&(i.wi=e.w.v)},CVShapeElement.prototype.destroy=function(){this.shapesData=null,this.globalData=null,this.canvasContext=null,this.stylesList.length=0,this.itemsData.length=0},extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement],CVSolidElement),CVSolidElement.prototype.initElement=SVGShapeElement.prototype.initElement,CVSolidElement.prototype.prepareFrame=IImageElement.prototype.prepareFrame,CVSolidElement.prototype.renderInnerContent=function(){var t=this.canvasContext;t.fillStyle=this.data.sc,t.fillRect(0,0,this.data.sw,this.data.sh)},extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement,ITextElement],CVTextElement),CVTextElement.prototype.tHelper=createTag("canvas").getContext("2d"),CVTextElement.prototype.buildNewText=function(){var t=this.textProperty.currentData;this.renderedLetters=createSizedArray(t.l?t.l.length:0);var e=!1;t.fc?(e=!0,this.values.fill=this.buildColor(t.fc)):this.values.fill="rgba(0,0,0,0)",this.fill=e;var r=!1;t.sc&&(r=!0,this.values.stroke=this.buildColor(t.sc),this.values.sWidth=t.sw);var i,a,s,n,o,h,l,p,f,c,m,d,u=this.globalData.fontManager.getFontByName(t.f),y=t.l,g=this.mHelper;this.stroke=r,this.values.fValue=t.finalSize+"px "+this.globalData.fontManager.getFontByName(t.f).fFamily,a=t.finalText.length;var v=this.data.singleShape,b=.001*t.tr*t.finalSize,x=0,E=0,P=!0,S=0;for(i=0;i<a;i+=1){for(n=(s=this.globalData.fontManager.getCharData(t.finalText[i],u.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily))&&s.data||{},g.reset(),v&&y[i].n&&(x=-b,E+=t.yOffset,E+=P?1:0,P=!1),f=(l=n.shapes?n.shapes[0].it:[]).length,g.scale(t.finalSize/100,t.finalSize/100),v&&this.applyTextPropertiesToMatrix(t,g,y[i].line,x,E),m=createSizedArray(f),p=0;p<f;p+=1){for(h=l[p].ks.k.i.length,c=l[p].ks.k,d=[],o=1;o<h;o+=1)1===o&&d.push(g.applyToX(c.v[0][0],c.v[0][1],0),g.applyToY(c.v[0][0],c.v[0][1],0)),d.push(g.applyToX(c.o[o-1][0],c.o[o-1][1],0),g.applyToY(c.o[o-1][0],c.o[o-1][1],0),g.applyToX(c.i[o][0],c.i[o][1],0),g.applyToY(c.i[o][0],c.i[o][1],0),g.applyToX(c.v[o][0],c.v[o][1],0),g.applyToY(c.v[o][0],c.v[o][1],0));d.push(g.applyToX(c.o[o-1][0],c.o[o-1][1],0),g.applyToY(c.o[o-1][0],c.o[o-1][1],0),g.applyToX(c.i[0][0],c.i[0][1],0),g.applyToY(c.i[0][0],c.i[0][1],0),g.applyToX(c.v[0][0],c.v[0][1],0),g.applyToY(c.v[0][0],c.v[0][1],0)),m[p]=d}v&&(x+=y[i].l,x+=b),this.textSpans[S]?this.textSpans[S].elem=m:this.textSpans[S]={elem:m},S+=1}},CVTextElement.prototype.renderInnerContent=function(){var t,e,r,i,a,s,n=this.canvasContext;n.font=this.values.fValue,n.lineCap="butt",n.lineJoin="miter",n.miterLimit=4,this.data.singleShape||this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag);var o,h=this.textAnimator.renderedLetters,l=this.textProperty.currentData.l;e=l.length;var p,f,c=null,m=null,d=null;for(t=0;t<e;t+=1)if(!l[t].n){if((o=h[t])&&(this.globalData.renderer.save(),this.globalData.renderer.ctxTransform(o.p),this.globalData.renderer.ctxOpacity(o.o)),this.fill){for(o&&o.fc?c!==o.fc&&(c=o.fc,n.fillStyle=o.fc):c!==this.values.fill&&(c=this.values.fill,n.fillStyle=this.values.fill),i=(p=this.textSpans[t].elem).length,this.globalData.canvasContext.beginPath(),r=0;r<i;r+=1)for(s=(f=p[r]).length,this.globalData.canvasContext.moveTo(f[0],f[1]),a=2;a<s;a+=6)this.globalData.canvasContext.bezierCurveTo(f[a],f[a+1],f[a+2],f[a+3],f[a+4],f[a+5]);this.globalData.canvasContext.closePath(),this.globalData.canvasContext.fill()}if(this.stroke){for(o&&o.sw?d!==o.sw&&(d=o.sw,n.lineWidth=o.sw):d!==this.values.sWidth&&(d=this.values.sWidth,n.lineWidth=this.values.sWidth),o&&o.sc?m!==o.sc&&(m=o.sc,n.strokeStyle=o.sc):m!==this.values.stroke&&(m=this.values.stroke,n.strokeStyle=this.values.stroke),i=(p=this.textSpans[t].elem).length,this.globalData.canvasContext.beginPath(),r=0;r<i;r+=1)for(s=(f=p[r]).length,this.globalData.canvasContext.moveTo(f[0],f[1]),a=2;a<s;a+=6)this.globalData.canvasContext.bezierCurveTo(f[a],f[a+1],f[a+2],f[a+3],f[a+4],f[a+5]);this.globalData.canvasContext.closePath(),this.globalData.canvasContext.stroke()}o&&this.globalData.renderer.restore()}},CVEffects.prototype.renderFrame=function(){},HBaseElement.prototype={checkBlendMode:function(){},initRendererElement:function(){this.baseElement=createTag(this.data.tg||"div"),this.data.hasMask?(this.svgElement=createNS("svg"),this.layerElement=createNS("g"),this.maskedElement=this.layerElement,this.svgElement.appendChild(this.layerElement),this.baseElement.appendChild(this.svgElement)):this.layerElement=this.baseElement,styleDiv(this.baseElement)},createContainerElements:function(){this.renderableEffectsManager=new CVEffects(this),this.transformedElement=this.baseElement,this.maskedElement=this.layerElement,this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),0!==this.data.bm&&this.setBlendMode()},renderElement:function(){var t=this.transformedElement?this.transformedElement.style:{};if(this.finalTransform._matMdf){var e=this.finalTransform.mat.toCSS();t.transform=e,t.webkitTransform=e}this.finalTransform._opMdf&&(t.opacity=this.finalTransform.mProp.o.v)},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},destroy:function(){this.layerElement=null,this.transformedElement=null,this.matteElement&&(this.matteElement=null),this.maskManager&&(this.maskManager.destroy(),this.maskManager=null)},createRenderableComponents:function(){this.maskManager=new MaskElement(this.data,this,this.globalData)},addEffects:function(){},setMatte:function(){}},HBaseElement.prototype.getBaseElement=SVGBaseElement.prototype.getBaseElement,HBaseElement.prototype.destroyBaseElement=HBaseElement.prototype.destroy,HBaseElement.prototype.buildElementParenting=HybridRenderer.prototype.buildElementParenting,extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],HSolidElement),HSolidElement.prototype.createContent=function(){var t;this.data.hasMask?((t=createNS("rect")).setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.svgElement.setAttribute("width",this.data.sw),this.svgElement.setAttribute("height",this.data.sh)):((t=createTag("div")).style.width=this.data.sw+"px",t.style.height=this.data.sh+"px",t.style.backgroundColor=this.data.sc),this.layerElement.appendChild(t)},extendPrototype([HybridRenderer,ICompElement,HBaseElement],HCompElement),HCompElement.prototype._createBaseContainerElements=HCompElement.prototype.createContainerElements,HCompElement.prototype.createContainerElements=function(){this._createBaseContainerElements(),this.data.hasMask?(this.svgElement.setAttribute("width",this.data.w),this.svgElement.setAttribute("height",this.data.h),this.transformedElement=this.baseElement):this.transformedElement=this.layerElement},HCompElement.prototype.addTo3dContainer=function(t,e){for(var r,i=0;i<e;)this.elements[i]&&this.elements[i].getBaseElement&&(r=this.elements[i].getBaseElement()),i+=1;r?this.layerElement.insertBefore(t,r):this.layerElement.appendChild(t)},extendPrototype([BaseElement,TransformElement,HSolidElement,SVGShapeElement,HBaseElement,HierarchyElement,FrameElement,RenderableElement],HShapeElement),HShapeElement.prototype._renderShapeFrame=HShapeElement.prototype.renderInnerContent,HShapeElement.prototype.createContent=function(){var t;if(this.baseElement.style.fontSize=0,this.data.hasMask)this.layerElement.appendChild(this.shapesContainer),t=this.svgElement;else{t=createNS("svg");var e=this.comp.data?this.comp.data:this.globalData.compSize;t.setAttribute("width",e.w),t.setAttribute("height",e.h),t.appendChild(this.shapesContainer),this.layerElement.appendChild(t)}this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.shapesContainer,0,[],!0),this.filterUniqueShapes(),this.shapeCont=t},HShapeElement.prototype.getTransformedPoint=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)e=t[r].mProps.v.applyToPointArray(e[0],e[1],0);return e},HShapeElement.prototype.calculateShapeBoundingBox=function(t,e){var r,i,a,s,n,o=t.sh.v,h=t.transformers,l=o._length;if(!(l<=1)){for(r=0;r<l-1;r+=1)i=this.getTransformedPoint(h,o.v[r]),a=this.getTransformedPoint(h,o.o[r]),s=this.getTransformedPoint(h,o.i[r+1]),n=this.getTransformedPoint(h,o.v[r+1]),this.checkBounds(i,a,s,n,e);o.c&&(i=this.getTransformedPoint(h,o.v[r]),a=this.getTransformedPoint(h,o.o[r]),s=this.getTransformedPoint(h,o.i[0]),n=this.getTransformedPoint(h,o.v[0]),this.checkBounds(i,a,s,n,e))}},HShapeElement.prototype.checkBounds=function(t,e,r,i,a){this.getBoundsOfCurve(t,e,r,i);var s=this.shapeBoundingBox;a.x=bmMin(s.left,a.x),a.xMax=bmMax(s.right,a.xMax),a.y=bmMin(s.top,a.y),a.yMax=bmMax(s.bottom,a.yMax)},HShapeElement.prototype.shapeBoundingBox={left:0,right:0,top:0,bottom:0},HShapeElement.prototype.tempBoundingBox={x:0,xMax:0,y:0,yMax:0,width:0,height:0},HShapeElement.prototype.getBoundsOfCurve=function(t,e,r,i){for(var a,s,n,o,h,l,p,f=[[t[0],i[0]],[t[1],i[1]]],c=0;c<2;++c)s=6*t[c]-12*e[c]+6*r[c],a=-3*t[c]+9*e[c]-9*r[c]+3*i[c],n=3*e[c]-3*t[c],s|=0,n|=0,0===(a|=0)&&0===s||(0===a?(o=-n/s)>0&&o<1&&f[c].push(this.calculateF(o,t,e,r,i,c)):(h=s*s-4*n*a)>=0&&((l=(-s+bmSqrt(h))/(2*a))>0&&l<1&&f[c].push(this.calculateF(l,t,e,r,i,c)),(p=(-s-bmSqrt(h))/(2*a))>0&&p<1&&f[c].push(this.calculateF(p,t,e,r,i,c))));this.shapeBoundingBox.left=bmMin.apply(null,f[0]),this.shapeBoundingBox.top=bmMin.apply(null,f[1]),this.shapeBoundingBox.right=bmMax.apply(null,f[0]),this.shapeBoundingBox.bottom=bmMax.apply(null,f[1])},HShapeElement.prototype.calculateF=function(t,e,r,i,a,s){return bmPow(1-t,3)*e[s]+3*bmPow(1-t,2)*t*r[s]+3*(1-t)*bmPow(t,2)*i[s]+bmPow(t,3)*a[s]},HShapeElement.prototype.calculateBoundingBox=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)t[r]&&t[r].sh?this.calculateShapeBoundingBox(t[r],e):t[r]&&t[r].it&&this.calculateBoundingBox(t[r].it,e)},HShapeElement.prototype.currentBoxContains=function(t){return this.currentBBox.x<=t.x&&this.currentBBox.y<=t.y&&this.currentBBox.width+this.currentBBox.x>=t.x+t.width&&this.currentBBox.height+this.currentBBox.y>=t.y+t.height},HShapeElement.prototype.renderInnerContent=function(){if(this._renderShapeFrame(),!this.hidden&&(this._isFirstFrame||this._mdf)){var t=this.tempBoundingBox,e=999999;if(t.x=e,t.xMax=-e,t.y=e,t.yMax=-e,this.calculateBoundingBox(this.itemsData,t),t.width=t.xMax<t.x?0:t.xMax-t.x,t.height=t.yMax<t.y?0:t.yMax-t.y,this.currentBoxContains(t))return;var r=!1;if(this.currentBBox.w!==t.width&&(this.currentBBox.w=t.width,this.shapeCont.setAttribute("width",t.width),r=!0),this.currentBBox.h!==t.height&&(this.currentBBox.h=t.height,this.shapeCont.setAttribute("height",t.height),r=!0),r||this.currentBBox.x!==t.x||this.currentBBox.y!==t.y){this.currentBBox.w=t.width,this.currentBBox.h=t.height,this.currentBBox.x=t.x,this.currentBBox.y=t.y,this.shapeCont.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h);var i=this.shapeCont.style,a="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)";i.transform=a,i.webkitTransform=a}}},extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],HTextElement),HTextElement.prototype.createContent=function(){if(this.isMasked=this.checkMasks(),this.isMasked){this.renderType="svg",this.compW=this.comp.data.w,this.compH=this.comp.data.h,this.svgElement.setAttribute("width",this.compW),this.svgElement.setAttribute("height",this.compH);var t=createNS("g");this.maskedElement.appendChild(t),this.innerElem=t}else this.renderType="html",this.innerElem=this.layerElement;this.checkParenting()},HTextElement.prototype.buildNewText=function(){var t=this.textProperty.currentData;this.renderedLetters=createSizedArray(t.l?t.l.length:0);var e=this.innerElem.style,r=t.fc?this.buildColor(t.fc):"rgba(0,0,0,0)";e.fill=r,e.color=r,t.sc&&(e.stroke=this.buildColor(t.sc),e.strokeWidth=t.sw+"px");var i,a,s=this.globalData.fontManager.getFontByName(t.f);if(!this.globalData.fontManager.chars)if(e.fontSize=t.finalSize+"px",e.lineHeight=t.finalSize+"px",s.fClass)this.innerElem.className=s.fClass;else{e.fontFamily=s.fFamily;var n=t.fWeight,o=t.fStyle;e.fontStyle=o,e.fontWeight=n}var h,l,p,f=t.l;a=f.length;var c,m=this.mHelper,d="",u=0;for(i=0;i<a;i+=1){if(this.globalData.fontManager.chars?(this.textPaths[u]?h=this.textPaths[u]:((h=createNS("path")).setAttribute("stroke-linecap","butt"),h.setAttribute("stroke-linejoin","round"),h.setAttribute("stroke-miterlimit","4")),this.isMasked||(this.textSpans[u]?p=(l=this.textSpans[u]).children[0]:((l=createTag("div")).style.lineHeight=0,(p=createNS("svg")).appendChild(h),styleDiv(l)))):this.isMasked?h=this.textPaths[u]?this.textPaths[u]:createNS("text"):this.textSpans[u]?(l=this.textSpans[u],h=this.textPaths[u]):(styleDiv(l=createTag("span")),styleDiv(h=createTag("span")),l.appendChild(h)),this.globalData.fontManager.chars){var y,g=this.globalData.fontManager.getCharData(t.finalText[i],s.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily);if(y=g?g.data:null,m.reset(),y&&y.shapes&&(c=y.shapes[0].it,m.scale(t.finalSize/100,t.finalSize/100),d=this.createPathShape(m,c),h.setAttribute("d",d)),this.isMasked)this.innerElem.appendChild(h);else{if(this.innerElem.appendChild(l),y&&y.shapes){document.body.appendChild(p);var v=p.getBBox();p.setAttribute("width",v.width+2),p.setAttribute("height",v.height+2),p.setAttribute("viewBox",v.x-1+" "+(v.y-1)+" "+(v.width+2)+" "+(v.height+2));var b=p.style,x="translate("+(v.x-1)+"px,"+(v.y-1)+"px)";b.transform=x,b.webkitTransform=x,f[i].yOffset=v.y-1}else p.setAttribute("width",1),p.setAttribute("height",1);l.appendChild(p)}}else if(h.textContent=f[i].val,h.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),this.isMasked)this.innerElem.appendChild(h);else{this.innerElem.appendChild(l);var E=h.style,P="translate3d(0,"+-t.finalSize/1.2+"px,0)";E.transform=P,E.webkitTransform=P}this.isMasked?this.textSpans[u]=h:this.textSpans[u]=l,this.textSpans[u].style.display="block",this.textPaths[u]=h,u+=1}for(;u<this.textSpans.length;)this.textSpans[u].style.display="none",u+=1},HTextElement.prototype.renderInnerContent=function(){var t;if(this.data.singleShape){if(!this._isFirstFrame&&!this.lettersChangedFlag)return;if(this.isMasked&&this.finalTransform._matMdf){this.svgElement.setAttribute("viewBox",-this.finalTransform.mProp.p.v[0]+" "+-this.finalTransform.mProp.p.v[1]+" "+this.compW+" "+this.compH),t=this.svgElement.style;var e="translate("+-this.finalTransform.mProp.p.v[0]+"px,"+-this.finalTransform.mProp.p.v[1]+"px)";t.transform=e,t.webkitTransform=e}}if(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag){var r,i,a,s,n,o=0,h=this.textAnimator.renderedLetters,l=this.textProperty.currentData.l;for(i=l.length,r=0;r<i;r+=1)l[r].n?o+=1:(s=this.textSpans[r],n=this.textPaths[r],a=h[o],o+=1,a._mdf.m&&(this.isMasked?s.setAttribute("transform",a.m):(s.style.webkitTransform=a.m,s.style.transform=a.m)),s.style.opacity=a.o,a.sw&&a._mdf.sw&&n.setAttribute("stroke-width",a.sw),a.sc&&a._mdf.sc&&n.setAttribute("stroke",a.sc),a.fc&&a._mdf.fc&&(n.setAttribute("fill",a.fc),n.style.color=a.fc));if(this.innerElem.getBBox&&!this.hidden&&(this._isFirstFrame||this._mdf)){var p=this.innerElem.getBBox();this.currentBBox.w!==p.width&&(this.currentBBox.w=p.width,this.svgElement.setAttribute("width",p.width)),this.currentBBox.h!==p.height&&(this.currentBBox.h=p.height,this.svgElement.setAttribute("height",p.height));if(this.currentBBox.w!==p.width+2||this.currentBBox.h!==p.height+2||this.currentBBox.x!==p.x-1||this.currentBBox.y!==p.y-1){this.currentBBox.w=p.width+2,this.currentBBox.h=p.height+2,this.currentBBox.x=p.x-1,this.currentBBox.y=p.y-1,this.svgElement.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h),t=this.svgElement.style;var f="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)";t.transform=f,t.webkitTransform=f}}}},extendPrototype([BaseElement,TransformElement,HBaseElement,HSolidElement,HierarchyElement,FrameElement,RenderableElement],HImageElement),HImageElement.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData),e=new Image;this.data.hasMask?(this.imageElem=createNS("image"),this.imageElem.setAttribute("width",this.assetData.w+"px"),this.imageElem.setAttribute("height",this.assetData.h+"px"),this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.imageElem),this.baseElement.setAttribute("width",this.assetData.w),this.baseElement.setAttribute("height",this.assetData.h)):this.layerElement.appendChild(e),e.crossOrigin="anonymous",e.src=t,this.data.ln&&this.baseElement.setAttribute("id",this.data.ln)},extendPrototype([BaseElement,FrameElement,HierarchyElement],HCameraElement),HCameraElement.prototype.setup=function(){var t,e,r,i,a=this.comp.threeDElements.length;for(t=0;t<a;t+=1)if("3d"===(e=this.comp.threeDElements[t]).type){r=e.perspectiveElem.style,i=e.container.style;var s=this.pe.v+"px",n="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";r.perspective=s,r.webkitPerspective=s,i.transformOrigin="0px 0px 0px",i.mozTransformOrigin="0px 0px 0px",i.webkitTransformOrigin="0px 0px 0px",r.transform=n,r.webkitTransform=n}},HCameraElement.prototype.createElements=function(){},HCameraElement.prototype.hide=function(){},HCameraElement.prototype.renderFrame=function(){var t,e,r=this._isFirstFrame;if(this.hierarchy)for(e=this.hierarchy.length,t=0;t<e;t+=1)r=this.hierarchy[t].finalTransform.mProp._mdf||r;if(r||this.pe._mdf||this.p&&this.p._mdf||this.px&&(this.px._mdf||this.py._mdf||this.pz._mdf)||this.rx._mdf||this.ry._mdf||this.rz._mdf||this.or._mdf||this.a&&this.a._mdf){if(this.mat.reset(),this.hierarchy)for(t=e=this.hierarchy.length-1;t>=0;t-=1){var i=this.hierarchy[t].finalTransform.mProp;this.mat.translate(-i.p.v[0],-i.p.v[1],i.p.v[2]),this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]),this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v),this.mat.scale(1/i.s.v[0],1/i.s.v[1],1/i.s.v[2]),this.mat.translate(i.a.v[0],i.a.v[1],i.a.v[2])}if(this.p?this.mat.translate(-this.p.v[0],-this.p.v[1],this.p.v[2]):this.mat.translate(-this.px.v,-this.py.v,this.pz.v),this.a){var a;a=this.p?[this.p.v[0]-this.a.v[0],this.p.v[1]-this.a.v[1],this.p.v[2]-this.a.v[2]]:[this.px.v-this.a.v[0],this.py.v-this.a.v[1],this.pz.v-this.a.v[2]];var s=Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],2)),n=[a[0]/s,a[1]/s,a[2]/s],o=Math.sqrt(n[2]*n[2]+n[0]*n[0]),h=Math.atan2(n[1],o),l=Math.atan2(n[0],-n[2]);this.mat.rotateY(l).rotateX(-h)}this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),this.mat.translate(this.globalData.compSize.w/2,this.globalData.compSize.h/2,0),this.mat.translate(0,0,this.pe.v);var p=!this._prevMat.equals(this.mat);if((p||this.pe._mdf)&&this.comp.threeDElements){var f,c,m;for(e=this.comp.threeDElements.length,t=0;t<e;t+=1)if("3d"===(f=this.comp.threeDElements[t]).type){if(p){var d=this.mat.toCSS();(m=f.container.style).transform=d,m.webkitTransform=d}this.pe._mdf&&((c=f.perspectiveElem.style).perspective=this.pe.v+"px",c.webkitPerspective=this.pe.v+"px")}this.mat.clone(this._prevMat)}}this._isFirstFrame=!1},HCameraElement.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},HCameraElement.prototype.destroy=function(){},HCameraElement.prototype.getBaseElement=function(){return null},HEffects.prototype.renderFrame=function(){};var animationManager=function(){var t={},e=[],r=0,i=0,a=0,s=!0,n=!1;function o(t){for(var r=0,a=t.target;r<i;)e[r].animation===a&&(e.splice(r,1),r-=1,i-=1,a.isPaused||p()),r+=1}function h(t,r){if(!t)return null;for(var a=0;a<i;){if(e[a].elem===t&&null!==e[a].elem)return e[a].animation;a+=1}var s=new AnimationItem;return f(s,t),s.setData(t,r),s}function l(){a+=1,d()}function p(){a-=1}function f(t,r){t.addEventListener("destroy",o),t.addEventListener("_active",l),t.addEventListener("_idle",p),e.push({elem:r,animation:t}),i+=1}function c(t){var o,h=t-r;for(o=0;o<i;o+=1)e[o].animation.advanceTime(h);r=t,a&&!n?window.requestAnimationFrame(c):s=!0}function m(t){r=t,window.requestAnimationFrame(c)}function d(){!n&&a&&s&&(window.requestAnimationFrame(m),s=!1)}return t.registerAnimation=h,t.loadAnimation=function(t){var e=new AnimationItem;return f(e,null),e.setParams(t),e},t.setSpeed=function(t,r){var a;for(a=0;a<i;a+=1)e[a].animation.setSpeed(t,r)},t.setDirection=function(t,r){var a;for(a=0;a<i;a+=1)e[a].animation.setDirection(t,r)},t.play=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.play(t)},t.pause=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.pause(t)},t.stop=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.stop(t)},t.togglePause=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.togglePause(t)},t.searchAnimations=function(t,e,r){var i,a=[].concat([].slice.call(document.getElementsByClassName("lottie")),[].slice.call(document.getElementsByClassName("bodymovin"))),s=a.length;for(i=0;i<s;i+=1)r&&a[i].setAttribute("data-bm-type",r),h(a[i],t);if(e&&0===s){r||(r="svg");var n=document.getElementsByTagName("body")[0];n.innerText="";var o=createTag("div");o.style.width="100%",o.style.height="100%",o.setAttribute("data-bm-type",r),n.appendChild(o),h(o,t)}},t.resize=function(){var t;for(t=0;t<i;t+=1)e[t].animation.resize()},t.goToAndStop=function(t,r,a){var s;for(s=0;s<i;s+=1)e[s].animation.goToAndStop(t,r,a)},t.destroy=function(t){var r;for(r=i-1;r>=0;r-=1)e[r].animation.destroy(t)},t.freeze=function(){n=!0},t.unfreeze=function(){n=!1,d()},t.setVolume=function(t,r){var a;for(a=0;a<i;a+=1)e[a].animation.setVolume(t,r)},t.mute=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.mute(t)},t.unmute=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.unmute(t)},t.getRegisteredAnimations=function(){var t,r=e.length,i=[];for(t=0;t<r;t+=1)i.push(e[t].animation);return i},t}(),AnimationItem=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.firstFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.playCount=0,this.animationData={},this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=createElementID(),this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.isSubframeEnabled=subframeEnabled,this.segments=[],this._idle=!0,this._completedLoop=!1,this.projectInterface=ProjectInterface(),this.imagePreloader=new ImagePreloader,this.audioController=audioControllerFactory(),this.markers=[]};extendPrototype([BaseEvent],AnimationItem),AnimationItem.prototype.setParams=function(t){(t.wrapper||t.container)&&(this.wrapper=t.wrapper||t.container);var e="svg";switch(t.animType?e=t.animType:t.renderer&&(e=t.renderer),e){case"canvas":this.renderer=new CanvasRenderer(this,t.rendererSettings);break;case"svg":this.renderer=new SVGRenderer(this,t.rendererSettings);break;default:this.renderer=new HybridRenderer(this,t.rendererSettings)}this.imagePreloader.setCacheType(e,this.renderer.globalData.defs),this.renderer.setProjectInterface(this.projectInterface),this.animType=e,""===t.loop||null===t.loop||void 0===t.loop||!0===t.loop?this.loop=!0:!1===t.loop?this.loop=!1:this.loop=parseInt(t.loop,10),this.autoplay=!("autoplay"in t)||t.autoplay,this.name=t.name?t.name:"",this.autoloadSegments=!Object.prototype.hasOwnProperty.call(t,"autoloadSegments")||t.autoloadSegments,this.assetsPath=t.assetsPath,this.initialSegment=t.initialSegment,t.audioFactory&&this.audioController.setAudioFactory(t.audioFactory),t.animationData?this.configAnimation(t.animationData):t.path&&(-1!==t.path.lastIndexOf("\\")?this.path=t.path.substr(0,t.path.lastIndexOf("\\")+1):this.path=t.path.substr(0,t.path.lastIndexOf("/")+1),this.fileName=t.path.substr(t.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),assetLoader.load(t.path,this.configAnimation.bind(this),function(){this.trigger("data_failed")}.bind(this)))},AnimationItem.prototype.setData=function(t,e){e&&"object"!=typeof e&&(e=JSON.parse(e));var r={wrapper:t,animationData:e},i=t.attributes;r.path=i.getNamedItem("data-animation-path")?i.getNamedItem("data-animation-path").value:i.getNamedItem("data-bm-path")?i.getNamedItem("data-bm-path").value:i.getNamedItem("bm-path")?i.getNamedItem("bm-path").value:"",r.animType=i.getNamedItem("data-anim-type")?i.getNamedItem("data-anim-type").value:i.getNamedItem("data-bm-type")?i.getNamedItem("data-bm-type").value:i.getNamedItem("bm-type")?i.getNamedItem("bm-type").value:i.getNamedItem("data-bm-renderer")?i.getNamedItem("data-bm-renderer").value:i.getNamedItem("bm-renderer")?i.getNamedItem("bm-renderer").value:"canvas";var a=i.getNamedItem("data-anim-loop")?i.getNamedItem("data-anim-loop").value:i.getNamedItem("data-bm-loop")?i.getNamedItem("data-bm-loop").value:i.getNamedItem("bm-loop")?i.getNamedItem("bm-loop").value:"";"false"===a?r.loop=!1:"true"===a?r.loop=!0:""!==a&&(r.loop=parseInt(a,10));var s=i.getNamedItem("data-anim-autoplay")?i.getNamedItem("data-anim-autoplay").value:i.getNamedItem("data-bm-autoplay")?i.getNamedItem("data-bm-autoplay").value:!i.getNamedItem("bm-autoplay")||i.getNamedItem("bm-autoplay").value;r.autoplay="false"!==s,r.name=i.getNamedItem("data-name")?i.getNamedItem("data-name").value:i.getNamedItem("data-bm-name")?i.getNamedItem("data-bm-name").value:i.getNamedItem("bm-name")?i.getNamedItem("bm-name").value:"","false"===(i.getNamedItem("data-anim-prerender")?i.getNamedItem("data-anim-prerender").value:i.getNamedItem("data-bm-prerender")?i.getNamedItem("data-bm-prerender").value:i.getNamedItem("bm-prerender")?i.getNamedItem("bm-prerender").value:"")&&(r.prerender=!1),this.setParams(r)},AnimationItem.prototype.includeLayers=function(t){t.op>this.animationData.op&&(this.animationData.op=t.op,this.totalFrames=Math.floor(t.op-this.animationData.ip));var e,r,i=this.animationData.layers,a=i.length,s=t.layers,n=s.length;for(r=0;r<n;r+=1)for(e=0;e<a;){if(i[e].id===s[r].id){i[e]=s[r];break}e+=1}if((t.chars||t.fonts)&&(this.renderer.globalData.fontManager.addChars(t.chars),this.renderer.globalData.fontManager.addFonts(t.fonts,this.renderer.globalData.defs)),t.assets)for(a=t.assets.length,e=0;e<a;e+=1)this.animationData.assets.push(t.assets[e]);this.animationData.__complete=!1,dataManager.completeData(this.animationData,this.renderer.globalData.fontManager),this.renderer.includeLayers(t.layers),expressionsPlugin&&expressionsPlugin.initExpressions(this),this.loadNextSegment()},AnimationItem.prototype.loadNextSegment=function(){var t=this.animationData.segments;if(!t||0===t.length||!this.autoloadSegments)return this.trigger("data_ready"),void(this.timeCompleted=this.totalFrames);var e=t.shift();this.timeCompleted=e.time*this.frameRate;var r=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,assetLoader.load(r,this.includeLayers.bind(this),function(){this.trigger("data_failed")}.bind(this))},AnimationItem.prototype.loadSegments=function(){this.animationData.segments||(this.timeCompleted=this.totalFrames),this.loadNextSegment()},AnimationItem.prototype.imagesLoaded=function(){this.trigger("loaded_images"),this.checkLoaded()},AnimationItem.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this))},AnimationItem.prototype.configAnimation=function(t){if(this.renderer)try{this.animationData=t,this.initialSegment?(this.totalFrames=Math.floor(this.initialSegment[1]-this.initialSegment[0]),this.firstFrame=Math.round(this.initialSegment[0])):(this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.firstFrame=Math.round(this.animationData.ip)),this.renderer.configAnimation(t),t.assets||(t.assets=[]),this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.frameMult=this.animationData.fr/1e3,this.renderer.searchExtraCompositions(t.assets),this.markers=markerParser(t.markers||[]),this.trigger("config_ready"),this.preloadImages(),this.loadSegments(),this.updaFrameModifier(),this.waitForFontsLoaded(),this.isPaused&&this.audioController.pause()}catch(t){this.triggerConfigError(t)}},AnimationItem.prototype.waitForFontsLoaded=function(){this.renderer&&(this.renderer.globalData.fontManager.isLoaded?this.checkLoaded():setTimeout(this.waitForFontsLoaded.bind(this),20))},AnimationItem.prototype.checkLoaded=function(){!this.isLoaded&&this.renderer.globalData.fontManager.isLoaded&&(this.imagePreloader.loadedImages()||"canvas"!==this.renderer.rendererType)&&this.imagePreloader.loadedFootages()&&(this.isLoaded=!0,dataManager.completeData(this.animationData,this.renderer.globalData.fontManager),expressionsPlugin&&expressionsPlugin.initExpressions(this),this.renderer.initItems(),setTimeout(function(){this.trigger("DOMLoaded")}.bind(this),0),this.gotoFrame(),this.autoplay&&this.play())},AnimationItem.prototype.resize=function(){this.renderer.updateContainerSize()},AnimationItem.prototype.setSubframe=function(t){this.isSubframeEnabled=!!t},AnimationItem.prototype.gotoFrame=function(){this.currentFrame=this.isSubframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame()},AnimationItem.prototype.renderFrame=function(){if(!1!==this.isLoaded&&this.renderer)try{this.renderer.renderFrame(this.currentFrame+this.firstFrame)}catch(t){this.triggerRenderFrameError(t)}},AnimationItem.prototype.play=function(t){t&&this.name!==t||!0===this.isPaused&&(this.isPaused=!1,this.audioController.resume(),this._idle&&(this._idle=!1,this.trigger("_active")))},AnimationItem.prototype.pause=function(t){t&&this.name!==t||!1===this.isPaused&&(this.isPaused=!0,this._idle=!0,this.trigger("_idle"),this.audioController.pause())},AnimationItem.prototype.togglePause=function(t){t&&this.name!==t||(!0===this.isPaused?this.play():this.pause())},AnimationItem.prototype.stop=function(t){t&&this.name!==t||(this.pause(),this.playCount=0,this._completedLoop=!1,this.setCurrentRawFrameValue(0))},AnimationItem.prototype.getMarkerData=function(t){for(var e,r=0;r<this.markers.length;r+=1)if((e=this.markers[r]).payload&&e.payload.name===t)return e;return null},AnimationItem.prototype.goToAndStop=function(t,e,r){if(!r||this.name===r){var i=Number(t);if(isNaN(i)){var a=this.getMarkerData(t);a&&this.goToAndStop(a.time,!0)}else e?this.setCurrentRawFrameValue(t):this.setCurrentRawFrameValue(t*this.frameModifier);this.pause()}},AnimationItem.prototype.goToAndPlay=function(t,e,r){if(!r||this.name===r){var i=Number(t);if(isNaN(i)){var a=this.getMarkerData(t);a&&(a.duration?this.playSegments([a.time,a.time+a.duration],!0):this.goToAndStop(a.time,!0))}else this.goToAndStop(i,e,r);this.play()}},AnimationItem.prototype.advanceTime=function(t){if(!0!==this.isPaused&&!1!==this.isLoaded){var e=this.currentRawFrame+t*this.frameModifier,r=!1;e>=this.totalFrames-1&&this.frameModifier>0?this.loop&&this.playCount!==this.loop?e>=this.totalFrames?(this.playCount+=1,this.checkSegments(e%this.totalFrames)||(this.setCurrentRawFrameValue(e%this.totalFrames),this._completedLoop=!0,this.trigger("loopComplete"))):this.setCurrentRawFrameValue(e):this.checkSegments(e>this.totalFrames?e%this.totalFrames:0)||(r=!0,e=this.totalFrames-1):e<0?this.checkSegments(e%this.totalFrames)||(!this.loop||this.playCount--<=0&&!0!==this.loop?(r=!0,e=0):(this.setCurrentRawFrameValue(this.totalFrames+e%this.totalFrames),this._completedLoop?this.trigger("loopComplete"):this._completedLoop=!0)):this.setCurrentRawFrameValue(e),r&&(this.setCurrentRawFrameValue(e),this.pause(),this.trigger("complete"))}},AnimationItem.prototype.adjustSegment=function(t,e){this.playCount=0,t[1]<t[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.totalFrames=t[0]-t[1],this.timeCompleted=this.totalFrames,this.firstFrame=t[1],this.setCurrentRawFrameValue(this.totalFrames-.001-e)):t[1]>t[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.totalFrames=t[1]-t[0],this.timeCompleted=this.totalFrames,this.firstFrame=t[0],this.setCurrentRawFrameValue(.001+e)),this.trigger("segmentStart")},AnimationItem.prototype.setSegment=function(t,e){var r=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<t?r=t:this.currentRawFrame+this.firstFrame>e&&(r=e-t)),this.firstFrame=t,this.totalFrames=e-t,this.timeCompleted=this.totalFrames,-1!==r&&this.goToAndStop(r,!0)},AnimationItem.prototype.playSegments=function(t,e){if(e&&(this.segments.length=0),"object"==typeof t[0]){var r,i=t.length;for(r=0;r<i;r+=1)this.segments.push(t[r])}else this.segments.push(t);this.segments.length&&e&&this.adjustSegment(this.segments.shift(),0),this.isPaused&&this.play()},AnimationItem.prototype.resetSegments=function(t){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),t&&this.checkSegments(0)},AnimationItem.prototype.checkSegments=function(t){return!!this.segments.length&&(this.adjustSegment(this.segments.shift(),t),!0)},AnimationItem.prototype.destroy=function(t){t&&this.name!==t||!this.renderer||(this.renderer.destroy(),this.imagePreloader.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=null,this.onLoopComplete=null,this.onComplete=null,this.onSegmentStart=null,this.onDestroy=null,this.renderer=null,this.renderer=null,this.imagePreloader=null,this.projectInterface=null)},AnimationItem.prototype.setCurrentRawFrameValue=function(t){this.currentRawFrame=t,this.gotoFrame()},AnimationItem.prototype.setSpeed=function(t){this.playSpeed=t,this.updaFrameModifier()},AnimationItem.prototype.setDirection=function(t){this.playDirection=t<0?-1:1,this.updaFrameModifier()},AnimationItem.prototype.setVolume=function(t,e){e&&this.name!==e||this.audioController.setVolume(t)},AnimationItem.prototype.getVolume=function(){return this.audioController.getVolume()},AnimationItem.prototype.mute=function(t){t&&this.name!==t||this.audioController.mute()},AnimationItem.prototype.unmute=function(t){t&&this.name!==t||this.audioController.unmute()},AnimationItem.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection,this.audioController.setRate(this.playSpeed*this.playDirection)},AnimationItem.prototype.getPath=function(){return this.path},AnimationItem.prototype.getAssetsPath=function(t){var e="";if(t.e)e=t.p;else if(this.assetsPath){var r=t.p;-1!==r.indexOf("images/")&&(r=r.split("/")[1]),e=this.assetsPath+r}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e},AnimationItem.prototype.getAssetData=function(t){for(var e=0,r=this.assets.length;e<r;){if(t===this.assets[e].id)return this.assets[e];e+=1}return null},AnimationItem.prototype.hide=function(){this.renderer.hide()},AnimationItem.prototype.show=function(){this.renderer.show()},AnimationItem.prototype.getDuration=function(t){return t?this.totalFrames:this.totalFrames/this.frameRate},AnimationItem.prototype.trigger=function(t){if(this._cbs&&this._cbs[t])switch(t){case"enterFrame":this.triggerEvent(t,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameModifier));break;case"loopComplete":this.triggerEvent(t,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(t,new BMCompleteEvent(t,this.frameMult));break;case"segmentStart":this.triggerEvent(t,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(t,new BMDestroyEvent(t,this));break;default:this.triggerEvent(t)}"enterFrame"===t&&this.onEnterFrame&&this.onEnterFrame.call(this,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameMult)),"loopComplete"===t&&this.onLoopComplete&&this.onLoopComplete.call(this,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult)),"complete"===t&&this.onComplete&&this.onComplete.call(this,new BMCompleteEvent(t,this.frameMult)),"segmentStart"===t&&this.onSegmentStart&&this.onSegmentStart.call(this,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames)),"destroy"===t&&this.onDestroy&&this.onDestroy.call(this,new BMDestroyEvent(t,this))},AnimationItem.prototype.triggerRenderFrameError=function(t){var e=new BMRenderFrameErrorEvent(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)},AnimationItem.prototype.triggerConfigError=function(t){var e=new BMConfigErrorEvent(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)};var Expressions=function(){var t={};return t.initExpressions=function(t){var e=0,r=[];t.renderer.compInterface=CompExpressionInterface(t.renderer),t.renderer.globalData.projectInterface.registerComposition(t.renderer),t.renderer.globalData.pushExpression=function(){e+=1},t.renderer.globalData.popExpression=function(){0===(e-=1)&&function(){var t,e=r.length;for(t=0;t<e;t+=1)r[t].release();r.length=0}()},t.renderer.globalData.registerExpressionProperty=function(t){-1===r.indexOf(t)&&r.push(t)}},t}();expressionsPlugin=Expressions;var ExpressionManager=function(){var ob={},Math=BMMath,window=null,document=null;function $bm_isInstanceOfArray(t){return t.constructor===Array||t.constructor===Float32Array}function isNumerable(t,e){return"number"===t||"boolean"===t||"string"===t||e instanceof Number}function $bm_neg(t){var e=typeof t;if("number"===e||"boolean"===e||t instanceof Number)return-t;if($bm_isInstanceOfArray(t)){var r,i=t.length,a=[];for(r=0;r<i;r+=1)a[r]=-t[r];return a}return t.propType?t.v:-t}var easeInBez=BezierFactory.getBezierEasing(.333,0,.833,.833,"easeIn").get,easeOutBez=BezierFactory.getBezierEasing(.167,.167,.667,1,"easeOut").get,easeInOutBez=BezierFactory.getBezierEasing(.33,0,.667,1,"easeInOut").get;function sum(t,e){var r=typeof t,i=typeof e;if("string"===r||"string"===i)return t+e;if(isNumerable(r,t)&&isNumerable(i,e))return t+e;if($bm_isInstanceOfArray(t)&&isNumerable(i,e))return(t=t.slice(0))[0]+=e,t;if(isNumerable(r,t)&&$bm_isInstanceOfArray(e))return(e=e.slice(0))[0]=t+e[0],e;if($bm_isInstanceOfArray(t)&&$bm_isInstanceOfArray(e)){for(var a=0,s=t.length,n=e.length,o=[];a<s||a<n;)("number"==typeof t[a]||t[a]instanceof Number)&&("number"==typeof e[a]||e[a]instanceof Number)?o[a]=t[a]+e[a]:o[a]=void 0===e[a]?t[a]:t[a]||e[a],a+=1;return o}return 0}var add=sum;function sub(t,e){var r=typeof t,i=typeof e;if(isNumerable(r,t)&&isNumerable(i,e))return"string"===r&&(t=parseInt(t,10)),"string"===i&&(e=parseInt(e,10)),t-e;if($bm_isInstanceOfArray(t)&&isNumerable(i,e))return(t=t.slice(0))[0]-=e,t;if(isNumerable(r,t)&&$bm_isInstanceOfArray(e))return(e=e.slice(0))[0]=t-e[0],e;if($bm_isInstanceOfArray(t)&&$bm_isInstanceOfArray(e)){for(var a=0,s=t.length,n=e.length,o=[];a<s||a<n;)("number"==typeof t[a]||t[a]instanceof Number)&&("number"==typeof e[a]||e[a]instanceof Number)?o[a]=t[a]-e[a]:o[a]=void 0===e[a]?t[a]:t[a]||e[a],a+=1;return o}return 0}function mul(t,e){var r,i,a,s=typeof t,n=typeof e;if(isNumerable(s,t)&&isNumerable(n,e))return t*e;if($bm_isInstanceOfArray(t)&&isNumerable(n,e)){for(a=t.length,r=createTypedArray("float32",a),i=0;i<a;i+=1)r[i]=t[i]*e;return r}if(isNumerable(s,t)&&$bm_isInstanceOfArray(e)){for(a=e.length,r=createTypedArray("float32",a),i=0;i<a;i+=1)r[i]=t*e[i];return r}return 0}function div(t,e){var r,i,a,s=typeof t,n=typeof e;if(isNumerable(s,t)&&isNumerable(n,e))return t/e;if($bm_isInstanceOfArray(t)&&isNumerable(n,e)){for(a=t.length,r=createTypedArray("float32",a),i=0;i<a;i+=1)r[i]=t[i]/e;return r}if(isNumerable(s,t)&&$bm_isInstanceOfArray(e)){for(a=e.length,r=createTypedArray("float32",a),i=0;i<a;i+=1)r[i]=t/e[i];return r}return 0}function mod(t,e){return"string"==typeof t&&(t=parseInt(t,10)),"string"==typeof e&&(e=parseInt(e,10)),t%e}var $bm_sum=sum,$bm_sub=sub,$bm_mul=mul,$bm_div=div,$bm_mod=mod;function clamp(t,e,r){if(e>r){var i=r;r=e,e=i}return Math.min(Math.max(t,e),r)}function radiansToDegrees(t){return t/degToRads}var radians_to_degrees=radiansToDegrees;function degreesToRadians(t){return t*degToRads}var degrees_to_radians=radiansToDegrees,helperLengthArray=[0,0,0,0,0,0];function length(t,e){if("number"==typeof t||t instanceof Number)return e=e||0,Math.abs(t-e);var r;e||(e=helperLengthArray);var i=Math.min(t.length,e.length),a=0;for(r=0;r<i;r+=1)a+=Math.pow(e[r]-t[r],2);return Math.sqrt(a)}function normalize(t){return div(t,length(t))}function rgbToHsl(t){var e,r,i=t[0],a=t[1],s=t[2],n=Math.max(i,a,s),o=Math.min(i,a,s),h=(n+o)/2;if(n===o)e=0,r=0;else{var l=n-o;switch(r=h>.5?l/(2-n-o):l/(n+o),n){case i:e=(a-s)/l+(a<s?6:0);break;case a:e=(s-i)/l+2;break;case s:e=(i-a)/l+4}e/=6}return[e,r,h,t[3]]}function hue2rgb(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function hslToRgb(t){var e,r,i,a=t[0],s=t[1],n=t[2];if(0===s)e=n,i=n,r=n;else{var o=n<.5?n*(1+s):n+s-n*s,h=2*n-o;e=hue2rgb(h,o,a+1/3),r=hue2rgb(h,o,a),i=hue2rgb(h,o,a-1/3)}return[e,r,i,t[3]]}function linear(t,e,r,i,a){if(void 0!==i&&void 0!==a||(i=e,a=r,e=0,r=1),r<e){var s=r;r=e,e=s}if(t<=e)return i;if(t>=r)return a;var n,o=r===e?0:(t-e)/(r-e);if(!i.length)return i+(a-i)*o;var h=i.length,l=createTypedArray("float32",h);for(n=0;n<h;n+=1)l[n]=i[n]+(a[n]-i[n])*o;return l}function random(t,e){if(void 0===e&&(void 0===t?(t=0,e=1):(e=t,t=void 0)),e.length){var r,i=e.length;t||(t=createTypedArray("float32",i));var a=createTypedArray("float32",i),s=BMMath.random();for(r=0;r<i;r+=1)a[r]=t[r]+s*(e[r]-t[r]);return a}return void 0===t&&(t=0),t+BMMath.random()*(e-t)}function createPath(t,e,r,i){var a,s=t.length,n=shapePool.newElement();n.setPathData(!!i,s);var o,h,l=[0,0];for(a=0;a<s;a+=1)o=e&&e[a]?e[a]:l,h=r&&r[a]?r[a]:l,n.setTripleAt(t[a][0],t[a][1],h[0]+t[a][0],h[1]+t[a][1],o[0]+t[a][0],o[1]+t[a][1],a,!0);return n}function initiateExpression(elem,data,property){var val=data.x,needsVelocity=/velocity(?![\w\d])/.test(val),_needsRandom=-1!==val.indexOf("random"),elemType=elem.data.ty,transform,$bm_transform,content,effect,thisProperty=property;thisProperty.valueAtTime=thisProperty.getValueAtTime,Object.defineProperty(thisProperty,"value",{get:function(){return thisProperty.v}}),elem.comp.frameDuration=1/elem.comp.globalData.frameRate,elem.comp.displayStartTime=0;var inPoint=elem.data.ip/elem.comp.globalData.frameRate,outPoint=elem.data.op/elem.comp.globalData.frameRate,width=elem.data.sw?elem.data.sw:0,height=elem.data.sh?elem.data.sh:0,name=elem.data.nm,loopIn,loop_in,loopOut,loop_out,smooth,toWorld,fromWorld,fromComp,toComp,fromCompToSurface,position,rotation,anchorPoint,scale,thisLayer,thisComp,mask,valueAtTime,velocityAtTime,scoped_bm_rt,expression_function=eval("[function _expression_function(){"+val+";scoped_bm_rt=$bm_rt}]")[0],numKeys=property.kf?data.k.length:0,active=!this.data||!0!==this.data.hd,wiggle=function(t,e){var r,i,a=this.pv.length?this.pv.length:1,s=createTypedArray("float32",a);var n=Math.floor(5*time);for(r=0,i=0;r<n;){for(i=0;i<a;i+=1)s[i]+=-e+2*e*BMMath.random();r+=1}var o=5*time,h=o-Math.floor(o),l=createTypedArray("float32",a);if(a>1){for(i=0;i<a;i+=1)l[i]=this.pv[i]+s[i]+(-e+2*e*BMMath.random())*h;return l}return this.pv+s[0]+(-e+2*e*BMMath.random())*h}.bind(this);function loopInDuration(t,e){return loopIn(t,e,!0)}function loopOutDuration(t,e){return loopOut(t,e,!0)}thisProperty.loopIn&&(loopIn=thisProperty.loopIn.bind(thisProperty),loop_in=loopIn),thisProperty.loopOut&&(loopOut=thisProperty.loopOut.bind(thisProperty),loop_out=loopOut),thisProperty.smooth&&(smooth=thisProperty.smooth.bind(thisProperty)),this.getValueAtTime&&(valueAtTime=this.getValueAtTime.bind(this)),this.getVelocityAtTime&&(velocityAtTime=this.getVelocityAtTime.bind(this));var comp=elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),time,velocity,value,text,textIndex,textTotal,selectorValue;function lookAt(t,e){var r=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],i=Math.atan2(r[0],Math.sqrt(r[1]*r[1]+r[2]*r[2]))/degToRads;return[-Math.atan2(r[1],r[2])/degToRads,i,0]}function easeOut(t,e,r,i,a){return applyEase(easeOutBez,t,e,r,i,a)}function easeIn(t,e,r,i,a){return applyEase(easeInBez,t,e,r,i,a)}function ease(t,e,r,i,a){return applyEase(easeInOutBez,t,e,r,i,a)}function applyEase(t,e,r,i,a,s){void 0===a?(a=r,s=i):e=(e-r)/(i-r),e>1?e=1:e<0&&(e=0);var n=t(e);if($bm_isInstanceOfArray(a)){var o,h=a.length,l=createTypedArray("float32",h);for(o=0;o<h;o+=1)l[o]=(s[o]-a[o])*n+a[o];return l}return(s-a)*n+a}function nearestKey(t){var e,r,i,a=data.k.length;if(data.k.length&&"number"!=typeof data.k[0])if(r=-1,(t*=elem.comp.globalData.frameRate)<data.k[0].t)r=1,i=data.k[0].t;else{for(e=0;e<a-1;e+=1){if(t===data.k[e].t){r=e+1,i=data.k[e].t;break}if(t>data.k[e].t&&t<data.k[e+1].t){t-data.k[e].t>data.k[e+1].t-t?(r=e+2,i=data.k[e+1].t):(r=e+1,i=data.k[e].t);break}}-1===r&&(r=e+1,i=data.k[e].t)}else r=0,i=0;var s={};return s.index=r,s.time=i/elem.comp.globalData.frameRate,s}function key(t){var e,r,i;if(!data.k.length||"number"==typeof data.k[0])throw new Error("The property has no keyframe at index "+t);t-=1,e={time:data.k[t].t/elem.comp.globalData.frameRate,value:[]};var a=Object.prototype.hasOwnProperty.call(data.k[t],"s")?data.k[t].s:data.k[t-1].e;for(i=a.length,r=0;r<i;r+=1)e[r]=a[r],e.value[r]=a[r];return e}function framesToTime(t,e){return e||(e=elem.comp.globalData.frameRate),t/e}function timeToFrames(t,e){return t||0===t||(t=time),e||(e=elem.comp.globalData.frameRate),t*e}function seedRandom(t){BMMath.seedrandom(randSeed+t)}function sourceRectAtTime(){return elem.sourceRectAtTime()}function substring(t,e){return"string"==typeof value?void 0===e?value.substring(t):value.substring(t,e):""}function substr(t,e){return"string"==typeof value?void 0===e?value.substr(t):value.substr(t,e):""}function posterizeTime(t){time=0===t?0:Math.floor(time*t)/t,value=valueAtTime(time)}var index=elem.data.ind,hasParent=!(!elem.hierarchy||!elem.hierarchy.length),parent,randSeed=Math.floor(1e6*Math.random()),globalData=elem.globalData;function executeExpression(t){return value=t,_needsRandom&&seedRandom(randSeed),this.frameExpressionId===elem.globalData.frameId&&"textSelector"!==this.propType?value:("textSelector"===this.propType&&(textIndex=this.textIndex,textTotal=this.textTotal,selectorValue=this.selectorValue),thisLayer||(text=elem.layerInterface.text,thisLayer=elem.layerInterface,thisComp=elem.comp.compInterface,toWorld=thisLayer.toWorld.bind(thisLayer),fromWorld=thisLayer.fromWorld.bind(thisLayer),fromComp=thisLayer.fromComp.bind(thisLayer),toComp=thisLayer.toComp.bind(thisLayer),mask=thisLayer.mask?thisLayer.mask.bind(thisLayer):null,fromCompToSurface=fromComp),transform||(transform=elem.layerInterface("ADBE Transform Group"),$bm_transform=transform,transform&&(anchorPoint=transform.anchorPoint)),4!==elemType||content||(content=thisLayer("ADBE Root Vectors Group")),effect||(effect=thisLayer(4)),(hasParent=!(!elem.hierarchy||!elem.hierarchy.length))&&!parent&&(parent=elem.hierarchy[0].layerInterface),time=this.comp.renderedFrame/this.comp.globalData.frameRate,needsVelocity&&(velocity=velocityAtTime(time)),expression_function(),this.frameExpressionId=elem.globalData.frameId,"shape"===scoped_bm_rt.propType&&(scoped_bm_rt=scoped_bm_rt.v),scoped_bm_rt)}return executeExpression}return ob.initiateExpression=initiateExpression,ob}(),expressionHelpers={searchExpressions:function(t,e,r){e.x&&(r.k=!0,r.x=!0,r.initiateExpression=ExpressionManager.initiateExpression,r.effectsSequence.push(r.initiateExpression(t,e,r).bind(r)))},getSpeedAtTime:function(t){var e=this.getValueAtTime(t),r=this.getValueAtTime(t+-.01),i=0;if(e.length){var a;for(a=0;a<e.length;a+=1)i+=Math.pow(r[a]-e[a],2);i=100*Math.sqrt(i)}else i=0;return i},getVelocityAtTime:function(t){if(void 0!==this.vel)return this.vel;var e,r,i=this.getValueAtTime(t),a=this.getValueAtTime(t+-.001);if(i.length)for(e=createTypedArray("float32",i.length),r=0;r<i.length;r+=1)e[r]=(a[r]-i[r])/-.001;else e=(a-i)/-.001;return e},getValueAtTime:function(t){return t*=this.elem.globalData.frameRate,(t-=this.offsetTime)!==this._cachingAtTime.lastFrame&&(this._cachingAtTime.lastIndex=this._cachingAtTime.lastFrame<t?this._cachingAtTime.lastIndex:0,this._cachingAtTime.value=this.interpolateValue(t,this._cachingAtTime),this._cachingAtTime.lastFrame=t),this._cachingAtTime.value},getStaticValueAtTime:function(){return this.pv},setGroupProperty:function(t){this.propertyGroup=t}};!function(){function t(t,e,r){if(!this.k||!this.keyframes)return this.pv;t=t?t.toLowerCase():"";var i,a,s,n,o,h=this.comp.renderedFrame,l=this.keyframes,p=l[l.length-1].t;if(h<=p)return this.pv;if(r?a=p-(i=e?Math.abs(p-this.elem.comp.globalData.frameRate*e):Math.max(0,p-this.elem.data.ip)):((!e||e>l.length-1)&&(e=l.length-1),i=p-(a=l[l.length-1-e].t)),"pingpong"===t){if(Math.floor((h-a)/i)%2!=0)return this.getValueAtTime((i-(h-a)%i+a)/this.comp.globalData.frameRate,0)}else{if("offset"===t){var f=this.getValueAtTime(a/this.comp.globalData.frameRate,0),c=this.getValueAtTime(p/this.comp.globalData.frameRate,0),m=this.getValueAtTime(((h-a)%i+a)/this.comp.globalData.frameRate,0),d=Math.floor((h-a)/i);if(this.pv.length){for(n=(o=new Array(f.length)).length,s=0;s<n;s+=1)o[s]=(c[s]-f[s])*d+m[s];return o}return(c-f)*d+m}if("continue"===t){var u=this.getValueAtTime(p/this.comp.globalData.frameRate,0),y=this.getValueAtTime((p-.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(n=(o=new Array(u.length)).length,s=0;s<n;s+=1)o[s]=u[s]+(u[s]-y[s])*((h-p)/this.comp.globalData.frameRate)/5e-4;return o}return u+(h-p)/.001*(u-y)}}return this.getValueAtTime(((h-a)%i+a)/this.comp.globalData.frameRate,0)}function e(t,e,r){if(!this.k)return this.pv;t=t?t.toLowerCase():"";var i,a,s,n,o,h=this.comp.renderedFrame,l=this.keyframes,p=l[0].t;if(h>=p)return this.pv;if(r?a=p+(i=e?Math.abs(this.elem.comp.globalData.frameRate*e):Math.max(0,this.elem.data.op-p)):((!e||e>l.length-1)&&(e=l.length-1),i=(a=l[e].t)-p),"pingpong"===t){if(Math.floor((p-h)/i)%2==0)return this.getValueAtTime(((p-h)%i+p)/this.comp.globalData.frameRate,0)}else{if("offset"===t){var f=this.getValueAtTime(p/this.comp.globalData.frameRate,0),c=this.getValueAtTime(a/this.comp.globalData.frameRate,0),m=this.getValueAtTime((i-(p-h)%i+p)/this.comp.globalData.frameRate,0),d=Math.floor((p-h)/i)+1;if(this.pv.length){for(n=(o=new Array(f.length)).length,s=0;s<n;s+=1)o[s]=m[s]-(c[s]-f[s])*d;return o}return m-(c-f)*d}if("continue"===t){var u=this.getValueAtTime(p/this.comp.globalData.frameRate,0),y=this.getValueAtTime((p+.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(n=(o=new Array(u.length)).length,s=0;s<n;s+=1)o[s]=u[s]+(u[s]-y[s])*(p-h)/.001;return o}return u+(u-y)*(p-h)/.001}}return this.getValueAtTime((i-((p-h)%i+p))/this.comp.globalData.frameRate,0)}function r(t,e){if(!this.k)return this.pv;if(t=.5*(t||.4),(e=Math.floor(e||5))<=1)return this.pv;var r,i,a=this.comp.renderedFrame/this.comp.globalData.frameRate,s=a-t,n=e>1?(a+t-s)/(e-1):1,o=0,h=0;for(r=this.pv.length?createTypedArray("float32",this.pv.length):0;o<e;){if(i=this.getValueAtTime(s+o*n),this.pv.length)for(h=0;h<this.pv.length;h+=1)r[h]+=i[h];else r+=i;o+=1}if(this.pv.length)for(h=0;h<this.pv.length;h+=1)r[h]/=e;else r/=e;return r}function i(t){this._transformCachingAtTime||(this._transformCachingAtTime={v:new Matrix});var e=this._transformCachingAtTime.v;if(e.cloneFromProps(this.pre.props),this.appliedTransformations<1){var r=this.a.getValueAtTime(t);e.translate(-r[0]*this.a.mult,-r[1]*this.a.mult,r[2]*this.a.mult)}if(this.appliedTransformations<2){var i=this.s.getValueAtTime(t);e.scale(i[0]*this.s.mult,i[1]*this.s.mult,i[2]*this.s.mult)}if(this.sk&&this.appliedTransformations<3){var a=this.sk.getValueAtTime(t),s=this.sa.getValueAtTime(t);e.skewFromAxis(-a*this.sk.mult,s*this.sa.mult)}if(this.r&&this.appliedTransformations<4){var n=this.r.getValueAtTime(t);e.rotate(-n*this.r.mult)}else if(!this.r&&this.appliedTransformations<4){var o=this.rz.getValueAtTime(t),h=this.ry.getValueAtTime(t),l=this.rx.getValueAtTime(t),p=this.or.getValueAtTime(t);e.rotateZ(-o*this.rz.mult).rotateY(h*this.ry.mult).rotateX(l*this.rx.mult).rotateZ(-p[2]*this.or.mult).rotateY(p[1]*this.or.mult).rotateX(p[0]*this.or.mult)}if(this.data.p&&this.data.p.s){var f=this.px.getValueAtTime(t),c=this.py.getValueAtTime(t);if(this.data.p.z){var m=this.pz.getValueAtTime(t);e.translate(f*this.px.mult,c*this.py.mult,-m*this.pz.mult)}else e.translate(f*this.px.mult,c*this.py.mult,0)}else{var d=this.p.getValueAtTime(t);e.translate(d[0]*this.p.mult,d[1]*this.p.mult,-d[2]*this.p.mult)}return e}function a(){return this.v.clone(new Matrix)}var s=TransformPropertyFactory.getTransformProperty;TransformPropertyFactory.getTransformProperty=function(t,e,r){var n=s(t,e,r);return n.dynamicProperties.length?n.getValueAtTime=i.bind(n):n.getValueAtTime=a.bind(n),n.setGroupProperty=expressionHelpers.setGroupProperty,n};var n=PropertyFactory.getProp;PropertyFactory.getProp=function(i,a,s,o,h){var l=n(i,a,s,o,h);l.kf?l.getValueAtTime=expressionHelpers.getValueAtTime.bind(l):l.getValueAtTime=expressionHelpers.getStaticValueAtTime.bind(l),l.setGroupProperty=expressionHelpers.setGroupProperty,l.loopOut=t,l.loopIn=e,l.smooth=r,l.getVelocityAtTime=expressionHelpers.getVelocityAtTime.bind(l),l.getSpeedAtTime=expressionHelpers.getSpeedAtTime.bind(l),l.numKeys=1===a.a?a.k.length:0,l.propertyIndex=a.ix;var p=0;return 0!==s&&(p=createTypedArray("float32",1===a.a?a.k[0].s.length:a.k.length)),l._cachingAtTime={lastFrame:initialDefaultFrame,lastIndex:0,value:p},expressionHelpers.searchExpressions(i,a,l),l.k&&h.addDynamicProperty(l),l};var o=ShapePropertyFactory.getConstructorFunction(),h=ShapePropertyFactory.getKeyframedConstructorFunction();function l(){}l.prototype={vertices:function(t,e){this.k&&this.getValue();var r,i=this.v;void 0!==e&&(i=this.getValueAtTime(e,0));var a=i._length,s=i[t],n=i.v,o=createSizedArray(a);for(r=0;r<a;r+=1)o[r]="i"===t||"o"===t?[s[r][0]-n[r][0],s[r][1]-n[r][1]]:[s[r][0],s[r][1]];return o},points:function(t){return this.vertices("v",t)},inTangents:function(t){return this.vertices("i",t)},outTangents:function(t){return this.vertices("o",t)},isClosed:function(){return this.v.c},pointOnPath:function(t,e){var r=this.v;void 0!==e&&(r=this.getValueAtTime(e,0)),this._segmentsLength||(this._segmentsLength=bez.getSegmentsLength(r));for(var i,a=this._segmentsLength,s=a.lengths,n=a.totalLength*t,o=0,h=s.length,l=0;o<h;){if(l+s[o].addedLength>n){var p=o,f=r.c&&o===h-1?0:o+1,c=(n-l)/s[o].addedLength;i=bez.getPointInSegment(r.v[p],r.v[f],r.o[p],r.i[f],c,s[o]);break}l+=s[o].addedLength,o+=1}return i||(i=r.c?[r.v[0][0],r.v[0][1]]:[r.v[r._length-1][0],r.v[r._length-1][1]]),i},vectorOnPath:function(t,e,r){1==t?t=this.v.c:0==t&&(t=.999);var i=this.pointOnPath(t,e),a=this.pointOnPath(t+.001,e),s=a[0]-i[0],n=a[1]-i[1],o=Math.sqrt(Math.pow(s,2)+Math.pow(n,2));return 0===o?[0,0]:"tangent"===r?[s/o,n/o]:[-n/o,s/o]},tangentOnPath:function(t,e){return this.vectorOnPath(t,e,"tangent")},normalOnPath:function(t,e){return this.vectorOnPath(t,e,"normal")},setGroupProperty:expressionHelpers.setGroupProperty,getValueAtTime:expressionHelpers.getStaticValueAtTime},extendPrototype([l],o),extendPrototype([l],h),h.prototype.getValueAtTime=function(t){return this._cachingAtTime||(this._cachingAtTime={shapeValue:shapePool.clone(this.pv),lastIndex:0,lastTime:initialDefaultFrame}),t*=this.elem.globalData.frameRate,(t-=this.offsetTime)!==this._cachingAtTime.lastTime&&(this._cachingAtTime.lastIndex=this._cachingAtTime.lastTime<t?this._caching.lastIndex:0,this._cachingAtTime.lastTime=t,this.interpolateShape(t,this._cachingAtTime.shapeValue,this._cachingAtTime)),this._cachingAtTime.shapeValue},h.prototype.initiateExpression=ExpressionManager.initiateExpression;var p=ShapePropertyFactory.getShapeProp;ShapePropertyFactory.getShapeProp=function(t,e,r,i,a){var s=p(t,e,r,i,a);return s.propertyIndex=e.ix,s.lock=!1,3===r?expressionHelpers.searchExpressions(t,e.pt,s):4===r&&expressionHelpers.searchExpressions(t,e.ks,s),s.k&&t.addDynamicProperty(s),s}}(),TextProperty.prototype.getExpressionValue=function(t,e){var r=this.calculateExpression(e);if(t.t!==r){var i={};return this.copyData(i,t),i.t=r.toString(),i.__complete=!1,i}return t},TextProperty.prototype.searchProperty=function(){var t=this.searchKeyframes(),e=this.searchExpressions();return this.kf=t||e,this.kf},TextProperty.prototype.searchExpressions=function(){return this.data.d.x?(this.calculateExpression=ExpressionManager.initiateExpression.bind(this)(this.elem,this.data.d,this),this.addEffect(this.getExpressionValue.bind(this)),!0):null};var ShapePathInterface=function(t,e,r){var i=e.sh;function a(t){return"Shape"===t||"shape"===t||"Path"===t||"path"===t||"ADBE Vector Shape"===t||2===t?a.path:null}var s=propertyGroupFactory(a,r);return i.setGroupProperty(PropertyInterface("Path",s)),Object.defineProperties(a,{path:{get:function(){return i.k&&i.getValue(),i}},shape:{get:function(){return i.k&&i.getValue(),i}},_name:{value:t.nm},ix:{value:t.ix},propertyIndex:{value:t.ix},mn:{value:t.mn},propertyGroup:{value:r}}),a},propertyGroupFactory=function(t,e){return function(r){return(r=void 0===r?1:r)<=0?t:e(r-1)}},PropertyInterface=function(t,e){var r={_name:t};return function(t){return(t=void 0===t?1:t)<=0?r:e(t-1)}},ShapeExpressionInterface=function(){function t(t,s,f){var c,m=[],d=t?t.length:0;for(c=0;c<d;c+=1)"gr"===t[c].ty?m.push(e(t[c],s[c],f)):"fl"===t[c].ty?m.push(r(t[c],s[c],f)):"st"===t[c].ty?m.push(i(t[c],s[c],f)):"tm"===t[c].ty?m.push(a(t[c],s[c],f)):"tr"===t[c].ty||("el"===t[c].ty?m.push(n(t[c],s[c],f)):"sr"===t[c].ty?m.push(o(t[c],s[c],f)):"sh"===t[c].ty?m.push(ShapePathInterface(t[c],s[c],f)):"rc"===t[c].ty?m.push(h(t[c],s[c],f)):"rd"===t[c].ty?m.push(l(t[c],s[c],f)):"rp"===t[c].ty&&m.push(p(t[c],s[c],f)));return m}function e(e,r,i){var a=function(t){switch(t){case"ADBE Vectors Group":case"Contents":case 2:return a.content;default:return a.transform}};a.propertyGroup=propertyGroupFactory(a,i);var n=function(e,r,i){var a,n=function(t){for(var e=0,r=a.length;e<r;){if(a[e]._name===t||a[e].mn===t||a[e].propertyIndex===t||a[e].ix===t||a[e].ind===t)return a[e];e+=1}return"number"==typeof t?a[t-1]:null};n.propertyGroup=propertyGroupFactory(n,i),a=t(e.it,r.it,n.propertyGroup),n.numProperties=a.length;var o=s(e.it[e.it.length-1],r.it[r.it.length-1],n.propertyGroup);return n.transform=o,n.propertyIndex=e.cix,n._name=e.nm,n}(e,r,a.propertyGroup),o=s(e.it[e.it.length-1],r.it[r.it.length-1],a.propertyGroup);return a.content=n,a.transform=o,Object.defineProperty(a,"_name",{get:function(){return e.nm}}),a.numProperties=e.np,a.propertyIndex=e.ix,a.nm=e.nm,a.mn=e.mn,a}function r(t,e,r){function i(t){return"Color"===t||"color"===t?i.color:"Opacity"===t||"opacity"===t?i.opacity:null}return Object.defineProperties(i,{color:{get:ExpressionPropertyInterface(e.c)},opacity:{get:ExpressionPropertyInterface(e.o)},_name:{value:t.nm},mn:{value:t.mn}}),e.c.setGroupProperty(PropertyInterface("Color",r)),e.o.setGroupProperty(PropertyInterface("Opacity",r)),i}function i(t,e,r){var i,a=propertyGroupFactory(l,r),s=propertyGroupFactory(h,a);function n(r){Object.defineProperty(h,t.d[r].nm,{get:ExpressionPropertyInterface(e.d.dataProps[r].p)})}var o=t.d?t.d.length:0,h={};for(i=0;i<o;i+=1)n(i),e.d.dataProps[i].p.setGroupProperty(s);function l(t){return"Color"===t||"color"===t?l.color:"Opacity"===t||"opacity"===t?l.opacity:"Stroke Width"===t||"stroke width"===t?l.strokeWidth:null}return Object.defineProperties(l,{color:{get:ExpressionPropertyInterface(e.c)},opacity:{get:ExpressionPropertyInterface(e.o)},strokeWidth:{get:ExpressionPropertyInterface(e.w)},dash:{get:function(){return h}},_name:{value:t.nm},mn:{value:t.mn}}),e.c.setGroupProperty(PropertyInterface("Color",a)),e.o.setGroupProperty(PropertyInterface("Opacity",a)),e.w.setGroupProperty(PropertyInterface("Stroke Width",a)),l}function a(t,e,r){function i(e){return e===t.e.ix||"End"===e||"end"===e?i.end:e===t.s.ix?i.start:e===t.o.ix?i.offset:null}var a=propertyGroupFactory(i,r);return i.propertyIndex=t.ix,e.s.setGroupProperty(PropertyInterface("Start",a)),e.e.setGroupProperty(PropertyInterface("End",a)),e.o.setGroupProperty(PropertyInterface("Offset",a)),i.propertyIndex=t.ix,i.propertyGroup=r,Object.defineProperties(i,{start:{get:ExpressionPropertyInterface(e.s)},end:{get:ExpressionPropertyInterface(e.e)},offset:{get:ExpressionPropertyInterface(e.o)},_name:{value:t.nm}}),i.mn=t.mn,i}function s(t,e,r){function i(e){return t.a.ix===e||"Anchor Point"===e?i.anchorPoint:t.o.ix===e||"Opacity"===e?i.opacity:t.p.ix===e||"Position"===e?i.position:t.r.ix===e||"Rotation"===e||"ADBE Vector Rotation"===e?i.rotation:t.s.ix===e||"Scale"===e?i.scale:t.sk&&t.sk.ix===e||"Skew"===e?i.skew:t.sa&&t.sa.ix===e||"Skew Axis"===e?i.skewAxis:null}var a=propertyGroupFactory(i,r);return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity",a)),e.transform.mProps.p.setGroupProperty(PropertyInterface("Position",a)),e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point",a)),e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale",a)),e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation",a)),e.transform.mProps.sk&&(e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew",a)),e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle",a))),e.transform.op.setGroupProperty(PropertyInterface("Opacity",a)),Object.defineProperties(i,{opacity:{get:ExpressionPropertyInterface(e.transform.mProps.o)},position:{get:ExpressionPropertyInterface(e.transform.mProps.p)},anchorPoint:{get:ExpressionPropertyInterface(e.transform.mProps.a)},scale:{get:ExpressionPropertyInterface(e.transform.mProps.s)},rotation:{get:ExpressionPropertyInterface(e.transform.mProps.r)},skew:{get:ExpressionPropertyInterface(e.transform.mProps.sk)},skewAxis:{get:ExpressionPropertyInterface(e.transform.mProps.sa)},_name:{value:t.nm}}),i.ty="tr",i.mn=t.mn,i.propertyGroup=r,i}function n(t,e,r){function i(e){return t.p.ix===e?i.position:t.s.ix===e?i.size:null}var a=propertyGroupFactory(i,r);i.propertyIndex=t.ix;var s="tm"===e.sh.ty?e.sh.prop:e.sh;return s.s.setGroupProperty(PropertyInterface("Size",a)),s.p.setGroupProperty(PropertyInterface("Position",a)),Object.defineProperties(i,{size:{get:ExpressionPropertyInterface(s.s)},position:{get:ExpressionPropertyInterface(s.p)},_name:{value:t.nm}}),i.mn=t.mn,i}function o(t,e,r){function i(e){return t.p.ix===e?i.position:t.r.ix===e?i.rotation:t.pt.ix===e?i.points:t.or.ix===e||"ADBE Vector Star Outer Radius"===e?i.outerRadius:t.os.ix===e?i.outerRoundness:!t.ir||t.ir.ix!==e&&"ADBE Vector Star Inner Radius"!==e?t.is&&t.is.ix===e?i.innerRoundness:null:i.innerRadius}var a=propertyGroupFactory(i,r),s="tm"===e.sh.ty?e.sh.prop:e.sh;return i.propertyIndex=t.ix,s.or.setGroupProperty(PropertyInterface("Outer Radius",a)),s.os.setGroupProperty(PropertyInterface("Outer Roundness",a)),s.pt.setGroupProperty(PropertyInterface("Points",a)),s.p.setGroupProperty(PropertyInterface("Position",a)),s.r.setGroupProperty(PropertyInterface("Rotation",a)),t.ir&&(s.ir.setGroupProperty(PropertyInterface("Inner Radius",a)),s.is.setGroupProperty(PropertyInterface("Inner Roundness",a))),Object.defineProperties(i,{position:{get:ExpressionPropertyInterface(s.p)},rotation:{get:ExpressionPropertyInterface(s.r)},points:{get:ExpressionPropertyInterface(s.pt)},outerRadius:{get:ExpressionPropertyInterface(s.or)},outerRoundness:{get:ExpressionPropertyInterface(s.os)},innerRadius:{get:ExpressionPropertyInterface(s.ir)},innerRoundness:{get:ExpressionPropertyInterface(s.is)},_name:{value:t.nm}}),i.mn=t.mn,i}function h(t,e,r){function i(e){return t.p.ix===e?i.position:t.r.ix===e?i.roundness:t.s.ix===e||"Size"===e||"ADBE Vector Rect Size"===e?i.size:null}var a=propertyGroupFactory(i,r),s="tm"===e.sh.ty?e.sh.prop:e.sh;return i.propertyIndex=t.ix,s.p.setGroupProperty(PropertyInterface("Position",a)),s.s.setGroupProperty(PropertyInterface("Size",a)),s.r.setGroupProperty(PropertyInterface("Rotation",a)),Object.defineProperties(i,{position:{get:ExpressionPropertyInterface(s.p)},roundness:{get:ExpressionPropertyInterface(s.r)},size:{get:ExpressionPropertyInterface(s.s)},_name:{value:t.nm}}),i.mn=t.mn,i}function l(t,e,r){function i(e){return t.r.ix===e||"Round Corners 1"===e?i.radius:null}var a=propertyGroupFactory(i,r),s=e;return i.propertyIndex=t.ix,s.rd.setGroupProperty(PropertyInterface("Radius",a)),Object.defineProperties(i,{radius:{get:ExpressionPropertyInterface(s.rd)},_name:{value:t.nm}}),i.mn=t.mn,i}function p(t,e,r){function i(e){return t.c.ix===e||"Copies"===e?i.copies:t.o.ix===e||"Offset"===e?i.offset:null}var a=propertyGroupFactory(i,r),s=e;return i.propertyIndex=t.ix,s.c.setGroupProperty(PropertyInterface("Copies",a)),s.o.setGroupProperty(PropertyInterface("Offset",a)),Object.defineProperties(i,{copies:{get:ExpressionPropertyInterface(s.c)},offset:{get:ExpressionPropertyInterface(s.o)},_name:{value:t.nm}}),i.mn=t.mn,i}return function(e,r,i){var a;function s(t){if("number"==typeof t)return 0===(t=void 0===t?1:t)?i:a[t-1];for(var e=0,r=a.length;e<r;){if(a[e]._name===t)return a[e];e+=1}return null}return s.propertyGroup=propertyGroupFactory(s,(function(){return i})),a=t(e,r,s.propertyGroup),s.numProperties=a.length,s._name="Contents",s}}(),TextExpressionInterface=function(t){var e;function r(t){switch(t){case"ADBE Text Document":return r.sourceText;default:return null}}return Object.defineProperty(r,"sourceText",{get:function(){t.textProperty.getValue();var r=t.textProperty.currentData.t;return void 0!==r&&(t.textProperty.currentData.t=void 0,(e=new String(r)).value=r||new String(r)),e}}),r},LayerExpressionInterface=function(){function t(t){var e=new Matrix;void 0!==t?this._elem.finalTransform.mProp.getValueAtTime(t).clone(e):this._elem.finalTransform.mProp.applyToMatrix(e);return e}function e(t,e){var r=this.getMatrix(e);return r.props[12]=0,r.props[13]=0,r.props[14]=0,this.applyPoint(r,t)}function r(t,e){var r=this.getMatrix(e);return this.applyPoint(r,t)}function i(t,e){var r=this.getMatrix(e);return r.props[12]=0,r.props[13]=0,r.props[14]=0,this.invertPoint(r,t)}function a(t,e){var r=this.getMatrix(e);return this.invertPoint(r,t)}function s(t,e){if(this._elem.hierarchy&&this._elem.hierarchy.length){var r,i=this._elem.hierarchy.length;for(r=0;r<i;r+=1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)}return t.applyToPointArray(e[0],e[1],e[2]||0)}function n(t,e){if(this._elem.hierarchy&&this._elem.hierarchy.length){var r,i=this._elem.hierarchy.length;for(r=0;r<i;r+=1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)}return t.inversePoint(e)}function o(t){var e=new Matrix;if(e.reset(),this._elem.finalTransform.mProp.applyToMatrix(e),this._elem.hierarchy&&this._elem.hierarchy.length){var r,i=this._elem.hierarchy.length;for(r=0;r<i;r+=1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);return e.inversePoint(t)}return e.inversePoint(t)}function h(){return[1,1,1,1]}return function(l){var p;function f(t){switch(t){case"ADBE Root Vectors Group":case"Contents":case 2:return f.shapeInterface;case 1:case 6:case"Transform":case"transform":case"ADBE Transform Group":return p;case 4:case"ADBE Effect Parade":case"effects":case"Effects":return f.effect;case"ADBE Text Properties":return f.textInterface;default:return null}}f.getMatrix=t,f.invertPoint=n,f.applyPoint=s,f.toWorld=r,f.toWorldVec=e,f.fromWorld=a,f.fromWorldVec=i,f.toComp=r,f.fromComp=o,f.sampleImage=h,f.sourceRectAtTime=l.sourceRectAtTime.bind(l),f._elem=l;var c=getDescriptor(p=TransformExpressionInterface(l.finalTransform.mProp),"anchorPoint");return Object.defineProperties(f,{hasParent:{get:function(){return l.hierarchy.length}},parent:{get:function(){return l.hierarchy[0].layerInterface}},rotation:getDescriptor(p,"rotation"),scale:getDescriptor(p,"scale"),position:getDescriptor(p,"position"),opacity:getDescriptor(p,"opacity"),anchorPoint:c,anchor_point:c,transform:{get:function(){return p}},active:{get:function(){return l.isInRange}}}),f.startTime=l.data.st,f.index=l.data.ind,f.source=l.data.refId,f.height=0===l.data.ty?l.data.h:100,f.width=0===l.data.ty?l.data.w:100,f.inPoint=l.data.ip/l.comp.globalData.frameRate,f.outPoint=l.data.op/l.comp.globalData.frameRate,f._name=l.data.nm,f.registerMaskInterface=function(t){f.mask=new MaskManagerInterface(t,l)},f.registerEffectsInterface=function(t){f.effect=t},f}}(),FootageInterface=(dataInterfaceFactory=function(t){function e(t){return"Outline"===t?e.outlineInterface():null}return e._name="Outline",e.outlineInterface=function(t){var e="",r=t.getFootageData();function i(t){if(r[t])return e=t,"object"==typeof(r=r[t])?i:r;var a=t.indexOf(e);if(-1!==a){var s=parseInt(t.substr(a+e.length),10);return"object"==typeof(r=r[s])?i:r}return""}return function(){return e="",r=t.getFootageData(),i}}(t),e},function(t){function e(t){return"Data"===t?e.dataInterface:null}return e._name="Data",e.dataInterface=dataInterfaceFactory(t),e}),dataInterfaceFactory,CompExpressionInterface=function(t){function e(e){for(var r=0,i=t.layers.length;r<i;){if(t.layers[r].nm===e||t.layers[r].ind===e)return t.elements[r].layerInterface;r+=1}return null}return Object.defineProperty(e,"_name",{value:t.data.nm}),e.layer=e,e.pixelAspect=1,e.height=t.data.h||t.globalData.compSize.h,e.width=t.data.w||t.globalData.compSize.w,e.pixelAspect=1,e.frameDuration=1/t.globalData.frameRate,e.displayStartTime=0,e.numLayers=t.layers.length,e},TransformExpressionInterface=function(t){function e(t){switch(t){case"scale":case"Scale":case"ADBE Scale":case 6:return e.scale;case"rotation":case"Rotation":case"ADBE Rotation":case"ADBE Rotate Z":case 10:return e.rotation;case"ADBE Rotate X":return e.xRotation;case"ADBE Rotate Y":return e.yRotation;case"position":case"Position":case"ADBE Position":case 2:return e.position;case"ADBE Position_0":return e.xPosition;case"ADBE Position_1":return e.yPosition;case"ADBE Position_2":return e.zPosition;case"anchorPoint":case"AnchorPoint":case"Anchor Point":case"ADBE AnchorPoint":case 1:return e.anchorPoint;case"opacity":case"Opacity":case 11:return e.opacity;default:return null}}var r,i,a,s;return Object.defineProperty(e,"rotation",{get:ExpressionPropertyInterface(t.r||t.rz)}),Object.defineProperty(e,"zRotation",{get:ExpressionPropertyInterface(t.rz||t.r)}),Object.defineProperty(e,"xRotation",{get:ExpressionPropertyInterface(t.rx)}),Object.defineProperty(e,"yRotation",{get:ExpressionPropertyInterface(t.ry)}),Object.defineProperty(e,"scale",{get:ExpressionPropertyInterface(t.s)}),t.p?s=ExpressionPropertyInterface(t.p):(r=ExpressionPropertyInterface(t.px),i=ExpressionPropertyInterface(t.py),t.pz&&(a=ExpressionPropertyInterface(t.pz))),Object.defineProperty(e,"position",{get:function(){return t.p?s():[r(),i(),a?a():0]}}),Object.defineProperty(e,"xPosition",{get:ExpressionPropertyInterface(t.px)}),Object.defineProperty(e,"yPosition",{get:ExpressionPropertyInterface(t.py)}),Object.defineProperty(e,"zPosition",{get:ExpressionPropertyInterface(t.pz)}),Object.defineProperty(e,"anchorPoint",{get:ExpressionPropertyInterface(t.a)}),Object.defineProperty(e,"opacity",{get:ExpressionPropertyInterface(t.o)}),Object.defineProperty(e,"skew",{get:ExpressionPropertyInterface(t.sk)}),Object.defineProperty(e,"skewAxis",{get:ExpressionPropertyInterface(t.sa)}),Object.defineProperty(e,"orientation",{get:ExpressionPropertyInterface(t.or)}),e},ProjectInterface=function(){function t(t){this.compositions.push(t)}return function(){function e(t){for(var e=0,r=this.compositions.length;e<r;){if(this.compositions[e].data&&this.compositions[e].data.nm===t)return this.compositions[e].prepareFrame&&this.compositions[e].data.xt&&this.compositions[e].prepareFrame(this.currentFrame),this.compositions[e].compInterface;e+=1}return null}return e.compositions=[],e.currentFrame=0,e.registerComposition=t,e}}(),EffectsExpressionInterface=function(){function t(r,i,a,s){function n(t){for(var e=r.ef,i=0,a=e.length;i<a;){if(t===e[i].nm||t===e[i].mn||t===e[i].ix)return 5===e[i].ty?l[i]:l[i]();i+=1}throw new Error}var o,h=propertyGroupFactory(n,a),l=[],p=r.ef.length;for(o=0;o<p;o+=1)5===r.ef[o].ty?l.push(t(r.ef[o],i.effectElements[o],i.effectElements[o].propertyGroup,s)):l.push(e(i.effectElements[o],r.ef[o].ty,s,h));return"ADBE Color Control"===r.mn&&Object.defineProperty(n,"color",{get:function(){return l[0]()}}),Object.defineProperties(n,{numProperties:{get:function(){return r.np}},_name:{value:r.nm},propertyGroup:{value:h}}),n.enabled=0!==r.en,n.active=n.enabled,n}function e(t,e,r,i){var a=ExpressionPropertyInterface(t.p);return t.p.setGroupProperty&&t.p.setGroupProperty(PropertyInterface("",i)),function(){return 10===e?r.comp.compInterface(t.p.v):a()}}return{createEffectsInterface:function(e,r){if(e.effectsManager){var i,a=[],s=e.data.ef,n=e.effectsManager.effectElements.length;for(i=0;i<n;i+=1)a.push(t(s[i],e.effectsManager.effectElements[i],r,e));var o=e.data.ef||[],h=function(t){for(i=0,n=o.length;i<n;){if(t===o[i].nm||t===o[i].mn||t===o[i].ix)return a[i];i+=1}return null};return Object.defineProperty(h,"numProperties",{get:function(){return o.length}}),h}return null}}}(),MaskManagerInterface=function(){function t(t,e){this._mask=t,this._data=e}Object.defineProperty(t.prototype,"maskPath",{get:function(){return this._mask.prop.k&&this._mask.prop.getValue(),this._mask.prop}}),Object.defineProperty(t.prototype,"maskOpacity",{get:function(){return this._mask.op.k&&this._mask.op.getValue(),100*this._mask.op.v}});return function(e){var r,i=createSizedArray(e.viewData.length),a=e.viewData.length;for(r=0;r<a;r+=1)i[r]=new t(e.viewData[r],e.masksProperties[r]);return function(t){for(r=0;r<a;){if(e.masksProperties[r].nm===t)return i[r];r+=1}return null}}}(),ExpressionPropertyInterface=function(){var t={pv:0,v:0,mult:1},e={pv:[0,0,0],v:[0,0,0],mult:1};function r(t,e,r){Object.defineProperty(t,"velocity",{get:function(){return e.getVelocityAtTime(e.comp.currentFrame)}}),t.numKeys=e.keyframes?e.keyframes.length:0,t.key=function(i){if(!t.numKeys)return 0;var a="";a="s"in e.keyframes[i-1]?e.keyframes[i-1].s:"e"in e.keyframes[i-2]?e.keyframes[i-2].e:e.keyframes[i-2].s;var s="unidimensional"===r?new Number(a):Object.assign({},a);return s.time=e.keyframes[i-1].t/e.elem.comp.globalData.frameRate,s.value="unidimensional"===r?a[0]:a,s},t.valueAtTime=e.getValueAtTime,t.speedAtTime=e.getSpeedAtTime,t.velocityAtTime=e.getVelocityAtTime,t.propertyGroup=e.propertyGroup}function i(){return t}return function(a){return a?"unidimensional"===a.propType?function(e){e&&"pv"in e||(e=t);var i=1/e.mult,a=e.pv*i,s=new Number(a);return s.value=a,r(s,e,"unidimensional"),function(){return e.k&&e.getValue(),a=e.v*i,s.value!==a&&((s=new Number(a)).value=a,r(s,e,"unidimensional")),s}}(a):function(t){t&&"pv"in t||(t=e);var i=1/t.mult,a=t.data&&t.data.l||t.pv.length,s=createTypedArray("float32",a),n=createTypedArray("float32",a);return s.value=n,r(s,t,"multidimensional"),function(){t.k&&t.getValue();for(var e=0;e<a;e+=1)n[e]=t.v[e]*i,s[e]=n[e];return s}}(a):i}}();function SliderEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function AngleEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function ColorEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,1,0,r)}function PointEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,1,0,r)}function LayerIndexEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function MaskIndexEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function CheckboxEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function NoValueEffect(){this.p={}}function EffectsManager(t,e){var r,i=t.ef||[];this.effectElements=[];var a,s=i.length;for(r=0;r<s;r+=1)a=new GroupEffect(i[r],e),this.effectElements.push(a)}function GroupEffect(t,e){this.init(t,e)}!function(){!function(){function t(t,e){return this.textIndex=t+1,this.textTotal=e,this.v=this.getValue()*this.mult,this.v}}();var t=TextSelectorProp.getTextSelectorProp;TextSelectorProp.getTextSelectorProp=function(e,r,i){return 1===r.t?new TextExpressionSelectorPropFactory(e,r,i):t(e,r,i)}}(),extendPrototype([DynamicPropertyContainer],GroupEffect),GroupEffect.prototype.getValue=GroupEffect.prototype.iterateDynamicProperties,GroupEffect.prototype.init=function(t,e){var r;this.data=t,this.effectElements=[],this.initDynamicPropertyContainer(e);var i,a=this.data.ef.length,s=this.data.ef;for(r=0;r<a;r+=1){switch(i=null,s[r].ty){case 0:i=new SliderEffect(s[r],e,this);break;case 1:i=new AngleEffect(s[r],e,this);break;case 2:i=new ColorEffect(s[r],e,this);break;case 3:i=new PointEffect(s[r],e,this);break;case 4:case 7:i=new CheckboxEffect(s[r],e,this);break;case 10:i=new LayerIndexEffect(s[r],e,this);break;case 11:i=new MaskIndexEffect(s[r],e,this);break;case 5:i=new EffectsManager(s[r],e,this);break;default:i=new NoValueEffect(s[r],e,this)}i&&this.effectElements.push(i)}};var lottie={};function setLocationHref(t){locationHref=t}function searchAnimations(){!0===standalone?animationManager.searchAnimations(animationData,standalone,renderer):animationManager.searchAnimations()}function setSubframeRendering(t){subframeEnabled=t}function loadAnimation(t){return!0===standalone&&(t.animationData=JSON.parse(animationData)),animationManager.loadAnimation(t)}function setQuality(t){if("string"==typeof t)switch(t){case"high":defaultCurveSegments=200;break;default:case"medium":defaultCurveSegments=50;break;case"low":defaultCurveSegments=10}else!isNaN(t)&&t>1&&(defaultCurveSegments=t);roundValues(!(defaultCurveSegments>=50))}function inBrowser(){return"undefined"!=typeof navigator}function installPlugin(t,e){"expressions"===t&&(expressionsPlugin=e)}function getFactory(t){switch(t){case"propertyFactory":return PropertyFactory;case"shapePropertyFactory":return ShapePropertyFactory;case"matrix":return Matrix;default:return null}}function checkReady(){"complete"===document.readyState&&(clearInterval(readyStateCheckInterval),searchAnimations())}function getQueryVariable(t){for(var e=queryString.split("&"),r=0;r<e.length;r+=1){var i=e[r].split("=");if(decodeURIComponent(i[0])==t)return decodeURIComponent(i[1])}return null}lottie.play=animationManager.play,lottie.pause=animationManager.pause,lottie.setLocationHref=setLocationHref,lottie.togglePause=animationManager.togglePause,lottie.setSpeed=animationManager.setSpeed,lottie.setDirection=animationManager.setDirection,lottie.stop=animationManager.stop,lottie.searchAnimations=searchAnimations,lottie.registerAnimation=animationManager.registerAnimation,lottie.loadAnimation=loadAnimation,lottie.setSubframeRendering=setSubframeRendering,lottie.resize=animationManager.resize,lottie.goToAndStop=animationManager.goToAndStop,lottie.destroy=animationManager.destroy,lottie.setQuality=setQuality,lottie.inBrowser=inBrowser,lottie.installPlugin=installPlugin,lottie.freeze=animationManager.freeze,lottie.unfreeze=animationManager.unfreeze,lottie.setVolume=animationManager.setVolume,lottie.mute=animationManager.mute,lottie.unmute=animationManager.unmute,lottie.getRegisteredAnimations=animationManager.getRegisteredAnimations,lottie.__getFactory=getFactory,lottie.version="5.7.8";var standalone="__[STANDALONE]__",animationData="__[ANIMATIONDATA]__",renderer="",queryString;if(standalone){var scripts=document.getElementsByTagName("script"),index=scripts.length-1,myScript=scripts[index]||{src:""};queryString=myScript.src.replace(/^[^\?]+\??/,""),renderer=getQueryVariable("renderer")}var readyStateCheckInterval=setInterval(checkReady,100);return lottie}))})),PlayerState,PlayerEvent;function parseSrc(t){if("object"==typeof t)return t;try{return JSON.parse(t)}catch(t){}try{return new URL(t).toString()}catch(t){}return t}!function(t){t.Loading="loading",t.Playing="playing",t.Paused="paused",t.Stopped="stopped",t.Frozen="frozen",t.Error="error"}(PlayerState||(PlayerState={})),function(t){t.Load="load",t.Error="error",t.Ready="ready",t.Play="play",t.Pause="pause",t.Stop="stop",t.Freeze="freeze",t.Loop="loop",t.Complete="complete",t.Frame="frame"}(PlayerEvent||(PlayerEvent={}));var defaultOptions={clearCanvas:!1,hideOnTransparent:!0,progressiveLoad:!0},Player=function(t){function e(e){var r=t.call(this,e)||this;return r.container=null,r.handleBgChange=function(t){r.setState({background:t})},r.triggerDownload=function(t,e){var r=document.createElement("a");r.href=t,r.download=e,document.body.appendChild(r),r.click(),document.body.removeChild(r)},r.snapshot=function(t){var e;void 0===t&&(t=!0);var i=r.props.id?r.props.id:"lottie",a=document.getElementById(i);if("svg"===r.props.renderer){if(a){var s=a.querySelector("svg");if(s){var n=(new XMLSerializer).serializeToString(s);e="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n)}}t&&r.triggerDownload(e,"snapshot.svg")}else if("canvas"===r.props.renderer){if(a){var o=a.querySelector("canvas");o&&(e=o.toDataURL("image/png"))}t&&r.triggerDownload(e,"snapshot.png")}return e},"undefined"!=typeof window&&(window.lottie=lottie),r.state={animationData:null,background:"transparent",containerRef:react__WEBPACK_IMPORTED_MODULE_0__.createRef(),debug:!0,instance:null,playerState:PlayerState.Loading,seeker:0},r}return __extends(e,t),e.getDerivedStateFromProps=function(t,e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){return t.background!==e.background?[2,{background:t.background}]:[2,null]}))}))},e.prototype.componentDidMount=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.createLottie()];case 1:return t.sent(),[2]}}))}))},e.prototype.componentWillUnmount=function(){this.state.instance&&this.state.instance.destroy()},e.prototype.componentDidUpdate=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return this.props.src===t.src?[3,2]:(this.state.instance&&this.state.instance.destroy(),[4,this.createLottie()]);case 1:e.sent(),e.label=2;case 2:return[2]}}))}))},e.prototype.render=function(){var t=this,e=this.props,r=e.children,i=e.loop,a=e.style,s=e.onBackgroundChange,n=e.className,o=this.state,h=o.animationData,l=o.instance,p=o.playerState,f=o.seeker,c=o.debug,m=o.background;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"lf-player-container"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:this.props.id?this.props.id:"lottie",ref:function(e){return t.container=e},style:__assign({background:m,margin:"0 auto",outline:"none",overflow:"hidden"},a),className:n}),react__WEBPACK_IMPORTED_MODULE_0__.Children.map(r,(function(e){return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(e)?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(e,{animationData:h,background:m,debug:c,instance:l,loop:i,pause:function(){return t.pause()},play:function(){return t.play()},playerState:p,seeker:f,setBackground:function(e){t.setState({background:e}),"function"==typeof s&&s(e)},setSeeker:function(e,r){return t.setSeeker(e,r)},stop:function(){return t.stop()},toggleDebug:function(){return t.toggleDebug()},setLoop:function(e){return t.setLoop(e)},colorChangedEvent:function(e){t.handleBgChange(e)},snapshot:function(){t.snapshot()}}):null})))},e.prototype.toggleDebug=function(){this.setState({debug:!this.state.debug})},e.prototype.createLottie=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,r,i,a,s,n,o,h,l,p,f,c,m,d=this;return __generator(this,(function(u){switch(u.label){case 0:if(t=this.props,e=t.autoplay,r=t.direction,i=t.loop,a=t.lottieRef,s=t.renderer,n=t.speed,o=t.src,h=t.background,l=t.rendererSettings,p=t.hover,f=this.state.instance,!o||!this.container)return[2];u.label=1;case 1:return u.trys.push([1,5,,6]),"string"!=typeof(c=parseSrc(o))?[3,4]:[4,fetch(c)];case 2:return[4,u.sent().json()];case 3:c=u.sent(),u.label=4;case 4:return f&&f.destroy(),m=lottie.loadAnimation({rendererSettings:l||defaultOptions,animationData:c,autoplay:e||!1,container:this.container,loop:i||!1,renderer:s}),n&&lottie.setSpeed(n),this.setState({animationData:c}),m.addEventListener("enterFrame",(function(){d.triggerEvent(PlayerEvent.Frame),d.setState({seeker:Math.floor(m.currentFrame)})})),m.addEventListener("DOMLoaded",(function(){d.triggerEvent(PlayerEvent.Load)})),m.addEventListener("data_ready",(function(){d.triggerEvent(PlayerEvent.Ready)})),m.addEventListener("data_failed",(function(){d.setState({playerState:PlayerState.Error})})),m.addEventListener("loopComplete",(function(){d.triggerEvent(PlayerEvent.Loop)})),m.addEventListener("complete",(function(){d.triggerEvent(PlayerEvent.Complete),d.setState({playerState:PlayerState.Paused}),d.props.keepLastFrame&&!d.props.loop||d.setSeeker(0)})),this.container.addEventListener("mouseenter",(function(){p&&d.state.playerState!==PlayerState.Playing&&(d.props.keepLastFrame&&d.stop(),d.play())})),this.container.addEventListener("mouseleave",(function(){p&&d.state.playerState===PlayerState.Playing&&d.stop()})),n&&this.setPlayerSpeed(n),r&&this.setPlayerDirection(r),h&&this.setState({background:h}),this.setState({instance:m},(function(){"function"==typeof a&&a(m),e&&d.play()})),[3,6];case 5:return u.sent(),this.setState({playerState:PlayerState.Error}),[3,6];case 6:return[2]}}))}))},e.prototype.play=function(){var t=this.state.instance;t&&(this.triggerEvent(PlayerEvent.Play),t.play(),this.setState({playerState:PlayerState.Playing}))},e.prototype.pause=function(){var t=this.state.instance;t&&(this.triggerEvent(PlayerEvent.Pause),t.pause(),this.setState({playerState:PlayerState.Paused}))},e.prototype.stop=function(){var t=this.state.instance;t&&(this.triggerEvent(PlayerEvent.Stop),t.stop(),this.setState({playerState:PlayerState.Stopped}))},e.prototype.setPlayerSpeed=function(t){var e=this.state.instance;e&&e.setSpeed(t)},e.prototype.setPlayerDirection=function(t){var e=this.state.instance;e&&e.setDirection(t)},e.prototype.setSeeker=function(t,e){void 0===e&&(e=!1);var r=this.state,i=r.instance,a=r.playerState;i&&(e&&a===PlayerState.Playing?i.goToAndPlay(t,!0):(i.goToAndStop(t,!0),this.triggerEvent(PlayerEvent.Pause),this.setState({playerState:PlayerState.Paused})))},e.prototype.setLoop=function(t){var e=this.state.instance;e&&(e.loop=t,this.setState({instance:e}))},e.prototype.triggerEvent=function(t){var e=this.props.onEvent;e&&e(t)},e.defaultProps={loop:!1},e}(react__WEBPACK_IMPORTED_MODULE_0__.Component);function styleInject(t,e){void 0===e&&(e={});var r=e.insertAt;if(t&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&i.firstChild?i.insertBefore(a,i.firstChild):i.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}}var css_248z=".lf-progress {\n  -webkit-appearance: none;\n  -moz-apperance: none;\n  width: 100%;\n  /* margin: 0 10px; */\n  height: 4px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.lf-progress:focus {\n  outline: none;\n  border: none;\n}\n.lf-progress::-moz-range-track {\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n}\n.lf-progress::-webkit-slider-thumb {\n  -webkit-appearance: none !important;\n  height: 13px;\n  width: 13px;\n  border: 0;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress::-moz-range-thumb {\n  -moz-appearance: none !important;\n  height: 13px;\n  width: 13px;\n  border: 0;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress::-ms-track {\n  width: 100%;\n  height: 3px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n.lf-progress::-ms-fill-lower {\n  background: #ccc;\n  border-radius: 3px;\n}\n.lf-progress::-ms-fill-upper {\n  background: #ccc;\n  border-radius: 3px;\n}\n.lf-progress::-ms-thumb {\n  border: 0;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress:focus::-ms-fill-lower {\n  background: #ccc;\n}\n.lf-progress:focus::-ms-fill-upper {\n  background: #ccc;\n}\n.lf-player-container :focus {\n  outline: 0;\n}\n.lf-popover {\n  position: relative;\n}\n\n.lf-popover-content {\n  display: inline-block;\n  position: absolute;\n  opacity: 1;\n  visibility: visible;\n  transform: translate(0, -10px);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n\n.lf-popover-content.hidden {\n  opacity: 0;\n  visibility: hidden;\n  transform: translate(0, 0px);\n}\n\n.lf-player-btn-container {\n  display: flex;\n  align-items: center;\n}\n.lf-player-btn {\n  cursor: pointer;\n  fill: #999;\n  width: 14px;\n}\n\n.lf-player-btn.active {\n  fill: #555;\n}\n\n.lf-popover {\n  position: relative;\n}\n\n.lf-popover-content {\n  display: inline-block;\n  position: absolute;\n  background-color: #ffffff;\n  opacity: 1;\n\n  transform: translate(0, -10px);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n  padding: 10px;\n}\n\n.lf-popover-content.hidden {\n  opacity: 0;\n  visibility: hidden;\n  transform: translate(0, 0px);\n}\n\n.lf-arrow {\n  position: absolute;\n  z-index: -1;\n  content: '';\n  bottom: -9px;\n  border-style: solid;\n  border-width: 10px 10px 0px 10px;\n}\n\n.lf-left-align,\n.lf-left-align .lfarrow {\n  left: 0;\n  right: unset;\n}\n\n.lf-right-align,\n.lf-right-align .lf-arrow {\n  right: 0;\n  left: unset;\n}\n\n.lf-text-input {\n  border: 1px #ccc solid;\n  border-radius: 5px;\n  padding: 3px;\n  width: 60px;\n  margin: 0;\n}\n\n.lf-color-picker {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 90px;\n}\n\n.lf-color-selectors {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.lf-color-component {\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  align-items: center;\n  justify-content: center;\n}\n\n.lf-color-component strong {\n  width: 40px;\n}\n\n.lf-color-component input[type='range'] {\n  margin: 0 0 0 10px;\n}\n\n.lf-color-component input[type='number'] {\n  width: 50px;\n  margin: 0 0 0 10px;\n}\n\n.lf-color-preview {\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 5px;\n}\n\n.lf-preview {\n  height: 60px;\n  width: 60px;\n}\n\n.lf-popover-snapshot {\n  width: 150px;\n}\n.lf-popover-snapshot h5 {\n  margin: 5px 0 10px 0;\n  font-size: 0.75rem;\n}\n.lf-popover-snapshot a {\n  display: block;\n  text-decoration: none;\n}\n.lf-popover-snapshot a:before {\n  content: '⥼';\n  margin-right: 5px;\n}\n.lf-popover-snapshot .lf-note {\n  display: block;\n  margin-top: 10px;\n  color: #999;\n}\n.lf-player-controls > div {\n  margin-right: 5px;\n  margin-left: 5px;\n}\n.lf-player-controls > div:first-child {\n  margin-left: 0px;\n}\n.lf-player-controls > div:last-child {\n  margin-right: 0px;\n}\n",stylesheet=".lf-progress {\n  -webkit-appearance: none;\n  -moz-apperance: none;\n  width: 100%;\n  /* margin: 0 10px; */\n  height: 4px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.lf-progress:focus {\n  outline: none;\n  border: none;\n}\n.lf-progress::-moz-range-track {\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n}\n.lf-progress::-webkit-slider-thumb {\n  -webkit-appearance: none !important;\n  height: 13px;\n  width: 13px;\n  border: 0;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress::-moz-range-thumb {\n  -moz-appearance: none !important;\n  height: 13px;\n  width: 13px;\n  border: 0;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress::-ms-track {\n  width: 100%;\n  height: 3px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n.lf-progress::-ms-fill-lower {\n  background: #ccc;\n  border-radius: 3px;\n}\n.lf-progress::-ms-fill-upper {\n  background: #ccc;\n  border-radius: 3px;\n}\n.lf-progress::-ms-thumb {\n  border: 0;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress:focus::-ms-fill-lower {\n  background: #ccc;\n}\n.lf-progress:focus::-ms-fill-upper {\n  background: #ccc;\n}\n.lf-player-container :focus {\n  outline: 0;\n}\n.lf-popover {\n  position: relative;\n}\n\n.lf-popover-content {\n  display: inline-block;\n  position: absolute;\n  opacity: 1;\n  visibility: visible;\n  transform: translate(0, -10px);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n\n.lf-popover-content.hidden {\n  opacity: 0;\n  visibility: hidden;\n  transform: translate(0, 0px);\n}\n\n.lf-player-btn-container {\n  display: flex;\n  align-items: center;\n}\n.lf-player-btn {\n  cursor: pointer;\n  fill: #999;\n  width: 14px;\n}\n\n.lf-player-btn.active {\n  fill: #555;\n}\n\n.lf-popover {\n  position: relative;\n}\n\n.lf-popover-content {\n  display: inline-block;\n  position: absolute;\n  background-color: #ffffff;\n  opacity: 1;\n\n  transform: translate(0, -10px);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n  padding: 10px;\n}\n\n.lf-popover-content.hidden {\n  opacity: 0;\n  visibility: hidden;\n  transform: translate(0, 0px);\n}\n\n.lf-arrow {\n  position: absolute;\n  z-index: -1;\n  content: '';\n  bottom: -9px;\n  border-style: solid;\n  border-width: 10px 10px 0px 10px;\n}\n\n.lf-left-align,\n.lf-left-align .lfarrow {\n  left: 0;\n  right: unset;\n}\n\n.lf-right-align,\n.lf-right-align .lf-arrow {\n  right: 0;\n  left: unset;\n}\n\n.lf-text-input {\n  border: 1px #ccc solid;\n  border-radius: 5px;\n  padding: 3px;\n  width: 60px;\n  margin: 0;\n}\n\n.lf-color-picker {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 90px;\n}\n\n.lf-color-selectors {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.lf-color-component {\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  align-items: center;\n  justify-content: center;\n}\n\n.lf-color-component strong {\n  width: 40px;\n}\n\n.lf-color-component input[type='range'] {\n  margin: 0 0 0 10px;\n}\n\n.lf-color-component input[type='number'] {\n  width: 50px;\n  margin: 0 0 0 10px;\n}\n\n.lf-color-preview {\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 5px;\n}\n\n.lf-preview {\n  height: 60px;\n  width: 60px;\n}\n\n.lf-popover-snapshot {\n  width: 150px;\n}\n.lf-popover-snapshot h5 {\n  margin: 5px 0 10px 0;\n  font-size: 0.75rem;\n}\n.lf-popover-snapshot a {\n  display: block;\n  text-decoration: none;\n}\n.lf-popover-snapshot a:before {\n  content: '⥼';\n  margin-right: 5px;\n}\n.lf-popover-snapshot .lf-note {\n  display: block;\n  margin-top: 10px;\n  color: #999;\n}\n.lf-player-controls > div {\n  margin-right: 5px;\n  margin-left: 5px;\n}\n.lf-player-controls > div:first-child {\n  margin-left: 0px;\n}\n.lf-player-controls > div:last-child {\n  margin-right: 0px;\n}\n";styleInject(css_248z);var ColorPicker=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={red:0,green:0,blue:0,rgba:null,hex:"#000000",colorComponents:[]},e.handleChange=function(t,r){if("r"===t){var i="#"+(256|r).toString(16).slice(1)+(256|e.state.green).toString(16).slice(1)+(256|e.state.blue).toString(16).slice(1);e.setState({hex:i})}else if("g"===t){i="#"+(256|e.state.red).toString(16).slice(1)+(256|r).toString(16).slice(1)+(256|e.state.blue).toString(16).slice(1);e.setState({hex:i})}else if("b"===t){i="#"+(256|e.state.red).toString(16).slice(1)+(256|e.state.green).toString(16).slice(1)+(256|r).toString(16).slice(1);e.setState({hex:i})}},e.parseColor=function(t){var r;if("string"==typeof t){if("#"===t[0]){var i=4===t.length?[t.slice(1,2),t.slice(2,3),t.slice(3,4)].map((function(t){return parseInt(""+t+t,16)})):[t.slice(1,3),t.slice(3,5),t.slice(5,7)].map((function(t){return parseInt(t,16)}));e.setState({colorComponents:i})}else if(t.startsWith("rgb")){void 0!==(i=null===(r=t.match(/\d+/g))||void 0===r?void 0:r.map((function(t){return parseInt(t)})))&&e.setState({colorComponents:i})}e.state.colorComponents.length&&(e.setState({red:e.state.colorComponents[0]}),e.setState({green:e.state.colorComponents[1]}),e.setState({blue:e.state.colorComponents[2]}))}},e}return __extends(e,t),e.prototype.componentDidUpdate=function(t,e){return this.props.colorChangedEvent&&this.state.hex!==e.hex&&this.props.colorChangedEvent(this.state.hex),!0},e.prototype.render=function(){var t=this;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"lf-color-picker"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"lf-color-selectors"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"lf-color-component"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong",null,"Red"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type:"range",min:"0",max:"255",value:this.state.red,onChange:function(e){t.setState({red:e.target.value}),t.handleChange("r",e.target.value)}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{className:"lf-text-input",type:"number",min:"0",max:"255",value:this.state.red,onChange:function(e){t.setState({red:e.target.value}),t.handleChange("r",e.target.value)}})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"lf-color-component"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong",null,"Green"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type:"range",min:"0",max:"255",value:this.state.green,onChange:function(e){t.setState({green:e.target.value}),t.handleChange("g",e.target.value)}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{className:"lf-text-input",type:"number",min:"0",max:"255",value:this.state.green,onChange:function(e){t.setState({green:e.target.value}),t.handleChange("g",e.target.value)}})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"lf-color-component"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong",null,"Blue"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type:"range",min:"0",max:"255",value:this.state.blue,onChange:function(e){t.setState({blue:e.target.value}),t.handleChange("b",e.target.value)}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{className:"lf-text-input",type:"number",min:"0",max:"255",value:this.state.blue,onChange:function(e){t.setState({blue:e.target.value}),t.handleChange("b",e.target.value)}}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"lf-color-preview"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"lf-preview",style:{background:"rgb("+this.state.red+", "+this.state.green+", "+this.state.blue+")"}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{className:"lf-text-input",type:"text",value:this.state.hex,onChange:function(e){t.setState({hex:e.target.value}),t.parseColor(e.target.value)}}))))},e}(react__WEBPACK_IMPORTED_MODULE_0__.Component),Popover=function(t){var e=t.children,r=t.icon,i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),a=i[0],s=i[1],n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),o=n[0],h=n[1],l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),p=l[0],f=l[1],c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),m=c[0],d=c[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(a&&o){var t=a.getBoundingClientRect(),e=o.getBoundingClientRect(),r=t.left+e.width>window.innerWidth?-1:0;f(r)}}),[p,o,a]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"lf-popover",onMouseOver:function(){d(!0)},onMouseLeave:function(){d(!1)},ref:function(t){s(t)}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:" lf-player-btn"},r),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"lf-popover-content",ref:function(t){h(t)},style:{bottom:"22px",right:"0px",zIndex:2,visibility:m?"visible":"hidden"}},e))},Seeker=function(t){function e(e){var r=t.call(this,e)||this;return r.inputRef=react__WEBPACK_IMPORTED_MODULE_0__.createRef(),r.handleChange=function(){return function(t){var e=t.target.value,i=Math.floor(e/100*r.props.max);r.props.onChange(i)}},r.state={value:0},r}return __extends(e,t),e.prototype.render=function(){var t=this.props.value/this.props.max*100,e={backgroundImage:"-webkit-gradient(linear, left top, right top, color-stop("+t+"%, rgba(15, 204, 206, 0.4)), color-stop("+t+"%, #DAE1E7))"},r={position:"absolute",left:0,marginTop:"8px",width:"20px",display:"block",border:"0px",backgroundColor:this.props.darkTheme?"#505050":"rgb(218, 225, 231)",color:this.props.darkTheme?"#B9B9B9":"#555",padding:"2px",textAlign:"center",borderRadius:"3px",fontSize:"8px",fontWeight:"bold"},i={position:"absolute",right:0,marginTop:"8px",width:"20px",display:"block",border:"0px",backgroundColor:this.props.darkTheme?"#505050":"rgb(218, 225, 231)",color:this.props.darkTheme?"#B9B9B9":"#555",padding:"2px",textAlign:"center",borderRadius:"3px",fontSize:"8px",fontWeight:"bold"};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",marginRight:"5px",marginLeft:"5px",position:"relative"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{ref:this.inputRef,id:"track",className:"lf-progress",name:"progress",type:"range",min:"0",max:"100",step:"0.1",value:t,onInput:this.handleChange(),onChange:this.handleChange(),style:e}),this.props.showLabels&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:r},this.props.min),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:i},this.props.max)))},e}(react__WEBPACK_IMPORTED_MODULE_0__.Component),ControlButtonStyle={display:"inline-flex",cursor:"pointer"},Controls=function(t){function e(e){var r=t.call(this,e)||this;return r.state={activeFrame:0,mouseDown:!1},r}return __extends(e,t),e.prototype.render=function(){var t=this,e=this.props,r=e.instance,i=e.playerState,a=e.seeker,s=e.setLoop,n=e.setSeeker,o=e.play,h=e.pause,l=e.stop,p=e.visible,f=e.buttons;if(!r)return null;if(!p)return null;var c=!f||f.includes("play"),m=!f||f.includes("stop"),d=!f||f.includes("repeat"),u=!f||f.includes("frame"),y=!f||f.includes("background"),g=!f||f.includes("snapshot"),v={width:14,height:14,viewBox:"0 0 24 24"},b=Math.round(r.currentFrame);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"lf-player-controls",style:{display:"flex",justifyContent:"space-between",height:"60px",alignItems:"center",backgroundColor:this.props.transparentTheme?"transparent":this.props.darkTheme?"#3C3C3C":"#ffffff",paddingLeft:"10px",paddingRight:"10px"}},c&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{role:"button",tabIndex:0,onClick:function(){i===PlayerState.Playing?"function"==typeof h&&h():"function"==typeof o&&o()},onKeyDown:function(){i===PlayerState.Playing?"function"==typeof h&&h():"function"==typeof o&&o()},className:"lf-player-btn",style:ControlButtonStyle},i===PlayerState.Playing?react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",__assign({},v),react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{height:"22.9",rx:"1.9",width:"7.6",x:"14",y:".5"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{height:"22.9",rx:"1.9",width:"7.6",x:"2",y:".5"})):react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",__assign({},v),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M2 3.4C2 1.9 3.5 1 4.8 1.8l16.5 9.6c1.2.7 1.2 2.5 0 3.2L4.8 24.2C3.5 25 2 24.1 2 22.6V3.4z"}))),m&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{tabIndex:0,role:"button",onClick:function(){return l&&l()},onKeyDown:function(){return l&&l()},className:i===PlayerState.Stopped?"lf-player-btn active":"lf-player-btn",style:ControlButtonStyle},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",__assign({},v),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M2 3.667A1.67 1.67 0 0 1 3.667 2h16.666A1.67 1.67 0 0 1 22 3.667v16.666A1.67 1.67 0 0 1 20.333\n            22H3.667A1.67 1.67 0 0 1 2 20.333z"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Seeker,{min:0,step:1,max:r?r.totalFrames:1,value:a||0,onChange:function(e){n&&t.setState({activeFrame:e},(function(){n(e,!1)}))},onChangeEnd:function(e){n&&t.setState({activeFrame:e},(function(){n(e,!1)}))},showLabels:this.props.showLabels,darkTheme:this.props.darkTheme}),u&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{role:"button",className:"lf-player-btn-container"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{style:{outline:"none",border:this.props.darkTheme?"1px #505050 solid":"1px #ccc solid",borderRadius:"3px",width:"40px",textAlign:"center",backgroundColor:this.props.darkTheme?"#505050":"#ffffff",color:this.props.darkTheme?"#B9B9B9":"#999",fontSize:"0.7rem",padding:"0",fontFamily:"inherit"},type:"text",value:b,readOnly:!0})),d&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{role:"button",tabIndex:0,onClick:function(){r&&s&&s(!r.loop)},onKeyDown:function(){r&&s&&s(!r.loop)},className:r.loop?"lf-player-btn active":"lf-player-btn",style:ControlButtonStyle},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",__assign({},v),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12.5 16.8137h-.13v1.8939h4.9696c3.6455 0 6.6113-2.9658 6.6113-6.6116\n            0-3.64549-2.9658-6.61131-6.6113-6.61131-.5231 0-.947.42391-.947.94696 0 .52304.4239.94696.947.94696 2.6011 0\n            4.7174 2.11634 4.7174 4.71739 0 2.6014-2.1166 4.7177-4.7174 4.7177H12.5zM13.6025\n            5.61469v-.13H7.48137C3.83582 5.48469.87 8.45051.87 12.096c0 3.6509 3.17269 6.6117 6.81304 6.6117.52304 0\n            .94696-.424.94696-.947 0-.5231-.42392-.947-.94696-.947-2.60804 0-4.91907-2.1231-4.91907-4.7176 0-2.60115\n            2.11634-4.71744 4.7174-4.71744h6.12113V5.61469z",stroke:"#8795A1",strokeWidth:".26"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M11.1482\n            2.20355h0l-.001-.00116c-.3412-.40061-.9405-.44558-1.33668-.0996h-.00001c-.39526.34519-.43936.94795-.09898\n            1.34767l2.51487 3.03683-2.51894 3.06468c-.33872.40088-.29282 1.00363.10347\n            1.34723l.08517-.0982-.08517.0982c.17853.1549.39807.2308.61647.2308.2671 0 .5328-.114.72-.3347h0l.0011-.0014\n            3.0435-3.68655.0006-.00068c.3035-.35872.3025-.88754-.0019-1.24526l-3.0425-3.65786zM13.9453\n            21.7965h0l.001.0011c.3413.4006.9407.4456 1.337.0996h0c.3953-.3452.4395-.9479.099-1.3477l-2.5154-3.0368\n            2.5195-3.0647c.3388-.4008.2929-1.0036-.1035-1.3472l-.0852.0982.0852-.0982c-.1786-.1549-.3981-.2308-.6166-.2308-.2671\n            0-.5329.114-.7202.3347h0l-.0011.0014-3.0442\n            3.6865c-.0001.0003-.0003.0005-.0005.0007-.3036.3587-.3027.8876.0019 1.2453l3.0431 3.6579z",fill:"#8795A1",stroke:"#8795A1",strokeWidth:".26"}))),y&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(Popover,{icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",__assign({},v),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 3.1L6.1 8.6a7.6 7.6 0 00-2.2 4 7.2 7.2 0 00.4 4.4 7.9 7.9 0 003 3.5 8.7 8.7 0 004.7 1.3c1.6 0\n            3.2-.5 4.6-1.3s2.4-2 3-3.5a7.2 7.2 0 00.5-4.5 7.6 7.6 0 00-2.2-4L12 3.2zM12 0l7.5 7a9.8 9.8 0 013 5.1\n            9.3 9.3 0 01-.6 5.8c-.9 1.8-2.2 3.3-4 4.4A11.2 11.2 0 0112 24a11.2 11.2 0\n            01-6-1.7c-1.7-1-3-2.6-3.9-4.4a9.3 9.3 0 01-.6-5.8c.4-2 1.5-3.7 3-5L12 0zM6 14h12c0 1.5-.7 3-1.8 4s-2.6\n            1.6-4.2 1.6S9 19 7.8 18s-1.7-2.5-1.7-4z"}))},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{slot:"content",className:"lf-popover popover-background"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ColorPicker,{colorChangedEvent:this.props.colorChangedEvent}))),g&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(Popover,{icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",__assign({},v),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{clipRule:"evenodd",d:"M0 3.01A2.983 2.983 0 012.983.027H16.99a2.983 2.983 0 012.983 2.983v14.008a2.982 2.982 0 01-2.983\n              2.983H2.983A2.983 2.983 0 010 17.018zm2.983-.941a.941.941 0 00-.942.94v14.01c0\n              .52.422.94.942.94H16.99a.94.94 0 00.941-.94V3.008a.941.941 0 00-.94-.94H2.981z",fillRule:"evenodd"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12.229 7.945l-2.07 4.598-2.586-2.605-2.414 2.758v2.146h9.656V11.93z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:"7.444",cy:"6.513",r:"2.032"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M9.561 23.916h11.25a2.929 2.929 0 002.926-2.927V9.954a1.06 1.06 0 10-2.122 0v11.035a.805.805 0\n              01-.803.804H9.562a1.061 1.061 0 100 2.123z",stroke:"#8795a1",strokeWidth:".215"}))},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{slot:"content",className:"lf-popover lf-popover-snapshot",onWheel:function(t){n&&n(b+(t.deltaY>0?-1:1),!1)}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5",null,"Frame ",b),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{cursor:"pointer",color:"#0FCCCE"},onClick:this.props.snapshot},"Download SVG"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{cursor:"pointer",color:"#0FCCCE"},onClick:this.props.snapshot},"Download PNG"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("i",{className:"lf-note"},"Scroll with mousewheel to find exact frame"))))},e}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
//# sourceMappingURL=lottie-react.esm.js.map


/***/ }),

/***/ "./components/loading.js":
/*!*******************************!*\
  !*** ./components/loading.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./name */ "./components/name.js");
/* harmony import */ var _pc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pc */ "./components/pc.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\github\\divyaprakashrx\\components\\loading.js",
    _this = undefined;



 // const Load = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100vw;
//   height: 100vh;
//   flex-direction: column;
// `;



var Loading = function Loading(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("loading", {
    style: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      background: "url('/images/R.jpg')",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_pc__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_name__WEBPACK_IMPORTED_MODULE_1__.default, {
      progress: data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_c = Loading;
/* harmony default export */ __webpack_exports__["default"] = (Loading);

var _c;

$RefreshReg$(_c, "Loading");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/name.js":
/*!****************************!*\
  !*** ./components/name.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\github\\divyaprakashrx\\components\\name.js",
    _this = undefined;



var Name = function Name(_ref) {
  var progress = _ref.progress;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    className: "max-w-screen-sm w-full",
    style: {
      maxWidth: "450px",
      width: "80%"
    },
    viewBox: "0 0 611 91",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mask", {
      id: "mask0",
      style: {
        maskType: "alpha"
      },
      maskUnits: "userSpaceOnUse",
      x: "-1",
      y: "-1",
      width: "613",
      height: "93",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mask", {
        id: "path-1-outside-1",
        maskUnits: "userSpaceOnUse",
        x: "-1",
        y: "-1",
        width: "613",
        height: "93",
        fill: "black",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
          fill: "white",
          x: "-1",
          y: "-1",
          width: "613",
          height: "93"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M43.872 0C45.216 0 46.304 0.448 47.136 1.344C48.032 2.176 48.48 3.264 48.48 4.608V66.432C48.48 67.712 48.032 68.8 47.136 69.696C46.304 70.592 45.216 71.04 43.872 71.04C42.528 71.04 41.44 70.624 40.608 69.792C39.776 68.896 39.36 67.776 39.36 66.432V63.744C37.76 66.048 35.488 68 32.544 69.6C29.664 71.2 26.56 72 23.232 72C18.88 72 14.944 70.88 11.424 68.64C7.904 66.4 5.12 63.296 3.072 59.328C1.024 55.296 0 50.784 0 45.792C0 40.8 0.992 36.32 2.976 32.352C5.024 28.32 7.808 25.184 11.328 22.944C14.848 20.704 18.72 19.584 22.944 19.584C26.336 19.584 29.472 20.288 32.352 21.696C35.232 23.104 37.568 24.928 39.36 27.168V4.608C39.36 3.264 39.776 2.176 40.608 1.344C41.44 0.448 42.528 0 43.872 0ZM24.288 63.552C27.296 63.552 29.952 62.784 32.256 61.248C34.624 59.712 36.448 57.6 37.728 54.912C39.072 52.224 39.744 49.184 39.744 45.792C39.744 42.464 39.072 39.456 37.728 36.768C36.448 34.016 34.624 31.872 32.256 30.336C29.952 28.8 27.296 28.032 24.288 28.032C21.28 28.032 18.592 28.8 16.224 30.336C13.92 31.872 12.096 34.016 10.752 36.768C9.472 39.456 8.832 42.464 8.832 45.792C8.832 49.184 9.472 52.224 10.752 54.912C12.096 57.6 13.92 59.712 16.224 61.248C18.592 62.784 21.28 63.552 24.288 63.552Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M70.6807 66.432C70.6807 67.712 70.2327 68.8 69.3367 69.696C68.5047 70.592 67.4168 71.04 66.0728 71.04C64.7928 71.04 63.7048 70.592 62.8088 69.696C61.9767 68.8 61.5607 67.712 61.5607 66.432V24.864C61.5607 23.584 61.9767 22.496 62.8088 21.6C63.7048 20.704 64.7928 20.256 66.0728 20.256C67.4168 20.256 68.5047 20.704 69.3367 21.6C70.2327 22.496 70.6807 23.584 70.6807 24.864V66.432ZM66.0728 13.92C64.2168 13.92 62.8727 13.6 62.0407 12.96C61.2727 12.256 60.8888 11.168 60.8888 9.696V8.16C60.8888 6.624 61.3047 5.536 62.1367 4.896C63.0327 4.256 64.3767 3.936 66.1687 3.936C67.9607 3.936 69.2408 4.288 70.0088 4.992C70.8408 5.632 71.2568 6.688 71.2568 8.16V9.696C71.2568 11.232 70.8408 12.32 70.0088 12.96C69.1768 13.6 67.8648 13.92 66.0728 13.92Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M122.191 20.256C123.407 20.256 124.431 20.672 125.263 21.504C126.095 22.272 126.511 23.2 126.511 24.288C126.511 24.864 126.287 25.664 125.839 26.688L107.599 68.16C107.215 68.992 106.671 69.664 105.967 70.176C105.263 70.688 104.495 70.976 103.663 71.04C102.639 71.168 101.679 70.976 100.783 70.464C99.9508 69.952 99.3108 69.184 98.8628 68.16L80.6227 26.688C80.3027 25.728 80.1428 24.928 80.1428 24.288C80.1428 23.264 80.5587 22.336 81.3907 21.504C82.2227 20.672 83.3107 20.256 84.6547 20.256C85.6147 20.256 86.4788 20.512 87.2467 21.024C88.0147 21.472 88.6227 22.176 89.0707 23.136L103.567 56.832L118.063 23.136C118.959 21.216 120.335 20.256 122.191 20.256Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M173.825 20.256C175.169 20.256 176.257 20.704 177.089 21.6C177.984 22.496 178.432 23.584 178.432 24.864V66.336C178.432 74.336 176.225 80.32 171.809 84.288C167.393 88.256 161.568 90.24 154.337 90.24C151.969 90.24 149.633 90.016 147.329 89.568C145.025 89.12 143.137 88.512 141.665 87.744C139.297 86.656 138.113 85.184 138.113 83.328C138.113 83.008 138.176 82.592 138.305 82.08C138.689 80.992 139.232 80.16 139.936 79.584C140.64 79.008 141.441 78.72 142.337 78.72C142.848 78.72 143.329 78.816 143.777 79.008C145.76 79.904 147.521 80.608 149.057 81.12C150.592 81.632 152.384 81.888 154.432 81.888C164.352 81.888 169.312 76.8 169.312 66.624V64.704C167.585 67.008 165.344 68.8 162.592 70.08C159.904 71.36 156.801 72 153.281 72C147.969 72 143.809 70.304 140.801 66.912C137.857 63.52 136.385 59.072 136.385 53.568V24.864C136.385 23.52 136.801 22.432 137.633 21.6C138.465 20.704 139.553 20.256 140.896 20.256C142.24 20.256 143.329 20.704 144.161 21.6C145.057 22.496 145.505 23.584 145.505 24.864V51.168C145.505 55.392 146.432 58.528 148.288 60.576C150.145 62.56 152.96 63.552 156.736 63.552C160.384 63.552 163.393 62.4 165.76 60.096C168.128 57.792 169.312 54.816 169.312 51.168V24.864C169.312 23.52 169.729 22.432 170.561 21.6C171.393 20.704 172.481 20.256 173.825 20.256Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M236.622 20.064C237.966 20.064 239.054 20.512 239.886 21.408C240.782 22.24 241.23 23.36 241.23 24.768V66.432C241.23 67.712 240.782 68.8 239.886 69.696C239.054 70.592 237.966 71.04 236.622 71.04C235.278 71.04 234.19 70.624 233.358 69.792C232.526 68.896 232.11 67.776 232.11 66.432V63.936C230.446 66.176 228.174 68.096 225.294 69.696C222.414 71.232 219.31 72 215.982 72C211.63 72 207.662 70.88 204.078 68.64C200.558 66.4 197.774 63.296 195.726 59.328C193.742 55.296 192.75 50.784 192.75 45.792C192.75 40.8 193.742 36.32 195.726 32.352C197.774 28.32 200.558 25.184 204.078 22.944C207.598 20.704 211.47 19.584 215.694 19.584C219.086 19.584 222.222 20.288 225.102 21.696C228.046 23.104 230.382 24.896 232.11 27.072V24.768C232.11 23.424 232.526 22.304 233.358 21.408C234.19 20.512 235.278 20.064 236.622 20.064ZM217.038 63.552C220.046 63.552 222.702 62.784 225.006 61.248C227.374 59.712 229.198 57.6 230.478 54.912C231.822 52.224 232.494 49.184 232.494 45.792C232.494 42.464 231.822 39.456 230.478 36.768C229.198 34.08 227.374 31.968 225.006 30.432C222.702 28.832 220.046 28.032 217.038 28.032C214.03 28.032 211.342 28.8 208.974 30.336C206.67 31.872 204.846 33.984 203.502 36.672C202.222 39.36 201.582 42.4 201.582 45.792C201.582 49.184 202.222 52.224 203.502 54.912C204.846 57.6 206.67 59.712 208.974 61.248C211.342 62.784 214.03 63.552 217.038 63.552Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M280.039 19.872C284.391 19.872 288.327 20.992 291.847 23.232C295.367 25.408 298.119 28.48 300.103 32.448C302.151 36.416 303.175 40.896 303.175 45.888C303.175 50.88 302.151 55.36 300.103 59.328C298.119 63.232 295.367 66.304 291.847 68.544C288.327 70.784 284.455 71.904 280.231 71.904C276.903 71.904 273.799 71.168 270.919 69.696C268.039 68.224 265.703 66.432 263.911 64.32V85.632C263.911 86.912 263.463 88 262.567 88.896C261.735 89.792 260.647 90.24 259.303 90.24C258.023 90.24 256.935 89.792 256.039 88.896C255.207 88.064 254.791 86.976 254.791 85.632V25.248C254.791 23.904 255.207 22.784 256.039 21.888C256.871 20.992 257.959 20.544 259.303 20.544C260.647 20.544 261.735 20.992 262.567 21.888C263.463 22.784 263.911 23.904 263.911 25.248V28.032C265.447 25.792 267.687 23.872 270.631 22.272C273.575 20.672 276.711 19.872 280.039 19.872ZM278.983 63.456C281.927 63.456 284.583 62.688 286.951 61.152C289.319 59.616 291.143 57.536 292.423 54.912C293.767 52.224 294.439 49.216 294.439 45.888C294.439 42.56 293.767 39.584 292.423 36.96C291.143 34.272 289.319 32.16 286.951 30.624C284.583 29.088 281.927 28.32 278.983 28.32C275.975 28.32 273.287 29.088 270.919 30.624C268.551 32.096 266.695 34.176 265.351 36.864C264.071 39.552 263.431 42.56 263.431 45.888C263.431 49.216 264.071 52.224 265.351 54.912C266.695 57.6 268.551 59.712 270.919 61.248C273.287 62.72 275.975 63.456 278.983 63.456Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M338.815 19.584C340.479 19.584 341.919 20.032 343.135 20.928C344.352 21.76 344.96 22.816 344.96 24.096C344.96 25.632 344.543 26.816 343.711 27.648C342.943 28.416 341.984 28.8 340.832 28.8C340.256 28.8 339.392 28.608 338.24 28.224C336.896 27.776 335.84 27.552 335.072 27.552C333.087 27.552 331.136 28.256 329.216 29.664C327.36 31.008 325.824 32.896 324.608 35.328C323.456 37.696 322.879 40.352 322.879 43.296V66.432C322.879 67.712 322.431 68.8 321.535 69.696C320.703 70.592 319.616 71.04 318.272 71.04C316.928 71.04 315.84 70.624 315.008 69.792C314.176 68.896 313.759 67.776 313.759 66.432V25.344C313.759 24.064 314.176 22.976 315.008 22.08C315.904 21.184 316.992 20.736 318.272 20.736C319.616 20.736 320.703 21.184 321.535 22.08C322.431 22.976 322.879 24.064 322.879 25.344V30.24C324.287 27.104 326.4 24.576 329.216 22.656C332.032 20.672 335.232 19.648 338.815 19.584Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M393.091 20.064C394.435 20.064 395.523 20.512 396.355 21.408C397.251 22.24 397.699 23.36 397.699 24.768V66.432C397.699 67.712 397.251 68.8 396.355 69.696C395.523 70.592 394.435 71.04 393.091 71.04C391.747 71.04 390.659 70.624 389.827 69.792C388.995 68.896 388.579 67.776 388.579 66.432V63.936C386.915 66.176 384.643 68.096 381.763 69.696C378.883 71.232 375.779 72 372.451 72C368.099 72 364.131 70.88 360.547 68.64C357.027 66.4 354.243 63.296 352.195 59.328C350.211 55.296 349.219 50.784 349.219 45.792C349.219 40.8 350.211 36.32 352.195 32.352C354.243 28.32 357.027 25.184 360.547 22.944C364.067 20.704 367.939 19.584 372.163 19.584C375.555 19.584 378.691 20.288 381.571 21.696C384.515 23.104 386.851 24.896 388.579 27.072V24.768C388.579 23.424 388.995 22.304 389.827 21.408C390.659 20.512 391.747 20.064 393.091 20.064ZM373.507 63.552C376.515 63.552 379.171 62.784 381.475 61.248C383.843 59.712 385.667 57.6 386.947 54.912C388.291 52.224 388.963 49.184 388.963 45.792C388.963 42.464 388.291 39.456 386.947 36.768C385.667 34.08 383.843 31.968 381.475 30.432C379.171 28.832 376.515 28.032 373.507 28.032C370.499 28.032 367.811 28.8 365.443 30.336C363.139 31.872 361.315 33.984 359.971 36.672C358.691 39.36 358.051 42.4 358.051 45.792C358.051 49.184 358.691 52.224 359.971 54.912C361.315 57.6 363.139 59.712 365.443 61.248C367.811 62.784 370.499 63.552 373.507 63.552Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M452.348 63.072C453.307 64.096 453.788 65.216 453.788 66.432C453.788 67.712 453.275 68.8 452.251 69.696C451.292 70.528 450.268 70.944 449.18 70.944C447.772 70.944 446.651 70.432 445.819 69.408L426.908 49.344L421.147 54.528V66.432C421.147 67.712 420.699 68.8 419.803 69.696C418.971 70.592 417.915 71.04 416.635 71.04C415.292 71.04 414.172 70.592 413.276 69.696C412.444 68.8 412.027 67.712 412.027 66.432V4.608C412.027 3.328 412.444 2.24 413.276 1.344C414.172 0.448 415.292 0 416.635 0C417.915 0 418.971 0.448 419.803 1.344C420.699 2.24 421.147 3.328 421.147 4.608V43.584L444.668 21.984C445.756 21.024 446.875 20.544 448.027 20.544C449.116 20.544 450.108 21.024 451.004 21.984C451.9 22.88 452.348 23.84 452.348 24.864C452.348 26.144 451.74 27.296 450.523 28.32L433.915 43.104L452.348 63.072Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M504.935 20.064C506.279 20.064 507.367 20.512 508.199 21.408C509.095 22.24 509.543 23.36 509.543 24.768V66.432C509.543 67.712 509.095 68.8 508.199 69.696C507.367 70.592 506.279 71.04 504.935 71.04C503.591 71.04 502.503 70.624 501.671 69.792C500.839 68.896 500.423 67.776 500.423 66.432V63.936C498.759 66.176 496.487 68.096 493.607 69.696C490.727 71.232 487.622 72 484.294 72C479.943 72 475.975 70.88 472.391 68.64C468.871 66.4 466.087 63.296 464.039 59.328C462.055 55.296 461.062 50.784 461.062 45.792C461.062 40.8 462.055 36.32 464.039 32.352C466.087 28.32 468.871 25.184 472.391 22.944C475.91 20.704 479.783 19.584 484.007 19.584C487.398 19.584 490.534 20.288 493.414 21.696C496.358 23.104 498.695 24.896 500.423 27.072V24.768C500.423 23.424 500.839 22.304 501.671 21.408C502.503 20.512 503.591 20.064 504.935 20.064ZM485.35 63.552C488.358 63.552 491.015 62.784 493.319 61.248C495.687 59.712 497.51 57.6 498.79 54.912C500.134 52.224 500.806 49.184 500.806 45.792C500.806 42.464 500.134 39.456 498.79 36.768C497.51 34.08 495.687 31.968 493.319 30.432C491.015 28.832 488.358 28.032 485.35 28.032C482.342 28.032 479.655 28.8 477.286 30.336C474.983 31.872 473.159 33.984 471.815 36.672C470.535 39.36 469.895 42.4 469.895 45.792C469.895 49.184 470.535 52.224 471.815 54.912C473.159 57.6 474.983 59.712 477.286 61.248C479.655 62.784 482.342 63.552 485.35 63.552Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M520.223 63.168C519.647 62.272 519.359 61.408 519.359 60.576C519.359 59.296 520.031 58.208 521.375 57.312C522.015 56.864 522.751 56.64 523.583 56.64C524.735 56.64 525.791 57.12 526.751 58.08C528.671 60.256 530.719 61.888 532.895 62.976C535.135 64.064 537.791 64.608 540.863 64.608C543.295 64.544 545.439 64 547.295 62.976C549.151 61.888 550.079 60.16 550.079 57.792C550.079 55.616 549.119 53.952 547.199 52.8C545.343 51.648 542.591 50.592 538.943 49.632C535.359 48.672 532.383 47.68 530.015 46.656C527.647 45.568 525.631 44.032 523.967 42.048C522.367 40 521.567 37.344 521.567 34.08C521.567 31.2 522.367 28.672 523.967 26.496C525.631 24.32 527.807 22.624 530.495 21.408C533.247 20.192 536.223 19.584 539.423 19.584C542.495 19.584 545.535 20.16 548.543 21.312C551.615 22.464 554.111 24.224 556.031 26.592C556.799 27.488 557.183 28.416 557.183 29.376C557.183 30.4 556.671 31.392 555.647 32.352C555.007 32.928 554.207 33.216 553.247 33.216C552.095 33.216 551.167 32.832 550.463 32.064C549.119 30.528 547.455 29.344 545.471 28.512C543.551 27.68 541.407 27.264 539.039 27.264C536.607 27.264 534.527 27.776 532.799 28.8C531.135 29.76 530.303 31.424 530.303 33.792C530.367 36.032 531.327 37.696 533.183 38.784C535.103 39.872 538.015 40.928 541.919 41.952C545.311 42.848 548.127 43.808 550.367 44.832C552.607 45.856 554.495 47.392 556.031 49.44C557.567 51.424 558.335 54.048 558.335 57.312C558.335 60.32 557.471 62.944 555.743 65.184C554.015 67.36 551.743 69.056 548.927 70.272C546.175 71.424 543.231 72 540.095 72C536.063 72 532.319 71.296 528.863 69.888C525.471 68.48 522.591 66.24 520.223 63.168Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M593.909 19.872C605.173 19.872 610.805 26.848 610.805 40.8V66.432C610.805 67.712 610.357 68.8 609.461 69.696C608.629 70.592 607.541 71.04 606.197 71.04C604.917 71.04 603.829 70.592 602.933 69.696C602.101 68.8 601.685 67.712 601.685 66.432V40.8C601.685 32.48 598.165 28.32 591.125 28.32C587.349 28.32 584.213 29.536 581.717 31.968C579.221 34.336 577.973 37.28 577.973 40.8V66.432C577.973 67.712 577.525 68.8 576.629 69.696C575.797 70.592 574.709 71.04 573.365 71.04C572.021 71.04 570.933 70.624 570.101 69.792C569.269 68.896 568.853 67.776 568.853 66.432V4.608C568.853 3.328 569.269 2.24 570.101 1.344C570.997 0.448 572.085 0 573.365 0C574.709 0 575.797 0.448 576.629 1.344C577.525 2.24 577.973 3.328 577.973 4.608V28.896C579.573 26.4 581.813 24.288 584.693 22.56C587.573 20.768 590.645 19.872 593.909 19.872Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M43.872 0C45.216 0 46.304 0.448 47.136 1.344C48.032 2.176 48.48 3.264 48.48 4.608V66.432C48.48 67.712 48.032 68.8 47.136 69.696C46.304 70.592 45.216 71.04 43.872 71.04C42.528 71.04 41.44 70.624 40.608 69.792C39.776 68.896 39.36 67.776 39.36 66.432V63.744C37.76 66.048 35.488 68 32.544 69.6C29.664 71.2 26.56 72 23.232 72C18.88 72 14.944 70.88 11.424 68.64C7.904 66.4 5.12 63.296 3.072 59.328C1.024 55.296 0 50.784 0 45.792C0 40.8 0.992 36.32 2.976 32.352C5.024 28.32 7.808 25.184 11.328 22.944C14.848 20.704 18.72 19.584 22.944 19.584C26.336 19.584 29.472 20.288 32.352 21.696C35.232 23.104 37.568 24.928 39.36 27.168V4.608C39.36 3.264 39.776 2.176 40.608 1.344C41.44 0.448 42.528 0 43.872 0ZM24.288 63.552C27.296 63.552 29.952 62.784 32.256 61.248C34.624 59.712 36.448 57.6 37.728 54.912C39.072 52.224 39.744 49.184 39.744 45.792C39.744 42.464 39.072 39.456 37.728 36.768C36.448 34.016 34.624 31.872 32.256 30.336C29.952 28.8 27.296 28.032 24.288 28.032C21.28 28.032 18.592 28.8 16.224 30.336C13.92 31.872 12.096 34.016 10.752 36.768C9.472 39.456 8.832 42.464 8.832 45.792C8.832 49.184 9.472 52.224 10.752 54.912C12.096 57.6 13.92 59.712 16.224 61.248C18.592 62.784 21.28 63.552 24.288 63.552Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M70.6807 66.432C70.6807 67.712 70.2327 68.8 69.3367 69.696C68.5047 70.592 67.4168 71.04 66.0728 71.04C64.7928 71.04 63.7048 70.592 62.8088 69.696C61.9767 68.8 61.5607 67.712 61.5607 66.432V24.864C61.5607 23.584 61.9767 22.496 62.8088 21.6C63.7048 20.704 64.7928 20.256 66.0728 20.256C67.4168 20.256 68.5047 20.704 69.3367 21.6C70.2327 22.496 70.6807 23.584 70.6807 24.864V66.432ZM66.0728 13.92C64.2168 13.92 62.8727 13.6 62.0407 12.96C61.2727 12.256 60.8888 11.168 60.8888 9.696V8.16C60.8888 6.624 61.3047 5.536 62.1367 4.896C63.0327 4.256 64.3767 3.936 66.1687 3.936C67.9607 3.936 69.2408 4.288 70.0088 4.992C70.8408 5.632 71.2568 6.688 71.2568 8.16V9.696C71.2568 11.232 70.8408 12.32 70.0088 12.96C69.1768 13.6 67.8648 13.92 66.0728 13.92Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M122.191 20.256C123.407 20.256 124.431 20.672 125.263 21.504C126.095 22.272 126.511 23.2 126.511 24.288C126.511 24.864 126.287 25.664 125.839 26.688L107.599 68.16C107.215 68.992 106.671 69.664 105.967 70.176C105.263 70.688 104.495 70.976 103.663 71.04C102.639 71.168 101.679 70.976 100.783 70.464C99.9508 69.952 99.3108 69.184 98.8628 68.16L80.6227 26.688C80.3027 25.728 80.1428 24.928 80.1428 24.288C80.1428 23.264 80.5587 22.336 81.3907 21.504C82.2227 20.672 83.3107 20.256 84.6547 20.256C85.6147 20.256 86.4788 20.512 87.2467 21.024C88.0147 21.472 88.6227 22.176 89.0707 23.136L103.567 56.832L118.063 23.136C118.959 21.216 120.335 20.256 122.191 20.256Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M173.825 20.256C175.169 20.256 176.257 20.704 177.089 21.6C177.984 22.496 178.432 23.584 178.432 24.864V66.336C178.432 74.336 176.225 80.32 171.809 84.288C167.393 88.256 161.568 90.24 154.337 90.24C151.969 90.24 149.633 90.016 147.329 89.568C145.025 89.12 143.137 88.512 141.665 87.744C139.297 86.656 138.113 85.184 138.113 83.328C138.113 83.008 138.176 82.592 138.305 82.08C138.689 80.992 139.232 80.16 139.936 79.584C140.64 79.008 141.441 78.72 142.337 78.72C142.848 78.72 143.329 78.816 143.777 79.008C145.76 79.904 147.521 80.608 149.057 81.12C150.592 81.632 152.384 81.888 154.432 81.888C164.352 81.888 169.312 76.8 169.312 66.624V64.704C167.585 67.008 165.344 68.8 162.592 70.08C159.904 71.36 156.801 72 153.281 72C147.969 72 143.809 70.304 140.801 66.912C137.857 63.52 136.385 59.072 136.385 53.568V24.864C136.385 23.52 136.801 22.432 137.633 21.6C138.465 20.704 139.553 20.256 140.896 20.256C142.24 20.256 143.329 20.704 144.161 21.6C145.057 22.496 145.505 23.584 145.505 24.864V51.168C145.505 55.392 146.432 58.528 148.288 60.576C150.145 62.56 152.96 63.552 156.736 63.552C160.384 63.552 163.393 62.4 165.76 60.096C168.128 57.792 169.312 54.816 169.312 51.168V24.864C169.312 23.52 169.729 22.432 170.561 21.6C171.393 20.704 172.481 20.256 173.825 20.256Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M236.622 20.064C237.966 20.064 239.054 20.512 239.886 21.408C240.782 22.24 241.23 23.36 241.23 24.768V66.432C241.23 67.712 240.782 68.8 239.886 69.696C239.054 70.592 237.966 71.04 236.622 71.04C235.278 71.04 234.19 70.624 233.358 69.792C232.526 68.896 232.11 67.776 232.11 66.432V63.936C230.446 66.176 228.174 68.096 225.294 69.696C222.414 71.232 219.31 72 215.982 72C211.63 72 207.662 70.88 204.078 68.64C200.558 66.4 197.774 63.296 195.726 59.328C193.742 55.296 192.75 50.784 192.75 45.792C192.75 40.8 193.742 36.32 195.726 32.352C197.774 28.32 200.558 25.184 204.078 22.944C207.598 20.704 211.47 19.584 215.694 19.584C219.086 19.584 222.222 20.288 225.102 21.696C228.046 23.104 230.382 24.896 232.11 27.072V24.768C232.11 23.424 232.526 22.304 233.358 21.408C234.19 20.512 235.278 20.064 236.622 20.064ZM217.038 63.552C220.046 63.552 222.702 62.784 225.006 61.248C227.374 59.712 229.198 57.6 230.478 54.912C231.822 52.224 232.494 49.184 232.494 45.792C232.494 42.464 231.822 39.456 230.478 36.768C229.198 34.08 227.374 31.968 225.006 30.432C222.702 28.832 220.046 28.032 217.038 28.032C214.03 28.032 211.342 28.8 208.974 30.336C206.67 31.872 204.846 33.984 203.502 36.672C202.222 39.36 201.582 42.4 201.582 45.792C201.582 49.184 202.222 52.224 203.502 54.912C204.846 57.6 206.67 59.712 208.974 61.248C211.342 62.784 214.03 63.552 217.038 63.552Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M280.039 19.872C284.391 19.872 288.327 20.992 291.847 23.232C295.367 25.408 298.119 28.48 300.103 32.448C302.151 36.416 303.175 40.896 303.175 45.888C303.175 50.88 302.151 55.36 300.103 59.328C298.119 63.232 295.367 66.304 291.847 68.544C288.327 70.784 284.455 71.904 280.231 71.904C276.903 71.904 273.799 71.168 270.919 69.696C268.039 68.224 265.703 66.432 263.911 64.32V85.632C263.911 86.912 263.463 88 262.567 88.896C261.735 89.792 260.647 90.24 259.303 90.24C258.023 90.24 256.935 89.792 256.039 88.896C255.207 88.064 254.791 86.976 254.791 85.632V25.248C254.791 23.904 255.207 22.784 256.039 21.888C256.871 20.992 257.959 20.544 259.303 20.544C260.647 20.544 261.735 20.992 262.567 21.888C263.463 22.784 263.911 23.904 263.911 25.248V28.032C265.447 25.792 267.687 23.872 270.631 22.272C273.575 20.672 276.711 19.872 280.039 19.872ZM278.983 63.456C281.927 63.456 284.583 62.688 286.951 61.152C289.319 59.616 291.143 57.536 292.423 54.912C293.767 52.224 294.439 49.216 294.439 45.888C294.439 42.56 293.767 39.584 292.423 36.96C291.143 34.272 289.319 32.16 286.951 30.624C284.583 29.088 281.927 28.32 278.983 28.32C275.975 28.32 273.287 29.088 270.919 30.624C268.551 32.096 266.695 34.176 265.351 36.864C264.071 39.552 263.431 42.56 263.431 45.888C263.431 49.216 264.071 52.224 265.351 54.912C266.695 57.6 268.551 59.712 270.919 61.248C273.287 62.72 275.975 63.456 278.983 63.456Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M338.815 19.584C340.479 19.584 341.919 20.032 343.135 20.928C344.352 21.76 344.96 22.816 344.96 24.096C344.96 25.632 344.543 26.816 343.711 27.648C342.943 28.416 341.984 28.8 340.832 28.8C340.256 28.8 339.392 28.608 338.24 28.224C336.896 27.776 335.84 27.552 335.072 27.552C333.087 27.552 331.136 28.256 329.216 29.664C327.36 31.008 325.824 32.896 324.608 35.328C323.456 37.696 322.879 40.352 322.879 43.296V66.432C322.879 67.712 322.431 68.8 321.535 69.696C320.703 70.592 319.616 71.04 318.272 71.04C316.928 71.04 315.84 70.624 315.008 69.792C314.176 68.896 313.759 67.776 313.759 66.432V25.344C313.759 24.064 314.176 22.976 315.008 22.08C315.904 21.184 316.992 20.736 318.272 20.736C319.616 20.736 320.703 21.184 321.535 22.08C322.431 22.976 322.879 24.064 322.879 25.344V30.24C324.287 27.104 326.4 24.576 329.216 22.656C332.032 20.672 335.232 19.648 338.815 19.584Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M393.091 20.064C394.435 20.064 395.523 20.512 396.355 21.408C397.251 22.24 397.699 23.36 397.699 24.768V66.432C397.699 67.712 397.251 68.8 396.355 69.696C395.523 70.592 394.435 71.04 393.091 71.04C391.747 71.04 390.659 70.624 389.827 69.792C388.995 68.896 388.579 67.776 388.579 66.432V63.936C386.915 66.176 384.643 68.096 381.763 69.696C378.883 71.232 375.779 72 372.451 72C368.099 72 364.131 70.88 360.547 68.64C357.027 66.4 354.243 63.296 352.195 59.328C350.211 55.296 349.219 50.784 349.219 45.792C349.219 40.8 350.211 36.32 352.195 32.352C354.243 28.32 357.027 25.184 360.547 22.944C364.067 20.704 367.939 19.584 372.163 19.584C375.555 19.584 378.691 20.288 381.571 21.696C384.515 23.104 386.851 24.896 388.579 27.072V24.768C388.579 23.424 388.995 22.304 389.827 21.408C390.659 20.512 391.747 20.064 393.091 20.064ZM373.507 63.552C376.515 63.552 379.171 62.784 381.475 61.248C383.843 59.712 385.667 57.6 386.947 54.912C388.291 52.224 388.963 49.184 388.963 45.792C388.963 42.464 388.291 39.456 386.947 36.768C385.667 34.08 383.843 31.968 381.475 30.432C379.171 28.832 376.515 28.032 373.507 28.032C370.499 28.032 367.811 28.8 365.443 30.336C363.139 31.872 361.315 33.984 359.971 36.672C358.691 39.36 358.051 42.4 358.051 45.792C358.051 49.184 358.691 52.224 359.971 54.912C361.315 57.6 363.139 59.712 365.443 61.248C367.811 62.784 370.499 63.552 373.507 63.552Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M452.348 63.072C453.307 64.096 453.788 65.216 453.788 66.432C453.788 67.712 453.275 68.8 452.251 69.696C451.292 70.528 450.268 70.944 449.18 70.944C447.772 70.944 446.651 70.432 445.819 69.408L426.908 49.344L421.147 54.528V66.432C421.147 67.712 420.699 68.8 419.803 69.696C418.971 70.592 417.915 71.04 416.635 71.04C415.292 71.04 414.172 70.592 413.276 69.696C412.444 68.8 412.027 67.712 412.027 66.432V4.608C412.027 3.328 412.444 2.24 413.276 1.344C414.172 0.448 415.292 0 416.635 0C417.915 0 418.971 0.448 419.803 1.344C420.699 2.24 421.147 3.328 421.147 4.608V43.584L444.668 21.984C445.756 21.024 446.875 20.544 448.027 20.544C449.116 20.544 450.108 21.024 451.004 21.984C451.9 22.88 452.348 23.84 452.348 24.864C452.348 26.144 451.74 27.296 450.523 28.32L433.915 43.104L452.348 63.072Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M504.935 20.064C506.279 20.064 507.367 20.512 508.199 21.408C509.095 22.24 509.543 23.36 509.543 24.768V66.432C509.543 67.712 509.095 68.8 508.199 69.696C507.367 70.592 506.279 71.04 504.935 71.04C503.591 71.04 502.503 70.624 501.671 69.792C500.839 68.896 500.423 67.776 500.423 66.432V63.936C498.759 66.176 496.487 68.096 493.607 69.696C490.727 71.232 487.622 72 484.294 72C479.943 72 475.975 70.88 472.391 68.64C468.871 66.4 466.087 63.296 464.039 59.328C462.055 55.296 461.062 50.784 461.062 45.792C461.062 40.8 462.055 36.32 464.039 32.352C466.087 28.32 468.871 25.184 472.391 22.944C475.91 20.704 479.783 19.584 484.007 19.584C487.398 19.584 490.534 20.288 493.414 21.696C496.358 23.104 498.695 24.896 500.423 27.072V24.768C500.423 23.424 500.839 22.304 501.671 21.408C502.503 20.512 503.591 20.064 504.935 20.064ZM485.35 63.552C488.358 63.552 491.015 62.784 493.319 61.248C495.687 59.712 497.51 57.6 498.79 54.912C500.134 52.224 500.806 49.184 500.806 45.792C500.806 42.464 500.134 39.456 498.79 36.768C497.51 34.08 495.687 31.968 493.319 30.432C491.015 28.832 488.358 28.032 485.35 28.032C482.342 28.032 479.655 28.8 477.286 30.336C474.983 31.872 473.159 33.984 471.815 36.672C470.535 39.36 469.895 42.4 469.895 45.792C469.895 49.184 470.535 52.224 471.815 54.912C473.159 57.6 474.983 59.712 477.286 61.248C479.655 62.784 482.342 63.552 485.35 63.552Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M520.223 63.168C519.647 62.272 519.359 61.408 519.359 60.576C519.359 59.296 520.031 58.208 521.375 57.312C522.015 56.864 522.751 56.64 523.583 56.64C524.735 56.64 525.791 57.12 526.751 58.08C528.671 60.256 530.719 61.888 532.895 62.976C535.135 64.064 537.791 64.608 540.863 64.608C543.295 64.544 545.439 64 547.295 62.976C549.151 61.888 550.079 60.16 550.079 57.792C550.079 55.616 549.119 53.952 547.199 52.8C545.343 51.648 542.591 50.592 538.943 49.632C535.359 48.672 532.383 47.68 530.015 46.656C527.647 45.568 525.631 44.032 523.967 42.048C522.367 40 521.567 37.344 521.567 34.08C521.567 31.2 522.367 28.672 523.967 26.496C525.631 24.32 527.807 22.624 530.495 21.408C533.247 20.192 536.223 19.584 539.423 19.584C542.495 19.584 545.535 20.16 548.543 21.312C551.615 22.464 554.111 24.224 556.031 26.592C556.799 27.488 557.183 28.416 557.183 29.376C557.183 30.4 556.671 31.392 555.647 32.352C555.007 32.928 554.207 33.216 553.247 33.216C552.095 33.216 551.167 32.832 550.463 32.064C549.119 30.528 547.455 29.344 545.471 28.512C543.551 27.68 541.407 27.264 539.039 27.264C536.607 27.264 534.527 27.776 532.799 28.8C531.135 29.76 530.303 31.424 530.303 33.792C530.367 36.032 531.327 37.696 533.183 38.784C535.103 39.872 538.015 40.928 541.919 41.952C545.311 42.848 548.127 43.808 550.367 44.832C552.607 45.856 554.495 47.392 556.031 49.44C557.567 51.424 558.335 54.048 558.335 57.312C558.335 60.32 557.471 62.944 555.743 65.184C554.015 67.36 551.743 69.056 548.927 70.272C546.175 71.424 543.231 72 540.095 72C536.063 72 532.319 71.296 528.863 69.888C525.471 68.48 522.591 66.24 520.223 63.168Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M593.909 19.872C605.173 19.872 610.805 26.848 610.805 40.8V66.432C610.805 67.712 610.357 68.8 609.461 69.696C608.629 70.592 607.541 71.04 606.197 71.04C604.917 71.04 603.829 70.592 602.933 69.696C602.101 68.8 601.685 67.712 601.685 66.432V40.8C601.685 32.48 598.165 28.32 591.125 28.32C587.349 28.32 584.213 29.536 581.717 31.968C579.221 34.336 577.973 37.28 577.973 40.8V66.432C577.973 67.712 577.525 68.8 576.629 69.696C575.797 70.592 574.709 71.04 573.365 71.04C572.021 71.04 570.933 70.624 570.101 69.792C569.269 68.896 568.853 67.776 568.853 66.432V4.608C568.853 3.328 569.269 2.24 570.101 1.344C570.997 0.448 572.085 0 573.365 0C574.709 0 575.797 0.448 576.629 1.344C577.525 2.24 577.973 3.328 577.973 4.608V28.896C579.573 26.4 581.813 24.288 584.693 22.56C587.573 20.768 590.645 19.872 593.909 19.872Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M43.872 0C45.216 0 46.304 0.448 47.136 1.344C48.032 2.176 48.48 3.264 48.48 4.608V66.432C48.48 67.712 48.032 68.8 47.136 69.696C46.304 70.592 45.216 71.04 43.872 71.04C42.528 71.04 41.44 70.624 40.608 69.792C39.776 68.896 39.36 67.776 39.36 66.432V63.744C37.76 66.048 35.488 68 32.544 69.6C29.664 71.2 26.56 72 23.232 72C18.88 72 14.944 70.88 11.424 68.64C7.904 66.4 5.12 63.296 3.072 59.328C1.024 55.296 0 50.784 0 45.792C0 40.8 0.992 36.32 2.976 32.352C5.024 28.32 7.808 25.184 11.328 22.944C14.848 20.704 18.72 19.584 22.944 19.584C26.336 19.584 29.472 20.288 32.352 21.696C35.232 23.104 37.568 24.928 39.36 27.168V4.608C39.36 3.264 39.776 2.176 40.608 1.344C41.44 0.448 42.528 0 43.872 0ZM24.288 63.552C27.296 63.552 29.952 62.784 32.256 61.248C34.624 59.712 36.448 57.6 37.728 54.912C39.072 52.224 39.744 49.184 39.744 45.792C39.744 42.464 39.072 39.456 37.728 36.768C36.448 34.016 34.624 31.872 32.256 30.336C29.952 28.8 27.296 28.032 24.288 28.032C21.28 28.032 18.592 28.8 16.224 30.336C13.92 31.872 12.096 34.016 10.752 36.768C9.472 39.456 8.832 42.464 8.832 45.792C8.832 49.184 9.472 52.224 10.752 54.912C12.096 57.6 13.92 59.712 16.224 61.248C18.592 62.784 21.28 63.552 24.288 63.552Z",
        stroke: "black",
        strokeWidth: "2",
        mask: "url(#path-1-outside-1)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M70.6807 66.432C70.6807 67.712 70.2327 68.8 69.3367 69.696C68.5047 70.592 67.4168 71.04 66.0728 71.04C64.7928 71.04 63.7048 70.592 62.8088 69.696C61.9767 68.8 61.5607 67.712 61.5607 66.432V24.864C61.5607 23.584 61.9767 22.496 62.8088 21.6C63.7048 20.704 64.7928 20.256 66.0728 20.256C67.4168 20.256 68.5047 20.704 69.3367 21.6C70.2327 22.496 70.6807 23.584 70.6807 24.864V66.432ZM66.0728 13.92C64.2168 13.92 62.8727 13.6 62.0407 12.96C61.2727 12.256 60.8888 11.168 60.8888 9.696V8.16C60.8888 6.624 61.3047 5.536 62.1367 4.896C63.0327 4.256 64.3767 3.936 66.1687 3.936C67.9607 3.936 69.2408 4.288 70.0088 4.992C70.8408 5.632 71.2568 6.688 71.2568 8.16V9.696C71.2568 11.232 70.8408 12.32 70.0088 12.96C69.1768 13.6 67.8648 13.92 66.0728 13.92Z",
        stroke: "black",
        strokeWidth: "2",
        mask: "url(#path-1-outside-1)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M122.191 20.256C123.407 20.256 124.431 20.672 125.263 21.504C126.095 22.272 126.511 23.2 126.511 24.288C126.511 24.864 126.287 25.664 125.839 26.688L107.599 68.16C107.215 68.992 106.671 69.664 105.967 70.176C105.263 70.688 104.495 70.976 103.663 71.04C102.639 71.168 101.679 70.976 100.783 70.464C99.9508 69.952 99.3108 69.184 98.8628 68.16L80.6227 26.688C80.3027 25.728 80.1428 24.928 80.1428 24.288C80.1428 23.264 80.5587 22.336 81.3907 21.504C82.2227 20.672 83.3107 20.256 84.6547 20.256C85.6147 20.256 86.4788 20.512 87.2467 21.024C88.0147 21.472 88.6227 22.176 89.0707 23.136L103.567 56.832L118.063 23.136C118.959 21.216 120.335 20.256 122.191 20.256Z",
        stroke: "black",
        strokeWidth: "2",
        mask: "url(#path-1-outside-1)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M173.825 20.256C175.169 20.256 176.257 20.704 177.089 21.6C177.984 22.496 178.432 23.584 178.432 24.864V66.336C178.432 74.336 176.225 80.32 171.809 84.288C167.393 88.256 161.568 90.24 154.337 90.24C151.969 90.24 149.633 90.016 147.329 89.568C145.025 89.12 143.137 88.512 141.665 87.744C139.297 86.656 138.113 85.184 138.113 83.328C138.113 83.008 138.176 82.592 138.305 82.08C138.689 80.992 139.232 80.16 139.936 79.584C140.64 79.008 141.441 78.72 142.337 78.72C142.848 78.72 143.329 78.816 143.777 79.008C145.76 79.904 147.521 80.608 149.057 81.12C150.592 81.632 152.384 81.888 154.432 81.888C164.352 81.888 169.312 76.8 169.312 66.624V64.704C167.585 67.008 165.344 68.8 162.592 70.08C159.904 71.36 156.801 72 153.281 72C147.969 72 143.809 70.304 140.801 66.912C137.857 63.52 136.385 59.072 136.385 53.568V24.864C136.385 23.52 136.801 22.432 137.633 21.6C138.465 20.704 139.553 20.256 140.896 20.256C142.24 20.256 143.329 20.704 144.161 21.6C145.057 22.496 145.505 23.584 145.505 24.864V51.168C145.505 55.392 146.432 58.528 148.288 60.576C150.145 62.56 152.96 63.552 156.736 63.552C160.384 63.552 163.393 62.4 165.76 60.096C168.128 57.792 169.312 54.816 169.312 51.168V24.864C169.312 23.52 169.729 22.432 170.561 21.6C171.393 20.704 172.481 20.256 173.825 20.256Z",
        stroke: "black",
        strokeWidth: "2",
        mask: "url(#path-1-outside-1)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M236.622 20.064C237.966 20.064 239.054 20.512 239.886 21.408C240.782 22.24 241.23 23.36 241.23 24.768V66.432C241.23 67.712 240.782 68.8 239.886 69.696C239.054 70.592 237.966 71.04 236.622 71.04C235.278 71.04 234.19 70.624 233.358 69.792C232.526 68.896 232.11 67.776 232.11 66.432V63.936C230.446 66.176 228.174 68.096 225.294 69.696C222.414 71.232 219.31 72 215.982 72C211.63 72 207.662 70.88 204.078 68.64C200.558 66.4 197.774 63.296 195.726 59.328C193.742 55.296 192.75 50.784 192.75 45.792C192.75 40.8 193.742 36.32 195.726 32.352C197.774 28.32 200.558 25.184 204.078 22.944C207.598 20.704 211.47 19.584 215.694 19.584C219.086 19.584 222.222 20.288 225.102 21.696C228.046 23.104 230.382 24.896 232.11 27.072V24.768C232.11 23.424 232.526 22.304 233.358 21.408C234.19 20.512 235.278 20.064 236.622 20.064ZM217.038 63.552C220.046 63.552 222.702 62.784 225.006 61.248C227.374 59.712 229.198 57.6 230.478 54.912C231.822 52.224 232.494 49.184 232.494 45.792C232.494 42.464 231.822 39.456 230.478 36.768C229.198 34.08 227.374 31.968 225.006 30.432C222.702 28.832 220.046 28.032 217.038 28.032C214.03 28.032 211.342 28.8 208.974 30.336C206.67 31.872 204.846 33.984 203.502 36.672C202.222 39.36 201.582 42.4 201.582 45.792C201.582 49.184 202.222 52.224 203.502 54.912C204.846 57.6 206.67 59.712 208.974 61.248C211.342 62.784 214.03 63.552 217.038 63.552Z",
        stroke: "black",
        strokeWidth: "2",
        mask: "url(#path-1-outside-1)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M280.039 19.872C284.391 19.872 288.327 20.992 291.847 23.232C295.367 25.408 298.119 28.48 300.103 32.448C302.151 36.416 303.175 40.896 303.175 45.888C303.175 50.88 302.151 55.36 300.103 59.328C298.119 63.232 295.367 66.304 291.847 68.544C288.327 70.784 284.455 71.904 280.231 71.904C276.903 71.904 273.799 71.168 270.919 69.696C268.039 68.224 265.703 66.432 263.911 64.32V85.632C263.911 86.912 263.463 88 262.567 88.896C261.735 89.792 260.647 90.24 259.303 90.24C258.023 90.24 256.935 89.792 256.039 88.896C255.207 88.064 254.791 86.976 254.791 85.632V25.248C254.791 23.904 255.207 22.784 256.039 21.888C256.871 20.992 257.959 20.544 259.303 20.544C260.647 20.544 261.735 20.992 262.567 21.888C263.463 22.784 263.911 23.904 263.911 25.248V28.032C265.447 25.792 267.687 23.872 270.631 22.272C273.575 20.672 276.711 19.872 280.039 19.872ZM278.983 63.456C281.927 63.456 284.583 62.688 286.951 61.152C289.319 59.616 291.143 57.536 292.423 54.912C293.767 52.224 294.439 49.216 294.439 45.888C294.439 42.56 293.767 39.584 292.423 36.96C291.143 34.272 289.319 32.16 286.951 30.624C284.583 29.088 281.927 28.32 278.983 28.32C275.975 28.32 273.287 29.088 270.919 30.624C268.551 32.096 266.695 34.176 265.351 36.864C264.071 39.552 263.431 42.56 263.431 45.888C263.431 49.216 264.071 52.224 265.351 54.912C266.695 57.6 268.551 59.712 270.919 61.248C273.287 62.72 275.975 63.456 278.983 63.456Z",
        stroke: "black",
        strokeWidth: "2",
        mask: "url(#path-1-outside-1)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M338.815 19.584C340.479 19.584 341.919 20.032 343.135 20.928C344.352 21.76 344.96 22.816 344.96 24.096C344.96 25.632 344.543 26.816 343.711 27.648C342.943 28.416 341.984 28.8 340.832 28.8C340.256 28.8 339.392 28.608 338.24 28.224C336.896 27.776 335.84 27.552 335.072 27.552C333.087 27.552 331.136 28.256 329.216 29.664C327.36 31.008 325.824 32.896 324.608 35.328C323.456 37.696 322.879 40.352 322.879 43.296V66.432C322.879 67.712 322.431 68.8 321.535 69.696C320.703 70.592 319.616 71.04 318.272 71.04C316.928 71.04 315.84 70.624 315.008 69.792C314.176 68.896 313.759 67.776 313.759 66.432V25.344C313.759 24.064 314.176 22.976 315.008 22.08C315.904 21.184 316.992 20.736 318.272 20.736C319.616 20.736 320.703 21.184 321.535 22.08C322.431 22.976 322.879 24.064 322.879 25.344V30.24C324.287 27.104 326.4 24.576 329.216 22.656C332.032 20.672 335.232 19.648 338.815 19.584Z",
        stroke: "black",
        strokeWidth: "2",
        mask: "url(#path-1-outside-1)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M393.091 20.064C394.435 20.064 395.523 20.512 396.355 21.408C397.251 22.24 397.699 23.36 397.699 24.768V66.432C397.699 67.712 397.251 68.8 396.355 69.696C395.523 70.592 394.435 71.04 393.091 71.04C391.747 71.04 390.659 70.624 389.827 69.792C388.995 68.896 388.579 67.776 388.579 66.432V63.936C386.915 66.176 384.643 68.096 381.763 69.696C378.883 71.232 375.779 72 372.451 72C368.099 72 364.131 70.88 360.547 68.64C357.027 66.4 354.243 63.296 352.195 59.328C350.211 55.296 349.219 50.784 349.219 45.792C349.219 40.8 350.211 36.32 352.195 32.352C354.243 28.32 357.027 25.184 360.547 22.944C364.067 20.704 367.939 19.584 372.163 19.584C375.555 19.584 378.691 20.288 381.571 21.696C384.515 23.104 386.851 24.896 388.579 27.072V24.768C388.579 23.424 388.995 22.304 389.827 21.408C390.659 20.512 391.747 20.064 393.091 20.064ZM373.507 63.552C376.515 63.552 379.171 62.784 381.475 61.248C383.843 59.712 385.667 57.6 386.947 54.912C388.291 52.224 388.963 49.184 388.963 45.792C388.963 42.464 388.291 39.456 386.947 36.768C385.667 34.08 383.843 31.968 381.475 30.432C379.171 28.832 376.515 28.032 373.507 28.032C370.499 28.032 367.811 28.8 365.443 30.336C363.139 31.872 361.315 33.984 359.971 36.672C358.691 39.36 358.051 42.4 358.051 45.792C358.051 49.184 358.691 52.224 359.971 54.912C361.315 57.6 363.139 59.712 365.443 61.248C367.811 62.784 370.499 63.552 373.507 63.552Z",
        stroke: "black",
        strokeWidth: "2",
        mask: "url(#path-1-outside-1)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M452.348 63.072C453.307 64.096 453.788 65.216 453.788 66.432C453.788 67.712 453.275 68.8 452.251 69.696C451.292 70.528 450.268 70.944 449.18 70.944C447.772 70.944 446.651 70.432 445.819 69.408L426.908 49.344L421.147 54.528V66.432C421.147 67.712 420.699 68.8 419.803 69.696C418.971 70.592 417.915 71.04 416.635 71.04C415.292 71.04 414.172 70.592 413.276 69.696C412.444 68.8 412.027 67.712 412.027 66.432V4.608C412.027 3.328 412.444 2.24 413.276 1.344C414.172 0.448 415.292 0 416.635 0C417.915 0 418.971 0.448 419.803 1.344C420.699 2.24 421.147 3.328 421.147 4.608V43.584L444.668 21.984C445.756 21.024 446.875 20.544 448.027 20.544C449.116 20.544 450.108 21.024 451.004 21.984C451.9 22.88 452.348 23.84 452.348 24.864C452.348 26.144 451.74 27.296 450.523 28.32L433.915 43.104L452.348 63.072Z",
        stroke: "black",
        strokeWidth: "2",
        mask: "url(#path-1-outside-1)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M504.935 20.064C506.279 20.064 507.367 20.512 508.199 21.408C509.095 22.24 509.543 23.36 509.543 24.768V66.432C509.543 67.712 509.095 68.8 508.199 69.696C507.367 70.592 506.279 71.04 504.935 71.04C503.591 71.04 502.503 70.624 501.671 69.792C500.839 68.896 500.423 67.776 500.423 66.432V63.936C498.759 66.176 496.487 68.096 493.607 69.696C490.727 71.232 487.622 72 484.294 72C479.943 72 475.975 70.88 472.391 68.64C468.871 66.4 466.087 63.296 464.039 59.328C462.055 55.296 461.062 50.784 461.062 45.792C461.062 40.8 462.055 36.32 464.039 32.352C466.087 28.32 468.871 25.184 472.391 22.944C475.91 20.704 479.783 19.584 484.007 19.584C487.398 19.584 490.534 20.288 493.414 21.696C496.358 23.104 498.695 24.896 500.423 27.072V24.768C500.423 23.424 500.839 22.304 501.671 21.408C502.503 20.512 503.591 20.064 504.935 20.064ZM485.35 63.552C488.358 63.552 491.015 62.784 493.319 61.248C495.687 59.712 497.51 57.6 498.79 54.912C500.134 52.224 500.806 49.184 500.806 45.792C500.806 42.464 500.134 39.456 498.79 36.768C497.51 34.08 495.687 31.968 493.319 30.432C491.015 28.832 488.358 28.032 485.35 28.032C482.342 28.032 479.655 28.8 477.286 30.336C474.983 31.872 473.159 33.984 471.815 36.672C470.535 39.36 469.895 42.4 469.895 45.792C469.895 49.184 470.535 52.224 471.815 54.912C473.159 57.6 474.983 59.712 477.286 61.248C479.655 62.784 482.342 63.552 485.35 63.552Z",
        stroke: "black",
        strokeWidth: "2",
        mask: "url(#path-1-outside-1)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M520.223 63.168C519.647 62.272 519.359 61.408 519.359 60.576C519.359 59.296 520.031 58.208 521.375 57.312C522.015 56.864 522.751 56.64 523.583 56.64C524.735 56.64 525.791 57.12 526.751 58.08C528.671 60.256 530.719 61.888 532.895 62.976C535.135 64.064 537.791 64.608 540.863 64.608C543.295 64.544 545.439 64 547.295 62.976C549.151 61.888 550.079 60.16 550.079 57.792C550.079 55.616 549.119 53.952 547.199 52.8C545.343 51.648 542.591 50.592 538.943 49.632C535.359 48.672 532.383 47.68 530.015 46.656C527.647 45.568 525.631 44.032 523.967 42.048C522.367 40 521.567 37.344 521.567 34.08C521.567 31.2 522.367 28.672 523.967 26.496C525.631 24.32 527.807 22.624 530.495 21.408C533.247 20.192 536.223 19.584 539.423 19.584C542.495 19.584 545.535 20.16 548.543 21.312C551.615 22.464 554.111 24.224 556.031 26.592C556.799 27.488 557.183 28.416 557.183 29.376C557.183 30.4 556.671 31.392 555.647 32.352C555.007 32.928 554.207 33.216 553.247 33.216C552.095 33.216 551.167 32.832 550.463 32.064C549.119 30.528 547.455 29.344 545.471 28.512C543.551 27.68 541.407 27.264 539.039 27.264C536.607 27.264 534.527 27.776 532.799 28.8C531.135 29.76 530.303 31.424 530.303 33.792C530.367 36.032 531.327 37.696 533.183 38.784C535.103 39.872 538.015 40.928 541.919 41.952C545.311 42.848 548.127 43.808 550.367 44.832C552.607 45.856 554.495 47.392 556.031 49.44C557.567 51.424 558.335 54.048 558.335 57.312C558.335 60.32 557.471 62.944 555.743 65.184C554.015 67.36 551.743 69.056 548.927 70.272C546.175 71.424 543.231 72 540.095 72C536.063 72 532.319 71.296 528.863 69.888C525.471 68.48 522.591 66.24 520.223 63.168Z",
        stroke: "black",
        strokeWidth: "2",
        mask: "url(#path-1-outside-1)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M593.909 19.872C605.173 19.872 610.805 26.848 610.805 40.8V66.432C610.805 67.712 610.357 68.8 609.461 69.696C608.629 70.592 607.541 71.04 606.197 71.04C604.917 71.04 603.829 70.592 602.933 69.696C602.101 68.8 601.685 67.712 601.685 66.432V40.8C601.685 32.48 598.165 28.32 591.125 28.32C587.349 28.32 584.213 29.536 581.717 31.968C579.221 34.336 577.973 37.28 577.973 40.8V66.432C577.973 67.712 577.525 68.8 576.629 69.696C575.797 70.592 574.709 71.04 573.365 71.04C572.021 71.04 570.933 70.624 570.101 69.792C569.269 68.896 568.853 67.776 568.853 66.432V4.608C568.853 3.328 569.269 2.24 570.101 1.344C570.997 0.448 572.085 0 573.365 0C574.709 0 575.797 0.448 576.629 1.344C577.525 2.24 577.973 3.328 577.973 4.608V28.896C579.573 26.4 581.813 24.288 584.693 22.56C587.573 20.768 590.645 19.872 593.909 19.872Z",
        stroke: "black",
        strokeWidth: "2",
        mask: "url(#path-1-outside-1)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
      mask: "url(#mask0)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
        width: "611",
        height: "90",
        fill: "url(#paint0_linear)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint0_linear",
        x1: "-9.69436e-07",
        y1: "44.7205",
        x2: "611",
        y2: "44.7205",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0%",
          stopColor: "#CA6BA4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "".concat(progress < 50 ? 2 * progress : 100, "%"),
          stopColor: "#3919BB",
          stopOpacity: "".concat(progress < 50 ? 0 : 2 * (progress - 50), "%")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 3
  }, _this);
};

_c = Name;
/* harmony default export */ __webpack_exports__["default"] = (Name);

var _c;

$RefreshReg$(_c, "Name");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/pc.js":
/*!**************************!*\
  !*** ./components/pc.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\github\\divyaprakashrx\\components\\pc.js",
    _this = undefined;



var _require = __webpack_require__(/*! @lottiefiles/react-lottie-player */ "./node_modules/@lottiefiles/react-lottie-player/dist/lottie-react.esm.js"),
    Player = _require.Player,
    Controls = _require.Controls;

var PC = function PC() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Player, {
    autoplay: true,
    loop: true,
    src: "https://assets6.lottiefiles.com/packages/lf20_w51pcehl.json",
    style: {
      height: "30vh",
      width: "30vh"
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }, _this);
};

_c = PC;
/* harmony default export */ __webpack_exports__["default"] = (PC);

var _c;

$RefreshReg$(_c, "PC");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _slicedToArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

var _toConsumableArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _s = $RefreshSig$();

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "./node_modules/next/dist/shared/lib/head.js"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "./node_modules/next/dist/shared/lib/to-base-64.js");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "./node_modules/next/dist/server/image-config.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var loadedImageURLs = new Set();

if (false) {}

var VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
var loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
var VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src["default"] !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

var _ref = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault,
    configDeviceSizes = _ref.deviceSizes,
    configImageSizes = _ref.imageSizes,
    configLoader = _ref.loader,
    configPath = _ref.path,
    configDomains = _ref.domains; // sort smallest to largest


var allSizes = [].concat(_toConsumableArray(configDeviceSizes), _toConsumableArray(configImageSizes));
configDeviceSizes.sort(function (a, b) {
  return a - b;
});
allSizes.sort(function (a, b) {
  return a - b;
});

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    var viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    var percentSizes = [];

    for (var match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      var smallestRatio = Math.min.apply(Math, percentSizes) * 0.01;
      return {
        widths: allSizes.filter(function (s) {
          return s >= configDeviceSizes[0] * smallestRatio;
        }),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  var widths = _toConsumableArray(new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(function (w) {
    return allSizes.find(function (p) {
      return p >= w;
    }) || allSizes[allSizes.length - 1];
  })));

  return {
    widths: widths,
    kind: 'x'
  };
}

function generateImgAttrs(_ref2) {
  var src = _ref2.src,
      unoptimized = _ref2.unoptimized,
      layout = _ref2.layout,
      width = _ref2.width,
      quality = _ref2.quality,
      sizes = _ref2.sizes,
      loader = _ref2.loader;

  if (unoptimized) {
    return {
      src: src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  var _getWidths = getWidths(width, layout, sizes),
      widths = _getWidths.widths,
      kind = _getWidths.kind;

  var last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map(function (w, i) {
      return "".concat(loader({
        src: src,
        quality: quality,
        width: w
      }), " ").concat(kind === 'w' ? w : i + 1).concat(kind);
    }).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src: src,
      quality: quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  var load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error("Unknown \"loader\" found in \"next.config.js\". Expected: ".concat(_imageConfig.VALID_LOADERS.join(', '), ". Received: ").concat(configLoader));
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, layout, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  var handleLoad = function handleLoad() {
    if (!img.src.startsWith('data:')) {
      var p = 'decode' in img ? img.decode() : Promise.resolve();
      p["catch"](function () {}).then(function () {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          var naturalWidth = img.naturalWidth,
              naturalHeight = img.naturalHeight; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth: naturalWidth,
            naturalHeight: naturalHeight
          });
        }

        if (true) {
          var ref;

          if ((ref = img.parentElement) === null || ref === void 0 ? void 0 : ref.parentElement) {
            var parent = getComputedStyle(img.parentElement.parentElement);

            if (layout === 'responsive' && parent.display === 'flex') {
              console.warn("Image with src \"".concat(src, "\" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width."));
            } else if (layout === 'fill' && parent.position !== 'relative') {
              console.warn("Image with src \"".concat(src, "\" may not render properly with a parent using position:\"").concat(parent.position, "\". Consider changing the parent style to position:\"relative\" with a width and height."));
            }
          }
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  _s();

  var src = _param.src,
      sizes = _param.sizes,
      _param$unoptimized = _param.unoptimized,
      unoptimized = _param$unoptimized === void 0 ? false : _param$unoptimized,
      _param$priority = _param.priority,
      priority = _param$priority === void 0 ? false : _param$priority,
      loading = _param.loading,
      _param$lazyBoundary = _param.lazyBoundary,
      lazyBoundary = _param$lazyBoundary === void 0 ? '200px' : _param$lazyBoundary,
      className = _param.className,
      quality = _param.quality,
      width = _param.width,
      height = _param.height,
      objectFit = _param.objectFit,
      objectPosition = _param.objectPosition,
      onLoadingComplete = _param.onLoadingComplete,
      _param$loader = _param.loader,
      loader = _param$loader === void 0 ? defaultImageLoader : _param$loader,
      _param$placeholder = _param.placeholder,
      placeholder = _param$placeholder === void 0 ? 'empty' : _param$placeholder,
      blurDataURL = _param.blurDataURL,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  var rest = all;
  var layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  var staticSrc = '';

  if (isStaticImport(src)) {
    var staticImageData = isStaticRequire(src) ? src["default"] : src;

    if (!staticImageData.src) {
      throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(staticImageData)));
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(staticImageData)));
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  var widthInt = getInt(width);
  var heightInt = getInt(height);
  var qualityInt = getInt(quality);
  var isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if ( true && loadedImageURLs.has(src)) {
    isLazy = false;
  }

  if (true) {
    if (!src) {
      throw new Error("Image is missing required \"src\" property. Make sure you pass \"src\" in props to the `next/image` component. Received: ".concat(JSON.stringify({
        width: width,
        height: height,
        quality: quality
      })));
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error("Image with src \"".concat(src, "\" has invalid \"layout\" property. Provided \"").concat(layout, "\" should be one of ").concat(VALID_LAYOUT_VALUES.map(String).join(','), "."));
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error("Image with src \"".concat(src, "\" has invalid \"width\" or \"height\" property. These should be numeric values."));
    }

    if (layout === 'fill' && (width || height)) {
      console.warn("Image with src \"".concat(src, "\" and \"layout='fill'\" has unused properties assigned. Please remove \"width\" and \"height\"."));
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error("Image with src \"".concat(src, "\" has invalid \"loading\" property. Provided \"").concat(loading, "\" should be one of ").concat(VALID_LOADING_VALUES.map(String).join(','), "."));
    }

    if (priority && loading === 'lazy') {
      throw new Error("Image with src \"".concat(src, "\" has both \"priority\" and \"loading='lazy'\" properties. Only one should be used."));
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn("Image with src \"".concat(src, "\" is smaller than 40x40. Consider removing the \"placeholder='blur'\" property to improve performance."));
      }

      if (!blurDataURL) {
        var VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error("Image with src \"".concat(src, "\" has \"placeholder='blur'\" property but is missing the \"blurDataURL\" property.\n          Possible solutions:\n            - Add a \"blurDataURL\" property, the contents should be a small Data URL to represent the image\n            - Change the \"src\" property to a static import with one of the supported file types: ").concat(VALID_BLUR_EXT.join(','), "\n            - Remove the \"placeholder\" property, effectively no blur effect\n          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url"));
      }
    }

    if ('ref' in rest) {
      console.warn("Image with src \"".concat(src, "\" is using unsupported \"ref\" property. Consider using the \"onLoadingComplete\" property instead."));
    }

    if ('style' in rest) {
      console.warn("Image with src \"".concat(src, "\" is using unsupported \"style\" property. Please use the \"className\" property instead."));
    }

    var rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src: src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn("Image with src \"".concat(src, "\" has a \"loader\" property that does not implement width. Please implement it or use the \"unoptimized\" property instead.") + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width");
    }
  }

  var _useIntersection2 = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  }),
      _useIntersection3 = _slicedToArray(_useIntersection2, 2),
      setRef = _useIntersection3[0],
      isIntersected = _useIntersection3[1];

  var isVisible = !isLazy || isIntersected;
  var wrapperStyle;
  var sizerStyle;
  var sizerSvg;
  var imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit: objectFit,
    objectPosition: objectPosition
  };
  var blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: "url(\"".concat(blurDataURL, "\")"),
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    var quotient = heightInt / widthInt;
    var paddingTop = isNaN(quotient) ? '100%' : "".concat(quotient * 100, "%");

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop: paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = "<svg width=\"".concat(widthInt, "\" height=\"").concat(heightInt, "\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\"/>");
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error("Image with src \"".concat(src, "\" must use \"width\" and \"height\" properties or \"layout='fill'\" property."));
    }
  }

  var imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src: src,
      unoptimized: unoptimized,
      layout: layout,
      width: widthInt,
      quality: qualityInt,
      sizes: sizes,
      loader: loader
    });
  }

  var srcString = src;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react["default"].createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react["default"].createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: "data:image/svg+xml;base64,".concat((0, _toBase64).toBase64(sizerSvg))
  }) : null) : null, /*#__PURE__*/_react["default"].createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": layout,
    className: className,
    ref: function ref(img) {
      setRef(img);
      handleLoading(img, srcString, layout, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), /*#__PURE__*/_react["default"].createElement("noscript", null, /*#__PURE__*/_react["default"].createElement("img", Object.assign({}, rest, generateImgAttrs({
    src: src,
    unoptimized: unoptimized,
    layout: layout,
    width: widthInt,
    quality: qualityInt,
    sizes: sizes,
    loader: loader
  }), {
    decoding: "async",
    "data-nimg": layout,
    style: imgStyle,
    className: className,
    loading: loading || 'lazy'
  }))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

_s(Image1, "rFIOgppSfupgvwPAyVzXOuq2aig=", true);

_c = Image1;

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader(_ref3) {
  var root = _ref3.root,
      src = _ref3.src,
      width = _ref3.width,
      quality = _ref3.quality;
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  var url = new URL("".concat(root).concat(normalizeSrc(src)));
  var params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader(_ref4) {
  var root = _ref4.root,
      src = _ref4.src,
      width = _ref4.width;
  return "".concat(root).concat(normalizeSrc(src), "?imwidth=").concat(width);
}

function cloudinaryLoader(_ref5) {
  var root = _ref5.root,
      src = _ref5.src,
      width = _ref5.width,
      quality = _ref5.quality;
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  var params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  var paramsString = params.join(',') + '/';
  return "".concat(root).concat(paramsString).concat(normalizeSrc(src));
}

function customLoader(_ref6) {
  var src = _ref6.src;
  throw new Error("Image with src \"".concat(src, "\" is missing \"loader\" prop.") + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader");
}

function defaultLoader(_ref7) {
  var root = _ref7.root,
      src = _ref7.src,
      width = _ref7.width,
      quality = _ref7.quality;

  if (true) {
    var missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error("Next Image Optimization requires ".concat(missingValues.join(', '), " to be provided. Make sure you pass them as props to the `next/image` component. Received: ").concat(JSON.stringify({
        src: src,
        width: width,
        quality: quality
      })));
    }

    if (src.startsWith('//')) {
      throw new Error("Failed to parse src \"".concat(src, "\" on `next/image`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)"));
    }

    if (!src.startsWith('/') && configDomains) {
      var parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error("Failed to parse src \"".concat(src, "\" on `next/image`, if using relative image it must start with a leading slash \"/\" or be an absolute URL (http:// or https://)"));
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error("Invalid src prop (".concat(src, ") on `next/image`, hostname \"").concat(parsedSrc.hostname, "\" is not configured under images in your `next.config.js`\n") + "See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host");
      }
    }
  }

  return "".concat(root, "?url=").concat(encodeURIComponent(src), "&w=").concat(width, "&q=").concat(quality || 75);
}

var _c;

$RefreshReg$(_c, "Image1");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

var requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

var cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _slicedToArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

var _s = $RefreshSig$();

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

var hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection(_ref) {
  _s();

  var rootMargin = _ref.rootMargin,
      disabled = _ref.disabled;
  var isDisabled = disabled || !hasIntersectionObserver;
  var unobserve = (0, _react).useRef();

  var _useState = (0, _react).useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var setRef = (0, _react).useCallback(function (el) {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, function (isVisible) {
        return isVisible && setVisible(isVisible);
      }, {
        rootMargin: rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(function () {
    if (!hasIntersectionObserver) {
      if (!visible) {
        var idleCallback = (0, _requestIdleCallback).requestIdleCallback(function () {
          return setVisible(true);
        });
        return function () {
          return (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
        };
      }
    }
  }, [visible]);
  return [setRef, visible];
}

_s(useIntersection, "Z6jj7qx+KE6gD9CpC9WlQTha45o=");

function observe(element, callback, options) {
  var _createObserver = createObserver(options),
      id = _createObserver.id,
      observer = _createObserver.observer,
      elements = _createObserver.elements;

  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements["delete"](element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers["delete"](id);
    }
  };
}

var observers = new Map();

function createObserver(options) {
  var id = options.rootMargin || '';
  var instance = observers.get(id);

  if (instance) {
    return instance;
  }

  var elements = new Map();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var callback = elements.get(entry.target);
      var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id: id,
    observer: observer,
    elements: elements
  });
  return instance;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/shared/lib/amp-context.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/amp-context.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = _react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/shared/lib/amp.js":
/*!**************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/amp.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _s = $RefreshSig$();

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/shared/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/shared/lib/head-manager-context.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/head-manager-context.js ***!
  \*******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = _react["default"].createContext({});

exports.HeadManagerContext = HeadManagerContext;

if (true) {
  HeadManagerContext.displayName = 'HeadManagerContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/shared/lib/head.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/head.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js");

var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultHead = defaultHead;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/shared/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/shared/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/shared/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/shared/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;
    var hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */


function Head(_ref) {
  _s();

  var children = _ref.children;
  var ampState = (0, _react).useContext(_ampContext.AmpStateContext);
  var headManager = (0, _react).useContext(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp).isInAmpMode(ampState)
  }, children);
}

_s(Head, "sCUayZmr5V93tUjujy03KdMBCec=");

_c = Head;
var _default = Head;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/shared/lib/side-effect.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/side-effect.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _toConsumableArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _class = /*#__PURE__*/function (_react$Component) {
  _inherits(_class, _react$Component);

  var _super = _createSuper(_class);

  function _class(props) {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this, props);

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(_toConsumableArray(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));

      _this.emitChange();
    }

    return _this;
  }

  _createClass(_class, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/shared/lib/to-base-64.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/to-base-64.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.toBase64 = toBase64;

function toBase64(str) {
  if (false) {} else {
    return window.btoa(str);
  }
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/loading */ "./components/loading.js");
/* harmony import */ var _components_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/name */ "./components/name.js");
/* harmony import */ var _components_pc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pc */ "./components/pc.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\github\\divyaprakashrx\\pages\\index.js";







function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("loading", {
    style: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      background: "url('/images/R.jpg')",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_pc__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";

var assign = Object.assign.bind(Object);
module.exports = assign;
module.exports.default = module.exports;

//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=D%3A%5Cgithub%5Cdivyaprakashrx%5Cpages%5Cindex.js!":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=D%3A%5Cgithub%5Cdivyaprakashrx%5Cpages%5Cindex.js! ***!
  \***************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(/*! ./pages/index.js */ "./pages/index.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/server/image-config.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/server/image-config.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.imageConfigDefault = exports.VALID_LOADERS = void 0;
const VALID_LOADERS = [
    'default',
    'imgix',
    'cloudinary',
    'akamai',
    'custom', 
];
exports.VALID_LOADERS = VALID_LOADERS;
const imageConfigDefault = {
    deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ],
    imageSizes: [
        16,
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ],
    path: '/_next/image',
    loader: 'default',
    domains: [],
    disableStaticImages: false,
    minimumCacheTTL: 60
};
exports.imageConfigDefault = imageConfigDefault;

//# sourceMappingURL=image-config.js.map

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ "./node_modules/next/dist/shared/lib/head.js")


/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \***********************************************************************************/
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \*********************************************************************************/
/***/ (function(module) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*********************************************************************************/
/***/ (function(module) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js ***!
  \******************************************************************************/
/***/ (function(module) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*********************************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \*********************************************************************************/
/***/ (function(module) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports.default = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \**********************************************************************************/
/***/ (function(module) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \***************************************************************************************/
/***/ (function(module) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \**********************************************************************************/
/***/ (function(module) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \************************************************************************************/
/***/ (function(module) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \********************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js").default;

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \*********************************************************************************/
/***/ (function(module) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports.default = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \*********************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.2';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=D%3A%5Cgithub%5Cdivyaprakashrx%5Cpages%5Cindex.js!"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);