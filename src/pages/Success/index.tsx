import {
  Container,
  Text,
  Content,
  LocationIcon,
  WaitingIcon,
  PaymentIcon,
} from './styles'
import successIllustration from '../../assets/success-illustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { OrderInfoContext } from '../../contexts/OrderInfoContext'

export function Success() {
  const { orderInfo } = useContext(OrderInfoContext)

  return (
    <Container>
      <Text>
        <h1>Uhu! Order confirmed</h1>
        <p>Now all you have to do is wait for the coffee to come to you soon</p>
      </Text>
      <Content>
        <div id="locationCardContainer">
          <div id="location">
            <LocationIcon>
              <MapPin weight="fill" color="#fafafa" />
            </LocationIcon>

            <div id="address">
              <p>
                Delivery on{' '}
                <span>
                  {orderInfo.street}, {orderInfo.number}
                </span>
              </p>
              <p>{orderInfo.city}</p>
            </div>
          </div>

          <div id="waiting">
            <WaitingIcon>
              <Timer weight="fill" color="#fafafa" />
            </WaitingIcon>

            <div id="waitingText">
              <p>Delivery forecast</p>
              <p>20 min - 30 min</p>
            </div>
          </div>

          <div id="payment">
            <PaymentIcon>
              <CurrencyDollar color="#fafafa" />
            </PaymentIcon>

            <div id="paymentText">
              <p>Payment on delivery</p>
              <p>{orderInfo.payment}</p>
            </div>
          </div>
        </div>
        <img src={successIllustration} alt="" />
      </Content>
    </Container>
  )
}
