import { useRef } from 'react'
import { MdOutlineMail } from 'react-icons/md'
import { BsTelephoneOutbound } from 'react-icons/bs'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

import { Layout } from '../../layout/Layout'
import { useForm } from '../hooks/useForm'
import { getEnvVariables } from '../helpers'

import imageForm from '../assets/imgform.png'

const { VITE_PUBLIC_KEY, VITE_SERVICE_ID, VITE_TEMPLATE_ID } = getEnvVariables()

const initialStateForm = {
  name: '',
  email: '',
  message: '',
  phone: ''
}

export const Contact = () => {
  const ref = useRef()
  const { hadleInputChange, name, email, message, phone, reset } = useForm(initialStateForm)

  const handleSubmit = (e) => {
    e.preventDefault()

    const templateParams = {
      name,
      email,
      message,
      phone
    }

    emailjs.send(`${VITE_SERVICE_ID}`, `${VITE_TEMPLATE_ID}`, templateParams, `${VITE_PUBLIC_KEY}`)
      .then((response) => {
        Swal.fire({
          title: 'Excellent!',
          text: 'I will be contacting you soon..',
          imageUrl: `${imageForm}`,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'image logo olme'
        })
      }, (err) => {
        console.log('FAILED...', err)
        Swal.fire('Try it again. Something was wrong!')
      })

    reset()
  }

  return (
    <Layout>
      <div className='mb-4 p-4 dark:bg-black'>
        <article className="flex flex-col items-center p-4 justify-center dark:text-white">
          <h2 className="font-advent font-semibold text-4xl text-left">
            Let&apos;s work together
          </h2>
          <p className="font-dmsans text-left text-lg p-4">
            Let&apos;s build the future. If you want to reach out me call me or
            fill out the next form.
          </p>
          <p className="font-dmsans text-left text-lg p-4">
            I hope to hear from you.
          </p>
          <footer>
            <div className="flex justify-center items-center md:flex-row flex-col gap-4">
              <p className="flex flex-row items-center gap-2 font-semibold">
                <i className="">
                  <MdOutlineMail />
                </i>
                olme.orozco@gmail.com
              </p>
              <p className="flex flex-row items-center gap-2 font-semibold">
                <i className="">
                  <BsTelephoneOutbound />
                </i>
                313-5257802
              </p>
            </div>
          </footer>
        </article>

        <section>
          <form
            ref={ref}
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center"
          >
            <div className="w-full md:w-1/2 flex flex-col">
              <label className='dark:text-white' htmlFor="name">Name:</label>
              <input
                className="form-input px-4 py-3 rounded-full dark:bg-slate-300"
                type="text"
                name="name"
                onChange={hadleInputChange}
                value={name}
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col">
              <label className='dark:text-white' htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                onChange={hadleInputChange}
                value={email}
                className="form-input px-4 py-3 rounded-full dark:bg-slate-300"
              ></input>
            </div>

            <div className="w-full md:w-1/2 flex flex-col">
              <label className='dark:text-white' htmlFor="message">Phone number:</label>
              <input
                type="number"
                name="phone"
                onChange={hadleInputChange}
                value={phone}
                className="form-input px-4 py-3 rounded-full dark:bg-slate-300"
              ></input>
            </div>

            <div className="w-full md:w-1/2 flex flex-col">
              <label className='dark:text-white' htmlFor="message">Message:</label>
              <input
                type="textarea"
                name="message"
                onChange={hadleInputChange}
                value={message}
                className="form-input px-4 py-3 rounded-full dark:bg-slate-300"
              ></input>
            </div>

            <button
              type="submit"
              className="w-1/2 bg-slate-300 p-4 rounded-full mt-4 text-lg font-semibold hover:bg-black hover:text-white dark:hover:bg-slate-600 dark:hover:text-white"
            >
              Send
            </button>
          </form>
        </section>
      </div>
    </Layout>
  )
}
