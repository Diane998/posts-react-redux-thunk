(this["webpackJsonpposts-react-redux-thunk"]=this["webpackJsonpposts-react-redux-thunk"]||[]).push([[0],{61:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),s=n(6),a=n.n(s),u=n(5),i=n(3),o=n(26),d=n(7),p=n(8),l=n(10),j=n(9),h=n(4),f=n.n(h),b=n(11),O=n(27),v=n.n(O).a.create({baseURL:"http://jsonplaceholder.typicode.com/"}),x=n(28),m=n.n(x),y=function(){return function(){var e=Object(b.a)(f.a.mark((function e(t,n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/posts");case 2:r=e.sent,t({type:"FETCH_POSTS",payload:r.data});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(b.a)(f.a.mark((function t(n){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.get("/users/".concat(e));case 2:r=t.sent,n({type:"FETCH_USER",payload:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.user;return e?Object(r.jsx)("div",{className:"header",children:e.name}):null}}]),n}(c.Component),g=Object(u.b)((function(e,t){return{user:e.users.find((function(e){return e.id===t.userId}))}}))(w),E=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPostsAndUsers()}},{key:"renderList",value:function(){return this.props.posts.map((function(e){return Object(r.jsxs)("div",{className:"item",children:[Object(r.jsx)("i",{className:"large middle aligned icon user"}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsxs)("div",{className:"description",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsx)("p",{children:e.body})]}),Object(r.jsx)(g,{userId:e.userId})]})]},e.id)}))}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"ui relaxed divided list",children:this.renderList()})}}]),n}(c.Component),N=Object(u.b)((function(e){return{posts:e.posts}}),{fetchPostsAndUsers:function(){return function(){var e=Object(b.a)(f.a.mark((function e(t,n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(y());case 2:m.a.chain(n().posts).map("userId").uniq().forEach((function(e){return t(k(e))})).value();case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}})(E),S=function(){return Object(r.jsx)("div",{className:"ui container",children:Object(r.jsx)(N,{})})},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return t.payload;default:return e}},T=n(29),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return[].concat(Object(T.a)(e),[t.payload]);default:return e}},F=Object(i.c)({posts:C,users:U});a.a.render(Object(r.jsx)(u.a,{store:Object(i.d)(F,Object(i.a)(o.a)),children:Object(r.jsx)(S,{})}),document.querySelector("#root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.2d16747f.chunk.js.map