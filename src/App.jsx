import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Checklist from './pages/Checklist'
import ChecklistThanks from './pages/ChecklistThanks'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checklist-completo-papelaria-de-casamento" element={<Checklist />} />
      <Route path="/checklist-completo-papelaria-de-casamento-agradecimento" element={<ChecklistThanks />} />
    </Routes>
  )
}

export default App