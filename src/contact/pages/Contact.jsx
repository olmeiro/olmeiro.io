import { Layout } from '../../layout/Layout'
import { MdOutlineMail } from 'react-icons/md'
import { BsTelephoneOutbound } from 'react-icons/bs'
import { useForm } from '../hooks/useForm'

const initialStateForm = {
  name: '',
  email: '',
  message: ''
}

export const Contact = () => {
  const { hadleInputChange, name, email, message } = useForm(initialStateForm)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ name, email, message })
  }

  return (
    <Layout>
      <div>
        <article className="flex flex-col items-center p-4 justify-center">
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
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center"
          >
            <div className="w-full md:w-1/2 flex flex-col">
              <label htmlFor="name">Name:</label>
              <input
                className="form-input px-4 py-3 rounded-full"
                type="text"
                name="name"
                onChange={hadleInputChange}
                value={name}
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                onChange={hadleInputChange}
                value={email}
                className="form-input px-4 py-3 rounded-full"
              ></input>
            </div>

            <div className="w-full md:w-1/2 flex flex-col">
              <label htmlFor="message">Message:</label>
              <input
                type="textarea"
                name="message"
                onChange={hadleInputChange}
                value={message}
                className="form-input px-4 py-3 rounded-full"
              ></input>
            </div>

            <button
              type="submit"
              className="w-1/2 bg-slate-300 p-4 rounded-full mt-4 text-lg font-semibold hover:bg-black hover:text-white"
            >
              Send
            </button>
          </form>
        </section>
      </div>
    </Layout>
  )
}
