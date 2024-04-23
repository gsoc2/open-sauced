"use strict";(self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[]).push([[9983],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _defineProperty(obj,key,value){return(key=toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@radix-ui/react-checkbox/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z$:()=>$e698a72e93240346$export$adb584737d712b70,fC:()=>$e698a72e93240346$export$be92b6f5f03c0fe9});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),index_module=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.module.js"),dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.module.js"),primitive_dist_index_module=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.module.js"),react_use_controllable_state_dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js"),react_use_previous_dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-use-previous/dist/index.module.js"),react_use_size_dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-use-size/dist/index.module.js"),react_presence_dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-presence/dist/index.module.js");__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js");const $5e63c961fc1ce211$export$8c6ed5c666ac1360=(0,react.forwardRef)(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react.Children.toArray(children),slottable=childrenArray.find($5e63c961fc1ce211$var$isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react.Children.count(newElement)>1?react.Children.only(null):(0,react.isValidElement)(newElement)?newElement.props.children:null:child));return(0,react.createElement)($5e63c961fc1ce211$var$SlotClone,(0,esm_extends.Z)({},slotProps,{ref:forwardedRef}),(0,react.isValidElement)(newElement)?(0,react.cloneElement)(newElement,void 0,newChildren):null)}return(0,react.createElement)($5e63c961fc1ce211$var$SlotClone,(0,esm_extends.Z)({},slotProps,{ref:forwardedRef}),children)}));$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName="Slot";const $5e63c961fc1ce211$var$SlotClone=(0,react.forwardRef)(((props,forwardedRef)=>{const{children,...slotProps}=props;return(0,react.isValidElement)(children)?(0,react.cloneElement)(children,{...$5e63c961fc1ce211$var$mergeProps(slotProps,children.props),ref:(0,index_module.F)(forwardedRef,children.ref)}):react.Children.count(children)>1?react.Children.only(null):null}));$5e63c961fc1ce211$var$SlotClone.displayName="SlotClone";const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45=({children})=>(0,react.createElement)(react.Fragment,null,children);function $5e63c961fc1ce211$var$isSlottable(child){return(0,react.isValidElement)(child)&&child.type===$5e63c961fc1ce211$export$d9f1ccf0bdb05d45}function $5e63c961fc1ce211$var$mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}const $8927f6f2acc4f386$export$250ffa63cdc0d034=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=(0,react.forwardRef)(((props,forwardedRef)=>{const{asChild,...primitiveProps}=props,Comp=asChild?$5e63c961fc1ce211$export$8c6ed5c666ac1360:node;return(0,react.useEffect)((()=>{window[Symbol.for("radix-ui")]=!0}),[]),(0,react.createElement)(Comp,(0,esm_extends.Z)({},primitiveProps,{ref:forwardedRef}))}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{});const[$e698a72e93240346$var$createCheckboxContext,$e698a72e93240346$export$b566c4ff5488ea01]=(0,dist_index_module.b)("Checkbox"),[$e698a72e93240346$var$CheckboxProvider,$e698a72e93240346$var$useCheckboxContext]=$e698a72e93240346$var$createCheckboxContext("Checkbox"),$e698a72e93240346$export$48513f6b9f8ce62d=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeCheckbox,name,checked:checkedProp,defaultChecked,required,disabled,value="on",onCheckedChange,...checkboxProps}=props,[button,setButton]=(0,react.useState)(null),composedRefs=(0,index_module.e)(forwardedRef,(node=>setButton(node))),hasConsumerStoppedPropagationRef=(0,react.useRef)(!1),isFormControl=!button||Boolean(button.closest("form")),[checked=!1,setChecked]=(0,react_use_controllable_state_dist_index_module.T)({prop:checkedProp,defaultProp:defaultChecked,onChange:onCheckedChange});return(0,react.createElement)($e698a72e93240346$var$CheckboxProvider,{scope:__scopeCheckbox,state:checked,disabled},(0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button,(0,esm_extends.Z)({type:"button",role:"checkbox","aria-checked":$e698a72e93240346$var$isIndeterminate(checked)?"mixed":checked,"aria-required":required,"data-state":$e698a72e93240346$var$getState(checked),"data-disabled":disabled?"":void 0,disabled,value},checkboxProps,{ref:composedRefs,onKeyDown:(0,primitive_dist_index_module.M)(props.onKeyDown,(event=>{"Enter"===event.key&&event.preventDefault()})),onClick:(0,primitive_dist_index_module.M)(props.onClick,(event=>{setChecked((prevChecked=>!!$e698a72e93240346$var$isIndeterminate(prevChecked)||!prevChecked)),isFormControl&&(hasConsumerStoppedPropagationRef.current=event.isPropagationStopped(),hasConsumerStoppedPropagationRef.current||event.stopPropagation())}))})),isFormControl&&(0,react.createElement)($e698a72e93240346$var$BubbleInput,{control:button,bubbles:!hasConsumerStoppedPropagationRef.current,name,value,checked,required,disabled,style:{transform:"translateX(-100%)"}}))})),$e698a72e93240346$export$59aad738f51d1c05=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeCheckbox,forceMount,...indicatorProps}=props,context=$e698a72e93240346$var$useCheckboxContext("CheckboxIndicator",__scopeCheckbox);return(0,react.createElement)(react_presence_dist_index_module.z,{present:forceMount||$e698a72e93240346$var$isIndeterminate(context.state)||!0===context.state},(0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span,(0,esm_extends.Z)({"data-state":$e698a72e93240346$var$getState(context.state),"data-disabled":context.disabled?"":void 0},indicatorProps,{ref:forwardedRef,style:{pointerEvents:"none",...props.style}})))})),$e698a72e93240346$var$BubbleInput=props=>{const{control,checked,bubbles=!0,...inputProps}=props,ref=(0,react.useRef)(null),prevChecked=(0,react_use_previous_dist_index_module.D)(checked),controlSize=(0,react_use_size_dist_index_module.t)(control);return(0,react.useEffect)((()=>{const input=ref.current,inputProto=window.HTMLInputElement.prototype,setChecked=Object.getOwnPropertyDescriptor(inputProto,"checked").set;if(prevChecked!==checked&&setChecked){const event=new Event("click",{bubbles});input.indeterminate=$e698a72e93240346$var$isIndeterminate(checked),setChecked.call(input,!$e698a72e93240346$var$isIndeterminate(checked)&&checked),input.dispatchEvent(event)}}),[prevChecked,checked,bubbles]),(0,react.createElement)("input",(0,esm_extends.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:!$e698a72e93240346$var$isIndeterminate(checked)&&checked},inputProps,{tabIndex:-1,ref,style:{...props.style,...controlSize,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function $e698a72e93240346$var$isIndeterminate(checked){return"indeterminate"===checked}function $e698a72e93240346$var$getState(checked){return $e698a72e93240346$var$isIndeterminate(checked)?"indeterminate":checked?"checked":"unchecked"}const $e698a72e93240346$export$be92b6f5f03c0fe9=$e698a72e93240346$export$48513f6b9f8ce62d,$e698a72e93240346$export$adb584737d712b70=$e698a72e93240346$export$59aad738f51d1c05},"./node_modules/@radix-ui/react-use-previous/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>$010c2913dbd2fe3d$export$5cae361ad82dce8b});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({value,previous:value});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(ref.current.value!==value&&(ref.current.previous=ref.current.value,ref.current.value=value),ref.current.previous)),[value])}},"./components/molecules/ContributorFilterDropdown/contributor-filter-dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>contributor_filter_dropdown_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),bi=__webpack_require__("./node_modules/react-icons/bi/index.mjs"),Checkbox_checkbox=__webpack_require__("./components/atoms/Checkbox/checkbox.tsx"),__jsx=react.createElement;const filterOptions=[{name:"Language",value:"language"},{name:"Timezone",value:"timezone"},{name:"Last Contributed",value:"last-contributed"},{name:"Repositories",value:"repositories"},{name:"Contribution",value:"contribution"},{name:"Last 30 Days",value:"last-30-days"},{name:"Activities",value:"activities"},{name:"Seniority",value:"seniority"}],ContributorFilterDropdown=()=>{const{0:open,1:setOpen}=(0,react.useState)(!1),ref=(0,react.useRef)(null);return(0,react.useEffect)((()=>{const checkIfClickedOutside=e=>{open&&ref.current&&!ref.current.contains(e.target)&&setOpen(!1)};return document.addEventListener("mousedown",checkIfClickedOutside),()=>{document.removeEventListener("mousedown",checkIfClickedOutside)}}),[open]),__jsx("div",{ref,className:"flex flex-col px-3 border rounded-lg shadow w-max"},__jsx("div",{onClick:()=>setOpen((prev=>!prev)),className:"flex items-center justify-between text-sm font-normal cursor-pointer text-light-slate-9 w-44 "},__jsx("span",null,open?"Filter: Show/Hide":"Filter list:"),__jsx("div",null,__jsx(bi.jRD,{className:"text-lg translate-y-1.5"}),__jsx(bi.OrA,{className:"text-lg -translate-y-1.5"}))),__jsx("div",{className:(0,clsx_m.Z)(" z-50 space-y-1.5 overflow-hidden transition-all text-light-slate-12",open?"h-auto pb-2":"h-0")},filterOptions.map(((_ref,i)=>{let{name,value}=_ref;return __jsx("div",{key:i.toString(),className:"flex items-center gap-2 text-sm "},__jsx(Checkbox_checkbox.Z,{value,id:name,className:"w-3 h-3 gap-2"}),__jsx("label",{className:"font-normal",htmlFor:name},name))}))))};ContributorFilterDropdown.displayName="ContributorFilterDropdown";const contributor_filter_dropdown=ContributorFilterDropdown;var _DefaultStory$paramet,_DefaultStory$paramet2,contributor_filter_dropdown_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const contributor_filter_dropdown_stories={title:"Design System/Molecules/ContributorFilterDropdown"},ContributorFilterDropdownTemplate=args=>contributor_filter_dropdown_stories_jsx(contributor_filter_dropdown,null);ContributorFilterDropdownTemplate.displayName="ContributorFilterDropdownTemplate";const DefaultStory=ContributorFilterDropdownTemplate.bind({});DefaultStory.parameters=_objectSpread(_objectSpread({},DefaultStory.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DefaultStory$paramet=DefaultStory.parameters)||void 0===_DefaultStory$paramet?void 0:_DefaultStory$paramet.docs),{},{source:_objectSpread({originalSource:"args => <ContributorFilterDropdown />"},null===(_DefaultStory$paramet2=DefaultStory.parameters)||void 0===_DefaultStory$paramet2||null===(_DefaultStory$paramet2=_DefaultStory$paramet2.docs)||void 0===_DefaultStory$paramet2?void 0:_DefaultStory$paramet2.source)})});const __namedExportsOrder=["DefaultStory"]},"./components/atoms/Checkbox/checkbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-checkbox/dist/index.module.js"),react_icons_fi__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-icons/fi/index.mjs"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["className","label","id"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Checkbox=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,label,id}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);const getId=()=>id||(null==label?void 0:label.replaceAll(" ","_").toLowerCase());return __jsx("div",{className:"flex items-center"},__jsx(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__.fC,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("peer h-4 w-4 shrink-0 rounded cursor-pointer bg-white border border-light-slate-8 hover:border-orange-500 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500",className)},props,{id:getId()}),__jsx(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__.z$,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("p-0.5 flex items-center justify-center text-white")},__jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.UgA,{className:"w-full h-full"}))),label&&__jsx("label",{htmlFor:getId(),className:"ml-3 text-sm leading-none cursor-pointer text-light-slate-12 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},label))}));Checkbox.displayName=_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__.fC.displayName;const __WEBPACK_DEFAULT_EXPORT__=Checkbox;try{checkbox.displayName="checkbox",checkbox.__docgenInfo={description:"",displayName:"checkbox",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Checkbox/checkbox.tsx#checkbox"]={docgenInfo:checkbox.__docgenInfo,name:"checkbox",path:"components/atoms/Checkbox/checkbox.tsx#checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react-icons/lib/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w_:()=>GenIcon,Pd:()=>IconContext});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),_excluded=["attr","size","title"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Tree2Element(tree){return tree&&tree.map(((node,i)=>react.createElement(node.tag,_objectSpread({key:i},node.attr),Tree2Element(node.child))))}function GenIcon(data){return props=>react.createElement(IconBase,_extends({attr:_objectSpread({},data.attr)},props),Tree2Element(data.child))}function IconBase(props){var elem=conf=>{var className,{attr,size,title}=props,svgProps=_objectWithoutProperties(props,_excluded),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",_extends({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:_objectSpread(_objectSpread({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(conf=>elem(conf))):elem(DefaultContext)}}}]);