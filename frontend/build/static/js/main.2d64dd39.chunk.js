(this.webpackJsonptinder=this.webpackJsonptinder||[]).push([[0],{103:function(e,n,t){},104:function(e,n,t){},105:function(e,n,t){},107:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),s=t(54),r=t.n(s),i=(t(75),t(121)),o=t(57),j=t.n(o),l=t(58),d=t.n(l),u=(t(76),t(2)),b=function(){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)(i.a,{children:Object(u.jsx)(j.a,{fontSize:"large",className:"header__icon"})}),Object(u.jsx)("img",{className:"header__logo",src:"https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png",alt:""}),Object(u.jsx)(i.a,{children:Object(u.jsx)(d.a,{fontSize:"large",className:"header__icon"})})]})},h=t(36),p=t.n(h),O=t(59),f=t(10),x=t(60),m=t.n(x),g=t(61),_=t.n(g).a.create({baseURL:"https://tndr-back-end.herokuapp.com/"}),v=(t(103),function(){var e=Object(c.useState)([]),n=Object(f.a)(e,2),t=n[0],a=n[1];Object(c.useEffect)((function(){(function(){var e=Object(O.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.get("/tinder/cards");case 2:n=e.sent,a(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(u.jsx)("div",{className:"tinder-cards",children:Object(u.jsx)("div",{className:"tinder-cards__card-container",children:t.map((function(e){return Object(u.jsx)(m.a,{className:"swipe",preventSwipe:["up","down"],onSwipe:function(n){return t=e.name,void console.log("removing: "+t);var t},onCardLeftScreen:function(){return n=e.name,void console.log(n+" left the screen");var n},children:Object(u.jsx)("div",{style:{backgroundImage:"url(".concat(e.imgUrl,")")},className:"card",children:Object(u.jsx)("h3",{children:e.name})})},e.name)}))})})}),w=t(62),N=t.n(w),S=t(63),z=t.n(S),k=t(64),y=t.n(k),E=t(65),I=t.n(E),J=t(66),L=t.n(J),U=(t(104),function(){return Object(u.jsxs)("div",{className:"swipe-buttons",children:[Object(u.jsx)(i.a,{className:"swipe-buttons__repeat",children:Object(u.jsx)(N.a,{fontSize:"large"})}),Object(u.jsx)(i.a,{className:"swipe-buttons__left",children:Object(u.jsx)(z.a,{fontSize:"large"})}),Object(u.jsx)(i.a,{className:"swipe-buttons__star",children:Object(u.jsx)(y.a,{fontSize:"large"})}),Object(u.jsx)(i.a,{className:"swipe-buttons__right",children:Object(u.jsx)(I.a,{fontSize:"large"})}),Object(u.jsx)(i.a,{className:"swipe-buttons__lightning",children:Object(u.jsx)(L.a,{fontSize:"large"})})]})}),B=(t(105),function(){return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(b,{}),Object(u.jsx)(v,{}),Object(u.jsx)(U,{})]})});r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(B,{})}),document.getElementById("root"))},75:function(e,n,t){},76:function(e,n,t){}},[[107,1,2]]]);
//# sourceMappingURL=main.2d64dd39.chunk.js.map