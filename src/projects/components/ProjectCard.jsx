import PropTypes from 'prop-types'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { MdDateRange } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

export const ProjectCard = ({ project }) => {
  const { t } = useTranslation()
  return (
    <div className="bg-white dark:bg-slate-700 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col w-full max-w-sm">
      <img src={project.image} alt="project preview" className="h-40 w-full object-cover" />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-advent font-bold mb-1 text-center dark:text-slate-100">{project.title}</h3>
        <p className="flex items-center justify-center text-xs gap-1 text-gray-500 dark:text-slate-300">
          <MdDateRange /> {project.date}
        </p>
        <p className="text-sm mt-2 text-center flex-1 dark:text-slate-100">{project.description}</p>
        <div className="mt-4">
          <h4 className="font-semibold text-center mb-2 dark:text-slate-100">{t('projects.technologies')}:</h4>
          <ul className="flex flex-wrap justify-center gap-2">
            {project.tecnologies.map((tech, idx) => (
              <li key={idx} className="text-xs px-2 py-1 border rounded dark:text-slate-100">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-around p-4 border-t border-gray-200 dark:border-slate-600">
        <a href={project.repo} target="_blank" rel="noreferrer" className="flex items-center gap-1 font-advent font-semibold hover:text-primary dark:text-slate-100">
          <FaGithub /> Repo
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1 font-advent font-semibold hover:text-primary dark:text-slate-100">
            <FiExternalLink /> Demo
          </a>
        )}
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    tecnologies: PropTypes.arrayOf(PropTypes.string),
    repo: PropTypes.string,
    demo: PropTypes.string
  })
}

export default ProjectCard
