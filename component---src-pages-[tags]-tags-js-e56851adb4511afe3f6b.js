(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"SZ/j":function(t,e,r){"use strict";var a=r("rePB"),n=r("dI71"),o=r("q1tI"),i=r.n(o),l=r("vOnD"),c=l.b.div.withConfig({displayName:"cata-comp__CataWrap",componentId:"sc-1o4snf3-0"})(["padding:84px 2rem 2rem;"]),p=l.b.div.withConfig({displayName:"catalist-comp__CataTitle",componentId:"sc-1mxl4er-0"})(["color:#363636;font-size:1.5rem;font-weight:400;line-height:1.125;margin:0 0 0.8em;padding:0;word-break:break-word;margin-top:3rem;&:first-child{margin-top:0rem;}"]),s=l.b.div.withConfig({displayName:"catalist-comp__CataItemWrap",componentId:"sc-1mxl4er-1"})(["border-left:1px solid #dbdbdb;"]),m=l.b.div.withConfig({displayName:"catalist-comp__ListItemsWrap",componentId:"sc-1mxl4er-2"})(["border-left:3px solid transparent;border-top-style:none;color:#4a4a4a;font-size:17.6px;line-height:26.4px;margin-bottom:0;margin-left:-1px;padding:0.5rem 1.5rem;&:hover{border-left-color:black;cursor:pointer;}"]),u=l.b.time.withConfig({displayName:"catalist-comp__ListDate",componentId:"sc-1mxl4er-3"})(["color:#888;font-family:monospace;font-size:0.9rem;line-height:21.6px;margin-right:1rem;"]),d=l.b.h6.withConfig({displayName:"catalist-comp__ListItemTitle",componentId:"sc-1mxl4er-4"})(["color:#363636;font-size:1rem;font-weight:400;line-height:1.125;margin:0;padding:0;word-break:break-word;"]),f=l.b.a.withConfig({displayName:"catalist-comp__ListLink",componentId:"sc-1mxl4er-5"})(["display:inline-block;width:100%;"]),y=function(t){function e(){return t.apply(this,arguments)||this}return Object(n.a)(e,t),e.prototype.render=function(){var t=this.props.data,e=t.slug,r=t.frontmatter,a=r.date,n=r.title,o="/blog/"+e;return i.a.createElement(m,null,i.a.createElement(u,null,a),i.a.createElement(d,null,i.a.createElement(f,{href:o},n)))},e}(i.a.Component);y.defaultProps={data:{}};var g=y,b=function(t){function e(){return t.apply(this,arguments)||this}return Object(n.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.dataArray,r=t.subject,a=e.map((function(t){return t.node.frontmatter.catagories})),n=Array.from(new Set(a));return i.a.createElement(i.a.Fragment,null,n.map((function(t,a){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,{key:a},r?"#"+r:(n=t).slice(0,1).toUpperCase()+n.slice(1).toLowerCase()),i.a.createElement(s,{key:a},e.map((function(e,r){if(t===e.node.frontmatter.catagories)return i.a.createElement(g,{key:r,data:e.node})}))));var n})))},e}(i.a.Component);b.defaultProps={dataArray:[],subject:""};var h=b;function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function E(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){Object(a.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v=function(t){function e(){return t.apply(this,arguments)||this}return Object(n.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.dataArray,r=t.tagName,a=t.style;return i.a.createElement(c,{style:E({},a)},i.a.createElement(h,{dataArray:e,subject:r}))},e}(o.Component);v.defaultProps={dataArray:[],tagName:"",style:{}};e.a=v},Zttt:function(t,e,r){"use strict";var a=r("dI71"),n=r("q1tI"),o=r.n(n),i=r("Rnav"),l=r("KIKK"),c=function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.location,r=t.title,a=t.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.b,null),o.a.createElement(l.c,null,o.a.createElement(i.a,{title:r,location:e}),o.a.createElement("main",null,a),o.a.createElement(l.a,null,"© Justin ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},e}(o.a.Component);e.a=c},zHbB:function(t,e,r){"use strict";r.r(e);var a=r("dI71"),n=r("q1tI"),o=r.n(n),i=r("Zttt"),l=r("wtQ5"),c=r("17x9"),p=r.n(c),s=r("vOnD"),m=s.b.ul.withConfig({displayName:"taglist-comp__ListUL",componentId:"xkspc4-0"})(["margin:0 2rem 2rem 0;list-style:none;"]),u=s.b.li.withConfig({displayName:"taglist-comp__ListLI",componentId:"xkspc4-1"})(["display:inline-block;border:2px solid #ccc;margin-right:0.5rem;margin-bottom:0.5rem;&:hover{border:2px solid #777;cursor:pointer;}a{padding:0.4rem 0.7rem;display:inline-block;}"]),d=r("Wbzz"),f=function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){var t=this.props.listArray;return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,null,t.map((function(t,e){return o.a.createElement(u,{key:e},o.a.createElement(d.Link,{to:"/tags/"+t},"#",t))}))))},e}(o.a.Component);f.staticProps={listArray:p.a.array},f.defaultProps={listArray:[]};var y=f,g=r("SZ/j"),b=function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.location,r=t.tags,a=t.data.allMdx.edges,n=[],c=[];a.forEach((function(t){t.node.frontmatter.tags.forEach((function(e){c.push(e),r===e&&n.push(t)}))}));var p=Array.from(new Set(c));return o.a.createElement(i.a,{location:e,title:"CHASING LIGHTS AND SHADOWS"},o.a.createElement(l.a,{title:"Home",keywords:["mountain","life","photography","blog","gatsby","javascript","react","js"]}),o.a.createElement(y,{listArray:p}),o.a.createElement(g.a,{dataArray:n,tagName:r,style:{marginTop:"0"}}))},e}(o.a.Component);e.default=b}}]);
//# sourceMappingURL=component---src-pages-[tags]-tags-js-e56851adb4511afe3f6b.js.map