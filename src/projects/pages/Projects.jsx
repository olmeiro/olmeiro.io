import { FaGithub } from 'react-icons/fa'
import { Layout } from '../../layout/Layout'
import { projects } from '../data'

export const Projects = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl text-center  font-advent font-extrabold leading-snug">
          Projects: {projects.length}
        </h2>
        <section className="flex flex-col justify-center items-center gap-4 flex-wrap md:flex-row mt-3">
          {projects.map((project, idx) => {
            return (
              <div
                key={idx + 1}
                className="w-72 md:w-96 h-auto md:h-1/2 mb-3 border border-solid divide-black  outline-2 rounded-lg shadow-xl"
              >
                <img
                  className="rounded-t-md w-72 h-44 md:w-full md:h-72"
                  src={project.image}
                  alt="image project"
                />
                <div>
                  <h2 className="flex justify-center items-center h-20 text-2xl md:text-4xl text-center m-3 font-advent font-extrabold leading-snug">
                    {project.title}
                  </h2>
                  <p className="flex justify-end text-xs font-dmsans font-semibold m-3">
                    {project.date}
                  </p>
                </div>
                <p className="h-44 font-dmsans m-3 subpixel-antialiased tracking-wider leading-relaxed text-center md:text-left">
                  {project.description}
                </p>
                <section className="h-32">
                  <div className="flex flex-row justify-center gap-3 flex-wrap">
                    <h3 className="font-semibold">Technologies:</h3>
                    <div className=" flex justify-center gap-4 flex-wrap">
                      {project.tecnologies.map((tech, idx) => {
                        return (
                          <span
                            key={idx + 1}
                            className="font-advent font-bold text-xs p-1 mb-3 border border-solid border-blue-200 rounded"
                          >
                            {tech}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                </section>
                <p className="text-sm font-advent font-semibold m-3 flex items-center justify-end gap-3">
                  Repo:
                  <a href={project.repo} target="_blank" rel="noreferrer" className=''><FaGithub /></a>
                </p>
              </div>
            )
          })}
        </section>
      </div>
    </Layout>
  )
}
