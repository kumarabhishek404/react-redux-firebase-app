import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section row">
      { projects && projects.map(project => {
        return (
          <Link to={'/project/' + project.id} key={project.id} className='col s12 m6 l6' >
            <ProjectSummary project={project} />
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectList
