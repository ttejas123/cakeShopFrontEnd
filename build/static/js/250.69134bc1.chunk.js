(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[250],{1047:function(e,t,a){"use strict";a.r(t);var n=a(7),c=a(2),s=a(8),i=(a(92),a(71),a(61),a(0)),r=(a(79),a(53),a(80)),o=a(77),l=a(78),d=a(73),j=a(85),b=a(945),u=a(75),p=a(151),f=a(68),O=a(51),h=a(3);t.default=function(e){var t={id:0,type:"Category",default_c:10},a=Object(i.useState)(),m=Object(s.a)(a,2),x=(m[0],m[1],Object(i.useState)(t)),g=Object(s.a)(x,2),v=g[0],y=g[1],N=Object(i.useState)(!1),R=Object(s.a)(N,2),z=(R[0],R[1],Object(i.useState)(new Date)),S=Object(s.a)(z,2),C=(S[0],S[1],function(e){var t=e.target,a=t.name,s=t.value;y(Object(c.a)(Object(c.a)({},v),{},Object(n.a)({},a,s)))});return Object(h.jsx)(r.a,{children:Object(h.jsxs)(o.a,{children:[Object(h.jsx)(l.a,{sm:"12",className:"pl-5 pt-2",children:Object(h.jsx)("h2",{className:"mb-1",children:"Add OnGround Lead"})}),Object(h.jsx)(d.a,{className:"pl-3 pt-2",children:Object(h.jsx)(l.a,{sm:"12",children:Object(h.jsx)(j.a,{onSubmit:function(e){return e.preventDefault()},children:Object(h.jsxs)(o.a,{children:[Object(h.jsx)(l.a,{md:"6",sm:"12",children:Object(h.jsxs)(b.a,{children:[Object(h.jsx)(u.a,{for:"Name",children:"Name"}),Object(h.jsx)(p.a,{children:Object(h.jsx)(f.a,{name:"Name",onChange:C,id:"type",value:v.Name})})]})}),Object(h.jsx)(l.a,{md:"6",sm:"12",children:Object(h.jsxs)(b.a,{children:[Object(h.jsx)(u.a,{for:"Email",children:"Email"}),Object(h.jsx)(p.a,{children:Object(h.jsx)(f.a,{name:"Email",onChange:C,id:"type",value:v.Email})})]})}),Object(h.jsx)(l.a,{md:"6",sm:"12",children:Object(h.jsxs)(b.a,{children:[Object(h.jsx)(u.a,{for:"Designation",children:"Designation"}),Object(h.jsx)(p.a,{children:Object(h.jsx)(f.a,{name:"Designation",onChange:C,id:"type",value:v.Designation})})]})}),Object(h.jsx)(l.a,{md:"6",sm:"12",children:Object(h.jsxs)(b.a,{children:[Object(h.jsx)(u.a,{for:"phone",children:"phone"}),Object(h.jsx)(p.a,{children:Object(h.jsx)(f.a,{name:"phone",onChange:C,id:"type",value:v.phone})})]})}),Object(h.jsxs)(l.a,{className:"d-flex flex-sm-row flex-column mt-2",sm:"12",children:[Object(h.jsx)(O.a.Ripple,{className:"mb-1 mb-sm-0 mr-0 mr-sm-1",onClick:function(e){!function(e){var a=e.target,s=a.name;a.value,console.log(Object(c.a)(Object(c.a)({},v),{},Object(n.a)({},s,v))),y(Object(c.a)(Object(c.a)({},v),{},Object(n.a)({},s,v))),y(t),alert("Data successfully inserted")}(e)},color:"primary",children:"Save Changes"}),Object(h.jsx)(O.a.Ripple,{color:"secondary",onClick:function(){return y(t)},outline:!0,children:"Reset"})]})]})})})})]})})}},68:function(e,t,a){"use strict";var n=a(4),c=a(5),s=a(20),i=a(19),r=a(0),o=a.n(r),l=a(1),d=a.n(l),j=a(11),b=a.n(j),u=a(12),p={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:u.q,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,i=e.bsSize,r=e.valid,l=e.invalid,d=e.tag,j=e.addon,p=e.plaintext,f=e.innerRef,O=Object(c.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(s)>-1,m=new RegExp("\\D","g"),x=d||("select"===s||"textarea"===s?s:"input"),g="form-control";p?(g+="-plaintext",x=d||"input"):"file"===s?g+="-file":"range"===s?g+="-range":h&&(g=j?null:"form-check-input"),O.size&&m.test(O.size)&&(Object(u.s)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=O.size,delete O.size);var v=Object(u.m)(b()(t,l&&"is-invalid",r&&"is-valid",!!i&&"form-control-"+i,g),a);return("input"===x||d&&"function"===typeof d)&&(O.type=s),O.children&&!p&&"select"!==s&&"string"===typeof x&&"select"!==x&&(Object(u.s)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete O.children),o.a.createElement(x,Object(n.a)({},O,{ref:f,className:v,"aria-invalid":l}))},t}(o.a.Component);f.propTypes=p,f.defaultProps={type:"text"},t.a=f},71:function(e,t,a){"use strict";var n=a(2),c=a(21),s=a(3),i=function(e){for(var t=e.count,a=e.tag,i=(e.component,e.children),r=Object(c.a)(e,["count","tag","component","children"]),o=a,l=[],d=0;d<t;d++)l.push(i(d));return Object(s.jsx)(o,Object(n.a)(Object(n.a)({},r),{},{children:l}))};i.defaultProps={tag:"div"},t.a=i},80:function(e,t,a){"use strict";var n=a(4),c=a(5),s=a(0),i=a.n(s),r=a(1),o=a.n(r),l=a(11),d=a.n(l),j=a(12),b={tag:j.q,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},u=function(e){var t=e.className,a=e.cssModule,s=e.color,r=e.body,o=e.inverse,l=e.outline,b=e.tag,u=e.innerRef,p=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(j.m)(d()(t,"card",!!o&&"text-white",!!r&&"card-body",!!s&&(l?"border":"bg")+"-"+s),a);return i.a.createElement(b,Object(n.a)({},p,{className:f,ref:u}))};u.propTypes=b,u.defaultProps={tag:"div"},t.a=u}}]);
//# sourceMappingURL=250.69134bc1.chunk.js.map