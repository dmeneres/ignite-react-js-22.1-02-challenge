import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CoffeeCartContext'
import { CounterContext } from '../../../../contexts/CoffeeCounterContext'
import {
  Actions,
  AddCounter,
  Buy,
  Container,
  Counter,
  Description,
  IconButton,
  ImageCoffee,
  Name,
  Price,
  SubtractCounter,
  Tag,
  Tags,
} from './styles'

interface CoffeeCardProps {
  name: string
  label: string
  imageUrl: string
  tags: Array<string>
}

export function CoffeeCard({ name, label, imageUrl, tags }: CoffeeCardProps) {
  const { handleChangeCoffeeCounter, showCoffeeNumber } =
    useContext(CounterContext)

  const { handleChangeCart } = useContext(CartContext)

  return (
    <Container>
      <ImageCoffee src={`../src/assets/${imageUrl}.svg`} />
      <Tags>
        {tags.map((tag: string) => (
          <Tag key={`${imageUrl}--${tag}`}>{tag}</Tag>
        ))}
      </Tags>
      <Name>{name}</Name>
      <Description>{label}</Description>

      <Buy>
        <Price>
          <span>€</span>
          1,99
        </Price>
        <Actions>
          <Counter>
            <SubtractCounter
              onClick={() => handleChangeCoffeeCounter(imageUrl, 'decrease')}
            >
              <Minus size={14} />
            </SubtractCounter>
            <p>{showCoffeeNumber(imageUrl)}</p>
            <AddCounter
              onClick={() => handleChangeCoffeeCounter(imageUrl, 'increase')}
            >
              <Plus size={14} />
            </AddCounter>
          </Counter>
          <IconButton
            onClick={() => {
              handleChangeCart(imageUrl, showCoffeeNumber(imageUrl))
              handleChangeCoffeeCounter(imageUrl, 'reset')
            }}
          >
            <ShoppingCart size={21} weight="fill" />
          </IconButton>
        </Actions>
      </Buy>
    </Container>
  )
}
