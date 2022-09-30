import { useRef } from 'react'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'
import { MdOutlineMail } from 'react-icons/md'
import { BsTelephoneOutbound } from 'react-icons/bs'

import imageForm from '../assets/imgform.png'
import { Layout } from '../../layout/Layout'
import { getEnvVariables } from '../helpers'
import { useForm } from '../hooks/useForm'

const { VITE_PUBLIC_KEY, VITE_SERVICE_ID, VITE_TEMPLATE_ID } = getEnvVariables()

const initialStateForm = {
  name: '',
  email: '',
  message: '',
  phone: ''
}

export const Contact = () => {
  const { t } = useTranslation()
  const ref = useRef()
  const { hadleInputChange, name, email, message, phone, reset } =
    useForm(initialStateForm)

  const handleSubmit = (e) => {
    e.preventDefault()
    const templateParams = { name, email, message, phone }

    emailjs
      .send(
        `${VITE_SERVICE_ID}`,
        `${VITE_TEMPLATE_ID}`,
        templateParams,
        `${VITE_PUBLIC_KEY}`
      )
      .then(
        (response) => {
          Swal.fire({
            title: 'Excellent!',
            text: 'I will be contacting you soon..',
            imageUrl: `${imageForm}`,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'image logo olme'
          })
        },
        (err) => {
          Swal.fire('Try it again. Something was wrong!', err)
        }
      )

    reset()
  }

  return (
    <Layout>
      <div className="p-4 dark:bg-slate-800">
        <article className="flex flex-col items-center p-4 justify-center dark:text-slate-100">
          <h2 className="font-advent font-semibold text-4xl text-left">
            {t('contact.title')}
          </h2>
          <p className="font-dmsans text-left text-lg p-4">
            {t('contact.paragraph')}
          </p>
          <p className="font-dmsans text-left text-lg p-4">
            {t('contact.footer')}
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
              <label className="dark:text-slate-100" htmlFor="name">
                {t('contact.name')}:
              </label>
              <input
                className="form-input px-4 py-3 rounded-full dark:bg-slate-300"
                type="text"
                name="name"
                onChange={hadleInputChange}
                value={name}
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col">
              <label className="dark:text-slate-100" htmlFor="email">
                {t('contact.email')}:
              </label>
              <input
                type="email"
                name="email"
                onChange={hadleInputChange}
                value={email}
                className="form-input px-4 py-3 rounded-full dark:bg-slate-300"
              ></input>
            </div>

            <div className="w-full md:w-1/2 flex flex-col">
              <label className="dark:text-slate-100" htmlFor="message">
                {t('contact.phone')}:
              </label>
              <input
                type="number"
                name="phone"
                onChange={hadleInputChange}
                value={phone}
                className="form-input px-4 py-3 rounded-full dark:bg-slate-300"
              ></input>
            </div>

            <div className="w-full md:w-1/2 flex flex-col">
              <label className="dark:text-slate-100" htmlFor="message">
                {t('contact.message')}:
              </label>
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
              {t('contact.btnForm')}
            </button>
          </form>
        </section>
      </div>
    </Layout>
  )
}
