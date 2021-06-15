// ** Custom Components
import Avatar from '@components/avatar'
//import { DropDownList } from '@progress/kendo-react-dropdowns'
// ** Third Party Components
import axios from 'axios'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** React Imports
import { Fragment, useState, forwardRef } from 'react'
import { selectThemeColors } from '@utils'
// ** Table Data & Columns
import { data } from './data'
import Select from 'react-select'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, File, Grid, Copy, Plus, MoreVertical, Edit, FileText, Archive, Eye  } from 'react-feather'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Label,
  Row,
  Col,
  Badge, UncontrolledDropdown
} from 'reactstrap'

// ** Renders Client Columns
const renderSeller = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.sellers_avatar.length) {
    return <Avatar className='mr-1' img={row.sellers_avatar} width='32' height='32'  />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.Seller_Info || 'John Doe'} initials status="online" />
  }
}

// ** Renders Client Columns
const renderBuyer = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.buyer_avatar.length) {
    return <Avatar className='mr-1' img={row.buyer_avatar} width='32' height='32'  />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.buyer_Info || 'John Doe'} initials status="online" />
  }
}

const DataTableWithButtons = () => {
  const statusObj = {
        pending: 'light-secondary',
        send: 'light-success',
        failed: 'light-danger'
  }

  const optionDate = [
    {value: "7days", label: "7 Days"},
    {value: "1month", label: "1 Month"},
    {value: "3months", label: "3 Months"},
    {value: "today", label: "Today"},
    {value: "overall", label: "Overall"}
  ]
  // ** States
  const [modal, setModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState(data)
  const [currentId, setCurrentId] = useState('')
  const [Filter, setFilter] = useState('')
  const [values, setValues] = useState('')

   //view
  const view = (val) => {
    //here we passing id to delete this specific record
   setModal(true)
  }

  //columns
  const columns = [
        {
          name: 'Order_Id',
          selector: 'Order_Id',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'Seller ',
          selector: 'Seller_Info',
          sortable: true,
          minWidth: '150px',
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
              {renderSeller(row)}
              <div className=''>
                
                  <div className='user-info text-truncate d-flex flex-column'>
                     <span className='font-weight-bold'>{row.Seller_Info}</span>
                     <small className='text-truncate text-muted mb-0'>@{row.sellers_userName}</small>
                  </div>
                  
              </div>
            </div>
          )
        },
        {
          name: 'Buyer ',
          selector: 'buyer_Info',
          sortable: true,
          minWidth: '150px',
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
              {renderBuyer(row)}
              <div className=''>
                
                  <div className='user-info text-truncate d-flex flex-column'>
                     <span className='font-weight-bold'>{row.buyer_Info}</span>
                     <small className='text-truncate text-muted mb-0'>@{row.buyers_userName}</small>
                  </div>
                  
              </div>
            </div>
          )
        },
        {
          name: 'Products',
          selector: 'Products_name',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'Amount Paid',
          selector: 'Amount_Paid',
          sortable: true,
          minWidth: '150px',
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
              
              <div className=''>
                
                  <div className='user-info text-truncate d-flex flex-column'>
                     <span className='font-weight-bold'>₹{row.Amount_Paid}</span>
                     
                  </div>
                  
              </div>
            </div>
          )
        },
        {
          name: 'Cancle Resoson',
          selector: 'cancle_resoson',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'Cancel Date',
          selector: 'Cancle_date',
          sortable: true,
          minWidth: '150px'
        }
    ]


  // ** Function to handle Modal toggle
  const handleModal = () => {
    setModal(!modal)
  }

  const handleBuyerFilter = e => {
    const value = e.target.value
    let updatedData = []

    if (value.length) {
      updatedData = data.filter(item => {
        
        const startsWith =
         item.buyer_Info.toLowerCase().startsWith(value.toLowerCase()) ||
          item.buyers_userName.toLowerCase().startsWith(value.toLowerCase())
          
        const includes =
          item.buyer_Info.toLowerCase().includes(value.toLowerCase()) ||
          item.buyers_userName.toLowerCase().includes(value.toLowerCase())
          

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
       })
      setFilteredData(updatedData)

    } else { 
      setFilteredData(data)
    }
  }

  const handleSellerFilter = e => {
    const value = e.target.value
    let updatedData = []

    if (value.length) {
      updatedData = data.filter(item => {
        
        const startsWith =
         item.Seller_Info.toLowerCase().startsWith(value.toLowerCase()) ||
          item.sellers_userName.toLowerCase().startsWith(value.toLowerCase())
          
        const includes =
          item.Seller_Info.toLowerCase().includes(value.toLowerCase()) ||
          item.sellers_userName.toLowerCase().includes(value.toLowerCase())
          

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
       })
      setFilteredData(updatedData)

    }
  }

  const handleProductFilter = e => {
    const value = e.target.value
    let updatedData = []

    if (value.length) {
      updatedData = data.filter(item => {
        
        const startsWith =
         item.Products_name.toLowerCase().startsWith(value.toLowerCase()) 
          
        const includes =
          item.Products_name.toLowerCase().includes(value.toLowerCase())
          
        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
       })
      setFilteredData(updatedData)

    } else { 
      setFilteredData(data)
    }
  }
      // ** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    if (value.length) {
      updatedData = data.filter(item => {
        
        const startsWith =
          item.Seller_Info.toLowerCase().startsWith(value.toLowerCase()) ||
          item.buyers_userName.toLowerCase().startsWith(value.toLowerCase()) ||
          item.sellers_userName.toLowerCase().startsWith(value.toLowerCase()) ||
          item.buyer_Info.toLowerCase().startsWith(value.toLowerCase()) ||
          item.Amount_Paid.toLowerCase().startsWith(value.toLowerCase())
          
         
        const includes =
          item.Seller_Info.toLowerCase().includes(value.toLowerCase()) ||
          item.buyers_userName.toLowerCase().includes(value.toLowerCase()) ||
          item.sellers_userName.toLowerCase().includes(value.toLowerCase()) ||
          item.buyer_Info.toLowerCase().includes(value.toLowerCase()) ||
          item.Amount_Paid.toLowerCase().includes(value.toLowerCase())
          

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
       })
      setFilteredData(updatedData)
      setSearchValue(value)
    } else { 
      setFilteredData(data)
    }
  }

  // ** Function to handle Pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }


  // ** Converts table to CSV
  function convertArrayOfObjectsToCSV(array) {
    let result

    const columnDelimiter = ','
    const lineDelimiter = '\n'
    const keys = Object.keys(data[0])

    result = ''
    result += keys.join(columnDelimiter)
    result += lineDelimiter

    array.forEach(item => {
      let ctr = 0
      keys.forEach(key => {
        if (ctr > 0) result += columnDelimiter

        result += item[key]

        ctr++
      })
      result += lineDelimiter
    })

    return result
  }

  // ** Downloads CSV
  function downloadCSV(array) {
    const link = document.createElement('a')
    let csv = convertArrayOfObjectsToCSV(array)
    if (csv === null) return

    const filename = 'export.csv'

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`
    }

    link.setAttribute('href', encodeURI(csv))
    link.setAttribute('download', filename)
    link.click()
  }

      //for other input
  const handleInputeChange = (event) => {
    const {name, value} = event.target
    setValues(
    {
      ...values,
      [name] : value
    }
    )
  }

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel=''
      nextLabel=''
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={filteredData ? filteredData.length / 7 : data.length / 7 || 1}
      breakLabel='...'
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName='active'
      pageClassName='page-item'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      nextLinkClassName='page-link'
      nextClassName='page-item next'
      previousClassName='page-item prev'
      previousLinkClassName='page-link'
      pageLinkClassName='page-link'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      containerClassName='pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1'
    />
  )


  return (
    <Fragment>

       <Card>
        <CardHeader>
          <CardTitle tag='h4'>Search Filter</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md='4'>
            <div style={{zIndex:1000, position:'relative'}}>
              <Label for='BidStatus'>Date</Label>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionDate}
                value={values.Date}
                  onChange={data => {
                                     setValues(
                                              {
                                                 ...values,
                                                 Date : data
                                              } 
                                      )
                                    }
                            }
                />
              
              </div>
            </Col>
            
            <Col md='4'>
              <Label>
                Buyer
              </Label>
              <Input
               
                type='text'
                bsSize='sm'
                id='search-input'
                onChange={handleBuyerFilter}
              />
            </Col>

             <Col md='4'>
              <Label>
                Seller
              </Label>
              <Input
               
                type='text'
                bsSize='sm'
                id='search-input'
                onChange={handleSellerFilter}
              />
            </Col>

             <Col md='4'>
              <Label>
                Product
              </Label>
              <Input
               
                type='text'
                bsSize='sm'
                id='search-input'
                onChange={handleProductFilter}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>


      <Card>

        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>Order Cancel</CardTitle>
          <div className='d-flex mt-md-0 mt-1'>
              
            <UncontrolledButtonDropdown>
              <DropdownToggle color='secondary' caret outline>
                <Share size={15} />
                <span className='align-middle ml-50'>Export</span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className='w-100'>
                  <Printer size={15} />
                  <span className='align-middle ml-50'>Print</span>
                </DropdownItem>
                <DropdownItem className='w-100' onClick={() => downloadCSV(data)}>
                  <FileText size={15} />
                  <span className='align-middle ml-50'>CSV</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <Grid size={15} />
                  <span className='align-middle ml-50'>Excel</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <File size={15} />
                  <span className='align-middle ml-50'>PDF</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <Copy size={15} />
                  <span className='align-middle ml-50'>Copy</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
        </CardHeader>

        <Row className='mx-0 mt-1 mb-50'>
          <Col sm='6'>
            <div className='d-flex align-items-center'>
              <Label for='sort-select'>show</Label>
              <Input
                className='dataTable-select'
                type='select'
                id='sort-select'
                onChange={e => console.log(e.target.value)}
              >
                <option value={7}>7</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value={100}>100</option>
              </Input>
              <Label for='sort-select'>entries</Label>
            </div>
          </Col>
          <Col className='d-flex align-items-center justify-content-sm-end mt-sm-0 mt-1' sm='6'>
            <Label className='mr-1' for='search-input'>
              Search
            </Label>
            <Input
              className='dataTable-filter'
              type='text'
              bsSize='sm'
              id='search-input'
              value={searchValue}
              onChange={handleFilter}
            />
          </Col>
        </Row>

        <DataTable
          noHeader
          pagination
          columns={columns}
          paginationPerPage={7}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={filteredData}

        />
        
      </Card>
       
    </Fragment>
  )
}

export default DataTableWithButtons

