import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    title,
    projectTitle,
    duration,
    projectUrl,
    imageUrl,
    description,
  } = projectDetails
  return (
    <div className="chrono-container">
      <img src={imageUrl} alt="project" className="project-image" />
      <h1>{projectTitle}</h1>
      <AiFillCalendar />
      <p>{duration}</p>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}
export default ProjectTimelineCard
