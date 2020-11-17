import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary grey darken-3">
      <div className="card-content white-text">
        <span className="card-title ">{project.title}</span>
        <p>Posted by The {project.authorFirstName} {project.authorLastName}</p>
  <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default ProjectSummary
