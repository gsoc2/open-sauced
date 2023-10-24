"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[621],{"./components/atoms/Avatar/avatar-hover-card.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return avatar_hover_card}});var react=__webpack_require__("./node_modules/react/index.js"),index_module=__webpack_require__("./node_modules/@radix-ui/react-hover-card/dist/index.module.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),next_router=__webpack_require__("./node_modules/next/router.js"),useFetchUser=__webpack_require__("./lib/hooks/useFetchUser.ts"),useContributorPullRequestsChart=__webpack_require__("./lib/hooks/useContributorPullRequestsChart.ts"),github=__webpack_require__("./lib/utils/github.ts"),contributor_hover_card=__webpack_require__("./components/molecules/ContributorHoverCard/contributor-hover-card.tsx"),__jsx=react.createElement,HoverCardWrapper=function HoverCardWrapper(_ref){var username=_ref.username,repositories=_ref.repositories,topic=(0,next_router.useRouter)().query.pageId,contributor=(0,useFetchUser.j)(username).data,repoList=(0,useContributorPullRequestsChart.u)(username,"*",repositories).repoList,profile={githubAvatar:(0,github.cc)(username,40),githubName:username,totalPR:repoList.length},_ref2=null!=contributor?contributor:{},is_maintainer=_ref2.is_maintainer,first_opened_pr_at=_ref2.first_opened_pr_at;return __jsx(react.Fragment,null,__jsx(contributor_hover_card.Z,{dateOfFirstPr:first_opened_pr_at,totalPR:profile.totalPR,githubAvatar:profile.githubAvatar,githubName:profile.githubName,repoList:repoList,topic:topic,repositories:repositories,isMaintainer:!!is_maintainer}))};HoverCardWrapper.__docgenInfo={description:"",methods:[],displayName:"HoverCardWrapper",props:{username:{required:!0,tsType:{name:"string"},description:""},repositories:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""}}};var hover_card_wrapper=HoverCardWrapper;try{hovercardwrapper.displayName="hovercardwrapper",hovercardwrapper.__docgenInfo={description:"",displayName:"hovercardwrapper",props:{username:{defaultValue:null,description:"",name:"username",required:!0,type:{name:"string"}},repositories:{defaultValue:null,description:"",name:"repositories",required:!1,type:{name:"number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/HoverCardWrapper/hover-card-wrapper.tsx#hovercardwrapper"]={docgenInfo:hovercardwrapper.__docgenInfo,name:"hovercardwrapper",path:"components/molecules/HoverCardWrapper/hover-card-wrapper.tsx#hovercardwrapper"})}catch(__react_docgen_typescript_loader_error){}var avatar_hover_card_jsx=react.createElement,AvatarHoverCard=function AvatarHoverCard(_ref){var contributor=_ref.contributor,repositories=_ref.repositories,_ref$size=_ref.size,width=500,height=500;if("small"===(void 0===_ref$size?"large":_ref$size))width=35,height=35;return avatar_hover_card_jsx(index_module.fC,null,avatar_hover_card_jsx(link_default(),{href:"/user/".concat(contributor),as:"/user/".concat(contributor)},avatar_hover_card_jsx(index_module.xz,{asChild:!0},avatar_hover_card_jsx(next_image.Z,{alt:contributor,className:"border rounded-full",height:width,src:(0,github.cc)(contributor,40),width:height}))),avatar_hover_card_jsx(index_module.h_,null,avatar_hover_card_jsx(index_module.VY,{sideOffset:5},avatar_hover_card_jsx(hover_card_wrapper,{username:contributor,repositories:repositories}))))};AvatarHoverCard.displayName="AvatarHoverCard",AvatarHoverCard.__docgenInfo={description:"",methods:[],displayName:"AvatarHoverCard",props:{size:{defaultValue:{value:'"large"',computed:!1},required:!1,tsType:{name:"union",raw:'"small" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'}]},description:""},contributor:{required:!0,tsType:{name:"string"},description:""},repositories:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""}}};var avatar_hover_card=AvatarHoverCard;try{avatarhovercard.displayName="avatarhovercard",avatarhovercard.__docgenInfo={description:"",displayName:"avatarhovercard",props:{contributor:{defaultValue:null,description:"",name:"contributor",required:!0,type:{name:"string"}},repositories:{defaultValue:null,description:"",name:"repositories",required:!0,type:{name:"number[]"}},size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Avatar/avatar-hover-card.tsx#avatarhovercard"]={docgenInfo:avatarhovercard.__docgenInfo,name:"avatarhovercard",path:"components/atoms/Avatar/avatar-hover-card.tsx#avatarhovercard"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/ContributorHoverCard/contributor-hover-card.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/router.js"),lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./lib/utils/date-utils.ts"),components_atoms_Badge_badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/Badge/badge.tsx"),_CardProfile_card_profile__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/molecules/CardProfile/card-profile.tsx"),_CardRepoList_card_repo_list__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/molecules/CardRepoList/card-repo-list.tsx"),_PullRequestTable_pull_request_table__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./components/molecules/PullRequestTable/pull-request-table.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,ContributorHoverCard=function ContributorHoverCard(_ref){var repoList=_ref.repoList,githubName=_ref.githubName,totalPR=_ref.totalPR,dateOfFirstPr=_ref.dateOfFirstPr,githubAvatar=_ref.githubAvatar,repositories=_ref.repositories,isMaintainer=_ref.isMaintainer,topic=(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query.pageId,calculatedDateFromToday=dateOfFirstPr?(0,lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_6__.wu)(new Date(parseInt(dateOfFirstPr).toString())):"-";return __jsx("div",{className:"w-[364px] bg-white gap-4 p-3 rounded-lg shadow-superlative flex flex-col"},__jsx("div",{className:"flex items-center justify-between"},__jsx(_CardProfile_card_profile__WEBPACK_IMPORTED_MODULE_3__.Z,{dateOfFirstPR:calculatedDateFromToday,githubAvatar:githubAvatar,githubName:githubName,totalPRs:totalPR,isRoundedAvatar:!0}),isMaintainer&&__jsx(components_atoms_Badge_badge__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"maintainer"})),__jsx("div",{className:""},__jsx(_PullRequestTable_pull_request_table__WEBPACK_IMPORTED_MODULE_5__.Z,{isHoverCard:!0,repositories:repositories,limit:5,contributor:githubName,topic:topic})),__jsx("div",null,__jsx(_CardRepoList_card_repo_list__WEBPACK_IMPORTED_MODULE_4__.Z,{repoList:repoList,limit:3})))};ContributorHoverCard.displayName="ContributorHoverCard",ContributorHoverCard.__docgenInfo={description:"",methods:[],displayName:"ContributorHoverCard",props:{repoList:{required:!0,tsType:{name:"Array",elements:[{name:"RepoList"}],raw:"RepoList[]"},description:""},githubAvatar:{required:!0,tsType:{name:"string"},description:""},githubName:{required:!0,tsType:{name:"string"},description:""},totalPR:{required:!0,tsType:{name:"number"},description:""},dateOfFirstPr:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},topic:{required:!1,tsType:{name:"string"},description:""},repositories:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},isMaintainer:{required:!0,tsType:{name:"boolean"},description:""}}},__webpack_exports__.Z=ContributorHoverCard;try{contributorhovercard.displayName="contributorhovercard",contributorhovercard.__docgenInfo={description:"",displayName:"contributorhovercard",props:{repoList:{defaultValue:null,description:"",name:"repoList",required:!0,type:{name:"RepoList[]"}},githubAvatar:{defaultValue:null,description:"",name:"githubAvatar",required:!0,type:{name:"string"}},githubName:{defaultValue:null,description:"",name:"githubName",required:!0,type:{name:"string"}},totalPR:{defaultValue:null,description:"",name:"totalPR",required:!0,type:{name:"number"}},dateOfFirstPr:{defaultValue:null,description:"",name:"dateOfFirstPr",required:!0,type:{name:"string | undefined"}},topic:{defaultValue:null,description:"",name:"topic",required:!1,type:{name:"string"}},repositories:{defaultValue:null,description:"",name:"repositories",required:!1,type:{name:"number[]"}},isMaintainer:{defaultValue:null,description:"",name:"isMaintainer",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/ContributorHoverCard/contributor-hover-card.tsx#contributorhovercard"]={docgenInfo:contributorhovercard.__docgenInfo,name:"contributorhovercard",path:"components/molecules/ContributorHoverCard/contributor-hover-card.tsx#contributorhovercard"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/StackedAvatar/stacked-avatar.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return stacked_avatar}});var react=__webpack_require__("./node_modules/react/index.js"),next_router=__webpack_require__("./node_modules/next/router.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),avatar_hover_card=__webpack_require__("./components/atoms/Avatar/avatar-hover-card.tsx"),dist=__webpack_require__("./node_modules/swr/core/dist/index.mjs"),public_api_fetcher=__webpack_require__("./lib/utils/public-api-fetcher.ts"),hooks_useInsight=function useInsight(id){var baseEndpoint="insights/".concat(id),endpointString="".concat(baseEndpoint),_useSWR=(0,dist.ZP)(id?endpointString:null,public_api_fetcher.Z),data=_useSWR.data,error=_useSWR.error,mutate=_useSWR.mutate;return{data:data,isLoading:!error&&!data,isError:!!error&&Object.keys(error).length>0,mutate:mutate}},console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement,StackedAvatar=function StackedAvatar(_ref){var contributors=_ref.contributors,_ref$visibleQuantity=_ref.visibleQuantity,visibleQuantity=void 0===_ref$visibleQuantity?5:_ref$visibleQuantity,classNames=_ref.classNames,pageId=(0,next_router.useRouter)().query.pageId,insightId=Number.isInteger(parseInt(pageId,10))?pageId:"",_useInsight=hooks_useInsight(insightId),insight=_useInsight.data,isError=_useInsight.isError,repositories=insight?insight.repos.map((function(repo){return repo.repo_id})):[];return isError?(console.log("Error fetching insight",isError),__jsx("div",null,"-")):__jsx("div",{className:(0,clsx_m.Z)("flex -space-x-3 transition-all duration-300 hover:-space-x-1",classNames)},contributors&&contributors.slice(0,visibleQuantity).map((function(_ref2){var hostLogin=_ref2.host_login;return __jsx("div",{key:"contributor-avatar-".concat(hostLogin),className:"w-8 h-8 overflow-hidden transition-all duration-300 border-2 border-white border-solid rounded-full"},__jsx(avatar_hover_card.Z,{contributor:hostLogin,repositories:repositories}))})))};StackedAvatar.displayName="StackedAvatar",StackedAvatar.__docgenInfo={description:"",methods:[],displayName:"StackedAvatar",props:{visibleQuantity:{defaultValue:{value:"5",computed:!1},required:!1,tsType:{name:"number"},description:""},contributors:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ host_login: string }",signature:{properties:[{key:"host_login",value:{name:"string",required:!0}}]}}],raw:"Contributor[]"},description:""},classNames:{required:!1,tsType:{name:"string"},description:""}}};var stacked_avatar=StackedAvatar;try{stackedavatar.displayName="stackedavatar",stackedavatar.__docgenInfo={description:"",displayName:"stackedavatar",props:{contributors:{defaultValue:null,description:"",name:"contributors",required:!0,type:{name:"Contributor[]"}},visibleQuantity:{defaultValue:{value:"5"},description:"",name:"visibleQuantity",required:!1,type:{name:"number"}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/StackedAvatar/stacked-avatar.tsx#stackedavatar"]={docgenInfo:stackedavatar.__docgenInfo,name:"stackedavatar",path:"components/molecules/StackedAvatar/stacked-avatar.tsx#stackedavatar"})}catch(__react_docgen_typescript_loader_error){}},"./stories/molecules/stacked-avatar.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default}});var _Default$parameters,_Default$parameters2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),components_molecules_StackedAvatar_stacked_avatar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/molecules/StackedAvatar/stacked-avatar.tsx"),_testData_mockedData__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/testData/mockedData.tsx");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var storyConfig={title:"Design System/Molecules/Stacked Avatar",component:components_molecules_StackedAvatar_stacked_avatar__WEBPACK_IMPORTED_MODULE_1__.Z};__webpack_exports__.default=storyConfig;var Default={args:{contributors:_testData_mockedData__WEBPACK_IMPORTED_MODULE_2__.X}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    contributors: mockDbContributions\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./stories/testData/mockedData.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{X:function(){return mockDbContributions},i:function(){return testLanguageList}});var mockDbContributions=[{id:1,commits:"2",commit_days:"ES",last_commit_time:"1661496920000",files_modified:"",first_commit_time:"1661436635000",host_login:"10kartik",email:"kartik@plgworks.com",name:"10kartik",langs:"markdown,python",recent_pr_total:30,recent_repo_list:"",recent_contribution_count:2,recent_opened_prs:5,recent_pr_reviews:12,recent_pr_velocity:10,recent_merged_prs:20},{id:2,commits:"2",commit_days:"ES",last_commit_time:"1661496920000",files_modified:"",first_commit_time:"1661436635000",host_login:"10kartik",email:"kartik@plgworks.com",name:"10kartik",langs:"markdown,python",recent_pr_total:30,recent_repo_list:"",recent_contribution_count:2,recent_opened_prs:5,recent_pr_reviews:12,recent_pr_velocity:10,recent_merged_prs:20},{id:3,commits:"2",commit_days:"ES",last_commit_time:"1661496920000",files_modified:"",first_commit_time:"1661436635000",host_login:"10kartik",email:"kartik@plgworks.com",name:"10kartik",langs:"markdown,python",recent_pr_total:30,recent_repo_list:"",recent_contribution_count:2,recent_opened_prs:5,recent_pr_reviews:12,recent_pr_velocity:10,recent_merged_prs:20},{id:4,commits:"2",commit_days:"ES",last_commit_time:"1661496920000",files_modified:"",first_commit_time:"1661436635000",host_login:"10kartik",email:"kartik@plgworks.com",name:"10kartik",langs:"markdown,python",recent_pr_total:30,recent_repo_list:"",recent_contribution_count:2,recent_opened_prs:5,recent_pr_reviews:12,recent_pr_velocity:10,recent_merged_prs:20}],testLanguageList=[{languageName:"TypeScript",percentageUsed:50},{languageName:"JavaScript",percentageUsed:20},{languageName:"Rust",percentageUsed:15},{languageName:"React",percentageUsed:15}]}}]);