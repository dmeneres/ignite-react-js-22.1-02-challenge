import { Description } from './Description'
import { OurCoffees } from './OurCoffees'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Description />
      <h1>Our coffees</h1>
      <OurCoffees />
    </Container>
  )
}
