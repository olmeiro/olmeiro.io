import { useRef, useState } from 'react'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'
import { MdOutlineMail } from 'react-icons/md'
import { BsTelephoneOutbound } from 'react-icons/bs'

import imageForm from '../../../public/images/imgform.png'
import { Layout } from '../../layout/Layout'
import { getEnvVariables } from '../helpers'
import { useForm } from '../hooks/useForm'

const { VITE_PUBLIC_KEY, VITE_SERVICE_ID, VITE_TEMPLATE_ID } = getEnvVariables()

const formData = {
  name: '',
  email: '',
  message: '',
  phone: ''
}

const formValidations = {
  name: [(value) => {
    const regex = /^[a-z\s]+$/i
    const regexName = regex.test(value)
    return regexName
  }, 'Escribe nombre y apellido. Sólo letras.'],
  email: [(value) => {
    const regex = /[a-z0-9]+[_a-z0-9/.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})/ig
    const regexEmail = regex.test(value)
    return regexEmail
  }, 'El email es incorrecto.'],
  phone: [(value) => {
    const regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
    const testRegex = regex.test(value)
    return testRegex
  }, 'El número de contacto es número móvil de 10 dígitos.'],
  message: [(value) => {
    if (value.length > 0) return true
  }, 'Ingresa un mensaje para Olme. Sólo letras.']
}

export const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { t } = useTranslation()
  const ref = useRef()
  const { name, email, phone, message, onInputChange, nameValid, emailValid, phoneValid, messageValid, onResetForm, isFormValid } = useForm(formData, formValidations)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    const templateParams = { name, email, message, phone }
    if (isFormValid) {
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
      setFormSubmitted(false)
      onResetForm()
    }
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
                onChange={onInputChange}
                value={name}
              />
              <span className='text-[10px] text-end text-red-600'>{formSubmitted && nameValid}</span>
            </div>

            <div className="w-full md:w-1/2 flex flex-col">
              <label className="dark:text-slate-100" htmlFor="email">
                {t('contact.email')}:
              </label>
              <input
                type="email"
                name="email"
                onChange={onInputChange}
                value={email}
                className="form-input px-4 py-3 rounded-full dark:bg-slate-300"
              />
              <span className='text-[10px] text-end text-red-600'>{formSubmitted && emailValid}</span>
            </div>

            <div className="w-full md:w-1/2 flex flex-col">
              <label className="dark:text-slate-100" htmlFor="message">
                {t('contact.phone')}:
              </label>
              <input
                type="number"
                name="phone"
                onChange={onInputChange}
                value={phone}
                className="form-input px-4 py-3 rounded-full dark:bg-slate-300"
              />
              <span className='text-[10px] text-end text-red-600'>{formSubmitted && phoneValid}</span>
            </div>

            <div className="w-full md:w-1/2 flex flex-col">
              <label className="dark:text-slate-100" htmlFor="message">
                {t('contact.message')}:
              </label>
              <input
                type="textarea"
                name="message"
                onChange={onInputChange}
                value={message}
                className="form-input px-4 py-3 rounded-full dark:bg-slate-300"
              />
              <span className='text-[10px] text-end text-red-600'>{formSubmitted && messageValid}</span>
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
