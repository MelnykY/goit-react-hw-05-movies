"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[137],{6657:function(n,t,r){r.d(t,{Hg:function(){return s},TP:function(){return p},V0:function(){return f},tx:function(){return h},zv:function(){return l}});var e=r(5861),a=r(7757),c=r.n(a),u=r(1243),i="bad873a72299f6199f58673bb9d2d11e",o="https://api.themoviedb.org/3/",s=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"trending/movie/day?api_key=").concat(i),{signal:t.signal});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t,r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(r),{signal:t.signal});case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t,r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(r,"?api_key=").concat(i),{signal:t.signal});case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(t,r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(r,"/credits?api_key=").concat(i),{signal:t.signal});case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(c().mark((function n(t,r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(r,"/reviews?api_key=").concat(i),{signal:t.signal});case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}()},4e3:function(n,t,r){r.d(t,{Z:function(){return l}});var e,a,c=r(1087),u=r(7689),i=r(168),o=r(6444),s=o.ZP.ul(e||(e=(0,i.Z)(["\nmargin-left: 20px;"]))),f=o.ZP.li(a||(a=(0,i.Z)([""]))),p=r(184),l=function(n){var t=n.listMovies,r=(0,u.TH)();return(0,p.jsx)(s,{children:t.map((function(n){var t=n.id,e=n.title,a=n.name;return(0,p.jsx)(f,{children:(0,p.jsx)(c.rU,{to:"/movies/".concat(t),state:{from:r},children:null!==e&&void 0!==e?e:a})},t)}))})}},1137:function(n,t,r){r.r(t),r.d(t,{default:function(){return b}});var e,a,c,u=r(9439),i=r(2791),o=r(1087),s=r(6657),f=r(1413),p=r(887),l=r(168),h=r(6444),v=h.ZP.form(e||(e=(0,l.Z)([""]))),d=h.ZP.input(a||(a=(0,l.Z)(["\n  width: 300px;\n  height: 25px;\n\n  &:hover {\n    border-color: blue;\n  }\n"]))),m=h.ZP.button(c||(c=(0,l.Z)(["\n  height: 25px;\n"]))),Z=r(184),g=function(n){var t=n.handleSub,r=(0,p.cI)(),e=r.register,a=r.handleSubmit,c=r.reset;return(0,Z.jsxs)(v,{onSubmit:a((function(n){var r=n.name;r.trim()&&(t(r),c())})),children:[(0,Z.jsx)(d,(0,f.Z)({defaultValue:""},e("name"))),(0,Z.jsx)(m,{type:"submit",children:"Search"})]})},x=r(4e3),b=function(){var n=(0,i.useState)([]),t=(0,u.Z)(n,2),r=t[0],e=t[1],a=(0,o.lr)(),c=(0,u.Z)(a,2),f=c[0],p=c[1],l=f.get("searchQuery");(0,i.useEffect)((function(){if(l){var n=new AbortController;return(0,s.V0)(n,l).then((function(n){e(n.data.results)})).catch((function(n){return n})),function(){n.abort()}}}),[l]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(g,{handleSub:function(n){p({searchQuery:n})}}),r&&(0,Z.jsx)(x.Z,{listMovies:r})]})}}}]);
//# sourceMappingURL=137.f0d66e3e.chunk.js.map