(window.webpackJsonpyandex_js_course=window.webpackJsonpyandex_js_course||[]).push([[0],{48:function(e,n,t){e.exports=t.p+"static/media/users.8e429045.yaml"},49:function(e,n,t){e.exports=t.p+"static/media/tasks.4906365e.yaml"},55:function(e,n,t){e.exports=t(91)},60:function(e,n,t){},65:function(e,n,t){},91:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(26),s=t.n(c),u=(t(60),t(29)),o=(t(65),t(16)),l=t(44),i=t(10),m="LOAD_USERS",f="LOAD_TASKS",p="LOAD_USER_TASKS",d={users:new i.Map};var h={weeks:new i.List};var E=Object(o.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m:var t=new i.Map(n.payload.map(function(e){return[e,null]}));return Object.assign({},e,{users:t});case p:var a=e.users.set(n.payload.username,n.payload.tasks);return Object.assign({},e,{users:a});default:return e}},tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case f:var t=n.payload.map(function(e,n){return{name:"Week ".concat(n+1),tasks:e}});return Object.assign({},e,{weeks:new i.List(t)});default:return e}}}),w=function(){return Object(o.e)(E,Object(o.d)(Object(o.a)(l.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()))},k=t(107),v=t(114),y=t(115),O=t(45),b=t(20),g=t(46),_=t(47),j=t(50),S=t(27),x=t.n(S),N=t(48),L=t.n(N),T=function(){return function(e){fetch(L.a).then(function(e){return e.text()}).then(function(n){var t=x.a.safeLoad(n);return e({type:m,payload:t}),t}).then(function(n){return n.forEach(function(n){return function(e,n){fetch("users/".concat(e,"/code-challenges/completed?access_key=m2cqV5zGM8vvxkBvWznq")).then(function(e){return e.json()}).then(function(t){return n({type:p,payload:{username:e,tasks:t.data}})})}(n,e)})})}},D=t(49),A=t.n(D),U=function(){return function(e){fetch(A.a).then(function(e){return e.text()}).then(function(n){return e({type:f,payload:x.a.safeLoad(n)})})}},W=t(31),X=(t(42),t(111)),R=t(113),q=t(109),B=t(112),I=t(108),J=t(110),M=Object(k.a)(function(){return{cell:{padding:"15px",textAlign:"center"}}}),V=function(e){var n=e.username,t=e.results,a=M();return r.a.createElement(I.a,null,r.a.createElement(q.a,{component:"th",scope:"row"},n),t.map(function(e){return r.a.createElement(q.a,{className:a.cell,key:e.taskName},e.result?"+":null)}))},z=Object(k.a)(function(e){return{root:{width:"100%",marginTop:e.spacing(3),overflowX:"auto"},table:{minWidth:650},cell:{border:"1px solid black",padding:"15px"}}}),K=function(e){var n=e.users,t=e.weeks,a=z(),c=t.reduce(function(e,n){return e.push.apply(e,Object(W.a)(n.tasks))},new i.List),s=n.keySeq().toList().map(function(e){var t=n.get(e)||new i.List;return{username:e,results:c.map(function(e){return{taskName:e,result:t.find(function(n){return n.name===e})}})}});return r.a.createElement(J.a,{className:a.root},r.a.createElement(X.a,{className:a.table},r.a.createElement(B.a,null,r.a.createElement(I.a,null,r.a.createElement(q.a,null),t.map(function(e){return r.a.createElement(q.a,{className:a.cell,key:e.name,colSpan:e.tasks.length,align:"center"},e.name)})),r.a.createElement(I.a,null,r.a.createElement(q.a,null,"Name"),c.map(function(e){return r.a.createElement(q.a,{className:a.cell,key:e,align:"center"},e)}))),r.a.createElement(R.a,null,s.map(function(e){var n=e.username,t=e.results;return r.a.createElement(V,{key:n,username:n,results:t})}))))},C=function(e){function n(e){var t;return Object(O.a)(this,n),t=Object(g.a)(this,Object(_.a)(n).call(this,e)),e.actions.loadUsers(),e.actions.loadTasks(),t}return Object(j.a)(n,e),Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement(K,this.props)}}]),n}(a.PureComponent);var G=Object(u.b)(function(e){return{users:e.users.users,weeks:e.tasks.weeks}},function(e){return{actions:{loadUsers:function(){return e(T())},loadTasks:function(){return e(U())}}}})(C),P=Object(k.a)(function(e){return{title:{marginTop:e.spacing(3)}}});function Y(){var e=P();return r.a.createElement(v.a,null,r.a.createElement(y.a,{className:e.title,variant:"h3",paragraph:!0},"Yandex JS course 2019"),r.a.createElement(G,null))}var $=w(),F=function(){return r.a.createElement(u.a,{store:$},r.a.createElement(Y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[55,1,2]]]);
//# sourceMappingURL=main.b3cf4c05.chunk.js.map