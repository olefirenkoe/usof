(this.webpackJsonpusof=this.webpackJsonpusof||[]).push([[0],{14:function(A,e,t){},15:function(A,e,t){},16:function(A,e,t){"use strict";t.r(e);var n=t(0),c=t(1),i=t.n(c),I=t(4),l=t.n(I),E=(t(14),t(5)),d=t(6),O=t(2),b=t(8),u=t(7),h=(t(15),function(A){Object(b.a)(t,A);var e=Object(u.a)(t);function t(A){var n;return Object(E.a)(this,t),(n=e.call(this,A)).state={status:!0,disabled:!1},n.handleClick=n.handleClick.bind(Object(O.a)(n)),n}return Object(d.a)(t,[{key:"handleClick",value:function(){console.log("Log in"),window.SE.authenticate({success:function(A){console.log("I got access"),P=A,console.log(P.accessToken),fetch("https://api.stackexchange.com/2.2/me?site=stackoverflow&key=qBt3pH)yY2*kx96ogUORkA((&access_token=".concat(P.accessToken,"&callback=profile"),{}).then((function(A){console.log(A)})).then((function(A){console.log(A)}))},error:function(A){alert("\u042f \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u0434\u043e\u0441\u0442\u0443\u043f :(")}}),this.setState({status:!1})}},{key:"renderButton",value:function(){return!0===this.state.status?Object(n.jsx)("button",{id:"log",disabled:this.state.disabled,onClick:this.handleClick,children:"Log in"}):null}},{key:"componentDidMount",value:function(){var A=this;window.SE.init({clientId:19555,key:"qBt3pH)yY2*kx96ogUORkA((",channelUrl:"https://olefirenkoe.github.io/blank.html",complete:function(){console.log("Ready for auth!"),A.allowLogin()}})}},{key:"allowLogin",value:function(){this.setState({disabled:!1})}},{key:"render",value:function(){return Object(n.jsxs)("header",{children:[Object(n.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATwAAAE8CAYAAABdBQ0GAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkE1MTZBNzU1MDE1MTFFNUEzODE5OTE2QTE2M0ExOTYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkE1MTZBNzQ1MDE1MTFFNUEzODE5OTE2QTE2M0ExOTYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTg1MTQ5NjM5NDRGMTFFNDlENzZCNkZGMjlBQTI4N0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTg1MTQ5NjQ5NDRGMTFFNDlENzZCNkZGMjlBQTI4N0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6xm0OTAAAWFUlEQVR42uzdDbxu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",className:"logo",alt:"logo"}),Object(n.jsxs)("span",{className:"label",children:["stack ",Object(n.jsx)("b",{children:"usof"})]}),this.renderButton()]})}}]),t}(i.a.Component)),P=null;var s=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(h,{})})},a=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(e){var t=e.getCLS,n=e.getFID,c=e.getFCP,i=e.getLCP,I=e.getTTFB;t(A),n(A),c(A),i(A),I(A)}))};l.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(s,{})}),document.getElementById("root")),a()}},[[16,1,2]]]);
//# sourceMappingURL=main.c1973a7d.chunk.js.map