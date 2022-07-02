(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(42)},25:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a(3),i=a(2),o=a(4),u=function(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),t.join(".")},s=Object(i.b)({name:"calc",initialState:{currentValue:"",displayedValue:"",expression:"",newExpression:!1,historyOfOperation:[]},reducers:{addNumber:function(e,t){!0===e.newExpression&&(e.currentValue=e.expression=e.displayedValue="",e.newExpression=!1),e.currentValue=e.displayedValue=e.currentValue.concat(t.payload)},addOperation:function(e,t){!0===e.newExpression&&(e.expression="",e.newExpression=!1),"+/-"===t.payload&&""!==e.currentValue&&(parseFloat(e.currentValue)>0?e.displayedValue=e.currentValue="-"+e.currentValue:e.displayedValue=e.currentValue=e.currentValue.toString().slice(1)),"backspace"===t.payload&&(e.displayedValue=e.currentValue=e.currentValue.toString().slice(0,-1));var a=function(){"+/-"!==t.payload&&"backspace"!==t.payload&&"-"!==e.currentValue&&(e.expression=e.expression.concat(e.currentValue).concat(t.payload),e.displayedValue=e.currentValue,e.currentValue="")};"-"===t.payload||"+"===t.payload||"*"===t.payload||"/"===t.payload?"-"!==e.expression.slice(-1)&&"+"!==e.expression.slice(-1)&&"*"!==e.expression.slice(-1)&&"/"!==e.expression.slice(-1)||""!==e.currentValue?a():e.expression=e.expression.slice(0,-1).concat(t.payload):a()},calculate:function(e){if(!0===e.newExpression||""===e.currentValue||""===e.expression)e.currentValue=e.expression=e.displayedValue="";else{e.expression=e.expression.concat(e.currentValue).replaceAll("--","+").replaceAll("+-","-");var t=function(e){return Function("'use strict'; return (".concat(e,")"))()};e.displayedValue=e.currentValue=t(e.expression),e.historyOfOperation.length>2&&e.historyOfOperation.shift(),e.historyOfOperation=[].concat(Object(o.a)(e.historyOfOperation),[e.expression+"="+u(t(e.expression))]),e.newExpression=!0}},clear:function(e){e.currentValue=e.expression=e.displayedValue="",e.newExpression=!1}}}),m=s.actions,p=m.addNumber,d=m.addOperation,f=m.calculate,E=m.clear,h=s.reducer,b={theme:localStorage.getItem("theme")||"light"},y=Object(i.b)({name:"theme",initialState:b,reducers:{changeTheme:function(e){"light"===e.theme?e.theme="dark":e.theme="light",localStorage.setItem("theme",e.theme)}}}),V=y.actions.changeTheme,x=y.reducer,O=Object(i.a)({reducer:{calcSlice:h,themeSlice:x}}),v=a(1),w=function(){return Object(l.b)()},g=l.c,k=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(n.useState)(e),a=Object(v.a)(t,2),r=a[0],c=a[1];return[r,function(){c(!0),setTimeout(function(){c(!1)},100)}]},N=(a(25),function(){var e=g(function(e){return e.calcSlice.historyOfOperation});return r.a.createElement("section",{className:"history-of-operation"},e.map(function(e,t){return r.a.createElement("div",{className:"history-of-operation__expression",key:t},e)}))}),S=(a(27),function(e){var t=e.number,a=w(),n=k(),c=Object(v.a)(n,2),l=c[0],i=c[1];return r.a.createElement("div",{className:"calc-button number ".concat(l?"calc-button--clicked":""),onClick:function(){a(p(t)),i()}},r.a.createElement("p",{className:"number__value"},t))}),_=(a(29),function(e){var t=e.operation,a=e.style,n=w(),c=k(),l=Object(v.a)(c,2),i=l[0],o=l[1];return r.a.createElement("div",{className:"calc-button ".concat(a," ").concat(i?"calc-button--clicked":""),onClick:function(){switch(o(),t){case"clear":n(E());break;case"=":n(f());break;default:n(d(t))}}},r.a.createElement("p",{className:"".concat(a,"__name")},"clear"===t||"+/-"===t||"backspace"===t||"/"===t||"*"===t||"-"===t||"+"===t||"="===t?"":t))}),j=(a(31),function(){return r.a.createElement("section",{className:"list-of-buttons"},r.a.createElement(_,{operation:"clear",style:"clear"}),r.a.createElement(_,{operation:"backspace",style:"backspace"}),r.a.createElement(_,{operation:"+/-",style:"plus-minus"}),r.a.createElement(_,{operation:"/",style:"divide"}),r.a.createElement(S,{number:"7"}),r.a.createElement(S,{number:"8"}),r.a.createElement(S,{number:"9"}),r.a.createElement(_,{operation:"*",style:"multiply"}),r.a.createElement(S,{number:"4"}),r.a.createElement(S,{number:"5"}),r.a.createElement(S,{number:"6"}),r.a.createElement(_,{operation:"-",style:"minus"}),r.a.createElement(S,{number:"1"}),r.a.createElement(S,{number:"2"}),r.a.createElement(S,{number:"3"}),r.a.createElement(_,{operation:"+",style:"plus"}),r.a.createElement(S,{number:"0"}),r.a.createElement(S,{number:"."}),r.a.createElement(_,{operation:"=",style:"result"}))}),C=(a(33),function(){var e=g(function(e){return e.calcSlice.displayedValue});return r.a.createElement("section",{className:"result-field"},r.a.createElement("input",{className:"result-field__value",readOnly:!0,value:""===e?"0":u(e)}))}),I=(a(35),function(){var e=g(function(e){return e.themeSlice.theme}),t=w();return r.a.createElement("section",{className:"theme-switch"},r.a.createElement("input",{className:"theme-switch__toggle",type:"checkbox",checked:"dark"===e,onChange:function(){return t(V())}}),r.a.createElement("p",{className:"theme-switch__title"},"Switch to ","light"===e?"dark":"light"," theme"))}),T=(a(37),function(){var e=g(function(e){return e.themeSlice.theme});return r.a.createElement("div",{className:"wrapper wrapper--".concat(e)},r.a.createElement("div",{className:"container"},r.a.createElement(N,null),r.a.createElement(C,null),r.a.createElement(I,null),r.a.createElement(j,null)))}),A=(a(39),document.getElementById("root"));Object(c.createRoot)(A).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:O},r.a.createElement(T,null))))}},[[12,2,1]]]);
//# sourceMappingURL=main.9aad4ee4.chunk.js.map