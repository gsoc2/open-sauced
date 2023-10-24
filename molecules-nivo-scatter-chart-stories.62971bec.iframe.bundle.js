"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[4073],{"./components/atoms/Avatar/avatar-hover-card.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return avatar_hover_card}});var react=__webpack_require__("./node_modules/react/index.js"),index_module=__webpack_require__("./node_modules/@radix-ui/react-hover-card/dist/index.module.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),next_router=__webpack_require__("./node_modules/next/router.js"),useFetchUser=__webpack_require__("./lib/hooks/useFetchUser.ts"),useContributorPullRequestsChart=__webpack_require__("./lib/hooks/useContributorPullRequestsChart.ts"),github=__webpack_require__("./lib/utils/github.ts"),contributor_hover_card=__webpack_require__("./components/molecules/ContributorHoverCard/contributor-hover-card.tsx"),__jsx=react.createElement,HoverCardWrapper=function HoverCardWrapper(_ref){var username=_ref.username,repositories=_ref.repositories,topic=(0,next_router.useRouter)().query.pageId,contributor=(0,useFetchUser.j)(username).data,repoList=(0,useContributorPullRequestsChart.u)(username,"*",repositories).repoList,profile={githubAvatar:(0,github.cc)(username,40),githubName:username,totalPR:repoList.length},_ref2=null!=contributor?contributor:{},is_maintainer=_ref2.is_maintainer,first_opened_pr_at=_ref2.first_opened_pr_at;return __jsx(react.Fragment,null,__jsx(contributor_hover_card.Z,{dateOfFirstPr:first_opened_pr_at,totalPR:profile.totalPR,githubAvatar:profile.githubAvatar,githubName:profile.githubName,repoList:repoList,topic:topic,repositories:repositories,isMaintainer:!!is_maintainer}))};HoverCardWrapper.__docgenInfo={description:"",methods:[],displayName:"HoverCardWrapper",props:{username:{required:!0,tsType:{name:"string"},description:""},repositories:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""}}};var hover_card_wrapper=HoverCardWrapper;try{hovercardwrapper.displayName="hovercardwrapper",hovercardwrapper.__docgenInfo={description:"",displayName:"hovercardwrapper",props:{username:{defaultValue:null,description:"",name:"username",required:!0,type:{name:"string"}},repositories:{defaultValue:null,description:"",name:"repositories",required:!1,type:{name:"number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/HoverCardWrapper/hover-card-wrapper.tsx#hovercardwrapper"]={docgenInfo:hovercardwrapper.__docgenInfo,name:"hovercardwrapper",path:"components/molecules/HoverCardWrapper/hover-card-wrapper.tsx#hovercardwrapper"})}catch(__react_docgen_typescript_loader_error){}var avatar_hover_card_jsx=react.createElement,AvatarHoverCard=function AvatarHoverCard(_ref){var contributor=_ref.contributor,repositories=_ref.repositories,_ref$size=_ref.size,width=500,height=500;if("small"===(void 0===_ref$size?"large":_ref$size))width=35,height=35;return avatar_hover_card_jsx(index_module.fC,null,avatar_hover_card_jsx(link_default(),{href:"/user/".concat(contributor),as:"/user/".concat(contributor)},avatar_hover_card_jsx(index_module.xz,{asChild:!0},avatar_hover_card_jsx(next_image.Z,{alt:contributor,className:"border rounded-full",height:width,src:(0,github.cc)(contributor,40),width:height}))),avatar_hover_card_jsx(index_module.h_,null,avatar_hover_card_jsx(index_module.VY,{sideOffset:5},avatar_hover_card_jsx(hover_card_wrapper,{username:contributor,repositories:repositories}))))};AvatarHoverCard.displayName="AvatarHoverCard",AvatarHoverCard.__docgenInfo={description:"",methods:[],displayName:"AvatarHoverCard",props:{size:{defaultValue:{value:'"large"',computed:!1},required:!1,tsType:{name:"union",raw:'"small" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'}]},description:""},contributor:{required:!0,tsType:{name:"string"},description:""},repositories:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""}}};var avatar_hover_card=AvatarHoverCard;try{avatarhovercard.displayName="avatarhovercard",avatarhovercard.__docgenInfo={description:"",displayName:"avatarhovercard",props:{contributor:{defaultValue:null,description:"",name:"contributor",required:!0,type:{name:"string"}},repositories:{defaultValue:null,description:"",name:"repositories",required:!0,type:{name:"number[]"}},size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Avatar/avatar-hover-card.tsx#avatarhovercard"]={docgenInfo:avatarhovercard.__docgenInfo,name:"avatarhovercard",path:"components/atoms/Avatar/avatar-hover-card.tsx#avatarhovercard"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/ToggleGroup/toggle-group.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return toggle_group}});var react=__webpack_require__("./node_modules/react/index.js"),index_module=__webpack_require__("./node_modules/@radix-ui/react-toggle-group/dist/index.module.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),__jsx=react.createElement,ToggleGroupItem=function ToggleGroupItem(_ref){var checked=_ref.checked,value=_ref.value,children=_ref.children;return __jsx(index_module.ck,{value:value,className:(0,clsx_m.Z)("text-sm text-light-slate-11 px-4 py-2 m-0.5 rounded-md font-semibold",checked&&"bg-light-slate-1 text-light-slate-12")},children)};ToggleGroupItem.displayName="ToggleGroupItem",ToggleGroupItem.__docgenInfo={description:"",methods:[],displayName:"ToggleGroupItem",props:{checked:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};var toggle_group_item=ToggleGroupItem;try{togglegroupitem.displayName="togglegroupitem",togglegroupitem.__docgenInfo={description:"",displayName:"togglegroupitem",props:{checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/ToggleGroupItem/toggle-group-item.tsx#togglegroupitem"]={docgenInfo:togglegroupitem.__docgenInfo,name:"togglegroupitem",path:"components/atoms/ToggleGroupItem/toggle-group-item.tsx#togglegroupitem"})}catch(__react_docgen_typescript_loader_error){}var toggle_group_jsx=react.createElement,ToggleGroup=function ToggleGroup(_ref){var children=_ref.children,_ref$allowNone=_ref.allowNone,allowNone=void 0!==_ref$allowNone&&_ref$allowNone,_ref$defaultSelection=_ref.defaultSelection,defaultSelection=void 0===_ref$defaultSelection?"0":_ref$defaultSelection,handleChange=_ref.handleChange,className=_ref.className,_useState=(0,react.useState)(defaultSelection+""),value=_useState[0],setValue=_useState[1];return children?toggle_group_jsx(index_module.fC,{type:"single",value:value,onValueChange:function handleValueChange(value){(value||allowNone)&&(setValue(value),handleChange&&handleChange(value))},className:"bg-light-slate-6 rounded-lg p-0.25 ".concat(className&&className)},Array.isArray(children)?children.map((function(child,index){return toggle_group_jsx(toggle_group_item,{checked:value=="".concat(index),value:"".concat(index),key:index},child)})):toggle_group_jsx(toggle_group_item,{checked:"0"==value,value:"0"},children)):null};ToggleGroup.displayName="ToggleGroup",ToggleGroup.__docgenInfo={description:"A ToggleGroup component that allows the user to select one option from a list of options.\nWarning: Do NOT re-order the children after the component has been rendered.\n\n@example\n<ToggleGroup>\n     <>Option 1</> // React Fragment. Will use our styling\n     <>Option <span>2</span></> // Can be a nested component\n     <div>Option 3</div> // Any type of component can be used\n</ToggleGroup>",methods:[],displayName:"ToggleGroup",props:{allowNone:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:"Allows the user to deselect an option, resulting in none being selected."},defaultSelection:{defaultValue:{value:'"0"',computed:!1},required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Decides which option will be selected by default. Provide the position of the element to be selected starting from 0."},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},handleChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{name:"value",type:{name:"string"}}],return:{name:"void"}}},description:"Callback function that is called when the user selects an option, and the position of the selected element is passed into as string, starting with '0'."},className:{required:!1,tsType:{name:"string"},description:""}}};var toggle_group=ToggleGroup;try{togglegroup.displayName="togglegroup",togglegroup.__docgenInfo={description:"A ToggleGroup component that allows the user to select one option from a list of options.\nWarning: Do NOT re-order the children after the component has been rendered.",displayName:"togglegroup",props:{allowNone:{defaultValue:{value:"false"},description:"Allows the user to deselect an option, resulting in none being selected.",name:"allowNone",required:!1,type:{name:"boolean"}},defaultSelection:{defaultValue:{value:"0"},description:"Decides which option will be selected by default. Provide the position of the element to be selected starting from 0.",name:"defaultSelection",required:!1,type:{name:"string | number"}},handleChange:{defaultValue:null,description:"Callback function that is called when the user selects an option, and the position of the selected element is passed into as string, starting with '0'.",name:"handleChange",required:!1,type:{name:"((value: string) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/ToggleGroup/toggle-group.tsx#togglegroup"]={docgenInfo:togglegroup.__docgenInfo,name:"togglegroup",path:"components/atoms/ToggleGroup/toggle-group.tsx#togglegroup"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/ToggleOption/toggle-option.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_icons_hi__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-icons/hi/index.esm.js"),_ToggleSwitch_toggle_switch__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/atoms/ToggleSwitch/toggle-switch.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,ToggleOption=function ToggleOption(_ref){var optionText=_ref.optionText,withIcon=_ref.withIcon,checked=_ref.checked,handleToggle=_ref.handleToggle;return __jsx("div",{onClick:handleToggle,className:"inline-flex cursor-pointer items-center gap-2 rounded-md px-2 py-0.5 border border-light-slate-6 bg-light-slate-1"},__jsx(_ToggleSwitch_toggle_switch__WEBPACK_IMPORTED_MODULE_1__.Z,{size:"sm",handleToggle:handleToggle,name:optionText,checked:checked}),__jsx("span",{className:"text-sm text-light-slate-11"},optionText),withIcon&&__jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_2__.frK,{title:"An outside contributor is not a member the organization",className:"text-light-slate-9"}))};ToggleOption.displayName="ToggleOption",ToggleOption.__docgenInfo={description:"",methods:[],displayName:"ToggleOption",props:{optionText:{required:!0,tsType:{name:"string"},description:""},withIcon:{required:!1,tsType:{name:"boolean"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},handleToggle:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}},__webpack_exports__.Z=ToggleOption;try{toggleoption.displayName="toggleoption",toggleoption.__docgenInfo={description:"",displayName:"toggleoption",props:{optionText:{defaultValue:null,description:"",name:"optionText",required:!0,type:{name:"string"}},withIcon:{defaultValue:null,description:"",name:"withIcon",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},handleToggle:{defaultValue:null,description:"",name:"handleToggle",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/ToggleOption/toggle-option.tsx#toggleoption"]={docgenInfo:toggleoption.__docgenInfo,name:"toggleoption",path:"components/atoms/ToggleOption/toggle-option.tsx#toggleoption"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/ToggleSwitch/toggle-switch.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-switch/dist/index.module.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,ToggleSwitch=function ToggleSwitch(_ref){var name=_ref.name,_ref$checked=_ref.checked,checked=void 0!==_ref$checked&&_ref$checked,handleToggle=_ref.handleToggle,_ref$size=_ref.size,size=void 0===_ref$size?"base":_ref$size,classNames=_ref.classNames;return __jsx(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_1__.fC,{defaultChecked:!0,checked:checked,onClick:function onClick(){return handleToggle()},id:name,className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(classNames,checked&&"!bg-light-orange-10 justify-end","flex rounded-2xl p-[2px] transition overflow-hidden bg-light-slate-8","lg"===size?"w-14 h-[30px]":"base"===size?"w-10 h-5":"sm"===size?"w-7 h-4":"")},__jsx(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_1__.bU,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("bg-white block rounded-2xl  h-full w-1/2")}))};ToggleSwitch.displayName="ToggleSwitch",ToggleSwitch.__docgenInfo={description:"",methods:[],displayName:"ToggleSwitch",props:{checked:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:""},size:{defaultValue:{value:'"base"',computed:!1},required:!1,tsType:{name:"union",raw:'"sm" | "lg" | "base"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"base"'}]},description:""},name:{required:!0,tsType:{name:"string"},description:""},handleToggle:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},classNames:{required:!1,tsType:{name:"string"},description:""}}},__webpack_exports__.Z=ToggleSwitch;try{toggleswitch.displayName="toggleswitch",toggleswitch.__docgenInfo={description:"",displayName:"toggleswitch",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},handleToggle:{defaultValue:null,description:"",name:"handleToggle",required:!0,type:{name:"() => void"}},size:{defaultValue:{value:"base"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'}]}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/ToggleSwitch/toggle-switch.tsx#toggleswitch"]={docgenInfo:toggleswitch.__docgenInfo,name:"toggleswitch",path:"components/atoms/ToggleSwitch/toggle-switch.tsx#toggleswitch"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Typography/title.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_wrapper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/atoms/Typography/wrapper.tsx"),_excluded=["children","level","weight","className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Title=function Title(_ref){var children=_ref.children,_ref$level=_ref.level,level=void 0===_ref$level?1:_ref$level,_ref$weight=_ref.weight,weight=void 0===_ref$weight?"medium":_ref$weight,className=_ref.className,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded),TitleTag="h".concat(level);return __jsx(_wrapper__WEBPACK_IMPORTED_MODULE_1__.Z,null,__jsx(TitleTag,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(className,"font-".concat(weight))},props),children))};Title.displayName="Title",Title.__docgenInfo={description:"",methods:[],displayName:"Title",props:{level:{defaultValue:{value:"1",computed:!1},required:!1},weight:{defaultValue:{value:'"medium"',computed:!1},required:!1}}},__webpack_exports__.Z=Title;try{title.displayName="title",title.__docgenInfo={description:"",displayName:"title",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:"2"},{value:"1"},{value:"5"},{value:"3"},{value:"4"}]}},weight:{defaultValue:{value:"medium"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"thin"'},{value:'"extralight"'},{value:'"light"'},{value:'"normal"'},{value:'"medium"'},{value:'"semibold"'},{value:'"extrabold"'},{value:'"black"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Typography/title.tsx#title"]={docgenInfo:title.__docgenInfo,name:"title",path:"components/atoms/Typography/title.tsx#title"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/ContributorHoverCard/contributor-hover-card.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/router.js"),lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./lib/utils/date-utils.ts"),components_atoms_Badge_badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/Badge/badge.tsx"),_CardProfile_card_profile__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/molecules/CardProfile/card-profile.tsx"),_CardRepoList_card_repo_list__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/molecules/CardRepoList/card-repo-list.tsx"),_PullRequestTable_pull_request_table__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./components/molecules/PullRequestTable/pull-request-table.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,ContributorHoverCard=function ContributorHoverCard(_ref){var repoList=_ref.repoList,githubName=_ref.githubName,totalPR=_ref.totalPR,dateOfFirstPr=_ref.dateOfFirstPr,githubAvatar=_ref.githubAvatar,repositories=_ref.repositories,isMaintainer=_ref.isMaintainer,topic=(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query.pageId,calculatedDateFromToday=dateOfFirstPr?(0,lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_6__.wu)(new Date(parseInt(dateOfFirstPr).toString())):"-";return __jsx("div",{className:"w-[364px] bg-white gap-4 p-3 rounded-lg shadow-superlative flex flex-col"},__jsx("div",{className:"flex items-center justify-between"},__jsx(_CardProfile_card_profile__WEBPACK_IMPORTED_MODULE_3__.Z,{dateOfFirstPR:calculatedDateFromToday,githubAvatar:githubAvatar,githubName:githubName,totalPRs:totalPR,isRoundedAvatar:!0}),isMaintainer&&__jsx(components_atoms_Badge_badge__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"maintainer"})),__jsx("div",{className:""},__jsx(_PullRequestTable_pull_request_table__WEBPACK_IMPORTED_MODULE_5__.Z,{isHoverCard:!0,repositories:repositories,limit:5,contributor:githubName,topic:topic})),__jsx("div",null,__jsx(_CardRepoList_card_repo_list__WEBPACK_IMPORTED_MODULE_4__.Z,{repoList:repoList,limit:3})))};ContributorHoverCard.displayName="ContributorHoverCard",ContributorHoverCard.__docgenInfo={description:"",methods:[],displayName:"ContributorHoverCard",props:{repoList:{required:!0,tsType:{name:"Array",elements:[{name:"RepoList"}],raw:"RepoList[]"},description:""},githubAvatar:{required:!0,tsType:{name:"string"},description:""},githubName:{required:!0,tsType:{name:"string"},description:""},totalPR:{required:!0,tsType:{name:"number"},description:""},dateOfFirstPr:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},topic:{required:!1,tsType:{name:"string"},description:""},repositories:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},isMaintainer:{required:!0,tsType:{name:"boolean"},description:""}}},__webpack_exports__.Z=ContributorHoverCard;try{contributorhovercard.displayName="contributorhovercard",contributorhovercard.__docgenInfo={description:"",displayName:"contributorhovercard",props:{repoList:{defaultValue:null,description:"",name:"repoList",required:!0,type:{name:"RepoList[]"}},githubAvatar:{defaultValue:null,description:"",name:"githubAvatar",required:!0,type:{name:"string"}},githubName:{defaultValue:null,description:"",name:"githubName",required:!0,type:{name:"string"}},totalPR:{defaultValue:null,description:"",name:"totalPR",required:!0,type:{name:"number"}},dateOfFirstPr:{defaultValue:null,description:"",name:"dateOfFirstPr",required:!0,type:{name:"string | undefined"}},topic:{defaultValue:null,description:"",name:"topic",required:!1,type:{name:"string"}},repositories:{defaultValue:null,description:"",name:"repositories",required:!1,type:{name:"number[]"}},isMaintainer:{defaultValue:null,description:"",name:"isMaintainer",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/ContributorHoverCard/contributor-hover-card.tsx#contributorhovercard"]={docgenInfo:contributorhovercard.__docgenInfo,name:"contributorhovercard",path:"components/molecules/ContributorHoverCard/contributor-hover-card.tsx#contributorhovercard"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/NivoScatterChart/nivo-scatter-chart.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_nivo_scatterplot__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@nivo/scatterplot/dist/nivo-scatterplot.es.js"),_react_spring_web__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@react-spring/web/dist/react-spring_web.modern.mjs"),lib_utils_humanizeNumber__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./lib/utils/humanizeNumber.ts"),components_atoms_ToggleOption_toggle_option__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/atoms/ToggleOption/toggle-option.tsx"),components_atoms_Typography_title__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/atoms/Typography/title.tsx"),components_atoms_ToggleGroup_toggle_group__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./components/atoms/ToggleGroup/toggle-group.tsx"),components_atoms_Avatar_avatar_hover_card__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./components/atoms/Avatar/avatar-hover-card.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,NivoScatterPlot=function NivoScatterPlot(_ref){var functionTimeout,data=_ref.data,maxFilesModified=_ref.maxFilesModified,title=_ref.title,setShowBots=_ref.setShowBots,showBots=_ref.showBots,isMobile=_ref.isMobile,repositories=_ref.repositories,metadata=_ref.metadata,handleSetPrFilter=_ref.handleSetPrFilter,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),_useState2=(_useState[0],_useState[1],(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1)),isLogarithmic=_useState2[0],setIsLogarithmic=_useState2[1],filteredData=[{id:data[0].id,data:data[0].data.filter((function(data){return Number(data.x)<=7}))}];return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"flex flex-col items-center justify-between px-0 pt-3 md:flex-row md:px-7"},__jsx(components_atoms_Typography_title__WEBPACK_IMPORTED_MODULE_4__.Z,{level:4,className:"!text-sm  !text-light-slate-12"},title),metadata?__jsx(components_atoms_ToggleGroup_toggle_group__WEBPACK_IMPORTED_MODULE_5__.Z,{handleChange:function handleTogglePrFilter(val){switch(val){case"0":null==handleSetPrFilter||handleSetPrFilter("all");break;case"1":null==handleSetPrFilter||handleSetPrFilter("open");break;case"2":null==handleSetPrFilter||handleSetPrFilter("closed")}},className:"hidden lg:flex"},__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"All PRs",__jsx("span",{className:"ml-2 py-0.5 px-1.5 h-fit bg-slate-200 text-slate-500 border rounded-full text-xs font-semibold"},(0,lib_utils_humanizeNumber__WEBPACK_IMPORTED_MODULE_7__.Z)(metadata.allPrs,null))),__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"Open",__jsx("span",{className:"ml-2 py-0.5 px-1.5 h-fit bg-slate-200 text-slate-500 border rounded-full text-xs font-semibold"},(0,lib_utils_humanizeNumber__WEBPACK_IMPORTED_MODULE_7__.Z)(metadata.openPrs,null))),__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,"Closed",__jsx("span",{className:"ml-2 py-0.5 px-1.5 h-fit bg-slate-200 text-slate-500 border rounded-full text-xs font-semibold"},(0,lib_utils_humanizeNumber__WEBPACK_IMPORTED_MODULE_7__.Z)(metadata.closedPrs,null)))):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null),__jsx("div",{className:"flex gap-2 mt-3 md:mt-0"},__jsx("div",null,__jsx(components_atoms_ToggleOption_toggle_option__WEBPACK_IMPORTED_MODULE_3__.Z,{handleToggle:function handleShowBots(){clearTimeout(functionTimeout),functionTimeout=setTimeout((function(){setShowBots(!showBots)}),50)},checked:showBots,optionText:"Show Bots"})),__jsx("div",{className:""},__jsx(components_atoms_ToggleOption_toggle_option__WEBPACK_IMPORTED_MODULE_3__.Z,{handleToggle:function handleSetLogarithmic(){clearInterval(functionTimeout),functionTimeout=setTimeout((function(){setIsLogarithmic(!isLogarithmic)}))},optionText:"Enhance",checked:isLogarithmic})))),__jsx("div",{className:"h-[400px]"},__jsx(_nivo_scatterplot__WEBPACK_IMPORTED_MODULE_1__.IG,{nodeSize:isMobile?25:35,data:isMobile?filteredData:data,margin:{top:30,right:isMobile?30:60,bottom:70,left:isMobile?75:90},xScale:{type:"linear",min:0,max:isMobile?7:32,reverse:!0},yScale:{type:isLogarithmic?"symlog":"linear",min:0,max:Math.max(Math.round(1.5*maxFilesModified),10)},blendMode:"normal",useMesh:!1,annotations:[],nodeComponent:function CustomNode(props){return __jsx(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.q.foreignObject,{className:"cursor-pointer",width:35,height:35,r:props.style.size.to((function(size){return size/2})),y:props.style.y.to((function(yVal){return yVal-35})),x:props.style.x.to((function(xVal){return xVal-17.5}))},__jsx(components_atoms_Avatar_avatar_hover_card__WEBPACK_IMPORTED_MODULE_6__.Z,{contributor:props.node.data.contributor,repositories:repositories}))},axisBottom:{tickSize:8,tickPadding:5,tickRotation:0,tickValues:isMobile?4:7,format:function format(value){return 0===value?"Today":value>32?"30+ days ago":"".concat(value," days ago")}},theme:{axis:{},grid:{line:{strokeDasharray:"4 4",strokeWidth:1,strokeOpacity:.7}}},isInteractive:!0,axisLeft:{tickSize:2,tickPadding:5,tickRotation:0,tickValues:5,legend:"Lines Touched",legendPosition:"middle",legendOffset:-60,format:function format(value){return parseInt("".concat(value))>=1e3?(0,lib_utils_humanizeNumber__WEBPACK_IMPORTED_MODULE_7__.Z)(value,"abbreviation"):"".concat(value)}}})))};NivoScatterPlot.__docgenInfo={description:"",methods:[],displayName:"NivoScatterPlot",props:{maxFilesModified:{required:!0,tsType:{name:"number"},description:""},title:{required:!1,tsType:{name:"string"},description:""},showBots:{required:!0,tsType:{name:"boolean"},description:""},setShowBots:{required:!0,tsType:{name:"signature",type:"function",raw:"(toggle: boolean) => void",signature:{arguments:[{name:"toggle",type:{name:"boolean"}}],return:{name:"void"}}},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  id: string;\n  data: ScatterChartDataItems[];\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"data",value:{name:"Array",elements:[{name:"ScatterChartDataItems"}],raw:"ScatterChartDataItems[]",required:!0}}]}}],raw:"{\n  id: string;\n  data: ScatterChartDataItems[];\n}[]"},description:""},isMobile:{required:!1,tsType:{name:"boolean"},description:""},repositories:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},metadata:{required:!1,tsType:{name:"ScatterChartMetadata"},description:""},handleSetPrFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"(state: PrStatusFilter) => void",signature:{arguments:[{name:"state",type:{name:"PrStatusFilter"}}],return:{name:"void"}}},description:""}}},__webpack_exports__.Z=NivoScatterPlot;try{nivoscatterchart.displayName="nivoscatterchart",nivoscatterchart.__docgenInfo={description:"",displayName:"nivoscatterchart",props:{maxFilesModified:{defaultValue:null,description:"",name:"maxFilesModified",required:!0,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},showBots:{defaultValue:null,description:"",name:"showBots",required:!0,type:{name:"boolean"}},setShowBots:{defaultValue:null,description:"",name:"setShowBots",required:!0,type:{name:"(toggle: boolean) => void"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"{ id: string; data: ScatterChartDataItems[]; }[]"}},isMobile:{defaultValue:null,description:"",name:"isMobile",required:!1,type:{name:"boolean"}},repositories:{defaultValue:null,description:"",name:"repositories",required:!1,type:{name:"number[]"}},metadata:{defaultValue:null,description:"",name:"metadata",required:!1,type:{name:"ScatterChartMetadata"}},handleSetPrFilter:{defaultValue:null,description:"",name:"handleSetPrFilter",required:!1,type:{name:"((state: PrStatusFilter) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/NivoScatterChart/nivo-scatter-chart.tsx#nivoscatterchart"]={docgenInfo:nivoscatterchart.__docgenInfo,name:"nivoscatterchart",path:"components/molecules/NivoScatterChart/nivo-scatter-chart.tsx#nivoscatterchart"})}catch(__react_docgen_typescript_loader_error){}},"./stories/molecules/nivo-scatter-chart.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Scatterchart:function(){return Scatterchart}});var _Scatterchart$paramet,_Scatterchart$paramet2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),components_molecules_NivoScatterChart_nivo_scatter_chart__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/molecules/NivoScatterChart/nivo-scatter-chart.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_exports__.default={title:"Design System/Molecules/ScatterChart"};var ScatterChartTemplate=function ScatterChartTemplate(args){return __jsx(components_molecules_NivoScatterChart_nivo_scatter_chart__WEBPACK_IMPORTED_MODULE_2__.Z,args)};ScatterChartTemplate.displayName="ScatterChartTemplate";var Scatterchart=ScatterChartTemplate.bind({});Scatterchart.args={data:[{id:"test1",data:[{x:10,y:8.04,image:"",contributor:"Sunday"},{x:8.07,y:3.08,image:"",contributor:"Sunday"},{x:8.07,y:3.08,image:"",contributor:"Sunday"},{x:6.05,y:8.03,image:"",contributor:"Sunday"},{x:10.02,y:5.01,image:"",contributor:"Sunday"},{x:12.07,y:9.08,image:"",contributor:"Sunday"},{x:18.01,y:12.04,image:"",contributor:"Sunday"}]}]},Scatterchart.parameters=_objectSpread(_objectSpread({},Scatterchart.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Scatterchart$paramet=Scatterchart.parameters)||void 0===_Scatterchart$paramet?void 0:_Scatterchart$paramet.docs),{},{source:_objectSpread({originalSource:"args => <NivoScatterPlot {...args} />"},null===(_Scatterchart$paramet2=Scatterchart.parameters)||void 0===_Scatterchart$paramet2||null===(_Scatterchart$paramet2=_Scatterchart$paramet2.docs)||void 0===_Scatterchart$paramet2?void 0:_Scatterchart$paramet2.source)})})}}]);