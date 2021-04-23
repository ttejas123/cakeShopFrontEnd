// ** Custom Components
import Avatar from '@components/avatar'
import Select from 'react-select'
// ** Third Party Components
import axios from 'axios'
import { MoreVertical, Edit, FileText, Archive, Trash,  MapPin, DollarSign, X  } from 'react-feather'

// ** React Imports
import { useState, useEffect } from 'react'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { Button, Modal, ModalHeader, ModalBody, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Label, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const AddNewModal = (prop) => {
  const option = [
  {value: "؋", label: "Afghan afghani"},
  {value: "€", label: "EUR"},
  {value: "L", label: "All"}
  ]
  const initialvalues = {
    Name: "",
    Initial: "",
    code: "",
    Currency:""
  }
  const [selectedOption, setselectedOption] = useState()
  const [values, setValues] = useState(initialvalues)
  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={prop.handleModal} />

  useEffect(() => {
    if (prop.currentId === "") {
        setValues({...initialvalues})
    } else {
        setValues({
          ...prop.data[prop.currentId - 1]
        })
    }
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
  //for drop down
  const handleChange = (selectedOption) => {
    
    setValues(
      {
        ...values,
        Currency : selectedOption.value
      }
    )
  }

  const submitHandle = (event) => {
    console.log(values)
    prop.editAction(values)
    setValues(initialvalues)
  }

  return (
    <Modal
      isOpen={prop.open}
      toggle={prop.handleModal}
      className='sidebar-sm'
      modalClassName='modal-slide-in'
      contentClassName='pt-0'
    >
      <ModalHeader className='mb-3' toggle={prop.handleModal} close={CloseBtn} tag='div'>
        <h5 className='modal-title'>New Record</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
       
        <FormGroup>
          <Label for='Name'>Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <MapPin size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input name="Name" onChange={handleInputeChange} id='Name' placeholder='Afghanistan' value={values.Name} />
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='Initial'>Initial</Label>
          <InputGroup>
            <Input name="Initial" onChange={handleInputeChange} id='Initial' placeholder='eg. Afghanistan : AF' value={values.Initial} />
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='code'>Country code</Label>
          <InputGroup>
            <Input name="code" onChange={handleInputeChange} id='post' placeholder='eg. Afghanistan : 004' value={values.code} />
          </InputGroup>
        </FormGroup>

        <FormGroup className='mb-4'>
          <Label for='Currency'>Currency</Label>
          
            
            <Select
              className='mb-4'
              name="Currency"
              defaultValue={values.Currency}
              onChange={handleChange}
              options={option}
          />
         
        </FormGroup>

        <Button className='mr-1' color='primary' onClick={ e =>  {
                                                          prop.handleModal() 
                                                          submitHandle()
                                                        }
                                                      }>
          Submit
        </Button>
        <Button color='secondary' onClick={ prop.handleModal } outline>
          Cancel
        </Button>

      </ModalBody>
    </Modal>
  )
}

export default AddNewModal
