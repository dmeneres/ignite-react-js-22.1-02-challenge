import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CoffeeCartContext'
import { Cart, HeaderContainer, Locale, ShopCart } from './styles'

export function Header() {
  const { handleShowNumber } = useContext(CartContext)
  return (
    <HeaderContainer>
      <img src="../src/assets/logo.svg" alt="" />
      <Cart>
        <Locale>
          <MapPin weight="fill" size={20} />
          <p>Porto Alegre, RS</p>
        </Locale>
        <ShopCart>
          <p>{handleShowNumber()}</p>
          <ShoppingCart size={22} />
        </ShopCart>
      </Cart>
    </HeaderContainer>
  )
}
