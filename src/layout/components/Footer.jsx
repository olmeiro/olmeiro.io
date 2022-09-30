import { useTranslation } from 'react-i18next'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className="w-full flex flex-col justify-center items-center  p-2 md:flex-row   bg-slate-300">
      <div className="w-1/4 flex justify-center">
        <p className=" font-advent font-semibold">{t('footer.portfolio')}</p>
      </div>
      <div className="w-1/4 flex justify-center">
        <article className="flex flex-col justify-center ">
          <h4 className="text-center font-advent font-bold">Bogotá,Colombia</h4>
          <p className="text-center ">(+57) 313 525 7802</p>
          <footer className="font-advent font-bold">
            olme.orozco@gmail.com
          </footer>
        </article>
      </div>
      <div className="w-1/4 flex flex-row justify-center">
        <p className="font-advent font-bold">&copy;Olmeiro_orozco.2022.</p>
      </div>
      <div className="w-1/4 flex flex-row justify-center m-2">
        <a
          href={'https://www.linkedin.com/in/olmeiro-orozco-ortiz-694b551a7/'}
          target="_blank"
          rel="noreferrer"
          className="w-8"
        >
          <FaLinkedin />
        </a>
        <a
          href={'https://twitter.com/Olmeiro_orozco'}
          target="_blank"
          rel="noreferrer"
          className="w-8"
        >
          <FaTwitter />
        </a>
        <a
          href={'https://github.com/olmeiro'}
          target="_blank"
          rel="noreferrer"
          className="w-8"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  )
}
