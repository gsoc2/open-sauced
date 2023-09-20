"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[3542],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}})},"./components/molecules/PaginationResults/pagination-result.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),lib_utils_humanizeNumber__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./lib/utils/humanizeNumber.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,PaginationResults=function PaginationResults(_ref){var metaInfo=_ref.metaInfo,entity=_ref.entity,total=_ref.total,className=_ref.className,from=metaInfo&&1===metaInfo.page?metaInfo.itemCount>0?metaInfo.page:0:(metaInfo.page-1)*metaInfo.limit+1,to=metaInfo&&metaInfo.page*metaInfo.limit<=metaInfo.itemCount?metaInfo.page*metaInfo.limit:metaInfo.itemCount;return __jsx("div",{className:"".concat(className||""," md:inline-block items-center gap-x-1   text-sm text-light-slate-9 tracking-tight")},__jsx("span",{className:"hidden md:inline-block"},"Showing")," ",__jsx("span",{className:"text-light-slate-12"},from," -"),__jsx("span",{className:"text-light-slate-12"},to)," of ",total>999?(0,lib_utils_humanizeNumber__WEBPACK_IMPORTED_MODULE_1__.Z)(total,null):total,__jsx("span",{className:"md:invisible lg:visible"}," ",entity))};PaginationResults.displayName="PaginationResults",PaginationResults.__docgenInfo={description:"",methods:[],displayName:"PaginationResults",props:{metaInfo:{required:!0,tsType:{name:"Meta"},description:""},total:{required:!0,tsType:{name:"number"},description:""},entity:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}},__webpack_exports__.Z=PaginationResults;try{paginationresult.displayName="paginationresult",paginationresult.__docgenInfo={description:"",displayName:"paginationresult",props:{metaInfo:{defaultValue:null,description:"",name:"metaInfo",required:!0,type:{name:"Meta"}},total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},entity:{defaultValue:null,description:"",name:"entity",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/PaginationResults/pagination-result.tsx#paginationresult"]={docgenInfo:paginationresult.__docgenInfo,name:"paginationresult",path:"components/molecules/PaginationResults/pagination-result.tsx#paginationresult"})}catch(__react_docgen_typescript_loader_error){}},"./lib/utils/humanizeNumber.ts":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.Z=function humanizeNumber(num,type){var number="number"!=typeof num?parseFloat(num):num,abs=Math.abs(number),sign=Math.sign(number),commaConverted="".concat(abs>999?(sign*abs/1e3).toFixed(3).replace(".",","):sign*abs),abbreviated=abs>999?"".concat((sign*abs/1e3).toFixed(1),"k"):"".concat(sign*abs);return"comma"===type?commaConverted:abbreviated}},"./stories/molecules/pagination-result.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PaginationResultStory:function(){return PaginationResultStory}});var _PaginationResultStor,_PaginationResultStor2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),components_molecules_PaginationResults_pagination_result__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/molecules/PaginationResults/pagination-result.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_exports__.default={title:"Design System/Molecules/Pagination result"};var PaginationResultsTemplate=function PaginationResultsTemplate(args){return __jsx(components_molecules_PaginationResults_pagination_result__WEBPACK_IMPORTED_MODULE_2__.Z,args)};PaginationResultsTemplate.displayName="PaginationResultsTemplate";var PaginationResultStory=PaginationResultsTemplate.bind({});PaginationResultStory.args={metaInfo:{page:2,pageCount:3,hasNextPage:!0,hasPreviousPage:!1,itemCount:34,limit:10},total:1e4,entity:"contributors"},PaginationResultStory.parameters=_objectSpread(_objectSpread({},PaginationResultStory.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_PaginationResultStor=PaginationResultStory.parameters)||void 0===_PaginationResultStor?void 0:_PaginationResultStor.docs),{},{source:_objectSpread({originalSource:"args => <PaginationResults {...args} />"},null===(_PaginationResultStor2=PaginationResultStory.parameters)||void 0===_PaginationResultStor2||null===(_PaginationResultStor2=_PaginationResultStor2.docs)||void 0===_PaginationResultStor2?void 0:_PaginationResultStor2.source)})})}}]);