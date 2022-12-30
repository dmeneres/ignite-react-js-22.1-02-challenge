import { createContext, ReactNode, useState } from 'react'

interface Cart {
  type: string
  number: number
}

interface CartContextType {
  handleChangeCart: (coffee: string, quantity: number) => void
  handleShowCart: (type: 'full' | 'number') => Cart[] | number | undefined
}

export const CartContext = createContext({} as CartContextType)

interface CoffeeCartContextProviderProps {
  children: ReactNode
}

export function CoffeeCartContext({
  children,
}: CoffeeCartContextProviderProps) {
  const [cart, setCart] = useState<Cart[]>([
    { type: 'coffee-american', number: 0 },
    { type: 'coffee-arab', number: 0 },
    { type: 'coffee-capuccino', number: 0 },
    { type: 'coffee-creamed-expresso', number: 0 },
    { type: 'coffee-cuban', number: 2 },
    { type: 'coffee-hawaiian', number: 0 },
    { type: 'coffee-hot-chocolate', number: 0 },
    { type: 'coffee-iced-expresso', number: 0 },
    { type: 'coffee-irish', number: 0 },
    { type: 'coffee-latte', number: 0 },
    { type: 'coffee-macchiato', number: 0 },
    { type: 'coffee-milk-with-coffee', number: 0 },
    { type: 'coffee-mocaccino', number: 0 },
    { type: 'coffee-expresso', number: 0 },
  ])

  function handleChangeCart(coffee: string, quantity: number) {
    const coffeeIndex = cart.findIndex((coffeeObject) => {
      return coffeeObject.type === coffee
    })

    const newCart = [...cart]

    if (quantity !== 0) {
      newCart[coffeeIndex].number += quantity
    }

    setCart(newCart)
  }

  function handleShowCart(type: 'full' | 'number') {
    if (type === 'full') {
      const fullCart: Cart[] = []
      cart.map((element) =>
        element.number !== 0 ? fullCart.push(element) : undefined,
      )
      return fullCart
    } else if (type === 'number') {
      let totalNumber = 0
      cart.map((element) => (totalNumber += element.number))
      return Number(totalNumber)
    }
  }

  return (
    <CartContext.Provider
      value={{
        handleChangeCart,
        handleShowCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
