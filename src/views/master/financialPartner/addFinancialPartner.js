import { useState } from 'react'
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    FormGroup,
    Row,
    Col,
    Input,
    Form,
    Button,
    CustomInput,
    Label
  } from 'reactstrap'
  
  const AddFinancialPartner = (props) => {
    
    const [values, setValues] = useState('')
    const handleInputeChange = (event) => {
        const {name, value} = event.target
        setValues(
        {
          ...values,
          [name] : value
        }
        )
      }
    
      const handleSubmit = () => {
        console.log(values)
        props.handleSubmit(values)
        //prop.editAction(values)
        //setValues(initialvalues)
      }

    
    //   const handleSubmit = () => {
    //       console.log(name)
    //       console.log(symbol)
    //   }
    return (
      <Card>  
        <CardBody>
          <Form>
            <Row >
            <Col className='d-flex' md={{ size: 9, offset: 3 }}>
            <FormGroup row  md={{ size: 9, offset: 3 }}>
              <Label sm='4' size='lg' for='name'>
                Name
              </Label>
              <Col sm='8'>
                <Input type='text' className='text-truncate' name='name' id='name' placeholder='Financial Partner Name' onChange={handleInputeChange} />
              </Col>
            </FormGroup>
  
            <FormGroup className='ml-2' row>
              <Label sm='4' size='lg' for='status'>
                Status
              </Label>
              <Col sm='8'>
              <CustomInput
            type='switch'
            className='ml-1 py-1'
            id='statusSwitch'
            name='statusSwitch'
            label='Approved'
            inline
            onChange={handleInputeChange}
          />
              </Col>
            </FormGroup>
            </Col>
            </Row>
            <FormGroup className='mb-0 mx-auto' row>
              <Col className='d-flex' md={{ size: 8, offset: 5 }}>
                <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => { 
                                                e.preventDefault() 
                                                handleSubmit()
                                                } } >
                  Submit
                </Button.Ripple>
                <Button.Ripple outline color='secondary' type='reset' onClick={props.handleCancel} >
                  Cancel
                </Button.Ripple>
              </Col>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    )
  }
  export default AddFinancialPartner
  