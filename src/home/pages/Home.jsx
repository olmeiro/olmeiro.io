import { Layout } from '../../layout/Layout'
import { TiDeviceLaptop } from 'react-icons/ti'
import { GrLocation } from 'react-icons/gr'
import { MdOutlineMail } from 'react-icons/md'
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
  return (
    <Layout>
      <section className="p-4 dark:bg-black">
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
              <h2 className="text-4xl md:text-5xl text-center mb-1 font-advent font-extrabold leading-snug dark:text-white">
                Olmeiro Orozco Ortiz.
              </h2>
              <section className="flex flex-col gap-3">
                <section className="m-5">
                  <div className="flex justify-center">
                    <p className="flex flex-row items-center gap-2 dark:text-white">
                      <i className="">
                        <TiDeviceLaptop />
                      </i>
                      Javascript Developer.
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <p className="flex flex-row items-center gap-2 dark:text-white">
                      <i className="dark:bg-white rounded-full">
                        <GrLocation />
                      </i>
                      Bogotá, Colombia.
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <p className="flex flex-row items-center gap-2 dark:text-white">
                      <i className="">
                        <MdOutlineMail />
                      </i>
                      olme.orozco@gmail.com
                    </p>
                  </div>
                </section>
                <section className="mb-3">
                  <h2 className="text-center text-2xl mb-4 font-advent font-bold dark:text-white">
                    Tech Stack:
                  </h2>
                  <div className="flex justify-center gap-3 flex-wrap">
                    <div className="flex flex-row items-center p-1 gap-1 border-solid border-2 border-b-gray-400 rounded-md">
                      <SiJavascript className='dark:text-white' />
                      <p className="font-dmsans leading-relaxed dark:text-white">Javascript</p>
                    </div>
                    <div className="flex flex-row items-center p-1 gap-1 border-solid border-2 border-b-gray-400 rounded-md">
                      <SiReact className='dark:text-white'/>
                      <p className="font-dmsans font-light leading-relaxed dark:text-white">
                        React
                      </p>
                    </div>
                    <div className="flex flex-row items-center p-1 gap-1 border-solid border-2 border-b-gray-400 rounded-md">
                      <SiNodedotjs className='dark:text-white' />
                      <p className="font-dmsans font-light leading-relaxed dark:text-white">
                        Node
                      </p>
                    </div>
                    <div className="flex flex-row items-center p-1 gap-1 border-solid border-2 border-b-gray-400 rounded-md">
                      <SiExpress className='dark:text-white'/>
                      <p className="font-dmsans font-light leading-relaxed dark:text-white">
                        Express
                      </p>
                    </div>
                    <div className="flex flex-row items-center p-1 gap-1 border-solid border-2 border-b-gray-400 rounded-md">
                      <SiMysql className='dark:text-white' />
                      <p className="font-dmsans font-light leading-relaxed dark:text-white">
                        MySQL
                      </p>
                    </div>
                    <div className="flex flex-row items-center p-1 gap-1 border-solid border-2 border-b-gray-400 rounded-md">
                      <SiPostgresql className='dark:text-white'/>
                      <p className="font-dmsans font-light leading-relaxed dark:text-white">
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
            <p className="font-dmsans  subpixel-antialiased tracking-wider leading-relaxed text-center md:text-left dark:text-white">
              Hi, I am Olmeiro, I like to learning all technologies related to
              Javascript. I recently finished Team International Bootcamp
              learning Node.js with React.
            </p>
            <p className="mt-3 font-dmsans subpixel-antialiased tracking-wider leading-relaxed text-center md:text-left dark:text-white">
              As a Javascript developer, I put all my efforts into learning
              everyday, I am always open to starting new projects to boost my
              career as a Javascript Developer. Do not hesitate to contact me.
            </p>
          </article>
          <div className='flex justify-center '>
          <Link
            to={cv}
            target="_blank"
            download
            className='w-2/6 text-center bg-slate-300 p-2 rounded-md font-advent font-bold hover:bg-black hover:text-white dark:hover:bg-slate-500'
          >Download</Link>
          </div>
        </section>
      </section>
    </Layout>
  )
}
