(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),c=a(10),s=a(2),o=a(4),l=a(1),d=(a(15),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]);function u(e){return d.find((function(t){return t.id===e}))||null}var m=a(9),j=a.n(m),b=a(0),h=function(e){var t=e.user,a=t.email,n=t.name;return Object(b.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},O=function(e){var t=e.todo,a=t.id,n=t.completed,i=t.title,r=t.user;return Object(b.jsxs)("article",{"data-id":a,className:j()("TodoInfo",{"TodoInfo--completed":n}),children:[Object(b.jsx)("h2",{className:"TodoInfo__title",children:i}),r&&Object(b.jsx)(h,{user:r})]})},f=function(e){var t=e.todos;return Object(b.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(b.jsx)(O,{todo:e},e.id)}))})};function p(e){return Math.max.apply(Math,Object(r.a)(e.map((function(e){return e.id}))))+1}var x=function(e){var t=e.onSubmit,a=e.todos,n=Object(l.useState)(""),i=Object(s.a)(n,2),r=i[0],c=i[1],o=Object(l.useState)(!1),m=Object(s.a)(o,2),j=m[0],h=m[1],O=Object(l.useState)(0),f=Object(s.a)(O,2),x=f[0],v=f[1],S=Object(l.useState)(!1),y=Object(s.a)(S,2),I=y[0],N=y[1];return Object(b.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault(),h(!r.trim()),N(!x),r.trim()&&x&&(t({id:p(a),title:r,userId:x,completed:!1,user:u(x)}),c(""),v(0))},children:[Object(b.jsx)("label",{htmlFor:"titleInput",children:Object(b.jsxs)("div",{className:"field",children:["Title:\xa0",Object(b.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:r,onChange:function(e){c(e.target.value),h(!1)}}),j&&Object(b.jsx)("span",{className:"error",children:"Please enter a title"})]})}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsxs)("label",{htmlFor:"userSelect",children:["User:\xa0",Object(b.jsxs)("select",{"data-cy":"userSelect",value:x,required:!0,onChange:function(e){v(+e.target.value),N(!1)},children:[Object(b.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),d.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),I&&Object(b.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(b.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})},v=["id"],S=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(o.a)(Object(o.a)({},e),{},{user:u(e.userId)})})),y=function(){var e=Object(l.useState)(S),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Add todo form"}),Object(b.jsx)(x,{onSubmit:function(e){e.id;var t=Object(c.a)(e,v),i=Object(o.a)(Object(o.a)({},t),{},{id:p(a)});n((function(e){return[].concat(Object(r.a)(e),[i])}))},todos:[]}),Object(b.jsx)(f,{todos:a})]})};i.a.render(Object(b.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.cc977dfe.chunk.js.map