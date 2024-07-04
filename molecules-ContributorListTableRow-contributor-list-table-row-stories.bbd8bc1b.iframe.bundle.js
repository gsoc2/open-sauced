"use strict";(self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[]).push([[7636],{"./components/molecules/ContributorListTableRow/contributor-list-table-row.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ContributorListTableRowStory:()=>ContributorListTableRowStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _ContributorListTable,_ContributorListTable2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),components_molecules_ContributorListTableRow_contributor_list_table_row__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/molecules/ContributorListTableRow/contributor-list-table-row.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Molecules/ContributorListTableRow",component:components_molecules_ContributorListTableRow_contributor_list_table_row__WEBPACK_IMPORTED_MODULE_2__.Z},ContributorListTableRowTemplate=args=>__jsx(components_molecules_ContributorListTableRow_contributor_list_table_row__WEBPACK_IMPORTED_MODULE_2__.Z,args);ContributorListTableRowTemplate.displayName="ContributorListTableRowTemplate";const ContributorListTableRowStory=ContributorListTableRowTemplate.bind({});ContributorListTableRowStory.args={contributor:{author_login:"foxyblocks",username:"foxyblocks",updated_at:"2021-08-24T00:00:00.000Z",user_id:1}},ContributorListTableRowStory.parameters=_objectSpread(_objectSpread({},ContributorListTableRowStory.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ContributorListTable=ContributorListTableRowStory.parameters)||void 0===_ContributorListTable?void 0:_ContributorListTable.docs),{},{source:_objectSpread({originalSource:"args => <ContributorListTableRow {...args} />"},null===(_ContributorListTable2=ContributorListTableRowStory.parameters)||void 0===_ContributorListTable2||null===(_ContributorListTable2=_ContributorListTable2.docs)||void 0===_ContributorListTable2?void 0:_ContributorListTable2.source)})});const __namedExportsOrder=["ContributorListTableRowStory"]},"./components/Contributors/OscrPill.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>OscrPill});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),components_atoms_Pill_pill__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/atoms/Pill/pill.tsx"),components_atoms_Tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/Tooltip/tooltip.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const OscrPill=_ref=>{let{rating}=_ref;const percentageRating=Math.floor(100*rating);return percentageRating<1?null:__jsx(components_atoms_Tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__.Z,{direction:"top",content:"Open Source Contributor Rating (OSCR)"},__jsx(components_atoms_Pill_pill__WEBPACK_IMPORTED_MODULE_1__.Z,{color:"purple",size:"small",text:"".concat(percentageRating)}))};OscrPill.displayName="OscrPill";try{OscrPill.displayName="OscrPill",OscrPill.__docgenInfo={description:"",displayName:"OscrPill",props:{rating:{defaultValue:null,description:"",name:"rating",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Contributors/OscrPill.tsx#OscrPill"]={docgenInfo:OscrPill.__docgenInfo,name:"OscrPill",path:"components/Contributors/OscrPill.tsx#OscrPill"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/ContributorListTableRow/contributor-list-table-row.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>contributor_list_table_row});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),formatDistanceToNowStrict=__webpack_require__("./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js"),ChevronUpIcon=__webpack_require__("./node_modules/@heroicons/react/24/solid/ChevronUpIcon.js"),ChevronDownIcon=__webpack_require__("./node_modules/@heroicons/react/24/solid/ChevronDownIcon.js"),sparkline=__webpack_require__("./components/atoms/Sparkline/sparkline.tsx"),usePullRequestsHistogram=__webpack_require__("./lib/hooks/api/usePullRequestsHistogram.ts"),get_prs_to_days=__webpack_require__("./lib/utils/get-prs-to-days.ts"),repositories_table=__webpack_require__("./components/organisms/RepositoriesTable/repositories-table.tsx"),useContributorPullRequests=__webpack_require__("./lib/hooks/api/useContributorPullRequests.ts");const hooks_useRepoList=repos=>function getRepoList(repos){return repos.split(",").filter((rpo=>!!rpo)).map((repo=>{const[repoOwner,repoName]=repo.split("/");return{repoName,repoIcon:"https://www.github.com/".concat(null!=repoOwner?repoOwner:"github",".png?size=460")}}))}(repos);var useFetchUser=__webpack_require__("./lib/hooks/useFetchUser.ts"),Checkbox_checkbox=__webpack_require__("./components/atoms/Checkbox/checkbox.tsx");var fallback_values=__webpack_require__("./lib/utils/fallback-values.ts"),OscrPill=__webpack_require__("./components/Contributors/OscrPill.tsx"),repo_row=__webpack_require__("./components/molecules/RepoRow/repo-row.tsx"),dev_profile=__webpack_require__("./components/molecules/DevProfile/dev-profile.tsx"),__jsx=react.createElement;function getLastContributionDate(contributions){var _sortedContributions$;if(0===contributions.length)return"-";const sortedContributions=contributions.sort(((a,b)=>+new Date(b.pr_merged_at)-+new Date(a.pr_merged_at)));return(0,formatDistanceToNowStrict.Z)(new Date(null===(_sortedContributions$=sortedContributions[0])||void 0===_sortedContributions$?void 0:_sortedContributions$.pr_merged_at),{addSuffix:!0})}function getLastContributedRepo(pullRequests){if(0===pullRequests.length)return"-";return pullRequests.sort(((a,b)=>+new Date(b.pr_updated_at)-+new Date(a.pr_updated_at)))[0].repo_name}function getLanguageAbbreviation(language){switch(language.toLowerCase()){case"javascript":return"JS";case"typescript":return"TS";case"powershell":return"Shell";case"batchfile":return"Batch";case"vim script":return"Vim";case"dockerfile":return"Docker";case"makefile":return"Make";default:return language}}const contributor_list_table_row=_ref=>{var _OscrPill;let{contributor,topic,selected,handleOnSelectContributor,range,showOscr=!1}=_ref;const{0:tableOpen,1:setTableOpen}=(0,react.useState)(!1),login=contributor.author_login||contributor.username,{data:user}=(0,useFetchUser.j)(contributor.author_login),{data}=(0,useContributorPullRequests.ZP)({contributor:login,topic,repoIds:[],range,limit:50}),{data:prData}=(0,usePullRequestsHistogram._)({contributor:login,range:Number(null!=range?range:"30"),width:1}),repoList=hooks_useRepoList(Array.from(new Set(data.map((prData=>prData.repo_name)))).join(",")),contributorLanguageList=user?function getTopContributorLanguages(contributor){return Object.entries(contributor.languages).map((_ref=>{let[language,percentageUsed]=_ref;return{language,percentageUsed}})).slice().sort(((a,b)=>b.percentageUsed-a.percentageUsed)).sort(((a,b)=>a.percentageUsed<b.percentageUsed?1:-1)).slice(0,2).map((lang=>lang.language))}(user):[],days=(0,get_prs_to_days.f)(prData,Number(null!=range?range:30)),totalPrs=days.reduce(((acc,curr)=>acc+curr.y),0),last30days=[{id:"last30-".concat(login),color:"hsl(63, 70%, 50%)",data:days}],mergedPrs=data.filter((prData=>prData.pr_is_merged)),[firstContributorLanguage,secondContributorLanguage]=contributorLanguageList;return __jsx(react.Fragment,null,__jsx("div",{className:"px-2 py-2 overflow-hidden md:px-5 odd:bg-white md:hidden even:bg-light-slate-2"},__jsx("div",{className:"flex items-center gap-x-3 text-light-slate-12"},handleOnSelectContributor&&__jsx(Checkbox_checkbox.Z,{checked:!!selected,disabled:!user,title:user?"":"Connect to GitHub",onCheckedChange:state=>null==handleOnSelectContributor?void 0:handleOnSelectContributor(state,contributor),className:"".concat(user&&"border-orange-500 hover:bg-orange-600")}),__jsx("div",{className:"w-[68%]"},__jsx(dev_profile.Z,{username:login,hasBorder:!contributor.author_login,oscrRating:contributor.oscr})),__jsx("div",{className:"w-[34%] text-normal text-light-slate-11  h-full"},__jsx("div",{className:"flex flex-col gap-x-3"},__jsx("p",null,getLastContributionDate(mergedPrs))," ",__jsx("p",{className:"text-sm font-normal truncate text-light-slate-9 md:hidden lg:max-w-[8.12rem]",title:(null==user?void 0:user.company)||getLastContributedRepo(data)},(null==user?void 0:user.company)||getLastContributedRepo(data)))),__jsx("div",null,__jsx("div",{onClick:()=>setTableOpen(!tableOpen),className:"items-center justify-between w-6 h-6 p-1 border rounded-md "},__jsx(tableOpen?ChevronUpIcon:ChevronDownIcon,null)))),__jsx("div",{className:"".concat(!tableOpen&&"max-h-0","   text-light-slate-11 text-sm transition")},__jsx("div",{className:"px-2 py-3"},last30days&&__jsx(sparkline.Z,{data:last30days,width:"100%",height:54})),__jsx("div",{className:"flex items-center justify-between py-3 border-b"},__jsx("div",null,"Activity"),(0,repo_row.K)(totalPrs,!1)),__jsx("div",{className:"flex items-center justify-between py-3 border-b"},__jsx("div",null,"Contributions"),__jsx("div",{className:"flex gap-x-3"},__jsx("p",null,mergedPrs.length))),__jsx("div",{className:"flex items-center justify-between py-3 border-b"},__jsx("div",null,"Repositories"),__jsx("div",{className:"flex gap-x-3"},__jsx("p",null,repoList.length))),__jsx("div",{className:"flex items-center justify-between py-3 border-b"},__jsx("div",null,"Languages"),contributorLanguageList.length>0?__jsx("div",null,firstContributorLanguage&&getLanguageAbbreviation(firstContributorLanguage),secondContributorLanguage&&", ".concat(getLanguageAbbreviation(secondContributorLanguage))):__jsx("div",null,fallback_values.I)),__jsx("div",{className:"flex items-center justify-between py-3 border-b"},__jsx("div",null,"Time Zone"),__jsx("div",{className:"flex gap-x-3"},user&&user.timezone?__jsx("p",null,user.timezone):"-")))),__jsx("div",{className:"".concat(repositories_table.A.row," !gap-6 text-light-slate-11")},handleOnSelectContributor&&__jsx(Checkbox_checkbox.Z,{checked:!!selected,disabled:!user,title:user?"":"Connect to GitHub",onCheckedChange:state=>null==handleOnSelectContributor?void 0:handleOnSelectContributor(!!state,contributor),className:"".concat(user&&"border-orange-500 hover:bg-orange-600")}),__jsx("div",{className:(0,clsx_m.Z)("flex-1 lg:min-w-[12.5rem] overflow-hidden")},__jsx(dev_profile.Z,{username:login,hasBorder:!contributor.author_login})),showOscr?__jsx("div",{className:(0,clsx_m.Z)("flex-1 lg:max-w-[5rem] text-light-slate-11 justify-center lg:flex ")},__jsx("div",{className:"flex gap-x-3"},contributor.oscr&&null!==(_OscrPill=__jsx(OscrPill.O,{rating:contributor.oscr}))&&void 0!==_OscrPill?_OscrPill:"-")):null,__jsx("div",{className:(0,clsx_m.Z)("flex-1 hidden lg:flex lg:max-w-[6.25rem] justify-center")},contributor.author_login?repoList.length:"-"),__jsx("div",{className:(0,clsx_m.Z)("flex-1 lg:max-w-[130px]  flex text-light-slate-11 justify-center ")},__jsx("div",{className:"flex flex-col"},__jsx("p",null,contributor.author_login?getLastContributionDate(mergedPrs):"-")," ",__jsx("p",{className:"hidden whitespace-nowrap overflow-hidden overflow-ellipsis text-sm font-normal md:inline-flex text-light-slate-9 lg:max-w-[8.12rem]",title:(null==user?void 0:user.company)||getLastContributedRepo(data)},(null==user?void 0:user.company)||getLastContributedRepo(data)))),__jsx("div",{className:(0,clsx_m.Z)("flex-1 hidden lg:max-w-[7.5rem]  justify-center lg:flex")},contributorLanguageList&&__jsx("p",null,firstContributorLanguage&&getLanguageAbbreviation(firstContributorLanguage),secondContributorLanguage&&", ".concat(getLanguageAbbreviation(secondContributorLanguage)))),__jsx("div",{className:(0,clsx_m.Z)("flex-1 hidden justify-center  lg:flex lg:max-w-[7.5rem]")},__jsx("p",null,contributor.author_login?mergedPrs.length:"-")),__jsx("div",{className:(0,clsx_m.Z)("flex-1 lg:min-w-[9.37rem] hidden lg:flex justify-center")},contributor.author_login&&last30days?__jsx(sparkline.Z,{data:last30days,width:"100%",height:54}):"-")))};try{contributorlisttablerow.displayName="contributorlisttablerow",contributorlisttablerow.__docgenInfo={description:"",displayName:"contributorlisttablerow",props:{contributor:{defaultValue:null,description:"",name:"contributor",required:!0,type:{name:"DbPRContributor"}},topic:{defaultValue:null,description:"",name:"topic",required:!0,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},handleOnSelectContributor:{defaultValue:null,description:"",name:"handleOnSelectContributor",required:!1,type:{name:"((state: boolean, contributor: DbPRContributor) => void)"}},range:{defaultValue:null,description:"",name:"range",required:!0,type:{name:"string"}},showOscr:{defaultValue:{value:"false"},description:"",name:"showOscr",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/ContributorListTableRow/contributor-list-table-row.tsx#contributorlisttablerow"]={docgenInfo:contributorlisttablerow.__docgenInfo,name:"contributorlisttablerow",path:"components/molecules/ContributorListTableRow/contributor-list-table-row.tsx#contributorlisttablerow"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/DevProfile/dev-profile.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),components_atoms_Avatar_avatar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/Avatar/avatar.tsx"),lib_utils_github__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/utils/github.ts"),components_atoms_Avatar_avatar_hover_card__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/atoms/Avatar/avatar-hover-card.tsx"),components_Contributors_OscrPill__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./components/Contributors/OscrPill.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const DevProfile=_ref=>{let{username,hasBorder,size="small",truncate,oscrRating}=_ref;return __jsx("section",{className:"flex items-center gap-2 text-light-slate-11"},__jsx("div",{className:"flex gap-2 md:hidden"},__jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href:"/u/".concat(username),className:"flex items-center rounded-full"},__jsx(components_atoms_Avatar_avatar__WEBPACK_IMPORTED_MODULE_2__.Z,{className:hasBorder?"ring-2 ring-orange-500":"",size:45,isCircle:!0,hasBorder,avatarURL:(0,lib_utils_github__WEBPACK_IMPORTED_MODULE_3__.cc)(username)})),__jsx("div",{className:"flex flex-col items-start gap-1"},__jsx("span",{className:"".concat(truncate&&"truncate"," text-light-slate-12 font-semibold")},username),void 0!==oscrRating?__jsx(components_Contributors_OscrPill__WEBPACK_IMPORTED_MODULE_5__.O,{rating:oscrRating}):null)),__jsx("div",{className:"hidden md:flex justify-items-center gap-2"},__jsx("div",{className:"rounded-full md:flex items-center"},__jsx(components_atoms_Avatar_avatar_hover_card__WEBPACK_IMPORTED_MODULE_4__.Z,{contributor:username,repositories:[],size})),__jsx("div",{className:"grid gap-1 items-center"},__jsx("h1",{className:"".concat(truncate&&"truncate"," text-light-slate-12")},username),void 0!==oscrRating?__jsx(components_Contributors_OscrPill__WEBPACK_IMPORTED_MODULE_5__.O,{rating:oscrRating}):null)))};DevProfile.displayName="DevProfile";const __WEBPACK_DEFAULT_EXPORT__=DevProfile;try{devprofile.displayName="devprofile",devprofile.__docgenInfo={description:"",displayName:"devprofile",props:{username:{defaultValue:null,description:"",name:"username",required:!0,type:{name:"string"}},hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!0,type:{name:"boolean"}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"xsmall"'},{value:'"medium"'},{value:'"large"'}]}},truncate:{defaultValue:null,description:"",name:"truncate",required:!1,type:{name:"boolean"}},oscrRating:{defaultValue:null,description:"",name:"oscrRating",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/DevProfile/dev-profile.tsx#devprofile"]={docgenInfo:devprofile.__docgenInfo,name:"devprofile",path:"components/molecules/DevProfile/dev-profile.tsx#devprofile"})}catch(__react_docgen_typescript_loader_error){}}}]);