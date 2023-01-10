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
  orderInfo: DataType
}

export const OrderInfoContext = createContext({} as OrderInfoContextType)

interface OrderInfoContextProviderProps {
  children: ReactNode
}

export function OrderContext({ children }: OrderInfoContextProviderProps) {
  const [orderInfo, setOrderInfo] = useState<DataType>({
    zip: 0,
    street: '',
    complement: '',
    number: 0,
    city: '',
    payment: 'Card',
  })

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
    console.log('asdkjasdnjkasndkasjdnasjkdnasjkdnk')
    return orderInfo
  }

  return (
    <OrderInfoContext.Provider value={{ changeOrderInfo, orderInfo }}>
      {children}
    </OrderInfoContext.Provider>
  )
}
