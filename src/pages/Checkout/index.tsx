import {
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import {
  Actions,
  AddCounter,
  AddressForm,
  CompleteYourOrder,
  Container,
  Counter,
  PaymentMethod,
  SelectedCoffeeCard,
  SelectedCoffees,
  SelectedCoffeesCard,
  SubtractCounter,
} from './styles'
import coffees from '../../assets/coffees.json'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CartContext } from '../../contexts/CoffeeCartContext'
import { OrderInfoContext } from '../../contexts/OrderInfoContext'

const coffeeList = coffees.coffees

interface DataType {
  zip: number
  street: string
  complement: string
  number: number
  city: string
}

export function Checkout() {
  const { register, handleSubmit } = useForm()
  const [payment, setPayment] = useState('card')

  const {
    handleShowCart,
    handleChangeCart,
    handleRemoveCoffeeFromCart,
    handleShowNumber,
  } = useContext(CartContext)
  const coffeeCart = handleShowCart()

  const { changeOrderInfo } = useContext(OrderInfoContext)

  function handleCreateNewOrder({
    zip,
    street,
    complement,
    number,
    city,
  }: DataType) {
    changeOrderInfo({
      zip,
      street,
      complement,
      number,
      city,
      payment,
    })
  }

  return (
    <Container onSubmit={handleSubmit(handleCreateNewOrder)} action="">
      {/* <form onSubmit={handleSubmit(handleCreateNewOrder)} action=""> */}
      <CompleteYourOrder>
        <h2>Complete your order</h2>
        <AddressForm>
          <div>
            <div>
              <MapPinLine size={22} />
            </div>
            <div>
              <h3>Delivery Address</h3>
              <p>Let us know where you want to receive your order</p>
            </div>
          </div>

          <form onSubmit={handleSubmit(handleCreateNewOrder)} action="">
            <input type="number" placeholder="ZIP" {...register('zip')} />
            <input type="text" placeholder="Street" {...register('street')} />
            <div id="optional" data-required="Optional">
              <input
                type="text"
                placeholder="Complement"
                {...register('complement')}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Number"
                {...register('number')}
              />
              <input type="text" placeholder="City" {...register('city')} />
            </div>
          </form>
        </AddressForm>
        <PaymentMethod>
          <div id="sentence">
            <div>
              <CurrencyDollar size={22} />
            </div>
            <div>
              <h3>Payment</h3>
              <p>Payment is made on delivery. Choose the way you want to pay</p>
            </div>
          </div>

          <div id="options">
            <button type="button" onClick={() => setPayment('card')}>
              <CreditCard size={16} color="#8047F8" />
              <p>Card</p>
            </button>
            <button type="button" onClick={() => setPayment('cash')}>
              <Money size={16} color="#8047F8" />
              <p>Cash</p>
            </button>
          </div>
        </PaymentMethod>
      </CompleteYourOrder>
      <SelectedCoffees>
        <h2>Selected coffees</h2>
        <SelectedCoffeesCard>
          {coffeeCart.map((coffee) => (
            <SelectedCoffeeCard key={coffee.type}>
              <div id="container">
                <img src={`../src/assets/${coffee.type}.svg`} alt="" />
                <div id="main">
                  <p id="title">
                    {
                      coffeeList[
                        coffeeList.findIndex(
                          (element) => element.imageUrl === coffee.type,
                        )
                      ].name
                    }
                  </p>
                  <Actions>
                    <Counter>
                      <SubtractCounter
                        onClick={() =>
                          handleChangeCart(coffee.type, coffee.number - 1)
                        }
                      >
                        <Minus size={14} />
                      </SubtractCounter>
                      <p>{coffee.number}</p>
                      <AddCounter
                        onClick={() =>
                          handleChangeCart(coffee.type, coffee.number + 1)
                        }
                      >
                        <Plus size={14} />
                      </AddCounter>
                    </Counter>
                    <button
                      id="remove"
                      onClick={() => handleRemoveCoffeeFromCart(coffee.type)}
                    >
                      <Trash size={16} />
                      <p>REMOVE</p>
                    </button>
                  </Actions>
                </div>
              </div>

              <div id="price">
                <p>{`${coffee.number * 1.99}€`}</p>
              </div>
            </SelectedCoffeeCard>
          ))}
          <div id="divider" />

          <div id="detailedInfo">
            <div id="totalItems">
              <p>Total items</p>
              <p>
                {handleShowNumber() === 0
                  ? '0,00€'
                  : `${handleShowNumber() * 1.99}€`}
              </p>
            </div>
            <div id="delivery">
              <p>Delivery</p>
              <p>{handleShowNumber() === 0 ? '0,00€' : '0,77€'}</p>
            </div>
            <div id="total">
              <p>Total</p>
              <p>
                {handleShowNumber() === 0
                  ? '0,00€'
                  : `${handleShowNumber() * 1.99 + 0.77}€`}
              </p>
            </div>
          </div>
          <button type="submit">CONFIRM ORDER</button>
        </SelectedCoffeesCard>
      </SelectedCoffees>
      {/* </form> */}
    </Container>
  )
}
