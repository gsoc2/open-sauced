!function(){"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=function(result,chunkIds,fn,priority){if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){chunkIds=deferred[i][0],fn=deferred[i][1],priority=deferred[i][2];for(var fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((function(key){return __webpack_require__.O[key](chunkIds[j])}))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?function(obj){return Object.getPrototypeOf(obj)}:function(obj){return obj.__proto__},__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((function(key){def[key]=function(){return value[key]}}));return def.default=function(){return value},__webpack_require__.d(ns,def),ns},__webpack_require__.d=function(exports,definition){for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=function(chunkId){return Promise.all(Object.keys(__webpack_require__.f).reduce((function(promises,key){return __webpack_require__.f[key](chunkId,promises),promises}),[]))},__webpack_require__.u=function(chunkId){return({189:"molecules-newsletter-form-stories",194:"molecules-favorite-repo-card-stories",286:"atoms-radio-check-stories",340:"organisms-dev-card-wall-stories",386:"atoms-card-stories",396:"molecules-dropdown-list-stories",457:"molecules-avatar-roll-stories",472:"organisms-tools-display-stories",543:"molecules-collaboration-summary-card-stories",547:"molecules-featured-highlights-panel-stories",570:"molecules-superlative-selector-stories",621:"molecules-stacked-avatar-stories",637:"molecules-contributor-filter-dropdown-stories",694:"atoms-checkbox-stories",755:"molecules-filter-card-select-stories",836:"molecules-top-nav-logo-stories",861:"Template-loader-stories",940:"atoms-search-stories",942:"atoms-spinner-stories",966:"molecules-contributor-table-stories",979:"atoms-layout-toggle-stories",1149:"organisms-header-stories",1163:"molecules-highlights-filter-card-stories",1314:"pages-login-stories",1321:"organisms-suggested-repo-list-stories",1475:"atoms-pill-stories",1482:"molecules-list-card-stories",1594:"molecules-bill-board-stories",1622:"molecules-page-header-stories",1839:"atoms-scroll-area-stories",1881:"molecules-dev-card-stories",2073:"organisms-dev-card-carousel-stories",2321:"atoms-typography-wrapper-stories",2354:"atoms-error-stories",2373:"molecules-insight-page-table-stories",2477:"organisms-component-waitlist-stories",2901:"molecules-pie-chart-stories",2954:"molecules-contributor-highlight-card-stories",2996:"atoms-toggle-option-stories",3105:"atoms-user-card-stories",3145:"atoms-context-filter-button-stories",3224:"atoms-radio-stories",3423:"atoms-toggle-switch-stories",3457:"atoms-skeleton-wrapper-stories",3542:"molecules-pagination-result-stories",3567:"organisms-repositories-cart-stories",3596:"atoms-sparkline-stories",3600:"molecules-table-repository-name-stories",3646:"molecules-recommended-repo-card-stories",3715:"molecules-suggested-repository-stories",3803:"molecules-dropdown-page-list-item-stories",3836:"molecules-reports-history-stories",3891:"molecules-pagination-goto-page-stories",3996:"organisms-repository-stories",4031:"molecules-collaboration-card-stories",4049:"atoms-text-stories",4073:"molecules-nivo-scatter-chart-stories",4176:"molecules-dashboard-scatter-chart-stories",4227:"atoms-cart-illustration-stories",4313:"atoms-icon-button-stories",4402:"atoms-echart-wrapper-stories",4469:"atoms-insight-badge-stories",4650:"molecules-contributor-hover-card-stories",4670:"atoms-context-thumbnail-stories",4800:"molecules-repo-card-profile-stories",4910:"atoms-favorite-selector-stories",5012:"molecules-search-result-stories",5053:"atoms-avatar-hover-card-stories",5195:"atoms-select-stories",5202:"atoms-title-stories",5224:"molecules-repository-cart-item-stories",5429:"organisms-user-settings-page-stories",5681:"molecules-pagination-stories",5717:"pages-default-stories",5730:"atoms-icon-stories",5749:"organisms-login-top-nav-stories",5821:"atoms-top-user-card-stories",5840:"atoms-table-title-stories",5908:"atoms-insights-page-list-item-stories",6012:"molecules-auth-content-wrapper-stories",6116:"molecules-onboarding-button-stories",6272:"molecules-context-clue-card-stories",6382:"organisms-top-nav-stories",6477:"molecules-insight-page-card-stories",6736:"atoms-pill-selector-stories",6770:"organisms-reports-stories",6773:"atoms-progress-pie-stories",6819:"molecules-top-contributors-panel-stories",6866:"molecules-highlight-input-stories",6932:"molecules-component-gradient-stories",6964:"atoms-text-input-stories",7014:"atoms-limit-select-stories",7083:"molecules-repository-result-stories",7090:"atoms-context-filter-option-stories",7125:"organisms-footer-stories",7400:"molecules-highlight-card-stories",7480:"molecules-card-repo-list-stories",7537:"molecules-profile-language-chart-stories",7609:"atoms-filterCard-stories",7693:"molecules-card-line-chart-stories",7736:"organisms-dashboard-stories",7906:"molecules-wailtlist-button-stories",7969:"atoms-team-members-config-stories",8041:"atoms-avatar-stories",8100:"atoms-team-member-row-stories",8111:"organisms-contributors-stories",8247:"organisms-tool-nav-stories",8309:"molecules-pull-request-overview-stories",8349:"molecules-component-date-filter-stories",8423:"molecules-card-horizontal-bar-stories",8477:"molecules-card-profile-stories",8624:"atoms-fab-stories",8734:"atoms-language-pill-stories",8803:"atoms-notification-card-stories",8826:"molecules-contributor-profile-header-stories",8837:"molecules-favorite-repos-stories",9024:"atoms-pull-request-overview-chart-stories",9080:"molecules-component-header-stories",9100:"molecules-pull-request-social-card-stories",9142:"molecules-highlight-prompt-stories",9170:"molecules-repositories-table-stories",9254:"molecules-auth-section-stories",9409:"atoms-badge-stories",9418:"organisms-contributor-card-stories",9441:"atoms-toggle-group-stories",9566:"atoms-button-stories",9650:"atoms-list-name-header-stories",9745:"molecules-calendar-stories",9817:"organisms-contributor-profile-page-stories",9939:"molecules-select-reports-filter-stories"}[chunkId]||chunkId)+"."+{68:"f6144a91",189:"62d29c21",194:"e41baf93",238:"4e8fc4cb",286:"3afd2927",340:"c3cb81c2",360:"eebdf6fc",386:"9a66cbff",396:"0fbc4ad7",457:"0c795102",466:"973b0a1e",472:"20eeffa3",543:"a0bc9907",547:"41c74991",570:"8a9e70ab",621:"226afd06",637:"dc1338b6",654:"5f7c2a78",658:"618eb7c0",662:"06b6baf7",694:"55164dd5",755:"d6b2b213",836:"540233dc",861:"1cfb6463",940:"43ecd0b8",942:"d681455e",966:"9c53a4cc",979:"b5491c4e",1062:"dbbaaa83",1149:"4ad7c5ba",1163:"91fc9bd2",1179:"428e6141",1314:"3816c126",1318:"2a220b9e",1321:"162c28b6",1341:"60dc17c6",1475:"7fed1190",1482:"db5b80b8",1594:"621d6578",1622:"6080cdb8",1664:"95d7b60d",1729:"314aecdc",1791:"f76ac395",1802:"504ce17f",1839:"3ec68712",1881:"8f168ad2",1887:"81585603",2073:"0e751044",2321:"1ed56f78",2354:"222d5840",2373:"b681c5b5",2477:"026fcfa9",2494:"a46565c9",2733:"ce9dae2c",2820:"41172653",2895:"cb0f2298",2901:"85e7e9d7",2954:"3a03ba89",2996:"4b9af990",3022:"9930e623",3085:"d2c7aa3b",3105:"fd0eca74",3145:"31e82b6b",3224:"92026ec5",3423:"69a8d068",3457:"c21c468e",3542:"593372a0",3549:"3686402e",3567:"958f28a4",3596:"9495f1ab",3600:"264a8a55",3646:"d20259a9",3715:"aed7e6db",3750:"149016df",3803:"c26c9d18",3831:"85da27b7",3836:"26bda0a6",3854:"e8dc0979",3891:"2c88a729",3949:"8cc33850",3996:"4231a43a",4031:"449699b9",4049:"7dab141d",4073:"5b77b6f3",4176:"598bcc8b",4227:"33e366f0",4246:"f1dd86a2",4313:"90633482",4402:"933e9b37",4454:"36ba8a06",4469:"c9099e73",4535:"855afdcb",4578:"0fd8c4c2",4610:"f16f8e96",4650:"c086967e",4670:"1635e7f1",4760:"07b76e70",4800:"cca4acac",4910:"6f5cfb0c",5012:"27212048",5053:"908346de",5139:"7c9e071e",5155:"91d0ae5b",5162:"1391d272",5172:"4bcf3685",5195:"969f784e",5202:"c68f8901",5224:"4d1ec318",5253:"208e0a5f",5269:"e7bbec77",5291:"2d99eeab",5297:"0e8d1b12",5376:"1b5444d7",5429:"8a8aa0e2",5434:"0b10e735",5435:"baf513bc",5436:"77462e6a",5529:"b8081667",5578:"3fb21324",5681:"d0b8ed77",5717:"5f0143e4",5730:"99014171",5749:"16efc7c7",5789:"05b2dcb1",5821:"bef862f7",5840:"162129b3",5908:"58b6ee5a",5940:"1f1f31a4",6012:"9067aead",6116:"028bc8ad",6272:"f5636566",6382:"b6e6a4d0",6477:"614f3436",6604:"e8013cec",6736:"6aa39e1c",6770:"575d654a",6773:"5411ad25",6819:"b62e4f76",6866:"bb5fd8ab",6893:"6527c926",6932:"f5b6bac3",6950:"6a31c5fc",6964:"1d14ca8b",7014:"4f21f559",7083:"043bffa0",7090:"e4f5f310",7106:"a8dc3234",7125:"a88f852c",7297:"2378c871",7400:"2322da09",7462:"b781f758",7476:"5339a69e",7480:"af094d7d",7516:"dfb8a7a7",7537:"7c5504c0",7609:"4aaa6890",7643:"ab6c2ced",7693:"b8d2dbe8",7736:"ef6aa595",7901:"95d5bc9f",7902:"c0709a16",7906:"7fd124d0",7969:"40424dbc",8020:"44a41f70",8041:"b73c607e",8100:"348a2a0f",8111:"3df7e3c5",8193:"5517098c",8247:"61ecc3e8",8309:"12266e83",8349:"6f6247fc",8423:"361e029d",8477:"5c7dd2c5",8608:"3a382ebe",8624:"5d076c08",8626:"4375d2c8",8663:"da0a9873",8667:"fa5a70d4",8734:"e35e46ae",8803:"38a3dc5c",8826:"7364e2ff",8837:"35a72001",9024:"8ec76eed",9080:"884cee47",9100:"17041ec6",9115:"a58aa2ce",9136:"12246e58",9142:"ef9b7e51",9170:"4fbbb5ec",9254:"20149748",9352:"fa1e96bd",9409:"e460ac28",9418:"a5f4b3cf",9441:"a90fbca8",9466:"ae3cdc43",9535:"c4141c08",9560:"0a6a1398",9566:"2fe0f896",9583:"801faea0",9642:"b2cd3b53",9650:"d5d061f5",9680:"450de1ee",9744:"5c452f72",9745:"cc6cf9c9",9817:"b68f5212",9850:"4c8780ac",9930:"8dd2b213",9939:"6fd6cda9"}[chunkId]+".iframe.bundle.js"},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=function(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)},inProgress={},__webpack_require__.l=function(url,done,key,chunkId){if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@open-sauced/insights:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@open-sauced/insights:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=function(prev,event){script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((function(fn){return fn(event)})),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=function(module){return module.paths=[],module.children||(module.children=[]),module},__webpack_require__.p="",function(){__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=function(chunkId,promises){var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise((function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]}));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(function(event){if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=function(chunkId){return 0===installedChunks[chunkId]};var webpackJsonpCallback=function(parentChunkLoadingFunction,data){var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],runtime=data[2],i=0;if(chunkIds.some((function(id){return 0!==installedChunks[id]}))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))}(),__webpack_require__.nc=void 0}();