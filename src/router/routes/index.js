import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Bidoya'

// ** Default Route
const DefaultRoute = '/ccdashboard'

// ** Merge Routes
const Routes = [
  {
    path: '/country',
    component: lazy(() => import('../../views/master/country/Home'))
  },
  {
    path: '/state',
    component: lazy(() => import('../../views/master/state/state'))
  },
  {
    path: '/bidDetails/:id',
    component: lazy(() => import('../../views/master/bids/bidDetails'))
  },
  {
    path: '/productDetails',
    component: lazy(() => import('../../views/master/product/productDetails'))
  },
  {
    path: '/PReviewsle/:id',
    component: lazy(() => import('../../views/master/user/userProfile'))
  },
  {
    path: '/product-category',
    component: lazy(() => import('../../views/master/product/productCategory'))
  },
  {
    path: '/edit',
    component: lazy(() => import('../../views/master/bids/edit'))
  },
  {
    path: '/edit-employee',
    component: lazy(() => import('../../views/master/employee/editEmployee'))
  },
  {
    path: '/backup-accounts',
    component: lazy(() => import('../../views/master/employee/backupAccount'))
  },
  {
    path: '/right-assignment',
    component: lazy(() => import('../../views/master/employee/rightAssignment.js'))
  },
  {
    path: '/vas',
    component: lazy(() => import('../../views/master/vas/vas'))
  },
  {
    path: '/brand',
    component: lazy(() => import('../../views/master/brand/brand'))
  },
  {
    path: '/category-list',
    component: lazy(() => import('../../views/master/category/CategoryList'))
  },
  {
    path: '/employee-list',
    component: lazy(() => import('../../views/master/employee/employeeList'))
  },
  {
    path: '/corporateView',
    component: lazy(() => import('../../views/master/corporate/corporateView'))
  },
  {
    path: '/employeeView',
    component: lazy(() => import('../../views/master/employee/employeeView'))
  },
  {
    path: '/city-list',
    component: lazy(() => import('../../views/master/city/CityList'))
  },
  {
    path: '/sub-category-list',
    component: lazy(() => import('../../views/master/category/subCategory/SubCategoryList'))
  },
  {
    path: '/kyc-document-list',
    component: lazy(() => import('../../views/master/kyc/kycList'))
  },
  {
    path: '/bids',
    component: lazy(() => import('../../views/master/bids/bids'))
  },
  {
    path: '/company-list',
    component: lazy(() => import('../../views/master/company/CompanyList'))
  },
  {
    path: '/warehouse-list',
    component: lazy(() => import('../../views/master/warehouse/warehouseList'))
  },
  {
    path: '/membership-list',
    component: lazy(() => import('../../views/master/membership/membershipList'))
  },
  {
    path: '/bga-list',
    component: lazy(() => import('../../views/master/bankGuaranteeApplication/bgaList'))
  },
  {
    path: '/bga-action',
    component: lazy(() => import('../../views/master/bankGuaranteeApplication/bgaActionForm'))
  },
  {
    path: '/bga-pending-list',
    component: lazy(() => import('../../views/master/bankGuaranteeApplication/bgaPendingList'))
  },
  {
    path: '/edit-bank-guarrante-appl',
    component: lazy(() => import('../../views/master/bankGuaranteeApplication/editBga'))
  },
  {
    path: '/badges-list',
    component: lazy(() => import('../../views/master/badges/badgesList'))
  },
  {
    path: '/edit-warehouse',
    component: lazy(() => import('../../views/master/warehouse/editWarehouse'))
  },
  {
    path: '/edit-badge',
    component: lazy(() => import('../../views/master/badges/editBadge'))
  },
  {
    path: '/edit-membership',
    component: lazy(() => import('../../views/master/membership/editMembership'))
  },
  {
    path: '/on-ground-staff',
    component: lazy(() => import('../../views/master/onGroundStaff/OnGroundStaff'))
  },
  {
    path: '/industry-list',
    component: lazy(() => import('../../views/master/industry/IndustryList'))
  },
  {
    path: '/currency-list',
    component: lazy(() => import('../../views/master/currency/CurrencyList'))
  },
  {
    path: '/losgistics',
    component: lazy(() => import('../../views/master/logistics/logistics'))
  },
  {
    path: '/product-list',
    component: lazy(() => import('../../views/master/product/ProductList'))
  },
  {
    path: '/badge-mapping-list',
    component: lazy(() => import('../../views/master/badgeMapping/badgeMappingList'))
  },
  {
    path: '/pending-product-list',
    component: lazy(() => import('../../views/master/product/pendingProductsList'))
  },
  {
    path: '/financialPartner-list',
    component: lazy(() => import('../../views/master/financialPartner/financialPartnerList'))
  },
  {
    path: '/edit-product',
    component: lazy(() => import('../../views/master/product/editProduct'))
  },
  {
    path: '/add-product',
    component: lazy(() => import('../../views/master/product/add'))
  },
  {
    path: '/add-attribute',
    component: lazy(() => import('../../views/master/Attribute/Attributes/add'))
  },
  {
    path: '/edit-corporate',
    component: lazy(() => import('../../views/master/corporate/editCorporate'))
  },
  {
    path: '/add-corporate-address',
    component: lazy(() => import('../../views/master/corporate/corporateAddressAdd'))
  },
  {
    path: '/corporate-list',
    component: lazy(() => import('../../views/master/corporate/CorporateList'))
  },
  {
    path: '/user-list',
    component: lazy(() => import('../../views/master/user/users'))
  },
  {
    path: '/add-user-address',
    component: lazy(() => import('../../views/master/user/userAddressAdd'))
  },
  {
    path: '/report/ticket-list',
    component: lazy(() => import('../../views/report/tickets/ticketsList'))
  },
  {
    path: '/rfq',
    component: lazy(() => import('../../views/master/RFQ/RFQ'))
  },
  {
    path: '/user-edit',
    component: lazy(() => import('../../views/master/user/add'))
  },
  {
    path: '/master/attribute',
    component: lazy(() => import('../../views/master/Attribute/Attributes/Attributes'))
  },
  {
    path: '/master/subattribute',
    component: lazy(() => import('../../views/master/Attribute/SubAttributes/SubAttributes'))
  },
  {
    path: '/report/review',
    component: lazy(() => import('../../views/report/Reviews/Reviews'))
  },
  {
    path: '/report/redressal',
    component: lazy(() => import('../../views/report/Redressal/Redressal'))
  },
  {
    path: '/report/emails-list',
    component: lazy(() => import('../../views/report/emails/emailsList'))
  },
  {
    path: '/report/sample-request-list',
    component: lazy(() => import('../../views/report/sampleRequest/sampleRequestList'))
  },
  {
    path: '/report/revenue-list',
    component: lazy(() => import('../../views/report/revenue/revenueList'))
  },
  {
    path: '/report/orders-list',
    component: lazy(() => import('../../views/report/Orders/orderList'))
  },
  {
    path: '/report/purchase-intent-list',
    component: lazy(() => import('../../views/report/purchaseIntent/purchaseIntentList'))
  },
  {
    path: '/report/sms-history-list',
    component: lazy(() => import('../../views/report/smsHistory/smsHistoryList'))
  },
  {
    path: '/report/gst-report-list',
    component: lazy(() => import('../../views/report/gstReport/gstReportList'))
  },
  {
    path: '/report/add-email',
    component: lazy(() => import('../../views/report/emails/addEmail'))
  },
  {
    path: '/report/add-sample-request',
    component: lazy(() => import('../../views/report/sampleRequest/addSampleRequest'))
  },
  {
    path: '/report/Invoice',
    component: lazy(() => import('../../views/report/Invoice/Invoice'))
  },
  {
    path: '/Rfq7/rfqN',
    component: lazy(() => import('../../views/Rfq7/rfqN'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  },
  {
    path: '/ccdashboard',
    component: lazy(() => import('../../views/dashboards/call_center'))
  },
  {
    path: '/ogedashbaord',
    component: lazy(() => import('../../views/dashboards/on_ground_executive'))
  },
  {
    path: '/comingSoon',
    component: lazy(() => import('../../views/pages/comingSoon'))
  }
]

export { DefaultRoute, TemplateTitle, Routes }
