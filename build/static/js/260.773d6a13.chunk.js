(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[260],{1083:function(e,a,n){"use strict";n.r(a);var t=n(8),s=n(0),i=(n(64),n(54),n(593)),r=(n(53),n(59)),l=n.n(r),c=n(63),o=n.n(c),d=n(969),m=n(1004),b=n(154),j=n(789),u=n(646),p=n(1005),x=n(72),O=n(80),h=n(67),g=n(66),I=n(698),f=n(1142),D=n(949),S=n(951),N=n(3);a.default=function(){var e=Object(s.useState)(0),a=Object(t.a)(e,2),n=a[0],r=a[1],c=Object(s.useState)(""),R=Object(t.a)(c,2),k=R[0],v=(R[1],Object(s.useState)([])),C=Object(t.a)(v,2),P=C[0],w=(C[1],Object(s.useState)(0)),z=Object(t.a)(w,2),B=(z[0],z[1],Object(s.useState)(0)),y=Object(t.a)(B,2),A=(y[0],y[1],Object(s.useState)({})),L=Object(t.a)(A,2),W=(L[0],L[1],function(){return Object(N.jsx)(s.Fragment,{children:Object(N.jsx)("span",{className:"align-middle d-none d-md-inline-block"})})}),E=function(){return Object(N.jsx)(s.Fragment,{children:Object(N.jsx)("span",{className:"align-middle d-none d-md-inline-block"})})};function T(e){var a=document.createElement("a"),n=function(e){var a,n=Object.keys(i.b[0]);return a="",a+=n.join(","),a+="\n",e.forEach((function(e){var t=0;n.forEach((function(n){t>0&&(a+=","),a+=e[n],t++})),a+="\n"})),a}(e);if(null!==n){n.match(/^data:text\/csv/i)||(n="data:text/csv;charset=utf-8,".concat(n)),a.setAttribute("href",encodeURI(n)),a.setAttribute("download","export.csv"),a.click()}}return Object(N.jsx)(s.Fragment,{children:Object(N.jsxs)(O.a,{children:[Object(N.jsxs)(h.a,{className:"border-bottom",children:[Object(N.jsx)(g.a,{tag:"h4",children:"Seller Sale Denial Reports"}),Object(N.jsx)("div",{className:"d-flex mt-md-0 mt-1",children:Object(N.jsxs)(I.a,{children:[Object(N.jsxs)(f.a,{color:"secondary",caret:!0,outline:!0,children:[Object(N.jsx)(d.a,{size:15}),Object(N.jsx)("span",{className:"align-middle ml-50",children:"Export"})]}),Object(N.jsxs)(D.a,{right:!0,children:[Object(N.jsxs)(S.a,{className:"w-100",children:[Object(N.jsx)(m.a,{size:15}),Object(N.jsx)("span",{className:"align-middle ml-50",children:"Print"})]}),Object(N.jsxs)(S.a,{className:"w-100",onClick:function(){return T(i.b)},children:[Object(N.jsx)(b.a,{size:15}),Object(N.jsx)("span",{className:"align-middle ml-50",children:"CSV"})]}),Object(N.jsxs)(S.a,{className:"w-100",children:[Object(N.jsx)(j.a,{size:15}),Object(N.jsx)("span",{className:"align-middle ml-50",children:"Excel"})]}),Object(N.jsxs)(S.a,{className:"w-100",children:[Object(N.jsx)(u.a,{size:15}),Object(N.jsx)("span",{className:"align-middle ml-50",children:"PDF"})]}),Object(N.jsxs)(S.a,{className:"w-100",children:[Object(N.jsx)(p.a,{size:15}),Object(N.jsx)("span",{className:"align-middle ml-50",children:"Copy"})]})]})]})})]}),Object(N.jsx)(o.a,{noHeader:!0,pagination:!0,selectableRowsNoSelectAll:!0,columns:[{name:"Bid Id",selector:"bidId",sortable:!0,minWidth:"80px"},{name:"Seller Information",selector:"sellerInformation",sortable:!0,minWidth:"80px"},{name:"PI Send Date",selector:"piSendDate",sortable:!0,minWidth:"80px"},{name:"Denial Date",selector:"denialDate",sortable:!0,minWidth:"80px"},{name:"Reason",selector:"reason",sortable:!0,minWidth:"80px"},{name:"Order Id",selector:"orderId",sortable:!0,minWidth:"80px"}],className:"react-dataTable",paginationPerPage:7,sortIcon:Object(N.jsx)(x.a,{size:10}),paginationDefaultPage:n+1,paginationComponent:function(){return Object(N.jsx)(l.a,{previousLabel:Object(N.jsx)(W,{size:15}),nextLabel:Object(N.jsx)(E,{size:15}),forcePage:n,onPageChange:function(e){return function(e){r(e.selected)}(e)},pageCount:k.length?P.length/7:i.b.length/7||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination react-paginate pagination-sm justify-content-end pr-1 mt-1"})},data:i.b})]})})}},54:function(e,a,n){},593:function(e,a,n){"use strict";n.d(a,"a",(function(){return t})),n.d(a,"b",(function(){return s}));var t=[{bidId:"BID1",sellerInformation:"Pravin Poshmani",requestSendDate:"01-05-2021",reason:"Some Random Reason",denialDate:"02-05-2021"},{sellerInformation:"Tejas Thakare",bidId:"BID2",requestSendDate:"02-05-2021",reason:"Some Random Reason",denialDate:"03-05-2021"},{sellerInformation:"Komal Kamble",bidId:"BID3",requestSendDate:"03-05-2021",reason:"Some Random Reason",denialDate:"04-05-2021"},{sellerInformation:"Allu Arjun",bidId:"BID4",requestSendDate:"04-05-2021",reason:"Some Random Reason",denialDate:"05-05-2021"}],s=[{bidId:"BID1",sellerInformation:"Pravin Poshmani",piSendDate:"01-05-2021",reason:"Some Random Reason",denialDate:"02-05-2021",orderId:"Order1"},{sellerInformation:"Tejas Thakare",bidId:"BID2",piSendDate:"02-05-2021",reason:"Some Random Reason",denialDate:"03-05-2021",orderId:"Order2"},{sellerInformation:"Komal Kamble",bidId:"BID3",piSendDate:"03-05-2021",reason:"Some Random Reason",denialDate:"04-05-2021",orderId:"Order3"},{sellerInformation:"Allu Arjun",bidId:"BID4",piSendDate:"04-05-2021",reason:"Some Random Reason",denialDate:"05-05-2021",orderId:"Order4"}]}}]);
//# sourceMappingURL=260.773d6a13.chunk.js.map