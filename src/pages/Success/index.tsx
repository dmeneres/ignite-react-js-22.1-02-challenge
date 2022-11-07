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

export function Success() {
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
                Delivery on <span>Rua João Daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
              <p>Card</p>
            </div>
          </div>
        </div>
        <img src={successIllustration} alt="" />
      </Content>
    </Container>
  )
}
