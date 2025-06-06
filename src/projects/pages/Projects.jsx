import { useTranslation } from 'react-i18next'

import { Layout } from '../../layout/Layout'
import { projects } from '../data'
import ProjectCard from '../components/ProjectCard'

export const Projects = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <div className="p-4 dark:bg-slate-800">
        <h2 className="text-4xl md:text-5xl text-center p-4 font-advent font-extrabold leading-snug dark:text-slate-100">
          {t('projects.title')} {projects.length}
        </h2>
        <div className="grid gap-6 place-items-center sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects
