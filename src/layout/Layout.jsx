import PropTypes from 'prop-types'

import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import ScrollToTop from '../components/ScrollToTop'

export const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar />
      <main className='flex-1 container mx-auto px-4'>
        {children}
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}
