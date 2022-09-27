import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Dark from '../../dark/Dark'

import olmeSVG from '../assets/olme.svg'

export const NavBar = () => {
  // Grab everything we need
  const btnMobile = useRef()
  const menuMobile = useRef()

  // addEventListener
  useEffect(() => {
    const handleClickMenuMobile = event => {
      // console.log("button clicked.")
      // elementMenu.classList.toggle('-translate-x-full')
      elementMenu.classList.toggle('hidden')
    }

    const btnMenu = btnMobile.current
    const elementMenu = menuMobile.current

    btnMenu.addEventListener('click', handleClickMenuMobile)

    return () => {
      btnMenu.removeEventListener('click', handleClickMenuMobile)
    }
  }, [])
  return (
    <>
      {/* navbar goes here */}
      <nav className="bg-customwhite">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div className="mr-4">
                <Link
                  to="/"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                 <img src={olmeSVG} alt="olmeiro picture" />
                </Link>
              </div>
            </div>
            {/* primary nav */}
            <div className="hidden md:flex w-full items-center space-x-1">
                <Link className="py-5 px-2 text-gray-600 hover:text-gray-900" to="/">
                Home
                </Link>
                <Link className="py-5 px-2 text-gray-600 hover:text-gray-900" to="/projects">
                Projects
                </Link>
                <Link className="py-5 px-2 text-gray-600 hover:text-gray-900" to="/contact">
                Contact
                </Link>
            </div>
            <div className='flex items-center'>
              <Dark />
            </div>

            {/* mobile button goes here */}
            <div className="md:hidden flex items-center">
              <button
                ref={btnMobile}
                className="mobile-menu-button
              ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0  24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div
          ref={menuMobile}
          className="hidden md:hidden absolute left-1/2 w-1/2 z-20 bg-gray-400 rounded-bl-2xl">
          <Link className=" py-2 px-4 text-sm flex justify-end hover:bg-gray-400" to="/">
          Home
          </Link>
          <Link className=" py-2 px-4 text-sm flex justify-end hover:bg-gray-200" to="/projects">
          Projects
          </Link>
          <Link className=" py-2 px-4 text-sm flex justify-end hover:bg-gray-200" to="/contact">
          Contact
          </Link>
        </div>
      </nav>
    </>
  )
}
