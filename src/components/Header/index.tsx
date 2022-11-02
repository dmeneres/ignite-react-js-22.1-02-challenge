import { MapPin, ShoppingCart } from 'phosphor-react'
import { Cart, HeaderContainer, Locale, ShopCart } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src="../src/assets/logo.svg" alt="" />
      <Cart>
        <Locale>
          <MapPin weight="fill" size={20} />
          <p>Porto Alegre, RS</p>
        </Locale>
        <ShopCart>
          <ShoppingCart size={22} />
        </ShopCart>
      </Cart>
    </HeaderContainer>
  )
}
