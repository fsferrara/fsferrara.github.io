"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2600],{28681:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=t(74848),o=t(28453);const s={},r=void 0,l={id:"Programming/Swift/Swift Method Swizzling",title:"Swift Method Swizzling",description:"Method Swizzling\xa0in iOS is a powerful technique that allows you to change the implementation of an existing method at runtime. This can be particularly useful for modifying or extending the behavior of methods in frameworks or third-party libraries without subclassing or altering the original class.",source:"@site/../digital-garden/Programming/Swift/Swift Method Swizzling.md",sourceDirName:"Programming/Swift",slug:"/Programming/Swift/Swift Method Swizzling",permalink:"/notes/Programming/Swift/Swift Method Swizzling",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"digitalGardenSidebar",previous:{title:"Programming",permalink:"/notes/category/programming"},next:{title:"Tools",permalink:"/notes/category/tools"}},a={},c=[{value:"How Method Swizzling Works",id:"how-method-swizzling-works",level:2},{value:"Method Swizzling in Swift",id:"method-swizzling-in-swift",level:2},{value:"Things to Keep in Mind",id:"things-to-keep-in-mind",level:2}];function d(e){const i={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Method Swizzling"}),"\xa0in iOS is a powerful technique that allows you to change the implementation of an existing method at runtime. This can be particularly useful for modifying or extending the behavior of methods in frameworks or third-party libraries without subclassing or altering the original class."]}),"\n",(0,n.jsx)(i.h2,{id:"how-method-swizzling-works",children:"How Method Swizzling Works"}),"\n",(0,n.jsxs)(i.p,{children:["Method swizzling involves exchanging the implementations of two methods. A basic example in Objective-C uses class functions (i.e. ",(0,n.jsx)(i.code,{children:"class_getInstanceMethod()"}),", ",(0,n.jsx)(i.code,{children:"class_addMethod()"}),", ",(0,n.jsx)(i.code,{children:"class_replaceMethod()"}),") and the most important function: ",(0,n.jsx)(i.code,{children:"method_exchangeImplementations()"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"Method swizzling is not a feature explicitly offered by iOS or Swift as a language feature. Instead, it leverages the Objective-C runtime, which is part of the underlying infrastructure of iOS."}),"\n",(0,n.jsx)(i.h2,{id:"method-swizzling-in-swift",children:"Method Swizzling in Swift"}),"\n",(0,n.jsx)(i.p,{children:"Method Swizzling in Swift is a technique that involves dynamically replacing the implementation of an existing method at runtime. Although it originated in Objective-C and is more common there due to the dynamic nature of the language, it can still be applied in Swift, especially when interacting with Objective-C code or using Swift classes that are compatible with Objective-C runtime."}),"\n",(0,n.jsx)(i.h2,{id:"things-to-keep-in-mind",children:"Things to Keep in Mind"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Timing"}),": Swizzling should be done as early as possible, such as in ",(0,n.jsx)(i.code,{children:"AppDelegate"})," or before the class is used."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Objective-C Runtime Dependency"}),": Swizzling relies on Objective-C\u2019s runtime, so it only works with classes that are Objective-C compatible."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Avoid Overuse"}),": Method swizzling can lead to hard-to-track bugs, especially if used excessively or in production code."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>l});var n=t(96540);const o={},s=n.createContext(o);function r(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);