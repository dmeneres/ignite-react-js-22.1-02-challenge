import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CoffeeCounterContextProvider } from './contexts/CoffeeCounterContext'
import { CoffeeCartContext } from './contexts/CoffeeCartContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeeCartContext>
        <CoffeeCounterContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </CoffeeCounterContextProvider>
      </CoffeeCartContext>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
