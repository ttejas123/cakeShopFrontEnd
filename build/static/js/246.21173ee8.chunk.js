(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[246],{1078:function(e,a,t){"use strict";t.r(a);t(7);var c=t(2),l=t(8),s=t(0),r=(t(53),t(654)),i=t(80),o=t(67),n=t(66),d=t(73),j=t(77),m=t(78),b=t(85),u=t(945),h=t(75),x=t(68),O=t(51),f=t(62),p=t(61),y=t(87),E=(t(592),t(64),t(3));a.default=function(){var e={id:1,name:"",email:"",hasSubscription:"",isVerified:"",logo:"",phone:"",panNumber:"",Currency:[{value:"currency",label:"Indian Rupee"}],City:[{value:"city",label:"Mumbai"}],State:[{value:"state",label:"Maharashtra"}],toEmail:[{value:"toEmail",label:"123@abc.com"}]},a=Object(s.useState)(e),t=Object(l.a)(a,2),v=t[0],g=t[1],N=Object(s.useState)(null),w=Object(l.a)(N,2),S=(w[0],w[1],Object(y.c)({defaultValues:{hasSubscription:"No"}})),T=(S.control,S.setValue,Object(s.useState)(null)),V=Object(l.a)(T,2),C=(V[0],V[1],Object(s.useState)(null)),M=Object(l.a)(C,2),I=M[0];M[1];Object(s.useEffect)((function(){}));return Object(E.jsxs)(i.a,{children:[Object(E.jsx)(o.a,{children:Object(E.jsx)(n.a,{tag:"h1",children:"Edit Application"})}),Object(E.jsx)(d.a,{children:Object(E.jsx)(j.a,{children:Object(E.jsx)(m.a,{sm:"12",children:Object(E.jsx)(b.a,{onSubmit:function(e){return e.preventDefault()},children:Object(E.jsxs)(j.a,{children:[Object(E.jsx)(m.a,{md:"4",sm:"12",children:Object(E.jsxs)(u.a,{children:[Object(E.jsx)(h.a,{for:"toEmail",children:"To Email"}),Object(E.jsx)(f.a,{id:"toEmail",className:"react-select",classNamePrefix:"select",isClearable:!1,options:[{value:"12@abc.com",label:"12@abc.com"},{value:"123@abc.com",label:"123@abc.com"},{value:"1@abc.com",label:"1@abc.com"},{value:"01@abc.com",label:"01@abc.com"},{value:"China@abc.com",label:"China@abc.com"},{value:"Russia@abc.com",label:"Russia@abc.com"}],theme:p.b,value:v.toEmail[0],onChange:function(e){g(Object(c.a)(Object(c.a)({},v),{},{toEmail:e}))}})]})}),Object(E.jsx)(m.a,{md:"4",sm:"12",children:Object(E.jsxs)(u.a,{children:[Object(E.jsx)(h.a,{for:"emailName",children:"Email Name"}),Object(E.jsx)(x.a,{type:"text",id:"emailName",placeholder:"Email Name",defaultValue:I&&I.emailName})]})}),Object(E.jsx)(m.a,{md:"4",sm:"12",children:Object(E.jsxs)(u.a,{children:[Object(E.jsx)(h.a,{for:"emailId",children:"Email Id"}),Object(E.jsx)(x.a,{type:"text",id:"emailId",placeholder:"Email Id",defaultValue:I&&I.emailId})]})}),Object(E.jsx)(m.a,{md:"4",sm:"12",children:Object(E.jsxs)(u.a,{children:[Object(E.jsx)(h.a,{for:"ccEmail",children:"Cc Email"}),Object(E.jsx)(x.a,{type:"text",id:"ccEmail",placeholder:"Cc Emailt",defaultValue:I&&I.ccEmail})]})}),Object(E.jsx)(m.a,{md:"4",sm:"12",children:Object(E.jsxs)(u.a,{children:[Object(E.jsx)(h.a,{for:"bccEmail",children:"Bcc Email"}),Object(E.jsx)(x.a,{type:"text",id:"bccEmail",placeholder:"Bcc Emailt",defaultValue:I&&I.bccEmail})]})}),Object(E.jsx)(m.a,{md:"4",sm:"12",children:Object(E.jsxs)(u.a,{children:[Object(E.jsx)(h.a,{for:"fromEmail",children:"From Email"}),Object(E.jsx)(x.a,{type:"text",id:"fromEmail",placeholder:"From Emailt",defaultValue:I&&I.fromEmail})]})}),Object(E.jsx)(m.a,{md:"4",sm:"12",children:Object(E.jsxs)(u.a,{children:[Object(E.jsx)(h.a,{for:"subject",children:"Subject"}),Object(E.jsx)(x.a,{type:"text",id:"subject",placeholder:"Subjectt",defaultValue:I&&I.subject})]})}),Object(E.jsx)(m.a,{md:"4",sm:"12",children:Object(E.jsxs)(u.a,{children:[Object(E.jsx)(h.a,{for:"priority",children:"Priority"}),Object(E.jsx)(x.a,{type:"text",id:"priority",placeholder:"Priority",defaultValue:I&&I.priority})]})}),Object(E.jsx)(m.a,{md:"4",sm:"12",children:Object(E.jsxs)(u.a,{children:[Object(E.jsx)(h.a,{for:"status",children:"Status"}),Object(E.jsx)(x.a,{type:"text",id:"status",placeholder:"Status",defaultValue:I&&I.status})]})}),Object(E.jsx)(m.a,{md:"12",sm:"12",children:Object(E.jsxs)(u.a,{children:[Object(E.jsx)(h.a,{for:"body",children:"Body"}),Object(E.jsx)("div",{id:"message-editor",children:Object(E.jsx)(r.Editor,{placeholder:"Message",editorClassName:"rounded-0",toolbarClassName:"rounded-0",wrapperClassName:"toolbar-bottom",toolbar:{options:["inline","textAlign"],inline:{inDropdown:!1,options:["bold","italic","underline","strikethrough"]}}})})]})}),Object(E.jsx)(m.a,{md:"4",sm:"12",children:Object(E.jsxs)(u.a,{children:[Object(E.jsx)(h.a,{for:"type",children:"Type"}),Object(E.jsx)(x.a,{type:"text",id:"type",placeholder:"Type",defaultValue:I&&I.type})]})}),Object(E.jsx)(m.a,{md:"4",sm:"12",children:Object(E.jsxs)(u.a,{children:[Object(E.jsx)(h.a,{for:"sentTime",children:"Sent Time"}),Object(E.jsx)(x.a,{type:"text",id:"sentTime",placeholder:"Sent Time",defaultValue:I&&I.sentTime})]})}),Object(E.jsxs)(m.a,{className:"d-flex flex-sm-row flex-column mt-2",sm:"12",children:[Object(E.jsx)(O.a.Ripple,{className:"mb-1 mb-sm-0 mr-0 mr-sm-1",type:"submit",color:"primary",children:"Save Changes"}),Object(E.jsx)(O.a.Ripple,{color:"secondary",outline:!0,children:"Reset"})]})]})})})})})]})}},592:function(e,a,t){},77:function(e,a,t){"use strict";var c=t(4),l=t(5),s=t(0),r=t.n(s),i=t(1),o=t.n(i),n=t(11),d=t.n(n),j=t(12),m=o.a.oneOfType([o.a.number,o.a.string]),b={tag:j.q,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},u={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e){var a=e.className,t=e.cssModule,s=e.noGutters,i=e.tag,o=e.form,n=e.widths,m=Object(l.a)(e,["className","cssModule","noGutters","tag","form","widths"]),b=[];n.forEach((function(a,t){var c=e[a];if(delete m[a],c){var l=!t;b.push(l?"row-cols-"+c:"row-cols-"+a+"-"+c)}}));var u=Object(j.m)(d()(a,s?"no-gutters":null,o?"form-row":"row",b),t);return r.a.createElement(i,Object(c.a)({},m,{className:u}))};h.propTypes=b,h.defaultProps=u,a.a=h},78:function(e,a,t){"use strict";var c=t(4),l=t(5),s=t(0),r=t.n(s),i=t(1),o=t.n(i),n=t(11),d=t.n(n),j=t(12),m=o.a.oneOfType([o.a.number,o.a.string]),b=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:m,offset:m})]),u={tag:j.q,xs:b,sm:b,md:b,lg:b,xl:b,className:o.a.string,cssModule:o.a.object,widths:o.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},x=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},O=function(e){var a=e.className,t=e.cssModule,s=e.widths,i=e.tag,o=Object(l.a)(e,["className","cssModule","widths","tag"]),n=[];s.forEach((function(a,c){var l=e[a];if(delete o[a],l||""===l){var s=!c;if(Object(j.k)(l)){var r,i=s?"-":"-"+a+"-",m=x(s,a,l.size);n.push(Object(j.m)(d()(((r={})[m]=l.size||""===l.size,r["order"+i+l.order]=l.order||0===l.order,r["offset"+i+l.offset]=l.offset||0===l.offset,r)),t))}else{var b=x(s,a,l);n.push(b)}}})),n.length||n.push("col");var m=Object(j.m)(d()(a,n),t);return r.a.createElement(i,Object(c.a)({},o,{className:m}))};O.propTypes=u,O.defaultProps=h,a.a=O}}]);
//# sourceMappingURL=246.21173ee8.chunk.js.map