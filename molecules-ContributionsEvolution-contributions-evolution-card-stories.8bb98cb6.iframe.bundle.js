(self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[]).push([[5319],{"./components/molecules/ContributionsEvolution/contributions-evolution-card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>contributions_evolution_card_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),eachDayOfInterval=__webpack_require__("./node_modules/date-fns/esm/eachDayOfInterval/index.js"),subDays=__webpack_require__("./node_modules/date-fns/esm/subDays/index.js"),Button_button=__webpack_require__("./components/shared/Button/button.tsx"),dynamic=__webpack_require__("./node_modules/next/dynamic.js"),dynamic_default=__webpack_require__.n(dynamic),format=__webpack_require__("./node_modules/date-fns/esm/format/index.js"),card=__webpack_require__("./components/atoms/Card/card.tsx"),icon=__webpack_require__("./components/atoms/Icon/icon.tsx"),dropdown=__webpack_require__("./components/atoms/Dropdown/dropdown.tsx"),svg_icon=__webpack_require__("./components/atoms/SVGIcon/svg-icon.tsx"),people=__webpack_require__("./img/icons/people.svg");const calendar={src:"static/media/calendar.94f6fba2.svg",height:18,width:18,blurDataURL:"static/media/calendar.94f6fba2.svg"};var chevron_down=__webpack_require__("./img/chevron-down.svg"),client_only=__webpack_require__("./components/atoms/ClientOnly/client-only.tsx"),__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const dataTypes=["commits","prsCreated","prsReviewed","issuesCreated","comments"],colors={commits:"hsla(217, 91%, 60%, 1)",prsCreated:"hsla(173, 80%, 40%, 1)",prsReviewed:"hsla(198, 93%, 60%, 1)",issuesCreated:"hsla(258, 90%, 66%, 1)",comments:"hsla(245, 58%, 51%, 1)"},labels={commits:"Commits",prsCreated:"PRs Created",prsReviewed:"PRs Reviewed",issuesCreated:"Issues Created",comments:"Comments"},dateFilters={last7days:"Last 7 days",last30days:"Last 30 days",last3months:"Last 3 months"},peopleFilters={all:"All Contributors",active:"Active Contributors",new:"New Contributors",churned:"Churned Contributors"},ResponsiveBar=dynamic_default()((()=>Promise.all([__webpack_require__.e(2672),__webpack_require__.e(6497),__webpack_require__.e(4454),__webpack_require__.e(3804),__webpack_require__.e(8284)]).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@nivo/bar/dist/nivo-bar.es.js")).then((module=>module.ResponsiveBar))),{loadableGenerated:{webpack:()=>["./node_modules/@nivo/bar/dist/nivo-bar.es.js"]}});function ContributionsEvolutionCard(props){const{0:currentDateFilter,1:setCurrentDateFilter}=(0,react.useState)("last7days"),{0:currentPeopleFilter,1:setCurrentPeopleFilter}=(0,react.useState)("all"),formattedData=props.data.map((datum=>_objectSpread(_objectSpread({},datum),{},{startTime:(0,format.Z)(new Date(datum.startTime),"MM/dd")})));return __jsx("div",null,__jsx(card.Z,{className:"grid place-content-stretch overflow-hidden"},__jsx("div",{className:"grid p-2 overflow-hidden",style:{gridTemplateRows:"auto auto auto 1fr auto",maxHeight:"500px",minHeight:"500px",justifyItems:"stretch",alignItems:"stretch"}},__jsx("h2",{className:"font-medium text-lg text-slate-900 mb-2"},"Contributions Evolution"),__jsx("div",{className:"text-sm text-slate-400 mb-4"},"This is going to be an auto-generated insight."),__jsx("div",{className:"flex gap-1 mb-4"},__jsx(dropdown.h_,null,__jsx(dropdown.$F,{asChild:!0},__jsx(Button_button.Z,{variant:"default",className:"items-center gap-1"},__jsx(icon.Z,{IconImage:calendar,className:"w-4 h-4"}),dateFilters[currentDateFilter],__jsx(icon.Z,{IconImage:chevron_down.Z,className:"w-4 h-4"}))),__jsx(dropdown.AW,{align:"end",className:"flex flex-col gap-2"},Object.entries(dateFilters).map((_ref=>{let[key,value]=_ref;return __jsx(dropdown.Xi,{key,className:"rounded-md !cursor-pointer",onClick:()=>setCurrentDateFilter(key)},value)})))),__jsx(dropdown.h_,null,__jsx(dropdown.$F,{asChild:!0},__jsx(Button_button.Z,{variant:"default",className:"items-center gap-1"},__jsx(svg_icon.Z,{IconImage:"".concat(people.Z.src,"#icon"),className:"w-4 h-4"}),peopleFilters[currentPeopleFilter],__jsx(icon.Z,{IconImage:chevron_down.Z,className:"w-4 h-4"}))),__jsx(dropdown.AW,{align:"end",className:"flex flex-col gap-2"},Object.entries(peopleFilters).map((_ref2=>{let[key,value]=_ref2;return __jsx(dropdown.Xi,{key,className:"rounded-md !cursor-pointer",onClick:()=>setCurrentPeopleFilter(key)},value)}))))),__jsx("div",{className:"mb-3 grid ",style:{height:"auto"}},__jsx("div",null,__jsx(client_only.Z,null,__jsx(ResponsiveBar,{data:formattedData,keys:dataTypes,indexBy:"startTime",axisBottom:{tickSize:0},axisLeft:null,enableLabel:!1,enableGridY:!1,labelFormat:"",margin:{top:0,right:40,bottom:30,left:40},motionConfig:"stiff",padding:.5,colors:d=>colors[d.id],tooltipLabel:d=>labels[d.id]})))),__jsx("div",{className:"flex justify-center gap-4"},dataTypes.map((type=>__jsx("div",{key:type,className:"flex items-center gap-2"},__jsx("div",{className:"w-3 h-3 rounded-sm",style:{backgroundColor:colors[type]}}),__jsx("div",{className:"text-sm text-slate-900 capitalize"},type))))))))}ContributionsEvolutionCard.displayName="ContributionsEvolutionCard";try{contributionsevolutioncard.displayName="contributionsevolutioncard",contributionsevolutioncard.__docgenInfo={description:"",displayName:"contributionsevolutioncard",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ContributionStat[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/ContributionsEvolution/contributions-evolution-card.tsx#contributionsevolutioncard"]={docgenInfo:contributionsevolutioncard.__docgenInfo,name:"contributionsevolutioncard",path:"components/molecules/ContributionsEvolution/contributions-evolution-card.tsx#contributionsevolutioncard"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,contributions_evolution_card_stories_jsx=react.createElement;function contributions_evolution_card_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function contributions_evolution_card_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?contributions_evolution_card_stories_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):contributions_evolution_card_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const contributions_evolution_card_stories={title:"Design System/Molecules/Contributions Evolution Card",parameters:{layout:"fullscreen"},component:ContributionsEvolutionCard,decorators:[Story=>contributions_evolution_card_stories_jsx("div",{className:"grid p-4 bg-slate-50 w-screen h-screen"},contributions_evolution_card_stories_jsx(Story,null))]},Default=()=>{const{0:data,1:setData}=(0,react.useState)(generateData());return contributions_evolution_card_stories_jsx("div",null,contributions_evolution_card_stories_jsx(Button_button.Z,{variant:"outline",onClick:()=>setData(generateData()),className:"mb-2"},"Random Data"),contributions_evolution_card_stories_jsx(ContributionsEvolutionCard,{data}))};function generateData(){const today=new Date,weekAgo=(0,subDays.Z)(today,6);return(0,eachDayOfInterval.Z)({start:weekAgo,end:today}).map((date=>({startTime:date.toString(),commits:Math.floor(500*Math.random()),prsCreated:Math.floor(500*Math.random()),prsReviewed:Math.floor(500*Math.random()),issuesCreated:Math.floor(500*Math.random()),comments:Math.floor(500*Math.random())})))}Default.displayName="Default",Default.parameters=contributions_evolution_card_stories_objectSpread(contributions_evolution_card_stories_objectSpread({},Default.parameters),{},{docs:contributions_evolution_card_stories_objectSpread(contributions_evolution_card_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:contributions_evolution_card_stories_objectSpread({originalSource:'() => {\n  const [data, setData] = useState(generateData());\n  return <div>\n      <Button variant="outline" onClick={() => setData(generateData())} className="mb-2">\n        Random Data\n      </Button>\n      <ContributionsEvolutionCard data={data} />\n    </div>;\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});const __namedExportsOrder=["Default"]},"./components/atoms/Card/card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Card=_ref=>{let{className,children,heading}=_ref;return __jsx("article",{className:"".concat(className||""," block ").concat(heading?"":"p-3"," bg-white border rounded-lg shadow-xs")},heading?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"px-3 md:px-6 py-3 rounded-t-lg bg-light-slate-3"},heading),__jsx("div",null,children)):children)};Card.displayName="Card";const __WEBPACK_DEFAULT_EXPORT__=Card;try{card.displayName="card",card.__docgenInfo={description:"",displayName:"card",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Card/card.tsx#card"]={docgenInfo:card.__docgenInfo,name:"card",path:"components/atoms/Card/card.tsx#card"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/ClientOnly/client-only.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>client_only});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var __jsx=react.createElement;function ClientOnly(_ref){let{children}=_ref;return function useHasMounted(){const{0:hasMounted,1:setHasMounted}=(0,react.useState)(!1);return(0,react.useEffect)((()=>{setHasMounted(!0)}),[]),hasMounted}()?__jsx(react.Fragment,null,children):null}const client_only=ClientOnly;try{ClientOnly.displayName="ClientOnly",ClientOnly.__docgenInfo={description:"",displayName:"ClientOnly",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/ClientOnly/client-only.tsx#ClientOnly"]={docgenInfo:ClientOnly.__docgenInfo,name:"ClientOnly",path:"components/atoms/ClientOnly/client-only.tsx#ClientOnly"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Dropdown/dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$F:()=>DropdownMenuTrigger,AW:()=>DropdownMenuContent,Xi:()=>DropdownMenuItem,h_:()=>DropdownMenu});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-dropdown-menu/dist/index.module.js"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["className","sideOffset"],_excluded2=["className","inset"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const DropdownMenu=_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.fC,DropdownMenuTrigger=_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.xz,DropdownMenuContent=(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Uv,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,sideOffset=4}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return __jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Uv,null,__jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.VY,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,sideOffset,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("z-50 min-w-max overflow-hidden rounded-lg border border-slate-100 bg-white p-1 text-slate-700 shadow-xs animate-in data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 ",className)},props)))})));DropdownMenuContent.displayName=_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.VY.displayName;const DropdownMenuItem=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref2,ref)=>{let{className,inset}=_ref2,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref2,_excluded2);return __jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.ck,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("relative flex cursor-default select-none items-center py-1.5 px-2 text-sm focus:text-sauced-orange outline-none focus:bg-orange-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ",inset&&"pl-8",className)},props))}));DropdownMenuItem.displayName=_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.ck.displayName;try{DropdownMenu.displayName="DropdownMenu",DropdownMenu.__docgenInfo={description:"",displayName:"DropdownMenu",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Dropdown/dropdown.tsx#DropdownMenu"]={docgenInfo:DropdownMenu.__docgenInfo,name:"DropdownMenu",path:"components/atoms/Dropdown/dropdown.tsx#DropdownMenu"})}catch(__react_docgen_typescript_loader_error){}try{DropdownMenuItem.displayName="DropdownMenuItem",DropdownMenuItem.__docgenInfo={description:"",displayName:"DropdownMenuItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Dropdown/dropdown.tsx#DropdownMenuItem"]={docgenInfo:DropdownMenuItem.__docgenInfo,name:"DropdownMenuItem",path:"components/atoms/Dropdown/dropdown.tsx#DropdownMenuItem"})}catch(__react_docgen_typescript_loader_error){}try{DropdownMenuContent.displayName="DropdownMenuContent",DropdownMenuContent.__docgenInfo={description:"",displayName:"DropdownMenuContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Dropdown/dropdown.tsx#DropdownMenuContent"]={docgenInfo:DropdownMenuContent.__docgenInfo,name:"DropdownMenuContent",path:"components/atoms/Dropdown/dropdown.tsx#DropdownMenuContent"})}catch(__react_docgen_typescript_loader_error){}try{DropdownMenuTrigger.displayName="DropdownMenuTrigger",DropdownMenuTrigger.__docgenInfo={description:"",displayName:"DropdownMenuTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Dropdown/dropdown.tsx#DropdownMenuTrigger"]={docgenInfo:DropdownMenuTrigger.__docgenInfo,name:"DropdownMenuTrigger",path:"components/atoms/Dropdown/dropdown.tsx#DropdownMenuTrigger"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Icon/icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Icon=_ref=>{let{onClick,className,IconImage,alt,size=16}=_ref;return __jsx("div",{className:"".concat(className||""," inline-flex")},__jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.Z,{onClick,className:"items-center justify-center ",alt:null!=alt?alt:"",width:size,height:size,src:IconImage,style:{maxWidth:"100%",height:"auto"}}))};Icon.displayName="Icon";const __WEBPACK_DEFAULT_EXPORT__=Icon;try{icon.displayName="icon",icon.__docgenInfo={description:"",displayName:"icon",props:{IconImage:{defaultValue:null,description:"",name:"IconImage",required:!0,type:{name:"string | StaticImageData"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"16"},description:"",name:"size",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((...args: any) => any)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Icon/icon.tsx#icon"]={docgenInfo:icon.__docgenInfo,name:"icon",path:"components/atoms/Icon/icon.tsx#icon"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/SVGIcon/svg-icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),__jsx=__webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement;const SVGIcon=_ref=>{let{onClick,className,IconImage,size=16}=_ref;return __jsx("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.Z)("inline-flex",className),onClick},__jsx("svg",null,__jsx("use",{href:IconImage,width:size,height:size,className:"items-center justify-center",style:{stroke:"currentcolor",maxWidth:"100%",height:"auto"}})))};SVGIcon.displayName="SVGIcon";const __WEBPACK_DEFAULT_EXPORT__=SVGIcon;try{svgicon.displayName="svgicon",svgicon.__docgenInfo={description:"",displayName:"svgicon",props:{IconImage:{defaultValue:null,description:"",name:"IconImage",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"16"},description:"",name:"size",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((...args: any) => any)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/SVGIcon/svg-icon.tsx#svgicon"]={docgenInfo:svgicon.__docgenInfo,name:"svgicon",path:"components/atoms/SVGIcon/svg-icon.tsx#svgicon"})}catch(__react_docgen_typescript_loader_error){}},"./components/shared/Button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["className","children","loading","disabled","variant","showLoadingText","loadingText","onClick","href"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,children,loading,disabled,variant,showLoadingText=!0,loadingText="Loading...",onClick,href}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);const styles={primary:"bg-light-orange-9 text-light-orange-2 border-light-orange-9 hover:bg-light-orange-10 ".concat(disabled?"bg-light-orange-7 hover:bg-light-orange-7 pointer-events-none":""),default:"bg-white border-light-slate-8 text-light-slate-11 hover:bg-light-slate-2 ".concat(disabled?"bg-light-slate-4 text-light-slate-9 pointer-events-none":""),dark:"bg-dark-slate-6 border-dark-slate-8 text-light-orange-2 hover:bg-dark-slate-8 ".concat(disabled?"bg-dark-slate-4 text-dark-slate-9 pointer-events-none":""),outline:"bg-orange-50 border-orange-500 text-orange-600 hover:bg-orange-100 ".concat(disabled?"bg-light-orange-3 pointer-events-none text-light-orange-7 border-light-orange-5":""),link:"text-orange-600 hover:bg-orange-100 border-none ".concat(disabled?"text-orange-400 pointer-events-none":""),destructive:"border-dark-red-8 bg-dark-red-8 text-white hover:border-dark-red-7 hover:bg-dark-red-7",text:""},rootClass=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(styles[variant],disabled&&"cursor-not-allowed",disabled&&"destructive"!==variant&&"bg-light-orange-7 hover:bg-light-orange-7","items-center inline-flex text-sm font-semibold tracking-tight border py-2 px-4 rounded-md focus-visible:border-orange-500 focus:outline-none focus-visible:ring focus-visible:ring-orange-200 whitespace-nowrap",className),content=loading?__jsx("div",null,__jsx("svg",{"aria-hidden":"true",role:"status",className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("inline w-4 h-4 text-white animate-spin",showLoadingText?"mr-2":""),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},__jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),__jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})),showLoadingText&&__jsx("span",{className:"text-white"},loadingText)):children;return href?__jsx("a",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,href,ref},props),content):__jsx("button",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,ref,onClick:disabled?void 0:onClick},props),content)}));Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"outline"'},{value:'"default"'},{value:'"dark"'},{value:'"link"'},{value:'"text"'},{value:'"destructive"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},showLoadingText:{defaultValue:{value:"true"},description:"",name:"showLoadingText",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:{value:"Loading..."},description:"",name:"loadingText",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/shared/Button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/shared/Button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./img/chevron-down.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/chevron-down.d99071fc.svg",height:16,width:16,blurDataURL:"static/media/chevron-down.d99071fc.svg"}},"./img/icons/people.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/people.41d40dc4.svg",height:18,width:18,blurDataURL:"static/media/people.41d40dc4.svg"}},"./node_modules/next/dist/shared/lib/dynamic.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:!0,get:all[name]})}(exports,{noSSR:function(){return noSSR},default:function(){return dynamic}});const _interop_require_default=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs"),_react=_interop_require_default._(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")),_loadablesharedruntime=_interop_require_default._(__webpack_require__("./node_modules/next/dist/shared/lib/loadable.shared-runtime.js")),isServerSide="undefined"==typeof window;function convertModule(mod){return{default:(null==mod?void 0:mod.default)||mod}}function noSSR(LoadableInitializer,loadableOptions){if(delete loadableOptions.webpack,delete loadableOptions.modules,!isServerSide)return LoadableInitializer(loadableOptions);const Loading=loadableOptions.loading;return()=>_react.default.createElement(Loading,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function dynamic(dynamicOptions,options){let loadableFn=_loadablesharedruntime.default,loadableOptions={loading:param=>{let{error,isLoading,pastDelay}=param;return null}};dynamicOptions instanceof Promise?loadableOptions.loader=()=>dynamicOptions:"function"==typeof dynamicOptions?loadableOptions.loader=dynamicOptions:"object"==typeof dynamicOptions&&(loadableOptions={...loadableOptions,...dynamicOptions}),loadableOptions={...loadableOptions,...options};const loaderFn=loadableOptions.loader;return loadableOptions.loadableGenerated&&(loadableOptions={...loadableOptions,...loadableOptions.loadableGenerated},delete loadableOptions.loadableGenerated),"boolean"!=typeof loadableOptions.ssr||loadableOptions.ssr?loadableFn({...loadableOptions,loader:()=>null!=loaderFn?loaderFn().then(convertModule):Promise.resolve(convertModule((()=>null)))}):(delete loadableOptions.webpack,delete loadableOptions.modules,noSSR(loadableFn,loadableOptions))}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/shared/lib/loadable-context.shared-runtime.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"LoadableContext",{enumerable:!0,get:function(){return LoadableContext}});const LoadableContext=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs")._(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")).default.createContext(null)},"./node_modules/next/dist/shared/lib/loadable.shared-runtime.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return _default}});const _react=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs")._(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")),_loadablecontextsharedruntime=__webpack_require__("./node_modules/next/dist/shared/lib/loadable-context.shared-runtime.js");const ALL_INITIALIZERS=[],READY_INITIALIZERS=[];let initialized=!1;function load(loader){let promise=loader(),state={loading:!0,loaded:null,error:null};return state.promise=promise.then((loaded=>(state.loading=!1,state.loaded=loaded,loaded))).catch((err=>{throw state.loading=!1,state.error=err,err})),state}function createLoadableComponent(loadFn,options){let opts=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},options),subscription=null;function init(){if(!subscription){const sub=new LoadableSubscription(loadFn,opts);subscription={getCurrentValue:sub.getCurrentValue.bind(sub),subscribe:sub.subscribe.bind(sub),retry:sub.retry.bind(sub),promise:sub.promise.bind(sub)}}return subscription.promise()}if("undefined"==typeof window&&ALL_INITIALIZERS.push(init),!initialized&&"undefined"!=typeof window){const moduleIds=opts.webpack?opts.webpack():opts.modules;moduleIds&&READY_INITIALIZERS.push((ids=>{for(const moduleId of moduleIds)if(ids.includes(moduleId))return init()}))}function LoadableComponent(props,ref){!function useLoadableModule(){init();const context=_react.default.useContext(_loadablecontextsharedruntime.LoadableContext);context&&Array.isArray(opts.modules)&&opts.modules.forEach((moduleName=>{context(moduleName)}))}();const state=_react.default.useSyncExternalStore(subscription.subscribe,subscription.getCurrentValue,subscription.getCurrentValue);return _react.default.useImperativeHandle(ref,(()=>({retry:subscription.retry})),[]),_react.default.useMemo((()=>state.loading||state.error?_react.default.createElement(opts.loading,{isLoading:state.loading,pastDelay:state.pastDelay,timedOut:state.timedOut,error:state.error,retry:subscription.retry}):state.loaded?_react.default.createElement(function resolve(obj){return obj&&obj.default?obj.default:obj}(state.loaded),props):null),[props,state])}return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",_react.default.forwardRef(LoadableComponent)}class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};const{_res:res,_opts:opts}=this;res.loading&&("number"==typeof opts.delay&&(0===opts.delay?this._state.pastDelay=!0:this._delay=setTimeout((()=>{this._update({pastDelay:!0})}),opts.delay)),"number"==typeof opts.timeout&&(this._timeout=setTimeout((()=>{this._update({timedOut:!0})}),opts.timeout))),this._res.promise.then((()=>{this._update({}),this._clearTimeouts()})).catch((_err=>{this._update({}),this._clearTimeouts()})),this._update({})}_update(partial){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...partial},this._callbacks.forEach((callback=>callback()))}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(callback){return this._callbacks.add(callback),()=>{this._callbacks.delete(callback)}}constructor(loadFn,opts){this._loadFn=loadFn,this._opts=opts,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function Loadable(opts){return createLoadableComponent(load,opts)}function flushInitializers(initializers,ids){let promises=[];for(;initializers.length;){let init=initializers.pop();promises.push(init(ids))}return Promise.all(promises).then((()=>{if(initializers.length)return flushInitializers(initializers,ids)}))}Loadable.preloadAll=()=>new Promise(((resolveInitializers,reject)=>{flushInitializers(ALL_INITIALIZERS).then(resolveInitializers,reject)})),Loadable.preloadReady=ids=>(void 0===ids&&(ids=[]),new Promise((resolvePreload=>{const res=()=>(initialized=!0,resolvePreload());flushInitializers(READY_INITIALIZERS,ids).then(res,res)}))),"undefined"!=typeof window&&(window.__NEXT_PRELOADREADY=Loadable.preloadReady);const _default=Loadable},"./node_modules/next/dynamic.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/shared/lib/dynamic.js")}}]);