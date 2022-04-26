"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[6566],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),p=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(m.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),g=r,d=u["".concat(m,".").concat(g)]||u[g]||s[g]||i;return t?a.createElement(d,o(o({ref:n},c),{},{components:t})):a.createElement(d,o({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8810:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],l={},m="Running Migration",p={unversionedId:"migration/running-migration",id:"version-0.6.x/migration/running-migration",title:"Running Migration",description:"After you have defined the migrations, you can apply or revert migrations in console or on application startup.",source:"@site/versioned_docs/version-0.6.x/05-migration/03-running-migration.md",sourceDirName:"05-migration",slug:"/migration/running-migration",permalink:"/SeaORM/docs/0.6.x/migration/running-migration",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.6.x/05-migration/03-running-migration.md",tags:[],version:"0.6.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1650950233,formattedLastUpdatedAt:"4/26/2022",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Writing Migration",permalink:"/SeaORM/docs/0.6.x/migration/writing-migration"},next:{title:"Select",permalink:"/SeaORM/docs/0.6.x/basic-crud/select"}},c=[{value:"Command Line Interface (CLI)",id:"command-line-interface-cli",children:[{value:"Via <code>sea-orm-cli</code>",id:"via-sea-orm-cli",children:[],level:3},{value:"Via SeaSchema Migrator CLI",id:"via-seaschema-migrator-cli",children:[],level:3}],level:2},{value:"Migrating Programmatically",id:"migrating-programmatically",children:[],level:2}],s={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"running-migration"},"Running Migration"),(0,i.kt)("p",null,"After you have defined the migrations, you can apply or revert migrations in console or on application startup."),(0,i.kt)("h2",{id:"command-line-interface-cli"},"Command Line Interface (CLI)"),(0,i.kt)("p",null,"Running migration manually in console. You should set ",(0,i.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," in your environment, follow the instruction ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/generate-entity/sea-orm-cli#configure-environment"},"here")," to configure it."),(0,i.kt)("p",null,"Supported commands:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"init"),": Initialize migration directory"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"up"),": Apply all pending migrations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"up -n 10"),": Apply 10 pending migrations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"down"),": Rollback last applied migration"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"down -n 10"),": Rollback last 10 applied migrations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status"),": Check the status of all migrations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fresh"),": Drop all tables from the database, then reapply all migrations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"refresh"),": Rollback all applied migrations, then reapply all migrations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reset"),": Rollback all applied migrations")),(0,i.kt)("h3",{id:"via-sea-orm-cli"},"Via ",(0,i.kt)("inlineCode",{parentName:"h3"},"sea-orm-cli")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sea-orm-cli")," will execute ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo run --manifest-path ./migration/Cargo.toml -- COMMAND")," under the hood."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ sea-orm-cli migrate COMMAND\n")),(0,i.kt)("p",null,"You can customize the manifest path."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ sea-orm-cli migrate COMMAND -d ./other/migration/dir\n")),(0,i.kt)("h3",{id:"via-seaschema-migrator-cli"},"Via SeaSchema Migrator CLI"),(0,i.kt)("p",null,"Runs migrator CLI defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"migration/main.rs"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd migration\n$ cargo run -- COMMAND\n")),(0,i.kt)("h2",{id:"migrating-programmatically"},"Migrating Programmatically"),(0,i.kt)("p",null,"Performs migration on application startup with ",(0,i.kt)("inlineCode",{parentName:"p"},"Migrator"),", given that it implements ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/sea-schema/0.5/sea_schema/migration/migrator/trait.MigratorTrait.html"},(0,i.kt)("inlineCode",{parentName:"a"},"MigratorTrait")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/main.rs"',title:'"src/main.rs"'},"use migration::{Migrator, MigratorTrait};\n\n/// Apply all pending migrations\nMigrator::up(db, None).await?;\n\n/// Apply 10 pending migrations\nMigrator::up(db, Some(10)).await?;\n\n/// Rollback last applied migrations\nMigrator::down(db, None).await?;\n\n/// Rollback last 10 applied migrations\nMigrator::down(db, Some(10)).await?;\n\n/// Check the status of all migrations\nMigrator::status(db).await?;\n\n/// Drop all tables from the database, then reapply all migrations\nMigrator::fresh(db).await?;\n\n/// Rollback all applied migrations, then reapply all migrations\nMigrator::refresh(db).await?;\n\n/// Rollback all applied migrations\nMigrator::reset(db).await?;\n")))}u.isMDXComponent=!0}}]);