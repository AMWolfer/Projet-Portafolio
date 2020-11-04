(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"./app/gamma/src/util/cross-flow-essentials.ts":function(e,n,t){"use strict";t.r(n),t.d(n,"getTenantlessProductStoreUrl",(function(){return l})),t.d(n,"getTenantlessCrossFlowUrl",(function(){return d})),t.d(n,"UtmCampaign",(function(){return u})),t.d(n,"setLocationToWacSoftware",(function(){return f})),t.d(n,"setLocationToTryProduct",(function(){return m})),t.d(n,"getSuggestedSiteNames",(function(){return v})),t.d(n,"getCrossFlowEssentialsV2Props",(function(){return b})),t.d(n,"SWITCHER_AVAILABLE_PRODUCTS_URL",(function(){return w})),t.d(n,"AVAILABLE_SITES_PROXY_URL",(function(){return g})),t.d(n,"getAvailableSites",(function(){return y}));var r=t("./packages/config/index.ts"),o=t("./packages/atlassian-analytics/index.ts"),a=t("./node_modules/@atlassiansox/cross-flow-support/dist/esm/index.js");function i(e,n,t,r,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void t(e)}s.done?n(c):Promise.resolve(c).then(r,o)}function s(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,n){if(!e)return;if("string"==typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,n)}(e))){var n=0,t=function(){};return{s:t,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,a=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){i=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(i)throw o}}}}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var u,l=function(){var e=new URL(r.atlassianApiGateway);return e.pathname="gpa-product-store/tenantless.html",e.toString()},d=function(){var e=new URL(r.atlassianApiGateway);return e.pathname="gpa-cross-flow/",e.toString()};!function(e){e.ATLASSIAN_SWITCHER="atlassian_switcher",e.PRODUCT_STORE="product_store",e.CROSSFLOW_ESSENTIALS="cross_flow_essentials_v2",e.TOUCHPOINTS_JSW_BOARD="trello_jsw_touchpoints_board",e.TOUCHPOINTS_JSW_POWERUPS="trello_jsw_touchpoints_powerups",e.TOUCHPOINTS_JSW_TEMPLATES="trello_jsw_touchpoints_templates",e.TOUCHPOINTS_JSW_SWITCHER="trello_jsw_touchpoints_switcher",e.TOUCHPOINTS_CONFLUENCE_SWITCHER="trello_confluence_touchpoints_switcher",e.TOUCHPOINTS_CONFLUENCE_POWERUPS="trello_confluence_touchpoints_powerups"}(u||(u={}));var p=function(e){var n=e.campaign;return"utm_source=trello&utm_medium=in_product_ad&utm_campaign=".concat(n)},f=function(e){var n=p(e);window.open("".concat(r.wacUrl,"/software?").concat(n),"_blank")},m=function(e,n){var t=p(n);if(e!==a.a.OPSGENIE){var o={[a.a.JIRA_SOFTWARE]:"jira-software",[a.a.JIRA_SERVICE_DESK]:"jira-service-desk",[a.a.CONFLUENCE]:"confluence"}[e];o?window.open("".concat(r.wacUrl,"/try/cloud/signup?bundle=").concat(o,"&edition=free&").concat(t),"_blank"):f(n)}else window.open("".concat(r.wacUrl,"/software/opsgenie/try?").concat(t),"_blank")},v=function(e,n,t){var r=[];function o(e){r.length<5&&r.push(e)}var a,i=s(e);try{var c=function(){var e=a.value;if(5===r.length)return"break";r.push(e.displayName);var t=n.filter((function(n){return n.idEnterprise===e.id}));t.forEach((function(n){o("".concat(e.displayName,"-").concat(n.displayName))})),t.forEach((function(e){o(e.displayName)}))};for(i.s();!(a=i.n()).done;){if("break"===c())break}}catch(e){i.e(e)}finally{i.f()}return n.forEach((function(e){e.idEnterprise||o(e.displayName)})),t&&t.name&&o(t.name),r},b=function(e){switch(e){case"variation-free":return{isCrossFlowV2Enabled:!0,edition:"free"};case"variation-standard":return{isCrossFlowV2Enabled:!0,edition:"standard"};default:return{isCrossFlowV2Enabled:!1}}},w="".concat(r.atlassianApiGateway,"gateway/api/available-products/api/available-products"),g="".concat(r.siteDomain,"/proxy/experiment-api/trello-cross-product-join/available-sites"),y=function(){var e,n=(e=regeneratorRuntime.mark((function e(n){var t,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=n?w:g,e.next=4,fetch(t,{method:"GET",credentials:"include",headers:{"X-Trello-Client-Version":r.clientVersion}});case 4:if(!(a=e.sent).ok){e.next=7;break}return e.abrupt("return",a.json());case 7:throw new Error("unauthorized");case 10:return e.prev=10,e.t0=e.catch(0),o.Analytics.sendOperationalEvent({action:"errored",actionSubject:"fetchAvailableSites",source:"crossFlowOverlay"}),e.abrupt("return",{sites:[]});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})),function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function s(e){i(a,r,o,s,c,"next",e)}function c(e){i(a,r,o,s,c,"throw",e)}s(void 0)}))});return function(e){return n.apply(this,arguments)}}()},"./app/src/components/CrossFlowProvider/CrossFlowProvider.tsx":function(e,n,t){"use strict";t.r(n),t.d(n,"CrossFlowProvider",(function(){return w}));var r=t("./node_modules/react/index.js"),o=t.n(r),a=t("./app/gamma/src/util/cross-flow-essentials.ts"),i=t("./packages/config/index.ts"),s=t("./node_modules/@atlassiansox/cross-flow-support/dist/esm/trello.js"),c=t("./packages/atlassian-analytics/index.ts"),u="GetSuggestedSiteNames",l="GetAvailableSites",d=t("./packages/error-reporting/index.ts"),p=t("./app/src/components/CrossFlowProvider/CrossFlowProviderQuery.generated.tsx");function f(e,n,t,r,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void t(e)}s.done?n(c):Promise.resolve(c).then(r,o)}function m(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){f(a,r,o,i,s,"next",e)}function s(e){f(a,r,o,i,s,"throw",e)}i(void 0)}))}}var v="prod"===i.environment?"production":"staging",b=i.atlassianApiGateway.endsWith("/")?i.atlassianApiGateway.substr(0,i.atlassianApiGateway.length-1):i.atlassianApiGateway,w=function(e){var n,t,r,i=e.children,f=Object(p.a)({variables:{memberId:"me"}}).data,w=f&&(null==f?void 0:f.member),g=null!==(n=null==w?void 0:w.enterprises)&&void 0!==n?n:[],y=null!==(t=null==w?void 0:w.organizations)&&void 0!==t?t:[],O=Boolean(null==w?void 0:w.isAaMastered),E={id:(null==w?void 0:w.id)||"",idPremOrgsAdmin:(null==w?void 0:w.idPremOrgsAdmin)||[],isAaMastered:O,name:(null==w?void 0:w.fullName)||"",enterprises:g},_=(null==w||null===(r=w.prefs)||void 0===r?void 0:r.locale)||"en",k=function(e){return[u,e]}(m(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a.getSuggestedSiteNames)(g,y,E));case 1:case"end":return e.stop()}}),e)})))),S=function(e){return[l,e]}(m(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a.getAvailableSites)(O));case 1:case"end":return e.stop()}}),e)}))));return o.a.createElement(s.a,{analyticsClient:c.Analytics.dangerouslyGetAnalyticsWebClient(),locale:_,edgePrefix:b,isAaMastered:O,env:v,plugins:[k,S],onError:function(e){Object(d.sendErrorEvent)(e,{tags:{ownershipArea:"trello-workflowers"},extraData:{component:"CrossFlowProvider"}})}},i)}},"./app/src/components/CrossFlowProvider/CrossFlowProviderQuery.generated.tsx":function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js"),o={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"CrossFlowProvider"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"memberId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"member"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"memberId"}}}],directives:[{kind:"Directive",name:{kind:"Name",value:"client"},arguments:[]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"idPremOrgsAdmin"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isAaMastered"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fullName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"prefs"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"locale"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"enterprises"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"displayName"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"organizations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"idEnterprise"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"displayName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}]};function a(e){return r.c(o,e)}},"./node_modules/@atlaskit/analytics-gas-types/dist/esm/index.js":function(e,n,t){"use strict";t.d(n,"e",(function(){return r})),t.d(n,"d",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return s}));var r="ui",o="track",a="screen",i="operational",s="unknown"},"./node_modules/@atlassiansox/cross-flow-api-internals/dist/esm/index.js":function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"d",(function(){return p})),t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return s}));Object.create;Object.create;var r=t("./node_modules/react/index.js"),o=t.n(r),a=function(e){return{open:function(n){return e(n)}}},i={GET_STARTED:"get-started",DECIDE:"decide",DISCOVER:"discover"},s={CONFLUENCE:"confluence.ondemand",JIRA_CORE:"jira-core.ondemand",JIRA_SERVICE_DESK:"jira-servicedesk.ondemand",JIRA_SOFTWARE:"jira-software.ondemand",BITBUCKET:"bitbucket.ondemand",TRELLO:"trello",OPSGENIE:"opsgenie",STATUSPAGE:"statuspage"},c="Could not provide requested API version",u="Provider not found",l=Object(r.createContext)((function(){return{isEnabled:!1,reason:u}})),d=function(e){var n=e.onOpen,t=e.children,i=Object(r.useMemo)((function(){return function(e){return function(n){switch(n){case 0:return{isEnabled:!0,api:a(e)};default:return{isEnabled:!1,reason:c}}}}(n)}),[n]);return o.a.createElement(l.Provider,{value:i},t)},p=function(){return Object(r.useContext)(l)(0)}},"./node_modules/@atlassiansox/cross-flow-support/dist/esm/index.js":function(e,n,t){"use strict";var r=t("./node_modules/@atlassiansox/cross-flow-api-internals/dist/esm/index.js");t.d(n,"b",(function(){return r.d})),t.d(n,"a",(function(){return r.c}))},"./node_modules/@atlassiansox/cross-flow-support/dist/esm/lib/redirects-helpers/redirectsHelpers.js":function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r,o=t("./node_modules/@atlassiansox/cross-flow-api-internals/dist/esm/index.js");!function(e){e["atlassian-switcher"]="atlassian_switcher"}(r||(r={}));var a={"atlassian-switcher":r["atlassian-switcher"]},i=function(e,n){var t="";return e&&function(e){return Boolean(a[e])}(e)&&(t=t+"utm_campaign="+a[e]+"&utm_medium=in_product_ad",n&&(t=t+"&utm_source="+n)),t},s=function(e,n,t,r){var a="staging"===n?"https://qa-wac.internal.atlassian.com":"https://www.atlassian.com",s=i(t,r),c="",u="",l="/software";return!function(e){return[o.c.JIRA_SOFTWARE,o.c.JIRA_SERVICE_DESK,o.c.JIRA_CORE,o.c.CONFLUENCE].includes(e)}(e)?function(e){return[o.c.OPSGENIE].includes(e)}(e)&&(l=function(e){var n;return((n={})[o.c.OPSGENIE]="/software/opsgenie/try",n)[e]}(e)):(l="/try/cloud/signup",u=function(e){var n;return"bundle="+((n={})[o.c.JIRA_SOFTWARE]="jira-software",n[o.c.JIRA_SERVICE_DESK]="jira-service-desk",n[o.c.JIRA_CORE]="jira-core",n[o.c.CONFLUENCE]="confluence",n)[e]+"&edition=free"}(e)),u&&(c=c+"?"+u),s&&(c=c+(c?"&":"?")+s),a+l+c},c=function(e,n,t,r){void 0===n&&(n="production");var o=s(e,n,t,r);window.open(o,"_blank")}},"./node_modules/@atlassiansox/cross-flow-support/dist/esm/trello.js":function(e,n,t){"use strict";t.d(n,"b",(function(){return O.b}));var r,o=t("./node_modules/@atlassiansox/cross-flow-support/node_modules/tslib/tslib.es6.js"),a=t("./node_modules/react/index.js"),i=t.n(a),s=t("./node_modules/@atlassiansox/cross-flow-api-internals/dist/esm/index.js"),c=t("./node_modules/@atlaskit/analytics-gas-types/dist/esm/index.js"),u=function(e){return function(e,n){return n.reduce((function(n,t){return e.forEach((function(e){var r=t?t[e]:null;n.push(r||t[e])})),n}),[]).filter(Boolean)}(["source"],e)},l=function(e){return e[e.length-1]},d=function(e){var n=e.context,t=e.payload;if(!t)return null;var r=u(n),a=l(r)||c.a,i=function(e){return e.reduce((function(e,n){var t=n.attributes,r=Object(o.d)(n,["attributes"]),a=Object(o.a)(Object(o.a)({},e),r);return t?Object(o.a)(Object(o.a)({},a),t):a}),{})}(n),s=l(function(e){return e.map((function(e){return{packageName:e.packageName,packageVersion:e.packageVersion}})).filter((function(e){return e.packageName}))}(n))||{},d=s.packageName,p=void 0===d?void 0:d,f=s.packageVersion,m=void 0===f?void 0:f,v=t.eventType,b=void 0===v?c.e:v,w=t.action,g=t.actionSubject,y=t.actionSubjectId,O=t.attributes,E=t.name,_=Object(o.a)(Object(o.a)({packageName:p,packageVersion:m},i),O),k=t.tags||[];switch(k.push("growth"),b){case c.e:case c.b:case c.d:return{eventType:b,source:a,actionSubject:g,action:w,actionSubjectId:y,attributes:_,tags:k.slice(0)};case c.c:return{eventType:b,name:E,attributes:_,source:a,tags:k.slice(0)}}return null},p=t("./node_modules/@atlassiansox/cross-flow-support/dist/esm/lib/redirects-helpers/redirectsHelpers.js"),f=t("./node_modules/@atlassiansox/cross-flow-support/dist/esm/version.json"),m={eventType:c.b,action:"errorCaught",actionSubject:"errorBoundary"},v=[{source:"crossFlowProvider"},{packageName:f.name,packageVersion:f.version}],b=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.state={hasError:!1},n}return Object(o.b)(n,e),n.getDerivedStateFromError=function(){return{hasError:!0}},n.prototype.componentDidCatch=function(e){this.props.onAnalyticsEvent({payload:m,context:v}),this.props.onError&&this.props.onError(e)},n.prototype.render=function(){return this.state.hasError?null:this.props.children},n}(a.Component),w={version:f.version},g=i.a.lazy((function(){return t.e(20).then(t.bind(null,"./node_modules/@atlassiansox/cross-flow-support/dist/esm/lib/view/index.js"))})),y=(r=g,function(e){var n=e.children,t=e.analyticsClient,u=e.originProduct,l=e.redirectToWac,f=e.env,m=e.plugins,v=void 0===m?[]:m,g=e.onError,y=Object(o.d)(e,["children","analyticsClient","originProduct","redirectToWac","env","plugins","onError"]),O=Object(a.useRef)(),E=Object(o.c)(Object(a.useState)(!1),2),_=E[0],k=E[1],S=Object(a.useMemo)((function(){return function(e){return function(n){return Promise.resolve(e).then((function(e){switch(n.eventType){case c.e:e.sendUIEvent(n);break;case c.d:e.sendTrackEvent(n);break;case c.b:e.sendOperationalEvent(n);break;case c.c:e.sendScreenEvent(n)}}))}}(t)}),[t]),h=Object(o.c)(Object(a.useState)(),2),j=h[0],C=h[1],N=Object(a.useCallback)((function(e){var n,t,r=d(e);if(r){var a=function(e,n){if(!n)return e;var t=Object(o.a)(Object(o.a)({},e.attributes||{}),{sourceComponent:n.sourceComponent,sourceContext:n.sourceContext});return Object(o.a)(Object(o.a)({},e),{attributes:t})}((n=r,t=Object(o.a)(Object(o.a)({},n.attributes||{}),{crossFlowSupport:w}),Object(o.a)(Object(o.a)({},n),{attributes:t})),j);S(a)}}),[S,j]),A=Object(a.useCallback)((function(e){_||(N({payload:{eventType:c.b,action:"uiInitialized",actionSubject:"crossFlowSupport",appName:e},context:[{source:"crossFlowProvider"}]}),k(!0))}),[_,N]),x=Object(a.useCallback)((function(e){return k(!1),N({payload:{eventType:c.b,action:"openInvoked",actionSubject:"crossFlowSupport",attributes:{sourceComponent:e.sourceComponent,sourceContext:e.sourceContext}},context:[{source:"crossFlowProvider"}]}),e.journey===s.b.GET_STARTED&&l?(Object(p.a)(e.targetProduct,f,e.sourceComponent,e.sourceContext),Promise.resolve({})):(C(e),new Promise((function(e){O.current=e})))}),[N,f,l]),T=Object(a.useCallback)((function(e){k(!1),C(void 0),O.current&&O.current(e)}),[]);return i.a.createElement(s.a,{onOpen:x},n,j&&i.a.createElement(b,{onAnalyticsEvent:N,onError:g},i.a.createElement(a.Suspense,{fallback:null},i.a.createElement(r,Object(o.a)({},y,j,{onAnalyticsEvent:N,originProduct:u,onClose:T,onHandShake:A,plugins:v,env:f,redirectToWac:l})))))}),O=t("./node_modules/@atlassiansox/cross-flow-support/dist/esm/index.js");n.a=function(e){var n=!e.isAaMastered;return i.a.createElement(y,Object(o.a)({},e,{shouldUseCFFEOverride:function(){return!0},originProduct:"trello",redirectToWac:n}))}},"./node_modules/@atlassiansox/cross-flow-support/dist/esm/version.json":function(e,n){e.exports={name:"@atlassiansox/cross-flow-support",version:"0.26.0"}},"./node_modules/@atlassiansox/cross-flow-support/node_modules/tslib/tslib.es6.js":function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return a})),t.d(n,"d",(function(){return i})),t.d(n,"c",(function(){return s}));
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
***************************************************************************** */
var r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])})(e,n)};function o(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var a=function(){return(a=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};function i(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}Object.create;function s(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,a=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(t=a.return)&&t.call(a)}finally{if(o)throw o.error}}return i}Object.create}},0,[20]]);
//# sourceMappingURL=cross-flow-provider.9d759641cc97a87d6201.js.map