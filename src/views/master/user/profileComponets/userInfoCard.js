// ** React Imports
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
// ** Custom Components
import Avatar from '@components/avatar'
import { data } from '../data.js'
// ** Third Party Components
import { DollarSign, TrendingUp, User, Check, Star, Flag, Phone, CheckCircle, XCircle } from 'react-feather'
import {
  Row, Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Media,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
  Badge
} from 'reactstrap'

import komal  from '../../../../assets/images/logo/komal.jpg'
import pravin  from '../../../../assets/images/logo/pravin.jpg'
import himanshu  from '../../../../assets/images/logo/himanshu.jpg'
import reethika  from '../../../../assets/images/logo/reethika.jpg'
const UserInfoCard = (props) => {
  // ** render user img
  const init = {
      name: "",
      avatar: "",
      email: '',
      lastLogin: ''
    }
  const [statesArr, setstatesArr] = useState(init)
  
  useEffect(() => {
    
    setstatesArr({
      ...data[props.userId - 1]
    })
  }, [props])
  
  const renderUserImg = () => {
      const stateNum = Math.floor(Math.random() * 6),
      states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
      color = states[stateNum]
      const str = `${statesArr.first_name}`
      const initial = str.substring(0, 1)
      return (
        <div key={statesArr.id} className='browser-states'>
          <Media>
            { statesArr.avatar ? (
              <img src={statesArr.avatar} width='80' height='60' className='h-25 w-10' />
              ) : (
                <Avatar
                  initials
                  className='mr-2 mb-3 h-25 w-10'
                  color={color}
                  className='rounded mr-2 my-25'
                  content={initial}
                  contentStyles={{
                    borderRadius: 0,
                    fontSize: 'calc(36px)',
                    width: '100%',
                    height: '100%'
                  }}
                  style={{
                    height: '80px',
                    width: '80px'
                  }}
              />)
             }
          </Media>
        </div>
      )
  }

  return (
    <Card>
      <CardBody>
        <Row>
          <Col xl='12' lg='12'>
            <div className='user-avatar-section'>
              <div className='d-flex justify-content-start mr-1'>
                {renderUserImg()}
                <div className='d-flex flex-column ml-1'>
                  <div className='user-info mb-1'>
                    <h4 className='mb-1'><b>{statesArr.first_name} {statesArr.last_name}</b></h4>
                    <CardText tag='span'>
                      {statesArr.email}
                    </CardText><br />
                    <CardText tag='span'>
                      Last Login: {statesArr.last_login}
                    </CardText>
                  </div>
                </div>
              </div>
            </div>
            <div>
                <Row className='mt-1'>
                    <Col xl='10' md='10' xs='10' >
                      <Badge className='card-text mr-25 pr-1 pl-1' color="light-success" pill>
                          <h5 className='mb-0'> Buyer </h5>
                      </Badge>-
                    </Col>
                    <Col xl='2' md='2' xs='2'>
                          <div ><img  src="https://img.icons8.com/color/30/000000/instagram-verification-badge.png"/></div>
                    </Col>
                </Row>
                <Row className='mt-1'>
                    <Col xl='10' md='10' xs='10' >
                      <Badge className='card-text mr-25  pr-1 pl-1' color="light-success" pill>
                          <h5 className='mb-0'> Seller </h5>
                      </Badge>-
                    </Col>
                    <Col xl='2' md='2' xs='2'>
                          <div className=''> <img  src="https://img.icons8.com/color/30/000000/instagram-verification-badge.png"/></div>
                    </Col>
                </Row>
                <Row className='mt-1'>
                    <Col xl='10' md='10' xs='10' >
                      <Badge className='card-text mr-25 pr-1 pl-1' color="light-success" pill>
                          <h5 className='mb-0'>Bank Guarantee</h5>
                    </Badge>-
                    </Col>
                    <Col xl='2' md='2' xs='2'>
                          <div className=''>
                                <XCircle  size={29} color="red"/>
                          </div>
                    </Col>
                </Row>
                <Row className='mt-1'>
                    <Col xl='10' md='10' xs='10' >
                      <Badge className='card-text mr-25 pr-1 pl-1' color="light-success" pill>
                          <h5 className='mb-0'> Credit Available </h5>
                    </Badge>-
                    </Col>
                    <Col xl='2' md='2' xs='2'>
                          <div ><img  src="https://img.icons8.com/color/30/000000/instagram-verification-badge.png"/></div>
                    </Col>
                </Row>
                <Row className='mt-1'>
                    <Col xl='10' md='10' xs='10' >
                      <Badge className='card-text mr-25 pr-1 pl-1' color="light-success" pill>
                           <h5 className='mb-0'> Bill Discount </h5>
                    </Badge>-
                    </Col>
                    <Col xl='2' md='2' xs='2'>
                          <div ><img  src="https://img.icons8.com/color/30/000000/instagram-verification-badge.png"/></div>
                    </Col>
                </Row>
            </div>
            
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default UserInfoCard
