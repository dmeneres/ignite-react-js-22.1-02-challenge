import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 104px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 2.5rem;
    display: flex;
  }
`

export const Cart = styled.div`
  display: flex;
  gap: 12px;

  div + a {
    display: flex;
    align-items: center;

    border-radius: 6px;
    width: auto;
    padding: 8px;

    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const Locale = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  padding: 8px;
  height: 38px;
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme.purple};
  justify-content: center;
  border-radius: 6px;
  gap: 4px;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const ShopCart = styled.a`
  display: flex;
  align-items: center;

  border-radius: 6px;
  width: auto;
  padding: 8px;

  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`

export const CartNumber = styled.p`
  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  border-radius: 1000px;
  width: 20px;
  height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  right: 21px;
  top: -8px;
`
