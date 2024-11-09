import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './Components/Header'
import Hooks from './Components/Hooks'
import MariaEduarda from './Components/MariaEduarda'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <MariaEduarda />
  </StrictMode>
)
