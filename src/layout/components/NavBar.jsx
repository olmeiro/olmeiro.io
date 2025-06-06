import { GiColombia } from 'react-icons/gi'
import { RiEnglishInput } from 'react-icons/ri'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Dark from '../../dark/Dark'
import contactSVG from '../assets/contact.svg'
import folderSVG from '../assets/folder.svg'
import olmeSVG from '../assets/olme.svg'
import homeSVG from '../assets/home.svg'

export const NavBar = () => {
  const { t, i18n } = useTranslation()

  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('lng', lng)
  }

  return (
    <>
      {/* navbar goes here */}
      <nav className="bg-customwhite dark:bg-slate-700 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div className="mr-4">
                <Link
                  to="/"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <img
                    className="rounded-md"
                    src={olmeSVG}
                    alt="olmeiro picture"
                  />
                </Link>
              </div>
            </div>
            {/* primary nav */}
            <div className="hidden md:flex w-full items-center space-x-1">
              <Link
                className="py-5 px-2 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-slate-200"
                to="/"
              >
                {t('navbar.tab1')}
              </Link>
              <Link
                className="py-5 px-2 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-slate-200"
                to="/projects"
              >
                {t('navbar.tab2')}
              </Link>
              <Link
                className="py-5 px-2 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-slate-200"
                to="/contact"
              >
                {t('navbar.tab3')}
              </Link>
            </div>

            <div className="flex flex-col justify-center items-center md:flex-row">
              <button
                onClick={() => handleChangeLng('es')}
                className="t-tooltip p-1 md:p-3 mr-1 bg-slate-200 rounded-full hover:bg-black hover:text-white "
              >
                <GiColombia />
              </button>
              <div className="hidden absolute ">
                <p>Español</p>
              </div>
              <button
                onClick={() => handleChangeLng('en')}
                className="p-1 md:p-3 mr-1 mt-1 bg-slate-200 rounded-full hover:bg-black hover:text-white "
              >
                <RiEnglishInput />
              </button>
              <div className="hidden absolute ">
                <p>English</p>
              </div>
            </div>

            <Dark />
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
            <span> {t('navbar.tab1')}</span>
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
            <span> {t('navbar.tab2')}</span>
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
            <span> {t('navbar.tab3')}</span>
          </Link>
        </div>
      </nav>
    </>
  )
}
