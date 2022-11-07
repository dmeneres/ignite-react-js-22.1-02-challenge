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
// import coffees from '../../assets/coffees.json'
import traditionalExpresso from '../../assets/coffee-expresso.svg'
import latte from '../../assets/coffee-latte.svg'
import { useState } from 'react'

// const coffeeList = coffees.coffees

export function Checkout() {
  const [counter, setCounter] = useState<number>(0)

  return (
    <Container>
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

          <form action="">
            <input type="number" placeholder="ZIP" name="zip" />
            <input type="text" placeholder="Street" name="street" />
            <div id="optional" data-required="Optional">
              <input type="text" placeholder="Complement" name="complement" />
            </div>
            <div>
              <input type="number" placeholder="Number" name="number" />
              <input type="text" placeholder="City" name="city" />
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
            <button>
              <CreditCard size={16} color="#8047F8" />
              <p>Card</p>
            </button>
            <button>
              <Money size={16} color="#8047F8" />
              <p>Cash</p>
            </button>
          </div>
        </PaymentMethod>
      </CompleteYourOrder>
      <SelectedCoffees>
        <h2>Selected coffees</h2>
        <SelectedCoffeesCard>
          <SelectedCoffeeCard>
            <div id="container">
              <img src={traditionalExpresso} alt="" />
              <div id="main">
                <p id="title">Traditional Expresso</p>
                <Actions>
                  <Counter>
                    <SubtractCounter
                      onClick={() => setCounter((prevState) => prevState - 1)}
                    >
                      <Minus size={14} />
                    </SubtractCounter>
                    <p>{counter >= 0 ? counter : 0}</p>
                    <AddCounter
                      onClick={() => setCounter((prevState) => prevState + 1)}
                    >
                      <Plus size={14} />
                    </AddCounter>
                  </Counter>
                  <button id="remove">
                    <Trash size={16} />
                    <p>REMOVE</p>
                  </button>
                </Actions>
              </div>
            </div>

            <div id="price">
              <p>1,99€</p>
            </div>
          </SelectedCoffeeCard>
          <div id="divider" />
          <SelectedCoffeeCard>
            <div id="container">
              <img src={latte} alt="" />
              <div id="main">
                <p id="title">Latte</p>
                <Actions>
                  <Counter>
                    <SubtractCounter
                      onClick={() => setCounter((prevState) => prevState - 1)}
                    >
                      <Minus size={14} />
                    </SubtractCounter>
                    <p>{counter >= 0 ? counter : 0}</p>
                    <AddCounter
                      onClick={() => setCounter((prevState) => prevState + 1)}
                    >
                      <Plus size={14} />
                    </AddCounter>
                  </Counter>
                  <button id="remove">
                    <Trash size={16} />
                    <p>REMOVE</p>
                  </button>
                </Actions>
              </div>
            </div>

            <div id="price">
              <p>1,99€</p>
            </div>
          </SelectedCoffeeCard>
          <div id="divider" />
          <div id="detailedInfo">
            <div id="totalItems">
              <p>Total items</p>
              <p>5,87€</p>
            </div>
            <div id="delivery">
              <p>Delivery</p>
              <p>0,77€</p>
            </div>
            <div id="total">
              <p>Total</p>
              <p>6,56€</p>
            </div>
          </div>
          <button type="submit">CONFIRM ORDER</button>
        </SelectedCoffeesCard>
      </SelectedCoffees>
    </Container>
  )
}
