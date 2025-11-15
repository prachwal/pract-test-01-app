import { render } from 'preact'
import App from '@src/app'
import { ThemeProvider } from '@components/ThemeProvider'
import '@styles/index.scss'

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('app')!
)
