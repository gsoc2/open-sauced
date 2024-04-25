"use strict";(self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[]).push([[5543],{"./components/atoms/Search/search.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Focused:()=>Focused,WithRichSuggestions:()=>WithRichSuggestions,WithSuggestions:()=>WithSuggestions,WithSuggestionsLabel:()=>WithSuggestionsLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Focused$parameters,_Focused$parameters2,_WithSuggestions$para,_WithSuggestions$para2,_WithRichSuggestions$,_WithRichSuggestions$2,_WithSuggestionsLabel,_WithSuggestionsLabel2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Avatar_avatar_hover_card__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/Avatar/avatar-hover-card.tsx"),_search__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/atoms/Search/search.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Shared/Search",component:_search__WEBPACK_IMPORTED_MODULE_3__.Z,args:{placeholder:"Search repositories",name:"Search"}},Default={},Focused={args:{autoFocus:!0}},WithSuggestions={args:{suggestions:["openarch/north","opencv/opencv","openmusic5/featurecity"]}},WithRichSuggestions={args:{suggestions:new Array(5).fill("").map(((_,i)=>{const fullRepoName="".concat("open-sauced","/awesome-pizza-project-").concat(i);return{key:fullRepoName,node:__jsx("div",{key:fullRepoName,className:"flex items-center gap-2"},__jsx(_Avatar_avatar_hover_card__WEBPACK_IMPORTED_MODULE_2__.q,{contributor:"open-sauced",size:"xsmall"}),__jsx("span",null,fullRepoName))}}))}},WithSuggestionsLabel={args:{suggestionsLabel:"Suggested repositories",suggestions:new Array(5).fill("").map(((_,i)=>{const fullRepoName="".concat("open-sauced","/awesome-pizza-project-").concat(i);return{key:fullRepoName,node:__jsx("div",{key:fullRepoName,className:"flex items-center gap-2"},__jsx(_Avatar_avatar_hover_card__WEBPACK_IMPORTED_MODULE_2__.q,{contributor:"open-sauced",size:"xsmall"}),__jsx("span",null,fullRepoName))}}))}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Focused.parameters=_objectSpread(_objectSpread({},Focused.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Focused$parameters=Focused.parameters)||void 0===_Focused$parameters?void 0:_Focused$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    autoFocus: true\n  }\n}"},null===(_Focused$parameters2=Focused.parameters)||void 0===_Focused$parameters2||null===(_Focused$parameters2=_Focused$parameters2.docs)||void 0===_Focused$parameters2?void 0:_Focused$parameters2.source)})}),WithSuggestions.parameters=_objectSpread(_objectSpread({},WithSuggestions.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithSuggestions$para=WithSuggestions.parameters)||void 0===_WithSuggestions$para?void 0:_WithSuggestions$para.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    suggestions: ["openarch/north", "opencv/opencv", "openmusic5/featurecity"]\n  }\n}'},null===(_WithSuggestions$para2=WithSuggestions.parameters)||void 0===_WithSuggestions$para2||null===(_WithSuggestions$para2=_WithSuggestions$para2.docs)||void 0===_WithSuggestions$para2?void 0:_WithSuggestions$para2.source)})}),WithRichSuggestions.parameters=_objectSpread(_objectSpread({},WithRichSuggestions.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithRichSuggestions$=WithRichSuggestions.parameters)||void 0===_WithRichSuggestions$?void 0:_WithRichSuggestions$.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    suggestions: new Array(5).fill("").map((_, i) => {\n      const owner = "open-sauced";\n      const fullRepoName = `${owner}/awesome-pizza-project-${i}`;\n      return {\n        key: fullRepoName,\n        node: <div key={fullRepoName} className="flex items-center gap-2">\n            <Avatar contributor={owner} size="xsmall" />\n            <span>{fullRepoName}</span>\n          </div>\n      };\n    })\n  }\n}'},null===(_WithRichSuggestions$2=WithRichSuggestions.parameters)||void 0===_WithRichSuggestions$2||null===(_WithRichSuggestions$2=_WithRichSuggestions$2.docs)||void 0===_WithRichSuggestions$2?void 0:_WithRichSuggestions$2.source)})}),WithSuggestionsLabel.parameters=_objectSpread(_objectSpread({},WithSuggestionsLabel.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithSuggestionsLabel=WithSuggestionsLabel.parameters)||void 0===_WithSuggestionsLabel?void 0:_WithSuggestionsLabel.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    suggestionsLabel: "Suggested repositories",\n    suggestions: new Array(5).fill("").map((_, i) => {\n      const owner = "open-sauced";\n      const fullRepoName = `${owner}/awesome-pizza-project-${i}`;\n      return {\n        key: fullRepoName,\n        node: <div key={fullRepoName} className="flex items-center gap-2">\n            <Avatar contributor={owner} size="xsmall" />\n            <span>{fullRepoName}</span>\n          </div>\n      };\n    })\n  }\n}'},null===(_WithSuggestionsLabel2=WithSuggestionsLabel.parameters)||void 0===_WithSuggestionsLabel2||null===(_WithSuggestionsLabel2=_WithSuggestionsLabel2.docs)||void 0===_WithSuggestionsLabel2?void 0:_WithSuggestionsLabel2.source)})});const __namedExportsOrder=["Default","Focused","WithSuggestions","WithRichSuggestions","WithSuggestionsLabel"]},"./components/atoms/Avatar/avatar-hover-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>Avatar,Z:()=>avatar_hover_card});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),index_module=__webpack_require__("./node_modules/@radix-ui/react-hover-card/dist/index.module.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),next_router=__webpack_require__("./node_modules/next/router.js"),useFetchUser=__webpack_require__("./lib/hooks/useFetchUser.ts"),useContributorPullRequestsChart=__webpack_require__("./lib/hooks/useContributorPullRequestsChart.ts"),github=__webpack_require__("./lib/utils/github.ts"),contributor_hover_card=__webpack_require__("./components/molecules/ContributorHoverCard/contributor-hover-card.tsx"),__jsx=react.createElement;const hover_card_wrapper=_ref=>{let{username,repositories}=_ref;const topic=(0,next_router.useRouter)().query.pageId,{data:contributor}=(0,useFetchUser.j)(username),{repoList}=(0,useContributorPullRequestsChart.u)(username,"*",repositories,"30"),profile={githubAvatar:(0,github.cc)(username,40),githubName:username,totalPR:repoList.length},{is_maintainer,first_opened_pr_at}=null!=contributor?contributor:{};return __jsx(react.Fragment,null,__jsx(contributor_hover_card.Z,{dateOfFirstPr:first_opened_pr_at,totalPR:profile.totalPR,githubAvatar:profile.githubAvatar,githubName:profile.githubName,repoList,topic,repositories,isMaintainer:!!is_maintainer}))};try{hovercardwrapper.displayName="hovercardwrapper",hovercardwrapper.__docgenInfo={description:"",displayName:"hovercardwrapper",props:{username:{defaultValue:null,description:"",name:"username",required:!0,type:{name:"string"}},repositories:{defaultValue:null,description:"",name:"repositories",required:!1,type:{name:"number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/HoverCardWrapper/hover-card-wrapper.tsx#hovercardwrapper"]={docgenInfo:hovercardwrapper.__docgenInfo,name:"hovercardwrapper",path:"components/molecules/HoverCardWrapper/hover-card-wrapper.tsx#hovercardwrapper"})}catch(__react_docgen_typescript_loader_error){}var avatar_hover_card_jsx=react.createElement;const Avatar=_ref=>{let{contributor,size="large"}=_ref,width=500,height=500;switch(size){case"xsmall":width=24,height=24;break;case"small":width=45,height=45;break;case"medium":width=35,height=35}return avatar_hover_card_jsx(next_image.Z,{alt:contributor,className:"border rounded-full",height:width,src:(0,github.cc)(contributor,40),width:height})};Avatar.displayName="Avatar";const AvatarHoverCard=_ref2=>{let{contributor,repositories,size="large"}=_ref2;return avatar_hover_card_jsx(index_module.fC,null,avatar_hover_card_jsx(link_default(),{href:"/user/".concat(contributor),as:"/user/".concat(contributor)},avatar_hover_card_jsx(index_module.xz,null,avatar_hover_card_jsx(Avatar,{contributor,size}))),avatar_hover_card_jsx(index_module.h_,null,avatar_hover_card_jsx(index_module.VY,{sideOffset:5},avatar_hover_card_jsx(hover_card_wrapper,{username:contributor,repositories}))))};AvatarHoverCard.displayName="AvatarHoverCard";const avatar_hover_card=AvatarHoverCard;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{contributor:{defaultValue:null,description:"",name:"contributor",required:!0,type:{name:"string"}},size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Avatar/avatar-hover-card.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"components/atoms/Avatar/avatar-hover-card.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}try{avatarhovercard.displayName="avatarhovercard",avatarhovercard.__docgenInfo={description:"",displayName:"avatarhovercard",props:{contributor:{defaultValue:null,description:"",name:"contributor",required:!0,type:{name:"string"}},size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'}]}},repositories:{defaultValue:null,description:"",name:"repositories",required:!0,type:{name:"number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Avatar/avatar-hover-card.tsx#avatarhovercard"]={docgenInfo:avatarhovercard.__docgenInfo,name:"avatarhovercard",path:"components/atoms/Avatar/avatar-hover-card.tsx#avatarhovercard"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/ScrollArea/scroll-area.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{fK:()=>ScrollViewport,xr:()=>ScrollArea});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-scroll-area/dist/index.mjs"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["className","children"],_excluded2=["className","children"],_excluded3=["className","orientation"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const ScrollArea=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,children}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.fC,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("relative overflow-hidden",className)},props),__jsx(ScrollViewport,null,children))}));ScrollArea.displayName=_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.fC.displayName;const ScrollViewport=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref2,ref)=>{let{className,children}=_ref2,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref2,_excluded2);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.l_,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("h-full w-full rounded-[inherit]",className)},props),children),__jsx(ScrollBar,null),__jsx(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.Ns,null))}));ScrollViewport.displayName=_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.l_.displayName;const ScrollBar=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref3,ref)=>{let{className,orientation="vertical"}=_ref3,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref3,_excluded3);return __jsx(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.LW,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("flex touch-none select-none p-0.5 transition-colors duration-[160ms] ease-out","vertical"===orientation&&"h-full w-2 border-l border-l-transparent","horizontal"===orientation&&"h-2 border-t border-t-transparent",className),orientation},props),__jsx(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.bU,{className:"relative bg-light-slate-5 flex-1 rounded-full bg-border"}))}));ScrollBar.displayName=_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.LW.displayName;try{ScrollArea.displayName="ScrollArea",ScrollArea.__docgenInfo={description:"",displayName:"ScrollArea",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/ScrollArea/scroll-area.tsx#ScrollArea"]={docgenInfo:ScrollArea.__docgenInfo,name:"ScrollArea",path:"components/atoms/ScrollArea/scroll-area.tsx#ScrollArea"})}catch(__react_docgen_typescript_loader_error){}try{ScrollViewport.displayName="ScrollViewport",ScrollViewport.__docgenInfo={description:"",displayName:"ScrollViewport",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/ScrollArea/scroll-area.tsx#ScrollViewport"]={docgenInfo:ScrollViewport.__docgenInfo,name:"ScrollViewport",path:"components/atoms/ScrollArea/scroll-area.tsx#ScrollViewport"})}catch(__react_docgen_typescript_loader_error){}try{ScrollBar.displayName="ScrollBar",ScrollBar.__docgenInfo={description:"",displayName:"ScrollBar",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/ScrollArea/scroll-area.tsx#ScrollBar"]={docgenInfo:ScrollBar.__docgenInfo,name:"ScrollBar",path:"components/atoms/ScrollArea/scroll-area.tsx#ScrollBar"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Search/search.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_icons_gr__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-icons/gr/index.mjs"),react_icons_fa__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-icons/fa/index.mjs"),_SpinLoader_spin_loader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/atoms/SpinLoader/spin-loader.tsx"),_ScrollArea_scroll_area__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/ScrollArea/scroll-area.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const suggestionsStyle={"-webkit-line-clamp":"1",display:"-webkit-box","-webkit-box-orient":"vertical"},Search=_ref=>{let{placeholder,name,value,autoFocus,className,onSearch,suggestions=[],suggestionsLabel,onChange,isLoading,onSelect,isDisabled}=_ref;const{0:cursor,1:setCursor}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),{0:search,1:setSearch}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value),{0:showSuggestions,1:setShowSuggestions}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),handleOnSearch=()=>{null==onSearch||onSearch(search)};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setSearch(value)}),[value]);const handleOnSelect=suggestion=>{onSelect?(onSelect(suggestion),setSearch("")):(setSearch(suggestion),null==onSearch||onSearch(suggestion)),setShowSuggestions(!1),setCursor(-1)};return __jsx("div",{className:"".concat(className&&className," flex bg-white py-1 px-3 shadow-input border transition focus-within:ring focus-within:border-orange-500 focus-within:ring-orange-100 rounded-lg ring-light-slate-6 items-center relative min-w-[15rem]")},__jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.U41,{className:"text-light-slate-9",fontSize:16,onClick:handleOnSearch}),__jsx("input",{className:"w-full pl-2 placeholder:text-sm focus:outline-none placeholder:text-slate-400 disabled:cursor-not-allowed",autoFocus,placeholder,name,value:search,type:"search",id:name,onChange:e=>{setSearch(e.target.value),null==onChange||onChange(e.target.value)},onKeyUp:e=>{"Enter"===e.code&&handleOnSearch()},disabled:isDisabled,onKeyDown:e=>{const resultsCount=(null==suggestions?void 0:suggestions.length)||0;if(resultsCount&&"ArrowUp"===e.key&&(e.preventDefault(),setCursor(0===cursor?Math.min(resultsCount-1,9):cursor-1)),resultsCount&&"ArrowDown"===e.key&&(e.preventDefault(),setCursor(cursor===Math.min(resultsCount-1,9)?0:cursor+1)),resultsCount&&"Enter"===e.key&&(e.preventDefault(),document.querySelector("._cursorActive"))){const{suggestion}=document.querySelector("._cursorActive").dataset;suggestion&&suggestion.length>0&&(handleOnSelect(suggestion),setCursor(-1))}},onFocus:()=>setShowSuggestions(!0),onBlur:()=>setTimeout((()=>setShowSuggestions(!1)),500)}),suggestions&&suggestions.length>0&&showSuggestions&&__jsx("div",{className:"absolute left-0 z-10 w-full pb-1 space-y-1 bg-white border rounded-lg cursor-pointer shadow-input border-light-slate-6 top-full"},__jsx(_ScrollArea_scroll_area__WEBPACK_IMPORTED_MODULE_2__.xr,{type:"auto",className:"h-60"},suggestionsLabel&&suggestions.length>0?__jsx("div",{className:"pl-5 pt-4"},suggestionsLabel):null,suggestions.map(((suggestion,index)=>__jsx("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(cursor===index&&"_cursorActive bg-slate-100","px-4 py-2 hover:bg-light-slate-2","[&_span]:max-w-[13rem]"),style:suggestionsStyle,key:index,"data-suggestion":"string"==typeof suggestion?suggestion:suggestion.key,onClick:event=>{const{suggestion}=event.currentTarget.dataset;suggestion&&handleOnSelect(suggestion)}},"string"==typeof suggestion?__jsx("span",{className:"pl-5 text-sm md:mw-auto inline-block text-ellipsis truncate tracking-tighter"},suggestion):suggestion.node))))),search&&__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,isLoading?__jsx(_SpinLoader_spin_loader__WEBPACK_IMPORTED_MODULE_1__.$,{className:"w-5 h-5"}):__jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_5__.nfZ,{className:"cursor-pointer text-light-slate-9",fontSize:16,onClick:()=>{setSearch(""),null==onSearch||onSearch(""),null==onChange||onChange("")}})))};Search.displayName="Search";const __WEBPACK_DEFAULT_EXPORT__=Search;try{search.displayName="search",search.__docgenInfo={description:"",displayName:"search",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onSearch:{defaultValue:null,description:"",name:"onSearch",required:!1,type:{name:"((search?: string) => void)"}},suggestions:{defaultValue:{value:"[]"},description:"",name:"suggestions",required:!1,type:{name:"string[] | RichSearchSuggestion[]"}},suggestionsLabel:{defaultValue:null,description:"",name:"suggestionsLabel",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((value: string) => void)"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Search/search.tsx#search"]={docgenInfo:search.__docgenInfo,name:"search",path:"components/atoms/Search/search.tsx#search"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/SpinLoader/spin-loader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Spinner,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["className"],_excluded2=["className"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const SpinLoader=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("div",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref},props,{className:"flex justify-center w-full pt-36 "}),__jsx(Spinner,{className:"mr-2 md:w-16 md:h-16"}))}));SpinLoader.displayName="SpinLoader";const __WEBPACK_DEFAULT_EXPORT__=SpinLoader,Spinner=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref2,ref)=>{let{className}=_ref2,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref2,_excluded2);return __jsx("div",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref},props,{role:"status"}),__jsx("svg",{"aria-hidden":"true",className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("inline w-6 h-6 text-gray-200 animate-spin fill-light-slate-8",className),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},__jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),__jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})),__jsx("span",{className:"sr-only"},"Loading..."))}));Spinner.displayName="Spinner";try{SpinLoader.displayName="SpinLoader",SpinLoader.__docgenInfo={description:"",displayName:"SpinLoader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/SpinLoader/spin-loader.tsx#SpinLoader"]={docgenInfo:SpinLoader.__docgenInfo,name:"SpinLoader",path:"components/atoms/SpinLoader/spin-loader.tsx#SpinLoader"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/ContributorHoverCard/contributor-hover-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/router.js"),lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./lib/utils/date-utils.ts"),components_atoms_Badge_badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/Badge/badge.tsx"),_CardProfile_card_profile__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/molecules/CardProfile/card-profile.tsx"),_CardRepoList_card_repo_list__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/molecules/CardRepoList/card-repo-list.tsx"),_PullRequestTable_pull_request_table__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./components/molecules/PullRequestTable/pull-request-table.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const ContributorHoverCard=_ref=>{let{repoList,githubName,totalPR,dateOfFirstPr,githubAvatar,repositories,isMaintainer}=_ref;const topic=(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query.pageId,calculatedDateFromToday=dateOfFirstPr?(0,lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_6__.wu)(new Date(parseInt(dateOfFirstPr).toString())):"-";return __jsx("div",{className:"w-[364px] bg-white gap-4 p-3 rounded-lg shadow-superlative flex flex-col"},__jsx("div",{className:"flex items-center justify-between"},__jsx(_CardProfile_card_profile__WEBPACK_IMPORTED_MODULE_3__.Z,{dateOfFirstPR:calculatedDateFromToday,githubAvatar,githubName,totalPRs:totalPR,isRoundedAvatar:!0}),isMaintainer&&__jsx(components_atoms_Badge_badge__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"maintainer"})),__jsx("div",null,__jsx(_PullRequestTable_pull_request_table__WEBPACK_IMPORTED_MODULE_5__.Z,{isHoverCard:!0,repositories,limit:5,contributor:githubName,topic})),__jsx("div",null,__jsx(_CardRepoList_card_repo_list__WEBPACK_IMPORTED_MODULE_4__.Z,{repoList,limit:3})))};ContributorHoverCard.displayName="ContributorHoverCard";const __WEBPACK_DEFAULT_EXPORT__=ContributorHoverCard;try{contributorhovercard.displayName="contributorhovercard",contributorhovercard.__docgenInfo={description:"",displayName:"contributorhovercard",props:{repoList:{defaultValue:null,description:"",name:"repoList",required:!0,type:{name:"RepoList[]"}},githubAvatar:{defaultValue:null,description:"",name:"githubAvatar",required:!0,type:{name:"string"}},githubName:{defaultValue:null,description:"",name:"githubName",required:!0,type:{name:"string"}},totalPR:{defaultValue:null,description:"",name:"totalPR",required:!0,type:{name:"number"}},dateOfFirstPr:{defaultValue:null,description:"",name:"dateOfFirstPr",required:!0,type:{name:"string | undefined"}},topic:{defaultValue:null,description:"",name:"topic",required:!1,type:{name:"string"}},repositories:{defaultValue:null,description:"",name:"repositories",required:!1,type:{name:"number[]"}},isMaintainer:{defaultValue:null,description:"",name:"isMaintainer",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/ContributorHoverCard/contributor-hover-card.tsx#contributorhovercard"]={docgenInfo:contributorhovercard.__docgenInfo,name:"contributorhovercard",path:"components/molecules/ContributorHoverCard/contributor-hover-card.tsx#contributorhovercard"})}catch(__react_docgen_typescript_loader_error){}}}]);