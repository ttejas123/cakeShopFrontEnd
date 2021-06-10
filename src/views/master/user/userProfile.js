import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col} from 'reactstrap'
import UserProfileCard from "./profileComponets/userInfoCard.js"
import BackupAcList from "./profileComponets/backupAcList.js"
import StatusCard from "./profileComponets/statusCard.js"
import KycSub from "./profileComponets/kycSub.js"
import BidStatus from "./profileComponets/bidStatus.js"
import Statistics from './profileComponets/statistics.js'
import Reviews from './profileComponets/reviews.js'
import TimeLine from './timeline'
import Gallary from './profileComponets/galary.js'
import BidHistory from './profileComponets/bidHistory.js'
import UserActivities from './profileComponets/userActivities.js'
import Craditoverview from "./profileComponets/CraditOverview.js"
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'

import '@styles/react/libs/swiper/swiper.scss'
import { useRTL } from '@hooks/useRTL'
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  Autoplay,
  Lazy,
  Virtual
} from 'swiper'

SwiperCore.use([Navigation, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])

const EcommerceDashboard = () => {
  const [isRtl, setIsRtl] = useRTL()
  const Address = "Shivshakti so, A-35 0/4 sector-15 airoli navi mumbai 400708" 
  const Details = "This startup Provide IT Softwares to other startup and organizations"
  const { id } = useParams()
   const { colors } = useContext(ThemeColors),
   trackBgColor = '#e9ecef'

  return (
    <div id='dashboard-ecommerce'>
      <Row className='match-height' >
        <Col xl='4' md='6' xs='12'>
          <UserProfileCard userId = {id}/>
        </Col>
        <Col xl='4' md='6' xs='12'>
              <StatusCard header="Your Details"  created="Created Date" date="21-jan-2012" three="Email :" threeData="komal@gmail.com" Name="User Name :" secName="Contact :" thrName="Address :" NameData="@komal" secNameData="7777777777" thrNameData={Address} />
        </Col>
        <Col xl='4' md='6' xs='12'>
          <StatusCard header="Organization" three="#WareHouse :"  created="Created Date" date="21-jan-2012" threeData="Navi Mumbai" Name="Name :" secName="No. Members :" thrName="Headquarters :" thrNameData="Navi mumbai" NameData="Coense" secNameData="12"/>
        </Col>
      </Row>

      <Row className='match-height' >
        <Col xl='8' md='6' xs='12'>
         
                  <KycSub />
                
        </Col>
        <Col xl='4' md='6' xs='12'>
          <Statistics/>
        </Col>
      </Row>

      <Row className='match-height' >
        <Col xl='6' md='6' xs='12'>
          <Craditoverview />
        </Col>
         <Col xl='6' md='6' xs='12'>
          <Reviews />
        </Col>
      </Row>

      <Row className='match-height'>
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
        <Col xl='12' md='12' xs='12'>
          <Gallary isRtl={isRtl} />
        </Col>
      </Row>
      
    </div>
  )
}

export default EcommerceDashboard
