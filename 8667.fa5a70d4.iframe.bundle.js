/*! For license information please see 8667.fa5a70d4.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[8667],{"./node_modules/@supabase/ui/dist/esm/components/Divider/Divider2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Divider}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var DividerStyles={"sbui-divider":"sbui-divider","sbui-divider-vertical":"sbui-divider-vertical","sbui-divider--light":"sbui-divider--light","sbui-divider--no-text":"sbui-divider--no-text","sbui-divider--left":"sbui-divider--left","sbui-divider--right":"sbui-divider--right","sbui-divider--center":"sbui-divider--center",sbuiDivider:"sbui-divider",sbuiDividerVertical:"sbui-divider-vertical",sbuiDividerLight:"sbui-divider--light",sbuiDividerNoText:"sbui-divider--no-text",sbuiDividerLeft:"sbui-divider--left",sbuiDividerRight:"sbui-divider--right",sbuiDividerCenter:"sbui-divider--center"};function Divider({children:children,className:className,light:light=!1,orientation:orientation="center",style:style,type:type="horizontal"}){let classes=["horizontal"===type?DividerStyles["sbui-divider"]:DividerStyles["sbui-divider-vertical"]];return light&&classes.push(DividerStyles["sbui-divider--light"]),children?classes.push(DividerStyles[`sbui-divider--${orientation}`]):children||"horizontal"!==type||classes.push(DividerStyles["sbui-divider--no-text"]),className&&classes.push(className),(0,jsx_runtime.jsx)("div",Object.assign({className:classes.join(" "),role:"seperator",style:style},{children:children&&(0,jsx_runtime.jsx)("span",Object.assign({className:DividerStyles["sbui-divider__content"]},{children:children}),void 0)}),void 0)}!function styleInject(css,ref){void 0===ref&&(ref={});var insertAt=ref.insertAt;if(css&&"undefined"!=typeof document){var head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css","top"===insertAt&&head.firstChild?head.insertBefore(style,head.firstChild):head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css:style.appendChild(document.createTextNode(css))}}('.sbui-divider{width:100%;display:flex;align-items:center;white-space:nowrap}.sbui-divider-vertical{--tw-bg-opacity:1;background-color:rgba(224,224,224,var(--tw-bg-opacity))}.dark .sbui-divider-vertical{--tw-bg-opacity:1;background-color:rgba(68,68,68,var(--tw-bg-opacity))}.sbui-divider-vertical{width:1px;height:inherit}.sbui-divider-vertical.sbui-divider--light{--tw-bg-opacity:1;background-color:rgba(238,238,238,var(--tw-bg-opacity))}.dark .sbui-divider-vertical.sbui-divider--light{--tw-bg-opacity:1;background-color:rgba(42,42,42,var(--tw-bg-opacity))}.sbui-divider--no-text{--tw-border-opacity:1;border-color:rgba(224,224,224,var(--tw-border-opacity))}.dark .sbui-divider--no-text{--tw-border-opacity:1;border-color:rgba(68,68,68,var(--tw-border-opacity))}.sbui-divider--no-text{border-bottom-style:solid;border-bottom-width:1px}.sbui-divider>span{font-size:.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgba(187,187,187,var(--tw-text-opacity))}.dark .sbui-divider>span{--tw-text-opacity:1;color:rgba(102,102,102,var(--tw-text-opacity))}.sbui-divider>span{display:inline-block;padding:0 1em}.sbui-divider--left:before{--tw-border-opacity:1;border-color:rgba(224,224,224,var(--tw-border-opacity))}.dark .sbui-divider--left:before{--tw-border-opacity:1;border-color:rgba(68,68,68,var(--tw-border-opacity))}.sbui-divider--left:before{border-bottom-style:solid;border-bottom-width:1px;top:50%;content:"";position:relative;display:inline-block;width:5%}.sbui-divider--left:after{--tw-border-opacity:1;border-color:rgba(224,224,224,var(--tw-border-opacity))}.dark .sbui-divider--left:after{--tw-border-opacity:1;border-color:rgba(68,68,68,var(--tw-border-opacity))}.sbui-divider--left:after{border-bottom-style:solid;border-bottom-width:1px;top:50%;content:"";position:relative;display:inline-block;width:95%}.sbui-divider--right:before{--tw-border-opacity:1;border-color:rgba(224,224,224,var(--tw-border-opacity))}.dark .sbui-divider--right:before{--tw-border-opacity:1;border-color:rgba(68,68,68,var(--tw-border-opacity))}.sbui-divider--right:before{border-bottom-style:solid;border-bottom-width:1px;top:50%;content:"";position:relative;display:inline-block;width:95%}.sbui-divider--right:after{--tw-border-opacity:1;border-color:rgba(224,224,224,var(--tw-border-opacity))}.dark .sbui-divider--right:after{--tw-border-opacity:1;border-color:rgba(68,68,68,var(--tw-border-opacity))}.sbui-divider--right:after{border-bottom-style:solid;border-bottom-width:1px;top:50%;content:"";position:relative;display:inline-block;width:5%}.sbui-divider--center:after,.sbui-divider--center:before{--tw-border-opacity:1;border-color:rgba(224,224,224,var(--tw-border-opacity))}.dark .sbui-divider--center:after,.dark .sbui-divider--center:before{--tw-border-opacity:1;border-color:rgba(68,68,68,var(--tw-border-opacity))}.sbui-divider--center:after,.sbui-divider--center:before{border-bottom-style:solid;border-bottom-width:1px;top:50%;content:"";position:relative;display:inline-block;width:50%}.sbui-divider--light.sbui-divider--center:after,.sbui-divider--light.sbui-divider--center:before,.sbui-divider--light.sbui-divider--left:after,.sbui-divider--light.sbui-divider--left:before,.sbui-divider--light.sbui-divider--no-text,.sbui-divider--light.sbui-divider--right:after,.sbui-divider--light.sbui-divider--right:before{--tw-border-opacity:1;border-color:rgba(238,238,238,var(--tw-border-opacity))}.dark .sbui-divider--light.sbui-divider--center:after,.dark .sbui-divider--light.sbui-divider--center:before,.dark .sbui-divider--light.sbui-divider--left:after,.dark .sbui-divider--light.sbui-divider--left:before,.dark .sbui-divider--light.sbui-divider--no-text,.dark .sbui-divider--light.sbui-divider--right:after,.dark .sbui-divider--light.sbui-divider--right:before{--tw-border-opacity:1;border-color:rgba(42,42,42,var(--tw-border-opacity))}.sbui-divider--light.sbui-divider>span{--tw-text-opacity:1;color:rgba(224,224,224,var(--tw-text-opacity))}.dark .sbui-divider--light.sbui-divider>span{--tw-text-opacity:1;color:rgba(24,24,24,var(--tw-text-opacity))}')},"./node_modules/react-icons/lib/esm/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{w_:function(){return GenIcon},Pd:function(){return IconContext}});var react=__webpack_require__("./node_modules/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function Tree2Element(tree){return tree&&tree.map((function(node,i){return react.createElement(node.tag,__assign({key:i},node.attr),Tree2Element(node.child))}))}function GenIcon(data){return function(props){return react.createElement(IconBase,__assign({attr:__assign({},data.attr)},props),Tree2Element(data.child))}}function IconBase(props){var elem=function(conf){var className,attr=props.attr,size=props.size,title=props.title,svgProps=__rest(props,["attr","size","title"]),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className:className,style:__assign(__assign({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(function(conf){return elem(conf)})):elem(DefaultContext)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var h=__webpack_require__("./node_modules/react/index.js"),n=__webpack_require__("./node_modules/use-sync-external-store/shim/index.js");var q="function"==typeof Object.is?Object.is:function p(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},r=n.useSyncExternalStore,t=h.useRef,u=h.useEffect,v=h.useMemo,w=h.useDebugValue;exports.useSyncExternalStoreWithSelector=function(a,b,e,l,g){var c=t(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f}else f=c.current;c=v((function(){function a(a){if(!c){if(c=!0,d=a,a=l(a),void 0!==g&&f.hasValue){var b=f.value;if(g(b,a))return k=b}return k=a}if(b=k,q(d,a))return b;var e=l(a);return void 0!==g&&g(b,e)?b:(d=a,k=e)}var d,k,c=!1,m=void 0===e?null:e;return[function(){return a(b())},null===m?void 0:function(){return a(m())}]}),[b,e,l,g]);var d=r(a,c[0],c[1]);return u((function(){f.hasValue=!0,f.value=d}),[d]),w(d),d}},"./node_modules/use-sync-external-store/shim/with-selector.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js")},"./node_modules/zustand/esm/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Ue:function(){return create}});var console=__webpack_require__("./node_modules/console-browserify/index.js");const createStoreImpl=createState=>{let state;const listeners=new Set,setState=(partial,replace)=>{const nextState="function"==typeof partial?partial(state):partial;if(!Object.is(nextState,state)){const previousState=state;state=(null!=replace?replace:"object"!=typeof nextState)?nextState:Object.assign({},state,nextState),listeners.forEach((listener=>listener(state,previousState)))}},getState=()=>state,api={setState:setState,getState:getState,subscribe:listener=>(listeners.add(listener),()=>listeners.delete(listener)),destroy:()=>{console.warn("[DEPRECATED] The destroy method will be unsupported in the future version. You should use unsubscribe function returned by subscribe. Everything will be garbage collected if store is garbage collected."),listeners.clear()}};return state=createState(setState,getState,api),api},createStore=createState=>createState?createStoreImpl(createState):createStoreImpl;var react=__webpack_require__("./node_modules/react/index.js"),with_selector=__webpack_require__("./node_modules/use-sync-external-store/shim/with-selector.js"),esm_console=__webpack_require__("./node_modules/console-browserify/index.js");const{useSyncExternalStoreWithSelector:useSyncExternalStoreWithSelector}=with_selector;const createImpl=createState=>{"function"!=typeof createState&&esm_console.warn('[DEPRECATED] Passing a vanilla store will be unsupported in the future version. Please use `import { useStore } from "zustand"` to use the vanilla store in React.');const api="function"==typeof createState?createStore(createState):createState,useBoundStore=(selector,equalityFn)=>function useStore(api,selector=api.getState,equalityFn){const slice=useSyncExternalStoreWithSelector(api.subscribe,api.getState,api.getServerState||api.getState,selector,equalityFn);return(0,react.useDebugValue)(slice),slice}(api,selector,equalityFn);return Object.assign(useBoundStore,api),useBoundStore},create=createState=>createState?createImpl(createState):createImpl}}]);