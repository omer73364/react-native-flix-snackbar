"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[253],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),k=o,m=u["".concat(p,".").concat(k)]||u[k]||d[k]||a;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=k;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},96403:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={},i=void 0,l={unversionedId:"API/useSnackbar",id:"API/useSnackbar",title:"useSnackbar",description:"useSnackbar is a hook to automatically handle Snackbar component either to show or hide",source:"@site/docs/API/useSnackbar.mdx",sourceDirName:"API",slug:"/API/useSnackbar",permalink:"/react-native-flix-snackbar/API/useSnackbar",draft:!1,editUrl:"https://github.com/flixyudh/react-native-flix-snackbar/tree/main/docs/docs/API/useSnackbar.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SnackbarProvider",permalink:"/react-native-flix-snackbar/API/SnackbarProvider"}},p={},s=[{value:"Example usage",id:"example-usage",level:3},{value:"Props",id:"props",level:2},{value:"<strong>message (required)</strong>",id:"message-required",level:3},{value:"<strong>options</strong>",id:"options",level:3},{value:"<strong>options.label</strong>",id:"optionslabel",level:3},{value:"<strong>options.onPress</strong>",id:"optionsonpress",level:3},{value:"<strong>options.duration</strong>",id:"optionsduration",level:3},{value:"<strong>options.color</strong>",id:"optionscolor",level:3},{value:"<strong>options.backgroundColor</strong>",id:"optionsbackgroundcolor",level:3}],c={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.default)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { useSnackbar } from 'react-native-flix-snackbar';\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useSnackbar")," is a hook to automatically handle Snackbar component either to show or hide"),(0,o.kt)("h3",{id:"example-usage"},"Example usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// other import\nimport { useSnackbar } from 'react-native-flix-snackbar';\n\nexport default MainApp = props => {\n  const { show } = useSnackbar();\n\n  return (\n    <View style={{flex: 1}}>\n      <TouchableOpacity onPress={() => show('Hi snackbar!')}>\n        <Text>Open Snackbar</Text>\n      </TouchableOpacity>;\n    </View>\n  );\n};\n")),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("h3",{id:"message-required"},(0,o.kt)("strong",{parentName:"h3"},"message (required)")),(0,o.kt)("p",null,"Type: ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"Text content to show in Snackbar component"),(0,o.kt)("h3",{id:"options"},(0,o.kt)("strong",{parentName:"h3"},"options")),(0,o.kt)("p",null,"Type: ",(0,o.kt)("inlineCode",{parentName:"p"},"object")),(0,o.kt)("p",null,"List of config to handle Snackbar"),(0,o.kt)("h3",{id:"optionslabel"},(0,o.kt)("strong",{parentName:"h3"},"options.label")),(0,o.kt)("p",null,"Type: ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"Text label of button action in Snackbar"),(0,o.kt)("h3",{id:"optionsonpress"},(0,o.kt)("strong",{parentName:"h3"},"options.onPress")),(0,o.kt)("p",null,"Type: ",(0,o.kt)("inlineCode",{parentName:"p"},"function void")),(0,o.kt)("p",null,"Callback called when action Snackbar is pressed. The ",(0,o.kt)("inlineCode",{parentName:"p"},"onPress")," prop is ",(0,o.kt)("strong",{parentName:"p"},"required")," if ",(0,o.kt)("inlineCode",{parentName:"p"},"options.label")," is defined."),(0,o.kt)("h3",{id:"optionsduration"},(0,o.kt)("strong",{parentName:"h3"},"options.duration")),(0,o.kt)("p",null,"Type: ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"default: ",(0,o.kt)("inlineCode",{parentName:"p"},"2000 (ms)")),(0,o.kt)("p",null,"The duration for Snackbar to show"),(0,o.kt)("h3",{id:"optionscolor"},(0,o.kt)("strong",{parentName:"h3"},"options.color")),(0,o.kt)("p",null,"Type: ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"default: ",(0,o.kt)("inlineCode",{parentName:"p"},"#dee5d8")),(0,o.kt)("p",null,"The color of text label Snackbar"),(0,o.kt)("h3",{id:"optionsbackgroundcolor"},(0,o.kt)("strong",{parentName:"h3"},"options.backgroundColor")),(0,o.kt)("p",null,"Type: ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"default: ",(0,o.kt)("inlineCode",{parentName:"p"},"#424940")),(0,o.kt)("p",null,"The backgroundColor of Snackbar container"))}d.isMDXComponent=!0}}]);