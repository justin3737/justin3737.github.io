(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"5wua":function(t,e,n){"use strict";var a=n("dI71"),r=n("q1tI"),i=n.n(r),o=n("Wbzz"),l=n("vOnD"),c=l.b.div.withConfig({displayName:"list-comp__ListTitle",componentId:"qi6ybu-0"})(["color:#363636;font-size:1.5rem;font-weight:400;line-height:1.125;margin:0 0 0.8em;padding:0;word-break:break-word;margin-top:3rem;&:first-child{margin-top:0rem;}"]),p=l.b.div.withConfig({displayName:"list-comp__ListItemWrap",componentId:"qi6ybu-1"})(["border-left:1px solid #dbdbdb;"]),m=l.b.div.withConfig({displayName:"list-comp__ListItemsWrap",componentId:"qi6ybu-2"})(["border-left:3px solid transparent;border-top-style:none;color:#4a4a4a;font-size:17.6px;line-height:26.4px;margin-bottom:0;margin-left:-1px;padding:0.5rem 1.5rem;&:hover{border-left-color:black;cursor:pointer;}"]),s=l.b.time.withConfig({displayName:"list-comp__ListDate",componentId:"qi6ybu-3"})(["color:#888;font-family:monospace;font-size:0.9rem;line-height:21.6px;margin-right:1rem;"]),u=l.b.h6.withConfig({displayName:"list-comp__ListItemTitle",componentId:"qi6ybu-4"})(["color:#363636;font-size:1rem;font-weight:400;line-height:1.125;margin:0;padding:0;word-break:break-word;"]),d=l.b.a.withConfig({displayName:"list-comp__ListLink",componentId:"qi6ybu-5"})(["display:inline-block;width:100%;"]),f=n("EuVu"),g=function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){var t=this.props.data,e=t.slug,n=t.frontmatter,a=n.date,r=n.title,l=n.tags,c="/blog/"+e;return i.a.createElement(m,null,i.a.createElement(s,null,a),i.a.createElement(u,null,i.a.createElement(d,{href:c},r)),l.map((function(t,e){return i.a.createElement(f.a,{key:e},i.a.createElement(o.Link,{to:"/tags/"+t},"#",t))})))},e}(i.a.Component);g.defaultProps={data:{}};var h=g,y=function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){var t,e=this.props,n=e.dataArray,a=e.subject,r=e.filterType;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c,null,"tags"===r?"#"+a:(t=a).slice(0,1).toUpperCase()+t.slice(1).toLowerCase()),i.a.createElement(p,null,n.map((function(t,e){if("categories"===r&&a.includes(t.node.frontmatter[r])||"tags"===r&&-1!==a.includes(t.node.frontmatter[r]))return i.a.createElement(h,{key:e,data:t.node})}))))},e}(i.a.Component);y.defaultProps={dataArray:[],subject:"",filterType:"tags"};e.a=y},EuVu:function(t,e,n){"use strict";var a=n("vOnD").b.span.withConfig({displayName:"tag-comp__TagText",componentId:"qp3fm4-0"})(['color:#888;font-size:0.9rem;line-height:21.6px;margin-right:0.4rem;& a:hover{text-decoration:underline;}&:after{content:"、";}']);e.a=a},S7ka:function(t,e,n){"use strict";n.r(e);var a=n("dI71"),r=n("q1tI"),i=n.n(r),o=n("Zttt"),l=n("vOnD").b.div.withConfig({displayName:"cate-comp__CateCtnWrap",componentId:"sc-142qmyq-0"})(["padding:84px 2rem 2rem;"]),c=n("5wua"),p=function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){var t=this.props.dataArray,e=t.map((function(t){return t.node.frontmatter.categories})),n=Array.from(new Set(e));return i.a.createElement(l,null,i.a.createElement(i.a.Fragment,null,n.map((function(e,n){return i.a.createElement(c.a,{key:n,dataArray:t,subject:e,filterType:"categories"})}))))},e}(r.Component);p.defaultProps={dataArray:[],tagName:""};var m=p,s=n("wtQ5"),u=function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.data,n=t.location;return i.a.createElement(o.a,{location:n,title:"CHASING LIGHTS AND SHADOWS"},i.a.createElement(s.a,{title:"Home",keywords:["mountain","life","photography","blog","gatsby","javascript","react","js"]}),i.a.createElement(m,{dataArray:e.allMdx.edges}))},e}(i.a.Component);e.default=u},Zttt:function(t,e,n){"use strict";var a=n("dI71"),r=n("q1tI"),i=n.n(r),o=n("Rnav"),l=n("KIKK"),c=function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.location,n=t.title,a=t.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.b,null),i.a.createElement(l.c,null,i.a.createElement(o.a,{title:n,location:e}),i.a.createElement("main",null,a),i.a.createElement(l.a,null,"© Justin ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},e}(i.a.Component);e.a=c}}]);
//# sourceMappingURL=component---src-pages-categories-js-feb00cbc0f2b3ef932dd.js.map