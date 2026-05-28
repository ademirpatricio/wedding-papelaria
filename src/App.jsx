import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Checklist from './pages/Checklist'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checklist-completo-papelaria-de-casamento" element={<Checklist />} />
    </Routes>
  )
}

export default App