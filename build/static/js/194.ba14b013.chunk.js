(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[194],{1049:function(e,t,a){"use strict";a.r(t);var s=a(7),n=a(8),r=a(2),i=a(21),c=a(53),o=a(60),l=(a(64),a(54),a(0)),m=a(61),d=a(186),u=a(62),b=a(59),g=a.n(b),h=a(63),j=a.n(h),p=a(174),C=a(175),x=a(289),f=a(75),N=a(954),O=a(1150),S=a(955),y=a(957),v=a(122),G=a(118),T=a(119),w=a(951),k=a(74),W=a(67),L=a(285),D=a(51),P=a(81),I=a(68),R=a(66),_=a(72),M=a(78),z=a(79),U=a(3),B=Object(l.forwardRef)((function(e,t){var a=e.onClick,s=Object(i.a)(e,["onClick"]);return Object(U.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(U.jsx)("input",Object(r.a)({type:"checkbox",className:"custom-control-input",ref:t},s)),Object(U.jsx)("label",{className:"custom-control-label",onClick:a})]})})),A=[{value:"",label:"Filter Status"},{value:"productName",label:"Product Name"},{value:"mrp",label:"MRP"},{value:"gst",label:"GSt"},{value:"category",label:"Category"},{value:"subCategory",label:"Sub Category"},{value:"productCategory",label:"Product Category"}];t.default=function(){var e=Object(l.useState)(!1),t=Object(n.a)(e,2),a=t[0],r=t[1],i=Object(l.useState)(0),b=Object(n.a)(i,2),h=b[0],J=b[1],F=Object(l.useState)(""),H=Object(n.a)(F,2),E=H[0],q=H[1],K=Object(l.useState)([]),Q=Object(n.a)(K,2),V=Q[0],X=Q[1],Y=Object(l.useState)(""),Z=Object(n.a)(Y,2),$=(Z[0],Z[1],Object(l.useState)("")),ee=Object(n.a)($,2),te=ee[0],ae=ee[1],se=function(e){var t=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return e.avatar.length?Object(U.jsx)(c.a,{className:"mr-1",img:e.avatar,width:"32",height:"32"}):Object(U.jsx)(c.a,{color:t||"primary",className:"mr-1",content:e.Name||"John Doe",initials:!0,status:"online"})},ne=[{name:"BUIN",selector:"buin",sortable:!0,minWidth:"50px"},{name:"Name",selector:"name",sortable:!0,minWidth:"150px",cell:function(e){return Object(U.jsx)("div",{className:"d-flex align-items-center",children:Object(U.jsx)(o.b,{to:"/productDetails/".concat(e.id),children:Object(U.jsx)("div",{className:"user-info text-truncate",children:Object(U.jsx)("span",{className:"d-block font-weight-bold text-truncate",children:e.name})})})},e.id)}},{name:"EAN UPC Code",selector:"ean_upc_code",sortable:!0,minWidth:"150px"},{name:"Category",selector:"category",sortable:!0,minWidth:"150px"},{name:"Sub Category",selector:"subCategory",sortable:!0,minWidth:"150px"},{name:"Product Category",selector:"productCategory",sortable:!0,minWidth:"150px"},{name:"Hsn Code",selector:"hsnCode",sortable:!0,minWidth:"150px"},{name:"gst(Number)%",selector:"gstNumber",sortable:!0,minWidth:"150px"},{name:"MRP",selector:"mrp",sortable:!0,minWidth:"150px"},{name:"Description",selector:"description",sortable:!0,minWidth:"150px"},{name:"User",minWidth:"150px",selector:"Name",sortable:!0,cell:function(e){return Object(U.jsx)("div",{className:"d-flex justify-content-left align-items-center",children:se(e)})}},{name:"Actions",allowOverflow:!0,cell:function(e){return Object(U.jsx)("div",{className:"d-flex",children:Object(U.jsxs)(N.a,{children:[Object(U.jsx)(O.a,{className:"pr-1",tag:"span",children:Object(U.jsx)(p.a,{size:15})}),Object(U.jsxs)(S.a,{right:!0,children:[Object(U.jsxs)(y.a,{children:[Object(U.jsx)(C.a,{size:15}),Object(U.jsx)("span",{className:"align-middle ml-50",children:"Approve"})]}),Object(U.jsxs)(y.a,{onClick:function(t){t.preventDefault(),e.id,r(!a)},children:[Object(U.jsx)(x.a,{size:15}),Object(U.jsx)("span",{className:"align-middle ml-50",children:"Reject"})]})]})]})})}}];return Object(U.jsxs)(l.Fragment,{children:[Object(U.jsxs)(v.a,{isOpen:a,toggle:function(){return r(!a)},className:"modal-dialog-centered",children:[Object(U.jsx)(G.a,{toggle:function(){return r(!a)},children:"Reject"}),Object(U.jsx)(T.a,{children:Object(U.jsxs)(w.a,{children:[Object(U.jsx)(k.a,{for:"reason",children:"Reason:"}),Object(U.jsx)(W.a,{type:"textarea",id:"reason",placeholder:"Reason for Rejection"})]})}),Object(U.jsxs)(L.a,{children:[Object(U.jsx)(D.a,{color:"primary",onClick:function(){return r(!a)},children:"Submit"})," "]})]}),Object(U.jsxs)(P.a,{children:[Object(U.jsx)(I.a,{children:Object(U.jsx)(R.a,{tag:"h4",children:"Search Filter"})}),Object(U.jsx)(_.a,{children:Object(U.jsx)(M.a,{children:Object(U.jsx)(z.a,{md:"4",children:Object(U.jsx)(u.a,{isClearable:!1,theme:m.b,className:"react-select",classNamePrefix:"select",options:A,value:te,onChange:function(e){!function(e){var t=[];ae(e),console.log(e.value);var a="l";a=e.value,q(a),a.length&&(t=d.b.filter((function(e){var t=e.BidStatus[0].value.toLowerCase().startsWith(a.toLowerCase()),s=e.BidStatus[0].value.toLowerCase().includes(a.toLowerCase());return t||(!t&&s?s:null)})),X(t),ae(e))}(e)}})})})})]}),Object(U.jsxs)(P.a,{children:[Object(U.jsxs)(I.a,{className:"flex-md-row flex-column align-md-items-center align-items-start border-bottom",children:[Object(U.jsx)(R.a,{tag:"h4",children:"Products"}),Object(U.jsx)("div",{className:"d-flex mt-md-0 mt-1"})]}),Object(U.jsx)(M.a,{className:"justify-content-end mx-0",children:Object(U.jsxs)(z.a,{className:"d-flex align-items-center justify-content-end mt-1",md:"6",sm:"12",children:[Object(U.jsx)(k.a,{className:"mr-1",for:"search-input",children:"Search"}),Object(U.jsx)(W.a,{className:"dataTable-filter mb-50",type:"text",bsSize:"sm",id:"search-input",value:E,onChange:function(e){var t=e.target.value,a=[];q(t),t.length&&(a=d.b.filter((function(e){e.NoOfBidder.toString();var a=e.productName.toLowerCase().startsWith(t.toLowerCase())||e.mrp.toLowerCase().startsWith(t.toLowerCase())||e.gst.toLowerCase().startsWith(t.toLowerCase());console.log(a);var s=e.productName.toLowerCase().includes(t.toLowerCase())||e.mrp.toLowerCase().includes(t.toLowerCase())||e.gst.toLowerCase().includes(t.toLowerCase());return a||(!a&&s?s:null)})),X(a),q(t))}})]})}),Object(U.jsx)(j.a,{noHeader:!0,pagination:!0,selectableRows:!0,columns:ne,paginationPerPage:7,className:"react-dataTable",sortIcon:Object(U.jsx)(f.a,{size:10}),paginationDefaultPage:h+1,paginationComponent:function(){var e;return Object(U.jsx)(g.a,(e={previousLabel:"",nextLabel:"",forcePage:h,onPageChange:function(e){return function(e){J(e.selected)}(e)},pageCount:E.length?V.length/7:d.b.length/7||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(s.a)(e,"breakClassName","page-item"),Object(s.a)(e,"breakLinkClassName","page-link"),Object(s.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:E.length?V:d.b,selectableRowsComponent:B})]})]})}},186:function(e,t,a){"use strict";a.d(t,"b",(function(){return g})),a.d(t,"c",(function(){return h})),a.d(t,"a",(function(){return j}));var s=a(55),n=a(57),r=a(56),i=(a(58),a(53)),c=a(60),o=a(82),l=a(80),m=(a(174),a(175),a(289),a(954)),d=a(1150),u=(a(955),a(957),a(3)),b=function(e){var t=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return e.avatar.length?Object(u.jsx)(i.a,{className:"mr-1",img:e.avatar,width:"32",height:"32"}):Object(u.jsx)(i.a,{color:t||"primary",className:"mr-1",content:e.Name||"John Doe",initials:!0,status:"online"})},g=[{buin:1,name:"Shirt",ean_upc_code:12334,category:"Clothing",subCategory:"subClothing",productCategory:"cat1",hsnCode:231,sGstNumber:"18 %",iGstNumber:"10 %",cGstNumber:"20 %",mrp:234,status:[{value:"approved",label:"approved"}],description:"dfsghjfhsjhe",avatar:n.default},{buin:2,name:"T-Shirt",ean_upc_code:1233456,category:"Clothing",subCategory:"subClothing",productCategory:"cat2",hsnCode:2310,status:[{value:"pending",label:"pending"}],sGstNumber:"18 %",iGstNumber:"10 %",cGstNumber:"20 %",description:"dfsghjfhfgbf",avatar:s.default},{buin:3,name:"Denim",ean_upc_code:12,category:"Clothing",subCategory:"subClothing",productCategory:"cat3",status:[{value:"approved",label:"approved"}],hsnCode:21,sGstNumber:"18 %",iGstNumber:"10 %",cGstNumber:"20 %",mrp:23,description:"abcdsjhe",avatar:r.default},{buin:4,name:"Trusers",ean_upc_code:12,category:"Clothing",subCategory:"subClothing",productCategory:"cat4",status:[{value:"pending",label:"pending"}],hsnCode:2310,sGstNumber:"18 %",iGstNumber:"10 %",cGstNumber:"20 %",mrp:2134,description:"abcddfsghjfhsjhe",avatar:""}],h=[{Category:"Convenience",SubCategory:"Shopping",DefaultCommission:14,CGST:12,IGST:8,SGST:12,Name:"shoes",id:1},{Category:"Speciality",SubCategory:"Sports cars",DefaultCommission:11,CGST:12,IGST:8,SGST:8,Name:"BMW",id:2},{Category:"Shopping",SubCategory:"Clothes",DefaultCommission:10,CGST:12,IGST:8,SGST:5,Name:"T-shirt's",id:3},{Category:"Unsought",SubCategory:"Survival gears",DefaultCommission:4,CGST:12,IGST:8,SGST:18,Name:"J5 Tactical 300",id:4},{Category:"Commodity",SubCategory:"Metals",DefaultCommission:20,CGST:12,IGST:8,SGST:22,Name:"Gold",id:5},{Category:"Speciality",SubCategory:"designer clothing",DefaultCommission:11,CGST:12,IGST:8,SGST:6,Name:"Guccy",id:6},{Category:"Shopping",SubCategory:"furniture",DefaultCommission:14,CGST:12,IGST:8,SGST:12,Name:"Glass",id:7},{Category:"Convenience",SubCategory:"Print media",DefaultCommission:7,CGST:12,IGST:8,SGST:11,Name:"MasterCard",id:8}],j=[{name:"BUIN",selector:"buin",sortable:!0,minWidth:"50px"},{name:"Name",selector:"name",sortable:!0,minWidth:"150px"},{name:"EAN UPC Code",selector:"ean_upc_code",sortable:!0,minWidth:"150px"},{name:"Category",selector:"category",sortable:!0,minWidth:"150px"},{name:"Sub Category",selector:"subCategory",sortable:!0,minWidth:"150px"},{name:"Product Category",selector:"productCategory",sortable:!0,minWidth:"150px"},{name:"Hsn Code",selector:"hsnCode",sortable:!0,minWidth:"150px"},{name:"SGST",selector:"sGstNumber",sortable:!0,minWidth:"150px"},{name:"IGST",selector:"iGstNumber",sortable:!0,minWidth:"150px"},{name:"CGST",selector:"cGstNumber",sortable:!0,minWidth:"150px"},{name:"MRP \u20b9",selector:"mrp",sortable:!0,minWidth:"150px"},{name:"Description",selector:"description",sortable:!0,minWidth:"150px"},{name:"User",minWidth:"150px",selector:"Name",sortable:!0,cell:function(e){return Object(u.jsx)("div",{className:"d-flex justify-content-left align-items-center",children:b(e)})}},{name:"Actions",allowOverflow:!0,cell:function(e){return Object(u.jsxs)("div",{className:"d-flex",children:[Object(u.jsx)(m.a,{children:Object(u.jsx)(d.a,{className:"pr-1",tag:"span",children:Object(u.jsx)(o.a,{size:15,onClick:function(t){t.preventDefault(),deleteCountry(e.id)}})})}),Object(u.jsx)(c.b,{to:"/edit-product/".concat(e.id),children:Object(u.jsx)(l.a,{size:15,onClick:function(){},children:Object(u.jsx)(c.b,{to:"/edit-product"})})})]})}}]},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/komal.71eab2e7.jpg"},56:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/himanshu.db95087a.jpg"},57:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/pravin.5a89c6c3.jpg"},58:function(e,t,a){"use strict";t.a=a.p+"static/media/reethika.147b588d.jpg"}}]);
//# sourceMappingURL=194.ba14b013.chunk.js.map