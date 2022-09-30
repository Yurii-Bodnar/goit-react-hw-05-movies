"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[143],{2143:function(e,n,t){t.r(n),t.d(n,{default:function(){return U}});var r,a,o,i,s,u,c,p,l=t(885),h=t(2791),f=t(6731),d=t(168),x=t(7691),g=x.ZP.div(r||(r=(0,d.Z)(["\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n"]))),v=x.ZP.input(a||(a=(0,d.Z)(["\n    width: 380px;\n    height: 45px;\n   \n    border-radius: 5px;\n    margin-right: 10px;\n    transition: 1s;\n    font-size: 28px;\n    border: none;\n    border-bottom: 1px solid black;\n    background: inherit;\n    box-shadow: 2px 2px 4px;\n\n&:hover,\n&:focus{\n    outline: 2px solid orange;\n}    \n"]))),m=(x.ZP.div(o||(o=(0,d.Z)([""]))),x.ZP.button(i||(i=(0,d.Z)(["\nborder: 1px solid black;\n    width: 70px;\n    height: 44px;\n    color: #ffae06;\n    background-color: inherit;\n    border-radius: 10px;\n    background-image: url(/srs/images/search-svgrepo-com.svg);\n    font-size: 17px;\n    font-weight: bold;\n    text-align: center;\n    box-shadow: 1px 1px 12px;\n\n"])))),b=t(184),w=function(e){var n=e.setSearch,t=(0,h.useState)(""),r=(0,l.Z)(t,2),a=r[0],o=r[1];return(0,b.jsx)("form",{onSubmit:function(e){e.preventDefault(),""!==a.trim()?n({query:a,page:1}):alert("Please fill in the search field")},children:(0,b.jsxs)(g,{children:[(0,b.jsx)(v,{type:"text",name:"searchInput",value:a,onChange:function(e){o(e.target.value)}}),(0,b.jsx)(m,{type:"submit",children:"Search"})]})})},Z=t(6457),y=t(7689),k=x.ZP.ul(s||(s=(0,d.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 300px);\n  gap: 20px;\n  margin: 0 auto;\n  justify-content: center;\n  margin-top: 16px;\n"]))),j=x.ZP.li(u||(u=(0,d.Z)(["\n  text-align: center;\n  border-radius: 5px;\n"]))),_=x.ZP.img(c||(c=(0,d.Z)(["\n  border-radius: 5px;\n  box-shadow: 0 0 19px;\n  height: 425px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: pointer;\n  }\n"]))),S=(0,x.ZP)(f.OL)(p||(p=(0,d.Z)(["\n  text-decoration: none;\n  font-size: 17px;\n  font-weight: bolder;\n"]))),P=function(e){var n=e.movies,t=(0,y.TH)();return(0,b.jsx)(k,{children:n.map((function(e){var n=e.id,r=e.poster_path,a=e.title,o=e.original_title,i=e.release_date,s=e.vote_average;return(0,b.jsx)(j,{children:(0,b.jsxs)(S,{to:"/movies/".concat(n),state:t,children:[(0,b.jsx)(_,{src:"https://image.tmdb.org/t/p/w300/".concat(r),alt:o}),(0,b.jsx)("p",{children:a}),(0,b.jsx)("p",{children:i}),(0,b.jsx)("p",{children:s.toFixed(1)})]})},n)}))})},q=t(63),z=t(7505),C=function(e){var n=e.page,t=e.setSearch,r=e.totalPages,a=e.query;return(0,b.jsx)(z.Z,{spacing:2,children:(0,b.jsx)(q.Z,{count:r,shape:"rounded",page:Number(n),onChange:function(e,n){t({query:a,page:n})},sx:{display:"flex",justifyContent:"center",marginBottom:"10px",marginTop:"10px"},size:"large"})})},U=function(){var e=(0,f.lr)(),n=(0,l.Z)(e,2),t=n[0],r=n[1],a=(0,h.useState)([]),o=(0,l.Z)(a,2),i=o[0],s=o[1],u=(0,h.useState)(1),c=(0,l.Z)(u,2),p=c[0],d=c[1],x=t.get("query"),g=t.get("page");return(0,h.useEffect)((function(){x&&(0,Z.JR)(x,g).then((function(e){var n=e.results,t=e.total_pages;s(n),d(t)}))}),[x,g]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(w,{setSearch:r}),(0,b.jsx)(P,{movies:i}),x?(0,b.jsx)(C,{page:g,setSearch:r,totalPages:p,query:x}):null]})}},6457:function(e,n,t){t.d(n,{JR:function(){return c},ed:function(){return l},jk:function(){return h},tW:function(){return p},vH:function(){return f}});var r=t(5861),a=t(4687),o=t.n(a),i=t(4569),s=t.n(i),u="96f98372ec97554f75b9ec4b9ecd00d9";s().defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var e=(0,r.Z)(o().mark((function e(n,t){var r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/search/movie/",{params:{query:n,page:t,api_key:u}});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/trending/movie/week",{params:{api_key:u,page:1}});case 3:return n=e.sent,t=n.data,e.abrupt("return",t);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("movie/".concat(n),{params:{api_key:u,language:"en-US"}});case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("movie/".concat(n,"/credits"),{params:{api_key:u,language:"en-US"}});case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/movie/".concat(n,"/reviews"),{params:{api_key:u,language:"en-US",page:1}});case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=143.8d266e3a.chunk.js.map