import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 👇 FONTS (obrigatório)
import "@fontsource/source-sans-3/300.css"; // font-light
import "@fontsource/source-sans-3/400.css"; // font-normal
import "@fontsource/source-sans-3/600.css"; // font-semibold

import "@fontsource/source-serif-4/400.css"; // font-normal
import "@fontsource/source-serif-4/500.css"; // font-medium
import "@fontsource/source-serif-4/700.css"; // font-bold

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)