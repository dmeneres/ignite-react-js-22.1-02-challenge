import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CoffeeCartContext } from './contexts/CoffeeCartContext'
import { OrderContext } from './contexts/OrderInfoContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <OrderContext>
        <CoffeeCartContext>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </CoffeeCartContext>
      </OrderContext>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
