import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {AppProvider} from './context/AppContext.jsx'
import {MotionConfig} from 'motion/react'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppProvider>
      <MotionConfig viewport={{once: true}}>
        <App />
      </MotionConfig>
    </AppProvider>
  </BrowserRouter>,
)
