import PropTypes from 'prop-types'

import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'

export const Layout = ({ children }) => {
  return (
    <div className='w-full h-screen dark:bg-gleaming-fate'>
      <NavBar />
      <main className='w-full min-h-screen dark:bg-gleaming-fate'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}
