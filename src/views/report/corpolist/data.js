
import komal  from '../../../assets/images/logo/komal.jpg'
import pravin  from '../../../assets/images/logo/pravin.jpg'
import himanshu  from '../../../assets/images/logo/himanshu.jpg'
import reethika  from '../../../assets/images/logo/reethika.jpg'


//expot data
export const data = [
      {
        corporateName: "TCS",
        companyType: "Pvt Ltd",
        industry: "IT",
        email: "TCS@xyz.com",
        countryCode: "+91",
        phone: 8546736543,
        state: "MH",
        city: "Mumbai",
        isVerified : "Yes",
        hasSubscription: 0,
        avatar: pravin,
        verifiedBy: "King",
        createdBy: "John Cena"
      },
      {
        corporateName: "Infosys",
        companyType: "Pvt Ltd",
        industry: "IT",
        email: "Infosys@xyz.com",
        countryCode: "+91",
        phone: 854672453,
        state: "MH",
        city: "Mumbai",
        isVerified : "Yes",
        hasSubscription: 0,
        avatar: pravin,
        verifiedBy: "Randy Orton",
        createdBy: "John Cena"
      },
      {
        corporateName: "Accenture",
        companyType: "Pvt Ltd",
        industry: "IT",
        email: "Accenture@xyz.com",
        countryCode: "441",
        phone: 8546736543,
        state: "Hamilton",
        city: "Bermuda",
        isVerified : "Yes",
        hasSubscription: 0,
        avatar: pravin,
        verifiedBy: "King",
        createdBy: "John Cena"
      },
      {
        corporateName: "Nike",
        companyType: "Pvt Ltd",
        industry: "Footwear",
        email: "Nike@xyz.com",
        countryCode: "+91",
        phone: 8546736523,
        state: "MH",
        city: "Mumbai",
        isVerified : "Yes",
        hasSubscription: 0,
        avatar: pravin,
        verifiedBy: "Ranveer",
        createdBy: "Bahubali"
      },
      {
        corporateName: "Coense",
        companyType: "Pvt Ltd",
        industry: "IT",
        email: "Coense@xyz.com",
        countryCode: "+91",
        phone: 8546736543,
        state: "MH",
        city: "Mumbai",
        isVerified : "Yes",
        hasSubscription: 0,
        avatar: pravin,
        verifiedBy: "King",
        createdBy: "John Cena"
      }
]

export const columns = [
  {
    name: 'Corporate Name',
    selector: 'corporateName',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Comapny Type',
    selector: 'companyType',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Industry',
    selector: 'industry',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Contact Email',
    selector: 'email',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Country Code',
    selector: 'countryCode',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Phone',
    selector: 'phone',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'State',
    selector: 'state',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'City',
    selector: 'city',
    sortable: true,
    minWidth: '150px'
  },
  {
      name: 'Is Verified',
      selector: 'isVerified',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'Has Subscription',
      selector: 'hasSubscription',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'Verified By',
      selector: 'verifiedBy',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'Created By',
      selector: 'createdBy',
      sortable: true,
      minWidth: '150px'
    }
  // {
  //   name: 'Actions',
  //   allowOverflow: true,
  //   cell: row => {
  //     return (
  //       <div className='d-flex'>
  //         <UncontrolledDropdown>
  //           <DropdownToggle className='pr-1' tag='span'>
  //             <Trash size={15} onClick={e => {
  //                                                                             e.preventDefault()
  //                                                                             deleteCountry(row.id)
  //                                                                           } }/>
  //           </DropdownToggle>
  //         </UncontrolledDropdown>

  //         <Link  to={`/edit-corporate/${row.id}`}><Edit  
  //           size={15} 
  //           onClick={ () => { 
  //                             setCurrentId(row.id)
  //                             setModal(true)
  //                              } }>
  //                                <Link to='/edit-product'/>
  //                              </Edit></Link>
  //       </div>
  //     )
  //   }
  // }
]
