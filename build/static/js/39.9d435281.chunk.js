(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[39],{1133:function(a,e,t){"use strict";t.r(e);var s=t(8),c=t(0),n=(t(64),t(54),t(567)),i=t(59),r=t.n(i),l=t(63),o=t.n(l),u=t(82),d=t(80),j=t(86),p=t(75),m=t(954),b=t(1150),g=t(955),f=t(81),O=t(68),v=t(66),x=t(51),h=t(7),y=t(2),C=t(72),N=t(85),k=t(78),S=t(79),z=t(951),w=t(74),D=t(67),L=t(88),P=t(62),R=t(61),A=t(3),V=function(a){var e=[{value:"ocean",label:"Ocean"},{value:"blue",label:"Blue"},{value:"purple",label:"Purple"},{value:"red",label:"Red"},{value:"orange",label:"Orange"}],t=Object(L.c)({defaultValues:{gender:"gender-female",dob:null}}),n=(t.register,t.errors,t.control,t.setValue,t.trigger,Object(c.useState)("")),i=Object(s.a)(n,2),r=i[0],l=i[1],o=function(a){var e=a.target,t=e.name,s=e.value;l(Object(y.a)(Object(y.a)({},r),{},Object(h.a)({},t,s)))};return Object(A.jsx)(f.a,{children:Object(A.jsx)(C.a,{children:Object(A.jsxs)(N.a,{children:[Object(A.jsx)(k.a,{children:Object(A.jsxs)(S.a,{className:"d-flex",md:{size:15,offset:3},children:[Object(A.jsxs)(z.a,{row:!0,children:[Object(A.jsx)(w.a,{sm:"4",size:"lg",for:"name",children:"Name"}),Object(A.jsx)(S.a,{sm:"8",children:Object(A.jsx)(D.a,{type:"text",name:"name",id:"name",placeholder:"Sub Category Name",onChange:o})})]}),Object(A.jsxs)(z.a,{className:"ml-3",row:!0,children:[Object(A.jsx)(w.a,{sm:"4",size:"lg",for:"country",children:"Category"}),Object(A.jsx)(S.a,{sm:"8",children:Object(A.jsx)(P.a,{name:"category",id:"category",onChange:o,theme:R.b,className:"react-select",classNamePrefix:"select",defaultValue:e[3],options:e,isDisabled:!1,isClearable:!1})})]})]})}),Object(A.jsx)(z.a,{className:"mb-0 mx-auto",row:!0,children:Object(A.jsxs)(S.a,{className:"d-flex",md:{size:8,offset:5},children:[Object(A.jsx)(x.a.Ripple,{className:"mr-1",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),console.log(r),a.handleSubmit(r)},children:"Submit"}),Object(A.jsx)(x.a.Ripple,{outline:!0,color:"secondary",type:"reset",onClick:a.handleCancel,children:"Cancel"})]})})]})})})},F=function(a){console.log(a.data),console.log(a.data);var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],i=t[1],r=function(a){var e=a.target,t=e.name,s=e.value;i(Object(y.a)(Object(y.a)({},n),{},Object(h.a)({},t,s)))};return Object(A.jsx)(f.a,{children:Object(A.jsx)(C.a,{children:Object(A.jsxs)(N.a,{children:[Object(A.jsx)(k.a,{children:Object(A.jsxs)(S.a,{className:"d-flex",md:{size:9,offset:3},children:[Object(A.jsxs)(z.a,{row:!0,md:{size:9,offset:3},children:[Object(A.jsx)(w.a,{sm:"4",size:"lg",for:"name",children:"Name"}),Object(A.jsx)(S.a,{sm:"8",children:Object(A.jsx)(D.a,{type:"text",name:"name",id:"name",defaultValue:a.data.name,placeholder:"Sub Category Name",onChange:r})})]}),Object(A.jsxs)(z.a,{className:"ml-3",row:!0,children:[Object(A.jsx)(w.a,{sm:"5",size:"lg",for:"country",children:"Category"}),Object(A.jsx)(S.a,{sm:"7",children:Object(A.jsxs)(D.a,{type:"select",name:"country",id:"country",defaultValue:a.data.category,onChange:r,children:[Object(A.jsx)("option",{value:"select",children:"Select"}),Object(A.jsx)("option",{value:"inida",children:"India"}),Object(A.jsx)("option",{value:"usa",children:"USA"}),Object(A.jsx)("option",{value:"uk",children:"UK"}),Object(A.jsx)("option",{value:"australia",children:"Australia"}),Object(A.jsx)("option",{value:"vatican city",children:"Vatican City"})]})})]})]})}),Object(A.jsx)(z.a,{className:"mb-0 mx-auto",row:!0,children:Object(A.jsxs)(S.a,{className:"d-flex",md:{size:8,offset:5},children:[Object(A.jsx)(x.a.Ripple,{className:"mr-1",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),console.log(n),a.handleSubmit(n),i("")},children:"Submit"}),Object(A.jsx)(x.a.Ripple,{outline:!0,color:"secondary",type:"reset",onClick:a.handleCancel,children:"Cancel"})]})})]})})})};e.default=function(){console.log(n.a);var a=Object(c.useState)(0),e=Object(s.a)(a,2),t=e[0],i=e[1],l=Object(c.useState)(""),h=Object(s.a)(l,2),y=h[0],C=(h[1],Object(c.useState)([])),N=Object(s.a)(C,2),k=N[0],S=(N[1],Object(c.useState)(0)),z=Object(s.a)(S,2),w=z[0],D=z[1],L=Object(c.useState)(0),P=Object(s.a)(L,2),R=P[0],U=P[1],E=Object(c.useState)({}),I=Object(s.a)(E,2),J=I[0],T=I[1],W=function(a){!0===confirm("Are you sure you want to delete")?console.log(" your record is deleted"):console.log("not deleted ")},_=[{name:"Name",selector:"name",sortable:!0,minWidth:"250px"},{name:"Category",selector:"category",sortable:!1,minWidth:"250px"},{name:"Actions",allowOverflow:!0,cell:function(a){return Object(A.jsxs)("div",{className:"d-flex",children:[Object(A.jsxs)(m.a,{children:[Object(A.jsx)(b.a,{className:"pr-1",tag:"span",children:Object(A.jsx)(u.a,{size:15,onClick:function(a){W()}})}),Object(A.jsx)(g.a,{right:!0,onClick:function(a){W()}})]}),Object(A.jsx)(d.a,{size:15,onClick:function(e){var t;e.preventDefault(),t=a,w||(U(!R),T(t))}})]})}}],B=function(){return Object(A.jsx)(c.Fragment,{children:Object(A.jsx)("span",{className:"align-middle d-none d-md-inline-block"})})},H=function(){return Object(A.jsx)(c.Fragment,{children:Object(A.jsx)("span",{className:"align-middle d-none d-md-inline-block"})})};return Object(A.jsx)(c.Fragment,{children:Object(A.jsxs)(f.a,{children:[Object(A.jsxs)(O.a,{className:"border-bottom",children:[Object(A.jsx)(v.a,{tag:"h4",children:"Sub Category List"}),Object(A.jsxs)(x.a,{className:"ml-2",color:"primary",onClick:function(){R||D(!w)},children:[Object(A.jsx)(j.a,{size:15}),Object(A.jsx)("span",{className:"align-middle ml-50",children:"Add Sub Category"})]})]}),w?Object(A.jsx)(V,{handleCancel:function(){console.log("in Cancel"),D(!w)},handleSubmit:function(a){console.log("in submit",a),D(!w)}}):null,R?Object(A.jsx)(F,{data:J,handleCancel:function(){console.log("in Cancel"),U(!R)},handleSubmit:function(a){console.log("in submit of edit",a),U(!R)}}):null,Object(A.jsx)(o.a,{noHeader:!0,pagination:!0,selectableRowsNoSelectAll:!0,columns:_,className:"react-dataTable",paginationPerPage:7,sortIcon:Object(A.jsx)(p.a,{size:10}),paginationDefaultPage:t+1,paginationComponent:function(){return Object(A.jsx)(r.a,{previousLabel:Object(A.jsx)(B,{size:15}),nextLabel:Object(A.jsx)(H,{size:15}),forcePage:t,onPageChange:function(a){return function(a){i(a.selected)}(a)},pageCount:y.length?k.length/7:n.a.length/7||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination react-paginate pagination-sm justify-content-end pr-1 mt-1"})},data:n.a})]})})}},142:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-9.e2785e7a.jpg"},368:function(a,e,t){var s={"./avatar-s-1.jpg":369,"./avatar-s-10.jpg":370,"./avatar-s-11.jpg":371,"./avatar-s-12.jpg":372,"./avatar-s-13.jpg":373,"./avatar-s-14.jpg":374,"./avatar-s-15.jpg":375,"./avatar-s-16.jpg":376,"./avatar-s-17.jpg":377,"./avatar-s-18.jpg":378,"./avatar-s-19.jpg":379,"./avatar-s-2.jpg":380,"./avatar-s-20.jpg":381,"./avatar-s-21.jpg":382,"./avatar-s-22.jpg":383,"./avatar-s-23.jpg":384,"./avatar-s-24.jpg":385,"./avatar-s-25.jpg":386,"./avatar-s-26.jpg":387,"./avatar-s-3.jpg":388,"./avatar-s-4.jpg":389,"./avatar-s-5.jpg":390,"./avatar-s-6.jpg":391,"./avatar-s-7.jpg":392,"./avatar-s-8.jpg":393,"./avatar-s-9.jpg":142};function c(a){var e=n(a);return t(e)}function n(a){if(!t.o(s,a)){var e=new Error("Cannot find module '"+a+"'");throw e.code="MODULE_NOT_FOUND",e}return s[a]}c.keys=function(){return Object.keys(s)},c.resolve=n,a.exports=c,c.id=368},369:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-1.d383013d.jpg"},370:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-10.79a4ca26.jpg"},371:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-11.1d46cc62.jpg"},372:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-12.09119fd6.jpg"},373:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-13.41f43dab.jpg"},374:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-14.ea440a6a.jpg"},375:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-15.37a99cd4.jpg"},376:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-16.1850b51c.jpg"},377:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-17.ac876056.jpg"},378:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-18.9af4f6d3.jpg"},379:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-19.f39063a2.jpg"},380:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-2.d21f2121.jpg"},381:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-20.40d668f5.jpg"},382:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-21.d383013d.jpg"},383:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-22.d21f2121.jpg"},384:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-23.c1d416e5.jpg"},385:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-24.a649af23.jpg"},386:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-25.301316d5.jpg"},387:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-26.974f64da.jpg"},388:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-3.c1d416e5.jpg"},389:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-4.a649af23.jpg"},390:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-5.301316d5.jpg"},391:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-6.974f64da.jpg"},392:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-7.ba3f6823.jpg"},393:function(a,e,t){"use strict";t.r(e),e.default=t.p+"static/media/avatar-s-8.e9b18971.jpg"},54:function(a,e,t){},567:function(a,e,t){"use strict";t.d(e,"a",(function(){return i}));t(53);var s,c=t(70),n=t.n(c);t(174),t(175),t(289),t(82),t(80),t(953),t(954),t(1150),t(955),t(957),t(3);n.a.get("/api/datatables/initial-data").then((function(a){s=a.data,console.log(s)}));var i=[{name:"subc1",category:"cat1"},{name:"subc2",category:"cat2"},{name:"subc3",category:"cat3"},{name:"subc4",category:"cat4"}]}}]);
//# sourceMappingURL=39.9d435281.chunk.js.map