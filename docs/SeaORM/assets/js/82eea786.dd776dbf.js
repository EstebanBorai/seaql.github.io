"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[152],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(v,l(l({ref:t},u),{},{components:n})):r.createElement(v,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6659:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},s="Insert",c={unversionedId:"basic-crud/insert",id:"version-0.4.x/basic-crud/insert",title:"Insert",description:"Before diving into SeaORM insert we have to introduce ActiveValue and ActiveModel.",source:"@site/versioned_docs/version-0.4.x/05-basic-crud/02-insert.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/insert",permalink:"/SeaORM/docs/0.4.x/basic-crud/insert",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/05-basic-crud/02-insert.md",tags:[],version:"0.4.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1650950233,formattedLastUpdatedAt:"4/26/2022",sidebarPosition:2,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",previous:{title:"Select",permalink:"/SeaORM/docs/0.4.x/basic-crud/select"},next:{title:"Update",permalink:"/SeaORM/docs/0.4.x/basic-crud/update"}},u=[{value:"ActiveValue",id:"activevalue",children:[],level:2},{value:"Model &amp; ActiveModel",id:"model--activemodel",children:[],level:2},{value:"Insert One",id:"insert-one",children:[],level:2},{value:"Insert Many",id:"insert-many",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"insert"},"Insert"),(0,i.kt)("p",null,"Before diving into SeaORM insert we have to introduce ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveValue")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveModel"),"."),(0,i.kt)("h2",{id:"activevalue"},"ActiveValue"),(0,i.kt)("p",null,"A wrapper struct to capture the changes made to ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveModel")," attributes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// Set value\nlet _: ActiveValue<i32> = Set(10);\n\n// Unset value\nlet _: ActiveValue<i32> = Unset(None);\n")),(0,i.kt)("h2",{id:"model--activemodel"},"Model & ActiveModel"),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveModel")," has all the attributes of ",(0,i.kt)("inlineCode",{parentName:"p"},"Model")," wrapped in ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveValue"),"."),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveModel")," to insert a row with a subset of columns set."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let cheese: Option<cake::Model> = Cake::find_by_id(1).one(db).await?;\n\n// Get Model\nlet model: cake::Model = cheese.unwrap();\nassert_eq!(model.name, "Cheese Cake".to_owned());\n\n// Into ActiveModel\nlet active_model: cake::ActiveModel = model.into();\nassert_eq!(active_model.name, ActiveValue::unchanged("Cheese Cake".to_owned()));\n')),(0,i.kt)("h2",{id:"insert-one"},"Insert One"),(0,i.kt)("p",null,"Insert an active model and get back a fresh ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveModel"),". Its value is retrieved from database, so any auto-generated fields will be populated."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let pear = fruit::ActiveModel {\n    name: Set("Pear".to_owned()),\n    ..Default::default() // all other attributes are `Unset`\n};\n\nlet res: fruit::ActiveModel = pear.insert(db).await?;\n')),(0,i.kt)("p",null,"Insert an active model and get back the last insert id. Its type matches the model's primary key type, so it could be a tuple if the model has a composite primary key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let pear = fruit::ActiveModel {\n    name: Set("Pear".to_owned()),\n    ..Default::default() // all other attributes are `Unset`\n};\n\nlet res: InsertResult = fruit::Entity::insert(pear).exec(db).await?;\nassert_eq!(res.last_insert_id, 28)\n')),(0,i.kt)("h2",{id:"insert-many"},"Insert Many"),(0,i.kt)("p",null,"Insert many active models and get back the last insert id."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let apple = fruit::ActiveModel {\n    name: Set("Apple".to_owned()),\n    ..Default::default()\n};\n\nlet orange = fruit::ActiveModel {\n    name: Set("Orange".to_owned()),\n    ..Default::default()\n};\n\nlet res: InsertResult = Fruit::insert_many(vec![apple, orange]).exec(db).await?;\nassert_eq!(res.last_insert_id, 30)\n')))}p.isMDXComponent=!0}}]);