(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[78],{100:function(e,a,t){},1014:function(e,a,t){"use strict";t.r(a);t(7);var s=t(2),n=t(8),c=t(0),r=(t(53),t(81)),o=t(68),l=t(66),i=t(72),u=t(78),d=t(79),b=t(85),f=t(951),m=t(74),p=t(67),j=t(51),h=t(62),g=t(61),O=t(88),v=t(76),x=t.n(v),y=t(90),N=t.n(y),M=t(91),T=(t(97),t(100),t(87),t(3));a.default=function(){var e=Object(c.useState)(null),a=Object(n.a)(e,2),t=(a[0],a[1],Object(O.c)({defaultValues:{hasSubscription:"No"}})),v=(t.control,t.setValue,Object(c.useState)(null)),y=Object(n.a)(v,2),R=y[0],P=y[1],w=new x.a({meta:{type:"avatar"},restrictions:{maxNumberOfFiles:1},autoProceed:!0});w.use(N.a),w.on("thumbnail:generated",(function(e,a){console.log(e),P(a)}));var z={id:1,name:"",email:"",hasSubscription:"",isVerified:"",icon:"",phone:"",panNumber:"",User:[{value:"Pravin Poshmani",label:"Pravin Poshmani"}],DocType:[{value:".img",label:".img"}],State:[{value:"state",label:"Maharashtra"}],Country:[{value:"country",label:"India"}]},E=Object(c.useState)(z),k=Object(n.a)(E,2),S=k[0],q=k[1];Object(c.useEffect)((function(){}));return Object(T.jsxs)(r.a,{children:[Object(T.jsx)(o.a,{children:Object(T.jsx)(l.a,{tag:"h1",children:"Add Application"})}),Object(T.jsx)(i.a,{children:Object(T.jsx)(u.a,{children:Object(T.jsx)(d.a,{sm:"12",children:Object(T.jsx)(b.a,{onSubmit:function(e){return e.preventDefault()},children:Object(T.jsxs)(u.a,{children:[Object(T.jsx)(d.a,{md:"4",sm:"12",children:Object(T.jsxs)(f.a,{children:[Object(T.jsx)(m.a,{for:"User",children:"User"}),Object(T.jsx)(h.a,{theme:g.b,className:"react-select",classNamePrefix:"select",name:"users",options:[{value:"Mehul",label:"Mehul",id:4},{value:"Pravin Poshmani",label:"Pravin Poshmani",id:1},{value:"Tejas Thakare",label:"Tejas Thakare",id:2},{value:"Komal Kamble ",label:"Komal Kamble ",id:3}],value:S.User[0],menuPlacement:"auto",isClearable:!1,onChange:function(e,a){q(Object(s.a)(Object(s.a)({},S),{},{User:e}))}})]})}),Object(T.jsx)(d.a,{md:"4",sm:"12",children:Object(T.jsxs)(f.a,{children:[Object(T.jsx)(m.a,{for:"documentFile",children:"Document (File)"}),Object(T.jsx)(p.a,{type:"text",id:"documentFile",placeholder:"Document (File)"})]})}),Object(T.jsx)(d.a,{md:"4",sm:"12",children:Object(T.jsxs)(f.a,{children:[Object(T.jsx)(m.a,{for:"documentType",children:"Document Type"}),Object(T.jsx)(h.a,{theme:g.b,className:"react-select",classNamePrefix:"select",name:"documentType",options:[{value:".img",label:".img",id:1},{value:".pdf",label:".pdf",id:2}],value:S.DocType[0],menuPlacement:"auto",isClearable:!1,onChange:function(e,a){q(Object(s.a)(Object(s.a)({},S),{},{DocType:e}))}})]})}),Object(T.jsx)(d.a,{md:"12",sm:"12",children:Object(T.jsx)(f.a,{children:Object(T.jsxs)(i.a,{children:[Object(T.jsx)("h4",{className:"mb-1",children:Object(T.jsx)("span",{className:"align-middle",children:"Import"})}),Object(T.jsx)(M.a,{uppy:w}),null!==R?Object(T.jsx)("img",{className:"rounded mt-2",src:R,alt:"avatar"}):null]})})}),Object(T.jsxs)(d.a,{className:"d-flex flex-sm-row flex-column mt-2",sm:"12",children:[Object(T.jsx)(j.a.Ripple,{className:"mb-1 mb-sm-0 mr-0 mr-sm-1",type:"submit",color:"primary",children:"Save Changes"}),Object(T.jsx)(j.a.Ripple,{color:"secondary",outline:!0,children:"Reset"})]})]})})})})})]})}},66:function(e,a,t){"use strict";var s=t(4),n=t(5),c=t(0),r=t.n(c),o=t(1),l=t.n(o),i=t(11),u=t.n(i),d=t(12),b={tag:d.q,className:l.a.string,cssModule:l.a.object},f=function(e){var a=e.className,t=e.cssModule,c=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),l=Object(d.m)(u()(a,"card-title"),t);return r.a.createElement(c,Object(s.a)({},o,{className:l}))};f.propTypes=b,f.defaultProps={tag:"div"},a.a=f},67:function(e,a,t){"use strict";var s=t(4),n=t(5),c=t(20),r=t(19),o=t(0),l=t.n(o),i=t(1),u=t.n(i),d=t(11),b=t.n(d),f=t(12),m={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.focus=t.focus.bind(Object(c.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.type,r=e.bsSize,o=e.valid,i=e.invalid,u=e.tag,d=e.addon,m=e.plaintext,p=e.innerRef,j=Object(n.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(c)>-1,g=new RegExp("\\D","g"),O=u||("select"===c||"textarea"===c?c:"input"),v="form-control";m?(v+="-plaintext",O=u||"input"):"file"===c?v+="-file":"range"===c?v+="-range":h&&(v=d?null:"form-check-input"),j.size&&g.test(j.size)&&(Object(f.s)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=j.size,delete j.size);var x=Object(f.m)(b()(a,i&&"is-invalid",o&&"is-valid",!!r&&"form-control-"+r,v),t);return("input"===O||u&&"function"===typeof u)&&(j.type=c),j.children&&!m&&"select"!==c&&"string"===typeof O&&"select"!==O&&(Object(f.s)('Input with a type of "'+c+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete j.children),l.a.createElement(O,Object(s.a)({},j,{ref:p,className:x,"aria-invalid":i}))},a}(l.a.Component);p.propTypes=m,p.defaultProps={type:"text"},a.a=p},68:function(e,a,t){"use strict";var s=t(4),n=t(5),c=t(0),r=t.n(c),o=t(1),l=t.n(o),i=t(11),u=t.n(i),d=t(12),b={tag:d.q,className:l.a.string,cssModule:l.a.object},f=function(e){var a=e.className,t=e.cssModule,c=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),l=Object(d.m)(u()(a,"card-header"),t);return r.a.createElement(c,Object(s.a)({},o,{className:l}))};f.propTypes=b,f.defaultProps={tag:"div"},a.a=f},72:function(e,a,t){"use strict";var s=t(4),n=t(5),c=t(0),r=t.n(c),o=t(1),l=t.n(o),i=t(11),u=t.n(i),d=t(12),b={tag:d.q,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},f=function(e){var a=e.className,t=e.cssModule,c=e.innerRef,o=e.tag,l=Object(n.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.m)(u()(a,"card-body"),t);return r.a.createElement(o,Object(s.a)({},l,{className:i,ref:c}))};f.propTypes=b,f.defaultProps={tag:"div"},a.a=f},74:function(e,a,t){"use strict";var s=t(4),n=t(5),c=t(0),r=t.n(c),o=t(1),l=t.n(o),i=t(11),u=t.n(i),d=t(12),b=l.a.oneOfType([l.a.number,l.a.string]),f=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:b,order:b,offset:b})]),m={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:d.q,className:l.a.string,cssModule:l.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:l.a.array},p={tag:"label",widths:["xs","sm","md","lg","xl"]},j=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,c=e.hidden,o=e.widths,l=e.tag,i=e.check,b=e.size,f=e.for,m=Object(n.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),p=[];o.forEach((function(a,s){var n=e[a];if(delete m[a],n||""===n){var c,r=!s;if(Object(d.k)(n)){var o,l=r?"-":"-"+a+"-";c=j(r,a,n.size),p.push(Object(d.m)(u()(((o={})[c]=n.size||""===n.size,o["order"+l+n.order]=n.order||0===n.order,o["offset"+l+n.offset]=n.offset||0===n.offset,o))),t)}else c=j(r,a,n),p.push(c)}}));var h=Object(d.m)(u()(a,!!c&&"sr-only",!!i&&"form-check-label",!!b&&"col-form-label-"+b,p,!!p.length&&"col-form-label"),t);return r.a.createElement(l,Object(s.a)({htmlFor:f},m,{className:h}))};h.propTypes=m,h.defaultProps=p,a.a=h},78:function(e,a,t){"use strict";var s=t(4),n=t(5),c=t(0),r=t.n(c),o=t(1),l=t.n(o),i=t(11),u=t.n(i),d=t(12),b=l.a.oneOfType([l.a.number,l.a.string]),f={tag:d.q,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},m={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var a=e.className,t=e.cssModule,c=e.noGutters,o=e.tag,l=e.form,i=e.widths,b=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];i.forEach((function(a,t){var s=e[a];if(delete b[a],s){var n=!t;f.push(n?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var m=Object(d.m)(u()(a,c?"no-gutters":null,l?"form-row":"row",f),t);return r.a.createElement(o,Object(s.a)({},b,{className:m}))};p.propTypes=f,p.defaultProps=m,a.a=p},79:function(e,a,t){"use strict";var s=t(4),n=t(5),c=t(0),r=t.n(c),o=t(1),l=t.n(o),i=t(11),u=t.n(i),d=t(12),b=l.a.oneOfType([l.a.number,l.a.string]),f=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:b,offset:b})]),m={tag:d.q,xs:f,sm:f,md:f,lg:f,xl:f,className:l.a.string,cssModule:l.a.object,widths:l.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,c=e.widths,o=e.tag,l=Object(n.a)(e,["className","cssModule","widths","tag"]),i=[];c.forEach((function(a,s){var n=e[a];if(delete l[a],n||""===n){var c=!s;if(Object(d.k)(n)){var r,o=c?"-":"-"+a+"-",b=j(c,a,n.size);i.push(Object(d.m)(u()(((r={})[b]=n.size||""===n.size,r["order"+o+n.order]=n.order||0===n.order,r["offset"+o+n.offset]=n.offset||0===n.offset,r)),t))}else{var f=j(c,a,n);i.push(f)}}})),i.length||i.push("col");var b=Object(d.m)(u()(a,i),t);return r.a.createElement(o,Object(s.a)({},l,{className:b}))};h.propTypes=m,h.defaultProps=p,a.a=h},81:function(e,a,t){"use strict";var s=t(4),n=t(5),c=t(0),r=t.n(c),o=t(1),l=t.n(o),i=t(11),u=t.n(i),d=t(12),b={tag:d.q,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},f=function(e){var a=e.className,t=e.cssModule,c=e.color,o=e.body,l=e.inverse,i=e.outline,b=e.tag,f=e.innerRef,m=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(d.m)(u()(a,"card",!!l&&"text-white",!!o&&"card-body",!!c&&(i?"border":"bg")+"-"+c),t);return r.a.createElement(b,Object(s.a)({},m,{className:p,ref:f}))};f.propTypes=b,f.defaultProps={tag:"div"},a.a=f},85:function(e,a,t){"use strict";var s=t(4),n=t(5),c=t(20),r=t(19),o=t(0),l=t.n(o),i=t(1),u=t.n(i),d=t(11),b=t.n(d),f=t(12),m={children:u.a.node,inline:u.a.bool,tag:f.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.submit=t.submit.bind(Object(c.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.inline,r=e.tag,o=e.innerRef,i=Object(n.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(f.m)(b()(a,!!c&&"form-inline"),t);return l.a.createElement(r,Object(s.a)({},i,{ref:o,className:u}))},a}(o.Component);p.propTypes=m,p.defaultProps={tag:"form"},a.a=p},87:function(e,a,t){}}]);
//# sourceMappingURL=78.83634f3c.chunk.js.map