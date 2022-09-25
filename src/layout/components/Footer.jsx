import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full flex flex-col md:flex-row justify-center items-center bg-slate-300">
      <div>
        <p className='font-semibold'>Porfolio</p>
      </div>
      <div className="w-full flex justify-center">
        <article className='flex flex-col justify-center '>
          <h4 className='text-center'>Bogotá,Colombia</h4>
          <p className='text-center'>(+57)-3135257802</p>
          <footer className='font-semibold'>olme.orozco@gmail.com</footer>
        </article>
      </div>
      <div>
        <p>&copy; Olmeiro_orozco.2022 All Right Reserved.</p>
      </div>
      <div>
        <Link>Linkedin</Link>
        <Link>Twitter</Link>
        <Link>GitHub</Link>
      </div>
    </div>
  )
}
