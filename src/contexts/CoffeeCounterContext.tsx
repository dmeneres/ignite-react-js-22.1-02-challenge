import { createContext, ReactNode, useState } from 'react'

interface Counter {
  type: string
  number: number
}

interface CounterContextType {
  coffeeCounter: Counter[]
  handleChangeCoffeeCounter: (coffee: string, change: string) => void
  showCoffeeNumber: (coffee: string) => number
}

export const CounterContext = createContext({} as CounterContextType)

interface CoffeeCounterContextProviderProps {
  children: ReactNode
}

export function CoffeeCounterContextProvider({
  children,
}: CoffeeCounterContextProviderProps) {
  const [coffeeCounter, setCoffeeCounter] = useState<Counter[]>([
    { type: 'coffee-american', number: 0 },
    { type: 'coffee-arab', number: 0 },
    { type: 'coffee-capuccino', number: 0 },
    { type: 'coffee-creamed-expresso', number: 0 },
    { type: 'coffee-cuban', number: 0 },
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

  function handleChangeCoffeeCounter(coffee: string, change: string) {
    const coffeeIndex = coffeeCounter.findIndex((coffeeObject) => {
      return (coffeeObject.type = coffee)
    })

    const newCoffeeCounter = [...coffeeCounter]

    if (change === 'increase') {
      newCoffeeCounter[coffeeIndex].number++
    } else if (change === 'decrease') {
      if (newCoffeeCounter[coffeeIndex].number > 0) {
        newCoffeeCounter[coffeeIndex].number--
      }
    }

    setCoffeeCounter(newCoffeeCounter)
  }

  function showCoffeeNumber(coffee: string) {
    const coffeeIndex = coffeeCounter.findIndex((coffeeObject) => {
      return (coffeeObject.type = coffee)
    })

    const coffeeNumber = coffeeCounter[coffeeIndex].type

    return Number(coffeeNumber)
  }

  return (
    <CounterContext.Provider
      value={{
        coffeeCounter,
        handleChangeCoffeeCounter,
        showCoffeeNumber,
      }}
    >
      {children}
    </CounterContext.Provider>
  )
}
