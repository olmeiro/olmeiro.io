import PropTypes from 'prop-types'

import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'

export const Layout = ({ children }) => {
  return (
    <div className='w-full h-screen'>
      <NavBar />
      <main className=''>
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}
