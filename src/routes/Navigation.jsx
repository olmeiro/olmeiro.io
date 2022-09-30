import { Navigate, Route, Routes } from 'react-router-dom'

import { Home } from '../home/pages/Home'
import { Contact } from '../contact/pages/Contact'
import { Projects } from '../projects/pages/Projects'

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />

      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
