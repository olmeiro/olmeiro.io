import { Layout } from '../../layout/Layout'
import { TiDeviceLaptop } from 'react-icons/ti'
import { ImLocation2 } from 'react-icons/im'
import { MdOutlineMail } from 'react-icons/md'
import { SiJavascript, SiMysql, SiNodedotjs, SiReact, SiExpress, SiPostgresql } from 'react-icons/si'

import profileImg from '../assets/profile-photo.png'

export const Home = () => {
  return (
    <Layout>
      <section className="m-14">
        <section className="flex flex-col justify-center items-center md:flex-row">
          <img
            src={profileImg}
            className="w-32 h-32 mb-6 bg-black rounded-full object-cover"
            alt="profile photo olme"
          />
          <div className="w-60">
            <article>
              <h2 className="text-4xl text-center mb-1 font-advent font-extrabold leading-snug">
                Olmeiro Orozco Ortiz.
              </h2>
              <section className="flex flex-col gap-3">
                <section className="m-5">
                  <div className="flex justify-start items-center ">
                    <div className="w-1/6 flex justify-between">
                      <TiDeviceLaptop />
                    </div>
                    <div>
                      <p>Javascript Developer.</p>
                    </div>
                  </div>
                  <div className="flex justify-start items-center ">
                    <div className="w-1/6 flex justify-between">
                      <ImLocation2 />
                    </div>
                    <div>
                      <p>Bogotá, Colombia.</p>
                    </div>
                  </div>
                  <div className="flex justify-start items-center ">
                    <div className="w-1/6 flex justify-between">
                      <MdOutlineMail />
                    </div>
                    <div>
                      <p className='ml-4'>olme.orozco@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex justify-start items-center ">
                    <div className="w-1/6 flex justify-between">
                      <TiDeviceLaptop />
                    </div>
                    <div>
                      <p>Javascript Developer.</p>
                    </div>
                  </div>
                </section>
                <section className='mb-3'>
                  <h2 className='text-center text-2xl mb-4 font-advent font-bold'>Tech Stack:</h2>
                  <div className='flex justify-center gap-3 flex-wrap'>
                    <div className="flex flex-row items-center p-1 gap-1 border-solid border-2 border-b-gray-400 rounded-md">
                      <SiJavascript />
                      <p className='font-dmsans leading-relaxed'>Javascript</p>
                    </div>
                    <div className="flex flex-row items-center p-1 gap-1 border-solid border-2 border-b-gray-400 rounded-md">
                      <SiReact />
                      <p className='font-dmsans font-light leading-relaxed'>React</p>
                    </div>
                    <div className="flex flex-row items-center p-1 gap-1 border-solid border-2 border-b-gray-400 rounded-md">
                      <SiNodedotjs />
                      <p className='font-dmsans font-light leading-relaxed'>Node</p>
                    </div>
                    <div className="flex flex-row items-center p-1 gap-1 border-solid border-2 border-b-gray-400 rounded-md">
                      <SiExpress />
                      <p className='font-dmsans font-light leading-relaxed'>Express</p>
                    </div>
                    <div className="flex flex-row items-center p-1 gap-1 border-solid border-2 border-b-gray-400 rounded-md">
                      <SiMysql />
                      <p className='font-dmsans font-light leading-relaxed'>MySQL</p>
                    </div>
                    <div className="flex flex-row items-center p-1 gap-1 border-solid border-2 border-b-gray-400 rounded-md">
                      <SiPostgresql />
                      <p className='font-dmsans font-light leading-relaxed'>Postgresql</p>
                    </div>
                    <div className="flex flex-row items-center p-1 gap-1 border-solid border-2 border-b-gray-400 rounded-md">
                      <SiJavascript />
                      <p className='font-dmsans font-light leading-relaxed'>Javascript</p>
                    </div>
                  </div>
                </section>
              </section>
            </article>
          </div>
        </section>
        <section className="">
          <article className="p-2">
            <p className="font-dmsans  subpixel-antialiased tracking-wider leading-relaxed text-center md:text-left">
              Hi, I am Olmeiro, I like to learning all technologies related to Javascript. I
              recently finished Team International Bootcamp learning Node.js
              with React.</p>
              <p className="mt-3 font-dmsans subpixel-antialiased tracking-wider leading-relaxed text-center md:text-left">
              As a Javascript developer, I put all my efforts into learning
              everyday, I am always open to starting new projects to boost my
              career as a Javascript Developer. Do not hesitate to contact me.
            </p>
          </article>
        </section>
      </section>
    </Layout>
  )
}
