import { createContext, ReactNode, useState } from 'react'

// { type: 'coffee-american', number: 0 },
// { type: 'coffee-arab', number: 0 },
// { type: 'coffee-capuccino', number: 0 },
// { type: 'coffee-creamed-expresso', number: 0 },
// { type: 'coffee-cuban', number: 0 },
// { type: 'coffee-hawaiian', number: 0 },
// { type: 'coffee-hot-chocolate', number: 0 },
// { type: 'coffee-iced-expresso', number: 0 },
// { type: 'coffee-irish', number: 0 },
// { type: 'coffee-latte', number: 0 },
// { type: 'coffee-macchiato', number: 0 },
// { type: 'coffee-milk-with-coffee', number: 0 },
// { type: 'coffee-mocaccino', number: 0 },
// { type: 'coffee-expresso', number: 0 },

interface Cart {
  type: string
  number: number
}

interface CartContextType {
  handleChangeCart: (coffee: string, quantity: number) => void
  handleShowCart: () => Cart[]
  handleShowNumber: () => number
  handleRemoveCoffeeFromCart: (coffee: string) => void
}

export const CartContext = createContext({} as CartContextType)

interface CoffeeCartContextProviderProps {
  children: ReactNode
}

export function CoffeeCartContext({
  children,
}: CoffeeCartContextProviderProps) {
  const [cart, setCart] = useState<Cart[]>([])

  function handleRemoveCoffeeFromCart(coffee: string) {
    const newCart = [...cart]

    const coffeeIndex = cart.findIndex((coffeeObject) => {
      return coffeeObject.type === coffee
    })

    newCart[coffeeIndex].number = 0

    setCart(newCart)
  }

  function handleChangeCart(coffee: string, quantity: number) {
    const isCoffeeOnCart =
      cart.findIndex((coffeeObject) => {
        return coffeeObject.type === coffee
      }) >= 1

    if (isCoffeeOnCart) {
      const coffeeIndex = cart.findIndex((coffeeObject) => {
        return coffeeObject.type === coffee
      })

      const newCart = [...cart]

      if (quantity !== 0) {
        newCart[coffeeIndex].number = quantity
      }

      setCart(newCart)
    } else {
      const newCart = [...cart]

      newCart.push({ type: coffee, number: quantity })

      setCart(newCart)
    }

    return console.log(cart)

    // const coffeeIndex = cart.findIndex((coffeeObject) => {
    //   return coffeeObject.type === coffee
    // })

    // const newCart = [...cart]

    // if (quantity !== 0) {
    //   newCart[coffeeIndex].number = quantity
    // }

    // setCart(newCart)
  }

  function handleShowCart() {
    const fullCart: Cart[] = []
    cart.map((element) =>
      element.number !== 0 ? fullCart.push(element) : undefined,
    )
    return fullCart
  }

  function handleShowNumber() {
    let totalNumber = 0
    cart.map((element) => (totalNumber += element.number))
    return Number(totalNumber)
  }

  return (
    <CartContext.Provider
      value={{
        handleChangeCart,
        handleShowCart,
        handleShowNumber,
        handleRemoveCoffeeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
