(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{RXBc:function(t,e,a){"use strict";a.r(e);var o=a("dI71"),n=a("q1tI"),i=a.n(n),r=a("Zttt"),s=a("vOnD"),p=s.b.section.withConfig({displayName:"index-comp__PostContainer",componentId:"etfxdt-0"})(["display:flex;flex-wrap:wrap;margin:0 auto;max-width:1400px;padding:84px 16px 0;@media screen and (max-width:414px){padding:84px 24px 0;}"]),l=a("17x9"),c=a.n(l),m=s.b.div.withConfig({displayName:"post-comp__PostCardWrap",componentId:"sc-1mff10a-0"})(["display:flex;@media (min-width:40em){&.col-2{width:50%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding-right:16px;padding-left:16px;}}"]),d=s.b.div.withConfig({displayName:"post-comp__PostCard",componentId:"sc-1mff10a-1"})(["position:relative;display:flex;width:100%;overflow:hidden;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:32px;background-color:#eef1f0;border-radius:8px;-webkit-box-shadow:4px 12px 40px 6px rgb(0 0 0 / 9%);box-shadow:4px 12px 40px 6px rgb(0 0 0 / 9%);-webkit-transition:-webkit-box-shadow 250ms ease-in-out;transition:-webkit-box-shadow 250ms ease-in-out;transition:box-shadow 250ms ease-in-out;transition:box-shadow 250ms ease-in-out,-webkit-box-shadow 250ms ease-in-out;"]),f=s.b.div.withConfig({displayName:"post-comp__PostCardMedia",componentId:"sc-1mff10a-2"})(["overflow:hidden;background-color:#eef1f0;"]),b=s.b.a.withConfig({displayName:"post-comp__PostCardMediaLink",componentId:"sc-1mff10a-3"})(["display:block;position:relative;padding-top:100%;-webkit-transition:-webkit-transform .5s ease;transition:-webkit-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease,-webkit-transform .5s ease;"]),h=s.b.img.withConfig({displayName:"post-comp__PostCardImage",componentId:"sc-1mff10a-4"})(["position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;"]),x=s.b.div.withConfig({displayName:"post-comp__PostCardContent",componentId:"sc-1mff10a-5"})(["-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:24px;background-color:#fff;@media (min-width:40em){.post-card-content{padding:32px;}}"]),u=s.b.div.withConfig({displayName:"post-comp__PostCardMeta",componentId:"sc-1mff10a-6"})(["display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#4f525f;font-size:12px;line-height:16px;font-weight:500;letter-spacing:.5px;margin-bottom:8px;"]),w=s.b.time.withConfig({displayName:"post-comp__PostCardDate",componentId:"sc-1mff10a-7"})(["padding-right:8px;margin-right:8px;line-height:1;box-shadow:inset -1px 0 0 0 #4f525f;"]),g=s.b.a.withConfig({displayName:"post-comp__PostCardTag",componentId:"sc-1mff10a-8"})(["text-decoration:underline;margin-right:14px;position:relative;&::after{content:'、';position:absolute;}&:last-child::after{content:'';}"]),y=s.b.h2.withConfig({displayName:"post-comp__PostCardTitle",componentId:"sc-1mff10a-9"})(["font-size:20px;line-height:24px;margin-bottom:0;"]),C=s.b.a.withConfig({displayName:"post-comp__PostCardTitleLink",componentId:"sc-1mff10a-10"})(["border-bottom:1px solid transparent;-webkit-transition:border-bottom 250ms ease-in-out;transition:border-bottom 250ms ease-in-out;"]),v=s.b.a.withConfig({displayName:"post-comp__PostCardExcerpt",componentId:"sc-1mff10a-11"})(["font-size:16px;line-height:24px;margin-bottom:0;margin-top:8px;overflow-y:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;"]),k=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e.prototype.render=function(){var t=this.props.data,e=t.frontmatter,a=e.cover,o=e.date,n=e.description,r=e.catagories,s=e.title,p=a.childImageSharp.sizes.src,l="/blog"+t.fields.slug;return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{className:"col-2"},i.a.createElement(d,null,i.a.createElement(f,null,i.a.createElement(b,{href:l},i.a.createElement(h,{src:p,alt:s}))),i.a.createElement(x,null,i.a.createElement(u,null,i.a.createElement(w,null,o),i.a.createElement(g,{href:""},r)),i.a.createElement(y,null,i.a.createElement(C,{href:l},s)),i.a.createElement(v,{href:l},n)))))},e}(i.a.Component);k.PropType={data:c.a.object};var E=k,_=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e.prototype.render=function(){var t=this.props.dataArray;return i.a.createElement(p,null,t.map((function(t,e){return i.a.createElement(E,{key:e,data:t.node})})))},e}(n.Component);_.defaultProps={dataArray:[]};var I=_,N=a("wtQ5"),P=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.data,a=t.location;return i.a.createElement(r.a,{location:a,title:"CHASING LIGHTS AND SHADOWS"},i.a.createElement(N.a,{title:"Home",keywords:["mountain","life","photography","blog","gatsby","javascript","react","js"]}),i.a.createElement(I,{dataArray:e.allMdx.edges}))},e}(i.a.Component);e.default=P},Zttt:function(t,e,a){"use strict";var o=a("dI71"),n=a("q1tI"),i=a.n(n),r=a("Rnav"),s=a("KIKK"),p=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.location,a=t.title,o=t.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.b,null),i.a.createElement(s.c,null,i.a.createElement(r.a,{title:a,location:e}),i.a.createElement("main",null,o),i.a.createElement(s.a,null,"© Justin ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},e}(i.a.Component);e.a=p}}]);
//# sourceMappingURL=component---src-pages-index-js-7950c65f0fb8d0acaa8a.js.map