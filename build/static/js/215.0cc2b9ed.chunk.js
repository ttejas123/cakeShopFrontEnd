(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[215],{1140:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a(7),n=a(8),l=a(53),c=(a(69),a(60)),r=(a(64),a(54),a(61),a(55),a(57),a(56),a(58),[{id:1,Employee_Name:"Komal Kamble",Client:"Umang Shah",Employee_Email:"komal@gmail.com",Client_Email:"umang@gmail.com",PIN:"9817",Activiy_Time:"12 Jun 2021 4 PM",Duration:"1 Hr",Activity:["Created Bid #123","Requested Customization "],avatar:""},{id:1,Employee_Name:"Mehul bandra",Client:"Himanshu Patel",Employee_Email:"mehu@gmail.com",Client_Email:"himanshu@gmail.com",PIN:"1178",Activiy_Time:"14 Jun 2021 3 PM",Duration:"2 Hr",Activity:["Requested Customization"],avatar:""},{id:1,Employee_Name:"Mehul bandra",Client:"Himanshu Patel",Employee_Email:"mehu@gmail.com",Client_Email:"himanshu@gmail.com",PIN:"1158",Activiy_Time:"14 Jun 2021 3 PM",Duration:"1 Hr",Activity:["Update Lead Time"],avatar:""},{id:1,Employee_Name:"Pravin Shah",Client:"Surjya Patil",Employee_Email:"pravin@gmail.com",Client_Email:"surjya@gmail.com",PIN:"1290",Activiy_Time:"15 Jun 2021 3 PM",Duration:"1 Hr",Activity:["Updated Product info"],avatar:""}]),o=a(59),m=a.n(o),d=a(63),u=a.n(d),b=a(72),j=a(80),h=a(67),g=a(66),p=a(77),x=a(78),f=a(75),C=a(68),v=a(3),O=function(e){var t=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return e.avatar.length?Object(v.jsxs)(c.b,{to:"/bidDetails/".concat(e.id),children:[" ",Object(v.jsx)(l.a,{className:"mr-1",img:e.avatar,width:"32",height:"32"})," "]}):Object(v.jsxs)(c.b,{to:"/bidDetails/".concat(e.id),children:[Object(v.jsx)(l.a,{color:t||"primary",className:"mr-1",content:e.Employee_Name||"John Doe",initials:!0,status:"online"})," "]})},N=function(e){var t=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return e.avatar.length?Object(v.jsxs)(c.b,{to:"/bidDetails/".concat(e.id),children:[" ",Object(v.jsx)(l.a,{className:"mr-1",img:e.avatar,width:"32",height:"32"})," "]}):Object(v.jsxs)(c.b,{to:"/bidDetails/".concat(e.id),children:[Object(v.jsx)(l.a,{color:t||"primary",className:"mr-1",content:e.Client||"John Doe",initials:!0,status:"online"})," "]})},y=function(){var e,t=Object(i.useState)(!1),a=Object(n.a)(t,2),l=(a[0],a[1],Object(i.useState)(0)),c=Object(n.a)(l,2),o=c[0],d=c[1],y=Object(i.useState)(""),w=Object(n.a)(y,2),L=w[0],E=w[1],P=Object(i.useState)([]),_=Object(n.a)(P,2),k=_[0],D=_[1],A=Object(i.useState)(""),S=Object(n.a)(A,2),W=(S[0],S[1],Object(i.useState)("")),M=Object(n.a)(W,2),T=(M[0],M[1],[{name:"Employee",minWidth:"250px",selector:"Employee_Name",sortable:!0,cell:function(e){return Object(v.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[O(e),Object(v.jsx)("div",{className:"",children:Object(v.jsxs)("div",{className:"user-info text-truncate d-flex flex-column",children:[Object(v.jsx)("span",{className:"font-weight-bold",children:e.Employee_Name}),Object(v.jsx)("small",{className:"text-truncate text-muted mb-0",children:e.Employee_Email})]})})]})}},{name:"Client",minWidth:"250px",selector:"Client",sortable:!0,cell:function(e){return Object(v.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[N(e),Object(v.jsx)("div",{className:"",children:Object(v.jsxs)("div",{className:"user-info text-truncate d-flex flex-column",children:[Object(v.jsx)("span",{className:"font-weight-bold",children:e.Client}),Object(v.jsxs)("small",{className:"text-truncate text-muted mb-0",children:["@",e.Client_Email]})]})})]})}},{name:"Activity",selector:"Activity",minWidth:"150px",cell:function(e){return Object(v.jsx)("div",{className:"d-flex justify-content-left align-items-center",children:Object(v.jsx)("div",{className:"d-flex flex-column",children:Object(v.jsx)("span",{className:"font-weight-bold",children:e.Activity[0]})})})}},{name:"PIN",selector:"PIN",sortable:!0,minWidth:"150px"},{name:"Activiy Time",selector:"Activiy_Time",sortable:!0,minWidth:"150px"},{name:"Duration",selector:"Duration",sortable:!0,minWidth:"150px"}]);return Object(v.jsx)(i.Fragment,{children:Object(v.jsxs)(j.a,{children:[Object(v.jsx)(h.a,{className:"flex-md-row flex-column align-md-items-center align-items-start border-bottom",children:Object(v.jsx)(g.a,{tag:"h4",children:"PIN Access Report"})}),Object(v.jsx)(p.a,{className:"justify-content-end mx-0",children:Object(v.jsxs)(x.a,{className:"d-flex align-items-center justify-content-end mt-1",md:"6",sm:"12",children:[Object(v.jsx)(f.a,{className:"mr-1",for:"search-input",children:"Search"}),Object(v.jsx)(C.a,{className:"dataTable-filter mb-50",type:"text",bsSize:"sm",id:"search-input",value:L,onChange:function(e){var t=e.target.value,a=[];E(t),t.length&&(a=r.filter((function(e){var a=e.Name.toLowerCase().startsWith(t.toLowerCase())||e.customizations.toLowerCase().startsWith(t.toLowerCase())||e.deliveryDate.toLowerCase().startsWith(t.toLowerCase())||e.Category[0].label.toLowerCase().startsWith(t.toLowerCase())||e.subCategory[0].label.toLowerCase().startsWith(t.toLowerCase()),i=e.Name.toLowerCase().includes(t.toLowerCase())||e.customizations.toLowerCase().includes(t.toLowerCase())||e.deliveryDate.toLowerCase().includes(t.toLowerCase())||e.Category[0].label.toLowerCase().includes(t.toLowerCase())||e.subCategory[0].label.toLowerCase().includes(t.toLowerCase());return a||(!a&&i?i:null)})),D(a),E(t))}})]})}),Object(v.jsx)(u.a,(e={noHeader:!0,pagination:!0,responsive:!0,paginationServer:!0,className:"react-dataTable",defaultSortField:"invoiceId",columns:T,paginationPerPage:7},Object(s.a)(e,"className","react-dataTable"),Object(s.a)(e,"sortIcon",Object(v.jsx)(b.a,{size:10})),Object(s.a)(e,"paginationDefaultPage",o+1),Object(s.a)(e,"paginationComponent",(function(){var e;return Object(v.jsx)(m.a,(e={previousLabel:"",nextLabel:"",forcePage:o,onPageChange:function(e){return function(e){d(e.selected)}(e)},pageCount:L.length?k.length/7:r.length/7||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(s.a)(e,"breakClassName","page-item"),Object(s.a)(e,"breakLinkClassName","page-link"),Object(s.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))})),Object(s.a)(e,"data",L.length?k:r),e))]})})};t.default=function(){return Object(v.jsx)("div",{children:Object(v.jsx)(y,{})})}},54:function(e,t,a){},55:function(e,t,a){"use strict";t.a=a.p+"static/media/komal.71eab2e7.jpg"},56:function(e,t,a){"use strict";t.a=a.p+"static/media/himanshu.db95087a.jpg"},57:function(e,t,a){"use strict";t.a=a.p+"static/media/pravin.5a89c6c3.jpg"},58:function(e,t,a){"use strict";t.a=a.p+"static/media/reethika.147b588d.jpg"}}]);
//# sourceMappingURL=215.0cc2b9ed.chunk.js.map