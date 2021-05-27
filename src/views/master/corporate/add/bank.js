// ** React Imports
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import Avatar from '@components/avatar'
import axios from 'axios'
import { User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Lock, Trash2   } from 'react-feather'
import Flatpickr from 'react-flatpickr'

import { useState, useEffect } from 'react'
import { selectThemeColors, isObjEmpty } from '@utils'
import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'
import {  Media, Row, Col, Button, Form, Table, CustomInput,  Modal, ModalHeader, ModalBody, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Label, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardHeader, CardTitle, CardBody, MoreVertical  } from 'reactstrap'
import Select from 'react-select'

import komal  from '../../../../assets/images/logo/komal.jpg'

// company_logo
// pan_card_proof
// exim_doc
// cancelled_cheque
// profile_pic

const UserAccountTab = ({ selectedUser }, prop) => {

const initialvalues = {
    exim_details : "",
    bank_name : "",
    bank_branch : "",
    bank_account : 0,
    ifsc_code : 0,
    micr_code : 0
  }

  
  const [img, setImg] = useState(null)
  
  const uppy = new Uppy({
    meta: { type: 'avatar' },
    restrictions: { maxNumberOfFiles: 1 },
    autoProceed: true
  })

  uppy.use(thumbnailGenerator)

  uppy.on('thumbnail:generated', (file, preview) => {
    console.log(file)
    setImg(preview)
  })
  const [selectedOption, setselectedOption] = useState()
  const [values, setValues] = useState(initialvalues) 

  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={prop.handleModal} />
  
  useEffect(() => {
    // if (prop.currentId === "") {
    //     setValues({...initialvalues})
    // } else {
    //     setValues({
    //       ...prop.data[prop.currentId - 1]
    //     })
    // }
  }, [prop.currentId, prop.data])
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

  const submitHandle = (event) => {
    const data = {
      ...values
    }
    
    //prop.editAction(values)
    setValues(initialvalues)
  }

  // ** States
  const [userData, setUserData] = useState(null)

  // ** Function to change user image
  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setUserProfile(reader.result)
    }
    reader.readAsDataURL(files[0])
  }


  // ** Update user image on mount or change
  useEffect(() => {
    // if (selectedUser !== null || (selectedUser !== null && userData !== null && selectedUser.id !== userData.id)) {
    //   setUserData(selectedUser)
    //   if (selectedUser.avatar.length) {
    //     return setImg(selectedUser.avatar)
    //   } else {
    //     return setImg(null)
    //   }
    // }
    
  }, [komal])

  return (
    <Row>

      <Col sm='16'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Bank Name</Label>
              <InputGroup>
                
                <Input name="bank_name" onChange={handleInputeChange} id='bank_name' placeholder='ICICI Bank' value={values.bank_name} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Bank Branch</Label>
              <InputGroup>
                <Input name="bank_branch" onChange={handleInputeChange} id='bank_branch' placeholder='Airoli' value={values.bank_branch} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Exim Details</Label>
              <InputGroup>
                
                <Input name="exim_details" onChange={handleInputeChange} id='exim_details' placeholder='' value={values.exim_details} />
              </InputGroup>
              </FormGroup>  
            </Col>
            
            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Bank Account</Label>
              <InputGroup>
                
                <Input name="bank_account" onChange={handleInputeChange} id='bank_account' placeholder='Ravi' value={values.bank_account} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>IFSC Code</Label>
              <InputGroup>
                
                <Input name="ifsc_code" onChange={handleInputeChange} id='ifsc_code' placeholder='Ravi' value={values.ifsc_code} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>MICR Code</Label>
              <InputGroup>
                
                <Input name="micr_code" onChange={handleInputeChange} id='micr_code' placeholder='Ravi' value={values.micr_code} />
              </InputGroup>
              </FormGroup>  
            </Col>
            <Col md='12' sm='12'>
        <FormGroup>
            <CardBody>
        <h4 className='mb-1'>
            {/* <User size={20} className='mr-50' /> */}
            <span className='align-middle'>Upload Cancelled Cheque</span>
          </h4>
          <DragDrop uppy={uppy} />
        {img !== null ? <img className='rounded mt-2' src={img} alt='avatar' /> : null}
        </CardBody>
        </FormGroup>
      </Col>
            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' color='primary' onClick={ e =>  {
                                                          
                                                          submitHandle()
                                                        }
                                                      }>
                                    Submit
              </Button.Ripple>
              <Button.Ripple color='secondary' onClick={() => setValues(initialvalues) } outline>
                        Cancel
              </Button.Ripple>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>   
  )
}
export default UserAccountTab
