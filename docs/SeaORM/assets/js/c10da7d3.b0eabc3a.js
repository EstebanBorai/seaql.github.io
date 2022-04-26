"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[5686],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},489:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={},l="Custom Joins",u={unversionedId:"advanced-query/custom-joins",id:"version-0.7.x/advanced-query/custom-joins",title:"Custom Joins",description:"You can use the join method to construct complex join select queries. It takes any RelationDef defined in entity files, and you can define relation with the belongs_to method as well. Join type is specified using JoinType such as inner join, left join and right join.",source:"@site/versioned_docs/version-0.7.x/09-advanced-query/04-custom-joins.md",sourceDirName:"09-advanced-query",slug:"/advanced-query/custom-joins",permalink:"/SeaORM/docs/advanced-query/custom-joins",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.7.x/09-advanced-query/04-custom-joins.md",tags:[],version:"0.7.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1650950233,formattedLastUpdatedAt:"4/26/2022",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Aggregate Functions",permalink:"/SeaORM/docs/advanced-query/aggregate-function"},next:{title:"Subquery",permalink:"/SeaORM/docs/advanced-query/subquery"}},s=[],d={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"custom-joins"},"Custom Joins"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"join")," method to construct complex join select queries. It takes any ",(0,i.kt)("inlineCode",{parentName:"p"},"RelationDef")," defined in entity files, and you can define relation with the ",(0,i.kt)("inlineCode",{parentName:"p"},"belongs_to")," method as well. Join type is specified using ",(0,i.kt)("inlineCode",{parentName:"p"},"JoinType")," such as inner join, left join and right join."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{JoinType, RelationTrait};\nuse sea_query::Expr;\n\nassert_eq!(\n    cake::Entity::find()\n        .column_as(filling::Column::Id.count(), "count")\n        .join_rev(\n            // construct `RelationDef` on the fly\n            JoinType::InnerJoin,\n            cake_filling::Entity::belongs_to(cake::Entity)\n                .from(cake_filling::Column::CakeId)\n                .to(cake::Column::Id)\n                .into()\n        )\n        // reuse a `Relation` from existing Entity\n        .join(JoinType::InnerJoin, cake_filling::Relation::Filling.def())\n        .group_by(cake::Column::Id)\n        .having(filling::Column::Id.count().equals(Expr::value(2)))\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `cake`.`id`, `cake`.`name`, COUNT(`filling`.`id`) AS `count` FROM `cake`",\n        "INNER JOIN `cake_filling` ON `cake_filling`.`cake_id` = `cake`.`id`",\n        "INNER JOIN `filling` ON `cake_filling`.`filling_id` = `filling`.`id`",\n        "GROUP BY `cake`.`id`",\n        "HAVING COUNT(`filling`.`id`) = 2",\n    ]\n    .join(" ")\n);\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can use a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"struct")," derived from the ",(0,i.kt)("inlineCode",{parentName:"p"},"FromQueryResult")," trait to handle the result of such complex query. See ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/advanced-query/custom-select#handling-custom-selects"},"here")," for details.")))}p.isMDXComponent=!0}}]);