import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  Actions,
  AddCounter,
  Buy,
  Container,
  Counter,
  Description,
  IconButton,
  Name,
  Price,
  SubtractCounter,
  Tag,
  Tags,
} from './styles'

export function CoffeeCard() {
  return (
    <Container>
      <img src="../src/assets/coffee-expresso.svg" alt="lala" />
      <Tags>
        <Tag>TRADITIONAL</Tag>
      </Tags>
      <Name>Traditional Expresso</Name>
      <Description>
        Traditional coffee made with hot water and grains
      </Description>

      <Buy>
        <Price>
          <span>€</span>
          2,00
        </Price>
        <Actions>
          <Counter>
            <SubtractCounter>
              <Minus size={14} />
            </SubtractCounter>
            <p>1</p>
            <AddCounter>
              <Plus size={14} />
            </AddCounter>
          </Counter>
          <IconButton>
            <ShoppingCart size={21} weight="fill" />
          </IconButton>
        </Actions>
      </Buy>
    </Container>
  )
}
