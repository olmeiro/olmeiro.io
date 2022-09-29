import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import Dark from '../../dark/Dark'
import contactSVG from '../assets/contact.svg'
import folderSVG from '../assets/folder.svg'
import olmeSVG from '../assets/olme.svg'
import homeSVG from '../assets/home.svg'

export const NavBar = () => {
  // Grab everything we need
  const btnMobile = useRef()
  const menuMobile = useRef()

  // addEventListener
  useEffect(() => {
    const handleClickMenuMobile = (event) => {
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
      <nav className="bg-customwhite dark:bg-slate-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div className="mr-4">
                <Link
                  to="/"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <img className='rounded-md' src={olmeSVG} alt="olmeiro picture" />
                </Link>
              </div>
            </div>
            {/* primary nav */}
            <div className="hidden md:flex w-full items-center space-x-1">
              <Link
                className="py-5 px-2 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-slate-200"
                to="/"
              >
                Home
              </Link>
              <Link
                className="py-5 px-2 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-slate-200"
                to="/projects"
              >
                Projects
              </Link>
              <Link
                className="py-5 px-2 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-slate-200"
                to="/contact"
              >
                Contact
              </Link>
            </div>

            {/* mobile button goes here */}
            <div className="flex items-center">
              <button
                ref={btnMobile}
                className="mobile-menu-button
              "
              >
                <Dark />
              </button>
            </div>
          </div>
        </div>

        <div
          className="w-full h-auto p-4 bg-secondary fixed left-0 bottom-0 shadow-md  flex justify-around lg:hidden"
          id="tab_bar"
        >
          <Link to="/" className="flex flex-col items-center justify-center">
            <img
              className="w-[30px] h-[30px] hover:bg-white hover:rounded-full"
              src={homeSVG}
              alt=""
            />
            <span>home</span>
          </Link>
          <Link
            to="/projects"
            className="flex flex-col items-center justify-center"
          >
            <img
              className="w-[30px] h-[30px] hover:bg-white hover:rounded-full"
              src={folderSVG}
              alt=""
            />
            <span>projects</span>
          </Link>
          <Link
            to="/contact"
            className="flex flex-col items-center justify-center"
          >
            <img
              className="w-[30px] h-[30px] hover:bg-white hover:rounded-full"
              src={contactSVG}
              alt=""
            />
            <span>contact</span>
          </Link>
        </div>
      </nav>
    </>
  )
}
