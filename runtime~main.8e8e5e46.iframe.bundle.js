(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){chunkIds=deferred[i][0],fn=deferred[i][1],priority=deferred[i][2];for(var fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({116:"atoms-FilterCard-filterCard-stories",133:"shared-LanguagePill-language-pill-stories",185:"Workspaces-TrackedReposTable-stories",249:"atoms-LayoutToggle-layout-toggle-stories",343:"atoms-RadioCheck-radio-check-stories",541:"organisms-DevCardCarousel-dev-card-carousel-stories",542:"atoms-ListNameHeader-list-name-header-stories",561:"atoms-ProgressPie-progress-pie-stories",603:"shared-AppSidebar-sidebar-menu-item-stories",609:"molecules-ContextClueCard-context-clue-card-stories",624:"organisms-DevCardWall-dev-card-wall-stories",630:"organisms-UserSettingsPage-user-settings-page-stories",679:"molecules-ReportsHistory-reports-history-stories",872:"molecules-InsightsPageListDropdown-insights-page-list-dropdown-stories",989:"atoms-Avatar-avatar-hover-card-stories",1095:"atoms-Typography-title-stories",1097:"PullRequests-PrStateAuthorIcon-stories",1122:"molecules-SuperlativeSelector-superlative-selector-stories",1176:"molecules-AuthSection-auth-section-stories",1180:"atoms-Card-card-stories",1203:"organisms-Dashboard-dashboard-stories",1355:"atoms-Badge-badge-stories",1377:"molecules-ConnectionSummaryCard-connection-summary-card-stories",1382:"atoms-Select-single-select-stories",1412:"molecules-SelectReportsFilter-select-reports-filter-stories",1417:"organisms-SuggestedRepoList-suggested-repo-list-stories",1443:"shared-LanguageSwitch-language-switch-stories",1500:"shared-ButtonGroup-stories",1526:"shared-Drawer-stories",1537:"atoms-InsightBadge-insight-badge-stories",1565:"molecules-HighlightInput-highlight-input-stories",1704:"Graphs-StarsChart-stories",1816:"atoms-Avatar-avatar-stories",1851:"molecules-SuggestedRepo-suggested-repo-stories",1949:"molecules-NewsletterForm-newsletter-form-stories",2021:"atoms-Radio-radio-stories",2049:"atoms-ToggleGroup-toggle-group-stories",2054:"atoms-Error-error-stories",2098:"atoms-Sparkline-sparkline-stories",2168:"molecules-FavoriteRepos-favorite-repos-stories",2182:"Workspaces-TrackedRepoWizard-SearchByReposStep-stories",2187:"organisms-Waitlist-waitlist-stories",2207:"molecules-PieChart-pie-chart-stories",2239:"molecules-AvatarRoll-avatar-roll-stories",2248:"organisms-RepositoriesCart-repositories-cart-stories",2290:"organisms-Header-header-stories",2320:"molecules-CardRepoList-card-repo-list-stories",2321:"molecules-ContributorProfileHeader-contributor-profile-header-stories",2371:"molecules-CardLineChart-card-line-chart-stories",2421:"organisms-ToolList-tool-nav-stories",2505:"molecules-NivoScatterChart-nivo-scatter-chart-stories",2522:"Graphs-MetricCard-stories",2544:"molecules-RepositoryResult-repository-result-stories",2625:"Graphs-ForksChart-stories",2698:"molecules-PullRequestTable-pull-request-table-stories",2877:"organisms-Reports-reports-stories",3039:"organisms-Footer-footer-stories",3079:"molecules-PaginationGotoPage-pagination-goto-page-stories",3289:"molecules-ComponentDateFilter-component-date-filter-stories",3396:"organisms-Contributors-contributors-stories",3421:"molecules-Calendar-calendar-stories",3442:"atoms-TopContributorCard-top-user-card-stories",3600:"atoms-PullRequestOverviewChart-pull-request-overview-chart-stories",3636:"atoms-Typography-text-stories",3645:"atoms-PillSelector-pill-selector-stories",3938:"organisms-TopNav-top-nav-stories",3940:"molecules-DropdownList-dropdown-list-stories",4031:"molecules-AnnouncementCard-announcement-card-stories",4182:"Graphs-ContributionsTreemap-contributions-treemap-stories",4247:"molecules-PullRequestSocialCard-pull-request-social-card-stories",4256:"organisms-ToolsDisplay-tools-display-stories",4357:"Workspaces-RepositoryStatCard-stories",4481:"molecules-DevProfile-dev-profile-stories",4594:"organisms-RepositoriesTable-repositories-table-stories",4612:"atoms-SkeletonLoader-skeleton-wrapper-stories",4636:"atoms-ContextFilterButton-context-filter-button-stories",4709:"atoms-TableTitle-table-title-stories",4717:"atoms-Fab-fab-stories",4730:"molecules-StackedAvatar-stacked-avatar-stories",4926:"molecules-WaitlistButton-wailtlist-button-stories",5024:"molecules-ReposoitoryCartItem-repository-cart-item-stories",5117:"atoms-UserCard-user-card-stories",5160:"atoms-InsightsPageListItem-insights-page-list-item-stories",5202:"atoms-Select-select-stories",5207:"molecules-Pagination-pagination-stories",5319:"molecules-ContributionsEvolution-contributions-evolution-card-stories",5320:"atoms-ToggleGroup-Button-button-stories",5422:"molecules-HighlightCard-highlight-card-stories",5468:"molecules-ListCard-list-card-stories",5513:"atoms-NotificationsCard-notification-card-stories",5537:"Graphs-MostUsedLanguagesGraph-most-used-languages-graph-stories",5543:"atoms-Search-search-stories",5603:"molecules-InsightPageTable-insight-page-table-stories",5645:"molecules-RecommendedRepoCard-recommended-repo-card-stories",5652:"Workspaces-TrackedRepoWizard-SelectOrgReposStep-stories",5690:"organisms-ContributorProfilePage-contributor-profile-page-stories",5859:"molecules-CardProfile-card-profile-stories",6059:"molecules-AuthContentWrapper-auth-content-wrapper-stories",6289:"molecules-RepoCardProfile-repo-card-profile-stories",6313:"molecules-ContributorHighlight-contributor-highlight-card-stories",6418:"molecules-FeaturedHighlightsPanel-featured-highlights-panel-stories",6424:"atoms-EChartWrapper-echart-wrapper-stories",6441:"molecules-FilterCardSelect-filter-card-select-stories",6495:"shared-DayRangePicker-stories",6589:"organisms-LoginTopNav-login-top-nav-stories",6749:"organisms-SearchDialog-search-dialog-stories",6786:"molecules-PaginationResults-pagination-result-stories",6848:"molecules-HighlightsFeedCard-highlights-filter-card-stories",6850:"atoms-SpinLoader-spinner-stories",6974:"molecules-DevCard-dev-card-stories",7028:"atoms-Select-multi-select-stories",7124:"molecules-TableRepositoryName-table-repository-name-stories",7146:"molecules-MostActiveContributorsCard-most-active-contributors-card-stories",7164:"atoms-Pill-pill-stories",7184:"atoms-Typography-typography-wrapper-stories",7286:"molecules-SearchResults-search-result-stories",7310:"atoms-IconButton-icon-button-stories",7343:"atoms-TextInput-text-input-stories",7352:"Workspaces-TrackedRepoWizard-PickReposOrOrgStep-stories",7361:"molecules-ConnectionCard-connection-card-stories",7504:"molecules-DashboardScatterChart-dashboard-scatter-chart-stories",7507:"molecules-PullRequestOverview-pull-request-overview-stories",7636:"molecules-ContributorListTableRow-contributor-list-table-row-stories",7670:"molecules-InsightPageCard-insight-page-card-stories",7790:"molecules-PageHeader-page-header-stories",7828:"molecules-TopContributorsPanel-top-contributors-panel-stories",7871:"molecules-ContributorHoverCard-contributor-hover-card-stories",7967:"molecules-ComponentHeader-component-header-stories",8189:"molecules-ProfileLanguageChart-profile-language-chart-stories",8460:"shared-AppSidebar-InsightsPanel-stories",8490:"molecules-HeaderLogo-header-logo-stories",8515:"atoms-FilterChip-filter-chip-stories",8570:"atoms-CartIllustration-cart-illustration-stories",8668:"molecules-TeamMemberRow-team-member-row-stories",8695:"molecules-TeamMembersConfig-team-members-config-stories",8794:"organisms-ContributorCard-contributor-card-stories",8848:"atoms-ContextFilterOption-context-filter-option-stories",9151:"atoms-Checkbox-checkbox-stories",9156:"molecules-OnboardingButton-onboarding-button-stories",9319:"molecules-CardHorizontalBarChart-card-horizontal-bar-stories",9393:"atoms-ContextThumbnail-context-thumbnail-stories",9433:"atoms-ScrollArea-scroll-area-stories",9437:"molecules-ComponentGradient-component-gradient-stories",9480:"molecules-HighlightPrompt-highlight-prompt-stories",9512:"shared-Button-button-stories",9561:"organisms-Repositories-repository-stories",9572:"molecules-FavoriteRepoCard-favorite-repo-card-stories",9659:"templates-Loader-loader-stories",9671:"molecules-ContributionsEvolutionByTypeCard-contributions-evolution-by-type-stories",9752:"atoms-ToggleOption-toggle-option-stories",9912:"atoms-FavoriteSelector-favorite-selector-stories",9916:"atoms-ToggleSwitch-toggle-switch-stories",9944:"atoms-Select-limit-select-stories",9983:"molecules-ContributorFilterDropdown-contributor-filter-dropdown-stories"}[chunkId]||chunkId)+"."+{45:"f960ebfd",68:"7aabdc47",116:"ab685958",133:"a38a8ad5",185:"e316d99c",206:"32c6ea4f",249:"ca466369",276:"3281f74f",343:"135587ff",354:"e0f7eba6",447:"430a9483",541:"250f4159",542:"8fefbb2f",561:"dd85bfa8",603:"dfc019dd",609:"3fe970eb",624:"017db1a2",630:"0c1ee61e",634:"212a23dd",658:"9ee70bc9",679:"bdd4d1c6",872:"89cbcab6",989:"bbf06b61",1095:"f12228b1",1097:"33b18ceb",1122:"b9e98920",1126:"15316ffd",1163:"7602b1c4",1176:"ee1bfd73",1180:"4848743d",1203:"ace0b80e",1341:"99ddab7d",1355:"50928b3a",1377:"360ac7e9",1382:"07b15845",1388:"03dcadf0",1412:"81382d11",1417:"ca97113a",1443:"a26f5727",1495:"c64eaf4c",1500:"d301991f",1511:"5dee93d4",1526:"b16dcf07",1537:"4ce7136b",1545:"55136cf2",1565:"2279bc5d",1664:"5a4e1582",1704:"dca43a9e",1729:"30b5bbf2",1816:"2669de43",1851:"27cf5c58",1914:"9851e51f",1922:"be51ba7e",1949:"cb364db9",2021:"c2931676",2038:"79ec67e5",2049:"ca0aa2b8",2054:"f07a731d",2093:"72e07567",2098:"65310234",2168:"d7e84855",2182:"024cff31",2187:"10a38dd3",2207:"6cfff7d2",2239:"33487f80",2248:"c713b08b",2275:"40ec1516",2289:"fdd4f3c1",2290:"dcd14dda",2320:"dcf19ba9",2321:"f7cdb6c5",2371:"dc4381e3",2421:"b21a5381",2494:"f1f08884",2505:"125fcc1d",2507:"52479263",2522:"adae738a",2529:"0633f134",2544:"a4f73e00",2568:"27d6e596",2625:"0f44c5d2",2672:"70b19a5e",2698:"6b61e050",2820:"b612b405",2862:"fabceaea",2877:"72870fe4",3022:"854fbbc7",3039:"ab8345cb",3079:"35b7714d",3104:"75289900",3131:"be66fdd6",3270:"128f9942",3289:"f27275f9",3396:"66f1afb2",3421:"420b1f42",3426:"b2f7f9d0",3442:"384c54d5",3497:"73b70f98",3600:"00d4e00e",3636:"62807f4e",3644:"7c52bd9b",3645:"fa22e6e4",3804:"df340fed",3938:"622cde9c",3940:"e3a7d32d",3982:"36d4af3e",4031:"38ac524c",4182:"e7f7bb11",4247:"0232acc1",4256:"eb6767b0",4357:"af790442",4416:"45b80a17",4454:"8c0564eb",4481:"1458257a",4579:"3979a726",4594:"388eee42",4612:"ea2b2b1c",4636:"52912ab1",4670:"698f6ad0",4709:"49042b9a",4717:"0ba57111",4730:"a2b6c846",4753:"a973ea06",4926:"e420eb04",5024:"56d62d1e",5117:"af7c37f2",5141:"dccb6ba3",5160:"bafdde14",5202:"5d09c789",5207:"6d464e64",5291:"6504e93d",5312:"e4acbfbb",5319:"ff8252a3",5320:"774027c9",5422:"16a2b752",5468:"822e5140",5513:"948e5d72",5529:"c52b318b",5537:"b960ff00",5543:"6e50d3f8",5603:"c119ec45",5645:"ca620186",5652:"18c19808",5669:"f2fe16d1",5690:"56d14186",5703:"9590ed3f",5859:"efc180f4",6059:"fe1d7fd4",6255:"beec7493",6289:"9e802fb0",6313:"b9e79903",6353:"67bb01f8",6386:"a2d79215",6418:"37d6f3b0",6424:"cf4ef2bc",6441:"b3f7e547",6453:"c74c1b4a",6495:"7bde9872",6497:"38763609",6589:"95bf0fa9",6607:"091ef960",6675:"4b16e912",6749:"35ab30d6",6786:"237e1d4e",6848:"3b481879",6850:"356557ce",6942:"0596b075",6974:"ebc7b732",7028:"6cdc08f3",7124:"e7bc413d",7146:"c8ec45a3",7164:"64e8dc90",7184:"915093e9",7286:"433420a0",7310:"fed61835",7343:"aebc54eb",7352:"b9cd7b21",7361:"f5c4b87b",7438:"04bd5e14",7473:"8cfd3de3",7479:"72541ed0",7504:"b294bcb7",7507:"5932c202",7542:"83f021aa",7636:"c8fc7c6b",7643:"1ee48ac7",7646:"035f52a7",7670:"1903d661",7790:"dc0ebe0c",7792:"e4768df6",7828:"ff8ed3d0",7837:"ab3d028d",7871:"ebf81a5b",7902:"db6616a5",7967:"af6c0807",8046:"0f4138f3",8189:"a25f9c24",8197:"2a58a522",8236:"f64ac474",8264:"e18e36a1",8284:"c8aa1fec",8341:"dbb2dfc0",8450:"7a65f262",8454:"fe2d3f6d",8460:"1be1d861",8490:"7677969c",8515:"12258075",8530:"13e1deec",8558:"88ee4d13",8570:"79dbe39f",8608:"1cf8eb90",8612:"299f5146",8663:"604379e4",8668:"5989e748",8695:"fc9827f1",8734:"dabe165a",8794:"0c03400d",8797:"23aaa822",8821:"f7ce38b2",8848:"1d1a8c29",9003:"9f99ecf8",9115:"bd994359",9151:"72b1b2cb",9156:"df287a03",9234:"a7a7f211",9319:"329289a8",9341:"5eb47cf7",9393:"fb40e4f2",9416:"7296bb9e",9433:"903460bb",9437:"0a73c468",9480:"5376419b",9512:"d1aa0ce2",9560:"a75704db",9561:"5a557090",9572:"3c1a5e0f",9659:"4d4c2553",9671:"d8dac953",9680:"b79594ba",9752:"8d4dea0d",9850:"d6822214",9912:"74333c5e",9916:"83b3f469",9924:"893291d7",9944:"01224174",9983:"c3c6a861"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@open-sauced/app:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@open-sauced/app:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],runtime=data[2],i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();