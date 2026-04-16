import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Hero from './components/blocs/Hero.jsx'
import About from './components/blocs/About.jsx'
import Benefits from './components/blocs/Benefits.jsx'
import HowItWorks from './components/blocs/HowItWorks.jsx'
import Gallery from './components/blocs/Gallery.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <About />
    <Benefits />
    <HowItWorks />
    <Gallery />
    <App />
  </StrictMode>,
)
