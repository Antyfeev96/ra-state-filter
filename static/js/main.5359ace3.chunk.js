(this["webpackJsonpra-state-filter"]=this["webpackJsonpra-state-filter"]||[]).push([[0],{12:function(t,e,s){},13:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var r=s(1),o=s.n(r),n=s(3),i=s.n(n),a=(s(12),s(13),s(4)),c=s(5),g=s(7),m=s(6),l=s(0);function h(t){var e=t.filters,s=t.selected,r=t.onSelectFilter;return Object(l.jsx)("div",{className:"toolbar",children:e.map((function(t){var e=s===t,o=e?"toolbar__item selected":"toolbar__item";return Object(l.jsx)("div",{className:o,selected:e,onClick:r,children:t},t)}))})}function u(t){var e=t.projects;return console.log(e),Object(l.jsx)("div",{className:"project-list",children:e.map((function(t,e){return Object(l.jsx)("img",{src:t.img,alt:t.category,className:"project"},e)}))})}var p=function(t){Object(g.a)(s,t);var e=Object(m.a)(s);function s(t){var r;return Object(a.a)(this,s),(r=e.call(this,t)).onSelectFilter=function(t){r.setState((function(e){return{filter:t.target.textContent}}))},r.filters=["All","Websites","Flayers","Business Cards"],r.state={filter:"All"},r.projects=[{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",category:"Business Cards"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",category:"Business Cards"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",category:"Business Cards"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",category:"Flayers"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",category:"Business Cards"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",category:"Business Cards"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",category:"Flayers"}],r}return Object(c.a)(s,[{key:"render",value:function(){var t=this;return Object(l.jsxs)("div",{children:[Object(l.jsx)(h,{filters:this.filters,selected:this.state.filter,onSelectFilter:this.onSelectFilter},"toolbar"),Object(l.jsx)(u,{projects:this.projects.filter((function(e){return console.log(t.state.filter,e.category),e.category===t.state.filter}))},"list")]})}}]),s}(r.Component);var b=function(){return Object(l.jsx)(p,{},"portfolio")},f=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(e){var s=e.getCLS,r=e.getFID,o=e.getFCP,n=e.getLCP,i=e.getTTFB;s(t),r(t),o(t),n(t),i(t)}))};i.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.5359ace3.chunk.js.map