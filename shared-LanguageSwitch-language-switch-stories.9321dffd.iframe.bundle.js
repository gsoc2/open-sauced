"use strict";(self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[]).push([[1443],{"./node_modules/@radix-ui/primitive/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler,ourEventHandler,{checkForDefaultPrevented=!0}={}){return function handleEvent(event){if(null==originalEventHandler||originalEventHandler(event),!1===checkForDefaultPrevented||!event.defaultPrevented)return null==ourEventHandler?void 0:ourEventHandler(event)}}__webpack_require__.d(__webpack_exports__,{M:()=>$e42e1063c40fb3ef$export$b9ecd428b558ff10})},"./node_modules/@radix-ui/react-compose-refs/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>$6ed0406888f73fc4$export$43e446d32b3d21af,e:()=>$6ed0406888f73fc4$export$c7b2cbe3552a0d05});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs){return node=>refs.forEach((ref=>function $6ed0406888f73fc4$var$setRef(ref,value){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}(ref,node)))}function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...refs),refs)}},"./node_modules/@radix-ui/react-context/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>$c512c27ab02ef895$export$50c7b4e9d9f19c1,k:()=>$c512c27ab02ef895$export$fd42f52fd3ae1109});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName,defaultContext){const Context=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext);function Provider(props){const{children,...context}=props,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>context),Object.values(context));return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context.Provider,{value},children)}return Provider.displayName=rootComponentName+"Provider",[Provider,function useContext(consumerName){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]}function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName,createContextScopeDeps=[]){let defaultContexts=[];const createScope=()=>{const scopeContexts=defaultContexts.map((defaultContext=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext)));return function useScope(scope){const contexts=(null==scope?void 0:scope[scopeName])||scopeContexts;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({[`__scope${scopeName}`]:{...scope,[scopeName]:contexts}})),[scope,contexts])}};return createScope.scopeName=scopeName,[function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName,defaultContext){const BaseContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext),index=defaultContexts.length;function Provider(props){const{scope,children,...context}=props,Context=(null==scope?void 0:scope[scopeName][index])||BaseContext,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>context),Object.values(context));return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context.Provider,{value},children)}return defaultContexts=[...defaultContexts,defaultContext],Provider.displayName=rootComponentName+"Provider",[Provider,function useContext(consumerName,scope){const Context=(null==scope?void 0:scope[scopeName][index])||BaseContext,context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]},$c512c27ab02ef895$var$composeContextScopes(createScope,...createContextScopeDeps)]}function $c512c27ab02ef895$var$composeContextScopes(...scopes){const baseScope=scopes[0];if(1===scopes.length)return baseScope;const createScope1=()=>{const scopeHooks=scopes.map((createScope=>({useScope:createScope(),scopeName:createScope.scopeName})));return function useComposedScopes(overrideScopes){const nextScopes1=scopeHooks.reduce(((nextScopes,{useScope,scopeName})=>({...nextScopes,...useScope(overrideScopes)[`__scope${scopeName}`]})),{});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({[`__scope${baseScope.scopeName}`]:nextScopes1})),[nextScopes1])}};return createScope1.scopeName=baseScope.scopeName,createScope1}},"./node_modules/@radix-ui/react-switch/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{fC:()=>$6be4966fd9bbc698$export$be92b6f5f03c0fe9,bU:()=>$6be4966fd9bbc698$export$6521433ed15a34db});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),index_module=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.module.js"),dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.module.js"),react_context_dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.module.js"),react_use_controllable_state_dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js"),react_use_previous_dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-use-previous/dist/index.module.js"),react_use_size_dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-use-size/dist/index.module.js");__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js");const $5e63c961fc1ce211$export$8c6ed5c666ac1360=(0,react.forwardRef)(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react.Children.toArray(children),slottable=childrenArray.find($5e63c961fc1ce211$var$isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react.Children.count(newElement)>1?react.Children.only(null):(0,react.isValidElement)(newElement)?newElement.props.children:null:child));return(0,react.createElement)($5e63c961fc1ce211$var$SlotClone,(0,esm_extends.Z)({},slotProps,{ref:forwardedRef}),(0,react.isValidElement)(newElement)?(0,react.cloneElement)(newElement,void 0,newChildren):null)}return(0,react.createElement)($5e63c961fc1ce211$var$SlotClone,(0,esm_extends.Z)({},slotProps,{ref:forwardedRef}),children)}));$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName="Slot";const $5e63c961fc1ce211$var$SlotClone=(0,react.forwardRef)(((props,forwardedRef)=>{const{children,...slotProps}=props;return(0,react.isValidElement)(children)?(0,react.cloneElement)(children,{...$5e63c961fc1ce211$var$mergeProps(slotProps,children.props),ref:(0,dist_index_module.F)(forwardedRef,children.ref)}):react.Children.count(children)>1?react.Children.only(null):null}));$5e63c961fc1ce211$var$SlotClone.displayName="SlotClone";const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45=({children})=>(0,react.createElement)(react.Fragment,null,children);function $5e63c961fc1ce211$var$isSlottable(child){return(0,react.isValidElement)(child)&&child.type===$5e63c961fc1ce211$export$d9f1ccf0bdb05d45}function $5e63c961fc1ce211$var$mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}const $8927f6f2acc4f386$export$250ffa63cdc0d034=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=(0,react.forwardRef)(((props,forwardedRef)=>{const{asChild,...primitiveProps}=props,Comp=asChild?$5e63c961fc1ce211$export$8c6ed5c666ac1360:node;return(0,react.useEffect)((()=>{window[Symbol.for("radix-ui")]=!0}),[]),(0,react.createElement)(Comp,(0,esm_extends.Z)({},primitiveProps,{ref:forwardedRef}))}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{});const[$6be4966fd9bbc698$var$createSwitchContext,$6be4966fd9bbc698$export$cf7f5f17f69cbd43]=(0,react_context_dist_index_module.b)("Switch"),[$6be4966fd9bbc698$var$SwitchProvider,$6be4966fd9bbc698$var$useSwitchContext]=$6be4966fd9bbc698$var$createSwitchContext("Switch"),$6be4966fd9bbc698$export$b5d5cf8927ab7262=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeSwitch,name,checked:checkedProp,defaultChecked,required,disabled,value="on",onCheckedChange,...switchProps}=props,[button,setButton]=(0,react.useState)(null),composedRefs=(0,dist_index_module.e)(forwardedRef,(node=>setButton(node))),hasConsumerStoppedPropagationRef=(0,react.useRef)(!1),isFormControl=!button||Boolean(button.closest("form")),[checked=!1,setChecked]=(0,react_use_controllable_state_dist_index_module.T)({prop:checkedProp,defaultProp:defaultChecked,onChange:onCheckedChange});return(0,react.createElement)($6be4966fd9bbc698$var$SwitchProvider,{scope:__scopeSwitch,checked,disabled},(0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button,(0,esm_extends.Z)({type:"button",role:"switch","aria-checked":checked,"aria-required":required,"data-state":$6be4966fd9bbc698$var$getState(checked),"data-disabled":disabled?"":void 0,disabled,value},switchProps,{ref:composedRefs,onClick:(0,index_module.M)(props.onClick,(event=>{setChecked((prevChecked=>!prevChecked)),isFormControl&&(hasConsumerStoppedPropagationRef.current=event.isPropagationStopped(),hasConsumerStoppedPropagationRef.current||event.stopPropagation())}))})),isFormControl&&(0,react.createElement)($6be4966fd9bbc698$var$BubbleInput,{control:button,bubbles:!hasConsumerStoppedPropagationRef.current,name,value,checked,required,disabled,style:{transform:"translateX(-100%)"}}))})),$6be4966fd9bbc698$export$4d07bf653ea69106=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeSwitch,...thumbProps}=props,context=$6be4966fd9bbc698$var$useSwitchContext("SwitchThumb",__scopeSwitch);return(0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span,(0,esm_extends.Z)({"data-state":$6be4966fd9bbc698$var$getState(context.checked),"data-disabled":context.disabled?"":void 0},thumbProps,{ref:forwardedRef}))})),$6be4966fd9bbc698$var$BubbleInput=props=>{const{control,checked,bubbles=!0,...inputProps}=props,ref=(0,react.useRef)(null),prevChecked=(0,react_use_previous_dist_index_module.D)(checked),controlSize=(0,react_use_size_dist_index_module.t)(control);return(0,react.useEffect)((()=>{const input=ref.current,inputProto=window.HTMLInputElement.prototype,setChecked=Object.getOwnPropertyDescriptor(inputProto,"checked").set;if(prevChecked!==checked&&setChecked){const event=new Event("click",{bubbles});setChecked.call(input,checked),input.dispatchEvent(event)}}),[prevChecked,checked,bubbles]),(0,react.createElement)("input",(0,esm_extends.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:checked},inputProps,{tabIndex:-1,ref,style:{...props.style,...controlSize,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function $6be4966fd9bbc698$var$getState(checked){return checked?"checked":"unchecked"}const $6be4966fd9bbc698$export$be92b6f5f03c0fe9=$6be4966fd9bbc698$export$b5d5cf8927ab7262,$6be4966fd9bbc698$export$6521433ed15a34db=$6be4966fd9bbc698$export$4d07bf653ea69106},"./node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>$b1b2314f5f9a1d84$export$25bec8c6f54ee79a});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback){const callbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{callbackRef.current=callback})),(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(...args)=>{var _callbackRef$current;return null===(_callbackRef$current=callbackRef.current)||void 0===_callbackRef$current?void 0:_callbackRef$current.call(callbackRef,...args)}),[])}},"./node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>$71cd76cc60e0454e$export$6f32135080cb4c3});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js");function $71cd76cc60e0454e$export$6f32135080cb4c3({prop,defaultProp,onChange=()=>{}}){const[uncontrolledProp,setUncontrolledProp]=function $71cd76cc60e0454e$var$useUncontrolledState({defaultProp,onChange}){const uncontrolledState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultProp),[value]=uncontrolledState,prevValueRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value),handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(onChange);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{prevValueRef.current!==value&&(handleChange(value),prevValueRef.current=value)}),[value,prevValueRef,handleChange]),uncontrolledState}({defaultProp,onChange}),isControlled=void 0!==prop,value1=isControlled?prop:uncontrolledProp,handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(onChange);return[value1,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nextValue=>{if(isControlled){const value="function"==typeof nextValue?nextValue(prop):nextValue;value!==prop&&handleChange(value)}else setUncontrolledProp(nextValue)}),[isControlled,prop,setUncontrolledProp,handleChange])]}},"./node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>$9f79659886946c16$export$e5c5a5f917a5871c});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const $9f79659886946c16$export$e5c5a5f917a5871c=Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:()=>{}},"./node_modules/@radix-ui/react-use-previous/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>$010c2913dbd2fe3d$export$5cae361ad82dce8b});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({value,previous:value});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(ref.current.value!==value&&(ref.current.previous=ref.current.value,ref.current.value=value),ref.current.previous)),[value])}},"./node_modules/@radix-ui/react-use-size/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>$db6c3485150b8e66$export$1ab7ae714698c4b8});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js");function $db6c3485150b8e66$export$1ab7ae714698c4b8(element){const[size,setSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0);return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.b)((()=>{if(element){setSize({width:element.offsetWidth,height:element.offsetHeight});const resizeObserver=new ResizeObserver((entries=>{if(!Array.isArray(entries))return;if(!entries.length)return;const entry=entries[0];let width,height;if("borderBoxSize"in entry){const borderSizeEntry=entry.borderBoxSize,borderSize=Array.isArray(borderSizeEntry)?borderSizeEntry[0]:borderSizeEntry;width=borderSize.inlineSize,height=borderSize.blockSize}else width=element.offsetWidth,height=element.offsetHeight;setSize({width,height})}));return resizeObserver.observe(element,{box:"border-box"}),()=>resizeObserver.unobserve(element)}setSize(void 0)}),[element]),size}},"./components/shared/LanguageSwitch/language-switch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Checked$parameters,_Checked$parameters2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_language_switch__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/shared/LanguageSwitch/language-switch.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Shared/LanguageSwitch",component:_language_switch__WEBPACK_IMPORTED_MODULE_1__.U,args:{topic:"javascript",checked:!1,onClick:()=>{console.log("clicked")}}},Default={},Checked={args:{checked:!0}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Checked.parameters=_objectSpread(_objectSpread({},Checked.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Checked$parameters=Checked.parameters)||void 0===_Checked$parameters?void 0:_Checked$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    checked: true\n  }\n}"},null===(_Checked$parameters2=Checked.parameters)||void 0===_Checked$parameters2||null===(_Checked$parameters2=_Checked$parameters2.docs)||void 0===_Checked$parameters2?void 0:_Checked$parameters2.source)})});const __namedExportsOrder=["Default","Checked"]},"./components/shared/LanguagePill/LanguagePill.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>LanguagePill,T:()=>renderTopicIcon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");const svelte={src:"static/media/svelte.a95b2b80.svg",height:13,width:12,blurDataURL:"static/media/svelte.a95b2b80.svg"},javascript={src:"static/media/javascript.24a7dd24.svg",height:13,width:13,blurDataURL:"static/media/javascript.24a7dd24.svg"},interests_react={src:"static/media/react.a08577e5.svg",height:13,width:12,blurDataURL:"static/media/react.a08577e5.svg"},python={src:"static/media/python.7d4046ee.svg",height:13,width:12,blurDataURL:"static/media/python.7d4046ee.svg"},ai={src:"static/media/ai.b5d1ed82.svg",height:13,width:12,blurDataURL:"static/media/ai.b5d1ed82.svg"},machine_learning={src:"static/media/machine-learning.0c906fe0.svg",height:13,width:12,blurDataURL:"static/media/machine-learning.0c906fe0.svg"},rust={src:"static/media/rust.ec7f15fa.svg",height:13,width:12,blurDataURL:"static/media/rust.ec7f15fa.svg"},php={src:"static/media/php.362767e2.svg",height:13,width:13,blurDataURL:"static/media/php.362767e2.svg"},c_sharp={src:"static/media/c-sharp.117f962b.svg",height:13,width:13,blurDataURL:"static/media/c-sharp.117f962b.svg"},c={src:"static/media/c.beb1b5fe.svg",height:13,width:13,blurDataURL:"static/media/c.beb1b5fe.svg"},c_plus={src:"static/media/c-plus.d4cb286a.svg",height:13,width:13,blurDataURL:"static/media/c-plus.d4cb286a.svg"},typescript={src:"static/media/typescript.372548a6.svg",height:13,width:13,blurDataURL:"static/media/typescript.372548a6.svg"},angular_new={src:"static/media/angular-new.329a4728.svg",height:13,width:13,blurDataURL:"static/media/angular-new.329a4728.svg"},ruby={src:"static/media/ruby.22a25611.svg",height:13,width:13,blurDataURL:"static/media/ruby.22a25611.svg"},java={src:"static/media/java.74dd4bc1.svg",height:13,width:12,blurDataURL:"static/media/java.74dd4bc1.svg"},golang={src:"static/media/golang.52db121d.svg",height:13,width:12,blurDataURL:"static/media/golang.52db121d.svg"},vuejs={src:"static/media/vuejs.7e2a1312.svg",height:13,width:13,blurDataURL:"static/media/vuejs.7e2a1312.svg"},kubernetes={src:"static/media/kubernetes.b0121f66.svg",height:13,width:13,blurDataURL:"static/media/kubernetes.b0121f66.svg"},clojure={src:"static/media/clojure.4b8386af.svg",height:16,width:16,blurDataURL:"static/media/clojure.4b8386af.svg"},kotlin={src:"static/media/kotlin.dc50ca11.svg",height:13,width:13,blurDataURL:"static/media/kotlin.dc50ca11.svg"},android={src:"static/media/android.38257e1d.svg",height:13,width:13,blurDataURL:"static/media/android.38257e1d.svg"};var topic_name_formatting=__webpack_require__("./lib/utils/topic-name-formatting.ts"),__jsx=react.createElement;const renderTopicIcon=name=>({react:interests_react,rust,javascript,ai,ml:machine_learning,python,svelte,typescript,angular:angular_new,csharp:c_sharp,cpp:c_plus,php,c,ruby,java,golang,vue:vuejs,kubernetes,clojure,kotlin,android}[name]),LanguagePill=_ref=>{let{topic}=_ref;return __jsx("div",{className:"flex items-center gap-1 text-xs rounded-3xl w-max py-2 px-4 bg-light-slate-6"},__jsx(next_image.Z,{src:renderTopicIcon(topic),alt:""}),__jsx("span",{className:"font-normal capitalize"},(0,topic_name_formatting.Z)(topic)))};LanguagePill.displayName="LanguagePill";try{renderTopicIcon.displayName="renderTopicIcon",renderTopicIcon.__docgenInfo={description:"",displayName:"renderTopicIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/shared/LanguagePill/LanguagePill.tsx#renderTopicIcon"]={docgenInfo:renderTopicIcon.__docgenInfo,name:"renderTopicIcon",path:"components/shared/LanguagePill/LanguagePill.tsx#renderTopicIcon"})}catch(__react_docgen_typescript_loader_error){}try{LanguagePill.displayName="LanguagePill",LanguagePill.__docgenInfo={description:"",displayName:"LanguagePill",props:{topic:{defaultValue:null,description:"",name:"topic",required:!0,type:{name:"enum",value:[{value:'"javascript"'},{value:'"python"'},{value:'"java"'},{value:'"typescript"'},{value:'"angular"'},{value:'"csharp"'},{value:'"cpp"'},{value:'"php"'},{value:'"c"'},{value:'"ruby"'},{value:'"ai"'},{value:'"ml"'},{value:'"react"'},{value:'"golang"'},{value:'"rust"'},{value:'"svelte"'},{value:'"vue"'},{value:'"kubernetes"'},{value:'"clojure"'},{value:'"kotlin"'},{value:'"android"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/shared/LanguagePill/LanguagePill.tsx#LanguagePill"]={docgenInfo:LanguagePill.__docgenInfo,name:"LanguagePill",path:"components/shared/LanguagePill/LanguagePill.tsx#LanguagePill"})}catch(__react_docgen_typescript_loader_error){}},"./components/shared/LanguageSwitch/language-switch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>LanguageSwitch});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-switch/dist/index.module.js"),next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),lib_utils_topic_name_formatting__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/utils/topic-name-formatting.ts"),_LanguagePill_LanguagePill__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/shared/LanguagePill/LanguagePill.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const LanguageSwitch=_ref=>{let{topic,checked,onClick}=_ref;return __jsx(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_3__.fC,{defaultChecked:!0,checked,onClick,name:"language-pill-".concat(topic),className:"cursor-pointer w-max py-2 px-4 bg-light-slate-6 text-xs rounded-3xl border ".concat(checked?"bg-light-orange-8":"")},__jsx(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_3__.bU,null,__jsx("div",{className:"flex items-center gap-1"},__jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.Z,{src:(0,_LanguagePill_LanguagePill__WEBPACK_IMPORTED_MODULE_2__.T)(topic),alt:""}),__jsx("span",{className:"font-normal capitalize"},(0,lib_utils_topic_name_formatting__WEBPACK_IMPORTED_MODULE_4__.Z)(topic)))))};LanguageSwitch.displayName="LanguageSwitch";try{LanguageSwitch.displayName="LanguageSwitch",LanguageSwitch.__docgenInfo={description:"",displayName:"LanguageSwitch",props:{topic:{defaultValue:null,description:"",name:"topic",required:!0,type:{name:"enum",value:[{value:'"javascript"'},{value:'"python"'},{value:'"java"'},{value:'"typescript"'},{value:'"angular"'},{value:'"csharp"'},{value:'"cpp"'},{value:'"php"'},{value:'"c"'},{value:'"ruby"'},{value:'"ai"'},{value:'"ml"'},{value:'"react"'},{value:'"golang"'},{value:'"rust"'},{value:'"svelte"'},{value:'"vue"'},{value:'"kubernetes"'},{value:'"clojure"'},{value:'"kotlin"'},{value:'"android"'}]}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/shared/LanguageSwitch/language-switch.tsx#LanguageSwitch"]={docgenInfo:LanguageSwitch.__docgenInfo,name:"LanguageSwitch",path:"components/shared/LanguageSwitch/language-switch.tsx#LanguageSwitch"})}catch(__react_docgen_typescript_loader_error){}},"./lib/utils/topic-name-formatting.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>topic_name_formatting});const uppercase_first=word=>word?word.charAt(0).toUpperCase()+word.slice(1):"",topic_name_formatting=name=>name?"javascript"==name.toLowerCase()?"JavaScript":"ai"==name.toLowerCase()?"AI":"ml"==name.toLowerCase()?"Machine Learning":"cpp"==name.toLowerCase()?"CPP (C++)":"csharp"==name.toLowerCase()?"CSharp (C#)":"php"==name.toLowerCase()?"PHP":"typescript"==name.toLowerCase()?"TypeScript":uppercase_first(name):""}}]);