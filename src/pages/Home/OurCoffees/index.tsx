import { CoffeeCard } from './CoffeeCard'
import { Container } from './styles'
import coffees from '../../../assets/coffees.json'

const coffeeList = coffees.coffees

// const coffeeList = [
//   {
//     name: 'Traditional Expresso',
//     label: 'Traditional coffee made with hot water and grains',
//     imageUrl: 'coffee-expresso.svg',
//     tags: ['TRADITIONAL'],
//   },
//   {
//     name: 'American Expresso',
//     label: 'Diluted expresso, less intense than traditional expresso',
//     imageUrl: 'coffee-american.svg',
//     tags: ['TRADITIONAL'],
//   },
//   {
//     name: 'Creamed Expresso',
//     label: 'Traditional expresso with cream',
//     imageUrl: 'coffee-creamed-expresso.svg',
//     tags: ['TRADITIONAL'],
//   },
//   {
//     name: 'Iced Expresso',
//     label: 'Prepared with expresso and ice',
//     imageUrl: 'coffee-iced-expresso.svg',
//     tags: ['TRADITIONAL', 'ICED'],
//   },
//   {
//     name: 'Coffee with Milk',
//     label: 'Half expresso, half vaporized milk',
//     imageUrl: 'coffee-milk-with-coffee.svg',
//     tags: ['TRADITIONAL', 'WITH MILK'],
//   },
//   {
//     name: 'Latte',
//     label: 'One dose of expresso and two of milk and cream',
//     imageUrl: 'coffee-latte.svg',
//     tags: ['TRADITIONAL', 'WITH MILK'],
//   },
//   {
//     name: 'Capuccino',
//     label: 'Expresso, milk, cream and cinnamon',
//     imageUrl: 'coffee-capuccino.svg',
//     tags: ['TRADITIONAL', 'WITH MILK'],
//   },
//   {
//     name: 'Macchiato',
//     label: 'Expresso with just a little bit of milk and foam',
//     imageUrl: 'coffee-macchiato.svg',
//     tags: ['TRADITIONAL', 'WITH MILK'],
//   },
//   {
//     name: 'Mocaccino',
//     label: 'Expresso with chocolate, milk and foam',
//     imageUrl: 'coffee-mocaccino.svg',
//     tags: ['TRADITIONAL', 'WITH MILK'],
//   },
//   {
//     name: 'Hot Chocolate',
//     label: 'Chocolate dissolved on hot milk with coffee',
//     imageUrl: 'coffee-hot-chocolate.svg',
//     tags: ['SPECIAL', 'WITH MILK'],
//   },
//   {
//     name: 'Cuban',
//     label: 'Cold beverage with coffee, rum, milk cream and mint',
//     imageUrl: 'coffee-cuban.svg',
//     tags: ['SPECIAL', 'ALCOHOLIC', 'ICED'],
//   },
//   {
//     name: 'Hawaiian',
//     label: 'Sweet drink prepared with coffee and coconut milk',
//     imageUrl: 'coffee-hawaiian.svg',
//     tags: ['SPECIAL'],
//   },
//   {
//     name: 'Arab',
//     label: 'Prepared with arab coffee grains and spices',
//     imageUrl: 'coffee-arab.svg',
//     tags: ['SPECIAL'],
//   },
//   {
//     name: 'Irish',
//     label: 'Coffee, irish whiskey, sugar and chantilly',
//     imageUrl: 'coffee-irish.svg',
//     tags: ['SPECIAL', 'ALCOHOLIC'],
//   },
// ]

export function OurCoffees() {
  return (
    <Container>
      {coffeeList.map((coffee) => (
        <CoffeeCard
          key={coffee.imageUrl}
          name={coffee.name}
          label={coffee.label}
          imageUrl={coffee.imageUrl}
          tags={coffee.tags}
        />
      ))}
    </Container>
  )
}
