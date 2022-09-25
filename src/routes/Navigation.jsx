import { Navigate, Route, Routes } from 'react-router-dom'
import { Contact } from '../contact/pages/Contact'
import { Home } from '../home/pages/Home'
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
