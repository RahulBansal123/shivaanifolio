(this.webpackJsonpshivaanifolio=this.webpackJsonpshivaanifolio||[]).push([[3],{88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(1),o=n(8),c=(n(88),function(){var e=Object(a.useState)("header"),t=Object(o.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){return window.addEventListener("scroll",s),function(){return window.removeEventListener("scroll",s)}}),[]);var s=function(){return window.scrollY>0?c("header_scroll"):c("header")};return Object(i.jsxs)("div",{className:n,children:[Object(i.jsx)("h2",{className:"header__logo",children:Object(i.jsx)("a",{href:"/shivaanifolio",children:"Shivaani Folio Blogs"})}),Object(i.jsx)("div",{className:"header__navbar",children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("a",{href:"/shivaanifolio",children:Object(i.jsx)("li",{className:"header__navitems",children:"Home"})}),Object(i.jsx)("a",{href:"/shivaanifolio/#/contact",children:Object(i.jsx)("li",{className:"header__navitems",children:"Contact"})})]})})]})}),s=n(17),r=(n(89),n(20)),l=(n(90),n(18)),d=function(e){var t=e.id,n=e.img,a=e.type,o=e.head,c=e.content,s=e.date,d=function(){return window.location="/blogs/".concat(t),!1};return Object(i.jsxs)("div",{className:"BlogContentBottom",children:[Object(i.jsx)("div",{className:"BlogContentBottom_right",children:Object(i.jsx)("img",{src:n,alt:o,onClick:d,onError:function(e){e.target.onerror=null,e.target.src=l.a}})}),Object(i.jsx)("div",{className:"BlogContentBottom_left",onClick:d,children:Object(i.jsx)(r.a,{type:a,head:o,content:c,date:s})})]})},j=n(14),g=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){console.log("asas","https://shivaanifolio.herokuapp.com/"),j.get("".concat("https://shivaanifolio.herokuapp.com/","blogs/blog")).then((function(e){c(e.data.blogs)})).catch()}),[]);return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"BlogPage",children:Object(i.jsxs)("div",{className:"Blogs__Trending",children:[Object(i.jsxs)("div",{className:"Blogs__Trending_top",children:[Object(i.jsx)("div",{className:"Blogs__Trending_top_one",children:n?Object(i.jsx)("img",{src:n[0].image,onError:function(e){e.target.onerror=null,e.target.src=l.a},alt:n[0].title,onClick:function(){return e=n[0]._id,window.location="/blogs/".concat(e),!1;var e}}):null}),Object(i.jsx)("div",{className:"Blogs__Trending_top_two",children:n?Object(i.jsx)(r.a,{type:n[0].category,head:n[0].title,content:n[0].desc,id:n[0]._id,date:n[0].time}):null})]}),Object(i.jsx)("div",{className:"Blogs__Trending_bottom",children:n?n.slice(1).map((function(e){return Object(i.jsx)(d,{id:e._id,type:e.category,head:e.title,content:e.desc,img:e.image,date:e.time},e._id)})):null})]})})})},b=n(11);t.default=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(s.a,{children:[Object(i.jsx)("title",{children:"Shivani Folio - Digital Marketing Blogs | Social Media Blogs & Tutorials"}),Object(i.jsx)("meta",{name:"description",content:"Learn about Digital Marketing , Social Media Marketing , Marketing hacks , Website development and case studies on various brands."}),Object(i.jsx)("meta",{property:"og:type",content:"blog"}),Object(i.jsx)("meta",{property:"og:title",content:"Shivani Folio - Digital Marketing Blogs | Social Media Blogs & Tutorials"}),Object(i.jsx)("meta",{property:"og:description",content:"Learn about Digital Marketing , Social Media Marketing , Marketing hacks , Website development and case studies on various brands."}),Object(i.jsx)("meta",{property:"og:site_name",content:"ShivaaiBansal.in"}),Object(i.jsx)("meta",{property:"og:image",content:b.a}),Object(i.jsx)("meta",{property:"og:image:width",content:"1080"}),Object(i.jsx)("meta",{property:"og:image:height",content:"1080"}),Object(i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(i.jsx)("meta",{name:"twitter:description",content:"Learn about Digital Marketing , Social Media Marketing , Marketing hacks , Website development and case studies on various brands."}),Object(i.jsx)("meta",{name:"twitter:title",content:"Shivani Folio - Digital Marketing Blogs | Social Media Blogs & Tutorials"})]}),Object(i.jsx)(c,{}),Object(i.jsx)("div",{style:{marginTop:"120px"},children:Object(i.jsx)(g,{})})]})}}}]);