import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  AddressForm,
  CompleteYourOrder,
  Container,
  PaymentMethod,
  SelectedCoffees,
} from './styles'

export function Checkout() {
  return (
    <Container>
      <CompleteYourOrder>
        <h2>Complete your order</h2>
        <AddressForm>
          <MapPinLine />
          <h3>Delivery Address</h3>
          <p>Let us know where you want to receive your order</p>
          <form action="">
            <input type="number" placeholder="ZIP" />
            <input type="text" placeholder="Street" />
            <input type="number" placeholder="Number" />
            <input type="text" placeholder="Complement" />
            <input type="text" placeholder="City" />
          </form>
        </AddressForm>
        <PaymentMethod>
          <CurrencyDollar />
          <h3>Payment</h3>
          <p>Payment is made on delivery. Choose the way you want to pay</p>
          <form action="">
            <input type="radio" id="paymentMethod1" name="paymentMethod" />
            <label htmlFor="paymentMethod1">Card</label>

            <input type="radio" id="paymentMethod2" name="paymentMethod" />
            <label htmlFor="paymentMethod2">Cash</label>
          </form>
        </PaymentMethod>
      </CompleteYourOrder>
      <SelectedCoffees></SelectedCoffees>
    </Container>
  )
}
