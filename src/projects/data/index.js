import imgSocialTgl from '../../../public/images/tglsocialmedia.png'
import imgStar from '../../../public/images/starapi.png'
// import imgTopacio from '../../../public/images/eltopacio.png'
import imgAstro from '../../../public/images/astro.jpg'
import imgTrivia from '../../../public/images/trivia.png'

export const projects = [
  {
    title: 'Top Gun Lab Javascript: Social Media.',
    date: '21-07-2022',
    description:
      'Social Red Social TGL is a social network exclusively for students and employees of Team International, in order to provide information of interest about the company, courses or purposes.',
    image: imgSocialTgl,
    tecnologies: ['React', 'Node', 'Express', 'Vite', 'Vercel', 'Railways', 'Vite', 'Vercel', 'Railways'],
    repo: 'https://github.com/olmeiro/capstone-project-tgl',
    demo: 'https://capstone-project-tgl.vercel.app/auth/login'
  },
  {
    title: 'Star Wars App.',
    date: '16-06-2022',
    description:
      'Here I consumed api swapi with React. The deployment was made with Vercel. Amazing learning new tools.',
    image: imgStar,
    tecnologies: ['React', 'Create React App', 'Vercel', 'CSS', 'Tailwind'],
    repo: 'https://github.com/olmeiro/swapi-react',
    demo: 'https://swapi-react-two.vercel.app/'
  },
  {
    title: 'Trivia App.',
    date: '17-03-2022',
    description:
      'Here I create a trivia with React - Redux - Firebase and I consumed Open Trivia Database. ',
    image: imgTrivia,
    tecnologies: ['React', 'Create React App', 'Vercel', 'CSS', 'Redux', 'Firebase', 'api'],
    repo: 'https://github.com/olmeiro/Trivia-react-redux',
    demo: 'https://trivia-react-redux-pi.vercel.app/'
  },
  {
    title: 'Next project will be yours.',
    date: '2022-...',
    description:
      'I look forward to continue contributing and learning from the world of technology.',
    image: imgAstro,
    tecnologies: ['React', 'Node', 'Express', 'Vite', 'Vercel', 'Railways'],
    repo: 'https://github.com/olmeiro'
  }
]
