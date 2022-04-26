"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[3439],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return t?o.createElement(f,i(i({ref:n},p),{},{components:t})):o.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9023:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),i=["components"],c={},l="Connection Pool",s={unversionedId:"install-and-config/connection",id:"version-0.6.x/install-and-config/connection",title:"Connection Pool",description:"To obtain a database connection, use the Database interface:",source:"@site/versioned_docs/version-0.6.x/02-install-and-config/03-connection.md",sourceDirName:"02-install-and-config",slug:"/install-and-config/connection",permalink:"/SeaORM/docs/0.6.x/install-and-config/connection",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.6.x/02-install-and-config/03-connection.md",tags:[],version:"0.6.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1650950233,formattedLastUpdatedAt:"4/26/2022",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Schema Management",permalink:"/SeaORM/docs/0.6.x/install-and-config/schema"},next:{title:"Debug Log",permalink:"/SeaORM/docs/0.6.x/install-and-config/debug-log"}},p=[{value:"Connect Options",id:"connect-options",children:[],level:2}],u={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connection-pool"},"Connection Pool"),(0,r.kt)("p",null,"To obtain a database connection, use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.6/sea_orm/struct.Database.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Database"))," interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let db: DatabaseConnection = Database::connect("protocol://username:password@host/database").await?;\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"protocol")," can be ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql:"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres:")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"sqlite:"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"host")," is usually ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),", a domain name or an IP address."),(0,r.kt)("p",null,"Under the hood, a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sqlx/0.5/sqlx/struct.Pool.html"},(0,r.kt)("inlineCode",{parentName:"a"},"sqlx::Pool"))," is created and owned by ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.6/sea_orm/enum.DatabaseConnection.html"},(0,r.kt)("inlineCode",{parentName:"a"},"DatabaseConnection")),"."),(0,r.kt)("p",null,"Each time you call ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"query_one/all")," on it, a connection will be acquired and released from the pool."),(0,r.kt)("p",null,"Multiple queries will execute in parallel as you ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," on them."),(0,r.kt)("h2",{id:"connect-options"},"Connect Options"),(0,r.kt)("p",null,"To configure the connection, use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.6/sea_orm/struct.ConnectOptions.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ConnectOptions"))," interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let mut opt = ConnectOptions::new("protocol://username:password@host/database".to_owned());\nopt.max_connections(100)\n    .min_connections(5)\n    .connect_timeout(Duration::from_secs(8))\n    .idle_timeout(Duration::from_secs(8))\n    .max_lifetime(Duration::from_secs(8))\n    .sqlx_logging(true);\n\nlet db = Database::connect(opt).await?;\n')))}d.isMDXComponent=!0}}]);