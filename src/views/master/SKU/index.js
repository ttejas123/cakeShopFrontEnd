//Lead Time, SKU ID, MOQ, Customization available, Inspection, sampling, Added time, approved by, no of seller
// ** Custom Components
import Avatar from '@components/avatar'
//import { DropDownList } from '@progress/kendo-react-dropdowns'
// ** Third Party Components
import axios from 'axios'
import { Link } from 'react-router-dom'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** React Imports
import { Fragment, useState, forwardRef, useEffect } from 'react'
import { selectThemeColors } from '@utils'
// ** Table Data & Columns
import { data } from './data'
import Select from 'react-select'
//Redux
import { useSelector, useDispatch } from 'react-redux'
import { productSkuList, DeleteProductSku } from '@store/actions/master/productSKU'
// ** Add New Modal Component

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, File, Grid, Copy, Plus, MoreVertical, Edit, FileText, Archive, Eye, Trash  } from 'react-feather'
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
import ReactPagination from '@src/views/ExCompUse/reactCustPagin'
import DeletePop from '@src/views/ExCompUse/delepePop.js'

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
  <div className='custom-control custom-checkbox'>
    <input type='checkbox' className='custom-control-input' ref={ref} {...rest} />
    <label className='custom-control-label' onClick={onClick} />
  </div>
))


// ** Renders Client Columns
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar) {
    return <Avatar className='mr-1' img={row.avatar} width='32' height='32'  />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.name.substring(0, 4) || 'John Doe'} initials status="online" />
  }
}

const SkuList = () => {
  const statusObj = {
        pending: 'light-secondary',
        approved: 'light-success',
        approval: 'light-warning'
  }
  // ** States
  const [modal, setModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [currentId, setCurrentId] = useState('')
  const [Filter, setFilter] = useState('')

  const useDisplatch = useDispatch()
  useEffect(() => {
    useDisplatch(productSkuList(5, 0))
   
  }, [useDisplatch])
  const DataTableD = useSelector(state => {
    //console.log(state.productSKU)
    return state.productSKU
  })

  const deleteData = (id) => {
    DeletePop(DeleteProductSku, id, useDisplatch, currentPage, productSkuList)
  }

  //columns
  const columns = [
        {
          name: 'Product Name',
          selector: 'name',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'SKU ID',
          selector: 'sku_id',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'MOQ',
          selector: 'moq',
          sortable: true,
          minWidth: '100px'
        },
        {
          name: 'Lead Time',
          selector: 'G_Sdelivary',
          sortable: true,
          minWidth: '100px',
          cell: row => {
            return (
              <div className='d-flex'>
                {row.G_Sdelivary} days
              </div>
            )
          }
        },
        {
          name: 'no of seller',
          selector: 'no_of_seller',
          sortable: true,
          minWidth: '100px'
        },
        {
          name: 'MRP in ₹',
          selector: 'mrp',
          sortable: true,
          minWidth: '100px'
        },
        {
          name: 'Actions',
          allowOverflow: true,
          cell: row => {
            return (
              <div className='d-flex'>
                <UncontrolledDropdown>
                  <DropdownToggle className='pr-1' tag='span'>
                    <Trash size={15} onClick={() => deleteData(row.id) }/>
                  </DropdownToggle>
                </UncontrolledDropdown>
                <Link to={`/master/SKUs/edit/${row.id}`}>
                  <Edit size={15} />
                </Link>  
              </div>
            )
          }
        }
    ]


  // ** Function to handle Modal toggle
  const handleModal = () => {
    setModal(!modal)
  }

  // ** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    if (value.length) {
      updatedData = data.filter(item => {
        
        const startsWith =
          item.Name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.customizations.toLowerCase().startsWith(value.toLowerCase()) ||
          item.deliveryDate.toLowerCase().startsWith(value.toLowerCase()) ||
          item.Category[0].label.toLowerCase().startsWith(value.toLowerCase()) ||
          item.subCategory[0].label.toLowerCase().startsWith(value.toLowerCase()) 

        const includes =
          item.Name.toLowerCase().includes(value.toLowerCase()) ||
          item.customizations.toLowerCase().includes(value.toLowerCase()) ||
          item.deliveryDate.toLowerCase().includes(value.toLowerCase()) ||
          item.Category[0].label.toLowerCase().includes(value.toLowerCase()) ||
          item.subCategory[0].label.toLowerCase().includes(value.toLowerCase()) 

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
       })
      setFilteredData(updatedData)
      setSearchValue(value)
    }
  }

  // ** Function to handle Pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel=''
      nextLabel=''
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={searchValue.length ? filteredData.length / 7 : data.length / 7 || 1}
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

        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>SKU</CardTitle>
          <div className='d-flex mt-md-0 mt-1'>
            <Link to={`/master/SKUs/add`}>
              <Button className='ml-2' color='primary'>
                  <Plus size={15} />
                  <span className='align-middle ml-50'>Add New</span>
              </Button>
            </Link>
          </div>
        </CardHeader>

        <DataTable
          noHeader
          
          selectableRows
          columns={columns}
    
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          
          data={DataTableD.data}
          selectableRowsComponent={BootstrapCheckbox}
        />
        <ReactPagination followData = {DataTableD} dispachReq={productSkuList} currentPage={currentPage} setCurrentPage={setCurrentPage} />
 
      </Card>
      
    </Fragment>
  )
}

export default SkuList
