(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"4M6O":function(e,t,n){"use strict";var o=n("TqRt");t.__esModule=!0,t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o;return function(){var r=this,i=arguments,a=function(){o=null,n||e.apply(r,i)},s=n&&!o;window.clearTimeout(o),o=setTimeout(a,t),s&&e.apply(r,i)}},t.isReactElement=a,t.shallowComparison=function e(t,n){var o,i=new Set(Object.keys(t).concat(Object.keys(n)));return 0!==(o=[]).concat.apply(o,(0,r.default)(i)).filter((function(o){if("object"==typeof t[o]){if(e(t[o],n[o]))return!0}else if(t[o]!==n[o]&&!a(t[o]))return!0})).length};var r=o(n("RIqP")),i=o(n("q1tI"));function a(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}},"A2+M":function(e,t,n){var o=n("X8hv");e.exports={MDXRenderer:o}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},Ijbi:function(e,t,n){var o=n("WkPL");e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.default=e.exports,e.exports.__esModule=!0},ORnI:function(e,t,n){"use strict";var o=n("TqRt");t.__esModule=!0,t.default=void 0;var r=o(n("VUT9"));t.Disqus=r.default;var i=o(n("qASQ"));t.CommentCount=i.default;var a=o(n("vAJ3"));t.CommentEmbed=a.default;var s=r.default;t.default=s},RIqP:function(e,t,n){var o=n("Ijbi"),r=n("EbDI"),i=n("ZhPi"),a=n("Bnag");e.exports=function(e){return o(e)||r(e)||i(e)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},VUT9:function(e,t,n){"use strict";var o=n("TqRt");t.__esModule=!0,t.default=void 0;var r=o(n("pVnL")),i=o(n("8OQS")),a=o(n("VbXa")),s=o(n("q1tI")),l=o(n("17x9")),u=n("4M6O"),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="justin-image-blog",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,u.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,u.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);if(window.document.querySelector('[id^="dsq-app"]')){var t=window.document.getElementById(window.document.querySelector('[id^="dsq-app"]').id);t.parentNode.removeChild(t)}},n.render=function(){var e=this.props,t=(e.config,(0,i.default)(e,["config"]));return s.default.createElement("div",(0,r.default)({id:"disqus_thread"},t,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:86,columnNumber:7}}))},t}(s.default.Component);t.default=c,c.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string,language:l.default.string,remoteAuthS3:l.default.string,apiKey:l.default.string})}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o},e.exports.default=e.exports,e.exports.__esModule=!0},X8hv:function(e,t,n){var o=n("sXyB"),r=n("RIqP"),i=n("lSNA"),a=n("8OQS"),s=["scope","children"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=n("q1tI"),d=n("7ljp").mdx,p=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,i=a(e,s),l=p(t),f=c.useMemo((function(){if(!n)return null;var e=u({React:c,mdx:d},l),t=Object.keys(e),i=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(r(t),[""+n])).apply(void 0,[{}].concat(r(i)))}),[n,t]);return c.createElement(f,u({},i))}},ZhPi:function(e,t,n){var o=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},Zttt:function(e,t,n){"use strict";var o=n("dI71"),r=n("q1tI"),i=n.n(r),a=n("Rnav"),s=n("KIKK"),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.title,o=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.b,null),i.a.createElement(s.c,null,i.a.createElement(a.a,{title:n,location:t}),i.a.createElement("main",null,o),i.a.createElement(s.a,null,"© Justin ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},t}(i.a.Component);t.a=l},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},qASQ:function(e,t,n){"use strict";var o=n("TqRt");t.__esModule=!0,t.default=void 0;var r=o(n("pVnL")),i=o(n("8OQS")),a=o(n("VbXa")),s=o(n("q1tI")),l=o(n("17x9")),u=n("4M6O"),c=(0,u.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="justin-image-blog",n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?c():(0,u.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,u.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,o=(0,i.default)(e,["config","placeholder"]);return s.default.createElement("span",(0,r.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},o,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:53,columnNumber:7}}),n)},t}(s.default.Component);t.default=d,d.defaultProps={placeholder:"..."},d.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),placeholder:l.default.string}},sXyB:function(e,t,n){var o=n("SksO"),r=n("b48C");function i(t,n,a){return r()?(e.exports=i=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=i=function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&o(i,n.prototype),i},e.exports.default=e.exports,e.exports.__esModule=!0),i.apply(null,arguments)}e.exports=i,e.exports.default=e.exports,e.exports.__esModule=!0},vAJ3:function(e,t,n){"use strict";var o=n("TqRt");t.__esModule=!0,t.default=void 0;var r=o(n("VbXa")),i=o(n("q1tI")),a=o(n("17x9")),s=function(e){function t(){return e.apply(this,arguments)||this}(0,r.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},t}(i.default.Component);t.default=s,s.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},s.propTypes={commentId:a.default.string.isRequired,width:a.default.number,height:a.default.number,showMedia:a.default.bool,showParentComment:a.default.bool}},yZlL:function(e,t,n){"use strict";n.r(t);var o=n("dI71"),r=n("q1tI"),i=n.n(r),a=n("A2+M"),s=n("vOnD"),l=s.b.div.withConfig({displayName:"blog-post-comp__Article",componentId:"sc-1l8a55w-0"})(['max-width:920px;margin:0 auto;padding:12vw 2.5rem 2.5rem;font-size:16px;font-weight:400;line-height:27px;letter-spacing:.48px;h1{color:#151515;margin:0 0 0.4em;font-size:1.9em;font-weight:600;line-height:1.1;letter-spacing:-0.04em;}h2{color:#555555;font-size:1.5em;line-height:1.1;font-weight:300;}h3{margin:2em 0 0.5em 0;}h5{font-size:12px;color:#777;display:inline-block;margin-top:-20px;position:absolute;font-weight:normal;line-height:18px;width:calc(100% - 64px);text-align:center;}img{max-width:100%;}.post-content-date{font-size:14px;line-height:22px;letter-spacing:.05px;font-weight:400;color:#687385;}p{margin:0 0 1.5em 0;font-weight:400;color:#454545;}hr{position:relative;margin:30px 0;border-color:transparent;display:block;width:100%;padding:0;height:1px;border:0;overflow:visible;box-sizing:content-box;}hr:after{display:block;font-size:24px;content:". . .";margin:0 auto;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}blockquote{border:4px solid #bbbbbb;margin:2.5em 0;padding:1em 1.1em 1em 1.3em;position:relative;font-style:italic;}blockquote::before,blockquote::after{top:-6px;left:50%;width:96%;height:8px;content:"";position:absolute;background:#ffffff;margin-left:-48%;}blockquote::after{top:auto;bottom:-6px;}blockquote p{margin:0;}.gatsby-resp-image-wrapper{margin:0 -2rem;}@media (min-width:920px){h5{text-align:left;}}@media (max-width:600px){padding:calc(2.5rem + 60px) 2.5rem 2.5rem;h2{font-size:1.6em;}}@media (max-width:414px){padding:calc(2.5rem + 60px) 2rem 2.5rem;h5{font-size:14px;margin-top:-18px;}}']),u=s.b.div.withConfig({displayName:"blog-post-comp__DisqusWarp",componentId:"sc-1l8a55w-1"})(["margin:10vh 0px;padding:20px;background:rgb(246,246,246);"]),c=n("Zttt"),d=n("wtQ5"),p=n("ORnI"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.data,o=n.mdx,r=n.site.siteMetadata.title.siteTitle,s={url:""+t.href,identifier:o.id,title:o.frontmatter.title};return i.a.createElement(c.a,{location:t,title:r},i.a.createElement(d.a,{title:o.frontmatter.title,description:o.frontmatter.description||o.excerpt}),i.a.createElement(l,null,i.a.createElement("h1",null,o.frontmatter.title),i.a.createElement("p",{className:"post-content-date"},o.frontmatter.date),i.a.createElement(a.MDXRenderer,null,o.body),i.a.createElement(u,null,i.a.createElement(p.Disqus,{config:s})," ")))},t}(i.a.Component);t.default=f}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-d51e4a24d3b4d5e396ab.js.map