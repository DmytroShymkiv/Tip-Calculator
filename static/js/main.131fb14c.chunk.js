(this["webpackJsonptip-calculator"]=this["webpackJsonptip-calculator"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(4),l=c.n(r),i=(c(9),c(2)),a=c(0),u=s.a.createContext();function j(){return Object(n.useContext)(u)}var d="bill",b="tip",o="peopleNum";function p(e){var t=e.children,c=Object(n.useState)(0),s=Object(i.a)(c,2),r=s[0],l=s[1],j=Object(n.useState)(0),p=Object(i.a)(j,2),O=p[0],h=p[1],m=Object(n.useState)(1),x=Object(i.a)(m,2),v=x[0],f=x[1],N=Math.round(r*O/100/v),g={bill:r,tip:O,peopleNum:v,tipForPerson:N,totalForPerson:Math.round(r/v+N),updateValue:function(e,t){switch(t=Number(t),e){case d:l(t);break;case b:h(t);break;case o:0!==t&&f(t)}},reset:function(){l(0),h(0),f(1);var e=document.getElementById("tipInput"),t=document.getElementById("billInput"),c=document.getElementById("NumberInput");e.value="",t.value="",c.value=""}};return Object(a.jsx)(u.Provider,{value:g,children:t})}var O=c.p+"static/media/icon-dollar.9f9be353.svg",h=c.p+"static/media/icon-person.65bfd204.svg";function m(){var e=j(),t=e.updateValue,c=e.tip,s=Object(n.useRef)(""),r=function(e){var c=Number(e.currentTarget.innerText.slice(0,-1));t(b,c),s.current.value=""};return Object(a.jsxs)("div",{className:"input-form",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Bill"}),Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("img",{src:O,alt:"dollar"}),Object(a.jsx)("input",{type:"number",id:"billInput",onChange:function(e){return t(d,e.target.value)},className:"input",name:"bill",placeholder:"0"})]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Select Tip %"}),Object(a.jsxs)("div",{className:"tip-select-section",children:[[5,10,15,25,50].map((function(e){return Object(a.jsxs)("div",{style:{background:e===c&&"hsl(172, 67%, 45%)"},onClick:r,children:[e,"%"]},e)})),Object(a.jsx)("input",{type:"number",id:"tipInput",ref:s,onChange:function(e){t(b,e.target.value)},placeholder:"Custom",className:"custom-tip-btn"})]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Number of People"}),Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("img",{src:h,alt:"person"}),Object(a.jsx)("input",{type:"number",id:"NumberInput",onChange:function(e){return t(o,e.target.value)},className:"input",name:"people",placeholder:"0"})]})]})]})}function x(){var e=j(),t=e.tipForPerson,c=e.totalForPerson,n=e.reset;return Object(a.jsxs)("div",{className:"result-board",children:[Object(a.jsxs)("div",{className:"result-value",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Tip Amount"}),Object(a.jsx)("p",{children:"/person"})]}),Object(a.jsxs)("div",{className:"result-amount",children:["$",t]})]}),Object(a.jsxs)("div",{className:"result-value",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Total"}),Object(a.jsx)("p",{children:"/person"})]}),Object(a.jsxs)("div",{className:"result-amount",children:["$",c]})]}),Object(a.jsx)("button",{onClick:n,children:"RESET"})]})}function v(){return Object(a.jsx)(p,{children:Object(a.jsxs)("div",{className:"board",children:[Object(a.jsx)(m,{}),Object(a.jsx)(x,{})]})})}var f=function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{className:"title",children:["Spli",Object(a.jsx)("br",{}),"tter"]}),Object(a.jsx)(v,{})]})};l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.131fb14c.chunk.js.map