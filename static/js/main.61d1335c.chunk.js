(window.webpackJsonpyandex_js_course=window.webpackJsonpyandex_js_course||[]).push([[0],{47:function(e,n,t){e.exports=t.p+"static/media/users.8e429045.yaml"},48:function(e,n,t){e.exports=t.p+"static/media/tasks.4c01695d.yaml"},54:function(e,n,t){e.exports=t(90)},59:function(e,n,t){},64:function(e,n,t){},90:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(26),o=t.n(c),s=(t(59),t(29)),u=(t(64),t(16)),l=t(43),i=t(10),m="LOAD_USERS",f="LOAD_TASKS",d="LOAD_USER_TASKS",p={users:new i.Map};var k={weeks:new i.List};var w=Object(u.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m:var t=new i.Map(n.payload.map(function(e){return[e,null]}));return Object.assign({},e,{users:t});case d:var a=e.users.set(n.payload.username,n.payload.tasks);return Object.assign({},e,{users:a});default:return e}},tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case f:var t=n.payload.map(function(e,n){return{name:"Week ".concat(n+1),tasks:e,index:n}});return Object.assign({},e,{weeks:new i.List(t)});default:return e}}}),h=function(){return Object(u.e)(w,Object(u.d)(Object(u.a)(l.a)))},v=t(106),y=t(113),g=t(114),E=t(44),b=t(20),x=t(45),j=t(46),O=t(49),S=t(27),N=t.n(S),L=t(47),_=t.n(L),A=function(){return function(e){fetch(_.a).then(function(e){return e.text()}).then(function(n){var t=N.a.safeLoad(n);return e({type:m,payload:t}),t}).then(function(n){return n.forEach(function(n){return function(e,n){fetch("https://j3300l2mej.execute-api.eu-west-1.amazonaws.com/dev/".concat(e)).then(function(e){return e.json()}).then(function(t){return n({type:d,payload:{username:e,tasks:t.data}})})}(n,e)})})}},I=t(48),T=t.n(I),W=function(){return function(e){fetch(T.a).then(function(e){return e.text()}).then(function(n){return e({type:f,payload:N.a.safeLoad(n)})})}},U=(t(41),t(110)),z=t(112),C=t(108),D=t(111),J=t(107),B=t(109),K=Object(v.a)(function(){return{cell:{padding:"15px",textAlign:"center"},grey:{backgroundColor:"#f5f5f5"}}}),M=function(e){var n=e.username,t=e.results,a=e.weekStyle,c=K();return r.a.createElement(J.a,null,r.a.createElement(C.a,{component:"th",scope:"row"},n),r.a.createElement(C.a,{component:"th",scope:"row"},"".concat(t.filter(function(e){return e.result}).size,"/").concat(t.size)),t.map(function(e){return r.a.createElement(C.a,{className:"".concat(c.cell," ").concat(a(e.weekIndex)),key:e.taskName},e.result?"+":null)}))},R=Object(v.a)(function(e){return{root:{width:"100%",marginTop:e.spacing(3),overflowX:"auto"},table:{minWidth:650},cell:{border:"1px solid black",padding:"5px"},grey:{backgroundColor:"#f5f5f5"}}}),q=function(e,n){return n%2===0?e.grey:null},P=function(e){var n=e.users,t=e.weeks,a=R(),c=t.reduce(function(e,n){var t=n.tasks.map(function(e){return{name:e,weekIndex:n.index}});return e.concat(t)},new i.List),o=n.keySeq().toList().map(function(e){var t=n.get(e)||new i.List;return{username:e,results:c.map(function(e){return{taskName:e.name,weekIndex:e.weekIndex,result:t.find(function(n){return n.name===e.name})}})}});return r.a.createElement(B.a,{className:a.root},r.a.createElement(U.a,{className:a.table},r.a.createElement(D.a,null,r.a.createElement(J.a,null,r.a.createElement(C.a,{className:a.cell,colSpan:2}),t.map(function(e){return r.a.createElement(C.a,{className:"".concat(a.cell," ").concat(q(a,e.index)),key:e.name,colSpan:e.tasks.length,align:"center"},e.name)})),r.a.createElement(J.a,null,r.a.createElement(C.a,{className:a.cell},"Name"),r.a.createElement(C.a,{className:a.cell},"Sum"),c.map(function(e){return r.a.createElement(C.a,{className:"".concat(a.cell," ").concat(q(a,e.weekIndex)),key:e.name,align:"center"},e.name)}))),r.a.createElement(z.a,null,o.map(function(e){var n=e.username,t=e.results;return r.a.createElement(M,{key:n,username:n,results:t,weekStyle:function(e){return q(a,e)}})}))))},X=function(e){function n(e){var t;return Object(E.a)(this,n),t=Object(x.a)(this,Object(j.a)(n).call(this,e)),e.actions.loadUsers(),e.actions.loadTasks(),t}return Object(O.a)(n,e),Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement(P,this.props)}}]),n}(a.PureComponent);var Y=Object(s.b)(function(e){return{users:e.users.users,weeks:e.tasks.weeks}},function(e){return{actions:{loadUsers:function(){return e(A())},loadTasks:function(){return e(W())}}}})(X),$=Object(v.a)(function(e){return{title:{marginTop:e.spacing(3)}}});function F(){var e=$();return r.a.createElement(y.a,{maxWidth:"xl"},r.a.createElement(g.a,{className:e.title,variant:"h3",paragraph:!0},"Yandex JS course 2019"),r.a.createElement(Y,null))}var G=h(),H=function(){return r.a.createElement(s.a,{store:G},r.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[54,1,2]]]);
//# sourceMappingURL=main.61d1335c.chunk.js.map