(this.webpackJsonpusof=this.webpackJsonpusof||[]).push([[0],{25:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),a=c.n(n),i=c(26),r=c.n(i),o=(c(33),c(2)),j=c.p+"static/media/logo.0123b8df.png",l=(c(34),c(3)),u=c(5),d=c.n(u);var b=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!0),r=Object(o.a)(i,2),d=r[0],b=(r[1],Object(n.useState)("")),O=Object(o.a)(b,2),g=O[0],m=O[1],x=Object(n.useState)(""),A=Object(o.a)(x,2),h=A[0],f=A[1],v=function(){console.log("Log in"),window.SE.authenticate({success:function(e){console.log("I got access");var t=encodeURIComponent(e.accessToken);m(t),u.get("https://api.stackexchange.com/2.2/me?site=stackoverflow&key=".concat("qBt3pH)yY2*kx96ogUORkA((","&access_token=").concat(t)).then((function(e){f(e.data.items[0]),a(!1)}),(function(e){console.log(e)}))},error:function(){alert("\u042f \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u0434\u043e\u0441\u0442\u0443\u043f :(")}})},p=function(){u.get("https://api.stackexchange.com/2.2/apps/".concat(g,"/de-authenticate?key=").concat("qBt3pH)yY2*kx96ogUORkA((")).then((function(){a(!0)}),(function(e){console.log(e)})),console.log("log out")};return Object(s.jsxs)("header",{children:[Object(s.jsx)(l.b,{to:"/",children:Object(s.jsx)("img",{src:j,className:"logo",alt:"logo"})}),Object(s.jsx)("input",{type:"search",placeholder:"Search..."}),Object(s.jsxs)("nav",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/",children:"Main"})}),Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/users",children:"Users"})}),Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/tags",children:"Tags"})})]}),!0===c?Object(s.jsx)("button",{id:"log",disabled:d,onClick:v,children:"Log in"}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"profile",children:[Object(s.jsx)(l.b,{to:"/users/".concat(h.user_id),children:Object(s.jsx)("img",{id:"userImg",alt:"profilPhoto",src:h.profile_image})}),Object(s.jsx)("span",{id:"userLogin",children:h.display_name}),Object(s.jsxs)("span",{id:"userReputation",children:[Object(s.jsx)("b",{children:"Reputation:"})," ",h.reputation]})]}),Object(s.jsx)("button",{id:"log",onClick:p,children:"Log out"})]})]})};var O=function(e){return Object(s.jsxs)("div",{className:"answers"===e.value&&e.score>0?"statistic answered":"statistic",id:e.answered?"checkAnswer":null,children:[e.score,Object(s.jsx)("p",{children:e.value})]})};var g=function(e){var t=(e=new Date(e)).getDate(),c=e.getMonth()+1,s=e.getFullYear(),n=e.getHours(),a=e.getMinutes();return c<10&&(c="0".concat(c)),t<10&&(t="0".concat(t)),a<10&&(a="0".concat(a)),"".concat(t,".").concat(c,".").concat(s," at ").concat(n,":").concat(a)};var m=function(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),a=c[0],i=c[1],r=e.data;return Object(s.jsxs)("div",{className:"questionOwner",children:["asked ",g(1e3*r.creation_date),Object(s.jsx)(l.b,{to:"/users/".concat(r.owner.user_id),onMouseOver:function(){return i(!a)},onMouseOut:function(){return i(!a)},className:"userName",children:r.owner.display_name}),a?Object(s.jsx)("img",{className:"ownerimg",src:r.owner.profile_image,alt:"userimg"}):null,Object(s.jsx)("span",{children:Object(s.jsx)("b",{children:r.owner.reputation>9999?"".concat((r.owner.reputation/1e3).toFixed(1),"K"):r.owner.reputation})})]})};c(25);var x=function(){for(var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!1),r=Object(o.a)(i,2),j=r[0],d=r[1],b=Object(n.useState)([]),g=Object(o.a)(b,2),x=g[0],A=g[1],h=Object(n.useState)(""),f=Object(o.a)(h,2),v=f[0],p=f[1],N=Object(n.useState)(1),w=Object(o.a)(N,2),E=w[0],R=w[1],k=Object(n.useState)(15),C=Object(o.a)(k,2),S=C[0],I=C[1],B=[],y=1;y<=10;y++)B.push(y);return Object(n.useEffect)((function(){u.get("https://api.stackexchange.com/2.2/questions?page=".concat(E,"&pagesize=").concat(S,"&site=stackoverflow&key=").concat("qBt3pH)yY2*kx96ogUORkA((").concat(v)).then((function(e){A(e.data.items),d(!0)}),(function(e){d(!0),a(e)}))}),[v,E,S]),Object(n.useEffect)((function(){R(1)}),[v,S]),c?Object(s.jsx)("h1",{children:"Something went wrong..."}):j?Object(s.jsx)("div",{className:"mainContainer",children:Object(s.jsxs)("div",{className:"questionDiv",children:[Object(s.jsx)("h1",{children:"Top Questions"}),Object(s.jsxs)("div",{className:"originalFilter",children:[Object(s.jsx)("div",{onClick:function(){return p("&order=desc&sort=creation")},children:"Newest"}),Object(s.jsx)("div",{onClick:function(){return p("&order=desc&sort=activity")},children:"Active"}),Object(s.jsx)("div",{onClick:function(){return p("&order=desc&sort=votes")},children:"Votes"})]}),x.map((function(e){return Object(s.jsxs)("div",{className:"question",children:[Object(s.jsx)(l.b,{to:"/questions/".concat(e.question_id),className:"title",children:e.title}),Object(s.jsxs)("div",{className:"allStats",children:[Object(s.jsx)(O,{score:e.score,value:"votes"}),Object(s.jsx)(O,{score:e.answer_count,answered:e.is_answered,value:"answers"}),Object(s.jsx)(O,{score:e.view_count,value:"views"})]}),Object(s.jsxs)("div",{className:"tagsAndOwner",children:[e.tags.map((function(e,t){return Object(s.jsx)(l.b,{to:"/tags/".concat(e),className:"tagItem",children:e},t)})),Object(s.jsx)(m,{data:e})]})]},e.question_id)})),Object(s.jsxs)("div",{className:"paginPageSize",children:[Object(s.jsxs)("div",{className:"pagination",children:[E>1&&Object(s.jsx)("span",{onClick:function(){return R(E-1)},children:"Prev"}),B.map((function(e){return Object(s.jsx)("span",{className:e===E?"activePage":null,onClick:function(){return R(e)},children:e},e)})),E<10&&Object(s.jsx)("span",{onClick:function(){return R(E+1)},children:"Next"})]}),Object(s.jsxs)("div",{className:"pageSize",children:[[15,30,50].map((function(e){return Object(s.jsx)("span",{className:e===S?"activePage":null,onClick:function(){return I(e)},children:e},e)})),Object(s.jsx)("span",{id:"per",children:"per page"})]})]})]})}):Object(s.jsx)("h1",{children:"Please, wait..."})};c(61);var A=function(e){var t=e.user.about_me,c=e.user.badge_counts;return Object(s.jsxs)("div",{className:"priviewUser",children:[Object(s.jsx)("p",{children:e.user.display_name}),Object(s.jsxs)("div",{className:"badgesContainer",children:[Object(s.jsxs)("div",{className:"badgesItem",children:[Object(s.jsx)("div",{className:"badge",id:"gold"}),c.gold]}),Object(s.jsxs)("div",{className:"badgesItem",children:[Object(s.jsx)("div",{className:"badge",id:"silver"}),c.silver]}),Object(s.jsxs)("div",{className:"badgesItem",children:[Object(s.jsx)("div",{className:"badge",id:"bronze"}),c.bronze]})]}),Object(s.jsx)("div",{className:"aboutMe",children:Object(s.jsx)("span",{dangerouslySetInnerHTML:{__html:t}})})]})};var h=function(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),a=c[0],i=c[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("img",{src:e.user.profile_image,className:"usersimgs",alt:"imgUser",onMouseOver:function(){return i(!a)},onMouseOut:function(){return i(!a)}}),a?Object(s.jsx)(A,{user:e.user}):null]})};var f=function(e){var t=Object(n.useState)(null),c=Object(o.a)(t,2),a=c[0],i=c[1],r=Object(n.useState)(!1),j=Object(o.a)(r,2),d=j[0],b=j[1],O=Object(n.useState)([]),g=Object(o.a)(O,2),m=g[0],x=g[1];return Object(n.useEffect)((function(){u.get("https://api.stackexchange.com/2.2/users/".concat(e.id,"/top-tags?site=stackoverflow&key=").concat("qBt3pH)yY2*kx96ogUORkA((")).then((function(e){x(e.data.items),b(!0)}),(function(e){b(!0),i(e),console.log(e)}))}),[]),a?Object(s.jsx)("span",{children:"Something went wrong..."}):d?Object(s.jsx)(s.Fragment,{children:m.slice(0,3).map((function(e,t){return Object(s.jsx)(l.b,{to:"/tags/".concat(e.tag_name),className:"tags",children:e.tag_name},t)}))}):Object(s.jsx)("span",{children:"Please, wait..."})};var v=function(){for(var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!1),r=Object(o.a)(i,2),j=r[0],d=r[1],b=Object(n.useState)([]),O=Object(o.a)(b,2),g=O[0],m=O[1],x=Object(n.useState)(""),A=Object(o.a)(x,2),v=A[0],p=A[1],N=Object(n.useState)(1),w=Object(o.a)(N,2),E=w[0],R=w[1],k=[],C=1;C<=10;C++)k.push(C);return Object(n.useEffect)((function(){u.get("https://api.stackexchange.com/2.2/users?page=".concat(E,"&pagesize=36&site=stackoverflow&filter=!0Z-LvgkIiS)pY6ZMtsOr_tRsP&key=").concat("qBt3pH)yY2*kx96ogUORkA((").concat(v)).then((function(e){m(e.data.items),d(!0)}),(function(e){d(!0),a(e),console.log(e)}))}),[v,E]),Object(n.useEffect)((function(){R(1)}),[v]),c?Object(s.jsx)("h1",{children:"Something went wrong..."}):j?Object(s.jsx)("div",{className:"mainContainer",children:Object(s.jsxs)("div",{className:"",children:[Object(s.jsx)("h1",{children:"Users"}),Object(s.jsxs)("div",{className:"originalFilter",children:[Object(s.jsx)("div",{onClick:function(){return p("&order=asc&sort=reputation")},children:"Reputation"}),Object(s.jsx)("div",{onClick:function(){return p("&order=asc&sort=creation")},children:"New users"}),Object(s.jsx)("div",{onClick:function(){return p("&order=desc&sort=name")},children:"Name"})]}),Object(s.jsxs)("div",{className:"userContainer",children:[g.map((function(e){return Object(s.jsxs)("div",{className:"userItem",children:[Object(s.jsx)(h,{user:e}),Object(s.jsx)(l.b,{to:"/users/".concat(e.user_id),className:"userName",children:e.display_name}),Object(s.jsx)("p",{className:"userLocation",children:e.location}),Object(s.jsx)("p",{className:"userRep",children:e.reputation>999?(e.reputation/1e3).toFixed(1)+"K":e.reputation}),Object(s.jsx)("div",{className:"allTags",children:Object(s.jsx)(f,{id:e.user_id})})]},e.account_id)})),Object(s.jsx)("div",{className:"paginPageSize",children:Object(s.jsxs)("div",{className:"pagination",children:[E>1&&Object(s.jsx)("span",{onClick:function(){return R(E-1)},children:"Prev"}),k.map((function(e){return Object(s.jsx)("span",{className:e===E?"activePage":null,onClick:function(){return R(e)},children:e},e)})),E<10&&Object(s.jsx)("span",{onClick:function(){return R(E+1)},children:"Next"})]})})]})]})}):Object(s.jsx)("h1",{children:"Please, wait..."})};c(62);var p=function(e){var t=Object(n.useState)(null),c=Object(o.a)(t,2),a=c[0],i=c[1],r=Object(n.useState)(!1),j=Object(o.a)(r,2),l=j[0],d=j[1],b=Object(n.useState)(),O=Object(o.a)(b,2),g=O[0],m=O[1],x=encodeURIComponent(e.name);return Object(n.useEffect)((function(){u.get("https://api.stackexchange.com/2.2/tags/".concat(x,"/wikis?&site=stackoverflow&key=").concat("qBt3pH)yY2*kx96ogUORkA((")).then((function(e){m(e.data.items[0]),d(!0)}),(function(e){d(!0),i(e),console.log(e)}))}),[]),a?Object(s.jsx)("span",{children:"Something went wrong..."}):l?g&&g.excerpt?Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"tagWiki",children:g.excerpt.length>170?g.excerpt.substring(0,170)+"...":g.excerpt})}):Object(s.jsx)("div",{className:"tagWiki",children:"no info"}):Object(s.jsx)("span",{children:"Please, wait..."})};var N=function(){for(var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!1),r=Object(o.a)(i,2),j=r[0],d=r[1],b=Object(n.useState)([]),O=Object(o.a)(b,2),g=O[0],m=O[1],x=Object(n.useState)(""),A=Object(o.a)(x,2),h=A[0],f=A[1],v=Object(n.useState)(1),N=Object(o.a)(v,2),w=N[0],E=N[1],R=Object(n.useState)(15),k=Object(o.a)(R,2),C=k[0],S=k[1],I=[],B=1;B<=10;B++)I.push(B);return Object(n.useEffect)((function(){u.get("https://api.stackexchange.com/2.2/tags?page=".concat(w,"&pagesize=").concat(C,"&site=stackoverflow&key=").concat("qBt3pH)yY2*kx96ogUORkA((").concat(h)).then((function(e){m(e.data.items),d(!0)}),(function(e){d(!0),a(e),console.log(e)}))}),[h,w,C]),Object(n.useEffect)((function(){E(1)}),[h,C]),c?Object(s.jsx)("h1",{children:"Something went wrong..."}):j?Object(s.jsx)("div",{className:"mainContainer",children:Object(s.jsxs)("div",{className:"questionDiv",children:[Object(s.jsx)("h1",{children:"Tags"}),Object(s.jsxs)("div",{className:"originalFilter",children:[Object(s.jsx)("div",{onClick:function(){return f("&order=desc&sort=popular")},children:"Popular"}),Object(s.jsx)("div",{onClick:function(){return f("&order=desc&sort=name")},children:"Name"}),Object(s.jsx)("div",{onClick:function(){return f("&order=desc&sort=activity")},children:"Activity"})]}),Object(s.jsxs)("div",{className:"tagsContainer",children:[g.map((function(e){return Object(s.jsxs)("div",{className:"tagDiv",children:[Object(s.jsx)(l.b,{to:"/tags/".concat(e.name),className:"tagItem",children:e.name}),Object(s.jsx)(p,{name:e.name}),Object(s.jsxs)("div",{className:"tagCount",children:[e.count," questions"]})]},e.name)})),Object(s.jsxs)("div",{className:"paginPageSize",children:[Object(s.jsxs)("div",{className:"pagination",children:[w>1&&Object(s.jsx)("span",{onClick:function(){return E(w-1)},children:"Prev"}),I.map((function(e){return Object(s.jsx)("span",{className:e===w?"activePage":null,onClick:function(){return E(e)},children:e},e)})),w<10&&Object(s.jsx)("span",{onClick:function(){return E(w+1)},children:"Next"})]}),Object(s.jsxs)("div",{className:"pageSize",children:[[15,30,50].map((function(e){return Object(s.jsx)("span",{className:e===C?"activePage":null,onClick:function(){return S(e)},children:e},e)})),Object(s.jsx)("span",{id:"per",children:"per page"})]})]})]})]})}):Object(s.jsx)("h1",{children:"Please, wait..."})};c(63);var w=function(){return Object(s.jsx)("footer",{children:Object(s.jsx)("img",{src:j,className:"logo",alt:"logo"})})},E=c(4);var R=function(){var e=Object(E.e)().userID,t=Object(n.useState)(null),c=Object(o.a)(t,2),a=c[0],i=c[1],r=Object(n.useState)(!1),j=Object(o.a)(r,2),l=j[0],u=j[1],b=Object(n.useState)([]),O=Object(o.a)(b,2),g=O[0],m=O[1];return Object(n.useEffect)((function(){d.a.get("https://api.stackexchange.com/2.2/users/".concat(e,"?&site=stackoverflow&filter=!--1nZuvlSU9X&key=").concat("qBt3pH)yY2*kx96ogUORkA((")).then((function(e){m(e.data.items[0]),u(!0)}),(function(e){u(!0),i(e),console.log(e)}))}),[]),a?Object(s.jsx)("h1",{children:"Something went wrong..."}):l?Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"mainUser",children:[Object(s.jsx)("h1",{className:"oneUserName",children:g.display_name}),Object(s.jsxs)("div",{className:"userLocation",children:["Location: ",g.location]}),Object(s.jsxs)("div",{className:"imgAndBadges",children:[Object(s.jsx)("img",{className:"bigUserImg",src:g.profile_image,alt:"imgUser"}),Object(s.jsxs)("div",{className:"badges",children:[Object(s.jsxs)("div",{className:"badgesItem",children:[Object(s.jsx)("div",{className:"badge",id:"gold"}),g.badge_counts.gold]}),Object(s.jsxs)("div",{className:"badgesItem",children:[Object(s.jsx)("div",{className:"badge",id:"silver"}),g.badge_counts.silver]}),Object(s.jsxs)("div",{className:"badgesItem",children:[Object(s.jsx)("div",{className:"badge",id:"bronze"}),g.badge_counts.bronze]})]})]}),Object(s.jsx)("div",{dangerouslySetInnerHTML:{__html:g.about_me},className:"aboutUser"})]})}):Object(s.jsx)("h1",{children:"Please, wait..."})};var k=function(){for(var e=Object(E.e)().tagName,t=Object(n.useState)(null),c=Object(o.a)(t,2),a=c[0],i=c[1],r=Object(n.useState)(!1),j=Object(o.a)(r,2),d=j[0],b=j[1],g=Object(n.useState)([]),x=Object(o.a)(g,2),A=x[0],h=x[1],f=Object(n.useState)(""),v=Object(o.a)(f,2),p=v[0],N=v[1],w=Object(n.useState)(1),R=Object(o.a)(w,2),k=R[0],C=R[1],S=Object(n.useState)(15),I=Object(o.a)(S,2),B=I[0],y=I[1],z=[],L=1;L<=10;L++)z.push(L);return Object(n.useEffect)((function(){u.get("https://api.stackexchange.com/2.2/questions?page=".concat(k,"&pagesize=").concat(B,"&tagged=").concat(e,"&site=stackoverflow&key=").concat("qBt3pH)yY2*kx96ogUORkA((").concat(p)).then((function(e){h(e.data.items),b(!0)}),(function(e){b(!0),i(e)}))}),[p,e,k,B]),Object(n.useEffect)((function(){C(1)}),[p,B,e]),a?Object(s.jsx)("h1",{children:"Something went wrong..."}):d?Object(s.jsxs)("div",{className:"mainContainer",children:[Object(s.jsx)("div",{className:"filters"}),Object(s.jsxs)("div",{className:"questionDiv",children:[Object(s.jsxs)("h1",{children:["Questions tagged [ ",e," ]"]}),Object(s.jsxs)("div",{className:"originalFilter",children:[Object(s.jsx)("div",{onClick:function(){return N("&order=desc&sort=creation")},children:"Newest"}),Object(s.jsx)("div",{onClick:function(){return N("&order=desc&sort=activity")},children:"Active"}),Object(s.jsx)("div",{onClick:function(){return N("&order=desc&sort=votes")},children:"Votes"})]}),A.map((function(e){return Object(s.jsxs)("div",{className:"question",children:[Object(s.jsx)(l.b,{to:"/questions/".concat(e.question_id),className:"title",children:e.title}),Object(s.jsxs)("div",{className:"allStats",children:[Object(s.jsx)(O,{score:e.score,value:"votes"}),Object(s.jsx)(O,{score:e.answer_count,answered:e.is_answered,value:"answers"}),Object(s.jsx)(O,{score:e.view_count,value:"views"})]}),Object(s.jsxs)("div",{className:"tagsAndOwner",children:[e.tags.map((function(e,t){return Object(s.jsx)(l.b,{to:"/tags/".concat(e),className:"tagItem",children:e},t)})),Object(s.jsx)(m,{data:e})]})]},e.question_id)})),Object(s.jsxs)("div",{className:"paginPageSize",children:[Object(s.jsxs)("div",{className:"pagination",children:[k>1&&Object(s.jsx)("span",{onClick:function(){return C(k-1)},children:"Prev"}),z.map((function(e){return Object(s.jsx)("span",{className:e===k?"activePage":null,onClick:function(){return C(e)},children:e},e)})),k<10&&Object(s.jsx)("span",{onClick:function(){return C(k+1)},children:"Next"})]}),Object(s.jsxs)("div",{className:"pageSize",children:[[15,30,50].map((function(e){return Object(s.jsx)("span",{className:e===B?"activePage":null,onClick:function(){return y(e)},children:e},e)})),Object(s.jsx)("span",{id:"per",children:"per page"})]})]})]})]}):Object(s.jsx)("h1",{children:"Please, wait..."})};c(64);var C=function(e){return Object(s.jsx)(s.Fragment,{children:e.comments.map((function(e){return Object(s.jsxs)("div",{className:"commentItem",children:[Object(s.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}}),Object(s.jsx)(l.b,{to:"/users/".concat(e.owner.user_id),className:"userName",children:e.owner.display_name})]},e.comment_id)}))})},S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAACzUlEQVR4nO2bsW7UUBREnykQf0MTUVEkTbQFCPE1NJH4Kap8VQRCIdVQZCKsEGft6/feXNtz6t074zm7UrRSSjHGbBQAFwAu1D0OCYCPAO4A/AJwpe5zKABcAviJf/wGcK3udQgAnADc43/uAZzU/XYNgOuJ8Z94APBZ3XOXzBjfElqxYHxLqE1gfEuoxYrxLWEtFca3hCgVx7eEpTQY3xLm0nB8SzhHh/EtYYqO41vCczD9285LzHndklvH/u0Iyz75DwA+zXjd0pvH/CZExuf7XiV4+1gSouPzvWcFBDOOIWHN+Hz/LAHBrH1LWDs+b8wWEMzcp4Qa4/POIgHB7H1JqDU+by0WEOywDwk1x+e9kIBgl21LqD0+b4YFBDttU0KL8Xl3lYBgt21JaDU+b68WEOy4DQktx+f9KgKCXXNLaD0+M6oJCHbOKaHH+MypKiDYPZeEXuMzq7qA4DPkkNBzfOY1ERB8Fq2E3uMzs5mA4DNpJCjGZ25TAczILUE1PrObC2BOTgnK8ZnfRQCzcklQj88O3QQwL4eEDOOzR1cBzNRKyDI+u3QXwFyNhEzjs49EALP7Ssg2PjvJBDC/j4SM47OXVAA7tJWQdXx2kwtgjyoS3kzc/1BKeTejx59SypdhGH5EH2SrDMNwW0r5Wh43OMfbUsr7RQEAvmX65I96pfgGjPrM+SZ8jx6fkiAZn51SCWCn1yTExh8dfy5BNj77pBPAXi9JWDf+6PiTBOn47JJSALuNJdQZf3T8Bgn+oSGzAPY7AbiZ+/qhZZkWnBt5GIZNPdPUn6GmExYgxgLEWIAYCxBjAWIsQIwFiLEAMRYgxgLEWIAYCxBjAWIsQIwFiLEAMRYgxgLEWIAYCxBjAWIsQIwFiLEAMRYgxgLEWIAYCxBjAWIsQIwFiLEAMRYgxgLEWIAYCxBjAWIsQIwFiLEAMRYgxgLEWICYv2JnqauF+7fyAAAAAElFTkSuQmCC",I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAACgUlEQVR4nO3bPU4cQRTE8R4iHwgiAkdGBOZGBITcxuIaRL6IJYRk8ZEUwdISWjE73f3e6+qZqX8K2n2un2EshKe0sgDg1MenaZp63eLRGfuAvScAcgIgJwByAiAnAHICICcAcgIgJwByAiAnAHICICcAcgIgJwByAiAnAHICICcAcgIgJwByAiAnAHICICcAcgIgJwByAiAnAHICICcAcgIgJwByAiAnAHICICcAcgIgJwByAiAnAHICICcAcsUAAG4BXEces4UAXAO49X7ROxx6A3Dj+uL1t5yMfNsVgJfPU+69XvTu6M9IRRgV4Gj8nA3hm/HpCCMCzIxvQzgxPhVhNICF8dsQcHjglvSCzg/mkQBweOAujZ/79sE896+gx5TSa8ENP1JKDyA/mBkBuEop/UmHDZZ6Tyn9rX6DCt1u345G+Apo2OZ3rzcKR2ADdBvf8IahCEyA7uMb3jgMgQVAG99wQAgCA4A+vuEQd4TeAMOMbzjIFaEnwHDjGw5zQ+gFMOz4hgNdEHoADD++4VAzQjTAasY3HGxCiARY3fi5nghRAKsdP9cLIQJg9ePneiB4A2xm/Fw0gifA5sbPRSJ4AWx2/FwUggfA5sfPRSBYAXYzfs4bwQKwu/FzngitALsdP+eF0AKw+/FzHgi1ABr/KCtCDYDGn8mCUAqg8RdqRSgB0PiFtSAUfJ7Grwl1v19Z8nk1r6X/cJJS9VeCR/qbf1xHBI0/VwcEjb9UIILGLy0AQePX5oig8VtzQND41gwIGt+rBgSN710FgsaPqgBB40eH+Z8d6Wc7vQLwE8Dzl/H/A/jFvmtXAbgA8A/AE4BL9j27DMA5gHP2HUqp1j4AkZ+JgvoMZPoAAAAASUVORK5CYII=";var B=function(e){return Object(s.jsx)(s.Fragment,{children:e.answers.map((function(e){return Object(s.jsxs)("div",{className:"commentItem",children:[Object(s.jsxs)("div",{className:"answerScore",children:[Object(s.jsx)("img",{className:"vote",src:S,alt:"upVote"}),Object(s.jsx)("span",{children:e.score}),Object(s.jsx)("img",{className:"vote",src:I,alt:"downVote"}),e.is_accepted?Object(s.jsx)("img",{className:"accepted",src:"data:image/png;base64,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",alt:"accepted"}):null]}),Object(s.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}}),Object(s.jsxs)("div",{className:"owner",children:[Object(s.jsxs)("p",{children:["answered ",g(1e3*e.creation_date)]}),Object(s.jsx)(l.b,{to:"/users/".concat(e.owner.user_id),className:"userName",children:Object(s.jsx)("img",{alt:"ownerImg",className:"ownerImg",src:e.owner.profile_image})}),Object(s.jsx)(l.b,{to:"/users/".concat(e.owner.user_id),className:"userName",children:e.owner.display_name}),Object(s.jsx)("p",{children:e.owner.reputation})]}),e.comment_count>0?Object(s.jsx)(C,{comments:e.comments}):null]},e.answer_id)}))})};var y=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!1),r=Object(o.a)(i,2),j=r[0],u=r[1],b=Object(n.useState)([]),O=Object(o.a)(b,2),m=O[0],x=O[1],A=Object(E.e)().questionId;return Object(n.useEffect)((function(){d.a.get("https://api.stackexchange.com/2.2/questions/".concat(A,"?&site=stackoverflow&filter=!LYA)NcjxVO1mgxq*)Lp_Eq&key=").concat("qBt3pH)yY2*kx96ogUORkA((")).then((function(e){x(e.data.items[0]),u(!0)}),(function(e){u(!0),a(e),console.log(e)}))}),[]),c?Object(s.jsx)("h1",{children:"Something went wrong..."}):j?Object(s.jsxs)("div",{className:"questionInfo",children:[Object(s.jsx)("h1",{children:m.title}),Object(s.jsxs)("div",{className:"questionScore",children:[Object(s.jsx)("img",{className:"vote",src:S,alt:"upVote"}),Object(s.jsx)("span",{className:"scoreCount",children:m.score}),Object(s.jsx)("img",{className:"vote",src:I,alt:"downVote"})]}),Object(s.jsx)("div",{className:"questionBody",dangerouslySetInnerHTML:{__html:m.body}}),Object(s.jsx)("div",{className:"questionTags",children:m.tags.map((function(e){return Object(s.jsx)(l.b,{to:"/tags/".concat(e),className:"tagItem",children:e},e)}))}),Object(s.jsxs)("div",{className:"owner",children:[Object(s.jsxs)("p",{children:["asked ",g(1e3*m.creation_date)]}),Object(s.jsx)(l.b,{to:"/users/".concat(m.owner.user_id),className:"userName",children:Object(s.jsx)("img",{alt:"ownerImg",className:"ownerImg",src:m.owner.profile_image})}),Object(s.jsx)(l.b,{to:"/users/".concat(m.owner.user_id),className:"userName",children:m.owner.display_name}),Object(s.jsx)("p",{children:m.owner.reputation})]}),Object(s.jsx)("div",{className:"comments",children:m.comment_count>0?Object(s.jsx)(C,{comments:m.comments}):Object(s.jsxs)("p",{className:"emptyComments",children:["Comments: ",m.comment_count]})}),Object(s.jsxs)("div",{className:"answers",children:[Object(s.jsxs)("h2",{children:[m.answer_count,"  ",1===m.answer_count?"Answer":"Answers"]}),m.answer_count>0?Object(s.jsx)(B,{answers:m.answers}):null]})]}):Object(s.jsx)("h1",{children:"Please, wait..."})};var z=function(){return Object(s.jsx)(l.a,{basename:"/usof",children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(b,{}),Object(s.jsx)(E.a,{exact:!0,path:"/",component:x}),Object(s.jsx)(E.a,{exact:!0,path:"/questions/:questionId",component:y}),Object(s.jsx)(E.a,{exact:!0,path:"/users",component:v}),Object(s.jsx)(E.a,{path:"/users/:userID",component:R}),Object(s.jsx)(E.a,{exact:!0,path:"/tags",component:N}),Object(s.jsx)(E.a,{path:"/tags/:tagName",component:k}),Object(s.jsx)(w,{})]})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,66)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(z,{})}),document.getElementById("root")),L()}},[[65,1,2]]]);
//# sourceMappingURL=main.21bc6c72.chunk.js.map