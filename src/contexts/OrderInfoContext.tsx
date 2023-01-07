import { createContext, ReactNode, useState } from 'react'

interface DataType {
  zip: number
  street: string
  complement: string
  number: number
  city: string
  payment: string
}

interface OrderInfoContextType {
  changeOrderInfo: (data: DataType) => Object
}

export const OrderInfoContext = createContext({} as OrderInfoContextType)

interface OrderInfoContextProviderProps {
  children: ReactNode
}

export function OrderContext({ children }: OrderInfoContextProviderProps) {
  const [orderInfo, setOrderInfo] = useState({})

  function changeOrderInfo({
    zip,
    street,
    complement,
    number,
    city,
    payment,
  }: DataType) {
    setOrderInfo({
      zip,
      street,
      complement,
      number,
      city,
      payment,
    })

    return orderInfo
  }

  return (
    <OrderInfoContext.Provider value={{ changeOrderInfo }}>
      {children}
    </OrderInfoContext.Provider>
  )
}
