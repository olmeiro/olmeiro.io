import { FaGithub } from 'react-icons/fa'
import { MdDateRange } from 'react-icons/md'
import { Layout } from '../../layout/Layout'
import { projects } from '../data'

export const Projects = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center dark:bg-slate-800">
        <h2 className="text-4xl md:text-5xl text-center p-4  font-advent font-extrabold leading-snug dark:text-slate-100">
          Projects: {projects.length}
        </h2>
        <section className="flex flex-col justify-center items-center gap-4 flex-wrap md:flex-row mt-3">
          {projects.map((project, idx) => {
            return (
              <div
                key={idx + 1}
                className="w-72 md:w-72 h-auto md:h-1/2 mb-3 border border-solid divide-black  outline-2 rounded-lg shadow-xl dark:bg-slate-700"
              >
                <img
                  className="rounded-t-md w-72 h-44 "
                  src={project.image}
                  alt="image project"
                />
                <div>
                  <h2 className="flex justify-center items-center h-12 mt-3 p-4 text-xl md:text-xl text-center font-dmsans font-bold leading-snug dark:text-slate-100">
                    {project.title}
                  </h2>
                  <p className="flex justify-end font-dmsans text-xs m-3 dark:text-slate-100">
                    <i>{<MdDateRange/>}</i>{project.date}
                  </p>
                </div>
                <p className="h-28 font-dmsans text-xs m-4 subpixel-antialiased tracking-wider leading-relaxed text-center dark:text-slate-100">
                  {project.description}
                </p>
                <section className="h-32">
                  <div className="flex flex-row justify-center gap-3 flex-wrap">
                    <h3 className="font-semibold dark:text-slate-100">Technologies:</h3>
                    <div className=" flex justify-center gap- flex-wrap">
                      {project.tecnologies.map((tech, idx) => {
                        return (
                          <span
                            key={idx + 1}
                            className="font-advent font-bold text-xs p-1 mb-3 border border-solid border-blue-200 rounded dark:text-slate-100"
                          >
                            {tech}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                </section>
                <p className="text-base font-advent font-semibold m-3 flex items-center justify-end gap-3 dark:text-slate-100">
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
