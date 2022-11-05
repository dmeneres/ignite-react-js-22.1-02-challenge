import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
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
  const [counter, setCounter] = useState<number>(0)

  return (
    <Container>
      <ImageCoffee src={`../src/assets/${imageUrl}`} />
      {/* <img src={`../src/assets/${imageUrl}`} alt="" /> */}
      <Tags>
        {tags.map((tag: string) => (
          <Tag key={new Date().getTime()}>{tag}</Tag>
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
          <IconButton>
            <ShoppingCart size={21} weight="fill" />
          </IconButton>
        </Actions>
      </Buy>
    </Container>
  )
}
