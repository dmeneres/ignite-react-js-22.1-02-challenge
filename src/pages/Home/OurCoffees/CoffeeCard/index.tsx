import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CoffeeCartContext'
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
  const { handleChangeCart } = useContext(CartContext)

  const [counter, setCounter] = useState(0)

  function addOne() {
    setCounter((prevState) => prevState + 1)
  }

  function subtractOne() {
    if (counter !== 0) {
      setCounter((prevState) => prevState - 1)
    }
  }

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
            <SubtractCounter onClick={subtractOne}>
              <Minus size={14} />
            </SubtractCounter>
            <p>{counter}</p>
            <AddCounter onClick={addOne}>
              <Plus size={14} />
            </AddCounter>
          </Counter>
          <IconButton
            onClick={() => {
              handleChangeCart(imageUrl, counter)
            }}
          >
            <ShoppingCart size={21} weight="fill" />
          </IconButton>
        </Actions>
      </Buy>
    </Container>
  )
}
