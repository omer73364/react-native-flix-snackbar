"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[493],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>b});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=a,b=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return t?n.createElement(b,i(i({ref:r},s),{},{components:t})):n.createElement(b,i({ref:r},s))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},55851:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const o={},i=void 0,c={unversionedId:"API/SnackbarProvider",id:"API/SnackbarProvider",title:"SnackbarProvider",description:"SnackbarProvider",source:"@site/docs/API/SnackbarProvider.mdx",sourceDirName:"API",slug:"/API/SnackbarProvider",permalink:"/react-native-flix-snackbar/docs/API/SnackbarProvider",draft:!1,editUrl:"https://github.com/flixyudh/react-native-flix-snackbar/tree/main/docs/docs/API/SnackbarProvider.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/react-native-flix-snackbar/docs/Getting Started"},next:{title:"useSnackbar",permalink:"/react-native-flix-snackbar/docs/API/useSnackbar"}},p={},l=[{value:"SnackbarProvider",id:"snackbarprovider",level:2}],s={toc:l},d="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(d,(0,n.default)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"snackbarprovider"},"SnackbarProvider"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { SnackbarProvider } from 'react-native-flix-snackbar';\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<SnackbarProvider>")," component makes ",(0,a.kt)("a",{parentName:"p",href:"usesnackbar"},(0,a.kt)("inlineCode",{parentName:"a"},"useSnackbar"))," hook available to any nested component that need to show snackbar."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"<SnackbarProvider>")," doesn't need any props to passed, so you can easily use it in root component like this:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { SnackbarProvider } from 'react-native-flix-snackbar';\n\nexport default function App() {\n  return (\n    // highlight-start\n    <SnackbarProvider>\n      // highlight-end\n      <MainApp />\n      // highlight-start\n    </SnackbarProvider>\n    // highlight-end\n  );\n}\n"))))}u.isMDXComponent=!0}}]);