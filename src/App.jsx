import { BrowserRouter } from 'react-router-dom'
import { Navigation } from './routes/Navigation'

import '../i18n'

function App () {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  )
}

export default App
