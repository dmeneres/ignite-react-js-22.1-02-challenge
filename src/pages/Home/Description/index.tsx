import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import {
  Container,
  Content,
  Head,
  Title,
  Subtitle,
  Perks,
  Perk,
  ShoppingPerkIcon,
  CoffeePerkIcon,
  DeliveryPerkIcon,
  PackagePerkIcon,
} from './styles'

export function Description() {
  return (
    <Container>
      <Content>
        <Head>
          <Title>Find the perfect coffee for any time of the day</Title>
          <Subtitle>
            With Coffee Delivery you receive your coffee wherever you are, at
            any time
          </Subtitle>
        </Head>
        <Perks>
          <div>
            <Perk>
              <ShoppingPerkIcon>
                <ShoppingCart weight="fill" size={16} color={'#fff'} />
              </ShoppingPerkIcon>
              Simple and safe purchase
            </Perk>
            <Perk>
              <DeliveryPerkIcon>
                <Timer weight="fill" size={16} color={'#fff'} />
              </DeliveryPerkIcon>
              Fast delivery
            </Perk>
          </div>
          <div>
            <Perk>
              <PackagePerkIcon>
                <Package weight="fill" size={16} color={'#fff'} />
              </PackagePerkIcon>
              Package that keeps your coffee warm
            </Perk>
            <Perk>
              <CoffeePerkIcon>
                <Coffee weight="fill" size={16} color={'#fff'} />
              </CoffeePerkIcon>
              Fresh coffee right at your place
            </Perk>
          </div>
        </Perks>
      </Content>

      <div>
        <img src="../src/assets/coffee-delivery-big.svg" alt="" />
      </div>
    </Container>
  )
}
