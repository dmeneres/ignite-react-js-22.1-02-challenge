import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/CoffeeCartContext'
import { Cart, CartNumber, HeaderContainer, Locale } from './styles'

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
        <NavLink to="/checkout">
          <ShoppingCart size={22} />
        </NavLink>
        {handleShowNumber() === 0 ? (
          ''
        ) : (
          <CartNumber>{handleShowNumber()}</CartNumber>
        )}
      </Cart>
    </HeaderContainer>
  )
}
