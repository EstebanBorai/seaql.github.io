"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[325],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4754:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},l="Transaction",u={unversionedId:"advanced-query/transaction",id:"advanced-query/transaction",title:"Transaction",description:"A transaction is a group of SQL statements executed with ACID guarantee. There are two transaction APIs.",source:"@site/docs/09-advanced-query/06-transaction.md",sourceDirName:"09-advanced-query",slug:"/advanced-query/transaction",permalink:"/SeaORM/docs/next/advanced-query/transaction",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/09-advanced-query/06-transaction.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1650950233,formattedLastUpdatedAt:"4/26/2022",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Subquery",permalink:"/SeaORM/docs/next/advanced-query/subquery"},next:{title:"Streaming",permalink:"/SeaORM/docs/next/advanced-query/streaming"}},s=[{value:"Within a <code>Closure</code>",id:"within-a-closure",children:[],level:2},{value:"<code>begin</code> &amp; <code>commit</code> / <code>rollback</code>",id:"begin--commit--rollback",children:[],level:2}],d={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transaction"},"Transaction"),(0,o.kt)("p",null,"A transaction is a group of SQL statements executed with ACID guarantee. There are two transaction APIs."),(0,o.kt)("h2",{id:"within-a-closure"},"Within a ",(0,o.kt)("inlineCode",{parentName:"h2"},"Closure")),(0,o.kt)("p",null,"The transaction will be committed if the closure returned ",(0,o.kt)("inlineCode",{parentName:"p"},"Ok"),", rollbacked if returned ",(0,o.kt)("inlineCode",{parentName:"p"},"Err"),". The 2nd and 3rd type parameters are the Ok and Err types respectively."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'// <Fn, A, B> -> Result<A, B>\ndb.transaction::<_, (), DbErr>(|txn| {\n    Box::pin(async move {\n        bakery::ActiveModel {\n            name: Set("SeaSide Bakery".to_owned()),\n            profit_margin: Set(10.4),\n            ..Default::default()\n        }\n        .save(txn)\n        .await?;\n\n        bakery::ActiveModel {\n            name: Set("Top Bakery".to_owned()),\n            profit_margin: Set(15.0),\n            ..Default::default()\n        }\n        .save(txn)\n        .await?;\n\n        Ok(())\n    })\n})\n.await;\n')),(0,o.kt)("p",null,"This is the preferred way for most cases. However, if you happen to run into an ",(0,o.kt)("em",{parentName:"p"},"impossible lifetime")," while trying to capture a reference in the async block, then the following API is the solution."),(0,o.kt)("h2",{id:"begin--commit--rollback"},(0,o.kt)("inlineCode",{parentName:"h2"},"begin")," & ",(0,o.kt)("inlineCode",{parentName:"h2"},"commit")," / ",(0,o.kt)("inlineCode",{parentName:"h2"},"rollback")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"begin")," the transaction followed by a ",(0,o.kt)("inlineCode",{parentName:"p"},"commit")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"rollback"),". If ",(0,o.kt)("inlineCode",{parentName:"p"},"txn")," goes out of scope, the transaction is automatically rollbacked."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let txn = db.begin().await?;\n\nbakery::ActiveModel {\n    name: Set("SeaSide Bakery".to_owned()),\n    profit_margin: Set(10.4),\n    ..Default::default()\n}\n.save(&txn)\n.await?;\n\nbakery::ActiveModel {\n    name: Set("Top Bakery".to_owned()),\n    profit_margin: Set(15.0),\n    ..Default::default()\n}\n.save(&txn)\n.await?;\n\ntxn.commit().await?;\n')))}p.isMDXComponent=!0}}]);