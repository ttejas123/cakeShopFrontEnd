import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col} from 'reactstrap'

import Avaied from "../orderlist"
import Add from "../add.js"
import StatsVertical from '@components/widgets/stats/StatsVertical'
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import {
  User,
  AlertOctagon,
  ShoppingCart
} from 'react-feather'

const EcommerceDashboard = () => {

  const { id } = useParams()
   const { colors } = useContext(ThemeColors),
   trackBgColor = '#e9ecef'

  return (
    <div id='dashboard-ecommerce'>
      <Row className='match-height' >
        <Col xl='12' md='12' xs='12'>
          <Add />
        </Col>
        
      </Row>
      
      <Row className='match-height' >
        <Col xl='12' md='12' xs='12'>

        { /* here we Have prefered partners list*/ }
              <Row className='match-height'>
                <Col lg='12' xs='12'>
                  <Avaied />
                </Col>
              </Row>
            

        </Col>
      </Row>


{ /*     <Row className='match-height'>
        <Col xl='6' md='6' xs='12'>
          <Card className='card-statistics'>
             <CardHeader>  
                <CardTitle tag='h4'><h4>Your Activities</h4></CardTitle>
             </CardHeader>  
              <CardBody>
                <Row className='match-height'>
                  <Col lg='12' xs='12'>
                    <UserActivities />
                  </Col>
                </Row>
              </CardBody>  
          </Card>
        </Col>
        <Col xl='6' md='6' xs='12'>
          <Card className='card-statistics'>
             <CardHeader>  
                <CardTitle tag='h4'><h4>Bid History</h4></CardTitle>
             </CardHeader>  
              <CardBody>
                <Row className='match-height'>
                  <Col lg='12' xs='12'>
                    <BidHistory />
                  </Col>
                </Row>
              </CardBody>  
          </Card>
        </Col>
      </Row>

      <Row className='match-height'>
        <Col xl='12' md='12' xs='12'>
          <Card className='card-statistics'>
             <CardHeader>  
                <CardTitle tag='h4'><h4>Backup Account List</h4></CardTitle>
             </CardHeader>  
              <CardBody>
                <Row className='match-height'>
                  <Col lg='12' xs='12'>
                    <BackupAcList />
                  </Col>
                </Row>
              </CardBody>  
          </Card>
        </Col>
      </Row> */ }
      
    </div>
  )
}

export default EcommerceDashboard
