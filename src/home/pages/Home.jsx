import { TiDeviceLaptop } from 'react-icons/ti'
import { GrLocation } from 'react-icons/gr'
import { MdOutlineMail } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

import { Layout } from '../../layout/Layout'
import {
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiExpress,
  SiPostgresql
} from 'react-icons/si'

import profileImg from '../assets/profile-photo.png'
import cv from '../assets/olmeiro_orozco_cv.pdf'
import { Link } from 'react-router-dom'

export const Home = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <section className="p-4 dark:bg-slate-800">
        <section className="w-full lg:w-2/3 lg:mx-auto flex flex-col justify-center items-center md:flex-row md:p-4 border border-solid divide-black  outline-2 rounded-lg shadow-xl mb-6">
          <div className="">
            <img
              src={profileImg}
              className="w-32 h-32 md:w-64 md:h-64 mb-6 bg-black rounded-full object-cover"
              alt="profile photo olme"
            />
          </div>
          <div className="">
            <article>
              <h2 className="text-4xl md:text-5xl text-center mb-1 font-advent font-extrabold leading-snug dark:text-slate-100">
                Olmeiro Orozco Ortiz.
              </h2>
              <section className="flex flex-col gap-3">
                <section className="m-5">
                  <div className="flex justify-center">
                    <p className="flex flex-row items-center gap-2 dark:text-slate-100">
                      <i className="">
                        <TiDeviceLaptop />
                      </i>
                      Javascript Developer.
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <p className="flex flex-row items-center gap-2 dark:text-slate-100">
                      <i className="dark:bg-white rounded-full">
                        <GrLocation />
                      </i>
                      Bogotá, Colombia.
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <p className="flex flex-row items-center gap-2 dark:text-slate-100">
                      <i className="">
                        <MdOutlineMail />
                      </i>
                      olme.orozco@gmail.com
                    </p>
                  </div>
                </section>
                <section className="mb-3">
                  <h2 className="text-center text-2xl mb-4 font-advent font-bold dark:text-slate-100">
                    {t('home.stack')}
                  </h2>
                  <div className="flex justify-center gap-3 flex-wrap">
                    <div className="flex flex-row items-center p-1 gap-1 border-solid border-2 border-b-gray-400 rounded-md">
                      <SiJavascript className='dark:text-slate-100' />
                      <p className="font-dmsans leading-relaxed dark:text-slate-100">Javascript</p>
                    </div>
                    <div className="flex flex-row items-center p-1 gap-1 border-solid border-2 border-b-gray-400 rounded-md">
                      <SiReact className='dark:text-slate-100'/>
                      <p className="font-dmsans font-light leading-relaxed dark:text-slate-100">
                        React
                      </p>
                    </div>
                    <div className="flex flex-row items-center p-1 gap-1 border-solid border-2 border-b-gray-400 rounded-md">
                      <SiNodedotjs className='dark:text-slate-100' />
                      <p className="font-dmsans font-light leading-relaxed dark:text-slate-100">
                        Node
                      </p>
                    </div>
                    <div className="flex flex-row items-center p-1 gap-1 border-solid border-2 border-b-gray-400 rounded-md">
                      <SiExpress className='dark:text-slate-100'/>
                      <p className="font-dmsans font-light leading-relaxed dark:text-slate-100">
                        Express
                      </p>
                    </div>
                    <div className="flex flex-row items-center p-1 gap-1 border-solid border-2 border-b-gray-400 rounded-md">
                      <SiMysql className='dark:text-slate-100' />
                      <p className="font-dmsans font-light leading-relaxed dark:text-slate-100">
                        MySQL
                      </p>
                    </div>
                    <div className="flex flex-row items-center p-1 gap-1 border-solid border-2 border-b-gray-400 rounded-md">
                      <SiPostgresql className='dark:text-slate-100'/>
                      <p className="font-dmsans font-light leading-relaxed dark:text-slate-100">
                        Postgresql
                      </p>
                    </div>
                  </div>
                </section>
              </section>
            </article>
          </div>
        </section>
        <section className="lg:w-1/2 lg:mx-auto">
          <article className="p-2">
            <p className="font-dmsans  subpixel-antialiased tracking-wider leading-relaxed text-center md:text-left dark:text-slate-100">
              {t('home.paragraph1')}
            </p>
            <p className="mt-3 font-dmsans subpixel-antialiased tracking-wider leading-relaxed text-center md:text-left dark:text-slate-100">
              {t('home.paragraph2')}
            </p>
          </article>
          <div className='flex justify-center '>
          <Link
            to={cv}
            target="_blank"
            download
            className='w-2/6 text-center bg-slate-300 p-2 rounded-md font-advent font-bold hover:bg-black hover:text-white dark:hover:bg-slate-500'
          >{t('home.btnDownload')}</Link>
          </div>
        </section>
      </section>
    </Layout>
  )
}
